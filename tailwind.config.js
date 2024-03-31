/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx, html}"],
  theme: {
    extend: {
      colors: {
        primary: "#1677ff",
      },
      screens: {
        sm: "576px", // iphone SE
        md: "810px", // ipad
        lg: "1080px", // ipad
        xl: "1280px", // mac air
        xxl: "1440px",
      },
    },
  },
  plugins: [],
  safelist: [],
};
