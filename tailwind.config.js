/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans"],
    },
    extend: {
      height: {
        64: "64px",
      },

      padding: {
        60: "60px",
        15: "15px",
        450: "450px",
      },
      margin: {
        15: "15px",
        52: "52px",
      },
      colors: {
        "bg-light": "hsl(235, 19%, 35%)",
        white: "#FFFFFF",
        "placeholder-color": "#9495A5",
        "text-color": "#494C6B",
        grad1: "#55DDFF",
        grad2: "#C058F3",
        bgDark: "#171823",
        bgInput: "#25273D",
        darkLine: "#393A4B",
        darkText: "#C8CBE7",
        line: "#D1D2DA",
        footerColor: "#5B5E7E",
      },
      backgroundImage: {
        lightBgImage: "url(./src/assets/bg-mobile-light.jpg)",
        "light-bg-image-desk": "url(./src/assets/bg-desktop-light.jpg)",
        "dark-bg-image": "url(./src/assets/bg-mobile-dark.jpg)",
        "dark-bg-image-desk": "url(./src/assets/bg-desktop-dark.jpg)",
      },
      borderRadius: {
        5: "5px",
      },
      boxShadow: {
        box: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
        tabShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
        darkBox: " 0px 35px 50px -15px rgba(0, 0, 0, 0.5)",
      },
      borderColor: {
        line: "#E3E4F1",
      },
      gradientColorStops: {
        grad: "135deg, #55DDFF 0%, #C058F3 100%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
