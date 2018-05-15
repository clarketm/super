/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Super = {})));
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

  var InstanceType = {
    OBJECT: Object,
    ARRAY: Array,
    REGEXP: RegExp,
    DATE: Date
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

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

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
   * Map with superpowers! 💪
   *
   * @public
   *
   */

  var _Map = function (_extendableBuiltin2) {
    inherits(_Map, _extendableBuiltin2);

    /**
     * @public
     *
     * @desc Construct a Map
     *
     * @param {Iterable} iterable
     */
    function _Map(iterable) {
      classCallCheck(this, _Map);
      return possibleConstructorReturn(this, (_Map.__proto__ || Object.getPrototypeOf(_Map)).call(this, iterable));
    }
    /**
     * @public
     *
     * @desc Tests whether at least one element in the map passes the test implemented by the provided function
     *
     * @param {Callback} callback - callback function
     * @returns {boolean} true if the callback function returns a truthy value for any map element; otherwise, false
     */


    createClass(_Map, [{
      key: "some",
      value: function some(callback) {
        var result = void 0;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = slicedToArray(_ref, 2);

            var key = _ref2[0];
            var value = _ref2[1];

            result = callback(value, key, this);
            if (result) return true;
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

        return false;
      }
      /**
       * @public
       *
       * @desc Test whether all elements in the map pass the test implemented by the provided function
       *
       * @param {Callback} callback - callback function
       * @returns {boolean} true if the callback function returns a truthy value for every map element; otherwise, false
       */

    }, {
      key: "every",
      value: function every(callback) {
        var result = void 0;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref3 = _step2.value;

            var _ref4 = slicedToArray(_ref3, 2);

            var key = _ref4[0];
            var value = _ref4[1];

            result = callback(value, key, this);
            if (!result) return false;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return true;
      }
      /**
       * @public
       *
       * @desc Similar to get(), but will set key to defaultValue if key is not already in Map.
       *
       * @param {Item} key - Map key
       * @param {Item} defaultValue - the default value to set in Map if the key is not defined
       * @returns {Item} The value if the key is defined in Map; otherwise, the default value
       */

    }, {
      key: "setDefault",
      value: function setDefault(key, defaultValue) {
        if (this.has(key)) {
          return this.get(key);
        } else {
          this.set(key, defaultValue);
          return defaultValue;
        }
      }
      /**
       * @public
       *
       * @desc Convert Map to an Object
       *
       * @returns {object} Object representation of Map
       */

    }, {
      key: "toObject",
      value: function toObject() {
        return Array.from(this).reduce(function (obj, _ref5) {
          var _ref6 = slicedToArray(_ref5, 2),
              key = _ref6[0],
              value = _ref6[1];

          if ((typeof key === "undefined" ? "undefined" : _typeof(key)) !== PrimitiveType.OBJECT) {
            obj[key] = value;
          }
          return obj;
        }, {});
      }
    }]);
    return _Map;
  }(_extendableBuiltin(Map));

  function _extendableBuiltin$1(cls) {
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
    }]);
    return _Array;
  }(_extendableBuiltin$1(Array));

  /**
   *
   * Math with superpowers! 💪
   *
   * @public
   *
   * @alias Math
   */
  var _Math = Object.create(Math);

  /**
   * @public
   *
   * @desc Factorial
   *
   * @param {number} num - integral number
   * @returns {number} factorial of num
   */
  _Math.factorial = function (num) {
    if (num < 0) throw new Error("Factorial not defined for negative values");
    if (num === 0) return 1;
    return num * _Math.factorial(num - 1);
  };

  function _extendableBuiltin$2(cls) {
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

  var RomanNumeralToIntegerMap = new Map([["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]]);

  var IntegerToRomanNumeralMap = new Map([[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]);

  /**
   *
   * Number with superpowers! 💪
   *
   * @public
   *
   */

  var _Number = function (_extendableBuiltin2) {
    inherits(_Number, _extendableBuiltin2);

    /**
     * @public
     *
     * @desc Construct a Number
     *
     * @param {number} number
     */
    function _Number(number) {
      classCallCheck(this, _Number);
      return possibleConstructorReturn(this, (_Number.__proto__ || Object.getPrototypeOf(_Number)).call(this, number));
    }
    /**
     * @public
     *
     * @desc Convert a roman numeral to number
     *
     * @param {string} str - Roman numeral
     * @returns {number} Number representation of a roman numeral
     */


    createClass(_Number, [{
      key: "toRomanNumeral",

      /**
       * @public
       *
       * @desc Convert a number to roman numeral
       *
       * @returns {string} Roman numeral representation of number
       */
      value: function toRomanNumeral() {
        function _integerToRoman(num) {
          var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

          // TODO: reduce iterations
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = IntegerToRomanNumeralMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ref = _step.value;

              var _ref2 = slicedToArray(_ref, 2);

              var int = _ref2[0];
              var roman = _ref2[1];

              if (num >= int) return _integerToRoman(num - int, result + roman);
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

          return result;
        }
        return _integerToRoman(this);
      }
    }], [{
      key: "fromRomanNumeral",
      value: function fromRomanNumeral(str) {
        function _romanToInteger(num) {
          var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          // TODO: reduce iterations
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = RomanNumeralToIntegerMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _ref3 = _step2.value;

              var _ref4 = slicedToArray(_ref3, 2);

              var roman = _ref4[0];
              var int = _ref4[1];

              if (num.slice(0, roman.length) === roman) {
                return _romanToInteger(num.slice(roman.length), result + int);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return result;
        }
        return _romanToInteger(str);
      }
    }]);
    return _Number;
  }(_extendableBuiltin$2(Number));

  function _extendableBuiltin$3(cls) {
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
   * @typedef {object} Config
   * @property {boolean} [includeNonEnumerable=false]
   */

  /**
   *
   * Object with superpowers! 💪
   *
   * @public
   *
   */

  var _Object = function (_extendableBuiltin2) {
    inherits(_Object, _extendableBuiltin2);

    /**
     * @public
     *
     * @desc Construct an Object
     *
     * @param {Object} object
     */
    function _Object(object) {
      classCallCheck(this, _Object);
      return possibleConstructorReturn(this, (_Object.__proto__ || Object.getPrototypeOf(_Object)).call(this, object));
    }

    /**
     * @public
     *
     * @desc Check for nested value from string key
     *
     * @param {string} path
     * @return {boolean} property value exists
     */


    createClass(_Object, [{
      key: "hasNested",
      value: function hasNested(path) {
        var item = this;
        // TODO: throw error on invalid path
        path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

        var keys = path.split(".");
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === PrimitiveType.OBJECT && key in item) item = item[key];else return false;
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

        return true;
      }

      /**
       * @public
       *
       * @desc  Get nested JavaScript object value from string key
       *
       * @param {string} path
       * @return {Item} property value
       */

    }, {
      key: "getNested",
      value: function getNested(path) {
        var item = this;
        // TODO: throw error on invalid path
        path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

        var keys = path.split(".");
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === PrimitiveType.OBJECT && key in item) item = item[key];else return;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return item;
      }

      /**
       * @public
       *
       * @desc Deep clone an Object
       *
       * @param {Config} [config={}] Configuration object
       * @returns {object} Deep cloned Object
       *
       * @example
       *
       * const obj = new SuperObject({ key1: ["1", 1, true, (a, b) => a+b], [Symbol("key2")]: {s: "s"} });
       * const clone = obj.clone();
       *
       * console.log(clone);
       * // { key1: ["1", 1, true, (a, b) => a+b], Symbol("key2"): {s: "s"} }
       *
       */

    }, {
      key: "clone",
      value: function clone() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _config$includeNonEnu = config.includeNonEnumerable,
            includeNonEnumerable = _config$includeNonEnu === undefined ? false : _config$includeNonEnu;

        /**
         * @private
         *
         * @desc Deep clone helper
         *
         * @param {Item} item
         * @returns {any} cloned item
         */

        function _clone(item) {
          if (item === null || (typeof item === "undefined" ? "undefined" : _typeof(item)) !== PrimitiveType.OBJECT) {
            return item;
          }

          if (item instanceof InstanceType.DATE) {
            return new Date(item.valueOf());
          }

          if (item instanceof InstanceType.ARRAY) {
            var copy = [];

            item.forEach(function (_, i) {
              return copy[i] = _clone(item[i]);
            });

            return copy;
          }

          if (item instanceof InstanceType.OBJECT) {
            var _copy = {};

            Object.getOwnPropertySymbols(item).forEach(function (s) {
              return _copy[s] = _clone(item[s]);
            });

            if (includeNonEnumerable) {
              Object.getOwnPropertyNames(item).forEach(function (k) {
                return _copy[k] = _clone(item[k]);
              });
            } else {
              Object.keys(item).forEach(function (k) {
                return _copy[k] = _clone(item[k]);
              });
            }

            return _copy;
          }

          throw new Error("Unable to copy object: " + item);
        }

        return _clone(this, config);
      }
    }]);
    return _Object;
  }(_extendableBuiltin$3(Object));

  /**
   *
   * Queue with superpowers! 💪
   *
   * @public
   *
   */
  var Queue = function () {
    /**
     * @public
     *
     * @desc Construct a Queue
     *
     * @param {Iterable} iterable
     */
    function Queue() {
      var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      classCallCheck(this, Queue);

      this._queue = [].concat(toConsumableArray(iterable));
    }

    /**
     * @public
     *
     * @desc Get the current size of the queue
     *
     * @returns {number} size of the queue
     */


    createClass(Queue, [{
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
       * @param {Item} item - item to enqueue
       * @returns {number} size after enqueue
       */

    }, {
      key: "enqueue",
      value: function enqueue(item) {
        return this._queue.push(item);
      }

      /**
       * @public
       *
       * @desc Dequeue an item from the queue
       *
       * @returns {Item} dequeued item
       */

    }, {
      key: "dequeue",
      value: function dequeue() {
        return this._queue.shift();
      }

      /**
       * @public
       *
       * @desc Get the front item in the queue
       *
       * @returns {Item} front item
       */

    }, {
      key: "front",
      value: function front() {
        return this._queue[0];
      }

      /**
       * @public
       *
       * @desc Get the rear item in the queue
       *
       * @returns {Item} rear item
       */

    }, {
      key: "rear",
      value: function rear() {
        return this._queue[this._queue.length - 1];
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
      get: function get$$1() {
        return this._queue.length;
      }
    }]);
    return Queue;
  }();

  function _extendableBuiltin$4(cls) {
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
   * Set with superpowers! 💪
   *
   * @public
   *
   */
  var _Set = function (_extendableBuiltin2) {
    inherits(_Set, _extendableBuiltin2);

    /**
     * @public
     *
     * @desc Construct a Set
     *
     * @param {Iterable} iterable
     */
    function _Set(iterable) {
      classCallCheck(this, _Set);
      return possibleConstructorReturn(this, (_Set.__proto__ || Object.getPrototypeOf(_Set)).call(this, iterable));
    }

    /**
     * @public
     *
     * @desc Tests whether at least one element in the set passes the test implemented by the provided function
     *
     * @param {Callback} callback - callback function
     * @returns {boolean} true if the callback function returns a truthy value for any set element; otherwise, false
     */


    createClass(_Set, [{
      key: "some",
      value: function some(callback) {
        var result = void 0;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = slicedToArray(_ref, 2);

            var value1 = _ref2[0];
            var value2 = _ref2[1];

            result = callback(value1, value2, this);
            if (result) return true;
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

        return false;
      }

      /**
       * @public
       *
       * @desc Test whether all elements in the set pass the test implemented by the provided function
       *
       * @param {Callback} callback - callback function
       * @returns {boolean} true if the callback function returns a truthy value for every set element; otherwise, false
       */

    }, {
      key: "every",
      value: function every(callback) {
        var result = void 0;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref3 = _step2.value;

            var _ref4 = slicedToArray(_ref3, 2);

            var value1 = _ref4[0];
            var value2 = _ref4[1];

            result = callback(value1, value2, this);
            if (!result) return false;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return true;
      }

      /**
       * @public
       *
       * @desc Subset of a set
       *
       * @param {Set} setB - SetB
       * @returns {boolean} setA is subset of setB
       */

    }, {
      key: "isSubset",
      value: function isSubset(setB) {
        var setA = this;

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = setA[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var v = _step3.value;

            if (!setB.has(v)) return false;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return true;
      }

      /**
       * @public
       *
       * @desc Superset of a set
       *
       * @param {Set} setB - SetB
       * @returns {boolean} setA is superset of setB
       */

    }, {
      key: "isSuperset",
      value: function isSuperset(setB) {
        var setA = this;

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = setB[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var v = _step4.value;

            if (!setA.has(v)) return false;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        return true;
      }

      /**
       * @public
       *
       * @desc Union of setA and setB
       *
       * @param {Set} setB - SetB
       * @returns {Set} setC - union between setA and setB
       */

    }, {
      key: "union",
      value: function union(setB) {
        var setA = this;
        var setC = new Set(setA);

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = setB[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var v = _step5.value;

            setC.add(v);
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        return setC;
      }

      /**
       * @public
       *
       * @desc Intersection of setA and setB
       *
       * @param {Set} setB - SetB
       * @returns {Set} setC - intersection between setA and setB
       */

    }, {
      key: "intersection",
      value: function intersection(setB) {
        var setA = this;
        var setC = new Set();

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = setB[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var v = _step6.value;

            if (setA.has(v)) setC.add(v);
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        return setC;
      }

      /**
       * @public
       *
       * @desc Difference of setA and setB
       *
       * @param {Set} setB - SetB
       * @returns {Set} setC - difference between setA and setB
       */

    }, {
      key: "difference",
      value: function difference(setB) {
        var setA = this;
        var setC = new Set(setA);

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = setB[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var v = _step7.value;

            setC.delete(v);
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        return setC;
      }

      /**
       * @public
       *
       * @desc Symmetric difference of setA and setB
       *
       * @param {Set} setB - SetB
       * @returns {Set} setC - difference difference between setA and setB
       */

    }, {
      key: "symmetricDifference",
      value: function symmetricDifference(setB) {
        var setA = this;
        var setC = new Set(setA);

        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = setB[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var v = _step8.value;

            if (setA.has(v)) setC.delete(v);else setC.add(v);
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        return setC;
      }
    }]);
    return _Set;
  }(_extendableBuiltin$4(Set));

  function _extendableBuiltin$5(cls) {
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
   *
   * String with superpowers! 💪
   *
   * @public
   *
   */
  var _String = function (_extendableBuiltin2) {
    inherits(_String, _extendableBuiltin2);

    /**
     * @public
     *
     * @desc Construct a String
     *
     * @param {string} string
     */
    function _String(string) {
      classCallCheck(this, _String);
      return possibleConstructorReturn(this, (_String.__proto__ || Object.getPrototypeOf(_String)).call(this, string));
    }

    /**
     * @public
     *
     * @desc Transposes the ordering of all characters in the string
     *
     * @returns {string} String reversed
     */


    createClass(_String, [{
      key: "reverse",
      value: function reverse() {
        return this.split("").filter(function (s) {
          return s;
        }).reverse().join("");
      }

      /**
       * @public
       *
       * @desc Transposes the ordering of the words in the string
       *
       * @returns {string} String with words reversed
       */

    }, {
      key: "reverseWords",
      value: function reverseWords() {
        return this.split(" ").filter(function (s) {
          return s;
        }).reverse().join(" ");
      }

      /**
       * @public
       *
       * @desc Convert a string to title case
       *
       * @returns {string} Title cased string representation
       */

    }, {
      key: "toTitleCase",
      value: function toTitleCase() {
        return this.split(" ").map(function (v) {
          return v && v.charAt(0).toUpperCase() + v.substr(1).toLowerCase();
        }).join(" ");
      }
    }]);
    return _String;
  }(_extendableBuiltin$5(String));

  var version = "0.0.6-alpha";

  var Super = {
    version: version,
    Array: _Array,
    Map: _Map,
    Math: _Math,
    Number: _Number,
    Object: _Object,
    Queue: Queue,
    Set: _Set,
    String: _String
  };

  exports.default = Super;
  exports.version = version;
  exports.Array = _Array;
  exports.Map = _Map;
  exports.Math = _Math;
  exports.Number = _Number;
  exports.Object = _Object;
  exports.Queue = Queue;
  exports.Set = _Set;
  exports.String = _String;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
