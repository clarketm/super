/**
 * Copyright (c) 2018, Travis Clarke
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SuperMap } from './supermap/src/lib/SuperMap';
import { SuperArray } from './superarray/src/lib/SuperArray';
import { SuperMath } from './supermath/src/lib/SuperMath';
import { SuperNumber } from './supernumber/src/lib/SuperNumber';
import { SuperObject } from './superobject/src/lib/SuperObject';
import { SuperSet } from './superset/src/lib/SuperSet';
import { SuperString } from './superstring/src/lib/SuperString';

import { version } from '../package.json';

export default {
  version,
  SuperArray,
  SuperMap,
  SuperMath,
  SuperNumber,
  SuperObject,
  SuperSet,
  SuperString,
};

export {
  version,
  SuperArray,
  SuperMap,
  SuperMath,
  SuperNumber,
  SuperObject,
  SuperSet,
  SuperString,
};
