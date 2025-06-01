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
  // 第 33
  function (t, e) {
    var n, i;
    window,
      document,
      (n = jQuery),
      ((i = function i(t, e) {
        this.init(t, e);
      }).prototype = {
        init: function init(t, e) {
          (this.ele = t),
            (this.defaults = {
              menu: [
                {
                  text: "text",
                  menus: [{}, {}],
                  callback: function callback() {},
                },
              ],
              target: function target(t) {},
              width: 100,
              itemHeight: 28,
              bgColor: "#fff",
              color: "#333",
              fontSize: 14,
              hoverBgColor: "#f5f5f5",
            }),
            (this.opts = n.extend(!0, {}, this.defaults, e)),
            (this.random =
              new Date().getTime() + parseInt(1e3 * Math.random())),
            this.eventBind();
        },
        renderMenu: function renderMenu(t, e) {
          var n = this,
            i = e;

          if (t && t.length) {
            var o = $('<ul class="hicontextmenu" ></ul>');
            i || (i = o).addClass("hicontextmenuroot"),
              $.each(t, function (t, e) {
                var i = !!e.disable && e.disable(),
                  r = $(
                    '<li class="hicontextmenuitem"><a href="javascript:void(0);"><span>' +
                      (e.text || "") +
                      "</span></a></li>"
                  );
                i && r.addClass("disable"),
                  e.borderBottom && r.addClass("borderBottom"),
                  e.menus &&
                    (r.addClass("hicontextsubmenu"), n.renderMenu(e.menus, r)),
                  e.callback &&
                    r.click(function (t) {
                      $(this).hasClass("disable")
                        ? t.stopPropagation()
                        : ($(".hicontextmenuroot").remove(),
                          e.callback(),
                          t.stopPropagation());
                    }),
                  o.append(r);
              }),
              e && e.append(o);
          }

          e || $("body").append(i).find(".hicontextmenuroot").hide();
        },
        setPosition: function setPosition(t) {
          $(".hicontextmenuroot")
            .css({
              left: t.pageX + 2,
              top: t.pageY + 2,
            })
            .show();
        },
        eventBind: function eventBind() {
          var t = this;
          this.ele.on("contextmenu", function (e) {
            $(".hicontextmenuroot").remove(),
              e.preventDefault(),
              t.renderMenu(t.opts.menus),
              t.setPosition(e),
              t.opts.target &&
                "function" == typeof t.opts.target &&
                t.opts.target(n(this));
          }),
            n("body").on("click", function () {
              n(".hicontextmenuroot").remove();
            });
        },
      }),
      (n.fn.hicontextMenu = function (t) {
        return new i(this, t), this;
      });
  }
]);