/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Queue = {})));
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

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /**
   * 
   * @module super/queue
   */

  /**
   *
   * Queue with superpowers! 💪
   *
   * @public
   *
   */
  var Queue = function () {
    /**
     * @public
     *
     * @desc Construct a Queue
     *
     * @param {Iterable} iterable
     */
    function Queue() {
      var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      classCallCheck(this, Queue);

      this._queue = [].concat(toConsumableArray(iterable));
    }

    /**
     * @public
     *
     * @desc Get the current size of the queue
     *
     * @returns {number} size of the queue
     */


    createClass(Queue, [{
      key: "isEmpty",


      /**
       * @public
       *
       * @desc Check if queue is empty
       *
       * @returns {boolean} is queue empty
       */
      value: function isEmpty() {
        return this._queue.length === 0;
      }

      /**
       * @public
       *
       * @desc Clear the items from the queue
       *
       * @returns {void}
       */

    }, {
      key: "clear",
      value: function clear() {
        this._queue.length = 0;
      }

      /**
       * @public
       *
       * @desc Enqueue an item into the queue
       *
       * @param {Item} item - item to enqueue
       * @returns {number} length after enqueue
       */

    }, {
      key: "enqueue",
      value: function enqueue(item) {
        return this._queue.push(item);
      }

      /**
       * @public
       *
       * @desc Dequeue an item from the queue
       *
       * @returns {Item} dequeued item
       */

    }, {
      key: "dequeue",
      value: function dequeue() {
        return this._queue.shift();
      }

      /**
       * @public
       *
       * @desc Get the front item in the queue
       *
       * @returns {Item} front item
       */

    }, {
      key: "front",
      value: function front() {
        return this._queue[0];
      }

      /**
       * @public
       *
       * @desc Get the rear item in the queue
       *
       * @returns {Item} rear item
       */

    }, {
      key: "rear",
      value: function rear() {
        return this._queue[this._queue.length - 1];
      }

      /**
       * @public
       *
       * @desc Convert the queue to an array
       *
       * @returns {Array} array representation of the queue
       */

    }, {
      key: "toArray",
      value: function toArray$$1() {
        return this._queue.slice(0);
      }
    }, {
      key: "size",
      get: function get$$1() {
        return this._queue.length;
      }
    }]);
    return Queue;
  }();

  exports.Queue = Queue;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
