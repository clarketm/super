/**
 * @flow
 * @module super/binarytree
 */

import type { Item } from "../../../shared/src/types";

/**
 *
 * BinaryTreeNode
 *
 * @public
 *
 */
class BinaryTreeNode {
  /** @private */
  _value: Item;

  /** @private */
  _left: ?BinaryTreeNode;

  /** @private */
  _right: ?BinaryTreeNode;

  /**
   * @public
   *
   * @desc Construct a BinaryTreeNode
   *
   * @param {Item} value - node value
   */
  constructor(value: Item) {
    this._value = value;
    this._left = null;
    this._right = null;
  }

  /**
   * @public
   *
   * @desc Get the value of the node
   *
   * @returns {Item} node value
   */
  get value(): Item {
    return this._value;
  }

  /**
   * @public
   *
   * @desc Set the value of the node
   *
   */
  set value(value: Item) {
    this._value = value;
  }

  /**
   * @public
   *
   * @desc Get the left child node
   *
   * @returns {BinaryTreeNode} left child node
   */
  get left(): ?BinaryTreeNode {
    return this._left;
  }

  /**
   * @public
   *
   * @desc Set the left child node
   *
   */
  set left(left: BinaryTreeNode) {
    this._left = left;
  }

  /**
   * @public
   *
   * @desc Get the right child node
   *
   * @returns {BinaryTreeNode} right child node
   */
  get right(): ?BinaryTreeNode {
    return this._right;
  }

  /**
   * @public
   *
   * @desc Set the right child node
   *
   */
  set right(right: BinaryTreeNode) {
    this._right = right;
  }
}

export { BinaryTreeNode };
