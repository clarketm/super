const { assert } = require("chai");
const { SuperArray } = require("../src/lib/SuperArray");

describe("SuperArray", () => {
  let expected, actual;

  describe("#flatMap", () => {
    it("should maps each element, then flattens the result into a new, simple array", () => {
      expected = [1, 2, 4, 8];
      actual = new SuperArray([0, 1, 2, 3]).flatMap(v => [2 ** v]);

      assert.deepEqual(actual, expected);
    });

    it("should maps each element, then flattens the result into a new, complex array", () => {
      expected = ["=>0", 1, "=>1", 2, "=>2", 4, "=>3", 8];
      actual = new SuperArray([0, 1, 2, 3]).flatMap((v, i) => [
        `=>${i}`,
        2 ** v
      ]);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#flatten", () => {
    it("should flatten array to the default depth of 1", () => {
      expected = [1, 2, 3];
      actual = new SuperArray([[1], [2], [3]]).flatten();

      assert.deepEqual(actual, expected);
    });

    it("should flatten array to the specified depth", () => {
      expected = [1, 2, 3];
      actual = new SuperArray([[[1]], [[2]], [[3]]]).flatten(2);

      assert.deepEqual(actual, expected);
    });
  });
});
