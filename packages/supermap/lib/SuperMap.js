"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SuperMap=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_slicedToArray=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_constants=require("../../../shared/src/constants");function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function _extendableBuiltin(a){function b(){var b=Reflect.construct(a,Array.from(arguments));return Object.setPrototypeOf(b,Object.getPrototypeOf(this)),b}return b.prototype=Object.create(a.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a,b}var SuperMap=exports.SuperMap=function(a){function b(a){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a))}return _inherits(b,a),_createClass(b,[{key:"some",value:function some(a){var b=void 0,c=!0,d=!1,e=void 0;try{for(var f,g=this.entries()[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i=_slicedToArray(h,2),j=i[0],k=i[1];if(b=a(k,j,this),b)return!0}}catch(a){d=!0,e=a}finally{try{!c&&g.return&&g.return()}finally{if(d)throw e}}return!1}},{key:"every",value:function every(a){var b=void 0,c=!0,d=!1,e=void 0;try{for(var f,g=this.entries()[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i=_slicedToArray(h,2),j=i[0],k=i[1];if(b=a(k,j,this),!b)return!1}}catch(a){d=!0,e=a}finally{try{!c&&g.return&&g.return()}finally{if(d)throw e}}return!0}},{key:"setDefault",value:function setDefault(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return this.has(a)?this.get(a):(this.set(a,b),b)}},{key:"toObject",value:function toObject(){return Array.from(this).reduce(function(a,b){var c=_slicedToArray(b,2),d=c[0],e=c[1];return("undefined"==typeof d?"undefined":_typeof(d))!==_constants.PrimitiveType.OBJECT&&(a[d]=e),a},{})}}]),b}(_extendableBuiltin(Map));