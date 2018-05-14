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
});
