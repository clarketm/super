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
      actual = trie.root.hasChild("h");

      assert.equal(actual, expected);
    });

    it("should insert a two (2) character string into the trie", () => {
      trie = new Trie();
      trie.insert("ba");

      expected = true;
      actual = trie.root.getChild("b").hasChild("a");

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

    it("should return true for isCompleteWord in match if trie matches query and is a word", () => {
      trie = new Trie(["joe", "joke", "joel"]);

      expected = true;
      actual = trie.search("joke").isCompleteWord;

      assert.equal(actual, expected);
    });

    it("should return false for isCompleteWord in match if trie matches query and is not a word", () => {
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
        actual = trie.root.getChild("a").char;

        assert.equal(actual, expected);
      });
    });

    describe("#isCompleteWord", () => {
      it("should return true if node is a complete word", () => {
        trie = new Trie(["a"]);

        expected = true;
        actual = trie.root.getChild("a").isCompleteWord;

        assert.equal(actual, expected);
      });

      it("should return false if node is not a complete word", () => {
        trie = new Trie(["alpha"]);

        expected = false;
        actual = trie.root.getChild("a").isCompleteWord;

        assert.equal(actual, expected);
      });
    });

    describe("#hasChild", () => {
      it("should return true if node has a character", () => {
        trie = new Trie(["alpha", "beta"]);

        expected = true;
        actual = trie.root.hasChild("a");

        assert.equal(actual, expected);
      });

      it("should return false if node does not have a character", () => {
        trie = new Trie(["alpha", "beta"]);

        expected = false;
        actual = trie.root.hasChild("c");

        assert.equal(actual, expected);
      });
    });

    describe("#getChild", () => {
      it("should get child node for character", () => {
        trie = new Trie(["alpha", "beta"]);

        actual = trie.root.getChild("b");

        assert.isDefined(actual);
      });
    });

    describe("#setChild", () => {
      it("should set child node for character", () => {
        trie = new Trie();
        node = new TrieNode("a");
        trie.root.setChild("a", node);

        expected = node;
        actual = trie.root.getChild("a");

        assert.equal(actual, expected);
      });
    });
  });
});
