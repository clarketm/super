const { assert } = require("chai");
const { Heap, HeapType } = require("../src/lib/Heap");

describe("Heap", () => {
  let heap, expected, actual;

  describe("#size", () => {
    it("should get the size of the heap", () => {
      expected = 3;
      actual = new Heap([9, 1, 7]).size;

      assert.equal(actual, expected);
    });
  });

  describe("#max", () => {
    it("should return the maximum item from the max heap", () => {
      expected = 34;
      actual = new Heap([9, 1, 7, 7, 4, 5, 9, 10, 34], HeapType.MAX).max;

      assert.equal(actual, expected);
    });
  });

  describe("#min", () => {
    it("should return the minimum item from the min heap", () => {
      expected = 1;
      actual = new Heap([9, 1, 7, 7, 4, 5, 9, 10, 34], HeapType.MIN).min;

      assert.equal(actual, expected);
    });
  });

  describe("#isEmpty", () => {
    it("should return true if empty", () => {
      expected = true;
      actual = new Heap().isEmpty();

      assert.equal(actual, expected);
    });

    it("should return false if not empty", () => {
      expected = false;
      actual = new Heap([9, 1, 7]).isEmpty();

      assert.equal(actual, expected);
    });
  });

  describe("#clear", () => {
    it("should remove all items from the heap", () => {
      heap = new Heap([9, 1, 7]);
      heap.clear();

      expected = 0;
      actual = heap.size;

      assert.equal(actual, expected);
    });
  });

  describe("#insert", () => {
    it("should insert the item into the max heap", () => {
      heap = new Heap([], HeapType.MAX);
      heap.insert(25);
      heap.insert(1);
      heap.insert(26);

      expected = 3;
      actual = heap.size;

      assert.equal(actual, expected);
    });

    it("should insert the item into the min heap", () => {
      heap = new Heap([], HeapType.MIN);
      heap.insert(25);
      heap.insert(1);
      heap.insert(26);

      expected = 3;
      actual = heap.size;

      assert.equal(actual, expected);
    });

    it("should insert the item into the heap and delete maximum", () => {
      heap = new Heap([1, 45, 32, 0, 88], HeapType.MAX);

      expected = 88;
      actual = heap.deleteMax();

      assert.equal(actual, expected);
    });

    it("should insert the item into the heap and delete minimum", () => {
      heap = new Heap([1, 45, 32, 0, 88], HeapType.MIN);

      expected = 0;
      actual = heap.deleteMax();

      assert.equal(actual, expected);
    });
  });

  describe("#deleteMax", () => {
    it("should remove and return the maximum item from the queuheap", () => {
      expected = 100;
      actual = new Heap([99, 1, 45, 32, 100, 0, 88, -5, 22], HeapType.MAX).deleteMax();

      assert.equal(actual, expected);
    });

    it("should remove and return the maximum item after insertion", () => {
      heap = new Heap([], HeapType.MAX);
      heap.insert(2);
      heap.insert(11);
      heap.insert(-4);
      heap.insert(90);

      expected = 90;
      actual = heap.deleteMax();

      assert.equal(actual, expected);
    });
  });

  describe("#deleteMin", () => {
    it("should remove and return the minimum item from the queuheap", () => {
      expected = -5;
      actual = new Heap([99, 1, 45, 32, 100, 0, 88, -5, 22], HeapType.MIN).deleteMin();

      assert.equal(actual, expected);
    });

    it("should remove and return the minimum item after insertion", () => {
      heap = new Heap([], HeapType.MIN);
      heap.insert(2);
      heap.insert(11);
      heap.insert(-4);
      heap.insert(90);

      expected = -4;
      actual = heap.deleteMin();

      assert.equal(actual, expected);
    });
  });

  // TODO: _percolateDown
  // TODO: _percolateUp
});
