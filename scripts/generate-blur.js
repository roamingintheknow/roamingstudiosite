import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// torun: node scripts/generate-blur.js

const imagesDir = path.join(process.cwd(), 'public/images');
const outputFile = path.join(process.cwd(), 'blurData.json');

const images = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

async function generateBlur() {
  const blurData = {};

  for (const image of images) {
    const imagePath = path.join(imagesDir, image);

    // Resize tiny (e.g., 20px width), compress, and output as Base64
    const buffer = await sharp(imagePath)
      .resize({ width: 20 }) 
      .blur(5)
      .toBuffer();

    const base64 = `data:image/jpeg;base64,${buffer.toString('base64')}`;
    blurData[image] = base64;
  }

  fs.writeFileSync(outputFile, JSON.stringify(blurData, null, 2));
  console.log('Blur data generated:', outputFile);
}

generateBlur();
