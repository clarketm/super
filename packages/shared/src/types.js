/**
 * @typedef {null|undefined|boolean|number|string|Symbol|Function|Array|Date|Object} Item
 */
import { AVLTreeNode } from "../../AVLTree/src/lib/AVLTreeNode";

export type Item =
  | null
  | undefined
  | boolean
  | number
  | string
  | Symbol
  | Function
  | Array
  | Date
  | Object;

/**
 * @typedef {string} character
 */
export type character = string;

/**
 * @typedef {Function} Comparator
 */
export type Comparator = (a: any, b: any) => number;
