const { assert } = require("chai");
const { Trie } = require("../src/lib/Trie");
const { TrieNode } = require("../src/lib/TrieNode");

describe("Trie", () => {
  let trie, node, expected, actual;

  describe("#root", () => {
    it("should have a root node defined", () => {
      actual = new Trie().root;

      assert.isDefined(actual);
    });
  });

  describe("#insert", () => {
    it("should insert a one (1) character string into the trie", () => {
      trie = new Trie();
      trie.insert("h");

      expected = true;
      actual = trie.root.has("h");

      assert.equal(actual, expected);
    });

    it("should insert a two (2) character string into the trie", () => {
      trie = new Trie();
      trie.insert("ba");

      expected = true;
      actual = trie.root.get("b").has("a");

      assert.equal(actual, expected);
    });
  });

  describe("#remove", () => {
    it("should remove a one (1) character string from the trie", () => {
      trie = new Trie(["h"]);
      trie.remove("h");

      expected = false;
      actual = trie.root.has("h");

      assert.equal(actual, expected);
    });

    it("should remove a two (2) character string that from a one word trie", () => {
      trie = new Trie(["ho"]);
      trie.remove("ho");

      expected = false;
      actual = trie.root.has("h");

      assert.equal(actual, expected);
    });

    it("should remove a two (2) character string from the trie", () => {
      trie = new Trie(["ho", "home", "h", "hot"]);
      trie.remove("ho");

      expected = false;
      actual = trie.root.get("h").get("o").isCompleteWord;

      assert.equal(actual, expected);
    });

    it("should not contain the word after removal", () => {
      trie = new Trie(["ho", "home", "h", "hot"]);
      trie.remove("hot");

      expected = false;
      actual = trie.contains("hot");

      assert.equal(actual, expected);
    });

    it("should not be a complete word after removal", () => {
      trie = new Trie(["ho", "home", "h", "hot"]);
      trie.remove("hot");

      expected = false;
      actual = trie.search("hot").isCompleteWord;

      assert.equal(actual, expected);
    });

    it("should not remove the word if a prefix for another word (contains)", () => {
      trie = new Trie(["ho", "home", "h", "hot"]);
      trie.remove("ho");

      expected = true;
      actual = trie.contains("hot");

      assert.equal(actual, expected);
    });

    it("should not remove the word if a prefix for another word (startsWith)", () => {
      trie = new Trie(["ho", "home", "h", "hot"]);
      trie.remove("ho");

      expected = true;
      actual = trie.startsWith("ho");

      assert.equal(actual, expected);
    });
  });

  describe("#search", () => {
    it("should return query in match if trie matches query", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = "joke";
      actual = trie.search("joke").query;

      assert.equal(actual, expected);
    });

    it("should return matchedChars count in match if trie matches query", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = 4;
      actual = trie.search("joke").matchedChars;

      assert.equal(actual, expected);
    });

    it("should return true for isMatch in match if query matches", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = true;
      actual = trie.search("jo").isMatch;

      assert.equal(actual, expected);
    });

    it("should return false for isMatch in match if the query does not match", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = false;
      actual = trie.search("je").isMatch;

      assert.equal(actual, expected);
    });

    it("should return true for isCompleteWord in match if query matches and is a complete word", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = true;
      actual = trie.search("joke").isCompleteWord;

      assert.equal(actual, expected);
    });

    it("should return false for isCompleteWord in match if query matches and is not a complete word", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = false;
      actual = trie.search("jok").isCompleteWord;

      assert.equal(actual, expected);
    });

    it("should return node in match if trie matches query", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = "k";
      actual = trie.search("jok").node.char;

      assert.equal(actual, expected);
    });
  });

  describe("#includes", () => {
    it("should return true if trie includes the word", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = true;
      actual = trie.includes("joe");

      assert.equal(actual, expected);
    });

    it("should return false if trie does not includes the word", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = false;
      actual = trie.includes("jo");

      assert.equal(actual, expected);
    });
  });

  describe("#contains", () => {
    it("should return true if trie contains the word", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = true;
      actual = trie.contains("joke");

      assert.equal(actual, expected);
    });

    it("should return false if trie does not contains the word", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = false;
      actual = trie.contains("bill");

      assert.equal(actual, expected);
    });
  });

  describe("#startsWith", () => {
    it("should return true if trie starts with the prefix", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = true;
      actual = trie.startsWith("jo");

      assert.equal(actual, expected);
    });

    it("should return false if trie does not start with the prefix", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = false;
      actual = trie.startsWith("jk");

      assert.equal(actual, expected);
    });
  });

  describe("TrieNode", () => {
    describe("#count", () => {
      it("should return children character count for node", () => {
        trie = new Trie(["a", "b", "c"]);

        expected = 3;
        actual = trie.root.count;

        assert.equal(actual, expected);
      });
    });

    describe("#char", () => {
      it("should return character value for node", () => {
        trie = new Trie(["alpha"]);

        expected = "a";
        actual = trie.root.get("a").char;

        assert.equal(actual, expected);
      });
    });

    describe("#isCompleteWord", () => {
      it("should return true if node is a complete word", () => {
        trie = new Trie(["a"]);

        expected = true;
        actual = trie.root.get("a").isCompleteWord;

        assert.equal(actual, expected);
      });

      it("should return false if node is not a complete word", () => {
        trie = new Trie(["alpha"]);

        expected = false;
        actual = trie.root.get("a").isCompleteWord;

        assert.equal(actual, expected);
      });
    });

    describe("#has", () => {
      it("should return true if node has a character", () => {
        trie = new Trie(["alpha", "beta"]);

        expected = true;
        actual = trie.root.has("a");

        assert.equal(actual, expected);
      });

      it("should return false if node does not have a character", () => {
        trie = new Trie(["alpha", "beta"]);

        expected = false;
        actual = trie.root.has("c");

        assert.equal(actual, expected);
      });
    });

    describe("#get", () => {
      it("should get child node for character", () => {
        trie = new Trie(["alpha", "beta"]);

        actual = trie.root.get("b");

        assert.isDefined(actual);
      });
    });

    describe("#set", () => {
      it("should set child node for character", () => {
        trie = new Trie();
        node = new TrieNode("a");
        trie.root.set("a", node);

        expected = node;
        actual = trie.root.get("a");

        assert.equal(actual, expected);
      });
    });

    describe("#delete", () => {
      it("should delete child node for character", () => {
        trie = new Trie(["a"]);
        trie.root.delete("a");

        expected = false;
        actual = trie.root.has("a");

        assert.equal(actual, expected);
      });
    });
  });
});
