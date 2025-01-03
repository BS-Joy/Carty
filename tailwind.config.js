/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        text: "3px 10px 15px #FF8000",
      },
      boxShadow: {
        night: "0px 0px 25px 7px rgba(255, 128, 0, 1)",
        "night-button": "0px 0px 15px 1px rgba(255, 128, 0, 1)",
      },
      screen: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#FF8000",
        dark: "#1E293B",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        openSans: ["var(--font-OpenSans)"],
        josefin: ["var(--font-josefin)"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
