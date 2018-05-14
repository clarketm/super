const { assert } = require("chai");
const { Number } = require("../src/lib/Number");

describe("Number", () => {
  let expected, actual;

  describe("#fromRomanNumeral", () => {
    it("should return a number representation of the roman numeral", () => {
      expected = 3;
      actual = Number.fromRomanNumeral("III");

      assert.equal(actual, expected);
    });
  });

  describe("#toRomanNumeral", () => {
    it("should return a roman numeral representation of the number", () => {
      expected = "IX";
      actual = new Number(9).toRomanNumeral();

      assert.equal(actual, expected);
    });
  });
});
