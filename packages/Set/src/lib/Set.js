/**
 * @flow
 * @module super/set
 */

/**
 * @typedef {Function} Callback
 */
import type { Item } from "../../../shared/src/types";

type Callback = (value1: any, value2: any, set: Set<Item>) => boolean;

/**
 *
 * Set with superpowers! 💪
 *
 * @public
 *
 */
class _Set extends Set<Item> {
  /**
   * @public
   *
   * @desc Construct a Set
   *
   * @param {Array<Item>} iterable
   */
  constructor(iterable: Array<Item>) {
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
  some(callback: (value1: any, value2: any, set: Set<Item>) => boolean): boolean {
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
  every(callback: (value1: any, value2: any, set: Set<Item>) => boolean): boolean {
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
   * @param {Set<Item>} setB - SetB
   * @returns {boolean} setA is subset of setB
   */
  isSubset(setB: Set<Item>): boolean {
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
   * @param {Set<Item>} setB - SetB
   * @returns {boolean} setA is superset of setB
   */
  isSuperset(setB: Set<Item>): boolean {
    let setA = this;

    for (let v of setB) {
      if (!setA.has(v)) return false;
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
  isDisjoint(setB: Set<Item>): boolean {
    let setA = this;

    for (let v of setA) {
      if (setB.has(v)) return false;
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
  union(setB: Set<Item>): Set<Item> {
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
   * @param {Set<Item>} setB - SetB
   * @returns {Set<Item>} setC - intersection between setA and setB
   */
  intersection(setB: Set<Item>): Set<Item> {
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
   * @param {Set<Item>} setB - SetB
   * @returns {Set<Item>} setC - difference between setA and setB
   */
  difference(setB: Set<Item>): Set<Item> {
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
   * @param {Set<Item>} setB - SetB
   * @returns {Set<Item>} setC - difference difference between setA and setB
   */
  symmetricDifference(setB: Set<Item>): Set<Item> {
    let setA = this;
    let setC = new Set(setA);

    for (let v of setB) {
      if (setA.has(v)) setC.delete(v);
      else setC.add(v);
    }

    return setC;
  }
}

export { _Set as Set };
