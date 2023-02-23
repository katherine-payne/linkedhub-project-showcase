/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#0ea5e9", // sky-500
        contrast: "#4ade80", // green-400
        neutral: "#9ca3af", // gray-400
        primary: "#000000", // black
        secondary: "#6b7280", // gray-500
        "secondary-hover": "#374151", // gray-700
        heart: "#ec4899", // pink-500
        "border-neutral": "#e5e7eb", // gray-200
        "background-neutral": "#f8fafc", // slate-50
      },
    },
  },
  plugins: [],
};
