/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Layout.jsx", // Aggiunta per leggere il file di Layout
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
