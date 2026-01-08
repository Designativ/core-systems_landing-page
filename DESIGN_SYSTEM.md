# Design System - Reusable Patterns

This document outlines the reusable design patterns extracted from the Terminal Industries website screenshots and implemented as components.

## Components

### NewsCard
A card component for displaying news/blog posts with category, date, and title.

**Usage:**
```tsx
import { NewsCard } from "@/components/shared";

<NewsCard
  category="BLOG"
  date="DEC 23"
  title="Your Article Title"
  variant="dark" // or "light" or "accent"
/>
```

**Variants:**
- `dark`: Dark teal background with white text
- `light`: Light gray background with dark text
- `accent`: Lime green background with dark text

### FeatureCard
A flexible card component for features, with optional polygon variant.

**Usage:**
```tsx
import { FeatureCard } from "@/components/shared";

<FeatureCard
  title="Maximized Throughput"
  description="Your description here"
  variant="default" // or "polygon"
  icon={<YourIcon />}
/>
```

**Variants:**
- `default`: Standard card with border
- `polygon`: Card with top accent line and centered icon area

### TwoColumnLayout
A responsive two-column layout component.

**Usage:**
```tsx
import { TwoColumnLayout } from "@/components/shared";

<TwoColumnLayout
  left={<YourLeftContent />}
  right={<YourRightContent />}
  reverse={false} // Swap columns on desktop
/>
```

### NumberedList
A numbered list with vertical accent line, perfect for engagement options.

**Usage:**
```tsx
import { NumberedList } from "@/components/shared";

<NumberedList
  items={[
    "Schedule a 30-minute meeting",
    "Schedule a Demo",
    "Arrange ROI consultation"
  ]}
  accentColor="lime" // or "white"
/>
```

### CarouselControls
Navigation controls for carousels/sliders.

**Usage:**
```tsx
import { CarouselControls } from "@/components/shared";

<CarouselControls
  onPrevious={() => {}}
  onNext={() => {}}
  currentPage={1}
  totalPages={9}
/>
```

### BenefitSection
A benefit section with numbered indicator and vertical accent line.

**Usage:**
```tsx
import { BenefitSection } from "@/components/shared";

<BenefitSection
  number="03"
  title="Rapid, repeatable ROI"
  description="Your benefit description here"
/>
```

## CSS Utilities

### Background Patterns

#### `.tech-pattern`
Abstract grid pattern for technical backgrounds.
```tsx
<div className="tech-pattern">
  {/* Your content */}
</div>
```

#### `.geometric-pattern`
Abstract geometric shapes for backgrounds (used in footer).
```tsx
<div className="geometric-pattern">
  {/* Your content */}
</div>
```

#### `.network-pattern`
Network/node visualization pattern.
```tsx
<div className="network-pattern">
  {/* Your content */}
</div>
```

### Typography Utilities

#### `.category-label`
For category tags (BLOG, PODCAST, etc.)
```tsx
<span className="category-label">BLOG</span>
```

#### `.headline-large`
For large hero headlines
```tsx
<h1 className="headline-large">Your Headline</h1>
```

#### `.section-title`
For section headings
```tsx
<h2 className="section-title">Section Title</h2>
```

## Design Patterns

### Color Usage
- **Accent (Lime Green)**: Use sparingly for CTAs, active states, and key highlights
- **Neutral Palette**: White, off-white, gray, deep green/black for backgrounds
- **Text Colors**: 
  - Primary: `text-terminal-text-primary`
  - Secondary: `text-terminal-text-secondary`
  - On Dark: `text-white` or `text-white/80`

### Layout Principles
- Wide layouts with generous whitespace
- Strong horizontal alignment
- Clear section separation
- Intentional pacing between sections

### Card Patterns
- Minimal borders (`border` not `border-2`)
- Soft rounded corners (`rounded-md`)
- Flat design (no shadows, gradients, or glass effects)
- Hover states: subtle border color change only

### Typography
- Large, clean headings
- Strong hierarchy
- Neutral sans-serif (Inter)
- No decorative fonts

## Footer Pattern

The footer uses:
- Dark teal background (`bg-terminal-dark-teal`)
- Geometric pattern overlay (`.geometric-pattern`)
- White text with opacity variations
- Uppercase section headings
- Three-column layout

## Examples

### News/Blog Section
```tsx
<div className="grid gap-6 md:grid-cols-3">
  <NewsCard
    category="BLOG"
    date="DEC 23"
    title="Article Title"
    variant="dark"
  />
  <NewsCard
    category="ANNOUNCEMENT"
    date="NOV 06"
    title="Another Article"
    variant="light"
  />
  <NewsCard
    category="PODCAST"
    date="OCT 27"
    title="Podcast Episode"
    variant="accent"
  />
</div>
```

### Feature Section with Two Columns
```tsx
<TwoColumnLayout
  left={
    <div>
      <h2 className="headline-large">Your Headline</h2>
      <p>Description text</p>
    </div>
  }
  right={
    <FeatureCard
      title="Feature Title"
      description="Feature description"
      variant="polygon"
      icon={<YourIcon />}
    />
  }
/>
```

### Contact Form with Numbered Options
```tsx
<TwoColumnLayout
  left={
    <div>
      <h2>Reach out to learn more</h2>
      <NumberedList
        items={[
          "Schedule a 30-minute meeting",
          "Schedule a Demo",
          "Arrange ROI consultation"
        ]}
        accentColor="lime"
      />
    </div>
  }
  right={<ContactForm />}
/>
```
