/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
    colors: {
      // Using modern `rgb`
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",

      // Using modern `hsl`
      primary: "hsl(var(--color-primary) / <alpha-value>)",
      secondary: "hsl(var(--color-secondary) / <alpha-value>)",
    },
  },
};
