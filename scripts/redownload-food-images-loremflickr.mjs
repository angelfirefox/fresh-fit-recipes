import fs from 'fs/promises';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'public', 'images', 'recipes');
await fs.mkdir(outDir, { recursive: true });

const images = [
  { slug: 'green-protein-smoothie', filename: 'green-protein-smoothie.jpg', tags: 'smoothie,green,spinach,banana' },
  { slug: 'kale-chickpea-bowl', filename: 'kale-chickpea-bowl.jpg', tags: 'kale,chickpeas,bowl,quinoa' },
  { slug: 'sheet-pan-lemon-salmon', filename: 'sheet-pan-lemon-salmon.jpg', tags: 'salmon,lemon,sheet pan,roasted vegetables' },
  { slug: 'greek-yogurt-parfait', filename: 'greek-yogurt-parfait.jpg', tags: 'yogurt,parfait,berries,granola' },
  { slug: 'spicy-tofu-stirfry', filename: 'spicy-tofu-stirfry.jpg', tags: 'tofu,stir fry,vegetables,asian' },
  { slug: 'overnight-oats-3-ways', filename: 'overnight-oats-3-ways.jpg', tags: 'overnight oats,jars,breakfast' },
];

async function tryDownload(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const contentType = res.headers.get('content-type') || '';
  const buffer = Buffer.from(await res.arrayBuffer());
  return { buffer, contentType };
}

for (const img of images) {
  const outPath = path.join(outDir, img.filename);

  // LoremFlickr: tag-based image generator
  const lfUrl = `https://loremflickr.com/1600/900/${encodeURIComponent(img.tags)}?random=${encodeURIComponent(img.slug)}`;
  console.log(`Trying LoremFlickr for ${img.slug} — tags: "${img.tags}"`);
  try {
    const { buffer, contentType } = await tryDownload(lfUrl);
    if (!contentType.startsWith('image')) throw new Error(`LoremFlickr returned non-image content-type: ${contentType}`);
    await fs.writeFile(outPath, buffer);
    console.log(`✓ Saved ${outPath} (loremflickr)`);
    continue;
  } catch (err) {
    console.warn(`LoremFlickr failed for ${img.slug}: ${err.message}`);
  }

  // Fallback to picsum with seed
  const picsumUrl = `https://picsum.photos/seed/${encodeURIComponent(img.slug)}/1600/900`;
  console.log(`Trying picsum fallback for ${img.slug}`);
  try {
    const { buffer, contentType } = await tryDownload(picsumUrl);
    if (!contentType.startsWith('image')) throw new Error(`Picsum returned non-image content-type: ${contentType}`);
    await fs.writeFile(outPath, buffer);
    console.log(`✓ Saved ${outPath} (picsum fallback)`);
  } catch (err) {
    console.error(`Failed to download fallback for ${img.slug}: ${err.message}`);
  }
}

console.log('Done.');
