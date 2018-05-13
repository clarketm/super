const { assert } = require("chai");
const { SuperNumber } = require("../src/lib/SuperNumber");

describe("SuperNumber", () => {
  let expected, actual;

  describe("#fromRomanNumeral", () => {
    it("should return a number representation of the roman numeral", () => {
      expected = 3;
      actual = SuperNumber.fromRomanNumeral("III");

      assert.equal(actual, expected);
    });
  });

  describe("#toRomanNumeral", () => {
    it("should return a roman numeral representation of the number", () => {
      expected = "IX";
      actual = new SuperNumber(9).toRomanNumeral();

      assert.equal(actual, expected);
    });
  });
});
