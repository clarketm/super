module.exports = {
  presets: [require("babel-preset-stage-0"), require("babel-preset-flow")],

  plugins: [
    [
      require("babel-plugin-transform-builtin-extend").default,
      {
        globals: [
          "Set",
          "Map",
          "Array",
          "Object",
          "String",
          "Number",
          "Date",
          "Boolean",
          "Symbol",
          "Math",
          "Regex",
          "Error"
        ]
      }
    ]
  ]
};
