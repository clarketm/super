"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function _extendableBuiltin(a){function b(){var b=Reflect.construct(a,Array.from(arguments));return Object.setPrototypeOf(b,Object.getPrototypeOf(this)),b}return b.prototype=Object.create(a.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a,b}var RomanNumeralToIntegerMap=new Map([["M",1e3],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]]),IntegerToRomanNumeralMap=new Map([[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]),_Number=function(a){function b(a){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a))}return _inherits(b,a),_createClass(b,[{key:"toRomanNumeral",value:function toRomanNumeral(){function a(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",d=!0,e=!1,f=void 0;try{for(var g,h=IntegerToRomanNumeralMap[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=_slicedToArray(i,2),k=j[0],l=j[1];if(b>=k)return a(b-k,c+l)}}catch(a){e=!0,f=a}finally{try{!d&&h.return&&h.return()}finally{if(e)throw f}}return c}return a(this)}}],[{key:"fromRomanNumeral",value:function fromRomanNumeral(a){function b(a){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,d=!0,e=!1,f=void 0;try{for(var g,h=RomanNumeralToIntegerMap[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=_slicedToArray(i,2),k=j[0],l=j[1];if(a.slice(0,k.length)===k)return b(a.slice(k.length),c+l)}}catch(a){e=!0,f=a}finally{try{!d&&h.return&&h.return()}finally{if(e)throw f}}return c}return b(a)}}]),b}(_extendableBuiltin(Number));exports.default=_Number,exports.Number=_Number;