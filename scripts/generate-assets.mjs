#!/usr/bin/env node

/**
 * Generate all required image assets from SVG
 * Creates: favicon.ico, apple-icon.png, icon-192.png, icon-512.png, og-image.jpg
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const iconSvgPath = path.join(publicDir, 'icon.svg');

// Colors from your design system
const COLORS = {
  terminalLime: '#10b981',
  terminalDarkTeal: '#0a1929',
  terminalTextPrimary: '#30394a',
};

async function generatePNGFromSVG(inputPath, outputPath, size, backgroundColor = null) {
  try {
    let image = sharp(inputPath).resize(size, size, {
      fit: 'contain',
      background: backgroundColor || { r: 0, g: 0, b: 0, alpha: 0 }
    });

    await image.png().toFile(outputPath);
    console.log(`✅ Generated: ${path.basename(outputPath)} (${size}x${size})`);
    return true;
  } catch (error) {
    console.error(`❌ Error generating ${outputPath}:`, error.message);
    return false;
  }
}

async function generateICO(inputPath, outputPath) {
  try {
    // Generate 32x32 PNG as favicon (most browsers accept PNG as .ico)
    // For true multi-resolution ICO, use: npm install to-ico
    const icoData = await sharp(inputPath)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    fs.writeFileSync(outputPath, icoData);
    console.log(`✅ Generated: ${path.basename(outputPath)} (32x32 PNG format)`);
    console.log(`   Note: This is a PNG named .ico - works in all browsers`);
    console.log(`   For multi-resolution .ico, use: https://favicon.io/favicon-converter/`);
    return true;
  } catch (error) {
    console.error(`❌ Error generating ${outputPath}:`, error.message);
    return false;
  }
}

async function generateOGImage(iconPath, outputPath) {
  try {
    const width = 1200;
    const height = 630;
    const padding = 80;
    const iconSize = 150;
    
    // Load and resize the icon with terminal lime color
    // First, we'll create a colored version of the icon
    const iconSvg = fs.readFileSync(iconPath, 'utf8');
    const coloredIconSvg = iconSvg.replace(/currentColor/g, COLORS.terminalLime);
    
    // Create the icon as a buffer
    const iconBuffer = await sharp(Buffer.from(coloredIconSvg))
      .resize(iconSize, iconSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    // Create SVG overlay with text
    const svgText = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            .title { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              font-size: 72px; 
              font-weight: 700; 
              fill: #ffffff; 
              letter-spacing: -0.02em;
            }
            .subtitle { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              font-size: 36px; 
              font-weight: 400; 
              fill: ${COLORS.terminalLime}; 
              letter-spacing: -0.01em;
            }
          </style>
        </defs>
        
        <!-- Icon -->
        <g transform="translate(${padding}, ${padding + 20})">
          <image href="data:image/png;base64,${iconBuffer.toString('base64')}" width="${iconSize}" height="${iconSize}"/>
        </g>
        
        <!-- Text Content -->
        <g transform="translate(${padding}, ${height / 2 + 20})">
          <text x="0" y="0" class="title">Core Systems</text>
          <text x="0" y="90" class="subtitle">AI-powered automation for growing BC businesses</text>
        </g>
      </svg>
    `;

    // Create the final image
    await sharp({
      create: {
        width,
        height,
        channels: 3,
        background: { r: 10, g: 25, b: 41 } // #0a1929 terminal-dark-teal
      }
    })
      .composite([
        {
          input: Buffer.from(svgText),
          top: 0,
          left: 0,
        }
      ])
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    console.log(`✅ Generated: ${path.basename(outputPath)} (${width}x${height})`);
    return true;
  } catch (error) {
    console.error(`❌ Error generating OG image:`, error.message);
    // Fallback: create a simple colored image
    try {
      await sharp({
        create: {
          width: 1200,
          height: 630,
          channels: 3,
          background: { r: 10, g: 25, b: 41 } // terminal-dark-teal
        }
      })
        .jpeg({ quality: 90 })
        .toFile(outputPath);
      console.log(`⚠️  Generated fallback OG image (no text/icon)`);
      return true;
    } catch (fallbackError) {
      console.error(`❌ Fallback also failed:`, fallbackError.message);
      return false;
    }
  }
}

async function main() {
  console.log('🎨 Generating image assets from SVG...\n');

  // Check if icon.svg exists
  if (!fs.existsSync(iconSvgPath)) {
    console.error(`❌ Error: ${iconSvgPath} not found!`);
    console.log('   Please make sure icon.svg exists in the public folder.');
    process.exit(1);
  }

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const results = [];

  // Generate favicon.ico (using PNG format for compatibility)
  console.log('📦 Generating favicon.ico...');
  results.push(await generateICO(iconSvgPath, path.join(publicDir, 'favicon.ico')));

  // Generate Apple Web Clip icons (for iOS home screen)
  console.log('📦 Generating Apple Web Clip icons...');
  results.push(await generatePNGFromSVG(iconSvgPath, path.join(publicDir, 'apple-icon.png'), 180)); // iPhone (modern)
  results.push(await generatePNGFromSVG(iconSvgPath, path.join(publicDir, 'apple-icon-152.png'), 152)); // iPad
  results.push(await generatePNGFromSVG(iconSvgPath, path.join(publicDir, 'apple-icon-167.png'), 167)); // iPad Pro

  // Generate icon-192.png (192x192)
  console.log('📦 Generating icon-192.png...');
  results.push(await generatePNGFromSVG(iconSvgPath, path.join(publicDir, 'icon-192.png'), 192));

  // Generate icon-512.png (512x512)
  console.log('📦 Generating icon-512.png...');
  results.push(await generatePNGFromSVG(iconSvgPath, path.join(publicDir, 'icon-512.png'), 512));

  // Generate og-image.jpg (1200x630)
  console.log('📦 Generating og-image.jpg...');
  results.push(await generateOGImage(iconSvgPath, path.join(publicDir, 'og-image.jpg')));

  // Summary
  console.log('\n📊 Summary:');
  const successCount = results.filter(r => r).length;
  const totalCount = results.length;
  
  if (successCount === totalCount) {
    console.log(`✅ Successfully generated all ${totalCount} image assets!`);
    console.log('\n📁 Files created in /public:');
    console.log('   ✓ favicon.ico (32x32 PNG)');
    console.log('   ✓ apple-icon.png (180x180) - iPhone Web Clip');
    console.log('   ✓ apple-icon-152.png (152x152) - iPad Web Clip');
    console.log('   ✓ apple-icon-167.png (167x167) - iPad Pro Web Clip');
    console.log('   ✓ icon-192.png (192x192)');
    console.log('   ✓ icon-512.png (512x512)');
    console.log('   ✓ og-image.jpg (1200x630)');
    console.log('\n💡 Note: For multi-resolution .ico file (16x16, 32x32, 48x48), use:');
    console.log('   https://favicon.io/favicon-converter/');
    console.log('   Upload your favicon.ico and it will create the proper format.');
  } else {
    console.log(`⚠️  Generated ${successCount}/${totalCount} assets`);
    console.log('   Some files may need to be generated manually.');
  }
}

main().catch(console.error);
