! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/home/q/deploy/from/prod/wechatV2-20180202-115428/dist/js/", e(e.s = 256)
}([, , function(t, e, i) {
    "use strict";

    function n(t) {
        P && (t._devtoolHook = P, P.emit("vuex:init", t), P.on("vuex:travel-to-state", function(e) {
            t.replaceState(e)
        }), t.subscribe(function(t, e) {
            P.emit("vuex:mutation", t, e)
        }))
    }

    function r(t, e) {
        Object.keys(t).forEach(function(i) {
            return e(t[i], i)
        })
    }

    function o(t) {
        return null !== t && "object" == typeof t
    }

    function a(t) {
        return t && "function" == typeof t.then
    }

    function s(t, e, i) {
        if (e.update(i), i.modules)
            for (var n in i.modules) {
                if (!e.getChild(n)) return;
                s(t.concat(n), e.getChild(n), i.modules[n])
            }
    }

    function l(t, e) {
        return e.indexOf(t) < 0 && e.push(t),
            function() {
                var i = e.indexOf(t);
                i > -1 && e.splice(i, 1)
            }
    }

    function h(t, e) {
        t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), t._modulesNamespaceMap = Object.create(null);
        var i = t.state;
        c(t, i, [], t._modules.root, !0), u(t, i, e)
    }

    function u(t, e, i) {
        var n = t._vm;
        t.getters = {};
        var o = t._wrappedGetters,
            a = {};
        r(o, function(e, i) {
            a[i] = function() {
                return e(t)
            }, Object.defineProperty(t.getters, i, {
                get: function() {
                    return t._vm[i]
                },
                enumerable: !0
            })
        });
        var s = M.config.silent;
        M.config.silent = !0, t._vm = new M({
            data: {
                $$state: e
            },
            computed: a
        }), M.config.silent = s, t.strict && g(t), n && (i && t._withCommit(function() {
            n._data.$$state = null
        }), M.nextTick(function() {
            return n.$destroy()
        }))
    }

    function c(t, e, i, n, r) {
        var o = !i.length,
            a = t._modules.getNamespace(i);
        if (n.namespaced && (t._modulesNamespaceMap[a] = n), !o && !r) {
            var s = _(e, i.slice(0, -1)),
                l = i[i.length - 1];
            t._withCommit(function() {
                M.set(s, l, n.state)
            })
        }
        var h = n.context = f(t, a, i);
        n.forEachMutation(function(e, i) {
            var n = a + i;
            d(t, n, e, h)
        }), n.forEachAction(function(e, i) {
            var n = e.root ? i : a + i,
                r = e.handler || e;
            m(t, n, r, h)
        }), n.forEachGetter(function(e, i) {
            var n = a + i;
            v(t, n, e, h)
        }), n.forEachChild(function(n, o) {
            c(t, e, i.concat(o), n, r)
        })
    }

    function f(t, e, i) {
        var n = "" === e,
            r = {
                dispatch: n ? t.dispatch : function(i, n, r) {
                    var o = y(i, n, r),
                        a = o.payload,
                        s = o.options,
                        l = o.type;
                    return s && s.root || (l = e + l), t.dispatch(l, a)
                },
                commit: n ? t.commit : function(i, n, r) {
                    var o = y(i, n, r),
                        a = o.payload,
                        s = o.options,
                        l = o.type;
                    s && s.root || (l = e + l), t.commit(l, a, s)
                }
            };
        return Object.defineProperties(r, {
            getters: {
                get: n ? function() {
                    return t.getters
                } : function() {
                    return p(t, e)
                }
            },
            state: {
                get: function() {
                    return _(t.state, i)
                }
            }
        }), r
    }

    function p(t, e) {
        var i = {},
            n = e.length;
        return Object.keys(t.getters).forEach(function(r) {
            if (r.slice(0, n) === e) {
                var o = r.slice(n);
                Object.defineProperty(i, o, {
                    get: function() {
                        return t.getters[r]
                    },
                    enumerable: !0
                })
            }
        }), i
    }

    function d(t, e, i, n) {
        var r = t._mutations[e] || (t._mutations[e] = []);
        r.push(function(e) {
            i.call(t, n.state, e)
        })
    }

    function m(t, e, i, n) {
        var r = t._actions[e] || (t._actions[e] = []);
        r.push(function(e, r) {
            var o = i.call(t, {
                dispatch: n.dispatch,
                commit: n.commit,
                getters: n.getters,
                state: n.state,
                rootGetters: t.getters,
                rootState: t.state
            }, e, r);
            return a(o) || (o = Promise.resolve(o)), t._devtoolHook ? o["catch"](function(e) {
                throw t._devtoolHook.emit("vuex:error", e), e
            }) : o
        })
    }

    function v(t, e, i, n) {
        t._wrappedGetters[e] || (t._wrappedGetters[e] = function(t) {
            return i(n.state, n.getters, t.state, t.getters)
        })
    }

    function g(t) {
        t._vm.$watch(function() {
            return this._data.$$state
        }, function() {}, {
            deep: !0,
            sync: !0
        })
    }

    function _(t, e) {
        return e.length ? e.reduce(function(t, e) {
            return t[e]
        }, t) : t
    }

    function y(t, e, i) {
        return o(t) && t.type && (i = e, e = t, t = t.type), {
            type: t,
            payload: e,
            options: i
        }
    }

    function x(t) {
        M && t === M || (M = t, S(M))
    }

    function w(t) {
        return Array.isArray(t) ? t.map(function(t) {
            return {
                key: t,
                val: t
            }
        }) : Object.keys(t).map(function(e) {
            return {
                key: e,
                val: t[e]
            }
        })
    }

    function b(t) {
        return function(e, i) {
            return "string" != typeof e ? (i = e, e = "") : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, i)
        }
    }

    function T(t, e, i) {
        var n = t._modulesNamespaceMap[i];
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i.d(e, "Store", function() {
        return O
    }), i.d(e, "install", function() {
        return x
    }), i.d(e, "mapState", function() {
        return D
    }), i.d(e, "mapMutations", function() {
        return I
    }), i.d(e, "mapGetters", function() {
        return L
    }), i.d(e, "mapActions", function() {
        return R
    }), i.d(e, "createNamespacedHelpers", function() {
        return z
    });
    var S = function(t) {
            function e() {
                var t = this.$options;
                t.store ? this.$store = "function" == typeof t.store ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store)
            }
            var i = Number(t.version.split(".")[0]);
            if (i >= 2) t.mixin({
                beforeCreate: e
            });
            else {
                var n = t.prototype._init;
                t.prototype._init = function(t) {
                    void 0 === t && (t = {}), t.init = t.init ? [e].concat(t.init) : e, n.call(this, t)
                }
            }
        },
        P = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        k = function(t, e) {
            this.runtime = e, this._children = Object.create(null), this._rawModule = t;
            var i = t.state;
            this.state = ("function" == typeof i ? i() : i) || {}
        },
        C = {
            namespaced: {
                configurable: !0
            }
        };
    C.namespaced.get = function() {
        return !!this._rawModule.namespaced
    }, k.prototype.addChild = function(t, e) {
        this._children[t] = e
    }, k.prototype.removeChild = function(t) {
        delete this._children[t]
    }, k.prototype.getChild = function(t) {
        return this._children[t]
    }, k.prototype.update = function(t) {
        this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters)
    }, k.prototype.forEachChild = function(t) {
        r(this._children, t)
    }, k.prototype.forEachGetter = function(t) {
        this._rawModule.getters && r(this._rawModule.getters, t)
    }, k.prototype.forEachAction = function(t) {
        this._rawModule.actions && r(this._rawModule.actions, t)
    }, k.prototype.forEachMutation = function(t) {
        this._rawModule.mutations && r(this._rawModule.mutations, t)
    }, Object.defineProperties(k.prototype, C);
    var A = function(t) {
        this.register([], t, !1)
    };
    A.prototype.get = function(t) {
        return t.reduce(function(t, e) {
            return t.getChild(e)
        }, this.root)
    }, A.prototype.getNamespace = function(t) {
        var e = this.root;
        return t.reduce(function(t, i) {
            return e = e.getChild(i), t + (e.namespaced ? i + "/" : "")
        }, "")
    }, A.prototype.update = function(t) {
        s([], this.root, t)
    }, A.prototype.register = function(t, e, i) {
        var n = this;
        void 0 === i && (i = !0);
        var o = new k(e, i);
        if (0 === t.length) this.root = o;
        else {
            var a = this.get(t.slice(0, -1));
            a.addChild(t[t.length - 1], o)
        }
        e.modules && r(e.modules, function(e, r) {
            n.register(t.concat(r), e, i)
        })
    }, A.prototype.unregister = function(t) {
        var e = this.get(t.slice(0, -1)),
            i = t[t.length - 1];
        e.getChild(i).runtime && e.removeChild(i)
    };
    var M, O = function B(t) {
            var e = this;
            void 0 === t && (t = {}), !M && "undefined" != typeof window && window.Vue && x(window.Vue);
            var i = t.plugins;
            void 0 === i && (i = []);
            var r = t.strict;
            void 0 === r && (r = !1);
            var o = t.state;
            void 0 === o && (o = {}), "function" == typeof o && (o = o() || {}), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new A(t), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new M;
            var a = this,
                s = this,
                l = s.dispatch,
                h = s.commit;
            this.dispatch = function(t, e) {
                return l.call(a, t, e)
            }, this.commit = function(t, e, i) {
                return h.call(a, t, e, i)
            }, this.strict = r, c(this, o, [], this._modules.root), u(this, o), i.forEach(function(t) {
                return t(e)
            }), M.config.devtools && n(this)
        },
        E = {
            state: {
                configurable: !0
            }
        };
    E.state.get = function() {
        return this._vm._data.$$state
    }, E.state.set = function(t) {}, O.prototype.commit = function(t, e, i) {
        var n = this,
            r = y(t, e, i),
            o = r.type,
            a = r.payload,
            s = (r.options, {
                type: o,
                payload: a
            }),
            l = this._mutations[o];
        l && (this._withCommit(function() {
            l.forEach(function(t) {
                t(a)
            })
        }), this._subscribers.forEach(function(t) {
            return t(s, n.state)
        }))
    }, O.prototype.dispatch = function(t, e) {
        var i = this,
            n = y(t, e),
            r = n.type,
            o = n.payload,
            a = {
                type: r,
                payload: o
            },
            s = this._actions[r];
        if (s) return this._actionSubscribers.forEach(function(t) {
            return t(a, i.state)
        }), s.length > 1 ? Promise.all(s.map(function(t) {
            return t(o)
        })) : s[0](o)
    }, O.prototype.subscribe = function(t) {
        return l(t, this._subscribers)
    }, O.prototype.subscribeAction = function(t) {
        return l(t, this._actionSubscribers)
    }, O.prototype.watch = function(t, e, i) {
        var n = this;
        return this._watcherVM.$watch(function() {
            return t(n.state, n.getters)
        }, e, i)
    }, O.prototype.replaceState = function(t) {
        var e = this;
        this._withCommit(function() {
            e._vm._data.$$state = t
        })
    }, O.prototype.registerModule = function(t, e, i) {
        void 0 === i && (i = {}), "string" == typeof t && (t = [t]), this._modules.register(t, e), c(this, this.state, t, this._modules.get(t), i.preserveState), u(this, this.state)
    }, O.prototype.unregisterModule = function(t) {
        var e = this;
        "string" == typeof t && (t = [t]), this._modules.unregister(t), this._withCommit(function() {
            var i = _(e.state, t.slice(0, -1));
            M["delete"](i, t[t.length - 1])
        }), h(this)
    }, O.prototype.hotUpdate = function(t) {
        this._modules.update(t), h(this, !0)
    }, O.prototype._withCommit = function(t) {
        var e = this._committing;
        this._committing = !0, t(), this._committing = e
    }, Object.defineProperties(O.prototype, E);
    var D = b(function(t, e) {
            var i = {};
            return w(e).forEach(function(e) {
                var n = e.key,
                    r = e.val;
                i[n] = function() {
                    var e = this.$store.state,
                        i = this.$store.getters;
                    if (t) {
                        var n = T(this.$store, "mapState", t);
                        if (!n) return;
                        e = n.context.state, i = n.context.getters
                    }
                    return "function" == typeof r ? r.call(this, e, i) : e[r]
                }, i[n].vuex = !0
            }), i
        }),
        I = b(function(t, e) {
            var i = {};
            return w(e).forEach(function(e) {
                var n = e.key,
                    r = e.val;
                i[n] = function() {
                    for (var e = [], i = arguments.length; i--;) e[i] = arguments[i];
                    var n = this.$store.commit;
                    if (t) {
                        var o = T(this.$store, "mapMutations", t);
                        if (!o) return;
                        n = o.context.commit
                    }
                    return "function" == typeof r ? r.apply(this, [n].concat(e)) : n.apply(this.$store, [r].concat(e))
                }
            }), i
        }),
        L = b(function(t, e) {
            var i = {};
            return w(e).forEach(function(e) {
                var n = e.key,
                    r = e.val;
                r = t + r, i[n] = function() {
                    if (!t || T(this.$store, "mapGetters", t)) return this.$store.getters[r]
                }, i[n].vuex = !0
            }), i
        }),
        R = b(function(t, e) {
            var i = {};
            return w(e).forEach(function(e) {
                var n = e.key,
                    r = e.val;
                i[n] = function() {
                    for (var e = [], i = arguments.length; i--;) e[i] = arguments[i];
                    var n = this.$store.dispatch;
                    if (t) {
                        var o = T(this.$store, "mapActions", t);
                        if (!o) return;
                        n = o.context.dispatch
                    }
                    return "function" == typeof r ? r.apply(this, [n].concat(e)) : n.apply(this.$store, [r].concat(e))
                }
            }), i
        }),
        z = function(t) {
            return {
                mapState: D.bind(null, t),
                mapGetters: L.bind(null, t),
                mapMutations: I.bind(null, t),
                mapActions: R.bind(null, t)
            }
        },
        F = {
            Store: O,
            install: x,
            version: "2.5.0",
            mapState: D,
            mapMutations: I,
            mapGetters: L,
            mapActions: R,
            createNamespacedHelpers: z
        };
    e["default"] = F
}, function(t, e) {
    function i(t, e) {
        W[t] = e
    }

    function n(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t,
            i = j.call(t);
        if ("[object Array]" === i) {
            e = [];
            for (var r = 0, o = t.length; r < o; r++) e[r] = n(t[r])
        } else if (N[i]) {
            var a = t.constructor;
            if (t.constructor.from) e = a.from(t);
            else {
                e = new a(t.length);
                for (var r = 0, o = t.length; r < o; r++) e[r] = n(t[r])
            }
        } else if (!B[i] && !L(t) && !P(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = n(t[s]))
        }
        return e
    }

    function r(t, e, i) {
        if (!T(e) || !T(t)) return i ? n(e) : t;
        for (var o in e)
            if (e.hasOwnProperty(o)) {
                var a = t[o],
                    s = e[o];
                !T(s) || !T(a) || x(s) || x(a) || P(s) || P(a) || S(s) || S(a) || L(s) || L(a) ? !i && o in t || (t[o] = n(e[o], !0)) : r(a, s, i)
            }
        return t
    }

    function o(t, e) {
        for (var i = t[0], n = 1, o = t.length; n < o; n++) i = r(i, t[n], e);
        return i
    }

    function a(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function s(t, e, i) {
        for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
        return t
    }

    function l() {
        return G || (G = q().getContext("2d")), G
    }

    function h(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0, n = t.length; i < n; i++)
                if (t[i] === e) return i
        }
        return -1
    }

    function u(t, e) {
        function i() {}
        var n = t.prototype;
        i.prototype = e.prototype, t.prototype = new i;
        for (var r in n) t.prototype[r] = n[r];
        t.prototype.constructor = t, t.superClass = e
    }

    function c(t, e, i) {
        t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, i)
    }

    function f(t) {
        if (t) return "string" != typeof t && "number" == typeof t.length
    }

    function p(t, e, i) {
        if (t && e)
            if (t.forEach && t.forEach === $) t.forEach(e, i);
            else if (t.length === +t.length)
                for (var n = 0, r = t.length; n < r; n++) e.call(i, t[n], n, t);
            else
                for (var o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t)
    }

    function d(t, e, i) {
        if (t && e) {
            if (t.map && t.map === U) return t.map(e, i);
            for (var n = [], r = 0, o = t.length; r < o; r++) n.push(e.call(i, t[r], r, t));
            return n
        }
    }

    function m(t, e, i, n) {
        if (t && e) {
            if (t.reduce && t.reduce === Y) return t.reduce(e, i, n);
            for (var r = 0, o = t.length; r < o; r++) i = e.call(n, i, t[r], r, t);
            return i
        }
    }

    function v(t, e, i) {
        if (t && e) {
            if (t.filter && t.filter === V) return t.filter(e, i);
            for (var n = [], r = 0, o = t.length; r < o; r++) e.call(i, t[r], r, t) && n.push(t[r]);
            return n
        }
    }

    function g(t, e, i) {
        if (t && e)
            for (var n = 0, r = t.length; n < r; n++)
                if (e.call(i, t[n], n, t)) return t[n]
    }

    function _(t, e) {
        var i = H.call(arguments, 2);
        return function() {
            return t.apply(e, i.concat(H.call(arguments)))
        }
    }

    function y(t) {
        var e = H.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(H.call(arguments)))
        }
    }

    function x(t) {
        return "[object Array]" === j.call(t)
    }

    function w(t) {
        return "function" == typeof t
    }

    function b(t) {
        return "[object String]" === j.call(t)
    }

    function T(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" == e
    }

    function S(t) {
        return !!B[j.call(t)]
    }

    function P(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function k(t) {
        return t !== t
    }

    function C(t) {
        for (var e = 0, i = arguments.length; e < i; e++)
            if (null != arguments[e]) return arguments[e]
    }

    function A(t, e) {
        return null != t ? t : e
    }

    function M(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function O() {
        return Function.call.apply(H, arguments)
    }

    function E(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function D(t, e) {
        if (!t) throw new Error(e)
    }

    function I(t) {
        t[Z] = !0
    }

    function L(t) {
        return t[Z]
    }

    function R(t) {
        t && p(t, function(t, e) {
            this.set(e, t)
        }, this)
    }

    function z(t) {
        return new R(t)
    }

    function F() {}
    var B = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        },
        N = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        },
        j = Object.prototype.toString,
        X = Array.prototype,
        $ = X.forEach,
        V = X.filter,
        H = X.slice,
        U = X.map,
        Y = X.reduce,
        W = {},
        q = function() {
            return W.createCanvas()
        };
    W.createCanvas = function() {
        return document.createElement("canvas")
    };
    var G, Z = "__ec_primitive__",
        K = "_ec_",
        Q = 4;
    R.prototype = {
        constructor: R,
        get: function(t) {
            return this[K + t]
        },
        set: function(t, e) {
            return this[K + t] = e, e
        },
        each: function(t, e) {
            void 0 !== e && (t = _(t, e));
            for (var i in this) this.hasOwnProperty(i) && t(this[i], i.slice(Q))
        },
        removeKey: function(t) {
            delete this[K + t]
        }
    }, e.$override = i, e.clone = n, e.merge = r, e.mergeAll = o, e.extend = a, e.defaults = s, e.createCanvas = q, e.getContext = l, e.indexOf = h, e.inherits = u, e.mixin = c, e.isArrayLike = f, e.each = p, e.map = d, e.reduce = m, e.filter = v, e.find = g, e.bind = _, e.curry = y, e.isArray = x, e.isFunction = w, e.isString = b, e.isObject = T, e.isBuiltInObject = S, e.isDom = P, e.eqNaN = k, e.retrieve = C, e.retrieve2 = A, e.retrieve3 = M, e.slice = O, e.normalizeCssArray = E, e.assert = D, e.setAsPrimitive = I, e.isPrimitive = L, e.createHashMap = z, e.noop = F
}, , , function(t, e) {
    var i = t.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = i)
}, function(t, e) {
    var i = Array.isArray;
    t.exports = i
}, , , , function(t, e, i) {
    t.exports = {
        "default": i(114),
        __esModule: !0
    }
}, function(t, e) {
    function i(t, e) {
        var i = new T(2);
        return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i
    }

    function n(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function r(t) {
        var e = new T(2);
        return e[0] = t[0], e[1] = t[1], e
    }

    function o(t, e, i) {
        return t[0] = e, t[1] = i, t
    }

    function a(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
    }

    function s(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
    }

    function l(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
    }

    function h(t) {
        return Math.sqrt(u(t))
    }

    function u(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function c(t, e, i) {
        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
    }

    function f(t, e, i) {
        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
    }

    function p(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function d(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t
    }

    function m(t, e) {
        var i = h(e);
        return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
    }

    function v(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function g(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function _(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }

    function y(t, e, i, n) {
        return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
    }

    function x(t, e, i) {
        var n = e[0],
            r = e[1];
        return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
    }

    function w(t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
    }

    function b(t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
    }
    var T = "undefined" == typeof Float32Array ? Array : Float32Array,
        S = h,
        P = u,
        k = v,
        C = g;
    e.create = i, e.copy = n, e.clone = r, e.set = o, e.add = a, e.scaleAndAdd = s, e.sub = l, e.len = h, e.length = S, e.lenSquare = u, e.lengthSquare = P, e.mul = c, e.div = f, e.dot = p, e.scale = d, e.normalize = m, e.distance = v, e.dist = k, e.distanceSquare = g, e.distSquare = C, e.negate = _, e.lerp = y, e.applyTransform = x, e.min = w, e.max = b
}, , function(t, e, i) {
    "use strict";

    function n(t) {
        return "[object Array]" === S.call(t)
    }

    function r(t) {
        return "[object ArrayBuffer]" === S.call(t)
    }

    function o(t) {
        return "undefined" != typeof FormData && t instanceof FormData
    }

    function a(t) {
        var e;
        return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
    }

    function s(t) {
        return "string" == typeof t
    }

    function l(t) {
        return "number" == typeof t
    }

    function h(t) {
        return "undefined" == typeof t
    }

    function u(t) {
        return null !== t && "object" == typeof t
    }

    function c(t) {
        return "[object Date]" === S.call(t)
    }

    function f(t) {
        return "[object File]" === S.call(t)
    }

    function p(t) {
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

    function _() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }

    function y(t, e) {
        if (null !== t && "undefined" != typeof t)
            if ("object" == typeof t || n(t) || (t = [t]), n(t))
                for (var i = 0, r = t.length; i < r; i++) e.call(null, t[i], i, t);
            else
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
    }

    function x() {
        function t(t, i) {
            "object" == typeof e[i] && "object" == typeof t ? e[i] = x(e[i], t) : e[i] = t
        }
        for (var e = {}, i = 0, n = arguments.length; i < n; i++) y(arguments[i], t);
        return e
    }

    function w(t, e, i) {
        return y(e, function(e, n) {
            i && "function" == typeof e ? t[n] = b(e, i) : t[n] = e
        }), t
    }
    var b = i(164),
        T = i(115),
        S = Object.prototype.toString;
    t.exports = {
        isArray: n,
        isArrayBuffer: r,
        isBuffer: T,
        isFormData: o,
        isArrayBufferView: a,
        isString: s,
        isNumber: l,
        isObject: u,
        isUndefined: h,
        isDate: c,
        isFile: f,
        isBlob: p,
        isFunction: d,
        isStream: m,
        isURLSearchParams: v,
        isStandardBrowserEnv: _,
        forEach: y,
        merge: x,
        extend: w,
        trim: g
    }
}, function(t, e, i) {
    function n(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function r(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }
    var o = i(3),
        a = {},
        s = 1e-4;
    a.linearMap = function(t, e, i, n) {
        var r = e[1] - e[0],
            o = i[1] - i[0];
        if (0 === r) return 0 === o ? i[0] : (i[0] + i[1]) / 2;
        if (n)
            if (r > 0) {
                if (t <= e[0]) return i[0];
                if (t >= e[1]) return i[1]
            } else {
                if (t >= e[0]) return i[0];
                if (t <= e[1]) return i[1]
            }
        else {
            if (t === e[0]) return i[0];
            if (t === e[1]) return i[1]
        }
        return (t - e[0]) / r * o + i[0]
    }, a.parsePercent = function(t, e) {
        switch (t) {
            case "center":
            case "middle":
                t = "50%";
                break;
            case "left":
            case "top":
                t = "0%";
                break;
            case "right":
            case "bottom":
                t = "100%"
        }
        return "string" == typeof t ? n(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
    }, a.round = function(t, e, i) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), i ? t : +t
    }, a.asc = function(t) {
        return t.sort(function(t, e) {
            return t - e
        }), t
    }, a.getPrecision = function(t) {
        if (t = +t, isNaN(t)) return 0;
        for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
        return i
    }, a.getPrecisionSafe = function(t) {
        var e = t.toString(),
            i = e.indexOf("e");
        if (i > 0) {
            var n = +e.slice(i + 1);
            return n < 0 ? -n : 0
        }
        var r = e.indexOf(".");
        return r < 0 ? 0 : e.length - 1 - r
    }, a.getPixelPrecision = function(t, e) {
        var i = Math.log,
            n = Math.LN10,
            r = Math.floor(i(t[1] - t[0]) / n),
            o = Math.round(i(Math.abs(e[1] - e[0])) / n),
            a = Math.min(Math.max(-r + o, 0), 20);
        return isFinite(a) ? a : 20
    }, a.getPercentWithPrecision = function(t, e, i) {
        if (!t[e]) return 0;
        var n = o.reduce(t, function(t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === n) return 0;
        for (var r = Math.pow(10, i), a = o.map(t, function(t) {
            return (isNaN(t) ? 0 : t) / n * r * 100
        }), s = 100 * r, l = o.map(a, function(t) {
            return Math.floor(t)
        }), h = o.reduce(l, function(t, e) {
            return t + e
        }, 0), u = o.map(a, function(t, e) {
            return t - l[e]
        }); h < s;) {
            for (var c = Number.NEGATIVE_INFINITY, f = null, p = 0, d = u.length; p < d; ++p) u[p] > c && (c = u[p], f = p);
            ++l[f], u[f] = 0, ++h
        }
        return l[e] / r
    }, a.MAX_SAFE_INTEGER = 9007199254740991, a.remRadian = function(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }, a.isRadianAroundZero = function(t) {
        return t > -s && t < s
    };
    var l = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
    a.parseDate = function(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = l.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
                var i = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date((+e[1]), +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, (+(e[5] || 0)), +e[6] || 0, +e[7] || 0)
        }
        return null == t ? new Date(NaN) : new Date(Math.round(t))
    }, a.quantity = function(t) {
        return Math.pow(10, r(t))
    }, a.nice = function(t, e) {
        var i, n = r(t),
            o = Math.pow(10, n),
            a = t / o;
        return i = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, t = i * o, n >= -20 ? +t.toFixed(n < 0 ? -n : 0) : t
    }, a.reformIntervals = function(t) {
        function e(t, i, n) {
            return t.interval[n] < i.interval[n] || t.interval[n] === i.interval[n] && (t.close[n] - i.close[n] === (n ? -1 : 1) || !n && e(t, i, 1))
        }
        t.sort(function(t, i) {
            return e(t, i, 0) ? -1 : 1
        });
        for (var i = -(1 / 0), n = 1, r = 0; r < t.length;) {
            for (var o = t[r].interval, a = t[r].close, s = 0; s < 2; s++) o[s] <= i && (o[s] = i, a[s] = s ? 1 : 1 - n), i = o[s], n = a[s];
            o[0] === o[1] && a[0] * a[1] !== 1 ? t.splice(r, 1) : r++
        }
        return t
    }, a.isNumeric = function(t) {
        return t - parseFloat(t) >= 0
    }, t.exports = a
}, function(t, e, i) {
    function n(t) {
        r.call(this, t), this.path = null
    }
    var r = i(119),
        o = i(3),
        a = i(81),
        s = i(291),
        l = i(179),
        h = l.prototype.getCanvasPattern,
        u = Math.abs,
        c = new a((!0));
    n.prototype = {
        constructor: n,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        brush: function(t, e) {
            var i = this.style,
                n = this.path || c,
                r = i.hasStroke(),
                o = i.hasFill(),
                a = i.fill,
                s = i.stroke,
                l = o && !!a.colorStops,
                u = r && !!s.colorStops,
                f = o && !!a.image,
                p = r && !!s.image;
            if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var d;
                l && (d = d || this.getBoundingRect(), this._fillGradient = i.getGradient(t, a, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, d))
            }
            l ? t.fillStyle = this._fillGradient : f && (t.fillStyle = h.call(a, t)), u ? t.strokeStyle = this._strokeGradient : p && (t.strokeStyle = h.call(s, t));
            var m = i.lineDash,
                v = i.lineDashOffset,
                g = !!t.setLineDash,
                _ = this.getGlobalScale();
            n.setScale(_[0], _[1]), this.__dirtyPath || m && !g && r ? (n.beginPath(t), m && !g && (n.setLineDash(m), n.setLineDashOffset(v)), this.buildPath(n, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), o && n.fill(t), m && g && (t.setLineDash(m), t.lineDashOffset = v), r && n.stroke(t), m && g && t.setLineDash([]), this.restoreTransform(t), null != i.text && this.drawRectText(t, this.getBoundingRect())
        },
        buildPath: function(t, e, i) {},
        createPathProxy: function() {
            this.path = new a
        },
        getBoundingRect: function() {
            var t = this._rect,
                e = this.style,
                i = !t;
            if (i) {
                var n = this.path;
                n || (n = this.path = new a), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || i) {
                    r.copy(t);
                    var o = e.lineWidth,
                        s = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), s > 1e-10 && (r.width += o / s, r.height += o / s, r.x -= o / s / 2, r.y -= o / s / 2)
                }
                return r
            }
            return t
        },
        contain: function(t, e) {
            var i = this.transformCoordToLocal(t, e),
                n = this.getBoundingRect(),
                r = this.style;
            if (t = i[0], e = i[1], n.contain(t, e)) {
                var o = this.path.data;
                if (r.hasStroke()) {
                    var a = r.lineWidth,
                        l = r.strokeNoScale ? this.getLineScale() : 1;
                    if (l > 1e-10 && (r.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), s.containStroke(o, a / l, t, e))) return !0
                }
                if (r.hasFill()) return s.contain(o, t, e)
            }
            return !1
        },
        dirty: function(t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
        },
        animateShape: function(t) {
            return this.animate("shape", t)
        },
        attrKV: function(t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : r.prototype.attrKV.call(this, t, e)
        },
        setShape: function(t, e) {
            var i = this.shape;
            if (i) {
                if (o.isObject(t))
                    for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
                else i[t] = e;
                this.dirty(!0)
            }
            return this
        },
        getLineScale: function() {
            var t = this.transform;
            return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1
        }
    }, n.extend = function(t) {
        var e = function(e) {
            n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var i = t.shape;
            if (i) {
                this.shape = this.shape || {};
                var r = this.shape;
                for (var o in i) !r.hasOwnProperty(o) && i.hasOwnProperty(o) && (r[o] = i[o])
            }
            t.init && t.init.call(this, e)
        };
        o.inherits(e, n);
        for (var i in t) "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
        return e
    }, o.inherits(n, r);
    var f = n;
    t.exports = f
}, , , function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (n) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, , , , , function(t, e, i) {
    function n(t, e) {
        return t && t.hasOwnProperty(e)
    }
    var r = i(32),
        o = i(15),
        a = i(33),
        s = i(3),
        l = s.each,
        h = s.isObject,
        u = {};
    u.normalizeToArray = function(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }, u.defaultEmphasis = function(t, e) {
        if (t)
            for (var i = t.emphasis = t.emphasis || {}, n = t.normal = t.normal || {}, r = 0, o = e.length; r < o; r++) {
                var a = e[r];
                !i.hasOwnProperty(a) && n.hasOwnProperty(a) && (i[a] = n[a])
            }
    }, u.TEXT_STYLE_OPTIONS = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"], u.getDataItemValue = function(t) {
        return t && (null == t.value ? t : t.value)
    }, u.isDataItemOption = function(t) {
        return h(t) && !(t instanceof Array)
    }, u.converDataValue = function(t, e) {
        var i = e && e.type;
        return "ordinal" === i ? t : ("time" === i && "number" != typeof t && null != t && "-" !== t && (t = +o.parseDate(t)), null == t || "" === t ? NaN : +t)
    }, u.createDataFormatModel = function(t, e) {
        var i = new a;
        return s.mixin(i, u.dataFormatMixin), i.seriesIndex = e.seriesIndex, i.name = e.name || "", i.mainType = e.mainType, i.subType = e.subType, i.getData = function() {
            return t
        }, i
    }, u.dataFormatMixin = {
        getDataParams: function(t, e) {
            var i = this.getData(e),
                n = this.getRawValue(t, e),
                o = i.getRawIndex(t),
                a = i.getName(t, !0),
                s = i.getRawDataItem(t),
                l = i.getItemVisual(t, "color");
            return {
                componentType: this.mainType,
                componentSubType: this.subType,
                seriesType: "series" === this.mainType ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: this.id,
                seriesName: this.name,
                name: a,
                dataIndex: o,
                data: s,
                dataType: e,
                value: n,
                color: l,
                marker: r.getTooltipMarker(l),
                $vars: ["seriesName", "name", "value"]
            }
        },
        getFormattedLabel: function(t, e, i, n, o) {
            e = e || "normal";
            var a = this.getData(i),
                s = a.getItemModel(t),
                l = this.getDataParams(t, i);
            null != n && l.value instanceof Array && (l.value = l.value[n]);
            var h = s.get([o || "label", e, "formatter"]);
            return "function" == typeof h ? (l.status = e, h(l)) : "string" == typeof h ? r.formatTpl(h, l) : void 0
        },
        getRawValue: function(t, e) {
            var i = this.getData(e),
                n = i.getRawDataItem(t);
            if (null != n) return !h(n) || n instanceof Array ? n : n.value
        },
        formatTooltip: s.noop
    }, u.mappingToExists = function(t, e) {
        e = (e || []).slice();
        var i = s.map(t || [], function(t, e) {
            return {
                exist: t
            }
        });
        return l(e, function(t, n) {
            if (h(t)) {
                for (var r = 0; r < i.length; r++)
                    if (!i[r].option && null != t.id && i[r].exist.id === t.id + "") return i[r].option = t, void(e[n] = null);
                for (var r = 0; r < i.length; r++) {
                    var o = i[r].exist;
                    if (!(i[r].option || null != o.id && null != t.id || null == t.name || u.isIdInner(t) || u.isIdInner(o) || o.name !== t.name + "")) return i[r].option = t, void(e[n] = null)
                }
            }
        }), l(e, function(t, e) {
            if (h(t)) {
                for (var n = 0; n < i.length; n++) {
                    var r = i[n].exist;
                    if (!i[n].option && !u.isIdInner(r) && null == t.id) {
                        i[n].option = t;
                        break
                    }
                }
                n >= i.length && i.push({
                    option: t
                })
            }
        }), i
    }, u.makeIdAndName = function(t) {
        var e = s.createHashMap();
        l(t, function(t, i) {
            var n = t.exist;
            n && e.set(n.id, t)
        }), l(t, function(t, i) {
            var n = t.option;
            s.assert(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
        }), l(t, function(t, i) {
            var n = t.exist,
                r = t.option,
                o = t.keyInfo;
            if (h(r)) {
                if (o.name = null != r.name ? r.name + "" : n ? n.name : "\0-", n) o.id = n.id;
                else if (null != r.id) o.id = r.id + "";
                else {
                    var a = 0;
                    do o.id = "\0" + o.name + "\0" + a++; while (e.get(o.id))
                }
                e.set(o.id, t)
            }
        })
    }, u.isIdInner = function(t) {
        return h(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
    }, u.compressBatches = function(t, e) {
        function i(t, e, i) {
            for (var n = 0, r = t.length; n < r; n++)
                for (var o = t[n].seriesId, a = u.normalizeToArray(t[n].dataIndex), s = i && i[o], l = 0, h = a.length; l < h; l++) {
                    var c = a[l];
                    s && s[c] ? s[c] = null : (e[o] || (e[o] = {}))[c] = 1
                }
        }

        function n(t, e) {
            var i = [];
            for (var r in t)
                if (t.hasOwnProperty(r) && null != t[r])
                    if (e) i.push(+r);
                    else {
                        var o = n(t[r], !0);
                        o.length && i.push({
                            seriesId: r,
                            dataIndex: o
                        })
                    }
            return i
        }
        var r = {},
            o = {};
        return i(t || [], r), i(e || [], o, r), [n(r), n(o)]
    }, u.queryDataIndex = function(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? s.isArray(e.dataIndex) ? s.map(e.dataIndex, function(e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? s.isArray(e.name) ? s.map(e.name, function(e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }, u.makeGetter = function() {
        var t = 0;
        return function() {
            var e = "\0__ec_prop_getter_" + t++;
            return function(t) {
                return t[e] || (t[e] = {})
            }
        }
    }(), u.parseFinder = function(t, e, i) {
        if (s.isString(e)) {
            var r = {};
            r[e + "Index"] = 0, e = r
        }
        var o = i && i.defaultMainType;
        !o || n(e, o + "Index") || n(e, o + "Id") || n(e, o + "Name") || (e[o + "Index"] = 0);
        var a = {};
        return l(e, function(n, r) {
            var n = e[r];
            if ("dataIndex" === r || "dataIndexInside" === r) return void(a[r] = n);
            var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
                l = o[1],
                h = (o[2] || "").toLowerCase();
            if (!(!l || !h || null == n || "index" === h && "none" === n || i && i.includeMainTypes && s.indexOf(i.includeMainTypes, l) < 0)) {
                var u = {
                    mainType: l
                };
                "index" === h && "all" === n || (u[h] = n);
                var c = t.queryComponents(u);
                a[l + "Models"] = c, a[l + "Model"] = c[0]
            }
        }), a
    }, u.dataDimToCoordDim = function(t, e) {
        var i = t.dimensions;
        e = t.getDimension(e);
        for (var n = 0; n < i.length; n++) {
            var r = t.getDimensionInfo(i[n]);
            if (r.name === e) return r.coordDim
        }
    }, u.coordDimToDataDim = function(t, e) {
        var i = [];
        return l(t.dimensions, function(n) {
            var r = t.getDimensionInfo(n);
            r.coordDim === e && (i[r.coordDimIndex] = r.name)
        }), i
    }, u.otherDimToDataDim = function(t, e) {
        var i = [];
        return l(t.dimensions, function(n) {
            var r = t.getDimensionInfo(n),
                o = r.otherDims,
                a = o[e];
            null != a && a !== !1 && (i[a] = r.name)
        }), i
    }, t.exports = u
}, function(t, e, i) {
    function n(t, e, i, n) {
        i < 0 && (t += i, i = -i), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n
    }
    var r = i(12),
        o = i(64),
        a = r.applyTransform,
        s = Math.min,
        l = Math.max;
    n.prototype = {
        constructor: n,
        union: function(t) {
            var e = s(t.x, this.x),
                i = s(t.y, this.y);
            this.width = l(t.x + t.width, this.x + this.width) - e, this.height = l(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
        },
        applyTransform: function() {
            var t = [],
                e = [],
                i = [],
                n = [];
            return function(r) {
                if (r) {
                    t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, a(t, t, r), a(e, e, r), a(i, i, r), a(n, n, r), this.x = s(t[0], e[0], i[0], n[0]), this.y = s(t[1], e[1], i[1], n[1]);
                    var o = l(t[0], e[0], i[0], n[0]),
                        h = l(t[1], e[1], i[1], n[1]);
                    this.width = o - this.x, this.height = h - this.y
                }
            }
        }(),
        calculateTransform: function(t) {
            var e = this,
                i = t.width / e.width,
                n = t.height / e.height,
                r = o.create();
            return o.translate(r, r, [-e.x, -e.y]), o.scale(r, r, [i, n]), o.translate(r, r, [t.x, t.y]), r
        },
        intersect: function(t) {
            if (!t) return !1;
            t instanceof n || (t = n.create(t));
            var e = this,
                i = e.x,
                r = e.x + e.width,
                o = e.y,
                a = e.y + e.height,
                s = t.x,
                l = t.x + t.width,
                h = t.y,
                u = t.y + t.height;
            return !(r < s || l < i || a < h || u < o)
        },
        contain: function(t, e) {
            var i = this;
            return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
        },
        clone: function() {
            return new n(this.x, this.y, this.width, this.height)
        },
        copy: function(t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        },
        plain: function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }
        }
    }, n.create = function(t) {
        return new n(t.x, t.y, t.width, t.height)
    };
    var h = n;
    t.exports = h
}, , , , , , function(t, e) {
    function i(t) {
        var e = {},
            i = {},
            n = t.match(/Firefox\/([\d.]+)/),
            r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
            o = t.match(/Edge\/([\d.]+)/),
            a = /micromessenger/i.test(t);
        return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), o && (i.edge = !0, i.version = o[1]), a && (i.weChat = !0), {
            browser: i,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
            pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 11)
        }
    }
    var n = {};
    n = "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        canvasSupported: !0,
        svgSupported: !0
    } : i(navigator.userAgent);
    var r = n;
    t.exports = r
}, function(t, e, i) {
    var n = i(3),
        r = i(15),
        o = i(63),
        a = {};
    a.addCommas = function(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
    }, a.toCamelCase = function(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
            return e.toUpperCase()
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
    }, a.normalizeCssArray = n.normalizeCssArray;
    var s = a.encodeHTML = function(t) {
            return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        },
        l = ["a", "b", "c", "d", "e", "f", "g"],
        h = function(t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        };
    a.formatTpl = function(t, e, i) {
        n.isArray(e) || (e = [e]);
        var r = e.length;
        if (!r) return "";
        for (var o = e[0].$vars || [], a = 0; a < o.length; a++) {
            var u = l[a],
                c = h(u, 0);
            t = t.replace(h(u), i ? s(c) : c)
        }
        for (var f = 0; f < r; f++)
            for (var p = 0; p < o.length; p++) {
                var c = e[f][o[p]];
                t = t.replace(h(l[p], f), i ? s(c) : c)
            }
        return t
    }, a.formatTplSimple = function(t, e, i) {
        return n.each(e, function(e, n) {
            t = t.replace("{" + n + "}", i ? s(e) : e)
        }), t
    }, a.getTooltipMarker = function(t, e) {
        return t ? '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + a.encodeHTML(t) + ";" + (e || "") + '"></span>' : ""
    };
    var u = function(t) {
        return t < 10 ? "0" + t : t
    };
    a.formatTime = function(t, e, i) {
        "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
        var n = r.parseDate(e),
            o = i ? "UTC" : "",
            a = n["get" + o + "FullYear"](),
            s = n["get" + o + "Month"]() + 1,
            l = n["get" + o + "Date"](),
            h = n["get" + o + "Hours"](),
            c = n["get" + o + "Minutes"](),
            f = n["get" + o + "Seconds"]();
        return t = t.replace("MM", u(s)).replace("M", s).replace("yyyy", a).replace("yy", a % 100).replace("dd", u(l)).replace("d", l).replace("hh", u(h)).replace("h", h).replace("mm", u(c)).replace("m", c).replace("ss", u(f)).replace("s", f)
    }, a.capitalFirst = function(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }, a.truncateText = o.truncateText, a.getTextRect = o.getBoundingRect, t.exports = a
}, function(t, e, i) {
    function n(t, e, i) {
        this.parentModel = e, this.ecModel = i, this.option = t
    }

    function r(t, e, i) {
        for (var n = 0; n < e.length && (!e[n] || (t = t && "object" == typeof t ? t[e[n]] : null, null != t)); n++);
        return null == t && i && (t = i.get(e)), t
    }

    function o(t, e) {
        var i = s.get(t, "getParent");
        return i ? i.call(t, e) : t.parentModel
    }
    var a = i(3),
        s = i(34),
        l = i(31);
    n.prototype = {
        constructor: n,
        init: null,
        mergeOption: function(t) {
            a.merge(this.option, t, !0)
        },
        get: function(t, e) {
            return null == t ? this.option : r(this.option, this.parsePath(t), !e && o(this, t))
        },
        getShallow: function(t, e) {
            var i = this.option,
                n = null == i ? i : i[t],
                r = !e && o(this, t);
            return null == n && r && (n = r.getShallow(t)), n
        },
        getModel: function(t, e) {
            var i, a = null == t ? this.option : r(this.option, t = this.parsePath(t));
            return e = e || (i = o(this, t)) && i.getModel(t), new n(a, e, this.ecModel)
        },
        isEmpty: function() {
            return null == this.option
        },
        restoreData: function() {},
        clone: function() {
            var t = this.constructor;
            return new t(a.clone(this.option))
        },
        setReadOnly: function(t) {
            s.setReadOnly(this, t)
        },
        parsePath: function(t) {
            return "string" == typeof t && (t = t.split(".")), t
        },
        customizeGetParent: function(t) {
            s.set(this, "getParent", t)
        },
        isAnimationEnabled: function() {
            if (!l.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    }, s.enableClassExtend(n);
    var h = a.mixin;
    h(n, i(282)), h(n, i(283)), h(n, i(284)), h(n, i(314)), t.exports = n
}, function(t, e, i) {
    function n(t) {
        a.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function r(t, e) {
        var i = a.slice(arguments, 2);
        return this.superClass.prototype[e].apply(t, i)
    }

    function o(t, e, i) {
        return this.superClass.prototype[e].apply(t, i)
    }
    var a = i(3),
        s = {},
        l = ".",
        h = "___EC__COMPONENT__CONTAINER___",
        u = "\0ec_\0";
    s.set = function(t, e, i) {
        return t[u + e] = i
    }, s.get = function(t, e) {
        return t[u + e]
    }, s.hasOwn = function(t, e) {
        return t.hasOwnProperty(u + e)
    };
    var c = s.parseClassType = function(t) {
        var e = {
            main: "",
            sub: ""
        };
        return t && (t = t.split(l), e.main = t[0] || "", e.sub = t[1] || ""), e
    };
    s.enableClassExtend = function(t, e) {
        t.$constructor = t, t.extend = function(t) {
            __DEV__ && a.each(e, function(e) {
                t[e] || console.warn("Method `" + e + "` should be implemented" + (t.type ? " in " + t.type : "") + ".")
            });
            var i = this,
                n = function() {
                    t.$constructor ? t.$constructor.apply(this, arguments) : i.apply(this, arguments)
                };
            return a.extend(n.prototype, t), n.extend = this.extend, n.superCall = r, n.superApply = o, a.inherits(n, this), n.superClass = i, n
        }
    }, s.enableClassManagement = function(t, e) {
        function i(t) {
            var e = r[t.main];
            return e && e[h] || (e = r[t.main] = {}, e[h] = !0), e
        }
        e = e || {};
        var r = {};
        if (t.registerClass = function(t, e) {
                if (e)
                    if (n(e), e = c(e), e.sub) {
                        if (e.sub !== h) {
                            var o = i(e);
                            o[e.sub] = t
                        }
                    } else __DEV__ && r[e.main] && console.warn(e.main + " exists."), r[e.main] = t;
                return t
            }, t.getClass = function(t, e, i) {
                var n = r[t];
                if (n && n[h] && (n = e ? n[e] : null), i && !n) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
                return n
            }, t.getClassesByMainType = function(t) {
                t = c(t);
                var e = [],
                    i = r[t.main];
                return i && i[h] ? a.each(i, function(t, i) {
                    i !== h && e.push(t)
                }) : e.push(i), e
            }, t.hasClass = function(t) {
                return t = c(t), !!r[t.main]
            }, t.getAllClassMainTypes = function() {
                var t = [];
                return a.each(r, function(e, i) {
                    t.push(i)
                }), t
            }, t.hasSubTypes = function(t) {
                t = c(t);
                var e = r[t.main];
                return e && e[h]
            }, t.parseClassType = c, e.registerWhenExtend) {
            var o = t.extend;
            o && (t.extend = function(e) {
                var i = o.call(this, e);
                return t.registerClass(i, e.type)
            })
        }
        return t
    }, s.setReadOnly = function(t, e) {}, t.exports = s
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return null != t && "none" != t
    }

    function r(t) {
        return "string" == typeof t ? P.lift(t, -.1) : t
    }

    function o(t) {
        if (t.__hoverStlDirty) {
            var e = t.style.stroke,
                i = t.style.fill,
                o = t.__hoverStl;
            o.fill = o.fill || (n(i) ? r(i) : null), o.stroke = o.stroke || (n(e) ? r(e) : null);
            var a = {};
            for (var s in o) null != o[s] && (a[s] = t.style[s]);
            t.__normalStl = a, t.__hoverStlDirty = !1
        }
    }

    function a(t) {
        if (!t.__isHover) {
            if (o(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl);
            else {
                var e = t.style,
                    i = e.insideRollbackOpt;
                i && x(e), e.extendFrom(t.__hoverStl), i && (y(e, e.insideOriginalTextPosition, i), null == e.textFill && (e.textFill = i.autoColor)), t.dirty(!1), t.z2 += 1
            }
            t.__isHover = !0
        }
    }

    function s(t) {
        if (t.__isHover) {
            var e = t.__normalStl;
            t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
        }
    }

    function l(t) {
        "group" === t.type ? t.traverse(function(t) {
            "group" !== t.type && a(t)
        }) : a(t)
    }

    function h(t) {
        "group" === t.type ? t.traverse(function(t) {
            "group" !== t.type && s(t)
        }) : s(t)
    }

    function u(t, e) {
        t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && o(t)
    }

    function c(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && l(this)
    }

    function f(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && h(this)
    }

    function p() {
        this.__isEmphasis = !0, l(this)
    }

    function d() {
        this.__isEmphasis = !1, h(this)
    }

    function m(t, e, i, n) {
        if (i = i || I, i.isRectText) {
            var r = e.getShallow("position") || (n ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var o = e.getShallow("rotate");
            null != o && (o *= Math.PI / 180), t.textRotation = o, t.textDistance = b.retrieve2(e.getShallow("distance"), n ? null : 5)
        }
        var a, s = e.ecModel,
            l = s && s.option.textStyle,
            h = v(e);
        if (h) {
            a = {};
            for (var u in h)
                if (h.hasOwnProperty(u)) {
                    var c = e.getModel(["rich", u]);
                    g(a[u] = {}, c, l, i, n)
                }
        }
        return t.rich = a, g(t, e, l, i, n, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), t
    }

    function v(t) {
        for (var e; t && t !== t.ecModel;) {
            var i = (t.option || I).rich;
            if (i) {
                e = e || {};
                for (var n in i) i.hasOwnProperty(n) && (e[n] = 1)
            }
            t = t.parentModel
        }
        return e
    }

    function g(t, e, i, n, r, o) {
        if (i = !r && i || I, t.textFill = _(e.getShallow("color"), n) || i.color, t.textStroke = _(e.getShallow("textBorderColor"), n) || i.textBorderColor, t.textStrokeWidth = b.retrieve2(e.getShallow("textBorderWidth"), i.textBorderWidth), !r) {
            if (o) {
                var a = t.textPosition;
                t.insideRollback = y(t, a, n), t.insideOriginalTextPosition = a, t.insideRollbackOpt = n
            }
            null == t.textFill && (t.textFill = n.autoColor)
        }
        t.fontStyle = e.getShallow("fontStyle") || i.fontStyle, t.fontWeight = e.getShallow("fontWeight") || i.fontWeight, t.fontSize = e.getShallow("fontSize") || i.fontSize, t.fontFamily = e.getShallow("fontFamily") || i.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), o && n.disableBox || (t.textBackgroundColor = _(e.getShallow("backgroundColor"), n), t.textPadding = e.getShallow("padding"), t.textBorderColor = _(e.getShallow("borderColor"), n), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY
    }

    function _(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }

    function y(t, e, i) {
        var n, r = i.useInsideStyle;
        return null == t.textFill && r !== !1 && (r === !0 || i.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (n = {
            textFill: null,
            textStroke: t.textStroke,
            textStrokeWidth: t.textStrokeWidth
        }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = i.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), n
    }

    function x(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth)
    }

    function w(t, e, i, n, r, o) {
        "function" == typeof r && (o = r, r = null);
        var a = n && n.isAnimationEnabled();
        if (a) {
            var s = t ? "Update" : "",
                l = n.getShallow("animationDuration" + s),
                h = n.getShallow("animationEasing" + s),
                u = n.getShallow("animationDelay" + s);
            "function" == typeof u && (u = u(r, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(i, l, u || 0, h, o, !!o) : (e.stopAnimation(), e.attr(i), o && o())
        } else e.stopAnimation(), e.attr(i), o && o()
    }
    var b = i(3),
        T = i(285),
        S = i(16),
        P = i(79),
        k = i(64),
        C = i(12),
        A = i(173),
        M = i(25),
        O = Math.round,
        E = Math.max,
        D = Math.min,
        I = {},
        L = {};
    L.Group = i(82), L.Image = i(180), L.Text = i(298), L.Circle = i(299), L.Sector = i(300), L.Ring = i(302), L.Polygon = i(303), L.Polyline = i(306), L.Rect = i(307), L.Line = i(308), L.BezierCurve = i(309), L.Arc = i(310), L.CompoundPath = i(311), L.LinearGradient = i(312), L.RadialGradient = i(313), L.BoundingRect = M, L.extendShape = function(t) {
        return S.extend(t)
    }, L.extendPath = function(t, e) {
        return T.extendFromString(t, e)
    }, L.makePath = function(t, e, i, n) {
        var r = T.createFromString(t, e),
            o = r.getBoundingRect();
        if (i) {
            var a = o.width / o.height;
            if ("center" === n) {
                var s, l = i.height * a;
                l <= i.width ? s = i.height : (l = i.width, s = l / a);
                var h = i.x + i.width / 2,
                    u = i.y + i.height / 2;
                i.x = h - l / 2, i.y = u - s / 2, i.width = l, i.height = s
            }
            L.resizePath(r, i)
        }
        return r
    }, L.mergePath = T.mergePath, L.resizePath = function(t, e) {
        if (t.applyTransform) {
            var i = t.getBoundingRect(),
                n = i.calculateTransform(e);
            t.applyTransform(n)
        }
    }, L.subPixelOptimizeLine = function(t) {
        var e = t.shape,
            i = t.style.lineWidth;
        return O(2 * e.x1) === O(2 * e.x2) && (e.x1 = e.x2 = R(e.x1, i, !0)), O(2 * e.y1) === O(2 * e.y2) && (e.y1 = e.y2 = R(e.y1, i, !0)), t
    }, L.subPixelOptimizeRect = function(t) {
        var e = t.shape,
            i = t.style.lineWidth,
            n = e.x,
            r = e.y,
            o = e.width,
            a = e.height;
        return e.x = R(e.x, i, !0), e.y = R(e.y, i, !0), e.width = Math.max(R(n + o, i, !1) - e.x, 0 === o ? 0 : 1), e.height = Math.max(R(r + a, i, !1) - e.y, 0 === a ? 0 : 1), t
    };
    var R = L.subPixelOptimize = function(t, e, i) {
        var n = O(2 * t);
        return (n + O(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
    };
    L.setHoverStyle = function(t, e, i) {
        t.__hoverSilentOnTouch = i && i.hoverSilentOnTouch, "group" === t.type ? t.traverse(function(t) {
            "group" !== t.type && u(t, e)
        }) : u(t, e), t.on("mouseover", c).on("mouseout", f), t.on("emphasis", p).on("normal", d)
    }, L.setLabelStyle = function(t, e, i, n, r, o, a) {
        r = r || I;
        var s = r.labelFetcher,
            l = r.labelDataIndex,
            h = r.labelDimIndex,
            u = i.getShallow("show"),
            c = n.getShallow("show"),
            f = u || c ? b.retrieve2(s ? s.getFormattedLabel(l, "normal", null, h) : null, r.defaultText) : null,
            p = u ? f : null,
            d = c ? b.retrieve2(s ? s.getFormattedLabel(l, "emphasis", null, h) : null, f) : null;
        null == p && null == d || (z(t, i, o, r), z(e, n, a, r, !0)), t.text = p, e.text = d
    };
    var z = L.setTextStyle = function(t, e, i, n, r) {
        return m(t, e, n, r), i && b.extend(t, i), t.host && t.host.dirty && t.host.dirty(!1), t
    };
    L.setText = function(t, e, i) {
        var n, r = {
            isRectText: !0
        };
        i === !1 ? n = !0 : r.autoColor = i, m(t, e, r, n), t.host && t.host.dirty && t.host.dirty(!1)
    }, L.getFont = function(t, e) {
        var i = e || e.getModel("textStyle");
        return [t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif"].join(" ")
    }, L.updateProps = function(t, e, i, n, r) {
        w(!0, t, e, i, n, r)
    }, L.initProps = function(t, e, i, n, r) {
        w(!1, t, e, i, n, r)
    }, L.getTransform = function(t, e) {
        for (var i = k.identity([]); t && t !== e;) k.mul(i, t.getLocalTransform(), i), t = t.parent;
        return i
    }, L.applyTransform = function(t, e, i) {
        return e && !b.isArrayLike(e) && (e = A.getLocalTransform(e)), i && (e = k.invert([], e)), C.applyTransform([], t, e)
    }, L.transformDirection = function(t, e, i) {
        var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            o = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return o = L.applyTransform(o, e, i), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
    }, L.groupTransition = function(t, e, i, n) {
        function r(t) {
            var e = {};
            return t.traverse(function(t) {
                !t.isGroup && t.anid && (e[t.anid] = t)
            }), e
        }

        function o(t) {
            var e = {
                position: C.clone(t.position),
                rotation: t.rotation
            };
            return t.shape && (e.shape = b.extend({}, t.shape)), e
        }
        if (t && e) {
            var a = r(t);
            e.traverse(function(t) {
                if (!t.isGroup && t.anid) {
                    var e = a[t.anid];
                    if (e) {
                        var n = o(t);
                        t.attr(o(e)), L.updateProps(t, n, i, t.dataIndex)
                    }
                }
            })
        }
    }, L.clipPointsByRect = function(t, e) {
        return b.map(t, function(t) {
            var i = t[0];
            i = E(i, e.x), i = D(i, e.x + e.width);
            var n = t[1];
            return n = E(n, e.y), n = D(n, e.y + e.height), [i, n]
        })
    }, L.clipRectByRect = function(t, e) {
        var i = E(t.x, e.x),
            n = D(t.x + t.width, e.x + e.width),
            r = E(t.y, e.y),
            o = D(t.y + t.height, e.y + e.height);
        if (n >= i && o >= r) return {
            x: i,
            y: r,
            width: n - i,
            height: o - r
        }
    }, L.createIcon = function(t, e, i) {
        e = b.extend({
            rectHover: !0
        }, e);
        var n = e.style = {
            strokeNoScale: !0
        };
        if (i = i || {
                x: -1,
                y: -1,
                width: 2,
                height: 2
            }, t) return 0 === t.indexOf("image://") ? (n.image = t.slice(8), b.defaults(n, i), new L.Image(e)) : L.makePath(t.replace("path://", ""), e, i, "center")
    }, t.exports = L
}, , , , , , function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r(t) {
        var e = JSON.parse(sessionStorage.getItem(f + t));
        return e && e.data
    }

    function o(t, e) {
        var i = {
            data: e
        };
        try {
            sessionStorage.setItem(f + t, (0, h["default"])(i))
        } catch (n) {}
    }

    function a(t) {
        (0, c["default"])(t) ? t.map(function(t) {
            sessionStorage.removeItem(f + t)
        }): "string" == typeof t && sessionStorage.removeItem(f + t)
    }

    function s() {
        sessionStorage.clear()
    }
    var l = i(11),
        h = n(l),
        u = i(7),
        c = n(u),
        f = "win-";
    t.exports = {
        get: r,
        set: o,
        clear: s,
        remove: a
    }
}, , , , , , , , function(t, e, i) {
    function n(t) {
        return t > -b && t < b
    }

    function r(t) {
        return t > b || t < -b
    }

    function o(t, e, i, n, r) {
        var o = 1 - r;
        return o * o * (o * t + 3 * r * e) + r * r * (r * n + 3 * o * i)
    }

    function a(t, e, i, n, r) {
        var o = 1 - r;
        return 3 * (((e - t) * o + 2 * (i - e) * r) * o + (n - i) * r * r)
    }

    function s(t, e, i, r, o, a) {
        var s = r + 3 * (e - i) - t,
            l = 3 * (i - 2 * e + t),
            h = 3 * (e - t),
            u = t - o,
            c = l * l - 3 * s * h,
            f = l * h - 9 * s * u,
            p = h * h - 3 * l * u,
            d = 0;
        if (n(c) && n(f))
            if (n(l)) a[0] = 0;
            else {
                var m = -h / l;
                m >= 0 && m <= 1 && (a[d++] = m)
            }
        else {
            var v = f * f - 4 * c * p;
            if (n(v)) {
                var g = f / c,
                    m = -l / s + g,
                    _ = -g / 2;
                m >= 0 && m <= 1 && (a[d++] = m), _ >= 0 && _ <= 1 && (a[d++] = _)
            } else if (v > 0) {
                var y = w(v),
                    b = c * l + 1.5 * s * (-f + y),
                    T = c * l + 1.5 * s * (-f - y);
                b = b < 0 ? -x(-b, P) : x(b, P), T = T < 0 ? -x(-T, P) : x(T, P);
                var m = (-l - (b + T)) / (3 * s);
                m >= 0 && m <= 1 && (a[d++] = m)
            } else {
                var k = (2 * c * l - 3 * s * f) / (2 * w(c * c * c)),
                    C = Math.acos(k) / 3,
                    A = w(c),
                    M = Math.cos(C),
                    m = (-l - 2 * A * M) / (3 * s),
                    _ = (-l + A * (M + S * Math.sin(C))) / (3 * s),
                    O = (-l + A * (M - S * Math.sin(C))) / (3 * s);
                m >= 0 && m <= 1 && (a[d++] = m), _ >= 0 && _ <= 1 && (a[d++] = _), O >= 0 && O <= 1 && (a[d++] = O)
            }
        }
        return d
    }

    function l(t, e, i, o, a) {
        var s = 6 * i - 12 * e + 6 * t,
            l = 9 * e + 3 * o - 3 * t - 9 * i,
            h = 3 * e - 3 * t,
            u = 0;
        if (n(l)) {
            if (r(s)) {
                var c = -h / s;
                c >= 0 && c <= 1 && (a[u++] = c)
            }
        } else {
            var f = s * s - 4 * l * h;
            if (n(f)) a[0] = -s / (2 * l);
            else if (f > 0) {
                var p = w(f),
                    c = (-s + p) / (2 * l),
                    d = (-s - p) / (2 * l);
                c >= 0 && c <= 1 && (a[u++] = c), d >= 0 && d <= 1 && (a[u++] = d)
            }
        }
        return u
    }

    function h(t, e, i, n, r, o) {
        var a = (e - t) * r + t,
            s = (i - e) * r + e,
            l = (n - i) * r + i,
            h = (s - a) * r + a,
            u = (l - s) * r + s,
            c = (u - h) * r + h;
        o[0] = t, o[1] = a, o[2] = h, o[3] = c, o[4] = c, o[5] = u, o[6] = l, o[7] = n
    }

    function u(t, e, i, n, r, a, s, l, h, u, c) {
        var f, p, d, m, v, g = .005,
            _ = 1 / 0;
        k[0] = h, k[1] = u;
        for (var x = 0; x < 1; x += .05) C[0] = o(t, i, r, s, x), C[1] = o(e, n, a, l, x), m = y(k, C), m < _ && (f = x, _ = m);
        _ = 1 / 0;
        for (var b = 0; b < 32 && !(g < T); b++) p = f - g, d = f + g, C[0] = o(t, i, r, s, p), C[1] = o(e, n, a, l, p), m = y(C, k), p >= 0 && m < _ ? (f = p, _ = m) : (A[0] = o(t, i, r, s, d), A[1] = o(e, n, a, l, d), v = y(A, k), d <= 1 && v < _ ? (f = d, _ = v) : g *= .5);
        return c && (c[0] = o(t, i, r, s, f), c[1] = o(e, n, a, l, f)), w(_)
    }

    function c(t, e, i, n) {
        var r = 1 - n;
        return r * (r * t + 2 * n * e) + n * n * i
    }

    function f(t, e, i, n) {
        return 2 * ((1 - n) * (e - t) + n * (i - e))
    }

    function p(t, e, i, o, a) {
        var s = t - 2 * e + i,
            l = 2 * (e - t),
            h = t - o,
            u = 0;
        if (n(s)) {
            if (r(l)) {
                var c = -h / l;
                c >= 0 && c <= 1 && (a[u++] = c)
            }
        } else {
            var f = l * l - 4 * s * h;
            if (n(f)) {
                var c = -l / (2 * s);
                c >= 0 && c <= 1 && (a[u++] = c)
            } else if (f > 0) {
                var p = w(f),
                    c = (-l + p) / (2 * s),
                    d = (-l - p) / (2 * s);
                c >= 0 && c <= 1 && (a[u++] = c), d >= 0 && d <= 1 && (a[u++] = d)
            }
        }
        return u
    }

    function d(t, e, i) {
        var n = t + i - 2 * e;
        return 0 === n ? .5 : (t - e) / n
    }

    function m(t, e, i, n, r) {
        var o = (e - t) * n + t,
            a = (i - e) * n + e,
            s = (a - o) * n + o;
        r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = i
    }

    function v(t, e, i, n, r, o, a, s, l) {
        var h, u = .005,
            f = 1 / 0;
        k[0] = a, k[1] = s;
        for (var p = 0; p < 1; p += .05) {
            C[0] = c(t, i, r, p), C[1] = c(e, n, o, p);
            var d = y(k, C);
            d < f && (h = p, f = d)
        }
        f = 1 / 0;
        for (var m = 0; m < 32 && !(u < T); m++) {
            var v = h - u,
                g = h + u;
            C[0] = c(t, i, r, v), C[1] = c(e, n, o, v);
            var d = y(C, k);
            if (v >= 0 && d < f) h = v, f = d;
            else {
                A[0] = c(t, i, r, g), A[1] = c(e, n, o, g);
                var _ = y(A, k);
                g <= 1 && _ < f ? (h = g, f = _) : u *= .5
            }
        }
        return l && (l[0] = c(t, i, r, h), l[1] = c(e, n, o, h)), w(f)
    }
    var g = i(12),
        _ = g.create,
        y = g.distSquare,
        x = Math.pow,
        w = Math.sqrt,
        b = 1e-8,
        T = 1e-4,
        S = w(3),
        P = 1 / 3,
        k = _(),
        C = _(),
        A = _();
    e.cubicAt = o, e.cubicDerivativeAt = a, e.cubicRootAt = s, e.cubicExtrema = l, e.cubicSubdivide = h, e.cubicProjectPoint = u, e.quadraticAt = c, e.quadraticDerivativeAt = f, e.quadraticRootAt = p, e.quadraticExtremum = d, e.quadraticSubdivide = m, e.quadraticProjectPoint = v
}, , , , , , , , , , , , function(t, e) {
    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === i || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
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

    function o(t) {
        if (c === clearTimeout) return clearTimeout(t);
        if ((c === n || !c) && clearTimeout) return c = clearTimeout, clearTimeout(t);
        try {
            return c(t)
        } catch (e) {
            try {
                return c.call(null, t)
            } catch (e) {
                return c.call(this, t)
            }
        }
    }

    function a() {
        m && p && (m = !1, p.length ? d = p.concat(d) : v = -1, d.length && s())
    }

    function s() {
        if (!m) {
            var t = r(a);
            m = !0;
            for (var e = d.length; e;) {
                for (p = d, d = []; ++v < e;) p && p[v].run();
                v = -1, e = d.length
            }
            p = null, m = !1, o(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function h() {}
    var u, c, f = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            u = i
        }
        try {
            c = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            c = n
        }
    }();
    var p, d = [],
        m = !1,
        v = -1;
    f.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        d.push(new l(t, e)), 1 !== d.length || m || r(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = h, f.addListener = h, f.once = h, f.off = h, f.removeListener = h, f.removeAllListeners = h, f.emit = h, f.prependListener = h, f.prependOnceListener = h, f.listeners = function(t) {
        return []
    }, f.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(t, e, i) {
    (function(e) {
        function n(t) {
            return function(e, i, n) {
                e = e && e.toLowerCase(), N.prototype[t].call(this, e, i, n)
            }
        }

        function r() {
            N.call(this)
        }

        function o(t, e, i) {
            function n(t, e) {
                return t.prio - e.prio
            }
            i = i || {}, "string" == typeof e && (e = ht[e]), this.id, this.group, this._dom = t;
            var o = this._zr = z.init(t, {
                renderer: i.renderer || "canvas",
                devicePixelRatio: i.devicePixelRatio,
                width: i.width,
                height: i.height
            });
            this._throttledZrFlush = R.throttle(F.bind(o.flush, o), 17);
            var e = F.clone(e);
            e && A(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new k, this._api = w(this), N.call(this), this._messageCenter = new r, this._initEvents(), this.resize = F.bind(this.resize, this), this._pendingActions = [], j(lt, n), j(ot, n), o.animation.on("frame", this._onframe, this), F.setAsPrimitive(this)
        }

        function a(t, e, i) {
            var n, r = this._model,
                o = this._coordSysMgr.getCoordinateSystems();
            e = L.parseFinder(r, e);
            for (var a = 0; a < o.length; a++) {
                var s = o[a];
                if (s[t] && null != (n = s[t](r, e, i))) return n
            }
            __DEV__ && console.warn("No coordinate system that supports " + t + " found by the given finder.")
        }

        function s(t, e, i, n, r) {
            function o(n) {
                n && n.__alive && n[e] && n[e](n.__model, a, t._api, i)
            }
            var a = t._model;
            if (!n) return void X(t._componentsViews.concat(t._chartsViews), o);
            var s = {};
            s[n + "Id"] = i[n + "Id"], s[n + "Index"] = i[n + "Index"], s[n + "Name"] = i[n + "Name"];
            var l = {
                mainType: n,
                query: s
            };
            r && (l.subType = r), a && a.eachComponent(l, function(e, i) {
                o(t["series" === n ? "_chartsMap" : "_componentsMap"][e.__viewId])
            }, t)
        }

        function l(t, e) {
            var i = t.type,
                n = t.escapeConnect,
                r = nt[i],
                o = r.actionInfo,
                a = (o.update || "update").split(":"),
                l = a.pop();
            a = null != a[0] && $(a[0]), this[Z] = !0;
            var h = [t],
                u = !1;
            t.batch && (u = !0, h = F.map(t.batch, function(e) {
                return e = F.defaults(F.extend({}, e), t), e.batch = null, e
            }));
            var c, f = [],
                p = "highlight" === i || "downplay" === i;
            X(h, function(t) {
                c = r.action(t, this._model, this._api), c = c || F.extend({}, t), c.type = o.event || c.type, f.push(c), p ? s(this, l, t, "series") : a && s(this, l, t, a.main, a.sub)
            }, this), "none" === l || p || a || (this[Q] ? (et.prepareAndUpdate.call(this, t), this[Q] = !1) : et[l].call(this, t)), c = u ? {
                type: o.event || i,
                escapeConnect: n,
                batch: f
            } : f[0], this[Z] = !1, !e && this._messageCenter.trigger(c.type, c)
        }

        function h(t) {
            for (var e = this._pendingActions; e.length;) {
                var i = e.shift();
                l.call(this, i, t)
            }
        }

        function u(t) {
            !t && this.trigger("updated")
        }

        function c(t, e, i) {
            var n = this._api;
            X(this._componentsViews, function(r) {
                var o = r.__model;
                r[t](o, e, n, i), x(o, r)
            }, this), e.eachSeries(function(r, o) {
                var a = this._chartsMap[r.__viewId];
                a[t](r, e, n, i), x(r, a), y(r, a)
            }, this), _(this._zr, e), X(st, function(t) {
                t(e, n)
            })
        }

        function f(t, e) {
            for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, r = i ? this._componentsMap : this._chartsMap, o = this._zr, a = 0; a < n.length; a++) n[a].__alive = !1;
            e[i ? "eachComponent" : "eachSeries"](function(t, a) {
                if (i) {
                    if ("series" === t) return
                } else a = t;
                var s = "_ec_" + a.id + "_" + a.type,
                    l = r[s];
                if (!l) {
                    var h = $(a.type),
                        u = i ? E.getClass(h.main, h.sub) : D.getClass(h.sub);
                    if (!u) return;
                    l = new u, l.init(e, this._api), r[s] = l, n.push(l), o.add(l.group)
                }
                a.__viewId = l.__id = s, l.__alive = !0, l.__model = a, l.group.__ecComponentInfo = {
                    mainType: a.mainType,
                    index: a.componentIndex
                }
            }, this);
            for (var a = 0; a < n.length;) {
                var s = n[a];
                s.__alive ? a++ : (o.remove(s.group), s.dispose(e, this._api), n.splice(a, 1), delete r[s.__id], s.__id = s.group.__ecComponentInfo = null)
            }
        }

        function p(t, e) {
            X(ot, function(i) {
                i.func(t, e)
            })
        }

        function d(t) {
            var e = {};
            t.eachSeries(function(t) {
                var i = t.get("stack"),
                    n = t.getData();
                if (i && "list" === n.type) {
                    var r = e[i];
                    e.hasOwnProperty(i) && r && (n.stackedOn = r), e[i] = n
                }
            })
        }

        function m(t, e) {
            var i = this._api;
            X(lt, function(n) {
                n.isLayout && n.func(t, i, e)
            })
        }

        function v(t, e, i) {
            var n = this._api;
            t.clearColorPalette(), t.eachSeries(function(t) {
                t.clearColorPalette()
            }), X(lt, function(r) {
                (!i || !r.isLayout) && r.func(t, n, e)
            })
        }

        function g(t, e) {
            var i = this._api;
            X(this._componentsViews, function(n) {
                var r = n.__model;
                n.render(r, t, i, e), x(r, n)
            }, this), X(this._chartsViews, function(t) {
                t.__alive = !1
            }, this), t.eachSeries(function(n, r) {
                var o = this._chartsMap[n.__viewId];
                o.__alive = !0, o.render(n, t, i, e), o.group.silent = !!n.get("silent"), x(n, o), y(n, o)
            }, this), _(this._zr, t), X(this._chartsViews, function(e) {
                e.__alive || e.remove(t, i)
            }, this)
        }

        function _(t, e) {
            var i = t.storage,
                n = 0;
            i.traverse(function(t) {
                t.isGroup || n++
            }), n > e.get("hoverLayerThreshold") && !T.node && i.traverse(function(t) {
                t.isGroup || (t.useHoverLayer = !0)
            })
        }

        function y(t, e) {
            var i = 0;
            e.group.traverse(function(t) {
                "group" === t.type || t.ignore || i++
            });
            var n = +t.get("progressive"),
                r = i > t.get("progressiveThreshold") && n && !T.node;
            r && e.group.traverse(function(t) {
                t.isGroup || (t.progressive = r ? Math.floor(i++/n):-1,r&&t.stopAnimation(!0))});var o=t.get("blendMode")||null;__DEV__&&!T.canvasSupported&&o&&"source-over"!==o&&console.warn("Only canvas support blendMode"),e.group.traverse(function(t){t.isGroup||t.setStyle("blend",o)})}function x(t,e){var i=t.get("z"),n=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=n&&(t.zlevel=n))})}function w(t){var e=t._coordSysMgr;return F.extend(new P(t),{getCoordinateSystems:F.bind(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var i=e.__ecComponentInfo;if(null!=i)return t._model.getComponent(i.mainType,i.index);e=e.parent}}})}function b(t){function e(t,e){for(var i=0;i<t.length;i++){var n=t[i];n[o]=e}}var i=0,n=1,r=2,o="__connectUpdateStatus";F.each(rt,function(a,s){t._messageCenter.on(s,function(a){if(ft[t.group]&&t[o]!==i){if(a&&a.escapeConnect)return;var s=t.makeActionFromEvent(a),l=[];F.each(ct,function(e){e!==t&&e.group===t.group&&l.push(e)}),e(l,i),X(l,function(t){t[o]!==n&&t.dispatchAction(s)}),e(l,r)}})})}"undefined"==typeof __DEV__&&("undefined"!=typeof window?window.__DEV__=!0:"undefined"!=typeof e&&(e.__DEV__=!0));var T=i(31),S=i(281),P=i(317),k=i(122),C=i(318),A=i(319),M=i(83),O=i(184),E=i(321),D=i(322),I=i(35),L=i(24),R=i(323),z=i(324),F=i(3),B=i(79),N=i(65),j=i(123),X=F.each,$=M.parseClassType,V=1e3,H=5e3,U=1e3,Y=2e3,W=3e3,q=4e3,G=5e3,Z="__flagInMainProcess",K="__hasGradientOrPatternBg",Q="__optionUpdated",J=/ ^ [a - zA - Z0 - 9 _] + $ / ; r.prototype.on = n("on"), r.prototype.off = n("off"), r.prototype.one = n("one"), F.mixin(r, N);
        var tt = o.prototype; tt._onframe = function() {
            if (this[Q]) {
                var t = this[Q].silent;
                this[Z] = !0, et.prepareAndUpdate.call(this), this[Z] = !1, this[Q] = !1, h.call(this, t), u.call(this, t)
            }
        }, tt.getDom = function() {
            return this._dom
        }, tt.getZr = function() {
            return this._zr
        }, tt.setOption = function(t, e, i) {
            __DEV__ && F.assert(!this[Z], "`setOption` should not be called during main process.");
            var n;
            if (F.isObject(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[Z] = !0, !this._model || e) {
                var r = new C(this._api),
                    o = this._theme,
                    a = this._model = new S(null, null, o, r);
                a.init(null, null, o, r)
            }
            this._model.setOption(t, at), i ? (this[Q] = {
                silent: n
            }, this[Z] = !1) : (et.prepareAndUpdate.call(this), this._zr.flush(), this[Q] = !1, this[Z] = !1, h.call(this, n), u.call(this, n))
        }, tt.setTheme = function() {
            console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        }, tt.getModel = function() {
            return this._model
        }, tt.getOption = function() {
            return this._model && this._model.getOption()
        }, tt.getWidth = function() {
            return this._zr.getWidth()
        }, tt.getHeight = function() {
            return this._zr.getHeight()
        }, tt.getDevicePixelRatio = function() {
            return this._zr.painter.dpr || window.devicePixelRatio || 1
        }, tt.getRenderedCanvas = function(t) {
            if (T.canvasSupported) {
                t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
                var e = this._zr,
                    i = e.storage.getDisplayList();
                return F.each(i, function(t) {
                    t.stopAnimation(!0)
                }), e.painter.getRenderedCanvas(t)
            }
        }, tt.getDataURL = function(t) {
            t = t || {};
            var e = t.excludeComponents,
                i = this._model,
                n = [],
                r = this;
            X(e, function(t) {
                i.eachComponent({
                    mainType: t
                }, function(t) {
                    var e = r._componentsMap[t.__viewId];
                    e.group.ignore || (n.push(e), e.group.ignore = !0)
                })
            });
            var o = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
            return X(n, function(t) {
                t.group.ignore = !1
            }), o
        }, tt.getConnectedDataURL = function(t) {
            if (T.canvasSupported) {
                var e = this.group,
                    i = Math.min,
                    n = Math.max,
                    r = 1 / 0;
                if (ft[e]) {
                    var o = r,
                        a = r,
                        s = -r,
                        l = -r,
                        h = [],
                        u = t && t.pixelRatio || 1;
                    F.each(ct, function(r, u) {
                        if (r.group === e) {
                            var c = r.getRenderedCanvas(F.clone(t)),
                                f = r.getDom().getBoundingClientRect();
                            o = i(f.left, o), a = i(f.top, a), s = n(f.right, s), l = n(f.bottom, l), h.push({
                                dom: c,
                                left: f.left,
                                top: f.top
                            })
                        }
                    }), o *= u, a *= u, s *= u, l *= u;
                    var c = s - o,
                        f = l - a,
                        p = F.createCanvas();
                    p.width = c, p.height = f;
                    var d = z.init(p);
                    return X(h, function(t) {
                        var e = new I.Image({
                            style: {
                                x: t.left * u - o,
                                y: t.top * u - a,
                                image: t.dom
                            }
                        });
                        d.add(e)
                    }), d.refreshImmediately(), p.toDataURL("image/" + (t && t.type || "png"))
                }
                return this.getDataURL(t)
            }
        }, tt.convertToPixel = F.curry(a, "convertToPixel"), tt.convertFromPixel = F.curry(a, "convertFromPixel"), tt.containPixel = function(t, e) {
            var i, n = this._model;
            return t = L.parseFinder(n, t), F.each(t, function(t, n) {
                n.indexOf("Models") >= 0 && F.each(t, function(t) {
                    var r = t.coordinateSystem;
                    if (r && r.containPoint) i |= !!r.containPoint(e);
                    else if ("seriesModels" === n) {
                        var o = this._chartsMap[t.__viewId];
                        o && o.containPoint ? i |= o.containPoint(e, t) : __DEV__ && console.warn(n + ": " + (o ? "The found component do not support containPoint." : "No view mapping to the found component."))
                    } else __DEV__ && console.warn(n + ": containPoint is not supported")
                }, this)
            }, this), !!i
        }, tt.getVisual = function(t, e) {
            var i = this._model;
            t = L.parseFinder(i, t, {
                defaultMainType: "series"
            });
            var n = t.seriesModel;
            __DEV__ && (n || console.warn("There is no specified seires model"));
            var r = n.getData(),
                o = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
            return null != o ? r.getItemVisual(o, e) : r.getVisual(e)
        }, tt.getViewOfComponentModel = function(t) {
            return this._componentsMap[t.__viewId]
        }, tt.getViewOfSeriesModel = function(t) {
            return this._chartsMap[t.__viewId]
        };
        var et = {
            update: function(t) {
                var e = this._model,
                    i = this._api,
                    n = this._coordSysMgr,
                    r = this._zr;
                if (e) {
                    e.restoreData(), n.create(this._model, this._api), p.call(this, e, i), d.call(this, e), n.update(e, i), v.call(this, e, t), g.call(this, e, t);
                    var o = e.get("backgroundColor") || "transparent",
                        a = r.painter;
                    if (a.isSingleCanvas && a.isSingleCanvas()) r.configLayer(0, {
                        clearColor: o
                    });
                    else {
                        if (!T.canvasSupported) {
                            var s = B.parse(o);
                            o = B.stringify(s, "rgb"), 0 === s[3] && (o = "transparent")
                        }
                        o.colorStops || o.image ? (r.configLayer(0, {
                            clearColor: o
                        }), this[K] = !0, this._dom.style.background = "transparent") : (this[K] && r.configLayer(0, {
                            clearColor: null
                        }), this[K] = !1, this._dom.style.background = o)
                    }
                    X(st, function(t) {
                        t(e, i)
                    })
                }
            },
            updateView: function(t) {
                var e = this._model;
                e && (e.eachSeries(function(t) {
                    t.getData().clearAllVisual()
                }), v.call(this, e, t), c.call(this, "updateView", e, t))
            },
            updateVisual: function(t) {
                var e = this._model;
                e && (e.eachSeries(function(t) {
                    t.getData().clearAllVisual()
                }), v.call(this, e, t, !0), c.call(this, "updateVisual", e, t))
            },
            updateLayout: function(t) {
                var e = this._model;
                e && (m.call(this, e, t), c.call(this, "updateLayout", e, t))
            },
            prepareAndUpdate: function(t) {
                var e = this._model;
                f.call(this, "component", e), f.call(this, "chart", e), et.update.call(this, t)
            }
        }; tt.resize = function(t) {
            __DEV__ && F.assert(!this[Z], "`resize` should not be called during main process."), this[Z] = !0, this._zr.resize(t);
            var e = this._model && this._model.resetOption("media"),
                i = e ? "prepareAndUpdate" : "update";
            et[i].call(this), this._loadingFX && this._loadingFX.resize(), this[Z] = !1;
            var n = t && t.silent;
            h.call(this, n), u.call(this, n)
        }, tt.showLoading = function(t, e) {
            if (F.isObject(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), !ut[t]) return void(__DEV__ && console.warn("Loading effects " + t + " not exists."));
            var i = ut[t](this._api, e),
                n = this._zr;
            this._loadingFX = i, n.add(i)
        }, tt.hideLoading = function() {
            this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
        }, tt.makeActionFromEvent = function(t) {
            var e = F.extend({}, t);
            return e.type = rt[t.type], e
        }, tt.dispatchAction = function(t, e) {
            if (F.isObject(e) || (e = {
                    silent: !!e
                }), nt[t.type] && this._model) {
                if (this[Z]) return void this._pendingActions.push(t);
                l.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && T.browser.weChat && this._throttledZrFlush(),
                    h.call(this, e.silent), u.call(this, e.silent)
            }
        }, tt.on = n("on"), tt.off = n("off"), tt.one = n("one");
        var it = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"]; tt._initEvents = function() {
            X(it, function(t) {
                this._zr.on(t, function(e) {
                    var i, n = this.getModel(),
                        r = e.target;
                    if ("globalout" === t) i = {};
                    else if (r && null != r.dataIndex) {
                        var o = r.dataModel || n.getSeriesByIndex(r.seriesIndex);
                        i = o && o.getDataParams(r.dataIndex, r.dataType) || {}
                    } else r && r.eventData && (i = F.extend({}, r.eventData));
                    i && (i.event = e, i.type = t, this.trigger(t, i))
                }, this)
            }, this), X(rt, function(t, e) {
                this._messageCenter.on(e, function(t) {
                    this.trigger(e, t)
                }, this)
            }, this)
        }, tt.isDisposed = function() {
            return this._disposed
        }, tt.clear = function() {
            this.setOption({
                series: []
            }, !0)
        }, tt.dispose = function() {
            if (this._disposed) return void(__DEV__ && console.warn("Instance " + this.id + " has been disposed"));
            this._disposed = !0;
            var t = this._api,
                e = this._model;
            X(this._componentsViews, function(i) {
                i.dispose(e, t)
            }), X(this._chartsViews, function(i) {
                i.dispose(e, t)
            }), this._zr.dispose(), delete ct[this.id]
        }, F.mixin(o, N);
        var nt = {}, rt = {}, ot = [], at = [], st = [], lt = [], ht = {}, ut = {}, ct = {}, ft = {}, pt = new Date - 0, dt = new Date - 0, mt = "_echarts_instance_", vt = {
            version: "3.7.2",
            dependencies: {
                zrender: "3.6.2"
            }
        }; vt.init = function(t, e, i) {
            if (__DEV__) {
                if (z.version.replace(".", "") - 0 < vt.dependencies.zrender.replace(".", "") - 0) throw new Error("ZRender " + z.version + " is too old for ECharts " + vt.version + ". Current version need ZRender " + vt.dependencies.zrender + "+");
                if (!t) throw new Error("Initialize failed: invalid dom.")
            }
            var n = vt.getInstanceByDom(t);
            if (n) return __DEV__ && console.warn("There is a chart instance already initialized on the dom."), n;
            __DEV__ && (!F.isDom(t) || "CANVAS" === t.nodeName.toUpperCase() || (t.clientWidth || i && null != i.width) && (t.clientHeight || i && null != i.height) || console.warn("Can't get dom width or height"));
            var r = new o(t, e, i);
            return r.id = "ec_" + pt++, ct[r.id] = r, t.setAttribute ? t.setAttribute(mt, r.id) : t[mt] = r.id, b(r), r
        }, vt.connect = function(t) {
            if (F.isArray(t)) {
                var e = t;
                t = null, F.each(e, function(e) {
                    null != e.group && (t = e.group)
                }), t = t || "g_" + dt++, F.each(e, function(e) {
                    e.group = t
                })
            }
            return ft[t] = !0, t
        }, vt.disConnect = function(t) {
            ft[t] = !1
        }, vt.disconnect = vt.disConnect, vt.dispose = function(t) {
            "string" == typeof t ? t = ct[t] : t instanceof o || (t = vt.getInstanceByDom(t)), t instanceof o && !t.isDisposed() && t.dispose()
        }, vt.getInstanceByDom = function(t) {
            var e;
            return e = t.getAttribute ? t.getAttribute(mt) : t[mt], ct[e]
        }, vt.getInstanceById = function(t) {
            return ct[t]
        }, vt.registerTheme = function(t, e) {
            ht[t] = e
        }, vt.registerPreprocessor = function(t) {
            at.push(t)
        }, vt.registerProcessor = function(t, e) {
            if ("function" == typeof t && (e = t, t = V), __DEV__ && isNaN(t)) throw new Error("Unkown processor priority");
            ot.push({
                prio: t,
                func: e
            })
        }, vt.registerPostUpdate = function(t) {
            st.push(t)
        }, vt.registerAction = function(t, e, i) {
            "function" == typeof e && (i = e, e = "");
            var n = F.isObject(t) ? t.type : [t, t = {
                event: e
            }][0];
            t.event = (t.event || n).toLowerCase(), e = t.event, F.assert(J.test(n) && J.test(e)), nt[n] || (nt[n] = {
                action: i,
                actionInfo: t
            }), rt[e] = n
        }, vt.registerCoordinateSystem = function(t, e) {
            k.register(t, e)
        }, vt.getCoordinateSystemDimensions = function(t) {
            var e = k.get(t);
            if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
        }, vt.registerLayout = function(t, e) {
            if ("function" == typeof t && (e = t, t = U), __DEV__ && isNaN(t)) throw new Error("Unkown layout priority");
            lt.push({
                prio: t,
                func: e,
                isLayout: !0
            })
        }, vt.registerVisual = function(t, e) {
            if ("function" == typeof t && (e = t, t = W), __DEV__ && isNaN(t)) throw new Error("Unkown visual priority");
            lt.push({
                prio: t,
                func: e
            })
        }, vt.registerLoading = function(t, e) {
            ut[t] = e
        }, vt.extendComponentModel = function(t) {
            return M.extend(t)
        }, vt.extendComponentView = function(t) {
            return E.extend(t)
        }, vt.extendSeriesModel = function(t) {
            return O.extend(t)
        }, vt.extendChartView = function(t) {
            return D.extend(t)
        }, vt.setCanvasCreator = function(t) {
            F.createCanvas = t
        }, vt.registerVisual(Y, i(333)), vt.registerPreprocessor(A), vt.registerLoading("default", i(334)), vt.registerAction({
            type: "highlight",
            event: "highlight",
            update: "highlight"
        }, F.noop), vt.registerAction({
            type: "downplay",
            event: "downplay",
            update: "downplay"
        }, F.noop), vt.zrender = z, vt.List = i(125), vt.Model = i(33), vt.Axis = i(186), vt.graphic = i(35), vt.number = i(15), vt.format = i(32), vt.throttle = R.throttle, vt.matrix = i(64), vt.vector = i(12), vt.color = i(79), vt.util = {}, X(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function(t) {
            vt.util[t] = F[t]
        }), vt.helper = i(339), vt.PRIORITY = {
            PROCESSOR: {
                FILTER: V,
                STATISTIC: H
            },
            VISUAL: {
                LAYOUT: U,
                GLOBAL: Y,
                CHART: W,
                COMPONENT: q,
                BRUSH: G
            }
        }, t.exports = vt
    }).call(e, i(19))
}, function(t, e, i) {
    function n(t, e) {
        I[t] = e
    }

    function r(t, e) {
        e = e || D;
        var i = t + ":" + e;
        if (A[i]) return A[i];
        for (var n = (t + "").split("\n"), r = 0, o = 0, a = n.length; o < a; o++) r = Math.max(v(n[o], e).width, r);
        return M > O && (M = 0, A = {}), M++, A[i] = r, r
    }

    function o(t, e, i, n, r, o, l) {
        return o ? s(t, e, i, n, r, o, l) : a(t, e, i, n, r, l)
    }

    function a(t, e, i, n, o, a) {
        var s = g(t, e, o, a),
            u = r(t, e);
        o && (u += o[1] + o[3]);
        var c = s.outerHeight,
            f = l(0, u, i),
            p = h(0, c, n),
            d = new w(f, p, u, c);
        return d.lineHeight = s.lineHeight, d
    }

    function s(t, e, i, n, r, o, a) {
        var s = _(t, {
                rich: o,
                truncate: a,
                font: e,
                textAlign: i,
                textPadding: r
            }),
            u = s.outerWidth,
            c = s.outerHeight,
            f = l(0, u, i),
            p = h(0, c, n);
        return new w(f, p, u, c)
    }

    function l(t, e, i) {
        return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
    }

    function h(t, e, i) {
        return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t
    }

    function u(t, e, i) {
        var n = e.x,
            r = e.y,
            o = e.height,
            a = e.width,
            s = o / 2,
            l = "left",
            h = "top";
        switch (t) {
            case "left":
                n -= i, r += s, l = "right", h = "middle";
                break;
            case "right":
                n += i + a, r += s, h = "middle";
                break;
            case "top":
                n += a / 2, r -= i, l = "center", h = "bottom";
                break;
            case "bottom":
                n += a / 2, r += o + i, l = "center";
                break;
            case "inside":
                n += a / 2, r += s, l = "center", h = "middle";
                break;
            case "insideLeft":
                n += i, r += s, h = "middle";
                break;
            case "insideRight":
                n += a - i, r += s, l = "right", h = "middle";
                break;
            case "insideTop":
                n += a / 2, r += i, l = "center";
                break;
            case "insideBottom":
                n += a / 2, r += o - i, l = "center", h = "bottom";
                break;
            case "insideTopLeft":
                n += i, r += i;
                break;
            case "insideTopRight":
                n += a - i, r += i, l = "right";
                break;
            case "insideBottomLeft":
                n += i, r += o - i, h = "bottom";
                break;
            case "insideBottomRight":
                n += a - i, r += o - i, l = "right", h = "bottom"
        }
        return {
            x: n,
            y: r,
            textAlign: l,
            textVerticalAlign: h
        }
    }

    function c(t, e, i, n, r) {
        if (!e) return "";
        var o = (t + "").split("\n");
        r = f(e, i, n, r);
        for (var a = 0, s = o.length; a < s; a++) o[a] = p(o[a], r);
        return o.join("\n")
    }

    function f(t, e, i, n) {
        n = P({}, n), n.font = e;
        var i = k(i, "...");
        n.maxIterations = k(n.maxIterations, 2);
        var o = n.minChar = k(n.minChar, 0);
        n.cnCharWidth = r("国", e);
        var a = n.ascCharWidth = r("a", e);
        n.placeholder = k(n.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; l < o && s >= a; l++) s -= a;
        var h = r(i);
        return h > s && (i = "", h = 0), s = t - h, n.ellipsis = i, n.ellipsisWidth = h, n.contentWidth = s, n.containerWidth = t, n
    }

    function p(t, e) {
        var i = e.containerWidth,
            n = e.font,
            o = e.contentWidth;
        if (!i) return "";
        var a = r(t, n);
        if (a <= i) return t;
        for (var s = 0;; s++) {
            if (a <= o || s >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var l = 0 === s ? d(t, o, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * o / a) : 0;
            t = t.substr(0, l), a = r(t, n)
        }
        return "" === t && (t = e.placeholder), t
    }

    function d(t, e, i, n) {
        for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
            var s = t.charCodeAt(o);
            r += 0 <= s && s <= 127 ? i : n
        }
        return o
    }

    function m(t) {
        return r("国", t)
    }

    function v(t, e) {
        return I.measureText(t, e)
    }

    function g(t, e, i, n) {
        null != t && (t += "");
        var r = m(e),
            o = t ? t.split("\n") : [],
            a = o.length * r,
            s = a;
        if (i && (s += i[0] + i[2]), t && n) {
            var l = n.outerHeight,
                h = n.outerWidth;
            if (null != l && s > l) t = "", o = [];
            else if (null != h)
                for (var u = f(h - (i ? i[1] + i[3] : 0), e, n.ellipsis, {
                    minChar: n.minChar,
                    placeholder: n.placeholder
                }), c = 0, d = o.length; c < d; c++) o[c] = p(o[c], u)
        }
        return {
            lines: o,
            height: a,
            outerHeight: s,
            lineHeight: r
        }
    }

    function _(t, e) {
        var i = {
            lines: [],
            width: 0,
            height: 0
        };
        if (null != t && (t += ""), !t) return i;
        for (var n, o = E.lastIndex = 0; null != (n = E.exec(t));) {
            var a = n.index;
            a > o && y(i, t.substring(o, a)), y(i, n[2], n[1]), o = E.lastIndex
        }
        o < t.length && y(i, t.substring(o, t.length));
        var s = i.lines,
            l = 0,
            h = 0,
            u = [],
            f = e.textPadding,
            p = e.truncate,
            d = p && p.outerWidth,
            v = p && p.outerHeight;
        f && (null != d && (d -= f[1] + f[3]), null != v && (v -= f[0] + f[2]));
        for (var g = 0; g < s.length; g++) {
            for (var _ = s[g], x = 0, w = 0, T = 0; T < _.tokens.length; T++) {
                var S = _.tokens[T],
                    P = S.styleName && e.rich[S.styleName] || {},
                    A = S.textPadding = P.textPadding,
                    M = S.font = P.font || e.font,
                    O = S.textHeight = k(P.textHeight, m(M));
                if (A && (O += A[0] + A[2]), S.height = O, S.lineHeight = C(P.textLineHeight, e.textLineHeight, O), S.textAlign = P && P.textAlign || e.textAlign, S.textVerticalAlign = P && P.textVerticalAlign || "middle", null != v && l + S.lineHeight > v) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                S.textWidth = r(S.text, M);
                var D = P.textWidth,
                    I = null == D || "auto" === D;
                if ("string" == typeof D && "%" === D.charAt(D.length - 1)) S.percentWidth = D, u.push(S), D = 0;
                else {
                    if (I) {
                        D = S.textWidth;
                        var L = P.textBackgroundColor,
                            R = L && L.image;
                        R && (R = b.findExistImage(R), b.isImageReady(R) && (D = Math.max(D, R.width * O / R.height)))
                    }
                    var z = A ? A[1] + A[3] : 0;
                    D += z;
                    var F = null != d ? d - w : null;
                    null != F && F < D && (!I || F < z ? (S.text = "", S.textWidth = D = 0) : (S.text = c(S.text, F - z, M, p.ellipsis, {
                        minChar: p.minChar
                    }), S.textWidth = r(S.text, M), D = S.textWidth + z))
                }
                w += S.width = D, P && (x = Math.max(x, S.lineHeight))
            }
            _.width = w, _.lineHeight = x, l += x, h = Math.max(h, w)
        }
        i.outerWidth = i.width = k(e.textWidth, h), i.outerHeight = i.height = k(e.textHeight, l), f && (i.outerWidth += f[1] + f[3], i.outerHeight += f[0] + f[2]);
        for (var g = 0; g < u.length; g++) {
            var S = u[g],
                B = S.percentWidth;
            S.width = parseInt(B, 10) / 100 * h
        }
        return i
    }

    function y(t, e, i) {
        for (var n = "" === e, r = e.split("\n"), o = t.lines, a = 0; a < r.length; a++) {
            var s = r[a],
                l = {
                    styleName: i,
                    text: s,
                    isLineHolder: !s && !n
                };
            if (a) o.push({
                tokens: [l]
            });
            else {
                var h = (o[o.length - 1] || (o[0] = {
                        tokens: []
                    })).tokens,
                    u = h.length;
                1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || n) && h.push(l)
            }
        }
    }

    function x(t) {
        return (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ") || t.textFont || t.font
    }
    var w = i(25),
        b = i(117),
        T = i(3),
        S = T.getContext,
        P = T.extend,
        k = T.retrieve2,
        C = T.retrieve3,
        A = {},
        M = 0,
        O = 5e3,
        E = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
        D = "12px sans-serif",
        I = {};
    I.measureText = function(t, e) {
        var i = S();
        return i.font = e || D, i.measureText(t)
    }, e.DEFAULT_FONT = D, e.$override = n, e.getWidth = r, e.getBoundingRect = o, e.adjustTextX = l, e.adjustTextY = h, e.adjustTextPositionOnRect = u, e.truncateText = c, e.getLineHeight = m, e.measureText = v, e.parsePlainText = g, e.parseRichText = _, e.makeFont = x
}, function(t, e) {
    function i() {
        var t = new u(6);
        return n(t), t
    }

    function n(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function r(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function o(t, e, i) {
        var n = e[0] * i[0] + e[2] * i[1],
            r = e[1] * i[0] + e[3] * i[1],
            o = e[0] * i[2] + e[2] * i[3],
            a = e[1] * i[2] + e[3] * i[3],
            s = e[0] * i[4] + e[2] * i[5] + e[4],
            l = e[1] * i[4] + e[3] * i[5] + e[5];
        return t[0] = n, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t
    }

    function a(t, e, i) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
    }

    function s(t, e, i) {
        var n = e[0],
            r = e[2],
            o = e[4],
            a = e[1],
            s = e[3],
            l = e[5],
            h = Math.sin(i),
            u = Math.cos(i);
        return t[0] = n * u + a * h, t[1] = -n * h + a * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * o + h * l, t[5] = u * l - h * o, t
    }

    function l(t, e, i) {
        var n = i[0],
            r = i[1];
        return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
    }

    function h(t, e) {
        var i = e[0],
            n = e[2],
            r = e[4],
            o = e[1],
            a = e[3],
            s = e[5],
            l = i * a - o * n;
        return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - a * r) * l, t[5] = (o * r - i * s) * l, t) : null
    }
    var u = "undefined" == typeof Float32Array ? Array : Float32Array;
    e.create = i, e.identity = n, e.copy = r, e.mul = o, e.translate = a, e.rotate = s, e.scale = l, e.invert = h
}, function(t, e) {
    var i = Array.prototype.slice,
        n = function() {
            this._$handlers = {}
        };
    n.prototype = {
        constructor: n,
        one: function(t, e, i) {
            var n = this._$handlers;
            if (!e || !t) return this;
            n[t] || (n[t] = []);
            for (var r = 0; r < n[t].length; r++)
                if (n[t][r].h === e) return this;
            return n[t].push({
                h: e,
                one: !0,
                ctx: i || this
            }), this
        },
        on: function(t, e, i) {
            var n = this._$handlers;
            if (!e || !t) return this;
            n[t] || (n[t] = []);
            for (var r = 0; r < n[t].length; r++)
                if (n[t][r].h === e) return this;
            return n[t].push({
                h: e,
                one: !1,
                ctx: i || this
            }), this
        },
        isSilent: function(t) {
            var e = this._$handlers;
            return e[t] && e[t].length
        },
        off: function(t, e) {
            var i = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (i[t]) {
                    for (var n = [], r = 0, o = i[t].length; r < o; r++) i[t][r].h != e && n.push(i[t][r]);
                    i[t] = n
                }
                i[t] && 0 === i[t].length && delete i[t]
            } else delete i[t];
            return this
        },
        trigger: function(t) {
            if (this._$handlers[t]) {
                var e = arguments,
                    n = e.length;
                n > 3 && (e = i.call(e, 1));
                for (var r = this._$handlers[t], o = r.length, a = 0; a < o;) {
                    switch (n) {
                        case 1:
                            r[a].h.call(r[a].ctx);
                            break;
                        case 2:
                            r[a].h.call(r[a].ctx, e[1]);
                            break;
                        case 3:
                            r[a].h.call(r[a].ctx, e[1], e[2]);
                            break;
                        default:
                            r[a].h.apply(r[a].ctx, e)
                    }
                    r[a].one ? (r.splice(a, 1), o--) : a++
                }
            }
            return this
        },
        triggerWithContext: function(t) {
            if (this._$handlers[t]) {
                var e = arguments,
                    n = e.length;
                n > 4 && (e = i.call(e, 1, e.length - 1));
                for (var r = e[e.length - 1], o = this._$handlers[t], a = o.length, s = 0; s < a;) {
                    switch (n) {
                        case 1:
                            o[s].h.call(r);
                            break;
                        case 2:
                            o[s].h.call(r, e[1]);
                            break;
                        case 3:
                            o[s].h.call(r, e[1], e[2]);
                            break;
                        default:
                            o[s].h.apply(r, e)
                    }
                    o[s].one ? (o.splice(s, 1), a--) : s++
                }
            }
            return this
        }
    };
    var r = n;
    t.exports = r
}, , , , , , , , , , , , , , function(t, e, i) {
    function n(t) {
        return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t
    }

    function r(t) {
        return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t
    }

    function o(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t
    }

    function a(t) {
        return n(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }

    function s(t) {
        return o(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }

    function l(t, e, i) {
        return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }

    function h(t, e, i) {
        return t + (e - t) * i
    }

    function u(t, e, i, n, r) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t
    }

    function c(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function f(t, e) {
        k && c(k, e), k = P.put(t, k || e.slice())
    }

    function p(t, e) {
        if (t) {
            e = e || [];
            var i = P.get(t);
            if (i) return c(e, i);
            t += "";
            var n = t.replace(/ /g, "").toLowerCase();
            if (n in S) return c(e, S[n]), f(t, e), e;
            if ("#" !== n.charAt(0)) {
                var r = n.indexOf("("),
                    o = n.indexOf(")");
                if (r !== -1 && o + 1 === n.length) {
                    var l = n.substr(0, r),
                        h = n.substr(r + 1, o - (r + 1)).split(","),
                        p = 1;
                    switch (l) {
                        case "rgba":
                            if (4 !== h.length) return void u(e, 0, 0, 0, 1);
                            p = s(h.pop());
                        case "rgb":
                            return 3 !== h.length ? void u(e, 0, 0, 0, 1) : (u(e, a(h[0]), a(h[1]), a(h[2]), p), f(t, e), e);
                        case "hsla":
                            return 4 !== h.length ? void u(e, 0, 0, 0, 1) : (h[3] = s(h[3]), d(h, e), f(t, e), e);
                        case "hsl":
                            return 3 !== h.length ? void u(e, 0, 0, 0, 1) : (d(h, e), f(t, e), e);
                        default:
                            return
                    }
                }
                u(e, 0, 0, 0, 1)
            } else {
                if (4 === n.length) {
                    var m = parseInt(n.substr(1), 16);
                    return m >= 0 && m <= 4095 ? (u(e, (3840 & m) >> 4 | (3840 & m) >> 8, 240 & m | (240 & m) >> 4, 15 & m | (15 & m) << 4, 1), f(t, e), e) : void u(e, 0, 0, 0, 1)
                }
                if (7 === n.length) {
                    var m = parseInt(n.substr(1), 16);
                    return m >= 0 && m <= 16777215 ? (u(e, (16711680 & m) >> 16, (65280 & m) >> 8, 255 & m, 1), f(t, e), e) : void u(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function d(t, e) {
        var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
            r = s(t[1]),
            o = s(t[2]),
            a = o <= .5 ? o * (r + 1) : o + r - o * r,
            h = 2 * o - a;
        return e = e || [], u(e, n(255 * l(h, a, i + 1 / 3)), n(255 * l(h, a, i)), n(255 * l(h, a, i - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function m(t) {
        if (t) {
            var e, i, n = t[0] / 255,
                r = t[1] / 255,
                o = t[2] / 255,
                a = Math.min(n, r, o),
                s = Math.max(n, r, o),
                l = s - a,
                h = (s + a) / 2;
            if (0 === l) e = 0, i = 0;
            else {
                i = h < .5 ? l / (s + a) : l / (2 - s - a);
                var u = ((s - n) / 6 + l / 2) / l,
                    c = ((s - r) / 6 + l / 2) / l,
                    f = ((s - o) / 6 + l / 2) / l;
                n === s ? e = f - c : r === s ? e = 1 / 3 + u - f : o === s && (e = 2 / 3 + c - u), e < 0 && (e += 1), e > 1 && (e -= 1)
            }
            var p = [360 * e, i, h];
            return null != t[3] && p.push(t[3]), p
        }
    }

    function v(t, e) {
        var i = p(t);
        if (i) {
            for (var n = 0; n < 3; n++) e < 0 ? i[n] = i[n] * (1 - e) | 0 : i[n] = (255 - i[n]) * e + i[n] | 0;
            return b(i, 4 === i.length ? "rgba" : "rgb")
        }
    }

    function g(t) {
        var e = p(t);
        if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
    }

    function _(t, e, i) {
        if (e && e.length && t >= 0 && t <= 1) {
            i = i || [];
            var r = t * (e.length - 1),
                a = Math.floor(r),
                s = Math.ceil(r),
                l = e[a],
                u = e[s],
                c = r - a;
            return i[0] = n(h(l[0], u[0], c)), i[1] = n(h(l[1], u[1], c)), i[2] = n(h(l[2], u[2], c)), i[3] = o(h(l[3], u[3], c)), i
        }
    }

    function y(t, e, i) {
        if (e && e.length && t >= 0 && t <= 1) {
            var r = t * (e.length - 1),
                a = Math.floor(r),
                s = Math.ceil(r),
                l = p(e[a]),
                u = p(e[s]),
                c = r - a,
                f = b([n(h(l[0], u[0], c)), n(h(l[1], u[1], c)), n(h(l[2], u[2], c)), o(h(l[3], u[3], c))], "rgba");
            return i ? {
                color: f,
                leftIndex: a,
                rightIndex: s,
                value: r
            } : f
        }
    }

    function x(t, e, i, n) {
        if (t = p(t)) return t = m(t), null != e && (t[0] = r(e)), null != i && (t[1] = s(i)), null != n && (t[2] = s(n)), b(d(t), "rgba")
    }

    function w(t, e) {
        if (t = p(t), t && null != e) return t[3] = o(e), b(t, "rgba")
    }

    function b(t, e) {
        if (t && t.length) {
            var i = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]), e + "(" + i + ")"
        }
    }
    var T = i(169),
        S = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        },
        P = new T(20),
        k = null,
        C = _,
        A = y;
    e.parse = p, e.lift = v, e.toHex = g, e.fastLerp = _, e.fastMapToColor = C, e.lerp = y, e.mapToColor = A, e.modifyHSL = x, e.modifyAlpha = w, e.stringify = b
}, function(t, e) {
    var i = 1;
    "undefined" != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
    var n = 0,
        r = i;
    e.debugMode = n, e.devicePixelRatio = r
}, function(t, e, i) {
    var n = i(49),
        r = i(12),
        o = i(290),
        a = i(25),
        s = i(80),
        l = s.devicePixelRatio,
        h = {
            M: 1,
            L: 2,
            C: 3,
            Q: 4,
            A: 5,
            Z: 6,
            R: 7
        },
        u = [],
        c = [],
        f = [],
        p = [],
        d = Math.min,
        m = Math.max,
        v = Math.cos,
        g = Math.sin,
        _ = Math.sqrt,
        y = Math.abs,
        x = "undefined" != typeof Float32Array,
        w = function(t) {
            this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
        };
    w.prototype = {
        constructor: w,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function(t, e) {
            this._ux = y(1 / l / t) || 0, this._uy = y(1 / l / e) || 0
        },
        getContext: function() {
            return this._ctx
        },
        beginPath: function(t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
        },
        moveTo: function(t, e) {
            return this.addData(h.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
        },
        lineTo: function(t, e) {
            var i = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || this._len < 5;
            return this.addData(h.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
        },
        bezierCurveTo: function(t, e, i, n, r, o) {
            return this.addData(h.C, t, e, i, n, r, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, o) : this._ctx.bezierCurveTo(t, e, i, n, r, o)), this._xi = r, this._yi = o, this
        },
        quadraticCurveTo: function(t, e, i, n) {
            return this.addData(h.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
        },
        arc: function(t, e, i, n, r, o) {
            return this.addData(h.A, t, e, i, i, n, r - n, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, o), this._xi = v(r) * i + t, this._yi = g(r) * i + t, this
        },
        arcTo: function(t, e, i, n, r) {
            return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
        },
        rect: function(t, e, i, n) {
            return this._ctx && this._ctx.rect(t, e, i, n), this.addData(h.R, t, e, i, n), this
        },
        closePath: function() {
            this.addData(h.Z);
            var t = this._ctx,
                e = this._x0,
                i = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
        },
        fill: function(t) {
            t && t.fill(), this.toStatic()
        },
        stroke: function(t) {
            t && t.stroke(), this.toStatic()
        },
        setLineDash: function(t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, i = 0; i < t.length; i++) e += t[i];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function(t) {
            return this._dashOffset = t, this
        },
        len: function() {
            return this._len
        },
        setData: function(t) {
            var e = t.length;
            this.data && this.data.length == e || !x || (this.data = new Float32Array(e));
            for (var i = 0; i < e; i++) this.data[i] = t[i];
            this._len = e
        },
        appendPath: function(t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, i = 0, n = this._len, r = 0; r < e; r++) i += t[r].len();
            x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
            for (var r = 0; r < e; r++)
                for (var o = t[r].data, a = 0; a < o.length; a++) this.data[n++] = o[a];
            this._len = n
        },
        addData: function(t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
                this._prevCmd = t
            }
        },
        _expandData: function() {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function() {
            return this._lineDash
        },
        _dashedLineTo: function(t, e) {
            var i, n, r = this._dashSum,
                o = this._dashOffset,
                a = this._lineDash,
                s = this._ctx,
                l = this._xi,
                h = this._yi,
                u = t - l,
                c = e - h,
                f = _(u * u + c * c),
                p = l,
                v = h,
                g = a.length;
            for (u /= f, c /= f, o < 0 && (o = r + o), o %= r, p -= o * u, v -= o * c; u > 0 && p <= t || u < 0 && p >= t || 0 == u && (c > 0 && v <= e || c < 0 && v >= e);) n = this._dashIdx, i = a[n], p += u * i, v += c * i, this._dashIdx = (n + 1) % g, u > 0 && p < l || u < 0 && p > l || c > 0 && v < h || c < 0 && v > h || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? d(p, t) : m(p, t), c >= 0 ? d(v, e) : m(v, e));
            u = p - t, c = v - e, this._dashOffset = -_(u * u + c * c)
        },
        _dashedBezierTo: function(t, e, i, r, o, a) {
            var s, l, h, u, c, f = this._dashSum,
                p = this._dashOffset,
                d = this._lineDash,
                m = this._ctx,
                v = this._xi,
                g = this._yi,
                y = n.cubicAt,
                x = 0,
                w = this._dashIdx,
                b = d.length,
                T = 0;
            for (p < 0 && (p = f + p), p %= f, s = 0; s < 1; s += .1) l = y(v, t, i, o, s + .1) - y(v, t, i, o, s), h = y(g, e, r, a, s + .1) - y(g, e, r, a, s), x += _(l * l + h * h);
            for (; w < b && (T += d[w], !(T > p)); w++);
            for (s = (T - p) / x; s <= 1;) u = y(v, t, i, o, s), c = y(g, e, r, a, s), w % 2 ? m.moveTo(u, c) : m.lineTo(u, c), s += d[w] / x, w = (w + 1) % b;
            w % 2 !== 0 && m.lineTo(o, a), l = o - u, h = a - c, this._dashOffset = -_(l * l + h * h)
        },
        _dashedQuadraticTo: function(t, e, i, n) {
            var r = i,
                o = n;
            i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, o)
        },
        toStatic: function() {
            var t = this.data;
            t instanceof Array && (t.length = this._len, x && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function() {
            u[0] = u[1] = f[0] = f[1] = Number.MAX_VALUE, c[0] = c[1] = p[0] = p[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, i = 0, n = 0, s = 0, l = 0; l < t.length;) {
                var d = t[l++];
                switch (1 == l && (e = t[l], i = t[l + 1], n = e, s = i), d) {
                    case h.M:
                        n = t[l++], s = t[l++], e = n, i = s, f[0] = n, f[1] = s, p[0] = n, p[1] = s;
                        break;
                    case h.L:
                        o.fromLine(e, i, t[l], t[l + 1], f, p), e = t[l++], i = t[l++];
                        break;
                    case h.C:
                        o.fromCubic(e, i, t[l++], t[l++], t[l++], t[l++], t[l], t[l + 1], f, p), e = t[l++], i = t[l++];
                        break;
                    case h.Q:
                        o.fromQuadratic(e, i, t[l++], t[l++], t[l], t[l + 1], f, p), e = t[l++], i = t[l++];
                        break;
                    case h.A:
                        var m = t[l++],
                            _ = t[l++],
                            y = t[l++],
                            x = t[l++],
                            w = t[l++],
                            b = t[l++] + w,
                            T = (t[l++], 1 - t[l++]);
                        1 == l && (n = v(w) * y + m, s = g(w) * x + _), o.fromArc(m, _, y, x, w, b, T, f, p), e = v(b) * y + m, i = g(b) * x + _;
                        break;
                    case h.R:
                        n = e = t[l++], s = i = t[l++];
                        var S = t[l++],
                            P = t[l++];
                        o.fromLine(n, s, n + S, s + P, f, p);
                        break;
                    case h.Z:
                        e = n, i = s
                }
                r.min(u, u, f), r.max(c, c, p)
            }
            return 0 === l && (u[0] = u[1] = c[0] = c[1] = 0), new a(u[0], u[1], c[0] - u[0], c[1] - u[1])
        },
        rebuildPath: function(t) {
            for (var e, i, n, r, o, a, s = this.data, l = this._ux, u = this._uy, c = this._len, f = 0; f < c;) {
                var p = s[f++];
                switch (1 == f && (n = s[f], r = s[f + 1], e = n, i = r), p) {
                    case h.M:
                        e = n = s[f++], i = r = s[f++], t.moveTo(n, r);
                        break;
                    case h.L:
                        o = s[f++], a = s[f++], (y(o - n) > l || y(a - r) > u || f === c - 1) && (t.lineTo(o, a), n = o, r = a);
                        break;
                    case h.C:
                        t.bezierCurveTo(s[f++], s[f++], s[f++], s[f++], s[f++], s[f++]), n = s[f - 2], r = s[f - 1];
                        break;
                    case h.Q:
                        t.quadraticCurveTo(s[f++], s[f++], s[f++], s[f++]), n = s[f - 2], r = s[f - 1];
                        break;
                    case h.A:
                        var d = s[f++],
                            m = s[f++],
                            _ = s[f++],
                            x = s[f++],
                            w = s[f++],
                            b = s[f++],
                            T = s[f++],
                            S = s[f++],
                            P = _ > x ? _ : x,
                            k = _ > x ? 1 : _ / x,
                            C = _ > x ? x / _ : 1,
                            A = Math.abs(_ - x) > .001,
                            M = w + b;
                        A ? (t.translate(d, m), t.rotate(T), t.scale(k, C), t.arc(0, 0, P, w, M, 1 - S), t.scale(1 / k, 1 / C), t.rotate(-T), t.translate(-d, -m)) : t.arc(d, m, P, w, M, 1 - S), 1 == f && (e = v(w) * _ + d, i = g(w) * x + m), n = v(M) * _ + d, r = g(M) * x + m;
                        break;
                    case h.R:
                        e = n = s[f], i = r = s[f + 1], t.rect(s[f++], s[f++], s[f++], s[f++]);
                        break;
                    case h.Z:
                        t.closePath(), n = e, r = i
                }
            }
        }
    }, w.CMD = h;
    var b = w;
    t.exports = b
}, function(t, e, i) {
    var n = i(3),
        r = i(171),
        o = i(25),
        a = function(t) {
            t = t || {}, r.call(this, t);
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
            this._children = [], this.__storage = null, this.__dirty = !0
        };
    a.prototype = {
        constructor: a,
        isGroup: !0,
        type: "group",
        silent: !1,
        children: function() {
            return this._children.slice()
        },
        childAt: function(t) {
            return this._children[t]
        },
        childOfName: function(t) {
            for (var e = this._children, i = 0; i < e.length; i++)
                if (e[i].name === t) return e[i]
        },
        childCount: function() {
            return this._children.length
        },
        add: function(t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
        },
        addBefore: function(t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var i = this._children,
                    n = i.indexOf(e);
                n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
            }
            return this
        },
        _doAdd: function(t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage,
                i = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof a && t.addChildrenToStorage(e)), i && i.refresh()
        },
        remove: function(t) {
            var e = this.__zr,
                i = this.__storage,
                r = this._children,
                o = n.indexOf(r, t);
            return o < 0 ? this : (r.splice(o, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof a && t.delChildrenFromStorage(i)), e && e.refresh(), this)
        },
        removeAll: function() {
            var t, e, i = this._children,
                n = this.__storage;
            for (e = 0; e < i.length; e++) t = i[e], n && (n.delFromStorage(t), t instanceof a && t.delChildrenFromStorage(n)), t.parent = null;
            return i.length = 0, this
        },
        eachChild: function(t, e) {
            for (var i = this._children, n = 0; n < i.length; n++) {
                var r = i[n];
                t.call(e, r, n)
            }
            return this
        },
        traverse: function(t, e) {
            for (var i = 0; i < this._children.length; i++) {
                var n = this._children[i];
                t.call(e, n), "group" === n.type && n.traverse(t, e)
            }
            return this
        },
        addChildrenToStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.addToStorage(i), i instanceof a && i.addChildrenToStorage(t)
            }
        },
        delChildrenFromStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.delFromStorage(i), i instanceof a && i.delChildrenFromStorage(t)
            }
        },
        dirty: function() {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
        },
        getBoundingRect: function(t) {
            for (var e = null, i = new o(0, 0, 0, 0), n = t || this._children, r = [], a = 0; a < n.length; a++) {
                var s = n[a];
                if (!s.ignore && !s.invisible) {
                    var l = s.getBoundingRect(),
                        h = s.getLocalTransform(r);
                    h ? (i.copy(l), i.applyTransform(h), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
                }
            }
            return e || i
        }
    }, n.inherits(a, r);
    var s = a;
    t.exports = s
}, function(t, e, i) {
    function n(t) {
        var e = [];
        return o.each(u.getClassesByMainType(t), function(t) {
            a.apply(e, t.prototype.dependencies || [])
        }), o.map(e, function(t) {
            return l.parseClassType(t).main
        })
    }
    var r = i(33),
        o = i(3),
        a = Array.prototype.push,
        s = i(121),
        l = i(34),
        h = i(182),
        u = r.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function(t, e, i, n) {
                r.call(this, t, e, i, n), this.uid = s.getUID("componentModel")
            },
            init: function(t, e, i, n) {
                this.mergeDefaultAndTheme(t, i)
            },
            mergeDefaultAndTheme: function(t, e) {
                var i = this.layoutMode,
                    n = i ? h.getLayoutParams(t) : {},
                    r = e.getTheme();
                o.merge(t, r.get(this.mainType)), o.merge(t, this.getDefaultOption()), i && h.mergeLayoutParam(t, n, i)
            },
            mergeOption: function(t, e) {
                o.merge(this.option, t, !0);
                var i = this.layoutMode;
                i && h.mergeLayoutParam(this.option, t, i)
            },
            optionUpdated: function(t, e) {},
            getDefaultOption: function() {
                if (!l.hasOwn(this, "__defaultOption")) {
                    for (var t = [], e = this.constructor; e;) {
                        var i = e.prototype.defaultOption;
                        i && t.push(i), e = e.superClass
                    }
                    for (var n = {}, r = t.length - 1; r >= 0; r--) n = o.merge(n, t[r], !0);
                    l.set(this, "__defaultOption", n)
                }
                return l.get(this, "__defaultOption")
            },
            getReferringComponents: function(t) {
                return this.ecModel.queryComponents({
                    mainType: t,
                    index: this.get(t + "Index", !0),
                    id: this.get(t + "Id", !0)
                })
            }
        });
    l.enableClassManagement(u, {
        registerWhenExtend: !0
    }), s.enableSubTypeDefaulter(u), s.enableTopologicalTravel(u, n), o.mixin(u, i(315)), t.exports = u
}, function(t, e, i) {
    var n = i(336),
        r = i(86);
    i(337), i(338);
    var o = i(85),
        a = i(15),
        s = i(3),
        l = i(63),
        h = {};
    h.getScaleExtent = function(t, e) {
        var i, n, r, o = t.type,
            l = e.getMin(),
            h = e.getMax(),
            u = null != l,
            c = null != h,
            f = t.getExtent();
        return "ordinal" === o ? i = (e.get("data") || []).length : (n = e.get("boundaryGap"), s.isArray(n) || (n = [n || 0, n || 0]), "boolean" == typeof n[0] && (__DEV__ && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), n = [0, 0]), n[0] = a.parsePercent(n[0], 1), n[1] = a.parsePercent(n[1], 1), r = f[1] - f[0] || Math.abs(f[0])), null == l && (l = "ordinal" === o ? i ? 0 : NaN : f[0] - n[0] * r), null == h && (h = "ordinal" === o ? i ? i - 1 : NaN : f[1] + n[1] * r), "dataMin" === l ? l = f[0] : "function" == typeof l && (l = l({
            min: f[0],
            max: f[1]
        })), "dataMax" === h ? h = f[1] : "function" == typeof h && (h = h({
            min: f[0],
            max: f[1]
        })), (null == l || !isFinite(l)) && (l = NaN), (null == h || !isFinite(h)) && (h = NaN), t.setBlank(s.eqNaN(l) || s.eqNaN(h)), e.getNeedCrossZero() && (l > 0 && h > 0 && !u && (l = 0), l < 0 && h < 0 && !c && (h = 0)), [l, h]
    }, h.niceScaleExtent = function(t, e) {
        var i = h.getScaleExtent(t, e),
            n = null != e.getMin(),
            r = null != e.getMax(),
            o = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var a = t.type;
        t.setExtent(i[0], i[1]), t.niceExtent({
            splitNumber: o,
            fixMin: n,
            fixMax: r,
            minInterval: "interval" === a || "time" === a ? e.get("minInterval") : null,
            maxInterval: "interval" === a || "time" === a ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }, h.createScaleByModel = function(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case "category":
                return new n(t.getCategories(), [1 / 0, -(1 / 0)]);
            case "value":
                return new r;
            default:
                return (o.getClass(e) || r).create(t)
        }
    }, h.ifAxisCrossZero = function(t) {
        var e = t.scale.getExtent(),
            i = e[0],
            n = e[1];
        return !(i > 0 && n > 0 || i < 0 && n < 0)
    }, h.getAxisLabelInterval = function(t, e, i, n) {
        var r, o = 0,
            a = 0,
            s = 1;
        e.length > 40 && (s = Math.floor(e.length / 40));
        for (var h = 0; h < t.length; h += s) {
            var u = t[h],
                c = l.getBoundingRect(e[h], i, "center", "top");
            c[n ? "x" : "y"] += u, c[n ? "width" : "height"] *= 1.3, r ? r.intersect(c) ? (a++, o = Math.max(o, a)) : (r.union(c), a = 0) : r = c.clone()
        }
        return 0 === o && s > 1 ? s : (o + 1) * s - 1;
    }, h.getFormattedLabels = function(t, e) {
        var i = t.scale,
            n = i.getTicksLabels(),
            r = i.getTicks();
        return "string" == typeof e ? (e = function(t) {
            return function(e) {
                return t.replace("{value}", null != e ? e : "")
            }
        }(e), s.map(n, e)) : "function" == typeof e ? s.map(r, function(i, n) {
            return e(h.getAxisRawValue(t, i), n)
        }, this) : n
    }, h.getAxisRawValue = function(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }, t.exports = h
}, function(t, e, i) {
    function n(t) {
        this._setting = t || {}, this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
    }
    var r = i(34),
        o = n.prototype;
    o.parse = function(t) {
        return t
    }, o.getSetting = function(t) {
        return this._setting[t]
    }, o.contain = function(t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    }, o.normalize = function(t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }, o.scale = function(t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    }, o.unionExtent = function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }, o.unionExtentFromData = function(t, e) {
        this.unionExtent(t.getDataExtent(e, !0))
    }, o.getExtent = function() {
        return this._extent.slice()
    }, o.setExtent = function(t, e) {
        var i = this._extent;
        isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
    }, o.getTicksLabels = function() {
        for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++) t.push(this.getLabel(e[i]));
        return t
    }, o.isBlank = function() {
        return this._isBlank
    }, o.setBlank = function(t) {
        this._isBlank = t
    }, r.enableClassExtend(n), r.enableClassManagement(n, {
        registerWhenExtend: !0
    }), t.exports = n
}, function(t, e, i) {
    var n = i(15),
        r = i(32),
        o = i(85),
        a = i(187),
        s = n.round,
        l = o.extend({
            type: "interval",
            _interval: 0,
            _intervalPrecision: 2,
            setExtent: function(t, e) {
                var i = this._extent;
                isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
            },
            unionExtent: function(t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l.prototype.setExtent.call(this, e[0], e[1])
            },
            getInterval: function() {
                return this._interval
            },
            setInterval: function(t) {
                this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = a.getIntervalPrecision(t)
            },
            getTicks: function() {
                return a.intervalScaleGetTicks(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
            },
            getTicksLabels: function() {
                for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++) t.push(this.getLabel(e[i]));
                return t
            },
            getLabel: function(t, e) {
                if (null == t) return "";
                var i = e && e.precision;
                return null == i ? i = n.getPrecisionSafe(t) || 0 : "auto" === i && (i = this._intervalPrecision), t = s(t, i, !0), r.addCommas(t)
            },
            niceTicks: function(t, e, i) {
                t = t || 5;
                var n = this._extent,
                    r = n[1] - n[0];
                if (isFinite(r)) {
                    r < 0 && (r = -r, n.reverse());
                    var o = a.intervalScaleNiceTicks(n, t, e, i);
                    this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent
                }
            },
            niceExtent: function(t) {
                var e = this._extent;
                if (e[0] === e[1])
                    if (0 !== e[0]) {
                        var i = e[0];
                        t.fixMax ? e[0] -= i / 2 : (e[1] += i / 2, e[0] -= i / 2)
                    } else e[1] = 1;
                var n = e[1] - e[0];
                isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var r = this._interval;
                t.fixMin || (e[0] = s(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = s(Math.ceil(e[1] / r) * r))
            }
        });
    l.create = function() {
        return new l
    }, t.exports = l
}, , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
        function(t, i) {
            function n(t) {
                return void 0 === t || null === t
            }

            function r(t) {
                return void 0 !== t && null !== t
            }

            function o(t) {
                return t === !0
            }

            function a(t) {
                return t === !1
            }

            function s(t) {
                return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
            }

            function l(t) {
                return null !== t && "object" == typeof t
            }

            function h(t) {
                return "[object Object]" === xn.call(t)
            }

            function u(t) {
                return "[object RegExp]" === xn.call(t)
            }

            function c(t) {
                var e = parseFloat(String(t));
                return e >= 0 && Math.floor(e) === e && isFinite(t)
            }

            function f(t) {
                return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
            }

            function p(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e
            }

            function d(t, e) {
                for (var i = Object.create(null), n = t.split(","), r = 0; r < n.length; r++) i[n[r]] = !0;
                return e ? function(t) {
                    return i[t.toLowerCase()]
                } : function(t) {
                    return i[t]
                }
            }

            function m(t, e) {
                if (t.length) {
                    var i = t.indexOf(e);
                    if (i > -1) return t.splice(i, 1)
                }
            }

            function v(t, e) {
                return bn.call(t, e)
            }

            function g(t) {
                var e = Object.create(null);
                return function(i) {
                    var n = e[i];
                    return n || (e[i] = t(i))
                }
            }

            function _(t, e) {
                function i(i) {
                    var n = arguments.length;
                    return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e)
                }
                return i._length = t.length, i
            }

            function y(t, e) {
                e = e || 0;
                for (var i = t.length - e, n = new Array(i); i--;) n[i] = t[i + e];
                return n
            }

            function x(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }

            function w(t) {
                for (var e = {}, i = 0; i < t.length; i++) t[i] && x(e, t[i]);
                return e
            }

            function b(t, e, i) {}

            function T(t, e) {
                if (t === e) return !0;
                var i = l(t),
                    n = l(e);
                if (!i || !n) return !i && !n && String(t) === String(e);
                try {
                    var r = Array.isArray(t),
                        o = Array.isArray(e);
                    if (r && o) return t.length === e.length && t.every(function(t, i) {
                        return T(t, e[i])
                    });
                    if (r || o) return !1;
                    var a = Object.keys(t),
                        s = Object.keys(e);
                    return a.length === s.length && a.every(function(i) {
                        return T(t[i], e[i])
                    })
                } catch (h) {
                    return !1
                }
            }

            function S(t, e) {
                for (var i = 0; i < t.length; i++)
                    if (T(t[i], e)) return i;
                return -1
            }

            function P(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t.apply(this, arguments))
                }
            }

            function k(t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e
            }

            function C(t, e, i, n) {
                Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !!n,
                    writable: !0,
                    configurable: !0
                })
            }

            function A(t) {
                if (!Ln.test(t)) {
                    var e = t.split(".");
                    return function(t) {
                        for (var i = 0; i < e.length; i++) {
                            if (!t) return;
                            t = t[e[i]]
                        }
                        return t
                    }
                }
            }

            function M(t) {
                return "function" == typeof t && /native code/.test(t.toString())
            }

            function O(t) {
                ir.target && nr.push(ir.target), ir.target = t
            }

            function E() {
                ir.target = nr.pop()
            }

            function D(t) {
                return new rr((void 0), (void 0), (void 0), String(t))
            }

            function I(t, e) {
                var i = t.componentOptions,
                    n = new rr(t.tag, t.data, t.children, t.text, t.elm, t.context, i, t.asyncFactory);
                return n.ns = t.ns, n.isStatic = t.isStatic, n.key = t.key, n.isComment = t.isComment, n.fnContext = t.fnContext, n.fnOptions = t.fnOptions, n.fnScopeId = t.fnScopeId, n.isCloned = !0, e && (t.children && (n.children = L(t.children, !0)), i && i.children && (i.children = L(i.children, !0))), n
            }

            function L(t, e) {
                for (var i = t.length, n = new Array(i), r = 0; r < i; r++) n[r] = I(t[r], e);
                return n
            }

            function R(t, e, i) {
                t.__proto__ = e
            }

            function z(t, e, i) {
                for (var n = 0, r = i.length; n < r; n++) {
                    var o = i[n];
                    C(t, o, e[o])
                }
            }

            function F(t, e) {
                if (l(t) && !(t instanceof rr)) {
                    var i;
                    return v(t, "__ob__") && t.__ob__ instanceof cr ? i = t.__ob__ : ur.shouldConvert && !Kn() && (Array.isArray(t) || h(t)) && Object.isExtensible(t) && !t._isVue && (i = new cr(t)), e && i && i.vmCount++, i
                }
            }

            function B(t, e, i, n, r) {
                var o = new ir,
                    a = Object.getOwnPropertyDescriptor(t, e);
                if (!a || a.configurable !== !1) {
                    var s = a && a.get,
                        l = a && a.set,
                        h = !r && F(i);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var e = s ? s.call(t) : i;
                            return ir.target && (o.depend(), h && (h.dep.depend(), Array.isArray(e) && X(e))), e
                        },
                        set: function(e) {
                            var n = s ? s.call(t) : i;
                            e === n || e !== e && n !== n || (l ? l.call(t, e) : i = e, h = !r && F(e), o.notify())
                        }
                    })
                }
            }

            function N(t, e, i) {
                if (Array.isArray(t) && c(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, i), i;
                if (e in t && !(e in Object.prototype)) return t[e] = i, i;
                var n = t.__ob__;
                return t._isVue || n && n.vmCount ? i : n ? (B(n.value, e, i), n.dep.notify(), i) : (t[e] = i, i)
            }

            function j(t, e) {
                if (Array.isArray(t) && c(e)) return void t.splice(e, 1);
                var i = t.__ob__;
                t._isVue || i && i.vmCount || v(t, e) && (delete t[e], i && i.dep.notify())
            }

            function X(t) {
                for (var e = void 0, i = 0, n = t.length; i < n; i++) e = t[i], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && X(e)
            }

            function $(t, e) {
                if (!e) return t;
                for (var i, n, r, o = Object.keys(e), a = 0; a < o.length; a++) i = o[a], n = t[i], r = e[i], v(t, i) ? h(n) && h(r) && $(n, r) : N(t, i, r);
                return t
            }

            function V(t, e, i) {
                return i ? function() {
                    var n = "function" == typeof e ? e.call(i, i) : e,
                        r = "function" == typeof t ? t.call(i, i) : t;
                    return n ? $(n, r) : r
                } : e ? t ? function() {
                    return $("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t)
                } : e : t
            }

            function H(t, e) {
                return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
            }

            function U(t, e, i, n) {
                var r = Object.create(t || null);
                return e ? x(r, e) : r
            }

            function Y(t, e) {
                var i = t.props;
                if (i) {
                    var n, r, o, a = {};
                    if (Array.isArray(i))
                        for (n = i.length; n--;) r = i[n], "string" == typeof r && (o = Sn(r), a[o] = {
                            type: null
                        });
                    else if (h(i))
                        for (var s in i) r = i[s], o = Sn(s), a[o] = h(r) ? r : {
                            type: r
                        };
                    t.props = a
                }
            }

            function W(t, e) {
                var i = t.inject;
                if (i) {
                    var n = t.inject = {};
                    if (Array.isArray(i))
                        for (var r = 0; r < i.length; r++) n[i[r]] = {
                            from: i[r]
                        };
                    else if (h(i))
                        for (var o in i) {
                            var a = i[o];
                            n[o] = h(a) ? x({
                                from: o
                            }, a) : {
                                from: a
                            }
                        }
                }
            }

            function q(t) {
                var e = t.directives;
                if (e)
                    for (var i in e) {
                        var n = e[i];
                        "function" == typeof n && (e[i] = {
                            bind: n,
                            update: n
                        })
                    }
            }

            function G(t, e, i) {
                function n(n) {
                    var r = fr[n] || mr;
                    l[n] = r(t[n], e[n], i, n)
                }
                "function" == typeof e && (e = e.options), Y(e, i), W(e, i), q(e);
                var r = e["extends"];
                if (r && (t = G(t, r, i)), e.mixins)
                    for (var o = 0, a = e.mixins.length; o < a; o++) t = G(t, e.mixins[o], i);
                var s, l = {};
                for (s in t) n(s);
                for (s in e) v(t, s) || n(s);
                return l
            }

            function Z(t, e, i, n) {
                if ("string" == typeof i) {
                    var r = t[e];
                    if (v(r, i)) return r[i];
                    var o = Sn(i);
                    if (v(r, o)) return r[o];
                    var a = Pn(o);
                    if (v(r, a)) return r[a];
                    var s = r[i] || r[o] || r[a];
                    return s
                }
            }

            function K(t, e, i, n) {
                var r = e[t],
                    o = !v(i, t),
                    a = i[t];
                if (tt(Boolean, r.type) && (o && !v(r, "default") ? a = !1 : tt(String, r.type) || "" !== a && a !== Cn(t) || (a = !0)), void 0 === a) {
                    a = Q(n, r, t);
                    var s = ur.shouldConvert;
                    ur.shouldConvert = !0, F(a), ur.shouldConvert = s
                }
                return a
            }

            function Q(t, e, i) {
                if (v(e, "default")) {
                    var n = e["default"];
                    return t && t.$options.propsData && void 0 === t.$options.propsData[i] && void 0 !== t._props[i] ? t._props[i] : "function" == typeof n && "Function" !== J(e.type) ? n.call(t) : n
                }
            }

            function J(t) {
                var e = t && t.toString().match(/^\s*function (\w+)/);
                return e ? e[1] : ""
            }

            function tt(t, e) {
                if (!Array.isArray(e)) return J(e) === J(t);
                for (var i = 0, n = e.length; i < n; i++)
                    if (J(e[i]) === J(t)) return !0;
                return !1
            }

            function et(t, e, i) {
                if (e)
                    for (var n = e; n = n.$parent;) {
                        var r = n.$options.errorCaptured;
                        if (r)
                            for (var o = 0; o < r.length; o++) try {
                                var a = r[o].call(n, t, e, i) === !1;
                                if (a) return
                            } catch (s) {
                                it(s, n, "errorCaptured hook")
                            }
                    }
                it(t, e, i)
            }

            function it(t, e, i) {
                if (In.errorHandler) try {
                    return In.errorHandler.call(null, t, e, i)
                } catch (n) {
                    nt(n, null, "config.errorHandler")
                }
                nt(t, e, i)
            }

            function nt(t, e, i) {
                if (!zn && !Fn || "undefined" == typeof console) throw t;
                console.error(t)
            }

            function rt() {
                gr = !1;
                var t = vr.slice(0);
                vr.length = 0;
                for (var e = 0; e < t.length; e++) t[e]()
            }

            function ot(t) {
                return t._withTask || (t._withTask = function() {
                    _r = !0;
                    var e = t.apply(null, arguments);
                    return _r = !1, e
                })
            }

            function at(t, e) {
                var i;
                if (vr.push(function() {
                        if (t) try {
                            t.call(e)
                        } catch (n) {
                            et(n, e, "nextTick")
                        } else i && i(e)
                    }), gr || (gr = !0, _r ? dr() : pr()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                    i = t
                })
            }

            function st(t) {
                lt(t, Tr), Tr.clear()
            }

            function lt(t, e) {
                var i, n, r = Array.isArray(t);
                if ((r || l(t)) && !Object.isFrozen(t)) {
                    if (t.__ob__) {
                        var o = t.__ob__.dep.id;
                        if (e.has(o)) return;
                        e.add(o)
                    }
                    if (r)
                        for (i = t.length; i--;) lt(t[i], e);
                    else
                        for (n = Object.keys(t), i = n.length; i--;) lt(t[n[i]], e)
                }
            }

            function ht(t) {
                function e() {
                    var t = arguments,
                        i = e.fns;
                    if (!Array.isArray(i)) return i.apply(null, arguments);
                    for (var n = i.slice(), r = 0; r < n.length; r++) n[r].apply(null, t)
                }
                return e.fns = t, e
            }

            function ut(t, e, i, r, o) {
                var a, s, l, h, u;
                for (a in t) s = l = t[a], h = e[a], u = Sr(a), n(l) || (n(h) ? (n(l.fns) && (l = t[a] = ht(l)), i(u.name, l, u.once, u.capture, u.passive, u.params)) : l !== h && (h.fns = l, t[a] = h));
                for (a in e) n(t[a]) && (u = Sr(a), r(u.name, e[a], u.capture))
            }

            function ct(t, e, i) {
                function a() {
                    i.apply(this, arguments), m(s.fns, a)
                }
                t instanceof rr && (t = t.data.hook || (t.data.hook = {}));
                var s, l = t[e];
                n(l) ? s = ht([a]) : r(l.fns) && o(l.merged) ? (s = l, s.fns.push(a)) : s = ht([l, a]), s.merged = !0, t[e] = s
            }

            function ft(t, e, i) {
                var o = e.options.props;
                if (!n(o)) {
                    var a = {},
                        s = t.attrs,
                        l = t.props;
                    if (r(s) || r(l))
                        for (var h in o) {
                            var u = Cn(h);
                            pt(a, l, h, u, !0) || pt(a, s, h, u, !1)
                        }
                    return a
                }
            }

            function pt(t, e, i, n, o) {
                if (r(e)) {
                    if (v(e, i)) return t[i] = e[i], o || delete e[i], !0;
                    if (v(e, n)) return t[i] = e[n], o || delete e[n], !0
                }
                return !1
            }

            function dt(t) {
                for (var e = 0; e < t.length; e++)
                    if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t
            }

            function mt(t) {
                return s(t) ? [D(t)] : Array.isArray(t) ? gt(t) : void 0
            }

            function vt(t) {
                return r(t) && r(t.text) && a(t.isComment)
            }

            function gt(t, e) {
                var i, a, l, h, u = [];
                for (i = 0; i < t.length; i++) a = t[i], n(a) || "boolean" == typeof a || (l = u.length - 1, h = u[l], Array.isArray(a) ? a.length > 0 && (a = gt(a, (e || "") + "_" + i), vt(a[0]) && vt(h) && (u[l] = D(h.text + a[0].text), a.shift()), u.push.apply(u, a)) : s(a) ? vt(h) ? u[l] = D(h.text + a) : "" !== a && u.push(D(a)) : vt(a) && vt(h) ? u[l] = D(h.text + a.text) : (o(t._isVList) && r(a.tag) && n(a.key) && r(e) && (a.key = "__vlist" + e + "_" + i + "__"), u.push(a)));
                return u
            }

            function _t(t, e) {
                return (t.__esModule || Jn && "Module" === t[Symbol.toStringTag]) && (t = t["default"]), l(t) ? e.extend(t) : t
            }

            function yt(t, e, i, n, r) {
                var o = ar();
                return o.asyncFactory = t, o.asyncMeta = {
                    data: e,
                    context: i,
                    children: n,
                    tag: r
                }, o
            }

            function xt(t, e, i) {
                if (o(t.error) && r(t.errorComp)) return t.errorComp;
                if (r(t.resolved)) return t.resolved;
                if (o(t.loading) && r(t.loadingComp)) return t.loadingComp;
                if (!r(t.contexts)) {
                    var a = t.contexts = [i],
                        s = !0,
                        h = function() {
                            for (var t = 0, e = a.length; t < e; t++) a[t].$forceUpdate()
                        },
                        u = P(function(i) {
                            t.resolved = _t(i, e), s || h()
                        }),
                        c = P(function(e) {
                            r(t.errorComp) && (t.error = !0, h())
                        }),
                        f = t(u, c);
                    return l(f) && ("function" == typeof f.then ? n(t.resolved) && f.then(u, c) : r(f.component) && "function" == typeof f.component.then && (f.component.then(u, c), r(f.error) && (t.errorComp = _t(f.error, e)), r(f.loading) && (t.loadingComp = _t(f.loading, e), 0 === f.delay ? t.loading = !0 : setTimeout(function() {
                        n(t.resolved) && n(t.error) && (t.loading = !0, h())
                    }, f.delay || 200)), r(f.timeout) && setTimeout(function() {
                        n(t.resolved) && c(null)
                    }, f.timeout))), s = !1, t.loading ? t.loadingComp : t.resolved
                }
                t.contexts.push(i)
            }

            function wt(t) {
                return t.isComment && t.asyncFactory
            }

            function bt(t) {
                if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if (r(i) && (r(i.componentOptions) || wt(i))) return i
                    }
            }

            function Tt(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && kt(t, e)
            }

            function St(t, e, i) {
                i ? br.$once(t, e) : br.$on(t, e)
            }

            function Pt(t, e) {
                br.$off(t, e)
            }

            function kt(t, e, i) {
                br = t, ut(e, i || {}, St, Pt, t), br = void 0
            }

            function Ct(t) {
                var e = /^hook:/;
                t.prototype.$on = function(t, i) {
                    var n = this,
                        r = this;
                    if (Array.isArray(t))
                        for (var o = 0, a = t.length; o < a; o++) n.$on(t[o], i);
                    else(r._events[t] || (r._events[t] = [])).push(i), e.test(t) && (r._hasHookEvent = !0);
                    return r
                }, t.prototype.$once = function(t, e) {
                    function i() {
                        n.$off(t, i), e.apply(n, arguments)
                    }
                    var n = this;
                    return i.fn = e, n.$on(t, i), n
                }, t.prototype.$off = function(t, e) {
                    var i = this,
                        n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(t)) {
                        for (var r = 0, o = t.length; r < o; r++) i.$off(t[r], e);
                        return n
                    }
                    var a = n._events[t];
                    if (!a) return n;
                    if (!e) return n._events[t] = null, n;
                    if (e)
                        for (var s, l = a.length; l--;)
                            if (s = a[l], s === e || s.fn === e) {
                                a.splice(l, 1);
                                break
                            }
                    return n
                }, t.prototype.$emit = function(t) {
                    var e = this,
                        i = e._events[t];
                    if (i) {
                        i = i.length > 1 ? y(i) : i;
                        for (var n = y(arguments, 1), r = 0, o = i.length; r < o; r++) try {
                            i[r].apply(e, n)
                        } catch (a) {
                            et(a, e, 'event handler for "' + t + '"')
                        }
                    }
                    return e
                }
            }

            function At(t, e) {
                var i = {};
                if (!t) return i;
                for (var n = 0, r = t.length; n < r; n++) {
                    var o = t[n],
                        a = o.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== e && o.fnContext !== e || !a || null == a.slot)(i["default"] || (i["default"] = [])).push(o);
                    else {
                        var s = a.slot,
                            l = i[s] || (i[s] = []);
                        "template" === o.tag ? l.push.apply(l, o.children || []) : l.push(o)
                    }
                }
                for (var h in i) i[h].every(Mt) && delete i[h];
                return i
            }

            function Mt(t) {
                return t.isComment && !t.asyncFactory || " " === t.text
            }

            function Ot(t, e) {
                e = e || {};
                for (var i = 0; i < t.length; i++) Array.isArray(t[i]) ? Ot(t[i], e) : e[t[i].key] = t[i].fn;
                return e
            }

            function Et(t) {
                var e = t.$options,
                    i = e.parent;
                if (i && !e["abstract"]) {
                    for (; i.$options["abstract"] && i.$parent;) i = i.$parent;
                    i.$children.push(t)
                }
                t.$parent = i, t.$root = i ? i.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
            }

            function Dt(t) {
                t.prototype._update = function(t, e) {
                    var i = this;
                    i._isMounted && Bt(i, "beforeUpdate");
                    var n = i.$el,
                        r = i._vnode,
                        o = Pr;
                    Pr = i, i._vnode = t, r ? i.$el = i.__patch__(r, t) : (i.$el = i.__patch__(i.$el, t, e, !1, i.$options._parentElm, i.$options._refElm), i.$options._parentElm = i.$options._refElm = null), Pr = o, n && (n.__vue__ = null), i.$el && (i.$el.__vue__ = i), i.$vnode && i.$parent && i.$vnode === i.$parent._vnode && (i.$parent.$el = i.$el)
                }, t.prototype.$forceUpdate = function() {
                    var t = this;
                    t._watcher && t._watcher.update()
                }, t.prototype.$destroy = function() {
                    var t = this;
                    if (!t._isBeingDestroyed) {
                        Bt(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                        var e = t.$parent;
                        !e || e._isBeingDestroyed || t.$options["abstract"] || m(e.$children, t), t._watcher && t._watcher.teardown();
                        for (var i = t._watchers.length; i--;) t._watchers[i].teardown();
                        t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Bt(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
                    }
                }
            }

            function It(t, e, i) {
                t.$el = e, t.$options.render || (t.$options.render = ar), Bt(t, "beforeMount");
                var n;
                return n = function() {
                    t._update(t._render(), i)
                }, new Ir(t, n, b, null, (!0)), i = !1, null == t.$vnode && (t._isMounted = !0, Bt(t, "mounted")), t
            }

            function Lt(t, e, i, n, r) {
                var o = !!(r || t.$options._renderChildren || n.data.scopedSlots || t.$scopedSlots !== yn);
                if (t.$options._parentVnode = n, t.$vnode = n, t._vnode && (t._vnode.parent = n), t.$options._renderChildren = r, t.$attrs = n.data && n.data.attrs || yn, t.$listeners = i || yn, e && t.$options.props) {
                    ur.shouldConvert = !1;
                    for (var a = t._props, s = t.$options._propKeys || [], l = 0; l < s.length; l++) {
                        var h = s[l];
                        a[h] = K(h, t.$options.props, e, t)
                    }
                    ur.shouldConvert = !0, t.$options.propsData = e
                }
                if (i) {
                    var u = t.$options._parentListeners;
                    t.$options._parentListeners = i, kt(t, i, u)
                }
                o && (t.$slots = At(r, n.context), t.$forceUpdate())
            }

            function Rt(t) {
                for (; t && (t = t.$parent);)
                    if (t._inactive) return !0;
                return !1
            }

            function zt(t, e) {
                if (e) {
                    if (t._directInactive = !1, Rt(t)) return
                } else if (t._directInactive) return;
                if (t._inactive || null === t._inactive) {
                    t._inactive = !1;
                    for (var i = 0; i < t.$children.length; i++) zt(t.$children[i]);
                    Bt(t, "activated")
                }
            }

            function Ft(t, e) {
                if (!(e && (t._directInactive = !0, Rt(t)) || t._inactive)) {
                    t._inactive = !0;
                    for (var i = 0; i < t.$children.length; i++) Ft(t.$children[i]);
                    Bt(t, "deactivated")
                }
            }

            function Bt(t, e) {
                var i = t.$options[e];
                if (i)
                    for (var n = 0, r = i.length; n < r; n++) try {
                        i[n].call(t)
                    } catch (o) {
                        et(o, t, e + " hook")
                    }
                t._hasHookEvent && t.$emit("hook:" + e)
            }

            function Nt() {
                Er = kr.length = Cr.length = 0, Ar = {}, Mr = Or = !1
            }

            function jt() {
                Or = !0;
                var t, e;
                for (kr.sort(function(t, e) {
                    return t.id - e.id
                }), Er = 0; Er < kr.length; Er++) t = kr[Er], e = t.id, Ar[e] = null, t.run();
                var i = Cr.slice(),
                    n = kr.slice();
                Nt(), Vt(i), Xt(n), Qn && In.devtools && Qn.emit("flush")
            }

            function Xt(t) {
                for (var e = t.length; e--;) {
                    var i = t[e],
                        n = i.vm;
                    n._watcher === i && n._isMounted && Bt(n, "updated")
                }
            }

            function $t(t) {
                t._inactive = !1, Cr.push(t)
            }

            function Vt(t) {
                for (var e = 0; e < t.length; e++) t[e]._inactive = !0, zt(t[e], !0)
            }

            function Ht(t) {
                var e = t.id;
                if (null == Ar[e]) {
                    if (Ar[e] = !0, Or) {
                        for (var i = kr.length - 1; i > Er && kr[i].id > t.id;) i--;
                        kr.splice(i + 1, 0, t)
                    } else kr.push(t);
                    Mr || (Mr = !0, at(jt))
                }
            }

            function Ut(t, e, i) {
                Lr.get = function() {
                    return this[e][i]
                }, Lr.set = function(t) {
                    this[e][i] = t
                }, Object.defineProperty(t, i, Lr)
            }

            function Yt(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && Wt(t, e.props), e.methods && Jt(t, e.methods), e.data ? qt(t) : F(t._data = {}, !0), e.computed && Zt(t, e.computed), e.watch && e.watch !== Un && te(t, e.watch)
            }

            function Wt(t, e) {
                var i = t.$options.propsData || {},
                    n = t._props = {},
                    r = t.$options._propKeys = [],
                    o = !t.$parent;
                ur.shouldConvert = o;
                var a = function(o) {
                    r.push(o);
                    var a = K(o, e, i, t);
                    B(n, o, a), o in t || Ut(t, "_props", o)
                };
                for (var s in e) a(s);
                ur.shouldConvert = !0
            }

            function qt(t) {
                var e = t.$options.data;
                e = t._data = "function" == typeof e ? Gt(e, t) : e || {}, h(e) || (e = {});
                for (var i = Object.keys(e), n = t.$options.props, r = (t.$options.methods, i.length); r--;) {
                    var o = i[r];
                    n && v(n, o) || k(o) || Ut(t, "_data", o)
                }
                F(e, !0)
            }

            function Gt(t, e) {
                try {
                    return t.call(e, e)
                } catch (i) {
                    return et(i, e, "data()"), {}
                }
            }

            function Zt(t, e) {
                var i = t._computedWatchers = Object.create(null),
                    n = Kn();
                for (var r in e) {
                    var o = e[r],
                        a = "function" == typeof o ? o : o.get;
                    n || (i[r] = new Ir(t, a || b, b, Rr)), r in t || Kt(t, r, o)
                }
            }

            function Kt(t, e, i) {
                var n = !Kn();
                "function" == typeof i ? (Lr.get = n ? Qt(e) : i, Lr.set = b) : (Lr.get = i.get ? n && i.cache !== !1 ? Qt(e) : i.get : b, Lr.set = i.set ? i.set : b), Object.defineProperty(t, e, Lr)
            }

            function Qt(t) {
                return function() {
                    var e = this._computedWatchers && this._computedWatchers[t];
                    if (e) return e.dirty && e.evaluate(), ir.target && e.depend(), e.value
                }
            }

            function Jt(t, e) {
                t.$options.props;
                for (var i in e) t[i] = null == e[i] ? b : _(e[i], t)
            }

            function te(t, e) {
                for (var i in e) {
                    var n = e[i];
                    if (Array.isArray(n))
                        for (var r = 0; r < n.length; r++) ee(t, i, n[r]);
                    else ee(t, i, n)
                }
            }

            function ee(t, e, i, n) {
                return h(i) && (n = i, i = i.handler), "string" == typeof i && (i = t[i]), t.$watch(e, i, n)
            }

            function ie(t) {
                var e = {};
                e.get = function() {
                    return this._data
                };
                var i = {};
                i.get = function() {
                    return this._props
                }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", i), t.prototype.$set = N, t.prototype.$delete = j, t.prototype.$watch = function(t, e, i) {
                    var n = this;
                    if (h(e)) return ee(n, t, e, i);
                    i = i || {}, i.user = !0;
                    var r = new Ir(n, t, e, i);
                    return i.immediate && e.call(n, r.value),
                        function() {
                            r.teardown()
                        }
                }
            }

            function ne(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e)
            }

            function re(t) {
                var e = oe(t.$options.inject, t);
                e && (ur.shouldConvert = !1, Object.keys(e).forEach(function(i) {
                    B(t, i, e[i])
                }), ur.shouldConvert = !0)
            }

            function oe(t, e) {
                if (t) {
                    for (var i = Object.create(null), n = Jn ? Reflect.ownKeys(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }) : Object.keys(t), r = 0; r < n.length; r++) {
                        for (var o = n[r], a = t[o].from, s = e; s;) {
                            if (s._provided && a in s._provided) {
                                i[o] = s._provided[a];
                                break
                            }
                            s = s.$parent
                        }
                        if (!s && "default" in t[o]) {
                            var l = t[o]["default"];
                            i[o] = "function" == typeof l ? l.call(e) : l
                        }
                    }
                    return i
                }
            }

            function ae(t, e) {
                var i, n, o, a, s;
                if (Array.isArray(t) || "string" == typeof t)
                    for (i = new Array(t.length), n = 0, o = t.length; n < o; n++) i[n] = e(t[n], n);
                else if ("number" == typeof t)
                    for (i = new Array(t), n = 0; n < t; n++) i[n] = e(n + 1, n);
                else if (l(t))
                    for (a = Object.keys(t), i = new Array(a.length), n = 0, o = a.length; n < o; n++) s = a[n], i[n] = e(t[s], s, n);
                return r(i) && (i._isVList = !0), i
            }

            function se(t, e, i, n) {
                var r, o = this.$scopedSlots[t];
                if (o) i = i || {}, n && (i = x(x({}, n), i)), r = o(i) || e;
                else {
                    var a = this.$slots[t];
                    a && (a._rendered = !0), r = a || e
                }
                var s = i && i.slot;
                return s ? this.$createElement("template", {
                    slot: s
                }, r) : r
            }

            function le(t) {
                return Z(this.$options, "filters", t, !0) || Mn
            }

            function he(t, e, i, n) {
                var r = In.keyCodes[e] || i;
                return r ? Array.isArray(r) ? r.indexOf(t) === -1 : r !== t : n ? Cn(n) !== e : void 0
            }

            function ue(t, e, i, n, r) {
                if (i)
                    if (l(i)) {
                        Array.isArray(i) && (i = w(i));
                        var o, a = function(a) {
                            if ("class" === a || "style" === a || wn(a)) o = t;
                            else {
                                var s = t.attrs && t.attrs.type;
                                o = n || In.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                            }
                            if (!(a in o) && (o[a] = i[a], r)) {
                                var l = t.on || (t.on = {});
                                l["update:" + a] = function(t) {
                                    i[a] = t
                                }
                            }
                        };
                        for (var s in i) a(s)
                    } else;
                return t
            }

            function ce(t, e) {
                var i = this._staticTrees || (this._staticTrees = []),
                    n = i[t];
                return n && !e ? Array.isArray(n) ? L(n) : I(n) : (n = i[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), pe(n, "__static__" + t, !1), n)
            }

            function fe(t, e, i) {
                return pe(t, "__once__" + e + (i ? "_" + i : ""), !0), t
            }

            function pe(t, e, i) {
                if (Array.isArray(t))
                    for (var n = 0; n < t.length; n++) t[n] && "string" != typeof t[n] && de(t[n], e + "_" + n, i);
                else de(t, e, i)
            }

            function de(t, e, i) {
                t.isStatic = !0, t.key = e, t.isOnce = i
            }

            function me(t, e) {
                if (e)
                    if (h(e)) {
                        var i = t.on = t.on ? x({}, t.on) : {};
                        for (var n in e) {
                            var r = i[n],
                                o = e[n];
                            i[n] = r ? [].concat(r, o) : o
                        }
                    } else;
                return t
            }

            function ve(t) {
                t._o = fe, t._n = p, t._s = f, t._l = ae, t._t = se, t._q = T, t._i = S, t._m = ce, t._f = le, t._k = he, t._b = ue, t._v = D, t._e = ar, t._u = Ot, t._g = me
            }

            function ge(t, e, i, n, r) {
                var a = r.options;
                this.data = t, this.props = e, this.children = i, this.parent = n, this.listeners = t.on || yn, this.injections = oe(a.inject, n), this.slots = function() {
                    return At(i, n)
                };
                var s = Object.create(n),
                    l = o(a._compiled),
                    h = !l;
                l && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || yn), a._scopeId ? this._c = function(t, e, i, r) {
                    var o = Pe(s, t, e, i, r, h);
                    return o && (o.fnScopeId = a._scopeId, o.fnContext = n), o
                } : this._c = function(t, e, i, n) {
                    return Pe(s, t, e, i, n, h)
                }
            }

            function _e(t, e, i, n, o) {
                var a = t.options,
                    s = {},
                    l = a.props;
                if (r(l))
                    for (var h in l) s[h] = K(h, l, e || yn);
                else r(i.attrs) && ye(s, i.attrs), r(i.props) && ye(s, i.props);
                var u = new ge(i, s, o, n, t),
                    c = a.render.call(null, u._c, u);
                return c instanceof rr && (c.fnContext = n, c.fnOptions = a, i.slot && ((c.data || (c.data = {})).slot = i.slot)), c
            }

            function ye(t, e) {
                for (var i in e) t[Sn(i)] = e[i]
            }

            function xe(t, e, i, a, s) {
                if (!n(t)) {
                    var h = i.$options._base;
                    if (l(t) && (t = h.extend(t)), "function" == typeof t) {
                        var u;
                        if (n(t.cid) && (u = t, t = xt(u, h, i), void 0 === t)) return yt(u, e, i, a, s);
                        e = e || {}, De(t), r(e.model) && Se(t.options, e);
                        var c = ft(e, t, s);
                        if (o(t.options.functional)) return _e(t, c, e, i, a);
                        var f = e.on;
                        if (e.on = e.nativeOn, o(t.options["abstract"])) {
                            var p = e.slot;
                            e = {}, p && (e.slot = p)
                        }
                        be(e);
                        var d = t.options.name || s,
                            m = new rr("vue-component-" + t.cid + (d ? "-" + d : ""), e, (void 0), (void 0), (void 0), i, {
                                Ctor: t,
                                propsData: c,
                                listeners: f,
                                tag: s,
                                children: a
                            }, u);
                        return m
                    }
                }
            }

            function we(t, e, i, n) {
                var o = {
                        _isComponent: !0,
                        parent: e,
                        _parentVnode: t,
                        _parentElm: i || null,
                        _refElm: n || null
                    },
                    a = t.data.inlineTemplate;
                return r(a) && (o.render = a.render, o.staticRenderFns = a.staticRenderFns), new t.componentOptions.Ctor(o)
            }

            function be(t) {
                t.hook || (t.hook = {});
                for (var e = 0; e < Fr.length; e++) {
                    var i = Fr[e],
                        n = t.hook[i],
                        r = zr[i];
                    t.hook[i] = n ? Te(r, n) : r
                }
            }

            function Te(t, e) {
                return function(i, n, r, o) {
                    t(i, n, r, o), e(i, n, r, o)
                }
            }

            function Se(t, e) {
                var i = t.model && t.model.prop || "value",
                    n = t.model && t.model.event || "input";
                (e.props || (e.props = {}))[i] = e.model.value;
                var o = e.on || (e.on = {});
                r(o[n]) ? o[n] = [e.model.callback].concat(o[n]) : o[n] = e.model.callback
            }

            function Pe(t, e, i, n, r, a) {
                return (Array.isArray(i) || s(i)) && (r = n, n = i, i = void 0), o(a) && (r = Nr), ke(t, e, i, n, r)
            }

            function ke(t, e, i, n, o) {
                if (r(i) && r(i.__ob__)) return ar();
                if (r(i) && r(i.is) && (e = i.is), !e) return ar();
                Array.isArray(n) && "function" == typeof n[0] && (i = i || {}, i.scopedSlots = {
                    "default": n[0]
                }, n.length = 0), o === Nr ? n = mt(n) : o === Br && (n = dt(n));
                var a, s;
                if ("string" == typeof e) {
                    var l;
                    s = t.$vnode && t.$vnode.ns || In.getTagNamespace(e), a = In.isReservedTag(e) ? new rr(In.parsePlatformTagName(e), i, n, (void 0), (void 0), t) : r(l = Z(t.$options, "components", e)) ? xe(l, i, t, n, e) : new rr(e, i, n, (void 0), (void 0), t)
                } else a = xe(e, i, t, n);
                return r(a) ? (s && Ce(a, s), a) : ar()
            }

            function Ce(t, e, i) {
                if (t.ns = e, "foreignObject" === t.tag && (e = void 0, i = !0), r(t.children))
                    for (var a = 0, s = t.children.length; a < s; a++) {
                        var l = t.children[a];
                        r(l.tag) && (n(l.ns) || o(i)) && Ce(l, e, i)
                    }
            }

            function Ae(t) {
                t._vnode = null, t._staticTrees = null;
                var e = t.$options,
                    i = t.$vnode = e._parentVnode,
                    n = i && i.context;
                t.$slots = At(e._renderChildren, n), t.$scopedSlots = yn, t._c = function(e, i, n, r) {
                    return Pe(t, e, i, n, r, !1)
                }, t.$createElement = function(e, i, n, r) {
                    return Pe(t, e, i, n, r, !0)
                };
                var r = i && i.data;
                B(t, "$attrs", r && r.attrs || yn, null, !0), B(t, "$listeners", e._parentListeners || yn, null, !0)
            }

            function Me(t) {
                ve(t.prototype), t.prototype.$nextTick = function(t) {
                    return at(t, this)
                }, t.prototype._render = function() {
                    var t = this,
                        e = t.$options,
                        i = e.render,
                        n = e._parentVnode;
                    if (t._isMounted)
                        for (var r in t.$slots) {
                            var o = t.$slots[r];
                            (o._rendered || o[0] && o[0].elm) && (t.$slots[r] = L(o, !0))
                        }
                    t.$scopedSlots = n && n.data.scopedSlots || yn, t.$vnode = n;
                    var a;
                    try {
                        a = i.call(t._renderProxy, t.$createElement)
                    } catch (s) {
                        et(s, t, "render"), a = t._vnode
                    }
                    return a instanceof rr || (a = ar()), a.parent = n, a
                }
            }

            function Oe(t) {
                t.prototype._init = function(t) {
                    var e = this;
                    e._uid = jr++;
                    e._isVue = !0, t && t._isComponent ? Ee(e, t) : e.$options = G(De(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, Et(e), Tt(e), Ae(e), Bt(e, "beforeCreate"), re(e), Yt(e), ne(e), Bt(e, "created"), e.$options.el && e.$mount(e.$options.el)
                }
            }

            function Ee(t, e) {
                var i = t.$options = Object.create(t.constructor.options),
                    n = e._parentVnode;
                i.parent = e.parent, i._parentVnode = n, i._parentElm = e._parentElm, i._refElm = e._refElm;
                var r = n.componentOptions;
                i.propsData = r.propsData, i._parentListeners = r.listeners, i._renderChildren = r.children, i._componentTag = r.tag, e.render && (i.render = e.render, i.staticRenderFns = e.staticRenderFns)
            }

            function De(t) {
                var e = t.options;
                if (t["super"]) {
                    var i = De(t["super"]),
                        n = t.superOptions;
                    if (i !== n) {
                        t.superOptions = i;
                        var r = Ie(t);
                        r && x(t.extendOptions, r), e = t.options = G(i, t.extendOptions), e.name && (e.components[e.name] = t)
                    }
                }
                return e
            }

            function Ie(t) {
                var e, i = t.options,
                    n = t.extendOptions,
                    r = t.sealedOptions;
                for (var o in i) i[o] !== r[o] && (e || (e = {}), e[o] = Le(i[o], n[o], r[o]));
                return e
            }

            function Le(t, e, i) {
                if (Array.isArray(t)) {
                    var n = [];
                    i = Array.isArray(i) ? i : [i], e = Array.isArray(e) ? e : [e];
                    for (var r = 0; r < t.length; r++)(e.indexOf(t[r]) >= 0 || i.indexOf(t[r]) < 0) && n.push(t[r]);
                    return n
                }
                return t
            }

            function Re(t) {
                this._init(t)
            }

            function ze(t) {
                t.use = function(t) {
                    var e = this._installedPlugins || (this._installedPlugins = []);
                    if (e.indexOf(t) > -1) return this;
                    var i = y(arguments, 1);
                    return i.unshift(this), "function" == typeof t.install ? t.install.apply(t, i) : "function" == typeof t && t.apply(null, i), e.push(t), this
                }
            }

            function Fe(t) {
                t.mixin = function(t) {
                    return this.options = G(this.options, t), this
                }
            }

            function Be(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function(t) {
                    t = t || {};
                    var i = this,
                        n = i.cid,
                        r = t._Ctor || (t._Ctor = {});
                    if (r[n]) return r[n];
                    var o = t.name || i.options.name,
                        a = function(t) {
                            this._init(t)
                        };
                    return a.prototype = Object.create(i.prototype), a.prototype.constructor = a, a.cid = e++, a.options = G(i.options, t), a["super"] = i, a.options.props && Ne(a), a.options.computed && je(a), a.extend = i.extend, a.mixin = i.mixin, a.use = i.use, En.forEach(function(t) {
                        a[t] = i[t]
                    }), o && (a.options.components[o] = a), a.superOptions = i.options, a.extendOptions = t, a.sealedOptions = x({}, a.options), r[n] = a, a
                }
            }

            function Ne(t) {
                var e = t.options.props;
                for (var i in e) Ut(t.prototype, "_props", i)
            }

            function je(t) {
                var e = t.options.computed;
                for (var i in e) Kt(t.prototype, i, e[i])
            }

            function Xe(t) {
                En.forEach(function(e) {
                    t[e] = function(t, i) {
                        return i ? ("component" === e && h(i) && (i.name = i.name || t, i = this.options._base.extend(i)), "directive" === e && "function" == typeof i && (i = {
                            bind: i,
                            update: i
                        }), this.options[e + "s"][t] = i, i) : this.options[e + "s"][t]
                    }
                })
            }

            function $e(t) {
                return t && (t.Ctor.options.name || t.tag)
            }

            function Ve(t, e) {
                return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!u(t) && t.test(e)
            }

            function He(t, e) {
                var i = t.cache,
                    n = t.keys,
                    r = t._vnode;
                for (var o in i) {
                    var a = i[o];
                    if (a) {
                        var s = $e(a.componentOptions);
                        s && !e(s) && Ue(i, o, n, r)
                    }
                }
            }

            function Ue(t, e, i, n) {
                var r = t[e];
                !r || n && r.tag === n.tag || r.componentInstance.$destroy(), t[e] = null, m(i, e)
            }

            function Ye(t) {
                var e = {};
                e.get = function() {
                    return In
                }, Object.defineProperty(t, "config", e), t.util = {
                    warn: tr,
                    extend: x,
                    mergeOptions: G,
                    defineReactive: B
                }, t.set = N, t["delete"] = j, t.nextTick = at, t.options = Object.create(null), En.forEach(function(e) {
                    t.options[e + "s"] = Object.create(null)
                }), t.options._base = t, x(t.options.components, Vr), ze(t), Fe(t), Be(t), Xe(t)
            }

            function We(t) {
                for (var e = t.data, i = t, n = t; r(n.componentInstance);) n = n.componentInstance._vnode, n && n.data && (e = qe(n.data, e));
                for (; r(i = i.parent);) i && i.data && (e = qe(e, i.data));
                return Ge(e.staticClass, e["class"])
            }

            function qe(t, e) {
                return {
                    staticClass: Ze(t.staticClass, e.staticClass),
                    "class": r(t["class"]) ? [t["class"], e["class"]] : e["class"]
                }
            }

            function Ge(t, e) {
                return r(t) || r(e) ? Ze(t, Ke(e)) : ""
            }

            function Ze(t, e) {
                return t ? e ? t + " " + e : t : e || ""
            }

            function Ke(t) {
                return Array.isArray(t) ? Qe(t) : l(t) ? Je(t) : "string" == typeof t ? t : ""
            }

            function Qe(t) {
                for (var e, i = "", n = 0, o = t.length; n < o; n++) r(e = Ke(t[n])) && "" !== e && (i && (i += " "), i += e);
                return i
            }

            function Je(t) {
                var e = "";
                for (var i in t) t[i] && (e && (e += " "), e += i);
                return e
            }

            function ti(t) {
                return no(t) ? "svg" : "math" === t ? "math" : void 0
            }

            function ei(t) {
                if (!zn) return !0;
                if (ro(t)) return !1;
                if (t = t.toLowerCase(), null != oo[t]) return oo[t];
                var e = document.createElement(t);
                return t.indexOf("-") > -1 ? oo[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : oo[t] = /HTMLUnknownElement/.test(e.toString())
            }

            function ii(t) {
                if ("string" == typeof t) {
                    var e = document.querySelector(t);
                    return e ? e : document.createElement("div")
                }
                return t
            }

            function ni(t, e) {
                var i = document.createElement(t);
                return "select" !== t ? i : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && i.setAttribute("multiple", "multiple"), i)
            }

            function ri(t, e) {
                return document.createElementNS(eo[t], e)
            }

            function oi(t) {
                return document.createTextNode(t)
            }

            function ai(t) {
                return document.createComment(t)
            }

            function si(t, e, i) {
                t.insertBefore(e, i)
            }

            function li(t, e) {
                t.removeChild(e)
            }

            function hi(t, e) {
                t.appendChild(e)
            }

            function ui(t) {
                return t.parentNode
            }

            function ci(t) {
                return t.nextSibling
            }

            function fi(t) {
                return t.tagName
            }

            function pi(t, e) {
                t.textContent = e
            }

            function di(t, e, i) {
                t.setAttribute(e, i)
            }

            function mi(t, e) {
                var i = t.data.ref;
                if (i) {
                    var n = t.context,
                        r = t.componentInstance || t.elm,
                        o = n.$refs;
                    e ? Array.isArray(o[i]) ? m(o[i], r) : o[i] === r && (o[i] = void 0) : t.data.refInFor ? Array.isArray(o[i]) ? o[i].indexOf(r) < 0 && o[i].push(r) : o[i] = [r] : o[i] = r
                }
            }

            function vi(t, e) {
                return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && r(t.data) === r(e.data) && gi(t, e) || o(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && n(e.asyncFactory.error))
            }

            function gi(t, e) {
                if ("input" !== t.tag) return !0;
                var i, n = r(i = t.data) && r(i = i.attrs) && i.type,
                    o = r(i = e.data) && r(i = i.attrs) && i.type;
                return n === o || ao(n) && ao(o)
            }

            function _i(t, e, i) {
                var n, o, a = {};
                for (n = e; n <= i; ++n) o = t[n].key, r(o) && (a[o] = n);
                return a
            }

            function yi(t) {
                function e(t) {
                    return new rr(E.tagName(t).toLowerCase(), {}, [], (void 0), t)
                }

                function i(t, e) {
                    function i() {
                        0 === --i.listeners && a(t)
                    }
                    return i.listeners = e, i
                }

                function a(t) {
                    var e = E.parentNode(t);
                    r(e) && E.removeChild(e, t)
                }

                function l(t, e, i, n, a) {
                    if (t.isRootInsert = !a, !h(t, e, i, n)) {
                        var s = t.data,
                            l = t.children,
                            u = t.tag;
                        r(u) ? (t.elm = t.ns ? E.createElementNS(t.ns, u) : E.createElement(u, t), g(t), p(t, l, e), r(s) && v(t, e), f(i, t.elm, n)) : o(t.isComment) ? (t.elm = E.createComment(t.text), f(i, t.elm, n)) : (t.elm = E.createTextNode(t.text), f(i, t.elm, n))
                    }
                }

                function h(t, e, i, n) {
                    var a = t.data;
                    if (r(a)) {
                        var s = r(t.componentInstance) && a.keepAlive;
                        if (r(a = a.hook) && r(a = a.init) && a(t, !1, i, n), r(t.componentInstance)) return u(t, e), o(s) && c(t, e, i, n), !0
                    }
                }

                function u(t, e) {
                    r(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, m(t) ? (v(t, e), g(t)) : (mi(t), e.push(t))
                }

                function c(t, e, i, n) {
                    for (var o, a = t; a.componentInstance;)
                        if (a = a.componentInstance._vnode, r(o = a.data) && r(o = o.transition)) {
                            for (o = 0; o < M.activate.length; ++o) M.activate[o](ho, a);
                            e.push(a);
                            break
                        }
                    f(i, t.elm, n)
                }

                function f(t, e, i) {
                    r(t) && (r(i) ? i.parentNode === t && E.insertBefore(t, e, i) : E.appendChild(t, e))
                }

                function p(t, e, i) {
                    if (Array.isArray(e))
                        for (var n = 0; n < e.length; ++n) l(e[n], i, t.elm, null, !0);
                    else s(t.text) && E.appendChild(t.elm, E.createTextNode(String(t.text)))
                }

                function m(t) {
                    for (; t.componentInstance;) t = t.componentInstance._vnode;
                    return r(t.tag)
                }

                function v(t, e) {
                    for (var i = 0; i < M.create.length; ++i) M.create[i](ho, t);
                    C = t.data.hook, r(C) && (r(C.create) && C.create(ho, t), r(C.insert) && e.push(t))
                }

                function g(t) {
                    var e;
                    if (r(e = t.fnScopeId)) E.setAttribute(t.elm, e, "");
                    else
                        for (var i = t; i;) r(e = i.context) && r(e = e.$options._scopeId) && E.setAttribute(t.elm, e, ""), i = i.parent;
                    r(e = Pr) && e !== t.context && e !== t.fnContext && r(e = e.$options._scopeId) && E.setAttribute(t.elm, e, "")
                }

                function _(t, e, i, n, r, o) {
                    for (; n <= r; ++n) l(i[n], o, t, e)
                }

                function y(t) {
                    var e, i, n = t.data;
                    if (r(n))
                        for (r(e = n.hook) && r(e = e.destroy) && e(t), e = 0; e < M.destroy.length; ++e) M.destroy[e](t);
                    if (r(e = t.children))
                        for (i = 0; i < t.children.length; ++i) y(t.children[i])
                }

                function x(t, e, i, n) {
                    for (; i <= n; ++i) {
                        var o = e[i];
                        r(o) && (r(o.tag) ? (w(o), y(o)) : a(o.elm))
                    }
                }

                function w(t, e) {
                    if (r(e) || r(t.data)) {
                        var n, o = M.remove.length + 1;
                        for (r(e) ? e.listeners += o : e = i(t.elm, o), r(n = t.componentInstance) && r(n = n._vnode) && r(n.data) && w(n, e), n = 0; n < M.remove.length; ++n) M.remove[n](t, e);
                        r(n = t.data.hook) && r(n = n.remove) ? n(t, e) : e()
                    } else a(t.elm)
                }

                function b(t, e, i, o, a) {
                    for (var s, h, u, c, f = 0, p = 0, d = e.length - 1, m = e[0], v = e[d], g = i.length - 1, y = i[0], w = i[g], b = !a; f <= d && p <= g;) n(m) ? m = e[++f] : n(v) ? v = e[--d] : vi(m, y) ? (S(m, y, o), m = e[++f], y = i[++p]) : vi(v, w) ? (S(v, w, o), v = e[--d], w = i[--g]) : vi(m, w) ? (S(m, w, o), b && E.insertBefore(t, m.elm, E.nextSibling(v.elm)), m = e[++f], w = i[--g]) : vi(v, y) ? (S(v, y, o), b && E.insertBefore(t, v.elm, m.elm), v = e[--d], y = i[++p]) : (n(s) && (s = _i(e, f, d)), h = r(y.key) ? s[y.key] : T(y, e, f, d), n(h) ? l(y, o, t, m.elm) : (u = e[h], vi(u, y) ? (S(u, y, o), e[h] = void 0, b && E.insertBefore(t, u.elm, m.elm)) : l(y, o, t, m.elm)), y = i[++p]);
                    f > d ? (c = n(i[g + 1]) ? null : i[g + 1].elm, _(t, c, i, p, g, o)) : p > g && x(t, e, f, d)
                }

                function T(t, e, i, n) {
                    for (var o = i; o < n; o++) {
                        var a = e[o];
                        if (r(a) && vi(t, a)) return o
                    }
                }

                function S(t, e, i, a) {
                    if (t !== e) {
                        var s = e.elm = t.elm;
                        if (o(t.isAsyncPlaceholder)) return void(r(e.asyncFactory.resolved) ? k(t.elm, e, i) : e.isAsyncPlaceholder = !0);
                        if (o(e.isStatic) && o(t.isStatic) && e.key === t.key && (o(e.isCloned) || o(e.isOnce))) return void(e.componentInstance = t.componentInstance);
                        var l, h = e.data;
                        r(h) && r(l = h.hook) && r(l = l.prepatch) && l(t, e);
                        var u = t.children,
                            c = e.children;
                        if (r(h) && m(e)) {
                            for (l = 0; l < M.update.length; ++l) M.update[l](t, e);
                            r(l = h.hook) && r(l = l.update) && l(t, e)
                        }
                        n(e.text) ? r(u) && r(c) ? u !== c && b(s, u, c, i, a) : r(c) ? (r(t.text) && E.setTextContent(s, ""), _(s, null, c, 0, c.length - 1, i)) : r(u) ? x(s, u, 0, u.length - 1) : r(t.text) && E.setTextContent(s, "") : t.text !== e.text && E.setTextContent(s, e.text), r(h) && r(l = h.hook) && r(l = l.postpatch) && l(t, e)
                    }
                }

                function P(t, e, i) {
                    if (o(i) && r(t.parent)) t.parent.data.pendingInsert = e;
                    else
                        for (var n = 0; n < e.length; ++n) e[n].data.hook.insert(e[n])
                }

                function k(t, e, i, n) {
                    var a, s = e.tag,
                        l = e.data,
                        h = e.children;
                    if (n = n || l && l.pre, e.elm = t, o(e.isComment) && r(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                    if (r(l) && (r(a = l.hook) && r(a = a.init) && a(e, !0), r(a = e.componentInstance))) return u(e, i), !0;
                    if (r(s)) {
                        if (r(h))
                            if (t.hasChildNodes())
                                if (r(a = l) && r(a = a.domProps) && r(a = a.innerHTML)) {
                                    if (a !== t.innerHTML) return !1
                                } else {
                                    for (var c = !0, f = t.firstChild, d = 0; d < h.length; d++) {
                                        if (!f || !k(f, h[d], i, n)) {
                                            c = !1;
                                            break
                                        }
                                        f = f.nextSibling
                                    }
                                    if (!c || f) return !1
                                }
                            else p(e, h, i);
                        if (r(l)) {
                            var m = !1;
                            for (var g in l)
                                if (!D(g)) {
                                    m = !0, v(e, i);
                                    break
                                }!m && l["class"] && st(l["class"])
                        }
                    } else t.data !== e.text && (t.data = e.text);
                    return !0
                }
                var C, A, M = {},
                    O = t.modules,
                    E = t.nodeOps;
                for (C = 0; C < uo.length; ++C)
                    for (M[uo[C]] = [], A = 0; A < O.length; ++A) r(O[A][uo[C]]) && M[uo[C]].push(O[A][uo[C]]);
                var D = d("attrs,class,staticClass,staticStyle,key");
                return function(t, i, a, s, h, u) {
                    if (n(i)) return void(r(t) && y(t));
                    var c = !1,
                        f = [];
                    if (n(t)) c = !0, l(i, f, h, u);
                    else {
                        var p = r(t.nodeType);
                        if (!p && vi(t, i)) S(t, i, f, s);
                        else {
                            if (p) {
                                if (1 === t.nodeType && t.hasAttribute(On) && (t.removeAttribute(On), a = !0), o(a) && k(t, i, f)) return P(i, f, !0), t;
                                t = e(t)
                            }
                            var d = t.elm,
                                v = E.parentNode(d);
                            if (l(i, f, d._leaveCb ? null : v, E.nextSibling(d)), r(i.parent))
                                for (var g = i.parent, _ = m(i); g;) {
                                    for (var w = 0; w < M.destroy.length; ++w) M.destroy[w](g);
                                    if (g.elm = i.elm, _) {
                                        for (var b = 0; b < M.create.length; ++b) M.create[b](ho, g);
                                        var T = g.data.hook.insert;
                                        if (T.merged)
                                            for (var C = 1; C < T.fns.length; C++) T.fns[C]()
                                    } else mi(g);
                                    g = g.parent
                                }
                            r(v) ? x(v, [t], 0, 0) : r(t.tag) && y(t)
                        }
                    }
                    return P(i, f, c), i.elm
                }
            }

            function xi(t, e) {
                (t.data.directives || e.data.directives) && wi(t, e)
            }

            function wi(t, e) {
                var i, n, r, o = t === ho,
                    a = e === ho,
                    s = bi(t.data.directives, t.context),
                    l = bi(e.data.directives, e.context),
                    h = [],
                    u = [];
                for (i in l) n = s[i], r = l[i], n ? (r.oldValue = n.value, Si(r, "update", e, t), r.def && r.def.componentUpdated && u.push(r)) : (Si(r, "bind", e, t), r.def && r.def.inserted && h.push(r));
                if (h.length) {
                    var c = function() {
                        for (var i = 0; i < h.length; i++) Si(h[i], "inserted", e, t)
                    };
                    o ? ct(e, "insert", c) : c()
                }
                if (u.length && ct(e, "postpatch", function() {
                        for (var i = 0; i < u.length; i++) Si(u[i], "componentUpdated", e, t)
                    }), !o)
                    for (i in s) l[i] || Si(s[i], "unbind", t, t, a)
            }

            function bi(t, e) {
                var i = Object.create(null);
                if (!t) return i;
                var n, r;
                for (n = 0; n < t.length; n++) r = t[n], r.modifiers || (r.modifiers = fo), i[Ti(r)] = r, r.def = Z(e.$options, "directives", r.name, !0);
                return i
            }

            function Ti(t) {
                return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
            }

            function Si(t, e, i, n, r) {
                var o = t.def && t.def[e];
                if (o) try {
                    o(i.elm, t, i, n, r)
                } catch (a) {
                    et(a, i.context, "directive " + t.name + " " + e + " hook")
                }
            }

            function Pi(t, e) {
                var i = e.componentOptions;
                if (!(r(i) && i.Ctor.options.inheritAttrs === !1 || n(t.data.attrs) && n(e.data.attrs))) {
                    var o, a, s, l = e.elm,
                        h = t.data.attrs || {},
                        u = e.data.attrs || {};
                    r(u.__ob__) && (u = e.data.attrs = x({}, u));
                    for (o in u) a = u[o], s = h[o], s !== a && ki(l, o, a);
                    (jn || $n) && u.value !== h.value && ki(l, "value", u.value);
                    for (o in h) n(u[o]) && (Qr(o) ? l.removeAttributeNS(Kr, Jr(o)) : Gr(o) || l.removeAttribute(o))
                }
            }

            function ki(t, e, i) {
                if (Zr(e)) to(i) ? t.removeAttribute(e) : (i = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, i));
                else if (Gr(e)) t.setAttribute(e, to(i) || "false" === i ? "false" : "true");
                else if (Qr(e)) to(i) ? t.removeAttributeNS(Kr, Jr(e)) : t.setAttributeNS(Kr, e, i);
                else if (to(i)) t.removeAttribute(e);
                else {
                    if (jn && !Xn && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
                        var n = function(e) {
                            e.stopImmediatePropagation(), t.removeEventListener("input", n)
                        };
                        t.addEventListener("input", n), t.__ieph = !0
                    }
                    t.setAttribute(e, i)
                }
            }

            function Ci(t, e) {
                var i = e.elm,
                    o = e.data,
                    a = t.data;
                if (!(n(o.staticClass) && n(o["class"]) && (n(a) || n(a.staticClass) && n(a["class"])))) {
                    var s = We(e),
                        l = i._transitionClasses;
                    r(l) && (s = Ze(s, Ke(l))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s)
                }
            }

            function Ai(t) {
                if (r(t[go])) {
                    var e = jn ? "change" : "input";
                    t[e] = [].concat(t[go], t[e] || []), delete t[go]
                }
                r(t[_o]) && (t.change = [].concat(t[_o], t.change || []), delete t[_o])
            }

            function Mi(t, e, i) {
                var n = Hr;
                return function r() {
                    var o = t.apply(null, arguments);
                    null !== o && Ei(e, r, i, n)
                }
            }

            function Oi(t, e, i, n, r) {
                e = ot(e), i && (e = Mi(e, t, n)), Hr.addEventListener(t, e, Yn ? {
                    capture: n,
                    passive: r
                } : n)
            }

            function Ei(t, e, i, n) {
                (n || Hr).removeEventListener(t, e._withTask || e, i)
            }

            function Di(t, e) {
                if (!n(t.data.on) || !n(e.data.on)) {
                    var i = e.data.on || {},
                        r = t.data.on || {};
                    Hr = e.elm, Ai(i), ut(i, r, Oi, Ei, e.context), Hr = void 0
                }
            }

            function Ii(t, e) {
                if (!n(t.data.domProps) || !n(e.data.domProps)) {
                    var i, o, a = e.elm,
                        s = t.data.domProps || {},
                        l = e.data.domProps || {};
                    r(l.__ob__) && (l = e.data.domProps = x({}, l));
                    for (i in s) n(l[i]) && (a[i] = "");
                    for (i in l) {
                        if (o = l[i], "textContent" === i || "innerHTML" === i) {
                            if (e.children && (e.children.length = 0), o === s[i]) continue;
                            1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                        }
                        if ("value" === i) {
                            a._value = o;
                            var h = n(o) ? "" : String(o);
                            Li(a, h) && (a.value = h)
                        } else a[i] = o
                    }
                }
            }

            function Li(t, e) {
                return !t.composing && ("OPTION" === t.tagName || Ri(t, e) || zi(t, e))
            }

            function Ri(t, e) {
                var i = !0;
                try {
                    i = document.activeElement !== t
                } catch (n) {}
                return i && t.value !== e
            }

            function zi(t, e) {
                var i = t.value,
                    n = t._vModifiers;
                if (r(n)) {
                    if (n.lazy) return !1;
                    if (n.number) return p(i) !== p(e);
                    if (n.trim) return i.trim() !== e.trim()
                }
                return i !== e
            }

            function Fi(t) {
                var e = Bi(t.style);
                return t.staticStyle ? x(t.staticStyle, e) : e
            }

            function Bi(t) {
                return Array.isArray(t) ? w(t) : "string" == typeof t ? wo(t) : t
            }

            function Ni(t, e) {
                var i, n = {};
                if (e)
                    for (var r = t; r.componentInstance;) r = r.componentInstance._vnode, r && r.data && (i = Fi(r.data)) && x(n, i);
                (i = Fi(t.data)) && x(n, i);
                for (var o = t; o = o.parent;) o.data && (i = Fi(o.data)) && x(n, i);
                return n
            }

            function ji(t, e) {
                var i = e.data,
                    o = t.data;
                if (!(n(i.staticStyle) && n(i.style) && n(o.staticStyle) && n(o.style))) {
                    var a, s, l = e.elm,
                        h = o.staticStyle,
                        u = o.normalizedStyle || o.style || {},
                        c = h || u,
                        f = Bi(e.data.style) || {};
                    e.data.normalizedStyle = r(f.__ob__) ? x({}, f) : f;
                    var p = Ni(e, !0);
                    for (s in c) n(p[s]) && So(l, s, "");
                    for (s in p) a = p[s], a !== c[s] && So(l, s, null == a ? "" : a)
                }
            }

            function Xi(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                        return t.classList.add(e)
                    }) : t.classList.add(e);
                    else {
                        var i = " " + (t.getAttribute("class") || "") + " ";
                        i.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (i + e).trim())
                    }
            }

            function $i(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                        return t.classList.remove(e)
                    }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                    else {
                        for (var i = " " + (t.getAttribute("class") || "") + " ", n = " " + e + " "; i.indexOf(n) >= 0;) i = i.replace(n, " ");
                        i = i.trim(), i ? t.setAttribute("class", i) : t.removeAttribute("class")
                    }
            }

            function Vi(t) {
                if (t) {
                    if ("object" == typeof t) {
                        var e = {};
                        return t.css !== !1 && x(e, Ao(t.name || "v")), x(e, t), e
                    }
                    return "string" == typeof t ? Ao(t) : void 0
                }
            }

            function Hi(t) {
                zo(function() {
                    zo(t)
                })
            }

            function Ui(t, e) {
                var i = t._transitionClasses || (t._transitionClasses = []);
                i.indexOf(e) < 0 && (i.push(e), Xi(t, e))
            }

            function Yi(t, e) {
                t._transitionClasses && m(t._transitionClasses, e), $i(t, e)
            }

            function Wi(t, e, i) {
                var n = qi(t, e),
                    r = n.type,
                    o = n.timeout,
                    a = n.propCount;
                if (!r) return i();
                var s = r === Oo ? Io : Ro,
                    l = 0,
                    h = function() {
                        t.removeEventListener(s, u), i()
                    },
                    u = function(e) {
                        e.target === t && ++l >= a && h()
                    };
                setTimeout(function() {
                    l < a && h()
                }, o + 1), t.addEventListener(s, u)
            }

            function qi(t, e) {
                var i, n = window.getComputedStyle(t),
                    r = n[Do + "Delay"].split(", "),
                    o = n[Do + "Duration"].split(", "),
                    a = Gi(r, o),
                    s = n[Lo + "Delay"].split(", "),
                    l = n[Lo + "Duration"].split(", "),
                    h = Gi(s, l),
                    u = 0,
                    c = 0;
                e === Oo ? a > 0 && (i = Oo, u = a, c = o.length) : e === Eo ? h > 0 && (i = Eo, u = h, c = l.length) : (u = Math.max(a, h), i = u > 0 ? a > h ? Oo : Eo : null, c = i ? i === Oo ? o.length : l.length : 0);
                var f = i === Oo && Fo.test(n[Do + "Property"]);
                return {
                    type: i,
                    timeout: u,
                    propCount: c,
                    hasTransform: f
                }
            }

            function Gi(t, e) {
                for (; t.length < e.length;) t = t.concat(t);
                return Math.max.apply(null, e.map(function(e, i) {
                    return Zi(e) + Zi(t[i])
                }))
            }

            function Zi(t) {
                return 1e3 * Number(t.slice(0, -1))
            }

            function Ki(t, e) {
                var i = t.elm;
                r(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
                var o = Vi(t.data.transition);
                if (!n(o) && !r(i._enterCb) && 1 === i.nodeType) {
                    for (var a = o.css, s = o.type, h = o.enterClass, u = o.enterToClass, c = o.enterActiveClass, f = o.appearClass, d = o.appearToClass, m = o.appearActiveClass, v = o.beforeEnter, g = o.enter, _ = o.afterEnter, y = o.enterCancelled, x = o.beforeAppear, w = o.appear, b = o.afterAppear, T = o.appearCancelled, S = o.duration, k = Pr, C = Pr.$vnode; C && C.parent;) C = C.parent, k = C.context;
                    var A = !k._isMounted || !t.isRootInsert;
                    if (!A || w || "" === w) {
                        var M = A && f ? f : h,
                            O = A && m ? m : c,
                            E = A && d ? d : u,
                            D = A ? x || v : v,
                            I = A && "function" == typeof w ? w : g,
                            L = A ? b || _ : _,
                            R = A ? T || y : y,
                            z = p(l(S) ? S.enter : S),
                            F = a !== !1 && !Xn,
                            B = tn(I),
                            N = i._enterCb = P(function() {
                                F && (Yi(i, E), Yi(i, O)), N.cancelled ? (F && Yi(i, M), R && R(i)) : L && L(i), i._enterCb = null
                            });
                        t.data.show || ct(t, "insert", function() {
                            var e = i.parentNode,
                                n = e && e._pending && e._pending[t.key];
                            n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), I && I(i, N)
                        }), D && D(i), F && (Ui(i, M), Ui(i, O), Hi(function() {
                            Ui(i, E), Yi(i, M), N.cancelled || B || (Ji(z) ? setTimeout(N, z) : Wi(i, s, N))
                        })), t.data.show && (e && e(), I && I(i, N)), F || B || N()
                    }
                }
            }

            function Qi(t, e) {
                function i() {
                    T.cancelled || (t.data.show || ((o.parentNode._pending || (o.parentNode._pending = {}))[t.key] = t), d && d(o), x && (Ui(o, u), Ui(o, f), Hi(function() {
                        Ui(o, c), Yi(o, u), T.cancelled || w || (Ji(b) ? setTimeout(T, b) : Wi(o, h, T))
                    })), m && m(o, T), x || w || T())
                }
                var o = t.elm;
                r(o._enterCb) && (o._enterCb.cancelled = !0, o._enterCb());
                var a = Vi(t.data.transition);
                if (n(a) || 1 !== o.nodeType) return e();
                if (!r(o._leaveCb)) {
                    var s = a.css,
                        h = a.type,
                        u = a.leaveClass,
                        c = a.leaveToClass,
                        f = a.leaveActiveClass,
                        d = a.beforeLeave,
                        m = a.leave,
                        v = a.afterLeave,
                        g = a.leaveCancelled,
                        _ = a.delayLeave,
                        y = a.duration,
                        x = s !== !1 && !Xn,
                        w = tn(m),
                        b = p(l(y) ? y.leave : y),
                        T = o._leaveCb = P(function() {
                            o.parentNode && o.parentNode._pending && (o.parentNode._pending[t.key] = null), x && (Yi(o, c), Yi(o, f)), T.cancelled ? (x && Yi(o, u), g && g(o)) : (e(), v && v(o)), o._leaveCb = null
                        });
                    _ ? _(i) : i()
                }
            }

            function Ji(t) {
                return "number" == typeof t && !isNaN(t)
            }

            function tn(t) {
                if (n(t)) return !1;
                var e = t.fns;
                return r(e) ? tn(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
            }

            function en(t, e) {
                e.data.show !== !0 && Ki(e)
            }

            function nn(t, e, i) {
                rn(t, e, i), (jn || $n) && setTimeout(function() {
                    rn(t, e, i)
                }, 0)
            }

            function rn(t, e, i) {
                var n = e.value,
                    r = t.multiple;
                if (!r || Array.isArray(n)) {
                    for (var o, a, s = 0, l = t.options.length; s < l; s++)
                        if (a = t.options[s], r) o = S(n, an(a)) > -1, a.selected !== o && (a.selected = o);
                        else if (T(an(a), n)) return void(t.selectedIndex !== s && (t.selectedIndex = s));
                    r || (t.selectedIndex = -1)
                }
            }

            function on(t, e) {
                return e.every(function(e) {
                    return !T(e, t)
                })
            }

            function an(t) {
                return "_value" in t ? t._value : t.value
            }

            function sn(t) {
                t.target.composing = !0
            }

            function ln(t) {
                t.target.composing && (t.target.composing = !1, hn(t.target, "input"))
            }

            function hn(t, e) {
                var i = document.createEvent("HTMLEvents");
                i.initEvent(e, !0, !0), t.dispatchEvent(i)
            }

            function un(t) {
                return !t.componentInstance || t.data && t.data.transition ? t : un(t.componentInstance._vnode)
            }

            function cn(t) {
                var e = t && t.componentOptions;
                return e && e.Ctor.options["abstract"] ? cn(bt(e.children)) : t
            }

            function fn(t) {
                var e = {},
                    i = t.$options;
                for (var n in i.propsData) e[n] = t[n];
                var r = i._parentListeners;
                for (var o in r) e[Sn(o)] = r[o];
                return e
            }

            function pn(t, e) {
                if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
                    props: e.componentOptions.propsData
                })
            }

            function dn(t) {
                for (; t = t.parent;)
                    if (t.data.transition) return !0
            }

            function mn(t, e) {
                return e.key === t.key && e.tag === t.tag
            }

            function vn(t) {
                t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
            }

            function gn(t) {
                t.data.newPos = t.elm.getBoundingClientRect()
            }

            function _n(t) {
                var e = t.data.pos,
                    i = t.data.newPos,
                    n = e.left - i.left,
                    r = e.top - i.top;
                if (n || r) {
                    t.data.moved = !0;
                    var o = t.elm.style;
                    o.transform = o.WebkitTransform = "translate(" + n + "px," + r + "px)", o.transitionDuration = "0s"
                }
            }
            var yn = Object.freeze({}),
                xn = Object.prototype.toString,
                wn = (d("slot,component", !0), d("key,ref,slot,slot-scope,is")),
                bn = Object.prototype.hasOwnProperty,
                Tn = /-(\w)/g,
                Sn = g(function(t) {
                    return t.replace(Tn, function(t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                }),
                Pn = g(function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }),
                kn = /\B([A-Z])/g,
                Cn = g(function(t) {
                    return t.replace(kn, "-$1").toLowerCase()
                }),
                An = function(t, e, i) {
                    return !1
                },
                Mn = function(t) {
                    return t
                },
                On = "data-server-rendered",
                En = ["component", "directive", "filter"],
                Dn = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
                In = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    warnHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: An,
                    isReservedAttr: An,
                    isUnknownElement: An,
                    getTagNamespace: b,
                    parsePlatformTagName: Mn,
                    mustUseProp: An,
                    _lifecycleHooks: Dn
                },
                Ln = /[^\w.$]/,
                Rn = "__proto__" in {},
                zn = "undefined" != typeof window,
                Fn = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
                Bn = Fn && WXEnvironment.platform.toLowerCase(),
                Nn = zn && window.navigator.userAgent.toLowerCase(),
                jn = Nn && /msie|trident/.test(Nn),
                Xn = Nn && Nn.indexOf("msie 9.0") > 0,
                $n = Nn && Nn.indexOf("edge/") > 0,
                Vn = Nn && Nn.indexOf("android") > 0 || "android" === Bn,
                Hn = Nn && /iphone|ipad|ipod|ios/.test(Nn) || "ios" === Bn,
                Un = (Nn && /chrome\/\d+/.test(Nn) && !$n, {}.watch),
                Yn = !1;
            if (zn) try {
                var Wn = {};
                Object.defineProperty(Wn, "passive", {
                    get: function() {
                        Yn = !0
                    }
                }), window.addEventListener("test-passive", null, Wn)
            } catch (qn) {}
            var Gn, Zn, Kn = function() {
                    return void 0 === Gn && (Gn = !zn && "undefined" != typeof t && "server" === t.process.env.VUE_ENV), Gn
                },
                Qn = zn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
                Jn = "undefined" != typeof Symbol && M(Symbol) && "undefined" != typeof Reflect && M(Reflect.ownKeys);
            Zn = "undefined" != typeof Set && M(Set) ? Set : function() {
                function t() {
                    this.set = Object.create(null)
                }
                return t.prototype.has = function(t) {
                    return this.set[t] === !0
                }, t.prototype.add = function(t) {
                    this.set[t] = !0
                }, t.prototype.clear = function() {
                    this.set = Object.create(null)
                }, t
            }();
            var tr = b,
                er = 0,
                ir = function() {
                    this.id = er++, this.subs = []
                };
            ir.prototype.addSub = function(t) {
                this.subs.push(t)
            }, ir.prototype.removeSub = function(t) {
                m(this.subs, t)
            }, ir.prototype.depend = function() {
                ir.target && ir.target.addDep(this)
            }, ir.prototype.notify = function() {
                for (var t = this.subs.slice(), e = 0, i = t.length; e < i; e++) t[e].update()
            }, ir.target = null;
            var nr = [],
                rr = function(t, e, i, n, r, o, a, s) {
                    this.tag = t, this.data = e, this.children = i, this.text = n, this.elm = r, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
                },
                or = {
                    child: {
                        configurable: !0
                    }
                };
            or.child.get = function() {
                return this.componentInstance
            }, Object.defineProperties(rr.prototype, or);
            var ar = function(t) {
                    void 0 === t && (t = "");
                    var e = new rr;
                    return e.text = t, e.isComment = !0, e
                },
                sr = Array.prototype,
                lr = Object.create(sr);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
                var e = sr[t];
                C(lr, t, function() {
                    for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
                    var r, o = e.apply(this, i),
                        a = this.__ob__;
                    switch (t) {
                        case "push":
                        case "unshift":
                            r = i;
                            break;
                        case "splice":
                            r = i.slice(2)
                    }
                    return r && a.observeArray(r), a.dep.notify(), o
                })
            });
            var hr = Object.getOwnPropertyNames(lr),
                ur = {
                    shouldConvert: !0
                },
                cr = function(t) {
                    if (this.value = t, this.dep = new ir, this.vmCount = 0, C(t, "__ob__", this), Array.isArray(t)) {
                        var e = Rn ? R : z;
                        e(t, lr, hr), this.observeArray(t)
                    } else this.walk(t)
                };
            cr.prototype.walk = function(t) {
                for (var e = Object.keys(t), i = 0; i < e.length; i++) B(t, e[i], t[e[i]])
            }, cr.prototype.observeArray = function(t) {
                for (var e = 0, i = t.length; e < i; e++) F(t[e])
            };
            var fr = In.optionMergeStrategies;
            fr.data = function(t, e, i) {
                return i ? V(t, e, i) : e && "function" != typeof e ? t : V(t, e)
            }, Dn.forEach(function(t) {
                fr[t] = H
            }), En.forEach(function(t) {
                fr[t + "s"] = U
            }), fr.watch = function(t, e, i, n) {
                if (t === Un && (t = void 0), e === Un && (e = void 0), !e) return Object.create(t || null);
                if (!t) return e;
                var r = {};
                x(r, t);
                for (var o in e) {
                    var a = r[o],
                        s = e[o];
                    a && !Array.isArray(a) && (a = [a]), r[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
                }
                return r
            }, fr.props = fr.methods = fr.inject = fr.computed = function(t, e, i, n) {
                if (!t) return e;
                var r = Object.create(null);
                return x(r, t), e && x(r, e), r
            }, fr.provide = V;
            var pr, dr, mr = function(t, e) {
                    return void 0 === e ? t : e
                },
                vr = [],
                gr = !1,
                _r = !1;
            if ("undefined" != typeof i && M(i)) dr = function() {
                i(rt)
            };
            else if ("undefined" == typeof MessageChannel || !M(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) dr = function() {
                setTimeout(rt, 0)
            };
            else {
                var yr = new MessageChannel,
                    xr = yr.port2;
                yr.port1.onmessage = rt, dr = function() {
                    xr.postMessage(1)
                }
            }
            if ("undefined" != typeof Promise && M(Promise)) {
                var wr = Promise.resolve();
                pr = function() {
                    wr.then(rt), Hn && setTimeout(b)
                }
            } else pr = dr;
            var br, Tr = new Zn,
                Sr = g(function(t) {
                    var e = "&" === t.charAt(0);
                    t = e ? t.slice(1) : t;
                    var i = "~" === t.charAt(0);
                    t = i ? t.slice(1) : t;
                    var n = "!" === t.charAt(0);
                    return t = n ? t.slice(1) : t, {
                        name: t,
                        once: i,
                        capture: n,
                        passive: e
                    }
                }),
                Pr = null,
                kr = [],
                Cr = [],
                Ar = {},
                Mr = !1,
                Or = !1,
                Er = 0,
                Dr = 0,
                Ir = function(t, e, i, n, r) {
                    this.vm = t, r && (t._watcher = this), t._watchers.push(this), n ? (this.deep = !!n.deep, this.user = !!n.user, this.lazy = !!n.lazy, this.sync = !!n.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = i, this.id = ++Dr, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Zn, this.newDepIds = new Zn, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = A(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get()
                };
            Ir.prototype.get = function() {
                O(this);
                var t, e = this.vm;
                try {
                    t = this.getter.call(e, e)
                } catch (i) {
                    if (!this.user) throw i;
                    et(i, e, 'getter for watcher "' + this.expression + '"')
                } finally {
                    this.deep && st(t), E(), this.cleanupDeps()
                }
                return t
            }, Ir.prototype.addDep = function(t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
            }, Ir.prototype.cleanupDeps = function() {
                for (var t = this, e = this.deps.length; e--;) {
                    var i = t.deps[e];
                    t.newDepIds.has(i.id) || i.removeSub(t)
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
            }, Ir.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ht(this)
            }, Ir.prototype.run = function() {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || l(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user) try {
                            this.cb.call(this.vm, t, e)
                        } catch (i) {
                            et(i, this.vm, 'callback for watcher "' + this.expression + '"')
                        } else this.cb.call(this.vm, t, e)
                    }
                }
            }, Ir.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1
            }, Ir.prototype.depend = function() {
                for (var t = this, e = this.deps.length; e--;) t.deps[e].depend()
            }, Ir.prototype.teardown = function() {
                var t = this;
                if (this.active) {
                    this.vm._isBeingDestroyed || m(this.vm._watchers, this);
                    for (var e = this.deps.length; e--;) t.deps[e].removeSub(t);
                    this.active = !1
                }
            };
            var Lr = {
                    enumerable: !0,
                    configurable: !0,
                    get: b,
                    set: b
                },
                Rr = {
                    lazy: !0
                };
            ve(ge.prototype);
            var zr = {
                    init: function(t, e, i, n) {
                        if (!t.componentInstance || t.componentInstance._isDestroyed) {
                            var r = t.componentInstance = we(t, Pr, i, n);
                            r.$mount(e ? t.elm : void 0, e)
                        } else if (t.data.keepAlive) {
                            var o = t;
                            zr.prepatch(o, o)
                        }
                    },
                    prepatch: function(t, e) {
                        var i = e.componentOptions,
                            n = e.componentInstance = t.componentInstance;
                        Lt(n, i.propsData, i.listeners, e, i.children)
                    },
                    insert: function(t) {
                        var e = t.context,
                            i = t.componentInstance;
                        i._isMounted || (i._isMounted = !0, Bt(i, "mounted")), t.data.keepAlive && (e._isMounted ? $t(i) : zt(i, !0))
                    },
                    destroy: function(t) {
                        var e = t.componentInstance;
                        e._isDestroyed || (t.data.keepAlive ? Ft(e, !0) : e.$destroy())
                    }
                },
                Fr = Object.keys(zr),
                Br = 1,
                Nr = 2,
                jr = 0;
            Oe(Re), ie(Re), Ct(Re), Dt(Re), Me(Re);
            var Xr = [String, RegExp, Array],
                $r = {
                    name: "keep-alive",
                    "abstract": !0,
                    props: {
                        include: Xr,
                        exclude: Xr,
                        max: [String, Number]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = []
                    },
                    destroyed: function() {
                        var t = this;
                        for (var e in t.cache) Ue(t.cache, e, t.keys)
                    },
                    watch: {
                        include: function(t) {
                            He(this, function(e) {
                                return Ve(t, e)
                            })
                        },
                        exclude: function(t) {
                            He(this, function(e) {
                                return !Ve(t, e)
                            })
                        }
                    },
                    render: function() {
                        var t = this.$slots["default"],
                            e = bt(t),
                            i = e && e.componentOptions;
                        if (i) {
                            var n = $e(i),
                                r = this,
                                o = r.include,
                                a = r.exclude;
                            if (o && (!n || !Ve(o, n)) || a && n && Ve(a, n)) return e;
                            var s = this,
                                l = s.cache,
                                h = s.keys,
                                u = null == e.key ? i.Ctor.cid + (i.tag ? "::" + i.tag : "") : e.key;
                            l[u] ? (e.componentInstance = l[u].componentInstance, m(h, u), h.push(u)) : (l[u] = e, h.push(u), this.max && h.length > parseInt(this.max) && Ue(l, h[0], h, this._vnode)), e.data.keepAlive = !0
                        }
                        return e || t && t[0]
                    }
                },
                Vr = {
                    KeepAlive: $r
                };
            Ye(Re), Object.defineProperty(Re.prototype, "$isServer", {
                get: Kn
            }), Object.defineProperty(Re.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext
                }
            }), Re.version = "2.5.13";
            var Hr, Ur, Yr = d("style,class"),
                Wr = d("input,textarea,option,select,progress"),
                qr = function(t, e, i) {
                    return "value" === i && Wr(t) && "button" !== e || "selected" === i && "option" === t || "checked" === i && "input" === t || "muted" === i && "video" === t
                },
                Gr = d("contenteditable,draggable,spellcheck"),
                Zr = d("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                Kr = "http://www.w3.org/1999/xlink",
                Qr = function(t) {
                    return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
                },
                Jr = function(t) {
                    return Qr(t) ? t.slice(6, t.length) : ""
                },
                to = function(t) {
                    return null == t || t === !1
                },
                eo = {
                    svg: "http://www.w3.org/2000/svg",
                    math: "http://www.w3.org/1998/Math/MathML"
                },
                io = d("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                no = d("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                ro = function(t) {
                    return io(t) || no(t)
                },
                oo = Object.create(null),
                ao = d("text,number,password,search,email,tel,url"),
                so = Object.freeze({
                    createElement: ni,
                    createElementNS: ri,
                    createTextNode: oi,
                    createComment: ai,
                    insertBefore: si,
                    removeChild: li,
                    appendChild: hi,
                    parentNode: ui,
                    nextSibling: ci,
                    tagName: fi,
                    setTextContent: pi,
                    setAttribute: di
                }),
                lo = {
                    create: function(t, e) {
                        mi(e)
                    },
                    update: function(t, e) {
                        t.data.ref !== e.data.ref && (mi(t, !0), mi(e))
                    },
                    destroy: function(t) {
                        mi(t, !0)
                    }
                },
                ho = new rr("", {}, []),
                uo = ["create", "activate", "update", "remove", "destroy"],
                co = {
                    create: xi,
                    update: xi,
                    destroy: function(t) {
                        xi(t, ho)
                    }
                },
                fo = Object.create(null),
                po = [lo, co],
                mo = {
                    create: Pi,
                    update: Pi
                },
                vo = {
                    create: Ci,
                    update: Ci
                },
                go = "__r",
                _o = "__c",
                yo = {
                    create: Di,
                    update: Di
                },
                xo = {
                    create: Ii,
                    update: Ii
                },
                wo = g(function(t) {
                    var e = {},
                        i = /;(?![^(]*\))/g,
                        n = /:(.+)/;
                    return t.split(i).forEach(function(t) {
                        if (t) {
                            var i = t.split(n);
                            i.length > 1 && (e[i[0].trim()] = i[1].trim())
                        }
                    }), e
                }),
                bo = /^--/,
                To = /\s*!important$/,
                So = function(t, e, i) {
                    if (bo.test(e)) t.style.setProperty(e, i);
                    else if (To.test(i)) t.style.setProperty(e, i.replace(To, ""), "important");
                    else {
                        var n = ko(e);
                        if (Array.isArray(i))
                            for (var r = 0, o = i.length; r < o; r++) t.style[n] = i[r];
                        else t.style[n] = i
                    }
                },
                Po = ["Webkit", "Moz", "ms"],
                ko = g(function(t) {
                    if (Ur = Ur || document.createElement("div").style, t = Sn(t), "filter" !== t && t in Ur) return t;
                    for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < Po.length; i++) {
                        var n = Po[i] + e;
                        if (n in Ur) return n
                    }
                }),
                Co = {
                    create: ji,
                    update: ji
                },
                Ao = g(function(t) {
                    return {
                        enterClass: t + "-enter",
                        enterToClass: t + "-enter-to",
                        enterActiveClass: t + "-enter-active",
                        leaveClass: t + "-leave",
                        leaveToClass: t + "-leave-to",
                        leaveActiveClass: t + "-leave-active"
                    }
                }),
                Mo = zn && !Xn,
                Oo = "transition",
                Eo = "animation",
                Do = "transition",
                Io = "transitionend",
                Lo = "animation",
                Ro = "animationend";
            Mo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Do = "WebkitTransition", Io = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Lo = "WebkitAnimation", Ro = "webkitAnimationEnd"));
            var zo = zn ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
                    return t()
                },
                Fo = /\b(transform|all)(,|$)/,
                Bo = zn ? {
                    create: en,
                    activate: en,
                    remove: function(t, e) {
                        t.data.show !== !0 ? Qi(t, e) : e()
                    }
                } : {},
                No = [mo, vo, yo, xo, Co, Bo],
                jo = No.concat(po),
                Xo = yi({
                    nodeOps: so,
                    modules: jo
                });
            Xn && document.addEventListener("selectionchange", function() {
                var t = document.activeElement;
                t && t.vmodel && hn(t, "input")
            });
            var $o = {
                    inserted: function(t, e, i, n) {
                        "select" === i.tag ? (n.elm && !n.elm._vOptions ? ct(i, "postpatch", function() {
                            $o.componentUpdated(t, e, i)
                        }) : nn(t, e, i.context), t._vOptions = [].map.call(t.options, an)) : ("textarea" === i.tag || ao(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("change", ln), Vn || (t.addEventListener("compositionstart", sn), t.addEventListener("compositionend", ln)), Xn && (t.vmodel = !0)))
                    },
                    componentUpdated: function(t, e, i) {
                        if ("select" === i.tag) {
                            nn(t, e, i.context);
                            var n = t._vOptions,
                                r = t._vOptions = [].map.call(t.options, an);
                            if (r.some(function(t, e) {
                                    return !T(t, n[e])
                                })) {
                                var o = t.multiple ? e.value.some(function(t) {
                                    return on(t, r)
                                }) : e.value !== e.oldValue && on(e.value, r);
                                o && hn(t, "change")
                            }
                        }
                    }
                },
                Vo = {
                    bind: function(t, e, i) {
                        var n = e.value;
                        i = un(i);
                        var r = i.data && i.data.transition,
                            o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                        n && r ? (i.data.show = !0, Ki(i, function() {
                            t.style.display = o
                        })) : t.style.display = n ? o : "none"
                    },
                    update: function(t, e, i) {
                        var n = e.value,
                            r = e.oldValue;
                        if (n !== r) {
                            i = un(i);
                            var o = i.data && i.data.transition;
                            o ? (i.data.show = !0, n ? Ki(i, function() {
                                t.style.display = t.__vOriginalDisplay
                            }) : Qi(i, function() {
                                t.style.display = "none"
                            })) : t.style.display = n ? t.__vOriginalDisplay : "none"
                        }
                    },
                    unbind: function(t, e, i, n, r) {
                        r || (t.style.display = t.__vOriginalDisplay)
                    }
                },
                Ho = {
                    model: $o,
                    show: Vo
                },
                Uo = {
                    name: String,
                    appear: Boolean,
                    css: Boolean,
                    mode: String,
                    type: String,
                    enterClass: String,
                    leaveClass: String,
                    enterToClass: String,
                    leaveToClass: String,
                    enterActiveClass: String,
                    leaveActiveClass: String,
                    appearClass: String,
                    appearActiveClass: String,
                    appearToClass: String,
                    duration: [Number, String, Object]
                },
                Yo = {
                    name: "transition",
                    props: Uo,
                    "abstract": !0,
                    render: function(t) {
                        var e = this,
                            i = this.$slots["default"];
                        if (i && (i = i.filter(function(t) {
                                return t.tag || wt(t)
                            }), i.length)) {
                            var n = this.mode,
                                r = i[0];
                            if (dn(this.$vnode)) return r;
                            var o = cn(r);
                            if (!o) return r;
                            if (this._leaving) return pn(t, r);
                            var a = "__transition-" + this._uid + "-";
                            o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
                            var l = (o.data || (o.data = {})).transition = fn(this),
                                h = this._vnode,
                                u = cn(h);
                            if (o.data.directives && o.data.directives.some(function(t) {
                                    return "show" === t.name
                                }) && (o.data.show = !0), u && u.data && !mn(o, u) && !wt(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                                var c = u.data.transition = x({}, l);
                                if ("out-in" === n) return this._leaving = !0, ct(c, "afterLeave", function() {
                                    e._leaving = !1, e.$forceUpdate()
                                }), pn(t, r);
                                if ("in-out" === n) {
                                    if (wt(o)) return h;
                                    var f, p = function() {
                                        f()
                                    };
                                    ct(l, "afterEnter", p), ct(l, "enterCancelled", p), ct(c, "delayLeave", function(t) {
                                        f = t
                                    })
                                }
                            }
                            return r
                        }
                    }
                },
                Wo = x({
                    tag: String,
                    moveClass: String
                }, Uo);
            delete Wo.mode;
            var qo = {
                    props: Wo,
                    render: function(t) {
                        for (var e = this.tag || this.$vnode.data.tag || "span", i = Object.create(null), n = this.prevChildren = this.children, r = this.$slots["default"] || [], o = this.children = [], a = fn(this), s = 0; s < r.length; s++) {
                            var l = r[s];
                            if (l.tag)
                                if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) o.push(l), i[l.key] = l, (l.data || (l.data = {})).transition = a;
                                else;
                        }
                        if (n) {
                            for (var h = [], u = [], c = 0; c < n.length; c++) {
                                var f = n[c];
                                f.data.transition = a, f.data.pos = f.elm.getBoundingClientRect(), i[f.key] ? h.push(f) : u.push(f)
                            }
                            this.kept = t(e, null, h), this.removed = u
                        }
                        return t(e, null, o)
                    },
                    beforeUpdate: function() {
                        this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
                    },
                    updated: function() {
                        var t = this.prevChildren,
                            e = this.moveClass || (this.name || "v") + "-move";
                        t.length && this.hasMove(t[0].elm, e) && (t.forEach(vn), t.forEach(gn), t.forEach(_n), this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                            if (t.data.moved) {
                                var i = t.elm,
                                    n = i.style;
                                Ui(i, e), n.transform = n.WebkitTransform = n.transitionDuration = "", i.addEventListener(Io, i._moveCb = function r(t) {
                                    t && !/transform$/.test(t.propertyName) || (i.removeEventListener(Io, r), i._moveCb = null, Yi(i, e))
                                })
                            }
                        }))
                    },
                    methods: {
                        hasMove: function(t, e) {
                            if (!Mo) return !1;
                            if (this._hasMove) return this._hasMove;
                            var i = t.cloneNode();
                            t._transitionClasses && t._transitionClasses.forEach(function(t) {
                                $i(i, t)
                            }), Xi(i, e), i.style.display = "none", this.$el.appendChild(i);
                            var n = qi(i);
                            return this.$el.removeChild(i), this._hasMove = n.hasTransform
                        }
                    }
                },
                Go = {
                    Transition: Yo,
                    TransitionGroup: qo
                };
            Re.config.mustUseProp = qr, Re.config.isReservedTag = ro, Re.config.isReservedAttr = Yr, Re.config.getTagNamespace = ti, Re.config.isUnknownElement = ei, x(Re.options.directives, Ho), x(Re.options.components, Go), Re.prototype.__patch__ = zn ? Xo : b, Re.prototype.$mount = function(t, e) {
                return t = t && zn ? ii(t) : void 0, It(this, t, e)
            }, Re.nextTick(function() {
                In.devtools && Qn && Qn.emit("init", Re)
            }, 0), e["default"] = Re
        }.call(e, i(19), i(112).setImmediate)
}, function(t, e, i) {
    function n(t, e) {
        this._id = t, this._clearFn = e
    }
    var r = Function.prototype.apply;
    e.setTimeout = function() {
        return new n(r.call(setTimeout, window, arguments), clearTimeout)
    }, e.setInterval = function() {
        return new n(r.call(setInterval, window, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function(t) {
        t && t.close()
    }, n.prototype.unref = n.prototype.ref = function() {}, n.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }, e.enroll = function(t, e) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function(t) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function() {
            t._onTimeout && t._onTimeout()
        }, e))
    }, i(113), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
}, function(t, e, i) {
    (function(t, e) {
        ! function(t, i) {
            "use strict";

            function n(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
                var n = {
                    callback: t,
                    args: e
                };
                return m[d] = n, p(d), d++
            }

            function r(t) {
                delete m[t]
            }

            function o(t) {
                var e = t.callback,
                    n = t.args;
                switch (n.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(n[0]);
                        break;
                    case 2:
                        e(n[0], n[1]);
                        break;
                    case 3:
                        e(n[0], n[1], n[2]);
                        break;
                    default:
                        e.apply(i, n)
                }
            }

            function a(t) {
                if (v) setTimeout(a, 0, t);
                else {
                    var e = m[t];
                    if (e) {
                        v = !0;
                        try {
                            o(e)
                        } finally {
                            r(t), v = !1
                        }
                    }
                }
            }

            function s() {
                p = function(t) {
                    e.nextTick(function() {
                        a(t)
                    })
                }
            }

            function l() {
                if (t.postMessage && !t.importScripts) {
                    var e = !0,
                        i = t.onmessage;
                    return t.onmessage = function() {
                        e = !1
                    }, t.postMessage("", "*"), t.onmessage = i, e
                }
            }

            function h() {
                var e = "setImmediate$" + Math.random() + "$",
                    i = function(i) {
                        i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && a(+i.data.slice(e.length))
                    };
                t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i), p = function(i) {
                    t.postMessage(e + i, "*")
                }
            }

            function u() {
                var t = new MessageChannel;
                t.port1.onmessage = function(t) {
                    var e = t.data;
                    a(e)
                }, p = function(e) {
                    t.port2.postMessage(e)
                }
            }

            function c() {
                var t = g.documentElement;
                p = function(e) {
                    var i = g.createElement("script");
                    i.onreadystatechange = function() {
                        a(e), i.onreadystatechange = null, t.removeChild(i), i = null
                    }, t.appendChild(i)
                }
            }

            function f() {
                p = function(t) {
                    setTimeout(a, 0, t)
                }
            }
            if (!t.setImmediate) {
                var p, d = 1,
                    m = {},
                    v = !1,
                    g = t.document,
                    _ = Object.getPrototypeOf && Object.getPrototypeOf(t);
                _ = _ && _.setTimeout ? _ : t, "[object process]" === {}.toString.call(t.process) ? s() : l() ? h() : t.MessageChannel ? u() : g && "onreadystatechange" in g.createElement("script") ? c() : f(), _.setImmediate = n, _.clearImmediate = r
            }
        }("undefined" == typeof self ? "undefined" == typeof t ? this : t : self)
    }).call(e, i(19), i(61))
}, function(t, e, i) {
    var n = i(6),
        r = n.JSON || (n.JSON = {
            stringify: JSON.stringify
        });
    t.exports = function(t) {
        return r.stringify.apply(r, arguments)
    }
}, function(t, e) {
    function i(t) {
        return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }

    function n(t) {
        return "function" == typeof t.readFloatLE && "function" == typeof t.slice && i(t.slice(0, 0))
    }
    t.exports = function(t) {
        return null != t && (i(t) || n(t) || !!t._isBuffer)
    }
}, function(t, e, i) {
    "use strict";
    (function(e) {
        function n(t, e) {
            !o.isUndefined(t) && o.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }

        function r() {
            var t;
            return "undefined" != typeof XMLHttpRequest ? t = i(165) : "undefined" != typeof e && (t = i(165)), t
        }
        var o = i(14),
            a = i(265),
            s = {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            l = {
                adapter: r(),
                transformRequest: [function(t, e) {
                    return a(e, "Content-Type"), o.isFormData(t) || o.isArrayBuffer(t) || o.isBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t) ? t : o.isArrayBufferView(t) ? t.buffer : o.isURLSearchParams(t) ? (n(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : o.isObject(t) ? (n(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                }],
                transformResponse: [function(t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (e) {}
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
        }, o.forEach(["delete", "get", "head"], function(t) {
            l.headers[t] = {}
        }), o.forEach(["post", "put", "patch"], function(t) {
            l.headers[t] = o.merge(s)
        }), t.exports = l
    }).call(e, i(61))
}, function(t, e, i) {
    function n(t) {
        if ("string" == typeof t) {
            var e = l.get(t);
            return e && e.image
        }
        return t
    }

    function r(t, e, i, n, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !i) return e;
                var s = l.get(t),
                    h = {
                        hostEl: i,
                        cb: n,
                        cbPayload: r
                    };
                return s ? (e = s.image, !a(e) && s.pending.push(h)) : (!e && (e = new Image), e.onload = o, l.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [h]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function o() {
        var t = this.__cachedImgObj;
        this.onload = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var i = t.pending[e],
                n = i.cb;
            n && n(this, i.cbPayload), i.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function a(t) {
        return t && t.width && t.height
    }
    var s = i(169),
        l = new s(50);
    e.findExistImage = n, e.createOrUpdateImage = r, e.isImageReady = a
}, function(t, e, i) {
    var n = i(3);
    t.exports = function(t) {
        for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
        return function(e, i) {
            for (var r = {}, o = 0; o < t.length; o++) {
                var a = t[o][1];
                if (!(e && n.indexOf(e, a) >= 0 || i && n.indexOf(i, a) < 0)) {
                    var s = this.getShallow(a);
                    null != s && (r[t[o][0]] = s)
                }
            }
            return r
        }
    }
}, function(t, e, i) {
    function n(t) {
        t = t || {}, a.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new o(t.style, this), this._rect = null, this.__clipPaths = []
    }
    var r = i(3),
        o = i(170),
        a = i(171),
        s = i(289);
    n.prototype = {
        constructor: n,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: -1,
        beforeBrush: function(t) {},
        afterBrush: function(t) {},
        brush: function(t, e) {},
        getBoundingRect: function() {},
        contain: function(t, e) {
            return this.rectContain(t, e)
        },
        traverse: function(t, e) {
            t.call(e, this)
        },
        rectContain: function(t, e) {
            var i = this.transformCoordToLocal(t, e),
                n = this.getBoundingRect();
            return n.contain(i[0], i[1])
        },
        dirty: function() {
            this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
        },
        animateStyle: function(t) {
            return this.animate("style", t)
        },
        attrKV: function(t, e) {
            "style" !== t ? a.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function(t, e) {
            return this.style.set(t, e), this.dirty(!1), this
        },
        useStyle: function(t) {
            return this.style = new o(t, this), this.dirty(!1), this
        }
    }, r.inherits(n, a), r.mixin(n, s);
    var l = n;
    t.exports = l
}, function(t, e) {
    var i = function(t) {
        this.colorStops = t || []
    };
    i.prototype = {
        constructor: i,
        addColorStop: function(t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            })
        }
    };
    var n = i;
    t.exports = n
}, function(t, e, i) {
    var n = i(3),
        r = i(34),
        o = r.parseClassType,
        a = 0,
        s = {},
        l = "_";
    s.getUID = function(t) {
        return [t || "", a++, Math.random()].join(l)
    }, s.enableSubTypeDefaulter = function(t) {
        var e = {};
        return t.registerSubTypeDefaulter = function(t, i) {
            t = o(t), e[t.main] = i
        }, t.determineSubType = function(i, n) {
            var r = n.type;
            if (!r) {
                var a = o(i).main;
                t.hasSubTypes(i) && e[a] && (r = e[a](n))
            }
            return r
        }, t
    }, s.enableTopologicalTravel = function(t, e) {
        function i(t) {
            var i = {},
                a = [];
            return n.each(t, function(s) {
                var l = r(i, s),
                    h = l.originalDeps = e(s),
                    u = o(h, t);
                l.entryCount = u.length, 0 === l.entryCount && a.push(s), n.each(u, function(t) {
                    n.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
                    var e = r(i, t);
                    n.indexOf(e.successor, t) < 0 && e.successor.push(s)
                })
            }), {
                graph: i,
                noEntryList: a
            }
        }

        function r(t, e) {
            return t[e] || (t[e] = {
                predecessor: [],
                successor: []
            }), t[e]
        }

        function o(t, e) {
            var i = [];
            return n.each(t, function(t) {
                n.indexOf(e, t) >= 0 && i.push(t)
            }), i
        }
        t.topologicalTravel = function(t, e, r, o) {
            function a(t) {
                h[t].entryCount--, 0 === h[t].entryCount && u.push(t)
            }

            function s(t) {
                c[t] = !0, a(t)
            }
            if (t.length) {
                var l = i(e),
                    h = l.graph,
                    u = l.noEntryList,
                    c = {};
                for (n.each(t, function(t) {
                    c[t] = !0
                }); u.length;) {
                    var f = u.pop(),
                        p = h[f],
                        d = !!c[f];
                    d && (r.call(o, f, p.originalDeps.slice()), delete c[f]), n.each(p.successor, d ? s : a)
                }
                n.each(c, function() {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }, t.exports = s
}, function(t, e, i) {
    "use strict";

    function n() {
        this._coordinateSystems = []
    }
    var r = i(3),
        o = {};
    n.prototype = {
        constructor: n,
        create: function(t, e) {
            var i = [];
            r.each(o, function(n, r) {
                var o = n.create(t, e);
                i = i.concat(o || [])
            }), this._coordinateSystems = i
        },
        update: function(t, e) {
            r.each(this._coordinateSystems, function(i) {
                i.update && i.update(t, e)
            })
        },
        getCoordinateSystems: function() {
            return this._coordinateSystems.slice()
        }
    }, n.register = function(t, e) {
        o[t] = e
    }, n.get = function(t) {
        return o[t]
    }, t.exports = n
}, function(t, e) {
    function i(t) {
        for (var e = 0; t >= u;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function n(t, e, i, n) {
        var o = e + 1;
        if (o === i) return 1;
        if (n(t[o++], t[e]) < 0) {
            for (; o < i && n(t[o], t[o - 1]) < 0;) o++;
            r(t, e, o)
        } else
            for (; o < i && n(t[o], t[o - 1]) >= 0;) o++;
        return o - e
    }

    function r(t, e, i) {
        for (i--; e < i;) {
            var n = t[e];
            t[e++] = t[i], t[i--] = n
        }
    }

    function o(t, e, i, n, r) {
        for (n === e && n++; n < i; n++) {
            for (var o, a = t[n], s = e, l = n; s < l;) o = s + l >>> 1, r(a, t[o]) < 0 ? l = o : s = o + 1;
            var h = n - s;
            switch (h) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; h > 0;) t[s + h] = t[s + h - 1], h--
            }
            t[s] = a
        }
    }

    function a(t, e, i, n, r, o) {
        var a = 0,
            s = 0,
            l = 1;
        if (o(t, e[i + r]) > 0) {
            for (s = n - r; l < s && o(t, e[i + r + l]) > 0;) a = l, l = (l << 1) + 1, l <= 0 && (l = s);
            l > s && (l = s), a += r, l += r
        } else {
            for (s = r + 1; l < s && o(t, e[i + r - l]) <= 0;) a = l, l = (l << 1) + 1, l <= 0 && (l = s);
            l > s && (l = s);
            var h = a;
            a = r - l, l = r - h
        }
        for (a++; a < l;) {
            var u = a + (l - a >>> 1);
            o(t, e[i + u]) > 0 ? a = u + 1 : l = u
        }
        return l
    }

    function s(t, e, i, n, r, o) {
        var a = 0,
            s = 0,
            l = 1;
        if (o(t, e[i + r]) < 0) {
            for (s = r + 1; l < s && o(t, e[i + r - l]) < 0;) a = l, l = (l << 1) + 1, l <= 0 && (l = s);
            l > s && (l = s);
            var h = a;
            a = r - l, l = r - h
        } else {
            for (s = n - r; l < s && o(t, e[i + r + l]) >= 0;) a = l, l = (l << 1) + 1, l <= 0 && (l = s);
            l > s && (l = s), a += r, l += r
        }
        for (a++; a < l;) {
            var u = a + (l - a >>> 1);
            o(t, e[i + u]) < 0 ? l = u : a = u + 1
        }
        return l
    }

    function l(t, e) {
        function i(t, e) {
            u[_] = t, p[_] = e, _ += 1
        }

        function n() {
            for (; _ > 1;) {
                var t = _ - 2;
                if (t >= 1 && p[t - 1] <= p[t] + p[t + 1] || t >= 2 && p[t - 2] <= p[t] + p[t - 1]) p[t - 1] < p[t + 1] && t--;
                else if (p[t] > p[t + 1]) break;
                o(t)
            }
        }

        function r() {
            for (; _ > 1;) {
                var t = _ - 2;
                t > 0 && p[t - 1] < p[t + 1] && t--, o(t)
            }
        }

        function o(i) {
            var n = u[i],
                r = p[i],
                o = u[i + 1],
                c = p[i + 1];
            p[i] = r + c, i === _ - 3 && (u[i + 1] = u[i + 2], p[i + 1] = p[i + 2]), _--;
            var f = s(t[o], t, n, r, 0, e);
            n += f, r -= f, 0 !== r && (c = a(t[n + r - 1], t, o, c, c - 1, e), 0 !== c && (r <= c ? l(n, r, o, c) : h(n, r, o, c)))
        }

        function l(i, n, r, o) {
            var l = 0;
            for (l = 0; l < n; l++) y[l] = t[i + l];
            var h = 0,
                u = r,
                f = i;
            if (t[f++] = t[u++], 0 !== --o) {
                if (1 === n) {
                    for (l = 0; l < o; l++) t[f + l] = t[u + l];
                    return void(t[f + o] = y[h])
                }
                for (var p, m, v, g = d;;) {
                    p = 0, m = 0, v = !1;
                    do
                        if (e(t[u], y[h]) < 0) {
                            if (t[f++] = t[u++], m++, p = 0, 0 === --o) {
                                v = !0;
                                break
                            }
                        } else if (t[f++] = y[h++], p++, m = 0, 1 === --n) {
                            v = !0;
                            break
                        } while ((p | m) < g);
                    if (v) break;
                    do {
                        if (p = s(t[u], y, h, n, 0, e), 0 !== p) {
                            for (l = 0; l < p; l++) t[f + l] = y[h + l];
                            if (f += p, h += p, n -= p, n <= 1) {
                                v = !0;
                                break
                            }
                        }
                        if (t[f++] = t[u++], 0 === --o) {
                            v = !0;
                            break
                        }
                        if (m = a(y[h], t, u, o, 0, e), 0 !== m) {
                            for (l = 0; l < m; l++) t[f + l] = t[u + l];
                            if (f += m, u += m, o -= m, 0 === o) {
                                v = !0;
                                break
                            }
                        }
                        if (t[f++] = y[h++], 1 === --n) {
                            v = !0;
                            break
                        }
                        g--
                    } while (p >= c || m >= c);
                    if (v) break;
                    g < 0 && (g = 0), g += 2
                }
                if (d = g, d < 1 && (d = 1), 1 === n) {
                    for (l = 0; l < o; l++) t[f + l] = t[u + l];
                    t[f + o] = y[h]
                } else {
                    if (0 === n) throw new Error;
                    for (l = 0; l < n; l++) t[f + l] = y[h + l]
                }
            } else
                for (l = 0; l < n; l++) t[f + l] = y[h + l]
        }

        function h(i, n, r, o) {
            var l = 0;
            for (l = 0; l < o; l++) y[l] = t[r + l];
            var h = i + n - 1,
                u = o - 1,
                f = r + o - 1,
                p = 0,
                m = 0;
            if (t[f--] = t[h--], 0 !== --n) {
                if (1 === o) {
                    for (f -= n, h -= n, m = f + 1, p = h + 1, l = n - 1; l >= 0; l--) t[m + l] = t[p + l];
                    return void(t[f] = y[u])
                }
                for (var v = d;;) {
                    var g = 0,
                        _ = 0,
                        x = !1;
                    do
                        if (e(y[u], t[h]) < 0) {
                            if (t[f--] = t[h--], g++, _ = 0, 0 === --n) {
                                x = !0;
                                break
                            }
                        } else if (t[f--] = y[u--], _++, g = 0, 1 === --o) {
                            x = !0;
                            break
                        } while ((g | _) < v);
                    if (x) break;
                    do {
                        if (g = n - s(y[u], t, i, n, n - 1, e), 0 !== g) {
                            for (f -= g, h -= g, n -= g, m = f + 1, p = h + 1, l = g - 1; l >= 0; l--) t[m + l] = t[p + l];
                            if (0 === n) {
                                x = !0;
                                break
                            }
                        }
                        if (t[f--] = y[u--], 1 === --o) {
                            x = !0;
                            break
                        }
                        if (_ = o - a(t[h], y, 0, o, o - 1, e), 0 !== _) {
                            for (f -= _, u -= _, o -= _, m = f + 1, p = u + 1, l = 0; l < _; l++) t[m + l] = y[p + l];
                            if (o <= 1) {
                                x = !0;
                                break
                            }
                        }
                        if (t[f--] = t[h--], 0 === --n) {
                            x = !0;
                            break
                        }
                        v--
                    } while (g >= c || _ >= c);
                    if (x) break;
                    v < 0 && (v = 0), v += 2
                }
                if (d = v, d < 1 && (d = 1), 1 === o) {
                    for (f -= n, h -= n, m = f + 1, p = h + 1, l = n - 1; l >= 0; l--) t[m + l] = t[p + l];
                    t[f] = y[u]
                } else {
                    if (0 === o) throw new Error;
                    for (p = f - (o - 1), l = 0; l < o; l++) t[p + l] = y[l]
                }
            } else
                for (p = f - (o - 1), l = 0; l < o; l++) t[p + l] = y[l]
        }
        var u, p, d = c,
            m = 0,
            v = f,
            g = 0,
            _ = 0;
        m = t.length, m < 2 * f && (v = m >>> 1);
        var y = [];
        g = m < 120 ? 5 : m < 1542 ? 10 : m < 119151 ? 19 : 40, u = [], p = [], this.mergeRuns = n, this.forceMergeRuns = r, this.pushRun = i
    }

    function h(t, e, r, a) {
        r || (r = 0), a || (a = t.length);
        var s = a - r;
        if (!(s < 2)) {
            var h = 0;
            if (s < u) return h = n(t, r, a, e), void o(t, r, a, r + h, e);
            var c = new l(t, e),
                f = i(s);
            do {
                if (h = n(t, r, a, e), h < f) {
                    var p = s;
                    p > f && (p = f), o(t, r, r + p, r + h, e), h = p
                }
                c.pushRun(r, h), c.mergeRuns(), s -= h, r += h
            } while (0 !== s);
            c.forceMergeRuns()
        }
    }
    var u = 32,
        c = 7,
        f = 256;
    t.exports = h
}, function(t, e, i) {
    function n(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {
            left: 0,
            top: 0
        }
    }

    function r(t, e, i, n) {
        return i = i || {}, n || !c.canvasSupported ? o(t, e, i) : c.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : o(t, e, i), i
    }

    function o(t, e, i) {
        var r = n(t);
        i.zrX = e.clientX - r.left, i.zrY = e.clientY - r.top
    }

    function a(t, e, i) {
        if (e = e || window.event, null != e.zrX) return e;
        var n = e.type,
            o = n && n.indexOf("touch") >= 0;
        if (o) {
            var a = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
            a && r(t, a, e, i)
        } else r(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var s = e.button;
        return null == e.which && void 0 !== s && p.test(e.type) && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
    }

    function s(t, e, i) {
        f ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
    }

    function l(t, e, i) {
        f ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
    }

    function h(t) {
        return t.which > 1
    }
    var u = i(65);
    e.Dispatcher = u;
    var c = i(31),
        f = "undefined" != typeof window && !!window.addEventListener,
        p = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        d = f ? function(t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function(t) {
            t.returnValue = !1, t.cancelBubble = !0
        };
    e.clientToLocal = r, e.normalizeEvent = a, e.addEventListener = s, e.removeEventListener = l, e.stop = d, e.notLeftMouse = h
}, function(t, e, i) {
    (function(e) {
        function n(t, e) {
            d.each(g.concat(e.__wrappedMethods || []), function(i) {
                e.hasOwnProperty(i) && (t[i] = e[i])
            }), t.__wrappedMethods = e.__wrappedMethods
        }

        function r(t) {
            this._array = t || []
        }

        function o(t) {
            return d.isArray(t) || (t = [t]), t
        }

        function a(t, e) {
            var i = t.dimensions,
                r = new _(d.map(i, t.getDimensionInfo, t), t.hostModel);
            n(r, t);
            for (var o = r._storage = {}, a = t._storage, s = 0; s < i.length; s++) {
                var l = i[s],
                    h = a[l];
                d.indexOf(e, l) >= 0 ? o[l] = new h.constructor(a[l].length) : o[l] = a[l]
            }
            return r
        }
        var s = "undefined",
            l = "undefined" == typeof window ? e : window,
            h = typeof l.Float64Array === s ? Array : l.Float64Array,
            u = typeof l.Int32Array === s ? Array : l.Int32Array,
            c = {
                "float": h,
                "int": u,
                ordinal: Array,
                number: Array,
                time: Array
            },
            f = i(33),
            p = i(335),
            d = i(3),
            m = i(24),
            v = d.isObject,
            g = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData"];
        r.prototype.pure = !1, r.prototype.count = function() {
            return this._array.length
        }, r.prototype.getItem = function(t) {
            return this._array[t]
        };
        var _ = function(t, e) {
                t = t || ["x", "y"];
                for (var i = {}, n = [], r = 0; r < t.length; r++) {
                    var o, a = {};
                    "string" == typeof t[r] ? (o = t[r], a = {
                        name: o,
                        coordDim: o,
                        coordDimIndex: 0,
                        stackable: !1,
                        type: "number"
                    }) : (a = t[r], o = a.name, a.type = a.type || "number", a.coordDim || (a.coordDim = o, a.coordDimIndex = 0)), a.otherDims = a.otherDims || {}, n.push(o), i[o] = a
                }
                this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent
            },
            y = _.prototype;
        y.type = "list", y.hasItemOption = !0, y.getDimension = function(t) {
            return isNaN(t) || (t = this.dimensions[t] || t), t
        }, y.getDimensionInfo = function(t) {
            return d.clone(this._dimensionInfos[this.getDimension(t)])
        }, y.initData = function(t, e, i) {
            t = t || [];
            var n = d.isArray(t);
            if (n && (t = new r(t)), __DEV__ && !n && ("function" != typeof t.getItem || "function" != typeof t.count)) throw new Error("Inavlid data provider.");
            this._rawData = t;
            var o, a = this._storage = {},
                s = this.indices = [],
                l = this.dimensions,
                h = this._dimensionInfos,
                u = t.count(),
                f = [],
                p = {};
            e = e || [];
            for (var v = 0; v < l.length; v++) {
                var g = h[l[v]];
                0 === g.otherDims.itemName && (o = v);
                var _ = c[g.type];
                a[l[v]] = new _(u)
            }
            var y = this;
            i || (y.hasItemOption = !1), i = i || function(t, e, i, n) {
                var r = m.getDataItemValue(t);
                return m.isDataItemOption(t) && (y.hasItemOption = !0), m.converDataValue(r instanceof Array ? r[n] : r, h[e])
            };
            for (var v = 0; v < u; v++) {
                for (var x = t.getItem(v), w = 0; w < l.length; w++) {
                    var b = l[w],
                        T = a[b];
                    T[v] = i(x, b, v, w)
                }
                s.push(v)
            }
            for (var v = 0; v < u; v++) {
                var x = t.getItem(v);
                !e[v] && x && (null != x.name ? e[v] = x.name : null != o && (e[v] = a[l[o]][v]));
                var S = e[v] || "",
                    P = x && x.id;
                !P && S && (p[S] = p[S] || 0, P = S, p[S] > 0 && (P += "__ec__" + p[S]), p[S]++), P && (f[v] = P)
            }
            this._nameList = e, this._idList = f
        }, y.count = function() {
            return this.indices.length
        }, y.get = function(t, e, i) {
            var n = this._storage,
                r = this.indices[e];
            if (null == r || !n[t]) return NaN;
            var o = n[t][r];
            if (i) {
                var a = this._dimensionInfos[t];
                if (a && a.stackable)
                    for (var s = this.stackedOn; s;) {
                        var l = s.get(t, e);
                        (o >= 0 && l > 0 || o <= 0 && l < 0) && (o += l), s = s.stackedOn
                    }
            }
            return o
        }, y.getValues = function(t, e, i) {
            var n = [];
            d.isArray(t) || (i = e, e = t, t = this.dimensions);
            for (var r = 0, o = t.length; r < o; r++) n.push(this.get(t[r], e, i));
            return n
        }, y.hasValue = function(t) {
            for (var e = this.dimensions, i = this._dimensionInfos, n = 0, r = e.length; n < r; n++)
                if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t))) return !1;
            return !0
        }, y.getDataExtent = function(t, e, i) {
            t = this.getDimension(t);
            var n = this._storage[t],
                r = this.getDimensionInfo(t);
            e = r && r.stackable && e;
            var o, a = (this._extent || (this._extent = {}))[t + !!e];
            if (a) return a;
            if (n) {
                for (var s = 1 / 0, l = -(1 / 0), h = 0, u = this.count(); h < u; h++) o = this.get(t, h, e), i && !i(o, t, h) || (o < s && (s = o), o > l && (l = o));
                return this._extent[t + !!e] = [s, l]
            }
            return [1 / 0, -(1 / 0)]
        }, y.getSum = function(t, e) {
            var i = this._storage[t],
                n = 0;
            if (i)
                for (var r = 0, o = this.count(); r < o; r++) {
                    var a = this.get(t, r, e);
                    isNaN(a) || (n += a)
                }
            return n
        }, y.indexOf = function(t, e) {
            var i = this._storage,
                n = i[t],
                r = this.indices;
            if (n)
                for (var o = 0, a = r.length; o < a; o++) {
                    var s = r[o];
                    if (n[s] === e) return o
                }
            return -1
        }, y.indexOfName = function(t) {
            for (var e = this.indices, i = this._nameList, n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (i[o] === t) return n
            }
            return -1
        }, y.indexOfRawIndex = function(t) {
            var e = this.indices,
                i = e[t];
            if (null != i && i === t) return t;
            for (var n = 0, r = e.length - 1; n <= r;) {
                var o = (n + r) / 2 | 0;
                if (e[o] < t) n = o + 1;
                else {
                    if (!(e[o] > t)) return o;
                    r = o - 1
                }
            }
            return -1
        }, y.indicesOfNearest = function(t, e, i, n) {
            var r = this._storage,
                o = r[t],
                a = [];
            if (!o) return a;
            null == n && (n = 1 / 0);
            for (var s = Number.MAX_VALUE, l = -1, h = 0, u = this.count(); h < u; h++) {
                var c = e - this.get(t, h, i),
                    f = Math.abs(c);
                c <= n && f <= s && ((f < s || c >= 0 && l < 0) && (s = f, l = c, a.length = 0), a.push(h))
            }
            return a
        }, y.getRawIndex = function(t) {
            var e = this.indices[t];
            return null == e ? -1 : e
        }, y.getRawDataItem = function(t) {
            return this._rawData.getItem(this.getRawIndex(t))
        }, y.getName = function(t) {
            return this._nameList[this.indices[t]] || ""
        }, y.getId = function(t) {
            return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
        }, y.each = function(t, e, i, n) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), t = d.map(o(t), this.getDimension, this);
            var r = [],
                a = t.length,
                s = this.indices;
            n = n || this;
            for (var l = 0; l < s.length; l++) switch (a) {
                case 0:
                    e.call(n, l);
                    break;
                case 1:
                    e.call(n, this.get(t[0], l, i), l);
                    break;
                case 2:
                    e.call(n, this.get(t[0], l, i), this.get(t[1], l, i), l);
                    break;
                default:
                    for (var h = 0; h < a; h++) r[h] = this.get(t[h], l, i);
                    r[h] = l, e.apply(n, r)
            }
        }, y.filterSelf = function(t, e, i, n) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), t = d.map(o(t), this.getDimension, this);
            var r = [],
                a = [],
                s = t.length,
                l = this.indices;
            n = n || this;
            for (var h = 0; h < l.length; h++) {
                var u;
                if (s)
                    if (1 === s) u = e.call(n, this.get(t[0], h, i), h);
                    else {
                        for (var c = 0; c < s; c++) a[c] = this.get(t[c], h, i);
                        a[c] = h, u = e.apply(n, a)
                    }
                else u = e.call(n, h);
                u && r.push(l[h])
            }
            return this.indices = r, this._extent = {}, this
        }, y.mapArray = function(t, e, i, n) {
            "function" == typeof t && (n = i, i = e, e = t, t = []);
            var r = [];
            return this.each(t, function() {
                r.push(e && e.apply(this, arguments))
            }, i, n), r
        }, y.map = function(t, e, i, n) {
            t = d.map(o(t), this.getDimension, this);
            var r = a(this, t),
                s = r.indices = this.indices,
                l = r._storage,
                h = [];
            return this.each(t, function() {
                var i = arguments[arguments.length - 1],
                    n = e && e.apply(this, arguments);
                if (null != n) {
                    "number" == typeof n && (h[0] = n, n = h);
                    for (var r = 0; r < n.length; r++) {
                        var o = t[r],
                            a = l[o],
                            u = s[i];
                        a && (a[u] = n[r])
                    }
                }
            }, i, n), r
        }, y.downSample = function(t, e, i, n) {
            for (var r = a(this, [t]), o = this._storage, s = r._storage, l = this.indices, h = r.indices = [], u = [], c = [], f = Math.floor(1 / e), p = s[t], d = this.count(), m = 0; m < o[t].length; m++) s[t][m] = o[t][m];
            for (var m = 0; m < d; m += f) {
                f > d - m && (f = d - m, u.length = f);
                for (var v = 0; v < f; v++) {
                    var g = l[m + v];
                    u[v] = p[g], c[v] = g
                }
                var _ = i(u),
                    g = c[n(u, _) || 0];
                p[g] = _, h.push(g)
            }
            return r
        }, y.getItemModel = function(t) {
            var e = this.hostModel;
            return t = this.indices[t], new f(this._rawData.getItem(t), e, e && e.ecModel)
        }, y.diff = function(t) {
            var e, i = this._idList,
                n = t && t._idList,
                r = "e\0\0";
            return new p(t ? t.indices : [], this.indices, function(t) {
                return null != (e = n[t]) ? e : r + t
            }, function(t) {
                return null != (e = i[t]) ? e : r + t
            })
        }, y.getVisual = function(t) {
            var e = this._visual;
            return e && e[t]
        }, y.setVisual = function(t, e) {
            if (v(t))
                for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]);
            else this._visual = this._visual || {}, this._visual[t] = e
        }, y.setLayout = function(t, e) {
            if (v(t))
                for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]);
            else this._layout[t] = e
        }, y.getLayout = function(t) {
            return this._layout[t]
        }, y.getItemLayout = function(t) {
            return this._itemLayouts[t]
        }, y.setItemLayout = function(t, e, i) {
            this._itemLayouts[t] = i ? d.extend(this._itemLayouts[t] || {}, e) : e
        }, y.clearItemLayouts = function() {
            this._itemLayouts.length = 0
        }, y.getItemVisual = function(t, e, i) {
            var n = this._itemVisuals[t],
                r = n && n[e];
            return null != r || i ? r : this.getVisual(e)
        }, y.setItemVisual = function(t, e, i) {
            var n = this._itemVisuals[t] || {};
            if (this._itemVisuals[t] = n, v(e))
                for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
            else n[e] = i
        }, y.clearAllVisual = function() {
            this._visual = {}, this._itemVisuals = []
        };
        var x = function(t) {
            t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
        };
        y.setItemGraphicEl = function(t, e) {
            var i = this.hostModel;
            e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(x, e)), this._graphicEls[t] = e
        }, y.getItemGraphicEl = function(t) {
            return this._graphicEls[t]
        }, y.eachItemGraphicEl = function(t, e) {
            d.each(this._graphicEls, function(i, n) {
                i && t && t.call(e, i, n)
            })
        }, y.cloneShallow = function() {
            var t = d.map(this.dimensions, this.getDimensionInfo, this),
                e = new _(t, this.hostModel);
            return e._storage = this._storage, n(e, this), e.indices = this.indices.slice(), this._extent && (e._extent = d.extend({}, this._extent)), e
        }, y.wrapMethod = function(t, e) {
            var i = this[t];
            "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
                var t = i.apply(this, arguments);
                return e.apply(this, [t].concat(d.slice(arguments)))
            })
        }, y.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], y.CHANGABLE_METHODS = ["filterSelf"], t.exports = _
    }).call(e, i(19))
}, function(t, e, i) {
    function n(t, e, i) {
        function n(t, e, i) {
            c[e] ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, v.set(e, !0))
        }

        function a(t, e, i) {
            if (i || null != e.get(t)) {
                for (var n = 0; null != e.get(t + n);) n++;
                t += n
            }
            return e.set(t, !0), t
        }
        e = e || [], i = i || {}, t = (t || []).slice();
        var p = (i.dimsDef || []).slice(),
            d = o.createHashMap(i.encodeDef),
            m = o.createHashMap(),
            v = o.createHashMap(),
            g = [],
            _ = i.dimCount;
        if (null == _) {
            var y = r(e[0]);
            _ = Math.max(o.isArray(y) && y.length || 1, t.length, p.length), s(t, function(t) {
                var e = t.dimsDef;
                e && (_ = Math.max(_, e.length))
            })
        }
        for (var x = 0; x < _; x++) {
            var w = l(p[x]) ? {
                    name: p[x]
                } : p[x] || {},
                b = w.name,
                T = g[x] = {
                    otherDims: {}
                };
            null != b && null == m.get(b) && (T.name = T.tooltipName = b, m.set(b, x)), null != w.type && (T.type = w.type)
        }
        d.each(function(t, e) {
            t = d.set(e, u(t).slice()), s(t, function(i, r) {
                l(i) && (i = m.get(i)), null != i && i < _ && (t[r] = i, n(g[i], e, r))
            })
        });
        var S = 0;
        s(t, function(t, e) {
            var i, t, r, a;
            l(t) ? (i = t, t = {}) : (i = t.name, t = o.clone(t), r = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null);
            var c = u(d.get(i));
            if (!c.length)
                for (var f = 0; f < (r && r.length || 1); f++) {
                    for (; S < g.length && null != g[S].coordDim;) S++;
                    S < g.length && c.push(S++)
                }
            s(c, function(e, o) {
                var s = g[e];
                n(h(s, t), i, o), null == s.name && r && (s.name = s.tooltipName = r[o]), a && h(s.otherDims, a)
            })
        });
        for (var P = i.extraPrefix || "value", k = 0; k < _; k++) {
            var T = g[k] = g[k] || {},
                C = T.coordDim;
            null == C && (T.coordDim = a(P, v, i.extraFromZero), T.coordDimIndex = 0, T.isExtraCoord = !0), null == T.name && (T.name = a(T.coordDim, m)), null == T.type && f(e, k) && (T.type = "ordinal")
        }
        return g
    }

    function r(t) {
        return o.isArray(t) ? t : o.isObject(t) ? t.value : t
    }
    var o = i(3),
        a = i(24),
        s = o.each,
        l = o.isString,
        h = o.defaults,
        u = a.normalizeToArray,
        c = {
            tooltip: 1,
            label: 1,
            itemName: 1
        },
        f = n.guessOrdinal = function(t, e) {
            for (var i = 0, n = t.length; i < n; i++) {
                var a = r(t[i]);
                if (!o.isArray(a)) return !1;
                var a = a[e];
                if (null != a && isFinite(a) && "" !== a) return !1;
                if (l(a) && "-" !== a) return !0
            }
            return !1
        };
    t.exports = n
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    t.exports = function(t, e) {
        return function() {
            for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
            return t.apply(e, i)
        }
    }
}, function(t, e, i) {
    "use strict";
    var n = i(14),
        r = i(266),
        o = i(268),
        a = i(269),
        s = i(270),
        l = i(166),
        h = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || i(271);
    t.exports = function(t) {
        return new Promise(function(e, u) {
            var c = t.data,
                f = t.headers;
            n.isFormData(c) && delete f["Content-Type"];
            var p = new XMLHttpRequest,
                d = "onreadystatechange",
                m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || s(t.url) || (p = new window.XDomainRequest, d = "onload", m = !0, p.onprogress = function() {}, p.ontimeout = function() {}), t.auth) {
                var v = t.auth.username || "",
                    g = t.auth.password || "";
                f.Authorization = "Basic " + h(v + ":" + g)
            }
            if (p.open(t.method.toUpperCase(), o(t.url, t.params, t.paramsSerializer), !0), p.timeout = t.timeout, p[d] = function() {
                    if (p && (4 === p.readyState || m) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var i = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                            n = t.responseType && "text" !== t.responseType ? p.response : p.responseText,
                            o = {
                                data: n,
                                status: 1223 === p.status ? 204 : p.status,
                                statusText: 1223 === p.status ? "No Content" : p.statusText,
                                headers: i,
                                config: t,
                                request: p
                            };
                        r(e, u, o), p = null
                    }
                }, p.onerror = function() {
                    u(l("Network Error", t, null, p)), p = null
                }, p.ontimeout = function() {
                    u(l("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", p)), p = null
                }, n.isStandardBrowserEnv()) {
                var _ = i(272),
                    y = (t.withCredentials || s(t.url)) && t.xsrfCookieName ? _.read(t.xsrfCookieName) : void 0;
                y && (f[t.xsrfHeaderName] = y)
            }
            if ("setRequestHeader" in p && n.forEach(f, function(t, e) {
                    "undefined" == typeof c && "content-type" === e.toLowerCase() ? delete f[e] : p.setRequestHeader(e, t)
                }), t.withCredentials && (p.withCredentials = !0), t.responseType) try {
                p.responseType = t.responseType
            } catch (x) {
                if ("json" !== t.responseType) throw x
            }
            "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(t) {
                p && (p.abort(), u(t), p = null)
            }), void 0 === c && (c = null), p.send(c)
        })
    }
}, function(t, e, i) {
    "use strict";
    var n = i(267);
    t.exports = function(t, e, i, r, o) {
        var a = new Error(t);
        return n(a, e, i, r, o)
    }
}, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        return !(!t || !t.__CANCEL__)
    }
}, function(t, e, i) {
    "use strict";

    function n(t) {
        this.message = t
    }
    n.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, n.prototype.__CANCEL__ = !0, t.exports = n
}, function(t, e) {
    var i = function() {
            this.head = null, this.tail = null, this._len = 0
        },
        n = i.prototype;
    n.insert = function(t) {
        var e = new r(t);
        return this.insertEntry(e), e
    }, n.insertEntry = function(t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
    }, n.remove = function(t) {
        var e = t.prev,
            i = t.next;
        e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
    }, n.len = function() {
        return this._len
    }, n.clear = function() {
        this.head = this.tail = null, this._len = 0
    };
    var r = function(t) {
            this.value = t, this.next, this.prev
        },
        o = function(t) {
            this._list = new i, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
        },
        a = o.prototype;
    a.put = function(t, e) {
        var i = this._list,
            n = this._map,
            o = null;
        if (null == n[t]) {
            var a = i.len(),
                s = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var l = i.head;
                i.remove(l), delete n[l.key], o = l.value, this._lastRemovedEntry = l
            }
            s ? s.value = e : s = new r(e), s.key = t, i.insertEntry(s), n[t] = s
        }
        return o
    }, a.get = function(t) {
        var e = this._map[t],
            i = this._list;
        if (null != e) return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value
    }, a.clear = function() {
        this._list.clear(), this._map = {}
    };
    var s = o;
    t.exports = s
}, function(t, e) {
    function i(t, e, i) {
        var n = null == e.x ? 0 : e.x,
            r = null == e.x2 ? 1 : e.x2,
            o = null == e.y ? 0 : e.y,
            a = null == e.y2 ? 0 : e.y2;
        e.global || (n = n * i.width + i.x, r = r * i.width + i.x, o = o * i.height + i.y, a = a * i.height + i.y);
        var s = t.createLinearGradient(n, o, r, a);
        return s
    }

    function n(t, e, i) {
        var n = i.width,
            r = i.height,
            o = Math.min(n, r),
            a = null == e.x ? .5 : e.x,
            s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        e.global || (a = a * n + i.x, s = s * r + i.y, l *= o);
        var h = t.createRadialGradient(a, s, 0, a, s, l);
        return h
    }
    var r = [
            ["shadowBlur", 0],
            ["shadowOffsetX", 0],
            ["shadowOffsetY", 0],
            ["shadowColor", "#000"],
            ["lineCap", "butt"],
            ["lineJoin", "miter"],
            ["miterLimit", 10]
        ],
        o = function(t, e) {
            this.extendFrom(t, !1), this.host = e
        };
    o.prototype = {
        constructor: o,
        host: null,
        fill: "#000",
        stroke: null,
        opacity: 1,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function(t, e, i) {
            for (var n = this, o = i && i.style, a = !o, s = 0; s < r.length; s++) {
                var l = r[s],
                    h = l[0];
                (a || n[h] !== o[h]) && (t[h] = n[h] || l[1])
            }
            if ((a || n.fill !== o.fill) && (t.fillStyle = n.fill), (a || n.stroke !== o.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== o.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== o.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                var u = n.lineWidth;
                t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function() {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function() {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function(t, e) {
            if (t)
                for (var i in t) !t.hasOwnProperty(i) || e !== !0 && (e === !1 ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i])
        },
        set: function(t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function() {
            var t = new this.constructor;
            return t.extendFrom(this, !0), t
        },
        getGradient: function(t, e, r) {
            for (var o = "radial" === e.type ? n : i, a = o(t, e, r), s = e.colorStops, l = 0; l < s.length; l++) a.addColorStop(s[l].offset, s[l].color);
            return a
        }
    };
    for (var a = o.prototype, s = 0; s < r.length; s++) {
        var l = r[s];
        l[0] in a || (a[l[0]] = l[1])
    }
    o.getGradient = a.getGradient;
    var h = o;
    t.exports = h
}, function(t, e, i) {
    var n = i(172),
        r = i(65),
        o = i(173),
        a = i(286),
        s = i(3),
        l = function(t) {
            o.call(this, t), r.call(this, t), a.call(this, t), this.id = t.id || n()
        };
    l.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        drift: function(t, e) {
            switch (this.draggable) {
                case "horizontal":
                    e = 0;
                    break;
                case "vertical":
                    t = 0
            }
            var i = this.transform;
            i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
        },
        beforeUpdate: function() {},
        afterUpdate: function() {},
        update: function() {
            this.updateTransform()
        },
        traverse: function(t, e) {},
        attrKV: function(t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var i = this[t];
                    i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                }
            } else this[t] = e
        },
        hide: function() {
            this.ignore = !0, this.__zr && this.__zr.refresh()
        },
        show: function() {
            this.ignore = !1, this.__zr && this.__zr.refresh()
        },
        attr: function(t, e) {
            if ("string" == typeof t) this.attrKV(t, e);
            else if (s.isObject(t))
                for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
            return this.dirty(!1), this;
        },
        setClipPath: function(t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
        },
        removeClipPath: function() {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
        },
        addSelfToZr: function(t) {
            this.__zr = t;
            var e = this.animators;
            if (e)
                for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        },
        removeSelfFromZr: function(t) {
            this.__zr = null;
            var e = this.animators;
            if (e)
                for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    }, s.mixin(l, a), s.mixin(l, o), s.mixin(l, r);
    var h = l;
    t.exports = h
}, function(t, e) {
    function i() {
        return n++
    }
    var n = 2311;
    t.exports = i
}, function(t, e, i) {
    function n(t) {
        return t > s || t < -s
    }
    var r = i(64),
        o = i(12),
        a = r.identity,
        s = 5e-5,
        l = function(t) {
            t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
        },
        h = l.prototype;
    h.transform = null, h.needLocalTransform = function() {
        return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
    }, h.updateTransform = function() {
        var t = this.parent,
            e = t && t.transform,
            i = this.needLocalTransform(),
            n = this.transform;
        return i || e ? (n = n || r.create(), i ? this.getLocalTransform(n) : a(n), e && (i ? r.mul(n, t.transform, n) : r.copy(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || r.create(), void r.invert(this.invTransform, n)) : void(n && a(n))
    }, h.getLocalTransform = function(t) {
        return l.getLocalTransform(this, t)
    }, h.setTransform = function(t) {
        var e = this.transform,
            i = t.dpr || 1;
        e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
    }, h.restoreTransform = function(t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var u = [];
    h.decomposeTransform = function() {
        if (this.transform) {
            var t = this.parent,
                e = this.transform;
            t && t.transform && (r.mul(u, t.invTransform, e), e = u);
            var i = e[0] * e[0] + e[1] * e[1],
                o = e[2] * e[2] + e[3] * e[3],
                a = this.position,
                s = this.scale;
            n(i - 1) && (i = Math.sqrt(i)), n(o - 1) && (o = Math.sqrt(o)), e[0] < 0 && (i = -i), e[3] < 0 && (o = -o), a[0] = e[4], a[1] = e[5], s[0] = i, s[1] = o, this.rotation = Math.atan2(-e[1] / o, e[0] / i)
        }
    }, h.getGlobalScale = function() {
        var t = this.transform;
        if (!t) return [1, 1];
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
            i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
        return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [e, i]
    }, h.transformCoordToLocal = function(t, e) {
        var i = [t, e],
            n = this.invTransform;
        return n && o.applyTransform(i, i, n), i
    }, h.transformCoordToGlobal = function(t, e) {
        var i = [t, e],
            n = this.transform;
        return n && o.applyTransform(i, i, n), i
    }, l.getLocalTransform = function(t, e) {
        e = e || [], a(e);
        var i = t.origin,
            n = t.scale || [1, 1],
            o = t.rotation || 0,
            s = t.position || [0, 0];
        return i && (e[4] -= i[0], e[5] -= i[1]), r.scale(e, e, n), o && r.rotate(e, e, o), i && (e[4] += i[0], e[5] += i[1]), e[4] += s[0], e[5] += s[1], e
    };
    var c = l;
    t.exports = c
}, function(t, e, i) {
    function n(t, e) {
        return t[e]
    }

    function r(t, e, i) {
        t[e] = i
    }

    function o(t, e, i) {
        return (e - t) * i + t
    }

    function a(t, e, i) {
        return i > .5 ? e : t
    }

    function s(t, e, i, n, r) {
        var a = t.length;
        if (1 == r)
            for (var s = 0; s < a; s++) n[s] = o(t[s], e[s], i);
        else
            for (var l = a && t[0].length, s = 0; s < a; s++)
                for (var h = 0; h < l; h++) n[s][h] = o(t[s][h], e[s][h], i)
    }

    function l(t, e, i) {
        var n = t.length,
            r = e.length;
        if (n !== r) {
            var o = n > r;
            if (o) t.length = r;
            else
                for (var a = n; a < r; a++) t.push(1 === i ? e[a] : x.call(e[a]))
        }
        for (var s = t[0] && t[0].length, a = 0; a < t.length; a++)
            if (1 === i) isNaN(t[a]) && (t[a] = e[a]);
            else
                for (var l = 0; l < s; l++) isNaN(t[a][l]) && (t[a][l] = e[a][l])
    }

    function h(t, e, i) {
        if (t === e) return !0;
        var n = t.length;
        if (n !== e.length) return !1;
        if (1 === i) {
            for (var r = 0; r < n; r++)
                if (t[r] !== e[r]) return !1
        } else
            for (var o = t[0].length, r = 0; r < n; r++)
                for (var a = 0; a < o; a++)
                    if (t[r][a] !== e[r][a]) return !1;
        return !0
    }

    function u(t, e, i, n, r, o, a, s, l) {
        var h = t.length;
        if (1 == l)
            for (var u = 0; u < h; u++) s[u] = c(t[u], e[u], i[u], n[u], r, o, a);
        else
            for (var f = t[0].length, u = 0; u < h; u++)
                for (var p = 0; p < f; p++) s[u][p] = c(t[u][p], e[u][p], i[u][p], n[u][p], r, o, a)
    }

    function c(t, e, i, n, r, o, a) {
        var s = .5 * (i - t),
            l = .5 * (n - e);
        return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e
    }

    function f(t) {
        if (y(t)) {
            var e = t.length;
            if (y(t[0])) {
                for (var i = [], n = 0; n < e; n++) i.push(x.call(t[n]));
                return i
            }
            return x.call(t)
        }
        return t
    }

    function p(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function d(t) {
        var e = t[t.length - 1].value;
        return y(e && e[0]) ? 2 : 1
    }

    function m(t, e, i, n, r, f) {
        var m = t._getter,
            _ = t._setter,
            x = "spline" === e,
            w = n.length;
        if (w) {
            var b, T = n[0].value,
                S = y(T),
                P = !1,
                k = !1,
                C = S ? d(n) : 0;
            n.sort(function(t, e) {
                return t.time - e.time
            }), b = n[w - 1].time;
            for (var A = [], M = [], O = n[0].value, E = !0, D = 0; D < w; D++) {
                A.push(n[D].time / b);
                var I = n[D].value;
                if (S && h(I, O, C) || !S && I === O || (E = !1), O = I, "string" == typeof I) {
                    var L = g.parse(I);
                    L ? (I = L, P = !0) : k = !0
                }
                M.push(I)
            }
            if (f || !E) {
                for (var R = M[w - 1], D = 0; D < w - 1; D++) S ? l(M[D], R, C) : !isNaN(M[D]) || isNaN(R) || k || P || (M[D] = R);
                S && l(m(t._target, r), R, C);
                var z, F, B, N, j, X, $ = 0,
                    V = 0;
                if (P) var H = [0, 0, 0, 0];
                var U = function(t, e) {
                        var i;
                        if (e < 0) i = 0;
                        else if (e < V) {
                            for (z = Math.min($ + 1, w - 1), i = z; i >= 0 && !(A[i] <= e); i--);
                            i = Math.min(i, w - 2)
                        } else {
                            for (i = $; i < w && !(A[i] > e); i++);
                            i = Math.min(i - 1, w - 2)
                        }
                        $ = i, V = e;
                        var n = A[i + 1] - A[i];
                        if (0 !== n)
                            if (F = (e - A[i]) / n, x)
                                if (N = M[i], B = M[0 === i ? i : i - 1], j = M[i > w - 2 ? w - 1 : i + 1], X = M[i > w - 3 ? w - 1 : i + 2], S) u(B, N, j, X, F, F * F, F * F * F, m(t, r), C);
                                else {
                                    var l;
                                    if (P) l = u(B, N, j, X, F, F * F, F * F * F, H, 1), l = p(H);
                                    else {
                                        if (k) return a(N, j, F);
                                        l = c(B, N, j, X, F, F * F, F * F * F)
                                    }
                                    _(t, r, l)
                                }
                            else if (S) s(M[i], M[i + 1], F, m(t, r), C);
                            else {
                                var l;
                                if (P) s(M[i], M[i + 1], F, H, 1), l = p(H);
                                else {
                                    if (k) return a(M[i], M[i + 1], F);
                                    l = o(M[i], M[i + 1], F)
                                }
                                _(t, r, l)
                            }
                    },
                    Y = new v({
                        target: t._target,
                        life: b,
                        loop: t._loop,
                        delay: t._delay,
                        onframe: U,
                        ondestroy: i
                    });
                return e && "spline" !== e && (Y.easing = e), Y
            }
        }
    }
    var v = i(287),
        g = i(79),
        _ = i(3),
        y = _.isArrayLike,
        x = Array.prototype.slice,
        w = function(t, e, i, o) {
            this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || n, this._setter = o || r, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
        };
    w.prototype = {
        when: function(t, e) {
            var i = this._tracks;
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    if (!i[n]) {
                        i[n] = [];
                        var r = this._getter(this._target, n);
                        if (null == r) continue;
                        0 !== t && i[n].push({
                            time: 0,
                            value: f(r)
                        })
                    }
                    i[n].push({
                        time: t,
                        value: e[n]
                    })
                }
            return this
        },
        during: function(t) {
            return this._onframeList.push(t), this
        },
        pause: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0
        },
        resume: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1
        },
        isPaused: function() {
            return !!this._paused
        },
        _doneCallback: function() {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, i = 0; i < e; i++) t[i].call(this)
        },
        start: function(t, e) {
            var i, n = this,
                r = 0,
                o = function() {
                    r--, r || n._doneCallback()
                };
            for (var a in this._tracks)
                if (this._tracks.hasOwnProperty(a)) {
                    var s = m(this, t, o, this._tracks[a], a, e);
                    s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), i = s)
                }
            if (i) {
                var l = i.onframe;
                i.onframe = function(t, e) {
                    l(t, e);
                    for (var i = 0; i < n._onframeList.length; i++) n._onframeList[i](t, e)
                }
            }
            return r || this._doneCallback(), this
        },
        stop: function(t) {
            for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                var r = e[n];
                t && r.onframe(this._target, 1), i && i.removeClip(r)
            }
            e.length = 0
        },
        delay: function(t) {
            return this._delay = t, this
        },
        done: function(t) {
            return t && this._doneList.push(t), this
        },
        getClips: function() {
            return this._clipList
        }
    };
    var b = w;
    t.exports = b
}, function(t, e, i) {
    var n = i(80),
        r = n.debugMode,
        o = function() {};
    1 === r ? o = function() {
        for (var t in arguments) throw new Error(arguments[t])
    } : r > 1 && (o = function() {
        for (var t in arguments) console.log(arguments[t])
    });
    var a = o;
    t.exports = a
}, function(t, e, i) {
    function n(t) {
        return r(t), S(t.rich, r), t
    }

    function r(t) {
        if (t) {
            t.font = A.makeFont(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || E[e] ? e : "left";
            var i = t.textVerticalAlign || t.textBaseline;
            "center" === i && (i = "middle"), t.textVerticalAlign = null == i || D[i] ? i : "top";
            var n = t.textPadding;
            n && (t.textPadding = P(t.textPadding))
        }
    }

    function o(t, e, i, n, r) {
        n.rich ? s(t, e, i, n, r) : a(t, e, i, n, r)
    }

    function a(t, e, i, n, r) {
        var o = m(e, "font", n.font || A.DEFAULT_FONT),
            a = n.textPadding,
            s = t.__textCotentBlock;
        s && !t.__dirty || (s = t.__textCotentBlock = A.parsePlainText(i, o, a, n.truncate));
        var l = s.outerHeight,
            u = s.lines,
            p = s.lineHeight,
            _ = d(l, n, r),
            x = _.baseX,
            w = _.baseY,
            b = _.textAlign,
            T = _.textVerticalAlign;
        h(e, n, r, x, w);
        var S = A.adjustTextY(w, l, T),
            P = x,
            k = S,
            C = c(n);
        if (C || a) {
            var M = A.getWidth(i, o),
                O = M;
            a && (O += a[1] + a[3]);
            var E = A.adjustTextX(x, O, b);
            C && f(t, e, n, E, S, O, l), a && (P = y(x, b, a), k += a[0])
        }
        m(e, "textAlign", b || "left"), m(e, "textBaseline", "middle"), m(e, "shadowBlur", n.textShadowBlur || 0), m(e, "shadowColor", n.textShadowColor || "transparent"), m(e, "shadowOffsetX", n.textShadowOffsetX || 0), m(e, "shadowOffsetY", n.textShadowOffsetY || 0), k += p / 2;
        var D = n.textStrokeWidth,
            I = v(n.textStroke, D),
            L = g(n.textFill);
        I && (m(e, "lineWidth", D), m(e, "strokeStyle", I)), L && m(e, "fillStyle", L);
        for (var R = 0; R < u.length; R++) I && e.strokeText(u[R], P, k), L && e.fillText(u[R], P, k), k += p
    }

    function s(t, e, i, n, r) {
        var o = t.__textCotentBlock;
        o && !t.__dirty || (o = t.__textCotentBlock = A.parseRichText(i, n)), l(t, e, o, n, r)
    }

    function l(t, e, i, n, r) {
        var o = i.width,
            a = i.outerWidth,
            s = i.outerHeight,
            l = n.textPadding,
            p = d(s, n, r),
            m = p.baseX,
            v = p.baseY,
            g = p.textAlign,
            _ = p.textVerticalAlign;
        h(e, n, r, m, v);
        var y = A.adjustTextX(m, a, g),
            x = A.adjustTextY(v, s, _),
            w = y,
            b = x;
        l && (w += l[3], b += l[0]);
        var T = w + o;
        c(n) && f(t, e, n, y, x, a, s);
        for (var S = 0; S < i.lines.length; S++) {
            for (var P, k = i.lines[S], C = k.tokens, M = C.length, O = k.lineHeight, E = k.width, D = 0, I = w, L = T, R = M - 1; D < M && (P = C[D], !P.textAlign || "left" === P.textAlign);) u(t, e, P, n, O, b, I, "left"), E -= P.width, I += P.width, D++;
            for (; R >= 0 && (P = C[R], "right" === P.textAlign);) u(t, e, P, n, O, b, L, "right"), E -= P.width, L -= P.width, R--;
            for (I += (o - (I - w) - (T - L) - E) / 2; D <= R;) P = C[D], u(t, e, P, n, O, b, I + P.width / 2, "center"), I += P.width, D++;
            b += O
        }
    }

    function h(t, e, i, n, r) {
        if (i && e.textRotation) {
            var o = e.textOrigin;
            "center" === o ? (n = i.width / 2 + i.x, r = i.height / 2 + i.y) : o && (n = o[0] + i.x, r = o[1] + i.y), t.translate(n, r), t.rotate(-e.textRotation), t.translate(-n, -r)
        }
    }

    function u(t, e, i, n, r, o, a, s) {
        var l = n.rich[i.styleName] || {},
            h = i.textVerticalAlign,
            u = o + r / 2;
        "top" === h ? u = o + i.height / 2 : "bottom" === h && (u = o + r - i.height / 2), !i.isLineHolder && c(l) && f(t, e, l, "right" === s ? a - i.width : "center" === s ? a - i.width / 2 : a, u - i.height / 2, i.width, i.height);
        var p = i.textPadding;
        p && (a = y(a, s, p), u -= i.height / 2 - p[2] - i.textHeight / 2), m(e, "shadowBlur", T(l.textShadowBlur, n.textShadowBlur, 0)), m(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), m(e, "shadowOffsetX", T(l.textShadowOffsetX, n.textShadowOffsetX, 0)), m(e, "shadowOffsetY", T(l.textShadowOffsetY, n.textShadowOffsetY, 0)), m(e, "textAlign", s), m(e, "textBaseline", "middle"), m(e, "font", i.font || A.DEFAULT_FONT);
        var d = v(l.textStroke || n.textStroke, x),
            _ = g(l.textFill || n.textFill),
            x = b(l.textStrokeWidth, n.textStrokeWidth);
        d && (m(e, "lineWidth", x), m(e, "strokeStyle", d), e.strokeText(i.text, a, u)), _ && (m(e, "fillStyle", _), e.fillText(i.text, a, u))
    }

    function c(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
    }

    function f(t, e, i, n, r, o, a) {
        var s = i.textBackgroundColor,
            l = i.textBorderWidth,
            h = i.textBorderColor,
            u = k(s);
        if (m(e, "shadowBlur", i.textBoxShadowBlur || 0), m(e, "shadowColor", i.textBoxShadowColor || "transparent"), m(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), m(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), u || l && h) {
            e.beginPath();
            var c = i.textBorderRadius;
            c ? M.buildPath(e, {
                x: n,
                y: r,
                width: o,
                height: a,
                r: c
            }) : e.rect(n, r, o, a), e.closePath()
        }
        if (u) m(e, "fillStyle", s), e.fill();
        else if (C(s)) {
            var f = s.image;
            f = O.createOrUpdateImage(f, null, t, p, s), f && O.isImageReady(f) && e.drawImage(f, n, r, o, a)
        }
        l && h && (m(e, "lineWidth", l), m(e, "strokeStyle", h), e.stroke())
    }

    function p(t, e) {
        e.image = t
    }

    function d(t, e, i) {
        var n = e.x || 0,
            r = e.y || 0,
            o = e.textAlign,
            a = e.textVerticalAlign;
        if (i) {
            var s = e.textPosition;
            if (s instanceof Array) n = i.x + _(s[0], i.width), r = i.y + _(s[1], i.height);
            else {
                var l = A.adjustTextPositionOnRect(s, i, e.textDistance);
                n = l.x, r = l.y, o = o || l.textAlign, a = a || l.textVerticalAlign
            }
            var h = e.textOffset;
            h && (n += h[0], r += h[1])
        }
        return {
            baseX: n,
            baseY: r,
            textAlign: o,
            textVerticalAlign: a
        }
    }

    function m(t, e, i) {
        return t[e] = i, t[e]
    }

    function v(t, e) {
        return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function g(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function _(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function y(t, e, i) {
        return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3]
    }

    function x(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }
    var w = i(3),
        b = w.retrieve2,
        T = w.retrieve3,
        S = w.each,
        P = w.normalizeCssArray,
        k = w.isString,
        C = w.isObject,
        A = i(63),
        M = i(177),
        O = i(117),
        E = {
            left: 1,
            right: 1,
            center: 1
        },
        D = {
            top: 1,
            bottom: 1,
            middle: 1
        };
    e.normalizeTextStyle = n, e.renderText = o, e.getStroke = v, e.getFill = g, e.needDrawText = x
}, function(t, e) {
    function i(t, e) {
        var i, n, r, o, a = e.x,
            s = e.y,
            l = e.width,
            h = e.height,
            u = e.r;
        l < 0 && (a += l, l = -l), h < 0 && (s += h, h = -h), "number" == typeof u ? i = n = r = o = u : u instanceof Array ? 1 === u.length ? i = n = r = o = u[0] : 2 === u.length ? (i = r = u[0], n = o = u[1]) : 3 === u.length ? (i = u[0], n = o = u[1], r = u[2]) : (i = u[0], n = u[1], r = u[2], o = u[3]) : i = n = r = o = 0;
        var c;
        i + n > l && (c = i + n, i *= l / c, n *= l / c), r + o > l && (c = r + o, r *= l / c, o *= l / c), n + r > h && (c = n + r, n *= h / c, r *= h / c), i + o > h && (c = i + o, i *= h / c, o *= h / c), t.moveTo(a + i, s), t.lineTo(a + l - n, s), 0 !== n && t.quadraticCurveTo(a + l, s, a + l, s + n), t.lineTo(a + l, s + h - r), 0 !== r && t.quadraticCurveTo(a + l, s + h, a + l - r, s + h), t.lineTo(a + o, s + h), 0 !== o && t.quadraticCurveTo(a, s + h, a, s + h - o), t.lineTo(a, s + i), 0 !== i && t.quadraticCurveTo(a, s, a + i, s)
    }
    e.buildPath = i
}, function(t, e) {
    function i(t) {
        return t %= n, t < 0 && (t += n), t
    }
    var n = 2 * Math.PI;
    e.normalizeRadian = i
}, function(t, e) {
    var i = function(t, e) {
        this.image = t, this.repeat = e, this.type = "pattern"
    };
    i.prototype.getCanvasPattern = function(t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    };
    var n = i;
    t.exports = n
}, function(t, e, i) {
    function n(t) {
        r.call(this, t)
    }
    var r = i(119),
        o = i(25),
        a = i(3),
        s = i(117);
    n.prototype = {
        constructor: n,
        type: "image",
        brush: function(t, e) {
            var i = this.style,
                n = i.image;
            i.bind(t, this, e);
            var r = this._image = s.createOrUpdateImage(n, this._image, this, this.onload);
            if (r && s.isImageReady(r)) {
                var o = i.x || 0,
                    a = i.y || 0,
                    l = i.width,
                    h = i.height,
                    u = r.width / r.height;
                if (null == l && null != h ? l = h * u : null == h && null != l ? h = l / u : null == l && null == h && (l = r.width, h = r.height), this.setTransform(t), i.sWidth && i.sHeight) {
                    var c = i.sx || 0,
                        f = i.sy || 0;
                    t.drawImage(r, c, f, i.sWidth, i.sHeight, o, a, l, h)
                } else if (i.sx && i.sy) {
                    var c = i.sx,
                        f = i.sy,
                        p = l - c,
                        d = h - f;
                    t.drawImage(r, c, f, p, d, o, a, l, h)
                } else t.drawImage(r, o, a, l, h);
                this.restoreTransform(t), null != i.text && this.drawRectText(t, this.getBoundingRect())
            }
        },
        getBoundingRect: function() {
            var t = this.style;
            return this._rect || (this._rect = new o(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
        }
    }, a.inherits(n, r);
    var l = n;
    t.exports = l
}, function(t, e, i) {
    function n(t, e, i) {
        var n = e.points,
            a = e.smooth;
        if (n && n.length >= 2) {
            if (a && "spline" !== a) {
                var s = o(n, a, i, e.smoothConstraint);
                t.moveTo(n[0][0], n[0][1]);
                for (var l = n.length, h = 0; h < (i ? l : l - 1); h++) {
                    var u = s[2 * h],
                        c = s[2 * h + 1],
                        f = n[(h + 1) % l];
                    t.bezierCurveTo(u[0], u[1], c[0], c[1], f[0], f[1])
                }
            } else {
                "spline" === a && (n = r(n, i)), t.moveTo(n[0][0], n[0][1]);
                for (var h = 1, p = n.length; h < p; h++) t.lineTo(n[h][0], n[h][1])
            }
            i && t.closePath()
        }
    }
    var r = i(304),
        o = i(305);
    e.buildPath = n
}, function(t, e, i) {
    "use strict";

    function n(t, e, i, n, r) {
        var o = 0,
            a = 0;
        null == n && (n = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function(l, h) {
            var u, c, f = l.position,
                p = l.getBoundingRect(),
                d = e.childAt(h + 1),
                m = d && d.getBoundingRect();
            if ("horizontal" === t) {
                var v = p.width + (m ? -m.x + p.x : 0);
                u = o + v, u > n || l.newline ? (o = 0, u = v, a += s + i, s = p.height) : s = Math.max(s, p.height)
            } else {
                var g = p.height + (m ? -m.y + p.y : 0);
                c = a + g, c > r || l.newline ? (o += s + i, a = 0, c = g, s = p.width) : s = Math.max(s, p.width)
            }
            l.newline || (f[0] = o, f[1] = a, "horizontal" === t ? o = u + i : a = c + i)
        })
    }
    var r = i(3),
        o = i(25),
        a = i(15),
        s = i(32),
        l = a.parsePercent,
        h = r.each,
        u = {},
        c = u.LOCATION_PARAMS = ["left", "right", "top", "bottom", "width", "height"],
        f = u.HV_NAMES = [
            ["width", "left", "right"],
            ["height", "top", "bottom"]
        ];
    u.box = n, u.vbox = r.curry(n, "vertical"), u.hbox = r.curry(n, "horizontal"), u.getAvailableSize = function(t, e, i) {
        var n = e.width,
            r = e.height,
            o = l(t.x, n),
            a = l(t.y, r),
            h = l(t.x2, n),
            u = l(t.y2, r);
        return (isNaN(o) || isNaN(parseFloat(t.x))) && (o = 0), (isNaN(h) || isNaN(parseFloat(t.x2))) && (h = n), (isNaN(a) || isNaN(parseFloat(t.y))) && (a = 0), (isNaN(u) || isNaN(parseFloat(t.y2))) && (u = r), i = s.normalizeCssArray(i || 0), {
            width: Math.max(h - o - i[1] - i[3], 0),
            height: Math.max(u - a - i[0] - i[2], 0)
        }
    }, u.getLayoutRect = function(t, e, i) {
        i = s.normalizeCssArray(i || 0);
        var n = e.width,
            r = e.height,
            a = l(t.left, n),
            h = l(t.top, r),
            u = l(t.right, n),
            c = l(t.bottom, r),
            f = l(t.width, n),
            p = l(t.height, r),
            d = i[2] + i[0],
            m = i[1] + i[3],
            v = t.aspect;
        switch (isNaN(f) && (f = n - u - m - a), isNaN(p) && (p = r - c - d - h), null != v && (isNaN(f) && isNaN(p) && (v > n / r ? f = .8 * n : p = .8 * r), isNaN(f) && (f = v * p), isNaN(p) && (p = f / v)), isNaN(a) && (a = n - u - f - m), isNaN(h) && (h = r - c - p - d), t.left || t.right) {
            case "center":
                a = n / 2 - f / 2 - i[3];
                break;
            case "right":
                a = n - f - m
        }
        switch (t.top || t.bottom) {
            case "middle":
            case "center":
                h = r / 2 - p / 2 - i[0];
                break;
            case "bottom":
                h = r - p - d
        }
        a = a || 0, h = h || 0, isNaN(f) && (f = n - m - a - (u || 0)), isNaN(p) && (p = r - d - h - (c || 0));
        var g = new o(a + i[3], h + i[0], f, p);
        return g.margin = i, g
    }, u.positionElement = function(t, e, i, n, a) {
        var s = !a || !a.hv || a.hv[0],
            l = !a || !a.hv || a.hv[1],
            h = a && a.boundingMode || "all";
        if (s || l) {
            var c;
            if ("raw" === h) c = "group" === t.type ? new o(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();
            else if (c = t.getBoundingRect(), t.needLocalTransform()) {
                var f = t.getLocalTransform();
                c = c.clone(), c.applyTransform(f)
            }
            e = u.getLayoutRect(r.defaults({
                width: c.width,
                height: c.height
            }, e), i, n);
            var p = t.position,
                d = s ? e.x - c.x : 0,
                m = l ? e.y - c.y : 0;
            t.attr("position", "raw" === h ? [d, m] : [p[0] + d, p[1] + m])
        }
    }, u.sizeCalculable = function(t, e) {
        return null != t[f[e][0]] || null != t[f[e][1]] && null != t[f[e][2]]
    }, u.mergeLayoutParam = function(t, e, i) {
        function n(i, n) {
            var r = {},
                s = 0,
                u = {},
                c = 0,
                f = 2;
            if (h(i, function(e) {
                    u[e] = t[e]
                }), h(i, function(t) {
                    o(e, t) && (r[t] = u[t] = e[t]), a(r, t) && s++, a(u, t) && c++
                }), l[n]) return a(e, i[1]) ? u[i[2]] = null : a(e, i[2]) && (u[i[1]] = null), u;
            if (c !== f && s) {
                if (s >= f) return r;
                for (var p = 0; p < i.length; p++) {
                    var d = i[p];
                    if (!o(r, d) && o(t, d)) {
                        r[d] = t[d];
                        break
                    }
                }
                return r
            }
            return u
        }

        function o(t, e) {
            return t.hasOwnProperty(e)
        }

        function a(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function s(t, e, i) {
            h(t, function(t) {
                e[t] = i[t]
            })
        }!r.isObject(i) && (i = {});
        var l = i.ignoreSize;
        !r.isArray(l) && (l = [l, l]);
        var u = n(f[0], 0),
            c = n(f[1], 1);
        s(f[0], t, u), s(f[1], t, c)
    }, u.getLayoutParams = function(t) {
        return u.copyLayoutParams({}, t)
    }, u.copyLayoutParams = function(t, e) {
        return e && t && h(c, function(i) {
            e.hasOwnProperty(i) && (t[i] = e[i])
        }), t
    }, t.exports = u
}, function(t, e, i) {
    var n = i(34),
        r = n.set,
        o = n.get;
    t.exports = {
        clearColorPalette: function() {
            r(this, "colorIdx", 0), r(this, "colorNameMap", {})
        },
        getColorFromPalette: function(t, e) {
            e = e || this;
            var i = o(e, "colorIdx") || 0,
                n = o(e, "colorNameMap") || r(e, "colorNameMap", {});
            if (n.hasOwnProperty(t)) return n[t];
            var a = this.get("color", !0) || [];
            if (a.length) {
                var s = a[i];
                return t && (n[t] = s), r(e, "colorIdx", (i + 1) % a.length), s
            }
        }
    }
}, function(t, e, i) {
    "use strict";
    var n = i(3),
        r = i(32),
        o = i(34),
        a = i(24),
        s = i(83),
        l = i(183),
        h = i(31),
        u = i(182),
        c = o.set,
        f = o.get,
        p = r.encodeHTML,
        d = r.addCommas,
        m = s.extend({
            type: "series.__base__",
            seriesIndex: 0,
            coordinateSystem: null,
            defaultOption: null,
            legendDataProvider: null,
            visualColorAccessPath: "itemStyle.normal.color",
            layoutMode: null,
            init: function(t, e, i, r) {
                this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, i);
                var o = this.getInitialData(t, i);
                __DEV__ && n.assert(o, "getInitialData returned invalid data."), c(this, "dataBeforeProcessed", o), this.restoreData()
            },
            mergeDefaultAndTheme: function(t, e) {
                var i = this.layoutMode,
                    r = i ? u.getLayoutParams(t) : {},
                    o = this.subType;
                s.hasClass(o) && (o += "Series"), n.merge(t, e.getTheme().get(this.subType)), n.merge(t, this.getDefaultOption()), a.defaultEmphasis(t.label, ["show"]), this.fillDataTextStyle(t.data), i && u.mergeLayoutParam(t, r, i)
            },
            mergeOption: function(t, e) {
                t = n.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                var i = this.layoutMode;
                i && u.mergeLayoutParam(this.option, t, i);
                var r = this.getInitialData(t, e);
                r && (c(this, "data", r), c(this, "dataBeforeProcessed", r.cloneShallow()))
            },
            fillDataTextStyle: function(t) {
                if (t)
                    for (var e = ["show"], i = 0; i < t.length; i++) t[i] && t[i].label && a.defaultEmphasis(t[i].label, e)
            },
            getInitialData: function() {},
            getData: function(t) {
                var e = f(this, "data");
                return null == t ? e : e.getLinkedData(t)
            },
            setData: function(t) {
                c(this, "data", t)
            },
            getRawData: function() {
                return f(this, "dataBeforeProcessed")
            },
            coordDimToDataDim: function(t) {
                return a.coordDimToDataDim(this.getData(), t)
            },
            dataDimToCoordDim: function(t) {
                return a.dataDimToCoordDim(this.getData(), t)
            },
            getBaseAxis: function() {
                var t = this.coordinateSystem;
                return t && t.getBaseAxis && t.getBaseAxis()
            },
            formatTooltip: function(t, e, i) {
                function o(i) {
                    function o(t, i) {
                        var n = s.getDimensionInfo(i);
                        if (n && n.otherDims.tooltip !== !1) {
                            var o = n.type,
                                a = (l ? "- " + (n.tooltipName || n.name) + ": " : "") + ("ordinal" === o ? t + "" : "time" === o ? e ? "" : r.formatTime("yyyy/MM/dd hh:mm:ss", t) : d(t));
                            a && h.push(p(a))
                        }
                    }
                    var l = n.reduce(i, function(t, e, i) {
                            var n = s.getDimensionInfo(i);
                            return t |= n && n.tooltip !== !1 && null != n.tooltipName
                        }, 0),
                        h = [],
                        u = a.otherDimToDataDim(s, "tooltip");
                    return u.length ? n.each(u, function(e) {
                        o(s.get(e, t), e)
                    }) : n.each(i, o), (l ? "<br/>" : "") + h.join(l ? "<br/>" : ", ")
                }
                var s = f(this, "data"),
                    l = this.getRawValue(t),
                    h = n.isArray(l) ? o(l) : p(d(l)),
                    u = s.getName(t),
                    c = s.getItemVisual(t, "color");
                n.isObject(c) && c.colorStops && (c = (c.colorStops[0] || {}).color), c = c || "transparent";
                var m = r.getTooltipMarker(c),
                    v = this.name;
                return "\0-" === v && (v = ""), v = v ? p(v) + (e ? ": " : "<br/>") : "", e ? m + v + h : v + m + (u ? p(u) + ": " + h : h)
            },
            isAnimationEnabled: function() {
                if (h.node) return !1;
                var t = this.getShallow("animation");
                return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
            },
            restoreData: function() {
                c(this, "data", f(this, "dataBeforeProcessed").cloneShallow())
            },
            getColorFromPalette: function(t, e) {
                var i = this.ecModel,
                    n = l.getColorFromPalette.call(this, t, e);
                return n || (n = i.getColorFromPalette(t, e)), n
            },
            getAxisTooltipData: null,
            getTooltipPosition: null
        });
    n.mixin(m, a.dataFormatMixin), n.mixin(m, l), t.exports = m
}, function(t, e) {
    var i = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
        setTimeout(t, 16)
    };
    t.exports = i
}, function(t, e, i) {
    function n(t, e) {
        var i = t[1] - t[0],
            n = e,
            r = i / n / 2;
        t[0] += r, t[1] -= r
    }
    var r = i(15),
        o = r.linearMap,
        a = i(3),
        s = i(84),
        l = [0, 1],
        h = function(t, e, i) {
            this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1, this._labelInterval
        };
    h.prototype = {
        constructor: h,
        contain: function(t) {
            var e = this._extent,
                i = Math.min(e[0], e[1]),
                n = Math.max(e[0], e[1]);
            return t >= i && t <= n
        },
        containData: function(t) {
            return this.contain(this.dataToCoord(t))
        },
        getExtent: function() {
            return this._extent.slice()
        },
        getPixelPrecision: function(t) {
            return r.getPixelPrecision(t || this.scale.getExtent(), this._extent)
        },
        setExtent: function(t, e) {
            var i = this._extent;
            i[0] = t, i[1] = e
        },
        dataToCoord: function(t, e) {
            var i = this._extent,
                r = this.scale;
            return t = r.normalize(t), this.onBand && "ordinal" === r.type && (i = i.slice(), n(i, r.count())), o(t, l, i, e)
        },
        coordToData: function(t, e) {
            var i = this._extent,
                r = this.scale;
            this.onBand && "ordinal" === r.type && (i = i.slice(), n(i, r.count()));
            var a = o(t, i, l, e);
            return this.scale.scale(a)
        },
        pointToData: function(t, e) {},
        getTicksCoords: function(t) {
            if (this.onBand && !t) {
                for (var e = this.getBands(), i = [], n = 0; n < e.length; n++) i.push(e[n][0]);
                return e[n - 1] && i.push(e[n - 1][1]), i
            }
            return a.map(this.scale.getTicks(), this.dataToCoord, this)
        },
        getLabelsCoords: function() {
            return a.map(this.scale.getTicks(), this.dataToCoord, this)
        },
        getBands: function() {
            for (var t = this.getExtent(), e = [], i = this.scale.count(), n = t[0], r = t[1], o = r - n, a = 0; a < i; a++) e.push([o * a / i + n, o * (a + 1) / i + n]);
            return e
        },
        getBandWidth: function() {
            var t = this._extent,
                e = this.scale.getExtent(),
                i = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === i && (i = 1);
            var n = Math.abs(t[1] - t[0]);
            return Math.abs(n) / i
        },
        getLabelInterval: function() {
            var t = this._labelInterval;
            if (!t) {
                var e = this.model,
                    i = e.getModel("axisLabel"),
                    n = i.get("interval");
                "category" !== this.type || "auto" !== n ? t = "auto" === n ? 0 : n : this.isHorizontal && (t = s.getAxisLabelInterval(a.map(this.scale.getTicks(), this.dataToCoord, this), e.getFormattedLabels(), i.getFont(), this.isHorizontal())), this._labelInterval = t
            }
            return t
        }
    }, t.exports = h
}, function(t, e, i) {
    function n(t, e, i) {
        t[e] = Math.max(Math.min(t[e], i[1]), i[0])
    }
    var r = i(15),
        o = r.round,
        a = {};
    a.intervalScaleNiceTicks = function(t, e, i, n) {
        var s = {},
            l = t[1] - t[0],
            h = s.interval = r.nice(l / e, !0);
        null != i && h < i && (h = s.interval = i), null != n && h > n && (h = s.interval = n);
        var u = s.intervalPrecision = a.getIntervalPrecision(h),
            c = s.niceTickExtent = [o(Math.ceil(t[0] / h) * h, u), o(Math.floor(t[1] / h) * h, u)];
        return a.fixExtent(c, t), s
    }, a.getIntervalPrecision = function(t) {
        return r.getPrecisionSafe(t) + 2
    }, a.fixExtent = function(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), n(t, 0, e), n(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }, a.intervalScaleGetTicks = function(t, e, i, n) {
        var r = [];
        if (!t) return r;
        var a = 1e4;
        e[0] < i[0] && r.push(e[0]);
        for (var s = i[0]; s <= i[1] && (r.push(s), s = o(s + t, n), s !== r[r.length - 1]);)
            if (r.length > a) return [];
        return e[1] > (r.length ? r[r.length - 1] : i[1]) && r.push(e[1]), r
    }, t.exports = a
}, function(t, e, i) {
    "use strict";
    var n = i(35),
        r = i(25),
        o = n.extendShape({
            type: "triangle",
            shape: {
                cx: 0,
                cy: 0,
                width: 0,
                height: 0
            },
            buildPath: function(t, e) {
                var i = e.cx,
                    n = e.cy,
                    r = e.width / 2,
                    o = e.height / 2;
                t.moveTo(i, n - o), t.lineTo(i + r, n + o), t.lineTo(i - r, n + o), t.closePath()
            }
        }),
        a = n.extendShape({
            type: "diamond",
            shape: {
                cx: 0,
                cy: 0,
                width: 0,
                height: 0
            },
            buildPath: function(t, e) {
                var i = e.cx,
                    n = e.cy,
                    r = e.width / 2,
                    o = e.height / 2;
                t.moveTo(i, n - o), t.lineTo(i + r, n), t.lineTo(i, n + o), t.lineTo(i - r, n), t.closePath()
            }
        }),
        s = n.extendShape({
            type: "pin",
            shape: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function(t, e) {
                var i = e.x,
                    n = e.y,
                    r = e.width / 5 * 3,
                    o = Math.max(r, e.height),
                    a = r / 2,
                    s = a * a / (o - a),
                    l = n - o + a + s,
                    h = Math.asin(s / a),
                    u = Math.cos(h) * a,
                    c = Math.sin(h),
                    f = Math.cos(h);
                t.arc(i, l, a, Math.PI - h, 2 * Math.PI + h);
                var p = .6 * a,
                    d = .7 * a;
                t.bezierCurveTo(i + u - c * p, l + s + f * p, i, n - d, i, n), t.bezierCurveTo(i, n - d, i - u + c * p, l + s + f * p, i - u, l + s), t.closePath()
            }
        }),
        l = n.extendShape({
            type: "arrow",
            shape: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function(t, e) {
                var i = e.height,
                    n = e.width,
                    r = e.x,
                    o = e.y,
                    a = n / 3 * 2;
                t.moveTo(r, o), t.lineTo(r + a, o + i), t.lineTo(r, o + i / 4 * 3), t.lineTo(r - a, o + i), t.lineTo(r, o), t.closePath()
            }
        }),
        h = {
            line: n.Line,
            rect: n.Rect,
            roundRect: n.Rect,
            square: n.Rect,
            circle: n.Circle,
            diamond: a,
            pin: s,
            arrow: l,
            triangle: o
        },
        u = {
            line: function(t, e, i, n, r) {
                r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
            },
            rect: function(t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r.height = n
            },
            roundRect: function(t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4
            },
            square: function(t, e, i, n, r) {
                var o = Math.min(i, n);
                r.x = t, r.y = e, r.width = o, r.height = o
            },
            circle: function(t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
            },
            diamond: function(t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
            },
            pin: function(t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
            },
            arrow: function(t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
            },
            triangle: function(t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
            }
        },
        c = {};
    for (var f in h) h.hasOwnProperty(f) && (c[f] = new h[f]);
    var p = n.extendShape({
            type: "symbol",
            shape: {
                symbolType: "",
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            beforeBrush: function() {
                var t = this.style,
                    e = this.shape;
                "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
            },
            buildPath: function(t, e, i) {
                var n = e.symbolType,
                    r = c[n];
                "none" !== e.symbolType && (r || (n = "rect", r = c[n]), u[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i))
            }
        }),
        d = function(t) {
            if ("image" !== this.type) {
                var e = this.style,
                    i = this.shape;
                i && "line" === i.symbolType ? e.stroke = t : this.__isEmptyBrush ? (e.stroke = t, e.fill = "#fff") : (e.fill && (e.fill = t), e.stroke && (e.stroke = t)), this.dirty(!1)
            }
        },
        m = {
            createSymbol: function(t, e, i, o, a, s) {
                var l = 0 === t.indexOf("empty");
                l && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
                var h;
                return h = 0 === t.indexOf("image://") ? new n.Image({
                    style: {
                        image: t.slice(8),
                        x: e,
                        y: i,
                        width: o,
                        height: a
                    }
                }) : 0 === t.indexOf("path://") ? n.makePath(t.slice(7), {}, new r(e, i, o, a)) : new p({
                    shape: {
                        symbolType: t,
                        x: e,
                        y: i,
                        width: o,
                        height: a
                    }
                }), h.__isEmptyBrush = l, h.setColor = d, h.setColor(s), h
            }
        };
    t.exports = m
}, function(t, e, i) {
    function n(t) {
        return r.isObject(t) && null != t.value ? t.value : t + ""
    }
    var r = i(3),
        o = i(84);
    t.exports = {
        getFormattedLabels: function() {
            return o.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
        },
        getCategories: function() {
            return "category" === this.get("type") && r.map(this.get("data"), n)
        },
        getMin: function(t) {
            var e = this.option,
                i = t || null == e.rangeStart ? e.min : e.rangeStart;
            return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !r.eqNaN(i) && (i = this.axis.scale.parse(i)), i
        },
        getMax: function(t) {
            var e = this.option,
                i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !r.eqNaN(i) && (i = this.axis.scale.parse(i)), i
        },
        getNeedCrossZero: function() {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale
        },
        getCoordSysModel: r.noop,
        setRange: function(t, e) {
            this.option.rangeStart = t, this.option.rangeEnd = e
        },
        resetRange: function() {
            this.option.rangeStart = this.option.rangeEnd = null
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    var r = (i(257), i(111)),
        o = n(r),
        a = i(258),
        s = n(a);
    window.Promise || (window.Promise = i(259).Promise);
    var l = i(260);
    l.attach(document.body), window.IScroll = i(261), window.globalSession = i(41), window.axios = i(262), window.Vue = o["default"], window.Vuex = i(2), window.VueRouter = s["default"], i(280), window.echarts = i(62), i(341), GLOBAL.vbus = window.vbus = new Vue
}, function(t, e, i) {
    (function(i) {
        var n, r, o = "undefined" != typeof t && t.exports && "undefined" != typeof i ? i : this || window;
        (o._gsQueue || (o._gsQueue = [])).push(function() {
            "use strict";
            o._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    o = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = o.prototype.render
                    },
                    a = 1e-10,
                    s = i._internals,
                    l = s.isSelector,
                    h = s.isArray,
                    u = o.prototype = i.to({}, .1, {}),
                    c = [];
                o.version = "1.20.3", u.constructor = o, u.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        o = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || o)
                        if (e) this._initted = !1, o && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                            var a = this._totalTime;
                            this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                        } else if (this._initted = !1, this._init(), this._time > 0 || o)
                            for (var s, l = 1 / (1 - r), h = this._firstPT; h;) s = h.s + h.c, h.c *= l, h.s = s - h.c, h = h._next;
                    return this
                }, u.render = function(t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, o, l, h, u, c, f, p, d, m = this._dirty ? this.totalDuration() : this._totalDuration,
                        v = this._time,
                        g = this._totalTime,
                        _ = this._cycle,
                        y = this._duration,
                        x = this._rawPrevTime;
                    if (t >= m - 1e-7 && t >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, o = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (x < 0 || t <= 0 && t >= -1e-7 || x === a && "isPause" !== this.data) && x !== t && (n = !0, x > a && (o = "onReverseComplete")), this._rawPrevTime = p = !e || t || x === t ? t : a)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && x > 0) && (o = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (x >= 0 && (n = !0),
                            this._rawPrevTime = p = !e || t || x === t ? t : a)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time, d = this._yoyoEase || this.vars.yoyoEase, d && (this._yoyoEase || (d !== !0 || this._initted ? this._yoyoEase = d = d === !0 ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease, this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d, this.vars.easeParams) : Ease.map[d] || i.defaultEase : i.defaultEase)), this.ratio = d ? 1 - d.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !d ? (u = this._time / y, c = this._easeType, f = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / y < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : d || (this.ratio = this._ease.getRatio(this._time / y))), v === this._time && !n && _ === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = v, this._totalTime = g, this._rawPrevTime = x, this._cycle = _, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || r || d ? r && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== v && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== g || o) && this._callback("onUpdate")), this._cycle !== _ && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === y && this._rawPrevTime === a && p !== a && (this._rawPrevTime = 0)))
                }, o.to = function(t, e, i) {
                    return new o(t, e, i)
                }, o.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
                }, o.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n)
                }, o.staggerTo = o.allTo = function(t, e, a, s, u, f, p) {
                    s = s || 0;
                    var d, m, v, g, _ = 0,
                        y = [],
                        x = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), u.apply(p || a.callbackScope || this, f || c)
                        },
                        w = a.cycle,
                        b = a.startAt && a.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], s < 0 && (t = n(t), t.reverse(), s *= -1), d = t.length - 1, v = 0; v <= d; v++) {
                        m = {};
                        for (g in a) m[g] = a[g];
                        if (w && (r(m, t, v), null != m.duration && (e = m.duration, delete m.duration)), b) {
                            b = m.startAt = {};
                            for (g in a.startAt) b[g] = a.startAt[g];
                            r(m.startAt, t, v)
                        }
                        m.delay = _ + (m.delay || 0), v === d && u && (m.onComplete = x), y[v] = new o(t[v], e, m), _ += s
                    }
                    return y
                }, o.staggerFrom = o.allFrom = function(t, e, i, n, r, a, s) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, r, a, s)
                }, o.staggerFromTo = o.allFromTo = function(t, e, i, n, r, a, s, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, r, a, s, l)
                }, o.delayedCall = function(t, e, i, n, r) {
                    return new o(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, o.set = function(t, e) {
                    return new o(t, 0, e)
                }, o.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var f = function(t, e) {
                        for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(f(o, e)), r = n.length), o = o._next;
                        return n
                    },
                    p = o.getAllTweens = function(e) {
                        return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                    };
                o.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, a, s, l = p(0 != r),
                        h = l.length,
                        u = i && n && r;
                    for (s = 0; s < h; s++) a = l[s], (u || a instanceof e || (o = a.target === a.vars.onComplete) && n || i && !o) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, o.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, a, u, c, f, p = s.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t))
                            for (c = t.length; --c > -1;) o.killChildTweensOf(t[c], e);
                        else {
                            r = [];
                            for (u in p)
                                for (a = p[u].target.parentNode; a;) a === t && (r = r.concat(p[u].tweens)), a = a.parentNode;
                            for (f = r.length, c = 0; c < f; c++) e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var o, a, s = p(r), l = i && n && r, h = s.length; --h > -1;) a = s[h], (l || a instanceof e || (o = a.target === a.vars.onComplete) && n || i && !o) && a.paused(t)
                };
                return o.pauseAll = function(t, e, i) {
                    d(!0, t, e, i)
                }, o.resumeAll = function(t, e, i) {
                    d(!1, t, e, i)
                }, o.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || a, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, u.totalDuration = function(t) {
                    return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o
            }, !0), o._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], h(i) && i.join("").indexOf("{self}") !== -1 && (r[n] = this._swapSelfInParams(i));
                        h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    a = i._internals,
                    s = n._internals = {},
                    l = a.isSelector,
                    h = a.isArray,
                    u = a.lazyTweens,
                    c = a.lazyRender,
                    f = o._gsDefine.globals,
                    p = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    d = function(t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    m = s.pauseCallback = function() {},
                    v = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.20.3", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, r) {
                    var o = n.repeat && f.TweenMax || i;
                    return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                }, g.from = function(t, e, n, r) {
                    return this.add((n.repeat && f.TweenMax || i).from(t, e, n), r)
                }, g.fromTo = function(t, e, n, r, o) {
                    var a = r.repeat && f.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, n, r), o) : this.set(t, r, o)
                }, g.staggerTo = function(t, e, r, o, a, s, h, u) {
                    var c, f, m = new n({
                            onComplete: s,
                            onCompleteParams: h,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], l(t) && (t = v(t)), o = o || 0, o < 0 && (t = v(t), t.reverse(), o *= -1), f = 0; f < t.length; f++) c = p(r), c.startAt && (c.startAt = p(c.startAt), c.startAt.cycle && d(c.startAt, t, f)), g && (d(c, t, f), null != c.duration && (e = c.duration, delete c.duration)), m.to(t[f], e, c, f * o);
                    return this.add(m, a)
                }, g.staggerFrom = function(t, e, i, n, r, o, a, s) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, a, s)
                }, g.staggerFromTo = function(t, e, i, n, r, o, a, s, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, a, s, l)
                }, g.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, g.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, o, a, s, l = new n(t),
                        h = l._timeline;
                    for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, a = h._first; a;) s = a._next, e && a instanceof i && a.target === a.vars.onComplete || (o = a._startTime - a._delay, o < 0 && (r = 1), l.add(a, o)), a = s;
                    return h.add(l, 0), r && l.totalDuration(), l
                }, g.add = function(r, o, a, s) {
                    var l, u, c, f, p, d;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && h(r)) {
                            for (a = a || "normal", s = s || 0, l = o, u = r.length, c = 0; c < u; c++) h(f = r[c]) && (f = new n({
                                tweens: f
                            })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += s;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, o), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && h(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, g.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, n, r) {
                    var o = i.delayedCall(0, m, n, r || this);
                    return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, n, r) {
                    var o, a;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && h(r)))
                        for (a = r.length; --a > -1;) r[a] instanceof t && r[a].timeline === this && this.remove(r[a]);
                    if (o = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - o : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = o);
                    else {
                        if (a = e.indexOf("="), a === -1) return null == this._labels[e] ? n ? this._labels[e] = o + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, n) : o
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, a, s, l, h, f, p = this._time,
                        d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._startTime,
                        v = this._timeScale,
                        g = this._paused;
                    if (p !== this._time && (t += this._time - p), t >= d - 1e-7 && t >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (o = !0, s = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = d + 1e-4;
                    else if (t < 1e-7)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (s = "onReverseComplete", o = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                            h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || l || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), f = this._time, f >= p)
                            for (n = this._first; n && (a = n._next, f === this._time && (!this._paused || g));)(n._active || n._startTime <= f && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, f === this._time && (!this._paused || g));) {
                                if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                    if (h === n) {
                                        for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                        h = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = a
                            }
                        this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), s && (this._gc || m !== this._startTime && v === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (o && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var o = [], a = this._first, s = 0; a;) a._startTime < r || (a instanceof i ? e !== !1 && (o[s++] = a) : (n !== !1 && (o[s++] = a), t !== !1 && (o = o.concat(a.getChildren(!0, e, n)), s = o.length))), a = a._next;
                    return o
                }, g.getTweensOf = function(t, e) {
                    var n, r, o = this._gc,
                        a = [],
                        s = 0;
                    for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (a[s++] = n[r]);
                    return o && this._enabled(!1, !0), a
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in o) o[n] >= i && (o[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, g.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, n
            }, !0), o._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    a = e._internals,
                    s = a.lazyTweens,
                    l = a.lazyRender,
                    h = o._gsDefine.globals,
                    u = new i(null, null, 1, 0),
                    c = n.prototype = new t;
                return c.constructor = n, c.kill()._gc = !1, n.version = "1.20.3", c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, c.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, o, a = {
                            ease: u,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        s = i.repeat && h.TweenMax || e;
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new s(this, n, a), a.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
                    }, o
                }, c.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, c.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, a, h, u, c, f, p, d = this._time,
                        m = this._dirty ? this.totalDuration() : this._totalDuration,
                        v = this._duration,
                        g = this._totalTime,
                        _ = this._startTime,
                        y = this._timeScale,
                        x = this._rawPrevTime,
                        w = this._paused,
                        b = this._cycle;
                    if (d !== this._time && (t += this._time - d), t >= m - 1e-7 && t >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || x < 0 || x === r) && x !== t && this._first && (u = !0, x > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = v, t = v + 1e-4);
                    else if (t < 1e-7)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === v && x !== r && (x > 0 || t < 0 && x >= 0) && !this._locked) && (h = "onReverseComplete", o = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = o = !0, h = "onReverseComplete") : x >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = v || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (u = !0)
                        }
                    else if (0 === v && x < 0 && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = v + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? (this._time = v, t = v + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= d || this._repeat && b !== this._cycle)
                            for (n = this._first; n && n._startTime <= t && !f;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !f;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev;
                        f && f._startTime < v && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & b),
                            S = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            k = this._cycle,
                            C = this._rawPrevTime,
                            A = this._time;
                        if (this._totalTime = b * v, this._cycle < b ? T = !T : this._totalTime += v, this._time = d, this._rawPrevTime = 0 === v ? x - 1e-4 : x, this._cycle = b, this._locked = !0, d = T ? 0 : v, this.render(d, e, 0 === v), e || this._gc || this.vars.onRepeat && (this._cycle = k, this._locked = !1, this._callback("onRepeat")), d !== this._time) return;
                        if (S && (this._cycle = b, this._locked = !0, d = T ? v + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !w) return;
                        this._time = A, this._totalTime = P, this._cycle = k, this._rawPrevTime = C
                    }
                    if (!(this._time !== d && this._first || i || u || f)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), p = this._time, p >= d)
                        for (n = this._first; n && (a = n._next, p === this._time && (!this._paused || w));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                    else
                        for (n = this._last; n && (a = n._prev, p === this._time && (!this._paused || w));) {
                            if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                if (f === n) {
                                    for (f = n._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                    f = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = a
                        }
                    this._onUpdate && (e || (s.length && l(), this._callback("onUpdate"))), h && (this._locked || this._gc || _ !== this._startTime && y === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (o && (s.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, o = [],
                        a = this.getChildren(t, e, i),
                        s = 0,
                        l = a.length;
                    for (n = 0; n < l; n++) r = a[n], r.isActive() && (o[s++] = r);
                    return o
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; e < n; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, c.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                }, c.totalDuration = function(e) {
                    return arguments.length ? this._repeat !== -1 && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
                function() {
                    var t = 180 / Math.PI,
                        e = [],
                        i = [],
                        n = [],
                        r = {},
                        a = o._gsDefine.globals,
                        s = function(t, e, i, n) {
                            i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                        },
                        l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                        h = function(t, e, i, n) {
                            var r = {
                                    a: t
                                },
                                o = {},
                                a = {},
                                s = {
                                    c: n
                                },
                                l = (t + e) / 2,
                                h = (e + i) / 2,
                                u = (i + n) / 2,
                                c = (l + h) / 2,
                                f = (h + u) / 2,
                                p = (f - c) / 8;
                            return r.b = l + (t - l) / 4, o.b = c + p, r.c = o.a = (r.b + o.b) / 2, o.c = a.a = (c + f) / 2, a.b = f - p, s.b = u + (n - u) / 4, a.c = s.a = (a.b + s.b) / 2, [r, o, a, s]
                        },
                        u = function(t, r, o, a, s) {
                            var l, u, c, f, p, d, m, v, g, _, y, x, w, b = t.length - 1,
                                T = 0,
                                S = t[0].a;
                            for (l = 0; l < b; l++) p = t[T], u = p.a, c = p.d, f = t[T + 1].d, s ? (y = e[l], x = i[l], w = (x + y) * r * .25 / (a ? .5 : n[l] || .5), d = c - (c - u) * (a ? .5 * r : 0 !== y ? w / y : 0), m = c + (f - c) * (a ? .5 * r : 0 !== x ? w / x : 0), v = c - (d + ((m - d) * (3 * y / (y + x) + .5) / 4 || 0))) : (d = c - (c - u) * r * .5, m = c + (f - c) * r * .5, v = c - (d + m) / 2), d += v, m += v, p.c = g = d, 0 !== l ? p.b = S : p.b = S = p.a + .6 * (p.c - p.a), p.da = c - u, p.ca = g - u, p.ba = S - u, o ? (_ = h(u, S, g, c), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, S = m;
                            p = t[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, o && (_ = h(p.a, S, p.c, p.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
                        },
                        c = function(t, n, r, o) {
                            var a, l, h, u, c, f, p = [];
                            if (o)
                                for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
                            if (a = t.length - 2, a < 0) return p[0] = new s(t[0][n], 0, 0, t[0][n]), p;
                            for (l = 0; l < a; l++) h = t[l][n], u = t[l + 1][n], p[l] = new s(h, 0, 0, u), r && (c = t[l + 2][n], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (c - u) * (c - u));
                            return p[l] = new s(t[l][n], 0, 0, t[l + 1][n]), p
                        },
                        f = function(t, o, a, s, h, f) {
                            var p, d, m, v, g, _, y, x, w = {},
                                b = [],
                                T = f || t[0];
                            h = "string" == typeof h ? "," + h + "," : l, null == o && (o = 1);
                            for (d in t[0]) b.push(d);
                            if (t.length > 1) {
                                for (x = t[t.length - 1], y = !0, p = b.length; --p > -1;)
                                    if (d = b[p], Math.abs(T[d] - x[d]) > .05) {
                                        y = !1;
                                        break
                                    }
                                y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                            }
                            for (e.length = i.length = n.length = 0, p = b.length; --p > -1;) d = b[p], r[d] = h.indexOf("," + d + ",") !== -1, w[d] = c(t, d, r[d], f);
                            for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                            if (!s) {
                                for (p = b.length; --p > -1;)
                                    if (r[d])
                                        for (m = w[b[p]], _ = m.length - 1, v = 0; v < _; v++) g = m[v + 1].da / i[v] + m[v].da / e[v] || 0, n[v] = (n[v] || 0) + g * g;
                                for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                            }
                            for (p = b.length, v = a ? 4 : 1; --p > -1;) d = b[p], m = w[d], u(m, o, a, s, r[d]), y && (m.splice(0, v), m.splice(m.length - v, v));
                            return w
                        },
                        p = function(t, e, i) {
                            e = e || "soft";
                            var n, r, o, a, l, h, u, c, f, p, d, m = {},
                                v = "cubic" === e ? 3 : 2,
                                g = "soft" === e,
                                _ = [];
                            if (g && i && (t = [i].concat(t)), null == t || t.length < v + 1) throw "invalid Bezier data";
                            for (f in t[0]) _.push(f);
                            for (h = _.length; --h > -1;) {
                                for (f = _[h], m[f] = l = [], p = 0, c = t.length, u = 0; u < c; u++) n = null == i ? t[u][f] : "string" == typeof(d = t[u][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && u > 1 && u < c - 1 && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                                for (c = p - v + 1, p = 0, u = 0; u < c; u += v) n = l[u], r = l[u + 1], o = l[u + 2], a = 2 === v ? 0 : l[u + 3], l[p++] = d = 3 === v ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                                l.length = p
                            }
                            return m
                        },
                        d = function(t, e, i) {
                            for (var n, r, o, a, s, l, h, u, c, f, p, d = 1 / i, m = t.length; --m > -1;)
                                for (f = t[m], o = f.a, a = f.d - o, s = f.c - o, l = f.b - o, n = r = 0, u = 1; u <= i; u++) h = d * u, c = 1 - h, n = r - (r = (h * h * a + 3 * c * (h * s + c * l)) * h), p = m * i + u - 1, e[p] = (e[p] || 0) + n * n
                        },
                        m = function(t, e) {
                            e = e >> 0 || 6;
                            var i, n, r, o, a = [],
                                s = [],
                                l = 0,
                                h = 0,
                                u = e - 1,
                                c = [],
                                f = [];
                            for (i in t) d(t[i], a, e);
                            for (r = a.length, n = 0; n < r; n++) l += Math.sqrt(a[n]), o = n % e, f[o] = l, o === u && (h += l, o = n / e >> 0, c[o] = f, s[o] = h, l = 0, f = []);
                            return {
                                length: h,
                                lengths: s,
                                segments: c
                            }
                        },
                        v = o._gsDefine.plugin({
                            propName: "bezier",
                            priority: -1,
                            version: "1.3.8",
                            API: 2,
                            global: !0,
                            init: function(t, e, i) {
                                this._target = t, e instanceof Array && (e = {
                                    values: e
                                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                var n, r, o, a, s, l = e.values || [],
                                    h = {},
                                    u = l[0],
                                    c = e.autoRotate || i.vars.orientToBezier;
                                this._autoRotate = c ? c instanceof Array ? c : [
                                    ["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]
                                ] : null;
                                for (n in u) this._props.push(n);
                                for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), s || h[n] !== l[0][n] && (s = h);
                                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, s) : p(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                                    var d = m(this._beziers, this._timeRes);
                                    this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                }
                                if (c = this._autoRotate)
                                    for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), o = c.length; --o > -1;) {
                                        for (a = 0; a < 3; a++) n = c[o][a], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                        n = c[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                    }
                                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                            },
                            set: function(e) {
                                var i, n, r, o, a, s, l, h, u, c, f = this._segCount,
                                    p = this._func,
                                    d = this._target,
                                    m = e !== this._startRatio;
                                if (this._timeRes) {
                                    if (u = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < f - 1) {
                                        for (h = f - 1; r < h && (this._l2 = u[++r]) <= e;);
                                        this._l1 = u[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0]
                                    } else if (e < this._l1 && r > 0) {
                                        for (; r > 0 && (this._l1 = u[--r]) >= e;);
                                        0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                    }
                                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < c.length - 1) {
                                        for (h = c.length - 1; r < h && (this._s2 = c[++r]) <= e;);
                                        this._s1 = c[r - 1], this._si = r
                                    } else if (e < this._s1 && r > 0) {
                                        for (; r > 0 && (this._s1 = c[--r]) >= e;);
                                        0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r
                                    }
                                    s = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                } else i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0, s = (e - i * (1 / f)) * f;
                                for (n = 1 - s, r = this._props.length; --r > -1;) o = this._props[r], a = this._beziers[o][i], l = (s * s * a.da + 3 * n * (s * a.ca + n * a.ba)) * s + a.a, this._mod[o] && (l = this._mod[o](l, d)), p[o] ? d[o](l) : d[o] = l;
                                if (this._autoRotate) {
                                    var v, g, _, y, x, w, b, T = this._autoRotate;
                                    for (r = T.length; --r > -1;) o = T[r][2], w = T[r][3] || 0, b = T[r][4] === !0 ? 1 : t, a = this._beziers[T[r][0]], v = this._beziers[T[r][1]], a && v && (a = a[i], v = v[i], g = a.a + (a.b - a.a) * s, y = a.b + (a.c - a.b) * s, g += (y - g) * s, y += (a.c + (a.d - a.c) * s - y) * s, _ = v.a + (v.b - v.a) * s, x = v.b + (v.c - v.b) * s, _ += (x - _) * s, x += (v.c + (v.d - v.c) * s - x) * s, l = m ? Math.atan2(x - _, y - g) * b + w : this._initialRotations[r], this._mod[o] && (l = this._mod[o](l, d)), p[o] ? d[o](l) : d[o] = l)
                                }
                            }
                        }),
                        g = v.prototype;
                    v.bezierThrough = f, v.cubicToQuadratic = h, v._autoCSS = !0, v.quadraticToCubic = function(t, e, i) {
                        return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                    }, v._cssRegister = function() {
                        var t = a.CSSPlugin;
                        if (t) {
                            var e = t._internals,
                                i = e._parseToProxy,
                                n = e._setPluginRatio,
                                r = e.CSSPropTween;
                            e._registerComplexSpecialProp("bezier", {
                                parser: function(t, e, o, a, s, l) {
                                    e instanceof Array && (e = {
                                        values: e
                                    }), l = new v;
                                    var h, u, c, f = e.values,
                                        p = f.length - 1,
                                        d = [],
                                        m = {};
                                    if (p < 0) return s;
                                    for (h = 0; h <= p; h++) c = i(t, f[h], a, s, l, p !== h), d[h] = c.end;
                                    for (u in e) m[u] = e[u];
                                    return m.values = d, s = new r(t, "bezier", 0, 0, c.pt, 2), s.data = c, s.plugin = l, s.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [
                                        ["left", "top", "rotation", h, !1]
                                    ] : null != c.end.x && [
                                        ["x", "y", "rotation", h, !1]
                                    ]), m.autoRotate && (a._transform || a._enableTransforms(!1), c.autoRotate = a._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(c.proxy, m, a._tween), s
                                }
                            })
                        }
                    }, g._mod = function(t) {
                        for (var e, i = this._overwriteProps, n = i.length; --n > -1;) e = t[i[n]], e && "function" == typeof e && (this._mod[i[n]] = e)
                    }, g._kill = function(t) {
                        var e, i, n = this._props;
                        for (e in this._beziers)
                            if (e in t)
                                for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                        if (n = this._autoRotate)
                            for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                        return this._super._kill.call(this, t)
                    }
                }(), o._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, a, s = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                    },
                    l = o._gsDefine.globals,
                    h = {},
                    u = s.prototype = new t("css");
                u.constructor = s, s.version = "1.20.3", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, u = "px", s.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var c, f, p, d, m, v, g, _, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    S = /opacity *= *([^)]*)/i,
                    P = /opacity:([^;]*)/i,
                    k = /alpha\(opacity *=.+?\)/i,
                    C = /^(rgb|hsl)/,
                    A = /([A-Z])/g,
                    M = /-([a-z])/gi,
                    O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function(t, e) {
                        return e.toUpperCase()
                    },
                    D = /(?:Left|Right|Width)/i,
                    I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    R = /,(?=[^\)]*(?:\(|$))/gi,
                    z = /[\s,\(]/i,
                    F = Math.PI / 180,
                    B = 180 / Math.PI,
                    N = {},
                    j = {
                        style: {}
                    },
                    X = o.document || {
                        createElement: function() {
                            return j
                        }
                    },
                    $ = function(t, e) {
                        return X.createElementNS ? X.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : X.createElement(t)
                    },
                    V = $("div"),
                    H = $("img"),
                    U = s._internals = {
                        _specialProps: h
                    },
                    Y = (o.navigator || {}).userAgent || "",
                    W = function() {
                        var t = Y.indexOf("Android"),
                            e = $("a");
                        return p = Y.indexOf("Safari") !== -1 && Y.indexOf("Chrome") === -1 && (t === -1 || parseFloat(Y.substr(t + 8, 2)) > 3), m = p && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6, d = Y.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (v = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    q = function(t) {
                        return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    G = function(t) {
                        o.console && console.log(t)
                    },
                    Z = "",
                    K = "",
                    Q = function(t, e) {
                        e = e || V;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (K = 3 === n ? "ms" : i[n], Z = "-" + K.toLowerCase() + "-", K + t) : null
                    },
                    J = X.defaultView ? X.defaultView.getComputedStyle : function() {},
                    tt = s.getStyle = function(t, e, i, n, r) {
                        var o;
                        return W || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || J(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : q(t)
                    },
                    et = U.convertToPixels = function(t, i, n, r, o) {
                        if ("px" === r || !r && "lineHeight" !== i) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, h, u = D.test(i),
                            c = t,
                            f = V.style,
                            p = n < 0,
                            d = 1 === n;
                        if (p && (n = -n), d && (n *= 100), "lineHeight" !== i || r)
                            if ("%" === r && i.indexOf("border") !== -1) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                            else {
                                if (f.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                else {
                                    if (c = t.parentNode || X.body, tt(c, "display").indexOf("flex") !== -1 && (f.position = "absolute"), l = c._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * n / 100;
                                    f[u ? "width" : "height"] = n + r
                                }
                                c.appendChild(V), a = parseFloat(V[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(V), u && "%" === r && s.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = h, l.width = a / n * 100), 0 !== a || o || (a = et(t, i, n, r, !0))
                            }
                        else l = J(t).lineHeight, t.style.lineHeight = n, a = parseFloat(J(t).lineHeight), t.style.lineHeight = l;
                        return d && (a /= 100), p ? -a : a
                    },
                    it = U.calculateOffset = function(t, e, i) {
                        if ("absolute" !== tt(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = tt(t, "margin" + n, i);
                        return t["offset" + n] - (et(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    nt = function(t, e) {
                        var i, n, r, o = {};
                        if (e = e || J(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], r.indexOf("-transform") !== -1 && Ot !== r || (o[r.replace(M, E)] = e.getPropertyValue(r));
                            else
                                for (i in e) i.indexOf("Transform") !== -1 && Mt !== i || (o[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(M, E)] = e[i]);
                        return W || (o.opacity = q(t)), n = Ht(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Dt && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                    },
                    rt = function(t, e, i, n, r) {
                        var o, a, s, l = {},
                            h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (o = i[a]) || r && r[a]) && a.indexOf("Origin") === -1 && ("number" != typeof o && "string" != typeof o || (l[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[a] || "" === e[a].replace(b, "") ? o : 0 : it(t, a), void 0 !== h[a] && (s = new yt(h, a, h[a], s))));
                        if (n)
                            for (a in n) "className" !== a && (l[a] = n[a]);
                        return {
                            difs: l,
                            firstMPT: s
                        }
                    },
                    ot = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    st = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                        if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = ot[e],
                            o = r.length;
                        for (i = i || J(t, null); --o > -1;) n -= parseFloat(tt(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(tt(t, "border" + r[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    lt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        null != t && "" !== t || (t = "0 0");
                        var i, n = t.split(" "),
                            r = t.indexOf("left") !== -1 ? "0%" : t.indexOf("right") !== -1 ? "100%" : n[0],
                            o = t.indexOf("top") !== -1 ? "0%" : t.indexOf("bottom") !== -1 ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(lt(n[i]));
                            return t.join(",")
                        }
                        return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && (r + "").indexOf("=") === -1) && (r = "50%"), t = r + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = r.indexOf("%") !== -1, e.oyp = o.indexOf("%") !== -1, e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(b, "")), e.oy = parseFloat(o.replace(b, "")), e.v = t), e || t
                    },
                    ht = function(t, e) {
                        return "function" == typeof t && (t = t(_, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    ut = function(t, e) {
                        return "function" == typeof t && (t = t(_, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ct = function(t, e, i, n) {
                        var r, o, a, s, l, h = 1e-6;
                        return "function" == typeof t && (t = t(_, g)), null == t ? s = e : "number" == typeof t ? s = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (t.indexOf("rad") === -1 ? 1 : B) - (l ? 0 : e), o.length && (n && (n[i] = e + a), t.indexOf("short") !== -1 && (a %= r, a !== a % (r / 2) && (a = a < 0 ? a + r : a - r)), t.indexOf("_cw") !== -1 && a < 0 ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : t.indexOf("ccw") !== -1 && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), s = e + a), s < h && s > -h && (s = 0), s
                    },
                    ft = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    pt = function(t, e, i) {
                        return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    dt = s.parseColor = function(t, e) {
                        var i, n, r, o, a, s, l, h, u, c, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) i = ft[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(y), e) {
                                        if (t.indexOf("=") !== -1) return t.match(x)
                                    } else a = Number(i[0]) % 360 / 360, s = Number(i[1]) / 100, l = Number(i[2]) / 100, r = l <= .5 ? l * (s + 1) : l + s - l * s, n = 2 * l - r, i.length > 3 && (i[3] = Number(i[3])), i[0] = pt(a + 1 / 3, n, r), i[1] = pt(a, n, r), i[2] = pt(a - 1 / 3, n, r);
                                else i = t.match(y) || ft.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ft.black;
                        return e && !f && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, h = Math.max(n, r, o), u = Math.min(n, r, o), l = (h + u) / 2, h === u ? a = s = 0 : (c = h - u, s = l > .5 ? c / (2 - h - u) : c / (h + u), a = h === n ? (r - o) / c + (r < o ? 6 : 0) : h === r ? (o - n) / c + 2 : (n - r) / c + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * s + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    mt = function(t, e) {
                        var i, n, r, o = t.match(vt) || [],
                            a = 0,
                            s = "";
                        if (!o.length) return t;
                        for (i = 0; i < o.length; i++) n = o[i], r = t.substr(a, t.indexOf(n, a) - a), a += r.length + n.length, n = dt(n, e), 3 === n.length && n.push(1), s += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return s + t.substr(a)
                    },
                    vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (u in ft) vt += "|" + u + "\\b";
                vt = new RegExp(vt + ")", "gi"), s.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    vt.test(i) && (e = i.indexOf("hsl(") !== -1 || i.indexOf("hsla(") !== -1, t[0] = mt(t[0], e), t[1] = mt(t[1], e)), vt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
                var gt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, o = e ? (t.match(vt) || [""])[0] : "",
                            a = t.split(o).join("").match(w) || [],
                            s = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = t.indexOf(" ") !== -1 ? " " : ",",
                            u = a.length,
                            c = u > 0 ? a[0].replace(y, "") : "";
                        return u ? r = e ? function(t) {
                            var e, f, p, d;
                            if ("number" == typeof t) t += c;
                            else if (n && R.test(t)) {
                                for (d = t.replace(R, "|").split("|"), p = 0; p < d.length; p++) d[p] = r(d[p]);
                                return d.join(",")
                            }
                            if (e = (t.match(vt) || [o])[0], f = t.split(e).join("").match(w) || [], p = f.length, u > p--)
                                for (; ++p < u;) f[p] = i ? f[(p - 1) / 2 | 0] : a[p];
                            return s + f.join(h) + h + e + l + (t.indexOf("inset") !== -1 ? " inset" : "")
                        } : function(t) {
                            var e, o, f;
                            if ("number" == typeof t) t += c;
                            else if (n && R.test(t)) {
                                for (o = t.replace(R, "|").split("|"), f = 0; f < o.length; f++) o[f] = r(o[f]);
                                return o.join(",")
                            }
                            if (e = t.match(w) || [], f = e.length, u > f--)
                                for (; ++f < u;) e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
                            return s + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    _t = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, o, a, s) {
                                var l, h = (i + "").split(" ");
                                for (s = {}, l = 0; l < 4; l++) s[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, s, o, a)
                            }
                    },
                    yt = (U._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, o, a = this.data, s = a.proxy, l = a.firstMPT, h = 1e-6; l;) e = s[l.v], l.r ? e = Math.round(e) : e < h && e > -h && (e = 0), l.t[l.p] = e, l = l._next;
                        if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(s.rotation, this.t) : s.rotation), 1 === t || 0 === t)
                            for (l = a.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[o] = r
                                    }
                                } else i[o] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    xt = (U._parseToProxy = function(t, e, i, n, r, o) {
                        var a, s, l, h, u, c = n,
                            f = {},
                            p = {},
                            d = i._transform,
                            m = N;
                        for (i._transform = null, N = e, n = u = i.parse(t, e, n, r), N = m, o && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                            if (n.type <= 1 && (s = n.p, p[s] = n.s + n.c, f[s] = n.s, o || (h = new yt(n, "s", s, h, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) l = "xn" + a, s = n.p + "_" + l, p[s] = n.data[l], f[s] = n[l], o || (h = new yt(n, l, s, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: f,
                            end: p,
                            firstMPT: h,
                            pt: u
                        }
                    }, U.CSSPropTween = function(t, e, n, r, o, s, l, h, u, c, f) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof xt || a.push(this.n), this.r = h, this.type = s || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === f ? n + r : f, o && (this._next = o, o._prev = this)
                    }),
                    wt = function(t, e, i, n, r, o) {
                        var a = new xt(t, e, i, n - i, r, (-1), o);
                        return a.b = i, a.e = a.xs0 = n, a
                    },
                    bt = s.parseComplex = function(t, e, i, n, r, o, a, l, h, u) {
                        i = i || o || "", "function" == typeof n && (n = n(_, g)), a = new xt(t, e, 0, 0, a, u ? 2 : 1, null, (!1), l, i, n), n += "", r && vt.test(n + i) && (n = [i, n], s.colorStringFilter(n), i = n[0], n = n[1]);
                        var f, p, d, m, v, w, b, T, S, P, k, C, A, M = i.split(", ").join(",").split(" "),
                            O = n.split(", ").join(",").split(" "),
                            E = M.length,
                            D = c !== !1;
                        for (n.indexOf(",") === -1 && i.indexOf(",") === -1 || ((n + i).indexOf("rgb") !== -1 || (n + i).indexOf("hsl") !== -1 ? (M = M.join(" ").replace(R, ", ").split(" "), O = O.join(" ").replace(R, ", ").split(" ")) : (M = M.join(" ").split(",").join(", ").split(" "), O = O.join(" ").split(",").join(", ").split(" ")), E = M.length), E !== O.length && (M = (o || "").split(" "), E = M.length), a.plugin = h, a.setRatio = u, vt.lastIndex = 0, f = 0; f < E; f++)
                            if (m = M[f], v = O[f], T = parseFloat(m), T || 0 === T) a.appendXtra("", T, ht(v, T), v.replace(x, ""), D && v.indexOf("px") !== -1, !0);
                            else if (r && vt.test(m)) C = v.indexOf(")") + 1, C = ")" + (C ? v.substr(C) : ""), A = v.indexOf("hsl") !== -1 && W, P = v, m = dt(m, A), v = dt(v, A), S = m.length + v.length > 6, S && !W && 0 === v[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(O[f]).join("transparent")) : (W || (S = !1), A ? a.appendXtra(P.substr(0, P.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], ht(v[0], m[0]), ",", !1, !0).appendXtra("", m[1], ht(v[1], m[1]), "%,", !1).appendXtra("", m[2], ht(v[2], m[2]), S ? "%," : "%" + C, !1) : a.appendXtra(P.substr(0, P.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], v[0] - m[0], ",", !0, !0).appendXtra("", m[1], v[1] - m[1], ",", !0).appendXtra("", m[2], v[2] - m[2], S ? "," : C, !0), S && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (v.length < 4 ? 1 : v[3]) - m, C, !1))), vt.lastIndex = 0;
                            else if (w = m.match(y)) {
                                if (b = v.match(x), !b || b.length !== w.length) return a;
                                for (d = 0, p = 0; p < w.length; p++) k = w[p], P = m.indexOf(k, d), a.appendXtra(m.substr(d, P - d), Number(k), ht(b[p], k), "", D && "px" === m.substr(P + k.length, 2), 0 === p), d = P + k.length;
                                a["xs" + a.l] += m.substr(d)
                            } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + v : v;
                        if (n.indexOf("=") !== -1 && a.data) {
                            for (C = a.xs0 + a.data.s, f = 1; f < a.l; f++) C += a["xs" + f] + a.data["xn" + f];
                            a.e = C + a["xs" + f]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    Tt = 9;
                for (u = xt.prototype, u.l = u.pr = 0; --Tt > 0;) u["xn" + Tt] = 0, u["xs" + Tt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, o) {
                    var a = this,
                        s = a.l;
                    return a["xs" + s] += o && (s || a["xs" + s]) ? " " + t : t || "", i || 0 === s || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", s > 0 ? (a.data["xn" + s] = e + i, a.rxp["xn" + s] = r, a["xn" + s] = e, a.plugin || (a.xfirst = new xt(a, "xn" + s, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + s] += e + (n || ""), a)
                };
                var St = function(t, e) {
                        e = e || {}, this.p = e.prefix ? Q(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    Pt = U._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, o = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], n = 0; n < o.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || a, r = new St(o[n], e)
                    },
                    kt = U._registerPluginProp = function(t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Pt(t, {
                                parser: function(t, i, n, r, o, a, s) {
                                    var u = l.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), h[n].parse(t, i, n, r, o, a, s)) : (G("Error: " + e + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                u = St.prototype, u.parseComplex = function(t, e, i, n, r, o) {
                    var a, s, l, h, u, c, f = this.keyword;
                    if (this.multi && (R.test(i) || R.test(e) ? (s = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : f && (s = [e], l = [i])), l) {
                        for (h = l.length > s.length ? l.length : s.length, a = 0; a < h; a++) e = s[a] = s[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && (u = e.indexOf(f), c = i.indexOf(f), u !== c && (c === -1 ? s[a] = s[a].split(f).join("") : u === -1 && (s[a] += " " + f)));
                        e = s.join(", "), i = l.join(", ")
                    }
                    return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                }, u.parse = function(t, e, i, n, o, a, s) {
                    return this.parseComplex(t.style, this.format(tt(t, this.p, r, !1, this.dflt)), this.format(e), o, a)
                }, s.registerSpecialProp = function(t, e, i) {
                    Pt(t, {
                        parser: function(t, n, r, o, a, s, l) {
                            var h = new xt(t, r, 0, 0, a, 2, r, (!1), i);
                            return h.plugin = s, h.setRatio = e(t, n, o._tween, r), h
                        },
                        priority: i
                    })
                }, s.useSVGTransformAttr = !0;
                var Ct, At = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Mt = Q("transform"),
                    Ot = Z + "transform",
                    Et = Q("transformOrigin"),
                    Dt = null !== Q("perspective"),
                    It = U.Transform = function() {
                        this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(s.defaultForce3D === !1 || !Dt) && (s.defaultForce3D || "auto")
                    },
                    Lt = o.SVGElement,
                    Rt = function(t, e, i) {
                        var n, r = X.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    zt = X.documentElement || {},
                    Ft = function() {
                        var t, e, i, n = v || /Android/i.test(Y) && !o.chrome;
                        return X.createElementNS && !n && (t = Rt("svg", zt), e = Rt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Et] = "50% 50%", e.style[Mt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(d && Dt), zt.removeChild(t)), n
                    }(),
                    Bt = function(t, e, i, n, r, o) {
                        var a, l, h, u, c, f, p, d, m, v, g, _, y, x, w = t._gsTransform,
                            b = Vt(t, !0);
                        w && (y = w.xOrigin, x = w.yOrigin), (!n || (a = n.split(" ")).length < 2) && (p = t.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), e = lt(e).split(" "), a = [(e[0].indexOf("%") !== -1 ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (e[1].indexOf("%") !== -1 ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(a[0]), i.yOrigin = c = parseFloat(a[1]), n && b !== $t && (f = b[0], p = b[1], d = b[2], m = b[3], v = b[4], g = b[5], _ = f * m - p * d, _ && (l = u * (m / _) + c * (-d / _) + (d * g - m * v) / _, h = u * (-p / _) + c * (f / _) - (f * g - p * v) / _, u = i.xOrigin = a[0] = l, c = i.yOrigin = a[1] = h)), w && (o && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (l = u - y, h = c - x, w.xOffset += l * b[0] + h * b[2] - l, w.yOffset += l * b[1] + h * b[3] - h) : w.xOffset = w.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    Nt = function(t) {
                        var e, i = $("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            r = this.nextSibling,
                            o = this.style.cssText;
                        if (zt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Nt
                        } catch (a) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return r ? n.insertBefore(this, r) : n.appendChild(this), zt.removeChild(i), this.style.cssText = o, e
                    },
                    jt = function(t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return Nt.call(t, !0)
                        }
                    },
                    Xt = function(t) {
                        return !(!Lt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !jt(t))
                    },
                    $t = [1, 0, 0, 1, 0, 0],
                    Vt = function(t, e) {
                        var i, n, r, o, a, s, l = t._gsTransform || new It,
                            h = 1e5,
                            u = t.style;
                        if (Mt ? n = tt(t, Ot, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(I), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Mt || !(s = !J(t) || "none" === J(t).display) && t.parentNode || (s && (o = u.display, u.display = "block"), t.parentNode || (a = 1, zt.appendChild(t)), n = tt(t, Ot, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? u.display = o : s && qt(u, "display"), a && zt.removeChild(t)), (l.svg || t.getCTM && Xt(t)) && (i && (u[Mt] + "").indexOf("matrix") !== -1 && (n = u[Mt], i = 0), r = t.getAttribute("transform"), i && r && (r.indexOf("matrix") !== -1 ? (n = r, i = 0) : r.indexOf("translate") !== -1 && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return $t;
                        for (r = (n || "").match(y) || [], Tt = r.length; --Tt > -1;) o = Number(r[Tt]), r[Tt] = (a = o - (o |= 0)) ? (a * h + (a < 0 ? -.5 : .5) | 0) / h + o : o;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ht = U.getTransform = function(t, i, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var o, a, l, h, u, c, f = n ? t._gsTransform || new It : new It,
                            p = f.scaleX < 0,
                            d = 2e-5,
                            m = 1e5,
                            v = Dt ? parseFloat(tt(t, Et, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            g = parseFloat(s.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getCTM || !Xt(t)), f.svg && (Bt(t, tt(t, Et, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Ct = s.useSVGTransformAttr || Ft), o = Vt(t), o !== $t) {
                            if (16 === o.length) {
                                var _, y, x, w, b, T = o[0],
                                    S = o[1],
                                    P = o[2],
                                    k = o[3],
                                    C = o[4],
                                    A = o[5],
                                    M = o[6],
                                    O = o[7],
                                    E = o[8],
                                    D = o[9],
                                    I = o[10],
                                    L = o[12],
                                    R = o[13],
                                    z = o[14],
                                    F = o[11],
                                    N = Math.atan2(M, I);
                                f.zOrigin && (z = -f.zOrigin, L = E * z - o[12], R = D * z - o[13], z = I * z + f.zOrigin - o[14]), f.rotationX = N * B, N && (w = Math.cos(-N), b = Math.sin(-N), _ = C * w + E * b, y = A * w + D * b, x = M * w + I * b, E = C * -b + E * w, D = A * -b + D * w, I = M * -b + I * w, F = O * -b + F * w, C = _, A = y, M = x), N = Math.atan2(-P, I), f.rotationY = N * B, N && (w = Math.cos(-N), b = Math.sin(-N), _ = T * w - E * b, y = S * w - D * b, x = P * w - I * b, D = S * b + D * w, I = P * b + I * w, F = k * b + F * w, T = _, S = y, P = x), N = Math.atan2(S, T), f.rotation = N * B, N && (w = Math.cos(N), b = Math.sin(N), _ = T * w + S * b, y = C * w + A * b, x = E * w + D * b, S = S * w - T * b, A = A * w - C * b, D = D * w - E * b, T = _, C = y, E = x), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), N = Math.atan2(C, A), f.scaleX = (Math.sqrt(T * T + S * S + P * P) * m + .5 | 0) / m, f.scaleY = (Math.sqrt(A * A + M * M) * m + .5 | 0) / m, f.scaleZ = (Math.sqrt(E * E + D * D + I * I) * m + .5 | 0) / m, T /= f.scaleX, C /= f.scaleY, S /= f.scaleX, A /= f.scaleY, Math.abs(N) > d ? (f.skewX = N * B, C = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(N))) : f.skewX = 0, f.perspective = F ? 1 / (F < 0 ? -F : F) : 0, f.x = L, f.y = R, f.z = z, f.svg && (f.x -= f.xOrigin - (f.xOrigin * T - f.yOrigin * C), f.y -= f.yOrigin - (f.yOrigin * S - f.xOrigin * A))
                            } else if (!Dt || r || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                                var j = o.length >= 6,
                                    X = j ? o[0] : 1,
                                    $ = o[1] || 0,
                                    V = o[2] || 0,
                                    H = j ? o[3] : 1;
                                f.x = o[4] || 0, f.y = o[5] || 0, l = Math.sqrt(X * X + $ * $), h = Math.sqrt(H * H + V * V), u = X || $ ? Math.atan2($, X) * B : f.rotation || 0, c = V || H ? Math.atan2(V, H) * B + u : f.skewX || 0, f.scaleX = l, f.scaleY = h, f.rotation = u, f.skewX = c, Dt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = g, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * X + f.yOrigin * V), f.y -= f.yOrigin - (f.xOrigin * $ + f.yOrigin * H))
                            }
                            Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = v;
                            for (a in f) f[a] < d && f[a] > -d && (f[a] = 0)
                        }
                        return n && (t._gsTransform = f, f.svg && (Ct && t.style[Mt] ? e.delayedCall(.001, function() {
                            qt(t.style, Mt)
                        }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Ut = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * F,
                            o = r + n.skewX * F,
                            a = 1e5,
                            s = (Math.cos(r) * n.scaleX * a | 0) / a,
                            l = (Math.sin(r) * n.scaleX * a | 0) / a,
                            h = (Math.sin(o) * -n.scaleY * a | 0) / a,
                            u = (Math.cos(o) * n.scaleY * a | 0) / a,
                            c = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -h, h = -i, e = f.filter, c.filter = "";
                            var p, d, m = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                _ = "absolute" !== f.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                                x = n.x + m * n.xPercent / 100,
                                w = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2, d = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2, x += p - (p * s + d * l), w += d - (p * h + d * u)), _ ? (p = m / 2, d = g / 2, y += ", Dx=" + (p - (p * s + d * l) + x) + ", Dy=" + (d - (p * h + d * u) + w) + ")") : y += ", sizingMethod='auto expand')", e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? c.filter = e.replace(L, y) : c.filter = y + " " + e, 0 !== t && 1 !== t || 1 === s && 0 === l && 0 === h && 1 === u && (_ && y.indexOf("Dx=0, Dy=0") === -1 || S.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && c.removeAttribute("filter")), !_) {
                                var b, P, k, C = v < 8 ? 1 : -1;
                                for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((s < 0 ? -s : s) * m + (l < 0 ? -l : l) * g)) / 2 + x), n.ieOffsetY = Math.round((g - ((u < 0 ? -u : u) * g + (h < 0 ? -h : h) * m)) / 2 + w), Tt = 0; Tt < 4; Tt++) P = at[Tt], b = f[P], i = b.indexOf("px") !== -1 ? parseFloat(b) : et(this.t, P, parseFloat(b), b.replace(T, "")) || 0, k = i !== n[P] ? Tt < 2 ? -n.ieOffsetX : -n.ieOffsetY : Tt < 2 ? p - n.ieOffsetX : d - n.ieOffsetY, c[P] = (n[P] = Math.round(i - k * (0 === Tt || 2 === Tt ? 1 : C))) + "px"
                            }
                        }
                    },
                    Yt = U.set3DTransformRatio = U.setTransformRatio = function(t) {
                        var e, i, n, r, o, a, s, l, h, u, c, f, p, m, v, g, _, y, x, w, b, T, S, P = this.data,
                            k = this.t.style,
                            C = P.rotation,
                            A = P.rotationX,
                            M = P.rotationY,
                            O = P.scaleX,
                            E = P.scaleY,
                            D = P.scaleZ,
                            I = P.x,
                            L = P.y,
                            R = P.z,
                            z = P.svg,
                            B = P.perspective,
                            N = P.force3D,
                            j = P.skewY,
                            X = P.skewX;
                        if (j && (X += j, C += j), ((1 === t || 0 === t) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !R && !B && !M && !A && 1 === D || Ct && z || !Dt) return void(C || X || z ? (C *= F, T = X * F, S = 1e5, i = Math.cos(C) * O, o = Math.sin(C) * O, n = Math.sin(C - T) * -E, a = Math.cos(C - T) * E, T && "simple" === P.skewType && (e = Math.tan(T - j * F), e = Math.sqrt(1 + e * e), n *= e, a *= e, j && (e = Math.tan(j * F), e = Math.sqrt(1 + e * e), i *= e, o *= e)), z && (I += P.xOrigin - (P.xOrigin * i + P.yOrigin * n) + P.xOffset, L += P.yOrigin - (P.xOrigin * o + P.yOrigin * a) + P.yOffset, Ct && (P.xPercent || P.yPercent) && (v = this.t.getBBox(), I += .01 * P.xPercent * v.width, L += .01 * P.yPercent * v.height), v = 1e-6, I < v && I > -v && (I = 0), L < v && L > -v && (L = 0)), x = (i * S | 0) / S + "," + (o * S | 0) / S + "," + (n * S | 0) / S + "," + (a * S | 0) / S + "," + I + "," + L + ")", z && Ct ? this.t.setAttribute("transform", "matrix(" + x) : k[Mt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + x) : k[Mt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + E + "," + I + "," + L + ")");
                        if (d && (v = 1e-4, O < v && O > -v && (O = D = 2e-5), E < v && E > -v && (E = D = 2e-5), !B || P.z || P.rotationX || P.rotationY || (B = 0)), C || X) C *= F, g = i = Math.cos(C), _ = o = Math.sin(C), X && (C -= X * F, g = Math.cos(C), _ = Math.sin(C), "simple" === P.skewType && (e = Math.tan((X - j) * F), e = Math.sqrt(1 + e * e), g *= e, _ *= e, P.skewY && (e = Math.tan(j * F), e = Math.sqrt(1 + e * e), i *= e, o *= e))), n = -_, a = g;
                        else {
                            if (!(M || A || 1 !== D || B || z)) return void(k[Mt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + L + "px," + R + "px)" + (1 !== O || 1 !== E ? " scale(" + O + "," + E + ")" : ""));
                            i = a = 1, n = o = 0
                        }
                        u = 1, r = s = l = h = c = f = 0, p = B ? -1 / B : 0, m = P.zOrigin, v = 1e-6, w = ",", b = "0", C = M * F, C && (g = Math.cos(C), _ = Math.sin(C), l = -_, c = p * -_, r = i * _, s = o * _, u = g, p *= g, i *= g, o *= g), C = A * F, C && (g = Math.cos(C), _ = Math.sin(C), e = n * g + r * _, y = a * g + s * _, h = u * _, f = p * _, r = n * -_ + r * g, s = a * -_ + s * g, u *= g, p *= g, n = e, a = y), 1 !== D && (r *= D, s *= D, u *= D, p *= D), 1 !== E && (n *= E, a *= E, h *= E, f *= E), 1 !== O && (i *= O, o *= O, l *= O, c *= O), (m || z) && (m && (I += r * -m, L += s * -m, R += u * -m + m), z && (I += P.xOrigin - (P.xOrigin * i + P.yOrigin * n) + P.xOffset, L += P.yOrigin - (P.xOrigin * o + P.yOrigin * a) + P.yOffset), I < v && I > -v && (I = b), L < v && L > -v && (L = b), R < v && R > -v && (R = 0)), x = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < v && i > -v ? b : i) + w + (o < v && o > -v ? b : o) + w + (l < v && l > -v ? b : l), x += w + (c < v && c > -v ? b : c) + w + (n < v && n > -v ? b : n) + w + (a < v && a > -v ? b : a), A || M || 1 !== D ? (x += w + (h < v && h > -v ? b : h) + w + (f < v && f > -v ? b : f) + w + (r < v && r > -v ? b : r), x += w + (s < v && s > -v ? b : s) + w + (u < v && u > -v ? b : u) + w + (p < v && p > -v ? b : p) + w) : x += ",0,0,0,0,1,0,", x += I + w + L + w + R + w + (B ? 1 + -R / B : 1) + ")", k[Mt] = x
                    };
                u = It.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, o, a, l) {
                        if (n._lastParsedTransform === l) return o;
                        n._lastParsedTransform = l;
                        var h, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (h = l[i], l[i] = e), u && (l.scale = u(_, t));
                        var c, f, p, d, m, v, y, x, w, b = t._gsTransform,
                            T = t.style,
                            S = 1e-6,
                            P = At.length,
                            k = l,
                            C = {},
                            A = "transformOrigin",
                            M = Ht(t, r, !0, k.parseTransform),
                            O = k.transform && ("function" == typeof k.transform ? k.transform(_, g) : k.transform);
                        if (M.skewType = k.skewType || M.skewType || s.defaultSkewType, n._transform = M, O && "string" == typeof O && Mt) f = V.style, f[Mt] = O, f.display = "block", f.position = "absolute", X.body.appendChild(V), c = Ht(V, null, !1), "simple" === M.skewType && (c.scaleY *= Math.cos(c.skewX * F)), M.svg && (v = M.xOrigin, y = M.yOrigin, c.x -= M.xOffset, c.y -= M.yOffset, (k.transformOrigin || k.svgOrigin) && (O = {}, Bt(t, lt(k.transformOrigin), O, k.svgOrigin, k.smoothOrigin, !0), v = O.xOrigin, y = O.yOrigin, c.x -= O.xOffset - M.xOffset, c.y -= O.yOffset - M.yOffset), (v || y) && (x = Vt(V, !0), c.x -= v - (v * x[0] + y * x[2]), c.y -= y - (v * x[1] + y * x[3]))), X.body.removeChild(V), c.perspective || (c.perspective = M.perspective), null != k.xPercent && (c.xPercent = ut(k.xPercent, M.xPercent)), null != k.yPercent && (c.yPercent = ut(k.yPercent, M.yPercent));
                        else if ("object" == typeof k) {
                            if (c = {
                                    scaleX: ut(null != k.scaleX ? k.scaleX : k.scale, M.scaleX),
                                    scaleY: ut(null != k.scaleY ? k.scaleY : k.scale, M.scaleY),
                                    scaleZ: ut(k.scaleZ, M.scaleZ),
                                    x: ut(k.x, M.x),
                                    y: ut(k.y, M.y),
                                    z: ut(k.z, M.z),
                                    xPercent: ut(k.xPercent, M.xPercent),
                                    yPercent: ut(k.yPercent, M.yPercent),
                                    perspective: ut(k.transformPerspective, M.perspective)
                                }, m = k.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (f in m) k[f] = m[f];
                                else k.rotation = m;
                            "string" == typeof k.x && k.x.indexOf("%") !== -1 && (c.x = 0, c.xPercent = ut(k.x, M.xPercent)), "string" == typeof k.y && k.y.indexOf("%") !== -1 && (c.y = 0, c.yPercent = ut(k.y, M.yPercent)), c.rotation = ct("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : M.rotation, M.rotation, "rotation", C), Dt && (c.rotationX = ct("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : M.rotationX || 0, M.rotationX, "rotationX", C), c.rotationY = ct("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : M.rotationY || 0, M.rotationY, "rotationY", C)), c.skewX = ct(k.skewX, M.skewX), c.skewY = ct(k.skewY, M.skewY)
                        }
                        for (Dt && null != k.force3D && (M.force3D = k.force3D, d = !0), p = M.force3D || M.z || M.rotationX || M.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == k.scale || (c.scaleZ = 1); --P > -1;) w = At[P], O = c[w] - M[w], (O > S || O < -S || null != k[w] || null != N[w]) && (d = !0, o = new xt(M, w, M[w], O, o), w in C && (o.e = C[w]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                        return O = k.transformOrigin, M.svg && (O || k.svgOrigin) && (v = M.xOffset, y = M.yOffset, Bt(t, lt(O), c, k.svgOrigin, k.smoothOrigin), o = wt(M, "xOrigin", (b ? M : c).xOrigin, c.xOrigin, o, A), o = wt(M, "yOrigin", (b ? M : c).yOrigin, c.yOrigin, o, A), v === M.xOffset && y === M.yOffset || (o = wt(M, "xOffset", b ? v : M.xOffset, M.xOffset, o, A), o = wt(M, "yOffset", b ? y : M.yOffset, M.yOffset, o, A)), O = "0px 0px"), (O || Dt && p && M.zOrigin) && (Mt ? (d = !0, w = Et, O = (O || tt(t, w, r, !1, "50% 50%")) + "", o = new xt(T, w, 0, 0, o, (-1), A), o.b = T[w], o.plugin = a, Dt ? (f = M.zOrigin, O = O.split(" "), M.zOrigin = (O.length > 2 && (0 === f || "0px" !== O[2]) ? parseFloat(O[2]) : f) || 0,
                            o.xs0 = o.e = O[0] + " " + (O[1] || "50%") + " 0px", o = new xt(M, "zOrigin", 0, 0, o, (-1), o.n), o.b = f, o.xs0 = o.e = M.zOrigin) : o.xs0 = o.e = O) : lt(O + "", M)), d && (n._transformType = M.svg && Ct || !p && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), u && (l.scale = u), o
                    },
                    prefix: !0
                }), Pt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Pt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, o, a, s) {
                        e = this.format(e);
                        var l, h, u, c, f, p, d, m, v, g, _, y, x, w, b, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = Q(S[h])), f = c = tt(t, S[h], r, !1, "0px"), f.indexOf(" ") !== -1 && (c = f.split(" "), f = c[0], c = c[1]), p = u = l[h], d = parseFloat(f), y = f.substr((d + "").length), x = "=" === p.charAt(1), x ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), _ = p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p), _ = p.substr((m + "").length)), "" === _ && (_ = n[i] || y), _ !== y && (w = et(t, "borderLeft", d, y), b = et(t, "borderTop", d, y), "%" === _ ? (f = w / v * 100 + "%", c = b / g * 100 + "%") : "em" === _ ? (T = et(t, "borderLeft", 1, "em"), f = w / T + "em", c = b / T + "em") : (f = w + "px", c = b + "px"), x && (p = parseFloat(f) + m + _, u = parseFloat(c) + m + _)), a = bt(P, S[h], f + " " + c, p + " " + u, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: gt("0px 0px 0px 0px", !1, !0)
                }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, o, a) {
                        return bt(t.style, i, this.format(tt(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o)
                    },
                    prefix: !0,
                    formatter: gt("0px 0px", !1, !0)
                }), Pt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, o, a) {
                        var s, l, h, u, c, f, p = "background-position",
                            d = r || J(t, null),
                            m = this.format((d ? v ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (m.indexOf("%") !== -1 != (g.indexOf("%") !== -1) && g.split(",").length < 2 && (f = tt(t, "backgroundImage").replace(O, ""), f && "none" !== f)) {
                            for (s = m.split(" "), l = g.split(" "), H.setAttribute("src", f), h = 2; --h > -1;) m = s[h], u = m.indexOf("%") !== -1, u !== (l[h].indexOf("%") !== -1) && (c = 0 === h ? t.offsetWidth - H.width : t.offsetHeight - H.height, s[h] = u ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                            m = s.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, o, a)
                    },
                    formatter: lt
                }), Pt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return t += "", lt(t.indexOf(" ") === -1 ? t + " " + t : t)
                    }
                }), Pt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Pt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Pt("transformStyle", {
                    prefix: !0
                }), Pt("backfaceVisibility", {
                    prefix: !0
                }), Pt("userSelect", {
                    prefix: !0
                }), Pt("margin", {
                    parser: _t("marginTop,marginRight,marginBottom,marginLeft")
                }), Pt("padding", {
                    parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Pt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, o, a) {
                        var s, l, h;
                        return v < 9 ? (l = t.currentStyle, h = v < 8 ? " " : ",", s = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (s = this.format(tt(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, o, a)
                    }
                }), Pt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Pt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), Pt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, o, a) {
                        var s = tt(t, "borderTopWidth", r, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(T, "");
                        return "px" !== h && (s = parseFloat(s) / et(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(s + " " + tt(t, "borderTopStyle", r, !1, "solid") + " " + tt(t, "borderTopColor", r, !1, "#000")), l.join(" "), o, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                    }
                }), Pt("borderWidth", {
                    parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Pt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, o) {
                        var a = t.style,
                            s = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new xt(a, s, 0, 0, r, (-1), i, (!1), 0, a[s], e)
                    }
                });
                var Wt = function(t) {
                    var e, i = this.t,
                        n = i.filter || tt(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1 && n.indexOf("oader(") === -1 ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), n.indexOf("pacity") === -1 ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(S, "opacity=" + r))
                };
                Pt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, o, a) {
                        var s = parseFloat(tt(t, "opacity", r, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), h && 1 === s && "hidden" === tt(t, "visibility", r) && 0 !== e && (s = 0), W ? o = new xt(l, "opacity", s, e - s, o) : (o = new xt(l, "opacity", 100 * s, 100 * (e - s), o), o.xn1 = h ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = a, o.setRatio = Wt), h && (o = new xt(l, "visibility", 0, 0, o, (-1), null, (!1), 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var qt = function(t, e) {
                        e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Gt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : qt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Pt("className", {
                    parser: function(t, e, n, o, a, s, l) {
                        var h, u, c, f, p, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = o._classNamePT = new xt(t, n, 0, 0, a, 2), a.setRatio = Gt, a.pr = -11, i = !0, a.b = d, u = nt(t, r), c = t._gsClassPT) {
                            for (f = {}, p = c.data; p;) f[p.p] = 1, p = p._next;
                            c.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = rt(t, u, nt(t), l, f), t.setAttribute("class", d), a.data = h.firstMPT, t.style.cssText = m, a = a.xfirst = o.parse(t, h.difs, a, s)
                    }
                });
                var Zt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, o, a = this.t.style,
                            s = h.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], h[i] && (h[i].parse === s ? r = !0 : i = "transformOrigin" === i ? Et : h[i].p), qt(a, i);
                        r && (qt(a, Mt), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Pt("clearProps", {
                    parser: function(t, e, n, r, o) {
                        return o = new xt(t, n, 0, 0, o, 2), o.setRatio = Zt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                    }
                }), u = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = u.length; Tt--;) kt(u[Tt]);
                u = s.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, o, l) {
                    if (!t.nodeType) return !1;
                    this._target = g = t, this._tween = o, this._vars = e, _ = l, c = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = J(t, ""), a = this._overwriteProps;
                    var u, d, v, y, x, w, b, T, S, k = t.style;
                    if (f && "" === k.zIndex && (u = tt(t, "zIndex", r), "auto" !== u && "" !== u || this._addLazySet(k, "zIndex", 0)), "string" == typeof e && (y = k.cssText, u = nt(t, r), k.cssText = y + ";" + e, u = rt(t, u, nt(t)).difs, !W && P.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, k.cssText = y), e.className ? this._firstPT = d = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                        for (S = 3 === this._transformType, Mt ? p && (f = !0, "" === k.zIndex && (b = tt(t, "zIndex", r), "auto" !== b && "" !== b || this._addLazySet(k, "zIndex", 0)), m && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : k.zoom = 1, v = d; v && v._next;) v = v._next;
                        T = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, v), T.setRatio = Mt ? Yt : Ut, T.data = this._transform || Ht(t, r, !0), T.tween = o, T.pr = -1, a.pop()
                    }
                    if (i) {
                        for (; d;) {
                            for (w = d._next, v = y; v && v.pr > d.pr;) v = v._next;
                            (d._prev = v ? v._prev : x) ? d._prev._next = d: y = d, (d._next = v) ? v._prev = d : x = d, d = w
                        }
                        this._firstPT = y
                    }
                    return !0
                }, u.parse = function(t, e, i, o) {
                    var a, s, l, u, f, p, d, m, v, y, x = t.style;
                    for (a in e) {
                        if (p = e[a], "function" == typeof p && (p = p(_, g)), s = h[a]) i = s.parse(t, p, a, this, i, o, e);
                        else {
                            if ("--" === a.substr(0, 2)) {
                                this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(a) + "", p + "", a, !1, a);
                                continue
                            }
                            f = tt(t, a, r) + "", v = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || a.indexOf("Color") !== -1 || v && C.test(p) ? (v || (p = dt(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = bt(x, a, f, p, !0, "transparent", i, 0, o)) : v && z.test(p) ? i = bt(x, a, f, p, !0, null, i, 0, o) : (l = parseFloat(f), d = l || 0 === l ? f.substr((l + "").length) : "", "" !== f && "auto" !== f || ("width" === a || "height" === a ? (l = st(t, a, r), d = "px") : "left" === a || "top" === a ? (l = it(t, a, r), d = "px") : (l = "opacity" !== a ? 0 : 1, d = "")), y = v && "=" === p.charAt(1), y ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(T, "")) : (u = parseFloat(p), m = v ? p.replace(T, "") : ""), "" === m && (m = a in n ? n[a] : d), p = u || 0 === u ? (y ? u + l : u) + m : e[a], d !== m && ("" === m && "lineHeight" !== a || (u || 0 === u) && l && (l = et(t, a, l, d), "%" === m ? (l /= et(t, a, 100, "%") / 100, e.strictUnits !== !0 && (f = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= et(t, a, 1, m) : "px" !== m && (u = et(t, a, u, m), m = "px"), y && (u || 0 === u) && (p = u + l + m))), y && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== x[a] && (p || p + "" != "NaN" && null != p) ? (i = new xt(x, a, u || l || 0, 0, i, (-1), a, (!1), 0, f, p), i.xs0 = "none" !== p || "display" !== a && a.indexOf("Style") === -1 ? p : f) : G("invalid " + a + " tween value: " + e[a]) : (i = new xt(x, a, l, u - l, i, 0, a, c !== !1 && ("px" === m || "zIndex" === a), 0, f, p), i.xs0 = m))
                        }
                        o && i && !i.plugin && (i.plugin = o)
                    }
                    return i
                }, u.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        o = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < o && e > -o && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                        else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                        else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                        else {
                                            for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        } else r.type === -1 ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && r.type !== -1)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
                }, u._enableTransforms = function(t) {
                    this._transform = this._transform || Ht(this._target, r, !0), this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
                };
                var Kt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Kt, n.data = this
                }, u._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, u._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, u._kill = function(e) {
                    var i, n, r, o = e;
                    if (e.autoAlpha || e.alpha) {
                        o = {};
                        for (n in e) o[n] = e[n];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, o)
                };
                var Qt = function(t, e, i) {
                    var n, r, o, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Qt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], a = o.type, o.style && (e.push(nt(o)), i && i.push(o)), 1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || Qt(o, e, i)
                };
                return s.cascadeTo = function(t, i, n) {
                    var r, o, a, s, l = e.to(t, i, n),
                        h = [l],
                        u = [],
                        c = [],
                        f = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Qt(t, u, f), l.render(i, !0, !0), Qt(t, c), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                        if (o = rt(f[r], u[r], c[r]), o.firstMPT) {
                            o = o.difs;
                            for (a in n) p[a] && (o[a] = n[a]);
                            s = {};
                            for (a in o) s[a] = u[r][a];
                            h.push(e.fromTo(f[r], i, s, o))
                        }
                    return h
                }, t.activate([s]), s
            }, !0),
                function() {
                    var t = o._gsDefine.plugin({
                            propName: "roundProps",
                            version: "1.6.0",
                            priority: -1,
                            API: 2,
                            init: function(t, e, i) {
                                return this._tween = i, !0
                            }
                        }),
                        e = function(t) {
                            for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                        },
                        i = t.prototype;
                    i._onInitAllProps = function() {
                        for (var t, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = o.length, s = {}, l = r._propLookup.roundProps; --a > -1;) s[o[a]] = Math.round;
                        for (a = o.length; --a > -1;)
                            for (t = o[a], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(s) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                        return !1
                    }, i._add = function(t, e, i, n) {
                        this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                    }
                }(),
                function() {
                    o._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.6.1",
                        init: function(t, e, i, n) {
                            var r, o;
                            if ("function" != typeof t.setAttribute) return !1;
                            for (r in e) o = e[r], "function" == typeof o && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                            return !0
                        }
                    })
                }(), o._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, n) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var r, o, a, s, l, h, u = e.useRadians === !0 ? 2 * Math.PI : 360,
                        c = 1e-6;
                    for (r in e) "useRadians" !== r && (s = e[r], "function" == typeof s && (s = s(n, t)), h = (s + "").split("_"), o = h[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), s = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? a + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, l = s - a, h.length && (o = h.join("_"), o.indexOf("short") !== -1 && (l %= u, l !== l % (u / 2) && (l = l < 0 ? l + u : l - u)), o.indexOf("_cw") !== -1 && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : o.indexOf("ccw") !== -1 && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > c || l < -c) && (this._addTween(t, r, a, a + l, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, o._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = o.GreenSockGlobals || o,
                    a = r.com.greensock,
                    s = 2 * Math.PI,
                    l = Math.PI / 2,
                    h = a._class,
                    u = function(e, i) {
                        var n = h("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = t.register || function() {},
                    f = function(t, e, i, n, r) {
                        var o = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(o, t), o
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    d = function(e, i) {
                        var n = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    m = f("Back", d("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), d("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), d("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    v = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = v.prototype = new t;
                return g.constructor = v, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, v.ease = new v(.7, .7), g.config = v.config = function(t, e, i) {
                    return new v(t, e, i)
                }, e = h("easing.SteppedEase", function(t, e) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, g.config = e.config = function(t, i) {
                    return new e(t, i)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, o, a, s, l = e.taper || "none", h = [], u = 0, c = 0 | (e.points || 20), f = c, d = e.randomize !== !1, m = e.clamp === !0, v = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / c * f, n = v ? v.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (o = 1 - i, r = o * o * g) : "in" === l ? r = i * i * g : i < .5 ? (o = 2 * i, r = o * o * .5 * g) : (o = 2 * (1 - i), r = o * o * .5 * g), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[u++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function(t, e) {
                        return t.x - e.x
                    }), s = new p(1, 1, null), f = c; --f > -1;) a = h[f], s = new p(a.x, a.y, s);
                    this._prev = new p(0, 0, 0 !== s.t ? s : s.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, f("Bounce", u("BounceOut", function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = t < .5;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), f("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                        }, !0),
                        o = r.prototype = new t;
                    return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, f("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), f("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), f("Sine", u("SineOut", function(t) {
                    return Math.sin(t * l)
                }), u("SineIn", function(t) {
                    return -Math.cos(t * l) + 1
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), m
            }, !0)
        }), o._gsDefine && o._gsQueue.pop()(),
            function(i, o) {
                "use strict";
                var a = {},
                    s = i.document,
                    l = i.GreenSockGlobals = i.GreenSockGlobals || i;
                if (!l.TweenLite) {
                    var h, u, c, f, p, d = function(t) {
                            var e, i = t.split("."),
                                n = l;
                            for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                            return n
                        },
                        m = d("com.greensock"),
                        v = 1e-10,
                        g = function(t) {
                            var e, i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++]));
                            return i
                        },
                        _ = function() {},
                        y = function() {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function(i) {
                                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                            }
                        }(),
                        x = {},
                        w = function(i, s, h, u) {
                            this.sc = x[i] ? x[i].sc : [], x[i] = this, this.gsClass = null, this.func = h;
                            var c = [];
                            this.check = function(f) {
                                for (var p, m, v, g, _ = s.length, y = _; --_ > -1;)(p = x[s[_]] || new w(s[_], [])).gsClass ? (c[_] = p.gsClass, y--) : f && p.sc.push(this);
                                if (0 === y && h) {
                                    if (m = ("com.greensock." + i).split("."), v = m.pop(), g = d(m.join("."))[v] = this.gsClass = h.apply(h, c), u)
                                        if (l[v] = a[v] = g, "undefined" != typeof t && t.exports)
                                            if (i === o) {
                                                t.exports = a[o] = g;
                                                for (_ in a) g[_] = a[_]
                                            } else a[o] && (a[o][v] = g);
                                        else n = [], r = function() {
                                            return g
                                        }.apply(e, n), !(void 0 !== r && (t.exports = r));
                                    for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                                }
                            }, this.check(!0)
                        },
                        b = i._gsDefine = function(t, e, i, n) {
                            return new w(t, e, i, n)
                        },
                        T = m._class = function(t, e, i) {
                            return e = e || function() {}, b(t, [], function() {
                                return e
                            }, i), e
                        };
                    b.globals = l;
                    var S = [0, 0, 1, 1],
                        P = T("easing.Ease", function(t, e, i, n) {
                            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? S.concat(e) : S
                        }, !0),
                        k = P.map = {},
                        C = P.register = function(t, e, i, n) {
                            for (var r, o, a, s, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                                for (o = l[h], r = n ? T("easing." + o, null, !0) : m.easing[o] || {}, a = u.length; --a > -1;) s = u[a], k[o + "." + s] = k[s + o] = r[s] = t.getRatio ? t : t[s] || new t
                        };
                    for (c = P.prototype, c._calcEnd = !1, c.getRatio = function(t) {
                        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            i = this._power,
                            n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                    }, h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = h.length; --u > -1;) c = h[u] + ",Power" + u, C(new P(null, null, 1, u), c, "easeOut", !0), C(new P(null, null, 2, u), c, "easeIn" + (0 === u ? ",easeNone" : "")), C(new P(null, null, 3, u), c, "easeInOut");
                    k.linear = m.easing.Linear.easeIn, k.swing = m.easing.Quad.easeInOut;
                    var A = T("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    c = A.prototype, c.addEventListener = function(t, e, i, n, r) {
                        r = r || 0;
                        var o, a, s = this._listeners[t],
                            l = 0;
                        for (this !== f || p || f.wake(), null == s && (this._listeners[t] = s = []), a = s.length; --a > -1;) o = s[a], o.c === e && o.s === i ? s.splice(a, 1) : 0 === l && o.pr < r && (l = a + 1);
                        s.splice(l, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: r
                        })
                    }, c.removeEventListener = function(t, e) {
                        var i, n = this._listeners[t];
                        if (n)
                            for (i = n.length; --i > -1;)
                                if (n[i].c === e) return void n.splice(i, 1)
                    }, c.dispatchEvent = function(t) {
                        var e, i, n, r = this._listeners[t];
                        if (r)
                            for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                                type: t,
                                target: i
                            }) : n.c.call(n.s || i))
                    };
                    var M = i.requestAnimationFrame,
                        O = i.cancelAnimationFrame,
                        E = Date.now || function() {
                            return (new Date).getTime()
                        },
                        D = E();
                    for (h = ["ms", "moz", "webkit", "o"], u = h.length; --u > -1 && !M;) M = i[h[u] + "RequestAnimationFrame"], O = i[h[u] + "CancelAnimationFrame"] || i[h[u] + "CancelRequestAnimationFrame"];
                    T("Ticker", function(t, e) {
                        var i, n, r, o, a, l = this,
                            h = E(),
                            u = !(e === !1 || !M) && "auto",
                            c = 500,
                            d = 33,
                            m = "tick",
                            g = function(t) {
                                var e, s, u = E() - D;
                                u > c && (h += u - d), D += u, l.time = (D - h) / 1e3, e = l.time - a, (!i || e > 0 || t === !0) && (l.frame++, a += e + (e >= o ? .004 : o - e), s = !0), t !== !0 && (r = n(g)), s && l.dispatchEvent(m)
                            };
                        A.call(l), l.time = l.frame = 0, l.tick = function() {
                            g(!0)
                        }, l.lagSmoothing = function(t, e) {
                            return arguments.length ? (c = t || 1 / v, void(d = Math.min(e, c, 0))) : c < 1 / v
                        }, l.sleep = function() {
                            null != r && (u && O ? O(r) : clearTimeout(r), n = _, r = null, l === f && (p = !1))
                        }, l.wake = function(t) {
                            null !== r ? l.sleep() : t ? h += -D + (D = E()) : l.frame > 10 && (D = E() - c + 5), n = 0 === i ? _ : u && M ? M : function(t) {
                                return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                            }, l === f && (p = !0), g(2)
                        }, l.fps = function(t) {
                            return arguments.length ? (i = t, o = 1 / (i || 60), a = this.time + o, void l.wake()) : i
                        }, l.useRAF = function(t) {
                            return arguments.length ? (l.sleep(), u = t, void l.fps(i)) : u
                        }, l.fps(t), setTimeout(function() {
                            "auto" === u && l.frame < 5 && "hidden" !== s.visibilityState && l.useRAF(!1)
                        }, 1500)
                    }), c = m.Ticker.prototype = new m.events.EventDispatcher, c.constructor = m.Ticker;
                    var I = T("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, J) {
                            p || f.wake();
                            var i = this.vars.useFrames ? Q : J;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    f = I.ticker = new m.Ticker, c = I.prototype, c._dirty = c._gc = c._initted = c._paused = !1, c._totalTime = c._time = 0, c._rawPrevTime = -1, c._next = c._last = c._onUpdate = c._timeline = c.timeline = null, c._paused = !1;
                    var L = function() {
                        p && E() - D > 2e3 && ("hidden" !== s.visibilityState || !f.lagSmoothing()) && f.wake();
                        var t = setTimeout(L, 2e3);
                        t.unref && t.unref()
                    };
                    L(), c.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, c.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, c.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, c.seek = function(t, e) {
                        return this.totalTime(Number(t), e !== !1)
                    }, c.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
                    }, c.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, c.render = function(t, e, i) {}, c.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, c.isActive = function() {
                        var t, e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
                    }, c._enabled = function(t, e) {
                        return p || f.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, c._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, c.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, c._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, c._swapSelfInParams = function(t) {
                        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                        return i
                    }, c._callback = function(t) {
                        var e = this.vars,
                            i = e[t],
                            n = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this,
                            o = n ? n.length : 0;
                        switch (o) {
                            case 0:
                                i.call(r);
                                break;
                            case 1:
                                i.call(r, n[0]);
                                break;
                            case 2:
                                i.call(r, n[0], n[1]);
                                break;
                            default:
                                i.apply(r, n)
                        }
                    }, c.eventCallback = function(t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = y(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, c.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, c.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, c.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, c.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, c.totalTime = function(t, e, i) {
                        if (p || f.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration,
                                    r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (N.length && et(), this.render(t, e, !1), N.length && et())
                        }
                        return this
                    }, c.progress = c.totalProgress = function(t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, c.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, c.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, c.timeScale = function(t) {
                        if (!arguments.length) return this._timeScale;
                        var e, i;
                        for (t = t || v, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                        return this
                    }, c.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, c.paused = function(t) {
                        if (!arguments.length) return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (p || t || f.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var R = T("core.SimpleTimeline", function(t) {
                        I.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    c = R.prototype = new I, c.constructor = R, c.kill()._gc = !1, c._first = c._last = c._recent = null, c._sortChildren = !1, c.add = c.insert = function(t, e, i, n) {
                        var r, o;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, c._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, c.render = function(t, e, i) {
                        var n, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                    }, c.rawTime = function() {
                        return p || f.wake(), this._totalTime
                    };
                    var z = T("TweenLite", function(t, e, n) {
                            if (I.call(this, e, n), this.render = z.prototype.render, null == t) throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : z.selector(t) || t;
                            var r, o, a, s = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? K[z.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l], (s || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                                for (this._targets = a = g(t), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) o = a[r], o ? "string" != typeof o ? o.length && o !== i && o[0] && (o[0] === i || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(g(o))) : (this._siblings[r] = it(o, this, !1), 1 === l && this._siblings[r].length > 1 && rt(o, this, null, 1, this._siblings[r])) : (o = a[r--] = z.selector(o), "string" == typeof o && a.splice(r + 1, 1)) : a.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = it(t, this, !1), 1 === l && this._siblings.length > 1 && rt(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === e && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -v, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        F = function(t) {
                            return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
                        },
                        B = function(t, e) {
                            var i, n = {};
                            for (i in t) Z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                            t.css = n
                        };
                    c = z.prototype = new I, c.constructor = z, c.kill()._gc = !1, c.ratio = 0,
                        c._firstPT = c._targets = c._overwrittenProps = c._startAt = null, c._notifyPluginsOfEnabled = c._lazy = !1, z.version = "1.20.3", z.defaultEase = c._ease = new P(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = f, z.autoSleep = 120, z.lagSmoothing = function(t, e) {
                        f.lagSmoothing(t, e)
                    }, z.selector = i.$ || i.jQuery || function(t) {
                        var e = i.$ || i.jQuery;
                        return e ? (z.selector = e, e(t)) : "undefined" == typeof s ? t : s.querySelectorAll ? s.querySelectorAll(t) : s.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    };
                    var N = [],
                        j = {},
                        X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        $ = /[\+-]=-?[\.\d]/,
                        V = function(t) {
                            for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < n && e > -n && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        },
                        H = function(t, e, i, n) {
                            var r, o, a, s, l, h, u, c = [],
                                f = 0,
                                p = "",
                                d = 0;
                            for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, r = t.match(X) || [], o = e.match(X) || [], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), l = o.length, s = 0; s < l; s++) u = o[s], h = e.substr(f, e.indexOf(u, f) - f), p += h || !s ? h : ",", f += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), u === r[s] || r.length <= s ? p += u : (p && (c.push(p), p = ""), a = parseFloat(r[s]), c.push(a), c._firstPT = {
                                _next: c._firstPT,
                                t: c,
                                p: c.length - 1,
                                s: a,
                                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                                f: 0,
                                m: d && d < 4 ? Math.round : 0
                            }), f += u.length;
                            return p += e.substr(f), p && c.push(p), c.setRatio = V, $.test(e) && (c.end = null), c
                        },
                        U = function(t, e, i, n, r, o, a, s, l) {
                            "function" == typeof n && (n = n(l || 0, t));
                            var h, u = typeof t[e],
                                c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                f = "get" !== i ? i : c ? a ? t[c](a) : t[c]() : t[e],
                                p = "string" == typeof n && "=" === n.charAt(1),
                                d = {
                                    t: t,
                                    p: e,
                                    s: f,
                                    f: "function" === u,
                                    pg: 0,
                                    n: r || e,
                                    m: o ? "function" == typeof o ? o : Math.round : 0,
                                    pr: 0,
                                    c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - f || 0
                                };
                            if (("number" != typeof f || "number" != typeof n && !p) && (a || isNaN(f) || !p && isNaN(n) || "boolean" == typeof f || "boolean" == typeof n ? (d.fp = a, h = H(f, p ? parseFloat(d.s) + d.c : n, s || z.defaultStringFilter, d), d = {
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || e,
                                    pr: 0,
                                    m: 0
                                }) : (d.s = parseFloat(f), p || (d.c = parseFloat(n) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d
                        },
                        Y = z._internals = {
                            isArray: y,
                            isSelector: F,
                            lazyTweens: N,
                            blobDif: H
                        },
                        W = z._plugins = {},
                        q = Y.tweenLookup = {},
                        G = 0,
                        Z = Y.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1
                        },
                        K = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            "true": 1,
                            "false": 0
                        },
                        Q = I._rootFramesTimeline = new R,
                        J = I._rootTimeline = new R,
                        tt = 30,
                        et = Y.lazyRender = function() {
                            var t, e = N.length;
                            for (j = {}; --e > -1;) t = N[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            N.length = 0
                        };
                    J._startTime = f.time, Q._startTime = f.frame, J._active = Q._active = !0, setTimeout(et, 1), I._updateRoot = z.render = function() {
                        var t, e, i;
                        if (N.length && et(), J.render((f.time - J._startTime) * J._timeScale, !1, !1), Q.render((f.frame - Q._startTime) * Q._timeScale, !1, !1), N.length && et(), f.frame >= tt) {
                            tt = f.frame + (parseInt(z.autoSleep, 10) || 120);
                            for (i in q) {
                                for (e = q[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete q[i]
                            }
                            if (i = J._first, (!i || i._paused) && z.autoSleep && !Q._first && 1 === f._listeners.tick.length) {
                                for (; i && i._paused;) i = i._next;
                                i || f.sleep()
                            }
                        }
                    }, f.addEventListener("tick", I._updateRoot);
                    var it = function(t, e, i) {
                            var n, r, o = t._gsTweenID;
                            if (q[o || (t._gsTweenID = o = "t" + G++)] || (q[o] = {
                                    target: t,
                                    tweens: []
                                }), e && (n = q[o].tweens, n[r = n.length] = e, i))
                                for (; --r > -1;) n[r] === e && n.splice(r, 1);
                            return q[o].tweens
                        },
                        nt = function(t, e, i, n) {
                            var r, o, a = t.vars.onOverwrite;
                            return a && (r = a(t, e, i, n)), a = z.onOverwrite, a && (o = a(t, e, i, n)), r !== !1 && o !== !1
                        },
                        rt = function(t, e, i, n, r) {
                            var o, a, s, l;
                            if (1 === n || n >= 4) {
                                for (l = r.length, o = 0; o < l; o++)
                                    if ((s = r[o]) !== e) s._gc || s._kill(null, t, e) && (a = !0);
                                    else if (5 === n) break;
                                return a
                            }
                            var h, u = e._startTime + v,
                                c = [],
                                f = 0,
                                p = 0 === e._duration;
                            for (o = r.length; --o > -1;)(s = r[o]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (h = h || ot(e, 0, p), 0 === ot(s, h, p) && (c[f++] = s)) : s._startTime <= u && s._startTime + s.totalDuration() / s._timeScale > u && ((p || !s._initted) && u - s._startTime <= 2e-10 || (c[f++] = s)));
                            for (o = f; --o > -1;)
                                if (s = c[o], 2 === n && s._kill(i, t, e) && (a = !0), 2 !== n || !s._firstPT && s._initted) {
                                    if (2 !== n && !nt(s, e)) continue;
                                    s._enabled(!1, !1) && (a = !0)
                                }
                            return a
                        },
                        ot = function(t, e, i) {
                            for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                                if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                                n = n._timeline
                            }
                            return o /= r, o > e ? o - e : i && o === e || !t._initted && o - e < 2 * v ? v : (o += t.totalDuration() / t._timeScale / r) > e + v ? 0 : o - e - v
                        };
                    c._init = function() {
                        var t, e, i, n, r, o, a = this.vars,
                            s = this._overwrittenProps,
                            l = this._duration,
                            h = !!a.immediateRender,
                            u = a.ease;
                        if (a.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in a.startAt) r[n] = a.startAt[n];
                            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = h && a.lazy !== !1, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = z.to(this.target, 0, r), h)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return
                        } else if (a.runBackwards && 0 !== l)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (h = !1), i = {};
                                for (n in a) Z[n] && "autoCSS" !== n || (i[n] = a[n]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && a.lazy !== !1, i.immediateRender = h, this._startAt = z.to(this.target, 0, i), h) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = u = u ? u instanceof P ? u : "function" == typeof u ? new P(u, a.easeParams) : k[u] || z.defaultEase : z.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
                        if (e && z._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = a.onUpdate, this._initted = !0
                    }, c._initProps = function(t, e, n, r, o) {
                        var a, s, l, h, u, c;
                        if (null == t) return !1;
                        j[t._gsTweenID] && et(), this.vars.css || t.style && t !== i && t.nodeType && W.css && this.vars.autoCSS !== !1 && B(this.vars, t);
                        for (a in this.vars)
                            if (c = this.vars[a], Z[a]) c && (c instanceof Array || c.push && y(c)) && c.join("").indexOf("{self}") !== -1 && (this.vars[a] = c = this._swapSelfInParams(c, this));
                            else if (W[a] && (h = new W[a])._onInitTween(t, this.vars[a], this, o)) {
                                for (this._firstPT = u = {
                                    _next: this._firstPT,
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: a,
                                    pg: 1,
                                    pr: h._priority,
                                    m: 0
                                }, s = h._overwriteProps.length; --s > -1;) e[h._overwriteProps[s]] = this._firstPT;
                                (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                            } else e[a] = U.call(this, t, a, "get", c, a, 0, null, this.vars.stringFilter, o);
                        return r && this._kill(r, t) ? this._initProps(t, e, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && rt(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, r, o)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (j[t._gsTweenID] = !0), l)
                    }, c.render = function(t, e, i) {
                        var n, r, o, a, s = this._time,
                            l = this._duration,
                            h = this._rawPrevTime;
                        if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || h === v && "isPause" !== this.data) && h !== t && (i = !0, h > v && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : v);
                        else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== v || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : v)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var u = t / l,
                                c = this._easeType,
                                f = this._easePower;
                            (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : t / l < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                        } else this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== s || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = h, N.push(this), void(this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && t !== -1e-4 && this._startAt.render(t, !0, i), e || (this._time !== s || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === v && a !== v && (this._rawPrevTime = 0)))
                        }
                    }, c._kill = function(t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
                        var n, r, o, a, s, l, h, u, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((y(e) || F(e)) && "number" != typeof e[0])
                            for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)
                                    if (e === this._targets[n]) {
                                        s = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                s = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (s) {
                                if (h = t || s, u = t !== r && "all" !== r && t !== s && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in h) s[o] && (c || (c = []), c.push(o));
                                    if ((c || !t) && !nt(this, i, e, c)) return !1
                                }
                                for (o in h)(a = s[o]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[o]), u && (r[o] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, c.invalidate = function() {
                        return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], I.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -v, this.render(Math.min(0, -this._delay))), this
                    }, c._enabled = function(t, e) {
                        if (p || f.wake(), t && this._gc) {
                            var i, n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1;) this._siblings[i] = it(n[i], this, !0);
                            else this._siblings = it(this.target, this, !0)
                        }
                        return I.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, z.to = function(t, e, i) {
                        return new z(t, e, i)
                    }, z.from = function(t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i)
                    }, z.fromTo = function(t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new z(t, e, n)
                    }, z.delayedCall = function(t, e, i, n, r) {
                        return new z(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, z.set = function(t, e) {
                        return new z(t, 0, e)
                    }, z.getTweensOf = function(t, e) {
                        if (null == t) return [];
                        t = "string" != typeof t ? t : z.selector(t) || t;
                        var i, n, r, o;
                        if ((y(t) || F(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;) n = n.concat(z.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1;)
                                for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                        } else if (t._gsTweenID)
                            for (n = it(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n || []
                    }, z.killTweensOf = z.killDelayedCallsTo = function(t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = z.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
                    };
                    var at = T("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = at.prototype
                    }, !0);
                    if (c = at.prototype, at.version = "1.19.0", at.API = 2, c._firstPT = null, c._addTween = U, c.setRatio = V, c._kill = function(t) {
                            var e, i = this._overwriteProps,
                                n = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                            return !1
                        }, c._mod = c._roundProps = function(t) {
                            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                        }, z._onPluginEvent = function(t, e) {
                            var i, n, r, o, a, s = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; s;) {
                                    for (a = s._next, n = r; n && n.pr > s.pr;) n = n._next;
                                    (s._prev = n ? n._prev : o) ? s._prev._next = s: r = s, (s._next = n) ? n._prev = s : o = s, s = a
                                }
                                s = e._firstPT = r
                            }
                            for (; s;) s.pg && "function" == typeof s.t[t] && s.t[t]() && (i = !0), s = s._next;
                            return i
                        }, at.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === at.API && (W[(new t[e])._propName] = t[e]);
                            return !0
                        }, b.plugin = function(t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, i = t.propName,
                                n = t.priority || 0,
                                r = t.overwriteProps,
                                o = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                a = T("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                    at.call(this, i, n), this._overwriteProps = r || []
                                }, t.global === !0),
                                s = a.prototype = new at(i);
                            s.constructor = a, a.API = t.API;
                            for (e in o) "function" == typeof t[e] && (s[o[e]] = t[e]);
                            return a.version = t.version, at.activate([a]), a
                        }, h = i._gsQueue) {
                        for (u = 0; u < h.length; u++) h[u]();
                        for (c in x) x[c].func || i.console.log("GSAP encountered missing dependency: " + c)
                    }
                    p = !1
                }
            }("undefined" != typeof t && t.exports && "undefined" != typeof i ? i : this || window, "TweenMax")
    }).call(e, i(19))
}, function(t, e, i) {
    "use strict";

    function n(t, e) {}

    function r(t) {
        return Object.prototype.toString.call(t).indexOf("Error") > -1
    }

    function o(t, e) {
        switch (typeof e) {
            case "undefined":
                return;
            case "object":
                return e;
            case "function":
                return e(t);
            case "boolean":
                return e ? t.params : void 0
        }
    }

    function a(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function s(t, e, i) {
        void 0 === e && (e = {});
        var n, r = i || l;
        try {
            n = r(t || "")
        } catch (o) {
            n = {}
        }
        for (var a in e) n[a] = e[a];
        return n
    }

    function l(t) {
        var e = {};
        return (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach(function(t) {
            var i = t.replace(/\+/g, " ").split("="),
                n = jt(i.shift()),
                r = i.length > 0 ? jt(i.join("=")) : null;
            void 0 === e[n] ? e[n] = r : Array.isArray(e[n]) ? e[n].push(r) : e[n] = [e[n], r]
        }), e) : e
    }

    function h(t) {
        var e = t ? Object.keys(t).map(function(e) {
            var i = t[e];
            if (void 0 === i) return "";
            if (null === i) return Nt(e);
            if (Array.isArray(i)) {
                var n = [];
                return i.forEach(function(t) {
                    void 0 !== t && (null === t ? n.push(Nt(e)) : n.push(Nt(e) + "=" + Nt(t)))
                }), n.join("&")
            }
            return Nt(e) + "=" + Nt(i)
        }).filter(function(t) {
            return t.length > 0
        }).join("&") : null;
        return e ? "?" + e : ""
    }

    function u(t, e, i, n) {
        var r = n && n.options.stringifyQuery,
            o = e.query || {};
        try {
            o = c(o)
        } catch (a) {}
        var s = {
            name: e.name || t && t.name,
            meta: t && t.meta || {},
            path: e.path || "/",
            hash: e.hash || "",
            query: o,
            params: e.params || {},
            fullPath: p(e, r),
            matched: t ? f(t) : []
        };
        return i && (s.redirectedFrom = p(i, r)), Object.freeze(s)
    }

    function c(t) {
        if (Array.isArray(t)) return t.map(c);
        if (t && "object" == typeof t) {
            var e = {};
            for (var i in t) e[i] = c(t[i]);
            return e
        }
        return t
    }

    function f(t) {
        for (var e = []; t;) e.unshift(t), t = t.parent;
        return e
    }

    function p(t, e) {
        var i = t.path,
            n = t.query;
        void 0 === n && (n = {});
        var r = t.hash;
        void 0 === r && (r = "");
        var o = e || h;
        return (i || "/") + o(n) + r
    }

    function d(t, e) {
        return e === $t ? t === e : !!e && (t.path && e.path ? t.path.replace(Xt, "") === e.path.replace(Xt, "") && t.hash === e.hash && m(t.query, e.query) : !(!t.name || !e.name) && (t.name === e.name && t.hash === e.hash && m(t.query, e.query) && m(t.params, e.params)))
    }

    function m(t, e) {
        if (void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e) return t === e;
        var i = Object.keys(t),
            n = Object.keys(e);
        return i.length === n.length && i.every(function(i) {
            var n = t[i],
                r = e[i];
            return "object" == typeof n && "object" == typeof r ? m(n, r) : String(n) === String(r)
        })
    }

    function v(t, e) {
        return 0 === t.path.replace(Xt, "/").indexOf(e.path.replace(Xt, "/")) && (!e.hash || t.hash === e.hash) && g(t.query, e.query)
    }

    function g(t, e) {
        for (var i in e)
            if (!(i in t)) return !1;
        return !0
    }

    function _(t) {
        if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || void 0 !== t.button && 0 !== t.button)) {
            if (t.currentTarget && t.currentTarget.getAttribute) {
                var e = t.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(e)) return
            }
            return t.preventDefault && t.preventDefault(), !0
        }
    }

    function y(t) {
        if (t)
            for (var e, i = 0; i < t.length; i++) {
                if (e = t[i], "a" === e.tag) return e;
                if (e.children && (e = y(e.children))) return e
            }
    }

    function x(t) {
        if (!x.installed || Lt !== t) {
            x.installed = !0, Lt = t;
            var e = function(t) {
                    return void 0 !== t
                },
                i = function(t, i) {
                    var n = t.$options._parentVnode;
                    e(n) && e(n = n.data) && e(n = n.registerRouteInstance) && n(t, i)
                };
            t.mixin({
                beforeCreate: function() {
                    e(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), t.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, i(this, this)
                },
                destroyed: function() {
                    i(this)
                }
            }), Object.defineProperty(t.prototype, "$router", {
                get: function() {
                    return this._routerRoot._router
                }
            }), Object.defineProperty(t.prototype, "$route", {
                get: function() {
                    return this._routerRoot._route
                }
            }), t.component("router-view", Rt), t.component("router-link", Ut);
            var n = t.config.optionMergeStrategies;
            n.beforeRouteEnter = n.beforeRouteLeave = n.beforeRouteUpdate = n.created
        }
    }

    function w(t, e, i) {
        var n = t.charAt(0);
        if ("/" === n) return t;
        if ("?" === n || "#" === n) return e + t;
        var r = e.split("/");
        i && r[r.length - 1] || r.pop();
        for (var o = t.replace(/^\//, "").split("/"), a = 0; a < o.length; a++) {
            var s = o[a];
            ".." === s ? r.pop() : "." !== s && r.push(s)
        }
        return "" !== r[0] && r.unshift(""), r.join("/")
    }

    function b(t) {
        var e = "",
            i = "",
            n = t.indexOf("#");
        n >= 0 && (e = t.slice(n), t = t.slice(0, n));
        var r = t.indexOf("?");
        return r >= 0 && (i = t.slice(r + 1), t = t.slice(0, r)), {
            path: t,
            query: i,
            hash: e
        }
    }

    function T(t) {
        return t.replace(/\/\//g, "/")
    }

    function S(t, e) {
        for (var i, n = [], r = 0, o = 0, a = "", s = e && e.delimiter || "/"; null != (i = Jt.exec(t));) {
            var l = i[0],
                h = i[1],
                u = i.index;
            if (a += t.slice(o, u), o = u + l.length, h) a += h[1];
            else {
                var c = t[o],
                    f = i[2],
                    p = i[3],
                    d = i[4],
                    m = i[5],
                    v = i[6],
                    g = i[7];
                a && (n.push(a), a = "");
                var _ = null != f && null != c && c !== f,
                    y = "+" === v || "*" === v,
                    x = "?" === v || "*" === v,
                    w = i[2] || s,
                    b = d || m;
                n.push({
                    name: p || r++,
                    prefix: f || "",
                    delimiter: w,
                    optional: x,
                    repeat: y,
                    partial: _,
                    asterisk: !!g,
                    pattern: b ? O(b) : g ? ".*" : "[^" + M(w) + "]+?"
                })
            }
        }
        return o < t.length && (a += t.substr(o)), a && n.push(a), n
    }

    function P(t, e) {
        return A(S(t, e))
    }

    function k(t) {
        return encodeURI(t).replace(/[\/?#]/g, function(t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function C(t) {
        return encodeURI(t).replace(/[?#]/g, function(t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function A(t) {
        for (var e = new Array(t.length), i = 0; i < t.length; i++) "object" == typeof t[i] && (e[i] = new RegExp("^(?:" + t[i].pattern + ")$"));
        return function(i, n) {
            for (var r = "", o = i || {}, a = n || {}, s = a.pretty ? k : encodeURIComponent, l = 0; l < t.length; l++) {
                var h = t[l];
                if ("string" != typeof h) {
                    var u, c = o[h.name];
                    if (null == c) {
                        if (h.optional) {
                            h.partial && (r += h.prefix);
                            continue
                        }
                        throw new TypeError('Expected "' + h.name + '" to be defined')
                    }
                    if (Wt(c)) {
                        if (!h.repeat) throw new TypeError('Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                        if (0 === c.length) {
                            if (h.optional) continue;
                            throw new TypeError('Expected "' + h.name + '" to not be empty')
                        }
                        for (var f = 0; f < c.length; f++) {
                            if (u = s(c[f]), !e[l].test(u)) throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '", but received `' + JSON.stringify(u) + "`");
                            r += (0 === f ? h.prefix : h.delimiter) + u
                        }
                    } else {
                        if (u = h.asterisk ? C(c) : s(c), !e[l].test(u)) throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + u + '"');
                        r += h.prefix + u
                    }
                } else r += h
            }
            return r
        }
    }

    function M(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }

    function O(t) {
        return t.replace(/([=!:$\/()])/g, "\\$1")
    }

    function E(t, e) {
        return t.keys = e, t
    }

    function D(t) {
        return t.sensitive ? "" : "i"
    }

    function I(t, e) {
        var i = t.source.match(/\((?!\?)/g);
        if (i)
            for (var n = 0; n < i.length; n++) e.push({
                name: n,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
        return E(t, e)
    }

    function L(t, e, i) {
        for (var n = [], r = 0; r < t.length; r++) n.push(F(t[r], e, i).source);
        var o = new RegExp("(?:" + n.join("|") + ")", D(i));
        return E(o, e)
    }

    function R(t, e, i) {
        return z(S(t, i), e, i)
    }

    function z(t, e, i) {
        Wt(e) || (i = e || i, e = []), i = i || {};
        for (var n = i.strict, r = i.end !== !1, o = "", a = 0; a < t.length; a++) {
            var s = t[a];
            if ("string" == typeof s) o += M(s);
            else {
                var l = M(s.prefix),
                    h = "(?:" + s.pattern + ")";
                e.push(s), s.repeat && (h += "(?:" + l + h + ")*"), h = s.optional ? s.partial ? l + "(" + h + ")?" : "(?:" + l + "(" + h + "))?" : l + "(" + h + ")", o += h
            }
        }
        var u = M(i.delimiter || "/"),
            c = o.slice(-u.length) === u;
        return n || (o = (c ? o.slice(0, -u.length) : o) + "(?:" + u + "(?=$))?"), o += r ? "$" : n && c ? "" : "(?=" + u + "|$)", E(new RegExp("^" + o, D(i)), e)
    }

    function F(t, e, i) {
        return Wt(e) || (i = e || i, e = []), i = i || {}, t instanceof RegExp ? I(t, e) : Wt(t) ? L(t, e, i) : R(t, e, i)
    }

    function B(t, e, i) {
        try {
            var n = te[t] || (te[t] = qt.compile(t));
            return n(e || {}, {
                pretty: !0
            })
        } catch (r) {
            return ""
        }
    }

    function N(t, e, i, n) {
        var r = e || [],
            o = i || Object.create(null),
            a = n || Object.create(null);
        t.forEach(function(t) {
            j(r, o, a, t)
        });
        for (var s = 0, l = r.length; s < l; s++) "*" === r[s] && (r.push(r.splice(s, 1)[0]), l--, s--);
        return {
            pathList: r,
            pathMap: o,
            nameMap: a
        }
    }

    function j(t, e, i, n, r, o) {
        var a = n.path,
            s = n.name,
            l = n.pathToRegexpOptions || {},
            h = $(a, r, l.strict);
        "boolean" == typeof n.caseSensitive && (l.sensitive = n.caseSensitive);
        var u = {
            path: h,
            regex: X(h, l),
            components: n.components || {
                "default": n.component
            },
            instances: {},
            name: s,
            parent: r,
            matchAs: o,
            redirect: n.redirect,
            beforeEnter: n.beforeEnter,
            meta: n.meta || {},
            props: null == n.props ? {} : n.components ? n.props : {
                "default": n.props
            }
        };
        if (n.children && n.children.forEach(function(n) {
                var r = o ? T(o + "/" + n.path) : void 0;
                j(t, e, i, n, u, r)
            }), void 0 !== n.alias) {
            var c = Array.isArray(n.alias) ? n.alias : [n.alias];
            c.forEach(function(o) {
                var a = {
                    path: o,
                    children: n.children
                };
                j(t, e, i, a, r, u.path || "/")
            })
        }
        e[u.path] || (t.push(u.path), e[u.path] = u), s && (i[s] || (i[s] = u))
    }

    function X(t, e) {
        var i = qt(t, [], e);
        return i
    }

    function $(t, e, i) {
        return i || (t = t.replace(/\/$/, "")), "/" === t[0] ? t : null == e ? t : T(e.path + "/" + t)
    }

    function V(t, e, i, n) {
        var r = "string" == typeof t ? {
            path: t
        } : t;
        if (r.name || r._normalized) return r;
        if (!r.path && r.params && e) {
            r = H({}, r), r._normalized = !0;
            var o = H(H({}, e.params), r.params);
            if (e.name) r.name = e.name, r.params = o;
            else if (e.matched.length) {
                var a = e.matched[e.matched.length - 1].path;
                r.path = B(a, o, "path " + e.path)
            }
            return r
        }
        var l = b(r.path || ""),
            h = e && e.path || "/",
            u = l.path ? w(l.path, h, i || r.append) : h,
            c = s(l.query, r.query, n && n.options.parseQuery),
            f = r.hash || l.hash;
        return f && "#" !== f.charAt(0) && (f = "#" + f), {
            _normalized: !0,
            path: u,
            query: c,
            hash: f
        }
    }

    function H(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function U(t, e) {
        function i(t) {
            N(t, l, h, c)
        }

        function n(t, i, n) {
            var r = V(t, i, !1, e),
                o = r.name;
            if (o) {
                var s = c[o];
                if (!s) return a(null, r);
                var u = s.regex.keys.filter(function(t) {
                    return !t.optional
                }).map(function(t) {
                    return t.name
                });
                if ("object" != typeof r.params && (r.params = {}), i && "object" == typeof i.params)
                    for (var f in i.params) !(f in r.params) && u.indexOf(f) > -1 && (r.params[f] = i.params[f]);
                if (s) return r.path = B(s.path, r.params, 'named route "' + o + '"'), a(s, r, n)
            } else if (r.path) {
                r.params = {};
                for (var p = 0; p < l.length; p++) {
                    var d = l[p],
                        m = h[d];
                    if (Y(m.regex, r.path, r.params)) return a(m, r, n)
                }
            }
            return a(null, r)
        }

        function r(t, i) {
            var r = t.redirect,
                o = "function" == typeof r ? r(u(t, i, null, e)) : r;
            if ("string" == typeof o && (o = {
                    path: o
                }), !o || "object" != typeof o) return a(null, i);
            var s = o,
                l = s.name,
                h = s.path,
                f = i.query,
                p = i.hash,
                d = i.params;
            if (f = s.hasOwnProperty("query") ? s.query : f, p = s.hasOwnProperty("hash") ? s.hash : p, d = s.hasOwnProperty("params") ? s.params : d, l) {
                c[l];
                return n({
                    _normalized: !0,
                    name: l,
                    query: f,
                    hash: p,
                    params: d
                }, void 0, i)
            }
            if (h) {
                var m = W(h, t),
                    v = B(m, d, 'redirect route with path "' + m + '"');
                return n({
                    _normalized: !0,
                    path: v,
                    query: f,
                    hash: p
                }, void 0, i)
            }
            return a(null, i)
        }

        function o(t, e, i) {
            var r = B(i, e.params, 'aliased route with path "' + i + '"'),
                o = n({
                    _normalized: !0,
                    path: r
                });
            if (o) {
                var s = o.matched,
                    l = s[s.length - 1];
                return e.params = o.params, a(l, e)
            }
            return a(null, e)
        }

        function a(t, i, n) {
            return t && t.redirect ? r(t, n || i) : t && t.matchAs ? o(t, i, t.matchAs) : u(t, i, n, e)
        }
        var s = N(t),
            l = s.pathList,
            h = s.pathMap,
            c = s.nameMap;
        return {
            match: n,
            addRoutes: i
        }
    }

    function Y(t, e, i) {
        var n = e.match(t);
        if (!n) return !1;
        if (!i) return !0;
        for (var r = 1, o = n.length; r < o; ++r) {
            var a = t.keys[r - 1],
                s = "string" == typeof n[r] ? decodeURIComponent(n[r]) : n[r];
            a && (i[a.name] = s)
        }
        return !0
    }

    function W(t, e) {
        return w(t, e.parent ? e.parent.path : "/", !0)
    }

    function q() {
        window.history.replaceState({
            key: ot()
        }, ""), window.addEventListener("popstate", function(t) {
            Z(), t.state && t.state.key && at(t.state.key)
        })
    }

    function G(t, e, i, n) {
        if (t.app) {
            var r = t.options.scrollBehavior;
            r && t.app.$nextTick(function() {
                var t = K(),
                    o = r(e, i, n ? t : null);
                o && ("function" == typeof o.then ? o.then(function(e) {
                    nt(e, t)
                })["catch"](function(t) {}) : nt(o, t))
            })
        }
    }

    function Z() {
        var t = ot();
        t && (ee[t] = {
            x: window.pageXOffset,
            y: window.pageYOffset
        })
    }

    function K() {
        var t = ot();
        if (t) return ee[t]
    }

    function Q(t, e) {
        var i = document.documentElement,
            n = i.getBoundingClientRect(),
            r = t.getBoundingClientRect();
        return {
            x: r.left - n.left - e.x,
            y: r.top - n.top - e.y
        }
    }

    function J(t) {
        return it(t.x) || it(t.y)
    }

    function tt(t) {
        return {
            x: it(t.x) ? t.x : window.pageXOffset,
            y: it(t.y) ? t.y : window.pageYOffset
        }
    }

    function et(t) {
        return {
            x: it(t.x) ? t.x : 0,
            y: it(t.y) ? t.y : 0
        }
    }

    function it(t) {
        return "number" == typeof t
    }

    function nt(t, e) {
        var i = "object" == typeof t;
        if (i && "string" == typeof t.selector) {
            var n = document.querySelector(t.selector);
            if (n) {
                var r = t.offset && "object" == typeof t.offset ? t.offset : {};
                r = et(r), e = Q(n, r)
            } else J(t) && (e = tt(t))
        } else i && J(t) && (e = tt(t));
        e && window.scrollTo(e.x, e.y)
    }

    function rt() {
        return ne.now().toFixed(3)
    }

    function ot() {
        return re
    }

    function at(t) {
        re = t
    }

    function st(t, e) {
        Z();
        var i = window.history;
        try {
            e ? i.replaceState({
                key: re
            }, "", t) : (re = rt(), i.pushState({
                key: re
            }, "", t))
        } catch (n) {
            window.location[e ? "replace" : "assign"](t)
        }
    }

    function lt(t) {
        st(t, !0)
    }

    function ht(t, e, i) {
        var n = function(r) {
            r >= t.length ? i() : t[r] ? e(t[r], function() {
                n(r + 1)
            }) : n(r + 1)
        };
        n(0)
    }

    function ut(t) {
        return function(e, i, n) {
            var o = !1,
                a = 0,
                s = null;
            ct(t, function(t, e, i, l) {
                if ("function" == typeof t && void 0 === t.cid) {
                    o = !0, a++;
                    var h, u = dt(function(e) {
                            pt(e) && (e = e["default"]), t.resolved = "function" == typeof e ? e : Lt.extend(e), i.components[l] = e, a--, a <= 0 && n()
                        }),
                        c = dt(function(t) {
                            var e = "Failed to resolve async component " + l + ": " + t;
                            s || (s = r(t) ? t : new Error(e), n(s))
                        });
                    try {
                        h = t(u, c)
                    } catch (f) {
                        c(f)
                    }
                    if (h)
                        if ("function" == typeof h.then) h.then(u, c);
                        else {
                            var p = h.component;
                            p && "function" == typeof p.then && p.then(u, c)
                        }
                }
            }), o || n()
        }
    }

    function ct(t, e) {
        return ft(t.map(function(t) {
            return Object.keys(t.components).map(function(i) {
                return e(t.components[i], t.instances[i], t, i)
            })
        }))
    }

    function ft(t) {
        return Array.prototype.concat.apply([], t)
    }

    function pt(t) {
        return t.__esModule || oe && "Module" === t[Symbol.toStringTag]
    }

    function dt(t) {
        var e = !1;
        return function() {
            for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
            if (!e) return e = !0, t.apply(this, i)
        }
    }

    function mt(t) {
        if (!t)
            if (Yt) {
                var e = document.querySelector("base");
                t = e && e.getAttribute("href") || "/", t = t.replace(/^https?:\/\/[^\/]+/, "")
            } else t = "/";
        return "/" !== t.charAt(0) && (t = "/" + t), t.replace(/\/$/, "")
    }

    function vt(t, e) {
        var i, n = Math.max(t.length, e.length);
        for (i = 0; i < n && t[i] === e[i]; i++);
        return {
            updated: e.slice(0, i),
            activated: e.slice(i),
            deactivated: t.slice(i)
        }
    }

    function gt(t, e, i, n) {
        var r = ct(t, function(t, n, r, o) {
            var a = _t(t, e);
            if (a) return Array.isArray(a) ? a.map(function(t) {
                return i(t, n, r, o)
            }) : i(a, n, r, o)
        });
        return ft(n ? r.reverse() : r)
    }

    function _t(t, e) {
        return "function" != typeof t && (t = Lt.extend(t)), t.options[e]
    }

    function yt(t) {
        return gt(t, "beforeRouteLeave", wt, !0)
    }

    function xt(t) {
        return gt(t, "beforeRouteUpdate", wt)
    }

    function wt(t, e) {
        if (e) return function() {
            return t.apply(e, arguments)
        }
    }

    function bt(t, e, i) {
        return gt(t, "beforeRouteEnter", function(t, n, r, o) {
            return Tt(t, r, o, e, i)
        })
    }

    function Tt(t, e, i, n, r) {
        return function(o, a, s) {
            return t(o, a, function(t) {
                s(t), "function" == typeof t && n.push(function() {
                    St(t, e.instances, i, r)
                })
            })
        }
    }

    function St(t, e, i, n) {
        e[i] ? t(e[i]) : n() && setTimeout(function() {
            St(t, e, i, n)
        }, 16)
    }

    function Pt(t) {
        var e = window.location.pathname;
        return t && 0 === e.indexOf(t) && (e = e.slice(t.length)), (e || "/") + window.location.search + window.location.hash
    }

    function kt(t) {
        var e = Pt(t);
        if (!/^\/#/.test(e)) return window.location.replace(T(t + "/#" + e)), !0
    }

    function Ct() {
        var t = At();
        return "/" === t.charAt(0) || (Et("/" + t), !1)
    }

    function At() {
        var t = window.location.href,
            e = t.indexOf("#");
        return e === -1 ? "" : t.slice(e + 1)
    }

    function Mt(t) {
        var e = window.location.href,
            i = e.indexOf("#"),
            n = i >= 0 ? e.slice(0, i) : e;
        return n + "#" + t
    }

    function Ot(t) {
        ie ? st(Mt(t)) : window.location.hash = t
    }

    function Et(t) {
        ie ? lt(Mt(t)) : window.location.replace(Mt(t))
    }

    function Dt(t, e) {
        return t.push(e),
            function() {
                var i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
    }

    function It(t, e, i) {
        var n = "hash" === i ? "#" + e : e;
        return t ? T(t + "/" + n) : n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var Lt, Rt = {
            name: "router-view",
            functional: !0,
            props: {
                name: {
                    type: String,
                    "default": "default"
                }
            },
            render: function(t, e) {
                var i = e.props,
                    n = e.children,
                    r = e.parent,
                    s = e.data;
                s.routerView = !0;
                for (var l = r.$createElement, h = i.name, u = r.$route, c = r._routerViewCache || (r._routerViewCache = {}), f = 0, p = !1; r && r._routerRoot !== r;) r.$vnode && r.$vnode.data.routerView && f++, r._inactive && (p = !0), r = r.$parent;
                if (s.routerViewDepth = f, p) return l(c[h], s, n);
                var d = u.matched[f];
                if (!d) return c[h] = null, l();
                var m = c[h] = d.components[h];
                s.registerRouteInstance = function(t, e) {
                    var i = d.instances[h];
                    (e && i !== t || !e && i === t) && (d.instances[h] = e)
                }, (s.hook || (s.hook = {})).prepatch = function(t, e) {
                    d.instances[h] = e.componentInstance
                };
                var v = s.props = o(u, d.props && d.props[h]);
                if (v) {
                    v = s.props = a({}, v);
                    var g = s.attrs = s.attrs || {};
                    for (var _ in v) m.props && _ in m.props || (g[_] = v[_], delete v[_])
                }
                return l(m, s, n)
            }
        },
        zt = /[!'()*]/g,
        Ft = function(t) {
            return "%" + t.charCodeAt(0).toString(16)
        },
        Bt = /%2C/g,
        Nt = function(t) {
            return encodeURIComponent(t).replace(zt, Ft).replace(Bt, ",")
        },
        jt = decodeURIComponent,
        Xt = /\/?$/,
        $t = u(null, {
            path: "/"
        }),
        Vt = [String, Object],
        Ht = [String, Array],
        Ut = {
            name: "router-link",
            props: {
                to: {
                    type: Vt,
                    required: !0
                },
                tag: {
                    type: String,
                    "default": "a"
                },
                exact: Boolean,
                append: Boolean,
                replace: Boolean,
                activeClass: String,
                exactActiveClass: String,
                event: {
                    type: Ht,
                    "default": "click"
                }
            },
            render: function(t) {
                var e = this,
                    i = this.$router,
                    n = this.$route,
                    r = i.resolve(this.to, n, this.append),
                    o = r.location,
                    a = r.route,
                    s = r.href,
                    l = {},
                    h = i.options.linkActiveClass,
                    c = i.options.linkExactActiveClass,
                    f = null == h ? "router-link-active" : h,
                    p = null == c ? "router-link-exact-active" : c,
                    m = null == this.activeClass ? f : this.activeClass,
                    g = null == this.exactActiveClass ? p : this.exactActiveClass,
                    x = o.path ? u(null, o, null, i) : a;
                l[g] = d(n, x), l[m] = this.exact ? l[g] : v(n, x);
                var w = function(t) {
                        _(t) && (e.replace ? i.replace(o) : i.push(o))
                    },
                    b = {
                        click: _
                    };
                Array.isArray(this.event) ? this.event.forEach(function(t) {
                    b[t] = w
                }) : b[this.event] = w;
                var T = {
                    "class": l
                };
                if ("a" === this.tag) T.on = b, T.attrs = {
                    href: s
                };
                else {
                    var S = y(this.$slots["default"]);
                    if (S) {
                        S.isStatic = !1;
                        var P = Lt.util.extend,
                            k = S.data = P({}, S.data);
                        k.on = b;
                        var C = S.data.attrs = P({}, S.data.attrs);
                        C.href = s
                    } else T.on = b
                }
                return t(this.tag, T, this.$slots["default"]);
            }
        },
        Yt = "undefined" != typeof window,
        Wt = Array.isArray || function(t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        },
        qt = F,
        Gt = S,
        Zt = P,
        Kt = A,
        Qt = z,
        Jt = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
    qt.parse = Gt, qt.compile = Zt, qt.tokensToFunction = Kt, qt.tokensToRegExp = Qt;
    var te = Object.create(null),
        ee = Object.create(null),
        ie = Yt && function() {
            var t = window.navigator.userAgent;
            return (t.indexOf("Android 2.") === -1 && t.indexOf("Android 4.0") === -1 || t.indexOf("Mobile Safari") === -1 || t.indexOf("Chrome") !== -1 || t.indexOf("Windows Phone") !== -1) && (window.history && "pushState" in window.history)
        }(),
        ne = Yt && window.performance && window.performance.now ? window.performance : Date,
        re = rt(),
        oe = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
        ae = function(t, e) {
            this.router = t, this.base = mt(e), this.current = $t, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = []
        };
    ae.prototype.listen = function(t) {
        this.cb = t
    }, ae.prototype.onReady = function(t, e) {
        this.ready ? t() : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e))
    }, ae.prototype.onError = function(t) {
        this.errorCbs.push(t)
    }, ae.prototype.transitionTo = function(t, e, i) {
        var n = this,
            r = this.router.match(t, this.current);
        this.confirmTransition(r, function() {
            n.updateRoute(r), e && e(r), n.ensureURL(), n.ready || (n.ready = !0, n.readyCbs.forEach(function(t) {
                t(r)
            }))
        }, function(t) {
            i && i(t), t && !n.ready && (n.ready = !0, n.readyErrorCbs.forEach(function(e) {
                e(t)
            }))
        })
    }, ae.prototype.confirmTransition = function(t, e, i) {
        var o = this,
            a = this.current,
            s = function(t) {
                r(t) && (o.errorCbs.length ? o.errorCbs.forEach(function(e) {
                    e(t)
                }) : (n(!1, "uncaught error during route navigation:"), console.error(t))), i && i(t)
            };
        if (d(t, a) && t.matched.length === a.matched.length) return this.ensureURL(), s();
        var l = vt(this.current.matched, t.matched),
            h = l.updated,
            u = l.deactivated,
            c = l.activated,
            f = [].concat(yt(u), this.router.beforeHooks, xt(h), c.map(function(t) {
                return t.beforeEnter
            }), ut(c));
        this.pending = t;
        var p = function(e, i) {
            if (o.pending !== t) return s();
            try {
                e(t, a, function(t) {
                    t === !1 || r(t) ? (o.ensureURL(!0), s(t)) : "string" == typeof t || "object" == typeof t && ("string" == typeof t.path || "string" == typeof t.name) ? (s(), "object" == typeof t && t.replace ? o.replace(t) : o.push(t)) : i(t)
                })
            } catch (n) {
                s(n)
            }
        };
        ht(f, p, function() {
            var i = [],
                n = function() {
                    return o.current === t
                },
                r = bt(c, i, n),
                a = r.concat(o.router.resolveHooks);
            ht(a, p, function() {
                return o.pending !== t ? s() : (o.pending = null, e(t), void(o.router.app && o.router.app.$nextTick(function() {
                    i.forEach(function(t) {
                        t()
                    })
                })))
            })
        })
    }, ae.prototype.updateRoute = function(t) {
        var e = this.current;
        this.current = t, this.cb && this.cb(t), this.router.afterHooks.forEach(function(i) {
            i && i(t, e)
        })
    };
    var se = function(t) {
            function e(e, i) {
                var n = this;
                t.call(this, e, i);
                var r = e.options.scrollBehavior;
                r && q();
                var o = Pt(this.base);
                window.addEventListener("popstate", function(t) {
                    var i = n.current,
                        a = Pt(n.base);
                    n.current === $t && a === o || n.transitionTo(a, function(t) {
                        r && G(e, t, i, !0)
                    })
                })
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.go = function(t) {
                window.history.go(t)
            }, e.prototype.push = function(t, e, i) {
                var n = this,
                    r = this,
                    o = r.current;
                this.transitionTo(t, function(t) {
                    st(T(n.base + t.fullPath)), G(n.router, t, o, !1), e && e(t)
                }, i)
            }, e.prototype.replace = function(t, e, i) {
                var n = this,
                    r = this,
                    o = r.current;
                this.transitionTo(t, function(t) {
                    lt(T(n.base + t.fullPath)), G(n.router, t, o, !1), e && e(t)
                }, i)
            }, e.prototype.ensureURL = function(t) {
                if (Pt(this.base) !== this.current.fullPath) {
                    var e = T(this.base + this.current.fullPath);
                    t ? st(e) : lt(e)
                }
            }, e.prototype.getCurrentLocation = function() {
                return Pt(this.base)
            }, e
        }(ae),
        le = function(t) {
            function e(e, i, n) {
                t.call(this, e, i), n && kt(this.base) || Ct()
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setupListeners = function() {
                var t = this,
                    e = this.router,
                    i = e.options.scrollBehavior,
                    n = ie && i;
                n && q(), window.addEventListener(ie ? "popstate" : "hashchange", function() {
                    var e = t.current;
                    Ct() && t.transitionTo(At(), function(i) {
                        n && G(t.router, i, e, !0), ie || Et(i.fullPath)
                    })
                })
            }, e.prototype.push = function(t, e, i) {
                var n = this,
                    r = this,
                    o = r.current;
                this.transitionTo(t, function(t) {
                    Ot(t.fullPath), G(n.router, t, o, !1), e && e(t)
                }, i)
            }, e.prototype.replace = function(t, e, i) {
                var n = this,
                    r = this,
                    o = r.current;
                this.transitionTo(t, function(t) {
                    Et(t.fullPath), G(n.router, t, o, !1), e && e(t)
                }, i)
            }, e.prototype.go = function(t) {
                window.history.go(t)
            }, e.prototype.ensureURL = function(t) {
                var e = this.current.fullPath;
                At() !== e && (t ? Ot(e) : Et(e))
            }, e.prototype.getCurrentLocation = function() {
                return At()
            }, e
        }(ae),
        he = function(t) {
            function e(e, i) {
                t.call(this, e, i), this.stack = [], this.index = -1
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function(t, e, i) {
                var n = this;
                this.transitionTo(t, function(t) {
                    n.stack = n.stack.slice(0, n.index + 1).concat(t), n.index++, e && e(t)
                }, i)
            }, e.prototype.replace = function(t, e, i) {
                var n = this;
                this.transitionTo(t, function(t) {
                    n.stack = n.stack.slice(0, n.index).concat(t), e && e(t)
                }, i)
            }, e.prototype.go = function(t) {
                var e = this,
                    i = this.index + t;
                if (!(i < 0 || i >= this.stack.length)) {
                    var n = this.stack[i];
                    this.confirmTransition(n, function() {
                        e.index = i, e.updateRoute(n)
                    })
                }
            }, e.prototype.getCurrentLocation = function() {
                var t = this.stack[this.stack.length - 1];
                return t ? t.fullPath : "/"
            }, e.prototype.ensureURL = function() {}, e
        }(ae),
        ue = function(t) {
            void 0 === t && (t = {}), this.app = null, this.apps = [], this.options = t, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = U(t.routes || [], this);
            var e = t.mode || "hash";
            switch (this.fallback = "history" === e && !ie && t.fallback !== !1, this.fallback && (e = "hash"), Yt || (e = "abstract"), this.mode = e, e) {
                case "history":
                    this.history = new se(this, t.base);
                    break;
                case "hash":
                    this.history = new le(this, t.base, this.fallback);
                    break;
                case "abstract":
                    this.history = new he(this, t.base)
            }
        },
        ce = {
            currentRoute: {
                configurable: !0
            }
        };
    ue.prototype.match = function(t, e, i) {
        return this.matcher.match(t, e, i)
    }, ce.currentRoute.get = function() {
        return this.history && this.history.current
    }, ue.prototype.init = function(t) {
        var e = this;
        if (this.apps.push(t), !this.app) {
            this.app = t;
            var i = this.history;
            if (i instanceof se) i.transitionTo(i.getCurrentLocation());
            else if (i instanceof le) {
                var n = function() {
                    i.setupListeners()
                };
                i.transitionTo(i.getCurrentLocation(), n, n)
            }
            i.listen(function(t) {
                e.apps.forEach(function(e) {
                    e._route = t
                })
            })
        }
    }, ue.prototype.beforeEach = function(t) {
        return Dt(this.beforeHooks, t)
    }, ue.prototype.beforeResolve = function(t) {
        return Dt(this.resolveHooks, t)
    }, ue.prototype.afterEach = function(t) {
        return Dt(this.afterHooks, t)
    }, ue.prototype.onReady = function(t, e) {
        this.history.onReady(t, e)
    }, ue.prototype.onError = function(t) {
        this.history.onError(t)
    }, ue.prototype.push = function(t, e, i) {
        this.history.push(t, e, i)
    }, ue.prototype.replace = function(t, e, i) {
        this.history.replace(t, e, i)
    }, ue.prototype.go = function(t) {
        this.history.go(t)
    }, ue.prototype.back = function() {
        this.go(-1)
    }, ue.prototype.forward = function() {
        this.go(1)
    }, ue.prototype.getMatchedComponents = function(t) {
        var e = t ? t.matched ? t : this.resolve(t).route : this.currentRoute;
        return e ? [].concat.apply([], e.matched.map(function(t) {
            return Object.keys(t.components).map(function(e) {
                return t.components[e]
            })
        })) : []
    }, ue.prototype.resolve = function(t, e, i) {
        var n = V(t, e || this.history.current, i, this),
            r = this.match(n, e),
            o = r.redirectedFrom || r.fullPath,
            a = this.history.base,
            s = It(a, o, this.mode);
        return {
            location: n,
            route: r,
            href: s,
            normalizedTo: n,
            resolved: r
        }
    }, ue.prototype.addRoutes = function(t) {
        this.matcher.addRoutes(t), this.history.current !== $t && this.history.transitionTo(this.history.getCurrentLocation())
    }, Object.defineProperties(ue.prototype, ce), ue.install = x, ue.version = "2.8.1", Yt && window.Vue && window.Vue.use(ue), e["default"] = ue
}, function(t, e, i) {
    (function(e, i) {
        ! function(e, i) {
            t.exports = i()
        }(this, function() {
            "use strict";

            function t(t) {
                var e = typeof t;
                return null !== t && ("object" === e || "function" === e)
            }

            function n(t) {
                return "function" == typeof t
            }

            function r(t) {
                U = t
            }

            function o(t) {
                Y = t
            }

            function a() {
                return function() {
                    return e.nextTick(c)
                }
            }

            function s() {
                return "undefined" != typeof H ? function() {
                    H(c)
                } : u()
            }

            function l() {
                var t = 0,
                    e = new G(c),
                    i = document.createTextNode("");
                return e.observe(i, {
                    characterData: !0
                }),
                    function() {
                        i.data = t = ++t % 2
                    }
            }

            function h() {
                var t = new MessageChannel;
                return t.port1.onmessage = c,
                    function() {
                        return t.port2.postMessage(0)
                    }
            }

            function u() {
                var t = setTimeout;
                return function() {
                    return t(c, 1)
                }
            }

            function c() {
                for (var t = 0; t < V; t += 2) {
                    var e = Q[t],
                        i = Q[t + 1];
                    e(i), Q[t] = void 0, Q[t + 1] = void 0
                }
                V = 0
            }

            function f() {
                try {
                    var t = Function("return this")().require("vertx");
                    return H = t.runOnLoop || t.runOnContext, s()
                } catch (e) {
                    return u()
                }
            }

            function p(t, e) {
                var i = this,
                    n = new this.constructor(m);
                void 0 === n[tt] && I(n);
                var r = i._state;
                if (r) {
                    var o = arguments[r - 1];
                    Y(function() {
                        return O(r, n, o, i._result)
                    })
                } else C(i, n, t, e);
                return n
            }

            function d(t) {
                var e = this;
                if (t && "object" == typeof t && t.constructor === e) return t;
                var i = new e(m);
                return T(i, t), i
            }

            function m() {}

            function v() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function g() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function _(t) {
                try {
                    return t.then
                } catch (e) {
                    return rt.error = e, rt
                }
            }

            function y(t, e, i, n) {
                try {
                    t.call(e, i, n)
                } catch (r) {
                    return r
                }
            }

            function x(t, e, i) {
                Y(function(t) {
                    var n = !1,
                        r = y(i, e, function(i) {
                            n || (n = !0, e !== i ? T(t, i) : P(t, i))
                        }, function(e) {
                            n || (n = !0, k(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                    !n && r && (n = !0, k(t, r))
                }, t)
            }

            function w(t, e) {
                e._state === it ? P(t, e._result) : e._state === nt ? k(t, e._result) : C(e, void 0, function(e) {
                    return T(t, e)
                }, function(e) {
                    return k(t, e)
                })
            }

            function b(t, e, i) {
                e.constructor === t.constructor && i === p && e.constructor.resolve === d ? w(t, e) : i === rt ? (k(t, rt.error), rt.error = null) : void 0 === i ? P(t, e) : n(i) ? x(t, e, i) : P(t, e)
            }

            function T(e, i) {
                e === i ? k(e, v()) : t(i) ? b(e, i, _(i)) : P(e, i)
            }

            function S(t) {
                t._onerror && t._onerror(t._result), A(t)
            }

            function P(t, e) {
                t._state === et && (t._result = e, t._state = it, 0 !== t._subscribers.length && Y(A, t))
            }

            function k(t, e) {
                t._state === et && (t._state = nt, t._result = e, Y(S, t))
            }

            function C(t, e, i, n) {
                var r = t._subscribers,
                    o = r.length;
                t._onerror = null, r[o] = e, r[o + it] = i, r[o + nt] = n, 0 === o && t._state && Y(A, t)
            }

            function A(t) {
                var e = t._subscribers,
                    i = t._state;
                if (0 !== e.length) {
                    for (var n = void 0, r = void 0, o = t._result, a = 0; a < e.length; a += 3) n = e[a], r = e[a + i], n ? O(i, n, r, o) : r(o);
                    t._subscribers.length = 0
                }
            }

            function M(t, e) {
                try {
                    return t(e)
                } catch (i) {
                    return rt.error = i, rt
                }
            }

            function O(t, e, i, r) {
                var o = n(i),
                    a = void 0,
                    s = void 0,
                    l = void 0,
                    h = void 0;
                if (o) {
                    if (a = M(i, r), a === rt ? (h = !0, s = a.error, a.error = null) : l = !0, e === a) return void k(e, g())
                } else a = r, l = !0;
                e._state !== et || (o && l ? T(e, a) : h ? k(e, s) : t === it ? P(e, a) : t === nt && k(e, a))
            }

            function E(t, e) {
                try {
                    e(function(e) {
                        T(t, e)
                    }, function(e) {
                        k(t, e)
                    })
                } catch (i) {
                    k(t, i)
                }
            }

            function D() {
                return ot++
            }

            function I(t) {
                t[tt] = ot++, t._state = void 0, t._result = void 0, t._subscribers = []
            }

            function L() {
                return new Error("Array Methods must be provided an Array")
            }

            function R(t) {
                return new at(this, t).promise
            }

            function z(t) {
                var e = this;
                return new e($(t) ? function(i, n) {
                    for (var r = t.length, o = 0; o < r; o++) e.resolve(t[o]).then(i, n)
                } : function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }

            function F(t) {
                var e = this,
                    i = new e(m);
                return k(i, t), i
            }

            function B() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function N() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function j() {
                var t = void 0;
                if ("undefined" != typeof i) t = i;
                else if ("undefined" != typeof self) t = self;
                else try {
                        t = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                var n = t.Promise;
                if (n) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(n.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === r && !n.cast) return
                }
                t.Promise = st
            }
            var X = void 0;
            X = Array.isArray ? Array.isArray : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            var $ = X,
                V = 0,
                H = void 0,
                U = void 0,
                Y = function(t, e) {
                    Q[V] = t, Q[V + 1] = e, V += 2, 2 === V && (U ? U(c) : J())
                },
                W = "undefined" != typeof window ? window : void 0,
                q = W || {},
                G = q.MutationObserver || q.WebKitMutationObserver,
                Z = "undefined" == typeof self && "undefined" != typeof e && "[object process]" === {}.toString.call(e),
                K = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                Q = new Array(1e3),
                J = void 0;
            J = Z ? a() : G ? l() : K ? h() : void 0 === W ? f() : u();
            var tt = Math.random().toString(36).substring(2),
                et = void 0,
                it = 1,
                nt = 2,
                rt = {
                    error: null
                },
                ot = 0,
                at = function() {
                    function t(t, e) {
                        this._instanceConstructor = t, this.promise = new t(m), this.promise[tt] || I(this.promise), $(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? P(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && P(this.promise, this._result))) : k(this.promise, L())
                    }
                    return t.prototype._enumerate = function(t) {
                        for (var e = 0; this._state === et && e < t.length; e++) this._eachEntry(t[e], e)
                    }, t.prototype._eachEntry = function(t, e) {
                        var i = this._instanceConstructor,
                            n = i.resolve;
                        if (n === d) {
                            var r = _(t);
                            if (r === p && t._state !== et) this._settledAt(t._state, e, t._result);
                            else if ("function" != typeof r) this._remaining--, this._result[e] = t;
                            else if (i === st) {
                                var o = new i(m);
                                b(o, t, r), this._willSettleAt(o, e)
                            } else this._willSettleAt(new i(function(e) {
                                return e(t)
                            }), e)
                        } else this._willSettleAt(n(t), e)
                    }, t.prototype._settledAt = function(t, e, i) {
                        var n = this.promise;
                        n._state === et && (this._remaining--, t === nt ? k(n, i) : this._result[e] = i), 0 === this._remaining && P(n, this._result)
                    }, t.prototype._willSettleAt = function(t, e) {
                        var i = this;
                        C(t, void 0, function(t) {
                            return i._settledAt(it, e, t)
                        }, function(t) {
                            return i._settledAt(nt, e, t)
                        })
                    }, t
                }(),
                st = function() {
                    function t(e) {
                        this[tt] = D(), this._result = this._state = void 0, this._subscribers = [], m !== e && ("function" != typeof e && B(), this instanceof t ? E(this, e) : N())
                    }
                    return t.prototype["catch"] = function(t) {
                        return this.then(null, t)
                    }, t.prototype["finally"] = function(t) {
                        var e = this,
                            i = e.constructor;
                        return e.then(function(e) {
                            return i.resolve(t()).then(function() {
                                return e
                            })
                        }, function(e) {
                            return i.resolve(t()).then(function() {
                                throw e
                            })
                        })
                    }, t
                }();
            return st.prototype.then = p, st.all = R, st.race = z, st.resolve = d, st.reject = F, st._setScheduler = r, st._setAsap = o, st._asap = Y, st.polyfill = j, st.Promise = st, st
        })
    }).call(e, i(61), i(19))
}, function(t, e, i) {
    var n;
    ! function() {
        "use strict";

        function r(t, e) {
            function i(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var n;
            if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !r.notNeeded(t)) {
                for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, l = 0, h = o.length; l < h; l++) s[o[l]] = i(s[o[l]], s);
                a && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
                    var r = Node.prototype.removeEventListener;
                    "click" === e ? r.call(t, e, i.hijacked || i, n) : r.call(t, e, i, n)
                }, t.addEventListener = function(e, i, n) {
                    var r = Node.prototype.addEventListener;
                    "click" === e ? r.call(t, e, i.hijacked || (i.hijacked = function(t) {
                        t.propagationStopped || i(t)
                    }), n) : r.call(t, e, i, n)
                }), "function" == typeof t.onclick && (n = t.onclick, t.addEventListener("click", function(t) {
                    n(t)
                }, !1), t.onclick = null)
            }
        }
        var o = navigator.userAgent.indexOf("Windows Phone") >= 0,
            a = navigator.userAgent.indexOf("Android") > 0 && !o,
            s = /iP(ad|hone|od)/.test(navigator.userAgent) && !o,
            l = s && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            h = s && /OS [6-7]_\d/.test(navigator.userAgent),
            u = navigator.userAgent.indexOf("BB10") > 0;
        r.prototype.needsClick = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0;
                    break;
                case "input":
                    if (s && "file" === t.type || t.disabled) return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, r.prototype.needsFocus = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !a;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, r.prototype.sendClick = function(t, e) {
            var i, n;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
        }, r.prototype.determineEventType = function(t) {
            return a && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, r.prototype.focus = function(t) {
            var e;
            s && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, r.prototype.updateScrollParent = function(t) {
            var e, i;
            if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                i = t;
                do {
                    if (i.scrollHeight > i.offsetHeight) {
                        e = i, t.fastClickScrollParent = i;
                        break
                    }
                    i = i.parentElement
                } while (i)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, r.prototype.getTargetElementFromEventTarget = function(t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, r.prototype.onTouchStart = function(t) {
            var e, i, n;
            if (t.targetTouches.length > 1) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], s) {
                if (n = window.getSelection(), n.rangeCount && !n.isCollapsed) return !0;
                if (!l) {
                    if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, r.prototype.touchHasMoved = function(t) {
            var e = t.changedTouches[0],
                i = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
        }, r.prototype.onTouchMove = function(t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, r.prototype.findControl = function(t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, r.prototype.onTouchEnd = function(t) {
            var e, i, n, r, o, u = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, h && (o = t.changedTouches[0], u = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), n = u.tagName.toLowerCase(), "label" === n) {
                if (e = this.findControl(u)) {
                    if (this.focus(u), a) return !1;
                    u = e
                }
            } else if (this.needsFocus(u)) return t.timeStamp - i > 100 || s && window.top !== window && "input" === n ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), s && "select" === n || (this.targetElement = null, t.preventDefault()), !1);
            return !(!s || l || (r = u.fastClickScrollParent, !r || r.fastClickLastScrollTop === r.scrollTop)) || (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
        }, r.prototype.onTouchCancel = function() {
            this.trackingClick = !1, this.targetElement = null
        }, r.prototype.onMouse = function(t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
        }, r.prototype.onClick = function(t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
        }, r.prototype.destroy = function() {
            var t = this.layer;
            a && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, r.notNeeded = function(t) {
            var e, i, n, r;
            if ("undefined" == typeof window.ontouchstart) return !0;
            if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!a) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (e.content.indexOf("user-scalable=no") !== -1) return !0;
                    if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (u && (n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), n[1] >= 10 && n[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                if (e.content.indexOf("user-scalable=no") !== -1) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(r >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        }, r.attach = function(t, e) {
            return new r(t, e)
        }, n = function() {
            return r
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    }()
}, function(t, e, i) {
    var n;
    ! function(r, o, a) {
        function s(t, e) {
            this.wrapper = "string" == typeof t ? o.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                disablePointer: !c.hasPointer,
                disableTouch: c.hasPointer || !c.hasTouch,
                disableMouse: c.hasPointer || c.hasTouch,
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
                bindToWrapper: "undefined" == typeof r.onmousedown
            };
            for (var i in e) this.options[i] = e[i];
            this.translateZ = this.options.HWCompositing && c.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = c.hasTransition && this.options.useTransition, this.options.useTransform = c.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? c.ease[this.options.bounceEasing] || c.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, 3 == this.options.probeType && (this.options.useTransition = !1), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }

        function l(t, e, i) {
            var n = o.createElement("div"),
                r = o.createElement("div");
            return i === !0 && (n.style.cssText = "position:absolute;z-index:9999", r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), r.className = "iScrollIndicator", "h" == t ? (i === !0 && (n.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", r.style.height = "100%"), n.className = "iScrollHorizontalScrollbar") : (i === !0 && (n.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", r.style.width = "100%"), n.className = "iScrollVerticalScrollbar"), n.style.cssText += ";overflow:hidden", e || (n.style.pointerEvents = "none"), n.appendChild(r), n
        }

        function h(t, e) {
            this.wrapper = "string" == typeof e.el ? o.querySelector(e.el) : e.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.options = {
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
            for (var i in e) this.options[i] = e[i];
            if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (c.addEvent(this.indicator, "touchstart", this), c.addEvent(r, "touchend", this)), this.options.disablePointer || (c.addEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this), c.addEvent(r, c.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (c.addEvent(this.indicator, "mousedown", this), c.addEvent(r, "mouseup", this))), this.options.fade) {
                this.wrapperStyle[c.style.transform] = this.scroller.translateZ;
                var n = c.style.transitionDuration;
                this.wrapperStyle[n] = c.isBadAndroid ? "0.0001ms" : "0ms";
                var a = this;
                c.isBadAndroid && u(function() {
                    "0.0001ms" === a.wrapperStyle[n] && (a.wrapperStyle[n] = "0s")
                }), this.wrapperStyle.opacity = "0"
            }
        }
        var u = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function(t) {
                r.setTimeout(t, 1e3 / 60)
            },
            c = function() {
                function t(t) {
                    return n !== !1 && ("" === n ? t : n + t.charAt(0).toUpperCase() + t.substr(1))
                }
                var e = {},
                    i = o.createElement("div").style,
                    n = function() {
                        for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, r = e.length; n < r; n++)
                            if (t = e[n] + "ransform", t in i) return e[n].substr(0, e[n].length - 1);
                        return !1
                    }();
                e.getTime = Date.now || function() {
                    return (new Date).getTime()
                }, e.extend = function(t, e) {
                    for (var i in e) t[i] = e[i]
                }, e.addEvent = function(t, e, i, n) {
                    t.addEventListener(e, i, !!n)
                }, e.removeEvent = function(t, e, i, n) {
                    t.removeEventListener(e, i, !!n)
                }, e.prefixPointerEvent = function(t) {
                    return r.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
                }, e.momentum = function(t, e, i, n, r, o) {
                    var s, l, h = t - e,
                        u = a.abs(h) / i;
                    return o = void 0 === o ? 6e-4 : o, s = t + u * u / (2 * o) * (h < 0 ? -1 : 1), l = u / o, s < n ? (s = r ? n - r / 2.5 * (u / 8) : n, h = a.abs(s - t), l = h / u) : s > 0 && (s = r ? r / 2.5 * (u / 8) : 0, h = a.abs(t) + s, l = h / u), {
                        destination: a.round(s),
                        duration: l
                    }
                };
                var s = t("transform");
                return e.extend(e, {
                    hasTransform: s !== !1,
                    hasPerspective: t("perspective") in i,
                    hasTouch: "ontouchstart" in r,
                    hasPointer: !(!r.PointerEvent && !r.MSPointerEvent),
                    hasTransition: t("transition") in i
                }), e.isBadAndroid = function() {
                    var t = r.navigator.appVersion;
                    if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
                        var e = t.match(/Safari\/(\d+.\d)/);
                        return !(e && "object" == typeof e && e.length >= 2) || parseFloat(e[1]) < 535.19
                    }
                    return !1
                }(), e.extend(e.style = {}, {
                    transform: s,
                    transitionTimingFunction: t("transitionTimingFunction"),
                    transitionDuration: t("transitionDuration"),
                    transitionDelay: t("transitionDelay"),
                    transformOrigin: t("transformOrigin")
                }), e.hasClass = function(t, e) {
                    var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
                    return i.test(t.className)
                }, e.addClass = function(t, i) {
                    if (!e.hasClass(t, i)) {
                        var n = t.className.split(" ");
                        n.push(i), t.className = n.join(" ")
                    }
                }, e.removeClass = function(t, i) {
                    if (e.hasClass(t, i)) {
                        var n = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                        t.className = t.className.replace(n, " ")
                    }
                }, e.offset = function(t) {
                    for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, i -= t.offsetTop;
                    return {
                        left: e,
                        top: i
                    }
                }, e.preventDefaultException = function(t, e) {
                    for (var i in e)
                        if (e[i].test(t[i])) return !0;
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
                            return a.sqrt(1 - --t * t)
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
                                i = .4;
                            return 0 === t ? 0 : 1 == t ? 1 : i * a.pow(2, -10 * t) * a.sin((t - e / 4) * (2 * a.PI) / e) + 1
                        }
                    }
                }), e.tap = function(t, e) {
                    var i = o.createEvent("Event");
                    i.initEvent(e, !0, !0), i.pageX = t.pageX, i.pageY = t.pageY, t.target.dispatchEvent(i)
                }, e.click = function(t) {
                    var e, i = t.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (e = o.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, t.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), e._constructed = !0, i.dispatchEvent(e))
                }, e
            }();
        s.prototype = {
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
                if (1 != c.eventType[t.type]) {
                    var e;
                    if (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== e) return
                }
                if (this.enabled && (!this.initiated || c.eventType[t.type] === this.initiated)) {
                    !this.options.preventDefault || c.isBadAndroid || c.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                    var i, n = t.touches ? t.touches[0] : t;
                    this.initiated = c.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = c.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, i = this.getComputedPosition(), this._translate(a.round(i.x), a.round(i.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
                }
            },
            _move: function(t) {
                if (this.enabled && c.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault();
                    var e, i, n, r, o = t.touches ? t.touches[0] : t,
                        s = o.pageX - this.pointX,
                        l = o.pageY - this.pointY,
                        h = c.getTime();
                    if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += s, this.distY += l, n = a.abs(this.distX), r = a.abs(this.distY), !(h - this.endTime > 300 && n < 10 && r < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (n > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= n + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            l = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            s = 0
                        }
                        s = this.hasHorizontalScroll ? s : 0, l = this.hasVerticalScroll ? l : 0, e = this.x + s, i = this.y + l, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + s / 3 : e > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = s > 0 ? -1 : s < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"),
                            this.moved = !0, this._translate(e, i), h - this.startTime > 300 && (this.startTime = h, this.startX = this.x, this.startY = this.y, 1 == this.options.probeType && this._execEvent("scroll")), this.options.probeType > 1 && this._execEvent("scroll")
                    }
                }
            },
            _end: function(t) {
                if (this.enabled && c.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && !c.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                    var e, i, n = (t.changedTouches ? t.changedTouches[0] : t, c.getTime() - this.startTime),
                        r = a.round(this.x),
                        o = a.round(this.y),
                        s = a.abs(r - this.startX),
                        l = a.abs(o - this.startY),
                        h = 0,
                        u = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = c.getTime(), !this.resetPosition(this.options.bounceTime)) {
                        if (this.scrollTo(r, o), !this.moved) return this.options.tap && c.tap(t, this.options.tap), this.options.click && c.click(t), void this._execEvent("scrollCancel");
                        if (this._events.flick && n < 200 && s < 100 && l < 100) return void this._execEvent("flick");
                        if (this.options.momentum && n < 300 && (e = this.hasHorizontalScroll ? c.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                destination: r,
                                duration: 0
                            }, i = this.hasVerticalScroll ? c.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                destination: o,
                                duration: 0
                            }, r = e.destination, o = i.destination, h = a.max(e.duration, i.duration), this.isInTransition = 1), this.options.snap) {
                            var f = this._nearestSnap(r, o);
                            this.currentPage = f, h = this.options.snapSpeed || a.max(a.max(a.min(a.abs(r - f.x), 1e3), a.min(a.abs(o - f.y), 1e3)), 300), r = f.x, o = f.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                        }
                        return r != this.x || o != this.y ? ((r > 0 || r < this.maxScrollX || o > 0 || o < this.maxScrollY) && (u = c.ease.quadratic), void this.scrollTo(r, o, h, u)) : void this._execEvent("scrollEnd")
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
                    i = this.y;
                return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            refresh: function() {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = c.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
            },
            on: function(t, e) {
                this._events[t] || (this._events[t] = []), this._events[t].push(e)
            },
            off: function(t, e) {
                if (this._events[t]) {
                    var i = this._events[t].indexOf(e);
                    i > -1 && this._events[t].splice(i, 1)
                }
            },
            _execEvent: function(t) {
                if (this._events[t]) {
                    var e = 0,
                        i = this._events[t].length;
                    if (i)
                        for (; e < i; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
                }
            },
            scrollBy: function(t, e, i, n) {
                t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n)
            },
            scrollTo: function(t, e, i, n) {
                n = n || c.ease.circular, this.isInTransition = this.options.useTransition && i > 0;
                var r = this.options.useTransition && n.style;
                !i || r ? (r && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn)
            },
            scrollToElement: function(t, e, i, n, r) {
                if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                    var o = c.offset(t);
                    o.left -= this.wrapperOffset.left, o.top -= this.wrapperOffset.top, i === !0 && (i = a.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), n === !0 && (n = a.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), o.left -= i || 0, o.top -= n || 0, o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left, o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top, e = void 0 === e || null === e || "auto" === e ? a.max(a.abs(this.x - o.left), a.abs(this.y - o.top)) : e, this.scrollTo(o.left, o.top, e, r)
                }
            },
            _transitionTime: function(t) {
                t = t || 0;
                var e = c.style.transitionDuration;
                if (this.scrollerStyle[e] = t + "ms", !t && c.isBadAndroid) {
                    this.scrollerStyle[e] = "0.0001ms";
                    var i = this;
                    u(function() {
                        "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                    })
                }
                if (this.indicators)
                    for (var n = this.indicators.length; n--;) this.indicators[n].transitionTime(t)
            },
            _transitionTimingFunction: function(t) {
                if (this.scrollerStyle[c.style.transitionTimingFunction] = t, this.indicators)
                    for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
            },
            _translate: function(t, e) {
                if (this.options.useTransform ? this.scrollerStyle[c.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = a.round(t), e = a.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators)
                    for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition()
            },
            _initEvents: function(t) {
                var e = t ? c.removeEvent : c.addEvent,
                    i = this.options.bindToWrapper ? this.wrapper : r;
                e(r, "orientationchange", this), e(r, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)), c.hasPointer && !this.options.disablePointer && (e(this.wrapper, c.prefixPointerEvent("pointerdown"), this), e(i, c.prefixPointerEvent("pointermove"), this), e(i, c.prefixPointerEvent("pointercancel"), this), e(i, c.prefixPointerEvent("pointerup"), this)), c.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
            },
            getComputedPosition: function() {
                var t, e, i = r.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (i = i[c.style.transform].split(")")[0].split(", "), t = +(i[12] || i[4]), e = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""), e = +i.top.replace(/[^-\d.]/g, "")), {
                    x: t,
                    y: e
                }
            },
            _initIndicators: function() {
                function t(t) {
                    if (o.indicators)
                        for (var e = o.indicators.length; e--;) t.call(o.indicators[e])
                }
                var e, i = this.options.interactiveScrollbars,
                    n = "string" != typeof this.options.scrollbars,
                    r = [],
                    o = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                    el: l("v", i, this.options.scrollbars),
                    interactive: i,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: !1
                }, this.wrapper.appendChild(e.el), r.push(e)), this.options.scrollX && (e = {
                    el: l("h", i, this.options.scrollbars),
                    interactive: i,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: !1
                }, this.wrapper.appendChild(e.el), r.push(e))), this.options.indicators && (r = r.concat(this.options.indicators));
                for (var a = r.length; a--;) this.indicators.push(new h(this, r[a]));
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
                c.addEvent(this.wrapper, "wheel", this), c.addEvent(this.wrapper, "mousewheel", this), c.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                    clearTimeout(this.wheelTimeout), this.wheelTimeout = null, c.removeEvent(this.wrapper, "wheel", this), c.removeEvent(this.wrapper, "mousewheel", this), c.removeEvent(this.wrapper, "DOMMouseScroll", this)
                })
            },
            _wheel: function(t) {
                if (this.enabled) {
                    t.preventDefault();
                    var e, i, n, r, o = this;
                    if (void 0 === this.wheelTimeout && o._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                            o.options.snap || o._execEvent("scrollEnd"), o.wheelTimeout = void 0
                        }, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, i = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, i = -t.deltaY);
                    else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, i = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in t) e = i = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in t)) return;
                        e = i = -t.detail / 3 * this.options.mouseWheelSpeed
                    }
                    if (e *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = i, i = 0), this.options.snap) return n = this.currentPage.pageX, r = this.currentPage.pageY, e > 0 ? n-- : e < 0 && n++, i > 0 ? r-- : i < 0 && r++, void this.goToPage(n, r);
                    n = this.x + a.round(this.hasHorizontalScroll ? e : 0), r = this.y + a.round(this.hasVerticalScroll ? i : 0), this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0, this.directionY = i > 0 ? -1 : i < 0 ? 1 : 0, n > 0 ? n = 0 : n < this.maxScrollX && (n = this.maxScrollX), r > 0 ? r = 0 : r < this.maxScrollY && (r = this.maxScrollY), this.scrollTo(n, r, 0), this.options.probeType > 1 && this._execEvent("scroll")
                }
            },
            _initSnap: function() {
                this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                    var t, e, i, n, r, o, s = 0,
                        l = 0,
                        h = 0,
                        u = this.options.snapStepX || this.wrapperWidth,
                        c = this.options.snapStepY || this.wrapperHeight;
                    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                        if (this.options.snap === !0)
                            for (i = a.round(u / 2), n = a.round(c / 2); h > -this.scrollerWidth;) {
                                for (this.pages[s] = [], t = 0, r = 0; r > -this.scrollerHeight;) this.pages[s][t] = {
                                    x: a.max(h, this.maxScrollX),
                                    y: a.max(r, this.maxScrollY),
                                    width: u,
                                    height: c,
                                    cx: h - i,
                                    cy: r - n
                                }, r -= c, t++;
                                h -= u, s++
                            } else
                            for (o = this.options.snap, t = o.length, e = -1; s < t; s++)(0 === s || o[s].offsetLeft <= o[s - 1].offsetLeft) && (l = 0, e++), this.pages[l] || (this.pages[l] = []), h = a.max(-o[s].offsetLeft, this.maxScrollX), r = a.max(-o[s].offsetTop, this.maxScrollY), i = h - a.round(o[s].offsetWidth / 2), n = r - a.round(o[s].offsetHeight / 2), this.pages[l][e] = {
                                x: h,
                                y: r,
                                width: o[s].offsetWidth,
                                height: o[s].offsetHeight,
                                cx: i,
                                cy: n
                            }, h > this.maxScrollX && l++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = a.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = a.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                    }
                }), this.on("flick", function() {
                    var t = this.options.snapSpeed || a.max(a.max(a.min(a.abs(this.x - this.startX), 1e3), a.min(a.abs(this.y - this.startY), 1e3)), 300);
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
                var i = 0,
                    n = this.pages.length,
                    r = 0;
                if (a.abs(t - this.absStartX) < this.snapThresholdX && a.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); i < n; i++)
                    if (t >= this.pages[i][0].cx) {
                        t = this.pages[i][0].x;
                        break
                    }
                for (n = this.pages[i].length; r < n; r++)
                    if (e >= this.pages[0][r].cy) {
                        e = this.pages[0][r].y;
                        break
                    }
                return i == this.currentPage.pageX && (i += this.directionX, i < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), t = this.pages[i][0].x), r == this.currentPage.pageY && (r += this.directionY, r < 0 ? r = 0 : r >= this.pages[0].length && (r = this.pages[0].length - 1), e = this.pages[0][r].y), {
                    x: t,
                    y: e,
                    pageX: i,
                    pageY: r
                }
            },
            goToPage: function(t, e, i, n) {
                n = n || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
                var r = this.pages[t][e].x,
                    o = this.pages[t][e].y;
                i = void 0 === i ? this.options.snapSpeed || a.max(a.max(a.min(a.abs(r - this.x), 1e3), a.min(a.abs(o - this.y), 1e3)), 300) : i, this.currentPage = {
                    x: r,
                    y: o,
                    pageX: t,
                    pageY: e
                }, this.scrollTo(r, o, i, n)
            },
            next: function(t, e) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                i++, i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, t, e)
            },
            prev: function(t, e) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                i--, i < 0 && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, t, e)
            },
            _initKeys: function(t) {
                var e, i = {
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
                for (e in i) this.options.keyBindings[e] = this.options.keyBindings[e] || i[e];
                c.addEvent(r, "keydown", this), this.on("destroy", function() {
                    c.removeEvent(r, "keydown", this)
                })
            },
            _key: function(t) {
                if (this.enabled) {
                    var e, i = this.options.snap,
                        n = i ? this.currentPage.pageX : this.x,
                        r = i ? this.currentPage.pageY : this.y,
                        o = c.getTime(),
                        s = this.keyTime || 0,
                        l = .25;
                    switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(a.round(e.x), a.round(e.y)), this.isInTransition = !1), this.keyAcceleration = o - s < 200 ? a.min(this.keyAcceleration + l, 50) : 0, t.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? n += i ? 1 : this.wrapperWidth : r += i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? n -= i ? 1 : this.wrapperWidth : r -= i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            n = i ? this.pages.length - 1 : this.maxScrollX, r = i ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            n = 0, r = 0;
                            break;
                        case this.options.keyBindings.left:
                            n += i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            r += i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            n -= i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            r -= i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return
                    }
                    if (i) return void this.goToPage(n, r);
                    n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollX && (n = this.maxScrollX, this.keyAcceleration = 0), r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(n, r, 0), this.keyTime = o
                }
            },
            _animate: function(t, e, i, n) {
                function r() {
                    var f, p, d, m = c.getTime();
                    return m >= h ? (o.isAnimating = !1, o._translate(t, e), void(o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd"))) : (m = (m - l) / i, d = n(m), f = (t - a) * d + a, p = (e - s) * d + s, o._translate(f, p), o.isAnimating && u(r), void(3 == o.options.probeType && o._execEvent("scroll")))
                }
                var o = this,
                    a = this.x,
                    s = this.y,
                    l = c.getTime(),
                    h = l + i;
                this.isAnimating = !0, r()
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
        }, h.prototype = {
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
                this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (c.removeEvent(this.indicator, "touchstart", this), c.removeEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this), c.removeEvent(this.indicator, "mousedown", this), c.removeEvent(r, "touchmove", this), c.removeEvent(r, c.prefixPointerEvent("pointermove"), this), c.removeEvent(r, "mousemove", this), c.removeEvent(r, "touchend", this), c.removeEvent(r, c.prefixPointerEvent("pointerup"), this), c.removeEvent(r, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
            },
            _start: function(t) {
                var e = t.touches ? t.touches[0] : t;
                t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = c.getTime(), this.options.disableTouch || c.addEvent(r, "touchmove", this), this.options.disablePointer || c.addEvent(r, c.prefixPointerEvent("pointermove"), this), this.options.disableMouse || c.addEvent(r, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
            },
            _move: function(t) {
                var e, i, n, r, o = t.touches ? t.touches[0] : t,
                    a = c.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = o.pageX - this.lastPointX, this.lastPointX = o.pageX, i = o.pageY - this.lastPointY, this.lastPointY = o.pageY, n = this.x + e, r = this.y + i, this._pos(n, r), 1 == this.scroller.options.probeType && a - this.startTime > 300 ? (this.startTime = a, this.scroller._execEvent("scroll")) : this.scroller.options.probeType > 1 && this.scroller._execEvent("scroll"), t.preventDefault(), t.stopPropagation()
            },
            _end: function(t) {
                if (this.initiated) {
                    if (this.initiated = !1, t.preventDefault(), t.stopPropagation(), c.removeEvent(r, "touchmove", this), c.removeEvent(r, c.prefixPointerEvent("pointermove"), this), c.removeEvent(r, "mousemove", this), this.scroller.options.snap) {
                        var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            i = this.options.snapSpeed || a.max(a.max(a.min(a.abs(this.scroller.x - e.x), 1e3), a.min(a.abs(this.scroller.y - e.y), 1e3)), 300);
                        this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, i, this.scroller.options.bounceEasing))
                    }
                    this.moved && this.scroller._execEvent("scrollEnd")
                }
            },
            transitionTime: function(t) {
                t = t || 0;
                var e = c.style.transitionDuration;
                if (this.indicatorStyle[e] = t + "ms", !t && c.isBadAndroid) {
                    this.indicatorStyle[e] = "0.0001ms";
                    var i = this;
                    u(function() {
                        "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
                    })
                }
            },
            transitionTimingFunction: function(t) {
                this.indicatorStyle[c.style.transitionTimingFunction] = t
            },
            refresh: function() {
                this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (c.addClass(this.wrapper, "iScrollBothScrollbars"), c.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (c.removeClass(this.wrapper, "iScrollBothScrollbars"), c.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = a.max(a.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = a.max(a.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
            },
            updatePosition: function() {
                var t = this.options.listenX && a.round(this.sizeRatioX * this.scroller.x) || 0,
                    e = this.options.listenY && a.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = a.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = a.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = a.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = a.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[c.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
            },
            _pos: function(t, e) {
                t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? a.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? a.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
            },
            fade: function(t, e) {
                if (!e || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var i = t ? 250 : 500,
                        n = t ? 0 : 300;
                    t = t ? "1" : "0", this.wrapperStyle[c.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function(t) {
                        this.wrapperStyle.opacity = t, this.visible = +t
                    }.bind(this, t), n)
                }
            }
        }, s.utils = c, "undefined" != typeof t && t.exports ? t.exports = s : (n = function() {
            return s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n)))
    }(window, document, Math)
}, function(t, e, i) {
    t.exports = i(263)
}, function(t, e, i) {
    "use strict";

    function n(t) {
        var e = new a(t),
            i = o(a.prototype.request, e);
        return r.extend(i, a.prototype, e), r.extend(i, e), i
    }
    var r = i(14),
        o = i(164),
        a = i(264),
        s = i(116),
        l = n(s);
    l.Axios = a, l.create = function(t) {
        return n(r.merge(s, t))
    }, l.Cancel = i(168), l.CancelToken = i(278), l.isCancel = i(167), l.all = function(t) {
        return Promise.all(t)
    }, l.spread = i(279), t.exports = l, t.exports["default"] = l
}, function(t, e, i) {
    "use strict";

    function n(t) {
        this.defaults = t, this.interceptors = {
            request: new a,
            response: new a
        }
    }
    var r = i(116),
        o = i(14),
        a = i(273),
        s = i(274),
        l = i(276),
        h = i(277);
    n.prototype.request = function(t) {
        "string" == typeof t && (t = o.merge({
            url: arguments[0]
        }, arguments[1])), t = o.merge(r, this.defaults, {
            method: "get"
        }, t), t.method = t.method.toLowerCase(), t.baseURL && !l(t.url) && (t.url = h(t.baseURL, t.url));
        var e = [s, void 0],
            i = Promise.resolve(t);
        for (this.interceptors.request.forEach(function(t) {
            e.unshift(t.fulfilled, t.rejected)
        }), this.interceptors.response.forEach(function(t) {
            e.push(t.fulfilled, t.rejected)
        }); e.length;) i = i.then(e.shift(), e.shift());
        return i
    }, o.forEach(["delete", "get", "head", "options"], function(t) {
        n.prototype[t] = function(e, i) {
            return this.request(o.merge(i || {}, {
                method: t,
                url: e
            }))
        }
    }), o.forEach(["post", "put", "patch"], function(t) {
        n.prototype[t] = function(e, i, n) {
            return this.request(o.merge(n || {}, {
                method: t,
                url: e,
                data: i
            }))
        }
    }), t.exports = n
}, function(t, e, i) {
    "use strict";
    var n = i(14);
    t.exports = function(t, e) {
        n.forEach(t, function(i, n) {
            n !== e && n.toUpperCase() === e.toUpperCase() && (t[e] = i, delete t[n])
        })
    }
}, function(t, e, i) {
    "use strict";
    var n = i(166);
    t.exports = function(t, e, i) {
        var r = i.config.validateStatus;
        i.status && r && !r(i.status) ? e(n("Request failed with status code " + i.status, i.config, null, i.request, i)) : t(i)
    }
}, function(t, e, i) {
    "use strict";
    t.exports = function(t, e, i, n, r) {
        return t.config = e, i && (t.code = i), t.request = n, t.response = r, t
    }
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var r = i(14);
    t.exports = function(t, e, i) {
        if (!e) return t;
        var o;
        if (i) o = i(e);
        else if (r.isURLSearchParams(e)) o = e.toString();
        else {
            var a = [];
            r.forEach(e, function(t, e) {
                null !== t && "undefined" != typeof t && (r.isArray(t) && (e += "[]"), r.isArray(t) || (t = [t]), r.forEach(t, function(t) {
                    r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), a.push(n(e) + "=" + n(t))
                }))
            }), o = a.join("&")
        }
        return o && (t += (t.indexOf("?") === -1 ? "?" : "&") + o), t
    }
}, function(t, e, i) {
    "use strict";
    var n = i(14);
    t.exports = function(t) {
        var e, i, r, o = {};
        return t ? (n.forEach(t.split("\n"), function(t) {
            r = t.indexOf(":"), e = n.trim(t.substr(0, r)).toLowerCase(), i = n.trim(t.substr(r + 1)), e && (o[e] = o[e] ? o[e] + ", " + i : i)
        }), o) : o
    }
}, function(t, e, i) {
    "use strict";
    var n = i(14);
    t.exports = n.isStandardBrowserEnv() ? function() {
        function t(t) {
            var e = t;
            return i && (r.setAttribute("href", e), e = r.href), r.setAttribute("href", e), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            }
        }
        var e, i = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
        return e = t(window.location.href),
            function(i) {
                var r = n.isString(i) ? t(i) : i;
                return r.protocol === e.protocol && r.host === e.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }()
}, function(t, e, i) {
    "use strict";

    function n() {
        this.message = "String contains an invalid character"
    }

    function r(t) {
        for (var e, i, r = String(t), a = "", s = 0, l = o; r.charAt(0 | s) || (l = "=", s % 1); a += l.charAt(63 & e >> 8 - s % 1 * 8)) {
            if (i = r.charCodeAt(s += .75), i > 255) throw new n;
            e = e << 8 | i
        }
        return a
    }
    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", t.exports = r
}, function(t, e, i) {
    "use strict";
    var n = i(14);
    t.exports = n.isStandardBrowserEnv() ? function() {
        return {
            write: function(t, e, i, r, o, a) {
                var s = [];
                s.push(t + "=" + encodeURIComponent(e)), n.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()), n.isString(r) && s.push("path=" + r), n.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ")
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
}, function(t, e, i) {
    "use strict";

    function n() {
        this.handlers = []
    }
    var r = i(14);
    n.prototype.use = function(t, e) {
        return this.handlers.push({
            fulfilled: t,
            rejected: e
        }), this.handlers.length - 1
    }, n.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }, n.prototype.forEach = function(t) {
        r.forEach(this.handlers, function(e) {
            null !== e && t(e)
        })
    }, t.exports = n
}, function(t, e, i) {
    "use strict";

    function n(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
    }
    var r = i(14),
        o = i(275),
        a = i(167),
        s = i(116);
    t.exports = function(t) {
        n(t), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
            delete t.headers[e]
        });
        var e = t.adapter || s.adapter;
        return e(t).then(function(e) {
            return n(t), e.data = o(e.data, e.headers, t.transformResponse), e
        }, function(e) {
            return a(e) || (n(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
        })
    }
}, function(t, e, i) {
    "use strict";
    var n = i(14);
    t.exports = function(t, e, i) {
        return n.forEach(i, function(i) {
            t = i(t, e)
        }), t
    }
}, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}, function(t, e, i) {
    "use strict";
    t.exports = function(t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
}, function(t, e, i) {
    "use strict";

    function n(t) {
        if ("function" != typeof t) throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function(t) {
            e = t
        });
        var i = this;
        t(function(t) {
            i.reason || (i.reason = new r(t), e(i.reason))
        })
    }
    var r = i(168);
    n.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, n.source = function() {
        var t, e = new n(function(e) {
            t = e
        });
        return {
            token: e,
            cancel: t
        }
    }, t.exports = n
}, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        return function(e) {
            return t.apply(null, e)
        }
    }
}, function(t, e, i) {
    ! function(e, i) {
        t.exports = i()
    }(this, function() {
        return function(t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var r = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "", e(0)
        }([function(t, e, i) {
            i(6), i(7), t.exports = i(8)
        }, function(t, e, i) {
            (function(e) {
                ! function(i) {
                    function n(t, e) {
                        return function() {
                            t.apply(e, arguments)
                        }
                    }

                    function r(t) {
                        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof t) throw new TypeError("not a function");
                        this._state = null, this._value = null, this._deferreds = [], u(t, n(a, this), n(s, this))
                    }

                    function o(t) {
                        var e = this;
                        return null === this._state ? void this._deferreds.push(t) : void c(function() {
                            var i = e._state ? t.onFulfilled : t.onRejected;
                            if (null === i) return void(e._state ? t.resolve : t.reject)(e._value);
                            var n;
                            try {
                                n = i(e._value)
                            } catch (r) {
                                return void t.reject(r)
                            }
                            t.resolve(n)
                        })
                    }

                    function a(t) {
                        try {
                            if (t === this) throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                var e = t.then;
                                if ("function" == typeof e) return void u(n(e, t), n(a, this), n(s, this))
                            }
                            this._state = !0, this._value = t, l.call(this)
                        } catch (i) {
                            s.call(this, i)
                        }
                    }

                    function s(t) {
                        this._state = !1, this._value = t, l.call(this)
                    }

                    function l() {
                        for (var t = 0, e = this._deferreds.length; e > t; t++) o.call(this, this._deferreds[t]);
                        this._deferreds = null
                    }

                    function h(t, e, i, n) {
                        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.resolve = i, this.reject = n
                    }

                    function u(t, e, i) {
                        var n = !1;
                        try {
                            t(function(t) {
                                n || (n = !0, e(t))
                            }, function(t) {
                                n || (n = !0, i(t))
                            })
                        } catch (r) {
                            if (n) return;
                            n = !0, i(r)
                        }
                    }
                    var c = "function" == typeof e && e || function(t) {
                            setTimeout(t, 1)
                        },
                        f = Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        };
                    r.prototype["catch"] = function(t) {
                        return this.then(null, t)
                    }, r.prototype.then = function(t, e) {
                        var i = this;
                        return new r(function(n, r) {
                            o.call(i, new h(t, e, n, r))
                        })
                    }, r.all = function() {
                        var t = Array.prototype.slice.call(1 === arguments.length && f(arguments[0]) ? arguments[0] : arguments);
                        return new r(function(e, i) {
                            function n(o, a) {
                                try {
                                    if (a && ("object" == typeof a || "function" == typeof a)) {
                                        var s = a.then;
                                        if ("function" == typeof s) return void s.call(a, function(t) {
                                            n(o, t)
                                        }, i)
                                    }
                                    t[o] = a, 0 === --r && e(t)
                                } catch (l) {
                                    i(l)
                                }
                            }
                            if (0 === t.length) return e([]);
                            for (var r = t.length, o = 0; o < t.length; o++) n(o, t[o])
                        })
                    }, r.resolve = function(t) {
                        return t && "object" == typeof t && t.constructor === r ? t : new r(function(e) {
                            e(t)
                        })
                    }, r.reject = function(t) {
                        return new r(function(e, i) {
                            i(t)
                        })
                    }, r.race = function(t) {
                        return new r(function(e, i) {
                            for (var n = 0, r = t.length; r > n; n++) t[n].then(e, i);
                        })
                    }, r._setImmediateFn = function(t) {
                        c = t
                    }, r.prototype.always = function(t) {
                        var e = this.constructor;
                        return this.then(function(i) {
                            return e.resolve(t()).then(function() {
                                return i
                            })
                        }, function(i) {
                            return e.resolve(t()).then(function() {
                                throw i
                            })
                        })
                    }, "undefined" != typeof t && t.exports ? t.exports = r : i.Promise || (i.Promise = r)
                }(this)
            }).call(e, i(2).setImmediate)
        }, function(t, e, i) {
            (function(t, n) {
                function r(t, e) {
                    this._id = t, this._clearFn = e
                }
                var o = i(3).nextTick,
                    a = Function.prototype.apply,
                    s = Array.prototype.slice,
                    l = {},
                    h = 0;
                e.setTimeout = function() {
                    return new r(a.call(setTimeout, window, arguments), clearTimeout)
                }, e.setInterval = function() {
                    return new r(a.call(setInterval, window, arguments), clearInterval)
                }, e.clearTimeout = e.clearInterval = function(t) {
                    t.close()
                }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
                    this._clearFn.call(window, this._id)
                }, e.enroll = function(t, e) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                }, e.unenroll = function(t) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                }, e._unrefActive = e.active = function(t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                        t._onTimeout && t._onTimeout()
                    }, e))
                }, e.setImmediate = "function" == typeof t ? t : function(t) {
                    var i = h++,
                        n = !(arguments.length < 2) && s.call(arguments, 1);
                    return l[i] = !0, o(function() {
                        l[i] && (n ? t.apply(null, n) : t.call(null), e.clearImmediate(i))
                    }), i
                }, e.clearImmediate = "function" == typeof n ? n : function(t) {
                    delete l[t]
                }
            }).call(e, i(2).setImmediate, i(2).clearImmediate)
        }, function(t, e) {
            function i() {
                h = !1, a.length ? l = a.concat(l) : u = -1, l.length && n()
            }

            function n() {
                if (!h) {
                    var t = setTimeout(i);
                    h = !0;
                    for (var e = l.length; e;) {
                        for (a = l, l = []; ++u < e;) a && a[u].run();
                        u = -1, e = l.length
                    }
                    a = null, h = !1, clearTimeout(t)
                }
            }

            function r(t, e) {
                this.fun = t, this.array = e
            }

            function o() {}
            var a, s = t.exports = {},
                l = [],
                h = !1,
                u = -1;
            s.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                l.push(new r(t, e)), 1 !== l.length || h || setTimeout(n, 0)
            }, r.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = o, s.addListener = o, s.once = o, s.off = o, s.removeListener = o, s.removeAllListeners = o, s.emit = o, s.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, s.cwd = function() {
                return "/"
            }, s.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, s.umask = function() {
                return 0
            }
        }, function(t, e) {
            function i() {
                var t = ~navigator.userAgent.indexOf("Android") && ~navigator.vendor.indexOf("Google") && !~navigator.userAgent.indexOf("Chrome");
                return t && navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534 || /MQQBrowser/g.test(navigator.userAgent)
            }
            var n = function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }() ? window.Blob : function(t, e) {
                    var i = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder);
                    return t.forEach(function(t) {
                        i.append(t)
                    }), i.getBlob(e ? e.type : void 0)
                },
                r = function() {
                    function t() {
                        var t = this,
                            i = [],
                            r = Array(21).join("-") + (+new Date * (1e16 * Math.random())).toString(36),
                            o = XMLHttpRequest.prototype.send;
                        this.getParts = function() {
                            return i.toString()
                        }, this.append = function(t, e, n) {
                            i.push("--" + r + '\r\nContent-Disposition: form-data; name="' + t + '"'), e instanceof Blob ? (i.push('; filename="' + (n || "blob") + '"\r\nContent-Type: ' + e.type + "\r\n\r\n"), i.push(e)) : i.push("\r\n\r\n" + e), i.push("\r\n")
                        }, e++, XMLHttpRequest.prototype.send = function(a) {
                            var s, l, h = this;
                            a === t ? (i.push("--" + r + "--\r\n"), l = new n(i), s = new FileReader, s.onload = function() {
                                o.call(h, s.result)
                            }, s.onerror = function(t) {
                                throw t
                            }, s.readAsArrayBuffer(l), this.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + r), e--, 0 == e && (XMLHttpRequest.prototype.send = o)) : o.call(this, a)
                        }
                    }
                    var e = 0;
                    return t.prototype = Object.create(FormData.prototype), t
                }();
            t.exports = {
                Blob: n,
                FormData: i() ? r : FormData
            }
        }, function(t, e, i) {
            var n, r;
            (function() {
                function i(t) {
                    return !!t.exifdata
                }

                function o(t, e) {
                    e = e || t.match(/^data\:([^\;]+)\;base64,/im)[1] || "", t = t.replace(/^data\:([^\;]+)\;base64,/gim, "");
                    for (var i = atob(t), n = i.length, r = new ArrayBuffer(n), o = new Uint8Array(r), a = 0; n > a; a++) o[a] = i.charCodeAt(a);
                    return r
                }

                function a(t, e) {
                    var i = new XMLHttpRequest;
                    i.open("GET", t, !0), i.responseType = "blob", i.onload = function(t) {
                        (200 == this.status || 0 === this.status) && e(this.response)
                    }, i.send()
                }

                function s(t, e) {
                    function i(i) {
                        var n = l(i),
                            r = h(i);
                        t.exifdata = n || {}, t.iptcdata = r || {}, e && e.call(t)
                    }
                    if (t.src)
                        if (/^data\:/i.test(t.src)) {
                            var n = o(t.src);
                            i(n)
                        } else if (/^blob\:/i.test(t.src)) {
                            var r = new FileReader;
                            r.onload = function(t) {
                                i(t.target.result)
                            }, a(t.src, function(t) {
                                r.readAsArrayBuffer(t)
                            })
                        } else {
                            var s = new XMLHttpRequest;
                            s.onload = function() {
                                200 == this.status || 0 === this.status ? i(s.response) : e(new Error("Could not load image")), s = null
                            }, s.open("GET", t.src, !0), s.responseType = "arraybuffer", s.send(null)
                        } else if (window.FileReader && (t instanceof window.Blob || t instanceof window.File)) {
                        var r = new FileReader;
                        r.onload = function(t) {
                            m && console.log("Got file of length " + t.target.result.byteLength), i(t.target.result)
                        }, r.readAsArrayBuffer(t)
                    }
                }

                function l(t) {
                    var e = new DataView(t);
                    if (m && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return m && console.log("Not a valid JPEG"), !1;
                    for (var i, n = 2, r = t.byteLength; r > n;) {
                        if (255 != e.getUint8(n)) return m && console.log("Not a valid marker at offset " + n + ", found: " + e.getUint8(n)), !1;
                        if (i = e.getUint8(n + 1), m && console.log(i), 225 == i) return m && console.log("Found 0xFFE1 marker"), d(e, n + 4, e.getUint16(n + 2) - 2);
                        n += 2 + e.getUint16(n + 2)
                    }
                }

                function h(t) {
                    var e = new DataView(t);
                    if (m && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return m && console.log("Not a valid JPEG"), !1;
                    for (var i = 2, n = t.byteLength, r = function(t, e) {
                        return 56 === t.getUint8(e) && 66 === t.getUint8(e + 1) && 73 === t.getUint8(e + 2) && 77 === t.getUint8(e + 3) && 4 === t.getUint8(e + 4) && 4 === t.getUint8(e + 5)
                    }; n > i;) {
                        if (r(e, i)) {
                            var o = e.getUint8(i + 7);
                            o % 2 !== 0 && (o += 1), 0 === o && (o = 4);
                            var a = i + 8 + o,
                                s = e.getUint16(i + 6 + o);
                            return u(t, a, s)
                        }
                        i++
                    }
                }

                function u(t, e, i) {
                    for (var n, r, o, a, s, l = new DataView(t), h = {}, u = e; e + i > u;) 28 === l.getUint8(u) && 2 === l.getUint8(u + 1) && (a = l.getUint8(u + 2), a in w && (o = l.getInt16(u + 3), s = o + 5, r = w[a], n = p(l, u + 5, o), h.hasOwnProperty(r) ? h[r] instanceof Array ? h[r].push(n) : h[r] = [h[r], n] : h[r] = n)), u++;
                    return h
                }

                function c(t, e, i, n, r) {
                    var o, a, s, l = t.getUint16(i, !r),
                        h = {};
                    for (s = 0; l > s; s++) o = i + 12 * s + 2, a = n[t.getUint16(o, !r)], !a && m && console.log("Unknown tag: " + t.getUint16(o, !r)), h[a] = f(t, o, e, i, r);
                    return h
                }

                function f(t, e, i, n, r) {
                    var o, a, s, l, h, u, c = t.getUint16(e + 2, !r),
                        f = t.getUint32(e + 4, !r),
                        d = t.getUint32(e + 8, !r) + i;
                    switch (c) {
                        case 1:
                        case 7:
                            if (1 == f) return t.getUint8(e + 8, !r);
                            for (o = f > 4 ? d : e + 8, a = [], l = 0; f > l; l++) a[l] = t.getUint8(o + l);
                            return a;
                        case 2:
                            return o = f > 4 ? d : e + 8, p(t, o, f - 1);
                        case 3:
                            if (1 == f) return t.getUint16(e + 8, !r);
                            for (o = f > 2 ? d : e + 8, a = [], l = 0; f > l; l++) a[l] = t.getUint16(o + 2 * l, !r);
                            return a;
                        case 4:
                            if (1 == f) return t.getUint32(e + 8, !r);
                            for (a = [], l = 0; f > l; l++) a[l] = t.getUint32(d + 4 * l, !r);
                            return a;
                        case 5:
                            if (1 == f) return h = t.getUint32(d, !r), u = t.getUint32(d + 4, !r), s = new Number(h / u), s.numerator = h, s.denominator = u, s;
                            for (a = [], l = 0; f > l; l++) h = t.getUint32(d + 8 * l, !r), u = t.getUint32(d + 4 + 8 * l, !r), a[l] = new Number(h / u), a[l].numerator = h, a[l].denominator = u;
                            return a;
                        case 9:
                            if (1 == f) return t.getInt32(e + 8, !r);
                            for (a = [], l = 0; f > l; l++) a[l] = t.getInt32(d + 4 * l, !r);
                            return a;
                        case 10:
                            if (1 == f) return t.getInt32(d, !r) / t.getInt32(d + 4, !r);
                            for (a = [], l = 0; f > l; l++) a[l] = t.getInt32(d + 8 * l, !r) / t.getInt32(d + 4 + 8 * l, !r);
                            return a
                    }
                }

                function p(t, e, i) {
                    var n, r = "";
                    for (n = e; e + i > n; n++) r += String.fromCharCode(t.getUint8(n));
                    return r
                }

                function d(t, e) {
                    if ("Exif" != p(t, e, 4)) return m && console.log("Not valid EXIF data! " + p(t, e, 4)), !1;
                    var i, n, r, o, a, s = e + 6;
                    if (18761 == t.getUint16(s)) i = !1;
                    else {
                        if (19789 != t.getUint16(s)) return m && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
                        i = !0
                    }
                    if (42 != t.getUint16(s + 2, !i)) return m && console.log("Not valid TIFF data! (no 0x002A)"), !1;
                    var l = t.getUint32(s + 4, !i);
                    if (8 > l) return m && console.log("Not valid TIFF data! (First offset less than 8)", t.getUint32(s + 4, !i)), !1;
                    if (n = c(t, s, s + l, _, i), n.ExifIFDPointer) {
                        o = c(t, s, s + n.ExifIFDPointer, g, i);
                        for (r in o) {
                            switch (r) {
                                case "LightSource":
                                case "Flash":
                                case "MeteringMode":
                                case "ExposureProgram":
                                case "SensingMethod":
                                case "SceneCaptureType":
                                case "SceneType":
                                case "CustomRendered":
                                case "WhiteBalance":
                                case "GainControl":
                                case "Contrast":
                                case "Saturation":
                                case "Sharpness":
                                case "SubjectDistanceRange":
                                case "FileSource":
                                    o[r] = x[r][o[r]];
                                    break;
                                case "ExifVersion":
                                case "FlashpixVersion":
                                    o[r] = String.fromCharCode(o[r][0], o[r][1], o[r][2], o[r][3]);
                                    break;
                                case "ComponentsConfiguration":
                                    o[r] = x.Components[o[r][0]] + x.Components[o[r][1]] + x.Components[o[r][2]] + x.Components[o[r][3]]
                            }
                            n[r] = o[r]
                        }
                    }
                    if (n.GPSInfoIFDPointer) {
                        a = c(t, s, s + n.GPSInfoIFDPointer, y, i);
                        for (r in a) {
                            switch (r) {
                                case "GPSVersionID":
                                    a[r] = a[r][0] + "." + a[r][1] + "." + a[r][2] + "." + a[r][3]
                            }
                            n[r] = a[r]
                        }
                    }
                    return n
                }
                var m = !1,
                    v = function(t) {
                        return t instanceof v ? t : this instanceof v ? void(this.EXIFwrapped = t) : new v(t)
                    };
                "undefined" != typeof t && t.exports && (e = t.exports = v), e.EXIF = v;
                var g = v.Tags = {
                        36864: "ExifVersion",
                        40960: "FlashpixVersion",
                        40961: "ColorSpace",
                        40962: "PixelXDimension",
                        40963: "PixelYDimension",
                        37121: "ComponentsConfiguration",
                        37122: "CompressedBitsPerPixel",
                        37500: "MakerNote",
                        37510: "UserComment",
                        40964: "RelatedSoundFile",
                        36867: "DateTimeOriginal",
                        36868: "DateTimeDigitized",
                        37520: "SubsecTime",
                        37521: "SubsecTimeOriginal",
                        37522: "SubsecTimeDigitized",
                        33434: "ExposureTime",
                        33437: "FNumber",
                        34850: "ExposureProgram",
                        34852: "SpectralSensitivity",
                        34855: "ISOSpeedRatings",
                        34856: "OECF",
                        37377: "ShutterSpeedValue",
                        37378: "ApertureValue",
                        37379: "BrightnessValue",
                        37380: "ExposureBias",
                        37381: "MaxApertureValue",
                        37382: "SubjectDistance",
                        37383: "MeteringMode",
                        37384: "LightSource",
                        37385: "Flash",
                        37396: "SubjectArea",
                        37386: "FocalLength",
                        41483: "FlashEnergy",
                        41484: "SpatialFrequencyResponse",
                        41486: "FocalPlaneXResolution",
                        41487: "FocalPlaneYResolution",
                        41488: "FocalPlaneResolutionUnit",
                        41492: "SubjectLocation",
                        41493: "ExposureIndex",
                        41495: "SensingMethod",
                        41728: "FileSource",
                        41729: "SceneType",
                        41730: "CFAPattern",
                        41985: "CustomRendered",
                        41986: "ExposureMode",
                        41987: "WhiteBalance",
                        41988: "DigitalZoomRation",
                        41989: "FocalLengthIn35mmFilm",
                        41990: "SceneCaptureType",
                        41991: "GainControl",
                        41992: "Contrast",
                        41993: "Saturation",
                        41994: "Sharpness",
                        41995: "DeviceSettingDescription",
                        41996: "SubjectDistanceRange",
                        40965: "InteroperabilityIFDPointer",
                        42016: "ImageUniqueID"
                    },
                    _ = v.TiffTags = {
                        256: "ImageWidth",
                        257: "ImageHeight",
                        34665: "ExifIFDPointer",
                        34853: "GPSInfoIFDPointer",
                        40965: "InteroperabilityIFDPointer",
                        258: "BitsPerSample",
                        259: "Compression",
                        262: "PhotometricInterpretation",
                        274: "Orientation",
                        277: "SamplesPerPixel",
                        284: "PlanarConfiguration",
                        530: "YCbCrSubSampling",
                        531: "YCbCrPositioning",
                        282: "XResolution",
                        283: "YResolution",
                        296: "ResolutionUnit",
                        273: "StripOffsets",
                        278: "RowsPerStrip",
                        279: "StripByteCounts",
                        513: "JPEGInterchangeFormat",
                        514: "JPEGInterchangeFormatLength",
                        301: "TransferFunction",
                        318: "WhitePoint",
                        319: "PrimaryChromaticities",
                        529: "YCbCrCoefficients",
                        532: "ReferenceBlackWhite",
                        306: "DateTime",
                        270: "ImageDescription",
                        271: "Make",
                        272: "Model",
                        305: "Software",
                        315: "Artist",
                        33432: "Copyright"
                    },
                    y = v.GPSTags = {
                        0: "GPSVersionID",
                        1: "GPSLatitudeRef",
                        2: "GPSLatitude",
                        3: "GPSLongitudeRef",
                        4: "GPSLongitude",
                        5: "GPSAltitudeRef",
                        6: "GPSAltitude",
                        7: "GPSTimeStamp",
                        8: "GPSSatellites",
                        9: "GPSStatus",
                        10: "GPSMeasureMode",
                        11: "GPSDOP",
                        12: "GPSSpeedRef",
                        13: "GPSSpeed",
                        14: "GPSTrackRef",
                        15: "GPSTrack",
                        16: "GPSImgDirectionRef",
                        17: "GPSImgDirection",
                        18: "GPSMapDatum",
                        19: "GPSDestLatitudeRef",
                        20: "GPSDestLatitude",
                        21: "GPSDestLongitudeRef",
                        22: "GPSDestLongitude",
                        23: "GPSDestBearingRef",
                        24: "GPSDestBearing",
                        25: "GPSDestDistanceRef",
                        26: "GPSDestDistance",
                        27: "GPSProcessingMethod",
                        28: "GPSAreaInformation",
                        29: "GPSDateStamp",
                        30: "GPSDifferential"
                    },
                    x = v.StringValues = {
                        ExposureProgram: {
                            0: "Not defined",
                            1: "Manual",
                            2: "Normal program",
                            3: "Aperture priority",
                            4: "Shutter priority",
                            5: "Creative program",
                            6: "Action program",
                            7: "Portrait mode",
                            8: "Landscape mode"
                        },
                        MeteringMode: {
                            0: "Unknown",
                            1: "Average",
                            2: "CenterWeightedAverage",
                            3: "Spot",
                            4: "MultiSpot",
                            5: "Pattern",
                            6: "Partial",
                            255: "Other"
                        },
                        LightSource: {
                            0: "Unknown",
                            1: "Daylight",
                            2: "Fluorescent",
                            3: "Tungsten (incandescent light)",
                            4: "Flash",
                            9: "Fine weather",
                            10: "Cloudy weather",
                            11: "Shade",
                            12: "Daylight fluorescent (D 5700 - 7100K)",
                            13: "Day white fluorescent (N 4600 - 5400K)",
                            14: "Cool white fluorescent (W 3900 - 4500K)",
                            15: "White fluorescent (WW 3200 - 3700K)",
                            17: "Standard light A",
                            18: "Standard light B",
                            19: "Standard light C",
                            20: "D55",
                            21: "D65",
                            22: "D75",
                            23: "D50",
                            24: "ISO studio tungsten",
                            255: "Other"
                        },
                        Flash: {
                            0: "Flash did not fire",
                            1: "Flash fired",
                            5: "Strobe return light not detected",
                            7: "Strobe return light detected",
                            9: "Flash fired, compulsory flash mode",
                            13: "Flash fired, compulsory flash mode, return light not detected",
                            15: "Flash fired, compulsory flash mode, return light detected",
                            16: "Flash did not fire, compulsory flash mode",
                            24: "Flash did not fire, auto mode",
                            25: "Flash fired, auto mode",
                            29: "Flash fired, auto mode, return light not detected",
                            31: "Flash fired, auto mode, return light detected",
                            32: "No flash function",
                            65: "Flash fired, red-eye reduction mode",
                            69: "Flash fired, red-eye reduction mode, return light not detected",
                            71: "Flash fired, red-eye reduction mode, return light detected",
                            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                            89: "Flash fired, auto mode, red-eye reduction mode",
                            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                        },
                        SensingMethod: {
                            1: "Not defined",
                            2: "One-chip color area sensor",
                            3: "Two-chip color area sensor",
                            4: "Three-chip color area sensor",
                            5: "Color sequential area sensor",
                            7: "Trilinear sensor",
                            8: "Color sequential linear sensor"
                        },
                        SceneCaptureType: {
                            0: "Standard",
                            1: "Landscape",
                            2: "Portrait",
                            3: "Night scene"
                        },
                        SceneType: {
                            1: "Directly photographed"
                        },
                        CustomRendered: {
                            0: "Normal process",
                            1: "Custom process"
                        },
                        WhiteBalance: {
                            0: "Auto white balance",
                            1: "Manual white balance"
                        },
                        GainControl: {
                            0: "None",
                            1: "Low gain up",
                            2: "High gain up",
                            3: "Low gain down",
                            4: "High gain down"
                        },
                        Contrast: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        Saturation: {
                            0: "Normal",
                            1: "Low saturation",
                            2: "High saturation"
                        },
                        Sharpness: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        SubjectDistanceRange: {
                            0: "Unknown",
                            1: "Macro",
                            2: "Close view",
                            3: "Distant view"
                        },
                        FileSource: {
                            3: "DSC"
                        },
                        Components: {
                            0: "",
                            1: "Y",
                            2: "Cb",
                            3: "Cr",
                            4: "R",
                            5: "G",
                            6: "B"
                        }
                    },
                    w = {
                        120: "caption",
                        110: "credit",
                        25: "keywords",
                        55: "dateCreated",
                        80: "byline",
                        85: "bylineTitle",
                        122: "captionWriter",
                        105: "headline",
                        116: "copyright",
                        15: "category"
                    };
                v.getData = function(t, e) {
                    return !((t instanceof Image || t instanceof HTMLImageElement) && !t.complete) && (i(t) ? e && e.call(t) : s(t, e), !0)
                }, v.getTag = function(t, e) {
                    return i(t) ? t.exifdata[e] : void 0
                }, v.getAllTags = function(t) {
                    if (!i(t)) return {};
                    var e, n = t.exifdata,
                        r = {};
                    for (e in n) n.hasOwnProperty(e) && (r[e] = n[e]);
                    return r
                }, v.pretty = function(t) {
                    if (!i(t)) return "";
                    var e, n = t.exifdata,
                        r = "";
                    for (e in n) n.hasOwnProperty(e) && (r += "object" == typeof n[e] ? n[e] instanceof Number ? e + " : " + n[e] + " [" + n[e].numerator + "/" + n[e].denominator + "]\r\n" : e + " : [" + n[e].length + " values]\r\n" : e + " : " + n[e] + "\r\n");
                    return r
                }, v.readFromBinaryFile = function(t) {
                    return l(t)
                }, n = [], r = function() {
                    return v
                }.apply(e, n), !(void 0 !== r && (t.exports = r))
            }).call(this)
        }, function(t, e, i) {
            var n, r;
            ! function() {
                function i(t) {
                    var e = t.naturalWidth,
                        i = t.naturalHeight;
                    if (e * i > 1048576) {
                        var n = document.createElement("canvas");
                        n.width = n.height = 1;
                        var r = n.getContext("2d");
                        return r.drawImage(t, -e + 1, 0), 0 === r.getImageData(0, 0, 1, 1).data[3]
                    }
                    return !1
                }

                function o(t, e, i) {
                    var n = document.createElement("canvas");
                    n.width = 1, n.height = i;
                    var r = n.getContext("2d");
                    r.drawImage(t, 0, 0);
                    for (var o = r.getImageData(0, 0, 1, i).data, a = 0, s = i, l = i; l > a;) {
                        var h = o[4 * (l - 1) + 3];
                        0 === h ? s = l : a = l, l = s + a >> 1
                    }
                    var u = l / i;
                    return 0 === u ? 1 : u
                }

                function a(t, e, i) {
                    var n = document.createElement("canvas");
                    return s(t, n, e, i), n.toDataURL("image/jpeg", e.quality || .8)
                }

                function s(t, e, n, r) {
                    var a = t.naturalWidth,
                        s = t.naturalHeight,
                        h = n.width,
                        u = n.height,
                        c = e.getContext("2d");
                    c.save(), l(e, c, h, u, n.orientation);
                    var f = i(t);
                    f && (a /= 2, s /= 2);
                    var p = 1024,
                        d = document.createElement("canvas");
                    d.width = d.height = p;
                    for (var m = d.getContext("2d"), v = r ? o(t, a, s) : 1, g = Math.ceil(p * h / a), _ = Math.ceil(p * u / s / v), y = 0, x = 0; s > y;) {
                        for (var w = 0, b = 0; a > w;) m.clearRect(0, 0, p, p), m.drawImage(t, -w, -y), c.drawImage(d, 0, 0, p, p, b, x, g, _), w += p, b += g;
                        y += p, x += _
                    }
                    c.restore(), d = m = null
                }

                function l(t, e, i, n, r) {
                    switch (r) {
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            t.width = n, t.height = i;
                            break;
                        default:
                            t.width = i, t.height = n
                    }
                    switch (r) {
                        case 2:
                            e.translate(i, 0), e.scale(-1, 1);
                            break;
                        case 3:
                            e.translate(i, n), e.rotate(Math.PI);
                            break;
                        case 4:
                            e.translate(0, n), e.scale(1, -1);
                            break;
                        case 5:
                            e.rotate(.5 * Math.PI), e.scale(1, -1);
                            break;
                        case 6:
                            e.rotate(.5 * Math.PI), e.translate(0, -n);
                            break;
                        case 7:
                            e.rotate(.5 * Math.PI), e.translate(i, -n), e.scale(-1, 1);
                            break;
                        case 8:
                            e.rotate(-.5 * Math.PI), e.translate(-i, 0)
                    }
                }

                function h(t) {
                    if (window.Blob && t instanceof Blob) {
                        var e = new Image,
                            i = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                        if (!i) throw Error("No createObjectURL function found to create blob url");
                        e.src = i.createObjectURL(t), this.blob = t, t = e
                    }
                    if (!t.naturalWidth && !t.naturalHeight) {
                        var n = this;
                        t.onload = function() {
                            var t = n.imageLoadListeners;
                            if (t) {
                                n.imageLoadListeners = null;
                                for (var e = 0, i = t.length; i > e; e++) t[e]()
                            }
                        }, this.imageLoadListeners = []
                    }
                    this.srcImage = t
                }
                h.prototype.render = function(t, e, i) {
                    if (this.imageLoadListeners) {
                        var n = this;
                        return void this.imageLoadListeners.push(function() {
                            n.render(t, e, i)
                        })
                    }
                    e = e || {};
                    var r = this.srcImage,
                        o = r.src,
                        l = o.length,
                        h = r.naturalWidth,
                        u = r.naturalHeight,
                        c = e.width,
                        f = e.height,
                        p = e.maxWidth,
                        d = e.maxHeight,
                        m = this.blob && "image/jpeg" === this.blob.type || 0 === o.indexOf("data:image/jpeg") || o.indexOf(".jpg") === l - 4 || o.indexOf(".jpeg") === l - 5;
                    c && !f ? f = u * c / h << 0 : f && !c ? c = h * f / u << 0 : (c = h, f = u), p && c > p && (c = p, f = u * c / h << 0), d && f > d && (f = d, c = h * f / u << 0);
                    var v = {
                        width: c,
                        height: f
                    };
                    for (var g in e) v[g] = e[g];
                    var _ = t.tagName.toLowerCase();
                    "img" === _ ? t.src = a(this.srcImage, v, m) : "canvas" === _ && s(this.srcImage, t, v, m), "function" == typeof this.onrender && this.onrender(t), i && i()
                }, n = [], r = function() {
                    return h
                }.apply(e, n), !(void 0 !== r && (t.exports = r))
            }()
        }, function(t, e) {
            function i(t) {
                function e(t) {
                    for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], i = 0; 64 > i; i++) {
                        var n = S((e[i] * t + 50) / 100);
                        1 > n ? n = 1 : n > 255 && (n = 255), P[X[i]] = n
                    }
                    for (var r = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], o = 0; 64 > o; o++) {
                        var a = S((r[o] * t + 50) / 100);
                        1 > a ? a = 1 : a > 255 && (a = 255), k[X[o]] = a
                    }
                    for (var s = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], l = 0, h = 0; 8 > h; h++)
                        for (var u = 0; 8 > u; u++) C[l] = 1 / (P[X[l]] * s[h] * s[u] * 8), A[l] = 1 / (k[X[l]] * s[h] * s[u] * 8), l++
                }

                function i(t, e) {
                    for (var i = 0, n = 0, r = new Array, o = 1; 16 >= o; o++) {
                        for (var a = 1; a <= t[o]; a++) r[e[n]] = [], r[e[n]][0] = i, r[e[n]][1] = o, n++, i++;
                        i *= 2
                    }
                    return r
                }

                function n() {
                    y = i($, V), x = i(Y, W), w = i(H, U), b = i(q, G)
                }

                function r() {
                    for (var t = 1, e = 2, i = 1; 15 >= i; i++) {
                        for (var n = t; e > n; n++) O[32767 + n] = i, M[32767 + n] = [], M[32767 + n][1] = i, M[32767 + n][0] = n;
                        for (var r = -(e - 1); - t >= r; r++) O[32767 + r] = i, M[32767 + r] = [], M[32767 + r][1] = i, M[32767 + r][0] = e - 1 + r;
                        t <<= 1, e <<= 1
                    }
                }

                function o() {
                    for (var t = 0; 256 > t; t++) j[t] = 19595 * t, j[t + 256 >> 0] = 38470 * t, j[t + 512 >> 0] = 7471 * t + 32768, j[t + 768 >> 0] = -11059 * t, j[t + 1024 >> 0] = -21709 * t, j[t + 1280 >> 0] = 32768 * t + 8421375, j[t + 1536 >> 0] = -27439 * t, j[t + 1792 >> 0] = -5329 * t
                }

                function a(t) {
                    for (var e = t[0], i = t[1] - 1; i >= 0;) e & 1 << i && (L |= 1 << R), i--, R--, 0 > R && (255 == L ? (s(255), s(0)) : s(L), R = 7, L = 0)
                }

                function s(t) {
                    I.push(N[t])
                }

                function l(t) {
                    s(t >> 8 & 255), s(255 & t)
                }

                function h(t, e) {
                    var i, n, r, o, a, s, l, h, u, c = 0;
                    const f = 8,
                        p = 64;
                    for (u = 0; f > u; ++u) {
                        i = t[c], n = t[c + 1], r = t[c + 2], o = t[c + 3], a = t[c + 4], s = t[c + 5], l = t[c + 6], h = t[c + 7];
                        var d = i + h,
                            m = i - h,
                            v = n + l,
                            g = n - l,
                            _ = r + s,
                            y = r - s,
                            x = o + a,
                            w = o - a,
                            b = d + x,
                            T = d - x,
                            S = v + _,
                            P = v - _;
                        t[c] = b + S, t[c + 4] = b - S;
                        var k = .707106781 * (P + T);
                        t[c + 2] = T + k, t[c + 6] = T - k, b = w + y, S = y + g, P = g + m;
                        var C = .382683433 * (b - P),
                            A = .5411961 * b + C,
                            M = 1.306562965 * P + C,
                            O = .707106781 * S,
                            D = m + O,
                            I = m - O;
                        t[c + 5] = I + A, t[c + 3] = I - A, t[c + 1] = D + M, t[c + 7] = D - M, c += 8
                    }
                    for (c = 0, u = 0; f > u; ++u) {
                        i = t[c], n = t[c + 8], r = t[c + 16], o = t[c + 24], a = t[c + 32], s = t[c + 40], l = t[c + 48], h = t[c + 56];
                        var L = i + h,
                            R = i - h,
                            z = n + l,
                            F = n - l,
                            B = r + s,
                            N = r - s,
                            j = o + a,
                            X = o - a,
                            $ = L + j,
                            V = L - j,
                            H = z + B,
                            U = z - B;
                        t[c] = $ + H, t[c + 32] = $ - H;
                        var Y = .707106781 * (U + V);
                        t[c + 16] = V + Y, t[c + 48] = V - Y, $ = X + N, H = N + F, U = F + R;
                        var W = .382683433 * ($ - U),
                            q = .5411961 * $ + W,
                            G = 1.306562965 * U + W,
                            Z = .707106781 * H,
                            K = R + Z,
                            Q = R - Z;
                        t[c + 40] = Q + q, t[c + 24] = Q - q, t[c + 8] = K + G, t[c + 56] = K - G, c++
                    }
                    var J;
                    for (u = 0; p > u; ++u) J = t[u] * e[u], E[u] = J > 0 ? J + .5 | 0 : J - .5 | 0;
                    return E
                }

                function u() {
                    l(65504), l(16), s(74), s(70), s(73), s(70), s(0), s(1), s(1), s(0), l(1), l(1), s(0), s(0)
                }

                function c(t, e) {
                    l(65472), l(17), s(8), l(e), l(t), s(3), s(1), s(17), s(0), s(2), s(17), s(1), s(3), s(17), s(1)
                }

                function f() {
                    l(65499), l(132), s(0);
                    for (var t = 0; 64 > t; t++) s(P[t]);
                    s(1);
                    for (var e = 0; 64 > e; e++) s(k[e])
                }

                function p() {
                    l(65476), l(418), s(0);
                    for (var t = 0; 16 > t; t++) s($[t + 1]);
                    for (var e = 0; 11 >= e; e++) s(V[e]);
                    s(16);
                    for (var i = 0; 16 > i; i++) s(H[i + 1]);
                    for (var n = 0; 161 >= n; n++) s(U[n]);
                    s(1);
                    for (var r = 0; 16 > r; r++) s(Y[r + 1]);
                    for (var o = 0; 11 >= o; o++) s(W[o]);
                    s(17);
                    for (var a = 0; 16 > a; a++) s(q[a + 1]);
                    for (var h = 0; 161 >= h; h++) s(G[h])
                }

                function d() {
                    l(65498), l(12), s(3), s(1), s(0), s(2), s(17), s(3), s(17), s(0), s(63), s(0)
                }

                function m(t, e, i, n, r) {
                    var o, s = r[0],
                        l = r[240];
                    const u = 16,
                        c = 63,
                        f = 64;
                    for (var p = h(t, e), d = 0; f > d; ++d) D[X[d]] = p[d];
                    var m = D[0] - i;
                    i = D[0], 0 == m ? a(n[0]) : (o = 32767 + m, a(n[O[o]]), a(M[o]));
                    for (var v = 63; v > 0 && 0 == D[v]; v--);
                    if (0 == v) return a(s), i;
                    for (var g, _ = 1; v >= _;) {
                        for (var y = _; 0 == D[_] && v >= _; ++_);
                        var x = _ - y;
                        if (x >= u) {
                            g = x >> 4;
                            for (var w = 1; g >= w; ++w) a(l);
                            x = 15 & x
                        }
                        o = 32767 + D[_], a(r[(x << 4) + O[o]]), a(M[o]), _++
                    }
                    return v != c && a(s), i
                }

                function v() {
                    for (var t = String.fromCharCode, e = 0; 256 > e; e++) N[e] = t(e)
                }

                function g(t) {
                    if (0 >= t && (t = 1), t > 100 && (t = 100), T != t) {
                        var i = 0;
                        i = 50 > t ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t), e(i), T = t
                    }
                }

                function _() {
                    var e = (new Date).getTime();
                    t || (t = 50), v(), n(), r(), o(), g(t), (new Date).getTime() - e
                }
                var y, x, w, b, T, S = (Math.round, Math.floor),
                    P = new Array(64),
                    k = new Array(64),
                    C = new Array(64),
                    A = new Array(64),
                    M = new Array(65535),
                    O = new Array(65535),
                    E = new Array(64),
                    D = new Array(64),
                    I = [],
                    L = 0,
                    R = 7,
                    z = new Array(64),
                    F = new Array(64),
                    B = new Array(64),
                    N = new Array(256),
                    j = new Array(2048),
                    X = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
                    $ = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                    V = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    H = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
                    U = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
                    Y = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                    W = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    q = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
                    G = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
                this.encode = function(t, e, i) {
                    var n = (new Date).getTime();
                    e && g(e), I = new Array, L = 0, R = 7, l(65496), u(), f(), c(t.width, t.height), p(), d();
                    var r = 0,
                        o = 0,
                        s = 0;
                    L = 0, R = 7, this.encode.displayName = "_encode_";
                    for (var h, v, _, T, S, P, k, M, O, E = t.data, D = t.width, N = t.height, X = 4 * D, $ = 0; N > $;) {
                        for (h = 0; X > h;) {
                            for (S = X * $ + h, P = S, k = -1, M = 0, O = 0; 64 > O; O++) M = O >> 3, k = 4 * (7 & O), P = S + M * X + k, $ + M >= N && (P -= X * ($ + 1 + M - N)), h + k >= X && (P -= h + k - X + 4), v = E[P++], _ = E[P++], T = E[P++], z[O] = (j[v] + j[_ + 256 >> 0] + j[T + 512 >> 0] >> 16) - 128, F[O] = (j[v + 768 >> 0] + j[_ + 1024 >> 0] + j[T + 1280 >> 0] >> 16) - 128, B[O] = (j[v + 1280 >> 0] + j[_ + 1536 >> 0] + j[T + 1792 >> 0] >> 16) - 128;
                            r = m(z, C, r, y, w), o = m(F, A, o, x, b), s = m(B, A, s, x, b), h += 32
                        }
                        $ += 8
                    }
                    if (R >= 0) {
                        var V = [];
                        V[1] = R + 1, V[0] = (1 << R + 1) - 1, a(V)
                    }
                    if (l(65497), i) {
                        for (var H = I.length, U = new Uint8Array(H), Y = 0; H > Y; Y++) U[Y] = I[Y].charCodeAt();
                        return I = [], (new Date).getTime() - n, U
                    }
                    var W = "data:image/jpeg;base64," + btoa(I.join(""));
                    return I = [], (new Date).getTime() - n, W
                }, _()
            }
            t.exports = i
        }, function(t, e, i) {
            function n(t, e) {
                var i = this;
                if (!t) throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");
                e = e || {}, i.defaults = {
                    width: null,
                    height: null,
                    fieldName: "file",
                    quality: .7
                }, i.file = t;
                for (var n in e) e.hasOwnProperty(n) && (i.defaults[n] = e[n]);
                return this.init()
            }

            function r(t) {
                var e = null;
                return e = t ? [].filter.call(document.scripts, function(e) {
                    return -1 !== e.src.indexOf(t)
                })[0] : document.scripts[document.scripts.length - 1], e ? e.src.substr(0, e.src.lastIndexOf("/")) : null
            }

            function o(t) {
                var e;
                e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : unescape(t.split(",")[1]);
                for (var i = t.split(",")[0].split(":")[1].split(";")[0], n = new Uint8Array(e.length), r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
                return new s.Blob([n.buffer], {
                    type: i
                })
            }
            i.p = r("lrz") + "/", window.URL = window.URL || window.webkitURL;
            var a = i(1),
                s = i(4),
                l = i(5),
                h = function(t) {
                    var e = /OS (\d)_.* like Mac OS X/g.exec(t),
                        i = /Android (\d.*?);/g.exec(t) || /Android\/(\d.*?) /g.exec(t);
                    return {
                        oldIOS: !!e && +e.pop() < 8,
                        oldAndroid: !!i && +i.pop().substr(0, 3) < 4.5,
                        iOS: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(t),
                        android: /Android/g.test(t),
                        mQQBrowser: /MQQBrowser/g.test(t)
                    }
                }(navigator.userAgent);
            n.prototype.init = function() {
                var t = this,
                    e = t.file,
                    i = "string" == typeof e,
                    n = /^data:/.test(e),
                    r = new Image,
                    l = document.createElement("canvas"),
                    h = i ? e : URL.createObjectURL(e);
                if (t.img = r, t.blob = h, t.canvas = l, i ? t.fileName = n ? "base64.jpg" : e.split("/").pop() : t.fileName = e.name, !document.createElement("canvas").getContext) throw new Error("浏览器不支持canvas");
                return new a(function(i, a) {
                    r.onerror = function() {
                        var t = new Error("加载图片文件失败");
                        throw a(t), t
                    }, r.onload = function() {
                        t._getBase64().then(function(t) {
                            if (t.length < 10) {
                                var e = new Error("生成base64失败");
                                throw a(e), e
                            }
                            return t
                        }).then(function(n) {
                            var r = null;
                            "object" == typeof t.file && n.length > t.file.size ? (r = new FormData, e = t.file) : (r = new s.FormData, e = o(n)), r.append(t.defaults.fieldName, e, t.fileName.replace(/\..+/g, ".jpg")), i({
                                formData: r,
                                fileLen: +e.size,
                                base64: n,
                                base64Len: n.length,
                                origin: t.file,
                                file: e
                            });
                            for (var a in t) t.hasOwnProperty(a) && (t[a] = null);
                            URL.revokeObjectURL(t.blob)
                        })
                    }, !n && (r.crossOrigin = "*"), r.src = h
                })
            }, n.prototype._getBase64 = function() {
                var t = this,
                    e = t.img,
                    i = t.file,
                    n = t.canvas;
                return new a(function(r) {
                    try {
                        l.getData("object" == typeof i ? i : e, function() {
                            t.orientation = l.getTag(this, "Orientation"), t.resize = t._getResize(), t.ctx = n.getContext("2d"), n.width = t.resize.width, n.height = t.resize.height, t.ctx.fillStyle = "#fff", t.ctx.fillRect(0, 0, n.width, n.height), h.oldIOS ? t._createBase64ForOldIOS().then(r) : t._createBase64().then(r)
                        })
                    } catch (o) {
                        throw new Error(o)
                    }
                })
            }, n.prototype._createBase64ForOldIOS = function() {
                var t = this,
                    e = t.img,
                    n = t.canvas,
                    r = t.defaults,
                    o = t.orientation;
                return new a(function(t) {
                    ! function() {
                        var a = [i(6)];
                        (function(i) {
                            var a = new i(e);
                            "5678".indexOf(o) > -1 ? a.render(n, {
                                width: n.height,
                                height: n.width,
                                orientation: o
                            }) : a.render(n, {
                                width: n.width,
                                height: n.height,
                                orientation: o
                            }), t(n.toDataURL("image/jpeg", r.quality))
                        }).apply(null, a)
                    }()
                })
            }, n.prototype._createBase64 = function() {
                var t = this,
                    e = t.resize,
                    n = t.img,
                    r = t.canvas,
                    o = t.ctx,
                    s = t.defaults,
                    l = t.orientation;
                switch (l) {
                    case 3:
                        o.rotate(180 * Math.PI / 180), o.drawImage(n, -e.width, -e.height, e.width, e.height);
                        break;
                    case 6:
                        o.rotate(90 * Math.PI / 180), o.drawImage(n, 0, -e.width, e.height, e.width);
                        break;
                    case 8:
                        o.rotate(270 * Math.PI / 180), o.drawImage(n, -e.height, 0, e.height, e.width);
                        break;
                    case 2:
                        o.translate(e.width, 0), o.scale(-1, 1), o.drawImage(n, 0, 0, e.width, e.height);
                        break;
                    case 4:
                        o.translate(e.width, 0), o.scale(-1, 1), o.rotate(180 * Math.PI / 180), o.drawImage(n, -e.width, -e.height, e.width, e.height);
                        break;
                    case 5:
                        o.translate(e.width, 0), o.scale(-1, 1), o.rotate(90 * Math.PI / 180), o.drawImage(n, 0, -e.width, e.height, e.width);
                        break;
                    case 7:
                        o.translate(e.width, 0), o.scale(-1, 1), o.rotate(270 * Math.PI / 180), o.drawImage(n, -e.height, 0, e.height, e.width);
                        break;
                    default:
                        o.drawImage(n, 0, 0, e.width, e.height)
                }
                return new a(function(t) {
                    h.oldAndroid || h.mQQBrowser || !navigator.userAgent ? ! function() {
                        var e = [i(7)];
                        (function(e) {
                            var i = new e,
                                n = o.getImageData(0, 0, r.width, r.height);
                            t(i.encode(n, 100 * s.quality))
                        }).apply(null, e)
                    }() : t(r.toDataURL("image/jpeg", s.quality))
                })
            }, n.prototype._getResize = function() {
                var t = this,
                    e = t.img,
                    i = t.defaults,
                    n = i.width,
                    r = i.height,
                    o = t.orientation,
                    a = {
                        width: e.width,
                        height: e.height
                    };
                if ("5678".indexOf(o) > -1 && (a.width = e.height, a.height = e.width), a.width < n || a.height < r) return a;
                var s = a.width / a.height;
                for (n && r ? s >= n / r ? a.width > n && (a.width = n, a.height = Math.ceil(n / s)) : a.height > r && (a.height = r, a.width = Math.ceil(r * s)) : n ? n < a.width && (a.width = n, a.height = Math.ceil(n / s)) : r && r < a.height && (a.width = Math.ceil(r * s), a.height = r); a.width >= 3264 || a.height >= 2448;) a.width *= .8, a.height *= .8;
                return a
            }, window.lrz = function(t, e) {
                return new n(t, e)
            }, window.lrz.version = "4.9.40", t.exports = window.lrz
        }])
    })
}, function(t, e, i) {
    function n(t, e) {
        u.each(e, function(e, i) {
            y.hasClass(i) || ("object" == typeof e ? t[i] = t[i] ? u.merge(t[i], e, !1) : u.clone(e) : null == t[i] && (t[i] = e))
        })
    }

    function r(t) {
        t = t, this.option = {}, this.option[w] = 1, this._componentsMap = u.createHashMap({
            series: []
        }), this._seriesIndices = null, n(t, this._theme.option), u.merge(t, x, !1), this.mergeOption(t)
    }

    function o(t, e) {
        u.isArray(e) || (e = e ? [e] : []);
        var i = {};
        return p(e, function(e) {
            i[e] = (t.get(e) || []).slice()
        }), i
    }

    function a(t, e, i) {
        var n = e.type ? e.type : i ? i.subType : y.determineSubType(t, e);
        return n
    }

    function s(t) {
        return m(t, function(t) {
            return t.componentIndex
        }) || []
    }

    function l(t, e) {
        return e.hasOwnProperty("subType") ? d(t, function(t) {
            return t.subType === e.subType
        }) : t
    }

    function h(t) {
        if (__DEV__ && !t._seriesIndices) throw new Error("Option should contains series.")
    }
    var u = i(3),
        c = i(24),
        f = i(33),
        p = u.each,
        d = u.filter,
        m = u.map,
        v = u.isArray,
        g = u.indexOf,
        _ = u.isObject,
        y = i(83),
        x = i(316),
        w = "\0_ec_inner",
        b = f.extend({
            constructor: b,
            init: function(t, e, i, n) {
                i = i || {}, this.option = null, this._theme = new f(i), this._optionManager = n
            },
            setOption: function(t, e) {
                u.assert(!(w in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
            },
            resetOption: function(t) {
                var e = !1,
                    i = this._optionManager;
                if (!t || "recreate" === t) {
                    var n = i.mountOption("recreate" === t);
                    this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : r.call(this, n), e = !0
                }
                if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                    var o = i.getTimelineOption(this);
                    o && (this.mergeOption(o), e = !0)
                }
                if (!t || "recreate" === t || "media" === t) {
                    var a = i.getMediaOption(this, this._api);
                    a.length && p(a, function(t) {
                        this.mergeOption(t, e = !0)
                    }, this)
                }
                return e
            },
            mergeOption: function(t) {
                function e(e, r) {
                    var l = c.normalizeToArray(t[e]),
                        h = c.mappingToExists(n.get(e), l);
                    c.makeIdAndName(h), p(h, function(t, i) {
                        var n = t.option;
                        _(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = a(e, n, t.exist))
                    });
                    var f = o(n, r);
                    i[e] = [], n.set(e, []), p(h, function(t, r) {
                        var o = t.exist,
                            a = t.option;
                        if (u.assert(_(a) || o, "Empty component definition"), a) {
                            var s = y.getClass(e, t.keyInfo.subType, !0);
                            if (o && o instanceof s) o.name = t.keyInfo.name, o.mergeOption(a, this), o.optionUpdated(a, !1);
                            else {
                                var l = u.extend({
                                    dependentModels: f,
                                    componentIndex: r
                                }, t.keyInfo);
                                o = new s(a, this, this, l), u.extend(o, l), o.init(a, this, this, l), o.optionUpdated(null, !0)
                            }
                        } else o.mergeOption({}, this), o.optionUpdated({}, !1);
                        n.get(e)[r] = o, i[e][r] = o.option
                    }, this), "series" === e && (this._seriesIndices = s(n.get("series")))
                }
                var i = this.option,
                    n = this._componentsMap,
                    r = [];
                p(t, function(t, e) {
                    null != t && (y.hasClass(e) ? r.push(e) : i[e] = null == i[e] ? u.clone(t) : u.merge(i[e], t, !0))
                }), y.topologicalTravel(r, y.getAllClassMainTypes(), e, this), this._seriesIndices = this._seriesIndices || []
            },
            getOption: function() {
                var t = u.clone(this.option);
                return p(t, function(e, i) {
                    if (y.hasClass(i)) {
                        for (var e = c.normalizeToArray(e), n = e.length - 1; n >= 0; n--) c.isIdInner(e[n]) && e.splice(n, 1);
                        t[i] = e
                    }
                }), delete t[w], t
            },
            getTheme: function() {
                return this._theme
            },
            getComponent: function(t, e) {
                var i = this._componentsMap.get(t);
                if (i) return i[e || 0]
            },
            queryComponents: function(t) {
                var e = t.mainType;
                if (!e) return [];
                var i = t.index,
                    n = t.id,
                    r = t.name,
                    o = this._componentsMap.get(e);
                if (!o || !o.length) return [];
                var a;
                if (null != i) v(i) || (i = [i]), a = d(m(i, function(t) {
                    return o[t]
                }), function(t) {
                    return !!t
                });
                else if (null != n) {
                    var s = v(n);
                    a = d(o, function(t) {
                        return s && g(n, t.id) >= 0 || !s && t.id === n
                    })
                } else if (null != r) {
                    var h = v(r);
                    a = d(o, function(t) {
                        return h && g(r, t.name) >= 0 || !h && t.name === r
                    })
                } else a = o.slice();
                return l(a, t)
            },
            findComponents: function(t) {
                function e(t) {
                    var e = r + "Index",
                        i = r + "Id",
                        n = r + "Name";
                    return !t || null == t[e] && null == t[i] && null == t[n] ? null : {
                        mainType: r,
                        index: t[e],
                        id: t[i],
                        name: t[n]
                    }
                }

                function i(e) {
                    return t.filter ? d(e, t.filter) : e
                }
                var n = t.query,
                    r = t.mainType,
                    o = e(n),
                    a = o ? this.queryComponents(o) : this._componentsMap.get(r);
                return i(l(a, t))
            },
            eachComponent: function(t, e, i) {
                var n = this._componentsMap;
                if ("function" == typeof t) i = e, e = t, n.each(function(t, n) {
                    p(t, function(t, r) {
                        e.call(i, n, t, r)
                    })
                });
                else if (u.isString(t)) p(n.get(t), e, i);
                else if (_(t)) {
                    var r = this.findComponents(t);
                    p(r, e, i)
                }
            },
            getSeriesByName: function(t) {
                var e = this._componentsMap.get("series");
                return d(e, function(e) {
                    return e.name === t
                })
            },
            getSeriesByIndex: function(t) {
                return this._componentsMap.get("series")[t]
            },
            getSeriesByType: function(t) {
                var e = this._componentsMap.get("series");
                return d(e, function(e) {
                    return e.subType === t
                })
            },
            getSeries: function() {
                return this._componentsMap.get("series").slice()
            },
            eachSeries: function(t, e) {
                h(this), p(this._seriesIndices, function(i) {
                    var n = this._componentsMap.get("series")[i];
                    t.call(e, n, i)
                }, this)
            },
            eachRawSeries: function(t, e) {
                p(this._componentsMap.get("series"), t, e)
            },
            eachSeriesByType: function(t, e, i) {
                h(this), p(this._seriesIndices, function(n) {
                    var r = this._componentsMap.get("series")[n];
                    r.subType === t && e.call(i, r, n)
                }, this)
            },
            eachRawSeriesByType: function(t, e, i) {
                return p(this.getSeriesByType(t), e, i)
            },
            isSeriesFiltered: function(t) {
                return h(this), u.indexOf(this._seriesIndices, t.componentIndex) < 0
            },
            getCurrentSeriesIndices: function() {
                return (this._seriesIndices || []).slice()
            },
            filterSeries: function(t, e) {
                h(this);
                var i = d(this._componentsMap.get("series"), t, e);
                this._seriesIndices = s(i)
            },
            restoreData: function() {
                var t = this._componentsMap;
                this._seriesIndices = s(t.get("series"));
                var e = [];
                t.each(function(t, i) {
                    e.push(i)
                }), y.topologicalTravel(e, y.getAllClassMainTypes(), function(e, i) {
                    p(t.get(e), function(t) {
                        t.restoreData()
                    })
                })
            }
        });
    u.mixin(b, i(183)), t.exports = b
}, function(t, e, i) {
    var n = i(118)([
        ["lineWidth", "width"],
        ["stroke", "color"],
        ["opacity"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["shadowColor"]
    ]);
    t.exports = {
        getLineStyle: function(t) {
            var e = n.call(this, t),
                i = this.getLineDash(e.lineWidth);
            return i && (e.lineDash = i), e
        },
        getLineDash: function(t) {
            null == t && (t = 1);
            var e = this.get("type"),
                i = Math.max(t, 2),
                n = 4 * t;
            return "solid" === e || null == e ? null : "dashed" === e ? [n, n] : [i, i]
        }
    }
}, function(t, e, i) {
    t.exports = {
        getAreaStyle: i(118)([
            ["fill", "color"],
            ["shadowBlur"],
            ["shadowOffsetX"],
            ["shadowOffsetY"],
            ["opacity"],
            ["shadowColor"]
        ])
    }
}, function(t, e, i) {
    var n = i(63),
        r = i(35),
        o = ["textStyle", "color"];
    t.exports = {
        getTextColor: function(t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(o) : null)
        },
        getFont: function() {
            return r.getFont({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, this.ecModel)
        },
        getTextRect: function(t) {
            return n.getBoundingRect(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
        }
    }
}, function(t, e, i) {
    function n(t, e, i, n, r, o, a, s, l, h, u) {
        var c = l * (v / 180),
            f = m(c) * (t - i) / 2 + d(c) * (e - n) / 2,
            g = -1 * d(c) * (t - i) / 2 + m(c) * (e - n) / 2,
            x = f * f / (a * a) + g * g / (s * s);
        x > 1 && (a *= p(x), s *= p(x));
        var w = (r === o ? -1 : 1) * p((a * a * (s * s) - a * a * (g * g) - s * s * (f * f)) / (a * a * (g * g) + s * s * (f * f))) || 0,
            b = w * a * g / s,
            T = w * -s * f / a,
            S = (t + i) / 2 + m(c) * b - d(c) * T,
            P = (e + n) / 2 + d(c) * b + m(c) * T,
            k = y([1, 0], [(f - b) / a, (g - T) / s]),
            C = [(f - b) / a, (g - T) / s],
            A = [(-1 * f - b) / a, (-1 * g - T) / s],
            M = y(C, A);
        _(C, A) <= -1 && (M = v), _(C, A) >= 1 && (M = 0), 0 === o && M > 0 && (M -= 2 * v), 1 === o && M < 0 && (M += 2 * v), u.addData(h, S, P, a, s, k, M, c, o)
    }

    function r(t) {
        if (!t) return [];
        var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
        for (e = 0; e < f.length; e++) i = i.replace(new RegExp(f[e], "g"), "|" + f[e]);
        var r, o = i.split("|"),
            a = 0,
            s = 0,
            l = new u,
            h = u.CMD;
        for (e = 1; e < o.length; e++) {
            var c, p = o[e],
                d = p.charAt(0),
                m = 0,
                v = p.slice(1).replace(/e,-/g, "e-").split(",");
            v.length > 0 && "" === v[0] && v.shift();
            for (var g = 0; g < v.length; g++) v[g] = parseFloat(v[g]);
            for (; m < v.length && !isNaN(v[m]) && !isNaN(v[0]);) {
                var _, y, x, w, b, T, S, P = a,
                    k = s;
                switch (d) {
                    case "l":
                        a += v[m++], s += v[m++], c = h.L, l.addData(c, a, s);
                        break;
                    case "L":
                        a = v[m++], s = v[m++], c = h.L, l.addData(c, a, s);
                        break;
                    case "m":
                        a += v[m++], s += v[m++], c = h.M, l.addData(c, a, s), d = "l";
                        break;
                    case "M":
                        a = v[m++], s = v[m++], c = h.M, l.addData(c, a, s), d = "L";
                        break;
                    case "h":
                        a += v[m++], c = h.L, l.addData(c, a, s);
                        break;
                    case "H":
                        a = v[m++], c = h.L, l.addData(c, a, s);
                        break;
                    case "v":
                        s += v[m++], c = h.L, l.addData(c, a, s);
                        break;
                    case "V":
                        s = v[m++], c = h.L, l.addData(c, a, s);
                        break;
                    case "C":
                        c = h.C, l.addData(c, v[m++], v[m++], v[m++], v[m++], v[m++], v[m++]), a = v[m - 2], s = v[m - 1];
                        break;
                    case "c":
                        c = h.C, l.addData(c, v[m++] + a, v[m++] + s, v[m++] + a, v[m++] + s, v[m++] + a, v[m++] + s), a += v[m - 2], s += v[m - 1];
                        break;
                    case "S":
                        _ = a, y = s;
                        var C = l.len(),
                            A = l.data;
                        r === h.C && (_ += a - A[C - 4], y += s - A[C - 3]), c = h.C, P = v[m++], k = v[m++], a = v[m++], s = v[m++], l.addData(c, _, y, P, k, a, s);
                        break;
                    case "s":
                        _ = a, y = s;
                        var C = l.len(),
                            A = l.data;
                        r === h.C && (_ += a - A[C - 4], y += s - A[C - 3]), c = h.C, P = a + v[m++], k = s + v[m++], a += v[m++], s += v[m++], l.addData(c, _, y, P, k, a, s);
                        break;
                    case "Q":
                        P = v[m++], k = v[m++], a = v[m++], s = v[m++], c = h.Q, l.addData(c, P, k, a, s);
                        break;
                    case "q":
                        P = v[m++] + a, k = v[m++] + s, a += v[m++], s += v[m++], c = h.Q, l.addData(c, P, k, a, s);
                        break;
                    case "T":
                        _ = a, y = s;
                        var C = l.len(),
                            A = l.data;
                        r === h.Q && (_ += a - A[C - 4], y += s - A[C - 3]), a = v[m++], s = v[m++], c = h.Q, l.addData(c, _, y, a, s);
                        break;
                    case "t":
                        _ = a, y = s;
                        var C = l.len(),
                            A = l.data;
                        r === h.Q && (_ += a - A[C - 4], y += s - A[C - 3]), a += v[m++], s += v[m++], c = h.Q, l.addData(c, _, y, a, s);
                        break;
                    case "A":
                        x = v[m++], w = v[m++], b = v[m++], T = v[m++], S = v[m++], P = a, k = s, a = v[m++], s = v[m++], c = h.A, n(P, k, a, s, T, S, x, w, b, c, l);
                        break;
                    case "a":
                        x = v[m++], w = v[m++], b = v[m++], T = v[m++], S = v[m++], P = a, k = s, a += v[m++], s += v[m++], c = h.A, n(P, k, a, s, T, S, x, w, b, c, l)
                }
            }
            "z" !== d && "Z" !== d || (c = h.Z, l.addData(c)), r = c
        }
        return l.toStatic(), l
    }

    function o(t, e) {
        var i = r(t);
        return e = e || {}, e.buildPath = function(t) {
            if (t.setData) {
                t.setData(i.data);
                var e = t.getContext();
                e && t.rebuildPath(e)
            } else {
                var e = t;
                i.rebuildPath(e)
            }
        }, e.applyTransform = function(t) {
            c(i, t), this.dirty(!0)
        }, e
    }

    function a(t, e) {
        return new h(o(t, e))
    }

    function s(t, e) {
        return h.extend(o(t, e))
    }

    function l(t, e) {
        for (var i = [], n = t.length, r = 0; r < n; r++) {
            var o = t[r];
            o.path || o.createPathProxy(), o.__dirtyPath && o.buildPath(o.path, o.shape, !0), i.push(o.path)
        }
        var a = new h(e);
        return a.createPathProxy(), a.buildPath = function(t) {
            t.appendPath(i);
            var e = t.getContext();
            e && t.rebuildPath(e)
        }, a
    }
    var h = i(16),
        u = i(81),
        c = i(297),
        f = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
        p = Math.sqrt,
        d = Math.sin,
        m = Math.cos,
        v = Math.PI,
        g = function(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        },
        _ = function(t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e))
        },
        y = function(t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(_(t, e))
        };
    e.createFromString = a, e.extendFromString = s, e.mergePath = l
}, function(t, e, i) {
    var n = i(174),
        r = i(175),
        o = i(3),
        a = o.isString,
        s = o.isFunction,
        l = o.isObject,
        h = o.isArrayLike,
        u = o.indexOf,
        c = function() {
            this.animators = []
        };
    c.prototype = {
        constructor: c,
        animate: function(t, e) {
            var i, o = !1,
                a = this,
                s = this.__zr;
            if (t) {
                var l = t.split("."),
                    h = a;
                o = "shape" === l[0];
                for (var c = 0, f = l.length; c < f; c++) h && (h = h[l[c]]);
                h && (i = h)
            } else i = a;
            if (!i) return void r('Property "' + t + '" is not existed in element ' + a.id);
            var p = a.animators,
                d = new n(i, e);
            return d.during(function(t) {
                a.dirty(o)
            }).done(function() {
                p.splice(u(p, d), 1)
            }), p.push(d), s && s.animation.addAnimator(d), d
        },
        stopAnimation: function(t) {
            for (var e = this.animators, i = e.length, n = 0; n < i; n++) e[n].stop(t);
            return e.length = 0, this
        },
        animateTo: function(t, e, i, n, r, o) {
            function l() {
                u--, u || r && r()
            }
            a(i) ? (r = n, n = i, i = 0) : s(n) ? (r = n, n = "linear", i = 0) : s(i) ? (r = i, i = 0) : s(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i);
            var h = this.animators.slice(),
                u = h.length;
            u || r && r();
            for (var c = 0; c < h.length; c++) h[c].done(l).start(n, o)
        },
        _animateToShallow: function(t, e, i, n, r) {
            var o = {},
                a = 0;
            for (var s in i)
                if (i.hasOwnProperty(s))
                    if (null != e[s]) l(i[s]) && !h(i[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], i[s], n, r) : (o[s] = i[s], a++);
                    else if (null != i[s])
                        if (t) {
                            var u = {};
                            u[t] = {}, u[t][s] = i[s], this.attr(u)
                        } else this.attr(s, i[s]);
            return a > 0 && this.animate(t, !1).when(null == n ? 500 : n, o).delay(r || 0), this
        }
    };
    var f = c;
    t.exports = f
}, function(t, e, i) {
    function n(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
    }
    var r = i(288);
    n.prototype = {
        constructor: n,
        step: function(t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void(this._pausedTime += e);
            var i = (t - this._startTime - this._pausedTime) / this._life;
            if (!(i < 0)) {
                i = Math.min(i, 1);
                var n = this.easing,
                    o = "string" == typeof n ? r[n] : n,
                    a = "function" == typeof o ? o(i) : i;
                return this.fire("frame", a), 1 == i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
            }
        },
        restart: function(t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
        },
        fire: function(t, e) {
            t = "on" + t, this[t] && this[t](this._target, e)
        },
        pause: function() {
            this._paused = !0
        },
        resume: function() {
            this._paused = !1
        }
    };
    var o = n;
    t.exports = o
}, function(t, e) {
    var i = {
            linear: function(t) {
                return t
            },
            quadraticIn: function(t) {
                return t * t
            },
            quadraticOut: function(t) {
                return t * (2 - t)
            },
            quadraticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            cubicIn: function(t) {
                return t * t * t
            },
            cubicOut: function(t) {
                return --t * t * t + 1
            },
            cubicInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            quarticIn: function(t) {
                return t * t * t * t
            },
            quarticOut: function(t) {
                return 1 - --t * t * t * t
            },
            quarticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            quinticIn: function(t) {
                return t * t * t * t * t
            },
            quinticOut: function(t) {
                return --t * t * t * t * t + 1
            },
            quinticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            sinusoidalIn: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            sinusoidalOut: function(t) {
                return Math.sin(t * Math.PI / 2)
            },
            sinusoidalInOut: function(t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            },
            exponentialIn: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            exponentialOut: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            exponentialInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
            },
            circularIn: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            circularOut: function(t) {
                return Math.sqrt(1 - --t * t)
            },
            circularInOut: function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            elasticIn: function(t) {
                var e, i = .1,
                    n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
            },
            elasticOut: function(t) {
                var e, i = .1,
                    n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            elasticInOut: function(t) {
                var e, i = .1,
                    n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            backIn: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            backOut: function(t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            },
            backInOut: function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            },
            bounceIn: function(t) {
                return 1 - i.bounceOut(1 - t)
            },
            bounceOut: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceInOut: function(t) {
                return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
            }
        },
        n = i;
    t.exports = n
}, function(t, e, i) {
    var n = i(176),
        r = i(25),
        o = new r,
        a = function() {};
    a.prototype = {
        constructor: a,
        drawRectText: function(t, e) {
            var i = this.style;
            e = i.textRect || e, this.__dirty && n.normalizeTextStyle(i, !0);
            var r = i.text;
            if (null != r && (r += ""), n.needDrawText(r, i)) {
                t.save();
                var a = this.transform;
                i.transformText ? this.setTransform(t) : a && (o.copy(e), o.applyTransform(a), e = o), n.renderText(this, t, r, i, e), t.restore()
            }
        }
    };
    var s = a;
    t.exports = s
}, function(t, e, i) {
    function n(t, e, i) {
        if (0 !== t.length) {
            var n, r = t[0],
                o = r[0],
                a = r[0],
                s = r[1],
                l = r[1];
            for (n = 1; n < t.length; n++) r = t[n], o = u(o, r[0]), a = c(a, r[0]), s = u(s, r[1]), l = c(l, r[1]);
            e[0] = o, e[1] = s, i[0] = a, i[1] = l
        }
    }

    function r(t, e, i, n, r, o) {
        r[0] = u(t, i), r[1] = u(e, n), o[0] = c(t, i), o[1] = c(e, n)
    }

    function o(t, e, i, n, r, o, a, s, l, f) {
        var p, d = h.cubicExtrema,
            m = h.cubicAt,
            v = d(t, i, r, a, _);
        for (l[0] = 1 / 0, l[1] = 1 / 0, f[0] = -(1 / 0), f[1] = -(1 / 0), p = 0; p < v; p++) {
            var g = m(t, i, r, a, _[p]);
            l[0] = u(g, l[0]), f[0] = c(g, f[0])
        }
        for (v = d(e, n, o, s, y), p = 0; p < v; p++) {
            var x = m(e, n, o, s, y[p]);
            l[1] = u(x, l[1]), f[1] = c(x, f[1])
        }
        l[0] = u(t, l[0]), f[0] = c(t, f[0]), l[0] = u(a, l[0]), f[0] = c(a, f[0]), l[1] = u(e, l[1]), f[1] = c(e, f[1]), l[1] = u(s, l[1]), f[1] = c(s, f[1])
    }

    function a(t, e, i, n, r, o, a, s) {
        var l = h.quadraticExtremum,
            f = h.quadraticAt,
            p = c(u(l(t, i, r), 1), 0),
            d = c(u(l(e, n, o), 1), 0),
            m = f(t, i, r, p),
            v = f(e, n, o, d);
        a[0] = u(t, r, m), a[1] = u(e, o, v), s[0] = c(t, r, m), s[1] = c(e, o, v)
    }

    function s(t, e, i, n, r, o, a, s, h) {
        var u = l.min,
            c = l.max,
            _ = Math.abs(r - o);
        if (_ % d < 1e-4 && _ > 1e-4) return s[0] = t - i, s[1] = e - n, h[0] = t + i, void(h[1] = e + n);
        if (m[0] = p(r) * i + t, m[1] = f(r) * n + e, v[0] = p(o) * i + t, v[1] = f(o) * n + e, u(s, m, v), c(h, m, v), r %= d, r < 0 && (r += d), o %= d, o < 0 && (o += d), r > o && !a ? o += d : r < o && a && (r += d), a) {
            var y = o;
            o = r, r = y
        }
        for (var x = 0; x < o; x += Math.PI / 2) x > r && (g[0] = p(x) * i + t, g[1] = f(x) * n + e, u(s, g, s), c(h, g, h))
    }
    var l = i(12),
        h = i(49),
        u = Math.min,
        c = Math.max,
        f = Math.sin,
        p = Math.cos,
        d = 2 * Math.PI,
        m = l.create(),
        v = l.create(),
        g = l.create(),
        _ = [],
        y = [];
    e.fromPoints = n, e.fromLine = r, e.fromCubic = o, e.fromQuadratic = a, e.fromArc = s
}, function(t, e, i) {
    function n(t, e) {
        return Math.abs(t - e) < b
    }

    function r() {
        var t = S[0];
        S[0] = S[1], S[1] = t
    }

    function o(t, e, i, n, o, a, s, l, h, u) {
        if (u > e && u > n && u > a && u > l || u < e && u < n && u < a && u < l) return 0;
        var c = _.cubicRootAt(e, n, a, l, u, T);
        if (0 === c) return 0;
        for (var f, p, d = 0, m = -1, v = 0; v < c; v++) {
            var g = T[v],
                y = 0 === g || 1 === g ? .5 : 1,
                x = _.cubicAt(t, i, o, s, g);
            x < h || (m < 0 && (m = _.cubicExtrema(e, n, a, l, S), S[1] < S[0] && m > 1 && r(), f = _.cubicAt(e, n, a, l, S[0]), m > 1 && (p = _.cubicAt(e, n, a, l, S[1]))), d += 2 == m ? g < S[0] ? f < e ? y : -y : g < S[1] ? p < f ? y : -y : l < p ? y : -y : g < S[0] ? f < e ? y : -y : l < f ? y : -y)
        }
        return d
    }

    function a(t, e, i, n, r, o, a, s) {
        if (s > e && s > n && s > o || s < e && s < n && s < o) return 0;
        var l = _.quadraticRootAt(e, n, o, s, T);
        if (0 === l) return 0;
        var h = _.quadraticExtremum(e, n, o);
        if (h >= 0 && h <= 1) {
            for (var u = 0, c = _.quadraticAt(e, n, o, h), f = 0; f < l; f++) {
                var p = 0 === T[f] || 1 === T[f] ? .5 : 1,
                    d = _.quadraticAt(t, i, r, T[f]);
                d < a || (u += T[f] < h ? c < e ? p : -p : o < c ? p : -p)
            }
            return u
        }
        var p = 0 === T[0] || 1 === T[0] ? .5 : 1,
            d = _.quadraticAt(t, i, r, T[0]);
        return d < a ? 0 : o < e ? p : -p
    }

    function s(t, e, i, n, r, o, a, s) {
        if (s -= e, s > i || s < -i) return 0;
        var l = Math.sqrt(i * i - s * s);
        T[0] = -l, T[1] = l;
        var h = Math.abs(n - r);
        if (h < 1e-4) return 0;
        if (h % w < 1e-4) {
            n = 0, r = w;
            var u = o ? 1 : -1;
            return a >= T[0] + t && a <= T[1] + t ? u : 0
        }
        if (o) {
            var l = n;
            n = g(r), r = g(l)
        } else n = g(n), r = g(r);
        n > r && (r += w);
        for (var c = 0, f = 0; f < 2; f++) {
            var p = T[f];
            if (p + t > a) {
                var d = Math.atan2(s, p),
                    u = o ? 1 : -1;
                d < 0 && (d = w + d), (d >= n && d <= r || d + w >= n && d + w <= r) && (d > Math.PI / 2 && d < 1.5 * Math.PI && (u = -u), c += u)
            }
        }
        return c
    }

    function l(t, e, i, r, l) {
        for (var h = 0, u = 0, c = 0, v = 0, g = 0, _ = 0; _ < t.length;) {
            var w = t[_++];
            switch (w === x.M && _ > 1 && (i || (h += y(u, c, v, g, r, l))), 1 == _ && (u = t[_], c = t[_ + 1], v = u, g = c), w) {
                case x.M:
                    v = t[_++], g = t[_++], u = v, c = g;
                    break;
                case x.L:
                    if (i) {
                        if (f.containStroke(u, c, t[_], t[_ + 1], e, r, l)) return !0
                    } else h += y(u, c, t[_], t[_ + 1], r, l) || 0;
                    u = t[_++], c = t[_++];
                    break;
                case x.C:
                    if (i) {
                        if (p.containStroke(u, c, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, r, l)) return !0
                    } else h += o(u, c, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], r, l) || 0;
                    u = t[_++], c = t[_++];
                    break;
                case x.Q:
                    if (i) {
                        if (d.containStroke(u, c, t[_++], t[_++], t[_], t[_ + 1], e, r, l)) return !0
                    } else h += a(u, c, t[_++], t[_++], t[_], t[_ + 1], r, l) || 0;
                    u = t[_++], c = t[_++];
                    break;
                case x.A:
                    var b = t[_++],
                        T = t[_++],
                        S = t[_++],
                        P = t[_++],
                        k = t[_++],
                        C = t[_++],
                        A = (t[_++], 1 - t[_++]),
                        M = Math.cos(k) * S + b,
                        O = Math.sin(k) * P + T;
                    _ > 1 ? h += y(u, c, M, O, r, l) : (v = M, g = O);
                    var E = (r - b) * P / S + b;
                    if (i) {
                        if (m.containStroke(b, T, P, k, k + C, A, e, E, l)) return !0
                    } else h += s(b, T, P, k, k + C, A, E, l);
                    u = Math.cos(k + C) * S + b, c = Math.sin(k + C) * P + T;
                    break;
                case x.R:
                    v = u = t[_++], g = c = t[_++];
                    var D = t[_++],
                        I = t[_++],
                        M = v + D,
                        O = g + I;
                    if (i) {
                        if (f.containStroke(v, g, M, g, e, r, l) || f.containStroke(M, g, M, O, e, r, l) || f.containStroke(M, O, v, O, e, r, l) || f.containStroke(v, O, v, g, e, r, l)) return !0
                    } else h += y(M, g, M, O, r, l), h += y(v, O, v, g, r, l);
                    break;
                case x.Z:
                    if (i) {
                        if (f.containStroke(u, c, v, g, e, r, l)) return !0
                    } else h += y(u, c, v, g, r, l);
                    u = v, c = g
            }
        }
        return i || n(c, g) || (h += y(u, c, v, g, r, l) || 0), 0 !== h
    }

    function h(t, e, i) {
        return l(t, 0, !1, e, i)
    }

    function u(t, e, i, n) {
        return l(t, e, !0, i, n)
    }
    var c = i(81),
        f = i(292),
        p = i(293),
        d = i(294),
        m = i(295),
        v = i(178),
        g = v.normalizeRadian,
        _ = i(49),
        y = i(296),
        x = c.CMD,
        w = 2 * Math.PI,
        b = 1e-4,
        T = [-1, -1, -1],
        S = [-1, -1];
    e.contain = h, e.containStroke = u
}, function(t, e) {
    function i(t, e, i, n, r, o, a) {
        if (0 === r) return !1;
        var s = r,
            l = 0,
            h = t;
        if (a > e + s && a > n + s || a < e - s && a < n - s || o > t + s && o > i + s || o < t - s && o < i - s) return !1;
        if (t === i) return Math.abs(o - t) <= s / 2;
        l = (e - n) / (t - i), h = (t * n - i * e) / (t - i);
        var u = l * o - a + h,
            c = u * u / (l * l + 1);
        return c <= s / 2 * s / 2
    }
    e.containStroke = i
}, function(t, e, i) {
    function n(t, e, i, n, o, a, s, l, h, u, c) {
        if (0 === h) return !1;
        var f = h;
        if (c > e + f && c > n + f && c > a + f && c > l + f || c < e - f && c < n - f && c < a - f && c < l - f || u > t + f && u > i + f && u > o + f && u > s + f || u < t - f && u < i - f && u < o - f && u < s - f) return !1;
        var p = r.cubicProjectPoint(t, e, i, n, o, a, s, l, u, c, null);
        return p <= f / 2
    }
    var r = i(49);
    e.containStroke = n
}, function(t, e, i) {
    function n(t, e, i, n, r, a, s, l, h) {
        if (0 === s) return !1;
        var u = s;
        if (h > e + u && h > n + u && h > a + u || h < e - u && h < n - u && h < a - u || l > t + u && l > i + u && l > r + u || l < t - u && l < i - u && l < r - u) return !1;
        var c = o(t, e, i, n, r, a, l, h, null);
        return c <= u / 2
    }
    var r = i(49),
        o = r.quadraticProjectPoint;
    e.containStroke = n
}, function(t, e, i) {
    function n(t, e, i, n, r, s, l, h, u) {
        if (0 === l) return !1;
        var c = l;
        h -= t, u -= e;
        var f = Math.sqrt(h * h + u * u);
        if (f - c > i || f + c < i) return !1;
        if (Math.abs(n - r) % a < 1e-4) return !0;
        if (s) {
            var p = n;
            n = o(r), r = o(p)
        } else n = o(n), r = o(r);
        n > r && (r += a);
        var d = Math.atan2(u, h);
        return d < 0 && (d += a), d >= n && d <= r || d + a >= n && d + a <= r
    }
    var r = i(178),
        o = r.normalizeRadian,
        a = 2 * Math.PI;
    e.containStroke = n
}, function(t, e) {
    function i(t, e, i, n, r, o) {
        if (o > e && o > n || o < e && o < n) return 0;
        if (n === e) return 0;
        var a = n < e ? 1 : -1,
            s = (o - e) / (n - e);
        1 !== s && 0 !== s || (a = n < e ? .5 : -.5);
        var l = s * (i - t) + t;
        return l > r ? a : 0
    }
    t.exports = i
}, function(t, e, i) {
    function n(t, e) {
        var i, n, r, o, c, f, p = t.data,
            d = s.M,
            m = s.C,
            v = s.L,
            g = s.R,
            _ = s.A,
            y = s.Q;
        for (r = 0, o = 0; r < p.length;) {
            switch (i = p[r++], o = r, n = 0, i) {
                case d:
                    n = 1;
                    break;
                case v:
                    n = 1;
                    break;
                case m:
                    n = 3;
                    break;
                case y:
                    n = 2;
                    break;
                case _:
                    var x = e[4],
                        w = e[5],
                        b = h(e[0] * e[0] + e[1] * e[1]),
                        T = h(e[2] * e[2] + e[3] * e[3]),
                        S = u(-e[1] / T, e[0] / b);
                    p[r] *= b, p[r++] += x, p[r] *= T, p[r++] += w, p[r++] *= b, p[r++] *= T, p[r++] += S, p[r++] += S, r += 2, o = r;
                    break;
                case g:
                    f[0] = p[r++], f[1] = p[r++], a(f, f, e), p[o++] = f[0], p[o++] = f[1], f[0] += p[r++], f[1] += p[r++], a(f, f, e), p[o++] = f[0], p[o++] = f[1]
            }
            for (c = 0; c < n; c++) {
                var f = l[c];
                f[0] = p[r++], f[1] = p[r++], a(f, f, e), p[o++] = f[0], p[o++] = f[1]
            }
        }
    }
    var r = i(81),
        o = i(12),
        a = o.applyTransform,
        s = r.CMD,
        l = [
            [],
            [],
            []
        ],
        h = Math.sqrt,
        u = Math.atan2;
    t.exports = n
}, function(t, e, i) {
    var n = i(119),
        r = i(3),
        o = i(63),
        a = i(176),
        s = function(t) {
            n.call(this, t)
        };
    s.prototype = {
        constructor: s,
        type: "text",
        brush: function(t, e) {
            var i = this.style;
            this.__dirty && a.normalizeTextStyle(i, !0), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
            var n = i.text;
            null != n && (n += ""), i.bind(t, this, e), a.needDrawText(n, i) && (this.setTransform(t), a.renderText(this, t, n, i), this.restoreTransform(t))
        },
        getBoundingRect: function() {
            var t = this.style;
            if (this.__dirty && a.normalizeTextStyle(t, !0), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var i = o.getBoundingRect(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (i.x += t.x || 0, i.y += t.y || 0, a.getStroke(t.textStroke, t.textStrokeWidth)) {
                    var n = t.textStrokeWidth;
                    i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n
                }
                this._rect = i
            }
            return this._rect
        }
    }, r.inherits(s, n);
    var l = s;
    t.exports = l
}, function(t, e, i) {
    var n = i(16),
        r = n.extend({
            type: "circle",
            shape: {
                cx: 0,
                cy: 0,
                r: 0
            },
            buildPath: function(t, e, i) {
                i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        });
    t.exports = r
}, function(t, e, i) {
    var n = i(16),
        r = i(301),
        o = n.extend({
            type: "sector",
            shape: {
                cx: 0,
                cy: 0,
                r0: 0,
                r: 0,
                startAngle: 0,
                endAngle: 2 * Math.PI,
                clockwise: !0
            },
            brush: r(n.prototype.brush),
            buildPath: function(t, e) {
                var i = e.cx,
                    n = e.cy,
                    r = Math.max(e.r0 || 0, 0),
                    o = Math.max(e.r, 0),
                    a = e.startAngle,
                    s = e.endAngle,
                    l = e.clockwise,
                    h = Math.cos(a),
                    u = Math.sin(a);
                t.moveTo(h * r + i, u * r + n), t.lineTo(h * o + i, u * o + n), t.arc(i, n, o, a, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, a, l), t.closePath()
            }
        });
    t.exports = o
}, function(t, e, i) {
    function n(t) {
        return r.browser.ie && r.browser.version >= 11 ? function() {
            var e, i = this.__clipPaths,
                n = this.style;
            if (i)
                for (var r = 0; r < i.length; r++) {
                    var a = i[r],
                        s = a && a.shape,
                        l = a && a.type;
                    if (s && ("sector" === l && s.startAngle === s.endAngle || "rect" === l && (!s.width || !s.height))) {
                        for (var h = 0; h < o.length; h++) o[h][2] = n[o[h][0]], n[o[h][0]] = o[h][1];
                        e = !0;
                        break
                    }
                }
            if (t.apply(this, arguments), e)
                for (var h = 0; h < o.length; h++) n[o[h][0]] = o[h][2]
        } : t
    }
    var r = i(31),
        o = [
            ["shadowBlur", 0],
            ["shadowColor", "#000"],
            ["shadowOffsetX", 0],
            ["shadowOffsetY", 0]
        ];
    t.exports = n
}, function(t, e, i) {
    var n = i(16),
        r = n.extend({
            type: "ring",
            shape: {
                cx: 0,
                cy: 0,
                r: 0,
                r0: 0
            },
            buildPath: function(t, e) {
                var i = e.cx,
                    n = e.cy,
                    r = 2 * Math.PI;
                t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0)
            }
        });
    t.exports = r
}, function(t, e, i) {
    var n = i(16),
        r = i(181),
        o = n.extend({
            type: "polygon",
            shape: {
                points: null,
                smooth: !1,
                smoothConstraint: null
            },
            buildPath: function(t, e) {
                r.buildPath(t, e, !0)
            }
        });
    t.exports = o
}, function(t, e, i) {
    function n(t, e, i, n, r, o, a) {
        var s = .5 * (i - t),
            l = .5 * (n - e);
        return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e
    }

    function r(t, e) {
        for (var i = t.length, r = [], o = 0, s = 1; s < i; s++) o += a(t[s - 1], t[s]);
        var l = o / 2;
        l = l < i ? i : l;
        for (var s = 0; s < l; s++) {
            var h, u, c, f = s / (l - 1) * (e ? i : i - 1),
                p = Math.floor(f),
                d = f - p,
                m = t[p % i];
            e ? (h = t[(p - 1 + i) % i], u = t[(p + 1) % i], c = t[(p + 2) % i]) : (h = t[0 === p ? p : p - 1], u = t[p > i - 2 ? i - 1 : p + 1], c = t[p > i - 3 ? i - 1 : p + 2]);
            var v = d * d,
                g = d * v;
            r.push([n(h[0], m[0], u[0], c[0], d, v, g), n(h[1], m[1], u[1], c[1], d, v, g)])
        }
        return r
    }
    var o = i(12),
        a = o.distance;
    t.exports = r
}, function(t, e, i) {
    function n(t, e, i, n) {
        var r, f, p, d, m = [],
            v = [],
            g = [],
            _ = [];
        if (n) {
            p = [1 / 0, 1 / 0], d = [-(1 / 0), -(1 / 0)];
            for (var y = 0, x = t.length; y < x; y++) o(p, p, t[y]), a(d, d, t[y]);
            o(p, p, n[0]), a(d, d, n[1])
        }
        for (var y = 0, x = t.length; y < x; y++) {
            var w = t[y];
            if (i) r = t[y ? y - 1 : x - 1], f = t[(y + 1) % x];
            else {
                if (0 === y || y === x - 1) {
                    m.push(u(t[y]));
                    continue
                }
                r = t[y - 1], f = t[y + 1]
            }
            c(v, f, r), s(v, v, e);
            var b = l(w, r),
                T = l(w, f),
                S = b + T;
            0 !== S && (b /= S, T /= S), s(g, v, -b), s(_, v, T);
            var P = h([], w, g),
                k = h([], w, _);
            n && (a(P, P, p), o(P, P, d), a(k, k, p), o(k, k, d)), m.push(P), m.push(k)
        }
        return i && m.push(m.shift()), m
    }
    var r = i(12),
        o = r.min,
        a = r.max,
        s = r.scale,
        l = r.distance,
        h = r.add,
        u = r.clone,
        c = r.sub;
    t.exports = n
}, function(t, e, i) {
    var n = i(16),
        r = i(181),
        o = n.extend({
            type: "polyline",
            shape: {
                points: null,
                smooth: !1,
                smoothConstraint: null
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function(t, e) {
                r.buildPath(t, e, !1)
            }
        });
    t.exports = o
}, function(t, e, i) {
    var n = i(16),
        r = i(177),
        o = n.extend({
            type: "rect",
            shape: {
                r: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function(t, e) {
                var i = e.x,
                    n = e.y,
                    o = e.width,
                    a = e.height;
                e.r ? r.buildPath(t, e) : t.rect(i, n, o, a), t.closePath()
            }
        });
    t.exports = o
}, function(t, e, i) {
    var n = i(16),
        r = n.extend({
            type: "line",
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                percent: 1
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function(t, e) {
                var i = e.x1,
                    n = e.y1,
                    r = e.x2,
                    o = e.y2,
                    a = e.percent;
                0 !== a && (t.moveTo(i, n), a < 1 && (r = i * (1 - a) + r * a, o = n * (1 - a) + o * a), t.lineTo(r, o))
            },
            pointAt: function(t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        });
    t.exports = r
}, function(t, e, i) {
    function n(t, e, i) {
        var n = t.cpx2,
            r = t.cpy2;
        return null === n || null === r ? [(i ? f : u)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? f : u)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? c : h)(t.x1, t.cpx1, t.x2, e), (i ? c : h)(t.y1, t.cpy1, t.y2, e)]
    }
    var r = i(16),
        o = i(12),
        a = i(49),
        s = a.quadraticSubdivide,
        l = a.cubicSubdivide,
        h = a.quadraticAt,
        u = a.cubicAt,
        c = a.quadraticDerivativeAt,
        f = a.cubicDerivativeAt,
        p = [],
        d = r.extend({
            type: "bezier-curve",
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                cpx1: 0,
                cpy1: 0,
                percent: 1
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function(t, e) {
                var i = e.x1,
                    n = e.y1,
                    r = e.x2,
                    o = e.y2,
                    a = e.cpx1,
                    h = e.cpy1,
                    u = e.cpx2,
                    c = e.cpy2,
                    f = e.percent;
                0 !== f && (t.moveTo(i, n), null == u || null == c ? (f < 1 && (s(i, a, r, f, p), a = p[1], r = p[2], s(n, h, o, f, p), h = p[1], o = p[2]), t.quadraticCurveTo(a, h, r, o)) : (f < 1 && (l(i, a, u, r, f, p), a = p[1], u = p[2], r = p[3], l(n, h, c, o, f, p), h = p[1], c = p[2], o = p[3]), t.bezierCurveTo(a, h, u, c, r, o)))
            },
            pointAt: function(t) {
                return n(this.shape, t, !1)
            },
            tangentAt: function(t) {
                var e = n(this.shape, t, !0);
                return o.normalize(e, e)
            }
        });
    t.exports = d
}, function(t, e, i) {
    var n = i(16),
        r = n.extend({
            type: "arc",
            shape: {
                cx: 0,
                cy: 0,
                r: 0,
                startAngle: 0,
                endAngle: 2 * Math.PI,
                clockwise: !0
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function(t, e) {
                var i = e.cx,
                    n = e.cy,
                    r = Math.max(e.r, 0),
                    o = e.startAngle,
                    a = e.endAngle,
                    s = e.clockwise,
                    l = Math.cos(o),
                    h = Math.sin(o);
                t.moveTo(l * r + i, h * r + n), t.arc(i, n, r, o, a, !s)
            }
        });
    t.exports = r
}, function(t, e, i) {
    var n = i(16),
        r = n.extend({
            type: "compound",
            shape: {
                paths: null
            },
            _updatePathDirty: function() {
                for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            },
            beforeBrush: function() {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1])
            },
            buildPath: function(t, e) {
                for (var i = e.paths || [], n = 0; n < i.length; n++) i[n].buildPath(t, i[n].shape, !0)
            },
            afterBrush: function() {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
            },
            getBoundingRect: function() {
                return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
            }
        });
    t.exports = r
}, function(t, e, i) {
    var n = i(3),
        r = i(120),
        o = function(t, e, i, n, o, a) {
            this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = a || !1, r.call(this, o)
        };
    o.prototype = {
        constructor: o
    }, n.inherits(o, r);
    var a = o;
    t.exports = a
}, function(t, e, i) {
    var n = i(3),
        r = i(120),
        o = function(t, e, i, n, o) {
            this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = o || !1, r.call(this, n)
        };
    o.prototype = {
        constructor: o
    }, n.inherits(o, r);
    var a = o;
    t.exports = a
}, function(t, e, i) {
    var n = i(118)([
        ["fill", "color"],
        ["stroke", "borderColor"],
        ["lineWidth", "borderWidth"],
        ["opacity"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["shadowColor"],
        ["textPosition"],
        ["textAlign"]
    ]);
    t.exports = {
        getItemStyle: function(t, e) {
            var i = n.call(this, t, e),
                r = this.getBorderLineDash();
            return r && (i.lineDash = r), i
        },
        getBorderLineDash: function() {
            var t = this.get("borderType");
            return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
        }
    }
}, function(t, e) {
    t.exports = {
        getBoxLayoutParams: function() {
            return {
                left: this.get("left"),
                top: this.get("top"),
                right: this.get("right"),
                bottom: this.get("bottom"),
                width: this.get("width"),
                height: this.get("height")
            }
        }
    }
}, function(t, e) {
    var i = "";
    "undefined" != typeof navigator && (i = navigator.platform || ""), t.exports = {
        color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
        textStyle: {
            fontFamily: i.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        blendMode: null,
        animation: "auto",
        animationDuration: 1e3,
        animationDurationUpdate: 300,
        animationEasing: "exponentialOut",
        animationEasingUpdate: "cubicOut",
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1
    }
}, function(t, e, i) {
    "use strict";

    function n(t) {
        r.each(o, function(e) {
            this[e] = r.bind(t[e], t)
        }, this)
    }
    var r = i(3),
        o = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"];
    t.exports = n
}, function(t, e, i) {
    function n(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
    }

    function r(t, e, i) {
        var n, r, o = [],
            a = [],
            s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, o = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            f(l, function(t) {
                t && t.option && (t.query ? a.push(t) : n || (n = t))
            })
        }
        return r || (r = t), r.timeline || (r.timeline = s), f([r].concat(o).concat(h.map(a, function(t) {
            return t.option
        })), function(t) {
            f(e, function(e) {
                e(t, i)
            })
        }), {
            baseOption: r,
            timelineOptions: o,
            mediaDefault: n,
            mediaList: a
        }
    }

    function o(t, e, i) {
        var n = {
                width: e,
                height: i,
                aspectratio: e / i
            },
            r = !0;
        return h.each(t, function(t, e) {
            var i = e.match(v);
            if (i && i[1] && i[2]) {
                var o = i[1],
                    s = i[2].toLowerCase();
                a(n[s], t, o) || (r = !1)
            }
        }), r
    }

    function a(t, e, i) {
        return "min" === i ? t >= e : "max" === i ? t <= e : t === e
    }

    function s(t, e) {
        return t.join(",") === e.join(",")
    }

    function l(t, e) {
        e = e || {}, f(e, function(e, i) {
            if (null != e) {
                var n = t[i];
                if (c.hasClass(i)) {
                    e = u.normalizeToArray(e), n = u.normalizeToArray(n);
                    var r = u.mappingToExists(n, e);
                    t[i] = d(r, function(t) {
                        return t.option && t.exist ? m(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[i] = m(n, e, !0)
            }
        })
    }
    var h = i(3),
        u = i(24),
        c = i(83),
        f = h.each,
        p = h.clone,
        d = h.map,
        m = h.merge,
        v = /^(min|max)?(.+)$/;
    n.prototype = {
        constructor: n,
        setOption: function(t, e) {
            t = p(t, !0);
            var i = this._optionBackup,
                n = r.call(this, t, e, !i);
            this._newBaseOption = n.baseOption, i ? (l(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
        },
        mountOption: function(t) {
            var e = this._optionBackup;
            return this._timelineOptions = d(e.timelineOptions, p), this._mediaList = d(e.mediaList, p), this._mediaDefault = p(e.mediaDefault), this._currentMediaIndices = [], p(t ? e.baseOption : this._newBaseOption)
        },
        getTimelineOption: function(t) {
            var e, i = this._timelineOptions;
            if (i.length) {
                var n = t.getComponent("timeline");
                n && (e = p(i[n.getCurrentIndex()], !0))
            }
            return e
        },
        getMediaOption: function(t) {
            var e = this._api.getWidth(),
                i = this._api.getHeight(),
                n = this._mediaList,
                r = this._mediaDefault,
                a = [],
                l = [];
            if (!n.length && !r) return l;
            for (var h = 0, u = n.length; h < u; h++) o(n[h].query, e, i) && a.push(h);
            return !a.length && r && (a = [-1]), a.length && !s(a, this._currentMediaIndices) && (l = d(a, function(t) {
                return p(t === -1 ? r.option : n[t].option)
            })), this._currentMediaIndices = a, l
        }
    }, t.exports = n
}, function(t, e, i) {
    function n(t, e) {
        e = e.split(",");
        for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++);
        return i
    }

    function r(t, e, i, n) {
        e = e.split(",");
        for (var r, o = t, a = 0; a < e.length - 1; a++) r = e[a], null == o[r] && (o[r] = {}), o = o[r];
        (n || null == o[e[a]]) && (o[e[a]] = i)
    }

    function o(t) {
        c(l, function(e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }
    var a = i(3),
        s = i(320),
        l = [
            ["x", "left"],
            ["y", "top"],
            ["x2", "right"],
            ["y2", "bottom"]
        ],
        h = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        u = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"],
        c = a.each;
    t.exports = function(t, e) {
        s(t, e);
        var i = t.series;
        c(a.isArray(i) ? i : [i], function(t) {
            if (a.isObject(t)) {
                var e = t.type;
                if ("pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                    var i = n(t, "pointer.color");
                    null != i && r(t, "itemStyle.normal.color", i)
                }
                for (var s = 0; s < u.length; s++)
                    if (u[s] === t.type) {
                        o(t);
                        break
                    }
            }
        }), t.dataRange && (t.visualMap = t.dataRange), c(h, function(e) {
            var i = t[e];
            i && (a.isArray(i) || (i = [i]), c(i, function(t) {
                o(t)
            }))
        })
    }
}, function(t, e, i) {
    function n(t) {
        var e = t && t.itemStyle;
        if (e)
            for (var i = 0, n = p.length; i < n; i++) {
                var r = p[i],
                    o = e.normal,
                    a = e.emphasis;
                o && o[r] && (t[r] = t[r] || {}, t[r].normal ? h.merge(t[r].normal, o[r]) : t[r].normal = o[r], o[r] = null), a && a[r] && (t[r] = t[r] || {}, t[r].emphasis ? h.merge(t[r].emphasis, a[r]) : t[r].emphasis = a[r], a[r] = null)
            }
    }

    function r(t, e) {
        var i = f(t) && t[e],
            n = f(i) && i.textStyle;
        if (n)
            for (var r = 0, o = u.TEXT_STYLE_OPTIONS.length; r < o; r++) {
                var e = u.TEXT_STYLE_OPTIONS[r];
                n.hasOwnProperty(e) && (i[e] = n[e])
            }
    }

    function o(t) {
        f(t) && (r(t, "normal"), r(t, "emphasis"))
    }

    function a(t) {
        if (f(t)) {
            n(t), o(t.label), o(t.upperLabel), o(t.edgeLabel);
            var e = t.markPoint;
            n(e), o(e && e.label);
            var i = t.markLine;
            n(t.markLine), o(i && i.label);
            var a = t.markArea;
            o(a && a.label), r(t, "axisLabel"), r(t, "title"), r(t, "detail");
            var s = t.data;
            if (s)
                for (var l = 0; l < s.length; l++) n(s[l]), o(s[l] && s[l].label);
            var e = t.markPoint;
            if (e && e.data)
                for (var u = e.data, l = 0; l < u.length; l++) n(u[l]), o(u[l] && u[l].label);
            var i = t.markLine;
            if (i && i.data)
                for (var c = i.data, l = 0; l < c.length; l++) h.isArray(c[l]) ? (n(c[l][0]),
                    o(c[l][0] && c[l][0].label), n(c[l][1]), o(c[l][1] && c[l][1].label)) : (n(c[l]), o(c[l] && c[l].label))
        }
    }

    function s(t) {
        return h.isArray(t) ? t : t ? [t] : []
    }

    function l(t) {
        return (h.isArray(t) ? t[0] : t) || {}
    }
    var h = i(3),
        u = i(24),
        c = h.each,
        f = h.isObject,
        p = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
    t.exports = function(t, e) {
        c(s(t.series), function(t) {
            f(t) && a(t)
        });
        var i = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
        e && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), c(i, function(e) {
            c(s(t[e]), function(t) {
                t && (r(t, "axisLabel"), r(t.axisPointer, "label"))
            })
        }), c(s(t.parallel), function(t) {
            var e = t && t.parallelAxisDefault;
            r(e, "axisLabel"), r(e && e.axisPointer, "label")
        }), c(s(t.calendar), function(t) {
            r(t, "dayLabel"), r(t, "monthLabel"), r(t, "yearLabel")
        }), c(s(t.radar), function(t) {
            r(t, "name")
        }), c(s(t.geo), function(t) {
            f(t) && (o(t.label), c(s(t.regions), function(t) {
                o(t.label)
            }))
        }), o(l(t.timeline).label), r(l(t.axisPointer), "label"), r(l(t.tooltip).axisPointer, "label")
    }
}, function(t, e, i) {
    var n = i(82),
        r = i(121),
        o = i(34),
        a = function() {
            this.group = new n, this.uid = r.getUID("viewComponent")
        };
    a.prototype = {
        constructor: a,
        init: function(t, e) {},
        render: function(t, e, i, n) {},
        dispose: function() {}
    };
    var s = a.prototype;
    s.updateView = s.updateLayout = s.updateVisual = function(t, e, i, n) {}, o.enableClassExtend(a), o.enableClassManagement(a, {
        registerWhenExtend: !0
    }), t.exports = a
}, function(t, e, i) {
    function n() {
        this.group = new a, this.uid = s.getUID("viewChart")
    }

    function r(t, e) {
        if (t && (t.trigger(e), "group" === t.type))
            for (var i = 0; i < t.childCount(); i++) r(t.childAt(i), e)
    }

    function o(t, e, i) {
        var n = h.queryDataIndex(t, e);
        null != n ? u.each(h.normalizeToArray(n), function(e) {
            r(t.getItemGraphicEl(e), i)
        }) : t.eachItemGraphicEl(function(t) {
            r(t, i)
        })
    }
    var a = i(82),
        s = i(121),
        l = i(34),
        h = i(24),
        u = i(3);
    n.prototype = {
        type: "chart",
        init: function(t, e) {},
        render: function(t, e, i, n) {},
        highlight: function(t, e, i, n) {
            o(t.getData(), n, "emphasis")
        },
        downplay: function(t, e, i, n) {
            o(t.getData(), n, "normal")
        },
        remove: function(t, e) {
            this.group.removeAll()
        },
        dispose: function() {}
    };
    var c = n.prototype;
    c.updateView = c.updateLayout = c.updateVisual = function(t, e, i, n) {
        this.render(t, e, i, n)
    }, l.enableClassExtend(n, ["dispose"]), l.enableClassManagement(n, {
        registerWhenExtend: !0
    }), t.exports = n
}, function(t, e) {
    var i = {},
        n = "\0__throttleOriginMethod",
        r = "\0__throttleRate",
        o = "\0__throttleType";
    i.throttle = function(t, e, i) {
        function n() {
            u = (new Date).getTime(), c = null, t.apply(a, s || [])
        }
        var r, o, a, s, l, h = 0,
            u = 0,
            c = null;
        e = e || 0;
        var f = function() {
            r = (new Date).getTime(), a = this, s = arguments;
            var t = l || e,
                f = l || i;
            l = null, o = r - (f ? h : u) - t, clearTimeout(c), f ? c = setTimeout(n, t) : o >= 0 ? n() : c = setTimeout(n, -o), h = r
        };
        return f.clear = function() {
            c && (clearTimeout(c), c = null)
        }, f.debounceNextCall = function(t) {
            l = t
        }, f
    }, i.createOrUpdate = function(t, e, a, s) {
        var l = t[e];
        if (l) {
            var h = l[n] || l,
                u = l[o],
                c = l[r];
            if (c !== a || u !== s) {
                if (null == a || !s) return t[e] = h;
                l = t[e] = i.throttle(h, a, "debounce" === s), l[n] = h, l[o] = s, l[r] = a
            }
            return l
        }
    }, i.clear = function(t, e) {
        var i = t[e];
        i && i[n] && (t[e] = i[n])
    }, t.exports = i
}, function(t, e, i) {
    function n(t, e) {
        var i = new x(l(), t, e);
        return _[i.id] = i, i
    }

    function r(t) {
        if (t) t.dispose();
        else {
            for (var e in _) _.hasOwnProperty(e) && _[e].dispose();
            _ = {}
        }
        return this
    }

    function o(t) {
        return _[t]
    }

    function a(t, e) {
        g[t] = e
    }

    function s(t) {
        delete _[t]
    }
    var l = i(172),
        h = i(31),
        u = i(3),
        c = i(325),
        f = i(327),
        p = i(328),
        d = i(330),
        m = i(331),
        v = !h.canvasSupported,
        g = {
            canvas: p
        },
        _ = {},
        y = "3.7.4",
        x = function(t, e, i) {
            i = i || {}, this.dom = e, this.id = t;
            var n = this,
                r = new f,
                o = i.renderer;
            if (v) {
                if (!g.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                o = "vml"
            } else o && g[o] || (o = "canvas");
            var a = new g[o](e, r, i);
            this.storage = r, this.painter = a;
            var s = h.node ? null : new m(a.getViewportRoot());
            this.handler = new c(r, a, s, a.root), this.animation = new d({
                stage: {
                    update: u.bind(this.flush, this)
                }
            }), this.animation.start(), this._needsRefresh;
            var l = r.delFromStorage,
                p = r.addToStorage;
            r.delFromStorage = function(t) {
                l.call(r, t), t && t.removeSelfFromZr(n)
            }, r.addToStorage = function(t) {
                p.call(r, t), t.addSelfToZr(n)
            }
        };
    x.prototype = {
        constructor: x,
        getId: function() {
            return this.id
        },
        add: function(t) {
            this.storage.addRoot(t), this._needsRefresh = !0
        },
        remove: function(t) {
            this.storage.delRoot(t), this._needsRefresh = !0
        },
        configLayer: function(t, e) {
            this.painter.configLayer(t, e), this._needsRefresh = !0
        },
        refreshImmediately: function() {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
        },
        refresh: function() {
            this._needsRefresh = !0
        },
        flush: function() {
            this._needsRefresh && this.refreshImmediately(), this._needsRefreshHover && this.refreshHoverImmediately()
        },
        addHover: function(t, e) {
            this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
        },
        removeHover: function(t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
        },
        clearHover: function() {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
        },
        refreshHover: function() {
            this._needsRefreshHover = !0
        },
        refreshHoverImmediately: function() {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
        },
        resize: function(t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
        },
        clearAnimation: function() {
            this.animation.clear()
        },
        getWidth: function() {
            return this.painter.getWidth()
        },
        getHeight: function() {
            return this.painter.getHeight()
        },
        pathToImage: function(t, e) {
            return this.painter.pathToImage(t, e)
        },
        setCursorStyle: function(t) {
            this.handler.setCursorStyle(t)
        },
        findHover: function(t, e) {
            return this.handler.findHover(t, e)
        },
        on: function(t, e, i) {
            this.handler.on(t, e, i)
        },
        off: function(t, e) {
            this.handler.off(t, e)
        },
        trigger: function(t, e) {
            this.handler.trigger(t, e)
        },
        clear: function() {
            this.storage.delRoot(), this.painter.clear()
        },
        dispose: function() {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, s(this.id)
        }
    }, e.version = y, e.init = n, e.dispose = r, e.getInstance = o, e.registerPainter = a
}, function(t, e, i) {
    function n(t, e, i) {
        return {
            type: t,
            event: i,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: i.zrX,
            offsetY: i.zrY,
            gestureEvent: i.gestureEvent,
            pinchX: i.pinchX,
            pinchY: i.pinchY,
            pinchScale: i.pinchScale,
            wheelDelta: i.zrDelta,
            zrByTouch: i.zrByTouch,
            which: i.which
        }
    }

    function r() {}

    function o(t, e, i) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
            for (var n, r = t; r;) {
                if (r.clipPath && !r.clipPath.contain(e, i)) return !1;
                r.silent && (n = !0), r = r.parent
            }
            return !n || u
        }
        return !1
    }
    var a = i(3),
        s = i(12),
        l = i(326),
        h = i(65),
        u = "silent";
    r.prototype.dispose = function() {};
    var c = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        f = function(t, e, i, n) {
            h.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new r, this.proxy = i, i.handler = this, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, l.call(this), a.each(c, function(t) {
                i.on && i.on(t, this[t], this)
            }, this)
        };
    f.prototype = {
        constructor: f,
        mousemove: function(t) {
            var e = t.zrX,
                i = t.zrY,
                n = this._hovered,
                r = n.target;
            r && !r.__zr && (n = this.findHover(n.x, n.y), r = n.target);
            var o = this._hovered = this.findHover(e, i),
                a = o.target,
                s = this.proxy;
            s.setCursor && s.setCursor(a ? a.cursor : "default"), r && a !== r && this.dispatchToElement(n, "mouseout", t), this.dispatchToElement(o, "mousemove", t), a && a !== r && this.dispatchToElement(o, "mouseover", t)
        },
        mouseout: function(t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, i = t.toElement || t.relatedTarget;
            do i = i && i.parentNode; while (i && 9 != i.nodeType && !(e = i === this.painterRoot));
            !e && this.trigger("globalout", {
                event: t
            })
        },
        resize: function(t) {
            this._hovered = {}
        },
        dispatch: function(t, e) {
            var i = this[t];
            i && i.call(this, e)
        },
        dispose: function() {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null
        },
        setCursorStyle: function(t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        },
        dispatchToElement: function(t, e, i) {
            t = t || {};
            var r = t.target;
            if (!r || !r.silent) {
                for (var o = "on" + e, a = n(e, t, i); r && (r[o] && (a.cancelBubble = r[o].call(r, a)), r.trigger(e, a), r = r.parent, !a.cancelBubble););
                a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(t) {
                    "function" == typeof t[o] && t[o].call(t, a), t.trigger && t.trigger(e, a)
                }))
            }
        },
        findHover: function(t, e, i) {
            for (var n = this.storage.getDisplayList(), r = {
                x: t,
                y: e
            }, a = n.length - 1; a >= 0; a--) {
                var s;
                if (n[a] !== i && !n[a].ignore && (s = o(n[a], t, e)) && (!r.topTarget && (r.topTarget = n[a]), s !== u)) {
                    r.target = n[a];
                    break
                }
            }
            return r
        }
    }, a.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
        f.prototype[t] = function(e) {
            var i = this.findHover(e.zrX, e.zrY),
                n = i.target;
            if ("mousedown" === t) this._downEl = n, this._downPoint = [e.zrX, e.zrY], this._upEl = n;
            else if ("mosueup" === t) this._upEl = n;
            else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || s.dist(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(i, t, e)
        }
    }), a.mixin(f, h), a.mixin(f, l);
    var p = f;
    t.exports = p
}, function(t, e) {
    function i() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
    }

    function n(t, e) {
        return {
            target: t,
            topTarget: e && e.topTarget
        }
    }
    i.prototype = {
        constructor: i,
        _dragStart: function(t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(n(e, t), "dragstart", t.event))
        },
        _drag: function(t) {
            var e = this._draggingTarget;
            if (e) {
                var i = t.offsetX,
                    r = t.offsetY,
                    o = i - this._x,
                    a = r - this._y;
                this._x = i, this._y = r, e.drift(o, a, t), this.dispatchToElement(n(e, t), "drag", t.event);
                var s = this.findHover(i, r, e).target,
                    l = this._dropTarget;
                this._dropTarget = s, e !== s && (l && s !== l && this.dispatchToElement(n(l, t), "dragleave", t.event), s && s !== l && this.dispatchToElement(n(s, t), "dragenter", t.event))
            }
        },
        _dragEnd: function(t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(n(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(n(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }
    };
    var r = i;
    t.exports = r
}, function(t, e, i) {
    function n(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }
    var r = i(3),
        o = i(31),
        a = i(82),
        s = i(123),
        l = function() {
            this._roots = [], this._displayList = [], this._displayListLen = 0
        };
    l.prototype = {
        constructor: l,
        traverse: function(t, e) {
            for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e)
        },
        getDisplayList: function(t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList
        },
        updateDisplayList: function(t) {
            this._displayListLen = 0;
            for (var e = this._roots, i = this._displayList, r = 0, a = e.length; r < a; r++) this._updateAndAddDisplayable(e[r], null, t);
            i.length = this._displayListLen, o.canvasSupported && s(i, n)
        },
        _updateAndAddDisplayable: function(t, e, i) {
            if (!t.ignore || i) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var n = t.clipPath;
                if (n) {
                    e = e ? e.slice() : [];
                    for (var r = n, o = t; r;) r.parent = o, r.updateTransform(), e.push(r), o = r, r = r.clipPath
                }
                if (t.isGroup) {
                    for (var a = t._children, s = 0; s < a.length; s++) {
                        var l = a[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i)
                    }
                    t.__dirty = !1
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
            }
        },
        addRoot: function(t) {
            t.__storage !== this && (t instanceof a && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
        },
        delRoot: function(t) {
            if (null == t) {
                for (var e = 0; e < this._roots.length; e++) {
                    var i = this._roots[e];
                    i instanceof a && i.delChildrenFromStorage(this)
                }
                return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
            }
            if (t instanceof Array)
                for (var e = 0, n = t.length; e < n; e++) this.delRoot(t[e]);
            else {
                var o = r.indexOf(this._roots, t);
                o >= 0 && (this.delFromStorage(t), this._roots.splice(o, 1), t instanceof a && t.delChildrenFromStorage(this))
            }
        },
        addToStorage: function(t) {
            return t.__storage = this, t.dirty(!1), this
        },
        delFromStorage: function(t) {
            return t && (t.__storage = null), this
        },
        dispose: function() {
            this._renderList = this._roots = null
        },
        displayableSortFunc: n
    };
    var h = l;
    t.exports = h
}, function(t, e, i) {
    function n(t) {
        return parseInt(t, 10)
    }

    function r(t) {
        return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
    }

    function o(t) {
        t.__unusedCount++
    }

    function a(t) {
        1 == t.__unusedCount && t.clear()
    }

    function s(t, e, i) {
        return w.copy(t.getBoundingRect()), t.transform && w.applyTransform(t.transform), b.width = e, b.height = i, !w.intersect(b)
    }

    function l(t, e) {
        if (t == e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var i = 0; i < t.length; i++)
            if (t[i] !== e[i]) return !0
    }

    function h(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e)
        }
    }

    function u(t, e) {
        var i = document.createElement("div");
        return i.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
    }
    var c = i(80),
        f = c.devicePixelRatio,
        p = i(3),
        d = i(175),
        m = i(25),
        v = i(123),
        g = i(329),
        _ = i(185),
        y = i(180),
        x = 5,
        w = new m(0, 0, 0, 0),
        b = new m(0, 0, 0, 0),
        T = function(t, e, i) {
            this.type = "canvas";
            var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = i = p.extend({}, i || {}), this.dpr = i.devicePixelRatio || f, this._singleCanvas = n, this.root = t;
            var r = t.style;
            r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var o = this._zlevelList = [],
                a = this._layers = {};
            if (this._layerConfig = {}, n) {
                null != i.width && (t.width = i.width), null != i.height && (t.height = i.height);
                var s = t.width,
                    l = t.height;
                this._width = s, this._height = l;
                var h = new g(t, this, 1);
                h.initContext(), a[0] = h, o.push(0), this._domRoot = t
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var c = this._domRoot = u(this._width, this._height);
                t.appendChild(c)
            }
            this._progressiveLayers = [], this._hoverlayer, this._hoverElements = []
        };
    T.prototype = {
        constructor: T,
        getType: function() {
            return "canvas"
        },
        isSingleCanvas: function() {
            return this._singleCanvas
        },
        getViewportRoot: function() {
            return this._domRoot
        },
        getViewportRootOffset: function() {
            var t = this.getViewportRoot();
            if (t) return {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            }
        },
        refresh: function(t) {
            var e = this.storage.getDisplayList(!0),
                i = this._zlevelList;
            this._paintList(e, t);
            for (var n = 0; n < i.length; n++) {
                var r = i[n],
                    o = this._layers[r];
                !o.__builtin__ && o.refresh && o.refresh()
            }
            return this.refreshHover(), this._progressiveLayers.length && this._startProgessive(), this
        },
        addHover: function(t, e) {
            if (!t.__hoverMir) {
                var i = new t.constructor({
                    style: t.style,
                    shape: t.shape
                });
                i.__from = t, t.__hoverMir = i, i.setStyle(e), this._hoverElements.push(i)
            }
        },
        removeHover: function(t) {
            var e = t.__hoverMir,
                i = this._hoverElements,
                n = p.indexOf(i, e);
            n >= 0 && i.splice(n, 1), t.__hoverMir = null
        },
        clearHover: function(t) {
            for (var e = this._hoverElements, i = 0; i < e.length; i++) {
                var n = e[i].__from;
                n && (n.__hoverMir = null)
            }
            e.length = 0
        },
        refreshHover: function() {
            var t = this._hoverElements,
                e = t.length,
                i = this._hoverlayer;
            if (i && i.clear(), e) {
                v(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                var n = {};
                i.ctx.save();
                for (var r = 0; r < e;) {
                    var o = t[r],
                        a = o.__from;
                    a && a.__zr ? (r++, a.invisible || (o.transform = a.transform, o.invTransform = a.invTransform, o.__clipPaths = a.__clipPaths, this._doPaintEl(o, i, !0, n))) : (t.splice(r, 1), a.__hoverMir = null, e--)
                }
                i.ctx.restore()
            }
        },
        _startProgessive: function() {
            function t() {
                i === e._progressiveToken && e.storage && (e._doPaintList(e.storage.getDisplayList()), e._furtherProgressive ? (e._progress++, _(t)) : e._progressiveToken = -1)
            }
            var e = this;
            if (e._furtherProgressive) {
                var i = e._progressiveToken = +new Date;
                e._progress++, _(t)
            }
        },
        _clearProgressive: function() {
            this._progressiveToken = -1, this._progress = 0, p.each(this._progressiveLayers, function(t) {
                t.__dirty && t.clear()
            })
        },
        _paintList: function(t, e) {
            null == e && (e = !1), this._updateLayerStatus(t), this._clearProgressive(), this.eachBuiltinLayer(o), this._doPaintList(t, e), this.eachBuiltinLayer(a)
        },
        _doPaintList: function(t, e) {
            function i(t) {
                var e = o.dpr || 1;
                o.save(), o.globalAlpha = 1, o.shadowBlur = 0, n.__dirty = !0, o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(t.dom, 0, 0, u * e, c * e), o.restore()
            }
            for (var n, r, o, a, s, l, h = 0, u = this._width, c = this._height, f = this._progress, m = 0, v = t.length; m < v; m++) {
                var g = t[m],
                    _ = this._singleCanvas ? 0 : g.zlevel,
                    y = g.__frame;
                if (y < 0 && s && (i(s), s = null), r !== _ && (o && o.restore(), a = {}, r = _, n = this.getLayer(r), n.__builtin__ || d("ZLevel " + r + " has been used by unkown layer " + n.id), o = n.ctx, o.save(), n.__unusedCount = 0, (n.__dirty || e) && n.clear()), n.__dirty || e) {
                    if (y >= 0) {
                        if (!s) {
                            if (s = this._progressiveLayers[Math.min(h++, x - 1)], s.ctx.save(), s.renderScope = {}, s && s.__progress > s.__maxProgress) {
                                m = s.__nextIdxNotProg - 1;
                                continue
                            }
                            l = s.__progress, s.__dirty || (f = l), s.__progress = f + 1
                        }
                        y === f && this._doPaintEl(g, s, !0, s.renderScope)
                    } else this._doPaintEl(g, n, e, a);
                    g.__dirty = !1
                }
            }
            s && i(s), o && o.restore(), this._furtherProgressive = !1, p.each(this._progressiveLayers, function(t) {
                t.__maxProgress >= t.__progress && (this._furtherProgressive = !0)
            }, this)
        },
        _doPaintEl: function(t, e, i, n) {
            var r = e.ctx,
                o = t.transform;
            if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && (!o || o[0] || o[3]) && (!t.culling || !s(t, this._width, this._height))) {
                var a = t.__clipPaths;
                (n.prevClipLayer !== e || l(a, n.prevElClipPaths)) && (n.prevElClipPaths && (n.prevClipLayer.ctx.restore(), n.prevClipLayer = n.prevElClipPaths = null, n.prevEl = null), a && (r.save(), h(a, r), n.prevClipLayer = e, n.prevElClipPaths = a)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r)
            }
        },
        getLayer: function(t) {
            if (this._singleCanvas) return this._layers[0];
            var e = this._layers[t];
            return e || (e = new g("zr_" + t, this, this.dpr), e.__builtin__ = !0, this._layerConfig[t] && p.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
        },
        insertLayer: function(t, e) {
            var i = this._layers,
                n = this._zlevelList,
                o = n.length,
                a = null,
                s = -1,
                l = this._domRoot;
            if (i[t]) return void d("ZLevel " + t + " has been used already");
            if (!r(e)) return void d("Layer of zlevel " + t + " is not valid");
            if (o > 0 && t > n[0]) {
                for (s = 0; s < o - 1 && !(n[s] < t && n[s + 1] > t); s++);
                a = i[n[s]]
            }
            if (n.splice(s + 1, 0, t), i[t] = e, !e.virtual)
                if (a) {
                    var h = a.dom;
                    h.nextSibling ? l.insertBefore(e.dom, h.nextSibling) : l.appendChild(e.dom)
                } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom)
        },
        eachLayer: function(t, e) {
            var i, n, r = this._zlevelList;
            for (n = 0; n < r.length; n++) i = r[n], t.call(e, this._layers[i], i)
        },
        eachBuiltinLayer: function(t, e) {
            var i, n, r, o = this._zlevelList;
            for (r = 0; r < o.length; r++) n = o[r], i = this._layers[n], i.__builtin__ && t.call(e, i, n)
        },
        eachOtherLayer: function(t, e) {
            var i, n, r, o = this._zlevelList;
            for (r = 0; r < o.length; r++) n = o[r], i = this._layers[n], i.__builtin__ || t.call(e, i, n)
        },
        getLayers: function() {
            return this._layers
        },
        _updateLayerStatus: function(t) {
            var e = this._layers,
                i = this._progressiveLayers,
                n = {},
                r = {};
            this.eachBuiltinLayer(function(t, e) {
                n[e] = t.elCount, t.elCount = 0, t.__dirty = !1
            }), p.each(i, function(t, e) {
                r[e] = t.elCount, t.elCount = 0, t.__dirty = !1
            });
            for (var o, a, s = 0, l = 0, h = 0, u = t.length; h < u; h++) {
                var c = t[h],
                    f = this._singleCanvas ? 0 : c.zlevel,
                    d = e[f],
                    m = c.progressive;
                if (d && (d.elCount++, d.__dirty = d.__dirty || c.__dirty), m >= 0) {
                    a !== m && (a = m, l++);
                    var v = c.__frame = l - 1;
                    if (!o) {
                        var _ = Math.min(s, x - 1);
                        o = i[_], o || (o = i[_] = new g("progressive", this, this.dpr), o.initContext()), o.__maxProgress = 0
                    }
                    o.__dirty = o.__dirty || c.__dirty, o.elCount++, o.__maxProgress = Math.max(o.__maxProgress, v), o.__maxProgress >= o.__progress && (d.__dirty = !0)
                } else c.__frame = -1, o && (o.__nextIdxNotProg = h, s++, o = null)
            }
            o && (s++, o.__nextIdxNotProg = h), this.eachBuiltinLayer(function(t, e) {
                n[e] !== t.elCount && (t.__dirty = !0)
            }), i.length = Math.min(s, x), p.each(i, function(t, e) {
                r[e] !== t.elCount && (c.__dirty = !0), t.__dirty && (t.__progress = 0)
            })
        },
        clear: function() {
            return this.eachBuiltinLayer(this._clearLayer), this
        },
        _clearLayer: function(t) {
            t.clear()
        },
        configLayer: function(t, e) {
            if (e) {
                var i = this._layerConfig;
                i[t] ? p.merge(i[t], e, !0) : i[t] = e;
                var n = this._layers[t];
                n && p.merge(n, i[t], !0)
            }
        },
        delLayer: function(t) {
            var e = this._layers,
                i = this._zlevelList,
                n = e[t];
            n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(p.indexOf(i, t), 1))
        },
        resize: function(t, e) {
            var i = this._domRoot;
            i.style.display = "none";
            var n = this._opts;
            if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
                i.style.width = t + "px", i.style.height = e + "px";
                for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                p.each(this._progressiveLayers, function(i) {
                    i.resize(t, e)
                }), this.refresh(!0)
            }
            return this._width = t, this._height = e, this
        },
        clearLayer: function(t) {
            var e = this._layers[t];
            e && e.clear()
        },
        dispose: function() {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
        },
        getRenderedCanvas: function(t) {
            function e(t, e) {
                var n = a._zlevelList;
                null == t && (t = -(1 / 0));
                for (var r, o = 0; o < n.length; o++) {
                    var s = n[o],
                        l = a._layers[s];
                    if (!l.__builtin__ && s > t && s < e) {
                        r = l;
                        break
                    }
                }
                r && r.renderToCanvas && (i.ctx.save(), r.renderToCanvas(i.ctx), i.ctx.restore())
            }
            if (t = t || {}, this._singleCanvas) return this._layers[0].dom;
            var i = new g("image", this, t.pixelRatio || this.dpr);
            i.initContext(), i.clearColor = t.backgroundColor, i.clear();
            for (var n, r = this.storage.getDisplayList(!0), o = {}, a = this, s = 0; s < r.length; s++) {
                var l = r[s];
                l.zlevel !== n && (e(n, l.zlevel), n = l.zlevel), this._doPaintEl(l, i, !0, o)
            }
            return e(n, 1 / 0), i.dom
        },
        getWidth: function() {
            return this._width
        },
        getHeight: function() {
            return this._height
        },
        _getSize: function(t) {
            var e = this._opts,
                i = ["width", "height"][t],
                r = ["clientWidth", "clientHeight"][t],
                o = ["paddingLeft", "paddingTop"][t],
                a = ["paddingRight", "paddingBottom"][t];
            if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
            var s = this.root,
                l = document.defaultView.getComputedStyle(s);
            return (s[r] || n(l[i]) || n(s.style[i])) - (n(l[o]) || 0) - (n(l[a]) || 0) | 0
        },
        pathToImage: function(t, e) {
            e = e || this.dpr;
            var i = document.createElement("canvas"),
                n = i.getContext("2d"),
                r = t.getBoundingRect(),
                o = t.style,
                a = o.shadowBlur,
                s = o.shadowOffsetX,
                l = o.shadowOffsetY,
                h = o.hasStroke() ? o.lineWidth : 0,
                u = Math.max(h / 2, -s + a),
                c = Math.max(h / 2, s + a),
                f = Math.max(h / 2, -l + a),
                p = Math.max(h / 2, l + a),
                d = r.width + u + c,
                m = r.height + f + p;
            i.width = d * e, i.height = m * e, n.scale(e, e), n.clearRect(0, 0, d, m), n.dpr = e;
            var v = {
                position: t.position,
                rotation: t.rotation,
                scale: t.scale
            };
            t.position = [u - r.x, f - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(n);
            var g = y,
                _ = new g({
                    style: {
                        x: 0,
                        y: 0,
                        image: i
                    }
                });
            return null != v.position && (_.position = t.position = v.position), null != v.rotation && (_.rotation = t.rotation = v.rotation), null != v.scale && (_.scale = t.scale = v.scale), _
        }
    };
    var S = T;
    t.exports = S
}, function(t, e, i) {
    function n() {
        return !1
    }

    function r(t, e, i) {
        var n = o.createCanvas(),
            r = e.getWidth(),
            a = e.getHeight(),
            s = n.style;
        return s.position = "absolute", s.left = 0, s.top = 0, s.width = r + "px", s.height = a + "px", n.width = r * i, n.height = a * i, n.setAttribute("data-zr-dom-id", t), n
    }
    var o = i(3),
        a = i(80),
        s = a.devicePixelRatio,
        l = i(170),
        h = i(179),
        u = function(t, e, i) {
            var a;
            i = i || s, "string" == typeof t ? a = r(t, e, i) : o.isObject(t) && (a = t, t = a.id), this.id = t, this.dom = a;
            var l = a.style;
            l && (a.onselectstart = n, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", l.padding = 0, l.margin = 0, l["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
        };
    u.prototype = {
        constructor: u,
        elCount: 0,
        __dirty: !0,
        initContext: function() {
            this.ctx = this.dom.getContext("2d"), this.ctx.__currentValues = {}, this.ctx.dpr = this.dpr
        },
        createBackBuffer: function() {
            var t = this.dpr;
            this.domBack = r("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), this.ctxBack.__currentValues = {}, 1 != t && this.ctxBack.scale(t, t)
        },
        resize: function(t, e) {
            var i = this.dpr,
                n = this.dom,
                r = n.style,
                o = this.domBack;
            r.width = t + "px", r.height = e + "px", n.width = t * i, n.height = e * i, o && (o.width = t * i, o.height = e * i, 1 != i && this.ctxBack.scale(i, i))
        },
        clear: function(t) {
            var e = this.dom,
                i = this.ctx,
                n = e.width,
                r = e.height,
                o = this.clearColor,
                a = this.motionBlur && !t,
                s = this.lastFrameAlpha,
                u = this.dpr;
            if (a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / u, r / u)), i.clearRect(0, 0, n, r), o) {
                var c;
                o.colorStops ? (c = o.__canvasGradient || l.getGradient(i, o, {
                    x: 0,
                    y: 0,
                    width: n,
                    height: r
                }), o.__canvasGradient = c) : o.image && (c = h.prototype.getCanvasPattern.call(o, i)), i.save(), i.fillStyle = c || o, i.fillRect(0, 0, n, r), i.restore()
            }
            if (a) {
                var f = this.domBack;
                i.save(), i.globalAlpha = s, i.drawImage(f, 0, 0, n, r), i.restore()
            }
        }
    };
    var c = u;
    t.exports = c
}, function(t, e, i) {
    var n = i(3),
        r = i(124),
        o = r.Dispatcher,
        a = i(185),
        s = i(174),
        l = function(t) {
            t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, o.call(this)
        };
    l.prototype = {
        constructor: l,
        addClip: function(t) {
            this._clips.push(t)
        },
        addAnimator: function(t) {
            t.animation = this;
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i])
        },
        removeClip: function(t) {
            var e = n.indexOf(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        },
        removeAnimator: function(t) {
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
            t.animation = null
        },
        _update: function() {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], o = [], a = 0; a < n; a++) {
                var s = i[a],
                    l = s.step(t, e);
                l && (r.push(l), o.push(s))
            }
            for (var a = 0; a < n;) i[a]._needsRemove ? (i[a] = i[n - 1], i.pop(), n--) : a++;
            n = r.length;
            for (var a = 0; a < n; a++) o[a].fire(r[a]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
        },
        _startLoop: function() {
            function t() {
                e._running && (a(t), !e._paused && e._update())
            }
            var e = this;
            this._running = !0, a(t)
        },
        start: function() {
            this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
        },
        stop: function() {
            this._running = !1
        },
        pause: function() {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        },
        resume: function() {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        },
        clear: function() {
            this._clips = []
        },
        animate: function(t, e) {
            e = e || {};
            var i = new s(t, e.loop, e.getter, e.setter);
            return this.addAnimator(i), i
        }
    }, n.mixin(l, o);
    var h = l;
    t.exports = h
}, function(t, e, i) {
    function n(t) {
        return "mousewheel" === t && m.browser.firefox ? "DOMMouseScroll" : t
    }

    function r(t, e, i) {
        var n = t._gestureMgr;
        "start" === i && n.clear();
        var r = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === i && n.clear(), r) {
            var o = r.type;
            e.gestureEvent = o, t.handler.dispatchToElement({
                target: r.target
            }, o, r.event)
        }
    }

    function o(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
            t._touching = !1
        }, 700)
    }

    function a(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function s(t) {
        function e(t, e) {
            return function() {
                if (!e._touching) return t.apply(e, arguments)
            }
        }
        p.each(y, function(e) {
            t._handlers[e] = p.bind(b[e], t)
        }), p.each(w, function(e) {
            t._handlers[e] = p.bind(b[e], t)
        }), p.each(_, function(i) {
            t._handlers[i] = e(b[i], t)
        })
    }

    function l(t) {
        function e(e, i) {
            p.each(e, function(e) {
                u(t, n(e), i._handlers[e])
            }, i)
        }
        d.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new v, this._handlers = {}, s(this), m.pointerEventsSupported ? e(w, this) : (m.touchEventsSupported && e(y, this), e(_, this))
    }
    var h = i(124),
        u = h.addEventListener,
        c = h.removeEventListener,
        f = h.normalizeEvent,
        p = i(3),
        d = i(65),
        m = i(31),
        v = i(332),
        g = 300,
        _ = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        y = ["touchstart", "touchend", "touchmove"],
        x = {
            pointerdown: 1,
            pointerup: 1,
            pointermove: 1,
            pointerout: 1
        },
        w = p.map(_, function(t) {
            var e = t.replace("mouse", "pointer");
            return x[e] ? e : t
        }),
        b = {
            mousemove: function(t) {
                t = f(this.dom, t), this.trigger("mousemove", t)
            },
            mouseout: function(t) {
                t = f(this.dom, t);
                var e = t.toElement || t.relatedTarget;
                if (e != this.dom)
                    for (; e && 9 != e.nodeType;) {
                        if (e === this.dom) return;
                        e = e.parentNode
                    }
                this.trigger("mouseout", t)
            },
            touchstart: function(t) {
                t = f(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, r(this, t, "start"), b.mousemove.call(this, t), b.mousedown.call(this, t), o(this)
            },
            touchmove: function(t) {
                t = f(this.dom, t), t.zrByTouch = !0, r(this, t, "change"), b.mousemove.call(this, t), o(this)
            },
            touchend: function(t) {
                t = f(this.dom, t), t.zrByTouch = !0, r(this, t, "end"), b.mouseup.call(this, t), +new Date - this._lastTouchMoment < g && b.click.call(this, t), o(this)
            },
            pointerdown: function(t) {
                b.mousedown.call(this, t)
            },
            pointermove: function(t) {
                a(t) || b.mousemove.call(this, t)
            },
            pointerup: function(t) {
                b.mouseup.call(this, t)
            },
            pointerout: function(t) {
                a(t) || b.mouseout.call(this, t)
            }
        };
    p.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
        b[t] = function(e) {
            e = f(this.dom, e), this.trigger(t, e)
        }
    });
    var T = l.prototype;
    T.dispose = function() {
        for (var t = _.concat(y), e = 0; e < t.length; e++) {
            var i = t[e];
            c(this.dom, n(i), this._handlers[i])
        }
    }, T.setCursor = function(t) {
        this.dom.style.cursor = t || "default"
    }, p.mixin(l, d);
    var S = l;
    t.exports = S
}, function(t, e, i) {
    function n(t) {
        var e = t[1][0] - t[0][0],
            i = t[1][1] - t[0][1];
        return Math.sqrt(e * e + i * i)
    }

    function r(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }
    var o = i(124),
        a = function() {
            this._track = []
        };
    a.prototype = {
        constructor: a,
        recognize: function(t, e, i) {
            return this._doTrack(t, e, i), this._recognize(t)
        },
        clear: function() {
            return this._track.length = 0, this
        },
        _doTrack: function(t, e, i) {
            var n = t.touches;
            if (n) {
                for (var r = {
                    points: [],
                    touches: [],
                    target: e,
                    event: t
                }, a = 0, s = n.length; a < s; a++) {
                    var l = n[a],
                        h = o.clientToLocal(i, l, {});
                    r.points.push([h.zrX, h.zrY]), r.touches.push(l)
                }
                this._track.push(r)
            }
        },
        _recognize: function(t) {
            for (var e in s)
                if (s.hasOwnProperty(e)) {
                    var i = s[e](this._track, t);
                    if (i) return i
                }
        }
    };
    var s = {
            pinch: function(t, e) {
                var i = t.length;
                if (i) {
                    var o = (t[i - 1] || {}).points,
                        a = (t[i - 2] || {}).points || o;
                    if (a && a.length > 1 && o && o.length > 1) {
                        var s = n(o) / n(a);
                        !isFinite(s) && (s = 1), e.pinchScale = s;
                        var l = r(o);
                        return e.pinchX = l[0], e.pinchY = l[1], {
                            type: "pinch",
                            target: t[0].target,
                            event: e
                        }
                    }
                }
            }
        },
        l = a;
    t.exports = l
}, function(t, e, i) {
    var n = i(120);
    t.exports = function(t) {
        function e(e) {
            var i = (e.visualColorAccessPath || "itemStyle.normal.color").split("."),
                r = e.getData(),
                o = e.get(i) || e.getColorFromPalette(e.get("name"));
            r.setVisual("color", o), t.isSeriesFiltered(e) || ("function" != typeof o || o instanceof n || r.each(function(t) {
                r.setItemVisual(t, "color", o(e.getDataParams(t)))
            }), r.each(function(t) {
                var e = r.getItemModel(t),
                    n = e.get(i, !0);
                null != n && r.setItemVisual(t, "color", n)
            }))
        }
        t.eachRawSeries(e)
    }
}, function(t, e, i) {
    var n = i(35),
        r = i(3),
        o = Math.PI;
    t.exports = function(t, e) {
        e = e || {}, r.defaults(e, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var i = new n.Rect({
                style: {
                    fill: e.maskColor
                },
                zlevel: e.zlevel,
                z: 1e4
            }),
            a = new n.Arc({
                shape: {
                    startAngle: -o / 2,
                    endAngle: -o / 2 + .1,
                    r: 10
                },
                style: {
                    stroke: e.color,
                    lineCap: "round",
                    lineWidth: 5
                },
                zlevel: e.zlevel,
                z: 10001
            }),
            s = new n.Rect({
                style: {
                    fill: "none",
                    text: e.text,
                    textPosition: "right",
                    textDistance: 10,
                    textFill: e.textColor
                },
                zlevel: e.zlevel,
                z: 10001
            });
        a.animateShape(!0).when(1e3, {
            endAngle: 3 * o / 2
        }).start("circularInOut"), a.animateShape(!0).when(1e3, {
            startAngle: 3 * o / 2
        }).delay(300).start("circularInOut");
        var l = new n.Group;
        return l.add(a), l.add(s), l.add(i), l.resize = function() {
            var e = t.getWidth() / 2,
                n = t.getHeight() / 2;
            a.setShape({
                cx: e,
                cy: n
            });
            var r = a.shape.r;
            s.setShape({
                x: e - r,
                y: n - r,
                width: 2 * r,
                height: 2 * r
            }), i.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        }, l.resize(), l
    }
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t
    }

    function r(t, e, i, r, o) {
        this._old = t, this._new = e, this._oldKeyGetter = i || n, this._newKeyGetter = r || n, this.context = o
    }

    function o(t, e, i, n, r) {
        for (var o = 0; o < t.length; o++) {
            var a = "_ec_" + r[n](t[o], o),
                s = e[a];
            null == s ? (i.push(a), e[a] = o) : (s.length || (e[a] = s = [s]), s.push(o))
        }
    }
    r.prototype = {
        constructor: r,
        add: function(t) {
            return this._add = t, this
        },
        update: function(t) {
            return this._update = t, this
        },
        remove: function(t) {
            return this._remove = t, this
        },
        execute: function() {
            var t, e = this._old,
                i = this._new,
                n = {},
                r = {},
                a = [],
                s = [];
            for (o(e, n, a, "_oldKeyGetter", this), o(i, r, s, "_newKeyGetter", this), t = 0; t < e.length; t++) {
                var l = a[t],
                    h = r[l];
                if (null != h) {
                    var u = h.length;
                    u ? (1 === u && (r[l] = null), h = h.unshift()) : r[l] = null, this._update && this._update(h, t)
                } else this._remove && this._remove(t)
            }
            for (var t = 0; t < s.length; t++) {
                var l = s[t];
                if (r.hasOwnProperty(l)) {
                    var h = r[l];
                    if (null == h) continue;
                    if (h.length)
                        for (var c = 0, u = h.length; c < u; c++) this._add && this._add(h[c]);
                    else this._add && this._add(h)
                }
            }
        }
    }, t.exports = r
}, function(t, e, i) {
    var n = i(3),
        r = i(85),
        o = r.prototype,
        a = r.extend({
            type: "ordinal",
            init: function(t, e) {
                this._data = t, this._extent = e || [0, t.length - 1]
            },
            parse: function(t) {
                return "string" == typeof t ? n.indexOf(this._data, t) : Math.round(t)
            },
            contain: function(t) {
                return t = this.parse(t), o.contain.call(this, t) && null != this._data[t]
            },
            normalize: function(t) {
                return o.normalize.call(this, this.parse(t))
            },
            scale: function(t) {
                return Math.round(o.scale.call(this, t))
            },
            getTicks: function() {
                for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i), i++;
                return t
            },
            getLabel: function(t) {
                return this._data[t];
            },
            count: function() {
                return this._extent[1] - this._extent[0] + 1
            },
            unionExtentFromData: function(t, e) {
                this.unionExtent(t.getDataExtent(e, !1))
            },
            niceTicks: n.noop,
            niceExtent: n.noop
        });
    a.create = function() {
        return new a
    }, t.exports = a
}, function(t, e, i) {
    var n = i(3),
        r = i(15),
        o = i(32),
        a = i(187),
        s = i(86),
        l = s.prototype,
        h = Math.ceil,
        u = Math.floor,
        c = 1e3,
        f = 60 * c,
        p = 60 * f,
        d = 24 * p,
        m = function(t, e, i, n) {
            for (; i < n;) {
                var r = i + n >>> 1;
                t[r][2] < e ? i = r + 1 : n = r
            }
            return i
        },
        v = s.extend({
            type: "time",
            getLabel: function(t) {
                var e = this._stepLvl,
                    i = new Date(t);
                return o.formatTime(e[0], i, this.getSetting("useUTC"))
            },
            niceExtent: function(t) {
                var e = this._extent;
                if (e[0] === e[1] && (e[0] -= d, e[1] += d), e[1] === -(1 / 0) && e[0] === 1 / 0) {
                    var i = new Date;
                    e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - d
                }
                this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var n = this._interval;
                t.fixMin || (e[0] = r.round(u(e[0] / n) * n)), t.fixMax || (e[1] = r.round(h(e[1] / n) * n))
            },
            niceTicks: function(t, e, i) {
                t = t || 10;
                var n = this._extent,
                    o = n[1] - n[0],
                    s = o / t;
                null != e && s < e && (s = e), null != i && s > i && (s = i);
                var l = g.length,
                    c = m(g, s, 0, l),
                    f = g[Math.min(c, l - 1)],
                    p = f[2];
                if ("year" === f[0]) {
                    var d = o / p,
                        v = r.nice(d / t, !0);
                    p *= v
                }
                var _ = this.getSetting("useUTC") ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3,
                    y = [Math.round(h((n[0] - _) / p) * p + _), Math.round(u((n[1] - _) / p) * p + _)];
                a.fixExtent(y, n), this._stepLvl = f, this._interval = p, this._niceExtent = y
            },
            parse: function(t) {
                return +r.parseDate(t)
            }
        });
    n.each(["contain", "normalize"], function(t) {
        v.prototype[t] = function(e) {
            return l[t].call(this, this.parse(e))
        }
    });
    var g = [
        ["hh:mm:ss", 1, c],
        ["hh:mm:ss", 5, 5 * c],
        ["hh:mm:ss", 10, 10 * c],
        ["hh:mm:ss", 15, 15 * c],
        ["hh:mm:ss", 30, 30 * c],
        ["hh:mm\nMM-dd", 1, f],
        ["hh:mm\nMM-dd", 5, 5 * f],
        ["hh:mm\nMM-dd", 10, 10 * f],
        ["hh:mm\nMM-dd", 15, 15 * f],
        ["hh:mm\nMM-dd", 30, 30 * f],
        ["hh:mm\nMM-dd", 1, p],
        ["hh:mm\nMM-dd", 2, 2 * p],
        ["hh:mm\nMM-dd", 6, 6 * p],
        ["hh:mm\nMM-dd", 12, 12 * p],
        ["MM-dd\nyyyy", 1, d],
        ["week", 7, 7 * d],
        ["month", 1, 31 * d],
        ["quarter", 3, 380 * d / 4],
        ["half-year", 6, 380 * d / 2],
        ["year", 1, 380 * d]
    ];
    v.create = function(t) {
        return new v({
            useUTC: t.ecModel.get("useUTC")
        })
    }, t.exports = v
}, function(t, e, i) {
    function n(t, e) {
        return c(t, u(e))
    }
    var r = i(3),
        o = i(85),
        a = i(15),
        s = i(86),
        l = o.prototype,
        h = s.prototype,
        u = a.getPrecisionSafe,
        c = a.round,
        f = Math.floor,
        p = Math.ceil,
        d = Math.pow,
        m = Math.log,
        v = o.extend({
            type: "log",
            base: 10,
            $constructor: function() {
                o.apply(this, arguments), this._originalScale = new s
            },
            getTicks: function() {
                var t = this._originalScale,
                    e = this._extent,
                    i = t.getExtent();
                return r.map(h.getTicks.call(this), function(r) {
                    var o = a.round(d(this.base, r));
                    return o = r === e[0] && t.__fixMin ? n(o, i[0]) : o, o = r === e[1] && t.__fixMax ? n(o, i[1]) : o
                }, this)
            },
            getLabel: h.getLabel,
            scale: function(t) {
                return t = l.scale.call(this, t), d(this.base, t)
            },
            setExtent: function(t, e) {
                var i = this.base;
                t = m(t) / m(i), e = m(e) / m(i), h.setExtent.call(this, t, e)
            },
            getExtent: function() {
                var t = this.base,
                    e = l.getExtent.call(this);
                e[0] = d(t, e[0]), e[1] = d(t, e[1]);
                var i = this._originalScale,
                    r = i.getExtent();
                return i.__fixMin && (e[0] = n(e[0], r[0])), i.__fixMax && (e[1] = n(e[1], r[1])), e
            },
            unionExtent: function(t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = m(t[0]) / m(e), t[1] = m(t[1]) / m(e), l.unionExtent.call(this, t)
            },
            unionExtentFromData: function(t, e) {
                this.unionExtent(t.getDataExtent(e, !0, function(t) {
                    return t > 0
                }))
            },
            niceTicks: function(t) {
                t = t || 10;
                var e = this._extent,
                    i = e[1] - e[0];
                if (!(i === 1 / 0 || i <= 0)) {
                    var n = a.quantity(i),
                        r = t / i * n;
                    for (r <= .5 && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;) n *= 10;
                    var o = [a.round(p(e[0] / n) * n), a.round(f(e[1] / n) * n)];
                    this._interval = n, this._niceExtent = o
                }
            },
            niceExtent: function(t) {
                h.niceExtent.call(this, t);
                var e = this._originalScale;
                e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
            }
        });
    r.each(["contain", "normalize"], function(t) {
        v.prototype[t] = function(e) {
            return e = m(e) / m(this.base), l[t].call(this, e)
        }
    }), v.create = function() {
        return new v
    }, t.exports = v
}, function(t, e, i) {
    var n = i(340),
        r = i(188),
        o = i(84),
        a = i(189),
        s = i(33),
        l = i(3);
    t.exports = {
        createList: function(t) {
            var e = t.get("data");
            return n(e, t, t.ecModel)
        },
        completeDimensions: i(126),
        createSymbol: r.createSymbol,
        createScale: function(t, e) {
            var i = e;
            e instanceof s || (i = new s(e), l.mixin(i, a));
            var n = o.createScaleByModel(i);
            return n.setExtent(t[0], t[1]), o.niceScaleExtent(n, i), n
        },
        mixinAxisModelCommonMethods: function(t) {
            l.mixin(t, a)
        }
    }
}, function(t, e, i) {
    "use strict";

    function n(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function r(t) {
        var e = n(t);
        return null != e && !c.isArray(d(e))
    }

    function o(t, e, i) {
        if (t = t || [], __DEV__ && !c.isArray(t)) throw new Error("Invalid data.");
        var n = e.get("coordinateSystem"),
            o = v[n],
            a = p.get(n),
            s = {
                encodeDef: e.get("encode"),
                dimsDef: e.get("dimensions")
            },
            g = o && o(t, e, i, s),
            _ = g && g.dimensions;
        _ || (_ = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"], _ = u(_, t, s));
        var y = g ? g.categoryIndex : -1,
            x = new h(_, e),
            w = l(g, t),
            b = {},
            T = y >= 0 && r(t) ? function(t, e, i, n) {
                return f.isDataItemOption(t) && (x.hasItemOption = !0), n === y ? i : m(d(t), _[n])
            } : function(t, e, i, n) {
                var r = d(t),
                    o = m(r && r[n], _[n]);
                f.isDataItemOption(t) && (x.hasItemOption = !0);
                var a = g && g.categoryAxesModels;
                return a && a[e] && "string" == typeof o && (b[e] = b[e] || a[e].getCategories(), o = c.indexOf(b[e], o), o < 0 && !isNaN(o) && (o = +o)), o
            };
        return x.hasItemOption = !1, x.initData(t, w, T), x
    }

    function a(t) {
        return "category" !== t && "time" !== t
    }

    function s(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function l(t, e) {
        var i, n = [],
            r = t && t.dimensions[t.categoryIndex];
        if (r && (i = t.categoryAxesModels[r.name]), i) {
            var o = i.getCategories();
            if (o) {
                var a = e.length;
                if (c.isArray(e[0]) && e[0].length > 1) {
                    n = [];
                    for (var s = 0; s < a; s++) n[s] = o[e[s][t.categoryIndex || 0]]
                } else n = o.slice(0)
            }
        }
        return n
    }
    var h = i(125),
        u = i(126),
        c = i(3),
        f = i(24),
        p = i(122),
        d = f.getDataItemValue,
        m = f.converDataValue,
        v = {
            cartesian2d: function(t, e, i, n) {
                var r = c.map(["xAxis", "yAxis"], function(t) {
                        return i.queryComponents({
                            mainType: t,
                            index: e.get(t + "Index"),
                            id: e.get(t + "Id")
                        })[0]
                    }),
                    o = r[0],
                    l = r[1];
                if (__DEV__) {
                    if (!o) throw new Error('xAxis "' + c.retrieve(e.get("xAxisIndex"), e.get("xAxisId"), 0) + '" not found');
                    if (!l) throw new Error('yAxis "' + c.retrieve(e.get("xAxisIndex"), e.get("yAxisId"), 0) + '" not found')
                }
                var h = o.get("type"),
                    f = l.get("type"),
                    p = [{
                        name: "x",
                        type: s(h),
                        stackable: a(h)
                    }, {
                        name: "y",
                        type: s(f),
                        stackable: a(f)
                    }],
                    d = "category" === h,
                    m = "category" === f;
                p = u(p, t, n);
                var v = {};
                return d && (v.x = o), m && (v.y = l), {
                    dimensions: p,
                    categoryIndex: d ? 0 : m ? 1 : -1,
                    categoryAxesModels: v
                }
            },
            singleAxis: function(t, e, i, n) {
                var r = i.queryComponents({
                    mainType: "singleAxis",
                    index: e.get("singleAxisIndex"),
                    id: e.get("singleAxisId")
                })[0];
                if (__DEV__ && !r) throw new Error("singleAxis should be specified.");
                var o = r.get("type"),
                    l = "category" === o,
                    h = [{
                        name: "single",
                        type: s(o),
                        stackable: a(o)
                    }];
                h = u(h, t, n);
                var c = {};
                return l && (c.single = r), {
                    dimensions: h,
                    categoryIndex: l ? 0 : -1,
                    categoryAxesModels: c
                }
            },
            polar: function(t, e, i, n) {
                var r = i.queryComponents({
                        mainType: "polar",
                        index: e.get("polarIndex"),
                        id: e.get("polarId")
                    })[0],
                    o = r.findAxisModel("angleAxis"),
                    l = r.findAxisModel("radiusAxis");
                if (__DEV__) {
                    if (!o) throw new Error("angleAxis option not found");
                    if (!l) throw new Error("radiusAxis option not found")
                }
                var h = l.get("type"),
                    c = o.get("type"),
                    f = [{
                        name: "radius",
                        type: s(h),
                        stackable: a(h)
                    }, {
                        name: "angle",
                        type: s(c),
                        stackable: a(c)
                    }],
                    p = "category" === c,
                    d = "category" === h;
                f = u(f, t, n);
                var m = {};
                return d && (m.radius = l), p && (m.angle = o), {
                    dimensions: f,
                    categoryIndex: p ? 1 : d ? 0 : -1,
                    categoryAxesModels: m
                }
            },
            geo: function(t, e, i, n) {
                return {
                    dimensions: u([{
                        name: "lng"
                    }, {
                        name: "lat"
                    }], t, n)
                }
            }
        };
    t.exports = o
}, function(t, e, i) {
    var n = i(3),
        r = i(62);
    i(342), i(349), i(350), r.registerVisual(n.curry(i(351), "radar")), r.registerVisual(n.curry(i(352), "radar", "circle", null)), r.registerLayout(i(353)), r.registerProcessor(n.curry(i(354), "radar")), r.registerPreprocessor(i(355))
}, function(t, e, i) {
    i(343), i(345), i(347)
}, function(t, e, i) {
    function n(t, e, i) {
        this._model = t, this.dimensions = [], this._indicatorAxes = r.map(t.getIndicatorModels(), function(t, e) {
            var i = "indicator_" + e,
                n = new o(i, new a);
            return n.name = t.get("name"), n.model = t, t.axis = n, this.dimensions.push(i), n
        }, this), this.resize(t, i), this.cx, this.cy, this.r, this.startAngle
    }
    var r = i(3),
        o = i(344),
        a = i(86),
        s = i(15),
        l = i(84);
    n.prototype.getIndicatorAxes = function() {
        return this._indicatorAxes
    }, n.prototype.dataToPoint = function(t, e) {
        var i = this._indicatorAxes[e];
        return this.coordToPoint(i.dataToCoord(t), e)
    }, n.prototype.coordToPoint = function(t, e) {
        var i = this._indicatorAxes[e],
            n = i.angle,
            r = this.cx + t * Math.cos(n),
            o = this.cy - t * Math.sin(n);
        return [r, o]
    }, n.prototype.pointToData = function(t) {
        var e = t[0] - this.cx,
            i = t[1] - this.cy,
            n = Math.sqrt(e * e + i * i);
        e /= n, i /= n;
        for (var r, o = Math.atan2(-i, e), a = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
            var h = this._indicatorAxes[l],
                u = Math.abs(o - h.angle);
            u < a && (r = h, s = l, a = u)
        }
        return [s, +(r && r.coodToData(n))]
    }, n.prototype.resize = function(t, e) {
        var i = t.get("center"),
            n = e.getWidth(),
            o = e.getHeight(),
            a = Math.min(n, o) / 2;
        this.cx = s.parsePercent(i[0], n), this.cy = s.parsePercent(i[1], o), this.startAngle = t.get("startAngle") * Math.PI / 180, this.r = s.parsePercent(t.get("radius"), a), r.each(this._indicatorAxes, function(t, e) {
            t.setExtent(0, this.r);
            var i = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
            i = Math.atan2(Math.sin(i), Math.cos(i)), t.angle = i
        }, this)
    }, n.prototype.update = function(t, e) {
        function i(t) {
            var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
                i = t / e;
            return 2 === i ? i = 5 : i *= 2, i * e
        }
        var n = this._indicatorAxes,
            o = this._model;
        r.each(n, function(t) {
            t.scale.setExtent(1 / 0, -(1 / 0))
        }), t.eachSeriesByType("radar", function(e, i) {
            if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === o) {
                var a = e.getData();
                r.each(n, function(t) {
                    t.scale.unionExtentFromData(a, t.dim)
                })
            }
        }, this);
        var a = o.get("splitNumber");
        r.each(n, function(t, e) {
            var n = l.getScaleExtent(t.scale, t.model);
            l.niceScaleExtent(t.scale, t.model);
            var r = t.model,
                o = t.scale,
                h = r.getMin(),
                u = r.getMax(),
                c = o.getInterval();
            if (null != h && null != u) o.setExtent(+h, +u), o.setInterval((u - h) / a);
            else if (null != h) {
                var f;
                do f = h + c * a, o.setExtent(+h, f), o.setInterval(c), c = i(c); while (f < n[1] && isFinite(f) && isFinite(n[1]))
            } else if (null != u) {
                var p;
                do p = u - c * a, o.setExtent(p, +u), o.setInterval(c), c = i(c); while (p > n[0] && isFinite(p) && isFinite(n[0]))
            } else {
                var d = o.getTicks().length - 1;
                d > a && (c = i(c));
                var m = Math.round((n[0] + n[1]) / 2 / c) * c,
                    v = Math.round(a / 2);
                o.setExtent(s.round(m - v * c), s.round(m + (a - v) * c)), o.setInterval(c)
            }
        })
    }, n.dimensions = [], n.create = function(t, e) {
        var i = [];
        return t.eachComponent("radar", function(r) {
            var o = new n(r, t, e);
            i.push(o), r.coordinateSystem = o
        }), t.eachSeriesByType("radar", function(t) {
            "radar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("radarIndex") || 0])
        }), i
    }, i(122).register("radar", n), t.exports = n
}, function(t, e, i) {
    function n(t, e, i) {
        o.call(this, t, e, i), this.type = "value", this.angle = 0, this.name = "", this.model
    }
    var r = i(3),
        o = i(186);
    r.inherits(n, o), t.exports = n
}, function(t, e, i) {
    function n(t, e) {
        return s.defaults({
            show: e
        }, t)
    }
    var r = i(346),
        o = r.valueAxis,
        a = i(33),
        s = i(3),
        l = i(189),
        h = i(62).extendComponentModel({
            type: "radar",
            optionUpdated: function() {
                var t = this.get("boundaryGap"),
                    e = this.get("splitNumber"),
                    i = this.get("scale"),
                    n = this.get("axisLine"),
                    r = this.get("axisTick"),
                    o = this.get("axisLabel"),
                    h = this.get("name"),
                    u = this.get("name.show"),
                    c = this.get("name.formatter"),
                    f = this.get("nameGap"),
                    p = this.get("triggerEvent"),
                    d = s.map(this.get("indicator") || [], function(d) {
                        null != d.max && d.max > 0 && !d.min ? d.min = 0 : null != d.min && d.min < 0 && !d.max && (d.max = 0);
                        var m = h;
                        if (null != d.color && (m = s.defaults({
                                color: d.color
                            }, h)), d = s.merge(s.clone(d), {
                                boundaryGap: t,
                                splitNumber: e,
                                scale: i,
                                axisLine: n,
                                axisTick: r,
                                axisLabel: o,
                                name: d.text,
                                nameLocation: "end",
                                nameGap: f,
                                nameTextStyle: m,
                                triggerEvent: p
                            }, !1), u || (d.name = ""), "string" == typeof c) {
                            var v = d.name;
                            d.name = c.replace("{value}", null != v ? v : "")
                        } else "function" == typeof c && (d.name = c(d.name, d));
                        var g = s.extend(new a(d, null, this.ecModel), l);
                        return g.mainType = "radar", g.componentIndex = this.componentIndex, g
                    }, this);
                this.getIndicatorModels = function() {
                    return d
                }
            },
            defaultOption: {
                zlevel: 0,
                z: 0,
                center: ["50%", "50%"],
                radius: "75%",
                startAngle: 90,
                name: {
                    show: !0
                },
                boundaryGap: [0, 0],
                splitNumber: 5,
                nameGap: 15,
                scale: !1,
                shape: "polygon",
                axisLine: s.merge({
                    lineStyle: {
                        color: "#bbb"
                    }
                }, o.axisLine),
                axisLabel: n(o.axisLabel, !1),
                axisTick: n(o.axisTick, !1),
                splitLine: n(o.splitLine, !0),
                splitArea: n(o.splitArea, !0),
                indicator: []
            }
        });
    t.exports = h
}, function(t, e, i) {
    var n = i(3),
        r = {
            show: !0,
            zlevel: 0,
            z: 0,
            inverse: !1,
            name: "",
            nameLocation: "end",
            nameRotate: null,
            nameTruncate: {
                maxWidth: null,
                ellipsis: "...",
                placeholder: "."
            },
            nameTextStyle: {},
            nameGap: 15,
            silent: !1,
            triggerEvent: !1,
            tooltip: {
                show: !1
            },
            axisPointer: {},
            axisLine: {
                show: !0,
                onZero: !0,
                onZeroAxisIndex: null,
                lineStyle: {
                    color: "#333",
                    width: 1,
                    type: "solid"
                }
            },
            axisTick: {
                show: !0,
                inside: !1,
                length: 5,
                lineStyle: {
                    width: 1
                }
            },
            axisLabel: {
                show: !0,
                inside: !1,
                rotate: 0,
                showMinLabel: null,
                showMaxLabel: null,
                margin: 8,
                fontSize: 12
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#ccc"],
                    width: 1,
                    type: "solid"
                }
            },
            splitArea: {
                show: !1,
                areaStyle: {
                    color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
                }
            }
        },
        o = n.merge({
            boundaryGap: !0,
            splitLine: {
                show: !1
            },
            axisTick: {
                alignWithLabel: !1,
                interval: "auto"
            },
            axisLabel: {
                interval: "auto"
            }
        }, r),
        a = n.merge({
            boundaryGap: [0, 0],
            splitNumber: 5
        }, r),
        s = n.defaults({
            scale: !0,
            min: "dataMin",
            max: "dataMax"
        }, a),
        l = n.defaults({
            scale: !0,
            logBase: 10
        }, a);
    t.exports = {
        categoryAxis: o,
        valueAxis: a,
        timeAxis: s,
        logAxis: l
    }
}, function(t, e, i) {
    var n = i(348),
        r = i(3),
        o = i(35),
        a = ["axisLine", "axisTickLabel", "axisName"];
    t.exports = i(62).extendComponentView({
        type: "radar",
        render: function(t, e, i) {
            var n = this.group;
            n.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t)
        },
        _buildAxes: function(t) {
            var e = t.coordinateSystem,
                i = e.getIndicatorAxes(),
                o = r.map(i, function(t) {
                    var i = new n(t.model, {
                        position: [e.cx, e.cy],
                        rotation: t.angle,
                        labelDirection: -1,
                        tickDirection: -1,
                        nameDirection: 1
                    });
                    return i
                });
            r.each(o, function(t) {
                r.each(a, t.add, t), this.group.add(t.getGroup())
            }, this)
        },
        _buildSplitLineAndArea: function(t) {
            function e(t, e, i) {
                var n = i % e.length;
                return t[n] = t[n] || [], n
            }
            var i = t.coordinateSystem,
                n = i.getIndicatorAxes();
            if (n.length) {
                var a = t.get("shape"),
                    s = t.getModel("splitLine"),
                    l = t.getModel("splitArea"),
                    h = s.getModel("lineStyle"),
                    u = l.getModel("areaStyle"),
                    c = s.get("show"),
                    f = l.get("show"),
                    p = h.get("color"),
                    d = u.get("color");
                p = r.isArray(p) ? p : [p], d = r.isArray(d) ? d : [d];
                var m = [],
                    v = [];
                if ("circle" === a)
                    for (var g = n[0].getTicksCoords(), _ = i.cx, y = i.cy, x = 0; x < g.length; x++) {
                        if (c) {
                            var w = e(m, p, x);
                            m[w].push(new o.Circle({
                                shape: {
                                    cx: _,
                                    cy: y,
                                    r: g[x]
                                }
                            }))
                        }
                        if (f && x < g.length - 1) {
                            var w = e(v, d, x);
                            v[w].push(new o.Ring({
                                shape: {
                                    cx: _,
                                    cy: y,
                                    r0: g[x],
                                    r: g[x + 1]
                                }
                            }))
                        }
                    } else
                    for (var b, T = r.map(n, function(t, e) {
                        var n = t.getTicksCoords();
                        return b = null == b ? n.length - 1 : Math.min(n.length - 1, b), r.map(n, function(t) {
                            return i.coordToPoint(t, e)
                        })
                    }), S = [], x = 0; x <= b; x++) {
                        for (var P = [], k = 0; k < n.length; k++) P.push(T[k][x]);
                        if (P[0] ? P.push(P[0].slice()) : __DEV__ && console.error("Can't draw value axis " + x), c) {
                            var w = e(m, p, x);
                            m[w].push(new o.Polyline({
                                shape: {
                                    points: P
                                }
                            }))
                        }
                        if (f && S) {
                            var w = e(v, d, x - 1);
                            v[w].push(new o.Polygon({
                                shape: {
                                    points: P.concat(S)
                                }
                            }))
                        }
                        S = P.slice().reverse()
                    }
                var C = h.getLineStyle(),
                    A = u.getAreaStyle();
                r.each(v, function(t, e) {
                    this.group.add(o.mergePath(t, {
                        style: r.defaults({
                            stroke: "none",
                            fill: d[e % d.length]
                        }, A),
                        silent: !0
                    }))
                }, this), r.each(m, function(t, e) {
                    this.group.add(o.mergePath(t, {
                        style: r.defaults({
                            fill: "none",
                            stroke: p[e % p.length]
                        }, C),
                        silent: !0
                    }))
                }, this)
            }
        }
    })
}, function(t, e, i) {
    function n(t) {
        var e = {
            componentType: t.mainType
        };
        return e[t.mainType + "Index"] = t.componentIndex, e
    }

    function r(t, e, i, n) {
        var r, o, a = g(i - t.rotation),
            s = n[0] > n[1],
            l = "start" === e && !s || "start" !== e && s;
        return _(a - T / 2) ? (o = l ? "bottom" : "top", r = "center") : _(a - 1.5 * T) ? (o = l ? "top" : "bottom", r = "center") : (o = "middle", r = a < 1.5 * T && a > T / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: a,
            textAlign: r,
            textVerticalAlign: o
        }
    }

    function o(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }

    function a(t, e, i) {
        var n = t.get("axisLabel.showMinLabel"),
            r = t.get("axisLabel.showMaxLabel");
        e = e || [], i = i || [];
        var o = e[0],
            a = e[1],
            h = e[e.length - 1],
            u = e[e.length - 2],
            c = i[0],
            f = i[1],
            p = i[i.length - 1],
            d = i[i.length - 2];
        n === !1 ? (s(o), s(c)) : l(o, a) && (n ? (s(a), s(f)) : (s(o), s(c))), r === !1 ? (s(h), s(p)) : l(u, h) && (r ? (s(u), s(d)) : (s(h), s(p)))
    }

    function s(t) {
        t && (t.ignore = !0)
    }

    function l(t, e, i) {
        var n = t && t.getBoundingRect().clone(),
            r = e && e.getBoundingRect().clone();
        if (n && r) {
            var o = x.identity([]);
            return x.rotate(o, o, -t.rotation), n.applyTransform(x.mul([], o, t.getLocalTransform())), r.applyTransform(x.mul([], o, e.getLocalTransform())), n.intersect(r)
        }
    }

    function h(t) {
        return "middle" === t || "center" === t
    }

    function u(t, e, i) {
        var n = e.axis;
        if (e.get("axisTick.show") && !n.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), o = r.getModel("lineStyle"), a = r.get("length"), s = A(r, i.labelInterval), l = n.getTicksCoords(r.get("alignWithLabel")), h = n.scale.getTicks(), u = e.get("axisLabel.showMinLabel"), c = e.get("axisLabel.showMaxLabel"), p = [], m = [], v = t._transform, g = [], _ = l.length, y = 0; y < _; y++)
                if (!C(n, y, s, _, u, c)) {
                    var x = l[y];
                    p[0] = x, p[1] = 0, m[0] = x, m[1] = i.tickDirection * a, v && (w(p, p, v), w(m, m, v));
                    var b = new d.Line(d.subPixelOptimizeLine({
                        anid: "tick_" + h[y],
                        shape: {
                            x1: p[0],
                            y1: p[1],
                            x2: m[0],
                            y2: m[1]
                        },
                        style: f.defaults(o.getLineStyle(), {
                            stroke: e.get("axisLine.lineStyle.color")
                        }),
                        z2: 2,
                        silent: !0
                    }));
                    t.group.add(b), g.push(b)
                }
            return g
        }
    }

    function c(t, e, i) {
        var r = e.axis,
            a = b(i.axisLabelShow, e.get("axisLabel.show"));
        if (a && !r.scale.isBlank()) {
            var s = e.getModel("axisLabel"),
                l = s.get("margin"),
                h = r.scale.getTicks(),
                u = e.getFormattedLabels(),
                c = (b(i.labelRotate, s.get("rotate")) || 0) * T / 180,
                p = k(i.rotation, c, i.labelDirection),
                v = e.get("data"),
                g = [],
                _ = o(e),
                y = e.get("triggerEvent"),
                x = e.get("axisLabel.showMinLabel"),
                w = e.get("axisLabel.showMaxLabel");
            return f.each(h, function(o, a) {
                if (!C(r, a, i.labelInterval, h.length, x, w)) {
                    var c = s;
                    v && v[o] && v[o].textStyle && (c = new m(v[o].textStyle, s, e.ecModel));
                    var f = c.getTextColor() || e.get("axisLine.lineStyle.color"),
                        b = r.dataToCoord(o),
                        T = [b, i.labelOffset + i.labelDirection * l],
                        S = r.scale.getLabel(o),
                        P = new d.Text({
                            anid: "label_" + o,
                            position: T,
                            rotation: p.rotation,
                            silent: _,
                            z2: 10
                        });
                    d.setTextStyle(P.style, c, {
                        text: u[a],
                        textAlign: c.getShallow("align", !0) || p.textAlign,
                        textVerticalAlign: c.getShallow("verticalAlign", !0) || c.getShallow("baseline", !0) || p.textVerticalAlign,
                        textFill: "function" == typeof f ? f("category" === r.type ? S : "value" === r.type ? o + "" : o, a) : f
                    }), y && (P.eventData = n(e), P.eventData.targetType = "axisLabel", P.eventData.value = S), t._dumbGroup.add(P), P.updateTransform(), g.push(P), t.group.add(P), P.decomposeTransform()
                }
            }), g
        }
    }
    var f = i(3),
        p = i(32),
        d = i(35),
        m = i(33),
        v = i(15),
        g = v.remRadian,
        _ = v.isRadianAroundZero,
        y = i(12),
        x = i(64),
        w = y.applyTransform,
        b = f.retrieve,
        T = Math.PI,
        S = function(t, e) {
            this.opt = e, this.axisModel = t, f.defaults(e, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0
            }), this.group = new d.Group;
            var i = new d.Group({
                position: e.position.slice(),
                rotation: e.rotation
            });
            i.updateTransform(), this._transform = i.transform, this._dumbGroup = i
        };
    S.prototype = {
        constructor: S,
        hasBuilder: function(t) {
            return !!P[t]
        },
        add: function(t) {
            P[t].call(this)
        },
        getGroup: function() {
            return this.group
        }
    };
    var P = {
            axisLine: function() {
                var t = this.opt,
                    e = this.axisModel;
                if (e.get("axisLine.show")) {
                    var i = this.axisModel.axis.getExtent(),
                        n = this._transform,
                        r = [i[0], 0],
                        o = [i[1], 0];
                    n && (w(r, r, n), w(o, o, n)), this.group.add(new d.Line(d.subPixelOptimizeLine({
                        anid: "line",
                        shape: {
                            x1: r[0],
                            y1: r[1],
                            x2: o[0],
                            y2: o[1]
                        },
                        style: f.extend({
                            lineCap: "round"
                        }, e.getModel("axisLine.lineStyle").getLineStyle()),
                        strokeContainThreshold: t.strokeContainThreshold || 5,
                        silent: !0,
                        z2: 1
                    })))
                }
            },
            axisTickLabel: function() {
                var t = this.axisModel,
                    e = this.opt,
                    i = u(this, t, e),
                    n = c(this, t, e);
                a(t, n, i)
            },
            axisName: function() {
                var t = this.opt,
                    e = this.axisModel,
                    i = b(t.axisName, e.get("name"));
                if (i) {
                    var a, s = e.get("nameLocation"),
                        l = t.nameDirection,
                        u = e.getModel("nameTextStyle"),
                        c = e.get("nameGap") || 0,
                        m = this.axisModel.axis.getExtent(),
                        v = m[0] > m[1] ? -1 : 1,
                        g = ["start" === s ? m[0] - v * c : "end" === s ? m[1] + v * c : (m[0] + m[1]) / 2, h(s) ? t.labelOffset + l * c : 0],
                        _ = e.get("nameRotate");
                    null != _ && (_ = _ * T / 180);
                    var y;
                    h(s) ? a = k(t.rotation, null != _ ? _ : t.rotation, l) : (a = r(t, s, _ || 0, m), y = t.axisNameAvailableWidth, null != y && (y = Math.abs(y / Math.sin(a.rotation)), !isFinite(y) && (y = null)));
                    var x = u.getFont(),
                        w = e.get("nameTruncate", !0) || {},
                        S = w.ellipsis,
                        P = b(t.nameTruncateMaxWidth, w.maxWidth, y),
                        C = null != S && null != P ? p.truncateText(i, P, x, S, {
                            minChar: 2,
                            placeholder: w.placeholder
                        }) : i,
                        A = e.get("tooltip", !0),
                        M = e.mainType,
                        O = {
                            componentType: M,
                            name: i,
                            $vars: ["name"]
                        };
                    O[M + "Index"] = e.componentIndex;
                    var E = new d.Text({
                        anid: "name",
                        __fullText: i,
                        __truncatedText: C,
                        position: g,
                        rotation: a.rotation,
                        silent: o(e),
                        z2: 1,
                        tooltip: A && A.show ? f.extend({
                            content: i,
                            formatter: function() {
                                return i
                            },
                            formatterParams: O
                        }, A) : null
                    });
                    d.setTextStyle(E.style, u, {
                        text: C,
                        textFont: x,
                        textFill: u.getTextColor() || e.get("axisLine.lineStyle.color"),
                        textAlign: a.textAlign,
                        textVerticalAlign: a.textVerticalAlign
                    }), e.get("triggerEvent") && (E.eventData = n(e), E.eventData.targetType = "axisName", E.eventData.name = i), this._dumbGroup.add(E), E.updateTransform(), this.group.add(E), E.decomposeTransform()
                }
            }
        },
        k = S.innerTextLayout = function(t, e, i) {
            var n, r, o = g(e - t);
            return _(o) ? (r = i > 0 ? "top" : "bottom", n = "center") : _(o - T) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = o > 0 && o < T ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
                rotation: o,
                textAlign: n,
                textVerticalAlign: r
            }
        },
        C = S.ifIgnoreOnTick = function(t, e, i, n, r, o) {
            if (0 === e && r || e === n - 1 && o) return !1;
            var a, s = t.scale;
            return "ordinal" === s.type && ("function" == typeof i ? (a = s.getTicks()[e], !i(a, s.getLabel(a))) : e % (i + 1))
        },
        A = S.getInterval = function(t, e) {
            var i = t.get("interval");
            return null != i && "auto" != i || (i = e), i
        };
    t.exports = S
}, function(t, e, i) {
    "use strict";
    var n = i(184),
        r = i(125),
        o = i(126),
        a = i(3),
        s = i(32).encodeHTML,
        l = n.extend({
            type: "series.radar",
            dependencies: ["radar"],
            init: function(t) {
                l.superApply(this, "init", arguments), this.legendDataProvider = function() {
                    return this.getRawData()
                }
            },
            getInitialData: function(t, e) {
                var i = t.data || [],
                    n = o([], i, {
                        extraPrefix: "indicator_",
                        extraFromZero: !0
                    }),
                    a = new r(n, this);
                return a.initData(i), a
            },
            formatTooltip: function(t) {
                var e = this.getRawValue(t),
                    i = this.coordinateSystem,
                    n = i.getIndicatorAxes(),
                    r = this.getData().getName(t);
                return s("" === r ? this.name : r) + "<br/>" + a.map(n, function(t, i) {
                    return s(t.name + " : " + e[i])
                }).join("<br />")
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "radar",
                legendHoverLink: !0,
                radarIndex: 0,
                lineStyle: {
                    normal: {
                        width: 2,
                        type: "solid"
                    }
                },
                label: {
                    normal: {
                        position: "top"
                    }
                },
                symbol: "emptyCircle",
                symbolSize: 4
            }
        });
    t.exports = l
}, function(t, e, i) {
    function n(t) {
        return o.isArray(t) || (t = [+t, +t]), t
    }
    var r = i(35),
        o = i(3),
        a = i(188);
    t.exports = i(62).extendChartView({
        type: "radar",
        render: function(t, e, i) {
            function s(t, e) {
                var i = t.getItemVisual(e, "symbol") || "circle",
                    r = t.getItemVisual(e, "color");
                if ("none" !== i) {
                    var o = n(t.getItemVisual(e, "symbolSize")),
                        s = a.createSymbol(i, -1, -1, 2, 2, r);
                    return s.attr({
                        style: {
                            strokeNoScale: !0
                        },
                        z2: 100,
                        scale: [o[0] / 2, o[1] / 2]
                    }), s
                }
            }

            function l(e, i, n, o, a, l) {
                n.removeAll();
                for (var h = 0; h < i.length - 1; h++) {
                    var u = s(o, a);
                    u && (u.__dimIdx = h, e[h] ? (u.attr("position", e[h]), r[l ? "initProps" : "updateProps"](u, {
                        position: i[h]
                    }, t, a)) : u.attr("position", i[h]), n.add(u))
                }
            }

            function h(t) {
                return o.map(t, function(t) {
                    return [u.cx, u.cy]
                })
            }
            var u = t.coordinateSystem,
                c = this.group,
                f = t.getData(),
                p = this._data;
            f.diff(p).add(function(e) {
                var i = f.getItemLayout(e);
                if (i) {
                    var n = new r.Polygon,
                        o = new r.Polyline,
                        a = {
                            shape: {
                                points: i
                            }
                        };
                    n.shape.points = h(i), o.shape.points = h(i), r.initProps(n, a, t, e), r.initProps(o, a, t, e);
                    var s = new r.Group,
                        u = new r.Group;
                    s.add(o), s.add(n), s.add(u), l(o.shape.points, i, u, f, e, !0), f.setItemGraphicEl(e, s)
                }
            }).update(function(e, i) {
                var n = p.getItemGraphicEl(i),
                    o = n.childAt(0),
                    a = n.childAt(1),
                    s = n.childAt(2),
                    h = {
                        shape: {
                            points: f.getItemLayout(e)
                        }
                    };
                h.shape.points && (l(o.shape.points, h.shape.points, s, f, e, !1), r.updateProps(o, h, t), r.updateProps(a, h, t), f.setItemGraphicEl(e, n))
            }).remove(function(t) {
                c.remove(p.getItemGraphicEl(t))
            }).execute(), f.eachItemGraphicEl(function(t, e) {
                function i() {
                    l.attr("ignore", v)
                }

                function n() {
                    l.attr("ignore", m)
                }
                var a = f.getItemModel(e),
                    s = t.childAt(0),
                    l = t.childAt(1),
                    h = t.childAt(2),
                    u = f.getItemVisual(e, "color");
                c.add(t), s.useStyle(o.defaults(a.getModel("lineStyle.normal").getLineStyle(), {
                    fill: "none",
                    stroke: u
                })), s.hoverStyle = a.getModel("lineStyle.emphasis").getLineStyle();
                var p = a.getModel("areaStyle.normal"),
                    d = a.getModel("areaStyle.emphasis"),
                    m = p.isEmpty() && p.parentModel.isEmpty(),
                    v = d.isEmpty() && d.parentModel.isEmpty();
                v = v && m, l.ignore = m, l.useStyle(o.defaults(p.getAreaStyle(), {
                    fill: u,
                    opacity: .7
                })), l.hoverStyle = d.getAreaStyle();
                var g = a.getModel("itemStyle.normal").getItemStyle(["color"]),
                    _ = a.getModel("itemStyle.emphasis").getItemStyle(),
                    y = a.getModel("label.normal"),
                    x = a.getModel("label.emphasis");
                h.eachChild(function(t) {
                    t.setStyle(g), t.hoverStyle = o.clone(_), r.setLabelStyle(t.style, t.hoverStyle, y, x, {
                        labelFetcher: f.hostModel,
                        labelDataIndex: e,
                        labelDimIndex: t.__dimIdx,
                        defaultText: f.get(f.dimensions[t.__dimIdx], e),
                        autoColor: u,
                        isRectText: !0
                    })
                }), t.off("mouseover").off("mouseout").off("normal").off("emphasis"), t.on("emphasis", i).on("mouseover", i).on("normal", n).on("mouseout", n), r.setHoverStyle(t)
            }), this._data = f
        },
        remove: function() {
            this.group.removeAll(), this._data = null
        },
        dispose: function() {}
    })
}, function(t, e) {
    t.exports = function(t, e) {
        var i = {};
        e.eachRawSeriesByType(t, function(t) {
            var n = t.getRawData(),
                r = {};
            if (!e.isSeriesFiltered(t)) {
                var o = t.getData();
                o.each(function(t) {
                    var e = o.getRawIndex(t);
                    r[e] = t
                }), n.each(function(e) {
                    var a = r[e],
                        s = null != a && o.getItemVisual(a, "color", !0);
                    if (s) n.setItemVisual(e, "color", s);
                    else {
                        var l = n.getItemModel(e),
                            h = l.get("itemStyle.normal.color") || t.getColorFromPalette(n.getName(e), i);
                        n.setItemVisual(e, "color", h), null != a && o.setItemVisual(a, "color", h)
                    }
                })
            }
        })
    }
}, function(t, e) {
    t.exports = function(t, e, i, n, r) {
        n.eachRawSeriesByType(t, function(t) {
            var r = t.getData(),
                o = t.get("symbol") || e,
                a = t.get("symbolSize");
            r.setVisual({
                legendSymbol: i || o,
                symbol: o,
                symbolSize: a
            }), n.isSeriesFiltered(t) || ("function" == typeof a && r.each(function(e) {
                var i = t.getRawValue(e),
                    n = t.getDataParams(e);
                r.setItemVisual(e, "symbolSize", a(i, n))
            }), r.each(function(t) {
                var e = r.getItemModel(t),
                    i = e.getShallow("symbol", !0),
                    n = e.getShallow("symbolSize", !0);
                null != i && r.setItemVisual(t, "symbol", i), null != n && r.setItemVisual(t, "symbolSize", n)
            }))
        })
    }
}, function(t, e) {
    t.exports = function(t) {
        t.eachSeriesByType("radar", function(t) {
            function e(t, e) {
                n[e] = n[e] || [], n[e][o] = r.dataToPoint(t, o)
            }
            var i = t.getData(),
                n = [],
                r = t.coordinateSystem;
            if (r) {
                for (var o = 0; o < r.getIndicatorAxes().length; o++) {
                    var a = i.dimensions[o];
                    i.each(a, e)
                }
                i.each(function(t) {
                    n[t][0] && n[t].push(n[t][0].slice()), i.setItemLayout(t, n[t])
                })
            }
        })
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var i = e.findComponents({
            mainType: "legend"
        });
        i && i.length && e.eachSeriesByType(t, function(t) {
            var e = t.getData();
            e.filterSelf(function(t) {
                for (var n = e.getName(t), r = 0; r < i.length; r++)
                    if (!i[r].isSelected(n)) return !1;
                return !0
            }, this)
        }, this)
    }
}, function(t, e, i) {
    var n = i(3);
    t.exports = function(t) {
        var e = t.polar;
        if (e) {
            n.isArray(e) || (e = [e]);
            var i = [];
            n.each(e, function(e, r) {
                e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], n.isArray(t.radar) || (t.radar = [t.radar]), t.radar.push(e)) : i.push(e)
            }), t.polar = i
        }
        n.each(t.series, function(t) {
            "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex)
        })
    }
}]);