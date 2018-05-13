// @flow

/**
 * @module superstring
 *
 */

/**
 *
 * String with superpowers! 💪
 *
 * @public
 *
 * @extends {String}
 */
export class SuperString extends String {
  /**
   * @public
   *
   * @desc Construct a String
   *
   * @param {string} string
   */
  constructor(string: String) {
    super(string);
  }

  /**
   * @public
   *
   * @desc Convert a string to title case
   *
   * @returns {string} Title cased string representation
   */
  toTitleCase(): String {
    return this.split(" ")
      .map(v => v && v.charAt(0).toUpperCase() + v.substr(1).toLowerCase())
      .join(" ");
  }
}

// export { SuperString as String };
