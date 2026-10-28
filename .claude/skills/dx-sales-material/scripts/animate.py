"""DX subtle animation pass for .pptx decks (default for every deck made with this skill).

Adds to every slide:
  * a soft Fade slide transition (medium speed), and
  * staggered, auto-playing Fade entrances for the slide's content blocks.

Usage:
    python3 animate.py input.pptx output.pptx [--step 180] [--dur 500]

Grouping:
  * Named mode (preferred): shapes whose name is ``anim-<group>-<n>`` (e.g. set
    pptxgenjs ``objectName``) appear group by group: group 1 first, then 2, ...
    Shapes not named ``anim-`` stay static (backgrounds, logo, page number).
  * Auto mode (slides with no ``anim-`` names): every top-level shape, picture,
    table or group appears in reading order, grouped into rows by its top edge.
    Full-bleed backgrounds (>= 90% of the slide), the top-right logo zone and
    the page-number zone stay static.

Existing transitions and timing on a slide are replaced, so it is safe to
re-run. Slide order, content and layout are not touched.
"""
import argparse, os, re, shutil, tempfile, zipfile

ANIM_NAME = re.compile(r'name="anim-(\d+)-\d+"')
SHAPE = re.compile(r'<(p:sp|p:pic|p:graphicFrame|p:grpSp|p:cxnSp)>(.*?)</\1>', re.S)


def effect(ids, spid, delay, dur):
    a, b, c = ids
    return (f'<p:par><p:cTn id="{a}" presetID="10" presetClass="entr" presetSubtype="0" fill="hold" grpId="0" nodeType="withEffect">'
            f'<p:stCondLst><p:cond delay="{delay}"/></p:stCondLst><p:childTnLst>'
            f'<p:set><p:cBhvr><p:cTn id="{b}" dur="1" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst></p:cTn>'
            f'<p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl><p:attrNameLst><p:attrName>style.visibility</p:attrName></p:attrNameLst></p:cBhvr>'
            f'<p:to><p:strVal val="visible"/></p:to></p:set>'
            f'<p:animEffect transition="in" filter="fade"><p:cBhvr><p:cTn id="{c}" dur="{dur}"/>'
            f'<p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl></p:cBhvr></p:animEffect></p:childTnLst></p:cTn></p:par>')


def top_level_shapes(xml):
    """Yield (tag, inner) for direct children of spTree, skipping nested shapes."""
    tree = re.search(r'<p:spTree>(.*)</p:spTree>', xml, re.S)
    if not tree:
        return []
    body, out, i = tree.group(1), [], 0
    open_re = re.compile(r'<(p:sp|p:pic|p:graphicFrame|p:grpSp|p:cxnSp)>')
    while True:
        m = open_re.search(body, i)
        if not m:
            break
        tag = m.group(1)
        depth, j = 0, m.start()
        tok = re.compile(rf'<{tag}>|</{tag}>')
        for t in tok.finditer(body, m.start()):
            depth += 1 if t.group(0)[1] != '/' else -1
            if depth == 0:
                j = t.end()
                break
        out.append((tag, body[m.start():j]))
        i = j
    return out


def items_for(xml, sw, sh):
    named = []
    for tag, block in top_level_shapes(xml):
        idm = re.search(r'<p:cNvPr id="(\d+)" name="([^"]*)"', block)
        if not idm:
            continue
        nm = ANIM_NAME.search(f'name="{idm.group(2)}"')
        if nm:
            named.append((int(nm.group(1)), idm.group(1), tag == 'p:sp'))
    if named:
        return named
    auto = []
    for tag, block in top_level_shapes(xml):
        idm = re.search(r'<p:cNvPr id="(\d+)"', block)
        off = re.search(r'<a:off x="(-?\d+)" y="(-?\d+)"/>\s*<a:ext cx="(\d+)" cy="(\d+)"/>', block)
        if not idm or not off:
            continue
        x, y, w, h = map(int, off.groups())
        if w * h >= 0.9 * sw * sh:            # background
            continue
        if x > 0.8 * sw and y < 0.12 * sh and h < 0.12 * sh:   # logo, top-right
            continue
        if x < 0.1 * sw and y > 0.85 * sh:    # page number, bottom-left
            continue
        auto.append((y // int(sh * 0.11) + 1, idm.group(1), tag == 'p:sp'))
    return auto


def timing_xml(items, step, dur):
    groups = sorted({g for g, _, _ in items})
    rank = {g: i for i, g in enumerate(groups)}
    nid, pars = 5, []
    for g, spid, _ in items:
        pars.append(effect((nid, nid + 1, nid + 2), spid, rank[g] * step, dur))
        nid += 3
    bld = ''.join(f'<p:bldP spid="{spid}" grpId="0" animBg="1"/>' for _, spid, sp in items if sp)
    return ('<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>'
            '<p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq"><p:childTnLst>'
            '<p:par><p:cTn id="3" fill="hold"><p:stCondLst><p:cond delay="indefinite"/><p:cond evt="onBegin" delay="0"><p:tn val="2"/></p:cond></p:stCondLst><p:childTnLst>'
            '<p:par><p:cTn id="4" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>'
            + ''.join(pars) +
            '</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par>'
            '</p:childTnLst></p:cTn><p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst>'
            '<p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst></p:seq>'
            '</p:childTnLst></p:cTn></p:par></p:tnLst>' + (f'<p:bldLst>{bld}</p:bldLst>' if bld else '') + '</p:timing>')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('src'); ap.add_argument('dst')
    ap.add_argument('--step', type=int, default=180, help='ms between groups')
    ap.add_argument('--dur', type=int, default=500, help='fade duration ms')
    a = ap.parse_args()
    tmp = tempfile.mkdtemp()
    with zipfile.ZipFile(a.src) as z:
        names = z.namelist(); z.extractall(tmp)
    pres = open(os.path.join(tmp, 'ppt/presentation.xml'), encoding='utf-8').read()
    sz = re.search(r'<p:sldSz cx="(\d+)" cy="(\d+)"', pres)
    sw, sh = int(sz.group(1)), int(sz.group(2))
    slides = sorted([n for n in names if re.fullmatch(r'ppt/slides/slide\d+\.xml', n)], key=lambda s: int(re.search(r'(\d+)', s.split('/')[-1]).group(1)))
    for n in slides:
        p = os.path.join(tmp, n)
        x = open(p, encoding='utf-8').read()
        x = re.sub(r'<mc:AlternateContent[^>]*>(?:(?!</mc:AlternateContent>).)*<p:transition.*?</mc:AlternateContent>|<p:transition.*?</p:transition>|<p:transition[^>]*/>|<p:timing>.*?</p:timing>', '', x, flags=re.S)
        items = items_for(x, sw, sh)
        add = '<p:transition spd="med"><p:fade/></p:transition>' + (timing_xml(items, a.step, a.dur) if items else '')
        if '</p:clrMapOvr>' in x:
            x = x.replace('</p:clrMapOvr>', '</p:clrMapOvr>' + add, 1)
        else:
            x = x.replace('</p:cSld>', '</p:cSld>' + add, 1)
        open(p, 'w', encoding='utf-8').write(x)
        print(f'{n.split("/")[-1]}: {len(items)} animated shapes in {len({g for g, _, _ in items})} groups')
    if os.path.exists(a.dst):
        os.remove(a.dst)
    with zipfile.ZipFile(a.dst, 'w', zipfile.ZIP_DEFLATED) as z:
        order = ['[Content_Types].xml'] + [n for n in names if n != '[Content_Types].xml']
        for n in order:
            if not n.endswith('/'):
                z.write(os.path.join(tmp, n), n)
    shutil.rmtree(tmp)


if __name__ == '__main__':
    main()
