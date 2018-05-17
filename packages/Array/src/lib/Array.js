/**
 * @flow
 * @module super/array
 */

import type { Comparator, Item } from "../../../shared/src/types";
import { mergeSort } from "../../../MergeSort/src/lib/MergeSort";

/**
 * @typedef {Function} Callback
 */

type Callback = (value: any, index: number, array: Array<Item>) => Array<Item>;

/**
 *
 * Array with superpowers! 💪
 *
 * @public
 *
 */
class _Array extends Array<Item> {
  /**
   * @public
   *
   * @desc Construct an Array
   *
   * @param {Array<Item>} iterable
   */
  constructor(iterable: Array<Item> = []) {
    super();
    this.push(...iterable);
  }
  /**
   * @public
   *
   * @desc Maps each element using a mapping function, then flattens the result into a new array
   *
   * @param {Callback} callback - callback function
   * @returns {Array<Item>} A new array with each element being the result of the callback function and flattened to a depth of 1
   */
  flatMap(callback: Callback): Array<Item> {
    // $FlowFixMe
    return this.map(callback).flatten();
  }
  /**
   * @public
   *
   * @desc Creates a new array with all sub-array elements concatted into it recursively up to the specified depth
   *
   * @param {number} depth - flatten depth
   * @returns {Array<Item>}  new array with the sub-array elements concatted into it.
   */
  flatten(depth: number = 1): Array<Item> {
    function _flatten(depth: number, arr: Array<Item>) {
      if (depth <= 0) return arr;

      return arr.reduce((acc, val) => {
        if (Array.isArray(val)) return acc.concat(_flatten(depth - 1, val));
        else return acc.concat(val);
      }, []);
    }

    // $FlowFixMe
    return _flatten(depth, this);
  }

  /**
   * @public
   *
   * @desc Sort using merge sort
   *
   * @param {Comparator} comparator - comparator function
   * @returns {Array<Item>} sorted array
   */
  mergeSort(comparator: Comparator): Array<Item> {
    // $FlowFixMe
    return mergeSort.call(this, null, comparator);
  }
}

export { _Array as Array };
