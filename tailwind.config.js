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
      fontSize: {
        body_desktop: "1rem",
        body_mobile: "0.875rem",
        h1_desktop: "3rem",
        h2_desktop: "2rem",
        h3_desktop: "1.5rem",
        h4_desktop: "1rem",
        detail_desktop: "0.75rem",
      },
    },
  },
  plugins: [],
};
