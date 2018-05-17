/**
 * @flow
 * @module super/linkedlist
 */

import type { Item } from "../../../shared/src/types";

/**
 *
 * ListNode
 *
 * @public
 *
 */
class ListNode {
  /** @private */
  _value: Item;

  /** @private */
  _next: ?ListNode;

  /** @private */
  _prev: ?ListNode;

  /**
   * @public
   *
   * @desc Construct a ListNode
   *
   * @param {Item} item - node value
   */
  constructor(item: Item) {
    this._value = item;
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
   * @desc Get the next node in list
   *
   * @returns {ListNode} next node
   */
  get next(): ?ListNode {
    return this._next;
  }

  /**
   * @public
   *
   * @desc Set the next node in list
   *
   */
  set next(next: ?ListNode) {
    this._next = next;
  }

  /**
   * @public
   *
   * @desc Get the previous node in list
   *
   * @returns {ListNode} previous node
   */
  get prev(): ?ListNode {
    return this._prev;
  }

  /**
   * @public
   *
   * @desc Set the next node in list
   *
   */
  set prev(prev: ?ListNode) {
    this._prev = prev;
  }
}

export { ListNode };
