/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.BubbleSort = {})));
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

  /**
   * 
   * @module super/bubblesort
   */

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
  function bubbleSort(arr) {
    var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparator;

    if (!(this instanceof Array) && !(arr instanceof Array)) {
      throw new Error("Array type is required");
    }

    var target = this instanceof Array ? this : arr.slice(0);
    var compare = _compare(comparator);

    /**
     *
     * BubbleSort helper
     *
     * @private
     *
     * @param {Array<Item>} arr - array target
     * @returns {Array<Item>} sorted array
     */
    function _bubbleSort(arr) {
      for (var i = 0; i < arr.length - 1; i++) {
        var _swap = false;
        for (var j = 0; j < arr.length - i - 1; j++) {
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

  exports.bubbleSort = bubbleSort;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
