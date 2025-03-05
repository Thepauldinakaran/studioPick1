/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx}"], // Add a comma here between content array and theme
  theme: {
    extend: {
      fontFamily: {
        heading: ["Bellefair", "serif"], // Elegant & Luxurious
        subheading: ["EB Garamond", "serif"], // Classic & Professional
        body: ["Lora", "serif"], // Clean, Readable, and Premium
        script: ["Parisienne", "cursive"], // Romantic & Stylish
      },
    },
  },
  plugins: [],
};
