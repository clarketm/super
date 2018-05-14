# Object

Object with superpowers! 💪

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
