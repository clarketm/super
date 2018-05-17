/**
 * @flow
 * @module super/insertionsort
 */

import type { Comparator, Item } from "../../../shared/src/types";
import { _compare, _defaultComparator, swap } from "../../../shared/src/helpers";

/**
 *
 * InsertionSort with superpowers! 💪
 *
 * time:    O(n^2)
 * space:   O(1)
 *
 * @public
 *
 * @param {Array<Item>} arr - array to sort
 * @param {Comparator} comparator
 * @returns {Array<Item>} sorted array
 */
function insertionSort(arr: Array<Item>, comparator: Comparator = _defaultComparator) {
  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  let target = this instanceof Array ? this : arr.slice(0);
  let compare = _compare(comparator);

  /**
   *
   * InsertionSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @returns {Array<Item>} sorted array
   */
  function _insertionSort(arr: Array<Item>): Array<Item> {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i; j >= 0 && compare(arr[j + 1], arr[j]); j--) {
        swap(arr, j, j + 1);
      }
    }

    return arr;
  }

  return _insertionSort(target);
}

export { insertionSort };
