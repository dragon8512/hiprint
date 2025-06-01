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
  // 第 4
  function (t, e, n) {
    "use strict";

    var i = (function () {
      return function () {};
    })();

    n.d(e, "a", function () {
      return o;
    });

    var o = (function () {
      function t(t) {
        (t = t || {}),
          (this.left = t.left),
          (this.top = t.top),
          (this.topInDesign = this.top),
          (this.height = t.height),
          (this.width = t.width),
          this.init(t);
      }

      return (
        (t.prototype.setDefault = function (t) {
          (this.defaultOptions = t), this.initSize();
        }),
        (t.prototype.initSize = function () {
          this.width || this.setWidth(this.defaultOptions.width),
            this.height || this.setHeight(this.defaultOptions.height);
        }),
        (t.prototype.initSizeByHtml = function (t, e) {
          this.width || this.setWidth(t), this.height || this.setHeight(e);
        }),
        (t.prototype.getLeft = function () {
          return this.left;
        }),
        (t.prototype.displayLeft = function () {
          return this.left + "pt";
        }),
        (t.prototype.setLeft = function (t) {
          null != t && (this.left = t);
        }),
        (t.prototype.getTop = function () {
          return this.top;
        }),
        (t.prototype.getTopInDesign = function () {
          return this.topInDesign;
        }),
        (t.prototype.displayTop = function () {
          return this.top + "pt";
        }),
        (t.prototype.setTop = function (t) {
          null != t && (this.top = t);
        }),
        (t.prototype.copyDesignTopFromTop = function () {
          this.topInDesign = this.top;
        }),
        (t.prototype.getHeight = function () {
          return this.height;
        }),
        (t.prototype.displayHeight = function () {
          return this.height + "pt";
        }),
        (t.prototype.setHeight = function (t) {
          null != t && (this.height = t);
        }),
        (t.prototype.getWidth = function () {
          return this.width;
        }),
        (t.prototype.displayWidth = function () {
          return this.width + "pt";
        }),
        (t.prototype.setWidth = function (t) {
          null != t && (this.width = t);
        }),
        (t.prototype.getValueFromOptionsOrDefault = function (t) {
          return null == this[t] ? this.defaultOptions[t] : this[t];
        }),
        (t.prototype.getPrintElementOptionEntity = function () {
          var t = new i(),
            e = this;
          return (
            Object.keys(this)
              .filter(function (t) {
                return "topInDesign" != t;
              })
              .forEach(function (n) {
                if (
                  (("number" != typeof e[n] &&
                    "string" != typeof e[n] &&
                    _typeof(e[n]) != _typeof(!0)) ||
                    (t[n] = e[n]),
                  "style" == n)
                ) {
                  t.style = {};
                  var i = e[n];
                  if (i)
                    Object.keys(i).forEach(function (e) {
                      ("number" != typeof i[e] && "string" != typeof i[e]) ||
                        (t.style[e] = i[e]);
                    });
                }
              }),
            t
          );
        }),
        (t.prototype.init = function (t) {
          var e = this;
          t &&
            Object.keys(t).forEach(function (n) {
              e[n] = t[n];
            });
        }),
        t
      );
    })();
  }
]);