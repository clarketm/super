/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Set = {})));
}(this, (function (exports) { 'use strict';

  // 

  /**
   * @module super/set
   *
   */

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
  var _Set = (function (Set) {
    function _Set(iterable) {
      Set.call(this, iterable);
    }

    if ( Set ) _Set.__proto__ = Set;
    _Set.prototype = Object.create( Set && Set.prototype );
    _Set.prototype.constructor = _Set;

    /**
     * @public
     *
     * @desc Tests whether at least one element in the set passes the test implemented by the provided function
     *
     * @param {Callback} callback - callback function
     * @returns {boolean} true if the callback function returns a truthy value for any set element; otherwise, false
     */
    _Set.prototype.some = function some (callback) {
      var this$1 = this;

      var result;

      for (var i = 0, list = this$1.entries(); i < list.length; i += 1) {
        var ref = list[i];
        var value1 = ref[0];
        var value2 = ref[1];

        result = callback(value1, value2, this$1);
        if (result) { return true; }
      }

      return false;
    };

    /**
     * @public
     *
     * @desc Test whether all elements in the set pass the test implemented by the provided function
     *
     * @param {Callback} callback - callback function
     * @returns {boolean} true if the callback function returns a truthy value for every set element; otherwise, false
     */
    _Set.prototype.every = function every (callback) {
      var this$1 = this;

      var result;

      for (var i = 0, list = this$1.entries(); i < list.length; i += 1) {
        var ref = list[i];
        var value1 = ref[0];
        var value2 = ref[1];

        result = callback(value1, value2, this$1);
        if (!result) { return false; }
      }

      return true;
    };

    /**
     * @public
     *
     * @desc Subset of a set
     *
     * @param {Set} setB - SetB
     * @returns {boolean} setA is subset of setB
     */
    _Set.prototype.isSubset = function isSubset (setB) {
      var setA = this;

      for (var i = 0, list = setA; i < list.length; i += 1) {
        var v = list[i];

        if (!setB.has(v)) { return false; }
      }
      return true;
    };

    /**
     * @public
     *
     * @desc Superset of a set
     *
     * @param {Set} setB - SetB
     * @returns {boolean} setA is superset of setB
     */
    _Set.prototype.isSuperset = function isSuperset (setB) {
      var setA = this;

      for (var i = 0, list = setB; i < list.length; i += 1) {
        var v = list[i];

        if (!setA.has(v)) { return false; }
      }
      return true;
    };

    /**
     * @public
     *
     * @desc Union of setA and setB
     *
     * @param {Set} setB - SetB
     * @returns {Set} setC - union between setA and setB
     */
    _Set.prototype.union = function union (setB) {
      var setA = this;
      var setC = new Set(setA);

      for (var i = 0, list = setB; i < list.length; i += 1) {
        var v = list[i];

        setC.add(v);
      }

      return setC;
    };

    /**
     * @public
     *
     * @desc Intersection of setA and setB
     *
     * @param {Set} setB - SetB
     * @returns {Set} setC - intersection between setA and setB
     */
    _Set.prototype.intersection = function intersection (setB) {
      var setA = this;
      var setC = new Set();

      for (var i = 0, list = setB; i < list.length; i += 1) {
        var v = list[i];

        if (setA.has(v)) { setC.add(v); }
      }

      return setC;
    };

    /**
     * @public
     *
     * @desc Difference of setA and setB
     *
     * @param {Set} setB - SetB
     * @returns {Set} setC - difference between setA and setB
     */
    _Set.prototype.difference = function difference (setB) {
      var setA = this;
      var setC = new Set(setA);

      for (var i = 0, list = setB; i < list.length; i += 1) {
        var v = list[i];

        setC.delete(v);
      }

      return setC;
    };

    /**
     * @public
     *
     * @desc Symmetric difference of setA and setB
     *
     * @param {Set} setB - SetB
     * @returns {Set} setC - difference difference between setA and setB
     */
    _Set.prototype.symmetricDifference = function symmetricDifference (setB) {
      var setA = this;
      var setC = new Set(setA);

      for (var i = 0, list = setB; i < list.length; i += 1) {
        var v = list[i];

        if (setA.has(v)) { setC.delete(v); }
        else { setC.add(v); }
      }

      return setC;
    };

    return _Set;
  }(Set));

  exports.default = _Set;
  exports.Set = _Set;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
