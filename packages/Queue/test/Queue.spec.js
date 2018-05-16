const { assert } = require("chai");
const { Queue } = require("../src/lib/Queue");

describe("Queue", () => {
  let queue, expected, actual;

  describe("#size", () => {
    it("should get the size of the queue", () => {
      expected = 3;
      actual = new Queue([1, 2, 3]).size;

      assert.equal(actual, expected);
    });
  });

  describe("#front", () => {
    it("should get the front item in the queue", () => {
      expected = 3;
      actual = new Queue([3, 5, 7]).front;

      assert.equal(actual, expected);
    });
  });

  describe("#rear", () => {
    it("should get the rear item in the queue", () => {
      expected = 7;
      actual = new Queue([3, 5, 7]).rear;

      assert.equal(actual, expected);
    });
  });

  describe("#isEmpty", () => {
    it("should return true if empty", () => {
      expected = true;
      actual = new Queue().isEmpty();

      assert.equal(actual, expected);
    });

    it("should return false if not empty", () => {
      expected = false;
      actual = new Queue([1, 2, 3]).isEmpty();

      assert.equal(actual, expected);
    });
  });

  describe("#clear", () => {
    it("should remove all items from the queue", () => {
      queue = new Queue([1]);
      queue.clear();

      expected = 0;
      actual = queue.size;

      assert.equal(actual, expected);
    });
  });

  describe("#enqueue", () => {
    it("should enqueue the item into the queue", () => {
      expected = 1;
      actual = new Queue().enqueue(1);

      assert.equal(actual, expected);
    });
  });

  describe("#dequeue", () => {
    it("should dequeue the item from the queue", () => {
      expected = 1;
      actual = new Queue([1]).dequeue();

      assert.equal(actual, expected);
    });
  });
});
