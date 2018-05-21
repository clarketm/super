module.exports = {
  collectCoverageFrom: ["**/*.{js,jsx,mjs}"],
  testMatch: [
    "<rootDir>/**/__tests__/**/*.{js,jsx,mjs}",
    "<rootDir>/**/?(*)(spec|test).{js,jsx,mjs}"
  ],
  testEnvironment: "node",
  testURL: "http://0.0.0.0",
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  moduleNameMapper: {
    "^react-native$": "react-native-web"
  },
  moduleFileExtensions: ["web.js", "mjs", "js", "json", "web.jsx", "jsx", "node"]
};
