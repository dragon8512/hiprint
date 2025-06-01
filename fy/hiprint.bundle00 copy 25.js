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
  // 第 25
  function (t, e) {
    var n;
    ((n = jQuery).hiprintparser = {
      parseOptions: function parseOptions(t, e) {
        var i = n(t),
          o = {},
          r = n.trim(i.attr("data-options"));

        if (
          (r &&
            ("{" != r.substring(0, 1) && (r = "{" + r + "}"),
            (o = new Function("return " + r)())),
          e)
        ) {
          for (var a = {}, p = 0; p < e.length; p++) {
            var s = e[p];
            if ("string" == typeof s)
              a[s] =
                "width" == s || "height" == s || "left" == s || "top" == s
                  ? parseInt(t.style[s]) || void 0
                  : i.attr(s);
            else
              for (var l in s) {
                var u = s[l];
                "boolean" == u
                  ? (a[l] = i.attr(l) ? "true" == i.attr(l) : void 0)
                  : "number" == u &&
                    (a[l] =
                      "0" == i.attr(l) ? 0 : parseFloat(i.attr(l)) || void 0);
              }
          }

          n.extend(o, a);
        }

        return o;
      },
    }),
      (n.fn.dragLengthC = function (t, e) {
        return "pt" == e.moveUnit
          ? n.fn.dragLengthCNum(t, e) + "pt"
          : n.fn.dragLengthCNum(t, e);
      }),
      (n.fn.dragLengthCNum = function (t, e) {
        var n = 3;

        if ("pt" == e.moveUnit) {
          var i = 0.75 * t;
          return e.minMove && (n = e.minMove), Math.round(i / n) * n;
        }

        return Math.round(i / n) * n;
      });
  }
]);