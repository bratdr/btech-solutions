/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        about: "url('../public/About.png')",
        video: "url('../public/Video.png')",
      },
      letterSpacing: {
        heading: "-0.01em",
        paragraph: "0.02em",
      },
      colors: {
        primary: "#13194B",
        secondary: "#656779",
        tertiary: "#F9CD34",
      },
    },
  },
  plugins: [],
};
