// @flow

import { PrimitiveType } from "../../../shared/src/constants";

/**
 * @module supermap
 *
 */

/**
 * @typedef {Function} Callback
 */
type Callback = (value: any, key: any, map: Map) => boolean

/**
 *
 * Map with superpowers! 💪
 *
 * @public
 *
 * @extends {Map}
 */
export class SuperMap extends Map {
  /**
   * @public
   *
   * @desc Construct a Map
   *
   * @param {Iterable} iterable
   */
  constructor(iterable: Iterable) {
    super(iterable);
  }

  /**
   * @public
   *
   * @desc Tests whether at least one element in the map passes the test implemented by the provided function
   *
   * @param {Callback} callback - callback function
   * @returns {boolean} true if the callback function returns a truthy value for any map element; otherwise, false
   */
  some(callback: (value: any, key: any, map: Map) => boolean): boolean {
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
   */
  every(callback: (value: any, key: any, map: Map) => boolean): boolean {
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
   * @desc Convert Map to an Object
   *
   * @returns {object} Object representation of Map
   */
  toObject() {
    return Array.from(this).reduce((obj, [key, value]) => {
      if (typeof key !== PrimitiveType.OBJECT) {
        obj[key] = value;
      }
      return obj;
    }, {});
  }
}

// export { SuperMap as Map };
