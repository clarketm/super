// @flow

/**
 * @module superset
 *
 */

/**
 * @typedef {Function} Callback
 */
type Callback = (value1: any, value2: any, set: Set) => boolean;

/**
 *
 * Set with superpowers! 💪
 *
 * @public
 *
 * @extends {Set}
 */
class _Set extends Set {
  /**
   * @public
   *
   * @desc Construct a Set
   *
   * @param {Iterable} iterable
   */
  constructor(iterable: Iterable) {
    super(iterable);
  }

  /**
   * @public
   *
   * @desc Tests whether at least one element in the set passes the test implemented by the provided function
   *
   * @param {Callback} callback - callback function
   * @returns {boolean} true if the callback function returns a truthy value for any set element; otherwise, false
   */
  some(callback: (value1: any, value2: any, set: Set) => boolean): boolean {
    let result;

    for (let [value1, value2] of this.entries()) {
      result = callback(value1, value2, this);
      if (result) return true;
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
  every(callback: (value1: any, value2: any, set: Set) => boolean): boolean {
    let result;

    for (let [value1, value2] of this.entries()) {
      result = callback(value1, value2, this);
      if (!result) return false;
    }

    return true;
  }

  /**
   * @public
   *
   * @desc Subset of a set
   *
   * @param {Set} setB - SetB
   * @returns {boolean} setA is subset of setB
   */
  isSubset(setB: Set): boolean {
    let setA = this;

    for (let v of setA) {
      if (!setB.has(v)) return false;
    }
    return true;
  }

  /**
   * @public
   *
   * @desc Superset of a set
   *
   * @param {Set} setB - SetB
   * @returns {boolean} setA is superset of setB
   */
  isSuperset(setB: Set): boolean {
    let setA = this;

    for (let v of setB) {
      if (!setA.has(v)) return false;
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
  union(setB: Set): Set {
    let setA = this;
    let setC = new Set(setA);

    for (let v of setB) {
      setC.add(v);
    }

    return setC;
  }

  /**
   * @public
   *
   * @desc Intersection of setA and setB
   *
   * @param {Set} setB - SetB
   * @returns {Set} setC - intersection between setA and setB
   */
  intersection(setB: Set): Set {
    let setA = this;
    let setC = new Set();

    for (let v of setB) {
      if (setA.has(v)) setC.add(v);
    }

    return setC;
  }

  /**
   * @public
   *
   * @desc Difference of setA and setB
   *
   * @param {Set} setB - SetB
   * @returns {Set} setC - difference between setA and setB
   */
  difference(setB: Set): Set {
    let setA = this;
    let setC = new Set(setA);

    for (let v of setB) {
      setC.delete(v);
    }

    return setC;
  }

  /**
   * @public
   *
   * @desc Symmetric difference of setA and setB
   *
   * @param {Set} setB - SetB
   * @returns {Set} setC - difference difference between setA and setB
   */
  symmetricDifference(setB: Set): Set {
    let setA = this;
    let setC = new Set(setA);

    for (let v of setB) {
      if (setA.has(v)) setC.delete(v);
      else setC.add(v);
    }

    return setC;
  }
}

export default _Set;
export { _Set as Set };
