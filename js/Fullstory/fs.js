//!This code is part of the Services provided by FullStory, Inc. For license information, please refer to https://www.fullstory.com/legal/terms-and-conditions/
//!Portions of this code are licensed under the following license:
//!  For license information please see fs.js.LEGAL.txt 
"use strict";
!function() {
    var t = function(n, i) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        )(n, i)
    };
    function n(n, i) {
        if ("function" != typeof i && null !== i)
            throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        function r() {
            this.constructor = n
        }
        t(n, i),
        n.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
    var i = function() {
        return i = Object.assign || function(t) {
            for (var n, i = 1, r = arguments.length; i < r; i++)
                for (var e in n = arguments[i])
                    Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
            return t
        }
        ,
        i.apply(this, arguments)
    };
    function r(t, n, i, r) {
        return new (i || (i = Promise))(function(e, s) {
            function u(t) {
                try {
                    a(r.next(t))
                } catch (t) {
                    s(t)
                }
            }
            function o(t) {
                try {
                    a(r["throw"](t))
                } catch (t) {
                    s(t)
                }
            }
            function a(t) {
                var n;
                t.done ? e(t.value) : (n = t.value,
                n instanceof i ? n : new i(function(t) {
                    t(n)
                }
                )).then(u, o)
            }
            a((r = r.apply(t, n || [])).next())
        }
        )
    }
    function e(t, n) {
        var i, r, e, s, u = {
            label: 0,
            sent: function() {
                if (1 & e[0])
                    throw e[1];
                return e[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: o(0),
            "throw": o(1),
            "return": o(2)
        },
        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }
        ),
        s;
        function o(o) {
            return function(a) {
                return function(o) {
                    if (i)
                        throw new TypeError("Generator is already executing.");
                    for (; s && (s = 0,
                    o[0] && (u = 0)),
                    u; )
                        try {
                            if (i = 1,
                            r && (e = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((e = r["return"]) && e.call(r),
                            0) : r.next) && !(e = e.call(r, o[1])).done)
                                return e;
                            switch (r = 0,
                            e && (o = [2 & o[0], e.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                e = o;
                                break;
                            case 4:
                                return u.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                u.label++,
                                r = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = u.ops.pop(),
                                u.trys.pop();
                                continue;
                            default:
                                if (!((e = (e = u.trys).length > 0 && e[e.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === o[0] && (!e || o[1] > e[0] && o[1] < e[3])) {
                                    u.label = o[1];
                                    break
                                }
                                if (6 === o[0] && u.label < e[1]) {
                                    u.label = e[1],
                                    e = o;
                                    break
                                }
                                if (e && u.label < e[2]) {
                                    u.label = e[2],
                                    u.ops.push(o);
                                    break
                                }
                                e[2] && u.ops.pop(),
                                u.trys.pop();
                                continue
                            }
                            o = n.call(t, u)
                        } catch (t) {
                            o = [6, t],
                            r = 0
                        } finally {
                            i = e = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    }
    function s(t, n, i) {
        if (i || 2 === arguments.length)
            for (var r, e = 0, s = n.length; e < s; e++)
                !r && e in n || (r || (r = Array.prototype.slice.call(n, 0, e)),
                r[e] = n[e]);
        return t.concat(r || Array.prototype.slice.call(n))
    }
    var u = function() {
        function t(t, n, i) {
            void 0 === n && (n = function() {}
            ),
            void 0 === i && (i = !1),
            this.t = t,
            this.i = n,
            this.o = i,
            this._cookies = {},
            this._cookies = kr(this.t)
        }
        return t.prototype.setDomain = function(t) {
            this.h = t
        }
        ,
        t.prototype.getValue = function(t, n) {
            return this.v(t, n)
        }
        ,
        t.prototype.setValue = function(t, n, i, r) {
            var e = this;
            if (null != this.h && !this.o) {
                var s = [];
                this.S(t, r, n, function() {
                    return e.k(t, r, n, i)
                }, s),
                s.length > 0 && this.i(s)
            }
        }
        ,
        t.prototype.setCookie = function(t, n, i) {
            this._setCookie(t, n, i)
        }
        ,
        Object.defineProperty(t.prototype, "cookies", {
            get: function() {
                return this._cookies
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.clearCookie = function(t, n) {
            this._cookies[t] && (this.t.cookie = o(this.h, t, "", "Thu, 01 Jan 1970 00:00:01 GMT"),
            delete this._cookies[t]);
            try {
                delete localStorage[null != n ? n : t]
            } catch (t) {}
        }
        ,
        t.prototype._setCookie = function(t, n, i) {
            try {
                if (this.t.cookie = o(this.h, t, n, i),
                this.t.cookie && this.t.cookie.indexOf(n) > -1)
                    return;
                this.t.cookie = o(this.h, t, n, i, "None")
            } finally {
                this._cookies = kr(this.t)
            }
        }
        ,
        t.prototype.k = function(t, n, i, r) {
            this._setCookie(t, i, r),
            function(t, n) {
                try {
                    localStorage[t] = n
                } catch (t) {}
            }(null != n ? n : t, i)
        }
        ,
        t.prototype.v = function(t, n) {
            var i, r = this._cookies[t];
            try {
                i = localStorage[null != n ? n : t]
            } catch (t) {}
            return {
                cookieValue: r,
                localStorageValue: i
            }
        }
        ,
        t.prototype.S = function(t, n, i, r, e, s) {
            void 0 === s && (s = 3),
            r();
            for (var u = !1, o = !1, a = 1; a < s; a++) {
                var c = this.v(t, n)
                  , h = c.cookieValue;
                if (o = c.localStorageValue === i,
                (u = h === i) && o)
                    return !0;
                if (u)
                    break;
                r()
            }
            return u || e.push([t, "cookie", i]),
            o || e.push([null != n ? n : t, "localStorage", i]),
            !1
        }
        ,
        t
    }();
    function o(t, n, i, r, e) {
        void 0 === e && (e = "Strict");
        var s = "".concat(n, "=").concat(i)
          , u = function(t) {
            if (t)
                return ".".concat(encodeURIComponent(t))
        }(t);
        return u && (s += "; domain=".concat(u)),
        r && (s += "; Expires=".concat(r)),
        s += "; path=/; SameSite=".concat(e),
        "https:" === location.protocol && (s += "; Secure"),
        s
    }
    function a(t, n, i, r) {
        var e = i(t)
          , s = i(n);
        return e ? s ? r(e, s) : e : s
    }
    var c = navigator.userAgent
      , h = c.indexOf("MSIE ") > -1 || c.indexOf("Trident/") > -1
      , f = (h && c.indexOf("Trident/5"),
    h && c.indexOf("Trident/6"),
    h && c.indexOf("rv:11") > -1)
      , v = c.indexOf("Edge/") > -1
      , l = c.indexOf("Opera/") > -1
      , d = (c.indexOf("CriOS"),
    c.indexOf("Snapchat") > -1)
      , p = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent)
      , w = /^((?!chrome|android).)*(safari)/i.test(window.navigator.userAgent)
      , g = p || w;
    function m() {
        var t = window.navigator.userAgent.match(/Version\/(\d+)/);
        return t && t[1] ? parseInt(t[1], 10) : -1
    }
    function y(t) {
        if (!g)
            return !1;
        var n = m();
        return n >= 0 && n === t
    }
    function b(t) {
        if (!g)
            return !1;
        var n = m();
        return n >= 0 && n < t
    }
    var S = y(9)
      , k = (y(10),
    b(8));
    function _(t, n) {
        for (var i = 0 === n.indexOf("on") ? function(t) {
            return "on".concat(t).concat(n.slice(2))
        }
        : function(t) {
            return "".concat(t).concat(n.charAt(0).toUpperCase()).concat(n.slice(1))
        }
        , r = 0, e = [function() {
            return n
        }
        , function() {
            return i("webkit")
        }
        , function() {
            return i("moz")
        }
        , function() {
            return i("ms")
        }
        ]; r < e.length; r++) {
            var s = (0,
            e[r])();
            if (s in t)
                return s
        }
        return n
    }
    function A(t) {}
    b(10),
    b(12);
    var I, E, T, C, x = (E = (I = window.navigator).vendor,
    T = void 0 !== window.opr,
    C = I.userAgent.indexOf("Edge") > -1,
    !!I.userAgent.match("CriOS") || "Google Inc." === E && !T && !C), R = /Firefox/.test(window.navigator.userAgent);
    function K() {
        var t = window.navigator.userAgent.match(/Firefox\/(\d+)/);
        return t && t[1] ? parseInt(t[1], 10) : -1
    }
    function j(t) {
        return !!R && K() < t
    }
    function M() {
        var t = window.navigator.userAgent.match(/Chrome\/(\d+)/);
        return t && t[1] ? parseInt(t[1], 10) : -1
    }
    function P(t) {
        if (!x)
            return !1;
        var n = M();
        return -1 !== n && n < t
    }
    !!x && M(),
    R && K();
    var O, N, L, U, F, B, D, H, W, z, q, V, $ = j(28);
    j(27),
    P(23),
    P(38),
    P(57),
    P(60),
    (N = O || (O = {})).MUT_INSERT = 2,
    N.MUT_REMOVE = 3,
    N.MUT_ATTR = 4,
    N.MUT_TEXT = 6,
    N.MOUSEMOVE = 8,
    N.MOUSEMOVE_CURVE = 9,
    N.SCROLL_LAYOUT = 10,
    N.SCROLL_LAYOUT_CURVE = 11,
    N.MOUSEDOWN = 12,
    N.MOUSEUP = 13,
    N.CLICK = 16,
    N.FOCUS = 17,
    N.VALUECHANGE = 18,
    N.RESIZE_LAYOUT = 19,
    N.DOMLOADED = 20,
    N.LOAD = 21,
    N.PLACEHOLDER_SIZE = 22,
    N.UNLOAD = 23,
    N.BLUR = 24,
    N.SET_FRAME_BASE = 25,
    N.TOUCHSTART = 32,
    N.TOUCHEND = 33,
    N.TOUCHCANCEL = 34,
    N.TOUCHMOVE = 35,
    N.TOUCHMOVE_CURVE = 36,
    N.NAVIGATE = 37,
    N.PLAY = 38,
    N.PAUSE = 39,
    N.RESIZE_VISUAL = 40,
    N.RESIZE_VISUAL_CURVE = 41,
    N.RESIZE_DOCUMENT_CONTENT = 42,
    N.RESIZE_SCROLLABLE_ELEMENT_CONTENT = 43,
    N.LOG = 48,
    N.ERROR = 49,
    N.DBL_CLICK = 50,
    N.FORM_SUBMIT = 51,
    N.WINDOW_FOCUS = 52,
    N.WINDOW_BLUR = 53,
    N.HEARTBEAT = 54,
    N.WATCHED_ELEM = 56,
    N.PERF_ENTRY = 57,
    N.REC_FEAT_SUPPORTED = 58,
    N.SELECT = 59,
    N.CSSRULE_INSERT = 60,
    N.CSSRULE_DELETE = 61,
    N.FAIL_THROTTLED = 62,
    N.AJAX_REQUEST = 63,
    N.SCROLL_VISUAL_OFFSET = 64,
    N.SCROLL_VISUAL_OFFSET_CURVE = 65,
    N.MEDIA_QUERY_CHANGE = 66,
    N.RESOURCE_TIMING_BUFFER_FULL = 67,
    N.MUT_SHADOW = 68,
    N.DISABLE_STYLESHEET = 69,
    N.FULLSCREEN = 70,
    N.FULLSCREEN_ERROR = 71,
    N.ADOPTED_STYLESHEETS = 72,
    N.CUSTOM_ELEMENT_DEFINED = 73,
    N.MODAL_OPEN = 74,
    N.MODAL_CLOSE = 75,
    N.LONG_FRAME = 77,
    N.TIMING = 78,
    N.STORAGE_WRITE_FAILURE = 79,
    N.DOCUMENT_PROPERTIES = 80,
    N.ENTRY_NAVIGATE = 81,
    N.STATS = 82,
    N.VIEWPORT_INTERSECTION = 83,
    N.COPY = 84,
    N.PASTE = 85,
    N.URL_SALT = 86,
    N.URL_ID = 87,
    N.FRAME_STATUS = 88,
    N.SCRIPT_COMPILED_VERSION = 89,
    N.RESET_CSS_SHEET = 90,
    N.ANIMATION_CREATED = 91,
    N.ANIMATION_METHOD_CALLED = 92,
    N.ANIMATION_PROPERTY_SET = 93,
    N.DOCUMENT_TIMELINE_CREATED = 94,
    N.KEYFRAME_EFFECT_CREATED = 95,
    N.KEYFRAME_EFFECT_METHOD_CALLED = 96,
    N.KEYFRAME_EFFECT_PROPERTY_SET = 97,
    N.CAPTURE_SOURCE = 98,
    N.PAGE_DATA = 99,
    N.VISIBILITY_STATE = 100,
    N.DIALOG = 101,
    N.CSSRULE_UPDATE = 102,
    N.CANVAS = 103,
    N.CANVAS_DETACHED_DIMENSION = 104,
    N.INIT_API = 105,
    N.DEFERRED_RESOLVED = 106,
    N.ELEMENT_PROP = 109,
    N.BFCACHE_STATE = 110,
    N.SESSION_INFO = 111,
    N.EVENT_CANCELED = 112,
    N.DIAGNOSTIC_INFO = 113,
    N.RESOLVABLE_EVENT = 114,
    N.IN_SESSION_PREDICTION = 115,
    N.KEEP_ELEMENT = 2e3,
    N.KEEP_URL = 2001,
    N.KEEP_BOUNCE = 2002,
    N.KEEP_CRASH = 2003,
    N.SYS_SETVAR = 8193,
    N.SYS_RESOURCEHASH = 8195,
    N.SYS_SETCONSENT = 8196,
    N.SYS_CUSTOM = 8197,
    N.SYS_REPORTCONSENT = 8198,
    N.SYS_LETHE_MOBILE_BUNDLE_SEQ = 8199,
    (U = L || (L = {})).Animation = 0,
    U.CSSAnimation = 1,
    U.CSSTransition = 2,
    (B = F || (F = {})).Internal = 0,
    B.Public = 1,
    (H = D || (D = {})).Unknown = 0,
    H.Serialization = 1,
    (z = W || (W = {})).Unknown = 0,
    z.DomSnapshot = 1,
    z.NodeEncoding = 2,
    z.LzEncoding = 3,
    z.ApplyRules = 4,
    z.ProcessMut = 5,
    (V = q || (q = {})).Unknown = 0,
    V.Successful = 1,
    V.BlocklistedFrame = 2,
    V.PartiallyLoaded = 3,
    V.MissingWindowOrDocument = 4,
    V.MissingDocumentHead = 5,
    V.MissingBodyOrChildren = 6,
    V.AlreadyDefined = 7,
    V.NoNonScriptElement = 8,
    V.Exception = 9;
    var G, Q, X, Y, J, Z, tt, nt, it, rt, et, st, ut, ot, at, ct, ht, ft, vt, lt, dt, pt, wt, gt, mt, yt, bt, St, kt, _t, At, It, Et, Tt, Ct, xt, Rt, Kt, jt, Mt, Pt, Ot, Nt, Lt, Ut, Ft, Bt, Dt, Ht, Wt, zt = ["print", "alert", "confirm"];
    (Q = G || (G = {}))[Q.Unset = 0] = "Unset",
    Q[Q.Entering = 1] = "Entering",
    Q[Q.Restored = 2] = "Restored",
    (Y = X || (X = {}))[Y.Index = 1] = "Index",
    Y[Y.Cached = 2] = "Cached",
    (Z = J || (J = {})).GrantConsent = !0,
    Z.RevokeConsent = !1,
    (nt = tt || (tt = {})).Page = 0,
    nt.Document = 1,
    (rt = it || (it = {})).Unknown = 0,
    rt.Api = 1,
    rt.FsShutdownFrame = 2,
    rt.Hibernation = 3,
    rt.Reidentify = 4,
    rt.SettingsBlocked = 5,
    rt.Size = 6,
    rt.Unload = 7,
    rt.Hidden = 8,
    (st = et || (et = {})).Unknown = 0,
    st.NotEmpty = 1,
    st.EmptyBody = 2,
    (ot = ut || (ut = {}))[ot.UNSET = 0] = "UNSET",
    ot[ot.OK = 1] = "OK",
    ot[ot.ABORTED = 2] = "ABORTED",
    ot[ot.OPAQUE = 3] = "OPAQUE",
    ot[ot.ERROR = 4] = "ERROR",
    (ct = at || (at = {})).Timing = 0,
    ct.Navigation = 1,
    ct.Resource = 2,
    ct.Paint = 3,
    ct.Mark = 4,
    ct.Measure = 5,
    ct.Memory = 6,
    ct.TimeOrigin = 7,
    ct.LayoutShift = 8,
    ct.FirstInput = 9,
    ct.LargestContentfulPaint = 10,
    ct.LongTask = 11,
    ct.EventTiming = 12,
    ct.EventTimingCount = 13,
    ct.LongAnimationFrame = 14,
    ct.ScriptTiming = 15,
    (ft = ht || (ht = {})).Timing = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"],
    ft.Navigation = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "type", "redirectCount", "decodedBodySize", "encodedBodySize", "transferSize", "activationStart"],
    ft.Resource = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "decodedBodySize", "encodedBodySize", "transferSize"],
    ft.Measure = ["name", "startTime", "duration"],
    ft.LongAnimationFrame = ["name", "startTime", "duration", "renderStart", "styleAndLayoutStart", "blockingDuration", "firstUIEventTimestamp"],
    ft.ScriptTiming = ["name", "startTime", "duration", "invokerType", "invoker", "executionStart", "sourceURL", "sourceFunctionName", "sourceCharPosition", "pauseDuration", "forcedStyleAndLayoutDuration", "windowAttribution"],
    ft.Memory = ["jsHeapSizeLimit", "totalJSHeapSize", "usedJSHeapSize"],
    ft.TimeOrigin = ["timeOrigin"],
    ft.LayoutShift = ["startTime", "value", "hadRecentInput"],
    ft.FirstInput = ["name", "startTime", "duration", "processingStart"],
    ft.EventTiming = ["name", "startTime", "duration", "processingStart", "processingEnd", "interactionId", "target"],
    ft.LargestContentfulPaint = ["name", "startTime", "duration", "renderTime", "loadTime", "size", "element"],
    ft.EventTimingCount = ["interactionCount"],
    (lt = vt || (vt = {})).Performance = 0,
    lt.PerformanceEntries = 1,
    lt.PerformanceMemory = 2,
    lt.Console = 3,
    lt.Ajax = 4,
    lt.PerformanceObserver = 5,
    lt.PerformanceTimeOrigin = 7,
    lt.WebAnimation = 8,
    lt.LayoutShift = 9,
    lt.FirstInput = 10,
    lt.LargestContentfulPaint = 11,
    lt.LongTask = 12,
    lt.HTMLDialogElement = 13,
    lt.CaptureOnStartupEnabled = 14,
    lt.CanvasWatcherEnabled = 15,
    lt.CanvasScreenShotMode = 16,
    lt.ResizeObserver = 17,
    (pt = dt || (dt = {})).Node = 1,
    pt.Sheet = 2,
    (gt = wt || (wt = {})).StyleSheetHooks = 0,
    gt.SetPropertyHooks = 1,
    (yt = mt || (mt = {})).Document = "document",
    yt.Event = "evt",
    yt.Page = "page",
    yt.User = "user",
    (St = bt || (bt = {})).FsId = "fsidentity",
    St.NewUid = "newuid",
    (_t = kt || (kt = {})).Elide = 0,
    _t.Record = 1,
    _t.Allowlist = 2,
    (It = At || (At = {})).Any = 0,
    It.Exclude = 1,
    It.Mask = 2,
    (Tt = Et || (Et = {})).Erase = 0,
    Tt.MaskText = 1,
    Tt.ScrubUrl = 2,
    Tt.ScrubCss = 3,
    (xt = Ct || (Ct = {})).Static = 0,
    xt.Prefix = 1,
    (Kt = Rt || (Rt = {})).SignalInvalid = 0,
    Kt.SignalDeadClick = 1,
    Kt.SignalRageClick = 2,
    (Mt = jt || (jt = {})).ReasonNoSuchOrg = 1,
    Mt.ReasonOrgDisabled = 2,
    Mt.ReasonOrgOverQuota = 3,
    Mt.ReasonBlockedDomain = 4,
    Mt.ReasonBlockedIp = 5,
    Mt.ReasonBlockedUserAgent = 6,
    Mt.ReasonBlockedGeo = 7,
    Mt.ReasonBlockedTrafficRamping = 8,
    Mt.ReasonInvalidURL = 9,
    Mt.ReasonUserOptOut = 10,
    Mt.ReasonInvalidRecScript = 11,
    Mt.ReasonDeletingUser = 12,
    Mt.ReasonNativeHookFailure = 13,
    (Ot = Pt || (Pt = {})).Unset = 0,
    Ot.Exclude = 1,
    Ot.Mask = 2,
    Ot.Unmask = 3,
    Ot.Watch = 4,
    Ot.Keep = 5,
    Ot.Defer = 6,
    (Lt = Nt || (Nt = {})).Unset = 0,
    Lt.Click = 1,
    (Ft = Ut || (Ut = {}))[Ft.Page = 1] = "Page",
    Ft[Ft.Bundle = 2] = "Bundle",
    Ft[Ft.Event = 6] = "Event",
    Ft[Ft.Settings = 8] = "Settings",
    (Dt = Bt || (Bt = {}))[Dt.Error = 3] = "Error",
    Dt[Dt.Page = 4] = "Page",
    Dt[Dt.Bundle = 5] = "Bundle",
    Dt[Dt.Event = 7] = "Event",
    Dt[Dt.Settings = 9] = "Settings",
    (Wt = Ht || (Ht = {})).MaxPerfMarksPerPage = 16384,
    Wt.MaxLogsPerPage = 1024,
    Wt.MaxUrlLength = 2048,
    Wt.MutationProcessingInterval = 250,
    Wt.CurveSamplingInterval = 142,
    Wt.DefaultBundleUploadInterval = 5e3,
    Wt.HeartbeatInterval = 256200,
    Wt.PageInactivityTimeout = 18e5,
    Wt.BackoffMax = 3e5,
    Wt.ScrollSampleInterval = Wt.MutationProcessingInterval / 5,
    Wt.SyntheticClickTimeout = Wt.ScrollSampleInterval + 5,
    Wt.InactivityThreshold = 4e3,
    Wt.MaxAjaxPayloadLength = 16384,
    Wt.DefaultOrgSettings = {
        MaxPerfMarksPerPage: Wt.MaxPerfMarksPerPage,
        MaxConsoleLogPerPage: Wt.MaxLogsPerPage,
        MaxAjaxPayloadLength: Wt.MaxAjaxPayloadLength,
        MaxUrlLength: Wt.MaxUrlLength,
        RecordPerformanceResourceImg: !0,
        RecordPerformanceResourceTiming: !0,
        HttpRequestHeadersAllowlist: [],
        HttpResponseHeadersAllowlist: [],
        UrlPrivacyConfig: [{ //LOOK INTO
            Exclude: {
                Hash: [{
                    Expression: "#.*"
                }],
                QueryParam: [{
                    Expression: "(=)(.*)"
                }]
            }
        }],
        AttributeBlocklist: [{
            Target: At.Any,
            Tag: "*",
            Name: "",
            Type: Ct.Prefix,
            Action: Et.Erase
        }]
    },
    Wt.DefaultStatsSettings = {
        MaxPayloadLength: 8192,
        MaxEventTypeLength: 1024
    },
    Wt.BlockedFieldValue = "__fs__redacted",
    Wt.DefaultRecDisabledMessage = "Capture disabled. Turn on debug mode for more information.",
    Wt.ShutdownMessage = "Shutdown called.",
    Wt.TextPlain = "text/plain";
    var qt, Vt, $t, Gt, Qt, Xt, Yt, Jt, Zt, tn, nn = "_fs_trust_event", rn = "__fs", en = "data-fs-namespace", sn = "gzip", un = "identity";
    (Vt = qt || (qt = {}))[Vt.Inactive = 1] = "Inactive",
    Vt[Vt.Pending = 2] = "Pending",
    Vt[Vt.ShouldFlush = 3] = "ShouldFlush",
    (Gt = $t || ($t = {}))[Gt.Shutdown = 1] = "Shutdown",
    Gt[Gt.Starting = 2] = "Starting",
    Gt[Gt.Started = 3] = "Started",
    Gt[Gt.Fatal = 4] = "Fatal",
    (Xt = Qt || (Qt = {})).Set = 0,
    Xt.Function = 1,
    (Jt = Yt || (Yt = {}))[Jt.Disabled = 0] = "Disabled",
    Jt[Jt.CaptureCanvasOps = 1] = "CaptureCanvasOps",
    Jt[Jt.ScreenshotCanvas = 2] = "ScreenshotCanvas",
    (tn = Zt || (Zt = {})).EndPreviewMode = "EndPreviewMode",
    tn.EvtBundle = "EvtBundle",
    tn.GreetFrame = "GreetFrame",
    tn.InitFrameMobile = "InitFrameMobile",
    tn.RequestFrameId = "RequestFrameId",
    tn.RestartFrame = "RestartFrame",
    tn.SetConsent = "SetConsent",
    tn.SetFrameId = "SetFrameId",
    tn.ShutdownFrame = "ShutdownFrame",
    tn.Unknown = "Unknown";
    var on, an, cn, hn, fn = "_fs_dwell_passed", vn = "__wayfinder", ln = "__wayfinder_style_v1", dn = "_fs_loaded", pn = "_fs_namespace", wn = "FS";
    function gn(t) {
        return t[pn] || wn
    }
    function mn(t, n) {
        return void 0 === n && (n = gn(t)),
        t[n]
    }
    function yn(t) {
        return "localhost" == t || "127.0.0.1" == t
    }
    (an = on || (on = {})).Consent = "consent",
    an.Log = "log",
    an.Record = "rec",
    (hn = cn || (cn = {})).Event = "event",
    hn.Page = "page",
    hn.Vars = "setVars",
    hn.User = "user";
    var bn = /^([^.]+\.)*(fullstory|onfire).[^.]+(\/|$)/;
    function Sn(t) {
        return An(t, "rs", "rs-2")
    }
    function kn(t) {
        return An(t, "edge")
    }
    var _n = ["rs", "rs-2", "edge", "www", "app"];
    function An(t) {
        for (var n = [], i = 1; i < arguments.length; i++)
            n[i - 1] = arguments[i];
        if (!t)
            return t;
        if (!bn.test(t))
            return t;
        if (n.some(function(n) {
            return 0 === t.lastIndexOf("".concat(n, "."), 0)
        }))
            return t;
        for (var r = n[0], e = 0, s = _n; e < s.length; e++) {
            var u = s[e];
            if (0 === t.lastIndexOf("".concat(u, "."), 0))
                return "".concat(r, ".").concat(t.slice("".concat(u, ".").length))
        }
        return "".concat(r, ".").concat(t)
    }
    function In(t) {
        return bn.test(t)
    }
    function En(t, n) {
        return n in t && "function" == typeof t[n]
    }
    function Tn(t, n, i) {
        void 0 === i && (i = "string");
        var r = t[n];
        if (typeof r === i)
            return r
    }
    function Cn(t) {
        return Tn(t, "_fs_script") || ai(ui(t))
    }
    function xn(t) {
        //CHANGE
        /*var n;
        return null !== (n = Tn(t, "_fs_rec_settings_host")) && void 0 !== n ? n : kn(ui(t))*/
        return Qs
    }
    function Rn(t) {
        return Tn(t, "_fs_rec_host") || Sn(ui(t))
    }
    function Kn(t) {
        return Tn(t, "_fs_app_host") || oi(ui(t))
    }
    function jn(t) {
        return Tn(t, "_fs_ext_org") || Tn(t, "_fs_org")
    }
    function Mn(t) {
        var n = Tn(t, "_fs_capture_on_startup", "boolean")
          , i = Tn(t, "_fs_capture_on_start", "boolean");
        return void 0 === n ? void 0 === i || !i : n
    }
    function Pn(t) {
        return Tn(t, "_fs_asset_map_id")
    }
    function On(t) {
        return Tn(t, "_fs_cookie_domain")
    }
    function Nn(t) {
        return Tn(t, "_fs_ready", "function")
    }
    function Ln(t) {
        return !!Tn(t, "_fs_run_in_iframe", "boolean")
    }
    function Un(t) {
        return !!Tn(t, "_fs_is_outer_script", "boolean")
    }
    function Fn(t) {
        return Tn(t, "_fs_replay_flags")
    }
    function Bn(t) {
        return Tn(t, "_fs_transport", "object")
    }
    function Dn(t) {
        return Tn(t, "_fs_pagestart", "function")
    }
    function Hn(t) {
        return !!Tn(t, "_fs_use_socket", "boolean")
    }
    function Wn(t) {
        return !!Tn(t, "_fs_use_mock_protocol", "boolean")
    }
    function zn(t) {
        return !!Tn(t, "_fs_use_polyfilled_apis", "boolean")
    }
    function qn(t) {
        return !!Tn(t, "_fs_force_local_resources", "boolean")
    }
    function Vn(t) {
        return Tn(t, "_fs_request", "function")
    }
    function $n(t) {
        return Tn(t, "_fs_beacon", "function")
    }
    function Gn(t) {
        return Tn(t, "_fs_settings", "object")
    }
    function Qn(t) {
        return Tn(t, "_fs_clientstore", "object")
    }
    function Xn(t) {
        return Tn(t, "_fs_multistorage", "object")
    }
    function Yn(t) {
        return Tn(t, "_fs_is_wayfinder", "boolean")
    }
    function Jn(t) {
        return Tn(t, "_fs_disable_resume", "boolean")
    }
    function Zn(t) {
        return !!Tn(t, "_fs_skip_iframe_injection", "boolean")
    }
    function ti(t) {
        return !!Tn(t, "_fs_clean_value_getter", "boolean")
    }
    function ni(t) {
        return Tn(t, "_fs_network_budget", "number")
    }
    function ii(t) {
        var n, i = t._fs_prehooks;
        if ((n = i)instanceof WeakMap || n && En(n, "get") && En(n, "set") && En(n, "has") && En(n, "delete"))
            return i
    }
    function ri(t, n) {
        var i = mn(t, n);
        if (!i)
            return [];
        var r = i.q;
        return r ? (delete i.q,
        r) : []
    }
    function ei(t, n, i) {
        var r = mn(t, i);
        if (r) {
            var e = r.q;
            e || (e = r.q = []),
            e.push(n)
        }
    }
    function si(t, n) {
        var i = mn(t, n);
        return (null == i ? void 0 : i._v) || "unknown"
    }
    function ui(t) {
        var n = Tn(t, "_fs_ext_host") || Tn(t, "_fs_host");
        if (n) {
            var i = function(t) {
                var n, i, r = null !== (i = null === (n = jn(t)) || void 0 === n ? void 0 : n.split("-")) && void 0 !== i ? i : [];
                if (!(r.length < 3)) {
                    var e = r[0]
                      , s = r[r.length - 1];
                    if (!("na1" === s || e.length > 1))
                        return s
                }
            }(t);
            if (!i || !In(n))
                return n;
            var r = "";
            return 0 === n.indexOf("www.") && (n = n.slice(4),
            r = "www."),
            0 === n.indexOf("".concat(i, ".")) && (n = n.slice("".concat(i, ".").length)),
            "".concat(r).concat(i, ".").concat(n)
        }
    }
    function oi(t) {
        return t ? yn(function(t) {
            var n = t
              , i = n.indexOf(":");
            return i >= 0 && (n = n.slice(0, i)),
            n
        }(t)) ? t : 0 == t.indexOf("www.") ? "app.".concat(t.slice(4)) : "app.".concat(t) : t
    }
    function ai(t) {
        var n = kn(t);
        if (n)
            return "".concat(n, "/s/fs.js")
    }
    function ci(t, n) {
        var i;
        if (void 0 === n && (n = 0),
        !t)
            return !1;
        try {
            t.call(function() {})
        } catch (t) {
            return !1
        }
        var r = function(t) {
            try {
                return void t.call(null)
            } catch (t) {
                return (t.stack || "").replace(/__fs_nomangle_check_stack(.|\n)*$/, "")
            }
        }
          , e = void 0;
        0 !== n && "number" == typeof Error.stackTraceLimit && (e = Error.stackTraceLimit,
        Error.stackTraceLimit = Number.POSITIVE_INFINITY);
        var s = [function() {
            throw new Error("")
        }
        , t]
          , u = function __fs_nomangle_check_stack() {
            return s.map(r)
        }()
          , o = u[0]
          , a = u[1];
        if (void 0 !== e && (Error.stackTraceLimit = e),
        !o || !a)
            return !1;
        for (var c = "\n".charCodeAt(0), h = o.length > a.length ? a.length : o.length, f = 1, v = f; v < h; v++) {
            var l = o.charCodeAt(o.length - v)
              , d = a.charCodeAt(a.length - v);
            if (l != d)
                break;
            d != c && v != h - 1 || (f = v)
        }
        return (null !== (i = a.slice(0, a.length - f + 1).match(/\.js:\d+([:)]|$)/gm)) && void 0 !== i ? i : []).length <= n
    }
    var hi = "[native code]";
    function fi(t, n) {
        try {
            return t.call(n).indexOf(hi) >= 0
        } catch (t) {
            return !1
        }
    }
    var vi = "__zone_symbol__OriginalDelegate"
      , li = [vi, "nr@original"];
    function di(t, n) {
        return pi(t, n)[0]
    }
    function pi(t, n, i) {
        void 0 === i && (i = !1);
        var r = [];
        if (!n)
            return [void 0, r];
        for (var e = 0, s = li; e < s.length; e++) {
            var u = n[s[e]];
            if ((Hi(u) || i && zi(u)) && (r.push(u),
            fi(t, u)))
                return [u, r]
        }
        return fi(t, n) ? [n, r] : [void 0, r]
    }
    function wi(t, n, i) {
        if ("arrayIsArray" === i) {
            var r = di(t, n.objectToString);
            if (!r)
                return;
            return n.objectToString = r,
            function(t) {
                return "[object Array]" == r.call(t)
            }
        }
    }
    var gi, mi, yi = function(t) {
        var n, i;
        void 0 === t && (t = window);
        try {
            if (n = null == (i = t.MutationObserver) ? void 0 : i.prototype.constructor,
            zn(t))
                return i;
            var r = S
              , e = pi(Function.prototype.toString, n, r)
              , s = e[0]
              , u = e[1];
            if (s)
                return s;
            var o = pi(Function.prototype.toString, i, r)
              , a = o[0]
              , c = o[1];
            return a || (S || $ || 0 !== u.length || 0 !== c.length || ju("fallback MO"),
            u[0] || c[0] || n || i)
        } catch (t) {
            return n || i || void 0
        }
    }();
    (mi = gi || (gi = {}))[mi.Unknown = 0] = "Unknown",
    mi[mi.Clean = 1] = "Clean",
    mi[mi.Mixed = 2] = "Mixed",
    mi[mi.UnrecoverableFailure = 3] = "UnrecoverableFailure";
    var bi = new (function() {
        function t(t) {
            this.rebuildFromSnapshot(t)
        }
        return t.prototype.rebuildFromSnapshot = function(t) {
            var n = this.snapshot;
            if (this.snapshot = t,
            !n || n.functions !== t.functions) {
                var i = t.functions;
                this.arrayIsArray = i.arrayIsArray,
                this.clearWindowInterval = ki(i.clearWindowInterval),
                this.clearWindowTimeout = ki(i.clearWindowTimeout),
                this.dateGetTime = ki(i.dateGetTime),
                this.dateNow = i.dateNow,
                this.docFragQuerySelectorAll = ki(i.docFragQuerySelectorAll),
                this.docQuerySelectorAll = ki(i.docQuerySelectorAll),
                this.elMatches = ki(i.elMatches),
                this.elQuerySelectorAll = ki(i.elQuerySelectorAll),
                this.jsonParse = i.jsonParse,
                this.jsonStringify = i.jsonStringify,
                this.matchMedia = _i(i.matchMedia),
                this.mathAbs = i.mathAbs,
                this.mathFloor = i.mathFloor,
                this.mathMax = i.mathMax,
                this.mathMin = i.mathMin,
                this.mathPow = i.mathPow,
                this.mathRandom = i.mathRandom,
                this.mathRound = i.mathRound,
                this.objectHasOwnProp = ki(i.objectHasOwnProp),
                this.objectKeys = i.objectKeys,
                this.objectValues = i.objectValues || null,
                this.requestWindowAnimationFrame = _i(i.requestWindowAnimationFrame),
                this.requestWindowIdleCallback = _i(i.requestWindowIdleCallback),
                this.setWindowInterval = ki(i.setWindowInterval),
                this.setWindowTimeout = ki(i.setWindowTimeout),
                this.inputGetValue = _i(i.inputGetValue),
                this.mutationObserve = _i(i.mutationObserve),
                this.mutationDisconnect = _i(i.mutationDisconnect),
                this.snapshot.dirty = t.dirty
            }
        }
        ,
        t
    }())(Si(window));
    function Si(t, n) {
        void 0 === n && (n = gi.Unknown);
        var i = n
          , r = []
          , e = function(t) {
            return i = gi.UnrecoverableFailure,
            r.push("Snapshot failed: ".concat(t)),
            function() {
                throw new Error("Invoked failed snapshot")
            }
        }
          , s = function(t) {
            try {
                return t()
            } catch (t) {
                return e(t.message)
            }
        }
          , u = function(t) {
            try {
                return t() || e("snapshot not found")
            } catch (t) {
                return e(t.message)
            }
        }
          , o = {
            arrayIsArray: s(function() {
                return t.Array.isArray
            }),
            clearWindowInterval: s(function() {
                return t.clearInterval
            }),
            clearWindowTimeout: s(function() {
                return t.clearTimeout
            }),
            dateGetTime: s(function() {
                return t.Date.prototype.getTime
            }),
            dateNow: s(function() {
                return t.Date.now
            }),
            docFragQuerySelectorAll: u(function() {
                var n;
                return null === (n = t.DocumentFragment) || void 0 === n ? void 0 : n.prototype.querySelectorAll
            }),
            docQuerySelectorAll: u(function() {
                var n;
                return null !== (n = t.Document.prototype.querySelectorAll) && void 0 !== n ? n : t.document.querySelectorAll
            }),
            elMatches: u(function() {
                return Ei(t, Ai)
            }),
            elQuerySelectorAll: u(function() {
                return Ei(t, Ii)
            }),
            jsonParse: s(function() {
                return t.JSON.parse
            }),
            jsonStringify: s(function() {
                return t.JSON.stringify
            }),
            matchMedia: s(function() {
                return t.matchMedia
            }),
            mathAbs: s(function() {
                return t.Math.abs
            }),
            mathFloor: s(function() {
                return t.Math.floor
            }),
            mathMax: s(function() {
                return t.Math.max
            }),
            mathMin: s(function() {
                return t.Math.min
            }),
            mathPow: s(function() {
                return t.Math.pow
            }),
            mathRandom: s(function() {
                return t.Math.random
            }),
            mathRound: s(function() {
                return t.Math.round
            }),
            objectHasOwnProp: s(function() {
                return t.Object.prototype.hasOwnProperty
            }),
            objectKeys: s(function() {
                return t.Object.keys
            }),
            objectValues: s(function() {
                return t.Object.values
            }),
            requestWindowAnimationFrame: s(function() {
                return t.requestAnimationFrame
            }),
            requestWindowIdleCallback: s(function() {
                return t.requestIdleCallback
            }),
            setWindowInterval: s(function() {
                return t.setInterval
            }),
            setWindowTimeout: s(function() {
                return t.setTimeout
            }),
            mutationObserve: s(function() {
                var n;
                return null === (n = t.MutationObserver) || void 0 === n ? void 0 : n.prototype.observe
            }),
            mutationDisconnect: s(function() {
                var n;
                return null === (n = t.MutationObserver) || void 0 === n ? void 0 : n.prototype.disconnect
            }),
            inputGetValue: s(function() {
                var n;
                return t.HTMLInputElement && (null === (n = Object.getOwnPropertyDescriptor(t.HTMLInputElement.prototype, "value")) || void 0 === n ? void 0 : n.get)
            })
        }
          , a = {
            functionToString: s(function() {
                return t.Function.prototype.toString
            }),
            objectToString: s(function() {
                return t.Object.prototype.toString
            })
        };
        return {
            status: i,
            functions: o,
            helpers: a,
            errors: r
        }
    }
    function ki(t) {
        return function(n) {
            for (var i = [], r = 1; r < arguments.length; r++)
                i[r - 1] = arguments[r];
            return t.apply(n, i)
        }
    }
    function _i(t) {
        return t ? ki(t) : null
    }
    function Ai(t) {
        return t.matches || t.webkitMatchesSelector || t.msMatchesSelector || t.mozMatchesSelector
    }
    function Ii(t) {
        return t.querySelectorAll
    }
    function Ei(t, n) {
        var i, r, e = (null === (i = t.Element) || void 0 === i ? void 0 : i.prototype) ? n(null === (r = t.Element) || void 0 === r ? void 0 : r.prototype) : void 0, s = t.document ? t.document.documentElement : void 0;
        if (!s || e && s instanceof t.Element || (e = n(s)),
        !e)
            throw new Error("Unable to find Element proto function");
        return e
    }
    function Ti(t, n) {
        return function() {
            for (var i = [], r = 0; r < arguments.length; r++)
                i[r] = arguments[r];
            try {
                return t.apply(this, i)
            } catch (t) {
                try {
                    n && n(t)
                } catch (t) {}
            }
        }
    }
    var Ci = function() {}
      , xi = 1
      , Ri = 9
      , Ki = 4;
    function ji(t) {
        try {
            var n = function(t) {
                var n, i = null !== (n = t.ownerDocument) && void 0 !== n ? n : t;
                return i.nodeType === Ri ? i : document
            }(t);
            Ru(n.nodeType === Ri, "treeWalker#document");
            var i = n.createTreeWalker(n, NodeFilter.SHOW_ALL, null, !1);
            return i.currentNode = t,
            i
        } catch (t) {
            return
        }
    }
    function Mi(t, n) {
        var i = ji(t);
        if (i)
            for (var r = i.firstChild(); r; )
                n(r),
                r = i.nextSibling()
    }
    function Pi(t, n) {
        var i = ji(t);
        if (i)
            for (var r = i.lastChild(); r; )
                n(r),
                r = i.previousSibling()
    }
    function Oi(t) {
        var n = ji(t);
        return n ? n.nextSibling() : null
    }
    function Ni(t) {
        var n = ji(t);
        return n ? n.previousSibling() : null
    }
    function Li(t) {
        var n = ji(t);
        return n ? n.parentNode() : null
    }
    function Ui(t) {
        var n = ji(t);
        return n ? n.firstChild() : null
    }
    function Fi(t) {
        return !!Ui(t)
    }
    function Bi(t) {
        return bi.arrayIsArray(t)
    }
    function Di(t, n) {
        for (var i = 0, r = t; i < r.length; i++)
            if (n(r[i]))
                return !0;
        return !1
    }
    function Hi(t) {
        return "function" == typeof t
    }
    function Wi(t) {
        var n = parseInt(null != t ? t : "", 10);
        return isNaN(n) ? void 0 : n
    }
    function zi(t) {
        return null !== t && "object" == typeof t
    }
    function qi(t) {
        return zi(t) && !Bi(t) && t.constructor !== Date
    }
    function Vi(t) {
        if (null != t) {
            var n = $i(t) ? t : new Date(t);
            try {
                return n.toISOString()
            } catch (n) {
                if ("string" == typeof t)
                    return t
            }
        }
        return null
    }
    function $i(t) {
        return null != t && t.constructor === Date
    }
    function Gi(t) {
        return "string" == typeof t
    }
    var Qi = "function" == typeof bi.objectKeys ? function(t) {
        return bi.objectKeys(t)
    }
    : function(t) {
        var n = [];
        for (var i in t)
            bi.objectHasOwnProp(t, i) && n.push(i);
        return n
    }
    ;
    function Xi(t, n) {
        return 0 == t.lastIndexOf(n, 0)
    }
    function Yi(t, n) {
        for (var i in t)
            bi.objectHasOwnProp(t, i) && n(t[i], i, t)
    }
    function Ji(t) {
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n))
                return t[n]
    }
    function Zi(t, n) {
        var i = 0;
        for (var r in t)
            if (Object.prototype.hasOwnProperty.call(t, r) && ++i > n)
                return !1;
        return i == n
    }
    function tr(t, n) {
        var i = 0;
        for (var r in t)
            if (Object.prototype.hasOwnProperty.call(t, r) && ++i > n)
                return !0;
        return !1
    }
    function nr(t) {
        return function() {
            for (var n, i, r = this, e = [], s = 0; s < arguments.length; s++)
                e[s] = arguments[s];
            return "function" == typeof (null === (i = null === (n = window.Zone) || void 0 === n ? void 0 : n.root) || void 0 === i ? void 0 : i.run) ? window.Zone.root.run(function() {
                return t.apply(r, e)
            }) : t.apply(this, e)
        }
    }
    function ir(t, n, i) {
        if (void 0 === i && (i = nr),
        !t)
            return Ci;
        var r = i(t);
        return Ti(n ? r.bind(n) : r, function(t) {
            "Unexpected error: ".concat(t)
        })
    }
    function rr(t) {
        var n = t.doctype;
        if (!n)
            return "";
        var i = "<!DOCTYPE ";
        return i += n.name,
        n.publicId && (i += " PUBLIC \"".concat(n.publicId, "\"")),
        n.systemId && (i += " \"".concat(n.systemId, "\"")),
        "".concat(i, ">")
    }
    function er(t) {
        return bi.jsonParse(t)
    }
    function sr(t, n, i) {
        return ur(null == t ? void 0 : t.prototype, n, i)
    }
    function ur(t, n, r) {
        if (!t)
            return function() {}
            ;
        var e = Object.getOwnPropertyDescriptor(t, n);
        if (!e || !e.set)
            return function() {}
            ;
        var s = e.set
          , u = ir(r)
          , o = !0;
        function a(t) {
            s.call(this, t),
            o && u(this, t)
        }
        return Object.defineProperty(t, n, i(i({}, e), {
            set: a
        })),
        function() {
            o = !1;
            var r = Object.getOwnPropertyDescriptor(t, n);
            r && a === r.set && Object.defineProperty(t, n, i(i({}, r), {
                set: s
            }))
        }
    }
    function or(t) {
        var n = t.navigator.languages;
        return n && Bi(n) ? n.join(",") : t.navigator.userLanguage || t.navigator.language
    }
    function ar(t) {
        if (!t)
            return !1;
        var n = t.isConnected;
        return "boolean" == typeof n ? n : function(t) {
            for (var n = t, i = void 0; n; n = i)
                if (!(i = Li(n)))
                    return n;
            return t
        }(t).nodeType === Ri
    }
    function cr(t, n) {
        void 0 === t && (t = []),
        void 0 === n && (n = 0);
        for (var i = "", r = 0, e = t; r < e.length; r++) {
            var s = e[r];
            i += "/".concat(s)
        }
        return "".concat(i, "/").concat(n)
    }
    function hr() {
        var t = function() {
            return bi.dateNow()
        };
        return "number" != typeof t() && (t = function() {
            return bi.dateGetTime(new Date)
        }
        ),
        t
    }
    var fr, vr, lr, dr = (vr = hr(),
    lr = null !== (fr = function() {
        var t;
        if (function() {
            var t = window.performance;
            return !(!t || !t.now)
        }()) {
            var n = window.performance
              , i = n.now();
            if ("number" == typeof i && isFinite(i) && !(i <= 0)) {
                var r = n.timeOrigin;
                if ("number" != typeof r) {
                    var e = hr()() - n.now()
                      , s = null === (t = n.timing) || void 0 === t ? void 0 : t.navigationStart;
                    r = s ? Math.min(e, s) : e
                }
                var u = Math.round(r);
                if ("number" == typeof u && isFinite(u) && !(u <= 0))
                    return u
            }
        }
    }()) && void 0 !== fr ? fr : vr(),
    {
        now: vr,
        timeOrigin: lr,
        msSinceDocumentStart: function() {
            return vr() - lr
        }
    });
    function pr() {
        return dr.now()
    }
    function wr() {
        return dr.msSinceDocumentStart()
    }
    var gr = ["", "0", "1", "-1", "true", "false", "n/a", "nan", "undefined", "null", "nil", "the_id_that_you_use_in_your_app_for_this_user"]
      , mr = ["811c9dc5", "350ca8af", "340ca71c", "14cd0a2b", "4db211e5", "0b069958", "3613e041", "2f8f13ba", "9b61ad43", "77074ba4", "0da3f8ec", "1c750511"]
      , yr = function() {
        return bi.mathFloor(pr() / 1e3)
    }
      , br = function() {
        return yr() + 31536e3
    };
    function Sr(t) {
        if (!t)
            return null;
        var n, i = t.split("#");
        if (i.length < 3)
            return null;
        for (var r = 2; r < i.length; r++) {
            var e = i[r];
            if (e.indexOf("/") >= 0) {
                var s = e.split("/")
                  , u = s[0]
                  , o = s[1];
                i[r] = u,
                n = o;
                break
            }
        }
        var a = function(t) {
            var n = parseInt(null != t ? t : "", 10)
              , i = yr()
              , r = br() + 86400;
            return isNaN(n) ? r : n <= i ? void 0 : n > r ? r : n
        }(n);
        if (!a)
            return null;
        i[0];
        var c = i[1]
          , h = i[2]
          , f = i[3]
          , v = "";
        f && (v = decodeURIComponent(f),
        (gr.indexOf(v) >= 0 || mr.indexOf(v) >= 0) && ("Ignoring invalid app key \"".concat(v, "\" from cookie."),
        v = ""));
        var l = (null != h ? h : "").split(":")
          , d = l[0]
          , p = l[1]
          , w = l[2];
        return l[3],
        {
            appKeyHash: v,
            expirationAbsTimeSeconds: a,
            userId: d,
            orgId: c,
            pageCount: Wi(l[4]),
            sessionId: null != p ? p : "",
            sessionStartTime: Wi(w)
        }
    }
    function kr(t) {
        var n = {};
        try {
            for (var i = t.cookie.split(";"), r = 0; r < i.length; r++) {
                var e = i[r].replace(/^\s+|\s+$/g, "").split("=");
                n[e[0]] || (n[e[0]] = e[1])
            }
        } catch (t) {
            "Exception trying to parse cookies: ".concat(t)
        }
        return n
    }
    var _r = function(t, n, i) {
        this.name = "ProtocolError",
        this.message = n,
        this.status = t,
        this.data = i
    };
    function Ar(t) {
        return t >= 400 && 502 !== t || 202 == t || 206 == t
    }
    function Ir(t) {
        return t instanceof _r && Ar(t.status)
    }
    function Er(t) {
        return "function" == typeof t
    }
    var Tr, Cr, xr, Rr, Kr, jr = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    , Mr = 0, Pr = function(t, n) {
        Or[Mr] = t,
        Or[Mr + 1] = n,
        2 === (Mr += 2) && Tr()
    }, Or = new Array(1e3);
    function Nr() {
        for (var t = 0; t < Mr; t += 2)
            (0,
            Or[t])(Or[t + 1]),
            Or[t] = void 0,
            Or[t + 1] = void 0;
        Mr = 0
    }
    function Lr(t, n) {
        var i = arguments
          , r = this
          , e = new this.constructor(Br);
        void 0 === e[Fr] && re(e);
        var s, u = r._;
        return u ? (s = i[u - 1],
        Pr(function() {
            return ne(u, e, s, r.A)
        })) : Yr(r, e, t, n),
        e
    }
    function Ur(t) {
        if (t && "object" == typeof t && t.constructor === this)
            return t;
        var n = new this(Br);
        return $r(n, t),
        n
    }
    window.MutationObserver ? (xr = 0,
    Rr = new MutationObserver(Nr),
    Kr = document.createTextNode(""),
    Rr.observe(Kr, {
        characterData: !0
    }),
    Tr = function() {
        var t = xr = ++xr % 2;
        Kr.data = "".concat(t)
    }
    ) : (Cr = setTimeout,
    Tr = function() {
        return Cr(Nr, 1)
    }
    );
    var Fr = Math.random().toString(36).substring(16);
    function Br() {}
    var Dr = void 0
      , Hr = 1
      , Wr = 2
      , zr = new Zr;
    function qr(t) {
        try {
            return t.then
        } catch (t) {
            return zr.error = t,
            zr
        }
    }
    function Vr(t, n, i) {
        n.constructor === t.constructor && i === Lr && n.constructor.resolve === Ur ? function(t, n) {
            n._ === Hr ? Qr(t, n.A) : n._ === Wr ? Xr(t, n.A) : Yr(n, void 0, function(n) {
                return $r(t, n)
            }, function(n) {
                return Xr(t, n)
            })
        }(t, n) : i === zr ? (Xr(t, zr.error),
        zr.error = null) : void 0 === i ? Qr(t, n) : Er(i) ? function(t, n, i) {
            Pr(function(t) {
                var r = !1
                  , e = function(i, e, s, u, o) {
                    try {
                        i.call(e, function(i) {
                            r || (r = !0,
                            n !== i ? $r(t, i) : Qr(t, i))
                        }, function(n) {
                            r || (r = !0,
                            Xr(t, n))
                        })
                    } catch (t) {
                        return t
                    }
                }(i, n, 0, 0, "Settle: ".concat(t.I || " unknown promise"));
                !r && e && (r = !0,
                Xr(t, e))
            }, t)
        }(t, n, i) : Qr(t, n)
    }
    function $r(t, n) {
        var i;
        t === n ? Xr(t, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof (i = n) || "object" == typeof i && null !== i ? Vr(t, n, qr(n)) : Qr(t, n)
    }
    function Gr(t) {
        t.T && t.T(t.A),
        Jr(t)
    }
    function Qr(t, n) {
        t._ === Dr && (t.A = n,
        t._ = Hr,
        0 !== t.C.length && Pr(Jr, t))
    }
    function Xr(t, n) {
        t._ === Dr && (t._ = Wr,
        t.A = n,
        Pr(Gr, t))
    }
    function Yr(t, n, i, r) {
        var e = t.C
          , s = e.length;
        t.T = null,
        e[s] = n,
        e[s + Hr] = i,
        e[s + Wr] = r,
        0 === s && t._ && Pr(Jr, t)
    }
    function Jr(t) {
        var n = t.C
          , i = t._;
        if (0 !== n.length) {
            for (var r, e, s = t.A, u = 0; u < n.length; u += 3)
                r = n[u],
                e = n[u + i],
                r ? ne(i, r, e, s) : e(s);
            t.C.length = 0
        }
    }
    function Zr() {
        this.error = null
    }
    var te = new Zr;
    function ne(t, n, i, r) {
        var e, s, u = Er(i), o = !1, a = !1;
        if (u) {
            if (e = function(t, n) {
                try {
                    return t(n)
                } catch (t) {
                    return te.error = t,
                    te
                }
            }(i, r),
            e === te ? (a = !0,
            s = e.error,
            e.error = null) : o = !0,
            n === e)
                return void Xr(n, new TypeError("A promises callback cannot return that same promise."))
        } else
            e = r,
            o = !0;
        n._ !== Dr || (u && o ? $r(n, e) : a ? Xr(n, s) : t === Hr ? Qr(n, e) : t === Wr && Xr(n, e))
    }
    var ie = 0;
    function re(t) {
        t[Fr] = ie++,
        t._ = void 0,
        t.A = void 0,
        t.C = []
    }
    function ee(t, n) {
        this.R = t,
        this.promise = new t(Br),
        this.promise[Fr] || re(this.promise),
        jr(n) ? (this.K = n,
        this.length = n.length,
        this.j = n.length,
        this.A = new Array(this.length),
        0 === this.length ? Qr(this.promise, this.A) : (this.length = this.length || 0,
        this.M(),
        0 === this.j && Qr(this.promise, this.A))) : Xr(this.promise, new Error("Array Methods must be provided an Array"))
    }
    ee.prototype.M = function() {
        for (var t = this.length, n = this.K, i = 0; this._ === Dr && i < t; i++)
            this.P(n[i], i)
    }
    ,
    ee.prototype.P = function(t, n) {
        var i = this.R
          , r = i.resolve;
        if (r === Ur) {
            var e = qr(t);
            if (e === Lr && t._ !== Dr)
                this.O(t._, n, t.A);
            else if ("function" != typeof e)
                this.j--,
                this.A[n] = t;
            else if (i === se) {
                var s = new i(Br);
                Vr(s, t, e),
                this.N(s, n)
            } else
                this.N(new i(function(n) {
                    return n(t)
                }
                ), n)
        } else
            this.N(r(t), n)
    }
    ,
    ee.prototype.O = function(t, n, i) {
        var r = this.promise;
        r._ === Dr && (this.j--,
        t === Wr ? Xr(r, i) : this.A[n] = i),
        0 === this.j && Qr(r, this.A)
    }
    ,
    ee.prototype.N = function(t, n) {
        var i = this;
        Yr(t, void 0, function(t) {
            return i.O(Hr, n, t)
        }, function(t) {
            return i.O(Wr, n, t)
        })
    }
    ;
    var se = function(t) {
        this[Fr] = ie++,
        this.A = this._ = void 0,
        this.C = [],
        Br !== t && ("function" != typeof t && function() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }(),
        this instanceof se ? function(t, n) {
            try {
                n(function(n) {
                    $r(t, n)
                }, function(n) {
                    Xr(t, n)
                })
            } catch (n) {
                Xr(t, n)
            }
        }(this, t) : function() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }())
    };
    se.all = function(t) {
        return new ee(this,t).promise
    }
    ,
    se.race = function(t) {
        var n = this;
        return jr(t) ? new n(function(i, r) {
            for (var e = t.length, s = 0; s < e; s++)
                n.resolve(t[s]).then(i, r)
        }
        ) : new n(function(t, n) {
            return n(new TypeError("You must pass an array to race."))
        }
        )
    }
    ,
    se.resolve = Ur,
    se.reject = function(t) {
        var n = new this(Br);
        return Xr(n, t),
        n
    }
    ,
    se.L = function(t) {
        Pr = t
    }
    ,
    se.U = Pr,
    se.prototype = {
        constructor: se,
        then: Lr,
        "catch": function(t) {
            return this.then(null, t)
        }
    };
    var ue = "boolean" == typeof window._fs_use_polyfilled_promise && window._fs_use_polyfilled_promise
      , oe = "function" == typeof window.Promise ? window.Promise : se
      , ae = ue ? se : oe;
    function ce() {
        var t, n;
        return {
            promise: new ae(function(i, r) {
                t = i,
                n = r
            }
            ),
            resolve: t,
            reject: n
        }
    }
    function he(t) {
        return new ae(function(n) {
            bi.setWindowTimeout(window, Ti(n), t)
        }
        )
    }
    function fe(t) {
        for (var n = t.reduce(function(t, n) {
            return t + n.byteLength
        }, 0), i = new ArrayBuffer(n), r = new Uint8Array(i), e = 0, s = 0, u = t; s < u.length; s++) {
            var o = u[s];
            r.set(o, e),
            e += o.byteLength
        }
        return i
    }
    function ve(t) {
        if (Hi(t.arrayBuffer))
            return t.arrayBuffer();
        var n = ce()
          , i = n.resolve
          , r = n.promise
          , e = new FileReader;
        return e.readAsArrayBuffer(t),
        e.onload = function() {
            i(e.result)
        }
        ,
        e.onerror = function(t) {
            ju("blob to AB", {
                err: t
            }),
            i(null)
        }
        ,
        r
    }
    function le(t, n) {
        var i;
        return void 0 === n && (n = -1),
        r(this, void 0, void 0, function() {
            var r, s, u, o, a;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    r = [],
                    s = 0,
                    e.label = 1;
                case 1:
                    return [4, t.read()];
                case 2:
                    return u = e.sent(),
                    o = u.value,
                    a = u.done,
                    s += null !== (i = null == o ? void 0 : o.length) && void 0 !== i ? i : 0,
                    n > -1 && s > n && o ? (r.push(o.slice(0, o.length - (s - n))),
                    t.cancel()["catch"](function(t) {}),
                    [2, r]) : a ? [2, r] : (void 0 !== o && r.push(o),
                    [3, 1]);
                case 3:
                    return [2]
                }
            })
        })
    }
    var de = function(t) {
        return r(void 0, void 0, ae, function() {
            return e(this, function(n) {
                switch (n.label) {
                case 0:
                    return [4, le(t)];
                case 1:
                    return [2, fe(n.sent())]
                }
            })
        })
    };
    function pe() {
        return r(this, void 0, ae, function() {
            var t, n, i, r;
            return e(this, function(e) {
                return t = new TextEncoderStream,
                n = new CompressionStream("gzip"),
                t.readable.pipeThrough(n),
                i = t.writable.getWriter(),
                r = n.readable.getReader(),
                [2, [{
                    write: function(t) {
                        return i.ready.then(function() {
                            return i.write(t)
                        })
                    },
                    finalize: function() {
                        return i.ready.then(function() {
                            return i.close()
                        })
                    },
                    onError: function() {
                        i.abort()["catch"](function(t) {}),
                        r.cancel()["catch"](function(t) {})
                    }
                }, de(r)]]
            })
        })
    }
    function we(t) {
        return r(this, void 0, ae, function() {
            var n, i, r, s;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 5, , 6]),
                    [4, pe()];
                case 1:
                    return s = e.sent(),
                    n = s[0],
                    i = s[1],
                    [4, n.write(t)];
                case 2:
                    return e.sent(),
                    [4, n.finalize()];
                case 3:
                    return e.sent(),
                    [4, i];
                case 4:
                    return [2, [e.sent(), null]];
                case 5:
                    return r = e.sent(),
                    null == n || n.onError(),
                    [2, [null, r]];
                case 6:
                    return [2]
                }
            })
        })
    }
    function ge() {
        return r(this, void 0, ae, function() {
            return e(this, function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]),
                    [4, we("fullstory")];
                case 1:
                    return [2, null != t.sent()[0]];
                case 2:
                    return t.sent(),
                    [3, 3];
                case 3:
                    return [2, !1]
                }
            })
        })
    }
    var me = new ae(function(t) {
        r(void 0, void 0, ae, function() {
            var n;
            return e(this, function(i) {
                switch (i.label) {
                case 0:
                    return i.trys.push([0, 2, , 3]),
                    [4, ae.race([ge(), he(500).then(function() {
                        return !1
                    })])];
                case 1:
                    return n = i.sent(),
                    t(n),
                    [3, 3];
                case 2:
                    return i.sent(),
                    t(!1),
                    [3, 3];
                case 3:
                    return [2]
                }
            })
        })
    }
    )
      , ye = function() {
        var t = function() {
            try {
                var t = new MessageChannel;
                return t.port1.start(),
                t
            } catch (t) {
                return null
            }
        }();
        return t ? new ae(function(n) {
            var i = t.port1
              , r = t.port2
              , e = function() {
                n(),
                i.removeEventListener("message", e),
                i.close()
            };
            i.addEventListener("message", e),
            r.postMessage(void 0),
            r.close()
        }
        ) : he(0)
    }
      , be = function() {
        return r(void 0, void 0, ae, function() {
            var t;
            return e(this, function(n) {
                switch (n.label) {
                case 0:
                    return (t = bi.requestWindowAnimationFrame) ? [4, new ae(function(n) {
                        return t(window, n)
                    }
                    )] : [3, 2];
                case 1:
                    n.sent(),
                    n.label = 2;
                case 2:
                    return [4, ye()];
                case 3:
                    return n.sent(),
                    [2]
                }
            })
        })
    };
    function Se(t) {
        void 0 === t && (t = 16);
        var n = pr() + t;
        return {
            timeRemaining: function() {
                return Math.max(0, n - pr())
            },
            didTimeout: !1
        }
    }
    function ke(t, n) {
        return r(this, void 0, ae, function() {
            var i, r, s, u;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    return (i = t.ResizeObserver) ? (r = t.document,
                    s = r.documentElement || r.body || r.head,
                    u = null != n ? n : s,
                    [2, new ae(function(t) {
                        var n = new i(function() {
                            be().then(function() {
                                n.unobserve(u),
                                t()
                            })
                        }
                        );
                        n.observe(u)
                    }
                    )]) : [4, be()];
                case 1:
                    return e.sent(),
                    [2]
                }
            })
        })
    }
    function _e(t, n) {
        throw void 0 === n && (n = "Reached unexpected case in exhaustive switch"),
        new Error(n)
    }
    var Ae = function(t) {
        for (var n = [], i = 0, r = t; i < r.length; i++) {
            var e = r[i]
              , s = {
                Exclude: Ie(e.Exclude)
            };
            if (e.If) {
                s.If = [];
                for (var u = 0, o = e.If; u < o.length; u++) {
                    var a = o[u];
                    s.If.push(Ie(a, !0))
                }
            }
            n.push(s)
        }
        return n
    };
    function Ie(t, n) {
        return void 0 === n && (n = !1),
        {
            Hash: Te(t.Hash, n),
            Host: Te(t.Host, n),
            Path: Te(t.Path, n),
            QueryParam: Te(t.QueryParam, n),
            Query: Te(t.Query, n)
        }
    }
    var Ee = "ig";
    function Te(t, n) {
        return t ? n ? [new RegExp(t.map(function(t) {
            return t.Expression
        }).join("|"),Ee)] : t.map(function(t) {
            return new RegExp(t.Expression,Ee)
        }) : []
    }
    var Ce = "--blocked--"
      , xe = function(t, n, i, r) {
        if (void 0 === i && (i = Ce),
        !n || 0 === t.length)
            return n;
        for (var e = [], s = 0, u = t; s < u.length; s++)
            for (var o = u[s], a = 0, c = Re(o, n, r); a < c.length; a++) {
                var h = c[a];
                e.push(h)
            }
        if (0 === e.length)
            return n;
        for (var f = "", v = 0, l = 0, d = e = Ke(e); l < d.length; l++) {
            var p = d[l]
              , w = p[0]
              , g = p[1];
            f += "".concat(n.substring(v, w)).concat(i),
            v = g
        }
        return f + n.slice(v)
    }
      , Re = function(t, n, i) {
        var r, e = [];
        for (t.lastIndex = 0; null !== (r = t.exec(n)); )
            if (r) {
                if ("" === r[0])
                    return ".*" !== t.source && i && i("scrub: infinite loop", {
                        re: t.source
                    }),
                    [[0, n.length]];
                if (1 !== r.length)
                    for (var s = r.index, u = 0, o = 1; o < r.length; o++) {
                        var a = r[o];
                        if (a && 0 !== a.length)
                            if (o % 2 != 1) {
                                var c = s + u
                                  , h = c + a.length;
                                e.push([c, h]),
                                u += a.length
                            } else
                                u += a.length
                    }
                else
                    e.push([r.index, t.lastIndex])
            }
        return e
    }
      , Ke = function(t) {
        if (t.length <= 1)
            return t;
        t.sort(function(t, n) {
            return t[0] - n[0]
        });
        for (var n = [], i = t[0], r = 1; r < t.length; r++) {
            var e = t[r];
            i[1] <= e[0] ? (n.push(i),
            i = e) : i[1] < e[1] && (i[1] = e[1])
        }
        return n.push(i),
        n
    }
      , je = {}
      , Me = "__default";
    function Pe(t) {
        void 0 === t && (t = Me);
        var n = je[t];
        return n || (n = function() {
            var t = document.implementation.createHTMLDocument("");
            return t.head || t.documentElement.appendChild(t.createElement("head")),
            t.body || t.documentElement.appendChild(t.createElement("body")),
            t
        }(),
        t !== Me && (n.open(),
        n.write(t),
        n.close()),
        je[t] = n),
        n
    }
    var Oe = new (function() {
        function t() {
            var t = Pe()
              , n = t.getElementById("urlresolver-base");
            n || ((n = t.createElement("base")).id = "urlresolver-base",
            t.head.appendChild(n));
            var i = t.getElementById("urlresolver-parser");
            i || ((i = t.createElement("a")).id = "urlresolver-parser",
            t.head.appendChild(i)),
            this.base = n,
            this.parser = i
        }
        return t.prototype.parseUrl = function(t, n) {
            var i = t;
            if ("undefined" != typeof URL)
                try {
                    i || (i = document.baseURI);
                    var r = i ? new URL(n,i) : new URL(n);
                    if (r.href)
                        return r
                } catch (t) {}
            return this.parseUrlUsingBaseAndAnchor(i, n)
        }
        ,
        t.prototype.parseUrlUsingBaseAndAnchor = function(t, n) {
            this.base.setAttribute("href", t),
            this.parser.setAttribute("href", n);
            var i = document.createElement("a");
            return i.href = this.parser.href,
            i
        }
        ,
        t.prototype.resolveUrl = function(t, n) {
            return this.parseUrl(t, n).href
        }
        ,
        t.prototype.resolveToDocument = function(t, n) {
            var i = Le(t);
            return null == i ? n : this.resolveUrl(i, n)
        }
        ,
        t
    }());
    function Ne(t, n) {
        return Oe.parseUrl(t, n)
    }
    function Le(t) {
        var n = t.document
          , i = t.location.href;
        if ("string" == typeof n.baseURI)
            i = n.baseURI;
        else {
            var r = n.getElementsByTagName("base")[0];
            r && r.href && (i = r.href)
        }
        return "about:blank" == i && t.parent != t ? Le(t.parent) : i
    }
    var Ue = function(t, n, i, r) {
        void 0 === i && (i = Ce);
        for (var e, s, u = Ne("", n), o = {
            Hash: [],
            Host: [],
            Path: [],
            QueryParam: [],
            Query: []
        }, a = 0, c = t; a < c.length; a++) {
            var h = c[a];
            De(h.If, u) && We(o, h.Exclude)
        }
        if (u.host) {
            var f = xe(o.Host, u.host, i, r);
            u.host = f,
            u.port && (e = f,
            s = u.port,
            e.substring(e.length - s.length) !== s) && (u.port = "")
        }
        if (u.pathname = xe(o.Path, ze(u.pathname, u.host), i),
        u.hash && (u.hash = xe(o.Hash, u.hash, i)),
        u.search) {
            var v = Be(o.QueryParam, u.search, i);
            u.search = xe(o.Query, v, i)
        }
        return u.href
    }
      , Fe = function(t, n) {
        if (0 === t.length || !n)
            return !0;
        for (var i = 0, r = n.split("?"); i < r.length; i++)
            for (var e = 0, s = r[i].replace("?", "").split("&"); e < s.length; e++) {
                var u = s[e];
                if (He(t, u))
                    return !0
            }
        return !1
    }
      , Be = function(t, n, i) {
        return void 0 === i && (i = Ce),
        n.split("?").map(function(n) {
            return n.replace("?", "").split("&").map(function(n) {
                return xe(t, n, i)
            }).join("&")
        }).join("?")
    }
      , De = function(t, n) {
        if (!t)
            return !0;
        for (var i = ze(n.pathname, n.host), r = 0, e = t; r < e.length; r++) {
            var s = e[r];
            if (He(s.Hash, n.hash) && He(s.Host, n.host) && He(s.Path, i) && Fe(s.QueryParam, n.search) && He(s.Query, n.search))
                return !0
        }
        return !1
    }
      , He = function(t, n) {
        return 0 === t.length || !n || t.every(function(t) {
            return t.lastIndex = 0,
            t.test(n)
        })
    }
      , We = function(t, n) {
        var i, r, e, s, u;
        (i = t.Hash).push.apply(i, n.Hash),
        (r = t.Host).push.apply(r, n.Host),
        (e = t.Path).push.apply(e, n.Path),
        (s = t.QueryParam).push.apply(s, n.QueryParam),
        (u = t.Query).push.apply(u, n.Query)
    };
    function ze(t, n) {
        return n && "/" !== t.charAt(0) ? "/".concat(t) : t
    }
    var qe = new RegExp("[^\\s]")
      , Ve = new RegExp("[\\s]*$");
    function $e(t) {
        var n = qe.exec(t);
        if (!n)
            return t;
        for (var i = n.index, r = (n = Ve.exec(t)) ? t.length - n.index : 0, e = "\uFFFF", s = t.slice(i, t.length - r).split(/\r\n?|\n/g), u = 0; u < s.length; u++)
            e += "".concat(s[u].length),
            u != s.length - 1 && (e += ":");
        return (i || r) && (e += " ".concat(i, " ").concat(r)),
        e
    }
    String.prototype;
    var Ge, Qe, Xe, Ye, Je = [["@import\\s+\"", "\""], ["@import\\s+'", "'"]].concat([["url\\(\\s*\"", "\"\\s*\\)"], ["url\\(\\s*'", "'\\s*\\)"], ["url\\(\\s*", "\\s*\\)"]]), Ze = ".*?".concat(/(?:[^\\](?:\\\\)*)/.source), ts = new RegExp(Je.map(function(t) {
        var n = t[0]
          , i = t[1];
        return "(".concat(n, ")(").concat(Ze, ")(").concat(i, ")")
    }).join("|"),"g"), ns = /url\(["']?(.+?)["']?\)/g, is = /^\s*\/\//, rs = /[-\\^$*+?.()|[\]{}]/g, es = new RegExp(rs.source);
    (Qe = Ge || (Ge = {}))[Qe.Exclude = 2] = "Exclude",
    Qe[Qe.Mask = 4] = "Mask",
    Qe[Qe.Unmask = 8] = "Unmask",
    Qe[Qe.Watch = 16] = "Watch",
    Qe[Qe.Keep = 32] = "Keep",
    Qe[Qe.Defer = 64] = "Defer",
    (Ye = Xe || (Xe = {}))[Ye.Immediate = 1] = "Immediate",
    Ye[Ye.Deferred = 2] = "Deferred";
    var ss = [Ge.Exclude, Ge.Mask, Ge.Unmask]
      , us = [Ge.Watch, Ge.Keep, Ge.Defer]
      , os = ss.concat(us);
    function as(t) {
        var n = t.tagName;
        return n ? "object" == typeof n ? "form" : n.toLowerCase() : null
    }
    var cs, hs, fs = /(\s*(\S+)(\s+(?:\d+w|[\d.]+x)){0,1}\s*[,])/gm, vs = /((\s*(\S+)(\s+(?:\d+w|[\d.]+x)){0,1}\s*(\s*\d+\S){0,1}(\s*\d+(.\d*){0,1}\S){0,1}\s*)[,])/gm, ls = 1;
    function ds() {
        cs = new Map,
        hs = new Map,
        ls = 1
    }
    function ps(t, n) {
        var i, r;
        return void 0 === n && (n = ms(t)),
        null !== (r = null === (i = null == n ? void 0 : n.watchKind) || void 0 === i ? void 0 : i.hasKinds()) && void 0 !== r && r
    }
    function ws(t, n) {
        var i, r;
        return void 0 === n && (n = ms(t)),
        null !== (r = null === (i = null == n ? void 0 : n.watchKind) || void 0 === i ? void 0 : i.has(Ge.Exclude)) && void 0 !== r && r
    }
    function gs(t, n) {
        return void 0 === n && (n = ms(t)),
        !!n && !!n.mask
    }
    function ms(t) {
        return t ? cs.get(t) : null
    }
    function ys(t) {
        var n;
        return null !== (n = ms(bs(t))) && void 0 !== n ? n : void 0
    }
    function bs(t) {
        return hs.get(t)
    }
    function Ss(t) {
        try {
            if (t) {
                var n = ms(t);
                if (n)
                    return n.id || 0
            }
        } catch (t) {}
        return 0
    }
    function ks(t) {
        return t && !ws(t) ? Ss(t) : 0
    }
    function _s(t) {
        var n = t.id;
        t.id = 0;
        var i = bs(n);
        i && cs["delete"](i),
        hs["delete"](n)
    }
    function As(t, n) {
        t.parent && (n(t),
        t.parent.child == t && (t.parent.child = t.next),
        t.parent.lastChild == t && (t.parent.lastChild = t.prev),
        t.prev && (t.prev.next = t.next),
        t.next && (t.next.prev = t.prev),
        t.parent = t.prev = t.next = null,
        _s(t),
        t.child && Is(t.child, n),
        t.shadow && Is(t.shadow, n))
    }
    function Is(t, n) {
        for (var i = [t]; i.length > 0 && i.length < 1e4; ) {
            var r = i.pop();
            n(r),
            _s(r),
            r.next && i.push(r.next),
            r.child && i.push(r.child),
            r.shadow && i.push(r.shadow)
        }
        Ru(i.length < 1e4, "clearIds is fast")
    }
    var Es = ["allowReorder", "attributeName", "attributeType", "autoReverse", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "contentScriptType", "contentStyleType", "diffuseConstant", "edgeMode", "externalResourcesRequired", "filterRes", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "referrerPolicy", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].reduce(function(t, n) {
        return t[n] = n,
        t[n.toUpperCase()] = n,
        t
    }, {});
    function Ts(t, n) {
        if (n)
            for (var i in n)
                t.push(":".concat(i)),
                t.push(n[i])
    }
    function Cs(t) {
        return t.nodeType === xi && "http://www.w3.org/2000/svg" === t.namespaceURI
    }
    var xs = 16e6
      , Rs = /^\s*((prefetch|preload|prerender)\s*)+$/i
      , Ks = /^\s*.*((worklet|script|worker|font|fetch)\s*)+$/i;
    function js(t, n, i, r) {
        var e, s, u = t.tag;
        if (null === u || "" === i)
            return null;
        if ("link" === u && Rs.test(null !== (e = n.getAttribute("rel")) && void 0 !== e ? e : "") && !Ks.test(null !== (s = n.getAttribute("as")) && void 0 !== s ? s : ""))
            return null;
        var o, a = "style" === i ? Ps(r) : r, c = function(t, n, i) {
            var r, e, s, u, o, a, c, h, f, v, l, d, p, w = void 0;
            (null === (r = null == n ? void 0 : n.watchKind) || void 0 === r ? void 0 : r.has(Ge.Exclude)) ? w = At.Exclude : (null == n ? void 0 : n.mask) && (w = At.Mask);
            var g = []
              , m = null === (u = null === (s = null === (e = Gs.blocklist[At.Any]) || void 0 === e ? void 0 : e[t]) || void 0 === s ? void 0 : s["static"]) || void 0 === u ? void 0 : u[i]
              , y = null === (c = null === (a = null === (o = Gs.blocklist[At.Any]) || void 0 === o ? void 0 : o["*"]) || void 0 === a ? void 0 : a["static"]) || void 0 === c ? void 0 : c[i];
            if (void 0 !== m && g.push(m),
            void 0 !== y && g.push(y),
            w) {
                var b = null === (v = null === (f = null === (h = Gs.blocklist[w]) || void 0 === h ? void 0 : h[t]) || void 0 === f ? void 0 : f["static"]) || void 0 === v ? void 0 : v[i]
                  , S = null === (p = null === (d = null === (l = Gs.blocklist[w]) || void 0 === l ? void 0 : l["*"]) || void 0 === d ? void 0 : d["static"]) || void 0 === p ? void 0 : p[i];
                void 0 !== b && g.push(b),
                void 0 !== S && g.push(S)
            }
            if (Gs.hasPrefix) {
                var k = Ys(At.Any, t, i)
                  , _ = Ys(At.Any, "*", i);
                if (void 0 !== k && g.push(k),
                void 0 !== _ && g.push(_),
                w) {
                    var A = Ys(w, t, i)
                      , I = Ys(w, "*", i);
                    void 0 !== A && g.push(A),
                    void 0 !== I && g.push(I)
                }
            }
            return function(t) {
                if (0 !== t.length)
                    return bi.mathMin.apply(bi, t)
            }(g)
        }(u, t, i);
        if (void 0 === c && !t)
            return null;
        //CHANGE
        /*switch (c) {
        case void 0:*/
            return a;
        /*case Et.Erase:
            return null;
        case Et.MaskText:
            return $e(a);
        case Et.ScrubCss:
            return o = function(t, n, i) {
                return "".concat(t).concat(Qs).concat(i)
            }
            ,
            a.replace(ts, function(t) {
                for (var n = [], i = 1; i < arguments.length; i++)
                    n[i - 1] = arguments[i];
                var r = n[0] || n[3] || n[6] || n[9] || n[12]
                  , e = (n[1] || n[4] || n[7] || n[10] || n[13],
                n[2] || n[5] || n[8] || n[11] || n[14]);
                return n[15],
                o(r, 0, e)
            });
        case Et.ScrubUrl:
            if (!("" !== a || "img" !== u && "source" !== u || "src" !== i && "srcset" !== i))
                return "";
            var h = Ns(a, {
                source: "dom",
                type: u
            });
            if ("#" === a[0]) {
                var f = h.indexOf("#");
                if (f > -1)
                    return h.substring(f)
            }
            return h;
        default:
            return _e()
        }*/
    }
    var Ms = {}
      , Ps = function(t, n) {
        void 0 === n && (n = window);
        try {
            var i = n.location
              , r = i.origin
              , e = i.pathname
              , s = i.search
              , u = "".concat(r).concat(e).concat(s)
              , o = Ms[u];
            return o ? o.lastIndex = 0 : (o = new RegExp("".concat((a = u,
            es.test(a) ? a.replace(rs, "\\$&") : a), "/?(#)"),"g"),
            Ms[u] = o),
            t.replace(o, "".concat("https://fs-currenturl.invalid", "$1"))
        } catch (n) {
            return ju("cleanCSS", {
                err: n
            }),
            t
        }
        var a
    }
      , Os = /^data:/i;
    function Ns(t, n) {
        if (Os.test(t))
            return t;
        switch (n.source) {
        case "dom":
            switch (n.type) {
            case "frame":
            case "iframe":
                return Ws(t);
            default:
                return Ls(t)
            }
        case "event":
            switch (n.type) {
            case O.AJAX_REQUEST:
            case O.NAVIGATE:
                return Ls(t);
            case O.SET_FRAME_BASE:
                return Ws(t);
            default:
                return _e()
            }
        case "log":
            return Ws(t);
        case "page":
            switch (n.type) {
            case "base":
                return Ws(t);
            case "referrer":
            case "url":
                return Ls(t);
            default:
                return _e()
            }
        case "perfEntry":
            switch (n.type) {
            case "frame":
            case "iframe":
            case "navigation":
            case "other":
                return Ws(t);
            default:
                return Ls(t)
            }
        default:
            return _e()
        }
    }
    function Ls(t) {
        return zs(Bs, t)
    }
    var Us = Ht.DefaultOrgSettings.MaxUrlLength
      , Fs = Ae(Ht.DefaultOrgSettings.UrlPrivacyConfig)
      , Bs = Ae(Ht.DefaultOrgSettings.UrlPrivacyConfig);
    function Ds(t, n) {
        Fs = Ae(Ht.DefaultOrgSettings.UrlPrivacyConfig.concat(t)),
        Bs = Ae(t),
        Us = n || Ht.DefaultOrgSettings.MaxUrlLength
    }
    function Hs(t, n) {
        Tu.send(t, n)
    }
    function Ws(t) {
        return zs(Fs, t)
    }
    function zs(t, n) {
        return Ue(t, n, Ce, Hs).substring(0, Us)
    }
    var qs = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gi
      , Vs = /(?:(http)|(ftp)|(ws)|(blob)|(file))[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/gi;
    function $s(t) {
        var n = t.replace(qs, "<email>");
        return n.replace(Vs, function(t) {
            return Ns(t, {
                source: "log",
                type: "debug"
            })
        })
    }
    var Gs, Qs = "https://fs-excluded.invalid";
    function Xs(t) {
        //CHANGE
        Gs = { blocklist: {}, hasPrefix: false };
        return;

        /*var n, i, r, e, s, u, o, a, c, h, f, v, l, d, p, w;
        try {
            for (var g = (Gs = {
                blocklist: {},
                hasPrefix: !1
            }).blocklist, m = (null !== (r = null == t ? void 0 : t.length) && void 0 !== r ? r : 0) > 0 ? t : Ht.DefaultOrgSettings.AttributeBlocklist, y = {}, b = 0, S = m; b < S.length; b++) {
                var k = S[b]
                  , _ = k.Action;
                switch (_) {
                case Et.Erase:
                case Et.MaskText:
                case Et.ScrubCss:
                case Et.ScrubUrl:
                    break;
                default:
                    Tu.send("initializeAttributeBlocklist#entryAction", {
                        entryAction: _
                    }, "warning"),
                    _ = Et.Erase
                }
                if (null !== (e = g[h = k.Target]) && void 0 !== e || (g[h] = {}),
                null !== (s = (f = g[k.Target])[v = k.Tag]) && void 0 !== s || (f[v] = {
                    "static": {},
                    regex: {}
                }),
                k.Type === Ct.Prefix)
                    null !== (u = y[l = k.Target]) && void 0 !== u || (y[l] = {}),
                    null !== (o = (d = y[k.Target])[p = k.Tag]) && void 0 !== o || (d[p] = {}),
                    null !== (a = (w = y[k.Target][k.Tag])[_]) && void 0 !== a || (w[_] = []),
                    y[k.Target][k.Tag][_].push(null !== (c = k.Name) && void 0 !== c ? c : "");
                else {
                    if (!k.Name) {
                        Tu.send("initializeAttributeBlocklist#emptyName", {
                            entry: JSON.stringify(k)
                        }, "warning");
                        continue
                    }
                    g[k.Target][k.Tag]["static"][k.Name] = _
                }
            }
            for (var A in y)
                for (var I in y[A])
                    for (var E in y[A][I]) {
                        var T = y[A][I][E];
                        g[A][I].regex[E] = new RegExp("^(?:".concat(T.join("|"), ")"),"i"),
                        Gs.hasPrefix = !0
                    }
        } catch (t) {
            Tu.send("initializeAttributeBlocklist#fail", {
                err: t
            }, "warning"),
            Gs = {
                blocklist: (n = {},
                n[At.Any] = {
                    "*": {
                        "static": {},
                        regex: (i = {},*/
                        //i[Et.Erase] = /.*/,
                        /*i)
                    }
                },
                n),
                hasPrefix: !0
            }
        }*/
    }
    function Ys(t, n, i) {
        var r, e, s = null === (e = null === (r = Gs.blocklist[t]) || void 0 === r ? void 0 : r[n]) || void 0 === e ? void 0 : e.regex;
        if (s)
            for (var u in s)
                if (s[u].test(i))
                    return Number(u)
    }
    Xs();
    var Js = {
        target: {
            any: At.Any,
            exclude: At.Exclude,
            mask: At.Mask
        },
        action: {
            erase: Et.Erase,
            maskText: Et.MaskText,
            scrubUrl: Et.ScrubUrl,
            scrubCss: Et.ScrubCss
        },
        type: {
            "static": Ct.Static,
            prefix: Ct.Prefix
        }
    };
    function Zs(t) {
        var n;
        return {
            Tag: t.tag,
            Name: t.name,
            Target: Js.target[t.target],
            Action: Js.action[t.action],
            Type: Js.type[null !== (n = t.type) && void 0 !== n ? n : "static"]
        }
    }
    function tu(t) {
        var n = "Internal error: unable to determine what JSON error was";
        try {
            n = (n = "".concat(t)).replace(/[^a-zA-Z0-9.:!, ]/g, "_")
        } catch (t) {}
        return "\"".concat(n, "\"")
    }
    function nu(t) {
        var n = su(t)
          , i = n[0];
        return n[1] || i
    }
    function iu(t, n) {
        if (n in t) {
            var i = t[n];
            if ("number" == typeof i)
                return i
        }
        return 0
    }
    function ru(t, n) {
        void 0 === n && (n = {});
        var r = zi(t)
          , e = r ? iu(t, "When") : 0
          , s = r ? iu(t, "Kind") : 0;
        return i({
            When: e,
            Kind: O.DIAGNOSTIC_INFO,
            Args: [nu({
                Name: "stringifyRawEventError",
                Kind: s,
                err: n
            })]
        }, r && {
            PIds: t.PIds,
            FId: t.FId
        })
    }
    function eu(t) {
        var n, i = su(t), r = i[0], e = i[1];
        return e ? (r = (n = su(ru(t, e)))[0],
        (e = n[1]) ? nu(ru(void 0, e)) : r) : r
    }
    function su(t) {
        var n, i = Object.getOwnPropertyDescriptor(Array.prototype, "toJSON"), r = Object.getOwnPropertyDescriptor(String.prototype, "toJSON"), e = void 0;
        try {
            i && i.value && i.configurable && delete Array.prototype.toJSON,
            r && r.value && r.configurable && delete String.prototype.toJSON,
            n = bi.jsonStringify(t)
        } catch (t) {
            n = "",
            e = tu(t)
        } finally {
            (null == i ? void 0 : i.value) && Ti(function() {
                return Object.defineProperty(Array.prototype, "toJSON", i)
            })(),
            (null == r ? void 0 : r.value) && Ti(function() {
                return Object.defineProperty(String.prototype, "toJSON", r)
            })()
        }
        return [n, e]
    }
    var uu = {
        Ver: "d264731447bbfefcc4cd5f67050038485badd74f",
        TS: 1742913792
    }
      , ou = function() {
        function t(t) {
            var n = this;
            this.F = {
                bundle: 0,
                event: 0
            },
            this.B = !1,
            this.D = t.options.scheme,
            this.H = t.options.recSettingsHost,
            this.W = t,
            this.V = me.then(function(t) {
                n.B = t
            })
        }
        return t.prototype.page = function(t) {
            return r(this, void 0, ae, function() {
                return e(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, vu(this.W, this.D, Su(this.W), "/rec/page", {
                            type: "string",
                            data: nu(t)
                        }, !0)];
                    case 1:
                        return [2, er(n.sent().text)]
                    }
                })
            })
        }
        ,
        t.prototype.settings = function(t) {
            return r(this, void 0, ae, function() {
                var n, i, r;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        if (n = this.W.options.settings)
                            return [2, n];
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        i = t.previewMode ? Su(this.W) : this.H,
                        [4, bu(this.W, this.D, i, t)];
                    case 2:
                        return [2, e.sent()];
                    case 3:
                        if (r = e.sent(),
                        t.previewMode)
                            throw r;
                        return [3, 4];
                    case 4:
                        return [2, bu(this.W, this.D, Su(this.W), t)]
                    }
                })
            })
        }
        ,
        t.prototype.bundle = function(t) {
            return r(this, void 0, ae, function() {
                var n = this;
                return e(this, function(i) {
                    return [2, this.$(t, cu, function(t) {
                        return n.F.bundle += t
                    })]
                })
            })
        }
        ,
        t.prototype.event = function(t) {
            return r(this, void 0, ae, function() {
                var n = this;
                return e(this, function(i) {
                    return [2, this.$(t, hu, function(t) {
                        return n.F.event += t
                    })]
                })
            })
        }
        ,
        t.prototype.$ = function(t, n, s) {
            var u;
            return r(this, void 0, ae, function() {
                var r, o, a, c, h, f, v, l, d;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, ye()];
                    case 1:
                        return e.sent(),
                        r = t.bundle,
                        (o = r[2]) > 2e6 ? [4, ye()] : [3, 3];
                    case 2:
                        e.sent(),
                        e.label = 3;
                    case 3:
                        return this.B && t.disableCompression && (this.B = !1),
                        a = i({}, t),
                        c = a,
                        [4, this.G(t.bundle)];
                    case 4:
                        return c.bundle = e.sent(),
                        h = a.bundle,
                        f = h[1],
                        window,
                        v = n(a),
                        [4, vu(this.W, this.D, null !== (u = a.recHost) && void 0 !== u ? u : Su(this.W), v, f)];
                    case 5:
                        return l = e.sent().text,
                        d = er(l),
                        window,
                        [2, [s(o), d]]
                    }
                })
            })
        }
        ,
        t.prototype.G = function(t) {
            return r(this, void 0, ae, function() {
                var n, i, r, s, u;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return n = t[0],
                        "string" === (i = t[1]).type && this.B && this.W.recording.flags().UseCompression ? [4, we(i.data)] : [3, 2];
                    case 1:
                        if (r = e.sent(),
                        s = r[0],
                        u = r[1],
                        null != s)
                            return [2, [n, {
                                type: "ArrayBuffer",
                                data: s,
                                encoding: sn
                            }, s.byteLength]];
                        this.B = !1,
                        ju("compression failed", {
                            err: u
                        }),
                        e.label = 2;
                    case 2:
                        return [2, t]
                    }
                })
            })
        }
        ,
        t.prototype.bundleBeacon = function(t) {
            var n;
            return wu(this.W, this.D, null !== (n = t.recHost) && void 0 !== n ? n : Su(this.W), t)
        }
        ,
        t.prototype.startBeacon = function(t) {
            return r(this, void 0, ae, function() {
                return e(this, function(n) {
                    return [2, gu(this.W, this.D, Su(this.W), t)]
                })
            })
        }
        ,
        t
    }()
      , au = function() {
        function t(t) {
            this.D = t.options.scheme,
            this.W = t
        }
        return t.prototype.uploadResource = function(t) {
            return r(this, void 0, ae, function() {
                return e(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, vu(this.W, this.D, Su(this.W), "/rec/uploadResource", t)];
                    case 1:
                        return [2, n.sent().text]
                    }
                })
            })
        }
        ,
        t.prototype.queryResources = function(t) {
            return r(this, void 0, ae, function() {
                return e(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, vu(this.W, this.D, Su(this.W), "/rec/queryResources", {
                            type: "string",
                            data: nu(t)
                        })];
                    case 1:
                        return [2, er(n.sent().text)]
                    }
                })
            })
        }
        ,
        t
    }();
    function cu(t, n) {
        return void 0 === n && (n = pr()),
        fu("/rec/bundle".concat("v2" === t.version ? "/v2" : ""), t, n)
    }
    function hu(t, n) {
        return void 0 === n && (n = pr()),
        fu("/rec/event", t, n)
    }
    function fu(t, n, i) {
        var r = n.bundle
          , e = r[0]
          , s = r[1]
          , u = "encoding"in s ? s.encoding : un
          , o = "".concat(t, "?OrgId=").concat(n.orgId, "&UserId=").concat(n.userId, "&SessionId=").concat(n.sessionId, "&PageId=").concat(n.pageId, "&Seq=").concat(e, "&ClientTime=").concat(i, "&CompiledVersion=").concat(uu.Ver);
        return null != n.serverPageStart && (o += "&PageStart=".concat(n.serverPageStart)),
        null != n.serverBundleTime && (o += "&PrevBundleTime=".concat(n.serverBundleTime)),
        null != n.lastUserActivity && (o += "&LastActivity=".concat(n.lastUserActivity)),
        n.isNewSession && (o += "&IsNewSession=true"),
        null != n.deltaT && (o += "&DeltaT=".concat(n.deltaT)),
        u === sn && (o += "&ContentEncoding=".concat(sn)),
        o
    }
    function vu(t, n, i, s, u, o) {
        return void 0 === o && (o = !1),
        r(this, void 0, ae, function() {
            return e(this, function(r) {
                return [2, du(t, "POST", n, i, ku(s), o, u)]
            })
        })
    }
    function lu(t, n, i, s) {
        return r(this, void 0, ae, function() {
            return e(this, function(r) {
                return [2, du(t, "GET", n, i, ku(s), !1)]
            })
        })
    }
    function du(t, n, i, s, u, o, a) {
        return r(this, void 0, ae, function() {
            var r, c, h, f, v, l, d;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    switch (r = t.options.request || pu,
                    c = "//".concat(s).concat(u),
                    h = {},
                    null == a ? void 0 : a.type) {
                    case "string":
                    case "ArrayBuffer":
                        h["Content-Type"] = Ht.TextPlain
                    }
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, r(i, n, c, o, h, a)];
                case 2:
                    return f = e.sent(),
                    [3, 4];
                case 3:
                    throw v = e.sent(),
                    Tu.send("fsRequest", {
                        err: v,
                        method: n,
                        endpoint: u,
                        isCustom: "".concat(r !== pu)
                    }),
                    v;
                case 4:
                    if (l = {
                        text: f.responseText
                    },
                    200 == f.status)
                        return [2, l];
                    try {
                        d = er(l.text)
                    } catch (t) {}
                    throw new _r(f.status,l.text,d)
                }
            })
        })
    }
    function pu(t, n, i, s, u, o) {
        return r(this, void 0, ae, function() {
            var r;
            return e(this, function(e) {
                return r = function(t) {
                    switch (null == t ? void 0 : t.type) {
                    case "string":
                    case "ArrayBuffer":
                        return t.data;
                    case "FormData":
                        var n = new FormData;
                        for (var i in t.data) {
                            var r = t.data[i];
                            if (void 0 !== r)
                                if ("string" == typeof r)
                                    n.append(i, r);
                                else {
                                    var e = new Blob([r.data],{
                                        type: r.contentType
                                    });
                                    n.append(i, e, r.filename)
                                }
                        }
                        return n;
                    default:
                        return
                    }
                }(o),
                [2, new ae(function(e) {
                    var o = !1
                      , a = new XMLHttpRequest;
                    for (var c in a.onreadystatechange = function() {
                        a.readyState !== Ki || o || (o = !0,
                        e({
                            status: a.status,
                            responseText: a.responseText
                        }))
                    }
                    ,
                    a.open(n, "".concat(t).concat(i), !0),
                    a.withCredentials = s,
                    u)
                        a.setRequestHeader(c, u[c]);
                    a.send(r)
                }
                )]
            })
        })
    }
    function wu(t, n, i, r) {
        var e = "".concat(n, "//").concat(i).concat(cu(r), "&SkipResponseBody=true")
          , s = r.bundle[1];
        return mu(t.options.beacon, e, s)
    }
    function gu(t, n, i, s) {
        return r(this, void 0, ae, function() {
            var r, u, o, a, c;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    r = t.window.document.referrer,
                    u = r ? Ns(r, {
                        source: "page",
                        type: "referrer"
                    }) : "",
                    o = "orgId=".concat(s.orgId, "&userId=").concat(s.userId, "&sessionId=").concat(s.sessionId),
                    a = {
                        referrer: u
                    },
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, vu(t, n, i, "/rec/beacon?".concat(o), {
                        type: "string",
                        data: nu(a)
                    })];
                case 2:
                    return e.sent(),
                    [3, 4];
                case 3:
                    return c = e.sent(),
                    "failed to send session start beacon ".concat(c),
                    [3, 4];
                case 4:
                    return [2]
                }
            })
        })
    }
    function mu(t, n, i) {
        return (t || yu)(n, i)
    }
    function yu(t, n) {
        if ("function" == typeof navigator.sendBeacon)
            try {
                return navigator.sendBeacon.bind(navigator)(t, n.data)
            } catch (t) {}
        return !1
    }
    function bu(t, n, i, s) {
        var u;
        return r(this, void 0, ae, function() {
            var r, o;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    return r = null !== (u = s.version) && void 0 !== u ? u : "v1",
                    o = s.previewMode ? "?previewMode=true" : "",
                    [4, lu(t, n, i, "/s/settings/".concat(s.orgId, "/").concat(r, "/web").concat(o))];
                case 1:
                    return [2, er(e.sent().text)]
                }
            })
        })
    }
    function Su(t) {
        var n, i = null === (n = t.recording.pageResponse()) || void 0 === n ? void 0 : n.GCLBSubdomain, r = t.options.recHost;
        return i && In(r) ? r.replace(/^rs\./, "".concat(i, ".")) : r
    }
    function ku(t) {
        if (!window.Zone)
            return t;
        var n = "?";
        return t.indexOf(n) > -1 && (n = "&"),
        "".concat(t).concat(n, "ngsw-bypass=true")
    }
    var _u = /function\s*([\w\-$]+)?\s*\(/i;
    function Au(t) {
        return t.stack || t.backtrace || t.stacktrace
    }
    function Iu() {
        var t, n;
        try {
            throw new Error("")
        } catch (i) {
            t = "<generated>\n",
            n = Au(i)
        }
        if (!n) {
            t = "<generated-ie>\n";
            var i = [];
            try {
                for (var r = arguments.callee.caller.caller; r && i.length < 10; ) {
                    var e = _u.test(r.toString()) && RegExp.$1 || "[anonymous]";
                    i.push(e),
                    r = r.caller
                }
            } catch (t) {
                t.toString()
            }
            n = i.join("\n")
        }
        return t + n
    }
    function Eu() {
        try {
            return window.self !== window.top
        } catch (t) {
            return !0
        }
    }
    var Tu = function() {
        function t() {}
        return t.wrap = function(n, r, e) {
            return void 0 === e && (e = {}),
            Ti(n, function(n) {
                t.send(r, i({
                    err: n
                }, e))
            })
        }
        ,
        t.X = 15,
        t.send = function(n, i, r) {
            if (void 0 === i && (i = {}),
            void 0 === r && (r = "error"),
            !(t.X <= 0 || (t.X--,
            Wn(window)))) {
                var e = function(t, n, i) {
                    var r;
                    void 0 === i && (i = {});
                    var e = function(t) {
                        return zi(t) && "message"in t && "name"in t
                    }(i.err) ? i.err : new Error(t)
                      , s = t || e.message || "".concat(null !== (r = i.err) && void 0 !== r ? r : "") || "unknown error";
                    e.message !== s && (i.msg = e.message);
                    var u = kr(document).fs_uid
                      , o = u ? Sr(u) : void 0;
                    o && o.orgId != jn(window) && (o = void 0);
                    var a = {
                        projectRoot: window.location.origin,
                        deviceTime: pr(),
                        inIframe: Eu(),
                        CompiledVersion: uu.Ver,
                        CompiledTimestamp: uu.TS,
                        orgId: jn(window),
                        "userId:sessionId": o ? "".concat(o.userId, ":").concat(o.sessionId) : "NA",
                        context: document.location && document.location.pathname,
                        message: s,
                        severity: n,
                        language: or(window),
                        stacktrace: Au(e) || Iu()
                    }
                      , c = function(t, n, i) {
                        var r = "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(i));
                        t.push(r)
                    }
                      , h = [];
                    for (var f in a)
                        c(h, f, a[f] || "");
                    for (var f in i) {
                        var v = Cu(i[f]);
                        c(h, "aux_".concat(f), v)
                    }
                    return "https://".concat(Rn(window), "/rec/except?").concat(h.join("&"))
                }(n, r, i);
                mu($n(window), e, {
                    data: "",
                    type: "string"
                }) || (new Image().src = e)
            }
        }
        ,
        t
    }();
    function Cu(t) {
        try {
            var n = typeof t;
            switch (n) {
            case "string":
            case "number":
            case "boolean":
            case "undefined":
                return "".concat(t);
            default:
                var i = "".concat(n, ": ").concat(nu(t));
                return "function" == typeof t.toString && (i += " (toString: ".concat(t.toString(), ")")),
                i
            }
        } catch (t) {
            return "failed to serialize \"".concat(null == t ? void 0 : t.message, "\"")
        }
    }
    var xu = {};
    function Ru(t, n, i) {
        return void 0 === i && (i = 1),
        !!t || (xu[n] = xu[n] || 0,
        xu[n]++,
        !(xu[n] > i) && (Tu.send("Assertion failed: ".concat(n)),
        t))
    }
    var Ku = {};
    function ju(t, n) {
        var i;
        void 0 === n && (n = {}),
        Ku[t] = null !== (i = Ku[t]) && void 0 !== i ? i : 0,
        Ku[t]++,
        Ku[t] > 1 || Tu.send(t, n)
    }
    var Mu = "_fs_weak_map_key"
      , Pu = function() {
        function t(t, n) {
            void 0 === n && (n = !1),
            this.Y = n,
            this.J = new WeakMap(t)
        }
        return t.prototype.get = function(t) {
            return this.Y || !this.J.has(t) ? this.J.get(Ou(t)) : this.J.get(t)
        }
        ,
        t.prototype.set = function(t, n) {
            if (!this.Y)
                try {
                    return this.J.set(t, n),
                    this
                } catch (t) {}
            return this.Z(t, n)
        }
        ,
        t.prototype.Z = function(t, n) {
            return t[Mu] = Ou(t),
            this.J.set(t[Mu], n),
            this
        }
        ,
        t.prototype["delete"] = function(t) {
            return this.J["delete"](t) || this.J["delete"](Ou(t))
        }
        ,
        t.prototype.has = function(t) {
            return this.J.has(t) || this.J.has(Ou(t))
        }
        ,
        t
    }();
    function Ou(t) {
        return Object.prototype.hasOwnProperty.call(t, Mu) ? t[Mu] : {}
    }
    var Nu = function() {
        function t(t, n, i, r) {
            var e;
            void 0 === i && (i = !1),
            this.tt = t,
            this.nt = n,
            this.it = i,
            this.rt = Ci,
            this.et = void 0,
            this.st = Ci,
            this.ut = Ci,
            this.ot = !1,
            this.ct = null === (e = r.options.preHooks) || void 0 === e ? void 0 : e.get(t)
        }
        return t.prototype.before = function(t) {
            return this.rt = ir(t),
            this
        }
        ,
        t.prototype.replaceSync = function(t) {
            return this.et = ir(t),
            this
        }
        ,
        t.prototype.afterSync = function(t) {
            return this.ct ? this.st = Lu(t) : this.st = ir(t),
            this
        }
        ,
        t.prototype.afterAsync = function(t) {
            return this.ut = Lu(t),
            this
        }
        ,
        t.prototype.disable = function() {
            if (this.ot = !1,
            this.ht) {
                var t = this.ht
                  , n = t.override
                  , i = t["native"];
                this.ct && this.ct[this.nt] === n ? (delete this.ct[this.nt],
                this.ht = void 0) : this.tt[this.nt] === n && (this.tt[this.nt] = i,
                this.ht = void 0)
            }
        }
        ,
        t.prototype.enable = function() {
            if (this.ot = !0,
            this.ht)
                return !0;
            if (this.ht = this.ft(),
            this.ct)
                this.ct[this.nt] = this.ht.override;
            else
                try {
                    this.tt[this.nt] = this.ht.override
                } catch (t) {
                    return !1
                }
            return !0
        }
        ,
        t.prototype.getTarget = function() {
            return this.tt
        }
        ,
        t.prototype.ft = function() {
            var t = this
              , n = this
              , r = this.tt[this.nt]
              , e = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var s, u = {
                    that: this,
                    args: t,
                    result: null
                };
                return n.ot && n.rt(u),
                n.ct || (s = n.et ? n.et(i(i({}, u), {
                    origFn: r
                })) : r.apply(this, t),
                u.result = s),
                n.ot && (n.st(u),
                n.ut(u)),
                u.result
            };
            return this.it && (e.toString = function() {
                var n;
                return "function ".concat(null !== (n = t.nt) && void 0 !== n ? n : "", "() { ").concat(hi, " }")
            }
            ),
            {
                "native": r,
                override: e
            }
        }
        ,
        t
    }();
    function Lu(t) {
        return ir(function(n) {
            bi.setWindowTimeout(window, Ti(function() {
                t(n)
            }), 0)
        })
    }
    var Uu = {};
    function Fu(t, n, i, r) {
        var e;
        if (void 0 === r && (r = !1),
        !n || "function" != typeof n[i])
            return null;
        Uu[i] = null !== (e = Uu[i]) && void 0 !== e ? e : new Pu;
        var s = Uu[i].get(n);
        return s || (s = new Nu(n,i,r,t),
        Uu[i].set(n, s)),
        s.enable() ? s : null
    }
    function Bu(t) {
        var n = t.target
          , i = t.type
          , r = t.fn
          , e = t.options;
        void 0 !== r && null != n && ("function" == typeof n.addEventListener ? n.addEventListener(i, r, e) : "function" == typeof n.addListener ? n.addListener(r) : "Target of ".concat(i, " doesn't seem to support listeners"))
    }
    function Du(t) {
        var n = t.target
          , i = t.type
          , r = t.fn
          , e = t.options;
        void 0 !== r && null != n && ("function" == typeof n.removeEventListener ? n.removeEventListener(i, r, e) : "function" == typeof n.removeListener ? n.removeListener(r) : "Target of ".concat(i, " doesn't seem to support listeners"))
    }
    function Hu(t) {
        t.target && (Du(t),
        t.target = null,
        t.fn = void 0)
    }
    var Wu = function() {
        function t() {
            var t = this;
            this.vt = [],
            this.lt = [],
            this.dt = !0,
            this.wt = !1;
            try {
                var n = Object.defineProperty({}, "passive", {
                    get: function() {
                        t.dt = {
                            capture: !0,
                            passive: !0
                        },
                        t.wt = {
                            capture: !1,
                            passive: !0
                        }
                    }
                });
                window.addEventListener("test", Ci, n)
            } catch (t) {}
        }
        return t.prototype.add = function(t, n, i, r, e) {
            return void 0 === e && (e = !1),
            this.addCustom(t, n, i, r, e)
        }
        ,
        t.prototype.addCustom = function(t, n, i, r, e) {
            void 0 === e && (e = !1);
            var s = {
                target: t,
                type: n,
                fn: Tu.wrap(nr(function(t) {
                    (e || !1 !== t.isTrusted || "message" == n || t[nn]) && r(t)
                }), "domlistener#custom", {
                    type: n
                }),
                options: i ? this.dt : this.wt,
                index: this.vt.length
            };
            return this.vt.push(s),
            Bu(s),
            s
        }
        ,
        t.prototype.clearAll = function() {
            for (var t = 0, n = this.vt; t < n.length; t++) {
                var i = n[t];
                i.target && Hu(i)
            }
            this.vt = [];
            for (var r = 0, e = this.lt; r < e.length; r++)
                e[r].clearAll();
            this.lt = []
        }
        ,
        t.prototype.clearChild = function(t) {
            var n = this.gt(t);
            null == n || n.clearAll(),
            Ru(!!n, "clearChild")
        }
        ,
        t.prototype.createChild = function() {
            var n = new t;
            return this.lt.push(n),
            n
        }
        ,
        t.prototype.refresh = function() {
            for (var t = 0, n = this.vt; t < n.length; t++) {
                var i = n[t];
                i.target && (Du(i),
                Bu(i))
            }
            for (var r = 0, e = this.lt; r < e.length; r++)
                e[r].refresh()
        }
        ,
        t.prototype.gt = function(t) {
            var n = this.lt.indexOf(t);
            if (n > -1)
                return this.lt.splice(n, 1)[0]
        }
        ,
        t
    }();
    function zu(t, n) {
        return n && t.pageLeft == n.pageLeft && t.pageTop == n.pageTop
    }
    function qu(t, n) {
        return n && t.width == n.width && t.height == n.height
    }
    function Vu(t) {
        return {
            pageLeft: t.pageLeft,
            pageTop: t.pageTop,
            width: t.width,
            height: t.height
        }
    }
    function $u(t) {
        return "BackCompat" == t.compatMode
    }
    function Gu(t) {
        return t && t.body && t.documentElement ? $u(t) ? [t.body.clientWidth, t.body.clientHeight] : [t.documentElement.clientWidth, t.documentElement.clientHeight] : [0, 0]
    }
    var Qu = function() {
        function t(t, n) {
            var i, r, e, s;
            this.hasKnownPosition = !1,
            this.pageLeft = 0,
            this.pageTop = 0,
            this.width = 0,
            this.height = 0,
            this.clientWidth = 0,
            this.clientHeight = 0;
            var u = t.document;
            if (u && u.documentElement && u.body) {
                i = Gu(u),
                this.clientWidth = i[0],
                this.clientHeight = i[1];
                var o = t.visualViewport;
                if (o) {
                    this.hasKnownPosition = !0,
                    this.pageTop = o.pageTop - o.offsetTop,
                    this.pageLeft = o.pageLeft - o.offsetLeft,
                    0 == this.pageTop && (this.pageTop = 0),
                    0 == this.pageLeft && (this.pageLeft = 0);
                    var a = null !== (e = Zu(t, "innerWidth")) && void 0 !== e ? e : 0
                      , c = null !== (s = Zu(t, "innerHeight")) && void 0 !== s ? s : 0;
                    if (a > 0 && c > 0)
                        return this.width = a,
                        void (this.height = c)
                }
                if (void 0 !== n && this.clientWidth == n.clientWidth && this.clientHeight == n.clientHeight && n.width > 0 && n.height > 0)
                    return this.width = n.width,
                    void (this.height = n.height);
                r = this.yt(t),
                this.width = r[0],
                this.height = r[1]
            }
        }
        return t.prototype.yt = function(t) {
            var n = Xu(t, "width", this.clientWidth, this.clientWidth + 128);
            void 0 === n && (n = Zu(t, "innerWidth")),
            void 0 === n && (n = this.clientWidth);
            var i = Xu(t, "height", this.clientHeight, this.clientHeight + 128);
            return void 0 === i && (i = Zu(t, "innerHeight")),
            void 0 === i && (i = this.clientHeight),
            [n, i]
        }
        ,
        t
    }();
    function Xu(t, n, i, r) {
        if (bi.matchMedia) {
            var e = i
              , s = r
              , u = bi.matchMedia(t, "(min-".concat(n, ": ").concat(e, "px)"));
            if (null != u) {
                if (u.matches && bi.matchMedia(t, "(max-".concat(n, ": ").concat(e, "px)")).matches)
                    return e;
                for (; e <= s; ) {
                    var o = bi.mathFloor((e + s) / 2);
                    if (bi.matchMedia(t, "(min-".concat(n, ": ").concat(o, "px)")).matches) {
                        if (bi.matchMedia(t, "(max-".concat(n, ": ").concat(o, "px)")).matches)
                            return o;
                        e = o + 1
                    } else
                        s = o - 1
                }
            }
        }
    }
    function Yu(t, n) {
        return new Qu(t,n)
    }
    var Ju = function(t, n) {
        this.offsetLeft = 0,
        this.offsetTop = 0,
        this.pageLeft = 0,
        this.pageTop = 0,
        this.width = 0,
        this.height = 0,
        this.scale = 0;
        var i = t.document;
        if (i.body) {
            "pageXOffset"in t ? (this.pageLeft = t.pageXOffset,
            this.pageTop = t.pageYOffset) : i.scrollingElement ? (this.pageLeft = i.scrollingElement.scrollLeft,
            this.pageTop = i.scrollingElement.scrollTop) : $u(i) ? (this.pageLeft = i.body.scrollLeft,
            this.pageTop = i.body.scrollTop) : i.documentElement && (i.documentElement.scrollLeft > 0 || i.documentElement.scrollTop > 0) ? (this.pageLeft = i.documentElement.scrollLeft,
            this.pageTop = i.documentElement.scrollTop) : (this.pageLeft = i.body.scrollLeft || 0,
            this.pageTop = i.body.scrollTop || 0),
            this.offsetLeft = this.pageLeft - n.pageLeft,
            this.offsetTop = this.pageTop - n.pageTop;
            var r = 0
              , e = 0;
            try {
                r = t.innerWidth,
                e = t.innerHeight
            } catch (t) {
                return
            }
            if (0 != r && 0 != e) {
                this.scale = n.width / r,
                this.scale < 1 && (this.scale = 1);
                var s = n.width - n.clientWidth
                  , u = n.height - n.clientHeight;
                this.width = r - s / this.scale,
                this.height = e - u / this.scale
            }
        }
    };
    function Zu(t, n) {
        try {
            return t[n]
        } catch (t) {
            return
        }
    }
    function to(t) {
        var n = [t.clientWidth, t.clientHeight];
        return t.width === t.clientWidth && t.height === t.clientHeight || n.push(t.width, t.height),
        n
    }
    var no, io, ro = function(t, n, i) {
        function r(n, i) {
            var r = 0;
            try {
                t(n, function(t, n) {
                    if (r++ > i)
                        throw "break";
                    if ("object" == typeof n)
                        return n
                })
            } catch (t) {
                return "break" != t
            }
            return !1
        }
        var e = function(t, n, i) {
            return void 0 === i && (i = "..."),
            t.length <= n ? t : t.length <= i.length || n <= i.length ? t.substring(0, n) : t.substring(0, n - i.length) + i
        };
        function s(r, u, o, a) {
            if (u < 1)
                return 0;
            var c = function(t) {
                switch (!0) {
                case function(t) {
                    return !(!t || t.constructor != Date)
                }(t):
                    return n = t,
                    isNaN(n) ? "Invalid Date" : n.toUTCString();
                case function(t) {
                    return "object" == typeof Node ? t instanceof Node : t && "object" == typeof t && t.nodeType > 0 && "string" == typeof t.nodeName
                }(t):
                    return function(t) {
                        return t.toString()
                    }(t);
                case void 0 === t:
                    return "undefined";
                case "object" != typeof t || null == t:
                    return t;
                case t instanceof Error:
                    return [t.toString(), t.stack].filter(Boolean).join(",")
                }
                var n
            }(r);
            if (void 0 !== c) {
                var h = function(n, i) {
                    var r = t(n);
                    return r && "\"" == r[0] ? e(r, i, "...\"") : r
                }(c, u);
                return "string" == typeof h && h.length <= u ? (a.tokens.push(h),
                h.length) : 0
            }
            if (a.cyclic) {
                a.opath.splice(o);
                var f = a.opath.lastIndexOf(r);
                if (f > -1) {
                    var v = "<Cycle to ancestor #".concat(o - f - 1, ">");
                    return v = "\"".concat(e(v, u - 2), "\""),
                    a.tokens.push(v),
                    v.length
                }
                a.opath.push(r)
            }
            var l = u
              , d = function(t) {
                return l >= t.length && (l -= t.length,
                a.tokens.push(t),
                !0)
            }
              , p = function(t) {
                var n = a.tokens.length - 1;
                "," === a.tokens[n] ? a.tokens[n] = t : d(t)
            };
            if (l < 2)
                return 0;
            if (n(r)) {
                d("[");
                for (var w = 0; w < r.length && l > 0; w++) {
                    var g = s(r[w], l - 1, o + 1, a);
                    if (l -= g,
                    0 == g && !d("null"))
                        break;
                    d(",")
                }
                p("]")
            } else {
                d("{");
                var m = i(r);
                for (w = 0; w < m.length && l > 0; w++) {
                    var y = m[w]
                      , b = r[y];
                    if (!d("\"".concat(y, "\":")))
                        break;
                    if (0 == (g = s(b, l - 1, o + 1, a))) {
                        a.tokens.pop();
                        break
                    }
                    l -= g,
                    d(",")
                }
                p("}")
            }
            return u == 1 / 0 ? 1 : u - l
        }
        return function(t, n) {
            void 0 === n && (n = 1024);
            try {
                var i = {
                    tokens: [],
                    opath: [],
                    cyclic: r(t, n / 4)
                };
                return s(t, n, 0, i),
                i.tokens.join("")
            } catch (t) {
                return tu(t)
            }
        }
    }(bi.jsonStringify, Bi, Qi), eo = function() {
        function t() {
            var n = this;
            this.bt = 0,
            this.St = t.kt++,
            this._t = Tu.wrap(function() {
                n.At(),
                n.It && n.It()
            }, "time#wrappedTick")
        }
        return t.checkForBrokenSchedulers = function() {
            return r(this, void 0, ae, function() {
                var n, i;
                return e(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return !bi.requestWindowAnimationFrame || t.Et || (n = pr()) - t.Tt < 100 ? [2, !1] : (t.Tt = n,
                        t.Et = !0,
                        [4, new ae(function(t) {
                            return bi.requestWindowAnimationFrame(window, t)
                        }
                        )]);
                    case 1:
                        return r.sent(),
                        i = [],
                        Yi(t.Ct, function(t) {
                            var r = t.xt(n);
                            r && i.push(r)
                        }),
                        [4, ae.all(i)];
                    case 2:
                        return r.sent(),
                        bi.requestWindowAnimationFrame(window, Tu.wrap(function() {
                            t.Et = !1
                        }, "checkForBrokenSchedulers")),
                        [2, !0]
                    }
                })
            })
        }
        ,
        t.stopAll = function() {
            Yi(this.Ct, function(t) {
                return t.stop()
            })
        }
        ,
        t.prototype.Rt = function(t) {
            this.It = t
        }
        ,
        t.prototype.stop = function() {
            this.Kt(),
            delete t.Ct[this.St]
        }
        ,
        t.prototype.jt = function(n) {
            this.bt = pr() + 100 + 1.5 * n,
            t.Ct[this.St] = this
        }
        ,
        t.prototype.Mt = function() {
            return null != t.Ct[this.St]
        }
        ,
        t.prototype.At = function() {
            delete t.Ct[this.St]
        }
        ,
        t.prototype.xt = function(t) {
            if (t > this.bt)
                return ae.resolve().then(this._t)["catch"](function() {})
        }
        ,
        t.Ct = {},
        t.kt = 0,
        t.Et = !1,
        t.Tt = 0,
        t
    }(), so = function(t) {
        function i(n) {
            var i = t.call(this) || this;
            return i.Pt = n,
            i.Ot = -1,
            i
        }
        return n(i, t),
        i.prototype.start = function(t, n) {
            var i = this;
            void 0 === n && (n = this.Pt),
            -1 == this.Ot && (this.Pt = n,
            this.Rt(function() {
                t(),
                i.jt(i.Pt)
            }),
            this.Ot = bi.setWindowInterval(window, this._t, this.Pt),
            this.jt(this.Pt))
        }
        ,
        i.prototype.Kt = function() {
            -1 != this.Ot && (bi.clearWindowInterval(window, this.Ot),
            this.Ot = -1,
            this.Rt(function() {}))
        }
        ,
        i
    }(eo), uo = function(t) {
        function i(n, i, r) {
            void 0 === i && (i = 0);
            for (var e = [], s = 3; s < arguments.length; s++)
                e[s - 3] = arguments[s];
            var u = t.call(this) || this;
            return u.Nt = i,
            u.Lt = -1,
            u.Rt(function() {
                u.stop(),
                n.apply(void 0 === r ? window : r, e)
            }),
            u
        }
        return n(i, t),
        i.prototype.start = function(t) {
            return void 0 === t && (t = this.Nt),
            this.Nt = t,
            bi.clearWindowTimeout(window, this.Lt),
            this.Lt = bi.setWindowTimeout(window, this._t, this.Nt),
            this.jt(t),
            this
        }
        ,
        i.prototype.isRunning = function() {
            return this.Mt()
        }
        ,
        i.prototype.Kt = function() {
            -1 != this.Lt && (bi.clearWindowTimeout(window, this.Lt),
            this.Lt = -1)
        }
        ,
        i
    }(eo), oo = function() {
        function t(t, n, i) {
            this.Ut = t,
            this.Ft = i,
            this.j = 0,
            this.Bt = new so(n),
            this.open()
        }
        return t.prototype.guard = function(t) {
            var n = this;
            return function() {
                for (var i = [], r = 0; r < arguments.length; r++)
                    i[r] = arguments[r];
                return 0 == n.j ? (n.Ft(),
                void n.j--) : n.j < 0 ? void 0 : (n.j--,
                t.apply(this, i))
            }
        }
        ,
        t.prototype.close = function() {
            return this.Bt.stop(),
            this
        }
        ,
        t.prototype.open = function() {
            var t = this;
            return this.j = this.Ut,
            this.Bt.start(function() {
                t.j = t.Ut
            }),
            this
        }
        ,
        t
    }(), ao = function() {
        function t() {
            this.Dt = 0,
            this.Ht = pr()
        }
        return t.prototype.wallTime = function() {
            return pr()
        }
        ,
        t.prototype.now = function() {
            var t = this.wallTime() - this.Ht;
            return t < 0 && this.Wt("timekeeper now() is negative"),
            t
        }
        ,
        t.prototype.startTime = function() {
            return this.Ht
        }
        ,
        t.prototype.setStartTime = function(t) {
            var n = this.wallTime();
            this.Ht = t,
            t > n && (this.Dt = t - n,
            this.Dt > 1e3 && this.Wt("timekeeper set with future ts"))
        }
        ,
        t.prototype.Wt = function(t) {
            ro({
                msg: t,
                skew: this.Dt,
                startTime: this.Ht,
                wallTime: this.wallTime()
            }, 1024)
        }
        ,
        t
    }();
    (io = no || (no = {})).Indeterminate = "indeterminate",
    io.Checked = "checked",
    io.Value = "value";
    var co = function() {
        function t(t, n) {
            var i;
            this.W = t,
            this.zt = n,
            this.qt = !1,
            this.Vt = {},
            this.$t = ((i = {})[no.Checked] = {},
            i[no.Indeterminate] = {},
            i[no.Value] = {},
            i),
            this.Gt = {},
            this.Qt = [],
            this.Xt = {},
            this.Yt = !1,
            this.Jt = !1,
            this.Zt = {},
            this.tn = null,
            this.t = t.window.document
        }
        return t.prototype.start = function() {
            this.nn() || (this.qt = !0)
        }
        ,
        t.prototype.hookInstance = function(t, n) {
            if ("input" === as(n))
                switch (n.type) {
                case "checkbox":
                case "radio":
                    this.rn(t, n, "checked");
                    break;
                default:
                    this.rn(t, n, "value")
                }
        }
        ,
        t.prototype.addInput = function(t) {
            if (t) {
                var n = ks(t);
                if (n) {
                    if ("input" === as(t)) {
                        var i = t;
                        this.en(n, i),
                        i.indeterminate && this.sn(i, !0)
                    }
                    var r = !1;
                    if (function(t) {
                        switch (t.type) {
                        case "checkbox":
                            return t.checked != t.hasAttribute("checked");
                        case "radio":
                            return t.checked || t.hasAttribute("checked");
                        default:
                            return (t.value || "") != function(t) {
                                if ("select" != as(t))
                                    return t.getAttribute("value") || "";
                                var n = t
                                  , i = n.querySelector("option[selected]") || n.querySelector("option");
                                return i && i.value || ""
                            }(t)
                        }
                    }(t) && (this.un(t, !1, !0),
                    r = !0),
                    this.qt && (this.Vt[n] = {
                        elem: t
                    }),
                    !r)
                        if (lo(t)) {
                            var e = ho(t);
                            t.checked && (this.Gt[e] = n)
                        } else
                            this.on(n, no.Value, vo(this.W, t))
                }
            }
        }
        ,
        t.prototype.on = function(t, n, i) {
            this.$t[n][t] = i
        }
        ,
        t.prototype.an = function(t, n) {
            return this.$t[n][t]
        }
        ,
        t.prototype.cn = function(t) {
            for (var n in this.$t)
                delete this.$t[n][t]
        }
        ,
        t.prototype.en = function(t, n) {
            if (this.Yt)
                this.Jt && this.hookInstance(t, n);
            else {
                var i = "checkbox" === n.type || "radio" === n.type ? "checked" : "value"
                  , r = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, i)
                  , e = Object.getOwnPropertyDescriptor(n, i);
                r && e && r !== e && (this.Jt = !0,
                this.hookInstance(t, n)),
                this.Yt = !0
            }
        }
        ,
        t.prototype.hn = function(t, n) {
            void 0 === n && (n = vo(this.W, t));
            var i = ks(t);
            if (!t || !i)
                return !1;
            if (lo(t)) {
                var r = ho(t);
                return this.Gt[r] === i != ("true" === n)
            }
            return this.an(i, no.Value) !== n
        }
        ,
        t.prototype.onChange = function(t, n, i) {
            void 0 === i && (i = vo(this.W, t));
            var r = ks(t);
            t && r && (n || this.hn(t, i)) && this.un(t, n)
        }
        ,
        t.prototype.onInputChange = function(t) {
            if (t) {
                var n = t;
                if (n.nodeType === Node.ELEMENT_NODE) {
                    var i = Ss(n);
                    if (i) {
                        var r = n
                          , e = vo(this.W, r);
                        this.vn(i, r, e)
                    }
                }
            }
        }
        ,
        t.prototype.onKeyboardChange = function(t) {
            var n, i = function(t) {
                for (var n = t.activeElement; n && n.shadowRoot; ) {
                    var i = n.shadowRoot.activeElement;
                    if (!i)
                        return n;
                    n = i
                }
                return n
            }(this.t);
            i && ("value"in (n = i) || "checked"in n) && !ws(i) && this.hn(i) && this.un(i, t)
        }
        ,
        t.prototype.tick = function() {
            for (var t in this.Vt) {
                var n = this.Vt[t]
                  , i = n.elem;
                if (ks(i))
                    try {
                        delete this.Vt[t];
                        var r = vo(this.W, i);
                        if (this.hn(i, r))
                            this.un(i);
                        else if (n.noFsIdInOption) {
                            var e = i;
                            Array.prototype.slice.call(e.options).every(function(t) {
                                return ks(t)
                            }) && (n.noFsIdInOption = !1,
                            this.un(i))
                        }
                    } finally {
                        this.qt && (this.Vt[t] = n)
                    }
                else
                    delete this.Vt[t],
                    this.cn(t),
                    lo(i) && delete this.Gt[ho(i)]
            }
        }
        ,
        t.prototype.stop = function() {
            for (var t, n = 0, i = this.Qt; n < i.length; n++)
                (e = i[n])();
            for (var r in this.Xt) {
                var e;
                (e = this.Xt[r]) && "function" == typeof e && e()
            }
            this.$t = ((t = {})[no.Checked] = {},
            t[no.Indeterminate] = {},
            t[no.Value] = {},
            t),
            this.Qt = [],
            this.Xt = {},
            this.Yt = !1,
            this.Jt = !1
        }
        ,
        t.prototype.removeInput = function(t) {
            var n = ks(t);
            n && (this.Xt[n] && (this.Xt[n](),
            delete this.Xt[n]),
            this.cn(n))
        }
        ,
        t.prototype.un = function(t, n, i) {
            var r = this;
            void 0 === n && (n = !1),
            void 0 === i && (i = !1);
            var e = ks(t);
            if (t && e && !this.ln(e, t)) {
                var s = vo(this.W, t);
                if (lo(t)) {
                    var u = ho(t);
                    "false" === s && this.Gt[u] === e ? delete this.Gt[u] : "true" === s && (this.Gt[u] = e)
                } else
                    this.on(e, no.Value, s);
                this.W.measurer.enqueue(function() {
                    var u = t.getBoundingClientRect()
                      , o = u.width > 0 && u.height > 0
                      , a = gs(t) ? $e(s) : s;
                    r.zt.enqueue({
                        Kind: O.VALUECHANGE,
                        Args: [e, a, n, o, i]
                    })
                })
            }
        }
        ,
        t.prototype.ln = function(t, n) {
            if (this.Vt[t])
                return !0;
            if ("select" !== as(n))
                return !1;
            for (var i = n.options, r = 0; r < i.length; r++)
                if (!ks(i[r]))
                    return this.Vt[t] = {
                        elem: n,
                        noFsIdInOption: !0
                    },
                    !0;
            return !1
        }
        ,
        t.prototype.sn = function(t, n) {
            var i = ks(t);
            i && this.dn(i, no.Indeterminate, n)
        }
        ,
        t.prototype.dn = function(t, n, i) {
            this.an(t, n) !== i && (this.on(t, n, i),
            this.zt.enqueue({
                Kind: O.ELEMENT_PROP,
                Args: [t, n, i]
            }))
        }
        ,
        t.prototype.nn = function() {
            var t = this
              , n = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
            return !(!n || !n.set || (this.pn(HTMLInputElement, "value"),
            this.pn(HTMLInputElement, "checked"),
            this.pn(HTMLSelectElement, "value"),
            this.pn(HTMLTextAreaElement, "value"),
            this.pn(HTMLSelectElement, "selectedIndex"),
            this.pn(HTMLOptionElement, "selected"),
            this.Qt.push(sr(HTMLInputElement, no.Indeterminate, function(n, i) {
                return t.sn(n, !!i)
            })),
            0))
        }
        ,
        t.prototype.wn = function() {
            try {
                for (var t in this.Zt) {
                    var n = this.Zt[t]
                      , i = n[0]
                      , r = n[1];
                    this.onChange(i, !1, r)
                }
            } finally {
                this.tn = null,
                this.Zt = {}
            }
        }
        ,
        t.prototype.gn = function(t) {
            var n = this;
            return function(i, r) {
                var e = fo(i)
                  , s = ks(e);
                if (s) {
                    t === no.Checked && n.dn(s, no.Checked, r);
                    var u = e !== i ? vo(n.W, e) : r;
                    n.hn(e, "".concat(u)) && n.vn(s, e, "".concat(u))
                }
            }
        }
        ,
        t.prototype.vn = function(t, n, i) {
            this.Zt[t] = [n, i],
            this.tn || (this.tn = new uo(this.wn.bind(this)),
            this.tn.start())
        }
        ,
        t.prototype.pn = function(t, n) {
            this.Qt.push(sr(t, n, this.gn(n)))
        }
        ,
        t.prototype.rn = function(t, n, i) {
            this.Xt[t] = ur(n, i, this.gn(i))
        }
        ,
        t
    }();
    function ho(t) {
        if (!t)
            return "";
        for (var n = t; n && "form" !== as(n); )
            n = Li(n);
        var i = n && "form" == as(n) ? Ss(n) : 0
          , r = t.name || "_fs_".concat(Ss(t));
        return "".concat(i, ":").concat(r)
    }
    function fo(t, n) {
        if (void 0 === n && (n = 2),
        n <= 0)
            return t;
        var i = as(t)
          , r = Li(t);
        return "option" !== i && "optgroup" !== i || (null == r ? void 0 : r.nodeType) !== xi ? t : fo(r, n - 1)
    }
    function vo(t, n) {
        if (!n)
            return "";
        switch (n.type) {
        case "checkbox":
        case "radio":
            return "".concat(n.checked);
        default:
            var i = t.options.cleanValueGetter && bi.inputGetValue ? bi.inputGetValue(n) : n.value;
            return i || (i = ""),
            "".concat(i)
        }
    }
    function lo(t) {
        return t && "radio" == t.type
    }
    var po = function() {
        function t(t, n, i) {
            var r = this;
            this.W = t,
            this.vt = i,
            this.mn = new Pu(void 0,g),
            this.yn = !1,
            this.bn = !1,
            this.kt = 1,
            this.Sn = [],
            this.kn = [],
            this._n = Tu.wrap(function(t) {
                var n = function(t, n) {
                    void 0 === n && (n = window);
                    var i = n.KeyframeEffect
                      , r = t.effect;
                    return r && (void 0 === i || r instanceof i) ? r : null
                }(t, r.An)
                  , i = function(t, n) {
                    void 0 === n && (n = window);
                    var i = n.DocumentTimeline
                      , r = t.timeline;
                    return r && (void 0 === i || r instanceof i) ? r : null
                }(t, r.An)
                  , e = yo(t);
                if ((null == n ? void 0 : n.target) && 0 !== ks(null == n ? void 0 : n.target) && i === r.An.document.timeline && e === L.Animation) {
                    var u = Ss(n.target);
                    if (r.mn.has(n)) {
                        var o = r.mn.get(n) || []
                          , a = (c = o[0],
                        o.slice(1));
                        -1 === a.indexOf(u) && (r.In(n, u),
                        r.mn.set(n, s(s([c], a, !0), [u], !1)))
                    } else {
                        var c = r.kt++;
                        r.mn.set(n, [c, u]),
                        r.En.enqueue({
                            Kind: O.KEYFRAME_EFFECT_CREATED,
                            Args: [c, u, mo(n), go(n)]
                        })
                    }
                    if (!r.mn.has(t)) {
                        var h = r.kt++
                          , f = (c = r.Tn(n),
                        r.Tn(i));
                        switch (r.mn.set(t, [h]),
                        r.En.enqueue({
                            Kind: O.ANIMATION_CREATED,
                            Args: [h, yo(t), c, f]
                        }),
                        t.playState) {
                        case "finished":
                            r.En.enqueue({
                                Kind: O.ANIMATION_METHOD_CALLED,
                                Args: [h, ["finish", []]]
                            });
                            break;
                        case "paused":
                        case "running":
                            r.En.enqueue({
                                Kind: O.ANIMATION_PROPERTY_SET,
                                Args: [h, ["currentTime", t.currentTime]]
                            });
                            var v = "paused" === t.playState ? "pause" : "play";
                            r.En.enqueue({
                                Kind: O.ANIMATION_METHOD_CALLED,
                                Args: [h, [v, []]]
                            })
                        }
                        r.vt.add(t, "cancel", !0, function() {
                            r.En.enqueue({
                                Kind: O.ANIMATION_METHOD_CALLED,
                                Args: [h, ["cancel", []]]
                            })
                        }),
                        r.vt.add(t, "finish", !0, function() {
                            r.En.enqueue({
                                Kind: O.ANIMATION_METHOD_CALLED,
                                Args: [h, ["finish", []]]
                            })
                        })
                    }
                }
            }, "_snapshotAnimation"),
            this.En = n,
            this.An = t.window,
            this.bn = function(t) {
                void 0 === t && (t = window);
                var n = t.Animation
                  , i = t.Document
                  , r = t.Element;
                return void 0 !== n && void 0 !== n.prototype && "effect"in n.prototype && "getAnimations"in i.prototype && "animate"in r.prototype
            }(this.An)
        }
        return Object.defineProperty(t.prototype, "nextId", {
            get: function() {
                return this.kt
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.snapshot = function(t) {
            var n;
            if (this.Cn(t))
                for (var i = 0, r = null !== (n = t.getAnimations()) && void 0 !== n ? n : []; i < r.length; i++) {
                    var e = r[i];
                    this._n(e)
                }
        }
        ,
        t.prototype.Cn = function(t) {
            return this.yn && this.bn && "getAnimations"in t
        }
        ,
        t.prototype.start = function(t) {
            var n, i = this;
            t.CaptureAnimations && (this.En.enqueue({
                Kind: O.REC_FEAT_SUPPORTED,
                Args: [vt.WebAnimation, this.bn]
            }),
            this.bn && (this.yn = !0,
            this.xn(null === (n = Fu(this.W, this.An.Element.prototype, "animate")) || void 0 === n ? void 0 : n.afterSync(function(t) {
                i._n(t.result)
            })),
            this.Rn("play"),
            this.Rn("pause"),
            this.Rn("cancel"),
            this.Rn("finish"),
            this.Kn("updateTiming"),
            this.Kn("setKeyframes"),
            this.Sn.push(sr(KeyframeEffect, "target", function(t, n) {
                i.In(t, Ss(n))
            }))))
        }
        ,
        t.prototype.stop = function() {
            this.vt.clearAll(),
            this.yn = !1,
            this.kn.forEach(function(t) {
                return t && t.disable()
            }),
            this.kn = [],
            this.Sn.forEach(function(t) {
                return t()
            }),
            this.Sn = []
        }
        ,
        t.prototype.In = function(t, n) {
            var i = this.Tn(t);
            i && this.En.enqueue({
                Kind: O.KEYFRAME_EFFECT_PROPERTY_SET,
                Args: [i, ["target", n]]
            })
        }
        ,
        t.prototype.Tn = function(t) {
            return (this.mn.get(t) || [])[0]
        }
        ,
        t.prototype.xn = function(t) {
            t && this.kn.push(t)
        }
        ,
        t.prototype.Rn = function(t) {
            var n, i = this;
            this.xn(null === (n = Fu(this.W, Animation.prototype, t)) || void 0 === n ? void 0 : n.afterSync(function(n) {
                var r = i.Tn(n.that);
                r && i.En.enqueue({
                    Kind: O.ANIMATION_METHOD_CALLED,
                    Args: [r, [t, []]]
                })
            }))
        }
        ,
        t.prototype.Kn = function(t) {
            var n, i = this;
            this.xn(null === (n = Fu(this.W, KeyframeEffect.prototype, t)) || void 0 === n ? void 0 : n.afterSync(function(n) {
                var r, e = i.Tn(n.that);
                if (e)
                    switch (t) {
                    case "updateTiming":
                        var s = n.args[0];
                        i.En.enqueue({
                            Kind: O.KEYFRAME_EFFECT_METHOD_CALLED,
                            Args: [e, ["updateTiming", [wo(s)]]]
                        });
                        break;
                    case "setKeyframes":
                        var u = n.args[0];
                        i.En.enqueue({
                            Kind: O.KEYFRAME_EFFECT_METHOD_CALLED,
                            Args: [e, ["setKeyframes", [(r = u,
                            (bi.arrayIsArray(r) ? r : [r]).map(function(t) {
                                var n = [];
                                return Yi(t, function(t, i) {
                                    n.push([i, t])
                                }),
                                [n, null, null, null]
                            }))]]]
                        })
                    }
            }))
        }
        ,
        t
    }();
    function wo(t) {
        return [t.delay, t.direction, t.duration, t.easing, t.endDelay, t.fill, t.iterationStart, "".concat(t.iterations)]
    }
    function go(t) {
        var n = t.getTiming()
          , i = t.composite
          , r = void 0 === i ? "replace" : i
          , e = t.iterationComposite
          , u = void 0 === e ? "replace" : e;
        return s(s([], wo(n), !0), [r, u], !1)
    }
    function mo(t) {
        return t.getKeyframes().map(function(t) {
            var n = t.composite
              , i = t.easing
              , r = t.offset
              , e = [];
            return Yi(t, function(t, n) {
                "composite" !== n && "computedOffset" !== n && "easing" !== n && "offset" !== n && e.push([n, t])
            }),
            [e, n, i, r]
        })
    }
    function yo(t) {
        return "animationName"in t ? L.CSSAnimation : "transitionProperty"in t ? L.CSSTransition : L.Animation
    }
    var bo, So, ko, _o, Ao = "#polyfillshadow";
    function Io(t, n, i, r) {
        var e;
        try {
            var s = "invalid: no sanitizers";
            if (!Ru(t.length > 0, s))
                throw s;
            for (var u = 0, o = t; u < o.length; u++)
                o[u].sanitize(i)
        } catch (t) {
            i[ko.Attrs] = void 0,
            i[ko.Text] = void 0,
            "sanitizer failed: ".concat(t),
            Tu.send("visitorPipeline#sanitize", {
                err: t
            })
        }
        var a = i;
        if (r)
            try {
                r(a)
            } catch (t) {
                "visitorPipeline action failed: ".concat(t),
                Tu.send("visitorPipeline#action", {
                    err: t
                })
            }
        if (!(null === (e = i[ko.Mirror].watchKind) || void 0 === e ? void 0 : e.has(Ge.Exclude)))
            for (var c = 0, h = n; c < h.length; c++) {
                var f = h[c];
                try {
                    f.visit(a)
                } catch (t) {
                    "visitor failed: ".concat(t),
                    Tu.send("visitorPipeline#visit", {
                        err: t
                    })
                }
            }
    }
    (So = bo || (bo = {}))[So.New = 0] = "New",
    So[So.Update = 1] = "Update",
    (_o = ko || (ko = {}))[_o.Context = 0] = "Context",
    _o[_o.Mirror = 1] = "Mirror",
    _o[_o.Node = 2] = "Node",
    _o[_o.Attrs = 3] = "Attrs",
    _o[_o.Text = 4] = "Text";
    var Eo = function() {
        function t() {
            this.jn = 0,
            this.Mn = {},
            this.Mn.next = this.Mn.prev = this.Mn
        }
        return t.prototype.first = function() {
            return this.Mn.next.value
        }
        ,
        t.prototype.last = function() {
            return this.Mn.prev.value
        }
        ,
        t.prototype.size = function() {
            return this.jn
        }
        ,
        t.prototype.push = function(t) {
            this.jn++,
            To(this.Mn.prev, {
                value: t
            })
        }
        ,
        t.prototype.unshift = function(t) {
            this.jn++,
            To(this.Mn, {
                value: t
            })
        }
        ,
        t.prototype.pop = function() {
            return this.jn > 0 && this.jn--,
            Co(this.Mn.prev)
        }
        ,
        t.prototype.shift = function() {
            return this.jn > 0 && this.jn--,
            Co(this.Mn.next)
        }
        ,
        t
    }();
    function To(t, n) {
        var i = t.next;
        n.next = i,
        n.prev = t,
        t.next = i.prev = n
    }
    function Co(t) {
        var n = t.prev
          , i = t.next;
        return n.next = i,
        i.prev = n,
        t.value
    }
    var xo, Ro, Ko = {
        timeRemaining: function() {
            return 1
        },
        didTimeout: !1
    };
    (Ro = xo || (xo = {}))[Ro.Idle = 0] = "Idle",
    Ro[Ro.Scheduled = 1] = "Scheduled",
    Ro[Ro.Processing = 2] = "Processing";
    var jo = function() {
        function t(t) {
            void 0 === t && (t = 1),
            this.Pn = t,
            this.kt = 1,
            this.On = xo.Idle,
            this.Nn = new Eo,
            this.Ln = {},
            this.Un = 1
        }
        return t.prototype.enqueue = function(t, n) {
            var i = this;
            if (void 0 === n && (n = !1),
            !(this.On === xo.Processing && this.Un > 16)) {
                var r = {
                    id: this.kt++,
                    isCompleted: !1,
                    process: t,
                    depth: this.Un,
                    store: n
                };
                return this.Nn.push(r),
                this.Fn(),
                n ? function() {
                    return i.Bn(r)
                }
                : void 0
            }
            ju("deep recursive task")
        }
        ,
        t.prototype.Bn = function(t) {
            try {
                var n = t.id
                  , i = this.Ln[n];
                return i ? (delete this.Ln[n],
                [i.result, i.err]) : (Mo(Ko, t),
                Ru(t.isCompleted, "queue#task"),
                [t.result, t.err])
            } finally {
                t.result = void 0,
                t.err = void 0
            }
        }
        ,
        t.prototype.flush = function() {
            this.Dn(Ko)
        }
        ,
        t.prototype.Fn = function() {
            this.On === xo.Idle && (this.On = xo.Scheduled,
            this.Hn())
        }
        ,
        t.prototype.Dn = function(t) {
            if (this.On === xo.Scheduled) {
                var n = 0;
                this.On = xo.Processing;
                for (var i = this.Nn.first(); i && Po(n, this.Pn, t); )
                    this.Un = i.depth + 1,
                    Mo(t, i),
                    i.isCompleted && (this.Nn.shift(),
                    !i.store || void 0 === i.result && void 0 === i.err || (this.Ln[i.id] = i)),
                    i = this.Nn.first(),
                    n++;
                this.On = xo.Idle,
                this.Un = 1,
                this.Nn.size() > 0 && this.Fn()
            }
        }
        ,
        t
    }();
    function Mo(t, n) {
        var i;
        if (!n.isCompleted)
            try {
                var r = (null === (i = n.process) || void 0 === i ? void 0 : i.call(n, t)) || {
                    done: !0
                };
                r.done && (n.isCompleted = !0,
                n.result = r.result,
                delete n.process)
            } catch (t) {
                n.isCompleted = !0,
                n.err = t,
                delete n.process
            }
    }
    function Po(t, n, i) {
        return t < n || i.timeRemaining() > 0
    }
    var Oo = function(t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(i, t),
        i.prototype.Hn = function() {
            var t = this;
            ye().then(function() {
                t.Dn(Se(36))
            })
        }
        ,
        i
    }(jo)
      , No = {
        INPUT: !0,
        TEXTAREA: !0,
        NOSCRIPT: !0
    }
      , Lo = function() {
        function t(t, n, i, r) {
            this.Wn = t,
            this.zn = n,
            this.qn = i,
            this.Vn = r,
            ds(),
            this.Nn = new Oo
        }
        return t.prototype.tokenizeNode = function(t, n, i, r, e, s, u) {
            var o = this
              , a = ms(n)
              , c = ms(i)
              , h = [];
            return function(n) {
                var i = ls;
                try {
                    return o.$n(t, a, c, r, h, e, s, u),
                    !0
                } catch (t) {
                    return ju("tryTokenize", {
                        err: t
                    }),
                    ls = i,
                    !1
                }
            }() || (h = []),
            h
        }
        ,
        t.prototype.$n = function(t, n, i, r, e, s, u, o) {
            for (var a, c, h = [{
                parentMirror: n,
                nextMirror: i,
                node: r
            }], f = function(t, n) {
                return function(i) {
                    i && t.push({
                        parentMirror: n,
                        nextMirror: null,
                        node: i
                    })
                }
            }; h.length; ) {
                var v = h.pop();
                if (v)
                    if ("string" != typeof v) {
                        var l = v.node
                          , d = this.Gn(t, v, e, s, u);
                        if (null != d && !(null === (a = d.watchKind) || void 0 === a ? void 0 : a.has(Ge.Exclude))) {
                            var p = d.type === xi ? l.shadowRoot : null;
                            (p || Fi(l)) && ((null === (c = d.watchKind) || void 0 === c ? void 0 : c.has(Ge.Defer)) ? o(l, Xe.Deferred) : (h.push("]"),
                            Pi(l, f(h, d)),
                            p && h.push({
                                parentMirror: d,
                                nextMirror: null,
                                node: p
                            }),
                            h.push("[")))
                        }
                    } else
                        "<" === v[0] && ++ls,
                        e.push(v)
            }
        }
        ,
        t.prototype.Gn = function(t, n, i, r, e) {
            var s, u, o, a, c = n.node, h = n.parentMirror, f = n.nextMirror, l = as(c), d = c.nodeName, p = c.nodeType;
            if ("script" === l || 8 === p)
                return null;
            var w = function(t) {
                var n;
                if (t === (null === (n = null == t ? void 0 : t.host) || void 0 === n ? void 0 : n.shadowRoot))
                    return function(t) {
                        return function(t) {
                            if (!Hi(t))
                                return !1;
                            try {
                                return fi(Function.prototype.toString, t)
                            } catch (t) {
                                return !1
                            }
                        }(t.constructor)
                    }(t) ? "#shadow" : Ao
            }(c);
            if (w === Ao)
                return null;
            var g, m, y, b, S, k = function(t, n, i, r) {
                void 0 === n && (n = t.nodeName),
                void 0 === i && (i = t.nodeType),
                void 0 === r && (r = as(t));
                var e = {
                    id: ls++,
                    name: n,
                    type: i,
                    tag: r
                };
                return cs.set(t, e),
                hs.set(e.id, t),
                e
            }(c, d, p, l);
            k.shadowRootType = w || (null == h ? void 0 : h.shadowRootType),
            h && (w ? (h.shadow = k,
            k.parent = h) : (g = h,
            y = f,
            As(m = k, this.Vn.bind(this)),
            m.parent = g,
            m.next = y,
            y && (m.prev = y.prev,
            y.prev = m),
            null == m.next ? (m.prev = g.lastChild,
            g.lastChild = m) : m.next.prev = m,
            null == m.prev ? g.child = m : m.prev.next = m)),
            k.mask = null === (s = k.parent) || void 0 === s ? void 0 : s.mask;
            try {
                switch (p) {
                case 3:
                    if (void 0 === k.mask && (k.mask = !k.parent || k.parent.mask),
                    k.mask) {
                        var _ = Li(c);
                        (null == _ ? void 0 : _.nodeType) === xi && this.zn.observe(_)
                    }
                    S = null !== (u = c.textContent) && void 0 !== u ? u : "";
                    break;
                case xi:
                    var A = c
                      , I = this.getWatchState(A, d, !!k.shadowRootType, t);
                    if (null != I) {
                        k.watchKind = I;
                        var E = !1;
                        I.has(Ge.Watch) && (E = !0,
                        null === (o = this.qn) || void 0 === o || o.observe(A)),
                        I.has(Ge.Unmask) && (k.mask = !1),
                        I.has(Ge.Mask) && (k.mask = !0),
                        (I.has(Ge.Exclude) || I.has(Ge.Defer)) && (E = !0),
                        E && this.zn.observe(A)
                    }
                    b = function(t, n) {
                        var i, r, e;
                        if (!v || "output" !== n) {
                            var s = {};
                            try {
                                if (t.hasAttributes())
                                    if (void 0 !== t.getAttributeNames)
                                        for (var u = 0, o = null !== (i = t.getAttributeNames()) && void 0 !== i ? i : []; u < o.length; u++) {
                                            var a = o[u];
                                            null != a && null != (f = t.getAttribute(a)) && (s[a] = "".concat(f))
                                        }
                                    else
                                        for (var c = null !== (e = null === (r = t.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== e ? e : 0, h = 0; h < c; h++) {
                                            var f, l = t.attributes[h];
                                            null != l && null != (f = l.value) && (s[l.name] = "".concat(f))
                                        }
                            } catch (t) {
                                "get attrs failed: ".concat(t),
                                Tu.send("nodeEncoder#getAttrs", {
                                    err: t,
                                    tagName: n
                                })
                            }
                            return s
                        }
                    }(A, l)
                }
            } catch (t) {
                Tu.send("nodeEncoder#_encodeNode", {
                    err: t
                })
            }
            if (!(null === (a = k.watchKind) || void 0 === a ? void 0 : a.has(Ge.Exclude)))
                for (var T = 0, C = e; T < C.length; T++) {
                    var x = C[T];
                    try {
                        x.preVisit && x.preVisit(k, c)
                    } catch (t) {
                        "pre-visitor failed: ".concat(t),
                        Tu.send("visitor.preVisit", {
                            err: t
                        })
                    }
                }
            var R = [bo.New, k, c, b, S]
              , K = this.Nn.enqueue(function(t) {
                var n = [];
                return Io(r, e, R, function(t) {
                    !function(t, n) {
                        var i = n[1]
                          , r = n[2]
                          , e = n[3]
                          , s = n[4]
                          , u = i.shadowRootType
                          , o = i.watchKind
                          , a = i.name
                          , c = i.type
                          , h = i.mask
                          , f = Cs(r)
                          , v = e;
                        if (10 === c) {
                            v || (v = {});
                            var l = r;
                            v.name = l.name || "",
                            v.publicId = l.publicId || "",
                            v.systemId = l.systemId || ""
                        }
                        !function(t, n, i, r, e, s, u, o, a) {
                            switch (n) {
                            default:
                                t.push("<".concat(i));
                                break;
                            case 10:
                                t.push("<!DOCTYPE"),
                                Ts(t, u);
                                break;
                            case 11:
                            case Ri:
                                var c = void 0;
                                c = r || i,
                                t.push("<".concat(c));
                                break;
                            case 8:
                                t.push("<object", ":_fs_comment_ignored", "");
                                break;
                            case 3:
                                t.push("<".concat(i), null != s ? s : "");
                                break;
                            case xi:
                                if (c = i,
                                a && (c = "svg:".concat(c)),
                                "script" === c) {
                                    t.push("<object", ":_fs_script_ignored", "");
                                    break
                                }
                                t.push("<".concat(c)),
                                e && (e.has(Ge.Exclude) && t.push(":".concat("_fs_excluded"), "true"),
                                e.has(Ge.Defer) && t.push(":".concat("_fs_deferred"), "true")),
                                o && t.push(":".concat("_fs_masked"), "true"),
                                Ts(t, u)
                            }
                        }(t, c, a, u, o, s, v, !!h, f)
                    }(n, t)
                }),
                {
                    done: !0,
                    result: n
                }
            }, !0);
            return Ru("function" == typeof K, "nodeEnc#resolver"),
            K && i.push(function() {
                var t = K();
                return t && t[0] || []
            }),
            k
        }
        ,
        t.prototype.getWatchState = function(t, n, i, r) {
            return i || null == r || No[n] ? this.Wn.isWatched(t) : r.get(t)
        }
        ,
        t
    }()
    //CHANGE
      , Uo = [{
        Selector: "input[type=password]",
        Consent: !0,
        Type: 3
        /*Consent: !1,
        Type: 1*/
    }, {
        Selector: "input[type=hidden]",
        Consent: !0,
        Type: 3
        /*Consent: !1,
        Type: 1*/
    }, {
        Selector: "[autocomplete^=cc-]",
        Consent: !0,
        Type: 3
        /*Consent: !1,
        Type: 1*/
    }, {
        Selector: "object:not([type^=\"image/\"])",
        Consent: !1,
        Type: 1
    }, {
        Selector: "embed:not([type^=\"image/\"])",
        Consent: !1,
        Type: 1
    }, {
        Selector: "noscript",
        Consent: !1,
        Type: 1
    }, {
        Selector: ".fs-hide",
        Consent: !1,
        Type: 1
    }, {
        Selector: ".fs-exclude",
        Consent: !1,
        //CHANGE, there was 1 instead of 3
        Type: 3
    }, {
        Selector: ".fs-exclude-without-consent",
        Consent: !0,
        //CHANGE, there was 1 instead of 3
        Type: 3
    }, {
        Selector: ".fs-mask",
        Consent: !1,
        //CHANGE, there was 2 instead of 3
        Type: 3
    }, {
        Selector: ".fs-mask-without-consent",
        Consent: !0,
        //CHANGE, there was 2 instead of 3
        Type: 3
    }, {
        Selector: ".fs-unmask",
        Consent: !1,
        Type: 3
    }, {
        Selector: ".fs-unmask-with-consent",
        Consent: !0,
        Type: 3
    }, {
        Selector: ".fs-block",
        Consent: !1,
        Type: 1
    }, {
        Selector: ".fs-record-with-consent",
        Consent: !0,
        Type: 1
    }]
      , Fo = function(t, n) {
        return t | n
    }
      , Bo = us.reduce(Fo, 0)
      , Do = ss.reduce(Fo, 0)
      , Ho = function() {
        function t(t) {
            void 0 === t && (t = 0),
            this.Qn = t
        }
        return t.prototype.has = function(t) {
            return !!(this.Qn & t)
        }
        ,
        t.prototype.set = function(n) {
            if (this.Qn & Do && n & Do) {
                var i = this.Qn | n
                  , r = t.Xn(i);
                this.Qn = t.Yn(r, this.Qn)
            } else
                this.Qn |= n
        }
        ,
        t.prototype.hasKinds = function() {
            return 0 !== this.Qn
        }
        ,
        t.areEqual = function(t, n) {
            return null == t && null == n || null != t && null != n && t.equals(n)
        }
        ,
        t.prototype.getStrictestPrivacyKind = function() {
            return t.Xn(this.Qn)
        }
        ,
        t.Xn = function(t) {
            for (var n = 0, i = ss; n < i.length; n++) {
                var r = i[n];
                if (t & r)
                    return r
            }
            return null
        }
        ,
        t.needsToObserve = function(t, n) {
            var i, r, e = null !== (i = null == t ? void 0 : t.Qn) && void 0 !== i ? i : 0;
            return !!((null !== (r = null == n ? void 0 : n.Qn) && void 0 !== r ? r : 0) & ~e & Bo)
        }
        ,
        t.combineKindsPreservePrivacy = function(n, i) {
            var r, e, s = t.Yn(null !== (r = null == n ? void 0 : n.Qn) && void 0 !== r ? r : 0, null !== (e = null == i ? void 0 : i.Qn) && void 0 !== e ? e : 0);
            return new t(s)
        }
        ,
        t.Yn = function(t, n) {
            return t & Do | n & Bo
        }
        ,
        t.prototype.equals = function(t) {
            return !!t && this.Qn === t.Qn
        }
        ,
        t
    }();
    function Wo(t) {
        var n = document.documentElement || document.createElement("div");
        try {
            return bi.elMatches(n, t),
            !0
        } catch (n) {
            return Tu.send("Browser rejected rule", {
                selector: t,
                err: n
            }, "warning"),
            !1
        }
    }
    var zo = {
        //CHANGE
        /*1: "exclude",
        2: "mask",
        3: "unmask",
        4: "watch",
        5: "keep",
        6: "defer"*/
    }
      , qo = function() {
        function t() {
            this.Jn = $o(),
            this.Zn = $o()
        }
        return t.prototype.forConsentState = function(t) {
            return t ? this.Jn : this.Zn
        }
        ,
        t.prototype.addElementBlockRules = function(t) {
            var n = this
              , i = $o()
              , r = $o();
            t.map(Qo).filter(function(t) {
                return Go(t.selector)
            }).forEach(function(t) {
                if (t.consent)
                    return t.kind === Ge.Unmask ? void i[t.kind].push(t) : void r[t.kind].push(t);
                i[t.kind].push(t),
                r[t.kind].push(t)
            });
            for (var e = document.documentElement || document.createElement("div"), s = function(t, i) {
                try {
                    if (0 === t.length)
                        return;
                    var r = t.map(function(t) {
                        return t.selector
                    }).join(", ");
                    bi.elMatches(e, r),
                    i.push(r)
                } catch (i) {
                    Tu.send("Browser rejected optimistic merge rule", {
                        err: i,
                        ruleCount: t.length
                    }, "warning"),
                    n.qt(t)
                }
            }, u = 0, o = os; u < o.length; u++) {
                var a = o[u];
                s(i[a], this.Jn[a]),
                s(r[a], this.Zn[a])
            }
        }
        ,
        t.prototype.addRule = function(t, n, i) {
            if (this.ti(t, n, i))
                return !0;
            switch (t) {
            case Ge.Watch:
            case Ge.Unmask:
            case Ge.Keep:
            case Ge.Defer:
                //CHANGE
                //break; 
            case Ge.Mask:
            case Ge.Exclude:
                break; //I added it here, remove if needed
            default:
                this.Jn[t].length = 0,
                this.Jn[t].push("*"),
                this.Zn[t].length = 0,
                this.Zn[t].push("*")
            }
            return !1
        }
        ,
        t.prototype.ti = function(t, n, i) {
            try {
                return !Go(i) || (n ? Xo(t, this.ni(t), i) : Xo(t, this.Zn, i) && Xo(t, this.Jn, i))
            } catch (t) {
                return Tu.send("Error adding block rule", {
                    selector: i,
                    err: t
                }),
                !1
            }
        }
        ,
        t.prototype.addElementBlock = function(t) {
            var n = Qo(t)
              , i = n.kind
              , r = n.consent
              , e = n.selector;
            return this.addRule(i, r, e)
        }
        ,
        t.prototype.qt = function(t) {
            for (var n = 0, i = t; n < i.length; n++) {
                var r = i[n]
                  , e = r.kind
                  , s = r.consent
                  , u = r.selector;
                this.addRule(e, s, u)
            }
        }
        ,
        t.prototype.ni = function(t) {
            var n = t === Ge.Unmask;
            return this.forConsentState(n)
        }
        ,
        t
    }()
      , Vo = function() {
        return Object.create ? Object.create(null) : {}
    };
    function $o() {
        for (var t = Vo(), n = 0, i = os; n < i.length; n++)
            t[i[n]] = [];
        return t
    }
    function Go(t) {
        return !t.match(is) && "" != t.trim()
    }
    function Qo(t) {
        var n = Ge.Exclude;
        switch (t.Type) {
        case Pt.Unset:
        case Pt.Exclude:
            n = Ge.Exclude;
            break;
        case Pt.Mask:
            n = Ge.Mask;
            break;
        case Pt.Unmask:
            n = Ge.Unmask;
            break;
        case Pt.Watch:
            n = Ge.Watch;
            break;
        case Pt.Keep:
            n = Ge.Keep;
            break;
        case Pt.Defer:
            n = Ge.Defer;
            break;
        default:
            _e(t.Type, "Unexpected block type: ".concat(t.Type))
        }
        return {
            kind: n,
            consent: t.Consent,
            selector: t.Selector
        }
    }
    function Xo(t, n, i) {
        var r = document.documentElement || document.createElement("div")
          , e = t;
        switch (e) {
        case Ge.Exclude:
        case Ge.Mask:
        case Ge.Unmask:
        case Ge.Watch:
        case Ge.Keep:
        case Ge.Defer:
            break;
        default:
            e = Ge.Exclude
        }
        if (0 == n[e].length)
            return !!Wo(i) && (n[e].push(i),
            !0);
        var s = n[e].length - 1
          , u = n[e][s].concat(", ", i);
        try {
            bi.elMatches(r, u)
        } catch (t) {
            return !!Wo(i) && (n[e].push(i),
            Tu.send("Browser rejected merged rule", {
                kind: zo[e],
                selector: i,
                err: t
            }, "warning"),
            !0)
        }
        return n[e][s] = u,
        !0
    }
    function Yo(t) {
        if (!(null == t ? void 0 : t.hasKinds()))
            return 0;
        var n = t.getStrictestPrivacyKind();
        return null === n ? 0 : ss.length - ss.indexOf(n)
    }
    var Jo = function() {
        function t() {
            this.ii = new qo,
            this.ri = !d
        }
        return t.prototype.initialize = function(t) {
            var n = t.blocks
              , i = t.deferreds
              , r = t.keeps
              , e = t.watches
              , u = t.canvasWatcherMode
              , o = t.noDefaultExclusions ? [] : [];//CHANGE s([], Uo, !0);
            if (n)
                for (var a = 0, c = n; a < c.length; a++) {
                    var h = c[a];
                    o.push(h)
                }
            if ((null != u ? u : Yt.Disabled) === Yt.Disabled && o.push({
                Consent: !1,
                Selector: "canvas",
                Type: Pt.Exclude
            }),
            e)
                for (var f = 0, v = e; f < v.length; f++) {
                    var l = v[f];
                    o.push({
                        Type: Pt.Watch,
                        Consent: J.RevokeConsent,
                        Selector: l.Selector
                    })
                }
            if (i)
                for (var d = 0, p = i; d < p.length; d++) {
                    var w = p[d];
                    o.push({
                        Type: Pt.Defer,
                        Consent: J.RevokeConsent,
                        Selector: w.Selector
                    })
                }
            if (this.ii.addElementBlockRules(o),
            r)
                for (var g = 0, m = r; g < m.length; g++) {
                    var y = m[g];
                    this.addElementKeep(y)
                }
        }
        ,
        t.prototype.isWatched = function(t) {
            var n, i = new Ho, r = this.ii.forConsentState(null !== (n = this.ei) && void 0 !== n ? n : J.RevokeConsent), e = function(t, n, i) {
                return Zo(t, n, i, !0)
            }(t, ss, r), s = e | Zo(t, us, r);
            return i.set(s),
            i.hasKinds() ? i : null
        }
        ,
        t.prototype.addElementBlock = function(t) {
            return this.ii.addElementBlock(t)
        }
        ,
        t.prototype.addElementKeep = function(t) {
            var n = Ge.Keep;
            return t.Type === Nt.Click && this.si(n, t.Consent, t.Selector)
        }
        ,
        t.prototype.si = function(t, n, i) {
            return this.ii.addRule(t, n, i)
        }
        ,
        t.prototype.getConsent = function() {
            return this.ei
        }
        ,
        t.prototype.initializeConsent = function(t) {
            void 0 === this.ei && this.ui(t, !1)
        }
        ,
        t.prototype.setConsent = function(t) {
            this.ui(t, !0)
        }
        ,
        t.prototype.ui = function(t, n) {
            void 0 === n && (n = !0),
            this.ei !== t && (this.ei = t,
            n && this.onConsentChange && this.onConsentChange())
        }
        ,
        t.prototype.allWatchedElements = function(t) {
            var n;
            if (!this.ri)
                return null;
            for (var i = new WeakMap, r = !1, e = function(t, n) {
                var e, s = null !== (e = i.get(t)) && void 0 !== e ? e : new Ho;
                s.set(n),
                i.set(t, s),
                r = !0
            }, s = this.ii.forConsentState(null !== (n = this.ei) && void 0 !== n && n), u = 0, o = os; u < o.length; u++)
                for (var a = o[u], c = 0, h = s[a]; c < h.length; c++) {
                    var f = h[c];
                    na(t) && bi.elMatches(t, f) && e(t, a);
                    for (var v = ta(t, f), l = 0; l < v.length; l++)
                        e(v[l], a)
                }
            return r ? i : null
        }
        ,
        t
    }();
    function Zo(t, n, i, r) {
        void 0 === r && (r = !1);
        for (var e = 0, s = 0, u = n; s < u.length; s++) {
            for (var o = u[s], a = !1, c = 0, h = i[o]; c < h.length; c++) {
                var f = h[c];
                if (bi.elMatches(t, f)) {
                    e |= o,
                    a = !0;
                    break
                }
            }
            if (a && r)
                break
        }
        return e
    }
    function ta(t, n) {
        return na(t) ? bi.elQuerySelectorAll(t, n) : function(t) {
            return t.nodeType === Ri
        }(t) ? bi.docQuerySelectorAll(t, n) : function(t) {
            return 11 === t.nodeType
        }(t) ? bi.docFragQuerySelectorAll(t, n) : t.querySelectorAll(n)
    }
    function na(t) {
        return t.nodeType === xi
    }
    var ia = function() {
        function t(t) {
            this.W = t,
            this.oi = {},
            this.ai = {},
            this.ci = {},
            this.hi = {}
        }
        return t.create = function(t) {
            var n, i = ra.isSupported(t.window);
            return null === (n = t.queue()) || void 0 === n || n.enqueue({
                Kind: O.REC_FEAT_SUPPORTED,
                Args: [vt.ResizeObserver, i]
            }),
            i ? new ra(t) : new ea(t)
        }
        ,
        t.prototype.collect = function(t) {
            var n = [];
            for (var i in this.ai)
                this.fi(t, n, parseInt(i, 10));
            return this.ai = {},
            n
        }
        ,
        t.prototype.isObserved = function(t) {
            return !!this.oi[t]
        }
        ,
        t.prototype.vi = function(t, n) {
            try {
                var i = Ss(t);
                if (!i)
                    return;
                if (t.nodeType != xi)
                    return;
                var r = function(t, n) {
                    if ((null == t ? void 0 : t.nodeType) !== xi)
                        return {
                            width: 0,
                            height: 0
                        };
                    if (!n || bi.arrayIsArray(n) && 0 === n.length)
                        return t.getBoundingClientRect();
                    var i = Array.isArray(n) ? n[0] : n;
                    switch (getComputedStyle(t).writingMode) {
                    case "horizontal-tb":
                        return {
                            width: i.inlineSize,
                            height: i.blockSize
                        };
                    case "vertical-lr":
                    case "vertical-rl":
                        return {
                            width: i.blockSize,
                            height: i.inlineSize
                        };
                    default:
                        return t.getBoundingClientRect()
                    }
                }(t, n);
                this.ai[i] = r;
                var e = this.W.queue();
                if (!this.oi[i] && void 0 !== e)
                    for (var s = this.li(i), u = 0, o = s; u < o.length; u++) {
                        var a = o[u];
                        e.enqueue(a)
                    }
            } catch (t) {}
        }
        ,
        t.prototype.fi = function(t, n, r) {
            for (var e = 0, s = this.li(r); e < s.length; e++) {
                var u = s[e];
                n.push(i(i({}, u), {
                    When: t
                }))
            }
        }
        ,
        t.prototype.li = function(t) {
            var n = this.ai[t];
            if (!n)
                return [];
            var i = ys(t);
            if (!i)
                return [];
            var r = i.watchKind
              , e = n.width
              , s = n.height
              , u = this.oi[t];
            if (u && u.width == e && u.height == s)
                return [];
            this.oi[t] = {
                width: e,
                height: s
            };
            var o = [];
            if (null == r ? void 0 : r.has(Ge.Watch)) {
                var a = 0 != e && 0 != s;
                (!!u && 0 != u.width && 0 != u.height) != a && o.push({
                    Kind: O.WATCHED_ELEM,
                    Args: [t, a]
                })
            }
            var c = bs(i.id)
              , h = c && "scrollLeft"in c;
            if ((null == r ? void 0 : r.has(Ge.Exclude)) || (null == r ? void 0 : r.has(Ge.Defer)) || i.mask || h) {
                var f = this.ci[t]
                  , v = 0 === e && 0 === s;
                if (v && (!f || 0 === f.width && 0 === f.height) || (o.push({
                    Kind: O.PLACEHOLDER_SIZE,
                    Args: [t, e, s]
                }),
                v ? delete this.ci[t] : this.ci[t] = {
                    width: e,
                    height: s
                }),
                h) {
                    var l = c.scrollWidth
                      , d = c.scrollHeight
                      , p = this.hi[t]
                      , w = 0 === l && 0 === d;
                    w && (!p || 0 === p.width && 0 === p.height) || (o.push({
                        Kind: O.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                        Args: [t, l, d]
                    }),
                    w ? delete this.hi[t] : this.hi[t] = {
                        width: l,
                        height: d
                    })
                }
            }
            return o
        }
        ,
        t
    }()
      , ra = function(t) {
        function i(n) {
            var i = t.call(this, n) || this;
            return i.di = new WeakMap,
            i.pi = new WeakMap,
            i.wi = new n.window.ResizeObserver(function(t) {
                be().then(function() {
                    for (var n = 0, r = t; n < r.length; n++) {
                        var e = r[n]
                          , s = e.target
                          , u = e.borderBoxSize;
                        i.vi(s, u)
                    }
                })
            }
            ),
            i.gi = new n.window.ResizeObserver(function(t) {
                be().then(function() {
                    for (var n = 0, r = t; n < r.length; n++) {
                        var e = r[n].target;
                        i.mi(e)
                    }
                })
            }
            ),
            i
        }
        return n(i, t),
        i.isSupported = function(t) {
            return "function" == typeof t.ResizeObserver
        }
        ,
        i.prototype.observe = function(t) {
            var n = this;
            if (t && t.nodeType == xi)
                try {
                    var i = t;
                    this.wi.unobserve(i),
                    this.wi.observe(i),
                    this.W.measurer.enqueue(function() {
                        n.yi(i)
                    })
                } catch (t) {
                    "ResizeWatcher.observe: caught exception ".concat(t),
                    ju("resize.observe", {
                        err: t
                    })
                }
        }
        ,
        i.prototype.unobserveSubtree = function(t) {
            try {
                t && t.nodeType === xi && (this.wi.unobserve(t),
                this.gi.unobserve(t))
            } catch (t) {}
        }
        ,
        i.prototype.nodeChanged = function(t) {
            var n = this
              , i = this.pi.get(t);
            "number" == typeof i && Ss(t) === i && this.W.measurer.enqueue(function() {
                n.vi(t)
            })
        }
        ,
        i.prototype.mi = function(t) {
            var n = this.di.get(t);
            if (n)
                for (var i in n) {
                    var r = ys(n[i]);
                    if (r) {
                        var e = bs(r.id);
                        e && this.vi(e)
                    } else
                        delete n[i]
                }
        }
        ,
        i.prototype.yi = function(t) {
            var n = this
              , i = Ss(t);
            if (i) {
                var r = function(t) {
                    for (var n = 0, i = t; ; ) {
                        if (n++ > 1e3)
                            return null;
                        if (!i || i.nodeType != xi)
                            return null;
                        var r = i;
                        if (getComputedStyle(r).display.indexOf("inline") < 0)
                            return r;
                        i = Li(i)
                    }
                }(t);
                if (r && r !== t) {
                    this.pi.set(t, i),
                    this.vi(t);
                    var e = this.di.get(r);
                    e || (e = Object.create(null),
                    this.di.set(r, e)),
                    e[i] = i,
                    bi.setWindowTimeout(this.W.window, Ti(function() {
                        n.gi.unobserve(r),
                        n.gi.observe(r)
                    }), 0)
                }
            }
        }
        ,
        i
    }(ia)
      , ea = function(t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(i, t),
        i.prototype.observe = function(t) {
            var n = this;
            if (t && t.nodeType == xi) {
                var i = t;
                !function(t) {
                    if (t) {
                        var n = bs(t.id);
                        if (n && ps(n, t))
                            for (var i = t, r = t.parent; r; r = r.parent) {
                                if (sa(r) || (r.watchedChildren = {}),
                                sa(i))
                                    for (var e in sa(i))
                                        delete sa(r)[e];
                                if (sa(r)[i.id] = i,
                                Zi(sa(r), 2))
                                    i = r;
                                else if (tr(sa(r), 2))
                                    break
                            }
                    }
                }(ms(t)),
                this.W.measurer.enqueue(function() {
                    n.vi(i)
                })
            }
        }
        ,
        i.prototype.unobserveSubtree = function(t) {
            var n = ms(t);
            n && function(t) {
                var n = bs(t.id);
                if (n && (tr(sa(t), 0) || ps(n, t)))
                    for (var i = sa(t) && tr(sa(t), 1) || ps(n, t) ? t.id : function(t) {
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n))
                                return n
                    }(sa(t)), r = i ? t.parent : null; r && sa(r) && sa(r)[i]; ) {
                        if (delete sa(r)[i],
                        Zi(sa(r), 1)) {
                            var e = r.id
                              , s = Ji(sa(r));
                            for (r = r.parent; r && sa(r) && sa(r)[e]; )
                                delete sa(r)[e],
                                sa(r)[s.id] = s,
                                r = r.parent;
                            break
                        }
                        r = r.parent
                    }
            }(n)
        }
        ,
        i.prototype.nodeChanged = function(t) {
            var n = this
              , i = function(t) {
                var n = []
                  , i = ms(t);
                if (i)
                    for (var r = [i], e = 0; r.length && ++e < 1e3; ) {
                        var s = r.pop()
                          , u = bs(s.id);
                        u && ps(u, s) && n.push(u),
                        sa(s) && Yi(sa(s), function(t) {
                            r.push(t)
                        })
                    }
                else {
                    for (var o = t; o && !Ss(o); )
                        o = Li(o);
                    o && ps(o) && n.push(o)
                }
                return n
            }(t);
            this.W.measurer.enqueue(function() {
                for (var t = 0, r = i; t < r.length; t++) {
                    var e = r[t];
                    n.vi(e)
                }
            })
        }
        ,
        i
    }(ia);
    function sa(t) {
        return t.watchedChildren
    }
    var ua = {
        attributeName: null,
        attributeNamespace: null,
        addedNodes: [],
        removedNodes: [],
        nextSibling: null,
        previousSibling: null,
        oldValue: null
    };
    function oa(t) {
        return i(i(i({}, ua), t), {
            type: "childList"
        })
    }
    function aa(t, n) {
        return 0 === n.length ? oa({
            target: t
        }) : oa({
            addedNodes: n,
            nextSibling: Oi(n[n.length - 1]),
            previousSibling: Ni(n[0]),
            target: t
        })
    }
    function ca(t) {
        var n = [];
        return Mi(t, function(t) {
            n.push(t)
        }),
        aa(t, n)
    }
    var ha = {
        sanitize: function(t) {
            var n, i = t[1], r = t[2], e = t[3], s = t[4];
            if (e) {
                var u = {};
                for (var o in e) {
                    var a = e[o]
                      , c = Es[n = o] || n.toLowerCase()
                      , h = js(i, r, c, a);
                    null !== h && (u[c] = h)
                }
                t[ko.Attrs] = u
            }
            if (s) {
                var f = function(t, n) {
                    if (!n)
                        return "";
                    if (t.parent && "style" === t.parent.tag) {
                        var i = bs(t.parent.id);
                        if (i && !Cs(i))
                            return ""
                    }
                    var r = n.length;
                    return r > xs ? (Tu.send("Ignoring huge text node", {
                        length: r,
                        max: xs
                    }, "warning"),
                    "") : t.mask ? $e(n) : n
                }(i, s);
                t[ko.Text] = f
            }
        }
    };
    function fa(t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            if (i.Kind === O.RESOLVABLE_EVENT) {
                var r = i.Args
                  , e = r[0]
                  , s = r[1];
                Ru("function" == typeof s, "resolveEvents"),
                t[n].Kind = e,
                t[n].Args = s()
            }
            Ru(i.Kind !== O.RESOLVABLE_EVENT, "resolveEvents")
        }
        return t
    }
    function va(t) {
        for (var n = [], i = 0, r = t; i < r.length; i++) {
            var e = r[i];
            if ("function" == typeof e)
                for (var s = 0, u = e(); s < u.length; s++) {
                    var o = u[s];
                    n.push(o)
                }
            else
                n.push(e)
        }
        return n
    }
    var la = function() {
        function t(t, n, i, r, e, s) {
            void 0 === i && (i = function() {}
            ),
            void 0 === e && (e = function() {}
            ),
            void 0 === s && (s = function() {}
            );
            var u = this;
            this.W = t,
            this.Wn = n,
            this.qn = r,
            this.bi = e,
            this.Si = s,
            this.ki = !1,
            this._i = [],
            this.Ai = [],
            this.Ii = [],
            this.Ei = [],
            this.Ti = [],
            this.Ci = !1,
            this.xi = [],
            this.Ri = [],
            this.Ki = this.W.window,
            this.acceptSanitizer(ha),
            this.acceptVisitor(this),
            this.zn = ia.create(this.W),
            this.Vn = function(t) {
                var n = bs(t.id);
                pa(n) && u.zn.unobserveSubtree(n),
                i(t)
            }
            ,
            this.ji = new Lo(n,this.zn,this.qn,this.Vn.bind(this)),
            Ru(!this.Wn.onConsentChange, "mutwatcher#onConsentChange"),
            this.Wn.onConsentChange = function() {
                return u.updateConsent()
            }
        }
        return t.prototype.start = function(t) {
            void 0 === t && (t = this.Ki.document),
            this.Mn = t,
            this.ki = !1;
            var n = !0;
            if (h)
                try {
                    this.Mi()
                } catch (t) {
                    "Error setting up IE workarounds for mutation watcher: ".concat(t),
                    n = !1
                }
            n && (this.Pi = new yi(this.Oi.bind(this)))
        }
        ,
        t.prototype.Oi = function(t) {
            for (var n = 0, i = t; n < i.length; n++) {
                var r = i[n];
                this.Ti.push(r)
            }
        }
        ,
        t.prototype.resizer = function() {
            return this.zn
        }
        ,
        t.prototype.stop = function() {
            if (this.Pi) {
                var t = bi.mutationDisconnect;
                t ? t(this.Pi) : this.Pi.disconnect()
            }
            var n = ms(this.Mn);
            n && Is(n, this.Vn.bind(this)),
            this.Ti = [],
            h && this.Ni(),
            this.Wn.onConsentChange = null,
            this.Li && (this.Li.disable(),
            this.Li = null)
        }
        ,
        t.prototype.processMutations = function(t) {
            var n = this;
            if (!this.Mn)
                return [];
            this.recordingIsDetached() && ju("Recording is detached", {
                inFrame: this.W.recording.inFrame,
                top: this.W.window.top === this.W.window
            });
            var i = []
              , r = !1
              , e = null
              , u = function(s) {
                return s || r ? (r || (e = n.Ui(t, i, n.Mn),
                r = !0),
                e) : null
            };
            if (this.Fi(t, i, u),
            this.Ci && (i.push({
                Kind: O.FAIL_THROTTLED,
                Args: [wt.SetPropertyHooks],
                When: t
            }),
            this.Ci = !1),
            this.Ti.length > 0 || this.Ai.length > 0) {
                var o = this.Bi(t, i, u)
                  , a = o[0]
                  , c = o[1];
                for (var h in c)
                    i.push({
                        Kind: O.MUT_ATTR,
                        Args: c[h],
                        When: t
                    });
                for (var h in a)
                    i.push({
                        Kind: O.MUT_TEXT,
                        Args: a[h],
                        When: t
                    })
            }
            var f = this._i;
            this._i = [];
            for (var v = 0; v < f.length; v++) {
                var l = f[v].shadowRoot;
                l && 0 != Ss(f[v]) && 0 == Ss(l) && (this.Di(l),
                this.Hi(null, t, i, f[v], l))
            }
            if (i.push.apply(i, this.zn.collect(t)),
            this.Ti = [],
            this.Ei.length > 0 && (i.push({
                Kind: O.DEFERRED_RESOLVED,
                Args: s([], this.Ei, !0),
                When: t
            }),
            this.Ei = []),
            this.Ii.length > 0) {
                for (var d = 0, p = this.Ii; d < p.length; d++) {
                    var w = p[d];
                    this.Ei.push(Ss(w)),
                    Fi(w) && this.Ti.push(ca(w))
                }
                this.Ii = []
            }
            return i
        }
        ,
        t.prototype.recordingIsDetached = function() {
            return !!this.Mn && this.Mn != this.Ki.document
        }
        ,
        t.prototype.Fi = function(t, n, i) {
            if (!this.ki && this.Mn) {
                window;
                var r = i(!0);
                this.Wi(r, t, n, null, this.Mn, null),
                this.zn.nodeChanged(this.Mn),
                this.Pi && this.Di(this.Mn),
                this.zi(),
                this.ki = !0,
                window
            }
        }
        ,
        t.prototype.Ui = function(t, n, i) {
            if (!i)
                return null;
            var r = pr()
              , e = this.Wn.allWatchedElements(i)
              , s = pr() - r;
            return n.push({
                Kind: O.TIMING,
                Args: [[F.Internal, D.Serialization, W.ApplyRules, t, s]],
                When: t
            }),
            e
        }
        ,
        t.prototype.zi = function() {
            var t = this;
            this.Li = Fu(this.W, Element.prototype, "attachShadow", !0),
            this.Li && this.Li.before(function(n) {
                n.that.shadowRoot || t._i.push(n.that)
            })
        }
        ,
        t.prototype.Di = function(t) {
            var n;
            try {
                var i = {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0,
                    attributeOldValue: !0,
                    characterDataOldValue: !0
                }
                  , r = bi.mutationObserve;
                r ? r(this.Pi, t, i) : null === (n = this.Pi) || void 0 === n || n.observe(t, i)
            } catch (t) {}
        }
        ,
        t.prototype.Bi = function(t, n, i) {
            for (var r, e, s = this, u = {}, o = {}, a = {}, c = {}, h = function(i) {
                try {
                    if (!ms(i))
                        return;
                    s.qi(t, n, ms(i));
                    var r = ms(Li(i));
                    if (r) {
                        var e = bs(r.id);
                        pa(e) && (c[r.id] = e)
                    }
                } catch (t) {
                    Tu.send("mutationwatcher#refreshElem", {
                        err: t
                    })
                }
            }, f = function(i) {
                var s, f;
                try {
                    var l = v.Ti[i]
                      , d = Ss(l.target);
                    if (!d)
                        return "continue";
                    switch (a[d] = l.target,
                    l.type) {
                    case "childList":
                        if ("style" === as(l.target) && !Cs(l.target)) {
                            h(l.target);
                            break
                        }
                        if (l.removedNodes.length > 0)
                            for (var p = 0; p < l.removedNodes.length; ++p)
                                (A = ms(l.removedNodes[p])) && A.id && v.qi(t, n, A);
                        l.addedNodes.length > 0 && (c[d] = l.target);
                        break;
                    case "characterData":
                        if ((A = ms(l.target)) && !ws(l.target, A)) {
                            var w = l.target.textContent;
                            if (l.oldValue === w)
                                break;
                            var g = Li(l.target);
                            if (g && "style" === as(g) && !Cs(g))
                                h(g);
                            else {
                                var m = [bo.Update, A, l.target, void 0, null != w ? w : void 0];
                                Io(v.xi, v.Ri, m, function(t) {
                                    var n;
                                    u[d] = [d, null !== (n = t[ko.Text]) && void 0 !== n ? n : ""]
                                })
                            }
                        }
                        break;
                    case "attributes":
                        var y = l.target
                          , b = as(y);
                        if (l.attributeNamespace == vn) {
                            "style" == b && l.attributeName == ln && v.Si(y);
                            break
                        }
                        if ("link" === b && "rel" === l.attributeName && Rs.test(null !== (r = l.oldValue) && void 0 !== r ? r : "")) {
                            h(y);
                            break
                        }
                        var S = function(t, n) {
                            return void 0 === n && (n = ms(t)),
                            null == n ? void 0 : n.watchKind
                        }(y)
                          , k = v.Wn.isWatched(y);
                        if (Yo(k) > Yo(S)) {
                            h(y);
                            break
                        }
                        if (Ho.needsToObserve(S, k)) {
                            v.zn.observe(y),
                            (null == k ? void 0 : k.has(Ge.Watch)) && (null === (e = v.qn) || void 0 === e || e.observe(y));
                            var _ = ms(y);
                            _ && (_.watchKind = Ho.combineKindsPreservePrivacy(S, k))
                        }
                        var A, I = (void 0 === (f = l.attributeNamespace) && (f = ""),
                        (null === f ? "" : {
                            "http://www.w3.org/1999/xlink": "xlink:",
                            "http://www.w3.org/XML/1998/namespace": "xml:",
                            "http://www.w3.org/2000/xmlns/": "xmlns:"
                        }[f] || "") + (l.attributeName || "")), E = l.target.getAttribute(I);
                        (A = ms(l.target)) && l.oldValue != E && (m = [bo.Update, A, l.target, (s = {},
                        s[I] = E || "",
                        s), void 0],
                        Io(v.xi, v.Ri, m, function(t) {
                            var n, i = null !== (n = t[ko.Attrs]) && void 0 !== n ? n : {};
                            for (var r in i) {
                                var e = i[r];
                                y.hasAttribute(r) || (e = null),
                                o["".concat(d, " ").concat(r)] = [d, r, e]
                            }
                        }))
                    }
                } catch (t) {}
            }, v = this, l = 0; l < this.Ti.length; ++l)
                f(l);
            for (var d = 0, p = this.Ai; d < p.length; d++) {
                var w = p[d];
                h(w)
            }
            for (var g in this.Ai = [],
            c) {
                var m = ms(y = c[g]);
                m && m.id && this.Vi(i, t, n, y, m)
            }
            for (var g in a) {
                var y = a[g];
                this.zn.nodeChanged(y)
            }
            return [u, o]
        }
        ,
        t.prototype.$i = function(t) {
            return this.ki && t && this.Mn ? (this.Gi(this.Mn),
            []) : []
        }
        ,
        t.prototype.Gi = function(t) {
            var n = this
              , i = Li(t);
            Ss(t) || !i ? Mi(t, function(t) {
                n.Gi(t)
            }) : this.Ti.push(aa(i, [t]))
        }
        ,
        t.prototype.Vi = function(t, n, i, r, e) {
            var s = []
              , u = e.child;
            for (Mi(r, function(t) {
                if (u)
                    for (var n = ms(t); u; ) {
                        if (!Ss(t)) {
                            var i = bs(u.id);
                            pa(i) && s.push({
                                insert: [r, t, i]
                            });
                            break
                        }
                        if (n && u.id == n.id) {
                            u = u.next;
                            break
                        }
                        s.push({
                            remove: u
                        }),
                        u = u.next
                    }
                else
                    s.push({
                        insert: [r, t, null]
                    })
            }); u; u = u.next)
                s.push({
                    remove: u
                });
            var o = !1
              , a = t(o);
            if (null === a && this.W.recording.flags().UseRuleOptimization) {
                try {
                    for (var c = 0, h = 0; h < s.length && !o; h++)
                        (v = s[h]).insert && (c += da(v.insert[1])) >= 1e3 && (o = !0)
                } catch (t) {
                    ju("ruleOpt", {
                        err: t
                    })
                }
                o && (a = t(o))
            }
            var f = !1;
            for (h = 0; h < s.length; h++) {
                var v;
                (v = s[h]).insert ? this.Wi(a, n, i, v.insert[0], v.insert[1], v.insert[2]) : v.remove && (f = !0,
                this.qi(n, i, v.remove))
            }
            Ru(!f, "mutwatcher#_diff")
        }
        ,
        t.prototype.Hi = function(t, n, i, r, e) {
            var s = Ss(r)
              , u = pr()
              , o = this.Qi(t, r, e, null)
              , a = pr() - u;
            o.length > 0 && i.push({
                Kind: O.RESOLVABLE_EVENT,
                Args: [O.MUT_SHADOW, function() {
                    return [s, va(o)]
                }
                ],
                When: n
            }, {
                Kind: O.TIMING,
                Args: [[F.Internal, D.Serialization, W.NodeEncoding, n, a]],
                When: n
            })
        }
        ,
        t.prototype.Wi = function(t, n, i, r, e, s) {
            var u = Ss(r) || -1
              , o = Ss(s) || -1
              , a = -1 === u && -1 === o
              , c = pr();
            window;
            var h = this.Qi(t, r, e, s);
            window;
            var f = pr() - c;
            h.length > 0 && (i.push({
                Kind: O.RESOLVABLE_EVENT,
                Args: [O.MUT_INSERT, function() {
                    return [u, o, va(h)]
                }
                ],
                When: n
            }, {
                Kind: O.TIMING,
                Args: [[F.Internal, D.Serialization, a ? W.DomSnapshot : W.NodeEncoding, n, f]],
                When: n
            }),
            this.bi())
        }
        ,
        t.prototype.Qi = function(t, n, i, r) {
            var e = this;
            return n && ws(n) ? [] : this.ji.tokenizeNode(t, n, r, i, this.xi, this.Ri, function(t, n) {
                switch (n) {
                case Xe.Immediate:
                    e.refreshElement(t);
                    break;
                case Xe.Deferred:
                    e.Ii.push(t)
                }
            })
        }
        ,
        t.prototype.qi = function(t, n, i) {
            var r = i.id;
            if (As(i, this.Vn.bind(this)),
            n.length > 0) {
                var e = n[n.length - 1];
                if (e.Kind == O.MUT_REMOVE)
                    return void e.Args.push(r)
            }
            n.push({
                Kind: O.MUT_REMOVE,
                Args: [r],
                When: t
            })
        }
        ,
        t.prototype.Mi = function() {
            var n = this;
            if (f) {
                var r = Object.getOwnPropertyDescriptor(Node.prototype, "textContent")
                  , e = r && r.set;
                if (!r || !e)
                    throw new Error("Missing textContent setter -- not safe to record mutations.");
                Object.defineProperty(Element.prototype, "textContent", i(i({}, r), {
                    set: function(t) {
                        try {
                            for (var n = void 0; n = Ui(this); )
                                this.removeChild(n);
                            if (null === t || "" == t)
                                return;
                            var i = (this.ownerDocument || document).createTextNode(t);
                            this.appendChild(i)
                        } catch (n) {
                            e && e.call(this, t)
                        }
                    }
                }))
            }
            this.Xi = new oo(t.ThrottleMax,t.ThrottleInterval,function() {
                return new uo(function() {
                    n.Ci = !0,
                    n.Ni()
                }
                ).start()
            }
            );
            var s = this.Xi.guard(function(t) {
                var n = t.cssText;
                t.cssText = n
            });
            this.Xi.open(),
            this.Yi = Fu(this.W, CSSStyleDeclaration.prototype, "setProperty"),
            this.Yi && this.Yi.afterSync(function(t) {
                s(t.that)
            }),
            this.Ji = Fu(this.W, CSSStyleDeclaration.prototype, "removeProperty"),
            this.Ji && this.Ji.afterSync(function(t) {
                s(t.that)
            })
        }
        ,
        t.prototype.Ni = function() {
            this.Xi && this.Xi.close(),
            this.Yi && this.Yi.disable(),
            this.Ji && this.Ji.disable()
        }
        ,
        t.prototype.updateConsent = function() {
            var t = this;
            this.Mn && Mi(this.Mn, function(n) {
                return t.refreshElement(n)
            })
        }
        ,
        t.prototype.refreshElement = function(t) {
            Ss(t) && this.Ai.push(t)
        }
        ,
        t.prototype.acceptSanitizer = function(t) {
            this.xi.push(t)
        }
        ,
        t.prototype.acceptVisitor = function(t) {
            this.Ri.push(t)
        }
        ,
        t.prototype.visit = function(t) {}
        ,
        t.prototype.preVisit = function(t, n) {
            if (t.type === xi && !ws(n, t)) {
                var i = n;
                i.shadowRoot && this.Di(i.shadowRoot)
            }
        }
        ,
        t.ThrottleMax = 1024,
        t.ThrottleInterval = 1e4,
        t
    }();
    function da(t, n) {
        void 0 === n && (n = !1);
        var i = 1;
        if (!t || t.nodeType !== xi)
            return i;
        var r = t;
        if (i += bi.elQuerySelectorAll(r, "*").length,
        n) {
            var e = r.shadowRoot;
            e && 11 === e.nodeType && (i += bi.docFragQuerySelectorAll(e, "*").length)
        }
        return i
    }
    function pa(t) {
        return Ru(!!t, "MutationWatcher#nodeNotFound")
    }
    var wa, ga = function(t, n, r) {
        try {
            if (-1 !== PerformanceObserver.supportedEntryTypes.indexOf(t)) {
                var e = new PerformanceObserver(function(t) {
                    ae.resolve().then(function() {
                        n(t.getEntries())
                    })
                }
                )
                  , s = i({
                    type: t,
                    buffered: !0
                }, r);
                return e.observe(s),
                e
            }
        } catch (t) {}
    }, ma = 0, ya = 1 / 0, ba = 0;
    function Sa(t) {
        for (var n = 0, i = t; n < i.length; n++) {
            var r = i[n];
            r.interactionId && (ya = bi.mathMin(ya, r.interactionId),
            ba = bi.mathMax(ba, r.interactionId),
            ma = ba ? (ba - ya) / 7 + 1 : 0)
        }
    }
    var ka = "first-input"
      , _a = "largest-contentful-paint"
      , Aa = "layout-shift"
      , Ia = "longtask"
      , Ea = "event"
      , Ta = "mark"
      , Ca = "measure"
      , xa = "navigation"
      , Ra = "paint"
      , Ka = "resource"
      , ja = "long-animation-frame"
      , Ma = function() {
        function t(t, n, i, r) {
            this.W = t,
            this.zt = n,
            this.vt = i,
            this.Zi = r,
            this.tr = !1,
            this.nr = !1,
            this.ir = Ht.DefaultOrgSettings.MaxPerfMarksPerPage,
            this.rr = 0,
            this.er = 0,
            this.sr = !1,
            this.ur = [],
            this.ar = !1
        }
        return t.prototype.initialize = function(t) {
            var n = t.resourceUploader
              , i = t.recTimings
              , r = t.recImgs
              , e = t.maxPerfMarksPerPage;
            this.cr = n,
            this.nr = i,
            this.tr = r,
            this.ir = e || Ht.DefaultOrgSettings.MaxPerfMarksPerPage
        }
        ,
        t.prototype.start = function() {
            var t = this;
            this.rr = 0;
            var n = this.hr();
            this.vr(n);
            var i = window.performance;
            i && ("interactionCount"in performance || wa || (wa = ga("event", Sa, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            })),
            this.ur.length > 0 && i.addEventListener && i.removeEventListener && this.vt.add(i, "resourcetimingbufferfull", !0, function() {
                t.zt.enqueue({
                    Kind: O.RESOURCE_TIMING_BUFFER_FULL,
                    Args: []
                })
            }),
            this.lr(),
            this.dr())
        }
        ,
        t.prototype.onLoad = function() {
            if (!this.sr) {
                this.sr = !0;
                var t = window.performance;
                t && t.timing && this.pr(at.Timing, t.timing, ht.Timing)
            }
        }
        ,
        t.prototype.tick = function() {
            this.lr()
        }
        ,
        t.prototype.stop = function() {
            this.vt.clearAll(),
            this.cr = void 0;
            var t = [];
            if (this.ur.length > 0) {
                for (var n = 0, i = this.ur; n < i.length; n++) {
                    var r = i[n];
                    t.push.apply(t, Pa(r))
                }
                this.ur = []
            } else
                window.performance && "function" == typeof window.performance.getEntries && (t = window.performance.getEntries());
            t.length > 300 && (t = t.slice(0, 300),
            this.zt.enqueue({
                Kind: O.RESOURCE_TIMING_BUFFER_FULL,
                Args: []
            })),
            this.lr(),
            this.Hn(t),
            this.W.taskQueue.flush()
        }
        ,
        t.prototype.Hn = function(t) {
            for (var n = this, i = function(t) {
                r.W.taskQueue.enqueue(function() {
                    return n.wr(t)
                })
            }, r = this, e = 0, s = t; e < s.length; e++)
                i(s[e])
        }
        ,
        t.prototype.hr = function() {
            var t = this;
            if (!window.PerformanceObserver || !window.performance)
                return [];
            "function" == typeof window.performance.getEntries && this.Hn(performance.getEntries());
            var n = [];
            return [Ea, ka, _a, Aa, Ia, Ta, Ca, xa, Ra, Ka, ja].forEach(function(i) {
                var r = {
                    buffered: !0
                };
                i === Ea && (r.durationThreshold = 40);
                var e = ga(i, t.Hn.bind(t), r);
                e && t.ur.push(e),
                n.push([i, !!e])
            }),
            n
        }
        ,
        t.prototype.lr = function() {
            var t = window.performance;
            if ((this.W.recording.inWebView || !this.W.recording.inFrame) && t) {
                var n = t.memory;
                if (n) {
                    var i = n.usedJSHeapSize - this.er;
                    (0 === this.er || bi.mathAbs(i / this.er) > .2) && (this.pr(at.Memory, n, ht.Memory),
                    this.er = n.usedJSHeapSize)
                }
            }
        }
        ,
        t.prototype.dr = function() {
            var t = {
                timeOrigin: dr.timeOrigin
            };
            this.pr(at.TimeOrigin, t, ht.TimeOrigin)
        }
        ,
        t.prototype.wr = function(t) {
            switch (t.entryType) {
            case Ea:
                this.gr(),
                this.pr(at.EventTiming, t, ht.EventTiming);
                break;
            case ka:
                this.pr(at.FirstInput, t, ht.FirstInput);
                break;
            case _a:
                this.pr(at.LargestContentfulPaint, t, ht.LargestContentfulPaint);
                break;
            case Aa:
                this.pr(at.LayoutShift, t, ht.LayoutShift);
                break;
            case Ia:
                this.pr(at.LongTask, t, ht.Measure);
                break;
            case ja:
                this.mr(t);
                break;
            case Ta:
                this.pr(at.Mark, t, ht.Measure);
                break;
            case Ca:
                this.pr(at.Measure, t, ht.Measure);
                break;
            case xa:
                this.pr(at.Navigation, t, ht.Navigation, {
                    name: xa
                });
                break;
            case Ra:
                this.pr(at.Paint, t, ht.Measure);
                break;
            case Ka:
                this.yr(t)
            }
        }
        ,
        t.prototype.mr = function(t) {
            if (t.scripts)
                for (var n = 0, i = t.scripts; n < i.length; n++) {
                    var r = i[n]
                      , e = {
                        sourceURL: "script"
                    };
                    "event-listener" === r.invokerType ? e.invoker = function(t) {
                        return t.replace(/\[src=(.*)?\]/gi, function(t, n) {
                            return "[src=".concat(Ns(n, {
                                source: "perfEntry",
                                type: "other"
                            }), "]")
                        })
                    }
                    : "classic-script" !== r.invokerType && "module-script" !== r.invokerType || (e.invoker = "script"),
                    this.pr(at.ScriptTiming, r, ht.ScriptTiming, e)
                }
            this.pr(at.LongAnimationFrame, t, ht.LongAnimationFrame)
        }
        ,
        t.prototype.yr = function(t) {
            if (this.nr) {
                var n = t.initiatorType;
                (this.tr || "img" !== n && "image" !== n) && this.pr(at.Resource, t, ht.Resource, {
                    name: n
                })
            }
        }
        ,
        t.prototype.pr = function(t, n, i, r) {
            if (void 0 === r && (r = {}),
            !this.atLimit(t)) {
                for (var e = [t], s = 0, u = i; s < u.length; s++) {
                    var o = u[s]
                      , a = n[o];
                    if (void 0 === a && (a = -1),
                    o in r) {
                        var c = r[o];
                        if (Hi(c))
                            a = c(a);
                        else {
                            var h = Ns(a, {
                                source: "perfEntry",
                                type: c
                            })
                              , f = a !== h;
                            a = this.br(t, n, h, f)
                        }
                    }
                    "target" !== o && "element" !== o || (a = Ss(a)),
                    e.push(a)
                }
                this.zt.enqueue({
                    Kind: O.PERF_ENTRY,
                    Args: e
                })
            }
        }
        ,
        t.prototype.br = function(t, n, i, r) {
            if (t !== at.Resource)
                return i;
            switch (n.initiatorType) {
            case "":
            case "xmlhttprequest":
            case "fetch":
            case "script":
            case "beacon":
                return i;
            case "css":
                if (this.cr && !r) {
                    var e = Ne("", i);
                    this.cr.uploadIfNeeded(this.W.window, e, "css")
                }
                return this.Zi.obfuscateUrl(i, "css");
            default:
                return this.Zi.obfuscateUrl(i)
            }
        }
        ,
        t.prototype.atLimit = function(t) {
            switch (t) {
            case at.Mark:
            case at.Measure:
                if (this.rr >= this.ir)
                    return !0;
                this.rr++
            }
            return !1
        }
        ,
        t.prototype.vr = function(t) {
            for (var n = window.performance, i = [vt.Performance, !!(null == n ? void 0 : n.timing), vt.PerformanceEntries, "function" == typeof (null == n ? void 0 : n.getEntries), vt.PerformanceMemory, !!(null == n ? void 0 : n.memory), vt.PerformanceObserver, !!window.PerformanceObserver, vt.PerformanceTimeOrigin, !!(null == n ? void 0 : n.timeOrigin)], r = 0, e = t; r < e.length; r++) {
                var s = e[r]
                  , u = s[0]
                  , o = s[1];
                switch (u) {
                case Aa:
                    i.push(vt.LayoutShift, o);
                    break;
                case ka:
                    i.push(vt.FirstInput, o);
                    break;
                case _a:
                    i.push(vt.LargestContentfulPaint, o);
                    break;
                case Ia:
                    i.push(vt.LongTask, o)
                }
            }
            this.zt.enqueue({
                Kind: O.REC_FEAT_SUPPORTED,
                Args: i
            })
        }
        ,
        t.prototype.gr = function() {
            var t = this;
            this.ar || (this.ar = !0,
            this.W.taskQueue.enqueue(function() {
                var n = wa ? ma : performance.interactionCount || 0;
                t.zt.enqueue({
                    Kind: O.PERF_ENTRY,
                    Args: [at.EventTimingCount, n]
                }),
                t.ar = !1
            }))
        }
        ,
        t
    }();
    function Pa(t) {
        var n = [];
        return t.takeRecords && (n = t.takeRecords()),
        t.disconnect(),
        n
    }
    function Oa(t) {
        var n = 0
          , i = {
            id: n++,
            edges: {}
        };
        return t.split("\n").forEach(function(t) {
            var r = t.trim();
            if ("" != r) {
                if (0 == r.indexOf("/") || r.lastIndexOf("/") == r.length - 1)
                    throw new Error("Leading and trailing slashes are not supported");
                var e = i
                  , s = r.split("/");
                s.forEach(function(t, i) {
                    var r = t.trim();
                    if ("" === r)
                        throw new Error("Empty elements are not allowed");
                    if ("**" != r && "*" != r && -1 != r.indexOf("*"))
                        throw new Error("Embedded wildcards are not supported");
                    var u = null;
                    r in e.edges && (u = e.edges[r]),
                    u || (u = {
                        id: n++,
                        edges: {}
                    },
                    e.edges[r] = u),
                    i == s.length - 1 && (u.term = !0),
                    e = u
                })
            }
        }),
        i
    }
    var Na = Oa("**")
      , La = "_fs_trimmed_values";
    function Ua(t, n, i) {
        if (!sc(i)) {
            try {
                for (var r = [], e = 0, s = i; e < s.length; e++) {
                    var u = s[e];
                    if (!u)
                        return;
                    var o = new Fa(!0 === u ? Na : u);
                    r.push(o)
                }
                var a = function(t, n) {
                    for (var i = {}, r = function(n) {
                        i[n] = function() {
                            for (var i = [], r = 0; r < arguments.length; r++)
                                i[r] = arguments[r];
                            for (var e = 0, s = t; e < s.length; e++) {
                                var u = s[e];
                                u[n].apply(u, i)
                            }
                        }
                    }, e = 0, s = ["push", "pop"]; e < s.length; e++)
                        r(s[e]);
                    return i
                }(r)
                  , c = 0
                  , h = [1]
                  , f = !1;
                return bi.jsonStringify(t, function(t, i) {
                    var e = i
                      , s = typeof e
                      , u = e && "object" === s;
                    if ("" === t && 1 === h.length)
                        return h[0]--,
                        u && h.push(bi.objectKeys(e).length),
                        e;
                    if (a.push(t),
                    r.some(function(t) {
                        return t.isRedacted(!u)
                    }) && (e = Ht.BlockedFieldValue,
                    u = !1),
                    c += t.length + 2,
                    u)
                        c += 2;
                    else if (function(t, n) {
                        return null != t && "symbol" !== n && "function" !== n
                    }(e, s))
                        try {
                            c += e.toString().length
                        } catch (t) {}
                    else
                        c += 4;
                    for (c >= n && (f ? e = void 0 : (e = La,
                    f = !0)),
                    h[h.length - 1]--,
                    u && e && e !== Ht.BlockedFieldValue ? h.push(bi.objectKeys(e).length) : a.pop(); h[h.length - 1] <= 0; )
                        h.pop(),
                        a.pop();
                    for (var o = 0, v = r; o < v.length; o++) {
                        var l = v[o].depth();
                        if (void 0 !== l && h.length > 0 && l !== h.length - 1)
                            throw new Error("Property matcher depth out of sync")
                    }
                    return e
                })
            } catch (i) {
                Tu.send("allowlistedJson", {
                    err: i,
                    maxLength: n,
                    ctor: t.constructor.name
                })
            }
            return "[error serializing ".concat(t.constructor.name, "]")
        }
    }
    var Fa = function() {
        function t(t) {
            this.Sr = 1;
            var n = [t];
            t.edges["**"] && n.push(t.edges["**"]),
            this.kr = [n]
        }
        return t.prototype._r = function() {
            if (this.kr.length <= 0)
                return [];
            var t = this.kr.length - 1
              , n = this.kr[t];
            return "number" == typeof n ? this.kr[t - 1] : n
        }
        ,
        t.prototype.depth = function() {
            return this.Sr
        }
        ,
        t.prototype.isRedacted = function(t) {
            var n = this._r();
            return 0 === n.length || t && !n.some(function(t) {
                return t.term
            })
        }
        ,
        t.prototype.push = function(t) {
            var n;
            this.Sr++;
            var i = this._r()
              , r = [];
            function e(n) {
                n.edges["**"] && (r.push(n.edges["**"], Ba(n)),
                e(n.edges["**"])),
                n.edges["*"] && r.push(n.edges["*"]),
                n.edges[t] && r.push(n.edges[t])
            }
            for (var s = 0, u = i; s < u.length; s++) {
                var o = u[s];
                if (null === (n = o.edges["**"]) || void 0 === n ? void 0 : n.term) {
                    r = [Ba(o), o.edges["**"]];
                    break
                }
                e(o)
            }
            var a = !1;
            if (r.length !== i.length)
                a = !0;
            else
                for (var c = 0; c < r.length; c++)
                    if (r[c].id !== i[c].id) {
                        a = !0;
                        break
                    }
            a ? this.kr.push(r) : ("number" != typeof this.kr[this.kr.length - 1] && this.kr.push(0),
            this.kr[this.kr.length - 1]++)
        }
        ,
        t.prototype.pop = function() {
            this.Sr > 0 && this.Sr--;
            var t = this.kr[this.kr.length - 1];
            "number" == typeof t && t > 1 ? this.kr[this.kr.length - 1]-- : this.kr.pop()
        }
        ,
        t
    }();
    function Ba(t) {
        var n = t.edges["**"];
        if (!n)
            throw new Error("Node must have double-wildcard edge.");
        return tr(t.edges, 1) ? {
            id: -n.id,
            edges: {
                "**": n
            }
        } : t
    }
    var Da = ("TextDecoder"in window)
      , Ha = ("Request"in window)
      , Wa = !R && !g
      , za = "ReadableStream"in window && "function" == typeof ReadableStream.prototype.tee
      , qa = function() {
        function t(t, n) {
            this.W = t,
            this.Ar = n,
            this.Ir = null,
            this.Er = Ht.DefaultOrgSettings.MaxAjaxPayloadLength,
            this.Tr = new Pu
        }
        return t.prototype.setMaxAjaxPayloadLength = function(t) {
            this.Er = t || Ht.DefaultOrgSettings.MaxAjaxPayloadLength
        }
        ,
        t.prototype.disable = function() {
            this.Ir && (this.Ir.disable(),
            this.Ir = null)
        }
        ,
        t.prototype.enable = function(t) {
            var n, i = this, s = mn(t, this.W.options.namespace), u = null === (n = null == s ? void 0 : s._w) || void 0 === n ? void 0 : n.fetch;
            (u || t.fetch) && (this.Ir = Fu(this.W, u ? s._w : t, "fetch"),
            this.Ir && (this.Ir.before(function(t) {
                i.Cr(t)
            }),
            this.Ir.afterSync(function(t) {
                var n = t.result;
                t.result = r(i, void 0, void 0, function() {
                    return e(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]),
                            [4, this.Rr(n, t.args[0], t.args[1])];
                        case 1:
                        case 2:
                            return i.sent(),
                            [3, 3];
                        case 3:
                            return [2, n]
                        }
                    })
                })
            })))
        }
        ,
        t.prototype.Cr = function(t) {
            if (za && Da && Wa)
                try {
                    var n = t.args[0]
                      , i = t.args[1];
                    if (Ha && !Gi(n) && "url"in n && n instanceof Request && Wa && n.body instanceof ReadableStream && Va(n.headers)) {
                        var r = Ga(n.clone().body, this.Er);
                        return void this.Tr.set(n, r)
                    }
                    if (i) {
                        var e = pc(i.headers);
                        if (i.body && i.body instanceof ReadableStream && Va(e) && Wa) {
                            var s = i.body.tee()
                              , u = s[0]
                              , o = s[1];
                            i.body = o,
                            r = Ga(u, this.Er),
                            this.Tr.set(i, r)
                        }
                    }
                } catch (t) {}
        }
        ,
        t.prototype.Rr = function(t, n, i) {
            return r(this, void 0, ae, function() {
                var s, u, o, a, c, h;
                return e(this, function(f) {
                    switch (f.label) {
                    case 0:
                        return s = "GET",
                        u = "",
                        c = !1,
                        "string" != typeof n ? [3, 1] : (u = n,
                        [3, 5]);
                    case 1:
                        return "url"in n ? (u = n.url,
                        s = n.method,
                        o = n.body,
                        a = n.headers,
                        c = !!n.signal,
                        this.Tr.has(n) ? [4, this.Kr(n)] : [3, 3]) : [3, 4];
                    case 2:
                        o = f.sent(),
                        f.label = 3;
                    case 3:
                        return [3, 5];
                    case 4:
                        u = "".concat(n),
                        f.label = 5;
                    case 5:
                        return u ? i ? (s = i.method || s,
                        a = pc(i.headers),
                        this.Tr.has(i) ? [4, this.Kr(i)] : [3, 7]) : [3, 9] : [2];
                    case 6:
                        return o = f.sent(),
                        [3, 8];
                    case 7:
                        o = i.body || o,
                        f.label = 8;
                    case 8:
                        c = !!i.signal || c,
                        f.label = 9;
                    case 9:
                        return h = function(t) {
                            return r(this, void 0, ae, function() {
                                var n, i, r, s, u;
                                return e(this, function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 6, , 7]),
                                        [4, t];
                                    case 1:
                                        switch (n = e.sent(),
                                        u = n.ok ? ut.OK : ut.ERROR,
                                        n.type) {
                                        case "opaque":
                                        case "opaqueredirect":
                                            u = ut.OPAQUE;
                                            break;
                                        case "error":
                                            u = ut.ERROR
                                        }
                                        if (!$a(((i = n.headers).get("content-type") || Ht.TextPlain).split(";")[0]))
                                            return [2, Xa(u, n.status, {
                                                headers: i,
                                                body: null
                                            })];
                                        r = null,
                                        e.label = 2;
                                    case 2:
                                        return e.trys.push([2, 4, , 5]),
                                        [4, n.clone().text()];
                                    case 3:
                                        return r = e.sent(),
                                        [3, 5];
                                    case 4:
                                        return e.sent(),
                                        u = ut.ABORTED,
                                        [3, 5];
                                    case 5:
                                        return [2, Xa(u, n.status, {
                                            headers: i,
                                            body: r
                                        })];
                                    case 6:
                                        return s = e.sent(),
                                        [2, Xa(u = (o = s) && "AbortError" === o.name ? ut.ABORTED : ut.ERROR, 0, {
                                            headers: {
                                                forEach: function() {}
                                            },
                                            body: void 0
                                        })];
                                    case 7:
                                        return [2]
                                    }
                                    var o
                                })
                            })
                        }(t),
                        c && u.search(/\/(?:graph|graphql|gql)/i) > -1 ? [4, ae.race([h, he(5e3)])] : [3, 11];
                    case 10:
                        f.sent(),
                        f.label = 11;
                    case 11:
                        return this.Ar.startRequest(s, u, {
                            body: function() {
                                return o
                            },
                            headers: a
                        }, h),
                        [2]
                    }
                })
            })
        }
        ,
        t.prototype.Kr = function(t) {
            return r(this, void 0, ae, function() {
                var n;
                return e(this, function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, ae.race([this.Tr.get(t), he(5e3).then(function() {
                            return null
                        })])];
                    case 1:
                        return n = i.sent(),
                        this.Tr["delete"](t),
                        [2, n]
                    }
                })
            })
        }
        ,
        t
    }();
    function Va(t) {
        var n = Ht.TextPlain;
        return null == t || t.forEach(function(t, i) {
            "content-type" === i.toLowerCase() && (n = t)
        }),
        $a(n)
    }
    function $a(t) {
        switch (t) {
        case "application/json":
        case "application/vnd.api+json":
        case Ht.TextPlain:
            return !0
        }
        return !1
    }
    function Ga(t, n) {
        return r(this, void 0, ae, function() {
            var i, r, s, u, o;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    if (!Da)
                        return [2, ""];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    i = new TextDecoder,
                    r = t.getReader(),
                    s = le(r, n).then(function(t) {
                        return t.map(function(t) {
                            return i.decode(t)
                        }).join("")
                    }),
                    u = he(2e3).then(function() {
                        return "_fs_timeout"
                    }),
                    [4, ae.race([s, u])];
                case 2:
                    return "_fs_timeout" === (o = e.sent()) ? (r.cancel()["catch"](function(t) {}),
                    [2, ""]) : [2, o];
                case 3:
                    return e.sent(),
                    [2, ""];
                case 4:
                    return [2]
                }
            })
        })
    }
    var Qa = function() {
        function t(t, n) {
            this.W = t,
            this.Ar = n,
            this.jr = new WeakMap
        }
        return t.prototype.disable = function() {
            this.Mr && (this.Mr.disable(),
            this.Mr = null),
            this.Pr && (this.Pr.disable(),
            this.Pr = null),
            this.Or && (this.Or.disable(),
            this.Or = null)
        }
        ,
        t.prototype.Nr = function(t) {
            var n = this.jr.get(t);
            if (n)
                return n;
            var i = {};
            return this.jr.set(t, i),
            i
        }
        ,
        t.prototype.enable = function(t) {
            var n, i, s, u, o = this, a = mn(t, this.W.options.namespace), c = (null === (n = null == a ? void 0 : a._w) || void 0 === n ? void 0 : n.XMLHttpRequest) || t.XMLHttpRequest;
            if (c) {
                var h = c.prototype;
                this.Mr = null === (i = Fu(this.W, h, "open")) || void 0 === i ? void 0 : i.before(function(t) {
                    var n = o.Nr(t.that);
                    n.method = t.args[0],
                    n.url = t.args[1]
                }),
                this.Or = null === (s = Fu(this.W, h, "setRequestHeader")) || void 0 === s ? void 0 : s.before(function(t) {
                    var n = t.that
                      , i = t.args[0]
                      , r = t.args[1]
                      , e = o.Nr(n);
                    e.headers || (e.headers = []),
                    e.headers.push([i, r])
                }),
                this.Pr = null === (u = Fu(this.W, h, "send")) || void 0 === u ? void 0 : u.before(function(t) {
                    var n = t.that
                      , i = t.args[0]
                      , s = o.Nr(n)
                      , u = s.url
                      , a = s.method
                      , c = s.headers;
                    void 0 !== u && void 0 !== a && (o.jr["delete"](n),
                    o.Ar.startRequest(a, u, {
                        headers: pc(c),
                        body: i
                    }, function(t) {
                        return r(this, void 0, ae, function() {
                            var n, i;
                            return e(this, function(r) {
                                switch (r.label) {
                                case 0:
                                    return [4, new ae(function(n) {
                                        t.addEventListener("load", function() {
                                            return n(ut.OK)
                                        }),
                                        t.addEventListener("abort", function() {
                                            return n(ut.ABORTED)
                                        }),
                                        t.addEventListener("readystatechange", function() {
                                            t.readyState === XMLHttpRequest.DONE && 0 !== t.status && (t.status < 400 ? n(ut.OK) : n(ut.ERROR))
                                        }),
                                        t.addEventListener("error", function() {
                                            t.readyState === t.UNSENT ? n(ut.ABORTED) : n(ut.ERROR)
                                        })
                                    }
                                    )];
                                case 1:
                                    return n = r.sent(),
                                    i = function(t) {
                                        if (t)
                                            return {
                                                forEach: function(n) {
                                                    for (var i, r = /([^:]*):\s+(.*)(?:\r\n|$)/g; i = r.exec(t); )
                                                        n(i[2], i[1])
                                                }
                                            }
                                    }(t.getAllResponseHeaders()),
                                    [2, Xa(n, t.status, {
                                        headers: i,
                                        body: function() {
                                            return "text" === t.responseType ? t.responseText : t.response
                                        }
                                    })]
                                }
                            })
                        })
                    }(n)))
                })
            }
        }
        ,
        t.prototype.setMaxAjaxPayloadLength = function(t) {}
        ,
        t
    }();
    function Xa(t, n, i) {
        return {
            state: t,
            status: n,
            data: i
        }
    }
    var Ya, Ja, Za, tc, nc, ic = /^data:/i, rc = function() {
        function t(t, n) {
            this.W = t,
            this.zt = n,
            this.yn = !1,
            this.Lr = new ec(t,n),
            this.Ur = new Qa(t,this.Lr),
            this.Fr = new qa(t,this.Lr)
        }
        return t.prototype.isEnabled = function() {
            return this.yn
        }
        ,
        t.prototype.start = function(t) {
            t.AjaxWatcher && (this.yn || (this.yn = !0,
            this.zt.enqueue({
                Kind: O.REC_FEAT_SUPPORTED,
                Args: [vt.Ajax, !0]
            }),
            this.Ur.enable(this.W.window),
            this.Fr.enable(this.W.window)))
        }
        ,
        t.prototype.stop = function() {
            this.yn && (this.yn = !1,
            this.Ur.disable(),
            this.Fr.disable())
        }
        ,
        t.prototype.tick = function() {
            this.Lr.tick()
        }
        ,
        t.prototype.setWatches = function(t) {
            this.Lr.setWatches(t)
        }
        ,
        t.prototype.initialize = function(t) {
            this.Lr.initialize(t),
            this.Fr.setMaxAjaxPayloadLength(t.maxAjaxPayloadLength)
        }
        ,
        t
    }(), ec = function() {
        function t(t, n) {
            this.W = t,
            this.zt = n,
            this.Br = [],
            this.Dr = {},
            this.Hr = {},
            this.Wr = [],
            this.Er = 0;
            var i = Ht.DefaultOrgSettings;
            this.initialize({
                requests: i.HttpRequestHeadersAllowlist,
                responses: i.HttpResponseHeadersAllowlist,
                maxAjaxPayloadLength: i.MaxAjaxPayloadLength
            })
        }
        return t.prototype.zr = function(t) {
            for (var n = !1, i = !1, r = [], e = [], s = 0, u = this.Br; s < u.length; s++) {
                var o = u[s]
                  , a = o.urlPattern
                  , c = o.reqFields
                  , h = o.rspFields;
                if (n && i)
                    break;
                a.test(t) && (!1 === c && (r = [!1],
                n = !0),
                n || r.push(c),
                !1 === h && (e = [!1],
                i = !0),
                i || e.push(h))
            }
            return [r, e]
        }
        ,
        t.prototype.qr = function(t) {
            this.Wr.push(t)
        }
        ,
        t.prototype.setWatches = function(t) {
            this.Br = t.map(function(t) {
                return {
                    urlPattern: new RegExp(t.URLRegex),
                    reqFields: vc(t.RecordReq, t.ReqAllowlist),
                    rspFields: vc(t.RecordRsp, t.RspAllowlist)
                }
            })
        }
        ,
        t.prototype.initialize = function(t) {
            var n = this
              , i = t.requests
              , r = t.responses
              , e = t.maxAjaxPayloadLength;
            this.Dr = {},
            this.Hr = {},
            null == i || i.forEach(function(t) {
                return n.Dr[t] = !0
            }),
            null == r || r.forEach(function(t) {
                return n.Hr[t] = !0
            }),
            this.Er = e || Ht.DefaultOrgSettings.MaxAjaxPayloadLength
        }
        ,
        t.prototype.addHeaderAllowlist = function(t, n) {
            var i = this;
            null == t || t.forEach(function(t) {
                return i.Dr[t] = !0
            }),
            null == n || n.forEach(function(t) {
                return i.Hr[t] = !0
            })
        }
        ,
        t.prototype.tick = function() {
            for (var t = 0; t < this.Wr.length; t++)
                this.zt.enqueue({
                    Kind: O.AJAX_REQUEST,
                    Args: this.Wr[t]
                });
            this.Wr = []
        }
        ,
        t.prototype.startRequest = function(t, n, i, s) {
            var u, o;
            return r(this, void 0, ae, function() {
                var r, a, c, h, f, v, l, d, p, w, g, m, y;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return ic.test(n) ? [2] : (r = pr(),
                        a = function(t, n) {
                            return Oe.resolveToDocument(t, n)
                        }(this.W.window, n),
                        c = this.zr(a),
                        h = c[0],
                        f = c[1],
                        [4, this.Vr(h, i)]);
                    case 1:
                        return v = e.sent(),
                        [4, s["catch"](function() {
                            return Xa(ut.ERROR, 0, {
                                headers: {
                                    forEach: function() {}
                                },
                                body: void 0
                            })
                        })];
                    case 2:
                        return l = e.sent(),
                        d = l.state,
                        p = l.status,
                        w = l.data,
                        g = pr() - r,
                        [4, this.$r(f, w)];
                    case 3:
                        return m = e.sent(),
                        y = [t, Ns(a, {
                            source: "event",
                            type: O.AJAX_REQUEST
                        }), g, p, v.headers, m.headers, r, v.size, m.size, null !== (u = v.text) && void 0 !== u ? u : null, null !== (o = m.text) && void 0 !== o ? o : null, v.legibility, m.legibility, d],
                        this.qr(y),
                        [2]
                    }
                })
            })
        }
        ,
        t.prototype.Vr = function(t, n) {
            return lc(this.Dr, t, this.Er, n)
        }
        ,
        t.prototype.$r = function(t, n) {
            return lc(this.Hr, t, this.Er, n)
        }
        ,
        t
    }();
    function sc(t) {
        return 0 === t.length || t.indexOf(!1) > -1
    }
    function uc(t, n, i) {
        return [t.length, fc(t, n, i)]
    }
    function oc(t, n, i) {
        var r = void 0;
        return sc(n) || (r = Ua(t, i, n)),
        [hc(t), r]
    }
    function ac(t, n) {
        var i = t.byteLength
          , r = void 0;
        return sc(n) || (r = "[ArrayBuffer]"),
        [i, r]
    }
    function cc(t, n, i) {
        return r(this, void 0, ae, function() {
            var r, s, u, o, a, c, h;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    if (s = (r = t).size,
                    u = r.type,
                    sc(n))
                        return [2, [s, void 0]];
                    if (o = function(t) {
                        Tu.send("ajaxwatcher#_httpBodyBlob", {
                            err: t,
                            blobType: u,
                            blobSize: s
                        }, "warning")
                    }
                    ,
                    !$a(u))
                        return [3, 4];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, r.text()["catch"](function(t) {
                        o(t)
                    })];
                case 2:
                    return (a = e.sent()) && (c = fc(a, n, i)) ? [2, [s, c]] : [3, 4];
                case 3:
                    return h = e.sent(),
                    o(h),
                    [3, 4];
                case 4:
                    return [2, [s, "[Blob]"]]
                }
            })
        })
    }
    function hc(t) {
        try {
            return bi.jsonStringify(t).length
        } catch (t) {}
        return 0
    }
    function fc(t, n, i) {
        if (!sc(n))
            try {
                return Ua(bi.jsonParse(t), i, n)
            } catch (r) {
                return n.length > 0 && n.every(function(t) {
                    return !0 === t
                }) ? t.slice(0, i) : void 0
            }
    }
    function vc(t, n) {
        switch (t) {
        default:
        case kt.Elide:
            return !1;
        case kt.Record:
            return !0;
        case kt.Allowlist:
            try {
                return Oa(n)
            } catch (t) {
                return "error parsing field allowlist (".concat(n, ": ").concat(t),
                !1
            }
        }
    }
    function lc(t, n, i, s) {
        var u;
        return r(this, void 0, ae, function() {
            var r, o, a, c, h, f, v;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    return r = "",
                    null === (u = s.headers) || void 0 === u || u.forEach(function(n, i) {
                        var e = i.toLowerCase()
                          , s = t[e];
                        r += "".concat(e).concat(s ? ": ".concat(n) : "").concat("\r\n")
                    }),
                    "function" != typeof (o = null == s ? void 0 : s.body) ? [3, 2] : [4, o()];
                case 1:
                    return a = e.sent(),
                    [3, 3];
                case 2:
                    a = o,
                    e.label = 3;
                case 3:
                    return [4, dc(n, a, i)];
                case 4:
                    return c = e.sent(),
                    h = c[0],
                    f = c[1],
                    v = 0 !== h || f ? et.NotEmpty : et.Unknown,
                    [2, {
                        headers: r,
                        text: f,
                        size: h,
                        legibility: v
                    }]
                }
            })
        })
    }
    function dc(t, n, i) {
        return void 0 === i && (i = Ht.DefaultOrgSettings.MaxAjaxPayloadLength),
        r(this, void 0, ae, function() {
            var r;
            return e(this, function(e) {
                if (null == n)
                    return [2, [0, void 0]];
                switch (typeof n) {
                default:
                    return [2, [-1, sc(t) ? void 0 : "[unknown]"]];
                case "string":
                    return [2, uc(n, t, i)];
                case "object":
                    switch (r = n.constructor) {
                    case Object:
                    default:
                        return [2, oc(n, t, i)];
                    case Blob:
                        return [2, cc(n, t, i)];
                    case ArrayBuffer:
                        return [2, ac(n, t)];
                    case Document:
                    case FormData:
                    case URLSearchParams:
                    case ReadableStream:
                        return [2, [-1, sc(t) ? void 0 : "".concat(r.name)]]
                    }
                }
                return [2]
            })
        })
    }
    function pc(t) {
        return t ? Bi(t) ? {
            forEach: function(n) {
                for (var i = 0, r = t; i < r.length; i++) {
                    var e = r[i]
                      , s = e[0];
                    n(e[1], s)
                }
            }
        } : "function" == typeof t.forEach ? t : {
            forEach: function(n) {
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && n(t[i], i)
            }
        } : t
    }
    (Ja = Ya || (Ya = {}))[Ja.CSS_INHERIT = 0] = "CSS_INHERIT",
    Ja[Ja.CSS_PRIMITIVE_VALUE = 1] = "CSS_PRIMITIVE_VALUE",
    Ja[Ja.CSS_VALUE_LIST = 2] = "CSS_VALUE_LIST",
    Ja[Ja.CSS_CUSTOM = 3] = "CSS_CUSTOM",
    (tc = Za || (Za = {}))[tc.CSS_UNKNOWN = 0] = "CSS_UNKNOWN",
    tc[tc.CSS_NUMBER = 1] = "CSS_NUMBER",
    tc[tc.CSS_PERCENTAGE = 2] = "CSS_PERCENTAGE",
    tc[tc.CSS_EMS = 3] = "CSS_EMS",
    tc[tc.CSS_EXS = 4] = "CSS_EXS",
    tc[tc.CSS_PX = 5] = "CSS_PX",
    tc[tc.CSS_CM = 6] = "CSS_CM",
    tc[tc.CSS_MM = 7] = "CSS_MM",
    tc[tc.CSS_IN = 8] = "CSS_IN",
    tc[tc.CSS_PT = 9] = "CSS_PT",
    tc[tc.CSS_PC = 10] = "CSS_PC",
    tc[tc.CSS_DEG = 11] = "CSS_DEG",
    tc[tc.CSS_RAD = 12] = "CSS_RAD",
    tc[tc.CSS_GRAD = 13] = "CSS_GRAD",
    tc[tc.CSS_MS = 14] = "CSS_MS",
    tc[tc.CSS_S = 15] = "CSS_S",
    tc[tc.CSS_HZ = 16] = "CSS_HZ",
    tc[tc.CSS_KHZ = 17] = "CSS_KHZ",
    tc[tc.CSS_DIMENSION = 18] = "CSS_DIMENSION",
    tc[tc.CSS_STRING = 19] = "CSS_STRING",
    tc[tc.CSS_URI = 20] = "CSS_URI",
    tc[tc.CSS_IDENT = 21] = "CSS_IDENT",
    tc[tc.CSS_ATTR = 22] = "CSS_ATTR",
    tc[tc.CSS_COUNTER = 23] = "CSS_COUNTER",
    tc[tc.CSS_RECT = 24] = "CSS_RECT",
    tc[tc.CSS_RGBCOLOR = 25] = "CSS_RGBCOLOR",
    tc[tc.CSS_VW = 26] = "CSS_VW",
    tc[tc.CSS_VH = 27] = "CSS_VH",
    tc[tc.CSS_VMIN = 28] = "CSS_VMIN",
    tc[tc.CSS_VMAX = 29] = "CSS_VMAX";
    var wc = "EventQueue not defined"
      , gc = "_fs_stylesheet_hooked"
      , mc = ["CSSMediaRule", "CSSSupportsRule"]
      , yc = function() {
        function t(t, n, i, r) {
            void 0 === r && (r = uo);
            var e = this;
            this.W = t,
            this.zt = n,
            this.Gr = i,
            this.kn = [],
            this.Qt = [],
            this.Qr = 1,
            this.Xr = !1,
            this.Yr = new Map,
            this.Jr = new Pu,
            this.Zr = new Pu,
            this.te = 0,
            this.ne = new Pu(void 0,g),
            this.ie = new oo(1e4,1e4,function() {
                return setTimeout(function() {
                    e.zt.enqueue({
                        Kind: O.FAIL_THROTTLED,
                        Args: [wt.StyleSheetHooks]
                    }),
                    e.stop()
                })
            }
            ),
            this.addInsert = this.ie.guard(this.addInsert),
            this.addDelete = this.ie.guard(this.addDelete),
            this.ee = new r(function() {
                e.se()
            }
            ,50),
            this.ue = ir(function(t, n) {
                var i, r;
                if (!(null === (i = t.parentRule) || void 0 === i ? void 0 : i.parentStyleSheet) || !e.Xr)
                    return !0;
                var s = t.parentRule;
                return e.Yr.has(s) || e.Yr.set(s, new Set),
                null === (r = e.Yr.get(s)) || void 0 === r || r.add(n),
                e.ee.isRunning() || e.ee.start(),
                !0
            })
        }
        return t.prototype.start = function() {
            var t = this;
            this.ie.open();
            var n = this.W.window;
            if (n.CSSStyleSheet && n.StyleSheet) {
                var i = n.CSSStyleSheet.prototype;
                this.Ir(i),
                this.oe(n),
                this.ae(),
                this.Qt.push(sr(n.StyleSheet, "disabled", function(n, i) {
                    return t.onDisableSheet(n, i)
                }), sr(n.Document, "adoptedStyleSheets", function(n) {
                    return t.onSetAdoptedStyleSheets(n)
                }), sr(n.ShadowRoot, "adoptedStyleSheets", function(n) {
                    return t.onSetAdoptedStyleSheets(n)
                })),
                this.Xr = !0
            }
        }
        ,
        t.prototype.oe = function(t) {
            var n, i, r = this, e = function(t) {
                var n = Fu(r.W, t, "insertRule");
                n && (n.afterSync(function(t) {
                    r.ce(t.that, t.args[0], t.args[1])
                }),
                r.kn.push(n)),
                (n = Fu(r.W, t, "deleteRule")) && (n.afterSync(function(t) {
                    r.he(t.that, t.args[0])
                }),
                r.kn.push(n))
            };
            if ("function" == typeof (null === (n = t.CSSGroupingRule) || void 0 === n ? void 0 : n.prototype.insertRule))
                e(t.CSSGroupingRule.prototype);
            else
                for (var s = 0, u = mc; s < u.length; s++) {
                    var o = null === (i = t[u[s]]) || void 0 === i ? void 0 : i.prototype;
                    o && e(o)
                }
        }
        ,
        t.prototype.ae = function() {
            var t = this;
            if (!this.Xr) {
                var n = Fu(this.W, CSSStyleDeclaration.prototype, "setProperty");
                n && (n.afterSync(function(n) {
                    t.ue(n.that, n.args[0])
                }),
                this.kn.push(n));
                var r = CSSStyleRule.prototype
                  , e = Object.getOwnPropertyDescriptor(r, "style");
                this.fe || (this.fe = null == e ? void 0 : e.get);
                var s = this;
                this.ve = function() {
                    var t, n = null === (t = null == e ? void 0 : e.get) || void 0 === t ? void 0 : t.apply(this);
                    return ir(function() {
                        n = s.le(n)
                    })(),
                    n
                }
                ;
                try {
                    Object.defineProperty(r, "style", i(i({}, e), {
                        get: s.ve
                    }))
                } catch (t) {}
            }
        }
        ,
        t.prototype.le = function(t) {
            var n = this.Jr.get(t);
            if (n)
                return n;
            var i = function(t, n, i) {
                if ("function" != typeof t.Proxy)
                    return n;
                var r = new t.Proxy(n,{
                    get: function(t, n) {
                        var i = t[n];
                        return "function" != typeof i ? i : function() {
                            for (var n = [], e = 0; e < arguments.length; e++)
                                n[e] = arguments[e];
                            var s = this;
                            return s === r && (s = t),
                            i.apply(s, n)
                        }
                    },
                    set: function(t, n, r) {
                        var e = t[n];
                        return t[n] = r,
                        "function" == typeof e || "symbol" == typeof n || i(t, n),
                        !0
                    }
                });
                return r
            }(this.W.window, t, Ti(this.ue));
            return this.Jr.set(t, i),
            i
        }
        ,
        t.prototype.se = function() {
            var t = this
              , n = this.Yr;
            this.Yr = new Map,
            n.forEach(function(n, i) {
                var r = i.parentStyleSheet;
                if (r) {
                    var e = t.de(r, i);
                    if (void 0 !== e) {
                        var s = {};
                        n.forEach(function(t) {
                            s[t] = i.style[t]
                        }),
                        t.pe(r, function(t) {
                            t.enqueue({
                                Kind: O.CSSRULE_UPDATE,
                                Args: [e, s]
                            })
                        })
                    }
                }
            })
        }
        ,
        t.prototype.ce = function(t, n, i) {
            var r = Tc(t);
            this.addInsert(t.parentStyleSheet, n, i, r)
        }
        ,
        t.prototype.he = function(t, n) {
            var i = Tc(t);
            this.addDelete(t.parentStyleSheet, n, i)
        }
        ,
        t.prototype.Ir = function(t) {
            var n, i = this;
            (n = Fu(this.W, t, "insertRule")) && (n.afterSync(function(t) {
                i.addInsert(t.that, t.args[0], t.args[1])
            }),
            this.kn.push(n)),
            (n = Fu(this.W, t, "addRule")) && (n.afterSync(function(t) {
                i.addInsert(t.that, "".concat(t.args[0], " {").concat(t.args[1], "}"), t.args[2])
            }),
            this.kn.push(n)),
            (n = Fu(this.W, t, "deleteRule")) && (n.afterSync(function(t) {
                i.addDelete(t.that, t.args[0])
            }),
            this.kn.push(n)),
            (n = Fu(this.W, t, "removeRule")) && (n.afterSync(function(t) {
                i.addDelete(t.that, t.args[0])
            }),
            this.kn.push(n)),
            (n = Fu(this.W, t, "replaceSync")) && (n.afterSync(function(t) {
                i.snapshotConstructedStylesheet(t.that, !0)
            }),
            this.kn.push(n)),
            (n = Fu(this.W, t, "replace")) && (n.afterSync(function(t) {
                return r(i, void 0, ae, function() {
                    return e(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return "object" != typeof t.result || "function" != typeof t.result.then ? [2] : [4, t.result];
                        case 1:
                            return n.sent(),
                            this.snapshotConstructedStylesheet(t.that, !0),
                            [2]
                        }
                    })
                })
            }),
            this.kn.push(n)),
            Object.defineProperty(t, gc, {
                value: !0,
                configurable: !0
            })
        }
        ,
        t.prototype.onSetAdoptedStyleSheets = function(t) {
            if (Ss(t)) {
                var n = t.adoptedStyleSheets;
                if (n) {
                    for (var i = [], r = 0, e = n; r < e.length; r++) {
                        var s = e[r]
                          , u = this.snapshotConstructedStylesheet(s);
                        i.push(u),
                        s.disabled && this.onDisableSheet(s, !0)
                    }
                    this.zt.enqueue({
                        Kind: O.ADOPTED_STYLESHEETS,
                        Args: [Ss(t), i]
                    })
                }
            }
        }
        ,
        t.prototype.snapshotEl = function(t) {
            var n = Ss(t);
            if (n && kc(t)) {
                var i = function(t) {
                    return t ? t.sheet : void 0
                }(t);
                i && (this.we([dt.Node, n], i),
                this.Gr && xc(t))
            }
        }
        ,
        t.prototype.processWayfinderLog = function(t) {
            var n = this;
            if (this.Gr)
                try {
                    var i = t.sheet;
                    if (!i)
                        return;
                    var r = _c(this.ne, i, dt.Node);
                    if (!r)
                        return;
                    var e = new Map;
                    xc(t).forEach(function(t) {
                        var s, u, o;
                        try {
                            var a = function(t) {
                                var n = t.indexOf(":");
                                return n <= 0 ? {} : JSON.parse(t.substring(n + 1))
                            }(t);
                            switch (a.kind) {
                            case O.CSSRULE_INSERT:
                                n.addInsert(i, a.cssText, a.index, a.path);
                                break;
                            case O.CSSRULE_DELETE:
                                n.addDelete(i, a.index, a.path);
                                break;
                            case O.CSSRULE_UPDATE:
                                var c = [X.Index, r, a.index];
                                (null !== (o = null === (u = a.path) || void 0 === u ? void 0 : u.length) && void 0 !== o ? o : 0) > 0 && c.push(a.path);
                                var h = nu(c);
                                e.has(h) ? e.get(h).rules[a.key] = a.value : e.set(h, {
                                    ruleId: c,
                                    rules: (s = {},
                                    s[a.key] = a.value,
                                    s)
                                })
                            }
                        } catch (t) {}
                    }),
                    this.pe(i, function(t) {
                        e.forEach(function(n) {
                            t.enqueue({
                                Kind: O.CSSRULE_UPDATE,
                                Args: [n.ruleId, n.rules]
                            })
                        })
                    })
                } catch (t) {}
        }
        ,
        t.prototype.snapshotConstructedStylesheet = function(t, n) {
            void 0 === n && (n = !1);
            var i = Ac(this.ne, t);
            return n || void 0 === i ? (void 0 === i && (i = this.Qr++,
            function(t, n, i) {
                t.set(n, i)
            }(this.ne, t, i)),
            this.we([dt.Sheet, i], t),
            i) : i
        }
        ,
        t.prototype.we = function(t, n) {
            this.zt.enqueue({
                Kind: O.RESET_CSS_SHEET,
                Args: [t]
            });
            var i = function(t) {
                try {
                    return t ? t.cssRules || t.rules : void 0
                } catch (t) {
                    return
                }
            }(n);
            if (i) {
                for (var r = [], e = 0; e < i.length; e++)
                    try {
                        var s = Ic(Sc(i[e]));
                        r.push(s)
                    } catch (t) {
                        r.push("html {}")
                    }
                this.zt.enqueue({
                    Kind: O.CSSRULE_INSERT,
                    Args: [t, r, 0]
                })
            }
        }
        ,
        t.prototype.addInsert = function(t, n, i, r) {
            var e = _c(this.ne, t, dt.Node);
            if (e && "string" == typeof n) {
                var s = [e, [Ic(n)]];
                void 0 !== i && (s[2] = i),
                void 0 !== r && (s[3] = r),
                this.pe(t, function(t) {
                    return t.enqueue({
                        Kind: O.CSSRULE_INSERT,
                        Args: s
                    })
                })
            }
        }
        ,
        t.prototype.addDelete = function(t, n, i) {
            var r = _c(this.ne, t, dt.Node);
            r && this.pe(t, function(t) {
                return t.enqueue({
                    Kind: O.CSSRULE_DELETE,
                    Args: i ? [r, n, i] : [r, n]
                })
            })
        }
        ,
        t.prototype.onDisableSheet = function(t, n) {
            var i = _c(this.ne, t, dt.Node);
            i && this.pe(t, function(t) {
                return t.enqueue({
                    Kind: O.DISABLE_STYLESHEET,
                    Args: [i, !!n]
                })
            })
        }
        ,
        t.prototype.pe = function(t, n) {
            if (t.ownerNode)
                return i = this.W,
                r = t.ownerNode,
                e = n,
                void ((s = mn(function(t) {
                    var n = t.ownerDocument;
                    return n && n.defaultView
                }(r) || i.window, i.options.namespace)) && Hi(s._withEventQueue) && s._withEventQueue(i.recording.pageSignature(), function(t) {
                    var n = t;
                    e({
                        enqueue: function(t) {
                            Ru(null != n, wc) && n.enqueue(t)
                        },
                        enqueueFirst: function(t) {
                            Ru(null != n, wc) && n.enqueueFirst(t)
                        }
                    }),
                    n = null
                }));
            var i, r, e, s;
            n(this.zt)
        }
        ,
        t.prototype.de = function(t, n) {
            var i;
            if (this.Zr.has(n))
                return [X.Cached, this.Zr.get(n)];
            var r, e = void 0;
            window.CSSGroupingRule && n.parentRule && n.parentRule instanceof CSSGroupingRule ? (e = Tc(n.parentRule),
            r = n.parentRule.cssRules) : r = t.cssRules;
            var s = Array.prototype.indexOf.call(r, n);
            if (-1 !== s) {
                var u = _c(this.ne, t, dt.Node);
                if (u) {
                    var o = this.te++;
                    return this.Zr.set(n, o),
                    (null !== (i = null == e ? void 0 : e.length) && void 0 !== i ? i : 0) > 0 ? [X.Index, u, s, e] : [X.Index, u, s]
                }
            }
        }
        ,
        t.prototype.stop = function() {
            this.Xr = !1,
            this.ie.close();
            for (var t = 0, n = this.kn; t < n.length; t++) {
                var r = n[t];
                r.disable(),
                Object.defineProperty(r.getTarget(), gc, {
                    value: !1,
                    configurable: !0
                })
            }
            this.kn = [];
            for (var e = 0, s = this.Qt; e < s.length; e++)
                (0,
                s[e])();
            if (this.Qt = [],
            this.fe) {
                this.ee.stop();
                try {
                    var u = CSSStyleRule.prototype
                      , o = Object.getOwnPropertyDescriptor(u, "style");
                    if ((null == o ? void 0 : o.get) !== this.ve)
                        return;
                    Object.defineProperty(u, "style", i(i({}, o), {
                        get: this.fe
                    }))
                } catch (t) {}
            }
        }
        ,
        t.prototype.ensureHook = function(t) {
            this.ge(t) || t[gc] || this.Ir(t)
        }
        ,
        t.prototype.removeHook = function(t) {
            if (!this.ge(t))
                for (var n = 0; n < this.kn.length; n++) {
                    var i = this.kn[n]
                      , r = i.getTarget();
                    if (t === r) {
                        i.disable(),
                        this.kn.splice(n, 1),
                        Object.defineProperty(r, gc, {
                            value: !1,
                            configurable: !0
                        });
                        break
                    }
                }
        }
        ,
        t.prototype.ge = function(t) {
            return Object.getPrototypeOf(t) === this.W.window.CSSStyleSheet
        }
        ,
        t
    }()
      , bc = document.createElement("div");
    bc.style.width = "initial";
    var Sc = "" != bc.style.cssText ? function(t) {
        return t.cssText
    }
    : function t(n, i) {
        if (void 0 === i && (i = 0),
        !Ru(i <= 20, "No deep recursion for CSS rules"))
            return "html { /* Depth limit exceeded! */ }";
        var r = function(t) {
            switch (t.type) {
            case CSSRule.PAGE_RULE:
                var n = t.selectorText || "";
                return n && Xi(n, "@page") ? n : "@page ".concat(n);
            case CSSRule.KEYFRAME_RULE:
                return t.keyText;
            case CSSRule.STYLE_RULE:
                return t.selectorText;
            case CSSRule.MEDIA_RULE:
                return "@media ".concat(t.media.mediaText);
            case CSSRule.KEYFRAMES_RULE:
                return "@keyframes ".concat(t.name);
            case CSSRule.SUPPORTS_RULE:
                return "@supports ".concat(t.conditionText);
            default:
                return null
            }
        }(n);
        if (null == r)
            return n.cssText;
        var e = function(n, i) {
            var r, e, s, u, o = n, a = o.style;
            if (a) {
                for (var c = "", h = 0; h < a.length; h++) {
                    var f = a[h]
                      , v = void 0 !== (u = function(t, n) {
                        var i = t;
                        if ("function" == typeof i.getPropertyCSSValue) {
                            var r = i.getPropertyCSSValue(n);
                            if (null != r) {
                                var e;
                                switch (r.cssValueType) {
                                case Ya.CSS_PRIMITIVE_VALUE:
                                    e = r;
                                    break;
                                case Ya.CSS_VALUE_LIST:
                                    if (1 !== r.length)
                                        return;
                                    var s = r.item(0);
                                    if (null == s)
                                        return;
                                    if (s.cssValueType !== Ya.CSS_PRIMITIVE_VALUE)
                                        return;
                                    e = s;
                                    break;
                                default:
                                    return
                                }
                                if (e.primitiveType === Za.CSS_STRING) {
                                    var u = Pe();
                                    nc || (nc = u.createElement("div"));
                                    var o = e.cssText;
                                    try {
                                        nc.style.cssText = "".concat(n, ": \"").concat(o, "\";");
                                        var a = nc.style.getPropertyCSSValue(n);
                                        if (null == a)
                                            return;
                                        if (o !== a.cssText)
                                            return
                                    } catch (t) {
                                        return
                                    } finally {
                                        nc.style.cssText = ""
                                    }
                                    return "\"".concat(o, "\"")
                                }
                            }
                        }
                    }(e = a, s = f)) ? u : e.getPropertyValue(s);
                    ("initial" === v || ("\"" === (r = v)[0] || "'" === r[0]) && r[r.length - 1] === r[0]) && (c += "".concat(f, ": ").concat(v),
                    "important" === a.getPropertyPriority(f) && (c += " !important"),
                    c += "; ")
                }
                return [a.cssText, c].filter(Boolean).join("\n")
            }
            var l = o.cssRules;
            if (!l)
                return null;
            var d = "";
            for (h = 0; h < l.length; h++)
                d += t(l[h], i + 1);
            return d
        }(n, i);
        return null == e ? n.cssText : "".concat(r, " { ").concat(e, "} ")
    }
    ;
    function kc(t) {
        var n;
        if (t instanceof HTMLLinkElement) {
            try {
                return function(t, n) {
                    var i, r;
                    return null !== (r = null === (i = t.classList) || void 0 === i ? void 0 : i.contains("fs-css-in-js")) && void 0 !== r && r
                }(t)
            } catch (t) {
                Tu.send("shouldSnapshot", {
                    err: t
                })
            }
            return !1
        }
        return (null !== (n = t.textContent) && void 0 !== n ? n : "").length < xs
    }
    function _c(t, n, i) {
        var r = function(t, n) {
            var i = Ac(t, n);
            if (i)
                return [dt.Sheet, i];
            var r = Ss(n.ownerNode);
            return r ? [dt.Node, r] : void 0
        }(t, n);
        if (r) {
            var e = r[0]
              , s = r[1];
            return e === i ? s : r
        }
    }
    function Ac(t, n) {
        return t.get(n)
    }
    function Ic(t) {
        return t.length <= xs ? t : ("CSSRule too large, inserting dummy instead: ".concat(t.length),
        ":root { --fs-dropped-large-rule: 0 }")
    }
    function Ec(t, n) {
        for (var i = 0; i < t.length; i++)
            if (t[i] === n)
                return i;
        return -1
    }
    function Tc(t) {
        for (var n = [], i = t, r = "stylesheetwatcher#getPath"; i.parentRule || i.parentStyleSheet; ) {
            var e;
            if (!(null == (e = i.parentRule ? i.parentRule : i.parentStyleSheet) ? void 0 : e.cssRules))
                return Tu.send(r, {
                    pathLength: n.length
                }, "warning"),
                n;
            var s = Ec(e.cssRules, i);
            if (s > -1) {
                if (n.unshift(s),
                e instanceof CSSStyleSheet)
                    break;
                i = e
            } else
                Tu.send(r, {
                    index: s
                }, "warning")
        }
        return n
    }
    var Cc = "__wayfinder_cursor";
    function xc(t) {
        var n, i = null !== (n = t.getAttributeNS(vn, ln)) && void 0 !== n ? n : "";
        if (!i.length)
            return [];
        var r = function(t) {
            return Cc in t ? t[Cc] : ""
        }(t)
          , e = i.split("\n").filter(function(t) {
            return t > r
        });
        return e.length > 0 && (t[Cc] = e[e.length - 1]),
        e
    }
    var Rc = function() {
        function t(t, n, i) {
            this.W = t,
            this.me = n,
            this.vt = i
        }
        return t.prototype.start = function() {
            var t = this
              , n = this.W.window.document;
            this.vt.addCustom(n, this.ye(), !0, function(n) {
                t.onFullscreenChange(n)
            }),
            this.vt.addCustom(n, this.be(), !0, function(n) {
                t.onFullscreenError(n)
            })
        }
        ,
        t.prototype.stop = function() {
            var t;
            null === (t = this.vt) || void 0 === t || t.clearAll()
        }
        ,
        t.prototype.onFullscreenChange = function(t) {
            var n = this.Se();
            if (n) {
                var i = Ss(n);
                this.ke,
                this.me.enqueue({
                    Kind: O.FULLSCREEN,
                    Args: [i, !0]
                }),
                this.ke = i
            } else
                this.ke,
                this.me.enqueue({
                    Kind: O.FULLSCREEN,
                    Args: [this.ke, !1]
                }),
                this.ke = void 0
        }
        ,
        t.prototype.onFullscreenError = function(t) {
            this.me.enqueue({
                Kind: O.FULLSCREEN_ERROR,
                Args: []
            })
        }
        ,
        t.prototype.Se = function() {
            var t = this.W.window.document;
            return t[_(t, "fullscreenElement")]
        }
        ,
        t.prototype.ye = function() {
            return _(this.W.window.document, "onfullscreenchange").slice(2)
        }
        ,
        t.prototype.be = function() {
            return _(this.W.window.document, "onfullscreenerror").slice(2)
        }
        ,
        t
    }()
      , Kc = Rc
      , jc = function() {
        function t(t, n) {
            this.zt = n,
            this.Ct = null,
            this._e = {};
            var i = t.window;
            "customElements"in i && null != i.customElements && "get"in i.customElements && "whenDefined"in i.customElements && (this.Ct = i.customElements)
        }
        return t.prototype.start = function() {}
        ,
        t.prototype.stop = function() {}
        ,
        t.prototype.onCustomNodeVisited = function(t) {
            return r(this, void 0, ae, function() {
                var n;
                return e(this, function(i) {
                    return this.Ct ? (n = t.nodeName.toLowerCase(),
                    Object.prototype.hasOwnProperty.call(this._e, n) || this.Ae(n),
                    [2]) : [2]
                })
            })
        }
        ,
        t.prototype.Ae = function(t) {
            return r(this, void 0, ae, function() {
                var n;
                return e(this, function(i) {
                    switch (i.label) {
                    case 0:
                        if (!this.Ct)
                            return [2];
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]),
                        n = !!this.Ct.get(t),
                        this._e[t] = n,
                        [4, this.Ct.whenDefined(t)];
                    case 2:
                        return i.sent(),
                        this.zt.enqueue({
                            Kind: O.CUSTOM_ELEMENT_DEFINED,
                            Args: [t]
                        }),
                        [3, 4];
                    case 3:
                        return i.sent(),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ,
        t
    }()
      , Mc = function() {
        function t(t, n) {
            this.W = t,
            this.Ie = !1,
            this.kn = [],
            this.En = n,
            this.An = t.window,
            this.Ie = Pc(this.An)
        }
        return t.prototype.start = function() {
            this.En.enqueue({
                Kind: O.REC_FEAT_SUPPORTED,
                Args: [vt.HTMLDialogElement, this.Ie]
            }),
            this.Ie && (this.xn("show"),
            this.xn("showModal"),
            this.xn("close"))
        }
        ,
        t.prototype.stop = function() {
            this.kn.forEach(function(t) {
                return t.disable()
            }),
            this.kn = []
        }
        ,
        t.prototype.xn = function(t) {
            var n = this
              , i = Fu(this.W, this.An.HTMLDialogElement.prototype, t);
            null == i || i.afterSync(function(i) {
                var r = Ss(i.that)
                  , e = "close" !== t
                  , s = "showModal" === t;
                n.En.enqueue({
                    Kind: O.DIALOG,
                    Args: [r, e, s]
                })
            }),
            i && this.kn.push(i)
        }
        ,
        t
    }()
      , Pc = function(t) {
        return void 0 !== t.HTMLDialogElement
    }
      , Oc = function(t) {
        try {
            return bi.elMatches(t, "dialog:modal")
        } catch (t) {
            return !0
        }
    }
      , Nc = function() {
        function t() {}
        return t.prototype.now = function() {
            return Date.now()
        }
        ,
        t
    }()
      , Lc = function() {
        function t(t, n, i, r) {
            void 0 === i && (i = n),
            void 0 === r && (r = new Nc),
            this.Ee = t,
            this.Te = n,
            this.Ce = r,
            this.xe = r.now(),
            this.Re = i
        }
        return t.prototype.hasCapacityFor = function(t) {
            var n = this.Ce.now()
              , i = (n - this.xe) * this.Ee;
            return this.Re = Math.min(this.Te, this.Re + i),
            this.xe = n,
            this.Re >= t ? (this.Re -= t,
            [!0, 0]) : [!1, (t - this.Re) / this.Ee]
        }
        ,
        t
    }()
      , Uc = new Lc(2,2e5)
      , Fc = new Set(["measureText", "getImageData", "getError", "getTransform", "isContextLost", "isEnabled", "isFramebuffer", "isProgram", "isRenderbuffer", "isShader", "isTexture"])
      , Bc = new Set(["fillText"])
      , Dc = function() {
        function t(t, n, i, r) {
            this.W = t,
            this.zt = n,
            this.cr = i,
            this.Zi = r,
            this.Ke = Yt.CaptureCanvasOps,
            this.je = [],
            this.Me = [],
            this.Pe = new WeakMap,
            this.Oe = new WeakMap,
            this.Ne = new Set,
            this.Le = 0,
            this.Ue = new WeakMap,
            this.Fe = !1,
            this.Be = new WeakMap,
            this.De = new Set,
            this.He = new WeakMap,
            this.We = new WeakMap,
            this.ze = 1,
            this.qe = new WeakMap,
            this.Ve = 1,
            this.$e = new WeakMap,
            this.Ge = 0,
            this.Qe = !1
        }
        return t.prototype.start = function(t) {
            var n, i = this;
            if (t.CanvasWatcherMode && (this.zt.enqueue({
                Kind: O.REC_FEAT_SUPPORTED,
                Args: [vt.CanvasWatcherEnabled, !0, vt.CanvasScreenShotMode, t.CanvasWatcherMode === Yt.ScreenshotCanvas]
            }),
            this.Fe = !0,
            this.Ke = null !== (n = t.CanvasWatcherMode) && void 0 !== n ? n : Yt.CaptureCanvasOps,
            this.Ir("2d", CanvasRenderingContext2D),
            this.Ir("webgl", WebGLRenderingContext),
            this.Ir("webgl2", WebGL2RenderingContext),
            this.Ke === Yt.ScreenshotCanvas)) {
                if (!HTMLCanvasElement.prototype.toDataURL)
                    return;
                this.Le = setInterval(function() {
                    return i.screenshotConnectedCanvases()
                }, 1e3)
            }
        }
        ,
        t.prototype.Xe = function(t, n) {
            return "object" != typeof n ? [void 0, 0] : (this.qe.has(n) || this.qe.set(n, [t, this.Ve++]),
            this.qe.get(n))
        }
        ,
        t.prototype.Ir = function(t, n) {
            var i = this;
            if (n)
                for (var r = n.prototype, e = function(e) {
                    if (Fc.has(e))
                        return "continue";
                    var u = Object.getOwnPropertyDescriptor(r, e);
                    if ("function" == typeof (null == u ? void 0 : u.value)) {
                        var o = Fu(s.W, r, e);
                        o && (o.afterSync(function(n) {
                            return i.Ye(t, e, n.that, n.args, n.result)
                        }),
                        s.je.push(o))
                    } else
                        "function" == typeof (null == u ? void 0 : u.set) && s.Me.push(sr(n, e, s.Je(t, e)))
                }, s = this, u = 0, o = Object.keys(r); u < o.length; u++)
                    e(o[u])
        }
        ,
        t.prototype.Ze = function(t, n) {
            var i;
            this.De.add(t),
            this.He.has(t) || this.He.set(t, pr() + 5e3),
            this.Be.has(t) || this.Be.set(t, []),
            null === (i = this.Be.get(t)) || void 0 === i || i.push.apply(i, n)
        }
        ,
        t.prototype.ts = function(t) {
            var n, i = null !== (n = this.Be.get(t)) && void 0 !== n ? n : [];
            return this.De["delete"](t),
            this.He["delete"](t),
            i
        }
        ,
        t.prototype.ns = function(t) {
            var n = t instanceof HTMLCanvasElement ? Ss(t) : 0;
            if (n)
                return n;
            if (this.We.has(t))
                return {
                    id: this.We.get(t)
                };
            var i = {
                id: this.ze
            };
            return this.rs(t, i),
            this.We.set(t, this.ze),
            ++this.ze,
            i
        }
        ,
        t.prototype.rs = function(t, n) {
            this.zt.enqueue({
                Kind: O.CANVAS_DETACHED_DIMENSION,
                Args: [n, t.width, t.height]
            })
        }
        ,
        t.prototype.flush = function(t, n) {
            var i;
            if (this.Fe) {
                if (this.$e.has(t))
                    return this.$e.get(t);
                this.Ke === Yt.ScreenshotCanvas && t instanceof HTMLCanvasElement && (this.Ne.add(t),
                this.Oe.set(t, !0));
                var r = this.ns(t);
                this.$e.set(t, r);
                var e = this.ts(t);
                if (e.length > 0) {
                    var s = n;
                    if (!s) {
                        var u = t instanceof HTMLCanvasElement ? ms(t) : void 0
                          , o = t instanceof HTMLCanvasElement && ar(t);
                        s = null !== (i = null == u ? void 0 : u.mask) && void 0 !== i ? i : o
                    }
                    this.es(t, r, e, s)
                }
                return this.$e["delete"](t),
                r
            }
        }
        ,
        t.prototype.ss = function(t, n, i, r, e, s, u) {
            var o, a;
            switch (typeof r) {
            case "string":
                return e ? $e(r) : r;
            case "number":
            case "boolean":
            case "bigint":
                return r;
            case "undefined":
                return {
                    undef: !0
                };
            case "object":
                if (!r)
                    return r;
                try {
                    u.set(r, !0)
                } catch (t) {}
                var c = null === (o = Object.getPrototypeOf(r)) || void 0 === o ? void 0 : o.constructor
                  , h = (null == c ? void 0 : c.name) || function(t) {
                    var n;
                    if (t) {
                        var i = t.toString()
                          , r = Wc.exec(i);
                        return r || (r = zc.exec(i)),
                        null === (n = null == r ? void 0 : r[1]) || void 0 === n ? void 0 : n.trim()
                    }
                }(c)
                  , f = {
                    ctor: h
                };
                if (((a = r)instanceof Node || zi(a) && "nodeType"in a) && (d = Ss(r)))
                    return f.id = d,
                    f;
                switch (h) {
                case "Array":
                    return this.Ge += r.length,
                    this.us(t, n, i, r, e, s, u);
                case "CanvasGradient":
                    return f;
                case "HTMLImageElement":
                    var v = Ns(r.src, {
                        source: "dom",
                        type: "canvas"
                    });
                    return this.Zi.record(v),
                    f.src = v,
                    f;
                case "HTMLCanvasElement":
                    var l = r
                      , d = this.flush(l, e);
                    return f.srcId = d,
                    f
                }
                if (function(t) {
                    var n;
                    return !!(null === (n = Object.prototype.toString.call(t)) || void 0 === n ? void 0 : n.match(Hc))
                }(r))
                    return this.qe.has(r) ? this.os(r, f, e) : (f.typedArray = "[".concat(r.toString(), "]"),
                    this.Ge += r.length,
                    f);
                if ("object" == typeof r && this.qe.has(r))
                    return this.os(r, f, e);
                if (r instanceof WebGLBuffer || r instanceof WebGLTexture) {
                    var p = void 0;
                    switch (s) {
                    case "bindTexture":
                        p = this.cs(t, "createTexture", n, i, r);
                        break;
                    case "bindBuffer":
                        p = this.cs(t, "createBuffer", n, i, r)
                    }
                    if (void 0 !== p)
                        return this.os(r, f, e)
                }
                var w = r;
                for (var g in f.obj = {},
                w) {
                    try {
                        switch (typeof w[g]) {
                        case "function":
                            continue;
                        case "object":
                            if (w[g] && u.has(w[g]))
                                continue
                        }
                    } catch (t) {
                        continue
                    }
                    ++this.Ge,
                    f.obj[g] = this.ss(t, n, i, w[g], e, s, u)
                }
                return f;
            default:
                return null
            }
        }
        ,
        t.prototype.os = function(t, n, i) {
            var r = this.qe.get(t)
              , e = r[0]
              , s = r[1];
            return this.flush(e, i),
            n.ref = s,
            delete n.ctor,
            n
        }
        ,
        t.prototype.cs = function(t, n, i, r, e) {
            var s = this.Xe(i, e)
              , u = (s[0],
            s[1]);
            return this.hs(r, [[t, Qt.Function, n, [], u]]),
            u
        }
        ,
        t.prototype.us = function(t, n, i, r, e, s, u) {
            var o = this;
            return void 0 === u && (u = new WeakMap),
            this.Ge += r.length + 1,
            r.map(function(r) {
                return o.ss(t, n, i, r, e, s, u)
            })
        }
        ,
        t.prototype.es = function(t, n, i, r) {
            var e = this;
            if (void 0 === r && (r = !1),
            !this.Qe) {
                var s = i.map(function(i) {
                    var s = i[0]
                      , u = i[1]
                      , o = i[2]
                      , a = i[3]
                      , c = i[4];
                    return [s, u, o, e.us(s, t, n, a, r && Bc.has(o), o), c]
                });
                if (!this.Pe.has(t) && (this.Pe.set(t, !0),
                i.some(function(t) {
                    return "2d" === t[0]
                }))) {
                    var u = function(t) {
                        var n = t.getContext("2d");
                        if (!n)
                            return [];
                        var i = [];
                        if ((n instanceof CanvasRenderingContext2D || window.OffscreenCanvasRenderingContext2D && n instanceof OffscreenCanvasRenderingContext2D) && "function" == typeof n.getTransform) {
                            var r = n.getTransform();
                            if (!r.isIdentity) {
                                var e = r.a
                                  , s = r.b
                                  , u = r.c
                                  , o = r.d
                                  , a = r.e
                                  , c = r.f;
                                i.push(["2d", Qt.Function, "transform", [e, s, u, o, a, c], -1])
                            }
                        }
                        return i
                    }(t);
                    if (u.length > 0)
                        return u.push.apply(u, s),
                        void this.hs(n, u)
                }
                this.hs(n, s)
            }
        }
        ,
        t.prototype.hs = function(t, n) {
            if (!this.Qe) {
                var i = Uc.hasCapacityFor(this.Ge)
                  , r = i[0];
                i[1],
                this.Ge = 0,
                r ? this.zt.enqueue({
                    Kind: O.CANVAS,
                    Args: [t, n]
                }) : this.Qe = !0
            }
        }
        ,
        t.prototype.vs = function(t, n) {
            t instanceof HTMLCanvasElement && (this.Ke === Yt.ScreenshotCanvas ? (this.Oe.set(t, !0),
            this.Ne.add(t)) : this.Ze(t, n))
        }
        ,
        t.prototype.Ye = function(t, n, i, r, e) {
            for (var s = [], u = 0; u < r.length; u++)
                s.push(r[u]);
            var o = this.Xe(i.canvas, e)
              , a = (o[0],
            o[1]);
            this.vs(i.canvas, [[t, Qt.Function, n, s, a]])
        }
        ,
        t.prototype.Je = function(t, n) {
            var i = this;
            return function(r, e) {
                i.vs(r.canvas, [[t, Qt.Set, n, [e], 0]])
            }
        }
        ,
        t.prototype.stop = function() {
            this.Fe = !1,
            this.je.forEach(function(t) {
                return t.disable()
            }),
            this.Me.forEach(function(t) {
                return t()
            }),
            this.je = [],
            this.Me = [],
            this.Le && (clearInterval(this.Le),
            this.Le = 0)
        }
        ,
        t.prototype.screenshotConnectedCanvases = function() {
            var t = this
              , n = []
              , i = [];
            return this.Ne.forEach(function(r) {
                var e = Ss(r);
                ar(r) && e ? t.Oe.has(r) && i.push(ye().then(function() {
                    return t.ls(r, e)
                })) : n.push(r)
            }),
            n.forEach(function(n) {
                return t.Ne["delete"](n)
            }),
            this.Oe = new WeakMap,
            ae.all(i)
        }
        ,
        t.prototype.ls = function(t, n) {
            return r(this, void 0, ae, function() {
                var i, r, s, u;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]),
                        i = t.toDataURL(),
                        r = this.Ue.get(t),
                        [4, this.cr.uploadDataUrlIfNeeded(i, function(t) {
                            var n;
                            return t.url !== r && !!(null === (n = t.contentType) || void 0 === n ? void 0 : n.match(/^image/i))
                        })];
                    case 1:
                        return (s = e.sent()) ? (u = s.url,
                        this.Ue.set(t, u),
                        s.url === r ? [2] : (this.hs(n, [["2d", Qt.Function, "drawImage", [{
                            ctor: "HTMLImageElement",
                            src: u
                        }, 0, 0], 0]]),
                        [3, 3])) : [2];
                    case 2:
                        return ju("Canvas screenshot", {
                            err: e.sent()
                        }),
                        [3, 3];
                    case 3:
                        return [2]
                    }
                })
            })
        }
        ,
        t.prototype.ds = function() {
            var t = this
              , n = [];
            this.De.forEach(function(i) {
                i instanceof HTMLCanvasElement && (Ss(i) || !ar(i)) || (t.Be["delete"](i),
                n.push(i))
            });
            for (var i = 0, r = n; i < r.length; i++) {
                var e = r[i];
                this.ts(e)
            }
        }
        ,
        t.prototype.tick = function() {
            var t = this;
            if (this.Fe)
                try {
                    if (this.ds(),
                    this.Ke === Yt.ScreenshotCanvas)
                        return;
                    this.De.forEach(function(n) {
                        var i;
                        n instanceof HTMLCanvasElement && t.ps(n);
                        var r = null !== (i = t.He.get(n)) && void 0 !== i ? i : Number.POSITIVE_INFINITY;
                        pr() > r && t.ts(n)
                    })
                } catch (t) {
                    Tu.send("canvaswatcher#tick", {
                        err: t,
                        mode: this.Ke
                    })
                }
        }
        ,
        t.prototype.ps = function(t) {
            var n = Ss(t);
            if (n) {
                var i = ms(t)
                  , r = this.Be.get(t);
                r && 0 !== r.length && (this.es(t, n, r, !!(null == i ? void 0 : i.mask)),
                this.ts(t))
            }
        }
        ,
        t
    }()
      , Hc = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/
      , Wc = /^\[object ([^\]]+?)(?:Constructor)?\]/
      , zc = /^function ([^(]+)/
      , qc = /^\s*at .*(\S+:\d+|native|(<anonymous>))/m
      , Vc = /^(eval@)?(\[native code\])?$/;
    function $c(t, n, i, r, e) {
        return [n || "", t(i || ""), parseInt(r || "-1", 10), parseInt(e || "-1", 10)]
    }
    function Gc(t) {
        if (!t || -1 === t.indexOf(":"))
            return ["", "", ""];
        var n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g, ""));
        return n ? [n[1] || "", n[2] || "", n[3] || ""] : ["", "", ""]
    }
    var Qc = ["_fs_debug", "assert", "debug", "error", "info", "log", "trace", "warn"]
      , Xc = Qc.filter(function(t) {
        return !/debug/.test(t)
    });
    function Yc(t, n) {
        return $s(Gi(t) ? t.slice(0, n) : ro(t, n))
    }
    function Jc(t) {
        if (zi(t)) {
            try {
                if (Hi(t.toString))
                    return t.toString()
            } catch (t) {}
            return t.message
        }
    }
    function Zc(t, n) {
        var i = n ? "".concat(n, " ") : "";
        return s(["".concat(i).concat(Yc(Jc(t.error) || t.message, 1e3)), Yc(t.filename, 100), zi(t.lineno) ? -1 : t.lineno], function(t, n) {
            if (!zi(n) || !Gi(n.stack))
                return [];
            var i = n;
            return i.stack.match(qc) ? function(t, n) {
                return n.split("\n").filter(function(t) {
                    return !!t.match(qc)
                }).map(function(n) {
                    var i = n;
                    i.indexOf("(eval ") > -1 && (i = i.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                    var r = i.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/\(native code\)/, "").split(/\s+/).slice(1)
                      , e = Gc(r.pop())
                      , s = r.join(" ")
                      , u = ["eval", "<anonymous>"].indexOf(e[0]) > -1 ? "" : e[0];
                    return $c(t, s, u, e[1], e[2])
                })
            }(t, i.stack) : function(t, n) {
                return n.split("\n").filter(function(t) {
                    return !t.match(Vc)
                }).map(function(n) {
                    var i = n;
                    if (i.indexOf(" > eval") > -1 && (i = i.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")),
                    -1 === i.indexOf("@") && -1 === i.indexOf(":"))
                        return [i, "", -1, -1];
                    var r = i.split("@")
                      , e = Gc(r.pop())
                      , s = r.join("@");
                    return $c(t, s, e[0], e[1], e[2])
                })
            }(t, i.stack)
        }($s, t.error), !0)
    }
    var th = function() {
        function t(t, n, i) {
            this.W = t,
            this.zt = n,
            this.vt = i,
            this.yn = !1,
            this.ws = !1,
            this.gs = 0,
            this.kn = [],
            this.ys = Ht.DefaultOrgSettings.MaxConsoleLogPerPage,
            this.Ki = t.window
        }
        return t.prototype.initializeMaxLogsPerPage = function(t) {
            this.ys = t || Ht.DefaultOrgSettings.MaxConsoleLogPerPage
        }
        ,
        t.prototype.bs = function() {
            return "\"[received more than ".concat(this.ys, " messages]\"")
        }
        ,
        t.prototype.start = function(t) {
            var n = this;
            if (t.ConsoleWatcher && (this.vt.add(this.Ki, "error", !0, function(t) {
                return n.Ss(t)
            }),
            this.vt.add(this.Ki, "unhandledrejection", !0, function(t) {
                var i, r = "";
                t.reason instanceof Error ? i = t.reason : r = ro(t.reason, 1e3),
                n.Ss({
                    error: i,
                    message: r,
                    filename: "",
                    lineno: 0
                }, "Uncaught (in promise)")
            }, !0),
            !this.yn))
                if (this.yn = !0,
                this.zt.enqueue({
                    Kind: O.REC_FEAT_SUPPORTED,
                    Args: [vt.Console, !0]
                }),
                this.Ki.console)
                    for (var i = function(t) {
                        var i = Fu(r.W, r.Ki.console, t);
                        if (!i)
                            return "continue";
                        "assert" === t ? i.before(function(i) {
                            var r = i.args;
                            r[0] || n.ks(t, Array.prototype.slice.apply(r, [1]))
                        }) : i.before(function(i) {
                            var r = i.args;
                            return n.ks(t, r)
                        }),
                        r.kn.push(i)
                    }, r = this, e = 0, s = Xc; e < s.length; e++)
                        i(s[e]);
                else
                    this.ks("log", ["NOTE: Log messages cannot be captured on IE9"])
        }
        ,
        t.prototype.isEnabled = function() {
            return this.yn
        }
        ,
        t.prototype.stop = function() {
            var t, n;
            if (null === (t = this.vt) || void 0 === t || t.clearAll(),
            this.yn)
                for (this.yn = !1; n = this.kn.pop(); )
                    n.disable()
        }
        ,
        t.prototype.logEvent = function(t, n, i) {
            if (void 0 === i && (i = "console"),
            !this._s())
                return null;
            for (var r = -1 === Qc.indexOf(t) ? [i, "log", Yc(t, 1e3)] : [i, t], e = 0; e < n.length; ++e)
                r.push(Yc(n[e], 1e3));
            return {
                Kind: O.LOG,
                Args: r
            }
        }
        ,
        t.prototype.ks = function(t, n) {
            if (0 !== n.length) {
                var i = this.logEvent(t, n);
                i && this.zt.enqueue(i)
            }
        }
        ,
        t.prototype.Ss = function(t, n) {
            void 0 === n && (n = "Uncaught"),
            (void 0 !== t.error || void 0 !== t.message || t.filename || t.lineno) && this._s() && this.zt.enqueue({
                Kind: O.ERROR,
                Args: Zc(t, n)
            })
        }
        ,
        t.prototype._s = function() {
            return !this.ws && (this.gs == this.ys ? (this.zt.enqueue({
                Kind: O.LOG,
                Args: ["console", "warn", this.bs()]
            }),
            this.ws = !0,
            !1) : (this.gs++,
            !0))
        }
        ,
        t
    }();
    function nh(t) {
        if (t.composed && t.target) {
            var n = t.target;
            if (n.nodeType == xi && n.shadowRoot) {
                var i = t.composedPath();
                if (i.length > 0)
                    return i[0]
            }
        }
        return t.target
    }
    function ih(t) {
        var n = nh(t);
        return !!Ss(n) && !ws(n)
    }
    var rh = function() {
        function t(t, n, i, r) {
            this.W = t,
            this.zt = n,
            this.As = i,
            this.vt = r
        }
        return t.prototype.start = function(t) {
            var n = this;
            this.vt.add(this.W.window, "click", !0, function(t) {
                ih(t) && n.Is(t)
            }),
            this.vt.add(this.W.window, "dblclick", !0, function(t) {
                ih(t) && n.Es(t)
            })
        }
        ,
        t.prototype.stop = function(t) {
            this.vt.clearAll()
        }
        ,
        t.prototype.Is = function(t) {
            var n = eh(this.W, t);
            if (Hi(n)) {
                var i = ms(nh(t));
                this.As.onClick(i),
                this.zt.enqueue({
                    Kind: O.RESOLVABLE_EVENT,
                    Args: [O.CLICK, n]
                })
            }
        }
        ,
        t.prototype.Es = function(t) {
            var n = Ss(nh(t));
            n && this.zt.enqueue({
                Kind: O.DBL_CLICK,
                Args: [n]
            })
        }
        ,
        t
    }();
    function eh(t, n) {
        var i = nh(n)
          , r = Ss(i);
        if (r) {
            var e = [r, n.clientX, n.clientY]
              , u = t.measurer.enqueue(function() {
                return {
                    done: !0,
                    result: sh(i)
                }
            }, !0);
            return function() {
                return s(s([], e, !0), function(t, n) {
                    if (Hi(n)) {
                        var i = n();
                        if (i && i[0])
                            return i[0]
                    }
                    return sh(t)
                }(i, u), !0)
            }
        }
    }
    function sh(t) {
        var n = 0
          , i = 0
          , r = 0
          , e = 0;
        if (t && t.getBoundingClientRect) {
            var s = t.getBoundingClientRect();
            n = s.left,
            i = s.top,
            r = s.width,
            e = s.height
        }
        return [n, i, r, e]
    }
    var uh, oh, ah, ch, hh = function() {
        function t(t, n, i, r) {
            this.W = t,
            this.zt = n,
            this.As = i,
            this.vt = r,
            this.kn = [],
            n.registerInterceptor(this)
        }
        return t.prototype.start = function(t) {
            var n, i = this;
            this.vt.add(this.W.window, "click", !0, function(t) {
                ih(t) && i.Ts(t)
            });
            var r = Fu(this.W, null === (n = this.W.window.Event) || void 0 === n ? void 0 : n.prototype, "preventDefault", !0);
            r && (this.kn.push(r),
            r.afterSync(function(t) {
                return i.Cs(t.that)
            }))
        }
        ,
        t.prototype.stop = function(t) {
            this.vt.clearAll();
            for (var n = 0, i = this.kn; n < i.length; n++)
                i[n].disable()
        }
        ,
        t.prototype.intercept = function(t) {
            switch (t.Kind) {
            case O.RESIZE_DOCUMENT_CONTENT:
            case O.RESIZE_LAYOUT:
            case O.RESIZE_VISUAL:
            case O.SCROLL_LAYOUT:
            case O.SCROLL_VISUAL_OFFSET:
                this.xs()
            }
        }
        ,
        t.prototype.Ts = function(t) {
            var n;
            (null === (n = this.Rs) || void 0 === n ? void 0 : n.target) === nh(t) && this.xs()
        }
        ,
        t.prototype.Cs = function(t) {
            var n, i = t.type;
            switch (i) {
            case "touchend":
                var r = t
                  , e = (null === (n = r.changedTouches) || void 0 === n ? void 0 : n.length) > 0;
                r.clientX = e ? r.changedTouches[0].clientX : 0,
                r.clientY = e ? r.changedTouches[0].clientY : 0,
                this.Ks(i, r);
                break;
            case "pointerdown":
            case "pointerup":
                this.Ks(i, t);
                break;
            default:
                "Unhandled event type: ".concat(i)
            }
        }
        ,
        t.prototype.js = function(t, n) {
            var i = eh(this.W, n);
            if (Hi(i)) {
                var r = ms(nh(n));
                this.As.onClick(r),
                this.zt.enqueue({
                    Kind: O.RESOLVABLE_EVENT,
                    Args: [O.EVENT_CANCELED, function() {
                        return [t, i()]
                    }
                    ]
                })
            }
        }
        ,
        t.prototype.Ks = function(t, n) {
            var i = this;
            this.Rs || (this.Rs = {
                target: nh(n),
                timer: new uo(function() {
                    i.Rs = void 0,
                    i.js(t, n)
                }
                ).start(Ht.SyntheticClickTimeout)
            })
        }
        ,
        t.prototype.xs = function() {
            this.Rs && (this.Rs.timer.stop(),
            this.Rs = void 0)
        }
        ,
        t
    }();
    (oh = uh || (uh = {}))[oh.Ajax = 0] = "Ajax",
    oh[oh.Animation = 1] = "Animation",
    oh[oh.Canvas = 2] = "Canvas",
    oh[oh.Console = 3] = "Console",
    oh[oh.CustomElement = 4] = "CustomElement",
    oh[oh.Dialog = 5] = "Dialog",
    oh[oh.Fullscreen = 6] = "Fullscreen",
    oh[oh.Input = 7] = "Input",
    oh[oh.Perf = 8] = "Perf",
    oh[oh.StyleSheet = 9] = "StyleSheet",
    (ch = ah || (ah = {}))[ch.Scroll = 1] = "Scroll",
    ch[ch.Resize = 2] = "Resize";
    var fh = /^\s*((stylesheet)\s*)+$/i
      , vh = /^\s*((img|picture)\s*)+$/i
      , lh = function() {
        function t(t, n, i, r, e, s, u, o, a) {
            var c = this;
            this.W = t,
            this.zt = n,
            this.As = i,
            this.vt = e,
            this.Ms = s,
            this.Ps = u,
            this.cr = o,
            this.Zi = a,
            this.Os = [],
            this.Ns = {},
            this.Ls = !1,
            this.kn = [],
            this.Us = !1,
            this.Fs = {},
            this.Bs = !1,
            this.Ds = new Pu,
            this.Ki = t.window,
            this.t = this.Ki.document,
            this.Hs = this.Ki.location,
            this.Ws = this.Ki.history,
            this.zs = this.Hs.href,
            this.qs = [new rc(t,n), new po(t,n,this.vt.createChild()), new Dc(t,n,o,this.Zi), new th(t,this.zt,this.vt.createChild()), new jc(t,n), new Mc(t,n), new Kc(t,n,this.vt.createChild()), new co(t,n), new Ma(t,n,this.vt.createChild(),this.Zi), new yc(t,n,!!this.W.options.isWayfinder), new rh(t,n,i,this.vt.createChild()), new hh(t,n,i,this.vt.createChild())],
            this.Vs = function(t, n) {
                void 0 === n && (n = .25);
                var i = t.window.IntersectionObserver;
                if (i)
                    return new i(function(n) {
                        for (var i, r = 0, e = n; r < e.length; r++) {
                            var s = e[r]
                              , u = s.target
                              , o = s.intersectionRatio
                              , a = Ss(u);
                            a && (null === (i = t.queue()) || void 0 === i || i.enqueue({
                                Kind: O.VIEWPORT_INTERSECTION,
                                Args: [a, o]
                            }))
                        }
                    }
                    ,{
                        threshold: [n, 1]
                    })
            }(t),
            this.$s = new la(t,r,this.Vn.bind(this),this.Vs,this.bi.bind(this),function(t) {
                return c.qs[uh.StyleSheet].processWayfinderLog(t)
            }
            ),
            this.$s.acceptVisitor(this)
        }
        return t.prototype.getResourceUploader = function() {
            return this.cr
        }
        ,
        t.prototype.start = function(t) {
            this.$s.start();
            for (var n = 0, i = this.qs; n < i.length; n++)
                i[n].start(t);
            this.Gs(t)
        }
        ,
        t.prototype.Gs = function(t) {
            var n = this;
            t.DisableCopyPasteListener || (this.vt.add(this.Ki, "copy", !1, this.Qs.bind(this)),
            this.vt.add(this.Ki, "paste", !1, this.Xs.bind(this))),
            this.vt.add(this.Ki, "mousemove", !0, function(t) {
                ih(t) && n.Ys(t)
            }),
            this.vt.add(this.Ki, "mousedown", !0, function(t) {
                ih(t) && n.Js(t)
            }),
            this.vt.add(this.Ki, "mouseup", !0, function(t) {
                ih(t) && n.Zs(t)
            }),
            this.vt.add(this.Ki, "keydown", !0, function(t) {
                n.qs[uh.Input].onKeyboardChange(gh(t))
            }),
            this.vt.add(this.Ki, "keyup", !0, function(t) {
                n.qs[uh.Input].onKeyboardChange(gh(t))
            }),
            this.vt.add(this.Ki, "input", !0, function(t) {
                n.qs[uh.Input].onInputChange(nh(t))
            }),
            this.vt.add(this.Ki, "focus", !0, function(t) {
                n.tu(t, gh(t))
            }, !0),
            this.vt.add(this.Ki, "blur", !0, function(t) {
                n.nu(t, gh(t))
            }, !0),
            this.vt.add(this.Ki, "change", !0, function(t) {
                n.iu(t, gh(t))
            }, !0),
            this.vt.add(this.Ki, "touchstart", !0, function(t) {
                ih(t) && (n.ru(t, O.TOUCHSTART),
                n.eu())
            }),
            this.vt.add(this.Ki, "touchend", !0, function(t) {
                ih(t) && (n.ru(t, O.TOUCHEND),
                n.eu())
            }),
            this.vt.add(this.Ki, "touchmove", !0, function(t) {
                ih(t) && (n.ru(t, O.TOUCHMOVE),
                n.eu())
            }),
            this.vt.add(this.Ki, "touchcancel", !0, function(t) {
                ih(t) && n.ru(t, O.TOUCHCANCEL)
            }),
            this.vt.add(this.Ki, "play", !0, function(t) {
                n.su(t)
            }),
            this.vt.add(this.Ki, "pause", !0, function(t) {
                n.uu(t)
            }),
            this.vt.add(this.Ki, "scroll", !0, function(t) {
                t.bubbles ? n.eu() : n.ou(nh(t))
            }),
            this.vt.add(this.Ki, "resize", !1, function() {
                n.au()
            }),
            this.vt.add(this.Ki, "submit", !1, function(t) {
                n.cu(t)
            }),
            this.vt.add(this.Ki, "focus", !1, function() {
                n.hu()
            }),
            this.vt.add(this.Ki, "blur", !1, function() {
                n.fu()
            }),
            this.vt.add(this.Ki, "popstate", !1, function() {
                n.vu()
            }),
            this.vt.add(this.Ki, "selectstart", !0, function() {
                n.lu()
            }),
            this.vt.add(this.t, "selectionchange", !0, function() {
                n.lu()
            }),
            this.vt.add(this.Ki, "visibilitychange", !1, function(t) {
                n.addVisibilityChangeEvent()
            });
            var i = this.Ki.visualViewport;
            i ? (this.vt.add(i, "scroll", !0, function() {
                return n.eu()
            }),
            this.vt.add(i, "resize", !0, function() {
                return n.au()
            })) : this.vt.add(this.Ki, "mousewheel", !0, function() {
                n.eu()
            });
            var r = Fu(this.W, this.Ws, "pushState", !0);
            r && (this.kn.push(r),
            r.afterSync(function() {
                return n.vu()
            }));
            var e = Fu(this.W, this.Ws, "replaceState", !0);
            e && (this.kn.push(e),
            e.afterSync(function() {
                return n.vu()
            }));
            for (var s = function(t) {
                var i = Fu(u.W, u.Ki, t);
                if (!i)
                    return "continue";
                u.kn.push(i),
                i.before(function() {
                    n.zt.enqueue({
                        Kind: O.MODAL_OPEN,
                        Args: [t]
                    })
                }).afterSync(function() {
                    n.zt.enqueue({
                        Kind: O.MODAL_CLOSE,
                        Args: [t]
                    })
                })
            }, u = this, o = 0, a = zt; o < a.length; o++)
                s(a[o]);
            if ("function" == typeof this.Ki.document.hasFocus && this.zt.enqueue({
                Kind: this.Ki.document.hasFocus() ? O.WINDOW_FOCUS : O.WINDOW_BLUR,
                Args: []
            }),
            bi.matchMedia)
                for (var c = function(t, i, r) {
                    var e = bi.matchMedia(h.Ki, r);
                    if (!e)
                        return "continue";
                    var s = function() {
                        e.matches && n.zt.enqueue({
                            Kind: O.MEDIA_QUERY_CHANGE,
                            Args: [t, i]
                        })
                    };
                    h.vt.add(e, "change", !0, s),
                    s()
                }, h = this, f = 0, v = [["any-pointer", "coarse", "not screen and (any-pointer: fine)"], ["any-pointer", "fine", "only screen and (any-pointer: fine)"], ["any-hover", "none", "not screen and (any-hover: hover)"], ["any-hover", "hover", "only screen and (any-hover: hover)"], ["pointer", "none", "(pointer: none)"], ["pointer", "coarse", "(pointer: coarse)"], ["pointer", "fine", "(pointer: fine)"], ["prefers-color-scheme", "no-preference", "(prefers-color-scheme: no-preference)"], ["prefers-color-scheme", "light", "(prefers-color-scheme: light)"], ["prefers-color-scheme", "dark", "(prefers-color-scheme: dark)"]]; f < v.length; f++) {
                    var l = v[f];
                    c(l[0], l[1], l[2])
                }
            this.Us = !0
        }
        ,
        t.prototype.initResourceUploading = function() {
            this.cr.init(),
            this.Ls = !0
        }
        ,
        t.prototype.onDomLoad = function() {
            this.du(),
            this.pu(!0),
            this.$s.$i(h)
        }
        ,
        t.prototype.onLoad = function() {
            var t = this
              , n = !1
              , i = Tu.wrap(function() {
                n || (n = !0,
                t.qs[uh.Perf].onLoad(),
                t.wu(),
                t.pu())
            }, "eventwatcher#onLoad");
            new uo(i,0).start(),
            be().then(i)
        }
        ,
        t.prototype.ajaxWatcher = function() {
            return this.qs[uh.Ajax]
        }
        ,
        t.prototype.consoleWatcher = function() {
            return this.qs[uh.Console]
        }
        ,
        t.prototype.perfWatcher = function() {
            return this.qs[uh.Perf]
        }
        ,
        t.prototype.bundleEvents = function() {
            var t = this;
            return this.zt.enqueueSimultaneousEventsIn(function(n) {
                var i, r = pr(), e = t.$s.processMutations(n);
                if (e.length > 0) {
                    var s = pr() - r;
                    e.push({
                        Kind: O.TIMING,
                        Args: [[F.Internal, D.Serialization, W.ProcessMut, n, s]],
                        When: n
                    })
                }
                for (var u = 0, o = t.qs; u < o.length; u++) {
                    var a = o[u];
                    null === (i = a.tick) || void 0 === i || i.call(a)
                }
                return t.pu(),
                e
            })
        }
        ,
        t.prototype.stop = function(t) {
            var n, i;
            if (this.Us) {
                this.Us = !1,
                this.qs[uh.Perf].onLoad(),
                this.W.measurer.flush(),
                this.zt.processEvents(),
                this.W.taskQueue.flush(),
                this.Zi.flush(),
                this.$s.stop();
                for (var r = 0, e = this.qs; r < e.length; r++)
                    e[r].stop(t);
                null === (n = this.Vs) || void 0 === n || n.disconnect(),
                null === (i = this.vt) || void 0 === i || i.clearAll(),
                this.Ds = new Pu;
                for (var s = 0, u = this.kn; s < u.length; s++)
                    u[s].disable();
                this.kn = [],
                this.zt.shutdown(t)
            }
        }
        ,
        t.prototype.recordingIsDetached = function() {
            return this.$s.recordingIsDetached()
        }
        ,
        t.prototype.preVisit = function(t, n) {
            var i = this
              , r = t.id
              , e = t.name;
            switch (e) {
            case "#document":
            case "#document-fragment":
                if (this.Fs[r] = r,
                "#document-fragment" === e) {
                    var s = this.vt.createChild();
                    s.add(n, "scroll", !0, function(t) {
                        return i.ou(nh(t))
                    }),
                    s.add(n, "change", !0, function(t) {
                        t.composed || i.iu(t, gh(t))
                    }, !0),
                    this.Ds.set(n, s)
                }
                var u = n;
                try {
                    if (!u.adoptedStyleSheets || 0 === u.adoptedStyleSheets.length)
                        break
                } catch (t) {
                    break
                }
                this.qs[uh.StyleSheet].onSetAdoptedStyleSheets(n);
                break;
            case "INPUT":
            case "TEXTAREA":
            case "SELECT":
                this.qs[uh.Input].addInput(n);
                break;
            case "LINK":
            case "STYLE":
            case "style":
                var o = n
                  , a = o.sheet;
                if (!a)
                    break;
                var c = this.qs[uh.StyleSheet];
                c.ensureHook(a),
                a.disabled && c.onDisableSheet(a, !0),
                "STYLE" === e || "style" === e ? c.snapshotEl(o) : kc(o) && (c.snapshotEl(o),
                this.vt.add(o, "load", !1, function() {
                    c.snapshotEl(o)
                }));
                break;
            case "BODY":
                this.pu(),
                this.lu();
                break;
            case "FRAME":
            case "IFRAME":
                this.Ms(n)
            }
        }
        ,
        t.prototype.visit = function(t) {
            var n = t[0]
              , i = t[1]
              , r = t[2]
              , e = t[3];
            this.gu(n, i, r),
            this.mu(n, i, r, e)
        }
        ,
        t.prototype.gu = function(t, n, i) {
            var r = this
              , e = n.name
              , s = n.type;
            if (t === bo.New && 10 !== s) {
                switch (e) {
                case "VIDEO":
                case "AUDIO":
                    i.paused || this.zt.enqueue({
                        Kind: O.PLAY,
                        Args: [Ss(i)]
                    });
                    break;
                case "DIALOG":
                    var u = i;
                    u.open && this.zt.enqueue({
                        Kind: O.DIALOG,
                        Args: [Ss(u), !0, Oc(u)]
                    });
                    break;
                case "CANVAS":
                    this.qs[uh.Canvas].flush(i);
                    break;
                default:
                    e && "#" !== e[0] && e.indexOf("-") > -1 && this.qs[uh.CustomElement].onCustomNodeVisited(i)
                }
                "scrollLeft"in i && "scrollTop"in i && this.W.measurer.enqueue(function() {
                    var t = i;
                    0 == t.scrollLeft && 0 == t.scrollTop || r.ou(t)
                })
            }
        }
        ,
        t.prototype.mu = function(t, n, i, r) {
            var e = this
              , s = this.W.recording.flags().DisableImgUrlPrivacy;
            if (!s || this.Ls) {
                var u = n.tag;
                if (n.type === xi && r && !function(t, n) {
                    return void 0 === n && (n = ms(t)),
                    ws(t, n) || gs(t, n)
                }(i)) {
                    var o = "unknown";
                    "link" === u && fh.test(r.rel) ? o = "css" : vh.test(null != u ? u : "") && (o = "img");
                    var a = function(t, n, i) {
                        for (var r, e, s = [], u = 0, o = wh; u < o.length; u++) {
                            var a = o[u];
                            i[a] && ph[a][t] && s.push(i[a])
                        }
                        if ("link" === t && i.href && (r = i.rel) && r.indexOf("stylesheet") > -1 && s.push(i.href),
                        ("img" === t || "source" === t) && (e = i.srcset) && null == e.match(/^\s*$/))
                            for (var c = 0, h = function(t, n) {
                                void 0 === n && (n = !0);
                                var i = "".concat(t.replace(/\s+/g, " "), ",").match(n ? vs : fs);
                                if (!i)
                                    return [];
                                for (var r = [], e = 0, s = i; e < s.length; e++) {
                                    var u = s[e];
                                    r.push(u.replace(/^[, ]+|[, ]+$/g, ""))
                                }
                                return r
                            }(e, !0); c < h.length; c++) {
                                var f = h[c];
                                s.push(Ns(f.trim().split(/\s+/)[0], {
                                    source: "dom",
                                    type: "srcset"
                                }))
                            }
                        var v = n;
                        if (i.style && v.style) {
                            var l = v.style.backgroundImage;
                            if (l && l.length <= 300) {
                                var d = void 0;
                                for (ns.lastIndex = 0; d = ns.exec(l); ) {
                                    var p = d[1];
                                    p && s.push(Ns(p.trim(), {
                                        source: "dom",
                                        type: "css"
                                    }))
                                }
                            }
                        }
                        return s
                    }(u, i, r);
                    if (0 === a.length) {
                        if (s)
                            return;
                        for (var c = 0, h = wh; c < h.length; c++) {
                            var f = r[h[c]];
                            f && a.push(f)
                        }
                        a.length > 0 && this.W.taskQueue.enqueue(function() {
                            return e.yu(a, !1, o)
                        })
                    } else
                        this.W.taskQueue.enqueue(function() {
                            return e.yu(a, !0, o)
                        })
                }
            }
        }
        ,
        t.prototype.Vn = function(t) {
            var n, i = t.id, r = bs(i), e = t.name;
            if (r) {
                switch (e) {
                case "#document":
                case "#document-fragment":
                    delete this.Fs[i];
                    var s = this.Ds.get(r);
                    s && (this.vt.clearChild(s),
                    this.Ds["delete"](r));
                    break;
                case "IFRAME":
                    this.Ps(r);
                    break;
                case "LINK":
                case "STYLE":
                case "style":
                    var u = r.sheet;
                    u && this.qs[uh.StyleSheet].removeHook(u);
                    break;
                case "INPUT":
                case "TEXTAREA":
                case "SELECT":
                    var o = r;
                    this.qs[uh.Input].removeInput(o)
                }
                if ("function" == typeof r.getElementsByTagName)
                    for (var a = null !== (n = r.getElementsByTagName("iframe")) && void 0 !== n ? n : [], c = 0; c < a.length; c++) {
                        var h = a[c];
                        this.Ps(h)
                    }
            }
        }
        ,
        t.prototype.bi = function() {
            var t = this;
            this.Bs || (this.Bs = !0,
            this.W.measurer.enqueue(function() {
                for (var n in t.Bs = !1,
                t.Fs) {
                    var i = ys(t.Fs[n]);
                    if (i) {
                        var r = bs(i.id);
                        r && t.qs[uh.Animation].snapshot(r)
                    }
                }
            }))
        }
        ,
        t.prototype.yu = function(t, n, i) {
            var r;
            void 0 === n && (n = !1),
            window;
            for (var e = 0, s = t; e < s.length; e++) {
                var u = s[e];
                /^(([a-z\-_]+):|\/\/)/i.test(u) && (this.Ls && n && (void 0 === r && (r = Ns(Le(this.Ki), {
                    source: "page",
                    type: "base"
                })),
                this.cr.uploadIfNeeded(this.Ki, Ne(r, u), i)),
                this.Zi.record(u))
            }
            window
        }
        ,
        t.prototype.Ys = function(t) {
            var n = Ss(nh(t));
            this.zt.enqueue({
                Kind: O.MOUSEMOVE,
                Args: n ? [t.clientX, t.clientY, n] : [t.clientX, t.clientY]
            })
        }
        ,
        t.prototype.Js = function(t) {
            this.zt.enqueue({
                Kind: O.MOUSEDOWN,
                Args: [t.clientX, t.clientY]
            })
        }
        ,
        t.prototype.Zs = function(t) {
            this.zt.enqueue({
                Kind: O.MOUSEUP,
                Args: [t.clientX, t.clientY]
            })
        }
        ,
        t.prototype.ru = function(t, n) {
            if (void 0 !== t.changedTouches)
                for (var i = 0; i < t.changedTouches.length; ++i) {
                    var r = t.changedTouches[i];
                    isNaN(parseInt(r.identifier, 10)) && (r.identifier = 0);
                    var e = [r.identifier, r.clientX, r.clientY];
                    this.zt.enqueue({
                        Kind: n,
                        Args: e
                    })
                }
        }
        ,
        t.prototype.su = function(t) {
            var n = Ss(nh(t));
            n && this.zt.enqueue({
                Kind: O.PLAY,
                Args: [n]
            })
        }
        ,
        t.prototype.uu = function(t) {
            var n = Ss(nh(t));
            n && this.zt.enqueue({
                Kind: O.PAUSE,
                Args: [n]
            })
        }
        ,
        t.prototype.hu = function() {
            this.zt.enqueue({
                Kind: O.WINDOW_FOCUS,
                Args: []
            })
        }
        ,
        t.prototype.fu = function() {
            this.zt.enqueue({
                Kind: O.WINDOW_BLUR,
                Args: []
            })
        }
        ,
        t.prototype.pu = function(t) {
            var n = this;
            void 0 === t && (t = !1),
            this.W.measurer.enqueue(function() {
                return n.bu(t)
            })
        }
        ,
        t.prototype.bu = function(t) {
            var n = this;
            void 0 === t && (t = !1);
            var i, r = (i = this.Ki.document).scrollingElement || i.body || i.documentElement, e = Ss(r);
            if (e) {
                var s = function(t) {
                    n.zt.enqueue(t)
                }
                  , u = function(t, n) {
                    var i, r = t.documentElement.getBoundingClientRect(), e = null !== (i = t.body) && void 0 !== i ? i : {
                        scrollHeight: 0,
                        scrollWidth: 0
                    };
                    return {
                        width: Math.max(r.width, n.scrollWidth, e.scrollWidth),
                        height: Math.max(r.height, n.scrollHeight, e.scrollHeight)
                    }
                }(this.Ki.document, r);
                qu(u, this.Su) || (this.Su = u,
                s({
                    Kind: O.RESIZE_DOCUMENT_CONTENT,
                    Args: [u.width, u.height]
                }));
                var o, a, c, h, f = Yu(this.Ki, t ? void 0 : this.ku), v = function(t, n) {
                    var i = t.visualViewport;
                    if (i)
                        return i;
                    var r = n;
                    return void 0 === r && (r = Yu(t)),
                    new Ju(t,r)
                }(this.Ki, f);
                f.hasKnownPosition ? (zu(f, this.ku) || s({
                    Kind: O.SCROLL_LAYOUT,
                    Args: [e, f.pageLeft, f.pageTop]
                }),
                o = v,
                (a = this._u) && o.offsetLeft == a.offsetLeft && o.offsetTop == a.offsetTop || s({
                    Kind: O.SCROLL_VISUAL_OFFSET,
                    Args: [e, v.offsetLeft, v.offsetTop]
                })) : zu(v, this._u) || s({
                    Kind: O.SCROLL_LAYOUT,
                    Args: [e, v.pageLeft, v.pageTop]
                }),
                function(t, n) {
                    return n && t.width == n.width && t.height == n.height && t.clientWidth == n.clientWidth && t.clientHeight == n.clientHeight
                }(f, this.ku) || s({
                    Kind: O.RESIZE_LAYOUT,
                    Args: to(f)
                }),
                qu(v, this._u) || s({
                    Kind: O.RESIZE_VISUAL,
                    Args: [v.width, v.height]
                }),
                this.ku = ((h = Vu(c = f)).clientWidth = c.clientWidth,
                h.clientHeight = c.clientHeight,
                h),
                this._u = function(t) {
                    var n = Vu(t);
                    return n.offsetLeft = t.offsetLeft,
                    n.offsetTop = t.offsetTop,
                    n
                }(v)
            }
        }
        ,
        t.prototype.Au = function(t, n) {
            var i = this;
            t in this.Ns || (this.Ns[t] = n,
            new uo(function() {
                i.W.measurer.enqueue(function() {
                    if (t in i.Ns) {
                        var n = i.Ns[t];
                        delete i.Ns[t],
                        n()
                    }
                })
            }
            ,Ht.ScrollSampleInterval).start())
        }
        ,
        t.prototype.eu = function() {
            var t = this;
            this.Au(ah.Scroll, function() {
                return t.bu(!1)
            })
        }
        ,
        t.prototype.au = function() {
            var t = this;
            this.Au(ah.Resize, function() {
                return t.bu(!0)
            })
        }
        ,
        t.prototype.ou = function(t) {
            var n = this
              , i = Ss(t);
            i && this.Au(i, function() {
                if (Ss(t) === i) {
                    var r = t;
                    i && "number" == typeof r.scrollLeft && (n.zt.enqueue({
                        Kind: O.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                        Args: [i, r.scrollWidth, r.scrollHeight]
                    }),
                    n.zt.enqueue({
                        Kind: O.SCROLL_LAYOUT,
                        Args: [i, r.scrollLeft, r.scrollTop]
                    }),
                    ye().then(function() {
                        n.$s.resizer().isObserved(i) || n.$s.resizer().observe(t)
                    }))
                }
            })
        }
        ,
        t.prototype.du = function() {
            this.zt.enqueue({
                Kind: O.DOMLOADED,
                Args: []
            })
        }
        ,
        t.prototype.wu = function() {
            this.zt.enqueue({
                Kind: O.LOAD,
                Args: []
            })
        }
        ,
        t.prototype.getNavigateEvent = function(t, n) {
            void 0 === n && (n = O.NAVIGATE);
            var i = {
                Kind: n,
                Args: [Ns(t, {
                    source: "event",
                    type: O.NAVIGATE
                })]
            };
            return n === O.ENTRY_NAVIGATE ? (i.Args.push(this.Iu()),
            i) : i
        }
        ,
        t.prototype.vu = function() {
            var t = this.Hs.href;
            this.zs != t && (this.zs = t,
            this.As.onNavigate(t),
            this.zt.enqueue(this.getNavigateEvent(t)))
        }
        ,
        t.prototype.Iu = function() {
            try {
                var t = this.Ki.performance;
                if (!t || !t.navigation)
                    return "unknown";
                switch (t.navigation.type) {
                case PerformanceNavigation.TYPE_NAVIGATE:
                    return "navigate";
                case PerformanceNavigation.TYPE_RELOAD:
                    return "reload";
                case PerformanceNavigation.TYPE_BACK_FORWARD:
                    return "back_forward";
                default:
                    return "unknown"
                }
            } catch (t) {
                return "unknown"
            }
        }
        ,
        t.prototype.cu = function(t) {
            var n = Ss(nh(t));
            n && this.zt.enqueue({
                Kind: O.FORM_SUBMIT,
                Args: [n]
            })
        }
        ,
        t.prototype.tu = function(t, n) {
            var i = Ss(nh(t));
            i && this.zt.enqueue({
                Kind: O.FOCUS,
                Args: [i, n]
            })
        }
        ,
        t.prototype.nu = function(t, n) {
            var i = Ss(nh(t));
            i && this.zt.enqueue({
                Kind: O.BLUR,
                Args: [i, n]
            })
        }
        ,
        t.prototype.iu = function(t, n) {
            this.qs[uh.Input].onChange(nh(t), n)
        }
        ,
        t.prototype.lu = function() {
            var t = this;
            this.W.measurer.enqueue(function() {
                var n;
                try {
                    n = t.selectionArgs()
                } catch (t) {
                    return
                }
                for (var i = !1, r = 0; r < 4; r++)
                    if (t.Os[r] !== n[r]) {
                        i = !0;
                        break
                    }
                i && (t.Os = n,
                t.zt.enqueue({
                    Kind: O.SELECT,
                    Args: n
                }))
            })
        }
        ,
        t.prototype.selectionArgs = function() {
            if (!this.Ki.getSelection)
                return [];
            var t = this.Ki.getSelection();
            if (!t)
                return [];
            if ("None" == t.type)
                return [];
            if ("Caret" == t.type) {
                var n = Ss(t.anchorNode);
                return n ? [n, t.anchorOffset] : []
            }
            if (!t.anchorNode || !t.focusNode)
                return [];
            var i = dh(t.anchorNode, t.anchorOffset)
              , r = i[0]
              , e = i[1]
              , s = dh(t.focusNode, t.focusOffset)
              , u = s[0]
              , o = s[1]
              , a = Boolean(r.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_FOLLOWING)
              , c = a ? [r, u] : [u, r]
              , h = c[0]
              , f = c[1]
              , v = a ? [e, o] : [o, e]
              , l = v[0]
              , d = v[1];
            for (Ss(h) || (l = 0); h && !Ss(h) && h != f; )
                h = Oi(h) || Li(h);
            for (Ss(f) || (d = 0); f && !Ss(f) && f != h; )
                f = Ni(f) || Li(f);
            if (h == f && l == d)
                return [];
            var p = Ss(h)
              , w = Ss(f);
            return h && f && p && w ? [p, l, w, d, a] : []
        }
        ,
        t.prototype.Qs = function() {
            this.zt.enqueue({
                Kind: O.COPY,
                Args: []
            })
        }
        ,
        t.prototype.Xs = function() {
            this.zt.enqueue({
                Kind: O.PASTE,
                Args: []
            })
        }
        ,
        t.prototype.addVisibilityChangeEvent = function() {
            this.zt.enqueue({
                Kind: O.VISIBILITY_STATE,
                Args: [document.visibilityState]
            }),
            "hidden" === document.visibilityState && this.zt.singSwanSong(it.Hidden)
        }
        ,
        t
    }();
    function dh(t, n) {
        var i = t
          , r = Ui(i);
        if (!r)
            return [i, n];
        i = r;
        for (var e = 0; e < n - 1; e++) {
            var s = Oi(i);
            if (!s)
                return [i, 0];
            i = s
        }
        return [i, 0]
    }
    var ph = {
        src: {
            img: !0,
            embed: !0,
            source: !0
        },
        href: {
            use: !0,
            image: !0
        },
        data: {
            object: !0
        }
    }
      , wh = bi.objectKeys(ph);
    function gh(t) {
        var n;
        return !!(null !== (n = t[nn]) && void 0 !== n && n || t.isTrusted)
    }
    function mh(t) {
        return t.Kind === O.MOUSEMOVE || t.Kind === O.TOUCHMOVE || t.Kind === O.SCROLL_LAYOUT || t.Kind === O.SCROLL_VISUAL_OFFSET || t.Kind === O.RESIZE_VISUAL
    }
    var yh, bh, Sh = function() {
        function t(t, n) {
            this.me = t,
            this.Eu = n,
            this.Tu = [],
            this.Cu = 0
        }
        return t.prototype.add = function(t) {
            this.Tu.length > 0 && this.Tu[this.Tu.length - 1].When === t.When && this.Tu.pop(),
            0 === this.Tu.length ? (this.me.push(t),
            this.Cu = t.When) : t.When > this.Cu && (this.Cu = t.When),
            this.Tu.push(t)
        }
        ,
        t.prototype.finish = function(t, n) {
            void 0 === n && (n = []);
            var i = this.Tu.length;
            if (i <= 1)
                return !1;
            for (var r = [], e = this.Tu[0].When, u = this.Tu[i - 1].When, o = u - e != 0 ? u - e : 1, a = 0; a < this.Eu.length; ++a) {
                var c = this.Eu[a]
                  , h = this.Tu[0].Args[c]
                  , f = (this.Tu[1].When - e) / o
                  , v = (this.Tu[1].Args[c] - h) / f
                  , l = this.Tu[i - 2].Args[c]
                  , d = (u - this.Tu[i - 2].When) / o
                  , p = this.Tu[i - 1].Args[c]
                  , w = (p - l) / d;
                r.push(h, p, v, w)
            }
            return this.Tu[0].Kind = t,
            this.Tu[0].Args = s(s([this.Cu], n, !0), r, !0),
            !0
        }
        ,
        t.prototype.evts = function() {
            return this.Tu
        }
        ,
        t
    }();
    (bh = yh || (yh = {}))[bh.rageWindowMillis = 2e3] = "rageWindowMillis",
    bh[bh.defaultRageThreshold = 5] = "defaultRageThreshold",
    bh[bh.rageThresholdIfPageChanges = 8] = "rageThresholdIfPageChanges",
    bh[bh.thresholdChangeQuiescenceMillis = 2e3] = "thresholdChangeQuiescenceMillis";
    var kh, _h, Ah, Ih = function() {
        function t(t, n) {
            var i, r;
            void 0 === n && (n = wr),
            this.W = t,
            this.xu = n,
            this.Ru = new Eo,
            this.Ku = yh.defaultRageThreshold,
            this.ju = -1,
            this.Mu = new WeakMap;
            var e = t.recording.pageResponse();
            if (!e)
                throw new Error("Attempt to construct EasyBake before rec/page response is set.");
            for (var s = [".fs-ignore-rage-clicks", ".fs-ignore-rage-clicks *"], u = 0, o = null !== (r = null === (i = e.BehaviorSignalSettings) || void 0 === i ? void 0 : i.ElementBlocks) && void 0 !== r ? r : []; u < o.length; u++) {
                var a = o[u];
                a.Signals.indexOf(Rt.SignalRageClick) > -1 && (s.push(a.Selector),
                s.push("".concat(a.Selector, " *")))
            }
            var c = s.join(", ");
            Wo(c) ? this.Pu = [c] : this.Pu = s
        }
        return t.prototype.Ou = function(t) {
            var n = this.Mu.get(t);
            if (void 0 !== n)
                return n;
            for (var i = 0, r = this.Pu; i < r.length; i++) {
                var e = r[i];
                if (bi.elMatches(t, e))
                    return this.Mu.set(t, !0),
                    !0
            }
            return this.Mu.set(t, !1),
            !1
        }
        ,
        t.prototype.onEvent = function(t) {
            var n = t.Kind === O.RESOLVABLE_EVENT ? t.Args[0] : t.Kind;
            if (function(t) {
                switch (t) {
                case O.VALUECHANGE:
                case O.SCROLL_LAYOUT:
                case O.SCROLL_LAYOUT_CURVE:
                case O.SCROLL_VISUAL_OFFSET:
                case O.SCROLL_VISUAL_OFFSET_CURVE:
                case O.MUT_INSERT:
                case O.MUT_REMOVE:
                case O.MUT_ATTR:
                case O.MUT_SHADOW:
                case O.MUT_TEXT:
                case O.NAVIGATE:
                case O.LOAD:
                case O.FOCUS:
                case O.BLUR:
                case O.SELECT:
                case O.FORM_SUBMIT:
                case O.PLAY:
                case O.PAUSE:
                case O.MODAL_OPEN:
                case O.MODAL_CLOSE:
                    return !0
                }
                return !1
            }(n) && this.Ku !== yh.rageThresholdIfPageChanges)
                return this.Ku = yh.rageThresholdIfPageChanges,
                void (this.ju = this.xu());
            if (n === O.CLICK) {
                var i = this.xu()
                  , r = bs(fa([t])[0].Args[0]);
                if (r && Ss(r)) {
                    var e = r.nodeType === xi ? r : Li(r);
                    if (e && !this.Ou(e)) {
                        var s = as(r);
                        if (!s || "textarea" !== s && "select" !== s && ("input" !== s || "submit" === r.type)) {
                            this.Ru.push(i);
                            for (var u = i - yh.rageWindowMillis; ; ) {
                                var o = this.Ru.first();
                                if (!(void 0 !== o && o < u))
                                    break;
                                this.Ru.shift()
                            }
                            if (this.ju < i - yh.thresholdChangeQuiescenceMillis && (this.Ku = yh.defaultRageThreshold),
                            this.Ru.size() >= this.Ku) {
                                var a = this.W.recording.getCurrentSessionURL;
                                !function(t, n) {
                                    var i, r = "fullstory/rageclick";
                                    try {
                                        i = new CustomEvent(r,{
                                            detail: n,
                                            bubbles: !0,
                                            cancelable: !0
                                        })
                                    } catch (t) {
                                        (i = document.createEvent("customevent")).initCustomEvent(r, !0, !0, n)
                                    }
                                    bi.setWindowTimeout(window, Tu.wrap(function() {
                                        t.dispatchEvent(i)
                                    }, "dispatchRageClickEvent"), 0)
                                }(r, {
                                    eventStartTimeStamp: this.Ru.first(),
                                    eventEndTimeStamp: i,
                                    eventReplayUrlAtStart: a(),
                                    eventReplayUrlAtCurrentTime: a(!0)
                                }),
                                this.Ku = yh.defaultRageThreshold,
                                this.Ru = new Eo
                            }
                        }
                    }
                }
            }
        }
        ,
        t
    }(), Eh = function() {
        function t(t) {
            this.W = t,
            this.Nu = this.W.time.wallTime(),
            this.Lu = !1
        }
        return t.prototype.getLastUserActivityTS = function() {
            return this.Nu
        }
        ,
        t.prototype.getMsSinceLastUserActivity = function() {
            return bi.mathFloor(this.W.time.wallTime() - this.Nu)
        }
        ,
        t.prototype.resetUserActivity = function() {
            this.Nu = this.W.time.wallTime()
        }
        ,
        t.prototype.isHibernating = function() {
            return this.Lu
        }
        ,
        t.prototype.setHibernating = function() {
            this.Lu = !0
        }
        ,
        t
    }(), Th = function() {
        function t(t, n, i, r) {
            void 0 === r && (r = uo),
            this.W = t,
            this.Uu = n,
            this.zt = i,
            this.Fu = !1,
            this.Bu = !1,
            this.Du = !1,
            this.Hu = new r(this.Wu.bind(this),Ht.HeartbeatInterval),
            this.zu = new r(this.qu.bind(this),Ht.PageInactivityTimeout)
        }
        return t.prototype.getUserActivityModel = function() {
            return this.Uu
        }
        ,
        t.prototype.manualHibernateCheck = function() {
            this.Uu.isHibernating() || this.Uu.getMsSinceLastUserActivity() >= Ht.PageInactivityTimeout + 5e3 && this.qu()
        }
        ,
        t.prototype.intercept = function(t) {
            this.Fu || (this.manualHibernateCheck(),
            function(t) {
                switch (t) {
                case O.MOUSEDOWN:
                case O.MOUSEMOVE:
                case O.MOUSEMOVE_CURVE:
                case O.MOUSEUP:
                case O.TOUCHSTART:
                case O.TOUCHEND:
                case O.TOUCHMOVE:
                case O.TOUCHMOVE_CURVE:
                case O.TOUCHCANCEL:
                case O.CLICK:
                case O.SCROLL_LAYOUT:
                case O.SCROLL_LAYOUT_CURVE:
                case O.SCROLL_VISUAL_OFFSET:
                case O.SCROLL_VISUAL_OFFSET_CURVE:
                case O.NAVIGATE:
                    return !0
                }
                return !1
            }(t.Kind === O.RESOLVABLE_EVENT ? t.Args[0] : t.Kind) && (this.Uu.isHibernating() ? this.Vu() : this.$u()))
        }
        ,
        t.prototype.shutdown = function() {
            this.Hu.stop(),
            this.zu.stop()
        }
        ,
        t.prototype.$u = function(t) {
            var n = this;
            void 0 === t && (t = !0),
            this.Du || (this.Uu.resetUserActivity(),
            this.Hu.start(),
            this.zu.start(),
            t && (this.Du = !0,
            be().then(function() {
                n.Du = !1
            })))
        }
        ,
        t.prototype.start = function() {
            var t = this.W.recording.heartbeatInterval();
            this.Gu(t),
            this.$u(!1)
        }
        ,
        t.prototype.Gu = function(t) {
            var n = this.Hu.isRunning();
            this.Hu.start(t),
            n || this.Hu.stop()
        }
        ,
        t.prototype.Wu = function() {
            var t = this.Uu.getMsSinceLastUserActivity();
            t <= Ht.PageInactivityTimeout && this.zt.enqueue({
                Kind: O.HEARTBEAT,
                Args: [t]
            }),
            this.Hu.start()
        }
        ,
        t.prototype.qu = function() {
            if (!this.Uu.isHibernating()) {
                var t = !1;
                this.Uu.getMsSinceLastUserActivity() <= 2 * Ht.PageInactivityTimeout ? this.zt.enqueue({
                    Kind: O.UNLOAD,
                    Args: [it.Hibernation]
                }) : t = !0;
                try {
                    this.Fu = !0,
                    this.Uu.setHibernating(),
                    this.shutdown(),
                    this.zt.onHibernate(t)
                } finally {
                    this.Fu = !1
                }
            }
        }
        ,
        t.prototype.Vu = function() {
            this.Bu || (this.Bu = !0,
            this.W.recording.splitPage(it.Hibernation))
        }
        ,
        t
    }(), Ch = function() {
        function t() {}
        return t.prototype.encode = function(t) {
            return t
        }
        ,
        t
    }(), xh = function() {
        function t() {
            this.dict = {
                idx: -1,
                map: {}
            },
            this.nodeCount = 1,
            this.startIdx = 0
        }
        return t.prototype.encode = function(n) {
            if (0 == n.length)
                return [];
            var i, r, e = n[0], s = Object.prototype.hasOwnProperty.call(this.dict.map, e) ? this.dict.map[e] : void 0, u = [], o = 1;
            function a() {
                s ? o > 1 ? u.push([s.idx, o]) : u.push(s.idx) : u.push(e)
            }
            for (i = 1; i < n.length; i++)
                if (r = n[i],
                s && Object.prototype.hasOwnProperty.call(s.map, r))
                    o++,
                    e = r,
                    s = s.map[r];
                else {
                    a();
                    var c = this.startIdx + i - o;
                    null == s && this.nodeCount < t.MAX_NODES && (s = {
                        idx: c,
                        map: {}
                    },
                    this.dict.map[e] = s,
                    this.nodeCount++),
                    s && this.nodeCount < t.MAX_NODES && (s.map[r] = {
                        idx: c,
                        map: {}
                    },
                    this.nodeCount++),
                    o = 1,
                    e = r,
                    s = Object.prototype.hasOwnProperty.call(this.dict.map, r) ? this.dict.map[r] : void 0
                }
            return a(),
            this.startIdx += n.length,
            u
        }
        ,
        t.MAX_NODES = 1e4,
        t
    }(), Rh = function() {
        function t(t) {
            this.Qu = t,
            this.Xu = 0
        }
        return t.newBudget = function(n) {
            return void 0 === n && (n = 256e3),
            new t(n)
        }
        ,
        t.prototype.add = function(t) {
            this.Xu += t
        }
        ,
        t.prototype.isOver = function() {
            return this.Xu > this.Qu
        }
        ,
        t.prototype.reset = function() {
            this.Xu = 0
        }
        ,
        t
    }(), Kh = ((kh = {})[O.AJAX_REQUEST] = !0,
    kh[O.PERF_ENTRY] = !0,
    kh[O.RESOURCE_TIMING_BUFFER_FULL] = !0,
    kh), jh = function() {
        function t(t, n) {
            void 0 === n && (n = Rh.newBudget(t.options.networkBudget)),
            this.W = t,
            this.Yu = n,
            this.zt = new Eo,
            this.Ju = 1,
            this.Zu = {},
            this.no = !1,
            this.io = [],
            this.ro = !0,
            this.init()
        }
        return t.prototype.init = function() {
            if (1 === this.Ju) {
                var t, n = !!this.W.recording.flags().UseCompression && "CompressionStream"in (t = this.W.window) && "TextEncoderStream"in t;
                this.ro = !!this.W.recording.flags().UseLZEncoding || !n
            }
        }
        ,
        t.prototype.size = function() {
            return this.zt.size()
        }
        ,
        t.prototype.add = function(t) {
            var n = !0;
            switch (t.Kind) {
            case O.SET_FRAME_BASE:
            case O.MUT_INSERT:
            case O.MUT_SHADOW:
            case O.RESOLVABLE_EVENT:
                n = !1
            }
            Kh[t.Kind] || (this.no = !0),
            this.zt.push([t, n ? eu(t) : void 0])
        }
        ,
        t.prototype.nextBundle = function(n) {
            if (0 !== this.zt.size())
                return n.flush || t.forceFlush || this.no ? this.eo(n) : void 0
        }
        ,
        t.prototype.addEndMarkerEvent = function(t) {
            this.io.push(t)
        }
        ,
        t.prototype.persistEndMarkerEventsTo = function(t) {
            for (var n = 0, i = this.io; n < i.length; n++) {
                var r = i[n];
                t.addEndMarkerEvent(r)
            }
        }
        ,
        t.prototype.eo = function(t) {
            var n = this.so(t);
            if (n) {
                0 === this.zt.size() && (this.no = !1);
                var i = n[0]
                  , r = n[1];
                return function(t, n, i) {
                    var r = "{\"Seq\":".concat(t, ",\"When\":").concat(n, ",\"Evts\":[").concat(i, "]}");
                    return [t, {
                        type: "string",
                        data: r
                    }, r.length]
                }(this.Ju++, i, r)
            }
        }
        ,
        t.prototype.so = function(t) {
            Ru(this.zt.size() > 0, "builder#_serializeEvents"),
            this.Yu.reset();
            var n, i, r = this.zt.first()[0], e = Oh(r), s = this.uo(t), u = s[0], o = s[1];
            if (this.oo = (n = o,
            i = this.oo,
            n ? i ? Oh(n) >= Oh(i) ? n : i : n : i),
            !this.ao(t))
                return this.co(u, this.oo),
                this.oo = void 0,
                [e, Mh(u)];
            this.zt.unshift([r, Mh(u)])
        }
        ,
        t.prototype.uo = function(t) {
            for (var n, r = [], e = [], u = this.zt.shift(); u; u = this.zt.shift()) {
                var o = u[0]
                  , a = u[1];
                if (n = o,
                void 0 === a) {
                    var c = fa([o])[0];
                    if (this.ro) {
                        var h = this.ho(c)
                          , f = h[0]
                          , v = h[1];
                        a = eu(f),
                        e.push.apply(e, v)
                    } else {
                        var l = pr();
                        a = eu(c),
                        e.push(pr() - l)
                    }
                }
                if (r.push(a),
                this.Yu.add(a.length),
                !t.flush && this.Yu.isOver())
                    break
            }
            return n && function(t, n, r) {
                n.length <= 0 || t.push(function(t, n) {
                    var r = n[0]
                      , e = n.slice(1);
                    return eu(i(i({}, Nh(t)), {
                        Kind: O.TIMING,
                        Args: [s([F.Internal, D.Serialization, W.LzEncoding, Oh(t), r], e.map(function(t) {
                            return [W.LzEncoding, t]
                        }), !0)]
                    }))
                }(r, n))
            }(r, e, n),
            [r, n]
        }
        ,
        t.prototype.ao = function(t) {
            return !(!this.W.recording.flags().UseMinNetworkBudget || t.bypassMinBudget || t.flush || this.Yu.isOver())
        }
        ,
        t.prototype.co = function(t, n) {
            Ru(!!n, "builder#_finalizeQueue"),
            n && function(t, n, r) {
                Ru(n.length > 0, "builder#addMarkers");
                for (var e = 0, s = n; e < s.length; e++) {
                    var u = s[e];
                    t.push(eu(i(i({}, Nh(r)), u)))
                }
            }(t, this.io, n)
        }
        ,
        t.prototype.ho = function(t) {
            var n = [];
            switch (t.Kind) {
            case O.SET_FRAME_BASE:
                var i = cr(t.PIds, t.FId);
                delete this.Zu[i];
                break;
            case O.MUT_INSERT:
                var r = pr();
                t.Args[2] = this.fo(t.PIds, t.FId, t.Args[2]),
                n.push(pr() - r);
                break;
            case O.MUT_SHADOW:
                r = pr(),
                t.Args[1] = this.fo(t.PIds, t.FId, t.Args[1]),
                n.push(pr() - r)
            }
            return [t, n]
        }
        ,
        t.prototype.fo = function(t, n, i) {
            void 0 === t && (t = []),
            void 0 === n && (n = 0);
            var r = cr(t, n);
            return this.Zu[r] || (this.Zu[r] = this.ro ? new xh : new Ch),
            this.Zu[r].encode(i)
        }
        ,
        t.forceFlush = !1,
        t
    }();
    function Mh(t) {
        return t.join(",")
    }
    function Ph(t, n, i) {
        var r = new jh(t,i);
        return n && n.persistEndMarkerEventsTo(r),
        r
    }
    function Oh(t) {
        var n = t.When;
        return "number" == typeof n ? n : 0
    }
    function Nh(t) {
        return {
            When: Oh(t),
            FId: t.FId,
            PIds: t.PIds
        }
    }
    function Lh(t, n, i, s) {
        return void 0 === n && (n = uo),
        void 0 === s && (s = 5e3),
        r(this, void 0, ae, function() {
            var u;
            return e(this, function(o) {
                return u = 0,
                [2, function o() {
                    return r(this, void 0, ae, function() {
                        var r, a;
                        return e(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]),
                                r = _h.NoRetry,
                                [4, t()];
                            case 1:
                                return r === e.sent() ? [2] : [3, 3];
                            case 2:
                                return a = e.sent(),
                                "retryWithBackoff caught error: ".concat(a),
                                [3, 3];
                            case 3:
                                return "retryWithBackoff retrying ".concat(u + 1),
                                [4, Fh(Uh(u++, s), n, i)];
                            case 4:
                                return e.sent(),
                                [2, o()]
                            }
                        })
                    })
                }()]
            })
        })
    }
    function Uh(t, n) {
        void 0 === n && (n = 5e3);
        var i = bi.mathMin(Ht.BackoffMax, bi.mathPow(2, t) * n);
        return i + .25 * bi.mathRandom() * i
    }
    function Fh(t, n, i) {
        return new ae(function(r) {
            var e = new n(function() {
                return r()
            }
            ,t).start();
            null == i || i(e)
        }
        )
    }
    (Ah = _h || (_h = {}))[Ah.NoRetry = 0] = "NoRetry",
    Ah[Ah.Retry = 1] = "Retry";
    var Bh = function() {
        function t(t, n, i) {
            void 0 === i && (i = uo),
            this.W = t,
            this.vo = n,
            this.lo = i,
            this["do"] = !1,
            this.po = 0,
            this.wo = !1,
            this.mo = 16e6,
            this.yo = 1e4,
            this.bo = 100,
            this.So = 1e3,
            this.ko = Ph(this.W, void 0, Rh.newBudget(this.yo))
        }
        return t.prototype.addEndMarkerEvent = function(t) {
            this.ko.addEndMarkerEvent(t)
        }
        ,
        t.prototype.intercept = function(t) {
            if (this.wo)
                switch (t.Kind) {
                case O.SYS_CUSTOM:
                case O.SYS_SETVAR:
                    this.ko.add(t),
                    this._o()
                }
        }
        ,
        t.prototype.startPipeline = function(t) {
            this.W.recording.flags().EnableRecEvents && (this.Ao = t.isNewSession,
            this.Io = t.orgId,
            this.Eo = t.pageId,
            this.To = t.serverPageStart,
            this.Co = t.sessionId,
            this.xo = t.userId,
            this.wo = "boolean" == typeof this.Ao && Gi(this.Io) && Gi(this.xo) && Gi(this.Co) && Gi(this.Eo),
            Ru(this.wo, "fastlane#options"),
            this._o())
        }
        ,
        t.prototype.stopPipeline = function() {
            var t;
            this.wo = !1,
            null === (t = this.Lt) || void 0 === t || t.stop(),
            this.ko = Ph(this.W, this.ko, Rh.newBudget(this.yo))
        }
        ,
        t.prototype._o = function() {
            var t;
            this.wo && !(null === (t = this.Lt) || void 0 === t ? void 0 : t.isRunning()) && (this.Lt || (this.Lt = new this.lo(this.Ro.bind(this),this.bo)),
            this.Lt.start())
        }
        ,
        t.prototype.Ro = function() {
            return r(this, void 0, ae, function() {
                var t, n, i = this;
                return e(this, function(s) {
                    switch (s.label) {
                    case 0:
                        if (!this.wo || this["do"])
                            return [2];
                        if (!(t = this.ko.nextBundle({
                            bypassMinBudget: !0
                        })))
                            return [2];
                        n = {
                            bundle: t,
                            deltaT: null,
                            isNewSession: this.Ao,
                            lastUserActivity: 0,
                            orgId: this.Io,
                            pageId: this.Eo,
                            serverBundleTime: this.po,
                            serverPageStart: this.To,
                            sessionId: this.Co,
                            userId: this.xo,
                            version: this.W.recording.bundleApiVersion()
                        },
                        s.label = 1;
                    case 1:
                        return s.trys.push([1, 3, 4, 5]),
                        this["do"] = !0,
                        [4, Lh(function() {
                            return r(i, void 0, ae, function() {
                                var t, i, r;
                                return e(this, function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]),
                                        [4, this.vo.event(n)];
                                    case 1:
                                        return t = e.sent(),
                                        i = t[0],
                                        r = t[1],
                                        i >= this.mo && this.stopPipeline(),
                                        this.po = r.BundleTime,
                                        [3, 3];
                                    case 2:
                                        return Ir(e.sent()) ? [3, 3] : [2, _h.Retry];
                                    case 3:
                                        return [2, _h.NoRetry]
                                    }
                                })
                            })
                        }, this.lo, function(t) {
                            return i.Ko = t
                        }, this.So)];
                    case 2:
                        return s.sent(),
                        [3, 5];
                    case 3:
                        return s.sent(),
                        this.stopPipeline(),
                        [3, 5];
                    case 4:
                        return this["do"] = !1,
                        this.ko.size() > 0 && this._o(),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            })
        }
        ,
        t
    }()
      , Dh = function() {
        function t(t, n, i, r, e, s, u) {
            void 0 === r && (r = function() {
                return []
            }
            ),
            void 0 === e && (e = so),
            void 0 === s && (s = uo);
            var o = this;
            this.W = t,
            this.jo = n,
            this.Mo = r,
            this.Po = e,
            this.Oo = u,
            this.No = 0,
            this.Lo = [],
            this.Uo = !1,
            this.Fo = !1,
            this.Bo = 0,
            this.Do = -1,
            this.Ho = !1,
            this.En = [],
            this.Wo = [],
            this.zo = new Hh,
            this.qo = new s(function() {
                window,
                o.processEvents(!0),
                window
            }
            ,Ht.CurveSamplingInterval),
            this.Vo = new this.Po(Ht.MutationProcessingInterval),
            i && (this.$o = new Th(this.W,i,this,s),
            this.Wo.push(this.$o)),
            this.Wo.push(this.zo),
            u && this.Wo.push(u)
        }
        return t.prototype.startPipeline = function(t) {
            var n, i, s;
            return r(this, void 0, ae, function() {
                var r = this;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return this.Fo || this.Uo ? [2] : (this.Uo = !0,
                        t.frameId && (this.No = t.frameId),
                        t.parentIds && (this.Lo = t.parentIds),
                        t.fixWhenValues && 0 === (null !== (n = t.frameId) && void 0 !== n ? n : 0) && this.zo.startPipeline(),
                        null === (i = this.Oo) || void 0 === i || i.startPipeline(t),
                        [4, ye()]);
                    case 1:
                        return e.sent(),
                        this.processEvents(),
                        [4, ye()];
                    case 2:
                        return e.sent(),
                        window,
                        this.Vo.start(function() {
                            window,
                            r.processEvents(),
                            window
                        }),
                        null === (s = this.$o) || void 0 === s || s.start(),
                        this.jo.startPipeline(t),
                        window,
                        [2]
                    }
                })
            })
        }
        ,
        t.prototype.enableEasyBake = function() {
            this.Go = new Ih(this.W)
        }
        ,
        t.prototype.enqueueSimultaneousEventsIn = function(t) {
            if (0 === this.Bo) {
                var n = this.W.time.now();
                this.Do = n > this.Do ? n : this.Do
            }
            try {
                return this.Bo++,
                t(this.Do)
            } finally {
                this.Bo--,
                this.Bo < 0 && (this.Bo = 0)
            }
        }
        ,
        t.prototype.enqueue = function(t) {
            var n = this.Bo > 0 ? this.Do : this.W.time.now();
            this.Qo(n, t),
            eo.checkForBrokenSchedulers()
        }
        ,
        t.prototype.Qo = function(t, n) {
            var i;
            if (!this.Fo) {
                var r = t;
                r < this.Do && (r = this.Do),
                this.Do = r;
                var e, s = n;
                s.When = r,
                this.En.push(s);
                try {
                    null === (i = this.Go) || void 0 === i || i.onEvent(s)
                } catch (t) {
                    Tu.send("easyBake", {
                        err: t,
                        kind: s.Kind
                    })
                }
                !this.qo.isRunning() && (e = s,
                this.W.recording.flags().EnableRecEvents || mh(e)) && this.qo.start(this.W.recording.flags().EnableRecEvents ? bi.mathMax(50, 100) : Ht.CurveSamplingInterval)
            }
        }
        ,
        t.prototype.enqueueFirst = function(t) {
            if (this.En.length > 0) {
                var n = t;
                n.When = this.En[0].When,
                this.En.unshift(n)
            } else
                this.enqueue(t)
        }
        ,
        t.prototype.addUnload = function(t) {
            this.Ho || (this.Ho = !0,
            this.enqueue({
                Kind: O.UNLOAD,
                Args: [t]
            }),
            this.singSwanSong(t))
        }
        ,
        t.prototype.shutdown = function(t) {
            this.addUnload(t),
            this.Xo(),
            this.Fo = !0,
            this.Yo()
        }
        ,
        t.prototype.Xo = function() {
            var t, n;
            this.processEvents(),
            null === (n = (t = this.jo).send) || void 0 === n || n.call(t)
        }
        ,
        t.prototype.singSwanSong = function(t) {
            var n, i;
            this.Fo || (window,
            this.Xo(),
            t === it.Hidden && this.Ho || null === (i = (n = this.jo).send) || void 0 === i || i.call(n, {
                mode: "sing",
                reason: t
            }),
            window)
        }
        ,
        t.prototype.rebaseIframe = function(t, n) {
            for (var i = Math.max(0, n), r = this.W.time.startTime(), e = function(n) {
                var e = r + n - t;
                return e >= i ? e : i
            }, s = 0, u = this.En; s < u.length; s++) {
                var o = u[s];
                o.When = e(o.When)
            }
            -1 === this.Do ? this.Do = i : this.Do = e(this.Do)
        }
        ,
        t.prototype.processEvents = function(t) {
            if (this.Uo) {
                var n = this.En;
                this.En = [];
                var i = function(t) {
                    if (0 == t.length)
                        return t;
                    for (var n, i = [], r = new Sh(i,[0, 1]), e = {}, s = {}, u = {}, o = 0, a = t; o < a.length; o++) {
                        var c = a[o];
                        if (mh(c))
                            switch (c.Kind) {
                            case O.MOUSEMOVE:
                                r.add(c);
                                break;
                            case O.TOUCHMOVE:
                                (v = c.Args[0])in e || (e[v] = new Sh(i,[1, 2])),
                                e[v].add(c);
                                break;
                            case O.SCROLL_LAYOUT:
                                (v = c.Args[0])in s || (s[v] = new Sh(i,[1, 2])),
                                s[v].add(c);
                                break;
                            case O.SCROLL_VISUAL_OFFSET:
                                (v = c.Args[0])in u || (u[v] = new Sh(i,[1, 2])),
                                u[v].add(c);
                                break;
                            case O.RESIZE_VISUAL:
                                n || (n = new Sh(i,[0, 1])),
                                n.add(c);
                                break;
                            default:
                                _e()
                            }
                        else
                            i.push(c)
                    }
                    if (r.finish(O.MOUSEMOVE_CURVE)) {
                        var h = r.evts();
                        if (h.length > 0) {
                            var f = h[h.length - 1].Args[2];
                            f && (h[0].Args[9] = f)
                        }
                    }
                    for (var v in s)
                        s[l = parseInt(v, 10)].finish(O.SCROLL_LAYOUT_CURVE, [l]);
                    for (var v in u)
                        u[l = parseInt(v, 10)].finish(O.SCROLL_VISUAL_OFFSET_CURVE, [l]);
                    for (var v in e) {
                        var l;
                        e[l = parseInt(v, 10)].finish(O.TOUCHMOVE_CURVE, [l])
                    }
                    return n && n.finish(O.RESIZE_VISUAL_CURVE),
                    i
                }(n);
                t || (i = i.concat(this.Mo())),
                this.Jo(i),
                this.sendEvents(this.W.recording.pageSignature(), i)
            }
        }
        ,
        t.prototype.registerInterceptor = function(t) {
            this.Wo.push(t)
        }
        ,
        t.prototype.sendEvents = function(t, n) {
            if (0 != n.length) {
                if (this.Wo.length > 0)
                    for (var i = 0, r = n; i < r.length; i++)
                        for (var e = r[i], s = 0, u = this.Wo; s < u.length; s++)
                            u[s].intercept(e);
                try {
                    this.jo.enqueueEvents(t, n)
                } catch (t) {
                    "transport.enqueueEvents: caught exception ".concat(t)
                }
            }
        }
        ,
        t.prototype.onHibernate = function(t) {
            var n, i, r;
            t || this.Xo(),
            null === (i = (n = this.jo).send) || void 0 === i || i.call(n, {
                mode: "sing"
            }),
            this.jo.stopPipeline(),
            null === (r = this.Oo) || void 0 === r || r.stopPipeline()
        }
        ,
        t.prototype.Jo = function(t) {
            if (this.No)
                for (var n = this.Lo, i = n && n.length > 0, r = 0; r < t.length; ++r) {
                    var e = t[r];
                    e.FId || (e.FId = this.No),
                    i && !e.PIds && (e.PIds = n)
                }
        }
        ,
        t.prototype.Yo = function() {
            var t, n;
            this.Uo && (this.qo.stop(),
            this.Vo.stop(),
            this.En = [],
            null === (t = this.$o) || void 0 === t || t.shutdown(),
            this.jo.stopPipeline(),
            this.zo.stopPipeline(),
            null === (n = this.Oo) || void 0 === n || n.stopPipeline())
        }
        ,
        t.prototype.manualHibernateCheck = function() {
            var t;
            null === (t = this.$o) || void 0 === t || t.manualHibernateCheck()
        }
        ,
        t
    }()
      , Hh = function() {
        function t() {
            this.yn = !1,
            this.Zo = {}
        }
        return t.prototype.startPipeline = function() {
            this.yn = !0
        }
        ,
        t.prototype.stopPipeline = function() {
            this.yn = !1,
            this.Zo = {}
        }
        ,
        t.prototype.intercept = function(t) {
            var n;
            if (this.yn) {
                var i = cr(t.PIds, t.FId)
                  , r = null !== (n = this.Zo[i]) && void 0 !== n ? n : -1;
                t.When > r ? this.Zo[i] = t.When : t.When < r && (t.When = r)
            }
        }
        ,
        t
    }()
      , Wh = function() {
        function t(t) {
            void 0 === t && (t = 4),
            this.hashCount = t,
            this.idx = 0,
            this.hashMask = t - 1,
            this.reset()
        }
        return t.prototype.reset = function() {
            this.idx = 0,
            this.hash = [];
            for (var t = 0; t < this.hashCount; ++t)
                this.hash.push(2166136261)
        }
        ,
        t.prototype.write = function(t) {
            for (var n = this.hashMask, i = this.idx, r = 0; r < t.length; r++)
                this.hash[i] = this.hash[i] ^ t[r],
                this.hash[i] += (this.hash[i] << 1) + (this.hash[i] << 4) + (this.hash[i] << 7) + (this.hash[i] << 8) + (this.hash[i] << 24),
                i = i + 1 & n;
            this.idx = i
        }
        ,
        t.prototype.writeAscii = function(t) {
            for (var n = this.hashMask, i = this.idx, r = 0; r < t.length; r++)
                this.hash[i] = this.hash[i] ^ t.charCodeAt(r),
                this.hash[i] += (this.hash[i] << 1) + (this.hash[i] << 4) + (this.hash[i] << 7) + (this.hash[i] << 8) + (this.hash[i] << 24),
                i = i + 1 & n;
            this.idx = i
        }
        ,
        t.prototype.sum = function() {
            var t;
            return t = this.sumAsHex().replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").map(Number),
            $h(String.fromCharCode.apply(window, t))
        }
        ,
        t.prototype.sumAsHex = function() {
            for (var t = "", n = 0; n < this.hashCount; ++n)
                t += "00000000".concat((this.hash[n] >>> 0).toString(16)).slice(-8);
            return t
        }
        ,
        t
    }();
    function zh(t) {
        var n = new Wh(1);
        return n.writeAscii(t),
        n.sumAsHex()
    }
    function qh(t) {
        var n = new Uint8Array(t);
        return $h(String.fromCharCode.apply(null, n))
    }
    var Vh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function $h(t) {
        var n;
        return (null !== (n = window.btoa) && void 0 !== n ? n : Gh)(t).replace(/\+/g, "-").replace(/\//g, "_")
    }
    function Gh(t) {
        for (var n = String(t), i = [], r = 0, e = 0, s = 0, u = Vh; n.charAt(0 | s) || (u = "=",
        s % 1); i.push(u.charAt(63 & r >> 8 - s % 1 * 8))) {
            if ((e = n.charCodeAt(s += 3 / 4)) > 255)
                throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            r = r << 8 | e
        }
        return i.join("")
    }
    var Qh = 1e4
      , Xh = 25
      , Yh = 100;
    function Jh(t, n, i, s) {
        return void 0 === s && (s = new Wh),
        r(this, void 0, ae, function() {
            var r, u, o, a;
            return e(this, function(e) {
                switch (e.label) {
                case 0:
                    r = t.now(),
                    u = i.byteLength,
                    o = 0,
                    e.label = 1;
                case 1:
                    return o < u ? t.now() - r > Xh ? [4, n(Yh)] : [3, 3] : [3, 5];
                case 2:
                    e.sent(),
                    r = t.now(),
                    e.label = 3;
                case 3:
                    a = new Uint8Array(i,o,Math.min(u - o, Qh)),
                    s.write(a),
                    e.label = 4;
                case 4:
                    return o += Qh,
                    [3, 1];
                case 5:
                    return [2, {
                        hash: s.sum(),
                        hasher: s
                    }]
                }
            })
        })
    }
    function Zh(t, n, i) {
        var s, u;
        return r(this, void 0, ae, function() {
            return e(this, function(r) {
                switch (r.label) {
                case 0:
                    return (null === (u = null === (s = t.crypto) || void 0 === s ? void 0 : s.subtle) || void 0 === u ? void 0 : u.digest) ? [4, t.crypto.subtle.digest({
                        name: "sha-1"
                    }, i)] : [3, 2];
                case 1:
                    return [2, {
                        hash: qh(r.sent()),
                        algorithm: "sha1"
                    }];
                case 2:
                    return [4, Jh(n, tf, i)];
                case 3:
                    return [2, {
                        hash: r.sent().hash,
                        algorithm: "fsnv"
                    }]
                }
            })
        })
    }
    function tf(t) {
        return new ae(function(n) {
            return setTimeout(function() {
                try {
                    n()
                } catch (t) {}
            }, t)
        }
        )
    }
    function nf(t) {
        var n, i;
        return !!(null === (i = null === (n = t.Capacitor) || void 0 === n ? void 0 : n.isNativePlatform) || void 0 === i ? void 0 : i.call(n))
    }
    var rf = 6e6
      , ef = /^\/?_capacitor_file_/
      , sf = function() {
        function t(t, n, i, r, e) {
            void 0 === r && (r = window.FormData),
            void 0 === e && (e = uo),
            this.W = t,
            this.zt = n,
            this.vo = i,
            this.ta = r,
            this.na = e,
            this.Fe = {},
            this.ia = {},
            this.ra = !1,
            this.ea = []
        }
        return t.prototype.init = function() {
            this.ta && this.sa()["catch"](function(t) {
                Tu.send("resourceuploader#init", {
                    err: t
                })
            })
        }
        ,
        t.prototype.sa = function() {
            return r(this, void 0, ae, function() {
                var t, n, i, r, s, u, o, a, c, h, f, v, l, d, p, w, g, m, y, b, S, k, _, A, I, E;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        t = this.W.options.orgId,
                        e.label = 1;
                    case 1:
                        return [4, this.ua()];
                    case 2:
                        for (n = e.sent(),
                        i = {
                            fsnv: {},
                            sha1: {}
                        },
                        r = {},
                        s = 0,
                        u = n; s < u.length; s++)
                            b = u[s],
                            i[b.hashAlgorithm][b.hash] = !0,
                            (l = r[b.hash]) ? l.push(b) : r[b.hash] = [b];
                        o = {
                            fsnv: Object.keys(i.fsnv),
                            sha1: Object.keys(i.sha1)
                        },
                        a = void 0,
                        e.label = 3;
                    case 3:
                        return e.trys.push([3, 5, , 6]),
                        [4, this.vo.queryResources({
                            OrgId: t,
                            HashesByAlgorithm: o
                        })];
                    case 4:
                        return a = e.sent(),
                        [3, 6];
                    case 5:
                        return c = e.sent(),
                        "/rec/queryResources failed with status ".concat(c),
                        [3, 1];
                    case 6:
                        h = 0,
                        f = a,
                        e.label = 7;
                    case 7:
                        if (!(h < f.length))
                            return [3, 18];
                        if (v = f[h],
                        !(null == (l = r[v.QueryHash]) ? void 0 : l.length))
                            return ju("No resource found for hash"),
                            [3, 17];
                        if (d = v.Found && v.CanonicalHash,
                        !v.Found || !v.CanonicalHash)
                            return [3, 8];
                        for (p = 0,
                        w = l; p < w.length; p++)
                            (b = w[p]).blob = b.stringData = null,
                            "fsnv" === (g = v.CanonicalHash.Algorithm) ? this.zt.enqueue({
                                Kind: O.SYS_RESOURCEHASH,
                                Args: ["url", b.url, v.CanonicalHash.Hash]
                            }) : ju("Unrecognized hash", {
                                hashAlgorithm: g,
                                reportFound: d
                            });
                        return [3, 17];
                    case 8:
                        m = 0,
                        y = l,
                        e.label = 9;
                    case 9:
                        if (!(m < y.length))
                            return [3, 17];
                        if (b = y[m],
                        S = b.url,
                        k = b.contentType,
                        (_ = {}).orgId = t,
                        _.baseUrl = S,
                        "fsnv" === v.QueryAlgorithm)
                            _.fsnvHash = v.QueryHash;
                        else {
                            if ("sha1" !== v.QueryAlgorithm)
                                return ju("Unrecognized hash", {
                                    hashAlgorithm: v.QueryAlgorithm,
                                    reportFound: d
                                }),
                                [3, 16];
                            _.sha1Hash = v.QueryHash
                        }
                        return b.blob ? [4, ve(b.blob)] : [3, 11];
                    case 10:
                        return (A = e.sent()) ? (_.contents = {
                            data: A,
                            contentType: k,
                            filename: "blob"
                        },
                        [3, 12]) : [3, 17];
                    case 11:
                        b.stringData && (_.contents = {
                            data: b.stringData,
                            contentType: k,
                            filename: "blob"
                        }),
                        e.label = 12;
                    case 12:
                        if (!_.contents)
                            return ju("Missing resource contents"),
                            [3, 16];
                        b.blob = b.stringData = null,
                        e.label = 13;
                    case 13:
                        return e.trys.push([13, 15, , 16]),
                        [4, this.vo.uploadResource({
                            type: "FormData",
                            data: _
                        })];
                    case 14:
                        return I = e.sent(),
                        "fsnv" != (E = JSON.parse(I)).Algorithm && ju("Unrecognized hash", {
                            hashAlgorithm: E.Algorithm,
                            from: "response"
                        }),
                        this.zt.enqueue({
                            Kind: O.SYS_RESOURCEHASH,
                            Args: ["url", S, E.Hash]
                        }),
                        [3, 16];
                    case 15:
                        return e.sent(),
                        [3, 16];
                    case 16:
                        return m++,
                        [3, 9];
                    case 17:
                        return h++,
                        [3, 7];
                    case 18:
                        return [3, 1];
                    case 19:
                        return [2]
                    }
                })
            })
        }
        ,
        t.prototype.ua = function() {
            var t = this
              , n = ce()
              , i = n.resolve
              , r = n.promise
              , e = function() {
                t.oa = null,
                t.ra = !1;
                var n = t.ea;
                t.ea = [],
                i(n)
            };
            return this.ra ? e() : this.oa = e,
            r
        }
        ,
        t.prototype.uploadIfNeeded = function(t, n, i) {
            return void 0 === i && (i = "unknown"),
            r(this, void 0, ae, function() {
                var r, s;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return this.ta ? (r = n.href,
                        this.Fe[r] ? [2] : "css" === i && this.W.options.forceLocalResources || function(t, n) {
                            if (nf(t)) {
                                var i = function(t) {
                                    var n, i = null === (n = t.Capacitor) || void 0 === n ? void 0 : n.getServerUrl;
                                    return Hi(i) ? Ne(Le(t), i()) : void 0
                                }(t);
                                if (i)
                                    return "blob:" === n.protocol || i.protocol === n.protocol && i.hostname === n.hostname && ef.test(n.pathname)
                            }
                            switch (n.protocol) {
                            case "blob:":
                                return !0;
                            case "http:":
                            case "https:":
                                switch (n.hostname) {
                                case "localhost":
                                case "127.0.0.1":
                                case "[::1]":
                                    return t.location.protocol === n.protocol && t.location.host === n.host;
                                case "::1":
                                    var r = n.port ? "[::1]:".concat(n.port) : "[::1]";
                                    return t.location.protocol === n.protocol && t.location.host === r;
                                default:
                                    return !1
                                }
                            default:
                                return !1
                            }
                        }(t, n) ? (this.Fe[r] = !0,
                        [4, this.aa(r)]) : [2]) : [2];
                    case 1:
                        return (s = e.sent()) ? (this.ca(s),
                        [2]) : [2]
                    }
                })
            })
        }
        ,
        t.prototype.ca = function(t) {
            var n = this
              , i = 0 == this.ea.length;
            this.ea.push(t),
            i && new this.na(function() {
                n.ra = !0,
                n.oa && n.oa()
            }
            ,50).start()
        }
        ,
        t.prototype.aa = function(t) {
            return r(this, void 0, ae, function() {
                var n, i, r, s, u;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return this.ia[t] ? [2, this.ia[t]] : [4, uf(t)];
                    case 1:
                        return (n = e.sent()) && n.buffer.byteLength ? [4, Zh(this.W.window, this.W.time, n.buffer)] : [2, null];
                    case 2:
                        return i = e.sent(),
                        r = i.hash,
                        s = i.algorithm,
                        u = {
                            hash: r,
                            hashAlgorithm: s,
                            url: t,
                            blob: n.blob,
                            contentType: n.contentType
                        },
                        this.ia[u.url] = u,
                        [2, u]
                    }
                })
            })
        }
        ,
        t.prototype.uploadDataUrlIfNeeded = function(t, n) {
            return void 0 === n && (n = function() {
                return !0
            }
            ),
            r(this, void 0, ae, function() {
                var i, r, s, u, o, a;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return i = function(t) {
                            var n, i = "Could not parse data url", r = t.indexOf(",");
                            if (-1 !== r)
                                try {
                                    var e = t.substring(0, r).match(of)
                                      , s = void 0
                                      , u = void 0;
                                    e && (s = e[1],
                                    u = null === (n = e[2]) || void 0 === n ? void 0 : n.substring(1));
                                    for (var o = atob(t.substring(r + 1)), a = new ArrayBuffer(o.length), c = new Uint8Array(a), h = 0; h < o.length; ++h)
                                        c[h] = o.charCodeAt(h);
                                    return {
                                        blob: new Blob([a],{
                                            type: s
                                        }),
                                        buffer: a,
                                        contentType: s,
                                        charset: u
                                    }
                                } catch (n) {
                                    return void Tu.send(i, {
                                        input: t.substring(0, 100),
                                        err: n
                                    }, "warning")
                                }
                            else
                                Tu.send(i, {
                                    input: t.substring(0, 100)
                                }, "warning")
                        }(t),
                        i ? [4, Zh(this.W.window, this.W.time, i.buffer)] : [2, void 0];
                    case 1:
                        return r = e.sent(),
                        s = r.hash,
                        u = r.algorithm,
                        o = "https://".concat("data-url.fs.invalid", "/").concat(u, "/").concat(s),
                        a = {
                            hash: s,
                            hashAlgorithm: u,
                            url: o,
                            blob: i.blob,
                            contentType: i.blob.type || "application/octet-stream"
                        },
                        n(a) ? (this.ia[a.url] = a,
                        this.ca(a),
                        [2, a]) : [2, a]
                    }
                })
            })
        }
        ,
        t
    }();
    function uf(t) {
        var n = ce()
          , i = n.resolve
          , r = n.promise
          , e = new XMLHttpRequest;
        return "string" != typeof e.responseType ? (i(null),
        r) : (e.open("GET", t, !0),
        e.responseType = "blob",
        e.onerror = function() {
            i(null)
        }
        ,
        e.onload = function() {
            if (200 != e.status && 0 !== e.status)
                return "Error loading blob resource ".concat(Ns(t, {
                    source: "log",
                    type: "debug"
                })),
                void i(null);
            var n = e.response
              , r = n.size || n.length;
            if (r > rf)
                return ju("Size of blob resource exceeds limit", {
                    url: Ns(t, {
                        source: "log",
                        type: "fsbugs"
                    }),
                    max: rf,
                    blobSize: r
                }),
                void i(null);
            ve(n).then(function(t) {
                i(t ? {
                    buffer: t,
                    blob: n,
                    contentType: n.type
                } : null)
            })
        }
        ,
        e.send(),
        r)
    }
    var of = /^data:([^;,]*)(;?charset=[^;]+)?(?:;base64)?$/i
      , af = function() {
        function t(t, n, i) {
            void 0 === i && (i = new cf),
            this.W = t,
            this.me = n,
            this.ha = i
        }
        return t.prototype.initialize = function(t) {
            var n;
            if (t) {
                this.fa(t);
                var i = null === (n = this.W.window.location) || void 0 === n ? void 0 : n.href;
                this.onNavigate(i)
            }
        }
        ,
        t.prototype.onNavigate = function(t) {
            return !!this.ha.matches(t) && (this.me.enqueue({
                Kind: O.KEEP_URL,
                Args: [Ns(t, {
                    source: "page",
                    type: "base"
                })]
            }),
            !0)
        }
        ,
        t.prototype.onClick = function(t) {
            var n;
            return !!(null === (n = null == t ? void 0 : t.watchKind) || void 0 === n ? void 0 : n.has(Ge.Keep)) && (this.me.enqueue({
                Kind: O.KEEP_ELEMENT,
                Args: [t.id]
            }),
            !0)
        }
        ,
        t.prototype.urlMatches = function(t) {
            return this.ha.matches(t)
        }
        ,
        t.prototype.fa = function(t) {
            this.ha.setRules(t)
        }
        ,
        t
    }()
      , cf = function() {
        function t() {
            this.va = null
        }
        return t.prototype.setRules = function(t) {
            var n = t.map(function(t) {
                return t.Regex
            }).filter(hf);
            n.length > 0 && (this.va = function(t) {
                try {
                    return new RegExp("(".concat(t.join(")|("), ")"),"i")
                } catch (n) {
                    return Tu.send("keep#joinRegexes", {
                        exprs: t,
                        err: n
                    }),
                    null
                }
            }(n))
        }
        ,
        t.prototype.matches = function(t) {
            return !!this.va && this.va.test(t)
        }
        ,
        t
    }();
    function hf(t) {
        try {
            return new RegExp(t),
            !0
        } catch (n) {
            return Tu.send("keep#isValidRegex", {
                expr: t,
                err: n
            }),
            !1
        }
    }
    function ff(t, n, i) {
        if (t && "function" == typeof t[n]) {
            i.get(t) || i.set(t, {});
            var r = t[n];
            t[n] = function() {
                var e = i.get(t);
                return e && "function" == typeof e[n] && e[n].apply(this, arguments),
                r.apply(this, arguments)
            }
        }
    }
    Zt.RequestFrameId,
    Zt.EvtBundle;
    var vf = function(t) {
        var n = void 0 === t ? {} : t
          , i = n.wnd
          , r = void 0 === i ? window : i
          , e = n.injectedNamespace
          , s = void 0 === e ? r._fs_namespace : e;
        void 0 === n.injectedScript && r._fs_script,
        function(t, n, i, r, e, s, u, o) {
            var a, c;
            function h(t) {
                var n, i = [];
                function r() {
                    n && (i.forEach(function(t) {
                        var i;
                        try {
                            i = t[n[0]] && t[n[0]](n[1])
                        } catch (n) {
                            return void (t[3] && t[3](n))
                        }
                        i && i.then ? i.then(t[2], t[3]) : t[2] && t[2](i)
                    }),
                    i.length = 0)
                }
                function e(t) {
                    return function(i) {
                        n || (n = [t, i],
                        r())
                    }
                }
                return t(e(0), e(1)),
                {
                    then: function(t, n) {
                        return h(function(e, s) {
                            i.push([t, n, e, s]),
                            r()
                        })
                    }
                }
            }
            i in t && (t.console && t.console.log && t.console.log("FullStory namespace conflict. Please set window[\"_fs_namespace\"]."),
            1) || (u = t[i] = function() {
                var t = function(t, i, r, e) {
                    function s(s, u) {
                        n(t, i, r, s, u, e)
                    }
                    e = e || 2;
                    var u, o = /Async$/;
                    return o.test(t) ? (t = t.replace(o, ""),
                    "function" == typeof Promise ? new Promise(s) : h(s)) : n(t, i, r, u, u, e)
                };
                function n(n, i, r, e, s, u) {
                    return t._api ? t._api(n, i, r, e, s, u) : (t.q && t.q.push([n, i, r, e, s, u]),
                    null)
                }
                return t.q = [],
                t
            }(),
            function() {
                function t() {}
                function n(t, n, i) {
                    u(t, n, i, 1)
                }
                function i(t, i, r) {
                    n("setProperties", {
                        type: t,
                        properties: i
                    }, r)
                }
                function r(t, n) {
                    i("user", t, n)
                }
                function e(t, n, i) {
                    r({
                        uid: t
                    }, i),
                    n && r(n, i)
                }
                u.identify = e,
                u.setUserVars = r,
                u.identifyAccount = t,
                u.clearUserCookie = t,
                u.setVars = i,
                u.event = function(t, i, r) {
                    n("trackEvent", {
                        name: t,
                        properties: i
                    }, r)
                }
                ,
                u.anonymize = function() {
                    e(!1)
                }
                ,
                u.shutdown = function() {
                    n("shutdown")
                }
                ,
                u.restart = function() {
                    n("restart")
                }
                ,
                u.log = function(t, i) {
                    n("log", {
                        level: t,
                        msg: i
                    })
                }
                ,
                u.consent = function(t) {
                    n("setIdentity", {
                        consent: !arguments.length || t
                    })
                }
            }(),
            a = "fetch",
            c = "XMLHttpRequest",
            u._w = {},
            u._w[c] = t[c],
            u._w[a] = t[a],
            t[a] && (t[a] = function() {
                return u._w[a].apply(this, arguments)
            }
            ),
            u._v = "2.0.0")
        }(r, r.document, s)
    };
    "".concat(ff, "\n(").concat(function(t, n) {
        var i = t._fs_prehooks || new WeakMap;
        t._fs_prehooks = i,
        n.forEach(function(t) {
            var n = t[0];
            t[1].forEach(function(t) {
                ff(n, t, i)
            })
        })
    }, ")(win, [[\n  CSSStyleSheet.prototype,\n  ['insertRule', 'removeRule']\n]]);");
    var lf = /[^a-zA-Z0-9.\-_]/g;
    function df(t, n) {
        return "".concat(t, "_").concat(n)
    }
    function pf(t, n, i, r) {
        var e = function(t, n) {
            return n ? function(t, n) {
                var i = n.replace(lf, "");
                return 0 === i.length ? t : df(t, i)
            }(t, i) : t
        };
        return [e(t, r), e(n, r), e(t, !r), e(n, !r)]
    }
    function wf(t, n, i, r, e, s) {
        var u = n.getValue(i, r)
          , o = u.cookieValue
          , a = u.localStorageValue;
        if (!t && !o && !a) {
            var c = n.getValue(e, s);
            o = c.cookieValue,
            a = c.localStorageValue
        }
        return [o, a]
    }
    function gf(t) {
        return t.options.useNamespace ? df(rn, t.options.namespace) : rn
    }
    function mf(t, n, i) {
        if (n && n.postMessage)
            try {
                n.postMessage(function(t, n) {
                    var i;
                    return nu(((i = {})[gf(t)] = n,
                    i))
                }(t, i), "*")
            } catch (t) {
                ju("postMessageTo", {
                    err: t
                })
            }
    }
    function yf(t, n) {
        try {
            var i = er(n)
              , r = gf(t);
            if (r in i)
                return i[r]
        } catch (t) {}
        return [Zt.Unknown]
    }
    function bf(t, n, i, r) {
        var e = t.options.transport;
        if (!e)
            return !1;
        try {
            e.send(n, i, r)
        } catch (t) {
            e.send(n, i)
        }
        return !0
    }
    function Sf(t, n, i) {
        var r = t.options.transport;
        if (!r || !r.sendToChild)
            return !1;
        var e = i[0]
          , s = nu(i.slice(1));
        return r.sendToChild(n, e, s),
        !0
    }
    var kf = new RegExp(/^\s+$/)
      , _f = /^fb\d{18}$/
      , Af = function(t) {
        var n = t.appHost
          , i = t.desc
          , r = t.frame
          , e = t.namespace
          , s = t.orgId
          , u = t.recHost
          , o = t.recSettingsHost
          , a = t.scheme
          , c = t.script
          , h = t.snippetVersion
          , f = t.underTest
          , v = t.useNamespace;
        "Injecting into Frame ".concat(i);
        try {
            if (function(t) {
                return t.id == t.name && _f.test(t.id)
            }(r))
                return "Blocklisted iframe: ".concat(i),
                q.BlocklistedFrame;
            if (function(t) {
                return !(t.contentDocument && t.contentWindow && t.contentWindow.location) || function(t) {
                    return !!t.src && "about:blank" != t.src && t.src.indexOf("javascript:") < 0
                }(t) && t.src != t.contentWindow.location.href && "loading" == t.contentDocument.readyState
            }(r))
                return "Frame not yet loaded: ".concat(i),
                q.PartiallyLoaded;
            var l = r.contentWindow
              , d = r.contentDocument;
            if (!l || !d)
                return "Missing contentWindow or contentDocument: ".concat(i),
                q.MissingWindowOrDocument;
            if (!d.head)
                return "Missing contentDocument.head: ".concat(i),
                q.MissingDocumentHead;
            if (!d.body || !Fi(d.body))
                return q.MissingBodyOrChildren;
            for (var p = !1, w = Ui(d.body); w; w = Oi(w)) {
                switch (w.nodeType) {
                case xi:
                    if ("SCRIPT" === w.tagName)
                        continue;
                    break;
                case 3:
                    var g = w.textContent;
                    if (null === g || kf.test(g))
                        continue;
                    break;
                case 8:
                    continue
                }
                p = !0;
                break
            }
            if (!p)
                return q.NoNonScriptElement;
            if (mn(l, e))
                return "FS already defined in Frame contentWindow: ".concat(i, " Ignoring."),
                q.AlreadyDefined;
            var m = l;
            f && (m._fs_org = s);
            var y = function(t, n) {
                return {
                    send: function(i, r, e) {
                        if (void 0 !== t.parent) {
                            var s = mn(t.parent, n);
                            void 0 !== s && "function" == typeof s._withRecorder && s._withRecorder(e, function(n) {
                                try {
                                    n.onMessageReceived(t, [i, bi.jsonParse(r), e])
                                } catch (t) {
                                    t instanceof SyntaxError && Tu.send("rec#onMessageReceived", {
                                        err: t,
                                        msg: i,
                                        signature: e
                                    })
                                }
                            })
                        }
                    }
                }
            }(m, e);
            return function(t, n, i) {
                /^2\./.test(i.snippetVersion) ? vf({
                    wnd: t,
                    injectedNamespace: i.namespace,
                    injectedScript: i.script
                }) : function(t) {
                    var n, i, r, e, s, u = void 0 === t ? {} : t, o = u.wnd, a = void 0 === o ? window : o, c = u.injectedNamespace, h = void 0 === c ? a._fs_namespace : c;
                    n = a,
                    a.document,
                    r = "user",
                    (i = h)in n ? n.console && n.console.log && n.console.log("FullStory namespace conflict. Please set window[\"_fs_namespace\"].") : ((e = n[i] = function(t, n, i) {
                        e.q ? e.q.push([t, n, i]) : e._api(t, n, i)
                    }
                    ).q = [],
                    e.identify = function(t, n, i) {
                        e(r, {
                            uid: t
                        }, i),
                        n && e(r, n, i)
                    }
                    ,
                    e.setUserVars = function(t, n) {
                        e(r, t, n)
                    }
                    ,
                    e.event = function(t, n, i) {
                        e("event", {
                            n: t,
                            p: n
                        }, i)
                    }
                    ,
                    e.anonymize = function() {
                        e.identify(!1)
                    }
                    ,
                    e.shutdown = function() {
                        e("rec", !1)
                    }
                    ,
                    e.restart = function() {
                        e("rec", !0)
                    }
                    ,
                    e.log = function(t, n) {
                        e("log", [t, n])
                    }
                    ,
                    e.consent = function(t) {
                        e("consent", !arguments.length || t)
                    }
                    ,
                    e.identifyAccount = function(t, n) {
                        (n = n || {}).acctId = t,
                        e("account", n)
                    }
                    ,
                    e.clearUserCookie = function() {}
                    ,
                    e.setVars = function(t, n) {
                        e("setVars", [t, n])
                    }
                    ,
                    e._w = {},
                    s = "XMLHttpRequest",
                    e._w[s] = n[s],
                    s = "fetch",
                    e._w[s] = n[s],
                    n[s] && (n[s] = function() {
                        return e._w[s].apply(this, arguments)
                    }
                    ),
                    e._v = "1.3.0")
                }({
                    wnd: t,
                    injectedNamespace: i.namespace
                });
                var r, e, s = (r = t,
                void 0 === (e = i.namespace) && (e = gn(r)),
                r[e]);
                Ru(!!s, "snippet api"),
                null == s || s("init", {
                    env: {
                        appHost: i.appHost,
                        orgId: i.orgId,
                        recHost: i.recHost,
                        recSettingsHost: i.recSettingsHost,
                        runInIframe: i.runInIframe,
                        scheme: i.scheme,
                        script: i.script,
                        transport: i.transport,
                        useNamespace: i.useNamespace
                    }
                });
                var u = n.createElement("script");
                u.setAttribute(en, i.namespace),
                u.async = !0,
                u.crossOrigin = "anonymous",
                u.src = "".concat(i.scheme, "//").concat(i.script),
                "testdrive" === i.orgId && (u.src += "?allowMoo=true")
                //CHANGE
                //,
                //n.head.appendChild(u)
            }(m, d, {
                appHost: n,
                namespace: e,
                orgId: s,
                recHost: u,
                recSettingsHost: o,
                runInIframe: !0,
                scheme: a,
                script: c,
                snippetVersion: h,
                transport: y,
                useNamespace: v
            }),
            q.Successful
        } catch (t) {
            return q.Exception
        }
    };
    function If(t) {
        var n = "".concat(Ss(t));
        t.id && (n += "#".concat(t.id));
        var i = Ns(t.src, {
            source: "log",
            type: "debug"
        });
        return n + "[src=".concat(i, "]")
    }
    var Ef, Tf, Cf = function() {
        function t(t, n) {
            var i;
            this.Ki = t,
            this.zt = [],
            this.la = !1,
            this.Pt = null !== (i = n.interval) && void 0 !== i ? i : 1e3,
            this.da = n.onFlush
        }
        return t.prototype.append = function(t) {
            this.schedule(),
            this.zt.push(t)
        }
        ,
        t.prototype.flush = function() {
            this.la = !1,
            this.da(this.zt),
            this.zt = []
        }
        ,
        t.prototype.schedule = function() {
            this.la || (bi.setWindowTimeout(this.Ki, Ti(this.flush.bind(this)), this.Pt),
            this.la = !0)
        }
        ,
        t
    }(), xf = "https://fs-obfuscated.invalid", Rf = function() {
        function t(t, n) {
            this.Ki = t,
            this.zt = n,
            this.pa = 0,
            this.wa = {},
            this.yn = !1
        }
        return t.prototype.enable = function() {
            var t = this;
            this.yn = !0,
            this.ga = function(t) {
                var n;
                try {
                    if ("function" == typeof (null === (n = t.crypto) || void 0 === n ? void 0 : n.getRandomValues)) {
                        var i = ""
                          , r = new Uint32Array(2);
                        t.crypto.getRandomValues(r);
                        for (var e = 0; e < r.length; e++)
                            i += r[e].toString(16);
                        return i
                    }
                } catch (t) {}
                return bi.mathFloor(1e20 * (bi.mathRandom() + .1)).toString(16)
            }(this.Ki),
            this.zt.enqueue({
                Kind: O.URL_SALT,
                Args: [this.ga]
            }),
            this.ma = new Cf(this.Ki,{
                interval: 500,
                onFlush: function(n) {
                    return t.da(n)
                }
            })
        }
        ,
        t.prototype.flush = function() {
            var t;
            null === (t = this.ma) || void 0 === t || t.flush()
        }
        ,
        t.prototype.da = function(t) {
            0 !== t.length && this.zt.enqueue({
                Kind: O.URL_ID,
                Args: t
            })
        }
        ,
        t.prototype.record = function(t) {
            var n;
            if (this.yn && /^(file|http)/i.test(t)) {
                var i = this.ya(t, !0)
                  , r = i[0];
                i[1] && (null === (n = this.ma) || void 0 === n || n.append([t, r]))
            }
        }
        ,
        t.prototype.ba = function(t) {
            return this.ya(t, !1)[0]
        }
        ,
        t.prototype.ya = function(t, n) {
            var i = t.substring(0, 5e3);
            if (void 0 === this.wa[i]) {
                var r = this.pa++;
                return this.wa[i] = {
                    id: r,
                    record: n
                },
                [r, n]
            }
            var e = !1;
            return n && (e = !1 === this.wa[i].record,
            this.wa[i].record = !0),
            [this.wa[i].id, e]
        }
        ,
        t.prototype.obfuscateUrl = function(t, n) {
            return this.yn ? "css" === n ? this.Sa(t) : this.ka(t) : t
        }
        ,
        t.prototype.Sa = function(t) {
            Ru(void 0 !== this.ga, "_hashObfuscatedUrl#salt");
            var n = zh(t.substring(0, 5e3) + this.ga);
            return "".concat(xf, "?hash=").concat(n, "&algorithm=fnv32")
        }
        ,
        t.prototype.ka = function(t) {
            var n = this.ba(t);
            return "".concat(xf, "?url-id=").concat(n)
        }
        ,
        t
    }(), Kf = function() {
        function t(t) {
            void 0 === t && (t = !1),
            this._a = t
        }
        return t.prototype.page = function(t) {
            return r(this, void 0, ae, function() {
                return e(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, ye()];
                    case 1:
                        return t.sent(),
                        [2, i(i({}, Of(this._a)), {
                            UserIntId: "0",
                            SessionIntId: "0",
                            PageIntId: "0",
                            EmbedToken: "",
                            PageStart: pr(),
                            IsNewSession: !0,
                            Flags: {
                                AjaxWatcher: !0,
                                ConsoleWatcher: !0,
                                DisableImgUrlPrivacy: !0,
                                GetCurrentSession: !0,
                                UseClientSideId: !0
                            }
                        })]
                    }
                })
            })
        }
        ,
        t.prototype.settings = function(t) {
            return r(this, void 0, ae, function() {
                return e(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, ye()];
                    case 1:
                        return t.sent(),
                        [2, Of(this._a)]
                    }
                })
            })
        }
        ,
        t.prototype.event = function(t) {
            return this.bundle(t)
        }
        ,
        t.prototype.bundle = function(t) {
            var n;
            return r(this, void 0, ae, function() {
                var i, r, s, u, o, a;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        i = pr(),
                        r = 0,
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 8, , 9]),
                        [4, ye()];
                    case 2:
                        return e.sent(),
                        (s = t.bundle)[0],
                        u = s[1],
                        o = s[2],
                        r = o,
                        "string" === u.type ? [3, 3] : [3, 5];
                    case 3:
                        return [4, we(u.data)];
                    case 4:
                        return a = e.sent()[0],
                        r = null !== (n = null == a ? void 0 : a.byteLength) && void 0 !== n ? n : 0,
                        [3, 5];
                    case 5:
                        return r > 2e6 ? [4, ye()] : [3, 7];
                    case 6:
                        e.sent(),
                        e.label = 7;
                    case 7:
                        return [3, 9];
                    case 8:
                        return e.sent(),
                        [3, 9];
                    case 9:
                        return [2, [r, {
                            BundleTime: i
                        }]]
                    }
                })
            })
        }
        ,
        t.prototype.bundleBeacon = function(t) {
            return !0
        }
        ,
        t.prototype.startBeacon = function(t) {
            return r(this, void 0, ae, function() {
                return e(this, function(t) {
                    return [2, ae.resolve()]
                })
            })
        }
        ,
        t
    }(), jf = function() {
        function t() {}
        return t.prototype.uploadResource = function(t) {
            return r(this, void 0, ae, function() {
                return e(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, ye()];
                    case 1:
                        return t.sent(),
                        [2, nu({
                            Algorithm: "fsnv",
                            Hash: ""
                        })]
                    }
                })
            })
        }
        ,
        t.prototype.queryResources = function(t) {
            return r(this, void 0, ae, function() {
                return e(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, ye()];
                    case 1:
                        return t.sent(),
                        [2, []]
                    }
                })
            })
        }
        ,
        t
    }(), Mf = function() {
        function t() {
            this._cookies = {}
        }
        return t.prototype.setDomain = function(t) {}
        ,
        t.prototype.getValue = function(t, n) {
            return {
                cookieValue: this._cookies[t],
                localStorageValue: void 0
            }
        }
        ,
        t.prototype.setValue = function(t, n, i, r) {
            this.setCookie(t, n, i)
        }
        ,
        t.prototype.setCookie = function(t, n, i) {
            this._cookies[t] = n
        }
        ,
        t.prototype.clearCookie = function(t, n) {
            delete this._cookies[t]
        }
        ,
        Object.defineProperty(t.prototype, "cookies", {
            get: function() {
                return this._cookies
            },
            enumerable: !1,
            configurable: !0
        }),
        t
    }();
    function Pf() {
        try {
            return document.domain
        } catch (t) {}
        return ""
    }
    function Of(t) {
        return {
            AjaxWatches: [],
            CookieDomain: Pf(),
            ElementBlocks: t ? [] : s(s([], [{
                Selector: "input",
                Consent: !1,
                Type: Pt.Unmask
            }, {
                Selector: "textarea",
                Consent: !1,
                Type: Pt.Unmask
            }, {
                Selector: "select",
                Consent: !1,
                Type: Pt.Unmask
            }, {
                Selector: "[contenteditable]",
                Consent: !1,
                Type: Pt.Unmask
            }, {
                Selector: "input[type=radio]",
                Consent: !1,
                Type: Pt.Unmask
            }, {
                Selector: "input[type=checkbox]",
                Consent: !1,
                Type: Pt.Unmask
            }], !0), Uo, !0),
            ElementDeferreds: [],
            ElementKeeps: [],
            ElementWatches: [],
            OrgSettings: Ht.DefaultOrgSettings,
            UrlKeeps: [],
            DwellTime: 0
        }
    }
    (Tf = Ef || (Ef = {}))[Tf.NoInfoYet = 1] = "NoInfoYet",
    Tf[Tf.Enabled = 2] = "Enabled",
    Tf[Tf.Disabled = 3] = "Disabled";
    var Nf, Lf, Uf = function() {
        function t(t, n, i, r, e, s) {
            var u, o = this;
            this.W = t,
            this.Aa = e,
            this.Ia = Ht.DefaultOrgSettings,
            this.Ea = !1,
            this.No = null,
            this.Lo = [],
            this.Ta = Ht.DefaultBundleUploadInterval,
            this.Ca = Ht.HeartbeatInterval,
            this.xa = [],
            this.Ra = new Pu,
            this.Ka = [],
            this.vt = new Wu,
            this.ja = Ef.NoInfoYet,
            this.Ma = !1,
            this.Pa = !1,
            this.Oa = !1,
            this.Na = !1,
            this.La = {},
            this.zt = new Dh(t,r,i,function() {
                return o.Ua.bundleEvents()
            }
            ,n,void 0,s);
            var a, c = new sf(t,this.zt,(a = t).options.useMockProtocol ? new jf : new au(a));
            this.Zi = new Rf(t.window,this.zt),
            this.Wn = new Jo,
            this.As = new af(t,this.zt),
            this.Ua = new lh(t,this.zt,this.As,this.Wn,this.vt.createChild(),function(t) {
                return o.Ms(t)
            }
            ,function(t) {
                return o.Ps(t)
            }
            ,c,this.Zi),
            this.D = t.options.scheme,
            this.Fa = t.options.script,
            this.Ba = t.options.recHost,
            this.Da = t.options.recSettingsHost,
            this.Ha = t.options.appHost,
            this.Io = t.options.orgId,
            this.Pa = null !== (u = t.options.skipIframeInjection) && void 0 !== u && u,
            this.Ki = t.window,
            this.t = this.Ki.document
        }
        return t.prototype.getPageResponse = function() {
            return this.Wa
        }
        ,
        t.prototype.bundleUploadInterval = function() {
            return this.Ta
        }
        ,
        t.prototype.heartbeatInterval = function() {
            return this.Ca
        }
        ,
        t.prototype.setInitConfig = function(t) {
            this.za = t
        }
        ,
        t.prototype.start = function(t, n, i) {
            var r = this;
            this.qa = n,
            this.Va = i,
            this.Gs();
            var e = this.Ki.Document ? this.Ki.Document.prototype : this.Ki.document;
            this.$a = Fu(this.W, e, "close"),
            this.$a && this.$a.afterAsync(function() {
                r.vt.refresh()
            })
        }
        ,
        t.prototype.Gs = function() {
            var t = this;
            "onpageshow"in this.Ki && this.vt.add(this.Ki, "pageshow", !1, function(n) {
                t.zt.manualHibernateCheck(),
                (null == n ? void 0 : n.persisted) && t.zt.enqueue({
                    Kind: O.BFCACHE_STATE,
                    Args: [G.Restored]
                })
            }),
            "onpagehide"in this.Ki ? this.vt.add(this.Ki, "pagehide", !1, function(n) {
                (null == n ? void 0 : n.persisted) ? (t.zt.enqueue({
                    Kind: O.BFCACHE_STATE,
                    Args: [G.Entering]
                }),
                t.zt.singSwanSong(it.Unload)) : t.Ga()
            }) : this.vt.add(this.Ki, "unload", !1, function() {
                t.Ga()
            }),
            this.vt.add(this.Ki, "message", !1, function(n) {
                var i = n.data;
                if ("string" == typeof i) {
                    var r = n.source;
                    t.onMessageReceived(r, yf(t.W, i))
                }
            })
        }
        ,
        t.prototype.tellAllFramesTo = function(t) {
            for (var n = 0, i = this.xa; n < i.length; n++) {
                var r = i[n];
                r.contentWindow && mf(this.W, r.contentWindow, t)
            }
        }
        ,
        t.prototype.queue = function() {
            return this.zt
        }
        ,
        t.prototype.eventWatcher = function() {
            return this.Ua
        }
        ,
        t.prototype.console = function() {
            return this.Ua.consoleWatcher()
        }
        ,
        t.prototype.orgSettings = function() {
            return this.Ia
        }
        ,
        t.prototype.onDomLoad = function() {
            this.Ua.onDomLoad()
        }
        ,
        t.prototype.onLoad = function() {
            this.Ua.onLoad()
        }
        ,
        t.prototype.shutdown = function(t) {
            var n;
            this.Na = !0,
            this.tellAllFramesTo([Zt.ShutdownFrame]),
            this.xa = [],
            this.Ua.stop(t),
            null === (n = this.vt) || void 0 === n || n.clearAll(),
            this.Ra = new Pu,
            this.$a && this.$a.disable()
        }
        ,
        t.prototype.getCurrentSessionURL = function(t) {
            var n = this.ja;
            if (n == Ef.NoInfoYet)
                return null;
            if (n == Ef.Disabled)
                return "".concat(this.D, "//").concat(this.Ha, "/opt/upgrade");
            var i = this.getCurrentSession();
            return i ? (t && (i += ":".concat(this.W.time.wallTime())),
            "".concat(this.D, "//").concat(this.Ha, "/ui/").concat(this.W.options.orgId, "/").concat(this.Ea ? "client-" : "", "session/").concat(encodeURIComponent(i))) : null
        }
        ,
        t.prototype.getCurrentSession = function() {
            return this.getIsSessionReady() ? "".concat(this.xo, ":").concat(this.Co) : null
        }
        ,
        t.prototype.getIsSessionReady = function() {
            var t = this.ja;
            return !(t == Ef.NoInfoYet || t == Ef.Disabled || !this.xo || !this.Co)
        }
        ,
        t.prototype.setConsent = function(t) {
            var n, i = this;
            null === (n = this.W.recording.identity) || void 0 === n || n.getConsentStore().setConsentState(t);
            var r = function() {
                i.Wn.setConsent(t),
                i.zt.processEvents()
            }
              , e = function() {
                i.zt.enqueue({
                    Kind: O.SYS_SETCONSENT,
                    Args: [t, tt.Document]
                })
            };
            switch (t) {
            case J.GrantConsent:
                e(),
                r();
                break;
            case J.RevokeConsent:
                r(),
                e()
            }
            this.tellAllFramesTo([Zt.SetConsent, t])
        }
        ,
        t.prototype.pageSignature = function() {
            return "".concat(this.xo, ":").concat(this.Co, ":").concat(this.Eo)
        }
        ,
        t.prototype.getBundleApiVersion = function() {
            return this.Ea ? "v2" : "v1"
        }
        ,
        t.prototype.Qa = function(t) {
            void 0 === t && (t = !1);
            var n = this.W.options.ready;
            if (n)
                try {
                    t ? n(!0) : n()
                } catch (t) {
                    "exception in _fs_ready(): ".concat(t)
                }
        }
        ,
        t.prototype.Ga = function() {
            this.zt.addUnload(it.Unload),
            eo.stopAll()
        }
        ,
        t.prototype.Xa = function(t, n) {
            var i, r, e, s, u = t.Flags, o = u.AjaxWatcher, a = u.ClientSideRageClick, c = u.DisableImgUrlPrivacy, h = u.GetCurrentSession, f = u.ResourceUploading, v = u.UseClientSideId;
            this.Wa = t,
            this.xo = t.UserIntId,
            this.Co = t.SessionIntId,
            this.Eo = t.PageIntId,
            this.To = t.PageStart,
            this.ja = h ? Ef.Enabled : Ef.Disabled,
            this.Ia = t.OrgSettings,
            Ds(null !== (i = this.Ia.UrlPrivacyConfig) && void 0 !== i ? i : Ht.DefaultOrgSettings.UrlPrivacyConfig, this.Ia.MaxUrlLength);
            var l = null !== (r = this.Ia.AttributeBlocklist) && void 0 !== r ? r : [];
            (null === (s = null === (e = this.za) || void 0 === e ? void 0 : e.privacy) || void 0 === s ? void 0 : s.attributeBlocklist) && ("adding ".concat(this.za.privacy.attributeBlocklist.length, " client defined attribute block rules."),
            l.push.apply(l, this.za.privacy.attributeBlocklist.map(Zs))),
            Xs(l),
            c || this.Zi.enable(),
            this.Ua.consoleWatcher().initializeMaxLogsPerPage(this.Ia.MaxConsoleLogPerPage),
            this.Ua.ajaxWatcher().initialize({
                requests: this.Ia.HttpRequestHeadersAllowlist,
                responses: this.Ia.HttpResponseHeadersAllowlist,
                maxAjaxPayloadLength: this.Ia.MaxAjaxPayloadLength
            }),
            this.Ua.perfWatcher().initialize({
                resourceUploader: this.Ua.getResourceUploader(),
                recTimings: !!this.Ia.RecordPerformanceResourceTiming,
                recImgs: !!this.Ia.RecordPerformanceResourceImg,
                maxPerfMarksPerPage: this.Ia.MaxPerfMarksPerPage
            }),
            this.Wn.initialize({
                canvasWatcherMode: t.Flags.CanvasWatcherMode,
                blocks: t.ElementBlocks,
                deferreds: t.ElementDeferreds,
                keeps: t.ElementKeeps,
                watches: t.ElementWatches,
                noDefaultExclusions: this.W.options.isWayfinder
            }),
            this.As.initialize(t.UrlKeeps),
            this.Wn.initializeConsent(n),
            "number" == typeof t.BundleUploadInterval && (this.Ta = t.BundleUploadInterval),
            "number" == typeof t.HeartbeatInterval && (this.Ca = t.HeartbeatInterval),
            f && this.Ya(),
            o && t.AjaxWatches && this.Ua.ajaxWatcher().setWatches(t.AjaxWatches),
            a && this.zt.enableEasyBake(),
            v && (this.Ea = !0),
            this.Ua.start(t.Flags)
        }
        ,
        t.prototype.Ja = function() {
            var t;
            this.qa && this.qa({
                sessionUrl: null !== (t = this.getCurrentSessionURL()) && void 0 !== t ? t : "",
                settings: this.Ia
            })
        }
        ,
        t.prototype.Za = function() {
            this.Va && this.Va()
        }
        ,
        t.prototype.Ya = function() {
            this.Ma = !0,
            this.Ua.initResourceUploading()
        }
        ,
        t.prototype.tc = function() {
            if (this.Ka.length > 0) {
                for (var t = 0; t < this.Ka.length; t++)
                    this.Ka[t]();
                this.Ka = []
            }
        }
        ,
        t.prototype.nc = function(t) {
            var n = this;
            this.W.measurer.enqueue(function() {
                var i = If(t)
                  , r = n.Aa({
                    appHost: n.Ha,
                    desc: i,
                    frame: t,
                    namespace: n.W.options.namespace,
                    orgId: n.Io,
                    recHost: n.Ba,
                    recSettingsHost: n.Da,
                    scheme: n.D,
                    script: n.Fa,
                    snippetVersion: n.W.options.snippetVersion,
                    underTest: !!n.W.recording.flags().DisableInertBundles,
                    useNamespace: n.W.options.useNamespace
                });
                r !== q.MissingDocumentHead && r !== q.MissingBodyOrChildren && r !== q.NoNonScriptElement || !t.contentDocument || new MutationObserver(function(i, r) {
                    n.nc(t),
                    r.disconnect()
                }
                ).observe(t.contentDocument, {
                    childList: !0,
                    subtree: !0
                }),
                n.zt.enqueue({
                    Kind: O.FRAME_STATUS,
                    Args: [Ss(t), i, r]
                })
            })
        }
        ,
        t.prototype.ic = function() {
            var t, n, i, r, e;
            if (this.za) {
                var s = null !== (i = null === (n = null === (t = this.za) || void 0 === t ? void 0 : t.privacy) || void 0 === n ? void 0 : n.attributeBlocklist) && void 0 !== i ? i : []
                  , u = null !== (e = null === (r = this.za) || void 0 === r ? void 0 : r.env) && void 0 !== e ? e : {};
                this.zt.enqueue({
                    Kind: O.INIT_API,
                    Args: ["privacy", ["attributeBlocklist", s.map(function(t) {
                        return [t.target, t.tag, t.name, t.action, t.type]
                    })], "env", Object.keys(u).map(function(t) {
                        var n = u[t];
                        return [t, Gi(n) ? n : ro(n)]
                    })]
                })
            }
        }
        ,
        t.prototype.Ms = function(t) {
            var n = Ss(t);
            if (n) {
                this.xa.push(t);
                var i = !1;
                if (t.contentWindow)
                    try {
                        i = !!mn(t.contentWindow, this.W.options.namespace)
                    } catch (t) {
                        i = !0
                    }
                var r = function(t) {
                    var n = t.src
                      , i = "".concat(location.protocol, "//").concat(location.host);
                    return !n || "about:blank" == n || Xi(n, "javascript:") || Xi(n, i)
                }(t)
                  , e = t.contentWindow && t.contentWindow.postMessage;
                r && !i || !e ? r ? this.rc(t) : "Frame Doesn't need injecting. Probably cross domain ".concat(If(t)) : this.ec(t, n)
            } else
                "fsid missing or invalid for iFrame ".concat(If(t))
        }
        ,
        t.prototype.ec = function(t, n) {
            var i = [Zt.GreetFrame, n];
            t.contentWindow && t.contentWindow.postMessage ? ("Cross-origin iframe ".concat(If(t)),
            Sf(this.W, t, i) || mf(this.W, t.contentWindow, i)) : "No content window on init of cross-origin iframe ".concat(If(t))
        }
        ,
        t.prototype.rc = function(t) {
            var n = this;
            if (this.Pa)
                "skipped same-origin iframe injection for ".concat(If(t), " because _fs_skip_iframe_injection is set to true");
            else {
                "Attempting to setup Frame ".concat(If(t)),
                this.nc(t);
                var i = this.vt.createChild();
                i.add(t, "load", !1, Tu.wrap(function() {
                    "onload for frame ".concat(If(t)),
                    n.nc(t)
                }, "iframe#loadListener")),
                this.Ra.set(t, i)
            }
        }
        ,
        t.prototype.Ps = function(t) {
            if (Ss(t)) {
                var n = this.Ra.get(t);
                n && (this.vt.clearChild(n),
                this.Ra["delete"](t)),
                this.xa = this.xa.filter(function(n) {
                    return n !== t
                })
            }
        }
        ,
        t.prototype.onMessageReceived = function(t, n) {
            if (!t || t.parent == this.Ki)
                switch (n[0]) {
                case Zt.EvtBundle:
                    var i = n[1]
                      , r = n[2]
                      , e = this.pageSignature();
                    if (e !== r)
                        return ro({
                            msg: "Page signature mismatch",
                            pageSignature: e,
                            messageSignature: r
                        }, 1024),
                        void (t && mf(this.W, t, [Zt.ShutdownFrame]));
                    i.length > 0 && this.zt.sendEvents(e, i);
                    break;
                case Zt.RequestFrameId:
                    if (!t)
                        return;
                    var s = this.sc(t);
                    if (void 0 === s)
                        ;
                    else {
                        var u = Ss(s);
                        "Responding to FID request for frame ".concat(u),
                        this.La[u] = !1,
                        this.uc(s, u)
                    }
                case Zt.Unknown:
                }
        }
        ,
        t.prototype.sc = function(t) {
            for (var n = 0, i = this.xa; n < i.length; n++) {
                var r = i[n];
                if (r.contentWindow === t)
                    return r
            }
        }
        ,
        t.prototype.uc = function(t, n) {
            var i = this
              , r = function() {
                var r, e = [];
                0 != i.No && null !== i.No && (e = i.Lo ? i.Lo.concat(i.No) : [i.No]);
                var s = i.W.time.startTime()
                  , u = [Zt.SetFrameId, n, e, s, i.D, i.Fa, i.Ha, i.Io, i.za, i.Wa, null !== (r = i.Wn.getConsent()) && void 0 !== r ? r : J.RevokeConsent, i.W.time.now()];
                Sf(i.W, t, u) || mf(i.W, t.contentWindow, u)
            };
            null == this.No ? this.Ka.push(r) : r()
        }
        ,
        t.prototype.oc = function(t) {
            var n, i, r;
            if (!this.Oa)
                if (null === (i = null === (n = this.Wa) || void 0 === n ? void 0 : n.Flags) || void 0 === i ? void 0 : i.FetchIntegrations) {
                    "string" != typeof Tn(r = this.W.window, "_fs_rec_settings_host") && (r._fs_rec_settings_host = kn(ui(r)));
                    var e = this.t.createElement("script");
                    t && (e.addEventListener("load", t),
                    e.addEventListener("error", t)),
                    e.async = !0,
                    e.src = "".concat(this.D, "//").concat(this.Ba, "/rec/integrations?OrgId=").concat(this.Io, "&isInFrame=").concat(this.W.recording.inFrame, "&isNative=").concat(this.W.recording.inWebView),
                    //this.t.head.appendChild(e), CHANGE
                    this.Oa = !0
                } else
                    t && t()
        }
        ,
        t.prototype.ac = function(t) {
            var n = this;
            this.W.measurer.enqueue(function() {
                n.zt.enqueue({
                    Kind: O.DOCUMENT_PROPERTIES,
                    Args: [Ss(t.scrollingElement), t.compatMode]
                })
            })
        }
        ,
        t
    }();
    function Ff(t) {
        var n, i, r, e, s, u, o, a, c = (null !== (i = null === (n = t.ElementBlocks) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0) > 0 && (null !== (s = null === (e = null === (r = t.OrgSettings) || void 0 === r ? void 0 : r.UrlPrivacyConfig) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 && (null !== (a = null === (o = null === (u = t.OrgSettings) || void 0 === u ? void 0 : u.AttributeBlocklist) || void 0 === o ? void 0 : o.length) && void 0 !== a ? a : 0) > 0;
        return c || Tu.send("Invalid page response", {
            rsp: t
        }),
        c
    }
    (Lf = Nf || (Nf = {})).START = "start",
    Lf.SHUTDOWN = "shutdown",
    Lf.INTERNAL_BUNDLE = "internal/bundle",
    Lf.INTERNAL_ERROR = "internal/error",
    Lf.INTERNAL_FS_INIT = "internal/fs-init";
    var Bf = [Nf.START, Nf.SHUTDOWN, Nf.INTERNAL_BUNDLE, Nf.INTERNAL_ERROR, Nf.INTERNAL_FS_INIT];
    function Df(t) {
        var n = t.Seq
          , i = nu(t);
        return [n, {
            data: i,
            type: "string"
        }, i.length]
    }
    function Hf(t, n) {
        var i;
        return new ae(function(r) {
            var e = ga(_a, function(s) {
                for (var u = 0, o = s; u < o.length; u++)
                    o[u].entryType === _a && (i ? (i.stop(),
                    i.start()) : (i = new t(function() {
                        null == e || e.disconnect(),
                        r()
                    }
                    ,1e3).start(),
                    null == n || n(i)))
            });
            !function(t, n, i, s) {
                var u = new i(function() {
                    null == e || e.disconnect(),
                    r()
                }
                ,4e3).start();
                null == s || s(u)
            }(0, 0, t, n)
        }
        )
    }
    var Wf = function() {
        function t(t, n) {
            this.cc = t,
            this.hc = n,
            this.fc = {
                stored: 0,
                inStorage: 0,
                currentSize: 0,
                totalSize: 0,
                key: t,
                nextSeq: 1
            }
        }
        return t.prototype.store = function(t, n) {
            return this.vc(t, n)
        }
        ,
        t.prototype.retrieve = function(t) {
            var n = void 0 === t ? {} : t
              , i = n.validate
              , r = n.keyMeta
              , e = function(t, n) {
                var i = [];
                try {
                    for (var r = qf(t, n)[0], e = 0, s = r; e < s.length; e++) {
                        var u = s[e]
                          , o = localStorage.getItem(u);
                        if (o) {
                            localStorage.removeItem(u);
                            var a = zf(o);
                            a && i.push(a)
                        }
                    }
                } catch (t) {}
                return i
            }(this.cc, r);
            return i ? e.filter(i) : e
        }
        ,
        t.prototype.vc = function(t, n) {
            try {
                var r = function(t, n) {
                    var i = qf(t, n)
                      , r = i[0]
                      , e = i[1]
                      , s = r.length ? $f(r[r.length - 1]) + 1 : 1;
                    return [s, Gf(t, s, n), r.length, e]
                }(this.cc, n)
                  , e = r[0]
                  , s = r[1]
                  , u = r[2]
                  , o = r[3]
                  , a = nu(t)
                  , c = a.length;
                return !this.lc(c + o) && (this.fc.stored++,
                this.fc.inStorage = u + 1,
                this.fc.nextSeq = e,
                this.fc.currentSize = c,
                this.fc.totalSize += c,
                localStorage.setItem(s, a),
                !0)
            } catch (t) {
                return function(t, n) {
                    return !!function(t) {
                        return t instanceof DOMException && (22 === t.code || 1014 === t.code || "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name)
                    }(t) && n.inStorage > 2
                }(t, this.fc) && ju("Quota Exceeded", i(i({}, this.fc), {
                    message: Jc(t),
                    err: t
                })),
                !1
            }
        }
        ,
        t.prototype.lc = function(t) {
            var n;
            return (null !== (n = this.hc) && void 0 !== n ? n : t) < t
        }
        ,
        t
    }();
    function zf(t) {
        try {
            return er(t)
        } catch (t) {
            return
        }
    }
    function qf(t, n) {
        var i, r = [], e = 0, s = "^".concat(t, ":\\d+$");
        n && (s = "^".concat(t, ":").concat(n, ":\\d+$"));
        var u = new RegExp(s);
        try {
            for (var o = 0; o < localStorage.length; o++) {
                var a = null !== (i = localStorage.key(o)) && void 0 !== i ? i : "";
                u.test(a) && (r.push(a),
                e += Vf(a))
            }
        } catch (t) {}
        return [r.sort(function(t, n) {
            return $f(t) - $f(n)
        }), e]
    }
    function Vf(t) {
        var n, i;
        try {
            return null !== (i = null === (n = localStorage.getItem(t)) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0
        } catch (t) {
            return 0
        }
    }
    function $f(t) {
        var n;
        return null !== (n = Wi(t.slice(t.lastIndexOf(":") + 1))) && void 0 !== n ? n : 0
    }
    function Gf(t, n, i) {
        return i ? "".concat(t, ":").concat(i, ":").concat(n) : "".concat(t, ":").concat(n)
    }
    function Qf(t, n, i, s) {
        return void 0 === i && (i = uo),
        r(this, void 0, ae, function() {
            var u, o, a, c, h, f, v = this;
            return e(this, function(l) {
                switch (l.label) {
                case 0:
                    if (!Bi(n) || 0 === n.length)
                        return [2];
                    o = !1,
                    a = function(n) {
                        return r(v, void 0, ae, function() {
                            var i, r, s, a, c, h;
                            return e(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]),
                                    i = n.bundle,
                                    r = i[0],
                                    s = i[2],
                                    "Sending ".concat(s, " trailing bytes from last session as Seq ").concat(r),
                                    void 0 !== u && (n.serverBundleTime = u),
                                    [4, t.bundle(n)];
                                case 1:
                                    return a = e.sent(),
                                    c = a[1],
                                    u = c.BundleTime,
                                    [2, _h.NoRetry];
                                case 2:
                                    return Ir(h = e.sent()) ? (o = !0,
                                    [2, _h.NoRetry]) : (nf(window) && 205 === (null == h ? void 0 : h.status) && (n.disableCompression = !0),
                                    [3, 3]);
                                case 3:
                                    return [2, _h.Retry]
                                }
                            })
                        })
                    }
                    ,
                    c = 0,
                    h = n,
                    l.label = 1;
                case 1:
                    return c < h.length ? (f = h[c],
                    !o && f && f.bundle ? [4, Lh(a.bind(null, f), i, s)] : [2]) : [3, 4];
                case 2:
                    l.sent(),
                    l.label = 3;
                case 3:
                    return c++,
                    [3, 1];
                case 4:
                    return [2]
                }
            })
        })
    }
    var Xf = function() {
        function t(t, n, i) {
            void 0 === i && (i = uo);
            var r = this;
            this.W = t,
            this.vo = n,
            this.lo = i,
            this.dc = t.options.multiStorage || new Wf("_fs_songs",2e6),
            this.wc = new i(function() {
                r.sing()
            }
            ,2e3),
            this.gc()
        }
        return t.prototype.gc = function() {
            return r(this, void 0, ae, function() {
                var t, n = this;
                return e(this, function(i) {
                    switch (i.label) {
                    case 0:
                        return t = function(t) {
                            n.mc = t
                        }
                        ,
                        [4, Hf(this.lo, t)];
                    case 1:
                        return i.sent(),
                        this.sing(),
                        [2]
                    }
                })
            })
        }
        ,
        t.prototype.store = function(t, n) {
            if (!this.W.options.useMockProtocol) {
                "Saving ".concat(t.bundles.length, " bundles in swan-song.");
                for (var i = 0, r = t.bundles; i < r.length; i++) {
                    var e = r[i];
                    if ("string" !== e[1].type)
                        return void ju("song#arrayBuilder", {
                            bundleType: e[1].type
                        })
                }
                var s = {
                    Bundles: t.bundles,
                    IsNewSession: t.isNewSession,
                    LastBundleTime: t.lastBundleTime,
                    OrgId: t.orgId,
                    PageId: t.pageId,
                    PageStartTime: this.W.time.startTime(),
                    RecHost: Su(this.W),
                    ServerBundleTime: t.serverBundleTime,
                    ServerPageStart: t.serverPageStart,
                    SessionId: t.sessionId,
                    UserId: t.userId,
                    Version: t.version
                };
                this.dc.store(s),
                this.wc.isRunning() || this.wc.start()
            }
        }
        ,
        t.prototype.stop = function() {
            this.wc.stop()
        }
        ,
        t.prototype.sing = function() {
            return r(this, void 0, ae, function() {
                return e(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return this.W.options.useMockProtocol ? [2] : [4, this.yc(this.dc.retrieve())];
                    case 1:
                        return t.sent(),
                        [4, this.bc(Yf("_fs_song"))];
                    case 2:
                        return t.sent(),
                        [4, this.bc(Yf("_fs_swan_song"))];
                    case 3:
                        return t.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        t.prototype.yc = function(t) {
            return r(this, void 0, ae, function() {
                var n, i;
                return e(this, function(r) {
                    switch (r.label) {
                    case 0:
                        if (!t.length)
                            return [2];
                        n = t.length - 1,
                        r.label = 1;
                    case 1:
                        return n >= 0 ? (i = t[n],
                        [4, this.bc(i)]) : [3, 4];
                    case 2:
                        r.sent(),
                        r.label = 3;
                    case 3:
                        return n--,
                        [3, 1];
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ,
        t.prototype.bc = function(t) {
            return r(this, void 0, ae, function() {
                var n, i, r = this;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]),
                        void 0 !== t && t.Bundles && t.UserId && t.SessionId && t.PageId ? ("Sending ".concat(t.Bundles.length, " bundles as prior page swan song"),
                        n = t.Bundles.reduce(function(n, i, e) {
                            var s = e === t.Bundles.length - 1;
                            return n.push({
                                bundle: i,
                                isNewSession: t.IsNewSession,
                                orgId: t.OrgId,
                                pageId: t.PageId,
                                recHost: t.RecHost,
                                serverBundleTime: t.ServerBundleTime,
                                serverPageStart: t.ServerPageStart,
                                sessionId: t.SessionId,
                                userId: t.UserId,
                                version: t.Version,
                                deltaT: s ? r.W.time.wallTime() - (t.LastBundleTime || 0) : null
                            }),
                            n
                        }, []),
                        [4, Qf(this.vo, n, this.lo, function(t) {
                            r.Ko = t
                        })]) : [2];
                    case 1:
                        return e.sent(),
                        [3, 3];
                    case 2:
                        return i = e.sent(),
                        "Error recovering swan-song: ".concat(i),
                        [3, 3];
                    case 3:
                        return [2]
                    }
                })
            })
        }
        ,
        t
    }();
    function Yf(t) {
        try {
            if (t in localStorage) {
                var n = localStorage[t];
                return delete localStorage[t],
                (i = er(n)).Bundles = function(t) {
                    for (var n = [], i = 0, r = t.Bundles; i < r.length; i++) {
                        var e = r[i];
                        Bi(e) ? n.push(e) : n.push(Df(e))
                    }
                    return n
                }(i),
                i
            }
        } catch (t) {
            "Error purging swan-song: ".concat(t)
        }
        var i
    }
    var Jf = function() {
        function t(t, n) {
            var i;
            this.W = t,
            this.vo = n,
            this.Sc = !1,
            this.kc = 0,
            this._c = !1,
            this.dc = new Wf("_fs_bundle"),
            this.Ac = !1,
            this.Ic = t.time.now(),
            Ru(!!this.W.recording.identity, "dwell#identity"),
            this.Ec = null === (i = this.W.recording.identity) || void 0 === i ? void 0 : i.getClientStore()
        }
        return t.prototype.init = function(t) {
            var n, i, r, e, s;
            this.Tc = t;
            var u = null !== (n = t.minDwellTime) && void 0 !== n ? n : 0;
            if (this.kc = 1e3 * bi.mathMin(u, 10),
            this.Ic = this.W.time.now(),
            this.kc && this.vo.startBeacon({
                orgId: (null === (i = this.Tc) || void 0 === i ? void 0 : i.orgId) || "",
                userId: (null === (r = this.Tc) || void 0 === r ? void 0 : r.userId) || "",
                sessionId: (null === (e = this.Tc) || void 0 === e ? void 0 : e.sessionId) || ""
            }),
            t.isNewSession || 0 === this.kc)
                return [];
            var o = this.retrieve(t, !0);
            return null === (s = this.Ec) || void 0 === s || s.setValue(fn, t.sessionId, ""),
            o
        }
        ,
        t.prototype.store = function(t) {
            return this.dc.store(t, t.orgId) ? (this.Sc = !0,
            !0) : (this._c = !0,
            !1)
        }
        ,
        t.prototype.retrieve = function(t, n) {
            var i = this;
            void 0 === n && (n = !1);
            var r = this.dc.retrieve({
                keyMeta: t.orgId,
                validate: function(t) {
                    return i.Cc(t, n)
                }
            });
            return this.Sc = !1,
            r
        }
        ,
        t.prototype.Cc = function(t, n) {
            void 0 === n && (n = !1);
            try {
                if (t && this.Tc && this.Tc.orgId === t.orgId && this.Tc.userId === t.userId && this.Tc.sessionId === t.sessionId && (n || this.Tc.pageId === t.pageId))
                    return !0
            } catch (t) {}
            return !1
        }
        ,
        t.prototype.getState = function() {
            return this.xc() ? this.Sc ? qt.ShouldFlush : qt.Inactive : qt.Pending
        }
        ,
        t.prototype.xc = function() {
            var t, n;
            if (this.Ac || !(null === (t = this.Tc) || void 0 === t ? void 0 : t.isNewSession) || 0 === this.kc || this._c)
                return !0;
            if (this.W.time.now() - this.Ic > this.kc)
                return !0;
            var i = null === (n = this.Ec) || void 0 === n ? void 0 : n.getValue(fn);
            return ((null == i ? void 0 : i.cookieValue) || (null == i ? void 0 : i.localStorageValue)) === this.Tc.sessionId && (this.Ac = !0,
            !0)
        }
        ,
        t
    }()
      , Zf = function() {
        function t(t, n, i, r, e, s, u) {
            void 0 === r && (r = so),
            void 0 === e && (e = uo),
            void 0 === s && (s = new Jf(t,n)),
            this.W = t,
            this.vo = n,
            this.Uu = i,
            this.Po = r,
            this.lo = e,
            this.Rc = s,
            this.Kc = u,
            this.jc = !1,
            this.Mc = 0,
            this.Pc = 0,
            this.Oc = 0,
            this.Ao = !1,
            this.po = 0,
            this.Nc = [],
            this.Lc = pr(),
            this.D = t.options.scheme,
            this.Uc = t.time.wallTime(),
            this.Fc = new Xf(t,this.vo,e),
            this.ko = Ph(this.W)
        }
        return t.prototype.addEndMarkerEvent = function(t) {
            this.ko.addEndMarkerEvent(t)
        }
        ,
        t.prototype.scheme = function() {
            return this.D
        }
        ,
        t.prototype.enqueueEvents = function(t, n) {
            for (var i = 0, r = n; i < r.length; i++) {
                var e = r[i];
                this.ko.add(e)
            }
        }
        ,
        t.prototype.Bc = function() {
            return this.W.recording.bundleUploadInterval()
        }
        ,
        t.prototype.initUploadTicker = function() {
            this.Lc = pr(),
            this.Dc = new this.Po(this.Bc())
        }
        ,
        t.prototype.startPipeline = function(t) {
            var n, i = this;
            this.Io = t.orgId,
            this.xo = t.userId,
            this.Co = t.sessionId,
            this.Eo = t.pageId,
            this.To = t.serverPageStart,
            this.Ao = t.isNewSession,
            this.ko.init(),
            this.Hc(this.Rc.init(t), this.lo),
            he(this.Bc() / 2).then(function() {
                i.W.recording.flags().UseMinNetworkBudget && i.Wc({
                    bypassMinBudget: !0
                }),
                i.zc()
            }),
            this.Dc || this.initUploadTicker(),
            null === (n = this.Dc) || void 0 === n || n.start(function() {
                i.W.recording.flags().UseMinNetworkBudget && pr() - i.Lc >= 2e4 && (i.Lc = pr(),
                i.Wc({
                    bypassMinBudget: !0
                })),
                i.zc()
            })
        }
        ,
        t.prototype.stopPipeline = function() {
            this.Dc && this.Dc.stop(),
            this.ko = Ph(this.W, this.ko),
            this.Nc = [],
            this.Fc.stop(),
            this.Io = void 0,
            this.xo = void 0,
            this.Co = void 0,
            this.Eo = void 0,
            this.To = void 0,
            this.Ao = !1
        }
        ,
        t.prototype.send = function(t) {
            var n, i;
            return r(this, void 0, ae, function() {
                var r, s;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        switch (r = null !== (n = null == t ? void 0 : t.mode) && void 0 !== n ? n : "flush",
                        s = null !== (i = null == t ? void 0 : t.reason) && void 0 !== i ? i : it.Unknown,
                        r) {
                        case "flush":
                            return [3, 1];
                        case "sing":
                            return [3, 3]
                        }
                        return [3, 4];
                    case 1:
                        return this.Wc({
                            flush: !0
                        }),
                        [4, this.qc()];
                    case 2:
                        return e.sent(),
                        [3, 5];
                    case 3:
                        return this.Vc(s),
                        [3, 5];
                    case 4:
                        _e(),
                        e.label = 5;
                    case 5:
                        return [2]
                    }
                })
            })
        }
        ,
        t.prototype.Vc = function(t) {
            if (this.Wc({
                flush: !0
            }),
            this.$c(this.Gc))
                Ru(!this.Gc, "_pendingBundle in dwell period");
            else {
                var n = [];
                this.Gc && n.push(this.Gc);
                for (var r = 0, e = this.Nc; r < e.length; r++) {
                    var s = e[r];
                    n.push(s)
                }
                var u = this.Qc(n);
                if (u) {
                    this.Fc.store(u, t);
                    for (var o = 0, a = n; o < a.length && (s = a[o],
                    this.vo.bundleBeacon(i(i({}, u), {
                        bundle: s,
                        deltaT: null
                    }))); o++)
                        ;
                }
            }
        }
        ,
        t.prototype.Qc = function(t) {
            if (t.length) {
                if (this.Io && this.xo && this.Co && this.Eo && void 0 !== this.To)
                    return {
                        bundles: t,
                        isNewSession: this.Ao,
                        lastBundleTime: this.Uc,
                        orgId: this.Io,
                        pageId: this.Eo,
                        serverBundleTime: this.po,
                        serverPageStart: this.To,
                        sessionId: this.Co,
                        userId: this.xo,
                        version: this.W.recording.bundleApiVersion()
                    };
                "unable to build stored bundle. one or more of orgId:".concat(this.Io, " | userId:").concat(this.xo, " | sessionId:").concat(this.Co, " | pageId:").concat(this.Eo, " | serverPageStart:").concat(this.To, " are undefined")
            }
        }
        ,
        t.prototype.Xc = function() {
            var t;
            if (this.Io && this.xo && this.Co) {
                for (var n = [], i = 0, r = this.Rc.retrieve({
                    orgId: this.Io
                }); i < r.length; i++) {
                    var e = r[i];
                    n.push.apply(n, e.bundles)
                }
                (t = this.Nc).unshift.apply(t, n)
            }
        }
        ,
        t.prototype.$c = function(t) {
            switch (this.Rc.getState()) {
            case qt.Pending:
                var n = t ? s([t], this.Nc, !0) : this.Nc
                  , i = this.Qc(n);
                if (!i)
                    return !1;
                var r = this.Rc.store(i);
                return r ? this.Nc = [] : this.Xc(),
                r;
            case qt.ShouldFlush:
                return this.Xc(),
                !1;
            case qt.Inactive:
            default:
                return !1
            }
        }
        ,
        t.prototype.zc = function() {
            return r(this, void 0, ae, function() {
                return e(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return this.Gc ? (this.jc && this.Yc(),
                        [2]) : (this.Wc(),
                        [4, this.qc()]);
                    case 1:
                        return t.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        t.prototype.Wc = function(t) {
            void 0 === t && (t = {});
            var n = this.ko.nextBundle(t);
            n && this.Nc.push(n)
        }
        ,
        t.prototype.qc = function() {
            return r(this, void 0, ae, function() {
                return e(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return this.Eo && this.To && !this.Gc && 0 != this.Nc.length ? this.$c() ? [2] : (this.Gc = this.Nc.shift(),
                        [4, this.Yc()]) : [2];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        t.prototype.Yc = function() {
            var t;
            return r(this, void 0, ae, function() {
                var n, i, r, s, u;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        if ((n = this.W.time.wallTime()) < this.Pc)
                            return [2];
                        if (!(i = this.Gc))
                            return [2];
                        this.jc = !1,
                        this.Oc = this.Uc = n,
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 5, , 6]),
                        [4, this.Jc(i)];
                    case 2:
                        return (r = e.sent()) ? (this.po = r.BundleTime,
                        this.Gc = void 0,
                        this.Pc = 0,
                        this.Mc = 0,
                        this.W.time.wallTime() - this.Oc > this.Bc() ? [4, this.qc()] : [3, 4]) : [2];
                    case 3:
                        e.sent(),
                        e.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        if (s = e.sent(),
                        u = "Failed to send bundle",
                        s instanceof _r) {
                            if (Ar(s.status))
                                return 206 === s.status || s.status >= 500 && Tu.send(u, {
                                    err: s,
                                    status: s.status
                                }),
                                null === (t = this.Kc) || void 0 === t || t.call(this),
                                [2]
                        } else
                            Tu.send(u, {
                                err: s,
                                status: 0
                            });
                        return this.jc = !0,
                        this.Pc = this.Oc + Uh(this.Mc++),
                        [3, 6];
                    case 6:
                        return [2]
                    }
                })
            })
        }
        ,
        t.prototype.Jc = function(t) {
            var n;
            return r(this, void 0, ae, function() {
                var i, r, s, u, o;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return this.Io && this.xo && this.Co && this.Eo ? (window,
                        i = this.Uu.getMsSinceLastUserActivity(),
                        [4, this.vo.bundle({
                            bundle: t,
                            deltaT: null,
                            isNewSession: this.Ao,
                            lastUserActivity: i,
                            orgId: this.Io,
                            pageId: this.Eo,
                            serverBundleTime: this.po,
                            serverPageStart: this.To,
                            sessionId: this.Co,
                            userId: this.xo,
                            version: this.W.recording.bundleApiVersion()
                        })]) : ("unable to send bundle. one or more of orgId:".concat(this.Io, " | userId:").concat(this.xo, " | sessionId:").concat(this.Co, " | pageId:").concat(this.Eo, " are undefined"),
                        [2]);
                    case 1:
                        return r = e.sent(),
                        s = r[0],
                        u = r[1],
                        null === (n = this.W.recording.observer) || void 0 === n || n.addEvent({
                            type: Nf.INTERNAL_BUNDLE,
                            data: {
                                clientTime: pr(),
                                lastActivity: i,
                                orgId: this.Io,
                                pageId: this.Eo,
                                pageStart: this.To,
                                prevBundleTime: this.po,
                                recHost: Su(this.W),
                                response: u,
                                seq: t[0],
                                sessionId: this.Co,
                                size: s,
                                userId: this.xo
                            }
                        }),
                        o = t[0],
                        s > 16e6 && o >= 16 && ("splitting large page: ".concat(s),
                        this.W.recording.splitPage(it.Size)),
                        window,
                        [2, u]
                    }
                })
            })
        }
        ,
        t.prototype.Hc = function(t, n) {
            return r(this, void 0, ae, function() {
                var i, r = this;
                return e(this, function(e) {
                    return 0 === t.length ? [2] : (i = t.reduce(function(t, n, i) {
                        return t.push.apply(t, n.bundles.map(function(t) {
                            return {
                                bundle: t,
                                isNewSession: n.isNewSession,
                                orgId: r.Io,
                                userId: r.xo,
                                sessionId: r.Co,
                                pageId: n.pageId,
                                version: n.version,
                                serverBundleTime: n.serverBundleTime,
                                serverPageStart: n.serverPageStart,
                                deltaT: null
                            }
                        })),
                        t
                    }, []),
                    [2, Qf(this.vo, i, n)])
                })
            })
        }
        ,
        t
    }()
      , tv = "_fs_preview"
      , nv = new RegExp("(^\\?|&)".concat(tv, "=(?:true|false)(&|$)"))
      , iv = function() {
        function t(t, n, i) {
            this.Ki = n,
            this.Ec = i,
            this.Zc = "fs_preview_".concat(t)
        }
        return t.prototype.isPreviewMode = function() {
            return this.th() || this.nh()
        }
        ,
        t.prototype.clear = function() {
            this.Ec.setValue(this.Zc, "", new Date(1970,1,1).toUTCString())
        }
        ,
        t.prototype.write = function() {
            var t = this.th()
              , n = this.ih();
            (t || n) && (t ? this.Ec.setValue(this.Zc, "true", new Date(pr() + 432e5).toUTCString()) : this.clear(),
            this.rh())
        }
        ,
        t.prototype.rh = function() {
            if (this.Ki.history) {
                var t = location.search.replace(nv, function(t, n, i) {
                    return i ? n : ""
                });
                this.Ki.history.replaceState({}, "", this.Ki.location.href.replace(location.search, t))
            }
        }
        ,
        t.prototype.th = function() {
            return this.Ki.document.location.search.indexOf("".concat(tv, "=true")) > -1
        }
        ,
        t.prototype.ih = function() {
            return this.Ki.document.location.search.indexOf("".concat(tv, "=false")) > -1
        }
        ,
        t.prototype.nh = function() {
            var t = this.Ec.getValue(this.Zc)
              , n = t.cookieValue
              , i = t.localStorageValue;
            return !(!n && !i)
        }
        ,
        t
    }();
    function rv(t) {
        var n, i, r;
        return {
            Kind: O.CAPTURE_SOURCE,
            Args: [t.type, t.entrypoint, "dom", null === (i = null === (n = t.source) || void 0 === n ? void 0 : n.integration) || void 0 === i ? void 0 : i.slice(0, 1024), !!(null === (r = t.source) || void 0 === r ? void 0 : r.userInitiated)]
        }
    }
    function ev(t) {
        var n = function(t) {
            return "msCrypto"in t ? t.msCrypto : t.crypto
        }(t);
        if ("function" == typeof (null == n ? void 0 : n.randomUUID))
            return n.randomUUID();
        var i = new Uint8Array(16);
        n.getRandomValues(i),
        i[6] = 15 & i[6] | 64,
        i[8] = 63 & i[8] | 128;
        for (var r = [], e = 0; e < i.length; e++)
            r.push(function(t, n, i) {
                for (var r = t; r.length < 2; )
                    r = "".concat("0").concat(r);
                return r
            }(i[e].toString(16)));
        return ["".concat(r[0]).concat(r[1]).concat(r[2]).concat(r[3]), "".concat(r[4]).concat(r[5]), "".concat(r[6]).concat(r[7]), "".concat(r[8]).concat(r[9]), "".concat(r[10]).concat(r[11]).concat(r[12]).concat(r[13]).concat(r[14]).concat(r[15])].join("-")
    }
    var sv = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function uv(t) {
        return 36 === t.length && sv.test(t)
    }
    var ov = void 0
      , av = 18e5
      , cv = function() {
        function t(t, n, i, r) {
            void 0 === r && (r = uo),
            this.W = t,
            this.Uu = n,
            this.eh = i,
            this.sh = 0,
            this.uh = new r(this.oh.bind(this))
        }
        return t.prototype.createUserSessionPage = function() {
            return function(t, n) {
                var i, r, e = function(t, n) {
                    var i, r, e, s = n.getUserId();
                    if (!s || !uv(s))
                        return [ov, "uid ".concat(s)];
                    var u = n.getSessionId();
                    if (!u || !uv(u))
                        return [ov, "sid ".concat(u)];
                    var o = t.time.wallTime()
                      , a = null !== (i = n.getSessionStartTimeMS()) && void 0 !== i ? i : 0
                      , c = bi.mathAbs(o - a);
                    if (0 === a || c >= 864e5)
                        return [ov, "exp sid: ".concat(a, "ms ").concat(c, "ms")];
                    var h = null !== (r = n.getLastUserActivityTimeMS()) && void 0 !== r ? r : a
                      , f = bi.mathMax(h, a)
                      , v = bi.mathAbs(o - f);
                    if (v >= av)
                        return [ov, "exp lua: ".concat(h, "ms ").concat(v, "ms")];
                    var l = null !== (e = n.getPageCount()) && void 0 !== e ? e : 0;
                    return l >= 250 ? [ov, "pages: ".concat(l)] : [u]
                }(t, n), s = e[0], u = e[1], o = s === ov, a = t.time.wallTime(), c = ev(t.window), h = n.getSessionId(), f = n.getUserId(), v = (null !== (i = n.getPageCount()) && void 0 !== i ? i : 0) + 1, l = null !== (r = n.getSessionStartTimeMS()) && void 0 !== r ? r : a;
                return o && (h = ev(t.window),
                f = function(t, n) {
                    var i = n.getUserId();
                    return i && uv(i) ? i : ev(t.window)
                }(t, n),
                v = 1,
                l = a),
                {
                    userId: f,
                    sessionId: h,
                    pageId: c,
                    isNewSession: o,
                    lastActivityTime: a,
                    pageCount: v,
                    reason: u,
                    sessionStartTime: l
                }
            }(this.W, this.eh)
        }
        ,
        t.prototype.persist = function(t) {
            this.eh.create({
                userId: t.userId,
                sessionId: t.sessionId,
                sessionStartTime: t.sessionStartTime,
                lastUserActivityTime: t.lastActivityTime,
                pageCount: t.pageCount
            })
        }
        ,
        t.prototype.start = function() {
            this.uh.start(3e5)
        }
        ,
        t.prototype.stop = function() {
            this.uh.stop()
        }
        ,
        t.prototype.oh = function() {
            var t = this.Uu.getLastUserActivityTS();
            t !== this.sh && (this.sh = t,
            this.eh.setLastUserActivityTimeMS(t)),
            this.start()
        }
        ,
        t
    }()
      , hv = function(t) {
        function s(n, i, r, e, s, u, o) {
            void 0 === r && (r = new Eh(n)),
            void 0 === e && (e = new Zf(n,i,r,void 0,void 0,void 0,function() {
                return c.shutdown(it.SettingsBlocked)
            }
            )),
            void 0 === s && (s = so),
            void 0 === u && (u = Af),
            void 0 === o && (o = new Bh(n,i));
            var a, c = t.call(this, n, s, r, e, u, o) || this;
            c.vo = i,
            c.jo = e,
            c.Oo = o,
            c.ah = !1,
            c.Fo = !1,
            c.hh = !1,
            c.t = c.Ki.document,
            c.No = 0,
            c.fh = n.recording.identity,
            c.lh = new iv(c.Io,c.Ki,c.fh.getClientStore()),
            c.ja = Ef.NoInfoYet,
            c.dh = new cv(n,r,c.fh),
            a = function(t) {
                if (c.Ua.stop(it.Api),
                t) {
                    var n = c.t.getElementById(t);
                    n && c.ph && n.setAttribute("_fs_embed_token", c.ph)
                }
            }
            ,
            c.Ki._fs_shutdown = a;
            var h = c.lh.isPreviewMode();
            return c.wh = c.vo.settings({
                orgId: c.Io,
                previewMode: h
            })["catch"](function() {}),
            c
        }
        return n(s, t),
        s.prototype.onDomLoad = function() {
            var n = this;
            t.prototype.onDomLoad.call(this),
            this.ah = !0,
            this.oc(function() {
                n.Qa(n.Fo)
            })
        }
        ,
        s.prototype.gh = function() {
            var t = this.W.options.replayFlags;
            if (/[?&]_fs_force_session=true(&|#|$)/.test(location.search) && (t = "".concat(t, ",forceSession"),
            this.Ki.history)) {
                var n = location.search.replace(/(^\?|&)_fs_force_session=true(&|$)/, function(t, n, i) {
                    return i ? n : ""
                });
                this.Ki.history.replaceState({}, "", this.Ki.location.href.replace(location.search, n))
            }
            return t
        }
        ,
        s.prototype.start = function(n, i, s) {
            var u, o, a, c, h, f;
            return r(this, void 0, ae, function() {
                var r, v, l, d, p, w, g, m, y, b, S, k, _, A, I, E, T, C, x, R, K, j, M, P, N, L;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return t.prototype.start.call(this, n, i, s),
                        [4, this.wh];
                    case 1:
                        if (!(r = e.sent()))
                            return this.mh(),
                            [2];
                        Ds(null !== (u = r.OrgSettings.UrlPrivacyConfig) && void 0 !== u ? u : Ht.DefaultOrgSettings.UrlPrivacyConfig, r.OrgSettings.MaxUrlLength),
                        v = this.gh(),
                        e.label = 2;
                    case 2:
                        return e.trys.push([2, 4, , 5]),
                        [4, ae.race([ke(this.Ki), he(250)])];
                    case 3:
                    case 4:
                        return e.sent(),
                        [3, 5];
                    case 5:
                        l = Gu(this.t),
                        d = l[0],
                        p = l[1],
                        U = this.Ki,
                        F = 0,
                        B = 0,
                        w = null == U.screen ? [F, B] : (F = parseInt(String(U.screen.width), 10),
                        B = parseInt(String(U.screen.height), 10),
                        [F = isNaN(F) ? 0 : F, B = isNaN(B) ? 0 : B]),
                        g = w[0],
                        m = w[1],
                        y = "",
                        n || (y = this.fh.getUserId()),
                        b = this.dh.createUserSessionPage(),
                        S = this.fh.getAppId(),
                        k = this.fh.getAppKeyHash(),
                        _ = this.lh.isPreviewMode(),
                        A = null !== (c = null === (a = null === (o = this.W) || void 0 === o ? void 0 : o.recording) || void 0 === a ? void 0 : a.preroll) && void 0 !== c ? c : -1,
                        I = Ns(Le(this.Ki), {
                            source: "page",
                            type: "base"
                        }),
                        E = Ns(this.Ki.location.href, {
                            source: "page",
                            type: "url"
                        }),
                        T = "" === this.t.referrer ? "" : Ns(this.t.referrer, {
                            source: "page",
                            type: "referrer"
                        }),
                        C = rr(this.t),
                        x = function(t) {
                            var n, i = "_fs_tab_id";
                            try {
                                var r = t.sessionStorage.getItem(i);
                                if (r)
                                    return r;
                                var e = Math.floor(1e17 * Math.random()).toString(16);
                                return t.sessionStorage.setItem(i, e),
                                null !== (n = t.sessionStorage.getItem(i)) && void 0 !== n ? n : void 0
                            } catch (t) {
                                return
                            }
                        }(this.Ki),
                        R = {
                            OrgId: this.Io,
                            UserId: y,
                            SessionId: b.sessionId,
                            PageId: b.pageId,
                            Url: E,
                            Base: I,
                            Width: d,
                            Height: p,
                            ScreenWidth: g,
                            ScreenHeight: m,
                            SnippetVersion: this.W.options.snippetVersion,
                            Referrer: T,
                            Preroll: A,
                            Doctype: C,
                            CompiledVersion: uu.Ver,
                            CompiledTimestamp: uu.TS,
                            AppId: S,
                            TabId: x,
                            PreviewMode: _ || void 0
                        },
                        v && (R.ReplayFlags = v),
                        e.label = 6;
                    case 6:
                        return e.trys.push([6, 12, , 13]),
                        [4, this.vo.page(R)];
                    case 7:
                        return K = e.sent(),
                        _ || !K.PreviewMode ? [3, 9] : [4, this.vo.settings({
                            orgId: this.Io,
                            previewMode: !0
                        })["catch"](function() {})];
                    case 8:
                        if (!(r = e.sent()))
                            return this.mh(),
                            [2];
                        Ds(null !== (h = r.OrgSettings.UrlPrivacyConfig) && void 0 !== h ? h : Ht.DefaultOrgSettings.UrlPrivacyConfig, r.OrgSettings.MaxUrlLength),
                        e.label = 9;
                    case 9:
                        return [4, this.yh(b, K, r)];
                    case 10:
                        return Ff(L = e.sent()) ? this.Na ? [2] : (window,
                        j = this.fh.getConsentStore().getConsentState(),
                        this.Xa(L, j),
                        window,
                        this.bh(L.CookieDomain, L.UserIntId, L.SessionIntId, L.PageIntId, L.EmbedToken),
                        this.Sh(),
                        L.PreviewMode && this.kh(),
                        (M = this.W.options.pageStart) && M(),
                        this.zt.enqueueFirst(rv({
                            type: "default"
                        })),
                        this.zt.enqueueFirst(this.Ua.getNavigateEvent(this.Ki.location.href, O.ENTRY_NAVIGATE)),
                        this.zt.enqueueFirst({
                            Kind: O.SYS_REPORTCONSENT,
                            Args: [j, tt.Document]
                        }),
                        this.zt.enqueueFirst({
                            Kind: O.SET_FRAME_BASE,
                            Args: [Ns(Le(this.Ki), {
                                source: "event",
                                type: O.SET_FRAME_BASE
                            }), C, E, T]
                        }),
                        P = {
                            Kind: O.PAGE_DATA,
                            Args: [E, I, d, p, g, m, this.W.options.snippetVersion, T, C, A, y, L.PageStart, or(this.Ki), this.Ki.navigator.userAgent, x, !!L.IsNewSession, !!L.PreviewMode, S, k, uu.TS, uu.Ver]
                        },
                        this.jo.addEndMarkerEvent(P),
                        null === (f = this.Oo) || void 0 === f || f.addEndMarkerEvent(P),
                        L.Flags.DisableInertBundles && (jh.forceFlush = !0),
                        this.zt.enqueue({
                            Kind: O.SCRIPT_COMPILED_VERSION,
                            Args: [uu.Ver]
                        }),
                        this.zt.enqueue({
                            Kind: O.RESIZE_LAYOUT,
                            Args: [d, p]
                        }),
                        this.Ua.addVisibilityChangeEvent(),
                        this.ic(),
                        [4, this.zt.startPipeline({
                            isNewSession: !!L.IsNewSession,
                            orgId: this.Io,
                            pageId: L.PageIntId,
                            serverPageStart: L.PageStart,
                            sessionId: L.SessionIntId,
                            userId: L.UserIntId,
                            minDwellTime: L.Flags.UseDwellTime && L.DwellTime || 0,
                            fixWhenValues: L.Flags.FixWhenValues
                        })]) : [2, this.mh()];
                    case 11:
                        return e.sent(),
                        this.ac(this.t),
                        this.Ja(),
                        [3, 13];
                    case 12:
                        return (N = e.sent())instanceof _r && (L = N.data) && L.user_id && L.cookie_domain && L.reason_code === jt.ReasonBlockedTrafficRamping && y !== L.user_id && this.bh(L.cookie_domain, L.user_id, "", "", ""),
                        this.mh(),
                        [3, 13];
                    case 13:
                        return [2]
                    }
                    var U, F, B
                })
            })
        }
        ,
        s.prototype.Sh = function() {
            var t = this;
            this.hh = !0,
            this.oc(function() {
                t.Qa(t.Fo)
            })
        }
        ,
        s.prototype.bh = function(t, n, i, r, e) {
            var s = this.fh;
            s.setIds(this.Ki, t, n, i),
            this.ph = e,
            this.lh.write(),
            "/User,".concat(s.getUserId(), "/Session,").concat(s.getSessionId(), "/Page,").concat(r)
        }
        ,
        s.prototype.oc = function(n) {
            this.ah && this.hh && t.prototype.oc.call(this, n)
        }
        ,
        s.prototype.kh = function() {
            var t = "FullStory-preview-script";
            if (!this.t.getElementById(t)) {
                var n = this.t.createElement("script");
                n.id = t,
                n.async = !0,
                n.src = "".concat(this.D, "//").concat(this.Ha, "/s/fspreview.js")//,
                //this.t.head.appendChild(n) CHANGE
            }
        }
        ,
        s.prototype.mh = function() {
            this.Za(),
            this.shutdown(it.SettingsBlocked),
            this.Fo = !0,
            this.Qa(this.Fo)
        }
        ,
        s.prototype.yh = function(t, n, s) {
            var u, o, a;
            return r(this, void 0, ae, function() {
                var r, c, h, f;
                return e(this, function(e) {
                    return (r = i(i({}, n), s)).Flags.UseClientSideId && (uv(c = null !== (u = r.UserUUID) && void 0 !== u ? u : "") && (t.userId = c),
                    uv(h = null !== (o = r.SessionUUID) && void 0 !== o ? o : "") && (t.sessionId = h),
                    uv(f = null !== (a = r.PageUUID) && void 0 !== a ? a : "") && (t.pageId = f),
                    this.fh.setCookieDomain(this.Ki, r.CookieDomain),
                    this.dh.persist(t),
                    r = i(i({}, r), {
                        UserIntId: t.userId,
                        SessionIntId: t.sessionId,
                        PageIntId: t.pageId,
                        IsNewSession: t.isNewSession,
                        PageStart: pr()
                    }),
                    t.reason && this.zt.enqueue({
                        Kind: O.SESSION_INFO,
                        Args: [t.reason]
                    })),
                    this.dh.start(),
                    [2, r]
                })
            })
        }
        ,
        s.prototype.onMessageReceived = function(n, i) {
            t.prototype.onMessageReceived.call(this, n, i),
            (null == n ? void 0 : n.parent) == this.Ki && i[0] === Zt.EndPreviewMode && this.lh.clear()
        }
        ,
        s
    }(Uf)
      , fv = function() {
        function t(t, n) {
            void 0 === n && (n = new vv(t)),
            this.W = t,
            this._h = n
        }
        return t.prototype.enqueueEvents = function(t, n) {
            var i = null != t ? t : void 0;
            this._h.postMessage(this.W.window.parent, [Zt.EvtBundle, fa(n), i], i)
        }
        ,
        t.prototype.startPipeline = function() {}
        ,
        t.prototype.stopPipeline = function() {}
        ,
        t.prototype.addEndMarkerEvent = function(t) {}
        ,
        t
    }()
      , vv = function() {
        function t(t) {
            this.W = t
        }
        return t.prototype.postMessage = function(t, n, i) {
            switch (n[0]) {
            case Zt.EvtBundle:
                bf(this.W, n[0], nu(n[1]), i) || mf(this.W, t, n);
                break;
            case Zt.RequestFrameId:
                bf(this.W, n[0], "[]", i) || mf(this.W, t, n);
                break;
            default:
                "Unknown message type: ".concat(n[0])
            }
        }
        ,
        t
    }()
      , lv = function(t) {
        function i(n, i, r, e, s) {
            void 0 === i && (i = new vv(n)),
            void 0 === r && (r = new fv(n,i)),
            void 0 === e && (e = so),
            void 0 === s && (s = Af);
            var u = t.call(this, n, e, void 0, r, s, void 0) || this;
            return u._h = i,
            u.t = u.Ki.document,
            u
        }
        return n(i, t),
        i.prototype.oc = function() {
            var n, i;
            this.W.recording.inWebView && (null === (i = null === (n = this.Wa) || void 0 === n ? void 0 : n.Flags) || void 0 === i ? void 0 : i.FetchChildIntegrations) && t.prototype.oc.call(this)
        }
        ,
        i.prototype.start = function(n, i, r) {
            var e = this;
            t.prototype.start.call(this, n, i, r),
            this.Ah(),
            this.vt.add(this.Ki, "load", !1, function() {
                e.Ua.recordingIsDetached() && e.W.recording.splitPage(it.FsShutdownFrame)
            }),
            this.Ua.addVisibilityChangeEvent()
        }
        ,
        i.prototype.onMessageReceived = function(n, i) {
            var s;
            return r(this, void 0, ae, function() {
                var r, u, o, a, c, h, f;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        if (t.prototype.onMessageReceived.call(this, n, i),
                        n !== this.Ki.parent && n !== this.Ki)
                            return [2];
                        switch (i[0]) {
                        case Zt.GreetFrame:
                            return [3, 1];
                        case Zt.SetFrameId:
                            return [3, 2];
                        case Zt.SetConsent:
                            return [3, 3];
                        case Zt.InitFrameMobile:
                            return [3, 4]
                        }
                        return [3, 7];
                    case 1:
                        return this.Ah(i[1]),
                        [3, 7];
                    case 2:
                        try {
                            if (!(r = i[1]))
                                return u = Ns(location.href, {
                                    source: "log",
                                    type: "debug"
                                }),
                                "Outer page gave us a bogus frame Id! Iframe: ".concat(u),
                                [2];
                            this.Ih({
                                frameId: r,
                                parentIds: i[2],
                                outerStartTime: i[3],
                                scheme: i[4],
                                script: i[5],
                                appHost: i[6],
                                orgId: i[7],
                                initConfig: i[8],
                                pageRsp: i[9],
                                consented: i[10],
                                minimumWhen: i[11]
                            })
                        } catch (t) {
                            "Failed to parse frameId from message: ".concat(nu(i))
                        }
                        return [3, 7];
                    case 3:
                        return this.setConsent(i[1]),
                        [3, 7];
                    case 4:
                        return e.trys.push([4, 6, , 7]),
                        o = JSON.parse(i[1]),
                        a = o.StartTime,
                        c = void 0,
                        i.length > 2 && i[2] && (h = i[2],
                        Object.prototype.hasOwnProperty.call(h, "ProtocolVersion") && h.ProtocolVersion >= 20180723 && Object.prototype.hasOwnProperty.call(h, "OuterStartTime") && (a = h.OuterStartTime),
                        Object.prototype.hasOwnProperty.call(h, "MobileScriptPath") && (c = h.MobileScriptPath)),
                        f = o.Host,
                        [4, this.Ih({
                            frameId: 0,
                            parentIds: [],
                            outerStartTime: a,
                            scheme: "https:",
                            script: null != c ? c : ai(f),
                            appHost: oi(f),
                            orgId: o.OrgId,
                            initConfig: void 0,
                            pageRsp: o.PageResponse,
                            consented: null !== (s = this.Wn.getConsent()) && void 0 !== s ? s : J.RevokeConsent
                        })];
                    case 5:
                        return e.sent(),
                        [3, 7];
                    case 6:
                        return e.sent(),
                        "Failed to initialize mobile web recording from message: ".concat(nu(i)),
                        [3, 7];
                    case 7:
                        return [2]
                    }
                })
            })
        }
        ,
        i.prototype.Ah = function(t) {
            this.No && this.No === t || 0 != this.No && this.Ki.parent && this._h.postMessage(this.Ki.parent, [Zt.RequestFrameId])
        }
        ,
        i.prototype.Ih = function(t) {
            var n;
            return r(this, void 0, ae, function() {
                var i, r, s = this;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        if (this.No)
                            return this.No !== t.frameId ? ("Updating frame id from ".concat(this.No, " to ").concat(t.frameId),
                            this.W.recording.splitPage(it.FsShutdownFrame)) : "frame Id is already set to ".concat(this.No),
                            [2];
                        if (i = Ns(location.href, {
                            source: "log",
                            type: "debug"
                        }),
                        "FrameId received within frame ".concat(i, ":").concat(t.frameId),
                        this.D = t.scheme,
                        this.Fa = t.script,
                        this.Ha = t.appHost,
                        this.Io = t.orgId,
                        this.za = t.initConfig,
                        this.No = t.frameId,
                        this.Lo = t.parentIds,
                        !t.pageRsp || !Ff(t.pageRsp))
                            return this.shutdown(it.FsShutdownFrame),
                            [2];
                        if (this.Na)
                            return [2];
                        r = t.consented,
                        this.Xa(t.pageRsp, r),
                        this.oc(),
                        this.Qa(),
                        this.zt.enqueueFirst(rv({
                            type: "default"
                        })),
                        this.zt.enqueueFirst({
                            Kind: O.SYS_REPORTCONSENT,
                            Args: [r, tt.Document]
                        }),
                        this.zt.enqueueFirst({
                            Kind: O.SET_FRAME_BASE,
                            Args: [Ns(Le(this.Ki), {
                                source: "event",
                                type: O.SET_FRAME_BASE
                            }), rr(this.Ki.document)]
                        }),
                        this.zt.enqueue({
                            Kind: O.SCRIPT_COMPILED_VERSION,
                            Args: [uu.Ver]
                        }),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        [4, ae.race([ke(this.Ki), he(250)])];
                    case 2:
                    case 3:
                        return e.sent(),
                        [3, 4];
                    case 4:
                        return this.zt.enqueue({
                            Kind: O.RESIZE_LAYOUT,
                            Args: Gu(this.Ki.document)
                        }),
                        this.ic(),
                        this.zt.rebaseIframe(t.outerStartTime, null !== (n = t.minimumWhen) && void 0 !== n ? n : 0),
                        this.W.time.setStartTime(t.outerStartTime),
                        this.xo && this.Co && this.Eo ? (this.zt.startPipeline({
                            frameId: t.frameId,
                            isNewSession: !!t.pageRsp.IsNewSession,
                            orgId: this.Io,
                            pageId: t.pageRsp.PageIntId,
                            parentIds: t.parentIds,
                            serverPageStart: t.pageRsp.PageStart,
                            sessionId: t.pageRsp.SessionIntId,
                            userId: t.pageRsp.UserIntId,
                            minDwellTime: 0
                        }).then(function() {
                            s.tc(),
                            s.ac(s.Ki.document),
                            s.Ja()
                        }),
                        [2]) : ("one or more of userId:".concat(this.xo, " | sessionId:").concat(this.Co, " | pageId:").concat(this.Eo, " are undefined"),
                        [2])
                    }
                })
            })
        }
        ,
        i
    }(Uf)
      , dv = 1
      , pv = function() {
        function t(t, n, i, r) {
            var e;
            this.eh = t,
            this.Io = n,
            this.Eh = i,
            this.Th = r,
            e = pf("fs_cid", "_fs_cid", this.Io, this.Eh),
            this.Ch = e[0],
            this.xh = e[1],
            this.Rh = e[2],
            this.Kh = e[3];
            var s = wf(this.Th, this.eh, this.Ch, this.xh, this.Rh, this.Kh)
              , u = s[0]
              , o = s[1]
              , a = u || o;
            this.jh = function(t) {
                var n = {
                    consent: J.RevokeConsent
                };
                if (!t)
                    return n;
                var i = t.split(".");
                return i.length < 1 ? n : (i[0],
                "1" === i[1] ? {
                    consent: J.GrantConsent
                } : n)
            }(a)
        }
        return t.prototype.getConsentState = function() {
            return this.jh.consent
        }
        ,
        t.prototype.setConsentState = function(t) {
            var n;
            this.Th || this.eh.clearCookie(this.Rh, this.Kh),
            this.jh.consent = t,
            t !== J.RevokeConsent ? this.eh.setValue(this.Ch, (n = this.jh.consent,
            [dv, n === J.GrantConsent ? 1 : 0].join(".")), new Date(1e3 * br()).toUTCString(), this.xh) : this.eh.clearCookie(this.Ch, this.xh)
        }
        ,
        t
    }()
      , wv = 1
      , gv = function() {
        function t(t, n, i, r) {
            var e;
            this.Io = n,
            this.Eh = i,
            this.Th = r,
            this.eh = t,
            e = pf("fs_lua", "_fs_lua", this.Io, this.Eh),
            this.Ch = e[0],
            this.xh = e[1],
            this.Rh = e[2],
            this.Kh = e[3];
            var s = wf(this.Th, this.eh, this.Ch, this.xh, this.Rh, this.Kh)
              , u = s[0]
              , o = s[1];
            this.jh = function(t, n) {
                var i;
                return null !== (i = a(t, n, mv, function(t, n) {
                    return (n.lastUserActivityTime || 0) > (t.lastUserActivityTime || 0) ? n : t
                })) && void 0 !== i ? i : {
                    lastUserActivityTime: void 0
                }
            }(u, o)
        }
        return t.prototype.getLastUserActivityTimeMS = function() {
            return this.jh.lastUserActivityTime
        }
        ,
        t.prototype.setLastUserActivityTimeMS = function(t) {
            this.Th || this.eh.clearCookie(this.Rh, this.Kh),
            this.jh.lastUserActivityTime = t,
            this.eh.setValue(this.Ch, function(t) {
                return [wv, t].join(".")
            }(t), new Date(pr() + av).toUTCString(), this.xh)
        }
        ,
        t
    }();
    function mv(t) {
        var n = {
            lastUserActivityTime: void 0
        };
        if (!t)
            return n;
        var i = t.split(".");
        return i.length < 1 ? n : (i[0],
        {
            lastUserActivityTime: Wi(i[1])
        })
    }
    var yv, bv, Sv = function() {
        function t(t, n, i, r) {
            var e, s;
            void 0 === n && (n = window),
            void 0 === i && (i = function() {}
            ),
            void 0 === r && (r = !1),
            this.Tc = t,
            this.Mh = void 0,
            t.useMockProtocol ? this.Ec = new Mf : this.Ec = null !== (s = t.clientStore) && void 0 !== s ? s : new u(n.document,i,r);
            var o = !!t.useNamespace
              , a = !!t.isolated;
            e = pf("fs_uid", "_fs_uid", t.orgId, o),
            this.Ch = e[0],
            this.xh = e[1],
            this.Rh = e[2],
            this.Kh = e[3],
            this.Ph = new pv(this.Ec,t.orgId,o,a),
            this.Oh = new gv(this.Ec,t.orgId,o,a),
            this.jh = this.Nh(t.orgId)
        }
        return t.prototype.Nh = function(t) {
            var n = wf(!!this.Tc.isolated, this.Ec, this.Ch, this.xh, this.Rh, this.Kh)
              , i = function(t, n, i) {
                return a(t, n, Sr, function(t, n) {
                    return t.orgId !== i && n.orgId !== i ? null : t.orgId !== i ? n : n.orgId !== i ? t : n.expirationAbsTimeSeconds > t.expirationAbsTimeSeconds ? n : t
                })
            }(n[0], n[1], t);
            return i || {
                expirationAbsTimeSeconds: br(),
                orgId: t,
                userId: "",
                sessionId: "",
                appKeyHash: ""
            }
        }
        ,
        t.prototype.getConsentStore = function() {
            return this.Ph
        }
        ,
        t.prototype.clear = function() {
            this.Oh.setLastUserActivityTimeMS(void 0),
            this.jh.sessionStartTime = this.jh.pageCount = void 0,
            this.jh.userId = this.jh.sessionId = this.jh.appKeyHash = this.Mh = "",
            this.jh.expirationAbsTimeSeconds = br(),
            this.Lh()
        }
        ,
        t.prototype.create = function(t) {
            this.Oh.setLastUserActivityTimeMS(t.lastUserActivityTime),
            this.jh = i(i({}, this.jh), t),
            this.Lh()
        }
        ,
        t.prototype.getOrgId = function() {
            return this.jh.orgId
        }
        ,
        t.prototype.getUserId = function() {
            return this.jh.userId
        }
        ,
        t.prototype.setUserId = function(t) {
            this.jh.userId = t,
            this.Lh()
        }
        ,
        t.prototype.getSessionId = function() {
            return this.jh.sessionId
        }
        ,
        t.prototype.getAppKeyHash = function() {
            return this.jh.appKeyHash
        }
        ,
        t.prototype.getCookies = function() {
            return this.Ec.cookies
        }
        ,
        t.prototype.setAppId = function(t) {
            this.Mh = t,
            this.jh.appKeyHash = zh(t),
            this.Lh()
        }
        ,
        t.prototype.getAppId = function() {
            return this.Mh
        }
        ,
        t.prototype.setSessionStartTimeMS = function(t) {
            this.jh.sessionStartTime = t,
            this.Lh()
        }
        ,
        t.prototype.getSessionStartTimeMS = function() {
            return this.jh.sessionStartTime
        }
        ,
        t.prototype.setLastUserActivityTimeMS = function(t) {
            this.Oh.setLastUserActivityTimeMS(t)
        }
        ,
        t.prototype.getLastUserActivityTimeMS = function() {
            return this.Oh.getLastUserActivityTimeMS()
        }
        ,
        t.prototype.setPageCount = function(t) {
            this.jh.pageCount = t,
            this.Lh()
        }
        ,
        t.prototype.getPageCount = function() {
            return this.jh.pageCount
        }
        ,
        t.prototype.getClientStore = function() {
            return this.Ec
        }
        ,
        t.prototype.setCookie = function(t, n, i) {
            void 0 === i && (i = new Date(pr() + 6048e5).toUTCString()),
            this.Ec.setCookie(t, n, i)
        }
        ,
        t.prototype.setCookieDomain = function(t, n) {
            var i = n;
            (yn(i) || i.match(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g)) && (i = "");
            var r = this.Tc.cookieDomain;
            Gi(r) && (i = r),
            this.Ec.setDomain(i)
        }
        ,
        t.prototype.setIds = function(t, n, i, r) {
            this.setCookieDomain(t, n),
            this.jh.userId = i,
            this.jh.sessionId = r,
            this.Lh()
        }
        ,
        t.prototype.clearAppId = function() {
            return !!this.jh.appKeyHash && (this.Mh = "",
            this.jh.appKeyHash = "",
            this.Lh(),
            !0)
        }
        ,
        t.prototype.encode = function() {
            var t, n, i, r = [this.jh.userId, null !== (t = this.jh.sessionId) && void 0 !== t ? t : "", "".concat(null !== (n = this.jh.sessionStartTime) && void 0 !== n ? n : ""), "", "".concat(null !== (i = this.jh.pageCount) && void 0 !== i ? i : "")].join(":"), e = ["", this.jh.orgId, r];
            return this.jh.appKeyHash && e.push(encodeURIComponent(this.jh.appKeyHash)),
            e.push("/".concat(this.jh.expirationAbsTimeSeconds)),
            e.join("#")
        }
        ,
        t.prototype.Lh = function() {
            this.jh.expirationAbsTimeSeconds++,
            this.Tc.isolated || this.Ec.clearCookie(this.Rh, this.Kh);
            var t, n = this.encode(), i = (t = this.jh.expirationAbsTimeSeconds,
            new Date(1e3 * t).toUTCString());
            this.Ec.setValue(this.Ch, n, i, this.xh)
        }
        ,
        t
    }();
    function kv(t, n, i, r, e) {
        if (t && "object" == typeof t) {
            var s = 0
              , u = {};
            for (var o in t)
                if (!(o in e)) {
                    var a = t[o];
                    e[o] = {
                        value: a,
                        apiSource: n,
                        apiVersion: i,
                        schema: r
                    },
                    u[o] = a,
                    s++
                }
            if (0 !== s)
                return u
        }
    }
    function _v(t, n) {
        var i, r, e = {}, s = {};
        for (var u in n)
            if (bi.objectHasOwnProp(n, u)) {
                if (t() <= 0)
                    break;
                var o = n[u];
                if (void 0 !== o) {
                    var a = Av(u)
                      , c = a[0]
                      , h = a[1]
                      , f = o
                      , v = h;
                    if (qi(o))
                        f = (i = _v(t, o))[0],
                        v = i[1];
                    else if (Bi(r = o) && r.length > 0 && r.every(qi)) {
                        f = [],
                        v = [];
                        for (var l = 0, d = o; l < d.length; l++) {
                            var p = _v(t, d[l])
                              , w = p[0]
                              , g = p[1];
                            f.push(w),
                            v.push(g)
                        }
                    } else
                        "date" === h || Cv(o) ? f = Tv(o) : Bi(o) && ("dates" === h || o.every(Cv)) && (f = o.map(Tv));
                    e[c] = f,
                    v && (s[c] = v)
                }
            }
        return [e, s]
    }
    function Av(t) {
        var n = function(t) {
            return /^[a-zA-Z_][a-zA-Z0-9_\\-]*$/.test(t) ? t : t.replace(/^[^a-zA-Z_]+|[^a-zA-Z0-9_]/g, "") || t
        }(t)
          , i = n.lastIndexOf("_");
        if (-1 === i)
            return [n, null];
        var r, e = n.substring(0, i), s = n.substring(i + 1);
        return r = s,
        Ev.test(r) ? [e, s] : [n, null]
    }
    (bv = yv || (yv = {})).TrackEvent = "trackEvent",
    bv.GetSession = "getSession",
    bv.Init = "init",
    bv.Log = "log",
    bv.Source = "source",
    bv.Observe = "observe",
    bv.Restart = "restart",
    bv.SetIdentity = "setIdentity",
    bv.SetConfig = "setConfig",
    bv.SetPage = "setPage",
    bv.SetProperties = "setProperties",
    bv.Shutdown = "shutdown",
    bv.Start = "start",
    bv.Stat = "stat",
    bv.GetFullstoryId = "getFullstoryId";
    var Iv, Ev = /^(?:bool|date|int|obj|real|str)s?$/;
    function Tv(t) {
        if (null != t) {
            var n = Cv(t) ? t : new Date(t);
            try {
                return n.toISOString()
            } catch (n) {
                if ("string" == typeof t)
                    return t
            }
        }
        return null
    }
    function Cv(t) {
        return null != t && t.constructor === Date
    }
    function xv(t, n, i, r, e, s) {
        var u, o, a, c, h = 1500, f = function() {
            return --h
        };
        return i ? (a = (u = Rv(f, n, i))[0],
        c = u[1]) : (a = (o = _v(f, n))[0],
        c = o[1]),
        h < 0 && "Too many properties for [".concat(t, "] API call"),
        t === mt.Document ? {
            properties: kv(a, r, e, c, s),
            schema: c
        } : {
            properties: a,
            schema: c
        }
    }
    function Rv(t, n, i) {
        var r = {}
          , e = {};
        function s(t, n, i) {
            r[t] = n,
            i && (e[t] = i)
        }
        for (var u in n)
            if (bi.objectHasOwnProp(n, u)) {
                if (t() <= 0)
                    break;
                var o = n[u]
                  , a = i[u];
                if (qi(o)) {
                    var c = Rv(t, o, a || {})
                      , h = c[0]
                      , f = c[1];
                    r[u] = h,
                    a && (e[u] = f)
                } else
                    $i(o) ? s(u, Vi(o), a) : Bi(o) && Di(o, $i) ? s(u, o.map(Vi), a) : s(u, o, a)
            }
        return [r, e]
    }
    function Kv(t, n, i, r, e, s) {
        var u = nu(n)
          , o = r ? nu(r) : void 0
          , a = "fs" !== i ? i : void 0;
        switch (t) {
        case mt.Event:
            return {
                Kind: O.SYS_CUSTOM,
                Args: [s, u, a, e, o]
            };
        case mt.Document:
        case mt.Page:
        case mt.User:
            return {
                Kind: O.SYS_SETVAR,
                Args: [t, u, a, e, o]
            };
        default:
            _e(0, "Unsupported")
        }
    }
    var jv = function() {
        function t() {
            this.Uh = {}
        }
        return t.prototype.unloadCrossPageVars = function(t) {
            switch (t) {
            case it.Hibernation:
            case it.Size:
                break;
            default:
                this.Fh = void 0
            }
        }
        ,
        t.prototype.getCrossPageVars = function() {
            return this.Fh
        }
        ,
        t.prototype.getDocumentVars = function() {
            var t, n = {};
            for (var r in this.Uh) {
                var e = this.Uh[r]
                  , s = e.value
                  , u = e.apiSource
                  , o = e.schema
                  , a = e.apiVersion;
                (l = null !== (t = n[h = "".concat(null != u ? u : "").concat("$$$").concat(null != a ? a : "")]) && void 0 !== t ? t : {
                    properties: {}
                }).properties[r] = s,
                o && (l.schema = i(i({}, l.schema), o)),
                n[h] = l
            }
            var c = [];
            for (var h in n) {
                var f = h.split("$$$")
                  , v = (u = f[0],
                f[1])
                  , l = n[h];
                Mv(c, Kv(mt.Document, l.properties, "" === u ? void 0 : u, l.schema, Wi(v)))
            }
            return c
        }
        ,
        t.prototype.api = function(t, n) {
            var i, r = {
                events: [],
                reidentify: !1
            }, e = [];
            try {
                var s = function(t) {
                    switch (t.operation) {
                    case yv.TrackEvent:
                        return mt.Event;
                    case yv.SetPage:
                        return mt.Page;
                    case yv.SetProperties:
                        var n = t.option.type;
                        switch (n) {
                        case mt.Document:
                        case mt.Page:
                        case mt.User:
                            return n;
                        default:
                            return _e(0, "Invalid scope: ".concat(n))
                        }
                    default:
                        _e(0, "Unsupported")
                    }
                }(t)
                  , u = null === (i = t.source) || void 0 === i ? void 0 : i.integration;
                if (!function(t, n) {
                    switch (t) {
                    case mt.Event:
                        var i = n.option.name;
                        return "string" == typeof i || ("Custom event name invalid: ".concat(i),
                        !1);
                    case mt.Document:
                    case mt.Page:
                        return !0;
                    case mt.User:
                        var r = n.option.properties;
                        return "object" == typeof r || ("Expected argument of type 'object' instead got type: '".concat(typeof r, "', value: ").concat(nu(r)),
                        !1);
                    default:
                        _e(0, "Unsupported")
                    }
                }(s, t))
                    return r;
                var o = function(t, n, i) {
                    var r = n.option.properties
                      , e = function(t, n) {
                        var i = n.option.schema;
                        if (2 === n.apiVersion) {
                            var r = zi(i) && "properties"in i ? i.properties : {};
                            return zi(r) ? r : {}
                        }
                    }(0, n);
                    if (t === mt.Event)
                        return {
                            rawProps: r,
                            eventName: n.option.name,
                            rawSchema: e
                        };
                    if (t !== mt.User || !("uid"in r))
                        return {
                            rawProps: r,
                            rawSchema: e
                        };
                    var s = r.uid;
                    if (!1 === s)
                        return delete r.uid,
                        {
                            rawProps: r,
                            rawSchema: e,
                            reidentify: !!i,
                            nextAppId: ""
                        };
                    var u = function(t, n) {
                        var i = t;
                        if ("number" == typeof i && bi.mathFloor(i) == i && ("Expected appId of type 'string' instead got value: ".concat(i, " of type: ").concat(typeof i),
                        i = "".concat(i)),
                        "string" != typeof i)
                            return "blocking FS.identify API call; uid value (".concat(i, ") must be a string"),
                            [void 0, bt.FsId];
                        var r = i.trim();
                        if (gr.indexOf(r.toLowerCase()) >= 0)
                            return "blocking FS.identify API call; uid value (".concat(r, ") is illegal"),
                            [void 0, bt.FsId];
                        var e = zh(r)
                          , s = void 0;
                        return n && n !== e && n !== r && ("user re-identified; existing uid hash (".concat(n, ") does not match provided uid (").concat(r, ")"),
                        s = bt.NewUid),
                        [r, s]
                    }(s, i)
                      , o = u[0]
                      , a = u[1];
                    if (o)
                        return r.uid = o,
                        {
                            rawProps: r,
                            rawSchema: e,
                            nextAppId: o,
                            reidentify: a === bt.NewUid
                        };
                    switch (a) {
                    case bt.FsId:
                    case void 0:
                        break;
                    default:
                        "unexpected failReason returned from setAppId: ".concat(a)
                    }
                }(s, t, n);
                if (!o)
                    return r;
                var a = o.rawProps
                  , c = o.rawSchema
                  , h = o.reidentify
                  , f = o.nextAppId
                  , v = o.eventName
                  , l = xv(s, null != a ? a : {}, c, u, t.apiVersion, this.Uh)
                  , d = l.properties
                  , p = l.schema;
                if (!d && s === mt.Document)
                    return r;
                var w = Kv(s, null != d ? d : {}, u, p, t.apiVersion, v);
                return Mv(e, function(t, n) {
                    var i = Pv[t];
                    if (i)
                        return rv({
                            source: n,
                            type: "api",
                            entrypoint: i
                        })
                }(s, t.source)),
                Mv(e, w),
                s === mt.Page && (this.Fh = w),
                {
                    events: e,
                    reidentify: !!h,
                    appId: f
                }
            } catch (n) {
                return "unexpected exception handling ".concat(t.operation, " API call: ").concat(n.message),
                r
            }
        }
        ,
        t
    }();
    function Mv(t, n) {
        n && t.push(n)
    }
    var Pv = ((Iv = {})[mt.User] = "setVars",
    Iv[mt.Event] = "event",
    Iv)
      , Ov = x || R || g
      , Nv = function() {
        function t(t, n) {
            void 0 === n && (n = function(t) {
                return new WebSocket(t)
            }
            ),
            this.Bh = n,
            this.Dh = !1,
            this.Hh = !1,
            this.zt = {},
            this.Ju = 1,
            this.W = t,
            this.D = t.options.scheme,
            this.Da = t.options.recSettingsHost
        }
        return t.isSupported = function() {
            return "WebSocket"in window
        }
        ,
        t.prototype.page = function(t) {
            var n = this;
            return new ae(function(i, r) {
                n.Wh({
                    Cmd: Ut.Page,
                    Page: t
                }, Su(n.W), function(t) {
                    t.Cmd === Bt.Page ? i(t.Page) : ("socket: unexpected page response: ".concat(t.Cmd),
                    r(t.Cmd))
                }, r)
            }
            )
        }
        ,
        t.prototype.settings = function(t) {
            var n = this.W.options.settings;
            if (n)
                return ae.resolve(n);
            var i = t.previewMode ? Su(this.W) : this.Da;
            return bu(this.W, this.D, i, t)
        }
        ,
        t.prototype.event = function(t) {
            return this.Jc({
                req: Ut.Event,
                rsp: Bt.Event
            }, t)
        }
        ,
        t.prototype.bundle = function(t) {
            return this.Jc({
                req: Ut.Bundle,
                rsp: Bt.Bundle
            }, t)
        }
        ,
        t.prototype.Jc = function(t, n) {
            return r(this, void 0, ae, function() {
                var i, r, s, u = this;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, ye()];
                    case 1:
                        return e.sent(),
                        i = n.deltaT,
                        r = n.serverPageStart,
                        s = n.serverBundleTime,
                        [2, new ae(function(e, o) {
                            var a = Su(u.W);
                            Lv(n.recHost, a);
                            var c = n.bundle
                              , h = c[0]
                              , f = {
                                Bundle: Uv(c[1]),
                                DeltaT: null === i ? void 0 : i,
                                OrgId: n.orgId,
                                PageId: n.pageId,
                                PageStart: null == r ? void 0 : r,
                                PrevBundleTime: null == s ? void 0 : s,
                                Seq: h,
                                SessionId: n.sessionId,
                                UserId: n.userId
                            }
                              , v = u.Wh({
                                Cmd: t.req,
                                Bundle: f
                            }, a, function(n) {
                                n.Cmd === t.rsp ? e([null != v ? v : 0, n.Bundle]) : "socket: unexpected bundle response: ".concat(n.Cmd)
                            }, o)
                        }
                        )]
                    }
                })
            })
        }
        ,
        t.prototype.bundleBeacon = function(t) {
            var n = Su(this.W);
            return Lv(t.recHost, n),
            wu(this.W, this.D, n, t)
        }
        ,
        t.prototype.startBeacon = function(t) {
            return gu(this.W, this.D, Su(this.W), t)
        }
        ,
        t.prototype.Wh = function(t, n, i, r) {
            var e = t;
            e.Seq = this.Ju++;
            var s = nu(e);
            return this.zt[e.Seq] = {
                payload: s,
                win: i,
                lose: r
            },
            this.zh(n),
            s.length
        }
        ,
        t.prototype.qh = function(t) {
            var n;
            try {
                n = er(t)
            } catch (t) {
                return void "socket: error parsing frame: ".concat(t)
            }
            var i = this.zt[n.Seq];
            delete this.zt[n.Seq],
            i ? n.Cmd === Bt.Error ? (n.Fail.Error,
            i.lose(new _r(n.Fail.Status,n.Fail.Error))) : i.win(n) : "socket: mismatched request seq ".concat(n.Seq, "; ignoring")
        }
        ,
        t.prototype.Vh = function() {
            if (this.Hh && this.$h)
                for (var t in this.zt) {
                    var n = this.zt[t];
                    n.sent || (this.$h.send(n.payload),
                    n.sent = !0)
                }
        }
        ,
        t.prototype.Gh = function() {
            for (var t in this.zt) {
                var n = this.zt[t];
                n.sent && (delete this.zt[t],
                n.lose(new _r(0,"Pending request")))
            }
        }
        ,
        t.prototype.zh = function(t) {
            var n = this;
            if (this.Hh)
                this.Vh();
            else if (!this.Dh) {
                this.Dh = !0;
                var i = "".concat("https:" == this.D ? "wss:" : "ws:", "//").concat(t, "/rec/sock");
                this.$h = this.Bh(i),
                this.$h.onopen = function(t) {
                    n.Dh = !1,
                    n.Hh = !0,
                    n.Vh()
                }
                ,
                this.$h.onmessage = function(t) {
                    n.qh(t.data),
                    n.Vh()
                }
                ,
                this.$h.onclose = function(t) {
                    n.Dh = n.Hh = !1,
                    n.Gh()
                }
                ,
                this.$h.onerror = function(t) {
                    n.Dh = n.Hh = !1,
                    n.Gh()
                }
            }
        }
        ,
        t
    }();
    function Lv(t, n) {
        t && Ru(n === t, "sock#recHost")
    }
    function Uv(t) {
        if ("string" === t.type)
            return JSON.parse(t.data);
        throw new Error("Unexpected bundle type: ".concat(t.type))
    }
    var Fv = function() {
        function t(t) {
            this.Qh = !1,
            this.da = t
        }
        return t.prototype.flush = function() {
            this.da(),
            this.Qh = !1
        }
        ,
        t.prototype.schedule = function() {
            var t = this;
            this.Qh || (this.Qh = !0,
            ae.resolve().then(function() {
                t.flush()
            })["catch"](function(t) {
                return Tu.send("microtask#flush", {
                    err: t
                })
            }))
        }
        ,
        t
    }()
      , Bv = function() {
        function t() {
            this.Xh = {
                start: [],
                shutdown: [],
                "internal/bundle": [],
                "internal/error": [],
                "internal/fs-init": []
            }
        }
        return t.prototype.registerListener = function(t, n) {
            var i;
            if (-1 === Bf.indexOf(t) || !n)
                throw new Error("Invalid event type or missing callback.");
            var r = {
                disconnected: !1,
                callback: n,
                count: 0
            }
              , e = (null !== (i = this.Xh[t]) && void 0 !== i ? i : []).filter(function(t) {
                return !t.disconnected
            });
            return e.push(r),
            this.Xh[t] = e,
            {
                disconnect: function() {
                    r.disconnected = !0
                }
            }
        }
        ,
        t.prototype.hasListeners = function(t) {
            var n;
            return (null !== (n = this.Xh[t]) && void 0 !== n ? n : []).length > 0 && this.Xh[t].some(function(t) {
                return !t.disconnected
            })
        }
        ,
        t.prototype.takeRecords = function(t) {
            var n, i = null !== (n = this.Xh[t.type]) && void 0 !== n ? n : [];
            if (0 !== i.length)
                for (var r = 0, e = i; r < e.length; r++) {
                    var s = e[r];
                    if (!(s.disconnected || s.count > 0 && t.once)) {
                        s.count += 1;
                        try {
                            s.callback(t.data)
                        } catch (t) {
                            "Recording observer callback error: ".concat(ro(t))
                        }
                    }
                }
        }
        ,
        t
    }()
      , Dv = function() {
        function t(t) {
            var n = this;
            this.Pi = t,
            this.zt = [],
            this.ma = new Fv(function() {
                n.da()
            }
            )
        }
        return t.prototype.addEvent = function(t) {
            this.Pi.hasListeners(t.type) && (this.zt.push(t),
            this.ma.schedule())
        }
        ,
        t.prototype.da = function() {
            for (var t = 0, n = this.zt; t < n.length; t++) {
                var i = n[t];
                this.Pi.takeRecords(i)
            }
            this.zt = []
        }
        ,
        t
    }()
      , Hv = ""
      , Wv = "https:";
    function zv(t) {
        if (t === top || Un(t) || Ln(t) || Bn(t))
            return !0;
        try {
            return t.parent.document,
            zv(t.parent)
        } catch (t) {}
        return !1
    }
    function qv(t) {
        return !k && t.postMessage && t.MutationObserver && Vv(yi, function(t, n) {
            n.disconnect()
        }) && Vv(t.Map) && Vv(t.Set) && Vv(t.WeakMap) && bi.snapshot.status !== gi.UnrecoverableFailure ? !!zv(t) || !1 : (function(t) {
            try {
                if (t.snapshot.status === gi.UnrecoverableFailure) {
                    for (var n = {}, i = 0; i < t.snapshot.errors.length; i++)
                        n["error".concat(i + 1)] = t.snapshot.errors[i];
                    l || Tu.send("windexFailure", n),
                    t.snapshot.errors.forEach(A)
                }
            } catch (t) {}
        }(bi),
        !1)
    }
    function Vv(t, n) {
        try {
            if (t)
                return void 0 !== n ? new t(n) : new t,
                !0
        } catch (t) {}
        return !1
    }
    var $v = function(t, n) {
        var i, r, e;
        switch (n) {
        case "url.now":
            return null !== (i = t.getCurrentSessionURL(!0)) && void 0 !== i ? i : null;
        case "id":
            return null !== (r = t.getCurrentSession()) && void 0 !== r ? r : null;
        default:
            return null !== (e = t.getCurrentSessionURL()) && void 0 !== e ? e : null
        }
    }
      , Gv = Ht.DefaultStatsSettings
      , Qv = Gv.MaxEventTypeLength
      , Xv = Gv.MaxPayloadLength;
    function Yv(t, n) {
        switch (t) {
        case "getSession":
        case "init":
        case "observe":
        case "restart":
        case "setConfig":
        case "setIdentity":
        case "shutdown":
        case "source":
        case "start":
        case "getFullstoryId":
        case "trackEvent":
            return {
                operation: t,
                option: n
            };
        case "setPage":
            return {
                operation: t,
                option: {
                    properties: e = (i = n).properties || i
                }
            };
        case "stat":
            return {
                operation: t,
                option: {
                    event_type: (i = n).eventType || i.event_type,
                    properties: i.payload || i.properties
                }
            };
        case "log":
            var i = n;
            return bi.arrayIsArray(n) && (i = {
                level: n[0],
                msg: n[1]
            }),
            {
                operation: t,
                option: i
            };
        case "setVars":
        case "setProperties":
            var r = yv.SetProperties;
            return i = n,
            bi.arrayIsArray(n) && (i = {
                type: n[0],
                properties: e = n[1]
            }),
            {
                operation: r,
                option: i
            };
        case "event":
            return i = n,
            n && "object" == typeof n && "n"in n && (i = {
                name: n.n,
                properties: n.p
            }),
            {
                operation: r = yv.TrackEvent,
                option: i
            };
        case "user":
            var e = n;
            return {
                operation: r = yv.SetProperties,
                option: {
                    type: "user",
                    properties: e
                }
            };
        case "consent":
            var s = n;
            return {
                operation: r = yv.SetIdentity,
                option: {
                    consent: s
                }
            };
        case "rec":
            return n ? {
                operation: yv.Restart
            } : {
                operation: r = yv.Shutdown
            };
        default:
            "Unrecognized api: ".concat(t)
        }
    }
    var Jv = "must be an object";
    function Zv(t) {
        return !!t && "object" == typeof t
    }
    function tl(t, n) {
        return n in t
    }
    function nl(t) {
        var n, r = {
            recoverable: [],
            unrecoverable: []
        };
        if (!Zv(t))
            return r.unrecoverable.push(il("options", Jv)),
            [r, void 0];
        var e = {};
        if (tl(t, "privacy")) {
            var s = function(t) {
                var n = "privacy.attributeBlocklist"
                  , i = [];
                if (!Zv(t))
                    return i.push(il("privacy", Jv)),
                    [i, void 0];
                if (!tl(t, "attributeBlocklist"))
                    return [i, void 0];
                if (!Bi(t.attributeBlocklist))
                    return i.push(il(n, "must be an array")),
                    [i, void 0];
                for (var r = {
                    attributeBlocklist: []
                }, e = 0, s = t.attributeBlocklist; e < s.length; e++) {
                    var u = s[e];
                    rl(u) ? r.attributeBlocklist.push(u) : i.push(il(n, "invalid rule: ".concat(ro(u))))
                }
                return [i, r]
            }(t.privacy)
              , u = s[0]
              , o = s[1];
            (n = r.recoverable).push.apply(n, u),
            e.privacy = o
        }
        if (tl(t, "env")) {
            var a = t.env;
            Zv(a) ? e.env = i({}, a) : r.recoverable.push(il("env", Jv))
        }
        return [r, e]
    }
    function il(t, n) {
        return "Init Api - invalid ".concat(t, " config, ").concat(n)
    }
    function rl(t) {
        //CHANGE
        return false; // delete if needed
        /*var n;
        if (!t || "object" != typeof t)
            return !1;
        var i = t;
        return el(i.target, ["any", "exclude", "mask"]) && el(i.tag) && el(i.action, ["erase", "maskText", "scrubUrl", "scrubCss"]) && el(null !== (n = i.type) && void 0 !== n ? n : "static", ["static", "prefix"])*/
    }
    function el(t, n) {
        return void 0 === n && (n = []),
        "string" == typeof t && (0 === n.length || -1 !== n.indexOf(t))
    }
    function sl(t, n) {
        return n ? i(i(i({}, t), n), {
            privacy: ul(t.privacy, n.privacy),
            env: i(i({}, t.env), n.env)
        }) : t
    }
    function ul(t, n) {
        var i, r;
        return n ? {
            attributeBlocklist: s(s([], null !== (i = null == t ? void 0 : t.attributeBlocklist) && void 0 !== i ? i : [], !0), null !== (r = null == n ? void 0 : n.attributeBlocklist) && void 0 !== r ? r : [], !0)
        } : t
    }
    function ol(t, n) {
        return t("function" == typeof n ? n() : n)
    }
    function al(t, n, i, r) {
        return void 0 === r && (r = Ht.DefaultRecDisabledMessage),
        {
            commit: function(n) {
                if (t)
                    return ol(Ti(t), null != n ? n : i)
            },
            discard: function(t) {
                if (n)
                    return cl(Ti(n), null != t ? t : r)
            }
        }
    }
    function cl(t, n) {
        if (void 0 === n && (n = Ht.DefaultRecDisabledMessage),
        t) {
            var i = n;
            try {
                i = new Error(n)
            } catch (t) {}
            ol(Ti(t), i)
        }
    }
    function hl(t, n, i) {
        void 0 === n && (n = !1);
        for (var r = 0, e = t.commit; r < e.length; r++) {
            var s = e[r];
            n ? s.discard(i) : s.commit()
        }
        for (var u = 0, o = t.discard; u < o.length; u++)
            (s = o[u]).discard(i);
        t.commit = [],
        t.discard = []
    }
    var fl = [yv.GetSession, yv.Init, yv.Observe, yv.SetProperties, yv.Source, yv.TrackEvent]
      , vl = [yv.Observe];
    function ll(t, n) {
        try {
            var i = t[1]
              , r = t[3]
              , e = void 0 === r ? Ci : r
              , s = i
              , u = s.type
              , o = s.callback;
            e(n.registerListener(u, o))
        } catch (t) {}
    }
    function dl(t, n, i, r, e) {
        void 0 === e && (e = []),
        e.push.apply(e, ri(t, n));
        for (var s = 0, u = e; s < u.length; s++) {
            var o = u[s]
              , a = o[0]
              , c = o[4];
            -1 !== vl.indexOf(a) ? a === yv.Observe && ll(o, i) : cl(c)
        }
        r.addEvent({
            type: Nf.SHUTDOWN,
            data: {
                reason: it.SettingsBlocked
            }
        })
    }
    var pl = function(t) {
        function i(n) {
            void 0 === n && (n = 250);
            var i = t.call(this) || this;
            return i.Yh = bi.mathMax(0, n),
            i
        }
        return n(i, t),
        i.prototype.Hn = function() {
            var t = this;
            (function(t) {
                return r(this, void 0, ae, function() {
                    var n;
                    return e(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return (n = bi.requestWindowIdleCallback) ? [2, new ae(function(i) {
                                n(window, i, {
                                    timeout: t
                                })
                            }
                            )] : [4, he(t)];
                        case 1:
                            return i.sent(),
                            [2, Se(42)]
                        }
                    })
                })
            }
            )(this.Yh).then(function(n) {
                n.didTimeout ? ye().then(function() {
                    return t.Dn(Se(36))
                }) : t.Dn(n)
            })
        }
        ,
        i
    }(jo)
      , wl = function(t) {
        function i(n) {
            var i = t.call(this) || this;
            return i.Ki = n,
            i
        }
        return n(i, t),
        i.prototype.Hn = function() {
            var t = this;
            be().then(function() {
                ke(t.Ki).then(function() {
                    return t.Dn(Se(36))
                })
            })
        }
        ,
        i
    }(jo)
      , gl = function() {
        function t() {}
        return t.prototype.createTopRecorder = function(t) {
            var n;
            return n = t.options.useMockProtocol ? new Kf(t.options.isWayfinder) : t.options.useSocket && Nv.isSupported() ? new Nv(t) : new ou(t),
            new hv(t,n)
        }
        ,
        t.prototype.createInnerRecorder = function(t) {
            return new lv(t)
        }
        ,
        t
    }()
      , ml = function() {
        function t(t, n, i) {
            void 0 === t && (t = window),
            void 0 === n && (n = function(t) {
                var n, i, r = gn(t);
                try {
                    return null !== (i = null === (n = function(t) {
                        var n, i = t.document;
                        return null !== (n = i.currentScript) && void 0 !== n ? n : i._fs_currentScript
                    }(t)) || void 0 === n ? void 0 : n.getAttribute(en)) && void 0 !== i ? i : r
                } catch (t) {
                    return r
                }
            }(t)),
            void 0 === i && (i = new gl),
            this.Ki = t,
            this.Jh = n,
            this.Zh = i,
            this.tf = null,
            this.nf = !1,
            this["if"] = !1,
            this.rf = new jv,
            this.ef = $t.Shutdown,
            this.sf = {
                commit: [],
                discard: []
            },
            this.uf = new Bv,
            this.af = new Dv(this.uf)
        }
        return t.prototype.init = function() {
            var t;
            (function(t, n) {
                try {
                    return dn in (t[n] || {})
                } catch (t) {
                    return !1
                }
            }
            )(this.Ki, this.Jh) || (this.Ki,
            function(t, n) {
                n in t || (t[n] = {});
                try {
                    t[n][dn] = !0
                } catch (t) {}
            }(this.Ki, this.Jh),
            ds(),
            t = function(t, n) {
                try {
                    if (zn(t))
                        return i(i({}, n), {
                            status: gi.Clean
                        });
                    if (!t.document || n.status !== gi.Unknown)
                        return n;
                    var r = function(t, n) {
                        var r = n.functions
                          , e = new Set
                          , s = {}
                          , u = i({}, n.helpers);
                        if (u.functionToString = function(t, n) {
                            var i, r, e = null === (i = t["__core-js_shared__"]) || void 0 === i ? void 0 : i.inspectSource;
                            if (e) {
                                var s = function() {
                                    return e(this)
                                };
                                if (ci(s, 2))
                                    return s
                            }
                            var u = null === (r = t["__core-js_shared__"]) || void 0 === r ? void 0 : r["native-function-to-string"];
                            if (ci(u))
                                return u;
                            var o = n[vi];
                            return ci(o) ? o : ci(n) ? n : void 0
                        }(t, u.functionToString),
                        !u.functionToString)
                            return n;
                        var o = !1;
                        for (var a in r)
                            r[a] ? (s[a] = di(u.functionToString, r[a]),
                            s[a] || (s[a] = wi(u.functionToString, u, a)),
                            s[a] ? s[a] !== r[a] && (o = !0) : (o = !0,
                            e.add(a))) : s[a] = void 0;
                        return {
                            status: e.size > 0 ? gi.Mixed : gi.Clean,
                            functions: o ? s : r,
                            helpers: u,
                            errors: [],
                            dirty: e
                        }
                    }(t, n);
                    if (r.status === gi.Clean)
                        return r;
                    var e = function(t) {
                        var n = t.document.createElement("iframe");
                        return n.id = "FullStory-iframe",
                        n.className = "fs-hide",
                        n.style.display = "none",
                        n
                    }(t);
                    try {
                        (function(t) {
                            var n = t.document
                              , i = n.documentElement
                              , r = n.body || n.head || i || n;
                            return function(t) {
                                return !!Tn(t, "_fs_windex_iframe", "boolean")
                            }(t) ? r : i || r
                        }
                        )(t).appendChild(e)
                    } catch (t) {
                        return i(i({}, n), {
                            status: gi.Clean
                        })
                    }
                    if (!e.contentWindow)
                        return i(i({}, n), {
                            status: gi.Clean
                        });
                    var s = Si(e.contentWindow, gi.Clean);
                    s.dirty = r.dirty;
                    var u = Li(e);
                    return Ov && u && (e.contentWindow.close(),
                    u.removeChild(e)),
                    s.status === gi.UnrecoverableFailure ? i(i({}, n), {
                        status: gi.Clean
                    }) : s
                } catch (t) {
                    return Tu.send("windex#createClean", {
                        err: t
                    }),
                    i(i({}, n), {
                        status: gi.Clean
                    })
                }
            }(this.Ki, bi.snapshot),
            bi.rebuildFromSnapshot(t),
            this.cf(),
            this.hf(),
            this.Ki,
            this.af.addEvent({
                type: Nf.INTERNAL_FS_INIT,
                data: {}
            }))
        }
        ,
        t.prototype.ff = function(t) {
            var n, r, e, s;
            this.za = function(t, n) {
                var i = n;
                try {
                    t.filter(function(t) {
                        return t[0] === yv.Init
                    }).forEach(function(t) {
                        t[0];
                        var n = t[1];
                        if (n) {
                            var r = nl(n)
                              , e = r[0]
                              , s = r[1];
                            0 === e.unrecoverable.length && s && (i = sl(null != i ? i : {}, s))
                        }
                    })
                } catch (t) {}
                return i
            }(t, this.za),
            this.tf = function(t, n, r) {
                var e, s = null !== (e = null == r ? void 0 : r.env) && void 0 !== e ? e : {}, u = function(t, n) {
                    var r, e = t.host || Hv;
                    return i(i({}, t), {
                        appHost: t.appHost || oi(e) || Hv,
                        captureOnStartup: null === (r = t.captureOnStartup) || void 0 === r || r,
                        namespace: n,
                        recHost: t.recHost || Sn(e) || Hv,
                        recSettingsHost: t.recSettingsHost || kn(e) || Hv,
                        scheme: t.scheme || Wv,
                        script: t.script || ai(e) || Hv
                    })
                }(s.isolated ? s : i(i({}, function(t, n) {
                    return {
                        appHost: Kn(t) || Hv,
                        assetMapId: Pn(t),
                        beacon: $n(t),
                        captureOnStartup: Mn(t),
                        cleanValueGetter: ti(t),
                        clientStore: Qn(t),
                        cookieDomain: On(t),
                        disableResume: Jn(t),
                        forceLocalResources: qn(t),
                        isOuterScript: Un(t),
                        isWayfinder: Yn(t),
                        multiStorage: Xn(t),
                        namespace: n,
                        networkBudget: ni(t),
                        orgId: jn(t) || Hv,
                        pageStart: Dn(t),
                        preHooks: ii(t),
                        ready: Nn(t),
                        recHost: Rn(t) || Hv,
                        recSettingsHost: xn(t) || Hv,
                        replayFlags: Fn(t),
                        request: Vn(t),
                        runInIframe: Ln(t),
                        scheme: Wv,
                        script: Cn(t) || Hv,
                        settings: Gn(t),
                        skipIframeInjection: Zn(t),
                        snippetVersion: si(t, n),
                        transport: Bn(t),
                        useMockProtocol: Wn(t),
                        useSocket: Hn(t)
                    }
                }(t, n)), s), n);
                return u.orgId && -1 === u.orgId.indexOf("FULLSTORY_KEY") && u.script && u.recHost && u.recSettingsHost && u.appHost ? ("localhost:8080" === u.recHost && (u.scheme = "http:"),
                "\n    captureOnStartup: ".concat(u.captureOnStartup, "\n    cdn host: ").concat(u.recSettingsHost, "\n    disableResume: ").concat(u.disableResume, "\n    orgId: ").concat(u.orgId, "\n    recording host: ").concat(u.recHost, "\n    script: ").concat(u.script, "\n  "),
                u) : null
            }(this.Ki, this.Jh, this.za),
            this.tf && (this.vf = (n = this.tf,
            r = this.Ki,
            s = n.transport,
            n.isOuterScript ? e = !1 : r !== top ? e = !0 : s ? n.orgId && s.init && s.init(n.orgId) && (e = !0) : e = !1,
            e),
            this["if"] = function(t, n) {
                var i, r = mn(t, n);
                return null !== (i = null == r ? void 0 : r._native) && void 0 !== i && i
            }(this.Ki, this.Jh),
            this.vf)
        }
        ,
        t.prototype.getCurrentSessionURL = function(t) {
            return this.lf(t ? "url.now" : "url")
        }
        ,
        t.prototype.getCurrentSession = function() {
            return this.lf("id")
        }
        ,
        t.prototype.getFullstoryId = function(t) {
            return Ss(t)
        }
        ,
        t.prototype.lf = function(t) {
            return this.df ? $v(this.df, t) : null
        }
        ,
        t.prototype.enableConsole = function() {
            this._api(yv.SetConfig, {
                console: !0
            })
        }
        ,
        t.prototype.disableConsole = function() {
            this._api(yv.SetConfig, {
                console: !1
            })
        }
        ,
        t.prototype.restart = function() {
            this._api(yv.Restart)
        }
        ,
        t.prototype.shutdown = function() {
            this._api(yv.Shutdown)
        }
        ,
        t.prototype.log = function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            this._api(yv.Log, t)
        }
        ,
        t.prototype.pf = function(t) {
            void 0 === t && (t = it.Api),
            this.ef = $t.Shutdown,
            this.df && !this.wf && (this.df.shutdown(t),
            this.df = null,
            this.vf || this.rf.unloadCrossPageVars(t),
            this.af.addEvent({
                type: Nf.SHUTDOWN,
                data: {
                    reason: t
                }
            }))
        }
        ,
        t.prototype.gf = function(t) {
            if (void 0 === t && (t = !1),
            this.ef !== $t.Fatal) {
                if (this.wf)
                    return this.wf(),
                    void (this.wf = null);
                if (this.df) {
                    if (!t)
                        return;
                    this.pf(it.FsShutdownFrame)
                }
                this.mf(!0)
            }
        }
        ,
        t.prototype.Vu = function(t, n) {
            var i;
            return r(this, void 0, ae, function() {
                return e(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return n && null == this.fh ? [2] : this.ef === $t.Starting ? (this.yf = [t, n],
                        [2]) : (this.pf(t),
                        [4, he(0)]);
                    case 1:
                        return r.sent(),
                        [4, he(0)];
                    case 2:
                        return r.sent(),
                        n && this.fh && bl(this.fh),
                        t === it.Hibernation && (null === (i = this.tf) || void 0 === i ? void 0 : i.disableResume) || this.gf(),
                        [2]
                    }
                })
            })
        }
        ,
        t.prototype._api = function(t, n, i, r, e, s) {
            if (this.ef !== $t.Fatal) {
                var u, o = "start" === t || "restart" === t, a = [t, n, i, r || function(t) {
                    u = t
                }
                , e, s];
                if (!e || this.ef !== $t.Shutdown || o)
                    return !this.df || this.yf ? (ei(this.Ki, a, this.Jh),
                    void (o && this.gf())) : (this.bf(a),
                    u);
                cl(e, this.tf ? Ht.ShutdownMessage : Ht.DefaultRecDisabledMessage)
            } else
                cl(e)
        }
        ,
        t.prototype.bf = function(t) {
            var n;
            if (this.df) {
                var i = null !== (n = this.Sf(this.df, [t])) && void 0 !== n ? n : {
                    reidentified: !1,
                    applyApi: function() {}
                }
                  , r = i.applyApi
                  , e = i.sideEffects
                  , s = i.initConfig
                  , u = i.observingStart
                  , o = i.recordingShouldBeEnabled
                  , a = i.reidentified
                  , c = i.nextAppId;
                yl(this.fh, a, c),
                a ? (ei(this.Ki, t, this.Jh),
                this.Vu(it.Reidentify, !0)) : this.kf(this.df, {
                    applyApi: r,
                    sideEffects: e,
                    initConfig: s,
                    observingStart: u,
                    recordingShouldBeEnabled: o
                }),
                void 0 !== o && (o ? this.gf() : this.pf(it.Api))
            }
        }
        ,
        t.prototype.Sf = function(t, n) {
            var i;
            return function(t, n) {
                for (var i, r, e, s, u, o, a, c, h, f, v, l = n.appHashKey, d = n.inFrame, p = n.initConfig, w = n.inWebView, g = n.recorder, m = n.recordingObserver, y = n.state, b = n.vars, S = function(t) {
                    for (var n = [], i = 0, r = t; i < r.length; i++) {
                        var e = r[i]
                          , s = e[0]
                          , u = e[1]
                          , o = e[2]
                          , a = e[3]
                          , c = e[4]
                          , h = e[5]
                          , f = Yv(s, u);
                        f && (f.source = "string" == typeof o ? {
                            integration: o
                        } : o,
                        f.resolve = a,
                        f.reject = c,
                        f.apiVersion = 2 === h ? 2 : 1,
                        n.push(f))
                    }
                    return n
                }(t), k = [], _ = !1, A = !1, I = [], E = [], T = function(t) {
                    if (b) {
                        var n = function(t, n) {
                            switch (n) {
                            case "":
                                return "";
                            case void 0:
                                return t;
                            default:
                                return zh(n)
                            }
                        }(l, f)
                          , i = b.api(t, n)
                          , r = i.events
                          , e = i.reidentify
                          , s = i.appId;
                        e && (k = [],
                        _ = !0,
                        E.push.apply(E, I),
                        I = []),
                        void 0 !== s && (f = s),
                        k.push.apply(k, r)
                    }
                }, C = function(t, n) {
                    !1 !== o || -1 !== vl.indexOf(t.operation) ? I.push(al(t.resolve, t.reject, n)) : E.push(al(t.resolve, t.reject, n))
                }, x = function(t, n) {
                    E.push(al(t.resolve, t.reject, void 0, n))
                }, R = function(t) {
                    try {
                        if ("Processing api: ".concat(t.operation),
                        d && !function(t, n) {
                            if (-1 === fl.indexOf(t.operation))
                                return !1;
                            if (t.operation === yv.SetProperties)
                                switch (t.option.type) {
                                case mt.Document:
                                    return !0;
                                case mt.User:
                                    return n && !function(t) {
                                        try {
                                            var n = t.option.properties;
                                            if (zi(n) && ("uid"in n))
                                                return !0
                                        } catch (t) {}
                                        return !1
                                    }(t);
                                case mt.Page:
                                    return n;
                                default:
                                    return !0
                                }
                            return !0
                        }(t, w)) {
                            var n = "FS.".concat(t.operation, "() is not available in an inner frame");
                            return A || (A = !0),
                            x(t, n),
                            "continue"
                        }
                        switch (t.operation) {
                        case yv.Restart:
                        case yv.Start:
                            o = !0,
                            C(t);
                            break;
                        case yv.Shutdown:
                            C(t),
                            o = !1;
                            break;
                        case yv.Log:
                            var f = t.option
                              , l = f.level
                              , b = (n = f.msg,
                            g.console().logEvent(null != l ? l : "log", n ? [n] : [], "fs"));
                            b && k.push(b),
                            C(t);
                            break;
                        case yv.SetIdentity:
                            var S = function(n) {
                                T({
                                    operation: yv.SetProperties,
                                    option: n,
                                    source: t.source,
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    apiVersion: t.apiVersion
                                })
                            };
                            t.option && "object" == typeof t.option ? (Object.prototype.hasOwnProperty.call(t.option, "consent") && (h = null !== (i = t.option.consent) && void 0 !== i && i),
                            Object.prototype.hasOwnProperty.call(t.option, "uid") && S({
                                type: "user",
                                properties: {
                                    uid: t.option.uid
                                }
                            }),
                            Object.prototype.hasOwnProperty.call(t.option, "properties") && S({
                                type: "user",
                                properties: null !== (r = t.option.properties) && void 0 !== r ? r : {},
                                schema: null !== (e = t.option.schema) && void 0 !== e ? e : {}
                            }),
                            (null === (s = t.option) || void 0 === s ? void 0 : s.anonymous) && S({
                                type: "user",
                                properties: {
                                    uid: !1
                                }
                            })) : S({
                                type: "user",
                                properties: {
                                    uid: t.option
                                }
                            }),
                            C(t);
                            break;
                        case yv.TrackEvent:
                        case yv.SetPage:
                        case yv.SetProperties:
                            T(t),
                            C(t);
                            break;
                        case yv.GetSession:
                            C(t, function() {
                                var n;
                                return $v(g, null === (n = t.option) || void 0 === n ? void 0 : n.format)
                            });
                            break;
                        case yv.SetConfig:
                            var _ = t.option.console;
                            a = _,
                            C(t);
                            break;
                        case yv.Stat:
                            var I = t.option
                              , E = I.event_type
                              , R = I.properties;
                            k.push(function(t, n) {
                                var i = "string" == typeof t ? t.trim().slice(0, Qv) : "";
                                return {
                                    Kind: O.STATS,
                                    Args: [i, $s(ro(n, Xv))]
                                }
                            }(E, R)),
                            C(t);
                            break;
                        case yv.Observe:
                            var K = t.option
                              , j = K.type
                              , M = K.callback;
                            j === Nf.START && (c = !0),
                            C(t, null == m ? void 0 : m.registerListener(j, M));
                            break;
                        case yv.Source:
                            var P = rv({
                                source: t.option.source,
                                type: "default",
                                entrypoint: "source"
                            });
                            k.push(P),
                            C(t);
                            break;
                        case yv.Init:
                            if (y !== $t.Shutdown) {
                                x(t, n = "Capture already started - init rejected.");
                                break
                            }
                            var N = nl(t.option)
                              , L = N[0]
                              , U = N[1];
                            if (L.unrecoverable.length > 0 || !U) {
                                n = "Init config rejected: ".concat(L.unrecoverable.join(",\n")),
                                x(t, n);
                                break
                            }
                            L.recoverable.length > 0 && (n = "Init config partially rejected: ".concat(L.recoverable.join(",\n"))),
                            v = sl(null !== (u = null != v ? v : p) && void 0 !== u ? u : {}, U),
                            C(t);
                            break;
                        case yv.GetFullstoryId:
                            var F = t.option;
                            C(t, function() {
                                return Ss(F)
                            });
                            break;
                        default:
                            _e(0, "invalid operation")
                        }
                    } catch (i) {
                        n = "unknown error evaluating API",
                        Tu.send(n, {
                            err: i,
                            op: t.operation
                        }),
                        "".concat(n, " ").concat(i),
                        x(t, n)
                    }
                }, K = 0, j = S; K < j.length; K++)
                    R(j[K]);
                return {
                    applyApi: function() {
                        for (var t = g.queue(), n = 0, i = k; n < i.length; n++) {
                            var r = i[n];
                            t.enqueue(r)
                        }
                        void 0 !== h && g.setConsent(h),
                        void 0 !== v && g.setInitConfig(v),
                        "boolean" == typeof a && (a ? g.console().start({
                            ConsoleWatcher: !0
                        }) : g.console().stop())
                    },
                    initConfig: v,
                    recordingShouldBeEnabled: o,
                    reidentified: _,
                    nextAppId: f,
                    observingStart: c,
                    sideEffects: {
                        commit: I,
                        discard: E
                    }
                }
            }(n, {
                appHashKey: null === (i = this.fh) || void 0 === i ? void 0 : i.getAppKeyHash(),
                inFrame: this.vf,
                inWebView: this["if"],
                initConfig: this.za,
                recorder: t,
                recordingObserver: this.uf,
                state: this.ef,
                vars: this.rf
            })
        }
        ,
        t.prototype.kf = function(t, n) {
            var i, r, e = n.applyApi, s = n.sideEffects, u = n.initConfig, o = n.observingStart, a = n.recordingShouldBeEnabled;
            e();
            var c = !1 === a
              , h = t.getIsSessionReady();
            if (c)
                hl(s, !1, Ht.ShutdownMessage);
            else if (h) {
                hl(s);
                var f = t.getCurrentSessionURL();
                if (o && f) {
                    var v = t.orgSettings();
                    this.af.addEvent({
                        type: Nf.START,
                        data: {
                            sessionUrl: f,
                            settings: v
                        },
                        once: !0
                    })
                }
            } else
                (i = this.sf.commit).push.apply(i, s.commit),
                (r = this.sf.discard).push.apply(r, s.discard);
            void 0 !== u && (this.za = u)
        }
        ,
        t.prototype._cookies = function() {
            return this.fh ? this.fh.getCookies() : null
        }
        ,
        t.prototype._setCookie = function(t, n) {
            this.fh && this.fh.setCookie(t, n)
        }
        ,
        t.prototype._withEventQueue = function(t, n) {
            if (this.df) {
                var i = this.df.queue()
                  , r = this.df.pageSignature();
                null != i && null != r && (t === r ? n(i) : ro({
                    msg: "Error in _withEventQueue: Page Signature mismatch",
                    pageSignature: r,
                    callerSignature: t
                }, 1024))
            }
        }
        ,
        t.prototype._withRecorder = function(t, n) {
            if (this.df) {
                var i = this.df.pageSignature();
                null !== i && (void 0 === t || t === i ? n(this.df) : ro({
                    msg: "Error in _withRecorder: Page Signature mismatch",
                    pageSignature: i,
                    callerSignature: t
                }, 1024))
            }
        }
        ,
        t.prototype.cf = function() {
            var t = mn(this.Ki, this.Jh);
            if (t)
                for (var n = 0, i = ["disableConsole", "enableConsole", "getCurrentSession", "getCurrentSessionURL", "getFullstoryId", "log", "restart", "shutdown", "_api", "_withEventQueue", "_withRecorder", "_cookies", "_setCookie"]; n < i.length; n++) {
                    var r = i[n];
                    t[r] = ir(this[r], this, nr)
                }
        }
        ,
        t.prototype.hf = function() {
            var t = this;
            if ("script version ".concat(uu.Ver, " (compiled at ").concat(uu.TS, ")"),
            !qv(this.Ki))
                return this.ef = $t.Fatal,
                void dl(this.Ki, this.Jh, this.uf, this.af);
            this.mf(!1),
            this._f(),
            this.Ki.addEventListener("message", Tu.wrap(function(n) {
                return t.Af(n)
            }, "wnd#messageListener"))
        }
        ,
        t.prototype.Ef = function() {
            var t, n = this;
            (null === (t = this.tf) || void 0 === t ? void 0 : t.orgId) && (this.fh = new Sv(this.tf,this.Ki,function(t) {
                for (var i, r = 0, e = t; r < e.length; r++) {
                    var s = e[r];
                    null === (i = n.df) || void 0 === i || i.queue().enqueue({
                        Kind: O.STORAGE_WRITE_FAILURE,
                        Args: s
                    })
                }
            }
            ,this.vf))
        }
        ,
        t.prototype.Af = function(t) {
            if (Gi(t.data)) {
                var n = this.tf;
                if (n && (t.source === this.Ki.parent || t.source === this.Ki)) {
                    var i = yf({
                        options: n
                    }, t.data);
                    switch (i[0]) {
                    case Zt.ShutdownFrame:
                        this.pf(it.FsShutdownFrame);
                        break;
                    case Zt.RestartFrame:
                        this.gf(i[1])
                    }
                }
            }
        }
        ,
        t.prototype.Tf = function(t, n) {
            var r, e = this, s = bi.mathRound(null !== (r = Ti(function() {
                var t;
                return null === (t = window.performance) || void 0 === t ? void 0 : t.now()
            })()) && void 0 !== r ? r : -1);
            return {
                window: this.Ki,
                time: new ao,
                measurer: new wl(this.Ki),
                taskQueue: new pl(2e3),
                options: i({}, this.tf),
                recording: {
                    bundleApiVersion: function() {
                        var n, i;
                        return null !== (i = null === (n = t()) || void 0 === n ? void 0 : n.getBundleApiVersion()) && void 0 !== i ? i : "v1"
                    },
                    bundleUploadInterval: function() {
                        var n, i;
                        return null !== (i = null === (n = t()) || void 0 === n ? void 0 : n.bundleUploadInterval()) && void 0 !== i ? i : Ht.DefaultBundleUploadInterval
                    },
                    heartbeatInterval: function() {
                        var n, i;
                        return null !== (i = null === (n = t()) || void 0 === n ? void 0 : n.heartbeatInterval()) && void 0 !== i ? i : Ht.HeartbeatInterval
                    },
                    flags: function() {
                        var n, i;
                        return (null === (i = null === (n = t()) || void 0 === n ? void 0 : n.getPageResponse()) || void 0 === i ? void 0 : i.Flags) || {}
                    },
                    getCurrentSessionURL: function(n) {
                        var i, r;
                        return null !== (r = null === (i = t()) || void 0 === i ? void 0 : i.getCurrentSessionURL(n)) && void 0 !== r ? r : null
                    },
                    identity: this.fh,
                    inFrame: n,
                    inWebView: this["if"],
                    observer: this.af,
                    pageResponse: function() {
                        var n;
                        return null === (n = t()) || void 0 === n ? void 0 : n.getPageResponse()
                    },
                    pageSignature: function() {
                        var n, i;
                        return null !== (i = null === (n = t()) || void 0 === n ? void 0 : n.pageSignature()) && void 0 !== i ? i : null
                    },
                    preroll: s,
                    splitPage: function(t) {
                        return e.Vu(t, !1)
                    },
                    vars: this.rf
                },
                queue: function() {
                    var n;
                    return null === (n = t()) || void 0 === n ? void 0 : n.queue()
                }
            }
        }
        ,
        t.prototype.Cf = function(t, n) {
            if (n) {
                for (var i = 0, r = this.rf.getDocumentVars(); i < r.length; i++) {
                    var e = r[i];
                    t.enqueue(e)
                }
                var s = this.rf.getCrossPageVars();
                void 0 !== s && t.enqueue(s)
            }
        }
        ,
        t.prototype.qa = function(t, n) {
            var i = this;
            return function(r) {
                var e = r.sessionUrl
                  , s = r.settings;
                i.ef = $t.Started,
                n && t.tellAllFramesTo([Zt.RestartFrame]),
                i.yf && (i.Vu(i.yf[0], i.yf[1]),
                i.yf = null),
                i.af.addEvent({
                    type: Nf.START,
                    data: {
                        sessionUrl: e,
                        settings: s
                    }
                }),
                hl(i.sf)
            }
        }
        ,
        t.prototype.Va = function() {
            var t = this;
            return function() {
                t.ef = $t.Fatal,
                t.af.addEvent({
                    type: Nf.SHUTDOWN,
                    data: {
                        reason: it.SettingsBlocked
                    }
                }),
                hl(t.sf, !0)
            }
        }
        ,
        t.prototype.xf = function(t, n, i) {
            void 0 === i && (i = !1),
            this.ef = $t.Starting,
            t.start(i, this.qa(t, n), this.Va())
        }
        ,
        t.prototype.mf = function(t) {
            var n = [];
            if (n.push.apply(n, ri(this.Ki, this.Jh)),
            this.ff(n),
            this.tf) {
                var i;
                this.Ef();
                var r = this.vf
                  , e = this.Tf(function() {
                    return i
                }, !!r);
                i = r ? this.Zh.createInnerRecorder(e) : this.Zh.createTopRecorder(e),
                this.Rf(e, i, n, t),
                this.df = i
            } else
                dl(this.Ki, this.Jh, this.uf, this.af, n)
        }
        ,
        t.prototype.Rf = function(t, n, i, r) {
            var e, s, u, o = this;
            void 0 === r && (r = !1);
            var a, c = !1, h = t.options.assetMapId;
            h && i.unshift([cn.Vars, [mt.Document, {
                assetMapId: h
            }]]),
            this.vf || (this.Cf(n.queue(), r),
            n.queue().enqueue({
                Kind: O.REC_FEAT_SUPPORTED,
                Args: [vt.CaptureOnStartupEnabled, !1 === (null === (e = this.tf) || void 0 === e ? void 0 : e.captureOnStartup)]
            }));
            var f = null !== (s = this.Sf(n, i)) && void 0 !== s ? s : {
                applyApi: function() {}
            }
              , v = f.applyApi
              , l = f.sideEffects
              , d = f.initConfig
              , p = f.recordingShouldBeEnabled
              , w = f.reidentified
              , g = f.nextAppId
              , m = f.observingStart;
            this.vf ? (c = !1,
            a = !1) : (void 0 !== p ? c = !p : !1 === (null === (u = this.tf) || void 0 === u ? void 0 : u.captureOnStartup) && (c = !0),
            this.tf && (this.tf.captureOnStartup = !0),
            a = !!w),
            yl(this.fh, a, g),
            this.kf(n, {
                applyApi: v,
                sideEffects: l,
                initConfig: d,
                observingStart: m,
                recordingShouldBeEnabled: p
            }),
            c ? this.wf = function() {
                return o.xf(n, r, a)
            }
            : this.xf(n, r, a)
        }
        ,
        t.prototype._f = function() {
            var t = this
              , n = function() {
                t.nf || (t.nf = !0,
                t.df && t.df.onDomLoad())
            }
              , i = !1
              , r = function() {
                i || (i = !0,
                t.df && t.df.onLoad())
            };
            switch (document.readyState) {
            case "interactive":
                n();
                break;
            case "complete":
                n(),
                r()
            }
            this.nf || document.addEventListener("DOMContentLoaded", Tu.wrap(n, "doc#domLoadedListener")),
            i || this.Ki.addEventListener("load", Tu.wrap(function(t) {
                n(),
                r()
            }, "wnd#loadListener"))
        }
        ,
        t
    }();
    function yl(t, n, i) {
        t && (n ? bl(t, i) : "" === i ? t.clearAppId() : void 0 !== i && t.setAppId(i))
    }
    function bl(t, n) {
        t.clear(),
        n && t.setAppId(n)
    }
    !function() {
        try {
            new ml().init()
        } catch (t) {
            Tu.send("Conductor#init", {
                err: t
            }),
            "Failed to initialize FullStory. ".concat(t)
        }
    }()
}();
