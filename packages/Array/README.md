# Array

Array with superpowers! 💪

> This data structure inherit **all** methods and properties from the [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) built-in.

### `constructor(iterable: Iterable)`

Construct a Array

### `flatMap(callback: Callback): Array`

Maps each element using a mapping function, then flattens the result into a new array

| Name     | Type     | Attribute | Description       |
| -------- | -------- | --------- | ----------------- |
| callback | Callback |           | callback function |

### `flatten(depth: number): Array`

Creates a new array with all sub-array elements concatted into it recursively up to the specified depth

| Name  | Type   | Attribute | Description   |
| ----- | ------ | --------- | ------------- |
| depth | number |           | flatten depth |
