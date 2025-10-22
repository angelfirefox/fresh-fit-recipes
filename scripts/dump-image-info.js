const fs = require('fs');
const path = require('path');

const files = [
  'green-protein-smoothie.jpg',
  'kale-chickpea-bowl.jpg',
  'sheet-pan-lemon-salmon.jpg',
  'greek-yogurt-parfait.jpg',
  'spicy-tofu-stirfry.jpg',
  'overnight-oats-3-ways.jpg'
];

for (const f of files) {
  const p = path.join(__dirname, '..', 'public', 'images', 'recipes', f);
  try {
    const stat = fs.statSync(p);
    const buffer = fs.readFileSync(p);
    const header = buffer.slice(0, 32).toString('hex');
    const start = buffer.slice(0, 64).toString('utf8').replace(/\n/g, '');
    console.log(`FILE: ${f}`);
    console.log(`  path: ${p}`);
    console.log(`  size: ${stat.size} bytes`);
    console.log(`  header(hex): ${header}`);
    console.log(`  start(utf8): ${start.slice(0,200)}`);
    console.log('');
  } catch (err) {
    console.error(`ERROR reading ${p}: ${err.message}`);
  }
}
