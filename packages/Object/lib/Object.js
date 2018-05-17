/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Object = {})));
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

      // $FlowFixMe
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
      // $FlowFixMe

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

            // $FlowFixMe
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

        return _clone(this);
      }
    }]);
    return _Object;
  }(_extendableBuiltin(Object));

  exports.Object = _Object;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
