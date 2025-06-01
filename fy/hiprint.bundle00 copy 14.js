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
 // 第 14
  function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return r;
    });

    var i = n(11),
      o = n(5),
      r = (function () {
        function t() {
          this.id = i.a.createId();
        }

        return (
          (t.prototype.init = function (t, e, n) {
            (this.isHead = n),
              (this.target = e || $("<tr></tr>")),
              (this.tableOptions = t),
              this.initCells(this.columns);
          }),
          (t.prototype.getTarget = function () {
            return this.target;
          }),
          (t.prototype.initCells = function (t) {
            var e = this;
            t
              ? t.forEach(function (t, n) {
                  t.init(
                    e.target.find("td:eq(" + n + ")"),
                    e.tableOptions,
                    e.id,
                    e.isHead
                  );
                })
              : ((this.columns = []),
                this.target.find("td").map(function (t, n) {
                  var i = new o.a();
                  i.init($(n), e.tableOptions, e.id, e.isHead),
                    e.columns.push(i);
                }));
          }),
          (t.prototype.removeCell = function (t) {
            var e = this.columns.indexOf(t);
            this.columns[e].getTarget().remove(), this.columns.splice(e, 1);
          }),
          (t.prototype.createTableCell = function (t, e) {
            var n = new o.a();
            return (
              n.init($("<td></td>"), this.tableOptions, this.id, this.isHead),
              t > 1 && (n.getTarget().attr("rowspan", t), (n.rowspan = t)),
              e > 1 && (n.getTarget().attr("colspan", e), (n.colspan = e)),
              n
            );
          }),
          (t.prototype.insertToTargetCellLeft = function (t, e) {
            var n = this.columns.indexOf(t);
            t.getTarget().before(e.getTarget()), this.columns.splice(n, 0, e);
          }),
          (t.prototype.insertToTargetCellRight = function (t, e) {
            var n = this.columns.indexOf(t);
            this.columns[n].getTarget().after(e.getTarget()),
              this.columns.splice(n + 1, 0, e);
          }),
          (t.prototype.insertCellToFirst = function (t) {
            this.target.prepend(t.getTarget()), this.columns.splice(0, 0, t);
          }),
          (t.prototype.insertCellToLast = function (t) {
            this.columns.push(t), this.target.append(t.getTarget());
          }),
          (t.prototype.getPrintElementOptionEntity = function () {
            var t = [];
            return (
              this.columns.forEach(function (e) {
                t.push(e.getEntity());
              }),
              t
            );
          }),
          t
        );
      })();
  }
]);