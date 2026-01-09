# Icon SVG Files

I've created SVG versions of your Core Systems icon. Here's what was created:

## Files Created

### 1. `/public/icon.svg` (Primary icon)
- Uses `currentColor` for dynamic coloring
- Size: 28x28 viewBox (scalable)
- Can be used as favicon, webclip, etc.

### 2. `/public/favicon.svg` (Favicon version)
- Uses terminal lime color (#10b981) directly
- Same design, fixed color for favicon use
- Size: 32x32

### 3. `/public/images/icon-core-systems.svg` (Full-size version)
- Scalable to any size (512x512+)
- Uses `currentColor` for flexibility
- Can be used for larger icons, PWA icons, etc.

## Icon Design

The icon represents **connected systems/networks** with:
- 3 interconnected circles (nodes)
- 2 connection lines
- 1 filled center dot (main hub)

This represents Core Systems' focus on connecting and automating business systems.

## Usage

### As Favicon/Icon

The `/public/icon.svg` is already referenced in `src/app/layout.tsx`:
```tsx
icons: {
  icon: [
    { url: "/icon.svg", type: "image/svg+xml" },
    // ...
  ],
}
```

### In HTML/React

```html
<!-- Use with currentColor for dynamic coloring -->
<img src="/icon.svg" alt="Core Systems" style="color: #10b981;" />

<!-- Or inline SVG -->
<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
  <!-- SVG content -->
</svg>
```

### Generate PNG Versions

To generate PNG versions for different sizes:

1. **Use Online Tool**: https://cloudconvert.com/svg-to-png
   - Upload `icon.svg`
   - Set dimensions (180x180, 192x192, 512x512)
   - Download

2. **Use ImageMagick** (if installed):
   ```bash
   convert icon.svg -resize 180x180 apple-icon.png
   convert icon.svg -resize 192x192 icon-192.png
   convert icon.svg -resize 512x512 icon-512.png
   ```

3. **Use Inkscape** (free desktop app):
   - Open `icon.svg`
   - Export as PNG at desired sizes

4. **Use Figma/Design Tool**:
   - Import SVG
   - Export at different sizes
   - Choose PNG format

## Colors

- **Primary Color**: Terminal lime (#10b981)
- **For Dark Backgrounds**: Use `currentColor` with terminal lime
- **For Light Backgrounds**: Use `currentColor` with rgb(48, 58, 74) or terminal dark green

## File Sizes Needed

For complete favicon support, you'll need these PNG versions:

- `favicon.ico` (16x16, 32x32, 48x48 combined)
- `apple-icon.png` (180x180)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

The SVG files are already created and can be used directly or converted to PNG as needed!
