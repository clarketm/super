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

  /*
  *  console.log(isNumber("0")); // true
  console.log(isNumber(" 0.1 ")); // true
  console.log(isNumber("abc")); // false
  console.log(isNumber("1 a")); // false
  console.log(isNumber("2e10")); // true
  console.log(isNumber(" ")); // false
  console.log(isNumber("078332e437")); // true
  console.log(isNumber("e")); // false
  console.log(isNumber(".")); // false
  console.log(isNumber("e9")); // false
  console.log(isNumber(".1")); // true
  console.log(isNumber("0e")); // false
  console.log(isNumber("-1.")); // true
  console.log(isNumber("+.8")); // true
  console.log(isNumber("46.e3")); // true*/

  describe("#isNumber", () => {
    it("should return true as '0' is a string representation of a number", () => {
      expected = true;
      actual = Number.isNumber("0");

      assert.equal(actual, expected);
    });

    it("should return true as ' 0.1 ' is a string representation of a number", () => {
      expected = true;
      actual = Number.isNumber(" 0.1 ");

      assert.equal(actual, expected);
    });

    it("should return true as '2e10' is a string representation of a number", () => {
      expected = true;
      actual = Number.isNumber("2e10");

      assert.equal(actual, expected);
    });

    it("should return true as '-1.' is a string representation of a number", () => {
      expected = true;
      actual = Number.isNumber("-1.");

      assert.equal(actual, expected);
    });

    it("should return true as '+.8' is a string representation of a number", () => {
      expected = true;
      actual = Number.isNumber("+.8");

      assert.equal(actual, expected);
    });

    it("should return true as '46.e3' is a string representation of a number", () => {
      expected = true;
      actual = Number.isNumber("46.e3");

      assert.equal(actual, expected);
    });

    it("should return true as '078332e437' is a string representation of a number", () => {
      expected = true;
      actual = Number.isNumber("078332e437");

      assert.equal(actual, expected);
    });

    it("should return false as 'e9' is a string representation of a number", () => {
      expected = false;
      actual = Number.isNumber("e9");

      assert.equal(actual, expected);
    });

    it("should return false as '.' is a string representation of a number", () => {
      expected = false;
      actual = Number.isNumber(".");

      assert.equal(actual, expected);
    });

    it("should return false as '1 a' is a string representation of a number", () => {
      expected = false;
      actual = Number.isNumber("1 a");

      assert.equal(actual, expected);
    });

    it("should return false as '0e' is a string representation of a number", () => {
      expected = false;
      actual = Number.isNumber("0e");

      assert.equal(actual, expected);
    });
  });
});
