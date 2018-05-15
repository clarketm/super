# PriorityQueue

PriorityQueue with superpowers! 💪

### `constructor(iterable: PriorityQueueIterable, comparator: Comparator)`

Construct a PriorityQueue

### `size: number`

Get the current size of the queue

### `isEmpty(): boolean`

Check if queue is empty

### `clear(): void`

Clear the items from the queue

### `insert(value: Item, priority: number): number`

Enqueue an item into the queue

| Name     | Type   | Attribute                  | Description                                         |
| -------- | ------ | -------------------------- | --------------------------------------------------- |
| value    | Item   |                            | item to insert                                      |
| priority | number | optional: true, default: 0 | priority of item (higher value === higher priority) |

### `deleteMax(): Item`

Remove and return the item with the highest priority

### `deleteHigh(): Item`

Remove and return the item with the highest priority

### `deleteMin(): Item`

Remove and return the item with the lowest priority

### `deleteLow(): Item`

Remove and return the item with the lowest priority

### `getMax(): Item`

Get the item with the highest priority

### `getHigh(): Item`

Get the item with the highest priority

### `getMin(): Item`

Get the item with the lowest priority

### `getLow(): Item`

Get the item with the lowest priority

### `toArray(): Array`

Convert the queue to an array

## `QueueNode`

QueueNode

### `constructor(value: Item, priority: number)`

Construct a PriorityQueue

### `value: Item`

Get the value of the node

### `priority: number`

Get the priority of the node
