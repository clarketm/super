// @flow

import { InstanceType, PrimitiveType } from "../../../shared/src/constants";
import type { Item } from "../../../shared/src/types";

/**
 * @module superobject
 *
 */

/**
 * @typedef {object} Config
 * @property {boolean} [includeNonEnumerable=false]
 */

type Config = {
  includeNonEnumerable: ?boolean
};

/**
 *
 * Object with superpowers! 💪
 *
 * @public
 *
 * @extends {Object}
 */
class _Object extends Object {
  /**
   * @public
   *
   * @desc Construct an Object
   *
   * @param {Object} object
   */
  constructor(object: Object) {
    super(object);
  }

  /**
   * @public
   *
   * @desc Check for nested value from string key
   *
   * @param {string} path
   * @return {boolean} property value exists
   */
  hasNested(path: string): boolean {
    let item = this;
    // TODO: throw error on invalid path
    path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

    const keys = path.split(".");
    for (let key of keys) {
      if (typeof item === PrimitiveType.OBJECT && key in item) item = item[key];
      else return false;
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
  getNested(path: string): Item {
    let item = this;
    // TODO: throw error on invalid path
    path = path.replace(/\[(\w+)\]/, ".$1").replace(/^\./, "");

    const keys = path.split(".");
    for (let key of keys) {
      if (typeof item === PrimitiveType.OBJECT && key in item) item = item[key];
      else return;
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
  clone(config: Config = {}): Object {
    const { includeNonEnumerable = false } = config;

    /**
     * @private
     *
     * @desc Deep clone helper
     *
     * @param {Item} item
     * @returns {any} cloned item
     */
    function _clone(item: Item): Item {
      if (item === null || typeof item !== PrimitiveType.OBJECT) {
        return item;
      }

      if (item instanceof InstanceType.DATE) {
        return new Date(item.valueOf());
      }

      if (item instanceof InstanceType.ARRAY) {
        let copy = [];

        item.forEach((_, i) => (copy[i] = _clone(item[i])));

        return copy;
      }

      if (item instanceof InstanceType.OBJECT) {
        let copy = {};

        Object.getOwnPropertySymbols(item).forEach(
          s => (copy[s] = _clone(item[s]))
        );

        if (includeNonEnumerable) {
          Object.getOwnPropertyNames(item).forEach(
            k => (copy[k] = _clone(item[k]))
          );
        } else {
          Object.keys(item).forEach(k => (copy[k] = _clone(item[k])));
        }

        return copy;
      }

      throw new Error(`Unable to copy object: ${item}`);
    }

    return _clone(this, config);
  }
}

export default _Object;
export { _Object as Object };
