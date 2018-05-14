module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },

  extends: ["eslint:recommended"],

  plugins: ["flowtype"],

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },

  rules: {
    "jsx-a11y/href-no-hash": "off",
    "no-cond-assign": "off",
    "no-case-declarations": "off",
    "default-case": "off",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    indent: "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "double"],
    "flowtype/define-flow-type": 1
  }
};
