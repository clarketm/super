// @flow

/**
 * @module super/math
 *
 */

/**
 *
 * Math with superpowers! 💪
 *
 * @public
 *
 * @alias Math
 */
export const _Math = Object.create(Math);

/**
 * @public
 *
 * @desc Factorial
 *
 * @param {number} num - integral number
 * @returns {number} factorial of num
 */
_Math.factorial = function(num: number): Math {
  if (num < 0) throw new Error("Factorial not defined for negative values");
  if (num === 0) return 1;
  return num * _Math.factorial(num - 1);
};

export { _Math as Math };
