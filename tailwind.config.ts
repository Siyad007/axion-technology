import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a5bffc",
          400: "#819df8",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        accent: {
          50:  "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        neutral: {
          50:  "#fafafa",
          100: "#f5f5f5",
          150: "#efefef",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        success: "#10b981",
        warning: "#f59e0b",
        danger:  "#ef4444",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        inter:   ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        pill: "100px",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(59,130,246,0.35)",
        "glow-cyan": "0 0 40px rgba(6,182,212,0.35)",
        "glow-sm":   "0 0 20px rgba(59,130,246,0.20)",
        "depth-lg":  "0 25px 80px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.06)",
        "depth-xl":  "0 40px 100px rgba(0,0,0,0.14), 0 16px 40px rgba(0,0,0,0.08)",
        card:        "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover":"0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
      },
      backgroundImage: {
        "gradient-axion": "linear-gradient(135deg, #2563eb, #06b6d4)",
        "gradient-axion-soft": "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.08))",
        "gradient-dark": "linear-gradient(135deg, #1e3a8a, #0e7490)",
        "dot-grid": "radial-gradient(circle, #d4d4d4 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "24px 24px",
        "dot-md": "32px 32px",
        "dot-lg": "48px 48px",
      },
      animation: {
        "float":           "float 6s ease-in-out infinite",
        "float-slow":      "float 9s ease-in-out infinite",
        "float-delayed":   "float 6s ease-in-out 2s infinite",
        "pulse-glow":      "pulseGlow 3s ease-in-out infinite",
        "gradient-shift":  "gradientShift 6s ease infinite",
        "marquee":         "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "draw-line":       "drawLine 1.5s ease-out forwards",
        "ping-slow":       "ping 3s cubic-bezier(0,0,0.2,1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-12px) rotate(0.5deg)" },
          "66%":      { transform: "translateY(-6px) rotate(-0.5deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.3)" },
          "50%":      { boxShadow: "0 0 50px rgba(59,130,246,0.6), 0 0 80px rgba(6,182,212,0.3)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to:   { transform: "translateX(0)" },
        },
        drawLine: {
          from: { strokeDashoffset: "1000" },
          to:   { strokeDashoffset: "0" },
        },
      },
      transitionTimingFunction: {
        "spring":  "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth":  "cubic-bezier(0.6, -0.05, 0.01, 0.99)",
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo":"cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
