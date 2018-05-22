/**
 * @flow
 * @module super/binarytree
 */

import type { Comparator, Item } from "../../../shared/src/types";
import { TreeNode } from "./TreeNode";
import { Queue } from "../../../Queue/src/lib/Queue";
import {
  _compareEqual,
  _compareLessThan,
  _compareGreaterThan,
  _defaultComparator
} from "../../../shared/src/helpers";

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
  _root: ?TreeNode;

  /** @private */
  _compareEqual: Comparator;
  _compareLessThan: Comparator;
  _compareGreaterThan: Comparator;

  /**
   * @public
   *
   * @desc Construct a BinaryTree
   *
   * @param {Array<number>} iterable
   * @param {Comparator} comparator
   */
  constructor(iterable: Array<number> = [], comparator: Comparator) {
    this._root = null;
    this._compareEqual = _compareEqual(comparator || _defaultComparator);
    this._compareLessThan = _compareLessThan(comparator || _defaultComparator);
    this._compareGreaterThan = _compareGreaterThan(comparator || _defaultComparator);

    for (let item of iterable) {
      this.insert(item);
    }
  }

  /**
   * @private
   *
   * @desc Default comparator function to sort from:
   *       highest priority (max) -> lowest priority (min)
   *
   * @returns {number} comparison
   */
  static _defaultComparator(a: any, b: any): number | boolean {
    return a.value > b.value;
  }

  /**
   * @public
   *
   * @desc Get the root of the tree
   *
   * @returns {TreeNode} root node
   */
  get root(): ?TreeNode {
    return this._root;
  }

  /**
   * @public
   *
   * @alias getHeight(root)
   *
   * @desc Get the height of the tree
   *
   * @returns {TreeNode} root node
   */
  get height(): number {
    return this.getHeight(this.root);
  }

  /**
   * @public
   *
   * @desc Get the height of the tree at node
   *
   * @param {TreeNode} node - root node
   * @returns {number} height of tree
   */
  getHeight(node: ?TreeNode = this.root): number {
    /**
     * @private
     *
     * @desc Height helper
     *
     * @param {TreeNode} node
     * @returns {number} height of tree
     */
    const _height = (node: ?TreeNode) => {
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
   * @param {TreeNode} node - root node
   * @returns {TreeNode} node
   */
  findMin(node: ?TreeNode = this.root): ?TreeNode {
    // $FlowFixMe
    if (!node.left) return node;
    else return this.findMin(node.left);
  }

  /**
   * @public
   *
   * @desc Find maximum value in tree
   *
   * @param {TreeNode} node - root node
   * @returns {TreeNode} node
   */
  findMax(node: ?TreeNode = this.root): ?TreeNode {
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
    let node = new TreeNode(value);

    /**
     * @private
     *
     * @desc Insert helper
     *
     * @param {TreeNode} root
     */
    const _insert = (root: ?TreeNode) => {
      if (!root) return node;

      if (this._compareLessThan(node.value, root.value)) {
        root.left = _insert(root.left);
      } else {
        root.right = _insert(root.right);
      }

      return root;
    };

    this._root = _insert(this.root);
  }

  /**
   * @public
   *
   * @desc Search and retrieve a value from the tree
   *
   * @param {Item} value - value to search
   * @return {TreeNode} match node, or null if not found
   */
  search(value: Item): ?TreeNode {
    if (!value) return null;

    /**
     * @private
     *
     * @desc Search helper
     *
     * @param {TreeNode} node
     * @return {TreeNode} match node
     */
    const _search = (node): ?TreeNode => {
      if (!node) return null;

      if (this._compareEqual(value, node.value)) {
        return node;
      } else if (this._compareLessThan(value, node.value)) {
        return _search(node.left);
      } else if (this._compareGreaterThan(value, node.value)) {
        return _search(node.right);
      }
    };

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
     * @param {TreeNode} node
     * @param {Item} value
     */
    const _remove = (node: ?TreeNode, value: Item) => {
      if (!node) return null;

      if (this._compareEqual(node.value, value)) {
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
      } else if (this._compareLessThan(value, node.value)) {
        node.left = _remove(node.left, value);
        return node;
      } else if (this._compareGreaterThan(value, node.value)) {
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
   * @param {TreeNode} node - root node
   * @returns {Array<TreeNode>} array of nodes or values
   */
  preOrder(node: ?TreeNode = this.root): Array<TreeNode> {
    let nodes = [];

    /**
     * @private
     *
     * @desc PreOrder helper
     *
     * @param {TreeNode} node
     */
    function _preOrder(node: ?TreeNode) {
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
   * @param {TreeNode} node - root node
   * @returns {Array<TreeNode>} array of nodes or values
   */
  inOrder(node: ?TreeNode = this.root): Array<TreeNode> {
    let nodes = [];

    /**
     * @private
     *
     * @desc inOrder helper
     *
     * @param {TreeNode} node
     */
    function _inOrder(node: ?TreeNode) {
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
   * @param {TreeNode} node - root node
   * @returns {Array<TreeNode>} array of nodes or values
   */
  postOrder(node: ?TreeNode = this.root): Array<TreeNode> {
    let nodes = [];

    /**
     * @private
     *
     * @desc PreOrder helper
     *
     * @param {TreeNode} node
     */
    function _postOrder(node: ?TreeNode) {
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
   * @param {TreeNode} node - root node
   * @returns {Array<TreeNode>} array of nodes or values
   */
  levelOrder(node: ?TreeNode = this.root): Array<TreeNode> {
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
   * @returns {Array<TreeNode | Item> } array representation of the list
   */
  toArray(traversal: Traversal, flatten: boolean = false): Array<TreeNode | Item> {
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
