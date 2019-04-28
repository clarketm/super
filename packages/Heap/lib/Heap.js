/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Heap = {})));
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

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  // 

  /**
   * if a < b  , then return `true`
   */
  function _compareLessThan(comparator) {
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
   * @module super/heap
   */

  /**
   *
   * Heap with superpowers! 💪
   *
   * @public
   *
   */

  var Heap = function () {

    /** @private */

    /** @private */

    /**
     * @public
     *
     * @desc Construct a Heap
     *
     * @param {Array<Item>} iterable
     * @param {Comparator} comparator
     */
    function Heap() {
      var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var comparator = arguments[1];
      classCallCheck(this, Heap);

      this._heap = [].concat(toConsumableArray(iterable));
      this._compare = _compareLessThan(comparator || Heap.HeapType.MIN);

      for (var i = Math.floor(iterable.length / 2); i >= 0; i--) {
        this._percolateDown(i);
      }
    }

    /**
     * @private
     *
     * @desc Get the parent item in the heap (i.e. (i-1)/2)
     *
     * @param {number} index
     * @returns {Item} _parent item
     */


    createClass(Heap, [{
      key: "isEmpty",


      /**
       * @public
       *
       * @desc Check if heap is empty
       *
       * @returns {boolean} is heap empty
       */
      value: function isEmpty() {
        return this._heap.length === 0;
      }

      /**
       * @public
       *
       * @desc Clear the items from the heap
       *
       * @returns {void}
       */

    }, {
      key: "clear",
      value: function clear() {
        this._heap.length = 0;
      }

      /**
       * @public
       *
       * @desc Insert an item into the heap
       *
       * @param {Item} value - item to insert
       * @returns {number} size after insert
       */

    }, {
      key: "insert",
      value: function insert(value) {
        this._heap.push(value);
        this._percolateUp(this.size - 1);
        return this.size;
      }

      /**
       * @public
       *
       * @desc Remove and return the maximum item
       *
       * @returns {Item} maximum item
       */

    }, {
      key: "deleteMax",
      value: function deleteMax() {
        var _return = this._heap[0];
        var _min = this._heap.pop();
        if (this._heap.length > 1) this._heap[0] = _min;
        this._percolateDown(0);
        return _return;
      }

      /**
       * @public
       *
       * @alias deleteMax
       *
       * @desc Remove and return the minimum item
       *
       * @returns {Item} minimum item
       */

    }, {
      key: "deleteMin",
      value: function deleteMin() {
        return this.deleteMax();
      }

      /**
       * @private
       *
       * @desc Heapify down
       *
       * @param {number} index - start index
       */

    }, {
      key: "_percolateDown",
      value: function _percolateDown(index) {
        var left = Heap._left(index);
        var right = Heap._right(index);
        var root = index;

        if (left < this.size && this._compare(this._heap[left], this._heap[index])) {
          root = left;
        }

        if (right < this.size && this._compare(this._heap[right], this._heap[root])) {
          root = right;
        }

        if (root !== index) {
          swap(this._heap, index, root);
          this._percolateDown(root);
        }
      }

      /**
       * @private
       *
       * @desc Heapify up
       *
       * @param {number} index - start index
       */

    }, {
      key: "_percolateUp",
      value: function _percolateUp(index) {
        while (Heap._parent(index) >= 0) {
          var parent = Heap._parent(index);
          if (this._compare(this._heap[index], this._heap[parent])) {
            swap(this._heap, index, parent);
          }
          index = parent;
        }
      }

      /**
       * @public
       *
       * @desc Convert the heap to an array
       *
       * @returns {Array<Item>} array representation of the heap
       */

    }, {
      key: "toArray",
      value: function toArray$$1() {
        return this._heap.slice(0);
      }
    }, {
      key: "size",


      /**
       * @public
       *
       * @desc Get the current size of the heap
       *
       * @returns {number} size of the heap
       */
      get: function get$$1() {
        return this._heap.length;
      }

      /**
       * @public
       *
       * @desc Get the maximum item in heap
       *
       * @returns {Item} maximum item
       */

    }, {
      key: "max",
      get: function get$$1() {
        return this._heap[0];
      }

      /**
       * @public
       *
       * @alias max
       *
       * @desc Get the minimum item in heap
       *
       * @returns {Item} minimum item
       */

    }, {
      key: "min",
      get: function get$$1() {
        return this.max;
      }
    }], [{
      key: "_parent",
      value: function _parent(index) {
        return Math.floor((index - 1) / 2);
      }

      /**
       * @private
       *
       * @desc Get the left child (i.e. 2*i+1)
       *
       * @param {number} index
       * @returns {Item} _left child
       */

    }, {
      key: "_left",
      value: function _left(index) {
        return 2 * index + 1;
      }

      /**
       * @private
       *
       * @desc Get the right child (i.e. 2*i+2)
       *
       * @param {number} index
       * @returns {Item} _left child
       */

    }, {
      key: "_right",
      value: function _right(index) {
        return 2 * index + 2;
      }
    }]);
    return Heap;
  }();

  Heap.HeapType = {
    MIN: function MIN(a, b) {
      return a - b;
    },
    MAX: function MAX(a, b) {
      return b - a;
    }
  };

  exports.Heap = Heap;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
