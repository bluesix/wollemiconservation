import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        forest: {
          50: "hsl(140, 25%, 96%)",
          100: "hsl(140, 20%, 90%)",
          200: "hsl(145, 20%, 80%)",
          300: "hsl(148, 22%, 65%)",
          400: "hsl(150, 25%, 45%)",
          500: "hsl(150, 30%, 32%)",
          600: "hsl(150, 35%, 22%)",
          700: "hsl(150, 38%, 18%)",
          800: "hsl(150, 40%, 12%)",
          900: "hsl(150, 45%, 8%)",
        },
        gold: {
          50: "hsl(45, 60%, 97%)",
          100: "hsl(44, 55%, 92%)",
          200: "hsl(43, 55%, 82%)",
          300: "hsl(42, 60%, 70%)",
          400: "hsl(42, 65%, 58%)",
          500: "hsl(40, 60%, 50%)",
          600: "hsl(38, 55%, 42%)",
          700: "hsl(35, 50%, 35%)",
          800: "hsl(32, 45%, 28%)",
          900: "hsl(30, 40%, 20%)",
        },
        sand: {
          50: "hsl(40, 30%, 98%)",
          100: "hsl(40, 25%, 95%)",
          200: "hsl(38, 25%, 90%)",
          300: "hsl(36, 22%, 82%)",
          400: "hsl(34, 18%, 68%)",
          500: "hsl(32, 15%, 55%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 4s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, hsla(150, 30%, 8%, 0.3) 0%, hsla(150, 30%, 8%, 0.75) 100%)',
        'forest-gradient': 'linear-gradient(135deg, hsl(150, 35%, 18%) 0%, hsl(150, 40%, 12%) 100%)',
        'gold-gradient': 'linear-gradient(135deg, hsl(42, 65%, 58%) 0%, hsl(38, 55%, 48%) 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -4px hsla(150, 30%, 10%, 0.1)',
        'elevated': '0 12px 40px -8px hsla(150, 30%, 10%, 0.15)',
        'glow': '0 0 30px hsla(42, 65%, 58%, 0.35)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
