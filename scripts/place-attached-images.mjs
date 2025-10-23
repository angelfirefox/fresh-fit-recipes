import path from 'path';
import fs from 'fs';

const files = [
  'green-protein-smoothie.jpg',
  'greek-yogurt-parfait.jpg',
  'overnight-oats-3-ways.jpg',
  'sheet-pan-lemon-salmon.jpg',
  'kale-chickpea-bowl.jpg',
  'spicy-tofu-stirfry.jpg'
];

console.log('Place the attached images into the following folder:');
console.log(path.resolve(process.cwd(), 'public', 'images', 'recipes'));
console.log('\nRequired filenames:');
for (const f of files) console.log('-', f);

console.log('\nQuick check (files present?):');
for (const f of files) {
  const p = path.resolve(process.cwd(), 'public', 'images', 'recipes', f);
  console.log(f, fs.existsSync(p) ? 'FOUND' : 'MISSING');
}

console.log('\nAfter placing images, run: npm run generate:recipes');
