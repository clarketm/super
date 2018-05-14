module.exports = {
  presets: [
    require("babel-preset-env"),
    require("babel-preset-stage-0"),
    require("babel-preset-flow"),
    require("babel-preset-minify")
  ],

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
