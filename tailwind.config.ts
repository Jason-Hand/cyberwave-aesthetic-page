
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      colors: {
        border: "hsl(var(--border, 240 3.7% 15.9%))",
        neon: {
          cyan: "#00fff5",
          pink: "#ff00ff",
          blue: "#00f0ff"
        },
        cyber: {
          black: "#0a0a0a",
          dark: "#1a1a1a",
          gray: "#2a2a2a"
        }
      },
      keyframes: {
        "glitch": {
          "0%": { 
            transform: "translate(0)",
            textShadow: "-2px -2px 0 #ff00ff, 2px 2px 0 #00fff5"
          },
          "25%": { 
            transform: "translate(-2px, 2px)",
            textShadow: "2px -2px 0 #ff00ff, -2px 2px 0 #00fff5"
          },
          "50%": { 
            transform: "translate(2px, -2px)",
            textShadow: "2px 2px 0 #ff00ff, -2px -2px 0 #00fff5"
          },
          "75%": { 
            transform: "translate(-2px, -2px)",
            textShadow: "-2px 2px 0 #ff00ff, 2px -2px 0 #00fff5"
          },
          "100%": { 
            transform: "translate(0)",
            textShadow: "2px 2px 0 #ff00ff, -2px -2px 0 #00fff5"
          }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "breathe": {
          "0%, 100%": { 
            boxShadow: "0 0 30px rgba(0,255,245,0.3)",
            borderColor: "rgba(0,255,245,0.5)"
          },
          "50%": { 
            boxShadow: "0 0 50px rgba(0,255,245,0.6)",
            borderColor: "rgba(0,255,245,1)"
          }
        }
      },
      animation: {
        "glitch": "glitch 2s infinite",
        "float": "float 3s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
