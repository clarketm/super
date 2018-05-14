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

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
   * 
   * @module super/number
   */

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
    _inherits(_Number, _extendableBuiltin2);

    /**
     * @public
     *
     * @desc Construct a Number
     *
     * @param {number} number
     */
    function _Number(number) {
      _classCallCheck(this, _Number);

      return _possibleConstructorReturn(this, (_Number.__proto__ || Object.getPrototypeOf(_Number)).call(this, number));
    }
    /**
     * @public
     *
     * @desc Convert a roman numeral to number
     *
     * @param {string} str - Roman numeral
     * @returns {number} Number representation of a roman numeral
     */


    _createClass(_Number, [{
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

              var _ref2 = _slicedToArray(_ref, 2);

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

              var _ref4 = _slicedToArray(_ref3, 2);

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
  }(_extendableBuiltin(Number));

  exports.Number = _Number;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
