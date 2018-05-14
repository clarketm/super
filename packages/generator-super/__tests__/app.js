"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-super:app", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({ type: "Map" });
  });

  it("creates files", () => {
    assert.file(["src/lib/Map.js"]);
  });
});
