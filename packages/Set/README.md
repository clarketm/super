# [Set](https://www.npmjs.com/package/@clarketm/superset)

[![NPM release](https://img.shields.io/npm/v/@clarketm/superset.svg)](https://www.npmjs.com/package/@clarketm/superset)

Set with superpowers! 💪

> This data structure inherit **all** methods and properties from the [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) built-in.

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/superset
```

### Npm

```bash
$ npm install @clarketm/superset --save
```

## API

### `constructor(iterable: Iterable)`

Construct a Set

### `some(callback: Callback): boolean`

Tests whether at least one element in the set passes the test implemented by the provided function

| Name     | Type     | Attribute | Description       |
| -------- | -------- | --------- | ----------------- |
| callback | Callback |           | callback function |

### `every(callback: Callback): boolean`

Test whether all elements in the set pass the test implemented by the provided function

| Name     | Type     | Attribute | Description       |
| -------- | -------- | --------- | ----------------- |
| callback | Callback |           | callback function |

### `isSubset(setB: Set): boolean`

Subset of a set

| Name | Type | Attribute | Description |
| ---- | ---- | --------- | ----------- |
| setB | Set  |           | SetB        |

### `isSuperset(setB: Set): boolean`

Superset of a set

| Name | Type | Attribute | Description |
| ---- | ---- | --------- | ----------- |
| setB | Set  |           | SetB        |

### `isDisjoint(setB: Set): boolean`

Disjoint of a set

| Name | Type | Attribute | Description |
| ---- | ---- | --------- | ----------- |
| setB | Set  |           | SetB        |

### `union(setB: Set): Set`

Union of setA and setB

| Name | Type | Attribute | Description |
| ---- | ---- | --------- | ----------- |
| setB | Set  |           | SetB        |

### `intersection(setB: Set): Set`

Intersection of setA and setB

| Name | Type | Attribute | Description |
| ---- | ---- | --------- | ----------- |
| setB | Set  |           | SetB        |

### `difference(setB: Set): Set`

Difference of setA and setB

| Name | Type | Attribute | Description |
| ---- | ---- | --------- | ----------- |
| setB | Set  |           | SetB        |

### `symmetricDifference(setB: Set): Set`

Symmetric difference of setA and setB

| Name | Type | Attribute | Description |
| ---- | ---- | --------- | ----------- |
| setB | Set  |           | SetB        |
