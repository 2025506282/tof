module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    XE: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    // "eslint:recommended",
    // "@vue/typescript/recommended",
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 0,
    "no-undef": 0,
    "vue/no-reserved-keys": 0,
  },
}
