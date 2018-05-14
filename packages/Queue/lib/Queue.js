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

  // 

  /**
   * @module super/queue
   *
   */

  /**
   * @typedef {null|undefined|boolean|number|string|Symbol|Function|Array|Date|Object} Item
   */

  /**
   *
   * Queue with superpowers! 💪
   *
   * @public
   *
   */
  var Queue = function Queue(iterable) {
    if ( iterable === void 0 ) iterable = [];

    this._queue = [].concat( iterable );
  };

  var prototypeAccessors = { size: { configurable: true } };

  /**
   * @public
   *
   * @desc Get the current length of the queue
   *
   * @returns {number} length of the queue
   */
  prototypeAccessors.size.get = function () {
    return this._queue.length;
  };

  /**
   * @public
   *
   * @desc Check if queue is empty
   *
   * @returns {boolean} is queue empty
   */
  Queue.prototype.isEmpty = function isEmpty () {
    return this._queue.length === 0;
  };

  /**
   * @public
   *
   * @desc Clear the items from the queue
   *
   * @returns {void}
   */
  Queue.prototype.clear = function clear () {
    this._queue.length = 0;
  };

  /**
   * @public
   *
   * @desc Enqueue an item into the queue
   *
   * @param {Item} item - item to enqueue
   * @returns {number} length after enqueue
   */
  Queue.prototype.enqueue = function enqueue (item) {
    return this._queue.push(item);
  };

  /**
   * @public
   *
   * @desc Dequeue an item from the queue
   *
   * @returns {Item} dequeued item
   */
  Queue.prototype.dequeue = function dequeue () {
    return this._queue.shift();
  };

  /**
   * @public
   *
   * @desc Get the front item in the queue
   *
   * @returns {Item} front item
   */
  Queue.prototype.front = function front () {
    return this._queue[0];
  };

  /**
   * @public
   *
   * @desc Get the rear item in the queue
   *
   * @returns {Item} rear item
   */
  Queue.prototype.rear = function rear () {
    return this._queue[this._queue.length - 1];
  };

  /**
   * @public
   *
   * @desc Convert the queue to an array
   *
   * @returns {Array} array representation of the queue
   */
  Queue.prototype.toArray = function toArray () {
    return this._queue.slice(0);
  };

  Object.defineProperties( Queue.prototype, prototypeAccessors );

  exports.default = Queue;
  exports.Queue = Queue;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
