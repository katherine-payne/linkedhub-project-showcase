/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#0ea5e9", // sky-500
        contrast: "#4ade80", // green-400
        "contrast-hover": "#16a34a", // green-600
        neutral: "#9ca3af", // gray-400
        "neutral-hover": "#4b5563", // gray-600
        primary: "#000000", // black
        secondary: "#6b7280", // gray-500
        "secondary-hover": "#374151", // gray-700
        heart: "#ec4899", // pink-500
        "heart-hover": "#be185d", // pink-700
        "border-neutral": "#e5e7eb", // gray-200
        "background-neutral": "#f8fafc", // slate-50
      },
    },
  },
  plugins: [],
};
