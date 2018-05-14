// @flow

/**
 * @module super/queue
 *
 */

/**
 * @typedef {null|undefined|boolean|number|string|Symbol|Function|Array|Date|Object} Item
 */
export type Item =
  | null
  | undefined
  | boolean
  | number
  | string
  | Symbol
  | Function
  | Array
  | Date
  | Object;

/**
 *
 * Queue with superpowers! 💪
 *
 * @public
 *
 */
class Queue {
  /**
   * @public
   *
   * @desc Construct a Queue
   *
   * @param {Iterable} iterable
   */
  constructor(iterable: Iterable = []) {
    this._queue = [...iterable];
  }

  /**
   * @public
   *
   * @desc Get the current length of the queue
   *
   * @returns {number} length of the queue
   */
  get size(): number {
    return this._queue.length;
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
   * @returns {number} length after enqueue
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
   * @desc Get the front item in the queue
   *
   * @returns {Item} front item
   */
  front(): Item {
    return this._queue[0];
  }

  /**
   * @public
   *
   * @desc Get the rear item in the queue
   *
   * @returns {Item} rear item
   */
  rear(): Item {
    return this._queue[this._queue.length - 1];
  }

  /**
   * @public
   *
   * @desc Convert the queue to an array
   *
   * @returns {Array} array representation of the queue
   */
  toArray(): Array {
    return this._queue.slice(0);
  }
}

export default Queue;
export { Queue };