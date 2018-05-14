/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Map = {})));
}(this, (function (exports) { 'use strict';

  // 


  /**
   * @module super/map
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
  var _Map = (function (Map) {
    function _Map(iterable) {
      Map.call(this, iterable);
    }

    if ( Map ) _Map.__proto__ = Map;
    _Map.prototype = Object.create( Map && Map.prototype );
    _Map.prototype.constructor = _Map;
    /**
     * @public
     *
     * @desc Tests whether at least one element in the map passes the test implemented by the provided function
     *
     * @param {Callback} callback - callback function
     * @returns {boolean} true if the callback function returns a truthy value for any map element; otherwise, false
     */
    _Map.prototype.some = function some (callback) {
      var this$1 = this;

      var result;

      for (var i = 0, list = this$1.entries(); i < list.length; i += 1) {
        var ref = list[i];
        var key = ref[0];
        var value = ref[1];

        result = callback(value, key, this$1);
        if (result) { return true; }
      }
      return false;
    };
    /**
     * @public
     *
     * @desc Test whether all elements in the map pass the test implemented by the provided function
     *
     * @param {Callback} callback - callback function
     * @returns {boolean} true if the callback function returns a truthy value for every map element; otherwise, false
     */
    _Map.prototype.every = function every (callback) {
      var this$1 = this;

      var result;

      for (var i = 0, list = this$1.entries(); i < list.length; i += 1) {
        var ref = list[i];
        var key = ref[0];
        var value = ref[1];

        result = callback(value, key, this$1);
        if (!result) { return false; }
      }
      return true;
    };
    /**
     * @public
     *
     * @desc Similar to get(), but will set key to defaultValue if key is not already in Map.
     *
     * @param {Item} key - Map key
     * @param {Item} defaultValue - the default value to set in Map if the key is not defined
     * @returns {Item} The value if the key is defined in Map; otherwise, the default value
     */
    _Map.prototype.setDefault = function setDefault (key, defaultValue) {
      if (this.has(key)) {
        return this.get(key);
      } else {
        this.set(key, defaultValue);
        return defaultValue;
      }
    };
    /**
     * @public
     *
     * @desc Convert Map to an Object
     *
     * @returns {object} Object representation of Map
     */
    _Map.prototype.toObject = function toObject () {
      return Array.from(this).reduce(function (obj, ref) {
        var key = ref[0];
        var value = ref[1];

        if (typeof key !== PrimitiveType.OBJECT) {
          obj[key] = value;
        }
        return obj;
      }, {});
    };

    return _Map;
  }(Map));

  exports.default = _Map;
  exports.Map = _Map;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
