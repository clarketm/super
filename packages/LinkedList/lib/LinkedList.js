/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.LinkedList = {})));
}(this, (function (exports) { 'use strict';

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * 
   * @module super/linkedlist
   */

  /**
   *
   * ListNode
   *
   * @public
   *
   */
  var ListNode = function () {
    /**
     * @public
     *
     * @desc Construct a ListNode
     *
     * @param {Item} item - node value
     */
    function ListNode(item) {
      _classCallCheck(this, ListNode);

      this.value = item;
      this.prev = null;
      this.next = null;
    }

    /**
     * @public
     *
     * @desc Get the value of the node
     *
     * @returns {Item} node value
     */


    _createClass(ListNode, [{
      key: "value",
      get: function get() {
        return this._value;
      }

      /**
       * @public
       *
       * @desc Set the value of the node
       *
       */
      ,
      set: function set(value) {
        this._value = value;
      }

      /**
       * @public
       *
       * @desc Get the next node in list
       *
       * @returns {ListNode} next node
       */

    }, {
      key: "next",
      get: function get() {
        return this._next;
      }

      /**
       * @public
       *
       * @desc Set the next node in list
       *
       */
      ,
      set: function set(next) {
        this._next = next;
      }

      /**
       * @public
       *
       * @desc Get the previous node in list
       *
       * @returns {ListNode} previous node
       */

    }, {
      key: "prev",
      get: function get() {
        return this._prev;
      }

      /**
       * @public
       *
       * @desc Set the next node in list
       *
       */
      ,
      set: function set(prev) {
        this._prev = prev;
      }
    }]);

    return ListNode;
  }();

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   *
   * LinkedList with superpowers! 💪
   *
   * @public
   *
   */

  var LinkedList = function () {
    /**
     * @public
     *
     * @desc Construct a LinkedList
     *
     * @param {Iterable} iterable
     */
    function LinkedList() {
      var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _classCallCheck$1(this, LinkedList);

      var head = new ListNode(0);
      var prev = null;
      var curr = head;
      var size = 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          curr.next = new ListNode(item);
          curr = curr.next;

          curr.prev = prev;
          prev = curr;

          size++;
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

      this._size = size;
      this._head = head.next;
    }

    /**
     * @public
     *
     * @desc Get the head of the list
     *
     * @returns {ListNode} head node
     */


    _createClass$1(LinkedList, [{
      key: "toArray",


      // TODO:
      // add (item: Item)
      // searchNodeAt (position: number)
      // remove (position: number)

      /**
       * @public
       *
       * @desc Convert the node and next nodes (recursively) to an array
       *
       * @returns {Array} array representation of the list
       */
      value: function toArray() {
        var array = [];
        var node = this.head;

        while (node !== null) {
          array.push(node.value);
          node = node.next;
        }

        return array;
      }
    }, {
      key: "head",
      get: function get() {
        return this._head;
      }

      /**
       * @public
       *
       * @desc Get the size of the list
       *
       * @returns {number} number of nodes in the list
       */

    }, {
      key: "size",
      get: function get() {
        return this._size;
      }
    }]);

    return LinkedList;
  }();

  exports.LinkedList = LinkedList;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
