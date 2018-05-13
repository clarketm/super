const { assert } = require("chai");
const { SuperMap } = require("../src/lib/SuperMap");

describe("SuperMap", () => {
  let expected, actual;

  describe("#toObject", () => {
    it("should convert map with `string` key to `object`", () => {
      expected = { ["a"]: "value" };
      actual = new SuperMap([["a", "value"]]).toObject();

      assert.deepEqual(actual, expected);
    });

    it("should convert map with `number` key to `object`", () => {
      expected = { [1]: "value" };
      actual = new SuperMap([[1, "value"]]).toObject();

      assert.deepEqual(actual, expected);
    });

    it("should convert map with `boolean` key to `object`", () => {
      expected = { [true]: "value" };
      actual = new SuperMap([[true, "value"]]).toObject();

      assert.deepEqual(actual, expected);
    });

    it("should convert map with `function` key to `object`", () => {
      expected = { [function func() {}]: "value" };
      actual = new SuperMap([[function func() {}, "value"]]).toObject();

      assert.deepEqual(actual, expected);
    });

    it("should convert map with `undefined` key to `object`", () => {
      expected = { [undefined]: "value" };
      actual = new SuperMap([[undefined, "value"]]).toObject();

      assert.deepEqual(actual, expected);
    });

    it("should convert map with `symbol` key to `object`", () => {
      expected = { [Symbol("s")]: "value" };
      actual = new SuperMap([[Symbol("s"), "value"]]).toObject();

      assert.deepEqual(actual, expected);
    });

    it("should convert map with `all` types of keys to `object`", () => {
      expected = {
        a: null,
        [33]: undefined,
        [false]: true,
        [() => "blue"]: "hi",
        [Symbol("a")]: [1, 2, { b: 4 }],
        [Symbol.for(1)]: [1, 2, { b: 4 }],
        $: 1
      };
      actual = new SuperMap([
        ["a", null],
        [33, undefined],
        [false, true],
        [() => "blue", "hi"],
        [Symbol("a"), [1, 2, { b: 4 }]],
        [Symbol.for(1), [1, 2, { b: 4 }]],
        ["$", 1]
      ]).toObject();

      assert.deepEqual(actual, expected);
    });
  });
});
