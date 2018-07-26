# [Heap](https://www.npmjs.com/package/@clarketm/superheap)

[![NPM release](https://img.shields.io/npm/v/@clarketm/superheap.svg)](https://www.npmjs.com/package/@clarketm/superheap)

Heap with superpowers! 💪

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/superheap
```

### Npm

```bash
$ npm install @clarketm/superheap --save
```

## API

### `constructor(iterable: Array<Item>, comparator: Comparator)`

Construct a Heap

### `size: number`

Get the current size of the heap

### `max: Item`

Get the maximum item in heap

### `min: Item`

Get the minimum item in heap

### `isEmpty(): boolean`

Check if heap is empty

### `clear(): void`

Clear the items from the heap

### `insert(value: Item): number`

Insert an item into the heap

| Name  | Type | Attribute | Description    |
| ----- | ---- | --------- | -------------- |
| value | Item |           | item to insert |

### `deleteMax(): Item`

Remove and return the maximum item

### `deleteMin(): Item`

Remove and return the minimum item

### `toArray(): Array<Item>`

Convert the heap to an array
