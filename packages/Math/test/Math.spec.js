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
      expected = 6;
      actual = Math.gcd(12, 6);

      assert.equal(actual, expected);
    });

    it("should return 1 for gcd of 7 and 3", () => {
      expected = 1;
      actual = Math.gcd(7, 3);

      assert.equal(actual, expected);
    });
  });

  describe("#lcm", () => {
    it("should return 12 for lcm of 4 and 6", () => {
      expected = 12;
      actual = Math.lcm(4, 6);

      assert.equal(actual, expected);
    });

    it("should return 6 for lcm of 12 and 6", () => {
      expected = 12;
      actual = Math.lcm(12, 6);

      assert.equal(actual, expected);
    });

    it("should return 21 for lcm of 7 and 3", () => {
      expected = 21;
      actual = Math.lcm(7, 3);

      assert.equal(actual, expected);
    });
  });

  describe("#randrange", () => {
    it("should return random number between [0, 3)", () => {
      actual = Math.randrange(3);

      assert.isAtLeast(actual, 0);
      assert.isBelow(actual, 3);
    });

    it("should return random number between [2, 6)", () => {
      actual = Math.randrange(2, 6);

      assert.isAtLeast(actual, 2);
      assert.isBelow(actual, 6);
    });

    it("should return random number between [-2, 6)", () => {
      actual = Math.randrange(-2, 6);

      assert.isAtLeast(actual, -2);
      assert.isBelow(actual, 6);
    });
  });
});
