const https = require('https');
const fs = require('fs');
const path = require('path');

const recipeImages = [
  {
    slug: 'green-protein-smoothie',
    url: 'https://source.unsplash.com/featured/?green+smoothie',
  },
  {
    slug: 'kale-chickpea-bowl',
    url: 'https://source.unsplash.com/featured/?quinoa+bowl',
  },
  {
    slug: 'sheet-pan-lemon-salmon',
    url: 'https://source.unsplash.com/featured/?baked+salmon',
  },
  {
    slug: 'greek-yogurt-parfait',
    url: 'https://source.unsplash.com/featured/?yogurt+parfait',
  },
  {
    slug: 'spicy-tofu-stirfry',
    url: 'https://source.unsplash.com/featured/?tofu+stirfry',
  },
  {
    slug: 'overnight-oats-3-ways',
    url: 'https://source.unsplash.com/featured/?overnight+oats',
  },
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '../public/images/recipes', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded ${filename}`);
        resolve(filepath);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

async function downloadAllImages() {
  console.log('Downloading recipe images...');
  const downloads = recipeImages.map(recipe => 
    downloadImage(recipe.url, `${recipe.slug}.jpg`)
  );
  
  try {
    await Promise.all(downloads);
    console.log('\nAll images downloaded successfully! 🎉');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages();