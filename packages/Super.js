/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Array } from "./Array/src/lib/Array";
import { AVLTree } from "./AVLTree/src/lib/AVLTree";
import { BinaryTree } from "./BinaryTree/src/lib/BinaryTree";
import { bubbleSort } from "./BubbleSort/src/lib/BubbleSort";
import { Heap } from "./Heap/src/lib/Heap";
import { insertionSort } from "./InsertionSort/src/lib/InsertionSort";
import { LinkedList } from "./LinkedList/src/lib/LinkedList";
import { Map } from "./Map/src/lib/Map";
import { Math } from "./Math/src/lib/Math";
import { mergeSort } from "./MergeSort/src/lib/MergeSort";
import { Number } from "./Number/src/lib/Number";
import { Object } from "./Object/src/lib/Object";
import { PriorityQueue } from "./PriorityQueue/src/lib/PriorityQueue";
import { Queue } from "./Queue/src/lib/Queue";
import { quickSort } from "./QuickSort/src/lib/QuickSort";
import { selectionSort } from "./SelectionSort/src/lib/SelectionSort";
import { Set } from "./Set/src/lib/Set";
import { String } from "./String/src/lib/String";
import { Trie } from "./Trie/src/lib/Trie";
import { version } from "../package.json";

export default {
  version,
  // Data Structures
  Array,
  AVLTree,
  BinaryTree,
  Heap,
  LinkedList,
  Map,
  Object,
  PriorityQueue,
  Queue,
  Set,
  Trie,
  // Data Types
  Math,
  Number,
  String,
  // Sorting Algorithms
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort
};

export {
  version,
  // Data Structures
  Array,
  AVLTree,
  BinaryTree,
  Heap,
  LinkedList,
  Map,
  Object,
  PriorityQueue,
  Queue,
  Set,
  Trie,
  // Data Types
  Math,
  Number,
  String,
  // Sorting Algorithms
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort
};
