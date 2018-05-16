/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.BinaryTree = {})));
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
   * @module super/binarytree
   */

  /**
   *
   * BinaryTreeNode
   *
   * @public
   *
   */
  var BinaryTreeNode = function () {
    /** @private */

    /** @private */

    /** @private */

    /**
     * @public
     *
     * @desc Construct a BinaryTreeNode
     *
     * @param {Item} value - node value
     */
    function BinaryTreeNode(value) {
      classCallCheck(this, BinaryTreeNode);

      this._value = value;
      this._left = null;
      this._right = null;
    }

    /**
     * @public
     *
     * @desc Get the value of the node
     *
     * @returns {Item} node value
     */


    createClass(BinaryTreeNode, [{
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
       * @desc Get the left child node
       *
       * @returns {BinaryTreeNode} left child node
       */

    }, {
      key: "left",
      get: function get$$1() {
        return this._left;
      }

      /**
       * @public
       *
       * @desc Set the left child node
       *
       */
      ,
      set: function set$$1(left) {
        this._left = left;
      }

      /**
       * @public
       *
       * @desc Get the right child node
       *
       * @returns {BinaryTreeNode} right child node
       */

    }, {
      key: "right",
      get: function get$$1() {
        return this._right;
      }

      /**
       * @public
       *
       * @desc Set the right child node
       *
       */
      ,
      set: function set$$1(right) {
        this._right = right;
      }
    }]);
    return BinaryTreeNode;
  }();

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
    /** @private */

    /**
     * @public
     *
     * @desc Construct a Queue
     *
     * @param {Iterable<any>} iterable
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
       * @returns {number} size after enqueue
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

      /**
       * @public
       *
       * @desc Get the front item in the queue
       *
       * @returns {Item} front item
       */

    }, {
      key: "front",
      get: function get$$1() {
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
      get: function get$$1() {
        return this._queue[this._queue.length - 1];
      }
    }]);
    return Queue;
  }();

  /**
   * 
   * @module super/binarytree
   */

  var TraversalType = {
    PRE_ORDER: "pre",
    IN_ORDER: "in",
    POST_ORDER: "post",
    LEVEL_ORDER: "level"
  };

  /**
   *
   * BinaryTree with superpowers! 💪
   *
   * @public
   *
   */

  var BinaryTree = function () {
    /** @private */

    /**
     * @public
     *
     * @desc Construct a BinaryTree
     *
     * @param {Iterable<number>} iterable
     */
    function BinaryTree() {
      var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      classCallCheck(this, BinaryTree);

      this._root = null;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          this.insert(item);
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
    }

    /**
     * @public
     *
     * @desc Get the root of the tree
     *
     * @returns {BinaryTreeNode} root node
     */


    createClass(BinaryTree, [{
      key: "getHeight",


      /**
       * @public
       *
       * @desc Get the height of the tree at node
       *
       * @param {BinaryTreeNode} node - root node
       * @returns {number} height of tree
       */
      value: function getHeight() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

        /**
         * @private
         *
         * @desc Height helper
         *
         * @param {BinaryTreeNode} node
         * @returns {number} height of tree
         */
        var _height = function _height(node) {
          if (!node) return 0;
          return Math.max(_height(node.left), _height(node.right)) + 1;
        };

        return _height(node);
      }

      /**
       * @public
       *
       * @desc Find minimum value in tree
       *
       * @param {BinaryTreeNode} node - root node
       * @returns {BinaryTreeNode} node
       */

    }, {
      key: "findMin",
      value: function findMin() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

        if (!node.left) return node;else return this.findMin(node.left);
      }

      /**
       * @public
       *
       * @desc Find maximum value in tree
       *
       * @param {BinaryTreeNode} node - root node
       * @returns {BinaryTreeNode} node
       */

    }, {
      key: "findMax",
      value: function findMax() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

        if (!node.right) return node;else return this.findMax(node.right);
      }

      /**
       * @public
       *
       * @desc Insert a value into the tree
       *
       * @param {Item} value - value to insert into the tree
       */

    }, {
      key: "insert",
      value: function insert(value) {
        var node = new BinaryTreeNode(value);

        if (!this.root) {
          this._root = node;
          return;
        }

        /**
         * @private
         *
         * @desc Insert helper
         *
         * @param {BinaryTreeNode} root
         */
        function _insert(root) {
          if (node.value < root.value) {
            if (root.left) {
              return _insert(root.left);
            } else {
              root.left = node;
            }
          } else if (node.value >= root.value) {
            if (root.right) {
              return _insert(root.right);
            } else {
              root.right = node;
            }
          }
        }

        _insert(this.root);
      }

      /**
       * @public
       *
       * @desc Search and retrieve a value from the tree
       *
       * @param {Item} value - value to search
       * @return {BinaryTreeNode} match node, or null if not found
       */

    }, {
      key: "search",
      value: function search(value) {
        if (!value) return null;

        /**
         * @private
         *
         * @desc Search helper
         *
         * @param {BinaryTreeNode} node
         * @return {BinaryTreeNode} match node
         */
        function _search(node) {
          if (!node) return null;

          if (value === node.value) {
            return node;
          } else if (value < node.value) {
            return _search(node.left);
          } else if (value >= node.value) {
            return _search(node.right);
          }
        }

        return _search(this.root);
      }

      /**
       * @public
       *
       * @desc Remove a value from the tree
       *
       * @param {Item} value - value to remove
       */

    }, {
      key: "remove",
      value: function remove(value) {
        var _this = this;

        /**
         * @private
         *
         * @desc Remove helper
         *
         * @param {BinaryTreeNode} node
         * @param {Item} value
         */
        var _remove = function _remove(node, value) {
          if (!node) return null;

          if (node.value === value) {
            if (!node.left && !node.right) {
              return null;
            } else if (!node.left) {
              return node.right;
            } else if (!node.right) {
              return node.left;
            } else {
              var aux = _this.findMin(node.right);
              node.value = aux.value;
              node.right = _remove(node.right, aux.value);
              return node;
            }
          } else if (value < node.value) {
            node.left = _remove(node.left, value);
            return node;
          } else if (value >= node.value) {
            node.right = _remove(node.right, value);
            return node;
          }
        };

        this._root = _remove(this.root, value);
      }

      /**
       * @public
       *
       * @desc Traverse the tree in preOrder traversal ordering
       *
       * @param {BinaryTreeNode} node - root node
       * @returns {Array<BinaryTreeNode>} array of nodes or values
       */

    }, {
      key: "preOrder",
      value: function preOrder() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

        var nodes = [];
        /**
         * @private
         *
         * @desc PreOrder helper
         *
         * @param {BinaryTreeNode} node
         */
        function _preOrder(node) {
          if (node) {
            nodes = [].concat(toConsumableArray(nodes), [node]);
            _preOrder(node.left);
            _preOrder(node.right);
          }
        }

        _preOrder(node);

        return nodes;
      }

      /**
       * @public
       *
       * @desc Traverse the tree in inOrder traversal ordering
       *
       * @param {BinaryTreeNode} node - root node
       * @returns {Array<BinaryTreeNode>} array of nodes or values
       */

    }, {
      key: "inOrder",
      value: function inOrder() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

        var nodes = [];
        /**
         * @private
         *
         * @desc inOrder helper
         *
         * @param {BinaryTreeNode} node
         */
        function _inOrder(node) {
          if (node) {
            _inOrder(node.left);
            nodes = [].concat(toConsumableArray(nodes), [node]);
            _inOrder(node.right);
          }
        }

        _inOrder(node);

        return nodes;
      }

      /**
       * @public
       *
       * @desc Traverse the tree in postOrder traversal ordering
       *
       * @param {BinaryTreeNode} node - root node
       * @returns {Array<BinaryTreeNode>} array of nodes or values
       */

    }, {
      key: "postOrder",
      value: function postOrder() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

        var nodes = [];
        /**
         * @private
         *
         * @desc PreOrder helper
         *
         * @param {BinaryTreeNode} node
         */
        function _postOrder(node) {
          if (node) {
            _postOrder(node.left);
            _postOrder(node.right);
            nodes = [].concat(toConsumableArray(nodes), [node]);
          }
        }

        _postOrder(node);

        return nodes;
      }

      /**
       * @public
       *
       * @desc Traverse the tree in levelOrder traversal ordering
       *
       * @param {BinaryTreeNode} node - root node
       * @returns {Array<BinaryTreeNode>} array of nodes or values
       */

    }, {
      key: "levelOrder",
      value: function levelOrder() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

        var nodes = [];

        var q = new Queue();
        q.enqueue(node);

        while (!q.isEmpty()) {
          var _node = q.dequeue();
          nodes.push(_node);

          if (_node.left) {
            q.enqueue(_node.left);
          }

          if (_node.right) {
            q.enqueue(_node.right);
          }
        }

        return nodes;
      }

      /**
       * @public
       *
       * @desc Convert the tree to an array
       *
       * @param {Traversal} traversal - method of traversal
       * @param {boolean} flatten - if false return nodes; if true return only values
       * @returns {Array<BinaryTreeNode | Item> } array representation of the list
       */

    }, {
      key: "toArray",
      value: function toArray$$1(traversal) {
        var flatten = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var nodes = void 0;

        switch (traversal) {
          default:
          case TraversalType.PRE_ORDER:
            nodes = this.preOrder(this.root);
            break;
          case TraversalType.IN_ORDER:
            nodes = this.inOrder(this.root);
            break;
          case TraversalType.POST_ORDER:
            nodes = this.postOrder(this.root);
            break;
          case TraversalType.LEVEL_ORDER:
            nodes = this.levelOrder(this.root);
            break;
        }

        return flatten ? nodes.map(function (v) {
          return v.value;
        }) : nodes;
      }
    }, {
      key: "root",
      get: function get$$1() {
        return this._root;
      }

      /**
       * @public
       *
       * @alias getHeight(root)
       *
       * @desc Get the height of the tree
       *
       * @returns {BinaryTreeNode} root node
       */

    }, {
      key: "height",
      get: function get$$1() {
        return this.getHeight(this.root);
      }
    }]);
    return BinaryTree;
  }();

  exports.TraversalType = TraversalType;
  exports.BinaryTree = BinaryTree;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
