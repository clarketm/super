// @flow

/**
 * @module superset
 *
 */

/**
 *
 * Set with superpowers! 💪
 *
 * @public
 *
 * @extends {Set}
 */
export class SuperSet extends Set {
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
   * @desc Union of two sets
   *
   * @param {Set} set SetB
   * @returns {Set} Set union
   */
  union(set: Set): Set {
    let union = new Set(this);
    set.forEach(v => union.add(v));
    return union;
  }

  /**
   * @public
   *
   * @desc Intersection of two sets
   *
   * @param {Set} set SetB
   * @returns {Set} Set intersection
   */
  intersection(set: Set): Set {
    let intersection = new Set();
    set.forEach(v => this.has(v) && intersection.add(v));
    return intersection;
  }

  /**
   * @public
   *
   * @desc Difference of two sets
   *
   * @param {Set} set SetB
   * @returns {Set} Set difference
   */
  difference(set: Set): Set {
    let difference = new Set(this);
    set.forEach(v => difference.delete(v));
    return difference;
  }

  /**
   * @public
   *
   * @desc Symmetric Difference of two sets
   *
   * @param {Set} set SetB
   * @returns {Set} Set symmetricDifference
   */
  symmetricDifference(set) {
    let sDifference = new Set(this);
    set.forEach(
      v => (this.has(v) && sDifference.delete(v)) || sDifference.add(v)
    );
    return sDifference;
  }
}

// export { SuperSet as Set };
