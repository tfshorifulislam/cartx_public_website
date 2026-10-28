import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          subtle: "hsl(var(--secondary-subtle))",
          "subtle-foreground": "hsl(var(--secondary-subtle-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)", /* 10px - 12px */
        md: "calc(var(--radius) - 2px)", /* 12px - 14px */
        lg: "var(--radius)",             /* 14px - 16px */
        xl: "calc(var(--radius) + 4px)", /* 18px - 20px */
        "2xl": "calc(var(--radius) + 8px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        bengali: ["var(--font-bengali)", "Noto Sans Bengali", "sans-serif"],
      },
      boxShadow: {
        "cartx-subtle": "0 1px 2px 0 rgb(15 23 42 / 0.04)",
        "cartx-card":
          "0 1px 3px 0 rgb(15 23 42 / 0.04), 0 2px 8px -2px rgb(15 23 42 / 0.03), 0 0 0 1px rgb(226 232 240 / 0.8)",
        "cartx-hover":
          "0 10px 25px -5px rgb(15 23 42 / 0.06), 0 4px 10px -3px rgb(15 23 42 / 0.04), 0 0 0 1px rgb(203 213 225 / 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
