// @flow

/**
 * @module super/array
 *
 */

/**
 * @typedef {Function} Callback
 */
type Callback = (value: any, index: number, array: Array) => Array;

/**
 *
 * Array with superpowers! 💪
 *
 * @public
 *
 */
class _Array extends Array {
  /**
   * @public
   *
   * @desc Construct an Array
   *
   * @param {Iterable} iterable
   */
  constructor(iterable: Iterable = []) {
    super();
    this.push(...iterable);
  }
  /**
   * @public
   *
   * @desc Maps each element using a mapping function, then flattens the result into a new array
   *
   * @param {Callback} callback - callback function
   * @returns {Array} A new array with each element being the result of the callback function and flattened to a depth of 1
   */
  flatMap(callback: (value: any, index: number, array: Array) => boolean): Array {
    return this.map(callback).flatten();
  }
  /**
   * @public
   *
   * @desc Creates a new array with all sub-array elements concatted into it recursively up to the specified depth
   *
   * @param {number} depth - flatten depth
   * @returns {Array}  new array with the sub-array elements concatted into it.
   */
  flatten(depth: number = 1): Array {
    function _flatten(depth, arr) {
      if (depth <= 0) return arr;

      return arr.reduce((acc, val) => {
        if (Array.isArray(val)) return acc.concat(_flatten(depth - 1, val));
        else return acc.concat(val);
      }, []);
    }
    return _flatten(depth, this);
  }
}
export { _Array as Array };
