import { TraversalType } from "../src/lib/BinaryTree";
import { inOrderArray, levelOrderArray, postOrderArray, preOrderArray } from "./mocks";

const { assert } = require("chai");
const { BinaryTree } = require("../src/lib/BinaryTree");
const { BinaryTreeNode } = require("../src/lib/BinaryTreeNode");

describe("BinaryTree", () => {
  let tree, expected, actual;

  describe("#root", () => {
    it("should have a root node defined", () => {
      actual = new BinaryTree([1, 2, 3]).root;

      assert.isDefined(actual);
    });
  });

  describe("#root", () => {
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
  });

  describe("#findMax", () => {
    it("should find maximum value in the tree", () => {
      tree = new BinaryTree([5, 3, 7, 1, 6, 4, 8]);

      expected = 8;
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

      expected = new BinaryTreeNode(3);
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

  // describe("BinaryTreeNode", () => {
  //   describe("#count", () => {
  //     it("should return children character count for node", () => {
  //       tree = new BinaryTree(["a", "b", "c"]);
  //
  //       expected = 3;
  //       actual = tree.root.count;
  //
  //       assert.equal(actual, expected);
  //     });
  //   });
  //
  //   describe("#char", () => {
  //     it("should return character value for node", () => {
  //       tree = new BinaryTree(["alpha"]);
  //
  //       expected = "a";
  //       actual = tree.root.get("a").char;
  //
  //       assert.equal(actual, expected);
  //     });
  //   });
  //
  //   describe("#isCompleteWord", () => {
  //     it("should return true if node is a complete word", () => {
  //       tree = new BinaryTree(["a"]);
  //
  //       expected = true;
  //       actual = tree.root.get("a").isCompleteWord;
  //
  //       assert.equal(actual, expected);
  //     });
  //
  //     it("should return false if node is not a complete word", () => {
  //       tree = new BinaryTree(["alpha"]);
  //
  //       expected = false;
  //       actual = tree.root.get("a").isCompleteWord;
  //
  //       assert.equal(actual, expected);
  //     });
  //   });
  //
  //   describe("#has", () => {
  //     it("should return true if node has a character", () => {
  //       tree = new BinaryTree(["alpha", "beta"]);
  //
  //       expected = true;
  //       actual = tree.root.has("a");
  //
  //       assert.equal(actual, expected);
  //     });
  //
  //     it("should return false if node does not have a character", () => {
  //       tree = new BinaryTree(["alpha", "beta"]);
  //
  //       expected = false;
  //       actual = tree.root.has("c");
  //
  //       assert.equal(actual, expected);
  //     });
  //   });
  //
  //   describe("#get", () => {
  //     it("should get child node for character", () => {
  //       tree = new BinaryTree(["alpha", "beta"]);
  //
  //       actual = tree.root.get("b");
  //
  //       assert.isDefined(actual);
  //     });
  //   });
  //
  //   describe("#set", () => {
  //     it("should set child node for character", () => {
  //       tree = new BinaryTree();
  //       node = new BinaryTreeNode("a");
  //       tree.root.set("a", node);
  //
  //       expected = node;
  //       actual = tree.root.get("a");
  //
  //       assert.equal(actual, expected);
  //     });
  //   });
  //
  //   describe("#delete", () => {
  //     it("should delete child node for character", () => {
  //       tree = new BinaryTree(["a"]);
  //       tree.root.delete("a");
  //
  //       expected = false;
  //       actual = tree.root.has("a");
  //
  //       assert.equal(actual, expected);
  //     });
  //   });
  // });
});
