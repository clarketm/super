/**
 * @flow
 * @module super/trie
 */

import type { character } from "../../../shared/src/types";

const SpecialChar = {
  ROOT: "√"
};

/**
 *
 * TrieNode
 *
 * @public
 *
 */
class TrieNode {
  /** @private */
  _char: character;

  /** @private */
  _isCompleteWord: boolean;

  /** @private */
  _children: Map<character, TrieNode>;

  /**
   * @public
   *
   * @desc Construct a TrieNode
   *
   * @param {character} char - node character value
   */
  constructor(char: character = SpecialChar.ROOT) {
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
  get char(): character {
    return this._char;
  }

  /**
   * @public
   *
   * @desc Checks if node is a complete word
   *
   * @returns {boolean} is complete word
   */
  get isCompleteWord(): boolean {
    return this._isCompleteWord;
  }

  /**
   * @public
   *
   * @desc Checks if node is a leaf node
   *
   * @returns {boolean} is leaf node
   */
  get isLeafNode(): boolean {
    return this.count === 0;
  }

  /**
   * @public
   *
   * @desc Check if node has a specific character as a child
   *
   * @param {character} char - character to check
   * @returns {boolean} node has child
   */
  has(char: character): boolean {
    return this._children.has(char);
  }

  /**
   * @public
   *
   * @desc Get child node with specific character value
   *
   * @param {character} char - character to get
   * @returns {TrieNode} node with character value
   */
  get(char: character): ?TrieNode {
    return this._children.get(char);
  }

  /**
   * @public
   *
   * @desc Set child node with specific character value
   *
   * @param {character} char - character to set
   * @param {TrieNode} node - node to assign to character
   */
  set(char: character, node: TrieNode) {
    this._children.set(char, node);
  }

  /**
   * @public
   *
   * @desc Delete child node with specific character value
   *
   * @param {character} char - character to delete
   */
  delete(char: character) {
    this._children.delete(char);
  }
}

export { TrieNode };
