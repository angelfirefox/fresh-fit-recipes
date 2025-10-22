import fs from 'fs';
import path from 'path';

const images = [
  { filename: 'green-protein-smoothie.jpg', id: 1025 },
  { filename: 'kale-chickpea-bowl.jpg', id: 1021 },
  { filename: 'sheet-pan-lemon-salmon.jpg', id: 1024 },
  { filename: 'greek-yogurt-parfait.jpg', id: 1020 },
  { filename: 'spicy-tofu-stirfry.jpg', id: 1015 },
  { filename: 'overnight-oats-3-ways.jpg', id: 1018 },
];

const outDir = path.join(process.cwd(), 'public', 'images', 'recipes');
fs.mkdirSync(outDir, { recursive: true });

async function downloadPicsum(id, filename) {
  const url = `https://picsum.photos/id/${id}/1600/900`;
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
    console.error(`✗ Failed to fetch ${url}: ${err.message}`);
  }
}

(async function(){
  for (const img of images) {
    await downloadPicsum(img.id, img.filename);
    await new Promise(r => setTimeout(r, 400));
  }
  console.log('\nAll downloads attempted.');
})();