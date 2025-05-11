/*! For license information please see bundle.eccdb719246c73f4af95.js.LICENSE.txt */
"use strict";
(window.webpackChunk_smartlook_recorder = window.webpackChunk_smartlook_recorder || []).push([[23], {
    684: (e, t, i) => {
        i.r(t),
        i.d(t, {
            CANVAS_ATTRIBUTE_POSSIBLE_VALUES: () => oi,
            Recorder: () => zi,
            recordingIgnoreAvailableValues: () => ni
        });
        var s, n, o = i(451), r = i(185), a = i(409), d = i(311), c = i(955), l = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        !function(e) {
            e[e.LOW = 0] = "LOW",
            e[e.NORMAL = 1] = "NORMAL",
            e[e.HIGH = 2] = "HIGH"
        }(n || (n = {}));
        class h {
            constructor() {
                this._recordRelativeStartTime = 0,
                this.isTaskQueueRunning = !1,
                this.taskQueue = [],
                this.scheduleTask = (e, t, i) => {
                    this.taskQueue.push([e, t, i]),
                    this.isTaskQueueRunning || (this.isTaskQueueRunning = !0,
                    this.runTaskQueue())
                }
                ,
                this.runTaskQueue = () => l(this, void 0, void 0, (function*() {
                    var e;
                    if (0 !== this.taskQueue.length) {
                        for (this.taskQueue.sort(( (e, t) => t[2] - e[2])); this.taskQueue.length > 0; ) {
                            const t = this.taskQueue.shift();
                            if (t) {
                                const i = t[0]();
                                try {
                                    yield s.processTaskIterator(i)
                                } catch (i) {
                                    const s = performance.now() - this._recordRelativeStartTime;
                                    if (i instanceof r.f && !i.shouldReport)
                                        d.R.debug("Recorder error happened", i, {
                                            taskName: t[1],
                                            time: s
                                        });
                                    else {
                                        const n = typeof i
                                          , o = null === (e = null == i ? void 0 : i.constructor) || void 0 === e ? void 0 : e.name;
                                        d.R.error(`Task "${t[1]}" could not be completed`, {
                                            type: n,
                                            constructor: o,
                                            error: i,
                                            time: s
                                        })
                                    }
                                }
                            }
                        }
                        this.isTaskQueueRunning = !1
                    } else
                        this.isTaskQueueRunning = !1
                }
                ))
            }
            set recordRelativeStartTime(e) {
                this._recordRelativeStartTime = e
            }
            finishAllQueuedTasks(e) {
                this.scheduleTask((function*() {
                    e()
                }
                ), "finish", n.LOW)
            }
            task(e, t) {
                const {scheduleTask: i} = this;
                return (s, n, o) => {
                    const r = o.value;
                    return {
                        configurable: !0,
                        get: () => function(...s) {
                            const n = performance.now();
                            if (void 0 === r)
                                throw new TypeError("Given function is not of type Generator.");
                            const o = r.bind(this, ...s, n);
                            i(o, e, t)
                        }
                    }
                }
            }
        }
        s = h,
        h.processTaskIterator = e => l(void 0, void 0, void 0, (function*() {
            let t = !1;
            for (; !t; )
                t = yield new Promise(( (t, i) => {
                    requestIdleCallback((s => {
                        const n = performance.now();
                        for (; s.didTimeout ? performance.now() - n < ("hidden" === document.visibilityState ? 200 : 16) : Boolean(s.timeRemaining()); )
                            try {
                                const {done: i} = e.next();
                                if (i)
                                    return void t(!0)
                            } catch (e) {
                                return void i(e)
                            }
                        t(!1)
                    }
                    ), {
                        timeout: 500
                    })
                }
                ))
        }
        ));
        const u = new h;
        var p, v, g = i(53), f = i(824);
        (v = p || (p = {})).ADOPTED_STYLESHEETS_ASSIGN = "adopted-stylesheets-assign",
        v.ADOPTED_STYLESHEET_DISCOVERY = "adopted-stylesheet-discovery",
        v.ADOPTED_STYLESHEET_MUTATION = "adopted-stylesheet-mutation",
        v.ANIMATION = "animation",
        v.ASSET = "asset",
        v.BLUR = "blur",
        v.CANVAS_CHUNK = "canvas-chunk-alfa",
        v.CANVAS_START = "canvas-start-alfa",
        v.CONSOLE = "console",
        v.CUSTOM_EVENT = "custom-event",
        v.DOM_DISCOVERY = "dom-discovery",
        v.DOM_DISCOVERY_IFRAME = "dom-discovery-iframe",
        v.ELEMENT_ANIMATE = "element-animate",
        v.ERROR = "error",
        v.FOCUS = "focus",
        v.FULLSCREEN = "fullscreen",
        v.INPUT = "input",
        v.INPUT_TYPING = "input-typing",
        v.LOAD = "load",
        v.METADATA = "metadata",
        v.CLICK = "click",
        v.MOUSE_MOVE = "mousemove",
        v.NODE_MUTATION = "node-mutation",
        v.NETWORK = "network",
        v.NETWORK_WEBSOCKET = "network-websocket",
        v.PACKED_ASSET = "packed-asset",
        v.PERFORMANCE_METRIC = "performance-metric",
        v.RAGE_CLICK = "rage-click",
        v.RESIZE = "resize",
        v.RESOURCE = "resource",
        v.SCROLL = "scroll",
        v.SELECTION = "selection",
        v.STOP = "stop",
        v.TOUCH_MOVE = "touchmove",
        v.STYLESHEET_MUTATION = "stylesheet-mutation",
        v.URL = "url",
        v.URL_EXIT = "url-exit",
        v.VISUAL_VIEWPORT = "visual-viewport",
        v.POPOVER = "popover";
        const m = e => "pageUrl"in e;
        class S {
            listeners = {};
            addEventListener = (e, t) => {
                const i = this.listeners[e] ?? [];
                i.push(t),
                this.listeners[e] = i
            }
            ;
            emit = (e, ...t) => {
                const i = this.listeners[e];
                i && i.forEach((e => {
                    e(...t)
                }
                ))
            }
            ;
            removeEventListener = (e, t) => {
                const i = this.listeners[e];
                if (i) {
                    const s = i.indexOf(t);
                    -1 === s ? d.R.error(`Trying to remove not existing listener of type '${String(e)}'`) : i.splice(s, 1)
                }
            }
        }
        var E = i(735)
          , y = i(324);
        const w = e => /\[native code]/.test(e.toString());
        var b = i(757)
          , R = i(153)
          , T = i(553);
        const I = (e, t, i) => {
            if (!(t in e))
                throw new r.f("Cannot apply proxy. Property is not defined on this object");
            const s = e[t];
            e[t] = function(...e) {
                return i(s.bind(this)).call(this, ...e)
            }
        }
          , N = (e, t, i) => {
            if (!(t in e))
                throw new r.f("Cannot apply proxy. Property is not defined on this object");
            const s = Object.getOwnPropertyDescriptor(e, t);
            s && Object.defineProperty(e, t, i(s))
        }
        ;
        var O = i(645);
        const C = e => void 0 !== (null == e ? void 0 : e.nodeName)
          , M = e => e.nodeName === j.IFRAME
          , k = e => e.nodeName === j.TEXTAREA
          , A = e => e.nodeName === j.INPUT
          , P = e => "#document-fragment" === e.nodeName && "ShadowRoot" === e.constructor.name
          , D = e => (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE
          , x = e => (null == e ? void 0 : e.nodeType) === Node.TEXT_NODE
          , L = e => void 0 !== (null == e ? void 0 : e.dataset)
          , W = e => Boolean(e) && (null == e ? void 0 : e.nodeType) === Node.DOCUMENT_NODE
          , U = e => null !== e && (e.nodeName === j.STYLE || e.nodeName === j.SVG_STYLE);
        var j, B, _, V;
        (V = j || (j = {})).DOCUMENT = "DOCUMENT",
        V.DOCUMENT_TYPE = "DOCTYPE",
        V.EMBED = "EMBED",
        V.HEAD = "HEAD",
        V.HTML = "HTML",
        V.TEXT = "TEXT",
        V.STYLE = "STYLE",
        V.SVG_STYLE = "style",
        V.SCRIPT = "SCRIPT",
        V.NOSCRIPT = "NOSCRIPT",
        V.IFRAME = "IFRAME",
        V.LINK = "LINK",
        V.TEXTAREA = "TEXTAREA",
        V.SELECT = "SELECT",
        V.INPUT = "INPUT",
        V.ANCHOR = "A",
        V.OBJECT = "OBJECT",
        V.META = "META",
        V.CANVAS = "CANVAS",
        V.VIDEO = "VIDEO",
        V.IMAGE = "IMG",
        V.DIALOG = "DIALOG",
        (_ = B || (B = {})).XLINK = "http://www.w3.org/1999/xlink",
        _.XHTML = "http://www.w3.org/1999/xhtml",
        _.XML = "https://www.w3.org/XML/1998/namespace";
        const F = "[[__A_P_S__]]"
          , z = "[[__A_P_E__]]"
          , H = e => ["chrome-extension://", "moz-extension://"].some((t => e.startsWith(t)))
          , $ = ["title", "alt", "onabort", "onauxclick", "onblur", "oncanplay", "oncancel", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformchange", "onformdata", "onforminput", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onwheel", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting"]
          , q = (e, t) => {
            if (!t.document)
                return e;
            try {
                const i = t.document.createElement("a");
                return i.href = e,
                i.href
            } catch (t) {
                if (t instanceof TypeError && "can't access dead object" === t.message)
                    return e;
                throw t
            }
        }
          , K = (e, t, i) => {
            const s = {}
              , n = e.attributes;
            if (n && n.length > 0)
                for (let o = 0; o < n.length; o++) {
                    const r = n[o];
                    if (!$.includes(r.name) && (!["src"].includes(r.name) || !M(e) && e.tagName !== j.SCRIPT))
                        if (["src", "href"].includes(r.name)) {
                            if (H(r.value) || r.value.startsWith("blob:"))
                                continue;
                            if (r.value.startsWith("#")) {
                                s[r.name] = r.value;
                                continue
                            }
                            s[r.name] = (null == i ? void 0 : i.proxyAllImages) && "src" === r.name && e.nodeName === j.IMAGE ? G(r.value, t) : q(r.value, t)
                        } else
                            "srcset" === r.name ? s[r.name] = G(r.value, t) : s[r.name] = r.value
                }
            else if (void 0 === (null == n ? void 0 : n.length) && "function" == typeof e.getAttribute) {
                const t = e.getAttribute("id");
                "string" == typeof t && (s.id = t);
                const i = e.getAttribute("class");
                "string" == typeof i && (s.class = i)
            }
            return s
        }
          , Y = /\s*([^,]\S*[^,](?:\s+[^,]+)?)\s*(?:,|$)/
          , G = (e, t) => e.split(Y).filter(( (e, t) => t % 2 == 1)).map((e => e.trim().split(/\s+/))).filter(( ([e]) => !H(e))).map(( ([e,...i]) => {
            let s = e;
            return e.startsWith("data:") || e.startsWith("blob:") || (s = `${F}${encodeURIComponent(q(e, t))}${z}`),
            [s, ...i].join(" ")
        }
        )).join(", ");
        var X = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        const Q = {
            capture: !0,
            passive: !0
        };
        class J {
            get currentWindow() {
                if (O.VP(this._currentWindow))
                    return this._currentWindow;
                throw new r.f("Window origin changed",{
                    shouldReport: !1
                })
            }
            get isCurrentWindowStillAccessible() {
                return O.VP(this._currentWindow)
            }
            constructor(e, t, i, s, n, r, a, d, c, l, h, u, p, v, f, m, S, E, y, w, b, R, T) {
                this.taskName = e,
                this._currentWindow = t,
                this.sessionId = i,
                this.visitorId = s,
                this.recordId = n,
                this.nodeInfoManager = r,
                this.nodeMetadataManager = a,
                this.scrollManager = d,
                this.assetService = c,
                this.cssService = l,
                this.postMessageService = h,
                this.uploadService = u,
                this.recordEventBus = p,
                this.relativeRecordStartTime = v,
                this.sessionEventBus = f,
                this.config = m,
                this.setupData = S,
                this.parentElementPath = E,
                this.relativeTimeSinceParentTaskFromCrossOriginParentStarted = y,
                this.crossOriginFrameElementId = w,
                this.crossOriginParentFrameElementId = b,
                this.isPageLoad = R,
                this.hasUrlChanged = T,
                this.documentEventListenersMap = new Map,
                this.windowEventListenersMap = new Map,
                this.createESEventEnvelope = ({relativeStartTime: e=performance.now()}={}) => {
                    var t, i;
                    return Object.assign(Object.assign({}, this.createEventEnvelope({
                        relativeStartTime: e
                    })), {
                        pageUrl: (null !== (i = null === (t = this.currentWindow.location) || void 0 === t ? void 0 : t.href) && void 0 !== i ? i : "").slice(0, 1e3)
                    })
                }
                ,
                this.createEventEnvelope = ({relativeStartTime: e=performance.now()}={}) => ({
                    id: o.$(),
                    crossOriginFrameElementId: this.crossOriginFrameElementId,
                    startTime: e - this.relativeRecordStartTime + this.relativeTimeSinceParentTaskFromCrossOriginParentStarted
                }),
                this.shouldProcessEvent = e => {
                    if (!g.Q(e))
                        return !1;
                    const t = e.composedPath()[0];
                    return void 0 === t || !D(t) || !this.nodeMetadataManager.isExcludedNode(t)
                }
            }
            addDocumentEventListener(e, t, i=Q) {
                let s = this.documentEventListenersMap.get(e);
                void 0 === s && (s = new Map,
                this.documentEventListenersMap.set(e, s));
                const {shouldProcessEvent: n} = this
                  , o = function(i) {
                    return X(this, void 0, void 0, (function*() {
                        if (n(i))
                            try {
                                yield t.call(this, i)
                            } catch (t) {
                                if (t instanceof r.f && !t.shouldReport)
                                    return void d.R.debug("Recorder error happened", t);
                                throw t instanceof Error ? new r.f(`Error happened in '${e} listener.'`,{
                                    originalError: t
                                }) : t
                            }
                    }
                    ))
                };
                this.currentWindow.document.addEventListener(e, o, i),
                s.set(t, o)
            }
            addEventListener(e, t, i=Q) {
                let s = this.windowEventListenersMap.get(e);
                void 0 === s && (s = new Map,
                this.windowEventListenersMap.set(e, s));
                const {shouldProcessEvent: n} = this
                  , o = function(i) {
                    return X(this, void 0, void 0, (function*() {
                        if (n(i))
                            try {
                                yield t.call(this, i)
                            } catch (t) {
                                if (t instanceof r.f && !t.shouldReport)
                                    return void d.R.debug("Recorder error happened", t);
                                throw t instanceof Error ? new r.f(`Error happened in '${e} listener.'`,{
                                    originalError: t
                                }) : t
                            }
                    }
                    ))
                };
                this.currentWindow.addEventListener(e, o, i),
                s.set(t, o)
            }
            isTaskRunWithinMainWindow() {
                return this.currentWindow === window && void 0 === this.crossOriginFrameElementId
            }
            removeDocumentEventListener(e, t, i=Q) {
                var s, n, o;
                const r = this.documentEventListenersMap.get(e);
                if (r) {
                    const a = r.get(t);
                    a && (r.delete(t),
                    O.VP(this.currentWindow) && ((null === (s = this.currentWindow.document) || void 0 === s ? void 0 : s.removeEventListener) ? this.currentWindow.document.removeEventListener(e, a, i) : d.R.debug("window.document.removeEventListener is undefined", {
                        additionalData: {
                            attributes: this.currentWindow.frameElement ? K(this.currentWindow.frameElement, this.currentWindow, {
                                proxyAllImages: this.config.proxyAllImages
                            }) : {},
                            location: null === (n = this.currentWindow.location) || void 0 === n ? void 0 : n.href
                        },
                        documentState: null === (o = this.currentWindow.document) || void 0 === o ? void 0 : o.visibilityState
                    })))
                }
            }
            removeEventListener(e, t, i=Q) {
                var s, n;
                const o = this.windowEventListenersMap.get(e);
                if (o) {
                    const r = o.get(t);
                    r && (o.delete(t),
                    O.VP(this.currentWindow) && (this.currentWindow.removeEventListener ? this.currentWindow.removeEventListener(e, r, i) : d.R.debug("window.removeEventListener is undefined", {
                        additionalData: {
                            attributes: this.currentWindow.frameElement ? K(this.currentWindow.frameElement, this.currentWindow, {
                                proxyAllImages: this.config.proxyAllImages
                            }) : {},
                            location: null === (s = this.currentWindow.location) || void 0 === s ? void 0 : s.href
                        },
                        documentState: null === (n = this.currentWindow.document) || void 0 === n ? void 0 : n.visibilityState
                    })))
                }
            }
            get areFormsRecorded() {
                return Boolean(this.config.record.forms)
            }
        }
        const Z = e => "object" == typeof e.packAssets ? e.packAssets.images : e.packAssets
          , ee = e => {
            var t;
            return "object" == typeof e.packAssets ? null === (t = e.packAssets) || void 0 === t ? void 0 : t.styles : e.packAssets
        }
          , te = e => {
            var t;
            return "object" == typeof e.packAssets ? null === (t = e.packAssets) || void 0 === t ? void 0 : t.fonts : e.packAssets
        }
          , ie = e => new Promise(( (t, i) => {
            const s = new FileReader;
            s.addEventListener("error", (e => i([e, "error"]))),
            s.addEventListener("abort", (e => i([e, "abort"]))),
            s.addEventListener("loadend", ( () => {
                "string" == typeof s.result ? t(s.result) : i("typeof reader.result is " + typeof s.result)
            }
            )),
            s.readAsDataURL(e)
        }
        ))
          , se = e => /\.(gif|jpe?g|png|webp|svg)/.test(e)
          , ne = e => /\.(woff2)/.test(e)
          , oe = ["video/webm;codecs:vp8", "video/mp4"]
          , re = Math.floor(8388608 / 60);
        class ae extends J {
            constructor() {
                super(...arguments),
                this.recordingMetadata = {},
                this.attachResizeObserverToCanvasElement = (e, t) => {
                    const i = new ResizeObserver((i => {
                        if (t.isConnected)
                            for (const s of i) {
                                if (void 0 === this.recordingMetadata[e])
                                    return;
                                const {dimension: i} = this.recordingMetadata[e]
                                  , {height: s, width: n} = t.getBoundingClientRect();
                                if (n !== i.width || s !== i.height) {
                                    this.recordingMetadata[e].dimension = {
                                        height: s,
                                        width: n
                                    },
                                    d.R.debug("canvas dimensions changed"),
                                    this.markCurrentVideoEnded(e);
                                    break
                                }
                            }
                        else
                            this.stopRecorder(e)
                    }
                    ));
                    return i.observe(t),
                    i
                }
                ,
                this.getElementId = e => this.nodeInfoManager.getIdByNode(e),
                this.handleDataAvailable = (e, t, i) => {
                    return s = this,
                    o = function*() {
                        if (d.R.debug("canvas.handleDataAvailable", e, e.data.size),
                        0 === e.data.size)
                            return;
                        let s;
                        try {
                            s = yield ie(e.data)
                        } catch (e) {
                            return void d.R.errorNoConsole("Canvas recording error", e, `time: ${this.createEventEnvelope().startTime}`)
                        }
                        this.captureChunk(t, s, i)
                    }
                    ,
                    new ((n = void 0) || (n = Promise))((function(e, t) {
                        function i(e) {
                            try {
                                a(o.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }
                        function r(e) {
                            try {
                                a(o.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }
                        function a(t) {
                            var s;
                            t.done ? e(t.value) : (s = t.value,
                            s instanceof n ? s : new n((function(e) {
                                e(s)
                            }
                            ))).then(i, r)
                        }
                        a((o = o.apply(s, [])).next())
                    }
                    ));
                    var s, n, o
                }
                ,
                this.handleMediaRecorderStart = (e, t) => {
                    if (d.R.debug("canvas.handleMediaRecorderStart"),
                    !t.isConnected)
                        return d.R.debug("Canvas was removed in the meantime and it will not be recorded."),
                        void this.stopMediaRecorder(e);
                    const i = this.getElementId(t);
                    if (void 0 === i)
                        return d.R.debug("Cannot record canvas. Target not found."),
                        void this.stopMediaRecorder(e);
                    if (this.recordingMetadata[i])
                        return void d.R.debug("Current canvas is already being recorded. Cannot start new recording.");
                    const s = this.createEventEnvelope()
                      , n = this.attachResizeObserverToCanvasElement(i, t)
                      , {height: o, width: r} = t.getBoundingClientRect()
                      , a = {
                        canvasElement: t,
                        dimension: {
                            height: o,
                            width: r
                        },
                        eventEnvelope: s,
                        mediaRecorder: e,
                        resizeObserver: n,
                        rootEventId: s.id
                    };
                    let c;
                    this.recordingMetadata[i] = a,
                    e.addEventListener("dataavailable", (e => this.handleDataAvailable(e, i, a)));
                    try {
                        if (c = t.toDataURL("image/webp", 0),
                        "data:," === c)
                            return
                    } catch (e) {
                        return void d.R.errorNoConsole("Canvas toDataURL() error", e)
                    }
                    this.uploadService.upload(Object.assign(Object.assign({}, a.eventEnvelope), {
                        name: p.CANVAS_START,
                        type: a.mediaRecorder.mimeType,
                        dimensions: a.dimension,
                        previewImage: c,
                        target: i
                    })),
                    e.requestData()
                }
                ,
                this.startRecorder = ({node: e}) => {
                    if (!(e => e.nodeName === j.CANVAS)(e))
                        return;
                    d.R.debug("canvas.startRecordingCanvas");
                    const t = this.nodeMetadataManager.getCanvasAttributeValue(e);
                    if (!t)
                        return void d.R.debug("Skipping canvas recording. Experimental canvas recording is not enabled on this target.", e);
                    const i = this.getElementId(e);
                    if (void 0 === i)
                        return void d.R.error("Cannot record canvas. Element ID is not assigned.");
                    if (this.recordingMetadata[i])
                        return void d.R.debug("Canvas is already being recorded. Media recorder will not be created.");
                    const {fps: s, mimeType: n, videoBitsPerSecond: o} = ae.getCanvasRecordingMetadata(t);
                    let r;
                    try {
                        r = e.captureStream(s)
                    } catch (e) {
                        return f.bJ(e) ? f.v2(e) || ["NS_ERROR_NOT_INITIALIZED", "NS_ERROR_FAILURE"].includes(e.name) || d.R.errorNoConsole("canvasElement.captureStream unknown object error", {
                            constructorName: null == e ? void 0 : e.constructor.name,
                            errorName: e.name
                        }) : d.R.errorNoConsole("canvasElement.captureStream unknown error", typeof e, e),
                        void (0,
                        E.o)("Could not capture canvas element. The content is not recorded.", e)
                    }
                    const a = new MediaRecorder(r,{
                        audioBitsPerSecond: 0,
                        mimeType: n,
                        videoBitsPerSecond: o
                    });
                    a.start(Math.min(this.config.uploadInterval, 1e3)),
                    this.handleMediaRecorderStart(a, e)
                }
            }
            start() {
                "MediaRecorder"in window && this.isTaskRunWithinCurrentWindow() && this.recordEventBus.addEventListener("addedNode", this.startRecorder)
            }
            stop() {
                if ("MediaRecorder"in window) {
                    for (const e of Object.keys(this.recordingMetadata)) {
                        const t = Number(e);
                        this.stopRecorder(t)
                    }
                    this.isTaskRunWithinCurrentWindow() && this.recordEventBus.removeEventListener("addedNode", this.startRecorder)
                }
            }
            captureChunk(e, t, i) {
                d.R.debug("canvas.captureChunk"),
                this.uploadService.upload(Object.assign(Object.assign({}, i.eventEnvelope), {
                    name: p.CANVAS_CHUNK,
                    rootId: i.rootEventId,
                    value: t
                })),
                i.eventEnvelope = this.createEventEnvelope()
            }
            isTaskRunWithinCurrentWindow() {
                return this.currentWindow === window
            }
            markCurrentVideoEnded(e) {
                d.R.debug("canvas.markCurrentVideoEnded");
                const t = this.recordingMetadata[e];
                if (void 0 === t)
                    return;
                const {canvasElement: i} = t;
                t.mediaRecorder.addEventListener("stop", ( () => {
                    this.startRecorder({
                        node: i
                    })
                }
                )),
                this.stopRecorder(e)
            }
            stopMediaRecorder(e) {
                e.stream.getTracks().forEach((e => e.stop())),
                "inactive" !== e.state && e.stop()
            }
            stopRecorder(e) {
                d.R.debug("canvas.stopRecorder", e);
                const {mediaRecorder: t, resizeObserver: i} = this.recordingMetadata[e];
                this.stopMediaRecorder(t),
                i.disconnect(),
                delete this.recordingMetadata[e]
            }
        }
        ae.getCanvasRecordingMetadata = e => {
            let t, i, s;
            switch (e) {
            case "canvas-lq":
                t = 1,
                i = re;
                break;
            case "canvas-mq":
                t = 2,
                i = 1.5 * re;
                break;
            case "canvas-hq":
                t = 3,
                i = 2 * re;
                break;
            default:
                throw new r.f("Unsupported canvas attribute",{
                    shouldReport: !0
                })
            }
            for (const e of oe)
                MediaRecorder.isTypeSupported(e) && (s = e);
            return {
                fps: t,
                mimeType: s,
                videoBitsPerSecond: i
            }
        }
        ;
        const de = ae;
        var ce = i(41);
        function le(e) {
            return null === e.parentNode || !!he(e.parentNode) || !!U(e.parentNode) || !![j.NOSCRIPT, j.SCRIPT].includes(e.parentNode.nodeName)
        }
        function he(e) {
            var t, i, s, n, o;
            if (e.nodeType === Node.COMMENT_NODE)
                return !0;
            if (e.nodeName === j.NOSCRIPT)
                return !0;
            if (e.nodeName === j.SCRIPT)
                return !0;
            if (e.nodeType === Node.TEXT_NODE && (null === e.previousSibling || null === e.nextSibling) && null !== (o = e).textContent && !/[^\t\n\r ]/.test(o.textContent))
                return !0;
            if (e.nodeName === j.LINK && ["manifest", "preload", "prefetch", "modulepreload"].includes(null !== (t = e.getAttribute("rel")) && void 0 !== t ? t : ""))
                return !0;
            if (e.nodeName === j.META) {
                if (["content-security-policy", "refresh"].includes((null !== (i = e.getAttribute("http-equiv")) && void 0 !== i ? i : "").toLowerCase()))
                    return !0;
                if (["facebook-domain-verification", "apple-itunes-app", "google-site-verification"].includes((null !== (s = e.getAttribute("name")) && void 0 !== s ? s : "").toLowerCase()))
                    return !0
            }
            return "ignore" === (null === (n = e.dataset) || void 0 === n ? void 0 : n.sl) || void 0
        }
        function ue(e) {
            return !!U(e) || e.nodeName === j.SCRIPT || e.nodeName === j.NOSCRIPT
        }
        const pe = e => {
            const t = e.nextSibling();
            if (t)
                return t;
            {
                const t = e.parentNode();
                return t === e.root || null === t ? null : pe(e)
            }
        }
          , ve = e => {
            const t = [];
            let i = P(e) ? e.host : e.parentNode;
            for (; i; ) {
                t.push(i);
                const e = i.parentNode;
                i = null === e && P(i) ? i.host : e
            }
            return t
        }
        ;
        function *ge(e, t) {
            const {processOnlyTextNodes: i=!1, recoverOnNotConnectedNodes: s=!0, shouldProcessNode: n} = null != t ? t : {};
            if (he(e))
                return;
            if (n && !n(e))
                return;
            const o = new Set
              , r = document.createTreeWalker(e, i ? NodeFilter.SHOW_TEXT : NodeFilter.SHOW_ALL, {
                acceptNode: e => o.has(e) || he(e) ? NodeFilter.FILTER_REJECT : n ? n(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
            });
            let a = i ? r.nextNode() : r.currentNode;
            for (; a; ) {
                const e = ve(a);
                if (D(a) && a.shadowRoot ? (yield a,
                yield*ge(a.shadowRoot, {
                    processOnlyTextNodes: i,
                    shouldProcessNode: n
                })) : yield a,
                o.add(a),
                s)
                    if (a.isConnected) {
                        const t = ve(a);
                        for (let i = 0; i < e.length; i++) {
                            const s = e[i];
                            if (t[i] !== s) {
                                r.currentNode = s;
                                break
                            }
                        }
                    } else {
                        const t = e.find((e => e.isConnected));
                        if (!t)
                            return;
                        r.currentNode = t
                    }
                a = ue(r.currentNode) ? pe(r) : r.nextNode()
            }
        }
        const fe = e => {
            let t = e.parentNode;
            return null === t && (P(e) ? t = e.host : W(e) && (t = (0,
            ce.ni)(e))),
            t
        }
          , me = e => {
            let t = e.parentElement;
            return null === t && (P(e) ? t = e.host : e.parentNode && W(e.parentNode) && (t = (0,
            ce.ni)(e.parentNode))),
            t
        }
          , Se = "$$SHADOW-ROOT$$";
        function Ee(e) {
            if (e.parentNode && e.parentNode.children) {
                const t = Array.from(e.parentNode.children)
                  , i = e.tagName;
                let s = 0
                  , n = 0;
                for (const o of t) {
                    if (e === o) {
                        s += 1,
                        n += 1;
                        break
                    }
                    o.tagName === i && (s += 1),
                    n += 1
                }
                return {
                    nthChild: n,
                    nthOfType: s
                }
            }
            return null
        }
        function ye(e, t) {
            var i, s, n;
            const o = [];
            for (const r of function*(e) {
                let t = e;
                for (; t; ) {
                    yield t;
                    const e = t.parentNode;
                    e && P(e) ? (yield e,
                    t = e.host) : t = e
                }
            }(e)) {
                let e, a, d;
                D(r) ? (e = Ee(r),
                a = r.getAttribute("id") || void 0,
                void 0 === a && t.fallbackToAlternativeIds && (a = null !== (n = null !== (s = null !== (i = r.getAttribute("data-id")) && void 0 !== i ? i : r.getAttribute("data-testid")) && void 0 !== s ? s : r.getAttribute("data-uat")) && void 0 !== n ? n : void 0),
                d = Array.from(r.classList),
                o.push({
                    id: a,
                    classes: d,
                    nthChild: null == e ? void 0 : e.nthChild,
                    nthOfType: null == e ? void 0 : e.nthOfType,
                    tagName: r.nodeName
                })) : P(r) && o.push({
                    classes: [],
                    tagName: Se
                })
            }
            return o
        }
        const we = /\d/g
          , be = /(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\da-z-]+\.)+[a-z]{2,}))/gim
          , Re = /[\d+.a-z-]/gim
          , Te = e => {
            let t = e;
            try {
                if (!t.includes("@"))
                    return t;
                t = e.replace(be, (e => e.replace(Re, "*")))
            } catch (t) {
                if (null === e)
                    return d.R.errorNoConsole("Email masking failed on null value. String.prototype.replace is", w(String.prototype.replace) ? "native" : "not native", String(String.prototype.replace)),
                    e;
                if (e.length > 1e4) {
                    const t = e.match(/.{1,10000}/g);
                    if (t)
                        return t.map((e => Te(e))).join("")
                }
                d.R.error(`Smartlook email masking failed on ${t.name}`, t, e)
            }
            return t
        }
          , Ie = (e, t, i, s) => {
            let n = e.nodeValue;
            //CHANGE
            return null === n ? "" : n; // Always return the original node value, remove if needed, this wasn't here
            //return null === n ? "" : (n = s.isMaskedNode(e) ? n.replace(/\S/gi, "*") : Ne(n, t),
            //n)
        }
          , Ne = (e, t) => {
            //CHANGE
            return e // this wasn't here
            //let i = e;
            //return t.record.emails || (i = Te(i)),
            //t.record.numbers || (i = (e => e.replace(we, "*"))(i)),
            //i
        }
          , Oe = (e, t) => {
            if (t.isCrossOriginIframeMode)
                return {
                    x: 0,
                    y: 0
                };
            let i = 0
              , s = 0
              , n = ce.u5(e);
            for (; n; ) {
                const e = n.getBoundingClientRect();
                s += e.top,
                i += e.left,
                n = n.ownerDocument ? ce.ni(n.ownerDocument) : null
            }
            return {
                x: i,
                y: s
            }
        }
          , Ce = 128
          , Me = e => e.length > Ce ? `${e.slice(0, 125)}...` : e
          , ke = ["info", "warn", "error", "log", "debug"];
        var Ae;
        !function(e) {
            e.ADDED = "added",
            e.REMOVED = "removed",
            e.UPDATED = "updated"
        }(Ae || (Ae = {}));
        const Pe = e => Boolean(void 0 !== (null == e ? void 0 : e.id));
        var De = i(260);
        const xe = e => {
            const t = {};
            return e.forEach((e => {
                var {action: i} = e
                  , s = function(e, t) {
                    var i = {};
                    for (var s in e)
                        Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                            t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
                    }
                    return i
                }(e, ["action"]);
                switch (i) {
                case Ae.ADDED:
                    void 0 === t.added && (t.added = []),
                    t.added.push(s);
                    break;
                case Ae.REMOVED:
                    void 0 === t.removed && (t.removed = []),
                    t.removed.push(s);
                    break;
                case Ae.UPDATED:
                    void 0 === t.updated && (t.updated = []),
                    t.updated.push(s);
                    break;
                default:
                    d.R.warn("Received unknown serialized node.")
                }
            }
            )),
            t
        }
          , Le = e => {
            try {
                return Boolean(e.contentDocument)
            } catch (e) {
                return !1
            }
        }
        ;
        var We = function(e, t) {
            var i = {};
            for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                    t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
            }
            return i
        };
        const Ue = (e, t, i, s) => {
            var n, o;
            const {node: r} = null !== (n = e[t]) && void 0 !== n ? n : {};
            if (r)
                if (null !== (o = r.children) && void 0 !== o || (r.children = []),
                void 0 === i)
                    r.children.unshift(s);
                else {
                    const e = r.children.findIndex((e => e.id === i));
                    r.children.splice(e + 1, 0, s)
                }
            else
                d.R.error("Parent node not found", s)
        }
          , je = (e, t) => {
            const i = e[t.id];
            i && (i.parent ? ( (e, t) => {
                var i, s, n, o;
                const r = null !== (s = null === (i = e.children) || void 0 === i ? void 0 : i.findIndex(( ({id: e}) => e !== t.id))) && void 0 !== s ? s : -1;
                -1 !== r ? (null === (n = e.children) || void 0 === n || n.splice(r + 1, 0, t),
                0 === (null === (o = e.children) || void 0 === o ? void 0 : o.length) && delete e.children) : d.R.error("Node not found in parent's children", {
                    parentNode: e,
                    serializedNode: t
                })
            }
            )(e[i.parent].node, t) : d.R.error("Parent node not found", t))
        }
        ;
        var Be = i(915);
        class _e {
            get size() {
                return this.countByElement.size
            }
            constructor(e) {
                this.countByElement = new Map,
                this.initialize(e)
            }
            add(e) {
                this.incrementElementCount(e)
            }
            delete(e) {
                this.decrementElementCount(e)
            }
            has(e) {
                return Boolean(this.countByElement.get(e))
            }
            some(e) {
                for (const t of this.countByElement.keys())
                    if (e(t))
                        return !0;
                return !1
            }
            decrementElementCount(e) {
                const t = this.countByElement.get(e);
                1 === t ? this.countByElement.delete(e) : t && this.countByElement.set(e, t - 1)
            }
            incrementElementCount(e) {
                const t = this.countByElement.get(e) || 0;
                this.countByElement.set(e, t + 1)
            }
            initialize(e) {
                if (e)
                    for (const t of e)
                        this.incrementElementCount(t)
            }
        }
        var Ve = i(654)
          , Fe = function(e, t, i, s) {
            var n, o = arguments.length, r = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, i, s);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (n = e[a]) && (r = (o < 3 ? n(r) : o > 3 ? n(t, i, r) : n(t, i)) || r);
            return o > 3 && r && Object.defineProperty(t, i, r),
            r
        }
          , ze = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        const He = {
            attributeOldValue: !0,
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        };
        class $e extends J {
            constructor(...e) {
                super(...e),
                this.areProxiesAttached = !1,
                this.futureAttributesTargets = new WeakMap,
                this.futureTargets = new _e,
                this.iframeLoadCount = new Map,
                this.isTaskStopped = !0,
                this.mutationObserver = null,
                this.pendingMutations = [],
                this.pendingResizeEntries = [],
                this.processedAssets = {},
                this.resizeObserver = null,
                this.shadowRoots = [],
                this.sizeByNodes = new WeakMap,
                this.start = e => ze(this, void 0, void 0, (function*() {
                    this.isTaskStopped = !1,
                    this.currentWindow.frameElement && (this.visibilityChangeEventListener = e => {
                        g.Q(e) && "hidden" === this.currentWindow.document.visibilityState && this.recordEventBus.emit("stopRecordingOnWindow", {
                            rootWindow: this.currentWindow
                        })
                    }
                    ,
                    this.addDocumentEventListener("visibilitychange", this.visibilityChangeEventListener)),
                    this.resizeObserver = new ResizeObserver((e => {
                        this.pendingResizeEntries.push(...e),
                        void 0 === this.resizeProcessTimeoutId && (this.resizeProcessTimeoutId = setTimeout(( () => {
                            const e = this.pendingResizeEntries;
                            this.pendingResizeEntries = [],
                            this.resizeProcessTimeoutId = void 0;
                            const t = e.map((e => e.target)).filter(( (e, t, i) => i.indexOf(e) == t));
                            this.handleSizeChangeOnNotRecordedElements(t)
                        }
                        ), 100))
                    }
                    )),
                    this.startDiscovery(e),
                    this.recordEventBus.addEventListener("recomputeTextNodes", this.handleRecomputeTextNodesEvent)
                }
                )),
                this.stop = () => {
                    if (this.isTaskStopped)
                        d.R.debug("Task is already stopped");
                    else {
                        if (this.isTaskStopped = !0,
                        this.isTaskRunWithinMainWindow() && (this.postMessageService.broadcastEventToAllDiscoveredIframes({
                            name: Be.g4.STOP_RECORDING,
                            key: this.config.projectKey
                        }),
                        this.postMessageService.clearDiscoveredIframeWindows()),
                        this.recordEventBus.removeEventListener("recomputeTextNodes", this.handleRecomputeTextNodesEvent),
                        void 0 !== this.visibilityChangeEventListener && this.removeDocumentEventListener("visibilitychange", this.visibilityChangeEventListener),
                        this.mutationObserver && (this.mutationObserver.disconnect(),
                        this.mutationObserver = null),
                        this.resizeObserver && (this.resizeObserver.disconnect(),
                        this.resizeObserver = null),
                        void 0 !== this.mutationProcessIntervalId)
                            try {
                                clearInterval(this.mutationProcessIntervalId)
                            } catch (e) {
                                d.R.error("Error while calling clearInterval for mutationProcessIntervalId.", e)
                            }
                        if (void 0 !== this.resizeProcessTimeoutId)
                            try {
                                clearInterval(this.resizeProcessTimeoutId)
                            } catch (e) {
                                d.R.error("Error while calling clearInterval for resizeProcessIntervalId.", e)
                            }
                        this.nodeInfoManager.deleteAllIframeLoadListenersForWindow(this.currentWindow)
                    }
                }
                ,
                this.attachAdoptedStyleSheetProxy = () => {
                    var e;
                    (null === (e = this.currentWindow.document) || void 0 === e ? void 0 : e.adoptedStyleSheets) && (this.attachAdoptedStyleSheetProxyTo(this.currentWindow.Document),
                    this.attachAdoptedStyleSheetProxyTo(this.currentWindow.ShadowRoot))
                }
                ,
                this.attachAdoptedStyleSheetProxyTo = e => {
                    try {
                        const t = this;
                        N(e.prototype, "adoptedStyleSheets", (function(e) {
                            return {
                                set(i) {
                                    var s;
                                    if (null === (s = e.set) || void 0 === s || s.apply(this, [i]),
                                    !t.isTaskStopped)
                                        try {
                                            t.processAdoptedStyleSheets(this, !0)
                                        } catch (e) {
                                            d.R.errorNoConsole("Error happened in adoptedStylesheet proxy", e)
                                        }
                                }
                            }
                        }
                        ))
                    } catch (e) {
                        d.R.debug("Cannot apply adoptedStylesheet proxy", e)
                    }
                }
                ,
                this.attachObserver = e => {
                    this.isTaskStopped || (this.mutationObserver || (this.mutationObserver = new MutationObserver((e => {
                        const t = e.filter((e => {
                            if ("attributes" === e.type && null !== e.attributeName) {
                                const t = this.futureAttributesTargets.get(e.target);
                                if (t) {
                                    if (t.has(e.attributeName))
                                        return !1;
                                    t.add(e.attributeName)
                                } else
                                    this.futureAttributesTargets.set(e.target, new _e([e.attributeName]));
                                A(e.target) && "type" === e.attributeName && ("password" !== e.oldValue && "password" !== e.target.type || this.nodeMetadataManager.setIsPasswordInput(e.target))
                            } else
                                "childList" === e.type && this.getTargetsFromMutation(e).forEach((e => {
                                    this.futureTargets.add(e)
                                }
                                ));
                            return !0
                        }
                        ));
                        0 !== t.length && this.pendingMutations.push({
                            mutationEvent: Object.assign(Object.assign({}, this.createEventEnvelope()), {
                                name: p.NODE_MUTATION,
                                crossOriginParentFrameElementId: this.crossOriginParentFrameElementId,
                                root: this.rootId
                            }),
                            mutations: t
                        })
                    }
                    ))),
                    this.mutationObserver.observe(e, He))
                }
                ,
                this.attachStyleSheetProxy = () => {
                    const {handleStyleMutation: e} = this;
                    if (void 0 === this.currentWindow.CSSStyleSheet)
                        return void d.R.debug("Window object is cleared and does not contain CSSStyleSheet prototype.");
                    const t = this;
                    try {
                        I(this.currentWindow.CSSStyleSheet.prototype, "insertRule", (i => function(s, n) {
                            const o = i(s, n)
                              , r = this.cssRules[o];
                            if (!t.isTaskStopped)
                                try {
                                    e(this, n, r)
                                } catch (e) {
                                    d.R.errorNoConsole("Error happened in `insertRule` proxy.", e, s, n, r, o)
                                }
                            return o
                        }
                        ))
                    } catch (e) {
                        d.R.debug("Cannot apply `insertRule` proxy to CSSStyleSheet.", e)
                    }
                    try {
                        I(this.currentWindow.CSSStyleSheet.prototype, "deleteRule", (i => function(s) {
                            if (i(s),
                            !t.isTaskStopped)
                                try {
                                    e(this, s)
                                } catch (e) {
                                    d.R.errorNoConsole("Error happened in `deleteRule` proxy.", e, s)
                                }
                        }
                        ))
                    } catch (e) {
                        d.R.debug("Cannot apply `deleteRule` proxy to CSSStyleSheet.", e)
                    }
                    try {
                        I(this.currentWindow.CSSStyleSheet.prototype, "replace", (i => function(s) {
                            const n = i(s);
                            if (!t.isTaskStopped)
                                try {
                                    e(this, void 0, void 0, s)
                                } catch (e) {
                                    d.R.errorNoConsole("Error happened in `replace` proxy.", e, n, s)
                                }
                            return n
                        }
                        ))
                    } catch (e) {
                        d.R.debug("Cannot apply `replace` proxy to CSSStyleSheet.", e)
                    }
                    try {
                        I(this.currentWindow.CSSStyleSheet.prototype, "replaceSync", (i => function(s) {
                            const n = i(s);
                            if (!t.isTaskStopped)
                                try {
                                    e(this, void 0, void 0, s)
                                } catch (e) {
                                    d.R.errorNoConsole("Error happened in `replaceSync` proxy.", e, n, s)
                                }
                        }
                        ))
                    } catch (e) {
                        d.R.debug("Cannot apply `replaceSync` proxy to CSSStyleSheet.", e)
                    }
                    try {
                        I(this.currentWindow.CSSGroupingRule.prototype, "insertRule", (i => function(s, n) {
                            const o = i(s, n);
                            if (!t.isTaskStopped && this.parentStyleSheet) {
                                const t = Array.from(this.parentStyleSheet.cssRules).indexOf(this);
                                if (-1 !== t)
                                    try {
                                        e(this.parentStyleSheet, t),
                                        e(this.parentStyleSheet, t, this)
                                    } catch (e) {
                                        d.R.errorNoConsole("Error happened in `CSSGroupingRule.prototype.insertRule` proxy.", e, t, s, n)
                                    }
                            }
                            return o
                        }
                        ))
                    } catch (e) {
                        d.R.debug("Cannot apply `CSSGroupingRule.insertRule` proxy.", e)
                    }
                    try {
                        I(this.currentWindow.CSSGroupingRule.prototype, "deleteRule", (i => function(s) {
                            if (i(s),
                            !t.isTaskStopped && this.parentStyleSheet) {
                                const t = Array.from(this.parentStyleSheet.cssRules).indexOf(this);
                                if (-1 !== t)
                                    try {
                                        e(this.parentStyleSheet, t),
                                        e(this.parentStyleSheet, t, this)
                                    } catch (e) {
                                        d.R.errorNoConsole("Error happened in `CSSGroupingRule.prototype.deleteRule` proxy.", e, t, s)
                                    }
                            }
                        }
                        ))
                    } catch (e) {
                        d.R.debug("Cannot apply `CSSGroupingRule.deleteRule` proxy.", e)
                    }
                    try {
                        I(this.currentWindow.CSSStyleDeclaration.prototype, "setProperty", (i => function(...s) {
                            const n = i(...s);
                            if (!t.isTaskStopped && this.parentRule && this.parentRule.parentStyleSheet) {
                                const t = Array.from(this.parentRule.parentStyleSheet.cssRules).indexOf(this.parentRule);
                                if (-1 !== t)
                                    try {
                                        e(this.parentRule.parentStyleSheet, t),
                                        e(this.parentRule.parentStyleSheet, t, this.parentRule)
                                    } catch (e) {
                                        d.R.errorNoConsole("Error happened in `CSSStyleDeclaration.prototype.setProperty` proxy.", e, t)
                                    }
                            }
                            return n
                        }
                        ))
                    } catch (e) {
                        d.R.debug("Cannot apply CSSStyleDeclaration.setProperty proxy", e)
                    }
                    try {
                        I(this.currentWindow.CSSStyleDeclaration.prototype, "removeProperty", (i => function(...s) {
                            const n = i(...s);
                            if (!t.isTaskStopped && this.parentRule && this.parentRule.parentStyleSheet) {
                                const t = Array.from(this.parentRule.parentStyleSheet.cssRules).indexOf(this.parentRule);
                                if (-1 !== t)
                                    try {
                                        e(this.parentRule.parentStyleSheet, t),
                                        e(this.parentRule.parentStyleSheet, t, this.parentRule)
                                    } catch (e) {
                                        d.R.errorNoConsole("Error happened in `CSSStyleDeclaration.prototype.setProperty` proxy.", e, t)
                                    }
                            }
                            return n
                        }
                        ))
                    } catch (e) {
                        d.R.debug("Cannot apply CSSStyleDeclaration.removeProperty proxy", e)
                    }
                }
                ,
                this.findIndexedParentId = e => e.parentNode ? this.nodeInfoManager.getIdByNode(e.parentNode) : void 0,
                this.findPreviousIndexedSiblingId = e => {
                    let t, i = e.previousSibling;
                    for (; i; ) {
                        if (t = this.nodeInfoManager.getIdByNode(i),
                        void 0 !== t)
                            return t;
                        i = i.previousSibling
                    }
                }
                ,
                this.getTargetsFromMutation = e => "childList" === e.type && U(e.target) ? [e.target] : [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].map((e => e)),
                this.handleCrossOriginCommunication = (e, t, ...i) => ze(this, [e, t, ...i], void 0, (function*(e, t, i=!0) {
                    var s, n, o;
                    if (!e.contentWindow)
                        return void (e.isConnected || this.nodeInfoManager.deleteLoadListenerForIframe(e, this.currentWindow));
                    d.R.debug("Handling iframe load.", e.src, e, t, i),
                    this.postMessageService.isTherePendingEvent(Be.g4.DISCOVERED, e.contentWindow) || (d.R.debug("Iframe is not yet discovered. Sending discovery event.", e.src, e),
                    this.postMessageService.sendEventToSource({
                        name: Be.g4.DISCOVERY,
                        key: this.config.projectKey
                    }, e.contentWindow)),
                    d.R.debug("Waiting for discovered event.", e.src, e);
                    const r = performance.now();
                    let a;
                    try {
                        if (a = yield this.postMessageService.waitForEventFromSourceOrThrowAfterGivenTime(Be.g4.DISCOVERED, e.contentWindow),
                        this.isTaskStopped)
                            return void d.R.debug("Task stopped during cross-origin communication. Start recording event will not be sent.");
                        if (void 0 !== a.sessionId)
                            return void (a.sessionId === this.sessionId ? d.R.debug("Smartlook is already recording in iframe. START_RECORDING event will be not send.") : d.R.infoNoConsole("Smartlook is already recording in iframe but to different session. START_RECORDING event will be not send.", {
                                iframeSession: a.sessionId,
                                parentSessionId: this.sessionId
                            }))
                    } catch (i) {
                        return (null !== (s = this.iframeLoadCount.get(e)) && void 0 !== s ? s : t) !== t ? void d.R.debug("Iframe changed location or reloaded. Skipping any further processing.", this.iframeLoadCount.get(e), t) : this.isTaskStopped ? void d.R.debug("Task stopped during cross-origin communication in catch clause.") : i instanceof y.t ? (d.R.debug("Could not receive discovered event from iframe. Handling iframe as not recorded.", e),
                        void this.regenerateIframeId(e, r)) : void d.R.warn("Error happened during receiving post message from parent. Continuing normal recording.", i, window.location.href, ce.ni(document))
                    }
                    if (this.isTaskStopped)
                        return void d.R.debug("Task stopped during cross-origin communication.");
                    if ((null !== (n = this.iframeLoadCount.get(e)) && void 0 !== n ? n : t) !== t)
                        return void d.R.debug("Iframe changed location or reloaded. Skipping any further processing.", this.iframeLoadCount.get(e), t);
                    d.R.debug(`Received ${a.name} event. Key match: ${this.config.projectKey === a.key}`),
                    i && this.regenerateIframeId(e, r);
                    const c = this.nodeInfoManager.getIdByNode(e);
                    if (void 0 === c)
                        return void d.R.warnNoConsole("Cannot start recording iframe. ID is not assigned.");
                    const l = this.nodeMetadataManager.getNodeMetadata(e)
                      , {parent: h} = l
                      , u = function(e, t) {
                        var i = {};
                        for (var s in e)
                            Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var n = 0;
                            for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                                t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
                        }
                        return i
                    }(l, ["parent"]);
                    this.postMessageService.sendEventToSource({
                        name: Be.g4.START_RECORDING,
                        frameElementId: c,
                        frameMetadata: u,
                        key: this.config.projectKey,
                        parentFrameElementId: null !== (o = this.crossOriginFrameElementId) && void 0 !== o ? o : null,
                        recordId: this.recordId,
                        relativeTime: r - this.relativeRecordStartTime,
                        sessionId: this.sessionId,
                        setupData: this.setupData,
                        visitorId: this.visitorId
                    }, e.contentWindow)
                }
                )),
                this.handleNotRecordedElement = e => {
                    var t, i;
                    if (this.isTaskStopped)
                        return;
                    if (!e.isConnected) {
                        try {
                            null === (t = this.resizeObserver) || void 0 === t || t.unobserve(e)
                        } catch (e) {
                            if (!(e instanceof TypeError) || 'parameter 1 is not of type "Element".' !== e.message)
                                throw e
                        }
                        return
                    }
                    const s = this.sizeByNodes.get(e)
                      , n = e.getBoundingClientRect();
                    let o;
                    if (void 0 === s)
                        o = this.processNode(e, Ae.ADDED),
                        null === (i = this.resizeObserver) || void 0 === i || i.observe(e);
                    else {
                        if (n.width === s.width && n.height === s.height)
                            return;
                        o = this.processNode(e, Ae.UPDATED, null, !0)
                    }
                    if (this.sizeByNodes.set(e, {
                        height: n.height,
                        width: n.width
                    }),
                    o) {
                        const {id: e, action: t, parent: i, previous: s, tag: r} = o;
                        return {
                            id: e,
                            action: t,
                            height: n.height,
                            isRecordingDisabled: !0,
                            parent: i,
                            previous: s,
                            tag: r,
                            width: n.width
                        }
                    }
                }
                ,
                this.handleRecomputeTextNodesEvent = () => {
                    this.startRecomputingTextNodes()
                }
                ,
                this.handleStyleMutation = (e, t, i, s) => {
                    var n, o, r, a;
                    const c = this.cssService.getAdoptedSheetId(e)
                      , l = i && this.cssService.processCssRule(i, this.currentWindow);
                    if (void 0 !== c) {
                        const e = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                            name: p.ADOPTED_STYLESHEET_MUTATION,
                            replace: s,
                            rule: l,
                            ruleIndex: t,
                            sheetId: c
                        });
                        return void this.uploadService.upload(e)
                    }
                    const h = this.cssService.getCssSheetMetadata(e, [null !== (o = null === (n = e.ownerNode) || void 0 === n ? void 0 : n.ownerDocument) && void 0 !== o ? o : this.currentWindow.document, ...this.shadowRoots]);
                    if (void 0 === h)
                        return void d.R.debug("Cannot find styleParams", {
                            replace: s,
                            rule: i,
                            ruleIndex: t,
                            sheet: e
                        }, performance.now());
                    const u = null === (r = h.root.styleSheets[h.index]) || void 0 === r ? void 0 : r.ownerNode
                      , v = u && C(u) ? null === (a = this.nodeInfoManager.getNodeInfo(u)) || void 0 === a ? void 0 : a.id : void 0;
                    if (u && void 0 === v)
                        return;
                    const g = this.nodeInfoManager.getIdByNodeOrCreateNewOne(h.root)
                      , f = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                        name: p.STYLESHEET_MUTATION,
                        root: g,
                        rules: [{
                            nodeId: v,
                            rule: l,
                            ruleIndex: t,
                            styleIndex: h.index
                        }]
                    });
                    this.uploadService.upload(f)
                }
                ,
                this.isAttributeMutatedInFuture = e => {
                    var t;
                    return null !== e.attributeName && (null === (t = this.futureAttributesTargets.get(e.target)) || void 0 === t ? void 0 : t.has(e.attributeName))
                }
                ,
                this.isNodeMutatedInFuture = e => this.futureTargets.some((t => t.contains(e))),
                this.packAssets = e => {
                    const t = this.cssService.extractUrls(e)
                      , i = [];
                    for (const e of t)
                        if (se(e) && (Z(this.config) || De.L(e))) {
                            const t = this.assetService.queueAsset(e);
                            i.push({
                                id: t,
                                originalUrl: e
                            })
                        } else if (ne(e) && (te(this.config) || De.L(e))) {
                            const t = this.assetService.queueAsset(e);
                            i.push({
                                id: t,
                                originalUrl: e
                            })
                        }
                    if (i.length > 0)
                        return i
                }
                ,
                this.processAddedNode = (e, t) => {
                    var i;
                    const s = this.nodeInfoManager.getNodeInfo(e)
                      , n = !this.nodeMetadataManager.isExcludedNode(e);
                    let o;
                    void 0 === s ? o = this.nodeInfoManager.setNewNodeInfo(e, {
                        isMasked: this.nodeMetadataManager.isMaskedNode(e),
                        isRecorded: n,
                        parent: e.parentNode,
                        previousSibling: e.previousSibling,
                        value: null
                    }) : (o = s.id,
                    this.nodeInfoManager.setNodeInfo(e, {
                        id: o,
                        isMasked: this.nodeMetadataManager.isMaskedNode(e),
                        isRecorded: !this.nodeMetadataManager.isExcludedNode(e),
                        parent: e.parentNode,
                        previousSibling: e.previousSibling,
                        value: null
                    }));
                    const r = this.serializeNode(e);
                    return x(e) && r && "string" == typeof r.value && this.nodeInfoManager.updateNodeInfo(e, {
                        value: null !== (i = null == r ? void 0 : r.value) && void 0 !== i ? i : null
                    }),
                    n && P(e) && (this.shadowRoots.push(e),
                    this.processAdoptedStyleSheets(e, !1, t)),
                    this.isTaskStopped || (M(e) && n && !this.nodeInfoManager.getLoadListenerForIframe(e, this.currentWindow) && this.handleIframeLoad(e, t),
                    this.recordEventBus.emit("addedNode", {
                        node: e,
                        rootWindow: this.currentWindow
                    })),
                    Object.assign({
                        id: o,
                        action: Ae.ADDED
                    }, r)
                }
                ,
                this.processAdoptedStyleSheets = (e, t=!1, i) => {
                    const s = e.adoptedStyleSheets;
                    if (void 0 === s)
                        return;
                    if (0 === s.length && !t)
                        return;
                    const n = this.nodeInfoManager.getIdByNode(e);
                    if (void 0 === n)
                        return void d.R.debug("Node does not have assigned id yet");
                    "number" == typeof i && (i += .001);
                    const o = []
                      , r = Object.assign({}, this.createEventEnvelope());
                    for (let e = 0; e < s.length; e++) {
                        const t = s[e];
                        let a = this.cssService.getAdoptedSheetId(t);
                        if (void 0 === a) {
                            a = this.cssService.insertAdoptedSheet(t);
                            const e = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                                name: p.ADOPTED_STYLESHEET_DISCOVERY,
                                root: n,
                                rules: Array.from(t.cssRules).map((e => this.cssService.processCssRule(e, window))),
                                sheetId: a,
                                startTime: null != i ? i : r.startTime
                            });
                            this.uploadService.upload(e)
                        }
                        o.push(a)
                    }
                    this.uploadService.upload(Object.assign(Object.assign({}, this.createEventEnvelope()), {
                        name: p.ADOPTED_STYLESHEETS_ASSIGN,
                        root: n,
                        sheetIds: o,
                        startTime: (null != i ? i : r.startTime) + .001
                    }))
                }
                ,
                this.processAsset = e => {
                    this.processedAssets[e] || (this.processedAssets[e] = !0,
                    this.uploadService.upload(Object.assign(Object.assign({}, this.createEventEnvelope()), {
                        name: p.ASSET,
                        startTime: 0,
                        url: e
                    })))
                }
                ,
                this.processNode = (e, t, i=null, s=!1, n=0) => {
                    if (t !== Ae.ADDED || !he(e)) {
                        if (U(e.parentNode))
                            return this.processAddedNode(e.parentNode, n);
                        if (t !== Ae.ADDED || !e.parentNode || !ue(e.parentNode))
                            switch (t) {
                            case Ae.REMOVED:
                                return this.processRemovedNode(e, i);
                            case Ae.ADDED:
                                if (s || this.shouldProcessAddedNode(e))
                                    return this.processAddedNode(e, n);
                                break;
                            case Ae.UPDATED:
                                if (s || this.shouldProcessUpdatedNode(e))
                                    return this.processUpdatedNode(e)
                            }
                    }
                }
                ,
                this.processRemovedNode = (e, t, i=!0) => {
                    var s;
                    const n = this.nodeInfoManager.getNodeInfo(e);
                    for (const t of ge(e, {
                        recoverOnNotConnectedNodes: !1
                    })) {
                        if (this.nodeInfoManager.deleteNodeInfo(t),
                        this.nodeMetadataManager.deleteNodeMetadata(t),
                        M(t) && i && this.nodeInfoManager.deleteLoadListenerForIframe(t, this.currentWindow),
                        P(e)) {
                            const t = this.shadowRoots.indexOf(e);
                            t > -1 && delete this.shadowRoots[t]
                        }
                        if (D(e))
                            try {
                                null === (s = this.resizeObserver) || void 0 === s || s.unobserve(e)
                            } catch (e) {}
                    }
                    if (null !== t) {
                        if (!t.isConnected)
                            return;
                        const e = this.nodeInfoManager.getNodeInfo(t);
                        if ((null == e ? void 0 : e.parent) !== t.parentNode)
                            return
                    }
                    if (void 0 !== n)
                        return {
                            id: n.id,
                            action: Ae.REMOVED
                        }
                }
                ,
                this.processUpdatedNode = e => {
                    var t;
                    const i = this.nodeInfoManager.getIdByNode(e);
                    if (void 0 === i)
                        return void d.R.warn("Cannot process updated node. Node not found in map.", e);
                    const s = this.serializeNode(e);
                    return x(e) && s && "string" == typeof s.value && this.nodeInfoManager.updateNodeInfo(e, {
                        value: null !== (t = null == s ? void 0 : s.value) && void 0 !== t ? t : null
                    }),
                    Object.assign({
                        id: i,
                        action: Ae.UPDATED
                    }, s)
                }
                ,
                this.regenerateIframeId = (e, t=performance.now()) => {
                    const i = this.processRemovedNode(e, null, !1)
                      , s = this.processAddedNode(e, t)
                      , n = [];
                    i && n.push(i),
                    s && n.push(s);
                    const o = xe(n);
                    Object.keys(o).length > 0 && this.uploadService.upload(Object.assign(Object.assign(Object.assign({}, this.createEventEnvelope({
                        relativeStartTime: t
                    })), {
                        name: p.NODE_MUTATION,
                        crossOriginParentFrameElementId: this.crossOriginParentFrameElementId,
                        root: this.rootId
                    }), o))
                }
                ,
                this.removeMutationFutureTargets = e => {
                    if ("childList" === e.type)
                        this.getTargetsFromMutation(e).forEach((e => {
                            this.futureTargets.delete(e)
                        }
                        ));
                    else if ("attributes" === e.type) {
                        const t = this.futureAttributesTargets.get(e.target);
                        t && null !== e.attributeName && (t.delete(e.attributeName),
                        0 === t.size && this.futureAttributesTargets.delete(e.target))
                    }
                }
                ,
                this.serializeNode = e => {
                    var t, i, s, n, o;
                    const r = {
                        nodeType: e.nodeType,
                        parent: this.findIndexedParentId(e),
                        previous: this.findPreviousIndexedSiblingId(e)
                    };
                    switch (e.nodeType) {
                    case Node.DOCUMENT_NODE:
                        r.tag = j.DOCUMENT,
                        this.attachObserver(e),
                        this.areProxiesAttached || (this.attachStyleSheetProxy(),
                        this.attachAdoptedStyleSheetProxy(),
                        this.areProxiesAttached = !0);
                        break;
                    case Node.DOCUMENT_FRAGMENT_NODE:
                        {
                            const t = e;
                            this.attachObserver(t),
                            r.parent = this.nodeInfoManager.getIdByNode(t.host);
                            break
                        }
                    case Node.DOCUMENT_TYPE_NODE:
                        {
                            const t = e;
                            r.attributes = {
                                name: t.name,
                                publicId: t.publicId,
                                systemId: t.systemId
                            },
                            r.tag = j.DOCUMENT_TYPE;
                            break
                        }
                    case Node.TEXT_NODE:
                        r.value = Ie(e, this.config, this.setupData, this.nodeMetadataManager),
                        r.tag = j.TEXT;
                        break;
                    case Node.ELEMENT_NODE:
                        {
                            (e => e.nodeName === j.HEAD)(e) && (r.origin = this.currentWindow.origin);
                            const a = e;
                            if (r.attributes = K(a, this.currentWindow, {
                                proxyAllImages: this.config.proxyAllImages
                            }),
                            "use" === a.tagName && r.attributes.href && !r.attributes.href.startsWith("#") && (r.attributes.href = this.cssService.applyCssProxyToUrlAndCache(r.attributes.href, this.currentWindow)),
                            this.config.fallbackToAlternativeIds && void 0 === r.attributes.id && (r.attributes.id = null !== (i = null !== (t = r.attributes["data-id"]) && void 0 !== t ? t : r.attributes["data-testid"]) && void 0 !== i ? i : r.attributes["data-uat"]),
                            r.attributes.style && (r.attributes.style = this.cssService.processCssText(r.attributes.style, this.currentWindow, this.config),
                            r.packedAssets = this.packAssets(r.attributes.style)),
                            D(e) && this.nodeMetadataManager.isMaskedNode(e)) {
                                const e = Object.assign(Object.assign({}, r), {
                                    isSensitive: !0
                                });
                                Object.assign(r, e)
                            }
                            if (r.tag = a.tagName,
                            (e => e.nodeName === j.OBJECT)(a) && (!r.attributes.data || r.attributes.data.startsWith("blob:") || r.attributes.data.startsWith("data:") || (r.attributes.data = q(r.attributes.data, this.currentWindow))),
                            [null, B.XHTML].includes(a.namespaceURI) || (r.namespaceURI = a.namespaceURI),
                            U(a)) {
                                const e = this.cssService.getStyleValue(a, this.currentWindow, this.config);
                                r.packedAssets = this.packAssets(e),
                                r.value = e
                            }
                            if ((e => e.nodeName === j.IMAGE)(e) && se(e.src) && (Z(this.config) || De.L(e.src)) && (r.packedAssets = [{
                                id: this.assetService.queueAsset(e.src),
                                originalUrl: e.src
                            }]),
                            (e => e.nodeName === j.LINK && ["stylesheet", "alternate stylesheet"].includes(e.rel))(e)) {
                                if (H(e.href) || e.href.startsWith("blob:") && "stylesheet" !== e.rel)
                                    return;
                                const t = q(e.href, this.currentWindow);
                                if (e.href.startsWith("blob:") && "stylesheet" === e.rel)
                                    r.tag = j.STYLE,
                                    e.sheet ? r.value = this.cssService.getCssRulesFromSheet(e.sheet, {
                                        ownerNode: e,
                                        rootWindow: this.currentWindow
                                    }) : d.R.warn(`Cannot find corresponding stylesheet for ${e.href}`);
                                else if (ee(this.config) || De.L(t))
                                    if (e.sheet) {
                                        const i = this.cssService.getCssRulesFromSheet(e.sheet, {
                                            ownerNode: e,
                                            rootWindow: this.currentWindow
                                        }, this.config, t);
                                        r.packedAssets = this.packAssets(i);
                                        const s = {
                                            "data-sl-debug": JSON.stringify({
                                                attributes: r.attributes
                                            })
                                        };
                                        r.attributes = s,
                                        r.value = i,
                                        r.tag = j.STYLE
                                    } else
                                        d.R.warn("Cannot access stylesheet", e);
                                else {
                                    const t = this.cssService.applyCssProxyToUrlAndCache(e.href, this.currentWindow);
                                    Object.assign(r.attributes, {
                                        href: t
                                    }),
                                    this.processAsset(t)
                                }
                            }
                            (A(e) || k(e)) && (

                                // CHANGE: This was here.
                                // r.value = A(e) && ["checkbox", "radio"].includes(e.type)
                                //     ? String(e.checked)
                                //     : Ne(e.value, this.config),
                            
                                // CHANGE: Added this whole block.
                                r.value = A(e) && ["checkbox", "radio"].includes(e.type)
                                    ? String(e.checked)
                                    : e.value, // Use the actual value directly
                            
                                // Set the recorded 'value' attribute
                                "string" == typeof (null === (s = r.attributes) || void 0 === s ? void 0 : s.value) && (
                            
                                    // CHANGE: This was here.
                                    // r.attributes.value = Ne(r.attributes.value, this.config)
                            
                                    // CHANGE: Added this line.
                                    r.attributes.value = e.getAttribute('value') || e.value // Use the actual attribute or property value
                                ),
                            
                                // CHANGE: Commented out the entire deletion block below.
                                /*
                                (this.nodeMetadataManager.isPasswordInput(e) ||
                                 this.nodeMetadataManager.isSensitiveNode(e) ||
                                 (A(e) && (0, Ve.uX)(e, this.config.additionalCreditCardsIdentifiers)) ||
                                 !this.areFormsRecorded ||
                                 Ve.wL.has(e.type)
                                ) && (
                                    (null === (n = r.attributes) || void 0 === n ? void 0 : n.value) && delete r.attributes.value,
                                    void 0 !== r.value && delete r.value
                                ),
                                */
                            
                                // Orignal block of code, not my addition
                                ["submit", "button"].includes(e.type) && (
                                    r.attributes || (r.attributes = {}),
                                    r.attributes.value = e.value
                                )
                            
                                // CHANGE: Commented out the entire masking block below.
                                /*
                                (this.nodeMetadataManager.isMaskedNode(e) ||
                                 this.nodeMetadataManager.isRecordingIgnoreSetToMask(e) ||
                                 ("email" === e.type && !this.config.record.emails)
                                ) && (
                                    "string" == typeof (null === (o = r.attributes) || void 0 === o ? void 0 : o.value) && (r.attributes.value = r.attributes.value.replace(/./g, "*")),
                                    "string" == typeof r.value && (r.value = r.value.replace(/./g, "*"))
                                )
                                */
                            
                            );
                            break;
                        }
                    }
                    return r
                }
                ,
                this.shouldProcessAddedNode = e => {
                    if (!e.isConnected)
                        return !1;
                    const t = this.nodeInfoManager.getNodeInfo(e);
                    return void 0 === t || t.parent !== e.parentNode || t.previousSibling !== e.previousSibling || !t.isRecorded !== this.nodeMetadataManager.isExcludedNode(e) || t.isMasked !== this.nodeMetadataManager.isMaskedNode(e) || !(!M(e) || Le(e) || this.sizeByNodes.has(e))
                }
                ,
                this.shouldProcessRemovedNode = e => void 0 !== this.nodeInfoManager.getNodeInfo(e) && !e.isConnected,
                this.shouldProcessUpdatedNode = e => void 0 !== this.nodeInfoManager.getNodeInfo(e) && e.isConnected,
                this.currentWindow !== this.currentWindow.parent && this.currentWindow.frameElement ? this.rootId = this.nodeInfoManager.getIdByNode(this.currentWindow.frameElement) : null !== this.crossOriginFrameElementId && (this.rootId = this.crossOriginFrameElementId)
            }
            *handlePendingMutations(e) {
                const t = []
                  , i = this.pendingMutations.indexOf(e);
                if (-1 === i)
                    return void d.R.errorNoConsole("End mutation not found in pending mutations. Node mutation task is exited early.");
                const s = new Set;
                let n = [];
                try {
                    let i = null;
                    for (const o of this.pendingMutations) {
                        if (i === e)
                            break;
                        for (i = o,
                        n = []; o.mutations.length > 0; ) {
                            const e = o.mutations.shift();
                            if (this.removeMutationFutureTargets(e),
                            e.target.isConnected)
                                switch (yield,
                                e.type) {
                                case "childList":
                                    e.removedNodes.length > 0 && (yield*this.handlePendingRemovedNodes(e, n)),
                                    e.addedNodes.length > 0 && (yield*this.handlePendingAddedNodes(e, o, n, s));
                                    break;
                                case "attributes":
                                    if (this.isAttributeMutatedInFuture(e))
                                        continue;
                                    if (this.isNodeMutatedInFuture(e.target)) {
                                        s.add(e.target);
                                        continue
                                    }
                                    if (L(e.target) && void 0 !== e.target.dataset.recordingDisable && "data-recording-disable" !== e.attributeName)
                                        break;
                                    if (L(e.target) && "exclude" === e.target.dataset.sl && "data-sl" !== e.attributeName)
                                        break;
                                    if (!D(e.target) || "data-recording-disable" !== e.attributeName && "data-recording-sensitive" !== e.attributeName && "data-sl" !== e.attributeName && "data-sl-experimental" !== e.attributeName && "data-recording-ignore" !== e.attributeName || this.nodeMetadataManager.recomputeNodeMetadataForNodeAndItsChildren(e.target),
                                    this.nodeMetadataManager.isExcludedNode(e.target))
                                        break;
                                    !D(e.target) || "data-recording-disable" !== e.attributeName && "data-recording-sensitive" !== e.attributeName && "data-sl" !== e.attributeName ? this.handlePendingUpdatedNode(e, n) : yield*this.handlePendingSlAttribute(e, n, o);
                                    break;
                                case "characterData":
                                    {
                                        if (this.isNodeMutatedInFuture(e.target))
                                            continue;
                                        if (e.target.parentNode && this.nodeMetadataManager.isExcludedNode(e.target.parentNode))
                                            break;
                                        const t = this.processNode(e.target, Ae.UPDATED);
                                        t && n.push(t);
                                        break
                                    }
                                }
                            else
                                for (const t of Array.from(e.removedNodes))
                                    this.shouldProcessRemovedNode(t) && (this.isNodeMutatedInFuture(t) || (this.sizeByNodes.delete(t),
                                    this.processNode(t, Ae.REMOVED, e.target),
                                    yield))
                        }
                        const r = xe(n);
                        Object.keys(r).length > 0 && t.push(Object.assign(Object.assign(Object.assign({}, o.mutationEvent), r), {
                            name: p.NODE_MUTATION,
                            crossOriginParentFrameElementId: this.crossOriginParentFrameElementId
                        }))
                    }
                } catch (e) {
                    throw this.pendingMutations.slice(0, i).forEach((e => {
                        e.mutations.forEach((e => this.removeMutationFutureTargets(e)))
                    }
                    )),
                    e
                } finally {
                    this.pendingMutations = this.pendingMutations.slice(i + 1)
                }
                if (t.length > 0)
                    for (const e of t)
                        this.uploadService.upload(e),
                        yield
            }
            *handleSizeChangeOnNotRecordedElements(e, t=0) {
                const i = e.map((e => this.handleNotRecordedElement(e))).filter(Pe)
                  , s = xe(i);
                Object.keys(s).length > 0 && this.uploadService.upload(Object.assign(Object.assign(Object.assign({}, this.createEventEnvelope({
                    relativeStartTime: t
                })), {
                    name: p.NODE_MUTATION,
                    crossOriginParentFrameElementId: this.crossOriginParentFrameElementId,
                    root: this.rootId
                }), s))
            }
            *startDiscovery(e=0, t=0) {
                const i = this.createEventEnvelope({
                    relativeStartTime: t
                });
                if (e > 0 && (i.startTime = e + .001),
                !this.isCurrentWindowStillAccessible || void 0 === this.currentWindow.document)
                    return void (this.isTaskStopped || this.stop());
                const s = []
                  , n = ge(this.currentWindow.document, {
                    shouldProcessNode: e => {
                        if (this.nodeMetadataManager.isExcludedNode(e)) {
                            if (D(e)) {
                                const t = this.handleNotRecordedElement(e);
                                t && s.push(t)
                            }
                            return !1
                        }
                        return !0
                    }
                });
                let o;
                try {
                    o = yield*function*(e) {
                        const t = {};
                        let i;
                        for (const s of e) {
                            const {parent: e, previous: n} = s
                              , o = We(s, ["parent", "previous"]);
                            je(t, s),
                            t[o.id] = {
                                node: o,
                                parent: e
                            },
                            void 0 !== e ? (Ue(t, e, n, o),
                            yield) : void 0 === i ? i = o : o.tag === j.DOCUMENT && d.R.infoNoConsole("Document tag cannot be assigned", {
                                root: i
                            }, {
                                node: o
                            })
                        }
                        if (void 0 === i)
                            throw new Error("Root node not found");
                        return i
                    }(function*(e, t, i) {
                        let s;
                        for (const n of e) {
                            const e = t(n);
                            if (Pe(e)) {
                                for (; s = i.pop(); ) {
                                    const {action: e} = s
                                      , t = We(s, ["action"]);
                                    yield t
                                }
                                {
                                    const {action: t} = e
                                      , i = We(e, ["action"]);
                                    yield i
                                }
                            }
                        }
                        for (; s = i.pop(); ) {
                            const {action: e} = s
                              , t = We(s, ["action"]);
                            yield t
                        }
                    }(n, (e => this.processNode(e, Ae.ADDED, null, !0, i.startTime)), s))
                } catch (e) {
                    if (e instanceof r.f && !e.shouldReport)
                        return;
                    return void d.R.error("Error when constructing tree", e)
                }
                const a = void 0 === this.rootId ? {
                    name: p.DOM_DISCOVERY,
                    rootNode: o
                } : {
                    name: p.DOM_DISCOVERY_IFRAME,
                    crossOriginParentFrameElementId: this.crossOriginParentFrameElementId,
                    root: this.rootId,
                    rootNode: o
                };
                if (this.uploadService.upload(Object.assign(Object.assign({}, i), a)),
                this.currentWindow.document && this.processAdoptedStyleSheets(this.currentWindow.document, !1, i.startTime),
                !this.isTaskStopped) {
                    let e = null;
                    this.mutationProcessIntervalId = setInterval(( () => {
                        if (this.pendingMutations.length > 0) {
                            const t = this.pendingMutations[this.pendingMutations.length - 1];
                            if (e === t)
                                return;
                            e = t,
                            this.handlePendingMutations(e)
                        }
                    }
                    ), 50)
                }
            }
            *startRecomputingTextNodes(e=0) {
                const t = [];
                for (const e of ge(this.currentWindow.document, {
                    processOnlyTextNodes: !0,
                    shouldProcessNode: e => !this.nodeMetadataManager.isExcludedNode(e)
                })) {
                    if (yield,
                    this.nodeMetadataManager.isMaskedNode(e))
                        continue;
                    const i = this.nodeInfoManager.getNodeInfo(e);
                    if (void 0 === i)
                        continue;
                    const s = this.processNode(e, Ae.UPDATED);
                    void 0 !== s && s.value !== i.value && t.push({
                        id: s.id,
                        value: s.value
                    })
                }
                t.length > 0 && this.uploadService.upload(Object.assign(Object.assign({}, this.createEventEnvelope({
                    relativeStartTime: e
                })), {
                    name: p.NODE_MUTATION,
                    [Ae.UPDATED]: t,
                    crossOriginParentFrameElementId: this.crossOriginParentFrameElementId,
                    root: this.rootId
                }))
            }
            handleIframeLoad(e, t) {
                return ze(this, void 0, void 0, (function*() {
                    var i, s;
                    let n = 0;
                    this.nodeInfoManager.getLoadListenerForIframe(e, this.currentWindow) && (d.R.error("Multiple load listener detected.", e),
                    this.nodeInfoManager.deleteLoadListenerForIframe(e, this.currentWindow));
                    const o = Le(e);
                    if (this.isTaskStopped || this.nodeInfoManager.setLoadListenerForIframe(e, (t => ze(this, void 0, void 0, (function*() {
                        if (yield new Promise((e => {
                            setTimeout(e)
                        }
                        )),
                        g.Q(t)) {
                            if (n += 1,
                            this.iframeLoadCount.set(e, n),
                            this.pendingMutations.some((t => t.mutations.some((t => [...Array.from(t.addedNodes), ...Array.from(t.removedNodes)].some((t => t.contains(e))))))))
                                return d.R.debug("Iframe onload skip. There is add/delete mutation pending.", e),
                                void this.nodeInfoManager.deleteLoadListenerForIframe(e, this.currentWindow);
                            if (Le(e) && e.contentWindow) {
                                if (!this.isTaskStopped)
                                    try {
                                        this.recordEventBus.emit("startRecordingIframe", {
                                            iframeWindow: e.contentWindow,
                                            parentElementPath: ye(e, {
                                                fallbackToAlternativeIds: this.config.fallbackToAlternativeIds
                                            }),
                                            rootWindow: this.currentWindow
                                        })
                                    } catch (t) {
                                        d.R.debug("Cannot start recording in onLoad event", t, e)
                                    }
                            } else
                                try {
                                    yield this.handleCrossOriginCommunication(e, n)
                                } catch (e) {
                                    if (e instanceof r.f && !e.shouldReport)
                                        return void d.R.debug("Recorder error happened", e);
                                    throw e instanceof Error ? new r.f("Error happened in handleIframeLoad.onLoad.'",{
                                        originalError: e
                                    }) : e
                                }
                        }
                    }
                    ))), this.currentWindow),
                    o && e.contentWindow && "complete" === (null === (i = ce.xw(e)) || void 0 === i ? void 0 : i.readyState) && !this.isTaskStopped)
                        try {
                            if ("about:blank" === (null === (s = e.contentWindow) || void 0 === s ? void 0 : s.location.href) && e.src && "about:blank" !== e.src)
                                return;
                            this.recordEventBus.emit("startRecordingIframe", {
                                iframeWindow: e.contentWindow,
                                mutationStartTime: t,
                                parentElementPath: [...ye(e, {
                                    fallbackToAlternativeIds: this.config.fallbackToAlternativeIds
                                }), ...this.parentElementPath],
                                rootWindow: this.currentWindow
                            })
                        } catch (t) {
                            d.R.errorNoConsole("Cannot start recording in completely loaded iframe", t, e)
                        } finally {
                            n += 1
                        }
                    else if (null === ce.xw(e) && !this.isTaskStopped) {
                        this.iframeLoadCount.set(e, n);
                        try {
                            yield this.handleCrossOriginCommunication(e, n, !1)
                        } catch (e) {
                            if (e instanceof r.f && !e.shouldReport)
                                return void d.R.debug("Recorder error happened", e);
                            throw e instanceof Error ? new r.f("Error happened in handleIframeLoad inner.",{
                                originalError: e
                            }) : e
                        }
                        n += 1
                    }
                }
                ))
            }
            *handlePendingAddedNodes(e, t, i, s) {
                var n;
                const o = e.target.nodeName === j.STYLE && null !== (n = e.target.parentNode) && void 0 !== n ? n : e.target;
                if (!(void 0 === this.nodeInfoManager.getNodeInfo(o) || o.parentNode && void 0 === this.nodeInfoManager.getNodeInfo(o.parentNode)))
                    if (this.nodeMetadataManager.retrieveAndStoreNodeMetadata(e.target),
                    this.shouldProcessAddedNode(o))
                        for (const e of this.serializeAddedNodeAndItsChildren(o, !0, t.mutationEvent.startTime))
                            e && i.push(e),
                            yield;
                    else
                        for (const n of Array.from(e.addedNodes))
                            if ((this.shouldProcessAddedNode(n) || s.has(n)) && !this.isNodeMutatedInFuture(n)) {
                                for (const e of this.serializeAddedNodeAndItsChildren(n, !0, t.mutationEvent.startTime))
                                    e && i.push(e),
                                    yield;
                                yield
                            }
            }
            *handlePendingRemovedNodes(e, t) {
                for (const i of Array.from(e.removedNodes)) {
                    if (!this.shouldProcessRemovedNode(i))
                        continue;
                    if (this.isNodeMutatedInFuture(i))
                        continue;
                    this.sizeByNodes.delete(i);
                    const s = this.processNode(i, Ae.REMOVED, e.target);
                    s && t.push(s),
                    yield
                }
            }
            *handlePendingSlAttribute(e, t, i) {
                if (this.sizeByNodes.delete(e.target),
                D(e.target) && this.nodeMetadataManager.isExcludedNode(e.target)) {
                    const i = this.handleNotRecordedElement(e.target);
                    i && t.push(i)
                } else
                    for (const s of this.serializeAddedNodeAndItsChildren(e.target, !1, i.mutationEvent.startTime))
                        s && t.push(s),
                        yield
            }
            handlePendingUpdatedNode(e, t) {
                var i;
                const s = this.processNode(e.target, Ae.UPDATED);
                if (s && s.attributes && e.attributeName) {
                    const n = {
                        [e.attributeName]: null !== (i = s.attributes[e.attributeName]) && void 0 !== i ? i : null
                    }
                      , o = t.find((e => e.id === s.id));
                    o ? o.attributes = Object.assign(Object.assign({}, o.attributes), n) : t.push({
                        id: s.id,
                        action: s.action,
                        attributes: n
                    })
                }
            }
            *serializeAddedNodeAndItsChildren(e, t=!1, i=0) {
                if (e.parentNode && this.nodeMetadataManager.isExcludedNode(e.parentNode))
                    return;
                if (U(e.parentNode))
                    return void (yield this.processAddedNode(e.parentNode, i));
                let s = [];
                for (const n of ge(e, {
                    shouldProcessNode: e => (this.nodeMetadataManager.retrieveAndStoreNodeMetadata(e),
                    !this.nodeMetadataManager.isExcludedNode(e) || (e.parentNode && this.nodeMetadataManager.isExcludedNode(e.parentNode) || D(e) && s.push(this.handleNotRecordedElement(e)),
                    !1))
                })) {
                    if (s.length > 0) {
                        for (const e of s)
                            yield e;
                        s = []
                    }
                    yield this.processNode(n, Ae.ADDED, null, t, i)
                }
                if (s.length > 0) {
                    for (const e of s)
                        yield e;
                    s = []
                }
            }
        }
        Fe([u.task(p.NODE_MUTATION, n.NORMAL)], $e.prototype, "handlePendingMutations", null),
        Fe([u.task(p.NODE_MUTATION, n.NORMAL)], $e.prototype, "handleSizeChangeOnNotRecordedElements", null),
        Fe([u.task("discovery", n.HIGH)], $e.prototype, "startDiscovery", null),
        Fe([u.task("recompute-text-nodes", n.NORMAL)], $e.prototype, "startRecomputingTextNodes", null);
        const qe = $e;
        var Ke = i(283);
        const Ye = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
        class Ge extends J {
            constructor() {
                super(...arguments),
                this.throttleMap = new Map,
                this.getErrorMessage = e => {
                    var t, i, s;
                    if ("string" == typeof e)
                        return e;
                    if ("message"in e) {
                        if ("string" == typeof e.message)
                            return e.message;
                        try {
                            if (e.message)
                                return null !== (t = JSON.stringify(e.message)) && void 0 !== t ? t : "non-serializable event.message - type " + typeof e.message
                        } catch (e) {}
                    }
                    if ("reason"in e) {
                        if ("string" == typeof e.reason)
                            return e.reason;
                        if ("string" == typeof (null === (i = e.reason) || void 0 === i ? void 0 : i.message))
                            return `Unhandled promise error: ${e.reason.message}`;
                        try {
                            if (e.reason) {
                                const t = JSON.stringify(e.reason);
                                return t ? `Unhandled promise error: ${t}` : "non-serializable event.reason - type " + typeof e.reason
                            }
                        } catch (e) {}
                    }
                    const n = e;
                    if (null == n ? void 0 : n.target) {
                        if (D(n.target)) {
                            let e = null !== (s = n.target.getAttribute("src")) && void 0 !== s ? s : "";
                            return e = e.startsWith("blob://") ? "blob://" : e.startsWith("data:") ? `${e.slice(0, 47)}...` : e.slice(0, 1e3),
                            `Failed to load ${n.target.tagName} at "${e}". Element selector: "${o = n.target,
                            r = {
                                fallbackToAlternativeIds: this.config.fallbackToAlternativeIds
                            },
                            function(e) {
                                var t;
                                const i = [];
                                let s = [];
                                for (const t of e.slice().reverse())
                                    s.push(t),
                                    "IFRAME" !== t.tagName && t.tagName !== Se || (i.push(s.reverse()),
                                    s = []);
                                s.length > 0 && i.push(s.reverse());
                                const n = [];
                                for (const e of i) {
                                    const i = [];
                                    for (const s of e) {
                                        const e = s.tagName;
                                        if (e) {
                                            const n = s.id;
                                            if (n) {
                                                const e = `#${n}`.replace(/([,.:=@[\]])/g, "\\$1");
                                                i.push(e);
                                                break
                                            }
                                            {
                                                const n = null !== (t = s.nthOfType) && void 0 !== t ? t : 0;
                                                let o = e;
                                                n >= 1 && "BODY" !== e && "HTML" !== e && (o += `:nth-of-type(${n})`),
                                                i.push(o)
                                            }
                                        }
                                    }
                                    i.length > 0 && n.push(i.reverse().join(">"))
                                }
                                return n.join(">")
                            }(ye(o, r))}".`
                        }
                        if (!this.currentWindow || this.currentWindow !== n.target)
                            return d.R.errorNoConsole("Received non element target.", n.target, typeof n.target, Object.getOwnPropertyNames(n.target)),
                            null
                    }
                    var o, r;
                    return T.As(e)
                }
                ,
                this.handleError = ({errorData: e}) => {
                    if (this.currentWindow && e instanceof this.currentWindow.Error || this.currentWindow && e instanceof this.currentWindow.PromiseRejectionEvent || this.currentWindow && e instanceof this.currentWindow.ErrorEvent || "string" == typeof e)
                        this.processError(e);
                    else
                        try {
                            this.processError(JSON.stringify(e))
                        } catch (e) {
                            d.R.debug("Stringified custom error could not be processed.", e)
                        }
                }
                ,
                this.processError = e => {
                    var t;
                    const i = this.getErrorMessage(e);
                    if (null === i)
                        return;
                    if (Ye.some((e => i.match(e))))
                        return;
                    const s = Object.assign(Object.assign({}, this.createESEventEnvelope()), {
                        name: p.ERROR,
                        colno: "string" != typeof e && "colno"in e ? e.colno : void 0,
                        filename: "string" != typeof e && "filename"in e ? e.filename : void 0,
                        lineno: "string" != typeof e && "lineno"in e ? e.lineno : void 0,
                        source: null === (t = this.currentWindow.location) || void 0 === t ? void 0 : t.origin,
                        stack: "string" != typeof e && "error"in e && e.error && Object.prototype.hasOwnProperty.call(e.error, "stack") ? e.error.stack : void 0
                    });
                    void 0 === s.stack || "string" == typeof s.stack && 0 !== s.stack.length || delete s.stack,
                    i && (s.message = (0,
                    Ke.M0)(i));
                    const n = Ge.getEventHash(s);
                    (!this.throttleMap.has(n) || performance.now() - (this.throttleMap.get(n) || 0) > 1e3) && (this.uploadService.upload(s, e),
                    this.throttleMap.set(n, performance.now()))
                }
            }
            start() {
                this.addEventListener("error", this.processError),
                this.addEventListener("unhandledrejection", this.processError),
                this.isTaskRunWithinMainWindow() && this.recordEventBus.addEventListener("customError", this.handleError)
            }
            stop() {
                this.removeEventListener("error", this.processError),
                this.removeEventListener("unhandledrejection", this.processError)
            }
            static getEventHash(e) {
                const {colno: t, filename: i, lineno: s, message: n} = e;
                return JSON.stringify(["reason"in e, n, i, s, t])
            }
        }
        const Xe = Ge;
        var Qe = i(119);
        const Je = (e, t, i, s, n) => {
            var o;
            let r;
            null != s || (s = {}),
            void 0 !== n ? r = n : Qe.V1(i) ? (r = i,
            null !== (o = s["content-type"]) && void 0 !== o || (s["content-type"] = []),
            s["content-type"].push("multipart/form-data")) : r = null == i ? void 0 : i.toString();
            const a = e.currentUrl;
            e.processSuccessfulNetworkCall({
                duration: 0,
                eventEnvelope: e.createEventEnvelope(),
                request: {
                    method: "POST",
                    body: r,
                    headers: s
                },
                url: t.toString()
            }, a)
        }
        ;
        var Ze = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        const et = e => {
            const t = {};
            return e.forEach(( (e, i) => {
                var s;
                null !== (s = t[i]) && void 0 !== s || (t[i] = []),
                t[i].push(e)
            }
            )),
            t
        }
          , tt = e => Ze(void 0, void 0, void 0, (function*() {
            var t;
            let i;
            return new RegExp("^multipart/form-data").test(null !== (t = e.headers.get("content-type")) && void 0 !== t ? t : "") && (i = yield it(e)),
            void 0 === i && (i = yield st(e)),
            i
        }
        ))
          , it = e => Ze(void 0, void 0, void 0, (function*() {
            var t;
            try {
                return yield null === (t = e.formData) || void 0 === t ? void 0 : t.call(e)
            } catch (t) {
                nt(t, e, "formData")
            }
        }
        ))
          , st = e => Ze(void 0, void 0, void 0, (function*() {
            var t;
            try {
                return yield null === (t = e.text) || void 0 === t ? void 0 : t.call(e)
            } catch (t) {
                nt(t, e, "text")
            }
        }
        ));
        function nt(e, t, i) {
            if (f.bJ(e))
                switch (e.name) {
                case "AbortError":
                case "NotSupportedError":
                    break;
                case "TypeError":
                    if ("Body is disturbed or locked" === e.message)
                        break;
                    if ("Failed to fetch" === e.message) {
                        d.R.infoNoConsole(`Network/TypeError/${i}/ Failed to fetch while getting request body`, e, t.url, i);
                        break
                    }
                    d.R.error(`Network/TypeError/${i}/ error while getting request body`, e, t.url)
                }
            else
                d.R.error("error while getting request body", e, t.url)
        }
        const ot = e => e.name === p.NETWORK
          , rt = e => ot(e) && "error"in e
          , at = e => ot(e) && "request"in e && !("error"in e);
        var dt;
        !function(e) {
            e.INIT = "init",
            e.OPEN = "open",
            e.CLOSE = "close",
            e.MESSAGE = "message",
            e.ERROR = "error"
        }(dt || (dt = {}));
        var ct = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        const lt = new WeakMap
          , ht = new Map
          , ut = (e, t) => {
            try {
                I(e.WebSocket.prototype, "send", (e => function(i) {
                    const s = e(i);
                    return bt(t, this, i).catch((e => {
                        d.R.errorNoConsole("Cannot process WebSocket send method.", e)
                    }
                    )),
                    s
                }
                ))
            } catch (e) {
                d.R.infoNoConsole("Cannot apply `send` proxy to WebSocket.", e)
            }
        }
          , pt = (e, t, {isSynthetic: i}) => {
            var s;
            const n = null !== (s = lt.get(t)) && void 0 !== s ? s : vt(t)
              , {extensions: o, protocol: r, url: a} = t
              , d = Object.assign(Object.assign({}, e.createEventEnvelope()), {
                name: p.NETWORK_WEBSOCKET,
                type: dt.INIT,
                data: {
                    extensions: o,
                    protocol: r,
                    url: a
                },
                isSynthetic: i,
                webSocketId: n
            });
            return e.processWebSocketEvent({
                event: d,
                url: t.url
            }),
            n
        }
          , vt = e => {
            const t = o.$();
            return lt.set(e, t),
            t
        }
          , gt = (e, t) => {
            const i = St(e, t);
            ft(t, "open", i);
            const s = Et(e, t);
            ft(t, "close", s);
            const n = yt(e, t);
            ft(t, "message", n);
            const o = wt(e, t);
            ft(t, "error", o)
        }
          , ft = (e, t, i) => {
            e.addEventListener(t, i),
            mt(e, t, i)
        }
          , mt = (e, t, i) => {
            var s;
            const n = null !== (s = ht.get(e)) && void 0 !== s ? s : [];
            ht.set(e, [...n, {
                eventType: t,
                listener: i
            }])
        }
          , St = (e, t) => () => {
            const i = lt.get(t);
            if (!i)
                return void d.R.warnNoConsole("WebSocket open listener: WebSocket ID not found.", t.url, t.readyState);
            const s = Object.assign(Object.assign({}, e.createEventEnvelope()), {
                name: p.NETWORK_WEBSOCKET,
                type: dt.OPEN,
                webSocketId: i
            });
            e.processWebSocketEvent({
                event: s,
                url: t.url
            })
        }
          , Et = (e, t) => i => {
            const s = lt.get(t);
            if (!s)
                return void d.R.warnNoConsole("WebSocket close listener: WebSocket ID not found.", t.url, t.readyState);
            const {code: n, reason: o, wasClean: r} = i
              , a = Object.assign(Object.assign({}, e.createEventEnvelope()), {
                name: p.NETWORK_WEBSOCKET,
                type: dt.CLOSE,
                data: {
                    code: n,
                    reason: o,
                    wasClean: r
                },
                webSocketId: s
            });
            e.processWebSocketEvent({
                event: a,
                url: t.url
            })
        }
          , yt = (e, t) => i => ct(void 0, void 0, void 0, (function*() {
            const s = lt.get(t);
            if (!s)
                return void d.R.warnNoConsole("WebSocket message listener: WebSocket ID not found.", t.url, t.readyState);
            const n = yield Rt(i.data)
              , o = Object.assign(Object.assign({}, e.createEventEnvelope()), {
                name: p.NETWORK_WEBSOCKET,
                type: dt.MESSAGE,
                data: {
                    type: "receive",
                    message: n
                },
                webSocketId: s
            });
            e.processWebSocketEvent({
                event: o,
                url: t.url
            })
        }
        ))
          , wt = (e, t) => () => {
            const i = lt.get(t);
            if (!i)
                return void d.R.warnNoConsole("WebSocket error listener: WebSocket ID not found.", t.url, t.readyState);
            const s = Object.assign(Object.assign({}, e.createEventEnvelope()), {
                name: p.NETWORK_WEBSOCKET,
                type: dt.ERROR,
                webSocketId: i
            });
            e.processWebSocketEvent({
                event: s,
                url: t.url
            })
        }
          , bt = (e, t, i) => ct(void 0, void 0, void 0, (function*() {
            let s = lt.get(t);
            s || (s = pt(e, t, {
                isSynthetic: !1
            }),
            gt(e, t));
            const n = yield Rt(i)
              , o = Object.assign(Object.assign({}, e.createEventEnvelope()), {
                name: p.NETWORK_WEBSOCKET,
                type: dt.MESSAGE,
                data: {
                    type: "send",
                    message: n
                },
                webSocketId: s
            });
            e.processWebSocketEvent({
                event: o,
                url: t.url
            })
        }
        ))
          , Rt = e => ct(void 0, void 0, void 0, (function*() {
            return Qe.qf(e) ? yield e.text() : String(e)
        }
        ))
          , Tt = e => Object.fromEntries(Object.entries(e).map(( ([e,t]) => [e.toLowerCase(), t])))
          , It = e => "object" == typeof e && null !== e
          , Nt = e => {
            var t;
            const i = e.split("\r\n").filter(Boolean).map((e => e.split(": ")))
              , s = {};
            for (const [e,n] of i)
                null !== (t = s[e]) && void 0 !== t || (s[e] = []),
                s[e].push(n);
            return Tt(s)
        }
          , Ot = e => {
            let t;
            return ["text", ""].includes(e.responseType) ? t = e.responseText : "json" === e.responseType && (t = e.response),
            t
        }
          , Ct = e => {
            if ("string" == typeof e || Qe.V1(e))
                return e
        }
          , Mt = new WeakMap
          , kt = e => {
            I(e.XMLHttpRequest.prototype, "open", (e => function(...t) {
                var i, s;
                e(...t);
                const [n,o] = t;
                Mt.set(this, {
                    method: n,
                    headers: null !== (s = null === (i = Mt.get(this)) || void 0 === i ? void 0 : i.headers) && void 0 !== s ? s : {},
                    url: o.toString()
                })
            }
            ))
        }
          , At = (e, t) => {
            I(e.XMLHttpRequest.prototype, "send", (e => function(i) {
                const s = e(i);
                try {
                    Dt(this, i, t)
                } catch (e) {
                    d.R.error("Error while processSend", e)
                }
                return s
            }
            ))
        }
          , Pt = e => {
            try {
                I(e.XMLHttpRequest.prototype, "setRequestHeader", (e => function(t, i) {
                    var s, n;
                    e(t, i);
                    try {
                        const e = Mt.get(this);
                        void 0 === e ? Mt.set(this, {
                            headers: {
                                [t]: [i]
                            }
                        }) : (null !== (s = (n = e.headers)[t]) && void 0 !== s || (n[t] = []),
                        e.headers[t].push(i))
                    } catch (e) {
                        d.R.errorNoConsole("Error happened in `setRequestHeader` proxy.", e, t, i)
                    }
                }
                ))
            } catch (e) {
                d.R.debug("Cannot apply `setRequestHeader` proxy to XMLHttpRequest.", e)
            }
        }
          , Dt = (e, t, i) => {
            var s, n;
            const o = null !== (s = Mt.get(e)) && void 0 !== s ? s : {
                headers: {}
            };
            let r = null !== (n = o.url) && void 0 !== n ? n : e.responseURL;
            if (!i.shouldProcessUrl(r))
                return;
            const a = performance.now()
              , c = i.createEventEnvelope();
            void 0 === o.method && d.R.debug("XHR not found in the WeakMap", e);
            const {method: l="unknown"} = o;
            Qe.V1(t) && void 0 === o.headers["content-type"] && (o.headers["content-type"] = ["multipart/form-data"]);
            const h = i.currentUrl;
            e.addEventListener("readystatechange", ( () => {
                e.readyState === XMLHttpRequest.DONE && (null != r || (r = e.responseURL),
                0 === e.status ? e.addEventListener("error", ( () => {
                    null != r || (r = e.responseURL),
                    i.processFailedNetworkCall({
                        duration: performance.now() - a,
                        error: "XHR error",
                        eventEnvelope: c,
                        request: {
                            method: l,
                            body: Ct(t),
                            headers: Tt(o.headers)
                        },
                        url: r
                    }, h)
                }
                )) : i.processSuccessfulNetworkCall({
                    duration: performance.now() - a,
                    eventEnvelope: c,
                    request: {
                        method: l,
                        body: Ct(t),
                        headers: Tt(null == o ? void 0 : o.headers)
                    },
                    response: {
                        body: Ot(e),
                        headers: Nt(e.getAllResponseHeaders()),
                        status: e.status
                    },
                    url: r
                }, h))
            }
            ))
        }
        ;
        var xt = i(795);
        const Lt = ["application/json", "application/ld\\+json", "application/xml", "application/xhtml\\+xml", "application/x-www-form-urlencoded", "text/", "multipart/form-data"].map((e => new RegExp(`^${e}`)))
          , Wt = new Set(["A-IM", "Accept", "Accept-Charset", "Accept-Datetime", "Accept-Encoding", "Accept-Language", "Accept-Ranges", "Access-Control-Request-Method", "Access-Control-Request-Headers", "Age", "Cache-Control", "Connection", "Content-Encoding", "Content-Length", "Content-MD5", "Content-Type", "Date", "ETag", "Expect", "Expired", "Forwarded", "From", "Host", "HTTP2-Settings", "If-Match", "If-Modified-Since", "If-None-Match", "If-Range", "If-Unmodified-Since", "Last-Modified", "Keep-Alive", "Max-Forwards", "Origin", "Pragma", "Prefer", "Range", "Referer", "Server", "TE", "Trailer", "Transfer-Encoding", "User-Agent", "Upgrade", "Vary", "Via", "Warning", "X-Content-Type-Options"].map((e => e.toLowerCase())))
          , Ut = (e, t) => {
            const i = "object" == typeof t && (null == t ? void 0 : t.allowedUrls) || [];
            for (const t of i)
                if ("string" != typeof t) {
                    if (t.test(e))
                        return !0
                } else if (t === e)
                    return !0;
            return !1
        }
          , jt = e => {
            const t = Tt(e.headers)["content-type"];
            let i = e.body;
            if ("string" == typeof e.body)
                try {
                    i = (null == t ? void 0 : t.includes("application/x-www-form-urlencoded")) ? Object.fromEntries(e.body.split("&").map((e => e.split("=")))) : JSON.parse(e.body)
                } catch (e) {
                    f.eu(e) || d.R.errorNoConsole("Network utils - parsing failed with unexpected error", e, i)
                }
            const s = void 0 === i ? void 0 : T.NC(i)
              , n = {};
            if (s && (e => {
                if (void 0 === e)
                    return !0;
                for (const t of Lt)
                    for (const i of e)
                        if (t.test(i))
                            return !0;
                return !1
            }
            )(t)) {
                const {isTruncated: e, stringified: t} = xt.f(s);
                n.isTruncated = e,
                n.body = t
            }
            return n
        }
          , Bt = e => Wt.has(e.toLowerCase());
        class _t extends J {
            constructor() {
                var e;
                super(...arguments),
                this.isTaskStopped = !0,
                this.eventQueueByUrl = {},
                this.isPerformanceAPISupported = Boolean(this.currentWindow.performance && "function" == typeof this.currentWindow.PerformanceObserver && (null === (e = PerformanceObserver.supportedEntryTypes) || void 0 === e ? void 0 : e.includes("resource"))),
                this.performanceObserver = null,
                this.shouldProcessUrl = e => !(this.isTaskStopped || e.includes(this.config.managerHost) || e.includes(this.setupData.recording.assetsHost) || e.includes(this.setupData.recording.writerHost)),
                this.processPerformanceResourceTimingRecord = e => {
                    var t, i, s;
                    const n = e.name;
                    if (!this.shouldProcessUrl(n))
                        return;
                    const o = e.duration
                      , r = (e => {
                        var t;
                        return {
                            connectEnd: e.connectEnd || void 0,
                            connectStart: e.connectStart || void 0,
                            decodedBodySize: e.decodedBodySize || void 0,
                            domainLookupEnd: e.domainLookupEnd || void 0,
                            domainLookupStart: e.domainLookupStart || void 0,
                            encodedBodySize: e.encodedBodySize || void 0,
                            fetchStart: e.fetchStart || void 0,
                            initiatorType: e.initiatorType || void 0,
                            nextHopProtocol: e.nextHopProtocol || void 0,
                            redirectEnd: e.redirectEnd || void 0,
                            redirectStart: e.redirectStart || void 0,
                            requestStart: e.requestStart || void 0,
                            responseEnd: e.responseEnd || void 0,
                            responseStart: e.responseStart || void 0,
                            responseStatus: e.responseStatus || void 0,
                            secureConnectionStart: e.secureConnectionStart || void 0,
                            serverTiming: null === (t = e.serverTiming) || void 0 === t ? void 0 : t.map(( ({name: e, description: t, duration: i}) => ({
                                name: e,
                                description: t,
                                duration: i
                            }))),
                            transferSize: e.transferSize || void 0,
                            workerStart: e.workerStart || void 0
                        }
                    }
                    )(e)
                      , a = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                        name: p.NETWORK,
                        duration: o,
                        performance: r,
                        url: n
                    });
                    this.config.advancedNetwork && ["fetch", "xmlhttprequest", "beacon"].includes(e.initiatorType) ? (null !== (t = (s = this.eventQueueByUrl)[n]) && void 0 !== t || (s[n] = []),
                    this.eventQueueByUrl[n].push(a)) : this.uploadService.upload(a, {
                        pageUrl: null === (i = this.currentWindow.location) || void 0 === i ? void 0 : i.href
                    })
                }
                ,
                this.processRecord = e => {
                    e instanceof PerformanceResourceTiming && this.processPerformanceResourceTimingRecord(e)
                }
            }
            start() {
                if (this.isTaskStopped = !1,
                this.isPerformanceAPISupported) {
                    this.performanceObserver = new this.currentWindow.PerformanceObserver((e => {
                        e.getEntries().forEach(this.processRecord)
                    }
                    ));
                    try {
                        this.performanceObserver.observe({
                            entryTypes: ["resource"]
                        })
                    } catch (e) {}
                }
            }
            stop() {
                var e;
                this.isTaskStopped = !0,
                null === (e = this.performanceObserver) || void 0 === e || e.disconnect()
            }
            processNetworkEvent(e, t, i=1) {
                var s;
                if (!this.shouldProcessUrl(e.url))
                    return;
                const n = this.isPerformanceAPISupported ? null === (s = this.eventQueueByUrl[e.url]) || void 0 === s ? void 0 : s.shift() : {
                    duration: 0,
                    performance: {}
                };
                if (void 0 === n)
                    return i > 3 ? (d.R.debug(`performance event not found (${i}x)`, e, this.eventQueueByUrl),
                    void this.uploadService.upload(Object.assign(Object.assign({}, e), {
                        performance: {}
                    }), {
                        pageUrl: t
                    })) : void setTimeout(( () => this.processNetworkEvent(e, t, i + 1)), Math.min(this.config.uploadInterval, 1e3));
                this.uploadService.upload(Object.assign(Object.assign(Object.assign({}, e), n), {
                    duration: Math.max(e.duration, n.duration)
                }), {
                    pageUrl: t
                })
            }
        }
        var Vt, Ft;
        !function(e) {
            e.CLS = "cls",
            e.FCP = "fcp",
            e.FID = "fid",
            e.FP = "fp",
            e.LCP = "lcp"
        }(Vt || (Vt = {})),
        function(e) {
            e.FIRST_INPUT = "first-input",
            e.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint",
            e.LAYOUT_SHIFT = "layout-shift",
            e.PAINT = "paint"
        }(Ft || (Ft = {}));
        const zt = (e, t) => Object.assign(Object.assign({}, e), {
            value: e.value + t.value
        })
          , Ht = (e, t) => t.value > e.value ? t : e;
        var $t = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        class qt extends J {
            constructor() {
                super(...arguments),
                this.recordedShadowRoots = [],
                this.handleAddedNode = ({node: e}) => {
                    P(e) && (this.recordedShadowRoots.includes(e) || (e.addEventListener("scroll", this.handleScrollEvent, {
                        capture: !0,
                        passive: !0
                    }),
                    this.recordedShadowRoots.push(e))),
                    D(e) && this.scrollManager.getPosition(e) && this.handleScroll(e)
                }
                ,
                this.handleScrollEvent = e => {
                    var t;
                    const {target: i} = e;
                    i && D(i) || i && W(i) && i.defaultView ? this.handleScroll(i) : i === this.currentWindow && d.R.error("Scroll target is not an Element nor Document", e, null === (t = null == i ? void 0 : i.constructor) || void 0 === t ? void 0 : t.name, this.currentWindow.scrollY, this.currentWindow.scrollX, e)
                }
            }
            start() {
                this.isTaskRunWithinMainWindow() && this.recordEventBus.addEventListener("addedNode", this.handleAddedNode),
                this.addEventListener("scroll", this.handleScrollEvent),
                0 === this.currentWindow.scrollX && 0 === this.currentWindow.scrollY || this.handleScroll(this.currentWindow.document)
            }
            stop() {
                this.removeEventListener("scroll", this.handleScrollEvent),
                this.isTaskRunWithinMainWindow() && this.recordEventBus.removeEventListener("addedNode", this.handleAddedNode),
                this.recordedShadowRoots.forEach((e => {
                    e.removeEventListener("scroll", this.handleScrollEvent, {
                        capture: !0,
                        passive: !0
                    })
                }
                )),
                this.recordedShadowRoots = []
            }
            static getElementPosition(e) {
                return {
                    x: e.scrollLeft,
                    y: e.scrollTop
                }
            }
            static getWindowPosition(e) {
                return {
                    x: e.scrollX,
                    y: e.scrollY
                }
            }
            static hasScrollDirectionChanged(e, t, i) {
                return !(qt.isSameDirection(e.x, t.x, i.x) && qt.isSameDirection(e.y, t.y, i.y))
            }
            static isSameDirection(e, t, i) {
                return !t || !i || t <= i && i <= e || e <= i && i <= t
            }
            static shouldContinueInPreviousEvent(e, t, i) {
                return e === i.targetId && !qt.hasScrollDirectionChanged(t, i.start, i.end)
            }
            createNewEvent(e, t) {
                return Object.assign(Object.assign({}, this.createEventEnvelope()), {
                    name: p.SCROLL,
                    duration: 0,
                    end: Object.assign({}, t),
                    start: t,
                    targetId: e
                })
            }
            handleScroll(e) {
                let t;
                if (D(e))
                    t = qt.getElementPosition(e),
                    this.scrollManager.setPosition(e, t);
                else {
                    if (!e.defaultView)
                        return;
                    t = qt.getWindowPosition(e.defaultView)
                }
                const i = this.nodeInfoManager.getIdByNodeOrCreateNewOne(e);
                void 0 === this.scrollEvent ? this.scrollEvent = this.createNewEvent(i, t) : qt.shouldContinueInPreviousEvent(i, t, this.scrollEvent) ? (this.scrollEvent.end.x = t.x,
                this.scrollEvent.end.y = t.y,
                this.scrollEvent.duration = this.createEventEnvelope().startTime - this.scrollEvent.startTime) : (this.uploadEvent(this.scrollEvent),
                this.scrollEvent = this.createNewEvent(i, t)),
                this.currentTimeoutId && clearTimeout(this.currentTimeoutId),
                this.currentTimeoutId = setTimeout(( () => {
                    this.scrollEvent && this.uploadEvent(this.scrollEvent),
                    this.scrollEvent = void 0
                }
                ), 200)
            }
            uploadEvent(e) {
                this.uploadService.upload(e)
            }
        }
        const Kt = {
            dom: qe,
            animate: class extends J {
                constructor() {
                    super(...arguments),
                    this.idByAnimation = new WeakMap,
                    this.isTaskStopped = !0,
                    this.attachAnimateProxy = () => {
                        const e = this;
                        try {
                            I(this.currentWindow.Animation.prototype, "play", (t => function() {
                                const i = t();
                                return e.processAnimationMethodCalls(this, "play"),
                                i
                            }
                            ))
                        } catch (e) {
                            d.R.debug("Cannot apply `Animation.prototype.pause` proxy to Element.", e)
                        }
                        try {
                            I(this.currentWindow.Animation.prototype, "pause", (t => function() {
                                const i = t();
                                return e.processAnimationMethodCalls(this, "pause"),
                                i
                            }
                            ))
                        } catch (e) {
                            d.R.debug("Cannot apply `Animation.prototype.pause` proxy to Element.", e)
                        }
                        try {
                            I(this.currentWindow.Animation.prototype, "cancel", (t => function() {
                                const i = t();
                                return e.processAnimationMethodCalls(this, "cancel"),
                                i
                            }
                            ))
                        } catch (e) {
                            d.R.debug("Cannot apply `Animation.prototype.cancel` proxy to Element.", e)
                        }
                    }
                    ,
                    this.attachElementAnimateProxy = () => {
                        if (void 0 === this.currentWindow.Element.prototype.animate)
                            return void d.R.debug("Cannot apply Element.animate proxy. animate function is not defined.");
                        const e = this;
                        try {
                            I(this.currentWindow.Element.prototype, "animate", (t => function(i, s) {
                                const n = t(i, s)
                                  , r = o.$();
                                let a, c;
                                if (e.idByAnimation.set(n, r),
                                !e.isTaskStopped)
                                    try {
                                        a = JSON.parse(T.As(i)),
                                        c = JSON.parse(T.As(s));
                                        const t = e.nodeInfoManager.getIdByNodeOrCreateNewOne(this)
                                          , n = e.createEventEnvelope()
                                          , o = Object.assign(Object.assign({}, n), {
                                            name: p.ELEMENT_ANIMATE,
                                            animationId: r,
                                            keyframes: a,
                                            options: c,
                                            startTime: n.startTime + 5,
                                            targetId: t
                                        });
                                        e.uploadService.upload(o)
                                    } catch (e) {
                                        d.R.errorNoConsole("Cannot process animation.", e, a, c)
                                    }
                                return n
                            }
                            ))
                        } catch (e) {
                            d.R.debug("Cannot apply `animate` proxy to Element.", e)
                        }
                    }
                    ,
                    this.processAlreadyExecutedAnimations = () => {
                        if (void 0 === this.currentWindow.document.getAnimations)
                            return void d.R.debug("Cannot processAlreadyExecutedAnimations. document.getAnimations() function is not defined.");
                        const e = this.currentWindow.document.getAnimations().filter((e => !e.constructor.name.startsWith("CSS")));
                        for (const t of e)
                            try {
                                const e = t.effect;
                                if (null === e || !(e instanceof this.currentWindow.KeyframeEffect) || null === e.target)
                                    continue;
                                const i = o.$();
                                this.idByAnimation.set(t, i);
                                const s = this.nodeInfoManager.getIdByNodeOrCreateNewOne(e.target)
                                  , n = JSON.parse(T.As(e.getKeyframes()))
                                  , r = JSON.parse(T.As(e.getTiming()))
                                  , a = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                                    name: p.ELEMENT_ANIMATE,
                                    animationId: i,
                                    keyframes: n,
                                    options: r,
                                    targetId: s
                                });
                                this.uploadService.upload(a)
                            } catch (e) {
                                d.R.error("Error happened during processing already executed animations.", e)
                            }
                    }
                    ,
                    this.processAnimationMethodCalls = (e, t) => {
                        if (!this.isTaskStopped)
                            try {
                                const i = this.idByAnimation.get(e);
                                if (i) {
                                    const e = this.createEventEnvelope()
                                      , s = Object.assign(Object.assign({}, e), {
                                        name: p.ANIMATION,
                                        animationId: i,
                                        methodName: t,
                                        startTime: e.startTime + 5
                                    });
                                    this.uploadService.upload(s)
                                } else
                                    d.R.debug(`Animation not found in map. Calling Animation.${t}`)
                            } catch (e) {
                                d.R.errorNoConsole(`Cannot process Animation.prototype.${t}.`, e)
                            }
                    }
                }
                start() {
                    this.isTaskStopped = !1,
                    this.processAlreadyExecutedAnimations(),
                    this.attachElementAnimateProxy(),
                    this.attachAnimateProxy()
                }
                stop() {
                    this.isTaskStopped = !0
                }
            }
            ,
            canvas: de,
            click: class extends J {
                constructor() {
                    super(...arguments),
                    this.lastClickTimes = [],
                    this.handleMouseClick = e => {
                        const t = e.composedPath()[0];
                        let i, s, n = {};
                        D(t) && (i = [...ye(t, {
                            fallbackToAlternativeIds: this.config.fallbackToAlternativeIds
                        }), ...this.parentElementPath]),
                        L(t) && (n = this.nodeMetadataManager.getClickProperties(t),
                        s = t.nodeName === j.ANCHOR ? t.href : void 0);
                        let o = "";
                        if (C(t)) {
                            const e = W(t) ? t.body : t;
                            o = this.getTextFromNode(e)
                        }
                        const r = C(t) ? this.nodeInfoManager.getIdByNode(t) : void 0
                          , {x: a, y: d} = Oe(this.currentWindow, this.config);
                        let c = Object.assign(Object.assign({}, this.createESEventEnvelope()), {
                            name: p.CLICK,
                            elements: i,
                            href: s,
                            props: n,
                            target: r,
                            x: e.clientX + a,
                            y: e.clientY + d
                        });
                        if (o && (c.text = o),
                        c = Object.assign(Object.assign({}, c), {
                            elementX: e.offsetX,
                            elementY: e.offsetY
                        }),
                        this.uploadService.upload(c, e),
                        this.lastClickTimes.length < 4 && this.lastClickTimes.push(performance.now()),
                        this.lastClickTimes.length >= 4) {
                            if (this.lastClickTimes[3] - this.lastClickTimes[0] <= 500 && void 0 === this.rageClickTimeout) {
                                const t = this.createESEventEnvelope();
                                this.uploadService.upload(Object.assign(Object.assign({}, t), {
                                    name: p.RAGE_CLICK,
                                    elements: i,
                                    props: n,
                                    target: r,
                                    text: o,
                                    x: e.clientX + a,
                                    y: e.clientY + d
                                })),
                                this.rageClickTimeout = setTimeout(( () => {
                                    this.rageClickTimeout = void 0
                                }
                                ), 5e3)
                            }
                            this.lastClickTimes = []
                        }
                    }
                }
                start() {
                    this.addEventListener("click", this.handleMouseClick)
                }
                stop() {
                    this.removeEventListener("click", this.handleMouseClick)
                }
                getTextFromNode(e) {
                    let t = "";
                    for (const i of ge(e, {
                        processOnlyTextNodes: !0,
                        shouldProcessNode: e => !this.nodeMetadataManager.isExcludedNode(e)
                    }))
                        if ((!i.parentNode || !le(i)) && !this.nodeMetadataManager.isMaskedNode(i) && (t += Ie(i, this.config, this.setupData, this.nodeMetadataManager),
                        t.length > Ce))
                            break;
                    return t.length > Ce && (t = Me(t)),
                    t.replace(/\s\s+/g, " ").trim()
                }
            }
            ,
            console: class extends J {
                constructor() {
                    super(...arguments),
                    this.areProxiesAttached = !1,
                    this.eventsByLevel = {
                        debug: {},
                        error: {},
                        info: {},
                        log: {},
                        warn: {}
                    },
                    this.isTaskStopped = !0,
                    this.handleLogCall = (e, t) => {
                        var i;
                        const s = t.map((e => T.Fd(e)))
                          , n = s.join(",")
                          , o = this.eventsByLevel[e][n];
                        void 0 === this.timeoutId && (this.timeoutId = setTimeout(this.handleUpload, Math.min(1e3, this.config.uploadInterval))),
                        o ? o.count += 1 : this.eventsByLevel[e][n] = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                            name: p.CONSOLE,
                            type: e,
                            args: s,
                            count: 1,
                            source: null === (i = window.location) || void 0 === i ? void 0 : i.origin
                        })
                    }
                    ,
                    this.handleUpload = () => {
                        this.timeoutId = void 0;
                        for (const e of Object.values(this.eventsByLevel))
                            for (const [t,i] of Object.entries(e))
                                this.uploadService.upload(Object.assign(Object.assign({}, i), {
                                    count: i.count > 1 ? i.count : void 0
                                })),
                                delete e[t]
                    }
                }
                start() {
                    this.isTaskStopped = !1,
                    this.areProxiesAttached || this.addProxiesToConsole()
                }
                stop() {
                    void 0 !== this.timeoutId && (clearTimeout(this.timeoutId),
                    this.handleUpload()),
                    this.isTaskStopped = !0
                }
                addProxiesToConsole() {
                    const {handleLogCall: e} = this;
                    ke.forEach((t => {
                        try {
                            const i = this;
                            I(this.currentWindow.console, t, (s => function(...n) {
                                s(...n),
                                i.isTaskStopped || e(t, n)
                            }
                            ))
                        } catch (e) {
                            d.R.warn(`Cannot apply proxy to console.${t}`, e)
                        }
                    }
                    )),
                    this.areProxiesAttached = !0
                }
            }
            ,
            "custom-event": class extends J {
                constructor() {
                    super(...arguments),
                    this.handleCustomEvent = e => {
                        var t = e.eventData
                          , {eventName: i} = t
                          , s = function(e, t) {
                            var i = {};
                            for (var s in e)
                                Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var n = 0;
                                for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                                    t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
                            }
                            return i
                        }(t, ["eventName"]);
                        const n = Object.assign(Object.assign({}, this.createESEventEnvelope()), {
                            name: p.CUSTOM_EVENT,
                            eventName: i,
                            props: s
                        });
                        this.uploadService.upload(n)
                    }
                }
                start() {
                    this.isTaskRunWithinMainWindow() && this.recordEventBus.addEventListener("customEvent", this.handleCustomEvent)
                }
                stop() {}
            }
            ,
            error: Xe,
            focus: class extends J {
                constructor() {
                    super(...arguments),
                    this.listenerByShadowRoots = new Map,
                    this.handleBlur = () => {
                        this.clearBlurTimeoutIfNeeded();
                        const e = this.createEventEnvelope();
                        this.blurTimeoutId = setTimeout(( () => {
                            this.sendBlurEvent(e)
                        }
                        ))
                    }
                    ,
                    this.handleFocus = e => {
                        const t = e.composedPath()[0];
                        this.clearBlurTimeoutIfNeeded();
                        try {
                            if (void 0 === t || t instanceof this.currentWindow.Window)
                                return
                        } catch (e) {
                            return void d.R.debug("Expected focus error happened", e)
                        }
                        if (!D(t))
                            return void d.R.warn("Focus target not found", e, t);
                        const i = t.getRootNode();
                        if (P(i) && !this.listenerByShadowRoots.has(i))
                            return i.addEventListener("focusin", this.handleFocus, !0),
                            void this.listenerByShadowRoots.set(i, this.handleFocus);
                        const s = [...ye(t, {
                            fallbackToAlternativeIds: this.config.fallbackToAlternativeIds
                        }), ...this.parentElementPath]
                          , n = this.nodeInfoManager.getIdByNodeOrCreateNewOne(t);
                        this.uploadService.upload(Object.assign(Object.assign({}, this.createESEventEnvelope()), {
                            name: p.FOCUS,
                            elements: s,
                            target: n
                        }), e)
                    }
                }
                start() {
                    this.addEventListener("blur", this.handleBlur),
                    this.addEventListener("focus", this.handleFocus)
                }
                stop() {
                    this.removeEventListener("blur", this.handleBlur),
                    this.removeEventListener("focus", this.handleFocus),
                    this.listenerByShadowRoots.forEach(( (e, t) => {
                        t.removeEventListener("focusin", e)
                    }
                    )),
                    this.listenerByShadowRoots = new Map
                }
                clearBlurTimeoutIfNeeded() {
                    void 0 !== this.blurTimeoutId && (clearTimeout(this.blurTimeoutId),
                    this.blurTimeoutId = void 0)
                }
                sendBlurEvent(e) {
                    this.uploadService.upload(Object.assign(Object.assign({}, e), {
                        name: p.BLUR
                    }))
                }
            }
            ,
            fullscreen: class extends J {
                constructor() {
                    super(...arguments),
                    this.handleFullscreenChangeEvent = () => {
                        const e = this.currentWindow.document.fullscreenElement;
                        if (null === e)
                            this.uploadService.upload(Object.assign(Object.assign({}, this.createEventEnvelope()), {
                                name: p.FULLSCREEN
                            }));
                        else {
                            const t = this.nodeInfoManager.getIdByNodeOrCreateNewOne(e);
                            void 0 !== t && this.uploadService.upload(Object.assign(Object.assign({}, this.createEventEnvelope()), {
                                name: p.FULLSCREEN,
                                targetId: t
                            }))
                        }
                    }
                }
                start() {
                    this.addDocumentEventListener("fullscreenchange", this.handleFullscreenChangeEvent),
                    this.currentWindow.document.fullscreenElement && this.handleFullscreenChangeEvent()
                }
                stop() {
                    this.removeDocumentEventListener("fullscreenchange", this.handleFullscreenChangeEvent)
                }
            }
            ,
            input: class extends J {
                constructor() {
                    super(...arguments),
                    this.isTaskStopped = !1,
                    this.attachInputSetterProxy = (e, t) => {
                        const i = this;
                        t.forEach((t => {
                            try {
                                N(Object.getPrototypeOf(e), t, (function(e) {
                                    return Object.assign(Object.assign({}, e), {
                                        set(s) {
                                            var n;
                                            if (null === (n = e.set) || void 0 === n || n.apply(this, [s]),
                                            !i.isTaskStopped)
                                                try {
                                                    i.nodeMetadataManager.isExcludedNode(this) || i.handleInput({
                                                        inputElement: this
                                                    }, "input", "proxy")
                                                } catch (e) {
                                                    d.R.errorNoConsole(`Error happened in input proxy setter - ${t}.`, e)
                                                }
                                        }
                                    })
                                }
                                ))
                            } catch (e) {
                                d.R.debug(`Cannot apply HTMLInputElement.prototype.${t} proxy.`, e)
                            }
                        }
                        ))
                    }
                    ,
                    this.handleChangeEvent = e => {
                        this.handleInput(e, "change", "event")
                    }
                    ,
                    this.handleInput = (e, t, i) => {
                        const s = "inputElement"in e ? e.inputElement : e.composedPath()[0];
                        if (!C(s))
                            return void d.R.debug("Target is not a node.");
                        if (!s.isConnected)
                            return void d.R.debug("Input target is not connected to DOM tree.");
                        const n = this.nodeInfoManager.getIdByNodeOrCreateNewOne(s);
                        if (!this.nodeMetadataManager.isRecordingIgnoreSetToEvents(s) && !this.nodeMetadataManager.isSensitiveNode(s))
                            if (false/*(A(s) || k(s)) && !this.areFormsRecorded || this.nodeMetadataManager.isPasswordInput(s) || A(s) && (0,
                            Ve.uX)(s, this.config.additionalCreditCardsIdentifiers)*/) {
                                if ("proxy" === i)
                                    return;
                                this.processTypingEvent(n)
                            } else if (A(s) || s.nodeName === j.SELECT || k(s)) {
                                //CHANGE
                                //if (Ve.wL.has(s.type))
                                //    return;
                                //let i = Ne(s.value, this.config);
                                let i_val = s.value; // Use the actual value directly, this line wasn't here
                                //(this.nodeMetadataManager.isRecordingIgnoreSetToMask(s) || this.nodeMetadataManager.isMaskedNode(s) || "email" === s.type && !this.config.record.emails) && (i = i.replace(/./g, "*")),
                                A(s) && ["checkbox", "radio"].includes(s.type) && (/*i*/ i_val = String(s.checked)),
                                "change" !== t || "inputElement"in e ? this.uploadService.upload(Object.assign(Object.assign({}, this.createEventEnvelope()), {
                                    name: p.NODE_MUTATION,
                                    [Ae.UPDATED]: [{
                                        id: n,
                                        value: i_val //CHANGE: i
                                    }]
                                })) : this.uploadService.upload(Object.assign(Object.assign({}, this.createESEventEnvelope()), {
                                    name: p.INPUT,
                                    target: n,
                                    value: i_val //CHANGE: i
                                }), e)
                            } else
                                d.R.debug("Unhandled recorder input event", e)
                    }
                    ,
                    this.handleInputEvent = e => {
                        this.handleInput(e, "input", "event")
                    }
                    ,
                    this.processTypingEvent = e => {
                        void 0 !== this.inputTypingElementId && (this.inputTypingElementId !== e && void 0 !== this.inputTypingEventTimeoutId && (clearTimeout(this.inputTypingEventTimeoutId),
                        this.inputTypingEventTimeoutId = void 0,
                        this.sendInputTypingStopEvent(this.inputTypingElementId)),
                        this.inputTypingElementId === e && void 0 !== this.inputTypingEventTimeoutId && (clearTimeout(this.inputTypingEventTimeoutId),
                        this.inputTypingEventTimeoutId = void 0)),
                        this.inputTypingElementId !== e && this.sendInputTypingStartEvent(e),
                        this.inputTypingElementId = e,
                        this.inputTypingEventTimeoutId = ( () => setTimeout(( () => {
                            this.sendInputTypingStopEvent(e),
                            this.inputTypingElementId = void 0,
                            this.inputTypingEventTimeoutId = void 0
                        }
                        ), 500))()
                    }
                    ,
                    this.sendInputTypingStartEvent = e => {
                        const t = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                            name: p.INPUT_TYPING,
                            isRunning: !0,
                            target: e
                        });
                        this.uploadService.upload(t)
                    }
                    ,
                    this.sendInputTypingStopEvent = e => {
                        const t = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                            name: p.INPUT_TYPING,
                            isRunning: !1,
                            target: e
                        });
                        this.uploadService.upload(t)
                    }
                }
                start() {
                    this.addDocumentEventListener("input", this.handleInputEvent),
                    this.addDocumentEventListener("change", this.handleChangeEvent),
                    this.attachInputSetterProxy(this.currentWindow.document.createElement("input"), ["value", "checked"]),
                    this.attachInputSetterProxy(this.currentWindow.document.createElement("textarea"), ["value"])
                }
                stop() {
                    this.isTaskStopped = !0,
                    this.removeDocumentEventListener("input", this.handleInputEvent),
                    this.removeDocumentEventListener("change", this.handleChangeEvent)
                }
            }
            ,
            metadata: class extends J {
                start() {
                    if (!this.isTaskRunWithinMainWindow())
                        return;
                    const {userAgent: e} = this.currentWindow.navigator
                      , t = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                        name: p.METADATA,
                        data: {
                            config: T.mS(this.config),
                            isIframe: window.top !== window,
                            isWindowOpened: null !== window.opener,
                            screen: this.getScreen(),
                            setupData: this.setupData,
                            userAgent: e,
                            visualViewport: this.getVisualViewport(),
                            window: this.getWindow()
                        },
                        startTime: 0
                    });
                    this.uploadService.upload(t)
                }
                stop() {}
                getScreen() {
                    const {availHeight: e, availWidth: t, colorDepth: i, height: s, orientation: n, pixelDepth: o, width: r} = this.currentWindow.screen;
                    return {
                        availHeight: e,
                        availWidth: t,
                        colorDepth: i,
                        height: s,
                        orientation: n,
                        pixelDepth: o,
                        width: r
                    }
                }
                getVisualViewport() {
                    if (!this.currentWindow.visualViewport)
                        return;
                    const {height: e, offsetLeft: t, offsetTop: i, pageLeft: s, pageTop: n, scale: o, width: r} = this.currentWindow.visualViewport;
                    return {
                        height: e,
                        offsetLeft: t,
                        offsetTop: i,
                        pageLeft: s,
                        pageTop: n,
                        scale: o,
                        width: r
                    }
                }
                getWindow() {
                    const {devicePixelRatio: e, innerHeight: t, innerWidth: i, outerHeight: s, outerWidth: n, screenLeft: o, screenTop: r, screenX: a, screenY: d, scrollbars: c, scrollX: l, scrollY: h} = this.currentWindow;
                    return {
                        devicePixelRatio: e,
                        innerHeight: t,
                        innerWidth: i,
                        outerHeight: s,
                        outerWidth: n,
                        screenLeft: o,
                        screenTop: r,
                        screenX: a,
                        screenY: d,
                        scrollbars: c,
                        scrollX: l,
                        scrollY: h
                    }
                }
            }
            ,
            mousemove: class extends J {
                constructor() {
                    super(...arguments),
                    this.prevStep = [0, {
                        x: 0,
                        y: 0
                    }],
                    this.timeoutId = 0,
                    this.handleMouseMove = e => {
                        var t;
                        const i = e.composedPath()[0]
                          , {x: s, y: n} = Oe(this.currentWindow, this.config)
                          , o = {
                            x: e.clientX + s,
                            y: e.clientY + n
                        }
                          , r = i !== this.lastTarget;
                        if (r || void 0 === this.event) {
                            if (this.lastTarget = i,
                            this.upload(),
                            D(i)) {
                                const t = this.nodeInfoManager.getIdByNode(i);
                                let s, n;
                                r && (s = e.offsetX,
                                n = e.offsetY),
                                this.event = Object.assign(Object.assign(Object.assign({}, this.createEventEnvelope()), o), {
                                    name: p.MOUSE_MOVE,
                                    duration: 0,
                                    elements: [...ye(i, {
                                        fallbackToAlternativeIds: this.config.fallbackToAlternativeIds
                                    }), ...this.parentElementPath],
                                    elementX: s,
                                    elementY: n,
                                    steps: [],
                                    target: t
                                }),
                                this.prevStep = [0, o],
                                this.timeoutId = setTimeout(this.upload, this.config.uploadInterval)
                            } else if ("Window" !== (null === (t = null == i ? void 0 : i.constructor) || void 0 === t ? void 0 : t.name))
                                return void d.R.warn("mousemove target is processed", i)
                        } else {
                            const e = this.createEventEnvelope().startTime - this.event.startTime
                              , [t,i] = this.prevStep
                              , s = Math.round(e - t)
                              , n = o.x - i.x
                              , r = o.y - i.y;
                            this.event.steps.push([s, n, r]),
                            this.event.duration = e,
                            this.prevStep = [e, o]
                        }
                    }
                    ,
                    this.upload = () => {
                        this.event && (clearTimeout(this.timeoutId),
                        this.uploadService.upload(this.event),
                        this.event = void 0)
                    }
                }
                start() {
                    this.addEventListener("mousemove", this.handleMouseMove)
                }
                stop() {
                    this.removeEventListener("mousemove", this.handleMouseMove),
                    this.upload()
                }
            }
            ,
            network: class extends _t {
                constructor() {
                    super(...arguments),
                    this.isTaskStopped = !0,
                    this.processFailedNetworkCall = ({duration: e, error: t, eventEnvelope: i, request: s, url: n}, o) => {
                        const r = q(n, this.currentWindow);
                        if (!this.shouldProcessUrl(r))
                            return;
                        const {body: a, isTruncated: d} = Ut(r, this.config.advancedNetwork) ? jt(s) : {
                            body: void 0,
                            isTruncated: void 0
                        }
                          , c = Object.assign(Object.assign({}, i), {
                            name: p.NETWORK,
                            duration: e,
                            error: t,
                            request: Object.assign(Object.assign({}, s), {
                                body: a,
                                isBodyTruncated: d || void 0
                            }),
                            url: r
                        });
                        this.processNetworkEvent(c, o)
                    }
                    ,
                    this.processSuccessfulNetworkCall = (e, t) => {
                        var i;
                        const {duration: s, eventEnvelope: n, request: o, response: r, url: a} = e
                          , d = q(a, this.currentWindow);
                        if (!this.shouldProcessUrl(d))
                            return;
                        const c = Object.assign(Object.assign({}, o), {
                            body: void 0
                        })
                          , l = Object.assign(Object.assign({}, r), {
                            body: void 0,
                            status: null !== (i = null == r ? void 0 : r.status) && void 0 !== i ? i : 0
                        });
                        if (Ut(d, this.config.advancedNetwork)) {
                            if (r) {
                                const {body: e, isTruncated: t} = jt(r);
                                l.body = e,
                                l.isBodyTruncated = t || void 0
                            }
                            const {body: e, isTruncated: t} = jt(o);
                            c.body = e,
                            c.isBodyTruncated = t || void 0
                        }
                        const h = Object.assign(Object.assign({}, n), {
                            name: p.NETWORK,
                            duration: s,
                            request: Object.assign(Object.assign({}, c), {
                                headers: this.obscureHeaders(o.headers)
                            }),
                            response: r ? Object.assign(Object.assign({}, l), {
                                headers: this.obscureHeaders(l.headers)
                            }) : void 0,
                            url: d
                        });
                        this.processNetworkEvent(h, t)
                    }
                    ,
                    this.processWebSocketEvent = e => {
                        const {event: t, url: i} = e
                          , s = q(i, this.currentWindow);
                        this.shouldProcessUrl(s) && this.uploadService.upload(t)
                    }
                    ,
                    this.obscureHeaders = e => {
                        var t, i;
                        const s = {};
                        if (!e)
                            return;
                        const n = "object" == typeof this.config.advancedNetwork && (null === (i = null === (t = this.config.advancedNetwork) || void 0 === t ? void 0 : t.allowedHeaders) || void 0 === i ? void 0 : i.map((e => e.toLowerCase()))) || [];
                        for (const [t,i] of Object.entries(e)) {
                            const e = n.includes(t.toLowerCase())
                              , o = Bt(t) || e;
                            s[t] = o ? i : ["[obscured]"]
                        }
                        return 0 !== Object.keys(s).length ? s : void 0
                    }
                }
                get currentUrl() {
                    var e;
                    return null === (e = this.currentWindow.location) || void 0 === e ? void 0 : e.href
                }
                start() {
                    super.start(),
                    this.isTaskStopped = !1,
                    this.config.advancedNetwork && (( (e, t) => {
                        try {
                            I(e.Navigator.prototype, "sendBeacon", (e => function(i, s) {
                                const n = e(i, s);
                                return n && ( (e, t, i) => {
                                    return n = function*() {
                                        if (i.shouldProcessUrl(e.toString()))
                                            if (Qe.qf(t))
                                                try {
                                                    Je(i, e, t, {
                                                        "content-type": [t.type]
                                                    }, yield t.text())
                                                } catch (s) {
                                                    Je(i, e, t)
                                                }
                                            else
                                                Je(i, e, t)
                                    }
                                    ,
                                    new ((s = void 0) || (s = Promise))((function(e, t) {
                                        function i(e) {
                                            try {
                                                r(n.next(e))
                                            } catch (e) {
                                                t(e)
                                            }
                                        }
                                        function o(e) {
                                            try {
                                                r(n.throw(e))
                                            } catch (e) {
                                                t(e)
                                            }
                                        }
                                        function r(t) {
                                            var n;
                                            t.done ? e(t.value) : (n = t.value,
                                            n instanceof s ? n : new s((function(e) {
                                                e(n)
                                            }
                                            ))).then(i, o)
                                        }
                                        r((n = n.apply(void 0, [])).next())
                                    }
                                    ));
                                    var s, n
                                }
                                )(i, s, t),
                                n
                            }
                            ))
                        } catch (e) {
                            d.R.infoNoConsole("Cannot apply `sendBeacon` proxy to Navigator.", e)
                        }
                    }
                    )(this.currentWindow, this),
                    ( (e, t) => {
                        try {
                            I(e, "fetch", (e => (i, s, ...n) => {
                                const o = e(i, s, ...n)
                                  , r = Qe.ks(i) && i.bodyUsed
                                  , a = r ? i : new Request(i,s).clone()
                                  , {method: c, headers: l, url: h} = a;
                                if (t.shouldProcessUrl(h)) {
                                    const i = t.createEventEnvelope()
                                      , n = performance.now()
                                      , u = et(l)
                                      , p = t.currentUrl;
                                    o.then((o => Ze(void 0, void 0, void 0, (function*() {
                                        try {
                                            const e = !o.bodyUsed && o.clone();
                                            t.processSuccessfulNetworkCall({
                                                duration: performance.now() - n,
                                                eventEnvelope: i,
                                                request: {
                                                    method: c,
                                                    body: r ? T.As(null == s ? void 0 : s.body) : yield tt(a),
                                                    headers: u
                                                },
                                                response: {
                                                    body: e ? yield tt(e) : void 0,
                                                    headers: et(o.headers),
                                                    status: o.status
                                                },
                                                url: h
                                            }, p)
                                        } catch (t) {
                                            d.R.errorNoConsole("Error while processing successful network call", e.toString(), t)
                                        }
                                    }
                                    )))).catch((e => Ze(void 0, void 0, void 0, (function*() {
                                        try {
                                            t.processFailedNetworkCall({
                                                duration: performance.now() - n,
                                                error: T.As(e),
                                                eventEnvelope: i,
                                                request: {
                                                    method: c,
                                                    body: r ? T.As(null == s ? void 0 : s.body) : yield tt(a),
                                                    headers: u
                                                },
                                                url: h
                                            }, p)
                                        } catch (e) {
                                            d.R.errorNoConsole("Error while processing failed network call", e)
                                        }
                                    }
                                    ))))
                                }
                                return o
                            }
                            ))
                        } catch (e) {
                            d.R.infoNoConsole("Cannot apply `fetch` proxy to Window.", e)
                        }
                    }
                    )(this.currentWindow, this),
                    ( (e, t) => {
                        try {
                            kt(e),
                            At(e, t),
                            Pt(e)
                        } catch (e) {
                            d.R.infoNoConsole("Cannot apply XHR proxy to window.", e)
                        }
                    }
                    )(this.currentWindow, this),
                    "object" == typeof this.config.advancedNetwork && !0 === this.config.advancedNetwork.websockets && ( (e, t) => {
                        try {
                            ( (e, t) => {
                                if (window.Proxy && window.Reflect)
                                    try {
                                        ht.forEach(( (e, i) => {
                                            i.readyState !== WebSocket.CLOSED && (pt(t, i, {
                                                isSynthetic: !0
                                            }),
                                            ( (e, t) => {
                                                t.forEach((t => {
                                                    e.removeEventListener(t.eventType, t.listener)
                                                }
                                                )),
                                                ht.set(e, [])
                                            }
                                            )(i, e),
                                            gt(t, i))
                                        }
                                        )),
                                        e.WebSocket = new Proxy(e.WebSocket,{
                                            construct(e, i) {
                                                const s = Reflect.construct(e, i);
                                                return t.isTaskStopped || (pt(t, s, {
                                                    isSynthetic: !1
                                                }),
                                                gt(t, s)),
                                                s
                                            }
                                        })
                                    } catch (e) {
                                        d.R.infoNoConsole("Cannot apply WebSocket constructor proxy to window.", e)
                                    }
                                else
                                    d.R.debug("Cannot patch WebSocket constructor. Proxy or Reflect is not available.")
                            }
                            )(e, t),
                            ut(e, t)
                        } catch (e) {
                            d.R.infoNoConsole("Cannot apply WebSocket proxy to window.", e)
                        }
                    }
                    )(this.currentWindow, this))
                }
                stop() {
                    super.stop(),
                    this.isTaskStopped = !0
                }
            }
            ,
            "performance-metric": class extends J {
                constructor() {
                    super(...arguments),
                    this.dataToUpload = {},
                    this.isPerformanceObserverSupported = Boolean("function" == typeof this.currentWindow.PerformanceObserver),
                    this.performanceObserver = null,
                    this.timeoutIds = {},
                    this.clearMetricDataToUpload = (e, t=!1) => {
                        this.dataToUpload[e] = [];
                        const i = this.timeoutIds[e];
                        t && i && clearTimeout(i),
                        delete this.timeoutIds[e]
                    }
                    ,
                    this.processPerformanceEntry = e => {
                        switch (e.entryType) {
                        case Ft.FIRST_INPUT:
                            {
                                const {processingStart: t, startTime: i} = e;
                                this.uploadMetric({
                                    name: Vt.FID,
                                    startTime: i,
                                    value: t - i
                                });
                                break
                            }
                        case Ft.LARGEST_CONTENTFUL_PAINT:
                            {
                                const {startTime: t} = e;
                                this.uploadMetricWithThrottling({
                                    name: Vt.LCP,
                                    startTime: t,
                                    value: t
                                });
                                break
                            }
                        case Ft.LAYOUT_SHIFT:
                            {
                                const {hadRecentInput: t, startTime: i, value: s} = e;
                                t || this.uploadMetricWithThrottling({
                                    name: Vt.CLS,
                                    startTime: i,
                                    value: s
                                });
                                break
                            }
                        case Ft.PAINT:
                            {
                                const {name: t, startTime: i} = e;
                                "first-paint" === t ? this.uploadMetric({
                                    name: Vt.FP,
                                    startTime: i,
                                    value: i
                                }) : "first-contentful-paint" === t && this.uploadMetric({
                                    name: Vt.FCP,
                                    startTime: i,
                                    value: i
                                });
                                break
                            }
                        }
                    }
                    ,
                    this.reduceMetricData = (e, t) => {
                        const i = (s = e,
                        {
                            [Vt.CLS]: zt,
                            [Vt.LCP]: Ht
                        }[s]);
                        var s;
                        if (i)
                            return t.reduce(i, t[0]);
                        d.R.warn(`Undefined reducer for ${e} metric.`)
                    }
                    ,
                    this.uploadMetric = ({name: e, startTime: t, value: i}) => {
                        const s = this.createEventEnvelope({
                            relativeStartTime: t
                        })
                          , n = s.startTime <= 0
                          , o = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                            name: p.PERFORMANCE_METRIC,
                            isBuffered: n,
                            metricName: e,
                            metricValue: i,
                            startTime: n ? 0 : s.startTime
                        });
                        this.uploadService.upload(o)
                    }
                    ,
                    this.uploadMetricWithThrottling = e => {
                        var t, i, s;
                        const n = e.name;
                        null !== (t = (s = this.dataToUpload)[n]) && void 0 !== t || (s[n] = []),
                        null === (i = this.dataToUpload[n]) || void 0 === i || i.push(e),
                        void 0 === this.timeoutIds[n] && (this.timeoutIds[n] = setTimeout(( () => {
                            const t = this.dataToUpload[n];
                            if (void 0 === t || 0 === t.length)
                                return void d.R.warn(`Cannot reduce ${e} metric. No data found.`);
                            const i = this.reduceMetricData(n, t);
                            i && (this.uploadMetric(i),
                            this.clearMetricDataToUpload(n))
                        }
                        ), 1e3))
                    }
                    ,
                    this.uploadPendingMetrics = () => {
                        const e = Object.entries(this.dataToUpload);
                        for (const [t,i] of e) {
                            if (0 === i.length)
                                continue;
                            const e = this.reduceMetricData(t, i);
                            e && (this.uploadMetric(e),
                            this.clearMetricDataToUpload(t, !0))
                        }
                    }
                }
                start() {
                    var e;
                    if (this.isTaskRunWithinMainWindow() && this.isPerformanceObserverSupported) {
                        this.performanceObserver = new this.currentWindow.PerformanceObserver((e => {
                            e.getEntries().forEach(this.processPerformanceEntry)
                        }
                        ));
                        for (const t of Object.values(Ft))
                            if (!PerformanceObserver.supportedEntryTypes || (null === (e = PerformanceObserver.supportedEntryTypes) || void 0 === e ? void 0 : e.includes(t)))
                                try {
                                    this.performanceObserver.observe({
                                        type: t,
                                        buffered: this.isPageLoad
                                    })
                                } catch (e) {}
                    }
                }
                stop() {
                    var e;
                    null === (e = this.performanceObserver) || void 0 === e || e.disconnect(),
                    this.uploadPendingMetrics()
                }
            }
            ,
            popover: class extends J {
                constructor() {
                    super(...arguments),
                    this.isTaskStopped = !1,
                    this.handleToggle = ({newState: e, target: t}) => {
                        if (this.isTaskStopped)
                            return;
                        if (!t || !L(t))
                            return void d.R.debug("Target is not an HTML element.");
                        if (!t.popover)
                            return void d.R.debug("Target is not popover element, could be `details` element that supports `open` attribute.", t);
                        const i = this.nodeInfoManager.getIdByNodeOrCreateNewOne(t)
                          , s = this.createPopoverEvent(i, e);
                        this.uploadService.upload(s)
                    }
                }
                start() {
                    this.addDocumentEventListener("toggle", this.handleToggle)
                }
                stop() {
                    this.isTaskStopped = !0,
                    this.removeDocumentEventListener("toggle", this.handleToggle)
                }
                createPopoverEvent(e, t) {
                    return Object.assign(Object.assign({}, this.createEventEnvelope()), {
                        name: p.POPOVER,
                        newState: t,
                        targetId: e
                    })
                }
            }
            ,
            resize: class extends J {
                constructor() {
                    super(...arguments),
                    this.getDimensions = () => $t(this, void 0, void 0, (function*() {
                        let e = this.currentWindow.innerHeight
                          , t = this.currentWindow.innerWidth;
                        return [t, e].includes(0) ? O.wp() ? (d.R.errorNoConsole("Resize dimension 0 on top window.", {
                            height: e,
                            width: t
                        }),
                        {
                            height: e,
                            width: t
                        }) : (yield new Promise((e => setTimeout(e))),
                        t = this.currentWindow.innerWidth,
                        e = this.currentWindow.innerHeight,
                        [t, e].includes(0) && d.R.errorNoConsole("Resize dimension 0 after setTimeout.", {
                            height: e,
                            width: t
                        }),
                        {
                            height: e,
                            width: t
                        }) : {
                            height: e,
                            width: t
                        }
                    }
                    )),
                    this.handleResize = () => {
                        void 0 === this.processResizeTimeoutId && (this.processResizeTimeoutId = setTimeout(( () => {
                            this.processResize(),
                            this.processResizeTimeoutId = void 0
                        }
                        ), 50))
                    }
                    ,
                    this.processResize = () => {
                        const {innerHeight: e, innerWidth: t, visualViewport: i} = this.currentWindow;
                        i && 1 !== i.scale && e === i.height && t === i.width || this.uploadResize()
                    }
                }
                start() {
                    this.isTaskRunWithinMainWindow() && (this.uploadResize(),
                    this.addEventListener("resize", this.handleResize))
                }
                stop() {
                    this.isTaskRunWithinMainWindow() && this.removeEventListener("resize", this.handleResize)
                }
                uploadResize() {
                    return $t(this, void 0, void 0, (function*() {
                        const e = this.createEventEnvelope()
                          , {height: t, width: i} = yield this.getDimensions();
                        this.uploadService.upload(Object.assign(Object.assign({}, e), {
                            name: p.RESIZE,
                            height: t,
                            width: i
                        }))
                    }
                    ))
                }
            }
            ,
            scroll: qt,
            selection: class extends J {
                constructor() {
                    super(...arguments),
                    this.isTaskStopped = !0,
                    this.lastEventType = "None",
                    this.handleSelection = () => {
                        let e = null;
                        try {
                            e = this.currentWindow.getSelection()
                        } catch (e) {
                            if (!w(this.currentWindow.getSelection))
                                return void this.stop();
                            throw e
                        }
                        if (e) {
                            if (void 0 !== e.type) {
                                switch (e.type) {
                                case "Range":
                                    {
                                        if (!e.anchorNode || !e.focusNode)
                                            return void d.R.error("anchorNode or focusNode not defined", e);
                                        const t = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                                            name: p.SELECTION,
                                            start: {
                                                offset: e.anchorOffset,
                                                target: this.nodeInfoManager.getIdByNodeOrCreateNewOne(e.anchorNode)
                                            },
                                            end: {
                                                offset: e.focusOffset,
                                                target: this.nodeInfoManager.getIdByNodeOrCreateNewOne(e.focusNode)
                                            }
                                        });
                                        this.uploadService.upload(t);
                                        break
                                    }
                                case "None":
                                case "Caret":
                                    if ("Range" === this.lastEventType) {
                                        const e = Object.assign(Object.assign({}, this.createEventEnvelope()), {
                                            name: p.SELECTION,
                                            target: this.nodeInfoManager.getIdByNode(this.currentWindow.document)
                                        });
                                        this.uploadService.upload(e)
                                    }
                                    break;
                                default:
                                    d.R.error("Unexpected selectionchange selection type", e.type)
                                }
                                this.lastEventType = e.type
                            }
                        } else
                            d.R.warn("window.getSelection() returned undefined")
                    }
                }
                start() {
                    this.isTaskStopped = !1,
                    this.addEventListener("selectionchange", this.handleSelection),
                    this.handleSelection()
                }
                stop() {
                    this.isTaskStopped || this.removeEventListener("selectionchange", this.handleSelection),
                    this.isTaskStopped = !0
                }
            }
            ,
            touchmove: class extends J {
                constructor() {
                    super(...arguments),
                    this.prevStepById = {},
                    this.handleTouch = e => {
                        var t;
                        const i = this.event;
                        if (i) {
                            const s = this.createEventEnvelope().startTime - i.startTime
                              , [n,o,r] = null !== (t = this.prevStepById[e.identifier]) && void 0 !== t ? t : [s, i.x, i.y]
                              , a = Math.round(s - n)
                              , d = this.getAbsoluteTouchPosition(e)
                              , c = d.x - o
                              , l = d.y - r;
                            void 0 === i.steps[e.identifier] && (i.steps[e.identifier] = []),
                            i.steps[e.identifier].push([a, c, l]),
                            i.duration = s,
                            this.prevStepById[e.identifier] = [s, d.x, d.y]
                        } else
                            d.R.error("touch event is not yet created")
                    }
                    ,
                    this.handleTouchEnd = () => {
                        this.event && (this.uploadService.upload(this.event),
                        this.event = void 0,
                        this.prevStepById = {})
                    }
                    ,
                    this.handleTouchMove = e => {
                        if (this.event)
                            for (const t of Array.from(e.changedTouches))
                                this.handleTouch(t);
                        else
                            this.handleTouchStart(e)
                    }
                    ,
                    this.handleTouchStart = e => {
                        var t;
                        let {target: i} = e;
                        if (i && C(i) && !D(i) && (i = i.parentNode),
                        i && D(i)) {
                            const t = e.touches[0]
                              , s = this.getAbsoluteTouchPosition(t)
                              , n = C(i) ? this.nodeInfoManager.getIdByNode(i) : void 0
                              , o = i.getBoundingClientRect();
                            this.event = Object.assign(Object.assign(Object.assign({}, this.createEventEnvelope()), s), {
                                name: p.TOUCH_MOVE,
                                duration: 0,
                                elementX: t.clientX - o.left,
                                elementY: t.clientY - o.top,
                                steps: {},
                                target: n
                            });
                            for (const t of Array.from(e.touches))
                                this.handleTouch(t)
                        } else {
                            if (void 0 === Node.ELEMENT_NODE)
                                return;
                            d.R.error("touchstart target is not Element", i, typeof i, null === (t = null == i ? void 0 : i.constructor) || void 0 === t ? void 0 : t.name)
                        }
                    }
                }
                start() {
                    this.addEventListener("touchend", this.handleTouchEnd),
                    this.addEventListener("touchmove", this.handleTouchMove),
                    this.addEventListener("touchstart", this.handleTouchStart)
                }
                stop() {
                    this.removeEventListener("touchend", this.handleTouchEnd),
                    this.removeEventListener("touchmove", this.handleTouchMove),
                    this.removeEventListener("touchstart", this.handleTouchStart)
                }
                getAbsoluteTouchPosition({clientX: e, clientY: t}) {
                    const {x: i, y: s} = Oe(this.currentWindow, this.config);
                    return {
                        x: e + i,
                        y: t + s
                    }
                }
            }
            ,
            url: class extends J {
                constructor() {
                    super(...arguments),
                    this.isTaskStopped = !0,
                    this.handleNavigationEvent = ({path: e}) => {
                        this.handleURLChange({
                            isAPICall: !0,
                            isInternalNavigation: !0,
                            url: e
                        })
                    }
                    ,
                    this.handlePopStateEvent = () => {
                        this.handleURLChange({
                            isInternalNavigation: !0
                        })
                    }
                    ,
                    this.handleURLChange = ({isAPICall: e, isFirstEvent: t=!1, isInternalNavigation: i=!1, url: s}={}) => {
                        var n, o;
                        let r;
                        try {
                            r = s ? new URL(s,null === (n = this.currentWindow.location) || void 0 === n ? void 0 : n.origin).href : null === (o = this.currentWindow.location) || void 0 === o ? void 0 : o.href
                        } catch (e) {
                            return void d.R.error("Invalid url provided")
                        }
                        if (this.lastUrl !== r) {
                            this.isTaskRunWithinMainWindow() && void 0 !== this.lastUrl && this.sendUrlExitEvent(),
                            this.lastUrl = r,
                            this.sessionEventBus.emit("urlChanged", r);
                            const s = this.createEventEnvelope()
                              , n = Object.assign(Object.assign({}, s), {
                                name: p.URL,
                                pageUrl: r,
                                startTime: t ? 0 : s.startTime
                            });
                            e && (n.props = Object.assign(Object.assign({}, n.props), {
                                isAPICall: e
                            })),
                            i && (n.props = Object.assign(Object.assign({}, n.props), {
                                isInternalNavigation: i
                            }));
                            const o = t && this.isPageLoad;
                            o && (n.props = Object.assign(Object.assign({}, n.props), {
                                isPageLoad: o
                            })),
                            this.config.additionalPageParams && (n.props = Object.assign(Object.assign({}, n.props), {
                                referrer: this.currentWindow.document.referrer,
                                title: this.currentWindow.document.title
                            }));
                            const a = t && this.hasUrlChanged;
                            if (!o && !i && !a)
                                return;
                            if (!this.isTaskRunWithinMainWindow())
                                if (void 0 !== this.crossOriginFrameElementId)
                                    n.props = Object.assign(Object.assign({}, n.props), {
                                        frameId: this.crossOriginFrameElementId
                                    });
                                else if (this.currentWindow.frameElement) {
                                    const e = this.nodeInfoManager.getIdByNode(this.currentWindow.frameElement);
                                    void 0 !== e && (n.props = Object.assign(Object.assign({}, n.props), {
                                        frameId: e
                                    }))
                                }
                            if ("about:blank" === n.pageUrl || "about:srcdoc" === n.pageUrl)
                                return;
                            this.uploadService.upload(n)
                        }
                    }
                    ,
                    this.sendUrlExitEvent = () => {
                        this.lastUrl && this.uploadService.upload(Object.assign(Object.assign({}, this.createEventEnvelope()), {
                            name: p.URL_EXIT,
                            pageUrl: this.lastUrl,
                            scroll: {
                                x: this.currentWindow.scrollX,
                                y: this.currentWindow.scrollY
                            }
                        }))
                    }
                }
                start() {
                    this.isTaskStopped = !1,
                    this.isTaskRunWithinMainWindow() && (this.proxyHistory(),
                    this.addEventListener("popstate", this.handlePopStateEvent),
                    this.isTaskRunWithinMainWindow() && this.recordEventBus.addEventListener("navigation", this.handleNavigationEvent),
                    this.handleURLChange({
                        isFirstEvent: !0
                    }))
                }
                stop() {
                    this.isTaskStopped = !0,
                    this.isTaskRunWithinMainWindow() && (this.isTaskRunWithinMainWindow() && this.sendUrlExitEvent(),
                    this.removeEventListener("popstate", this.handlePopStateEvent))
                }
                proxyHistory() {
                    const e = this
                      , t = this.currentWindow.history.pushState;
                    this.currentWindow.history.pushState = function(i, s, n) {
                        const o = Reflect.apply(t, this, [i, s, n]);
                        return e.isTaskStopped || e.handleURLChange({
                            isInternalNavigation: !0
                        }),
                        o
                    }
                    ;
                    const i = this.currentWindow.history.replaceState;
                    this.currentWindow.history.replaceState = function(t, s, n) {
                        const o = Reflect.apply(i, this, [t, s, n]);
                        return e.isTaskStopped || e.handleURLChange({
                            isInternalNavigation: !0
                        }),
                        o
                    }
                }
            }
            ,
            "visual-viewport": class extends J {
                constructor() {
                    super(...arguments),
                    this.isMobileDevice = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test((navigator.userAgent || navigator.vendor || window.opera).slice(0, 4)),
                    this.lastVisualViewport = {
                        offsetLeft: 0,
                        offsetTop: 0,
                        scale: 1
                    },
                    this.handleViewportChange = () => {
                        void 0 === this.timeoutId && (this.timeoutId = setTimeout(( () => {
                            this.processViewportChange(),
                            this.timeoutId = void 0
                        }
                        ), 50))
                    }
                }
                start() {
                    this.isTaskRunWithinMainWindow() && window.visualViewport && (1 === window.visualViewport.scale && 0 === window.visualViewport.offsetLeft && 0 === window.visualViewport.offsetTop || this.processViewportChange(),
                    window.visualViewport.addEventListener("resize", this.handleViewportChange, {
                        passive: !0
                    }),
                    window.visualViewport.addEventListener("scroll", this.handleViewportChange, {
                        passive: !0
                    }))
                }
                stop() {
                    this.isTaskRunWithinMainWindow() && window.visualViewport && (window.visualViewport.removeEventListener("resize", this.handleViewportChange),
                    window.visualViewport.removeEventListener("scroll", this.handleViewportChange))
                }
                processViewportChange() {
                    if (!window.visualViewport)
                        return;
                    const {offsetLeft: e, offsetTop: t} = window.visualViewport;
                    let i = window.visualViewport.scale;
                    this.isMobileDevice && !(1 === i && innerWidth > outerWidth) && (i *= innerWidth / outerWidth);
                    const s = {
                        offsetLeft: this.lastVisualViewport.offsetLeft === e ? void 0 : e,
                        offsetTop: this.lastVisualViewport.offsetTop === t ? void 0 : t,
                        scale: this.lastVisualViewport.scale === i ? void 0 : i
                    };
                    if (this.lastVisualViewport = {
                        offsetLeft: e,
                        offsetTop: t,
                        scale: i
                    },
                    Object.values(s).every((e => void 0 === e)))
                        return;
                    const n = Object.assign(Object.assign(Object.assign({}, this.createEventEnvelope()), {
                        name: p.VISUAL_VIEWPORT
                    }), s);
                    this.uploadService.upload(n)
                }
            }
        };
        class Yt {
        }
        const Gt = {
            intercom: class extends Yt {
                constructor() {
                    super(...arguments),
                    this.processIntegration = (e, t, i, s=3) => {
                        const n = window.Intercom
                          , o = () => {
                            n.booted ? n("update", {
                                "Latest Smartlook record": i
                            }) : setTimeout(o, 500)
                        }
                        ;
                        n && "function" == typeof n ? (n("trackEvent", "Smartlook record", {
                            "Session URL": {
                                url: i,
                                value: "Play in Smartlook"
                            }
                        }),
                        o()) : s >= 0 && setTimeout(( () => this.processIntegration(e, t, i, s - 1)), 500)
                    }
                }
                onCustomEvent() {}
                onSessionInitialization(e, t, i) {
                    this.processIntegration(e, t, i)
                }
            }
            ,
            mixpanel: class extends Yt {
                onCustomEvent() {}
                onSessionInitialization(e, t, i) {
                    const s = window.mixpanel;
                    s && (void 0 !== s.register ? s.register({
                        smartlookPlayUrl: i
                    }) : s.push && s.push(["register", {
                        smartlookPlayUrl: i
                    }]))
                }
            }
            ,
            piwik: class extends Yt {
                onCustomEvent() {}
                onSessionInitialization(e, t, i) {
                    const s = window._paq;
                    s && s.push(["trackEvent", "Recording", i])
                }
            }
            ,
            sentry: class extends Yt {
                constructor() {
                    super(...arguments),
                    this.processIntegration = (e, t, i, s=3) => {
                        const n = window.Raven
                          , o = window.Sentry;
                        n || o ? (n && n.setDataCallback && "function" == typeof n.setDataCallback && n.setDataCallback((s => (s.extra.playUrl = i,
                        s.extra.sessionId = e,
                        s.extra.visitorId = t,
                        s))),
                        o && (o.setContext && "function" == typeof o.setContext ? o.setContext("Smartlook", {
                            playUrl: i,
                            sessionId: e,
                            visitorId: t
                        }) : o.configureScope && "function" == typeof o.configureScope && o.configureScope((s => {
                            s.setExtra("playUrl", i),
                            s.setExtra("sessionId", e),
                            s.setExtra("visitorId", t)
                        }
                        )))) : s >= 0 && setTimeout(( () => this.processIntegration(e, t, i, s - 1)), 500)
                    }
                }
                onCustomEvent() {}
                onSessionInitialization(e, t, i) {
                    this.processIntegration(e, t, i)
                }
            }
            ,
            zendesk: class extends Yt {
                onCustomEvent() {}
                onSessionInitialization(e, t, i) {
                    const s = window.$zopim;
                    s && s(( () => {
                        s.livechat && s.livechat.appendNotes && s.livechat.appendNotes(`\nRecording ${(new Date).toString()}\n${i}`)
                    }
                    ))
                }
            }
        };
        var Xt;
        !function(e) {
            e.V_1_0_0 = "1.0.0",
            e.V_2_0_0 = "2.0.0",
            e.V_2_1_0 = "2.1.0",
            e.V_2_2_0 = "2.2.0",
            e.V_2_3_0 = "2.3.0"
        }(Xt || (Xt = {}));
        const Qt = Xt.V_2_3_0
          , Jt = Xt.V_2_3_0;
        var Zt = i(257)
          , ei = i(321);
        class ti {
            constructor(e, t, i) {
                this.recorderVersion = t,
                this.timeStart = i,
                this.privateProps = {},
                this.props = {},
                this.type = "website",
                this.id = e.id,
                this.internalProps = {
                    version: t
                },
                e.props && (this.props = (0,
                ei.e)(e.props, ei.w.IDENTIFY)),
                e.internalProps && (this.internalProps = (0,
                Zt.NH)(e.internalProps))
            }
            getSessionData() {
                return {
                    id: this.id,
                    type: this.type,
                    internalProps: this.internalProps,
                    privateProps: this.privateProps,
                    props: this.props,
                    referer: document.referrer || void 0,
                    timeStart: this.timeStart,
                    version: Jt
                }
            }
            updateProperties(e) {
                const t = Object.assign({}, this.props);
                Object.assign(t, e),
                this.props = (0,
                ei.e)(t, ei.w.IDENTIFY)
            }
        }
        class ii {
            constructor(e, t) {
                this.id = e,
                this.props = {},
                this.uid = t.uid,
                t.props && (this.props = (0,
                ei.e)(t.props, ei.w.IDENTIFY))
            }
            getVisitorData() {
                return {
                    id: this.id,
                    props: this.props,
                    uid: this.uid
                }
            }
            setVisitorUId(e) {
                this.uid = e
            }
            updateProperties(e) {
                const t = Object.assign({}, this.props);
                Object.assign(t, e),
                this.props = (0,
                ei.e)(t, ei.w.IDENTIFY)
            }
        }
        class si {
            constructor() {
                this.infoByNodes = new WeakMap,
                this.lastNodeId = 0,
                this.loadListenersByIframeNodesByWindow = new Map
            }
            deleteAllIframeLoadListenersForWindow(e) {
                const t = this.loadListenersByIframeNodesByWindow.get(e);
                void 0 !== t && (t.forEach(( (e, i) => {
                    i.removeEventListener("load", e, !0),
                    t.delete(i)
                }
                )),
                this.loadListenersByIframeNodesByWindow.delete(e))
            }
            deleteLoadListenerForIframe(e, t) {
                const i = this.loadListenersByIframeNodesByWindow.get(t);
                if (void 0 === i)
                    return void d.R.debug("Cannot found load listener for iframe.", e, t);
                const s = i.get(e);
                void 0 !== s ? (e.removeEventListener("load", s, !0),
                i.delete(e)) : d.R.debug("Cannot found load listener for iframe.", e, t)
            }
            deleteNodeInfo(e) {
                return this.infoByNodes.delete(e)
            }
            getIdByNode(e) {
                var t;
                return (null !== (t = this.infoByNodes.get(e)) && void 0 !== t ? t : {
                    id: void 0
                }).id
            }
            getIdByNodeOrCreateNewOne(e) {
                var t;
                const i = null !== (t = this.infoByNodes.get(e)) && void 0 !== t ? t : {
                    id: void 0
                };
                return void 0 === i.id ? (this.lastNodeId += 1,
                this.setNodeInfo(e, {
                    id: this.lastNodeId,
                    isMasked: !1,
                    isRecorded: !1,
                    parent: null,
                    previousSibling: null,
                    value: null
                }),
                this.lastNodeId) : i.id
            }
            getLoadListenerForIframe(e, t) {
                const i = this.loadListenersByIframeNodesByWindow.get(t);
                if (void 0 !== i)
                    return i.get(e)
            }
            getNodeInfo(e) {
                return this.infoByNodes.get(e)
            }
            setLoadListenerForIframe(e, t, i) {
                const s = e => {
                    try {
                        t(e)
                    } catch (e) {
                        if (e instanceof r.f && !e.shouldReport)
                            return void d.R.debug("Recorder error happened", e);
                        throw e instanceof Error ? new r.f("Error happened in load listener.'",{
                            originalError: e
                        }) : e
                    }
                }
                ;
                e.addEventListener("load", s, !0);
                let n = this.loadListenersByIframeNodesByWindow.get(i);
                void 0 === n && (n = new Map,
                this.loadListenersByIframeNodesByWindow.set(i, n)),
                n.set(e, s)
            }
            setNewNodeInfo(e, t) {
                return this.lastNodeId += 1,
                this.infoByNodes.set(e, Object.assign({
                    id: this.lastNodeId
                }, t)),
                this.lastNodeId
            }
            setNodeInfo(e, t) {
                this.infoByNodes.set(e, t)
            }
            updateNodeInfo(e, t) {
                const i = this.infoByNodes.get(e);
                void 0 !== i && this.infoByNodes.set(e, Object.assign(Object.assign({}, i), t))
            }
        }
        const ni = ["mask", "events"]
          , oi = ["canvas-lq", "canvas-mq", "canvas-hq"];
        class ri {
            constructor(e, t) {
                this.recordingRules = e,
                this.frameMaskingRules = t,
                this.metadataByNodes = new WeakMap,
                this.isExcludedNode = e => {
                    const t = this.getNodeMetadata(e);
                    return t.isDataAttributePresent ? t.isExcluded : "exclude" === t.selectorTypeMatch
                }
                ,
                this.isGdprSafeNode = e => this.getNodeMetadata(e).isGdprSafe,
                this.isMaskedNode = e => {
                    const t = this.getNodeMetadata(e);
                    return t.isDataAttributePresent ? t.isMasked : !!["mask", "exclude"].includes(t.selectorTypeMatch)
                }
                ,
                this.isPasswordInput = e => this.getNodeMetadata(e).isPasswordInput,
                this.isRecordingIgnoreSetToEvents = e => "events" === this.getNodeMetadata(e).recordingIgnore,
                this.isRecordingIgnoreSetToMask = e => "mask" === this.getNodeMetadata(e).recordingIgnore,
                this.isSensitiveNode = e => this.getNodeMetadata(e).isSensitive,
                this.setIsPasswordInput = e => {
                    const t = this.getNodeMetadata(e);
                    t.isPasswordInput = !0,
                    this.metadataByNodes.set(e, Object.assign(Object.assign({}, t), {
                        parent: fe(e)
                    }))
                }
            }
            deleteNodeMetadata(e) {
                return this.metadataByNodes.delete(e)
            }
            getCanvasAttributeValue(e) {
                const t = this.getNodeMetadata(e).slAttributeValues
                  , i = oi.find((e => t.includes(e)));
                if (i)
                    return i
            }
            getClickProperties(e) {
                return this.getNodeMetadata(e).clickProps
            }
            getNodeMetadata(e) {
                const t = this.metadataByNodes.get(e);
                return void 0 === t || fe(e) !== t.parent ? this.retrieveAndStoreNodeMetadata(e) : t
            }
            recomputeNodeMetadataForNodeAndItsChildren(e) {
                this.setMetadataOnNodeAntItsSubtree(e)
            }
            retrieveAndStoreNodeMetadata(e) {
                const t = fe(e)
                  , i = t ? this.metadataByNodes.get(t) : void 0
                  , s = this.retrieveNodeMetadata(e);
                let n;
                if (void 0 === i) {
                    n = Object.assign({}, s);
                    for (const t of function*(e, t=!1) {
                        if (t && W(e))
                            return;
                        let i = D(e) ? e : me(e);
                        for (; i; ) {
                            if (yield i,
                            t && i.parentNode && W(i.parentNode))
                                return;
                            i = me(i)
                        }
                    }(e)) {
                        const e = this.retrieveNodeMetadata(t);
                        n = ri.mergeMetadata(e, n)
                    }
                    this.frameMaskingRules && (n = ri.mergeMetadata(this.frameMaskingRules, n))
                } else
                    n = ri.mergeMetadata(i, s);
                const o = this.metadataByNodes.get(e);
                return o && o.isPasswordInput && (n.isPasswordInput = !0),
                this.metadataByNodes.set(e, Object.assign(Object.assign({}, n), {
                    parent: t
                })),
                Object.assign(Object.assign({}, n), {
                    parent: t
                })
            }
            static getRecordingIgnoreAttributeValueIfPresent(e) {
                if (L(e) && ni.includes(e.dataset.recordingIgnore))
                    return e.dataset.recordingIgnore
            }
            static isExcludeAttributePresent(e) {
                var t;
                return Boolean(L(e) && (null === (t = e.dataset.sl) || void 0 === t ? void 0 : t.split(",").includes("exclude")))
            }
            static isMaskedAttributePresent(e) {
                var t;
                return Boolean(L(e) && (null === (t = e.dataset.sl) || void 0 === t ? void 0 : t.split(",").includes("mask")))
            }
            static isRecordingDisableAttributePresent(e) {
                return L(e) && void 0 !== e.dataset.recordingDisable
            }
            static isRecordingGdprSafeAttributePresent(e) {
                return L(e) && void 0 !== e.dataset.recordingGdprSafe
            }
            static isRecordingSensitiveAttributePresent(e) {
                return L(e) && void 0 !== e.dataset.recordingSensitive
            }
            static isUnMaskedAttributePresent(e) {
                var t;
                return Boolean(L(e) && (null === (t = e.dataset.sl) || void 0 === t ? void 0 : t.split(",").includes("unmask")))
            }
            static mergeMetadata(e, t) {
                const i = Object.assign(Object.assign({}, e), {
                    slAttributeValues: [...e.slAttributeValues, ...t.slAttributeValues]
                });
                return t.isExcluded && (i.isExcluded = !0),
                t.slAttributeValues.indexOf("unmask") > t.slAttributeValues.indexOf("mask") ? i.isMasked = !1 : t.isMasked && (i.isMasked = !0),
                t.isSensitive && (i.isSensitive = !0),
                t.clickProps && (i.clickProps = Object.assign(Object.assign({}, i.clickProps), (0,
                Zt.$_)((0,
                ei.e)(t.clickProps, ei.w.CLICK)))),
                void 0 !== t.recordingIgnore && (i.recordingIgnore = t.recordingIgnore),
                t.isGdprSafe && (i.isGdprSafe = !0),
                t.isPasswordInput && (i.isPasswordInput = !0),
                t.isDataAttributePresent && (i.isDataAttributePresent = !0),
                "exclude" !== i.selectorTypeMatch && (i.selectorTypeMatch = t.selectorTypeMatch),
                i
            }
            static retrieveClickProperties(e) {
                if (L(e) && e.dataset.recordingClickProps)
                    try {
                        return JSON.parse(e.dataset.recordingClickProps)
                    } catch (e) {
                        return {}
                    }
                return {}
            }
            retrieveNodeMetadata(e) {
                var t;
                const i = ri.getRecordingIgnoreAttributeValueIfPresent(e)
                  , s = ri.isRecordingDisableAttributePresent(e) || ri.isExcludeAttributePresent(e)
                  , n = ri.isRecordingSensitiveAttributePresent(e) || ri.isMaskedAttributePresent(e)
                  , o = ri.isRecordingSensitiveAttributePresent(e)
                  , r = ri.isUnMaskedAttributePresent(e)
                  , a = ri.retrieveClickProperties(e)
                  , d = ri.isRecordingGdprSafeAttributePresent(e)
                  , c = A(e) && "password" === e.type;
                let l = null;
                const h = [...null !== (t = this.recordingRules) && void 0 !== t ? t : []].reverse();
                for (const t of h)
                    if (t.selector.split(",").flatMap((e => [e, `${e} *`])).some((t => {
                        const i = D(e) ? e : me(e);
                        return null !== i && i.matches(t)
                    }
                    ))) {
                        l = t.type;
                        break
                    }
                return {
                    clickProps: a,
                    isDataAttributePresent: s || n || d || r,
                    isExcluded: s,
                    isGdprSafe: d,
                    isMasked: n,
                    isPasswordInput: c,
                    isSensitive: o,
                    recordingIgnore: i,
                    selectorTypeMatch: l,
                    slAttributeValues: L(e) && e.dataset.sl ? e.dataset.sl.split(",") : []
                }
            }
            setMetadataOnNodeAntItsSubtree(e) {
                for (const t of ge(e))
                    this.retrieveAndStoreNodeMetadata(t)
            }
        }
        class ai {
            constructor(e, t, i) {
                this.id = e,
                this.timeStart = t,
                this.maxRecordDuration = i,
                this.relativeStartTime = performance.now(),
                this.startedAt = performance.now(),
                this.isRecordOpen = () => performance.now() - this.startedAt < this.maxRecordDuration
            }
            getRecordData() {
                var e;
                return {
                    id: this.id,
                    deviceHeight: screen.height,
                    deviceWidth: screen.width,
                    orientation: (null === (e = screen.orientation) || void 0 === e ? void 0 : e.type.startsWith("portrait")) ? "portrait" : "landscape",
                    pageTitle: document.title || location.href,
                    pageUrl: location.href,
                    time: performance.now() - this.relativeStartTime,
                    timeStart: this.timeStart,
                    version: Qt
                }
            }
        }
        var di = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        class ci {
            constructor(e={
                maxParallelPromises: 10
            }) {
                this.config = e,
                this.pendingTasksQueue = [],
                this.currentParallelPromises = 0
            }
            processPromiseTask(e) {
                this.pendingTasksQueue.push(e),
                this.spawnTaskProcessorIfNeeded()
            }
            processPendingTask() {
                return di(this, void 0, void 0, (function*() {
                    const e = this.pendingTasksQueue.shift();
                    e && (yield e())
                }
                ))
            }
            spawnTaskProcessorIfNeeded() {
                return di(this, void 0, void 0, (function*() {
                    if (0 !== this.pendingTasksQueue.length && !(this.currentParallelPromises >= this.config.maxParallelPromises)) {
                        this.currentParallelPromises += 1;
                        try {
                            yield this.processPendingTask()
                        } finally {
                            this.currentParallelPromises -= 1,
                            this.spawnTaskProcessorIfNeeded()
                        }
                    }
                }
                ))
            }
        }
        class li {
            constructor(e, t) {
                this.uploadService = e,
                this.persistentStorageManager = t,
                this.cache = {},
                this.parallelTaskProcessor = new ci,
                this.queueAsset = e => {
                    if (this.cache[e])
                        return this.cache[e];
                    const t = o.$();
                    return this.cache[e] = t,
                    this.parallelTaskProcessor.processPromiseTask(( () => this.processAsset(e, t))),
                    t
                }
                ,
                this.processAsset = (e, t) => {
                    return i = this,
                    n = function*() {
                        let i;
                        try {
                            const s = yield this.persistentStorageManager.getStoredAsset(e);
                            if (s)
                                d.R.debug("Asset already stored in cache", {
                                    assetId: t,
                                    size: s.content.size,
                                    src: e
                                }),
                                i = yield ie(s.content);
                            else {
                                const s = yield fetch(e, {
                                    priority: "low"
                                });
                                if (!s.ok)
                                    throw new Error(`Error while fetching font/image asset: ${s.statusText}`);
                                const n = yield s.blob();
                                d.R.debug("Putting asset to cache", {
                                    assetId: t,
                                    size: n.size,
                                    src: e
                                }),
                                this.persistentStorageManager.storeAsset({
                                    content: n,
                                    timestamp: Date.now(),
                                    url: e
                                }),
                                i = yield ie(n)
                            }
                        } catch (i) {
                            return void d.R.debug("Error while processing font/image asset", {
                                assetId: t
                            }, i, e)
                        }
                        if (i.length > 10485760)
                            return void d.R.warn("Cannot pack asset, size exceeded.", {
                                assetId: t,
                                src: e
                            });
                        const s = {
                            id: o.$(),
                            name: p.PACKED_ASSET,
                            assetId: t,
                            dataUrl: i,
                            startTime: 0
                        };
                        this.uploadService.upload(s)
                    }
                    ,
                    new ((s = void 0) || (s = Promise))((function(e, t) {
                        function o(e) {
                            try {
                                a(n.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }
                        function r(e) {
                            try {
                                a(n.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }
                        function a(t) {
                            var i;
                            t.done ? e(t.value) : (i = t.value,
                            i instanceof s ? i : new s((function(e) {
                                e(i)
                            }
                            ))).then(o, r)
                        }
                        a((n = n.apply(i, [])).next())
                    }
                    ));
                    var i, s, n
                }
            }
        }
        const hi = e => `__replay-${e}__`;
        var ui = i(412);
        const pi = /url\(["']?(.*?)["']?\)/g;
        class vi {
            constructor(e, t, i) {
                this.timeManager = e,
                this.assetsHost = t,
                this.failedCacheRequestCount = 0,
                this.idsByAdoptedSheets = new WeakMap,
                this.isDocumentUnloading = !1,
                this.nextSheetId = 0,
                this.notCachedUrls = [],
                this.applyCssProxyToUrlAndCache = (e, t) => {
                    if (!e)
                        return "";
                    if (e.startsWith(this.assetsProxyHost) || e.startsWith("data:") || e.startsWith("blob:"))
                        return e;
                    const i = `${q(e, t)}###${this.timeManager.getServerTimestamp()}`;
                    return this.cacheCssUrl(i),
                    `${F}${encodeURIComponent(i)}${z}`
                }
                ,
                this.extractUrls = e => {
                    const t = new RegExp(pi)
                      , i = [];
                    let s;
                    for (; s = t.exec(e); )
                        i.push(s[1]);
                    return i
                }
                ,
                this.getAdoptedSheetId = e => this.idsByAdoptedSheets.get(e),
                this.getCssRulesFromSheet = (e, {ownerNode: t, rootWindow: i}, s, n) => {
                    let o = "";
                    try {
                        o = Array.from(e.cssRules).map((e => this.processCssRule(e, i, s, n))).join("")
                    } catch (i) {
                        d.R.debug(`Cannot access cssRules of ${e.href}`, {
                            attributes: Array.from(null == t ? void 0 : t.attributes),
                            title: e.title
                        })
                    }
                    return o
                }
                ,
                this.getCssSheetMetadata = (e, t) => {
                    for (const i of t) {
                        const t = vi.getSheetIndex(e, i.styleSheets);
                        if (t > -1)
                            return {
                                index: t,
                                root: i
                            }
                    }
                }
                ,
                this.getStyleValue = (e, t, i) => {
                    let s = "";
                    return e.sheet && (s = this.getCssRulesFromSheet(e.sheet, {
                        ownerNode: e,
                        rootWindow: t
                    }, i)),
                    0 === s.length && (s = this.processCssText(e.textContent ? e.textContent.trim() : "", t)),
                    s
                }
                ,
                this.insertAdoptedSheet = e => {
                    const t = this.nextSheetId;
                    return this.idsByAdoptedSheets.set(e, t),
                    this.nextSheetId += 1,
                    t
                }
                ,
                this.sendCacheCssAssetsRequest = () => {
                    return e = this,
                    i = function*() {
                        if (!window.navigator.onLine)
                            return void d.R.debug("Postponing cache. User is offline.");
                        if (0 === this.notCachedUrls.length)
                            return;
                        const e = this.notCachedUrls;
                        this.notCachedUrls = [];
                        try {
                            yield this.isDocumentUnloading ? (0,
                            c.VW)({
                                assetsHost: this.assetsHost,
                                urls: e
                            }) : (0,
                            c.fj)({
                                assetsHost: this.assetsHost,
                                urls: e
                            }),
                            this.failedCacheRequestCount = 0
                        } catch (t) {
                            d.R.debug("Could not not cache css assets", t),
                            this.failedCacheRequestCount += 1,
                            this.notCachedUrls.push(...e)
                        }
                        this.failedCacheRequestCount > 3 && (clearInterval(this.lastIntervalId),
                        this.lastIntervalId = void 0)
                    }
                    ,
                    new ((t = void 0) || (t = Promise))((function(s, n) {
                        function o(e) {
                            try {
                                a(i.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }
                        function r(e) {
                            try {
                                a(i.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }
                        function a(e) {
                            var i;
                            e.done ? s(e.value) : (i = e.value,
                            i instanceof t ? i : new t((function(e) {
                                e(i)
                            }
                            ))).then(o, r)
                        }
                        a((i = i.apply(e, [])).next())
                    }
                    ));
                    var e, t, i
                }
                ,
                this.assetsProxyHost = De.c(this.assetsHost, "/proxy").toString(),
                document.addEventListener("visibilitychange", (e => {
                    g.Q(e) && "hidden" === document.visibilityState && (this.isDocumentUnloading = !0)
                }
                ), !0),
                this.lastIntervalId = setInterval(this.sendCacheCssAssetsRequest, i)
            }
            processCssRule(e, t, i, s) {
                return this.processCssText(vi.replaceHover(e), t, i, s)
            }
            processCssText(e, t, i, s) {
                let n = e.replace(/max-device-width/gim, "max-width").replace(/min-device-width/gim, "min-width").replace(/max-device-height/gim, "max-height").replace(/min-device-height/gim, "min-height").replace(/:hover/gim, `.${hi("hover")}`);
                return i && ee(i) || (n = this.applyCacheToImportUrls(n, t)),
                n = this.replaceRelativeUrlsWithAbsoluteInCSSText(n, t, i, s),
                n
            }
            stop() {
                clearInterval(this.lastIntervalId),
                void 0 !== this.lastIntervalId && this.sendCacheCssAssetsRequest(),
                this.lastIntervalId = void 0
            }
            static getCssSelectorsFromRule(e) {
                const t = [];
                return void 0 !== e.selectorText && t.push(e.selectorText),
                void 0 !== e.cssRules && t.push(...Array.from(e.cssRules).flatMap((e => vi.getCssSelectorsFromRule(e)))),
                t
            }
            static replaceHover(e) {
                let t = e.cssText;
                if (!t.includes(":hover"))
                    return t;
                const i = vi.getCssSelectorsFromRule(e).filter((e => e.includes(":hover")));
                if (0 === i.length)
                    return t;
                if (i.length > 100)
                    return t.replaceAll(":hover", hi("hover"));
                for (const e of i) {
                    const i = e.split(",");
                    for (const e of i)
                        if (e.includes(":hover")) {
                            const i = e.replace(":hover", "").split("::").map((e => e.split(":")));
                            i[0][0] = `${i[0][0]}.${hi("hover")}`;
                            const s = i.map((e => e.join(":"))).join("::");
                            t = t.replace(e, s)
                        }
                }
                return t
            }
            applyCacheToImportUrls(e, t) {
                return e.replace(/@import url\(["']?(.*?)["']?\)/g, ( (e, i) => /^(data:|blob:)/.test(e) || !ui.Kg(i) ? e : `@import url("${this.applyCssProxyToUrlAndCache(i, t)}")`)).replace(/@import ["'](.*?)["']/g, ( (e, i) => /^(data:|blob:)/.test(e) || !ui.Kg(i) ? e : `@import "${this.applyCssProxyToUrlAndCache(i, t)}"`))
            }
            cacheCssUrl(e) {
                this.notCachedUrls.push(e),
                void 0 === this.lastIntervalId && this.sendCacheCssAssetsRequest()
            }
            replaceRelativeUrlsWithAbsoluteInCSSText(e, t, i, s) {
                return e.replace(new RegExp(pi), ( (e, n) => {
                    if (!ui.Kg(n))
                        return e;
                    const o = e.replace(/\\/g, "")
                      , r = n.replace(/\\/g, "");
                    if (r.startsWith("data:"))
                        return e;
                    if (r.startsWith("blob:"))
                        return e;
                    if (r.startsWith(F))
                        return e;
                    const a = q(r, t)
                      , d = i && se(a) && Z(i)
                      , c = i && ne(a) && te(i);
                    return d || c || De.L(a) ? /^(https?:\/\/|\/\/)/.test(r) ? `url("${r}")` : s ? `url("${new URL(r,s).href}")` : `url("${a}")` : /^(https?:\/\/|\/\/)/.test(o) ? `url("${F}${encodeURIComponent(r)}${z}")` : `url("${F}${encodeURIComponent(a)}${z}")`
                }
                ))
            }
        }
        vi.getSheetIndex = (e, t) => {
            for (let i = 0; i < t.length; i++)
                if (t[i] === e)
                    return i;
            return -1
        }
        ;
        const gi = e => e.name === p.URL
          , fi = e => e.name === p.ERROR
          , mi = (e, ...t) => {
            (0,
            E.o)(e),
            d.R.warn("Error occurred in interceptor function.", e, ...t)
        }
          , Si = e => It(e) && "string" == typeof e.url && e.url.length > 0
          , Ei = (e, t, i) => {
            try {
                return new URL(e)
            } catch (e) {
                mi(`${i} interceptor invalid URL. Expected type is valid URL. URL stays unchanged.`, e)
            }
            return new URL(t)
        }
          , yi = {
            compose: (e, t) => {
                if ("boolean" == typeof e)
                    return e ? t : void 0;
                if ("object" != typeof e || null === e)
                    return mi("Click interceptor returned wrong type. It is expected to have the same data types as the first parameter."),
                    t;
                let i, s, n = t.pageUrl;
                return "url"in e && ui.Kg(e.url) ? n = Ei(e.url, t.pageUrl, "Click").href : mi("Click interceptor wrong `url` type. Expected type is string."),
                "text"in e && (ui.Kg(e.text) ? (i = e.text,
                i.length > Ce && (mi("Click interceptor `text` exceeded max character limit of 128 characters. Text is trimmed."),
                i = Me(i))) : ui.b0(e.text) ? i = void 0 : mi("Click interceptor wrong `text` type. Expected type is string | undefined.")),
                "props"in e && ((0,
                Zt.Qd)(e.props) ? s = (0,
                ei.e)(e.props, ei.w.CLICK, "Click interceptor") : ui.b0(e.props) ? s = void 0 : mi("Click interceptor wrong `props` type. Expected type is Record<string,  number | string | boolean> | undefined.")),
                t.pageUrl = n,
                t.text = i,
                t.props = null != s ? s : {},
                t
            }
            ,
            pick: e => {
                if (!(e => e.name === p.CLICK)(e))
                    throw new TypeError("ClickEvent expected");
                const {href: t, pageUrl: i, props: s, text: n} = e;
                return {
                    href: t,
                    props: s,
                    text: n,
                    url: i
                }
            }
        }
          , wi = {
            compose: (e, t) => {
                if ("boolean" == typeof e)
                    return e ? t : void 0;
                if ("object" != typeof e || null === e)
                    return mi("Error interceptor returned wrong type. It is expected to have the same data types as the first parameter."),
                    t;
                let i, s, n, o, r;
                if ("colno"in e) {
                    const t = e.colno;
                    (0,
                    ui.tR)(t) || (0,
                    ui.b0)(t) ? i = t : mi("Error interceptor wrong `colno` type. Expected type is positive integer or undefined.")
                }
                if ("lineno"in e) {
                    const t = e.lineno;
                    (0,
                    ui.tR)(t) || (0,
                    ui.b0)(t) ? s = t : mi("Error interceptor wrong `lineno` type. Expected type is positive integer or undefined.")
                }
                if ("filename"in e) {
                    const t = e.filename;
                    (0,
                    ui.Kg)(t) || (0,
                    ui.b0)(t) ? n = t : mi("Error interceptor wrong `filename` type. Expected type is string or undefined.")
                }
                if ("stack"in e) {
                    const t = e.stack;
                    (0,
                    ui.Kg)(t) || (0,
                    ui.b0)(t) ? o = t : mi("Error interceptor wrong `stack` type. Expected type is string or undefined.")
                }
                if ("message"in e) {
                    const t = e.message;
                    (0,
                    ui.Kg)(t) || (0,
                    ui.b0)(t) ? r = t : mi("Error interceptor wrong `message` type. Expected type is string or undefined.")
                }
                let a = t.pageUrl
                  , d = t.source;
                if ("url"in e && (0,
                ui.Kg)(e.url)) {
                    const i = Ei(e.url, t.pageUrl, "Error");
                    a = i.href,
                    d = i.origin
                } else
                    mi("Error interceptor wrong `url` type. Expected type is string.");
                return t.colno = i,
                t.filename = n,
                t.lineno = s,
                t.message = r,
                t.stack = o,
                t.pageUrl = a,
                t.source = d,
                t
            }
            ,
            pick: e => {
                if (!fi(e))
                    throw new TypeError("ErrorEvent expected");
                const {colno: t, filename: i, lineno: s, message: n, source: o, stack: r} = e;
                return {
                    colno: t,
                    filename: i,
                    lineno: s,
                    message: n,
                    source: o,
                    stack: r,
                    url: e.pageUrl
                }
            }
        }
          , bi = {
            compose: (e, t) => {
                if ("boolean" == typeof e)
                    return e ? t : void 0;
                if ("object" != typeof e || null === e)
                    return mi("Focus interceptor returned wrong type. It is expected to have the same data types as the first parameter."),
                    t;
                let i = t.pageUrl;
                return "url"in e && ui.Kg(e.url) ? i = Ei(e.url, t.pageUrl, "Focus").href : mi("Focus interceptor wrong `url` type. Expected type is string."),
                t.pageUrl = i,
                t
            }
            ,
            pick: e => {
                if (!(e => e.name === p.FOCUS)(e))
                    throw new TypeError("FocusEvent expected");
                const {pageUrl: t} = e;
                return {
                    url: t
                }
            }
        }
          , Ri = {
            compose: (e, t) => {
                if ("boolean" == typeof e)
                    return e ? t : void 0;
                if ("object" != typeof e || null === e)
                    return mi("Input interceptor returned wrong type. It is expected to have the same data types as the first parameter."),
                    t;
                let i = t.pageUrl;
                "url"in e && ui.Kg(e.url) ? i = Ei(e.url, t.pageUrl, "Input").href : mi("Input interceptor wrong `url` type. Expected type is string.");
                let s = t.value;
                return "value"in e && ui.Kg(e.value) ? s = e.value : mi("Input interceptor wrong `value` type. Expected type is string."),
                t.pageUrl = i,
                t.value = s,
                t
            }
            ,
            pick: e => {
                if (!(e => e.name === p.INPUT)(e))
                    throw new TypeError("InputEvent expected");
                const {pageUrl: t, value: i} = e;
                return {
                    url: t,
                    value: i
                }
            }
        }
          , Ti = e => It(e) && "body"in e && "string" == typeof e.body
          , Ii = e => It(e) && "headers"in e && It(e.headers)
          , Ni = e => {
            for (const t of Object.values(e)) {
                if (!Array.isArray(t))
                    return !1;
                for (const e of t)
                    if ("string" != typeof e)
                        return !1
            }
            return !0
        }
          , Oi = (e, t) => {
            if (!It(e) || !e.request)
                return mi("Network interceptor returned request in wrong format.");
            Ti(e.request) && (t.request.body = e.request.body),
            Ii(e.request) && Ni(e.request.headers) && (t.request.headers = e.request.headers)
        }
          , Ci = {
            compose: (e, t) => "boolean" == typeof e ? e ? t : void 0 : "object" == typeof e && null !== e && Si(e) ? (t.url = e.url,
            at(t) && (Oi(e, t),
            t.response && ( (e, t) => {
                It(e) && t.response ? (Ti(e.response) && (t.response.body = e.response.body),
                Ii(e.response) && Ni(e.response.headers) && (t.response.headers = e.response.headers)) : mi("Network interceptor returned response in wrong format.")
            }
            )(e, t)),
            rt(t) && Oi(e, t),
            t) : (mi("Network interceptor returned wrong value. It is expected to have the same data types as the first parameter."),
            t),
            pick: e => {
                if (at(e)) {
                    const {request: t, response: i, url: s} = e;
                    return {
                        request: {
                            body: t.body,
                            headers: t.headers
                        },
                        response: {
                            body: null == i ? void 0 : i.body,
                            headers: null == i ? void 0 : i.headers
                        },
                        url: s
                    }
                }
                if (rt(e)) {
                    const {request: t, url: i} = e;
                    return {
                        error: e.error,
                        request: {
                            body: t.body,
                            headers: t.headers
                        },
                        url: i
                    }
                }
                if (ot(e)) {
                    const {url: t} = e;
                    return {
                        url: t
                    }
                }
                throw new TypeError("NetworkEvent expected")
            }
        }
          , Mi = {
            compose: (e, t) => "object" == typeof e && null !== e && Si(e) ? (t.pageUrl = Ei(e.url, t.pageUrl, "URL").href,
            t) : (mi("URL interceptor returned wrong value. It is expected to have the same data types as the first parameter."),
            t),
            pick: e => {
                if (!gi(e))
                    throw new TypeError("URLEvent expected");
                const {pageUrl: t} = e;
                return {
                    url: t
                }
            }
        }
          , ki = {
            [p.CLICK]: yi,
            [p.ERROR]: wi,
            [p.FOCUS]: bi,
            [p.INPUT]: Ri,
            [p.NETWORK]: Ci,
            [p.URL]: Mi
        };
        var Ai = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        const Pi = e => Ai(void 0, void 0, void 0, (function*() {
            const t = [];
            let i, s;
            try {
                const s = new Response(e);
                t.push("stringResponse created");
                const n = s.body;
                if (!n)
                    throw new TypeError("Response body is null.");
                const o = new CompressionStream("deflate");
                t.push("compressionStream created"),
                i = n.pipeThrough(o),
                t.push("responsePipe created")
            } catch (i) {
                throw new r.f("Compression failed",{
                    additionalData: {
                        compressionStream: window.CompressionStream,
                        length: e.length,
                        steps: t
                    },
                    originalError: i instanceof Error ? i : void 0,
                    shouldReport: !0
                })
            }
            if (void 0 === i)
                throw new r.f("Compression failed",{
                    additionalData: {
                        compressionStream: window.CompressionStream,
                        length: e.length,
                        steps: t
                    },
                    originalError: void 0,
                    shouldReport: !0
                });
            let n = 3;
            for (; n > 0; )
                try {
                    const e = new Response(i);
                    t.push("compressedStreamResponse created"),
                    s = yield e.blob();
                    break
                } catch (e) {} finally {
                    n -= 1
                }
            if (void 0 === s)
                throw new r.f("Compression failed",{
                    additionalData: {
                        compressionStream: window.CompressionStream,
                        length: e.length,
                        steps: t
                    },
                    shouldReport: !0
                });
            return s
        }
        ))
          , Di = (e, t) => {
            const i = e ? Object.keys(e) : []
              , s = {};
            for (const n of i) {
                const i = t[n]
                  , o = e[n];
                if (["boolean", "number", "string"].includes(typeof o))
                    i !== o && (s[n] = o);
                else if ((0,
                Zt.Qd)(o) && (0,
                Zt.Qd)(i)) {
                    const e = Di(o, i);
                    e && Object.keys(e).length > 0 && (s[n] = e)
                }
            }
            return s
        }
        ;
        var xi = i(480)
          , Li = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        class Wi {
            get isUploadServiceClosing() {
                return "hidden" === document.visibilityState
            }
            constructor(e, t, i, s, n, o, l, h, u, v, g, f, m) {
                this.propertiesManager = e,
                this.sessionManager = t,
                this.visitorManager = i,
                this.persistentStorageManager = s,
                this.recordManager = n,
                this.banService = o,
                this.sessionEventBus = l,
                this.config = h,
                this.writerHost = u,
                this.storeGroup = v,
                this.persistAnalytics = g,
                this.hasPreviousRecordExpired = f,
                this.frameElementId = m,
                this.chunkIndex = 0,
                this.eventsToUpload = [],
                this.isAppliedBan = !1,
                this.isRecordForceClosed = !1,
                this.isUploadServiceStopped = !1,
                this.sendFormDataViaBeacon = (e, t, i, s, n, ...o) => Li(this, [e, t, i, s, n, ...o], void 0, (function*(e, t, i, s, n, o=!0) {
                    const r = o ? 1 : 3;
                    if (yield(0,
                    c.w$)({
                        formData: e,
                        isPartialChunk: !1,
                        recordId: n,
                        retryCount: r,
                        sessionId: i,
                        visitorId: s,
                        writerHost: this.writerHost
                    }))
                        return !0;
                    e.delete ? e.delete("rawData") : (e = new FormData,
                    Object.entries(t).forEach(( ([t,i]) => {
                        "rawData" !== t && e.append(t, JSON.stringify(i))
                    }
                    )));
                    const a = yield(0,
                    c.w$)({
                        formData: e,
                        isPartialChunk: !0,
                        recordId: n,
                        retryCount: r,
                        sessionId: i,
                        visitorId: s,
                        writerHost: this.writerHost
                    });
                    if (o && 0 !== t.metadata.index)
                        if (a) {
                            const e = {
                                customProperties: {},
                                eventsData: {},
                                metadata: Object.assign(Object.assign({}, t.metadata), {
                                    index: this.chunkIndex
                                }),
                                rawData: Object.assign({}, t.rawData),
                                recordData: {
                                    id: t.recordData.id,
                                    time: t.recordData.time
                                },
                                sessionData: {
                                    id: t.sessionData.id
                                },
                                visitorData: {
                                    id: t.visitorData.id
                                }
                            };
                            this.persistentStorageManager.queueChunkToSend({
                                apiData: e,
                                writerHost: this.writerHost
                            }) && (this.chunkIndex += 1)
                        } else
                            this.persistentStorageManager.queueChunkToSend({
                                apiData: t,
                                writerHost: this.writerHost
                            })
                }
                )),
                this.sendQueuedData = (...e) => Li(this, [...e], void 0, (function*(e=!1) {
                    if (!window.navigator.onLine)
                        return void d.R.debug("Postponing upload. User is offline.");
                    if (this.isRecordForceClosed)
                        return void d.R.debug("Not sending other chunk. Record is force closed.");
                    if (this.isAppliedBan)
                        return void d.R.debug("Not sending other chunk. Record is banned.");
                    if (!this.recordManager.isRecordOpen())
                        return void d.R.debug("Not sending other chunk. Upload service is closed.", this.eventsToUpload);
                    e && (this.isRecordForceClosed = e);
                    const t = this.sessionManager.getSessionData()
                      , i = this.visitorManager.getVisitorData()
                      , s = this.recordManager.getRecordData()
                      , n = this.propertiesManager.getProperties()
                      , o = this.getMetadata()
                      , l = this.lastSessionDataSent ? Di(t, this.lastSessionDataSent) : t
                      , h = this.lastVisitorDataSent ? Di(i, this.lastVisitorDataSent) : i
                      , u = this.lastRecordDataSent ? Di(s, this.lastRecordDataSent) : s
                      , v = this.lastCustomPropertiesSent ? Di(n, this.lastCustomPropertiesSent) : n
                      , g = this.lastMetadataSent ? Di(o, this.lastMetadataSent) : o;
                    if (0 === this.eventsToUpload.length && [l, h, v].every((e => 0 === Object.keys(e).length)) && 1 === Object.keys(u).length && u.time && 1 === Object.keys(g).length && void 0 !== g.index)
                        return;
                    const {eventsData: f, rawData: m} = function(e) {
                        var t, i, s, n, o, r, a, d, c, l, h, u, v, g, f, m, S, E, y, w, b, R, T, I, N, O, C, M, k, A, P, D, x, L, W, U, j;
                        const B = e.reduce(( (e, t) => {
                            void 0 === e[t.name] && (e[t.name] = []);
                            const {name: i} = t
                              , s = function(e, t) {
                                var i = {};
                                for (var s in e)
                                    Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                    var n = 0;
                                    for (s = Object.getOwnPropertySymbols(e); n < s.length; n++)
                                        t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
                                }
                                return i
                            }(t, ["name"]);
                            return e[t.name].push(s),
                            e
                        }
                        ), {})
                          , _ = {
                            [p.ADOPTED_STYLESHEET_DISCOVERY]: null !== (t = B[p.ADOPTED_STYLESHEET_DISCOVERY]) && void 0 !== t ? t : [],
                            [p.ADOPTED_STYLESHEET_MUTATION]: null !== (i = B[p.ADOPTED_STYLESHEET_MUTATION]) && void 0 !== i ? i : [],
                            [p.ADOPTED_STYLESHEETS_ASSIGN]: null !== (s = B[p.ADOPTED_STYLESHEETS_ASSIGN]) && void 0 !== s ? s : [],
                            [p.ANIMATION]: null !== (n = B[p.ANIMATION]) && void 0 !== n ? n : [],
                            [p.ASSET]: null !== (o = B[p.ASSET]) && void 0 !== o ? o : [],
                            [p.BLUR]: null !== (r = B[p.BLUR]) && void 0 !== r ? r : [],
                            [p.CANVAS_CHUNK]: null !== (a = B[p.CANVAS_CHUNK]) && void 0 !== a ? a : [],
                            [p.CANVAS_START]: null !== (d = B[p.CANVAS_START]) && void 0 !== d ? d : [],
                            [p.CONSOLE]: null !== (c = B[p.CONSOLE]) && void 0 !== c ? c : [],
                            [p.DOM_DISCOVERY]: null !== (l = B[p.DOM_DISCOVERY]) && void 0 !== l ? l : [],
                            [p.DOM_DISCOVERY_IFRAME]: null !== (h = B[p.DOM_DISCOVERY_IFRAME]) && void 0 !== h ? h : [],
                            [p.ELEMENT_ANIMATE]: null !== (u = B[p.ELEMENT_ANIMATE]) && void 0 !== u ? u : [],
                            [p.FULLSCREEN]: null !== (v = B[p.FULLSCREEN]) && void 0 !== v ? v : [],
                            [p.INPUT_TYPING]: null !== (g = B[p.INPUT_TYPING]) && void 0 !== g ? g : [],
                            [p.METADATA]: null !== (f = B[p.METADATA]) && void 0 !== f ? f : [],
                            [p.MOUSE_MOVE]: null !== (m = B[p.MOUSE_MOVE]) && void 0 !== m ? m : [],
                            [p.NETWORK]: null !== (S = B[p.NETWORK]) && void 0 !== S ? S : [],
                            [p.NETWORK_WEBSOCKET]: null !== (E = B[p.NETWORK_WEBSOCKET]) && void 0 !== E ? E : [],
                            [p.NODE_MUTATION]: null !== (y = B[p.NODE_MUTATION]) && void 0 !== y ? y : [],
                            [p.PACKED_ASSET]: null !== (w = B[p.PACKED_ASSET]) && void 0 !== w ? w : [],
                            [p.PERFORMANCE_METRIC]: null !== (b = B[p.PERFORMANCE_METRIC]) && void 0 !== b ? b : [],
                            [p.POPOVER]: null !== (R = B[p.POPOVER]) && void 0 !== R ? R : [],
                            [p.RESIZE]: null !== (T = B[p.RESIZE]) && void 0 !== T ? T : [],
                            [p.RESOURCE]: null !== (I = B[p.RESOURCE]) && void 0 !== I ? I : [],
                            [p.SCROLL]: null !== (N = B[p.SCROLL]) && void 0 !== N ? N : [],
                            [p.SELECTION]: null !== (O = B[p.SELECTION]) && void 0 !== O ? O : [],
                            [p.STYLESHEET_MUTATION]: null !== (C = B[p.STYLESHEET_MUTATION]) && void 0 !== C ? C : [],
                            [p.TOUCH_MOVE]: null !== (M = B[p.TOUCH_MOVE]) && void 0 !== M ? M : [],
                            [p.VISUAL_VIEWPORT]: null !== (k = B[p.VISUAL_VIEWPORT]) && void 0 !== k ? k : []
                        };
                        return {
                            eventsData: {
                                [p.CLICK]: null !== (A = B[p.CLICK]) && void 0 !== A ? A : [],
                                [p.CUSTOM_EVENT]: null !== (P = B[p.CUSTOM_EVENT]) && void 0 !== P ? P : [],
                                [p.ERROR]: null !== (D = B[p.ERROR]) && void 0 !== D ? D : [],
                                [p.FOCUS]: null !== (x = B[p.FOCUS]) && void 0 !== x ? x : [],
                                [p.INPUT]: null !== (L = B[p.INPUT]) && void 0 !== L ? L : [],
                                [p.RAGE_CLICK]: null !== (W = B[p.RAGE_CLICK]) && void 0 !== W ? W : [],
                                [p.URL]: null !== (U = B[p.URL]) && void 0 !== U ? U : [],
                                [p.URL_EXIT]: null !== (j = B[p.URL_EXIT]) && void 0 !== j ? j : []
                            },
                            rawData: _
                        }
                    }(this.eventsToUpload)
                      , S = {
                        eventsData: f,
                        rawData: m
                    };
                    this.lastSessionDataSent = t,
                    this.lastVisitorDataSent = i,
                    this.lastRecordDataSent = s,
                    this.lastCustomPropertiesSent = n,
                    this.lastMetadataSent = o,
                    this.eventsToUpload = [],
                    this.chunkIndex += 1;
                    const E = m[p.DOM_DISCOVERY]
                      , y = m[p.DOM_DISCOVERY_IFRAME]
                      , b = [...null != E ? E : [], ...null != y ? y : []].length > 0
                      , R = (e => {
                        const t = {
                            eventsData: e.eventsData,
                            rawData: e.rawData
                        };
                        for (const [e,i] of Object.entries(t.eventsData))
                            0 === i.length && delete t.eventsData[e];
                        for (const [e,i] of Object.entries(t.rawData))
                            0 === i.length && delete t.rawData[e];
                        return t
                    }
                    )(S)
                      , T = Object.assign({
                        customProperties: Object.assign({}, this.config.isCrossOriginIframeMode ? {} : v),
                        metadata: Object.assign(Object.assign({}, g), {
                            id: o.id,
                            type: o.type,
                            close: o.close,
                            containsDomDiscovery: E && E.length > 0 || void 0,
                            group: o.group,
                            key: o.key,
                            persistAnalytics: o.persistAnalytics
                        }),
                        recordData: Object.assign(Object.assign({}, this.config.isCrossOriginIframeMode ? {} : u), {
                            id: s.id,
                            time: s.time
                        }),
                        sessionData: Object.assign(Object.assign({}, this.config.isCrossOriginIframeMode ? {} : l), {
                            id: t.id
                        }),
                        visitorData: Object.assign(Object.assign({}, this.config.isCrossOriginIframeMode ? {} : h), {
                            id: i.id
                        })
                    }, R);
                    if (void 0 === this.canUseCompression)
                        try {
                            this.canUseCompression = w(requestIdleCallback) && (yield(e => Ai(void 0, void 0, void 0, (function*() {
                                if (!e.enableCompression)
                                    return !1;
                                if ("65d0c6f911a3db986cbe45e5bc84f22bce396100" === e.projectKey)
                                    return !1;
                                if (window.Response && "dpr"in window.Response)
                                    return !1;
                                if (void 0 === window.CompressionStream)
                                    return !1;
                                try {
                                    yield Pi("")
                                } catch (e) {
                                    return !1
                                }
                                return !0
                            }
                            )))(this.config))
                        } catch (e) {
                            this.canUseCompression = !1
                        }
                    const I = new FormData;
                    for (const [e,i] of Object.entries(T)) {
                        const s = JSON.stringify(i);
                        if ("eventsData" !== e && "rawData" !== e || !this.canUseCompression || this.isUploadServiceClosing)
                            I.append(e, s);
                        else
                            try {
                                I.append(e, yield Pi(s))
                            } catch (t) {
                                d.R.errorNoConsole("Error during compression", t),
                                I.append(e, s)
                            }
                    }
                    this.config.upload(T);
                    try {
                        if (!this.isUploadServiceClosing || 0 === o.index || b || (0,
                        xi.c)(I) > 4e4)
                            try {
                                const e = yield(0,
                                c.Wo)({
                                    formData: I,
                                    recordId: s.id,
                                    sessionId: t.id,
                                    visitorId: i.id,
                                    writerHost: this.writerHost
                                });
                                if (e && e.error)
                                    throw new r.f(e.error.message,{
                                        shouldReport: !0
                                    })
                            } catch (e) {
                                if (!(this.isUploadServiceClosing && e instanceof a.h && (e.isConnectionError || e.isAbortedByUserAgent)))
                                    throw e;
                                if (!(yield this.sendFormDataViaBeacon(I, T, t.id, i.id, s.id, !0)))
                                    throw e.wasBeaconFallbackUsed = !0,
                                    e
                            }
                        else
                            yield this.sendFormDataViaBeacon(I, T, t.id, i.id, s.id);
                        this.isUploadServiceStopped || queueMicrotask(( () => {
                            this.sessionEventBus.emit("write")
                        }
                        ))
                    } catch (e) {
                        if (this.isUploadServiceClosing)
                            d.R.debug("Write response fetched too late. UploadService is already closing. Ban is not applied.");
                        else {
                            const t = e instanceof Error ? e.message : "Unknown reason /write"
                              , i = !(e instanceof a.h) || 413 === e.status;
                            !this.isAppliedBan && (e instanceof a.h && !e.isConnectionError || "hidden" !== document.visibilityState) && (this.isAppliedBan = !0,
                            this.banService.applyBan(new r.f(`Write failed: Reason: ${t}`,{
                                originalError: e instanceof Error ? e : void 0,
                                shouldReport: i
                            })))
                        }
                    }
                }
                )),
                this.addOrResetDataSendingInterval(Math.min(this.config.uploadInterval, 2e3)),
                this.dataSendingLongerTimeoutId = setTimeout(( () => {
                    this.dataSendingLongerTimeoutId = void 0,
                    this.addOrResetDataSendingInterval(this.config.uploadInterval)
                }
                ), this.config.uploadInterval)
            }
            stop({forceCloseRecord: e=!1}={}) {
                this.isUploadServiceStopped && d.R.error("UploadService.stop called multiple times."),
                this.isUploadServiceStopped = !0,
                this.dataSendingLongerTimeoutId && (clearTimeout(this.dataSendingLongerTimeoutId),
                this.dataSendingLongerTimeoutId = void 0),
                e ? this.removeDataSendingInterval() : (this.removeDataSendingInterval(),
                this.addOrResetDataSendingInterval(Math.min(this.config.uploadInterval, 500)),
                setTimeout(( () => {
                    this.removeDataSendingInterval(),
                    this.sendQueuedData()
                }
                ), 2e3),
                u.finishAllQueuedTasks(( () => {
                    this.sendQueuedData()
                }
                ))),
                this.sendQueuedData(e)
            }
            upload(e, ...t) {
                this.handleIntercept(e, t[0]) && (this.eventsToUpload.push(e),
                ((e => e.name === p.DOM_DISCOVERY)(e) || this.isUploadServiceStopped && (e => e.name === p.CUSTOM_EVENT)(e)) && this.sendQueuedData())
            }
            addOrResetDataSendingInterval(e) {
                void 0 !== this.dataSendingIntervalId && this.removeDataSendingInterval(),
                this.dataSendingIntervalId = setInterval(( () => this.sendQueuedData(!1)), e)
            }
            getMetadata() {
                return {
                    id: void 0 === this.frameElementId ? void 0 : String(this.frameElementId),
                    type: void 0 === this.frameElementId ? void 0 : "iframe",
                    close: this.isRecordForceClosed,
                    forceClose: this.isRecordForceClosed,
                    group: this.storeGroup,
                    hasPreviousRecordExpired: !(0 !== this.chunkIndex || !this.hasPreviousRecordExpired) || void 0,
                    index: this.chunkIndex,
                    ipRecordingEnabled: this.config.record.ips,
                    key: this.config.projectKey,
                    persistAnalytics: !0
                }
            }
            handleIntercept(e, t) {
                if (m(e) && !gi(e) || ot(e)) {
                    const t = {
                        id: e.id,
                        name: p.URL,
                        pageUrl: m(e) ? e.pageUrl : e.url,
                        startTime: e.startTime
                    }
                      , i = this.handleInterceptEvent(t, void 0);
                    i && (m(e) && (e.pageUrl = i.pageUrl),
                    ot(e) && (e.url = i.pageUrl),
                    fi(e) && (e.source = new URL(i.pageUrl).origin))
                }
                return this.handleInterceptEvent(e, t)
            }
            handleInterceptEvent(e, t) {
                const i = this.config.interceptors[e.name];
                if ("function" != typeof i)
                    return e;
                const s = (n = e.name,
                ki[n]);
                var n;
                if (void 0 === s)
                    return e;
                const {compose: o, pick: r} = s
                  , a = r(e);
                try {
                    const s = i(a, t);
                    return o(null != s ? s : a, e)
                } catch (t) {
                    return d.R.warn("Intercepting failed.", t),
                    e
                }
            }
            removeDataSendingInterval() {
                void 0 !== this.dataSendingIntervalId && clearInterval(this.dataSendingIntervalId),
                this.dataSendingIntervalId = void 0
            }
        }
        class Ui {
            constructor(e, t, i, s, n, o, r, a, d, c, l, h, u, p, v) {
                var g, f;
                this.persistentStorageManager = t,
                this.propertiesManager = i,
                this.scrollManager = s,
                this.sessionManager = n,
                this.timeManager = o,
                this.visitorManager = r,
                this.banService = a,
                this.postMessageService = d,
                this.sessionEventBus = c,
                this.config = l,
                this.setupData = h,
                this.tasksToRun = u,
                this.crossOriginIframeMetadata = v,
                this.metadataByRoot = new Map,
                this.recordEventBus = new S,
                this.tasksByRoot = new Map,
                this.handleStartRecordingIframeEvent = e => {
                    let t = e.mutationStartTime;
                    "number" == typeof t && (t += .001),
                    this.startRecordingOnWindow(e.iframeWindow, !1, !1, t, e.parentElementPath)
                }
                ,
                this.handleStopRecordingOnWindowEvent = e => {
                    this.stopRecordingOnWindow(e.rootWindow)
                }
                ,
                this.nodeInfoManager = new si,
                this.nodeMetadataManager = new ri(this.setupData.recordingRules,null === (g = this.crossOriginIframeMetadata) || void 0 === g ? void 0 : g.frameMetadata),
                this.recordManager = new ai(e.id,o.getServerTimestamp(),this.setupData.recording.maxRecordDuration),
                this.cssService = new vi(o,this.setupData.recording.assetsHost,this.config.uploadInterval),
                this.uploadService = new Wi(this.propertiesManager,this.sessionManager,this.visitorManager,this.persistentStorageManager,this.recordManager,this.banService,this.sessionEventBus,this.config,this.setupData.recording.writerHost,this.setupData.recording.storeGroup,this.setupData.recording.analytics,p,null === (f = this.crossOriginIframeMetadata) || void 0 === f ? void 0 : f.frameElementId),
                this.assetService = new li(this.uploadService,this.persistentStorageManager),
                this.attachEventListeners()
            }
            getRecordId() {
                return this.recordManager.id
            }
            logCustomError(e) {
                this.recordEventBus.emit("customError", {
                    errorData: e,
                    rootWindow: window
                })
            }
            logCustomEvent(e, t={}) {
                const i = (0,
                Ke.I2)(e)
                  , s = (0,
                ei.e)(t, ei.w.CUSTOM_EVENT);
                this.recordEventBus.emit("customEvent", {
                    eventData: Object.assign({
                        eventName: i
                    }, s),
                    rootWindow: window
                })
            }
            sendChangeUrlEvent(e) {
                const t = (0,
                Ke.EE)(e);
                void 0 !== t && this.recordEventBus.emit("navigation", {
                    path: t,
                    rootWindow: window
                })
            }
            sendRecomputeTextNodesEvent() {
                this.recordEventBus.emit("recomputeTextNodes", {
                    rootWindow: window
                })
            }
            startRecord(e, t) {
                this.recordRelativeStartTime = performance.now(),
                u.recordRelativeStartTime = this.recordRelativeStartTime,
                this.startRecordingOnWindow(window, e, t)
            }
            stopRecord({forceCloseRecord: e=!1}={}) {
                this.stopAllTasks(),
                this.removeEventListeners(),
                this.recordRelativeStartTime = void 0,
                this.uploadService.stop({
                    forceCloseRecord: e
                }),
                this.cssService.stop()
            }
            attachEventListeners() {
                this.recordEventBus.addEventListener("startRecordingIframe", this.handleStartRecordingIframeEvent),
                this.recordEventBus.addEventListener("stopRecordingOnWindow", this.handleStopRecordingOnWindowEvent)
            }
            removeEventListeners() {
                this.recordEventBus.removeEventListener("startRecordingIframe", this.handleStartRecordingIframeEvent),
                this.recordEventBus.removeEventListener("stopRecordingOnWindow", this.handleStopRecordingOnWindowEvent)
            }
            startRecordingOnWindow(e, t, i, s, n=[]) {
                var o, a, c, l, h, u, p;
                if (void 0 === this.recordRelativeStartTime)
                    throw new r.f("Cannot start record. Relative time start is not assigned");
                if (void 0 !== this.tasksByRoot.get(e)) {
                    const t = this.metadataByRoot.get(e);
                    throw new r.f(`Recording is already running. URL: ${e.location.href}`,{
                        additionalData: {
                            attributes: e.frameElement ? K(e.frameElement, e, {
                                proxyAllImages: this.config.proxyAllImages
                            }) : {},
                            metadata: t
                        }
                    })
                }
                let v = null !== (a = null === (o = this.crossOriginIframeMetadata) || void 0 === o ? void 0 : o.frameElementId) && void 0 !== a ? a : void 0
                  , g = null !== (l = null === (c = this.crossOriginIframeMetadata) || void 0 === c ? void 0 : c.parentFrameElementId) && void 0 !== l ? l : void 0;
                window !== e && this.config.isCrossOriginIframeMode && (g = v,
                ce.u5(e) && e.frameElement && (v = this.nodeInfoManager.getIdByNode(e.frameElement)));
                const f = [];
                for (const [o,r] of Object.entries(Kt)) {
                    const a = new r(o,e,this.sessionManager.id,this.visitorManager.id,this.recordManager.id,this.nodeInfoManager,this.nodeMetadataManager,this.scrollManager,this.assetService,this.cssService,this.postMessageService,this.uploadService,this.recordEventBus,this.recordRelativeStartTime,this.sessionEventBus,this.config,this.setupData,n,null !== (u = null === (h = this.crossOriginIframeMetadata) || void 0 === h ? void 0 : h.relativeParentTimeStart) && void 0 !== u ? u : 0,v,g,t,i);
                    f.push(a);
                    try {
                        this.tasksToRun.includes(o) && (a instanceof qe ? a.start(s) : a.start())
                    } catch (e) {
                        d.R.errorNoConsole(`Could not start "${o}" task`, e)
                    }
                }
                this.tasksByRoot.set(e, f),
                this.metadataByRoot.set(e, {
                    attributes: window.frameElement ? K(window.frameElement, e, {
                        proxyAllImages: this.config.proxyAllImages
                    }) : {},
                    href: null === (p = e.location) || void 0 === p ? void 0 : p.href
                })
            }
            stopAllTasks() {
                this.tasksByRoot.forEach(( (e, t) => {
                    this.stopRecordingOnWindow(t)
                }
                ))
            }
            stopRecordingOnWindow(e) {
                const t = this.tasksByRoot.get(e);
                t && (t.forEach((t => {
                    try {
                        t.stop()
                    } catch (i) {
                        const s = this.metadataByRoot.get(e);
                        i instanceof r.f && !i.shouldReport ? d.R.debug("WebSDKError happened", i, s) : d.R.error(`Could not stop a task - ${t.taskName}.`, i, Object.assign(Object.assign({}, s), {
                            actualUrl: e.location.href
                        }))
                    }
                }
                )),
                this.tasksByRoot.delete(e),
                this.metadataByRoot.delete(e))
            }
        }
        class ji {
            constructor(e, t, i, s, n, o, r, a, d, c, l, h, u) {
                this.initialRecordData = e,
                this.persistentStorageManager = t,
                this.propertiesManager = i,
                this.scrollManager = s,
                this.sessionManager = n,
                this.timeManager = o,
                this.visitorManager = r,
                this.banService = a,
                this.postMessageService = d,
                this.sessionEventBus = c,
                this.config = l,
                this.setupData = h,
                this.tasksToRun = u,
                this.isRecordStopped = !0
            }
            getRecordId() {
                if (void 0 === this.recordingService)
                    throw new r.f("Cannot get record id. Record is not initialized");
                return this.recordingService.getRecordId()
            }
            logCustomError(...e) {
                if (void 0 === this.recordingService)
                    throw new r.f("Cannot log custom error. RecordingService is not initialized.");
                this.recordingService.logCustomError(...e)
            }
            logCustomEvent(...e) {
                if (void 0 === this.recordingService)
                    throw new r.f("Cannot log custom event. RecordingService is not initialized.");
                this.recordingService.logCustomEvent(...e)
            }
            sendChangeUrlEvent(...e) {
                if (void 0 === this.recordingService)
                    throw new r.f("Cannot send navigation event. RecordingService is not initialized.");
                this.recordingService.sendChangeUrlEvent(...e)
            }
            sendRecomputeTextNodesEvent(...e) {
                if (void 0 === this.recordingService || this.isRecordStopped)
                    throw new r.f('Cannot send "recompute text nodes" event. RecordingService is not initialized.');
                this.recordingService.sendRecomputeTextNodesEvent(...e)
            }
            startNewRecord(e, t, i, s, n) {
                if (!this.isRecordStopped)
                    throw new r.f("Cannot start new record. Previous record is not stopped");
                this.recordingService = new Ui(e,this.persistentStorageManager,this.propertiesManager,this.scrollManager,this.sessionManager,this.timeManager,this.visitorManager,this.banService,this.postMessageService,this.sessionEventBus,this.config,this.setupData,this.tasksToRun,s,i),
                this.recordingService.startRecord(t, n),
                this.isRecordStopped = !1
            }
            stopRecord(...e) {
                if (void 0 === this.recordingService)
                    throw new r.f("Cannot stop record. Record is not initialized");
                this.recordingService.stopRecord(...e),
                this.isRecordStopped = !0
            }
        }
        class Bi {
            constructor(e, t, i, s, n, o, r, a, d, c, l, h, u) {
                this.persistentStorageManager = s,
                this.scrollManager = n,
                this.timeManager = o,
                this.propertiesManager = r,
                this.banService = a,
                this.postMessageService = d,
                this.sessionEventBus = c,
                this.setupData = l,
                this.config = h,
                this.tasksToRun = u,
                this.areIntegrationsInitialized = !1,
                this.isPageLoad = !0,
                this.isRecordStopped = !0;
                const p = Object.keys(l.integrations);
                this.integrations = Object.entries(Gt).filter(( ([e]) => p.includes(e))).map(( ([,e]) => new e)),
                this.sessionManager = new ti(e,this.config.recorderVersion,this.timeManager.getServerTimestamp()),
                this.visitorManager = new ii(t.id,t),
                this.recordService = new ji(i,this.persistentStorageManager,this.propertiesManager,this.scrollManager,this.sessionManager,this.timeManager,this.visitorManager,this.banService,this.postMessageService,this.sessionEventBus,this.config,this.setupData,this.tasksToRun)
            }
            getPlayUrl() {
                return `${this.setupData.dashboardHost}${this.config.projectKey}/recordings/player/${this.getSessionId()}`
            }
            getRecordId() {
                return this.recordService.getRecordId()
            }
            getSessionData() {
                return this.sessionManager.getSessionData()
            }
            getSessionId() {
                return this.sessionManager.id
            }
            getVisitorData() {
                return this.visitorManager.getVisitorData()
            }
            getVisitorId() {
                return this.visitorManager.id
            }
            identifyVisitor(e, t) {
                if ("string" != typeof e && "number" != typeof e || "string" == typeof e && !e)
                    return void (0,
                    E.o)(`Invalid user id passed to smartlook('identify', ...). Received: ${e}`);
                const i = String(e);
                this.config.userId = i,
                this.setupData.recording.identifyApi ? (t && (this.sessionManager.updateProperties(t),
                this.visitorManager.updateProperties(t)),
                this.visitorManager.setVisitorUId(i)) : (0,
                E.o)("API is not enabled in project settings")
            }
            logCustomError(...e) {
                this.recordService.logCustomError(...e)
            }
            logCustomEvent(...e) {
                this.recordService.logCustomEvent(...e),
                this.integrations.forEach((t => {
                    t.onCustomEvent(...e)
                }
                ))
            }
            sendChangeUrlEvent(...e) {
                this.recordService.sendChangeUrlEvent(...e)
            }
            setCustomEventProperties(e) {
                this.propertiesManager.updateProperties(e)
            }
            setRecording(e) {
                const t = Object.assign({}, this.config.record);
                this.config.record = Object.assign(Object.assign({}, t), e),
                ("boolean" == typeof e.numbers && t.numbers !== e.numbers || "boolean" == typeof e.emails && t.emails !== e.emails) && this.recordService.sendRecomputeTextNodesEvent()
            }
            startNewRecord(e, t, i, s) {
                const n = () => {
                    try {
                        this.areIntegrationsInitialized || this.integrations.forEach((e => {
                            e.onSessionInitialization(this.getSessionId(), this.getVisitorId(), this.getPlayUrl())
                        }
                        ))
                    } catch (e) {
                        d.R.error("onSessionInitialization hook failed.", e)
                    } finally {
                        this.areIntegrationsInitialized = !0,
                        this.sessionEventBus.removeEventListener("write", n)
                    }
                }
                ;
                this.sessionEventBus.addEventListener("write", n),
                this.recordService.startNewRecord(e, this.isPageLoad, s, t, i),
                this.isRecordStopped = !1,
                this.isPageLoad = !1
            }
            stopRecord(...e) {
                this.recordService.stopRecord(...e),
                this.isRecordStopped = !0
            }
        }
        var _i = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        class Vi {
            constructor(e, t, i, s, n, l, h, u) {
                this.persistentStorageManager = e,
                this.setupRetryAfterService = t,
                this.banService = i,
                this.timeManager = s,
                this.postMessageService = n,
                this.scrollManager = l,
                this.propertiesManager = h,
                this.config = u,
                this.documentVisibilityHandlersInProgress = 0,
                this.isRecordStopped = !0,
                this.isRecordingAllowed = !0,
                this.lastDocumentState = null,
                this.newSessionStartingPromise = null,
                this.visibilityChangeListenersAttached = 0,
                this.addOrResetRecordTimeoutChecker = e => {
                    if (!this.setupData)
                        throw new r.f("Cannot attach record timeout checker. No setup data provided.");
                    this.removeRecordTimeoutChecker();
                    const t = .7 * Math.min(e, this.setupData.recording.recordTimeout);
                    this.recordTimeoutId = setTimeout(( () => {
                        var i;
                        d.R.debug("Record timed out", {
                            sessionTimeRemaining: e - t
                        });
                        try {
                            this.shouldStartNewSessionInsteadOfRecord(e - t) ? (d.R.debug("Spawning new sessions in max record timeout callback. Previous has not enough time remaining.", {
                                sessionTimeRemaining: e - t
                            }),
                            this.spawnNewSessionWhenPreviousHasNotEnoughTimeRemaining()) : (this.stopRecord(),
                            this.startNewRecord(e - t, {
                                id: o.$()
                            }, void 0, !0))
                        } catch (s) {
                            throw new r.f("Record max duration exceed. Cannot create new record.",{
                                additionalData: {
                                    maxRecordDuration: null === (i = this.setupData) || void 0 === i ? void 0 : i.recording.maxRecordDuration,
                                    message: s instanceof Error ? s.message : "error without message",
                                    recordTimeout: t,
                                    sessionTimeRemaining: e,
                                    visibilityChangeListener: this.visibilityChangeListenersAttached
                                }
                            })
                        }
                    }
                    ), t)
                }
                ,
                this.handleDocumentVisibilityChange = e => _i(this, void 0, void 0, (function*() {
                    if (!g.Q(e))
                        return;
                    this.documentVisibilityHandlersInProgress += 1;
                    const t = document.visibilityState;
                    try {
                        if ("hidden" === t) {
                            if (d.R.debug("Document is hidden stopping record."),
                            !this.isRecordStopped)
                                try {
                                    this.stopRecord()
                                } catch (e) {
                                    throw new r.f("Could not stop record on document.hidden event",{
                                        additionalData: {
                                            message: e instanceof Error ? e.message : "error without message"
                                        }
                                    })
                                }
                        } else if (void 0 === this.waitUserActivityPromise) {
                            if (!this.isRecordStopped)
                                return void d.R.debug("Record is running. Not starting new record on visibility change event");
                            try {
                                this.waitUserActivityPromise = this.config.startRecordingAfterUserActivity ? (0,
                                R.j)() : Promise.resolve(),
                                yield this.waitUserActivityPromise,
                                d.R.debug("Document is visible again starting new record/session.");
                                let e = document.visibilityState;
                                if ("hidden" === e)
                                    return void d.R.debug("User activity resolved too late. Document is hidden now.");
                                if (!this.currentSessionService)
                                    return void d.R.debug("Session is stopped. `visibilityChange` listener is ignored.");
                                const t = yield(0,
                                c.t9)({
                                    managerHost: this.config.managerHost,
                                    projectKey: this.config.projectKey,
                                    sessionId: this.getSessionId()
                                });
                                if (!this.currentSessionService)
                                    return void d.R.debug("Session is stopped. `visibilityChange` listener is ignored.");
                                if (e = document.visibilityState,
                                "hidden" === e)
                                    return void d.R.debug("Active session info fetched too late. Document is hidden now.");
                                if (!t.isActive || void 0 !== t.sessionTimeRemaining && this.shouldStartNewSessionInsteadOfRecord(t.sessionTimeRemaining)) {
                                    d.R.debug("Document is visible again. Starting new session since previous expired.");
                                    const e = (0,
                                    b.f4)(this.config, this.persistentStorageManager)
                                      , {sessionId: i, sessionTimeRemaining: s, visitorId: n} = yield(0,
                                    b.vS)(e, this.config, this.persistentStorageManager, [this.getSessionId()])
                                      , a = this.currentSessionService.getSessionData()
                                      , {internalProps: c, props: l} = a
                                      , h = {
                                        id: i,
                                        internalProps: c,
                                        props: l,
                                        sessionTimeRemaining: s
                                    }
                                      , u = Object.assign(Object.assign({}, this.currentSessionService.getVisitorData()), {
                                        id: n
                                    });
                                    try {
                                        this.stopSession(),
                                        yield this.persistentStorageManager.clearAssetsStore(),
                                        yield this.startNewSession(h, u, {
                                            id: o.$()
                                        })
                                    } catch (e) {
                                        if (e instanceof r.f && !e.shouldReport)
                                            return void d.R.debug("Error happened while starting new session on document.visibility event.", e);
                                        throw new r.f("Could not start new session on document.visible event",{
                                            additionalData: {
                                                documentVisibilityHandlersInProgress: this.documentVisibilityHandlersInProgress,
                                                isRecordStopped: this.isRecordStopped,
                                                lastDocumentState: this.lastDocumentState,
                                                message: e instanceof Error ? e.message : "error without message",
                                                sessionMetadata: t,
                                                visibilityChangeListener: this.visibilityChangeListenersAttached
                                            }
                                        })
                                    }
                                } else {
                                    if (d.R.debug("Document is visible again. Starting new record."),
                                    void 0 === t.sessionTimeRemaining)
                                        throw new TypeError("API `/active` responded with empty sessionTimeRemaining");
                                    try {
                                        const e = this.lastUrl !== window.location.href;
                                        this.startNewRecord(t.sessionTimeRemaining, {
                                            id: o.$()
                                        }, void 0, void 0, e)
                                    } catch (e) {
                                        throw new r.f("Could not start new record on document.visible event",{
                                            additionalData: {
                                                documentVisibilityHandlersInProgress: this.documentVisibilityHandlersInProgress,
                                                isRecordStopped: this.isRecordStopped,
                                                lastDocumentState: this.lastDocumentState,
                                                message: e instanceof Error ? e.message : "error without message",
                                                sessionMetadata: t,
                                                visibilityChangeListener: this.visibilityChangeListenersAttached
                                            }
                                        })
                                    }
                                }
                            } catch (e) {
                                if (e instanceof a.h) {
                                    if (e.isAbortedByRecorder)
                                        return void d.R.debug("Request to /active was aborted.");
                                    if (e.isConnectionError)
                                        return void d.R.debug("Request to /active failed on connection error.")
                                }
                                if (f.bJ(e) && e.message.includes("Promise.any is not a function"))
                                    return void d.R.debug("Promise.any is not a function.", e);
                                throw d.R.errorNoConsole("Error thrown in handleDocumentVisibilityChange function.", e),
                                e
                            } finally {
                                this.waitUserActivityPromise = void 0
                            }
                        }
                    } finally {
                        this.lastDocumentState = t,
                        this.documentVisibilityHandlersInProgress -= 1
                    }
                }
                )),
                this.handleUrlChanged = e => {
                    this.lastUrl = e
                }
                ,
                this.spawnNewSessionWhenPreviousHasNotEnoughTimeRemaining = () => _i(this, void 0, void 0, (function*() {
                    if (!this.currentSessionService)
                        throw new y.q("Cannot spawn new session. There is no session running.");
                    const e = this.getSessionId()
                      , t = this.currentSessionService.getVisitorData()
                      , i = this.currentSessionService.getSessionData();
                    this.stopSession();
                    const {internalProps: s, props: n} = i
                      , r = {
                        internalProps: s,
                        props: n
                    }
                      , a = (0,
                    b.f4)(this.config, this.persistentStorageManager)
                      , {sessionId: d, sessionTimeRemaining: c, visitorId: l} = yield(0,
                    b.vS)(a, this.config, this.persistentStorageManager, [e]);
                    yield this.startNewSession(Object.assign(Object.assign({}, r), {
                        id: d,
                        sessionTimeRemaining: c
                    }), Object.assign(Object.assign({}, t), {
                        id: l
                    }), {
                        id: o.$()
                    })
                }
                ))
            }
            getPlayUrl(...e) {
                if (this.throwIfRecordingIsDisabled("playUrl"),
                !this.currentSessionService)
                    throw new y.q("Cannot get playUrl. Session is not initialized.");
                return this.currentSessionService.getPlayUrl(...e)
            }
            getRecordId(...e) {
                if (this.throwIfRecordingIsDisabled("recordId"),
                !this.currentSessionService)
                    throw new y.q("Cannot get recordId. Session is not initialized.");
                return this.currentSessionService.getRecordId(...e)
            }
            getSessionId(...e) {
                if (this.throwIfRecordingIsDisabled("sessionId"),
                !this.currentSessionService)
                    throw new y.q("Cannot get sessionId. Session is not initialized.");
                return this.currentSessionService.getSessionId(...e)
            }
            getSetupData() {
                if (!this.setupData)
                    throw new r.f("Cannot get setup data. SetupData is not provided.");
                return this.setupData
            }
            getVisitorId(...e) {
                if (this.throwIfRecordingIsDisabled("visitorId"),
                !this.currentSessionService)
                    throw new y.q("Cannot get visitorId. Session is not initialized.");
                return this.currentSessionService.getVisitorId(...e)
            }
            identifyVisitor(...e) {
                return _i(this, void 0, void 0, (function*() {
                    if (this.throwIfRecordingIsDisabled("identify"),
                    this.newSessionStartingPromise && (d.R.info("Identify call postponed. Waiting for new session to be initialized."),
                    yield this.newSessionStartingPromise),
                    !this.currentSessionService)
                        throw new y.q("Cannot identify visitor. Session is not initialized.");
                    return this.currentSessionService.identifyVisitor(...e)
                }
                ))
            }
            logCustomError(...e) {
                return _i(this, void 0, void 0, (function*() {
                    if (this.throwIfRecordingIsDisabled("error"),
                    this.newSessionStartingPromise && (d.R.info("Custom error is tracking postponed. Waiting for new session to be initialized initialized."),
                    yield this.newSessionStartingPromise),
                    !this.currentSessionService)
                        throw new y.q("Cannot log custom error. Session is not initialized.");
                    return this.currentSessionService.logCustomError(...e)
                }
                ))
            }
            logCustomEvent(...e) {
                return _i(this, void 0, void 0, (function*() {
                    if (this.throwIfRecordingIsDisabled("track"),
                    this.newSessionStartingPromise && (d.R.info("Custom event is tracking postponed. Waiting for new session to be initialized."),
                    yield this.newSessionStartingPromise),
                    !this.currentSessionService)
                        throw new y.q("Cannot log custom event. Session is not initialized.");
                    return this.currentSessionService.logCustomEvent(...e)
                }
                ))
            }
            sendChangeUrlEvent(...e) {
                return _i(this, void 0, void 0, (function*() {
                    if (this.throwIfRecordingIsDisabled("navigation"),
                    this.newSessionStartingPromise && (d.R.info("Navigation API tracking os postponed. Waiting for new session to be initialized initialized."),
                    yield this.newSessionStartingPromise),
                    !this.currentSessionService)
                        throw new y.q("Cannot send url change event. Session is not initialized.");
                    return this.currentSessionService.sendChangeUrlEvent(...e)
                }
                ))
            }
            setCustomEventProperties(...e) {
                return _i(this, void 0, void 0, (function*() {
                    if (this.throwIfRecordingIsDisabled("properties"),
                    this.newSessionStartingPromise && (d.R.info("Properties tracking postponed. Waiting for new session to be initialized initialized."),
                    yield this.newSessionStartingPromise),
                    !this.currentSessionService)
                        throw new y.q("Cannot set event properties. Session is not initialized.");
                    return this.currentSessionService.setCustomEventProperties(...e)
                }
                ))
            }
            setRecording(...e) {
                return _i(this, void 0, void 0, (function*() {
                    if (this.throwIfRecordingIsDisabled("record"),
                    this.newSessionStartingPromise && (d.R.info("Recoding API postponed. Waiting for new session to be initialized initialized."),
                    yield this.newSessionStartingPromise),
                    !this.currentSessionService)
                        throw new y.q("Cannot set recording properties. Session is not initialized.");
                    return this.currentSessionService.setRecording(...e)
                }
                ))
            }
            shouldStartNewSessionInsteadOfRecord(e) {
                if (void 0 === this.setupData)
                    throw new TypeError("SetupData is undefined.");
                return e < this.setupData.recording.maxRecordDuration / 3
            }
            startNewRecord(e, t, i, s=!1, n=!1) {
                if (!this.currentSessionService)
                    throw new y.q("Cannot start new record. Session is not initialized.");
                const o = performance.now();
                if (this.onWriteEventListener = () => {
                    if (void 0 === this.setupData)
                        throw new TypeError("Setup data is undefined");
                    this.isRecordStopped || this.config.isCrossOriginIframeMode || this.addOrResetRecordTimeoutChecker(e - (performance.now() - o))
                }
                ,
                void 0 === this.sessionEventBus)
                    throw new r.f("Eventbus is not defined when startingNewRecord");
                this.currentSessionService.startNewRecord(t, s, n, i),
                this.isRecordStopped = !1,
                this.sessionEventBus.addEventListener("write", this.onWriteEventListener),
                this.config.isCrossOriginIframeMode || (this.addOrResetMaxSessionDurationTimeoutChecker(e),
                this.addOrResetMaxRecordDurationTimeoutChecker(e),
                this.addOrResetRecordTimeoutChecker(e))
            }
            startNewSession(e, t, i) {
                return _i(this, void 0, void 0, (function*() {
                    let s, n = () => {}
                    ;
                    this.newSessionStartingPromise = new Promise((e => {
                        n = e
                    }
                    ));
                    try {
                        const i = yield(0,
                        c.l2)({
                            config: this.config,
                            sessionId: e.id,
                            visitorId: t.id
                        });
                        if (s = i.setupData,
                        s.recordingAllowed)
                            this.timeManager.setServerTime(s.serverTime);
                        else {
                            const e = i.response
                              , t = null == e ? void 0 : e.headers.get("Retry-After");
                            t && (this.setupRetryAfterService.applyRetryAfter(Number.parseInt(t, 10)),
                            this.setupRetryAfterService.setAppliedRetryAfterReason(JSON.stringify(s.error)))
                        }
                        this.persistentStorageManager.setMetadata(this.config.projectKey, {
                            sessionId: e.id,
                            visitorId: t.id
                        })
                    } catch (e) {
                        const t = e instanceof Error ? e.message : "Unknown reason /setup";
                        return this.banService.applyBan(new r.f(`Setup in session failed. Reason: ${t}.`,{
                            originalError: e instanceof Error ? e : void 0,
                            shouldReport: !(e instanceof a.h)
                        })),
                        n && n(),
                        void (this.newSessionStartingPromise = null)
                    }
                    this.startSession(s, e, t, i),
                    n && n(),
                    this.newSessionStartingPromise = null
                }
                ))
            }
            startSession(e, t, i, s, n) {
                var o, a, c, l, h;
                if (this.currentSessionService)
                    throw new r.f(`Cannot start session. There is already one running. ${window.location.href}`);
                if (!e.recordingAllowed)
                    return this.isRecordingAllowed = e.recordingAllowed,
                    this.recordingDisabledReason = null === (o = e.error) || void 0 === o ? void 0 : o.message,
                    void ((null === (a = e.error) || void 0 === a ? void 0 : a.message) ? (0,
                    E.o)(`Smartlook not recording. Reason: ${e.error.message}.`) : (0,
                    E.o)("Smartlook not recording."));
                this.persistentStorageManager.setMetadata(this.config.projectKey, {
                    sessionId: t.id,
                    visitorId: i.id
                }),
                this.setupData = e,
                this.config.forceSetupData && (this.setupData = Object.assign(Object.assign({}, this.setupData), {
                    integrations: Object.assign(Object.assign({}, this.setupData.integrations), this.config.forceSetupData.integrations),
                    recording: Object.assign(Object.assign({}, this.setupData.recording), this.config.forceSetupData.recording),
                    recordingRules: [...null !== (c = this.setupData.recordingRules) && void 0 !== c ? c : [], ...null !== (l = this.config.forceSetupData.recordingRules) && void 0 !== l ? l : []]
                }));
                const u = Object.keys(Kt);
                this.setupData.recording.recordNetwork || u.splice(u.indexOf(p.NETWORK), 1),
                this.setupData.recording.recordConsole || u.splice(u.indexOf(p.CONSOLE), 1),
                this.sessionEventBus = new S,
                this.currentSessionService = new Bi(t,i,s,this.persistentStorageManager,this.scrollManager,this.timeManager,this.propertiesManager,this.banService,this.postMessageService,this.sessionEventBus,this.setupData,this.config,u),
                this.sessionEventBus.addEventListener("urlChanged", this.handleUrlChanged),
                "hidden" !== document.visibilityState && this.startNewRecord(null !== (h = t.sessionTimeRemaining) && void 0 !== h ? h : this.setupData.recording.maxSessionDuration, s, n),
                this.config.isCrossOriginIframeMode || (this.visibilityChangeListenersAttached > 0 && (d.R.error("Multiple `visibilitychange` listeners attached."),
                document.removeEventListener("visibilitychange", this.handleDocumentVisibilityChange, !0),
                this.visibilityChangeListenersAttached -= 1),
                document.addEventListener("visibilitychange", this.handleDocumentVisibilityChange, !0),
                this.visibilityChangeListenersAttached += 1)
            }
            stopRecord(...e) {
                var t;
                if (!this.currentSessionService)
                    throw new y.q("Cannot stop record. Session is not initialized.");
                this.config.isCrossOriginIframeMode || (this.removeMaxSessionDurationTimeoutChecker(),
                this.removeMaxRecordDurationTimeoutChecker(),
                this.removeRecordTimeoutChecker()),
                void 0 !== this.onWriteEventListener && (null === (t = this.sessionEventBus) || void 0 === t || t.removeEventListener("write", this.onWriteEventListener)),
                this.currentSessionService.stopRecord(...e),
                this.isRecordStopped = !0
            }
            stopSession(...e) {
                var t;
                if (this.throwIfRecordingIsDisabled("stopRecord"),
                !this.currentSessionService)
                    throw new y.q("Cannot stop session. There is no session running.");
                null === (t = this.sessionEventBus) || void 0 === t || t.removeEventListener("urlChanged", this.handleUrlChanged),
                this.visibilityChangeListenersAttached > 0 && (document.removeEventListener("visibilitychange", this.handleDocumentVisibilityChange, !0),
                this.visibilityChangeListenersAttached -= 1),
                this.isRecordStopped || this.stopRecord(...e),
                this.currentSessionService = void 0
            }
            addOrResetMaxRecordDurationTimeoutChecker(e) {
                if (!this.setupData)
                    throw new r.f("Cannot attach max record duration timeout checker. No setup data provided.");
                this.removeMaxRecordDurationTimeoutChecker();
                const t = .9 * Math.min(e, this.setupData.recording.maxRecordDuration);
                this.maxRecordDurationTimeoutId = setTimeout(( () => {
                    var i, s;
                    d.R.debug("Record max duration exceed. Starting new record.", null === (i = this.setupData) || void 0 === i ? void 0 : i.recording.maxRecordDuration, e, t);
                    try {
                        this.shouldStartNewSessionInsteadOfRecord(e - t) ? (d.R.debug("Spawning new sessions in max record duration timeout callback. Previous has not enough time remaining.", {
                            sessionTimeRemaining: e - t
                        }),
                        this.spawnNewSessionWhenPreviousHasNotEnoughTimeRemaining()) : (this.stopRecord(),
                        this.startNewRecord(e - t, {
                            id: o.$()
                        }))
                    } catch (i) {
                        throw new r.f("Record timeout exceed. Cannot create new record.",{
                            additionalData: {
                                maxRecordDuration: null === (s = this.setupData) || void 0 === s ? void 0 : s.recording.maxRecordDuration,
                                message: i instanceof Error ? i.message : "error without message",
                                recordTimeout: t,
                                sessionTimeRemaining: e
                            }
                        })
                    }
                }
                ), t)
            }
            addOrResetMaxSessionDurationTimeoutChecker(e) {
                if (!this.setupData)
                    throw new r.f("Cannot attach max session duration timeout checker. No setup data provided.");
                this.removeMaxSessionDurationTimeoutChecker();
                const t = .9 * Math.min(this.setupData.recording.maxSessionDuration, e)
                  , i = performance.now();
                this.maxSessionDurationTimeoutId = setTimeout(( () => _i(this, void 0, void 0, (function*() {
                    const e = performance.now() - i;
                    if (e + 100 < t && !w(setTimeout))
                        return console.warn("Smartlook stops recording. Reason: setTimeout is overwritten and does not respect specification.", {
                            expectedCallAfter: `${t}ms`,
                            setTimeout: setTimeout.toString(),
                            timeoutCalledAfter: `${e}ms`
                        }),
                        void this.stopSession();
                    d.R.debug("Session timed out. Starting new session."),
                    yield this.spawnNewSessionWhenPreviousHasNotEnoughTimeRemaining()
                }
                ))), t)
            }
            removeMaxRecordDurationTimeoutChecker() {
                void 0 !== this.maxRecordDurationTimeoutId && clearTimeout(this.maxRecordDurationTimeoutId)
            }
            removeMaxSessionDurationTimeoutChecker() {
                void 0 !== this.maxSessionDurationTimeoutId && clearTimeout(this.maxSessionDurationTimeoutId)
            }
            removeRecordTimeoutChecker() {
                void 0 !== this.recordTimeoutId && clearTimeout(this.recordTimeoutId)
            }
            throwIfRecordingIsDisabled(e) {
                var t;
                if (!this.isRecordingAllowed)
                    throw new r.f(`Cannot access ${e}. Recording is disabled. Reason: ${null !== (t = this.recordingDisabledReason) && void 0 !== t ? t : "unknown"}.`,{
                        shouldReport: !1
                    })
            }
        }
        var Fi = function(e, t, i, s) {
            return new (i || (i = Promise))((function(n, o) {
                function r(e) {
                    try {
                        d(s.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        d(s.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof i ? t : new i((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                d((s = s.apply(e, t || [])).next())
            }
            ))
        };
        class zi {
            constructor(e, t, i, s, n, o, r, a) {
                this.config = e,
                this.persistentStorageManager = t,
                this.setupRetryAfterService = i,
                this.banService = s,
                this.timeManager = n,
                this.postMessageService = o,
                this.scrollManager = r,
                this.propertiesManager = a,
                this.isRecordingPaused = !1,
                this.isResumeRecordingInProgress = !1,
                this.sessionService = new Vi(this.persistentStorageManager,this.setupRetryAfterService,this.banService,this.timeManager,this.postMessageService,this.scrollManager,this.propertiesManager,this.config)
            }
            get debugData() {
                const e = this.sessionService.getSetupData()
                  , t = {
                    additionalPageParams: this.config.additionalPageParams,
                    advancedNetwork: this.config.advancedNetwork,
                    key: this.config.projectKey,
                    playUrl: void 0,
                    record: this.config.record,
                    recordId: void 0,
                    sessionId: void 0,
                    version: this.config.recorderVersion,
                    visitorId: void 0
                };
                try {
                    t.sessionId = this.sessionId,
                    t.recordId = this.recordId,
                    t.visitorId = this.visitorId,
                    t.playUrl = this.playUrl
                } catch (e) {
                    d.R.debug("Cannot obtain additional metadata.", e)
                }
                return Object.assign(Object.assign({}, e), t)
            }
            get sessionId() {
                return this.sessionService.getSessionId()
            }
            get visitorId() {
                return this.sessionService.getVisitorId()
            }
            get playUrl() {
                return this.sessionService.getPlayUrl()
            }
            get recordId() {
                return this.sessionService.getRecordId()
            }
            anonymize(e) {
                return Fi(this, void 0, void 0, (function*() {
                    this.sessionService.stopSession(),
                    this.config.userId = null,
                    this.persistentStorageManager.clearStorage();
                    const t = o.$()
                      , i = o.$();
                    this.persistentStorageManager.setMetadata(this.config.projectKey, {
                        sessionId: t,
                        visitorId: i
                    }),
                    this.propertiesManager.clear(),
                    yield this.sessionService.startNewSession({
                        id: t
                    }, {
                        id: i
                    }, {
                        id: o.$()
                    }),
                    e && e()
                }
                ))
            }
            changeUrl(e) {
                return this.sessionService.sendChangeUrlEvent(e)
            }
            finishAllQueuedTasks(e) {
                u.finishAllQueuedTasks(e)
            }
            identifyVisitor(e, t) {
                return this.sessionService.identifyVisitor(e, t)
            }
            logCustomError(e) {
                return this.sessionService.logCustomError(e)
            }
            logCustomEvent(e, t={}) {
                return this.sessionService.logCustomEvent(e, t)
            }
            pauseRecording() {
                if (this.isRecordingPaused)
                    throw new r.f("Recording is already paused.");
                this.isRecordingPaused = !0,
                this.sessionService.stopSession()
            }
            resumeRecording(e) {
                return Fi(this, void 0, void 0, (function*() {
                    if (this.isResumeRecordingInProgress)
                        return d.R.debug("There is resume in progress. Ignoring this call."),
                        void (e && e());
                    if (!this.isRecordingPaused)
                        throw e && e(),
                        new r.f("Recording is not paused. Cannot resume running recording");
                    this.isResumeRecordingInProgress = !0;
                    const t = (0,
                    b.f4)(this.config, this.persistentStorageManager)
                      , {sessionId: i, sessionTimeRemaining: s, visitorId: n} = yield(0,
                    b.vS)(t, this.config, this.persistentStorageManager);
                    let l;
                    try {
                        const e = yield(0,
                        c.l2)({
                            config: this.config,
                            sessionId: i,
                            visitorId: n
                        });
                        if (l = e.setupData,
                        !l.recordingAllowed) {
                            const t = e.response
                              , i = null == t ? void 0 : t.headers.get("Retry-After");
                            i && (this.setupRetryAfterService.applyRetryAfter(Number.parseInt(i, 10)),
                            this.setupRetryAfterService.setAppliedRetryAfterReason(JSON.stringify(l.error)))
                        }
                    } catch (e) {
                        const t = e instanceof Error ? e.message : "Unknown reason /setup";
                        return this.banService.applyBan(new r.f(`Setup in 'resumeRecording' failed. Reason: ${t}`,{
                            originalError: e instanceof Error ? e : void 0,
                            shouldReport: !(e instanceof a.h)
                        })),
                        void (this.isResumeRecordingInProgress = !1)
                    }
                    this.startRecording(i, n, o.$(), l, s),
                    this.isResumeRecordingInProgress = !1,
                    this.isRecordingPaused = !1,
                    e && e()
                }
                ))
            }
            setCustomEventProperties(e) {
                return this.sessionService.setCustomEventProperties(e)
            }
            setRecording(e) {
                return this.sessionService.setRecording(e)
            }
            startRecording(e, t, i, s, n, o) {
                this.sessionService.startSession(s, {
                    id: e,
                    sessionTimeRemaining: n
                }, {
                    id: t
                }, {
                    id: i
                }, o)
            }
            stopRecording(e=!1) {
                return this.sessionService.stopSession({
                    forceCloseRecord: e
                })
            }
        }
        window.smartlook.recorderClass = zi
    }
}]);
