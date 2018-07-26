# [Number](https://www.npmjs.com/package/@clarketm/supernumber)

[![NPM release](https://img.shields.io/npm/v/@clarketm/supernumber.svg)](https://www.npmjs.com/package/@clarketm/supernumber)

Number with superpowers! 💪

> This data structure inherit **all** methods and properties from the [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) built-in.

## Individual Module Installation

### Yarn

```bash
$ yarn add @clarketm/supernumber
```

### Npm

```bash
$ npm install @clarketm/supernumber --save
```

### `constructor(number: number)`

Construct a Number

### `fromRomanNumeral(str: string): number`

Convert a roman numeral to number

| Name | Type   | Attribute | Description   |
| ---- | ------ | --------- | ------------- |
| str  | string |           | Roman numeral |

### `toRomanNumeral(): string`

Convert a number to roman numeral

### `isNumber(str: string): boolean`

Test if a string is a valid number

| Name | Type   | Attribute | Description                         |
| ---- | ------ | --------- | ----------------------------------- |
| str  | string |           | – string representation of a number |
