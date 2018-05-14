const { assert } = require("chai");
const { LinkedList } = require("../src/lib/LinkedList");

describe("LinkedList", () => {
  let expected, actual;

  describe("#head", () => {
    it("should return the head node of the list", () => {
      actual = new LinkedList([1, 2, 3]).head;

      assert.isDefined(actual);
    });
  });

  describe("#size", () => {
    it("should return the size of the list", () => {
      expected = 3;
      actual = new LinkedList([1, 2, 3]).size;

      assert.equal(actual, expected);
    });
  });

  describe("#toLinkedList", () => {
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
