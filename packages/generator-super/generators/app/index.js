'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('type', { type: String, required: false });
  }

  initializing() {}

  toTitleCase(str) {
    return str && `${str.charAt(0).toUpperCase()}${str.substr(1)}`;
  }

  prompting() {
    this.log(yosay('Welcome to the ' + chalk.blue('super') + ' generator!'));

    const prompts = [];

    if (!this.options.type) {
      prompts.unshift({
        type: 'input',
        name: 'type',
        message: 'Super type'
      });
    }

    return this.prompt(prompts).then(answer => {
      this.type = this.toTitleCase(this.options.type || answer.type);
      this.name = `super${this.type.toLowerCase()}`;
      this.description = `JavaScript ${this.type} with superpowers! 💪`;
      this.version = '0.0.0';
    });
  }

  configuring() {}

  default() {}

  get writing() {
    return {
      appStaticFiles() {
        const src = this.sourceRoot();
        const dest = this.destinationPath(this.name);

        const files = [
          '.babelrc',
          '.eslintrc',
          '.npmrc',
          '.nvmrc',
          'README.md',
          'package.json',
          'tgitignore',
          'Type.js',
          'Type.spec.js',
        ];

        this.fs.copy(src, dest);
        this.fs.copy(this.templatePath('.*'), dest);

        const opts = {
          name: this.name,
          type: this.type,
          description: this.description,
          version: this.version
        };

        files.forEach(f => {
          this.fs.copyTpl(
            this.templatePath(f),
            this.destinationPath(`${this.name}/${f}`),
            opts
          );
        });

        this.fs.move(
          this.destinationPath(`${this.name}`, 'tgitignore'),
          this.destinationPath(`${this.name}`, '.gitignore')
        );

        this.fs.move(
          this.destinationPath(`${this.name}`, 'Type.js'),
          this.destinationPath(`${this.name}`, `src/lib/Super${this.type}.js`)
        );

        this.fs.move(
          this.destinationPath(`${this.name}`, 'Type.spec.js'),
          this.destinationPath(`${this.name}`, `test/Super${this.type}.spec.js`)
        );
      }
    };
  }

  conflicts() {}

  install() {
    const appDir = path.join(process.cwd(), this.name);
    process.chdir(appDir);
    this.yarnInstall();
  }

  end() {}
};
