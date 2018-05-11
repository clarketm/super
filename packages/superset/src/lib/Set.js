/**
 * @module superset
 */

/**
 *
 * Set with superpowers! 💪
 *
 * @public
 *
 * @extends {Set}
 */
class SuperSet extends Set {
  /**
   *
   * Union of two sets
   *
   * @public
   *
   * @param {Set} set
   * @returns {Set} Set union
   */
  union(set) {
    let union = new Set(this);
    set.forEach(v => union.add(v));
    return union;
  }

  /**
   *
   * Intersection of two sets
   *
   * @public
   *
   * @param {Set} set
   * @returns {Set} Set intersection
   */
  intersection(set) {
    let intersection = new Set();
    set.forEach(v => this.has(v) && intersection.add(v));
    return intersection;
  }

  /**
   *
   * Difference of two sets
   *
   * @public
   *
   * @param {Set} set
   * @returns {Set} Set difference
   */
  difference(set) {
    let difference = new Set(this);
    set.forEach(v => difference.delete(v));
    return difference;
  }

  /**
   *
   * Symmetric Difference of two sets
   *
   * @public
   *
   * @param {Set} set
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

export { SuperSet as Set };
