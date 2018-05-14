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

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  var _Array = function (_Array2) {
    _inherits(_Array, _Array2);

    /**
     * @public
     *
     * @desc Construct an Array
     *
     * @param {Iterable} iterable
     */
    function _Array() {
      var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _classCallCheck(this, _Array);

      var _this = _possibleConstructorReturn(this, (_Array.__proto__ || Object.getPrototypeOf(_Array)).call(this));

      _this.push.apply(_this, _toConsumableArray(iterable));
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


    _createClass(_Array, [{
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
  }(Array);

  exports.Array = _Array;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
