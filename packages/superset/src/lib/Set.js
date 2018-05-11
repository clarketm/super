/**
 * @module superset
 *
 */


/**
 * @param {Set} set
 * @returns {Set} Set union
 */
Set.prototype.union = function (set) {
  let union = new Set(this);
  set.forEach(v => union.add(v));
  return union;
};

/**
 * @param {Set} set
 * @returns {Set} Set intersection
 */
Set.prototype.intersection = function (set) {
  let intersection = new Set();
  set.forEach(v => this.has(v) && intersection.add(v));
  return intersection;
};

/**
 * @param {Set} set
 * @returns {Set} Set difference
 */
Set.prototype.difference = function (set) {
  let difference = new Set(this);
  set.forEach(v => difference.delete(v));
  return difference;
};

/**
 * @param {Set} set
 * @returns {Set} Set symmetricDifference
 */
Set.prototype.symmetricDifference = function (set) {
  let sDifference = new Set(this);
  set.forEach(
    v => (this.has(v) && sDifference.delete(v)) || sDifference.add(v)
  );
  return sDifference;
};

module.exports = Set;
