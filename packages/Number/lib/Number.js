/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Number = {})));
}(this, (function (exports) { 'use strict';

  // 

  /**
   * @module super/number
   *
   */

  var RomanNumeralToIntegerMap = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ]);

  var IntegerToRomanNumeralMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ]);

  /**
   *
   * Number with superpowers! 💪
   *
   * @public
   *
   */
  var _Number = (function (Number) {
    function _Number(number) {
      Number.call(this, number);
    }

    if ( Number ) _Number.__proto__ = Number;
    _Number.prototype = Object.create( Number && Number.prototype );
    _Number.prototype.constructor = _Number;
    /**
     * @public
     *
     * @desc Convert a roman numeral to number
     *
     * @param {string} str - Roman numeral
     * @returns {number} Number representation of a roman numeral
     */
    _Number.fromRomanNumeral = function fromRomanNumeral (str) {
      function _romanToInteger(num, result) {
        if ( result === void 0 ) result = 0;

        // TODO: reduce iterations
        for (var i = 0, list = RomanNumeralToIntegerMap; i < list.length; i += 1) {
          var ref = list[i];
          var roman = ref[0];
          var int = ref[1];

          if (num.slice(0, roman.length) === roman) {
            return _romanToInteger(num.slice(roman.length), result + int);
          }
        }
        return result;
      }
      return _romanToInteger(str);
    };
    /**
     * @public
     *
     * @desc Convert a number to roman numeral
     *
     * @returns {string} Roman numeral representation of number
     */
    _Number.prototype.toRomanNumeral = function toRomanNumeral () {
      function _integerToRoman(num, result) {
        if ( result === void 0 ) result = "";

        // TODO: reduce iterations
        for (var i = 0, list = IntegerToRomanNumeralMap; i < list.length; i += 1) {
          var ref = list[i];
          var int = ref[0];
          var roman = ref[1];

          if (num >= int) { return _integerToRoman(num - int, result + roman); }
        }
        return result;
      }
      return _integerToRoman(this);
    };

    return _Number;
  }(Number));

  exports.default = _Number;
  exports.Number = _Number;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
