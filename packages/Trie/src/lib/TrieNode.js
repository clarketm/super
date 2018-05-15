/**
 * @flow
 * @module super/trie
 */

import type { character } from "../../../shared/src/types";

/**
 *
 * TrieNode
 *
 * @public
 *
 */
class TrieNode {
  /**
   * @public
   *
   * @desc Construct a TrieNode
   *
   * @param {character} char - node character value
   */
  constructor(char: character = null) {
    this._char = char;
    this._isCompleteWord = false;
    this._children = new Map();
  }

  /**
   * @public
   *
   * @desc Get children count of the node
   *
   * @returns {number} child count
   */
  // INFO: count or size?
  get count(): number {
    return this._children.size;
  }

  /**
   * @public
   *
   * @desc Get character value of node
   *
   * @returns {character} character
   */
  // INFO: char or value?
  get char(): number {
    return this._char;
  }

  /**
   * @public
   *
   * @desc Checks if node is a complete word
   */
  get isCompleteWord(): boolean {
    return this._isCompleteWord;
  }

  /**
   * @public
   *
   * @desc Check if node has a specific character as a child
   *
   * @returns {boolean} node has child
   */
  hasChild(char: character): boolean {
    return this._children.has(char);
  }

  /**
   * @public
   *
   * @desc Get child node with specific character value
   *
   * @param {character} char - character node to get
   * @returns {TrieNode} node with character value
   */
  getChild(char: character): TrieNode {
    return this._children.get(char);
  }

  /**
   * @public
   *
   * @desc Set child node with specific character value
   *
   * @param {character} char - character node to get
   * @param {TrieNode} node - node to assign to character
   */
  setChild(char: character, node: TrieNode) {
    this._children.set(char, node);
  }
}

export { TrieNode };
