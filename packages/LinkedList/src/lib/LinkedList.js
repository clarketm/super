/**
 * @flow
 * @module super/linkedlist
 */

import { ListNode } from "./ListNode";
import type { Item } from "../../../shared/src/types";

/**
 *
 * LinkedList with superpowers! 💪
 *
 * @public
 *
 */
class LinkedList {
  /** @private */
  _size: number;

  /** @private */
  _head: ?ListNode;

  /** @private */
  _tail: ?ListNode;

  /**
   * @public
   *
   * @desc Construct a LinkedList
   *
   * @param {Array<Item>} iterable
   */
  constructor(iterable: Array<Item> = []) {
    let head = new ListNode(0);
    let prev = null;
    let curr = head;
    let size = 0;

    for (let item: Item of iterable) {
      curr.next = new ListNode(item);
      curr = curr.next;

      curr.prev = prev;
      prev = curr;

      size++;
    }

    this._size = size;
    this._head = head.next;
    this._tail = prev;
  }

  /**
   * @public
   *
   * @desc Get the head of the list
   *
   * @returns {ListNode} head node
   */
  get head(): ?ListNode {
    return this._head;
  }

  /**
   * @public
   *
   * @desc Get the tail of the list
   *
   * @returns {ListNode} tail node
   */
  get tail(): ?ListNode {
    return this._tail;
  }

  /**
   * @public
   *
   * @desc Get the size of the list
   *
   * @returns {number} number of nodes in the list
   */
  get size(): number {
    return this._size;
  }

  /**
   * @public
   *
   * @desc Insert a node at a given position
   *
   * @param {number} position - position to insert node
   * @param {Item} value - value to insert into list
   * @returns {number} size after insertion
   */
  // TODO: insert by value
  insert(position: number, value: Item): number {
    if (position < 0) {
      return this.insert(Math.max(0, this.size + 1 - Math.abs(position)), value);
    }

    let prev = null;
    let curr = this.head;

    let p = 0;
    while (p < position && curr) {
      prev = curr;
      curr = curr.next;
      p++;
    }

    let node = new ListNode(value);
    node.prev = prev;
    node.next = curr;

    if (prev) prev.next = node;
    else this._head = node;

    if (curr) curr.prev = node;
    else this._tail = node;

    this._size++;

    return this._size;
  }

  /**
   * @public
   *
   * @alias insert(0, value)
   *
   * @desc Prepend a node to the front of the list
   *
   * @param {Item} value - value to prepend to list
   * @returns {number} size after insertion
   */
  prepend(value: Item): number {
    return this.insert(0, value);
  }

  /**
   * @public
   *
   * @alias insert(0, value)
   *
   * @desc Unshift a node to the front of the list
   *
   * @param {Item} value - value to unshift to list
   * @returns {number} size after insertion
   */
  unshift(value: Item): number {
    return this.prepend(value);
  }

  /**
   * @public
   *
   * @alias insert(list.size, value)
   *
   * @desc Append a node to the rear of the list
   *
   * @param {Item} value - value to append to list
   * @returns {number} size after insertion
   */
  append(value: Item): number {
    return this.insert(this.size, value);
  }

  /**
   * @public
   *
   * @alias insert(list.size, value)
   *
   * @desc Push a node to the rear of the list
   *
   * @param {Item} value - value to push to list
   * @returns {number} size after insertion
   */
  push(value: Item): number {
    return this.append(value);
  }

  /**
   * @public
   *
   * @desc Remove a node at a given position
   *
   * @param {number} position - position to remove node
   * @returns {Item} removed item
   */
  // TODO: remove by value
  remove(position: number): Item {
    if (position < 0) {
      return this.remove(Math.max(0, this.size - Math.abs(position)));
    }

    let prev = null;
    let curr = this.head;

    let p = 0;
    while (p < position && curr) {
      prev = curr;
      curr = curr.next;
      p++;
    }

    if (prev && curr && curr.next) {
      prev.next = curr.next;
      // $FlowFixMe
      curr.next.prev = prev;
      this._size--;
    } else if (prev && curr) {
      prev.next = null;
      this._tail = prev;
      this._size--;
    } else if (curr && curr.next) {
      curr.next.prev = null;
      this._head = curr.next;
      this._size--;
    }

    return curr;
  }

  /**
   * @public
   *
   * @alias remove(0)
   *
   * @desc Shift a node from the front of list
   *
   * @returns {Item} shifted item
   */
  shift(): Item {
    return this.remove(0);
  }

  /**
   * @public
   *
   * @alias remove(list.size - 1)
   *
   * @desc Pop a node from the rear of list
   *
   * @returns {Item} shifted item
   */
  pop(): Item {
    return this.remove(this.size - 1);
  }

  // TODO:
  // searchNodeAt (position: number)

  /**
   * @public
   *
   * @desc Convert the node and next nodes (recursively) to an array
   *
   * @returns {Array<Item>} array representation of the list
   */
  toArray(): Array<Item> {
    let array = [];
    let node = this.head;

    while (node) {
      array.push(node.value);
      node = node.next;
    }

    return array;
  }
}

export { LinkedList };
