const { assert } = require("chai");
const { SuperString } = require("../src/lib/SuperString");

describe("SuperString", () => {
  let expected, actual;

  describe("#toTitleCase", () => {
    it("should return a string in title case", () => {
      expected = "Tom Jones";
      actual = new SuperString("tom jones").toTitleCase();

      assert.equal(actual, expected);
    });
  });
});
