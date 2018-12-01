const { assert } = require("chai");
const { LinkedList } = require("../src/lib/LinkedList");

describe("LinkedList", () => {
  let list, node, expected, actual;

  describe("#head", () => {
    it("should have a head node set to null for empty iterable", () => {
      expected = null;
      actual = new LinkedList().head;

      assert.equal(actual, expected);
    });

    it("should have a head node defined", () => {
      actual = new LinkedList([1, 2, 3]).head;

      assert.isDefined(actual);
    });

    it("should return the head node of the list", () => {
      expected = 1;
      actual = new LinkedList([1, 2, 3]).head.value;

      assert.equal(actual, expected);
    });
  });

  describe("#tail", () => {
    it("should have a tail node set to null for empty iterable", () => {
      expected = null;
      actual = new LinkedList().tail;

      assert.equal(actual, expected);
    });

    it("should have a tail node defined", () => {
      actual = new LinkedList([1, 2, 3]).tail;

      assert.isDefined(actual);
    });

    it("should return the tail node of the list", () => {
      expected = 3;
      actual = new LinkedList([1, 2, 3]).tail.value;

      assert.equal(actual, expected);
    });
  });

  describe("#size", () => {
    it("should return the size of the list", () => {
      expected = 3;
      actual = new LinkedList([1, 2, 3]).size;

      assert.equal(actual, expected);
    });
  });

  describe("#insert", () => {
    it("should insert node at head position", () => {
      list = new LinkedList([1, 2, 3]);
      list.insert(0, 99);

      expected = 99;
      actual = list.head.value;

      assert.equal(actual, expected);
    });

    it("should insert node at tail position", () => {
      list = new LinkedList([1, 2, 3]);
      list.insert(1, 99);

      expected = 99;
      actual = list.head.next.value;

      assert.equal(actual, expected);
    });

    it("should insert node at head for position of -4 (negative of size + 1)", () => {
      list = new LinkedList([1, 2, 3]);
      list.insert(-4, 99);

      expected = 99;
      actual = list.head.value;

      assert.equal(actual, expected);
    });

    it("should insert node at tail for position of -1", () => {
      list = new LinkedList([1, 2, 3]);
      list.insert(-1, 99);

      expected = 99;
      actual = list.tail.value;

      assert.equal(actual, expected);
    });

    it("should insert node at second (2) position", () => {
      list = new LinkedList([1, 2, 3]);
      list.insert(2, 99);

      expected = 99;
      actual = list.head.next.next.value;

      assert.equal(actual, expected);
    });

    it("should insert node at third (3) position", () => {
      list = new LinkedList([1, 2, 3]);
      list.insert(3, 99);

      expected = 99;
      actual = list.head.next.next.next.value;

      assert.equal(actual, expected);
    });

    it("should insert node at appropriate position", () => {
      list = new LinkedList([1, 2, 3, 4, 5]);
      list.insert(3, 99);

      expected = [1, 2, 3, 99, 4, 5];
      actual = list.toArray();

      assert.deepEqual(actual, expected);
    });

    it("should insert node at end of list if position exceeds size", () => {
      list = new LinkedList([1, 2, 3, 4, 5]);
      list.insert(100, 99);

      expected = 99;
      actual = list.tail.value;

      assert.equal(actual, expected);
    });
  });

  describe("#prepend", () => {
    it("should prepend node to front of list", () => {
      list = new LinkedList([1, 2, 3]);
      list.prepend(99);

      expected = 99;
      actual = list.head.value;

      assert.equal(actual, expected);
    });
  });

  describe("#unshift", () => {
    it("should unshift node to front of list", () => {
      list = new LinkedList([1, 2, 3]);
      list.unshift(99);

      expected = 99;
      actual = list.head.value;

      assert.equal(actual, expected);
    });
  });

  describe("#append", () => {
    it("should append node to rear of list", () => {
      list = new LinkedList([1, 2, 3]);
      list.append(99);

      expected = 99;
      actual = list.tail.value;

      assert.equal(actual, expected);
    });
  });

  describe("#push", () => {
    it("should push node to rear of list", () => {
      list = new LinkedList([1, 2, 3]);
      list.push(99);

      expected = 99;
      actual = list.tail.value;

      assert.equal(actual, expected);
    });
  });

  describe("#remove", () => {
    it("should remove node at head of list", () => {
      list = new LinkedList([1, 2, 3]);
      list.remove(0);

      expected = 2;
      actual = list.head.value;

      assert.equal(actual, expected);
    });

    it("should set prev to null for removed head node", () => {
      list = new LinkedList([1, 2, 3]);
      list.remove(0);

      expected = null;
      actual = list.head.prev;

      assert.equal(actual, expected);
    });

    it("should remove node at tail of list", () => {
      list = new LinkedList([1, 2, 3]);
      list.remove(list.size - 1);

      expected = 2;
      actual = list.tail.value;

      assert.equal(actual, expected);
    });

    it("should set next to null for removed tail node", () => {
      list = new LinkedList([1, 2, 3]);
      list.remove(list.size - 1);

      expected = null;
      actual = list.tail.next;

      assert.equal(actual, expected);
    });

    it("should remove node at first (1) position of list", () => {
      list = new LinkedList([1, 2, 3, 4]);
      list.remove(1);

      expected = 3;
      actual = list.head.next.value;

      assert.equal(actual, expected);
    });

    it("should remove node at second (2) position of list", () => {
      list = new LinkedList([1, 2, 3, 4]);
      list.remove(2);

      expected = 4;
      actual = list.head.next.next.value;

      assert.equal(actual, expected);
    });

    it("should not remove any nodes position exceeds size - 1 (last index)", () => {
      list = new LinkedList([1, 2, 3]);
      list.remove(100);

      expected = 3;
      actual = list.size;

      assert.equal(actual, expected);
    });

    it("should remove node at head for position of -3 (negative of size)", () => {
      list = new LinkedList([1, 2, 3]);
      list.remove(-3);

      expected = 2;
      actual = list.head.value;

      assert.equal(actual, expected);
    });

    it("should remove node at tail for position of -1", () => {
      list = new LinkedList([1, 2, 3]);
      list.remove(-1);

      expected = 2;
      actual = list.tail.value;

      assert.equal(actual, expected);
    });
  });

  describe("#shift", () => {
    it("should shift node from front of list", () => {
      list = new LinkedList([1, 2, 3]);
      node = list.shift();

      expected = 1;
      actual = node.value;

      assert.equal(actual, expected);
    });

    it("should decrement size after shift", () => {
      list = new LinkedList([1, 2, 3]);
      expected = list.size;

      list.shift();
      actual = list.size;

      assert.isBelow(actual, expected);
    });
  });

  describe("#pop", () => {
    it("should pop node from rear of list", () => {
      list = new LinkedList([1, 2, 3]);
      node = list.pop();

      expected = 3;
      actual = node.value;

      assert.equal(actual, expected);
    });

    it("should decrement size after pop", () => {
      list = new LinkedList([1, 2, 3]);
      expected = list.size;

      list.pop();
      actual = list.size;

      assert.isBelow(actual, expected);
    });
  });

  describe("#toArray", () => {
    it("should convert the list to an array", () => {
      expected = [1, 2, 3];
      actual = new LinkedList([1, 2, 3]).toArray();

      assert.deepEqual(actual, expected);
    });
  });

  describe("ListNode", () => {
    describe("#next", () => {
      it("should return the next node", () => {
        expected = 3;
        actual = new LinkedList([1, 2, 3]).head.next.next.value;

        assert.equal(actual, expected);
      });
    });

    describe("#prev", () => {
      it("should return the prev node", () => {
        expected = 2;
        actual = new LinkedList([1, 2, 3]).head.next.next.prev.value;

        assert.equal(actual, expected);
      });
    });

    describe("#value", () => {
      it("should return the value of the list node", () => {
        expected = 1;
        actual = new LinkedList([1, 2, 3]).head.value;

        assert.equal(actual, expected);
      });
    });
  });
});
