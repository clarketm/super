const { assert } = require("chai");
const { SuperObject } = require("../src/lib/SuperObject");

describe("SuperObject", () => {
  let object, expected, actual;

  describe("#hasNested", () => {
    it("should return true if nested key exists", () => {
      object = new SuperObject({
        a: {
          b: {
            c: "value"
          }
        }
      });

      expected = true;
      actual = object.hasNested("a.b.c");

      assert.equal(actual, expected);
    });

    it("should return false if nested key does not exists", () => {
      object = new SuperObject({
        a: {
          b: {
            c: "value"
          }
        }
      });

      expected = false;
      actual = object.hasNested("a.b.z");

      assert.equal(actual, expected);
    });
  });

  describe("#getNested", () => {
    it("should retrieve property value if nested key exists", () => {
      object = new SuperObject({
        a: {
          b: {
            c: "value"
          }
        }
      });

      expected = "value";
      actual = object.getNested("a.b.c");

      assert.equal(actual, expected);
    });

    it("should return undefined if nested key does not exist", () => {
      object = new SuperObject({
        a: {
          b: {
            c: "value"
          }
        }
      });

      expected = undefined;
      actual = object.getNested("a.b.z");

      assert.equal(actual, expected);
    });
  });

  describe("#toObject", () => {
    it("should clone object with `null` value", () => {
      object = new SuperObject({ key: null });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `undefined` value", () => {
      object = new SuperObject({ key: undefined });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `boolean` value", () => {
      object = new SuperObject({ key: true });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `number` value", () => {
      object = new SuperObject({ key: 1 });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `string` value", () => {
      object = new SuperObject({ key: "a" });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `symbol` value", () => {
      object = new SuperObject({ key: Symbol("a") });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `function` value", () => {
      object = new SuperObject({ key: function() {} });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `date` value", () => {
      object = new SuperObject({ key: new Date() });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `1d` `array` value", () => {
      object = new SuperObject({ key: [1, 2, 3, 4] });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `2d` `array` value", () => {
      object = new SuperObject({ key: [[1], [2], [3], [4]] });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `1d` `object` value", () => {
      object = new SuperObject({ key: { a: 1, b: 2, c: 3 } });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `1d` `object` value", () => {
      object = new SuperObject({
        key: { a: { a1: 1 }, b: { b1: 1 }, c: { a1: 1 } }
      });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });

    it("should clone object with `all` types of values", () => {
      object = new SuperObject({
        a: null,
        b: undefined,
        c: true,
        d: 12,
        e: "hi",
        f: [1, 2, { b: 4 }],
        g: [1, 2, { b: 4 }],
        [Symbol("abc")]: 3,
        [123]: { [123]: ["k", false] },
        $: new Date(),
        [new Map([["@", "#"]])]: () => 3,
        go(where = "house") {
          return `where: ${where}`;
        },
        any: {
          f1: {
            f2: {
              f3: {
                f4: Symbol("abc")
              }
            }
          }
        }
      });

      expected = object;
      actual = object.clone();

      assert.deepEqual(actual, expected);
    });
  });
});
