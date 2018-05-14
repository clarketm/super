const { assert } = require("chai");
const { String } = require("../src/lib/String");

describe("String", () => {
  let expected, actual;

  describe("#reverse", () => {
    it("should reverse the character order of the string", () => {
      expected = "dlrow olleH";
      actual = new String("Hello world").reverse();

      assert.equal(actual, expected);
    });
  });

  describe("#reverseWords", () => {
    it("should reverse the word order of the string", () => {
      expected = "world Hello";
      actual = new String("Hello world").reverseWords();

      assert.equal(actual, expected);
    });
  });

  describe("#toTitleCase", () => {
    it("should return a string in title case", () => {
      expected = "Tom Jones";
      actual = new String("tom jones").toTitleCase();

      assert.equal(actual, expected);
    });
  });
});
