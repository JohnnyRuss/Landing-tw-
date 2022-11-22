module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-red": "hsl(12, 88%, 59%)",
        "app-blue": "hsl(228, 39%, 23%)",
        "app-grayish-blue": "hsl(227, 12%, 61%)",
        "app-dark-blue": "hsl(233, 12%, 13%)",
        "app-pale-red": "hsl(13, 100%, 96%)",
        "app-light-gray": "hsl(0, 0%, 98%)",
      },
      fontSize: {
        "app-heading": "30px",
        "app-h-2": "24px",
      },
      fontFamily: {
        "sans-serif": ["Be Vietnam Pro"],
      },
      backgroundImage: {
        "pattern-intro": "url(../../public/assets/illustration-intro.svg)",
        "pattern-section-desktop":
          "url(../../public/assets/bg-simplify-section-desktop.svg)",
        "pattern-section-mobile":
          "url(../../public/assets/bg-simplify-section-mobile.svg)",
        "pattern-section-tablet":
          "url(../../public/assets/bg-tablet-pattern.svg)",
        "pattern-gradient":
          "linear-gradient(to bottom, rgba(144, 149, 167,0.8), transparent)",
      },
      backgroundPosition: {
        "pos-n-right-5": "right -5rem top -5rem",
      },
      maxWidth: {
        "1/2": "50%",
        75: "75%",
      },
      position: {
        "pos-unset": "unset",
      },
      animation: {
        "collapse-down": "collapse-down 0.3s ease-out",
        "move-top-fade": "move-top-fade 0.2s ease-in",
      },
      keyframes: {
        "collapse-down": {
          "0%": { height: "0vh" },
          "100%": { height: "100vh" },
        },
        "move-top-fade": {
          "0%": { transform: "translate(-50%, 1.5rem)", opacity: "0" },
          "100%": { transform: "translate(-50%, 0)", opacity: "1" },
        },
      },
      screens: {
        mobile: "17.5em", //280px
        "mobile-lg": "31.25em", //500px
        tablet: "42.5em", //680px
        "tablet-lg": "60em", //960px
        desktop: "75em", //1200px
      },
    },
  },
  plugin: [],
};
