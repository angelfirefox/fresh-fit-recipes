import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const srcDir = process.argv[2] || path.resolve(process.env.USERPROFILE || process.env.HOME || '.', 'Downloads');
const destDir = path.resolve(process.cwd(), 'public', 'images', 'recipes');

const files = [
  'green-protein-smoothie.jpg',
  'kale-chickpea-bowl.jpg',
  'sheet-pan-lemon-salmon.jpg',
  'greek-yogurt-parfait.jpg',
  'spicy-tofu-stirfry.jpg',
  'overnight-oats-3-ways.jpg'
];

console.log('Copying from', srcDir, 'to', destDir);
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

let missing = [];
for (const f of files) {
  const s = path.join(srcDir, f);
  const d = path.join(destDir, f);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, d);
    console.log('Copied', f);
  } else {
    console.log('Missing source for', f);
    missing.push(f);
  }
}

if (missing.length) {
  console.log('\nSome files were missing in the source folder:');
  for (const m of missing) console.log('-', m);
  console.log('\nPlease download the missing attachments into', srcDir, 'and re-run this script:');
  console.log('  node scripts/copy-attached-images.mjs "C:\\path\\to\\attachments"');
  process.exit(1);
}

console.log('\nAll files copied. Now regenerating RECIPES_LIST.txt...');
try {
  execSync('node ./scripts/generate-recipes-list.mjs', { stdio: 'inherit', cwd: process.cwd() });
  console.log('\nDone. Start the dev server: npm run dev');
} catch (e) {
  console.error('Failed to run generator:', e.message);
  process.exit(1);
}
