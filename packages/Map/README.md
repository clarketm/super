# [Map](https://www.npmjs.com/package/@clarketm/supermap)

[![NPM release](https://img.shields.io/npm/v/@clarketm/supermap.svg)](https://www.npmjs.com/package/@clarketm/supermap)

Map with superpowers! 💪

> This data structure inherit **all** methods and properties from the [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) built-in.

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/supermap
```

### Npm

```bash
$ npm install @clarketm/supermap --save
```

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
