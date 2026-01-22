#!/usr/bin/env node

/**
 * Convert icon-core-systems.svg to PNG format
 * Creates PNG files in common sizes
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const imagesDir = path.join(publicDir, 'images');
const iconSvgPath = path.join(imagesDir, 'icon-core-systems.svg');

// Color to use instead of currentColor (black for logo)
const ICON_COLOR = '#000000'; // Black

async function convertSVGToPNG(inputPath, outputPath, size) {
  try {
    // Read SVG and replace currentColor with actual color
    let svgContent = fs.readFileSync(inputPath, 'utf8');
    svgContent = svgContent.replace(/currentColor/g, ICON_COLOR);
    
    // Convert to PNG
    await sharp(Buffer.from(svgContent))
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
      })
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Generated: ${path.basename(outputPath)} (${size}x${size})`);
    return true;
  } catch (error) {
    console.error(`❌ Error generating ${outputPath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🎨 Converting icon-core-systems.svg to PNG...\n');

  // Check if icon exists
  if (!fs.existsSync(iconSvgPath)) {
    console.error(`❌ Error: ${iconSvgPath} not found!`);
    process.exit(1);
  }

  // Ensure images directory exists
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const sizes = [256, 512, 1024];
  const results = [];

  for (const size of sizes) {
    const outputPath = path.join(imagesDir, `icon-core-systems-${size}.png`);
    results.push(await convertSVGToPNG(iconSvgPath, outputPath, size));
  }

  // Summary
  console.log('\n📊 Summary:');
  const successCount = results.filter(r => r).length;
  const totalCount = results.length;
  
  if (successCount === totalCount) {
    console.log(`✅ Successfully generated ${totalCount} PNG files!`);
    console.log('\n📁 Files created in /public/images:');
    sizes.forEach(size => {
      console.log(`   ✓ icon-core-systems-${size}.png (${size}x${size})`);
    });
    console.log('\n💡 You can download these files from:');
    sizes.forEach(size => {
      console.log(`   http://localhost:3000/images/icon-core-systems-${size}.png`);
    });
  } else {
    console.log(`⚠️  Generated ${successCount}/${totalCount} files`);
  }
}

main().catch(console.error);
