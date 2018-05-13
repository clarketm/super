const { assert } = require("chai");
const { SuperString } = require("../src/lib/SuperString");

describe("SuperString", () => {
  let expected, actual;

  describe("#reverse", () => {
    it("should reverse the character order of the string", () => {
      expected = "dlrow olleH";
      actual = new SuperString("Hello world").reverse();

      assert.equal(actual, expected);
    });
  });

  describe("#reverseWords", () => {
    it("should reverse the word order of the string", () => {
      expected = "world Hello";
      actual = new SuperString("Hello world").reverseWords();

      assert.equal(actual, expected);
    });
  });

  describe("#toTitleCase", () => {
    it("should return a string in title case", () => {
      expected = "Tom Jones";
      actual = new SuperString("tom jones").toTitleCase();

      assert.equal(actual, expected);
    });
  });
});
