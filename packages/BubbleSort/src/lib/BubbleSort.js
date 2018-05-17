/**
 * @flow
 * @module super/bubblesort
 */

import type { Comparator, Item } from "../../../shared/src/types";
import { _compareLessThan, _defaultComparator, swap } from "../../../shared/src/helpers";

/**
 *
 * BubbleSort with superpowers! 💪
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
function bubbleSort(arr: Array<Item>, comparator: Comparator = _defaultComparator) {
  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  let target = this instanceof Array ? this : arr.slice(0);
  let compare = _compareLessThan(comparator);

  /**
   *
   * BubbleSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @returns {Array<Item>} sorted array
   */
  function _bubbleSort(arr: Array<Item>): Array<Item> {
    for (let i = 0; i < arr.length - 1; i++) {
      let _swap = false;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (compare(arr[j + 1], arr[j])) {
          _swap = true;
          swap(arr, j + 1, j);
        }
      }
      if (!_swap) break;
    }

    return arr;
  }

  return _bubbleSort(target);
}

export { bubbleSort };
