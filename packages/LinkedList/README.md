# LinkedList

LinkedList with superpowers! 💪

### `constructor(iterable: Iterable)`

Construct a LinkedList

### `size: number`

Get the size of the list

### `head: ListNode`

Get the head of the list

### `toArray(): Array`

Convert the node and next nodes (recursively) to an array

### `insert(position: number, value: Item): number`

Insert a node at a given position

| Name     | Type   | Attribute | Description               |
| -------- | ------ | --------- | ------------------------- |
| position | number |           | position to insert node   |
| value    | Item   |           | value to insert into list |

### `prepend(value: Item): *`

Prepend a node at the end of the list

| Name  | Type | Attribute | Description              |
| ----- | ---- | --------- | ------------------------ |
| value | Item |           | value to prepend to list |

### `unshift(value: *): *`

| Name  | Type | Attribute           | Description |
| ----- | ---- | ------------------- | ----------- |
| value | \*   | nullable: undefined |

### `append(value: Item): *`

Append a node at the end of the list

| Name  | Type | Attribute | Description             |
| ----- | ---- | --------- | ----------------------- |
| value | Item |           | value to append to list |

### `push(value: *): *`

> Alias to `append`

### `remove(position: number): Item`

Remove a node at a given position

| Name     | Type   | Attribute | Description             |
| -------- | ------ | --------- | ----------------------- |
| position | number |           | position to remove node |

### `shift(): Item`

Shift a node from the front of list

### `pop(): Item`

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
