// @flow

import { PrimitiveType } from "./constants";
import type { Comparator, Item } from "./types";

export function isIterable(item: Item) {
  try {
    return typeof item[Symbol.iterator] === PrimitiveType.FUNCTION;
  } catch (e) {
    return false;
  }
}

export function _defaultComparator(a: any, b: any): number | boolean {
  return a - b;
}

export function _compare(comparator: Comparator): Comparator {
  return (a, b) => comparator(a, b) < 0;
}
