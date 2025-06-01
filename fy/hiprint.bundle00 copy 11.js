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
 // 第 11
  function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return r;
      });

    var i = n(14),
      o = (function () {
        function t(t, e) {
          (this.selectedCells = []), (this.rows = t), (this.tableTatget = e);
        }

        return (
          (t.prototype.clear = function () {
            this.tableTatget.find("td").removeClass("selected");
          }),
          (t.prototype.setSingleSelect = function (t) {
            (this.startCell = t), (this.selectedCells = []);
          }),
          (t.prototype.getSingleSelect = function () {
            if (this.selectedCells.length) {
              if (1 == this.selectedCells.length)
                return 1 == this.selectedCells[0].length
                  ? this.selectedCells[0][0]
                  : void 0;
              if (this.selectedCells.length > 1) return;
            }

            return this.startCell;
          }),
          (t.prototype.singleSelectByXY = function (t, e) {
            var n = this.getCellByXY(t, e);
            n &&
              (this.clear(),
              n &&
                (n.cell.select(),
                (this.startCell = n),
                (this.selectedCells = [])));
          }),
          (t.prototype.multipleSelectByXY = function (t, e) {
            this.clear();
            var n = [];

            if (this.startCell) {
              var o = this.getCellByXY(t, e);

              if (o) {
                var r = i.a.mergeRect(
                  this.startCell.cell.getTableRect(),
                  o.cell.getTableRect()
                );
                this.selectByRect(new a(r), n);
              }
            }

            this.selectedCells = n;
          }),
          (t.prototype.selectByRect = function (t, e) {
            this.rows.forEach(function (n, i) {
              var o = [];
              n.columns.forEach(function (e) {
                e.isInRect(t) && (o.push(new p(i, e)), e.select());
              }),
                o.length && e.push(o);
            }),
              t.changed &&
                ((t.changed = !1),
                e.splice(0, e.length),
                this.selectByRect(t, e));
          }),
          (t.prototype.getSelectedCells = function () {
            return this.selectedCells;
          }),
          (t.prototype.getCellByXY = function (t, e) {
            var n;
            return (
              this.rows.forEach(function (i, o) {
                var r = i.columns.filter(function (n) {
                  return n.isXYinCell(t, e);
                });
                r.length && (n = new p(o, r[0]));
              }),
              n
            );
          }),
          t
        );
      })(),
      r = (function () {
        return function (t) {
          (this.x = t.x),
            (this.y = t.y),
            (this.height = t.height),
            (this.width = t.width);
        };
      })(),
      a = (function () {
        return function (t) {
          this.rect = t;
        };
      })(),
      p = (function () {
        return function (t, e) {
          (this.rowIndex = t), (this.cell = e);
        };
      })();
  }
]);