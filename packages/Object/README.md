# [Object](https://www.npmjs.com/package/@clarketm/superobject)

[![NPM release](https://img.shields.io/npm/v/@clarketm/superobject.svg)](https://www.npmjs.com/package/@clarketm/superobject)

Object with superpowers! 💪

> This data structure inherit **all** methods and properties from the [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) built-in.

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/superobject
```

### Npm

```bash
$ npm install @clarketm/superobject --save
```

## API

### `constructor(object: Object)`

Construct an Object

### `hasNested(path: string): boolean`

Check for nested value from string key

| Name | Type   | Attribute | Description |
| ---- | ------ | --------- | ----------- |
| path | string |           |

### `getNested(path: string): Item`

Get nested JavaScript object value from string key

| Name | Type   | Attribute | Description |
| ---- | ------ | --------- | ----------- |
| path | string |           |

### `clone(config: Config): object`

Deep clone an Object

| Name   | Type   | Attribute                   | Description          |
| ------ | ------ | --------------------------- | -------------------- |
| config | Config | optional: true, default: {} | Configuration object |
