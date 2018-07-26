# [Queue](https://www.npmjs.com/package/@clarketm/superqueue)

[![NPM release](https://img.shields.io/npm/v/@clarketm/superqueue.svg)](https://www.npmjs.com/package/@clarketm/superqueue)

Queue with superpowers! 💪

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/superqueue
```

### Npm

```bash
$ npm install @clarketm/superqueue --save
```

## API

### `constructor(iterable: Iterable)`

Construct a Queue

### `size: number`

Get the current size of the queue

### `front: Item`

Get the front item in the queue

### `rear: Item`

Get the rear item in the queue

### `isEmpty(): boolean`

Check if queue is empty

### `clear(): void`

Clear the items from the queue

### `enqueue(item: Item): number`

Enqueue an item into the queue

| Name | Type | Attribute | Description     |
| ---- | ---- | --------- | --------------- |
| item | Item |           | item to enqueue |

### `dequeue(): Item`

Dequeue an item from the queue

### `toArray(): Array`

Convert the queue to an array
