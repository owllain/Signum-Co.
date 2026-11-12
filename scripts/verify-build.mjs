import { readFileSync, existsSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';

// Check the actual static output, including cross-page anchors, translations, React islands and WebP assets.
const paths = [
  "/es/",
  "/es/datos/",
  "/es/metodologia/",
  "/es/nosotros/",
  "/es/servicios/",
  "/es/desarrollo/",
  "/es/preguntas-frecuentes/",
  "/es/terminos/",
  "/es/privacidad/",
  "/es/contacto/",
  "/es/"
];
const origin = 'https://signumandco.com';
const pages = new Map(
  paths.map((path) => [path, readFileSync(`dist${path}index.html`, 'utf8')])
);
const attributes = (html, name) =>
  [...html.matchAll(new RegExp(`\\s${name}="([^"]*)"`, 'g'))].map(
    (match) => match[1]
  );

let links = 0;
let imagesChecked = 0;

for (const [path, html] of pages) {
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: exactly one h1`);
  const ids = attributes(html, 'id');
  assert.equal(new Set(ids).size, ids.length, `${path}: unique IDs`);
  assert.match(
    html,
    new RegExp(`<link[^>]*rel="canonical"[^>]*href="${origin}${path}"`),
    `${path}: canonical`
  );
  assert.ok(!html.includes('hreflang='), path + ': no language alternates');
  assert.ok(!html.includes('id="lang"') && !html.includes('id="theme-toggle"'), path + ': removed controls');
  assert.ok(!html.includes('href="/en/'), path + ': no English navigation');
  const contactHtml = pages.get('/es/contacto/');
  const options = [
    ...contactHtml.matchAll(/<option\b[^>]*value="([^"]*)"/g),
  ].map((match) => match[1]);
  for (const topic of attributes(html, 'data-contact-topic'))
    assert.ok(options.includes(topic), `${path}: valid topic ${topic}`);
  for (const label of attributes(html, 'for'))
    assert.ok(ids.includes(label), `${path}: label target ${label}`);
  for (const href of attributes(html, 'href')) {
    const url = new URL(href.replaceAll('&amp;', '&'), origin + path);
    if (url.origin !== origin) continue;
    if (pages.has(url.pathname)) {
      if (url.hash)
        assert.ok(
          attributes(pages.get(url.pathname), 'id').includes(
            decodeURIComponent(url.hash.slice(1))
          ),
          `${path}: missing anchor ${href}`
        );
      links++;
    } else assert.ok(existsSync(`dist${url.pathname}`), `${path}: missing file ${href}`);
  }
  for (const src of attributes(html, 'src')) {
    if (src.startsWith('/images/')) {
      assert.ok(src.endsWith('.webp'), `${path}: image must be WebP (${src})`);
      assert.ok(existsSync(`dist${src}`), `${path}: missing image ${src}`);
      imagesChecked++;
    }
  }
}

// Verify React islands are hydrated on key interactive pages
for (const interactivePath of ['/es/', '/es/servicios/']) {
  assert.ok(
    pages.get(interactivePath).includes('<astro-island'),
    `${interactivePath}: expected hydrated Astro + React islands`
  );
}

// Ensure no raw multi-MB PNGs are shipped in dist/images
const distImages = readdirSync('dist/images').filter((f) => f !== '.gitkeep');
assert.ok(
  distImages.every((f) => f.endsWith('.webp')),
  `dist/images should only contain optimized .webp files, found: ${distImages.join(', ')}`
);

assert.ok(!existsSync('dist/en/index.html'), 'English homepage removed');
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
assert.ok(!sitemap.includes('/en/'), 'Spanish-only sitemap');
for (const path of pages.keys())
  assert.ok(sitemap.includes(`<loc>${origin}${path}</loc>`), `sitemap: ${path}`);

console.log(
  `Verified ${pages.size} pages, ${links} internal links, ${imagesChecked} WebP image refs, and ${distImages.length} packaged WebP files.`
);
