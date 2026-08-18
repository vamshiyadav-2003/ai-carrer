/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8FAFC",
        "paper-card": "#FFFFFF",
        ink: "#0F172A",
        "ink-soft": "#475569",
        "ink-faint": "#94A3B8",
        line: "#E2E8F0",
        "line-dark": "#CBD5E1",
        accent: {
          DEFAULT: "#2563EB",
          deep: "#1D4ED8",
          purple: "#7C3AED",
          soft: "#EFF6FF",
          "soft-purple": "#F5F3FF",
        },
        positive: {
          DEFAULT: "#059669",
          soft: "#ECFDF5",
        },
        warning: {
          DEFAULT: "#D97706",
          soft: "#FFFBEB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'IBM Plex Mono'", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.03), 0 6px 16px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 4px 20px rgba(37, 99, 235, 0.08), 0 10px 25px rgba(15, 23, 42, 0.08)",
        panel: "0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 20px 40px -15px rgba(37, 99, 235, 0.05)",
        glow: "0 0 25px rgba(37, 99, 235, 0.15)",
      },
      borderRadius: {
        card: "16px",
        badge: "9999px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "slide-down": "slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

