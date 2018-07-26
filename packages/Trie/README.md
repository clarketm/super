# [Trie](https://www.npmjs.com/package/@clarketm/supertrie)

[![NPM release](https://img.shields.io/npm/v/@clarketm/supertrie.svg)](https://www.npmjs.com/package/@clarketm/supertrie)

Trie with superpowers! 💪

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/supertrie
```

### Npm

```bash
$ npm install @clarketm/supertrie --save
```

### `constructor(iterable: Iterable<string>)`

Construct a Trie

### `root: TrieNode`

Get the root of the trie

### `insert(word: string)`

Insert a string into the trie

| Name | Type   | Attribute | Description      |
| ---- | ------ | --------- | ---------------- |
| word | string |           | string to insert |

### `remove(word: string)`

Remove a string from the trie

| Name | Type   | Attribute | Description      |
| ---- | ------ | --------- | ---------------- |
| word | string |           | string to remove |

### `search(query: string): Match`

Search for a node in the trie matching the query

| Name  | Type   | Attribute | Description                |
| ----- | ------ | --------- | -------------------------- |
| query | string |           | string query to search for |

### `includes(word: string): boolean`

Check if the trie includes a word

| Name | Type   | Attribute | Description             |
| ---- | ------ | --------- | ----------------------- |
| word | string |           | full word to search for |

### `contains(word: string): boolean`

> Alias to `includes(word)`

Check if the trie contains a word

| Name | Type   | Attribute | Description             |
| ---- | ------ | --------- | ----------------------- |
| word | string |           | full word to search for |

### `startsWith(prefix: string): boolean`

Check if the trie contains a prefix

| Name   | Type   | Attribute | Description                              |
| ------ | ------ | --------- | ---------------------------------------- |
| prefix | string |           | prefix (i.e. partial word) to search for |

## `TrieNode`

TrieNode

### `constructor(char: character)`

Construct a TrieNode

### `count: number`

Get children count of the node

### `char: character`

Get character value of node

### `isCompleteWord: boolean`

Checks if node is a complete word

### `has(char: character): boolean`

Check if node has a specific character as a child

| Name | Type      | Attribute          | Description |
| ---- | --------- | ------------------ | ----------- |
| char | character | character to check |

### `get(char: character): TrieNode`

Get child node with specific character value

| Name | Type      | Attribute | Description      |
| ---- | --------- | --------- | ---------------- |
| char | character |           | character to get |

### `set(char: character, node: TrieNode)`

Set child node with specific character value

| Name | Type      | Attribute | Description                 |
| ---- | --------- | --------- | --------------------------- |
| char | character |           | character to set            |
| node | TrieNode  |           | node to assign to character |

### `delete(char: character)`

Delete child node with specific character value

| Name | Type      | Attribute | Description         |
| ---- | --------- | --------- | ------------------- |
| char | character |           | character to delete |
