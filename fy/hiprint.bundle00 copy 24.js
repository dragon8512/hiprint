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
 // 第 24
  function (t, e) {
    !(function (t) {
      (t.fn.hidroppable = function (e, n) {
        return "string" == typeof e
          ? t.fn.hidroppable.methods[e](this, n)
          : ((e = e || {}),
            this.each(function () {
              var n,
                i = t.data(this, "hidroppable");
              i
                ? t.extend(i.options, e)
                : (t((n = this)).addClass("hidroppable"),
                  t(n).bind("_dragenter", function (e, i) {
                    t.data(n, "hidroppable").options.onDragEnter.apply(n, [
                      e,
                      i,
                    ]);
                  }),
                  t(n).bind("_dragleave", function (e, i) {
                    t.data(n, "hidroppable").options.onDragLeave.apply(n, [
                      e,
                      i,
                    ]);
                  }),
                  t(n).bind("_dragover", function (e, i) {
                    t.data(n, "hidroppable").options.onDragOver.apply(n, [
                      e,
                      i,
                    ]);
                  }),
                  t(n).bind("_drop", function (e, i) {
                    t.data(n, "hidroppable").options.onDrop.apply(n, [e, i]);
                  }),
                  t.data(this, "hidroppable", {
                    options: t.extend(
                      {},
                      t.fn.hidroppable.defaults,
                      t.fn.hidroppable.parseOptions(this),
                      e
                    ),
                  }));
            }));
      }),
        (t.fn.hidroppable.methods = {
          options: function options(e) {
            return t.data(e[0], "hidroppable").options;
          },
          enable: function enable(e) {
            return e.each(function () {
              t(this).hidroppable({
                disabled: !1,
              });
            });
          },
          disable: function disable(e) {
            return e.each(function () {
              t(this).hidroppable({
                disabled: !0,
              });
            });
          },
        }),
        (t.fn.hidroppable.parseOptions = function (e) {
          var n = t(e);
          return t.extend({}, t.hiprintparser.parseOptions(e, ["accept"]), {
            disabled: !!n.attr("disabled") || void 0,
          });
        }),
        (t.fn.hidroppable.defaults = {
          accept: null,
          disabled: !1,
          onDragEnter: function onDragEnter(t, e) {},
          onDragOver: function onDragOver(t, e) {},
          onDragLeave: function onDragLeave(t, e) {},
          onDrop: function onDrop(t, e) {},
        });
    })(jQuery);
  }
]);