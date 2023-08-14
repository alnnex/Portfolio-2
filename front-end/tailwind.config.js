/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#FFFFFF",
        text: "#100D0A",
        primary: "#4C647B",
        secondary: "#C6C6DC",
        accent: "#518584",
        darkBackround: "#100D0A",
        darkText: "#FFFFFF",
        darkPrimary: "#4C647B",
        darkSecondary: "#040406",
        darkAccent: "#A6C9C8",
      },
      backgroundImage: {
        "bg-img": "url('/bg.png')",
      },
    },
  },
  plugins: [],
};
