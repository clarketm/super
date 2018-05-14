import fs from "fs";
import path from "path";
import { minify } from "uglify-js";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import saveLicense from "uglify-save-license";
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
    exports: "named",
    file: path.join(DIST_DIR, "super.js"),
    format: "umd"
  },
  plugins: [
    flow({ pretty: true }),
    commonjs(),
    json(),
    stripBanner(),
    buble({ transforms: { dangerousForOf: true } }),
    {
      name: "uglify",
      transformBundle(code) {
        const result = minify(code, {
          fromString: true,
          mangle: { toplevel: true },
          output: { max_line_len: 2048, comments: saveLicense },
          compress: { comparisons: true, pure_getters: true, unsafe: true }
        });

        if (!fs.existsSync(DIST_DIR)) {
          fs.mkdirSync(DIST_DIR);
        }

        fs.writeFileSync(
          path.join(DIST_DIR, "super.min.js"),
          result.code,
          "utf8"
        );
      }
    }
  ]
};
