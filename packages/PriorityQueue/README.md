# [PriorityQueue](https://www.npmjs.com/package/@clarketm/superpriorityqueue)

[![NPM release](https://img.shields.io/npm/v/@clarketm/superpriorityqueue.svg)](https://www.npmjs.com/package/@clarketm/superpriorityqueue)

PriorityQueue with superpowers! 💪

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/superpriorityqueue
```

### Npm

```bash
$ npm install @clarketm/superpriorityqueue --save
```

## API

### `constructor(iterable: PriorityQueueIterable, comparator: Comparator)`

Construct a PriorityQueue

### `size: number`

Get the current size of the queue

### `max(): Item`

Get the item with the highest priority

### `high(): Item`

> Alias to `max`

Get the item with the highest priority

### `min(): Item`

Get the item with the lowest priority

### `low(): Item`

> Alias to `min`

Get the item with the lowest priority

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

> Alias to `deleteMax()`

Remove and return the item with the highest priority

### `deleteMin(): Item`

Remove and return the item with the lowest priority

### `deleteLow(): Item`

> Alias to `deleteMin()`

Remove and return the item with the lowest priority

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
