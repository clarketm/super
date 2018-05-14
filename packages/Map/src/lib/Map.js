// @flow

const PrimitiveType = {
  BOOLEAN: "boolean",
  FUNCTION: "function",
  NUMBER: "number",
  OBJECT: "object",
  STRING: "string",
  SYMBOL: "symbol",
  UNDEFINED: "undefined"
};

const InstanceType = {
  OBJECT: Object,
  ARRAY: Array,
  REGEXP: RegExp,
  DATE: Date
};

/**
 * @module supermap
 *
 */

/**
 * @typedef {Function} Callback
 */
type Callback = (value: any, key: any, map: Map) => boolean;

/**
 *
 * Map with superpowers! 💪
 *
 * @public
 *
 * @extends {Map}
 */ class _Map extends Map {
  /**
   * @public
   *
   * @desc Construct a Map
   *
   * @param {Iterable} iterable
   */ constructor(iterable: Iterable) {
    super(iterable);
  }
  /**
   * @public
   *
   * @desc Tests whether at least one element in the map passes the test implemented by the provided function
   *
   * @param {Callback} callback - callback function
   * @returns {boolean} true if the callback function returns a truthy value for any map element; otherwise, false
   */ some(callback: (value: any, key: any, map: Map) => boolean): boolean {
    let result;

    for (let [key, value] of this.entries()) {
      result = callback(value, key, this);
      if (result) return true;
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
   */ every(callback: (value: any, key: any, map: Map) => boolean): boolean {
    let result;

    for (let [key, value] of this.entries()) {
      result = callback(value, key, this);
      if (!result) return false;
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
   */ setDefault(key: Item, defaultValue: Item): Item {
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
   */ toObject() {
    return Array.from(this).reduce((obj, [key, value]) => {
      if (typeof key !== PrimitiveType.OBJECT) {
        obj[key] = value;
      }
      return obj;
    }, {});
  }
}
export default _Map;
export { _Map as Map };
