// @flow

import { PrimitiveType } from "../../../shared/src/constants";

/**
 * @module supermap
 *
 */

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
