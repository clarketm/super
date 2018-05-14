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
var _Map = (function (Map) {
  function _Map(iterable) {
    Map.call(this, iterable);
  }

  if ( Map ) _Map.__proto__ = Map;
  _Map.prototype = Object.create( Map && Map.prototype );
  _Map.prototype.constructor = _Map;
  /**
   * @public
   *
   * @desc Tests whether at least one element in the map passes the test implemented by the provided function
   *
   * @param {Callback} callback - callback function
   * @returns {boolean} true if the callback function returns a truthy value for any map element; otherwise, false
   */
  _Map.prototype.some = function some (callback) {
    var this$1 = this;

    var result;

    for (var i = 0, list = this$1.entries(); i < list.length; i += 1) {
      var ref = list[i];
      var key = ref[0];
      var value = ref[1];

      result = callback(value, key, this$1);
      if (result) { return true; }
    }
    return false;
  };
  /**
   * @public
   *
   * @desc Test whether all elements in the map pass the test implemented by the provided function
   *
   * @param {Callback} callback - callback function
   * @returns {boolean} true if the callback function returns a truthy value for every map element; otherwise, false
   */
  _Map.prototype.every = function every (callback) {
    var this$1 = this;

    var result;

    for (var i = 0, list = this$1.entries(); i < list.length; i += 1) {
      var ref = list[i];
      var key = ref[0];
      var value = ref[1];

      result = callback(value, key, this$1);
      if (!result) { return false; }
    }
    return true;
  };
  /**
   * @public
   *
   * @desc Similar to get(), but will set key to defaultValue if key is not already in Map.
   *
   * @param {Item} key - Map key
   * @param {Item} defaultValue - the default value to set in Map if the key is not defined
   * @returns {Item} The value if the key is defined in Map; otherwise, the default value
   */
  _Map.prototype.setDefault = function setDefault (key, defaultValue) {
    if (this.has(key)) {
      return this.get(key);
    } else {
      this.set(key, defaultValue);
      return defaultValue;
    }
  };
  /**
   * @public
   *
   * @desc Convert Map to an Object
   *
   * @returns {object} Object representation of Map
   */
  _Map.prototype.toObject = function toObject () {
    return Array.from(this).reduce(function (obj, ref) {
      var key = ref[0];
      var value = ref[1];

      if (typeof key !== PrimitiveType.OBJECT) {
        obj[key] = value;
      }
      return obj;
    }, {});
  };

  return _Map;
}(Map));

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
var _Array = (function (Array) {
  function _Array(iterable) {
    var ref;

    if ( iterable === void 0 ) iterable = [];
    Array.call(this);
    (ref = this).push.apply(ref, iterable);
  }

  if ( Array ) _Array.__proto__ = Array;
  _Array.prototype = Object.create( Array && Array.prototype );
  _Array.prototype.constructor = _Array;
  /**
   * @public
   *
   * @desc Maps each element using a mapping function, then flattens the result into a new array
   *
   * @param {Callback} callback - callback function
   * @returns {Array} A new array with each element being the result of the callback function and flattened to a depth of 1
   */
  _Array.prototype.flatMap = function flatMap (callback) {
    return this.map(callback).flatten();
  };
  /**
   * @public
   *
   * @desc Creates a new array with all sub-array elements concatted into it recursively up to the specified depth
   *
   * @param {number} depth - flatten depth
   * @returns {Array}  new array with the sub-array elements concatted into it.
   */
  _Array.prototype.flatten = function flatten (depth) {
    if ( depth === void 0 ) depth = 1;

    function _flatten(depth, arr) {
      if (depth <= 0) { return arr; }

      return arr.reduce(function (acc, val) {
        if (Array.isArray(val)) { return acc.concat(_flatten(depth - 1, val)); }
        else { return acc.concat(val); }
      }, []);
    }
    return _flatten(depth, this);
  };

  return _Array;
}(Array));

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
_Math.factorial = function(num) {
  if (num < 0) { throw new Error("Factorial not defined for negative values"); }
  if (num === 0) { return 1; }
  return num * _Math.factorial(num - 1);
};

var RomanNumeralToIntegerMap = new Map([
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
]);

var IntegerToRomanNumeralMap = new Map([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
]);

/**
 *
 * Number with superpowers! 💪
 *
 * @public
 *
 */
var _Number = (function (Number) {
  function _Number(number) {
    Number.call(this, number);
  }

  if ( Number ) _Number.__proto__ = Number;
  _Number.prototype = Object.create( Number && Number.prototype );
  _Number.prototype.constructor = _Number;
  /**
   * @public
   *
   * @desc Convert a roman numeral to number
   *
   * @param {string} str - Roman numeral
   * @returns {number} Number representation of a roman numeral
   */
  _Number.fromRomanNumeral = function fromRomanNumeral (str) {
    function _romanToInteger(num, result) {
      if ( result === void 0 ) result = 0;

      // TODO: reduce iterations
      for (var i = 0, list = RomanNumeralToIntegerMap; i < list.length; i += 1) {
        var ref = list[i];
        var roman = ref[0];
        var int = ref[1];

        if (num.slice(0, roman.length) === roman) {
          return _romanToInteger(num.slice(roman.length), result + int);
        }
      }
      return result;
    }
    return _romanToInteger(str);
  };
  /**
   * @public
   *
   * @desc Convert a number to roman numeral
   *
   * @returns {string} Roman numeral representation of number
   */
  _Number.prototype.toRomanNumeral = function toRomanNumeral () {
    function _integerToRoman(num, result) {
      if ( result === void 0 ) result = "";

      // TODO: reduce iterations
      for (var i = 0, list = IntegerToRomanNumeralMap; i < list.length; i += 1) {
        var ref = list[i];
        var int = ref[0];
        var roman = ref[1];

        if (num >= int) { return _integerToRoman(num - int, result + roman); }
      }
      return result;
    }
    return _integerToRoman(this);
  };

  return _Number;
}(Number));

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
var _Object = (function (Object) {
  function _Object(object) {
    Object.call(this, object);
  }

  if ( Object ) _Object.__proto__ = Object;
  _Object.prototype = Object.create( Object && Object.prototype );
  _Object.prototype.constructor = _Object;

  /**
   * @public
   *
   * @desc Check for nested value from string key
   *
   * @param {string} path
   * @return {boolean} property value exists
   */
  _Object.prototype.hasNested = function hasNested (path) {
    var item = this;
    // TODO: throw error on invalid path
    path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

    var keys = path.split(".");
    for (var i = 0, list = keys; i < list.length; i += 1) {
      var key = list[i];

      if (typeof item === PrimitiveType.OBJECT && key in item) { item = item[key]; }
      else { return false; }
    }
    return true;
  };

  /**
   * @public
   *
   * @desc  Get nested JavaScript object value from string key
   *
   * @param {string} path
   * @return {Item} property value
   */
  _Object.prototype.getNested = function getNested (path) {
    var item = this;
    // TODO: throw error on invalid path
    path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

    var keys = path.split(".");
    for (var i = 0, list = keys; i < list.length; i += 1) {
      var key = list[i];

      if (typeof item === PrimitiveType.OBJECT && key in item) { item = item[key]; }
      else { return; }
    }
    return item;
  };

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
  _Object.prototype.clone = function clone (config) {
    if ( config === void 0 ) config = {};

    var includeNonEnumerable = config.includeNonEnumerable; if ( includeNonEnumerable === void 0 ) includeNonEnumerable = false;

    /**
     * @private
     *
     * @desc Deep clone helper
     *
     * @param {Item} item
     * @returns {any} cloned item
     */
    function _clone(item) {
      if (item === null || typeof item !== PrimitiveType.OBJECT) {
        return item;
      }

      if (item instanceof InstanceType.DATE) {
        return new Date(item.valueOf());
      }

      if (item instanceof InstanceType.ARRAY) {
        var copy = [];

        item.forEach(function (_, i) { return (copy[i] = _clone(item[i])); });

        return copy;
      }

      if (item instanceof InstanceType.OBJECT) {
        var copy$1 = {};

        Object.getOwnPropertySymbols(item).forEach(function (s) { return (copy$1[s] = _clone(item[s])); });

        if (includeNonEnumerable) {
          Object.getOwnPropertyNames(item).forEach(function (k) { return (copy$1[k] = _clone(item[k])); });
        } else {
          Object.keys(item).forEach(function (k) { return (copy$1[k] = _clone(item[k])); });
        }

        return copy$1;
      }

      throw new Error(("Unable to copy object: " + item));
    }

    return _clone(this, config);
  };

  return _Object;
}(Object));

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
 * @desc Get the current size of the queue
 *
 * @returns {number} size of the queue
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
var _Set = (function (Set) {
  function _Set(iterable) {
    Set.call(this, iterable);
  }

  if ( Set ) _Set.__proto__ = Set;
  _Set.prototype = Object.create( Set && Set.prototype );
  _Set.prototype.constructor = _Set;

  /**
   * @public
   *
   * @desc Tests whether at least one element in the set passes the test implemented by the provided function
   *
   * @param {Callback} callback - callback function
   * @returns {boolean} true if the callback function returns a truthy value for any set element; otherwise, false
   */
  _Set.prototype.some = function some (callback) {
    var this$1 = this;

    var result;

    for (var i = 0, list = this$1.entries(); i < list.length; i += 1) {
      var ref = list[i];
      var value1 = ref[0];
      var value2 = ref[1];

      result = callback(value1, value2, this$1);
      if (result) { return true; }
    }

    return false;
  };

  /**
   * @public
   *
   * @desc Test whether all elements in the set pass the test implemented by the provided function
   *
   * @param {Callback} callback - callback function
   * @returns {boolean} true if the callback function returns a truthy value for every set element; otherwise, false
   */
  _Set.prototype.every = function every (callback) {
    var this$1 = this;

    var result;

    for (var i = 0, list = this$1.entries(); i < list.length; i += 1) {
      var ref = list[i];
      var value1 = ref[0];
      var value2 = ref[1];

      result = callback(value1, value2, this$1);
      if (!result) { return false; }
    }

    return true;
  };

  /**
   * @public
   *
   * @desc Subset of a set
   *
   * @param {Set} setB - SetB
   * @returns {boolean} setA is subset of setB
   */
  _Set.prototype.isSubset = function isSubset (setB) {
    var setA = this;

    for (var i = 0, list = setA; i < list.length; i += 1) {
      var v = list[i];

      if (!setB.has(v)) { return false; }
    }
    return true;
  };

  /**
   * @public
   *
   * @desc Superset of a set
   *
   * @param {Set} setB - SetB
   * @returns {boolean} setA is superset of setB
   */
  _Set.prototype.isSuperset = function isSuperset (setB) {
    var setA = this;

    for (var i = 0, list = setB; i < list.length; i += 1) {
      var v = list[i];

      if (!setA.has(v)) { return false; }
    }
    return true;
  };

  /**
   * @public
   *
   * @desc Union of setA and setB
   *
   * @param {Set} setB - SetB
   * @returns {Set} setC - union between setA and setB
   */
  _Set.prototype.union = function union (setB) {
    var setA = this;
    var setC = new Set(setA);

    for (var i = 0, list = setB; i < list.length; i += 1) {
      var v = list[i];

      setC.add(v);
    }

    return setC;
  };

  /**
   * @public
   *
   * @desc Intersection of setA and setB
   *
   * @param {Set} setB - SetB
   * @returns {Set} setC - intersection between setA and setB
   */
  _Set.prototype.intersection = function intersection (setB) {
    var setA = this;
    var setC = new Set();

    for (var i = 0, list = setB; i < list.length; i += 1) {
      var v = list[i];

      if (setA.has(v)) { setC.add(v); }
    }

    return setC;
  };

  /**
   * @public
   *
   * @desc Difference of setA and setB
   *
   * @param {Set} setB - SetB
   * @returns {Set} setC - difference between setA and setB
   */
  _Set.prototype.difference = function difference (setB) {
    var setA = this;
    var setC = new Set(setA);

    for (var i = 0, list = setB; i < list.length; i += 1) {
      var v = list[i];

      setC.delete(v);
    }

    return setC;
  };

  /**
   * @public
   *
   * @desc Symmetric difference of setA and setB
   *
   * @param {Set} setB - SetB
   * @returns {Set} setC - difference difference between setA and setB
   */
  _Set.prototype.symmetricDifference = function symmetricDifference (setB) {
    var setA = this;
    var setC = new Set(setA);

    for (var i = 0, list = setB; i < list.length; i += 1) {
      var v = list[i];

      if (setA.has(v)) { setC.delete(v); }
      else { setC.add(v); }
    }

    return setC;
  };

  return _Set;
}(Set));

/**
 *
 * String with superpowers! 💪
 *
 * @public
 *
 */
var _String = (function (String) {
  function _String(string) {
    String.call(this, string);
  }

  if ( String ) _String.__proto__ = String;
  _String.prototype = Object.create( String && String.prototype );
  _String.prototype.constructor = _String;

  /**
   * @public
   *
   * @desc Transposes the ordering of all characters in the string
   *
   * @returns {string} String reversed
   */
  _String.prototype.reverse = function reverse () {
    return this.split("")
      .filter(function (s) { return s; })
      .reverse()
      .join("");
  };

  /**
   * @public
   *
   * @desc Transposes the ordering of the words in the string
   *
   * @returns {string} String with words reversed
   */
  _String.prototype.reverseWords = function reverseWords () {
    return this.split(" ")
      .filter(function (s) { return s; })
      .reverse()
      .join(" ");
  };

  /**
   * @public
   *
   * @desc Convert a string to title case
   *
   * @returns {string} Title cased string representation
   */
  _String.prototype.toTitleCase = function toTitleCase () {
    return this.split(" ")
      .map(function (v) { return v && v.charAt(0).toUpperCase() + v.substr(1).toLowerCase(); })
      .join(" ");
  };

  return _String;
}(String));

var version = "0.0.2-alpha";

var Super = {
  version: version,
  Array: _Array,
  Map: _Map,
  Math: _Math,
  Number: _Number,
  Object: _Object,
  Queue: Queue,
  Set: _Set,
  String: _String
};

export default Super;
export { version, _Array as Array, _Map as Map, _Math as Math, _Number as Number, _Object as Object, Queue, _Set as Set, _String as String };
