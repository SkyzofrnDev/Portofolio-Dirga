/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
       marquee: 'marquee 15s linear infinite'
},
      translate: {
         '101': '101%',
      },
    },
  },
  plugins: [],
};
