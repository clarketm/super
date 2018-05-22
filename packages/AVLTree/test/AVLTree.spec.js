const { assert } = require("chai");
const { AVLTree } = require("../src/lib/AVLTree");
const { TreeNode } = require("../../BinaryTree/src/lib/TreeNode");

describe("AVLTree", () => {
  let tree, expected, actual;

  describe("#root", () => {
    it("should have a root node defined", () => {
      actual = new AVLTree([1, 2, 3]).root;

      assert.isDefined(actual);
    });
  });

  describe("#height", () => {
    it("should return the tree height (ordered)", () => {
      expected = 2;
      actual = new AVLTree([1, 2, 3]).height;

      assert.equal(actual, expected);
    });

    it("should return the tree height (unordered)", () => {
      expected = 2;
      actual = new AVLTree([2, 1, 3]).height;

      assert.equal(actual, expected);
    });
  });

  describe("#insert", () => {
    it("should insert a value at root node for an empty tree", () => {
      tree = new AVLTree();
      tree.insert(5);

      expected = 5;
      actual = tree.root.value;

      assert.equal(actual, expected);
    });

    it("should insert a value into the left subtree of a non-empty tree", () => {
      tree = new AVLTree([3]);
      tree.insert(1);

      expected = 1;
      actual = tree.root.left.value;

      assert.equal(actual, expected);
    });

    it("should insert a value into the right subtree of a non-empty tree", () => {
      tree = new AVLTree([3]);
      tree.insert(6);

      expected = 6;
      actual = tree.root.right.value;

      assert.equal(actual, expected);
    });

    it("should be balanced after multiple ascending insertions", () => {
      tree = new AVLTree();
      tree.insert(0);
      tree.insert(1);
      tree.insert(2);
      tree.insert(3);

      expected = true;
      actual = tree.balanced;

      assert.equal(actual, expected);
    });

    it("should be balanced after multiple descending insertions", () => {
      tree = new AVLTree();
      tree.insert(3);
      tree.insert(2);
      tree.insert(1);
      tree.insert(0);

      expected = true;
      actual = tree.balanced;

      assert.equal(actual, expected);
    });
  });

  describe("#search", () => {
    it("should return node if search found in tree", () => {
      tree = new AVLTree([1]);
      tree.insert(3);

      expected = new TreeNode(3);
      actual = tree.search(3);

      assert.deepEqual(actual, expected);
    });

    it("should return null if search not found in tree", () => {
      tree = new AVLTree([1]);

      expected = null;
      actual = tree.search(3);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#remove", () => {
    it("should remove node if from tree", () => {
      tree = new AVLTree([3, 2, 1]);
      tree.remove(3);

      expected = null;
      actual = tree.search(3);

      assert.equal(actual, expected);
    });

    it("should be balanced after multiple ascending deletions", () => {
      tree = new AVLTree([0, 1, 2, 3, 4, 5]);
      tree.insert(0);
      tree.insert(1);
      tree.insert(2);

      expected = true;
      actual = tree.balanced;

      assert.equal(actual, expected);
    });

    it("should be balanced after multiple descending deletions", () => {
      tree = new AVLTree([0, 1, 2, 3, 4, 5]);
      tree.insert(5);
      tree.insert(4);
      tree.insert(3);

      expected = true;
      actual = tree.balanced;

      assert.equal(actual, expected);
    });
  });
});
