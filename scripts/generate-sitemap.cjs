const fs = require('fs');
const path = require('path');

const services = [
  'mold-remediation',
  'water-damage-restoration',
  'emergency-water-extraction',
  'mold-testing',
  'basement-water-damage',
  'crawl-space-moisture-mold',
  'sewage-backup-cleanup',
  'thermal-imaging-leak-detection',
  'attic-mold-remediation',
  'structural-drying-dehumidification',
];

const locations = [
  'edgerton-wi',
  'janesville-wi',
  'madison-wi',
  'beloit-wi',
  'stoughton-wi',
  'sun-prairie-wi',
  'fitchburg-wi',
  'verona-wi',
  'milton-wi',
  'fort-atkinson-wi',
];

const articles = [
  'how-to-handle-water-damage-wisconsin-home',
  'mold-remediation-vs-mold-testing',
  'signs-of-hidden-mold-behind-drywall',
  'frozen-pipe-burst-winter-emergency-steps',
  'does-homeowners-insurance-cover-water-mold-damage',
  'basement-flooding-sump-pump-failure-guide',
  'black-mold-stachybotrys-health-risks-removal',
  'how-long-does-structural-drying-take',
  'attic-mold-winter-condensation-ice-dams',
  'crawl-space-encapsulation-moisture-control',
];

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'services', priority: '0.9', changefreq: 'weekly' },
  { path: 'service-areas', priority: '0.9', changefreq: 'weekly' },
  { path: 'articles', priority: '0.8', changefreq: 'weekly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  { path: 'privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: 'terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
];

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// 1. Static Pages
for (const p of staticPages) {
  const url = p.path ? `https://www.wiscoinspections.com/${p.path}` : 'https://www.wiscoinspections.com/';
  xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>
`;
}

// 2. Educational & Informational Articles
for (const art of articles) {
  const url = `https://www.wiscoinspections.com/articles/${art}`;
  xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

// 3. All 100 Localized Service Landing Pages (10 Services x 10 Locations)
for (const loc of locations) {
  for (const s of services) {
    const url = `https://www.wiscoinspections.com/${s}-${loc}`;
    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }
}

xml += `</urlset>\n`;

const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, xml, 'utf8');

console.log(`[Sitemap Generator] Successfully generated sitemap with ${staticPages.length + articles.length + (services.length * locations.length)} URLs at ${publicPath}`);
