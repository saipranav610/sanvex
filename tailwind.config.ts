import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#050505", ink2: "#0B0D12", card: "#10131B", blue: "#176BFF", cyan: "#42C8FF", mute: "#A1A7B3" },
    fontFamily: { display: ["Instrument Serif", "sans-serif"], sans: ["Inter", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
