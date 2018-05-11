"use strict";
var _createClass = (function() {
  function a(a, b) {
    for (var c, d = 0; d < b.length; d++)
      (c = b[d]),
        (c.enumerable = c.enumerable || !1),
        (c.configurable = !0),
        "value" in c && (c.writable = !0),
        Object.defineProperty(a, c.key, c);
  }
  return function(b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
})();
Object.defineProperty(exports, "__esModule", { value: !0 });
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(a, b) {
  if (!a)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}
function _inherits(a, b) {
  if ("function" != typeof b && null !== b)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof b
    );
  (a.prototype = Object.create(b && b.prototype, {
    constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
  })),
    b &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
}
function _extendableBuiltin(a) {
  function b() {
    var b = Reflect.construct(a, Array.from(arguments));
    return Object.setPrototypeOf(b, Object.getPrototypeOf(this)), b;
  }
  return (
    (b.prototype = Object.create(a.prototype, {
      constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
    })),
    Object.setPrototypeOf ? Object.setPrototypeOf(b, a) : (b.__proto__ = a),
    b
  );
}
var SuperSet = (exports.SuperSet = (function(a) {
  function b(a) {
    return (
      _classCallCheck(this, b),
      _possibleConstructorReturn(
        this,
        (b.__proto__ || Object.getPrototypeOf(b)).call(this, a)
      )
    );
  }
  return (
    _inherits(b, a),
    _createClass(b, [
      {
        key: "union",
        value: function(a) {
          var b = new Set(this);
          return (
            a.forEach(function(a) {
              return b.add(a);
            }),
            b
          );
        }
      },
      {
        key: "intersection",
        value: function(a) {
          var b = this,
            c = new Set();
          return (
            a.forEach(function(a) {
              return b.has(a) && c.add(a);
            }),
            c
          );
        }
      },
      {
        key: "difference",
        value: function(a) {
          var b = new Set(this);
          return (
            a.forEach(function(a) {
              return b.delete(a);
            }),
            b
          );
        }
      },
      {
        key: "symmetricDifference",
        value: function symmetricDifference(a) {
          var b = this,
            c = new Set(this);
          return (
            a.forEach(function(a) {
              return (b.has(a) && c.delete(a)) || c.add(a);
            }),
            c
          );
        }
      }
    ]),
    b
  );
})(_extendableBuiltin(Set)));
