/**
 * @flow
 * @module super/trie
 */

import { TrieNode } from "./TrieNode";
import { PrimitiveType } from "../../../shared/src/constants";

type Match = {
  query: string,
  matchedChars: number,
  isMatch: boolean,
  isCompleteWord: boolean,
  node: TrieNode
};

/**
 *
 * Trie with superpowers! 💪
 *
 * @public
 *
 */
class Trie {
  /**
   * @public
   *
   * @desc Construct a Trie
   *
   * @param {Iterable<string>} iterable
   */
  constructor(iterable: Iterable<string> = []) {
    this._root = new TrieNode();

    for (let word of iterable) {
      this.insert(word);
    }
  }

  /**
   * @public
   *
   * @desc Get the root of the trie
   *
   * @returns {TrieNode} root node
   */
  get root(): TrieNode {
    return this._root;
  }

  /**
   * @public
   *
   * @desc Insert a string into the trie
   *
   * @param {string} word - string to insert
   */
  insert(word: string) {
    if (typeof word !== PrimitiveType.STRING) {
      throw new Error(`Unable to insert non-string value: ${word}`);
    }

    let curr = this.root;

    for (const char of word) {
      if (curr.has(char)) {
        curr = curr.get(char);
      } else {
        let node = new TrieNode(char);
        curr.set(char, node);
        curr = node;
      }
    }

    curr._isCompleteWord = true;
  }

  /**
   * @public
   *
   * @desc Remove a string from the trie
   *
   * @param {string} word - string to remove
   */
  remove(word: string) {
    if (typeof word !== PrimitiveType.STRING) {
      throw new Error(`Unable to remove non-string value: ${word}`);
    }

    /**
     * @public
     *
     * @desc Remove helper
     *
     * @param {TrieNode} curr - trie node
     * @param {number} level - level in trie (0 -> height)
     * @return {boolean} true if node is a leaf node and should be deleted; otherwise false
     */
    function _remove(curr: TrieNode, level: number = 0): boolean {
      if (!curr) return false;

      if (level === word.length) {
        curr._isCompleteWord = false;
        return curr.isLeafNode;
      }

      let char = word[level];

      if (_remove(curr.get(char), level + 1)) {
        curr.delete(char);
        return curr.isLeafNode;
      }
    }

    return _remove(this.root);
  }

  /**
   * @public
   *
   * @desc Search for a node in the trie matching the query
   *
   * @param {string} query - string query to search for
   * @returns {Match} match object
   */
  search(query: string): Match {
    let node = this.root;
    let index = 0;

    while (index < query.length) {
      node = node.get(query[index]);
      if (!node) break;
      index++;
    }

    return {
      query,
      matchedChars: index,
      isMatch: query.length === index,
      isCompleteWord: query.length === index && node.isCompleteWord,
      node
    };
  }

  /**
   * @public
   *
   * @desc Check if the trie includes a word
   *
   * @param {string} word - full word to search for
   * @returns {boolean} contains the word
   */
  includes(word: string): boolean {
    let { isCompleteWord } = this.search(word);
    return isCompleteWord;
  }

  /**
   * @public
   *
   * @alias includes(word)
   *
   * @desc Check if the trie contains a word
   *
   * @param {string} word - full word to search for
   * @returns {boolean} contains the word
   */
  contains(word: string): boolean {
    return this.includes(word);
  }

  /**
   * @public
   *
   * @desc Check if the trie contains a prefix
   *
   * @param {string} prefix - prefix (i.e. partial word) to search for
   * @returns {boolean} contains the prefix
   */
  startsWith(prefix: string): boolean {
    let { isMatch } = this.search(prefix);
    return isMatch;
  }
}

export { Trie };
