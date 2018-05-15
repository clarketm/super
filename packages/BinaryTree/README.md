# BinaryTree

BinaryTree with superpowers! 💪

### `constructor(iterable: Iterable<number>)`

Construct a BinaryTree

### `root: BinaryTreeNode`

Get the root of the tree

### `height: number`

Get the height of the tree

### `getHeight(node: BinaryTreeNode): number`

Get the height of the tree at node

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `findMin(node: BinaryTreeNode): BinaryTreeNode`

Find minimum value in tree

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `findMax(node: BinaryTreeNode): BinaryTreeNode`

Find maximum value in tree

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `insert(value: Item)`

Insert a value into the tree

| Name  | Type | Attribute | Description                   |
| ----- | ---- | --------- | ----------------------------- |
| value | Item |           | value to insert into the tree |

### `search(value: Item): BinaryTreeNode`

Search and retrieve a value from the tree

| Name  | Type | Attribute | Description     |
| ----- | ---- | --------- | --------------- |
| value | Item |           | value to search |

### `remove(value: Item)`

Remove a value from the tree

| Name  | Type | Attribute | Description     |
| ----- | ---- | --------- | --------------- |
| value | Item |           | value to remove |

### `preOrder(node: BinaryTreeNode): Array<BinaryTreeNode>`

Traverse the tree in preOrder traversal ordering

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `inOrder(node: BinaryTreeNode): Array<BinaryTreeNode>`

Traverse the tree in inOrder traversal ordering

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `postOrder(node: BinaryTreeNode): Array<BinaryTreeNode>`

Traverse the tree in postOrder traversal ordering

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `levelOrder(node: BinaryTreeNode): Array<BinaryTreeNode>`

Traverse the tree in levelOrder traversal ordering

| Name | Type           | Attribute | Description |
| ---- | -------------- | --------- | ----------- |
| node | BinaryTreeNode |           | root node   |

### `toArray(traversal: Traversal, flatten: boolean): Array<BinaryTreeNode|Item>`

Convert the tree to an array

| Name      | Type      | Attribute | Description                                       |
| --------- | --------- | --------- | ------------------------------------------------- |
| traversal | Traversal |           | method of traversal                               |
| flatten   | boolean   |           | if false return nodes; if true return only values |

## `BinaryTreeNode`

BinaryTreeNode

### `constructor(value: Item)`

Construct a BinaryTreeNode

### `value: Item`

Get the value of node

### `left: BinaryTreeNode`

Get the right child node

### `right: BinaryTreeNode`

Get the right child node
