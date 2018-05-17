const { assert } = require("chai");
const { PriorityQueue } = require("../src/lib/PriorityQueue");

describe("PriorityQueue", () => {
  let queue, expected, actual;

  describe("#size", () => {
    it("should get the size of the queue", () => {
      expected = 3;
      actual = new PriorityQueue([[100, "high"], [50, "medium"], [0, "low"]]).size;

      assert.equal(actual, expected);
    });
  });

  describe("#max", () => {
    it("should return the item with the highest priority from the queue", () => {
      expected = "high";
      actual = new PriorityQueue([[100, "high"], [50, "medium"], [0, "low"]]).max.value;

      assert.equal(actual, expected);
    });
  });

  describe("#high", () => {
    it("should return the item with the highest priority from the queue", () => {
      expected = "super high";
      actual = new PriorityQueue([
        [-400, "super low"],
        [100, "high"],
        [0, "low"],
        [3000, "super high"]
      ]).high.value;

      assert.equal(actual, expected);
    });

    it("should not delete the lowest priority item from the queue", () => {
      queue = new PriorityQueue([[100, "high"], [50, "medium"], [0, "low"]]);
      queue.high;

      expected = 3;
      actual = queue.size;

      assert.equal(actual, expected);
    });
  });

  describe("#min", () => {
    it("should return the item with the lowest priority from the queue", () => {
      expected = "low";
      actual = new PriorityQueue([[100, "high"], [50, "medium"], [0, "low"]]).min.value;

      assert.equal(actual, expected);
    });
  });

  describe("#low", () => {
    it("should return the item with the lowest priority from the queue", () => {
      expected = "super low";
      actual = new PriorityQueue([
        [-400, "super low"],
        [100, "high"],
        [0, "low"],
        [3000, "super high"]
      ]).low.value;

      assert.equal(actual, expected);
    });

    it("should not delete the highest priority item from the queue", () => {
      queue = new PriorityQueue([[100, "high"], [50, "medium"], [0, "low"]]);
      queue.low;

      expected = 3;
      actual = queue.size;

      assert.equal(actual, expected);
    });
  });

  describe("#isEmpty", () => {
    it("should return true if empty", () => {
      expected = true;
      actual = new PriorityQueue().isEmpty();

      assert.equal(actual, expected);
    });

    it("should return false if not empty", () => {
      expected = false;
      actual = new PriorityQueue([[100, "high"], [50, "medium"], [0, "low"]]).isEmpty();

      assert.equal(actual, expected);
    });
  });

  describe("#clear", () => {
    it("should remove all items from the queue", () => {
      queue = new PriorityQueue([[100, "high"]]);
      queue.clear();

      expected = 0;
      actual = queue.size;

      assert.equal(actual, expected);
    });
  });

  describe("#insert", () => {
    it("should insert the item into the queue", () => {
      queue = new PriorityQueue();
      queue.insert("b", 25);
      queue.insert("z", 1);
      queue.insert("a", 26);

      expected = 3;
      actual = queue.size;

      assert.equal(actual, expected);
    });

    it("should insert the item into the queue and delete highest priority based on custom comparator", () => {
      queue = new PriorityQueue(["a", "aaa", "aa"], (a, b) => a.length > b.length);

      expected = "a";
      actual = queue.deleteMax().value;

      assert.equal(actual, expected);
    });

    it("should insert the item into the queue and delete highest priority based on custom comparator", () => {
      queue = new PriorityQueue(["a", "aaa", "aa"], (a, b) => a.length < b.length);

      expected = "aaa";
      actual = queue.deleteMax().value;

      assert.equal(actual, expected);
    });
  });

  describe("#deleteMax", () => {
    it("should remove and return the item with the highest priority from the queue", () => {
      expected = "high";
      actual = new PriorityQueue([[100, "high"], [0, "low"]]).deleteMax().value;

      assert.equal(actual, expected);
    });

    it("should remove and return the item with the highest priority after insertion", () => {
      queue = new PriorityQueue();
      queue.insert("b", 25);
      queue.insert("z", 1);
      queue.insert("a", 26);

      expected = "a";
      actual = queue.deleteMax().value;

      assert.equal(actual, expected);
    });
  });

  describe("#deleteHigh", () => {
    it("should remove and return the item with the highest priority from the queue", () => {
      expected = "super high";
      actual = new PriorityQueue([
        [-400, "super low"],
        [100, "high"],
        [0, "low"],
        [3000, "super high"]
      ]).deleteHigh().value;

      assert.equal(actual, expected);
    });

    it("should delete the highest priority item from the queue", () => {
      queue = new PriorityQueue([[100, "high"], [50, "medium"], [0, "low"]]);
      queue.deleteHigh();

      expected = 2;
      actual = queue.size;

      assert.equal(actual, expected);
    });
  });

  describe("#deleteMin", () => {
    it("should remove and return the item with the lowest priority from the queue", () => {
      expected = "low";
      actual = new PriorityQueue([[100, "high"], [0, "low"]]).deleteMin().value;

      assert.equal(actual, expected);
    });

    it("should remove and return the item with the highest priority after insertion", () => {
      queue = new PriorityQueue();
      queue.insert("b", 25);
      queue.insert("z", 1);
      queue.insert("a", 26);

      expected = "z";
      actual = queue.deleteMin().value;

      assert.equal(actual, expected);
    });
  });

  describe("#deleteLow", () => {
    it("should remove and return the item with the lowest priority from the queue", () => {
      expected = "super low";
      actual = new PriorityQueue([
        [-400, "super low"],
        [100, "high"],
        [0, "low"],
        [3000, "super high"]
      ]).deleteLow().value;

      assert.equal(actual, expected);
    });

    it("should delete the lowest priority item from the queue", () => {
      queue = new PriorityQueue([[100, "high"], [50, "medium"], [0, "low"]]);
      queue.deleteLow();

      expected = 2;
      actual = queue.size;

      assert.equal(actual, expected);
    });
  });
});
