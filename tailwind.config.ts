import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Terminal Industries Colors
        terminal: {
          white: "hsl(var(--bg-white))",
          black: "hsl(var(--bg-black))",
          "light-gray": "hsl(var(--bg-light-gray))",
          "dark-teal": "hsl(var(--bg-dark-teal))",
          "dark-teal-alt": "hsl(var(--bg-dark-teal-alt))",
          "text-primary": "hsl(var(--text-primary))",
          "text-secondary": "hsl(var(--text-secondary))",
          "text-tertiary": "hsl(var(--text-tertiary))",
          "text-on-dark": "hsl(var(--text-on-dark))",
          "text-muted-dark": "hsl(var(--text-muted-dark))",
          "lime": "hsl(var(--accent-lime))",
          "lime-hover": "hsl(var(--accent-lime-hover))",
          "border-light": "hsl(var(--border-light))",
          "border-medium": "hsl(var(--border-medium))",
          "border-dark": "hsl(var(--border-dark))",
          "border-teal": "hsl(var(--border-teal))",
        },
        // shadcn/ui Theme Colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
            "4xl": "2rem",
          },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
