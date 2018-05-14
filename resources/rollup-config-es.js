import fs from "fs";
import path from "path";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import stripBanner from "rollup-plugin-strip-banner";
import flow from "rollup-plugin-flow";

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
    commonjs(),
    json(),
    stripBanner(),
    buble({ transforms: { dangerousForOf: true } })
  ]
};
