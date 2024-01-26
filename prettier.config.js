// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false,
  singleQuote: true,
  trailingComma: "es5",
  tabWidth: 4,
};

export default config;
