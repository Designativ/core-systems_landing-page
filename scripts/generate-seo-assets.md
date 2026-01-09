# SEO Assets Generation Guide

This guide helps you generate all required SEO assets (favicons, icons, OpenGraph images) for your website.

## Option 1: Use Online Generators (Recommended)

### Step 1: Favicon Generation

1. Go to https://favicon.io/favicon-generator/
2. Upload your logo (should be square, at least 260x260px)
3. Customize colors if needed
4. Download the package
5. Extract and copy files to `/public`:
   - `favicon.ico` → `/public/favicon.ico`
   - `apple-touch-icon.png` → `/public/apple-icon.png`
   - `favicon-32x32.png` → merge with other sizes for `icon-192.png` and `icon-512.png`

### Step 2: OpenGraph Image

1. Create a 1200x630px image in your design tool (Figma, Canva, Photoshop)
2. Include:
   - Your logo
   - Brand colors (dark teal background, lime accents)
   - Tagline: "AI-powered automation for growing BC businesses"
   - Keep text readable and centered
3. Export as `og-image.jpg` to `/public/og-image.jpg`

## Option 2: Use Figma Template

1. Create a Figma file
2. Design your favicon and OG image
3. Export using Figma's export feature:
   - Select frame → Export → Choose format and size
   - Export multiple sizes for icons

## Option 3: Programmatic Generation (Advanced)

If you want to automate this, you can use:

- **sharp** (Node.js image processing library)
- **jimp** (JavaScript image processing)
- **puppeteer** (Generate OG images dynamically)

Example with sharp:
```bash
npm install sharp
```

```javascript
const sharp = require('sharp');

// Generate favicon from logo
sharp('logo.png')
  .resize(32, 32)
  .toFile('public/favicon.ico');
```

## Current Requirements

Place these files in `/public`:

- ✅ `favicon.ico` (16x16, 32x32, 48x48)
- ✅ `icon.svg` (your logo as SVG)
- ✅ `apple-icon.png` (180x180)
- ✅ `icon-192.png` (192x192)
- ✅ `icon-512.png` (512x512)
- ✅ `og-image.jpg` (1200x630)

## Quick Checklist

- [ ] Generate favicon.ico
- [ ] Create icon.svg (your logo)
- [ ] Generate apple-icon.png (180x180)
- [ ] Generate icon-192.png (192x192)
- [ ] Generate icon-512.png (512x512)
- [ ] Design and export og-image.jpg (1200x630)
- [ ] Test favicon in browser
- [ ] Test OpenGraph image with Facebook Debugger
- [ ] Verify all images load correctly
