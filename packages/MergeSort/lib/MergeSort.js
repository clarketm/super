/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.MergeSort = {})));
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

  /**
   * 
   * @module super/mergesort
   */

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
  function mergeSort(arr) {
    var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparator;

    if (!(this instanceof Array) && !(arr instanceof Array)) {
      throw new Error("Array type is required");
    }

    var target = this instanceof Array ? this : arr.slice(0);
    var compare = _compare(comparator);

    /**
     *
     * MergeSort helper
     *
     * @private
     *
     * @param {Array<Item>} arr - array target
     * @returns {Array<Item>} merged array
     */
    function _mergeSort(arr) {
      if (arr.length <= 1) return arr;

      var mid = Math.trunc(arr.length / 2);
      var leftArr = arr.slice(0, mid);
      var rightArr = arr.slice(mid);

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
  function merge(arr, leftArr, rightArr, compare) {
    var i = 0;
    var j = 0;
    var k = 0;

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

  exports.mergeSort = mergeSort;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
