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
   * @desc Get the next node
   *
   * @returns {BinaryTreeNode} next node
   */
  get left(): BinaryTreeNode {
    return this._left;
  }

  /**
   * @public
   *
   * @desc Set the left node
   *
   */
  set left(left: BinaryTreeNode) {
    this._left = left;
  }

  /**
   * @public
   *
   * @desc Get the previous node
   *
   * @returns {BinaryTreeNode} previous node
   */
  get right(): BinaryTreeNode {
    return this._right;
  }

  /**
   * @public
   *
   * @desc Set the next node
   *
   */
  set right(right: BinaryTreeNode) {
    this._right = right;
  }
}

export { BinaryTreeNode };
