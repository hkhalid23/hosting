// Mughal miniature / fresco art direction for the invitation (?theme=mughal).
// Loaded after the main script, before it boots: it swaps palettes, background,
// frame, lanterns and florals, and adds a Mughal garden skyline with a peacock.
(() => {
  const EMERALD = '#1d4a36', EMERALD_D = '#14382a', MAROON = '#7a1a2a', GOLD = '#a67c32', INK = '#3f2c1e';

  // ---------- type & colour ----------
  document.head.insertAdjacentHTML('beforeend', `<style>
    :root { --ivory: #efe2c6; --rose: ${MAROON}; --gold: ${GOLD}; --ink: ${INK}; --emerald: ${EMERALD}; }
    body.render, #stage { background: #e9dcbd; }
    .bismillah { color: ${EMERALD}; font-weight: 700; }
    .caps { color: ${EMERALD}; }
    .caps.ink { color: ${INK}; }
    .label { color: ${GOLD} !important; }
    .names { text-shadow: none; }
    .names .em { color: ${EMERALD}; }
    .dateblock .side { border-color: ${GOLD}; }
    #lscape { position: absolute; left: 0; top: 1610px; width: 1080px; height: 360px;
      -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 18%); }
  </style>`);
  const names = document.querySelector('#s1 .names');
  if (names) names.innerHTML = 'Mehtab <span class="amp">&amp;</span> <span class="em">Hamza</span>';
  const wreath = document.getElementById('wreath');
  if (wreath) wreath.style.top = '1085px';
  window.WREATH_SCALE = .78;

  // miniature-painting palettes (same names, so every flower in the page picks them up)
  Object.assign(PAL, {
    blush: ['#7d1424', '#b8363f', '#dc7d72'],
    rose:  ['#4f0a16', '#86182a', '#b5404a'],
    peach: ['#9a5a22', '#cf9348', '#f1d49c'],
    cream: ['#a08656', '#ece0c2', '#fffaf0'],
  });
  petals.forEach((p, i) => { p.col = i % 3 ? ['#9c2433', '#d4706c'] : ['#e8dcc0', '#fffaf0']; });

  // miniature painting: every petal gets a firm dark outline
  const baseFlower = flower;
  window.flower = (...a) => baseFlower(...a).replace(/stroke-opacity=".35" stroke-width="1.4"/g, 'stroke-opacity=".85" stroke-width="1.3"')
    .replace(/opacity=".22" filter="url\(#bleed\)"/, 'opacity=".12" filter="url(#bleed)"');

  // crisper paint: almost no watercolour wobble, a faint pigment bleed
  window.svgWrap = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <filter id="wc" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="2" seed="7" result="n"/>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2.5"/>
      </filter>
      <filter id="bleed" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
    </defs><g filter="url(#wc)">${body}</g></svg>`;

  // dark miniature leaves with a fine light vein
  window.leafSprig = (x, y, len, ang, r, tone = 0) => {
    const cols = [['#1f4a30', '#4f7d4c'], ['#2d5a36', '#6b9157'], ['#173d2a', '#3f6b45']][tone];
    const id = 'l' + (gid++);
    let s = `<defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${cols[0]}"/><stop offset="1" stop-color="${cols[1]}"/></linearGradient></defs>`;
    s += `<g transform="translate(${x},${y}) rotate(${ang})">`;
    const bend = (r() - .5) * len * .3;
    s += `<path d="M0,0 Q${bend},${-len / 2} 0,${-len}" fill="none" stroke="#3a2a1a" stroke-width="2.4"/>`;
    const n = Math.floor(len / 34);
    for (let i = 1; i <= n; i++) {
      const k = i / (n + 1), py = -len * k, px = bend * 2 * k * (1 - k);
      const sz = (1 - k * .5) * (len * .12 + r() * 8);
      for (const side of [-1, 1]) {
        const a = side * (40 + r() * 25);
        s += `<g transform="translate(${px},${py}) rotate(${a})"><path d="M0,0 C${sz * .6},${-sz * .4} ${sz * .5},${-sz * 1.4} 0,${-sz * 1.9} C${-sz * .5},${-sz * 1.4} ${-sz * .6},${-sz * .4} 0,0 Z" fill="url(#${id})" stroke="#13301f" stroke-width=".8"/>
          <path d="M0,0 L0,${-sz * 1.6}" stroke="#c9d8a8" stroke-width=".8" opacity=".7"/></g>`;
      }
    }
    return s + '</g>';
  };

  // ---------- parchment / fresco ground ----------
  window.drawBackground = () => {
    const c = document.getElementById('bg'), g = c.getContext('2d'), r = rng(11);
    g.fillStyle = '#ecdfc1'; g.fillRect(0, 0, 1080, 1920);
    for (let i = 0; i < 70; i++) {              // mottled pigment stains
      const x = r() * 1080, y = r() * 1920, rad = 80 + r() * 260;
      const grd = g.createRadialGradient(x, y, 0, x, y, rad);
      const col = r() < .5 ? '201,170,120' : '250,240,215';
      grd.addColorStop(0, `rgba(${col},${.08 + r() * .1})`); grd.addColorStop(1, `rgba(${col},0)`);
      g.fillStyle = grd; g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
    }
    g.strokeStyle = 'rgba(120,90,50,.08)'; g.lineWidth = 1;   // hairline fresco cracks
    for (let i = 0; i < 40; i++) {
      let x = r() * 1080, y = r() * 1920; g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 6; k++) { x += (r() - .5) * 60; y += (r() - .3) * 50; g.lineTo(x, y); }
      g.stroke();
    }
    const img = g.getImageData(0, 0, 1080, 1920), d = img.data;
    for (let i = 0; i < d.length; i += 4) { const n = (r() - .5) * 14; d[i] += n; d[i + 1] += n; d[i + 2] += n * .8; }
    g.putImageData(img, 0, 0);

    const v = document.getElementById('vignette').getContext('2d');
    const vg = v.createRadialGradient(540, 960, 520, 540, 960, 1250);
    vg.addColorStop(0, 'rgba(80,50,20,0)'); vg.addColorStop(1, 'rgba(80,50,20,0.28)');
    v.fillStyle = vg; v.fillRect(0, 0, 1080, 1920);
    const vimg = v.getImageData(0, 0, 1080, 1920), vd = vimg.data;   // grain over everything, incl. the frame
    for (let i = 0; i < vd.length; i += 4) if (r() < .05) { vd[i] = 60; vd[i + 1] = 40; vd[i + 2] = 20; vd[i + 3] = Math.max(vd[i + 3], 18); }
    v.putImageData(vimg, 0, 0);
  };

  // ---------- emerald frame with a cusped (multifoil) Mughal arch ----------
  function cusped(L, R, S, T, B, n) {
    const bez = (p, u) => { const m = 1 - u; return [0, 1].map(k => m * m * m * p[0][k] + 3 * m * m * u * p[1][k] + 3 * m * u * u * p[2][k] + u * u * u * p[3][k]); };
    const left = [[L, S], [L, S - 190], [520 - (L - 80) * .3, T + 150], [540, T]];
    const pts = [];
    for (let i = 0; i <= n; i++) pts.push(bez(left, i / n));
    for (let i = n - 1; i >= 0; i--) pts.push([1080 - pts[i][0], pts[i][1]]);
    let d = `M${L},${B} L${L},${S}`;
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], ch = Math.hypot(x1 - x0, y1 - y0);
      d += ` A${ch * .62},${ch * .62} 0 0 1 ${x1.toFixed(1)},${y1.toFixed(1)}`;
    }
    return d + ` L${R},${B}`;
  }
  window.buildArch = () => {
    const svg = document.getElementById('arch');
    const open = cusped(84, 996, 520, 150, 2000, 6);
    svg.innerHTML = `
    <defs>
      <linearGradient id="goldg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#8a6428"/><stop offset=".45" stop-color="#d9b866"/>
        <stop offset=".55" stop-color="#f0dc9c"/><stop offset="1" stop-color="#94692b"/>
      </linearGradient>
      <pattern id="mpat" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M32,14 C38,22 38,26 32,32 C26,26 26,22 32,14 Z M32,50 C38,42 38,38 32,32 C26,38 26,42 32,50 Z
                 M14,32 C22,26 26,26 32,32 C26,38 22,38 14,32 Z M50,32 C42,26 38,26 32,32 C38,38 42,38 50,32 Z" fill="#c9a24d" opacity=".55"/>
        <circle cx="32" cy="32" r="3" fill="#e8cf8a" opacity=".7"/>
        <path d="M0,0 Q8,10 0,18 M64,0 Q56,10 64,18 M0,64 Q8,54 0,46 M64,64 Q56,54 64,46" stroke="#c9a24d" stroke-width="1.5" fill="none" opacity=".45"/>
        <circle cx="0" cy="0" r="2.5" fill="#c9a24d" opacity=".6"/><circle cx="64" cy="0" r="2.5" fill="#c9a24d" opacity=".6"/>
        <circle cx="0" cy="64" r="2.5" fill="#c9a24d" opacity=".6"/><circle cx="64" cy="64" r="2.5" fill="#c9a24d" opacity=".6"/>
      </pattern>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14"/></filter>
    </defs>
    <g id="frame" opacity="0">
      <path d="M0,0 H1080 V1920 H0 Z ${open} Z" fill="${EMERALD}" fill-rule="evenodd"/>
      <path d="M0,0 H1080 V1920 H0 Z ${open} Z" fill="url(#mpat)" fill-rule="evenodd"/>
      <rect x="18" y="18" width="1044" height="1884" fill="none" stroke="url(#goldg)" stroke-width="3"/>
      <rect x="30" y="30" width="1020" height="1860" fill="none" stroke="url(#goldg)" stroke-width="1.2"/>
    </g>
    <path id="archfill" d="${open} Z" fill="#f4ead2" opacity="0"/>
    <path id="archshadow" d="${open} Z" fill="none" stroke="${EMERALD_D}" stroke-width="26" opacity="0" filter="url(#soft)"/>
    <path class="aline" d="${open}" fill="none" stroke="url(#goldg)" stroke-width="7"/>
    <path class="aline" d="${cusped(102, 978, 532, 176, 2000, 6)}" fill="none" stroke="url(#goldg)" stroke-width="2"/>
    <g id="finial" opacity="0">
      <path d="M540,150 L540,112" stroke="url(#goldg)" stroke-width="3"/>
      <path d="M520,112 Q540,72 560,112 Z" fill="url(#goldg)"/>
      <circle cx="540" cy="66" r="7" fill="url(#goldg)"/><path d="M540,38 L546,58 L534,58 Z" fill="url(#goldg)"/>
    </g>`;
    for (const p of svg.querySelectorAll('.aline')) { const L = p.getTotalLength(); p.dataset.len = L; p.style.strokeDasharray = L; }
  };

  // ---------- hanging Mughal lanterns (reuse the strand swing animation) ----------
  STRANDS.splice(0, STRANDS.length, { x: 196, len: 300, ph: 0 }, { x: 884, len: 300, ph: 2.3 });
  const glows = [];
  window.buildStrands = () => {
    const host = document.getElementById('strands');
    STRANDS.forEach((s, i) => {
      const c = s.len;   // chain length; lantern body below it
      const el = document.createElement('div');
      el.className = 'strand'; el.style.left = (s.x - 60) + 'px';
      el.innerHTML = `<svg width="120" height="${c + 200}" viewBox="0 0 120 ${c + 200}">
        <defs>
          <linearGradient id="lg${i}" x1="0" x2="1"><stop offset="0" stop-color="#7d5a22"/><stop offset=".5" stop-color="#ecd28c"/><stop offset="1" stop-color="#7d5a22"/></linearGradient>
          <radialGradient id="lw${i}" cx=".5" cy=".55"><stop offset="0" stop-color="#fff6d0"/><stop offset=".6" stop-color="#f7c95e"/><stop offset="1" stop-color="#d9902e"/></radialGradient>
          <radialGradient id="lh${i}"><stop offset="0" stop-color="#ffd77a" stop-opacity=".65"/><stop offset="1" stop-color="#ffd77a" stop-opacity="0"/></radialGradient>
        </defs>
        <path d="M60,0 L60,${c}" stroke="#a67c32" stroke-width="2.5" stroke-dasharray="7 4"/>
        <circle class="glow" cx="60" cy="${c + 92}" r="70" fill="url(#lh${i})"/>
        <circle cx="60" cy="${c + 4}" r="6" fill="none" stroke="url(#lg${i})" stroke-width="3"/>
        <path d="M44,${c + 34} Q60,${c} 76,${c + 34} Z" fill="url(#lg${i})"/>
        <rect x="38" y="${c + 34}" width="44" height="8" rx="2" fill="url(#lg${i})"/>
        <path d="M40,${c + 42} L80,${c + 42} L86,${c + 70} L82,${c + 132} L38,${c + 132} L34,${c + 70} Z" fill="url(#lw${i})"/>
        <path d="M40,${c + 42} L80,${c + 42} L86,${c + 70} L82,${c + 132} L38,${c + 132} L34,${c + 70} Z
                 M60,${c + 42} L60,${c + 132} M47,${c + 42} L44,${c + 132} M73,${c + 42} L76,${c + 132}
                 M35,${c + 72} L85,${c + 72} M37,${c + 102} L83,${c + 102}" fill="none" stroke="url(#lg${i})" stroke-width="3"/>
        <path d="M49,${c + 72} Q53,${c + 58} 57,${c + 72} M63,${c + 72} Q67,${c + 58} 71,${c + 72}" stroke="#8a6428" stroke-width="1.6" fill="none"/>
        <path d="M60,${c + 96} C64,${c + 88} 63,${c + 82} 60,${c + 78} C57,${c + 82} 56,${c + 88} 60,${c + 96} Z" fill="#fff" opacity=".9"/>
        <path d="M36,${c + 132} L84,${c + 132} L66,${c + 160} L54,${c + 160} Z" fill="url(#lg${i})"/>
        <circle cx="60" cy="${c + 168}" r="7" fill="url(#lg${i})"/>
        <path d="M60,${c + 176} L65,${c + 194} L55,${c + 194} Z" fill="${MAROON}"/>
      </svg>`;
      host.appendChild(el); s.el = el; glows.push(el.querySelector('.glow'));
    });
  };

  // ---------- miniature florals: crimson roses, ivory blooms, dark leaves ----------
  CLUSTERS.splice(0, CLUSTERS.length,
    { id: 'tl', w: 460, h: 420, left: -40, top: -40, ox: '8%', oy: '8%', layer: 'front', delay: 0.2,
      build: r => leafSprig(120, 110, 250, 130, r, 0) + leafSprig(90, 130, 220, 165, r, 2) + leafSprig(170, 100, 210, 100, r, 1) +
        flower(120, 120, 92, 'blush', r, 'rose') + flower(250, 80, 56, 'cream', r, 'peony') + flower(80, 260, 54, 'cream', r, 'blossom') +
        flower(230, 200, 40, 'rose', r, 'rose') + flower(340, 120, 28, 'cream', r, 'blossom') + dots(220, 220, 10, 160, r) },
    { id: 'tr', w: 460, h: 420, left: 660, top: -40, ox: '92%', oy: '8%', layer: 'front', delay: 0.5,
      build: r => leafSprig(340, 110, 250, -130, r, 0) + leafSprig(370, 130, 220, -165, r, 2) + leafSprig(290, 100, 210, -100, r, 1) +
        flower(340, 120, 92, 'rose', r, 'rose') + flower(210, 80, 56, 'cream', r, 'peony') + flower(380, 260, 54, 'cream', r, 'blossom') +
        flower(230, 200, 40, 'blush', r, 'rose') + flower(120, 120, 28, 'cream', r, 'blossom') + dots(240, 220, 10, 160, r) },
    { id: 'bl', w: 420, h: 420, left: -90, top: 1560, ox: '15%', oy: '90%', layer: 'front', delay: 0.8,
      build: r => leafSprig(150, 400, 280, 25, r, 0) + leafSprig(220, 410, 240, 60, r, 1) +
        flower(140, 320, 100, 'blush', r, 'rose') + flower(280, 360, 60, 'cream', r, 'peony') + flower(120, 180, 50, 'cream', r, 'blossom') + dots(250, 300, 10, 180, r) },
    { id: 'br', w: 480, h: 480, left: 690, top: 1500, ox: '85%', oy: '90%', layer: 'front', delay: 1.0,
      build: r => leafSprig(330, 460, 320, -25, r, 0) + leafSprig(250, 470, 260, -60, r, 1) + leafSprig(380, 440, 260, -5, r, 2) +
        flower(330, 360, 110, 'rose', r, 'rose') + flower(180, 400, 70, 'cream', r, 'peony') + flower(360, 190, 56, 'cream', r, 'blossom') +
        flower(220, 270, 44, 'blush', r, 'rose') + dots(240, 320, 12, 200, r) },
  );

  // ---------- Mughal garden skyline + peacock ----------
  function landscapeSVG() {
    const ol = '#6b4a2e';
    const onion = (cx, by, w, h, fill) => `<path d="M${cx - w / 2},${by} C${cx - w * .62},${by - h * .45} ${cx - w * .3},${by - h * .7} ${cx},${by - h} C${cx + w * .3},${by - h * .7} ${cx + w * .62},${by - h * .45} ${cx + w / 2},${by} Z" fill="${fill}" stroke="${ol}" stroke-width="1.4"/>
      <path d="M${cx},${by - h} L${cx},${by - h - 14}" stroke="#b08a3e" stroke-width="2"/><circle cx="${cx}" cy="${by - h - 16}" r="2.5" fill="#b08a3e"/>`;
    const minaret = x => `<rect x="${x - 8}" y="90" width="16" height="160" fill="#e3c9a0" stroke="${ol}" stroke-width="1.2"/>
      <rect x="${x - 12}" y="130" width="24" height="5" fill="#cfae7e" stroke="${ol}" stroke-width=".8"/><rect x="${x - 12}" y="180" width="24" height="5" fill="#cfae7e" stroke="${ol}" stroke-width=".8"/>
      <rect x="${x - 11}" y="80" width="22" height="12" fill="#e3c9a0" stroke="${ol}" stroke-width="1"/>${onion(x, 80, 22, 22, '#f1e6d2')}`;
    const cypress = (x, h) => `<path d="M${x},250 C${x - 14},${250 - h * .4} ${x - 10},${250 - h * .8} ${x},${250 - h} C${x + 10},${250 - h * .8} ${x + 14},${250 - h * .4} ${x},250 Z" fill="#2c5434" stroke="#173322" stroke-width="1.2"/>
      <path d="M${x},${250 - h * .9} L${x},248" stroke="#4d7a4f" stroke-width="1" opacity=".7"/>`;
    const tree = (x, y, s) => {
      let t = `<rect x="${x - 3}" y="${y}" width="6" height="${40 * s}" fill="#5a3e26"/>`;
      [[-18, -10, 22], [16, -12, 20], [0, -26, 24], [-8, 6, 18], [12, 4, 18]].forEach(([dx, dy, rr], k) =>
        t += `<circle cx="${x + dx * s}" cy="${y + dy * s}" r="${rr * s}" fill="${['#3f6b3c', '#4f7d45', '#365f36'][k % 3]}" stroke="#1f3d24" stroke-width="1"/>`);
      return t;
    };
    let arches = '';
    for (let x = 398; x < 690; x += 24) arches += `<path d="M${x},248 L${x},232 Q${x + 8},222 ${x + 16},232 L${x + 16},248 Z" fill="#b98b5c" opacity=".8"/>`;
    let bed = '';
    for (let i = 0; i < 18; i++) { const x = 380 + i * 18; bed += `<circle cx="${x}" cy="${262 + (i % 2) * 6}" r="3" fill="${i % 3 ? '#a3202f' : '#fff6e0'}"/>`; }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="360" viewBox="0 0 1080 360">
      <defs>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a7b06e"/><stop offset="1" stop-color="#7f8c50"/></linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9d3cf"/><stop offset="1" stop-color="#86b0ae"/></linearGradient>
        <linearGradient id="pcBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f7fb0"/><stop offset="1" stop-color="#173f78"/></linearGradient>
      </defs>
      ${tree(120, 200, 1.1)}${tree(210, 210, .9)}${tree(960, 200, 1.1)}${tree(870, 210, .9)}
      ${cypress(320, 130)}${cypress(350, 110)}${cypress(730, 110)}${cypress(760, 130)}
      ${minaret(400)}${minaret(680)}
      <rect x="390" y="212" width="300" height="38" fill="#d9b585" stroke="${ol}" stroke-width="1.2"/>${arches}
      <rect x="450" y="150" width="180" height="64" fill="#e8d1aa" stroke="${ol}" stroke-width="1.2"/>
      <path d="M520,214 L520,180 Q540,150 560,180 L560,214 Z" fill="#b98b5c" stroke="${ol}" stroke-width="1"/>
      <path d="M470,214 L470,192 Q480,180 490,192 L490,214 Z M590,214 L590,192 Q600,180 610,192 L610,214 Z" fill="#c79e70"/>
      <rect x="494" y="138" width="92" height="14" fill="#e3c9a0" stroke="${ol}" stroke-width="1"/>
      ${onion(540, 140, 104, 96, '#f3eadb')}${onion(470, 152, 34, 32, '#f3eadb')}${onion(610, 152, 34, 32, '#f3eadb')}
      <rect x="0" y="248" width="1080" height="112" fill="url(#ground)"/>
      <path d="M520,250 L560,250 L620,360 L460,360 Z" fill="url(#water)"/>
      <path d="M530,270 L550,270 M520,300 L560,300 M510,330 L570,330" stroke="#e6f1ee" stroke-width="2" opacity=".8"/>
      ${bed}
      <g id="peacock" transform="translate(196,186)">
        <path d="M60,96 C20,108 -40,120 -70,150 C-30,150 20,140 70,112 Z" fill="#2f6b4f" stroke="#173a2a" stroke-width="1.2"/>
        ${[-56, -36, -16, 4, 24].map((x, k) => `<g transform="translate(${x},${136 - k * 6})"><ellipse rx="7" ry="5" fill="#1e5e8f"/><ellipse rx="4" ry="3" fill="#d9b14a"/><circle r="1.6" fill="#0d2347"/></g>`).join('')}
        <path d="M58,104 C50,78 64,56 84,58 C100,62 102,86 92,104 Z" fill="url(#pcBody)" stroke="#0f2a50" stroke-width="1.2"/>
        <path d="M84,62 C80,46 82,30 92,22 C98,18 104,22 100,28 C92,36 92,50 94,62 Z" fill="#2a74a8" stroke="#0f2a50" stroke-width="1"/>
        <circle cx="97" cy="24" r="1.6" fill="#fff"/><path d="M101,25 L108,27 L101,29 Z" fill="#c9a24d"/>
        ${[-6, 0, 6].map(dx => `<path d="M96,20 L${96 + dx},8" stroke="#1e5e8f" stroke-width="1.2"/><circle cx="${96 + dx}" cy="7" r="2" fill="#2a74a8"/>`).join('')}
        <path d="M78,104 L76,124 M88,104 L90,124" stroke="#8a6a3a" stroke-width="2.4"/>
      </g>
    </svg>`;
  }
  let lscape;
  window.themeBoot = () => new Promise(res => {
    const img = new Image();
    img.onload = () => {
      lscape = document.createElement('canvas'); lscape.id = 'lscape'; lscape.width = 1080; lscape.height = 360;
      lscape.getContext('2d').drawImage(img, 0, 0);
      document.getElementById('flora-back').appendChild(lscape); res();
    };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(landscapeSVG());
  });
  window.themeRender = t => {
    document.getElementById('frame').setAttribute('opacity', easeOut((t - 0.2) / 1.8));
    glows.forEach((g, i) => g.setAttribute('opacity', (.75 + Math.sin(t * 7.3 + i * 2) * .12 + Math.sin(t * 13.1 + i) * .08) * easeOut((t - 2) / 1.5)));
    const k = easeOut((t - 1.0) / 2.6);
    lscape.style.opacity = k;
    lscape.style.transform = `translateY(${(1 - k) * 50}px)`;
  };

  // gold Mughal fleuron dividers
  window.ornament = full => {
    const w = full ? 520 : 360, h = w / 2, id = 'og' + (gid++);
    return `<svg width="${w}" height="44" viewBox="0 0 ${w} 44">
      <defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${w}" y2="0"><stop offset="0" stop-color="${GOLD}" stop-opacity="0"/><stop offset=".3" stop-color="${GOLD}"/><stop offset=".7" stop-color="${GOLD}"/><stop offset="1" stop-color="${GOLD}" stop-opacity="0"/></linearGradient></defs>
      <line x1="0" y1="22" x2="${h - 40}" y2="22" stroke="url(#${id})" stroke-width="2"/>
      <line x1="${h + 40}" y1="22" x2="${w}" y2="22" stroke="url(#${id})" stroke-width="2"/>
      ${full ? `<path d="M${h - 36},22 C${h - 26},12 ${h - 16},14 ${h - 10},22 C${h - 16},30 ${h - 26},32 ${h - 36},22 Z M${h + 36},22 C${h + 26},12 ${h + 16},14 ${h + 10},22 C${h + 16},30 ${h + 26},32 ${h + 36},22 Z" fill="${GOLD}"/>` : ''}
      <path d="M${h},6 C${h + 6},14 ${h + 10},18 ${h + 12},22 C${h + 10},26 ${h + 6},30 ${h},38 C${h - 6},30 ${h - 10},26 ${h - 12},22 C${h - 10},18 ${h - 6},14 ${h},6 Z" fill="${MAROON}" stroke="${GOLD}" stroke-width="1.5"/>
      <circle cx="${h}" cy="22" r="3" fill="${GOLD}"/>
    </svg>`;
  };
})();
