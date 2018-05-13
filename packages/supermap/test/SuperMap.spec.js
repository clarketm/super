const { assert } = require("chai");
const { SuperMap } = require("../src/lib/SuperMap");

describe("SuperMap", () => {
  let expected, actual;

  describe("#some", () => {
    it("should return true if the callback function returns a truthy value for any map element", () => {
      expected = true;
      actual = new SuperMap([["a", 3], ["b", 4], ["c", 5]]).some(
        value => value === 3
      );

      assert.equal(actual, expected);
    });

    it("should return true if the callback function does not returns a truthy value for any map element", () => {
      expected = false;
      actual = new SuperMap([["a", 3], ["b", 4], ["c", 5]]).some(
        value => value > 6
      );

      assert.equal(actual, expected);
    });
  });

  describe("#every", () => {
    it("should return true if the callback function returns a truthy value for every map element", () => {
      expected = true;
      actual = new SuperMap([["a", 3], ["b", 4], ["c", 5]]).every(
        value => value > 0
      );

      assert.equal(actual, expected);
    });

    it("should return true if the callback function does not returns a truthy value for every map element", () => {
      expected = false;
      actual = new SuperMap([["a", 3], ["b", 4], ["c", 5]]).every(
        value => value === 9
      );

      assert.equal(actual, expected);
    });
  });

  describe("#setDefault", () => {
    let map;

    it("should return defaultValue if key is not defined in the Map", () => {
      map = new SuperMap([["key", 123]]);

      expected = 3;
      actual = map.setDefault("fakeKey", 3);

      assert.equal(actual, expected);
    });

    it("should set key to defaultValue if key is not defined in the Map", () => {
      map = new SuperMap([["key", 123]]);

      map.setDefault("fakeKey", 5);

      expected = 5;
      actual = map.get("fakeKey");

      assert.equal(actual, expected);
    });

    it("should retrieve the value for key if already defined in the Map", () => {
      map = new SuperMap([["key", 123]]);

      expected = 123;
      actual = map.setDefault("key", 345);

      assert.equal(actual, expected);
    });
  });

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
