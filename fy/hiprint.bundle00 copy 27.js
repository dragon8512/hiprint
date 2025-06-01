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
  // 第 27
  function (t, e) {
    var n, i;
    jQuery,
      (n = "connected"),
      (i = "reconnecting"),
      (window.hiwebSocket = {
        opened: !1,
        name: "webSockets",
        reconnectTimeout: 6e4,
        reconnectWindowSetTimeout: null,
        reconnectDelay: 2e3,
        supportsKeepAlive: function supportsKeepAlive() {
          return !0;
        },
        hasIo: function hasIo(t) {
          return window.io;
        },
        send: function send(t) {
          try {
            this.socket.emit("news", t);
          } catch (e) {
            console.log("send data error:" + (t || "") + JSON.stringify(e));
          }
        },
        getPrinterList: function getPrinterList() {
          return this.printerList;
        },
        start: function start() {
          var _this = this;

          var t = this;
          window.WebSocket
            ? this.socket ||
              ((this.socket = io("http://localhost:17521", {
                reconnectionAttempts: 5,
              })),
              this.socket.on("connect", function (e) {
                (t.opened = !0),
                  console.log("Websocket opened."),
                  _this.socket.on("successs", function (t) {
                    hinnn.event.trigger("printSuccess_" + t.templateId, t);
                  }),
                  _this.socket.on("error", function (t) {
                    hinnn.event.trigger("printError_" + t.templateId, t);
                  }),
                  _this.socket.on("printerList", function (e) {
                    t.printerList = e;
                  }),
                  (t.state = n);
              }),
              this.socket.on("disconnect", function () {
                t.opened = !1;
              }))
            : console.log("WebSocket start fail");
        },
        reconnect: function reconnect() {
          (this.state !== n && this.state !== i) ||
            (this.stop(),
            this.ensureReconnectingState() &&
              (console.log("Websocket reconnecting."), this.start()));
        },
        stop: function stop() {
          this.socket &&
            (console.log("Closing the Websocket."),
            this.socket.close(),
            (this.socket = null));
        },
        ensureReconnectingState: function ensureReconnectingState() {
          return (this.state = i), this.state === i;
        },
      });
  }
]);