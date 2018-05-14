/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Math = {})));
}(this, (function (exports) { 'use strict';

  /**
   * 
   * @module super/math
   */

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

  exports._Math = _Math;
  exports.Math = _Math;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
