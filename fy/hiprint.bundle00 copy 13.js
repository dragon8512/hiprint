function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

var hiprint = (function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var o = (e[i] = {
      i: i,
      l: !1,
      exports: {},
    });
    return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }

  return (
    (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: i,
        });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var o in t) {
          n.d(
            i,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
        }
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/"),
    n((n.s = 21))
  );
})([
  // 第 13
  function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return p;
    });

    var _i,
      o = n(5),
      r = n(13),
      a =
        ((_i = function i(t, e) {
          return (_i =
            Object.setPrototypeOf ||
            (_instanceof(
              {
                __proto__: [],
              },
              Array
            ) &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) {
                e.hasOwnProperty(n) && (t[n] = e[n]);
              }
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }

          _i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      p = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          ((n.columns = []), e && e.constructor === Array)
            ? (e || []).forEach(function (t) {
                n.columns.push(new o.a(t));
              })
            : e.columns &&
              (e.columns || []).forEach(function (t) {
                n.columns.push(new o.a(t));
              });
          return n;
        }

        return (
          a(e, t),
          (e.prototype.getPrintElementOptionEntity = function () {
            var t = [];
            return (
              this.columns.forEach(function (e) {
                t.push(e.getEntity());
              }),
              t
            );
          }),
          e
        );
      })(r.a);
  }
]);