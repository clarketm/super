/**
 * @flow
 * @module super/mergesort
 */

import type { Comparator, Item } from "../../../shared/src/types";
import { _compare, _defaultComparator } from "../../../shared/src/helpers";

/**
 *
 * MergeSort with superpowers! 💪
 *
 * time:    O(nlogn)
 * space:   O(n)
 *
 * @public
 *
 * @param {Array<Item>} arr - array to sort
 * @param {Comparator} comparator
 * @returns {Array<Item>} sorted array
 */
function mergeSort(arr: Array<Item>, comparator: Comparator = _defaultComparator) {
  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  let target = this instanceof Array ? this : arr.slice(0);
  let compare = _compare(comparator);

  /**
   *
   * MergeSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @returns {Array<Item>} merged array
   */
  function _mergeSort(arr: Array<Item>) {
    if (arr.length <= 1) return arr;

    let mid = Math.trunc(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    _mergeSort(leftArr);
    _mergeSort(rightArr);

    return merge(arr, leftArr, rightArr, compare);
  }

  return _mergeSort(target);
}

/**
 *
 * Merge helper
 *
 * @private
 *
 * @param {Array<Item>} arr - array merge target
 * @param {Array<Item>} leftArr - left array to merge
 * @param {Array<Item>} rightArr - right array to merge
 * @param {Comparator} compare
 * @returns {Array<Item>} merged array
 */
function merge(
  arr: Array<Item>,
  leftArr: Array<Item>,
  rightArr: Array<Item>,
  compare: Comparator
): Array<Item> {
  let i: number = 0;
  let j: number = 0;
  let k: number = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (compare(leftArr[i], rightArr[j])) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }

  return arr;
}

export { mergeSort };
