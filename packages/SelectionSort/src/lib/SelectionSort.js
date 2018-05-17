/**
 * @flow
 * @module super/selectionsort
 */

import type { Comparator, Item } from "../../../shared/src/types";
import { _compareLessThan, _defaultComparator, swap } from "../../../shared/src/helpers";

/**
 *
 * SelectionSort with superpowers! 💪
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
function selectionSort(arr: Array<Item>, comparator: Comparator = _defaultComparator) {
  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  let target = this instanceof Array ? this : arr.slice(0);
  let compare = _compareLessThan(comparator);

  /**
   *
   * SelectionSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @returns {Array<Item>} sorted array
   */
  function _selectionSort(arr: Array<Item>): Array<Item> {
    for (let i = 0; i < arr.length - 1; i++) {
      let min = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (compare(arr[j], arr[min])) {
          min = j;
        }
      }
      swap(arr, i, min);
    }

    return arr;
  }

  return _selectionSort(target);
}

export { selectionSort };
