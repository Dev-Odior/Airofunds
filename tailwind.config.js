/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        footerDark: {
          slightOff: "rgba(60, 64, 60, 0.7)",
        },
        gold: {
          DEFAULT: "#D7AC3C",
          deep: "#F9A000",
        },
        brown: {
          DEFAULT: "rgba(26, 26, 26, 1)",
          deep: "rgba(38, 38, 41, 1)",
          overlay: "rgba(38, 38, 41, 0.8)",
        },
        grayish: {
          DEFAULT: "rgba(33, 33, 33, 1)",
          text: "rgba(38, 38, 41, 0.7)",

          infoText: "rgba(38, 38, 41, 0.8)",
          styleTwoText: "rgba(17, 17, 17, 0.7)",
        },
        whitish: {
          DEFAULT: "#ffffff",
          slight: "rgba(255, 255, 255, 0.9)",
          modal: "rgba(255, 255, 255, 0.8)",
        },
      },
    },
  },
  plugins: [],
};
