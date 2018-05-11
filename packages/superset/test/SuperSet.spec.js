const { assert } = require("chai");
const { SuperSet } = require("../lib/SuperSet");

describe("SuperSet", () => {
  let setA, setB, expected, actual;

  beforeEach(() => {
    setA = new SuperSet([1, 2, 3]);
    setB = new SuperSet([2, 3, 4]);
  });

  describe("#union", () => {
    it("should perform a set union between two sets", () => {
      expected = new SuperSet([1, 2, 3, 4]);
      actual = setA.union(setB);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#intersection", () => {
    it("should perform a set `intersection` between two sets", () => {
      expected = new SuperSet([2, 3]);
      actual = setA.intersection(setB);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#difference", () => {
    it("should perform a set `difference` between two sets", () => {
      expected = new SuperSet([1]);
      actual = setA.difference(setB);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#symmetricDifference", () => {
    it("should perform a set `symmetricDifference` between two sets", () => {
      expected = new SuperSet([1, 4]);
      actual = setA.symmetricDifference(setB);

      assert.deepEqual(actual, expected);
    });
  });
});
