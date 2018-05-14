# Class

## `_Array`

Array with superpowers! 💪

### `constructor(iterable: Iterable)`

Construct an Array

### `flatMap(callback: Callback): Array`

Maps each element using a mapping function, then flattens the result into a new array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | Callback |  | callback function |

### `flatten(depth: number): Array`

Creates a new array with all sub-array elements concatted into it recursively up to the specified depth

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| depth | number |  | flatten depth |

## `_Map`

Map with superpowers! 💪

### `constructor(iterable: Iterable)`

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

## `Queue`

Queue with superpowers! 💪

### `constructor(iterable: Iterable)`

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

### `front(): Item`

Get the front item in the queue

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `rear(): Item`

Get the rear item in the queue

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `toArray(): Array`

Convert the queue to an array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `_Set`

Set with superpowers! 💪

### `constructor(iterable: Iterable)`

Construct a Set

### `some(callback: Callback): boolean`

Tests whether at least one element in the set passes the test implemented by the provided function

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | Callback |  | callback function |

### `every(callback: Callback): boolean`

Test whether all elements in the set pass the test implemented by the provided function

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| callback | Callback |  | callback function |

### `isSubset(setB: Set): boolean`

Subset of a set

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| setB | Set |  | SetB |

### `isSuperset(setB: Set): boolean`

Superset of a set

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| setB | Set |  | SetB |

### `union(setB: Set): Set`

Union of setA and setB

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| setB | Set |  | SetB |

### `intersection(setB: Set): Set`

Intersection of setA and setB

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| setB | Set |  | SetB |

### `difference(setB: Set): Set`

Difference of setA and setB

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| setB | Set |  | SetB |

### `symmetricDifference(setB: Set): Set`

Symmetric difference of setA and setB

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| setB | Set |  | SetB |

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

# Function

## `factorial(num: number): number`

Factorial

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| num | number |  | integral number |