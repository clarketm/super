const { assert } = require("chai");
const { Set } = require("../src/lib/Set");

describe("Set", () => {
  let setA, setB, expected, actual;

  describe("#some", () => {
    it("should return true if the callback function returns a truthy value for any set element", () => {
      expected = true;
      actual = new Set([1, 2, 3, 4]).some(value => value === 3);

      assert.equal(actual, expected);
    });

    it("should return true if the callback function does not returns a truthy value for any set element", () => {
      expected = false;
      actual = new Set([1, 2, 3, 4]).some(value => value > 6);

      assert.equal(actual, expected);
    });
  });

  describe("#every", () => {
    it("should return true if the callback function returns a truthy value for every set element", () => {
      expected = true;
      actual = new Set([1, 2, 3, 4]).every(value => value > 0);

      assert.equal(actual, expected);
    });

    it("should return true if the callback function does not returns a truthy value for every set element", () => {
      expected = false;
      actual = new Set([1, 2, 3, 4]).every(value => value === 9);

      assert.equal(actual, expected);
    });
  });

  describe("membership", () => {
    describe("#isSubset", () => {
      it("should be a subset of setB", () => {
        setA = new Set([1, 2]);
        setB = new Set([1, 2, 3]);

        expected = true;
        actual = setA.isSubset(setB);

        assert.equal(actual, expected);
      });

      it("should not be a subset of setB", () => {
        setA = new Set([4, 5]);
        setB = new Set([1, 2, 3]);

        expected = false;
        actual = setA.isSubset(setB);

        assert.equal(actual, expected);
      });
    });

    describe("#isSuperset", () => {
      it("should be a subset of setB", () => {
        setA = new Set([1, 2, 3]);
        setB = new Set([1, 2]);

        expected = true;
        actual = setA.isSuperset(setB);

        assert.equal(actual, expected);
      });

      it("should not be a subset of setB", () => {
        setA = new Set([1, 2, 3]);
        setB = new Set([4, 5]);

        expected = false;
        actual = setA.isSuperset(setB);

        assert.equal(actual, expected);
      });
    });
  });

  describe("operations", () => {
    beforeEach(() => {
      setA = new Set([1, 2, 3]);
      setB = new Set([2, 3, 4]);
    });

    describe("#union", () => {
      it("should check if is setA is a superset of setB", () => {
        expected = new Set([1, 2, 3, 4]);
        actual = setA.union(setB);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#union", () => {
      it("should perform a set union between two sets", () => {
        expected = new Set([1, 2, 3, 4]);
        actual = setA.union(setB);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#intersection", () => {
      it("should perform a set `intersection` between two sets", () => {
        expected = new Set([2, 3]);
        actual = setA.intersection(setB);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#difference", () => {
      it("should perform a set `difference` between two sets", () => {
        expected = new Set([1]);
        actual = setA.difference(setB);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#symmetricDifference", () => {
      it("should perform a set `symmetricDifference` between two sets", () => {
        expected = new Set([1, 4]);
        actual = setA.symmetricDifference(setB);

        assert.deepEqual(actual, expected);
      });
    });
  });
});
