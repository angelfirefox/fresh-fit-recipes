import fs from 'fs/promises';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'public', 'images', 'recipes');
await fs.mkdir(outDir, { recursive: true });

const images = [
  { slug: 'green-protein-smoothie', filename: 'green-protein-smoothie.jpg', query: 'green smoothie spinach banana' },
  { slug: 'kale-chickpea-bowl', filename: 'kale-chickpea-bowl.jpg', query: 'kale bowl chickpeas quinoa' },
  { slug: 'sheet-pan-lemon-salmon', filename: 'sheet-pan-lemon-salmon.jpg', query: 'lemon salmon sheet pan roasted vegetables' },
  { slug: 'greek-yogurt-parfait', filename: 'greek-yogurt-parfait.jpg', query: 'yogurt parfait berries granola' },
  { slug: 'spicy-tofu-stirfry', filename: 'spicy-tofu-stirfry.jpg', query: 'tofu stir fry vegetables spicy' },
  { slug: 'overnight-oats-3-ways', filename: 'overnight-oats-3-ways.jpg', query: 'overnight oats jars toppings' },
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
  const unsplashUrl = `https://source.unsplash.com/1600x900/?${encodeURIComponent(img.query)}`;
  console.log(`Trying Unsplash for ${img.slug} — query: "${img.query}"`);
  try {
    const { buffer, contentType } = await tryDownload(unsplashUrl);
    if (!contentType.startsWith('image')) {
      throw new Error(`Unsplash returned non-image content-type: ${contentType}`);
    }
    await fs.writeFile(outPath, buffer);
    console.log(`✓ Saved ${outPath} (Unsplash)`);
    continue;
  } catch (err) {
    console.warn(`Unsplash failed for ${img.slug}: ${err.message}`);
  }

  // Fallback to picsum with a seed to be deterministic
  const picsumUrl = `https://picsum.photos/seed/${encodeURIComponent(img.slug)}/1600/900`;
  console.log(`Trying picsum fallback for ${img.slug}`);
  try {
    const { buffer, contentType } = await tryDownload(picsumUrl);
    if (!contentType.startsWith('image')) {
      throw new Error(`Picsum returned non-image content-type: ${contentType}`);
    }
    await fs.writeFile(outPath, buffer);
    console.log(`✓ Saved ${outPath} (picsum fallback)`);
  } catch (err) {
    console.error(`Failed to download fallback for ${img.slug}: ${err.message}`);
  }
}

console.log('Done.');
