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

  // 

  /**
   * @module super/array
   *
   */

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
  var _Array = (function (Array) {
    function _Array(iterable) {
      var ref;

      if ( iterable === void 0 ) iterable = [];
      Array.call(this);
      (ref = this).push.apply(ref, iterable);
    }

    if ( Array ) _Array.__proto__ = Array;
    _Array.prototype = Object.create( Array && Array.prototype );
    _Array.prototype.constructor = _Array;
    /**
     * @public
     *
     * @desc Maps each element using a mapping function, then flattens the result into a new array
     *
     * @param {Callback} callback - callback function
     * @returns {Array} A new array with each element being the result of the callback function and flattened to a depth of 1
     */
    _Array.prototype.flatMap = function flatMap (callback) {
      return this.map(callback).flatten();
    };
    /**
     * @public
     *
     * @desc Creates a new array with all sub-array elements concatted into it recursively up to the specified depth
     *
     * @param {number} depth - flatten depth
     * @returns {Array}  new array with the sub-array elements concatted into it.
     */
    _Array.prototype.flatten = function flatten (depth) {
      if ( depth === void 0 ) depth = 1;

      function _flatten(depth, arr) {
        if (depth <= 0) { return arr; }

        return arr.reduce(function (acc, val) {
          if (Array.isArray(val)) { return acc.concat(_flatten(depth - 1, val)); }
          else { return acc.concat(val); }
        }, []);
      }
      return _flatten(depth, this);
    };

    return _Array;
  }(Array));

  exports.Array = _Array;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
