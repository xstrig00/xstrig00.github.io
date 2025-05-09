!function(e) {
    "use strict";
    function t(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function r(e) {
        for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2 ? t(Object(n), !0).forEach((function(t) {
                a(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function n(e, t, r, n, o, a, i) {
        try {
            var s = e[a](i)
              , l = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(l) : Promise.resolve(l).then(n, o)
    }
    function o(e) {
        return function() {
            var t = this
              , r = arguments;
            return new Promise((function(o, a) {
                var i = e.apply(t, r);
                function s(e) {
                    n(i, o, a, s, l, "next", e)
                }
                function l(e) {
                    n(i, o, a, s, l, "throw", e)
                }
                s(void 0)
            }
            ))
        }
    }
    function a(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function i(e, t) {
        if (null == e)
            return {};
        var r, n, o = function(e, t) {
            if (null == e)
                return {};
            var r, n, o = {}, a = Object.keys(e);
            for (n = 0; n < a.length; n++)
                r = a[n],
                t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
                r = a[n],
                t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
    }
    var s, l = ["type"], c = Object.defineProperty, d = (e, t, r) => ( (e, t, r) => t in e ? c(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r), u = Object.defineProperty, h = (e, t, r) => ( (e, t, r) => t in e ? u(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r), p = (e => (e[e.Document = 0] = "Document",
    e[e.DocumentType = 1] = "DocumentType",
    e[e.Element = 2] = "Element",
    e[e.Text = 3] = "Text",
    e[e.CDATA = 4] = "CDATA",
    e[e.Comment = 5] = "Comment",
    e))(p || {}), m = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
    }, f = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
    }, g = () => {
        try {
            return !!globalThis.Zone
        } catch (e) {
            return !1
        }
    }
    , y = {};
    function v(e) {
        if (y[e])
            return y[e];
        var t = globalThis[e]
          , r = t.prototype
          , n = e in m ? m[e] : void 0
          , o = Boolean(n && n.every((e => {
            var t, n;
            return Boolean(null == (n = null == (t = Object.getOwnPropertyDescriptor(r, e)) ? void 0 : t.get) ? void 0 : n.toString().includes("[native code]"))
        }
        )))
          , a = e in f ? f[e] : void 0
          , i = Boolean(a && a.every((e => {
            var t;
            return "function" == typeof r[e] && (null == (t = r[e]) ? void 0 : t.toString().includes("[native code]"))
        }
        )));
        if (o && i && !g())
            return y[e] = t.prototype,
            t.prototype;
        try {
            var s = document.createElement("iframe");
            document.body.appendChild(s);
            var l = s.contentWindow;
            if (!l)
                return t.prototype;
            var c = l[e].prototype;
            return document.body.removeChild(s),
            c ? y[e] = c : t.prototype
        } catch (e) {
            return t.prototype
        }
    }
    var I = {};
    function b(e, t, r) {
        var n, o = "".concat(e, ".").concat(String(r));
        if (I[o])
            return I[o].call(t);
        var a = v(e)
          , i = null == (n = Object.getOwnPropertyDescriptor(a, r)) ? void 0 : n.get;
        return i ? (I[o] = i,
        i.call(t)) : t[r]
    }
    var C = {};
    function S(e, t, r) {
        var n = "".concat(e, ".").concat(String(r));
        if (C[n])
            return C[n].bind(t);
        var o = v(e)[r];
        return "function" != typeof o ? t[r] : (C[n] = o,
        o.bind(t))
    }
    var w = {
        childNodes: function(e) {
            return b("Node", e, "childNodes")
        },
        parentNode: function(e) {
            return b("Node", e, "parentNode")
        },
        parentElement: function(e) {
            return b("Node", e, "parentElement")
        },
        textContent: function(e) {
            return b("Node", e, "textContent")
        },
        contains: function(e, t) {
            return S("Node", e, "contains")(t)
        },
        getRootNode: function(e) {
            return S("Node", e, "getRootNode")()
        },
        host: function(e) {
            return e && "host"in e ? b("ShadowRoot", e, "host") : null
        },
        styleSheets: function(e) {
            return e.styleSheets
        },
        shadowRoot: function(e) {
            return e && "shadowRoot"in e ? b("Element", e, "shadowRoot") : null
        },
        querySelector: function(e, t) {
            return b("Element", e, "querySelector")(t)
        },
        querySelectorAll: function(e, t) {
            return b("Element", e, "querySelectorAll")(t)
        },
        mutationObserver: function() {
            return v("MutationObserver").constructor
        }
    };
    function N(e) {
        return e.nodeType === e.ELEMENT_NODE
    }
    function M(e) {
        var t = e && "host"in e && "mode"in e && w.host(e) || null;
        return Boolean(t && "shadowRoot"in t && w.shadowRoot(t) === e)
    }
    function A(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e)
    }
    function k(e) {
        try {
            var t = e.rules || e.cssRules;
            if (!t)
                return null;
            var r = Array.from(t, (t => R(t, e.href))).join("");
            return (n = r).includes(" background-clip: text;") && !n.includes(" -webkit-background-clip: text;") && (n = n.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")),
            n
        } catch (e) {
            return null
        }
        var n
    }
    function R(e, t) {
        if (function(e) {
            return "styleSheet"in e
        }(e)) {
            var r;
            try {
                r = k(e.styleSheet) || function(e) {
                    var {cssText: t} = e;
                    if (t.split('"').length < 3)
                        return t;
                    var r = ["@import", "url(".concat(JSON.stringify(e.href), ")")];
                    return "" === e.layerName ? r.push("layer") : e.layerName && r.push("layer(".concat(e.layerName, ")")),
                    e.supportsText && r.push("supports(".concat(e.supportsText, ")")),
                    e.media.length && r.push(e.media.mediaText),
                    r.join(" ") + ";"
                }(e)
            } catch (t) {
                r = e.cssText
            }
            return e.styleSheet.href ? W(r, e.styleSheet.href) : r
        }
        var n, o = e.cssText;
        return function(e) {
            return "selectorText"in e
        }(e) && e.selectorText.includes(":") && (n = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm,
        o = o.replace(n, "$1\\$2")),
        t ? W(o, t) : o
    }
    function T(e, t) {
        return Array.from(e.styleSheets).find((e => e.href === t))
    }
    let E = class {
        constructor() {
            h(this, "idNodeMap", new Map),
            h(this, "nodeMetaMap", new WeakMap)
        }
        getId(e) {
            var t;
            if (!e)
                return -1;
            var r = null == (t = this.getMeta(e)) ? void 0 : t.id;
            return null != r ? r : -1
        }
        getNode(e) {
            return this.idNodeMap.get(e) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
            return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
            var t = this.getId(e);
            this.idNodeMap.delete(t),
            e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
        }
        has(e) {
            return this.idNodeMap.has(e)
        }
        hasNode(e) {
            return this.nodeMetaMap.has(e)
        }
        add(e, t) {
            var r = t.id;
            this.idNodeMap.set(r, e),
            this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
            var r = this.getNode(e);
            if (r) {
                var n = this.nodeMetaMap.get(r);
                n && this.nodeMetaMap.set(t, n)
            }
            this.idNodeMap.set(e, t)
        }
        reset() {
            this.idNodeMap = new Map,
            this.nodeMetaMap = new WeakMap
        }
    }
    ;
    function O(e) {
        var {element: t, maskInputOptions: r, tagName: n, type: o, value: a, maskInputFn: i} = e
          , s = a || ""
          , l = o && x(o);
          //CHANGE
          //return (r[n.toLowerCase()] || l && r[l]) && (s = i ? i(s, t) : "a".repeat(s.length)),
          //s
        return s
    }
    function x(e) {
        return e.toLowerCase()
    }
    var L = "__rrweb_original__";
    function D(e) {
        var t = e.type;
        return e.hasAttribute("data-rr-is-password") ? "password" : t ? x(t) : null
    }
    function F(e, t) {
        var r, n;
        try {
            n = new URL(e,null != t ? t : window.location.href)
        } catch (e) {
            return null
        }
        var o = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
        return null !== (r = null == o ? void 0 : o[1]) && void 0 !== r ? r : null
    }
    var B = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
      , Z = /^(?:[a-z+]+:)?\/\//i
      , _ = /^www\..*/i
      , Y = /^(data:)([^,]*),(.*)/i;
    function W(e, t) {
        return (e || "").replace(B, ( (e, r, n, o, a, i) => {
            var s, l = n || a || i, c = r || o || "";
            if (!l)
                return e;
            if (Z.test(l) || _.test(l))
                return "url(".concat(c).concat(l).concat(c, ")");
            if (Y.test(l))
                return "url(".concat(c).concat(l).concat(c, ")");
            if ("/" === l[0])
                return "url(".concat(c).concat((s = t,
                (s.indexOf("//") > -1 ? s.split("/").slice(0, 3).join("/") : s.split("/")[0]).split("?")[0] + l)).concat(c, ")");
            var d = t.split("/")
              , u = l.split("/");
            for (var h of (d.pop(),
            u))
                "." !== h && (".." === h ? d.pop() : d.push(h));
            return "url(".concat(c).concat(d.join("/")).concat(c, ")")
        }
        ))
    }
    var G, V, H = 1, P = new RegExp("[^a-z0-9-_:]"), X = -2;
    function j() {
        return H++
    }
    var z = /^[^ \t\n\r\u000c]+/
      , K = /^[, \t\n\r\u000c]+/;
    var J = new WeakMap;
    function U(e, t) {
        return t && "" !== t.trim() ? Q(e, t) : t
    }
    function q(e) {
        return Boolean("svg" === e.tagName || e.ownerSVGElement)
    }
    function Q(e, t) {
        var r = J.get(e);
        if (r || (r = e.createElement("a"),
        J.set(e, r)),
        t) {
            if (t.startsWith("blob:") || t.startsWith("data:"))
                return t
        } else
            t = "";
        return r.setAttribute("href", t),
        r.href
    }
    function $(e, t, r, n) {
        return n ? "src" === r || "href" === r && ("use" !== t || "#" !== n[0]) || "xlink:href" === r && "#" !== n[0] ? U(e, n) : "background" !== r || "table" !== t && "td" !== t && "th" !== t ? "srcset" === r ? function(e, t) {
            if ("" === t.trim())
                return t;
            var r = 0;
            function n(e) {
                var n, o = e.exec(t.substring(r));
                return o ? (n = o[0],
                r += n.length,
                n) : ""
            }
            for (var o = []; n(K),
            !(r >= t.length); ) {
                var a = n(z);
                if ("," === a.slice(-1))
                    a = U(e, a.substring(0, a.length - 1)),
                    o.push(a);
                else {
                    var i = "";
                    a = U(e, a);
                    for (var s = !1; ; ) {
                        var l = t.charAt(r);
                        if ("" === l) {
                            o.push((a + i).trim());
                            break
                        }
                        if (s)
                            ")" === l && (s = !1);
                        else {
                            if ("," === l) {
                                r += 1,
                                o.push((a + i).trim());
                                break
                            }
                            "(" === l && (s = !0)
                        }
                        i += l,
                        r += 1
                    }
                }
            }
            return o.join(", ")
        }(e, n) : "style" === r ? W(n, Q(e)) : "object" === t && "data" === r ? U(e, n) : n : U(e, n) : n
    }
    function ee(e, t, r) {
        return ("video" === e || "audio" === e) && "autoplay" === t
    }
    function te(e, t, r) {
        if (!e)
            return !1;
        if (e.nodeType !== e.ELEMENT_NODE)
            return !!r && te(w.parentNode(e), t, r);
        for (var n = e.classList.length; n--; ) {
            var o = e.classList[n];
            if (t.test(o))
                return !0
        }
        return !!r && te(w.parentNode(e), t, r)
    }
    function re(e, t, r, n) {
        var o;
        if (N(e)) {
            if (o = e,
            !w.childNodes(o).length)
                return !1
        } else {
            if (null === w.parentElement(e))
                return !1;
            o = w.parentElement(e)
        }
        try {
            if ("string" == typeof t) {
                if (n) {
                    if (o.closest(".".concat(t)))
                        return !0
                } else if (o.classList.contains(t))
                    return !0
            } else if (te(o, t, n))
                return !0;
            if (r)
                if (n) {
                    if (o.closest(r))
                        return !0
                } else if (o.matches(r))
                    return !0
        } catch (e) {}
        return !1
    }
    function ne(e, t) {
        var {doc: r, mirror: n, blockClass: o, blockSelector: a, needsMask: i, inlineStylesheet: s, maskInputOptions: l={}, maskTextFn: c, maskInputFn: d, dataURLOptions: u={}, inlineImages: h, recordCanvas: m, keepIframeSrcFn: f, newlyAddedElement: g=!1} = t
          , y = function(e, t) {
            if (!t.hasNode(e))
                return;
            var r = t.getId(e);
            return 1 === r ? void 0 : r
        }(r, n);
        switch (e.nodeType) {
        case e.DOCUMENT_NODE:
            return "CSS1Compat" !== e.compatMode ? {
                type: p.Document,
                childNodes: [],
                compatMode: e.compatMode
            } : {
                type: p.Document,
                childNodes: []
            };
        case e.DOCUMENT_TYPE_NODE:
            return {
                type: p.DocumentType,
                name: e.name,
                publicId: e.publicId,
                systemId: e.systemId,
                rootId: y
            };
        case e.ELEMENT_NODE:
            return function(e, t) {
                for (var r, {doc: n, blockClass: o, blockSelector: a, inlineStylesheet: i, maskInputOptions: s={}, maskInputFn: l, dataURLOptions: c={}, inlineImages: d, recordCanvas: u, keepIframeSrcFn: h, newlyAddedElement: m=!1, rootId: f} = t, g = function(e, t, r) {
                    try {
                        if ("string" == typeof t) {
                            if (e.classList.contains(t))
                                return !0
                        } else
                            for (var n = e.classList.length; n--; ) {
                                var o = e.classList[n];
                                if (t.test(o))
                                    return !0
                            }
                        if (r)
                            return e.matches(r)
                    } catch (e) {}
                    return !1
                }(e, o, a), y = function(e) {
                    if (e instanceof HTMLFormElement)
                        return "form";
                    var t = x(e.tagName);
                    return P.test(t) ? "div" : t
                }(e), v = {}, I = e.attributes.length, b = 0; b < I; b++) {
                    var C = e.attributes[b];
                    ee(y, C.name, C.value) || (v[C.name] = $(n, y, x(C.name), C.value))
                }
                if ("link" === y && i) {
                    var S = e.href
                      , N = T(n, S);
                    if (!N && S.includes(".css"))
                        N = T(n, window.location.origin + "/" + S.replace(window.location.href, ""));
                    var M = null;
                    N && (M = k(N)),
                    M && (delete v.rel,
                    delete v.href,
                    v._cssText = M)
                }
                if ("style" === y && e.sheet && !(e.innerText || w.textContent(e) || "").trim().length) {
                    var A = k(e.sheet);
                    A && (v._cssText = A)
                }
                if ("input" === y || "textarea" === y || "select" === y) {
                    var R = e.value
                      , E = e.checked;
                    "radio" !== v.type && "checkbox" !== v.type && "submit" !== v.type && "button" !== v.type && R ? v.value = O({
                        element: e,
                        type: D(e),
                        tagName: y,
                        value: R,
                        maskInputOptions: s,
                        maskInputFn: l
                    }) : E && (v.checked = E)
                }
                "option" === y && (e.selected && !s.select ? v.selected = !0 : delete v.selected);
                if ("dialog" === y && e.open)
                    try {
                        v.rr_open_mode = e.matches("dialog:modal") ? "modal" : "non-modal"
                    } catch (e) {
                        v.rr_open_mode = "modal",
                        v.ph_rr_could_not_detect_modal = !0
                    }
                if ("canvas" === y && u)
                    if ("2d" === e.__context)
                        (function(e) {
                            var t = e.getContext("2d");
                            if (!t)
                                return !0;
                            for (var r = 0; r < e.width; r += 50)
                                for (var n = 0; n < e.height; n += 50) {
                                    var o = t.getImageData
                                      , a = L in o ? o[L] : o;
                                    if (new Uint32Array(a.call(t, r, n, Math.min(50, e.width - r), Math.min(50, e.height - n)).data.buffer).some((e => 0 !== e)))
                                        return !1
                                }
                            return !0
                        }
                        )(e) || (v.rr_dataURL = e.toDataURL(c.type, c.quality));
                    else if (!("__context"in e)) {
                        var F = e.toDataURL(c.type, c.quality)
                          , B = n.createElement("canvas");
                        B.width = e.width,
                        B.height = e.height,
                        F !== B.toDataURL(c.type, c.quality) && (v.rr_dataURL = F)
                    }
                if ("img" === y && d) {
                    G || (G = n.createElement("canvas"),
                    V = G.getContext("2d"));
                    var Z = e
                      , _ = Z.currentSrc || Z.getAttribute("src") || "<unknown-src>"
                      , Y = Z.crossOrigin
                      , W = () => {
                        Z.removeEventListener("load", W);
                        try {
                            G.width = Z.naturalWidth,
                            G.height = Z.naturalHeight,
                            V.drawImage(Z, 0, 0),
                            v.rr_dataURL = G.toDataURL(c.type, c.quality)
                        } catch (e) {
                            if ("anonymous" !== Z.crossOrigin)
                                return Z.crossOrigin = "anonymous",
                                void (Z.complete && 0 !== Z.naturalWidth ? W() : Z.addEventListener("load", W));
                            console.warn("Cannot inline img src=".concat(_, "! Error: ").concat(e))
                        }
                        "anonymous" === Z.crossOrigin && (Y ? v.crossOrigin = Y : Z.removeAttribute("crossorigin"))
                    }
                    ;
                    Z.complete && 0 !== Z.naturalWidth ? W() : Z.addEventListener("load", W)
                }
                if ("audio" === y || "video" === y) {
                    var H = v;
                    H.rr_mediaState = e.paused ? "paused" : "played",
                    H.rr_mediaCurrentTime = e.currentTime,
                    H.rr_mediaPlaybackRate = e.playbackRate,
                    H.rr_mediaMuted = e.muted,
                    H.rr_mediaLoop = e.loop,
                    H.rr_mediaVolume = e.volume
                }
                m || (e.scrollLeft && (v.rr_scrollLeft = e.scrollLeft),
                e.scrollTop && (v.rr_scrollTop = e.scrollTop));
                if (g) {
                    var {width: X, height: j} = e.getBoundingClientRect();
                    v = {
                        class: v.class,
                        rr_width: "".concat(X, "px"),
                        rr_height: "".concat(j, "px")
                    }
                }
                "iframe" !== y || h(v.src) || (e.contentDocument || (v.rr_src = v.src),
                delete v.src);
                try {
                    customElements.get(y) && (r = !0)
                } catch (e) {}
                return {
                    type: p.Element,
                    tagName: y,
                    attributes: v,
                    childNodes: [],
                    isSVG: q(e) || void 0,
                    needBlock: g,
                    rootId: f,
                    isCustom: r
                }
            }(e, {
                doc: r,
                blockClass: o,
                blockSelector: a,
                inlineStylesheet: s,
                maskInputOptions: l,
                maskInputFn: d,
                dataURLOptions: u,
                inlineImages: h,
                recordCanvas: m,
                keepIframeSrcFn: f,
                newlyAddedElement: g,
                rootId: y
            });
        case e.TEXT_NODE:
            return function(e, t) {
                var r, {needsMask: n, maskTextFn: o, rootId: a} = t, i = w.parentNode(e), s = i && i.tagName, l = w.textContent(e), c = "STYLE" === s || void 0, d = "SCRIPT" === s || void 0;
                if (c && l) {
                    try {
                        e.nextSibling || e.previousSibling || (null == (r = i.sheet) ? void 0 : r.cssRules) && (l = k(i.sheet))
                    } catch (t) {
                        console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(t), e)
                    }
                    l = W(l, Q(t.doc))
                }
                d && (l = "SCRIPT_PLACEHOLDER");
                !c && !d && l && n && (l = o ? o(l, w.parentElement(e)) : l.replace(/[\S]/g, "*"));
                return {
                    type: p.Text,
                    textContent: l || "",
                    isStyle: c,
                    rootId: a
                }
            }(e, {
                doc: r,
                needsMask: i,
                maskTextFn: c,
                rootId: y
            });
        case e.CDATA_SECTION_NODE:
            return {
                type: p.CDATA,
                textContent: "",
                rootId: y
            };
        case e.COMMENT_NODE:
            return {
                type: p.Comment,
                textContent: w.textContent(e) || "",
                rootId: y
            };
        default:
            return !1
        }
    }
    function oe(e) {
        return null == e ? "" : e.toLowerCase()
    }
    function ae(e, t) {
        var {doc: r, mirror: n, blockClass: o, blockSelector: a, maskTextClass: i, maskTextSelector: s, skipChild: l=!1, inlineStylesheet: c=!0, maskInputOptions: d={}, maskTextFn: u, maskInputFn: h, slimDOMOptions: m, dataURLOptions: f={}, inlineImages: g=!1, recordCanvas: y=!1, onSerialize: v, onIframeLoad: I, iframeLoadTimeout: b=5e3, onStylesheetLoad: C, stylesheetLoadTimeout: S=5e3, keepIframeSrcFn: k=( () => !1), newlyAddedElement: R=!1} = t
          , {needsMask: T} = t
          , {preserveWhiteSpace: E=!0} = t;
        T || (T = re(e, i, s, void 0 === T));
        var O, x = ne(e, {
            doc: r,
            mirror: n,
            blockClass: o,
            blockSelector: a,
            needsMask: T,
            inlineStylesheet: c,
            maskInputOptions: d,
            maskTextFn: u,
            maskInputFn: h,
            dataURLOptions: f,
            inlineImages: g,
            recordCanvas: y,
            keepIframeSrcFn: k,
            newlyAddedElement: R
        });
        if (!x)
            return console.warn(e, "not serialized"),
            null;
        O = n.hasNode(e) ? n.getId(e) : !function(e, t) {
            if (t.comment && e.type === p.Comment)
                return !0;
            if (e.type === p.Element) {
                if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === F(e.attributes.href)))
                    return !0;
                if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (oe(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === oe(e.attributes.name) || "icon" === oe(e.attributes.rel) || "apple-touch-icon" === oe(e.attributes.rel) || "shortcut icon" === oe(e.attributes.rel))))
                    return !0;
                if ("meta" === e.tagName) {
                    if (t.headMetaDescKeywords && oe(e.attributes.name).match(/^description|keywords$/))
                        return !0;
                    if (t.headMetaSocial && (oe(e.attributes.property).match(/^(og|twitter|fb):/) || oe(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === oe(e.attributes.name)))
                        return !0;
                    if (t.headMetaRobots && ("robots" === oe(e.attributes.name) || "googlebot" === oe(e.attributes.name) || "bingbot" === oe(e.attributes.name)))
                        return !0;
                    if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"])
                        return !0;
                    if (t.headMetaAuthorship && ("author" === oe(e.attributes.name) || "generator" === oe(e.attributes.name) || "framework" === oe(e.attributes.name) || "publisher" === oe(e.attributes.name) || "progid" === oe(e.attributes.name) || oe(e.attributes.property).match(/^article:/) || oe(e.attributes.property).match(/^product:/)))
                        return !0;
                    if (t.headMetaVerification && ("google-site-verification" === oe(e.attributes.name) || "yandex-verification" === oe(e.attributes.name) || "csrf-token" === oe(e.attributes.name) || "p:domain_verify" === oe(e.attributes.name) || "verify-v1" === oe(e.attributes.name) || "verification" === oe(e.attributes.name) || "shopify-checkout-api-token" === oe(e.attributes.name)))
                        return !0
                }
            }
            return !1
        }(x, m) && (E || x.type !== p.Text || x.isStyle || x.textContent.replace(/^\s+|\s+$/gm, "").length) ? j() : X;
        var L = Object.assign(x, {
            id: O
        });
        if (n.add(e, L),
        O === X)
            return null;
        v && v(e);
        var D = !l;
        if (L.type === p.Element) {
            D = D && !L.needBlock,
            delete L.needBlock;
            var B = w.shadowRoot(e);
            B && A(B) && (L.isShadowHost = !0)
        }
        if ((L.type === p.Document || L.type === p.Element) && D) {
            m.headWhitespace && L.type === p.Element && "head" === L.tagName && (E = !1);
            var Z = {
                doc: r,
                mirror: n,
                blockClass: o,
                blockSelector: a,
                needsMask: T,
                maskTextClass: i,
                maskTextSelector: s,
                skipChild: l,
                inlineStylesheet: c,
                maskInputOptions: d,
                maskTextFn: u,
                maskInputFn: h,
                slimDOMOptions: m,
                dataURLOptions: f,
                inlineImages: g,
                recordCanvas: y,
                preserveWhiteSpace: E,
                onSerialize: v,
                onIframeLoad: I,
                iframeLoadTimeout: b,
                onStylesheetLoad: C,
                stylesheetLoadTimeout: S,
                keepIframeSrcFn: k
            };
            if (L.type === p.Element && "textarea" === L.tagName && void 0 !== L.attributes.value)
                ;
            else
                for (var _ of Array.from(w.childNodes(e))) {
                    var Y = ae(_, Z);
                    Y && L.childNodes.push(Y)
                }
            var W = null;
            if (N(e) && (W = w.shadowRoot(e)))
                for (var G of Array.from(w.childNodes(W))) {
                    var V = ae(G, Z);
                    V && (A(W) && (V.isShadow = !0),
                    L.childNodes.push(V))
                }
        }
        var H = w.parentNode(e);
        return H && M(H) && A(H) && (L.isShadow = !0),
        L.type === p.Element && "iframe" === L.tagName && function(e, t, r) {
            var n = e.contentWindow;
            if (n) {
                var o, a = !1;
                try {
                    o = n.document.readyState
                } catch (e) {
                    return
                }
                if ("complete" === o) {
                    var i = "about:blank";
                    if (n.location.href !== i || e.src === i || "" === e.src)
                        return setTimeout(t, 0),
                        e.addEventListener("load", t);
                    e.addEventListener("load", t)
                } else {
                    var s = setTimeout(( () => {
                        a || (t(),
                        a = !0)
                    }
                    ), r);
                    e.addEventListener("load", ( () => {
                        clearTimeout(s),
                        a = !0,
                        t()
                    }
                    ))
                }
            }
        }(e, ( () => {
            var t = e.contentDocument;
            if (t && I) {
                var r = ae(t, {
                    doc: t,
                    mirror: n,
                    blockClass: o,
                    blockSelector: a,
                    needsMask: T,
                    maskTextClass: i,
                    maskTextSelector: s,
                    skipChild: !1,
                    inlineStylesheet: c,
                    maskInputOptions: d,
                    maskTextFn: u,
                    maskInputFn: h,
                    slimDOMOptions: m,
                    dataURLOptions: f,
                    inlineImages: g,
                    recordCanvas: y,
                    preserveWhiteSpace: E,
                    onSerialize: v,
                    onIframeLoad: I,
                    iframeLoadTimeout: b,
                    onStylesheetLoad: C,
                    stylesheetLoadTimeout: S,
                    keepIframeSrcFn: k
                });
                r && I(e, r)
            }
        }
        ), b),
        L.type === p.Element && "link" === L.tagName && "string" == typeof L.attributes.rel && ("stylesheet" === L.attributes.rel || "preload" === L.attributes.rel && "string" == typeof L.attributes.href && "css" === F(L.attributes.href)) && function(e, t, r) {
            var n, o = !1;
            try {
                n = e.sheet
            } catch (e) {
                return
            }
            if (!n) {
                var a = setTimeout(( () => {
                    o || (t(),
                    o = !0)
                }
                ), r);
                e.addEventListener("load", ( () => {
                    clearTimeout(a),
                    o = !0,
                    t()
                }
                ))
            }
        }(e, ( () => {
            if (C) {
                var t = ae(e, {
                    doc: r,
                    mirror: n,
                    blockClass: o,
                    blockSelector: a,
                    needsMask: T,
                    maskTextClass: i,
                    maskTextSelector: s,
                    skipChild: !1,
                    inlineStylesheet: c,
                    maskInputOptions: d,
                    maskTextFn: u,
                    maskInputFn: h,
                    slimDOMOptions: m,
                    dataURLOptions: f,
                    inlineImages: g,
                    recordCanvas: y,
                    preserveWhiteSpace: E,
                    onSerialize: v,
                    onIframeLoad: I,
                    iframeLoadTimeout: b,
                    onStylesheetLoad: C,
                    stylesheetLoadTimeout: S,
                    keepIframeSrcFn: k
                });
                t && C(e, t)
            }
        }
        ), S),
        L
    }
    let ie = class e {
        constructor() {
            __publicField2(this, "parentElement", null),
            __publicField2(this, "parentNode", null),
            __publicField2(this, "ownerDocument"),
            __publicField2(this, "firstChild", null),
            __publicField2(this, "lastChild", null),
            __publicField2(this, "previousSibling", null),
            __publicField2(this, "nextSibling", null),
            __publicField2(this, "ELEMENT_NODE", 1),
            __publicField2(this, "TEXT_NODE", 3),
            __publicField2(this, "nodeType"),
            __publicField2(this, "nodeName"),
            __publicField2(this, "RRNodeType")
        }
        get childNodes() {
            for (var e = [], t = this.firstChild; t; )
                e.push(t),
                t = t.nextSibling;
            return e
        }
        contains(t) {
            if (!(t instanceof e))
                return !1;
            if (t.ownerDocument !== this.ownerDocument)
                return !1;
            if (t === this)
                return !0;
            for (; t.parentNode; ) {
                if (t.parentNode === this)
                    return !0;
                t = t.parentNode
            }
            return !1
        }
        appendChild(e) {
            throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(e, t) {
            throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(e) {
            throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
            return "RRNode"
        }
    }
    ;
    var se = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
    }
      , le = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
    }
      , ce = {};
    function de(e) {
        if (ce[e])
            return ce[e];
        var t = globalThis[e]
          , r = t.prototype
          , n = e in se ? se[e] : void 0
          , o = Boolean(n && n.every((e => {
            var t, n;
            return Boolean(null == (n = null == (t = Object.getOwnPropertyDescriptor(r, e)) ? void 0 : t.get) ? void 0 : n.toString().includes("[native code]"))
        }
        )))
          , a = e in le ? le[e] : void 0
          , i = Boolean(a && a.every((e => {
            var t;
            return "function" == typeof r[e] && (null == (t = r[e]) ? void 0 : t.toString().includes("[native code]"))
        }
        )));
        if (o && i && !g())
            return ce[e] = t.prototype,
            t.prototype;
        try {
            var s = document.createElement("iframe");
            document.body.appendChild(s);
            var l = s.contentWindow;
            if (!l)
                return t.prototype;
            var c = l[e].prototype;
            return document.body.removeChild(s),
            c ? ce[e] = c : r
        } catch (e) {
            return r
        }
    }
    var ue = {};
    function he(e, t, r) {
        var n, o = "".concat(e, ".").concat(String(r));
        if (ue[o])
            return ue[o].call(t);
        var a = de(e)
          , i = null == (n = Object.getOwnPropertyDescriptor(a, r)) ? void 0 : n.get;
        return i ? (ue[o] = i,
        i.call(t)) : t[r]
    }
    var pe = {};
    function me(e, t, r) {
        var n = "".concat(e, ".").concat(String(r));
        if (pe[n])
            return pe[n].bind(t);
        var o = de(e)[r];
        return "function" != typeof o ? t[r] : (pe[n] = o,
        o.bind(t))
    }
    function fe() {
        return de("MutationObserver").constructor
    }
    var ge = {
        childNodes: function(e) {
            return he("Node", e, "childNodes")
        },
        parentNode: function(e) {
            return he("Node", e, "parentNode")
        },
        parentElement: function(e) {
            return he("Node", e, "parentElement")
        },
        textContent: function(e) {
            return he("Node", e, "textContent")
        },
        contains: function(e, t) {
            return me("Node", e, "contains")(t)
        },
        getRootNode: function(e) {
            return me("Node", e, "getRootNode")()
        },
        host: function(e) {
            return e && "host"in e ? he("ShadowRoot", e, "host") : null
        },
        styleSheets: function(e) {
            return e.styleSheets
        },
        shadowRoot: function(e) {
            return e && "shadowRoot"in e ? he("Element", e, "shadowRoot") : null
        },
        querySelector: function(e, t) {
            return he("Element", e, "querySelector")(t)
        },
        querySelectorAll: function(e, t) {
            return he("Element", e, "querySelectorAll")(t)
        },
        mutationObserver: fe
    };
    function ye(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document
          , n = {
            capture: !0,
            passive: !0
        };
        return r.addEventListener(e, t, n),
        () => r.removeEventListener(e, t, n)
    }
    var ve = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording."
      , Ie = {
        map: {},
        getId: () => (console.error(ve),
        -1),
        getNode: () => (console.error(ve),
        null),
        removeNodeFromMap() {
            console.error(ve)
        },
        has: () => (console.error(ve),
        !1),
        reset() {
            console.error(ve)
        }
    };
    function be(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , n = null
          , o = 0;
        return function() {
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
                i[s] = arguments[s];
            var l = Date.now();
            o || !1 !== r.leading || (o = l);
            var c = t - (l - o)
              , d = this;
            c <= 0 || c > t ? (n && (clearTimeout(n),
            n = null),
            o = l,
            e.apply(d, i)) : n || !1 === r.trailing || (n = setTimeout(( () => {
                o = !1 === r.leading ? 0 : Date.now(),
                n = null,
                e.apply(d, i)
            }
            ), c))
        }
    }
    function Ce(e, t, r, n) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window
          , a = o.Object.getOwnPropertyDescriptor(e, t);
        return o.Object.defineProperty(e, t, n ? r : {
            set(e) {
                setTimeout(( () => {
                    r.set.call(this, e)
                }
                ), 0),
                a && a.set && a.set.call(this, e)
            }
        }),
        () => Ce(e, t, a || {}, !0)
    }
    function Se(e, t, r) {
        try {
            if (!(t in e))
                return () => {}
                ;
            var n = e[t]
              , o = r(n);
            return "function" == typeof o && (o.prototype = o.prototype || {},
            Object.defineProperties(o, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: n
                }
            })),
            e[t] = o,
            () => {
                e[t] = n
            }
        } catch (e) {
            return () => {}
        }
    }
    "undefined" != typeof window && window.Proxy && window.Reflect && (Ie = new Proxy(Ie,{
        get: (e, t, r) => ("map" === t && console.error(ve),
        Reflect.get(e, t, r))
    }));
    var we = Date.now;
    function Ne(e) {
        var t, r, n, o, a = e.document;
        return {
            left: a.scrollingElement ? a.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : a.documentElement.scrollLeft || (null == a ? void 0 : a.body) && (null == (t = ge.parentElement(a.body)) ? void 0 : t.scrollLeft) || (null == (r = null == a ? void 0 : a.body) ? void 0 : r.scrollLeft) || 0,
            top: a.scrollingElement ? a.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : (null == a ? void 0 : a.documentElement.scrollTop) || (null == a ? void 0 : a.body) && (null == (n = ge.parentElement(a.body)) ? void 0 : n.scrollTop) || (null == (o = null == a ? void 0 : a.body) ? void 0 : o.scrollTop) || 0
        }
    }
    function Me() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }
    function Ae() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }
    function ke(e) {
        return e ? e.nodeType === e.ELEMENT_NODE ? e : ge.parentElement(e) : null
    }
    function Re(e, t, r, n) {
        if (!e)
            return !1;
        var o = ke(e);
        if (!o)
            return !1;
        try {
            if ("string" == typeof t) {
                if (o.classList.contains(t))
                    return !0;
                if (n && null !== o.closest("." + t))
                    return !0
            } else if (te(o, t, n))
                return !0
        } catch (e) {}
        if (r) {
            if (o.matches(r))
                return !0;
            if (n && null !== o.closest(r))
                return !0
        }
        return !1
    }
    function Te(e, t, r) {
        return !("TITLE" !== e.tagName || !r.headTitleMutations) || t.getId(e) === X
    }
    function Ee(e, t) {
        if (M(e))
            return !1;
        var r = t.getId(e);
        if (!t.has(r))
            return !0;
        var n = ge.parentNode(e);
        return (!n || n.nodeType !== e.DOCUMENT_NODE) && (!n || Ee(n, t))
    }
    function Oe(e) {
        return Boolean(e.changedTouches)
    }
    function xe(e, t) {
        return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
    }
    function Le(e, t) {
        return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
    }
    function De(e) {
        return !!e && (e instanceof ie && "shadowRoot"in e ? Boolean(e.shadowRoot) : Boolean(ge.shadowRoot(e)))
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (we = () => (new Date).getTime());
    let Fe = class {
        constructor() {
            d(this, "id", 1),
            d(this, "styleIDMap", new WeakMap),
            d(this, "idStyleMap", new Map)
        }
        getId(e) {
            var t;
            return null !== (t = this.styleIDMap.get(e)) && void 0 !== t ? t : -1
        }
        has(e) {
            return this.styleIDMap.has(e)
        }
        add(e, t) {
            return this.has(e) ? this.getId(e) : (r = void 0 === t ? this.id++ : t,
            this.styleIDMap.set(e, r),
            this.idStyleMap.set(r, e),
            r);
            var r
        }
        getStyle(e) {
            return this.idStyleMap.get(e) || null
        }
        reset() {
            this.styleIDMap = new WeakMap,
            this.idStyleMap = new Map,
            this.id = 1
        }
        generateId() {
            return this.id++
        }
    }
    ;
    function Be(e) {
        var t, r = null;
        return "getRootNode"in e && (null == (t = ge.getRootNode(e)) ? void 0 : t.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && ge.host(ge.getRootNode(e)) && (r = ge.host(ge.getRootNode(e))),
        r
    }
    function Ze(e) {
        var t = e.ownerDocument;
        if (!t)
            return !1;
        var r = function(e) {
            for (var t, r = e; t = Be(r); )
                r = t;
            return r
        }(e);
        return ge.contains(t, r)
    }
    function _e(e) {
        var t = e.ownerDocument;
        return !!t && (ge.contains(t, e) || Ze(e))
    }
    var Ye = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
    e[e.Load = 1] = "Load",
    e[e.FullSnapshot = 2] = "FullSnapshot",
    e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
    e[e.Meta = 4] = "Meta",
    e[e.Custom = 5] = "Custom",
    e[e.Plugin = 6] = "Plugin",
    e))(Ye || {})
      , We = (e => (e[e.Mutation = 0] = "Mutation",
    e[e.MouseMove = 1] = "MouseMove",
    e[e.MouseInteraction = 2] = "MouseInteraction",
    e[e.Scroll = 3] = "Scroll",
    e[e.ViewportResize = 4] = "ViewportResize",
    e[e.Input = 5] = "Input",
    e[e.TouchMove = 6] = "TouchMove",
    e[e.MediaInteraction = 7] = "MediaInteraction",
    e[e.StyleSheetRule = 8] = "StyleSheetRule",
    e[e.CanvasMutation = 9] = "CanvasMutation",
    e[e.Font = 10] = "Font",
    e[e.Log = 11] = "Log",
    e[e.Drag = 12] = "Drag",
    e[e.StyleDeclaration = 13] = "StyleDeclaration",
    e[e.Selection = 14] = "Selection",
    e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
    e[e.CustomElement = 16] = "CustomElement",
    e))(We || {})
      , Ge = (e => (e[e.MouseUp = 0] = "MouseUp",
    e[e.MouseDown = 1] = "MouseDown",
    e[e.Click = 2] = "Click",
    e[e.ContextMenu = 3] = "ContextMenu",
    e[e.DblClick = 4] = "DblClick",
    e[e.Focus = 5] = "Focus",
    e[e.Blur = 6] = "Blur",
    e[e.TouchStart = 7] = "TouchStart",
    e[e.TouchMove_Departed = 8] = "TouchMove_Departed",
    e[e.TouchEnd = 9] = "TouchEnd",
    e[e.TouchCancel = 10] = "TouchCancel",
    e))(Ge || {})
      , Ve = (e => (e[e.Mouse = 0] = "Mouse",
    e[e.Pen = 1] = "Pen",
    e[e.Touch = 2] = "Touch",
    e))(Ve || {})
      , He = (e => (e[e["2D"] = 0] = "2D",
    e[e.WebGL = 1] = "WebGL",
    e[e.WebGL2 = 2] = "WebGL2",
    e))(He || {})
      , Pe = (e => (e[e.Play = 0] = "Play",
    e[e.Pause = 1] = "Pause",
    e[e.Seeked = 2] = "Seeked",
    e[e.VolumeChange = 3] = "VolumeChange",
    e[e.RateChange = 4] = "RateChange",
    e))(Pe || {});
    function Xe(e) {
        return "__ln"in e
    }
    class je {
        constructor() {
            d(this, "length", 0),
            d(this, "head", null),
            d(this, "tail", null)
        }
        get(e) {
            if (e >= this.length)
                throw new Error("Position outside of list range");
            for (var t = this.head, r = 0; r < e; r++)
                t = (null == t ? void 0 : t.next) || null;
            return t
        }
        addNode(e) {
            var t = {
                value: e,
                previous: null,
                next: null
            };
            if (e.__ln = t,
            e.previousSibling && Xe(e.previousSibling)) {
                var r = e.previousSibling.__ln.next;
                t.next = r,
                t.previous = e.previousSibling.__ln,
                e.previousSibling.__ln.next = t,
                r && (r.previous = t)
            } else if (e.nextSibling && Xe(e.nextSibling) && e.nextSibling.__ln.previous) {
                var n = e.nextSibling.__ln.previous;
                t.previous = n,
                t.next = e.nextSibling.__ln,
                e.nextSibling.__ln.previous = t,
                n && (n.next = t)
            } else
                this.head && (this.head.previous = t),
                t.next = this.head,
                this.head = t;
            null === t.next && (this.tail = t),
            this.length++
        }
        removeNode(e) {
            var t = e.__ln;
            this.head && (t.previous ? (t.previous.next = t.next,
            t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next,
            this.head ? this.head.previous = null : this.tail = null),
            e.__ln && delete e.__ln,
            this.length--)
        }
    }
    var ze, Ke = (e, t) => "".concat(e, "@").concat(t);
    class Je {
        constructor() {
            d(this, "frozen", !1),
            d(this, "locked", !1),
            d(this, "texts", []),
            d(this, "attributes", []),
            d(this, "attributeMap", new WeakMap),
            d(this, "removes", []),
            d(this, "mapRemoves", []),
            d(this, "movedMap", {}),
            d(this, "addedSet", new Set),
            d(this, "movedSet", new Set),
            d(this, "droppedSet", new Set),
            d(this, "mutationCb"),
            d(this, "blockClass"),
            d(this, "blockSelector"),
            d(this, "maskTextClass"),
            d(this, "maskTextSelector"),
            d(this, "inlineStylesheet"),
            d(this, "maskInputOptions"),
            d(this, "maskTextFn"),
            d(this, "maskInputFn"),
            d(this, "keepIframeSrcFn"),
            d(this, "recordCanvas"),
            d(this, "inlineImages"),
            d(this, "slimDOMOptions"),
            d(this, "dataURLOptions"),
            d(this, "doc"),
            d(this, "mirror"),
            d(this, "iframeManager"),
            d(this, "stylesheetManager"),
            d(this, "shadowDomManager"),
            d(this, "canvasManager"),
            d(this, "processedNodeManager"),
            d(this, "unattachedDoc"),
            d(this, "processMutations", (e => {
                e.forEach(this.processMutation),
                this.emit()
            }
            )),
            d(this, "emit", ( () => {
                if (!this.frozen && !this.locked) {
                    for (var e = [], t = new Set, r = new je, n = e => {
                        for (var t = e, r = X; r === X; )
                            r = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return r
                    }
                    , o = o => {
                        var a = ge.parentNode(o);
                        if (a && _e(o) && "TEXTAREA" !== a.tagName) {
                            var i = M(a) ? this.mirror.getId(Be(o)) : this.mirror.getId(a)
                              , s = n(o);
                            if (-1 === i || -1 === s)
                                return r.addNode(o);
                            var l = ae(o, {
                                doc: this.doc,
                                mirror: this.mirror,
                                blockClass: this.blockClass,
                                blockSelector: this.blockSelector,
                                maskTextClass: this.maskTextClass,
                                maskTextSelector: this.maskTextSelector,
                                skipChild: !0,
                                newlyAddedElement: !0,
                                inlineStylesheet: this.inlineStylesheet,
                                maskInputOptions: this.maskInputOptions,
                                maskTextFn: this.maskTextFn,
                                maskInputFn: this.maskInputFn,
                                slimDOMOptions: this.slimDOMOptions,
                                dataURLOptions: this.dataURLOptions,
                                recordCanvas: this.recordCanvas,
                                inlineImages: this.inlineImages,
                                onSerialize: e => {
                                    xe(e, this.mirror) && this.iframeManager.addIframe(e),
                                    Le(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                                    De(o) && this.shadowDomManager.addShadowRoot(ge.shadowRoot(o), this.doc)
                                }
                                ,
                                onIframeLoad: (e, t) => {
                                    this.iframeManager.attachIframe(e, t),
                                    this.shadowDomManager.observeAttachShadow(e)
                                }
                                ,
                                onStylesheetLoad: (e, t) => {
                                    this.stylesheetManager.attachLinkElement(e, t)
                                }
                            });
                            l && (e.push({
                                parentId: i,
                                nextId: s,
                                node: l
                            }),
                            t.add(l.id))
                        }
                    }
                    ; this.mapRemoves.length; )
                        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (var a of this.movedSet)
                        qe(this.removes, a, this.mirror) && !this.movedSet.has(ge.parentNode(a)) || o(a);
                    for (var i of this.addedSet)
                        Qe(this.droppedSet, i) || qe(this.removes, i, this.mirror) ? Qe(this.movedSet, i) ? o(i) : this.droppedSet.add(i) : o(i);
                    for (var s = null; r.length; ) {
                        var l = null;
                        if (s) {
                            var c = this.mirror.getId(ge.parentNode(s.value))
                              , d = n(s.value);
                            -1 !== c && -1 !== d && (l = s)
                        }
                        if (!l)
                            for (var u = r.tail; u; ) {
                                var h = u;
                                if (u = u.previous,
                                h) {
                                    var p = this.mirror.getId(ge.parentNode(h.value));
                                    if (-1 === n(h.value))
                                        continue;
                                    if (-1 !== p) {
                                        l = h;
                                        break
                                    }
                                    var m = h.value
                                      , f = ge.parentNode(m);
                                    if (f && f.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        var g = ge.host(f);
                                        if (-1 !== this.mirror.getId(g)) {
                                            l = h;
                                            break
                                        }
                                    }
                                }
                            }
                        if (!l) {
                            for (; r.head; )
                                r.removeNode(r.head.value);
                            break
                        }
                        s = l.previous,
                        r.removeNode(l.value),
                        o(l.value)
                    }
                    var y = {
                        texts: this.texts.map((e => {
                            var t = e.node
                              , r = ge.parentNode(t);
                            return r && "TEXTAREA" === r.tagName && this.genTextAreaValueMutation(r),
                            {
                                id: this.mirror.getId(t),
                                value: e.value
                            }
                        }
                        )).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                        attributes: this.attributes.map((e => {
                            var {attributes: t} = e;
                            if ("string" == typeof t.style) {
                                var r = JSON.stringify(e.styleDiff)
                                  , n = JSON.stringify(e._unchangedStyles);
                                r.length < t.style.length && (r + n).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                            }
                            return {
                                id: this.mirror.getId(e.node),
                                attributes: t
                            }
                        }
                        )).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                        removes: this.removes,
                        adds: e
                    };
                    (y.texts.length || y.attributes.length || y.removes.length || y.adds.length) && (this.texts = [],
                    this.attributes = [],
                    this.attributeMap = new WeakMap,
                    this.removes = [],
                    this.addedSet = new Set,
                    this.movedSet = new Set,
                    this.droppedSet = new Set,
                    this.movedMap = {},
                    this.mutationCb(y))
                }
            }
            )),
            d(this, "genTextAreaValueMutation", (e => {
                var t = this.attributeMap.get(e);
                t || (t = {
                    node: e,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {}
                },
                this.attributes.push(t),
                this.attributeMap.set(e, t)),
                t.attributes.value = Array.from(ge.childNodes(e), (e => ge.textContent(e) || "")).join("")
            }
            )),
            d(this, "processMutation", (e => {
                if (!Te(e.target, this.mirror, this.slimDOMOptions))
                    switch (e.type) {
                    case "characterData":
                        var t = ge.textContent(e.target);
                        Re(e.target, this.blockClass, this.blockSelector, !1) || t === e.oldValue || this.texts.push({
                            value: re(e.target, this.maskTextClass, this.maskTextSelector, !0) && t ? this.maskTextFn ? this.maskTextFn(t, ke(e.target)) : t.replace(/[\S]/g, "*") : t,
                            node: e.target
                        });
                        break;
                    case "attributes":
                        var r = e.target
                          , n = e.attributeName
                          , o = e.target.getAttribute(n);
                        if ("value" === n) {
                            var a = D(r);
                            o = O({
                                element: r,
                                maskInputOptions: this.maskInputOptions,
                                tagName: r.tagName,
                                type: a,
                                value: o,
                                maskInputFn: this.maskInputFn
                            })
                        }
                        if (Re(e.target, this.blockClass, this.blockSelector, !1) || o === e.oldValue)
                            return;
                        var i = this.attributeMap.get(e.target);
                        if ("IFRAME" === r.tagName && "src" === n && !this.keepIframeSrcFn(o)) {
                            if (r.contentDocument)
                                return;
                            n = "rr_src"
                        }
                        if (i || (i = {
                            node: e.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {}
                        },
                        this.attributes.push(i),
                        this.attributeMap.set(e.target, i)),
                        "type" === n && "INPUT" === r.tagName && "password" === (e.oldValue || "").toLowerCase() && r.setAttribute("data-rr-is-password", "true"),
                        !ee(r.tagName, n))
                            if (i.attributes[n] = $(this.doc, x(r.tagName), x(n), o),
                            "style" === n) {
                                if (!this.unattachedDoc)
                                    try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument()
                                    } catch (e) {
                                        this.unattachedDoc = this.doc
                                    }
                                var s = this.unattachedDoc.createElement("span");
                                for (var l of (e.oldValue && s.setAttribute("style", e.oldValue),
                                Array.from(r.style))) {
                                    var c = r.style.getPropertyValue(l)
                                      , d = r.style.getPropertyPriority(l);
                                    c !== s.style.getPropertyValue(l) || d !== s.style.getPropertyPriority(l) ? i.styleDiff[l] = "" === d ? c : [c, d] : i._unchangedStyles[l] = [c, d]
                                }
                                for (var u of Array.from(s.style))
                                    "" === r.style.getPropertyValue(u) && (i.styleDiff[u] = !1)
                            } else
                                "open" === n && "DIALOG" === r.tagName && (r.matches("dialog:modal") ? i.attributes.rr_open_mode = "modal" : i.attributes.rr_open_mode = "non-modal");
                        break;
                    case "childList":
                        if (Re(e.target, this.blockClass, this.blockSelector, !0))
                            return;
                        if ("TEXTAREA" === e.target.tagName)
                            return void this.genTextAreaValueMutation(e.target);
                        e.addedNodes.forEach((t => this.genAdds(t, e.target))),
                        e.removedNodes.forEach((t => {
                            var r = this.mirror.getId(t)
                              , n = M(e.target) ? this.mirror.getId(ge.host(e.target)) : this.mirror.getId(e.target);
                            Re(e.target, this.blockClass, this.blockSelector, !1) || Te(t, this.mirror, this.slimDOMOptions) || !function(e, t) {
                                return -1 !== t.getId(e)
                            }(t, this.mirror) || (this.addedSet.has(t) ? (Ue(this.addedSet, t),
                            this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === r || Ee(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[Ke(r, n)] ? Ue(this.movedSet, t) : this.removes.push({
                                parentId: n,
                                id: r,
                                isShadow: !(!M(e.target) || !A(e.target)) || void 0
                            })),
                            this.mapRemoves.push(t))
                        }
                        ))
                    }
            }
            )),
            d(this, "genAdds", ( (e, t) => {
                if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
                    if (this.mirror.hasNode(e)) {
                        if (Te(e, this.mirror, this.slimDOMOptions))
                            return;
                        this.movedSet.add(e);
                        var r = null;
                        t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)),
                        r && -1 !== r && (this.movedMap[Ke(this.mirror.getId(e), r)] = !0)
                    } else
                        this.addedSet.add(e),
                        this.droppedSet.delete(e);
                    Re(e, this.blockClass, this.blockSelector, !1) || (ge.childNodes(e).forEach((e => this.genAdds(e))),
                    De(e) && ge.childNodes(ge.shadowRoot(e)).forEach((t => {
                        this.processedNodeManager.add(t, this),
                        this.genAdds(t, e)
                    }
                    )))
                }
            }
            ))
        }
        init(e) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((t => {
                this[t] = e[t]
            }
            ))
        }
        freeze() {
            this.frozen = !0,
            this.canvasManager.freeze()
        }
        unfreeze() {
            this.frozen = !1,
            this.canvasManager.unfreeze(),
            this.emit()
        }
        isFrozen() {
            return this.frozen
        }
        lock() {
            this.locked = !0,
            this.canvasManager.lock()
        }
        unlock() {
            this.locked = !1,
            this.canvasManager.unlock(),
            this.emit()
        }
        reset() {
            this.shadowDomManager.reset(),
            this.canvasManager.reset()
        }
    }
    function Ue(e, t) {
        e.delete(t),
        ge.childNodes(t).forEach((t => Ue(e, t)))
    }
    function qe(e, t, r) {
        return 0 !== e.length && function(e, t, r) {
            var n = ge.parentNode(t)
              , o = function() {
                var t = r.getId(n);
                if (e.some((e => e.id === t)))
                    return {
                        v: !0
                    };
                n = ge.parentNode(n)
            };
            for (; n; ) {
                var a = o();
                if ("object" == typeof a)
                    return a.v
            }
            return !1
        }(e, t, r)
    }
    function Qe(e, t) {
        return 0 !== e.size && $e(e, t)
    }
    function $e(e, t) {
        var r = ge.parentNode(t);
        return !!r && (!!e.has(r) || $e(e, r))
    }
    var et = e => {
        if (!ze)
            return e;
        return function() {
            try {
                return e(...arguments)
            } catch (e) {
                if (ze && !0 === ze(e))
                    return;
                throw e
            }
        }
    }
      , tt = [];
    function rt(e) {
        try {
            if ("composedPath"in e) {
                var t = e.composedPath();
                if (t.length)
                    return t[0]
            } else if ("path"in e && e.path.length)
                return e.path[0]
        } catch (e) {}
        return e && e.target
    }
    function nt(e, t) {
        var r = new Je;
        tt.push(r),
        r.init(e);
        var n = new (fe())(et(r.processMutations.bind(r)));
        return n.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }),
        n
    }
    function ot(e) {
        var {mouseInteractionCb: t, doc: n, mirror: o, blockClass: a, blockSelector: i, sampling: s} = e;
        if (!1 === s.mouseInteraction)
            return () => {}
            ;
        var l = !0 === s.mouseInteraction || void 0 === s.mouseInteraction ? {} : s.mouseInteraction
          , c = []
          , d = null;
        return Object.keys(Ge).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== l[e])).forEach((e => {
            var s = x(e)
              , l = (e => n => {
                var s = rt(n);
                if (!Re(s, a, i, !0)) {
                    var l = null
                      , c = e;
                    if ("pointerType"in n) {
                        switch (n.pointerType) {
                        case "mouse":
                            l = Ve.Mouse;
                            break;
                        case "touch":
                            l = Ve.Touch;
                            break;
                        case "pen":
                            l = Ve.Pen
                        }
                        l === Ve.Touch ? Ge[e] === Ge.MouseDown ? c = "TouchStart" : Ge[e] === Ge.MouseUp && (c = "TouchEnd") : Ve.Pen
                    } else
                        Oe(n) && (l = Ve.Touch);
                    null !== l ? (d = l,
                    (c.startsWith("Touch") && l === Ve.Touch || c.startsWith("Mouse") && l === Ve.Mouse) && (l = null)) : Ge[e] === Ge.Click && (l = d,
                    d = null);
                    var u = Oe(n) ? n.changedTouches[0] : n;
                    if (u) {
                        var h = o.getId(s)
                          , {clientX: p, clientY: m} = u;
                        et(t)(r({
                            type: Ge[c],
                            id: h,
                            x: p,
                            y: m
                        }, null !== l && {
                            pointerType: l
                        }))
                    }
                }
            }
            )(e);
            if (window.PointerEvent)
                switch (Ge[e]) {
                case Ge.MouseDown:
                case Ge.MouseUp:
                    s = s.replace("mouse", "pointer");
                    break;
                case Ge.TouchStart:
                case Ge.TouchEnd:
                    return
                }
            c.push(ye(s, l, n))
        }
        )),
        et(( () => {
            c.forEach((e => e()))
        }
        ))
    }
    function at(e) {
        var {scrollCb: t, doc: r, mirror: n, blockClass: o, blockSelector: a, sampling: i} = e;
        return ye("scroll", et(be(et((e => {
            var i = rt(e);
            if (i && !Re(i, o, a, !0)) {
                var s = n.getId(i);
                if (i === r && r.defaultView) {
                    var l = Ne(r.defaultView);
                    t({
                        id: s,
                        x: l.left,
                        y: l.top
                    })
                } else
                    t({
                        id: s,
                        x: i.scrollLeft,
                        y: i.scrollTop
                    })
            }
        }
        )), i.scroll || 100)), r)
    }
    var it = ["INPUT", "TEXTAREA", "SELECT"]
      , st = new WeakMap;
    function lt(e) {
        return function(e, t) {
            if (ht("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || ht("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || ht("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || ht("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
                var r = Array.from(e.parentRule.cssRules).indexOf(e);
                t.unshift(r)
            } else if (e.parentStyleSheet) {
                var n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                t.unshift(n)
            }
            return t
        }(e, [])
    }
    function ct(e, t, r) {
        var n, o;
        return e ? (e.ownerNode ? n = t.getId(e.ownerNode) : o = r.getId(e),
        {
            styleId: o,
            id: n
        }) : {}
    }
    function dt(e, t) {
        var r, n, o, {mirror: a, stylesheetManager: i} = e, s = null;
        s = "#document" === t.nodeName ? a.getId(t) : a.getId(ge.host(t));
        var l = "#document" === t.nodeName ? null == (r = t.defaultView) ? void 0 : r.Document : null == (o = null == (n = t.ownerDocument) ? void 0 : n.defaultView) ? void 0 : o.ShadowRoot
          , c = (null == l ? void 0 : l.prototype) ? Object.getOwnPropertyDescriptor(null == l ? void 0 : l.prototype, "adoptedStyleSheets") : void 0;
        return null !== s && -1 !== s && l && c ? (Object.defineProperty(t, "adoptedStyleSheets", {
            configurable: c.configurable,
            enumerable: c.enumerable,
            get() {
                var e;
                return null == (e = c.get) ? void 0 : e.call(this)
            },
            set(e) {
                var t, r = null == (t = c.set) ? void 0 : t.call(this, e);
                if (null !== s && -1 !== s)
                    try {
                        i.adoptStyleSheets(e, s)
                    } catch (e) {}
                return r
            }
        }),
        et(( () => {
            Object.defineProperty(t, "adoptedStyleSheets", {
                configurable: c.configurable,
                enumerable: c.enumerable,
                get: c.get,
                set: c.set
            })
        }
        ))) : () => {}
    }
    function ut(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = e.doc.defaultView;
        if (!o)
            return () => {}
            ;
        !function(e, t) {
            var {mutationCb: r, mousemoveCb: n, mouseInteractionCb: o, scrollCb: a, viewportResizeCb: i, inputCb: s, mediaInteractionCb: l, styleSheetRuleCb: c, styleDeclarationCb: d, canvasMutationCb: u, fontCb: h, selectionCb: p, customElementCb: m} = e;
            e.mutationCb = function() {
                t.mutation && t.mutation(...arguments),
                r(...arguments)
            }
            ,
            e.mousemoveCb = function() {
                t.mousemove && t.mousemove(...arguments),
                n(...arguments)
            }
            ,
            e.mouseInteractionCb = function() {
                t.mouseInteraction && t.mouseInteraction(...arguments),
                o(...arguments)
            }
            ,
            e.scrollCb = function() {
                t.scroll && t.scroll(...arguments),
                a(...arguments)
            }
            ,
            e.viewportResizeCb = function() {
                t.viewportResize && t.viewportResize(...arguments),
                i(...arguments)
            }
            ,
            e.inputCb = function() {
                t.input && t.input(...arguments),
                s(...arguments)
            }
            ,
            e.mediaInteractionCb = function() {
                t.mediaInteaction && t.mediaInteaction(...arguments),
                l(...arguments)
            }
            ,
            e.styleSheetRuleCb = function() {
                t.styleSheetRule && t.styleSheetRule(...arguments),
                c(...arguments)
            }
            ,
            e.styleDeclarationCb = function() {
                t.styleDeclaration && t.styleDeclaration(...arguments),
                d(...arguments)
            }
            ,
            e.canvasMutationCb = function() {
                t.canvasMutation && t.canvasMutation(...arguments),
                u(...arguments)
            }
            ,
            e.fontCb = function() {
                t.font && t.font(...arguments),
                h(...arguments)
            }
            ,
            e.selectionCb = function() {
                t.selection && t.selection(...arguments),
                p(...arguments)
            }
            ,
            e.customElementCb = function() {
                t.customElement && t.customElement(...arguments),
                m(...arguments)
            }
        }(e, n),
        e.recordDOM && (t = nt(e, e.doc));
        var a = function(e) {
            var {mousemoveCb: t, sampling: r, doc: n, mirror: o} = e;
            if (!1 === r.mousemove)
                return () => {}
                ;
            var a, i = "number" == typeof r.mousemove ? r.mousemove : 50, s = "number" == typeof r.mousemoveCallback ? r.mousemoveCallback : 500, l = [], c = be(et((e => {
                var r = Date.now() - a;
                t(l.map((e => (e.timeOffset -= r,
                e))), e),
                l = [],
                a = null
            }
            )), s), d = et(be(et((e => {
                var t = rt(e)
                  , {clientX: r, clientY: n} = Oe(e) ? e.changedTouches[0] : e;
                a || (a = we()),
                l.push({
                    x: r,
                    y: n,
                    id: o.getId(t),
                    timeOffset: we() - a
                }),
                c("undefined" != typeof DragEvent && e instanceof DragEvent ? We.Drag : e instanceof MouseEvent ? We.MouseMove : We.TouchMove)
            }
            )), i, {
                trailing: !1
            })), u = [ye("mousemove", d, n), ye("touchmove", d, n), ye("drag", d, n)];
            return et(( () => {
                u.forEach((e => e()))
            }
            ))
        }(e)
          , i = ot(e)
          , s = at(e)
          , l = function(e, t) {
            var {viewportResizeCb: r} = e
              , {win: n} = t
              , o = -1
              , a = -1;
            return ye("resize", et(be(et(( () => {
                var e = Me()
                  , t = Ae();
                o === e && a === t || (r({
                    width: Number(t),
                    height: Number(e)
                }),
                o = e,
                a = t)
            }
            )), 200)), n)
        }(e, {
            win: o
        })
          , c = function(e) {
            var {inputCb: t, doc: n, mirror: o, blockClass: a, blockSelector: i, ignoreClass: s, ignoreSelector: l, maskInputOptions: c, maskInputFn: d, sampling: u, userTriggeredOnInput: h} = e;
            function p(e) {
                var t = rt(e)
                  , r = e.isTrusted
                  , o = t && t.tagName;
                if (t && "OPTION" === o && (t = ge.parentElement(t)),
                t && o && !(it.indexOf(o) < 0) && !Re(t, a, i, !0) && !(t.classList.contains(s) || l && t.matches(l))) {
                    var u = t.value
                      , p = !1
                      , f = D(t) || "";
                    "radio" === f || "checkbox" === f ? p = t.checked : (c[o.toLowerCase()] || c[f]) && (u = O({
                        element: t,
                        maskInputOptions: c,
                        tagName: o,
                        type: f,
                        value: u,
                        maskInputFn: d
                    })),
                    m(t, h ? {
                        text: u,
                        isChecked: p,
                        userTriggered: r
                    } : {
                        text: u,
                        isChecked: p
                    });
                    var g = t.name;
                    "radio" === f && g && p && n.querySelectorAll('input[type="radio"][name="'.concat(g, '"]')).forEach((e => {
                        if (e !== t) {
                            var r = e.value;
                            m(e, h ? {
                                text: r,
                                isChecked: !p,
                                userTriggered: !1
                            } : {
                                text: r,
                                isChecked: !p
                            })
                        }
                    }
                    ))
                }
            }
            function m(e, n) {
                var a = st.get(e);
                if (!a || a.text !== n.text || a.isChecked !== n.isChecked) {
                    st.set(e, n);
                    var i = o.getId(e);
                    et(t)(r(r({}, n), {}, {
                        id: i
                    }))
                }
            }
            var f = ("last" === u.input ? ["change"] : ["input", "change"]).map((e => ye(e, et(p), n)))
              , g = n.defaultView;
            if (!g)
                return () => {
                    f.forEach((e => e()))
                }
                ;
            var y = g.Object.getOwnPropertyDescriptor(g.HTMLInputElement.prototype, "value")
              , v = [[g.HTMLInputElement.prototype, "value"], [g.HTMLInputElement.prototype, "checked"], [g.HTMLSelectElement.prototype, "value"], [g.HTMLTextAreaElement.prototype, "value"], [g.HTMLSelectElement.prototype, "selectedIndex"], [g.HTMLOptionElement.prototype, "selected"]];
            return y && y.set && f.push(...v.map((e => Ce(e[0], e[1], {
                set() {
                    et(p)({
                        target: this,
                        isTrusted: !1
                    })
                }
            }, !1, g)))),
            et(( () => {
                f.forEach((e => e()))
            }
            ))
        }(e)
          , d = function(e) {
            var {mediaInteractionCb: t, blockClass: r, blockSelector: n, mirror: o, sampling: a, doc: i} = e
              , s = et((e => be(et((a => {
                var i = rt(a);
                if (i && !Re(i, r, n, !0)) {
                    var {currentTime: s, volume: l, muted: c, playbackRate: d, loop: u} = i;
                    t({
                        type: e,
                        id: o.getId(i),
                        currentTime: s,
                        volume: l,
                        muted: c,
                        playbackRate: d,
                        loop: u
                    })
                }
            }
            )), a.media || 500)))
              , l = [ye("play", s(Pe.Play), i), ye("pause", s(Pe.Pause), i), ye("seeked", s(Pe.Seeked), i), ye("volumechange", s(Pe.VolumeChange), i), ye("ratechange", s(Pe.RateChange), i)];
            return et(( () => {
                l.forEach((e => e()))
            }
            ))
        }(e)
          , u = () => {}
          , h = () => {}
          , p = () => {}
          , m = () => {}
        ;
        e.recordDOM && (u = function(e, t) {
            var {styleSheetRuleCb: r, mirror: n, stylesheetManager: o} = e
              , {win: a} = t;
            if (!a.CSSStyleSheet || !a.CSSStyleSheet.prototype)
                return () => {}
                ;
            var i = a.CSSStyleSheet.prototype.insertRule;
            a.CSSStyleSheet.prototype.insertRule = new Proxy(i,{
                apply: et(( (e, t, a) => {
                    var [i,s] = a
                      , {id: l, styleId: c} = ct(t, n, o.styleMirror);
                    return (l && -1 !== l || c && -1 !== c) && r({
                        id: l,
                        styleId: c,
                        adds: [{
                            rule: i,
                            index: s
                        }]
                    }),
                    e.apply(t, a)
                }
                ))
            }),
            a.CSSStyleSheet.prototype.addRule = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length
                  , n = "".concat(e, " { ").concat(t, " }");
                return a.CSSStyleSheet.prototype.insertRule.apply(this, [n, r])
            }
            ;
            var s, l, c = a.CSSStyleSheet.prototype.deleteRule;
            a.CSSStyleSheet.prototype.deleteRule = new Proxy(c,{
                apply: et(( (e, t, a) => {
                    var [i] = a
                      , {id: s, styleId: l} = ct(t, n, o.styleMirror);
                    return (s && -1 !== s || l && -1 !== l) && r({
                        id: s,
                        styleId: l,
                        removes: [{
                            index: i
                        }]
                    }),
                    e.apply(t, a)
                }
                ))
            }),
            a.CSSStyleSheet.prototype.removeRule = function(e) {
                return a.CSSStyleSheet.prototype.deleteRule.apply(this, [e])
            }
            ,
            a.CSSStyleSheet.prototype.replace && (s = a.CSSStyleSheet.prototype.replace,
            a.CSSStyleSheet.prototype.replace = new Proxy(s,{
                apply: et(( (e, t, a) => {
                    var [i] = a
                      , {id: s, styleId: l} = ct(t, n, o.styleMirror);
                    return (s && -1 !== s || l && -1 !== l) && r({
                        id: s,
                        styleId: l,
                        replace: i
                    }),
                    e.apply(t, a)
                }
                ))
            })),
            a.CSSStyleSheet.prototype.replaceSync && (l = a.CSSStyleSheet.prototype.replaceSync,
            a.CSSStyleSheet.prototype.replaceSync = new Proxy(l,{
                apply: et(( (e, t, a) => {
                    var [i] = a
                      , {id: s, styleId: l} = ct(t, n, o.styleMirror);
                    return (s && -1 !== s || l && -1 !== l) && r({
                        id: s,
                        styleId: l,
                        replaceSync: i
                    }),
                    e.apply(t, a)
                }
                ))
            }));
            var d = {};
            pt("CSSGroupingRule") ? d.CSSGroupingRule = a.CSSGroupingRule : (pt("CSSMediaRule") && (d.CSSMediaRule = a.CSSMediaRule),
            pt("CSSConditionRule") && (d.CSSConditionRule = a.CSSConditionRule),
            pt("CSSSupportsRule") && (d.CSSSupportsRule = a.CSSSupportsRule));
            var u = {};
            return Object.entries(d).forEach((e => {
                var [t,a] = e;
                u[t] = {
                    insertRule: a.prototype.insertRule,
                    deleteRule: a.prototype.deleteRule
                },
                a.prototype.insertRule = new Proxy(u[t].insertRule,{
                    apply: et(( (e, t, a) => {
                        var [i,s] = a
                          , {id: l, styleId: c} = ct(t.parentStyleSheet, n, o.styleMirror);
                        return (l && -1 !== l || c && -1 !== c) && r({
                            id: l,
                            styleId: c,
                            adds: [{
                                rule: i,
                                index: [...lt(t), s || 0]
                            }]
                        }),
                        e.apply(t, a)
                    }
                    ))
                }),
                a.prototype.deleteRule = new Proxy(u[t].deleteRule,{
                    apply: et(( (e, t, a) => {
                        var [i] = a
                          , {id: s, styleId: l} = ct(t.parentStyleSheet, n, o.styleMirror);
                        return (s && -1 !== s || l && -1 !== l) && r({
                            id: s,
                            styleId: l,
                            removes: [{
                                index: [...lt(t), i]
                            }]
                        }),
                        e.apply(t, a)
                    }
                    ))
                })
            }
            )),
            et(( () => {
                a.CSSStyleSheet.prototype.insertRule = i,
                a.CSSStyleSheet.prototype.deleteRule = c,
                s && (a.CSSStyleSheet.prototype.replace = s),
                l && (a.CSSStyleSheet.prototype.replaceSync = l),
                Object.entries(d).forEach((e => {
                    var [t,r] = e;
                    r.prototype.insertRule = u[t].insertRule,
                    r.prototype.deleteRule = u[t].deleteRule
                }
                ))
            }
            ))
        }(e, {
            win: o
        }),
        h = dt(e, e.doc),
        p = function(e, t) {
            var {styleDeclarationCb: r, mirror: n, ignoreCSSAttributes: o, stylesheetManager: a} = e
              , {win: i} = t
              , s = i.CSSStyleDeclaration.prototype.setProperty;
            i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s,{
                apply: et(( (e, t, i) => {
                    var l, [c,d,u] = i;
                    if (o.has(c))
                        return s.apply(t, [c, d, u]);
                    var {id: h, styleId: p} = ct(null == (l = t.parentRule) ? void 0 : l.parentStyleSheet, n, a.styleMirror);
                    return (h && -1 !== h || p && -1 !== p) && r({
                        id: h,
                        styleId: p,
                        set: {
                            property: c,
                            value: d,
                            priority: u
                        },
                        index: lt(t.parentRule)
                    }),
                    e.apply(t, i)
                }
                ))
            });
            var l = i.CSSStyleDeclaration.prototype.removeProperty;
            return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(l,{
                apply: et(( (e, t, i) => {
                    var s, [c] = i;
                    if (o.has(c))
                        return l.apply(t, [c]);
                    var {id: d, styleId: u} = ct(null == (s = t.parentRule) ? void 0 : s.parentStyleSheet, n, a.styleMirror);
                    return (d && -1 !== d || u && -1 !== u) && r({
                        id: d,
                        styleId: u,
                        remove: {
                            property: c
                        },
                        index: lt(t.parentRule)
                    }),
                    e.apply(t, i)
                }
                ))
            }),
            et(( () => {
                i.CSSStyleDeclaration.prototype.setProperty = s,
                i.CSSStyleDeclaration.prototype.removeProperty = l
            }
            ))
        }(e, {
            win: o
        }),
        e.collectFonts && (m = function(e) {
            var {fontCb: t, doc: r} = e
              , n = r.defaultView;
            if (!n)
                return () => {}
                ;
            var o = []
              , a = new WeakMap
              , i = n.FontFace;
            n.FontFace = function(e, t, r) {
                var n = new i(e,t,r);
                return a.set(n, {
                    family: e,
                    buffer: "string" != typeof t,
                    descriptors: r,
                    fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                }),
                n
            }
            ;
            var s = Se(r.fonts, "add", (function(e) {
                return function(r) {
                    return setTimeout(et(( () => {
                        var e = a.get(r);
                        e && (t(e),
                        a.delete(r))
                    }
                    )), 0),
                    e.apply(this, [r])
                }
            }
            ));
            return o.push(( () => {
                n.FontFace = i
            }
            )),
            o.push(s),
            et(( () => {
                o.forEach((e => e()))
            }
            ))
        }(e)));
        var f = function(e) {
            var {doc: t, mirror: r, blockClass: n, blockSelector: o, selectionCb: a} = e
              , i = !0
              , s = et(( () => {
                var e = t.getSelection();
                if (!(!e || i && (null == e ? void 0 : e.isCollapsed))) {
                    i = e.isCollapsed || !1;
                    for (var s = [], l = e.rangeCount || 0, c = 0; c < l; c++) {
                        var d = e.getRangeAt(c)
                          , {startContainer: u, startOffset: h, endContainer: p, endOffset: m} = d;
                        Re(u, n, o, !0) || Re(p, n, o, !0) || s.push({
                            start: r.getId(u),
                            startOffset: h,
                            end: r.getId(p),
                            endOffset: m
                        })
                    }
                    a({
                        ranges: s
                    })
                }
            }
            ));
            return s(),
            ye("selectionchange", s)
        }(e)
          , g = function(e) {
            var {doc: t, customElementCb: r} = e
              , n = t.defaultView;
            return n && n.customElements ? Se(n.customElements, "define", (function(e) {
                return function(t, n, o) {
                    try {
                        r({
                            define: {
                                name: t
                            }
                        })
                    } catch (e) {
                        console.warn("Custom element callback failed for ".concat(t))
                    }
                    return e.apply(this, [t, n, o])
                }
            }
            )) : () => {}
        }(e)
          , y = [];
        for (var v of e.plugins)
            y.push(v.observer(v.callback, o, v.options));
        return et(( () => {
            tt.forEach((e => e.reset())),
            null == t || t.disconnect(),
            a(),
            i(),
            s(),
            l(),
            c(),
            d(),
            u(),
            h(),
            p(),
            m(),
            f(),
            g(),
            y.forEach((e => e()))
        }
        ))
    }
    function ht(e) {
        return void 0 !== window[e]
    }
    function pt(e) {
        return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
    }
    class mt {
        constructor(e) {
            d(this, "iframeIdToRemoteIdMap", new WeakMap),
            d(this, "iframeRemoteIdToIdMap", new WeakMap),
            this.generateIdFn = e
        }
        getId(e, t, r, n) {
            var o = r || this.getIdToRemoteIdMap(e)
              , a = n || this.getRemoteIdToIdMap(e)
              , i = o.get(t);
            return i || (i = this.generateIdFn(),
            o.set(t, i),
            a.set(i, t)),
            i
        }
        getIds(e, t) {
            var r = this.getIdToRemoteIdMap(e)
              , n = this.getRemoteIdToIdMap(e);
            return t.map((t => this.getId(e, t, r, n)))
        }
        getRemoteId(e, t, r) {
            var n = r || this.getRemoteIdToIdMap(e);
            if ("number" != typeof t)
                return t;
            var o = n.get(t);
            return o || -1
        }
        getRemoteIds(e, t) {
            var r = this.getRemoteIdToIdMap(e);
            return t.map((t => this.getRemoteId(e, t, r)))
        }
        reset(e) {
            if (!e)
                return this.iframeIdToRemoteIdMap = new WeakMap,
                void (this.iframeRemoteIdToIdMap = new WeakMap);
            this.iframeIdToRemoteIdMap.delete(e),
            this.iframeRemoteIdToIdMap.delete(e)
        }
        getIdToRemoteIdMap(e) {
            var t = this.iframeIdToRemoteIdMap.get(e);
            return t || (t = new Map,
            this.iframeIdToRemoteIdMap.set(e, t)),
            t
        }
        getRemoteIdToIdMap(e) {
            var t = this.iframeRemoteIdToIdMap.get(e);
            return t || (t = new Map,
            this.iframeRemoteIdToIdMap.set(e, t)),
            t
        }
    }
    class ft {
        constructor(e) {
            d(this, "iframes", new WeakMap),
            d(this, "crossOriginIframeMap", new WeakMap),
            d(this, "crossOriginIframeMirror", new mt(j)),
            d(this, "crossOriginIframeStyleMirror"),
            d(this, "crossOriginIframeRootIdMap", new WeakMap),
            d(this, "mirror"),
            d(this, "mutationCb"),
            d(this, "wrappedEmit"),
            d(this, "loadListener"),
            d(this, "stylesheetManager"),
            d(this, "recordCrossOriginIframes"),
            this.mutationCb = e.mutationCb,
            this.wrappedEmit = e.wrappedEmit,
            this.stylesheetManager = e.stylesheetManager,
            this.recordCrossOriginIframes = e.recordCrossOriginIframes,
            this.crossOriginIframeStyleMirror = new mt(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
            this.mirror = e.mirror,
            this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(e) {
            this.iframes.set(e, !0),
            e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
        }
        addLoadListener(e) {
            this.loadListener = e
        }
        attachIframe(e, t) {
            var r, n;
            this.mutationCb({
                adds: [{
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
            }),
            this.recordCrossOriginIframes && (null == (r = e.contentWindow) || r.addEventListener("message", this.handleMessage.bind(this))),
            null == (n = this.loadListener) || n.call(this, e),
            e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
        }
        handleMessage(e) {
            var t = e;
            if ("rrweb" === t.data.type && t.origin === t.data.origin && e.source) {
                var r = this.crossOriginIframeMap.get(e.source);
                if (r) {
                    var n = this.transformCrossOriginEvent(r, t.data.event);
                    n && this.wrappedEmit(n, t.data.isCheckout)
                }
            }
        }
        transformCrossOriginEvent(e, t) {
            var r;
            switch (t.type) {
            case Ye.FullSnapshot:
                this.crossOriginIframeMirror.reset(e),
                this.crossOriginIframeStyleMirror.reset(e),
                this.replaceIdOnNode(t.data.node, e);
                var n = t.data.node.id;
                return this.crossOriginIframeRootIdMap.set(e, n),
                this.patchRootIdOnNode(t.data.node, n),
                {
                    timestamp: t.timestamp,
                    type: Ye.IncrementalSnapshot,
                    data: {
                        source: We.Mutation,
                        adds: [{
                            parentId: this.mirror.getId(e),
                            nextId: null,
                            node: t.data.node
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }
                };
            case Ye.Meta:
            case Ye.Load:
            case Ye.DomContentLoaded:
                return !1;
            case Ye.Plugin:
                return t;
            case Ye.Custom:
                return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]),
                t;
            case Ye.IncrementalSnapshot:
                switch (t.data.source) {
                case We.Mutation:
                    return t.data.adds.forEach((t => {
                        this.replaceIds(t, e, ["parentId", "nextId", "previousId"]),
                        this.replaceIdOnNode(t.node, e);
                        var r = this.crossOriginIframeRootIdMap.get(e);
                        r && this.patchRootIdOnNode(t.node, r)
                    }
                    )),
                    t.data.removes.forEach((t => {
                        this.replaceIds(t, e, ["parentId", "id"])
                    }
                    )),
                    t.data.attributes.forEach((t => {
                        this.replaceIds(t, e, ["id"])
                    }
                    )),
                    t.data.texts.forEach((t => {
                        this.replaceIds(t, e, ["id"])
                    }
                    )),
                    t;
                case We.Drag:
                case We.TouchMove:
                case We.MouseMove:
                    return t.data.positions.forEach((t => {
                        this.replaceIds(t, e, ["id"])
                    }
                    )),
                    t;
                case We.ViewportResize:
                    return !1;
                case We.MediaInteraction:
                case We.MouseInteraction:
                case We.Scroll:
                case We.CanvasMutation:
                case We.Input:
                    return this.replaceIds(t.data, e, ["id"]),
                    t;
                case We.StyleSheetRule:
                case We.StyleDeclaration:
                    return this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleId"]),
                    t;
                case We.Font:
                    return t;
                case We.Selection:
                    return t.data.ranges.forEach((t => {
                        this.replaceIds(t, e, ["start", "end"])
                    }
                    )),
                    t;
                case We.AdoptedStyleSheet:
                    return this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleIds"]),
                    null == (r = t.data.styles) || r.forEach((t => {
                        this.replaceStyleIds(t, e, ["styleId"])
                    }
                    )),
                    t
                }
            }
            return !1
        }
        replace(e, t, r, n) {
            for (var o of n)
                (Array.isArray(t[o]) || "number" == typeof t[o]) && (Array.isArray(t[o]) ? t[o] = e.getIds(r, t[o]) : t[o] = e.getId(r, t[o]));
            return t
        }
        replaceIds(e, t, r) {
            return this.replace(this.crossOriginIframeMirror, e, t, r)
        }
        replaceStyleIds(e, t, r) {
            return this.replace(this.crossOriginIframeStyleMirror, e, t, r)
        }
        replaceIdOnNode(e, t) {
            this.replaceIds(e, t, ["id", "rootId"]),
            "childNodes"in e && e.childNodes.forEach((e => {
                this.replaceIdOnNode(e, t)
            }
            ))
        }
        patchRootIdOnNode(e, t) {
            e.type === p.Document || e.rootId || (e.rootId = t),
            "childNodes"in e && e.childNodes.forEach((e => {
                this.patchRootIdOnNode(e, t)
            }
            ))
        }
    }
    class gt {
        constructor(e) {
            d(this, "shadowDoms", new WeakSet),
            d(this, "mutationCb"),
            d(this, "scrollCb"),
            d(this, "bypassOptions"),
            d(this, "mirror"),
            d(this, "restoreHandlers", []),
            this.mutationCb = e.mutationCb,
            this.scrollCb = e.scrollCb,
            this.bypassOptions = e.bypassOptions,
            this.mirror = e.mirror,
            this.init()
        }
        init() {
            this.reset(),
            this.patchAttachShadow(Element, document)
        }
        addShadowRoot(e, t) {
            if (A(e) && !this.shadowDoms.has(e)) {
                this.shadowDoms.add(e);
                var n = nt(r(r({}, this.bypassOptions), {}, {
                    doc: t,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }), e);
                this.restoreHandlers.push(( () => n.disconnect())),
                this.restoreHandlers.push(at(r(r({}, this.bypassOptions), {}, {
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror
                }))),
                setTimeout(( () => {
                    e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(ge.host(e))),
                    this.restoreHandlers.push(dt({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, e))
                }
                ), 0)
            }
        }
        observeAttachShadow(e) {
            e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
        }
        patchAttachShadow(e, t) {
            var r = this;
            this.restoreHandlers.push(Se(e.prototype, "attachShadow", (function(e) {
                return function(n) {
                    var o = e.call(this, n)
                      , a = ge.shadowRoot(this);
                    return a && _e(this) && r.addShadowRoot(a, t),
                    o
                }
            }
            )))
        }
        reset() {
            this.restoreHandlers.forEach((e => {
                try {
                    e()
                } catch (e) {}
            }
            )),
            this.restoreHandlers = [],
            this.shadowDoms = new WeakSet
        }
    }
    for (var yt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", vt = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), It = 0; It < 64; It++)
        vt[yt.charCodeAt(It)] = It;
    var bt = new Map;
    var Ct = (e, t, r) => {
        if (e && (Nt(e, t) || "object" == typeof e)) {
            var n = function(e, t) {
                var r = bt.get(e);
                return r || (r = new Map,
                bt.set(e, r)),
                r.has(t) || r.set(t, []),
                r.get(t)
            }(r, e.constructor.name)
              , o = n.indexOf(e);
            return -1 === o && (o = n.length,
            n.push(e)),
            o
        }
    }
    ;
    function St(e, t, r) {
        if (e instanceof Array)
            return e.map((e => St(e, t, r)));
        if (null === e)
            return e;
        if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray)
            return {
                rr_type: e.constructor.name,
                args: [Object.values(e)]
            };
        if (e instanceof ArrayBuffer)
            return {
                rr_type: e.constructor.name,
                base64: function(e) {
                    var t, r = new Uint8Array(e), n = r.length, o = "";
                    for (t = 0; t < n; t += 3)
                        o += yt[r[t] >> 2],
                        o += yt[(3 & r[t]) << 4 | r[t + 1] >> 4],
                        o += yt[(15 & r[t + 1]) << 2 | r[t + 2] >> 6],
                        o += yt[63 & r[t + 2]];
                    return n % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : n % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
                    o
                }(e)
            };
        if (e instanceof DataView)
            return {
                rr_type: e.constructor.name,
                args: [St(e.buffer, t, r), e.byteOffset, e.byteLength]
            };
        if (e instanceof HTMLImageElement) {
            var n = e.constructor.name
              , {src: o} = e;
            return {
                rr_type: n,
                src: o
            }
        }
        if (e instanceof HTMLCanvasElement) {
            return {
                rr_type: "HTMLImageElement",
                src: e.toDataURL()
            }
        }
        return e instanceof ImageData ? {
            rr_type: e.constructor.name,
            args: [St(e.data, t, r), e.width, e.height]
        } : Nt(e, t) || "object" == typeof e ? {
            rr_type: e.constructor.name,
            index: Ct(e, t, r)
        } : e
    }
    var wt = (e, t, r) => e.map((e => St(e, t, r)))
      , Nt = (e, t) => {
        var r = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((e => "function" == typeof t[e]));
        return Boolean(r.find((r => e instanceof t[r])))
    }
    ;
    function Mt(e, t, r, n) {
        var o = [];
        try {
            var a = Se(e.HTMLCanvasElement.prototype, "getContext", (function(e) {
                return function(o) {
                    for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                        i[s - 1] = arguments[s];
                    if (!Re(this, t, r, !0)) {
                        var l = function(e) {
                            return "experimental-webgl" === e ? "webgl" : e
                        }(o);
                        if ("__context"in this || (this.__context = l),
                        n && ["webgl", "webgl2"].includes(l))
                            if (i[0] && "object" == typeof i[0]) {
                                var c = i[0];
                                c.preserveDrawingBuffer || (c.preserveDrawingBuffer = !0)
                            } else
                                i.splice(0, 1, {
                                    preserveDrawingBuffer: !0
                                })
                    }
                    return e.apply(this, [o, ...i])
                }
            }
            ));
            o.push(a)
        } catch (e) {
            console.error("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
            o.forEach((e => e()))
        }
    }
    function At(e, t, r, n, o, a) {
        var i = []
          , s = Object.getOwnPropertyNames(e)
          , l = function(s) {
            if (["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(s))
                return "continue";
            try {
                if ("function" != typeof e[s])
                    return "continue";
                var l = Se(e, s, (function(e) {
                    return function() {
                        for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++)
                            l[c] = arguments[c];
                        var d = e.apply(this, l);
                        if (Ct(d, a, this),
                        "tagName"in this.canvas && !Re(this.canvas, n, o, !0)) {
                            var u = wt(l, a, this)
                              , h = {
                                type: t,
                                property: s,
                                args: u
                            };
                            r(this.canvas, h)
                        }
                        return d
                    }
                }
                ));
                i.push(l)
            } catch (n) {
                var c = Ce(e, s, {
                    set(e) {
                        r(this.canvas, {
                            type: t,
                            property: s,
                            args: [e],
                            setter: !0
                        })
                    }
                });
                i.push(c)
            }
        };
        for (var c of s)
            l(c);
        return i
    }
    var kt, Rt, Tt, Et, Ot = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=", xt = "undefined" != typeof window && window.Blob && new Blob([(kt = Ot,
    Uint8Array.from(atob(kt), (e => e.charCodeAt(0))))],{
        type: "text/javascript;charset=utf-8"
    });
    function Lt(e) {
        var t;
        try {
            if (!(t = xt && (window.URL || window.webkitURL).createObjectURL(xt)))
                throw "";
            var r = new Worker(t,{
                name: null == e ? void 0 : e.name
            });
            return r.addEventListener("error", ( () => {
                (window.URL || window.webkitURL).revokeObjectURL(t)
            }
            )),
            r
        } catch (t) {
            return new Worker("data:text/javascript;base64," + Ot,{
                name: null == e ? void 0 : e.name
            })
        } finally {
            t && (window.URL || window.webkitURL).revokeObjectURL(t)
        }
    }
    class Dt {
        constructor(e) {
            d(this, "pendingCanvasMutations", new Map),
            d(this, "rafStamps", {
                latestId: 0,
                invokeId: null
            }),
            d(this, "mirror"),
            d(this, "mutationCb"),
            d(this, "resetObservers"),
            d(this, "frozen", !1),
            d(this, "locked", !1),
            d(this, "processMutation", ( (e, t) => {
                !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId),
                this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []),
                this.pendingCanvasMutations.get(e).push(t)
            }
            ));
            var {sampling: t="all", win: r, blockClass: n, blockSelector: o, recordCanvas: a, dataURLOptions: i} = e;
            this.mutationCb = e.mutationCb,
            this.mirror = e.mirror,
            a && "all" === t && this.initCanvasMutationObserver(r, n, o),
            a && "number" == typeof t && this.initCanvasFPSObserver(t, r, n, o, {
                dataURLOptions: i
            })
        }
        reset() {
            this.pendingCanvasMutations.clear(),
            this.resetObservers && this.resetObservers()
        }
        freeze() {
            this.frozen = !0
        }
        unfreeze() {
            this.frozen = !1
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        initCanvasFPSObserver(e, t, r, n, a) {
            var i = this
              , s = Mt(t, r, n, !0)
              , l = new Map
              , c = new Lt;
            c.onmessage = e => {
                var {id: t} = e.data;
                if (l.set(t, !1),
                "base64"in e.data) {
                    var {base64: r, type: n, width: o, height: a} = e.data;
                    this.mutationCb({
                        id: t,
                        type: He["2D"],
                        commands: [{
                            property: "clearRect",
                            args: [0, 0, o, a]
                        }, {
                            property: "drawImage",
                            args: [{
                                rr_type: "ImageBitmap",
                                args: [{
                                    rr_type: "Blob",
                                    data: [{
                                        rr_type: "ArrayBuffer",
                                        base64: r
                                    }],
                                    type: n
                                }]
                            }, 0, 0]
                        }]
                    })
                }
            }
            ;
            var d, u = 1e3 / e, h = 0, p = e => {
                var s, m;
                h && e - h < u ? d = requestAnimationFrame(p) : (h = e,
                (s = [],
                m = e => {
                    e.querySelectorAll("canvas").forEach((e => {
                        Re(e, r, n, !0) || s.push(e)
                    }
                    )),
                    e.querySelectorAll("*").forEach((e => {
                        e.shadowRoot && m(e.shadowRoot)
                    }
                    ))
                }
                ,
                m(t.document),
                s).forEach(function() {
                    var e = o((function*(e) {
                        var t, r = i.mirror.getId(e);
                        if (!l.get(r) && 0 !== e.width && 0 !== e.height) {
                            if (l.set(r, !0),
                            ["webgl", "webgl2"].includes(e.__context)) {
                                var n = e.getContext(e.__context);
                                !1 === (null == (t = null == n ? void 0 : n.getContextAttributes()) ? void 0 : t.preserveDrawingBuffer) && n.clear(n.COLOR_BUFFER_BIT)
                            }
                            var o = e.clientWidth || e.width
                              , s = e.clientHeight || e.height
                              , d = yield createImageBitmap(e, {
                                resizeWidth: o,
                                resizeHeight: s
                            });
                            c.postMessage({
                                id: r,
                                bitmap: d,
                                width: o,
                                height: s,
                                dataURLOptions: a.dataURLOptions
                            }, [d])
                        }
                    }
                    ));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                d = requestAnimationFrame(p))
            }
            ;
            d = requestAnimationFrame(p),
            this.resetObservers = () => {
                s(),
                cancelAnimationFrame(d)
            }
        }
        initCanvasMutationObserver(e, t, r) {
            this.startRAFTimestamping(),
            this.startPendingCanvasMutationFlusher();
            var n = Mt(e, t, r, !1)
              , o = function(e, t, r, n) {
                var o = []
                  , a = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype)
                  , i = function(a) {
                    try {
                        if ("function" != typeof t.CanvasRenderingContext2D.prototype[a])
                            return "continue";
                        var i = Se(t.CanvasRenderingContext2D.prototype, a, (function(o) {
                            return function() {
                                for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
                                    s[l] = arguments[l];
                                return Re(this.canvas, r, n, !0) || setTimeout(( () => {
                                    var r = wt(s, t, this);
                                    e(this.canvas, {
                                        type: He["2D"],
                                        property: a,
                                        args: r
                                    })
                                }
                                ), 0),
                                o.apply(this, s)
                            }
                        }
                        ));
                        o.push(i)
                    } catch (r) {
                        var s = Ce(t.CanvasRenderingContext2D.prototype, a, {
                            set(t) {
                                e(this.canvas, {
                                    type: He["2D"],
                                    property: a,
                                    args: [t],
                                    setter: !0
                                })
                            }
                        });
                        o.push(s)
                    }
                };
                for (var s of a)
                    i(s);
                return () => {
                    o.forEach((e => e()))
                }
            }(this.processMutation.bind(this), e, t, r)
              , a = function(e, t, r, n) {
                var o = [];
                return o.push(...At(t.WebGLRenderingContext.prototype, He.WebGL, e, r, n, t)),
                void 0 !== t.WebGL2RenderingContext && o.push(...At(t.WebGL2RenderingContext.prototype, He.WebGL2, e, r, n, t)),
                () => {
                    o.forEach((e => e()))
                }
            }(this.processMutation.bind(this), e, t, r);
            this.resetObservers = () => {
                n(),
                o(),
                a()
            }
        }
        startPendingCanvasMutationFlusher() {
            requestAnimationFrame(( () => this.flushPendingCanvasMutations()))
        }
        startRAFTimestamping() {
            var e = t => {
                this.rafStamps.latestId = t,
                requestAnimationFrame(e)
            }
            ;
            requestAnimationFrame(e)
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(( (e, t) => {
                var r = this.mirror.getId(t);
                this.flushPendingCanvasMutationFor(t, r)
            }
            )),
            requestAnimationFrame(( () => this.flushPendingCanvasMutations()))
        }
        flushPendingCanvasMutationFor(e, t) {
            if (!this.frozen && !this.locked) {
                var r = this.pendingCanvasMutations.get(e);
                if (r && -1 !== t) {
                    var n = r.map((e => i(e, l)))
                      , {type: o} = r[0];
                    this.mutationCb({
                        id: t,
                        type: o,
                        commands: n
                    }),
                    this.pendingCanvasMutations.delete(e)
                }
            }
        }
    }
    class Ft {
        constructor(e) {
            d(this, "trackedLinkElements", new WeakSet),
            d(this, "mutationCb"),
            d(this, "adoptedStyleSheetCb"),
            d(this, "styleMirror", new Fe),
            this.mutationCb = e.mutationCb,
            this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
        }
        attachLinkElement(e, t) {
            "_cssText"in t.attributes && this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{
                    id: t.id,
                    attributes: t.attributes
                }]
            }),
            this.trackLinkElement(e)
        }
        trackLinkElement(e) {
            this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e),
            this.trackStylesheetInLinkElement(e))
        }
        adoptStyleSheets(e, t) {
            var r = this;
            if (0 !== e.length) {
                var n = {
                    id: t,
                    styleIds: []
                }
                  , o = []
                  , a = function(e) {
                    var t = void 0;
                    r.styleMirror.has(e) ? t = r.styleMirror.getId(e) : (t = r.styleMirror.add(e),
                    o.push({
                        styleId: t,
                        rules: Array.from(e.rules || CSSRule, ( (t, r) => ({
                            rule: R(t, e.href),
                            index: r
                        })))
                    })),
                    n.styleIds.push(t)
                };
                for (var i of e)
                    a(i);
                o.length > 0 && (n.styles = o),
                this.adoptedStyleSheetCb(n)
            }
        }
        reset() {
            this.styleMirror.reset(),
            this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(e) {}
    }
    class Bt {
        constructor() {
            d(this, "nodeMap", new WeakMap),
            d(this, "active", !1)
        }
        inOtherBuffer(e, t) {
            var r = this.nodeMap.get(e);
            return r && Array.from(r).some((e => e !== t))
        }
        add(e, t) {
            this.active || (this.active = !0,
            requestAnimationFrame(( () => {
                this.nodeMap = new WeakMap,
                this.active = !1
            }
            ))),
            this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
        }
        destroy() {}
    }
    var Zt = !1;
    try {
        if (2 !== Array.from([1], (e => 2 * e))[0]) {
            var _t = document.createElement("iframe");
            document.body.appendChild(_t),
            Array.from = (null == (s = _t.contentWindow) ? void 0 : s.Array.from) || Array.from,
            document.body.removeChild(_t)
        }
    } catch (e) {
        console.debug("Unable to override Array.from", e)
    }
    var Yt, Wt, Gt = new E;
    function Vt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , {emit: t, checkoutEveryNms: n, checkoutEveryNth: o, blockClass: a="rr-block", blockSelector: i=null, ignoreClass: s="rr-ignore", ignoreSelector: l=null, maskTextClass: c="rr-mask", maskTextSelector: d=null, inlineStylesheet: u=!0, maskAllInputs: h, maskInputOptions: p, slimDOMOptions: m, maskInputFn: f, maskTextFn: g, hooks: y, packFn: v, sampling: I={}, dataURLOptions: b={}, mousemoveWait: C, recordDOM: S=!0, recordCanvas: w=!1, recordCrossOriginIframes: N=!1, recordAfter: M=("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"), userTriggeredOnInput: A=!1, collectFonts: k=!1, inlineImages: R=!1, plugins: T, keepIframeSrcFn: O=( () => !1), ignoreCSSAttributes: x=new Set([]), errorHandler: L} = e;
        ze = L;
        var D = !N || window.parent === window
          , F = !1;
        if (!D)
            try {
                window.parent.document && (F = !1)
            } catch (e) {
                F = !0
            }
        if (D && !t)
            throw new Error("emit function is required");
        if (!D && !F)
            return () => {}
            ;
        void 0 !== C && void 0 === I.mousemove && (I.mousemove = C),
        Gt.reset();
        var B, Z = !0 === h ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0
        } : void 0 !== p ? p : {
            password: !0
        }, _ = !0 === m || "all" === m ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === m,
            headMetaDescKeywords: "all" === m,
            headTitleMutations: "all" === m
        } : m || {};
        !function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
            "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
            "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach)
        }();
        var Y = 0
          , W = e => {
            for (var t of T || [])
                t.eventProcessor && (e = t.eventProcessor(e));
            return v && !F && (e = v(e)),
            e
        }
        ;
        Rt = (e, r) => {
            var a, i = e;
            if (i.timestamp = we(),
            !(null == (a = tt[0]) ? void 0 : a.isFrozen()) || i.type === Ye.FullSnapshot || i.type === Ye.IncrementalSnapshot && i.data.source === We.Mutation || tt.forEach((e => e.unfreeze())),
            D)
                null == t || t(W(i), r);
            else if (F) {
                var s = {
                    type: "rrweb",
                    event: W(i),
                    origin: window.location.origin,
                    isCheckout: r
                };
                window.parent.postMessage(s, "*")
            }
            if (i.type === Ye.FullSnapshot)
                B = i,
                Y = 0;
            else if (i.type === Ye.IncrementalSnapshot) {
                if (i.data.source === We.Mutation && i.data.isAttachIframe)
                    return;
                Y++;
                var l = o && Y >= o
                  , c = n && i.timestamp - B.timestamp > n;
                (l || c) && Tt(!0)
            }
        }
        ;
        var G = e => {
            Rt({
                type: Ye.IncrementalSnapshot,
                data: r({
                    source: We.Mutation
                }, e)
            })
        }
          , V = e => Rt({
            type: Ye.IncrementalSnapshot,
            data: r({
                source: We.Scroll
            }, e)
        })
          , H = e => Rt({
            type: Ye.IncrementalSnapshot,
            data: r({
                source: We.CanvasMutation
            }, e)
        })
          , P = new Ft({
            mutationCb: G,
            adoptedStyleSheetCb: e => Rt({
                type: Ye.IncrementalSnapshot,
                data: r({
                    source: We.AdoptedStyleSheet
                }, e)
            })
        })
          , X = new ft({
            mirror: Gt,
            mutationCb: G,
            stylesheetManager: P,
            recordCrossOriginIframes: N,
            wrappedEmit: Rt
        });
        for (var j of T || [])
            j.getMirror && j.getMirror({
                nodeMirror: Gt,
                crossOriginIframeMirror: X.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: X.crossOriginIframeStyleMirror
            });
        var z = new Bt;
        Et = new Dt({
            recordCanvas: w,
            mutationCb: H,
            win: window,
            blockClass: a,
            blockSelector: i,
            mirror: Gt,
            sampling: I.canvas,
            dataURLOptions: b
        });
        var K = new gt({
            mutationCb: G,
            scrollCb: V,
            bypassOptions: {
                blockClass: a,
                blockSelector: i,
                maskTextClass: c,
                maskTextSelector: d,
                inlineStylesheet: u,
                maskInputOptions: Z,
                dataURLOptions: b,
                maskTextFn: g,
                maskInputFn: f,
                recordCanvas: w,
                inlineImages: R,
                sampling: I,
                slimDOMOptions: _,
                iframeManager: X,
                stylesheetManager: P,
                canvasManager: Et,
                keepIframeSrcFn: O,
                processedNodeManager: z
            },
            mirror: Gt
        });
        Tt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (S) {
                Rt({
                    type: Ye.Meta,
                    data: {
                        href: window.location.href,
                        width: Ae(),
                        height: Me()
                    }
                }, e),
                P.reset(),
                K.init(),
                tt.forEach((e => e.lock()));
                var t = function(e, t) {
                    var {mirror: r=new E, blockClass: n="rr-block", blockSelector: o=null, maskTextClass: a="rr-mask", maskTextSelector: i=null, inlineStylesheet: s=!0, inlineImages: l=!1, recordCanvas: c=!1, maskAllInputs: d=!1, maskTextFn: u, maskInputFn: h, slimDOM: p=!1, dataURLOptions: m, preserveWhiteSpace: f, onSerialize: g, onIframeLoad: y, iframeLoadTimeout: v, onStylesheetLoad: I, stylesheetLoadTimeout: b, keepIframeSrcFn: C=( () => !1)} = t || {};
                    return ae(e, {
                        doc: e,
                        mirror: r,
                        blockClass: n,
                        blockSelector: o,
                        maskTextClass: a,
                        maskTextSelector: i,
                        skipChild: !1,
                        inlineStylesheet: s,
                        maskInputOptions: !0 === d ? {
                            color: !0,
                            date: !0,
                            "datetime-local": !0,
                            email: !0,
                            month: !0,
                            number: !0,
                            range: !0,
                            search: !0,
                            tel: !0,
                            text: !0,
                            time: !0,
                            url: !0,
                            week: !0,
                            textarea: !0,
                            select: !0,
                            password: !0
                        } : !1 === d ? {
                            password: !0
                        } : d,
                        maskTextFn: u,
                        maskInputFn: h,
                        slimDOMOptions: !0 === p || "all" === p ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === p,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === p ? {} : p,
                        dataURLOptions: m,
                        inlineImages: l,
                        recordCanvas: c,
                        preserveWhiteSpace: f,
                        onSerialize: g,
                        onIframeLoad: y,
                        iframeLoadTimeout: v,
                        onStylesheetLoad: I,
                        stylesheetLoadTimeout: b,
                        keepIframeSrcFn: C,
                        newlyAddedElement: !1
                    })
                }(document, {
                    mirror: Gt,
                    blockClass: a,
                    blockSelector: i,
                    maskTextClass: c,
                    maskTextSelector: d,
                    inlineStylesheet: u,
                    maskAllInputs: Z,
                    maskTextFn: g,
                    maskInputFn: f,
                    slimDOM: _,
                    dataURLOptions: b,
                    recordCanvas: w,
                    inlineImages: R,
                    onSerialize: e => {
                        xe(e, Gt) && X.addIframe(e),
                        Le(e, Gt) && P.trackLinkElement(e),
                        De(e) && K.addShadowRoot(ge.shadowRoot(e), document)
                    }
                    ,
                    onIframeLoad: (e, t) => {
                        X.attachIframe(e, t),
                        K.observeAttachShadow(e)
                    }
                    ,
                    onStylesheetLoad: (e, t) => {
                        P.attachLinkElement(e, t)
                    }
                    ,
                    keepIframeSrcFn: O
                });
                if (!t)
                    return console.warn("Failed to snapshot the document");
                Rt({
                    type: Ye.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: Ne(window)
                    }
                }, e),
                tt.forEach((e => e.unlock())),
                document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && P.adoptStyleSheets(document.adoptedStyleSheets, Gt.getId(document))
            }
        }
        ;
        try {
            var J = []
              , U = e => {
                var t;
                return et(ut)({
                    mutationCb: G,
                    mousemoveCb: (e, t) => Rt({
                        type: Ye.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => Rt({
                        type: Ye.IncrementalSnapshot,
                        data: r({
                            source: We.MouseInteraction
                        }, e)
                    }),
                    scrollCb: V,
                    viewportResizeCb: e => Rt({
                        type: Ye.IncrementalSnapshot,
                        data: r({
                            source: We.ViewportResize
                        }, e)
                    }),
                    inputCb: e => Rt({
                        type: Ye.IncrementalSnapshot,
                        data: r({
                            source: We.Input
                        }, e)
                    }),
                    mediaInteractionCb: e => Rt({
                        type: Ye.IncrementalSnapshot,
                        data: r({
                            source: We.MediaInteraction
                        }, e)
                    }),
                    styleSheetRuleCb: e => Rt({
                        type: Ye.IncrementalSnapshot,
                        data: r({
                            source: We.StyleSheetRule
                        }, e)
                    }),
                    styleDeclarationCb: e => Rt({
                        type: Ye.IncrementalSnapshot,
                        data: r({
                            source: We.StyleDeclaration
                        }, e)
                    }),
                    canvasMutationCb: H,
                    fontCb: e => Rt({
                        type: Ye.IncrementalSnapshot,
                        data: r({
                            source: We.Font
                        }, e)
                    }),
                    selectionCb: e => {
                        Rt({
                            type: Ye.IncrementalSnapshot,
                            data: r({
                                source: We.Selection
                            }, e)
                        })
                    }
                    ,
                    customElementCb: e => {
                        Rt({
                            type: Ye.IncrementalSnapshot,
                            data: r({
                                source: We.CustomElement
                            }, e)
                        })
                    }
                    ,
                    blockClass: a,
                    ignoreClass: s,
                    ignoreSelector: l,
                    maskTextClass: c,
                    maskTextSelector: d,
                    maskInputOptions: Z,
                    inlineStylesheet: u,
                    sampling: I,
                    recordDOM: S,
                    recordCanvas: w,
                    inlineImages: R,
                    userTriggeredOnInput: A,
                    collectFonts: k,
                    doc: e,
                    maskInputFn: f,
                    maskTextFn: g,
                    keepIframeSrcFn: O,
                    blockSelector: i,
                    slimDOMOptions: _,
                    dataURLOptions: b,
                    mirror: Gt,
                    iframeManager: X,
                    stylesheetManager: P,
                    shadowDomManager: K,
                    processedNodeManager: z,
                    canvasManager: Et,
                    ignoreCSSAttributes: x,
                    plugins: (null == (t = null == T ? void 0 : T.filter((e => e.observer))) ? void 0 : t.map((e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => Rt({
                            type: Ye.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    })))) || []
                }, y)
            }
            ;
            X.addLoadListener((e => {
                try {
                    J.push(U(e.contentDocument))
                } catch (e) {
                    console.warn(e)
                }
            }
            ));
            var q = () => {
                Tt(),
                J.push(U(document)),
                Zt = !0
            }
            ;
            return "interactive" === document.readyState || "complete" === document.readyState ? q() : (J.push(ye("DOMContentLoaded", ( () => {
                Rt({
                    type: Ye.DomContentLoaded,
                    data: {}
                }),
                "DOMContentLoaded" === M && q()
            }
            ))),
            J.push(ye("load", ( () => {
                Rt({
                    type: Ye.Load,
                    data: {}
                }),
                "load" === M && q()
            }
            ), window))),
            () => {
                J.forEach((e => e())),
                z.destroy(),
                Zt = !1,
                ze = void 0
            }
        } catch (e) {
            console.warn(e)
        }
    }
    Vt.addCustomEvent = (e, t) => {
        if (!Zt)
            throw new Error("please add custom event after start recording");
        Rt({
            type: Ye.Custom,
            data: {
                tag: e,
                payload: t
            }
        })
    }
    ,
    Vt.freezePage = () => {
        tt.forEach((e => e.freeze()))
    }
    ,
    Vt.takeFullSnapshot = e => {
        if (!Zt)
            throw new Error("please take full snapshot after start recording");
        Tt(e)
    }
    ,
    Vt.mirror = Gt,
    (Wt = Yt || (Yt = {}))[Wt.NotStarted = 0] = "NotStarted",
    Wt[Wt.Running = 1] = "Running",
    Wt[Wt.Stopped = 2] = "Stopped";
    var Ht, Pt = Object.defineProperty, Xt = (e, t, r) => ( (e, t, r) => t in e ? Pt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r), jt = Object.defineProperty, zt = (e, t, r) => ( (e, t, r) => t in e ? jt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r), Kt = Object.defineProperty, Jt = (e, t, r) => ( (e, t, r) => t in e ? Kt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r), Ut = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
    }, qt = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
    }, Qt = {};
    function $t(e) {
        if (Qt[e])
            return Qt[e];
        var t = globalThis[e]
          , r = t.prototype
          , n = e in Ut ? Ut[e] : void 0
          , o = Boolean(n && n.every((e => {
            var t, n;
            return Boolean(null == (n = null == (t = Object.getOwnPropertyDescriptor(r, e)) ? void 0 : t.get) ? void 0 : n.toString().includes("[native code]"))
        }
        )))
          , a = e in qt ? qt[e] : void 0
          , i = Boolean(a && a.every((e => {
            var t;
            return "function" == typeof r[e] && (null == (t = r[e]) ? void 0 : t.toString().includes("[native code]"))
        }
        )));
        if (o && i)
            return Qt[e] = t.prototype,
            t.prototype;
        try {
            var s = document.createElement("iframe");
            document.body.appendChild(s);
            var l = s.contentWindow;
            if (!l)
                return t.prototype;
            var c = l[e].prototype;
            return document.body.removeChild(s),
            c ? Qt[e] = c : r
        } catch (e) {
            return r
        }
    }
    var er = {};
    function tr(e, t, r) {
        var n, o = "".concat(e, ".").concat(String(r));
        if (er[o])
            return er[o].call(t);
        var a = $t(e)
          , i = null == (n = Object.getOwnPropertyDescriptor(a, r)) ? void 0 : n.get;
        return i ? (er[o] = i,
        i.call(t)) : t[r]
    }
    var rr = {};
    function nr(e, t, r) {
        var n = "".concat(e, ".").concat(String(r));
        if (rr[n])
            return rr[n].bind(t);
        var o = $t(e)[r];
        return "function" != typeof o ? t[r] : (rr[n] = o,
        o.bind(t))
    }
    var or = {
        childNodes: function(e) {
            return tr("Node", e, "childNodes")
        },
        parentNode: function(e) {
            return tr("Node", e, "parentNode")
        },
        parentElement: function(e) {
            return tr("Node", e, "parentElement")
        },
        textContent: function(e) {
            return tr("Node", e, "textContent")
        },
        contains: function(e, t) {
            return nr("Node", e, "contains")(t)
        },
        getRootNode: function(e) {
            return nr("Node", e, "getRootNode")()
        },
        host: function(e) {
            return e && "host"in e ? tr("ShadowRoot", e, "host") : null
        },
        styleSheets: function(e) {
            return e.styleSheets
        },
        shadowRoot: function(e) {
            return e && "shadowRoot"in e ? tr("Element", e, "shadowRoot") : null
        },
        querySelector: function(e, t) {
            return tr("Element", e, "querySelector")(t)
        },
        querySelectorAll: function(e, t) {
            return tr("Element", e, "querySelectorAll")(t)
        },
        mutationObserver: function() {
            return $t("MutationObserver").constructor
        }
    };
    class ar {
        constructor() {
            Jt(this, "idNodeMap", new Map),
            Jt(this, "nodeMetaMap", new WeakMap)
        }
        getId(e) {
            var t;
            if (!e)
                return -1;
            var r = null == (t = this.getMeta(e)) ? void 0 : t.id;
            return null != r ? r : -1
        }
        getNode(e) {
            return this.idNodeMap.get(e) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
            return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
            var t = this.getId(e);
            this.idNodeMap.delete(t),
            e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
        }
        has(e) {
            return this.idNodeMap.has(e)
        }
        hasNode(e) {
            return this.nodeMetaMap.has(e)
        }
        add(e, t) {
            var r = t.id;
            this.idNodeMap.set(r, e),
            this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
            var r = this.getNode(e);
            if (r) {
                var n = this.nodeMetaMap.get(r);
                n && this.nodeMetaMap.set(t, n)
            }
            this.idNodeMap.set(e, t)
        }
        reset() {
            this.idNodeMap = new Map,
            this.nodeMetaMap = new WeakMap
        }
    }
    function ir(e, t, r) {
        if (!e)
            return !1;
        if (e.nodeType !== e.ELEMENT_NODE)
            return !!r && ir(or.parentNode(e), t, r);
        for (var n = e.classList.length; n--; ) {
            var o = e.classList[n];
            if (t.test(o))
                return !0
        }
        return !!r && ir(or.parentNode(e), t, r)
    }
    class sr {
        constructor() {
            __publicField22(this, "parentElement", null),
            __publicField22(this, "parentNode", null),
            __publicField22(this, "ownerDocument"),
            __publicField22(this, "firstChild", null),
            __publicField22(this, "lastChild", null),
            __publicField22(this, "previousSibling", null),
            __publicField22(this, "nextSibling", null),
            __publicField22(this, "ELEMENT_NODE", 1),
            __publicField22(this, "TEXT_NODE", 3),
            __publicField22(this, "nodeType"),
            __publicField22(this, "nodeName"),
            __publicField22(this, "RRNodeType")
        }
        get childNodes() {
            for (var e = [], t = this.firstChild; t; )
                e.push(t),
                t = t.nextSibling;
            return e
        }
        contains(e) {
            if (!(e instanceof sr))
                return !1;
            if (e.ownerDocument !== this.ownerDocument)
                return !1;
            if (e === this)
                return !0;
            for (; e.parentNode; ) {
                if (e.parentNode === this)
                    return !0;
                e = e.parentNode
            }
            return !1
        }
        appendChild(e) {
            throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(e, t) {
            throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(e) {
            throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
            return "RRNode"
        }
    }
    var lr = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
    }
      , cr = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
    }
      , dr = {};
    function ur(e) {
        if (dr[e])
            return dr[e];
        var t = globalThis[e]
          , r = t.prototype
          , n = e in lr ? lr[e] : void 0
          , o = Boolean(n && n.every((e => {
            var t, n;
            return Boolean(null == (n = null == (t = Object.getOwnPropertyDescriptor(r, e)) ? void 0 : t.get) ? void 0 : n.toString().includes("[native code]"))
        }
        )))
          , a = e in cr ? cr[e] : void 0
          , i = Boolean(a && a.every((e => {
            var t;
            return "function" == typeof r[e] && (null == (t = r[e]) ? void 0 : t.toString().includes("[native code]"))
        }
        )));
        if (o && i)
            return dr[e] = t.prototype,
            t.prototype;
        try {
            var s = document.createElement("iframe");
            document.body.appendChild(s);
            var l = s.contentWindow;
            if (!l)
                return t.prototype;
            var c = l[e].prototype;
            return document.body.removeChild(s),
            c ? dr[e] = c : r
        } catch (e) {
            return r
        }
    }
    var hr = {};
    function pr(e, t, r) {
        var n, o = "".concat(e, ".").concat(String(r));
        if (hr[o])
            return hr[o].call(t);
        var a = ur(e)
          , i = null == (n = Object.getOwnPropertyDescriptor(a, r)) ? void 0 : n.get;
        return i ? (hr[o] = i,
        i.call(t)) : t[r]
    }
    var mr = {};
    function fr(e, t, r) {
        var n = "".concat(e, ".").concat(String(r));
        if (mr[n])
            return mr[n].bind(t);
        var o = ur(e)[r];
        return "function" != typeof o ? t[r] : (mr[n] = o,
        o.bind(t))
    }
    var gr = {
        childNodes: function(e) {
            return pr("Node", e, "childNodes")
        },
        parentNode: function(e) {
            return pr("Node", e, "parentNode")
        },
        parentElement: function(e) {
            return pr("Node", e, "parentElement")
        },
        textContent: function(e) {
            return pr("Node", e, "textContent")
        },
        contains: function(e, t) {
            return fr("Node", e, "contains")(t)
        },
        getRootNode: function(e) {
            return fr("Node", e, "getRootNode")()
        },
        host: function(e) {
            return e && "host"in e ? pr("ShadowRoot", e, "host") : null
        },
        styleSheets: function(e) {
            return e.styleSheets
        },
        shadowRoot: function(e) {
            return e && "shadowRoot"in e ? pr("Element", e, "shadowRoot") : null
        },
        querySelector: function(e, t) {
            return pr("Element", e, "querySelector")(t)
        },
        querySelectorAll: function(e, t) {
            return pr("Element", e, "querySelectorAll")(t)
        },
        mutationObserver: function() {
            return ur("MutationObserver").constructor
        }
    };
    var yr = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording."
      , vr = {
        map: {},
        getId: () => (console.error(yr),
        -1),
        getNode: () => (console.error(yr),
        null),
        removeNodeFromMap() {
            console.error(yr)
        },
        has: () => (console.error(yr),
        !1),
        reset() {
            console.error(yr)
        }
    };
    "undefined" != typeof window && window.Proxy && window.Reflect && (vr = new Proxy(vr,{
        get: (e, t, r) => ("map" === t && console.error(yr),
        Reflect.get(e, t, r))
    }));
    var Ir = Date.now;
    function br(e) {
        return e ? e.nodeType === e.ELEMENT_NODE ? e : gr.parentElement(e) : null
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (Ir = () => (new Date).getTime());
    function Cr(e) {
        var t, r = null;
        return "getRootNode"in e && (null == (t = gr.getRootNode(e)) ? void 0 : t.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && gr.host(gr.getRootNode(e)) && (r = gr.host(gr.getRootNode(e))),
        r
    }
    function Sr(e) {
        for (var t, r = e; t = Cr(r); )
            r = t;
        return r
    }
    function wr(e) {
        var t = e.ownerDocument;
        if (!t)
            return !1;
        var r = Sr(e);
        return gr.contains(t, r)
    }
    for (var Nr = Object.freeze(Object.defineProperty({
        __proto__: null,
        StyleSheetMirror: class {
            constructor() {
                zt(this, "id", 1),
                zt(this, "styleIDMap", new WeakMap),
                zt(this, "idStyleMap", new Map)
            }
            getId(e) {
                var t;
                return null !== (t = this.styleIDMap.get(e)) && void 0 !== t ? t : -1
            }
            has(e) {
                return this.styleIDMap.has(e)
            }
            add(e, t) {
                return this.has(e) ? this.getId(e) : (r = void 0 === t ? this.id++ : t,
                this.styleIDMap.set(e, r),
                this.idStyleMap.set(r, e),
                r);
                var r
            }
            getStyle(e) {
                return this.idStyleMap.get(e) || null
            }
            reset() {
                this.styleIDMap = new WeakMap,
                this.idStyleMap = new Map,
                this.id = 1
            }
            generateId() {
                return this.id++
            }
        }
        ,
        get _mirror() {
            return vr
        },
        closestElementOfNode: br,
        getBaseDimension: function e(t, r) {
            var n, o, a = null == (o = null == (n = t.ownerDocument) ? void 0 : n.defaultView) ? void 0 : o.frameElement;
            if (!a || a === r)
                return {
                    x: 0,
                    y: 0,
                    relativeScale: 1,
                    absoluteScale: 1
                };
            var i = a.getBoundingClientRect()
              , s = e(a, r)
              , l = i.height / a.clientHeight;
            return {
                x: i.x * s.relativeScale + s.x,
                y: i.y * s.relativeScale + s.y,
                relativeScale: l,
                absoluteScale: s.absoluteScale * l
            }
        },
        getNestedRule: function e(t, r) {
            var n = t[r[0]];
            return 1 === r.length ? n : e(n.cssRules[r[1]].cssRules, r.slice(2))
        },
        getPositionsAndIndex: function(e) {
            var t = [...e]
              , r = t.pop();
            return {
                positions: t,
                index: r
            }
        },
        getRootShadowHost: Sr,
        getShadowHost: Cr,
        getWindowHeight: function() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
        },
        getWindowScroll: function(e) {
            var t, r, n, o, a = e.document;
            return {
                left: a.scrollingElement ? a.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : a.documentElement.scrollLeft || (null == a ? void 0 : a.body) && (null == (t = gr.parentElement(a.body)) ? void 0 : t.scrollLeft) || (null == (r = null == a ? void 0 : a.body) ? void 0 : r.scrollLeft) || 0,
                top: a.scrollingElement ? a.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : (null == a ? void 0 : a.documentElement.scrollTop) || (null == a ? void 0 : a.body) && (null == (n = gr.parentElement(a.body)) ? void 0 : n.scrollTop) || (null == (o = null == a ? void 0 : a.body) ? void 0 : o.scrollTop) || 0
            }
        },
        getWindowWidth: function() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
        },
        hasShadowRoot: function(e) {
            return !!e && (e instanceof sr && "shadowRoot"in e ? Boolean(e.shadowRoot) : Boolean(gr.shadowRoot(e)))
        },
        hookSetter: function e(t, r, n, o) {
            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window
              , i = a.Object.getOwnPropertyDescriptor(t, r);
            return a.Object.defineProperty(t, r, o ? n : {
                set(e) {
                    setTimeout(( () => {
                        n.set.call(this, e)
                    }
                    ), 0),
                    i && i.set && i.set.call(this, e)
                }
            }),
            () => e(t, r, i || {}, !0)
        },
        inDom: function(e) {
            var t = e.ownerDocument;
            return !!t && (gr.contains(t, e) || wr(e))
        },
        isAncestorRemoved: function e(t, r) {
            if (o = (n = t) && "host"in n && "mode"in n && or.host(n) || null,
            Boolean(o && "shadowRoot"in o && or.shadowRoot(o) === n))
                return !1;
            var n, o, a = r.getId(t);
            if (!r.has(a))
                return !0;
            var i = gr.parentNode(t);
            return (!i || i.nodeType !== t.DOCUMENT_NODE) && (!i || e(i, r))
        },
        isBlocked: function(e, t, r, n) {
            if (!e)
                return !1;
            var o = br(e);
            if (!o)
                return !1;
            try {
                if ("string" == typeof t) {
                    if (o.classList.contains(t))
                        return !0;
                    if (n && null !== o.closest("." + t))
                        return !0
                } else if (ir(o, t, n))
                    return !0
            } catch (e) {}
            if (r) {
                if (o.matches(r))
                    return !0;
                if (n && null !== o.closest(r))
                    return !0
            }
            return !1
        },
        isIgnored: function(e, t, r) {
            return !("TITLE" !== e.tagName || !r.headTitleMutations) || -2 === t.getId(e)
        },
        isSerialized: function(e, t) {
            return -1 !== t.getId(e)
        },
        isSerializedIframe: function(e, t) {
            return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
        },
        isSerializedStylesheet: function(e, t) {
            return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
        },
        iterateResolveTree: function e(t, r) {
            r(t.value);
            for (var n = t.children.length - 1; n >= 0; n--)
                e(t.children[n], r)
        },
        legacy_isTouchEvent: function(e) {
            return Boolean(e.changedTouches)
        },
        get nowTimestamp() {
            return Ir
        },
        on: function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document
              , n = {
                capture: !0,
                passive: !0
            };
            return r.addEventListener(e, t, n),
            () => r.removeEventListener(e, t, n)
        },
        patch: function(e, t, r) {
            try {
                if (!(t in e))
                    return () => {}
                    ;
                var n = e[t]
                  , o = r(n);
                return "function" == typeof o && (o.prototype = o.prototype || {},
                Object.defineProperties(o, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: n
                    }
                })),
                e[t] = o,
                () => {
                    e[t] = n
                }
            } catch (e) {
                return () => {}
            }
        },
        polyfill: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
            "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
            "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach)
        },
        queueToResolveTrees: function(e) {
            var t = {}
              , r = (e, r) => {
                var n = {
                    value: e,
                    parent: r,
                    children: []
                };
                return t[e.node.id] = n,
                n
            }
              , n = [];
            for (var o of e) {
                var {nextId: a, parentId: i} = o;
                if (a && a in t) {
                    var s = t[a];
                    if (s.parent) {
                        var l = s.parent.children.indexOf(s);
                        s.parent.children.splice(l, 0, r(o, s.parent))
                    } else {
                        var c = n.indexOf(s);
                        n.splice(c, 0, r(o, null))
                    }
                } else if (i in t) {
                    var d = t[i];
                    d.children.push(r(o, d))
                } else
                    n.push(r(o, null))
            }
            return n
        },
        shadowHostInDom: wr,
        throttle: function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = null
              , o = 0;
            return function() {
                for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
                    i[s] = arguments[s];
                var l = Date.now();
                o || !1 !== r.leading || (o = l);
                var c = t - (l - o)
                  , d = this;
                c <= 0 || c > t ? (n && (clearTimeout(n),
                n = null),
                o = l,
                e.apply(d, i)) : n || !1 === r.trailing || (n = setTimeout(( () => {
                    o = !1 === r.leading ? 0 : Date.now(),
                    n = null,
                    e.apply(d, i)
                }
                ), c))
            }
        },
        uniqueTextMutations: function(e) {
            for (var t = new Set, r = [], n = e.length; n--; ) {
                var o = e[n];
                t.has(o.id) || (r.push(o),
                t.add(o.id))
            }
            return r
        }
    }, Symbol.toStringTag, {
        value: "Module"
    })), Mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ar = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), kr = 0; kr < 64; kr++)
        Ar[Mr.charCodeAt(kr)] = kr;
    var Rr;
    "undefined" != typeof window && window.Blob && new Blob([(e => Uint8Array.from(atob(e), (e => e.charCodeAt(0))))("KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=")],{
        type: "text/javascript;charset=utf-8"
    });
    try {
        if (2 !== Array.from([1], (e => 2 * e))[0]) {
            var Tr = document.createElement("iframe");
            document.body.appendChild(Tr),
            Array.from = (null == (Ht = Tr.contentWindow) ? void 0 : Ht.Array.from) || Array.from,
            document.body.removeChild(Tr)
        }
    } catch (e) {
        console.debug("Unable to override Array.from", e)
    }
    new ar,
    function(e) {
        e[e.NotStarted = 0] = "NotStarted",
        e[e.Running = 1] = "Running",
        e[e.Stopped = 2] = "Stopped"
    }(Rr || (Rr = {}));
    class Er {
        constructor(e) {
            Xt(this, "fileName"),
            Xt(this, "functionName"),
            Xt(this, "lineNumber"),
            Xt(this, "columnNumber"),
            this.fileName = e.fileName || "",
            this.functionName = e.functionName || "",
            this.lineNumber = e.lineNumber,
            this.columnNumber = e.columnNumber
        }
        toString() {
            var e = this.lineNumber || ""
              , t = this.columnNumber || "";
            return this.functionName ? "".concat(this.functionName, " (").concat(this.fileName, ":").concat(e, ":").concat(t, ")") : "".concat(this.fileName, ":").concat(e, ":").concat(t)
        }
    }
    var Or = /(^|@)\S+:\d+/
      , xr = /^\s*at .*(\S+:\d+|\(native\))/m
      , Lr = /^(eval@)?(\[native code])?$/
      , Dr = {
        parse: function(e) {
            return e ? void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"] ? this.parseOpera(e) : e.stack && e.stack.match(xr) ? this.parseV8OrIE(e) : e.stack ? this.parseFFOrSafari(e) : (console.warn("[console-record-plugin]: Failed to parse error object:", e),
            []) : []
        },
        extractLocation: function(e) {
            if (-1 === e.indexOf(":"))
                return [e];
            var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
            if (!t)
                throw new Error("Cannot parse given url: ".concat(e));
            return [t[1], t[2] || void 0, t[3] || void 0]
        },
        parseV8OrIE: function(e) {
            return e.stack.split("\n").filter((function(e) {
                return !!e.match(xr)
            }
            ), this).map((function(e) {
                e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "(")
                  , r = t.match(/ (\((.+):(\d+):(\d+)\)$)/)
                  , n = (t = r ? t.replace(r[0], "") : t).split(/\s+/).slice(1)
                  , o = this.extractLocation(r ? r[1] : n.pop())
                  , a = n.join(" ") || void 0
                  , i = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                return new Er({
                    functionName: a,
                    fileName: i,
                    lineNumber: o[1],
                    columnNumber: o[2]
                })
            }
            ), this)
        },
        parseFFOrSafari: function(e) {
            return e.stack.split("\n").filter((function(e) {
                return !e.match(Lr)
            }
            ), this).map((function(e) {
                if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")),
                -1 === e.indexOf("@") && -1 === e.indexOf(":"))
                    return new Er({
                        functionName: e
                    });
                var t = /((.*".+"[^@]*)?[^@]*)(?:@)/
                  , r = e.match(t)
                  , n = r && r[1] ? r[1] : void 0
                  , o = this.extractLocation(e.replace(t, ""));
                return new Er({
                    functionName: n,
                    fileName: o[0],
                    lineNumber: o[1],
                    columnNumber: o[2]
                })
            }
            ), this)
        },
        parseOpera: function(e) {
            return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
        },
        parseOpera9: function(e) {
            for (var t = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), n = [], o = 2, a = r.length; o < a; o += 2) {
                var i = t.exec(r[o]);
                i && n.push(new Er({
                    fileName: i[2],
                    lineNumber: parseFloat(i[1])
                }))
            }
            return n
        },
        parseOpera10: function(e) {
            for (var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), n = [], o = 0, a = r.length; o < a; o += 2) {
                var i = t.exec(r[o]);
                i && n.push(new Er({
                    functionName: i[3] || void 0,
                    fileName: i[2],
                    lineNumber: parseFloat(i[1])
                }))
            }
            return n
        },
        parseOpera11: function(e) {
            return e.stack.split("\n").filter((function(e) {
                return !!e.match(Or) && !e.match(/^Error created at/)
            }
            ), this).map((function(e) {
                var t = e.split("@")
                  , r = this.extractLocation(t.pop())
                  , n = (t.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                return new Er({
                    functionName: n,
                    fileName: r[0],
                    lineNumber: r[1],
                    columnNumber: r[2]
                })
            }
            ), this)
        }
    };
    function Fr(e) {
        if (!e || !e.outerHTML)
            return "";
        for (var t = ""; e.parentElement; ) {
            var r = e.localName;
            if (!r)
                break;
            r = r.toLowerCase();
            var n = e.parentElement
              , o = [];
            if (n.children && n.children.length > 0)
                for (var a = 0; a < n.children.length; a++) {
                    var i = n.children[a];
                    i.localName && i.localName.toLowerCase && i.localName.toLowerCase() === r && o.push(i)
                }
            o.length > 1 && (r += ":eq(".concat(o.indexOf(e), ")")),
            t = r + (t ? ">" + t : ""),
            e = n
        }
        return t
    }
    function Br(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    function Zr(e, t) {
        if (0 === t)
            return !0;
        var r = Object.keys(e);
        for (var n of r)
            if (Br(e[n]) && Zr(e[n], t - 1))
                return !0;
        return !1
    }
    function _r(e, t) {
        var r = {
            numOfKeysLimit: 50,
            depthOfLimit: 4
        };
        Object.assign(r, t);
        var n = []
          , o = [];
        return JSON.stringify(e, (function(e, t) {
            if (n.length > 0) {
                var a = n.indexOf(this);
                ~a ? n.splice(a + 1) : n.push(this),
                ~a ? o.splice(a, 1 / 0, e) : o.push(e),
                ~n.indexOf(t) && (t = n[0] === t ? "[Circular ~]" : "[Circular ~." + o.slice(0, n.indexOf(t)).join(".") + "]")
            } else
                n.push(t);
            if (null === t)
                return t;
            if (void 0 === t)
                return "undefined";
            if (function(e) {
                if (Br(e) && Object.keys(e).length > r.numOfKeysLimit)
                    return !0;
                if ("function" == typeof e)
                    return !0;
                if (Br(e) && Zr(e, r.depthOfLimit))
                    return !0;
                return !1
            }(t))
                return function(e) {
                    var t = e.toString();
                    r.stringLengthLimit && t.length > r.stringLengthLimit && (t = "".concat(t.slice(0, r.stringLengthLimit), "..."));
                    return t
                }(t);
            if ("bigint" == typeof t)
                return t.toString() + "n";
            if (t instanceof Event) {
                var i = {};
                for (var s in t) {
                    var l = t[s];
                    Array.isArray(l) ? i[s] = Fr(l.length ? l[0] : null) : i[s] = l
                }
                return i
            }
            return t instanceof Node ? t instanceof HTMLElement ? t ? t.outerHTML : "" : t.nodeName : t instanceof Error ? t.stack ? t.stack + "\nEnd of stack for Error object" : t.name + ": " + t.message : t
        }
        ))
    }
    var Yr = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
    };
    function Wr(e, t, r) {
        var n, o = r ? Object.assign({}, Yr, r) : Yr, a = o.logger;
        if (!a)
            return () => {}
            ;
        n = "string" == typeof a ? t[a] : a;
        var i = 0
          , s = !1
          , l = [];
        if (o.level.includes("error")) {
            var c = t => {
                var r = t.message
                  , n = t.error
                  , a = Dr.parse(n).map((e => e.toString()))
                  , i = [_r(r, o.stringifyOptions)];
                e({
                    level: "error",
                    trace: a,
                    payload: i
                })
            }
            ;
            t.addEventListener("error", c),
            l.push(( () => {
                t.removeEventListener("error", c)
            }
            ));
            var d = t => {
                var r, n;
                t.reason instanceof Error ? (r = t.reason,
                n = [_r("Uncaught (in promise) ".concat(r.name, ": ").concat(r.message), o.stringifyOptions)]) : (r = new Error,
                n = [_r("Uncaught (in promise)", o.stringifyOptions), _r(t.reason, o.stringifyOptions)]);
                var a = Dr.parse(r).map((e => e.toString()));
                e({
                    level: "error",
                    trace: a,
                    payload: n
                })
            }
            ;
            t.addEventListener("unhandledrejection", d),
            l.push(( () => {
                t.removeEventListener("unhandledrejection", d)
            }
            ))
        }
        for (var u of o.level)
            l.push(h(n, u));
        return () => {
            l.forEach((e => e()))
        }
        ;
        function h(t, r) {
            var n = this;
            return t[r] ? Nr.patch(t, r, (t => function() {
                for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++)
                    l[c] = arguments[c];
                if (t.apply(n, l),
                !("assert" === r && l[0] || s)) {
                    s = !0;
                    try {
                        var d = Dr.parse(new Error).map((e => e.toString())).splice(1)
                          , u = ("assert" === r ? l.slice(1) : l).map((e => _r(e, o.stringifyOptions)));
                        ++i < o.lengthThreshold ? e({
                            level: r,
                            trace: d,
                            payload: u
                        }) : i === o.lengthThreshold && e({
                            level: "warn",
                            trace: [],
                            payload: [_r("The number of log records reached the threshold.")]
                        })
                    } catch (e) {
                        t("rrweb logger error:", e, ...l)
                    } finally {
                        s = !1
                    }
                }
            }
            )) : () => {}
        }
    }
    var Gr = e => ({
        name: "rrweb/console@1",
        observer: Wr,
        options: e
    })
      , Vr = "undefined" != typeof window ? window : void 0
      , Hr = "undefined" != typeof globalThis ? globalThis : Vr
      , Pr = Array.prototype.forEach
      , Xr = null == Hr ? void 0 : Hr.navigator;
    null == Hr || Hr.document,
    null == Hr || Hr.location,
    null == Hr || Hr.fetch,
    null != Hr && Hr.XMLHttpRequest && "withCredentials"in new Hr.XMLHttpRequest && Hr.XMLHttpRequest,
    null == Hr || Hr.AbortController,
    null == Xr || Xr.userAgent;
    var jr, zr = null != Vr ? Vr : {};
    !function(e) {
        e.GZipJS = "gzip-js",
        e.Base64 = "base64"
    }(jr || (jr = {}));
    var Kr = Array.isArray
      , Jr = Object.prototype
      , Ur = Jr.hasOwnProperty
      , qr = Jr.toString
      , Qr = Kr || function(e) {
        return "[object Array]" === qr.call(e)
    }
      , $r = e => "function" == typeof e
      , en = e => e === Object(e) && !Qr(e)
      , tn = e => void 0 === e
      , rn = e => "[object String]" == qr.call(e)
      , nn = e => null === e
      , on = e => tn(e) || nn(e)
      , an = e => "[object Boolean]" === qr.call(e)
      , sn = e => e instanceof Document
      , ln = e => e instanceof FormData
      , cn = e => {
        var t = {
            _log: function(t) {
                if (Vr && zr.POSTHOG_DEBUG && !tn(Vr.console) && Vr.console) {
                    for (var r = ("__rrweb_original__"in Vr.console[t] ? Vr.console[t].__rrweb_original__ : Vr.console[t]), n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                        o[a - 1] = arguments[a];
                    r(e, ...o)
                }
            },
            info: function() {
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                t._log("log", ...r)
            },
            warn: function() {
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                t._log("warn", ...r)
            },
            error: function() {
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                t._log("error", ...r)
            },
            critical: function() {
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                console.error(e, ...r)
            },
            uninitializedWarning: e => {
                t.error("You must initialize PostHog before calling ".concat(e))
            }
            ,
            createLogger: t => cn("".concat(e, " ").concat(t))
        };
        return t
    }
      , dn = cn("[PostHog.js]").createLogger
      , un = {};
    function hn(e, t, r) {
        if (!on(e)) {
            if (Qr(e))
                return function(e, t, r) {
                    if (Qr(e))
                        if (Pr && e.forEach === Pr)
                            e.forEach(t, r);
                        else if ("length"in e && e.length === +e.length)
                            for (var n = 0, o = e.length; n < o; n++)
                                if (n in e && t.call(r, e[n], n) === un)
                                    return
                }(e, t, r);
            if (ln(e)) {
                for (var n of e.entries())
                    if (t.call(r, n[1], n[0]) === un)
                        return
            } else
                for (var o in e)
                    if (Ur.call(e, o) && t.call(r, e[o], o) === un)
                        return
        }
    }
    var pn = function(e) {
        var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", o = [];
        return hn(e, (function(e, n) {
            tn(e) || tn(n) || "undefined" === n || (t = encodeURIComponent(e instanceof File ? e.name : e.toString()),
            r = encodeURIComponent(n),
            o[o.length] = r + "=" + t)
        }
        )),
        o.join(n)
    }
      , mn = {
        initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
        maskRequestFn: e => e,
        recordHeaders: !1,
        recordBody: !1,
        recordInitialRequests: !1,
        recordPerformance: !1,
        performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
        payloadSizeLimitBytes: 1e6,
        payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "analytics.google.com"]
    };
    function fn(e, t, r) {
        try {
            if (!(t in e))
                return () => {}
                ;
            var n = e[t]
              , o = r(n);
            return $r(o) && (o.prototype = o.prototype || {},
            Object.defineProperties(o, {
                __posthog_wrapped__: {
                    enumerable: !1,
                    value: !0
                }
            })),
            e[t] = o,
            () => {
                e[t] = n
            }
        } catch (e) {
            return () => {}
        }
    }
    function gn(e, t) {
        var r, n = function(e) {
            try {
                return "string" == typeof e ? new URL(e).hostname : "url"in e ? new URL(e.url).hostname : e.hostname
            } catch (e) {
                return null
            }
        }(e), o = {
            hostname: n,
            isHostDenied: !1
        };
        if (null === (r = t.payloadHostDenyList) || void 0 === r || !r.length || null == n || !n.trim().length)
            return o;
        for (var a of t.payloadHostDenyList)
            if (n.endsWith(a))
                return {
                    hostname: n,
                    isHostDenied: !0
                };
        return o
    }
    var yn = dn("[Recorder]")
      , vn = e => "navigation" === e.entryType
      , In = e => "resource" === e.entryType;
    function bn(e, t) {
        for (var r = e.length - 1; r >= 0; r -= 1)
            if (t(e[r]))
                return e[r]
    }
    function Cn(e, t, r) {
        if (r.recordInitialRequests) {
            var n = t.performance.getEntries().filter((e => vn(e) || In(e) && r.initiatorTypes.includes(e.initiatorType)));
            e({
                requests: n.flatMap((e => Rn({
                    entry: e,
                    method: void 0,
                    status: void 0,
                    networkRequest: {},
                    isInitial: !0
                }))),
                isInitial: !0
            })
        }
        var o = new t.PerformanceObserver((t => {
            var n = t.getEntries().filter((e => vn(e) || In(e) && r.initiatorTypes.includes(e.initiatorType) && (e => !r.recordBody && !r.recordHeaders || "xmlhttprequest" !== e.initiatorType && "fetch" !== e.initiatorType)(e)));
            e({
                requests: n.flatMap((e => Rn({
                    entry: e,
                    method: void 0,
                    status: void 0,
                    networkRequest: {}
                })))
            })
        }
        ))
          , a = PerformanceObserver.supportedEntryTypes.filter((e => r.performanceEntryTypeToObserve.includes(e)));
        return o.observe({
            entryTypes: a
        }),
        () => {
            o.disconnect()
        }
    }
    function Sn(e, t) {
        return !!t && (an(t) || t[e])
    }
    function wn(e) {
        var {type: t, recordBody: r, headers: n} = e;
        function o(e) {
            var t = Object.keys(n).find((e => "content-type" === e.toLowerCase()))
              , r = t && n[t];
            return e.some((e => null == r ? void 0 : r.includes(e)))
        }
        if (!r)
            return !1;
        if (an(r))
            return !0;
        if (Qr(r))
            return o(r);
        var a = r[t];
        return an(a) ? a : o(a)
    }
    function Nn(e, t, r, n, o) {
        return Mn.apply(this, arguments)
    }
    function Mn() {
        return Mn = o((function*(e, t, r, n, o) {
            var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (a > 10)
                return yn.warn("Failed to get performance entry for request", {
                    url: r,
                    initiatorType: t
                }),
                null;
            var i = bn(e.performance.getEntriesByName(r), (e => In(e) && e.initiatorType === t && (tn(n) || e.startTime >= n) && (tn(o) || e.startTime <= o)));
            return i || (yield new Promise((e => setTimeout(e, 50 * a))),
            Nn(e, t, r, n, o, a + 1))
        }
        )),
        Mn.apply(this, arguments)
    }
    function An(e) {
        var {body: t, options: r, url: n} = e;
        if (on(t))
            return null;
        var {hostname: o, isHostDenied: a} = gn(n, r);
        if (a)
            return o + " is in deny list";
        if (rn(t))
            return t;
        if (sn(t))
            return t.textContent;
        if (ln(t))
            return pn(t);
        if (en(t))
            try {
                return JSON.stringify(t)
            } catch (e) {
                return "[SessionReplay] Failed to stringify response object"
            }
        return "[SessionReplay] Cannot read body of type " + toString.call(t)
    }
    var kn = e => !nn(e) && ("navigation" === e.entryType || "resource" === e.entryType);
    function Rn(e) {
        var {entry: t, method: n, status: o, networkRequest: a, isInitial: i, start: s, end: l, url: c, initiatorType: d} = e;
        s = t ? t.startTime : s,
        l = t ? t.responseEnd : l;
        var u = Math.floor(Date.now() - performance.now())
          , h = Math.floor(u + (s || 0))
          , p = [r(r({}, t ? t.toJSON() : {
            name: c
        }), {}, {
            startTime: tn(s) ? void 0 : Math.round(s),
            endTime: tn(l) ? void 0 : Math.round(l),
            timeOrigin: u,
            timestamp: h,
            method: n,
            initiatorType: d || (t ? t.initiatorType : void 0),
            status: o,
            requestHeaders: a.requestHeaders,
            requestBody: a.requestBody,
            responseHeaders: a.responseHeaders,
            responseBody: a.responseBody,
            isInitial: i
        })];
        if (kn(t))
            for (var m of t.serverTiming || [])
                p.push({
                    timeOrigin: u,
                    timestamp: h,
                    startTime: Math.round(t.startTime),
                    name: m.name,
                    duration: m.duration,
                    entryType: "serverTiming"
                });
        return p
    }
    var Tn = ["video/", "audio/"];
    function En(e) {
        return new Promise(( (t, r) => {
            var n = setTimeout(( () => t("[SessionReplay] Timeout while trying to read body")), 500);
            try {
                e.clone().text().then((e => t(e)), (e => r(e))).finally(( () => clearTimeout(n)))
            } catch (e) {
                clearTimeout(n),
                t("[SessionReplay] Failed to read body")
            }
        }
        ))
    }
    function On() {
        return (On = o((function*(e) {
            var {r: t, options: r, url: n} = e
              , {hostname: o, isHostDenied: a} = gn(n, r);
            return a ? Promise.resolve(o + " is in deny list") : En(t)
        }
        ))).apply(this, arguments)
    }
    function xn() {
        return (xn = o((function*(e) {
            var {r: t, options: r, url: n} = e
              , o = function(e) {
                var t, {r: r, options: n, url: o} = e;
                if ("chunked" === r.headers.get("Transfer-Encoding"))
                    return "Chunked Transfer-Encoding is not supported";
                var a = null === (t = r.headers.get("Content-Type")) || void 0 === t ? void 0 : t.toLowerCase()
                  , i = Tn.some((e => null == a ? void 0 : a.startsWith(e)));
                if (a && i)
                    return "Content-Type ".concat(a, " is not supported");
                var {hostname: s, isHostDenied: l} = gn(o, n);
                return l ? s + " is in deny list" : null
            }({
                r: t,
                options: r,
                url: n
            });
            return nn(o) ? En(t) : Promise.resolve(o)
        }
        ))).apply(this, arguments)
    }
    function Ln(e, t, r) {
        if (!r.initiatorTypes.includes("fetch"))
            return () => {}
            ;
        var n = Sn("request", r.recordHeaders)
          , a = Sn("response", r.recordHeaders)
          , i = fn(t, "fetch", (i => function() {
            var s = o((function*(o, s) {
                var l, c, d, u = new Request(o,s), h = {};
                try {
                    var p = {};
                    u.headers.forEach(( (e, t) => {
                        p[t] = e
                    }
                    )),
                    n && (h.requestHeaders = p),
                    wn({
                        type: "request",
                        headers: p,
                        url: o,
                        recordBody: r.recordBody
                    }) && (h.requestBody = yield function(e) {
                        return On.apply(this, arguments)
                    }({
                        r: u,
                        options: r,
                        url: o
                    })),
                    c = t.performance.now(),
                    l = yield i(u),
                    d = t.performance.now();
                    var m = {};
                    return l.headers.forEach(( (e, t) => {
                        m[t] = e
                    }
                    )),
                    a && (h.responseHeaders = m),
                    wn({
                        type: "response",
                        headers: m,
                        url: o,
                        recordBody: r.recordBody
                    }) && (h.responseBody = yield function(e) {
                        return xn.apply(this, arguments)
                    }({
                        r: l,
                        options: r,
                        url: o
                    })),
                    l
                } finally {
                    Nn(t, "fetch", u.url, c, d).then((t => {
                        var r, n = Rn({
                            entry: t,
                            method: u.method,
                            status: null === (r = l) || void 0 === r ? void 0 : r.status,
                            networkRequest: h,
                            start: c,
                            end: d,
                            url: u.url,
                            initiatorType: "fetch"
                        });
                        e({
                            requests: n
                        })
                    }
                    )).catch(( () => {}
                    ))
                }
            }
            ));
            return function(e, t) {
                return s.apply(this, arguments)
            }
        }()));
        return () => {
            i()
        }
    }
    var Dn = null;
    function Fn(e, t, n) {
        if (!("performance"in t))
            return () => {}
            ;
        if (Dn)
            return yn.warn("Network observer already initialised, doing nothing"),
            () => {}
            ;
        var o = n ? Object.assign({}, mn, n) : mn
          , a = t => {
            var n = [];
            t.requests.forEach((e => {
                var t = o.maskRequestFn(e);
                t && n.push(t)
            }
            )),
            n.length > 0 && e(r(r({}, t), {}, {
                requests: n
            }))
        }
          , i = Cn(a, t, o)
          , s = () => {}
          , l = () => {}
        ;
        return (o.recordHeaders || o.recordBody) && (s = function(e, t, r) {
            if (!r.initiatorTypes.includes("xmlhttprequest"))
                return () => {}
                ;
            var n = Sn("request", r.recordHeaders)
              , o = Sn("response", r.recordHeaders)
              , a = fn(t.XMLHttpRequest.prototype, "open", (a => function(i, s) {
                var l, c, d = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], u = arguments.length > 3 ? arguments[3] : void 0, h = arguments.length > 4 ? arguments[4] : void 0, p = this, m = new Request(s), f = {}, g = {}, y = p.setRequestHeader.bind(p);
                p.setRequestHeader = (e, t) => (g[e] = t,
                y(e, t)),
                n && (f.requestHeaders = g);
                var v = p.send.bind(p);
                p.send = e => (wn({
                    type: "request",
                    headers: g,
                    url: s,
                    recordBody: r.recordBody
                }) && (f.requestBody = An({
                    body: e,
                    options: r,
                    url: s
                })),
                l = t.performance.now(),
                v(e)),
                p.addEventListener("readystatechange", ( () => {
                    if (p.readyState === p.DONE) {
                        c = t.performance.now();
                        var n = {};
                        p.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((e => {
                            var t = e.split(": ")
                              , r = t.shift()
                              , o = t.join(": ");
                            r && (n[r] = o)
                        }
                        )),
                        o && (f.responseHeaders = n),
                        wn({
                            type: "response",
                            headers: n,
                            url: s,
                            recordBody: r.recordBody
                        }) && (f.responseBody = An({
                            body: p.response,
                            options: r,
                            url: s
                        })),
                        Nn(t, "xmlhttprequest", m.url, l, c).then((t => {
                            var r = Rn({
                                entry: t,
                                method: i,
                                status: null == p ? void 0 : p.status,
                                networkRequest: f,
                                start: l,
                                end: c,
                                url: s.toString(),
                                initiatorType: "xmlhttprequest"
                            });
                            e({
                                requests: r
                            })
                        }
                        )).catch(( () => {}
                        ))
                    }
                }
                )),
                a.call(p, i, s, d, u, h)
            }
            ));
            return () => {
                a()
            }
        }(a, t, o),
        l = Ln(a, t, o)),
        Dn = () => {
            i(),
            s(),
            l()
        }
    }
    var Bn = "rrweb/network@1"
      , Zn = e => ({
        name: Bn,
        observer: Fn,
        options: e
    });
    zr.__PosthogExtensions__ = zr.__PosthogExtensions__ || {},
    zr.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: Gr,
        getRecordNetworkPlugin: Zn
    },
    zr.__PosthogExtensions__.rrweb = {
        record: Vt,
        version: "v2"
    },
    zr.rrweb = {
        record: Vt,
        version: "v2"
    },
    zr.rrwebConsoleRecord = {
        getRecordConsolePlugin: Gr
    },
    zr.getRecordNetworkPlugin = Zn,
    e.NETWORK_PLUGIN_NAME = Bn,
    e.default = Vt,
    e.findLast = bn,
    e.getRecordNetworkPlugin = Zn,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}({});
//# sourceMappingURL=recorder.js.map
