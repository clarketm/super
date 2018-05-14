/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.String = {})));
}(this, (function (exports) { 'use strict';

  // 

  /**
   * @module super/string
   *
   */

  /**
   *
   * String with superpowers! 💪
   *
   * @public
   *
   */
  var _String = (function (String) {
    function _String(string) {
      String.call(this, string);
    }

    if ( String ) _String.__proto__ = String;
    _String.prototype = Object.create( String && String.prototype );
    _String.prototype.constructor = _String;

    /**
     * @public
     *
     * @desc Transposes the ordering of all characters in the string
     *
     * @returns {string} String reversed
     */
    _String.prototype.reverse = function reverse () {
      return this.split("")
        .filter(function (s) { return s; })
        .reverse()
        .join("");
    };

    /**
     * @public
     *
     * @desc Transposes the ordering of the words in the string
     *
     * @returns {string} String with words reversed
     */
    _String.prototype.reverseWords = function reverseWords () {
      return this.split(" ")
        .filter(function (s) { return s; })
        .reverse()
        .join(" ");
    };

    /**
     * @public
     *
     * @desc Convert a string to title case
     *
     * @returns {string} Title cased string representation
     */
    _String.prototype.toTitleCase = function toTitleCase () {
      return this.split(" ")
        .map(function (v) { return v && v.charAt(0).toUpperCase() + v.substr(1).toLowerCase(); })
        .join(" ");
    };

    return _String;
  }(String));

  exports.default = _String;
  exports.String = _String;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
