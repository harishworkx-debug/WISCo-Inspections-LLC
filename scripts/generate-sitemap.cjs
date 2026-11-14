const fs = require('fs');
const path = require('path');

const services = [
  'home-inspection',
  'buyer-home-inspection',
  'pre-listing-inspection',
  'radon-testing',
  'mold-testing',
  'basement-crawl-space-inspection',
  'attic-roof-inspection',
  'electrical-inspection',
  'thermal-imaging-inspection',
  'warranty-inspection',
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

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'services', priority: '0.9', changefreq: 'weekly' },
  { path: 'service-areas', priority: '0.9', changefreq: 'weekly' },
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

// 2. All 100 Localized Service Landing Pages (10 Services x 10 Locations)
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
fs.writeFileSync(publicPath, xml);
console.log(`[Sitemap Generator] Successfully generated sitemap with ${staticPages.length + (locations.length * services.length)} URLs at ${publicPath}`);
