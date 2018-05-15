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

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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
      classCallCheck(this, ListNode);

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


    createClass(ListNode, [{
      key: "value",
      get: function get$$1() {
        return this._value;
      }

      /**
       * @public
       *
       * @desc Set the value of the node
       *
       */
      ,
      set: function set$$1(value) {
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
      get: function get$$1() {
        return this._next;
      }

      /**
       * @public
       *
       * @desc Set the next node in list
       *
       */
      ,
      set: function set$$1(next) {
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
      get: function get$$1() {
        return this._prev;
      }

      /**
       * @public
       *
       * @desc Set the next node in list
       *
       */
      ,
      set: function set$$1(prev) {
        this._prev = prev;
      }
    }]);
    return ListNode;
  }();

  /**
   * 
   * @module super/linkedlist
   */

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
      classCallCheck(this, LinkedList);

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
      this._tail = curr;
    }

    /**
     * @public
     *
     * @desc Get the head of the list
     *
     * @returns {ListNode} head node
     */


    createClass(LinkedList, [{
      key: "insert",


      /**
       * @public
       *
       * @desc Insert a node at a given position
       *
       * @param {number} position - position to insert node
       * @param {Item} value - value to insert into list
       * @returns {number} size after insertion
       */
      value: function insert(position, value) {
        if (position < 0) {
          return this.insert(Math.max(0, this.size + 1 - Math.abs(position)), value);
        }

        var prev = null;
        var curr = this.head;

        var p = 0;
        while (p < position && curr !== null) {
          prev = curr;
          curr = curr.next;
          p++;
        }

        var node = new ListNode(value);
        node.prev = prev;
        node.next = curr;

        if (prev) prev.next = node;else this._head = node;

        if (curr) curr.prev = node;else this._tail = node;

        this._size++;

        return this._size;
      }

      /**
       * @public
       *
       * @alias insert(0, value)
       *
       * @desc Prepend a node at the end of the list
       *
       * @param {Item} value - value to prepend to list
       */

    }, {
      key: "prepend",
      value: function prepend(value) {
        return this.insert(0, value);
      }

      /**
       * @public
       * @alias prepend
       */

    }, {
      key: "unshift",
      value: function unshift(value) {
        return this.prepend(value);
      }

      /**
       * @public
       *
       * @alias insert(list.size, value)
       *
       * @desc Append a node at the end of the list
       *
       * @param {Item} value - value to append to list
       */

    }, {
      key: "append",
      value: function append(value) {
        return this.insert(this.size, value);
      }

      /**
       * @public
       * @alias append
       */

    }, {
      key: "push",
      value: function push(value) {
        return this.append(value);
      }

      /**
       * @public
       *
       * @desc Remove a node at a given position
       *
       * @param {number} position - position to remove node
       * @returns {Item} removed item
       */

    }, {
      key: "remove",
      value: function remove(position) {
        var prev = null;
        var curr = this.head;

        var p = 0;
        while (p < position && curr !== null) {
          prev = curr;
          curr = curr.next;
          p++;
        }

        if (prev && curr && curr.next) {
          prev.next = curr.next;
          curr.next.prev = prev;
          this._size--;
        } else if (prev && curr) {
          prev.next = null;
          this._tail = prev;
          this._size--;
        } else if (curr && curr.next) {
          curr.next.prev = null;
          this._head = curr.next;
          this._size--;
        }

        return curr;
      }

      /**
       * @public
       *
       * @alias remove(0)
       *
       * @desc Shift a node from the front of list
       *
       * @returns {Item} shifted item
       */

    }, {
      key: "shift",
      value: function shift() {
        return this.remove(0);
      }

      /**
       * @public
       *
       * @alias remove(list.size - 1)
       *
       * @desc Pop a node from the rear of list
       *
       * @returns {Item} shifted item
       */

    }, {
      key: "pop",
      value: function pop() {
        return this.remove(this.size - 1);
      }

      // TODO:
      // searchNodeAt (position: number)

      /**
       * @public
       *
       * @desc Convert the node and next nodes (recursively) to an array
       *
       * @returns {Array} array representation of the list
       */

    }, {
      key: "toArray",
      value: function toArray$$1() {
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
      get: function get$$1() {
        return this._head;
      }

      /**
       * @public
       *
       * @desc Get the tail of the list
       *
       * @returns {ListNode} tail node
       */

    }, {
      key: "tail",
      get: function get$$1() {
        return this._tail;
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
      get: function get$$1() {
        return this._size;
      }
    }]);
    return LinkedList;
  }();

  exports.LinkedList = LinkedList;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
