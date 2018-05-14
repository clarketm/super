/**
 * @flow
 * @module super/linkedlist
 */

import { ListNode } from "./ListNode";

/**
 *
 * LinkedList with superpowers! 💪
 *
 * @public
 *
 */
class LinkedList {
  /**
   * @public
   *
   * @desc Construct a LinkedList
   *
   * @param {Iterable} iterable
   */
  constructor(iterable: Iterable = []) {
    let head = new ListNode(0);
    let prev = null;
    let curr = head;
    let size = 0;

    for (let item of iterable) {
      curr.next = new ListNode(item);
      curr = curr.next;

      curr.prev = prev;
      prev = curr;

      size++;
    }

    this._size = size;
    this._head = head.next;
  }

  /**
   * @public
   *
   * @desc Get the head of the list
   *
   * @returns {ListNode} head node
   */
  get head(): ListNode {
    return this._head;
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

  // TODO:
  // add (item: Item)
  // searchNodeAt (position: number)
  // remove (position: number)

  /**
   * @public
   *
   * @desc Convert the node and next nodes (recursively) to an array
   *
   * @returns {Array} array representation of the list
   */
  toArray(): Array {
    let array = [];
    let node = this.head;

    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }

    return array;
  }
}

export { LinkedList };
