! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/home/q/deploy/from/prod/wechat-20180131-110602/dist/js/", e(e.s = 396)
}([function(t, e, n) {
    "use strict";

    function i(t) {
        return "[object Array]" === S.call(t)
    }

    function o(t) {
        return "[object ArrayBuffer]" === S.call(t)
    }

    function r(t) {
        return "undefined" != typeof FormData && t instanceof FormData
    }

    function s(t) {
        var e;
        return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
    }

    function a(t) {
        return "string" == typeof t
    }

    function c(t) {
        return "number" == typeof t
    }

    function l(t) {
        return "undefined" == typeof t
    }

    function u(t) {
        return null !== t && "object" == typeof t
    }

    function h(t) {
        return "[object Date]" === S.call(t)
    }

    function p(t) {
        return "[object File]" === S.call(t)
    }

    function f(t) {
        return "[object Blob]" === S.call(t)
    }

    function d(t) {
        return "[object Function]" === S.call(t)
    }

    function m(t) {
        return u(t) && d(t.pipe)
    }

    function v(t) {
        return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
    }

    function g(t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "")
    }

    function y() {
        return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
    }

    function b(t, e) {
        if (null !== t && "undefined" != typeof t)
            if ("object" == typeof t || i(t) || (t = [t]), i(t))
                for (var n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
            else
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
    }

    function w() {
        function t(t, n) {
            "object" == typeof e[n] && "object" == typeof t ? e[n] = w(e[n], t) : e[n] = t
        }
        for (var e = {}, n = 0, i = arguments.length; n < i; n++) b(arguments[n], t);
        return e
    }

    function x(t, e, n) {
        return b(e, function(e, i) {
            n && "function" == typeof e ? t[i] = T(e, n) : t[i] = e
        }), t
    }
    var T = n(17),
        S = Object.prototype.toString;
    t.exports = {
        isArray: i,
        isArrayBuffer: o,
        isFormData: r,
        isArrayBufferView: s,
        isString: a,
        isNumber: c,
        isObject: u,
        isUndefined: l,
        isDate: h,
        isFile: p,
        isBlob: f,
        isFunction: d,
        isStream: m,
        isURLSearchParams: v,
        isStandardBrowserEnv: y,
        forEach: b,
        merge: w,
        extend: x,
        trim: g
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    t.exports = !n(5)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (e) {
            return !0
        }
    }
}, function(t, e, n) {
    var i = n(32),
        o = "object" == typeof self && self && self.Object === Object && self,
        r = i || o || Function("return this")();
    t.exports = r
}, function(t, e, n) {
    "use strict";
    (function(e) {
        function i(t, e) {
            !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }

        function o() {
            var t;
            return "undefined" != typeof XMLHttpRequest ? t = n(18) : "undefined" != typeof e && (t = n(18)), t
        }
        var r = n(0),
            s = n(72),
            a = /^\)\]\}',?\n/,
            c = {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            l = {
                adapter: o(),
                transformRequest: [function(t, e) {
                    return s(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (i(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) ? (i(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                }],
                transformResponse: [function(t) {
                    if ("string" == typeof t) {
                        t = t.replace(a, "");
                        try {
                            t = JSON.parse(t)
                        } catch (e) {}
                    }
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(t) {
                    return t >= 200 && t < 300
                }
            };
        l.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, r.forEach(["delete", "get", "head"], function(t) {
            l.headers[t] = {}
        }), r.forEach(["post", "put", "patch"], function(t) {
            l.headers[t] = r.merge(c)
        }), t.exports = l
    }).call(e, n(71))
}, function(t, e) {
    function n(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
    t.exports = n
}, function(t, e, n) {
    function i(t) {
        return null == t ? void 0 === t ? c : a : l && l in Object(t) ? r(t) : s(t)
    }
    var o = n(24),
        r = n(102),
        s = n(103),
        a = "[object Null]",
        c = "[object Undefined]",
        l = o ? o.toStringTag : void 0;
    t.exports = i
}, function(t, e, n) {
    function i(t) {
        return null != t && r(t.length) && !o(t)
    }
    var o = n(31),
        r = n(34);
    t.exports = i
}, function(t, e) {
    function n(t) {
        return null != t && "object" == typeof t
    }
    t.exports = n
}, function(t, e, n) {
    var i = n(61),
        o = n(14);
    t.exports = function(t) {
        return i(o(t))
    }
}, function(t, e) {
    var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can'registerbase call method on  " + t);
        return t
    }
}, function(t, e, n) {
    t.exports = {
        "default": n(89),
        __esModule: !0
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function o(t) {
        var e = JSON.parse(localStorage.getItem(u + t));
        return e && e.data
    }

    function r(t, e) {
        var n = {
            data: e
        };
        try {
            localStorage.setItem(u + t, (0, l["default"])(n))
        } catch (i) {}
    }

    function s(t) {
        localStorage.removeItem(u + t)
    }

    function a() {
        localStorage.clear()
    }
    var c = n(15),
        l = i(c),
        u = "win-";
    t.exports = {
        get: o,
        set: r,
        clear: a,
        remove: s
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return function() {
            for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
            return t.apply(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = n(73),
        r = n(75),
        s = n(76),
        a = n(77),
        c = n(19),
        l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(78);
    t.exports = function(t) {
        return new Promise(function(e, u) {
            var h = t.data,
                p = t.headers;
            i.isFormData(h) && delete p["Content-Type"];
            var f = new XMLHttpRequest,
                d = "onreadystatechange",
                m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || a(t.url) || (f = new window.XDomainRequest, d = "onload", m = !0, f.onprogress = function() {}, f.ontimeout = function() {}), t.auth) {
                var v = t.auth.username || "",
                    g = t.auth.password || "";
                p.Authorization = "Basic " + l(v + ":" + g)
            }
            if (f.open(t.method.toUpperCase(), r(t.url, t.params, t.paramsSerializer), !0), f.timeout = t.timeout, f[d] = function() {
                    if (f && (4 === f.readyState || m) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null,
                            i = t.responseType && "text" !== t.responseType ? f.response : f.responseText,
                            r = {
                                data: i,
                                status: 1223 === f.status ? 204 : f.status,
                                statusText: 1223 === f.status ? "No Content" : f.statusText,
                                headers: n,
                                config: t,
                                request: f
                            };
                        o(e, u, r), f = null
                    }
                }, f.onerror = function() {
                    u(c("Network Error", t)), f = null
                }, f.ontimeout = function() {
                    u(c("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED")), f = null
                }, i.isStandardBrowserEnv()) {
                var y = n(79),
                    b = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? y.read(t.xsrfCookieName) : void 0;
                b && (p[t.xsrfHeaderName] = b)
            }
            if ("setRequestHeader" in f && i.forEach(p, function(t, e) {
                    "undefined" == typeof h && "content-type" === e.toLowerCase() ? delete p[e] : f.setRequestHeader(e, t)
                }), t.withCredentials && (f.withCredentials = !0), t.responseType) try {
                f.responseType = t.responseType
            } catch (w) {
                if ("json" !== f.responseType) throw w
            }
            "function" == typeof t.onDownloadProgress && f.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && f.upload && f.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(t) {
                f && (f.abort(), u(t), f = null)
            }), void 0 === h && (h = null), f.send(h)
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(74);
    t.exports = function(t, e, n, o) {
        var r = new Error(t);
        return i(r, e, n, o)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return !(!t || !t.__CANCEL__)
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        this.message = t
    }
    i.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, i.prototype.__CANCEL__ = !0, t.exports = i
}, function(t, e) {
    function n(t) {
        var e = t && t.constructor,
            n = "function" == typeof e && e.prototype || i;
        return t === n
    }
    var i = Object.prototype;
    t.exports = n
}, function(t, e, n) {
    function i(t, e, n) {
        var i = t[e];
        a.call(t, e) && r(i, n) && (void 0 !== n || e in t) || o(t, e, n)
    }
    var o = n(29),
        r = n(25),
        s = Object.prototype,
        a = s.hasOwnProperty;
    t.exports = i
}, function(t, e, n) {
    var i = n(6),
        o = i.Symbol;
    t.exports = o
}, function(t, e) {
    function n(t, e) {
        return t === e || t !== t && e !== e
    }
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    var i;
    ! function(o, r, s) {
        function a(t, e) {
            this.wrapper = "string" == typeof t ? r.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                disablePointer: !h.hasPointer,
                disableTouch: h.hasPointer || !h.hasTouch,
                disableMouse: h.hasPointer || h.hasTouch,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0,
                bindToWrapper: "undefined" == typeof o.onmousedown
            };
            for (var n in e) this.options[n] = e[n];
            this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = h.hasTransition && this.options.useTransition, this.options.useTransform = h.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }

        function c(t, e, n) {
            var i = r.createElement("div"),
                o = r.createElement("div");
            return n === !0 && (i.style.cssText = "position:absolute;z-index:9999", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), o.className = "iScrollIndicator", "h" == t ? (n === !0 && (i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", o.style.height = "100%"), i.className = "iScrollHorizontalScrollbar") : (n === !0 && (i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", o.style.width = "100%"), i.className = "iScrollVerticalScrollbar"), i.style.cssText += ";overflow:hidden", e || (i.style.pointerEvents = "none"), i.appendChild(o), i
        }

        function l(t, e) {
            this.wrapper = "string" == typeof e.el ? r.querySelector(e.el) : e.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.options = {
                listenX: !0,
                listenY: !0,
                interactive: !1,
                resize: !0,
                defaultScrollbars: !1,
                shrink: !1,
                fade: !1,
                speedRatioX: 0,
                speedRatioY: 0
            };
            for (var n in e) this.options[n] = e[n];
            if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(o, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.addEvent(o, h.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(o, "mouseup", this))), this.options.fade) {
                this.wrapperStyle[h.style.transform] = this.scroller.translateZ;
                var i = h.style.transitionDuration;
                this.wrapperStyle[i] = h.isBadAndroid ? "0.0001ms" : "0ms";
                var s = this;
                h.isBadAndroid && u(function() {
                    "0.0001ms" === s.wrapperStyle[i] && (s.wrapperStyle[i] = "0s")
                }), this.wrapperStyle.opacity = "0"
            }
        }
        var u = o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || o.oRequestAnimationFrame || o.msRequestAnimationFrame || function(t) {
                o.setTimeout(t, 1e3 / 60)
            },
            h = function() {
                function t(t) {
                    return i !== !1 && ("" === i ? t : i + t.charAt(0).toUpperCase() + t.substr(1))
                }
                var e = {},
                    n = r.createElement("div").style,
                    i = function() {
                        for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, o = e.length; i < o; i++)
                            if (t = e[i] + "ransform", t in n) return e[i].substr(0, e[i].length - 1);
                        return !1
                    }();
                e.getTime = Date.now || function() {
                    return (new Date).getTime()
                }, e.extend = function(t, e) {
                    for (var n in e) t[n] = e[n]
                }, e.addEvent = function(t, e, n, i) {
                    t.addEventListener(e, n, !!i)
                }, e.removeEvent = function(t, e, n, i) {
                    t.removeEventListener(e, n, !!i)
                }, e.prefixPointerEvent = function(t) {
                    return o.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
                }, e.momentum = function(t, e, n, i, o, r) {
                    var a, c, l = t - e,
                        u = s.abs(l) / n;
                    return r = void 0 === r ? 6e-4 : r, a = t + u * u / (2 * r) * (l < 0 ? -1 : 1), c = u / r, a < i ? (a = o ? i - o / 2.5 * (u / 8) : i, l = s.abs(a - t), c = l / u) : a > 0 && (a = o ? o / 2.5 * (u / 8) : 0, l = s.abs(t) + a, c = l / u), {
                        destination: s.round(a),
                        duration: c
                    }
                };
                var a = t("transform");
                return e.extend(e, {
                    hasTransform: a !== !1,
                    hasPerspective: t("perspective") in n,
                    hasTouch: "ontouchstart" in o,
                    hasPointer: !(!o.PointerEvent && !o.MSPointerEvent),
                    hasTransition: t("transition") in n
                }), e.isBadAndroid = function() {
                    var t = o.navigator.appVersion;
                    if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
                        var e = t.match(/Safari\/(\d+.\d)/);
                        return !(e && "object" == typeof e && e.length >= 2) || parseFloat(e[1]) < 535.19
                    }
                    return !1
                }(), e.extend(e.style = {}, {
                    transform: a,
                    transitionTimingFunction: t("transitionTimingFunction"),
                    transitionDuration: t("transitionDuration"),
                    transitionDelay: t("transitionDelay"),
                    transformOrigin: t("transformOrigin")
                }), e.hasClass = function(t, e) {
                    var n = new RegExp("(^|\\s)" + e + "(\\s|$)");
                    return n.test(t.className)
                }, e.addClass = function(t, n) {
                    if (!e.hasClass(t, n)) {
                        var i = t.className.split(" ");
                        i.push(n), t.className = i.join(" ")
                    }
                }, e.removeClass = function(t, n) {
                    if (e.hasClass(t, n)) {
                        var i = new RegExp("(^|\\s)" + n + "(\\s|$)", "g");
                        t.className = t.className.replace(i, " ")
                    }
                }, e.offset = function(t) {
                    for (var e = -t.offsetLeft, n = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, n -= t.offsetTop;
                    return {
                        left: e,
                        top: n
                    }
                }, e.preventDefaultException = function(t, e) {
                    for (var n in e)
                        if (e[n].test(t[n])) return !0;
                    return !1
                }, e.extend(e.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }), e.extend(e.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(t) {
                            return t * (2 - t)
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(t) {
                            return s.sqrt(1 - --t * t)
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(t) {
                            var e = 4;
                            return (t -= 1) * t * ((e + 1) * t + e) + 1
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function(t) {
                            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function(t) {
                            var e = .22,
                                n = .4;
                            return 0 === t ? 0 : 1 == t ? 1 : n * s.pow(2, -10 * t) * s.sin((t - e / 4) * (2 * s.PI) / e) + 1
                        }
                    }
                }), e.tap = function(t, e) {
                    var n = r.createEvent("Event");
                    n.initEvent(e, !0, !0), n.pageX = t.pageX, n.pageY = t.pageY, t.target.dispatchEvent(n)
                }, e.click = function(t) {
                    var e, n = t.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (e = r.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, t.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), e._constructed = !0, n.dispatchEvent(e))
                }, e
            }();
        a.prototype = {
            version: "5.2.0",
            _init: function() {
                this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
            },
            destroy: function() {
                this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
            },
            _transitionEnd: function(t) {
                t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
            },
            _start: function(t) {
                if (1 != h.eventType[t.type]) {
                    var e;
                    if (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== e) return
                }
                if (this.enabled && (!this.initiated || h.eventType[t.type] === this.initiated)) {
                    !this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                    var n, i = t.touches ? t.touches[0] : t;
                    this.initiated = h.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = h.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, n = this.getComputedPosition(), this._translate(s.round(n.x), s.round(n.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("beforeScrollStart")
                }
            },
            _move: function(t) {
                if (this.enabled && h.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault();
                    var e, n, i, o, r = t.touches ? t.touches[0] : t,
                        a = r.pageX - this.pointX,
                        c = r.pageY - this.pointY,
                        l = h.getTime();
                    if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += c, i = s.abs(this.distX), o = s.abs(this.distY), !(l - this.endTime > 300 && i < 10 && o < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (i > o + this.options.directionLockThreshold ? this.directionLocked = "h" : o >= i + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            c = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            a = 0
                        }
                        a = this.hasHorizontalScroll ? a : 0, c = this.hasVerticalScroll ? c : 0, e = this.x + a, n = this.y + c, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + a / 3 : e > 0 ? 0 : this.maxScrollX), (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + c / 3 : n > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0, this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, n), l - this.startTime > 300 && (this.startTime = l, this.startX = this.x, this.startY = this.y)
                    }
                }
            },
            _end: function(t) {
                if (this.enabled && h.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && !h.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                    var e, n, i = (t.changedTouches ? t.changedTouches[0] : t, h.getTime() - this.startTime),
                        o = s.round(this.x),
                        r = s.round(this.y),
                        a = s.abs(o - this.startX),
                        c = s.abs(r - this.startY),
                        l = 0,
                        u = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
                        if (this.scrollTo(o, r), !this.moved) return this.options.tap && h.tap(t, this.options.tap), this.options.click && h.click(t), void this._execEvent("scrollCancel");
                        if (this._events.flick && i < 200 && a < 100 && c < 100) return void this._execEvent("flick");
                        if (this.options.momentum && i < 300 && (e = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, i, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                destination: o,
                                duration: 0
                            }, n = this.hasVerticalScroll ? h.momentum(this.y, this.startY, i, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                destination: r,
                                duration: 0
                            }, o = e.destination, r = n.destination, l = s.max(e.duration, n.duration), this.isInTransition = 1), this.options.snap) {
                            var p = this._nearestSnap(o, r);
                            this.currentPage = p, l = this.options.snapSpeed || s.max(s.max(s.min(s.abs(o - p.x), 1e3), s.min(s.abs(r - p.y), 1e3)), 300), o = p.x, r = p.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                        }
                        return o != this.x || r != this.y ? ((o > 0 || o < this.maxScrollX || r > 0 || r < this.maxScrollY) && (u = h.ease.quadratic), void this.scrollTo(o, r, l, u)) : void this._execEvent("scrollEnd")
                    }
                }
            },
            _resize: function() {
                var t = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                    t.refresh()
                }, this.options.resizePolling)
            },
            resetPosition: function(t) {
                var e = this.x,
                    n = this.y;
                return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY), (e != this.x || n != this.y) && (this.scrollTo(e, n, t, this.options.bounceEasing), !0)
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            refresh: function() {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = h.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
            },
            on: function(t, e) {
                this._events[t] || (this._events[t] = []), this._events[t].push(e)
            },
            off: function(t, e) {
                if (this._events[t]) {
                    var n = this._events[t].indexOf(e);
                    n > -1 && this._events[t].splice(n, 1)
                }
            },
            _execEvent: function(t) {
                if (this._events[t]) {
                    var e = 0,
                        n = this._events[t].length;
                    if (n)
                        for (; e < n; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
                }
            },
            scrollBy: function(t, e, n, i) {
                t = this.x + t, e = this.y + e, n = n || 0, this.scrollTo(t, e, n, i)
            },
            scrollTo: function(t, e, n, i) {
                i = i || h.ease.circular, this.isInTransition = this.options.useTransition && n > 0;
                var o = this.options.useTransition && i.style;
                !n || o ? (o && (this._transitionTimingFunction(i.style), this._transitionTime(n)), this._translate(t, e)) : this._animate(t, e, n, i.fn)
            },
            scrollToElement: function(t, e, n, i, o) {
                if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                    var r = h.offset(t);
                    r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, n === !0 && (n = s.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), i === !0 && (i = s.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= n || 0, r.top -= i || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, e = void 0 === e || null === e || "auto" === e ? s.max(s.abs(this.x - r.left), s.abs(this.y - r.top)) : e, this.scrollTo(r.left, r.top, e, o)
                }
            },
            _transitionTime: function(t) {
                t = t || 0;
                var e = h.style.transitionDuration;
                if (this.scrollerStyle[e] = t + "ms", !t && h.isBadAndroid) {
                    this.scrollerStyle[e] = "0.0001ms";
                    var n = this;
                    u(function() {
                        "0.0001ms" === n.scrollerStyle[e] && (n.scrollerStyle[e] = "0s")
                    })
                }
                if (this.indicators)
                    for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(t)
            },
            _transitionTimingFunction: function(t) {
                if (this.scrollerStyle[h.style.transitionTimingFunction] = t, this.indicators)
                    for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
            },
            _translate: function(t, e) {
                if (this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = s.round(t), e = s.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators)
                    for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
            },
            _initEvents: function(t) {
                var e = t ? h.removeEvent : h.addEvent,
                    n = this.options.bindToWrapper ? this.wrapper : o;
                e(o, "orientationchange", this), e(o, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(n, "mousemove", this), e(n, "mousecancel", this), e(n, "mouseup", this)), h.hasPointer && !this.options.disablePointer && (e(this.wrapper, h.prefixPointerEvent("pointerdown"), this), e(n, h.prefixPointerEvent("pointermove"), this), e(n, h.prefixPointerEvent("pointercancel"), this), e(n, h.prefixPointerEvent("pointerup"), this)), h.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(n, "touchmove", this), e(n, "touchcancel", this), e(n, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
            },
            getComputedPosition: function() {
                var t, e, n = o.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (n = n[h.style.transform].split(")")[0].split(", "), t = +(n[12] || n[4]), e = +(n[13] || n[5])) : (t = +n.left.replace(/[^-\d.]/g, ""), e = +n.top.replace(/[^-\d.]/g, "")), {
                    x: t,
                    y: e
                }
            },
            _initIndicators: function() {
                function t(t) {
                    if (r.indicators)
                        for (var e = r.indicators.length; e--;) t.call(r.indicators[e])
                }
                var e, n = this.options.interactiveScrollbars,
                    i = "string" != typeof this.options.scrollbars,
                    o = [],
                    r = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                    el: c("v", n, this.options.scrollbars),
                    interactive: n,
                    defaultScrollbars: !0,
                    customStyle: i,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: !1
                }, this.wrapper.appendChild(e.el), o.push(e)), this.options.scrollX && (e = {
                    el: c("h", n, this.options.scrollbars),
                    interactive: n,
                    defaultScrollbars: !0,
                    customStyle: i,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: !1
                }, this.wrapper.appendChild(e.el), o.push(e))), this.options.indicators && (o = o.concat(this.options.indicators));
                for (var s = o.length; s--;) this.indicators.push(new l(this, o[s]));
                this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                    t(function() {
                        this.fade()
                    })
                }), this.on("scrollCancel", function() {
                    t(function() {
                        this.fade()
                    })
                }), this.on("scrollStart", function() {
                    t(function() {
                        this.fade(1)
                    })
                }), this.on("beforeScrollStart", function() {
                    t(function() {
                        this.fade(1, !0)
                    })
                })), this.on("refresh", function() {
                    t(function() {
                        this.refresh()
                    })
                }), this.on("destroy", function() {
                    t(function() {
                        this.destroy()
                    }), delete this.indicators
                })
            },
            _initWheel: function() {
                h.addEvent(this.wrapper, "wheel", this), h.addEvent(this.wrapper, "mousewheel", this), h.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                    clearTimeout(this.wheelTimeout), this.wheelTimeout = null, h.removeEvent(this.wrapper, "wheel", this), h.removeEvent(this.wrapper, "mousewheel", this), h.removeEvent(this.wrapper, "DOMMouseScroll", this)
                })
            },
            _wheel: function(t) {
                if (this.enabled) {
                    t.preventDefault();
                    var e, n, i, o, r = this;
                    if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                            r.options.snap || r._execEvent("scrollEnd"), r.wheelTimeout = void 0
                        }, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, n = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, n = -t.deltaY);
                    else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, n = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in t) e = n = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in t)) return;
                        e = n = -t.detail / 3 * this.options.mouseWheelSpeed
                    }
                    if (e *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = n, n = 0), this.options.snap) return i = this.currentPage.pageX, o = this.currentPage.pageY, e > 0 ? i-- : e < 0 && i++, n > 0 ? o-- : n < 0 && o++, void this.goToPage(i, o);
                    i = this.x + s.round(this.hasHorizontalScroll ? e : 0), o = this.y + s.round(this.hasVerticalScroll ? n : 0), this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0, this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0, i > 0 ? i = 0 : i < this.maxScrollX && (i = this.maxScrollX), o > 0 ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY), this.scrollTo(i, o, 0)
                }
            },
            _initSnap: function() {
                this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                    var t, e, n, i, o, r, a = 0,
                        c = 0,
                        l = 0,
                        u = this.options.snapStepX || this.wrapperWidth,
                        h = this.options.snapStepY || this.wrapperHeight;
                    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                        if (this.options.snap === !0)
                            for (n = s.round(u / 2), i = s.round(h / 2); l > -this.scrollerWidth;) {
                                for (this.pages[a] = [], t = 0, o = 0; o > -this.scrollerHeight;) this.pages[a][t] = {
                                    x: s.max(l, this.maxScrollX),
                                    y: s.max(o, this.maxScrollY),
                                    width: u,
                                    height: h,
                                    cx: l - n,
                                    cy: o - i
                                }, o -= h, t++;
                                l -= u, a++
                            } else
                            for (r = this.options.snap, t = r.length, e = -1; a < t; a++)(0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) && (c = 0, e++), this.pages[c] || (this.pages[c] = []), l = s.max(-r[a].offsetLeft, this.maxScrollX), o = s.max(-r[a].offsetTop, this.maxScrollY), n = l - s.round(r[a].offsetWidth / 2), i = o - s.round(r[a].offsetHeight / 2), this.pages[c][e] = {
                                x: l,
                                y: o,
                                width: r[a].offsetWidth,
                                height: r[a].offsetHeight,
                                cx: n,
                                cy: i
                            }, l > this.maxScrollX && c++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                    }
                }), this.on("flick", function() {
                    var t = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.x - this.startX), 1e3), s.min(s.abs(this.y - this.startY), 1e3)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
                })
            },
            _nearestSnap: function(t, e) {
                if (!this.pages.length) return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
                var n = 0,
                    i = this.pages.length,
                    o = 0;
                if (s.abs(t - this.absStartX) < this.snapThresholdX && s.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n < i; n++)
                    if (t >= this.pages[n][0].cx) {
                        t = this.pages[n][0].x;
                        break
                    }
                for (i = this.pages[n].length; o < i; o++)
                    if (e >= this.pages[0][o].cy) {
                        e = this.pages[0][o].y;
                        break
                    }
                return n == this.currentPage.pageX && (n += this.directionX, n < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), t = this.pages[n][0].x), o == this.currentPage.pageY && (o += this.directionY, o < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), e = this.pages[0][o].y), {
                    x: t,
                    y: e,
                    pageX: n,
                    pageY: o
                }
            },
            goToPage: function(t, e, n, i) {
                i = i || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
                var o = this.pages[t][e].x,
                    r = this.pages[t][e].y;
                n = void 0 === n ? this.options.snapSpeed || s.max(s.max(s.min(s.abs(o - this.x), 1e3), s.min(s.abs(r - this.y), 1e3)), 300) : n, this.currentPage = {
                    x: o,
                    y: r,
                    pageX: t,
                    pageY: e
                }, this.scrollTo(o, r, n, i)
            },
            next: function(t, e) {
                var n = this.currentPage.pageX,
                    i = this.currentPage.pageY;
                n++, n >= this.pages.length && this.hasVerticalScroll && (n = 0, i++), this.goToPage(n, i, t, e)
            },
            prev: function(t, e) {
                var n = this.currentPage.pageX,
                    i = this.currentPage.pageY;
                n--, n < 0 && this.hasVerticalScroll && (n = 0, i--), this.goToPage(n, i, t, e)
            },
            _initKeys: function(t) {
                var e, n = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                };
                if ("object" == typeof this.options.keyBindings)
                    for (e in this.options.keyBindings) "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
                else this.options.keyBindings = {};
                for (e in n) this.options.keyBindings[e] = this.options.keyBindings[e] || n[e];
                h.addEvent(o, "keydown", this), this.on("destroy", function() {
                    h.removeEvent(o, "keydown", this)
                })
            },
            _key: function(t) {
                if (this.enabled) {
                    var e, n = this.options.snap,
                        i = n ? this.currentPage.pageX : this.x,
                        o = n ? this.currentPage.pageY : this.y,
                        r = h.getTime(),
                        a = this.keyTime || 0,
                        c = .25;
                    switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(s.round(e.x), s.round(e.y)),
                        this.isInTransition = !1), this.keyAcceleration = r - a < 200 ? s.min(this.keyAcceleration + c, 50) : 0, t.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? i += n ? 1 : this.wrapperWidth : o += n ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? i -= n ? 1 : this.wrapperWidth : o -= n ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            i = n ? this.pages.length - 1 : this.maxScrollX, o = n ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            i = 0, o = 0;
                            break;
                        case this.options.keyBindings.left:
                            i += n ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            o += n ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            i -= n ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            o -= n ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return
                    }
                    if (n) return void this.goToPage(i, o);
                    i > 0 ? (i = 0, this.keyAcceleration = 0) : i < this.maxScrollX && (i = this.maxScrollX, this.keyAcceleration = 0), o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollY && (o = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(i, o, 0), this.keyTime = r
                }
            },
            _animate: function(t, e, n, i) {
                function o() {
                    var p, f, d, m = h.getTime();
                    return m >= l ? (r.isAnimating = !1, r._translate(t, e), void(r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"))) : (m = (m - c) / n, d = i(m), p = (t - s) * d + s, f = (e - a) * d + a, r._translate(p, f), void(r.isAnimating && u(o)))
                }
                var r = this,
                    s = this.x,
                    a = this.y,
                    c = h.getTime(),
                    l = c + n;
                this.isAnimating = !0, o()
            },
            handleEvent: function(t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(t);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(t);
                        break;
                    case "keydown":
                        this._key(t);
                        break;
                    case "click":
                        this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
                }
            }
        }, l.prototype = {
            handleEvent: function(t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t)
                }
            },
            destroy: function() {
                this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(o, "touchmove", this), h.removeEvent(o, h.prefixPointerEvent("pointermove"), this), h.removeEvent(o, "mousemove", this), h.removeEvent(o, "touchend", this), h.removeEvent(o, h.prefixPointerEvent("pointerup"), this), h.removeEvent(o, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
            },
            _start: function(t) {
                var e = t.touches ? t.touches[0] : t;
                t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = h.getTime(), this.options.disableTouch || h.addEvent(o, "touchmove", this), this.options.disablePointer || h.addEvent(o, h.prefixPointerEvent("pointermove"), this), this.options.disableMouse || h.addEvent(o, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
            },
            _move: function(t) {
                var e, n, i, o, r = t.touches ? t.touches[0] : t;
                h.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = r.pageX - this.lastPointX, this.lastPointX = r.pageX, n = r.pageY - this.lastPointY, this.lastPointY = r.pageY, i = this.x + e, o = this.y + n, this._pos(i, o), t.preventDefault(), t.stopPropagation()
            },
            _end: function(t) {
                if (this.initiated) {
                    if (this.initiated = !1, t.preventDefault(), t.stopPropagation(), h.removeEvent(o, "touchmove", this), h.removeEvent(o, h.prefixPointerEvent("pointermove"), this), h.removeEvent(o, "mousemove", this), this.scroller.options.snap) {
                        var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            n = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.scroller.x - e.x), 1e3), s.min(s.abs(this.scroller.y - e.y), 1e3)), 300);
                        this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, n, this.scroller.options.bounceEasing))
                    }
                    this.moved && this.scroller._execEvent("scrollEnd")
                }
            },
            transitionTime: function(t) {
                t = t || 0;
                var e = h.style.transitionDuration;
                if (this.indicatorStyle[e] = t + "ms", !t && h.isBadAndroid) {
                    this.indicatorStyle[e] = "0.0001ms";
                    var n = this;
                    u(function() {
                        "0.0001ms" === n.indicatorStyle[e] && (n.indicatorStyle[e] = "0s")
                    })
                }
            },
            transitionTimingFunction: function(t) {
                this.indicatorStyle[h.style.transitionTimingFunction] = t
            },
            refresh: function() {
                this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = s.max(s.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = s.max(s.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
            },
            updatePosition: function() {
                var t = this.options.listenX && s.round(this.sizeRatioX * this.scroller.x) || 0,
                    e = this.options.listenY && s.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = s.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = s.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = s.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = s.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
            },
            _pos: function(t, e) {
                t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? s.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? s.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
            },
            fade: function(t, e) {
                if (!e || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var n = t ? 250 : 500,
                        i = t ? 0 : 300;
                    t = t ? "1" : "0", this.wrapperStyle[h.style.transitionDuration] = n + "ms", this.fadeTimeout = setTimeout(function(t) {
                        this.wrapperStyle.opacity = t, this.visible = +t
                    }.bind(this, t), i)
                }
            }
        }, a.utils = h, "undefined" != typeof t && t.exports ? t.exports = a : (i = function() {
            return a
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i)))
    }(window, document, Math)
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    function i(t, e, n) {
        "__proto__" == e && o ? o(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
    var o = n(30);
    t.exports = i
}, function(t, e, n) {
    var i = n(50),
        o = function() {
            try {
                var t = i(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (e) {}
        }();
    t.exports = o
}, function(t, e, n) {
    function i(t) {
        if (!r(t)) return !1;
        var e = o(t);
        return e == a || e == c || e == s || e == l
    }
    var o = n(9),
        r = n(8),
        s = "[object AsyncFunction]",
        a = "[object Function]",
        c = "[object GeneratorFunction]",
        l = "[object Proxy]";
    t.exports = i
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(e, n(99))
}, function(t, e) {
    function n(t) {
        return t
    }
    t.exports = n
}, function(t, e) {
    function n(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i
    }
    var i = 9007199254740991;
    t.exports = n
}, function(t, e) {
    function n(t, e) {
        return e = null == e ? i : e, !!e && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var i = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
    t.exports = n
}, function(t, e, n) {
    var i = n(37),
        o = n(42);
    t.exports = n(3) ? function(t, e, n) {
        return i.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var i = n(38),
        o = n(55),
        r = n(46),
        s = Object.defineProperty;
    e.f = n(3) ? Object.defineProperty : function(t, e, n) {
        if (i(t), e = r(e, !0), i(n), o) try {
            return s(t, e, n)
        } catch (a) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var i = n(4);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, n) {
    var i = n(23),
        o = n(53),
        r = n(95),
        s = n(10),
        a = n(22),
        c = n(62),
        l = Object.prototype,
        u = l.hasOwnProperty,
        h = r(function(t, e) {
            if (a(e) || s(e)) return void o(e, c(e), t);
            for (var n in e) u.call(e, n) && i(t, n, e[n])
        });
    t.exports = h
}, function(t, e, n) {
    var i = n(2),
        o = n(1),
        r = n(45),
        s = n(36),
        a = "prototype",
        c = function(t, e, n) {
            var l, u, h, p = t & c.F,
                f = t & c.G,
                d = t & c.S,
                m = t & c.P,
                v = t & c.B,
                g = t & c.W,
                y = f ? o : o[e] || (o[e] = {}),
                b = y[a],
                w = f ? i : d ? i[e] : (i[e] || {})[a];
            f && (n = e);
            for (l in n) u = !p && w && void 0 !== w[l], u && l in y || (h = u ? w[l] : n[l], y[l] = f && "function" != typeof w[l] ? n[l] : v && u ? r(h, i) : g && w[l] == h ? function(t) {
                var e = function(e, n, i) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, i)
                    }
                    return t.apply(this, arguments)
                };
                return e[a] = t[a], e
            }(h) : m && "function" == typeof h ? r(Function.call, h) : h, m && ((y.virtual || (y.virtual = {}))[l] = h, t & c.R && b && !b[l] && s(b, l, h)))
        };
    c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function(t, e, n) {
    var i = n(56),
        o = n(49);
    t.exports = Object.keys || function(t) {
        return i(t, o)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    var n = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function(t, e, n) {
    var i = n(51);
    t.exports = function(t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, o) {
                    return t.call(e, n, i, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, n) {
    var i = n(4);
    t.exports = function(t, e) {
        if (!i(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !i(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
        throw TypeError("Can'registerbase convert object to primitive value")
    }
}, function(t, e, n) {
    var i = n(48)("keys"),
        o = n(44);
    t.exports = function(t) {
        return i[t] || (i[t] = o(t))
    }
}, function(t, e, n) {
    var i = n(2),
        o = "__core-js_shared__",
        r = i[o] || (i[o] = {});
    t.exports = function(t) {
        return r[t] || (r[t] = {})
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    function i(t, e) {
        var n = r(t, e);
        return o(n) ? n : void 0
    }
    var o = n(101),
        r = n(106);
    t.exports = i
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var i = n(4),
        o = n(2).document,
        r = i(o) && i(o.createElement);
    t.exports = function(t) {
        return r ? o.createElement(t) : {}
    }
}, function(t, e, n) {
    function i(t, e, n, i) {
        var s = !n;
        n || (n = {});
        for (var a = -1, c = e.length; ++a < c;) {
            var l = e[a],
                u = i ? i(n[l], t[l], l, n, t) : void 0;
            void 0 === u && (u = t[l]), s ? r(n, l, u) : o(n, l, u)
        }
        return n
    }
    var o = n(23),
        r = n(29);
    t.exports = i
}, function(t, e, n) {
    var i = n(14);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, e, n) {
    t.exports = !n(3) && !n(5)(function() {
        return 7 != Object.defineProperty(n(52)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var i = n(28),
        o = n(12),
        r = n(63)(!1),
        s = n(47)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = o(t),
            c = 0,
            l = [];
        for (n in a) n != s && i(a, n) && l.push(n);
        for (; e.length > c;) i(a, n = e[c++]) && (~r(l, n) || l.push(n));
        return l
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    var o = n(60),
        r = i(o),
        s = {
            wechatIndex: {
                url: "/register/index.html#!/"
            },
            selectHospital: {
                url: "/register/index.html"
            },
            registerStrategy: {
                url: "/register/registerStrategy.html"
            },
            hosRaiders: {
                url: "/register/hosRaiders.html"
            },
            registerResource: {
                url: "/register/registerResource.html"
            },
            registerSuccess: {
                url: "/register/registerSuccess.html"
            },
            selectCard: {
                url: "/register/selectCard.html"
            },
            newSelectCard: {
                url: "/register/newSelectCard.html"
            },
            cardRecord: {
                url: "/register/cardRecord.html"
            },
            medicalCardPay: {
                url: "/register/medicalCardPay.html"
            },
            recharge: {
                url: "/recharge/index.html"
            },
            rechargeSuccess: {
                url: "/recharge/success.html"
            },
            rechargeNotes: {
                url: "/recharge/notes.html"
            },
            rechargeDetail: {
                url: "/recharge/detail.html"
            },
            userLogin: {
                url: "/account/userLogin.html"
            },
            forgetPassword: {
                url: "/account/forgetPassword.html"
            },
            resetPassword: {
                url: "/account/resetPassword.html"
            },
            myAccount: {
                url: "/account/myAccount.html"
            },
            accountManage: {
                url: "/account/accountManage.html"
            },
            cardDetail: {
                url: "/account/cardDetail.html"
            },
            cardInfo: {
                url: "/account/cardInfo.html"
            },
            transRecord: {
                url: "/account/transRecord.html"
            },
            modUsername: {
                url: "/account/modUsername.html"
            },
            changeTel: {
                url: "/account/changeTel.html"
            },
            cellPhone: {
                url: "/account/cellPhone.html"
            },
            modPassword: {
                url: "/account/modPassword.html"
            },
            bindNewCard: {
                url: "/account/bindNewCard.html"
            },
            bindCard: {
                url: "/account/bindCard.html"
            },
            tempCard: {
                url: "/account/tempCard.html"
            },
            perfectInfo: {
                url: "/account/perfectInfo.html"
            },
            serviceAgreement: {
                url: "/account/serviceAgreement.html"
            },
            helpCenter: {
                url: "/helpCenter/helpCenter.html"
            },
            appealSelfService: {
                url: "/appeal/selfService.html"
            },
            appealCardConfirm: {
                url: "/appeal/cardConfirm.html"
            },
            appealOrderList: {
                url: "/appeal/orderList.html"
            },
            appealDetail: {
                url: "/appeal/detail.html"
            },
            appealRecords: {
                url: "/appeal/records.html"
            },
            submitAppeal: {
                url: "/appeal/submit.html"
            },
            submitAppealSuccess: {
                url: "/appeal/success.html"
            },
            unpaidList: {
                url: "/register/unpaidList.html"
            },
            unpaidDetail: {
                url: "/register/unpaidDetail.html"
            },
            unpaidSuccess: {
                url: "/register/unpaidPaySuccess.html"
            },
            paidList: {
                url: "/register/paidList.html"
            },
            paidDetail: {
                url: "/register/paidDetail.html"
            }
        },
        a = "/wechat";
    t.exports = {
        "goto": function(t) {
            window.location.href = t
        },
        getUrl: function(t, e) {
            var n = "";
            if (e && 0 !== (0, r["default"])(e).length) {
                var i = !1;
                for (var o in e) i && (n += "&"), n += o + "=" + encodeURIComponent(e[o]), i = !0
            }
            var c = a + s[t].url;
            return n && (c += "?" + n), c
        },
        getParams: function(t) {
            var e = {},
                n = t || window.location.href,
                i = n.split("?");
            return i.length > 1 && i[1].split("&").map(function(t) {
                var n = t.split("=");
                e[n[0]] = decodeURIComponent(n[1])
            }), e
        }
    }
}, function(t, e, n) {
    var i = n(13),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(i(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    t.exports = n(69)
}, function(t, e, n) {
    t.exports = {
        "default": n(66),
        __esModule: !0
    }
}, function(t, e, n) {
    var i = n(43);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    function i(t) {
        return s(t) ? o(t) : r(t)
    }
    var o = n(96),
        r = n(123),
        s = n(10);
    t.exports = i
}, function(t, e, n) {
    var i = n(12),
        o = n(58),
        r = n(64);
    t.exports = function(t) {
        return function(e, n, s) {
            var a, c = i(e),
                l = o(c.length),
                u = r(s, l);
            if (t && n != n) {
                for (; l > u;)
                    if (a = c[u++], a != a) return !0
            } else
                for (; l > u; u++)
                    if ((t || u in c) && c[u] === n) return t || u || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    var i = n(13),
        o = Math.max,
        r = Math.min;
    t.exports = function(t, e) {
        return t = i(t), t < 0 ? o(t + e, 0) : r(t, e)
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        var e = a.get("monitorCache");
        e || (e = []), e.push(t), e.length >= l && (s({
            method: "post",
            url: u,
            data: e
        }), e = []), a.set("monitorCache", e)
    }

    function o(t, e, n, o) {
        t && i({
            app: c,
            name: t,
            alias: e || "",
            metricType: "TIMER",
            host: "__wechat",
            tags: {},
            val: n || 1
        })
    }

    function r(t, e, n) {
        t && i({
            method: "post",
            url: u,
            data: {
                app: c,
                name: t,
                alias: e || "",
                metricType: "COUNTER_DELTA",
                host: "__wechat",
                tags: {},
                val: 1
            }
        })
    }
    var s = n(59),
        a = n(16),
        c = "fe_wechat",
        l = 5,
        u = "/proxy/receiveList";
    t.exports = {
        timer: o,
        count: r
    }
}, function(t, e, n) {
    n(67), t.exports = n(1).Object.keys
}, function(t, e, n) {
    var i = n(54),
        o = n(41);
    n(68)("keys", function() {
        return function(t) {
            return o(i(t))
        }
    })
}, function(t, e, n) {
    var i = n(40),
        o = n(1),
        r = n(5);
    t.exports = function(t, e) {
        var n = (o.Object || {})[t] || Object[t],
            s = {};
        s[t] = e(n), i(i.S + i.F * r(function() {
            n(1)
        }), "Object", s)
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        var e = new s(t),
            n = r(s.prototype.request, e);
        return o.extend(n, s.prototype, e), o.extend(n, e), n
    }
    var o = n(0),
        r = n(17),
        s = n(70),
        a = n(7),
        c = i(a);
    c.Axios = s, c.create = function(t) {
        return i(o.merge(a, t))
    }, c.Cancel = n(21), c.CancelToken = n(85), c.isCancel = n(20), c.all = function(t) {
        return Promise.all(t)
    }, c.spread = n(86), t.exports = c, t.exports["default"] = c
}, function(t, e, n) {
    "use strict";

    function i(t) {
        this.defaults = t, this.interceptors = {
            request: new s,
            response: new s
        }
    }
    var o = n(7),
        r = n(0),
        s = n(80),
        a = n(81),
        c = n(83),
        l = n(84);
    i.prototype.request = function(t) {
        "string" == typeof t && (t = r.merge({
            url: arguments[0]
        }, arguments[1])), t = r.merge(o, this.defaults, {
            method: "get"
        }, t), t.baseURL && !c(t.url) && (t.url = l(t.baseURL, t.url));
        var e = [a, void 0],
            n = Promise.resolve(t);
        for (this.interceptors.request.forEach(function(t) {
            e.unshift(t.fulfilled, t.rejected)
        }), this.interceptors.response.forEach(function(t) {
            e.push(t.fulfilled, t.rejected)
        }); e.length;) n = n.then(e.shift(), e.shift());
        return n
    }, r.forEach(["delete", "get", "head"], function(t) {
        i.prototype[t] = function(e, n) {
            return this.request(r.merge(n || {}, {
                method: t,
                url: e
            }))
        }
    }), r.forEach(["post", "put", "patch"], function(t) {
        i.prototype[t] = function(e, n, i) {
            return this.request(r.merge(i || {}, {
                method: t,
                url: e,
                data: n
            }))
        }
    }), t.exports = i
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function r(t) {
        if (h === clearTimeout) return clearTimeout(t);
        if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }

    function s() {
        m && f && (m = !1, f.length ? d = f.concat(d) : v = -1, d.length && a())
    }

    function a() {
        if (!m) {
            var t = o(s);
            m = !0;
            for (var e = d.length; e;) {
                for (f = d, d = []; ++v < e;) f && f[v].run();
                v = -1, e = d.length
            }
            f = null, m = !1, r(t)
        }
    }

    function c(t, e) {
        this.fun = t, this.array = e
    }

    function l() {}
    var u, h, p = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            h = i
        }
    }();
    var f, d = [],
        m = !1,
        v = -1;
    p.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new c(t, e)), 1 !== d.length || m || o(a)
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, p.listeners = function(t) {
        return []
    }, p.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function() {
        return "/"
    }, p.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    t.exports = function(t, e) {
        i.forEach(t, function(n, i) {
            i !== e && i.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[i])
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(19);
    t.exports = function(t, e, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? e(i("Request failed with status code " + n.status, n.config, null, n)) : t(n)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, i) {
        return t.config = e, n && (t.code = n), t.response = i, t
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var o = n(0);
    t.exports = function(t, e, n) {
        if (!e) return t;
        var r;
        if (n) r = n(e);
        else if (o.isURLSearchParams(e)) r = e.toString();
        else {
            var s = [];
            o.forEach(e, function(t, e) {
                null !== t && "undefined" != typeof t && (o.isArray(t) && (e += "[]"), o.isArray(t) || (t = [t]), o.forEach(t, function(t) {
                    o.isDate(t) ? t = t.toISOString() : o.isObject(t) && (t = JSON.stringify(t)), s.push(i(e) + "=" + i(t))
                }))
            }), r = s.join("&")
        }
        return r && (t += (t.indexOf("?") === -1 ? "?" : "&") + r), t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    t.exports = function(t) {
        var e, n, o, r = {};
        return t ? (i.forEach(t.split("\n"), function(t) {
            o = t.indexOf(":"), e = i.trim(t.substr(0, o)).toLowerCase(), n = i.trim(t.substr(o + 1)), e && (r[e] = r[e] ? r[e] + ", " + n : n)
        }), r) : r
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    t.exports = i.isStandardBrowserEnv() ? function() {
        function t(t) {
            var e = t;
            return n && (o.setAttribute("href", e), e = o.href), o.setAttribute("href", e), {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
            }
        }
        var e, n = /(msie|trident)/i.test(navigator.userAgent),
            o = document.createElement("a");
        return e = t(window.location.href),
            function(n) {
                var o = i.isString(n) ? t(n) : n;
                return o.protocol === e.protocol && o.host === e.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }()
}, function(t, e, n) {
    "use strict";

    function i() {
        this.message = "String contains an invalid character"
    }

    function o(t) {
        for (var e, n, o = String(t), s = "", a = 0, c = r; o.charAt(0 | a) || (c = "=", a % 1); s += c.charAt(63 & e >> 8 - a % 1 * 8)) {
            if (n = o.charCodeAt(a += .75), n > 255) throw new i;
            e = e << 8 | n
        }
        return s
    }
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    i.prototype = new Error, i.prototype.code = 5, i.prototype.name = "InvalidCharacterError", t.exports = o
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    t.exports = i.isStandardBrowserEnv() ? function() {
        return {
            write: function(t, e, n, o, r, s) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(e)), i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), i.isString(o) && a.push("path=" + o), i.isString(r) && a.push("domain=" + r), s === !0 && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove: function(t) {
                this.write(t, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }()
}, function(t, e, n) {
    "use strict";

    function i() {
        this.handlers = []
    }
    var o = n(0);
    i.prototype.use = function(t, e) {
        return this.handlers.push({
            fulfilled: t,
            rejected: e
        }), this.handlers.length - 1
    }, i.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }, i.prototype.forEach = function(t) {
        o.forEach(this.handlers, function(e) {
            null !== e && t(e)
        })
    }, t.exports = i
}, function(t, e, n) {
    "use strict";

    function i(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
    }
    var o = n(0),
        r = n(82),
        s = n(20),
        a = n(7);
    t.exports = function(t) {
        i(t), t.headers = t.headers || {}, t.data = r(t.data, t.headers, t.transformRequest), t.headers = o.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
            delete t.headers[e]
        });
        var e = t.adapter || a.adapter;
        return e(t).then(function(e) {
            return i(t), e.data = r(e.data, e.headers, t.transformResponse), e
        }, function(e) {
            return s(e) || (i(t), e && e.response && (e.response.data = r(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    t.exports = function(t, e, n) {
        return i.forEach(n, function(n) {
            t = n(t, e)
        }), t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "")
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if ("function" != typeof t) throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function(t) {
            e = t
        });
        var n = this;
        t(function(t) {
            n.reason || (n.reason = new o(t), e(n.reason))
        })
    }
    var o = n(21);
    i.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, i.source = function() {
        var t, e = new i(function(e) {
            t = e
        });
        return {
            token: e,
            cancel: t
        }
    }, t.exports = i
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return function(e) {
            return t.apply(null, e)
        }
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function o() {
        var t = l["default"].get("ucp") || "",
            e = l["default"].get("attention") || "",
            n = l["default"].get("lgd") || "";
        return t || (t = a["default"].getCookie("_ucp") || "", e = a["default"].getCookie("_attention") || "", n = a["default"].getCookie("_lgd") || "", l["default"].set("lgd", n), l["default"].set("attention", e), l["default"].set("ucp", t)), {
            ucp: t,
            attention: e,
            lgd: n
        }
    }

    function r() {
        a["default"].delCookie("_ucp"), a["default"].delCookie("_attention"), a["default"].delCookie("_lgd"), l["default"].remove(["ucp", "attention", "lgd"])
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getAuthInfo = o, e.resetAuthInfo = r;
    var s = n(88),
        a = i(s),
        c = n(16),
        l = i(c)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e["default"] = {
        getCookie: function(t) {
            var e = document.cookie.match("(^|;) ?" + t + "=([^;]*)(;|$)");
            return e ? e[2] : null
        },
        setCookie: function(t, e, n) {
            var i = new Date;
            i.setTime(i.getTime() + 864e5 * n), document.cookie = t + "=" + e + ";path=/;expires=" + i.toGMTString()
        },
        delCookie: function(t) {
            this.setCookie(t, "", -1)
        }
    }
}, function(t, e, n) {
    var i = n(1),
        o = i.JSON || (i.JSON = {
            stringify: JSON.stringify
        });
    t.exports = function(t) {
        return o.stringify.apply(o, arguments)
    }
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var i = n(39),
        o = n(27),
        r = n(125),
        s = {
            tips: {
                title: "",
                titleClass: "hor-center",
                content: "",
                contentClass: "hor-center",
                show: !0,
                buttonName: "确定"
            },
            rechargeTips: {
                title: "",
                titleClass: "hor-center",
                content: "",
                contentClass: "hor-center",
                show: !0,
                button1Name: "取消",
                button2Name: "确定"
            },
            confirm: {
                title: "",
                titleClass: "hor-center",
                content: "",
                contentClass: "hor-center",
                show: !0,
                button1Name: "取消",
                button2Name: "确定"
            },
            payTips: {
                title: "",
                titleClass: "hor-center",
                content: "",
                contentClass: "hor-center",
                show: !0,
                button1Name: "取消",
                button2Name: "确定"
            },
            selector: {
                defaultStyle: {
                    paddingTop: 0
                },
                title: "",
                titleClass: "hor-center",
                content: "",
                contentClass: "hor-center",
                show: !0,
                options: ""
            },
            input: {
                inputType: "text",
                title: "",
                titleClass: "hor-center",
                content: "",
                contentClass: "hor-center",
                show: !0,
                inputVal: "",
                button1Name: "取消",
                button2Name: "确定"
            },
            loading: {
                content: "",
                show: !0
            },
            custom: {
                show: !0
            }
        },
        a = Vue.extend({
            template: r,
            data: function() {
                return {
                    opts: {}
                }
            },
            props: {
                alert: {
                    twoway: !0
                }
            },
            watch: {
                alert: function(t) {
                    this.opts = i({}, s[t.type], t), "payTips" === t.type && this.$nextTick(function() {
                        this.iscroll = new o("#pay-tips-scroll", {
                            preventDefault: !1
                        })
                    }), this.iscroll && this.iscroll.refresh()
                }
            },
            methods: {
                cancelCallback: function() {
                    this.opts.cancelCallback && this.opts.cancelCallback(), this.opts.show = !1
                },
                confirmCallback: function() {
                    this.opts.confirmCallback && this.opts.confirmCallback(), this.opts.show = !1
                }
            }
        });
    Vue.component("alert", a)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        this.state = rt, this.value = void 0, this.deferred = [];
        var e = this;
        try {
            t(function(t) {
                e.resolve(t)
            }, function(t) {
                e.reject(t)
            })
        } catch (n) {
            e.reject(n)
        }
    }

    function o(t, e) {
        t instanceof at ? this.promise = t : this.promise = new at(t.bind(e)), this.context = e
    }

    function r(t) {
        ut = t.util, lt = t.config.debug || !t.config.silent
    }

    function s(t) {
        "undefined" != typeof console && lt && console.warn("[VueResource warn]: " + t)
    }

    function a(t) {
        "undefined" != typeof console && console.error(t)
    }

    function c(t, e) {
        return ut.nextTick(t, e)
    }

    function l(t) {
        return t.replace(/^\s*|\s*$/g, "")
    }

    function u(t) {
        return t ? t.toLowerCase() : ""
    }

    function h(t) {
        return "string" == typeof t
    }

    function p(t) {
        return "function" == typeof t
    }

    function f(t) {
        return null !== t && "object" === ("undefined" == typeof t ? "undefined" : nt(t))
    }

    function d(t) {
        return f(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function m(t, e, n) {
        var i = o.resolve(t);
        return arguments.length < 2 ? i : i.then(e, n)
    }

    function v(t, e, n) {
        return n = n || {}, p(n) && (n = n.call(e)), b(t.bind({
            $vm: e,
            $options: n
        }), t, {
            $options: n
        })
    }

    function g(t, e) {
        var n, i;
        if ("number" == typeof t.length)
            for (n = 0; n < t.length; n++) e.call(t[n], t[n], n);
        else if (f(t))
            for (i in t) t.hasOwnProperty(i) && e.call(t[i], t[i], i);
        return t
    }

    function y(t) {
        var e = ht.slice.call(arguments, 1);
        return e.forEach(function(e) {
            w(t, e)
        }), t
    }

    function b(t) {
        var e = ht.slice.call(arguments, 1);
        return e.forEach(function(e) {
            w(t, e, !0)
        }), t
    }

    function w(t, e, n) {
        for (var i in e) n && (d(e[i]) || pt(e[i])) ? (d(e[i]) && !d(t[i]) && (t[i] = {}), pt(e[i]) && !pt(t[i]) && (t[i] = []), w(t[i], e[i], n)) : void 0 !== e[i] && (t[i] = e[i])
    }

    function x(t, e) {
        var n = e(t);
        return h(t.root) && !n.match(/^(https?:)?\//) && (n = t.root + "/" + n), n
    }

    function T(t, e) {
        var n = Object.keys(R.options.params),
            i = {},
            o = e(t);
        return g(t.params, function(t, e) {
            n.indexOf(e) === -1 && (i[e] = t)
        }), i = R.params(i), i && (o += (o.indexOf("?") == -1 ? "?" : "&") + i), o
    }

    function S(t, e) {
        var n = [],
            i = e(t);
        return i = i.replace(/(\/?):([a-z]\w*)/gi, function(e, i, o) {
            return s("The `:" + o + "` parameter syntax has been deprecated. Use the `{" + o + "}` syntax instead."), t.params[o] ? (n.push(o), i + E(t.params[o])) : ""
        }), n.forEach(function(e) {
            delete t.params[e]
        }), i
    }

    function E(t) {
        return P(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function P(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
    }

    function C(t, e, n) {
        var i = k(t),
            o = i.expand(e);
        return n && n.push.apply(n, i.vars), o
    }

    function k(t) {
        var e = ["+", "#", ".", "/", ";", "?", "&"],
            n = [];
        return {
            vars: n,
            expand: function(i) {
                return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(t, o, r) {
                    if (o) {
                        var s = null,
                            a = [];
                        if (e.indexOf(o.charAt(0)) !== -1 && (s = o.charAt(0), o = o.substr(1)), o.split(/,/g).forEach(function(t) {
                                var e = /([^:\*]*)(?::(\d+)|(\*))?/.exec(t);
                                a.push.apply(a, _(i, s, e[1], e[2] || e[3])), n.push(e[1])
                            }), s && "+" !== s) {
                            var c = ",";
                            return "?" === s ? c = "&" : "#" !== s && (c = s), (0 !== a.length ? s : "") + a.join(c)
                        }
                        return a.join(",")
                    }
                    return X(r)
                })
            }
        }
    }

    function _(t, e, n, i) {
        var o = t[n],
            r = [];
        if (j(o) && "" !== o)
            if ("string" == typeof o || "number" == typeof o || "boolean" == typeof o) o = o.toString(),
            i && "*" !== i && (o = o.substring(0, parseInt(i, 10))), r.push(O(e, o, A(e) ? n : null));
            else if ("*" === i) Array.isArray(o) ? o.filter(j).forEach(function(t) {
                r.push(O(e, t, A(e) ? n : null))
            }) : Object.keys(o).forEach(function(t) {
                j(o[t]) && r.push(O(e, o[t], t))
            });
            else {
                var s = [];
                Array.isArray(o) ? o.filter(j).forEach(function(t) {
                    s.push(O(e, t))
                }) : Object.keys(o).forEach(function(t) {
                    j(o[t]) && (s.push(encodeURIComponent(t)), s.push(O(e, o[t].toString())))
                }), A(e) ? r.push(encodeURIComponent(n) + "=" + s.join(",")) : 0 !== s.length && r.push(s.join(","))
            } else ";" === e ? r.push(encodeURIComponent(n)) : "" !== o || "&" !== e && "?" !== e ? "" === o && r.push("") : r.push(encodeURIComponent(n) + "=");
        return r
    }

    function j(t) {
        return void 0 !== t && null !== t
    }

    function A(t) {
        return ";" === t || "&" === t || "?" === t
    }

    function O(t, e, n) {
        return e = "+" === t || "#" === t ? X(e) : encodeURIComponent(e), n ? encodeURIComponent(n) + "=" + e : e
    }

    function X(t) {
        return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) {
            return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t)), t
        }).join("")
    }

    function D(t) {
        var e = [],
            n = C(t.url, t.params, e);
        return e.forEach(function(e) {
            delete t.params[e]
        }), n
    }

    function R(t, e) {
        var n, i = this || {},
            o = t;
        return h(t) && (o = {
            url: t,
            params: e
        }), o = b({}, R.options, i.$options, o), R.transforms.forEach(function(t) {
            n = Y(t, n, i.$vm)
        }), n(o)
    }

    function Y(t, e, n) {
        return function(i) {
            return t.call(n, i, e)
        }
    }

    function N(t, e, n) {
        var i, o = pt(e),
            r = d(e);
        g(e, function(e, s) {
            i = f(e) || pt(e), n && (s = n + "[" + (r || i ? s : "") + "]"), !n && o ? t.add(e.name, e.value) : i ? N(t, e, s) : t.add(s, e)
        })
    }

    function M(t) {
        return new o(function(e) {
            var n, i = new XDomainRequest,
                o = {
                    request: t
                };
            t.cancel = function() {
                i.abort()
            }, i.open(t.method, R(t), !0), n = function(t) {
                o.data = i.responseText, o.status = i.status, o.statusText = i.statusText || "", e(o)
            }, i.timeout = 0, i.onload = n, i.onabort = n, i.onerror = n, i.ontimeout = function() {}, i.onprogress = function() {}, i.send(t.data)
        })
    }

    function I(t, e) {
        null === t.crossOrigin && (t.crossOrigin = L(t)), t.crossOrigin && (vt || (t.client = M), t.emulateHTTP = !1), e()
    }

    function L(t) {
        var e = R.parse(R(t));
        return e.protocol !== mt.protocol || e.host !== mt.host
    }

    function H(t, e) {
        t.emulateJSON && d(t.data) && (t.headers["Content-Type"] = "application/x-www-form-urlencoded", t.data = R.params(t.data)), f(t.data) && /FormData/i.test(t.data.toString()) && delete t.headers["Content-Type"], d(t.data) && (t.data = JSON.stringify(t.data)), e(function(t) {
            try {
                t.data = JSON.parse(t.data)
            } catch (e) {}
        })
    }

    function B(t) {
        return new o(function(e) {
            var n, i, o = "_jsonp" + Math.random().toString(36).substr(2),
                r = {
                    request: t,
                    data: null
                };
            t.params[t.jsonp] = o, t.cancel = function() {
                n({
                    type: "cancel"
                })
            }, i = document.createElement("script"), i.src = R(t), i.type = "text/javascript", i.async = !0, window[o] = function(t) {
                r.data = t
            }, n = function(t) {
                "load" === t.type && null !== r.data ? r.status = 200 : "error" === t.type ? r.status = 404 : r.status = 0, e(r), delete window[o], document.body.removeChild(i)
            }, i.onload = n, i.onerror = n, document.body.appendChild(i)
        })
    }

    function U(t, e) {
        "JSONP" == t.method && (t.client = B), e()
    }

    function z(t, e) {
        p(t.beforeSend) && t.beforeSend.call(this, t), e()
    }

    function F(t, e) {
        t.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(t.method) && (t.headers["X-HTTP-Method-Override"] = t.method, t.method = "POST"), e()
    }

    function W(t, e) {
        t.method = t.method.toUpperCase(), t.headers = y({}, Z.headers.common, t.crossOrigin ? {} : Z.headers.custom, Z.headers[t.method.toLowerCase()], t.headers), d(t.data) && /^(GET|JSONP)$/i.test(t.method) && (y(t.params, t.data), delete t.data), e()
    }

    function $(t, e) {
        var n;
        t.timeout && (n = setTimeout(function() {
            t.cancel()
        }, t.timeout)), e(function(t) {
            clearTimeout(n)
        })
    }

    function V(t) {
        return new o(function(e) {
            var n, i = new XMLHttpRequest,
                o = {
                    request: t
                };
            t.cancel = function() {
                i.abort()
            }, i.open(t.method, R(t), !0), n = function(t) {
                o.data = "response" in i ? i.response : i.responseText, o.status = 1223 === i.status ? 204 : i.status, o.statusText = l(i.statusText || ""), o.allHeaders = i.getAllResponseHeaders(), e(o)
            }, i.timeout = 0, i.onload = n, i.onabort = n, i.onerror = n, i.ontimeout = function() {}, i.onprogress = function() {}, d(t.xhr) && y(i, t.xhr), d(t.upload) && y(i.upload, t.upload), g(t.headers || {}, function(t, e) {
                i.setRequestHeader(e, t)
            }), i.send(t.data)
        })
    }

    function q(t) {
        function e(e) {
            return new o(function(o) {
                function r() {
                    n.pop().call(t, e, s)
                }

                function s(e) {
                    m(e, function(e) {
                        if (p(e)) i.unshift(e);
                        else if (f(e)) return G(e), i.forEach(function(n) {
                            n.call(t, e)
                        }), void o(e);
                        r()
                    })
                }
                r()
            }, t)
        }
        var n = [K],
            i = [];
        return f(t) || (t = null), e.use = function(t) {
            n.push(t)
        }, e
    }

    function K(t, e) {
        var n = t.client || V;
        e(n(t))
    }

    function G(t) {
        var e = t.headers || t.allHeaders;
        return h(e) && (e = J(e)), f(e) && (t.headers = function(t) {
            return t ? e[u(t)] : e
        }), t.ok = t.status >= 200 && t.status < 300, t
    }

    function J(t) {
        var e, n, i, o = {};
        return g(t.split("\n"), function(t) {
            i = t.indexOf(":"), n = l(u(t.slice(0, i))), e = l(t.slice(i + 1)), o[n] ? pt(o[n]) ? o[n].push(e) : o[n] = [o[n], e] : o[n] = e
        }), o
    }

    function Z(t, e) {
        var n, i, r = this || {},
            s = q(r.$vm);
        return Z.interceptors.forEach(function(t) {
            s.use(t)
        }), e = f(t) ? t : y({
            url: t
        }, e), n = b({}, Z.options, r.$options, e), i = s(n).then(function(t) {
            return t.ok ? t : o.reject(t)
        }, function(t) {
            return t instanceof Error && a(t), o.reject(t)
        }), n.success && i.success(n.success), n.error && i.error(n.error), i
    }

    function Q(t, e, n, i) {
        var o = this || {},
            r = {};
        return n = y({}, Q.actions, n), g(n, function(n, s) {
            n = b({
                url: t,
                params: e || {}
            }, i, n), r[s] = function() {
                return (o.$http || Z)(tt(n, arguments))
            }
        }), r
    }

    function tt(t, e) {
        var n, i, o, r = y({}, t),
            s = {};
        switch (e.length) {
            case 4:
                o = e[3], i = e[2];
            case 3:
            case 2:
                if (!p(e[1])) {
                    s = e[0], n = e[1], i = e[2];
                    break
                }
                if (p(e[0])) {
                    i = e[0], o = e[1];
                    break
                }
                i = e[1], o = e[2];
            case 1:
                p(e[0]) ? i = e[0] : /^(POST|PUT|PATCH)$/i.test(r.method) ? n = e[0] : s = e[0];
                break;
            case 0:
                break;
            default:
                throw "Expected up to 4 arguments [params, data, success, error], got " + e.length + " arguments"
        }
        return r.data = n, r.params = y({}, r.params, s), i && (r.success = i), o && (r.error = o), r
    }

    function et(t) {
        et.installed || (r(t), t.url = R, t.http = Z, t.resource = Q, t.Promise = o, Object.defineProperties(t.prototype, {
            $url: {
                get: function() {
                    return v(t.url, this, this.$options.url)
                }
            },
            $http: {
                get: function() {
                    return v(t.http, this, this.$options.http)
                }
            },
            $resource: {
                get: function() {
                    return t.resource.bind(this)
                }
            },
            $promise: {
                get: function() {
                    var e = this;
                    return function(n) {
                        return new t.Promise(n, e)
                    }
                }
            }
        }))
    }
    var nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        },
        it = 0,
        ot = 1,
        rt = 2;
    i.reject = function(t) {
        return new i(function(e, n) {
            n(t)
        })
    }, i.resolve = function(t) {
        return new i(function(e, n) {
            e(t)
        })
    }, i.all = function(t) {
        return new i(function(e, n) {
            function o(n) {
                return function(i) {
                    s[n] = i, r += 1, r === t.length && e(s)
                }
            }
            var r = 0,
                s = [];
            0 === t.length && e(s);
            for (var a = 0; a < t.length; a += 1) i.resolve(t[a]).then(o(a), n)
        })
    }, i.race = function(t) {
        return new i(function(e, n) {
            for (var o = 0; o < t.length; o += 1) i.resolve(t[o]).then(e, n)
        })
    };
    var st = i.prototype;
    st.resolve = function(t) {
        var e = this;
        if (e.state === rt) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try {
                var i = t && t.then;
                if (null !== t && "object" === ("undefined" == typeof t ? "undefined" : nt(t)) && "function" == typeof i) return void i.call(t, function(t) {
                    n || e.resolve(t), n = !0
                }, function(t) {
                    n || e.reject(t), n = !0
                })
            } catch (o) {
                return void(n || e.reject(o))
            }
            e.state = it, e.value = t, e.notify()
        }
    }, st.reject = function(t) {
        var e = this;
        if (e.state === rt) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            e.state = ot, e.value = t, e.notify()
        }
    }, st.notify = function() {
        var t = this;
        c(function() {
            if (t.state !== rt)
                for (; t.deferred.length;) {
                    var e = t.deferred.shift(),
                        n = e[0],
                        i = e[1],
                        o = e[2],
                        r = e[3];
                    try {
                        t.state === it ? o("function" == typeof n ? n.call(void 0, t.value) : t.value) : t.state === ot && ("function" == typeof i ? o(i.call(void 0, t.value)) : r(t.value))
                    } catch (s) {
                        r(s)
                    }
                }
        })
    }, st.then = function(t, e) {
        var n = this;
        return new i(function(i, o) {
            n.deferred.push([t, e, i, o]), n.notify()
        })
    }, st["catch"] = function(t) {
        return this.then(void 0, t)
    };
    var at = window.Promise || i;
    o.all = function(t, e) {
        return new o(at.all(t), e)
    }, o.resolve = function(t, e) {
        return new o(at.resolve(t), e)
    }, o.reject = function(t, e) {
        return new o(at.reject(t), e)
    }, o.race = function(t, e) {
        return new o(at.race(t), e)
    };
    var ct = o.prototype;
    ct.bind = function(t) {
        return this.context = t, this
    }, ct.then = function(t, e) {
        return t && t.bind && this.context && (t = t.bind(this.context)), e && e.bind && this.context && (e = e.bind(this.context)), this.promise = this.promise.then(t, e), this
    }, ct["catch"] = function(t) {
        return t && t.bind && this.context && (t = t.bind(this.context)), this.promise = this.promise["catch"](t), this
    }, ct["finally"] = function(t) {
        return this.then(function(e) {
            return t.call(this), e
        }, function(e) {
            return t.call(this), at.reject(e)
        })
    }, ct.success = function(t) {
        return s("The `success` method has been deprecated. Use the `then` method instead."), this.then(function(e) {
            return t.call(this, e.data, e.status, e) || e
        })
    }, ct.error = function(t) {
        return s("The `error` method has been deprecated. Use the `catch` method instead."), this["catch"](function(e) {
            return t.call(this, e.data, e.status, e) || e
        })
    }, ct.always = function(t) {
        s("The `always` method has been deprecated. Use the `finally` method instead.");
        var e = function(e) {
            return t.call(this, e.data, e.status, e) || e
        };
        return this.then(e, e)
    };
    var lt = !1,
        ut = {},
        ht = [],
        pt = Array.isArray,
        ft = document.documentMode,
        dt = document.createElement("a");
    R.options = {
        url: "",
        root: null,
        params: {}
    }, R.transforms = [D, S, T, x], R.params = function(t) {
        var e = [],
            n = encodeURIComponent;
        return e.add = function(t, e) {
            p(e) && (e = e()), null === e && (e = ""), this.push(n(t) + "=" + n(e))
        }, N(e, t), e.join("&").replace(/%20/g, "+")
    }, R.parse = function(t) {
        return ft && (dt.href = t, t = dt.href), dt.href = t, {
            href: dt.href,
            protocol: dt.protocol ? dt.protocol.replace(/:$/, "") : "",
            port: dt.port,
            host: dt.host,
            hostname: dt.hostname,
            pathname: "/" === dt.pathname.charAt(0) ? dt.pathname : "/" + dt.pathname,
            search: dt.search ? dt.search.replace(/^\?/, "") : "",
            hash: dt.hash ? dt.hash.replace(/^#/, "") : ""
        }
    };
    var mt = R.parse(location.href),
        vt = "withCredentials" in new XMLHttpRequest,
        gt = {
            "Content-Type": "application/json"
        };
    Z.options = {
        method: "get",
        data: "",
        params: {},
        headers: {},
        xhr: null,
        upload: null,
        jsonp: "callback",
        beforeSend: null,
        crossOrigin: null,
        emulateHTTP: !1,
        emulateJSON: !1,
        timeout: 0
    }, Z.headers = {
        put: gt,
        post: gt,
        patch: gt,
        "delete": gt,
        common: {
            Accept: "application/json, text/plain, */*"
        },
        custom: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }, Z.interceptors = [z, $, U, F, H, W, I], ["get", "put", "post", "patch", "delete", "jsonp"].forEach(function(t) {
        Z[t] = function(e, n, i, o) {
            return p(n) && (o = i, i = n, n = void 0), f(i) && (o = i, i = void 0), this(e, y({
                method: t,
                data: n,
                success: i
            }, o))
        }
    }), Q.actions = {
        get: {
            method: "GET"
        },
        save: {
            method: "POST"
        },
        query: {
            method: "GET"
        },
        update: {
            method: "PUT"
        },
        remove: {
            method: "DELETE"
        },
        "delete": {
            method: "DELETE"
        }
    }, "undefined" != typeof window && window.Vue && window.Vue.use(et), t.exports = et
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    var o = n(15),
        r = i(o),
        s = n(87),
        a = "/mobile/wx/conf/log",
        c = n(65);
    Vue && Vue.http && Vue.http.interceptors.push(function(t, e) {
        var n = +new Date;
        "get" == t.method && (t.data || (t.data = {}), t.data._ = n);
        var i = (0, s.getAuthInfo)(),
            o = i.ucp,
            l = i.attention,
            u = i.lgd;
        t.headers.ucp = o, t.headers.attention = l, t.headers.lgd = u, e(function(e) {
            try {
                if (t._mTj) return e;
                if (t.url == a) return e;
                var i = +new Date,
                    o = i - n;
                if (e.ok ? c.timer("API_TIME", "接口时间", o, t.url) : (0 == e.status ? c.timer("API_TIMEOUT", "接口超时", o, t.url) : c.timer("API_FAIL", "接口失败", o, t.url), this.loading = !1, this.alert = {
                        type: "tips",
                        title: e.status || "",
                        content: e.statusText || "网络超时，请稍候再试"
                    }), e.data) {
                    var l = e.data.resCode;
                    if (101 == l) {
                        (0, s.resetAuthInfo)();
                        var u = encodeURIComponent(location.pathname.slice(1) + location.search + location.hash);
                        location.href = "/mobile/wx/accredit/go?old=" + u + "&new=" + u
                    } else if (102 == l) {
                        var h = encodeURIComponent(location.href);
                        Vue.http.get(a, {
                            "goto": h,
                            res: (0, r["default"])(e.data)
                        }), location.href = "/wechat/account/userLogin.html?ref=" + h
                    } else 3e3 == l ? this.alert = {
                        type: "confirm",
                        content: e.data.msg,
                        confirmCallback: function() {
                            location.href = "/wechat/helpCenter/helpCenter.html#!/probDetail?code=Reg0010&fCode=register"
                        },
                        button2Name: "查看原因"
                    } : 0 === l || t._noNeedAlert || (this.alert = {
                        type: "tips",
                        content: e.data.msg
                    })
                }
            } catch (p) {
                Vue.http.get(a, {
                    type: "FE_INTERCEPTOR_ERROR",
                    api: t.url,
                    msg: p && p.name + " || " + p.message || "未知错误",
                    res: (0, r["default"])(e.data)
                })
            }
            return e
        })
    })
}, function(t, e) {
    function n(t) {
        if (null != t) {
            try {
                return o.call(t)
            } catch (e) {}
            try {
                return t + ""
            } catch (e) {}
        }
        return ""
    }
    var i = Function.prototype,
        o = i.toString;
    t.exports = n
}, function(t, e, n) {
    function i(t) {
        return o(function(e, n) {
            var i = -1,
                o = n.length,
                s = o > 1 ? n[o - 1] : void 0,
                a = o > 2 ? n[2] : void 0;
            for (s = t.length > 3 && "function" == typeof s ? (o--, s) : void 0, a && r(n[0], n[1], a) && (s = o < 3 ? void 0 : s, o = 1), e = Object(e); ++i < o;) {
                var c = n[i];
                c && t(e, c, i, s)
            }
            return e
        })
    }
    var o = n(107),
        r = n(114);
    t.exports = i
}, function(t, e, n) {
    function i(t, e) {
        var n = s(t),
            i = !n && r(t),
            u = !n && !i && a(t),
            p = !n && !i && !u && l(t),
            f = n || i || u || p,
            d = f ? o(t.length, String) : [],
            m = d.length;
        for (var v in t) !e && !h.call(t, v) || f && ("length" == v || u && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || c(v, m)) || d.push(v);
        return d
    }
    var o = n(115),
        r = n(116),
        s = n(90),
        a = n(97),
        c = n(35),
        l = n(119),
        u = Object.prototype,
        h = u.hasOwnProperty;
    t.exports = i
}, function(t, e, n) {
    (function(t) {
        var i = n(6),
            o = n(118),
            r = "object" == typeof e && e && !e.nodeType && e,
            s = r && "object" == typeof t && t && !t.nodeType && t,
            a = s && s.exports === r,
            c = a ? i.Buffer : void 0,
            l = c ? c.isBuffer : void 0,
            u = l || o;
        t.exports = u
    }).call(e, n(26)(t))
}, function(t, e) {
    function n(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
    t.exports = n
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (i) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var i = n(92);
    Vue.use(i), n(93), Vue.http.options.timeout = 2e4
}, function(t, e, n) {
    function i(t) {
        if (!s(t) || r(t)) return !1;
        var e = o(t) ? d : l;
        return e.test(a(t))
    }
    var o = n(31),
        r = n(104),
        s = n(8),
        a = n(94),
        c = /[\\^$.*+?()[\]{}|]/g,
        l = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        h = Object.prototype,
        p = u.toString,
        f = h.hasOwnProperty,
        d = RegExp("^" + p.call(f).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = i
}, function(t, e, n) {
    function i(t) {
        var e = s.call(t, c),
            n = t[c];
        try {
            t[c] = void 0;
            var i = !0
        } catch (o) {}
        var r = a.call(t);
        return i && (e ? t[c] = n : delete t[c]), r
    }
    var o = n(24),
        r = Object.prototype,
        s = r.hasOwnProperty,
        a = r.toString,
        c = o ? o.toStringTag : void 0;
    t.exports = i
}, function(t, e) {
    function n(t) {
        return o.call(t)
    }
    var i = Object.prototype,
        o = i.toString;
    t.exports = n
}, function(t, e, n) {
    function i(t) {
        return !!r && r in t
    }
    var o = n(105),
        r = function() {
            var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
    t.exports = i
}, function(t, e, n) {
    var i = n(6),
        o = i["__core-js_shared__"];
    t.exports = o
}, function(t, e) {
    function n(t, e) {
        return null == t ? void 0 : t[e]
    }
    t.exports = n
}, function(t, e, n) {
    function i(t, e) {
        return s(r(t, e, o), t + "")
    }
    var o = n(33),
        r = n(108),
        s = n(110);
    t.exports = i
}, function(t, e, n) {
    function i(t, e, n) {
        return e = r(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var i = arguments, s = -1, a = r(i.length - e, 0), c = Array(a); ++s < a;) c[s] = i[e + s];
                s = -1;
                for (var l = Array(e + 1); ++s < e;) l[s] = i[s];
                return l[e] = n(c), o(t, this, l)
            }
    }
    var o = n(109),
        r = Math.max;
    t.exports = i
}, function(t, e) {
    function n(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
    t.exports = n
}, function(t, e, n) {
    var i = n(111),
        o = n(113),
        r = o(i);
    t.exports = r
}, function(t, e, n) {
    var i = n(112),
        o = n(30),
        r = n(33),
        s = o ? function(t, e) {
            return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: i(e),
                writable: !0
            })
        } : r;
    t.exports = s
}, function(t, e) {
    function n(t) {
        return function() {
            return t
        }
    }
    t.exports = n
}, function(t, e) {
    function n(t) {
        var e = 0,
            n = 0;
        return function() {
            var s = r(),
                a = o - (s - n);
            if (n = s, a > 0) {
                if (++e >= i) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var i = 800,
        o = 16,
        r = Date.now;
    t.exports = n
}, function(t, e, n) {
    function i(t, e, n) {
        if (!a(n)) return !1;
        var i = typeof e;
        return !!("number" == i ? r(n) && s(e, n.length) : "string" == i && e in n) && o(n[e], t)
    }
    var o = n(25),
        r = n(10),
        s = n(35),
        a = n(8);
    t.exports = i
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
        return i
    }
    t.exports = n
}, function(t, e, n) {
    var i = n(117),
        o = n(11),
        r = Object.prototype,
        s = r.hasOwnProperty,
        a = r.propertyIsEnumerable,
        c = i(function() {
            return arguments
        }()) ? i : function(t) {
            return o(t) && s.call(t, "callee") && !a.call(t, "callee")
        };
    t.exports = c
}, function(t, e, n) {
    function i(t) {
        return r(t) && o(t) == s
    }
    var o = n(9),
        r = n(11),
        s = "[object Arguments]";
    t.exports = i
}, function(t, e) {
    function n() {
        return !1
    }
    t.exports = n
}, function(t, e, n) {
    var i = n(120),
        o = n(121),
        r = n(122),
        s = r && r.isTypedArray,
        a = s ? o(s) : i;
    t.exports = a
}, function(t, e, n) {
    function i(t) {
        return s(t) && r(t.length) && !!O[o(t)]
    }
    var o = n(9),
        r = n(34),
        s = n(11),
        a = "[object Arguments]",
        c = "[object Array]",
        l = "[object Boolean]",
        u = "[object Date]",
        h = "[object Error]",
        p = "[object Function]",
        f = "[object Map]",
        d = "[object Number]",
        m = "[object Object]",
        v = "[object RegExp]",
        g = "[object Set]",
        y = "[object String]",
        b = "[object WeakMap]",
        w = "[object ArrayBuffer]",
        x = "[object DataView]",
        T = "[object Float32Array]",
        S = "[object Float64Array]",
        E = "[object Int8Array]",
        P = "[object Int16Array]",
        C = "[object Int32Array]",
        k = "[object Uint8Array]",
        _ = "[object Uint8ClampedArray]",
        j = "[object Uint16Array]",
        A = "[object Uint32Array]",
        O = {};
    O[T] = O[S] = O[E] = O[P] = O[C] = O[k] = O[_] = O[j] = O[A] = !0, O[a] = O[c] = O[w] = O[l] = O[x] = O[u] = O[h] = O[p] = O[f] = O[d] = O[m] = O[v] = O[g] = O[y] = O[b] = !1, t.exports = i
}, function(t, e) {
    function n(t) {
        return function(e) {
            return t(e)
        }
    }
    t.exports = n
}, function(t, e, n) {
    (function(t) {
        var i = n(32),
            o = "object" == typeof e && e && !e.nodeType && e,
            r = o && "object" == typeof t && t && !t.nodeType && t,
            s = r && r.exports === o,
            a = s && i.process,
            c = function() {
                try {
                    return a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = c
    }).call(e, n(26)(t))
}, function(t, e, n) {
    function i(t) {
        if (!o(t)) return r(t);
        var e = [];
        for (var n in Object(t)) a.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
    var o = n(22),
        r = n(124),
        s = Object.prototype,
        a = s.hasOwnProperty;
    t.exports = i
}, function(t, e, n) {
    var i = n(98),
        o = i(Object.keys, Object);
    t.exports = o
}, function(t, e) {
    var n, i, o, r, s, a, c, l, u;
    s = "<div v-show=\"opts.show && (opts.type == 'tips' || opts.type == 'confirm' || opts.type == 'selector' || opts.type == 'input' || opts.type == 'loading' || opts.type == 'payTips' || opts.type == 'rechargeTips' )\" >\n    <div class=\"yo-mask\">\n        LOADING\n        INPUT\n        TIPS\n        PAYTIPS\n        CONFIRM\n        SELECTOR\n        CUSTOM\n        RECHARGETIPS\n    </div>\n</div>", r = '<div v-if="opts.type == \'loading\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n     <div class="loading_tc">\n        <div class="bm_loadIcon"><span></span><span></span><span></span><span></span><span></span>\n        </div>\n        <p class="bm_loadText">{{opts.content}}</p>\n    </div>\n</div>', o = '<div v-if="opts.type == \'input\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n    <div class="bd {{opts.contentClass}}">{{{ opts.content }}}\n        <div class="yz-con">\n            <div class="yz-con-box">\n                <input type="{{opts.inputType}}" placeholder="请填写登录密码" v-model="opts.inputVal" autofocus="true">\n                <a  @click="opts.inputVal=\'\'" class="tel-del tel-del-yzm" ><i class="ff-icon ff-del" ></i></a>\n            </div>\n            <span>{{opts.tip}}</span>\n        </div>\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.button1Name}}</button>\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="confirmCallback">{{opts.button2Name}}\n        </button>\n    </footer>\n</div>', u = '<div  v-if="opts.type == \'tips\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n    <div class="bd" v-if="opts.type == \'tips\'&&opts.content!=\'\'">\n        <p v-html="opts.content"></p>\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.buttonName}}</button>\n    </footer>\n</div>', c = '<div  v-if="opts.type == \'rechargeTips\'" class="yo-dialog yo-dialog-bm" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n    <div class="bd left-padd" v-if="opts.content!=\'\'">\n        {{{ opts.content }}}\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.button1Name}}</button>\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="confirmCallback">{{opts.button2Name}}</button>\n    </footer>\n</div>', l = '<div v-if="opts.type == \'selector\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n     <footer class="ft" v-for="option in opts.options">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="option.callback">{{option.name}}</button>\n    </footer>\n</div>', n = '<div v-if="opts.type == \'confirm\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n    <div class="bd" v-show="opts.content!=\'\'">\n        <p :style="opts.contentStyle">\n            {{{opts.content}}}\n        </p>\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.button1Name}}</button>\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="confirmCallback">{{opts.button2Name}}</button>\n    </footer>\n</div>', a = '<div v-if="opts.type == \'payTips\'" class="yo-dialog yo-dialog-bm" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="bd" v-show="opts.content!=\'\'"  id="pay-tips-scroll" style="height: 200px; overflow: hidden;">\n        <p v-html="opts.content"></p>\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.button1Name}}</button>\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="confirmCallback">{{opts.button2Name}}</button>\n    </footer>\n</div>', i = '<div v-if="opts.type === \'custom\'" class="js-alert-content"></div>', t.exports = s.replace("SELECTOR", l).replace("INPUT", o).replace("LOADING", r).replace("TIPS", u).replace("CONFIRM", n).replace("PAYTIPS", a).replace("CUSTOM", i).replace("RECHARGETIPS", c)
}, function(t, e, n) {
    "use strict";
    var i = n(39),
        o = n(128),
        r = {
            content: "加载中，请稍后",
            show: !0,
            css: {
                top: "40px",
                bottom: 0
            }
        },
        s = Vue.extend({
            template: o,
            data: function() {
                return {
                    opts: {}
                }
            },
            props: {
                loading: {
                    twoway: !0
                }
            },
            watch: {
                loading: function(t) {
                    "boolean" == typeof t ? this.opts = i({}, {
                        content: "加载中，请稍后",
                        show: t,
                        css: {
                            top: "40px",
                            bottom: 0
                        }
                    }, t) : this.opts = i({}, r, t)
                }
            }
        });
    Vue.component("loading", s)
}, , function(t, e) {
    var n, i, o;
    i = '<div v-show="opts.show" :style="opts.css" style="position:absolute; left:0; right:0;" >\n    MASK_TPL\n    <div class="yo-dialog yo-dialog-bm">\n\n        LOADING_CONTENT\n    </div>\n</div>', o = '<div class="yo-mask" ></div>\n', n = '<div class="loading_tc">\n   <div class="bm_loadIcon"><span></span><span></span><span></span><span></span><span></span>\n   </div>\n   <p class="bm_loadText">{{opts.content}}</p>\n</div>', t.exports = i.replace("MASK_TPL", o).replace("LOADING_CONTENT", n)
}, , , , , , , function(t, e, n) {
    "use strict";
    var i = {
            _isdate: function(t, e, n) {
                if (isNaN(t) || isNaN(e) || isNaN(n)) return !1;
                if (e > 12 || e < 1) return !1;
                if (n < 1 || n > 31) return !1;
                if ((4 == e || 6 == e || 9 == e || 11 == e) && n > 30) return !1;
                if (2 == e) {
                    if (n > 29) return !1;
                    if ((t % 100 == 0 && t % 400 != 0 || t % 4 != 0) && n > 28) return !1
                }
                return !0
            },
            isChinese: function(t, e) {
                var n = /^(?:\[[^\[\]]+\])+$/;
                if (n.test(t)) return e
            },
            required: function(t, e) {
                if ("" == t) return e
            },
            isCardno: function(t, e) {
                var n = new RegExp("^[0-9]*$");
                if (!n.test(t) || 14 != t.length && 16 != t.length) return e
            },
            isSocioCardno: function(t, e) {
                var n = new RegExp("^[A-Z]$"),
                    i = new RegExp("^[0-9]+$"),
                    o = t.length,
                    r = 12 === o && i.test(t.slice(0, 11)),
                    s = r && (i.test(t.slice(11)) || n.test(t.slice(11)));
                if (!s) return e
            },
            isString: function(t, e) {
                var n = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
                    i = /^[0-9]+$/g;
                if (n.test(t) || i.test(t)) return e
            },
            strlen: function(t, e, n) {
                for (var i = 0, o = 0; o < t.length; o++) {
                    var r = t.charCodeAt(o);
                    r >= 1 && r <= 126 || 65376 <= r && r <= 65439 ? i++ : i += 2
                }
                if (i > e) return n
            },
            minLength: function(t, e, n) {
                if (t.length < e) return n
            },
            maxLength: function(t, e, n) {
                if (t.length > e) return n
            },
            isMobile: function r(t, e) {
                var r = /(^1[3|4|5|7|8][0-9]{9}$)/;
                if (!r.test(t)) return e
            },
            isVerifCode: function(t, e) {
                var n = /^[0-9]{4}$/,
                    i = /^[0-9]{6}$/;
                if (!n.test(t) && !i.test(t)) return e
            },
            isPassword: function(t, e) {
                var n = /^[0-9a-zA-Z]{6,16}$/;
                if (!n.test(t)) return e
            },
            isBirthday: function(t, e) {
                var n = t.trim();
                if (8 != n.length) return e;
                var o = parseInt(n.slice(0, 4), 10),
                    r = parseInt(n.slice(4, 6), 10),
                    s = parseInt(n.slice(6), 10);
                return i._isdate(o, r, s) ? void 0 : e
            },
            isIdCode: function(t, e) {
                if (!t) return e;
                t = t.toUpperCase();
                var n, o;
                if (n = t.length, !/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(t)) return e;
                if (15 == n) {
                    o = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
                    var r, s = t.match(o);
                    new Date("19" + s[2] + "/" + s[3] + "/" + s[4]);
                    if (r = i._isdate("19" + s[2], s[3], s[4]), !r) return e;
                    var a, c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
                        l = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"],
                        u = 0;
                    for (t = t.substr(0, 6) + "19" + t.substr(6, t.length - 6), a = 0; a < 17; a++) u += t.substr(a, 1) * c[a];
                    t += l[u % 11]
                }
                if (18 == n) {
                    o = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
                    var r, s = t.match(o);
                    new Date(s[2] + "/" + s[3] + "/" + s[4]);
                    if (r = i._isdate(s[2], s[3], s[4]), !r) return e;
                    var h, a, c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
                        l = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"],
                        u = 0;
                    for (a = 0; a < 17; a++) u += t.substr(a, 1) * c[a];
                    if (h = l[u % 11], h != t.substr(17, 1)) return e
                } else if (!/^[a-zA-Z0-9]{5,19}$/.test(t)) return e
            },
            isText: function(t, e) {
                var n = /^[\s\u4e00-\u9fa5_a-zA-Z0-9_,\.;\:"'!！*%#@￥$&·“”?？<>《》，（）()~+=：、|{}[\]【】]{1,300}$/;
                if (!n.test(t)) return e
            }
        },
        o = function(t) {
            for (var e = {
                status: !0
            }, n = 0, o = t.length; n < o; n++) {
                for (var r = t[n], s = !1, a = 0, c = r.rules.length; a < c; a++) {
                    var l = r.rules[a],
                        u = l.rule.split(":"),
                        h = u.shift();
                    l.type && u.unshift(l.type), u.unshift(r.value), u.push(l.msg);
                    var p = i[h].apply(null, u);
                    if (p) {
                        e = {
                            value: r.value,
                            status: !1,
                            msg: p
                        }, s = !0;
                        break
                    }
                }
                if (s) break
            }
            return e
        };
    t.exports = o
}, function(t, e, n) {
    "use strict";

    function i() {
        if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return !1;
        if (/Chrome/i.test(navigator.userAgent)) return /Android/i.test(navigator.userAgent);
        if (/Silk/i.test(navigator.userAgent)) return !1;
        if (/Android/i.test(navigator.userAgent)) {
            var t = navigator.userAgent.substr(navigator.userAgent.indexOf("Android") + 8, 3);
            return !(parseFloat(t[0] + t[3]) < 44)
        }
    }
    t.exports = i
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";

    function i(t) {
        return f(o(p(t), t.length * m))
    }

    function o(t, e) {
        t[e >> 5] |= 128 << e % 32, t[(e + 64 >>> 9 << 4) + 14] = e;
        for (var n = 1732584193, i = -271733879, o = -1732584194, r = 271733878, h = 0; h < t.length; h += 16) {
            var p = n,
                f = i,
                d = o,
                m = r;
            n = s(n, i, o, r, t[h + 0], 7, -680876936), r = s(r, n, i, o, t[h + 1], 12, -389564586), o = s(o, r, n, i, t[h + 2], 17, 606105819), i = s(i, o, r, n, t[h + 3], 22, -1044525330), n = s(n, i, o, r, t[h + 4], 7, -176418897), r = s(r, n, i, o, t[h + 5], 12, 1200080426), o = s(o, r, n, i, t[h + 6], 17, -1473231341), i = s(i, o, r, n, t[h + 7], 22, -45705983), n = s(n, i, o, r, t[h + 8], 7, 1770035416), r = s(r, n, i, o, t[h + 9], 12, -1958414417), o = s(o, r, n, i, t[h + 10], 17, -42063), i = s(i, o, r, n, t[h + 11], 22, -1990404162), n = s(n, i, o, r, t[h + 12], 7, 1804603682), r = s(r, n, i, o, t[h + 13], 12, -40341101), o = s(o, r, n, i, t[h + 14], 17, -1502002290), i = s(i, o, r, n, t[h + 15], 22, 1236535329), n = a(n, i, o, r, t[h + 1], 5, -165796510), r = a(r, n, i, o, t[h + 6], 9, -1069501632), o = a(o, r, n, i, t[h + 11], 14, 643717713), i = a(i, o, r, n, t[h + 0], 20, -373897302), n = a(n, i, o, r, t[h + 5], 5, -701558691), r = a(r, n, i, o, t[h + 10], 9, 38016083), o = a(o, r, n, i, t[h + 15], 14, -660478335), i = a(i, o, r, n, t[h + 4], 20, -405537848), n = a(n, i, o, r, t[h + 9], 5, 568446438), r = a(r, n, i, o, t[h + 14], 9, -1019803690), o = a(o, r, n, i, t[h + 3], 14, -187363961), i = a(i, o, r, n, t[h + 8], 20, 1163531501), n = a(n, i, o, r, t[h + 13], 5, -1444681467), r = a(r, n, i, o, t[h + 2], 9, -51403784), o = a(o, r, n, i, t[h + 7], 14, 1735328473), i = a(i, o, r, n, t[h + 12], 20, -1926607734), n = c(n, i, o, r, t[h + 5], 4, -378558), r = c(r, n, i, o, t[h + 8], 11, -2022574463), o = c(o, r, n, i, t[h + 11], 16, 1839030562), i = c(i, o, r, n, t[h + 14], 23, -35309556), n = c(n, i, o, r, t[h + 1], 4, -1530992060), r = c(r, n, i, o, t[h + 4], 11, 1272893353), o = c(o, r, n, i, t[h + 7], 16, -155497632), i = c(i, o, r, n, t[h + 10], 23, -1094730640), n = c(n, i, o, r, t[h + 13], 4, 681279174), r = c(r, n, i, o, t[h + 0], 11, -358537222), o = c(o, r, n, i, t[h + 3], 16, -722521979), i = c(i, o, r, n, t[h + 6], 23, 76029189), n = c(n, i, o, r, t[h + 9], 4, -640364487), r = c(r, n, i, o, t[h + 12], 11, -421815835), o = c(o, r, n, i, t[h + 15], 16, 530742520), i = c(i, o, r, n, t[h + 2], 23, -995338651), n = l(n, i, o, r, t[h + 0], 6, -198630844), r = l(r, n, i, o, t[h + 7], 10, 1126891415), o = l(o, r, n, i, t[h + 14], 15, -1416354905), i = l(i, o, r, n, t[h + 5], 21, -57434055), n = l(n, i, o, r, t[h + 12], 6, 1700485571), r = l(r, n, i, o, t[h + 3], 10, -1894986606), o = l(o, r, n, i, t[h + 10], 15, -1051523), i = l(i, o, r, n, t[h + 1], 21, -2054922799), n = l(n, i, o, r, t[h + 8], 6, 1873313359), r = l(r, n, i, o, t[h + 15], 10, -30611744), o = l(o, r, n, i, t[h + 6], 15, -1560198380), i = l(i, o, r, n, t[h + 13], 21, 1309151649), n = l(n, i, o, r, t[h + 4], 6, -145523070), r = l(r, n, i, o, t[h + 11], 10, -1120210379), o = l(o, r, n, i, t[h + 2], 15, 718787259), i = l(i, o, r, n, t[h + 9], 21, -343485551), n = u(n, p), i = u(i, f), o = u(o, d), r = u(r, m)
        }
        return Array(n, i, o, r)
    }

    function r(t, e, n, i, o, r) {
        return u(h(u(u(e, t), u(i, r)), o), n)
    }

    function s(t, e, n, i, o, s, a) {
        return r(e & n | ~e & i, t, e, o, s, a)
    }

    function a(t, e, n, i, o, s, a) {
        return r(e & i | n & ~i, t, e, o, s, a)
    }

    function c(t, e, n, i, o, s, a) {
        return r(e ^ n ^ i, t, e, o, s, a)
    }

    function l(t, e, n, i, o, s, a) {
        return r(n ^ (e | ~i), t, e, o, s, a)
    }

    function u(t, e) {
        var n = (65535 & t) + (65535 & e),
            i = (t >> 16) + (e >> 16) + (n >> 16);
        return i << 16 | 65535 & n
    }

    function h(t, e) {
        return t << e | t >>> 32 - e
    }

    function p(t) {
        for (var e = Array(), n = (1 << m) - 1, i = 0; i < t.length * m; i += m) e[i >> 5] |= (t.charCodeAt(i / m) & n) << i % 32;
        return e
    }

    function f(t) {
        for (var e = d ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < 4 * t.length; i++) n += e.charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + e.charAt(t[i >> 2] >> i % 4 * 8 & 15);
        return n
    }
    var d = 0,
        m = 8;
    t.exports = {
        hex_md5: i
    }
}, , , , , , , , , , , , , , function(t, e, n) {
    "use strict";

    function i() {
        this.param = {}
    }
    var o = "0.0.1",
        r = ["l", "m", "h", "arg_a", "arg_b", "arg_c", "arg_d", "arg_e"],
        s = ["ty", "v", "rd", "t", "r", "p", "u", "m", "l", "h", "arg_a", "arg_b", "arg_c", "arg_d", "arg_e"].reverse();
    i.prototype = {
        _getHashString: function(t) {
            var e = window.location.hash.toString(),
                n = new RegExp("" + t + "=([^&?]*)", "ig");
            return e.match(n) ? decodeURIComponent(e.match(n)[0].substr(t.length + 1)) : ""
        },
        _getQueryString: function(t) {
            var e = window.location.search.toString(),
                n = new RegExp("" + t + "=([^&?]*)", "ig");
            return e.match(n) ? decodeURIComponent(e.match(n)[0].substr(t.length + 1)) : ""
        },
        _add: function(t, e) {
            null != e && (this.param[t] = e)
        },
        _getReffer: function() {
            var t = document.referrer,
                e = t.indexOf("?");
            return e === -1 ? t.slice(7) : t.slice(7, e)
        },
        _getPage: function() {
            return location.hostname + location.pathname
        },
        _getUser: function() {
            return localStorage.getItem("userId") || ""
        },
        _addBaseParam: function(t) {
            this._add("v", t.v || o), this._add("rd", t.rd || Math.random()), this._add("t", (new Date).getTime()), this._add("r", t.r || this._getReffer()), this._add("p", t.p || this._getPage()), this._add("u", t.u || this._getUser())
        },
        _addOtherParam: function(t) {
            for (var e in t) r.indexOf(e) !== -1 && this._add(e, t[e])
        },
        _collectParams: function() {
            for (var t = [], e = this.param, n = s.length; n--;) {
                var i = s[n];
                void 0 !== e[i] && t.push(i + "=" + encodeURIComponent(e[i]))
            }
            return t.join("&")
        },
        _send: function() {
            var t = new Image;
            t.onload = function() {
                t.onload = null, t = null
            }, t.src = "http://bc.benmu-health.org?" + this._collectParams()
        },
        sendClk: function(t) {},
        sendH: function(t) {}
    }, t.exports = new i
}, function(t, e, n) {
    "use strict";
    var i = n(27),
        o = n(197),
        r = n(136)(),
        s = Vue.extend({
            template: o,
            data: function() {
                return {
                    show: !1
                }
            },
            props: {
                serviceShow: {
                    twoway: !0
                }
            },
            watch: {
                serviceShow: function(t) {
                    var e = this;
                    this.show = t, this.iscroll ? this.$nextTick(function() {
                        this.iscroll && this.iscroll.refresh()
                    }) : setTimeout(function() {
                        e.iscroll = new i("#js-service-protocol-scroll", {
                            preventDefault: !0,
                            bounce: !1,
                            click: r
                        })
                    }, 300), setInterval(function() {
                        e.iscroll && e.iscroll.refresh();
                    }, 3e3)
                }
            },
            methods: {
                cancelCallback: function() {
                    this.serviceShow = !1
                }
            }
        });
    Vue.component("service-protocol", s)
}, function(t, e) {
    var n;
    n = '<!-- 服务协议 -->\n<div class="serviceAgreement" id="js-service-protocol-scroll" v-show=\'show\' style="position: absolute; top:40px; left:0; right:0; bottom: 0; z-index: 1000;background: #fff;">\n    <div class="articleDetail">\n        <h2 class="small" style="text-align:center;">北京通·京医通微信公众平台服务协议</h2>\n        <h4>【首部及导言】</h4>\n        <p class="small">\n            欢迎使用北京通·京医通微信服务平台！\n            <br> 为使用北京通·京医通微信服务平台（以下简称“本服务”），您应当阅读并遵守《北京通·京医通微信公众平台服务协议》（以下简称“本协议”） 中规定的所有权利和限制。请您务必审慎阅读、充分理解各条款内容。如果您不同意本协议的任何内容，或者无法准确理解条款的含义，请不要进行后续操作。您对本服务的登录、查看、发布信息等行为即视为您已阅读并同意本协议的约束。\n        </p>\n        <h4>一、【协议的范围】</h4>\n        <p class="small">\n            1.1 本协议是您与北京通·京医通之间关于您使用北京通·京医通微信服务平台所订立的协议。“本木医疗”为本服务的技术支持方。“用户”是指注册、登录、使用微信公众帐号的个人或组织，在本协议中更多地称为“您”。“其他用户”是指包括其他微信公众帐号用户和微信用户等除用户本人外与微信公众平台服务相关的用户。\n            <br> 1.2 本服务是北京通·京医通向用户提供的信息发布、客户服务以及与此相关的互联网技术服务。微信用户关注微信公众帐号后将成为该帐号关注用户。\n            <br> 1.3 本协议内容同时包括北京通·京医通可能不断发布的关于本服务的相关协议、服务声明、业务规则及公告指引等内容（以下统称为“专项规则”）。上述内容一经正式发布，即为本协议不可分割的组成部分，您理同一并遵守。\n        </p>\n        <h4>二、【权利声明】</h4>\n        <p class="small">\n            2.1 禁止反向工程、反向编译和反向汇编：用户不得对本服务进行反向工程（ReverseEngineer）、反向编译（Decompile）或反向汇编（Disassemble），同时不得改动编译在程序文件内部的任何资源。除法律、法规明文规定允许上述活动外，用户必须遵守此协议限制。\n            <br> 2.2 组件分割:本服务是作为一个完整产品而被授予许可使用，用户不得将各个部分分开用于任何目的。\n            <br> 2.3 个别授权:如需进行商业性的销售、复制、分发，必须获得北京通·京医通的书面授权和许可。\n            <br> 2.4 保留权利：本协议未明示授权的其他一切权利仍归北京通·京医通所有，用户使用其他权利时必须获得北京通·京医通的书面同意。\n        </p>\n        <h4>三、【用户使用须知】</h4>\n        <p class="small">\n            3.1服务功能：本服务提供当天挂号、预约挂号、医疗缴费、医疗信息推送、北京通·京医通卡的使用（包括绑定、充值、查询卡资料、查询卡交易记录、临时挂失、解绑等）、建立北京通·京医通临时卡、已关联北京通·京医通账户的北京社保卡的使用（包括绑定、为北京社保卡开通的北京通·京医通账户充值、查询北京社保卡的北京通·京医通账户的资料、查询北京社保卡的北京通·京医通账户的交易记录、解绑等）、未关联北京通·京医通账户的北京社保卡的预约开户、查询挂号记录、查询缴费记录、查看检查报告等功能。\n            <br> 3.2 本服务的修改和升级：北京通·京医通保留为用户提供本服务的修改、升级版本的权利。\n            <br> 3.3您在绑定北京通·京医通卡、建北京通·京医通临时卡、绑定北京社保卡、北京社保卡预约开户过程中，需要填写一些必要的信息，请保持这些信息的真实、准确、合法、有效，以便本木医疗向您提供及时有效的帮助，或更好地为您提供服务。根据相关法律法规和政策，请您填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用本服务或在使用过程中受到限制，因信息填写错误而造成的损失由个人承担。\n            <br> 3.4 您应对通过本服务了解、接收或可接触到的包括但不限于其他用户在内的任何人的个人信息予以充分尊重，您不应以搜集、复制、存储、传播或以其他任何方式使用其他用户的个人信息，否则，由此产生的后果由您自行承担。\n            <br> 3.5 用户应在遵守法律及本协议的前提下使用本服务。用户无权实施包括但不限于下列行为：\n            <br> 3.5.1 删除或者改变本服务上的所有权利管理电子信息；\n            <br> 3.5.2 故意避开或者破坏著作权人为保护本服务著作权而采取的技术措施；\n            <br> 3.5.3 利用本服务误导、欺骗他人;\n            <br> 3.5.4 违反国家规定，对计算机信息系统功能进行删除、修改、增加、干扰，造成计算机信息系统不能正常运行，\n            <br> 3.5.5 未经允许，进入计算机信息网络或者使用计算机信息网络资源；\n            <br> 3.5.6 未经允许，对计算机信息网络功能进行删除、修改或者增加的；\n            <br> 3.5.7 未经允许，对计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加；\n            <br> 3.5.8 破坏本软件系统或网站的正常运行，故意传播计算机病毒等破坏性程序；\n            <br> 3.5.9 其他任何危害计算机信息网络安全的行为\n            <br> 3.6 用户使用本服务发布、传送、存储的任何内容应符合国家现行法律、法规的相关规定，不得含有以下内容：\n            <br> 3.6.1 违反宪法所确定的基本原则的；含有法律、行政法规禁止的其他内容的；\n            <br> 3.6.2 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；\n            <br> 3.6.3 损害国家荣誉和利益的，攻击党和政府及其领导人的；\n            <br> 3.6.4 煽动民族仇恨、民族歧视，破坏民族团结的；\n            <br> 3.6.5 煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的，以非法民间组织名义活动的；\n            <br> 3.6.6 破坏国家宗教政策，宣扬邪教和封建迷信的；\n            <br> 3.6.7 散布谣言或不实消息，扰乱社会秩序，破坏社会稳定的；\n            <br> 3.6.8 散布反动、淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；\n            <br> 3.6.9 虚假、骚扰性、侮辱性、恐吓性、伤害性、挑衅性、庸俗性信息；\n            <br> 3.6.10 违背中华民族传统美德、社会公德、伦理道德、以及社会主义精神文明的；\n            <br> 3.6.10 宣扬种族歧视，破坏国家、民族、地区团结的言论和消息的；\n            <br> 3.6.11 侵犯他人肖像权、姓名权、名誉权、隐私权或其他人身权利的；\n            <br> 3.6.12 侵犯其他任何第三方的专利权、版权、著作权、商标权、名誉权或其他任何合法权益的信息。\n            <br> 3.6.13 有法律、行政法规和国家规定禁止的其他内容的。 用户应承担一切因自己发布、传送、存储信息不当导致的民事、行政或刑事法律责任。\n        </p>\n        <h4>四、【账号使用规范】</h4>\n        <p class="small">\n            4.1 您在使用本服务前需要注册一个北京通·京医通帐号。北京通·京医通帐号可通过手机号码进行注册。北京通·京医通有权根据用户需求或产品需要对帐号注册和绑定的方式进行变更，关于您使用帐号的具体规则，请遵守北京通·京医通用户服务协议。\n            <br> 4.2 北京通·京医通帐号的所有权归北京通·京医通所有，用户完成申请注册手续后，仅获得北京通·京医通帐号的使用权，且该使用权仅属于初始申请注册人。同时，初始申请注册人不得赠与、借用、租用、转让或售卖北京通·京医通帐号或者以其他方式许可非初始申请注册人使用北京通·京医通帐号。非初始申请注册人不得通过受赠、继承、承租、受让或者其他任何方式使用北京通·京医通帐号。\n            <br> 4.3 用户有责任妥善保管注册帐户信息及帐户密码的安全，用户需要对注册帐户以及密码下的行为承担法律责任。用户同意在任何情况下不向他人透露帐户及密码信息。当在您怀疑他人在使用您的帐号时，您应立即通知北京通·京医通。\n            <br>\n        </p>\n        <h4>五、【用户隐私保护】</h4>\n        <p class="small">\n            5.1 保护用户个人信息是北京通·京医通的一项基本原则，北京通·京医通将会采取合理的措施保护用户的个人信息。除法律法规规定的情形外，未经用户许可北京通·京医通不会向第三方公开、透露用户个人信息。北京通·京医通对相关信息采用专业加密存储与传输方式，保障用户个人信息的安全。\n            <br> 5.2 您在注册帐号或使用本服务的过程中，需要提供一些必要的信息，例如：为向您提供帐号注册服务或进行用户身份识别，需要您填写手机号码；若国家法律法规或政策有特殊规定的，您需要提供真实的身份信息。若您提供的信息不完整，则无法使用本服务或在使用过程中受到限制。\n            <br> 5.3 绑定北京通·京医通卡、北京社保卡、建北京通·京医通临时卡、北京社保卡预约开户，需要用户登录提交卡片相关的个人信息，仅将此信息做用服务使用权验证并不会做其他任何用途。除法律法规规定的情形外，未经用户许可北京通·京医通不会向第三方公开、透露用户个人信息。北京通·京医通对相关信息采用专业加密存储与传输方式，保障用户个人信息的安全。\n            <br> 5.4 用户不应将其卡片信息、个人信息告知他人使用。因黑客行为或用户的保管疏忽导致卡片信息、个人信息遭他人非法使用，或手机遗失，北京通·京医通不承担任何责任。\n            <br> 5.5 北京通·京医通将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。本服务不含有任何旨在破坏用户数据和获取用户隐私信息的恶意代码，不含有任何监控、监视用户的功能代码，不会收集用户个人文件、文档等信息，不会泄漏用户隐私。\n            <br>\n        </p>\n        <h4>六、【风险及免责】</h4>\n        <p class="small">\n            6.1 您理解并同意：为了向您提供有效的服务，本服务会利用您终端设备的处理器和带宽等资源。本服务使用过程中可能产生数据流量的费用，用户需自行向运营商了解相关资费信息，并自行承担相关费用。\n            <br> 6.2 用户在使用本服务时，须自行承担如下不可掌控的风险内容，包括但不限于：\n            <br> 6.2.1 由于受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏等不可抗拒因素可能引起的信息丢失、泄漏等风险；\n            <br> 6.2.2 用户的电脑软件、系统、硬件和通信线路出现故障；\n            <br> 6.2.3 用户操作不当或通过非北京通·京医通授权的方式使用本服务；\n            <br> 6.2.4 用户发布的内容被他人转发、分享，因此等传播可能带来的风险和责任；\n            <br> 6.2.5 由于网络信号不稳定等原因，所引起的北京通·京医通微信服务平台登录失败、资料同步不完整、页面打开速度慢等风险。\n            <br> 6.2.6 其他北京通·京医通无法控制或合理预见的情形。\n            <br>\n        </p>\n        <h4>七、【知识产权声明】</h4>\n        <p class="small">\n            7.1 在本服务中提供的内容（包括但不限于网页、文字、图片、音频、视频、图表等）的知识产权归本木医疗所有，用户在使用本服务中所产生的内容的知识产权归用户或相关权利人所有，用户群发的内容一经发布即向公众传播和共享，您同意本木医疗免费使用、传播、复制、分发、展示或允许技术抓取相关内容。\n            <br> 7.2 除另有特别声明外，提供本服务时所依托软件的著作权、专利权及其他知识产权均归本木医疗所有。\n            <br> 7.3 上述及其他任何本服务包含的内容的知识产权均受到法律保护，其他未经北京通·京医通、用户或本木医疗许可的第三人，不得以任何形式进行使用或创造相关衍生作品。\n            <br>\n        </p>\n        <h4>八、【其它】</h4>\n        <p class="small">\n            8.1 您使用本服务即视为您已阅读并同意受本协议的约束。北京通·京医通有权在必要时修改本协议条款。您可以在相关服务页面查阅最新版本的条款。本协议条款变更后，如果您继续使用本服务，即视为您已接受修改后的协议。如果您不接受修改后的协议，应当停止使用本服务。\n            <br> 8.2 本协议签订地为中华人民共和国北京市朝阳区。\n            <br> 8.3 本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。\n            <br> 8.4 若您和北京通·京医通之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地有管辖权的人民法院管辖。\n            <br> 8.5 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。\n            <br> 8.6 本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。（正文完）\n        </p>\n        <i class="small">北京通·京医通 <br>2015年8月</i>\n    </div>\n    <p style="position: fixed;right: 0px;top: 45px;background: #00b4cb;color: white;padding: 5px;border-top-left-radius: 5px;border-bottom-left-radius: 5px;" @click="cancelCallback">关闭</p>\n</div>\n<!-- 服务协议 end -->', t.exports = n
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";

    function i(t, e) {
        function n() {
            e > 0 ? (e--, t.SMSCodeBtn = e + "秒", t.isTimer = !0, l.timer = setTimeout(n, 1e3)) : (t.isTimer = !1, t.SMSCodeBtn = "获取验证码", l.timer && clearTimeout(l.timer))
        }
        l.timer && clearTimeout(l.timer), n()
    }

    function o(t, e) {
        function n() {
            e > 0 ? (e--, l.errMsgTimer = setTimeout(n, 1e3)) : (t.errMsg = "", l.errMsgTimer && clearTimeout(l.errMsgTimer))
        }
        l.errMsgTimer && clearTimeout(l.errMsgTimer), n()
    }
    n(100), n(91), n(196), n(126);
    var r = n(181),
        s = (n(195), n(57)),
        a = n(397),
        c = n(135),
        l = {
            timer: "",
            errMsgTimer: ""
        };
    new Vue({
        el: "#app",
        template: a,
        data: {
            checkKey: "",
            tabChange: !0,
            Tel: "",
            verifCode: "",
            accountNum: "",
            password: "",
            SMSCodeBtn: "获取验证码",
            codeType: "",
            errMsg: "",
            isTimer: !1,
            serviceShow: !1,
            alert: {},
            loading: {
                show: !1
            },
            showDel: {
                showDelTel: !1,
                showDelverifCode: !1,
                showDelaccountNum: !1,
                showDelpassword: !1
            }
        },
        methods: {
            checkRule: function() {
                var t = [{
                        value: this.Tel,
                        rules: [{
                            rule: "required",
                            msg: "请填写手机号码"
                        }, {
                            rule: "isMobile",
                            msg: "请填写正确的手机号码"
                        }]
                    }],
                    e = [{
                        value: this.verifCode,
                        rules: [{
                            rule: "required",
                            msg: "请填写验证码"
                        }, {
                            rule: "isVerifCode",
                            msg: "填写的验证码有误，请核对后再试"
                        }]
                    }],
                    n = [{
                        value: this.accountNum,
                        rules: [{
                            rule: "required",
                            msg: "请填写手机号码"
                        }, {
                            rule: "isMobile",
                            msg: "请填写正确的手机号码"
                        }]
                    }, {
                        value: this.password,
                        rules: [{
                            rule: "required",
                            msg: "请填写密码"
                        }, {
                            rule: "minLength:6",
                            msg: "请填写6-16位数字和字母的组合"
                        }, {
                            rule: "maxLength:16",
                            msg: "请填写6-16位数字和字母的组合"
                        }, {
                            rule: "isPassword",
                            msg: "填写的密码有误，请核对后再试"
                        }]
                    }],
                    i = [];
                return 1 == this.checkKey && (i = i.concat(t)), 2 == this.checkKey && (i = i.concat(t, e)), 3 == this.checkKey && (i = i.concat(n)), i
            },
            serviceAgreement: function() {
                this.serviceShow = !0
            },
            checkFn: function() {
                var t = c(this.checkRule());
                return !!t.status || void(this.alert = {
                    type: "tips",
                    content: t.msg
                })
            },
            sendVerifCode: function(t) {
                this.checkKey = 1, this.checkFn() && (this.isTimer ? 1 == this.isTimer && (this.errMsg = "正在发送" + (1 == this.codeType ? "短信" : "语音") + "验证码，请勿重复点击", o(this, 4)) : (this.codeType = t, this.SMSCodeBtn = "正在发送中...", this.getVerifCode(1 == this.codeType ? "/mobile/msg/verificationForSMS" : "/mobile/msg/verificationForVoice")))
            },
            getVerifCode: function(t) {
                this.$http.get(t, {
                    phone: this.Tel,
                    scene: "LOGIN"
                }, {
                    _noNeedAlert: !0
                }).then(function(t) {
                    var e = t.data.resCode;
                    0 == e ? i(this, 60) : (101 != e && 102 != e && 3e3 != e && (this.alert = {
                        type: "tips",
                        content: t.data.msg
                    }), 5006 != e && (this.SMSCodeBtn = "获取验证码"), this.isTimer || (this.SMSCodeBtn = "获取验证码"))
                }, function() {
                    this.SMSCodeBtn = "获取验证码"
                })
            },
            checkLogin: function(t) {
                var e = {};
                if (this.checkKey = 1 == t ? 2 : 3, 2 == this.checkKey) {
                    if (!this.Tel || !this.verifCode) return
                } else if (!this.accountNum || !this.password) return;
                this.checkFn() && (e = 1 == t ? {
                    phone: this.Tel,
                    verifyCode: this.verifCode
                } : {
                    phone: this.accountNum,
                    password: r.hex_md5(this.password)
                }, this.login("/mobile/wx/user/login", e, t))
            },
            login: function(t, e, n) {
                var i = this;
                this.loading = !0, this.$http.get(t, e, {
                    _noNeedAlert: !0
                }).then(function(t) {
                    this.loading = !1;
                    var e = t.data.resCode;
                    if (0 == e)
                        if (1 == n ? localStorage.setItem("phone", this.Tel) : localStorage.setItem("phone", this.accountNum), s.getParams().ref) {
                            var o = location.search.slice(5);
                            window.location.href = decodeURIComponent(o)
                        } else window.location.href = s.getUrl("myAccount");
                    else 10001 == e ? this.alert = {
                        type: "confirm",
                        content: "手机号码尚未注册，是否立即前往验证码登录？",
                        confirmCallback: function() {
                            window.location.href = s.getUrl("userLogin")
                        },
                        button2Name: "前往验证码登录"
                    } : 1 == n && 5001 == e ? this.alert = {
                        type: "confirm",
                        content: t.data.msg,
                        button2Name: "获取验证码",
                        confirmCallback: function() {
                            i.isTimer = !1, i.sendVerifCode(i.codeType)
                        }
                    } : 101 != e && 102 != e && (this.alert = {
                        type: "tips",
                        content: t.data.msg
                    })
                }, function() {
                    this.loading = !1
                })
            },
            showDelFun: function(t) {
                this.showDel[t] = !0
            },
            hideDelFun: function(t) {
                this.showDel[t] = !1
            }
        },
        ready: function() {
            this.Tel = localStorage.getItem("phone") || "", this.accountNum = localStorage.getItem("phone") || ""
        }
    })
}, function(t, e) {
    var n;
    n = '<div class="benmu-flex" style=\'overflow-y: scroll;\'>\n    <header class="yo-header yo-header-weChat">\n        北京通·京医通官方微信服务平台\n    </header>\n    <!-- tab切换标签 -->\n    <div v-show=\'!serviceShow\'>\n        <div class="m-hostRaiders-bd-tab">\n            <ul class="yo-tab yo-tab-filter">\n                <li class="item" :class="{\'item-on\':tabChange}" @click="tabChange = true">\n                    验证码登录\n                </li>\n                <li class="item" :class="{\'item-on\':!tabChange}" @click="tabChange = false">\n                    密码登录\n                </li>\n            </ul>\n        </div>\n        <!-- tab切换标签 end-->\n        <!-- 验证码登录模块 -->\n        <div v-show=\'tabChange\'>\n            <div class="yo-list yo-list-login">\n                <div class="item">\n                    <span class="account">账号</span>\n                    <div class="login-input">\n                        <input type="Tel" value="" maxlength="11" placeholder="请填写手机号码" v-model=\'Tel\' v-bind:readonly="isTimer" @focus=\'showDelFun("showDelTel")\' @blur=\'hideDelFun("showDelTel")\'>\n                    </div>\n                    <a href="javascript:;" class="tel-del" v-show=\'Tel && !(isTimer && codeType) && showDel.showDelTel\' @click=\'Tel=""\'>\n                        <i class="ff-icon ff-del"></i>\n                    </a>\n                </div>\n                <div class="item">\n                    <span class="account">验证码</span>\n                    <div class="login-input">\n                        <input type="Tel" maxlength="6" placeholder="请填写验证码"  v-model=\'verifCode\' errTip=\'输入错误\' @focus=\'showDelFun("showDelverifCode")\' @blur=\'hideDelFun("showDelverifCode")\'>\n                    </div>\n                    <a href="javascript:;" class="tel-del tel-del-yzm" v-show=\'verifCode && showDel.showDelverifCode\' @click=\'verifCode=""\'>\n                        <i class="ff-icon ff-del"></i>\n                    </a>\n                    <a href="javascript:;">\n                        <input type="button" class="yzm" :class=\'{"noGet":(!Tel || isTimer)}\' value="{{SMSCodeBtn}}" @click=\'sendVerifCode(1)\'>\n                    </a>\n                </div>\n            </div>\n            <p class="bm_error">{{errMsg}}</p>\n            <div class="bm_voice">\n                <p class="wait_message" :class=\'{"wait_message_gray":(!Tel || (isTimer && codeType))}\' v-show=\'!(isTimer && (codeType == 2))\'>\n                    <i>短信验证码收不到？试试 </i>\n                    <i class="ff-icon ff-voice"></i>\n                    <span class="voice-txt" @click=\'sendVerifCode(2)\'>语音验证</span>\n                </p>\n            </div>\n            <div class="wait_noget" v-show=\'(isTimer && codeType == 2)\'>请保持电话畅通，及时接听语音验证码。</div>\n            <section>\n                <a href="javascript:;" class="yo-btn yo-btn-login yo-btn-l yo-btn-stacked" :class=\'{"yo-btn-login-light": (Tel && verifCode)}\' @click=\'checkLogin(1)\'>登录</a>\n            </section>\n            <div class="bm_tishi">\n                <p>提示：未注册北京通·京医通账号的手机号，登录时将自动注册北京通·京医通账号，且代表您已同意 <a href="javascript:;" @click=\'serviceAgreement\'>《北京通·京医通服务协议》</a></p>\n            </div>\n        </div>\n        <!-- 验证码登录模块 end-->\n\n        <!-- 密码登录模块 -->\n        <div v-show=\'!tabChange\'>\n            <div class="yo-list yo-list-login">\n                <div class="item">\n                    <span class="account">账号</span>\n                    <div class="login-input">\n                        <input type="Tel" value="" maxlength="11" placeholder="请填写手机号码"  v-model=\'accountNum\'\n                        @focus=\'showDelFun("showDelaccountNum")\' @blur=\'hideDelFun("showDelaccountNum")\'>\n                    </div>\n                    <a href="javascript:;" v-show=\'accountNum && showDel.showDelaccountNum\' @click=\'accountNum=""\' class="tel-del"><i class="ff-icon ff-del"></i></a>\n                </div>\n                <div class="item">\n                    <span class="account">密码</span>\n                    <div class="login-input">\n                        <input type="password" value="" maxlength="16" placeholder="6-16位数字、字母的组合" v-model=\'password\' @focus=\'showDelFun("showDelpassword")\' @blur=\'hideDelFun("showDelpassword")\'>\n                    </div>\n                    <a href="javascript:;" v-show=\'password && showDel.showDelpassword\' @click=\'password=""\' class="tel-del"><i class="ff-icon ff-del"></i></a>\n                </div>\n            </div>\n            <section>\n                <a href="javascript:;" class="yo-btn yo-btn-login yo-btn-l yo-btn-stacked" :class=\'{"yo-btn-login-light" : accountNum && password}\' @click=\'checkLogin(2)\'>登录</a>\n            </section>\n            <p class="forget-pwd">\n                <a href="/wechat/account/forgetPassword.html?userTel={{accountNum}}&fromPage=userLogin">忘记密码</a>\n            </p>\n        </div>\n        <!-- 密码登录模块 end-->\n    </div>\n\n    <alert :alert.sync="alert"></alert>\n    <loading :loading.sync="loading"></loading>\n    <service-protocol :service-show.sync="serviceShow"></service-protocol>\n</div>', t.exports = n
}]);