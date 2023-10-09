/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        play: ["Play", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        h2h: {
          primary: "#ba8d2c",
          secondary: "#156687",
          accent: "#d85066",
          neutral: "#141524",
          "base-100": "#3d4042",
          info: "#55bdf1",
          success: "#2ce893",
          warning: "#935c10",
          error: "#dc284c",
        },
      },
    ],
    darkTheme: "h2h", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
  plugins: [require("daisyui")],
};
