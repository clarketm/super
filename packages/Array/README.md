# [Array](https://www.npmjs.com/package/@clarketm/superarray)

[![NPM release](https://img.shields.io/npm/v/@clarketm/superarray.svg)](https://www.npmjs.com/package/@clarketm/superarray)

Array with superpowers! 💪

> This data structure inherit **all** methods and properties from the [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) built-in.

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/superarray
```

### Npm

```bash
$ npm install @clarketm/superarray --save
```

### `constructor(iterable: Iterable)`

Construct a Array

### `flatMap(callback: Callback): Array`

Maps each element using a mapping function, then flattens the result into a new array

| Name     | Type     | Attribute | Description       |
| -------- | -------- | --------- | ----------------- |
| callback | Callback |           | callback function |

### `flat(depth: number): Array`

Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

| Name  | Type   | Attribute | Description   |
| ----- | ------ | --------- | ------------- |
| depth | number |           | flatten depth |

### `bubbleSort(comparator: Comparator): Array`

Sort using bubble sort

| Name       | Type       | Attribute | Description         |
| ---------- | ---------- | --------- | ------------------- |
| comparator | Comparator |           | comparator function |

### `insertionSort(comparator: Comparator): Array`

Sort using insertion sort

| Name       | Type       | Attribute | Description         |
| ---------- | ---------- | --------- | ------------------- |
| comparator | Comparator |           | comparator function |

### `mergeSort(comparator: Comparator): Array`

Sort using merge sort

| Name       | Type       | Attribute | Description         |
| ---------- | ---------- | --------- | ------------------- |
| comparator | Comparator |           | comparator function |

### `quickSort(comparator: Comparator): Array`

Sort using quick sort

| Name       | Type       | Attribute | Description         |
| ---------- | ---------- | --------- | ------------------- |
| comparator | Comparator |           | comparator function |

### `selectionSort(comparator: Comparator): Array`

Sort using selection sort

| Name       | Type       | Attribute | Description         |
| ---------- | ---------- | --------- | ------------------- |
| comparator | Comparator |           | comparator function |
