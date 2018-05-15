import { PrimitiveType } from "./constants";

export function isIterable(item) {
  try {
    return typeof item[Symbol.iterator] === PrimitiveType.FUNCTION;
  } catch (e) {
    return false;
  }
}
