---
name: dx-sales-material
description: "DX - Sales material: DignifyX brand system for decks, one-pagers, leaflets, social and video frames. Use whenever creating, redesigning, reviewing or writing copy for any DignifyX / DX marketing or sales material (pitch decks, insurer decks, product overviews, roadmaps, flyers, brochures, testimonials, statement slides) in any medium: Figma, HTML, PowerPoint, PDF or plain copy. Covers colours, typography, layout grids, slide templates, components, tone of voice and official brand assets (logo, logomark, chevron, and on-white / on-black product SVGs used as product headings)."
---

# DX - Sales Material V3

The single source of truth for how DignifyX (DX) sales and marketing material looks, reads and is structured. It is distilled from the DX Sales Material Figma file: Feature Deck, Video/print page and the "Proving the ROI of AI-Powered Coaching" deck in dark and light themes.

Machine-readable tokens live in `tokens.json` next to this file. Official logo and product SVGs live in `assets/logo/` and `assets/products/` (see §7a).

---

## 1. Brand in one line

**Confident AI product, kept human.** Dark (or clean light) glass surfaces, electric-blue light, and real people next to the product. Every piece balances tech precision with warmth: *"The AI is new, but the science is not."*

- **Purpose:** Our purpose is to help people **BUILD CAREERS** they can be proud of.
- **Values (always this wording):** TRUST | INTEGRITY | IMPACT | CRAFTSMANSHIP
- **Positioning:** "Life insurance is human." / "Agency is HUMAN." / "AI-powered insights that build trust."
- **Audience:** agents, leaders, insurers, and investors in SE Asian life-insurance agency (SG, MY, ID, TH, VN, PH).

---

## 2. Typography

**One family only: Plus Jakarta Sans.** Do not use secondary display fonts. The older Bright Chalk handwriting is retired.

| Role | Style | Size @1920×1080 | Notes |
|---|---|---|---|
| Statement word | ExtraBold | 200–240 / 250 lh, −6 tracking | One word + period: "Coaching." |
| Cover title | Bold | 80–88 / 96 lh | Max ~3 lines |
| Divider title | Bold, UPPERCASE | 80 / 88 | Centred |
| Slide headline | Bold | 40 / 50 (fit one line, min 34) | Sentence case, one emphasised word |
| Emphasis word | **Light Italic** | same size as headline | "results from *early* pilots", "with *and* for" |
| Eyebrow | SemiBold UPPERCASE | 20, +3 tracking | Preceded by a ◆ diamond (10px, rotated 45°) |
| Card title | SemiBold / Bold | 24–34 | |
| Body | Regular | 17–24, lh +8 | 70–80% opacity of text colour |
| Big stat | Bold | 72–150 | Unit at ~40–60% size in brand blue: 35**%**, 20**×**, 15**pts** |
| Numerals in lists | Light | 34–60 | Brand-blue gradient |
| Caption / footnote | Regular | 14–16 | 50% opacity |
| Values line | ExtraLight | 26–32, +1 tracking | Pipes at reduced opacity |

Rules:
- Headlines are full sentences that make one claim. Emphasise **one** word or phrase in Light Italic.
- UPPERCASE only for eyebrows, labels, chips, and divider titles.
- Wide letter-spacing (+3 to +7) on small uppercase labels only.

---

## 3. Colour system (unified tokens)

### Brand colours

| Token | Hex | Name | Use |
|---|---|---|---|
| `color.brand.blue.primary` | **#15B6FF** | Primary Blue | Lead accent: eyebrows, highlights, nodes, links, gradient end |
| `color.brand.blue.secondary` | **#194EFF** | Secondary Blue | Brand anchor: gradient start, featured card strokes, bars, logo X |
| `color.brand.purple.primary` | **#7519FF** | Primary Purple | Secondary accent: "Effectiveness", leadership/advanced tiers, second chart series |
| `color.brand.purple.secondary` | **#9F19FF** | Secondary Purple | Purple gradient end, tags on purple surfaces |

### System colours (status only, never decorative)

| Token | Hex | Name | Use |
|---|---|---|---|
| `color.system.success` | **#55E194** | System Success | LIVE badges, positive deltas, "Accomplished", check icons |
| `color.system.warning` | **#F9CF44** | System Warning | IN PROGRESS, caution, "pending" states, medium scores |
| `color.system.error` | **#FF8F6B** | System Error | Risks, problem stats, negative deltas, "missing" states |

### Neutrals

| Token | Hex | Use |
|---|---|---|
| `color.neutral.navy` | #0F1B2D | Text on light, ink |
| `color.neutral.bg.dark` | #131F2F | Default dark slide background |
| `color.neutral.bg.deep` | #13151C | Covers, statements, logo dividers (dark theme) |
| `color.neutral.bg.light` | #F3F6FB | Light slide background |
| `color.neutral.bg.lightTint` | #EEF3FA | Nested cards in light theme |
| `color.neutral.pageNumber` | #3F8FF2 @30% | Large faded page numbers |
| White | #FFFFFF | Text on dark, cards on light |

### Gradients

| Token | Stops | Use |
|---|---|---|
| `gradient.brand` | #194EFF → #15B6FF | Default brand gradient: labels, bars, chips, logo X, chevrons |
| `gradient.purple` | #7519FF → #9F19FF | Purple-tier surfaces and labels |
| `gradient.spectrum` | #194EFF → #15B6FF → #7519FF | Rare hero moments only (cover glow, product lockups) |
| `gradient.textDark` | #FFFFFF → #BDEBFF → #15B6FF | Statement words and key phrases on dark |
| `gradient.textLight` | #0F1B2D → #194EFF → #15B6FF | Statement words and key phrases on light |

### Colour rules
1. Blue is the brand. Purple is the second voice; never let purple dominate a slide over blue.
2. Pair Primary with Secondary of the same hue in gradients: blue with blue, purple with purple. Only `gradient.spectrum` mixes hues.
3. System colours appear only to signal state (badges, deltas, scores, legends). Never use them for backgrounds or decoration.
4. Contrast: white text on #194EFF / #7519FF solids; navy text on #15B6FF / #55E194 / #F9CF44 / #FF8F6B solids.
5. Any other colour you need comes from opacity of these tokens, not new hexes.

---

## 4. Themes

### Dark theme (default for pitch, conference, video)
- Background #131F2F (content) or #13151C (cover, statement, logo divider).
- **Two brand glows**: 906px ellipses, `gradient.brand`, 40% opacity, ~800 layer blur, top-left (−151, −339) and bottom-right (1079, 290).
- Faint **DX X watermark** (the logo X enlarged and cropped) at ~5% opacity on the right.
- **Glass cards**: white 5% fill, 30–40 background blur, white 10% 1–1.5px stroke.
- **Featured card**: `gradient.brand` at 42%→10%, 1.5px #194EFF stroke.
- **Strong tile**: `gradient.brand` at 95%→75%, white text.
- Text: white; body 70–80% white.

### Light theme: "New theme" v2 (insurer decks, print, documents)

**Source of truth:** the Figma section **"New theme"**, node **3550:44786**, on the page "Using AI to unlock the human Potential". It is the final 31-slide deck "Proving the ROI of AI-Powered Coaching". The earlier draft (3477:7134) is superseded.

**In one line:** an editorial consultancy report with a product showroom inside it.
- White paper, hairline grids, flush cells and solid blue accents.
- Purple only for wayfinding.
- Product moments switch to **dark showcase panels** that glow like a screen.

#### Light palette

| Token | Value | Use |
|---|---|---|
| `light.bg` | **#FFFFFF** | Slide background |
| `light.surface` | **#F5F9FB** | Sidebars, statement left half, footer band, label cells, background chevrons, goal chips |
| `light.surfaceAlt` | **#F7FBFD** | Chips and pills |
| `light.cellTint` | **#C7E6F4 @14%** | Checkerboard tint on alternate grid cells |
| `light.featured` | **#194EFF @8%** | Featured panels, "DX" side, centre columns, leader lane, blue-tinted header cells |
| `light.ink` | **#13151C** | All text. Also the **dark showcase panel** fill |
| `light.inkMuted` | #13151C @75 / @60 | Captions @75, footnotes and confidentiality line @60 |
| `light.hairline` | **#9BA0B2 @50%, 1px** | Grid rules, sidebar separators, card strokes |
| `light.chipStroke` | #13151C @8–10%, 1px | Chip and goal-chip outline |
| `light.accent` | **#194EFF** | Emphasis words, numerals, units, row labels, bars, solid header pills, divider bar |
| `light.wayfinding` | **#7519FF** | ◆ eyebrow + eyebrow label, question-slide accent bar |
| `light.motif` | #194EFF @10% + #B1B1B1 @20%, layer at 52% | Corner chevron pattern at both ends of the footer band |
| `light.lockupStroke` | gradient **#7519FF → #FFFFFF → #194EFF**, 1–1.4px | Optional outline when a product SVG sits in its own tile |

Rules:
- **Blue #194EFF does the work.** Use #15B6FF only inside `gradient.brand` (statement words, cover chevron, divider hero chevron).
- **Purple is wayfinding**, plus the purple built into the product "on white" SVGs. Never use it for content text.
- **On white areas: no glass, blur or drop shadows.** Depth lives only in the dark showcase panels.

#### Light typography (overrides §2)

| Role | Spec |
|---|---|
| Eyebrow | ◆ 12px #7519FF (rotated square) + **Bold 24 UPPERCASE #7519FF**, 8px gap. On statement slides: SemiBold 26, +3 tracking |
| Headline | **Bold 40, #13151C, one line**, sentence case. Emphasis: Medium Italic in ink ("*with* and *for*") or the key word in #194EFF |
| Cover title | Bold 112, ink, key phrase in #194EFF. Eyebrow **ExtraBold 32 UPPERCASE ink** |
| Statement word | **ExtraBold 132, `gradient.brand`, no period** ("Coaching", "Context", "People") |
| Statement body | SemiBold 36 ink; emphasis **SemiBold Italic #194EFF** |
| Question headline | Bold 72 ink, payoff words #194EFF |
| Divider title | **Bold 72 UPPERCASE ink**, centred |
| Big stat | Bold ~99–140 ink; unit Bold 40 #194EFF (%, ×, pts); zero-padded ("05%") |
| Row/label title | Bold 32–36 #194EFF (row labels: "Effort Signals", "Manpower & Active Ratio") |
| Numerals | **Bold 32–42 #194EFF, two-digit "01–07"** everywhere (lists, features, FAQs, chips) |
| Section label | Bold 18 UPPERCASE +2 #194EFF ("LIVE TODAY", "PILOT DETAILS", "WHAT THE RESEARCH SAYS") above a hairline |
| Card title | Bold 22–26 ink |
| Body | Regular 15–24 ink @75 |
| On dark showcase | numeral Bold 32 #194EFF · title **Bold 26 #FFFFFF** · body Regular 18 #F2F2F2 @80 |
| Takeaway (footer band) | Bold 24 #194EFF label + Medium 24 ink @90 sentence, **or** a centred Medium 30–36 sentence with a SemiBold Italic blue phrase |
| Closing name | Bold 112 ink; role ExtraBold 32 #194EFF UPPERCASE; contact Medium 32 ink |

#### Light layout grammar

- **Header:** eyebrow at (48, 40), Bold 40 headline below it. **Content zone starts at a full-width hairline at y = 196.**
- **Edge-to-edge grids:** cells run from x = 0 to 1920 with no radius and no gaps, separated by hairlines. Alternate cells use `cellTint` or `surface` (checkerboard). Label columns (the first column) are `surface` or `featured`.
- **Column splits used:** 2 × 960 · 3 × 640 · 4 × 480 · sidebar 560 + 1360 · label column 400 + 1520 · triple 720 / 480 / 720 (team).
- **Footer band:** full width at **y = 920, 160 tall**, `surface` fill, with the corner chevron motif at both ends. Every content slide ends here with a takeaway, sources, assumptions or a process flow.
- **Inner padding:** 48 inside cells. Cell text blocks are vertically centred.
- **No logo and no page numbers on content slides.** The logo appears on the cover only.
- **Rounded elements are the exception:**
  - Panels: radius 16 (comparison panels).
  - Chips and goal chips: radius 8.
  - Solid header pills: radius 12.
  - Product-SVG tiles (when used): radius 12–16.
  - Bars: radius 3.

#### Light components

- **Solid header pill:** #194EFF fill, radius 12, 48 tall, SemiBold 20 white. Used for framework column heads (Frontline / Managers / Managers of Managers).
- **Header cell:** a full-cell column header with a tinted label (SemiBold 14 UPPERCASE #194EFF over Bold 32 ink). The **chosen or top tier is solid #194EFF** with white text (Performer).
- **Status chip:** small radius-8 chip with Bold 12 UPPERCASE +1.5 text. **Planned or dated** (NOVEMBER, EARLY Q1, PLANNED): #F7FBFD fill, #194EFF text. **In progress:** #F9CF44 @45% fill, ink text.
- **Goal chip:** stacked numeral + label tile, #F5F9FB fill, 1px ink @10 stroke, radius 8. Laid out three across ("01 Product Knowledge").
- **Product heading (light):** when a product name is a heading or sub-heading, place the product's **"on white" SVG** (`assets/products/<product>-on-white.svg`) as that heading, directly on the white or `surface` background. No dark tile is needed. Rules in §7a.
- **Dark showcase panel:** a **#13151C** block (product slides 19–24, customisation screen row, solution slide).
  - Lit by two **#194EFF ellipses at 40% with ~100 layer blur** behind the phones.
  - Phones carry a drop shadow (#13151C @80, r28).
  - **Floating UI cards break out of the phone** using background blur 28.
  - Columns are split by hairlines.
  - Captions sit inside the dark panel (blue numeral, white title, light-grey body).
- **Callout pill on UI:** solid #194EFF, white Medium text, radius ~8 ("The DX App provides 24/7 guidance").
- **Tag chip (DAILY / WEEKLY):** blue-tint parallelogram with Bold UPPERCASE #194EFF, next to a Medium Italic 40 ink word.
- **SOLUTIONS tag:** #194EFF @10 mini-chip ("SOLUTIONS" Bold 13 +1.5) + Medium Italic 18 role.
- **Process flow:** chips joined by blue arrows "→"; the final step is a solid #194EFF chip.

#### Light illustration

- **Statement slides use single-line art** on the right (white) half, over a pale #F5F9FB chevron watermark that fades to white at the top and bottom.
  - Stroke: 2px gradient **#194EFF → #13151C → #13151C → #194EFF**, so the line starts and ends in blue and runs ink in the middle.
  - Each word has its own metaphor:
    - **Coaching:** a hand gripping a rope.
    - **Context:** interlocking puzzle pieces on a flowing line.
    - **People:** two face profiles drawn in one continuous line.
  - New statement slides follow the same idea: one continuous line, one human metaphor, blue ends.

#### Light slide templates (31-slide reference)

1. **Cover:** white background, dark logo (412w), ExtraBold 32 eyebrow, Bold 112 title with a blue key phrase, meta row (3px ink bar + MONTH YEAR Medium 32). On the right, the **solid `gradient.brand` chevron** with the two diamonds as **thin ink outlines**.
2. **Stat grid:** 4 × 2 hairline grid. The label column has blue Bold 32 titles. Stat cells use a checkerboard tint. The footer band holds a centred Medium 36 takeaway.
3. **Question:** pale background chevrons; a white band between hairlines, split 50/50. Left: Bold 72 question with a blue payoff, purple 72×6 bar, lead-in. Right: a chip cloud.
4. **Statement** ("Coaching", "Context", "People"): 50/50 split.
   - Left (#F5F9FB): spaced purple eyebrow, ExtraBold 132 gradient word, 72×6 ink bar, SemiBold 36 body.
   - Right: single-line art (see Light illustration).
5. **Solution:** two halves with DAILY / WEEKLY tag chips and dark phones on a pale strip, blue callout pills, and "05 DX Coaching Types" chips.
6. **Evidence:** a 2 × 2 checkerboard of "01–04" findings, a "‹ Beta & Pilots ›" cell, and three testimonial rows with cut-out portraits over solid blue chevrons.
7. **ROI chart:** two flush KPI cells on the left (`surface` then white), a flat solid-blue bar chart, dashed blue break-even line, and a footer band with assumptions plus the confidentiality line.
8. **Divider (new):**
   - A **sequence of four huge chevrons sweeping left to right**: the first is solid `gradient.brand`, the next fades to blue @10, then two in #F5F9FB.
   - A **white title card** (880 × 184, padding 32) is centred on top: optional purple ◆ "APPENDIX 1" eyebrow, Bold 72 UPPERCASE ink title, 216 × 8 #194EFF bar (radius 3).
9. **Two-panel comparison** (governance): two radius-16 panels, neutral (#F5F9FB + hairline) and DX (#194EFF @8). Each holds "01–05" blue numerals with Bold title and body. The footer band ends with a blue label and a sentence.
10. **Framework matrix:** row labels on the left. **Solid blue header pills** on the columns. White framework tiles with a hairline. The roadmap group sits in a dashed outline. Personalisation cells use "01 / 02". Soft-skill tiles are blue-tinted.
11. **Team:** three columns (720 / 480 / 720).
    - Left: "The Team" rows (64px circular photo, Bold 24 name, blue role chip, credentials).
    - Centre: a #194EFF @8 column with "01–03" statements.
    - Right: "Advisors".
    - Footer band: centred sentence with a blue italic close.
12. **Swimlane journey:** three lanes (Agent / Leader / DignifyX). The Leader lane is `featured`. Milestone dots are blue with a white ring. Key sessions are solid blue with "Leaders' Choice" ink tags. The insurer side column (`surface`) carries SOLUTIONS tags and chips.
13. **Pilot details:**
    - Left: big stat cells (100 / 3+3 / 18) with details.
    - Right: objectives with a **solid blue "40+" tile** and a `surface` scorecard tile.
14. **Features list:** "LIVE TODAY" vs "IN DEVELOPMENT" (`surface`) halves. Each product row is headed by its **"on white" product SVG**, with status chips above the descriptions.
15. **Product detail:**
    - A **560px `surface` sidebar**: **"on white" product SVG as the sidebar heading**, For the Agent / For the Leader / For the Insurer separated by hairlines, "Design Note" in blue, status chip at the bottom left.
    - A **1360px dark showcase panel** with 2–3 glowing phone groups and in-panel captions.
16. **Learning science:** 2 × 3 grid, research vs ground truth, with a checkerboard. Footer band: Bold "Sources" label + small citations.
17. **Scoring:** a 400px label column (Effort `surface`, Effectiveness `featured`) and 3 + 4 tinted cells numbered 01–07. Footer band: "One Score, Three Readings" with the readings in blue.
18. **Goal tracks:** three 640 columns with header cells (Explorer and Builder tinted, **Performer solid blue**), "FOCUS" + Bold blue word, description, and **three goal chips across** at the bottom.
19. **Customisation:** four 480 columns with a title row, a **dark screen strip** (#13151C with phones), "DignifyX Default" / "Tailoring for the Insurer" (blue). Footer band: Recommendation.
20. **FAQ:** three columns with "01–03" header cells (`surface` / `featured` / `featured`) and status chips; Q&A with a blue "Q:". Footer band: process-flow chips ending in solid blue.
21. **Closing:** the cover layout. ExtraBold 32 blue role eyebrow, Bold 112 name, Medium 32 contact, values line with blue pipes.

#### Light do / don't

**Do**
- Use white paper, hairline grids, flush cells and solid blue.
- Use purple only for wayfinding.
- Number with two-digit blue numerals.
- End content slides in the footer band.

**Do** use dark #13151C showcase panels for anything that is app UI. Glow, blur and shadow belong there and nowhere else.

**Do** use the **"on white" product SVGs** as product headings on white slides.

**Don't**
- Put glass, glows or shadows on white areas.
- Add logos or page numbers to content slides.
- Add periods to statement words.
- Use navy #0F1B2D. The ink is **#13151C**.

---

## 5. Layout grid (16:9, 1920×1080)

- Outer margin **80**; content width **1760**; gutters **24** (cards) or **40** (hero columns).
- Header zone: ◆ eyebrow at (86, 52) → headline at (80, 94), one line, max width 1540.
- Content zone: y = 206–890.
- Takeaway zone: y ≈ 890–960.
- Footer: page number Bold 71 @ (40, 966) in #3F8FF2 30%; "Confidential / Not for Distribution" Regular 16 at 40–45% opacity, bottom-right (x end 1840, y 1020).
- Logo: top-right at (1640, 56), 200 wide on content slides.
- Corner radii step down with nesting: **40 → 32 → 28 → 24 → 16** (pills fully rounded).
- Columns: 2 × 868, 3 × 571, 4 × 422 (at 1760 wide / 24 gutter).

Print one-pager (A-series, 420×595 or A4): 25px margins, eyebrow 8px, headline 20px Bold, body 10–14px, a cyan "spine" line with ◆ nodes as the connector.

---

## 6. Slide templates

Every deck is assembled from these templates. Pick one per slide and do not invent new chrome.

1. **Cover**: deep bg; logo (412–458w) top-left area; eyebrow (`gradient.brand`, uppercase, +4) → title Bold 88 → meta block (3px vertical bar + `MONTH YEAR` Medium 32 uppercase). The **DX X chevron artwork** (solid blue gradient chevron + two outlined diamonds) fills the right ~42%, bleeding off three edges.
2. **Closing / contact**: same as cover; name Bold 72, role uppercase in `gradient.brand`, email/phone beside a 3px bar, values line at bottom.
3. **Section divider**: centred eyebrow ("APPENDIX 1") + UPPERCASE title Bold 80 + 72×6 gradient bar; mirrored blue chevrons pointing inward from both bottom corners; small logo (265w) bottom-centre.
4. **Statement**: no cards. ◆ Eyebrow ("THE MISSING PIECE") → one huge word with a period ("Coaching.") in the text gradient → one or two SemiBold 52 lines with a Light Italic emphasis in Primary Blue.
5. **Stat grid**: row label card (featured) + 3 stat cards per row; big number + coloured unit + 2-line caption; takeaway pill below.
6. **Two-panel comparison**: glass panel vs featured panel (problem vs DX, research vs ground truth), each with numbered items (Light numeral + SemiBold title + body).
7. **Evidence / testimonial**: insight card on the left with numbered findings, a connector bracket (line + glowing nodes) to 3 testimonial cards (name, agency, flag + city, big % stat, metric in gradient, context, cut-out portrait).
8. **Chart**: KPI cards left (featured on top), chart card right; bars in `gradient.brand`, baseline 20% ink, dashed break-even line in Primary Blue with uppercase label; assumptions as a 15px footnote.
9. **Framework matrix**: row labels at left (Hard skills / Personalisation / Soft skills), column header pills, framework tiles (code Bold 36 + subtitle), bullet lists with blue dots; a dashed outline marks roadmap items with a legend.
10. **Team**: two lists of person rows (avatar 68, name + role chip, credentials) flanking a featured statement card.
11. **Swimlane / journey**: lanes for Agent / Leader / DignifyX (Leader lane highlighted as featured), milestone dots with glow, session pills, "Leaders' Choice" badges, plus a stakeholder side panel with SOLUTIONS tags and chips.
12. **Product detail**: left sidebar ("on black" product SVG as heading, For the Agent / For the Leader / For the Insurer / Design Note in Primary Blue, status chip at bottom) + showcase panel (2–3 phones over a soft glow, numbered captions below each).
13. **Feature list**: Live Today vs In Development panels; "on black" product SVG as each row heading + one-sentence benefit; status chips (NOVEMBER, EARLY Q1).
14. **FAQ**: 3 numbered column headers (featured) with status chips, Q&A cards ("Q:" in gradient, "A:" Medium Italic), and a process-flow pill row at the bottom.

**Takeaway bar** (end of most content slides): full-width pill, 4% fill + 22% stroke (dark) / white card (light), bold gradient label + one Medium 24 sentence.

---

## 7. Components

- **Eyebrow**: ◆ diamond (Primary Blue) + SemiBold uppercase label.
- **Glass card / Featured card / Strong tile**: see §4.
- **Status chip**: navy fill, 1px Primary Blue stroke, Bold 12–13 uppercase +1.5 in Primary Blue. Map state to colour:
  - LIVE / Accomplished → Success #55E194
  - IN PROGRESS / Pilot → Warning #F9CF44
  - PLANNED / dated (NOVEMBER, EARLY Q1) → Primary Blue #15B6FF
  - At risk / blocked → Error #FF8F6B
- **SOLUTIONS tag**: tiny gradient pill "SOLUTIONS" + Medium Italic product role ("DX Leader").
- **Numbered item**: Light numeral in `gradient.brand` + SemiBold title + Regular body at 70%.
- **Connector**: 2px Primary Blue line at 70% + glowing node dots (drop-shadow glow in Primary Blue).
- **Page number**: Bold 71, #3F8FF2 at 30%, bottom-left.
- **Product headings:** INTELLIGENT COACHING, DX COACH, DX LEARN, AI CUSTOMER ROLE PLAY, VIRTUAL JOINT FIELDWORK, AGENCY LEADER AVATAR. Use the official product SVGs from `assets/products/`, "on black" in dark artwork and "on white" in light artwork, **only when the product name is a heading or sub-heading** (§7a). Never recolour or redraw them.
- **Phone mockup**: dark device, angled or upright, screens always dark UI; floating UI cards may break out of the phone.

---

## 7a. Brand assets (use these files, never redraw)

Official SVGs ship with this skill in **two folders** under `assets/`. Paths are relative to this SKILL.md.

**Always place these files instead of typing, tracing or rebuilding a logo or product wordmark.** Scale them proportionally only. Never stretch, recolour, crop, outline, add effects to, or re-typeset them.

### Folder 1: `assets/logo/` (company identity)

| File | What it is | Native size | Use on |
|---|---|---|---|
| `assets/logo/dignifyx-logo-black.svg` | Full DIGNIFY**X** logo: ink letters + blue gradient X | 412×99 | **Light** backgrounds (white, #F5F9FB, light photos) |
| `assets/logo/dignifyx-logo-white.svg` | Full DIGNIFY**X** logo: white letters + blue gradient X | 412×99 | **Dark** backgrounds (#13151C, #131F2F, dark showcase panels, dark photos) |
| `assets/logo/dignifyx-logomark.svg` | The **X logomark**: blue gradient chevron + two outlined diamonds | 1332×1294 | Both themes. App icon, avatar, favicon, social profile, cover hero art, watermark |
| `assets/logo/dignifyx-chevron.svg` | The **chevron** alone, solid blue gradient | 812×1294 | Both themes. Graphic motif for cover hero, divider sweeps, bullets / pointers, background accents, page-corner details |

**Logo rules:**
1. **Pick the colourway by background:** light → `dignifyx-logo-black.svg`; dark → `dignifyx-logo-white.svg`. Never put the black logo on dark or the white logo on light.
2. **Placement and size (16:9, 1920×1080):**
   - Cover and closing: 412w at (120, 182).
   - Dark content slides: 200w top-right at (1640, 56).
   - Light content slides: no logo (§4).
   - Print one-pager: 120–160w top-left.
   - Social square: 30–40% of the width.
3. **Clear space:** at least 0.25 × the logo's height on every side. **Minimum width:** 120px on screen, 25mm in print.
4. **Logomark vs chevron:**
   - Use the **logomark** when the brand has to be recognised without the name (icon, avatar, favicon, large cover art cropped off the edge, watermark at 5–6% opacity).
   - Use the **chevron** as a pure graphic device (divider sweeps, arrows, accents).
   - Never place either right next to the full logo on the same small surface.

### Folder 2: `assets/products/` (product logomarks)

Every product has two variants. **Choose the variant by theme:**

| Product (as written in content) | Light theme: **on white** | Dark theme: **on black** |
|---|---|---|
| Intelligent Coaching | `intelligent-coaching-on-white.svg` (738×164) | `intelligent-coaching-on-black.svg` (739×165) |
| DX Coach | `dx-coach-on-white.svg` (706×120) | `dx-coach-on-black.svg` (747×127) |
| DX Learn | `dx-learn-on-white.svg` (667×164) | `dx-learn-on-black.svg` (712×176) |
| AI Customer Role Play | `ai-customer-role-play-on-white.svg` (547×187) | `ai-customer-role-play-on-black.svg` (587×201) |
| Virtual Joint Fieldwork | `virtual-joint-fieldwork-on-white.svg` (580×181) | `virtual-joint-fieldwork-on-black.svg` (598×186) |
| Agency Leader Avatar | `agency-leader-avatar-on-white.svg` (471×261) | `agency-leader-avatar-on-black.svg` (471×233) |

- **"On white"** files have ink and purple-to-blue lettering. Use them on white, #F5F9FB, light tints and any light-themed artwork.
- **"On black"** files have white and cyan lettering. Use them on #13151C, #131F2F, dark showcase panels and any dark-themed artwork.
- Never place an "on white" file on a dark background or an "on black" file on a light one; each disappears on the wrong background.

### When to use a product SVG (strict rule)

**Use a product SVG only when the product's name is used as a heading or sub-heading** of a section in the content: a slide title area, a card or column header, a sidebar title, a feature-row title, a section header in a flyer, brochure, one-pager or social post. **The SVG then *is* that heading.** Place it where the heading text would go, and don't also typeset the same name beside it.

- ✅ **Product as heading:** "DX Coach" heading a feature card → `dx-coach-on-white.svg` (light) or `dx-coach-on-black.svg` (dark) in place of the heading text.
- ✅ **Product-detail sidebar headed "Intelligent Coaching"** → the Intelligent Coaching SVG as the sidebar heading.
- ✅ **Features list rows titled with product names** → one product SVG per row heading.
- ❌ **Name inside a sentence or bullet** ("Agents ask the DX Coach any time…") → plain text, no SVG.
- ❌ **Name in tables, captions, footnotes, chips, process flows, or a list of several products inside body copy** → plain text.
- ❌ **Decoration, background or watermark** → never. Only the DignifyX logomark or chevron may be used decoratively.

**Sizing a product heading:**
- Match the visual weight of the heading it replaces: the cap height of the SVG ≈ the heading's cap height.
- Typical widths at 1920×1080: 300–420px for card or sidebar headings, 420–560px for a slide-level or section heading, 180–260px for compact feature rows.
- Align it to the same left edge as the body text below, with the normal heading-to-body gap (16–24px).
- Optional on light: sit the SVG in its own white tile with the gradient stroke (`light.lockupStroke`, radius 12–16). It is not required, because the "on white" SVG works directly on the background.

### How to use the files per medium
- **Figma:**
  - Read the SVG text and call `figma.createNodeFromSvg(svg)`.
  - Name the node (`logo`, `logomark`, `chevron`, `product/dx-coach-on-white`).
  - Scale with `rescale()` to keep proportions.
  - Reuse an existing in-file `logo` component if it matches.
  - Angular gradients in some product files can simplify on import, so compare with a render.
- **HTML / web:** inline the SVG markup (preferred) or reference the file. Set only `width` or `height`, and keep the `viewBox`.
- **PowerPoint / Docs / PDF:** insert the SVG, or a transparent PNG rendered at ≥ 2× the placed size, cropped to the artwork's edges.
- **Favicon / app icon:** `dignifyx-logomark.svg` on a white or #13151C rounded square.

### Never
- Rebuild the logo or a product name as live text.
- Use retired lockups, screenshots of logos, or the wrong theme variant.
- Use product SVGs for anything other than headings or sub-headings.
- Mix the black and white company logos on one artwork.

## 8. Imagery and art direction

- **The X**: the logo's chevron is the core motif. It is the hero on covers, the frame on dividers, and a whisper-level watermark on content slides. Do not stretch or recolour it beyond the brand gradient or white/navy outlines.
- **Light as material**: soft blue bloom behind cards, glowing nodes, rising-light chevrons.
- **People**: real SE Asian agents and leaders. Use cut-out portraits bleeding out of cards, duotone navy group shots, or documentary workshop photos. No stock-style illustration.
- **Symbolic texture** for statement slides: giant repeated glyphs (? ! ↑) in the brand gradient at ~8% opacity, rotated ±20°.
- Charts: brand blue first, purple second, system colours only for status.

---

## 9. Voice and copy

- Empathetic, evidence-based, direct. Plain claims backed by numbers: "+100% appointments for ~25 agents".
- Human vocabulary: dignity, craft, pride, worthy, confidence, capability, rhythm.
- Domain vocabulary: Agency, Agents, Leaders, Rookie → Good → Great, MDRT/COT/TOT, X-Factor, Coaching Guides, SAP (Sales Advisory Process), Effort and Effectiveness Signals, Goal Tracks (Explorer, Builder, Performer).
- Headline pattern: claim + one emphasised word. Body: short sentences, no hype words ("revolutionary", "game-changing").
- British spelling (personalise, programme, prioritise).
- Every content slide ends with a takeaway sentence.

### Standard narrative arc for a sales deck
Cover → Problem (stats) → Status-quo fixes → Statement ("Coaching.") → Solution → Early evidence → ROI → **Divider: Why We're Different** → Statement ("Context.") → Governance → Frameworks → Team → **Divider: How to Get Started** → Statement ("People.") → Stakeholder journey → Pilot details → **Appendix dividers** → Features, product detail, science, scoring, personalisation, customisation, FAQ → Closing.

---

## 10. Do / Don't

**Do**
- Use Plus Jakarta Sans everywhere.
- Use the unified tokens in §3; reference them by name in code (`--dx-blue-primary`).
- Keep one idea per slide, one emphasised word per headline.
- Keep app UI dark in both themes (dark #13151C showcase panels on light slides). Pick product SVGs by theme: "on white" for light, "on black" for dark.

**Don't**
- Swap Primary and Secondary blue. **Primary Blue is #15B6FF** and Secondary Blue is #194EFF; earlier Figma variables had these names reversed.
- Use system colours decoratively, or purple as the dominant colour.
- Use thick #194EFF borders on every card. Reserve them for the featured card.
- Mix the retired chalk font, two-tone slide-title pill, or off-brand backgrounds.
- Write INTEGRITY and RESPECT interchangeably in the values line. It is always INTEGRITY.

---

## 11. Implementation snippets

### CSS custom properties
```css
:root {
  --dx-font: "Plus Jakarta Sans", Inter, system-ui, sans-serif;
  --dx-blue-primary: #15B6FF;
  --dx-blue-secondary: #194EFF;
  --dx-purple-primary: #7519FF;
  --dx-purple-secondary: #9F19FF;
  --dx-success: #55E194;
  --dx-warning: #F9CF44;
  --dx-error: #FF8F6B;
  --dx-navy: #0F1B2D;
  --dx-bg-dark: #131F2F;
  --dx-bg-deep: #13151C;
  --dx-bg-light: #F3F6FB;
  --dx-bg-light-tint: #EEF3FA;
  --dx-gradient-brand: linear-gradient(90deg, var(--dx-blue-secondary), var(--dx-blue-primary));
  --dx-gradient-purple: linear-gradient(90deg, var(--dx-purple-primary), var(--dx-purple-secondary));
  --dx-radius-xl: 40px; --dx-radius-l: 32px; --dx-radius-m: 28px; --dx-radius-s: 24px; --dx-radius-xs: 16px;
}
```

### Figma variable collection "DX Brand"
Create one COLOR collection with modes **Dark** and **Light**, named `brand/blue/primary`, `brand/blue/secondary`, `brand/purple/primary`, `brand/purple/secondary`, `system/success`, `system/warning`, `system/error`, and semantic aliases `surface/bg`, `surface/card`, `text/primary`, `text/muted`, `stroke/subtle`. Rename the legacy `Primary` (#194EFF) to `brand/blue/secondary`, and the legacy `Secondary` (#15B6FF) to `brand/blue/primary`.

---

## 12. Workflow when using this skill

1. Identify the format (deck 16:9, one-pager, A4 leaflet, 9:16 video, social) and the theme (dark default; light for insurer and print). **For light, follow §4 "New theme" v2 (Figma 3550:44786) templates and grammar, not §6/§5 dark chrome.**
2. Map the content to the narrative arc (§9) and choose one template per page (§6).
3. Apply the tokens (§3), type scale (§2) and grid (§5) exactly. Place the logo, logomark and chevron from `assets/logo/` per §7a, choosing the colourway by background. Use a product SVG from `assets/products/` only where that product's name is a heading or sub-heading, in the variant that matches the theme ("on white" for light, "on black" for dark).
4. Write headlines as one claim with one emphasised word, and end with a takeaway.
5. Self-check against §10 before delivering: font, token names, Primary/Secondary blue, system colours only for status, correct product-SVG variant (on white / on black) and only on product headings, app UI dark, values wording.
