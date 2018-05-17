/**
 * @flow
 * @module super/priorityqueue
 */

import type { Item } from "../../../shared/src/types";

/**
 *
 * QueueNode
 *
 * @public
 *
 */
class QueueNode {
  /** @private */
  _value: Item;

  /** @private */
  _priority: number;

  /**
   * @public
   *
   * @desc Construct a PriorityQueue
   *
   * @param {Item} value - item value
   * @param {number} priority - priority of item
   */
  constructor(value: Item, priority: number) {
    this._value = value;
    this._priority = priority;
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
   * @desc Get the priority of the node
   *
   * @returns {number} priority of item
   */
  get priority(): number {
    return this._priority;
  }
}

export { QueueNode };
