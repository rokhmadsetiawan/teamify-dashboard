module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem" /** 10px  */,
      },
      boxShadow: {
        "custom-1": "0px 4px 39px 9px rgba(81, 69, 159, 0.09);",
      },
    },
  },
  plugins: [],
};
