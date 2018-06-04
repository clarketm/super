# Class

## `AVLTree`

AVLTree with superpowers! 💪

### `_root: *`

### `_getBalance(node: TreeNode): number`

Get balance factor

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  | root node |

### `_rotateLeft(node: TreeNode): TreeNode`

Rotate left

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  |

### `_rotateRight(node: TreeNode): TreeNode`

Rotate right

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  |

### `insert(value: Item)`

Insert a value into the tree

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | value to insert into the tree |

### `remove(value: Item)`

Remove a value from the tree

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | value to remove |

## `_Array`

Array with superpowers! 💪

### `constructor(iterable: Array<Item>)`

Construct an Array

### `flatMap(callback: Callback): Array<Item>`

Maps each element using a mapping function, then flattens the result into a new array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | Callback |  | callback function |

### `flatten(depth: number): Array<Item>`

Creates a new array with all sub-array elements concatted into it recursively up to the specified depth

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| depth | number |  | flatten depth |

### `bubbleSort(comparator: Comparator): Array<Item>`

Sort using bubble sort

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| comparator | Comparator |  | comparator function |

### `insertionSort(comparator: Comparator): Array<Item>`

Sort using insertion sort

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| comparator | Comparator |  | comparator function |

### `mergeSort(comparator: Comparator): Array<Item>`

Sort using merge sort

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| comparator | Comparator |  | comparator function |

### `quickSort(comparator: Comparator): Array<Item>`

Sort using quick sort

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| comparator | Comparator |  | comparator function |

### `selectionSort(comparator: Comparator): Array<Item>`

Sort using selection sort

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| comparator | Comparator |  | comparator function |

## `BinaryTree`

BinaryTree with superpowers! 💪

### `constructor()`

### `_root: *`

### `_compareEqual: *`

### `_compareLessThan: *`

### `_compareGreaterThan: *`

### `_defaultComparator(a: *, b: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| a | * | nullable: undefined |
| b | * | nullable: undefined |

### `getHeight(node: TreeNode): number`

Get the height of the tree at node

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  | root node |

### `findMin(node: TreeNode): TreeNode`

Find minimum value in tree

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  | root node |

### `findMax(node: TreeNode): TreeNode`

Find maximum value in tree

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  | root node |

### `insert(value: Item)`

Insert a value into the tree

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | value to insert into the tree |

### `search(value: Item): TreeNode`

Search and retrieve a value from the tree

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | value to search |

### `remove(value: Item)`

Remove a value from the tree

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | value to remove |

### `preOrder(node: TreeNode): Array<TreeNode>`

Traverse the tree in preOrder traversal ordering

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  | root node |

### `inOrder(node: TreeNode): Array<TreeNode>`

Traverse the tree in inOrder traversal ordering

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  | root node |

### `postOrder(node: TreeNode): Array<TreeNode>`

Traverse the tree in postOrder traversal ordering

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  | root node |

### `levelOrder(node: TreeNode): Array<TreeNode>`

Traverse the tree in levelOrder traversal ordering

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | TreeNode |  | root node |

### `toArray(traversal: Traversal, flatten: boolean): Array<TreeNode | Item> `

Convert the tree to an array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| traversal | Traversal |  | method of traversal |
| flatten | boolean |  | if false return nodes; if true return only values |

## `TreeNode`

TreeNode

### `constructor()`

### `_value: *`

### `_left: *`

### `_right: *`

## `LinkedList`

LinkedList with superpowers! 💪

### `constructor()`

### `_size: *`

### `_head: *`

### `_tail: *`

### `insert(position: number, value: Item): number`

Insert a node at a given position

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| position | number |  | position to insert node |
| value | Item |  | value to insert into list |

### `prepend(value: Item): number`

Prepend a node to the front of the list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | value to prepend to list |

### `unshift(value: Item): number`

Unshift a node to the front of the list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | value to unshift to list |

### `append(value: Item): number`

Append a node to the rear of the list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | value to append to list |

### `push(value: Item): number`

Push a node to the rear of the list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | value to push to list |

### `remove(position: number): Item`

Remove a node at a given position

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| position | number |  | position to remove node |

### `shift(): Item`

Shift a node from the front of list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `pop(): Item`

Pop a node from the rear of list

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `toArray(): Array<Item>`

Convert the node and next nodes (recursively) to an array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ListNode`

ListNode

### `constructor()`

### `_value: *`

### `_next: *`

### `_prev: *`

## `_Map`

Map with superpowers! 💪

### `constructor(iterable: Array<Item>)`

Construct a Map

### `some(callback: Callback): boolean`

Tests whether at least one element in the map passes the test implemented by the provided function

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | Callback |  | callback function |

### `every(callback: Callback): boolean`

Test whether all elements in the map pass the test implemented by the provided function

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | Callback |  | callback function |

### `setDefault(key: Item, defaultValue: Item): Item`

Similar to get(), but will set key to defaultValue if key is not already in Map.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| key | Item |  | Map key |
| defaultValue | Item |  | the default value to set in Map if the key is not defined |

### `toObject(): object`

Convert Map to an Object

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `_Number`

Number with superpowers! 💪

### `constructor(number: number)`

Construct a Number

### `fromRomanNumeral(str: string): number`

Convert a roman numeral to number

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| str | string |  | Roman numeral |

### `toRomanNumeral(): string`

Convert a number to roman numeral

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `_Object`

Object with superpowers! 💪

### `constructor(object: Object)`

Construct an Object

### `hasNested(path: string): boolean`

Check for nested value from string key

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | string |  |

### `getNested(path: string): Item`

Get nested JavaScript object value from string key

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | string |  |

### `clone(config: Config): object`

Deep clone an Object

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| config | Config | optional: true, default: {} | Configuration object |

## `PriorityQueue`

PriorityQueue with superpowers! 💪

### `constructor()`

### `_queue: *[]`

### `_comparator: *`

### `_wrapComparator(comparator: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| comparator | * | nullable: undefined |

### `_defaultComparator(a: *, b: *): number`

Default comparator function to sort from: highest priority (max) -> lowest priority (min)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| a | * | nullable: undefined |
| b | * | nullable: undefined |

### `isEmpty(): boolean`

Check if queue is empty

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `clear(): void`

Clear the items from the queue

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `insert(value: Item, priority: number): number`

Enqueue an item into the queue

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | Item |  | item to insert |
| priority | number | optional: true, default: 0 | priority of item (higher value === higher priority) |

### `deleteMax(): Item`

Remove and return the item with the highest priority

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `deleteHigh(): Item`

Remove and return the item with the highest priority

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `deleteMin(): Item`

Remove and return the item with the lowest priority

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `deleteLow(): Item`

Remove and return the item with the lowest priority

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `toArray(): Array<Item>`

Convert the queue to an array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `QueueNode`

QueueNode

### `constructor()`

### `_value: *`

### `_priority: *`

## `Queue`

Queue with superpowers! 💪

### `constructor(iterable: Array<Item>)`

Construct a Queue

### `_queue: undefined[]`

### `isEmpty(): boolean`

Check if queue is empty

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `clear(): void`

Clear the items from the queue

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `enqueue(item: Item): number`

Enqueue an item into the queue

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| item | Item |  | item to enqueue |

### `dequeue(): Item`

Dequeue an item from the queue

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `toArray(): Array<Item>`

Convert the queue to an array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `_String`

String with superpowers! 💪

### `constructor(string: string)`

Construct a String

### `reverse(): string`

Transposes the ordering of all characters in the string

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `reverseWords(): string`

Transposes the ordering of the words in the string

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `toTitleCase(): string`

Convert a string to title case

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Trie`

Trie with superpowers! 💪

### `constructor(iterable: Array<string>)`

Construct a Trie

### `_root: *`

### `insert(word: string)`

Insert a string into the trie

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| word | string |  | string to insert |

### `remove(word: string): *`

Remove a string from the trie

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| word | string |  | string to remove |

### `search(query: string): Match`

Search for a node in the trie matching the query

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| query | string |  | string query to search for |

### `includes(word: string): boolean`

Check if the trie includes a word

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| word | string |  | full word to search for |

### `contains(word: string): boolean`

Check if the trie contains a word

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| word | string |  | full word to search for |

### `startsWith(prefix: string): boolean`

Check if the trie contains a prefix

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| prefix | string |  | prefix (i.e. partial word) to search for |

## `TrieNode`

### `constructor()`

### `_char: *`

### `_isCompleteWord: boolean`

### `_children: *`

### `has(char: character): boolean`

Check if node has a specific character as a child

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| char | character |  | character to check |

### `get(char: character): TrieNode`

Get child node with specific character value

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| char | character |  | character to get |

### `set(char: character, node: TrieNode)`

Set child node with specific character value

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| char | character |  | character to set |
| node | TrieNode |  | node to assign to character |

### `delete(char: character)`

Delete child node with specific character value

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| char | character |  | character to delete |

# Function

## `bubbleSort(arr: *, comparator: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arr | * | nullable: undefined |
| comparator | * | nullable: undefined, optional: true, default: _defaultComparator |

## `insertionSort(arr: *, comparator: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arr | * | nullable: undefined |
| comparator | * | nullable: undefined, optional: true, default: _defaultComparator |

## `factorial(num: number): number`

Factorial

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| num | number |  | integral number |

## `gcd(numA: number, numB: number): number`

Greatest common divisor

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| numA | number |  | integral number |
| numB | number |  | integral number |

## `merge(arr: Array<Item>, leftArr: Array<Item>, rightArr: Array<Item>, compare: Comparator): Array<Item>`

Merge helper

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arr | Array<Item> |  | array merge target |
| leftArr | Array<Item> |  | left array to merge |
| rightArr | Array<Item> |  | right array to merge |
| compare | Comparator |  |

## `mergeSort(arr: *, comparator: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arr | * | nullable: undefined |
| comparator | * | nullable: undefined, optional: true, default: _defaultComparator |

## `partitionLomuto(arr: Array<number>, low: number, high: number, pivotType: PivotType, compare: Comparator): number`

Partition (Lomuto)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arr | Array<number> |  |
| low | number |  |
| high | number |  |
| pivotType | PivotType |  |
| compare | Comparator |  |

## `partitionHoare(arr: Array<number>, low: number, high: number, pivotType: string, compare: Comparator): number`

Partition (Hoare) it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arr | Array<number> |  |
| low | number |  |
| high | number |  |
| pivotType | string |  |
| compare | Comparator |  |

## `quickSort(arr: Array<Item>, comparator: Comparator): Array<Item>`

QuickSort with superpowers! 💪 time: O(nlogn) space: O(nlogn)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arr | Array<Item> |  | array to sort |
| comparator | Comparator |  |

## `selectionSort(arr: *, comparator: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arr | * | nullable: undefined |
| comparator | * | nullable: undefined, optional: true, default: _defaultComparator |