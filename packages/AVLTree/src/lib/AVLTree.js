/**
 * @flow
 * @module super/avltree
 */

import type { Item } from "../../../shared/src/types";
import { BinaryTree } from "../../../BinaryTree/src/lib/BinaryTree";
import { TreeNode } from "../../../BinaryTree/src/lib/TreeNode";

/**
 *
 * AVLTree with superpowers! 💪
 *
 * @public
 *
 */
class AVLTree extends BinaryTree {
  /**
   * @public
   *
   * @desc Determine if the tree is balanced
   *
   * @returns {boolean} balanced
   */
  get balanced(): boolean {
    return Math.abs(this._getBalance(this.root)) <= 1;
  }

  /**
   * @private
   *
   * @desc Get balance factor
   *
   * @param {TreeNode} node - root node
   * @returns {number} balance factor
   */
  _getBalance(node: ?TreeNode): number {
    // $FlowFixMe
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  /**
   * @private
   *
   * @desc Rotate left
   *
   * @param {TreeNode} node
   * @returns {TreeNode} new root
   */
  _rotateLeft(node: TreeNode): TreeNode {
    // $FlowFixMe
    let root: TreeNode = node.right;
    node.right = root.left;
    root.left = node;
    return root;
  }

  /**
   * @private
   *
   * @desc Rotate right
   *
   * @param {TreeNode} node
   * @returns {TreeNode} new root
   */
  _rotateRight(node: TreeNode): TreeNode {
    // $FlowFixMe
    let root: TreeNode = node.left;
    node.left = root.right;
    root.right = node;
    return root;
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

      let balance = this._getBalance(root);

      if (balance > 1) {
        // Left Rotate
        if (root.left && this._compareLessThan(node.value, root.left.value)) {
          return this._rotateRight(root);
        }
        // Left Right Rotate
        if (root.left && this._compareGreaterThan(node.value, root.left.value)) {
          root.left = this._rotateLeft(root.left);
          return this._rotateRight(root);
        }
      }

      if (balance < -1) {
        // Right Rotate
        if (root.right && this._compareGreaterThan(node.value, root.right.value)) {
          return this._rotateLeft(root);
        }

        // Right Left Rotate
        if (root.right && this._compareLessThan(node.value, root.right.value)) {
          root.right = this._rotateRight(root.right);
          return this._rotateLeft(root);
        }
      }

      return root;
    };

    this._root = _insert(this.root);
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
     * @param {TreeNode} root
     * @param {Item} value
     */
    const _remove = (root: ?TreeNode, value: Item) => {
      if (!root) return null;

      if (this._compareEqual(root.value, value)) {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        } else {
          let aux = this.findMin(root.right);
          // $FlowFixMe
          root.value = aux.value;
          // $FlowFixMe
          root.right = _remove(root.right, aux.value);
        }
      } else if (this._compareLessThan(value, root.value)) {
        root.left = _remove(root.left, value);
      } else if (this._compareGreaterThan(value, root.value)) {
        root.right = _remove(root.right, value);
      }

      let balance = this._getBalance(root);

      if (balance > 1) {
        // Left Rotate
        if (root.left && this._getBalance(root.left) >= 0) {
          return this._rotateRight(root);
        }
        // Left Right Rotate
        if (root.left && this._getBalance(root.left) < 0) {
          root.left = this._rotateLeft(root.left);
          return this._rotateRight(root);
        }
      }

      if (balance < -1) {
        // Right Rotate
        if (root.right && this._getBalance(root.left) <= 0) {
          return this._rotateLeft(root);
        }

        // Right Left Rotate
        if (root.right && this._getBalance(root.left) > 0) {
          root.right = this._rotateRight(root.right);
          return this._rotateLeft(root);
        }
      }

      return root;
    };

    // $FlowFixMe
    this._root = _remove(this.root, value);
  }
}

export { AVLTree };
