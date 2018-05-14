# Map

Map with superpowers! 💪

> This data structure inherit **all** methods and properties for the [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) built-in.

### `constructor(iterable: Iterable)`

Construct a Map

### `some(callback: Callback): boolean`

Tests whether at least one element in the map passes the test implemented by the provided function

| Name     | Type     | Attribute | Description       |
| -------- | -------- | --------- | ----------------- |
| callback | Callback |           | callback function |

### `every(callback: Callback): boolean`

Test whether all elements in the map pass the test implemented by the provided function

| Name     | Type     | Attribute | Description       |
| -------- | -------- | --------- | ----------------- |
| callback | Callback |           | callback function |

### `setDefault(key: Item, defaultValue: Item): Item`

Similar to get(), but will set key to defaultValue if key is not already in Map.

| Name         | Type | Attribute | Description                                               |
| ------------ | ---- | --------- | --------------------------------------------------------- |
| key          | Item |           | Map key                                                   |
| defaultValue | Item |           | the default value to set in Map if the key is not defined |

### `toObject(): object`

Convert Map to an Object

| Name | Type | Attribute | Description |
| ---- | ---- | --------- | ----------- |

