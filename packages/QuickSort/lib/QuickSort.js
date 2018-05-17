/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.QuickSort = {})));
}(this, (function (exports) { 'use strict';

  // 

  function _defaultComparator(a, b) {
    return a - b;
  }

  /**
   *
   * if a < b  , then return `true`
   * if b >= a , then return `false`
   *
   */
  function _compare(comparator) {
    //
    return function (a, b) {
      return comparator(a, b) < 0;
    };
  }

  function swap(arr, a, b) {
    if (a !== b) {
      var _ref = [arr[b], arr[a]];
      // $FlowFixMe

      arr[a] = _ref[0];
      arr[b] = _ref[1];
    }
  }

  function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * 
   * @module super/quicksort
   */

  var PartitionType = {
    LOMUTO: "lomuto",
    HOARE: "hoare"
  };

  var PivotType = {
    LOW: "low",
    HIGH: "high",
    MID: "mid",
    RANDOM: "rand"
  };

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
  function quickSort(arr) {
    var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparator;

    if (!(this instanceof Array) && !(arr instanceof Array)) {
      throw new Error("Array type is required");
    }

    var target = this instanceof Array ? this : arr.slice(0);
    var compare = _compare(comparator);

    // TODO: make customizable?
    var partitionType = PartitionType.HOARE;
    var pivotType = PivotType.RANDOM;

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
    function _quickSort(arr) {
      var low = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var high = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - 1;

      if (low < high) {
        var pivot = void 0;

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

  function partitionLomuto(arr, low, high, pivotType, compare) {
    function _partitionLomutoLow(arr, low, high) {
      var pivot = low;
      var i = low + 1;

      for (var j = low + 1; j <= high; j++) {
        if (compare(arr[j], arr[pivot])) {
          swap(arr, i, j);
          i++;
        }
      }
      swap(arr, i - 1, low);
      return i - 1;
    }
    function _partitionLomutoHigh(arr, low, high) {
      var pivot = high;
      var i = low - 1;

      for (var j = low; j < high; j++) {
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
  function partitionHoare(arr, low, high, pivotType, compare) {
    var pivot = void 0;

    switch (pivotType) {
      case PivotType.LOW:
        pivot = low;
        break;

      case PivotType.RANDOM:
        var random = randInt(low, high);
        swap(arr, random, low);
        pivot = low;
        break;

      case PivotType.MID:
      default:
        pivot = Math.trunc((low + high) / 2);
        break;
    }

    var i = low - 1;
    var j = high + 1;

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

  exports.quickSort = quickSort;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
