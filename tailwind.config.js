module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./{pages,components}/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#cce1f1",
          200: "#99c4e4",
          300: "#66a6d6",
          400: "#3389c9",
          500: "#006bbb",
          600: "#005696",
          700: "#004070",
          800: "#002b4b",
          900: "#001525",
        },

        accent: {
          100: "#fff4e3",
          200: "#ffe9c7",
          300: "#ffdeaa",
          400: "#ffd38e",
          500: "#ffc872",
          600: "#cca05b",
          700: "#997844",
          800: "#66502e",
          900: "#332817",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
