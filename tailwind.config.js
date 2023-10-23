/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#007AFF",
      secondary: "#4F9E91",
      primaryTitle: "#000000",
      secondaryTitle: "#061E45",
      bodyText: "#667085",
      success: "#039855",
      error: "#D92D20",
      lightBlackTitle: "#2B2B2B",
      whiteText: "#ffffff",
      lightGray: "#F1F1F1",
      darkGray: "#556987",
      lightBorder: "#D5DAE1",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: true },
  important: true,
};
