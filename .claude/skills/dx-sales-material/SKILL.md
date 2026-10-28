---
name: dx-sales-material
description: "DX - Sales material: DignifyX brand system for decks, one-pagers, leaflets, social and video frames. Use whenever creating, redesigning, reviewing or writing copy for any DignifyX / DX marketing or sales material (pitch decks, insurer decks, product overviews, roadmaps, flyers, brochures, testimonials, statement slides) in any medium: Figma, HTML, PowerPoint, PDF or plain copy. Always starts by asking which theme to use (light, dark, or a combination with a user-defined ratio). Covers colours (Gradient 1 / #15B6FF primary accent, #194EFF secondary, purple only for AI-role topics, status colours), typography, corner radii, layout grids, fixed opening / section / ending slides, components (pointer graphic for eyebrows and KPIs, chevron bullets, two-digit 01–09 numbering), tone of voice and official brand assets (logo, logomark, chevron, pointer, on-white / on-black product SVGs used as product headings)."
---

# DX - Sales Material V4

The single source of truth for how DignifyX (DX) sales and marketing material looks, reads and is structured. It is distilled from the **DX Sales Material** Figma file (`T1o7OpZLnVU3zlwlZd08aY`), page **Feature Deck** (node `3015:63303`): the **White theme** deck, the six **Dark theme** decks (Reference, Section 1, Section 4, Section 5, Section 6, Feature Deck), the **Additional color** sections and the **Additional graphics** section. See §13 for the node map.

Machine-readable tokens live in `tokens.json` next to this file. Official SVGs live in `assets/logo/`, `assets/products/` and `assets/graphics/` (see §7a).

---

## 0. FIRST STEP, EVERY TIME: ask for the theme (mandatory)

**Before designing or writing anything, ask the user which theme they want.** Do this every time the skill is used, even if the request seems to imply a theme, unless the user has already named a theme or ratio in the same request. Offer exactly these three options (use the AskUserQuestion tool when it is available; otherwise ask in plain text and wait for the answer):

1. **Light theme**: white editorial theme (§4 Light).
2. **Dark theme**: navy/deep dark theme (§4 Dark).
3. **A combination of both**: the user describes the ratio, e.g. "70% dark / 30% light", or which parts go in which theme.

If the user picks **combination** without a ratio, ask for the ratio before you start. Then apply §12 "Combination decks".

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
| Cover title | Bold | 88 / 96 lh (dark) | Max ~3 lines. Light: Bold 112 (§4a) |
| Section / ending title | Bold, UPPERCASE | 80 / 88 | Centred (§4a) |
| Slide headline | Bold | 40 / 50 (fit one line, min 34) | Sentence case, one emphasised word |
| Emphasis word | **Light Italic**, or the word in **Gradient 1** (dark) | same size as headline | "results from *early* pilots", "with *and* for" |
| Eyebrow | SemiBold UPPERCASE | 20, +3 tracking | Preceded by the **pointer graphic** (§7b). The ◆ diamond is retired |
| Card title | SemiBold / Bold | 24–34 | |
| Body | Regular | 17–24, lh +8 | 70–80% opacity of text colour |
| Big stat | Bold | 72–150 | Unit at ~40–60% size in the accent: 35**%**, 20**×**, 15**pts**. Single digits zero-padded: **05%** |
| Numerals in lists | Light (dark) / Bold (light) | 34–60 | Always two digits **01–09**, in Gradient 1 (dark) or #194EFF (light) |
| Caption / footnote | Regular | 14–16 | 50% opacity |
| Values line | ExtraLight (dark) / Medium (light) | 24–32, +1 to +3.5 tracking | Pipes in the accent colour |
| Page number | Bold | 71 | #3F8FF2 at 30% opacity, two digits ("01") |

Rules:
- Headlines are full sentences that make one claim. Emphasise **one** word or phrase.
- UPPERCASE only for eyebrows, labels, chips, section titles and the ending title.
- Wide letter-spacing (+3 to +7) on small uppercase labels only.
- **Numbers 0–9 are always written with a leading zero** (§7c).

---

## 3. Colour system (unified tokens)

### 3.1 Brand colours and their roles

The Figma file defines these as variables (collection "Variable collection", modes Light and Dark, same values in both) and paint styles:

| Figma name | Value | Token in this skill |
|---|---|---|
| Paint style **Gradient 1** | linear, left → right, **#194EFF → #15B6FF** | `gradient.brand` (= Gradient 1) |
| Paint style **Gradient 2** | Gradient 1 + a 20% black overlay | `gradient.brandDim` (pressed / shaded surfaces) |
| Variable **Secondary** | **#15B6FF** | `color.brand.blue.primary` (Primary Blue) |
| Variable **Primary** | **#194EFF** | `color.brand.blue.secondary` (Secondary Blue) |
| Variable **Color purple** | #7519FF | `color.brand.purple.primary` |

The Figma variable names are swapped relative to their role. **Always follow the roles below, not the Figma variable names.**

**Dark theme roles (mandatory):**
- **Primary / accent colour = Gradient 1 (#194EFF → #15B6FF) or solid #15B6FF.** Use it for:
  - headline emphasis words and key phrases;
  - eyebrow labels and section labels;
  - numerals, big-stat units and active chips;
  - links, nodes, highlights, cover meta lines and the "Our Purpose" line;
  - the gradient on chevrons, bars and the logo X.
  - Use the **gradient** on large type and shapes. Use **solid #15B6FF** where a gradient cannot render (thin text, strokes, PowerPoint text).
- **Secondary colour = #194EFF.** Use it for:
  - featured-card strokes and strong tiles;
  - solid fills behind white text, bars and secondary glows;
  - the start of the gradient.

**Light theme roles:** #194EFF does the work (emphasis, numerals, bars, pills). #15B6FF appears only inside Gradient 1 (statement words, cover chevron, divider chevrons, pointer graphic).

### 3.2 Additional colour 1: purple, **only when the topic is AI** (Figma section "Additional color (only use them when the Topic is about AI)")

| Token | Hex | Name |
|---|---|---|
| `color.brand.purple.primary` | **#7519FF** | Primary Purple |
| `color.brand.purple.secondary` | **#9F19FF** | Secondary Purple |

- Use purple **only on slides or sections where DX's AI role is the subject**, e.g.:
  - the AI Customer Role Play / AI role-play;
  - what the AI does in coaching;
  - AI governance or responsible AI;
  - AI features and LLM frameworks.
- On those slides purple **replaces blue as primary and secondary**:
  - #7519FF takes the primary role and #9F19FF the secondary.
  - `gradient.purple` (#7519FF → #9F19FF) replaces Gradient 1 for emphasis, numerals, the featured card and chips.
  - The logo, product SVGs and pointer graphic keep their own colours.
- **Everywhere else, no purple.** This includes light-theme eyebrows, which are now blue (§4 Light).
- Never mix purple and blue accents on the same slide. The only exception is `gradient.spectrum`, used for rare hero moments.

### 3.3 Additional colour 2: status colours (Figma section "Additional color")

| Token | Hex | Name | Use |
|---|---|---|---|
| `color.system.success` | **#55E194** | Success | LIVE badges, positive deltas, "Accomplished", check icons, success messages |
| `color.system.warning` | **#F9CF44** | Warning | IN PROGRESS, caution, "pending" states, medium scores, warnings |
| `color.system.error` | **#FF8F6B** | Error | Risks, problem stats, negative deltas, "missing" states, errors |

- Use them **whenever text or a UI element must show success, warning or error**. That includes the status word or number in running text (e.g. "+18% retention" in Success, "3 compliance gaps" in Error) and badges, deltas and legends.
- Never use them for backgrounds, decoration or brand emphasis.

### 3.4 Neutrals

| Token | Hex | Use |
|---|---|---|
| `color.neutral.bg.deep` | #13151C | Dark covers, title slides, statements; light-theme ink and showcase panels |
| `color.neutral.bg.dark` | #131F2F | Default dark content, section and ending slides |
| `color.neutral.bg.navy2` | #11233B | Alternate dark content background (Feature Deck) |
| `color.neutral.pageNumber` | #3F8FF2 @30% | Large faded page numbers |
| `light.*` | see §4 Light | Light theme palette |
| White | #FFFFFF | Text on dark, cards on light |

### 3.5 Gradients

| Token | Stops | Use |
|---|---|---|
| `gradient.brand` = **Gradient 1** | #194EFF → #15B6FF (left → right; on chevrons, along the chevron) | Default accent: emphasis type, labels, bars, chips, logo X, chevrons, glows |
| `gradient.brandDim` = Gradient 2 | Gradient 1 + 20% black | Shaded / pressed surfaces |
| `gradient.purple` | #7519FF → #9F19FF | AI-topic slides only (§3.2) |
| `gradient.spectrum` | #194EFF → #15B6FF → #7519FF | Rare hero moments only |
| `gradient.textDark` | #FFFFFF → #BDEBFF → #15B6FF | Statement words on dark |
| `gradient.pointer` | #FFFFFF → #15B6FF (on black), #194EFF → #15B6FF (on white) | Built into the pointer graphic |

### 3.6 Colour rules
1. Blue is the brand. On dark, the accent is Gradient 1 or #15B6FF; #194EFF supports it.
2. Purple only for AI-role topics (§3.2). System colours only for state (§3.3).
3. Contrast:
   - White text on #194EFF / #7519FF solids.
   - #13151C text on #15B6FF / #55E194 / #F9CF44 / #FF8F6B solids.
4. Any other colour you need comes from opacity of these tokens, not new hexes.

---

## 4. Themes

### Dark theme

- **Backgrounds:**
  - **#13151C** for cover, title and statement slides.
  - **#131F2F** for content, section and ending slides.
  - **#11233B** is an allowed content variant.
- **Two brand glows:** 906 px ellipses in Gradient 1, 40% opacity, ~800 layer blur.
  - Default positions: top-left (−151, −339) and bottom-right (1079, 290).
  - On section and ending slides: (−151, −47) and (1079, 290).
- **Chevron haze:** a faint chevron in Gradient 1 (end stop @28%), 974 × 1551, with 300–500 layer blur, behind content.
- **Glass cards:**
  - White 5% fill, 30–120 background blur, white 10–16% 1–1.6 px stroke.
  - Large floating cards may add a soft drop shadow.
- **Featured card:** Gradient 1 at 42% → 10%, 1.5 px #194EFF stroke.
- **Strong tile:** Gradient 1 at 95% → 75%, white text.
- **Text:**
  - White; body 70–80% white.
  - Headline emphasis in **Gradient 1**, or Light Italic white.
  - Section titles may run fully in Gradient 1 (Bold 40, as in Section 6).
- **Page number:** Bold 71, #3F8FF2 at 30%, at (28, 966), two digits.
- **Logo** on content slides: white, top-right. 200 w at (1640, 56), or 412 w at (1412, 84) on statement-style slides.

### Light theme (insurer decks, print, documents)

**Source of truth:** the Figma section **"White theme"** (node `3585:77289`) on the Feature Deck page, a 31-slide deck "Proving the ROI of AI-Powered Coaching". It is the moved, final version of the earlier "New theme" section (3550:44786).

**In one line:** an editorial consultancy report with a product showroom inside it.
- White paper, hairline grids, flush cells and solid blue accents.
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
| `light.accent` | **#194EFF** | Emphasis words, numerals, units, row labels, bars, solid header pills, divider bar, **eyebrow labels** |
| `light.motif` | #194EFF @10% + #B1B1B1 @20%, layer at 52% | Corner chevron pattern at both ends of the footer band |
| `light.lockupStroke` | gradient **#7519FF → #FFFFFF → #194EFF**, 1–1.4px | Optional outline when a product SVG sits in its own tile |

**Change in V4:** the Figma white theme draws eyebrows and the question-slide bar in purple #7519FF.
- Under the AI-only purple rule (§3.2), **eyebrows are now the pointer graphic (on white) plus a #194EFF label**.
- The question-slide accent bar is #194EFF.
- Purple appears on light slides only when the topic is AI.

Rules:
- **Blue #194EFF does the work.** Use #15B6FF only inside Gradient 1 (statement words, cover chevron, divider chevrons, the pointer).
- **On white areas: no glass, blur or drop shadows.** Depth lives only in the dark showcase panels.

#### Light typography (overrides §2)

| Role | Spec |
|---|---|
| Eyebrow | **Pointer graphic (on white)**, 28–32 px tall, + **Bold 24 UPPERCASE #194EFF**, 8–10 px gap. On statement or section slides: Bold 26, +4 tracking |
| Headline | **Bold 40, #13151C, one line**, sentence case. Emphasis: Medium Italic in ink ("*with* and *for*") or the key word in #194EFF |
| Cover title | Bold 112, ink, key phrase in #194EFF. Eyebrow **ExtraBold 32 UPPERCASE ink**, +1 tracking |
| Statement word | **ExtraBold 132, Gradient 1, no period** ("Coaching", "Context", "People") |
| Statement body | SemiBold 36 ink; emphasis **SemiBold Italic #194EFF** |
| Question headline | Bold 72 ink, payoff words #194EFF |
| Section title | **Bold 72 UPPERCASE ink** (80 when an eyebrow sits above it), centred in a white card (§4a) |
| Big stat | Bold ~99–140 ink; unit Bold 40 #194EFF (%, ×, pts); zero-padded ("05%") |
| Row/label title | Bold 32–36 #194EFF (row labels: "Effort Signals", "Manpower & Active Ratio") |
| Numerals | **Bold 32–42 #194EFF, two-digit "01–09"** everywhere (lists, features, FAQs, chips) |
| Section label | Bold 18 UPPERCASE +2 #194EFF ("LIVE TODAY", "PILOT DETAILS") above a hairline |
| Card title | Bold 22–26 ink |
| Body | Regular 15–24 ink @75 |
| On dark showcase | numeral Bold 32 #194EFF · title **Bold 26 #FFFFFF** · body Regular 18 #F2F2F2 @80 |
| Takeaway (footer band) | Bold 24 #194EFF label + Medium 24 ink @90 sentence, **or** a centred Medium 30–36 sentence with a SemiBold Italic blue phrase |
| Closing name | Bold 112 ink; role ExtraBold 32 #194EFF UPPERCASE; contact Medium 32 ink |

#### Light layout grammar

- **Header:** eyebrow at (48, 40), Bold 40 headline below it. **Content zone starts at a full-width hairline at y = 196.**
- **Edge-to-edge grids:**
  - Cells run from x = 0 to 1920 with no radius and no gaps, separated by hairlines.
  - Alternate cells use `cellTint` or `surface` (checkerboard).
  - Label columns (the first column) are `surface` or `featured`.
- **Column splits used:** 2 × 960 · 3 × 640 · 4 × 480 · sidebar 560 + 1360 · label column 400 + 1520 · triple 720 / 480 / 720 (team).
- **Footer band:**
  - Full width at **y = 920, 160 tall**, `surface` fill, with the corner chevron motif at both ends.
  - Every content slide ends here with a takeaway, sources, assumptions or a process flow.
- **Inner padding:** 48 inside cells. Cell text blocks are vertically centred.
- **No logo and no page numbers on content slides.** The logo appears on the cover and the ending slide only.
- **Rounded elements are the exception.** Radii are listed in §5.2.

#### Light components

- **Solid header pill:** #194EFF fill, radius 12, 48 tall, SemiBold 20 white. Used for framework column heads (Frontline / Managers / Managers of Managers).
- **Header cell:**
  - A full-cell column header with a tinted label: SemiBold 14 UPPERCASE #194EFF over Bold 32 ink.
  - The **chosen or top tier is solid #194EFF** with white text (Performer).
- **Status chip:** a small radius-8 chip with Bold 12 UPPERCASE +1.5 text.
  - **Planned or dated** (NOVEMBER, EARLY Q1, PLANNED): #F7FBFD fill, #194EFF text.
  - **In progress:** #F9CF44 @45% fill, ink text.
  - **Live / done:** #55E194 @35% fill, ink text.
  - **Blocked / at risk:** #FF8F6B @35% fill, ink text.
- **Goal chip:** a stacked numeral + label tile.
  - #F5F9FB fill, 1px ink @10 stroke, radius 8.
  - Laid out three across ("01 Product Knowledge").
- **Product heading (light):** when a product name is a heading or sub-heading, place the product's **"on white" SVG** as that heading. Rules are in §7a.
- **Dark showcase panel:** a **#13151C** block.
  - Lit by two #194EFF ellipses at 40% with ~100 layer blur.
  - Phones carry a drop shadow (#13151C @80, r28).
  - Floating UI cards break out of the phone using background blur 28.
  - Captions sit inside the panel.
- **Callout pill on UI:** solid #194EFF, white Medium text, radius 8.
- **Tag chip (DAILY / WEEKLY):** a blue-tint parallelogram with Bold UPPERCASE #194EFF text, next to a Medium Italic 40 ink word.
- **SOLUTIONS tag:** a #194EFF @10 mini-chip ("SOLUTIONS", Bold 13, +1.5) + Medium Italic 18 role.
- **Process flow:** chips joined by blue arrows "→". The final step is a solid #194EFF chip.

#### Light illustration

- **Statement slides use single-line art** on the right (white) half, over a pale #F5F9FB chevron watermark.
  - Stroke: 2px gradient **#194EFF → #13151C → #13151C → #194EFF**.
  - One continuous line, one human metaphor:
    - Coaching: a hand gripping a rope.
    - Context: puzzle pieces.
    - People: two face profiles.

#### Light slide templates (31-slide reference)

The cover, section and ending slides are fixed in §4a. For content slides:

1. **Stat grid:** 4 × 2 hairline grid with blue Bold 32 row labels and checkerboard stat cells. The footer band holds a centred Medium 36 takeaway.
2. **Question:** pale background chevrons and a white band split 50/50.
   - Left: a Bold 72 question with a blue payoff, a #194EFF 72×6 bar (pill) and a lead-in.
   - Right: a chip cloud.
3. **Statement** ("Coaching", "Context", "People"): a 50/50 split.
   - Left (#F5F9FB): spaced eyebrow, ExtraBold 132 gradient word, 72×6 ink bar and SemiBold 36 body.
   - Right: line art.
4. **Solution:** DAILY / WEEKLY halves, dark phones on a pale strip, blue callout pills and "05 DX Coaching Types" chips.
5. **Evidence:** a 2 × 2 checkerboard of "01–04" findings and three testimonial rows with cut-out portraits over solid blue chevrons.
6. **ROI chart:** flush KPI cells (each important KPI marked with the pointer, §7b), a flat solid-blue bar chart and a dashed blue break-even line.
7. **Two-panel comparison:** radius-16 panels, neutral (#F5F9FB + hairline) and DX (#194EFF @8), each with "01–05" numerals.
8. **Framework matrix:** solid blue header pills, white framework tiles with a hairline, and **chevron bullets** in the lists (§7d).
9. **Team:** three columns (720 / 480 / 720).
10. **Swimlane journey:** Agent / Leader (featured) / DignifyX lanes.
11. **Pilot details:** big stat cells plus a solid blue "40+" tile.
12. **Features list:** each product row is headed by its "on white" product SVG.
13. **Product detail:** a 560 px `surface` sidebar plus a 1360 px dark showcase panel.
14. **Learning science**, **Scoring**, **Goal tracks**, **Customisation** and **FAQ**, as in the Figma white theme.

---

## 4a. Opening, section and ending slides (fixed. Always build them exactly like this)

Every deck has **exactly one** opening (title) slide and **one** ending slide. Use section slides between major parts.
- Don't improvise these three slides.
- Only change their text.
- Keep positions, sizes, colours and artwork as specified. Coordinates are at 1920 × 1080.

### Dark theme

**D1. Opening / title slide** (Figma: Reference "01 - Title" `3371:40677`, Section 4 / 5 / 6 "01 - Title")
- **Background and light:**
  - Background #13151C.
  - Glow 1 at (−151, −339) and glow 2 at (1079, 290): 906 × 906, Gradient 1, 40% opacity, layer blur 800.
  - Chevron haze: 974 × 1551 Gradient 1 chevron (end stop @28%), layer blur 500, behind the left half.
- **Hero artwork (right):** the DX X, from `assets/logo/dignifyx-logomark.svg`.
  - A solid Gradient 1 chevron plus the two diamonds as **white outlines** (stroke 18–32).
  - It bleeds off the top, right and bottom edges.
  - **Version A (logo-led):** the X at (563, −219), 1597 × 1551.
  - **Version B (title-led):** the X at (1035, 0), 1112 × 1080. The chevron is 678 × 1080; the diamond outlines are 517 × 494 with a 32 stroke.
- **Left column, x = 113–125, in one of two versions:**
  - **A, logo-led:**
    - White logo 458 w at (113, 445).
    - Meta block at (113, 584): a 3 × 83 white bar, then "MONTH YEAR" Regular 32 white and the "DECK NAME" SemiBold 36 white UPPERCASE.
  - **B, title-led:**
    - White logo 412 w at (120, 91), or (120, 240) when the person version is used.
    - Title Bold 88 white at (125, 414), max 652 w.
    - Meta block at (125, 674): a 3 × 83 white bar, then "MONTH YEAR" Medium 36 white UPPERCASE and a subtitle SemiBold 40 in **Gradient 1** UPPERCASE.
    - **Person version** (speaker decks): Name Bold 64 + role Regular 32, +6 tracking, UPPERCASE. Below it, the event Bold 40 Gradient 1 + date Bold Italic 20, +6 tracking, UPPERCASE.
- **No page number** on the opening slide, except the person version (Section 5), which shows "01".
- **Default:** use **version B** when there is a deck title; use version A for short intro decks.

**D2. Section slide** (Figma: Section 4 "13 - Section Slide" `3371:107213`, Section 1 "4 - Section slide")
- Background #131F2F. Glow 1 at (−151, −47) and glow 2 at (1079, 290), as above.
- **Two mirrored chevrons pointing inward** from the lower corners:
  - Each is 974 × 1551, Gradient 1 (end stop @28%).
  - Each is drawn twice: one sharp copy and one blurred 300.
  - Left at (−417, 163), right at (1364, 163).
  - Only their inner tips show, rising from the bottom edge.
- **Title:** Bold 80, **UPPERCASE**, white, centred on x = 960, vertically centred at y ≈ 500–580. One line; max ~1400 w.
- **Optional eyebrow** above the title: pointer + "PART 02" SemiBold 20, +3 tracking, in Gradient 1, centred.
- **White logo, 265 w, bottom-centre at (827, 907).**
- No page number, takeaway or cards.

**D3. Ending slide** (Figma: Feature Deck "13 - ending slides" `3375:138006`)
- **Same chrome as the section slide** (D2): the same background, glows, inward chevrons and bottom-centre logo.
- Title **"THANK YOU"** in Bold 80 UPPERCASE white, centred.
- **Optional closing / purpose slide** placed just before it (Reference "08" `3371:41448`, Section 5 "20"):
  - Background #13151C, white logo 412 w at (125, 167).
  - **"OUR PURPOSE"** Bold 40 (or 112 for the hero version) in Gradient 1.
  - "Is To Help People" Medium Italic 46, then a glass tag "BUILD CAREERS" Bold 40.
  - "THEY CAN BE PROUD OF" Regular 40, +36 tracking.
  - Values line ExtraLight 32, +3.5 tracking, with pipes.
  - Contact details (name, email, phone) go here when needed: a 3 px white bar + Medium 32.

### Light theme

**L1. Opening / title slide** (Figma: White theme "144" `3585:77290`)
- Background #FFFFFF.
- **Left block:**
  - Black logo 412 w at (120, 182).
  - Eyebrow ExtraBold 32, +1 tracking, UPPERCASE, #13151C at (120, 361).
  - Title Bold 112 #13151C, 860 w, at (120, 417), with the key phrase in #194EFF.
  - Meta at (120, 857): a 3 × 40 bar in #13151C @30, then "MONTH YEAR" Medium 32 UPPERCASE ink.
- **Right:** the DX X at (532, −236), 1597 × 1551.
  - The chevron is solid Gradient 1 (974 × 1551).
  - The two diamonds are **#13151C outlines, stroke 5**.
  - It bleeds off the top, right and bottom edges.
- No page number.

**L2. Section slide** (Figma: White theme "180", "181", "184", "186")
- Background #FFFFFF.
- **Four huge chevrons sweeping left → right:** each 982 × 1565, at y = −242 and x = −480, −31, 419 and 869.
  - First: solid Gradient 1.
  - Second: Gradient 1 at 10%.
  - Third and fourth: #F5F9FB.
- **A white title card, centred:**
  - Without an eyebrow: 880 × 184 at (520, 448), padding 32. Title Bold 72 UPPERCASE #13151C, then a 216 × 8 #194EFF bar (radius 3) centred under it.
  - With an eyebrow: about 900 × 225 at (510, 428). Pointer + "APPENDIX 01" Bold 26, +4 tracking, UPPERCASE, #194EFF, centred. Then the title Bold 80 UPPERCASE ink and the 216 × 8 bar.
  - Widen the card for long titles (up to 1349 w).
- No logo and no page number.

**L3. Ending slide** (Figma: White theme "173" `3585:82589`)
- **The opening layout (L1)**, with the same DX X on the right.
- **Left block:**
  - Black logo 412 w at (120, 247).
  - Role eyebrow ExtraBold 32 UPPERCASE **#194EFF** at (120, 426).
  - Name Bold 112 #13151C at (120, 482).
  - Contact at (120, 682): a 3 × 40 bar in ink @30 + Medium 32 ink ("email · phone").
  - Values line at (120, 802): Medium 24, +2 tracking, ink @60, with **#194EFF pipes**.
- If no person is named, use "THANK YOU" Bold 112 ink as the name line and keep the rest.

### Combination decks
- **Opening and ending slides** use the user's chosen lead theme, or the majority theme if none is named. Use the same theme for both, so the deck is bookended consistently.
- **Each section slide** uses the theme of the section that follows it.

---

## 5. Layout grid and corner radii (16:9, 1920×1080)

### 5.1 Grid (dark)
- Outer margin **80**; content width **1760**; gutters **24** (cards) or **40** (hero columns).
- **Header zone:**
  - Eyebrow (pointer + label) at (80, 52).
  - Headline at (80, 94): one line, max width 1540.
- **Content zone:** y = 206–890.
- **Takeaway zone:** y ≈ 890–960.
- **Footer:**
  - Page number Bold 71 at (28, 966) in #3F8FF2 @30%.
  - "Confidential / Not for Distribution" Regular 16 at 40–45% opacity, bottom-right (x end 1840, y 1020).
- **Logo:** top-right at (1640, 56), 200 wide, on content slides.
- **Columns:** 2 × 868, 3 × 571, 4 × 422 (at 1760 wide / 24 gutter).

Print one-pager (A-series, 420×595 or A4):
- 25px margins.
- Eyebrow 8px with a pointer.
- Headline 20px Bold.
- Body 10–14px.
- A cyan "spine" line with chevron nodes.

### 5.2 Corner radii (measured from the Figma file)

**Dark theme.** The radius follows the element's size: big containers are rounder, small items tighter. Nested items step down.

| Element | Typical size | Radius |
|---|---|---|
| Large panels / containers, slide-wide cards, photo frames, testimonial / quote cards, glass "Strength" cards | ≥ 480 w and ≥ 360 h (e.g. 1808×831, 560×828, 489×380) | **40** |
| Standard cards and stat / KPI cards, wide row bands | 280–1808 w, 240–430 h | **32** |
| Medium cards | ~350–520 w, 160–240 h | **28** |
| Small tiles, list rows, step tiles | ~250 w, 64–120 h | **24** |
| Compact cards, image tiles | ~270–570 w, 300–365 h inside a panel | **20** |
| Bars, inputs, slim rows, small chips | 40–63 h | **16** |
| Tags / mini chips | 24–45 h | **8–9** |
| Pills (nav items, label pills, takeaway pill, buttons), avatars, dots, icon circles | any | **fully rounded** (height ÷ 2) |
| Segmented bars | joined pieces | outer ends only: **32/0/0/32** and **0/32/32/0** |
| Columns attached to a base | tall columns | top only: **40/40/0/0** |

Nesting rule: inner radius = outer radius − padding (but never below 8). The ladder is **40 → 32 → 28 → 24 → 20 → 16 → 8**, plus pill.

**Light theme.** Mostly square, flush grid cells with **0** radius.

| Element | Radius |
|---|---|
| Grid cells, footer band, dark showcase panels, columns | **0** |
| Comparison panels, large white cards on tint | **16** |
| UI cards inside showcase panels | **12–13** |
| Solid header pills, product-SVG tiles, framework cards | **12** |
| Chips, goal chips, role chips, framework tiles, callout pills | **8** |
| Mini tags ("Leaders' Choice", status labels) | **6** |
| Accent / divider bars (216×8), chart bars | **3** |
| 72×6 accent bar, avatars, dots | fully rounded |

---

## 6. Slide templates (dark)

Every deck is assembled from these templates. **The opening, section and ending slides are fixed by §4a.** Pick one template per content slide; do not invent new chrome.

1. **Statement:** no cards.
   - Pointer eyebrow ("THE MISSING PIECE").
   - One huge word with a period ("Coaching.") in `gradient.textDark`.
   - One or two SemiBold 52 lines with an emphasis in Gradient 1.
2. **Stat grid:**
   - A row label card (featured) + 3 stat cards per row (r32).
   - Big number (zero-padded) + Gradient 1 unit + a 2-line caption.
   - The pointer marks the headline KPI.
   - Takeaway pill below.
3. **Two-panel comparison:** a glass panel vs a featured panel (r40). Each holds numbered items: an "01" Light numeral in Gradient 1, a SemiBold title and body.
4. **Evidence / testimonial:**
   - Insight card with numbered findings.
   - A connector bracket to 3 testimonial cards (r40): big % stat, metric in Gradient 1, cut-out portrait.
5. **Chart:**
   - KPI cards left (featured on top, pointer on the key KPI) and a chart card right.
   - Bars in Gradient 1.
   - Dashed break-even line in #15B6FF.
6. **Framework matrix:** row labels (Hard skills / Personalisation / Soft skills), column header pills, framework tiles, **chevron bullets** in the lists, and dashed outlines for roadmap items.
7. **Team:** two lists of person rows (avatar 68, name + role chip) flanking a featured statement card.
8. **Swimlane / journey:** Agent / Leader (featured) / DignifyX lanes, milestone dots with glow, session pills and "Leaders' Choice" badges.
9. **Product detail:** a left sidebar ("on black" product SVG as heading) + a showcase panel (2–3 phones over a soft glow, numbered captions).
10. **Feature list:** Live Today vs In Development panels, with an "on black" product SVG as each row heading and status chips.
11. **FAQ:** 3 numbered column headers ("01–03"), Q&A cards ("Q:" in Gradient 1) and a process-flow pill row.
12. **Purpose / contact closing** (optional, before the ending slide): see §4a D3.

**Takeaway bar** (end of most content slides):
- A full-width pill: 4% fill + 22% stroke (dark), or the footer band (light).
- A bold Gradient 1 label + one Medium 24 sentence.

---

## 7. Components

- **Eyebrow:** the **pointer graphic** (§7b) + a SemiBold UPPERCASE label. On dark, the label is in Gradient 1 / #15B6FF; on light, Bold #194EFF.
- **Glass card / Featured card / Strong tile:** see §4.
- **Status chip:** a radius 8 chip with Bold 12–13 UPPERCASE text, +1.5 tracking. Map state to colour:
  - LIVE / Accomplished → Success #55E194
  - IN PROGRESS / Pilot → Warning #F9CF44
  - PLANNED / dated (NOVEMBER, EARLY Q1) → #15B6FF (dark) / #194EFF (light)
  - At risk / blocked → Error #FF8F6B
- **SOLUTIONS tag:** a tiny gradient pill "SOLUTIONS" + a Medium Italic product role ("DX Leader").
- **Numbered item:** a two-digit numeral ("01") in Gradient 1 (dark) or #194EFF (light) + a SemiBold title + Regular body at 70%.
- **Connector:** a 2px #15B6FF line at 70% + glowing node dots.
- **Page number:** Bold 71, #3F8FF2 at 30%, bottom-left (28, 966), always two digits.
- **Product headings:** INTELLIGENT COACHING, DX COACH, DX LEARN, AI CUSTOMER ROLE PLAY, VIRTUAL JOINT FIELDWORK, AGENCY LEADER AVATAR.
  - Use the official product SVGs from `assets/products/`, **only when the product name is a heading or sub-heading** (§7a).
- **Phone mockup:** a dark device, angled or upright; screens are always dark UI.

### 7b. Pointer graphic (replaces the ◆ diamond)

The **pointer** is the brand's marker: a hollow diamond built from two chevrons, pierced by a glowing vertical needle. Figma: "Additional graphics" section, node `3587:98140`.

| File | Use on |
|---|---|
| `assets/graphics/dignifyx-pointer-on-black.svg` / `.png` | Dark backgrounds (white → #15B6FF) |
| `assets/graphics/dignifyx-pointer-on-white.svg` / `.png` | Light backgrounds (#194EFF → #15B6FF) |

Use the pointer:
1. **In front of every eyebrow** (the small uppercase label above a headline or section title).
   - Height ≈ 1.5–1.7 × the label's cap height: **26–32 px** for a 20–24 px eyebrow; 36–40 px for a 32 px eyebrow.
   - Gap 8–12 px, vertically centred on the label.
2. **With important KPIs:**
   - Place it to the left of, or just above, the one or two headline numbers on a slide (big stats, ROI, the key pilot result).
   - Height ≈ 0.5–0.6 × the number's cap height.
   - Mark **at most two KPIs per slide**, so it keeps its meaning.
3. Optionally as a small node marker on timelines and connectors.

Rules:
- Keep its proportions (≈ 0.57 : 1, width : height). Never recolour, rotate or stretch it.
- Use the PNGs in PowerPoint, Keynote and Docs, because the glow uses SVG blur filters.
- Never use the retired ◆ rotated square.

### 7c. Numbers: always two digits for 0–9

**Every single-digit number written on a slide or page gets a leading zero:**
- 01, 02, 03 … 09, and 00 where needed.
- Covers list and step numerals, page numbers, section numbers ("PART 02"), counts in headlines and body ("04 pilot agencies", "03 paid conversions"), big stats and their units ("05%", "07×", "03 yrs"), chip numerals and table figures.
- Numbers of 10 and above stay as they are.

**Exceptions:** only where padding would change meaning or break a standard format:
- decimals (0.5, 7.5%);
- dates and times (3 March 2026, 9:30);
- quarters and fiscal codes (Q1, FY2026, Y1);
- currency amounts ($5,000);
- phone numbers, versions and product or legal names.

### 7d. Chevron bullets

Bulleted lists may use the **DignifyX chevron** (`assets/logo/dignifyx-chevron.svg`, pointing right) instead of round bullets.
- **Size:** the bullet's height ≈ the text's cap height to 1.2× (14–20 px for 18–24 px body). Indent 12 px.
- **Colour:** the chevron keeps its Gradient 1. On AI-topic slides (§3.2), a purple chevron is allowed.
- **Where:** feature, benefit, framework, "what you get" and process lists, on both themes.
- **Keep it consistent:** use one bullet style per slide. Use plain dots for dense tables or footnotes.
- **Sub-bullets:** a 70%-size chevron at 50% opacity.

---

## 7a. Brand assets (use these files, never redraw)

Official SVGs ship with this skill in **three folders** under `assets/`. Paths are relative to this SKILL.md.

**Always place these files instead of typing, tracing or rebuilding a logo, wordmark or graphic.** Scale proportionally only. Never stretch, recolour, crop, outline, add effects to, or re-typeset them.

### Folder 1: `assets/logo/` (company identity)

| File | What it is | Native size | Use on |
|---|---|---|---|
| `assets/logo/dignifyx-logo-black.svg` | Full DIGNIFY**X** logo: ink letters + blue gradient X | 412×99 | **Light** backgrounds |
| `assets/logo/dignifyx-logo-white.svg` | Full DIGNIFY**X** logo: white letters + blue gradient X | 412×99 | **Dark** backgrounds |
| `assets/logo/dignifyx-logomark.svg` | The **X logomark**: blue gradient chevron + two outlined diamonds | 1332×1294 | Both themes. Cover / ending hero art (§4a), app icon, avatar, favicon, watermark |
| `assets/logo/dignifyx-chevron.svg` | The **chevron** alone, solid blue gradient | 812×1294 | Both themes. Section-slide sweeps, **chevron bullets (§7d)**, background accents |

**Logo rules:**
1. **Pick the colourway by background:** light → black logo; dark → white logo. Never mix them on one artwork.
2. **Placement:** follow §4a for the opening, section and ending slides.
   - Dark content slides: 200 w top-right at (1640, 56).
   - Light content slides: no logo.
   - Print one-pager: 120–160 w top-left.
   - Social square: 30–40% of the width.
3. **Clear space:** at least 0.25 × the logo's height on every side. **Minimum width:** 120 px on screen, 25 mm in print.
4. **Logomark vs chevron:**
   - Use the logomark when the brand must be recognised without the name.
   - Use the chevron as a pure graphic device.

### Folder 2: `assets/products/` (product logomarks)

| Product (as written in content) | Light theme: **on white** | Dark theme: **on black** |
|---|---|---|
| Intelligent Coaching | `intelligent-coaching-on-white.svg` (738×164) | `intelligent-coaching-on-black.svg` (739×165) |
| DX Coach | `dx-coach-on-white.svg` (706×120) | `dx-coach-on-black.svg` (747×127) |
| DX Learn | `dx-learn-on-white.svg` (667×164) | `dx-learn-on-black.svg` (712×176) |
| AI Customer Role Play | `ai-customer-role-play-on-white.svg` (547×187) | `ai-customer-role-play-on-black.svg` (587×201) |
| Virtual Joint Fieldwork | `virtual-joint-fieldwork-on-white.svg` (580×181) | `virtual-joint-fieldwork-on-black.svg` (598×186) |
| Agency Leader Avatar | `agency-leader-avatar-on-white.svg` (471×261) | `agency-leader-avatar-on-black.svg` (471×233) |

- Use **"on white"** files on white, #F5F9FB, light tints and light artwork.
- Use **"on black"** files on #13151C, #131F2F, dark showcase panels and dark artwork. Never swap them.
- **Known issue:** `agency-leader-avatar-on-black.svg` is missing the first "A" of AGENCY.
  - Until a corrected file is supplied, render the stylised "A" from the on-white file onto it.
  - Use `matrix(1.038 0 0 1.038 -18.879 -38.08)` and widen the viewBox to `-8 0 479 233`.
  - Or ask the user for a corrected asset.

### Folder 3: `assets/graphics/` (brand graphics from Figma "Additional graphics")

| File | What it is | Use |
|---|---|---|
| `assets/graphics/dignifyx-pointer-on-black.svg` (+ `.png`) | Pointer: two-chevron diamond + glowing needle, white → #15B6FF | Eyebrows and key KPIs on dark (§7b) |
| `assets/graphics/dignifyx-pointer-on-white.svg` (+ `.png`) | The same pointer in #194EFF → #15B6FF | Eyebrows and key KPIs on light (§7b) |

New graphics taken from the Figma file are added here (§13).

### When to use a product SVG (strict rule)

**Use a product SVG only when the product's name is used as a heading or sub-heading.** The SVG then *is* that heading. Don't also typeset the name beside it.
- ✅ A product as a card header, sidebar heading, feature-row heading, or slide or section heading.
- ❌ A name inside a sentence or bullet, or in tables, captions, footnotes, chips, process flows or body-copy lists.
- ❌ Decoration, background or watermark. Only the DignifyX logomark, chevron and pointer may be decorative.

**Sizing:**
- Cap height ≈ the cap height of the heading it replaces.
- Widths: 300–420 px for card or sidebar headings, 420–560 px for slide headings, 180–260 px for compact rows.
- Left-align it with the body below, with a 16–24 px gap.

### How to use the files per medium
- **Figma:**
  - Read the SVG text and call `figma.createNodeFromSvg(svg)`, then name the node.
  - Scale with `rescale()`.
  - Reuse in-file components where they match.
- **HTML / web:** inline the SVG, and set only its width or height.
- **PowerPoint / Docs / PDF:** use a transparent PNG rendered at ≥ 2× the placed size, cropped to the artwork's edges. The pointer already has PNGs.

### Never
- Rebuild the logo, a product name or the pointer as live text or shapes.
- Use the wrong theme variant, or retired lockups (including the ◆ diamond).
- Use product SVGs for anything other than headings or sub-headings.

---

## 8. Imagery and art direction

- **The X:** the logo's chevron is the core motif:
  - the hero on opening and ending slides;
  - the inward-pointing frame on section slides;
  - a whisper-level haze on content slides;
  - bullets in lists.
- **Light as material:** soft blue bloom behind cards, glowing nodes, the pointer's glowing needle, rising-light chevrons.
- **People:** real SE Asian agents and leaders. Use cut-out portraits, duotone navy group shots, or documentary workshop photos (r40 frames on dark). No stock-style illustration.
- **Symbolic texture** for statement slides: giant glyphs (? ! ↑) in Gradient 1 at ~8% opacity.
- **Charts:**
  - Series 1 is #194EFF / Gradient 1; series 2 is #15B6FF, or a lighter tint of it.
  - Purple only on AI-topic slides.
  - System colours only for status.

---

## 9. Voice and copy

- Empathetic, evidence-based, direct. Plain claims backed by numbers: "+100% appointments for ~25 agents".
- Human vocabulary: dignity, craft, pride, worthy, confidence, capability, rhythm.
- Domain vocabulary:
  - Agency, Agents, Leaders, Rookie → Good → Great, MDRT/COT/TOT, X-Factor.
  - Coaching Guides, SAP (Sales Advisory Process), Effort and Effectiveness Signals.
  - Goal Tracks (Explorer, Builder, Performer).
- Headline pattern: claim + one emphasised word. No hype words ("revolutionary", "game-changing").
- British spelling (personalise, programme, prioritise).
- Two-digit numbers 01–09 everywhere (§7c).
- Every content slide ends with a takeaway sentence.

### Standard narrative arc for a sales deck

1. **Opening slide (§4a).**
2. Problem (stats) → Status-quo fixes → Statement ("Coaching.") → Solution → Early evidence → ROI.
3. **Section: Why We're Different** → Statement ("Context.") → Governance → Frameworks → Team.
4. **Section: How to Get Started** → Statement ("People.") → Stakeholder journey → Pilot details.
5. **Section: Appendix 01** → Features, product detail, science, scoring, personalisation, customisation, FAQ.
6. (Purpose / contact) → **Ending slide (§4a).**

---

## 10. Do / Don't

**Do**
- Ask for the theme first (§0).
- Use Plus Jakarta Sans everywhere, and the tokens in §3 by name.
- On dark, lead with Gradient 1 / #15B6FF and support with #194EFF.
- Build the opening, section and ending slides exactly as in §4a.
- Use the §5.2 radius ladder.
- Use the pointer for eyebrows and key KPIs.
- Use chevron bullets for lists.
- Write 01–09.
- Keep one idea per slide and one emphasised word per headline.
- Keep app UI dark in both themes.

**Don't**
- Swap the blue roles because of the Figma variable names (Figma "Primary" = #194EFF, "Secondary" = #15B6FF).
- Use purple outside AI-topic slides, or system colours decoratively.
- Use the ◆ diamond, or write single digits without a zero.
- Invent new cover, section or ending layouts.
- Use thick #194EFF borders on every card. Reserve them for the featured card.
- Write RESPECT in place of INTEGRITY in the values line.

---

## 11. Implementation snippets

### CSS custom properties
```css
:root {
  --dx-font: "Plus Jakarta Sans", Inter, system-ui, sans-serif;
  --dx-blue-primary: #15B6FF;      /* dark-theme accent (solid) */
  --dx-blue-secondary: #194EFF;    /* dark-theme secondary, light-theme accent */
  --dx-gradient-1: linear-gradient(90deg, #194EFF 0%, #15B6FF 100%); /* dark-theme accent */
  --dx-purple-primary: #7519FF;    /* AI-topic slides only */
  --dx-purple-secondary: #9F19FF;  /* AI-topic slides only */
  --dx-gradient-purple: linear-gradient(90deg, #7519FF, #9F19FF);
  --dx-success: #55E194; --dx-warning: #F9CF44; --dx-error: #FF8F6B;
  --dx-bg-deep: #13151C; --dx-bg-dark: #131F2F; --dx-bg-navy2: #11233B;
  --dx-light-bg: #FFFFFF; --dx-light-surface: #F5F9FB; --dx-ink: #13151C;
  --dx-page-number: rgba(63, 143, 242, .3);
  /* dark radius ladder */
  --dx-r-40: 40px; --dx-r-32: 32px; --dx-r-28: 28px; --dx-r-24: 24px; --dx-r-20: 20px; --dx-r-16: 16px; --dx-r-8: 8px; --dx-r-pill: 999px;
  /* light radius ladder */
  --dx-lr-panel: 16px; --dx-lr-pill: 12px; --dx-lr-chip: 8px; --dx-lr-tag: 6px; --dx-lr-bar: 3px;
}
.dx-bullets li { list-style: none; padding-left: 28px; background: url(assets/logo/dignifyx-chevron.svg) no-repeat 0 .3em / auto 1em; }
```

### Figma
- Paint styles **Gradient 1** and **Gradient 2** and the variables Primary / Secondary / Color purple already exist in the file. **Reuse them**; don't create duplicates.
- When binding, map the roles as in §3.1:
  - accent → Gradient 1 or Secondary (#15B6FF);
  - support → Primary (#194EFF).

---

## 12. Workflow when using this skill

1. **Ask for the theme (§0)**: Light, Dark, or a combination with a ratio. Don't start before you have the answer.
2. **Identify the format:** deck 16:9, one-pager, A4 leaflet, 9:16 video or social.
3. **Plan the deck:**
   - Map the content to the narrative arc (§9).
   - Choose one template per page (§4 Light / §6 Dark).
   - Add the fixed opening, section and ending slides (§4a).
4. **Apply the specs:**
   - Tokens and colour roles (§3), including purple only for AI topics and status colours for success, warning or error.
   - Type (§2), grid and radii (§5).
   - Pointer (§7b), two-digit numbers (§7c) and chevron bullets (§7d).
   - Assets from `assets/` per §7a, in the variant that matches the theme.
5. **If the content needs a graphic, icon or element the skill doesn't ship,** look for it in the Figma file first and add it to the skill (§13).
6. **Write the copy:** headlines as one claim with one emphasised word; end each content slide with a takeaway.
7. **Self-check before delivering:**
   - Theme as chosen, opening / section / ending slides per §4a.
   - Blue roles; purple only on AI slides; status colours only for status.
   - Radii per §5.2.
   - Pointer instead of the diamond; 01–09 numbers; chevron bullets.
   - Product SVG variant and heading-only rule; app UI dark; values wording.

### Combination decks
1. **Turn the ratio into slide counts.** Example: 20 slides at 70/30 → 14 dark + 6 light. Round in favour of the lead theme.
2. **Switch theme only at section boundaries.**
   - Assign whole sections to one theme; the section slide takes the theme of its section.
   - Never alternate theme slide by slide.
3. **Default allocation, unless the user says otherwise:**
   - **Dark** for vision, emotion, statements, product / UI showcases and evidence moments.
   - **Light** for data-heavy, tabular, process, commercial, compliance and appendix content.
4. **Bookend the deck** with opening and ending slides in the lead theme (§4a).
5. **Each slide follows one theme completely.** Mixing within a slide is allowed only for the light theme's dark showcase panels.
6. **Report the final split** (e.g. "14 dark / 6 light, by section") when you deliver.

---

## 13. Figma source library (and keeping this skill up to date)

**File:** DX Sales Material, key `T1o7OpZLnVU3zlwlZd08aY`, page **Feature Deck** (`3015:63303`).

| Section | Node | What it holds |
|---|---|---|
| White theme | `3585:77289` | 31-slide light deck (cover `3585:77290`, sections `3585:77923` / `78284` / `78561` / `81628`, ending `3585:82589`) |
| Dark theme | `3585:85356` | Six dark decks: Reference `3371:40676`, Section 1 `3371:41783`, Section 4 `3371:104866`, Section 5 `3371:115257`, Section 6 `3371:126443`, Feature Deck `3375:131451` |
| Additional color (AI topics only) | `3585:97646` | Primary purple #7519FF, Secondary purple #9F19FF |
| Additional color (status) | `3585:97647` | Warning #F9CF44, Error #FF8F6B, Success #55E194 |
| Additional graphics | `3587:98135` | Pointer graphic `3587:98140` |
| Styles / variables | file-level | Gradient 1, Gradient 2; Primary #194EFF, Secondary #15B6FF, Color purple #7519FF |

**When future content needs an element the skill doesn't ship** (an icon, illustration, chart style, mockup, UI card or texture):
1. **Search the file before you draw anything.**
   - Use `get_metadata` on the sections above, then `get_screenshot` to confirm the match.
   - Or run a read-only `use_figma` script that uses `findAll` by name or type.
2. **Export the element as SVG:**
   - In `use_figma`, call `node.exportAsync({ format: 'SVG_STRING' })` and return the string. This works even where direct downloads from figma.com are blocked.
   - Crop the viewBox to the artwork, and trim huge blur bleeds.
   - Also render a transparent PNG for Office use.
3. **Save it** to `assets/graphics/<name>-on-black|on-white.svg`, making a light variant when the original only works on dark.
4. **Update this skill in the same task:**
   - Add a row to §7a Folder 3 with the file, what it is, its source node ID and **when to use it**.
   - Add any usage rules (size, placement, limits) to §7 or §4.
   - Add the path to `tokens.json` → `assets.graphics`.
   - Bump the version note in the H1 if the change is significant.
5. **Never modify the Figma file** while gathering assets (read-only), unless the user asks you to.
