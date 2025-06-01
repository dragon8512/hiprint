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
  
  // 第 2
  function (t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return o;
    });

    var i = n(9),
      o = (function () {
        function t() {
          (this.providers = []),
            (this.movingDistance = 1.5),
            (this.paperHeightTrim = 1),
            (this.text = {
              supportOptions: [
                {
                  name: "title",
                  hidden: !1,
                  title: "",
                },
                {
                  name: "field",
                  hidden: !1,
                },
                {
                  name: "testData",
                  hidden: !1,
                },
                {
                  name: "dataType",
                  hidden: !1,
                },
                {
                  name: "fontFamily",
                  hidden: !1,
                },
                {
                  name: "fontSize",
                  hidden: !1,
                },
                {
                  name: "fontWeight",
                  hidden: !1,
                },
                {
                  name: "letterSpacing",
                  hidden: !1,
                },
                {
                  name: "color",
                  hidden: !1,
                },
                {
                  name: "textDecoration",
                  hidden: !1,
                },
                {
                  name: "textAlign",
                  hidden: !1,
                },
                {
                  name: "textContentVerticalAlign",
                  hidden: !1,
                },
                {
                  name: "lineHeight",
                  hidden: !1,
                },
                {
                  name: "textType",
                  hidden: !1,
                },
                {
                  name: "barcodeMode",
                  hidden: !1,
                },
                {
                  name: "hideTitle",
                  hidden: !1,
                },
                {
                  name: "showInPage",
                  hidden: !1,
                },
                {
                  name: "unShowInPage",
                  hidden: !1,
                },
                {
                  name: "fixed",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "transform",
                  hidden: !1,
                },
                {
                  name: "optionsGroup",
                  hidden: !1,
                },
                {
                  name: "borderLeft",
                  hidden: !1,
                },
                {
                  name: "borderTop",
                  hidden: !1,
                },
                {
                  name: "borderRight",
                  hidden: !1,
                },
                {
                  name: "borderBottom",
                  hidden: !1,
                },
                {
                  name: "borderWidth",
                  hidden: !1,
                },
                {
                  name: "borderColor",
                  hidden: !1,
                },
                {
                  name: "contentPaddingLeft",
                  hidden: !1,
                },
                {
                  name: "contentPaddingTop",
                  hidden: !1,
                },
                {
                  name: "contentPaddingRight",
                  hidden: !1,
                },
                {
                  name: "contentPaddingBottom",
                  hidden: !1,
                },
                {
                  name: "backgroundColor",
                  hidden: !1,
                },
                {
                  name: "formatter",
                  hidden: !1,
                },
                {
                  name: "styler",
                  hidden: !1,
                },
              ],
              default: {
                fontFamily: void 0,
                fontSize: void 0,
                fontWeight: "",
                letterSpacing: void 0,
                textAlign: void 0,
                textType: "text",
                hideTitle: !1,
                height: 9.75,
                lineHeight: void 0,
                width: 120,
              },
            }),
            (this.image = {
              supportOptions: [
                {
                  name: "field",
                  hidden: !1,
                },
                {
                  name: "src",
                  hidden: !1,
                },
                {
                  name: "showInPage",
                  hidden: !1,
                },
                {
                  name: "fixed",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "transform",
                  hidden: !1,
                },
                {
                  name: "formatter",
                  hidden: !1,
                },
                {
                  name: "styler",
                  hidden: !1,
                },
              ],
              default: {},
            }),
            (this.longText = {
              supportOptions: [
                {
                  name: "title",
                  hidden: !1,
                },
                {
                  name: "field",
                  hidden: !1,
                },
                {
                  name: "testData",
                  hidden: !1,
                },
                {
                  name: "fontFamily",
                  hidden: !1,
                },
                {
                  name: "fontSize",
                  hidden: !1,
                },
                {
                  name: "fontWeight",
                  hidden: !1,
                },
                {
                  name: "letterSpacing",
                  hidden: !1,
                },
                {
                  name: "textAlign",
                  hidden: !1,
                },
                {
                  name: "lineHeight",
                  hidden: !1,
                },
                {
                  name: "color",
                  hidden: !1,
                },
                {
                  name: "hideTitle",
                  hidden: !1,
                },
                {
                  name: "longTextIndent",
                  hidden: !1,
                },
                {
                  name: "leftSpaceRemoved",
                  hidden: !1,
                },
                {
                  name: "showInPage",
                  hidden: !1,
                },
                {
                  name: "unShowInPage",
                  hidden: !1,
                },
                {
                  name: "fixed",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "lHeight",
                  hidden: !1,
                },
                {
                  name: "transform",
                  hidden: !1,
                },
                {
                  name: "optionsGroup",
                  hidden: !1,
                },
                {
                  name: "borderLeft",
                  hidden: !1,
                },
                {
                  name: "borderTop",
                  hidden: !1,
                },
                {
                  name: "borderRight",
                  hidden: !1,
                },
                {
                  name: "borderBottom",
                  hidden: !1,
                },
                {
                  name: "borderWidth",
                  hidden: !1,
                },
                {
                  name: "borderColor",
                  hidden: !1,
                },
                {
                  name: "contentPaddingLeft",
                  hidden: !1,
                },
                {
                  name: "contentPaddingTop",
                  hidden: !1,
                },
                {
                  name: "contentPaddingRight",
                  hidden: !1,
                },
                {
                  name: "contentPaddingBottom",
                  hidden: !1,
                },
                {
                  name: "backgroundColor",
                  hidden: !1,
                },
                {
                  name: "formatter",
                  hidden: !1,
                },
                {
                  name: "styler",
                  hidden: !1,
                },
              ],
              default: {
                fontFamily: void 0,
                fontSize: void 0,
                fontWeight: "",
                letterSpacing: void 0,
                textAlign: void 0,
                hideTitle: !1,
                height: 42,
                lineHeight: void 0,
                width: 550,
              },
            }),
            (this.table = {
              supportOptions: [
                {
                  name: "field",
                  hidden: !1,
                },
                {
                  name: "fontFamily",
                  hidden: !1,
                },
                {
                  name: "fontSize",
                  hidden: !1,
                },
                {
                  name: "lineHeight",
                  hidden: !1,
                },
                {
                  name: "textAlign",
                  hidden: !1,
                },
                {
                  name: "gridColumns",
                  hidden: !1,
                },
                {
                  name: "gridColumnsGutter",
                  hidden: !1,
                },
                {
                  name: "tableBorder",
                  hidden: !1,
                },
                {
                  name: "tableHeaderBorder",
                  hidden: !1,
                },
                {
                  name: "tableHeaderCellBorder",
                  hidden: !1,
                },
                {
                  name: "tableHeaderRowHeight",
                  hidden: !1,
                },
                {
                  name: "tableHeaderBackground",
                  hidden: !1,
                },
                {
                  name: "tableHeaderFontSize",
                  hidden: !1,
                },
                {
                  name: "tableHeaderFontWeight",
                  hidden: !1,
                },
                {
                  name: "tableBodyRowHeight",
                  hidden: !1,
                },
                {
                  name: "tableBodyRowBorder",
                  hidden: !1,
                },
                {
                  name: "tableBodyCellBorder",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "lHeight",
                  hidden: !1,
                },
                {
                  name: "autoCompletion",
                  hidden: !1,
                },
                {
                  name: "columns",
                  hidden: !1,
                },
                {
                  name: "styler",
                  hidden: !1,
                },
                {
                  name: "rowStyler",
                  hidden: !1,
                },
                {
                  name: "tableFooterRepeat",
                  hidden: !1,
                },
                {
                  name: "footerFormatter",
                  hidden: !1,
                },
                {
                  name: "gridColumnsFooterFormatter",
                  hidden: !1,
                },
              ],
              default: {
                fontFamily: void 0,
                fontSize: void 0,
                fontWeight: "",
                textAlign: void 0,
                tableBorder: void 0,
                tableHeaderBorder: void 0,
                tableHeaderCellBorder: void 0,
                tableHeaderBackground: void 0,
                tableHeaderRowHeight: void 0,
                tableHeaderFontWeight: void 0,
                tableBodyCellBorder: void 0,
                tableBodyRowHeight: void 0,
                letterSpacing: "",
                lineHeight: void 0,
                width: 550,
              },
            }),
            (this.tableCustom = {
              supportOptions: [
                {
                  name: "field",
                  hidden: !1,
                },
                {
                  name: "fontFamily",
                  hidden: !1,
                },
                {
                  name: "fontSize",
                  hidden: !1,
                },
                {
                  name: "textAlign",
                  hidden: !1,
                },
                {
                  name: "tableBorder",
                  hidden: !1,
                },
                {
                  name: "tableHeaderBorder",
                  hidden: !1,
                },
                {
                  name: "tableHeaderCellBorder",
                  hidden: !1,
                },
                {
                  name: "tableHeaderRowHeight",
                  hidden: !1,
                },
                {
                  name: "tableHeaderFontSize",
                  hidden: !1,
                },
                {
                  name: "tableHeaderFontWeight",
                  hidden: !1,
                },
                {
                  name: "tableHeaderBackground",
                  hidden: !1,
                },
                {
                  name: "tableBodyRowHeight",
                  hidden: !1,
                },
                {
                  name: "tableBodyRowBorder",
                  hidden: !1,
                },
                {
                  name: "tableBodyCellBorder",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "lHeight",
                  hidden: !1,
                },
                {
                  name: "autoCompletion",
                  hidden: !1,
                },
                {
                  name: "tableFooterRepeat",
                  hidden: !1,
                },
              ],
              default: {
                fontFamily: void 0,
                fontSize: void 0,
                fontWeight: "",
                textAlign: void 0,
                tableBorder: void 0,
                tableHeaderBorder: void 0,
                tableHeaderCellBorder: void 0,
                tableHeaderBackground: void 0,
                tableHeaderRowHeight: void 0,
                tableHeaderFontWeight: void 0,
                tableBodyCellBorder: void 0,
                tableBodyRowHeight: void 0,
                letterSpacing: "",
                lineHeight: void 0,
                width: 550,
              },
            }),
            (this.hline = {
              supportOptions: [
                {
                  name: "borderColor",
                  hidden: !1,
                },
                {
                  name: "borderWidth",
                  hidden: !1,
                },
                {
                  name: "showInPage",
                  hidden: !1,
                },
                {
                  name: "fixed",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "transform",
                  hidden: !1,
                },
                {
                  name: "borderStyle",
                  hidden: !1,
                },
              ],
              default: {
                borderWidth: 0.75,
                height: 9,
                width: 90,
              },
            }),
            (this.vline = {
              supportOptions: [
                {
                  name: "borderColor",
                  hidden: !1,
                },
                {
                  name: "borderWidth",
                  hidden: !1,
                },
                {
                  name: "showInPage",
                  hidden: !1,
                },
                {
                  name: "fixed",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "transform",
                  hidden: !1,
                },
                {
                  name: "borderStyle",
                  hidden: !1,
                },
              ],
              default: {
                borderWidth: void 0,
                height: 90,
                width: 9,
              },
            }),
            (this.rect = {
              supportOptions: [
                {
                  name: "borderColor",
                  hidden: !1,
                },
                {
                  name: "borderWidth",
                  hidden: !1,
                },
                {
                  name: "showInPage",
                  hidden: !1,
                },
                {
                  name: "fixed",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "transform",
                  hidden: !1,
                },
                {
                  name: "borderStyle",
                  hidden: !1,
                },
              ],
              default: {
                borderWidth: void 0,
                height: 90,
                width: 90,
              },
            }),
            (this.oval = {
              supportOptions: [
                {
                  name: "borderColor",
                  hidden: !1,
                },
                {
                  name: "borderWidth",
                  hidden: !1,
                },
                {
                  name: "showInPage",
                  hidden: !1,
                },
                {
                  name: "fixed",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "transform",
                  hidden: !1,
                },
                {
                  name: "borderStyle",
                  hidden: !1,
                },
              ],
              default: {
                borderWidth: void 0,
                height: 90,
                width: 90,
              },
            }),
            (this.html = {
              supportOptions: [
                {
                  name: "showInPage",
                  hidden: !1,
                },
                {
                  name: "unShowInPage",
                  hidden: !1,
                },
                {
                  name: "fixed",
                  hidden: !1,
                },
                {
                  name: "axis",
                  hidden: !1,
                },
                {
                  name: "formatter",
                  hidden: !1,
                },
              ],
              default: {
                height: 90,
                width: 90,
              },
            }),
            (this.tableColumn = {
              supportOptions: [
                {
                  name: "title",
                  hidden: !1,
                },
                {
                  name: "align",
                  hidden: !1,
                },
                {
                  name: "halign",
                  hidden: !1,
                },
                {
                  name: "vAlign",
                  hidden: !1,
                },
                {
                  name: "paddingLeft",
                  hidden: !1,
                },
                {
                  name: "paddingRight",
                  hidden: !1,
                },
                {
                  name: "formatter2",
                  hidden: !1,
                },
                {
                  name: "styler2",
                  hidden: !1,
                },
              ],
              default: {
                height: 90,
                width: 90,
              },
            });
        }

        return (
          (t.prototype.init = function (t) {
            t && $.extend(this, t);
          }),
          Object.defineProperty(t, "instance", {
            get: function get() {
              return (
                t._instance ||
                  ((t._instance = new t()),
                  window.HIPRINT_CONFIG &&
                    $.extend(t._instance, HIPRINT_CONFIG),
                  t._instance.optionItems &&
                    t._instance.optionItems.forEach(function (t) {
                      i.a.registerItem(t);
                    })),
                t._instance
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })();
  }
]);