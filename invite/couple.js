// Flat-vector illustration of a Pakistani bride (red lehenga, dupatta) and groom
// (ivory sherwani, gold safa, maroon stole). Drawn in a 420x720 box.
function coupleSVG() {
  const skinB = '#e2a882', skinG = '#c98b62', hair = '#2a1712';
  const red = '#b3123c', redD = '#86092b', redL = '#d42a55';
  const gold = '#d9b45a', goldD = '#a8802f';
  const ivory = '#f6ead6', ivoryD = '#e3cfae';

  // gold buti motifs scattered over the lehenga
  let butis = '';
  for (let row = 0; row < 7; row++) {
    const y = 400 + row * 38, half = 45 + row * 20;
    for (let x = 150 - half + (row % 2) * 16; x <= 150 + half; x += 32) {
      butis += `<path d="M${x},${y - 6} L${x + 4},${y} L${x},${y + 6} L${x - 4},${y} Z" fill="${gold}" opacity=".9"/>`;
    }
  }
  let buttons = '';
  for (let y = 222; y < 540; y += 30) buttons += `<circle cx="283" cy="${y}" r="3.6" fill="${gold}" stroke="${goldD}" stroke-width=".8"/>`;
  let borderDots = '';
  for (let x = 14; x < 290; x += 14) borderDots += `<circle cx="${x}" cy="${676 + Math.pow((x - 150) / 150, 2) * 4}" r="3" fill="${redD}"/>`;

  const closedEye = (x, y, s = 1) => `<path d="M${x - 9 * s},${y} Q${x},${y + 7 * s} ${x + 9 * s},${y}" fill="none" stroke="${hair}" stroke-width="2.6" stroke-linecap="round"/>`;
  const hand = (x, y, c, mehndi) => `<ellipse cx="${x}" cy="${y}" rx="11" ry="14" fill="${c}"/>` +
    (mehndi ? `<circle cx="${x}" cy="${y + 2}" r="4" fill="none" stroke="#9c4a22" stroke-width="1.5" opacity=".8"/><circle cx="${x}" cy="${y + 2}" r="1.3" fill="#9c4a22" opacity=".8"/>` : '');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 720" width="420" height="720">
  <defs>
    <linearGradient id="cpSafa" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3d68a"/><stop offset=".6" stop-color="#d9a640"/><stop offset="1" stop-color="#b8862f"/></linearGradient>
    <linearGradient id="cpSher" x1="0" x2="1"><stop offset="0" stop-color="${ivoryD}"/><stop offset=".35" stop-color="${ivory}"/><stop offset=".75" stop-color="${ivory}"/><stop offset="1" stop-color="${ivoryD}"/></linearGradient>
    <linearGradient id="cpLeh" x1="0" x2="1"><stop offset="0" stop-color="${redD}"/><stop offset=".4" stop-color="${red}"/><stop offset=".7" stop-color="${redL}"/><stop offset="1" stop-color="${redD}"/></linearGradient>
    <linearGradient id="cpDup" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${redL}" stop-opacity=".95"/><stop offset="1" stop-color="${red}" stop-opacity=".85"/></linearGradient>
    <linearGradient id="cpGold" x1="0" x2="1"><stop offset="0" stop-color="${goldD}"/><stop offset=".5" stop-color="#f1d792"/><stop offset="1" stop-color="${goldD}"/></linearGradient>
    <clipPath id="cpLehClip"><path d="M108,356 L192,356 C224,450 262,580 292,690 Q150,712 8,690 C38,580 76,450 108,356 Z"/></clipPath>
    <radialGradient id="cpShadow"><stop offset="0" stop-color="#7a4a3a" stop-opacity=".28"/><stop offset="1" stop-color="#7a4a3a" stop-opacity="0"/></radialGradient>
  </defs>

  <ellipse cx="210" cy="700" rx="200" ry="22" fill="url(#cpShadow)"/>

  <!-- ===== GROOM ===== -->
  <g id="groom">
    <!-- churidar legs + khussa -->
    <path d="M252,548 L248,688 L272,688 L276,548 Z" fill="#fbf4e8" stroke="${ivoryD}" stroke-width="1.5"/>
    <path d="M290,548 L292,688 L316,688 L314,548 Z" fill="#fbf4e8" stroke="${ivoryD}" stroke-width="1.5"/>
    <path d="M296,640 q10,4 18,0 M296,655 q10,4 18,0 M296,670 q10,4 18,0" stroke="${ivoryD}" stroke-width="1.5" fill="none"/>
    <path d="M286,686 L318,686 Q330,694 340,690 Q332,702 286,700 Z" fill="url(#cpGold)"/>
    <!-- right arm (viewer's right) -->
    <path d="M343,212 Q366,224 370,290 L376,452 Q362,462 348,452 L340,300 Z" fill="url(#cpSher)" stroke="${ivoryD}" stroke-width="1.5"/>
    <rect x="346" y="440" width="30" height="12" rx="3" fill="url(#cpGold)"/>
    ${hand(362, 466, skinG)}
    <!-- sherwani body -->
    <path d="M222,208 Q283,190 344,208 L352,330 L358,560 Q283,574 208,560 L214,330 Z" fill="url(#cpSher)" stroke="${ivoryD}" stroke-width="1.5"/>
    <path d="M210,540 Q283,554 357,540 L358,560 Q283,574 208,560 Z" fill="url(#cpGold)" opacity=".9"/>
    <line x1="283" y1="212" x2="283" y2="560" stroke="${gold}" stroke-width="2"/>
    ${buttons}
    <path d="M236,236 q14,10 0,20 q-14,10 0,20 M330,236 q-14,10 0,20 q14,10 0,20" stroke="${gold}" stroke-width="2" fill="none" opacity=".8"/>
    <!-- maroon stole over the shoulder -->
    <path d="M330,205 Q350,214 352,240 L246,560 L220,552 Z" fill="#7d1530" opacity=".92"/>
    <path d="M336,208 L232,556" stroke="${gold}" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round"/>
    <!-- collar + neck -->
    <rect x="268" y="168" width="30" height="34" fill="${skinG}"/>
    <path d="M262,198 Q283,190 304,198 L304,214 Q283,206 262,214 Z" fill="url(#cpGold)"/>
    <!-- head -->
    <ellipse cx="245" cy="128" rx="7" ry="11" fill="${skinG}"/>
    <ellipse cx="321" cy="128" rx="7" ry="11" fill="${skinG}"/>
    <ellipse cx="283" cy="126" rx="37" ry="45" fill="${skinG}"/>
    <path d="M247,128 Q248,178 283,176 Q318,178 319,128 Q316,160 300,162 Q283,150 266,162 Q250,160 247,128 Z" fill="${hair}" opacity=".92"/>
    <path d="M268,153 Q283,147 298,153 Q283,151 268,153 Z" fill="${hair}" stroke="${hair}" stroke-width="5" stroke-linejoin="round"/>
    <path d="M272,163 Q283,170 294,163" fill="none" stroke="#f3d4c0" stroke-width="2.4" stroke-linecap="round"/>
    ${closedEye(268, 122)}${closedEye(298, 122)}
    <path d="M258,108 q10,-6 20,-1 M288,107 q10,-5 20,1" stroke="${hair}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    <path d="M283,124 q-3,12 2,15" stroke="#a96f4a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- gold safa (turban) with kalgi -->
    <path d="M243,112 C236,62 258,34 283,34 C310,34 332,62 323,112 Q283,96 243,112 Z" fill="url(#cpSafa)"/>
    <path d="M248,96 Q283,60 318,92 M250,80 Q285,46 316,74 M256,64 Q284,40 308,56" stroke="${goldD}" stroke-width="2" fill="none" opacity=".75"/>
    <path d="M243,112 Q283,96 323,112 L322,104 Q283,88 244,104 Z" fill="${goldD}" opacity=".7"/>
    <path d="M300,62 C306,40 300,22 290,8 C312,22 318,46 306,66 Z" fill="#fff4dc" stroke="${gold}" stroke-width="1.5"/>
    <circle cx="300" cy="66" r="9" fill="${red}" stroke="url(#cpGold)" stroke-width="3"/>
    <path d="M300,75 L300,92" stroke="${gold}" stroke-width="2"/><circle cx="300" cy="95" r="3" fill="${gold}"/>
  </g>

  <!-- ===== BRIDE ===== -->
  <g id="bride">
    <!-- long dupatta drape behind (viewer's left) -->
    <path d="M92,232 Q64,330 58,470 Q56,560 70,640 L104,640 Q98,520 108,420 Q116,320 122,250 Z" fill="url(#cpDup)"/>
    <path d="M70,640 L104,640" stroke="url(#cpGold)" stroke-width="7"/>
    <path d="M58,470 Q56,560 70,640" stroke="${gold}" stroke-width="4" fill="none" stroke-dasharray="3 5"/>
    <!-- lehenga -->
    <path d="M108,356 L192,356 C224,450 262,580 292,690 Q150,712 8,690 C38,580 76,450 108,356 Z" fill="url(#cpLeh)"/>
    <path d="M130,372 C122,480 104,600 90,700 M170,372 C178,480 196,600 210,700 M150,372 L150,704" stroke="${redD}" stroke-width="2" fill="none" opacity=".5"/>
    <g clip-path="url(#cpLehClip)">${butis}</g>
    <path d="M30,612 Q150,632 270,612 L278,640 Q150,662 22,640 Z" fill="url(#cpGold)" opacity=".85"/>
    <path d="M18,656 Q150,676 282,656 L292,690 Q150,712 8,690 Z" fill="url(#cpGold)"/>
    ${borderDots}
    <path d="M108,356 L192,356 L194,368 L106,368 Z" fill="url(#cpGold)"/>
    <!-- midriff + choli -->
    <path d="M114,330 L186,330 L190,358 L110,358 Z" fill="${skinB}"/>
    <path d="M104,256 Q150,240 196,256 L192,336 Q150,346 108,336 Z" fill="${red}"/>
    <path d="M108,326 Q150,338 192,326 L192,336 Q150,346 108,336 Z" fill="url(#cpGold)"/>
    <path d="M128,262 Q150,286 172,262" stroke="url(#cpGold)" stroke-width="5" fill="none"/>
    <!-- arms: left hangs holding dupatta edge, right rests on groom's arm -->
    <path d="M104,258 Q86,268 84,300 L88,330 L108,330 L112,290 Z" fill="${red}"/>
    <path d="M88,326 L84,410 Q94,418 104,410 L108,326 Z" fill="${skinB}"/>
    <rect x="82" y="392" width="24" height="8" rx="3" fill="${red}"/><rect x="82" y="402" width="24" height="5" rx="2" fill="${gold}"/>
    ${hand(94, 424, skinB, true)}
    <path d="M196,258 Q214,268 218,296 L214,326 L196,322 Z" fill="${red}"/>
    <path d="M198,320 Q214,330 226,322 L240,300 L252,306 L234,338 Q214,350 196,338 Z" fill="${skinB}"/>
    <rect x="226" y="300" width="8" height="22" rx="3" transform="rotate(30 230 311)" fill="${gold}"/>
    ${hand(250, 300, skinB, true)}
    <!-- neck + jewellery -->
    <rect x="138" y="222" width="24" height="30" fill="${skinB}"/>
    <path d="M132,244 Q150,256 168,244 L170,252 Q150,266 130,252 Z" fill="url(#cpGold)"/>
    <path d="M130,252 Q150,286 170,252" stroke="url(#cpGold)" stroke-width="4" fill="none"/>
    <circle cx="150" cy="276" r="6" fill="${red}" stroke="${gold}" stroke-width="2.5"/>
    <!-- dupatta over the head -->
    <path d="M150,136 C108,136 96,176 98,222 Q96,250 92,262 L114,262 Q120,212 124,190 C128,166 138,160 150,160 C162,160 172,166 176,190 Q180,212 186,262 L208,262 Q204,250 202,222 C204,176 192,136 150,136 Z" fill="url(#cpDup)"/>
    <path d="M150,138 C110,138 98,178 100,222 Q98,248 94,262 M150,138 C190,138 202,178 200,222 Q202,248 206,262" stroke="${gold}" stroke-width="4" fill="none" stroke-dasharray="3 5"/>
    <!-- face + hair -->
    <path d="M118,190 C118,160 134,152 150,152 C166,152 182,160 182,190 Z" fill="${hair}"/>
    <ellipse cx="150" cy="198" rx="31" ry="38" fill="${skinB}"/>
    <path d="M120,186 C124,164 138,160 150,160 C162,160 176,164 180,186 C170,172 160,170 150,174 C140,170 130,172 120,186 Z" fill="${hair}"/>
    <path d="M150,162 L150,178" stroke="${gold}" stroke-width="2"/><path d="M150,176 l5,7 -5,7 -5,-7 Z" fill="${gold}"/><circle cx="150" cy="191" r="2.5" fill="${red}"/>
    ${closedEye(138, 202, .85)}${closedEye(163, 202, .85)}
    <path d="M128,191 q9,-5 18,-1 M154,190 q9,-4 18,1" stroke="${hair}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <circle cx="131" cy="215" r="7" fill="#f07a8f" opacity=".35"/><circle cx="170" cy="215" r="7" fill="#f07a8f" opacity=".35"/>
    <path d="M150,204 q-2,9 2,11" stroke="#b97650" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M141,222 Q150,230 159,222 Q150,226 141,222 Z" fill="#b0213f" stroke="#b0213f" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="157" cy="215" r="7" fill="none" stroke="${gold}" stroke-width="1.8"/>
    <path d="M119,206 l0,10" stroke="${gold}" stroke-width="2"/><path d="M113,216 Q119,230 125,216 Z" fill="${gold}"/>
    <path d="M181,206 l0,10" stroke="${gold}" stroke-width="2"/><path d="M175,216 Q181,230 187,216 Z" fill="${gold}"/>
  </g>
</svg>`;
}
