// @flow

/**
 * @module supermath
 *
 */

/**
 *
 * Math with superpowers! 💪
 *
 * @public
 *
 * @extends {Math}
 */
export const SuperMath = Math;

/**
 * @public
 *
 * @desc Factorial
 *
 * @param {number} num - integral number
 * @returns {number} factorial of num
 */
SuperMath.factorial = function (num: number): Math {
  if (num < 0) throw new Error(`Factorial not defined for negative values`);
  if (num === 0) return 1;
  return num * SuperMath.factorial(num - 1);
};


