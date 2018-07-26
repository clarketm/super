# [LinkedList](https://www.npmjs.com/package/@clarketm/superlinkedlist)

[![NPM release](https://img.shields.io/npm/v/@clarketm/superlinkedlist.svg)](https://www.npmjs.com/package/@clarketm/superlinkedlist)

LinkedList with superpowers! 💪

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/superlinkedlist
```

### Npm

```bash
$ npm install @clarketm/superlinkedlist --save
```

### `constructor(iterable: Iterable)`

Construct a LinkedList

### `size: number`

Get the size of the list

### `head: ListNode`

Get the head of the list

### `tail: ListNode`

Get the tail of the list

### `insert(position: number, value: Item): number`

Insert a node at a given position

| Name     | Type   | Attribute | Description               |
| -------- | ------ | --------- | ------------------------- |
| position | number |           | position to insert node   |
| value    | Item   |           | value to insert into list |

### `prepend(value: Item): number`

> Alias to `insert(0, value)`

Prepend a node to the front of the list

| Name  | Type | Attribute | Description              |
| ----- | ---- | --------- | ------------------------ |
| value | Item |           | value to prepend to list |

### `unshift(value: Item): number`

> Alias to `insert(0, value)`

Unshift a node to the front of the list

| Name  | Type | Attribute | Description              |
| ----- | ---- | --------- | ------------------------ |
| value | Item |           | value to unshift to list |

### `append(value: Item): number`

> Alias to `insert(list.size, value)`

Append a node to the rear of the list

| Name  | Type | Attribute | Description             |
| ----- | ---- | --------- | ----------------------- |
| value | Item |           | value to append to list |

### `push(value: Item): number`

> Alias to `insert(list.size, value)`

Push a node to the rear of the list

| Name  | Type | Attribute | Description           |
| ----- | ---- | --------- | --------------------- |
| value | Item |           | value to push to list |

### `remove(position: number): Item`

Remove a node at a given position

| Name     | Type   | Attribute | Description             |
| -------- | ------ | --------- | ----------------------- |
| position | number |           | position to remove node |

### `shift(): Item`

> Alias to `remove(0)`

Shift a node from the front of list

### `pop(): Item`

> Alias to `remove(list.size - 1)`

Pop a node from the rear of list

### `toArray(): Array`

Convert the node and next nodes (recursively) to an array

## `ListNode`

### `constructor(item: Item)`

Construct a ListNode

### `value: Item`

Get the value of the node

### `next: ListNode`

Get the next node in list

### `prev: ListNode`

Get the previous node in list
