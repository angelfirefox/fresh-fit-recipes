import fs from 'fs';
import path from 'path';
import https from 'https';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// List of recipes and their search terms
const recipes = [
  { slug: 'green-protein-smoothie', query: 'green+smoothie+healthy' },
  { slug: 'kale-chickpea-bowl', query: 'quinoa+bowl+healthy' },
  { slug: 'sheet-pan-lemon-salmon', query: 'baked+salmon+vegetables' },
  { slug: 'greek-yogurt-parfait', query: 'yogurt+parfait+berries' },
  { slug: 'spicy-tofu-stirfry', query: 'tofu+stirfry+vegetables' },
  { slug: 'overnight-oats-3-ways', query: 'overnight+oats+breakfast' }
];

async function fetchAndSaveImage(recipe) {
  if (!UNSPLASH_ACCESS_KEY) {
    console.error('Please set UNSPLASH_ACCESS_KEY environment variable');
    process.exit(1);
  }

  const url = `https://api.unsplash.com/photos/random?query=${recipe.query}&orientation=landscape`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const imageUrl = data.urls.regular;
    const imagePath = path.join(process.cwd(), 'public', 'images', 'recipes', `${recipe.slug}.jpg`);
    
    // Ensure directory exists
    fs.mkdirSync(path.dirname(imagePath), { recursive: true });
    
    // Download image
    https.get(imageUrl, (response) => {
      const file = fs.createWriteStream(imagePath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${recipe.slug}.jpg`);
      });
    }).on('error', (err) => {
      fs.unlink(imagePath, () => {});
      console.error(`× Error downloading ${recipe.slug}:`, err.message);
    });
    
  } catch (error) {
    console.error(`× Error fetching ${recipe.slug}:`, error.message);
  }
}

async function main() {
  console.log('🔄 Fetching recipe images from Unsplash...\n');
  
  // Process recipes sequentially to respect API rate limits
  for (const recipe of recipes) {
    await fetchAndSaveImage(recipe);
    // Add a small delay between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

main().catch(console.error);