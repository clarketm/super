/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.PriorityQueue = {})));
}(this, (function (exports) { 'use strict';

  var PrimitiveType = {
    BOOLEAN: "boolean",
    FUNCTION: "function",
    NUMBER: "number",
    OBJECT: "object",
    STRING: "string",
    SYMBOL: "symbol",
    UNDEFINED: "undefined"
  };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

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

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   * 
   * @module super/priorityqueue
   */

  /**
   *
   * QueueNode
   *
   * @public
   *
   */
  var QueueNode = function () {
    /**
     * @public
     *
     * @desc Construct a PriorityQueue
     *
     * @param {Item} value - item value
     * @param {number} priority - priority of item
     */
    function QueueNode(value, priority) {
      classCallCheck(this, QueueNode);

      this._value = value;
      this._priority = priority;
    }

    /**
     * @public
     *
     * @desc Get the value of the node
     *
     * @returns {Item} node value
     */


    createClass(QueueNode, [{
      key: "value",
      get: function get$$1() {
        return this._value;
      }

      /**
       * @public
       *
       * @desc Get the priority of the node
       *
       * @returns {number} priority of item
       */

    }, {
      key: "priority",
      get: function get$$1() {
        return this._priority;
      }
    }]);
    return QueueNode;
  }();

  function isIterable(item) {
    try {
      return _typeof(item[Symbol.iterator]) === PrimitiveType.FUNCTION;
    } catch (e) {
      return false;
    }
  }

  /**
   * 
   * @module super/priorityqueue
   */

  /**
   * @typedef {Function} Comparator
   */

  /**
   *
   * PriorityQueue with superpowers! 💪
   *
   * @public
   *
   */

  var PriorityQueue = function () {
    /**
     * @public
     *
     * @desc Construct a PriorityQueue
     *
     * @param {Map<number,Item> | Array<[number, Item]> | Array<[Item]> | Array<{ priority: number, value: Item }>} iterable
     * @param {Comparator} comparator
     */
    function PriorityQueue() {
      var _this = this;

      var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
      var comparator = arguments[1];
      classCallCheck(this, PriorityQueue);

      this._queue = [];
      this._comparator = comparator ? PriorityQueue._wrapComparator(comparator) : PriorityQueue._defaultComparator;

      if (!(iterable instanceof Map)) {
        if (isIterable(iterable)) {
          if (Array.isArray(iterable[0])) {
            iterable = new Map(iterable);
          } else if (_typeof(iterable[0]) === PrimitiveType.OBJECT) {
            // } else if (Object.getPrototypeOf(iterable[0]) === Object.prototype) {
            iterable = new Map(iterable.map(function (_ref) {
              var value = _ref.value,
                  priority = _ref.priority;
              return [priority, value];
            }));
          } else {
            return iterable.forEach(function (v) {
              return _this.insert(v);
            });
          }
        } else {
          throw new Error("Unable to construct from non-iterable");
        }
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref2 = _step.value;

          var _ref3 = slicedToArray(_ref2, 2);

          var priority = _ref3[0];
          var value = _ref3[1];

          this.insert(value, priority);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    createClass(PriorityQueue, [{
      key: "isEmpty",


      /**
       * @public
       *
       * @desc Check if queue is empty
       *
       * @returns {boolean} is queue empty
       */
      value: function isEmpty() {
        return this._queue.length === 0;
      }

      /**
       * @public
       *
       * @desc Clear the items from the queue
       *
       * @returns {void}
       */

    }, {
      key: "clear",
      value: function clear() {
        this._queue.length = 0;
      }

      /**
       * @public
       *
       * @desc Enqueue an item into the queue
       *
       * @param {Item} value - item to insert
       * @param {number} [priority = 0] - priority of item (higher value === higher priority)
       * @returns {number} size after insert
       */

    }, {
      key: "insert",
      value: function insert(value) {
        var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if ((typeof priority === "undefined" ? "undefined" : _typeof(priority)) !== PrimitiveType.NUMBER) {
          throw new Error("Unable to insert non-number priority: " + priority);
        }

        // TODO: use a heap
        this._queue.push(new QueueNode(value, priority));
        this._queue.sort(this._comparator);

        return this.size;
      }

      /**
       * @public
       *
       * @desc Remove and return the item with the highest priority
       *
       * @returns {Item} highest priority item
       */

    }, {
      key: "deleteMax",
      value: function deleteMax() {
        return this._queue.shift();
      }

      /**
       * @public
       *
       * @alias deleteMax
       *
       * @desc Remove and return the item with the highest priority
       *
       * @returns {Item} highest priority item
       */

    }, {
      key: "deleteHigh",
      value: function deleteHigh() {
        return this.deleteMax();
      }

      /**
       * @public
       *
       * @desc Remove and return the item with the lowest priority
       *
       * @returns {Item} lowest priority item
       */

    }, {
      key: "deleteMin",
      value: function deleteMin() {
        return this._queue.pop();
      }

      /**
       * @public
       *
       * @alias deleteMin
       *
       * @desc Remove and return the item with the lowest priority
       *
       * @returns {Item} lowest priority item
       */

    }, {
      key: "deleteLow",
      value: function deleteLow() {
        return this.deleteMin();
      }

      /**
       * @public
       *
       * @desc Get the item with the highest priority
       *
       * @returns {Item} highest priority item
       */

    }, {
      key: "getMax",
      value: function getMax() {
        return this._queue[0];
      }

      /**
       * @public
       *
       * @alias getMax
       *
       * @desc Get the item with the highest priority
       *
       * @returns {Item} highest priority item
       */

    }, {
      key: "getHigh",
      value: function getHigh() {
        return this.getMax();
      }

      /**
       * @public
       *
       * @desc Get the item with the lowest priority
       *
       * @returns {Item} lowest priority item
       */

    }, {
      key: "getMin",
      value: function getMin() {
        return this._queue[this._queue.length - 1];
      }

      /**
       * @public
       *
       * @alias getMin
       *
       * @desc Get the item with the lowest priority
       *
       * @returns {Item} lowest priority item
       */

    }, {
      key: "getLow",
      value: function getLow() {
        return this.getMin();
      }

      /**
       * @public
       *
       * @desc Convert the queue to an array
       *
       * @returns {Array} array representation of the queue
       */

    }, {
      key: "toArray",
      value: function toArray$$1() {
        return this._queue.slice(0);
      }
    }, {
      key: "size",


      /**
       * @public
       *
       * @desc Get the current size of the queue
       *
       * @returns {number} size of the queue
       */
      get: function get$$1() {
        return this._queue.length;
      }
    }], [{
      key: "_wrapComparator",
      value: function _wrapComparator(comparator) {
        return function (a, b) {
          return comparator(a.value, b.value);
        };
      }

      /**
       * @private
       *
       * @desc Default comparator function to sort from:
       *       highest priority (max) -> lowest priority (min)
       *
       * @returns {number} size of the queue
       */

    }, {
      key: "_defaultComparator",
      value: function _defaultComparator(a, b) {
        return a.priority < b.priority;
      }
    }]);
    return PriorityQueue;
  }();

  exports.PriorityQueue = PriorityQueue;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
