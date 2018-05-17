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
    /** @private */

    /** @private */

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

  // 

  function isIterable(item) {
    try {
      return _typeof(item[Symbol.iterator]) === PrimitiveType.FUNCTION;
    } catch (e) {
      return false;
    }
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /** Built-in value references. */
  var _Symbol2 = _root.Symbol;

  var _Symbol = _Symbol2;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /** Built-in value references. */
  var getPrototype = _overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = _getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject;

  /**
   * 
   * @module super/priorityqueue
   */

  /**
   *
   * PriorityQueue with superpowers! 💪
   *
   * @public
   *
   */

  var PriorityQueue = function () {
    /** @private */

    /** @private */

    /**
     * @public
     *
     * @desc Construct a PriorityQueue
     *
     * @param {PriorityQueueIterable} iterable
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
            // $FlowFixMe
            iterable = new Map(iterable);
          } else if (isPlainObject_1(iterable[0])) {
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
       * @desc Convert the queue to an array
       *
       * @returns {Array<Item>} array representation of the queue
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

      /**
       * @public
       *
       * @desc Get the item with the highest priority
       *
       * @returns {Item} highest priority item
       */

    }, {
      key: "max",
      get: function get$$1() {
        return this._queue[0];
      }

      /**
       * @public
       *
       * @alias max
       *
       * @desc Get the item with the highest priority
       *
       * @returns {Item} highest priority item
       */

    }, {
      key: "high",
      get: function get$$1() {
        return this.max;
      }

      /**
       * @public
       *
       * @desc Get the item with the lowest priority
       *
       * @returns {Item} lowest priority item
       */

    }, {
      key: "min",
      get: function get$$1() {
        return this._queue[this._queue.length - 1];
      }

      /**
       * @public
       *
       * @alias min
       *
       * @desc Get the item with the lowest priority
       *
       * @returns {Item} lowest priority item
       */

    }, {
      key: "low",
      get: function get$$1() {
        return this.min;
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
      value: function _defaultComparator$$1(a, b) {
        return a.priority < b.priority;
      }
    }]);
    return PriorityQueue;
  }();

  exports.PriorityQueue = PriorityQueue;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
