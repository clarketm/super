/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Map } from "./map/src/lib/Map";
import { Array } from "./Array/src/lib/Array";
import { Math } from "./Math/src/lib/Math";
import { Number } from "./Number/src/lib/Number";
import { Object } from "./Object/src/lib/Object";
import { Queue } from "./Queue/src/lib/Queue";
import { Set } from "./Set/src/lib/Set";
import { String } from "./String/src/lib/String";

import { version } from "../package.json";

export default {
  version,
  Array,
  Map,
  Math,
  Number,
  Object,
  Queue,
  Set,
  String
};

export { version, Array, Map, Math, Number, Object, Queue, Set, String };
