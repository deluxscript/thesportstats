module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
        colors : {
           statsBgColor: "#ff0046",
           leagueTabs : "#001e28",
           teamBorderBottom: "#0f2d37",
           h2hBg: "#001e28",
           barSmallHome: "#F7BDA3",
           barBigHome: "#EB5B15",
           barSmallAway: "#2dd4be",
           barBigAway: "#03806f"
        }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }