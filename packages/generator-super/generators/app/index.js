"use strict";

const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("type", { type: String, required: false });
  }

  initializing() {}

  toTitleCase(str) {
    return str && `${str.charAt(0).toUpperCase()}${str.substr(1)}`;
  }

  prompting() {
    this.log(yosay("Welcome to the " + chalk.blue("super") + " generator!"));

    const prompts = [];

    if (!this.options.type) {
      prompts.unshift({
        type: "input",
        name: "type",
        message: "Super type"
      });
    }

    return this.prompt(prompts).then(answer => {
      this.type = this.toTitleCase(this.options.type || answer.type);
      this.dir = this.type;
      this.name = `super${this.type.toLowerCase()}`;
      this.description = `${this.type} with superpowers! 💪`;
      this.version = "0.0.0";
    });
  }

  configuring() {}

  default() {}

  get writing() {
    return {
      appStaticFiles() {
        const src = this.sourceRoot();
        const dest = this.destinationPath(this.dir);

        const files = [
          ".babelrc",
          ".eslintrc",
          ".npmrc",
          ".nvmrc",
          "README.md",
          "LICENSE.md",
          "package.json",
          "tgitignore",
          "Type.js",
          "Type.spec.js"
        ];

        this.fs.copy(src, dest);
        this.fs.copy(this.templatePath(".*"), dest);

        const opts = {
          name: this.name,
          type: this.type,
          description: this.description,
          version: this.version
        };

        files.forEach(f => {
          this.fs.copyTpl(
            this.templatePath(f),
            this.destinationPath(`${this.dir}/${f}`),
            opts
          );
        });

        this.fs.move(
          this.destinationPath(`${this.dir}`, "tgitignore"),
          this.destinationPath(`${this.dir}`, ".gitignore")
        );

        this.fs.move(
          this.destinationPath(`${this.dir}`, "Type.js"),
          this.destinationPath(`${this.dir}`, `src/lib/${this.type}.js`)
        );

        this.fs.move(
          this.destinationPath(`${this.dir}`, "Type.spec.js"),
          this.destinationPath(`${this.dir}`, `test/${this.type}.spec.js`)
        );
      }
    };
  }

  conflicts() {}

  install() {
    const appDir = path.join(process.cwd(), this.dir);
    process.chdir(appDir);
    this.yarnInstall();
  }

  end() {}
};
