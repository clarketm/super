# [BinaryTree](https://www.npmjs.com/package/@clarketm/superbinarytree)

[![NPM release](https://img.shields.io/npm/v/@clarketm/superbinarytree.svg)](https://www.npmjs.com/package/@clarketm/superbinarytree)

BinaryTree with superpowers! 💪

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/superbinarytree
```

### Npm

```bash
$ npm install @clarketm/superbinarytree --save
```

## API

### `constructor(iterable: Iterable<number>, comparator: Comparator)`

Construct a BinaryTree

### `root: TreeNode`

Get the root of the tree

### `height: number`

Get the height of the tree

### `getHeight(node: TreeNode): number`

Get the height of the tree at node

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `findMin(node: TreeNode): TreeNode`

Find minimum value in tree

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `findMax(node: TreeNode): TreeNode`

Find maximum value in tree

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `insert(value: Item)`

Insert a value into the tree

| Name  | Type | Attribute | Description                   |
| ----- | ---- | --------- | ----------------------------- |
| value | Item |           | value to insert into the tree |

### `search(value: Item): TreeNode`

Search and retrieve a value from the tree

| Name  | Type | Attribute | Description     |
| ----- | ---- | --------- | --------------- |
| value | Item |           | value to search |

### `remove(value: Item)`

Remove a value from the tree

| Name  | Type | Attribute | Description     |
| ----- | ---- | --------- | --------------- |
| value | Item |           | value to remove |

### `preOrder(node: TreeNode): Array<TreeNode>`

Traverse the tree in preOrder traversal ordering

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `inOrder(node: TreeNode): Array<TreeNode>`

Traverse the tree in inOrder traversal ordering

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `postOrder(node: TreeNode): Array<TreeNode>`

Traverse the tree in postOrder traversal ordering

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `levelOrder(node: TreeNode): Array<TreeNode>`

Traverse the tree in levelOrder traversal ordering

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `toArray(traversal: Traversal, flatten: boolean): Array<TreeNode|Item>`

Convert the tree to an array

| Name      | Type      | Attribute | Description                                       |
| --------- | --------- | --------- | ------------------------------------------------- |
| traversal | Traversal |           | method of traversal                               |
| flatten   | boolean   |           | if false return nodes; if true return only values |

## `TreeNode`

TreeNode

### `constructor(value: Item)`

Construct a TreeNode

### `value: Item`

Get the value of node

### `left: TreeNode`

Get the right child node

### `right: TreeNode`

Get the right child node
