import fs from 'fs';
import path from 'path';

// Parse lib/image-data.ts which contains slug/title/url entries
const imageDataPath = path.resolve(process.cwd(), 'lib', 'image-data.ts');
const content = fs.readFileSync(imageDataPath, 'utf8');
const list = [];

// Split by object literal entries inside the array
const entries = content.split(/\},\s*\{\s*/);
for (const entry of entries) {
  const slugMatch = entry.match(/slug:\s*'([^']+)'/);
  const titleMatch = entry.match(/title:\s*'([^']+)'/);
  const urlMatch = entry.match(/url:\s*'([^']+)'/);
  if (slugMatch && titleMatch) {
    list.push({ title: titleMatch[1], slug: slugMatch[1], image: urlMatch ? urlMatch[1] : '' });
  }
}

const outLines = list.map(r => `${r.title} — ${r.slug} — ${r.image || ''}`);
const outPath = path.resolve(process.cwd(), 'RECIPES_LIST.txt');
fs.writeFileSync(outPath, outLines.join('\n') + '\n', 'utf8');
console.log(`Wrote ${outLines.length} recipes to ${outPath}`);
