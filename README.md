# Super

**Data Structures** with superpowers! 💪😎👍

> <sub>implemented in **JavaScript**.</sub>

<br>
<p align="center"><img src="/hero.png" /></div>
<br>

## Data Structures

* **[Array](https://github.com/clarketm/super/tree/master/packages/Array#readme)**
```js
let array = new Array([0, 1, 2, 3]); // [0, 1, 2, 3]

// Use any built-in array methods:
array.push(4); // [0, 1, 2, 3, 4];

// Use custom methods (e.g. `flatten`):
new Array([[[1]], [[2]], [[3]]]).flatten(2); // [1, 2, 3]
```

* **[BinaryTree](https://github.com/clarketm/super/tree/master/packages/BinaryTree#readme)**
```js
let tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1]);

//              5  -> root 
//            /   \
//           3     7
//         /  \   /  \
//        2   4  6    8
//       /             
//      1              

tree.root;     // BinaryTreeNode {_value: 5, ... }
tree.height;   // 1

tree.insert(9);

//              5  -> root 
//            /   \
//           3     7
//         /  \   /  \
//        2   4  6    8
//       /             \
//      1               9  -> node inserted

tree.search(3);    // BinaryTreeNode { _value: 3, ... }

tree.remove(9);

//              5  -> root 
//            /   \
//           3     7
//         /  \   /  \
//        2   4  6    8
//       /             
//      1                -> node removed

```

* [LinkedList](https://github.com/clarketm/super/tree/master/packages/LinkedList#readme)
* [Map](https://github.com/clarketm/super/tree/master/packages/Map#readme)
* [Math](https://github.com/clarketm/super/tree/master/packages/Math#readme)
* [Number](https://github.com/clarketm/super/tree/master/packages/Number#readme)
* [Object](https://github.com/clarketm/super/tree/master/packages/Object#readme)
* [PriorityQueue](https://github.com/clarketm/super/tree/master/packages/PriorityQueue#readme)
* [Queue](https://github.com/clarketm/super/tree/master/packages/Queue#readme)
* [Set](https://github.com/clarketm/super/tree/master/packages/Set#readme)
* [String](https://github.com/clarketm/super/tree/master/packages/String#readme)
* [Trie](https://github.com/clarketm/super/tree/master/packages/Trie#readme)

<!-- #### External Resources -->

<!-- * [Book: Data structures](https://en.wikipedia.org/wiki/Book:Data_structures) -->
