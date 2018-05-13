# Class

## `SuperArray`

Array with superpowers! 💪

### `constructor(iterable: Iterable)`

Construct a Array

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

## `SuperMap`

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

### `toObject(): object`

Convert Map to an Object

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `SuperObject`

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

## `SuperSet`

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

# Function