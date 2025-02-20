/** @type {import('tailwindcss').Config} */
const colors = [
  "accent",
  "light",
  "dark",
  "orange",
  "primary",
  "secondary",
  "line",
  "alert",
  "success",
  "warning",
  "info",
  "body",
  "myRed",
  "myYellow"
];

const colorObject = colors.reduce((acc, color) => {
  acc[color] = `rgba(var(--${color}), <alpha-value>)`;
  return acc;
}, {});
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: colorObject,
      backgroundColor: colorObject,
      borderColor: colorObject,
      stroke: colorObject,
      fill: colorObject,
      animation : {
        rotate : "rotate 3s infinite linear",
        loading: "loading 1.5s ease-in infinite",
        shake: "shake 1.5s ease-in both",
      },
    
    
    
    },
  },
  plugins: [],
};
