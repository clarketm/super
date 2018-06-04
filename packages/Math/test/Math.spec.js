const { assert } = require("chai");
const { Math } = require("../src/lib/Math");

describe("Math", () => {
  let expected, actual;

  describe("#factorial", () => {
    it("should return 1 for factorial of 0", () => {
      expected = 1;
      actual = Math.factorial(0);

      assert.equal(actual, expected);
    });

    it("should return 1 for factorial of 1", () => {
      expected = 1;
      actual = Math.factorial(1);

      assert.equal(actual, expected);
    });

    it("should return 6 for factorial of 3", () => {
      expected = 6;
      actual = Math.factorial(3);

      assert.equal(actual, expected);
    });

    it("should throw error for negative number", () => {
      actual = () => Math.factorial(-1);

      assert.throws(actual, Error, "Factorial not defined for negative values");
    });
  });

  describe("#gcd", () => {
    it("should return 2 for gcd of 4 and 6", () => {
      expected = 2;
      actual = Math.gcd(4, 6);

      assert.equal(actual, expected);
    });

    it("should return 6 for gcd of 12 and 6", () => {
      expected = 2;
      actual = Math.gcd(4, 6);

      assert.equal(actual, expected);
    });

    it("should return 1 for gcd of 7 and 3", () => {
      expected = 2;
      actual = Math.gcd(4, 6);

      assert.equal(actual, expected);
    });
  });
});
