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

  // 

  /**
   * @module super/object
   *
   */

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

  /**
   * @typedef {null|undefined|boolean|number|string|Symbol|Function|Array|Date|Object} Item
   */

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
  var _Object = (function (Object) {
    function _Object(object) {
      Object.call(this, object);
    }

    if ( Object ) _Object.__proto__ = Object;
    _Object.prototype = Object.create( Object && Object.prototype );
    _Object.prototype.constructor = _Object;

    /**
     * @public
     *
     * @desc Check for nested value from string key
     *
     * @param {string} path
     * @return {boolean} property value exists
     */
    _Object.prototype.hasNested = function hasNested (path) {
      var item = this;
      // TODO: throw error on invalid path
      path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

      var keys = path.split(".");
      for (var i = 0, list = keys; i < list.length; i += 1) {
        var key = list[i];

        if (typeof item === PrimitiveType.OBJECT && key in item) { item = item[key]; }
        else { return false; }
      }
      return true;
    };

    /**
     * @public
     *
     * @desc  Get nested JavaScript object value from string key
     *
     * @param {string} path
     * @return {Item} property value
     */
    _Object.prototype.getNested = function getNested (path) {
      var item = this;
      // TODO: throw error on invalid path
      path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

      var keys = path.split(".");
      for (var i = 0, list = keys; i < list.length; i += 1) {
        var key = list[i];

        if (typeof item === PrimitiveType.OBJECT && key in item) { item = item[key]; }
        else { return; }
      }
      return item;
    };

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
    _Object.prototype.clone = function clone (config) {
      if ( config === void 0 ) config = {};

      var includeNonEnumerable = config.includeNonEnumerable; if ( includeNonEnumerable === void 0 ) includeNonEnumerable = false;

      /**
       * @private
       *
       * @desc Deep clone helper
       *
       * @param {Item} item
       * @returns {any} cloned item
       */
      function _clone(item) {
        if (item === null || typeof item !== PrimitiveType.OBJECT) {
          return item;
        }

        if (item instanceof InstanceType.DATE) {
          return new Date(item.valueOf());
        }

        if (item instanceof InstanceType.ARRAY) {
          var copy = [];

          item.forEach(function (_, i) { return (copy[i] = _clone(item[i])); });

          return copy;
        }

        if (item instanceof InstanceType.OBJECT) {
          var copy$1 = {};

          Object.getOwnPropertySymbols(item).forEach(function (s) { return (copy$1[s] = _clone(item[s])); });

          if (includeNonEnumerable) {
            Object.getOwnPropertyNames(item).forEach(function (k) { return (copy$1[k] = _clone(item[k])); });
          } else {
            Object.keys(item).forEach(function (k) { return (copy$1[k] = _clone(item[k])); });
          }

          return copy$1;
        }

        throw new Error(("Unable to copy object: " + item));
      }

      return _clone(this, config);
    };

    return _Object;
  }(Object));

  exports.default = _Object;
  exports.Object = _Object;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
