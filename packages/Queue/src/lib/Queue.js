/**
 * @flow
 * @module super/queue
 */

import type { Item } from "../../../shared/src/types";

/**
 *
 * Queue with superpowers! 💪
 *
 * @public
 *
 */
class Queue {
  /** @private */
  _queue: Array<any>;

  /**
   * @public
   *
   * @desc Construct a Queue
   *
   * @param {Iterable<any>} iterable
   */
  constructor(iterable: Iterable<any> = []) {
    this._queue = [...iterable];
  }

  /**
   * @public
   *
   * @desc Get the current size of the queue
   *
   * @returns {number} size of the queue
   */
  get size(): number {
    return this._queue.length;
  }

  /**
   * @public
   *
   * @desc Get the front item in the queue
   *
   * @returns {Item} front item
   */
  get front(): Item {
    return this._queue[0];
  }

  /**
   * @public
   *
   * @desc Get the rear item in the queue
   *
   * @returns {Item} rear item
   */
  get rear(): Item {
    return this._queue[this._queue.length - 1];
  }

  /**
   * @public
   *
   * @desc Check if queue is empty
   *
   * @returns {boolean} is queue empty
   */
  isEmpty(): boolean {
    return this._queue.length === 0;
  }

  /**
   * @public
   *
   * @desc Clear the items from the queue
   *
   * @returns {void}
   */
  clear() {
    this._queue.length = 0;
  }

  /**
   * @public
   *
   * @desc Enqueue an item into the queue
   *
   * @param {Item} item - item to enqueue
   * @returns {number} size after enqueue
   */
  enqueue(item: Item): number {
    return this._queue.push(item);
  }

  /**
   * @public
   *
   * @desc Dequeue an item from the queue
   *
   * @returns {Item} dequeued item
   */
  dequeue(): Item {
    return this._queue.shift();
  }

  /**
   * @public
   *
   * @desc Convert the queue to an array
   *
   * @returns {Array} array representation of the queue
   */
  toArray(): Array<any> {
    return this._queue.slice(0);
  }
}

export { Queue };
