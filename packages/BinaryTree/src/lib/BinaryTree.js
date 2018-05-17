/**
 * @flow
 * @module super/binarytree
 */

import type { Item } from "../../../shared/src/types";
import { BinaryTreeNode } from "./BinaryTreeNode";
import { Queue } from "../../../Queue/src/lib/Queue";

export const TraversalType = {
  PRE_ORDER: "pre",
  IN_ORDER: "in",
  POST_ORDER: "post",
  LEVEL_ORDER: "level"
};

type Traversal = $Keys<typeof TraversalType>;

/**
 *
 * BinaryTree with superpowers! 💪
 *
 * @public
 *
 */
class BinaryTree {
  /** @private */
  _root: ?BinaryTreeNode;

  /**
   * @public
   *
   * @desc Construct a BinaryTree
   *
   * @param {Array<number>} iterable
   */
  constructor(iterable: Array<number> = []) {
    this._root = null;

    for (let item of iterable) {
      this.insert(item);
    }
  }

  /**
   * @public
   *
   * @desc Get the root of the tree
   *
   * @returns {BinaryTreeNode} root node
   */
  get root(): ?BinaryTreeNode {
    return this._root;
  }

  /**
   * @public
   *
   * @alias getHeight(root)
   *
   * @desc Get the height of the tree
   *
   * @returns {BinaryTreeNode} root node
   */
  get height(): number {
    return this.getHeight(this.root);
  }

  /**
   * @public
   *
   * @desc Get the height of the tree at node
   *
   * @param {BinaryTreeNode} node - root node
   * @returns {number} height of tree
   */
  getHeight(node: ?BinaryTreeNode = this.root): number {
    /**
     * @private
     *
     * @desc Height helper
     *
     * @param {BinaryTreeNode} node
     * @returns {number} height of tree
     */
    const _height = (node: ?BinaryTreeNode) => {
      if (!node) return 0;
      return Math.max(_height(node.left), _height(node.right)) + 1;
    };

    return _height(node);
  }

  /**
   * @public
   *
   * @desc Find minimum value in tree
   *
   * @param {BinaryTreeNode} node - root node
   * @returns {BinaryTreeNode} node
   */
  findMin(node: ?BinaryTreeNode = this.root): ?BinaryTreeNode {
    // $FlowFixMe
    if (!node.left) return node;
    else return this.findMin(node.left);
  }

  /**
   * @public
   *
   * @desc Find maximum value in tree
   *
   * @param {BinaryTreeNode} node - root node
   * @returns {BinaryTreeNode} node
   */
  findMax(node: ?BinaryTreeNode = this.root): ?BinaryTreeNode {
    // $FlowFixMe
    if (!node.right) return node;
    else return this.findMax(node.right);
  }

  /**
   * @public
   *
   * @desc Insert a value into the tree
   *
   * @param {Item} value - value to insert into the tree
   */
  insert(value: Item) {
    let node = new BinaryTreeNode(value);

    if (!this.root) {
      this._root = node;
      return;
    }

    /**
     * @private
     *
     * @desc Insert helper
     *
     * @param {BinaryTreeNode} root
     */
    function _insert(root: BinaryTreeNode) {
      if (node.value < root.value) {
        if (root.left) {
          return _insert(root.left);
        } else {
          root.left = node;
        }
      } else if (node.value >= root.value) {
        if (root.right) {
          return _insert(root.right);
        } else {
          root.right = node;
        }
      }
    }

    _insert(this.root);
  }

  /**
   * @public
   *
   * @desc Search and retrieve a value from the tree
   *
   * @param {Item} value - value to search
   * @return {BinaryTreeNode} match node, or null if not found
   */
  search(value: Item): ?BinaryTreeNode {
    if (!value) return null;

    /**
     * @private
     *
     * @desc Search helper
     *
     * @param {BinaryTreeNode} node
     * @return {BinaryTreeNode} match node
     */
    function _search(node): ?BinaryTreeNode {
      if (!node) return null;

      if (value === node.value) {
        return node;
      } else if (value < node.value) {
        return _search(node.left);
      } else if (value >= node.value) {
        return _search(node.right);
      }
    }

    return _search(this.root);
  }

  /**
   * @public
   *
   * @desc Remove a value from the tree
   *
   * @param {Item} value - value to remove
   */
  remove(value: Item) {
    /**
     * @private
     *
     * @desc Remove helper
     *
     * @param {BinaryTreeNode} node
     * @param {Item} value
     */
    const _remove = (node: ?BinaryTreeNode, value: Item) => {
      if (!node) return null;

      if (node.value === value) {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        } else {
          let aux = this.findMin(node.right);
          // $FlowFixMe
          node.value = aux.value;
          // $FlowFixMe
          node.right = _remove(node.right, aux.value);
          return node;
        }
      } else if (value < node.value) {
        node.left = _remove(node.left, value);
        return node;
      } else if (value >= node.value) {
        node.right = _remove(node.right, value);
        return node;
      }
    };

    // $FlowFixMe
    this._root = _remove(this.root, value);
  }

  /**
   * @public
   *
   * @desc Traverse the tree in preOrder traversal ordering
   *
   * @param {BinaryTreeNode} node - root node
   * @returns {Array<BinaryTreeNode>} array of nodes or values
   */
  preOrder(node: ?BinaryTreeNode = this.root): Array<BinaryTreeNode> {
    let nodes = [];
    /**
     * @private
     *
     * @desc PreOrder helper
     *
     * @param {BinaryTreeNode} node
     */
    function _preOrder(node: ?BinaryTreeNode) {
      if (node) {
        nodes = [...nodes, node];
        _preOrder(node.left);
        _preOrder(node.right);
      }
    }

    _preOrder(node);

    return nodes;
  }

  /**
   * @public
   *
   * @desc Traverse the tree in inOrder traversal ordering
   *
   * @param {BinaryTreeNode} node - root node
   * @returns {Array<BinaryTreeNode>} array of nodes or values
   */
  inOrder(node: ?BinaryTreeNode = this.root): Array<BinaryTreeNode> {
    let nodes = [];
    /**
     * @private
     *
     * @desc inOrder helper
     *
     * @param {BinaryTreeNode} node
     */
    function _inOrder(node: ?BinaryTreeNode) {
      if (node) {
        _inOrder(node.left);
        nodes = [...nodes, node];
        _inOrder(node.right);
      }
    }

    _inOrder(node);

    return nodes;
  }

  /**
   * @public
   *
   * @desc Traverse the tree in postOrder traversal ordering
   *
   * @param {BinaryTreeNode} node - root node
   * @returns {Array<BinaryTreeNode>} array of nodes or values
   */
  postOrder(node: ?BinaryTreeNode = this.root): Array<BinaryTreeNode> {
    let nodes = [];
    /**
     * @private
     *
     * @desc PreOrder helper
     *
     * @param {BinaryTreeNode} node
     */
    function _postOrder(node: ?BinaryTreeNode) {
      if (node) {
        _postOrder(node.left);
        _postOrder(node.right);
        nodes = [...nodes, node];
      }
    }

    _postOrder(node);

    return nodes;
  }

  /**
   * @public
   *
   * @desc Traverse the tree in levelOrder traversal ordering
   *
   * @param {BinaryTreeNode} node - root node
   * @returns {Array<BinaryTreeNode>} array of nodes or values
   */
  levelOrder(node: ?BinaryTreeNode = this.root): Array<BinaryTreeNode> {
    let nodes = [];

    let q = new Queue();
    q.enqueue(node);

    while (!q.isEmpty()) {
      let node = q.dequeue();
      nodes.push(node);

      if (node.left) {
        q.enqueue(node.left);
      }

      if (node.right) {
        q.enqueue(node.right);
      }
    }

    return nodes;
  }

  /**
   * @public
   *
   * @desc Convert the tree to an array
   *
   * @param {Traversal} traversal - method of traversal
   * @param {boolean} flatten - if false return nodes; if true return only values
   * @returns {Array<BinaryTreeNode | Item> } array representation of the list
   */
  toArray(traversal: Traversal, flatten: boolean = false): Array<BinaryTreeNode | Item> {
    let nodes;

    switch (traversal) {
      default:
      case TraversalType.PRE_ORDER:
        nodes = this.preOrder(this.root);
        break;
      case TraversalType.IN_ORDER:
        nodes = this.inOrder(this.root);
        break;
      case TraversalType.POST_ORDER:
        nodes = this.postOrder(this.root);
        break;
      case TraversalType.LEVEL_ORDER:
        nodes = this.levelOrder(this.root);
        break;
    }

    return flatten ? nodes.map(v => v.value) : nodes;
  }
}

export { BinaryTree };
