import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DesignSystemPage() {
  const terminalColors = {
    backgrounds: {
      white: { value: "0 0% 100%", hex: "#FFFFFF" },
      black: { value: "0 0% 0%", hex: "#000000" },
      "light-gray": { value: "0 0% 96.9%", hex: "#F7F7F7" },
      "dark-teal": { value: "180 58% 13%", hex: "#0A3D3D" },
      "dark-teal-alt": { value: "180 62% 17%", hex: "#0B4747" },
    },
    text: {
      primary: { value: "0 0% 0%", hex: "#000000" },
      secondary: { value: "0 0% 40%", hex: "#666666" },
      tertiary: { value: "0 0% 60%", hex: "#999999" },
      "on-dark": { value: "0 0% 100%", hex: "#FFFFFF" },
      "muted-dark": { value: "0 0% 40%", hex: "#666666" },
    },
    accents: {
      lime: { value: "68 100% 50%", hex: "#D4FF00" },
      "lime-hover": { value: "66 100% 47%", hex: "#C4EF00" },
      "lime-glow": { value: "68 100% 50% / 0.3", hex: "rgba(212, 255, 0, 0.3)" },
    },
    borders: {
      light: { value: "0 0% 90%", hex: "#E5E5E5" },
      medium: { value: "0 0% 80%", hex: "#CCCCCC" },
      dark: { value: "0 0% 10%", hex: "#1A1A1A" },
      teal: { value: "0 0% 100% / 0.1", hex: "rgba(255, 255, 255, 0.1)" },
    },
    overlays: {
      black: { value: "0 0% 0% / 0.5", hex: "rgba(0, 0, 0, 0.5)" },
      white: { value: "0 0% 100% / 0.9", hex: "rgba(255, 255, 255, 0.9)" },
      gray: { value: "0 0% 50% / 0.9", hex: "rgba(128, 128, 128, 0.9)" },
      "shadow-lime": { value: "68 100% 50% / 0.3", hex: "rgba(212, 255, 0, 0.3)" },
    },
  };

  const typography = {
    fontFamily: "Inter",
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    weights: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  };

  const layouts = {
    container: "max-width: 1280px, padding: 1rem",
    grid: {
      "1-col": "grid-cols-1",
      "2-col": "grid-cols-2",
      "3-col": "grid-cols-3",
      "4-col": "grid-cols-4",
      "6-col": "grid-cols-6",
    },
    spacing: {
      xs: "0.5rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "3rem",
      "2xl": "4rem",
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Terminal Industries Design System</h1>
        <p className="text-lg text-muted-foreground">
          Reference guide for colors, typography, and layouts
        </p>
      </div>

      {/* Terminal Industries Color Palette */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Terminal Industries Color Palette</h2>

        {/* Background Colors */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold">Background Colors</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(terminalColors.backgrounds).map(([name, color]) => (
              <Card key={name} className="overflow-hidden">
                <div
                  className="h-24 w-full"
                  style={{ backgroundColor: `hsl(${color.value})` }}
                />
                <CardHeader>
                  <CardTitle className="text-sm font-medium">{name}</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    {color.hex}
                  </CardDescription>
                  <CardDescription className="font-mono text-xs">
                    hsl({color.value})
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Text Colors */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold">Text Colors</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(terminalColors.text).map(([name, color]) => (
              <Card key={name} className="overflow-hidden">
                <div
                  className="h-24 w-full"
                  style={{ backgroundColor: `hsl(${color.value})` }}
                />
                <CardHeader>
                  <CardTitle className="text-sm font-medium">{name}</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    {color.hex}
                  </CardDescription>
                  <CardDescription className="font-mono text-xs">
                    hsl({color.value})
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Accent Colors */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold">Accent Colors (Lime - Signature)</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(terminalColors.accents).map(([name, color]) => (
              <Card key={name} className="overflow-hidden">
                <div
                  className="h-24 w-full"
                  style={{ backgroundColor: `hsl(${color.value})` }}
                />
                <CardHeader>
                  <CardTitle className="text-sm font-medium">{name}</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    {color.hex}
                  </CardDescription>
                  <CardDescription className="font-mono text-xs">
                    hsl({color.value})
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Border Colors */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold">Border Colors</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(terminalColors.borders).map(([name, color]) => (
              <Card key={name} className="overflow-hidden border-2">
                <div
                  className="h-24 w-full"
                  style={{ backgroundColor: `hsl(${color.value})` }}
                />
                <CardHeader>
                  <CardTitle className="text-sm font-medium">{name}</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    {color.hex}
                  </CardDescription>
                  <CardDescription className="font-mono text-xs">
                    hsl({color.value})
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Overlay Colors */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold">Overlays & Shadows</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(terminalColors.overlays).map(([name, color]) => (
              <Card key={name} className="overflow-hidden border-2">
                <div
                  className="h-24 w-full"
                  style={{ backgroundColor: `hsl(${color.value})` }}
                />
                <CardHeader>
                  <CardTitle className="text-sm font-medium">{name}</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    {color.hex}
                  </CardDescription>
                  <CardDescription className="font-mono text-xs">
                    hsl({color.value})
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Typography</h2>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Font Family</CardTitle>
            <CardDescription>{typography.fontFamily}</CardDescription>
          </CardHeader>
        </Card>

        {/* Font Sizes */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold">Font Sizes</h3>
          <div className="space-y-4">
            {Object.entries(typography.sizes).map(([name, size]) => (
              <div key={name} className="flex items-center gap-4">
                <div className="w-24 font-mono text-sm text-muted-foreground">
                  {name}
                </div>
                <div className="flex-1 border-t border-dashed" />
                <div className="w-20 text-right font-mono text-sm text-muted-foreground">
                  {size}
                </div>
                <div
                  className="font-medium"
                  style={{ fontSize: size }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font Weights */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Font Weights</h3>
          <div className="space-y-4">
            {Object.entries(typography.weights).map(([name, weight]) => (
              <div key={name} className="flex items-center gap-4">
                <div className="w-32 font-mono text-sm text-muted-foreground">
                  {name}
                </div>
                <div className="flex-1 border-t border-dashed" />
                <div className="w-16 text-right font-mono text-sm text-muted-foreground">
                  {weight}
                </div>
                <div
                  className="text-xl"
                  style={{ fontWeight: weight }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layouts */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Layouts</h2>

        {/* Container */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold">Container</h3>
          <Card>
            <CardHeader>
              <CardTitle>Default Container</CardTitle>
              <CardDescription className="font-mono text-xs">
                {layouts.container}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border-2 border-dashed border-primary/20 bg-muted/20 p-8 text-center">
                <p className="text-muted-foreground">
                  Container content area (max-width: 1280px)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid System */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold">Grid System</h3>
          <div className="space-y-8">
            {Object.entries(layouts.grid).map(([name, className]) => (
              <Card key={name}>
                <CardHeader>
                  <CardTitle className="text-sm">{name}</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    {className}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`grid gap-4 ${className}`}>
                    {Array.from({ length: parseInt(name.split("-")[0]) || 1 }).map(
                      (_, i) => (
                        <div
                          key={i}
                          className="rounded-lg border-2 border-dashed border-primary/20 bg-muted/20 p-4 text-center text-sm"
                        >
                          Column {i + 1}
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Spacing Scale</h3>
          <div className="space-y-4">
            {Object.entries(layouts.spacing).map(([name, size]) => (
              <div key={name} className="flex items-center gap-4">
                <div className="w-24 font-mono text-sm text-muted-foreground">
                  {name}
                </div>
                <div className="flex-1 border-t border-dashed" />
                <div className="w-20 text-right font-mono text-sm text-muted-foreground">
                  {size}
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="bg-primary"
                    style={{ width: size, height: size }}
                  />
                  <span className="text-sm text-muted-foreground">
                    Visual reference
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
