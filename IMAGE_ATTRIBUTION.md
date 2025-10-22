# Image Attribution

The recipe images used in this project are sourced from [Unsplash](https://unsplash.com), a platform for free-to-use images. All images are used under the Unsplash License, which grants us a non-exclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use photos for free.

## Image Credits

- Green Protein Smoothie: Photo sourced from Unsplash
- Kale & Chickpea Power Bowl: Photo sourced from Unsplash
- Sheet-Pan Lemon Salmon: Photo sourced from Unsplash
- Greek Yogurt Parfait: Photo sourced from Unsplash
- Spicy Tofu Stir-Fry: Photo sourced from Unsplash
- Overnight Oats: Photo sourced from Unsplash

## Usage Rights

All images are used under the [Unsplash License](https://unsplash.com/license):
- Free to use for commercial and noncommercial purposes
- No permission needed
- Attribution not required (but appreciated)

## Local Development

To refresh the recipe images, you'll need an Unsplash API key:

1. Create an account at [Unsplash](https://unsplash.com/developers)
2. Create a new application to get an access key
3. Set the environment variable:
   ```bash
   export UNSPLASH_ACCESS_KEY=your_key_here
   ```
4. Run the image fetch script:
   ```bash
   node scripts/fetch-unsplash-images.mjs
   ```