---
name: dx-sales-material
description: "DX - Sales material: DignifyX brand system for decks, one-pagers, leaflets, social and video frames. Use whenever creating, redesigning, reviewing or writing copy for any DignifyX / DX marketing or sales material (pitch decks, insurer decks, product overviews, roadmaps, flyers, brochures, testimonials, statement slides) in any medium: Figma, HTML, PowerPoint, PDF or plain copy. Covers colours, typography, layout grids, slide templates, components and tone of voice."
---

# DX - Sales material

The single source of truth for how DignifyX (DX) sales and marketing material looks, reads and is structured. It is distilled from the DX Sales Material Figma file: Feature Deck, Video/print page and the "Proving the ROI of AI-Powered Coaching" deck in dark and light themes.

Machine-readable tokens live in `tokens.json` next to this file.

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

### Light theme (insurer decks, print, documents)
- Background #F3F6FB; glows at ≤16% opacity; watermark ~6%.
- **Cards**: solid white, 1px navy 8% stroke, shadow `0 8 28 navy/6%`. Nested cards #EEF3FA.
- **Featured card**: `gradient.brand` at 14%→6% with a #194EFF 35% stroke; navy text.
- **Strong tile**: unchanged (solid blue gradient, white text).
- Text: navy #0F1B2D; body 70–80%.
- Logo: dark lettering (#3F4250) + gradient X.
- **Product lockup tiles and app UI stay dark** (navy base) in both themes. They are brand assets and screens.

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
12. **Product detail**: left sidebar (lockup tile, For the Agent / For the Leader / For the Insurer / Design Note in Primary Blue, status chip at bottom) + showcase panel (2–3 phones over a soft glow, numbered captions below each).
13. **Feature list**: Live Today vs In Development panels; lockup tile + one-sentence benefit; status chips (NOVEMBER, EARLY Q1).
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
- **Product lockups** (always on a dark tile): INTELLIGENT COACHING, DX COACH, DX LEARN, AI CUSTOMER ROLE PLAY, VIRTUAL JOINT FIELDWORK, AGENCY LEADER AVATAR. Never recolour or redraw them.
- **Phone mockup**: dark device, angled or upright, screens always dark UI; floating UI cards may break out of the phone.

---

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
- Keep lockup tiles and app UI dark in both themes.

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

1. Identify the format (deck 16:9, one-pager, A4 leaflet, 9:16 video, social) and the theme (dark default; light for insurer and print).
2. Map the content to the narrative arc (§9) and choose one template per page (§6).
3. Apply the tokens (§3), type scale (§2) and grid (§5) exactly.
4. Write headlines as one claim with one emphasised word, and end with a takeaway.
5. Self-check against §10 before delivering: font, token names, Primary/Secondary blue, system colours only for status, lockups and UI dark, values wording.
