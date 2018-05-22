/**
 * @flow
 * @module super/binarytree
 */

import type { Item } from "../../../shared/src/types";

/**
 *
 * TreeNode
 *
 * @public
 *
 */
class TreeNode {
  /** @private */
  _value: Item;

  /** @private */
  _left: ?TreeNode;

  /** @private */
  _right: ?TreeNode;

  /**
   * @public
   *
   * @desc Construct a TreeNode
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
   * @returns {TreeNode} left child node
   */
  get left(): ?TreeNode {
    return this._left;
  }

  /**
   * @public
   *
   * @desc Set the left child node
   *
   */
  set left(left: ?TreeNode) {
    this._left = left;
  }

  /**
   * @public
   *
   * @desc Get the right child node
   *
   * @returns {TreeNode} right child node
   */
  get right(): ?TreeNode {
    return this._right;
  }

  /**
   * @public
   *
   * @desc Set the right child node
   *
   */
  set right(right: ?TreeNode) {
    this._right = right;
  }
}

export { TreeNode };
