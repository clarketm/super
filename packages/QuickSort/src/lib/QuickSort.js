/**
 * @flow
 * @module super/quicksort
 */

import type { Comparator, Item } from "../../../shared/src/types";
import { _compareLessThan, _defaultComparator, swap, randInt } from "../../../shared/src/helpers";

const PartitionType = {
  LOMUTO: "lomuto",
  HOARE: "hoare"
};

const PivotType = {
  LOW: "low",
  HIGH: "high",
  MID: "mid",
  RANDOM: "rand"
};

type Partition = $Values<typeof PartitionType>;

type Pivot = $Values<typeof PivotType>;

/**
 *
 * QuickSort with superpowers! 💪
 *
 * time:    O(nlogn)
 * space:   O(nlogn)
 *
 * @public
 *
 * @param {Array<Item>} arr - array to sort
 * @param {Comparator} comparator
 * @returns {Array<Item>} sorted array
 */
function quickSort(arr: Array<Item>, comparator: Comparator = _defaultComparator) {
  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  let target = this instanceof Array ? this : arr.slice(0);
  let compare = _compareLessThan(comparator);

  // TODO: make customizable?
  let partitionType: Partition = PartitionType.HOARE;
  let pivotType: Pivot = PivotType.MID;

  /**
   *
   * QuickSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @param {number} low
   * @param {number} high
   * @returns {Array<Item>} sorted partition
   */
  function _quickSort(
    arr: Array<Item>,
    low: number = 0,
    high: number = arr.length - 1
  ): Array<Item> {
    if (low < high) {
      let pivot;

      switch (partitionType) {
        case PartitionType.LOMUTO:
          pivot = partitionLomuto(arr, low, high, pivotType, compare);
          _quickSort(arr, low, pivot - 1);
          break;
        case PartitionType.HOARE:
        default:
          pivot = partitionHoare(arr, low, high, pivotType, compare);
          _quickSort(arr, low, pivot);
          break;
      }

      _quickSort(arr, pivot + 1, high);
    }
    return arr;
  }

  return _quickSort(target);
}

/**
 *
 * Partition (Lomuto)
 *
 * @param {Array<number>} arr
 * @param {number} low
 * @param {number} high
 * @param {PivotType} pivotType
 * @param {Comparator} compare
 * @return {number} pivot
 */

function partitionLomuto(
  arr: Array<Item>,
  low: number,
  high: number,
  pivotType: Pivot,
  compare: Comparator
): Item {
  function _partitionLomutoLow(arr: Array<Item>, low: number, high: number): Item {
    let pivot = low;
    let i = low + 1;

    for (let j = low + 1; j <= high; j++) {
      if (compare(arr[j], arr[pivot])) {
        swap(arr, i, j);
        i++;
      }
    }
    swap(arr, i - 1, low);
    return i - 1;
  }
  function _partitionLomutoHigh(arr: Array<Item>, low: number, high: number): Item {
    let pivot = high;
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (compare(arr[j], arr[pivot])) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, high);
    return i + 1;
  }

  switch (pivotType) {
    case PivotType.LOW:
      return _partitionLomutoLow(arr, low, high);

    case PivotType.HIGH:
    default:
      return _partitionLomutoHigh(arr, low, high);
  }
}

/**
 *
 * Partition (Hoare)
 * it is more efficient than the Lomuto partition scheme
 * because it does three times fewer swaps on average
 *
 * @param {Array<number>} arr
 * @param {number} low
 * @param {number} high
 * @param {string} pivotType
 * @param {Comparator} compare
 * @return {number} pivot
 */
function partitionHoare(
  arr: Array<Item>,
  low: number,
  high: number,
  pivotType: Pivot,
  compare: Comparator
): Item {
  let pivot;

  switch (pivotType) {
    case PivotType.LOW:
      pivot = low;
      break;

    case PivotType.RANDOM:
      let random = randInt(low, high);
      swap(arr, random, low);
      pivot = low;
      break;

    case PivotType.MID:
    default:
      let mid = Math.trunc((low + high) / 2);
      swap(arr, mid, low);
      pivot = low;
      break;
  }

  let i = low - 1;
  let j = high + 1;

  while (true) {
    do {
      i++;
    } while (compare(arr[i], arr[pivot]));
    do {
      j--;
    } while (compare(arr[pivot], arr[j]));
    if (i >= j) {
      return j;
    }
    swap(arr, i, j);
  }
}

export { quickSort };
