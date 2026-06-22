const fs = require('fs');
const path = require('path');

// --- 1. ESSEREAPE ---
const apeDir = '/Users/macbookretina/Downloads/SOCIALIN_SITO_WEB/ESSEREAPE_SISTEMA_VISIVO';
const apeHtmlPath = path.join(apeDir, 'essereape_sistema_visivo.html');
const apeSvgPath = path.join(apeDir, 'assets', 'cursor-ape.svg');

const apeSvgContent = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="arrow-clip">
      <polygon points="7,5 7,21 11.5,16.5 19,16.5" />
    </clipPath>
  </defs>
  <!-- Wings -->
  <path d="M12,11 C17,5 23,8 17,14 Z" fill="#F9F6F0" stroke="#3D2415" stroke-width="1.5" stroke-linejoin="round" />
  <path d="M8,15 C3,20 6,26 12,20 Z" fill="#F9F6F0" stroke="#3D2415" stroke-width="1.5" stroke-linejoin="round" />
  <!-- Body Base -->
  <polygon points="7,5 7,21 11.5,16.5 19,16.5" fill="#E5A822" stroke="#3D2415" stroke-width="1.5" stroke-linejoin="round" />
  <!-- Stripes inside the arrow -->
  <g clip-path="url(#arrow-clip)">
    <rect x="0" y="11" width="32" height="2.5" fill="#3D2415" />
    <rect x="0" y="15.5" width="32" height="2.5" fill="#3D2415" />
    <!-- Stinger tip -->
    <polygon points="7,5 7,8 10,8" fill="#3D2415" />
  </g>
  <!-- Stroke again on top -->
  <polygon points="7,5 7,21 11.5,16.5 19,16.5" fill="none" stroke="#3D2415" stroke-width="1.5" stroke-linejoin="round" />
</svg>`;

const apeCssContent = `
@media (hover: hover) and (pointer: fine) {
  html,
  body,
  a,
  button,
  [role="button"] {
    cursor: url("assets/cursor-ape.svg") 7 5, auto;
  }

  a,
  button,
  [role="button"] {
    cursor: url("assets/cursor-ape.svg") 7 5, pointer;
  }
}
`;

try {
  // Ensure assets dir exists
  fs.mkdirSync(path.join(apeDir, 'assets'), { recursive: true });
  fs.writeFileSync(apeSvgPath, apeSvgContent, 'utf8');
  
  let apeHtml = fs.readFileSync(apeHtmlPath, 'utf8');
  if(!apeHtml.includes('cursor-ape.svg')) {
    apeHtml = apeHtml.replace('</style>', apeCssContent + '\n</style>');
    fs.writeFileSync(apeHtmlPath, apeHtml, 'utf8');
    console.log("EssereAPE updated successfully.");
  }
} catch (e) {
  console.error("Error updating EssereAPE:", e);
}


// --- 2. AIA PURA BIO ---
const aiaDir = '/Users/macbookretina/Downloads/aiapurabio-sitoweb/aiapurabio.github.io/piano-editoriale';
const aiaHtmlPath = path.join(aiaDir, 'index.html');
const aiaSvgPath = path.join(aiaDir, 'assets', 'cursor-uovo.svg');

const aiaSvgContent = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <!-- Droplet/Egg Base -->
  <path d="M 7,5 C 7,12 9,18 12,22 A 7.07 7.07 0 0 0 22 12 C 18,9 12,7 7,5 Z" 
        fill="#F5F2E9" stroke="#1B3325" stroke-width="1.5" stroke-linejoin="round"/>
  <!-- Gold detail (small inner curve matching the egg shape) -->
  <path d="M 12,18 A 4 4 0 0 0 18 12" fill="none" stroke="#C5A059" stroke-width="1.5" stroke-linecap="round" />
</svg>`;

const aiaCssContent = `
@media (hover: hover) and (pointer: fine) {
  html,
  body,
  a,
  button,
  [role="button"] {
    cursor: url("assets/cursor-uovo.svg") 7 5, auto;
  }

  a,
  button,
  [role="button"] {
    cursor: url("assets/cursor-uovo.svg") 7 5, pointer;
  }
}
`;

try {
  // Ensure assets dir exists
  fs.mkdirSync(path.join(aiaDir, 'assets'), { recursive: true });
  fs.writeFileSync(aiaSvgPath, aiaSvgContent, 'utf8');
  
  let aiaHtml = fs.readFileSync(aiaHtmlPath, 'utf8');
  if(!aiaHtml.includes('cursor-uovo.svg')) {
    aiaHtml = aiaHtml.replace('</style>', aiaCssContent + '\n</style>');
    fs.writeFileSync(aiaHtmlPath, aiaHtml, 'utf8');
    console.log("Aia Pura Bio updated successfully.");
  }
} catch (e) {
  console.error("Error updating Aia Pura Bio:", e);
}
