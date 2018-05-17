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

  function _compare(comparator) {
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
   * @param {Array<Item>} arr – array to sort
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
     * @param {Array<Item>} arr – array target
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
   * @param {Array<Item>} arr – array merge target
   * @param {Array<Item>} leftArr – left array to merge
   * @param {Array<Item>} rightArr – right array to merge
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
     * @param {Iterable} iterable
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
     * @returns {Array} A new array with each element being the result of the callback function and flattened to a depth of 1
     */


    createClass(_Array, [{
      key: "flatMap",
      value: function flatMap(callback) {
        return this.map(callback).flatten();
      }
      /**
       * @public
       *
       * @desc Creates a new array with all sub-array elements concatted into it recursively up to the specified depth
       *
       * @param {number} depth - flatten depth
       * @returns {Array}  new array with the sub-array elements concatted into it.
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
        return _flatten(depth, this);
      }

      /**
       * @public
       *
       * @desc Sort inplace using merge sort
       *
       */

    }, {
      key: "mergeSort",
      value: function mergeSort$$1(comparator) {
        return mergeSort.call(this, null, comparator);
      }
    }]);
    return _Array;
  }(_extendableBuiltin(Array));

  exports.Array = _Array;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
