/**
 * @flow
 * @module super/string
 */

/**
 *
 * String with superpowers! 💪
 *
 * @public
 *
 */
class _String extends String {
  /**
   * @public
   *
   * @desc Construct a String
   *
   * @param {string} string
   */
  constructor(string: string) {
    super(string);
  }

  /**
   * @public
   *
   * @desc Transposes the ordering of all characters in the string
   *
   * @returns {string} String reversed
   */
  reverse(): string {
    return this.split("")
      .filter(s => s)
      .reverse()
      .join("");
  }

  /**
   * @public
   *
   * @desc Transposes the ordering of the words in the string
   *
   * @returns {string} String with words reversed
   */
  reverseWords(): string {
    return this.split(" ")
      .filter(s => s)
      .reverse()
      .join(" ");
  }

  /**
   * @public
   *
   * @desc Convert a string to title case
   *
   * @returns {string} Title cased string representation
   */
  toTitleCase(): string {
    return this.split(" ")
      .map(v => v && v.charAt(0).toUpperCase() + v.substr(1).toLowerCase())
      .join(" ");
  }
}

export { _String as String };
