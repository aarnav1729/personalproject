var bd = Object.defineProperty
  , cd = (a,b)=>()=>(b || (b = {
    exports: {}
},
a(b.exports, b)),
b.exports)
  , Rd = a=>bd(a, "__esModule", {
    value: !0
})
  , Sd = (a,b)=>{
    Rd(a);
    for (var c in b)
        bd(a, c, {
            get: b[c],
            enumerable: !0
        })
}
;
var db = cd((a,b)=>{
    (function(c) {
        if (typeof a === "object" && typeof b !== "undefined")
            b.exports = c();
        else if (typeof define === "function" && define.amd)
            define([], c);
        else {
            var f;
            typeof window !== "undefined" ? f = window : typeof global !== "undefined" ? f = global : typeof self !== "undefined" ? f = self : f = this,
            f.iosInnerHeight = c()
        }
    }
    )(function() {
        var c, f, e;
        return function() {
            function h(i, n, m) {
                function q(r, t) {
                    if (!n[r]) {
                        if (!i[r]) {
                            var w = !1;
                            if (!t && w)
                                return w(r, !0);
                            if (s)
                                return s(r, !0);
                            var y = new Error("Cannot find module '" + r + "'");
                            throw y.code = "MODULE_NOT_FOUND",
                            y
                        }
                        var x = n[r] = {
                            exports: {}
                        };
                        i[r][0].call(x.exports, function(v) {
                            var H = i[r][1][v];
                            return q(H || v)
                        }, x, x.exports, h, i, n, m)
                    }
                    return n[r].exports
                }
                for (var s = !1, u = 0; u < m.length; u++)
                    q(m[u]);
                return q
            }
            return h
        }()({
            1: [function(h, i, n) {
                "use strict";
                i.exports = function() {
                    if (typeof window === "undefined" || typeof navigator === "undefined")
                        return function() {
                            return 0
                        }
                        ;
                    if (!navigator.userAgent.match(/iphone|ipod|ipad/i))
                        return function() {
                            return window.innerHeight
                        }
                        ;
                    var m = Math.abs(window.orientation)
                      , q = {
                        w: 0,
                        h: 0
                    }
                      , s = function() {
                        var u = document.createElement("div");
                        u.style.position = "fixed",
                        u.style.height = "100vh",
                        u.style.width = 0,
                        u.style.top = 0,
                        document.documentElement.appendChild(u),
                        q.w = m === 90 ? u.offsetHeight : window.innerWidth,
                        q.h = m === 90 ? window.innerWidth : u.offsetHeight,
                        document.documentElement.removeChild(u),
                        u = null
                    };
                    return s(),
                    function() {
                        return Math.abs(window.orientation) !== 90 ? q.h : q.w
                    }
                }()
            }
            , {}]
        }, {}, [1])(1)
    })
}
);
var cb = cd(ge=>{
    Sd(ge, {
        GUI: ()=>sd,
        color: ()=>od,
        controllers: ()=>pd,
        default: ()=>fe,
        dom: ()=>qd,
        gui: ()=>rd
    });
    function a(l) {
        if (!l)
            return;
        if (typeof window === "undefined")
            return;
        var d = document.createElement("style");
        return d.setAttribute("type", "text/css"),
        d.innerHTML = l,
        document.head.appendChild(d),
        l
    }
    function b(l, d) {
        var g = l.__state.conversionName.toString()
          , j = Math.round(l.r)
          , k = Math.round(l.g)
          , o = Math.round(l.b)
          , z = l.a
          , A = Math.round(l.h)
          , B = l.s.toFixed(1)
          , I = l.v.toFixed(1);
        if (d || g === "THREE_CHAR_HEX" || g === "SIX_CHAR_HEX") {
            for (var O = l.hex.toString(16); O.length < 6; )
                O = "0" + O;
            return "#" + O
        } else {
            if (g === "CSS_RGB")
                return "rgb(" + j + "," + k + "," + o + ")";
            {
                if (g === "CSS_RGBA")
                    return "rgba(" + j + "," + k + "," + o + "," + z + ")";
                {
                    if (g === "HEX")
                        return "0x" + l.hex.toString(16);
                    {
                        if (g === "RGB_ARRAY")
                            return "[" + j + "," + k + "," + o + "]";
                        {
                            if (g === "RGBA_ARRAY")
                                return "[" + j + "," + k + "," + o + "," + z + "]";
                            {
                                if (g === "RGB_OBJ")
                                    return "{r:" + j + ",g:" + k + ",b:" + o + "}";
                                {
                                    if (g === "RGBA_OBJ")
                                        return "{r:" + j + ",g:" + k + ",b:" + o + ",a:" + z + "}";
                                    {
                                        if (g === "HSV_OBJ")
                                            return "{h:" + A + ",s:" + B + ",v:" + I + "}";
                                        if (g === "HSVA_OBJ")
                                            return "{h:" + A + ",s:" + B + ",v:" + I + ",a:" + z + "}"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return "unknown format"
    }
    var c = Array.prototype.forEach
      , f = Array.prototype.slice
      , e = {
        BREAK: {},
        extend: function l(d) {
            return this.each(f.call(arguments, 1), function(g) {
                var j = this.isObject(g) ? Object.keys(g) : [];
                j.forEach(function(k) {
                    this.isUndefined(g[k]) || (d[k] = g[k])
                }
                .bind(this))
            }, this),
            d
        },
        defaults: function l(d) {
            return this.each(f.call(arguments, 1), function(g) {
                var j = this.isObject(g) ? Object.keys(g) : [];
                j.forEach(function(k) {
                    this.isUndefined(d[k]) && (d[k] = g[k])
                }
                .bind(this))
            }, this),
            d
        },
        compose: function l() {
            var d = f.call(arguments);
            return function() {
                for (var g = f.call(arguments), j = d.length - 1; j >= 0; j--)
                    g = [d[j].apply(this, g)];
                return g[0]
            }
        },
        each: function l(d, g, j) {
            if (!d)
                return;
            if (c && d.forEach && d.forEach === c)
                d.forEach(g, j);
            else if (d.length === d.length + 0) {
                var k = void 0
                  , o = void 0;
                for (k = 0,
                o = d.length; k < o; k++)
                    if (k in d && g.call(j, d[k], k) === this.BREAK)
                        return
            } else
                for (var z in d)
                    if (g.call(j, d[z], z) === this.BREAK)
                        return
        },
        defer: function l(d) {
            setTimeout(d, 0)
        },
        debounce: function l(d, g, j) {
            var k = void 0;
            return function() {
                var o = this
                  , z = arguments;
                function A() {
                    k = null,
                    j || d.apply(o, z)
                }
                var B = j || !k;
                clearTimeout(k),
                k = setTimeout(A, g),
                B && d.apply(o, z)
            }
        },
        toArray: function l(d) {
            return d.toArray ? d.toArray() : f.call(d)
        },
        isUndefined: function l(d) {
            return d === void 0
        },
        isNull: function l(d) {
            return d === null
        },
        isNaN: function(l) {
            function d(g) {
                return l.apply(this, arguments)
            }
            return d.toString = function() {
                return l.toString()
            }
            ,
            d
        }(function(l) {
            return isNaN(l)
        }),
        isArray: Array.isArray || function(l) {
            return l.constructor === Array
        }
        ,
        isObject: function l(d) {
            return d === Object(d)
        },
        isNumber: function l(d) {
            return d === d + 0
        },
        isString: function l(d) {
            return d === d + ""
        },
        isBoolean: function l(d) {
            return d === !1 || d === !0
        },
        isFunction: function l(d) {
            return d instanceof Function
        }
    }
      , h = [{
        litmus: e.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function l(d) {
                    var g = d.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    return g === null ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + g[1].toString() + g[1].toString() + g[2].toString() + g[2].toString() + g[3].toString() + g[3].toString(), 0)
                    }
                },
                write: b
            },
            SIX_CHAR_HEX: {
                read: function l(d) {
                    var g = d.match(/^#([A-F0-9]{6})$/i);
                    return g === null ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + g[1].toString(), 0)
                    }
                },
                write: b
            },
            CSS_RGB: {
                read: function l(d) {
                    var g = d.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                    return g === null ? !1 : {
                        space: "RGB",
                        r: parseFloat(g[1]),
                        g: parseFloat(g[2]),
                        b: parseFloat(g[3])
                    }
                },
                write: b
            },
            CSS_RGBA: {
                read: function l(d) {
                    var g = d.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                    return g === null ? !1 : {
                        space: "RGB",
                        r: parseFloat(g[1]),
                        g: parseFloat(g[2]),
                        b: parseFloat(g[3]),
                        a: parseFloat(g[4])
                    }
                },
                write: b
            }
        }
    }, {
        litmus: e.isNumber,
        conversions: {
            HEX: {
                read: function l(d) {
                    return {
                        space: "HEX",
                        hex: d,
                        conversionName: "HEX"
                    }
                },
                write: function l(d) {
                    return d.hex
                }
            }
        }
    }, {
        litmus: e.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function l(d) {
                    return d.length !== 3 ? !1 : {
                        space: "RGB",
                        r: d[0],
                        g: d[1],
                        b: d[2]
                    }
                },
                write: function l(d) {
                    return [d.r, d.g, d.b]
                }
            },
            RGBA_ARRAY: {
                read: function l(d) {
                    return d.length !== 4 ? !1 : {
                        space: "RGB",
                        r: d[0],
                        g: d[1],
                        b: d[2],
                        a: d[3]
                    }
                },
                write: function l(d) {
                    return [d.r, d.g, d.b, d.a]
                }
            }
        }
    }, {
        litmus: e.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function l(d) {
                    return e.isNumber(d.r) && e.isNumber(d.g) && e.isNumber(d.b) && e.isNumber(d.a) ? {
                        space: "RGB",
                        r: d.r,
                        g: d.g,
                        b: d.b,
                        a: d.a
                    } : !1
                },
                write: function l(d) {
                    return {
                        r: d.r,
                        g: d.g,
                        b: d.b,
                        a: d.a
                    }
                }
            },
            RGB_OBJ: {
                read: function l(d) {
                    return e.isNumber(d.r) && e.isNumber(d.g) && e.isNumber(d.b) ? {
                        space: "RGB",
                        r: d.r,
                        g: d.g,
                        b: d.b
                    } : !1
                },
                write: function l(d) {
                    return {
                        r: d.r,
                        g: d.g,
                        b: d.b
                    }
                }
            },
            HSVA_OBJ: {
                read: function l(d) {
                    return e.isNumber(d.h) && e.isNumber(d.s) && e.isNumber(d.v) && e.isNumber(d.a) ? {
                        space: "HSV",
                        h: d.h,
                        s: d.s,
                        v: d.v,
                        a: d.a
                    } : !1
                },
                write: function l(d) {
                    return {
                        h: d.h,
                        s: d.s,
                        v: d.v,
                        a: d.a
                    }
                }
            },
            HSV_OBJ: {
                read: function l(d) {
                    return e.isNumber(d.h) && e.isNumber(d.s) && e.isNumber(d.v) ? {
                        space: "HSV",
                        h: d.h,
                        s: d.s,
                        v: d.v
                    } : !1
                },
                write: function l(d) {
                    return {
                        h: d.h,
                        s: d.s,
                        v: d.v
                    }
                }
            }
        }
    }]
      , i = void 0
      , n = void 0
      , m = function l() {
        n = !1;
        var d = arguments.length > 1 ? e.toArray(arguments) : arguments[0];
        return e.each(h, function(g) {
            if (g.litmus(d))
                return e.each(g.conversions, function(j, k) {
                    i = j.read(d);
                    if (n === !1 && i !== !1)
                        return n = i,
                        i.conversionName = k,
                        i.conversion = j,
                        e.BREAK
                }),
                e.BREAK
        }),
        n
    }
      , q = void 0
      , s = {
        hsv_to_rgb: function l(d, g, j) {
            var k = Math.floor(d / 60) % 6
              , o = d / 60 - Math.floor(d / 60)
              , z = j * (1 - g)
              , A = j * (1 - o * g)
              , B = j * (1 - (1 - o) * g)
              , I = [[j, B, z], [A, j, z], [z, j, B], [z, A, j], [B, z, j], [j, z, A]][k];
            return {
                r: I[0] * 255,
                g: I[1] * 255,
                b: I[2] * 255
            }
        },
        rgb_to_hsv: function l(d, g, j) {
            var k = Math.min(d, g, j)
              , o = Math.max(d, g, j)
              , z = o - k
              , A = void 0
              , B = void 0;
            if (o !== 0)
                B = z / o;
            else
                return {
                    h: NaN,
                    s: 0,
                    v: 0
                };
            return d === o ? A = (g - j) / z : g === o ? A = 2 + (j - d) / z : A = 4 + (d - g) / z,
            A /= 6,
            A < 0 && (A += 1),
            {
                h: A * 360,
                s: B,
                v: o / 255
            }
        },
        rgb_to_hex: function l(d, g, j) {
            var k = this.hex_with_component(0, 2, d);
            return k = this.hex_with_component(k, 1, g),
            k = this.hex_with_component(k, 0, j),
            k
        },
        component_from_hex: function l(d, g) {
            return d >> g * 8 & 255
        },
        hex_with_component: function l(d, g, j) {
            return j << (q = g * 8) | d & ~(255 << q)
        }
    }
      , u = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(l) {
        return typeof l
    }
    : function(l) {
        return l && typeof Symbol === "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l
    }
      , r = function(l, d) {
        if (!(l instanceof d))
            throw new TypeError("Cannot call a class as a function")
    }
      , t = function() {
        function l(d, g) {
            for (var j = 0; j < g.length; j++) {
                var k = g[j];
                k.enumerable = k.enumerable || !1,
                k.configurable = !0,
                "value"in k && (k.writable = !0),
                Object.defineProperty(d, k.key, k)
            }
        }
        return function(d, g, j) {
            return g && l(d.prototype, g),
            j && l(d, j),
            d
        }
    }()
      , w = function l(d, g, j) {
        d === null && (d = Function.prototype);
        var k = Object.getOwnPropertyDescriptor(d, g);
        if (k === void 0) {
            var o = Object.getPrototypeOf(d);
            return o === null ? void 0 : l(o, g, j)
        } else {
            if ("value"in k)
                return k.value;
            {
                var z = k.get;
                return z === void 0 ? void 0 : z.call(j)
            }
        }
    }
      , y = function(l, d) {
        if (typeof d !== "function" && d !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof d);
        l.prototype = Object.create(d && d.prototype, {
            constructor: {
                value: l,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        d && (Object.setPrototypeOf ? Object.setPrototypeOf(l, d) : l.__proto__ = d)
    }
      , x = function(l, d) {
        if (!l)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return d && (typeof d === "object" || typeof d === "function") ? d : l
    }
      , v = function() {
        function l() {
            r(this, l),
            this.__state = m.apply(this, arguments);
            if (this.__state === !1)
                throw new Error("Failed to interpret color arguments");
            this.__state.a = this.__state.a || 1
        }
        return t(l, [{
            key: "toString",
            value: function d() {
                return b(this)
            }
        }, {
            key: "toHexString",
            value: function d() {
                return b(this, !0)
            }
        }, {
            key: "toOriginal",
            value: function d() {
                return this.__state.conversion.write(this)
            }
        }]),
        l
    }();
    function H(l, d, g) {
        Object.defineProperty(l, d, {
            get: function j() {
                return this.__state.space === "RGB" ? this.__state[d] : (v.recalculateRGB(this, d, g),
                this.__state[d])
            },
            set: function j(k) {
                this.__state.space !== "RGB" && (v.recalculateRGB(this, d, g),
                this.__state.space = "RGB"),
                this.__state[d] = k
            }
        })
    }
    function D(l, d) {
        Object.defineProperty(l, d, {
            get: function g() {
                return this.__state.space === "HSV" ? this.__state[d] : (v.recalculateHSV(this),
                this.__state[d])
            },
            set: function g(j) {
                this.__state.space !== "HSV" && (v.recalculateHSV(this),
                this.__state.space = "HSV"),
                this.__state[d] = j
            }
        })
    }
    v.recalculateRGB = function(l, d, g) {
        if (l.__state.space === "HEX")
            l.__state[d] = s.component_from_hex(l.__state.hex, g);
        else if (l.__state.space === "HSV")
            e.extend(l.__state, s.hsv_to_rgb(l.__state.h, l.__state.s, l.__state.v));
        else
            throw new Error("Corrupted color state")
    }
    ;
    v.recalculateHSV = function(l) {
        var d = s.rgb_to_hsv(l.r, l.g, l.b);
        e.extend(l.__state, {
            s: d.s,
            v: d.v
        }),
        e.isNaN(d.h) ? e.isUndefined(l.__state.h) && (l.__state.h = 0) : l.__state.h = d.h
    }
    ;
    v.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
    H(v.prototype, "r", 2);
    H(v.prototype, "g", 1);
    H(v.prototype, "b", 0);
    D(v.prototype, "h");
    D(v.prototype, "s");
    D(v.prototype, "v");
    Object.defineProperty(v.prototype, "a", {
        get: function l() {
            return this.__state.a
        },
        set: function l(d) {
            this.__state.a = d
        }
    });
    Object.defineProperty(v.prototype, "hex", {
        get: function l() {
            return this.__state.space !== "HEX" && (this.__state.hex = s.rgb_to_hex(this.r, this.g, this.b),
            this.__state.space = "HEX"),
            this.__state.hex
        },
        set: function l(d) {
            this.__state.space = "HEX",
            this.__state.hex = d
        }
    });
    var C = function() {
        function l(d, g) {
            r(this, l),
            this.initialValue = d[g],
            this.domElement = document.createElement("div"),
            this.object = d,
            this.property = g,
            this.__onChange = void 0,
            this.__onFinishChange = void 0
        }
        return t(l, [{
            key: "onChange",
            value: function d(g) {
                return this.__onChange = g,
                this
            }
        }, {
            key: "onFinishChange",
            value: function d(g) {
                return this.__onFinishChange = g,
                this
            }
        }, {
            key: "setValue",
            value: function d(g) {
                return this.object[this.property] = g,
                this.__onChange && this.__onChange.call(this, g),
                this.updateDisplay(),
                this
            }
        }, {
            key: "getValue",
            value: function d() {
                return this.object[this.property]
            }
        }, {
            key: "updateDisplay",
            value: function d() {
                return this
            }
        }, {
            key: "isModified",
            value: function d() {
                return this.initialValue !== this.getValue()
            }
        }]),
        l
    }()
      , G = {
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    }
      , E = {};
    e.each(G, function(l, d) {
        e.each(l, function(g) {
            E[g] = d
        })
    });
    var T = /(\d+(\.\d+)?)px/;
    function K(l) {
        if (l === "0" || e.isUndefined(l))
            return 0;
        var d = l.match(T);
        return e.isNull(d) ? 0 : parseFloat(d[1])
    }
    var p = {
        makeSelectable: function l(d, g) {
            if (d === void 0 || d.style === void 0)
                return;
            d.onselectstart = g ? function() {
                return !1
            }
            : function() {}
            ,
            d.style.MozUserSelect = g ? "auto" : "none",
            d.style.KhtmlUserSelect = g ? "auto" : "none",
            d.unselectable = g ? "on" : "off"
        },
        makeFullscreen: function l(d, g, j) {
            var k = j
              , o = g;
            e.isUndefined(o) && (o = !0),
            e.isUndefined(k) && (k = !0),
            d.style.position = "absolute",
            o && (d.style.left = 0,
            d.style.right = 0),
            k && (d.style.top = 0,
            d.style.bottom = 0)
        },
        fakeEvent: function l(d, g, j, k) {
            var o = j || {}
              , z = E[g];
            if (!z)
                throw new Error("Event type " + g + " not supported.");
            var A = document.createEvent(z);
            switch (z) {
            case "MouseEvents":
                {
                    var B = o.x || o.clientX || 0
                      , I = o.y || o.clientY || 0;
                    A.initMouseEvent(g, o.bubbles || !1, o.cancelable || !0, window, o.clickCount || 1, 0, 0, B, I, !1, !1, !1, !1, 0, null);
                    break
                }
            case "KeyboardEvents":
                {
                    var O = A.initKeyboardEvent || A.initKeyEvent;
                    e.defaults(o, {
                        cancelable: !0,
                        ctrlKey: !1,
                        altKey: !1,
                        shiftKey: !1,
                        metaKey: !1,
                        keyCode: void 0,
                        charCode: void 0
                    }),
                    O(g, o.bubbles || !1, o.cancelable, window, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.keyCode, o.charCode);
                    break
                }
            default:
                {
                    A.initEvent(g, o.bubbles || !1, o.cancelable || !0);
                    break
                }
            }
            e.defaults(A, k),
            d.dispatchEvent(A)
        },
        bind: function l(d, g, j, k) {
            var o = k || !1;
            return d.addEventListener ? d.addEventListener(g, j, o) : d.attachEvent && d.attachEvent("on" + g, j),
            p
        },
        unbind: function l(d, g, j, k) {
            var o = k || !1;
            return d.removeEventListener ? d.removeEventListener(g, j, o) : d.detachEvent && d.detachEvent("on" + g, j),
            p
        },
        addClass: function l(d, g) {
            if (d.className === void 0)
                d.className = g;
            else if (d.className !== g) {
                var j = d.className.split(/ +/);
                j.indexOf(g) === -1 && (j.push(g),
                d.className = j.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
            }
            return p
        },
        removeClass: function l(d, g) {
            if (g)
                if (d.className === g)
                    d.removeAttribute("class");
                else {
                    var j = d.className.split(/ +/)
                      , k = j.indexOf(g);
                    k !== -1 && (j.splice(k, 1),
                    d.className = j.join(" "))
                }
            else
                d.className = void 0;
            return p
        },
        hasClass: function l(d, g) {
            return new RegExp("(?:^|\\s+)" + g + "(?:\\s+|$)").test(d.className) || !1
        },
        getWidth: function l(d) {
            var g = getComputedStyle(d);
            return K(g["border-left-width"]) + K(g["border-right-width"]) + K(g["padding-left"]) + K(g["padding-right"]) + K(g.width)
        },
        getHeight: function l(d) {
            var g = getComputedStyle(d);
            return K(g["border-top-width"]) + K(g["border-bottom-width"]) + K(g["padding-top"]) + K(g["padding-bottom"]) + K(g.height)
        },
        getOffset: function l(d) {
            var g = d
              , j = {
                left: 0,
                top: 0
            };
            if (g.offsetParent)
                do
                    j.left += g.offsetLeft,
                    j.top += g.offsetTop,
                    g = g.offsetParent;
                while (g);
            return j
        },
        isActive: function l(d) {
            return d === document.activeElement && (d.type || d.href)
        }
    }
      , P = function(l) {
        y(d, l);
        function d(g, j) {
            r(this, d);
            var k = x(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, g, j))
              , o = k;
            k.__prev = k.getValue(),
            k.__checkbox = document.createElement("input"),
            k.__checkbox.setAttribute("type", "checkbox");
            function z() {
                o.setValue(!o.__prev)
            }
            return p.bind(k.__checkbox, "change", z, !1),
            k.domElement.appendChild(k.__checkbox),
            k.updateDisplay(),
            k
        }
        return t(d, [{
            key: "setValue",
            value: function g(j) {
                var k = w(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "setValue", this).call(this, j);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()),
                this.__prev = this.getValue(),
                k
            }
        }, {
            key: "updateDisplay",
            value: function g() {
                return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"),
                this.__checkbox.checked = !0,
                this.__prev = !0) : (this.__checkbox.checked = !1,
                this.__prev = !1),
                w(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "updateDisplay", this).call(this)
            }
        }]),
        d
    }(C)
      , R = function(l) {
        y(d, l);
        function d(g, j, k) {
            r(this, d);
            var o = x(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, g, j))
              , z = k
              , A = o;
            o.__select = document.createElement("select");
            if (e.isArray(z)) {
                var B = {};
                e.each(z, function(I) {
                    B[I] = I
                }),
                z = B
            }
            return e.each(z, function(I, O) {
                var L = document.createElement("option");
                L.innerHTML = O,
                L.setAttribute("value", I),
                A.__select.appendChild(L)
            }),
            o.updateDisplay(),
            p.bind(o.__select, "change", function() {
                var I = this.options[this.selectedIndex].value;
                A.setValue(I)
            }),
            o.domElement.appendChild(o.__select),
            o
        }
        return t(d, [{
            key: "setValue",
            value: function g(j) {
                var k = w(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "setValue", this).call(this, j);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()),
                k
            }
        }, {
            key: "updateDisplay",
            value: function g() {
                return p.isActive(this.__select) ? this : (this.__select.value = this.getValue(),
                w(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "updateDisplay", this).call(this))
            }
        }]),
        d
    }(C)
      , Q = function(l) {
        y(d, l);
        function d(g, j) {
            r(this, d);
            var k = x(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, g, j))
              , o = k;
            function z() {
                o.setValue(o.__input.value)
            }
            function A() {
                o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
            }
            return k.__input = document.createElement("input"),
            k.__input.setAttribute("type", "text"),
            p.bind(k.__input, "keyup", z),
            p.bind(k.__input, "change", z),
            p.bind(k.__input, "blur", A),
            p.bind(k.__input, "keydown", function(B) {
                B.keyCode === 13 && this.blur()
            }),
            k.updateDisplay(),
            k.domElement.appendChild(k.__input),
            k
        }
        return t(d, [{
            key: "updateDisplay",
            value: function g() {
                return p.isActive(this.__input) || (this.__input.value = this.getValue()),
                w(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "updateDisplay", this).call(this)
            }
        }]),
        d
    }(C);
    function S(l) {
        var d = l.toString();
        return d.indexOf(".") > -1 ? d.length - d.indexOf(".") - 1 : 0
    }
    var F = function(l) {
        y(d, l);
        function d(g, j, k) {
            r(this, d);
            var o = x(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, g, j))
              , z = k || {};
            return o.__min = z.min,
            o.__max = z.max,
            o.__step = z.step,
            e.isUndefined(o.__step) ? o.initialValue === 0 ? o.__impliedStep = 1 : o.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(o.initialValue)) / Math.LN10)) / 10 : o.__impliedStep = o.__step,
            o.__precision = S(o.__impliedStep),
            o
        }
        return t(d, [{
            key: "setValue",
            value: function g(j) {
                var k = j;
                return this.__min !== void 0 && k < this.__min ? k = this.__min : this.__max !== void 0 && k > this.__max && (k = this.__max),
                this.__step !== void 0 && k % this.__step !== 0 && (k = Math.round(k / this.__step) * this.__step),
                w(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "setValue", this).call(this, k)
            }
        }, {
            key: "min",
            value: function g(j) {
                return this.__min = j,
                this
            }
        }, {
            key: "max",
            value: function g(j) {
                return this.__max = j,
                this
            }
        }, {
            key: "step",
            value: function g(j) {
                return this.__step = j,
                this.__impliedStep = j,
                this.__precision = S(j),
                this
            }
        }]),
        d
    }(C);
    function _(l, d) {
        var g = Math.pow(10, d);
        return Math.round(l * g) / g
    }
    var ga = function(l) {
        y(d, l);
        function d(g, j, k) {
            r(this, d);
            var o = x(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, g, j, k));
            o.__truncationSuspended = !1;
            var z = o
              , A = void 0;
            function B() {
                var U = parseFloat(z.__input.value);
                e.isNaN(U) || z.setValue(U)
            }
            function I() {
                z.__onFinishChange && z.__onFinishChange.call(z, z.getValue())
            }
            function O() {
                I()
            }
            function L(U) {
                var J = A - U.clientY;
                z.setValue(z.getValue() + J * z.__impliedStep),
                A = U.clientY
            }
            function N() {
                p.unbind(window, "mousemove", L),
                p.unbind(window, "mouseup", N),
                I()
            }
            function X(U) {
                p.bind(window, "mousemove", L),
                p.bind(window, "mouseup", N),
                A = U.clientY
            }
            return o.__input = document.createElement("input"),
            o.__input.setAttribute("type", "text"),
            p.bind(o.__input, "change", B),
            p.bind(o.__input, "blur", O),
            p.bind(o.__input, "mousedown", X),
            p.bind(o.__input, "keydown", function(U) {
                U.keyCode === 13 && (z.__truncationSuspended = !0,
                this.blur(),
                z.__truncationSuspended = !1,
                I())
            }),
            o.updateDisplay(),
            o.domElement.appendChild(o.__input),
            o
        }
        return t(d, [{
            key: "updateDisplay",
            value: function g() {
                return this.__input.value = this.__truncationSuspended ? this.getValue() : _(this.getValue(), this.__precision),
                w(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "updateDisplay", this).call(this)
            }
        }]),
        d
    }(F);
    function dd(l, d, g, j, k) {
        return j + (k - j) * ((l - d) / (g - d))
    }
    var ta = function(l) {
        y(d, l);
        function d(g, j, k, o, z) {
            r(this, d);
            var A = x(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, g, j, {
                min: k,
                max: o,
                step: z
            }))
              , B = A;
            A.__background = document.createElement("div"),
            A.__foreground = document.createElement("div"),
            p.bind(A.__background, "mousedown", I),
            p.bind(A.__background, "touchstart", N),
            p.addClass(A.__background, "slider"),
            p.addClass(A.__foreground, "slider-fg");
            function I(J) {
                document.activeElement.blur(),
                p.bind(window, "mousemove", O),
                p.bind(window, "mouseup", L),
                O(J)
            }
            function O(J) {
                J.preventDefault();
                var W = B.__background.getBoundingClientRect();
                return B.setValue(dd(J.clientX, W.left, W.right, B.__min, B.__max)),
                !1
            }
            function L() {
                p.unbind(window, "mousemove", O),
                p.unbind(window, "mouseup", L),
                B.__onFinishChange && B.__onFinishChange.call(B, B.getValue())
            }
            function N(J) {
                if (J.touches.length !== 1)
                    return;
                p.bind(window, "touchmove", X),
                p.bind(window, "touchend", U),
                X(J)
            }
            function X(J) {
                var W = J.touches[0].clientX
                  , $ = B.__background.getBoundingClientRect();
                B.setValue(dd(W, $.left, $.right, B.__min, B.__max))
            }
            function U() {
                p.unbind(window, "touchmove", X),
                p.unbind(window, "touchend", U),
                B.__onFinishChange && B.__onFinishChange.call(B, B.getValue())
            }
            return A.updateDisplay(),
            A.__background.appendChild(A.__foreground),
            A.domElement.appendChild(A.__background),
            A
        }
        return t(d, [{
            key: "updateDisplay",
            value: function g() {
                var j = (this.getValue() - this.__min) / (this.__max - this.__min);
                return this.__foreground.style.width = j * 100 + "%",
                w(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "updateDisplay", this).call(this)
            }
        }]),
        d
    }(F)
      , Xa = function(l) {
        y(d, l);
        function d(g, j, k) {
            r(this, d);
            var o = x(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, g, j))
              , z = o;
            return o.__button = document.createElement("div"),
            o.__button.innerHTML = k === void 0 ? "Fire" : k,
            p.bind(o.__button, "click", function(A) {
                return A.preventDefault(),
                z.fire(),
                !1
            }),
            p.addClass(o.__button, "button"),
            o.domElement.appendChild(o.__button),
            o
        }
        return t(d, [{
            key: "fire",
            value: function g() {
                this.__onChange && this.__onChange.call(this),
                this.getValue().call(this.object),
                this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
            }
        }]),
        d
    }(C)
      , ua = function(l) {
        y(d, l);
        function d(g, j) {
            r(this, d);
            var k = x(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, g, j));
            k.__color = new v(k.getValue()),
            k.__temp = new v(0);
            var o = k;
            k.domElement = document.createElement("div"),
            p.makeSelectable(k.domElement, !1),
            k.__selector = document.createElement("div"),
            k.__selector.className = "selector",
            k.__saturation_field = document.createElement("div"),
            k.__saturation_field.className = "saturation-field",
            k.__field_knob = document.createElement("div"),
            k.__field_knob.className = "field-knob",
            k.__field_knob_border = "2px solid ",
            k.__hue_knob = document.createElement("div"),
            k.__hue_knob.className = "hue-knob",
            k.__hue_field = document.createElement("div"),
            k.__hue_field.className = "hue-field",
            k.__input = document.createElement("input"),
            k.__input.type = "text",
            k.__input_textShadow = "0 1px 1px ",
            p.bind(k.__input, "keydown", function(J) {
                J.keyCode === 13 && L.call(this)
            }),
            p.bind(k.__input, "blur", L),
            p.bind(k.__selector, "mousedown", function() {
                p.addClass(this, "drag").bind(window, "mouseup", function() {
                    p.removeClass(o.__selector, "drag")
                })
            }),
            p.bind(k.__selector, "touchstart", function() {
                p.addClass(this, "drag").bind(window, "touchend", function() {
                    p.removeClass(o.__selector, "drag")
                })
            });
            var z = document.createElement("div");
            e.extend(k.__selector.style, {
                width: "122px",
                height: "102px",
                padding: "3px",
                backgroundColor: "#222",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
            }),
            e.extend(k.__field_knob.style, {
                position: "absolute",
                width: "12px",
                height: "12px",
                border: k.__field_knob_border + (k.__color.v < .5 ? "#fff" : "#000"),
                boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                borderRadius: "12px",
                zIndex: 1
            }),
            e.extend(k.__hue_knob.style, {
                position: "absolute",
                width: "15px",
                height: "2px",
                borderRight: "4px solid #fff",
                zIndex: 1
            }),
            e.extend(k.__saturation_field.style, {
                width: "100px",
                height: "100px",
                border: "1px solid #555",
                marginRight: "3px",
                display: "inline-block",
                cursor: "pointer"
            }),
            e.extend(z.style, {
                width: "100%",
                height: "100%",
                background: "none"
            }),
            ed(z, "top", "rgba(0,0,0,0)", "#000"),
            e.extend(k.__hue_field.style, {
                width: "15px",
                height: "100px",
                border: "1px solid #555",
                cursor: "ns-resize",
                position: "absolute",
                top: "3px",
                right: "3px"
            }),
            Ud(k.__hue_field),
            e.extend(k.__input.style, {
                outline: "none",
                textAlign: "center",
                color: "#fff",
                border: 0,
                fontWeight: "bold",
                textShadow: k.__input_textShadow + "rgba(0,0,0,0.7)"
            }),
            p.bind(k.__saturation_field, "mousedown", A),
            p.bind(k.__saturation_field, "touchstart", A),
            p.bind(k.__field_knob, "mousedown", A),
            p.bind(k.__field_knob, "touchstart", A),
            p.bind(k.__hue_field, "mousedown", B),
            p.bind(k.__hue_field, "touchstart", B);
            function A(J) {
                X(J),
                p.bind(window, "mousemove", X),
                p.bind(window, "touchmove", X),
                p.bind(window, "mouseup", I),
                p.bind(window, "touchend", I)
            }
            function B(J) {
                U(J),
                p.bind(window, "mousemove", U),
                p.bind(window, "touchmove", U),
                p.bind(window, "mouseup", O),
                p.bind(window, "touchend", O)
            }
            function I() {
                p.unbind(window, "mousemove", X),
                p.unbind(window, "touchmove", X),
                p.unbind(window, "mouseup", I),
                p.unbind(window, "touchend", I),
                N()
            }
            function O() {
                p.unbind(window, "mousemove", U),
                p.unbind(window, "touchmove", U),
                p.unbind(window, "mouseup", O),
                p.unbind(window, "touchend", O),
                N()
            }
            function L() {
                var J = m(this.value);
                J !== !1 ? (o.__color.__state = J,
                o.setValue(o.__color.toOriginal())) : this.value = o.__color.toString()
            }
            function N() {
                o.__onFinishChange && o.__onFinishChange.call(o, o.__color.toOriginal())
            }
            k.__saturation_field.appendChild(z),
            k.__selector.appendChild(k.__field_knob),
            k.__selector.appendChild(k.__saturation_field),
            k.__selector.appendChild(k.__hue_field),
            k.__hue_field.appendChild(k.__hue_knob),
            k.domElement.appendChild(k.__input),
            k.domElement.appendChild(k.__selector),
            k.updateDisplay();
            function X(J) {
                J.type.indexOf("touch") === -1 && J.preventDefault();
                var W = o.__saturation_field.getBoundingClientRect()
                  , $ = J.touches && J.touches[0] || J
                  , bb = $.clientX
                  , aa = $.clientY
                  , la = (bb - W.left) / (W.right - W.left)
                  , ma = 1 - (aa - W.top) / (W.bottom - W.top);
                return ma > 1 ? ma = 1 : ma < 0 && (ma = 0),
                la > 1 ? la = 1 : la < 0 && (la = 0),
                o.__color.v = ma,
                o.__color.s = la,
                o.setValue(o.__color.toOriginal()),
                !1
            }
            function U(J) {
                J.type.indexOf("touch") === -1 && J.preventDefault();
                var W = o.__hue_field.getBoundingClientRect()
                  , $ = J.touches && J.touches[0] || J
                  , bb = $.clientY
                  , aa = 1 - (bb - W.top) / (W.bottom - W.top);
                return aa > 1 ? aa = 1 : aa < 0 && (aa = 0),
                o.__color.h = aa * 360,
                o.setValue(o.__color.toOriginal()),
                !1
            }
            return k
        }
        return t(d, [{
            key: "updateDisplay",
            value: function g() {
                var j = m(this.getValue());
                if (j !== !1) {
                    var k = !1;
                    e.each(v.COMPONENTS, function(A) {
                        if (!e.isUndefined(j[A]) && !e.isUndefined(this.__color.__state[A]) && j[A] !== this.__color.__state[A])
                            return k = !0,
                            {}
                    }, this),
                    k && e.extend(this.__color.__state, j)
                }
                e.extend(this.__temp.__state, this.__color.__state),
                this.__temp.a = 1;
                var o = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0
                  , z = 255 - o;
                e.extend(this.__field_knob.style, {
                    marginLeft: 100 * this.__color.s - 7 + "px",
                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                    backgroundColor: this.__temp.toHexString(),
                    border: this.__field_knob_border + "rgb(" + o + "," + o + "," + o + ")"
                }),
                this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px",
                this.__temp.s = 1,
                this.__temp.v = 1,
                ed(this.__saturation_field, "left", "#fff", this.__temp.toHexString()),
                this.__input.value = this.__color.toString(),
                e.extend(this.__input.style, {
                    backgroundColor: this.__color.toHexString(),
                    color: "rgb(" + o + "," + o + "," + o + ")",
                    textShadow: this.__input_textShadow + "rgba(" + z + "," + z + "," + z + ",.7)"
                })
            }
        }]),
        d
    }(C)
      , Td = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    function ed(l, d, g, j) {
        l.style.background = "",
        e.each(Td, function(k) {
            l.style.cssText += "background: " + k + "linear-gradient(" + d + ", " + g + " 0%, " + j + " 100%); "
        })
    }
    function Ud(l) {
        l.style.background = "",
        l.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",
        l.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
        l.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
        l.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
        l.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }
    var Vd = {
        load: function l(d, g) {
            var j = g || document
              , k = j.createElement("link");
            k.type = "text/css",
            k.rel = "stylesheet",
            k.href = d,
            j.getElementsByTagName("head")[0].appendChild(k)
        },
        inject: function l(d, g) {
            var j = g || document
              , k = document.createElement("style");
            k.type = "text/css",
            k.innerHTML = d;
            var o = j.getElementsByTagName("head")[0];
            try {
                o.appendChild(k)
            } catch (z) {}
        }
    }
      , Wd = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`
      , Xd = function l(d, g) {
        var j = d[g];
        return e.isArray(arguments[2]) || e.isObject(arguments[2]) ? new R(d,g,arguments[2]) : e.isNumber(j) ? e.isNumber(arguments[2]) && e.isNumber(arguments[3]) ? e.isNumber(arguments[4]) ? new ta(d,g,arguments[2],arguments[3],arguments[4]) : new ta(d,g,arguments[2],arguments[3]) : e.isNumber(arguments[4]) ? new ga(d,g,{
            min: arguments[2],
            max: arguments[3],
            step: arguments[4]
        }) : new ga(d,g,{
            min: arguments[2],
            max: arguments[3]
        }) : e.isString(j) ? new Q(d,g) : e.isFunction(j) ? new Xa(d,g,"") : e.isBoolean(j) ? new P(d,g) : null
    };
    function Yd(l) {
        setTimeout(l, 1e3 / 60)
    }
    var Zd = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || Yd
      , _d = function() {
        function l() {
            r(this, l),
            this.backgroundElement = document.createElement("div"),
            e.extend(this.backgroundElement.style, {
                backgroundColor: "rgba(0,0,0,0.8)",
                top: 0,
                left: 0,
                display: "none",
                zIndex: "1000",
                opacity: 0,
                WebkitTransition: "opacity 0.2s linear",
                transition: "opacity 0.2s linear"
            }),
            p.makeFullscreen(this.backgroundElement),
            this.backgroundElement.style.position = "fixed",
            this.domElement = document.createElement("div"),
            e.extend(this.domElement.style, {
                position: "fixed",
                display: "none",
                zIndex: "1001",
                opacity: 0,
                WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                transition: "transform 0.2s ease-out, opacity 0.2s linear"
            }),
            document.body.appendChild(this.backgroundElement),
            document.body.appendChild(this.domElement);
            var d = this;
            p.bind(this.backgroundElement, "click", function() {
                d.hide()
            })
        }
        return t(l, [{
            key: "show",
            value: function d() {
                var g = this;
                this.backgroundElement.style.display = "block",
                this.domElement.style.display = "block",
                this.domElement.style.opacity = 0,
                this.domElement.style.webkitTransform = "scale(1.1)",
                this.layout(),
                e.defer(function() {
                    g.backgroundElement.style.opacity = 1,
                    g.domElement.style.opacity = 1,
                    g.domElement.style.webkitTransform = "scale(1)"
                })
            }
        }, {
            key: "hide",
            value: function d() {
                var g = this
                  , j = function k() {
                    g.domElement.style.display = "none",
                    g.backgroundElement.style.display = "none",
                    p.unbind(g.domElement, "webkitTransitionEnd", k),
                    p.unbind(g.domElement, "transitionend", k),
                    p.unbind(g.domElement, "oTransitionEnd", k)
                };
                p.bind(this.domElement, "webkitTransitionEnd", j),
                p.bind(this.domElement, "transitionend", j),
                p.bind(this.domElement, "oTransitionEnd", j),
                this.backgroundElement.style.opacity = 0,
                this.domElement.style.opacity = 0,
                this.domElement.style.webkitTransform = "scale(1.1)"
            }
        }, {
            key: "layout",
            value: function d() {
                this.domElement.style.left = window.innerWidth / 2 - p.getWidth(this.domElement) / 2 + "px",
                this.domElement.style.top = window.innerHeight / 2 - p.getHeight(this.domElement) / 2 + "px"
            }
        }]),
        l
    }()
      , $d = a(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
    Vd.inject($d);
    var fd = "dg"
      , gd = 72
      , hd = 20
      , ha = "Default"
      , ia = function() {
        try {
            return !!window.localStorage
        } catch (l) {
            return !1
        }
    }()
      , ja = void 0
      , id = !0
      , da = void 0
      , Ya = !1
      , jd = []
      , M = function l(d) {
        var g = this
          , j = d || {};
        this.domElement = document.createElement("div"),
        this.__ul = document.createElement("ul"),
        this.domElement.appendChild(this.__ul),
        p.addClass(this.domElement, fd),
        this.__folders = {},
        this.__controllers = [],
        this.__rememberedObjects = [],
        this.__rememberedObjectIndecesToControllers = [],
        this.__listening = [],
        j = e.defaults(j, {
            closeOnTop: !1,
            autoPlace: !0,
            width: l.DEFAULT_WIDTH
        }),
        j = e.defaults(j, {
            resizable: j.autoPlace,
            hideable: j.autoPlace
        }),
        e.isUndefined(j.load) ? j.load = {
            preset: ha
        } : j.preset && (j.load.preset = j.preset),
        e.isUndefined(j.parent) && j.hideable && jd.push(this),
        j.resizable = e.isUndefined(j.parent) && j.resizable,
        j.autoPlace && e.isUndefined(j.scrollable) && (j.scrollable = !0);
        var k = ia && localStorage.getItem(ea(this, "isLocal")) === "true"
          , o = void 0
          , z = void 0;
        Object.defineProperties(this, {
            parent: {
                get: function L() {
                    return j.parent
                }
            },
            scrollable: {
                get: function L() {
                    return j.scrollable
                }
            },
            autoPlace: {
                get: function L() {
                    return j.autoPlace
                }
            },
            closeOnTop: {
                get: function L() {
                    return j.closeOnTop
                }
            },
            preset: {
                get: function L() {
                    return g.parent ? g.getRoot().preset : j.load.preset
                },
                set: function L(N) {
                    g.parent ? g.getRoot().preset = N : j.load.preset = N,
                    de(this),
                    g.revert()
                }
            },
            width: {
                get: function L() {
                    return j.width
                },
                set: function L(N) {
                    j.width = N,
                    ab(g, N)
                }
            },
            name: {
                get: function L() {
                    return j.name
                },
                set: function L(N) {
                    j.name = N,
                    z && (z.innerHTML = j.name)
                }
            },
            closed: {
                get: function L() {
                    return j.closed
                },
                set: function L(N) {
                    j.closed = N,
                    j.closed ? p.addClass(g.__ul, l.CLASS_CLOSED) : p.removeClass(g.__ul, l.CLASS_CLOSED),
                    this.onResize(),
                    g.__closeButton && (g.__closeButton.innerHTML = N ? l.TEXT_OPEN : l.TEXT_CLOSED)
                }
            },
            load: {
                get: function L() {
                    return j.load
                }
            },
            useLocalStorage: {
                get: function L() {
                    return k
                },
                set: function L(N) {
                    ia && (k = N,
                    N ? p.bind(window, "unload", o) : p.unbind(window, "unload", o),
                    localStorage.setItem(ea(g, "isLocal"), N))
                }
            }
        });
        if (e.isUndefined(j.parent)) {
            this.closed = j.closed || !1,
            p.addClass(this.domElement, l.CLASS_MAIN),
            p.makeSelectable(this.domElement, !1);
            if (ia) {
                if (k) {
                    g.useLocalStorage = !0;
                    var A = localStorage.getItem(ea(this, "gui"));
                    A && (j.load = JSON.parse(A))
                }
            }
            this.__closeButton = document.createElement("div"),
            this.__closeButton.innerHTML = l.TEXT_CLOSED,
            p.addClass(this.__closeButton, l.CLASS_CLOSE_BUTTON),
            j.closeOnTop ? (p.addClass(this.__closeButton, l.CLASS_CLOSE_TOP),
            this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (p.addClass(this.__closeButton, l.CLASS_CLOSE_BOTTOM),
            this.domElement.appendChild(this.__closeButton)),
            p.bind(this.__closeButton, "click", function() {
                g.closed = !g.closed
            })
        } else {
            j.closed === void 0 && (j.closed = !0);
            var B = document.createTextNode(j.name);
            p.addClass(B, "controller-name"),
            z = Za(g, B);
            var I = function L(N) {
                return N.preventDefault(),
                g.closed = !g.closed,
                !1
            };
            p.addClass(this.__ul, l.CLASS_CLOSED),
            p.addClass(z, "title"),
            p.bind(z, "click", I),
            j.closed || (this.closed = !1)
        }
        j.autoPlace && (e.isUndefined(j.parent) && (id && (da = document.createElement("div"),
        p.addClass(da, fd),
        p.addClass(da, l.CLASS_AUTO_PLACE_CONTAINER),
        document.body.appendChild(da),
        id = !1),
        da.appendChild(this.domElement),
        p.addClass(this.domElement, l.CLASS_AUTO_PLACE)),
        this.parent || ab(g, j.width)),
        this.__resizeHandler = function() {
            g.onResizeDebounced()
        }
        ,
        p.bind(window, "resize", this.__resizeHandler),
        p.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler),
        p.bind(this.__ul, "transitionend", this.__resizeHandler),
        p.bind(this.__ul, "oTransitionEnd", this.__resizeHandler),
        this.onResize(),
        j.resizable && ce(this),
        o = function L() {
            ia && localStorage.getItem(ea(g, "isLocal")) === "true" && localStorage.setItem(ea(g, "gui"), JSON.stringify(g.getSaveObject()))
        }
        ,
        this.saveToLocalStorageIfPossible = o;
        function O() {
            var L = g.getRoot();
            L.width += 1,
            e.defer(function() {
                L.width -= 1
            })
        }
        j.parent || O()
    };
    M.toggleHide = function() {
        Ya = !Ya,
        e.each(jd, function(l) {
            l.domElement.style.display = Ya ? "none" : ""
        })
    }
    ;
    M.CLASS_AUTO_PLACE = "a";
    M.CLASS_AUTO_PLACE_CONTAINER = "ac";
    M.CLASS_MAIN = "main";
    M.CLASS_CONTROLLER_ROW = "cr";
    M.CLASS_TOO_TALL = "taller-than-window";
    M.CLASS_CLOSED = "closed";
    M.CLASS_CLOSE_BUTTON = "close-button";
    M.CLASS_CLOSE_TOP = "close-top";
    M.CLASS_CLOSE_BOTTOM = "close-bottom";
    M.CLASS_DRAG = "drag";
    M.DEFAULT_WIDTH = 245;
    M.TEXT_CLOSED = "Close Controls";
    M.TEXT_OPEN = "Open Controls";
    M._keydownHandler = function(l) {
        document.activeElement.type !== "text" && (l.which === gd || l.keyCode === gd) && M.toggleHide()
    }
    ;
    p.bind(window, "keydown", M._keydownHandler, !1);
    e.extend(M.prototype, {
        add: function l(d, g) {
            return ka(this, d, g, {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
            })
        },
        addColor: function l(d, g) {
            return ka(this, d, g, {
                color: !0
            })
        },
        remove: function l(d) {
            this.__ul.removeChild(d.__li),
            this.__controllers.splice(this.__controllers.indexOf(d), 1);
            var g = this;
            e.defer(function() {
                g.onResize()
            })
        },
        destroy: function l() {
            if (this.parent)
                throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
            this.autoPlace && da.removeChild(this.domElement);
            var d = this;
            e.each(this.__folders, function(g) {
                d.removeFolder(g)
            }),
            p.unbind(window, "keydown", M._keydownHandler, !1),
            kd(this)
        },
        addFolder: function l(d) {
            if (this.__folders[d] !== void 0)
                throw new Error('You already have a folder in this GUI by the name "' + d + '"');
            var g = {
                name: d,
                parent: this
            };
            g.autoPlace = this.autoPlace,
            this.load && this.load.folders && this.load.folders[d] && (g.closed = this.load.folders[d].closed,
            g.load = this.load.folders[d]);
            var j = new M(g);
            this.__folders[d] = j;
            var k = Za(this, j.domElement);
            return p.addClass(k, "folder"),
            j
        },
        removeFolder: function l(d) {
            this.__ul.removeChild(d.domElement.parentElement),
            delete this.__folders[d.name],
            this.load && this.load.folders && this.load.folders[d.name] && delete this.load.folders[d.name],
            kd(d);
            var g = this;
            e.each(d.__folders, function(j) {
                d.removeFolder(j)
            }),
            e.defer(function() {
                g.onResize()
            })
        },
        open: function l() {
            this.closed = !1
        },
        close: function l() {
            this.closed = !0
        },
        hide: function l() {
            this.domElement.style.display = "none"
        },
        show: function l() {
            this.domElement.style.display = ""
        },
        onResize: function l() {
            var d = this.getRoot();
            if (d.scrollable) {
                var g = p.getOffset(d.__ul).top
                  , j = 0;
                e.each(d.__ul.childNodes, function(k) {
                    d.autoPlace && k === d.__save_row || (j += p.getHeight(k))
                }),
                window.innerHeight - g - hd < j ? (p.addClass(d.domElement, M.CLASS_TOO_TALL),
                d.__ul.style.height = window.innerHeight - g - hd + "px") : (p.removeClass(d.domElement, M.CLASS_TOO_TALL),
                d.__ul.style.height = "auto")
            }
            d.__resize_handle && e.defer(function() {
                d.__resize_handle.style.height = d.__ul.offsetHeight + "px"
            }),
            d.__closeButton && (d.__closeButton.style.width = d.width + "px")
        },
        onResizeDebounced: e.debounce(function() {
            this.onResize()
        }, 50),
        remember: function l() {
            e.isUndefined(ja) && (ja = new _d(),
            ja.domElement.innerHTML = Wd);
            if (this.parent)
                throw new Error("You can only call remember on a top level GUI.");
            var d = this;
            e.each(Array.prototype.slice.call(arguments), function(g) {
                d.__rememberedObjects.length === 0 && be(d),
                d.__rememberedObjects.indexOf(g) === -1 && d.__rememberedObjects.push(g)
            }),
            this.autoPlace && ab(this, this.width)
        },
        getRoot: function l() {
            for (var d = this; d.parent; )
                d = d.parent;
            return d
        },
        getSaveObject: function l() {
            var d = this.load;
            return d.closed = this.closed,
            this.__rememberedObjects.length > 0 && (d.preset = this.preset,
            d.remembered || (d.remembered = {}),
            d.remembered[this.preset] = va(this)),
            d.folders = {},
            e.each(this.__folders, function(g, j) {
                d.folders[j] = g.getSaveObject()
            }),
            d
        },
        save: function l() {
            this.load.remembered || (this.load.remembered = {}),
            this.load.remembered[this.preset] = va(this),
            _a(this, !1),
            this.saveToLocalStorageIfPossible()
        },
        saveAs: function l(d) {
            this.load.remembered || (this.load.remembered = {},
            this.load.remembered[ha] = va(this, !0)),
            this.load.remembered[d] = va(this),
            this.preset = d,
            $a(this, d, !0),
            this.saveToLocalStorageIfPossible()
        },
        revert: function l(d) {
            e.each(this.__controllers, function(g) {
                this.getRoot().load.remembered ? ld(d || this.getRoot(), g) : g.setValue(g.initialValue),
                g.__onFinishChange && g.__onFinishChange.call(g, g.getValue())
            }, this),
            e.each(this.__folders, function(g) {
                g.revert(g)
            }),
            d || _a(this.getRoot(), !1)
        },
        listen: function l(d) {
            var g = this.__listening.length === 0;
            this.__listening.push(d),
            g && nd(this.__listening)
        },
        updateDisplay: function l() {
            e.each(this.__controllers, function(d) {
                d.updateDisplay()
            }),
            e.each(this.__folders, function(d) {
                d.updateDisplay()
            })
        }
    });
    function Za(l, d, g) {
        var j = document.createElement("li");
        return d && j.appendChild(d),
        g ? l.__ul.insertBefore(j, g) : l.__ul.appendChild(j),
        l.onResize(),
        j
    }
    function kd(l) {
        p.unbind(window, "resize", l.__resizeHandler),
        l.saveToLocalStorageIfPossible && p.unbind(window, "unload", l.saveToLocalStorageIfPossible)
    }
    function _a(l, d) {
        var g = l.__preset_select[l.__preset_select.selectedIndex];
        d ? g.innerHTML = g.value + "*" : g.innerHTML = g.value
    }
    function ae(l, d, g) {
        g.__li = d,
        g.__gui = l,
        e.extend(g, {
            options: function o(z) {
                if (arguments.length > 1) {
                    var A = g.__li.nextElementSibling;
                    return g.remove(),
                    ka(l, g.object, g.property, {
                        before: A,
                        factoryArgs: [e.toArray(arguments)]
                    })
                }
                if (e.isArray(z) || e.isObject(z)) {
                    var B = g.__li.nextElementSibling;
                    return g.remove(),
                    ka(l, g.object, g.property, {
                        before: B,
                        factoryArgs: [z]
                    })
                }
            },
            name: function o(z) {
                return g.__li.firstElementChild.firstElementChild.innerHTML = z,
                g
            },
            listen: function o() {
                return g.__gui.listen(g),
                g
            },
            remove: function o() {
                return g.__gui.remove(g),
                g
            }
        });
        if (g instanceof ta) {
            var j = new ga(g.object,g.property,{
                min: g.__min,
                max: g.__max,
                step: g.__step
            });
            e.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(o) {
                var z = g[o]
                  , A = j[o];
                g[o] = j[o] = function() {
                    var B = Array.prototype.slice.call(arguments);
                    return A.apply(j, B),
                    z.apply(g, B)
                }
            }),
            p.addClass(d, "has-slider"),
            g.domElement.insertBefore(j.domElement, g.domElement.firstElementChild)
        } else if (g instanceof ga) {
            var k = function o(z) {
                if (e.isNumber(g.__min) && e.isNumber(g.__max)) {
                    var A = g.__li.firstElementChild.firstElementChild.innerHTML
                      , B = g.__gui.__listening.indexOf(g) > -1;
                    g.remove();
                    var I = ka(l, g.object, g.property, {
                        before: g.__li.nextElementSibling,
                        factoryArgs: [g.__min, g.__max, g.__step]
                    });
                    return I.name(A),
                    B && I.listen(),
                    I
                }
                return z
            };
            g.min = e.compose(k, g.min),
            g.max = e.compose(k, g.max)
        } else
            g instanceof P ? (p.bind(d, "click", function() {
                p.fakeEvent(g.__checkbox, "click")
            }),
            p.bind(g.__checkbox, "click", function(o) {
                o.stopPropagation()
            })) : g instanceof Xa ? (p.bind(d, "click", function() {
                p.fakeEvent(g.__button, "click")
            }),
            p.bind(d, "mouseover", function() {
                p.addClass(g.__button, "hover")
            }),
            p.bind(d, "mouseout", function() {
                p.removeClass(g.__button, "hover")
            })) : g instanceof ua && (p.addClass(d, "color"),
            g.updateDisplay = e.compose(function(o) {
                return d.style.borderLeftColor = g.__color.toString(),
                o
            }, g.updateDisplay),
            g.updateDisplay());
        g.setValue = e.compose(function(o) {
            return l.getRoot().__preset_select && g.isModified() && _a(l.getRoot(), !0),
            o
        }, g.setValue)
    }
    function ld(l, d) {
        var g = l.getRoot()
          , j = g.__rememberedObjects.indexOf(d.object);
        if (j !== -1) {
            var k = g.__rememberedObjectIndecesToControllers[j];
            k === void 0 && (k = {},
            g.__rememberedObjectIndecesToControllers[j] = k),
            k[d.property] = d;
            if (g.load && g.load.remembered) {
                var o = g.load.remembered
                  , z = void 0;
                if (o[l.preset])
                    z = o[l.preset];
                else if (o[ha])
                    z = o[ha];
                else
                    return;
                if (z[j] && z[j][d.property] !== void 0) {
                    var A = z[j][d.property];
                    d.initialValue = A,
                    d.setValue(A)
                }
            }
        }
    }
    function ka(l, d, g, j) {
        if (d[g] === void 0)
            throw new Error('Object "' + d + '" has no property "' + g + '"');
        var k = void 0;
        if (j.color)
            k = new ua(d,g);
        else {
            var o = [d, g].concat(j.factoryArgs);
            k = Xd.apply(l, o)
        }
        j.before instanceof C && (j.before = j.before.__li),
        ld(l, k),
        p.addClass(k.domElement, "c");
        var z = document.createElement("span");
        p.addClass(z, "property-name"),
        z.innerHTML = k.property;
        var A = document.createElement("div");
        A.appendChild(z),
        A.appendChild(k.domElement);
        var B = Za(l, A, j.before);
        return p.addClass(B, M.CLASS_CONTROLLER_ROW),
        k instanceof ua ? p.addClass(B, "color") : p.addClass(B, u(k.getValue())),
        ae(l, B, k),
        l.__controllers.push(k),
        k
    }
    function ea(l, d) {
        return document.location.href + "." + d
    }
    function $a(l, d, g) {
        var j = document.createElement("option");
        j.innerHTML = d,
        j.value = d,
        l.__preset_select.appendChild(j),
        g && (l.__preset_select.selectedIndex = l.__preset_select.length - 1)
    }
    function md(l, d) {
        d.style.display = l.useLocalStorage ? "block" : "none"
    }
    function be(l) {
        var d = l.__save_row = document.createElement("li");
        p.addClass(l.domElement, "has-save"),
        l.__ul.insertBefore(d, l.__ul.firstChild),
        p.addClass(d, "save-row");
        var g = document.createElement("span");
        g.innerHTML = "&nbsp;",
        p.addClass(g, "button gears");
        var j = document.createElement("span");
        j.innerHTML = "Save",
        p.addClass(j, "button"),
        p.addClass(j, "save");
        var k = document.createElement("span");
        k.innerHTML = "New",
        p.addClass(k, "button"),
        p.addClass(k, "save-as");
        var o = document.createElement("span");
        o.innerHTML = "Revert",
        p.addClass(o, "button"),
        p.addClass(o, "revert");
        var z = l.__preset_select = document.createElement("select");
        l.load && l.load.remembered ? e.each(l.load.remembered, function(L, N) {
            $a(l, N, N === l.preset)
        }) : $a(l, ha, !1),
        p.bind(z, "change", function() {
            for (var L = 0; L < l.__preset_select.length; L++)
                l.__preset_select[L].innerHTML = l.__preset_select[L].value;
            l.preset = this.value
        }),
        d.appendChild(z),
        d.appendChild(g),
        d.appendChild(j),
        d.appendChild(k),
        d.appendChild(o);
        if (ia) {
            var A = document.getElementById("dg-local-explain")
              , B = document.getElementById("dg-local-storage")
              , I = document.getElementById("dg-save-locally");
            I.style.display = "block",
            localStorage.getItem(ea(l, "isLocal")) === "true" && B.setAttribute("checked", "checked"),
            md(l, A),
            p.bind(B, "change", function() {
                l.useLocalStorage = !l.useLocalStorage,
                md(l, A)
            })
        }
        var O = document.getElementById("dg-new-constructor");
        p.bind(O, "keydown", function(L) {
            L.metaKey && (L.which === 67 || L.keyCode === 67) && ja.hide()
        }),
        p.bind(g, "click", function() {
            O.innerHTML = JSON.stringify(l.getSaveObject(), void 0, 2),
            ja.show(),
            O.focus(),
            O.select()
        }),
        p.bind(j, "click", function() {
            l.save()
        }),
        p.bind(k, "click", function() {
            var L = prompt("Enter a new preset name.");
            L && l.saveAs(L)
        }),
        p.bind(o, "click", function() {
            l.revert()
        })
    }
    function ce(l) {
        var d = void 0;
        l.__resize_handle = document.createElement("div"),
        e.extend(l.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        function g(o) {
            return o.preventDefault(),
            l.width += d - o.clientX,
            l.onResize(),
            d = o.clientX,
            !1
        }
        function j() {
            p.removeClass(l.__closeButton, M.CLASS_DRAG),
            p.unbind(window, "mousemove", g),
            p.unbind(window, "mouseup", j)
        }
        function k(o) {
            return o.preventDefault(),
            d = o.clientX,
            p.addClass(l.__closeButton, M.CLASS_DRAG),
            p.bind(window, "mousemove", g),
            p.bind(window, "mouseup", j),
            !1
        }
        p.bind(l.__resize_handle, "mousedown", k),
        p.bind(l.__closeButton, "mousedown", k),
        l.domElement.insertBefore(l.__resize_handle, l.domElement.firstElementChild)
    }
    function ab(l, d) {
        l.domElement.style.width = d + "px",
        l.__save_row && l.autoPlace && (l.__save_row.style.width = d + "px"),
        l.__closeButton && (l.__closeButton.style.width = d + "px")
    }
    function va(l, d) {
        var g = {};
        return e.each(l.__rememberedObjects, function(j, k) {
            var o = {}
              , z = l.__rememberedObjectIndecesToControllers[k];
            e.each(z, function(A, B) {
                o[B] = d ? A.initialValue : A.getValue()
            }),
            g[k] = o
        }),
        g
    }
    function de(l) {
        for (var d = 0; d < l.__preset_select.length; d++)
            l.__preset_select[d].value === l.preset && (l.__preset_select.selectedIndex = d)
    }
    function nd(l) {
        l.length !== 0 && Zd.call(window, function() {
            nd(l)
        }),
        e.each(l, function(d) {
            d.updateDisplay()
        })
    }
    var od = {
        Color: v,
        math: s,
        interpret: m
    }
      , pd = {
        Controller: C,
        BooleanController: P,
        OptionController: R,
        StringController: Q,
        NumberController: F,
        NumberControllerBox: ga,
        NumberControllerSlider: ta,
        FunctionController: Xa,
        ColorController: ua
    }
      , qd = {
        dom: p
    }
      , rd = {
        GUI: M
    }
      , sd = M
      , ee = {
        color: od,
        controllers: pd,
        dom: qd,
        gui: rd,
        GUI: sd
    }
      , fe = ee
}
);
function Ta(a) {
    let b = a[0]
      , c = a[1]
      , f = a[2];
    return Math.sqrt(b * b + c * c + f * f)
}
function qa(a, b) {
    return a[0] = b[0],
    a[1] = b[1],
    a[2] = b[2],
    a
}
function Ac(a, b, c, f) {
    return a[0] = b,
    a[1] = c,
    a[2] = f,
    a
}
function Ra(a, b, c) {
    return a[0] = b[0] + c[0],
    a[1] = b[1] + c[1],
    a[2] = b[2] + c[2],
    a
}
function Sa(a, b, c) {
    return a[0] = b[0] - c[0],
    a[1] = b[1] - c[1],
    a[2] = b[2] - c[2],
    a
}
function Bc(a, b, c) {
    return a[0] = b[0] * c[0],
    a[1] = b[1] * c[1],
    a[2] = b[2] * c[2],
    a
}
function Cc(a, b, c) {
    return a[0] = b[0] / c[0],
    a[1] = b[1] / c[1],
    a[2] = b[2] / c[2],
    a
}
function ra(a, b, c) {
    return a[0] = b[0] * c,
    a[1] = b[1] * c,
    a[2] = b[2] * c,
    a
}
function Ec(a, b) {
    let c = b[0] - a[0]
      , f = b[1] - a[1]
      , e = b[2] - a[2];
    return Math.sqrt(c * c + f * f + e * e)
}
function Fc(a, b) {
    let c = b[0] - a[0]
      , f = b[1] - a[1]
      , e = b[2] - a[2];
    return c * c + f * f + e * e
}
function Ua(a) {
    let b = a[0]
      , c = a[1]
      , f = a[2];
    return b * b + c * c + f * f
}
function Gc(a, b) {
    return a[0] = -b[0],
    a[1] = -b[1],
    a[2] = -b[2],
    a
}
function Dc(a, b) {
    return a[0] = 1 / b[0],
    a[1] = 1 / b[1],
    a[2] = 1 / b[2],
    a
}
function sa(a, b) {
    let c = b[0]
      , f = b[1]
      , e = b[2]
      , h = c * c + f * f + e * e;
    return h > 0 && (h = 1 / Math.sqrt(h)),
    a[0] = b[0] * h,
    a[1] = b[1] * h,
    a[2] = b[2] * h,
    a
}
function Wa(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}
function Va(a, b, c) {
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = c[0]
      , n = c[1]
      , m = c[2];
    return a[0] = e * m - h * n,
    a[1] = h * i - f * m,
    a[2] = f * n - e * i,
    a
}
function Mc(a, b, c, f) {
    let e = b[0]
      , h = b[1]
      , i = b[2];
    return a[0] = e + f * (c[0] - e),
    a[1] = h + f * (c[1] - h),
    a[2] = i + f * (c[2] - i),
    a
}
function Ic(a, b, c) {
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = c[3] * f + c[7] * e + c[11] * h + c[15];
    return i = i || 1,
    a[0] = (c[0] * f + c[4] * e + c[8] * h + c[12]) / i,
    a[1] = (c[1] * f + c[5] * e + c[9] * h + c[13]) / i,
    a[2] = (c[2] * f + c[6] * e + c[10] * h + c[14]) / i,
    a
}
function Jc(a, b, c) {
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = c[3] * f + c[7] * e + c[11] * h + c[15];
    return i = i || 1,
    a[0] = (c[0] * f + c[4] * e + c[8] * h) / i,
    a[1] = (c[1] * f + c[5] * e + c[9] * h) / i,
    a[2] = (c[2] * f + c[6] * e + c[10] * h) / i,
    a
}
function Kc(a, b, c) {
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = c[0]
      , n = c[1]
      , m = c[2]
      , q = c[3]
      , s = n * h - m * e
      , u = m * f - i * h
      , r = i * e - n * f
      , t = n * r - m * u
      , w = m * s - i * r
      , y = i * u - n * s
      , x = q * 2;
    return s *= x,
    u *= x,
    r *= x,
    t *= 2,
    w *= 2,
    y *= 2,
    a[0] = f + s + t,
    a[1] = e + u + w,
    a[2] = h + r + y,
    a
}
const Lc = function() {
    const a = [0, 0, 0]
      , b = [0, 0, 0];
    return function(c, f) {
        qa(a, c),
        qa(b, f),
        sa(a, a),
        sa(b, b);
        let e = Wa(a, b);
        return e > 1 ? 0 : e < -1 ? Math.PI : Math.acos(e)
    }
}();
function Hc(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2]
}
class V extends Array {
    constructor(a=0, b=a, c=a) {
        return super(a, b, c),
        this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(a) {
        this[0] = a
    }
    set y(a) {
        this[1] = a
    }
    set z(a) {
        this[2] = a
    }
    set(a, b=a, c=a) {
        return a.length ? this.copy(a) : (Ac(this, a, b, c),
        this)
    }
    copy(a) {
        return qa(this, a),
        this
    }
    add(a, b) {
        return b ? Ra(this, a, b) : Ra(this, this, a),
        this
    }
    sub(a, b) {
        return b ? Sa(this, a, b) : Sa(this, this, a),
        this
    }
    multiply(a) {
        return a.length ? Bc(this, this, a) : ra(this, this, a),
        this
    }
    divide(a) {
        return a.length ? Cc(this, this, a) : ra(this, this, 1 / a),
        this
    }
    inverse(a=this) {
        return Dc(this, a),
        this
    }
    len() {
        return Ta(this)
    }
    distance(a) {
        return a ? Ec(this, a) : Ta(this)
    }
    squaredLen() {
        return Ua(this)
    }
    squaredDistance(a) {
        return a ? Fc(this, a) : Ua(this)
    }
    negate(a=this) {
        return Gc(this, a),
        this
    }
    cross(a, b) {
        return b ? Va(this, a, b) : Va(this, this, a),
        this
    }
    scale(a) {
        return ra(this, this, a),
        this
    }
    normalize() {
        return sa(this, this),
        this
    }
    dot(a) {
        return Wa(this, a)
    }
    equals(a) {
        return Hc(this, a)
    }
    applyMatrix4(a) {
        return Ic(this, this, a),
        this
    }
    scaleRotateMatrix4(a) {
        return Jc(this, this, a),
        this
    }
    applyQuaternion(a) {
        return Kc(this, this, a),
        this
    }
    angle(a) {
        return Lc(this, a)
    }
    lerp(a, b) {
        return Mc(this, this, a, b),
        this
    }
    clone() {
        return new V(this[0],this[1],this[2])
    }
    fromArray(a, b=0) {
        return this[0] = a[b],
        this[1] = a[b + 1],
        this[2] = a[b + 2],
        this
    }
    toArray(a=[], b=0) {
        return a[b] = this[0],
        a[b + 1] = this[1],
        a[b + 2] = this[2],
        a
    }
    transformDirection(a) {
        const b = this[0]
          , c = this[1]
          , f = this[2];
        return this[0] = a[0] * b + a[4] * c + a[8] * f,
        this[1] = a[1] * b + a[5] * c + a[9] * f,
        this[2] = a[2] * b + a[6] * c + a[10] * f,
        this.normalize()
    }
}
const hb = new V();
let Ed = 1
  , Fd = 1
  , ib = !1;
class jb {
    constructor(a, b={}) {
        a.canvas || console.error("gl not passed as first argument to Geometry"),
        this.gl = a,
        this.attributes = b,
        this.id = Ed++,
        this.VAOs = {},
        this.drawRange = {
            start: 0,
            count: 0
        },
        this.instancedCount = 0,
        this.gl.renderer.bindVertexArray(null),
        this.gl.renderer.currentGeometry = null,
        this.glState = this.gl.renderer.state;
        for (let c in b)
            this.addAttribute(c, b[c])
    }
    addAttribute(a, b) {
        this.attributes[a] = b,
        b.id = Fd++,
        b.size = b.size || 1,
        b.type = b.type || (b.data.constructor === Float32Array ? this.gl.FLOAT : b.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT),
        b.target = a === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
        b.normalized = b.normalized || !1,
        b.stride = b.stride || 0,
        b.offset = b.offset || 0,
        b.count = b.count || (b.stride ? b.data.byteLength / b.stride : b.data.length / b.size),
        b.divisor = b.instanced || 0,
        b.needsUpdate = !1,
        b.buffer || (b.buffer = this.gl.createBuffer(),
        this.updateAttribute(b));
        if (b.divisor) {
            this.isInstanced = !0;
            if (this.instancedCount && this.instancedCount !== b.count * b.divisor)
                return console.warn("geometry has multiple instanced buffers of different length"),
                this.instancedCount = Math.min(this.instancedCount, b.count * b.divisor);
            this.instancedCount = b.count * b.divisor
        } else
            a === "index" ? this.drawRange.count = b.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, b.count))
    }
    updateAttribute(a) {
        this.glState.boundBuffer !== a.buffer && (this.gl.bindBuffer(a.target, a.buffer),
        this.glState.boundBuffer = a.buffer),
        this.gl.bufferData(a.target, a.data, this.gl.STATIC_DRAW),
        a.needsUpdate = !1
    }
    setIndex(a) {
        this.addAttribute("index", a)
    }
    setDrawRange(a, b) {
        this.drawRange.start = a,
        this.drawRange.count = b
    }
    setInstancedCount(a) {
        this.instancedCount = a
    }
    createVAO(a) {
        this.VAOs[a.attributeOrder] = this.gl.renderer.createVertexArray(),
        this.gl.renderer.bindVertexArray(this.VAOs[a.attributeOrder]),
        this.bindAttributes(a)
    }
    bindAttributes(a) {
        a.attributeLocations.forEach((b,{name: c, type: f})=>{
            if (!this.attributes[c]) {
                console.warn(`active attribute ${c} not being supplied`);
                return
            }
            const e = this.attributes[c];
            this.gl.bindBuffer(e.target, e.buffer),
            this.glState.boundBuffer = e.buffer;
            let h = 1;
            f === 35674 && (h = 2),
            f === 35675 && (h = 3),
            f === 35676 && (h = 4);
            const i = e.size / h
              , n = h === 1 ? 0 : h * h * h
              , m = h === 1 ? 0 : h * h;
            for (let q = 0; q < h; q++)
                this.gl.vertexAttribPointer(b + q, i, e.type, e.normalized, e.stride + n, e.offset + q * m),
                this.gl.enableVertexAttribArray(b + q),
                this.gl.renderer.vertexAttribDivisor(b + q, e.divisor)
        }
        ),
        this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
    }
    draw({program: a, mode: b=this.gl.TRIANGLES}) {
        this.gl.renderer.currentGeometry !== `${this.id}_ ${a.attributeOrder}` && (this.VAOs[a.attributeOrder] || this.createVAO(a),
        this.gl.renderer.bindVertexArray(this.VAOs[a.attributeOrder]),
        this.gl.renderer.currentGeometry = `${this.id}_ ${a.attributeOrder}`),
        a.attributeLocations.forEach((c,{name: f})=>{
            const e = this.attributes[f];
            e.needsUpdate && this.updateAttribute(e)
        }
        ),
        this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(b, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2, this.instancedCount) : this.gl.renderer.drawArraysInstanced(b, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(b, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2) : this.gl.drawArrays(b, this.drawRange.start, this.drawRange.count)
    }
    getPositionArray() {
        const a = this.attributes.position;
        return a.data ? a.data : ib ? void 0 : (console.warn("No position buffer data found to compute bounds"),
        ib = !0)
    }
    computeBoundingBox(a) {
        a || (a = this.getPositionArray()),
        this.bounds || (this.bounds = {
            min: new V(),
            max: new V(),
            center: new V(),
            scale: new V(),
            radius: Infinity
        });
        const b = this.bounds.min
          , c = this.bounds.max
          , f = this.bounds.center
          , e = this.bounds.scale;
        b.set(Infinity),
        c.set(-Infinity);
        for (let h = 0, i = a.length; h < i; h += 3) {
            const n = a[h]
              , m = a[h + 1]
              , q = a[h + 2];
            b.x = Math.min(n, b.x),
            b.y = Math.min(m, b.y),
            b.z = Math.min(q, b.z),
            c.x = Math.max(n, c.x),
            c.y = Math.max(m, c.y),
            c.z = Math.max(q, c.z)
        }
        e.sub(c, b),
        f.add(b, c).divide(2)
    }
    computeBoundingSphere(a) {
        a || (a = this.getPositionArray()),
        this.bounds || this.computeBoundingBox(a);
        let b = 0;
        for (let c = 0, f = a.length; c < f; c += 3)
            hb.fromArray(a, c),
            b = Math.max(b, this.bounds.center.squaredDistance(hb));
        this.bounds.radius = Math.sqrt(b)
    }
    remove() {
        this.vao && this.gl.renderer.deleteVertexArray(this.vao);
        for (let a in this.attributes)
            this.gl.deleteBuffer(this.attributes[a].buffer),
            delete this.attributes[a]
    }
}
let Hd = 1;
const mb = {};
class nb {
    constructor(a, {vertex: b, fragment: c, uniforms: f={}, transparent: e=!1, cullFace: h=a.BACK, frontFace: i=a.CCW, depthTest: n=!0, depthWrite: m=!0, depthFunc: q=a.LESS}={}) {
        a.canvas || console.error("gl not passed as fist argument to Program"),
        this.gl = a,
        this.uniforms = f,
        this.id = Hd++,
        b || console.warn("vertex shader not supplied"),
        c || console.warn("fragment shader not supplied"),
        this.transparent = e,
        this.cullFace = h,
        this.frontFace = i,
        this.depthTest = n,
        this.depthWrite = m,
        this.depthFunc = q,
        this.blendFunc = {},
        this.blendEquation = {},
        this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
        const s = a.createShader(a.VERTEX_SHADER);
        a.shaderSource(s, b),
        a.compileShader(s),
        a.getShaderInfoLog(s) !== "" && console.warn(`${a.getShaderInfoLog(s)}
Vertex Shader
${ob(b)}`);
        const u = a.createShader(a.FRAGMENT_SHADER);
        a.shaderSource(u, c),
        a.compileShader(u),
        a.getShaderInfoLog(u) !== "" && console.warn(`${a.getShaderInfoLog(u)}
Fragment Shader
${ob(c)}`),
        this.program = a.createProgram(),
        a.attachShader(this.program, s),
        a.attachShader(this.program, u),
        a.linkProgram(this.program);
        if (!a.getProgramParameter(this.program, a.LINK_STATUS))
            return console.warn(a.getProgramInfoLog(this.program));
        a.deleteShader(s),
        a.deleteShader(u),
        this.uniformLocations = new Map();
        let r = a.getProgramParameter(this.program, a.ACTIVE_UNIFORMS);
        for (let y = 0; y < r; y++) {
            let x = a.getActiveUniform(this.program, y);
            this.uniformLocations.set(x, a.getUniformLocation(this.program, x.name));
            const v = x.name.match(/(\w+)/g);
            x.uniformName = v[0],
            v.length === 3 ? (x.isStructArray = !0,
            x.structIndex = Number(v[1]),
            x.structProperty = v[2]) : v.length === 2 && isNaN(Number(v[1])) && (x.isStruct = !0,
            x.structProperty = v[1])
        }
        this.attributeLocations = new Map();
        const t = []
          , w = a.getProgramParameter(this.program, a.ACTIVE_ATTRIBUTES);
        for (let y = 0; y < w; y++) {
            const x = a.getActiveAttrib(this.program, y)
              , v = a.getAttribLocation(this.program, x.name);
            t[v] = x.name,
            this.attributeLocations.set(x, v)
        }
        this.attributeOrder = t.join("")
    }
    setBlendFunc(a, b, c, f) {
        this.blendFunc.src = a,
        this.blendFunc.dst = b,
        this.blendFunc.srcAlpha = c,
        this.blendFunc.dstAlpha = f,
        a && (this.transparent = !0)
    }
    setBlendEquation(a, b) {
        this.blendEquation.modeRGB = a,
        this.blendEquation.modeAlpha = b
    }
    applyState() {
        this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
        this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
        this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
        this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
        this.gl.renderer.setFrontFace(this.frontFace),
        this.gl.renderer.setDepthMask(this.depthWrite),
        this.gl.renderer.setDepthFunc(this.depthFunc),
        this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
        this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
    }
    use({flipFaces: a=!1}={}) {
        let b = -1;
        const c = this.gl.renderer.currentProgram === this.id;
        c || (this.gl.useProgram(this.program),
        this.gl.renderer.currentProgram = this.id),
        this.uniformLocations.forEach((f,e)=>{
            let h = e.uniformName
              , i = this.uniforms[h];
            e.isStruct && (i = i[e.structProperty],
            h += `.${e.structProperty}`),
            e.isStructArray && (i = i[e.structIndex][e.structProperty],
            h += `[${e.structIndex}].${e.structProperty}`);
            if (!i)
                return pb(`Active uniform ${h} has not been supplied`);
            if (i && i.value === void 0)
                return pb(`${h} uniform is missing a value parameter`);
            if (i.value.texture)
                return b = b + 1,
                i.value.update(b),
                Ea(this.gl, e.type, f, b);
            if (i.value.length && i.value[0].texture) {
                const n = [];
                return i.value.forEach(m=>{
                    b = b + 1,
                    m.update(b),
                    n.push(b)
                }
                ),
                Ea(this.gl, e.type, f, n)
            }
            Ea(this.gl, e.type, f, i.value)
        }
        ),
        this.applyState(),
        a && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
    }
    remove() {
        this.gl.deleteProgram(this.program)
    }
}
function Ea(a, b, c, f) {
    f = f.length ? Id(f) : f;
    const e = a.renderer.state.uniformLocations.get(c);
    if (f.length)
        if (e === void 0 || e.length !== f.length)
            a.renderer.state.uniformLocations.set(c, f.slice(0));
        else {
            if (Jd(e, f))
                return;
            e.set ? e.set(f) : Kd(e, f),
            a.renderer.state.uniformLocations.set(c, e)
        }
    else {
        if (e === f)
            return;
        a.renderer.state.uniformLocations.set(c, f)
    }
    switch (b) {
    case 5126:
        return f.length ? a.uniform1fv(c, f) : a.uniform1f(c, f);
    case 35664:
        return a.uniform2fv(c, f);
    case 35665:
        return a.uniform3fv(c, f);
    case 35666:
        return a.uniform4fv(c, f);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
        return f.length ? a.uniform1iv(c, f) : a.uniform1i(c, f);
    case 35671:
    case 35667:
        return a.uniform2iv(c, f);
    case 35672:
    case 35668:
        return a.uniform3iv(c, f);
    case 35673:
    case 35669:
        return a.uniform4iv(c, f);
    case 35674:
        return a.uniformMatrix2fv(c, !1, f);
    case 35675:
        return a.uniformMatrix3fv(c, !1, f);
    case 35676:
        return a.uniformMatrix4fv(c, !1, f)
    }
}
function ob(a) {
    let b = a.split(`
`);
    for (let c = 0; c < b.length; c++)
        b[c] = c + 1 + ": " + b[c];
    return b.join(`
`)
}
function Id(a) {
    const b = a.length
      , c = a[0].length;
    if (c === void 0)
        return a;
    const f = b * c;
    let e = mb[f];
    e || (mb[f] = e = new Float32Array(f));
    for (let h = 0; h < b; h++)
        e.set(a[h], h * c);
    return e
}
function Jd(a, b) {
    if (a.length !== b.length)
        return !1;
    for (let c = 0, f = a.length; c < f; c++)
        if (a[c] !== b[c])
            return !1;
    return !0
}
function Kd(a, b) {
    for (let c = 0, f = a.length; c < f; c++)
        a[c] = b[c]
}
let Fa = 0;
function pb(a) {
    if (Fa > 100)
        return;
    console.warn(a),
    Fa++,
    Fa > 100 && console.warn("More than 100 program warnings - stopping logs.")
}
const Ga = new V();
let Ld = 1;
class rb {
    constructor({canvas: a=document.createElement("canvas"), width: b=300, height: c=150, dpr: f=1, alpha: e=!1, depth: h=!0, stencil: i=!1, antialias: n=!1, premultipliedAlpha: m=!1, preserveDrawingBuffer: q=!1, powerPreference: s="default", autoClear: u=!0, webgl: r=2}={}) {
        const t = {
            alpha: e,
            depth: h,
            stencil: i,
            antialias: n,
            premultipliedAlpha: m,
            preserveDrawingBuffer: q,
            powerPreference: s
        };
        this.dpr = f,
        this.alpha = e,
        this.color = !0,
        this.depth = h,
        this.stencil = i,
        this.premultipliedAlpha = m,
        this.autoClear = u,
        this.id = Ld++,
        r === 2 && (this.gl = a.getContext("webgl2", t)),
        this.isWebgl2 = !!this.gl,
        this.gl || (this.gl = a.getContext("webgl", t) || a.getContext("experimental-webgl", t)),
        this.gl.renderer = this,
        this.setSize(b, c),
        this.state = {},
        this.state.blendFunc = {
            src: this.gl.ONE,
            dst: this.gl.ZERO
        },
        this.state.blendEquation = {
            modeRGB: this.gl.FUNC_ADD
        },
        this.state.cullFace = null,
        this.state.frontFace = this.gl.CCW,
        this.state.depthMask = !0,
        this.state.depthFunc = this.gl.LESS,
        this.state.premultiplyAlpha = !1,
        this.state.flipY = !1,
        this.state.unpackAlignment = 4,
        this.state.framebuffer = null,
        this.state.viewport = {
            width: null,
            height: null
        },
        this.state.textureUnits = [],
        this.state.activeTextureUnit = 0,
        this.state.boundBuffer = null,
        this.state.uniformLocations = new Map(),
        this.extensions = {},
        this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"),
        this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"),
        this.getExtension("OES_texture_float_linear"),
        this.getExtension("OES_texture_half_float"),
        this.getExtension("OES_texture_half_float_linear"),
        this.getExtension("OES_element_index_uint"),
        this.getExtension("OES_standard_derivatives"),
        this.getExtension("EXT_sRGB"),
        this.getExtension("WEBGL_depth_texture"),
        this.getExtension("WEBGL_draw_buffers")),
        this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"),
        this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"),
        this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"),
        this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"),
        this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"),
        this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"),
        this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"),
        this.parameters = {},
        this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
        this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
    }
    setSize(a, b) {
        this.width = a,
        this.height = b,
        this.gl.canvas.width = a * this.dpr,
        this.gl.canvas.height = b * this.dpr,
        Object.assign(this.gl.canvas.style, {
            width: a + "px",
            height: b + "px"
        })
    }
    setViewport(a, b) {
        if (this.state.viewport.width === a && this.state.viewport.height === b)
            return;
        this.state.viewport.width = a,
        this.state.viewport.height = b,
        this.gl.viewport(0, 0, a, b)
    }
    enable(a) {
        if (this.state[a] === !0)
            return;
        this.gl.enable(a),
        this.state[a] = !0
    }
    disable(a) {
        if (this.state[a] === !1)
            return;
        this.gl.disable(a),
        this.state[a] = !1
    }
    setBlendFunc(a, b, c, f) {
        if (this.state.blendFunc.src === a && this.state.blendFunc.dst === b && this.state.blendFunc.srcAlpha === c && this.state.blendFunc.dstAlpha === f)
            return;
        this.state.blendFunc.src = a,
        this.state.blendFunc.dst = b,
        this.state.blendFunc.srcAlpha = c,
        this.state.blendFunc.dstAlpha = f,
        c !== void 0 ? this.gl.blendFuncSeparate(a, b, c, f) : this.gl.blendFunc(a, b)
    }
    setBlendEquation(a, b) {
        a = a || this.gl.FUNC_ADD;
        if (this.state.blendEquation.modeRGB === a && this.state.blendEquation.modeAlpha === b)
            return;
        this.state.blendEquation.modeRGB = a,
        this.state.blendEquation.modeAlpha = b,
        b !== void 0 ? this.gl.blendEquationSeparate(a, b) : this.gl.blendEquation(a)
    }
    setCullFace(a) {
        if (this.state.cullFace === a)
            return;
        this.state.cullFace = a,
        this.gl.cullFace(a)
    }
    setFrontFace(a) {
        if (this.state.frontFace === a)
            return;
        this.state.frontFace = a,
        this.gl.frontFace(a)
    }
    setDepthMask(a) {
        if (this.state.depthMask === a)
            return;
        this.state.depthMask = a,
        this.gl.depthMask(a)
    }
    setDepthFunc(a) {
        if (this.state.depthFunc === a)
            return;
        this.state.depthFunc = a,
        this.gl.depthFunc(a)
    }
    activeTexture(a) {
        if (this.state.activeTextureUnit === a)
            return;
        this.state.activeTextureUnit = a,
        this.gl.activeTexture(this.gl.TEXTURE0 + a)
    }
    bindFramebuffer({target: a=this.gl.FRAMEBUFFER, buffer: b=null}={}) {
        if (this.state.framebuffer === b)
            return;
        this.state.framebuffer = b,
        this.gl.bindFramebuffer(a, b)
    }
    getExtension(a, b, c) {
        return b && this.gl[b] ? this.gl[b].bind(this.gl) : (this.extensions[a] || (this.extensions[a] = this.gl.getExtension(a)),
        b ? this.extensions[a] ? this.extensions[a][c].bind(this.extensions[a]) : null : this.extensions[a])
    }
    sortOpaque(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program.id !== b.program.id ? a.program.id - b.program.id : a.zDepth !== b.zDepth ? a.zDepth - b.zDepth : b.id - a.id
    }
    sortTransparent(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.zDepth !== b.zDepth ? b.zDepth - a.zDepth : b.id - a.id
    }
    sortUI(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program.id !== b.program.id ? a.program.id - b.program.id : b.id - a.id
    }
    getRenderList({scene: a, camera: b, frustumCull: c, sort: f}) {
        let e = [];
        b && c && b.updateFrustum(),
        a.traverse(h=>{
            if (!h.visible)
                return !0;
            if (!h.draw)
                return;
            if (c && h.frustumCulled && b) {
                if (!b.frustumIntersectsMesh(h))
                    return
            }
            e.push(h)
        }
        );
        if (f) {
            const h = []
              , i = []
              , n = [];
            e.forEach(m=>{
                m.program.transparent ? m.program.depthTest ? i.push(m) : n.push(m) : h.push(m),
                m.zDepth = 0;
                if (m.renderOrder !== 0 || !m.program.depthTest || !b)
                    return;
                m.worldMatrix.getTranslation(Ga),
                Ga.applyMatrix4(b.projectionViewMatrix),
                m.zDepth = Ga.z
            }
            ),
            h.sort(this.sortOpaque),
            i.sort(this.sortTransparent),
            n.sort(this.sortUI),
            e = h.concat(i, n)
        }
        return e
    }
    render({scene: a, camera: b, target: c=null, update: f=!0, sort: e=!0, frustumCull: h=!0, clear: i}) {
        c === null ? (this.bindFramebuffer(),
        this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(c),
        this.setViewport(c.width, c.height)),
        (i || this.autoClear && i !== !1) && (this.depth && (!c || c.depth) && (this.enable(this.gl.DEPTH_TEST),
        this.setDepthMask(!0)),
        this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
        f && a.updateMatrixWorld(),
        b && b.updateMatrixWorld();
        const n = this.getRenderList({
            scene: a,
            camera: b,
            frustumCull: h,
            sort: e
        });
        n.forEach(m=>{
            m.draw({
                camera: b
            })
        }
        )
    }
}
function Oc(a, b) {
    return a[0] = b[0],
    a[1] = b[1],
    a[2] = b[2],
    a[3] = b[3],
    a
}
function Nc(a, b, c, f, e) {
    return a[0] = b,
    a[1] = c,
    a[2] = f,
    a[3] = e,
    a
}
function Sc(a, b, c) {
    return a[0] = b[0] + c[0],
    a[1] = b[1] + c[1],
    a[2] = b[2] + c[2],
    a[3] = b[3] + c[3],
    a
}
function Tc(a, b, c) {
    return a[0] = b[0] * c,
    a[1] = b[1] * c,
    a[2] = b[2] * c,
    a[3] = b[3] * c,
    a
}
function Wc(a) {
    let b = a[0]
      , c = a[1]
      , f = a[2]
      , e = a[3];
    return Math.sqrt(b * b + c * c + f * f + e * e)
}
function Pc(a, b) {
    let c = b[0]
      , f = b[1]
      , e = b[2]
      , h = b[3]
      , i = c * c + f * f + e * e + h * h;
    return i > 0 && (i = 1 / Math.sqrt(i)),
    a[0] = c * i,
    a[1] = f * i,
    a[2] = e * i,
    a[3] = h * i,
    a
}
function Uc(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
}
function Vc(a, b, c, f) {
    let e = b[0]
      , h = b[1]
      , i = b[2]
      , n = b[3];
    return a[0] = e + f * (c[0] - e),
    a[1] = h + f * (c[1] - h),
    a[2] = i + f * (c[2] - i),
    a[3] = n + f * (c[3] - n),
    a
}
function Zb(a) {
    return a[0] = 0,
    a[1] = 0,
    a[2] = 0,
    a[3] = 1,
    a
}
function jc(a, b, c) {
    c = c * .5;
    let f = Math.sin(c);
    return a[0] = f * b[0],
    a[1] = f * b[1],
    a[2] = f * b[2],
    a[3] = Math.cos(c),
    a
}
function Ma(a, b, c) {
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = b[3]
      , n = c[0]
      , m = c[1]
      , q = c[2]
      , s = c[3];
    return a[0] = f * s + i * n + e * q - h * m,
    a[1] = e * s + i * m + h * n - f * q,
    a[2] = h * s + i * q + f * m - e * n,
    a[3] = i * s - f * n - e * m - h * q,
    a
}
function $b(a, b, c) {
    c *= .5;
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = b[3]
      , n = Math.sin(c)
      , m = Math.cos(c);
    return a[0] = f * m + i * n,
    a[1] = e * m + h * n,
    a[2] = h * m - e * n,
    a[3] = i * m - f * n,
    a
}
function ac(a, b, c) {
    c *= .5;
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = b[3]
      , n = Math.sin(c)
      , m = Math.cos(c);
    return a[0] = f * m - h * n,
    a[1] = e * m + i * n,
    a[2] = h * m + f * n,
    a[3] = i * m - e * n,
    a
}
function bc(a, b, c) {
    c *= .5;
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = b[3]
      , n = Math.sin(c)
      , m = Math.cos(c);
    return a[0] = f * m + e * n,
    a[1] = e * m - f * n,
    a[2] = h * m + i * n,
    a[3] = i * m - h * n,
    a
}
function kc(a, b, c, f) {
    let e = b[0], h = b[1], i = b[2], n = b[3], m = c[0], q = c[1], s = c[2], u = c[3], r, t, w, y, x;
    return t = e * m + h * q + i * s + n * u,
    t < 0 && (t = -t,
    m = -m,
    q = -q,
    s = -s,
    u = -u),
    1 - t > 1e-6 ? (r = Math.acos(t),
    w = Math.sin(r),
    y = Math.sin((1 - f) * r) / w,
    x = Math.sin(f * r) / w) : (y = 1 - f,
    x = f),
    a[0] = y * e + x * m,
    a[1] = y * h + x * q,
    a[2] = y * i + x * s,
    a[3] = y * n + x * u,
    a
}
function cc(a, b) {
    let c = b[0]
      , f = b[1]
      , e = b[2]
      , h = b[3]
      , i = c * c + f * f + e * e + h * h
      , n = i ? 1 / i : 0;
    return a[0] = -c * n,
    a[1] = -f * n,
    a[2] = -e * n,
    a[3] = h * n,
    a
}
function dc(a, b) {
    return a[0] = -b[0],
    a[1] = -b[1],
    a[2] = -b[2],
    a[3] = b[3],
    a
}
function hc(a, b) {
    let c = b[0] + b[4] + b[8], f;
    if (c > 0)
        f = Math.sqrt(c + 1),
        a[3] = .5 * f,
        f = .5 / f,
        a[0] = (b[5] - b[7]) * f,
        a[1] = (b[6] - b[2]) * f,
        a[2] = (b[1] - b[3]) * f;
    else {
        let e = 0;
        b[4] > b[0] && (e = 1),
        b[8] > b[e * 3 + e] && (e = 2);
        let h = (e + 1) % 3
          , i = (e + 2) % 3;
        f = Math.sqrt(b[e * 3 + e] - b[h * 3 + h] - b[i * 3 + i] + 1),
        a[e] = .5 * f,
        f = .5 / f,
        a[3] = (b[h * 3 + i] - b[i * 3 + h]) * f,
        a[h] = (b[h * 3 + e] + b[e * 3 + h]) * f,
        a[i] = (b[i * 3 + e] + b[e * 3 + i]) * f
    }
    return a
}
function ic(a, b, c="YXZ") {
    let f = Math.sin(b[0] * .5)
      , e = Math.cos(b[0] * .5)
      , h = Math.sin(b[1] * .5)
      , i = Math.cos(b[1] * .5)
      , n = Math.sin(b[2] * .5)
      , m = Math.cos(b[2] * .5);
    return c === "XYZ" ? (a[0] = f * i * m + e * h * n,
    a[1] = e * h * m - f * i * n,
    a[2] = e * i * n + f * h * m,
    a[3] = e * i * m - f * h * n) : c === "YXZ" ? (a[0] = f * i * m + e * h * n,
    a[1] = e * h * m - f * i * n,
    a[2] = e * i * n - f * h * m,
    a[3] = e * i * m + f * h * n) : c === "ZXY" ? (a[0] = f * i * m - e * h * n,
    a[1] = e * h * m + f * i * n,
    a[2] = e * i * n + f * h * m,
    a[3] = e * i * m - f * h * n) : c === "ZYX" ? (a[0] = f * i * m - e * h * n,
    a[1] = e * h * m + f * i * n,
    a[2] = e * i * n - f * h * m,
    a[3] = e * i * m + f * h * n) : c === "YZX" ? (a[0] = f * i * m + e * h * n,
    a[1] = e * h * m + f * i * n,
    a[2] = e * i * n - f * h * m,
    a[3] = e * i * m - f * h * n) : c === "XZY" && (a[0] = f * i * m - e * h * n,
    a[1] = e * h * m - f * i * n,
    a[2] = e * i * n + f * h * m,
    a[3] = e * i * m + f * h * n),
    a
}
const ec = Oc
  , _b = Nc
  , Gg = Sc
  , Hg = Tc
  , gc = Uc
  , Ig = Vc
  , Jg = Wc
  , fc = Pc;
class ub extends Array {
    constructor(a=0, b=0, c=0, f=1) {
        return super(a, b, c, f),
        this.onChange = ()=>{}
        ,
        this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    get w() {
        return this[3]
    }
    set x(a) {
        this[0] = a,
        this.onChange()
    }
    set y(a) {
        this[1] = a,
        this.onChange()
    }
    set z(a) {
        this[2] = a,
        this.onChange()
    }
    set w(a) {
        this[3] = a,
        this.onChange()
    }
    identity() {
        return Zb(this),
        this.onChange(),
        this
    }
    set(a, b, c, f) {
        return a.length ? this.copy(a) : (_b(this, a, b, c, f),
        this.onChange(),
        this)
    }
    rotateX(a) {
        return $b(this, this, a),
        this.onChange(),
        this
    }
    rotateY(a) {
        return ac(this, this, a),
        this.onChange(),
        this
    }
    rotateZ(a) {
        return bc(this, this, a),
        this.onChange(),
        this
    }
    inverse(a=this) {
        return cc(this, a),
        this.onChange(),
        this
    }
    conjugate(a=this) {
        return dc(this, a),
        this.onChange(),
        this
    }
    copy(a) {
        return ec(this, a),
        this.onChange(),
        this
    }
    normalize(a=this) {
        return fc(this, a),
        this.onChange(),
        this
    }
    multiply(a, b) {
        return b ? Ma(this, a, b) : Ma(this, this, a),
        this.onChange(),
        this
    }
    dot(a) {
        return gc(this, a)
    }
    fromMatrix3(a) {
        return hc(this, a),
        this.onChange(),
        this
    }
    fromEuler(a) {
        return ic(this, a, a.order),
        this
    }
    fromAxisAngle(a, b) {
        return jc(this, a, b),
        this
    }
    slerp(a, b) {
        return kc(this, this, a, b),
        this
    }
    fromArray(a, b=0) {
        return this[0] = a[b],
        this[1] = a[b + 1],
        this[2] = a[b + 2],
        this[3] = a[b + 3],
        this
    }
    toArray(a=[], b=0) {
        return a[b] = this[0],
        a[b + 1] = this[1],
        a[b + 2] = this[2],
        a[b + 3] = this[3],
        a
    }
}
const Od = 1e-6;
function Ob(a, b) {
    return a[0] = b[0],
    a[1] = b[1],
    a[2] = b[2],
    a[3] = b[3],
    a[4] = b[4],
    a[5] = b[5],
    a[6] = b[6],
    a[7] = b[7],
    a[8] = b[8],
    a[9] = b[9],
    a[10] = b[10],
    a[11] = b[11],
    a[12] = b[12],
    a[13] = b[13],
    a[14] = b[14],
    a[15] = b[15],
    a
}
function Jb(a, b, c, f, e, h, i, n, m, q, s, u, r, t, w, y, x) {
    return a[0] = b,
    a[1] = c,
    a[2] = f,
    a[3] = e,
    a[4] = h,
    a[5] = i,
    a[6] = n,
    a[7] = m,
    a[8] = q,
    a[9] = s,
    a[10] = u,
    a[11] = r,
    a[12] = t,
    a[13] = w,
    a[14] = y,
    a[15] = x,
    a
}
function Nb(a) {
    return a[0] = 1,
    a[1] = 0,
    a[2] = 0,
    a[3] = 0,
    a[4] = 0,
    a[5] = 1,
    a[6] = 0,
    a[7] = 0,
    a[8] = 0,
    a[9] = 0,
    a[10] = 1,
    a[11] = 0,
    a[12] = 0,
    a[13] = 0,
    a[14] = 0,
    a[15] = 1,
    a
}
function Sb(a, b) {
    let c = b[0]
      , f = b[1]
      , e = b[2]
      , h = b[3]
      , i = b[4]
      , n = b[5]
      , m = b[6]
      , q = b[7]
      , s = b[8]
      , u = b[9]
      , r = b[10]
      , t = b[11]
      , w = b[12]
      , y = b[13]
      , x = b[14]
      , v = b[15]
      , H = c * n - f * i
      , D = c * m - e * i
      , C = c * q - h * i
      , G = f * m - e * n
      , E = f * q - h * n
      , T = e * q - h * m
      , K = s * y - u * w
      , p = s * x - r * w
      , P = s * v - t * w
      , R = u * x - r * y
      , Q = u * v - t * y
      , S = r * v - t * x
      , F = H * S - D * Q + C * R + G * P - E * p + T * K;
    return F ? (F = 1 / F,
    a[0] = (n * S - m * Q + q * R) * F,
    a[1] = (e * Q - f * S - h * R) * F,
    a[2] = (y * T - x * E + v * G) * F,
    a[3] = (r * E - u * T - t * G) * F,
    a[4] = (m * P - i * S - q * p) * F,
    a[5] = (c * S - e * P + h * p) * F,
    a[6] = (x * C - w * T - v * D) * F,
    a[7] = (s * T - r * C + t * D) * F,
    a[8] = (i * Q - n * P + q * K) * F,
    a[9] = (f * P - c * Q - h * K) * F,
    a[10] = (w * E - y * C + v * H) * F,
    a[11] = (u * C - s * E - t * H) * F,
    a[12] = (n * p - i * R - m * K) * F,
    a[13] = (c * R - f * p + e * K) * F,
    a[14] = (y * D - w * G - x * H) * F,
    a[15] = (s * G - u * D + r * H) * F,
    a) : null
}
function Yb(a) {
    let b = a[0]
      , c = a[1]
      , f = a[2]
      , e = a[3]
      , h = a[4]
      , i = a[5]
      , n = a[6]
      , m = a[7]
      , q = a[8]
      , s = a[9]
      , u = a[10]
      , r = a[11]
      , t = a[12]
      , w = a[13]
      , y = a[14]
      , x = a[15]
      , v = b * i - c * h
      , H = b * n - f * h
      , D = b * m - e * h
      , C = c * n - f * i
      , G = c * m - e * i
      , E = f * m - e * n
      , T = q * w - s * t
      , K = q * y - u * t
      , p = q * x - r * t
      , P = s * y - u * w
      , R = s * x - r * w
      , Q = u * x - r * y;
    return v * Q - H * R + D * P + C * p - G * K + E * T
}
function Ka(a, b, c) {
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = b[3]
      , n = b[4]
      , m = b[5]
      , q = b[6]
      , s = b[7]
      , u = b[8]
      , r = b[9]
      , t = b[10]
      , w = b[11]
      , y = b[12]
      , x = b[13]
      , v = b[14]
      , H = b[15]
      , D = c[0]
      , C = c[1]
      , G = c[2]
      , E = c[3];
    return a[0] = D * f + C * n + G * u + E * y,
    a[1] = D * e + C * m + G * r + E * x,
    a[2] = D * h + C * q + G * t + E * v,
    a[3] = D * i + C * s + G * w + E * H,
    D = c[4],
    C = c[5],
    G = c[6],
    E = c[7],
    a[4] = D * f + C * n + G * u + E * y,
    a[5] = D * e + C * m + G * r + E * x,
    a[6] = D * h + C * q + G * t + E * v,
    a[7] = D * i + C * s + G * w + E * H,
    D = c[8],
    C = c[9],
    G = c[10],
    E = c[11],
    a[8] = D * f + C * n + G * u + E * y,
    a[9] = D * e + C * m + G * r + E * x,
    a[10] = D * h + C * q + G * t + E * v,
    a[11] = D * i + C * s + G * w + E * H,
    D = c[12],
    C = c[13],
    G = c[14],
    E = c[15],
    a[12] = D * f + C * n + G * u + E * y,
    a[13] = D * e + C * m + G * r + E * x,
    a[14] = D * h + C * q + G * t + E * v,
    a[15] = D * i + C * s + G * w + E * H,
    a
}
function Kb(a, b, c) {
    let f = c[0], e = c[1], h = c[2], i, n, m, q, s, u, r, t, w, y, x, v;
    return b === a ? (a[12] = b[0] * f + b[4] * e + b[8] * h + b[12],
    a[13] = b[1] * f + b[5] * e + b[9] * h + b[13],
    a[14] = b[2] * f + b[6] * e + b[10] * h + b[14],
    a[15] = b[3] * f + b[7] * e + b[11] * h + b[15]) : (i = b[0],
    n = b[1],
    m = b[2],
    q = b[3],
    s = b[4],
    u = b[5],
    r = b[6],
    t = b[7],
    w = b[8],
    y = b[9],
    x = b[10],
    v = b[11],
    a[0] = i,
    a[1] = n,
    a[2] = m,
    a[3] = q,
    a[4] = s,
    a[5] = u,
    a[6] = r,
    a[7] = t,
    a[8] = w,
    a[9] = y,
    a[10] = x,
    a[11] = v,
    a[12] = i * f + s * e + w * h + b[12],
    a[13] = n * f + u * e + y * h + b[13],
    a[14] = m * f + r * e + x * h + b[14],
    a[15] = q * f + t * e + v * h + b[15]),
    a
}
function Mb(a, b, c) {
    let f = c[0]
      , e = c[1]
      , h = c[2];
    return a[0] = b[0] * f,
    a[1] = b[1] * f,
    a[2] = b[2] * f,
    a[3] = b[3] * f,
    a[4] = b[4] * e,
    a[5] = b[5] * e,
    a[6] = b[6] * e,
    a[7] = b[7] * e,
    a[8] = b[8] * h,
    a[9] = b[9] * h,
    a[10] = b[10] * h,
    a[11] = b[11] * h,
    a[12] = b[12],
    a[13] = b[13],
    a[14] = b[14],
    a[15] = b[15],
    a
}
function Lb(a, b, c, f) {
    let e = f[0], h = f[1], i = f[2], n = Math.hypot(e, h, i), m, q, s, u, r, t, w, y, x, v, H, D, C, G, E, T, K, p, P, R, Q, S, F, _;
    return Math.abs(n) < Od ? null : (n = 1 / n,
    e *= n,
    h *= n,
    i *= n,
    m = Math.sin(c),
    q = Math.cos(c),
    s = 1 - q,
    u = b[0],
    r = b[1],
    t = b[2],
    w = b[3],
    y = b[4],
    x = b[5],
    v = b[6],
    H = b[7],
    D = b[8],
    C = b[9],
    G = b[10],
    E = b[11],
    T = e * e * s + q,
    K = h * e * s + i * m,
    p = i * e * s - h * m,
    P = e * h * s - i * m,
    R = h * h * s + q,
    Q = i * h * s + e * m,
    S = e * i * s + h * m,
    F = h * i * s - e * m,
    _ = i * i * s + q,
    a[0] = u * T + y * K + D * p,
    a[1] = r * T + x * K + C * p,
    a[2] = t * T + v * K + G * p,
    a[3] = w * T + H * K + E * p,
    a[4] = u * P + y * R + D * Q,
    a[5] = r * P + x * R + C * Q,
    a[6] = t * P + v * R + G * Q,
    a[7] = w * P + H * R + E * Q,
    a[8] = u * S + y * F + D * _,
    a[9] = r * S + x * F + C * _,
    a[10] = t * S + v * F + G * _,
    a[11] = w * S + H * F + E * _,
    b !== a && (a[12] = b[12],
    a[13] = b[13],
    a[14] = b[14],
    a[15] = b[15]),
    a)
}
function Vb(a, b) {
    return a[0] = b[12],
    a[1] = b[13],
    a[2] = b[14],
    a
}
function La(a, b) {
    let c = b[0]
      , f = b[1]
      , e = b[2]
      , h = b[4]
      , i = b[5]
      , n = b[6]
      , m = b[8]
      , q = b[9]
      , s = b[10];
    return a[0] = Math.hypot(c, f, e),
    a[1] = Math.hypot(h, i, n),
    a[2] = Math.hypot(m, q, s),
    a
}
function Wb(a) {
    let b = a[0]
      , c = a[1]
      , f = a[2]
      , e = a[4]
      , h = a[5]
      , i = a[6]
      , n = a[8]
      , m = a[9]
      , q = a[10];
    const s = b * b + c * c + f * f
      , u = e * e + h * h + i * i
      , r = n * n + m * m + q * q;
    return Math.sqrt(Math.max(s, u, r))
}
const Ub = function() {
    const a = [0, 0, 0];
    return function(b, c) {
        let f = a;
        La(f, c);
        let e = 1 / f[0]
          , h = 1 / f[1]
          , i = 1 / f[2]
          , n = c[0] * e
          , m = c[1] * h
          , q = c[2] * i
          , s = c[4] * e
          , u = c[5] * h
          , r = c[6] * i
          , t = c[8] * e
          , w = c[9] * h
          , y = c[10] * i
          , x = n + u + y
          , v = 0;
        return x > 0 ? (v = Math.sqrt(x + 1) * 2,
        b[3] = .25 * v,
        b[0] = (r - w) / v,
        b[1] = (t - q) / v,
        b[2] = (m - s) / v) : n > u && n > y ? (v = Math.sqrt(1 + n - u - y) * 2,
        b[3] = (r - w) / v,
        b[0] = .25 * v,
        b[1] = (m + s) / v,
        b[2] = (t + q) / v) : u > y ? (v = Math.sqrt(1 + u - n - y) * 2,
        b[3] = (t - q) / v,
        b[0] = (m + s) / v,
        b[1] = .25 * v,
        b[2] = (r + w) / v) : (v = Math.sqrt(1 + y - n - u) * 2,
        b[3] = (m - s) / v,
        b[0] = (t + q) / v,
        b[1] = (r + w) / v,
        b[2] = .25 * v),
        b
    }
}();
function Tb(a, b, c, f) {
    let e = b[0]
      , h = b[1]
      , i = b[2]
      , n = b[3]
      , m = e + e
      , q = h + h
      , s = i + i
      , u = e * m
      , r = e * q
      , t = e * s
      , w = h * q
      , y = h * s
      , x = i * s
      , v = n * m
      , H = n * q
      , D = n * s
      , C = f[0]
      , G = f[1]
      , E = f[2];
    return a[0] = (1 - (w + x)) * C,
    a[1] = (r + D) * C,
    a[2] = (t - H) * C,
    a[3] = 0,
    a[4] = (r - D) * G,
    a[5] = (1 - (u + x)) * G,
    a[6] = (y + v) * G,
    a[7] = 0,
    a[8] = (t + H) * E,
    a[9] = (y - v) * E,
    a[10] = (1 - (u + w)) * E,
    a[11] = 0,
    a[12] = c[0],
    a[13] = c[1],
    a[14] = c[2],
    a[15] = 1,
    a
}
function Rb(a, b) {
    let c = b[0]
      , f = b[1]
      , e = b[2]
      , h = b[3]
      , i = c + c
      , n = f + f
      , m = e + e
      , q = c * i
      , s = f * i
      , u = f * n
      , r = e * i
      , t = e * n
      , w = e * m
      , y = h * i
      , x = h * n
      , v = h * m;
    return a[0] = 1 - u - w,
    a[1] = s + v,
    a[2] = r - x,
    a[3] = 0,
    a[4] = s - v,
    a[5] = 1 - q - w,
    a[6] = t + y,
    a[7] = 0,
    a[8] = r + x,
    a[9] = t - y,
    a[10] = 1 - q - u,
    a[11] = 0,
    a[12] = 0,
    a[13] = 0,
    a[14] = 0,
    a[15] = 1,
    a
}
function Pb(a, b, c, f, e) {
    let h = 1 / Math.tan(b / 2)
      , i = 1 / (f - e);
    return a[0] = h / c,
    a[1] = 0,
    a[2] = 0,
    a[3] = 0,
    a[4] = 0,
    a[5] = h,
    a[6] = 0,
    a[7] = 0,
    a[8] = 0,
    a[9] = 0,
    a[10] = (e + f) * i,
    a[11] = -1,
    a[12] = 0,
    a[13] = 0,
    a[14] = 2 * e * f * i,
    a[15] = 0,
    a
}
function Qb(a, b, c, f, e, h, i) {
    let n = 1 / (b - c)
      , m = 1 / (f - e)
      , q = 1 / (h - i);
    return a[0] = -2 * n,
    a[1] = 0,
    a[2] = 0,
    a[3] = 0,
    a[4] = 0,
    a[5] = -2 * m,
    a[6] = 0,
    a[7] = 0,
    a[8] = 0,
    a[9] = 0,
    a[10] = 2 * q,
    a[11] = 0,
    a[12] = (b + c) * n,
    a[13] = (e + f) * m,
    a[14] = (i + h) * q,
    a[15] = 1,
    a
}
function Xb(a, b, c, f) {
    let e = b[0]
      , h = b[1]
      , i = b[2]
      , n = f[0]
      , m = f[1]
      , q = f[2]
      , s = e - c[0]
      , u = h - c[1]
      , r = i - c[2]
      , t = s * s + u * u + r * r;
    t === 0 ? r = 1 : (t = 1 / Math.sqrt(t),
    s *= t,
    u *= t,
    r *= t);
    let w = m * r - q * u
      , y = q * s - n * r
      , x = n * u - m * s;
    return t = w * w + y * y + x * x,
    t === 0 && (q ? n += 1e-6 : m ? q += 1e-6 : m += 1e-6,
    w = m * r - q * u,
    y = q * s - n * r,
    x = n * u - m * s,
    t = w * w + y * y + x * x),
    t = 1 / Math.sqrt(t),
    w *= t,
    y *= t,
    x *= t,
    a[0] = w,
    a[1] = y,
    a[2] = x,
    a[3] = 0,
    a[4] = u * x - r * y,
    a[5] = r * w - s * x,
    a[6] = s * y - u * w,
    a[7] = 0,
    a[8] = s,
    a[9] = u,
    a[10] = r,
    a[11] = 0,
    a[12] = e,
    a[13] = h,
    a[14] = i,
    a[15] = 1,
    a
}
class Z extends Array {
    constructor(a=1, b=0, c=0, f=0, e=0, h=1, i=0, n=0, m=0, q=0, s=1, u=0, r=0, t=0, w=0, y=1) {
        return super(a, b, c, f, e, h, i, n, m, q, s, u, r, t, w, y),
        this
    }
    get x() {
        return this[12]
    }
    get y() {
        return this[13]
    }
    get z() {
        return this[14]
    }
    get w() {
        return this[15]
    }
    set x(a) {
        this[12] = a
    }
    set y(a) {
        this[13] = a
    }
    set z(a) {
        this[14] = a
    }
    set w(a) {
        this[15] = a
    }
    set(a, b, c, f, e, h, i, n, m, q, s, u, r, t, w, y) {
        return a.length ? this.copy(a) : (Jb(this, a, b, c, f, e, h, i, n, m, q, s, u, r, t, w, y),
        this)
    }
    translate(a, b=this) {
        return Kb(this, b, a),
        this
    }
    rotate(a, b, c=this) {
        return Lb(this, c, a, b),
        this
    }
    scale(a, b=this) {
        return Mb(this, b, typeof a === "number" ? [a, a, a] : a),
        this
    }
    multiply(a, b) {
        return b ? Ka(this, a, b) : Ka(this, this, a),
        this
    }
    identity() {
        return Nb(this),
        this
    }
    copy(a) {
        return Ob(this, a),
        this
    }
    fromPerspective({fov: a, aspect: b, near: c, far: f}={}) {
        return Pb(this, a, b, c, f),
        this
    }
    fromOrthogonal({left: a, right: b, bottom: c, top: f, near: e, far: h}) {
        return Qb(this, a, b, c, f, e, h),
        this
    }
    fromQuaternion(a) {
        return Rb(this, a),
        this
    }
    setPosition(a) {
        return this.x = a[0],
        this.y = a[1],
        this.z = a[2],
        this
    }
    inverse(a=this) {
        return Sb(this, a),
        this
    }
    compose(a, b, c) {
        return Tb(this, a, b, c),
        this
    }
    getRotation(a) {
        return Ub(a, this),
        this
    }
    getTranslation(a) {
        return Vb(a, this),
        this
    }
    getScaling(a) {
        return La(a, this),
        this
    }
    getMaxScaleOnAxis() {
        return Wb(this)
    }
    lookAt(a, b, c) {
        return Xb(this, a, b, c),
        this
    }
    determinant() {
        return Yb(this)
    }
    fromArray(a, b=0) {
        return this[0] = a[b],
        this[1] = a[b + 1],
        this[2] = a[b + 2],
        this[3] = a[b + 3],
        this[4] = a[b + 4],
        this[5] = a[b + 5],
        this[6] = a[b + 6],
        this[7] = a[b + 7],
        this[8] = a[b + 8],
        this[9] = a[b + 9],
        this[10] = a[b + 10],
        this[11] = a[b + 11],
        this[12] = a[b + 12],
        this[13] = a[b + 13],
        this[14] = a[b + 14],
        this[15] = a[b + 15],
        this
    }
    toArray(a=[], b=0) {
        return a[b] = this[0],
        a[b + 1] = this[1],
        a[b + 2] = this[2],
        a[b + 3] = this[3],
        a[b + 4] = this[4],
        a[b + 5] = this[5],
        a[b + 6] = this[6],
        a[b + 7] = this[7],
        a[b + 8] = this[8],
        a[b + 9] = this[9],
        a[b + 10] = this[10],
        a[b + 11] = this[11],
        a[b + 12] = this[12],
        a[b + 13] = this[13],
        a[b + 14] = this[14],
        a[b + 15] = this[15],
        a
    }
}
function yb(a, b, c="YXZ") {
    return c === "XYZ" ? (a[1] = Math.asin(Math.min(Math.max(b[8], -1), 1)),
    Math.abs(b[8]) < .99999 ? (a[0] = Math.atan2(-b[9], b[10]),
    a[2] = Math.atan2(-b[4], b[0])) : (a[0] = Math.atan2(b[6], b[5]),
    a[2] = 0)) : c === "YXZ" ? (a[0] = Math.asin(-Math.min(Math.max(b[9], -1), 1)),
    Math.abs(b[9]) < .99999 ? (a[1] = Math.atan2(b[8], b[10]),
    a[2] = Math.atan2(b[1], b[5])) : (a[1] = Math.atan2(-b[2], b[0]),
    a[2] = 0)) : c === "ZXY" ? (a[0] = Math.asin(Math.min(Math.max(b[6], -1), 1)),
    Math.abs(b[6]) < .99999 ? (a[1] = Math.atan2(-b[2], b[10]),
    a[2] = Math.atan2(-b[4], b[5])) : (a[1] = 0,
    a[2] = Math.atan2(b[1], b[0]))) : c === "ZYX" ? (a[1] = Math.asin(-Math.min(Math.max(b[2], -1), 1)),
    Math.abs(b[2]) < .99999 ? (a[0] = Math.atan2(b[6], b[10]),
    a[2] = Math.atan2(b[1], b[0])) : (a[0] = 0,
    a[2] = Math.atan2(-b[4], b[5]))) : c === "YZX" ? (a[2] = Math.asin(Math.min(Math.max(b[1], -1), 1)),
    Math.abs(b[1]) < .99999 ? (a[0] = Math.atan2(-b[9], b[5]),
    a[1] = Math.atan2(-b[2], b[0])) : (a[0] = 0,
    a[1] = Math.atan2(b[8], b[10]))) : c === "XZY" && (a[2] = Math.asin(-Math.min(Math.max(b[4], -1), 1)),
    Math.abs(b[4]) < .99999 ? (a[0] = Math.atan2(b[6], b[5]),
    a[1] = Math.atan2(b[8], b[0])) : (a[0] = Math.atan2(-b[9], b[10]),
    a[1] = 0)),
    a
}
const xb = new Z();
class vb extends Array {
    constructor(a=0, b=a, c=a, f="YXZ") {
        return super(a, b, c),
        this.order = f,
        this.onChange = ()=>{}
        ,
        this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(a) {
        this[0] = a,
        this.onChange()
    }
    set y(a) {
        this[1] = a,
        this.onChange()
    }
    set z(a) {
        this[2] = a,
        this.onChange()
    }
    set(a, b=a, c=a) {
        return a.length ? this.copy(a) : (this[0] = a,
        this[1] = b,
        this[2] = c,
        this.onChange(),
        this)
    }
    copy(a) {
        return this[0] = a[0],
        this[1] = a[1],
        this[2] = a[2],
        this.onChange(),
        this
    }
    reorder(a) {
        return this.order = a,
        this.onChange(),
        this
    }
    fromRotationMatrix(a, b=this.order) {
        return yb(this, a, b),
        this
    }
    fromQuaternion(a, b=this.order) {
        return xb.fromQuaternion(a),
        this.fromRotationMatrix(xb, b)
    }
}
class gb {
    constructor() {
        this.parent = null,
        this.children = [],
        this.visible = !0,
        this.matrix = new Z(),
        this.worldMatrix = new Z(),
        this.matrixAutoUpdate = !0,
        this.position = new V(),
        this.quaternion = new ub(),
        this.scale = new V(1),
        this.rotation = new vb(),
        this.up = new V(0,1,0),
        this.rotation.onChange = ()=>this.quaternion.fromEuler(this.rotation),
        this.quaternion.onChange = ()=>this.rotation.fromQuaternion(this.quaternion)
    }
    setParent(a, b=!0) {
        b && this.parent && a !== this.parent && this.parent.removeChild(this, !1),
        this.parent = a,
        b && a && a.addChild(this, !1)
    }
    addChild(a, b=!0) {
        ~this.children.indexOf(a) || this.children.push(a),
        b && a.setParent(this, !1)
    }
    removeChild(a, b=!0) {
        ~this.children.indexOf(a) && this.children.splice(this.children.indexOf(a), 1),
        b && a.setParent(null, !1)
    }
    updateMatrixWorld(a) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.worldMatrixNeedsUpdate || a) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
        this.worldMatrixNeedsUpdate = !1,
        a = !0);
        for (let b = 0, c = this.children.length; b < c; b++)
            this.children[b].updateMatrixWorld(a)
    }
    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale),
        this.worldMatrixNeedsUpdate = !0
    }
    traverse(a) {
        if (a(this))
            return;
        for (let b = 0, c = this.children.length; b < c; b++)
            this.children[b].traverse(a)
    }
    decompose() {
        this.matrix.getTranslation(this.position),
        this.matrix.getRotation(this.quaternion),
        this.matrix.getScaling(this.scale),
        this.rotation.fromQuaternion(this.quaternion)
    }
    lookAt(a, b=!1) {
        b ? this.matrix.lookAt(this.position, a, this.up) : this.matrix.lookAt(a, this.position, this.up),
        this.matrix.getRotation(this.quaternion),
        this.rotation.fromQuaternion(this.quaternion)
    }
}
function Fb(a, b) {
    return a[0] = b[0],
    a[1] = b[1],
    a[2] = b[2],
    a[3] = b[4],
    a[4] = b[5],
    a[5] = b[6],
    a[6] = b[8],
    a[7] = b[9],
    a[8] = b[10],
    a
}
function Gb(a, b) {
    let c = b[0]
      , f = b[1]
      , e = b[2]
      , h = b[3]
      , i = c + c
      , n = f + f
      , m = e + e
      , q = c * i
      , s = f * i
      , u = f * n
      , r = e * i
      , t = e * n
      , w = e * m
      , y = h * i
      , x = h * n
      , v = h * m;
    return a[0] = 1 - u - w,
    a[3] = s - v,
    a[6] = r + x,
    a[1] = s + v,
    a[4] = 1 - q - w,
    a[7] = t - y,
    a[2] = r - x,
    a[5] = t + y,
    a[8] = 1 - q - u,
    a
}
function Eb(a, b) {
    return a[0] = b[0],
    a[1] = b[1],
    a[2] = b[2],
    a[3] = b[3],
    a[4] = b[4],
    a[5] = b[5],
    a[6] = b[6],
    a[7] = b[7],
    a[8] = b[8],
    a
}
function zb(a, b, c, f, e, h, i, n, m, q) {
    return a[0] = b,
    a[1] = c,
    a[2] = f,
    a[3] = e,
    a[4] = h,
    a[5] = i,
    a[6] = n,
    a[7] = m,
    a[8] = q,
    a
}
function Db(a) {
    return a[0] = 1,
    a[1] = 0,
    a[2] = 0,
    a[3] = 0,
    a[4] = 1,
    a[5] = 0,
    a[6] = 0,
    a[7] = 0,
    a[8] = 1,
    a
}
function Hb(a, b) {
    let c = b[0]
      , f = b[1]
      , e = b[2]
      , h = b[3]
      , i = b[4]
      , n = b[5]
      , m = b[6]
      , q = b[7]
      , s = b[8]
      , u = s * i - n * q
      , r = -s * h + n * m
      , t = q * h - i * m
      , w = c * u + f * r + e * t;
    return w ? (w = 1 / w,
    a[0] = u * w,
    a[1] = (-s * f + e * q) * w,
    a[2] = (n * f - e * i) * w,
    a[3] = r * w,
    a[4] = (s * c - e * m) * w,
    a[5] = (-n * c + e * h) * w,
    a[6] = t * w,
    a[7] = (-q * c + f * m) * w,
    a[8] = (i * c - f * h) * w,
    a) : null
}
function Ja(a, b, c) {
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = b[3]
      , n = b[4]
      , m = b[5]
      , q = b[6]
      , s = b[7]
      , u = b[8]
      , r = c[0]
      , t = c[1]
      , w = c[2]
      , y = c[3]
      , x = c[4]
      , v = c[5]
      , H = c[6]
      , D = c[7]
      , C = c[8];
    return a[0] = r * f + t * i + w * q,
    a[1] = r * e + t * n + w * s,
    a[2] = r * h + t * m + w * u,
    a[3] = y * f + x * i + v * q,
    a[4] = y * e + x * n + v * s,
    a[5] = y * h + x * m + v * u,
    a[6] = H * f + D * i + C * q,
    a[7] = H * e + D * n + C * s,
    a[8] = H * h + D * m + C * u,
    a
}
function Ab(a, b, c) {
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = b[3]
      , n = b[4]
      , m = b[5]
      , q = b[6]
      , s = b[7]
      , u = b[8]
      , r = c[0]
      , t = c[1];
    return a[0] = f,
    a[1] = e,
    a[2] = h,
    a[3] = i,
    a[4] = n,
    a[5] = m,
    a[6] = r * f + t * i + q,
    a[7] = r * e + t * n + s,
    a[8] = r * h + t * m + u,
    a
}
function Bb(a, b, c) {
    let f = b[0]
      , e = b[1]
      , h = b[2]
      , i = b[3]
      , n = b[4]
      , m = b[5]
      , q = b[6]
      , s = b[7]
      , u = b[8]
      , r = Math.sin(c)
      , t = Math.cos(c);
    return a[0] = t * f + r * i,
    a[1] = t * e + r * n,
    a[2] = t * h + r * m,
    a[3] = t * i - r * f,
    a[4] = t * n - r * e,
    a[5] = t * m - r * h,
    a[6] = q,
    a[7] = s,
    a[8] = u,
    a
}
function Cb(a, b, c) {
    let f = c[0]
      , e = c[1];
    return a[0] = f * b[0],
    a[1] = f * b[1],
    a[2] = f * b[2],
    a[3] = e * b[3],
    a[4] = e * b[4],
    a[5] = e * b[5],
    a[6] = b[6],
    a[7] = b[7],
    a[8] = b[8],
    a
}
function Ib(a, b) {
    let c = b[0]
      , f = b[1]
      , e = b[2]
      , h = b[3]
      , i = b[4]
      , n = b[5]
      , m = b[6]
      , q = b[7]
      , s = b[8]
      , u = b[9]
      , r = b[10]
      , t = b[11]
      , w = b[12]
      , y = b[13]
      , x = b[14]
      , v = b[15]
      , H = c * n - f * i
      , D = c * m - e * i
      , C = c * q - h * i
      , G = f * m - e * n
      , E = f * q - h * n
      , T = e * q - h * m
      , K = s * y - u * w
      , p = s * x - r * w
      , P = s * v - t * w
      , R = u * x - r * y
      , Q = u * v - t * y
      , S = r * v - t * x
      , F = H * S - D * Q + C * R + G * P - E * p + T * K;
    return F ? (F = 1 / F,
    a[0] = (n * S - m * Q + q * R) * F,
    a[1] = (m * P - i * S - q * p) * F,
    a[2] = (i * Q - n * P + q * K) * F,
    a[3] = (e * Q - f * S - h * R) * F,
    a[4] = (c * S - e * P + h * p) * F,
    a[5] = (f * P - c * Q - h * K) * F,
    a[6] = (y * T - x * E + v * G) * F,
    a[7] = (x * C - w * T - v * D) * F,
    a[8] = (w * E - y * C + v * H) * F,
    a) : null
}
class kb extends Array {
    constructor(a=1, b=0, c=0, f=0, e=1, h=0, i=0, n=0, m=1) {
        return super(a, b, c, f, e, h, i, n, m),
        this
    }
    set(a, b, c, f, e, h, i, n, m) {
        return a.length ? this.copy(a) : (zb(this, a, b, c, f, e, h, i, n, m),
        this)
    }
    translate(a, b=this) {
        return Ab(this, b, a),
        this
    }
    rotate(a, b=this) {
        return Bb(this, b, a),
        this
    }
    scale(a, b=this) {
        return Cb(this, b, a),
        this
    }
    multiply(a, b) {
        return b ? Ja(this, a, b) : Ja(this, this, a),
        this
    }
    identity() {
        return Db(this),
        this
    }
    copy(a) {
        return Eb(this, a),
        this
    }
    fromMatrix4(a) {
        return Fb(this, a),
        this
    }
    fromQuaternion(a) {
        return Gb(this, a),
        this
    }
    fromBasis(a, b, c) {
        return this.set(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]),
        this
    }
    inverse(a=this) {
        return Hb(this, a),
        this
    }
    getNormalMatrix(a) {
        return Ib(this, a),
        this
    }
}
let Gd = 0;
class lb extends gb {
    constructor(a, {geometry: b, program: c, mode: f=a.TRIANGLES, frustumCulled: e=!0, renderOrder: h=0}={}) {
        super();
        a.canvas || console.error("gl not passed as first argument to Mesh"),
        this.gl = a,
        this.id = Gd++,
        this.geometry = b,
        this.program = c,
        this.mode = f,
        this.frustumCulled = e,
        this.renderOrder = h,
        this.modelViewMatrix = new Z(),
        this.normalMatrix = new kb(),
        this.beforeRenderCallbacks = [],
        this.afterRenderCallbacks = []
    }
    onBeforeRender(a) {
        return this.beforeRenderCallbacks.push(a),
        this
    }
    onAfterRender(a) {
        return this.afterRenderCallbacks.push(a),
        this
    }
    draw({camera: a}={}) {
        this.beforeRenderCallbacks.forEach(c=>c && c({
            mesh: this,
            camera: a
        })),
        a && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
            modelMatrix: {
                value: null
            },
            viewMatrix: {
                value: null
            },
            modelViewMatrix: {
                value: null
            },
            normalMatrix: {
                value: null
            },
            projectionMatrix: {
                value: null
            },
            cameraPosition: {
                value: null
            }
        }),
        this.program.uniforms.projectionMatrix.value = a.projectionMatrix,
        this.program.uniforms.cameraPosition.value = a.worldPosition,
        this.program.uniforms.viewMatrix.value = a.viewMatrix,
        this.modelViewMatrix.multiply(a.viewMatrix, this.worldMatrix),
        this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
        this.program.uniforms.modelMatrix.value = this.worldMatrix,
        this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
        this.program.uniforms.normalMatrix.value = this.normalMatrix);
        let b = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({
            flipFaces: b
        }),
        this.geometry.draw({
            mode: this.mode,
            program: this.program
        }),
        this.afterRenderCallbacks.forEach(c=>c && c({
            mesh: this,
            camera: a
        }))
    }
}
const sb = new Uint8Array(4);
function tb(a) {
    return (a & a - 1) === 0
}
let Md = 1;
class qb {
    constructor(a, {image: b, target: c=a.TEXTURE_2D, type: f=a.UNSIGNED_BYTE, format: e=a.RGBA, internalFormat: h=e, wrapS: i=a.CLAMP_TO_EDGE, wrapT: n=a.CLAMP_TO_EDGE, generateMipmaps: m=!0, minFilter: q=m ? a.NEAREST_MIPMAP_LINEAR : a.LINEAR, magFilter: s=a.LINEAR, premultiplyAlpha: u=!1, unpackAlignment: r=4, flipY: t=c == a.TEXTURE_2D ? !0 : !1, anisotropy: w=0, level: y=0, width: x, height: v=x}={}) {
        this.gl = a,
        this.id = Md++,
        this.image = b,
        this.target = c,
        this.type = f,
        this.format = e,
        this.internalFormat = h,
        this.minFilter = q,
        this.magFilter = s,
        this.wrapS = i,
        this.wrapT = n,
        this.generateMipmaps = m,
        this.premultiplyAlpha = u,
        this.unpackAlignment = r,
        this.flipY = t,
        this.anisotropy = Math.min(w, this.gl.renderer.parameters.maxAnisotropy),
        this.level = y,
        this.width = x,
        this.height = v,
        this.texture = this.gl.createTexture(),
        this.store = {
            image: null
        },
        this.glState = this.gl.renderer.state,
        this.state = {},
        this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR,
        this.state.magFilter = this.gl.LINEAR,
        this.state.wrapS = this.gl.REPEAT,
        this.state.wrapT = this.gl.REPEAT,
        this.state.anisotropy = 0
    }
    bind() {
        if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id)
            return;
        this.gl.bindTexture(this.target, this.texture),
        this.glState.textureUnits[this.glState.activeTextureUnit] = this.id
    }
    update(a=0) {
        const b = !(this.image === this.store.image && !this.needsUpdate);
        (b || this.glState.textureUnits[a] !== this.id) && (this.gl.renderer.activeTexture(a),
        this.bind());
        if (!b)
            return;
        this.needsUpdate = !1,
        this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
        this.glState.flipY = this.flipY),
        this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
        this.glState.premultiplyAlpha = this.premultiplyAlpha),
        this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
        this.glState.unpackAlignment = this.unpackAlignment),
        this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
        this.state.minFilter = this.minFilter),
        this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
        this.state.magFilter = this.magFilter),
        this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
        this.state.wrapS = this.wrapS),
        this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
        this.state.wrapT = this.wrapT),
        this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy),
        this.state.anisotropy = this.anisotropy);
        if (this.image) {
            this.image.width && (this.width = this.image.width,
            this.height = this.image.height);
            if (this.target === this.gl.TEXTURE_CUBE_MAP)
                for (let c = 0; c < 6; c++)
                    this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + c, this.level, this.internalFormat, this.format, this.type, this.image[c]);
            else if (ArrayBuffer.isView(this.image))
                this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
            else if (this.image.isCompressedTexture)
                for (let c = 0; c < this.image.length; c++)
                    this.gl.compressedTexImage2D(this.target, c, this.internalFormat, this.image[c].width, this.image[c].height, 0, this.image[c].data);
            else
                this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
            this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!tb(this.image.width) || !tb(this.image.height)) ? (this.generateMipmaps = !1,
            this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE,
            this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)),
            this.onUpdate && this.onUpdate()
        } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
            for (let c = 0; c < 6; c++)
                this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + c, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, sb);
        else
            this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, sb);
        this.store.image = this.image
    }
}
const Qc = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000"
};
function Rc(a) {
    a.length === 4 && (a = a[0] + a[1] + a[1] + a[2] + a[2] + a[3] + a[3]);
    const b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return b || console.warn(`Unable to convert hex string ${a} to rgb values`),
    [parseInt(b[1], 16) / 255, parseInt(b[2], 16) / 255, parseInt(b[3], 16) / 255]
}
function Nd(a) {
    return a = parseInt(a),
    [(a >> 16 & 255) / 255, (a >> 8 & 255) / 255, (a & 255) / 255]
}
function Ia(a) {
    return a === void 0 ? [0, 0, 0] : arguments.length === 3 ? arguments : isNaN(a) ? a[0] === "#" ? Rc(a) : Qc[a.toLowerCase()] ? Rc(Qc[a.toLowerCase()]) : (console.warn("Color format not recognised"),
    [0, 0, 0]) : Nd(a)
}
class oa extends Array {
    constructor(a) {
        return Array.isArray(a) ? super(...a) : super(...Ia(...arguments))
    }
    get r() {
        return this[0]
    }
    get g() {
        return this[1]
    }
    get b() {
        return this[2]
    }
    set r(a) {
        this[0] = a
    }
    set g(a) {
        this[1] = a
    }
    set b(a) {
        this[2] = a
    }
    set(a) {
        return Array.isArray(a) ? this.copy(a) : this.copy(Ia(...arguments))
    }
    copy(a) {
        return this[0] = a[0],
        this[1] = a[1],
        this[2] = a[2],
        this
    }
}
function mc(a, b) {
    return a[0] = b[0],
    a[1] = b[1],
    a
}
function lc(a, b, c) {
    return a[0] = b,
    a[1] = c,
    a
}
function Na(a, b, c) {
    return a[0] = b[0] + c[0],
    a[1] = b[1] + c[1],
    a
}
function Oa(a, b, c) {
    return a[0] = b[0] - c[0],
    a[1] = b[1] - c[1],
    a
}
function nc(a, b, c) {
    return a[0] = b[0] * c[0],
    a[1] = b[1] * c[1],
    a
}
function oc(a, b, c) {
    return a[0] = b[0] / c[0],
    a[1] = b[1] / c[1],
    a
}
function pa(a, b, c) {
    return a[0] = b[0] * c,
    a[1] = b[1] * c,
    a
}
function qc(a, b) {
    var c = b[0] - a[0]
      , f = b[1] - a[1];
    return Math.sqrt(c * c + f * f)
}
function rc(a, b) {
    var c = b[0] - a[0]
      , f = b[1] - a[1];
    return c * c + f * f
}
function Pa(a) {
    var b = a[0]
      , c = a[1];
    return Math.sqrt(b * b + c * c)
}
function sc(a) {
    var b = a[0]
      , c = a[1];
    return b * b + c * c
}
function tc(a, b) {
    return a[0] = -b[0],
    a[1] = -b[1],
    a
}
function pc(a, b) {
    return a[0] = 1 / b[0],
    a[1] = 1 / b[1],
    a
}
function uc(a, b) {
    var c = b[0]
      , f = b[1]
      , e = c * c + f * f;
    return e > 0 && (e = 1 / Math.sqrt(e)),
    a[0] = b[0] * e,
    a[1] = b[1] * e,
    a
}
function vc(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}
function Qa(a, b) {
    return a[0] * b[1] - a[1] * b[0]
}
function zc(a, b, c, f) {
    var e = b[0]
      , h = b[1];
    return a[0] = e + f * (c[0] - e),
    a[1] = h + f * (c[1] - h),
    a
}
function xc(a, b, c) {
    var f = b[0]
      , e = b[1];
    return a[0] = c[0] * f + c[3] * e + c[6],
    a[1] = c[1] * f + c[4] * e + c[7],
    a
}
function yc(a, b, c) {
    let f = b[0]
      , e = b[1];
    return a[0] = c[0] * f + c[4] * e + c[12],
    a[1] = c[1] * f + c[5] * e + c[13],
    a
}
function wc(a, b) {
    return a[0] === b[0] && a[1] === b[1]
}
class Ha extends Array {
    constructor(a=0, b=a) {
        return super(a, b),
        this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    set x(a) {
        this[0] = a
    }
    set y(a) {
        this[1] = a
    }
    set(a, b=a) {
        return a.length ? this.copy(a) : (lc(this, a, b),
        this)
    }
    copy(a) {
        return mc(this, a),
        this
    }
    add(a, b) {
        return b ? Na(this, a, b) : Na(this, this, a),
        this
    }
    sub(a, b) {
        return b ? Oa(this, a, b) : Oa(this, this, a),
        this
    }
    multiply(a) {
        return a.length ? nc(this, this, a) : pa(this, this, a),
        this
    }
    divide(a) {
        return a.length ? oc(this, this, a) : pa(this, this, 1 / a),
        this
    }
    inverse(a=this) {
        return pc(this, a),
        this
    }
    len() {
        return Pa(this)
    }
    distance(a) {
        return a ? qc(this, a) : Pa(this)
    }
    squaredLen() {
        return this.squaredDistance()
    }
    squaredDistance(a) {
        return a ? rc(this, a) : sc(this)
    }
    negate(a=this) {
        return tc(this, a),
        this
    }
    cross(a, b) {
        return b ? Qa(a, b) : Qa(this, a)
    }
    scale(a) {
        return pa(this, this, a),
        this
    }
    normalize() {
        return uc(this, this),
        this
    }
    dot(a) {
        return vc(this, a)
    }
    equals(a) {
        return wc(this, a)
    }
    applyMatrix3(a) {
        return xc(this, this, a),
        this
    }
    applyMatrix4(a) {
        return yc(this, this, a),
        this
    }
    lerp(a, b) {
        zc(this, this, a, b)
    }
    clone() {
        return new Ha(this[0],this[1])
    }
    fromArray(a, b=0) {
        return this[0] = a[b],
        this[1] = a[b + 1],
        this
    }
    toArray(a=[], b=0) {
        return a[b] = this[0],
        a[b + 1] = this[1],
        a
    }
}
class wb extends jb {
    constructor(a, {attributes: b={}}={}) {
        Object.assign(b, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3])
            },
            uv: {
                size: 2,
                data: new Float32Array([0, 0, 2, 0, 0, 2])
            }
        }),
        super(a, b)
    }
}
const fa = function() {
    return performance && performance.now ? function a() {
        return performance.now()
    }
    : Date.now
}();
function na(a, b, c={}) {
    return a.addEventListener("mousemove", b, c),
    ()=>{
        a.removeEventListener("mousemove", b, c)
    }
}
function wa(a, b, c={}) {
    return typeof a === "function" && (b = a,
    a = document),
    a.addEventListener("keypress", b, c),
    ()=>{
        a.removeEventListener("keypress", b, c)
    }
}
let eb, Y = [], Cd = 0, ba, Ca, Da;
function fb() {
    eb = requestAnimationFrame(fb),
    ba = fa(),
    Ca = ba - Da,
    Da = ba;
    for (let a = 0; a < Y.length; a++)
        Y[a].fn({
            time: ba,
            deltaTime: Ca
        })
}
function xa(a, {fire: b=!1}={}) {
    b && a(),
    Y.length === 0 && (ba = fa(),
    Da = ba,
    Ca = 0,
    fb());
    let c = Cd++;
    return Y.push({
        index: c,
        fn: a
    }),
    ()=>{
        let f;
        for (let e = 0; e < Y.length; e++)
            if (Y[e].index === c) {
                f = e;
                break
            }
        Y.splice(f, 1),
        Y.length === 0 && cancelAnimationFrame(eb)
    }
}
let ca = []
  , Dd = 0;
window.addEventListener("resize", ()=>{
    for (let a = 0; a < ca.length; a++)
        ca[a].fn()
}
);
function Ba(a, {fire: b=!1}={}) {
    let c = Dd++;
    return ca.push({
        index: c,
        fn: a
    }),
    b && a(),
    ()=>{
        let f;
        for (let e = 0; e < ca.length; e++)
            if (ca[e].index === c) {
                f = e;
                break
            }
        ca.splice(f, 1)
    }
}
var Yc = `
attribute vec2 position;

varying vec2 vUv;

void main () {
    gl_Position = vec4(position, 0., 1.);

    vUv = vec2(0.0, 1.0)+vec2(0.5, -0.5) * (position + 1.0);
}
`;
var ad = `
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise2(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;
var Zc = `
precision highp float;

uniform float uTime;
uniform float uBrightness;
uniform float uContrast;
uniform float uSize;

uniform vec3 uSpeed;
uniform vec3 uDiffuse0;
uniform vec3 uDiffuse1;
uniform vec3 uDiffuse2;

uniform sampler2D uSampler;

varying vec2 vUv;

${ad}

#define OCTAVES 2

float fbm( in vec2 p ){
	float s = 0.0;
	float m = 0.0;
	float a = 0.5;
	
	for( int i=0; i<OCTAVES; i++ ){
        s += a * snoise2(p + uTime * uSpeed.z);
		m += a;
		a *= 0.5;
		p *= 2.0;
	}
	return s/m;
}


float pattern ( in vec2 p, in float d, out vec2 q, out vec2 r ) {
    q.x = fbm( p + vec2(-uTime * uSpeed.x, uTime * uSpeed.y) );
    q.y = fbm( p * ( d * 0.8 + 0.8) + vec2(5.2,1.3) );

    r.x = fbm( p + 1.0 * d * q + vec2(1.7 ,9.2) );
    r.y = fbm( p + 1.0 * q + vec2(8.3,2.8) );

    return fbm( p + 1.0 * r );
}

void main () {
    // float d = 0.;
    float d = texture2D(uSampler, vUv).r;

    vec2 q = vec2(0.);
    vec2 r = vec2(0.);

    float n = pattern(vec2(vUv.x, vUv.y) * uSize , d, q, r);

    vec3 finalColor = mix(uDiffuse0, uDiffuse1, n + r.y );
    finalColor = mix(finalColor, uDiffuse2, q.x + r.y);
    
    gl_FragColor = vec4(finalColor, 1.);
    gl_FragColor.rgb += uContrast;
    gl_FragColor.rgb *= uBrightness;
}`;
function Pd() {
    let a = 8
      , b = a / 6
      , c = document.createElement("canvas");
    c.width = a,
    c.height = a,
    c.style.position = "absolute",
    c.style.bottom = "0px",
    c.style.left = "0px",
    c.style.bottom = "0px",
    c.style.zIndex = 100,
    c.style.width = c.style.height = `${c.width}px`,
    document.body.appendChild(c);
    let f = c.getContext("2d")
      , e = {}
      , h = [];
    const i = "ontouchstart"in window;
    i || na(window, m=>{
        const q = {
            x: m.clientX / window.innerWidth * c.width,
            y: m.clientY / window.innerHeight * c.height,
            life: 1
        }
          , s = e.x !== q.x && e.y !== q.y;
        h.push(q),
        e = q
    }
    );
    function n({deltaTime: m}) {
        f.fillStyle = "black",
        f.fillRect(0, 0, c.width, c.height);
        for (let q = 0; q < h.length; q++) {
            const {life: s, x: u, y: r} = h[q];
            h[q].life -= 6e-4 * m,
            h[q].life <= 0 && h.splice(q, 1);
            const t = b * s
              , w = f.createRadialGradient(u, r, t * .25, u, r, t);
            w.addColorStop(0, "rgba(255, 255, 255, 0.2)"),
            w.addColorStop(1, "rgba(0, 0, 0, 0.0)"),
            f.beginPath(),
            f.fillStyle = w,
            f.arc(u, r, t, 0, Math.PI * 2),
            f.fill()
        }
    }
    return {
        canvas: c,
        update: n
    }
}
var Xc = Pd;
const _c = db()
  , Qd = cb()
  , $c = ()=>{
    console.log("👀 👋"),
    console.log("Press [ h ] to toggle settings or [ space ] to change the background.");
    let a = window.innerWidth
      , b = _c();
    const c = 1;
    let f = document.querySelector(".canvas")
      , e = new rb({
        canvas: f,
        dpr: 1
    })
      , h = e.gl;
    h.clearColor(0, 0, 0, 1);
    let i = new wb(h)
      , n = new oa(15724527)
      , m = new oa(49663)
      , q = new oa(0)
      , s = Xc()
      , u = new qb(h,{
        generateMipmaps: !1,
        width: 8,
        height: 8,
        flipY: !1,
        minFilter: h.NEAREST,
        magFilter: h.NEAREST
    });
    u.image = s.canvas;
    let r = {
        uResolution: {
            value: new Ha()
        },
        uTime: {
            value: 0
        },
        uContrast: {
            value: -.77
        },
        uBrightness: {
            value: .28
        },
        uSize: {
            value: 1.39
        },
        uSpeed: {
            value: new V(.059,.01,.03)
        },
        uDiffuse0: {
            value: n
        },
        uDiffuse1: {
            value: m
        },
        uDiffuse2: {
            value: q
        },
        uSampler: {
            value: u
        }
    }
      , t = new nb(h,{
        vertex: Yc,
        fragment: Zc,
        uniforms: r
    })
      , w = new lb(h,{
        geometry: i,
        program: t
    });
    function y() {
        a = window.innerWidth,
        b = _c(),
        r.uResolution.value.x = a,
        r.uResolution.value.y = b,
        e.setSize(a, b)
    }
    function x({deltaTime: D}) {
        r.uTime.value += D / 1e3,
        s.update({
            deltaTime: D
        }),
        u.needsUpdate = !0,
        e.render({
            scene: w
        })
    }
    let v;
    function H() {
        v = new Qd.GUI({
            closed: !1
        }),
        v.add(r.uContrast, "value", -1, 1).step(.01).name("contrast"),
        v.add(r.uBrightness, "value", 0, 2).step(.01).name("brightness"),
        v.add(r.uSpeed.value, "x", -.2, .2).step(.001).name("speed x"),
        v.add(r.uSpeed.value, "y", -.2, .2).step(.001).name("speed y"),
        v.add(r.uSpeed.value, "z", -.2, .2).step(.001).name("speed z"),
        v.add(r.uSize, "value", 0, 10).step(.01).name("size")
    }
    Ba(y, {
        fire: !0
    }),
    xa(x),
    wa(window, D=>{
        D.key === "h" && !v && H(),
        D.key === " " && (r.uTime.value = Math.random() * 1e5)
    }
    )
}
;
document.body ? $c() : document.addEventListener("DOMContentLoaded", $c);