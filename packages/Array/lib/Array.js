/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Array = {})));
}(this, (function (exports) { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

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

  function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
      var instance = Reflect.construct(cls, Array.from(arguments));
      Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
      return instance;
    }

    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
      constructor: {
        value: cls,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });

    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(ExtendableBuiltin, cls);
    } else {
      ExtendableBuiltin.__proto__ = cls;
    }

    return ExtendableBuiltin;
  }

  /**
   * @typedef {Function} Callback
   */

  /**
   *
   * Array with superpowers! 💪
   *
   * @public
   *
   */

  var _Array = function (_extendableBuiltin2) {
    inherits(_Array, _extendableBuiltin2);

    /**
     * @public
     *
     * @desc Construct an Array
     *
     * @param {Array<Item>} iterable
     */
    function _Array() {
      var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      classCallCheck(this, _Array);

      var _this = possibleConstructorReturn(this, (_Array.__proto__ || Object.getPrototypeOf(_Array)).call(this));

      _this.push.apply(_this, toConsumableArray(iterable));
      return _this;
    }
    /**
     * @public
     *
     * @desc Maps each element using a mapping function, then flattens the result into a new array
     *
     * @param {Callback} callback - callback function
     * @returns {Array<Item>} A new array with each element being the result of the callback function and flattened to a depth of 1
     */


    createClass(_Array, [{
      key: "flatMap",
      value: function flatMap(callback) {
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

    }, {
      key: "flatten",
      value: function flatten() {
        var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        function _flatten(depth, arr) {
          if (depth <= 0) return arr;

          return arr.reduce(function (acc, val) {
            if (Array.isArray(val)) return acc.concat(_flatten(depth - 1, val));else return acc.concat(val);
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

    }, {
      key: "mergeSort",
      value: function mergeSort$$1(comparator) {
        // $FlowFixMe
        return mergeSort.call(this, null, comparator);
      }

      /**
       * @public
       *
       * @desc Sort using quick sort
       *
       * @param {Comparator} comparator - comparator function
       * @returns {Array<Item>} sorted array
       */

    }, {
      key: "quickSort",
      value: function quickSort$$1(comparator) {
        // $FlowFixMe
        return quickSort.call(this, null, comparator);
      }
    }]);
    return _Array;
  }(_extendableBuiltin(Array));

  exports.Array = _Array;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
