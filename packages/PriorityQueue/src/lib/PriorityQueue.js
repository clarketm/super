/**
 * @flow
 * @module super/priorityqueue
 */

import type { Comparator, Item } from "../../../shared/src/types";
import { PrimitiveType } from "../../../shared/src/constants";
import { QueueNode } from "./QueueNode";
import { isIterable } from "../../../shared/src/helpers";
import isPlainObject from "lodash/isPlainObject";

type PriorityQueueIterable =
  | Map<number, Item>
  | Array<[number, Item]>
  | Array<[Item]>
  | Array<{ priority: number, value: Item }>;

/**
 *
 * PriorityQueue with superpowers! 💪
 *
 * @public
 *
 */
class PriorityQueue {
  /** @private */
  _queue: Array<Item>;

  /** @private */
  _comparator: Comparator;

  /**
   * @public
   *
   * @desc Construct a PriorityQueue
   *
   * @param {PriorityQueueIterable} iterable
   * @param {Comparator} comparator
   */
  constructor(iterable: PriorityQueueIterable = new Map(), comparator: Comparator) {
    this._queue = [];
    this._comparator = comparator
      ? PriorityQueue._wrapComparator(comparator)
      : PriorityQueue._defaultComparator;

    if (!(iterable instanceof Map)) {
      if (isIterable(iterable)) {
        if (Array.isArray(iterable[0])) {
          iterable = new Map(iterable);
        } else if (isPlainObject(iterable[0])) {
          iterable = new Map(iterable.map(({ value, priority }) => [priority, value]));
        } else {
          return iterable.forEach(v => this.insert(v));
        }
      } else {
        throw new Error("Unable to construct from non-iterable");
      }
    }

    for (let [priority, value] of iterable.entries()) {
      this.insert(value, priority);
    }
  }

  static _wrapComparator(comparator: Comparator): Comparator {
    return (a, b) => comparator(a.value, b.value);
  }

  /**
   * @private
   *
   * @desc Default comparator function to sort from:
   *       highest priority (max) -> lowest priority (min)
   *
   * @returns {number} size of the queue
   */
  static _defaultComparator(a: any, b: any): number | boolean {
    return a.priority < b.priority;
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
   * @desc Get the item with the highest priority
   *
   * @returns {Item} highest priority item
   */
  get max(): Item {
    return this._queue[0];
  }

  /**
   * @public
   *
   * @alias max
   *
   * @desc Get the item with the highest priority
   *
   * @returns {Item} highest priority item
   */
  get high(): Item {
    return this.max;
  }

  /**
   * @public
   *
   * @desc Get the item with the lowest priority
   *
   * @returns {Item} lowest priority item
   */
  get min(): Item {
    return this._queue[this._queue.length - 1];
  }

  /**
   * @public
   *
   * @alias min
   *
   * @desc Get the item with the lowest priority
   *
   * @returns {Item} lowest priority item
   */
  get low(): Item {
    return this.min;
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
   * @param {Item} value - item to insert
   * @param {number} [priority = 0] - priority of item (higher value === higher priority)
   * @returns {number} size after insert
   */
  insert(value: Item, priority: number = 0): number {
    if (typeof priority !== PrimitiveType.NUMBER) {
      throw new Error(`Unable to insert non-number priority: ${priority}`);
    }

    // TODO: use a heap
    this._queue.push(new QueueNode(value, priority));
    this._queue.sort(this._comparator);

    return this.size;
  }

  /**
   * @public
   *
   * @desc Remove and return the item with the highest priority
   *
   * @returns {Item} highest priority item
   */
  deleteMax(): Item {
    return this._queue.shift();
  }

  /**
   * @public
   *
   * @alias deleteMax
   *
   * @desc Remove and return the item with the highest priority
   *
   * @returns {Item} highest priority item
   */
  deleteHigh(): Item {
    return this.deleteMax();
  }

  /**
   * @public
   *
   * @desc Remove and return the item with the lowest priority
   *
   * @returns {Item} lowest priority item
   */
  deleteMin(): Item {
    return this._queue.pop();
  }

  /**
   * @public
   *
   * @alias deleteMin
   *
   * @desc Remove and return the item with the lowest priority
   *
   * @returns {Item} lowest priority item
   */
  deleteLow(): Item {
    return this.deleteMin();
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

export { PriorityQueue };
