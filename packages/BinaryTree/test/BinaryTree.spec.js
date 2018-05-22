const { assert } = require("chai");
const { inOrderArray, levelOrderArray, postOrderArray, preOrderArray } = require("./mocks");
const { BinaryTree, TraversalType } = require("../src/lib/BinaryTree");
const { TreeNode } = require("../src/lib/TreeNode");

describe("BinaryTree", () => {
  let tree, expected, actual;

  describe("#root", () => {
    it("should have a root node defined", () => {
      actual = new BinaryTree([1, 2, 3]).root;

      assert.isDefined(actual);
    });
  });

  describe("#height", () => {
    it("should return the tree height (ordered)", () => {
      expected = 3;
      actual = new BinaryTree([1, 2, 3]).height;

      assert.equal(actual, expected);
    });

    it("should return the tree height (unordered)", () => {
      expected = 2;
      actual = new BinaryTree([2, 1, 3]).height;

      assert.equal(actual, expected);
    });
  });

  describe("#findMin", () => {
    it("should find minimum value in the tree", () => {
      tree = new BinaryTree([5, 3, 7, 1, 6, 4, 8]);

      expected = 1;
      actual = tree.findMin().value;

      assert.equal(actual, expected);
    });

    it("construct a tree using a custom string length (ascending) comparator", () => {
      tree = new BinaryTree(["hi", "loooong", "boy"], (a, b) => a.length - b.length);

      expected = "hi";
      actual = tree.findMin().value;

      assert.equal(actual, expected);
    });

    it("construct a tree using a custom string length (descending) comparator", () => {
      tree = new BinaryTree(["hi", "loooong", "boy"], (a, b) => b.length - a.length);

      expected = "loooong";
      actual = tree.findMin().value;

      assert.equal(actual, expected);
    });
  });

  describe("#findMax", () => {
    it("should find maximum value in the tree", () => {
      tree = new BinaryTree([5, 3, 7, 1, 6, 4, 8]);

      expected = 8;
      actual = tree.findMax().value;

      assert.equal(actual, expected);
    });

    it("construct a tree using a custom string length (ascending) comparator", () => {
      tree = new BinaryTree(["blue", "red", "green"], (a, b) => a.length - b.length);

      expected = "green";
      actual = tree.findMax().value;

      assert.equal(actual, expected);
    });

    it("construct a tree using a custom string length (descending) comparator", () => {
      tree = new BinaryTree(["blue", "red", "green"], (a, b) => b.length - a.length);

      expected = "red";
      actual = tree.findMax().value;

      assert.equal(actual, expected);
    });
  });

  describe("#insert", () => {
    it("should insert a value at root node for an empty tree", () => {
      tree = new BinaryTree();
      tree.insert(5);

      expected = 5;
      actual = tree.root.value;

      assert.equal(actual, expected);
    });

    it("should insert a value into the left subtree of a non-empty tree", () => {
      tree = new BinaryTree([3]);
      tree.insert(1);

      expected = 1;
      actual = tree.root.left.value;

      assert.equal(actual, expected);
    });

    it("should insert a value into the right subtree of a non-empty tree", () => {
      tree = new BinaryTree([3]);
      tree.insert(6);

      expected = 6;
      actual = tree.root.right.value;

      assert.equal(actual, expected);
    });
  });

  describe("#search", () => {
    it("should return node if search found in tree", () => {
      tree = new BinaryTree([1]);
      tree.insert(3);

      expected = new TreeNode(3);
      actual = tree.search(3);

      assert.deepEqual(actual, expected);
    });

    it("should return null if search not found in tree", () => {
      tree = new BinaryTree([1]);

      expected = null;
      actual = tree.search(3);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#remove", () => {
    it("should remove node if from tree", () => {
      tree = new BinaryTree([3, 2, 1]);
      tree.remove(3);

      expected = null;
      actual = tree.search(3);

      assert.equal(actual, expected);
    });
    // TODO: more extensive testing
  });

  describe("#toArray", () => {
    describe("#preOrder", () => {
      it("should return array with preOrder traversal ordering", () => {
        tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1, 9]);

        // 5 3 2 1 4 7 6 8 9
        expected = preOrderArray;
        actual = tree.toArray(TraversalType.PRE_ORDER);

        assert.deepEqual(actual, expected);
      });

      it("should return a flattened array with preOrder traversal ordering", () => {
        tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1, 9]);

        expected = [5, 3, 2, 1, 4, 7, 6, 8, 9];
        actual = tree.toArray(TraversalType.PRE_ORDER, true);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#inOrder", () => {
      it("should return array with inOrder traversal ordering", () => {
        tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1, 9]);

        // 1 2 3 4 5 6 7 8 9
        expected = inOrderArray;
        actual = tree.toArray(TraversalType.IN_ORDER);

        assert.deepEqual(actual, expected);
      });

      it("should return a flattened array with inOrder traversal ordering", () => {
        tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1, 9]);

        expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        actual = tree.toArray(TraversalType.IN_ORDER, true);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#postOrder", () => {
      it("should return array with postOrder traversal ordering", () => {
        tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1, 9]);

        // 1 2 4 3 6 9 8 7 5
        expected = postOrderArray;
        actual = tree.toArray(TraversalType.POST_ORDER);

        assert.deepEqual(actual, expected);
      });

      it("should return a flattened array with postOrder traversal ordering", () => {
        tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1, 9]);

        expected = [1, 2, 4, 3, 6, 9, 8, 7, 5];
        actual = tree.toArray(TraversalType.POST_ORDER, true);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#levelOrder", () => {
      it("should return array with levelOrder traversal ordering", () => {
        tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1, 9]);

        // 5 3 7 2 4 6 8 1 9
        expected = levelOrderArray;
        actual = actual = tree.toArray(TraversalType.LEVEL_ORDER);

        assert.deepEqual(actual, expected);
      });

      it("should return a flattened array with levelOrder traversal ordering", () => {
        tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1, 9]);

        expected = [5, 3, 7, 2, 4, 6, 8, 1, 9];
        actual = tree.toArray(TraversalType.LEVEL_ORDER, true);

        assert.deepEqual(actual, expected);
      });
    });
  });
});
