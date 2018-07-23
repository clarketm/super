const { assert } = require("chai");
const { quickSort } = require("../src/lib/QuickSort");

describe("QuickSort", () => {
  let array, expected, actual;

  describe("#quickSort", () => {
    it("should sort a six (6) items array", () => {
      array = [3, 7, 1, 9, 3, 7];

      expected = [1, 3, 3, 7, 7, 9];
      actual = quickSort(array);

      assert.deepEqual(actual, expected);
    });

    it("should sort a six (7) items array", () => {
      array = [4, 6, 3, 1, 8, 2, 9];

      expected = [1, 2, 3, 4, 6, 8, 9];
      actual = quickSort(array);

      assert.deepEqual(actual, expected);
    });

    it("should return a new copy of the original array (six (6) items)", () => {
      array = [3, 7, 1, 9, 3, 7];
      quickSort(array);

      actual = quickSort(array);

      assert.notEqual(actual, array);
    });

    it("should sort a four (4) items array", () => {
      array = [1, 9, 2, 5];

      expected = [1, 2, 5, 9];
      actual = quickSort(array);

      assert.deepEqual(actual, expected);
    });

    it("should return a new copy of the original array (four (4) items)", () => {
      array = [1, 9, 2, 5];
      quickSort(array);

      actual = quickSort(array);

      assert.notEqual(actual, array);
    });

    it("should sort a six (2) items array", () => {
      array = [8, 6];

      expected = [6, 8];
      actual = quickSort(array);

      assert.deepEqual(actual, expected);
    });

    it("should return a new copy of the original array (two (2) items)", () => {
      array = [8, 6];
      quickSort(array);

      actual = quickSort(array);

      assert.notEqual(actual, array);
    });

    it("should sort a one (1) item array", () => {
      array = [4];

      expected = [4];
      actual = quickSort(array);

      assert.deepEqual(actual, expected);
    });

    it("should return a new copy of the original array (one (1) items)", () => {
      array = [4];
      quickSort(array);

      actual = quickSort(array);

      assert.notEqual(actual, array);
    });

    it("should sort in descending order with a custom comparator", () => {
      array = [3, 7, 1, 9, 3, 7];

      expected = [9, 7, 7, 3, 3, 1];
      actual = quickSort(array, (a, b) => b - a);

      assert.deepEqual(actual, expected);
    });

    it("should sort in ascending string length order with a custom comparator", () => {
      array = ["1111", "11111", "1", "11", "111"];

      expected = ["1", "11", "111", "1111", "11111"];
      actual = quickSort(array, (a, b) => a.length - b.length);

      assert.deepEqual(actual, expected);
    });

    it("should sort in descending string length order with a custom comparator", () => {
      array = ["1111", "11111", "1", "11", "111"];

      expected = ["11111", "1111", "111", "11", "1"];
      actual = quickSort(array, (a, b) => b.length - a.length);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#Array.quickSort", () => {
    beforeAll(() => {
      Array.prototype.quickSort = quickSort;
    });

    it("should sort a six (6) items array", () => {
      array = [6, 4, 1, 9, 8, 7];

      expected = [1, 4, 6, 7, 8, 9];
      actual = array.quickSort();

      assert.deepEqual(actual, expected);
    });

    it("should return the same instance of the array (six (6) items)", () => {
      array = [3, 7, 1, 9, 3, 7];

      actual = array.quickSort();

      assert.equal(actual, array);
    });

    it("should sort a four (4) items array", () => {
      array = [5, 1, 2, 3];

      expected = [1, 2, 3, 5];
      actual = array.quickSort();

      assert.deepEqual(actual, expected);
    });

    it("should return the same instance of the array (four (4) items)", () => {
      array = [5, 1, 2, 3];

      actual = array.quickSort();

      assert.equal(actual, array);
    });

    it("should sort a two (2) items array", () => {
      array = [8, 3];

      expected = [3, 8];
      actual = array.quickSort();

      assert.deepEqual(actual, expected);
    });

    it("should return the same instance of the array (two (2) items)", () => {
      array = [8, 3];

      actual = array.quickSort();

      assert.equal(actual, array);
    });

    it("should sort a one (1) items array", () => {
      array = [5];

      expected = [5];
      actual = array.quickSort();

      assert.deepEqual(actual, expected);
    });

    it("should return the same instance of the array (one (1) items)", () => {
      array = [5];

      actual = array.quickSort();

      assert.equal(actual, array);
    });
  });
});
