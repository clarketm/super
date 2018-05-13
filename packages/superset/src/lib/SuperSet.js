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
  constructor (iterable: Iterable) {
    super(iterable);
  }

  /**
   * @public
   *
   * @desc Subset of a set
   *
   * @param {Set} setB - SetB
   * @returns {boolean} setA is subset of setB
   */
  isSubset (setB: Set): boolean {
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
  isSuperset (setB: Set): boolean {
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
  union (setB: Set): Set {
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
  intersection (setB: Set): Set {
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
  difference (setB: Set): Set {
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
  symmetricDifference (setB: Set): Set {
    let setA = this;
    let setC = new Set(setA);

    for (let v of setB) {
      if (setA.has(v)) setC.delete(v);
      else setC.add(v);
    }

    return setC;
  }
}

// export { SuperSet as Set };
