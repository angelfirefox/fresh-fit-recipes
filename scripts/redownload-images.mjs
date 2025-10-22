import fs from 'fs';
import path from 'path';

const images = [
  { filename: 'green-protein-smoothie.jpg', query: 'green smoothie' },
  { filename: 'kale-chickpea-bowl.jpg', query: 'quinoa bowl' },
  { filename: 'sheet-pan-lemon-salmon.jpg', query: 'baked salmon' },
  { filename: 'greek-yogurt-parfait.jpg', query: 'yogurt parfait' },
  { filename: 'spicy-tofu-stirfry.jpg', query: 'tofu stirfry' },
  { filename: 'overnight-oats-3-ways.jpg', query: 'overnight oats' },
];

const outDir = path.join(process.cwd(), 'public', 'images', 'recipes');
fs.mkdirSync(outDir, { recursive: true });

async function downloadImage(query, filename) {
  const url = `https://source.unsplash.com/1600x900/?${encodeURIComponent(query)}`;
  console.log(`Fetching ${url} -> ${filename}`);
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const outPath = path.join(outDir, filename);
    fs.writeFileSync(outPath, buffer);
    console.log(`✓ Saved ${outPath} (${buffer.length} bytes)`);
  } catch (err) {
    console.error(`✗ Failed to fetch ${query}: ${err.message}`);
  }
}

(async function(){
  for (const img of images) {
    await downloadImage(img.query, img.filename);
    // small delay
    await new Promise(r => setTimeout(r, 600));
  }
  console.log('\nAll downloads attempted.');
})();