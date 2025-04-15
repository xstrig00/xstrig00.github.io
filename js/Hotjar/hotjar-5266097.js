window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 5266097,
    "rec_value": 1.0,
    "state_change_listen_mode": "automatic",
    "record": true,
    "continuous_capture_enabled": true,
    "recording_capture_keystrokes": true,
    "session_capture_console_consent": true,
    "anonymize_digits": true,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_all_on_specific_pages": [],
    "suppress_text": false,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": "",
    "privacy_policy_url": "",
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "heatmaps": [],
    "polls": [],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "abtasty": {
            "tag_recordings": false
        },
        "kissmetrics": {
            "send_user_id": false
        },
        "mixpanel": {
            "send_events": false
        },
        "unbounce": {
            "tag_recordings": false
        },
        "hubspot": {
            "enabled": false,
            "send_recordings": false,
            "send_surveys": false
        }
    },
    "features": ["ask.popover_redesign", "client_script.compression.pc", "csq_theme", "error_reporting", "feedback.embeddable_widget", "feedback.widgetV2", "settings.billing_v2", "survey.embeddable_widget", "survey.image_question", "survey.screenshots", "survey.type_button", "tcvs_v2"],
    "tracking_code_verified": true,
    "cs_project_id": null,
    "account_id": 3814370,
    "account_signature": "a950e3059f73956e77f6e4d755eca15b86264912035fe9469f90595fd6048a4d"
};

!function() {
    "use strict";
    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        e(t)
    }
    function t(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, r(i.key), i)
        }
    }
    function r(t) {
        var r = function(t, r) {
            if ("object" != e(t) || !t)
                return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != e(i))
                    return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == e(r) ? r : String(r)
    }
    var n, i = function() {
        function e(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.send = t,
            this.batchSize = r,
            this.flushInterval = n,
            this.buffer = [],
            this.flushTimer = null
        }
        var r, n;
        return r = e,
        (n = [{
            key: "getBuffer",
            value: function() {
                return this.buffer
            }
        }, {
            key: "add",
            value: function(e) {
                var t = this;
                this.buffer.push(e),
                this.buffer.length >= this.batchSize ? this.flush() : this.flushTimer || (this.flushTimer = setTimeout((function() {
                    t.flush()
                }
                ), this.flushInterval))
            }
        }, {
            key: "flush",
            value: function() {
                this.buffer.length > 0 && (this.send(this.buffer),
                this.buffer = []),
                this.flushTimer && (clearTimeout(this.flushTimer),
                this.flushTimer = null)
            }
        }]) && t(r.prototype, n),
        Object.defineProperty(r, "prototype", {
            writable: !1
        }),
        e
    }();
    function a() {
        return a = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ,
        a.apply(this, arguments)
    }
    var o, s = function() {
        try {
            return "performance"in window && "now"in window.performance
        } catch (e) {
            return !1
        }
    }, c = {
        version: 6,
        metricsUrl: (null === (n = window._hjSettings) || void 0 === n ? void 0 : n.metricsUrl) || "https://metrics.hotjar.io",
        sampling: {
            metrics: .1,
            fieldMetrics: .01,
            debug: .5,
            universalDebug: .05 * .1
        },
        browser: {
            hasPerformance: !1,
            shouldLogMetrics: !1,
            inLab: !1
        },
        buffer: {
            bufferSize: 40,
            flushInterval: 3e3
        }
    }, u = {
        isDebugEnabled: !1,
        isMetricsEnabled: !1,
        isFieldMetricsEnabled: !1,
        loggedMetrics: {},
        genericTags: {}
    }, l = function(e, t, r) {
        var n;
        u.loggedMetrics[e] = a(a({}, u.loggedMetrics[e]), {}, ((n = {})[t] = r || {},
        n))
    }, d = function(e) {
        if (!e)
            return "value";
        var t = Object.keys(e)[0];
        return t && e[t] || "value"
    }, g = function(e) {
        var t, r = null !== (t = e.tag) && void 0 !== t ? t : void 0;
        return u.isDebugEnabled ? a(a(a({}, r), e.extraTags), u.genericTags) : r
    }, h = function(e, t) {
        if (!o)
            return !1;
        var r = u.isMetricsEnabled || u.isDebugEnabled;
        return "lab" === e && (r = c.browser.inLab),
        "field" === e && (r = u.isFieldMetricsEnabled),
        t ? r && t.flush : r
    }, f = function(e) {
        var t = !1
          , r = "v=".concat(c.version)
          , n = "".concat(c.metricsUrl, "?").concat(r, "&site_id=").concat(window.hjSiteSettings.site_id) + (u.isDebugEnabled ? "&debug=true" : "")
          , i = JSON.stringify(e);
        if ("sendBeacon"in navigator)
            try {
                t = navigator.sendBeacon.bind(navigator)(n, i)
            } catch (e) {}
        if (!1 === t)
            try {
                var a = new XMLHttpRequest;
                a.open("POST", n),
                a.timeout = 1e4,
                a.send(i)
            } catch (e) {}
        c.browser.shouldLogMetrics && console.debug("New Metrics: ", e)
    }, p = {
        getConfig: function(e) {
            return c[e]
        },
        getState: function(e) {
            return u[e]
        },
        start: function() {
            try {
                c.browser = {
                    hasPerformance: s(),
                    shouldLogMetrics: /hjMetrics=1/.test(location.search),
                    inLab: /hjLab=true/.test(location.search)
                };
                var e = p.time()
                  , t = window.hjSiteSettings || {}
                  , r = t.features
                  , n = t.site_id
                  , a = new Set(r)
                  , l = c.sampling;
                return u.genericTags = {
                    site_id: n
                },
                u.isDebugEnabled = Math.random() <= l.universalDebug || a.has("client_script.metrics.debug") && Math.random() <= l.debug,
                u.isMetricsEnabled = Math.random() <= l.metrics,
                u.isFieldMetricsEnabled = u.isMetricsEnabled && Math.random() <= l.fieldMetrics,
                o = new i(f,c.buffer.bufferSize,c.buffer.flushInterval),
                e
            } catch (e) {
                console.debug("Error in metrics.start", {
                    error: e
                })
            }
        },
        reset: function() {
            u.loggedMetrics = {}
        },
        stop: function() {
            u.isDebugEnabled = !1,
            u.isMetricsEnabled = !1,
            u.genericTags = {}
        },
        count: function(e, t) {
            var r = t.incr
              , n = t.tag
              , i = t.extraTags
              , s = t.type;
            try {
                var c, l = d(n), f = u.loggedMetrics[e], p = 0;
                if (r ? (p = (f && f[l] || 0) + (r.value || 1),
                u.loggedMetrics[e] = a(a({}, f), {}, ((c = {})[l] = null != r && r.flush ? 0 : p,
                c))) : p = 1,
                h(s, r)) {
                    var m = {
                        name: e,
                        type: "count",
                        value: p,
                        tags: g({
                            tag: n,
                            extraTags: i
                        })
                    };
                    o.add(m)
                }
            } catch (e) {}
        },
        distr: function(e, t) {
            var r = t.task
              , n = t.value
              , i = t.extraTags;
            h() && o.add({
                name: e,
                type: "distribution",
                value: n,
                tags: g({
                    tag: {
                        task: r
                    },
                    extraTags: i
                })
            })
        },
        time: function() {
            try {
                if (!c.browser.hasPerformance)
                    return;
                return performance.now()
            } catch (e) {}
        },
        timeEnd: function(e, t) {
            var r = t.tag
              , n = t.start
              , i = t.total
              , a = t.extraTags
              , s = t.type;
            try {
                var c = p.time();
                if (!i && !c)
                    return;
                var u = d(r)
                  , f = i || (n && c ? c - n : void 0);
                if (l(e, u, {}),
                f && f > 0 && h(s)) {
                    var m = {
                        name: e,
                        type: "distribution",
                        value: Math.round(f),
                        tags: g({
                            tag: r,
                            extraTags: a
                        })
                    };
                    o.add(m)
                }
                return c
            } catch (t) {
                console.debug("Failed to send timer metric: ", {
                    name: e,
                    tag: r,
                    error: t
                })
            }
        },
        timeIncr: function(e, t) {
            var r, n, i, a, o = t.tag, s = t.start, c = t.flush, g = t.extraTags, h = t.type, f = hj.metrics.time(), m = s && f ? f - s : void 0, v = (r = e,
            {
                tagName: n = d(o),
                start: (a = (i = u.loggedMetrics[r]) && i[n] || {}).start,
                total: a.total
            }), w = m ? m + (v.total || 0) : v.total;
            return l(e, v.tagName, {
                total: w
            }),
            c && p.timeEnd(e, {
                tag: o,
                total: w,
                extraTags: g,
                type: h
            }),
            w
        },
        timeWatcher: function() {
            var e, t = 0, r = !1, n = function() {
                var r, n = p.time();
                return t += null !== (r = e && n && n - e) && void 0 !== r ? r : 0,
                e = p.time(),
                t
            };
            return {
                start: function() {
                    if (!r)
                        return r = !0,
                        e = p.time()
                },
                incr: n,
                end: function() {
                    var r = n();
                    return t = 0,
                    e = void 0,
                    r
                }
            }
        },
        getErrorMessage: function(e) {
            return e instanceof Error ? e.message : "string" == typeof e ? e : ""
        }
    };
    function m() {
        return m = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ,
        m.apply(this, arguments)
    }
    var v = "https://voc.hotjar.com"
      , w = [v, "https://voc.ew1-integration-1.hotjarians.net", "https://hj-engage-unmoderated-review.s3.eu-west-1.amazonaws.com"]
      , b = "hj-uut"
      , y = {
        get: function() {
            var e = window.sessionStorage.getItem(b);
            return e ? JSON.parse(e) : null
        },
        getValue: function(e) {
            var t = y.get();
            return null == t ? void 0 : t[e]
        },
        set: function(e) {
            if (e) {
                var t, r = null !== (t = y.get()) && void 0 !== t ? t : {};
                window.sessionStorage.setItem(b, JSON.stringify(m(m({}, r), e)))
            }
        },
        clear: function() {
            window.sessionStorage.removeItem(b)
        },
        validDomains: w
    }
      , j = function(e) {
        var t = new URLSearchParams(e);
        return !!t.has("project_uuid") || ("1" === t.get("is_preview") ? t.has("task_uuid") : t.has("response_uuid") && t.has("task_uuid") && t.has("participation_uuid"))
    };
    function _(e, t, r) {
        if (t && !Array.isArray(t) && "number" == typeof t.length) {
            var n = t.length;
            return T(t, void 0 !== r && r < n ? r : n)
        }
        return e(t, r)
    }
    function S(e) {
        return function(e) {
            if (Array.isArray(e))
                return T(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return T(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? T(e, t) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    var R = function(e) {
        return e.replayRecordingMaskedUrlRegex = "replayRecordingMaskedUrlRegex",
        e.replayRecordingMaskedUrlRegexRules = "replayRecordingMaskedUrlRegexRules",
        e
    }(R || {})
      , E = function(e) {
        return e.START = "start",
        e.NOT_START = "not-start",
        e.END = "end",
        e.NOT_END = "not-end",
        e.CONTAIN = "contain",
        e.NOT_CONTAIN = "not-contain",
        e.EXACT = "exact",
        e.NOT_EXACT = "not-exact",
        e
    }(E || {});
    var M, O;
    window.hj = window.hj || function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        (window.hj.q = window.hj.q || []).push(t)
    }
    ,
    window.hj.metrics = p;
    var I, x, C, N, A, k, U, P, L, B, D, F, z, V, H, q, Y = hj.metrics.start(), X = !(!window.CS_CONF || null === (M = window.CS_CONF.voc) || void 0 === M || !M.enabled), J = !(window.CS_CONF || !(null !== (O = window.hjSiteSettings.features) && void 0 !== O && O.includes("cs_lite") || window._hjSettings.csid));
    if (window.hjLazyModules = window.hjLazyModules || {
        SURVEY_V2: {
            js: "survey-v2.564fc75de30f477edfbb.js"
        },
        SURVEY_BOOTSTRAPPER: {
            js: "survey-bootstrapper.31d6cfe0d16ae931b73c.js"
        },
        SURVEY_ISOLATED: {
            js: "survey-isolated.31d6cfe0d16ae931b73c.js"
        },
        HEATMAP_RETAKER: {
            js: "heatmap-retaker.f79c0c7bb13d8a14bddc.js"
        },
        SURVEY_INVITATION: {
            js: "survey-invitation.36b3fcf704acb8c2ff71.js"
        },
        NOTIFICATION: {
            js: "notification.ed2bca043f1d9f8c6b56.js"
        },
        SENTRY: {
            js: "sentry.58c81e3e25532810f6fd.js"
        },
        BROWSER_PERF: {
            js: "browser-perf.8417c6bba72228fa2e29.js"
        },
        USER_TEST: {
            js: "user-test.7151fb0d0bad6fc8c4b4.js"
        }
    },
    X)
        window._uxa.push(["start:hotjar", window.hjSiteSettings]),
        window.hj.scriptLoaded = !0;
    else if (J) {
        var W = (k = (I = window.hjSiteSettings).suppress_all || I.suppress_text || (null === (x = I.suppress_all_on_specific_pages) || void 0 === x ? void 0 : x.length),
        U = function(e) {
            var t, r, n, i, a, o = {
                anonymisationMethod: null,
                replayRecordingMaskedUrlRegex: null,
                replayRecordingMaskedUrlRegexRules: null
            };
            if ((e.suppress_all || e.suppress_text) && (o.anonymisationMethod = R.replayRecordingMaskedUrlRegex,
            o.replayRecordingMaskedUrlRegex = ".*"),
            null !== (t = e.suppress_all_on_specific_pages) && void 0 !== t && t.length) {
                o.anonymisationMethod = R.replayRecordingMaskedUrlRegexRules;
                var s = (r = e.suppress_all_on_specific_pages,
                n = {
                    contains: E.CONTAIN,
                    regex: E.CONTAIN,
                    simple: E.CONTAIN,
                    ends_with: E.END,
                    exact: E.EXACT,
                    starts_with: E.START
                },
                i = [],
                a = Object.keys(n),
                r.forEach((function(e) {
                    if (e.pattern && a.includes(e.match_operation)) {
                        var t = {
                            operator: n[e.match_operation],
                            value: e.pattern,
                            ignoreQueryParams: "simple" === e.match_operation,
                            ignoreURIFragments: "simple" === e.match_operation,
                            ignoreCaseSensitivity: "simple" === e.match_operation,
                            notOperator: e.negate
                        };
                        i.push(t)
                    }
                }
                )),
                i.length ? i : void 0);
                o.replayRecordingMaskedUrlRegexRules = s || null
            }
            return o
        }(I),
        P = U.anonymisationMethod,
        L = U.replayRecordingMaskedUrlRegex,
        B = U.replayRecordingMaskedUrlRegexRules,
        D = !(null === (C = _hjSettings) || void 0 === C || !C.environment || "live" === _hjSettings.environment),
        {
            CS_CONF_BASE: {
                projectId: I.cs_project_id,
                smbConfig: {
                    siteId: I.site_id,
                    record: !!hjSiteSettings.record,
                    useCSTC: !0,
                    useSentry: !0,
                    csLiteDomain: D ? "insights-integration.live.eks.hotjar.com" : "insights.hotjar.com"
                },
                hostnames: [window.location.hostname],
                voc: null !== (N = I.polls) && void 0 !== N && N.length || (V = null !== (z = function() {
                    var e = document.referrer;
                    if ("string" == typeof e && function(e) {
                        if ("string" != typeof e)
                            return !1;
                        try {
                            var t = new URL(e)
                              , r = "1" === t.searchParams.get("is_preview");
                            return !!w.some((function(t) {
                                return null == e ? void 0 : e.includes(t)
                            }
                            )) || !!r && t.hostname.endsWith(".hotjar.com") && t.pathname.includes("research/projects/tests")
                        } catch (e) {
                            return !1
                        }
                    }(e) && j(new URL(e).search))
                        return e
                }()) && void 0 !== z ? z : function() {
                    var e = new URLSearchParams(window.location.search).get("hj_uut");
                    if (w.some((function(e) {
                        var t;
                        return null === (t = document.referrer) || void 0 === t ? void 0 : t.includes(e)
                    }
                    )) && e) {
                        var t = window.atob(e);
                        if (j(t)) {
                            var r = new URL(v);
                            return r.search = t,
                            r.toString()
                        }
                    }
                }(),
                H = void 0 !== V,
                q = null !== y.get(),
                H && y.set({
                    referrer: V
                }),
                q || H) ? {
                    enabled: 1,
                    siteId: I.site_id
                } : {
                    enabled: 0
                },
                whitelistedAttributes: [],
                anonymizeDigits: !!k || I.anonymize_digits,
                implementations: (A = I,
                _(S, (F = A.state_change_listen_mode,
                "manual" === F ? [] : [{
                    template: {
                        name: "ArtificialPageview",
                        args: {}
                    },
                    triggers: [{
                        name: "HistoryChange",
                        args: {
                            listeners: "popstate, pushState, replaceState" + ("automatic_with_fragments" === F ? ", hashchange" : ""),
                            useDebounce: "no",
                            window: 400
                        }
                    }]
                }]))),
                recordTargetingRules: _(S, I.record_targeting_rules),
                anonymisationMethod: P,
                replayRecordingMaskedUrlRegex: L,
                replayRecordingMaskedUrlRegexRules: B
            },
            PII_SELECTORS: I.suppress_all ? ["picture, img, video, audio"] : null
        })
          , K = W.CS_CONF_BASE
          , Q = W.PII_SELECTORS;
        window.CS_CONF_BASE = K,
        window._uxa = window._uxa || [],
        Q && window._uxa.push(["setPIISelectors", {
            PIISelectors: Q
        }]);
        var $ = window._hjSettings.environment
          , G = "t.contentsquare.net";
        $ && "live" !== $ && (window._hjSettings.csid && (window.CS_CONF_BASE.projectId = window._hjSettings.csid),
        G = "t-staging.contentsquare.net");
        var Z = document.createElement("script");
        Z.type = "text/javascript",
        Z.async = !0,
        Z.src = "//".concat(G, "/uxa/smb/tag.js")//,
        //CHANGE
        //document.getElementsByTagName("head")[0].appendChild(Z)
    } else
        window.hjBootstrap = window.hjBootstrap || function(e, t, r) {
            var n, i = new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot|facebook","i"), a = (null === (n = window.navigator) || void 0 === n ? void 0 : n.userAgent) || "unknown";
            if (i.test(a))
                return hj.metrics.count("session-rejection", {
                    tag: {
                        reason: "bot"
                    }
                }),
                void console.warn("Hotjar not launching due to suspicious userAgent:", a);
            var o = "http:" === window.location.protocol
              , s = Boolean(window._hjSettings.preview);
            if (o && !s)
                return hj.metrics.count("session-rejection", {
                    tag: {
                        reason: "https"
                    }
                }),
                void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");
            var c = function(e, t, r) {
                window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(r),
                window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
            };
            c(0, 0, r);
            var u = window.document
              , l = u.head || u.getElementsByTagName("head")[0];
            hj.scriptDomain = e;
            var d = u.createElement("script");
            d.async = 1,
            d.src = hj.scriptDomain + t,
            d.charset = "utf-8",
            //CHANGE
            //l.appendChild(d),
            c.revision = "471de9c",
            window.hjBootstrap = c
        }
        ,
        window.hjBootstrap("https://script.hotjar.com/", "modules.f98993dba31a932bc912.js", "5266097"),
        hj.metrics.timeEnd("resource-blocking-time", {
            tag: {
                resource: "hotjar-js"
            },
            start: Y,
            type: "lab"
        })
}();
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "e4f710c4-2545-5ce0-a67f-728bab98f3a8")
    } catch (e) {}
}();
//# debugId=e4f710c4-2545-5ce0-a67f-728bab98f3a8
