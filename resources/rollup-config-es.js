import fs from "fs";
import path from "path";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import stripBanner from "rollup-plugin-strip-banner";
import flow from "rollup-plugin-flow";
import resolve from "rollup-plugin-node-resolve";

const copyright = fs.readFileSync(path.join("resources", "COPYRIGHT"), "utf-8");

const SRC_DIR = path.resolve("packages");
const DIST_DIR = path.resolve("dist");

export default {
  input: path.join(SRC_DIR, "Super.js"),
  output: {
    name: "Super",
    banner: copyright,
    file: path.join(DIST_DIR, "super.es.js"),
    format: "es"
  },
  plugins: [
    flow({ pretty: true }),
    resolve(),
    commonjs(),
    json(),
    stripBanner(),
    babel({
      presets: [["env", { modules: false }], "@clarketm/babel-preset-super"],
      plugins: ["external-helpers"],
      babelrc: false
    })
  ]
};
