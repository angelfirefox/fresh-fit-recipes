import fs from 'fs/promises';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'public', 'images', 'recipes');
await fs.mkdir(outDir, { recursive: true });

const items = [
  { slug: 'green-protein-smoothie', filename: 'green-protein-smoothie.jpg', unsplashQuery: 'green%20smoothie%20bowl' , wikQuery: 'smoothie'},
  { slug: 'kale-chickpea-bowl', filename: 'kale-chickpea-bowl.jpg', unsplashQuery: 'kale%20chickpea%20bowl' , wikQuery: 'kale%20salad'},
  { slug: 'sheet-pan-lemon-salmon', filename: 'sheet-pan-lemon-salmon.jpg', unsplashQuery: 'lemon%20salmon%20sheet%20pan' , wikQuery: 'salmon'},
  { slug: 'greek-yogurt-parfait', filename: 'greek-yogurt-parfait.jpg', unsplashQuery: 'yogurt%20parfait%20berries' , wikQuery: 'yogurt%20parfait'},
  { slug: 'spicy-tofu-stirfry', filename: 'spicy-tofu-stirfry.jpg', unsplashQuery: 'tofu%20stir%20fry' , wikQuery: 'tofu%20stir-fry'},
  { slug: 'overnight-oats-3-ways', filename: 'overnight-oats-3-ways.jpg', unsplashQuery: 'overnight%20oats%20jars' , wikQuery: 'overnight%20oats'},
];

async function tryDownloadUrl(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const contentType = res.headers.get('content-type') || '';
  return { buffer, contentType };
}

async function getWikimediaImageUrl(query) {
  // Use Wikimedia Commons API to find an image for the query
  const api = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}%20filetype:bitmap&gsrlimit=5&prop=imageinfo&iiprop=url&formatversion=2`;
  const res = await fetch(api);
  if (!res.ok) throw new Error(`Wikimedia API HTTP ${res.status}`);
  const json = await res.json();
  if (!json.query || !json.query.pages) throw new Error('No pages from Wikimedia');
  // pick the first page with imageinfo
  for (const p of json.query.pages) {
    if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].url) {
      return p.imageinfo[0].url;
    }
  }
  throw new Error('No imageinfo URL found');
}

for (const it of items) {
  const outPath = path.join(outDir, it.filename);
  // 1) Try Unsplash source endpoint (no key) with query
  const unsplashUrl = `https://source.unsplash.com/1600x900/?${it.unsplashQuery}`;
  console.log(`Trying Unsplash (no-key) for ${it.slug} — ${unsplashUrl}`);
  try {
    const { buffer, contentType } = await tryDownloadUrl(unsplashUrl);
    if (!contentType.startsWith('image')) throw new Error(`Unsplash returned non-image: ${contentType}`);
    await fs.writeFile(outPath, buffer);
    console.log(`✓ Saved ${outPath} (Unsplash source)`);
    continue;
  } catch (err) {
    console.warn(`Unsplash failed for ${it.slug}: ${err.message}`);
  }

  // 2) Fallback to Wikimedia Commons search
  console.log(`Querying Wikimedia Commons for ${it.slug} — query: ${it.wikQuery}`);
  try {
    const imageUrl = await getWikimediaImageUrl(it.wikQuery);
    console.log(`Wikimedia suggested image: ${imageUrl}`);
    const { buffer, contentType } = await tryDownloadUrl(imageUrl);
    if (!contentType.startsWith('image')) throw new Error(`Wikimedia URL returned non-image: ${contentType}`);
    await fs.writeFile(outPath, buffer);
    console.log(`✓ Saved ${outPath} (Wikimedia)`);
    continue;
  } catch (err) {
    console.warn(`Wikimedia failed for ${it.slug}: ${err.message}`);
  }

  // 3) Last-resort fallback: picsum seeded image
  const picsumUrl = `https://picsum.photos/seed/${encodeURIComponent(it.slug)}/1600/900`;
  console.log(`Trying picsum fallback for ${it.slug}`);
  try {
    const { buffer, contentType } = await tryDownloadUrl(picsumUrl);
    if (!contentType.startsWith('image')) throw new Error(`Picsum returned non-image: ${contentType}`);
    await fs.writeFile(outPath, buffer);
    console.log(`✓ Saved ${outPath} (picsum fallback)`);
  } catch (err) {
    console.error(`Failed to download fallback for ${it.slug}: ${err.message}`);
  }
}

console.log('All done.');
