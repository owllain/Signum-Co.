import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const SCENES = [
  { key: 'signal', src: 'src/assets/originals/Del ruido a la señal-3.png' },
  { key: 'data', src: 'src/assets/originals/Datos que guían-1.png' },
  { key: 'systems', src: 'src/assets/originals/Conexiones que funcionan-2.png' },
  { key: 'automation', src: 'src/assets/originals/Automatización del flujo documental-2.png' },
  { key: 'applications', src: 'src/assets/originals/Ventana modular de aplicaciones empresariales-4.png' },
  { key: 'integrations', src: 'src/assets/originals/Puente entre sistemas, modernización gradual-3.png' },
  { key: 'technical-review', src: 'src/assets/originals/Revisión técnica y evidencia trazable-1.png' },
];

const lqipMap = {};

for (const { key, src } of SCENES) {
  for (const width of [640, 1200]) {
    const height = Math.round((width * 2) / 3);
    const out = `public/images/${key}-${width}.webp`;
    const info = await sharp(src)
      .resize(width, height, { fit: 'cover' })
      .webp({ quality: width === 640 ? 80 : 82, effort: 6 })
      .toFile(out);
    console.log(`Generated ${out} (${(info.size / 1024).toFixed(1)} KB)`);
  }

  const lqipBuf = await sharp(src)
    .resize(24, 16, { fit: 'cover' })
    .webp({ quality: 45 })
    .toBuffer();
  lqipMap[key] = `data:image/webp;base64,${lqipBuf.toString('base64')}`;
}

// Process Sig (mascot with transparent background)
const sigSrc = 'src/assets/originals/Sig, cinta azul con destello dorado-4.png';
// Trim excess transparent space and add a small balanced transparent margin
const trimmedSig = await sharp(sigSrc).trim().toBuffer();
const trimmedMeta = await sharp(trimmedSig).metadata();
console.log(`Trimmed Sig dimensions: ${trimmedMeta.width}x${trimmedMeta.height}`);

for (const size of [128, 256, 512]) {
  const out = `public/images/sig-${size}.webp`;
  const info = await sharp(trimmedSig)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .webp({ quality: 88, alphaQuality: 95, effort: 6 })
    .toFile(out);
  console.log(`Generated ${out} (${(info.size / 1024).toFixed(1)} KB)`);
}

const sigLqip = await sharp(trimmedSig)
  .resize(24, 24, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .webp({ quality: 50, alphaQuality: 70 })
  .toBuffer();
lqipMap['sig'] = `data:image/webp;base64,${sigLqip.toString('base64')}`;

writeFileSync('scripts/lqip-output.json', JSON.stringify(lqipMap, null, 2));
console.log('Saved LQIP map to scripts/lqip-output.json');

// Generate executive WebP avatars for Flowbite Avatar components
const kevinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
  <defs>
    <radialGradient id="bgK" cx="50%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#1e3b70"/>
      <stop offset="100%" stop-color="#091326"/>
    </radialGradient>
    <linearGradient id="goldK" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e6c34a"/>
      <stop offset="100%" stop-color="#b88e14"/>
    </linearGradient>
  </defs>
  <rect width="256" height="256" rx="128" fill="url(#bgK)"/>
  <circle cx="128" cy="128" r="120" fill="none" stroke="url(#goldK)" stroke-width="4" stroke-opacity="0.65"/>
  <circle cx="128" cy="96" r="40" fill="url(#goldK)"/>
  <path d="M56 218c10-42 40-66 72-66s62 24 72 66" fill="url(#goldK)"/>
  <circle cx="194" cy="66" r="20" fill="#0c1931" stroke="#e6c34a" stroke-width="3"/>
  <path d="M185 72l6-8 5 4 8-11" fill="none" stroke="#e6c34a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const enriqueSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
  <defs>
    <radialGradient id="bgE" cx="50%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#16325c"/>
      <stop offset="100%" stop-color="#081121"/>
    </radialGradient>
    <linearGradient id="goldE" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e6c34a"/>
      <stop offset="100%" stop-color="#c9a227"/>
    </linearGradient>
  </defs>
  <rect width="256" height="256" rx="128" fill="url(#bgE)"/>
  <circle cx="128" cy="128" r="120" fill="none" stroke="url(#goldE)" stroke-width="4" stroke-opacity="0.65"/>
  <circle cx="128" cy="96" r="40" fill="#dce6f7"/>
  <path d="M56 218c10-42 40-66 72-66s62 24 72 66" fill="#dce6f7"/>
  <circle cx="194" cy="66" r="20" fill="#0c1931" stroke="#e6c34a" stroke-width="3"/>
  <path d="M188 60l-6 6 6 6M200 60l6 6-6 6" fill="none" stroke="#e6c34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

await sharp(Buffer.from(kevinSvg)).webp({ quality: 92 }).toFile('public/images/avatar-kevin.webp');
await sharp(Buffer.from(enriqueSvg)).webp({ quality: 92 }).toFile('public/images/avatar-enrique.webp');
console.log('Generated public/images/avatar-kevin.webp and public/images/avatar-enrique.webp');
