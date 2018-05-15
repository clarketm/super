/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Trie = {})));
}(this, (function (exports) { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

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
   * @module super/trie
   */

  /**
   *
   * TrieNode
   *
   * @public
   *
   */
  var TrieNode = function () {
    /**
     * @public
     *
     * @desc Construct a TrieNode
     *
     * @param {character} char - node character value
     */
    function TrieNode() {
      var char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      classCallCheck(this, TrieNode);

      this._char = char;
      this._isCompleteWord = false;
      this._children = new Map();
    }

    /**
     * @public
     *
     * @desc Get children count of the node
     *
     * @returns {number} child count
     */
    // INFO: count or size?


    createClass(TrieNode, [{
      key: "hasChild",


      /**
       * @public
       *
       * @desc Check if node has a specific character as a child
       *
       * @returns {boolean} node has child
       */
      value: function hasChild(char) {
        return this._children.has(char);
      }

      /**
       * @public
       *
       * @desc Get child node with specific character value
       *
       * @param {character} char - character node to get
       * @returns {TrieNode} node with character value
       */

    }, {
      key: "getChild",
      value: function getChild(char) {
        return this._children.get(char);
      }

      /**
       * @public
       *
       * @desc Set child node with specific character value
       *
       * @param {character} char - character node to get
       * @param {TrieNode} node - node to assign to character
       */

    }, {
      key: "setChild",
      value: function setChild(char, node) {
        this._children.set(char, node);
      }
    }, {
      key: "count",
      get: function get$$1() {
        return this._children.size;
      }

      /**
       * @public
       *
       * @desc Get character value of node
       *
       * @returns {character} character
       */
      // INFO: char or value?

    }, {
      key: "char",
      get: function get$$1() {
        return this._char;
      }

      /**
       * @public
       *
       * @desc Checks if node is a complete word
       */

    }, {
      key: "isCompleteWord",
      get: function get$$1() {
        return this._isCompleteWord;
      }
    }]);
    return TrieNode;
  }();

  var PrimitiveType = {
    BOOLEAN: "boolean",
    FUNCTION: "function",
    NUMBER: "number",
    OBJECT: "object",
    STRING: "string",
    SYMBOL: "symbol",
    UNDEFINED: "undefined"
  };

  /**
   * 
   * @module super/trie
   */

  /**
   *
   * Trie with superpowers! 💪
   *
   * @public
   *
   */

  var Trie = function () {
    /**
     * @public
     *
     * @desc Construct a Trie
     *
     * @param {Iterable<string>} iterable
     */
    function Trie() {
      var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      classCallCheck(this, Trie);

      this._root = new TrieNode();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var str = _step.value;

          this.insert(str);
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
     * @desc Get the root of the trie
     *
     * @returns {TrieNode} root node
     */


    createClass(Trie, [{
      key: "insert",


      /**
       * @public
       *
       * @desc Insert a string into the trie
       *
       * @param {string} str - string to insert
       */
      value: function insert(str) {
        if ((typeof str === "undefined" ? "undefined" : _typeof(str)) !== PrimitiveType.STRING) {
          throw new Error("Unable to insert non-string value: " + str);
        }

        var curr = this.root;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = str[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var char = _step2.value;

            if (curr.hasChild(char)) {
              curr = curr.getChild(char);
            } else {
              var node = new TrieNode(char);
              curr.setChild(char, node);
              curr = node;
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

        curr._isCompleteWord = true;
      }

      // TODO:
      // remove (str: string)

      /**
       * @public
       *
       * @desc Search for a node in the trie matching the query
       *
       * @param {string} query - string query to search for
       * @returns {Match} match object
       */

    }, {
      key: "search",
      value: function search(query) {
        var node = this.root;
        var index = 0;

        while (index < query.length) {
          node = node.getChild(query[index]);
          if (!node) break;
          index++;
        }

        return {
          query: query,
          matchedChars: index,
          isMatch: query.length === index,
          isCompleteWord: query.length === index && node.isCompleteWord,
          node: node
        };
      }

      /**
       * @public
       *
       * @desc Check if the trie includes a word
       *
       * @param {string} word - full word to search for
       * @returns {boolean} contains the word
       */

    }, {
      key: "includes",
      value: function includes(word) {
        var _search = this.search(word),
            isCompleteWord = _search.isCompleteWord;

        return isCompleteWord;
      }

      /**
       * @public
       *
       * @alias includes(word)
       *
       * @desc Check if the trie contains a word
       *
       * @param {string} word - full word to search for
       * @returns {boolean} contains the word
       */

    }, {
      key: "contains",
      value: function contains(word) {
        return this.includes(word);
      }

      /**
       * @public
       *
       * @desc Check if the trie contains a prefix
       *
       * @param {string} prefix - prefix (i.e. partial word) to search for
       * @returns {boolean} contains the prefix
       */

    }, {
      key: "startsWith",
      value: function startsWith(prefix) {
        var _search2 = this.search(prefix),
            isMatch = _search2.isMatch;

        return isMatch;
      }
    }, {
      key: "root",
      get: function get$$1() {
        return this._root;
      }
    }]);
    return Trie;
  }();

  exports.Trie = Trie;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
