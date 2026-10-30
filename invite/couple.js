// Flat-vector illustration of a Pakistani couple in pastel wedding wear:
// groom in a mint sherwani (no turban), bride in a blush shalwar kameez with a
// peach dupatta. Drawn in a 420x720 box.
function coupleSVG() {
  const skinB = '#e2a882', skinG = '#c98b62', hair = '#2a1712';
  const gold = '#d6b25e', goldD = '#a8802f';
  const mint = '#cfe6dc', mintD = '#a9cdbd', mintL = '#e6f3ed';
  const blush = '#f5c9d3', blushD = '#e3a3b4', blushL = '#fbe2e8';
  const peach = '#f9d9c4', peachD = '#ebb79a';
  const ivory = '#fbf4e8', ivoryD = '#e8dcc8';

  // small embroidered motifs scattered over the kameez
  let butis = '';
  for (let row = 0; row < 7; row++) {
    const y = 300 + row * 38, half = 40 + row * 10;
    for (let x = 150 - half + (row % 2) * 15; x <= 150 + half; x += 30) {
      butis += `<circle cx="${x}" cy="${y}" r="3" fill="#fff" opacity=".85"/><circle cx="${x}" cy="${y}" r="1.4" fill="${gold}"/>`;
    }
  }
  let buttons = '';
  for (let y = 214; y < 540; y += 28) buttons += `<circle cx="283" cy="${y}" r="3.4" fill="${gold}" stroke="${goldD}" stroke-width=".8"/>`;
  let hemDots = '';
  for (let x = 74; x < 230; x += 12) hemDots += `<circle cx="${x}" cy="${560 + Math.pow((x - 150) / 85, 2) * 3}" r="2.4" fill="#fff"/>`;

  const closedEye = (x, y, s = 1) => `<path d="M${x - 9 * s},${y} Q${x},${y + 7 * s} ${x + 9 * s},${y}" fill="none" stroke="${hair}" stroke-width="2.6" stroke-linecap="round"/>`;
  const hand = (x, y, c, mehndi) => `<ellipse cx="${x}" cy="${y}" rx="11" ry="14" fill="${c}"/>` +
    (mehndi ? `<circle cx="${x}" cy="${y + 2}" r="4" fill="none" stroke="#9c4a22" stroke-width="1.5" opacity=".8"/><circle cx="${x}" cy="${y + 2}" r="1.3" fill="#9c4a22" opacity=".8"/>` : '');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 720" width="420" height="720">
  <defs>
    <linearGradient id="cpSher" x1="0" x2="1"><stop offset="0" stop-color="${mintD}"/><stop offset=".35" stop-color="${mint}"/><stop offset=".7" stop-color="${mintL}"/><stop offset="1" stop-color="${mintD}"/></linearGradient>
    <linearGradient id="cpKam" x1="0" x2="1"><stop offset="0" stop-color="${blushD}"/><stop offset=".4" stop-color="${blush}"/><stop offset=".7" stop-color="${blushL}"/><stop offset="1" stop-color="${blushD}"/></linearGradient>
    <linearGradient id="cpDup" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${peach}" stop-opacity=".96"/><stop offset="1" stop-color="${peachD}" stop-opacity=".9"/></linearGradient>
    <linearGradient id="cpGold" x1="0" x2="1"><stop offset="0" stop-color="${goldD}"/><stop offset=".5" stop-color="#f1d792"/><stop offset="1" stop-color="${goldD}"/></linearGradient>
    <clipPath id="cpKamClip"><path d="M104,256 Q150,240 196,256 L204,340 C214,420 226,500 236,570 Q150,586 64,570 C74,500 86,420 96,340 Z"/></clipPath>
    <radialGradient id="cpShadow"><stop offset="0" stop-color="#7a4a3a" stop-opacity=".25"/><stop offset="1" stop-color="#7a4a3a" stop-opacity="0"/></radialGradient>
  </defs>

  <ellipse cx="210" cy="700" rx="190" ry="20" fill="url(#cpShadow)"/>

  <!-- ===== GROOM ===== -->
  <g id="groom">
    <!-- churidar legs + khussa -->
    <path d="M254,548 L250,688 L274,688 L278,548 Z" fill="${ivory}" stroke="${ivoryD}" stroke-width="1.5"/>
    <path d="M290,548 L292,688 L316,688 L314,548 Z" fill="${ivory}" stroke="${ivoryD}" stroke-width="1.5"/>
    <path d="M296,640 q10,4 18,0 M296,655 q10,4 18,0 M296,670 q10,4 18,0 M254,640 q10,4 18,0 M254,655 q10,4 18,0" stroke="${ivoryD}" stroke-width="1.5" fill="none"/>
    <path d="M286,686 L318,686 Q330,694 340,690 Q332,702 286,700 Z" fill="url(#cpGold)"/>
    <path d="M276,686 L246,686 Q234,694 224,690 Q232,702 276,700 Z" fill="url(#cpGold)"/>
    <!-- right arm -->
    <path d="M343,206 Q366,218 370,284 L376,452 Q362,462 348,452 L340,296 Z" fill="url(#cpSher)" stroke="${mintD}" stroke-width="1.5"/>
    <rect x="346" y="440" width="30" height="12" rx="3" fill="url(#cpGold)"/>
    ${hand(362, 466, skinG)}
    <!-- sherwani body -->
    <path d="M222,202 Q283,184 344,202 L352,330 L358,560 Q283,574 208,560 L214,330 Z" fill="url(#cpSher)" stroke="${mintD}" stroke-width="1.5"/>
    <path d="M210,538 Q283,552 357,538 L358,560 Q283,574 208,560 Z" fill="url(#cpGold)" opacity=".85"/>
    <line x1="283" y1="204" x2="283" y2="560" stroke="${gold}" stroke-width="2"/>
    ${buttons}
    <path d="M236,232 q14,10 0,20 q-14,10 0,20 q14,10 0,20 M330,232 q-14,10 0,20 q14,10 0,20 q-14,10 0,20" stroke="${gold}" stroke-width="2" fill="none" opacity=".75"/>
    <rect x="300" y="236" width="20" height="5" rx="2" fill="${gold}" opacity=".8"/>
    <!-- blush stole over the shoulder -->
    <path d="M330,199 Q350,208 352,234 L246,560 L220,552 Z" fill="${blush}" opacity=".95"/>
    <path d="M336,202 L232,556" stroke="#fff" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round" opacity=".9"/>
    <!-- collar + neck -->
    <rect x="268" y="160" width="30" height="36" fill="${skinG}"/>
    <path d="M262,190 Q283,182 304,190 L304,206 Q283,198 262,206 Z" fill="url(#cpGold)"/>
    <!-- head -->
    <ellipse cx="245" cy="124" rx="7" ry="11" fill="${skinG}"/>
    <ellipse cx="321" cy="124" rx="7" ry="11" fill="${skinG}"/>
    <ellipse cx="283" cy="120" rx="37" ry="45" fill="${skinG}"/>
    <!-- styled hair, no turban -->
    <path d="M244,124 C238,82 254,58 284,56 C316,54 332,78 324,124 C320,104 314,94 304,90 C290,98 266,96 252,92 C248,100 246,110 244,124 Z" fill="${hair}"/>
    <path d="M252,92 C262,70 300,62 316,84" stroke="#4a2e24" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
    <!-- trimmed beard -->
    <path d="M247,122 Q248,172 283,170 Q318,172 319,122 Q316,154 300,156 Q283,144 266,156 Q250,154 247,122 Z" fill="${hair}" opacity=".9"/>
    <path d="M268,147 Q283,141 298,147 Q283,145 268,147 Z" fill="${hair}" stroke="${hair}" stroke-width="5" stroke-linejoin="round"/>
    <path d="M272,157 Q283,164 294,157" fill="none" stroke="#f3d4c0" stroke-width="2.4" stroke-linecap="round"/>
    ${closedEye(268, 116)}${closedEye(298, 116)}
    <path d="M258,102 q10,-6 20,-1 M288,101 q10,-5 20,1" stroke="${hair}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    <path d="M283,118 q-3,12 2,15" stroke="#a96f4a" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- ===== BRIDE ===== -->
  <g id="bride">
    <!-- long dupatta panel behind -->
    <path d="M92,232 Q62,330 56,460 Q54,550 66,630 L100,630 Q96,520 104,420 Q112,320 120,250 Z" fill="url(#cpDup)"/>
    <path d="M66,630 L100,630" stroke="url(#cpGold)" stroke-width="6"/>
    <path d="M56,460 Q54,550 66,630" stroke="#fff" stroke-width="3" fill="none" stroke-dasharray="3 5"/>
    <!-- shalwar + khussa -->
    <path d="M100,560 L92,676 Q110,684 130,676 L146,566 Z" fill="${blushL}" stroke="${blushD}" stroke-width="1.2"/>
    <path d="M154,566 L170,676 Q190,684 208,676 L200,560 Z" fill="${blushL}" stroke="${blushD}" stroke-width="1.2"/>
    <path d="M96,612 l26,0 M100,636 l26,0 M176,612 l26,0 M178,636 l26,0" stroke="${blushD}" stroke-width="1.2" opacity=".6"/>
    <rect x="90" y="668" width="42" height="9" rx="3" fill="url(#cpGold)"/><rect x="168" y="668" width="42" height="9" rx="3" fill="url(#cpGold)"/>
    <path d="M86,684 L128,684 Q132,694 120,698 L80,698 Q74,692 86,684 Z" fill="url(#cpGold)"/>
    <path d="M170,684 L212,684 Q224,692 218,698 L178,698 Q166,694 170,684 Z" fill="url(#cpGold)"/>
    <!-- long A-line kameez, fully covering the midriff -->
    <path d="M104,256 Q150,240 196,256 L204,340 C214,420 226,500 236,570 Q150,586 64,570 C74,500 86,420 96,340 Z" fill="url(#cpKam)"/>
    <g clip-path="url(#cpKamClip)">${butis}</g>
    <path d="M150,262 L150,580" stroke="${blushD}" stroke-width="1.5" opacity=".5"/>
    <path d="M68,548 Q150,564 232,548 L236,570 Q150,586 64,570 Z" fill="url(#cpGold)" opacity=".9"/>
    ${hemDots}
    <path d="M126,256 Q150,288 174,256" stroke="url(#cpGold)" stroke-width="5" fill="none"/>
    <!-- dupatta draped across the front, shoulder to hip -->
    <path d="M100,252 Q130,262 150,300 Q176,350 216,392 L206,420 Q160,384 132,330 Q114,292 96,276 Z" fill="url(#cpDup)"/>
    <path d="M216,392 L206,420" stroke="url(#cpGold)" stroke-width="5"/>
    <!-- arms: full sleeves -->
    <path d="M104,258 Q84,268 82,304 L80,404 Q92,412 104,404 L110,296 Z" fill="url(#cpKam)"/>
    <rect x="78" y="394" width="28" height="9" rx="3" fill="url(#cpGold)"/>
    ${hand(92, 418, skinB, true)}
    <path d="M196,258 Q214,268 218,296 L230,302 L244,296 L250,312 L226,330 Q206,336 196,324 Z" fill="url(#cpKam)"/>
    <rect x="236" y="294" width="9" height="22" rx="3" transform="rotate(-25 240 305)" fill="url(#cpGold)"/>
    ${hand(254, 298, skinB, true)}
    <!-- neck + jewellery -->
    <rect x="138" y="222" width="24" height="30" fill="${skinB}"/>
    <path d="M132,244 Q150,256 168,244 L170,252 Q150,266 130,252 Z" fill="url(#cpGold)"/>
    <circle cx="150" cy="262" r="5" fill="#9fd1c0" stroke="${gold}" stroke-width="2.5"/>
    <!-- dupatta over the head -->
    <path d="M150,136 C108,136 96,176 98,222 Q96,250 92,262 L114,262 Q120,212 124,190 C128,166 138,160 150,160 C162,160 172,166 176,190 Q180,212 186,262 L208,262 Q204,250 202,222 C204,176 192,136 150,136 Z" fill="url(#cpDup)"/>
    <path d="M150,138 C110,138 98,178 100,222 Q98,248 94,262 M150,138 C190,138 202,178 200,222 Q202,248 206,262" stroke="${gold}" stroke-width="3.5" fill="none" stroke-dasharray="3 5"/>
    <!-- face + hair -->
    <path d="M118,190 C118,160 134,152 150,152 C166,152 182,160 182,190 Z" fill="${hair}"/>
    <ellipse cx="150" cy="198" rx="31" ry="38" fill="${skinB}"/>
    <path d="M120,186 C124,164 138,160 150,160 C162,160 176,164 180,186 C170,172 160,170 150,174 C140,170 130,172 120,186 Z" fill="${hair}"/>
    <path d="M150,162 L150,178" stroke="${gold}" stroke-width="2"/><path d="M150,176 l5,7 -5,7 -5,-7 Z" fill="${gold}"/><circle cx="150" cy="183" r="2" fill="#9fd1c0"/>
    ${closedEye(138, 202, .85)}${closedEye(163, 202, .85)}
    <path d="M128,191 q9,-5 18,-1 M154,190 q9,-4 18,1" stroke="${hair}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <circle cx="131" cy="215" r="7" fill="#f07a8f" opacity=".3"/><circle cx="170" cy="215" r="7" fill="#f07a8f" opacity=".3"/>
    <path d="M150,204 q-2,9 2,11" stroke="#b97650" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M141,222 Q150,230 159,222 Q150,226 141,222 Z" fill="#c2405e" stroke="#c2405e" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="157" cy="214" r="6" fill="none" stroke="${gold}" stroke-width="1.6"/>
    <path d="M119,206 l0,10" stroke="${gold}" stroke-width="2"/><path d="M113,216 Q119,230 125,216 Z" fill="${gold}"/>
    <path d="M181,206 l0,10" stroke="${gold}" stroke-width="2"/><path d="M175,216 Q181,230 187,216 Z" fill="${gold}"/>
  </g>
</svg>`;
}
