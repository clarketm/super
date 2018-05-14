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
   * @module super/string
   */

  /**
   *
   * String with superpowers! 💪
   *
   * @public
   *
   */
  var _String = function (_extendableBuiltin2) {
    _inherits(_String, _extendableBuiltin2);

    /**
     * @public
     *
     * @desc Construct a String
     *
     * @param {string} string
     */
    function _String(string) {
      _classCallCheck(this, _String);

      return _possibleConstructorReturn(this, (_String.__proto__ || Object.getPrototypeOf(_String)).call(this, string));
    }

    /**
     * @public
     *
     * @desc Transposes the ordering of all characters in the string
     *
     * @returns {string} String reversed
     */


    _createClass(_String, [{
      key: "reverse",
      value: function reverse() {
        return this.split("").filter(function (s) {
          return s;
        }).reverse().join("");
      }

      /**
       * @public
       *
       * @desc Transposes the ordering of the words in the string
       *
       * @returns {string} String with words reversed
       */

    }, {
      key: "reverseWords",
      value: function reverseWords() {
        return this.split(" ").filter(function (s) {
          return s;
        }).reverse().join(" ");
      }

      /**
       * @public
       *
       * @desc Convert a string to title case
       *
       * @returns {string} Title cased string representation
       */

    }, {
      key: "toTitleCase",
      value: function toTitleCase() {
        return this.split(" ").map(function (v) {
          return v && v.charAt(0).toUpperCase() + v.substr(1).toLowerCase();
        }).join(" ");
      }
    }]);

    return _String;
  }(_extendableBuiltin(String));

  exports.String = _String;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
