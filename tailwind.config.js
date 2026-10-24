/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        netflix: {
          red: "#E50914",
          redDark: "#B81D24",
          black: "#0b0b0b",
          dark: "#141414",
          card: "#181818",
          cardHover: "#222222",
          border: "#262626",
          green: "#46D369",
          gray: "#e5e5e5",
          subtext: "#8c8c8c",
        },
        surface: {
          DEFAULT: "#111111",
          elevated: "#161616",
          muted: "#0d0d0d",
          card: "#121212",
        },
        border: {
          DEFAULT: "#292929",
          subtle: "rgba(255, 255, 255, 0.08)",
          orange: "rgba(255, 77, 18, 0.4)",
        },
        orange: {
          DEFAULT: "#FF4D12",
          light: "#FF6B35",
          dark: "#D93800",
          glow: "rgba(255, 77, 18, 0.35)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B8B8B8",
          muted: "#737373",
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'netflix-glow': '0 0 35px rgba(229, 9, 20, 0.4)',
        'netflix-red-lg': '0 10px 40px -10px rgba(229, 9, 20, 0.65)',
        'netflix-card': '0 8px 24px -6px rgba(0,0,0,0.85)',
        'glow-orange': '0 0 25px rgba(255, 77, 18, 0.35)',
        'glow-orange-lg': '0 0 45px rgba(255, 77, 18, 0.55)',
        'glow-orange-sm': '0 0 15px rgba(255, 77, 18, 0.25)',
        'card-dark': '0 10px 30px -10px rgba(0,0,0,0.8)',
        'phone-frame': '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 77, 18, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
