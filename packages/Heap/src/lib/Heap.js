/**
 * @flow
 * @module super/heap
 */

import type { Comparator, Item } from "../../../shared/src/types";
import { _compareLessThan, swap } from "../../../shared/src/helpers";

/**
 *
 * Heap with superpowers! 💪
 *
 * @public
 *
 */
class Heap {
  static HeapType = {
    MIN: (a: Item, b: Item): number => a - b,
    MAX: (a: Item, b: Item): number => b - a
  };

  /** @private */
  _heap: Array<Item>;

  /** @private */
  _compare: Comparator;

  /**
   * @public
   *
   * @desc Construct a Heap
   *
   * @param {Array<Item>} iterable
   * @param {Comparator} comparator
   */
  constructor(iterable: Array<Item> = [], comparator: Comparator) {
    this._heap = [...iterable];
    this._compare = _compareLessThan(comparator || Heap.HeapType.MIN);

    for (let i = Math.floor(iterable.length / 2); i >= 0; i--) {
      this._percolateDown(i);
    }
  }

  /**
   * @private
   *
   * @desc Get the parent item in the heap (i.e. (i-1)/2)
   *
   * @param {number} index
   * @returns {Item} _parent item
   */
  static _parent(index: number): Item {
    return Math.floor((index - 1) / 2);
  }

  /**
   * @private
   *
   * @desc Get the left child (i.e. 2*i+1)
   *
   * @param {number} index
   * @returns {Item} _left child
   */
  static _left(index: number): Item {
    return 2 * index + 1;
  }

  /**
   * @private
   *
   * @desc Get the right child (i.e. 2*i+2)
   *
   * @param {number} index
   * @returns {Item} _left child
   */
  static _right(index: number): Item {
    return 2 * index + 2;
  }

  /**
   * @public
   *
   * @desc Get the current size of the heap
   *
   * @returns {number} size of the heap
   */
  get size(): number {
    return this._heap.length;
  }

  /**
   * @public
   *
   * @desc Get the maximum item in heap
   *
   * @returns {Item} maximum item
   */
  get max(): Item {
    return this._heap[0];
  }

  /**
   * @public
   *
   * @alias max
   *
   * @desc Get the minimum item in heap
   *
   * @returns {Item} minimum item
   */
  get min(): Item {
    return this.max;
  }

  /**
   * @public
   *
   * @desc Check if heap is empty
   *
   * @returns {boolean} is heap empty
   */
  isEmpty(): boolean {
    return this._heap.length === 0;
  }

  /**
   * @public
   *
   * @desc Clear the items from the heap
   *
   * @returns {void}
   */
  clear() {
    this._heap.length = 0;
  }

  /**
   * @public
   *
   * @desc Insert an item into the heap
   *
   * @param {Item} value - item to insert
   * @returns {number} size after insert
   */
  insert(value: Item): number {
    this._heap.push(value);
    this._percolateUp(this.size - 1);
    return this.size;
  }

  /**
   * @public
   *
   * @desc Remove and return the maximum item
   *
   * @returns {Item} maximum item
   */
  deleteMax() {
    let _return = this._heap[0];
    let _min = this._heap.pop();
    if (this._heap.length > 1) this._heap[0] = _min;
    this._percolateDown(0);
    return _return;
  }

  /**
   * @public
   *
   * @alias deleteMax
   *
   * @desc Remove and return the minimum item
   *
   * @returns {Item} minimum item
   */
  deleteMin() {
    return this.deleteMax();
  }

  /**
   * @private
   *
   * @desc Heapify down
   *
   * @param {number} index - start index
   */
  _percolateDown(index: number) {
    let left = Heap._left(index);
    let right = Heap._right(index);
    let root = index;

    if (left < this.size && this._compare(this._heap[left], this._heap[index])) {
      root = left;
    }

    if (right < this.size && this._compare(this._heap[right], this._heap[root])) {
      root = right;
    }

    if (root !== index) {
      swap(this._heap, index, root);
      this._percolateDown(root);
    }
  }

  /**
   * @private
   *
   * @desc Heapify up
   *
   * @param {number} index - start index
   */
  _percolateUp(index: number) {
    while (Heap._parent(index) >= 0) {
      let parent = Heap._parent(index);
      if (this._compare(this._heap[index], this._heap[parent])) {
        swap(this._heap, index, parent);
      }
      index = parent;
    }
  }

  /**
   * @public
   *
   * @desc Convert the heap to an array
   *
   * @returns {Array<Item>} array representation of the heap
   */
  toArray(): Array<Item> {
    return this._heap.slice(0);
  }
}

export { Heap };
