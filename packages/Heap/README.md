# Heap

Heap with superpowers! 💪

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
