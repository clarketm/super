/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var PrimitiveType = {
  BOOLEAN: "boolean",
  FUNCTION: "function",
  NUMBER: "number",
  OBJECT: "object",
  STRING: "string",
  SYMBOL: "symbol",
  UNDEFINED: "undefined"
};

var InstanceType = {
  OBJECT: Object,
  ARRAY: Array,
  REGEXP: RegExp,
  DATE: Date
};

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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
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

function isIterable(item) {
  try {
    return _typeof(item[Symbol.iterator]) === PrimitiveType.FUNCTION;
  } catch (e) {
    return false;
  }
}

function _defaultComparator(a, b) {
  return a - b;
}

/**
 * if a == b , then return `true`
 */
function _compareEqual(comparator) {
  return function (a, b) {
    return comparator(a, b) === 0;
  };
}

/**
 * if a < b  , then return `true`
 */
function _compareLessThan(comparator) {
  return function (a, b) {
    return comparator(a, b) < 0;
  };
}

/**
 * if a > b  , then return `true`
 */
function _compareGreaterThan(comparator) {
  return function (a, b) {
    return comparator(a, b) > 0;
  };
}

function swap(arr, a, b) {
  if (a !== b) {
    var _ref = [arr[b], arr[a]];
    // $FlowFixMe

    arr[a] = _ref[0];
    arr[b] = _ref[1];
  }
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * BubbleSort with superpowers! 💪
 *
 * time:    O(n^2)
 * space:   O(1)
 *
 * @public
 *
 * @param {Array<Item>} arr - array to sort
 * @param {Comparator} comparator
 * @returns {Array<Item>} sorted array
 */
function bubbleSort(arr) {
  var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparator;

  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  var target = this instanceof Array ? this : arr.slice(0);
  var compare = _compareLessThan(comparator);

  /**
   *
   * BubbleSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @returns {Array<Item>} sorted array
   */
  function _bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      var _swap = false;
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (compare(arr[j + 1], arr[j])) {
          _swap = true;
          swap(arr, j + 1, j);
        }
      }
      if (!_swap) break;
    }

    return arr;
  }

  return _bubbleSort(target);
}

/**
 *
 * InsertionSort with superpowers! 💪
 *
 * time:    O(n^2)
 * space:   O(1)
 *
 * @public
 *
 * @param {Array<Item>} arr - array to sort
 * @param {Comparator} comparator
 * @returns {Array<Item>} sorted array
 */
function insertionSort(arr) {
  var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparator;

  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  var target = this instanceof Array ? this : arr.slice(0);
  var compare = _compareLessThan(comparator);

  /**
   *
   * InsertionSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @returns {Array<Item>} sorted array
   */
  function _insertionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i; j >= 0 && compare(arr[j + 1], arr[j]); j--) {
        swap(arr, j, j + 1);
      }
    }

    return arr;
  }

  return _insertionSort(target);
}

/**
 *
 * MergeSort with superpowers! 💪
 *
 * time:    O(nlogn)
 * space:   O(n)
 *
 * @public
 *
 * @param {Array<Item>} arr - array to sort
 * @param {Comparator} comparator
 * @returns {Array<Item>} sorted array
 */
function mergeSort(arr) {
  var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparator;

  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  var target = this instanceof Array ? this : arr.slice(0);
  var compare = _compareLessThan(comparator);

  /**
   *
   * MergeSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @returns {Array<Item>} merged array
   */
  function _mergeSort(arr) {
    if (arr.length <= 1) return arr;

    var mid = Math.trunc(arr.length / 2);
    var leftArr = arr.slice(0, mid);
    var rightArr = arr.slice(mid);

    _mergeSort(leftArr);
    _mergeSort(rightArr);

    return merge(arr, leftArr, rightArr, compare);
  }

  return _mergeSort(target);
}

/**
 *
 * Merge helper
 *
 * @private
 *
 * @param {Array<Item>} arr - array merge target
 * @param {Array<Item>} leftArr - left array to merge
 * @param {Array<Item>} rightArr - right array to merge
 * @param {Comparator} compare
 * @returns {Array<Item>} merged array
 */
function merge(arr, leftArr, rightArr, compare) {
  var i = 0;
  var j = 0;
  var k = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (compare(leftArr[i], rightArr[j])) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }

  return arr;
}

var PartitionType = {
  LOMUTO: "lomuto",
  HOARE: "hoare"
};

var PivotType = {
  LOW: "low",
  HIGH: "high",
  MID: "mid",
  RANDOM: "rand"
};

/**
 *
 * QuickSort with superpowers! 💪
 *
 * time:    O(nlogn)
 * space:   O(nlogn)
 *
 * @public
 *
 * @param {Array<Item>} arr - array to sort
 * @param {Comparator} comparator
 * @returns {Array<Item>} sorted array
 */
function quickSort(arr) {
  var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparator;

  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  var target = this instanceof Array ? this : arr.slice(0);
  var compare = _compareLessThan(comparator);

  // TODO: make customizable?
  var partitionType = PartitionType.HOARE;
  var pivotType = PivotType.RANDOM;

  /**
   *
   * QuickSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @param {number} low
   * @param {number} high
   * @returns {Array<Item>} sorted partition
   */
  function _quickSort(arr) {
    var low = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var high = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - 1;

    if (low < high) {
      var pivot = void 0;

      switch (partitionType) {
        case PartitionType.LOMUTO:
          pivot = partitionLomuto(arr, low, high, pivotType, compare);
          _quickSort(arr, low, pivot - 1);
          break;
        case PartitionType.HOARE:
        default:
          pivot = partitionHoare(arr, low, high, pivotType, compare);
          _quickSort(arr, low, pivot);
          break;
      }

      _quickSort(arr, pivot + 1, high);
    }
    return arr;
  }

  return _quickSort(target);
}

/**
 *
 * Partition (Lomuto)
 *
 * @param {Array<number>} arr
 * @param {number} low
 * @param {number} high
 * @param {PivotType} pivotType
 * @param {Comparator} compare
 * @return {number} pivot
 */

function partitionLomuto(arr, low, high, pivotType, compare) {
  function _partitionLomutoLow(arr, low, high) {
    var pivot = low;
    var i = low + 1;

    for (var j = low + 1; j <= high; j++) {
      if (compare(arr[j], arr[pivot])) {
        swap(arr, i, j);
        i++;
      }
    }
    swap(arr, i - 1, low);
    return i - 1;
  }
  function _partitionLomutoHigh(arr, low, high) {
    var pivot = high;
    var i = low - 1;

    for (var j = low; j < high; j++) {
      if (compare(arr[j], arr[pivot])) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, high);
    return i + 1;
  }

  switch (pivotType) {
    case PivotType.LOW:
      return _partitionLomutoLow(arr, low, high);

    case PivotType.HIGH:
    default:
      return _partitionLomutoHigh(arr, low, high);
  }
}

/**
 *
 * Partition (Hoare)
 * it is more efficient than the Lomuto partition scheme
 * because it does three times fewer swaps on average
 *
 * @param {Array<number>} arr
 * @param {number} low
 * @param {number} high
 * @param {string} pivotType
 * @param {Comparator} compare
 * @return {number} pivot
 */
function partitionHoare(arr, low, high, pivotType, compare) {
  var pivot = void 0;

  switch (pivotType) {
    case PivotType.LOW:
      pivot = low;
      break;

    case PivotType.RANDOM:
      var random = randInt(low, high);
      swap(arr, random, low);
      pivot = low;
      break;

    case PivotType.MID:
    default:
      pivot = Math.trunc((low + high) / 2);
      break;
  }

  var i = low - 1;
  var j = high + 1;

  while (true) {
    do {
      i++;
    } while (compare(arr[i], arr[pivot]));
    do {
      j--;
    } while (compare(arr[pivot], arr[j]));
    if (i >= j) {
      return j;
    }
    swap(arr, i, j);
  }
}

/**
 *
 * SelectionSort with superpowers! 💪
 *
 * time:    O(n^2)
 * space:   O(1)
 *
 * @public
 *
 * @param {Array<Item>} arr - array to sort
 * @param {Comparator} comparator
 * @returns {Array<Item>} sorted array
 */
function selectionSort(arr) {
  var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparator;

  if (!(this instanceof Array) && !(arr instanceof Array)) {
    throw new Error("Array type is required");
  }

  var target = this instanceof Array ? this : arr.slice(0);
  var compare = _compareLessThan(comparator);

  /**
   *
   * SelectionSort helper
   *
   * @private
   *
   * @param {Array<Item>} arr - array target
   * @returns {Array<Item>} sorted array
   */
  function _selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      var min = i;

      for (var j = i + 1; j < arr.length; j++) {
        if (compare(arr[j], arr[min])) {
          min = j;
        }
      }
      swap(arr, i, min);
    }

    return arr;
  }

  return _selectionSort(target);
}

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
 * @typedef {Function} Callback
 */

/**
 *
 * Array with superpowers! 💪
 *
 * @public
 *
 */

var _Array = function (_extendableBuiltin2) {
  inherits(_Array, _extendableBuiltin2);

  /**
   * @public
   *
   * @desc Construct an Array
   *
   * @param {Array<Item>} iterable
   */
  function _Array() {
    var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    classCallCheck(this, _Array);

    var _this = possibleConstructorReturn(this, (_Array.__proto__ || Object.getPrototypeOf(_Array)).call(this));

    _this.push.apply(_this, toConsumableArray(iterable));
    return _this;
  }
  /**
   * @public
   *
   * @desc Maps each element using a mapping function, then flattens the result into a new array
   *
   * @param {Callback} callback - callback function
   * @returns {Array<Item>} A new array with each element being the result of the callback function and flattened to a depth of 1
   */


  createClass(_Array, [{
    key: "flatMap",
    value: function flatMap(callback) {
      // $FlowFixMe
      return this.map(callback).flatten();
    }
    /**
     * @public
     *
     * @desc Creates a new array with all sub-array elements concatted into it recursively up to the specified depth
     *
     * @param {number} depth - flatten depth
     * @returns {Array<Item>}  new array with the sub-array elements concatted into it.
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

      // $FlowFixMe
      return _flatten(depth, this);
    }

    /**
     * @public
     *
     * @desc Sort using bubble sort
     *
     * @param {Comparator} comparator - comparator function
     * @returns {Array<Item>} sorted array
     */

  }, {
    key: "bubbleSort",
    value: function bubbleSort$$1(comparator) {
      // $FlowFixMe
      return bubbleSort.call(this, null, comparator);
    }

    /**
     * @public
     *
     * @desc Sort using insertion sort
     *
     * @param {Comparator} comparator - comparator function
     * @returns {Array<Item>} sorted array
     */

  }, {
    key: "insertionSort",
    value: function insertionSort$$1(comparator) {
      // $FlowFixMe
      return insertionSort.call(this, null, comparator);
    }

    /**
     * @public
     *
     * @desc Sort using merge sort
     *
     * @param {Comparator} comparator - comparator function
     * @returns {Array<Item>} sorted array
     */

  }, {
    key: "mergeSort",
    value: function mergeSort$$1(comparator) {
      // $FlowFixMe
      return mergeSort.call(this, null, comparator);
    }

    /**
     * @public
     *
     * @desc Sort using quick sort
     *
     * @param {Comparator} comparator - comparator function
     * @returns {Array<Item>} sorted array
     */

  }, {
    key: "quickSort",
    value: function quickSort$$1(comparator) {
      // $FlowFixMe
      return quickSort.call(this, null, comparator);
    }

    /**
     * @public
     *
     * @desc Sort using selection sort
     *
     * @param {Comparator} comparator - comparator function
     * @returns {Array<Item>} sorted array
     */

  }, {
    key: "selectionSort",
    value: function selectionSort$$1(comparator) {
      // $FlowFixMe
      return selectionSort.call(this, null, comparator);
    }
  }]);
  return _Array;
}(_extendableBuiltin(Array));

/**
 *
 * TreeNode
 *
 * @public
 *
 */
var TreeNode = function () {
  /** @private */

  /** @private */

  /** @private */

  /**
   * @public
   *
   * @desc Construct a TreeNode
   *
   * @param {Item} value - node value
   */
  function TreeNode(value) {
    classCallCheck(this, TreeNode);

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


  createClass(TreeNode, [{
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
     * @returns {TreeNode} left child node
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
     * @returns {TreeNode} right child node
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
  return TreeNode;
}();

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
   * @param {Array<Item>} iterable
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
     * @returns {Array<Item>} array representation of the queue
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

  /** @private */

  /**
   * @public
   *
   * @desc Construct a BinaryTree
   *
   * @param {Array<number>} iterable
   * @param {Comparator} comparator
   */
  function BinaryTree() {
    var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var comparator = arguments[1];
    classCallCheck(this, BinaryTree);

    this._root = null;
    this._compareEqual = _compareEqual(comparator || _defaultComparator);
    this._compareLessThan = _compareLessThan(comparator || _defaultComparator);
    this._compareGreaterThan = _compareGreaterThan(comparator || _defaultComparator);

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
   * @private
   *
   * @desc Default comparator function to sort from:
   *       highest priority (max) -> lowest priority (min)
   *
   * @returns {number} comparison
   */


  createClass(BinaryTree, [{
    key: "getHeight",


    /**
     * @public
     *
     * @desc Get the height of the tree at node
     *
     * @param {TreeNode} node - root node
     * @returns {number} height of tree
     */
    value: function getHeight() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

      /**
       * @private
       *
       * @desc Height helper
       *
       * @param {TreeNode} node
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
     * @param {TreeNode} node - root node
     * @returns {TreeNode} node
     */

  }, {
    key: "findMin",
    value: function findMin() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

      // $FlowFixMe
      if (!node.left) return node;else return this.findMin(node.left);
    }

    /**
     * @public
     *
     * @desc Find maximum value in tree
     *
     * @param {TreeNode} node - root node
     * @returns {TreeNode} node
     */

  }, {
    key: "findMax",
    value: function findMax() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

      // $FlowFixMe
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
      var _this = this;

      var node = new TreeNode(value);

      /**
       * @private
       *
       * @desc Insert helper
       *
       * @param {TreeNode} root
       */
      var _insert = function _insert(root) {
        if (!root) return node;

        if (_this._compareLessThan(node.value, root.value)) {
          root.left = _insert(root.left);
        } else {
          root.right = _insert(root.right);
        }

        return root;
      };

      this._root = _insert(this.root);
    }

    /**
     * @public
     *
     * @desc Search and retrieve a value from the tree
     *
     * @param {Item} value - value to search
     * @return {TreeNode} match node, or null if not found
     */

  }, {
    key: "search",
    value: function search(value) {
      var _this2 = this;

      if (!value) return null;

      /**
       * @private
       *
       * @desc Search helper
       *
       * @param {TreeNode} node
       * @return {TreeNode} match node
       */
      var _search = function _search(node) {
        if (!node) return null;

        if (_this2._compareEqual(value, node.value)) {
          return node;
        } else if (_this2._compareLessThan(value, node.value)) {
          return _search(node.left);
        } else if (_this2._compareGreaterThan(value, node.value)) {
          return _search(node.right);
        }
      };

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
      var _this3 = this;

      /**
       * @private
       *
       * @desc Remove helper
       *
       * @param {TreeNode} node
       * @param {Item} value
       */
      var _remove = function _remove(node, value) {
        if (!node) return null;

        if (_this3._compareEqual(node.value, value)) {
          if (!node.left && !node.right) {
            return null;
          } else if (!node.left) {
            return node.right;
          } else if (!node.right) {
            return node.left;
          } else {
            var aux = _this3.findMin(node.right);
            // $FlowFixMe
            node.value = aux.value;
            // $FlowFixMe
            node.right = _remove(node.right, aux.value);
            return node;
          }
        } else if (_this3._compareLessThan(value, node.value)) {
          node.left = _remove(node.left, value);
          return node;
        } else if (_this3._compareGreaterThan(value, node.value)) {
          node.right = _remove(node.right, value);
          return node;
        }
      };

      // $FlowFixMe
      this._root = _remove(this.root, value);
    }

    /**
     * @public
     *
     * @desc Traverse the tree in preOrder traversal ordering
     *
     * @param {TreeNode} node - root node
     * @returns {Array<TreeNode>} array of nodes or values
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
       * @param {TreeNode} node
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
     * @param {TreeNode} node - root node
     * @returns {Array<TreeNode>} array of nodes or values
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
       * @param {TreeNode} node
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
     * @param {TreeNode} node - root node
     * @returns {Array<TreeNode>} array of nodes or values
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
       * @param {TreeNode} node
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
     * @param {TreeNode} node - root node
     * @returns {Array<TreeNode>} array of nodes or values
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
     * @returns {Array<TreeNode | Item> } array representation of the list
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


    /**
     * @public
     *
     * @desc Get the root of the tree
     *
     * @returns {TreeNode} root node
     */
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
     * @returns {TreeNode} root node
     */

  }, {
    key: "height",
    get: function get$$1() {
      return this.getHeight(this.root);
    }
  }], [{
    key: "_defaultComparator",
    value: function _defaultComparator$$1(a, b) {
      return a.value > b.value;
    }
  }]);
  return BinaryTree;
}();

/**
 *
 * AVLTree with superpowers! 💪
 *
 * @public
 *
 */

var AVLTree = function (_BinaryTree) {
  inherits(AVLTree, _BinaryTree);

  function AVLTree() {
    classCallCheck(this, AVLTree);
    return possibleConstructorReturn(this, (AVLTree.__proto__ || Object.getPrototypeOf(AVLTree)).apply(this, arguments));
  }

  createClass(AVLTree, [{
    key: "_getBalance",


    /**
     * @private
     *
     * @desc Get balance factor
     *
     * @param {TreeNode} node - root node
     * @returns {number} balance factor
     */
    value: function _getBalance(node) {
      // $FlowFixMe
      return this.getHeight(node.left) - this.getHeight(node.right);
    }

    /**
     * @private
     *
     * @desc Rotate left
     *
     * @param {TreeNode} node
     * @returns {TreeNode} new root
     */

  }, {
    key: "_rotateLeft",
    value: function _rotateLeft(node) {
      // $FlowFixMe
      var root = node.right;
      node.right = root.left;
      root.left = node;
      return root;
    }

    /**
     * @private
     *
     * @desc Rotate right
     *
     * @param {TreeNode} node
     * @returns {TreeNode} new root
     */

  }, {
    key: "_rotateRight",
    value: function _rotateRight(node) {
      // $FlowFixMe
      var root = node.left;
      node.left = root.right;
      root.right = node;
      return root;
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
      var _this2 = this;

      var node = new TreeNode(value);

      /**
       * @private
       *
       * @desc Insert helper
       *
       * @param {TreeNode} root
       */
      var _insert = function _insert(root) {
        if (!root) return node;

        if (_this2._compareLessThan(node.value, root.value)) {
          root.left = _insert(root.left);
        } else {
          root.right = _insert(root.right);
        }

        var balance = _this2._getBalance(root);

        if (balance > 1) {
          // Left Rotate
          if (root.left && _this2._compareLessThan(node.value, root.left.value)) {
            return _this2._rotateRight(root);
          }
          // Left Right Rotate
          if (root.left && _this2._compareGreaterThan(node.value, root.left.value)) {
            root.left = _this2._rotateLeft(root.left);
            return _this2._rotateRight(root);
          }
        }

        if (balance < -1) {
          // Right Rotate
          if (root.right && _this2._compareGreaterThan(node.value, root.right.value)) {
            return _this2._rotateLeft(root);
          }

          // Right Left Rotate
          if (root.right && _this2._compareLessThan(node.value, root.right.value)) {
            root.right = _this2._rotateRight(root.right);
            return _this2._rotateLeft(root);
          }
        }

        return root;
      };

      this._root = _insert(this.root);
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
      var _this3 = this;

      /**
       * @private
       *
       * @desc Remove helper
       *
       * @param {TreeNode} root
       * @param {Item} value
       */
      var _remove = function _remove(root, value) {
        if (!root) return null;

        if (_this3._compareEqual(root.value, value)) {
          if (!root.left && !root.right) {
            return null;
          } else if (!root.left) {
            return root.right;
          } else if (!root.right) {
            return root.left;
          } else {
            var aux = _this3.findMin(root.right);
            // $FlowFixMe
            root.value = aux.value;
            // $FlowFixMe
            root.right = _remove(root.right, aux.value);
          }
        } else if (_this3._compareLessThan(value, root.value)) {
          root.left = _remove(root.left, value);
        } else if (_this3._compareGreaterThan(value, root.value)) {
          root.right = _remove(root.right, value);
        }

        var balance = _this3._getBalance(root);

        if (balance > 1) {
          // Left Rotate
          if (root.left && _this3._getBalance(root.left) >= 0) {
            return _this3._rotateRight(root);
          }
          // Left Right Rotate
          if (root.left && _this3._getBalance(root.left) < 0) {
            root.left = _this3._rotateLeft(root.left);
            return _this3._rotateRight(root);
          }
        }

        if (balance < -1) {
          // Right Rotate
          if (root.right && _this3._getBalance(root.left) <= 0) {
            return _this3._rotateLeft(root);
          }

          // Right Left Rotate
          if (root.right && _this3._getBalance(root.left) > 0) {
            root.right = _this3._rotateRight(root.right);
            return _this3._rotateLeft(root);
          }
        }

        return root;
      };

      // $FlowFixMe
      this._root = _remove(this.root, value);
    }
  }, {
    key: "balanced",

    /**
     * @public
     *
     * @desc Determine if the tree is balanced
     *
     * @returns {boolean} balanced
     */
    get: function get$$1() {
      return Math.abs(this._getBalance(this.root)) <= 1;
    }
  }]);
  return AVLTree;
}(BinaryTree);

/**
 *
 * Heap with superpowers! 💪
 *
 * @public
 *
 */

var Heap = function () {

  /** @private */

  /** @private */

  /**
   * @public
   *
   * @desc Construct a Heap
   *
   * @param {Array<Item>} iterable
   * @param {Comparator} comparator
   */
  function Heap() {
    var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var comparator = arguments[1];
    classCallCheck(this, Heap);

    this._heap = [].concat(toConsumableArray(iterable));
    this._compare = _compareLessThan(comparator || Heap.HeapType.MIN);

    for (var i = Math.floor(iterable.length / 2); i >= 0; i--) {
      this._percolateDown(i);
    }
  }

  /**
   * @private
   *
   * @desc Get the parent item in the heap (i.e. (i-1)/2)
   *
   * @param {number} index
   * @returns {Item} _parent item
   */


  createClass(Heap, [{
    key: "isEmpty",


    /**
     * @public
     *
     * @desc Check if heap is empty
     *
     * @returns {boolean} is heap empty
     */
    value: function isEmpty() {
      return this._heap.length === 0;
    }

    /**
     * @public
     *
     * @desc Clear the items from the heap
     *
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear() {
      this._heap.length = 0;
    }

    /**
     * @public
     *
     * @desc Insert an item into the heap
     *
     * @param {Item} value - item to insert
     * @returns {number} size after insert
     */

  }, {
    key: "insert",
    value: function insert(value) {
      this._heap.push(value);
      this._percolateUp(this.size - 1);
      return this.size;
    }

    /**
     * @public
     *
     * @desc Remove and return the maximum item
     *
     * @returns {Item} maximum item
     */

  }, {
    key: "deleteMax",
    value: function deleteMax() {
      var _return = this._heap[0];
      this._heap[0] = this._heap.pop();
      this._percolateDown(0);
      return _return;
    }

    /**
     * @public
     *
     * @alias deleteMax
     *
     * @desc Remove and return the minimum item
     *
     * @returns {Item} minimum item
     */

  }, {
    key: "deleteMin",
    value: function deleteMin() {
      return this.deleteMax();
    }

    /**
     * @private
     *
     * @desc Heapify down
     *
     * @param {number} index - start index
     */

  }, {
    key: "_percolateDown",
    value: function _percolateDown(index) {
      var left = Heap._left(index);
      var right = Heap._right(index);
      var root = index;

      if (left < this.size && this._compare(this._heap[left], this._heap[index])) {
        root = left;
      }

      if (right < this.size && this._compare(this._heap[right], this._heap[root])) {
        root = right;
      }

      if (root !== index) {
        swap(this._heap, index, root);
        this._percolateDown(root);
      }
    }

    /**
     * @private
     *
     * @desc Heapify up
     *
     * @param {number} index - start index
     */

  }, {
    key: "_percolateUp",
    value: function _percolateUp(index) {
      while (Heap._parent(index) >= 0) {
        var parent = Heap._parent(index);
        if (this._compare(this._heap[index], this._heap[parent])) {
          swap(this._heap, index, parent);
        }
        index = parent;
      }
    }

    /**
     * @public
     *
     * @desc Convert the heap to an array
     *
     * @returns {Array<Item>} array representation of the heap
     */

  }, {
    key: "toArray",
    value: function toArray$$1() {
      return this._heap.slice(0);
    }
  }, {
    key: "size",


    /**
     * @public
     *
     * @desc Get the current size of the heap
     *
     * @returns {number} size of the heap
     */
    get: function get$$1() {
      return this._heap.length;
    }

    /**
     * @public
     *
     * @desc Get the maximum item in heap
     *
     * @returns {Item} maximum item
     */

  }, {
    key: "max",
    get: function get$$1() {
      return this._heap[0];
    }

    /**
     * @public
     *
     * @alias max
     *
     * @desc Get the minimum item in heap
     *
     * @returns {Item} minimum item
     */

  }, {
    key: "min",
    get: function get$$1() {
      return this.max;
    }
  }], [{
    key: "_parent",
    value: function _parent(index) {
      return Math.floor((index - 1) / 2);
    }

    /**
     * @private
     *
     * @desc Get the left child (i.e. 2*i+1)
     *
     * @param {number} index
     * @returns {Item} _left child
     */

  }, {
    key: "_left",
    value: function _left(index) {
      return 2 * index + 1;
    }

    /**
     * @private
     *
     * @desc Get the right child (i.e. 2*i+2)
     *
     * @param {number} index
     * @returns {Item} _left child
     */

  }, {
    key: "_right",
    value: function _right(index) {
      return 2 * index + 2;
    }
  }]);
  return Heap;
}();

Heap.HeapType = {
  MIN: function MIN(a, b) {
    return a - b;
  },
  MAX: function MAX(a, b) {
    return b - a;
  }
};

/**
 *
 * ListNode
 *
 * @public
 *
 */
var ListNode = function () {
  /** @private */

  /** @private */

  /** @private */

  /**
   * @public
   *
   * @desc Construct a ListNode
   *
   * @param {Item} item - node value
   */
  function ListNode(item) {
    classCallCheck(this, ListNode);

    this._value = item;
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
 * LinkedList with superpowers! 💪
 *
 * @public
 *
 */

var LinkedList = function () {
  /** @private */

  /** @private */

  /** @private */

  /**
   * @public
   *
   * @desc Construct a LinkedList
   *
   * @param {Array<Item>} iterable
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
    // TODO: insert by value
    value: function insert(position, value) {
      if (position < 0) {
        return this.insert(Math.max(0, this.size + 1 - Math.abs(position)), value);
      }

      var prev = null;
      var curr = this.head;

      var p = 0;
      while (p < position && curr) {
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
     * @desc Prepend a node to the front of the list
     *
     * @param {Item} value - value to prepend to list
     * @returns {number} size after insertion
     */

  }, {
    key: "prepend",
    value: function prepend(value) {
      return this.insert(0, value);
    }

    /**
     * @public
     *
     * @alias insert(0, value)
     *
     * @desc Unshift a node to the front of the list
     *
     * @param {Item} value - value to unshift to list
     * @returns {number} size after insertion
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
     * @desc Append a node to the rear of the list
     *
     * @param {Item} value - value to append to list
     * @returns {number} size after insertion
     */

  }, {
    key: "append",
    value: function append(value) {
      return this.insert(this.size, value);
    }

    /**
     * @public
     *
     * @alias insert(list.size, value)
     *
     * @desc Push a node to the rear of the list
     *
     * @param {Item} value - value to push to list
     * @returns {number} size after insertion
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
    // TODO: remove by value

  }, {
    key: "remove",
    value: function remove(position) {
      if (position < 0) {
        return this.remove(Math.max(0, this.size - Math.abs(position)));
      }

      var prev = null;
      var curr = this.head;

      var p = 0;
      while (p < position && curr) {
        prev = curr;
        curr = curr.next;
        p++;
      }

      if (prev && curr && curr.next) {
        prev.next = curr.next;
        // $FlowFixMe
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
     * @returns {Array<Item>} array representation of the list
     */

  }, {
    key: "toArray",
    value: function toArray$$1() {
      var array = [];
      var node = this.head;

      while (node) {
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

function _extendableBuiltin$1(cls) {
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
 * @typedef {Function} Callback
 */

/**
 *
 * Map with superpowers! 💪
 *
 * @public
 *
 */

var _Map = function (_extendableBuiltin2) {
  inherits(_Map, _extendableBuiltin2);

  /**
   * @public
   *
   * @desc Construct a Map
   *
   * @param {Array<Item>} iterable
   */
  function _Map(iterable) {
    classCallCheck(this, _Map);
    return possibleConstructorReturn(this, (_Map.__proto__ || Object.getPrototypeOf(_Map)).call(this, iterable));
  }
  /**
   * @public
   *
   * @desc Tests whether at least one element in the map passes the test implemented by the provided function
   *
   * @param {Callback} callback - callback function
   * @returns {boolean} true if the callback function returns a truthy value for any map element; otherwise, false
   */


  createClass(_Map, [{
    key: "some",
    value: function some(callback) {
      var result = void 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray(_ref, 2);

          var key = _ref2[0];
          var value = _ref2[1];

          result = callback(value, key, this);
          if (result) return true;
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

      return false;
    }
    /**
     * @public
     *
     * @desc Test whether all elements in the map pass the test implemented by the provided function
     *
     * @param {Callback} callback - callback function
     * @returns {boolean} true if the callback function returns a truthy value for every map element; otherwise, false
     */

  }, {
    key: "every",
    value: function every(callback) {
      var result = void 0;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref3 = _step2.value;

          var _ref4 = slicedToArray(_ref3, 2);

          var key = _ref4[0];
          var value = _ref4[1];

          result = callback(value, key, this);
          if (!result) return false;
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

      return true;
    }
    /**
     * @public
     *
     * @desc Similar to get(), but will set key to defaultValue if key is not already in Map.
     *
     * @param {Item} key - Map key
     * @param {Item} defaultValue - the default value to set in Map if the key is not defined
     * @returns {Item} The value if the key is defined in Map; otherwise, the default value
     */

  }, {
    key: "setDefault",
    value: function setDefault(key, defaultValue) {
      if (this.has(key)) {
        return this.get(key);
      } else {
        this.set(key, defaultValue);
        return defaultValue;
      }
    }
    /**
     * @public
     *
     * @desc Convert Map to an Object
     *
     * @returns {object} Object representation of Map
     */

  }, {
    key: "toObject",
    value: function toObject() {
      return Array.from(this).reduce(function (obj, _ref5) {
        var _ref6 = slicedToArray(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];

        if ((typeof key === "undefined" ? "undefined" : _typeof(key)) !== PrimitiveType.OBJECT) {
          obj[key] = value;
        }
        return obj;
      }, {});
    }
  }]);
  return _Map;
}(_extendableBuiltin$1(Map));

/**
 *
 * Math with superpowers! 💪
 *
 * @public
 *
 * @alias Math
 */
var _Math = Object.create(Math);

/**
 * @public
 *
 * @desc Factorial
 *
 * @param {number} num - integral number
 * @returns {number} factorial of num
 */
_Math.factorial = function (num) {
  if (num < 0) throw new Error("Factorial not defined for negative values");
  if (num === 0) return 1;
  return num * _Math.factorial(num - 1);
};

/**
 * @public
 *
 * @desc Greatest common divisor
 *
 * @param {number} numA - integral number
 * @param {number} numB - integral number
 * @returns {number} greatest common divisor of numA and numB
 */
_Math.gcd = function (numA, numB) {
  if (numB === 0) return numA;
  return _Math.gcd(numB, numA % numB);
};

/**
 * @public
 *
 * @desc Least common multiple
 *
 * @param {number} numA - integral number
 * @param {number} numB - integral number
 * @returns {number} least common multiple of numA and numB
 */
_Math.lcm = function (numA, numB) {
  if (numA === 0 && numB === 0) return 0;
  return numA * numB / _Math.gcd(numA, numB);
};

/**
 * @public
 *
 * @desc Random number
 *
 * @param {number} start - starting number (inclusive)
 * @param {number} stop - stopping number (exclusive)
 * @returns {number} random number between [start, stop)
 */
_Math.randrange = function (start, stop) {
  if ((typeof start === "undefined" ? "undefined" : _typeof(start)) === PrimitiveType.UNDEFINED) throw new Error("Missing required argument start");
  if ((typeof stop === "undefined" ? "undefined" : _typeof(stop)) === PrimitiveType.UNDEFINED) start = 0, stop = start;
  return Math.floor(Math.random() * (stop - start)) + start;
};

function _extendableBuiltin$2(cls) {
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
  inherits(_Number, _extendableBuiltin2);

  /**
   * @public
   *
   * @desc Construct a Number
   *
   * @param {number} number
   */
  function _Number(number) {
    classCallCheck(this, _Number);
    return possibleConstructorReturn(this, (_Number.__proto__ || Object.getPrototypeOf(_Number)).call(this, number));
  }

  /**
   * @public
   *
   * @desc Convert a roman numeral to number
   *
   * @param {string} str - Roman numeral
   * @returns {number} Number representation of a roman numeral
   */


  createClass(_Number, [{
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

            var _ref2 = slicedToArray(_ref, 2);

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

      // $FlowFixMe
      return _integerToRoman(this);
    }

    /**
     * @public
     *
     * @desc Test if a string is a valid number
     *
     * @param {string} str – string representation of a number
     * @returns {boolean} is number
     */

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

            var _ref4 = slicedToArray(_ref3, 2);

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
  }, {
    key: "isNumber",
    value: function isNumber(str) {
      return Boolean(str.trim()) && !Number.isNaN(Number(str));
    }
  }]);
  return _Number;
}(_extendableBuiltin$2(Number));

function _extendableBuiltin$3(cls) {
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
 * @typedef {object} Config
 * @property {boolean} [includeNonEnumerable=false]
 */

/**
 *
 * Object with superpowers! 💪
 *
 * @public
 *
 */

var _Object = function (_extendableBuiltin2) {
  inherits(_Object, _extendableBuiltin2);

  /**
   * @public
   *
   * @desc Construct an Object
   *
   * @param {Object} object
   */
  function _Object(object) {
    classCallCheck(this, _Object);

    // $FlowFixMe
    return possibleConstructorReturn(this, (_Object.__proto__ || Object.getPrototypeOf(_Object)).call(this, object));
  }

  /**
   * @public
   *
   * @desc Check for nested value from string key
   *
   * @param {string} path
   * @return {boolean} property value exists
   */


  createClass(_Object, [{
    key: "hasNested",
    value: function hasNested(path) {
      var item = this;
      // TODO: throw error on invalid path
      path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

      var keys = path.split(".");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === PrimitiveType.OBJECT && key in item) item = item[key];else return false;
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

      return true;
    }

    /**
     * @public
     *
     * @desc  Get nested JavaScript object value from string key
     *
     * @param {string} path
     * @return {Item} property value
     */

  }, {
    key: "getNested",
    value: function getNested(path) {
      var item = this;
      // TODO: throw error on invalid path
      path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

      var keys = path.split(".");
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === PrimitiveType.OBJECT && key in item) item = item[key];else return;
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

      return item;
    }

    /**
     * @public
     *
     * @desc Deep clone an Object
     *
     * @param {Config} [config={}] Configuration object
     * @returns {object} Deep cloned Object
     *
     * @example
     *
     * const obj = new SuperObject({ key1: ["1", 1, true, (a, b) => a+b], [Symbol("key2")]: {s: "s"} });
     * const clone = obj.clone();
     *
     * console.log(clone);
     * // { key1: ["1", 1, true, (a, b) => a+b], Symbol("key2"): {s: "s"} }
     *
     */
    // $FlowFixMe

  }, {
    key: "clone",
    value: function clone() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _config$includeNonEnu = config.includeNonEnumerable,
          includeNonEnumerable = _config$includeNonEnu === undefined ? false : _config$includeNonEnu;

      /**
       * @private
       *
       * @desc Deep clone helper
       *
       * @param {Item} item
       * @returns {any} cloned item
       */

      function _clone(item) {
        if (item === null || (typeof item === "undefined" ? "undefined" : _typeof(item)) !== PrimitiveType.OBJECT) {
          return item;
        }

        if (item instanceof InstanceType.DATE) {
          return new Date(item.valueOf());
        }

        if (item instanceof InstanceType.ARRAY) {
          var copy = [];

          item.forEach(function (_, i) {
            return copy[i] = _clone(item[i]);
          });

          return copy;
        }

        if (item instanceof InstanceType.OBJECT) {
          var _copy = {};

          // $FlowFixMe
          Object.getOwnPropertySymbols(item).forEach(function (s) {
            return _copy[s] = _clone(item[s]);
          });

          if (includeNonEnumerable) {
            Object.getOwnPropertyNames(item).forEach(function (k) {
              return _copy[k] = _clone(item[k]);
            });
          } else {
            Object.keys(item).forEach(function (k) {
              return _copy[k] = _clone(item[k]);
            });
          }

          return _copy;
        }

        throw new Error("Unable to copy object: " + item);
      }

      return _clone(this);
    }
  }]);
  return _Object;
}(_extendableBuiltin$3(Object));

/**
 *
 * QueueNode
 *
 * @public
 *
 */
var QueueNode = function () {
  /** @private */

  /** @private */

  /**
   * @public
   *
   * @desc Construct a PriorityQueue
   *
   * @param {Item} value - item value
   * @param {number} priority - priority of item
   */
  function QueueNode(value, priority) {
    classCallCheck(this, QueueNode);

    this._value = value;
    this._priority = priority;
  }

  /**
   * @public
   *
   * @desc Get the value of the node
   *
   * @returns {Item} node value
   */


  createClass(QueueNode, [{
    key: "value",
    get: function get$$1() {
      return this._value;
    }

    /**
     * @public
     *
     * @desc Get the priority of the node
     *
     * @returns {number} priority of item
     */

  }, {
    key: "priority",
    get: function get$$1() {
      return this._priority;
    }
  }]);
  return QueueNode;
}();

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/**
 *
 * PriorityQueue with superpowers! 💪
 *
 * @public
 *
 */

var PriorityQueue = function () {
  /** @private */

  /** @private */

  /**
   * @public
   *
   * @desc Construct a PriorityQueue
   *
   * @param {PriorityQueueIterable} iterable
   * @param {Comparator} comparator
   */
  function PriorityQueue() {
    var _this = this;

    var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
    var comparator = arguments[1];
    classCallCheck(this, PriorityQueue);

    this._queue = [];
    this._comparator = comparator ? PriorityQueue._wrapComparator(comparator) : PriorityQueue._defaultComparator;

    if (!(iterable instanceof Map)) {
      if (isIterable(iterable)) {
        if (Array.isArray(iterable[0])) {
          // $FlowFixMe
          iterable = new Map(iterable);
        } else if (isPlainObject_1(iterable[0])) {
          iterable = new Map(iterable.map(function (_ref) {
            var value = _ref.value,
                priority = _ref.priority;
            return [priority, value];
          }));
        } else {
          return iterable.forEach(function (v) {
            return _this.insert(v);
          });
        }
      } else {
        throw new Error("Unable to construct from non-iterable");
      }
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = iterable.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref2 = _step.value;

        var _ref3 = slicedToArray(_ref2, 2);

        var priority = _ref3[0];
        var value = _ref3[1];

        this.insert(value, priority);
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

  createClass(PriorityQueue, [{
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
     * @param {Item} value - item to insert
     * @param {number} [priority = 0] - priority of item (higher value === higher priority)
     * @returns {number} size after insert
     */

  }, {
    key: "insert",
    value: function insert(value) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if ((typeof priority === "undefined" ? "undefined" : _typeof(priority)) !== PrimitiveType.NUMBER) {
        throw new Error("Unable to insert non-number priority: " + priority);
      }

      // TODO: use a heap
      this._queue.push(new QueueNode(value, priority));
      this._queue.sort(this._comparator);

      return this.size;
    }

    /**
     * @public
     *
     * @desc Remove and return the item with the highest priority
     *
     * @returns {Item} highest priority item
     */

  }, {
    key: "deleteMax",
    value: function deleteMax() {
      return this._queue.shift();
    }

    /**
     * @public
     *
     * @alias deleteMax
     *
     * @desc Remove and return the item with the highest priority
     *
     * @returns {Item} highest priority item
     */

  }, {
    key: "deleteHigh",
    value: function deleteHigh() {
      return this.deleteMax();
    }

    /**
     * @public
     *
     * @desc Remove and return the item with the lowest priority
     *
     * @returns {Item} lowest priority item
     */

  }, {
    key: "deleteMin",
    value: function deleteMin() {
      return this._queue.pop();
    }

    /**
     * @public
     *
     * @alias deleteMin
     *
     * @desc Remove and return the item with the lowest priority
     *
     * @returns {Item} lowest priority item
     */

  }, {
    key: "deleteLow",
    value: function deleteLow() {
      return this.deleteMin();
    }

    /**
     * @public
     *
     * @desc Convert the queue to an array
     *
     * @returns {Array<Item>} array representation of the queue
     */

  }, {
    key: "toArray",
    value: function toArray$$1() {
      return this._queue.slice(0);
    }
  }, {
    key: "size",


    /**
     * @public
     *
     * @desc Get the current size of the queue
     *
     * @returns {number} size of the queue
     */
    get: function get$$1() {
      return this._queue.length;
    }

    /**
     * @public
     *
     * @desc Get the item with the highest priority
     *
     * @returns {Item} highest priority item
     */

  }, {
    key: "max",
    get: function get$$1() {
      return this._queue[0];
    }

    /**
     * @public
     *
     * @alias max
     *
     * @desc Get the item with the highest priority
     *
     * @returns {Item} highest priority item
     */

  }, {
    key: "high",
    get: function get$$1() {
      return this.max;
    }

    /**
     * @public
     *
     * @desc Get the item with the lowest priority
     *
     * @returns {Item} lowest priority item
     */

  }, {
    key: "min",
    get: function get$$1() {
      return this._queue[this._queue.length - 1];
    }

    /**
     * @public
     *
     * @alias min
     *
     * @desc Get the item with the lowest priority
     *
     * @returns {Item} lowest priority item
     */

  }, {
    key: "low",
    get: function get$$1() {
      return this.min;
    }
  }], [{
    key: "_wrapComparator",
    value: function _wrapComparator(comparator) {
      return function (a, b) {
        return comparator(a.value, b.value);
      };
    }

    /**
     * @private
     *
     * @desc Default comparator function to sort from:
     *       highest priority (max) -> lowest priority (min)
     *
     * @returns {number} comparison
     */

  }, {
    key: "_defaultComparator",
    value: function _defaultComparator$$1(a, b) {
      return a.priority < b.priority;
    }
  }]);
  return PriorityQueue;
}();

function _extendableBuiltin$4(cls) {
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
 * @typedef {Function} Callback
 */

/**
 *
 * Set with superpowers! 💪
 *
 * @public
 *
 */
var _Set = function (_extendableBuiltin2) {
  inherits(_Set, _extendableBuiltin2);

  /**
   * @public
   *
   * @desc Construct a Set
   *
   * @param {Array<Item>} iterable
   */
  function _Set(iterable) {
    classCallCheck(this, _Set);
    return possibleConstructorReturn(this, (_Set.__proto__ || Object.getPrototypeOf(_Set)).call(this, iterable));
  }

  /**
   * @public
   *
   * @desc Tests whether at least one element in the set passes the test implemented by the provided function
   *
   * @param {Callback} callback - callback function
   * @returns {boolean} true if the callback function returns a truthy value for any set element; otherwise, false
   */


  createClass(_Set, [{
    key: "some",
    value: function some(callback) {
      var result = void 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray(_ref, 2);

          var value1 = _ref2[0];
          var value2 = _ref2[1];

          result = callback(value1, value2, this);
          if (result) return true;
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

      return false;
    }

    /**
     * @public
     *
     * @desc Test whether all elements in the set pass the test implemented by the provided function
     *
     * @param {Callback} callback - callback function
     * @returns {boolean} true if the callback function returns a truthy value for every set element; otherwise, false
     */

  }, {
    key: "every",
    value: function every(callback) {
      var result = void 0;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref3 = _step2.value;

          var _ref4 = slicedToArray(_ref3, 2);

          var value1 = _ref4[0];
          var value2 = _ref4[1];

          result = callback(value1, value2, this);
          if (!result) return false;
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

      return true;
    }

    /**
     * @public
     *
     * @desc Subset of a set
     *
     * @param {Set<Item>} setB - SetB
     * @returns {boolean} setA is subset of setB
     */

  }, {
    key: "isSubset",
    value: function isSubset(setB) {
      var setA = this;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = setA[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var v = _step3.value;

          if (!setB.has(v)) return false;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return true;
    }

    /**
     * @public
     *
     * @desc Superset of a set
     *
     * @param {Set<Item>} setB - SetB
     * @returns {boolean} setA is superset of setB
     */

  }, {
    key: "isSuperset",
    value: function isSuperset(setB) {
      var setA = this;

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = setB[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var v = _step4.value;

          if (!setA.has(v)) return false;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return true;
    }

    /**
     * @public
     *
     * @desc Disjoint of a set
     *
     * @param {Set<Item>} setB - SetB
     * @returns {boolean} setA is disjoint of setB
     */

  }, {
    key: "isDisjoint",
    value: function isDisjoint(setB) {
      var setA = this;

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = setA[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var v = _step5.value;

          if (setB.has(v)) return false;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return true;
    }

    /**
     * @public
     *
     * @desc Union of setA and setB
     *
     * @param {Set} setB - SetB
     * @returns {Set} setC - union between setA and setB
     */

  }, {
    key: "union",
    value: function union(setB) {
      var setA = this;
      var setC = new Set(setA);

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = setB[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var v = _step6.value;

          setC.add(v);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return setC;
    }

    /**
     * @public
     *
     * @desc Intersection of setA and setB
     *
     * @param {Set<Item>} setB - SetB
     * @returns {Set<Item>} setC - intersection between setA and setB
     */

  }, {
    key: "intersection",
    value: function intersection(setB) {
      var setA = this;
      var setC = new Set();

      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = setB[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var v = _step7.value;

          if (setA.has(v)) setC.add(v);
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      return setC;
    }

    /**
     * @public
     *
     * @desc Difference of setA and setB
     *
     * @param {Set<Item>} setB - SetB
     * @returns {Set<Item>} setC - difference between setA and setB
     */

  }, {
    key: "difference",
    value: function difference(setB) {
      var setA = this;
      var setC = new Set(setA);

      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = setB[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var v = _step8.value;

          setC.delete(v);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return setC;
    }

    /**
     * @public
     *
     * @desc Symmetric difference of setA and setB
     *
     * @param {Set<Item>} setB - SetB
     * @returns {Set<Item>} setC - difference difference between setA and setB
     */

  }, {
    key: "symmetricDifference",
    value: function symmetricDifference(setB) {
      var setA = this;
      var setC = new Set(setA);

      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = setB[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var v = _step9.value;

          if (setA.has(v)) setC.delete(v);else setC.add(v);
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      return setC;
    }
  }]);
  return _Set;
}(_extendableBuiltin$4(Set));

function _extendableBuiltin$5(cls) {
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
 * String with superpowers! 💪
 *
 * @public
 *
 */
var _String = function (_extendableBuiltin2) {
  inherits(_String, _extendableBuiltin2);

  /**
   * @public
   *
   * @desc Construct a String
   *
   * @param {string} string
   */
  function _String(string) {
    classCallCheck(this, _String);
    return possibleConstructorReturn(this, (_String.__proto__ || Object.getPrototypeOf(_String)).call(this, string));
  }

  /**
   * @public
   *
   * @desc Transposes the ordering of all characters in the string
   *
   * @returns {string} String reversed
   */


  createClass(_String, [{
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
}(_extendableBuiltin$5(String));

var SpecialChar = {
  ROOT: "√"
};

/**
 *
 * TrieNode
 *
 * @public
 *
 */

var TrieNode = function () {
  /** @private */

  /** @private */

  /** @private */

  /**
   * @public
   *
   * @desc Construct a TrieNode
   *
   * @param {character} char - node character value
   */
  function TrieNode() {
    var char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SpecialChar.ROOT;
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
    key: "has",


    /**
     * @public
     *
     * @desc Check if node has a specific character as a child
     *
     * @param {character} char - character to check
     * @returns {boolean} node has child
     */
    value: function has(char) {
      return this._children.has(char);
    }

    /**
     * @public
     *
     * @desc Get child node with specific character value
     *
     * @param {character} char - character to get
     * @returns {TrieNode} node with character value
     */

  }, {
    key: "get",
    value: function get$$1(char) {
      return this._children.get(char);
    }

    /**
     * @public
     *
     * @desc Set child node with specific character value
     *
     * @param {character} char - character to set
     * @param {TrieNode} node - node to assign to character
     */

  }, {
    key: "set",
    value: function set$$1(char, node) {
      this._children.set(char, node);
    }

    /**
     * @public
     *
     * @desc Delete child node with specific character value
     *
     * @param {character} char - character to delete
     */

  }, {
    key: "delete",
    value: function _delete(char) {
      this._children.delete(char);
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
     *
     * @returns {boolean} is complete word
     */

  }, {
    key: "isCompleteWord",
    get: function get$$1() {
      return this._isCompleteWord;
    }

    /**
     * @public
     *
     * @desc Checks if node is a leaf node
     *
     * @returns {boolean} is leaf node
     */

  }, {
    key: "isLeafNode",
    get: function get$$1() {
      return this.count === 0;
    }
  }]);
  return TrieNode;
}();

/**
 *
 * Trie with superpowers! 💪
 *
 * @public
 *
 */

var Trie = function () {
  /** @private */

  /**
   * @public
   *
   * @desc Construct a Trie
   *
   * @param {Array<string>} iterable
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
        var word = _step.value;

        this.insert(word);
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
     * @param {string} word - string to insert
     */
    value: function insert(word) {
      if ((typeof word === "undefined" ? "undefined" : _typeof(word)) !== PrimitiveType.STRING) {
        throw new Error("Unable to insert non-string value: " + word);
      }

      var curr = this.root;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = word[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var char = _step2.value;

          if (curr.has(char)) {
            // $FlowFixMe
            curr = curr.get(char);
          } else {
            var node = new TrieNode(char);
            curr.set(char, node);
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

    /**
     * @public
     *
     * @desc Remove a string from the trie
     *
     * @param {string} word - string to remove
     */

  }, {
    key: "remove",
    value: function remove(word) {
      if ((typeof word === "undefined" ? "undefined" : _typeof(word)) !== PrimitiveType.STRING) {
        throw new Error("Unable to remove non-string value: " + word);
      }

      /**
       * @public
       *
       * @desc Remove helper
       *
       * @param {TrieNode} curr - trie node
       * @param {number} level - level in trie (0 -> height)
       * @return {boolean} true if node is a leaf node and should be deleted; otherwise false
       */
      // $FlowFixMe
      function _remove(curr) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (!curr) return false;

        if (level === word.length) {
          curr._isCompleteWord = false;
          return curr.isLeafNode;
        }

        var char = word[level];

        if (_remove(curr.get(char), level + 1)) {
          curr.delete(char);
          return curr.isLeafNode;
        }
      }

      return _remove(this.root);
    }

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
        node = node.get(query[index]);
        if (!node) break;
        index++;
      }

      return {
        query: query,
        matchedChars: index,
        isMatch: query.length === index,
        // $FlowFixMe
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

var version = "0.0.13";

var Super = {
  version: version,
  // Data Structures
  Array: _Array,
  AVLTree: AVLTree,
  BinaryTree: BinaryTree,
  Heap: Heap,
  LinkedList: LinkedList,
  Map: _Map,
  Object: _Object,
  PriorityQueue: PriorityQueue,
  Queue: Queue,
  Set: _Set,
  Trie: Trie,
  // Data Types
  Math: _Math,
  Number: _Number,
  String: _String,
  // Sorting Algorithms
  bubbleSort: bubbleSort,
  insertionSort: insertionSort,
  mergeSort: mergeSort,
  quickSort: quickSort,
  selectionSort: selectionSort
};

export default Super;
export { version, _Array as Array, AVLTree, BinaryTree, Heap, LinkedList, _Map as Map, _Object as Object, PriorityQueue, Queue, _Set as Set, Trie, _Math as Math, _Number as Number, _String as String, bubbleSort, insertionSort, mergeSort, quickSort, selectionSort };
