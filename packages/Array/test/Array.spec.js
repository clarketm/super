const { assert } = require("chai");
const { Array } = require("../src/lib/Array");

describe("Array", () => {
  let array, expected, actual;

  describe("#flatMap", () => {
    it("should maps each element, then flattens the result into a new, simple array", () => {
      expected = [1, 2, 4, 8];
      actual = new Array([0, 1, 2, 3]).flatMap(v => [2 ** v]);

      assert.deepEqual(actual, expected);
    });

    it("should maps each element, then flattens the result into a new, complex array", () => {
      expected = ["=>0", 1, "=>1", 2, "=>2", 4, "=>3", 8];
      actual = new Array([0, 1, 2, 3]).flatMap((v, i) => [`=>${i}`, 2 ** v]);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#flatten", () => {
    it("should flatten array to the default depth of 1", () => {
      expected = [1, 2, 3];
      actual = new Array([[1], [2], [3]]).flatten();

      assert.deepEqual(actual, expected);
    });

    it("should flatten array to the specified depth", () => {
      expected = [1, 2, 3];
      actual = new Array([[[1]], [[2]], [[3]]]).flatten(2);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#mergeSort", () => {
    it("should sort array using merge sort", () => {
      array = new Array([6, 4, 1, 9, 8, 7]);
      array.mergeSort();

      expected = [1, 4, 6, 7, 8, 9];

      assert.deepEqual(array, expected);
    });

    it("should merge in descending order with a custom comparator", () => {
      array = new Array([3, 7, 1, 9, 3, 7]);
      array.mergeSort((a, b) => b - a);

      expected = [9, 7, 7, 3, 3, 1];

      assert.deepEqual(array, expected);
    });

    it("should merge in ascending string length order with a custom comparator", () => {
      array = new Array(["1111", "11111", "1", "11", "111"]);
      array.mergeSort((a, b) => a.length - b.length);

      expected = ["1", "11", "111", "1111", "11111"];

      assert.deepEqual(array, expected);
    });

    it("should merge in descending string length order with a custom comparator", () => {
      array = new Array(["1111", "11111", "1", "11", "111"]);
      array.mergeSort((a, b) => b.length - a.length);

      expected = ["11111", "1111", "111", "11", "1"];

      assert.deepEqual(array, expected);
    });
  });

  describe("#quickSort", () => {
    it("should sort array using quick sort", () => {
      array = new Array([6, 4, 1, 9, 8, 7]);
      array.quickSort();

      expected = [1, 4, 6, 7, 8, 9];

      assert.deepEqual(array, expected);
    });

    it("should quick in descending order with a custom comparator", () => {
      array = new Array([3, 7, 1, 9, 3, 7]);
      array.quickSort((a, b) => b - a);

      expected = [9, 7, 7, 3, 3, 1];

      assert.deepEqual(array, expected);
    });

    it("should quick in ascending string length order with a custom comparator", () => {
      array = new Array(["1111", "11111", "1", "11", "111"]);
      array.quickSort((a, b) => a.length - b.length);

      expected = ["1", "11", "111", "1111", "11111"];

      assert.deepEqual(array, expected);
    });

    it("should quick in descending string length order with a custom comparator", () => {
      array = new Array(["1111", "11111", "1", "11", "111"]);
      array.quickSort((a, b) => b.length - a.length);

      expected = ["11111", "1111", "111", "11", "1"];

      assert.deepEqual(array, expected);
    });
  });

  describe("#bubbleSort", () => {
    it("should sort array using bubble sort", () => {
      array = new Array([6, 4, 1, 9, 8, 7]);
      array.bubbleSort();

      expected = [1, 4, 6, 7, 8, 9];

      assert.deepEqual(array, expected);
    });

    it("should bubble in descending order with a custom comparator", () => {
      array = new Array([3, 7, 1, 9, 3, 7]);
      array.bubbleSort((a, b) => b - a);

      expected = [9, 7, 7, 3, 3, 1];

      assert.deepEqual(array, expected);
    });

    it("should bubble in ascending string length order with a custom comparator", () => {
      array = new Array(["1111", "11111", "1", "11", "111"]);
      array.bubbleSort((a, b) => a.length - b.length);

      expected = ["1", "11", "111", "1111", "11111"];

      assert.deepEqual(array, expected);
    });

    it("should bubble in descending string length order with a custom comparator", () => {
      array = new Array(["1111", "11111", "1", "11", "111"]);
      array.bubbleSort((a, b) => b.length - a.length);

      expected = ["11111", "1111", "111", "11", "1"];

      assert.deepEqual(array, expected);
    });
  });
});
