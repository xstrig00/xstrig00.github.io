!function() {
    "use strict";
    var e, t = "undefined" != typeof window ? window : void 0, i = "undefined" != typeof globalThis ? globalThis : t, n = Array.prototype, r = n.forEach, s = n.indexOf, o = null == i ? void 0 : i.navigator, a = null == i ? void 0 : i.document, l = null == i ? void 0 : i.location, u = null == i ? void 0 : i.fetch, c = null != i && i.XMLHttpRequest && "withCredentials"in new i.XMLHttpRequest ? i.XMLHttpRequest : void 0, d = null == i ? void 0 : i.AbortController, h = null == o ? void 0 : o.userAgent, _ = null != t ? t : {}, p = {
        DEBUG: !1,
        LIB_VERSION: "1.205.0"
    }, v = "$copy_autocapture", g = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"];
    function f(e, t) {
        return -1 !== e.indexOf(t)
    }
    !function(e) {
        e.GZipJS = "gzip-js",
        e.Base64 = "base64"
    }(e || (e = {}));
    var m = function(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
      , b = function(e) {
        return e.replace(/^\$/, "")
    };
    var y = Array.isArray
      , w = Object.prototype
      , S = w.hasOwnProperty
      , E = w.toString
      , k = y || function(e) {
        return "[object Array]" === E.call(e)
    }
      , x = e => "function" == typeof e
      , I = e => e === Object(e) && !k(e)
      , C = e => {
        if (I(e)) {
            for (var t in e)
                if (S.call(e, t))
                    return !1;
            return !0
        }
        return !1
    }
      , P = e => void 0 === e
      , F = e => "[object String]" == E.call(e)
      , R = e => F(e) && 0 === e.trim().length
      , T = e => null === e
      , $ = e => P(e) || T(e)
      , O = e => "[object Number]" == E.call(e)
      , M = e => "[object Boolean]" === E.call(e)
      , L = e => e instanceof FormData
      , A = e => f(g, e)
      , D = e => {
        var i = {
            _log: function(i) {
                if (t && (p.DEBUG || _.POSTHOG_DEBUG) && !P(t.console) && t.console) {
                    for (var n = ("__rrweb_original__"in t.console[i] ? t.console[i].__rrweb_original__ : t.console[i]), r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                        s[o - 1] = arguments[o];
                    n(e, ...s)
                }
            },
            info: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                i._log("log", ...t)
            },
            warn: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                i._log("warn", ...t)
            },
            error: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                i._log("error", ...t)
            },
            critical: function() {
                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                    i[n] = arguments[n];
                console.error(e, ...i)
            },
            uninitializedWarning: e => {
                i.error("You must initialize PostHog before calling ".concat(e))
            }
            ,
            createLogger: t => D("".concat(e, " ").concat(t))
        };
        return i
    }
      , N = D("[PostHog.js]")
      , q = N.createLogger
      , B = q("[ExternalScriptsLoader]")
      , H = (e, t, i) => {
        if (e.config.disable_external_dependency_loading)
            return B.warn("".concat(t, " was requested but loading of external scripts is disabled.")),
            i("Loading of external scripts is disabled");
        var n = () => {
            if (!a)
                return i("document not found");
            var n = a.createElement("script");
            if (n.type = "text/javascript",
            n.crossOrigin = "anonymous",
            n.src = t,
            n.onload = e => i(void 0, e),
            n.onerror = e => i(e),
            e.config.prepare_external_dependency_script && (n = e.config.prepare_external_dependency_script(n)),
            !n)
                return i("prepare_external_dependency_script returned null");
            var r, s = a.querySelectorAll("body > script");
            s.length > 0 ? null === (r = s[0].parentNode) || void 0 === r || r.insertBefore(n, s[0]) : a.body.appendChild(n)
        }
        ;
        null != a && a.body ? n() : null == a || a.addEventListener("DOMContentLoaded", n)
    }
    ;
    function U(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            i.push.apply(i, n)
        }
        return i
    }
    function z(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? U(Object(i), !0).forEach((function(t) {
                j(e, t, i[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : U(Object(i)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }
            ))
        }
        return e
    }
    function j(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    function W(e, t) {
        if (null == e)
            return {};
        var i, n, r = function(e, t) {
            if (null == e)
                return {};
            var i, n, r = {}, s = Object.keys(e);
            for (n = 0; n < s.length; n++)
                i = s[n],
                t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (n = 0; n < s.length; n++)
                i = s[n],
                t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
        }
        return r
    }
    _.__PosthogExtensions__ = _.__PosthogExtensions__ || {},
    _.__PosthogExtensions__.loadExternalDependency = (e, t, i) => {
        var n = "/static/".concat(t, ".js") + "?v=".concat(e.version);
        if ("remote-config" === t && (n = "/array/".concat(e.config.token, "/config.js")),
        "toolbar" === t) {
            var r = 3e5
              , s = Math.floor(Date.now() / r) * r;
            n = "".concat(n, "&t=").concat(s)
        }
        var o = e.requestRouter.endpointFor("assets", n);
        H(e, o, i)
    }
    ,
    _.__PosthogExtensions__.loadSiteApp = (e, t, i) => {
        var n = e.requestRouter.endpointFor("api", t);
        H(e, n, i)
    }
    ;
    var V = {};
    function G(e, t, i) {
        if (k(e))
            if (r && e.forEach === r)
                e.forEach(t, i);
            else if ("length"in e && e.length === +e.length)
                for (var n = 0, s = e.length; n < s; n++)
                    if (n in e && t.call(i, e[n], n) === V)
                        return
    }
    function J(e, t, i) {
        if (!$(e)) {
            if (k(e))
                return G(e, t, i);
            if (L(e)) {
                for (var n of e.entries())
                    if (t.call(i, n[1], n[0]) === V)
                        return
            } else
                for (var r in e)
                    if (S.call(e, r) && t.call(i, e[r], r) === V)
                        return
        }
    }
    var Y = function(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
            i[n - 1] = arguments[n];
        return G(i, (function(t) {
            for (var i in t)
                void 0 !== t[i] && (e[i] = t[i])
        }
        )),
        e
    };
    function K(e) {
        for (var t = Object.keys(e), i = t.length, n = new Array(i); i--; )
            n[i] = [t[i], e[t[i]]];
        return n
    }
    var X = function(e) {
        try {
            return e()
        } catch (e) {
            return
        }
    }
      , Q = function(e) {
        return function() {
            try {
                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                    i[n] = arguments[n];
                return e.apply(this, i)
            } catch (e) {
                N.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),
                N.critical(e)
            }
        }
    }
      , Z = function(e) {
        var t = {};
        return J(e, (function(e, i) {
            F(e) && e.length > 0 && (t[i] = e)
        }
        )),
        t
    };
    function ee(e, t) {
        return i = e,
        n = e => F(e) && !T(t) ? e.slice(0, t) : e,
        r = new Set,
        function e(t, i) {
            return t !== Object(t) ? n ? n(t, i) : t : r.has(t) ? void 0 : (r.add(t),
            k(t) ? (s = [],
            G(t, (t => {
                s.push(e(t))
            }
            ))) : (s = {},
            J(t, ( (t, i) => {
                r.has(t) || (s[i] = e(t, i))
            }
            ))),
            s);
            var s
        }(i);
        var i, n, r
    }
    var te = function() {
        function e(t) {
            return t && (t.preventDefault = e.preventDefault,
            t.stopPropagation = e.stopPropagation),
            t
        }
        return e.preventDefault = function() {
            this.returnValue = !1
        }
        ,
        e.stopPropagation = function() {
            this.cancelBubble = !0
        }
        ,
        function(i, n, r, s, o) {
            if (i)
                if (i.addEventListener && !s)
                    i.addEventListener(n, r, !!o);
                else {
                    var a = "on" + n
                      , l = i[a];
                    i[a] = function(i, n, r) {
                        return function(s) {
                            if (s = s || e(null == t ? void 0 : t.event)) {
                                var o, a = !0;
                                x(r) && (o = r(s));
                                var l = n.call(i, s);
                                return !1 !== o && !1 !== l || (a = !1),
                                a
                            }
                        }
                    }(i, r, l)
                }
            else
                N.error("No valid element provided to register_event")
        }
    }();
    function ie(e, t) {
        for (var i = 0; i < e.length; i++)
            if (t(e[i]))
                return e[i]
    }
    var ne = "$people_distinct_id"
      , re = "__alias"
      , se = "__timers"
      , oe = "$autocapture_disabled_server_side"
      , ae = "$heatmaps_enabled_server_side"
      , le = "$exception_capture_enabled_server_side"
      , ue = "$web_vitals_enabled_server_side"
      , ce = "$dead_clicks_enabled_server_side"
      , de = "$web_vitals_allowed_metrics"
      , he = "$session_recording_enabled_server_side"
      , _e = "$console_log_recording_enabled_server_side"
      , pe = "$session_recording_network_payload_capture"
      , ve = "$session_recording_canvas_recording"
      , ge = "$replay_sample_rate"
      , fe = "$replay_minimum_duration"
      , me = "$replay_script_config"
      , be = "$sesid"
      , ye = "$session_is_sampled"
      , we = "$session_recording_url_trigger_activated_session"
      , Se = "$session_recording_event_trigger_activated_session"
      , Ee = "$enabled_feature_flags"
      , ke = "$early_access_features"
      , xe = "$stored_person_properties"
      , Ie = "$stored_group_properties"
      , Ce = "$surveys"
      , Pe = "$surveys_activated"
      , Fe = "$flag_call_reported"
      , Re = "$user_state"
      , Te = "$client_session_props"
      , $e = "$capture_rate_limit"
      , Oe = "$initial_campaign_params"
      , Me = "$initial_referrer_info"
      , Le = "$initial_person_info"
      , Ae = "$epp"
      , De = "__POSTHOG_TOOLBAR__"
      , Ne = "$posthog_cklsh"
      , qe = [ne, re, "__cmpns", se, he, ae, be, Ee, Re, ke, Ie, xe, Ce, Fe, Te, $e, Oe, Me, Ae]
      , Be = q("[FeatureFlags]")
      , He = "$active_feature_flags"
      , Ue = "$override_feature_flags"
      , ze = "$feature_flag_payloads"
      , je = e => {
        var t = {};
        for (var [i,n] of K(e || {}))
            n && (t[i] = n);
        return t
    }
    ;
    class We {
        constructor(e) {
            j(this, "_override_warning", !1),
            j(this, "_hasLoadedFlags", !1),
            j(this, "_requestInFlight", !1),
            j(this, "_reloadingDisabled", !1),
            j(this, "_additionalReloadRequested", !1),
            j(this, "_decideCalled", !1),
            j(this, "_flagsLoadedFromRemote", !1),
            this.instance = e,
            this.featureFlagEventHandlers = []
        }
        decide() {
            if (this.instance.config.__preview_remote_config)
                this._decideCalled = !0;
            else {
                var e = !this._reloadDebouncer && (this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load);
                this._callDecideEndpoint({
                    disableFlags: e
                })
            }
        }
        get hasLoadedFlags() {
            return this._hasLoadedFlags
        }
        getFlags() {
            return Object.keys(this.getFlagVariants())
        }
        getFlagVariants() {
            var e = this.instance.get_property(Ee)
              , t = this.instance.get_property(Ue);
            if (!t)
                return e || {};
            for (var i = Y({}, e), n = Object.keys(t), r = 0; r < n.length; r++)
                i[n[r]] = t[n[r]];
            return this._override_warning || (Be.warn(" Overriding feature flags!", {
                enabledFlags: e,
                overriddenFlags: t,
                finalFlags: i
            }),
            this._override_warning = !0),
            i
        }
        getFlagPayloads() {
            return this.instance.get_property(ze) || {}
        }
        reloadFeatureFlags() {
            this._reloadingDisabled || this.instance.config.advanced_disable_feature_flags || this._reloadDebouncer || (this._reloadDebouncer = setTimeout(( () => {
                this._callDecideEndpoint()
            }
            ), 5))
        }
        clearDebouncer() {
            clearTimeout(this._reloadDebouncer),
            this._reloadDebouncer = void 0
        }
        ensureFlagsLoaded() {
            this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
        }
        setAnonymousDistinctId(e) {
            this.$anon_distinct_id = e
        }
        setReloadingPaused(e) {
            this._reloadingDisabled = e
        }
        _callDecideEndpoint(t) {
            if (this.clearDebouncer(),
            !this.instance.config.advanced_disable_decide)
                if (this._requestInFlight)
                    this._additionalReloadRequested = !0;
                else {
                    var i = {
                        token: this.instance.config.token,
                        distinct_id: this.instance.get_distinct_id(),
                        groups: this.instance.getGroups(),
                        $anon_distinct_id: this.$anon_distinct_id,
                        person_properties: this.instance.get_property(xe),
                        group_properties: this.instance.get_property(Ie)
                    };
                    (null != t && t.disableFlags || this.instance.config.advanced_disable_feature_flags) && (i.disable_flags = !0),
                    this._requestInFlight = !0,
                    this.instance._send_request({
                        method: "POST",
                        url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                        data: i,
                        compression: this.instance.config.disable_compression ? void 0 : e.Base64,
                        timeout: this.instance.config.feature_flag_request_timeout_ms,
                        callback: e => {
                            var t, n, r = !0;
                            (200 === e.statusCode && (this.$anon_distinct_id = void 0,
                            r = !1),
                            this._requestInFlight = !1,
                            this._decideCalled) || (this._decideCalled = !0,
                            this.instance._onRemoteConfig(null !== (n = e.json) && void 0 !== n ? n : {}));
                            i.disable_flags || (this._flagsLoadedFromRemote = !r,
                            this.receivedFeatureFlags(null !== (t = e.json) && void 0 !== t ? t : {}, r),
                            this._additionalReloadRequested && (this._additionalReloadRequested = !1,
                            this._callDecideEndpoint()))
                        }
                    })
                }
        }
        getFeatureFlag(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
                var i, n, r, s, o, a = this.getFlagVariants()[e], l = "".concat(a), u = this.instance.get_property(Fe) || {};
                if (t.send_event || !("send_event"in t))
                    if (!(e in u) || !u[e].includes(l))
                        k(u[e]) ? u[e].push(l) : u[e] = [l],
                        null === (i = this.instance.persistence) || void 0 === i || i.register({
                            [Fe]: u
                        }),
                        this.instance.capture("$feature_flag_called", {
                            $feature_flag: e,
                            $feature_flag_response: a,
                            $feature_flag_payload: this.getFeatureFlagPayload(e) || null,
                            $feature_flag_bootstrapped_response: (null === (n = this.instance.config.bootstrap) || void 0 === n || null === (r = n.featureFlags) || void 0 === r ? void 0 : r[e]) || null,
                            $feature_flag_bootstrapped_payload: (null === (s = this.instance.config.bootstrap) || void 0 === s || null === (o = s.featureFlagPayloads) || void 0 === o ? void 0 : o[e]) || null,
                            $used_bootstrap_value: !this._flagsLoadedFromRemote
                        });
                return a
            }
            Be.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.")
        }
        getFeatureFlagPayload(e) {
            return this.getFlagPayloads()[e]
        }
        isFeatureEnabled(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)
                return !!this.getFeatureFlag(e, t);
            Be.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.")
        }
        addFeatureFlagsHandler(e) {
            this.featureFlagEventHandlers.push(e)
        }
        removeFeatureFlagsHandler(e) {
            this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((t => t !== e))
        }
        receivedFeatureFlags(e, t) {
            if (this.instance.persistence) {
                this._hasLoadedFlags = !0;
                var i = this.getFlagVariants()
                  , n = this.getFlagPayloads();
                !function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                      , r = e.featureFlags
                      , s = e.featureFlagPayloads;
                    if (r)
                        if (k(r)) {
                            var o = {};
                            if (r)
                                for (var a = 0; a < r.length; a++)
                                    o[r[a]] = !0;
                            t && t.register({
                                [He]: r,
                                [Ee]: o
                            })
                        } else {
                            var l = r
                              , u = s;
                            e.errorsWhileComputingFlags && (l = z(z({}, i), l),
                            u = z(z({}, n), u)),
                            t && t.register({
                                [He]: Object.keys(je(l)),
                                [Ee]: l || {},
                                [ze]: u || {}
                            })
                        }
                }(e, this.instance.persistence, i, n),
                this._fireFeatureFlagsCallbacks(t)
            }
        }
        override(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.instance.__loaded || !this.instance.persistence)
                return Be.uninitializedWarning("posthog.feature_flags.override");
            if (this._override_warning = t,
            !1 === e)
                this.instance.persistence.unregister(Ue);
            else if (k(e)) {
                for (var i = {}, n = 0; n < e.length; n++)
                    i[e[n]] = !0;
                this.instance.persistence.register({
                    [Ue]: i
                })
            } else
                this.instance.persistence.register({
                    [Ue]: e
                })
        }
        onFeatureFlags(e) {
            if (this.addFeatureFlagsHandler(e),
            this._hasLoadedFlags) {
                var {flags: t, flagVariants: i} = this._prepareFeatureFlagsForCallbacks();
                e(t, i)
            }
            return () => this.removeFeatureFlagsHandler(e)
        }
        updateEarlyAccessFeatureEnrollment(e, t) {
            var i, n = (this.instance.get_property(ke) || []).find((t => t.flagKey === e)), r = {
                ["$feature_enrollment/".concat(e)]: t
            }, s = {
                $feature_flag: e,
                $feature_enrollment: t,
                $set: r
            };
            n && (s.$early_access_feature_name = n.name),
            this.instance.capture("$feature_enrollment_update", s),
            this.setPersonPropertiesForFlags(r, !1);
            var o = z(z({}, this.getFlagVariants()), {}, {
                [e]: t
            });
            null === (i = this.instance.persistence) || void 0 === i || i.register({
                [He]: Object.keys(je(o)),
                [Ee]: o
            }),
            this._fireFeatureFlagsCallbacks()
        }
        getEarlyAccessFeatures(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , i = this.instance.get_property(ke);
            if (i && !t)
                return e(i);
            this.instance._send_request({
                url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
                method: "GET",
                callback: t => {
                    var i;
                    if (t.json) {
                        var n = t.json.earlyAccessFeatures;
                        return null === (i = this.instance.persistence) || void 0 === i || i.register({
                            [ke]: n
                        }),
                        e(n)
                    }
                }
            })
        }
        _prepareFeatureFlagsForCallbacks() {
            var e = this.getFlags()
              , t = this.getFlagVariants();
            return {
                flags: e.filter((e => t[e])),
                flagVariants: Object.keys(t).filter((e => t[e])).reduce(( (e, i) => (e[i] = t[i],
                e)), {})
            }
        }
        _fireFeatureFlagsCallbacks(e) {
            var {flags: t, flagVariants: i} = this._prepareFeatureFlagsForCallbacks();
            this.featureFlagEventHandlers.forEach((n => n(t, i, {
                errorsLoading: e
            })))
        }
        setPersonPropertiesForFlags(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , i = this.instance.get_property(xe) || {};
            this.instance.register({
                [xe]: z(z({}, i), e)
            }),
            t && this.instance.reloadFeatureFlags()
        }
        resetPersonPropertiesForFlags() {
            this.instance.unregister(xe)
        }
        setGroupPropertiesForFlags(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , i = this.instance.get_property(Ie) || {};
            0 !== Object.keys(i).length && Object.keys(i).forEach((t => {
                i[t] = z(z({}, i[t]), e[t]),
                delete e[t]
            }
            )),
            this.instance.register({
                [Ie]: z(z({}, i), e)
            }),
            t && this.instance.reloadFeatureFlags()
        }
        resetGroupPropertiesForFlags(e) {
            if (e) {
                var t = this.instance.get_property(Ie) || {};
                this.instance.register({
                    [Ie]: z(z({}, t), {}, {
                        [e]: {}
                    })
                })
            } else
                this.instance.unregister(Ie)
        }
    }
    Math.trunc || (Math.trunc = function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    ),
    Number.isInteger || (Number.isInteger = function(e) {
        return O(e) && isFinite(e) && Math.floor(e) === e
    }
    );
    var Ve = "0123456789abcdef";
    class Ge {
        constructor(e) {
            if (this.bytes = e,
            16 !== e.length)
                throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(e, t, i, n) {
            if (!Number.isInteger(e) || !Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(n) || e < 0 || t < 0 || i < 0 || n < 0 || e > 0xffffffffffff || t > 4095 || i > 1073741823 || n > 4294967295)
                throw new RangeError("invalid field value");
            var r = new Uint8Array(16);
            return r[0] = e / Math.pow(2, 40),
            r[1] = e / Math.pow(2, 32),
            r[2] = e / Math.pow(2, 24),
            r[3] = e / Math.pow(2, 16),
            r[4] = e / Math.pow(2, 8),
            r[5] = e,
            r[6] = 112 | t >>> 8,
            r[7] = t,
            r[8] = 128 | i >>> 24,
            r[9] = i >>> 16,
            r[10] = i >>> 8,
            r[11] = i,
            r[12] = n >>> 24,
            r[13] = n >>> 16,
            r[14] = n >>> 8,
            r[15] = n,
            new Ge(r)
        }
        toString() {
            for (var e = "", t = 0; t < this.bytes.length; t++)
                e = e + Ve.charAt(this.bytes[t] >>> 4) + Ve.charAt(15 & this.bytes[t]),
                3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
            if (36 !== e.length)
                throw new Error("Invalid UUIDv7 was generated");
            return e
        }
        clone() {
            return new Ge(this.bytes.slice(0))
        }
        equals(e) {
            return 0 === this.compareTo(e)
        }
        compareTo(e) {
            for (var t = 0; t < 16; t++) {
                var i = this.bytes[t] - e.bytes[t];
                if (0 !== i)
                    return Math.sign(i)
            }
            return 0
        }
    }
    class Je {
        constructor() {
            j(this, "timestamp", 0),
            j(this, "counter", 0),
            j(this, "random", new Xe)
        }
        generate() {
            var e = this.generateOrAbort();
            if (P(e)) {
                this.timestamp = 0;
                var t = this.generateOrAbort();
                if (P(t))
                    throw new Error("Could not generate UUID after timestamp reset");
                return t
            }
            return e
        }
        generateOrAbort() {
            var e = Date.now();
            if (e > this.timestamp)
                this.timestamp = e,
                this.resetCounter();
            else {
                if (!(e + 1e4 > this.timestamp))
                    return;
                this.counter++,
                this.counter > 4398046511103 && (this.timestamp++,
                this.resetCounter())
            }
            return Ge.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32())
        }
        resetCounter() {
            this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
        }
    }
    var Ye, Ke = e => {
        if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
            throw new Error("no cryptographically strong RNG available");
        for (var t = 0; t < e.length; t++)
            e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
        return e
    }
    ;
    t && !P(t.crypto) && crypto.getRandomValues && (Ke = e => crypto.getRandomValues(e));
    class Xe {
        constructor() {
            j(this, "buffer", new Uint32Array(8)),
            j(this, "cursor", 1 / 0)
        }
        nextUint32() {
            return this.cursor >= this.buffer.length && (Ke(this.buffer),
            this.cursor = 0),
            this.buffer[this.cursor++]
        }
    }
    var Qe = () => Ze().toString()
      , Ze = () => (Ye || (Ye = new Je)).generate()
      , et = "Thu, 01 Jan 1970 00:00:00 GMT"
      , tt = "";
    var it = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    function nt(e, t) {
        if (t) {
            var i = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
                if (tt)
                    return tt;
                if (!t)
                    return "";
                if (["localhost", "127.0.0.1"].includes(e))
                    return "";
                for (var i = e.split("."), n = Math.min(i.length, 8), r = "dmn_chk_" + Qe(), s = new RegExp("(^|;)\\s*" + r + "=1"); !tt && n--; ) {
                    var o = i.slice(n).join(".")
                      , l = r + "=1;domain=." + o;
                    t.cookie = l,
                    s.test(t.cookie) && (t.cookie = l + ";expires=" + et,
                    tt = o)
                }
                return tt
            }(e);
            if (!i) {
                var n = (e => {
                    var t = e.match(it);
                    return t ? t[0] : ""
                }
                )(e);
                n !== i && N.info("Warning: cookie subdomain discovery mismatch", n, i),
                i = n
            }
            return i ? "; domain=." + i : ""
        }
        return ""
    }
    var rt = {
        is_supported: () => !!a,
        error: function(e) {
            N.error("cookieStore error: " + e)
        },
        get: function(e) {
            if (a) {
                try {
                    for (var t = e + "=", i = a.cookie.split(";").filter((e => e.length)), n = 0; n < i.length; n++) {
                        for (var r = i[n]; " " == r.charAt(0); )
                            r = r.substring(1, r.length);
                        if (0 === r.indexOf(t))
                            return decodeURIComponent(r.substring(t.length, r.length))
                    }
                } catch (e) {}
                return null
            }
        },
        parse: function(e) {
            var t;
            try {
                t = JSON.parse(rt.get(e)) || {}
            } catch (e) {}
            return t
        },
        set: function(e, t, i, n, r) {
            if (a)
                try {
                    var s = ""
                      , o = ""
                      , l = nt(a.location.hostname, n);
                    if (i) {
                        var u = new Date;
                        u.setTime(u.getTime() + 24 * i * 60 * 60 * 1e3),
                        s = "; expires=" + u.toUTCString()
                    }
                    r && (o = "; secure");
                    var c = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; SameSite=Lax; path=/" + l + o;
                    return c.length > 3686.4 && N.warn("cookieStore warning: large cookie, len=" + c.length),
                    a.cookie = c,
                    c
                } catch (e) {
                    return
                }
        },
        remove: function(e, t) {
            try {
                rt.set(e, "", -1, t)
            } catch (e) {
                return
            }
        }
    }
      , st = null
      , ot = {
        is_supported: function() {
            if (!T(st))
                return st;
            var e = !0;
            if (P(t))
                e = !1;
            else
                try {
                    var i = "__mplssupport__";
                    ot.set(i, "xyz"),
                    '"xyz"' !== ot.get(i) && (e = !1),
                    ot.remove(i)
                } catch (t) {
                    e = !1
                }
            return e || N.error("localStorage unsupported; falling back to cookie store"),
            st = e,
            e
        },
        error: function(e) {
            N.error("localStorage error: " + e)
        },
        get: function(e) {
            try {
                return null == t ? void 0 : t.localStorage.getItem(e)
            } catch (e) {
                ot.error(e)
            }
            return null
        },
        parse: function(e) {
            try {
                return JSON.parse(ot.get(e)) || {}
            } catch (e) {}
            return null
        },
        set: function(e, i) {
            try {
                null == t || t.localStorage.setItem(e, JSON.stringify(i))
            } catch (e) {
                ot.error(e)
            }
        },
        remove: function(e) {
            try {
                null == t || t.localStorage.removeItem(e)
            } catch (e) {
                ot.error(e)
            }
        }
    }
      , at = ["distinct_id", be, ye, Ae, Le]
      , lt = z(z({}, ot), {}, {
        parse: function(e) {
            try {
                var t = {};
                try {
                    t = rt.parse(e) || {}
                } catch (e) {}
                var i = Y(t, JSON.parse(ot.get(e) || "{}"));
                return ot.set(e, i),
                i
            } catch (e) {}
            return null
        },
        set: function(e, t, i, n, r, s) {
            try {
                ot.set(e, t, void 0, void 0, s);
                var o = {};
                at.forEach((e => {
                    t[e] && (o[e] = t[e])
                }
                )),
                Object.keys(o).length && rt.set(e, o, i, n, r, s)
            } catch (e) {
                ot.error(e)
            }
        },
        remove: function(e, i) {
            try {
                null == t || t.localStorage.removeItem(e),
                rt.remove(e, i)
            } catch (e) {
                ot.error(e)
            }
        }
    })
      , ut = {}
      , ct = {
        is_supported: function() {
            return !0
        },
        error: function(e) {
            N.error("memoryStorage error: " + e)
        },
        get: function(e) {
            return ut[e] || null
        },
        parse: function(e) {
            return ut[e] || null
        },
        set: function(e, t) {
            ut[e] = t
        },
        remove: function(e) {
            delete ut[e]
        }
    }
      , dt = null
      , ht = {
        is_supported: function() {
            if (!T(dt))
                return dt;
            if (dt = !0,
            P(t))
                dt = !1;
            else
                try {
                    var e = "__support__";
                    ht.set(e, "xyz"),
                    '"xyz"' !== ht.get(e) && (dt = !1),
                    ht.remove(e)
                } catch (e) {
                    dt = !1
                }
            return dt
        },
        error: function(e) {
            N.error("sessionStorage error: ", e)
        },
        get: function(e) {
            try {
                return null == t ? void 0 : t.sessionStorage.getItem(e)
            } catch (e) {
                ht.error(e)
            }
            return null
        },
        parse: function(e) {
            try {
                return JSON.parse(ht.get(e)) || null
            } catch (e) {}
            return null
        },
        set: function(e, i) {
            try {
                null == t || t.sessionStorage.setItem(e, JSON.stringify(i))
            } catch (e) {
                ht.error(e)
            }
        },
        remove: function(e) {
            try {
                null == t || t.sessionStorage.removeItem(e)
            } catch (e) {
                ht.error(e)
            }
        }
    }
      , _t = ["localhost", "127.0.0.1"]
      , pt = e => {
        var t = null == a ? void 0 : a.createElement("a");
        return P(t) ? null : (t.href = e,
        t)
    }
      , vt = function(e, t) {
        return !!function(e) {
            try {
                new RegExp(e)
            } catch (e) {
                return !1
            }
            return !0
        }(t) && new RegExp(t).test(e)
    }
      , gt = function(e) {
        var t, i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", r = [];
        return J(e, (function(e, n) {
            P(e) || P(n) || "undefined" === n || (t = encodeURIComponent((e => e instanceof File)(e) ? e.name : e.toString()),
            i = encodeURIComponent(n),
            r[r.length] = i + "=" + t)
        }
        )),
        r.join(n)
    }
      , ft = function(e, t) {
        for (var i, n = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), r = 0; r < n.length; r++) {
            var s = n[r].split("=");
            if (s[0] === t) {
                i = s;
                break
            }
        }
        if (!k(i) || i.length < 2)
            return "";
        var o = i[1];
        try {
            o = decodeURIComponent(o)
        } catch (e) {
            N.error("Skipping decoding for malformed query param: " + o)
        }
        return o.replace(/\+/g, " ")
    }
      , mt = function(e, t) {
        var i = e.match(new RegExp(t + "=([^&]*)"));
        return i ? i[1] : null
    }
      , bt = "Mobile"
      , yt = "iOS"
      , wt = "Android"
      , St = "Tablet"
      , Et = wt + " " + St
      , kt = "iPad"
      , xt = "Apple"
      , It = xt + " Watch"
      , Ct = "Safari"
      , Pt = "BlackBerry"
      , Ft = "Samsung"
      , Rt = Ft + "Browser"
      , Tt = Ft + " Internet"
      , $t = "Chrome"
      , Ot = $t + " OS"
      , Mt = $t + " " + yt
      , Lt = "Internet Explorer"
      , At = Lt + " " + bt
      , Dt = "Opera"
      , Nt = Dt + " Mini"
      , qt = "Edge"
      , Bt = "Microsoft " + qt
      , Ht = "Firefox"
      , Ut = Ht + " " + yt
      , zt = "Nintendo"
      , jt = "PlayStation"
      , Wt = "Xbox"
      , Vt = wt + " " + bt
      , Gt = bt + " " + Ct
      , Jt = "Windows"
      , Yt = Jt + " Phone"
      , Kt = "Nokia"
      , Xt = "Ouya"
      , Qt = "Generic"
      , Zt = Qt + " " + bt.toLowerCase()
      , ei = Qt + " " + St.toLowerCase()
      , ti = "Konqueror"
      , ii = "(\\d+(\\.\\d+)?)"
      , ni = new RegExp("Version/" + ii)
      , ri = new RegExp(Wt,"i")
      , si = new RegExp(jt + " \\w+","i")
      , oi = new RegExp(zt + " \\w+","i")
      , ai = new RegExp(Pt + "|PlayBook|BB10","i")
      , li = {
        "NT3.51": "NT 3.11",
        "NT4.0": "NT 4.0",
        "5.0": "2000",
        5.1: "XP",
        5.2: "XP",
        "6.0": "Vista",
        6.1: "7",
        6.2: "8",
        6.3: "8.1",
        6.4: "10",
        "10.0": "10"
    };
    var ui = (e, t) => t && f(t, xt) || function(e) {
        return f(e, Ct) && !f(e, $t) && !f(e, wt)
    }(e)
      , ci = function(e, t) {
        return t = t || "",
        f(e, " OPR/") && f(e, "Mini") ? Nt : f(e, " OPR/") ? Dt : ai.test(e) ? Pt : f(e, "IE" + bt) || f(e, "WPDesktop") ? At : f(e, Rt) ? Tt : f(e, qt) || f(e, "Edg/") ? Bt : f(e, "FBIOS") ? "Facebook " + bt : f(e, "UCWEB") || f(e, "UCBrowser") ? "UC Browser" : f(e, "CriOS") ? Mt : f(e, "CrMo") || f(e, $t) ? $t : f(e, wt) && f(e, Ct) ? Vt : f(e, "FxiOS") ? Ut : f(e.toLowerCase(), ti.toLowerCase()) ? ti : ui(e, t) ? f(e, bt) ? Gt : Ct : f(e, Ht) ? Ht : f(e, "MSIE") || f(e, "Trident/") ? Lt : f(e, "Gecko") ? Ht : ""
    }
      , di = {
        [At]: [new RegExp("rv:" + ii)],
        [Bt]: [new RegExp(qt + "?\\/" + ii)],
        [$t]: [new RegExp("(" + $t + "|CrMo)\\/" + ii)],
        [Mt]: [new RegExp("CriOS\\/" + ii)],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + ii)],
        [Ct]: [ni],
        [Gt]: [ni],
        [Dt]: [new RegExp("(Opera|OPR)\\/" + ii)],
        [Ht]: [new RegExp(Ht + "\\/" + ii)],
        [Ut]: [new RegExp("FxiOS\\/" + ii)],
        [ti]: [new RegExp("Konqueror[:/]?" + ii,"i")],
        [Pt]: [new RegExp(Pt + " " + ii), ni],
        [Vt]: [new RegExp("android\\s" + ii,"i")],
        [Tt]: [new RegExp(Rt + "\\/" + ii)],
        [Lt]: [new RegExp("(rv:|MSIE )" + ii)],
        Mozilla: [new RegExp("rv:" + ii)]
    }
      , hi = [[new RegExp(Wt + "; " + Wt + " (.*?)[);]","i"), e => [Wt, e && e[1] || ""]], [new RegExp(zt,"i"), [zt, ""]], [new RegExp(jt,"i"), [jt, ""]], [ai, [Pt, ""]], [new RegExp(Jt,"i"), (e, t) => {
        if (/Phone/.test(t) || /WPDesktop/.test(t))
            return [Yt, ""];
        if (new RegExp(bt).test(t) && !/IEMobile\b/.test(t))
            return [Jt + " " + bt, ""];
        var i = /Windows NT ([0-9.]+)/i.exec(t);
        if (i && i[1]) {
            var n = i[1]
              , r = li[n] || "";
            return /arm/i.test(t) && (r = "RT"),
            [Jt, r]
        }
        return [Jt, ""]
    }
    ], [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, e => {
        if (e && e[3]) {
            var t = [e[3], e[4], e[5] || "0"];
            return [yt, t.join(".")]
        }
        return [yt, ""]
    }
    ], [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, e => {
        var t = "";
        return e && e.length >= 3 && (t = P(e[2]) ? e[3] : e[2]),
        ["watchOS", t]
    }
    ], [new RegExp("(" + wt + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + wt + ")","i"), e => {
        if (e && e[2]) {
            var t = [e[2], e[3], e[4] || "0"];
            return [wt, t.join(".")]
        }
        return [wt, ""]
    }
    ], [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, e => {
        var t = ["Mac OS X", ""];
        if (e && e[1]) {
            var i = [e[1], e[2], e[3] || "0"];
            t[1] = i.join(".")
        }
        return t
    }
    ], [/Mac/i, ["Mac OS X", ""]], [/CrOS/, [Ot, ""]], [/Linux|debian/i, ["Linux", ""]]]
      , _i = function(e) {
        return oi.test(e) ? zt : si.test(e) ? jt : ri.test(e) ? Wt : new RegExp(Xt,"i").test(e) ? Xt : new RegExp("(" + Yt + "|WPDesktop)","i").test(e) ? Yt : /iPad/.test(e) ? kt : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? It : ai.test(e) ? Pt : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(Kt,"i").test(e) ? Kt : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(bt).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? wt : Et : wt : new RegExp("(pda|" + bt + ")","i").test(e) ? Zt : new RegExp(St,"i").test(e) && !new RegExp(St + " pc","i").test(e) ? ei : ""
    }
      , pi = "https?://(.*)"
      , vi = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid"]
      , gi = {
        campaignParams: function(e) {
            return a ? this._campaignParamsFromUrl(a.URL, e) : {}
        },
        _campaignParamsFromUrl: function(e, t) {
            var i = vi.concat(t || [])
              , n = {};
            return J(i, (function(t) {
                var i = ft(e, t);
                n[t] = i || null
            }
            )),
            n
        },
        _searchEngine: function(e) {
            return e ? 0 === e.search(pi + "google.([^/?]*)") ? "google" : 0 === e.search(pi + "bing.com") ? "bing" : 0 === e.search(pi + "yahoo.com") ? "yahoo" : 0 === e.search(pi + "duckduckgo.com") ? "duckduckgo" : null : null
        },
        _searchInfoFromReferrer: function(e) {
            var t = gi._searchEngine(e)
              , i = "yahoo" != t ? "q" : "p"
              , n = {};
            if (!T(t)) {
                n.$search_engine = t;
                var r = a ? ft(a.referrer, i) : "";
                r.length && (n.ph_keyword = r)
            }
            return n
        },
        searchInfo: function() {
            var e = null == a ? void 0 : a.referrer;
            return e ? this._searchInfoFromReferrer(e) : {}
        },
        browser: ci,
        browserVersion: function(e, t) {
            var i = ci(e, t)
              , n = di[i];
            if (P(n))
                return null;
            for (var r = 0; r < n.length; r++) {
                var s = n[r]
                  , o = e.match(s);
                if (o)
                    return parseFloat(o[o.length - 2])
            }
            return null
        },
        browserLanguage: function() {
            return navigator.language || navigator.userLanguage
        },
        browserLanguagePrefix: function() {
            var e = this.browserLanguage();
            return "string" == typeof e ? e.split("-")[0] : void 0
        },
        os: function(e) {
            for (var t = 0; t < hi.length; t++) {
                var [i,n] = hi[t]
                  , r = i.exec(e)
                  , s = r && (x(n) ? n(r, e) : n);
                if (s)
                    return s
            }
            return ["", ""]
        },
        device: _i,
        deviceType: function(e) {
            var t = _i(e);
            return t === kt || t === Et || "Kobo" === t || "Kindle Fire" === t || t === ei ? St : t === zt || t === Wt || t === jt || t === Xt ? "Console" : t === It ? "Wearable" : t ? bt : "Desktop"
        },
        referrer: function() {
            return (null == a ? void 0 : a.referrer) || "$direct"
        },
        referringDomain: function() {
            var e;
            return null != a && a.referrer && (null === (e = pt(a.referrer)) || void 0 === e ? void 0 : e.host) || "$direct"
        },
        referrerInfo: function() {
            return {
                $referrer: this.referrer(),
                $referring_domain: this.referringDomain()
            }
        },
        initialPersonInfo: function() {
            return {
                r: this.referrer().substring(0, 1e3),
                u: null == l ? void 0 : l.href.substring(0, 1e3)
            }
        },
        initialPersonPropsFromInfo: function(e) {
            var t, {r: i, u: n} = e, r = {
                $initial_referrer: i,
                $initial_referring_domain: null == i ? void 0 : "$direct" == i ? "$direct" : null === (t = pt(i)) || void 0 === t ? void 0 : t.host
            };
            if (n) {
                r.$initial_current_url = n;
                var s = pt(n);
                r.$initial_host = null == s ? void 0 : s.host,
                r.$initial_pathname = null == s ? void 0 : s.pathname,
                J(this._campaignParamsFromUrl(n), (function(e, t) {
                    r["$initial_" + b(t)] = e
                }
                ))
            }
            i && J(this._searchInfoFromReferrer(i), (function(e, t) {
                r["$initial_" + b(t)] = e
            }
            ));
            return r
        },
        timezone: function() {
            try {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch (e) {
                return
            }
        },
        timezoneOffset: function() {
            try {
                return (new Date).getTimezoneOffset()
            } catch (e) {
                return
            }
        },
        properties: function() {
            if (!h)
                return {};
            var [e,i] = gi.os(h);
            return Y(Z({
                $os: e,
                $os_version: i,
                $browser: gi.browser(h, navigator.vendor),
                $device: gi.device(h),
                $device_type: gi.deviceType(h),
                $timezone: gi.timezone(),
                $timezone_offset: gi.timezoneOffset()
            }), {
                $current_url: null == l ? void 0 : l.href,
                $host: null == l ? void 0 : l.host,
                $pathname: null == l ? void 0 : l.pathname,
                $raw_user_agent: h.length > 1e3 ? h.substring(0, 997) + "..." : h,
                $browser_version: gi.browserVersion(h, navigator.vendor),
                $browser_language: gi.browserLanguage(),
                $browser_language_prefix: gi.browserLanguagePrefix(),
                $screen_height: null == t ? void 0 : t.screen.height,
                $screen_width: null == t ? void 0 : t.screen.width,
                $viewport_height: null == t ? void 0 : t.innerHeight,
                $viewport_width: null == t ? void 0 : t.innerWidth,
                $lib: "web",
                $lib_version: p.LIB_VERSION,
                $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                $time: Date.now() / 1e3
            })
        },
        people_properties: function() {
            if (!h)
                return {};
            var [e,t] = gi.os(h);
            return Y(Z({
                $os: e,
                $os_version: t,
                $browser: gi.browser(h, navigator.vendor)
            }), {
                $browser_version: gi.browserVersion(h, navigator.vendor)
            })
        }
    }
      , fi = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
    class mi {
        constructor(e) {
            this.config = e,
            this.props = {},
            this.campaign_params_saved = !1,
            this.name = (e => {
                var t = "";
                return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")),
                e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog"
            }
            )(e),
            this.storage = this.buildStorage(e),
            this.load(),
            e.debug && N.info("Persistence loaded", e.persistence, z({}, this.props)),
            this.update_config(e, e),
            this.save()
        }
        buildStorage(e) {
            -1 === fi.indexOf(e.persistence.toLowerCase()) && (N.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"),
            e.persistence = "localStorage+cookie");
            var t = e.persistence.toLowerCase();
            return "localstorage" === t && ot.is_supported() ? ot : "localstorage+cookie" === t && lt.is_supported() ? lt : "sessionstorage" === t && ht.is_supported() ? ht : "memory" === t ? ct : "cookie" === t ? rt : lt.is_supported() ? lt : rt
        }
        properties() {
            var e = {};
            return J(this.props, (function(t, i) {
                if (i === Ee && I(t))
                    for (var n = Object.keys(t), r = 0; r < n.length; r++)
                        e["$feature/".concat(n[r])] = t[n[r]];
                else
                    a = i,
                    l = !1,
                    (T(o = qe) ? l : s && o.indexOf === s ? -1 != o.indexOf(a) : (J(o, (function(e) {
                        if (l || (l = e === a))
                            return V
                    }
                    )),
                    l)) || (e[i] = t);
                var o, a, l
            }
            )),
            e
        }
        load() {
            if (!this.disabled) {
                var e = this.storage.parse(this.name);
                e && (this.props = Y({}, e))
            }
        }
        save() {
            this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug)
        }
        remove() {
            this.storage.remove(this.name, !1),
            this.storage.remove(this.name, !0)
        }
        clear() {
            this.remove(),
            this.props = {}
        }
        register_once(e, t, i) {
            if (I(e)) {
                P(t) && (t = "None"),
                this.expire_days = P(i) ? this.default_expiry : i;
                var n = !1;
                if (J(e, ( (e, i) => {
                    this.props.hasOwnProperty(i) && this.props[i] !== t || (this.props[i] = e,
                    n = !0)
                }
                )),
                n)
                    return this.save(),
                    !0
            }
            return !1
        }
        register(e, t) {
            if (I(e)) {
                this.expire_days = P(t) ? this.default_expiry : t;
                var i = !1;
                if (J(e, ( (t, n) => {
                    e.hasOwnProperty(n) && this.props[n] !== t && (this.props[n] = t,
                    i = !0)
                }
                )),
                i)
                    return this.save(),
                    !0
            }
            return !1
        }
        unregister(e) {
            e in this.props && (delete this.props[e],
            this.save())
        }
        update_campaign_params() {
            if (!this.campaign_params_saved) {
                var e = gi.campaignParams(this.config.custom_campaign_params);
                C(Z(e)) || this.register(e),
                this.campaign_params_saved = !0
            }
        }
        update_search_keyword() {
            this.register(gi.searchInfo())
        }
        update_referrer_info() {
            this.register_once(gi.referrerInfo(), void 0)
        }
        set_initial_person_info() {
            this.props[Oe] || this.props[Me] || this.register_once({
                [Le]: gi.initialPersonInfo()
            }, void 0)
        }
        get_referrer_info() {
            return Z({
                $referrer: this.props.$referrer,
                $referring_domain: this.props.$referring_domain
            })
        }
        get_initial_props() {
            var e = {};
            J([Me, Oe], (t => {
                var i = this.props[t];
                i && J(i, (function(t, i) {
                    e["$initial_" + b(i)] = t
                }
                ))
            }
            ));
            var t = this.props[Le];
            if (t) {
                var i = gi.initialPersonPropsFromInfo(t);
                Y(e, i)
            }
            return e
        }
        safe_merge(e) {
            return J(this.props, (function(t, i) {
                i in e || (e[i] = t)
            }
            )),
            e
        }
        update_config(e, t) {
            if (this.default_expiry = this.expire_days = e.cookie_expiration,
            this.set_disabled(e.disable_persistence),
            this.set_cross_subdomain(e.cross_subdomain_cookie),
            this.set_secure(e.secure_cookie),
            e.persistence !== t.persistence) {
                var i = this.buildStorage(e)
                  , n = this.props;
                this.clear(),
                this.storage = i,
                this.props = n,
                this.save()
            }
        }
        set_disabled(e) {
            this.disabled = e,
            this.disabled ? this.remove() : this.save()
        }
        set_cross_subdomain(e) {
            e !== this.cross_subdomain && (this.cross_subdomain = e,
            this.remove(),
            this.save())
        }
        get_cross_subdomain() {
            return !!this.cross_subdomain
        }
        set_secure(e) {
            e !== this.secure && (this.secure = e,
            this.remove(),
            this.save())
        }
        set_event_timer(e, t) {
            var i = this.props[se] || {};
            i[e] = t,
            this.props[se] = i,
            this.save()
        }
        remove_event_timer(e) {
            var t = (this.props[se] || {})[e];
            return P(t) || (delete this.props[se][e],
            this.save()),
            t
        }
        get_property(e) {
            return this.props[e]
        }
        set_property(e, t) {
            this.props[e] = t,
            this.save()
        }
    }
    function bi(e) {
        var t, i;
        return (null === (t = JSON.stringify(e, (i = [],
        function(e, t) {
            if (I(t)) {
                for (; i.length > 0 && i[i.length - 1] !== this; )
                    i.pop();
                return i.includes(t) ? "[Circular]" : (i.push(t),
                t)
            }
            return t
        }
        ))) || void 0 === t ? void 0 : t.length) || 0
    }
    function yi(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (e.size >= t && e.data.length > 1) {
            var i = Math.floor(e.data.length / 2)
              , n = e.data.slice(0, i)
              , r = e.data.slice(i);
            return [yi({
                size: bi(n),
                data: n,
                sessionId: e.sessionId,
                windowId: e.windowId
            }), yi({
                size: bi(r),
                data: r,
                sessionId: e.sessionId,
                windowId: e.windowId
            })].flatMap((e => e))
        }
        return [e]
    }
    var wi = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
    e[e.Load = 1] = "Load",
    e[e.FullSnapshot = 2] = "FullSnapshot",
    e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
    e[e.Meta = 4] = "Meta",
    e[e.Custom = 5] = "Custom",
    e[e.Plugin = 6] = "Plugin",
    e))(wi || {})
      , Si = (e => (e[e.Mutation = 0] = "Mutation",
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
    e))(Si || {});
    function Ei(e) {
        var t;
        return e instanceof Element && (e.id === De || !(null === (t = e.closest) || void 0 === t || !t.call(e, ".toolbar-global-fade-container")))
    }
    function ki(e) {
        return !!e && 1 === e.nodeType
    }
    function xi(e, t) {
        return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
    }
    function Ii(e) {
        return !!e && 3 === e.nodeType
    }
    function Ci(e) {
        return !!e && 11 === e.nodeType
    }
    function Pi(e) {
        return e ? m(e).split(/\s+/) : []
    }
    function Fi(e) {
        var i = null == t ? void 0 : t.location.href;
        return !!(i && e && e.some((e => i.match(e))))
    }
    function Ri(e) {
        var t = "";
        switch (typeof e.className) {
        case "string":
            t = e.className;
            break;
        case "object":
            t = (e.className && "baseVal"in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
            break;
        default:
            t = ""
        }
        return Pi(t)
    }
    function Ti(e) {
        return $(e) ? null : m(e).split(/(\s+)/).filter((e => Wi(e))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }
    function $i(e) {
        var t = "";
        return Di(e) && !Ni(e) && e.childNodes && e.childNodes.length && J(e.childNodes, (function(e) {
            var i;
            Ii(e) && e.textContent && (t += null !== (i = Ti(e.textContent)) && void 0 !== i ? i : "")
        }
        )),
        m(t)
    }
    function Oi(e) {
        return P(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
        var t
    }
    var Mi = ["a", "button", "form", "input", "select", "textarea", "label"];
    function Li(e) {
        var t = e.parentNode;
        return !(!t || !ki(t)) && t
    }
    function Ai(e, i) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
          , r = arguments.length > 3 ? arguments[3] : void 0
          , s = arguments.length > 4 ? arguments[4] : void 0;
        if (!t || !e || xi(e, "html") || !ki(e))
            return !1;
        if (null != n && n.url_allowlist && !Fi(n.url_allowlist))
            return !1;
        if (null != n && n.url_ignorelist && Fi(n.url_ignorelist))
            return !1;
        if (null != n && n.dom_event_allowlist) {
            var o = n.dom_event_allowlist;
            if (o && !o.some((e => i.type === e)))
                return !1
        }
        for (var a = !1, l = [e], u = !0, c = e; c.parentNode && !xi(c, "body"); )
            if (Ci(c.parentNode))
                l.push(c.parentNode.host),
                c = c.parentNode.host;
            else {
                if (!(u = Li(c)))
                    break;
                if (r || Mi.indexOf(u.tagName.toLowerCase()) > -1)
                    a = !0;
                else {
                    var d = t.getComputedStyle(u);
                    d && "pointer" === d.getPropertyValue("cursor") && (a = !0)
                }
                l.push(u),
                c = u
            }
        if (!function(e, t) {
            var i = null == t ? void 0 : t.element_allowlist;
            if (P(i))
                return !0;
            var n = function(e) {
                if (i.some((t => e.tagName.toLowerCase() === t)))
                    return {
                        v: !0
                    }
            };
            for (var r of e) {
                var s = n(r);
                if ("object" == typeof s)
                    return s.v
            }
            return !1
        }(l, n))
            return !1;
        if (!function(e, t) {
            var i = null == t ? void 0 : t.css_selector_allowlist;
            if (P(i))
                return !0;
            var n = function(e) {
                if (i.some((t => e.matches(t))))
                    return {
                        v: !0
                    }
            };
            for (var r of e) {
                var s = n(r);
                if ("object" == typeof s)
                    return s.v
            }
            return !1
        }(l, n))
            return !1;
        var h = t.getComputedStyle(e);
        if (h && "pointer" === h.getPropertyValue("cursor") && "click" === i.type)
            return !0;
        var _ = e.tagName.toLowerCase();
        switch (_) {
        case "html":
            return !1;
        case "form":
            return (s || ["submit"]).indexOf(i.type) >= 0;
        case "input":
        case "select":
        case "textarea":
            return (s || ["change", "click"]).indexOf(i.type) >= 0;
        default:
            return a ? (s || ["click"]).indexOf(i.type) >= 0 : (s || ["click"]).indexOf(i.type) >= 0 && (Mi.indexOf(_) > -1 || "true" === e.getAttribute("contenteditable"))
        }
    }
    function Di(e) {
        for (var t = e; t.parentNode && !xi(t, "body"); t = t.parentNode) {
            var i = Ri(t);
            if (f(i, "ph-sensitive") || f(i, "ph-no-capture"))
                return !1
        }
        if (f(Ri(e), "ph-include"))
            return !0;
        var n = e.type || "";
        if (F(n))
            switch (n.toLowerCase()) {
            case "hidden":
            case "password":
                return !1
            }
        var r = e.name || e.id || "";
        if (F(r)) {
            if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g, "")))
                return !1
        }
        return !0
    }
    function Ni(e) {
        return !!(xi(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || xi(e, "select") || xi(e, "textarea") || "true" === e.getAttribute("contenteditable"))
    }
    var qi = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})"
      , Bi = new RegExp("^(?:".concat(qi, ")$"))
      , Hi = new RegExp(qi)
      , Ui = "\\d{3}-?\\d{2}-?\\d{4}"
      , zi = new RegExp("^(".concat(Ui, ")$"))
      , ji = new RegExp("(".concat(Ui, ")"));
    function Wi(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if ($(e))
            return !1;
        if (F(e)) {
            if (e = m(e),
            (t ? Bi : Hi).test((e || "").replace(/[- ]/g, "")))
                return !1;
            if ((t ? zi : ji).test(e))
                return !1
        }
        return !0
    }
    function Vi(e) {
        var t = $i(e);
        return Wi(t = "".concat(t, " ").concat(Gi(e)).trim()) ? t : ""
    }
    function Gi(e) {
        var t = "";
        return e && e.childNodes && e.childNodes.length && J(e.childNodes, (function(e) {
            var i;
            if (e && "span" === (null === (i = e.tagName) || void 0 === i ? void 0 : i.toLowerCase()))
                try {
                    var n = $i(e);
                    t = "".concat(t, " ").concat(n).trim(),
                    e.childNodes && e.childNodes.length && (t = "".concat(t, " ").concat(Gi(e)).trim())
                } catch (e) {
                    N.error("[AutoCapture]", e)
                }
        }
        )),
        t
    }
    function Ji(e) {
        return function(e) {
            var t = e.map((e => {
                var t, i, n = "";
                if (e.tag_name && (n += e.tag_name),
                e.attr_class)
                    for (var r of (e.attr_class.sort(),
                    e.attr_class))
                        n += ".".concat(r.replace(/"/g, ""));
                var s = z(z(z(z({}, e.text ? {
                    text: e.text
                } : {}), {}, {
                    "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
                    "nth-of-type": null !== (i = e.nth_of_type) && void 0 !== i ? i : 0
                }, e.href ? {
                    href: e.href
                } : {}), e.attr_id ? {
                    attr_id: e.attr_id
                } : {}), e.attributes)
                  , o = {};
                return K(s).sort(( (e, t) => {
                    var [i] = e
                      , [n] = t;
                    return i.localeCompare(n)
                }
                )).forEach((e => {
                    var [t,i] = e;
                    return o[Yi(t.toString())] = Yi(i.toString())
                }
                )),
                n += ":",
                n += K(s).map((e => {
                    var [t,i] = e;
                    return "".concat(t, '="').concat(i, '"')
                }
                )).join("")
            }
            ));
            return t.join(";")
        }(function(e) {
            return e.map((e => {
                var t, i, n = {
                    text: null === (t = e.$el_text) || void 0 === t ? void 0 : t.slice(0, 400),
                    tag_name: e.tag_name,
                    href: null === (i = e.attr__href) || void 0 === i ? void 0 : i.slice(0, 2048),
                    attr_class: Ki(e),
                    attr_id: e.attr__id,
                    nth_child: e.nth_child,
                    nth_of_type: e.nth_of_type,
                    attributes: {}
                };
                return K(e).filter((e => {
                    var [t] = e;
                    return 0 === t.indexOf("attr__")
                }
                )).forEach((e => {
                    var [t,i] = e;
                    return n.attributes[t] = i
                }
                )),
                n
            }
            ))
        }(e))
    }
    function Yi(e) {
        return e.replace(/"|\\"/g, '\\"')
    }
    function Ki(e) {
        var t = e.attr__class;
        return t ? k(t) ? t : Pi(t) : void 0
    }
    var Xi = "[SessionRecording]"
      , Qi = "redacted"
      , Zi = {
        initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
        maskRequestFn: e => e,
        recordHeaders: !1,
        recordBody: !1,
        recordInitialRequests: !1,
        recordPerformance: !1,
        performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
        payloadSizeLimitBytes: 1e6,
        payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "analytics.google.com"]
    }
      , en = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"]
      , tn = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"]
      , nn = ["/s/", "/e/", "/i/"];
    function rn(e, t, i, n) {
        if ($(e))
            return e;
        var r = (null == t ? void 0 : t["content-length"]) || function(e) {
            return new Blob([e]).size
        }(e);
        return F(r) && (r = parseInt(r)),
        r > i ? Xi + " ".concat(n, " body too large to record (").concat(r, " bytes)") : e
    }
    function sn(e, t) {
        if ($(e))
            return e;
        var i = e;
        return Wi(i, !1) || (i = Xi + " " + t + " body " + Qi),
        J(tn, (e => {
            var n, r;
            null !== (n = i) && void 0 !== n && n.length && -1 !== (null === (r = i) || void 0 === r ? void 0 : r.indexOf(e)) && (i = Xi + " " + t + " body " + Qi + " as might contain: " + e)
        }
        )),
        i
    }
    var on = (e, t) => {
        var i, n, r, s = {
            payloadSizeLimitBytes: Zi.payloadSizeLimitBytes,
            performanceEntryTypeToObserve: [...Zi.performanceEntryTypeToObserve],
            payloadHostDenyList: [...t.payloadHostDenyList || [], ...Zi.payloadHostDenyList]
        }, o = !1 !== e.session_recording.recordHeaders && t.recordHeaders, a = !1 !== e.session_recording.recordBody && t.recordBody, l = !1 !== e.capture_performance && t.recordPerformance, u = (i = s,
        r = Math.min(1e6, null !== (n = i.payloadSizeLimitBytes) && void 0 !== n ? n : 1e6),
        e => (null != e && e.requestBody && (e.requestBody = rn(e.requestBody, e.requestHeaders, r, "Request")),
        null != e && e.responseBody && (e.responseBody = rn(e.responseBody, e.responseHeaders, r, "Response")),
        e)), c = t => {
            return u(( (e, t) => {
                var i, n = pt(e.name), r = 0 === t.indexOf("http") ? null === (i = pt(t)) || void 0 === i ? void 0 : i.pathname : t;
                "/" === r && (r = "");
                var s = null == n ? void 0 : n.pathname.replace(r || "", "");
                if (!(n && s && nn.some((e => 0 === s.indexOf(e)))))
                    return e
            }
            )((n = (i = t).requestHeaders,
            $(n) || J(Object.keys(null != n ? n : {}), (e => {
                en.includes(e.toLowerCase()) && (n[e] = Qi)
            }
            )),
            i), e.api_host));
            var i, n
        }
        , d = x(e.session_recording.maskNetworkRequestFn);
        return d && x(e.session_recording.maskCapturedNetworkRequestFn) && N.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),
        d && (e.session_recording.maskCapturedNetworkRequestFn = t => {
            var i = e.session_recording.maskNetworkRequestFn({
                url: t.name
            });
            return z(z({}, t), {}, {
                name: null == i ? void 0 : i.url
            })
        }
        ),
        s.maskRequestFn = x(e.session_recording.maskCapturedNetworkRequestFn) ? t => {
            var i, n, r, s = c(t);
            return s && null !== (i = null === (n = (r = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === n ? void 0 : n.call(r, s)) && void 0 !== i ? i : void 0
        }
        : e => function(e) {
            if (!P(e))
                return e.requestBody = sn(e.requestBody, "Request"),
                e.responseBody = sn(e.responseBody, "Response"),
                e
        }(c(e)),
        z(z(z({}, Zi), s), {}, {
            recordHeaders: o,
            recordBody: a,
            recordPerformance: l,
            recordInitialRequests: l
        })
    }
    ;
    function an(e, t, i, n, r) {
        return t > i && (N.warn("min cannot be greater than max."),
        t = i),
        O(e) ? e > i ? (n && N.warn(n + " cannot be  greater than max: " + i + ". Using max value instead."),
        i) : e < t ? (n && N.warn(n + " cannot be less than min: " + t + ". Using min value instead."),
        t) : e : (n && N.warn(n + " must be a number. using max or fallback. max: " + i + ", fallback: " + r),
        an(r || i, t, i, n))
    }
    class ln {
        constructor(e) {
            var t, i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            j(this, "bucketSize", 100),
            j(this, "refillRate", 10),
            j(this, "mutationBuckets", {}),
            j(this, "loggedTracker", {}),
            j(this, "refillBuckets", ( () => {
                Object.keys(this.mutationBuckets).forEach((e => {
                    this.mutationBuckets[e] = this.mutationBuckets[e] + this.refillRate,
                    this.mutationBuckets[e] >= this.bucketSize && delete this.mutationBuckets[e]
                }
                ))
            }
            )),
            j(this, "getNodeOrRelevantParent", (e => {
                var t = this.rrweb.mirror.getNode(e);
                if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                    var i = t.closest("svg");
                    if (i)
                        return [this.rrweb.mirror.getId(i), i]
                }
                return [e, t]
            }
            )),
            j(this, "numberOfChanges", (e => {
                var t, i, n, r, s, o, a, l;
                return (null !== (t = null === (i = e.removes) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0) + (null !== (n = null === (r = e.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== n ? n : 0) + (null !== (s = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) + (null !== (a = null === (l = e.adds) || void 0 === l ? void 0 : l.length) && void 0 !== a ? a : 0)
            }
            )),
            j(this, "throttleMutations", (e => {
                if (3 !== e.type || 0 !== e.data.source)
                    return e;
                var t = e.data
                  , i = this.numberOfChanges(t);
                t.attributes && (t.attributes = t.attributes.filter((e => {
                    var t, i, n, [r,s] = this.getNodeOrRelevantParent(e.id);
                    if (0 === this.mutationBuckets[r])
                        return !1;
                    (this.mutationBuckets[r] = null !== (t = this.mutationBuckets[r]) && void 0 !== t ? t : this.bucketSize,
                    this.mutationBuckets[r] = Math.max(this.mutationBuckets[r] - 1, 0),
                    0 === this.mutationBuckets[r]) && (this.loggedTracker[r] || (this.loggedTracker[r] = !0,
                    null === (i = (n = this.options).onBlockedNode) || void 0 === i || i.call(n, r, s)));
                    return e
                }
                )));
                var n = this.numberOfChanges(t);
                return 0 !== n || i === n ? e : void 0
            }
            )),
            this.rrweb = e,
            this.options = n,
            this.refillRate = an(null !== (t = this.options.refillRate) && void 0 !== t ? t : this.refillRate, 0, 100, "mutation throttling refill rate"),
            this.bucketSize = an(null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize, 0, 100, "mutation throttling bucket size"),
            setInterval(( () => {
                this.refillBuckets()
            }
            ), 1e3)
        }
    }
    var un = Uint8Array
      , cn = Uint16Array
      , dn = Uint32Array
      , hn = new un([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0])
      , _n = new un([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0])
      , pn = new un([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
      , vn = function(e, t) {
        for (var i = new cn(31), n = 0; n < 31; ++n)
            i[n] = t += 1 << e[n - 1];
        var r = new dn(i[30]);
        for (n = 1; n < 30; ++n)
            for (var s = i[n]; s < i[n + 1]; ++s)
                r[s] = s - i[n] << 5 | n;
        return [i, r]
    }
      , gn = vn(hn, 2)
      , fn = gn[0]
      , mn = gn[1];
    fn[28] = 258,
    mn[258] = 28;
    for (var bn = vn(_n, 0)[1], yn = new cn(32768), wn = 0; wn < 32768; ++wn) {
        var Sn = (43690 & wn) >>> 1 | (21845 & wn) << 1;
        Sn = (61680 & (Sn = (52428 & Sn) >>> 2 | (13107 & Sn) << 2)) >>> 4 | (3855 & Sn) << 4,
        yn[wn] = ((65280 & Sn) >>> 8 | (255 & Sn) << 8) >>> 1
    }
    var En = function(e, t, i) {
        for (var n = e.length, r = 0, s = new cn(t); r < n; ++r)
            ++s[e[r] - 1];
        var o, a = new cn(t);
        for (r = 0; r < t; ++r)
            a[r] = a[r - 1] + s[r - 1] << 1;
        if (i) {
            o = new cn(1 << t);
            var l = 15 - t;
            for (r = 0; r < n; ++r)
                if (e[r])
                    for (var u = r << 4 | e[r], c = t - e[r], d = a[e[r] - 1]++ << c, h = d | (1 << c) - 1; d <= h; ++d)
                        o[yn[d] >>> l] = u
        } else
            for (o = new cn(n),
            r = 0; r < n; ++r)
                o[r] = yn[a[e[r] - 1]++] >>> 15 - e[r];
        return o
    }
      , kn = new un(288);
    for (wn = 0; wn < 144; ++wn)
        kn[wn] = 8;
    for (wn = 144; wn < 256; ++wn)
        kn[wn] = 9;
    for (wn = 256; wn < 280; ++wn)
        kn[wn] = 7;
    for (wn = 280; wn < 288; ++wn)
        kn[wn] = 8;
    var xn = new un(32);
    for (wn = 0; wn < 32; ++wn)
        xn[wn] = 5;
    var In = En(kn, 9, 0)
      , Cn = En(xn, 5, 0)
      , Pn = function(e) {
        return (e / 8 >> 0) + (7 & e && 1)
    }
      , Fn = function(e, t, i) {
        (null == i || i > e.length) && (i = e.length);
        var n = new (e instanceof cn ? cn : e instanceof dn ? dn : un)(i - t);
        return n.set(e.subarray(t, i)),
        n
    }
      , Rn = function(e, t, i) {
        i <<= 7 & t;
        var n = t / 8 >> 0;
        e[n] |= i,
        e[n + 1] |= i >>> 8
    }
      , Tn = function(e, t, i) {
        i <<= 7 & t;
        var n = t / 8 >> 0;
        e[n] |= i,
        e[n + 1] |= i >>> 8,
        e[n + 2] |= i >>> 16
    }
      , $n = function(e, t) {
        for (var i = [], n = 0; n < e.length; ++n)
            e[n] && i.push({
                s: n,
                f: e[n]
            });
        var r = i.length
          , s = i.slice();
        if (!r)
            return [new un(0), 0];
        if (1 == r) {
            var o = new un(i[0].s + 1);
            return o[i[0].s] = 1,
            [o, 1]
        }
        i.sort((function(e, t) {
            return e.f - t.f
        }
        )),
        i.push({
            s: -1,
            f: 25001
        });
        var a = i[0]
          , l = i[1]
          , u = 0
          , c = 1
          , d = 2;
        for (i[0] = {
            s: -1,
            f: a.f + l.f,
            l: a,
            r: l
        }; c != r - 1; )
            a = i[i[u].f < i[d].f ? u++ : d++],
            l = i[u != c && i[u].f < i[d].f ? u++ : d++],
            i[c++] = {
                s: -1,
                f: a.f + l.f,
                l: a,
                r: l
            };
        var h = s[0].s;
        for (n = 1; n < r; ++n)
            s[n].s > h && (h = s[n].s);
        var _ = new cn(h + 1)
          , p = On(i[c - 1], _, 0);
        if (p > t) {
            n = 0;
            var v = 0
              , g = p - t
              , f = 1 << g;
            for (s.sort((function(e, t) {
                return _[t.s] - _[e.s] || e.f - t.f
            }
            )); n < r; ++n) {
                var m = s[n].s;
                if (!(_[m] > t))
                    break;
                v += f - (1 << p - _[m]),
                _[m] = t
            }
            for (v >>>= g; v > 0; ) {
                var b = s[n].s;
                _[b] < t ? v -= 1 << t - _[b]++ - 1 : ++n
            }
            for (; n >= 0 && v; --n) {
                var y = s[n].s;
                _[y] == t && (--_[y],
                ++v)
            }
            p = t
        }
        return [new un(_), p]
    }
      , On = function(e, t, i) {
        return -1 == e.s ? Math.max(On(e.l, t, i + 1), On(e.r, t, i + 1)) : t[e.s] = i
    }
      , Mn = function(e) {
        for (var t = e.length; t && !e[--t]; )
            ;
        for (var i = new cn(++t), n = 0, r = e[0], s = 1, o = function(e) {
            i[n++] = e
        }, a = 1; a <= t; ++a)
            if (e[a] == r && a != t)
                ++s;
            else {
                if (!r && s > 2) {
                    for (; s > 138; s -= 138)
                        o(32754);
                    s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305),
                    s = 0)
                } else if (s > 3) {
                    for (o(r),
                    --s; s > 6; s -= 6)
                        o(8304);
                    s > 2 && (o(s - 3 << 5 | 8208),
                    s = 0)
                }
                for (; s--; )
                    o(r);
                s = 1,
                r = e[a]
            }
        return [i.subarray(0, n), t]
    }
      , Ln = function(e, t) {
        for (var i = 0, n = 0; n < t.length; ++n)
            i += e[n] * t[n];
        return i
    }
      , An = function(e, t, i) {
        var n = i.length
          , r = Pn(t + 2);
        e[r] = 255 & n,
        e[r + 1] = n >>> 8,
        e[r + 2] = 255 ^ e[r],
        e[r + 3] = 255 ^ e[r + 1];
        for (var s = 0; s < n; ++s)
            e[r + s + 4] = i[s];
        return 8 * (r + 4 + n)
    }
      , Dn = function(e, t, i, n, r, s, o, a, l, u, c) {
        Rn(t, c++, i),
        ++r[256];
        for (var d = $n(r, 15), h = d[0], _ = d[1], p = $n(s, 15), v = p[0], g = p[1], f = Mn(h), m = f[0], b = f[1], y = Mn(v), w = y[0], S = y[1], E = new cn(19), k = 0; k < m.length; ++k)
            E[31 & m[k]]++;
        for (k = 0; k < w.length; ++k)
            E[31 & w[k]]++;
        for (var x = $n(E, 7), I = x[0], C = x[1], P = 19; P > 4 && !I[pn[P - 1]]; --P)
            ;
        var F, R, T, $, O = u + 5 << 3, M = Ln(r, kn) + Ln(s, xn) + o, L = Ln(r, h) + Ln(s, v) + o + 14 + 3 * P + Ln(E, I) + (2 * E[16] + 3 * E[17] + 7 * E[18]);
        if (O <= M && O <= L)
            return An(t, c, e.subarray(l, l + u));
        if (Rn(t, c, 1 + (L < M)),
        c += 2,
        L < M) {
            F = En(h, _, 0),
            R = h,
            T = En(v, g, 0),
            $ = v;
            var A = En(I, C, 0);
            Rn(t, c, b - 257),
            Rn(t, c + 5, S - 1),
            Rn(t, c + 10, P - 4),
            c += 14;
            for (k = 0; k < P; ++k)
                Rn(t, c + 3 * k, I[pn[k]]);
            c += 3 * P;
            for (var D = [m, w], N = 0; N < 2; ++N) {
                var q = D[N];
                for (k = 0; k < q.length; ++k) {
                    var B = 31 & q[k];
                    Rn(t, c, A[B]),
                    c += I[B],
                    B > 15 && (Rn(t, c, q[k] >>> 5 & 127),
                    c += q[k] >>> 12)
                }
            }
        } else
            F = In,
            R = kn,
            T = Cn,
            $ = xn;
        for (k = 0; k < a; ++k)
            if (n[k] > 255) {
                B = n[k] >>> 18 & 31;
                Tn(t, c, F[B + 257]),
                c += R[B + 257],
                B > 7 && (Rn(t, c, n[k] >>> 23 & 31),
                c += hn[B]);
                var H = 31 & n[k];
                Tn(t, c, T[H]),
                c += $[H],
                H > 3 && (Tn(t, c, n[k] >>> 5 & 8191),
                c += _n[H])
            } else
                Tn(t, c, F[n[k]]),
                c += R[n[k]];
        return Tn(t, c, F[256]),
        c + R[256]
    }
      , Nn = new dn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632])
      , qn = function() {
        for (var e = new dn(256), t = 0; t < 256; ++t) {
            for (var i = t, n = 9; --n; )
                i = (1 & i && 3988292384) ^ i >>> 1;
            e[t] = i
        }
        return e
    }()
      , Bn = function() {
        var e = 4294967295;
        return {
            p: function(t) {
                for (var i = e, n = 0; n < t.length; ++n)
                    i = qn[255 & i ^ t[n]] ^ i >>> 8;
                e = i
            },
            d: function() {
                return 4294967295 ^ e
            }
        }
    }
      , Hn = function(e, t, i, n, r) {
        return function(e, t, i, n, r, s) {
            var o = e.length
              , a = new un(n + o + 5 * (1 + Math.floor(o / 7e3)) + r)
              , l = a.subarray(n, a.length - r)
              , u = 0;
            if (!t || o < 8)
                for (var c = 0; c <= o; c += 65535) {
                    var d = c + 65535;
                    d < o ? u = An(l, u, e.subarray(c, d)) : (l[c] = s,
                    u = An(l, u, e.subarray(c, o)))
                }
            else {
                for (var h = Nn[t - 1], _ = h >>> 13, p = 8191 & h, v = (1 << i) - 1, g = new cn(32768), f = new cn(v + 1), m = Math.ceil(i / 3), b = 2 * m, y = function(t) {
                    return (e[t] ^ e[t + 1] << m ^ e[t + 2] << b) & v
                }, w = new dn(25e3), S = new cn(288), E = new cn(32), k = 0, x = 0, I = (c = 0,
                0), C = 0, P = 0; c < o; ++c) {
                    var F = y(c)
                      , R = 32767 & c
                      , T = f[F];
                    if (g[R] = T,
                    f[F] = R,
                    C <= c) {
                        var $ = o - c;
                        if ((k > 7e3 || I > 24576) && $ > 423) {
                            u = Dn(e, l, 0, w, S, E, x, I, P, c - P, u),
                            I = k = x = 0,
                            P = c;
                            for (var O = 0; O < 286; ++O)
                                S[O] = 0;
                            for (O = 0; O < 30; ++O)
                                E[O] = 0
                        }
                        var M = 2
                          , L = 0
                          , A = p
                          , D = R - T & 32767;
                        if ($ > 2 && F == y(c - D))
                            for (var N = Math.min(_, $) - 1, q = Math.min(32767, c), B = Math.min(258, $); D <= q && --A && R != T; ) {
                                if (e[c + M] == e[c + M - D]) {
                                    for (var H = 0; H < B && e[c + H] == e[c + H - D]; ++H)
                                        ;
                                    if (H > M) {
                                        if (M = H,
                                        L = D,
                                        H > N)
                                            break;
                                        var U = Math.min(D, H - 2)
                                          , z = 0;
                                        for (O = 0; O < U; ++O) {
                                            var j = c - D + O + 32768 & 32767
                                              , W = j - g[j] + 32768 & 32767;
                                            W > z && (z = W,
                                            T = j)
                                        }
                                    }
                                }
                                D += (R = T) - (T = g[R]) + 32768 & 32767
                            }
                        if (L) {
                            w[I++] = 268435456 | mn[M] << 18 | bn[L];
                            var V = 31 & mn[M]
                              , G = 31 & bn[L];
                            x += hn[V] + _n[G],
                            ++S[257 + V],
                            ++E[G],
                            C = c + M,
                            ++k
                        } else
                            w[I++] = e[c],
                            ++S[e[c]]
                    }
                }
                u = Dn(e, l, s, w, S, E, x, I, P, c - P, u)
            }
            return Fn(a, 0, n + Pn(u) + r)
        }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, i, n, !r)
    }
      , Un = function(e, t, i) {
        for (; i; ++t)
            e[t] = i,
            i >>>= 8
    }
      , zn = function(e, t) {
        var i = t.filename;
        if (e[0] = 31,
        e[1] = 139,
        e[2] = 8,
        e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0,
        e[9] = 3,
        0 != t.mtime && Un(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
        i) {
            e[3] = 8;
            for (var n = 0; n <= i.length; ++n)
                e[n + 10] = i.charCodeAt(n)
        }
    }
      , jn = function(e) {
        return 10 + (e.filename && e.filename.length + 1 || 0)
    };
    function Wn(e, t) {
        void 0 === t && (t = {});
        var i = Bn()
          , n = e.length;
        i.p(e);
        var r = Hn(e, t, jn(t), 8)
          , s = r.length;
        return zn(r, t),
        Un(r, s - 8, i.d()),
        Un(r, s - 4, n),
        r
    }
    function Vn(e, t) {
        var i = e.length;
        if ("undefined" != typeof TextEncoder)
            return (new TextEncoder).encode(e);
        for (var n = new un(e.length + (e.length >>> 1)), r = 0, s = function(e) {
            n[r++] = e
        }, o = 0; o < i; ++o) {
            if (r + 5 > n.length) {
                var a = new un(r + 8 + (i - o << 1));
                a.set(n),
                n = a
            }
            var l = e.charCodeAt(o);
            l < 128 || t ? s(l) : l < 2048 ? (s(192 | l >>> 6),
            s(128 | 63 & l)) : l > 55295 && l < 57344 ? (s(240 | (l = 65536 + (1047552 & l) | 1023 & e.charCodeAt(++o)) >>> 18),
            s(128 | l >>> 12 & 63),
            s(128 | l >>> 6 & 63),
            s(128 | 63 & l)) : (s(224 | l >>> 12),
            s(128 | l >>> 6 & 63),
            s(128 | 63 & l))
        }
        return Fn(n, 0, r)
    }
    var Gn = "[SessionRecording]"
      , Jn = q(Gn)
      , Yn = 3e5
      , Kn = [Si.MouseMove, Si.MouseInteraction, Si.Scroll, Si.ViewportResize, Si.Input, Si.TouchMove, Si.MediaInteraction, Si.Drag]
      , Xn = e => ({
        rrwebMethod: e,
        enqueuedAt: Date.now(),
        attempt: 1
    });
    function Qn(e) {
        return function(e, t) {
            for (var i = "", n = 0; n < e.length; ) {
                var r = e[n++];
                r < 128 || t ? i += String.fromCharCode(r) : r < 224 ? i += String.fromCharCode((31 & r) << 6 | 63 & e[n++]) : r < 240 ? i += String.fromCharCode((15 & r) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) : (r = ((15 & r) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536,
                i += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r))
            }
            return i
        }(Wn(Vn(JSON.stringify(e))), !0)
    }
    function Zn(e) {
        return e.type === wi.Custom && "sessionIdle" === e.data.tag
    }
    function er(e, t) {
        return t.some((t => "regex" === t.matching && new RegExp(t.url).test(e)))
    }
    class tr {
        get sessionIdleThresholdMilliseconds() {
            return this.instance.config.session_recording.session_idle_threshold_ms || 3e5
        }
        get rrwebRecord() {
            var e, t;
            return null == _ || null === (e = _.__PosthogExtensions__) || void 0 === e || null === (t = e.rrweb) || void 0 === t ? void 0 : t.record
        }
        get started() {
            return this._captureStarted
        }
        get sessionManager() {
            if (!this.instance.sessionManager)
                throw new Error(Gn + " must be started with a valid sessionManager.");
            return this.instance.sessionManager
        }
        get fullSnapshotIntervalMillis() {
            var e, t;
            return "trigger_pending" === this.triggerStatus ? 6e4 : null !== (e = null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.full_snapshot_interval_millis) && void 0 !== e ? e : Yn
        }
        get isSampled() {
            var e = this.instance.get_property(ye);
            return M(e) ? e : null
        }
        get sessionDuration() {
            var e, t, i = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1], {sessionStartTimestamp: n} = this.sessionManager.checkAndGetSessionAndWindowId(!0);
            return i ? i.timestamp - n : null
        }
        get isRecordingEnabled() {
            var e = !!this.instance.get_property(he)
              , i = !this.instance.config.disable_session_recording;
            return t && e && i
        }
        get isConsoleLogCaptureEnabled() {
            var e = !!this.instance.get_property(_e)
              , t = this.instance.config.enable_recording_console_log;
            return null != t ? t : e
        }
        get canvasRecording() {
            var e, t, i, n, r, s, o = this.instance.config.session_recording.captureCanvas, a = this.instance.get_property(ve), l = null !== (e = null !== (t = null == o ? void 0 : o.recordCanvas) && void 0 !== t ? t : null == a ? void 0 : a.enabled) && void 0 !== e && e, u = null !== (i = null !== (n = null == o ? void 0 : o.canvasFps) && void 0 !== n ? n : null == a ? void 0 : a.fps) && void 0 !== i ? i : 0, c = null !== (r = null !== (s = null == o ? void 0 : o.canvasQuality) && void 0 !== s ? s : null == a ? void 0 : a.quality) && void 0 !== r ? r : 0;
            return {
                enabled: l,
                fps: an(u, 0, 12, "canvas recording fps"),
                quality: an(c, 0, 1, "canvas recording quality")
            }
        }
        get networkPayloadCapture() {
            var e, t, i = this.instance.get_property(pe), n = {
                recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
                recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
            }, r = (null == n ? void 0 : n.recordHeaders) || (null == i ? void 0 : i.recordHeaders), s = (null == n ? void 0 : n.recordBody) || (null == i ? void 0 : i.recordBody), o = I(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance, a = !!(M(o) ? o : null == i ? void 0 : i.capturePerformance);
            return r || s || a ? {
                recordHeaders: r,
                recordBody: s,
                recordPerformance: a
            } : void 0
        }
        get sampleRate() {
            var e = this.instance.get_property(ge);
            return O(e) ? e : null
        }
        get minimumDuration() {
            var e = this.instance.get_property(fe);
            return O(e) ? e : null
        }
        get status() {
            return this.receivedDecide ? this.isRecordingEnabled ? this._urlBlocked ? "paused" : $(this._linkedFlag) || this._linkedFlagSeen ? "trigger_pending" === this.triggerStatus ? "buffering" : M(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering"
        }
        get urlTriggerStatus() {
            var e;
            return 0 === this._urlTriggers.length ? "trigger_disabled" : (null === (e = this.instance) || void 0 === e ? void 0 : e.get_property(we)) === this.sessionId ? "trigger_activated" : "trigger_pending"
        }
        get eventTriggerStatus() {
            var e;
            return 0 === this._eventTriggers.length ? "trigger_disabled" : (null === (e = this.instance) || void 0 === e ? void 0 : e.get_property(Se)) === this.sessionId ? "trigger_activated" : "trigger_pending"
        }
        get triggerStatus() {
            var e = "trigger_activated" === this.eventTriggerStatus || "trigger_activated" === this.urlTriggerStatus
              , t = "trigger_pending" === this.eventTriggerStatus || "trigger_pending" === this.urlTriggerStatus;
            return e ? "trigger_activated" : t ? "trigger_pending" : "trigger_disabled"
        }
        constructor(e) {
            if (j(this, "queuedRRWebEvents", []),
            j(this, "isIdle", !1),
            j(this, "_linkedFlagSeen", !1),
            j(this, "_lastActivityTimestamp", Date.now()),
            j(this, "_linkedFlag", null),
            j(this, "_removePageViewCaptureHook", void 0),
            j(this, "_onSessionIdListener", void 0),
            j(this, "_persistDecideOnSessionListener", void 0),
            j(this, "_samplingSessionListener", void 0),
            j(this, "_urlTriggers", []),
            j(this, "_urlBlocklist", []),
            j(this, "_urlBlocked", !1),
            j(this, "_eventTriggers", []),
            j(this, "_removeEventTriggerCaptureHook", void 0),
            j(this, "_forceAllowLocalhostNetworkCapture", !1),
            j(this, "_onBeforeUnload", ( () => {
                this._flushBuffer()
            }
            )),
            j(this, "_onOffline", ( () => {
                this._tryAddCustomEvent("browser offline", {})
            }
            )),
            j(this, "_onOnline", ( () => {
                this._tryAddCustomEvent("browser online", {})
            }
            )),
            j(this, "_onVisibilityChange", ( () => {
                if (null != a && a.visibilityState) {
                    var e = "window " + a.visibilityState;
                    this._tryAddCustomEvent(e, {})
                }
            }
            )),
            this.instance = e,
            this._captureStarted = !1,
            this._endpoint = "/s/",
            this.stopRrweb = void 0,
            this.receivedDecide = !1,
            !this.instance.sessionManager)
                throw Jn.error("started without valid sessionManager"),
                new Error(Gn + " started without valid sessionManager. This is a bug.");
            if (this.instance.config.__preview_experimental_cookieless_mode)
                throw new Error(Gn + " cannot be used with __preview_experimental_cookieless_mode.");
            var {sessionId: t, windowId: i} = this.sessionManager.checkAndGetSessionAndWindowId();
            this.sessionId = t,
            this.windowId = i,
            this.buffer = this.clearBuffer(),
            this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && Jn.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds, ") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs, "). Session will never be detected as idle"))
        }
        startIfEnabledOrStop(e) {
            this.isRecordingEnabled ? (this._startCapture(e),
            null == t || t.addEventListener("beforeunload", this._onBeforeUnload),
            null == t || t.addEventListener("offline", this._onOffline),
            null == t || t.addEventListener("online", this._onOnline),
            null == t || t.addEventListener("visibilitychange", this._onVisibilityChange),
            this._setupSampling(),
            this._addEventTriggerListener(),
            $(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance.on("eventCaptured", (e => {
                try {
                    if ("$pageview" === e.event) {
                        var t = null != e && e.properties.$current_url ? this._maskUrl(null == e ? void 0 : e.properties.$current_url) : "";
                        if (!t)
                            return;
                        this._tryAddCustomEvent("$pageview", {
                            href: t
                        })
                    }
                } catch (e) {
                    Jn.error("Could not add $pageview to rrweb session", e)
                }
            }
            ))),
            this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId(( (e, t, i) => {
                var n, r, s, o;
                i && (this._tryAddCustomEvent("$session_id_change", {
                    sessionId: e,
                    windowId: t,
                    changeReason: i
                }),
                null === (n = this.instance) || void 0 === n || null === (r = n.persistence) || void 0 === r || r.unregister(Se),
                null === (s = this.instance) || void 0 === s || null === (o = s.persistence) || void 0 === o || o.unregister(we))
            }
            )))) : this.stopRecording()
        }
        stopRecording() {
            var e, i, n, r;
            this._captureStarted && this.stopRrweb && (this.stopRrweb(),
            this.stopRrweb = void 0,
            this._captureStarted = !1,
            null == t || t.removeEventListener("beforeunload", this._onBeforeUnload),
            null == t || t.removeEventListener("offline", this._onOffline),
            null == t || t.removeEventListener("online", this._onOnline),
            null == t || t.removeEventListener("visibilitychange", this._onVisibilityChange),
            this.clearBuffer(),
            clearInterval(this._fullSnapshotTimer),
            null === (e = this._removePageViewCaptureHook) || void 0 === e || e.call(this),
            this._removePageViewCaptureHook = void 0,
            null === (i = this._removeEventTriggerCaptureHook) || void 0 === i || i.call(this),
            this._removeEventTriggerCaptureHook = void 0,
            null === (n = this._onSessionIdListener) || void 0 === n || n.call(this),
            this._onSessionIdListener = void 0,
            null === (r = this._samplingSessionListener) || void 0 === r || r.call(this),
            this._samplingSessionListener = void 0,
            Jn.info("stopped"))
        }
        makeSamplingDecision(e) {
            var t, i = this.sessionId !== e, n = this.sampleRate;
            if (O(n)) {
                var r, s = this.isSampled, o = i || !M(s);
                if (o)
                    r = Math.random() < n;
                else
                    r = s;
                o && (r ? this._reportStarted("sampled") : Jn.warn("Sample rate (".concat(n, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")),
                this._tryAddCustomEvent("samplingDecisionMade", {
                    sampleRate: n,
                    isSampled: r
                })),
                null === (t = this.instance.persistence) || void 0 === t || t.register({
                    [ye]: r
                })
            } else {
                var a;
                null === (a = this.instance.persistence) || void 0 === a || a.register({
                    [ye]: null
                })
            }
        }
        onRemoteConfig(e) {
            var t, i, n, r, s, o;
            (this._tryAddCustomEvent("$remote_config_received", e),
            this._persistRemoteConfig(e),
            this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null,
            null !== (i = e.sessionRecording) && void 0 !== i && i.endpoint) && (this._endpoint = null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.endpoint);
            if (this._setupSampling(),
            !$(this._linkedFlag) && !this._linkedFlagSeen) {
                var a = F(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag
                  , l = F(this._linkedFlag) ? null : this._linkedFlag.variant;
                this.instance.onFeatureFlags(( (e, t) => {
                    var i = I(t) && a in t
                      , n = l ? t[a] === l : i;
                    n && this._reportStarted("linked_flag_matched", {
                        linkedFlag: a,
                        linkedVariant: l
                    }),
                    this._linkedFlagSeen = n
                }
                ))
            }
            null !== (n = e.sessionRecording) && void 0 !== n && n.urlTriggers && (this._urlTriggers = e.sessionRecording.urlTriggers),
            null !== (r = e.sessionRecording) && void 0 !== r && r.urlBlocklist && (this._urlBlocklist = e.sessionRecording.urlBlocklist),
            null !== (s = e.sessionRecording) && void 0 !== s && s.eventTriggers && (this._eventTriggers = e.sessionRecording.eventTriggers),
            this.receivedDecide = !0,
            this.startIfEnabledOrStop()
        }
        _setupSampling() {
            O(this.sampleRate) && $(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId((e => {
                this.makeSamplingDecision(e)
            }
            )))
        }
        _persistRemoteConfig(e) {
            if (this.instance.persistence) {
                var t, i = this.instance.persistence, n = () => {
                    var t, n, r, s, o, a, l, u, c = null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.sampleRate, d = $(c) ? null : parseFloat(c), h = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.minimumDurationMilliseconds;
                    i.register({
                        [he]: !!e.sessionRecording,
                        [_e]: null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.consoleLogRecordingEnabled,
                        [pe]: z({
                            capturePerformance: e.capturePerformance
                        }, null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.networkPayloadCapture),
                        [ve]: {
                            enabled: null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.recordCanvas,
                            fps: null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.canvasFps,
                            quality: null === (l = e.sessionRecording) || void 0 === l ? void 0 : l.canvasQuality
                        },
                        [ge]: d,
                        [fe]: P(h) ? null : h,
                        [me]: null === (u = e.sessionRecording) || void 0 === u ? void 0 : u.scriptConfig
                    })
                }
                ;
                n(),
                null === (t = this._persistDecideOnSessionListener) || void 0 === t || t.call(this),
                this._persistDecideOnSessionListener = this.sessionManager.onSessionId(n)
            }
        }
        log(e) {
            var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
                type: 6,
                data: {
                    plugin: "rrweb/console@1",
                    payload: {
                        level: i,
                        trace: [],
                        payload: [JSON.stringify(e)]
                    }
                },
                timestamp: Date.now()
            })
        }
        _startCapture(e) {
            if (!P(Object.assign) && !P(Array.from) && !(this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut())) {
                var t, i;
                if (this._captureStarted = !0,
                this.sessionManager.checkAndGetSessionAndWindowId(),
                this.rrwebRecord)
                    this._onScriptLoaded();
                else
                    null === (t = _.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, this.scriptName, (e => {
                        if (e)
                            return Jn.error("could not load recorder", e);
                        this._onScriptLoaded()
                    }
                    ));
                Jn.info("starting"),
                "active" === this.status && this._reportStarted(e || "recording_initialized")
            }
        }
        get scriptName() {
            var e, t, i;
            return (null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t || null === (i = t.get_property(me)) || void 0 === i ? void 0 : i.script) || "recorder"
        }
        isInteractiveEvent(e) {
            var t;
            return 3 === e.type && -1 !== Kn.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
        }
        _updateWindowAndSessionIds(e) {
            var t = this.isInteractiveEvent(e);
            t || this.isIdle || e.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = !0,
            clearInterval(this._fullSnapshotTimer),
            this._tryAddCustomEvent("sessionIdle", {
                eventTimestamp: e.timestamp,
                lastActivityTimestamp: this._lastActivityTimestamp,
                threshold: this.sessionIdleThresholdMilliseconds,
                bufferLength: this.buffer.data.length,
                bufferSize: this.buffer.size
            }),
            this._flushBuffer());
            var i = !1;
            if (t && (this._lastActivityTimestamp = e.timestamp,
            this.isIdle && (this.isIdle = !1,
            this._tryAddCustomEvent("sessionNoLongerIdle", {
                reason: "user activity",
                type: e.type
            }),
            i = !0)),
            !this.isIdle) {
                var {windowId: n, sessionId: r} = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp)
                  , s = this.sessionId !== r
                  , o = this.windowId !== n;
                this.windowId = n,
                this.sessionId = r,
                s || o ? (this.stopRecording(),
                this.startIfEnabledOrStop("session_id_changed")) : i && this._scheduleFullSnapshot()
            }
        }
        _tryRRWebMethod(e) {
            try {
                return e.rrwebMethod(),
                !0
            } catch (t) {
                return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
                    enqueuedAt: e.enqueuedAt || Date.now(),
                    attempt: e.attempt++,
                    rrwebMethod: e.rrwebMethod
                }) : Jn.warn("could not emit queued rrweb event.", t, e),
                !1
            }
        }
        _tryAddCustomEvent(e, t) {
            return this._tryRRWebMethod(Xn(( () => this.rrwebRecord.addCustomEvent(e, t))))
        }
        _tryTakeFullSnapshot() {
            return this._tryRRWebMethod(Xn(( () => this.rrwebRecord.takeFullSnapshot())))
        }
        _onScriptLoaded() {
            var e, t = {
                blockClass: "ph-no-capture",
                blockSelector: void 0,
                ignoreClass: "ph-ignore-input",
                maskTextClass: "ph-mask",
                maskTextSelector: void 0,
                maskTextFn: void 0,
                maskAllInputs: !0,
                maskInputOptions: {
                    password: !0
                },
                maskInputFn: void 0,
                slimDOMOptions: {},
                collectFonts: !1,
                inlineStylesheet: !0,
                recordCrossOriginIframes: !1
            }, i = this.instance.config.session_recording;
            for (var [n,r] of Object.entries(i || {}))
                n in t && ("maskInputOptions" === n ? t.maskInputOptions = z({
                    password: !0
                }, r) : t[n] = r);
            if (this.canvasRecording && this.canvasRecording.enabled && (t.recordCanvas = !0,
            t.sampling = {
                canvas: this.canvasRecording.fps
            },
            t.dataURLOptions = {
                type: "image/webp",
                quality: this.canvasRecording.quality
            }),
            this.rrwebRecord) {
                this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new ln(this.rrwebRecord,{
                    refillRate: this.instance.config.session_recording.__mutationRateLimiterRefillRate,
                    bucketSize: this.instance.config.session_recording.__mutationRateLimiterBucketSize,
                    onBlockedNode: (e, t) => {
                        var i = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
                        Jn.info(i, {
                            node: t
                        }),
                        this.log(Gn + " " + i, "warn")
                    }
                });
                var s = this._gatherRRWebPlugins();
                this.stopRrweb = this.rrwebRecord(z({
                    emit: e => {
                        this.onRRwebEmit(e)
                    }
                    ,
                    plugins: s
                }, t)),
                this._lastActivityTimestamp = Date.now(),
                this.isIdle = !1,
                this._tryAddCustomEvent("$session_options", {
                    sessionRecordingOptions: t,
                    activePlugins: s.map((e => null == e ? void 0 : e.name))
                }),
                this._tryAddCustomEvent("$posthog_config", {
                    config: this.instance.config
                })
            } else
                Jn.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
        }
        _scheduleFullSnapshot() {
            if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer),
            !this.isIdle) {
                var e = this.fullSnapshotIntervalMillis;
                e && (this._fullSnapshotTimer = setInterval(( () => {
                    this._tryTakeFullSnapshot()
                }
                ), e))
            }
        }
        _gatherRRWebPlugins() {
            var e, t, i, n, r = [], s = null === (e = _.__PosthogExtensions__) || void 0 === e || null === (t = e.rrwebPlugins) || void 0 === t ? void 0 : t.getRecordConsolePlugin;
            s && this.isConsoleLogCaptureEnabled && r.push(s());
            var o = null === (i = _.__PosthogExtensions__) || void 0 === i || null === (n = i.rrwebPlugins) || void 0 === n ? void 0 : n.getRecordNetworkPlugin;
            this.networkPayloadCapture && x(o) && (!_t.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? r.push(o(on(this.instance.config, this.networkPayloadCapture))) : Jn.info("NetworkCapture not started because we are on localhost."));
            return r
        }
        onRRwebEmit(e) {
            var t;
            if (this._processQueuedEvents(),
            e && I(e)) {
                if (e.type === wi.Meta) {
                    var i = this._maskUrl(e.data.href);
                    if (this._lastHref = i,
                    !i)
                        return;
                    e.data.href = i
                } else
                    this._pageViewFallBack();
                if (this._checkUrlTriggerConditions(),
                "paused" !== this.status || function(e) {
                    return e.type === wi.Custom && "recording paused" === e.data.tag
                }(e)) {
                    e.type === wi.FullSnapshot && this._scheduleFullSnapshot(),
                    e.type === wi.FullSnapshot && "trigger_pending" === this.triggerStatus && this.clearBuffer();
                    var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
                    if (n) {
                        var r = function(e) {
                            var t = e;
                            if (t && I(t) && 6 === t.type && I(t.data) && "rrweb/console@1" === t.data.plugin) {
                                t.data.payload.payload.length > 10 && (t.data.payload.payload = t.data.payload.payload.slice(0, 10),
                                t.data.payload.payload.push("...[truncated]"));
                                for (var i = [], n = 0; n < t.data.payload.payload.length; n++)
                                    t.data.payload.payload[n] && t.data.payload.payload[n].length > 2e3 ? i.push(t.data.payload.payload[n].slice(0, 2e3) + "...[truncated]") : i.push(t.data.payload.payload[n]);
                                return t.data.payload.payload = i,
                                e
                            }
                            return e
                        }(n);
                        if (this._updateWindowAndSessionIds(r),
                        !this.isIdle || Zn(r)) {
                            if (Zn(r)) {
                                var s = r.data.payload;
                                if (s) {
                                    var o = s.lastActivityTimestamp
                                      , a = s.threshold;
                                    r.timestamp = o + a
                                }
                            }
                            var l = null === (t = this.instance.config.session_recording.compress_events) || void 0 === t || t ? function(e) {
                                if (bi(e) < 1024)
                                    return e;
                                try {
                                    if (e.type === wi.FullSnapshot)
                                        return z(z({}, e), {}, {
                                            data: Qn(e.data),
                                            cv: "2024-10"
                                        });
                                    if (e.type === wi.IncrementalSnapshot && e.data.source === Si.Mutation)
                                        return z(z({}, e), {}, {
                                            cv: "2024-10",
                                            data: z(z({}, e.data), {}, {
                                                texts: Qn(e.data.texts),
                                                attributes: Qn(e.data.attributes),
                                                removes: Qn(e.data.removes),
                                                adds: Qn(e.data.adds)
                                            })
                                        });
                                    if (e.type === wi.IncrementalSnapshot && e.data.source === Si.StyleSheetRule)
                                        return z(z({}, e), {}, {
                                            cv: "2024-10",
                                            data: z(z({}, e.data), {}, {
                                                adds: Qn(e.data.adds),
                                                removes: Qn(e.data.removes)
                                            })
                                        })
                                } catch (e) {
                                    Jn.error("could not compress event - will use uncompressed event", e)
                                }
                                return e
                            }(r) : r
                              , u = {
                                $snapshot_bytes: bi(l),
                                $snapshot_data: l,
                                $session_id: this.sessionId,
                                $window_id: this.windowId
                            };
                            "disabled" !== this.status ? this._captureSnapshotBuffered(u) : this.clearBuffer()
                        }
                    }
                }
            }
        }
        _pageViewFallBack() {
            if (!this.instance.config.capture_pageview && t) {
                var e = this._maskUrl(t.location.href);
                this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
                    href: e
                }),
                this._lastHref = e)
            }
        }
        _processQueuedEvents() {
            if (this.queuedRRWebEvents.length) {
                var e = [...this.queuedRRWebEvents];
                this.queuedRRWebEvents = [],
                e.forEach((e => {
                    Date.now() - e.enqueuedAt <= 2e3 && this._tryRRWebMethod(e)
                }
                ))
            }
        }
        _maskUrl(e) {
            var t = this.instance.config.session_recording;
            if (t.maskNetworkRequestFn) {
                var i, n = {
                    url: e
                };
                return null === (i = n = t.maskNetworkRequestFn(n)) || void 0 === i ? void 0 : i.url
            }
            return e
        }
        clearBuffer() {
            return this.buffer = {
                size: 0,
                data: [],
                sessionId: this.sessionId,
                windowId: this.windowId
            },
            this.buffer
        }
        _flushBuffer() {
            this.flushBufferTimer && (clearTimeout(this.flushBufferTimer),
            this.flushBufferTimer = void 0);
            var e = this.minimumDuration
              , t = this.sessionDuration
              , i = O(t) && t >= 0
              , n = O(e) && i && t < e;
            if ("buffering" === this.status || "paused" === this.status || n)
                return this.flushBufferTimer = setTimeout(( () => {
                    this._flushBuffer()
                }
                ), 2e3),
                this.buffer;
            this.buffer.data.length > 0 && yi(this.buffer).forEach((e => {
                this._captureSnapshot({
                    $snapshot_bytes: e.size,
                    $snapshot_data: e.data,
                    $session_id: e.sessionId,
                    $window_id: e.windowId,
                    $lib: "web",
                    $lib_version: p.LIB_VERSION
                })
            }
            ));
            return this.clearBuffer()
        }
        _captureSnapshotBuffered(e) {
            var t, i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
            !this.isIdle && (this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()),
            this.buffer.size += e.$snapshot_bytes,
            this.buffer.data.push(e.$snapshot_data),
            this.flushBufferTimer || this.isIdle || (this.flushBufferTimer = setTimeout(( () => {
                this._flushBuffer()
            }
            ), 2e3))
        }
        _captureSnapshot(e) {
            this.instance.capture("$snapshot", e, {
                _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
                _noTruncate: !0,
                _batchKey: "recordings",
                skip_client_rate_limiting: !0
            })
        }
        _checkUrlTriggerConditions() {
            if (void 0 !== t && t.location.href) {
                var e = t.location.href
                  , i = "paused" === this.status
                  , n = er(e, this._urlBlocklist);
                n && !i ? this._pauseRecording() : !n && i && this._resumeRecording(),
                er(e, this._urlTriggers) && this._activateTrigger("url")
            }
        }
        _activateTrigger(e) {
            var t, i;
            "trigger_pending" === this.triggerStatus && (null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
                ["url" === e ? we : Se]: this.sessionId
            }),
            this._flushBuffer(),
            this._reportStarted(e + "_trigger_matched"))
        }
        _pauseRecording() {
            "paused" !== this.status && (this._urlBlocked = !0,
            clearInterval(this._fullSnapshotTimer),
            Jn.info("recording paused due to URL blocker"),
            this._tryAddCustomEvent("recording paused", {
                reason: "url blocker"
            }))
        }
        _resumeRecording() {
            "paused" === this.status && (this._urlBlocked = !1,
            this._tryTakeFullSnapshot(),
            this._scheduleFullSnapshot(),
            this._tryAddCustomEvent("recording resumed", {
                reason: "left blocked url"
            }),
            Jn.info("recording resumed"))
        }
        _addEventTriggerListener() {
            0 !== this._eventTriggers.length && $(this._removeEventTriggerCaptureHook) && (this._removeEventTriggerCaptureHook = this.instance.on("eventCaptured", (e => {
                try {
                    this._eventTriggers.includes(e.event) && this._activateTrigger("event")
                } catch (e) {
                    Jn.error("Could not activate event trigger", e)
                }
            }
            )))
        }
        overrideLinkedFlag() {
            this._linkedFlagSeen = !0,
            this._tryTakeFullSnapshot(),
            this._reportStarted("linked_flag_overridden")
        }
        overrideSampling() {
            var e;
            null === (e = this.instance.persistence) || void 0 === e || e.register({
                [ye]: !0
            }),
            this._tryTakeFullSnapshot(),
            this._reportStarted("sampling_overridden")
        }
        overrideTrigger(e) {
            this._activateTrigger(e)
        }
        _reportStarted(e, t) {
            this.instance.register_for_session({
                $session_recording_start_reason: e
            }),
            Jn.info(e.replace("_", " "), t),
            f(["recording_initialized", "session_id_changed"], e) || this._tryAddCustomEvent(e, t)
        }
    }
    var ir = q("[RemoteConfig]");
    class nr {
        constructor(e) {
            this.instance = e
        }
        get remoteConfig() {
            var e, t;
            return null === (e = _._POSTHOG_REMOTE_CONFIG) || void 0 === e || null === (t = e[this.instance.config.token]) || void 0 === t ? void 0 : t.config
        }
        _loadRemoteConfigJs(e) {
            var t, i, n;
            null !== (t = _.__PosthogExtensions__) && void 0 !== t && t.loadExternalDependency ? null === (i = _.__PosthogExtensions__) || void 0 === i || null === (n = i.loadExternalDependency) || void 0 === n || n.call(i, this.instance, "remote-config", ( () => e(this.remoteConfig))) : (ir.error("PostHog Extensions not found. Cannot load remote config."),
            e())
        }
        _loadRemoteConfigJSON(e) {
            this.instance._send_request({
                method: "GET",
                url: this.instance.requestRouter.endpointFor("assets", "/array/".concat(this.instance.config.token, "/config")),
                callback: t => {
                    e(t.json)
                }
            })
        }
        load() {
            try {
                if (this.remoteConfig)
                    return ir.info("Using preloaded remote config", this.remoteConfig),
                    void this.onRemoteConfig(this.remoteConfig);
                if (this.instance.config.advanced_disable_decide)
                    return void ir.warn("Remote config is disabled. Falling back to local config.");
                this._loadRemoteConfigJs((e => {
                    if (!e)
                        return ir.info("No config found after loading remote JS config. Falling back to JSON."),
                        void this._loadRemoteConfigJSON((e => {
                            this.onRemoteConfig(e)
                        }
                        ));
                    this.onRemoteConfig(e)
                }
                ))
            } catch (e) {
                ir.error("Error loading remote config", e)
            }
        }
        onRemoteConfig(e) {
            e ? this.instance.config.__preview_remote_config ? (this.instance._onRemoteConfig(e),
            !1 !== e.hasFeatureFlags && this.instance.featureFlags.ensureFlagsLoaded()) : ir.info("__preview_remote_config is disabled. Logging config instead", e) : ir.error("Failed to fetch remote config from PostHog.")
        }
    }
    var rr, sr = null != t && t.location ? mt(t.location.hash, "__posthog") || mt(location.hash, "state") : null, or = "_postHogToolbarParams", ar = q("[Toolbar]");
    !function(e) {
        e[e.UNINITIALIZED = 0] = "UNINITIALIZED",
        e[e.LOADING = 1] = "LOADING",
        e[e.LOADED = 2] = "LOADED"
    }(rr || (rr = {}));
    class lr {
        constructor(e) {
            this.instance = e
        }
        setToolbarState(e) {
            _.ph_toolbar_state = e
        }
        getToolbarState() {
            var e;
            return null !== (e = _.ph_toolbar_state) && void 0 !== e ? e : rr.UNINITIALIZED
        }
        maybeLoadToolbar() {
            var e, i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            if (!t || !a)
                return !1;
            n = null !== (e = n) && void 0 !== e ? e : t.location,
            s = null !== (i = s) && void 0 !== i ? i : t.history;
            try {
                if (!r) {
                    try {
                        t.localStorage.setItem("test", "test"),
                        t.localStorage.removeItem("test")
                    } catch (e) {
                        return !1
                    }
                    r = null == t ? void 0 : t.localStorage
                }
                var o, l = sr || mt(n.hash, "__posthog") || mt(n.hash, "state"), u = l ? X(( () => JSON.parse(atob(decodeURIComponent(l))))) || X(( () => JSON.parse(decodeURIComponent(l)))) : null;
                return u && "ph_authorize" === u.action ? ((o = u).source = "url",
                o && Object.keys(o).length > 0 && (u.desiredHash ? n.hash = u.desiredHash : s ? s.replaceState(s.state, "", n.pathname + n.search) : n.hash = "")) : ((o = JSON.parse(r.getItem(or) || "{}")).source = "localstorage",
                delete o.userIntent),
                !(!o.token || this.instance.config.token !== o.token) && (this.loadToolbar(o),
                !0)
            } catch (e) {
                return !1
            }
        }
        _callLoadToolbar(e) {
            var t = _.ph_load_toolbar || _.ph_load_editor;
            !$(t) && x(t) ? t(e, this.instance) : ar.warn("No toolbar load function found")
        }
        loadToolbar(e) {
            var i = !(null == a || !a.getElementById(De));
            if (!t || i)
                return !1;
            var n = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics
              , r = z(z({
                token: this.instance.config.token
            }, e), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
            }, n ? {
                instrument: !1
            } : {});
            if (t.localStorage.setItem(or, JSON.stringify(z(z({}, r), {}, {
                source: void 0
            }))),
            this.getToolbarState() === rr.LOADED)
                this._callLoadToolbar(r);
            else if (this.getToolbarState() === rr.UNINITIALIZED) {
                var s, o;
                this.setToolbarState(rr.LOADING),
                null === (s = _.__PosthogExtensions__) || void 0 === s || null === (o = s.loadExternalDependency) || void 0 === o || o.call(s, this.instance, "toolbar", (e => {
                    if (e)
                        return ar.error("[Toolbar] Failed to load", e),
                        void this.setToolbarState(rr.UNINITIALIZED);
                    this.setToolbarState(rr.LOADED),
                    this._callLoadToolbar(r)
                }
                )),
                te(t, "turbolinks:load", ( () => {
                    this.setToolbarState(rr.UNINITIALIZED),
                    this.loadToolbar(r)
                }
                ))
            }
            return !0
        }
        _loadEditor(e) {
            return this.loadToolbar(e)
        }
        maybeLoadEditor() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(e, t, i)
        }
    }
    class ur {
        constructor(e) {
            j(this, "isPaused", !0),
            j(this, "queue", []),
            j(this, "flushTimeoutMs", 3e3),
            this.sendRequest = e
        }
        enqueue(e) {
            this.queue.push(e),
            this.flushTimeout || this.setFlushTimeout()
        }
        unload() {
            this.clearFlushTimeout();
            var e = this.queue.length > 0 ? this.formatQueue() : {}
              , t = Object.values(e)
              , i = [...t.filter((e => 0 === e.url.indexOf("/e"))), ...t.filter((e => 0 !== e.url.indexOf("/e")))];
            i.map((e => {
                this.sendRequest(z(z({}, e), {}, {
                    transport: "sendBeacon"
                }))
            }
            ))
        }
        enable() {
            this.isPaused = !1,
            this.setFlushTimeout()
        }
        setFlushTimeout() {
            var e = this;
            this.isPaused || (this.flushTimeout = setTimeout(( () => {
                if (this.clearFlushTimeout(),
                this.queue.length > 0) {
                    var t = this.formatQueue()
                      , i = function(i) {
                        var n = t[i]
                          , r = (new Date).getTime();
                        n.data && k(n.data) && J(n.data, (e => {
                            e.offset = Math.abs(e.timestamp - r),
                            delete e.timestamp
                        }
                        )),
                        e.sendRequest(n)
                    };
                    for (var n in t)
                        i(n)
                }
            }
            ), this.flushTimeoutMs))
        }
        clearFlushTimeout() {
            clearTimeout(this.flushTimeout),
            this.flushTimeout = void 0
        }
        formatQueue() {
            var e = {};
            return J(this.queue, (t => {
                var i, n = t, r = (n ? n.batchKey : null) || n.url;
                P(e[r]) && (e[r] = z(z({}, n), {}, {
                    data: []
                })),
                null === (i = e[r].data) || void 0 === i || i.push(n.data)
            }
            )),
            this.queue = [],
            e
        }
    }
    var cr = function(e) {
        var t, i, n, r, s = "";
        for (t = i = 0,
        n = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length,
        r = 0; r < n; r++) {
            var o = e.charCodeAt(r)
              , a = null;
            o < 128 ? i++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128),
            T(a) || (i > t && (s += e.substring(t, i)),
            s += a,
            t = i = r + 1)
        }
        return i > t && (s += e.substring(t, e.length)),
        s
    }
      , dr = !!c || !!u
      , hr = "text/plain"
      , _r = (e, t) => {
        var [i,n] = e.split("?")
          , r = z({}, t);
        null == n || n.split("&").forEach((e => {
            var [t] = e.split("=");
            delete r[t]
        }
        ));
        var s = gt(r);
        return s = s ? (n ? n + "&" : "") + s : n,
        "".concat(i, "?").concat(s)
    }
      , pr = (e, t) => JSON.stringify(e, ( (e, t) => "bigint" == typeof t ? t.toString() : t), t)
      , vr = t => {
        var {data: i, compression: n} = t;
        if (i) {
            if (n === e.GZipJS) {
                var r = Wn(Vn(pr(i)), {
                    mtime: 0
                })
                  , s = new Blob([r],{
                    type: hr
                });
                return {
                    contentType: hr,
                    body: s,
                    estimatedSize: s.size
                }
            }
            if (n === e.Base64) {
                var o = function(e) {
                    var t, i, n, r, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, l = 0, u = "", c = [];
                    if (!e)
                        return e;
                    e = cr(e);
                    do {
                        t = (s = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63,
                        i = s >> 12 & 63,
                        n = s >> 6 & 63,
                        r = 63 & s,
                        c[l++] = o.charAt(t) + o.charAt(i) + o.charAt(n) + o.charAt(r)
                    } while (a < e.length);
                    switch (u = c.join(""),
                    e.length % 3) {
                    case 1:
                        u = u.slice(0, -2) + "==";
                        break;
                    case 2:
                        u = u.slice(0, -1) + "="
                    }
                    return u
                }(pr(i))
                  , a = (e => "data=" + encodeURIComponent("string" == typeof e ? e : pr(e)))(o);
                return {
                    contentType: "application/x-www-form-urlencoded",
                    body: a,
                    estimatedSize: new Blob([a]).size
                }
            }
            var l = pr(i);
            return {
                contentType: "application/json",
                body: l,
                estimatedSize: new Blob([l]).size
            }
        }
    }
      , gr = [];
    u && gr.push({
        transport: "fetch",
        method: e => {
            var t, i, {contentType: n, body: r, estimatedSize: s} = null !== (t = vr(e)) && void 0 !== t ? t : {}, o = new Headers;
            J(e.headers, (function(e, t) {
                o.append(t, e)
            }
            )),
            n && o.append("Content-Type", n);
            var a = e.url
              , l = null;
            if (d) {
                var c = new d;
                l = {
                    signal: c.signal,
                    timeout: setTimeout(( () => c.abort()), e.timeout)
                }
            }
            u(a, z({
                method: (null == e ? void 0 : e.method) || "GET",
                headers: o,
                keepalive: "POST" === e.method && (s || 0) < 52428.8,
                body: r,
                signal: null === (i = l) || void 0 === i ? void 0 : i.signal
            }, e.fetchOptions)).then((t => t.text().then((i => {
                var n, r = {
                    statusCode: t.status,
                    text: i
                };
                if (200 === t.status)
                    try {
                        r.json = JSON.parse(i)
                    } catch (e) {
                        N.error(e)
                    }
                null === (n = e.callback) || void 0 === n || n.call(e, r)
            }
            )))).catch((t => {
                var i;
                N.error(t),
                null === (i = e.callback) || void 0 === i || i.call(e, {
                    statusCode: 0,
                    text: t
                })
            }
            )).finally(( () => l ? clearTimeout(l.timeout) : null))
        }
    }),
    c && gr.push({
        transport: "XHR",
        method: e => {
            var t, i = new c;
            i.open(e.method || "GET", e.url, !0);
            var {contentType: n, body: r} = null !== (t = vr(e)) && void 0 !== t ? t : {};
            J(e.headers, (function(e, t) {
                i.setRequestHeader(t, e)
            }
            )),
            n && i.setRequestHeader("Content-Type", n),
            e.timeout && (i.timeout = e.timeout),
            i.withCredentials = !0,
            i.onreadystatechange = () => {
                if (4 === i.readyState) {
                    var t, n = {
                        statusCode: i.status,
                        text: i.responseText
                    };
                    if (200 === i.status)
                        try {
                            n.json = JSON.parse(i.responseText)
                        } catch (e) {}
                    null === (t = e.callback) || void 0 === t || t.call(e, n)
                }
            }
            ,
            i.send(r)
        }
    }),
    null != o && o.sendBeacon && gr.push({
        transport: "sendBeacon",
        method: e => {
            var t = _r(e.url, {
                beacon: "1"
            });
            try {
                var i, {contentType: n, body: r} = null !== (i = vr(e)) && void 0 !== i ? i : {}, s = "string" == typeof r ? new Blob([r],{
                    type: n
                }) : r;
                o.sendBeacon(t, s)
            } catch (e) {}
        }
    });
    var fr = ["retriesPerformedSoFar"];
    class mr {
        constructor(e) {
            j(this, "isPolling", !1),
            j(this, "pollIntervalMs", 3e3),
            j(this, "queue", []),
            this.instance = e,
            this.queue = [],
            this.areWeOnline = !0,
            !P(t) && "onLine"in t.navigator && (this.areWeOnline = t.navigator.onLine,
            t.addEventListener("online", ( () => {
                this.areWeOnline = !0,
                this.flush()
            }
            )),
            t.addEventListener("offline", ( () => {
                this.areWeOnline = !1
            }
            )))
        }
        retriableRequest(e) {
            var {retriesPerformedSoFar: t} = e
              , i = W(e, fr);
            O(t) && t > 0 && (i.url = _r(i.url, {
                retry_count: t
            })),
            this.instance._send_request(z(z({}, i), {}, {
                callback: e => {
                    var n;
                    200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != t ? t : 0) < 10 ? this.enqueue(z({
                        retriesPerformedSoFar: t
                    }, i)) : null === (n = i.callback) || void 0 === n || n.call(i, e)
                }
            }))
        }
        enqueue(e) {
            var t = e.retriesPerformedSoFar || 0;
            e.retriesPerformedSoFar = t + 1;
            var i = function(e) {
                var t = 3e3 * Math.pow(2, e)
                  , i = t / 2
                  , n = Math.min(18e5, t)
                  , r = (Math.random() - .5) * (n - i);
                return Math.ceil(n + r)
            }(t)
              , n = Date.now() + i;
            this.queue.push({
                retryAt: n,
                requestOptions: e
            });
            var r = "Enqueued failed request for retry in ".concat(i);
            navigator.onLine || (r += " (Browser is offline)"),
            N.warn(r),
            this.isPolling || (this.isPolling = !0,
            this.poll())
        }
        poll() {
            this.poller && clearTimeout(this.poller),
            this.poller = setTimeout(( () => {
                this.areWeOnline && this.queue.length > 0 && this.flush(),
                this.poll()
            }
            ), this.pollIntervalMs)
        }
        flush() {
            var e = Date.now()
              , t = []
              , i = this.queue.filter((i => i.retryAt < e || (t.push(i),
            !1)));
            if (this.queue = t,
            i.length > 0)
                for (var {requestOptions: n} of i)
                    this.retriableRequest(n)
        }
        unload() {
            for (var {requestOptions: e} of (this.poller && (clearTimeout(this.poller),
            this.poller = void 0),
            this.queue))
                try {
                    this.instance._send_request(z(z({}, e), {}, {
                        transport: "sendBeacon"
                    }))
                } catch (e) {
                    N.error(e)
                }
            this.queue = []
        }
    }
    var br, yr = q("[SessionId]");
    class wr {
        constructor(e, t, i) {
            var n;
            if (j(this, "_sessionIdChangedHandlers", []),
            !e.persistence)
                throw new Error("SessionIdManager requires a PostHogPersistence instance");
            if (e.config.__preview_experimental_cookieless_mode)
                throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode");
            this.config = e.config,
            this.persistence = e.persistence,
            this._windowId = void 0,
            this._sessionId = void 0,
            this._sessionStartTimestamp = null,
            this._sessionActivityTimestamp = null,
            this._sessionIdGenerator = t || Qe,
            this._windowIdGenerator = i || Qe;
            var r = this.config.persistence_name || this.config.token
              , s = this.config.session_idle_timeout_seconds || 1800;
            if (this._sessionTimeoutMs = 1e3 * an(s, 60, 36e3, "session_idle_timeout_seconds", 1800),
            e.register({
                $configured_session_timeout_ms: this._sessionTimeoutMs
            }),
            this.resetIdleTimer(),
            this._window_id_storage_key = "ph_" + r + "_window_id",
            this._primary_window_exists_storage_key = "ph_" + r + "_primary_window_exists",
            this._canUseSessionStorage()) {
                var o = ht.parse(this._window_id_storage_key)
                  , a = ht.parse(this._primary_window_exists_storage_key);
                o && !a ? this._windowId = o : ht.remove(this._window_id_storage_key),
                ht.set(this._primary_window_exists_storage_key, !0)
            }
            if (null !== (n = this.config.bootstrap) && void 0 !== n && n.sessionID)
                try {
                    var l = (e => {
                        var t = e.replace(/-/g, "");
                        if (32 !== t.length)
                            throw new Error("Not a valid UUID");
                        if ("7" !== t[12])
                            throw new Error("Not a UUIDv7");
                        return parseInt(t.substring(0, 12), 16)
                    }
                    )(this.config.bootstrap.sessionID);
                    this._setSessionId(this.config.bootstrap.sessionID, (new Date).getTime(), l)
                } catch (e) {
                    yr.error("Invalid sessionID in bootstrap", e)
                }
            this._listenToReloadWindow()
        }
        get sessionTimeoutMs() {
            return this._sessionTimeoutMs
        }
        onSessionId(e) {
            return P(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []),
            this._sessionIdChangedHandlers.push(e),
            this._sessionId && e(this._sessionId, this._windowId),
            () => {
                this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((t => t !== e))
            }
        }
        _canUseSessionStorage() {
            return "memory" !== this.config.persistence && !this.persistence.disabled && ht.is_supported()
        }
        _setWindowId(e) {
            e !== this._windowId && (this._windowId = e,
            this._canUseSessionStorage() && ht.set(this._window_id_storage_key, e))
        }
        _getWindowId() {
            return this._windowId ? this._windowId : this._canUseSessionStorage() ? ht.parse(this._window_id_storage_key) : null
        }
        _setSessionId(e, t, i) {
            e === this._sessionId && t === this._sessionActivityTimestamp && i === this._sessionStartTimestamp || (this._sessionStartTimestamp = i,
            this._sessionActivityTimestamp = t,
            this._sessionId = e,
            this.persistence.register({
                [be]: [t, e, i]
            }))
        }
        _getSessionId() {
            if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
                return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
            var e = this.persistence.props[be];
            return k(e) && 2 === e.length && e.push(e[0]),
            e || [0, null, 0]
        }
        resetSessionId() {
            this._setSessionId(null, null, null)
        }
        _listenToReloadWindow() {
            null == t || t.addEventListener("beforeunload", ( () => {
                this._canUseSessionStorage() && ht.remove(this._primary_window_exists_storage_key)
            }
            ))
        }
        checkAndGetSessionAndWindowId() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (this.config.__preview_experimental_cookieless_mode)
                throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode");
            var i = t || (new Date).getTime()
              , [n,r,s] = this._getSessionId()
              , o = this._getWindowId()
              , a = O(s) && s > 0 && Math.abs(i - s) > 864e5
              , l = !1
              , u = !r
              , c = !e && Math.abs(i - n) > this.sessionTimeoutMs;
            u || c || a ? (r = this._sessionIdGenerator(),
            o = this._windowIdGenerator(),
            yr.info("new session ID generated", {
                sessionId: r,
                windowId: o,
                changeReason: {
                    noSessionId: u,
                    activityTimeout: c,
                    sessionPastMaximumLength: a
                }
            }),
            s = i,
            l = !0) : o || (o = this._windowIdGenerator(),
            l = !0);
            var d = 0 === n || !e || a ? i : n
              , h = 0 === s ? (new Date).getTime() : s;
            return this._setWindowId(o),
            this._setSessionId(r, d, h),
            e || this.resetIdleTimer(),
            l && this._sessionIdChangedHandlers.forEach((e => e(r, o, l ? {
                noSessionId: u,
                activityTimeout: c,
                sessionPastMaximumLength: a
            } : void 0))),
            {
                sessionId: r,
                windowId: o,
                sessionStartTimestamp: h,
                changeReason: l ? {
                    noSessionId: u,
                    activityTimeout: c,
                    sessionPastMaximumLength: a
                } : void 0,
                lastActivityTimestamp: n
            }
        }
        resetIdleTimer() {
            clearTimeout(this._enforceIdleTimeout),
            this._enforceIdleTimeout = setTimeout(( () => {
                this.resetSessionId()
            }
            ), 1.1 * this.sessionTimeoutMs)
        }
    }
    !function(e) {
        e.US = "us",
        e.EU = "eu",
        e.CUSTOM = "custom"
    }(br || (br = {}));
    var Sr = "i.posthog.com";
    class Er {
        constructor(e) {
            j(this, "_regionCache", {}),
            this.instance = e
        }
        get apiHost() {
            var e = this.instance.config.api_host.trim().replace(/\/$/, "");
            return "https://app.posthog.com" === e ? "https://us.i.posthog.com" : e
        }
        get uiHost() {
            var e, t = null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
            return t || (t = this.apiHost.replace(".".concat(Sr), ".posthog.com")),
            "https://app.posthog.com" === t ? "https://us.posthog.com" : t
        }
        get region() {
            return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = br.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = br.EU : this._regionCache[this.apiHost] = br.CUSTOM),
            this._regionCache[this.apiHost]
        }
        endpointFor(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (t && (t = "/" === t[0] ? t : "/".concat(t)),
            "ui" === e)
                return this.uiHost + t;
            if (this.region === br.CUSTOM)
                return this.apiHost + t;
            var i = Sr + t;
            switch (e) {
            case "assets":
                return "https://".concat(this.region, "-assets.").concat(i);
            case "api":
                return "https://".concat(this.region, ".").concat(i)
            }
        }
    }
    var kr = "posthog-js";
    function xr(e) {
        var {organization: t, projectId: i, prefix: n, severityAllowList: r=["error"]} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return s => {
            var o, a, l, u, c;
            if (!("*" === r || r.includes(s.level)) || !e.__loaded)
                return s;
            s.tags || (s.tags = {});
            var d = e.requestRouter.endpointFor("ui", "/project/".concat(e.config.token, "/person/").concat(e.get_distinct_id()));
            s.tags["PostHog Person URL"] = d,
            e.sessionRecordingStarted() && (s.tags["PostHog Recording URL"] = e.get_session_replay_url({
                withTimestamp: !0
            }));
            var h = (null === (o = s.exception) || void 0 === o ? void 0 : o.values) || [];
            h.map((e => {
                e.stacktrace && (e.stacktrace.type = "raw")
            }
            ));
            var _ = {
                $exception_message: (null === (a = h[0]) || void 0 === a ? void 0 : a.value) || s.message,
                $exception_type: null === (l = h[0]) || void 0 === l ? void 0 : l.type,
                $exception_personURL: d,
                $exception_level: s.level,
                $exception_list: h,
                $sentry_event_id: s.event_id,
                $sentry_exception: s.exception,
                $sentry_exception_message: (null === (u = h[0]) || void 0 === u ? void 0 : u.value) || s.message,
                $sentry_exception_type: null === (c = h[0]) || void 0 === c ? void 0 : c.type,
                $sentry_tags: s.tags
            };
            return t && i && (_.$sentry_url = (n || "https://sentry.io/organizations/") + t + "/issues/?project=" + i + "&query=" + s.event_id),
            e.exceptions.sendExceptionEvent(_),
            s
        }
    }
    class Ir {
        constructor(e, t, i, n, r) {
            this.name = kr,
            this.setupOnce = function(s) {
                s(xr(e, {
                    organization: t,
                    projectId: i,
                    prefix: n,
                    severityAllowList: r
                }))
            }
        }
    }
    var Cr, Pr, Fr, Rr = q("[SegmentIntegration]");
    function Tr(e, t) {
        var i = e.config.segment;
        if (!i)
            return t();
        !function(e, t) {
            var i = e.config.segment;
            if (!i)
                return t();
            var n = i => {
                var n = () => i.anonymousId() || Qe();
                e.config.get_device_id = n,
                i.id() && (e.register({
                    distinct_id: i.id(),
                    $device_id: n()
                }),
                e.persistence.set_property(Re, "identified")),
                t()
            }
              , r = i.user();
            "then"in r && x(r.then) ? r.then((e => n(e))) : n(r)
        }(e, ( () => {
            i.register((e => {
                Promise && Promise.resolve || Rr.warn("This browser does not have Promise support, and can not use the segment integration");
                var t = (t, i) => {
                    var n;
                    if (!i)
                        return t;
                    t.event.userId || t.event.anonymousId === e.get_distinct_id() || (Rr.info("No userId set, resetting PostHog"),
                    e.reset()),
                    t.event.userId && t.event.userId !== e.get_distinct_id() && (Rr.info("UserId set, identifying with PostHog"),
                    e.identify(t.event.userId));
                    var r = e._calculate_event_properties(i, null !== (n = t.event.properties) && void 0 !== n ? n : {}, new Date);
                    return t.event.properties = Object.assign({}, r, t.event.properties),
                    t
                }
                ;
                return {
                    name: "PostHog JS",
                    type: "enrichment",
                    version: "1.0.0",
                    isLoaded: () => !0,
                    load: () => Promise.resolve(),
                    track: e => t(e, e.event.event),
                    page: e => t(e, "$pageview"),
                    identify: e => t(e, "$identify"),
                    screen: e => t(e, "$screen")
                }
            }
            )(e)).then(( () => {
                t()
            }
            ))
        }
        ))
    }
    class $r {
        constructor(e) {
            this._instance = e
        }
        doPageView(e, i) {
            var n, r = this._previousPageViewProperties(e, i);
            return this._currentPageview = {
                pathname: null !== (n = null == t ? void 0 : t.location.pathname) && void 0 !== n ? n : "",
                pageViewId: i,
                timestamp: e
            },
            this._instance.scrollManager.resetContext(),
            r
        }
        doPageLeave(e) {
            var t;
            return this._previousPageViewProperties(e, null === (t = this._currentPageview) || void 0 === t ? void 0 : t.pageViewId)
        }
        doEvent() {
            var e;
            return {
                $pageview_id: null === (e = this._currentPageview) || void 0 === e ? void 0 : e.pageViewId
            }
        }
        _previousPageViewProperties(e, t) {
            var i = this._currentPageview;
            if (!i)
                return {
                    $pageview_id: t
                };
            var n = {
                $pageview_id: t,
                $prev_pageview_id: i.pageViewId
            }
              , r = this._instance.scrollManager.getContext();
            if (r && !this._instance.config.disable_scroll_properties) {
                var {maxScrollHeight: s, lastScrollY: o, maxScrollY: a, maxContentHeight: l, lastContentY: u, maxContentY: c} = r;
                if (!(P(s) || P(o) || P(a) || P(l) || P(u) || P(c))) {
                    s = Math.ceil(s),
                    o = Math.ceil(o),
                    a = Math.ceil(a),
                    l = Math.ceil(l),
                    u = Math.ceil(u),
                    c = Math.ceil(c);
                    var d = s <= 1 ? 1 : an(o / s, 0, 1)
                      , h = s <= 1 ? 1 : an(a / s, 0, 1)
                      , _ = l <= 1 ? 1 : an(u / l, 0, 1)
                      , p = l <= 1 ? 1 : an(c / l, 0, 1);
                    n = Y(n, {
                        $prev_pageview_last_scroll: o,
                        $prev_pageview_last_scroll_percentage: d,
                        $prev_pageview_max_scroll: a,
                        $prev_pageview_max_scroll_percentage: h,
                        $prev_pageview_last_content: u,
                        $prev_pageview_last_content_percentage: _,
                        $prev_pageview_max_content: c,
                        $prev_pageview_max_content_percentage: p
                    })
                }
            }
            return i.pathname && (n.$prev_pageview_pathname = i.pathname),
            i.timestamp && (n.$prev_pageview_duration = (e.getTime() - i.timestamp.getTime()) / 1e3),
            n
        }
    }
    !function(e) {
        e.Popover = "popover",
        e.API = "api",
        e.Widget = "widget"
    }(Cr || (Cr = {})),
    function(e) {
        e.Open = "open",
        e.MultipleChoice = "multiple_choice",
        e.SingleChoice = "single_choice",
        e.Rating = "rating",
        e.Link = "link"
    }(Pr || (Pr = {})),
    function(e) {
        e.NextQuestion = "next_question",
        e.End = "end",
        e.ResponseBased = "response_based",
        e.SpecificQuestion = "specific_question"
    }(Fr || (Fr = {}));
    class Or {
        constructor() {
            j(this, "events", {}),
            this.events = {}
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = []),
            this.events[e].push(t),
            () => {
                this.events[e] = this.events[e].filter((e => e !== t))
            }
        }
        emit(e, t) {
            for (var i of this.events[e] || [])
                i(t);
            for (var n of this.events["*"] || [])
                n(e, t)
        }
    }
    class Mr {
        constructor(e) {
            j(this, "_debugEventEmitter", new Or),
            j(this, "checkStep", ( (e, t) => this.checkStepEvent(e, t) && this.checkStepUrl(e, t) && this.checkStepElement(e, t))),
            j(this, "checkStepEvent", ( (e, t) => null == t || !t.event || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event))),
            this.instance = e,
            this.actionEvents = new Set,
            this.actionRegistry = new Set
        }
        init() {
            var e;
            if (!P(null === (e = this.instance) || void 0 === e ? void 0 : e._addCaptureHook)) {
                var t;
                null === (t = this.instance) || void 0 === t || t._addCaptureHook(( (e, t) => {
                    this.on(e, t)
                }
                ))
            }
        }
        register(e) {
            var t, i;
            if (!P(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) && (e.forEach((e => {
                var t, i;
                null === (t = this.actionRegistry) || void 0 === t || t.add(e),
                null === (i = e.steps) || void 0 === i || i.forEach((e => {
                    var t;
                    null === (t = this.actionEvents) || void 0 === t || t.add((null == e ? void 0 : e.event) || "")
                }
                ))
            }
            )),
            null !== (i = this.instance) && void 0 !== i && i.autocapture)) {
                var n, r = new Set;
                e.forEach((e => {
                    var t;
                    null === (t = e.steps) || void 0 === t || t.forEach((e => {
                        null != e && e.selector && r.add(null == e ? void 0 : e.selector)
                    }
                    ))
                }
                )),
                null === (n = this.instance) || void 0 === n || n.autocapture.setElementSelectors(r)
            }
        }
        on(e, t) {
            var i;
            null != t && 0 != e.length && (this.actionEvents.has(e) || this.actionEvents.has(null == t ? void 0 : t.event)) && this.actionRegistry && (null === (i = this.actionRegistry) || void 0 === i ? void 0 : i.size) > 0 && this.actionRegistry.forEach((e => {
                this.checkAction(t, e) && this._debugEventEmitter.emit("actionCaptured", e.name)
            }
            ))
        }
        _addActionHook(e) {
            this.onAction("actionCaptured", (t => e(t)))
        }
        checkAction(e, t) {
            if (null == (null == t ? void 0 : t.steps))
                return !1;
            for (var i of t.steps)
                if (this.checkStep(e, i))
                    return !0;
            return !1
        }
        onAction(e, t) {
            return this._debugEventEmitter.on(e, t)
        }
        checkStepUrl(e, t) {
            if (null != t && t.url) {
                var i, n = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$current_url;
                if (!n || "string" != typeof n)
                    return !1;
                if (!Mr.matchString(n, null == t ? void 0 : t.url, (null == t ? void 0 : t.url_matching) || "contains"))
                    return !1
            }
            return !0
        }
        static matchString(e, i, n) {
            switch (n) {
            case "regex":
                return !!t && vt(e, i);
            case "exact":
                return i === e;
            case "contains":
                var r = Mr.escapeStringRegexp(i).replace(/_/g, ".").replace(/%/g, ".*");
                return vt(e, r);
            default:
                return !1
            }
        }
        static escapeStringRegexp(e) {
            return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
        }
        checkStepElement(e, t) {
            if ((null != t && t.href || null != t && t.tag_name || null != t && t.text) && !this.getElementsList(e).some((e => !(null != t && t.href && !Mr.matchString(e.href || "", null == t ? void 0 : t.href, (null == t ? void 0 : t.href_matching) || "exact")) && ((null == t || !t.tag_name || e.tag_name === (null == t ? void 0 : t.tag_name)) && !(null != t && t.text && !Mr.matchString(e.text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact") && !Mr.matchString(e.$el_text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact"))))))
                return !1;
            if (null != t && t.selector) {
                var i, n = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$element_selectors;
                if (!n)
                    return !1;
                if (!n.includes(null == t ? void 0 : t.selector))
                    return !1
            }
            return !0
        }
        getElementsList(e) {
            return null == (null == e ? void 0 : e.properties.$elements) ? [] : null == e ? void 0 : e.properties.$elements
        }
    }
    class Lr {
        constructor(e) {
            this.instance = e,
            this.eventToSurveys = new Map,
            this.actionToSurveys = new Map
        }
        register(e) {
            var t;
            P(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) || (this.setupEventBasedSurveys(e),
            this.setupActionBasedSurveys(e))
        }
        setupActionBasedSurveys(e) {
            var t = e.filter((e => {
                var t, i, n, r;
                return (null === (t = e.conditions) || void 0 === t ? void 0 : t.actions) && (null === (i = e.conditions) || void 0 === i || null === (n = i.actions) || void 0 === n || null === (r = n.values) || void 0 === r ? void 0 : r.length) > 0
            }
            ));
            if (0 !== t.length) {
                if (null == this.actionMatcher) {
                    this.actionMatcher = new Mr(this.instance),
                    this.actionMatcher.init();
                    this.actionMatcher._addActionHook((e => {
                        this.onAction(e)
                    }
                    ))
                }
                t.forEach((e => {
                    var t, i, n, r, s, o, a, l, u, c;
                    e.conditions && null !== (t = e.conditions) && void 0 !== t && t.actions && null !== (i = e.conditions) && void 0 !== i && null !== (n = i.actions) && void 0 !== n && n.values && (null === (r = e.conditions) || void 0 === r || null === (s = r.actions) || void 0 === s || null === (o = s.values) || void 0 === o ? void 0 : o.length) > 0 && (null === (a = this.actionMatcher) || void 0 === a || a.register(e.conditions.actions.values),
                    null === (l = e.conditions) || void 0 === l || null === (u = l.actions) || void 0 === u || null === (c = u.values) || void 0 === c || c.forEach((t => {
                        if (t && t.name) {
                            var i = this.actionToSurveys.get(t.name);
                            i && i.push(e.id),
                            this.actionToSurveys.set(t.name, i || [e.id])
                        }
                    }
                    )))
                }
                ))
            }
        }
        setupEventBasedSurveys(e) {
            var t;
            if (0 !== e.filter((e => {
                var t, i, n, r;
                return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (n = i.events) || void 0 === n || null === (r = n.values) || void 0 === r ? void 0 : r.length) > 0
            }
            )).length) {
                null === (t = this.instance) || void 0 === t || t._addCaptureHook(( (e, t) => {
                    this.onEvent(e, t)
                }
                )),
                e.forEach((e => {
                    var t, i, n;
                    null === (t = e.conditions) || void 0 === t || null === (i = t.events) || void 0 === i || null === (n = i.values) || void 0 === n || n.forEach((t => {
                        if (t && t.name) {
                            var i = this.eventToSurveys.get(t.name);
                            i && i.push(e.id),
                            this.eventToSurveys.set(t.name, i || [e.id])
                        }
                    }
                    ))
                }
                ))
            }
        }
        onEvent(e, t) {
            var i, n, r = (null === (i = this.instance) || void 0 === i || null === (n = i.persistence) || void 0 === n ? void 0 : n.props[Pe]) || [];
            if (Lr.SURVEY_SHOWN_EVENT_NAME == e && t && r.length > 0) {
                var s, o = null == t || null === (s = t.properties) || void 0 === s ? void 0 : s.$survey_id;
                if (o) {
                    var a = r.indexOf(o);
                    a >= 0 && (r.splice(a, 1),
                    this._updateActivatedSurveys(r))
                }
            } else
                this.eventToSurveys.has(e) && this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e) || []))
        }
        onAction(e) {
            var t, i, n = (null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i ? void 0 : i.props[Pe]) || [];
            this.actionToSurveys.has(e) && this._updateActivatedSurveys(n.concat(this.actionToSurveys.get(e) || []))
        }
        _updateActivatedSurveys(e) {
            var t, i;
            null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
                [Pe]: [...new Set(e)]
            })
        }
        getSurveys() {
            var e, t, i = null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t ? void 0 : t.props[Pe];
            return i || []
        }
        getEventToSurveys() {
            return this.eventToSurveys
        }
        _getActionMatcher() {
            return this.actionMatcher
        }
    }
    j(Lr, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
    var Ar, Dr, Nr, qr, Br, Hr, Ur, zr, jr = {}, Wr = [], Vr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Gr = Array.isArray;
    function Jr(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    function Yr(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    function Kr(e, t, i, n, r) {
        var s = {
            type: e,
            props: t,
            key: i,
            ref: n,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == r ? ++Nr : r,
            __i: -1,
            __u: 0
        };
        return null == r && null != Dr.vnode && Dr.vnode(s),
        s
    }
    function Xr(e) {
        return e.children
    }
    function Qr(e, t) {
        this.props = e,
        this.context = t
    }
    function Zr(e, t) {
        if (null == t)
            return e.__ ? Zr(e.__, e.__i + 1) : null;
        for (var i; t < e.__k.length; t++)
            if (null != (i = e.__k[t]) && null != i.__e)
                return i.__e;
        return "function" == typeof e.type ? Zr(e) : null
    }
    function es(e) {
        var t, i;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null,
            t = 0; t < e.__k.length; t++)
                if (null != (i = e.__k[t]) && null != i.__e) {
                    e.__e = e.__c.base = i.__e;
                    break
                }
            return es(e)
        }
    }
    function ts(e) {
        (!e.__d && (e.__d = !0) && qr.push(e) && !is.__r++ || Br !== Dr.debounceRendering) && ((Br = Dr.debounceRendering) || Hr)(is)
    }
    function is() {
        var e, t, i, n, r, s, o, a, l;
        for (qr.sort(Ur); e = qr.shift(); )
            e.__d && (t = qr.length,
            n = void 0,
            s = (r = (i = e).__v).__e,
            a = [],
            l = [],
            (o = i.__P) && ((n = Jr({}, r)).__v = r.__v + 1,
            Dr.vnode && Dr.vnode(n),
            ds(o, n, r, i.__n, void 0 !== o.ownerSVGElement, 32 & r.__u ? [s] : null, a, null == s ? Zr(r) : s, !!(32 & r.__u), l),
            n.__.__k[n.__i] = n,
            hs(a, n, l),
            n.__e != s && es(n)),
            qr.length > t && qr.sort(Ur));
        is.__r = 0
    }
    function ns(e, t, i, n, r, s, o, a, l, u, c) {
        var d, h, _, p, v, g = n && n.__k || Wr, f = t.length;
        for (i.__d = l,
        rs(i, t, g),
        l = i.__d,
        d = 0; d < f; d++)
            null != (_ = i.__k[d]) && "boolean" != typeof _ && "function" != typeof _ && (h = -1 === _.__i ? jr : g[_.__i] || jr,
            _.__i = d,
            ds(e, _, h, r, s, o, a, l, u, c),
            p = _.__e,
            _.ref && h.ref != _.ref && (h.ref && ps(h.ref, null, _),
            c.push(_.ref, _.__c || p, _)),
            null == v && null != p && (v = p),
            65536 & _.__u || h.__k === _.__k ? l = ss(_, l, e) : "function" == typeof _.type && void 0 !== _.__d ? l = _.__d : p && (l = p.nextSibling),
            _.__d = void 0,
            _.__u &= -196609);
        i.__d = l,
        i.__e = v
    }
    function rs(e, t, i) {
        var n, r, s, o, a, l = t.length, u = i.length, c = u, d = 0;
        for (e.__k = [],
        n = 0; n < l; n++)
            null != (r = e.__k[n] = null == (r = t[n]) || "boolean" == typeof r || "function" == typeof r ? null : "string" == typeof r || "number" == typeof r || "bigint" == typeof r || r.constructor == String ? Kr(null, r, null, null, r) : Gr(r) ? Kr(Xr, {
                children: r
            }, null, null, null) : void 0 === r.constructor && r.__b > 0 ? Kr(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) ? (r.__ = e,
            r.__b = e.__b + 1,
            a = os(r, i, o = n + d, c),
            r.__i = a,
            s = null,
            -1 !== a && (c--,
            (s = i[a]) && (s.__u |= 131072)),
            null == s || null === s.__v ? (-1 == a && d--,
            "function" != typeof r.type && (r.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? c > l - o ? d += a - o : d-- : d = a < o && a == o - 1 ? a - o : 0,
            a !== n + d && (r.__u |= 65536))) : (s = i[n]) && null == s.key && s.__e && (s.__e == e.__d && (e.__d = Zr(s)),
            vs(s, s, !1),
            i[n] = null,
            c--);
        if (c)
            for (n = 0; n < u; n++)
                null != (s = i[n]) && 0 == (131072 & s.__u) && (s.__e == e.__d && (e.__d = Zr(s)),
                vs(s, s))
    }
    function ss(e, t, i) {
        var n, r;
        if ("function" == typeof e.type) {
            for (n = e.__k,
            r = 0; n && r < n.length; r++)
                n[r] && (n[r].__ = e,
                t = ss(n[r], t, i));
            return t
        }
        return e.__e != t && (i.insertBefore(e.__e, t || null),
        t = e.__e),
        t && t.nextSibling
    }
    function os(e, t, i, n) {
        var r = e.key
          , s = e.type
          , o = i - 1
          , a = i + 1
          , l = t[i];
        if (null === l || l && r == l.key && s === l.type)
            return i;
        if (n > (null != l && 0 == (131072 & l.__u) ? 1 : 0))
            for (; o >= 0 || a < t.length; ) {
                if (o >= 0) {
                    if ((l = t[o]) && 0 == (131072 & l.__u) && r == l.key && s === l.type)
                        return o;
                    o--
                }
                if (a < t.length) {
                    if ((l = t[a]) && 0 == (131072 & l.__u) && r == l.key && s === l.type)
                        return a;
                    a++
                }
            }
        return -1
    }
    function as(e, t, i) {
        "-" === t[0] ? e.setProperty(t, null == i ? "" : i) : e[t] = null == i ? "" : "number" != typeof i || Vr.test(t) ? i : i + "px"
    }
    function ls(e, t, i, n, r) {
        var s;
        e: if ("style" === t)
            if ("string" == typeof i)
                e.style.cssText = i;
            else {
                if ("string" == typeof n && (e.style.cssText = n = ""),
                n)
                    for (t in n)
                        i && t in i || as(e.style, t, "");
                if (i)
                    for (t in i)
                        n && i[t] === n[t] || as(e.style, t, i[t])
            }
        else if ("o" === t[0] && "n" === t[1])
            s = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")),
            t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
            e.l || (e.l = {}),
            e.l[t + s] = i,
            i ? n ? i.u = n.u : (i.u = Date.now(),
            e.addEventListener(t, s ? cs : us, s)) : e.removeEventListener(t, s ? cs : us, s);
        else {
            if (r)
                t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e)
                try {
                    e[t] = null == i ? "" : i;
                    break e
                } catch (e) {}
            "function" == typeof i || (null == i || !1 === i && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, i))
        }
    }
    function us(e) {
        var t = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= t.u)
                return
        } else
            e.t = Date.now();
        return t(Dr.event ? Dr.event(e) : e)
    }
    function cs(e) {
        return this.l[e.type + !0](Dr.event ? Dr.event(e) : e)
    }
    function ds(e, t, i, n, r, s, o, a, l, u) {
        var c, d, h, _, p, v, g, f, m, b, y, w, S, E, k, x = t.type;
        if (void 0 !== t.constructor)
            return null;
        128 & i.__u && (l = !!(32 & i.__u),
        s = [a = t.__e = i.__e]),
        (c = Dr.__b) && c(t);
        e: if ("function" == typeof x)
            try {
                if (f = t.props,
                m = (c = x.contextType) && n[c.__c],
                b = c ? m ? m.props.value : c.__ : n,
                i.__c ? g = (d = t.__c = i.__c).__ = d.__E : ("prototype"in x && x.prototype.render ? t.__c = d = new x(f,b) : (t.__c = d = new Qr(f,b),
                d.constructor = x,
                d.render = gs),
                m && m.sub(d),
                d.props = f,
                d.state || (d.state = {}),
                d.context = b,
                d.__n = n,
                h = d.__d = !0,
                d.__h = [],
                d._sb = []),
                null == d.__s && (d.__s = d.state),
                null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = Jr({}, d.__s)),
                Jr(d.__s, x.getDerivedStateFromProps(f, d.__s))),
                _ = d.props,
                p = d.state,
                d.__v = t,
                h)
                    null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                    null != d.componentDidMount && d.__h.push(d.componentDidMount);
                else {
                    if (null == x.getDerivedStateFromProps && f !== _ && null != d.componentWillReceiveProps && d.componentWillReceiveProps(f, b),
                    !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(f, d.__s, b) || t.__v === i.__v)) {
                        for (t.__v !== i.__v && (d.props = f,
                        d.state = d.__s,
                        d.__d = !1),
                        t.__e = i.__e,
                        t.__k = i.__k,
                        t.__k.forEach((function(e) {
                            e && (e.__ = t)
                        }
                        )),
                        y = 0; y < d._sb.length; y++)
                            d.__h.push(d._sb[y]);
                        d._sb = [],
                        d.__h.length && o.push(d);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(f, d.__s, b),
                    null != d.componentDidUpdate && d.__h.push((function() {
                        d.componentDidUpdate(_, p, v)
                    }
                    ))
                }
                if (d.context = b,
                d.props = f,
                d.__P = e,
                d.__e = !1,
                w = Dr.__r,
                S = 0,
                "prototype"in x && x.prototype.render) {
                    for (d.state = d.__s,
                    d.__d = !1,
                    w && w(t),
                    c = d.render(d.props, d.state, d.context),
                    E = 0; E < d._sb.length; E++)
                        d.__h.push(d._sb[E]);
                    d._sb = []
                } else
                    do {
                        d.__d = !1,
                        w && w(t),
                        c = d.render(d.props, d.state, d.context),
                        d.state = d.__s
                    } while (d.__d && ++S < 25);
                d.state = d.__s,
                null != d.getChildContext && (n = Jr(Jr({}, n), d.getChildContext())),
                h || null == d.getSnapshotBeforeUpdate || (v = d.getSnapshotBeforeUpdate(_, p)),
                ns(e, Gr(k = null != c && c.type === Xr && null == c.key ? c.props.children : c) ? k : [k], t, i, n, r, s, o, a, l, u),
                d.base = t.__e,
                t.__u &= -161,
                d.__h.length && o.push(d),
                g && (d.__E = d.__ = null)
            } catch (e) {
                t.__v = null,
                l || null != s ? (t.__e = a,
                t.__u |= l ? 160 : 32,
                s[s.indexOf(a)] = null) : (t.__e = i.__e,
                t.__k = i.__k),
                Dr.__e(e, t, i)
            }
        else
            null == s && t.__v === i.__v ? (t.__k = i.__k,
            t.__e = i.__e) : t.__e = _s(i.__e, t, i, n, r, s, o, l, u);
        (c = Dr.diffed) && c(t)
    }
    function hs(e, t, i) {
        t.__d = void 0;
        for (var n = 0; n < i.length; n++)
            ps(i[n], i[++n], i[++n]);
        Dr.__c && Dr.__c(t, e),
        e.some((function(t) {
            try {
                e = t.__h,
                t.__h = [],
                e.some((function(e) {
                    e.call(t)
                }
                ))
            } catch (e) {
                Dr.__e(e, t.__v)
            }
        }
        ))
    }
    function _s(e, t, i, n, r, s, o, a, l) {
        var u, c, d, h, _, p, v, g = i.props, f = t.props, m = t.type;
        if ("svg" === m && (r = !0),
        null != s)
            for (u = 0; u < s.length; u++)
                if ((_ = s[u]) && "setAttribute"in _ == !!m && (m ? _.localName === m : 3 === _.nodeType)) {
                    e = _,
                    s[u] = null;
                    break
                }
        if (null == e) {
            if (null === m)
                return document.createTextNode(f);
            e = r ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, f.is && f),
            s = null,
            a = !1
        }
        if (null === m)
            g === f || a && e.data === f || (e.data = f);
        else {
            if (s = s && Ar.call(e.childNodes),
            g = i.props || jr,
            !a && null != s)
                for (g = {},
                u = 0; u < e.attributes.length; u++)
                    g[(_ = e.attributes[u]).name] = _.value;
            for (u in g)
                _ = g[u],
                "children" == u || ("dangerouslySetInnerHTML" == u ? d = _ : "key" === u || u in f || ls(e, u, null, _, r));
            for (u in f)
                _ = f[u],
                "children" == u ? h = _ : "dangerouslySetInnerHTML" == u ? c = _ : "value" == u ? p = _ : "checked" == u ? v = _ : "key" === u || a && "function" != typeof _ || g[u] === _ || ls(e, u, _, g[u], r);
            if (c)
                a || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html),
                t.__k = [];
            else if (d && (e.innerHTML = ""),
            ns(e, Gr(h) ? h : [h], t, i, n, r && "foreignObject" !== m, s, o, s ? s[0] : i.__k && Zr(i, 0), a, l),
            null != s)
                for (u = s.length; u--; )
                    null != s[u] && Yr(s[u]);
            a || (u = "value",
            void 0 !== p && (p !== e[u] || "progress" === m && !p || "option" === m && p !== g[u]) && ls(e, u, p, g[u], !1),
            u = "checked",
            void 0 !== v && v !== e[u] && ls(e, u, v, g[u], !1))
        }
        return e
    }
    function ps(e, t, i) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            Dr.__e(e, i)
        }
    }
    function vs(e, t, i) {
        var n, r;
        if (Dr.unmount && Dr.unmount(e),
        (n = e.ref) && (n.current && n.current !== e.__e || ps(n, null, t)),
        null != (n = e.__c)) {
            if (n.componentWillUnmount)
                try {
                    n.componentWillUnmount()
                } catch (e) {
                    Dr.__e(e, t)
                }
            n.base = n.__P = null,
            e.__c = void 0
        }
        if (n = e.__k)
            for (r = 0; r < n.length; r++)
                n[r] && vs(n[r], t, i || "function" != typeof e.type);
        i || null == e.__e || Yr(e.__e),
        e.__ = e.__e = e.__d = void 0
    }
    function gs(e, t, i) {
        return this.constructor(e, i)
    }
    Ar = Wr.slice,
    Dr = {
        __e: function(e, t, i, n) {
            for (var r, s, o; t = t.__; )
                if ((r = t.__c) && !r.__)
                    try {
                        if ((s = r.constructor) && null != s.getDerivedStateFromError && (r.setState(s.getDerivedStateFromError(e)),
                        o = r.__d),
                        null != r.componentDidCatch && (r.componentDidCatch(e, n || {}),
                        o = r.__d),
                        o)
                            return r.__E = r
                    } catch (t) {
                        e = t
                    }
            throw e
        }
    },
    Nr = 0,
    Qr.prototype.setState = function(e, t) {
        var i;
        i = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Jr({}, this.state),
        "function" == typeof e && (e = e(Jr({}, i), this.props)),
        e && Jr(i, e),
        null != e && this.__v && (t && this._sb.push(t),
        ts(this))
    }
    ,
    Qr.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0,
        e && this.__h.push(e),
        ts(this))
    }
    ,
    Qr.prototype.render = Xr,
    qr = [],
    Hr = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    Ur = function(e, t) {
        return e.__v.__b - t.__v.__b
    }
    ,
    is.__r = 0,
    zr = 0;
    !function(e, t) {
        var i = {
            __c: t = "__cC" + zr++,
            __: e,
            Consumer: function(e, t) {
                return e.children(t)
            },
            Provider: function(e) {
                var i, n;
                return this.getChildContext || (i = [],
                (n = {})[t] = this,
                this.getChildContext = function() {
                    return n
                }
                ,
                this.shouldComponentUpdate = function(e) {
                    this.props.value !== e.value && i.some((function(e) {
                        e.__e = !0,
                        ts(e)
                    }
                    ))
                }
                ,
                this.sub = function(e) {
                    i.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function() {
                        i.splice(i.indexOf(e), 1),
                        t && t.call(e)
                    }
                }
                ),
                e.children
            }
        };
        i.Provider.__ = i.Consumer.contextType = i
    }({
        isPreviewMode: !1,
        previewPageIndex: 0,
        handleCloseSurveyPopup: () => {}
        ,
        isPopup: !0,
        onPreviewSubmit: () => {}
    });
    var fs = q("[Surveys]")
      , ms = {
        icontains: e => !!t && t.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
        not_icontains: e => !!t && -1 === t.location.href.toLowerCase().indexOf(e.toLowerCase()),
        regex: e => !!t && vt(t.location.href, e),
        not_regex: e => !!t && !vt(t.location.href, e),
        exact: e => (null == t ? void 0 : t.location.href) === e,
        is_not: e => (null == t ? void 0 : t.location.href) !== e
    };
    class bs {
        constructor(e) {
            this.instance = e,
            this._surveyEventReceiver = null
        }
        onRemoteConfig(e) {
            this._decideServerResponse = !!e.surveys,
            this.loadIfEnabled()
        }
        reset() {
            localStorage.removeItem("lastSeenSurveyDate");
            var e = ( () => {
                for (var e = [], t = 0; t < localStorage.length; t++) {
                    var i = localStorage.key(t);
                    null != i && i.startsWith("seenSurvey_") && e.push(i)
                }
                return e
            }
            )();
            e.forEach((e => localStorage.removeItem(e)))
        }
        loadIfEnabled() {
            var e, t, i, n = null == _ || null === (e = _.__PosthogExtensions__) || void 0 === e ? void 0 : e.generateSurveys;
            this.instance.config.disable_surveys || !this._decideServerResponse || n || (null == this._surveyEventReceiver && (this._surveyEventReceiver = new Lr(this.instance)),
            null === (t = _.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, "surveys", (e => {
                var t, i;
                if (e)
                    return fs.error("Could not load surveys script", e);
                this._surveyManager = null === (t = _.__PosthogExtensions__) || void 0 === t || null === (i = t.generateSurveys) || void 0 === i ? void 0 : i.call(t, this.instance)
            }
            )))
        }
        getSurveys(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.instance.config.disable_surveys)
                return e([]);
            null == this._surveyEventReceiver && (this._surveyEventReceiver = new Lr(this.instance));
            var i = this.instance.get_property(Ce);
            if (i && !t)
                return e(i);
            this.instance._send_request({
                url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
                method: "GET",
                callback: t => {
                    var i;
                    if (200 !== t.statusCode || !t.json)
                        return e([]);
                    var n, r = t.json.surveys || [], s = r.filter((e => {
                        var t, i, n, r, s, o, a, l, u, c, d, h;
                        return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (n = i.events) || void 0 === n ? void 0 : n.values) && (null === (r = e.conditions) || void 0 === r || null === (s = r.events) || void 0 === s || null === (o = s.values) || void 0 === o ? void 0 : o.length) > 0 || (null === (a = e.conditions) || void 0 === a ? void 0 : a.actions) && (null === (l = e.conditions) || void 0 === l || null === (u = l.actions) || void 0 === u ? void 0 : u.values) && (null === (c = e.conditions) || void 0 === c || null === (d = c.actions) || void 0 === d || null === (h = d.values) || void 0 === h ? void 0 : h.length) > 0
                    }
                    ));
                    s.length > 0 && (null === (n = this._surveyEventReceiver) || void 0 === n || n.register(s));
                    return null === (i = this.instance.persistence) || void 0 === i || i.register({
                        [Ce]: r
                    }),
                    e(r)
                }
            })
        }
        getActiveMatchingSurveys(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this.getSurveys((t => {
                var i, n = t.filter((e => !(!e.start_date || e.end_date))).filter((e => {
                    var t, i, n, r;
                    if (!e.conditions)
                        return !0;
                    var s = null === (t = e.conditions) || void 0 === t || !t.url || ms[null !== (i = null === (n = e.conditions) || void 0 === n ? void 0 : n.urlMatchType) && void 0 !== i ? i : "icontains"](e.conditions.url)
                      , o = null === (r = e.conditions) || void 0 === r || !r.selector || (null == a ? void 0 : a.querySelector(e.conditions.selector));
                    return s && o
                }
                )), r = null === (i = this._surveyEventReceiver) || void 0 === i ? void 0 : i.getSurveys(), s = n.filter((e => {
                    var t, i, n, s, o, a, l, u, c, d, h;
                    if (!(e.linked_flag_key || e.targeting_flag_key || e.internal_targeting_flag_key || null !== (t = e.feature_flag_keys) && void 0 !== t && t.length))
                        return !0;
                    var _ = !e.linked_flag_key || this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key)
                      , p = !e.targeting_flag_key || this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key)
                      , v = (null === (i = e.conditions) || void 0 === i ? void 0 : i.events) && (null === (n = e.conditions) || void 0 === n || null === (s = n.events) || void 0 === s ? void 0 : s.values) && (null === (o = e.conditions) || void 0 === o || null === (a = o.events) || void 0 === a ? void 0 : a.values.length) > 0
                      , g = (null === (l = e.conditions) || void 0 === l ? void 0 : l.actions) && (null === (u = e.conditions) || void 0 === u || null === (c = u.actions) || void 0 === c ? void 0 : c.values) && (null === (d = e.conditions) || void 0 === d || null === (h = d.actions) || void 0 === h ? void 0 : h.values.length) > 0
                      , f = !v && !g || (null == r ? void 0 : r.includes(e.id))
                      , m = this._canActivateRepeatedly(e)
                      , b = !(e.internal_targeting_flag_key && !m) || this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key)
                      , y = this.checkFlags(e);
                    return _ && p && b && f && y
                }
                ));
                return e(s)
            }
            ), t)
        }
        checkFlags(e) {
            var t;
            return null === (t = e.feature_flag_keys) || void 0 === t || !t.length || e.feature_flag_keys.every((e => {
                var {key: t, value: i} = e;
                return !t || !i || this.instance.featureFlags.isFeatureEnabled(i)
            }
            ))
        }
        getNextSurveyStep(e, t, i) {
            var n, r = e.questions[t], s = t + 1;
            if (null === (n = r.branching) || void 0 === n || !n.type)
                return t === e.questions.length - 1 ? Fr.End : s;
            if (r.branching.type === Fr.End)
                return Fr.End;
            if (r.branching.type === Fr.SpecificQuestion) {
                if (Number.isInteger(r.branching.index))
                    return r.branching.index
            } else if (r.branching.type === Fr.ResponseBased) {
                if (r.type === Pr.SingleChoice) {
                    var o, a, l = r.choices.indexOf("".concat(i));
                    if (null !== (o = r.branching) && void 0 !== o && null !== (a = o.responseValues) && void 0 !== a && a.hasOwnProperty(l)) {
                        var u = r.branching.responseValues[l];
                        return Number.isInteger(u) ? u : u === Fr.End ? Fr.End : s
                    }
                } else if (r.type === Pr.Rating) {
                    var c, d;
                    if ("number" != typeof i || !Number.isInteger(i))
                        throw new Error("The response type must be an integer");
                    var h = function(e, t) {
                        if (3 === t) {
                            if (e < 1 || e > 3)
                                throw new Error("The response must be in range 1-3");
                            return 1 === e ? "negative" : 2 === e ? "neutral" : "positive"
                        }
                        if (5 === t) {
                            if (e < 1 || e > 5)
                                throw new Error("The response must be in range 1-5");
                            return e <= 2 ? "negative" : 3 === e ? "neutral" : "positive"
                        }
                        if (7 === t) {
                            if (e < 1 || e > 7)
                                throw new Error("The response must be in range 1-7");
                            return e <= 3 ? "negative" : 4 === e ? "neutral" : "positive"
                        }
                        if (10 === t) {
                            if (e < 0 || e > 10)
                                throw new Error("The response must be in range 0-10");
                            return e <= 6 ? "detractors" : e <= 8 ? "passives" : "promoters"
                        }
                        throw new Error("The scale must be one of: 3, 5, 7, 10")
                    }(i, r.scale);
                    if (null !== (c = r.branching) && void 0 !== c && null !== (d = c.responseValues) && void 0 !== d && d.hasOwnProperty(h)) {
                        var _ = r.branching.responseValues[h];
                        return Number.isInteger(_) ? _ : _ === Fr.End ? Fr.End : s
                    }
                }
                return s
            }
            return fs.warn("Falling back to next question index due to unexpected branching type"),
            s
        }
        _canActivateRepeatedly(e) {
            var t;
            return $(null === (t = _.__PosthogExtensions__) || void 0 === t ? void 0 : t.canActivateRepeatedly) ? (fs.warn("init was not called"),
            !1) : _.__PosthogExtensions__.canActivateRepeatedly(e)
        }
        canRenderSurvey(e) {
            $(this._surveyManager) ? fs.warn("init was not called") : this.getSurveys((t => {
                var i = t.filter((t => t.id === e))[0];
                this._surveyManager.canRenderSurvey(i)
            }
            ))
        }
        renderSurvey(e, t) {
            $(this._surveyManager) ? fs.warn("init was not called") : this.getSurveys((i => {
                var n = i.filter((t => t.id === e))[0];
                this._surveyManager.renderSurvey(n, null == a ? void 0 : a.querySelector(t))
            }
            ))
        }
    }
    var ys = q("[RateLimiter]");
    class ws {
        constructor(e) {
            var t, i;
            j(this, "serverLimits", {}),
            j(this, "lastEventRateLimited", !1),
            j(this, "checkForLimiting", (e => {
                var t = e.text;
                if (t && t.length)
                    try {
                        (JSON.parse(t).quota_limited || []).forEach((e => {
                            ys.info("".concat(e || "events", " is quota limited.")),
                            this.serverLimits[e] = (new Date).getTime() + 6e4
                        }
                        ))
                    } catch (e) {
                        return void ys.warn('could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
                            text: t
                        })
                    }
            }
            )),
            this.instance = e,
            this.captureEventsPerSecond = (null === (t = e.config.rate_limiting) || void 0 === t ? void 0 : t.events_per_second) || 10,
            this.captureEventsBurstLimit = Math.max((null === (i = e.config.rate_limiting) || void 0 === i ? void 0 : i.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond),
            this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
        }
        clientRateLimitContext() {
            var e, t, i, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], r = (new Date).getTime(), s = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property($e)) && void 0 !== e ? e : {
                tokens: this.captureEventsBurstLimit,
                last: r
            };
            s.tokens += (r - s.last) / 1e3 * this.captureEventsPerSecond,
            s.last = r,
            s.tokens > this.captureEventsBurstLimit && (s.tokens = this.captureEventsBurstLimit);
            var o = s.tokens < 1;
            return o || n || (s.tokens = Math.max(0, s.tokens - 1)),
            !o || this.lastEventRateLimited || n || this.instance.capture("$$client_ingestion_warning", {
                $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
            }, {
                skip_client_rate_limiting: !0
            }),
            this.lastEventRateLimited = o,
            null === (i = this.instance.persistence) || void 0 === i || i.set_property($e, s),
            {
                isRateLimited: o,
                remainingTokens: s.tokens
            }
        }
        isServerRateLimited(e) {
            var t = this.serverLimits[e || "events"] || !1;
            return !1 !== t && (new Date).getTime() < t
        }
    }
    var Ss = () => z({
        initialPathName: (null == l ? void 0 : l.pathname) || "",
        referringDomain: gi.referringDomain()
    }, gi.campaignParams());
    class Es {
        constructor(e, t, i) {
            j(this, "_onSessionIdCallback", (e => {
                var t = this._getStoredProps();
                if (!t || t.sessionId !== e) {
                    var i = {
                        sessionId: e,
                        props: this._sessionSourceParamGenerator()
                    };
                    this._persistence.register({
                        [Te]: i
                    })
                }
            }
            )),
            this._sessionIdManager = e,
            this._persistence = t,
            this._sessionSourceParamGenerator = i || Ss,
            this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStoredProps() {
            return this._persistence.props[Te]
        }
        getSessionProps() {
            var e, t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
            return t ? {
                $client_session_initial_referring_host: t.referringDomain,
                $client_session_initial_pathname: t.initialPathName,
                $client_session_initial_utm_source: t.utm_source,
                $client_session_initial_utm_campaign: t.utm_campaign,
                $client_session_initial_utm_medium: t.utm_medium,
                $client_session_initial_utm_content: t.utm_content,
                $client_session_initial_utm_term: t.utm_term
            } : {}
        }
    }
    var ks = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "headlesschrome", "cypress", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"]
      , xs = function(e, t) {
        if (!e)
            return !1;
        var i = e.toLowerCase();
        return ks.concat(t || []).some((e => {
            var t = e.toLowerCase();
            return -1 !== i.indexOf(t)
        }
        ))
    }
      , Is = function(e, t) {
        if (!e)
            return !1;
        var i = e.userAgent;
        if (i && xs(i, t))
            return !0;
        try {
            var n = null == e ? void 0 : e.userAgentData;
            if (null != n && n.brands && n.brands.some((e => xs(null == e ? void 0 : e.brand, t))))
                return !0
        } catch (e) {}
        return !!e.webdriver
    };
    class Cs {
        constructor() {
            this.clicks = []
        }
        isRageClick(e, t, i) {
            var n = this.clicks[this.clicks.length - 1];
            if (n && Math.abs(e - n.x) + Math.abs(t - n.y) < 30 && i - n.timestamp < 1e3) {
                if (this.clicks.push({
                    x: e,
                    y: t,
                    timestamp: i
                }),
                3 === this.clicks.length)
                    return !0
            } else
                this.clicks = [{
                    x: e,
                    y: t,
                    timestamp: i
                }];
            return !1
        }
    }
    var Ps = q("[Dead Clicks]")
      , Fs = () => !0
      , Rs = e => {
        var t, i = !(null === (t = e.instance.persistence) || void 0 === t || !t.get_property(ce)), n = e.instance.config.capture_dead_clicks;
        return M(n) ? n : i
    }
    ;
    class Ts {
        get lazyLoadedDeadClicksAutocapture() {
            return this._lazyLoadedDeadClicksAutocapture
        }
        constructor(e, t, i) {
            this.instance = e,
            this.isEnabled = t,
            this.onCapture = i,
            this.startIfEnabled()
        }
        onRemoteConfig(e) {
            this.instance.persistence && this.instance.persistence.register({
                [ce]: null == e ? void 0 : e.captureDeadClicks
            }),
            this.startIfEnabled()
        }
        startIfEnabled() {
            this.isEnabled(this) && this.loadScript(( () => {
                this.start()
            }
            ))
        }
        loadScript(e) {
            var t, i, n;
            null !== (t = _.__PosthogExtensions__) && void 0 !== t && t.initDeadClicksAutocapture && e(),
            null === (i = _.__PosthogExtensions__) || void 0 === i || null === (n = i.loadExternalDependency) || void 0 === n || n.call(i, this.instance, "dead-clicks-autocapture", (t => {
                t ? Ps.error("failed to load script", t) : e()
            }
            ))
        }
        start() {
            var e;
            if (a) {
                if (!this._lazyLoadedDeadClicksAutocapture && null !== (e = _.__PosthogExtensions__) && void 0 !== e && e.initDeadClicksAutocapture) {
                    var t = I(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
                    t.__onCapture = this.onCapture,
                    this._lazyLoadedDeadClicksAutocapture = _.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t),
                    this._lazyLoadedDeadClicksAutocapture.start(a),
                    Ps.info("starting...")
                }
            } else
                Ps.error("`document` not found. Cannot start.")
        }
        stop() {
            this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(),
            this._lazyLoadedDeadClicksAutocapture = void 0,
            Ps.info("stopping..."))
        }
    }
    var $s = q("[Heatmaps]");
    function Os(e) {
        return I(e) && "clientX"in e && "clientY"in e && O(e.clientX) && O(e.clientY)
    }
    class Ms {
        constructor(e) {
            var i;
            j(this, "rageclicks", new Cs),
            j(this, "_enabledServerSide", !1),
            j(this, "_initialized", !1),
            j(this, "_flushInterval", null),
            this.instance = e,
            this._enabledServerSide = !(null === (i = this.instance.persistence) || void 0 === i || !i.props[ae]),
            null == t || t.addEventListener("beforeunload", ( () => {
                this.flush()
            }
            ))
        }
        get flushIntervalMilliseconds() {
            var e = 5e3;
            return I(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds),
            e
        }
        get isEnabled() {
            return P(this.instance.config.capture_heatmaps) ? P(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps
        }
        startIfEnabled() {
            if (this.isEnabled) {
                if (this._initialized)
                    return;
                $s.info("starting..."),
                this._setupListeners(),
                this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds)
            } else {
                var e, t;
                clearInterval(null !== (e = this._flushInterval) && void 0 !== e ? e : void 0),
                null === (t = this.deadClicksCapture) || void 0 === t || t.stop(),
                this.getAndClearBuffer()
            }
        }
        onRemoteConfig(e) {
            var t = !!e.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
                [ae]: t
            }),
            this._enabledServerSide = t,
            this.startIfEnabled()
        }
        getAndClearBuffer() {
            var e = this.buffer;
            return this.buffer = void 0,
            e
        }
        _onDeadClick(e) {
            this._onClick(e.originalEvent, "deadclick")
        }
        _setupListeners() {
            t && a && (te(a, "click", (e => this._onClick(e || (null == t ? void 0 : t.event))), !1, !0),
            te(a, "mousemove", (e => this._onMouseMove(e || (null == t ? void 0 : t.event))), !1, !0),
            this.deadClicksCapture = new Ts(this.instance,Fs,this._onDeadClick.bind(this)),
            this.deadClicksCapture.startIfEnabled(),
            this._initialized = !0)
        }
        _getProperties(e, i) {
            var n = this.instance.scrollManager.scrollY()
              , r = this.instance.scrollManager.scrollX()
              , s = this.instance.scrollManager.scrollElement()
              , o = function(e, i, n) {
                for (var r = e; r && ki(r) && !xi(r, "body"); ) {
                    if (r === n)
                        return !1;
                    if (f(i, null == t ? void 0 : t.getComputedStyle(r).position))
                        return !0;
                    r = Li(r)
                }
                return !1
            }(Oi(e), ["fixed", "sticky"], s);
            return {
                x: e.clientX + (o ? 0 : r),
                y: e.clientY + (o ? 0 : n),
                target_fixed: o,
                type: i
            }
        }
        _onClick(e) {
            var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            if (!Ei(e.target) && Os(e)) {
                var n = this._getProperties(e, i);
                null !== (t = this.rageclicks) && void 0 !== t && t.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture(z(z({}, n), {}, {
                    type: "rageclick"
                })),
                this._capture(n)
            }
        }
        _onMouseMove(e) {
            !Ei(e.target) && Os(e) && (clearTimeout(this._mouseMoveTimeout),
            this._mouseMoveTimeout = setTimeout(( () => {
                this._capture(this._getProperties(e, "mousemove"))
            }
            ), 500))
        }
        _capture(e) {
            if (t) {
                var i = t.location.href;
                this.buffer = this.buffer || {},
                this.buffer[i] || (this.buffer[i] = []),
                this.buffer[i].push(e)
            }
        }
        flush() {
            this.buffer && !C(this.buffer) && this.instance.capture("$$heatmap", {
                $heatmap_data: this.getAndClearBuffer()
            })
        }
    }
    class Ls {
        constructor(e) {
            j(this, "_updateScrollData", ( () => {
                var e, t, i, n;
                this.context || (this.context = {});
                var r = this.scrollElement()
                  , s = this.scrollY()
                  , o = r ? Math.max(0, r.scrollHeight - r.clientHeight) : 0
                  , a = s + ((null == r ? void 0 : r.clientHeight) || 0)
                  , l = (null == r ? void 0 : r.scrollHeight) || 0;
                this.context.lastScrollY = Math.ceil(s),
                this.context.maxScrollY = Math.max(s, null !== (e = this.context.maxScrollY) && void 0 !== e ? e : 0),
                this.context.maxScrollHeight = Math.max(o, null !== (t = this.context.maxScrollHeight) && void 0 !== t ? t : 0),
                this.context.lastContentY = a,
                this.context.maxContentY = Math.max(a, null !== (i = this.context.maxContentY) && void 0 !== i ? i : 0),
                this.context.maxContentHeight = Math.max(l, null !== (n = this.context.maxContentHeight) && void 0 !== n ? n : 0)
            }
            )),
            this.instance = e
        }
        getContext() {
            return this.context
        }
        resetContext() {
            var e = this.context;
            return setTimeout(this._updateScrollData, 0),
            e
        }
        startMeasuringScrollPosition() {
            null == t || t.addEventListener("scroll", this._updateScrollData, !0),
            null == t || t.addEventListener("scrollend", this._updateScrollData, !0),
            null == t || t.addEventListener("resize", this._updateScrollData)
        }
        scrollElement() {
            if (!this.instance.config.scroll_root_selector)
                return null == t ? void 0 : t.document.documentElement;
            var e = k(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector];
            for (var i of e) {
                var n = null == t ? void 0 : t.document.querySelector(i);
                if (n)
                    return n
            }
        }
        scrollY() {
            if (this.instance.config.scroll_root_selector) {
                var e = this.scrollElement();
                return e && e.scrollTop || 0
            }
            return t && (t.scrollY || t.pageYOffset || t.document.documentElement.scrollTop) || 0
        }
        scrollX() {
            if (this.instance.config.scroll_root_selector) {
                var e = this.scrollElement();
                return e && e.scrollLeft || 0
            }
            return t && (t.scrollX || t.pageXOffset || t.document.documentElement.scrollLeft) || 0
        }
    }
    var As = q("[AutoCapture]");
    function Ds(e, t) {
        return t.length > e ? t.slice(0, e) + "..." : t
    }
    function Ns(e) {
        if (e.previousElementSibling)
            return e.previousElementSibling;
        var t = e;
        do {
            t = t.previousSibling
        } while (t && !ki(t));
        return t
    }
    function qs(e, t, i, n) {
        var r = e.tagName.toLowerCase()
          , s = {
            tag_name: r
        };
        Mi.indexOf(r) > -1 && !i && ("a" === r.toLowerCase() || "button" === r.toLowerCase() ? s.$el_text = Ds(1024, Vi(e)) : s.$el_text = Ds(1024, $i(e)));
        var o = Ri(e);
        o.length > 0 && (s.classes = o.filter((function(e) {
            return "" !== e
        }
        ))),
        J(e.attributes, (function(i) {
            var r;
            if ((!Ni(e) || -1 !== ["name", "id", "class", "aria-label"].indexOf(i.name)) && ((null == n || !n.includes(i.name)) && !t && Wi(i.value) && (r = i.name,
            !F(r) || "_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7)))) {
                var o = i.value;
                "class" === i.name && (o = Pi(o).join(" ")),
                s["attr__" + i.name] = Ds(1024, o)
            }
        }
        ));
        for (var a = 1, l = 1, u = e; u = Ns(u); )
            a++,
            u.tagName === e.tagName && l++;
        return s.nth_child = a,
        s.nth_of_type = l,
        s
    }
    function Bs(e, i) {
        for (var n, r, {e: s, maskAllElementAttributes: o, maskAllText: a, elementAttributeIgnoreList: l, elementsChainAsString: u} = i, c = [e], d = e; d.parentNode && !xi(d, "body"); )
            Ci(d.parentNode) ? (c.push(d.parentNode.host),
            d = d.parentNode.host) : (c.push(d.parentNode),
            d = d.parentNode);
        var h, _ = [], p = {}, v = !1, g = !1;
        if (J(c, (e => {
            var t = Di(e);
            "a" === e.tagName.toLowerCase() && (v = e.getAttribute("href"),
            v = t && v && Wi(v) && v),
            f(Ri(e), "ph-no-capture") && (g = !0),
            _.push(qs(e, o, a, l));
            var i = function(e) {
                if (!Di(e))
                    return {};
                var t = {};
                return J(e.attributes, (function(e) {
                    if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
                        var i = e.name.replace("data-ph-capture-attribute-", "")
                          , n = e.value;
                        i && n && Wi(n) && (t[i] = n)
                    }
                }
                )),
                t
            }(e);
            Y(p, i)
        }
        )),
        g)
            return {
                props: {},
                explicitNoCapture: g
            };
        if (a || ("a" === e.tagName.toLowerCase() || "button" === e.tagName.toLowerCase() ? _[0].$el_text = Vi(e) : _[0].$el_text = $i(e)),
        v) {
            var m, b;
            _[0].attr__href = v;
            var y = null === (m = pt(v)) || void 0 === m ? void 0 : m.host
              , w = null == t || null === (b = t.location) || void 0 === b ? void 0 : b.host;
            y && w && y !== w && (h = v)
        }
        return {
            props: Y({
                $event_type: s.type,
                $ce_version: 1
            }, u ? {} : {
                $elements: _
            }, {
                $elements_chain: Ji(_)
            }, null !== (n = _[0]) && void 0 !== n && n.$el_text ? {
                $el_text: null === (r = _[0]) || void 0 === r ? void 0 : r.$el_text
            } : {}, h && "click" === s.type ? {
                $external_click_url: h
            } : {}, p)
        }
    }
    class Hs {
        constructor(e) {
            j(this, "_initialized", !1),
            j(this, "_isDisabledServerSide", null),
            j(this, "rageclicks", new Cs),
            j(this, "_elementsChainAsString", !1),
            this.instance = e,
            this._elementSelectors = null
        }
        get config() {
            var e, t, i = I(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
            return i.url_allowlist = null === (e = i.url_allowlist) || void 0 === e ? void 0 : e.map((e => new RegExp(e))),
            i.url_ignorelist = null === (t = i.url_ignorelist) || void 0 === t ? void 0 : t.map((e => new RegExp(e))),
            i
        }
        _addDomEventHandlers() {
            if (this.isBrowserSupported()) {
                if (t && a) {
                    var e = e => {
                        e = e || (null == t ? void 0 : t.event);
                        try {
                            this._captureEvent(e)
                        } catch (e) {
                            As.error("Failed to capture event", e)
                        }
                    }
                      , i = e => {
                        e = e || (null == t ? void 0 : t.event),
                        this._captureEvent(e, v)
                    }
                    ;
                    te(a, "submit", e, !1, !0),
                    te(a, "change", e, !1, !0),
                    te(a, "click", e, !1, !0),
                    this.config.capture_copied_text && (te(a, "copy", i, !1, !0),
                    te(a, "cut", i, !1, !0))
                }
            } else
                As.info("Disabling Automatic Event Collection because this browser is not supported")
        }
        startIfEnabled() {
            this.isEnabled && !this._initialized && (this._addDomEventHandlers(),
            this._initialized = !0)
        }
        onRemoteConfig(e) {
            e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString),
            this.instance.persistence && this.instance.persistence.register({
                [oe]: !!e.autocapture_opt_out
            }),
            this._isDisabledServerSide = !!e.autocapture_opt_out,
            this.startIfEnabled()
        }
        setElementSelectors(e) {
            this._elementSelectors = e
        }
        getElementSelectors(e) {
            var t, i = [];
            return null === (t = this._elementSelectors) || void 0 === t || t.forEach((t => {
                var n = null == a ? void 0 : a.querySelectorAll(t);
                null == n || n.forEach((n => {
                    e === n && i.push(t)
                }
                ))
            }
            )),
            i
        }
        get isEnabled() {
            var e, t, i = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[oe], n = this._isDisabledServerSide;
            if (T(n) && !M(i) && !this.instance.config.advanced_disable_decide)
                return !1;
            var r = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!i;
            return !!this.instance.config.autocapture && !r
        }
        _captureEvent(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
            if (this.isEnabled) {
                var n, r = Oi(e);
                if (Ii(r) && (r = r.parentNode || null),
                "$autocapture" === i && "click" === e.type && e instanceof MouseEvent)
                    this.instance.config.rageclick && null !== (n = this.rageclicks) && void 0 !== n && n.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, "$rageclick");
                var s = i === v;
                if (r && Ai(r, e, this.config, s, s ? ["copy", "cut"] : void 0)) {
                    var {props: o, explicitNoCapture: a} = Bs(r, {
                        e: e,
                        maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                        maskAllText: this.instance.config.mask_all_text,
                        elementAttributeIgnoreList: this.config.element_attribute_ignorelist,
                        elementsChainAsString: this._elementsChainAsString
                    });
                    if (a)
                        return !1;
                    var l = this.getElementSelectors(r);
                    if (l && l.length > 0 && (o.$element_selectors = l),
                    i === v) {
                        var u, c = Ti(null == t || null === (u = t.getSelection()) || void 0 === u ? void 0 : u.toString()), d = e.type || "clipboard";
                        if (!c)
                            return !1;
                        o.$selected_content = c,
                        o.$copy_type = d
                    }
                    return this.instance.capture(i, o),
                    !0
                }
            }
        }
        isBrowserSupported() {
            return x(null == a ? void 0 : a.querySelectorAll)
        }
    }
    var Us = q("[TracingHeaders]");
    class zs {
        constructor(e) {
            j(this, "_restoreXHRPatch", void 0),
            j(this, "_restoreFetchPatch", void 0),
            j(this, "_startCapturing", ( () => {
                var e, t, i, n;
                P(this._restoreXHRPatch) && (null === (e = _.__PosthogExtensions__) || void 0 === e || null === (t = e.tracingHeadersPatchFns) || void 0 === t || t._patchXHR(this.instance.sessionManager));
                P(this._restoreFetchPatch) && (null === (i = _.__PosthogExtensions__) || void 0 === i || null === (n = i.tracingHeadersPatchFns) || void 0 === n || n._patchFetch(this.instance.sessionManager))
            }
            )),
            this.instance = e
        }
        _loadScript(e) {
            var t, i, n;
            null !== (t = _.__PosthogExtensions__) && void 0 !== t && t.tracingHeadersPatchFns && e(),
            null === (i = _.__PosthogExtensions__) || void 0 === i || null === (n = i.loadExternalDependency) || void 0 === n || n.call(i, this.instance, "tracing-headers", (t => {
                if (t)
                    return Us.error("failed to load script", t);
                e()
            }
            ))
        }
        startIfEnabledOrStop() {
            var e, t;
            this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e = this._restoreXHRPatch) || void 0 === e || e.call(this),
            null === (t = this._restoreFetchPatch) || void 0 === t || t.call(this),
            this._restoreXHRPatch = void 0,
            this._restoreFetchPatch = void 0)
        }
    }
    var js;
    !function(e) {
        e[e.PENDING = -1] = "PENDING",
        e[e.DENIED = 0] = "DENIED",
        e[e.GRANTED = 1] = "GRANTED"
    }(js || (js = {}));
    class Ws {
        constructor(e) {
            this.instance = e
        }
        get config() {
            return this.instance.config
        }
        get consent() {
            return this.getDnt() ? js.DENIED : this.storedConsent
        }
        isOptedOut() {
            return this.consent === js.DENIED || this.consent === js.PENDING && this.config.opt_out_capturing_by_default
        }
        isOptedIn() {
            return !this.isOptedOut()
        }
        optInOut(e) {
            this.storage.set(this.storageKey, e ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie)
        }
        reset() {
            this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie)
        }
        get storageKey() {
            var {token: e, opt_out_capturing_cookie_prefix: t} = this.instance.config;
            return (t || "__ph_opt_in_out_") + e
        }
        get storedConsent() {
            var e = this.storage.get(this.storageKey);
            return "1" === e ? js.GRANTED : "0" === e ? js.DENIED : js.PENDING
        }
        get storage() {
            if (!this._storage) {
                var e = this.config.opt_out_capturing_persistence_type;
                this._storage = "localStorage" === e ? ot : rt;
                var t = "localStorage" === e ? rt : ot;
                t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t.get(this.storageKey)),
                t.remove(this.storageKey, this.config.cross_subdomain_cookie))
            }
            return this._storage
        }
        getDnt() {
            return !!this.config.respect_dnt && !!ie([null == o ? void 0 : o.doNotTrack, null == o ? void 0 : o.msDoNotTrack, _.doNotTrack], (e => f([!0, 1, "1", "yes"], e)))
        }
    }
    var Vs = q("[ExceptionAutocapture]");
    class Gs {
        constructor(e) {
            var i;
            j(this, "originalOnUnhandledRejectionHandler", void 0),
            j(this, "startCapturing", ( () => {
                var e, i, n, r;
                if (t && this.isEnabled && !this.hasHandlers && !this.isCapturing) {
                    var s = null === (e = _.__PosthogExtensions__) || void 0 === e || null === (i = e.errorWrappingFunctions) || void 0 === i ? void 0 : i.wrapOnError
                      , o = null === (n = _.__PosthogExtensions__) || void 0 === n || null === (r = n.errorWrappingFunctions) || void 0 === r ? void 0 : r.wrapUnhandledRejection;
                    if (s && o)
                        try {
                            this.unwrapOnError = s(this.captureException.bind(this)),
                            this.unwrapUnhandledRejection = o(this.captureException.bind(this))
                        } catch (e) {
                            Vs.error("failed to start", e),
                            this.stopCapturing()
                        }
                    else
                        Vs.error("failed to load error wrapping functions - cannot start")
                }
            }
            )),
            this.instance = e,
            this.remoteEnabled = !(null === (i = this.instance.persistence) || void 0 === i || !i.props[le]),
            this.startIfEnabled()
        }
        get isEnabled() {
            var e;
            return null !== (e = this.remoteEnabled) && void 0 !== e && e
        }
        get isCapturing() {
            var e;
            return !(null == t || null === (e = t.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__)
        }
        get hasHandlers() {
            return this.originalOnUnhandledRejectionHandler || this.unwrapOnError
        }
        startIfEnabled() {
            this.isEnabled && !this.isCapturing && (Vs.info("enabled, starting..."),
            this.loadScript(this.startCapturing))
        }
        loadScript(e) {
            var t, i;
            this.hasHandlers && e(),
            null === (t = _.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, "exception-autocapture", (t => {
                if (t)
                    return Vs.error("failed to load script", t);
                e()
            }
            ))
        }
        stopCapturing() {
            var e, t;
            null === (e = this.unwrapOnError) || void 0 === e || e.call(this),
            null === (t = this.unwrapUnhandledRejection) || void 0 === t || t.call(this)
        }
        onRemoteConfig(e) {
            var t = e.autocaptureExceptions;
            this.remoteEnabled = !!t || !1,
            this.instance.persistence && this.instance.persistence.register({
                [le]: this.remoteEnabled
            }),
            this.startIfEnabled()
        }
        captureException(e) {
            var t = this.instance.requestRouter.endpointFor("ui");
            e.$exception_personURL = "".concat(t, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()),
            this.instance.exceptions.sendExceptionEvent(e)
        }
    }
    var Js = q("[Web Vitals]")
      , Ys = 9e5;
    class Ks {
        constructor(e) {
            var t;
            j(this, "_enabledServerSide", !1),
            j(this, "_initialized", !1),
            j(this, "buffer", {
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
            }),
            j(this, "_flushToCapture", ( () => {
                clearTimeout(this._delayedFlushTimer),
                0 !== this.buffer.metrics.length && (this.instance.capture("$web_vitals", this.buffer.metrics.reduce(( (e, t) => z(z({}, e), {}, {
                    ["$web_vitals_".concat(t.name, "_event")]: z({}, t),
                    ["$web_vitals_".concat(t.name, "_value")]: t.value
                })), {})),
                this.buffer = {
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                })
            }
            )),
            j(this, "_addToBuffer", (e => {
                var t, i = null === (t = this.instance.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0);
                if (P(i))
                    Js.error("Could not read session ID. Dropping metrics!");
                else {
                    this.buffer = this.buffer || {
                        url: void 0,
                        metrics: [],
                        firstMetricTimestamp: void 0
                    };
                    var n = this._currentURL();
                    if (!P(n))
                        if ($(null == e ? void 0 : e.name) || $(null == e ? void 0 : e.value))
                            Js.error("Invalid metric received", e);
                        else if (this._maxAllowedValue && e.value >= this._maxAllowedValue)
                            Js.error("Ignoring metric with value >= " + this._maxAllowedValue, e);
                        else
                            this.buffer.url !== n && (this._flushToCapture(),
                            this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)),
                            P(this.buffer.url) && (this.buffer.url = n),
                            this.buffer.firstMetricTimestamp = P(this.buffer.firstMetricTimestamp) ? Date.now() : this.buffer.firstMetricTimestamp,
                            e.attribution && e.attribution.interactionTargetElement && (e.attribution.interactionTargetElement = void 0),
                            this.buffer.metrics.push(z(z({}, e), {}, {
                                $current_url: n,
                                $session_id: i.sessionId,
                                $window_id: i.windowId,
                                timestamp: Date.now()
                            })),
                            this.buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
                }
            }
            )),
            j(this, "_startCapturing", ( () => {
                var e, t, i, n, r = _.__PosthogExtensions__;
                P(r) || P(r.postHogWebVitalsCallbacks) || ({onLCP: e, onCLS: t, onFCP: i, onINP: n} = r.postHogWebVitalsCallbacks),
                e && t && i && n ? (this.allowedMetrics.indexOf("LCP") > -1 && e(this._addToBuffer.bind(this)),
                this.allowedMetrics.indexOf("CLS") > -1 && t(this._addToBuffer.bind(this)),
                this.allowedMetrics.indexOf("FCP") > -1 && i(this._addToBuffer.bind(this)),
                this.allowedMetrics.indexOf("INP") > -1 && n(this._addToBuffer.bind(this)),
                this._initialized = !0) : Js.error("web vitals callbacks not loaded - not starting")
            }
            )),
            this.instance = e,
            this._enabledServerSide = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[ue]),
            this.startIfEnabled()
        }
        get allowedMetrics() {
            var e, t, i = I(this.instance.config.capture_performance) ? null === (e = this.instance.config.capture_performance) || void 0 === e ? void 0 : e.web_vitals_allowed_metrics : void 0;
            return P(i) ? (null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.props[de]) || ["CLS", "FCP", "INP", "LCP"] : i
        }
        get flushToCaptureTimeoutMs() {
            return (I(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3
        }
        get _maxAllowedValue() {
            var e = I(this.instance.config.capture_performance) && O(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : Ys;
            return 0 < e && e <= 6e4 ? Ys : e
        }
        get isEnabled() {
            var e = I(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
            return M(e) ? e : this._enabledServerSide
        }
        startIfEnabled() {
            this.isEnabled && !this._initialized && (Js.info("enabled, starting..."),
            this.loadScript(this._startCapturing))
        }
        onRemoteConfig(e) {
            var t = I(e.capturePerformance) && !!e.capturePerformance.web_vitals
              , i = I(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
            this.instance.persistence && (this.instance.persistence.register({
                [ue]: t
            }),
            this.instance.persistence.register({
                [de]: i
            })),
            this._enabledServerSide = t,
            this.startIfEnabled()
        }
        loadScript(e) {
            var t, i, n;
            null !== (t = _.__PosthogExtensions__) && void 0 !== t && t.postHogWebVitalsCallbacks && e(),
            null === (i = _.__PosthogExtensions__) || void 0 === i || null === (n = i.loadExternalDependency) || void 0 === n || n.call(i, this.instance, "web-vitals", (t => {
                t ? Js.error("failed to load script", t) : e()
            }
            ))
        }
        _currentURL() {
            var e = t ? t.location.href : void 0;
            return e || Js.error("Could not determine current URL"),
            e
        }
    }
    var Xs = {
        icontains: (e, i) => !!t && i.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
        not_icontains: (e, i) => !!t && -1 === i.href.toLowerCase().indexOf(e.toLowerCase()),
        regex: (e, i) => !!t && vt(i.href, e),
        not_regex: (e, i) => !!t && !vt(i.href, e),
        exact: (e, t) => t.href === e,
        is_not: (e, t) => t.href !== e
    };
    class Qs {
        constructor(e) {
            var t = this;
            j(this, "getWebExperimentsAndEvaluateDisplayLogic", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                t.getWebExperiments((e => {
                    Qs.logInfo("retrieved web experiments from the server"),
                    t._flagToExperiments = new Map,
                    e.forEach((e => {
                        if (e.feature_flag_key) {
                            var i;
                            if (t._flagToExperiments)
                                Qs.logInfo("setting flag key ", e.feature_flag_key, " to web experiment ", e),
                                null === (i = t._flagToExperiments) || void 0 === i || i.set(e.feature_flag_key, e);
                            var n = t.instance.getFeatureFlag(e.feature_flag_key);
                            F(n) && e.variants[n] && t.applyTransforms(e.name, n, e.variants[n].transforms)
                        } else if (e.variants)
                            for (var r in e.variants) {
                                var s = e.variants[r];
                                Qs.matchesTestVariant(s) && t.applyTransforms(e.name, r, s.transforms)
                            }
                    }
                    ))
                }
                ), e)
            }
            )),
            this.instance = e,
            this.instance.onFeatureFlags((e => {
                this.onFeatureFlags(e)
            }
            ))
        }
        onFeatureFlags(e) {
            if (this._is_bot())
                Qs.logInfo("Refusing to render web experiment since the viewer is a likely bot");
            else if (!this.instance.config.disable_web_experiments) {
                if ($(this._flagToExperiments))
                    return this._flagToExperiments = new Map,
                    this.loadIfEnabled(),
                    void this.previewWebExperiment();
                Qs.logInfo("applying feature flags", e),
                e.forEach((e => {
                    var t;
                    if (this._flagToExperiments && null !== (t = this._flagToExperiments) && void 0 !== t && t.has(e)) {
                        var i, n = this.instance.getFeatureFlag(e), r = null === (i = this._flagToExperiments) || void 0 === i ? void 0 : i.get(e);
                        n && null != r && r.variants[n] && this.applyTransforms(r.name, n, r.variants[n].transforms)
                    }
                }
                ))
            }
        }
        previewWebExperiment() {
            var e = Qs.getWindowLocation();
            if (null != e && e.search) {
                var t = ft(null == e ? void 0 : e.search, "__experiment_id")
                  , i = ft(null == e ? void 0 : e.search, "__experiment_variant");
                t && i && (Qs.logInfo("previewing web experiments ".concat(t, " && ").concat(i)),
                this.getWebExperiments((e => {
                    this.showPreviewWebExperiment(parseInt(t), i, e)
                }
                ), !1, !0))
            }
        }
        loadIfEnabled() {
            this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
        }
        getWebExperiments(e, t, i) {
            if (this.instance.config.disable_web_experiments && !i)
                return e([]);
            var n = this.instance.get_property("$web_experiments");
            if (n && !t)
                return e(n);
            this.instance._send_request({
                url: this.instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=".concat(this.instance.config.token)),
                method: "GET",
                callback: t => {
                    if (200 !== t.statusCode || !t.json)
                        return e([]);
                    var i = t.json.experiments || [];
                    return e(i)
                }
            })
        }
        showPreviewWebExperiment(e, t, i) {
            var n = i.filter((t => t.id === e));
            n && n.length > 0 && (Qs.logInfo("Previewing web experiment [".concat(n[0].name, "] with variant [").concat(t, "]")),
            this.applyTransforms(n[0].name, t, n[0].variants[t].transforms, !0))
        }
        static matchesTestVariant(e) {
            return !$(e.conditions) && (Qs.matchUrlConditions(e) && Qs.matchUTMConditions(e))
        }
        static matchUrlConditions(e) {
            var t;
            if ($(e.conditions) || $(null === (t = e.conditions) || void 0 === t ? void 0 : t.url))
                return !0;
            var i, n, r, s = Qs.getWindowLocation();
            return !!s && (null === (i = e.conditions) || void 0 === i || !i.url || Xs[null !== (n = null === (r = e.conditions) || void 0 === r ? void 0 : r.urlMatchType) && void 0 !== n ? n : "icontains"](e.conditions.url, s))
        }
        static getWindowLocation() {
            return null == t ? void 0 : t.location
        }
        static matchUTMConditions(e) {
            var t;
            if ($(e.conditions) || $(null === (t = e.conditions) || void 0 === t ? void 0 : t.utm))
                return !0;
            var i = gi.campaignParams();
            if (i.utm_source) {
                var n, r, s, o, a, l, u, c, d, h, _, p, v, g, f, m, b = null === (n = e.conditions) || void 0 === n || null === (r = n.utm) || void 0 === r || !r.utm_campaign || (null === (s = e.conditions) || void 0 === s || null === (o = s.utm) || void 0 === o ? void 0 : o.utm_campaign) == i.utm_campaign, y = null === (a = e.conditions) || void 0 === a || null === (l = a.utm) || void 0 === l || !l.utm_source || (null === (u = e.conditions) || void 0 === u || null === (c = u.utm) || void 0 === c ? void 0 : c.utm_source) == i.utm_source, w = null === (d = e.conditions) || void 0 === d || null === (h = d.utm) || void 0 === h || !h.utm_medium || (null === (_ = e.conditions) || void 0 === _ || null === (p = _.utm) || void 0 === p ? void 0 : p.utm_medium) == i.utm_medium, S = null === (v = e.conditions) || void 0 === v || null === (g = v.utm) || void 0 === g || !g.utm_term || (null === (f = e.conditions) || void 0 === f || null === (m = f.utm) || void 0 === m ? void 0 : m.utm_term) == i.utm_term;
                return b && w && S && y
            }
            return !1
        }
        static logInfo(e) {
            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                i[n - 1] = arguments[n];
            N.info("[WebExperiments] ".concat(e), i)
        }
        applyTransforms(e, t, i, n) {
            var r;
            this._is_bot() ? Qs.logInfo("Refusing to render web experiment since the viewer is a likely bot") : "control" !== t ? i.forEach((i => {
                if (i.selector) {
                    var r;
                    Qs.logInfo("applying transform of variant ".concat(t, " for experiment ").concat(e, " "), i);
                    var s, o = 0, a = null === (r = document) || void 0 === r ? void 0 : r.querySelectorAll(i.selector);
                    if (null == a || a.forEach((e => {
                        var t = e;
                        o += 1,
                        i.attributes && i.attributes.forEach((e => {
                            switch (e.name) {
                            case "text":
                                t.innerText = e.value;
                                break;
                            case "html":
                                t.innerHTML = e.value;
                                break;
                            case "cssClass":
                                t.className = e.value;
                                break;
                            default:
                                t.setAttribute(e.name, e.value)
                            }
                        }
                        )),
                        i.text && (t.innerText = i.text),
                        i.html && (t.parentElement ? t.parentElement.innerHTML = i.html : t.innerHTML = i.html),
                        i.css && t.setAttribute("style", i.css)
                    }
                    )),
                    this.instance && this.instance.capture)
                        this.instance.capture("$web_experiment_applied", {
                            $web_experiment_name: e,
                            $web_experiment_variant: t,
                            $web_experiment_preview: n,
                            $web_experiment_document_url: null === (s = Qs.getWindowLocation()) || void 0 === s ? void 0 : s.href,
                            $web_experiment_elements_modified: o
                        })
                }
            }
            )) : (Qs.logInfo("Control variants leave the page unmodified."),
            this.instance && this.instance.capture && this.instance.capture("$web_experiment_applied", {
                $web_experiment_name: e,
                $web_experiment_preview: n,
                $web_experiment_variant: t,
                $web_experiment_document_url: null === (r = Qs.getWindowLocation()) || void 0 === r ? void 0 : r.href,
                $web_experiment_elements_modified: 0
            }))
        }
        _is_bot() {
            return o && this.instance ? Is(o, this.instance.config.custom_blocked_useragents) : void 0
        }
    }
    class Zs {
        constructor(e) {
            this.instance = e
        }
        sendExceptionEvent(e) {
            this.instance.capture("$exception", e, {
                _noTruncate: !0,
                _batchKey: "exceptionEvent"
            })
        }
    }
    var eo = ["$set_once", "$set"]
      , to = q("[SiteApps]");
    class io {
        constructor(e) {
            this.instance = e,
            this.bufferedInvocations = [],
            this.apps = {}
        }
        get isEnabled() {
            return !!this.instance.config.opt_in_site_apps
        }
        eventCollector(e, t) {
            if (t) {
                var i = this.globalsForEvent(t);
                this.bufferedInvocations.push(i),
                this.bufferedInvocations.length > 1e3 && (this.bufferedInvocations = this.bufferedInvocations.slice(10))
            }
        }
        get siteAppLoaders() {
            var e, t;
            return null === (e = _._POSTHOG_REMOTE_CONFIG) || void 0 === e || null === (t = e[this.instance.config.token]) || void 0 === t ? void 0 : t.siteApps
        }
        init() {
            if (this.isEnabled) {
                var e = this.instance._addCaptureHook(this.eventCollector.bind(this));
                this.stopBuffering = () => {
                    e(),
                    this.bufferedInvocations = [],
                    this.stopBuffering = void 0
                }
            }
        }
        globalsForEvent(e) {
            var t, i, n, r, s, o, a;
            if (!e)
                throw new Error("Event payload is required");
            var l = {}
              , u = this.instance.get_property("$groups") || []
              , c = this.instance.get_property("$stored_group_properties") || {};
            for (var [d,h] of Object.entries(c))
                l[d] = {
                    id: u[d],
                    type: d,
                    properties: h
                };
            var {$set_once: _, $set: p} = e;
            return {
                event: z(z({}, W(e, eo)), {}, {
                    properties: z(z(z({}, e.properties), p ? {
                        $set: z(z({}, null !== (t = null === (i = e.properties) || void 0 === i ? void 0 : i.$set) && void 0 !== t ? t : {}), p)
                    } : {}), _ ? {
                        $set_once: z(z({}, null !== (n = null === (r = e.properties) || void 0 === r ? void 0 : r.$set_once) && void 0 !== n ? n : {}), _)
                    } : {}),
                    elements_chain: null !== (s = null === (o = e.properties) || void 0 === o ? void 0 : o.$elements_chain) && void 0 !== s ? s : "",
                    distinct_id: null === (a = e.properties) || void 0 === a ? void 0 : a.distinct_id
                }),
                person: {
                    properties: this.instance.get_property("$stored_person_properties")
                },
                groups: l
            }
        }
        setupSiteApp(e) {
            var t = {
                id: e.id,
                loaded: !1,
                errored: !1
            };
            this.apps[e.id] = t;
            var i = i => {
                var n;
                for (var r of (this.apps[e.id].errored = !i,
                this.apps[e.id].loaded = !0,
                to.info("Site app with id ".concat(e.id, " ").concat(i ? "loaded" : "errored")),
                i && this.bufferedInvocations.length && (to.info("Processing ".concat(this.bufferedInvocations.length, " events for site app with id ").concat(e.id)),
                this.bufferedInvocations.forEach((e => {
                    var i;
                    return null === (i = t.processEvent) || void 0 === i ? void 0 : i.call(t, e)
                }
                ))),
                Object.values(this.apps)))
                    if (!r.loaded)
                        return;
                null === (n = this.stopBuffering) || void 0 === n || n.call(this)
            }
            ;
            try {
                var {processEvent: n} = e.init({
                    posthog: this.instance,
                    callback: e => {
                        i(e)
                    }
                });
                n && (t.processEvent = n)
            } catch (t) {
                to.error("Error while initializing PostHog app with config id ".concat(e.id), t),
                i(!1)
            }
        }
        onCapturedEvent(e) {
            if (0 !== Object.keys(this.apps).length) {
                var t = this.globalsForEvent(e);
                for (var i of Object.values(this.apps))
                    try {
                        var n;
                        null === (n = i.processEvent) || void 0 === n || n.call(i, t)
                    } catch (t) {
                        to.error("Error while processing event ".concat(e.event, " for site app ").concat(i.id), t)
                    }
            }
        }
        onRemoteConfig(e) {
            var t, i, n, r = this;
            if (null !== (t = this.siteAppLoaders) && void 0 !== t && t.length) {
                if (!this.isEnabled)
                    return void to.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
                for (var s of this.siteAppLoaders)
                    this.setupSiteApp(s);
                this.instance.on("eventCaptured", (e => this.onCapturedEvent(e)))
            } else if (null === (i = this.stopBuffering) || void 0 === i || i.call(this),
            null !== (n = e.siteApps) && void 0 !== n && n.length)
                if (this.isEnabled) {
                    var o = function(e, t) {
                        var i, n;
                        _["__$$ph_site_app_".concat(e)] = r.instance,
                        null === (i = _.__PosthogExtensions__) || void 0 === i || null === (n = i.loadSiteApp) || void 0 === n || n.call(i, r.instance, t, (t => {
                            if (t)
                                return to.error("Error while initializing PostHog app with config id ".concat(e), t)
                        }
                        ))
                    };
                    for (var {id: a, url: l} of e.siteApps)
                        o(a, l)
                } else
                    to.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
        }
    }
    var no = {}
      , ro = () => {}
      , so = "posthog"
      , oo = !dr && -1 === (null == h ? void 0 : h.indexOf("MSIE")) && -1 === (null == h ? void 0 : h.indexOf("Mozilla"))
      , ao = () => {
        var e, i, n;
        return {
            api_host: "https://us.i.posthog.com",
            ui_host: null,
            token: "",
            autocapture: !0,
            rageclick: !0,
            cross_subdomain_cookie: (i = null == a ? void 0 : a.location,
            n = null == i ? void 0 : i.hostname,
            !!F(n) && "herokuapp.com" !== n.split(".").slice(-2).join(".")),
            persistence: "localStorage+cookie",
            persistence_name: "",
            loaded: ro,
            store_google: !0,
            custom_campaign_params: [],
            custom_blocked_useragents: [],
            save_referrer: !0,
            capture_pageview: !0,
            capture_pageleave: "if_capture_pageview",
            debug: l && F(null == l ? void 0 : l.search) && -1 !== l.search.indexOf("__posthog_debug=true") || !1,
            verbose: !1,
            cookie_expiration: 365,
            upgrade: !1,
            disable_session_recording: !1,
            disable_persistence: !1,
            disable_web_experiments: !0,
            disable_surveys: !1,
            enable_recording_console_log: void 0,
            secure_cookie: "https:" === (null == t || null === (e = t.location) || void 0 === e ? void 0 : e.protocol),
            ip: !0,
            opt_out_capturing_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_useragent_filter: !1,
            opt_out_capturing_persistence_type: "localStorage",
            opt_out_capturing_cookie_prefix: null,
            opt_in_site_apps: !1,
            property_denylist: [],
            respect_dnt: !1,
            sanitize_properties: null,
            request_headers: {},
            inapp_protocol: "//",
            inapp_link_new_window: !1,
            request_batching: !0,
            properties_string_max_length: 65535,
            session_recording: {},
            mask_all_element_attributes: !1,
            mask_all_text: !1,
            advanced_disable_decide: !1,
            advanced_disable_feature_flags: !1,
            advanced_disable_feature_flags_on_first_load: !1,
            advanced_disable_toolbar_metrics: !1,
            feature_flag_request_timeout_ms: 3e3,
            on_request_error: e => {
                var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
                N.error(t)
            }
            ,
            get_device_id: e => e,
            _onCapture: ro,
            capture_performance: void 0,
            name: "posthog",
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            person_profiles: "identified_only",
            __add_tracing_headers: !1,
            before_send: void 0
        }
    }
      , lo = e => {
        var t = {};
        P(e.process_person) || (t.person_profiles = e.process_person),
        P(e.xhr_headers) || (t.request_headers = e.xhr_headers),
        P(e.cookie_name) || (t.persistence_name = e.cookie_name),
        P(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
        var i = Y({}, t, e);
        return k(e.property_blacklist) && (P(e.property_denylist) ? i.property_denylist = e.property_blacklist : k(e.property_denylist) ? i.property_denylist = [...e.property_blacklist, ...e.property_denylist] : N.error("Invalid value for property_denylist config: " + e.property_denylist)),
        i
    }
    ;
    class uo {
        constructor() {
            j(this, "__forceAllowLocalhost", !1)
        }
        get _forceAllowLocalhost() {
            return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(e) {
            N.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),
            this.__forceAllowLocalhost = e
        }
    }
    class co {
        get decideEndpointWasHit() {
            var e, t;
            return null !== (e = null === (t = this.featureFlags) || void 0 === t ? void 0 : t.hasLoadedFlags) && void 0 !== e && e
        }
        constructor() {
            j(this, "webPerformance", new uo),
            j(this, "version", p.LIB_VERSION),
            j(this, "_internalEventEmitter", new Or),
            this.config = ao(),
            this.SentryIntegration = Ir,
            this.sentryIntegration = e => function(e, t) {
                var i = xr(e, t);
                return {
                    name: kr,
                    processEvent: e => i(e)
                }
            }(this, e),
            this.__request_queue = [],
            this.__loaded = !1,
            this.analyticsDefaultEndpoint = "/e/",
            this._initialPageviewCaptured = !1,
            this._initialPersonProfilesConfig = null,
            this.featureFlags = new We(this),
            this.toolbar = new lr(this),
            this.scrollManager = new Ls(this),
            this.pageViewManager = new $r(this),
            this.surveys = new bs(this),
            this.experiments = new Qs(this),
            this.exceptions = new Zs(this),
            this.rateLimiter = new ws(this),
            this.requestRouter = new Er(this),
            this.consent = new Ws(this),
            this.people = {
                set: (e, t, i) => {
                    var n = F(e) ? {
                        [e]: t
                    } : e;
                    this.setPersonProperties(n),
                    null == i || i({})
                }
                ,
                set_once: (e, t, i) => {
                    var n = F(e) ? {
                        [e]: t
                    } : e;
                    this.setPersonProperties(void 0, n),
                    null == i || i({})
                }
            },
            this.on("eventCaptured", (e => N.info('send "'.concat(null == e ? void 0 : e.event, '"'), e)))
        }
        init(e, t, i) {
            if (i && i !== so) {
                var n, r = null !== (n = no[i]) && void 0 !== n ? n : new co;
                return r._init(e, t, i),
                no[i] = r,
                no[so][i] = r,
                r
            }
            return this._init(e, t, i)
        }
        _init(i) {
            var n, r, s, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
            if (P(i) || R(i))
                return N.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),
                this;
            if (this.__loaded)
                return N.warn("You have already initialized PostHog! Re-initializing is a no-op"),
                this;
            this.__loaded = !0,
            this.config = {},
            this._triggered_notifs = [],
            o.person_profiles && (this._initialPersonProfilesConfig = o.person_profiles),
            this.set_config(Y({}, ao(), lo(o), {
                name: a,
                token: i
            })),
            this.config.on_xhr_error && N.error("on_xhr_error is deprecated. Use on_request_error instead"),
            this.compression = o.disable_compression ? void 0 : e.GZipJS,
            this.persistence = new mi(this.config),
            this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new mi(z(z({}, this.config), {}, {
                persistence: "sessionStorage"
            }));
            var l = z({}, this.persistence.props)
              , u = z({}, this.sessionPersistence.props);
            if (this._requestQueue = new ur((e => this._send_retriable_request(e))),
            this._retryQueue = new mr(this),
            this.__request_queue = [],
            this.config.__preview_experimental_cookieless_mode || (this.sessionManager = new wr(this),
            this.sessionPropsManager = new Es(this.sessionManager,this.persistence)),
            new zs(this).startIfEnabledOrStop(),
            this.siteApps = new io(this),
            null === (n = this.siteApps) || void 0 === n || n.init(),
            this.config.__preview_experimental_cookieless_mode || (this.sessionRecording = new tr(this),
            this.sessionRecording.startIfEnabledOrStop()),
            this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(),
            this.autocapture = new Hs(this),
            this.autocapture.startIfEnabled(),
            this.surveys.loadIfEnabled(),
            this.heatmaps = new Ms(this),
            this.heatmaps.startIfEnabled(),
            this.webVitalsAutocapture = new Ks(this),
            this.exceptionObserver = new Gs(this),
            this.exceptionObserver.startIfEnabled(),
            this.deadClicksAutocapture = new Ts(this,Rs),
            this.deadClicksAutocapture.startIfEnabled(),
            p.DEBUG = p.DEBUG || this.config.debug,
            p.DEBUG && N.info("Starting in debug mode", {
                this: this,
                config: o,
                thisC: z({}, this.config),
                p: l,
                s: u
            }),
            this._sync_opt_out_with_persistence(),
            void 0 !== (null === (r = o.bootstrap) || void 0 === r ? void 0 : r.distinctID)) {
                var c, d, h = this.config.get_device_id(Qe()), _ = null !== (c = o.bootstrap) && void 0 !== c && c.isIdentifiedID ? h : o.bootstrap.distinctID;
                this.persistence.set_property(Re, null !== (d = o.bootstrap) && void 0 !== d && d.isIdentifiedID ? "identified" : "anonymous"),
                this.register({
                    distinct_id: o.bootstrap.distinctID,
                    $device_id: _
                })
            }
            if (this._hasBootstrappedFeatureFlags()) {
                var v, g, f = Object.keys((null === (v = o.bootstrap) || void 0 === v ? void 0 : v.featureFlags) || {}).filter((e => {
                    var t, i;
                    return !(null === (t = o.bootstrap) || void 0 === t || null === (i = t.featureFlags) || void 0 === i || !i[e])
                }
                )).reduce(( (e, t) => {
                    var i, n;
                    return e[t] = (null === (i = o.bootstrap) || void 0 === i || null === (n = i.featureFlags) || void 0 === n ? void 0 : n[t]) || !1,
                    e
                }
                ), {}), m = Object.keys((null === (g = o.bootstrap) || void 0 === g ? void 0 : g.featureFlagPayloads) || {}).filter((e => f[e])).reduce(( (e, t) => {
                    var i, n, r, s;
                    null !== (i = o.bootstrap) && void 0 !== i && null !== (n = i.featureFlagPayloads) && void 0 !== n && n[t] && (e[t] = null === (r = o.bootstrap) || void 0 === r || null === (s = r.featureFlagPayloads) || void 0 === s ? void 0 : s[t]);
                    return e
                }
                ), {});
                this.featureFlags.receivedFeatureFlags({
                    featureFlags: f,
                    featureFlagPayloads: m
                })
            }
            if (this.config.__preview_experimental_cookieless_mode)
                this.register_once({
                    distinct_id: Ne,
                    $device_id: null
                }, "");
            else if (!this.get_distinct_id()) {
                var b = this.config.get_device_id(Qe());
                this.register_once({
                    distinct_id: b,
                    $device_id: b
                }, ""),
                this.persistence.set_property(Re, "anonymous")
            }
            return null == t || null === (s = t.addEventListener) || void 0 === s || s.call(t, "onpagehide"in self ? "pagehide" : "unload", this._handle_unload.bind(this)),
            this.toolbar.maybeLoadToolbar(),
            o.segment ? Tr(this, ( () => this._loaded())) : this._loaded(),
            x(this.config._onCapture) && this.config._onCapture !== ro && (N.warn("onCapture is deprecated. Please use `before_send` instead"),
            this.on("eventCaptured", (e => this.config._onCapture(e.event, e)))),
            this
        }
        _onRemoteConfig(t) {
            var i, n, r, s, o, l, u, c, d;
            if (!a || !a.body)
                return N.info("document not ready yet, trying again in 500 milliseconds..."),
                void setTimeout(( () => {
                    this._onRemoteConfig(t)
                }
                ), 500);
            this.compression = void 0,
            t.supportedCompression && !this.config.disable_compression && (this.compression = f(t.supportedCompression, e.GZipJS) ? e.GZipJS : f(t.supportedCompression, e.Base64) ? e.Base64 : void 0),
            null !== (i = t.analytics) && void 0 !== i && i.endpoint && (this.analyticsDefaultEndpoint = t.analytics.endpoint),
            this.set_config({
                person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : t.defaultIdentifiedOnly ? "identified_only" : "always"
            }),
            null === (n = this.siteApps) || void 0 === n || n.onRemoteConfig(t),
            null === (r = this.sessionRecording) || void 0 === r || r.onRemoteConfig(t),
            null === (s = this.autocapture) || void 0 === s || s.onRemoteConfig(t),
            null === (o = this.heatmaps) || void 0 === o || o.onRemoteConfig(t),
            null === (l = this.surveys) || void 0 === l || l.onRemoteConfig(t),
            null === (u = this.webVitalsAutocapture) || void 0 === u || u.onRemoteConfig(t),
            null === (c = this.exceptionObserver) || void 0 === c || c.onRemoteConfig(t),
            null === (d = this.deadClicksAutocapture) || void 0 === d || d.onRemoteConfig(t)
        }
        _loaded() {
            try {
                this.config.loaded(this)
            } catch (e) {
                N.critical("`loaded` function failed", e)
            }
            this._start_queue_if_opted_in(),
            this.config.capture_pageview && setTimeout(( () => {
                this.consent.isOptedIn() && this._captureInitialPageview()
            }
            ), 1),
            new nr(this).load(),
            this.featureFlags.decide()
        }
        _start_queue_if_opted_in() {
            var e;
            this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable())
        }
        _dom_loaded() {
            this.has_opted_out_capturing() || G(this.__request_queue, (e => this._send_retriable_request(e))),
            this.__request_queue = [],
            this._start_queue_if_opted_in()
        }
        _handle_unload() {
            var e, t;
            this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"),
            null === (e = this._requestQueue) || void 0 === e || e.unload(),
            null === (t = this._retryQueue) || void 0 === t || t.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, {
                transport: "sendBeacon"
            })
        }
        _send_request(e) {
            this.__loaded && (oo ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport,
            e.url = _r(e.url, {
                ip: this.config.ip ? 1 : 0
            }),
            e.headers = z({}, this.config.request_headers),
            e.compression = "best-available" === e.compression ? this.compression : e.compression,
            e.fetchOptions = e.fetchOptions || this.config.fetch_options,
            (e => {
                var t, i, n, r = z({}, e);
                r.timeout = r.timeout || 6e4,
                r.url = _r(r.url, {
                    _: (new Date).getTime().toString(),
                    ver: p.LIB_VERSION,
                    compression: r.compression
                });
                var s = null !== (t = r.transport) && void 0 !== t ? t : "fetch"
                  , o = null !== (i = null === (n = ie(gr, (e => e.transport === s))) || void 0 === n ? void 0 : n.method) && void 0 !== i ? i : gr[0].method;
                if (!o)
                    throw new Error("No available transport method");
                o(r)
            }
            )(z(z({}, e), {}, {
                callback: t => {
                    var i, n, r;
                    (this.rateLimiter.checkForLimiting(t),
                    t.statusCode >= 400) && (null === (n = (r = this.config).on_request_error) || void 0 === n || n.call(r, t));
                    null === (i = e.callback) || void 0 === i || i.call(e, t)
                }
            }))))
        }
        _send_retriable_request(e) {
            this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e)
        }
        _execute_array(e) {
            var t, i = [], n = [], r = [];
            G(e, (e => {
                e && (t = e[0],
                k(t) ? r.push(e) : x(e) ? e.call(this) : k(e) && "alias" === t ? i.push(e) : k(e) && -1 !== t.indexOf("capture") && x(this[t]) ? r.push(e) : n.push(e))
            }
            ));
            var s = function(e, t) {
                G(e, (function(e) {
                    if (k(e[0])) {
                        var i = t;
                        J(e, (function(e) {
                            i = i[e[0]].apply(i, e.slice(1))
                        }
                        ))
                    } else
                        this[e[0]].apply(this, e.slice(1))
                }
                ), t)
            };
            s(i, this),
            s(n, this),
            s(r, this)
        }
        _hasBootstrappedFeatureFlags() {
            var e, t;
            return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
        }
        push(e) {
            this._execute_array([e])
        }
        capture(e, t, i) {
            var n;
            if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
                if (!this.consent.isOptedOut())
                    if (!P(e) && F(e)) {
                        if (this.config.opt_out_useragent_filter || !this._is_bot()) {
                            var r = null != i && i.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                            if (null == r || !r.isRateLimited) {
                                this.sessionPersistence.update_search_keyword(),
                                this.config.store_google && this.sessionPersistence.update_campaign_params(),
                                this.config.save_referrer && this.sessionPersistence.update_referrer_info(),
                                (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
                                var s = new Date
                                  , o = (null == i ? void 0 : i.timestamp) || s
                                  , a = Qe()
                                  , l = {
                                    uuid: a,
                                    event: e,
                                    properties: this._calculate_event_properties(e, t || {}, o, a)
                                };
                                r && (l.properties.$lib_rate_limit_remaining_tokens = r.remainingTokens),
                                (null == i ? void 0 : i.$set) && (l.$set = null == i ? void 0 : i.$set);
                                var u = this._calculate_set_once_properties(null == i ? void 0 : i.$set_once);
                                u && (l.$set_once = u),
                                (l = ee(l, null != i && i._noTruncate ? null : this.config.properties_string_max_length)).timestamp = o,
                                P(null == i ? void 0 : i.timestamp) || (l.properties.$event_time_override_provided = !0,
                                l.properties.$event_time_override_system_time = s);
                                var c = z(z({}, l.properties.$set), l.$set);
                                if (C(c) || this.setPersonPropertiesForFlags(c),
                                !$(this.config.before_send)) {
                                    var d = this._runBeforeSend(l);
                                    if (!d)
                                        return;
                                    l = d
                                }
                                this._internalEventEmitter.emit("eventCaptured", l);
                                var h = {
                                    method: "POST",
                                    url: null !== (n = null == i ? void 0 : i._url) && void 0 !== n ? n : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                    data: l,
                                    compression: "best-available",
                                    batchKey: null == i ? void 0 : i._batchKey
                                };
                                return !this.config.request_batching || i && (null == i || !i._batchKey) || null != i && i.send_instantly ? this._send_retriable_request(h) : this._requestQueue.enqueue(h),
                                l
                            }
                            N.critical("This capture call is ignored due to client rate limiting.")
                        }
                    } else
                        N.error("No event name provided to posthog.capture")
            } else
                N.uninitializedWarning("posthog.capture")
        }
        _addCaptureHook(e) {
            return this.on("eventCaptured", (t => e(t.event, t)))
        }
        _calculate_event_properties(e, t, i, n) {
            if (i = i || new Date,
            !this.persistence || !this.sessionPersistence)
                return t;
            var r = this.persistence.remove_event_timer(e)
              , s = z({}, t);
            if (s.token = this.config.token,
            this.config.__preview_experimental_cookieless_mode && (s.$cklsh_mode = !0),
            "$snapshot" === e) {
                var o = z(z({}, this.persistence.properties()), this.sessionPersistence.properties());
                return s.distinct_id = o.distinct_id,
                (!F(s.distinct_id) && !O(s.distinct_id) || R(s.distinct_id)) && N.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),
                s
            }
            var l, u = gi.properties();
            if (this.sessionManager) {
                var {sessionId: c, windowId: d} = this.sessionManager.checkAndGetSessionAndWindowId();
                s.$session_id = c,
                s.$window_id = d
            }
            if (this.sessionRecording && (s.$recording_status = this.sessionRecording.status),
            this.requestRouter.region === br.CUSTOM && (s.$lib_custom_api_host = this.config.api_host),
            this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)) {
                var _ = this.sessionPropsManager.getSessionProps();
                s = Y(s, _)
            }
            if (l = "$pageview" === e ? this.pageViewManager.doPageView(i, n) : "$pageleave" === e ? this.pageViewManager.doPageLeave(i) : this.pageViewManager.doEvent(),
            s = Y(s, l),
            "$pageview" === e && a && (s.title = a.title),
            !P(r)) {
                var p = i.getTime() - r;
                s.$duration = parseFloat((p / 1e3).toFixed(3))
            }
            h && this.config.opt_out_useragent_filter && (s.$browser_type = this._is_bot() ? "bot" : "browser"),
            (s = Y({}, u, this.persistence.properties(), this.sessionPersistence.properties(), s)).$is_identified = this._isIdentified(),
            k(this.config.property_denylist) ? J(this.config.property_denylist, (function(e) {
                delete s[e]
            }
            )) : N.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
            var v = this.config.sanitize_properties;
            v && (N.error("sanitize_properties is deprecated. Use before_send instead"),
            s = v(s, e));
            var g = this._hasPersonProcessing();
            return s.$process_person_profile = g,
            g && this._requirePersonProcessing("_calculate_event_properties"),
            s
        }
        _calculate_set_once_properties(e) {
            if (!this.persistence || !this._hasPersonProcessing())
                return e;
            var t = Y({}, this.persistence.get_initial_props(), e || {})
              , i = this.config.sanitize_properties;
            return i && (N.error("sanitize_properties is deprecated. Use before_send instead"),
            t = i(t, "$set_once")),
            C(t) ? void 0 : t
        }
        register(e, t) {
            var i;
            null === (i = this.persistence) || void 0 === i || i.register(e, t)
        }
        register_once(e, t, i) {
            var n;
            null === (n = this.persistence) || void 0 === n || n.register_once(e, t, i)
        }
        register_for_session(e) {
            var t;
            null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
        }
        unregister(e) {
            var t;
            null === (t = this.persistence) || void 0 === t || t.unregister(e)
        }
        unregister_for_session(e) {
            var t;
            null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
        }
        _register_single(e, t) {
            this.register({
                [e]: t
            })
        }
        getFeatureFlag(e, t) {
            return this.featureFlags.getFeatureFlag(e, t)
        }
        getFeatureFlagPayload(e) {
            var t = this.featureFlags.getFeatureFlagPayload(e);
            try {
                return JSON.parse(t)
            } catch (e) {
                return t
            }
        }
        isFeatureEnabled(e, t) {
            return this.featureFlags.isFeatureEnabled(e, t)
        }
        reloadFeatureFlags() {
            this.featureFlags.reloadFeatureFlags()
        }
        updateEarlyAccessFeatureEnrollment(e, t) {
            this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
        }
        getEarlyAccessFeatures(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this.featureFlags.getEarlyAccessFeatures(e, t)
        }
        on(e, t) {
            return this._internalEventEmitter.on(e, t)
        }
        onFeatureFlags(e) {
            return this.featureFlags.onFeatureFlags(e)
        }
        onSessionId(e) {
            var t, i;
            return null !== (t = null === (i = this.sessionManager) || void 0 === i ? void 0 : i.onSessionId(e)) && void 0 !== t ? t : () => {}
        }
        getSurveys(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this.surveys.getSurveys(e, t)
        }
        getActiveMatchingSurveys(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this.surveys.getActiveMatchingSurveys(e, t)
        }
        renderSurvey(e, t) {
            this.surveys.renderSurvey(e, t)
        }
        canRenderSurvey(e) {
            this.surveys.canRenderSurvey(e)
        }
        getNextSurveyStep(e, t, i) {
            return this.surveys.getNextSurveyStep(e, t, i)
        }
        identify(e, t, i) {
            if (!this.__loaded || !this.persistence)
                return N.uninitializedWarning("posthog.identify");
            if (O(e) && (e = e.toString(),
            N.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),
            e) {
                if (["distinct_id", "distinctid"].includes(e.toLowerCase()))
                    N.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
                else if (this._requirePersonProcessing("posthog.identify")) {
                    var n = this.get_distinct_id();
                    if (this.register({
                        $user_id: e
                    }),
                    !this.get_property("$device_id")) {
                        var r = n;
                        this.register_once({
                            $had_persisted_distinct_id: !0,
                            $device_id: r
                        }, "")
                    }
                    e !== n && e !== this.get_property(re) && (this.unregister(re),
                    this.register({
                        distinct_id: e
                    }));
                    var s = "anonymous" === (this.persistence.get_property(Re) || "anonymous");
                    e !== n && s ? (this.persistence.set_property(Re, "identified"),
                    this.setPersonPropertiesForFlags(t || {}, !1),
                    this.capture("$identify", {
                        distinct_id: e,
                        $anon_distinct_id: n
                    }, {
                        $set: t || {},
                        $set_once: i || {}
                    }),
                    this.featureFlags.setAnonymousDistinctId(n)) : (t || i) && this.setPersonProperties(t, i),
                    e !== n && (this.reloadFeatureFlags(),
                    this.unregister(Fe))
                }
            } else
                N.error("Unique user id has not been set in posthog.identify")
        }
        setPersonProperties(e, t) {
            (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e || {}),
            this.capture("$set", {
                $set: e || {},
                $set_once: t || {}
            }))
        }
        group(e, t, i) {
            if (e && t) {
                if (this._requirePersonProcessing("posthog.group")) {
                    var n = this.getGroups();
                    n[e] !== t && this.resetGroupPropertiesForFlags(e),
                    this.register({
                        $groups: z(z({}, n), {}, {
                            [e]: t
                        })
                    }),
                    i && (this.capture("$groupidentify", {
                        $group_type: e,
                        $group_key: t,
                        $group_set: i
                    }),
                    this.setGroupPropertiesForFlags({
                        [e]: i
                    })),
                    n[e] === t || i || this.reloadFeatureFlags()
                }
            } else
                N.error("posthog.group requires a group type and group key")
        }
        resetGroups() {
            this.register({
                $groups: {}
            }),
            this.resetGroupPropertiesForFlags(),
            this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.featureFlags.setPersonPropertiesForFlags(e, t)
        }
        resetPersonPropertiesForFlags() {
            this.featureFlags.resetPersonPropertiesForFlags()
        }
        setGroupPropertiesForFlags(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t)
        }
        resetGroupPropertiesForFlags(e) {
            this.featureFlags.resetGroupPropertiesForFlags(e)
        }
        reset(e) {
            var t, i, n, r, s;
            if (N.info("reset"),
            !this.__loaded)
                return N.uninitializedWarning("posthog.reset");
            var o = this.get_property("$device_id");
            if (this.consent.reset(),
            null === (t = this.persistence) || void 0 === t || t.clear(),
            null === (i = this.sessionPersistence) || void 0 === i || i.clear(),
            null === (n = this.surveys) || void 0 === n || n.reset(),
            null === (r = this.persistence) || void 0 === r || r.set_property(Re, "anonymous"),
            null === (s = this.sessionManager) || void 0 === s || s.resetSessionId(),
            this.config.__preview_experimental_cookieless_mode)
                this.register_once({
                    distinct_id: Ne,
                    $device_id: null
                }, "");
            else {
                var a = this.config.get_device_id(Qe());
                this.register_once({
                    distinct_id: a,
                    $device_id: e ? a : o
                }, "")
            }
        }
        get_distinct_id() {
            return this.get_property("distinct_id")
        }
        getGroups() {
            return this.get_property("$groups") || {}
        }
        get_session_id() {
            var e, t;
            return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : ""
        }
        get_session_replay_url(e) {
            if (!this.sessionManager)
                return "";
            var {sessionId: t, sessionStartTimestamp: i} = this.sessionManager.checkAndGetSessionAndWindowId(!0)
              , n = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(t));
            if (null != e && e.withTimestamp && i) {
                var r, s = null !== (r = e.timestampLookBack) && void 0 !== r ? r : 10;
                if (!i)
                    return n;
                var o = Math.max(Math.floor(((new Date).getTime() - i) / 1e3) - s, 0);
                n += "?t=".concat(o)
            }
            return n
        }
        alias(e, t) {
            return e === this.get_property(ne) ? (N.critical("Attempting to create alias for existing People user - aborting."),
            -2) : this._requirePersonProcessing("posthog.alias") ? (P(t) && (t = this.get_distinct_id()),
            e !== t ? (this._register_single(re, e),
            this.capture("$create_alias", {
                alias: e,
                distinct_id: t
            })) : (N.warn("alias matches current distinct_id - skipping api call."),
            this.identify(e),
            -1)) : void 0
        }
        set_config(e) {
            var t, i, n, r, s = z({}, this.config);
            I(e) && (Y(this.config, lo(e)),
            null === (t = this.persistence) || void 0 === t || t.update_config(this.config, s),
            this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new mi(z(z({}, this.config), {}, {
                persistence: "sessionStorage"
            })),
            ot.is_supported() && "true" === ot.get("ph_debug") && (this.config.debug = !0),
            this.config.debug && (p.DEBUG = !0,
            N.info("set_config", {
                config: e,
                oldConfig: s,
                newConfig: z({}, this.config)
            })),
            null === (i = this.sessionRecording) || void 0 === i || i.startIfEnabledOrStop(),
            null === (n = this.autocapture) || void 0 === n || n.startIfEnabled(),
            null === (r = this.heatmaps) || void 0 === r || r.startIfEnabled(),
            this.surveys.loadIfEnabled(),
            this._sync_opt_out_with_persistence())
        }
        startSessionRecording(e) {
            var t = !0 === e
              , i = {
                sampling: t || !(null == e || !e.sampling),
                linked_flag: t || !(null == e || !e.linked_flag),
                url_trigger: t || !(null == e || !e.url_trigger),
                event_trigger: t || !(null == e || !e.event_trigger)
            };
            if (Object.values(i).some(Boolean)) {
                var n, r, s, o, a;
                if (null === (n = this.sessionManager) || void 0 === n || n.checkAndGetSessionAndWindowId(),
                i.sampling)
                    null === (r = this.sessionRecording) || void 0 === r || r.overrideSampling();
                if (i.linked_flag)
                    null === (s = this.sessionRecording) || void 0 === s || s.overrideLinkedFlag();
                if (i.url_trigger)
                    null === (o = this.sessionRecording) || void 0 === o || o.overrideTrigger("url");
                if (i.event_trigger)
                    null === (a = this.sessionRecording) || void 0 === a || a.overrideTrigger("event")
            }
            this.set_config({
                disable_session_recording: !1
            })
        }
        stopSessionRecording() {
            this.set_config({
                disable_session_recording: !0
            })
        }
        sessionRecordingStarted() {
            var e;
            return !(null === (e = this.sessionRecording) || void 0 === e || !e.started)
        }
        captureException(e, t) {
            var i, n = new Error("PostHog syntheticException"), r = x(null === (i = _.__PosthogExtensions__) || void 0 === i ? void 0 : i.parseErrorAsProperties) ? _.__PosthogExtensions__.parseErrorAsProperties([e.message, void 0, void 0, void 0, e], {
                syntheticException: n
            }) : z({
                $exception_level: "error",
                $exception_list: [{
                    type: e.name,
                    value: e.message,
                    mechanism: {
                        handled: !0,
                        synthetic: !1
                    }
                }]
            }, t);
            this.exceptions.sendExceptionEvent(r)
        }
        loadToolbar(e) {
            return this.toolbar.loadToolbar(e)
        }
        get_property(e) {
            var t;
            return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
        }
        getSessionProperty(e) {
            var t;
            return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
        }
        toString() {
            var e, t = null !== (e = this.config.name) && void 0 !== e ? e : so;
            return t !== so && (t = so + "." + t),
            t
        }
        _isIdentified() {
            var e, t;
            return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(Re)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(Re))
        }
        _hasPersonProcessing() {
            var e, t, i, n;
            return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && C(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[re]) && (null === (i = this.persistence) || void 0 === i || null === (n = i.props) || void 0 === n || !n[Ae]))
        }
        _shouldCapturePageleave() {
            return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview
        }
        createPersonProfile() {
            this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {})
        }
        _requirePersonProcessing(e) {
            return "never" === this.config.person_profiles ? (N.error(e + ' was called, but process_person is set to "never". This call will be ignored.'),
            !1) : (this._register_single(Ae, !0),
            !0)
        }
        _sync_opt_out_with_persistence() {
            var e, t, i, n, r = this.consent.isOptedOut(), s = this.config.opt_out_persistence_by_default, o = this.config.disable_persistence || r && !!s;
            (null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== o && (null === (i = this.persistence) || void 0 === i || i.set_disabled(o));
            (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== o && (null === (n = this.sessionPersistence) || void 0 === n || n.set_disabled(o))
        }
        opt_in_capturing(e) {
            var t;
            (this.consent.optInOut(!0),
            this._sync_opt_out_with_persistence(),
            P(null == e ? void 0 : e.captureEventName) || null != e && e.captureEventName) && this.capture(null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t ? t : "$opt_in", null == e ? void 0 : e.captureProperties, {
                send_instantly: !0
            });
            this.config.capture_pageview && this._captureInitialPageview()
        }
        opt_out_capturing() {
            this.consent.optInOut(!1),
            this._sync_opt_out_with_persistence()
        }
        has_opted_in_capturing() {
            return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
            return this.consent.isOptedOut()
        }
        clear_opt_in_out_capturing() {
            this.consent.reset(),
            this._sync_opt_out_with_persistence()
        }
        _is_bot() {
            return o ? Is(o, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
            a && !this._initialPageviewCaptured && (this._initialPageviewCaptured = !0,
            this.capture("$pageview", {
                title: a.title
            }, {
                send_instantly: !0
            }))
        }
        debug(e) {
            !1 === e ? (null == t || t.console.log("You've disabled debug mode."),
            localStorage && localStorage.removeItem("ph_debug"),
            this.set_config({
                debug: !1
            })) : (null == t || t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),
            localStorage && localStorage.setItem("ph_debug", "true"),
            this.set_config({
                debug: !0
            }))
        }
        _runBeforeSend(e) {
            if ($(this.config.before_send))
                return e;
            var t = k(this.config.before_send) ? this.config.before_send : [this.config.before_send]
              , i = e;
            for (var n of t) {
                if (i = n(i),
                $(i)) {
                    var r = "Event '".concat(e.event, "' was rejected in beforeSend function");
                    return A(e.event) ? N.warn("".concat(r, ". This can cause unexpected behavior.")) : N.info(r),
                    null
                }
                i.properties && !C(i.properties) || N.warn("Event '".concat(e.event, "' has no properties after beforeSend function, this is likely an error."))
            }
            return i
        }
        getPageViewId() {
            var e;
            return null === (e = this.pageViewManager._currentPageview) || void 0 === e ? void 0 : e.pageViewId
        }
    }
    !function(e, t) {
        for (var i = 0; i < t.length; i++)
            e.prototype[t[i]] = Q(e.prototype[t[i]])
    }(co, ["identify"]);
    var ho, _o;
    ho = no[so] = new co,
    (_o = _.posthog) && J(_o._i, (function(e) {
        if (e && k(e)) {
            var t = ho.init(e[0], e[1], e[2])
              , i = _o[e[2]] || _o;
            t && (t._execute_array.call(t.people, i.people),
            t._execute_array(i))
        }
    }
    )),
    _.posthog = ho,
    function() {
        function e() {
            e.done || (e.done = !0,
            oo = !1,
            J(no, (function(e) {
                e._dom_loaded()
            }
            )))
        }
        null != a && a.addEventListener && ("complete" === a.readyState ? e() : a.addEventListener("DOMContentLoaded", e, !1)),
        t && te(t, "load", e, !0)
    }()
}();
//# sourceMappingURL=array.js.map
