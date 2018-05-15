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

    for (let str of iterable) {
      this.insert(str);
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
   * @param {string} str - string to insert
   */
  insert(str: string) {
    if (typeof str !== PrimitiveType.STRING) {
      throw new Error(`Unable to insert non-string value: ${str}`);
    }

    let curr = this.root;

    for (const char of str) {
      if (curr.hasChild(char)) {
        curr = curr.getChild(char);
      } else {
        let node = new TrieNode(char);
        curr.setChild(char, node);
        curr = node;
      }
    }

    curr._isCompleteWord = true;
  }

  // TODO:
  // remove (str: string)

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
      node = node.getChild(query[index]);
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
