(() => {
    var e = {
        67(e, t, n) {
            var o = n(138),
                i = n(443)(o);
            i.push([e.id, "\n.m8FXBR {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n}\n\n.m8FXBR.t_E9eW {\n\tposition: fixed;\n}\n\n.nAM_hf {\n\tbackground: #000;\n\tbackdrop-filter: blur(10px);\n\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\n\topacity: 0;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.qmpUYt {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.qmpUYt.qWB0AN {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n\tcursor: pointer;\n}\n\n.aPwh82 {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 15pt 'Arial', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n\n\tdisplay: none;\n}\n\n.qQtYdx {\n    background: rgba(0, 43, 80, 0.5);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\tz-index: 11;\n}\n\n.PBq_cb {\n\tcursor:pointer;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n}\n\n.PBq_cb:hover .qQtYdx {\n\t\tbackground: rgba(0, 43, 80, 0.7);\n\t}\n\n.o_W9J9 {\n\tposition: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 12;\n}\n\n.o_W9J9:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 100px;\n\t\theight: 100px;\n\t\tdisplay: block;\n\t\tborder: 2px solid #fff;\n\t\tborder-radius: 50%;\n\t\t-webkit-user-select: none;\n\t\t   -moz-user-select: none;\n\t\t        user-select: none;\n\t\tbackground-color: rgba(0, 0, 0, 0.6);\n\t\ttransition: background-color 0.5s ease;\n\t\tanimation: 1s linear infinite vCajRE;\n\t\tz-index: 12;\n\t}\n\n.o_W9J9:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\tbox-sizing: border-box;\n\t\tborder-color: transparent transparent transparent #fff;\n\t\tborder-style: solid;\n\t\tborder-width: 26px 0 26px 40px;\n\t\tpointer-events: none;\n\t\tanimation: 1s linear infinite vCajRE;\n\t\tleft: 6px;\n\t\tz-index: 12;\n\t}\n\n@keyframes vCajRE {\n\t0% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n\t70% {\n\t\ttransform: translate(-50%, -50%) scale(1.1);\n\t}\n\t100% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n}\n\n.LI2Nug {\n\tbottom: 10px;\n\tposition: absolute;\n\tleft: 10px;\n\tz-index: 9999;\n\tcolor: #FFF;\n\tfont: 700 9pt 'Arial', sans-serif;\n\tfilter: drop-shadow(0 0 0.2rem black);\n}\n\n.pkttBY {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n.pkttBY .nAM_hf {\n\t\topacity: 1;\n\t}\n\n.Q94dIO {\n\tdisplay: none;\n\tpointer-events: none;\n}\n", ""]), i.locals = {
                container: "m8FXBR",
                fixed: "t_E9eW",
                insideContainer: "nAM_hf",
                adContainer: "qmpUYt",
                houseAdContainer: "qWB0AN",
                startAdButton: "aPwh82",
                pauseButtonBg: "qQtYdx",
                pauseButtonContainer: "PBq_cb",
                pauseButton: "o_W9J9",
                pokiPulse: "vCajRE",
                nrAdsContainer: "LI2Nug",
                visible: "pkttBY",
                hidden: "Q94dIO"
            }, e.exports = i
        },
        836(e, t, n) {
            var o = n(72),
                i = n(825),
                r = n(659),
                a = n(56),
                s = n(540),
                c = n(113),
                d = n(67);
            d = d.__esModule ? d.default : d;
            var l = {};
            l.styleTagTransform = c, l.setAttributes = a, l.insert = r.bind(null, "head"), l.domAPI = i, l.insertStyleElement = s;
            o(d, l);
            e.exports = d && d.locals || {}
        },
        72(e) {
            "use strict";
            var t = [];

            function n(e) {
                for (var n = -1, o = 0; o < t.length; o++)
                    if (t[o].identifier === e) {
                        n = o;
                        break
                    }
                return n
            }

            function o(e, o) {
                for (var r = {}, a = [], s = 0; s < e.length; s++) {
                    var c = e[s],
                        d = o.base ? c[0] + o.base : c[0],
                        l = r[d] || 0,
                        u = "".concat(d, " ").concat(l);
                    r[d] = l + 1;
                    var p = n(u),
                        f = {
                            css: c[1],
                            media: c[2],
                            sourceMap: c[3],
                            supports: c[4],
                            layer: c[5]
                        };
                    if (-1 !== p) t[p].references++, t[p].updater(f);
                    else {
                        var h = i(f, o);
                        o.byIndex = s, t.splice(s, 0, {
                            identifier: u,
                            updater: h,
                            references: 1
                        })
                    }
                    a.push(u)
                }
                return a
            }

            function i(e, t) {
                var n = t.domAPI(t);
                n.update(e);
                return function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                        n.update(e = t)
                    } else n.remove()
                }
            }
            e.exports = function(e, i) {
                var r = o(e = e || [], i = i || {});
                return function(e) {
                    e = e || [];
                    for (var a = 0; a < r.length; a++) {
                        var s = n(r[a]);
                        t[s].references--
                    }
                    for (var c = o(e, i), d = 0; d < r.length; d++) {
                        var l = n(r[d]);
                        0 === t[l].references && (t[l].updater(), t.splice(l, 1))
                    }
                    r = c
                }
            }
        },
        659(e) {
            "use strict";
            var t = {};
            e.exports = function(e, n) {
                var o = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(n)
            }
        },
        540(e) {
            "use strict";
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
            }
        },
        56(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        },
        825(e) {
            "use strict";
            e.exports = function(e) {
                if ("undefined" == typeof document) return {
                    update: function() {},
                    remove: function() {}
                };
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        ! function(e, t, n) {
                            var o = "";
                            n.supports && (o += "@supports (".concat(n.supports, ") {")), n.media && (o += "@media ".concat(n.media, " {"));
                            var i = void 0 !== n.layer;
                            i && (o += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), o += n.css, i && (o += "}"), n.media && (o += "}"), n.supports && (o += "}");
                            var r = n.sourceMap;
                            r && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), t.styleTagTransform(o, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        ! function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        },
        113(e) {
            "use strict";
            e.exports = function(e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        },
        443(e) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = "",
                            o = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), o && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), o && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                    }).join("")
                }, t.i = function(e, n, o, i, r) {
                    "string" == typeof e && (e = [
                        [null, e, void 0]
                    ]);
                    var a = {};
                    if (o)
                        for (var s = 0; s < this.length; s++) {
                            var c = this[s][0];
                            null != c && (a[c] = !0)
                        }
                    for (var d = 0; d < e.length; d++) {
                        var l = [].concat(e[d]);
                        o && a[l[0]] || (void 0 !== r && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = r), n && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = n) : l[2] = n), i && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = i) : l[4] = "".concat(i)), t.push(l))
                    }
                }, t
            }
        },
        138(e) {
            "use strict";
            e.exports = function(e) {
                return e[1]
            }
        }
    };
    const t = {};

    function n(o) {
        const i = t[o];
        if (void 0 !== i) return i.exports;
        const r = t[o] = {
            id: o,
            exports: {}
        };
        return e[o](r, r.exports, n), r.exports
    }
    n.n = e => {
        const t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.dn = e => {
        var t = Object.getOwnPropertyDescriptor(e, "name");
        (!t || !t.writable && t.configurable) && Object.defineProperty(e, "name", {
            value: "default",
            configurable: !0
        })
    }, n.nc = void 0, (() => {
        "use strict";
        const e = {
            ready: "pokiAppReady",
            failed: "pokiAppFailed",
            startLoading: "pokiAppStartLoading",
            ads: {
                startTimer: "pokiStartTimer",
                completed: "pokiAdsCompleted",
                error: "pokiAdsError",
                impression: "pokiAdsImpression",
                durationChange: "pokiAdsDurationChange",
                limit: "pokiAdsLimit",
                ready: "pokiAdsReady",
                requested: "pokiAdsRequested",
                prebidRequested: "pokiAdsPrebidRequested",
                skipped: "pokiAdsSkipped",
                started: "pokiAdsStarted",
                stopped: "pokiAdsStopped",
                busy: "pokiAdsBusy",
                loaded: "pokiAdsLoaded",
                hideSpinner: "pokiAdsHideSpinner",
                position: {
                    preroll: "PP",
                    midroll: "PM",
                    rewarded: "PR",
                    display: "DP"
                },
                video: {
                    clicked: "pokiVideoAdsClicked",
                    firstQuartile: "pokiVideoAdsFirstQuartile",
                    midPoint: "pokiVideoAdsMidPoint",
                    thirdQuartile: "pokiVideoAdsThirdQuartile",
                    error: "pokiVideoAdsError",
                    loaderError: "pokiVideoAdsLoaderError",
                    paused: "pokiVideoAdsPauseTriggered",
                    resumed: "pokiVideoAdsResumedTriggered",
                    progress: "pokiVideoAdsProgress",
                    buffering: "pokiVideoAdsBuffering",
                    startHouseAdFlow: "pokiVideoAdsStartHouseAdFlow"
                },
                display: {
                    error: "pokiDisplayAdsError"
                },
                extendedVideoError: "pokiAdsExtendedVideoError",
                debugging: "pokiAdsDebugging"
            },
            info: {
                messages: {
                    timeLimit: "The ad-request was not processed, because of a time constraint",
                    prerollLimit: "The ad-request was cancelled, because we're not allowed to show a preroll (PokiSDK.commercialBreak before PokiSDK.gameplayStart)",
                    disabled: "The ad-request was cancelled, because we've disabled this format for this specific configuration"
                }
            },
            playtest: {
                startVideo: "pokiPlaytestStartVideo",
                stopVideo: "pokiPlaytestStopVideo"
            },
            message: {
                event: "pokiMessageEvent",
                sdkDetails: "pokiMessageSdkDetails",
                setPokiURLParams: "pokiMessageSetPokiURLParams",
                sendGameScreenshot: "pokiMessageSendScreenshot",
                sendGameRawScreenshot: "pokiMessageSendRawScreenshot",
                sendUploadScreenshot: "pokiMessageSendUploadScreenshot",
                sendCommand: "pokiMessageSendCommand",
                sendInspectorEvent: "pokiMessageInspectorEvent",
                sendInspectorCookies: "pokiMessageSendInspectorCookies",
                sendInspectorConsole: "pokiMessageSendInspectorConsole",
                sendScore: "pokiMessageSendScore",
                scoreUpdate: "pokiMessageScoreUpdate",
                showLeaderboard: "pokiMessageShowLeaderboard",
                openExternalLink: "pokiMessageOpenExternalLink"
            },
            tracking: {
                custom: "pokiTrackingCustom",
                debugTrueInProduction: "pokiMessageDebugTrueProduction",
                screen: {
                    gameplayStart: "pokiTrackingScreenGameplayStart",
                    gameplayStop: "pokiTrackingScreenGameplayStop",
                    gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
                    commercialBreak: "pokiTrackingScreenCommercialBreak",
                    rewardedBreak: "pokiTrackingScreenRewardedBreak",
                    firstRound: "pokiTrackingScreenFirstRound",
                    displayAd: "pokiTrackingScreenDisplayAdRequest",
                    destroyAd: "pokiTrackingScreenDisplayAdDestroy",
                    playerActive: "pokiTrackingScreenPlayerActive"
                },
                playtest: {
                    showModal: "pokiTrackingPlaytestShowModal",
                    accepted: "pokiTrackingPlaytestAccepted",
                    rejected: "pokiTrackingPlaytestRejected",
                    noCanvas: "pokiTrackingPlaytestNoCanvas",
                    notLoaded: "pokiTrackingPlaytestNotLoaded",
                    starting: "pokiTrackingPlaytestStarting",
                    closed: "pokiTrackingPlaytestClosed",
                    error: "pokiTrackingPlaytestError"
                },
                playerfittest: {
                    starting: "pokiTrackingPlayerFitStarting"
                },
                sdk: {
                    status: {
                        initialized: "pokiTrackingSdkStatusInitialized",
                        failed: "pokiTrackingSdkStatusFailed"
                    }
                },
                ads: {
                    blocked: "pokiTrackingAdsBlocked",
                    ay: {
                        failed: "pokiTrackingAdsAYFailed"
                    },
                    status: {
                        busy: "pokiTrackingAdsStatusBusy",
                        completed: "pokiTrackingAdsStatusCompleted",
                        error: "pokiTrackingAdsStatusError",
                        impression: "pokiTrackingAdsStatusImpression",
                        limit: "pokiTrackingAdsStatusLimit",
                        ready: "pokiTrackingAdsStatusReady",
                        requested: "pokiTrackingAdsStatusRequested",
                        prebidRequested: "pokiTrackingAdsStatusPrebidRequested",
                        skipped: "pokiTrackingAdsStatusSkipped",
                        started: "pokiTrackingAdsStatusStarted",
                        buffering: "pokiTrackingAdsStatusBuffering"
                    },
                    video: {
                        clicked: "pokiTrackingAdsVideoClicked",
                        error: "pokiTrackingAdsVideoError",
                        loaderError: "pokiTrackingAdsVideoLoaderError",
                        progress: "pokiTrackingAdsVideoProgress",
                        paused: "pokiTrackingAdsVideoPaused",
                        resumed: "pokiTrackingAdsVideoResumed",
                        extendedVideoError: "pokiTrackingAdsVideoExtendedVideoError",
                        auctionComplete: "pokiTrackingAdsVideoWinner"
                    },
                    display: {
                        requested: "pokiTrackingScreenDisplayAdRequested",
                        impression: "pokiTrackingScreenDisplayAdImpression",
                        notFilled: "pokiTrackingAdsDisplayNotFilled",
                        auctionComplete: "pokiTrackingAdsDisplayWinner"
                    },
                    rewardedWeb: {
                        request: "pokiTrackingRewardedWebRequest",
                        ready: "pokiTrackingRewardedWebReady",
                        impression: "pokiTrackingRewardedWebImpression",
                        closedGranted: "pokiTrackingRewardedWebClosedGranted",
                        closedDeclined: "pokiTrackingRewardedWebclosedDeclined",
                        empty: "pokiTrackingRewardedWebEmpty"
                    },
                    debugging: "pokiTrackingAdsDebugging",
                    h5GamingEnabled: "pokiTrackingH5GamingEnabled"
                }
            },
            accounts: {
                openAuthPanel: {
                    type: "pokiAccountsOpenAuthPanel",
                    version: 1
                },
                authPanelClosed: "pokiAccountsAuthPanelClosed",
                getUserInfo: "pokiAccountsGetUserInfo",
                getUserToken: "pokiAccountsGetUserToken",
                userToken: "pokiAccountsUserToken",
                userInfo: "pokiAccountsUserInfo"
            }
        };
        var t = 15552e3;

        function o(e) {
            var t = new RegExp("".concat(e, "=([^;]+)(?:;|$)")).exec(document.cookie);
            return t ? t[1] : ""
        }

        function i(e, n, o) {
            document.cookie = "".concat(e, "=").concat(n, "; path=/; samesite=lax; max-age=").concat(Math.min(o || t, t))
        }

        function r() {
            for (var e = Math.floor(Date.now() / 1e3), t = "", n = 0; n < 4; n++) t = String.fromCharCode(255 & e) + t, e >>= 8;
            if (window.crypto && crypto.getRandomValues && Uint32Array) {
                var o = new Uint32Array(12);
                crypto.getRandomValues(o);
                for (var i = 0; i < 12; i++) t += String.fromCharCode(255 & o[i])
            } else
                for (var r = 0; r < 12; r++) t += String.fromCharCode(Math.floor(256 * Math.random()));
            return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        }

        function a(e, t, n) {
            console.error(e);
            var o = [{
                k: "where",
                v: t
            }, {
                k: "error",
                v: e.name && e.message ? "".concat(e.name, ": ").concat(e.message) : JSON.stringify(e)
            }];
            if (void 0 !== n) {
                var i = n;
                "string" != typeof e && (i = JSON.stringify(e)), o.push({
                    k: "extra",
                    v: i
                })
            }! function(e, t) {
                fetch(e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    body: t,
                    mode: "no-cors",
                    keepalive: !0,
                    credentials: "omit"
                }).catch(function(n) {
                    console.error(n);
                    try {
                        var o = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                        o.open("POST", e, !0), o.setRequestHeader("Content-Type", "text/plain"), o.send(t)
                    } catch (e) {}
                })
            }("https://t.poki.io/l", JSON.stringify({
                c: "observer-error",
                ve: 7,
                d: o
            }))
        }
        var s = "poki_uid",
            c = "poki_uid_new",
            d = "poki_uid_version",
            l = "poki_uid_ttl",
            u = 15552e3;

        function p(e) {
            if (!e) return "";
            try {
                var t = /^[a-zA-Z][a-zA-Z0-9+\-.]*:\/\//.test(e);
                return new URL(t ? e : "https://".concat(e)).hostname || ""
            } catch (e) {
                return ""
            }
        }

        function f(e) {
            if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e) || e.includes(":")) return e;
            if ("gemini.google.com" === e) return "gemini-google";
            if ("bard.google.com" === e) return "bard-google";
            if ("com.google.android.googlequicksearchbox" === e) return e;
            var t = function(e) {
                if (!e) return "";
                if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e) || e.includes(":")) return e;
                var t = e.split(".").filter(Boolean);
                if (t.length <= 2) return e;
                var n = new Set(["co.uk", "gov.uk", "ac.uk", "sch.uk", "com.au", "net.au", "org.au", "com.br", "com.mx", "com.tr", "com.ar", "com.cn", "com.hk", "com.tw", "com.sg", "com.my", "com.id", "co.nz", "co.in", "co.kr", "co.za", "co.jp"]),
                    o = t.slice(-2).join("."),
                    i = t.slice(-3).join(".");
                return n.has(o) ? t.slice(-3).join(".") : n.has(i) ? t.slice(-4).join(".") : o
            }(e);
            return t ? t.split(".")[0] || t : e || ""
        }

        function h(e, t) {
            var n = e.getAll(t);
            return n && 0 !== n.length ? n[n.length - 1] : ""
        }
        window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
        var m = new Set(["authorize.roblox.com", "accounts.google.com", "appleid.apple.com", "idmsa.apple.com", "login.microsoftonline.com", "login.live.com"]),
            g = new Set(["doubleclick", "googlesyndication", "googleapis", "googleadservices"]),
            y = new Set(["doubleclick", "googlesyndication", "googleapis", "googleadservices", "adsenseformobileapps"]),
            v = new Set(["google", "bing", "brave", "yahoo", "baidu", "yandex", "duckduckgo", "aol", "ask", "avg", "babylon", "googleweblight", "info", "izito", "msn", "myway", "naver", "qo-search", "searchencrypt", "search-results", "searchlock", "seznam", "so", "sogou", "startpage", "startpagina", "startsiden", "virgilio", "wp", "zapmeta", "100searchengines", "dailysearches", "easyfindanswers", "ecosia", "findretro", "geniol", "gsearch", "gosearcresults", "gosrch", "juniorsafesearch", "karmasearch", "keyboardsearch", "kvasir", "metager", "mojeek", "mysearcheasy", "onlineradiok", "panda-search", "petalsearch", "presearch", "qwant", "rammerhead", "relatedsearches", "search", "search-browser", "searchbip", "searcheira", "search-io", "search-load", "searchmusic-online", "search-redirect", "searchsafe", "searchsail", "search-sprint", "search-tab", "searchspear", "sosearcher", "srchoffer", "syndicatedsearch", "trojanwall", "voicecommandsearcher", "web-explore", "webcrawler", "yellow-search", "ziyuan", "ziyuanm", "zuiben", "coccoc", "zhanlian"]);

        function w() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.search,
                o = void 0 === n ? "" : n,
                i = t.referrer,
                r = void 0 === i ? "" : i,
                a = new URLSearchParams(o),
                s = p(r),
                c = f(s),
                d = "" !== r,
                l = a.has("tt"),
                u = a.has("sc"),
                w = h(a, "utm_source"),
                b = h(a, "utm_medium"),
                k = h(a, "utm_term"),
                A = h(a, "poki_source"),
                S = h(a, "placement"),
                E = h(a, "gclid"),
                x = h(a, "msclkid"),
                I = h(a, "yclid"),
                C = h(a, "ttclid"),
                T = h(a, "fbclid"),
                P = h(a, "adgroup"),
                _ = h(a, "creative"),
                M = h(a, "network");
            e = c || ("" === s && "" !== r ? "" : r);
            var O, D, L = !d || "poki" === e || y.has(e),
                B = (O = (r || "").match(/^android-app:\/\/([^/]+)/i)) ? O[1].toLowerCase() : null,
                R = function(e) {
                    var t = (e || "").match(/^ios-app:\/\/([^/]+)/i);
                    return t ? t[1].toLowerCase() : null
                }(r),
                N = function(e) {
                    var t = (e || "").match(/^mobileapp::\d+-([^/]+)/i);
                    return t ? t[1].toLowerCase() : null
                }(r),
                j = L && S.includes("mobileapp::") && S.includes("mobileapp::2-") ? function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /^mobileapp::2-([^/]+)/,
                        n = (e || "").match(t);
                    return n ? n[1] : null
                }(S) : null;
            D = "chrome_extension" === w ? "poki_chrome_extension" : "edge_extension" === w ? "poki_edge_extension" : l ? "tiktok" : u ? "snapchat" : "android_app" === A ? "poki_android_app" : "web_app_manifest" === w ? "pwa" : B || (R || (N || (!d && w ? w : j || (L && S ? f(p(S)) || S : "g" === M ? "google" : "ytv" === M ? "youtube" : d || E || x || I || C || T || P || _ ? !d && E && /^\d+$/.test(E) ? "direct" : "" === e && d ? "unknown" : e || "unknown" : "direct"))));
            var F, W = g.has(D) || !!(E || x || I || C || T || P || _) || "cpc" === b || "rtb-cpm" === b || "ppc" === b || "paid" === b,
                V = (s || "").toLowerCase(),
                U = !m.has(V) && (v.has(D) || /^com\.google\.android\.googlequicksearchbox$/.test(V) || function(e) {
                    return /^webcache\.googleusercontent\.com$/.test(e)
                }(V) || !!k && "share" !== b);
            return F = "snapchat" === w ? "cpc" : T && !w ? "organic" : W ? "cpc" : U ? "organic" : m.has(V) ? "oauth" : "pwa" === D || "poki_android_app" === D || d || "social" === b || "email" === b ? "referral" : D ? "unknown" : "direct", "direct" === D && "direct" !== F && "unknown" !== F && "referral" !== F && (D = "unknown"), g.has(D) && (D = "unknown"), "poki" === D && "cpc" === F && (D = "unknown"), {
                source: D,
                medium: F
            }
        }
        var b = 18e5,
            k = "poki_session";
        window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
        var A = ["poki.at", "poki.be", "poki.by", "poki.ch", "poki.cn", "poki.co.id", "poki.co.il", "poki.com.br", "poki.com", "poki.cz", "poki.de", "poki.dk", "poki.fi", "poki.it", "poki.jp", "poki.nl", "poki.pl", "poki.pt", "poki.se", "www.trochoi.net"];

        function S() {
            try {
                var e = new URL(document.referrer).hostname;
                return A.indexOf(e) > -1 ? "poki" : e
            } catch (e) {}
            return ""
        }

        function E(e, t) {
            if (!e) return !1;
            if (!(e && e.page && e.landing_page && e.previous_page)) return !1;
            if (!e.tab_id) return !1;
            if (!e.expire || Date.now() > e.expire) return !1;
            if (e.expire > Date.now() + b) return !1;
            if (t) {
                var n = w({
                        referrer: document.referrer,
                        search: window.location.search
                    }),
                    o = n.source,
                    i = n.medium;
                if ("oauth" !== i && o !== e.source) return !1;
                var r = "cpc" === i,
                    a = "cpc" === e.medium;
                if (r && !a) return !1
            }
            return !0
        }

        function x() {
            var e = null;
            E(window[window._pokiSessionGlobalName], !1) && (e = window[window._pokiSessionGlobalName]);
            try {
                var t = sessionStorage.getItem(k);
                if (t) {
                    var n = JSON.parse(t);
                    E(n, !1) && (!e || n.depth > e.depth) && (e = n)
                }
            } catch (e) {
                try {
                    a(e, "getSession", sessionStorage.getItem(k))
                } catch (t) {
                    a(e, "getSession", t)
                }
            }
            return e
        }

        function I() {
            var e = 0;
            window[window._pokiSessionGlobalName] && window[window._pokiSessionGlobalName].count && (e = window[window._pokiSessionGlobalName].count);
            try {
                var t = sessionStorage.getItem(k);
                if (t) {
                    var n = JSON.parse(t);
                    n && n.count && n.count > e && (e = n.count)
                }
            } catch (e) {
                try {
                    a(e, "getPreviousSessionCount", sessionStorage.getItem(k))
                } catch (t) {
                    a(e, "getPreviousSessionCount", t)
                }
            }
            try {
                var i = o(k);
                if (i) {
                    var r = JSON.parse(i);
                    r && r.count && r.count > e && (e = r.count)
                }
            } catch (e) {
                try {
                    a(e, "getPreviousSessionCount", o(k))
                } catch (t) {
                    a(e, "getPreviousSessionCount", t)
                }
            }
            return e
        }

        function C() {
            if (window[window._pokiSessionGlobalName] && window[window._pokiSessionGlobalName].tab_id) return window[window._pokiSessionGlobalName].tab_id;
            try {
                var e = sessionStorage.getItem(k);
                if (e) {
                    var t = JSON.parse(e);
                    if (t && t.tab_id) return t.tab_id
                }
            } catch (e) {}
            return r()
        }

        function T() {
            var e = 0,
                t = x();
            t && (e = t.depth);
            try {
                var n = o(k);
                if (n) {
                    var i = JSON.parse(n);
                    !E(i, !t) || t && i.id !== t.id || (e = Math.max(e, i.depth))
                }
            } catch (e) {
                var r = null;
                try {
                    r = o(k) || null
                } catch (e) {}
                a(e, "getSessionDepth", r)
            }
            return e
        }
        const P = (e, t) => {
                let n = !1;
                return Object.keys(t).forEach(o => {
                    t[o] === e && (n = !0)
                }), n
            },
            _ = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "GB", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO"];
        const M = (e, t) => {
            var n;
            if ("undefined" == typeof window && !t) return "";
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            const o = new RegExp(`(?:[\\?&]|^)${e}=([^&#]*)`).exec(t || (null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.search) || "");
            return null === o ? "" : decodeURIComponent(o[1].replace(/\+/g, " "))
        };
        n.dn(M);
        const O = /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo|kaios)/i,
            D = /(?:ipad|playbook|android|bb\d+|meego|silk)/i,
            L = /(?:android|bb\d+|meego|silk) .+? mobile/i;

        function B() {
            const {
                userAgent: e
            } = navigator, t = /^((?!chrome|chromium|fxios|edg|edgios|opr|opios|android).)*safari/i.test(e), n = /iP(?:hone|ad|od).*AppleWebKit/i.test(e) && /Mobile\//i.test(e) && !/(FxiOS|EdgiOS|OPiOS)/i.test(e);
            return t || n
        }
        var R, N, j;
        ! function(e) {
            e.ON = "on", e.NOT_APPLICABLE = "not_applicable", e.DISABLED = "disabled", e.PBS_ONLY = "pbs_only", e.DPF_ONLY = "dpf_only", e.CSTS_ONLY = "csts_only", e.PBS_DPF_CSTS = "pbs_dpf_csts"
        }(R || (R = {}));
        const F = M("referrer") || "",
            W = M("ccpaApplies") || "",
            V = {
                domain: M("domain") || window.location.hostname,
                bot: "1" === M("bot"),
                categories: M("categories") || "",
                device: function() {
                    const e = M("device");
                    return "desktop" === e || "mobile" === e || "tablet" === e ? e : "undefined" != typeof navigator && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 ? "tablet" : O.test(navigator.userAgent) ? "mobile" : D.test(navigator.userAgent) && !L.test(navigator.userAgent) ? "tablet" : "desktop"
                }(),
                experiment: M("experiment") || "",
                forceAd: M("force_ad") || !1,
                isPokiIframe: (parseInt(M("site_id"), 10) || 0) > 0,
                isPokiExternal: !!window.isPokiExternal,
                siteID: parseInt(M("site_id"), 10) || 3,
                tag: M("tag") || "",
                versionID: M("game_version_id"),
                debugMode: "true" === M("pokiDebug"),
                logMode: "" !== M("pokiLogging"),
                testVideos: "true" === M("testVideos"),
                referrerParam: F,
                isPlayground: !!window.isPokiPlayground,
                isInspector: "inspector-uploads.poki-user-content.com" === (null === (N = null === window || void 0 === window ? void 0 : window.location) || void 0 === N ? void 0 : N.host) || (null === (j = null === document || void 0 === document ? void 0 : document.referrer) || void 0 === j ? void 0 : j.includes("inspector.poki.dev")) || "1" === M("inspector"),
                houseAdsOnly: !1,
                adOverrideMode: !1,
                googlePreview: !!M("google_preview"),
                ccpaApplies: "1" === W || "0" !== W && void 0,
                country: (M("country") || "").toUpperCase(),
                gameID: M("game_id"),
                gdprApplies: (U = (M("country") || "").toUpperCase(), _.includes(U)),
                contentGameID: void 0,
                specialCondition: M("special_condition"),
                nonPersonalized: "y" === M("nonPersonalized"),
                familyFriendly: "y" === M("familyFriendly"),
                kioskMode: "y" === M("kioskMode") || !!(null === window || void 0 === window ? void 0 : window.kioskMode),
                forceBidder: M("force_bidder") || "",
                cloudSaveGames: "y" === M("cloudsavegames"),
                AYMode: R.ON,
                forceStartAY: "y" === M("forceStartAY")
            };
        var U;
        const H = (e, t) => {
                V[e] = t
            },
            z = V;
        class G {
            static sendMessage(t, n, o = window.parent) {
                if (!P(t, e.message)) {
                    const t = Object.keys(e.message).map(e => `poki.message.${e}`);
                    throw new TypeError(`Argument 'type' must be one of ${t.join(", ")}`)
                }
                const i = n || {};
                z.gameID && z.versionID && (i.pokifordevs = {
                    game_id: z.gameID,
                    game_version_id: z.versionID
                }), null == o || o.postMessage({
                    type: t,
                    content: i
                }, "*")
            }
        }
        const K = () => !1;
        n.dn(K);
        class q {}
        q.debug = !1, q.log = !1, q.init = (e, t) => {
            var n;
            const {
                hostname: o
            } = window.location, i = "localhost" === o || "127.0.0.1" === o || "[::1]" === o || "launch.playcanvas.com" === o || "https://gemini.google.com" === (null === (n = document.location.ancestorOrigins) || void 0 === n ? void 0 : n[0]);
            void 0 === e && (i ? (e = !0, void 0 === t && (t = !1)) : (e = !1, void 0 === t && (t = !1))), z.isInspector ? (e = !0, t = !0) : (o.endsWith(".poki-gdn.com") || o.endsWith(".gdn.poki.com")) && (e = !1, t = !1), z.debugMode && (e = !0), z.logMode && (t = !0), void 0 === t && (t = e), q.debug = e, q.log = t
        };
        const $ = q,
            Y = e => {
                let t = [];
                return Object.keys(e).forEach(n => {
                    "object" == typeof e[n] ? t = t.concat(Y(e[n])) : t.push(e[n])
                }), t
            },
            Q = Y,
            J = ["HBPrebidWon", "HBPrebidLikelyWon", "HBBid", "HBCPM", "HBBidder", "HBSource", "HBCreativeId", "HBAdId", "HBAdDomain", "HBVastXML", "HBVastUrl", "prebidBidder", "prebidBid", "ay_floor", "amazonVideoCPM", "APSBidder", "adID", "adDomain", "pokiAdServer", "bidder", "bid"];
        class Z {
            static clearEventListeners() {
                this.listeners = {}
            }
            static removeEventListener(e, t) {
                if (!Object.prototype.hasOwnProperty.call(this.listeners, e)) return;
                const n = this.listeners[e].indexOf(t); - 1 !== n && this.listeners[e].splice(n, 1)
            }
            static addEventListener(e, t, n = !1) {
                if (n = !!n, Object.prototype.hasOwnProperty.call(this.listeners, e) || (this.listeners[e] = []), n) {
                    const n = o => {
                        this.removeEventListener.bind(this)(e, n), t(o)
                    };
                    this.listeners[e].push(n)
                } else this.listeners[e].push(t)
            }
            static dispatchEvent(e, t = {}) {
                const n = Object.keys(this.listeners);
                for (let o = 0; o < n.length; o++) {
                    const i = n[o];
                    if (e === i) {
                        const n = this.listeners[i];
                        for (let o = 0; o < n.length; o++) try {
                            n[o](Object.assign(Object.assign({}, this.videoDataAnnotations), t))
                        } catch (t) {
                            console.warn("%cPOKI:%c dispatcher listener error", "font-weight: bold", "", e, t)
                        }
                    }
                }
            }
            static addVideoDataAnnotations(e) {
                (null == e ? void 0 : e.opportunityId) && !this.videoDataAnnotations.opportunityId && (this.videoDiagnosticSampled = Math.random() < .01), this.videoDataAnnotations = Object.assign(Object.assign({}, this.videoDataAnnotations), e)
            }
            static getVideoDataAnnotations() {
                return this.videoDataAnnotations
            }
            static clearVideoDataAnnotations() {
                this.videoDataAnnotations = {}, this.auctionTrackedFlag = !1, this.videoDiagnosticSampled = !1, this.videoBidDiagnostic = null
            }
            static clearVideoAuctionAnnotations() {
                const e = Object.fromEntries(J.map(e => [e, void 0]));
                this.videoDataAnnotations = Object.assign(Object.assign({}, this.videoDataAnnotations), e), this.videoBidDiagnostic = null
            }
            static isVideoDiagnosticSampled() {
                return this.videoDiagnosticSampled
            }
            static setVideoBidDiagnostic(e) {
                this.videoDiagnosticSampled && (this.videoBidDiagnostic = e)
            }
            static getVideoBidDiagnostic() {
                return this.videoBidDiagnostic
            }
            static markAuctionTracked() {
                this.auctionTrackedFlag = !0
            }
            static isAuctionTracked() {
                return this.auctionTrackedFlag
            }
        }
        Z.listeners = {}, Z.videoDataAnnotations = {}, Z.videoDiagnosticSampled = !1, Z.videoBidDiagnostic = null, Z.auctionTrackedFlag = !1;
        const X = Z,
            ee = e => {
                var t;
                if ("undefined" == typeof window || "undefined" == typeof fetch) return;
                const n = X.getVideoDataAnnotations();
                let {
                    size: o
                } = e;
                (null === (t = e.event) || void 0 === t ? void 0 : t.startsWith("video-")) && (o = "640x360v");
                const i = Object.assign(Object.assign({}, e), {
                    size: o,
                    adBreakId: e.adBreakId || n.adBreakId,
                    currentAdNumber: e.currentAdNumber || n.currentAdNumber,
                    totalAdAmount: e.totalAdAmount || n.totalAdAmount,
                    opportunity_id: e.opportunityId || n.opportunityId,
                    ad_unit_path: e.adUnitPath || n.adUnitPath,
                    p4d_game_id: z.gameID,
                    p4d_version_id: z.versionID,
                    bidder: e.bidder || n.bidder,
                    bid: e.bid || n.bid || 0,
                    error_code: e.errorCode,
                    creative_id: e.creativeId || n.creativeId,
                    experiment: z.experiment,
                    device_category: z.device
                });
                fetch("https://t.poki.io/adserver", {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify(i)
                }).catch(e => {
                    console.warn("%cPOKI:%c adserver error", "font-weight: bold", "", e)
                })
            };

        function te(e, ...t) {
            console.info(`%cPOKI:%c ${e}`, "background-color: green; border-radius: 3px; color: white; padding: 1px 5px", "", ...t)
        }

        function ne(e, ...t) {
            console.warn(`%cPOKI:%c ${e}`, "background-color: red; border-radius: 3px; color: white; padding: 1px 5px", "", ...t)
        }

        function oe(e, ...t) {
            console.error(`%cPOKI:%c ${e}`, "background-color: red; border-radius: 3px; color: white; padding: 1px 5px", "", ...t)
        }
        n.dn(ee);
        const ie = (e, t = !1) => new Promise((n, o) => {
            const i = document.createElement("script");
            i.type = t ? "module" : "text/javascript", i.async = !0, i.src = e;
            const r = () => {
                i.readyState && "loaded" !== i.readyState && "complete" !== i.readyState || (n(), i.onload = null, i.onreadystatechange = null)
            };
            i.onload = r, i.onreadystatechange = r, i.onerror = o, document.head.appendChild(i)
        });
        let re = null;
        const ae = Q(e.tracking),
            se = window;
        class ce {
            static track(t, n = {}) {
                try {
                    let o = Object.assign({}, n);
                    if (-1 === ae.indexOf(t)) throw new TypeError(`Invalid 'event', must be one of ${ae.join(", ")}`);
                    if ("object" != typeof o) throw new TypeError("Invalid data, must be an object");
                    const i = X.getVideoDataAnnotations();
                    if (null == i ? void 0 : i.pokiAdServer) switch (t) {
                        case e.tracking.ads.status.started:
                            {
                                const e = (null == o ? void 0 : o.creativeId) || i.creativeId || (null == o ? void 0 : o.houseAdId) || i.houseAdId;X.addVideoDataAnnotations({
                                    houseAdId: e
                                }),
                                o.houseAdId = e;
                                break
                            }
                        case e.tracking.ads.status.impression:
                            {
                                const e = (null == o ? void 0 : o.creativeId) || i.creativeId,
                                    t = e || (null == o ? void 0 : o.houseAdId) || i.houseAdId;ee(Object.assign(Object.assign({}, o), {
                                    event: "video-impression",
                                    creativeId: e
                                })),
                                X.addVideoDataAnnotations({
                                    houseAdId: t
                                }),
                                o.houseAdId = t;
                                break
                            }
                        case e.tracking.ads.video.error:
                        case e.tracking.ads.video.loaderError:
                            ee(Object.assign(Object.assign({}, o), {
                                videoDiagnostic: void 0,
                                event: t === e.tracking.ads.video.error ? "video-error" : "video-adsloader-error",
                                errorCode: null == o ? void 0 : o.errorCode
                            }));
                            break;
                        case e.tracking.ads.status.completed:
                            ee(Object.assign(Object.assign({}, o), {
                                event: "video-complete"
                            }));
                            break;
                        case e.tracking.ads.video.clicked:
                            ee(Object.assign(Object.assign({}, o), {
                                event: "video-clicked"
                            }))
                    }
                    if (t.includes("pokiTrackingRewardedWeb") && (o = i), $.log && (Object.keys(o).length ? console.info(`%cPOKI_TRACKER:%c Tracked event '${t}' with data:`, "font-weight: bold", "", o) : console.info(`%cPOKI_TRACKER:%c Tracked event '${t}'`, "font-weight: bold", "")), null == re || re({
                            event: t,
                            data: o
                        }), G.sendMessage(e.message.event, {
                            event: t,
                            data: o
                        }), !(z.isPokiIframe || z.isInspector || z.isPlayground || z.isPokiExternal)) {
                        const n = "sdk",
                            i = "message",
                            r = {
                                content: {
                                    event: t,
                                    data: o,
                                    pokifordevs: {
                                        game_id: z.gameID,
                                        game_version_id: void 0
                                    }
                                },
                                type: e.message.event
                            };
                        ce.logToObserver ? ce.pushEvent(n, i, r) : ce.consentDenied || (ce.eventQueue.push([n, i, r]), ce.eventQueue.length > 100 && ce.eventQueue.shift())
                    }
                } catch (e) {
                    oe("error while tracking event", e)
                }
            }
            static setupDefaultEvents() {
                const t = {
                    [e.ready]: e.tracking.sdk.status.initialized,
                    [e.failed]: e.tracking.sdk.status.failed,
                    [e.ads.busy]: e.tracking.ads.status.busy,
                    [e.ads.completed]: e.tracking.ads.status.completed,
                    [e.ads.error]: e.tracking.ads.status.error,
                    [e.ads.impression]: e.tracking.ads.status.impression,
                    [e.ads.limit]: e.tracking.ads.status.limit,
                    [e.ads.ready]: e.tracking.ads.status.ready,
                    [e.ads.requested]: e.tracking.ads.status.requested,
                    [e.ads.prebidRequested]: e.tracking.ads.status.prebidRequested,
                    [e.ads.skipped]: e.tracking.ads.status.skipped,
                    [e.ads.started]: e.tracking.ads.status.started,
                    [e.ads.video.clicked]: e.tracking.ads.video.clicked,
                    [e.ads.video.error]: e.tracking.ads.video.error,
                    [e.ads.video.loaderError]: e.tracking.ads.video.loaderError,
                    [e.ads.video.buffering]: e.tracking.ads.status.buffering,
                    [e.ads.video.progress]: e.tracking.ads.video.progress,
                    [e.ads.video.paused]: e.tracking.ads.video.paused,
                    [e.ads.video.resumed]: e.tracking.ads.video.resumed,
                    [e.ads.extendedVideoError]: e.tracking.ads.video.extendedVideoError
                };
                Object.keys(t).forEach(e => {
                    X.addEventListener(e, n => {
                        ce.track(t[e], n)
                    })
                })
            }
            static pushEvent(e, t, n) {
                se.pokiGTM.push({
                    event: `${e}-${t}`,
                    eventNoun: e,
                    eventVerb: t,
                    eventData: n || {}
                })
            }
            static setRequireConsent(e) {
                ce.cmpRequired = e, ce.setupObserverIfCMP()
            }
            static setupObserverWithCMP() {
                ce.observerSetupRequested = !0, ce.setupObserverIfCMP()
            }
            static setupObserverIfCMP() {
                if (void 0 !== ce.cmpRequired && ce.observerSetupRequested)
                    if (ce.cmpRequired) {
                        if (!window.__tcfapi) return void console.error("%cPOKI:%c PokiSDK.enableEventTracking() was called but no CMP is present.", "font-weight: bold", "");
                        window.__tcfapi("addEventListener", 2, (e, t) => {
                            var n, o, i, r, a, s;
                            !t || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || (!0 !== (null === (o = null === (n = e.purpose) || void 0 === n ? void 0 : n.consents) || void 0 === o ? void 0 : o[1]) || !0 !== (null === (r = null === (i = e.purpose) || void 0 === i ? void 0 : i.consents) || void 0 === r ? void 0 : r[8]) && !0 !== (null === (s = null === (a = e.purpose) || void 0 === a ? void 0 : a.legitimateInterests) || void 0 === s ? void 0 : s[8]) ? (ce.eventQueue.length = 0, ce.consentDenied = !0) : (ce.consentDenied = !1, ce.setupObserver(), window.__tcfapi("removeEventListener", 2, () => {}, e.listenerId)))
                        })
                    } else ce.setupObserver()
            }
            static setupObserver() {
                for (se._pokiSessionGlobalName = "pokiSession", se._pokiUserGlobalName = "pokiUser", se._pokiContextGlobalName = "pokiContext", se._pokiTrackerGlobalName = "pokiTracker", function(e, t, n) {
                        var s, d = null;
                        try {
                            (d = x()) ? (d.previous_page.path = d.page.path, d.previous_page.type = d.page.type, d.previous_page.id = d.page.id, d.previous_page.start = d.page.start, d.previous_page.pageview_id = d.page.pageview_id, d.page.path = e, d.page.type = t, d.page.id = n, d.page.start = Date.now(), d.page.pageview_id = r(), d.depth = T() + 1, d.expire = Date.now() + b) : d = function(e, t, n) {
                                try {
                                    var s = o(k);
                                    if (s) {
                                        var c = JSON.parse(s);
                                        if (E(c, !0)) return c.previous_page.path = c.page.path, c.previous_page.type = c.page.type, c.previous_page.id = c.page.id, c.previous_page.start = c.page.start, c.previous_page.pageview_id = c.page.pageview_id, c.page.path = e, c.page.type = t, c.page.id = n, c.page.start = Date.now(), c.page.pageview_id = r(), c.depth = T() + 1, c.expire = Date.now() + b, c.tab_id = C(), i(k, JSON.stringify(c)), c
                                    }
                                } catch (e) {
                                    var d = null;
                                    try {
                                        d = o(k) || null
                                    } catch (e) {}
                                    a(e, "getSessionDepth", d)
                                }
                                var l = r(),
                                    u = w({
                                        referrer: document.referrer,
                                        search: window.location.search
                                    }),
                                    p = u.source,
                                    f = u.medium;
                                return {
                                    id: r(),
                                    expire: Date.now() + b,
                                    tab_id: C(),
                                    depth: 1,
                                    count: I() + 1,
                                    page: {
                                        path: e,
                                        type: t,
                                        id: n,
                                        start: Date.now(),
                                        pageview_id: l
                                    },
                                    previous_page: {},
                                    landing_page: {
                                        path: e,
                                        type: t,
                                        id: n,
                                        start: Date.now(),
                                        pageview_id: l
                                    },
                                    referrer_domain: S(),
                                    source: p,
                                    medium: f
                                }
                            }(e, t, n), d.count > 1 && (s = parseInt(o(l), 10) || u, i(c, "0", s), window[window._pokiUserGlobalName] && (window[window._pokiUserGlobalName].is_new = !1));
                            var p = JSON.stringify(d);
                            try {
                                sessionStorage.setItem(k, p)
                            } catch (e) {
                                a(e, "updateSession-1")
                            }
                            window[window._pokiSessionGlobalName] = d;
                            try {
                                i(k, p)
                            } catch (e) {
                                a(e, "updateSession-4")
                            }
                        } catch (e) {
                            a(e, "updateSession-2")
                        }
                    }(window.location.pathname, "external", z.contentGameID), function() {
                        var e, t, n, a, p = null === (e = window[window._pokiUserGlobalName]) || void 0 === e ? void 0 : e.id,
                            f = (null === (t = window[window._pokiUserGlobalName]) || void 0 === t ? void 0 : t.is_new) || !1,
                            h = (null === (n = window[window._pokiUserGlobalName]) || void 0 === n ? void 0 : n.version) || 0,
                            m = (null === (a = window[window._pokiUserGlobalName]) || void 0 === a ? void 0 : a.ttl) || u;
                        p || (p = o(s), f = "1" === o(c), h = parseInt(o(d), 10) || 0, m = parseInt(o(l), 10) || m), p && function(e) {
                            if (!/^[A-Za-z0-9-_]+$/.test(e)) return !1;
                            try {
                                return 16 === atob(e.replace(/-/g, "+").replace(/_/g, "/")).length
                            } catch (e) {
                                return !1
                            }
                        }(p) || (p = r(), f = !0, h = 2, m = u), i(s, p, m), i(c, f ? "1" : "0", m), i(d, h, m), i(l, m, m), window[window._pokiUserGlobalName] = {
                            id: p,
                            is_new: f,
                            version: h,
                            ttl: m
                        }
                    }(), se[se._pokiSessionGlobalName].referrer = z.referrerParam, se[se._pokiContextGlobalName] = {
                        domain: z.domain,
                        tag: null,
                        site: {
                            id: null,
                            domain: window.location.hostname,
                            prefix: ""
                        },
                        page: {
                            id: z.contentGameID,
                            type: "external",
                            path: window.location.pathname,
                            pageview_id: r()
                        },
                        user: se[se._pokiUserGlobalName],
                        session: se[se._pokiSessionGlobalName]
                    }, se.pokiGTM = se.pokiGTM || [], ie("https://a.poki-cdn.com/t2.js"), ce.logToObserver = !0; ce.eventQueue.length;) {
                    const [e, t, n] = ce.eventQueue.shift();
                    ce.pushEvent(e, t, n)
                }
            }
        }
        ce.logToObserver = !1, ce.cmpRequired = void 0, ce.observerSetupRequested = !1, ce.consentDenied = !1, ce.eventQueue = [];
        const de = ce;

        function le() {
            const e = window,
                t = [];
            return "function" != typeof e.ga && "function" != typeof e.gtag || t.push("ga"), e.mixpanel && "function" == typeof e.mixpanel.track && t.push("mixpanel"), "function" == typeof e.GameAnalytics && t.push("gameanalytics"), (e.kongregateAPI || e.kongregate) && t.push("kongregate"), e.FlurryAgent && t.push("flurry"), e.Countly && t.push("countly"), e.amplitude && t.push("amplitude"), t
        }

        function ue(e) {
            switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return e instanceof Error
            }
        }

        function pe(e) {
            let t = !1,
                n = 0;
            return o => {
                if (t) return void n++;
                t = !0, setTimeout(() => {
                    t = !1
                }, e);
                const i = n;
                n = 0, o(i)
            }
        }

        function fe(e) {
            try {
                const t = new WeakSet;
                return JSON.stringify(e, (e, n) => {
                    if ("object" == typeof n && null !== n) {
                        if (t.has(n)) return "[Circular]";
                        t.add(n)
                    }
                    return n
                })
            } catch (t) {
                try {
                    return e.toString()
                } catch (e) {
                    return "[Object]"
                }
            }
        }
        let he;

        function me() {
            return he
        }
        const ge = [],
            ye = pe(100),
            ve = pe(100),
            we = console.error,
            be = ["Audio callback had starved sending audio by"];
        let ke = !1;
        const Ae = Math.random().toString(36).substring(2);
        let Se, Ee = null;
        const xe = new WeakSet,
            Ie = new WeakMap,
            Ce = new WeakSet;
        let Te = null,
            Pe = null,
            _e = null,
            Me = null;

        function Oe(e) {
            Se = e
        }

        function De() {
            var e, t, n, o;
            const i = window;
            if (null === (e = i.config) || void 0 === e ? void 0 : e.unityVersion) return i.config.unityVersion;
            if (null === (t = i.Phaser) || void 0 === t ? void 0 : t.VERSION) return i.Phaser.VERSION;
            if (null === (n = i.pc) || void 0 === n ? void 0 : n.version) return i.pc.version;
            if (null === (o = i.Module) || void 0 === o ? void 0 : o.engineVersion) return i.Module.engineVersion;
            const r = me();
            return r || void 0
        }

        function Le(e, t) {
            return e.length <= t ? e : `${e.slice(0,t-3)}...`
        }

        function Be(e, t) {
            return "string" == typeof e ? e : fe(e) || t
        }

        function Re(e, t, n, o) {
            if (z.gameID && !z.isPlayground) try {
                const t = function(e) {
                    return {
                        name: null == e ? void 0 : e.name,
                        message: (null == e ? void 0 : e.message) || fe(e),
                        stack: null == e ? void 0 : e.stack
                    }
                }(e);
                o && function(e) {
                    Ee = {
                        name: Le(Be(e.name, "Error"), 64),
                        message: Le(Be(e.message, "Unknown error"), 512),
                        stack: "string" == typeof e.stack ? Le(e.stack, 4096) : void 0,
                        observedAt: performance.now()
                    }
                }(t), n(e => function(e, t) {
                    try {
                        ge.push({
                            n: e.name,
                            m: e.message,
                            s: JSON.stringify(e.stack)
                        }), Se && Se({
                            name: e.name,
                            message: e.message,
                            stack: e.stack
                        });
                        const n = JSON.stringify({
                                domain: z.domain,
                                gid: z.gameID,
                                vid: z.versionID,
                                ve: 7,
                                n: e.name,
                                m: e.message + (t ? ` (skipped ${t} errors)` : ""),
                                s: JSON.stringify(e.stack),
                                ui: Ae,
                                ev: `${De()}`,
                                dc: z.device
                            }),
                            o = "https://t.poki.io/ge";
                        if (navigator.sendBeacon) navigator.sendBeacon(o, n);
                        else {
                            const e = new XMLHttpRequest;
                            e.open("POST", o, !0), e.send(n)
                        }
                    } catch (e) {
                        we("%cPOKI:%c failed to log error", "font-weight: bold", "", e)
                    }
                }(t, e))
            } catch (e) {
                we("%cPOKI:%c failed to log error", "font-weight: bold", "", e)
            } else t && console.error("%cPOKI:%c game error", "font-weight: bold", "", e)
        }

        function Ne(e, t = !0) {
            Re(e, t, ye, !0)
        }

        function je(e) {
            ue(e.reason) ? Ne(e.reason) : Ne({
                name: "unhandledrejection",
                message: JSON.stringify(e.reason) || fe(e)
            })
        }

        function Fe(e) {
            ue(e.error) ? Ne(e.error) : Ne(e)
        }

        function We(e) {
            if (t = e.currentTarget, "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement && Ie.has(t) && (clearTimeout(Ie.get(t)), Ie.delete(t), 1)) return;
            var t;
            if (!ke) return;
            const {
                statusMessage: n
            } = e, o = n ? `${e.type}: ${n}` : e.type, i = function() {
                if (!Ee) return null;
                const e = performance.now() - Ee.observedAt;
                return e < 0 || e > 1e4 ? (Ee = null, null) : Ee
            }();
            Re({
                name: "webglcontextlost" === e.type ? "canvas.webglcontextlost" : "canvas.contextlost",
                message: i ? `${o}; previous error within 10s: ${i.name}: ${i.message}` : o,
                stack: null == i ? void 0 : i.stack
            }, !0, ve, !1)
        }

        function Ve(e) {
            xe.has(e) || (xe.add(e), e.addEventListener("contextlost", We), e.addEventListener("webglcontextlost", We))
        }

        function Ue() {
            "undefined" != typeof document && Array.from(document.getElementsByTagName("canvas")).forEach(Ve)
        }

        function He(e, t) {
            if (!t || Ce.has(t)) return t;
            const {
                loseContext: n
            } = t;
            if ("function" != typeof n) return t;
            try {
                t.loseContext = function() {
                    return "undefined" != typeof HTMLCanvasElement && e.canvas instanceof HTMLCanvasElement && function(e) {
                        if (!ke) return;
                        const t = Ie.get(e);
                        t && clearTimeout(t), Ie.set(e, setTimeout(() => {
                            Ie.delete(e)
                        }, 2e3))
                    }(e.canvas), n.call(this)
                }, Ce.add(t)
            } catch (e) {}
            return t
        }

        function ze(e) {
            return "WEBGL_LOSE_CONTEXT" === String(e).toUpperCase()
        }

        function Ge() {
            if (z.gameID && !z.isPlayground && !z.isPokiExternal && z.isPokiIframe && !ke) {
                ke = !0, window.addEventListener("unhandledrejection", je), window.addEventListener("error", Fe),
                    function() {
                        if (!Pe && "undefined" != typeof HTMLCanvasElement) {
                            Pe = HTMLCanvasElement.prototype.getContext;
                            try {
                                HTMLCanvasElement.prototype.getContext = function(...e) {
                                    try {
                                        return Pe.apply(this, e)
                                    } finally {
                                        Ve(this)
                                    }
                                }
                            } catch (e) {
                                Pe = null
                            }
                        }
                    }(),
                    function() {
                        if ("undefined" != typeof WebGLRenderingContext && !_e) {
                            _e = WebGLRenderingContext.prototype.getExtension;
                            try {
                                WebGLRenderingContext.prototype.getExtension = function(...e) {
                                    const t = _e.apply(this, e);
                                    return ze(e[0]) ? He(this, t) : t
                                }
                            } catch (e) {
                                _e = null
                            }
                        }
                        if ("undefined" != typeof WebGL2RenderingContext && !Me) {
                            Me = WebGL2RenderingContext.prototype.getExtension;
                            try {
                                WebGL2RenderingContext.prototype.getExtension = function(...e) {
                                    const t = Me.apply(this, e);
                                    return ze(e[0]) ? He(this, t) : t
                                }
                            } catch (e) {
                                Me = null
                            }
                        }
                    }(), Ue(), Te || (Te = setInterval(Ue, 5e3));
                try {
                    console.error = (...e) => {
                        const t = fe(e);
                        be.some(e => t.includes(e)) || Ne({
                            name: "console.error",
                            message: t
                        }, !1), we.apply(console, e)
                    }
                } catch (e) {}
            }
        }

        function Ke() {
            if (Ee = null, ke) {
                ke = !1, window.removeEventListener("unhandledrejection", je), window.removeEventListener("error", Fe), Te && (clearInterval(Te), Te = null),
                    function() {
                        if (Pe && "undefined" != typeof HTMLCanvasElement) {
                            try {
                                HTMLCanvasElement.prototype.getContext = Pe
                            } catch (e) {}
                            Pe = null
                        }
                    }(),
                    function() {
                        if (_e && "undefined" != typeof WebGLRenderingContext) {
                            try {
                                WebGLRenderingContext.prototype.getExtension = _e
                            } catch (e) {}
                            _e = null
                        }
                        if (Me && "undefined" != typeof WebGL2RenderingContext) {
                            try {
                                WebGL2RenderingContext.prototype.getExtension = Me
                            } catch (e) {}
                            Me = null
                        }
                    }();
                try {
                    console.error = we
                } catch (e) {}
            }
        }
        "undefined" != typeof window && Ge();
        const qe = () => {
            let e = Math.floor(Date.now() / 1e3),
                t = "";
            for (let n = 0; n < 4; n++) t = String.fromCharCode(255 & e) + t, e >>= 8;
            if (window.crypto && crypto.getRandomValues && Uint32Array) {
                const e = new Uint32Array(12);
                crypto.getRandomValues(e);
                for (let n = 0; n < 12; n++) t += String.fromCharCode(255 & e[n])
            } else
                for (let e = 0; e < 12; e++) t += String.fromCharCode(Math.floor(256 * Math.random()));
            return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        };
        var $e;
        n.dn(qe),
            function(e) {
                e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large"
            }($e || ($e = {}));
        var Ye, Qe, Je, Ze, Xe, et = function(e, t, n, o, i) {
                if ("m" === o) throw new TypeError("Private method is not writable");
                if ("a" === o && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            },
            tt = function(e, t, n, o) {
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? o : "a" === n ? o.call(e) : o ? o.value : t.get(e)
            };
        const nt = window.requestAnimationFrame;

        function ot(e) {
            return Math.round(100 * e) / 100
        }
        class it {
            constructor(e) {
                Ye.add(this), Qe.set(this, []), Je.set(this, 0), Ze.set(this, 0), Math.random() > e || (et(this, Ze, performance.now() + 1e3, "f"), nt(() => {
                    tt(this, Ye, "m", Xe).call(this)
                }))
            }
            stats() {
                if (0 === tt(this, Qe, "f").length) return;
                const e = tt(this, Qe, "f")[0],
                    t = Math.min(...tt(this, Qe, "f")),
                    n = Math.max(...tt(this, Qe, "f")),
                    o = ot(tt(this, Qe, "f").reduce((e, t) => e + t, 0) / tt(this, Qe, "f").length);
                let i = ot(tt(this, Qe, "f").slice(1).map((e, t) => Math.abs(e - tt(this, Qe, "f")[t])).reduce((e, t) => e + t, 0) / (tt(this, Qe, "f").length - 1));
                return Number.isNaN(i) && (i = 0), `${t}|${n}|${o}|${i}|${e}`
            }
        }
        Qe = new WeakMap, Je = new WeakMap, Ze = new WeakMap, Ye = new WeakSet, Xe = function e() {
            var t;
            const n = performance.now();
            for (; n >= tt(this, Ze, "f");) tt(this, Qe, "f").unshift(tt(this, Je, "f")), tt(this, Qe, "f").length > 10 && tt(this, Qe, "f").pop(), et(this, Je, 0, "f"), et(this, Ze, tt(this, Ze, "f") + 1e3, "f");
            et(this, Je, (t = tt(this, Je, "f"), ++t), "f"), nt(() => {
                tt(this, Ye, "m", e).call(this)
            })
        };
        var rt = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        const at = Math.random().toString(36).substring(2);

        function st() {
            return rt(this, void 0, void 0, function*() {
                const e = yield window.cookieStore.getAll(), t = window.indexedDB.databases ? yield window.indexedDB.databases(): [];
                return [...e.map(e => ({
                    name: e.name,
                    expire_seconds: Math.round((e.expires - Date.now()) / 1e3),
                    type: "cookie",
                    domain: e.domain
                })), ...Object.keys(window.localStorage).map(e => ({
                    name: e,
                    expire_seconds: 15552e3,
                    type: "localStorage"
                })), ...t.map(e => ({
                    name: e.name,
                    expire_seconds: 0,
                    type: "idb"
                }))]
            })
        }
        class ct {
            static collectAndLog() {
                return rt(this, void 0, void 0, function*() {
                    try {
                        const e = {
                            domain: z.domain,
                            cookies: yield st(), p4d_game_id: z.gameID, user_id: at
                        };
                        fetch("https://t.poki.io/game-cookies", {
                            method: "post",
                            body: JSON.stringify(e)
                        }).catch()
                    } catch (e) {}
                })
            }
            static trackSavegames() {
                window.cookieStore && window.cookieStore.getAll && z.gameID && (Math.random() > .01 || navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1 || (ct.collectAndLog(), setInterval(ct.collectAndLog, 12e4)))
            }
        }
        var dt = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        const lt = (() => {
            let e = 0;
            return () => (e += 1, `u${`0000${(0|Math.pow(36*Math.random(),4)).toString(36)}`.slice(-4)}${e}`)
        })();

        function ut(e) {
            return t => new Promise(n => {
                setTimeout(() => n(t), e)
            })
        }

        function pt(e) {
            const t = [];
            for (let n = 0, o = e.length; n < o; n++) t.push(e[n]);
            return t
        }

        function ft(e) {
            return "style" in e
        }
        const ht = (e, t) => {
                if (e instanceof t) return !0;
                const n = Object.getPrototypeOf(e);
                return null !== n && (n.constructor.name === t.name || ht(n, t))
            },
            mt = new Set(["cx", "cy", "x", "y", "r", "rx", "ry", "d", "fill", "alignment-baseline", "baseline-shift", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-rendering", "dominant-baseline", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "glyph-orientation-horizontal", "glyph-orientation-vertical", "lighting-color", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "vector-effect"]),
            gt = {
                html: void 0,
                svg: void 0
            };

        function yt(e, t = {}) {
            var n;
            const o = ht(e, SVGElement) ? "svg" : "html",
                i = gt[o];
            if (i) return i;
            const r = null !== (n = t.includeStyleProperties) && void 0 !== n ? n : pt(window.getComputedStyle(document.documentElement)),
                a = "html" === o ? r.filter(e => !mt.has(e)) : [...r];
            return gt[o] = a, a
        }

        function vt(e, t) {
            const n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
            return n ? parseFloat(n.replace("px", "")) : 0
        }

        function wt(e, t = {}) {
            return {
                width: t.width || function(e) {
                    const t = vt(e, "border-left-width"),
                        n = vt(e, "border-right-width");
                    return e.clientWidth + t + n
                }(e),
                height: t.height || function(e) {
                    const t = vt(e, "border-top-width"),
                        n = vt(e, "border-bottom-width");
                    return e.clientHeight + t + n
                }(e)
            }
        }
        const bt = 16384;

        function kt(e) {
            return new Promise((t, n) => {
                const o = new Image;
                o.onload = () => {
                    const e = () => {
                        requestAnimationFrame(() => t(o))
                    };
                    "function" == typeof o.decode ? o.decode().then(e).catch(e) : e()
                }, o.onerror = n, o.crossOrigin = "anonymous", o.decoding = "async", o.src = e
            })
        }

        function At(e) {
            return new Promise((t, n) => {
                const o = new Image;
                o.decoding = "async", e.startsWith("data:") || e.startsWith("blob:") || (o.crossOrigin = "anonymous");
                let i = !1;
                const r = () => {
                    i || (i = !0, requestAnimationFrame(() => {
                        requestAnimationFrame(() => t(o))
                    }))
                };
                o.onload = () => {
                    "function" == typeof o.decode ? o.decode().then(r).catch(r) : r()
                }, o.onerror = e => {
                    n(e)
                }, o.src = e, o.complete && o.naturalWidth > 0 && r()
            })
        }

        function St(e, t, n) {
            return dt(this, void 0, void 0, function*() {
                const o = "http://www.w3.org/2000/svg",
                    i = document.createElementNS(o, "svg"),
                    r = document.createElementNS(o, "foreignObject");
                return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.setAttribute("x", "0"), r.setAttribute("y", "0"), r.setAttribute("externalResourcesRequired", "true"), i.appendChild(r), r.appendChild(e),
                    function(e) {
                        return dt(this, void 0, void 0, function*() {
                            return Promise.resolve().then(() => (new XMLSerializer).serializeToString(e)).then(encodeURIComponent).then(e => `data:image/svg+xml;charset=utf-8,${e}`)
                        })
                    }(i)
            })
        }

        function Et(e, t, n, o) {
            const i = `.${e}:${t}`,
                r = n.cssText ? function(e) {
                    const t = e.getPropertyValue("content");
                    return `${e.cssText} content: '${t.replace(/'|"/g,"")}';`
                }(n) : function(e, t) {
                    return yt(document.documentElement, t).map(t => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`).join(" ")
                }(n, o);
            return document.createTextNode(`${i}{${r}}`)
        }

        function xt(e, t, n, o) {
            const i = window.getComputedStyle(e, n),
                r = i.getPropertyValue("content");
            if ("" === r || "none" === r) return;
            const a = lt();
            try {
                t.className = `${t.className} ${a}`
            } catch (e) {
                return
            }
            const s = document.createElement("style");
            s.appendChild(Et(a, n, i, o)), t.appendChild(s)
        }
        const It = "application/font-woff",
            Ct = "image/jpeg",
            Tt = {
                woff: It,
                woff2: It,
                ttf: "application/font-truetype",
                eot: "application/vnd.ms-fontobject",
                png: "image/png",
                jpg: Ct,
                jpeg: Ct,
                gif: "image/gif",
                tiff: "image/tiff",
                svg: "image/svg+xml",
                webp: "image/webp"
            };

        function Pt(e) {
            const t = function(e) {
                const t = /\.([^./]*?)$/g.exec(e);
                return t ? t[1] : ""
            }(e).toLowerCase();
            return Tt[t] || ""
        }
        var _t = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };

        function Mt(e) {
            return -1 !== e.search(/^(data:)/)
        }

        function Ot(e, t) {
            return `data:${t};base64,${e}`
        }

        function Dt(e, t, n) {
            return _t(this, void 0, void 0, function*() {
                const o = yield fetch(e, t);
                if (404 === o.status) throw new Error(`Resource "${o.url}" not found`);
                const i = yield o.blob();
                return new Promise((e, t) => {
                    const r = new FileReader;
                    r.onerror = t, r.onloadend = () => {
                        try {
                            e(n({
                                res: o,
                                result: r.result
                            }))
                        } catch (e) {
                            t(e)
                        }
                    }, r.readAsDataURL(i)
                })
            })
        }
        const Lt = {};

        function Bt(e, t, n) {
            return _t(this, void 0, void 0, function*() {
                const o = function(e, t, n) {
                    let o = e.replace(/\?.*/, "");
                    return n && (o = e), /ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, "")), t ? `[${t}]${o}` : o
                }(e, t, n.includeQueryParams);
                if (null != Lt[o]) return Lt[o];
                let i;
                n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (new Date).getTime());
                try {
                    const o = yield Dt(e, n.fetchRequestInit, ({
                        res: e,
                        result: n
                    }) => (t || (t = e.headers.get("Content-Type") || ""), function(e) {
                        return e.split(/,/)[1]
                    }(n)));
                    i = Ot(o, t)
                } catch (t) {
                    i = n.imagePlaceholder || "";
                    let o = `Failed to fetch resource: ${e}`;
                    t && (o = "string" == typeof t ? t : t.message), o && console.warn("%cPOKI:%c failed to fetch resource", "font-weight: bold", "", o)
                }
                return Lt[o] = i, i
            })
        }
        var Rt = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };

        function Nt(e, t) {
            return Rt(this, void 0, void 0, function*() {
                return ht(e, HTMLCanvasElement) ? function(e) {
                    return Rt(this, void 0, void 0, function*() {
                        try {
                            if (e.getContext("2d")) return At(e.toDataURL())
                        } catch (e) {}
                        if (0 === e.width || 0 === e.height) return kt("data:,");
                        const t = document.createElement("canvas").getContext("2d", {
                            alpha: !0
                        });
                        return t.canvas.width = e.width, t.canvas.height = e.height, e.style.transform = "translateZ(5px)", yield new Promise(n => {
                            requestAnimationFrame(() => {
                                t.drawImage(e, 0, 0, e.width, e.height), n(null)
                            })
                        }), At(t.canvas.toDataURL())
                    })
                }(e) : ht(e, HTMLVideoElement) ? function(e, t) {
                    return Rt(this, void 0, void 0, function*() {
                        if (e.currentSrc) {
                            const t = document.createElement("canvas"),
                                n = t.getContext("2d");
                            return t.width = e.clientWidth, t.height = e.clientHeight, null == n || n.drawImage(e, 0, 0, t.width, t.height), kt(t.toDataURL())
                        }
                        const {
                            poster: n
                        } = e, o = Pt(n);
                        return kt(yield Bt(n, o, t))
                    })
                }(e, t) : ht(e, HTMLIFrameElement) ? function(e, t) {
                    return Rt(this, void 0, void 0, function*() {
                        var n;
                        try {
                            if (null === (n = null == e ? void 0 : e.contentDocument) || void 0 === n ? void 0 : n.body) return yield Ut(e.contentDocument.body, t, !0)
                        } catch (e) {}
                        return e.cloneNode(!1)
                    })
                }(e, t) : e.cloneNode(Ft(e))
            })
        }
        const jt = e => {
                var t;
                return "SLOT" === (null === (t = e.tagName) || void 0 === t ? void 0 : t.toUpperCase())
            },
            Ft = e => null != e.tagName && "SVG" === e.tagName.toUpperCase();

        function Wt(e, t, n) {
            return function(e, t, n) {
                const o = t.style;
                if (!o) return;
                const i = window.getComputedStyle(e);
                i.cssText ? (o.cssText = i.cssText, o.transformOrigin = i.transformOrigin) : yt(e, n).forEach(n => {
                    let r = i.getPropertyValue(n);
                    if ("font-size" === n && r.endsWith("px")) {
                        const e = Math.floor(parseFloat(r.substring(0, r.length - 2))) - .1;
                        r = `${e}px`
                    }
                    ht(e, HTMLIFrameElement) && "display" === n && "inline" === r && (r = "block"), "d" === n && t.getAttribute("d") && (r = `path(${t.getAttribute("d")})`), o.setProperty(n, r, i.getPropertyPriority(n))
                })
            }(e, t, n), ht(e, HTMLElement) && ht(t, HTMLElement) && (function(e, t) {
                ht(e, HTMLTextAreaElement) && (t.innerHTML = e.value), ht(e, HTMLInputElement) && t.setAttribute("value", e.value)
            }(e, t), function(e, t) {
                if (ht(e, HTMLSelectElement)) {
                    const n = t,
                        o = Array.from(n.children).find(t => e.value === t.getAttribute("value"));
                    o && o.setAttribute("selected", "")
                }
            }(e, t), function(e, t, n) {
                xt(e, t, ":before", n), xt(e, t, ":after", n)
            }(e, t, n), n.patchScroll) ? function(e, t) {
                if (0 === e.scrollTop && 0 === e.scrollLeft || !t.children) return t;
                for (let n = 0; n < t.children.length; n += 1) {
                    const o = t.children[n];
                    if (!o.children) continue;
                    const {
                        transform: i
                    } = o.style, r = new DOMMatrix(i), {
                        a: a,
                        b: s,
                        c: c,
                        d: d
                    } = r;
                    r.a = 1, r.b = 0, r.c = 0, r.d = 1, r.translateSelf(-e.scrollLeft, -e.scrollTop), r.a = a, r.b = s, r.c = c, r.d = d, o.style.transform = r.toString()
                }
                return t
            }(e, t) : t
        }
        let Vt = 0;

        function Ut(e, t, n) {
            return Rt(this, void 0, void 0, function*() {
                return n || !t.filter || t.filter(e) ? ft(e) ? (Vt++, Vt % 5 == 0 && (yield ut(0)), Promise.resolve(e).then(e => Nt(e, t)).then(n => function(e, t, n) {
                    return Rt(this, void 0, void 0, function*() {
                        var o, i;
                        if (Ft(t)) return t;
                        let r = [];
                        return r = jt(e) && e.assignedNodes ? pt(e.assignedNodes()) : ht(e, HTMLIFrameElement) && (null === (o = e.contentDocument) || void 0 === o ? void 0 : o.body) ? pt(e.contentDocument.body.childNodes) : pt(("shadowRoot" in e && null !== (i = e.shadowRoot) && void 0 !== i ? i : e).childNodes), 0 === r.length || ht(e, HTMLVideoElement) || (yield r.reduce((e, o) => e.then(() => Ut(o, n)).then(e => {
                            e && t.appendChild(e)
                        }), Promise.resolve())), t
                    })
                }(e, n, t)).then(n => Wt(e, n, t)).then(e => function(e, t) {
                    return Rt(this, void 0, void 0, function*() {
                        const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
                        if (0 === n.length) return e;
                        const o = {};
                        for (let i = 0; i < n.length; i++) {
                            const r = n[i].getAttribute("xlink:href");
                            if (r) {
                                const n = e.querySelector(r),
                                    i = document.querySelector(r);
                                n || !i || o[r] || (o[r] = yield Ut(i, t, !0))
                            }
                        }
                        const i = Object.values(o);
                        if (i.length) {
                            const t = "http://www.w3.org/1999/xhtml",
                                n = document.createElementNS(t, "svg");
                            n.setAttribute("xmlns", t), n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.style.overflow = "hidden", n.style.display = "none";
                            const o = document.createElementNS(t, "defs");
                            n.appendChild(o);
                            for (let e = 0; e < i.length; e++) o.appendChild(i[e]);
                            e.appendChild(n)
                        }
                        return e
                    })
                }(e, t))) : e.cloneNode(!1) : null
            })
        }
        var Ht = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        const zt = /url\((['"]?)([^'"]+?)\1\)/g,
            Gt = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
            Kt = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

        function qt(e, t, n, o, i) {
            return Ht(this, void 0, void 0, function*() {
                try {
                    const r = n ? function(e, t) {
                            if (e.match(/^[a-z]+:\/\//i)) return e;
                            if (e.match(/^\/\//)) return window.location.protocol + e;
                            if (e.match(/^[a-z]+:/i)) return e;
                            const n = document.implementation.createHTMLDocument(),
                                o = n.createElement("base"),
                                i = n.createElement("a");
                            return n.head.appendChild(o), n.body.appendChild(i), t && (o.href = t), i.href = e, i.href
                        }(t, n) : t,
                        a = Pt(t);
                    let s;
                    if (i) {
                        s = Ot(yield i(r), a)
                    } else s = yield Bt(r, a, o);
                    return e.replace(function(e) {
                        const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                        return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
                    }(t), `$1${s}$3`)
                } catch (e) {}
                return e
            })
        }

        function $t(e) {
            return -1 !== e.search(zt)
        }

        function Yt(e, t, n) {
            return Ht(this, void 0, void 0, function*() {
                if (!$t(e)) return e;
                const o = function(e, {
                        preferredFontFormat: t
                    }) {
                        return t ? e.replace(Kt, e => {
                            for (;;) {
                                const [n, , o] = Gt.exec(e) || [];
                                if (!o) return "";
                                if (o === t) return `src: ${n};`
                            }
                        }) : e
                    }(e, n),
                    i = function(e) {
                        const t = [];
                        return e.replace(zt, (e, n, o) => (t.push(o), e)), t.filter(e => !Mt(e))
                    }(o);
                return i.reduce((e, o) => e.then(e => qt(e, o, t, n)), Promise.resolve(o))
            })
        }
        var Qt = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };

        function Jt(e, t, n) {
            return Qt(this, void 0, void 0, function*() {
                var o;
                const i = null === (o = t.style) || void 0 === o ? void 0 : o.getPropertyValue(e);
                if (i) {
                    const o = yield Yt(i, null, n);
                    return t.style.setProperty(e, o, t.style.getPropertyPriority(e)), !0
                }
                return !1
            })
        }

        function Zt(e, t) {
            return Qt(this, void 0, void 0, function*() {
                ft(e) && (yield function(e, t) {
                    return Qt(this, void 0, void 0, function*() {
                        (yield Jt("background", e, t)) || (yield Jt("background-image", e, t)), (yield Jt("mask", e, t)) || (yield Jt("mask-image", e, t))
                    })
                }(e, t), yield function(e, t) {
                    return Qt(this, void 0, void 0, function*() {
                        const n = ht(e, HTMLImageElement),
                            o = ht(e, SVGImageElement);
                        if ((!n || Mt(e.src)) && (!o || Mt(e.href.baseVal))) return;
                        const i = n ? e.src : e.href.baseVal,
                            r = yield Bt(i, Pt(i), t);
                        yield new Promise(t => {
                            e.onload = t, e.onerror = t;
                            const o = e;
                            o.decode && (o.decode = t), "lazy" === o.loading && (o.loading = "eager"), n ? (e.srcset = "", e.src = r) : e.href.baseVal = r
                        })
                    })
                }(e, t), yield function(e, t) {
                    return Qt(this, void 0, void 0, function*() {
                        const n = pt(e.childNodes).map(e => Zt(e, t));
                        yield Promise.all(n).then(() => e)
                    })
                }(e, t))
            })
        }
        var Xt = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        const en = {};

        function tn(e) {
            return Xt(this, void 0, void 0, function*() {
                let t = en[e];
                if (null != t) return t;
                const n = yield fetch(e), o = yield n.text();
                return t = {
                    url: e,
                    cssText: o
                }, en[e] = t, t
            })
        }

        function nn(e, t) {
            return Xt(this, void 0, void 0, function*() {
                let {
                    cssText: n
                } = e;
                const o = /url\(["']?([^"')]+)["']?\)/g,
                    i = (n.match(/url\([^)]+\)/g) || []).map(i => Xt(this, void 0, void 0, function*() {
                        let r = i.replace(o, "$1");
                        return r.startsWith("https://") || (r = new URL(r, e.url).href), Dt(r, t.fetchRequestInit, ({
                            result: e
                        }) => (n = n.replace(i, `url(${e})`), [i, e]))
                    }));
                return Promise.all(i).then(() => n)
            })
        }

        function on(e) {
            if (null == e) return [];
            const t = [];
            let n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
            const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
            for (;;) {
                const e = o.exec(n);
                if (null === e) break;
                t.push(e[0])
            }
            n = n.replace(o, "");
            const i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
                r = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
            for (;;) {
                let e = i.exec(n);
                if (null === e) {
                    if (e = r.exec(n), null === e) break;
                    i.lastIndex = r.lastIndex
                } else r.lastIndex = i.lastIndex;
                t.push(e[0])
            }
            return t
        }

        function rn(e, t) {
            return Xt(this, void 0, void 0, function*() {
                if (null == e.ownerDocument) throw new Error("Provided element is not within a Document");
                const n = pt(e.ownerDocument.styleSheets),
                    o = yield function(e, t) {
                        return Xt(this, void 0, void 0, function*() {
                            const n = [],
                                o = [];
                            return e.forEach(n => {
                                if ("cssRules" in n) try {
                                    pt(n.cssRules || []).forEach((e, i) => {
                                        if (e instanceof CSSImportRule) {
                                            let r = i + 1;
                                            const a = tn(e.href).then(e => nn(e, t)).then(e => on(e).forEach(e => {
                                                try {
                                                    n.insertRule(e, e.startsWith("@import") ? r += 1 : n.cssRules.length)
                                                } catch (t) {
                                                    console.error("Error inserting rule from remote css", {
                                                        rule2: e,
                                                        err: t
                                                    })
                                                }
                                            })).catch(e => {
                                                console.error("Error loading remote css", e.toString())
                                            });
                                            o.push(a)
                                        }
                                    })
                                } catch (i) {
                                    const r = e.find(e => null == e.href) || document.styleSheets[0];
                                    null != n.href && o.push(tn(n.href).then(e => nn(e, t)).then(e => on(e).forEach(e => {
                                        r.insertRule(e, r.cssRules.length)
                                    })).catch(e => {
                                        console.error("Error loading remote stylesheet", e)
                                    })), console.error("Error inlining remote css file", i)
                                }
                            }), Promise.all(o).then(() => (e.forEach(e => {
                                if ("cssRules" in e) try {
                                    pt(e.cssRules || []).forEach(e => {
                                        n.push(e)
                                    })
                                } catch (t) {
                                    console.error(`Error while reading CSS rules from ${e.href}`, t)
                                }
                            }), n))
                        })
                    }(n, t);
                return function(e) {
                    return e.filter(e => e instanceof CSSFontFaceRule).filter(e => $t(e.style.getPropertyValue("src")))
                }(o)
            })
        }

        function an(e, t) {
            return Xt(this, void 0, void 0, function*() {
                const n = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : yield function(e, t) {
                    return Xt(this, void 0, void 0, function*() {
                        const n = yield rn(e, t);
                        return (yield Promise.all(n.map(e => {
                            const n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                            return Yt(e.cssText, n, t)
                        }))).join("\n")
                    })
                }(e, t);
                if (n) {
                    const t = document.createElement("style"),
                        o = document.createTextNode(n);
                    t.appendChild(o), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
                }
            })
        }
        var sn = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };

        function cn(e) {
            return sn(this, arguments, void 0, function*(e, t = {}) {
                const {
                    width: n,
                    height: o
                } = wt(e, t), i = yield Ut(e, t, !0);
                yield an(i, t), yield Zt(i, t),
                    function(e, t) {
                        const {
                            style: n
                        } = e;
                        t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
                        const o = t.style;
                        null != o && Object.keys(o).forEach(e => {
                            n[e] = o[e]
                        })
                    }(i, t);
                return yield St(i, n, o)
            })
        }

        function dn(e) {
            return sn(this, arguments, void 0, function*(e, t = {}) {
                const {
                    width: n,
                    height: o
                } = wt(e, t), i = yield cn(e, t), r = yield At(i), a = document.createElement("canvas"), s = a.getContext("2d"), c = window.devicePixelRatio || 1, d = t.canvasWidth || n, l = t.canvasHeight || o;
                a.width = d * c, a.height = l * c, t.skipAutoScale || function(e) {
                    (e.width > bt || e.height > bt) && (e.width > bt && e.height > bt ? e.width > e.height ? (e.height *= bt / e.width, e.width = bt) : (e.width *= bt / e.height, e.height = bt) : e.width > bt ? (e.height *= bt / e.width, e.width = bt) : (e.width *= bt / e.height, e.height = bt))
                }(a), a.style.width = `${d}px`, a.style.height = `${l}px`, t.backgroundColor && (s.fillStyle = t.backgroundColor, s.fillRect(0, 0, a.width, a.height));
                const u = document.createElement("div");
                document.body.appendChild(u), u.style.position = "fixed", u.style.zIndex = "1000000", u.style.top = "0px", u.style.left = "0px", u.style.pointerEvents = "none";
                const p = "16px";
                return u.style.width = p, u.style.height = p, u.style.overflow = "hidden", u.style.opacity = "0.1", u.appendChild(r), B() && (yield ut(2500)(null)), yield new Promise(e => {
                    requestAnimationFrame(() => {
                        s.drawImage(r, 0, 0, a.width, a.height), document.body.removeChild(u), e(null)
                    })
                }), a
            })
        }

        function ln(e) {
            return sn(this, arguments, void 0, function*(e, t = {}) {
                return (yield dn(e, t)).toDataURL()
            })
        }
        var un = n(836),
            pn = n.n(un),
            fn = function(e, t, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((o = o.apply(e, t || [])).next())
                })
            };

        function hn(e) {
            return fn(this, arguments, void 0, function*(e, t = {}, n = 5e3) {
                const o = new AbortController,
                    i = setTimeout(() => {
                        o.abort()
                    }, n);
                try {
                    return yield fetch(e, Object.assign(Object.assign({}, t), {
                        signal: o.signal
                    }))
                } catch (t) {
                    throw t instanceof Error && "AbortError" === t.name && ne(`fetchWithTimeout: Fetch aborted for ${e} after ${n}ms`), t
                } finally {
                    clearTimeout(i)
                }
            })
        }
        var mn = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        const gn = B() ? 1 : 2,
            yn = e => mn(void 0, void 0, void 0, function*() {
                const {
                    screenshot: t
                } = e, n = yield hn("https://api.poki.io/screenshot", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        data: t,
                        p4d_game_id: z.gameID,
                        p4d_version_id: z.versionID
                    })
                }, 3e4);
                try {
                    if (200 === n.status) {
                        return "https://poki-user-content.com/" + (yield n.json()).source
                    }
                } catch (e) {}
                return null
            });

        function vn() {
            const e = Array.from(document.getElementsByTagName("canvas")).map((e, t) => {
                if (!(e => {
                        const t = window.getComputedStyle(e);
                        if ("none" === t.display || "hidden" === t.visibility || 0 === parseFloat(t.opacity || "1")) return !1;
                        const n = e.getBoundingClientRect();
                        return !(n.width <= 0 || n.height <= 0 || n.right <= 0 || n.bottom <= 0 || n.left >= window.innerWidth || n.top >= window.innerHeight)
                    })(e)) return null;
                const n = window.getComputedStyle(e);
                return {
                    canvas: e,
                    rect: e.getBoundingClientRect(),
                    zIndex: parseInt(n.zIndex, 10) || 0,
                    opacity: parseFloat(n.opacity || "1"),
                    order: t
                }
            }).filter(Boolean);
            return e.sort((e, t) => e.zIndex === t.zIndex ? e.order - t.order : e.zIndex - t.zIndex), e
        }
        const wn = () => mn(void 0, void 0, void 0, function*() {
                return ln(document.body, Object.assign(Object.assign({
                    filter: (e = !0, t => {
                        var n;
                        return !(["VIDEO", "TEXTAREA", "SCRIPT", "NOSCRIPT", "INPUT", "IFRAME"].includes(t.nodeName) || !e && "CANVAS" === t.nodeName || "IMG" === t.nodeName && !t.getAttribute("src") || (null === (n = t.classList) || void 0 === n ? void 0 : n.contains(pn().container)))
                    }),
                    width: window.innerWidth,
                    height: window.innerHeight
                }, (e => {
                    const t = window.devicePixelRatio || 1;
                    return {
                        canvasWidth: Math.max(1, Math.round(window.innerWidth * e / t)),
                        canvasHeight: Math.max(1, Math.round(window.innerHeight * e / t))
                    }
                })(gn)), {
                    backgroundColor: "#fff"
                }));
                var e
            }),
            bn = () => mn(void 0, void 0, void 0, function*() {
                const e = document.body.style.minWidth,
                    t = document.body.style.minHeight;
                document.body.style.minWidth = "100%", document.body.style.minHeight = "100%";
                let n = null;
                const o = vn();
                let i = new Promise(e => {
                    o.forEach(e => {
                        e.canvas.style.transform = "translateZ(2px)"
                    }), requestAnimationFrame(() => mn(void 0, void 0, void 0, function*() {
                        try {
                            n = yield wn()
                        } catch (e) {}
                        e(n)
                    }))
                });
                return i = i.finally(() => {
                    o.forEach(e => {
                        e.canvas.style.transform = "translateZ(0px)"
                    }), document.body.style.minWidth = e, document.body.style.minHeight = t
                }), i
            }),
            kn = (...e) => mn(void 0, [...e], void 0, function*(e = null) {
                let t = yield bn();
                if (t && t.length > 10) {
                    e && (t = yield((e, t) => mn(void 0, void 0, void 0, function*() {
                        const {
                            title: n,
                            thumbnail: o
                        } = t, i = new Image;
                        i.crossOrigin = "Anonymous";
                        const r = new Promise(e => {
                            i.onload = () => e(i)
                        });
                        i.src = e;
                        const a = new Image;
                        a.crossOrigin = "Anonymous";
                        const s = new Promise(e => {
                            a.onload = () => e(a)
                        });
                        a.src = "https://a.poki-cdn.com/images/screenshot-frame.png";
                        const c = new Image;
                        c.crossOrigin = "Anonymous";
                        const d = new Promise(e => {
                            c.onload = () => e(c)
                        });
                        c.src = `https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=128,height=128,fit=cover,f=auto/${o}`;
                        const l = new FontFace("TorusBold", "url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)").load(),
                            [u, p, f, h] = yield Promise.all([r, s, d, l]), m = document.createElement("canvas");
                        m.width = u.width, m.height = u.height;
                        const g = m.getContext("2d");
                        g.drawImage(u, 0, 0);
                        const y = m.width / p.width,
                            v = p.height * y,
                            w = m.height - v;
                        g.drawImage(p, 0, w, m.width, v);
                        const b = f.height * y;
                        ((e, t, n, o, i, r, a) => {
                            e.save(), e.beginPath();
                            const s = n + i,
                                c = o + r;
                            e.moveTo(n + a, o), e.lineTo(s - a, o), e.quadraticCurveTo(s, o, s, o + a), e.lineTo(s, c - a), e.quadraticCurveTo(s, c, s - a, c), e.lineTo(n + a, c), e.quadraticCurveTo(n, c, n, c - a), e.lineTo(n, o + a), e.quadraticCurveTo(n, o, n + a, o), e.closePath(), e.clip(), e.drawImage(t, n, o, i, r), e.restore()
                        })(g, f, 64 * y, w + 20 * y, b, b, 24 * y);
                        const {
                            fonts: k
                        } = document;
                        k.add(h);
                        const A = 226 * y,
                            S = w + 68 * y;
                        return g.textAlign = "left", g.textBaseline = "top", g.fillStyle = "#002b50", g.font = `700 ${56*y}px TorusBold,sans-serif`, g.fillText(n, A, S), m.toDataURL()
                    }))(t, e));
                    return yield yn({
                        screenshot: t
                    })
                }
                return null
            });

        function An() {
            let e;
            try {
                e = performance.getEntriesByType("resource").map(e => e.encodedBodySize).reduce((e, t) => e + t), e += performance.getEntriesByType("navigation")[0].encodedBodySize
            } catch (e) {}
            return e
        }
        let Sn, En = [],
            xn = "";

        function In() {
            return En
        }

        function Cn(e) {
            En = e
        }

        function Tn() {
            return xn
        }

        function Pn(e) {
            if ("" !== e && "once" !== e && "force" !== e && "on" !== e && "off" !== e) throw new Error(`Invalid playtest capture mode: ${e}`);
            xn = e, Sn = e ? performance.now() : void 0
        }
        n.dn(() => "undefined" != typeof navigator && /(iPad|iPhone|iPod)/gi.test(navigator.userAgent));
        const _n = "MacIntel" === window.navigator.platform && void 0 !== window.navigator.standalone && navigator.maxTouchPoints > 1;
        var Mn, On, Dn = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        const Ln = "desktop" === z.device ? 24 : 12,
            Bn = "Game tab in background",
            Rn = "desktop" !== z.device;
        let Nn = !1,
            jn = [],
            Fn = {
                height: 1,
                left: 0,
                top: 0,
                width: 1
            },
            Wn = null,
            Vn = null,
            Un = !1,
            Hn = null,
            zn = !1,
            Gn = !1,
            Kn = 0,
            qn = 0,
            $n = !1,
            Yn = "svg",
            Qn = "",
            Jn = 1,
            Zn = 1,
            Xn = 64,
            eo = 64,
            to = -1,
            no = -1,
            oo = null;
        const io = new Map;
        let ro = [],
            ao = [],
            so = null,
            co = null,
            lo = null,
            uo = null,
            po = null,
            fo = !0,
            ho = null,
            mo = null,
            go = null,
            yo = null,
            vo = null,
            wo = null,
            bo = 0,
            ko = [];

        function Ao(e, t = []) {
            Hn && (t.length > 0 ? Hn.postMessage(e, t) : Hn.postMessage(e))
        }

        function So() {
            ! function() {
                for (let e = 0; e < ro.length; e++) try {
                    ro[e].stop()
                } catch (e) {}
                ro = []
            }(),
            function() {
                for (let e = 0; e < ao.length; e++) try {
                    ao[e].readable.cancel()
                } catch (e) {}
                ao = []
            }()
        }

        function Eo() {
            uo && (uo.disconnect(), uo = null), lo && (clearInterval(lo), lo = null)
        }

        function xo() {
            so && (clearInterval(so), so = null)
        }

        function Io() {
            co && (clearInterval(co), co = null)
        }

        function Co() {
            po && (po.disconnect(), po = null)
        }

        function To(e) {
            const t = e.getBoundingClientRect();
            return t.width > 0 && t.height > 0 ? {
                height: t.height,
                left: t.left,
                top: t.top,
                width: t.width
            } : e.pokiHtmlDummyCanvas ? {
                height: window.innerHeight || e.height || 1,
                left: 0,
                top: 0,
                width: window.innerWidth || e.width || 1
            } : {
                height: e.height || 1,
                left: 0,
                top: 0,
                width: e.width || 1
            }
        }

        function Po() {
            Fn = jn.length ? To(jn[0]) : {
                height: 1,
                left: 0,
                top: 0,
                width: 1
            }
        }

        function _o(e, t) {
            return !!e && e.width === t.width && e.height === t.height
        }

        function Mo(e) {
            const t = function(e) {
                return jn[0] === e ? Fn : To(e)
            }(e);
            let {
                width: n,
                height: o
            } = t;
            n = Math.max(2, 2 * Math.floor(n / 2)), o = Math.max(2, 2 * Math.floor(o / 2));
            const i = _n ? 1024 : "desktop" !== z.device ? 640 : 1280,
                r = Math.min(i / n, i / o, 1);
            n = Math.max(2, 2 * Math.floor(n * r / 2)), o = Math.max(2, 2 * Math.floor(o * r / 2));
            const a = Math.min(1, Math.sqrt(3600 / (Math.ceil(n / 16) * Math.ceil(o / 16))));
            for (n = Math.max(2, 2 * Math.floor(n * a / 2)), o = Math.max(2, 2 * Math.floor(o * a / 2)); Math.ceil(n / 16) * Math.ceil(o / 16) > 3600;)
                if (n >= o && n > 2) n -= 2;
                else {
                    if (!(o > 2)) break;
                    o -= 2
                }
            return {
                height: o,
                width: n
            }
        }

        function Oo(e) {
            return Mo(e[0])
        }

        function Do() {
            mo && (clearTimeout(mo), mo = null), go = null
        }

        function Lo() {
            const e = go;
            mo = null, go = null, e && !Nn && zn && (e.width === Xn && e.height === eo || (yo = {
                height: e.height,
                width: e.width
            }, Ao({
                heightMultiplier: e.height / e.actualHeight,
                type: "playtestResize",
                videoHeight: e.height,
                videoWidth: e.width,
                widthMultiplier: e.width / e.actualWidth
            })))
        }

        function Bo(e) {
            if (!jn.length) return;
            Po();
            const t = jn[0],
                {
                    width: n,
                    height: o
                } = (i = t).pokiHtmlDummyCanvas ? {
                    height: Math.max(window.innerHeight || i.height || 1, 1),
                    width: Math.max(window.innerWidth || i.width || 1, 1)
                } : {
                    height: Math.max(i.height || 1, 1),
                    width: Math.max(i.width || 1, 1)
                };
            var i;
            const r = Mo(t);
            r.width < 16 || r.height < 16 ? Do() : r.width === Xn && r.height === eo ? (Do(), yo = null, vo = null) : _o(vo, r) || function(e, t, n) {
                if (_o(yo, e) || _o(vo, e)) return;
                const o = {
                    actualHeight: n,
                    actualWidth: t,
                    height: e.height,
                    width: e.width
                };
                go && go.width === o.width && go.height === o.height && go.actualWidth === o.actualWidth && go.actualHeight === o.actualHeight && mo || (mo && clearTimeout(mo), go = o, mo = setTimeout(Lo, 500))
            }(r, n, o);
            const a = Xn / n,
                s = eo / o;
            (e || n !== to || o !== no || a !== Jn || s !== Zn) && (to = n, no = o, Jn = a, Zn = s, Vn && !Un && (Vn.width = Xn, Vn.height = eo), Ao({
                type: "playtestLayout",
                heightMultiplier: Zn,
                widthMultiplier: Jn
            }))
        }

        function Ro() {
            Co(), jn.length && "function" == typeof ResizeObserver && (po = new ResizeObserver(() => {
                Bo(!1)
            }), po.observe(jn[0]))
        }

        function No(e, t) {
            return `${e}:${t}`
        }

        function jo(e) {
            return e.pointerType || "mouse"
        }

        function Fo(e) {
            return "number" == typeof e.pointerId ? e.pointerId : 1
        }

        function Wo(e) {
            const t = jo(e),
                n = Fo(e),
                o = No(t, n);
            let i = io.get(o);
            return i || (i = {
                clientX: e.clientX,
                clientY: e.clientY,
                id: n,
                leftDown: !1,
                pointerType: t,
                released: !1,
                rightDown: !1
            }, io.set(o, i)), i.clientX = e.clientX, i.clientY = e.clientY, i.released = !1, i
        }

        function Vo(e, t) {
            return Math.floor(e / t) % 2 == 1
        }

        function Uo() {
            const e = [];
            io.forEach(t => {
                const n = function(e) {
                    if (!jn.length) return null;
                    const t = jn[0],
                        n = t.width / Math.max(Fn.width, 1),
                        o = t.height / Math.max(Fn.height, 1),
                        i = (e.clientX - Fn.left) * n,
                        r = (e.clientY - Fn.top) * o;
                    return {
                        id: e.id,
                        leftDown: e.leftDown,
                        pointerType: e.pointerType,
                        rightDown: e.rightDown,
                        x: Math.max(0, Math.min(i, t.width)),
                        y: Math.max(0, Math.min(r, t.height))
                    }
                }(t);
                n && e.push(n)
            }), Ao({
                type: "playtestPointer",
                pointers: e
            }), io.forEach((e, t) => {
                e.released && io.delete(t)
            })
        }

        function Ho() {
            null !== oo && (cancelAnimationFrame(oo), oo = null)
        }

        function zo(e) {
            e.leftDown = !1, e.rightDown = !1, e.released = "mouse" !== e.pointerType
        }

        function Go(e) {
            (function(e) {
                let t = !1;
                return io.forEach(n => {
                    e && n.pointerType !== e || (zo(n), t = !0)
                }), t
            })(e) && (Ho(), jn.length && (Po(), Uo()))
        }

        function Ko() {
            jn.length && null === oo && (oo = requestAnimationFrame(() => {
                oo = null, jn.length && (Po(), Uo())
            }))
        }
        const qo = e => {
                if (!jn.length) return;
                let t = function(e) {
                    return io.get(No(jo(e), Fo(e)))
                }(e);
                if (t || "mouse" === jo(e) || 0 !== e.buttons) {
                    if (t = Wo(e), "mouse" === t.pointerType) {
                        const n = Vo(e.buttons, 4);
                        t.leftDown = Vo(e.buttons, 1) || n, t.rightDown = Vo(e.buttons, 2) || n
                    } else 0 !== e.buttons && (t.leftDown = !0);
                    Ko()
                }
            },
            $o = e => {
                if (!jn.length) return;
                ! function(e) {
                    const t = jo(e);
                    "mouse" !== t && e.isPrimary && Go(t)
                }(e);
                const t = Wo(e);
                "mouse" === t.pointerType ? 0 === e.button ? t.leftDown = !0 : 2 === e.button ? t.rightDown = !0 : 1 === e.button && (t.leftDown = !0, t.rightDown = !0) : t.leftDown = !0, Ko()
            },
            Yo = e => {
                if (!jn.length) return;
                const t = Wo(e);
                "mouse" === t.pointerType ? 0 === e.button ? t.leftDown = !1 : 2 === e.button ? t.rightDown = !1 : 1 === e.button && (t.leftDown = !1, t.rightDown = !1) : zo(t), Ko()
            },
            Qo = e => {
                if (!jn.length) return;
                zo(Wo(e)), Ko()
            },
            Jo = () => {
                Go()
            },
            Zo = () => {
                jn.length && (io.forEach(e => {
                    "mouse" === e.pointerType && (e.rightDown = !1)
                }), Ko())
            };

        function Xo() {
            Ao({
                type: "playtestClearHtmlCapture"
            })
        }

        function ei(e) {
            Qn = e, Ao({
                text: e,
                type: "playtestOverlay"
            })
        }

        function ti(e) {
            var t;
            let n = null;
            for (let o = 0; o < e.length; o++)
                if (!document.body.contains(e[o])) {
                    if (e[o].pokiHtmlDummyCanvas) continue;
                    n || (n = document.getElementsByTagName("flt-glass-pane"));
                    let i = !1;
                    for (let r = 0; r < n.length; r++)
                        if (null === (t = n[r].shadowRoot) || void 0 === t ? void 0 : t.contains(e[o])) {
                            i = !0;
                            break
                        }
                    if (!i) return !1
                }
            return !0
        }

        function ni() {
            const e = In();
            if ((null == e ? void 0 : e.length) && ti(e)) return e;
            const t = Tn();
            if ("force" === t) {
                const e = document.createElement("canvas");
                return e.width = window.innerWidth, e.height = window.innerHeight, e.setAttribute("data-poki-html-canvas", "true"), e.pokiHtmlDummyCanvas = !0, [e]
            }
            let n = 0,
                o = Array.from(document.getElementsByTagName("canvas"));
            if (0 === o.length) {
                const e = document.getElementsByTagName("flt-glass-pane");
                for (let t = 0; t < e.length; t++) {
                    const {
                        shadowRoot: n
                    } = e[t];
                    n && (o = o.concat(Array.from(n.querySelectorAll("canvas"))))
                }
            }
            let i = [];
            if (o.forEach(e => {
                    if ("true" === e.getAttribute("data-poki-no-playtest")) return;
                    const t = getComputedStyle(e),
                        o = parseInt(t.width, 10) * parseInt(t.height, 10);
                    o >= n && function(e) {
                        if (!e) return !1;
                        let t = e,
                            n = !0;
                        for (; t && t !== document.body;) {
                            const e = window.getComputedStyle(t);
                            if ("none" === e.display) return !1;
                            if ("hidden" === e.visibility) return !1;
                            if (n && (0 === t.offsetWidth || 0 === t.offsetHeight)) return !1;
                            "absolute" === e.position && (n = !1), t = t.parentElement
                        }
                        const o = e.getBoundingClientRect(),
                            i = window.innerHeight || document.documentElement.clientHeight,
                            r = window.innerWidth || document.documentElement.clientWidth;
                        return !(o.right < 0 || o.bottom < 0 || o.left > r || o.top > i)
                    }(e) && (o > n && (i = []), i.push({
                        canvas: e,
                        index: i.length,
                        style: t
                    }), n = o)
                }), 0 === i.length) {
                if ("on" === t) {
                    const e = document.createElement("canvas");
                    return e.width = window.innerWidth, e.height = window.innerHeight, e.setAttribute("data-poki-html-canvas", "true"), e.pokiHtmlDummyCanvas = !0, [e]
                }
                return []
            }
            return i.sort((e, t) => {
                const n = parseInt(e.style.zIndex, 10) || 0,
                    o = parseInt(t.style.zIndex, 10) || 0;
                return n < o ? -1 : n > o ? 1 : e.index - t.index
            }), i.map(e => e.canvas)
        }

        function oi() {
            for (let e = 0; e < ko.length; e++) ko[e]();
            ko = []
        }

        function ii() {
            Eo(), xo(), Io(), Do(), Co(), So(), oi(), Ho(), ho && (clearTimeout(ho), ho = null);
            try {
                Xo()
            } catch (e) {}
            if (Vn && Vn.parentNode && Vn.parentNode.removeChild(Vn), Hn) try {
                Hn.terminate()
            } catch (e) {}
            Pn(""), Vn = null, Wn = null, Un = !1, Hn = null, zn = !1, Gn = !1, Nn = !1, Kn = 0, qn = 0, $n = !1, Yn = "svg", Qn = "", to = -1, no = -1, Jn = 1, Zn = 1, io.clear(), jn = [], wo = null, bo = 0, yo = null, vo = null
        }

        function ri(e) {
            const t = wo;
            ii(), null == t || t.onClose(e)
        }

        function ai(e, t = {}) {
            const n = t.force || !1,
                o = {
                    code: n ? 1011 : 1e3,
                    reason: e,
                    wasClean: !n
                };
            if (Nn) n && ri(o);
            else {
                if (Nn = !0, Eo(), xo(), Io(), Do(), Co(), oi(), Ho(), ho && (clearTimeout(ho), ho = null), So(), Hn && !n) try {
                    return void Ao({
                        code: o.code,
                        reason: e,
                        type: "playtestStop"
                    })
                } catch (e) {
                    ne("PLAYTEST: failed to stop recorder worker cleanly", e)
                }
                ri(o)
            }
        }

        function si(e = "Playtest recording stopped") {
            ai(e)
        }

        function ci(e) {
            return Dn(this, void 0, void 0, function*() {
                const t = yield function(e) {
                    return new Promise((t, n) => {
                        const o = new Image;
                        let i = !1;
                        const r = (e, t) => {
                            i || (i = !0, o.onload = null, o.onerror = null, e(t))
                        };
                        o.onload = () => r(t, o), o.onerror = () => r(n, new Error("Failed to load HTML capture image")), o.crossOrigin = "anonymous", o.decoding = "async", o.src = e, "function" == typeof o.decode && o.decode().then(() => {
                            r(t, o)
                        }).catch(() => {})
                    })
                }(e);
                return createImageBitmap(t)
            })
        }

        function di(e, t) {
            return Dn(this, void 0, void 0, function*() {
                let n = null;
                try {
                    const o = yield((e, ...t) => mn(void 0, [e, ...t], void 0, function*(e, t = "svg") {
                        const n = ["VIDEO", "TEXTAREA", "SCRIPT", "NOSCRIPT", "INPUT", "IFRAME"];
                        e || n.push("CANVAS");
                        const o = e => {
                                var t, o;
                                return !(n.includes(e.nodeName) || "IMG" === e.nodeName && !e.getAttribute("src") || (null === (t = e.classList) || void 0 === t ? void 0 : t.contains(pn().container)) || "true" === (null === (o = e.getAttribute) || void 0 === o ? void 0 : o.call(e, "data-poki-playtest-skip")))
                            },
                            i = document.body.style.minWidth,
                            r = document.body.style.minHeight,
                            a = document.body.style.backgroundColor;
                        let s;
                        document.body.style.minWidth = "100%", document.body.style.minHeight = "100%", e || (document.body.style.backgroundColor = "transparent");
                        try {
                            const e = "png" === t ? ln : cn;
                            s = yield e(document.body, {
                                filter: o,
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        } catch (e) {
                            console.warn(`%cPOKI:%c failed to generate ${t}`, "font-weight: bold", "", e)
                        }
                        return document.body.style.minWidth = i, document.body.style.minHeight = r, document.body.style.backgroundColor = a, s
                    }))(e, t);
                    if (!o || o.length <= 10) return !1;
                    n = yield ci(o);
                    const {
                        width: i,
                        height: r
                    } = function(e, t) {
                        if ("png" === t) return {
                            height: e.height,
                            width: e.width
                        };
                        let n = Xn,
                            o = eo;
                        return jn.length > 0 && (n = jn[0].width || n, o = jn[0].height || o), {
                            height: o,
                            width: n
                        }
                    }(n, t);
                    return Ao({
                        bitmap: n,
                        type: "playtestHtmlCapture",
                        height: r,
                        sequence: qn + 1,
                        width: i
                    }, [n]), n = null, qn++, Kn = 0, !0
                } finally {
                    try {
                        null == n || n.close()
                    } catch (e) {}
                }
            })
        }

        function li(e) {
            return Dn(this, arguments, void 0, function*(e, t = {}) {
                const n = Tn(),
                    o = t.primary || e || "force" === n,
                    i = e || "force" === n;
                if (!o && $n) return;
                if (!zn || !Wn) return;
                const r = o ? Yn : "svg";
                try {
                    yield di(e, r)
                } catch (t) {
                    if (function(e) {
                            return "DataCloneError" === (null == e ? void 0 : e.name) && /Non-origin-clean ImageBitmap/.test((null == e ? void 0 : e.message) || "")
                        }(t)) {
                        const t = "non-origin-clean ImageBitmap transfer blocked";
                        if (o && "svg" === r) {
                            try {
                                if (yield di(e, "png")) return Yn = "png", void ne("PLAYTEST: HTML capture using PNG fallback", t)
                            } catch (e) {
                                ne("PLAYTEST: HTML capture PNG fallback failed", null == e ? void 0 : e.name, null == e ? void 0 : e.message)
                            }
                            i ? si("HTML capture failed") : ne("PLAYTEST: HTML capture skipped", t)
                        } else i ? (ne("PLAYTEST: HTML capture blocked", t), si("HTML capture failed")) : o ? ne("PLAYTEST: HTML capture skipped", t) : function(e) {
                            $n = !0, Pn(""), Eo(), Xo(), ne("PLAYTEST: HTML capture disabled", e)
                        }(t);
                        return
                    }
                    ne("PLAYTEST: ui canvas error", null == t ? void 0 : t.name, null == t ? void 0 : t.message, null == t ? void 0 : t.stack), Kn++;
                    const n = Tn();
                    ("on" === n || "force" === n) && Kn > 10 && si("HTML capture failed")
                }
            })
        }

        function ui() {
            if (Nn) return;
            const e = Tn();
            if ("once" === e) {
                if (!zn || !Wn) return;
                return Pn(""), Eo(), void li(!1, {
                    primary: !0
                })
            }
            if ("off" === e) return Pn(""), Eo(), void Xo();
            zn && Wn && function() {
                const e = Tn();
                if ("on" !== e && "force" !== e) return void Eo();
                if (lo) return;
                uo || (fo = !0, uo = new MutationObserver(() => {
                    fo = !0
                }), uo.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    characterData: !0
                }));
                const t = () => {
                    if (!Wn || !jn.length) return;
                    const e = !!jn[0].pokiHtmlDummyCanvas;
                    !e || jn[0].width === window.innerWidth && jn[0].height === window.innerHeight || (jn[0].width = window.innerWidth, jn[0].height = window.innerHeight, Bo(!1));
                    let t = !1;
                    e && document.getElementsByTagName("canvas").length > 0 && (t = !0), !t && fo && (t = !0), t && (fo = !1, li(e))
                };
                t(), lo = setInterval(t, 1e3)
            }()
        }

        function pi() {
            if (So(), !zn) return;
            const e = jn.filter(e => !e.pokiHtmlDummyCanvas);
            if (0 !== e.length) try {
                if (B()) {
                    const t = [];
                    for (let n = 0; n < e.length; n++) {
                        const o = e[n].captureStream(Ln).getVideoTracks()[0];
                        ro.push(o), t.push(o)
                    }
                    return void Ao({
                        tracks: t,
                        type: "playtestSourceTracks"
                    }, t)
                }
                const t = [];
                for (let n = 0; n < e.length; n++) {
                    const o = e[n].captureStream(Ln).getVideoTracks()[0],
                        i = new window.MediaStreamTrackProcessor({
                            track: o
                        });
                    ro.push(o), ao.push(i), t.push(i.readable)
                }
                Ao({
                    readables: t,
                    type: "playtestSourceReadables"
                }, t)
            } catch (e) {
                ne("PLAYTEST: setPlaytestSoureCanvasses error", e), si("Failed to capture source canvasses")
            } else Ao({
                type: "playtestClearSources"
            })
        }

        function fi(e) {
            return Dn(this, void 0, void 0, function*() {
                jn = e, bo = 0, Nn || (Po(), Ro(), Bo(!0), pi())
            })
        }

        function hi() {
            te("PLAYTEST: visibility change", document.visibilityState), ho && (clearTimeout(ho), ho = null), "visible" !== document.visibilityState ? (Go(), ei(Bn), ho = setTimeout(() => {
                si("Game tab in background")
            }, 6e4)) : Qn === Bn && ei("")
        }

        function mi() {
            te("PLAYTEST: resize", window.innerWidth, window.innerHeight), Po(), Bo(!1)
        }

        function gi(e) {
            var t, n, o;
            te("PLAYTEST: orientationchange", null === (o = null === (n = null === (t = null == e ? void 0 : e.target) || void 0 === t ? void 0 : t.screen) || void 0 === n ? void 0 : n.orientation) || void 0 === o ? void 0 : o.type), Po(), Bo(!1)
        }

        function yi(e) {
            var t;
            te("PLAYTEST: orientation change", null === (t = e.target) || void 0 === t ? void 0 : t.type), Po(), Bo(!1)
        }

        function vi() {
            Po()
        }

        function wi({
            data: e
        }) {
            if (e && "object" == typeof e) {
                if ("playtestReady" === e.type) return zn = !0, Bo(!0), Uo(), ei(Qn), pi(), ui(), Ao({
                    type: "playtestStart"
                }), void(null == wo || wo.onReady());
                if ("playtestRecordingStarted" === e.type) return Gn = !0, void(null == wo || wo.onRecordingStarted());
                if ("playtestError" !== e.type) {
                    if ("playtestClosed" === e.type) {
                        const t = e.event;
                        return null == wo || wo.onClose(t), void ii()
                    }
                    if ("playtestResized" === e.type) return Xn = e.videoWidth || Xn, eo = e.videoHeight || eo, yo = null, vo = null, void Bo(!0);
                    "playtestResizeFailed" === e.type && (yo && (vo = yo), yo = null, Bo(!0))
                } else null == wo || wo.onError(e.error || "unknown worker error")
            }
        }

        function bi(e) {
            null == wo || wo.onError(`worker-start: ${e.message}`), ai("Playtest recorder worker error", {
                force: !0
            })
        }

        function ki() {
            if (!Nn) {
                if (!jn.length || !ti(jn)) {
                    const e = ni();
                    return e.length ? void fi(e) : 0 === bo ? void(bo = performance.now()) : void(performance.now() - bo >= 500 && si("No source canvasses found"))
                }
                bo = 0, Bo(!1)
            }
        }

        function Ai(e, t) {
            if (Hn || Nn) return !1;
            Nn = !1, jn = e, wo = t.callbacks, Kn = 0, qn = 0, bo = 0, Po(), Ro();
            const {
                width: n,
                height: o
            } = Oo(e);
            Xn = n, eo = o, Bo(!0);
            const i = (Vn = null, Un = !1, new OffscreenCanvas(Xn, eo));
            return Wn = i, Hn = function() {
                    const e = new Blob(['"use strict";let canvas=null,ctx=null,encoder=null,socket=null,ready=!1,started=!1,shuttingDown=!1,closeNotified=!1,fps=24,bitrate=1e6,videoWidth=64,videoHeight=64,nextKeyFrame=0,forceNextKeyFrame=!1,frameCount=0,frameIntervalId=null,savePacket={},showMouseCursor=!0,widthMultiplier=1,heightMultiplier=1,htmlSequence=0,htmlWidth=0,htmlHeight=0,htmlBitmap=null,screenOverlay="",processors=[],readables=[],readers=[];const latestFrames=[];let mouseBitmap=null,leftClickBitmap=null,rightClickBitmap=null;const pointerStates=new Map;function notifyError(error){postMessage({type:"playtestError",error})}function notifyResized(){postMessage({type:"playtestResized",videoHeight,videoWidth})}function notifyResizeFailed(width,height){postMessage({type:"playtestResizeFailed",videoHeight:height,videoWidth:width})}function notifyClosed(event){closeNotified||(closeNotified=!0,postMessage({type:"playtestClosed",event}))}async function loadBitmapFromDataURL(dataUrl){const response=await fetch(dataUrl),blob=await response.blob();return createImageBitmap(blob)}async function loadCursorAssets(){mouseBitmap?.close(),leftClickBitmap?.close(),rightClickBitmap?.close(),[mouseBitmap,leftClickBitmap,rightClickBitmap]=await Promise.all([loadBitmapFromDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAYAAACqhkzFAAADE2lDQ1BJQ0MgcHJvZmlsZQAAeNp9kk9s21Qcxz+2X92qCh4qYRqoqnIAKqoNma6gbkAhadI/tOuyJB1t4IDrOHUSx7ZsZyw9IuAIk+AAJ1BXCQ4cOMDWgZDQDttlEoi/EkIc0DQuO1ExTYIqHOKsOfEu7/s++r7v7/d+eiB2DN93BNB0o6Awn0mtrZdTg38i8TAjPMghwwz9dD6/DNDb+5YEd35GAvjhmOH7zpWvPt3rnJoYe2f/8/GxV3N3+f81XLFCE/gX5C9NP4hA2QXyr0V+BGIISAZr62UQo0Bys6t1ILnR1VkgGZQKsyDWgJRpGxUQ54GjG318s083nZYZ9zAGJIJWYRXQQDofNopLsX7LNHJF4H6Q3rOtxWVAgLTjR5lC7PmkGsytxp5Ldmuhl3OtFi2WYv1jw1sqAMMg/WGGs+XeXXdj5TSQAOl2q7GajvndipXN9TyBV4g9srpll14CVJBHwnPFHDAC8pEte3Yl5hN148V87NctZz6uKz/rR/nT9+o6K8vAYZDnrPDgjZFdWuhq+ZUoKPXuOtXa3GKcec4OFgqxft138su9TCPIzQNJkN+23NVil8vbFSO7FOd8JkbFjHhOTIuMmBEvkKVGiI+DRZ08Bi4RBg4OxsCtge85hYdLjQiPoO9k0SJgiRp1LBy2pDMUMbGxCGjifZG8uvNTYnfoekSRBvUuF0kxLdLiefGMeEqcIE2VmvwQBvX3vfbJszYZajhUCGlwk4BmdaZ98qytX9cv6lf0X/Tb+o7yobKr3FC+Vi6TwcKK/fdqa0PaMS2tTWhJbVAb1R4lR4MAA5cVbtImIuIOZQxCHDxcdUodV6fUx0mp42pWPaE+qT7dNxuDNkUa3CKgCX1/VwIS8ayngFFm8fBpE1BjE5uIFGn8eMYpFnExeYKjpJhEZ5Lja+vlVDdu7wwSIB2+ccC8bZj+G5QLB2zjA7j8Jhz59YA98hEcegMufesbgQGAAsjVKvz1Mdy3Dg98B8Mvh9Xjk93uExkY+L3T2XsMBt+F/Qudzj/bnc7+RVB+g2/c/wD2jOYIAU+O+QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQpSURBVHjapFZLLFx9FD9z74x2COod72eQUCLSSGhrPOoRFhY23xcaYtdWx6O0lSbNJxQpY6ZtpG2w6aIWFgRhiIVHLBoiLLxJBB2PIMSMx2B6zr+9k2lSH6Mnubn/3HPv75zzO68rSklJKQoPD1fs7u6CwWCAs7MzEIlExvv5+Tl7TufT09PfdPSc9CR6vR54ngd+YWFhxMrK6lZgYKBaq9UaPza9kwjgpjoSQU86juOAx/PLxcXFu9bW1qd+fn5DBwcHfw0ox8tyfn4+3tLSUu/v7z+k0+n+CvA5AdJD9DQBPT1B0GFTT80B5PAsIWVcXBxT9PT0vJmYmHjh5OQE1xEC5MlKU1MTtLa2sofd3d1Vk5OT1wJlScHLIicnB+Lj45nrg4ODFH6ira2tztvbe4Q4NYfDMgJMS0uDoKAgFvrx8TEMDw8DJuqBjY2NlkAPDw+vxqHol0YsFhvdrqqqguLiYnZWq9Vvp6ennzk4OFwpZPFFitraWmakpqaGEvWWnMDiV+zs7FyalAuluroaioqKhOzXzczMFF/mKXdZCHV1dcbwe3t7a+fm5uT/B8pdhRcKv6CgQCgp5ezsbAGBCgkxG5Ckvr4eCgsL2bmvr68eh0r+nzzlzClahUIBcrlc8PQdltVTe3v73zzlzO0EpVIJZWVlAqeqpaWlJ6aectfp18rKSmhoaBDq9D2CPrazs2Oeii/7mKY01SMNX+qWlZUV2NzcBBx1gF0E+/v7BPohNjZWjFNKJaZO+VO2BNne3obk5GRYX1/Xb2xsSC56b2BgQImGpRd6mJeXB1lZWay3iSMcaQxMKpVuHx0d6XASLXt6eq7iLllFL1fRO42Hh8eeEVBYNjQYSktLobm5Gdra2piH7e3tgIOXNT/2eTb2dndXVxckJSXByckJ0Nnd3R0QEHiM+BWGLFGpVGBhYQGRkZFnHR0dLFnEGYWL1mFtbQ3GxsaIT9uKioqvBI4UgEajgeXlZXB1dWW8klUt0djS0mJITEzU0UTCLaiJiIhQ0xmtGkhwJRDR7GpsbJRRcvAbyM/PBy8vL2a4pKSEVin/HN+/QdMa0y9BS98x5HsxMTHv+vv7X+N0EaWmpoKvry84OjpSQdPwvY27/DNFEBAQwAAp20QbhVyKBymFiB98y8jIuB8VFbVKSxvJd8a+vYOh6mUyGd/Z2Qmjo6OwtbXlhpwthYWFTe7t7TFKcAX/nIf4F8DA0tPTW3De/Yt8GMgaJSchIeE/9OjR+Pi4JDg42FgBPj4+A7gevru4uBj/LJydnRmPRP5NtP6xvLz8H+KSwCg5tEcwlE38VWkQgHBFDGVnZydlZmbK3Nzc+smoRCJh7wuVIs7NzX2IJfEFC5d1A2WPSoE2A/3vREdHv5+amgoPCQn5FBoa+oWooMzSu6blJsgPAQYACgtfMJolu7EAAAAASUVORK5CYII="),loadBitmapFromDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArGSURBVHgBvVlbbFxHGZ451z273rXXsWt7k5RESpwoJqQpqdI2hTiNeQDaB0COoAIkHgolECQuEpc+eA0SD6ihBKrmIU+FloK3SJFIoWpDurmASy5qIbEJJaI0TryRb3vzXs5lZpg5O7N79vTs2gkVRxrP8dkzM9988/3/P/MfCN6HixACxwGA6fFxaXB2AGYTGRgfGCCJTIak6e/DY2N4jL4GISTgf7wguMPLBTk+rloj39srK+TDsqrvkSD4kARAlyTBGHsHYVKg1bsIo+sEgb+Zjnk69NpT6bGxMftOwd8uYDg6OiGte2Rdf2zLzq+rmv7VkAI7dRkAnSJVaJFpjxDWOsYUEqLFocVEAFRpMR0yYznOmepy/kfvHD14LZVKodsCsNoXk8mkZO38Yq/Wn0jquv5EhwpAWAHAoGBDtGgcsMTBuoABB0xvLFpMWioOAGValmkxbfRCaak0/pOPxa6tlvFVAR4dHZW3fOdX3zI07cmYBjujFGwHBRumdYiC1ChglQGGNcCssNEJqRXGsM0BM5ZLTq0ULQAKJpkplys/3jH78rEDBw6wObYFLq+AFY4mk9rWL/z0F7Gw/v3eEAytCQHQrQMQp6VTqxXGdkSpMS5Yd5mn9zpfAVYb/H+2GkxC7qrIsBMo6iMzxqa7doTzr50/fx7dMcMHJ6b6ezZseSluyHsYyC4OMMLlwICotAdVrmlXsCs6xi7NVBagJgvBNJMFY5rJokBZztGyWAUga5LL5euXR5769I550ILplgx//NAhffPw5891h+VdvQYAPXqNWQY6ptZYDQewyKShcj2L2r3nE2OyYc9lLiGhe9mdKOxD4Z4HNtrSr996K+2sGvBwMqk8+JkfHuky1E/2UgkIGXTREuXLz5aXgW3Sr0fHopa55xC1EgBWGCq7MJDu1u55oGertP7VS5dO4BUBM2/QP/Ltx2ORcJKB7WaAuV5jQgqcVTG4cGWilribgJ7/pdqjOpveNl4ZMR04UNklDW0v7V+vTKbT6SZpSH7A5d1f2xwNh5+Mc8NiEohyw3KXXeHG4mERegYVF/QVwbbCQbJVMbiBshWLcfvo4mNGdPUHc9tG72rLMIteZ7Pqkbih7OkJNQAzZusS4Iyy5YewMePV+EfxjggsQRMl9WADdWB0Rfete/iVdPo5HMjwd19ZGDQ09TGmU1Ei3BsIrfo1J4Bwh9A8OAgA7fEmjC3GuM7dYJgbc5TXRkj9SnnnQBPLdYZZcOjf/9jPug15O9Nt3OMNDG5cXgmIpfaChh6g0PM88PL2ARvtGLuI8mkTHh2VCHp4vXpKaLnOcGRoSA2p8kfrzt/HrOwDKwZYiVHiK8A3QcmjaTegcFfJXCbDoemhJ2ZnQUi0cwEz7fbu/+awpkjrhCGISCTACqtuB84Lxg/MvyLiR2EHwuUJ0AKHocJY52e/MSyau4BpDJc0Rd/nuivJEwA8EQy2AbaaXUugnnkteXy3CDgMeIgTF1LVe9kusQ44Hh+hgOXtutTQapMMQINdYWBwFYDagfdKRLDslYcqN4DLurYHgJRcB2xZGVmSpbvr4RQ2bxWF028FFraZAPG1IZ42TX1AT1AB3INwPJKifDA+NKQIwLAUpr9BuF4WeuKmKGbNem9lUN77dtolvucAtJ64N6TzQ0Gnc92oMUwNDkQ7DLp/hjExQxjQcdAgQfekRd3Kvb1nHNh8X6ulKI4xsQLocqlAIonO60voj0ABdStDCvLDrdqRoPehry17IefucyBVAqRGF2cPC6wl9rzkB+kH1I61Vs/aaZk9E3voZsPERTleI9WVxI3LGYIIKSB+pMEcuDjigIBBVvIK7TTvBS2eYX5D+NiYRzy28ScI3SyULPck4jKsrzUItsyr7EebnwzYy8g361ZAVgIV9E5QMHHDMmicThx+gLVtdCPqQHfxXYaL9i3HqZYnTX66tXkRcd0rj1aurRW4VvJo0jRp7CNEaoDxyQrDhBxryrYlTPMZhDFMPrJxIzaXly9XnVr+wEaN8xebsVgiQIINxg+ulYG289WINFICgjA3j0FLeSn35677hhymBlfIV65cwfN/+O3ZKiIFdkCs8KQHA25zHQWdv4MMDwYw6H/WBJo0ki0if8HGrojioNm5l58/t2bpPDUzUrO8kZER3KWp1Uoh/8syT3SwRlVcWxaHNJaLkGbWWmnar9GgwFI3cB9YttIlm+Oomn9VwnZlamobqTNM98L4JlxrLr155liRJzlYA3EcdyWCm0G3c2sk4N4vF+zVqwDryQq5iRaKIf/23w+jxWV7aGjUbeoCZsiHOqfR8tU3b5XzhefzVu1l0bDMDUB4EOxjO4jdoPv6JDyuU2zUKx6i2NgFNn5x+bhz5dy/jIc2WzRmNACzPijlCKugeuPsH58uWKSYt2tJDgG6ghryEKD9xuVn2c+0mCTyMGsKCXBm2biMsEIFZUrvTB2WOsLl7MmTdROqnzhSqQO4e3O36czM3MgvLjyTM2kmxuKN+azLvHObH2H8bo+A1qHXm2dzSLMEirx/NibLArE6v3DrmcKFU/+UF5FNM5z1Q2jTqfkTu3eTTNkG5uULU/qmnX1QD233bobYwFLAqYPwP36JEM/yuwHBA9bkXsCbrlriKaulbO6F2d8ffTrioOLc3EVreno6GHA6/ToY2nAawA6dZKcuToa37dpDZCUBAxgTGhQ+2vvMGwAcn8uyUEOvQqtsJZcoqwsMbMW+OvObZ7/s2FK+uICqqdSzTclBX+ZnHExNvY5PXPwTcYhBUG7+jDQwuJemj3oIbA0Ke4Ah3ABqc6AmB1oVYBH3ABYHW60xu1iqXpw7ffxLShXMgUKuPDgIbH/mJ9AzTUxMyJOTQFuQ342qNo4PfOrxsc7u+Ofco7/G8wbisKo0En1iww89Pgx5tO5Pahc8oPNUBjd/d2y8RJxc3FxTymbjJrWr96Re5RaAwRtvvESyloZVrOH8Py5Mgrs+sOBoka0OkKLu8nIGhbsTcd/yhlSnsfxMq0WnIYGsWZPBYoUUc/PzR/59/OhhyVYLSlguL9/qDwTbkmFxDQ8nlegg0DpoigCqSiR+z0ODXVvvPRSJRh+N8sRgmKda6+cv2JyBr8sDNyYh/G0pl31x8dyrP89nrmWIHSo5EakEbqyzJiZGcatPCG0Bs50cTQHILMlCd/whyTHCCFpGdNv9m2Lb7z8YNoz7dFUeMDzfOLzZSKZ1sVW0kPAMpFjJzr84/5dTz+HZ/8zZGFUcKJcH+8wKfZ0GiCRuh6ktYHGxFOzs7ICsKI5ekfOGBSxdMWXdArLat//RB8Nr+ncrhrFFUZS1sqr2Q0nqcAFjvEwwKdpm9W2rlL9YzeamF0+fmEQEm1CRLGsZmdFeuarkuqqJRAatBHbVgNlVYzsl9/ffUkpGRSPzuZDd2aE4FlEMIqsEO7Ij0f21ItOUgUwwYlxbQCUAOxg6qgYwItDBFWRLKrSUSJ+F52bsDRv2OsnkPnFWWPFaNWAPcjiaSknxk1kqgIyapXkZQ8UKMVSZFCzXiE2JSPQrA7AUh4QwBYojGMo2QpJlR0zgZBPAAXQrkEqNUkZv7wPj7QOu46ZeezwppdNAGhychYnECLw0O+0mO7oqkVq/ffTbCJKx4yjYNK/gRCLhWj5den8E//9fLKHI2Gd6Z4U+ce8BK+y39+n6L5YV4ArrvzyVAAAAAElFTkSuQmCC"),loadBitmapFromDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdZdEcIwDAfwZAqQgAQs4AAHIAEHzAlSWgfMARZAQUjZ9rDbR5M22f+uzdaX30OvaREUIaIDlxuPVCMiRrAOIw+a5zngrsiYlwmWQWwwIVKHKZEyrBDRYZWIDDNCtjFjZBlzQsaEZCB/HLm+wTfnhqcT+OfawD75Jijy+IBvuv/M+3Qnv4QJyQst2Wf1LFli2e5ggYn7XQ2m7uAlWPGdpMGqb1kJZvZuaN2RDBakCIIi1Hf6y/DbaR6QP+1P5pe98AyNAAAAAElFTkSuQmCC")])}function closeReadersAndProcessors(){for(let i=0;i<readers.length;i++)try{readers[i].cancel().catch(()=>{})}catch{}processors=[],readables=[],readers=[],function(){for(let i=0;i<latestFrames.length;i++)latestFrames[i]?.close();latestFrames.length=0}()}function isSocketOpen(){return!!socket&&socket.readyState===socket.OPEN}function sendSocketJSON(packet){isSocketOpen()&&socket?.send(JSON.stringify(packet))}async function getSupportedEncoderConfig(width,height){const mutations=[c=>c,c=>({...c,hardwareAcceleration:void 0}),c=>({...c,latencyMode:void 0}),c=>({...c,bitrateMode:void 0}),c=>({...c,hardwareAcceleration:void 0,latencyMode:void 0}),c=>({...c,hardwareAcceleration:void 0,bitrateMode:void 0}),c=>({...c,latencyMode:void 0,bitrateMode:void 0}),c=>({...c,hardwareAcceleration:void 0,latencyMode:void 0,bitrateMode:void 0})],baseConfig={codec:"avc1.42001f",width,height,bitrate,framerate:fps,hardwareAcceleration:"prefer-hardware",alpha:"discard",bitrateMode:"variable",latencyMode:"quality",avc:{format:"annexb"}};let supportedConfig=null;for(let i=0;i<mutations.length;i++){const candidate=mutations[i]({...baseConfig});try{const result=await VideoEncoder.isConfigSupported(candidate);if(result.supported&&"annexb"===result.config?.avc?.format){supportedConfig=result.config;break}}catch{}}if(!supportedConfig)throw new Error(`VideoEncoder config not supported: ${JSON.stringify(baseConfig)}`);return supportedConfig}async function createConfiguredEncoder(width,height){const supportedConfig=await getSupportedEncoderConfig(width,height),nextEncoder=new VideoEncoder({output(chunk){if(!started||!isSocketOpen())return;const buffer=new ArrayBuffer(chunk.byteLength);chunk.copyTo(buffer),function(buffer){isSocketOpen()&&socket?.send(buffer)}(buffer)},error(err){notifyError(`VideoEncoder error at ${frameCount}: ${err instanceof Error?err.message:err}`)}});try{nextEncoder.configure(supportedConfig)}catch(err){try{nextEncoder.close()}catch{}throw err}return nextEncoder}async function configureEncoder(){encoder=await createConfiguredEncoder(videoWidth,videoHeight)}function setLayout(data){widthMultiplier=data.widthMultiplier||1,heightMultiplier=data.heightMultiplier||1}function clearHtmlCapture(){htmlSequence=0,htmlWidth=0,htmlHeight=0,htmlBitmap?.close(),htmlBitmap=null}function getPointerKey(pointerType,id){return`${pointerType}:${id}`}function createPointerRenderState(pointer){return{...pointer,leftClickState:{drawSize:0,previousMouseDown:!1},rightClickState:{drawSize:0,previousMouseDown:!1}}}function updateClickState(state,mouseDown){var value;mouseDown&&!state.previousMouseDown&&(state.drawSize+=20,state.drawSize=(value=state.drawSize,Math.max(60,Math.min(100,value)))),state.drawSize-=2,state.drawSize=mouseDown?Math.max(state.drawSize,40):Math.max(state.drawSize,0),state.previousMouseDown=mouseDown}function drawClick(pointerState,bitmap,state){if(!ctx||!bitmap)return;if(state.drawSize<=0)return;const halfDrawSize=state.drawSize/2,drawX=pointerState.x*widthMultiplier-halfDrawSize,drawY=pointerState.y*heightMultiplier-halfDrawSize;ctx.drawImage(bitmap,drawX,drawY,state.drawSize,state.drawSize)}function getFrameTiming(frameIndex,currentFPS){return{duration:Math.round(1e6/currentFPS),timestamp:Math.round(frameIndex*(1e6/currentFPS))}}function createEncodingFrame(source,frameIndex,currentFPS){return new VideoFrame(source,{...getFrameTiming(frameIndex,currentFPS),alpha:"discard"})}function encodeFrame(source){if(!encoder||!source)return;const now=performance.now(),keyFrame=forceNextKeyFrame||now>=nextKeyFrame;keyFrame&&(forceNextKeyFrame=!1,nextKeyFrame=now+500);const frame=createEncodingFrame(source,frameCount,fps);encoder.encode(frame,{keyFrame}),frame.close(),frameCount++}function tick(){try{pointerStates.forEach((pointerState,key)=>{updateClickState(pointerState.leftClickState,pointerState.leftDown),updateClickState(pointerState.rightClickState,pointerState.rightDown),"mouse"===pointerState.pointerType||function(pointerState){return pointerState.leftDown||pointerState.rightDown||pointerState.leftClickState.drawSize>0||pointerState.rightClickState.drawSize>0}(pointerState)||pointerStates.delete(key)}),function(){if(canvas&&ctx){ctx.clearRect(0,0,canvas.width,canvas.height);for(let i=0;i<latestFrames.length;i++){const frame=latestFrames[i];frame&&ctx.drawImage(frame,0,0,frame.displayWidth,frame.displayHeight,0,0,canvas.width,canvas.height)}htmlBitmap&&ctx.drawImage(htmlBitmap,0,0,htmlWidth||htmlBitmap.width,htmlHeight||htmlBitmap.height,0,0,canvas.width,canvas.height),function(){if(!ctx)return;const drawContext=ctx;pointerStates.forEach(pointerState=>{if(drawClick(pointerState,leftClickBitmap,pointerState.leftClickState),drawClick(pointerState,rightClickBitmap,pointerState.rightClickState),!showMouseCursor||!mouseBitmap||"mouse"!==pointerState.pointerType)return;const scalar=.5*Math.max(widthMultiplier,heightMultiplier),drawWidth=mouseBitmap.width*scalar,drawHeight=mouseBitmap.height*scalar;drawContext.drawImage(mouseBitmap,pointerState.x*widthMultiplier,pointerState.y*heightMultiplier,drawWidth,drawHeight)})}(),ctx&&screenOverlay&&canvas&&(ctx.fillStyle="rgba(255, 255, 255, 0.5)",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.font="48px Arial",ctx.fillStyle="#009cff",ctx.textAlign="center",ctx.textBaseline="middle",ctx.fillText(screenOverlay,canvas.width/2,canvas.height/2))}}(),encodeFrame(canvas)}catch(err){notifyError(`frame ${frameCount}: ${err instanceof Error?err.message:err}`)}}function startFrameInterval(){frameIntervalId&&clearInterval(frameIntervalId),frameIntervalId=setInterval(tick,1e3/fps)}function stopFrameInterval(){frameIntervalId&&(clearInterval(frameIntervalId),frameIntervalId=null)}async function resizeRecorder(data){const nextVideoWidth=data.videoWidth||videoWidth,nextVideoHeight=data.videoHeight||videoHeight;if(nextVideoWidth===videoWidth&&nextVideoHeight===videoHeight)return setLayout(data),notifyResized(),!0;if(!canvas)return notifyError("resize failed: recorder canvas missing"),notifyResizeFailed(nextVideoWidth,nextVideoHeight),!1;let nextEncoder=null;try{nextEncoder=await createConfiguredEncoder(nextVideoWidth,nextVideoHeight)}catch(err){return notifyError(`resize config failed: ${err instanceof Error?err.message:err}`),notifyResizeFailed(nextVideoWidth,nextVideoHeight),!1}const shouldRestartFrames=started&&null!==frameIntervalId;shouldRestartFrames&&stopFrameInterval();try{encoder&&await encoder.flush()}catch(err){notifyError(`resize flush failed: ${err instanceof Error?err.message:err}`);try{nextEncoder.close()}catch{}return shouldRestartFrames&&startFrameInterval(),notifyResizeFailed(nextVideoWidth,nextVideoHeight),!1}try{encoder?.close()}catch{}return encoder=nextEncoder,videoWidth=nextVideoWidth,videoHeight=nextVideoHeight,canvas.width=videoWidth,canvas.height=videoHeight,ctx=canvas.getContext("2d"),ctx?(setLayout(data),forceNextKeyFrame=!0,shouldRestartFrames&&startFrameInterval(),notifyResized(),!0):(notifyError("resize failed: recorder context missing"),notifyResizeFailed(nextVideoWidth,nextVideoHeight),!1)}async function shutdown(code=1e3,reason="Playtest recording stopped"){if(shuttingDown)return;shuttingDown=!0,stopFrameInterval(),closeReadersAndProcessors(),clearHtmlCapture();try{encoder&&(await encoder.flush(),encoder.close())}catch{}started=!1,encoder=null,pointerStates.clear(),mouseBitmap?.close(),leftClickBitmap?.close(),rightClickBitmap?.close(),mouseBitmap=null,leftClickBitmap=null,rightClickBitmap=null;const closingSocket=socket;closingSocket&&"function"==typeof closingSocket.close?(closingSocket.close(code,reason),closeNotified&&socket===closingSocket&&(socket=null)):notifyClosed({code,reason,wasClean:!0})}const testHooksTarget=globalThis;(testHooksTarget.jest||"test"===testHooksTarget.process?.env?.NODE_ENV)&&(testHooksTarget.__POKI_PLAYTEST_RECORDER_WORKER_TEST_HOOKS__={configureEncoder,createEncodingFrame,encodeFrame,getFrameTiming,getEncoder:()=>encoder,getSupportedEncoderConfig,getVideoSize:()=>({height:videoHeight,width:videoWidth}),reset:()=>{stopFrameInterval(),encoder=null,canvas=null,ctx=null,started=!1,frameCount=0,nextKeyFrame=0,forceNextKeyFrame=!1,videoWidth=64,videoHeight=64,widthMultiplier=1,heightMultiplier=1,pointerStates.clear()},resizeRecorder,setCanvas:nextCanvas=>{canvas=nextCanvas,ctx=nextCanvas?nextCanvas.getContext("2d"):null},setEncoder:nextEncoder=>{encoder=nextEncoder},setNextKeyFrame:value=>{nextKeyFrame=value},setStarted:value=>{started=value},setVideoSize:(width,height)=>{videoWidth=width,videoHeight=height},updateClickState}),self.onmessage=async({data})=>{try{switch(data.type){case"playtestInit":await async function(data){if(canvas=data.canvas,videoWidth=data.videoWidth||64,videoHeight=data.videoHeight||64,fps=data.fps||24,bitrate=data.bitrate||1e6,savePacket=data.savePacket,showMouseCursor=!!data.showMouseCursor,closeNotified=!1,ready=!1,started=!1,shuttingDown=!1,frameCount=0,nextKeyFrame=0,forceNextKeyFrame=!1,pointerStates.clear(),!canvas)throw new Error("missing recorder canvas");if(canvas.width=videoWidth,canvas.height=videoHeight,ctx=canvas.getContext("2d"),!ctx)throw new Error("failed to acquire offscreen 2d context");await Promise.all([loadCursorAssets(),configureEncoder(),new Promise((resolve,reject)=>{let ws=null,settled=!1,fallbackTimeout=null;const clearFallbackTimeout=()=>{fallbackTimeout&&(clearTimeout(fallbackTimeout),fallbackTimeout=null)};ws=new WebSocket("wss://playtest-recorder.poki.io/ws"),ws.addEventListener("open",()=>{settled||(settled=!0,clearFallbackTimeout(),socket=ws,sendSocketJSON(savePacket),resolve())}),ws.addEventListener("error",()=>{settled&&socket!==ws||notifyError("websocket error")}),ws.addEventListener("close",event=>{if(!settled||socket===ws){if(!settled)return settled=!0,clearFallbackTimeout(),void reject(new Error("websocket closed before open"));socket===ws&&(socket=null),notifyClosed({code:event.code,reason:event.reason,wasClean:event.wasClean})}}),setTimeout(()=>{settled||ws?.readyState!==ws.CLOSED||(settled=!0,reject(new Error("websocket closed before open")))},5e3)})]),ready=!0,postMessage({type:"playtestReady"})}(data);break;case"playtestStart":if(!ready||started)return;!function(){if(!canvas)throw new Error("playtest worker canvas missing");if(ctx||(ctx=canvas.getContext("2d")),!ctx)throw new Error("playtest worker context missing")}(),started=!0,startFrameInterval(),postMessage({type:"playtestRecordingStarted"});break;case"playtestStop":await shutdown(data.code,data.reason);break;case"playtestPacket":sendSocketJSON(data.packet);break;case"playtestSourceTracks":!function(tracks){closeReadersAndProcessors();for(let i=0;i<tracks.length;i++){const processor=new globalThis.MediaStreamTrackProcessor({track:tracks[i]}),reader=processor.readable.getReader();processors.push(processor),readers.push(reader),latestFrames.push(null),(async()=>{for(;;){const{done,value}=await reader.read();if(done)break;latestFrames[i]?.close(),latestFrames[i]=value}})()}}(data.tracks||[]);break;case"playtestSourceReadables":!function(newReadables){closeReadersAndProcessors(),readables=newReadables;for(let i=0;i<readables.length;i++){const reader=readables[i].getReader();readers.push(reader),latestFrames.push(null),(async()=>{for(;;){const{done,value}=await reader.read();if(done)break;latestFrames[i]?.close(),latestFrames[i]=value}})()}}(data.readables||[]);break;case"playtestClearSources":closeReadersAndProcessors();break;case"playtestPointer":!function(data){const pointers=Array.isArray(data.pointers)?data.pointers:[],seenPointers=new Set;for(let i=0;i<pointers.length;i++){const pointer=pointers[i],id="number"==typeof pointer.id?pointer.id:i,pointerType=pointer.pointerType||"touch",key=getPointerKey(pointerType,id),nextPointer={id,leftDown:!!pointer.leftDown,pointerType,rightDown:!!pointer.rightDown,x:pointer.x||0,y:pointer.y||0};let pointerState=pointerStates.get(key);pointerState||(pointerState=createPointerRenderState(nextPointer),pointerStates.set(key,pointerState)),pointerState.id=nextPointer.id,pointerState.leftDown=nextPointer.leftDown,pointerState.pointerType=nextPointer.pointerType,pointerState.rightDown=nextPointer.rightDown,pointerState.x=nextPointer.x,pointerState.y=nextPointer.y,seenPointers.add(key)}pointerStates.forEach((pointerState,key)=>{seenPointers.has(key)||(pointerState.leftDown=!1,pointerState.rightDown=!1)})}(data);break;case"playtestLayout":setLayout(data);break;case"playtestResize":await resizeRecorder(data);break;case"playtestOverlay":screenOverlay=data.text||"";break;case"playtestHtmlCapture":!function(data){const sequence=data.sequence||0,bitmap=data.bitmap;bitmap&&(sequence<htmlSequence?bitmap.close():(htmlSequence=sequence,htmlWidth=data.width||bitmap.width,htmlHeight=data.height||bitmap.height,htmlBitmap?.close(),htmlBitmap=bitmap))}(data);break;case"playtestClearHtmlCapture":clearHtmlCapture()}}catch(err){notifyError(err instanceof Error?err.message:String(err)),await shutdown(1011,"Playtest recorder worker error")}};\n//# sourceURL=poki-playtest-worker.js'], {
                            type: "text/javascript"
                        }),
                        t = URL.createObjectURL(e),
                        n = new Worker(t);
                    return setTimeout(() => {
                        URL.revokeObjectURL(t)
                    }, 0), n
                }(), Hn.addEventListener("message", wi), Hn.addEventListener("error", bi),
                function() {
                    var e, t;
                    oi(), window.addEventListener("pointermove", qo, {
                        capture: !0,
                        passive: !0
                    }), ko.push(() => {
                        window.removeEventListener("pointermove", qo, !0)
                    }), window.addEventListener("pointerdown", $o, {
                        capture: !0,
                        passive: !0
                    }), ko.push(() => {
                        window.removeEventListener("pointerdown", $o, !0)
                    }), window.addEventListener("pointerup", Yo, {
                        capture: !0,
                        passive: !0
                    }), ko.push(() => {
                        window.removeEventListener("pointerup", Yo, !0)
                    }), window.addEventListener("pointercancel", Qo, {
                        capture: !0,
                        passive: !0
                    }), ko.push(() => {
                        window.removeEventListener("pointercancel", Qo, !0)
                    }), window.addEventListener("contextmenu", Zo, {
                        capture: !0,
                        passive: !0
                    }), ko.push(() => {
                        window.removeEventListener("contextmenu", Zo, !0)
                    }), window.addEventListener("visibilitychange", hi), ko.push(() => {
                        window.removeEventListener("visibilitychange", hi)
                    }), window.addEventListener("blur", Jo), ko.push(() => {
                        window.removeEventListener("blur", Jo)
                    }), window.addEventListener("resize", mi), ko.push(() => {
                        window.removeEventListener("resize", mi)
                    }), window.addEventListener("scroll", vi, {
                        capture: !0,
                        passive: !0
                    }), ko.push(() => {
                        window.removeEventListener("scroll", vi, !0)
                    }), window.addEventListener("orientationchange", gi), ko.push(() => {
                        window.removeEventListener("orientationchange", gi)
                    });
                    try {
                        null === (t = null === (e = window.screen.orientation) || void 0 === e ? void 0 : e.addEventListener) || void 0 === t || t.call(e, "change", yi), ko.push(() => {
                            var e, t;
                            try {
                                null === (t = null === (e = window.screen.orientation) || void 0 === e ? void 0 : e.removeEventListener) || void 0 === t || t.call(e, "change", yi)
                            } catch (e) {}
                        })
                    } catch (e) {}
                }(), co || (ui(), co = setInterval(ui, 1e3)), so = setInterval(ki, 250), Ao({
                    bitrate: 1e6,
                    canvas: i,
                    fps: Ln,
                    height: eo,
                    savePacket: t.savePacket,
                    showMouseCursor: !Rn,
                    type: "playtestInit",
                    videoHeight: eo,
                    videoWidth: Xn,
                    width: Xn
                }, [i]), !0
        }
        const Si = globalThis;
        (Si.jest || "test" === (null === (On = null === (Mn = Si.process) || void 0 === Mn ? void 0 : Mn.env) || void 0 === On ? void 0 : On.NODE_ENV)) && (Si.__POKI_PLAYTEST_STREAM_CANVAS_TEST_HOOKS__ = {
            clearResizeDebounce: Do,
            getInitialEncoderSize: Oo,
            getTargetEncoderSize: Mo,
            getPendingEncoderResize: () => go,
            getResizeDebounceMs: () => 500,
            setEncoderSize: (e, t) => {
                Xn = e, eo = t
            },
            setSourceCanvasses: e => {
                jn = e
            },
            updateOutputLayout: Bo
        });
        const Ei = new RegExp(`(${["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})","Linux; U; Android"].join("|")})`, "ig");

        function xi() {
            window.navigator.userAgent.match(Ei) && !z.isPlayground && document.addEventListener("touchmove", e => (e.preventDefault(), e.returnValue = !1, !1), {
                passive: !1
            })
        }

        function Ii() {
            return `User_${Math.floor(9e8*Math.random())+1e8}`
        }
        var Ci, Ti, Pi, _i, Mi, Oi = function(e, t, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((o = o.apply(e, t || [])).next())
                })
            },
            Di = function(e, t, n, o) {
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? o : "a" === n ? o.call(e) : o ? o.value : t.get(e)
            },
            Li = function(e, t, n, o, i) {
                if ("m" === o) throw new TypeError("Private method is not writable");
                if ("a" === o && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            };
        Ti = new WeakMap, _i = new WeakMap, Mi = new WeakMap, Ci = new WeakSet, Pi = function() {
            if (!z.isPokiIframe) throw new Error("User accounts is not available")
        };
        const Bi = class {
            constructor() {
                Ci.add(this), Ti.set(this, null), this.getUser = () => Oi(this, void 0, void 0, function*() {
                    return $.debug ? {
                        username: "TestUser",
                        avatarUrl: "https://a.poki-cdn.com/img/placeholder_gradient.png",
                        optedIn: !0
                    } : (Di(this, Ci, "m", Pi).call(this), Di(this, Ti, "f") || Li(this, Ti, yield Di(this, _i, "f").call(this), "f"), Di(this, Ti, "f"))
                }), this.getToken = () => Oi(this, void 0, void 0, function*() {
                    return $.debug ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJsVVNGaCtFUjZIaW83VHhjRW9Pc0d1UnJaNU0wNFdQSlpkQ1BBZ09Wcko4Zm5QQTRmK3Zob1E4PSIsImlzcyI6IlBva2kiLCJleHAiOjIzOTIyNzU0NDd9.S7aW6C3Uwe1hINZA1kg20QWTwE0TqKhUkpJUtU16twM" : (Di(this, Ci, "m", Pi).call(this), Di(this, Mi, "f").call(this))
                }), this.login = () => Oi(this, void 0, void 0, function*() {
                    if ($.debug) return;
                    Di(this, Ci, "m", Pi).call(this);
                    return (yield this.getUser()) ? void 0 : new Promise((t, n) => {
                        var o;

                        function i(t) {
                            t.data.type === e.accounts.authPanelClosed && (window.removeEventListener("message", i), n(new Error("User closed the auth panel without signing in.")))
                        }
                        null === (o = null === window || void 0 === window ? void 0 : window.top) || void 0 === o || o.postMessage({
                            type: e.accounts.openAuthPanel.type,
                            content: {
                                trigger: `sdk-${z.gameID}`,
                                version: e.accounts.openAuthPanel.version
                            }
                        }, "*"), window.addEventListener("message", i), setTimeout(() => {
                            window.removeEventListener("message", i), n(new Error("Login timeout. User took too long to complete the action."))
                        }, 45e3)
                    })
                }), _i.set(this, () => Oi(this, void 0, void 0, function*() {
                    try {
                        return new Promise(t => {
                            var n;
                            null === (n = null === window || void 0 === window ? void 0 : window.top) || void 0 === n || n.postMessage({
                                type: e.accounts.getUserInfo
                            }, "*");
                            const o = n => {
                                var i, r, a, s;
                                if (n.data.type === e.accounts.userInfo) {
                                    window.removeEventListener("message", o);
                                    const {
                                        enabled: e,
                                        session: c
                                    } = n.data;
                                    if (!e) return void t(null);
                                    Li(this, Ti, {
                                        username: null !== (i = null == c ? void 0 : c.username) && void 0 !== i ? i : Ii(),
                                        avatarUrl: null !== (a = null === (r = null == c ? void 0 : c.avatar) || void 0 === r ? void 0 : r.medium) && void 0 !== a ? a : "https://a.poki-cdn.com/img/placeholder_gradient.png",
                                        optedIn: null !== (s = null == c ? void 0 : c.optedin) && void 0 !== s && s
                                    }, "f"), t(Di(this, Ti, "f"))
                                }
                            };
                            window.addEventListener("message", o), setTimeout(() => {
                                window.removeEventListener("message", o), t(null)
                            }, 8e3)
                        })
                    } catch (e) {
                        ne("failed to fetch user info:", e)
                    }
                    return null
                })), Mi.set(this, () => Oi(this, void 0, void 0, function*() {
                    try {
                        return new Promise(t => {
                            var n;
                            null === (n = null === window || void 0 === window ? void 0 : window.top) || void 0 === n || n.postMessage({
                                type: e.accounts.getUserToken
                            }, "*");
                            const o = n => {
                                if (n.data.type === e.accounts.userToken) {
                                    window.removeEventListener("message", o);
                                    const {
                                        token: e,
                                        error: i
                                    } = n.data;
                                    if (i) return ne("failed to fetch user token:", i), void t(null);
                                    if (!e) return void t(null);
                                    t(e)
                                }
                            };
                            window.addEventListener("message", o), setTimeout(() => {
                                window.removeEventListener("message", o), t(null)
                            }, 8e3)
                        })
                    } catch (e) {
                        ne("failed to fetch user token:", e)
                    }
                    return null
                }))
            }
        };
        var Ri = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        let Ni = 1,
            ji = !1;
        const Fi = new Map;

        function Wi(t) {
            const {
                data: n
            } = t;
            if ((null == n ? void 0 : n.type) !== e.message.scoreUpdate) return;
            const o = Fi.get(n.message_id);
            o && (Fi.delete(n.message_id), o(n.leaderboards), 0 === Fi.size && (window.removeEventListener("message", Wi), ji = !1))
        }
        let Vi = 0;

        function Ui() {
            return Vi
        }
        var Hi, zi, Gi, Ki, qi, $i, Yi = function(e, t, n, o, i) {
                if ("m" === o) throw new TypeError("Private method is not writable");
                if ("a" === o && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            },
            Qi = function(e, t, n, o) {
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? o : "a" === n ? o.call(e) : o ? o.value : t.get(e)
            };
        const Ji = 6e5;
        Hi = new WeakMap, zi = new WeakMap, Gi = new WeakMap, Ki = new WeakMap, qi = new WeakMap, $i = new WeakMap;
        const Zi = class {
            constructor(t) {
                Hi.set(this, void 0), zi.set(this, void 0), Gi.set(this, void 0), Ki.set(this, void 0), this.startTrackingInteractions = () => {
                    window.addEventListener("pointerdown", Qi(this, $i, "f")), document.addEventListener("keydown", Qi(this, $i, "f"))
                }, this.getRecentInteraction = () => {
                    if (performance.now() - Ui() < 5e3) return Qi(this, zi, "f")
                }, this.clearPlayerActiveCheck = () => {
                    clearTimeout(Qi(this, Hi, "f")), Yi(this, Hi, void 0, "f"), window.removeEventListener("pointermove", Qi(this, qi, "f")), document.removeEventListener("keydown", Qi(this, qi, "f"))
                }, this.schedulePlayerActiveCheck = () => {
                    this.clearPlayerActiveCheck(), Yi(this, Hi, setTimeout(() => {
                        window.addEventListener("pointermove", Qi(this, qi, "f")), document.addEventListener("keydown", Qi(this, qi, "f")), Yi(this, Hi, setTimeout(() => {
                            Yi(this, Hi, void 0, "f"), Qi(this, Ki, "f").call(this)
                        }, Ji), "f")
                    }, Ji), "f")
                }, qi.set(this, () => {
                    this.clearPlayerActiveCheck(), de.track(e.tracking.screen.playerActive), Qi(this, Gi, "f").call(this), this.schedulePlayerActiveCheck()
                }), $i.set(this, e => {
                    var t;
                    "pointerdown" === e.type ? Yi(this, zi, "pointerdown", "f") : "keydown" === e.type ? Yi(this, zi, `keydown-${e.code}`, "f") : Yi(this, zi, "unknown", "f"), t = performance.now(), Vi = t
                }), Yi(this, Gi, t.onPlayerActive, "f"), Yi(this, Ki, t.onPlayerInactive, "f")
            }
        };
        var Xi, er, tr, nr, or, ir, rr, ar = function(e, t, n, o, i) {
                if ("m" === o) throw new TypeError("Private method is not writable");
                if ("a" === o && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            },
            sr = function(e, t, n, o) {
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? o : "a" === n ? o.call(e) : o ? o.value : t.get(e)
            };
        Xi = new WeakMap, er = new WeakMap, tr = new WeakMap, nr = new WeakMap, or = new WeakMap, ir = new WeakMap, rr = new WeakMap;
        const cr = class {
            constructor() {
                Xi.set(this, void 0), er.set(this, void 0), tr.set(this, !1), this.activateWakeLock = () => {
                    ar(this, tr, !0, "f"), document.addEventListener("visibilitychange", sr(this, rr, "f")), sr(this, nr, "f").call(this)
                }, this.deactivateWakeLock = () => {
                    ar(this, tr, !1, "f"), document.removeEventListener("visibilitychange", sr(this, rr, "f")), sr(this, or, "f").call(this)
                }, nr.set(this, () => {
                    sr(this, tr, "f") && !sr(this, Xi, "f") && !sr(this, er, "f") && "visible" === document.visibilityState && "wakeLock" in navigator && ar(this, er, navigator.wakeLock.request("screen").then(e => {
                        sr(this, tr, "f") && "visible" === document.visibilityState ? (ar(this, Xi, e, "f"), sr(this, Xi, "f").addEventListener("release", sr(this, ir, "f"))) : e.release().catch(() => {})
                    }).catch(() => {}).finally(() => {
                        ar(this, er, void 0, "f")
                    }), "f")
                }), or.set(this, () => {
                    const e = sr(this, Xi, "f");
                    ar(this, Xi, void 0, "f"), e && (e.removeEventListener("release", sr(this, ir, "f")), e.released || e.release().catch(() => {}))
                }), ir.set(this, e => {
                    const t = e.target;
                    t && t.removeEventListener("release", sr(this, ir, "f")), t && t !== sr(this, Xi, "f") || (ar(this, Xi, void 0, "f"), sr(this, nr, "f").call(this))
                }), rr.set(this, () => {
                    "visible" === document.visibilityState && sr(this, nr, "f").call(this)
                })
            }
        };
        var dr = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };

        function lr() {
            var e, t, n;
            const o = document.getElementById("poki-playtest-popup-reject"),
                i = document.getElementById("poki-playtest-popup-resolve");
            null == o || o.removeEventListener("pointerdown", lr), null == i || i.removeEventListener("pointerdown", lr), null === (e = document.getElementById("poki-playtest-popup-wrapper")) || void 0 === e || e.remove(), null === (t = document.getElementById("poki-playtest-template-markup")) || void 0 === t || t.remove(), null === (n = document.getElementById("poki-playtest-template-style")) || void 0 === n || n.remove()
        }

        function ur(e) {
            e.stopImmediatePropagation()
        }

        function pr({
            gameTitle: e,
            rejectCallback: t,
            resolveCallback: n
        }) {
            const o = document.body;
            ! function(e) {
                const t = document.createElement("template");
                t.innerHTML = '\n\t<template id="poki-playtest-template-markup">\n\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup-wrapper" id="poki-playtest-popup-wrapper">\n\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup">\n\t\t\t\t<header class="poki-playtest-popup-scope-reset poki-playtest-popup__header">\n\t\t\t\t\t<img class="poki-playtest-popup-scope-reset poki-playtest-popup__header__img" width="36" height="36" src="https://a.poki-cdn.com/playtest/playtest-icon.svg" alt="Lab icon">\n\t\t\t\t\t<h2 class="poki-playtest-popup-scope-reset poki-playtest-popup__header__title">Hey there, adventurer</h2>\n\t\t\t\t</header>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__content">\n\t\t\t\t\t<p>You found a mystery game and have been selected to test it out! When you join the playtest, we&apos;ll record your gameplay to see all the fun (and maybe some goofy) moments you encounter. This helps the developer figure out what rocks and what needs a little extra magic in their game.</p>\n\t\t\t\t\t<p>And hey, if you&apos;re not feeling it, no biggie - you can refuse the playtest and still play the game just like normal. For more information, please read our <a href="https://a.poki-cdn.com/playtest/2025.11.25_Poki_Playtest_Privacy_Statement.pdf" download="2025-11-25 Poki Playtest Privacy Statement.pdf" target="_blank">Privacy Statement Playtest</a>.</p>\n\t\t\t\t\t<h3>Do you consent to join the playtest of <span id="poki-playtest-popup-game-title">%GAME_TITLE%</span>?</h3>\n\t\t\t\t\t<p><small>Please note that this game has been uploaded independently by this game&apos;s developer and has not yet been verified by the Poki team. If you run into any trouble, contact us at <strong><a href="mailto:hello@poki.com">hello@poki.com</a></strong></small></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__actions">\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-reject" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">No, thanks</button>\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-resolve" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">Yes, let\'s go</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</template>\n', e.appendChild(t.content);
                const n = document.createElement("style");
                n.innerHTML = '\n\t.poki-playtest-popup {\n\t\tall: unset;\n\n\t\t& *,\n\t\t& *::before,\n\t\t& *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t}\n\n\t.poki-playtest-popup {\n\t\tborder-radius: 16px;\n\t\tbackground: #FFF;\n\t\tbox-shadow: 0px 60px 24px 0px rgba(93, 107, 132, 0.03), 0px 34px 20px 0px rgba(93, 107, 132, 0.09), 0px 15px 15px 0px rgba(93, 107, 132, 0.15), 0px 4px 8px 0px rgba(93, 107, 132, 0.18);\n\n\t\tdisplay: flex;\n\t\tmax-width: 480px;\n\t\tmin-width: 320px;\n\t\twidth: 100%;\n\t\tpadding: 8px 0 16px 0;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tgap: 16px;\n\t\tcolor: #002B50;\n\n\t\tposition: fixed;\n\t\tz-index: 99999;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\t.poki-playtest-popup__header {\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\tpadding: 8px 16px 16px;\n\t\t\talign-items: center;\n\t\t\tgap: 12px;\n\t\t\tborder-bottom: 2px solid #F0F5FC;\n\t}\n\n\t.poki-playtest-popup__header__img {\n\t\tall: unset;\n\t}\n\n\t.poki-playtest-popup__header__title {\n\t\tfont: 700 24px/1.16 Torus, sans-serif;\n\t\tmargin: 0;\n\t}\n\n\t.poki-playtest-popup__content {\n\t\tfont: 400 14px/1.57 "Proxima Nova", sans-serif;\n\t\tpadding: 0 16px;\n\n\t\ta {\n\t\t\tcolor: #0074E0;\n\t\t\tpointer-events: auto;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: #009CFF;\n\t\t\t}\n\t\t}\n\n\t\tp {\n\t\t\tmargin: 8px 0 0;\n\n\t\t\t&:first-child {\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\n\t\t\tsmall {\n\t\t\t\tall: unset;\n\t\t\t}\n\n\t\t\t&:has(small) {\n\t\t\t\tcolor: #5D6B84;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 1.33;\n\t\t\t\tletter-spacing: 0.3px;\n\t\t\t}\n\t\t}\n\n\t\th3 {\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 16px;\n\t\t\tline-height: 1.5;\n\t\t\tmargin: 16px 0 14px;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 640px) {\n\t\t.poki-playtest-popup {\n\t\t\tgap: 8px;\n\t\t\tpadding: 8px 0 12px 0;\n\t\t}\n\t\t.poki-playtest-popup__header {\n\t\t\tpadding: 0px 16px 0px;\n\t\t\talign-items: center;\n\t\t\tgap: 8px;\n\t\t}\n\t\t.poki-playtest-popup__content {\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 1.33;\n\t\t}\n\t}\n\n\t.poki-playtest-popup__actions {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tpadding: 8px 16px 0;\n\t\tgap: 16px;\n\t\tjustify-content: center;\n\t}\n\n\t.poki-playtest-popup__button {\n\t\tdisplay: flex;\n\t\tpadding: 7px 24px 9px;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex: 1 0 0;\n\t\tborder-radius: 24px;\n\t\tbackground: #009CFF;\n\t\tcursor: pointer;\n\t\tpointer-events: auto;\n\n\t\tcolor: #FFF;\n\t\tfont: 700 16px/1.25 Torus, sans-serif;\n\n\t\t&:hover {\n\t\t\tbackground-color: #0074E0;\n\t\t}\n\t}\n\n\t.poki-playtest-popup-wrapper {\n\t\tall: unset;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground: #002B50AF;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 99998;\n\t}\n\n\t.poki-playtest-popup-scope-reset {\n\t\tletter-spacing: normal;\n\t\ttext-align: left;\n\t\ttext-decoration: none;\n\t\ttext-indent: 0;\n\t\ttext-shadow: none;\n\t\ttext-transform: none;\n\t\twhite-space: normal;\n\t\tword-spacing: normal;\n\t}\n', n.id = "poki-playtest-template-style", e.appendChild(n)
            }(o);
            const i = document.getElementById("poki-playtest-template-markup").content.cloneNode(!0);
            i.querySelector("#poki-playtest-popup-game-title").textContent = e,
                function() {
                    return dr(this, void 0, void 0, function*() {
                        const e = new FontFace("ProximaNova", "url(https://a.poki-cdn.com/fonts/proxima-nova-regular-latin.woff2)").load(),
                            t = new FontFace("ProximaNova", "url(https://a.poki-cdn.com/fonts/proxima-nova-bold-latin.woff2)", {
                                weight: "bold"
                            }).load(),
                            n = new FontFace("Torus", "url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)").load(),
                            [o, i, r] = yield Promise.all([e, t, n]);
                        document.fonts.add(o), document.fonts.add(i), document.fonts.add(r)
                    })
                }().then(() => {
                    o.appendChild(i),
                        function({
                            rejectCallback: e,
                            resolveCallback: t
                        }) {
                            const n = document.getElementById("poki-playtest-popup-reject"),
                                o = document.getElementById("poki-playtest-popup-resolve");
                            null == n || n.addEventListener("pointerup", () => {
                                setTimeout(lr, 10), e()
                            }), null == o || o.addEventListener("pointerup", () => {
                                setTimeout(lr, 10), t()
                            });
                            const i = document.getElementById("poki-playtest-popup-wrapper");
                            i && ["pointerdown", "pointerup", "pointermove", "click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove", "contextmenu", "dragstart"].forEach(e => i.addEventListener(e, ur))
                        }({
                            rejectCallback: t,
                            resolveCallback: n
                        })
                })
        }

        function fr(e) {
            const t = [];
            let n = 0;
            for (let o = 0; o < e.length; o++) {
                if (n > 0) {
                    n--;
                    continue
                }
                const i = e[o];
                if ("string" == typeof i) n = (i.match(/%c/g) || []).length, t.push(i.replace(/%c/g, ""));
                else try {
                    t.push(String(i))
                } catch (e) {
                    t.push(`<${e.message}>`)
                }
            }
            return t.join(" ")
        }
        let hr = 0,
            mr = 0;

        function gr() {
            return hr
        }
        const yr = window.requestAnimationFrame;

        function vr(e, t = !1) {
            fetch("https://mystery-game-tile.poki.io/v0/metric", Object.assign({
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify(e)
            }, t ? {
                keepalive: !0
            } : {}))
        }

        function wr(e, t) {
            const n = t || Math.random().toString(36).substring(2);
            let o = 0,
                i = !1,
                r = 0,
                a = 0,
                s = 0,
                c = [];
            const d = () => {
                s++, yr(d)
            };
            d(), setInterval(() => {
                c.push(s), s = 0
            }, 1e3);
            window.addEventListener("beforeunload", () => {
                const t = gr() > 0,
                    s = c,
                    d = performance.now();
                c = [], i || (o = d), vr({
                    playerfit_test_id: e,
                    play_id: n,
                    started: t,
                    duration: o,
                    total_duration: d,
                    timed_out: !0,
                    sdk_version: "cfd5714d1960ba69f6a0b6759a03db6ae35bc250",
                    fpss: s,
                    upvotes: r,
                    downvotes: a,
                    have_interaction: Ui() > 0,
                    deviceCategory: z.device
                }, !0)
            });
            window.addEventListener("message", e => {
                e.data && "vote" === e.data.type && (e.data.direction < 0 ? a++ : e.data.direction > 0 && r++)
            });
            return setInterval(() => {
                const t = gr() > 0,
                    s = c,
                    d = performance.now();
                if (c = [], !i) {
                    o = d;
                    const e = 6e4;
                    d - Math.max(mr, Ui()) > e && (i = !0)
                }
                vr({
                    playerfit_test_id: e,
                    play_id: n,
                    started: t,
                    duration: o,
                    total_duration: d,
                    timed_out: i,
                    sdk_version: "cfd5714d1960ba69f6a0b6759a03db6ae35bc250",
                    fpss: s,
                    upvotes: r,
                    downvotes: a,
                    have_interaction: Ui() > 0,
                    deviceCategory: z.device
                })
            }, 1e4), n
        }

        function br(e) {
            var t;
            try {
                null === (t = null == e ? void 0 : e.getExtension("WEBGL_lose_context")) || void 0 === t || t.loseContext()
            } catch (e) {}
        }
        var kr = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        let Ar = !1;
        try {
            "1" === localStorage.getItem("poki_pbf") ? Ar = !0 : z.isPlayground || "GB" === z.country || localStorage.setItem("poki_pbf", "1")
        } catch (N) {}

        function Sr() {
            return kr(this, void 0, void 0, function*() {
                const e = new Set;
                if ("undefined" == typeof createImageBitmap && e.add("createImageBitmap"), "undefined" == typeof OffscreenCanvas && e.add("OffscreenCanvas"), "undefined" == typeof HTMLCanvasElement && e.add("HTMLCanvasElement"), "undefined" == typeof Worker) e.add("Worker");
                else {
                    const t = yield function() {
                        return kr(this, void 0, void 0, function*() {
                            let e = null,
                                t = "";
                            try {
                                return t = URL.createObjectURL(new Blob(["\npostMessage({\n\tcreateImageBitmap: typeof globalThis.createImageBitmap === 'function',\n\tmediaStreamTrackProcessor: typeof globalThis.MediaStreamTrackProcessor === 'function',\n\toffscreenCanvas: typeof globalThis.OffscreenCanvas === 'function',\n\tvideoEncoder: typeof globalThis.VideoEncoder === 'function',\n\tvideoFrame: typeof globalThis.VideoFrame === 'function',\n\twebSocket: typeof globalThis.WebSocket === 'function',\n});\n"], {
                                    type: "text/javascript"
                                })), e = new Worker(t), yield new Promise(t => {
                                    let n = !1,
                                        o = null;
                                    const i = e => {
                                        n || (n = !0, o && clearTimeout(o), t(e))
                                    };
                                    o = setTimeout(() => {
                                        i({})
                                    }, 1e3), e.onmessage = e => {
                                        i(e.data)
                                    }, e.onerror = () => {
                                        i({})
                                    }
                                })
                            } catch (e) {
                                return {}
                            } finally {
                                null == e || e.terminate(), t && URL.revokeObjectURL(t)
                            }
                        })
                    }();
                    t.videoEncoder || e.add("Worker VideoEncoder"), t.videoFrame || e.add("Worker VideoFrame"), t.offscreenCanvas || e.add("Worker OffscreenCanvas"), t.createImageBitmap || e.add("Worker createImageBitmap"), t.webSocket || e.add("Worker WebSocket"), B() && !t.mediaStreamTrackProcessor && e.add("Worker MediaStreamTrackProcessor")
                }
                const t = window;
                return B() || void 0 !== t.MediaStreamTrackProcessor || e.add("MediaStreamTrackProcessor"), [...e]
            })
        }
        var Er = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        const xr = {
            [e.tracking.screen.commercialBreak]: "commercialBreak",
            [e.tracking.screen.gameLoadingFinished]: "gameLoadingFinished",
            [e.tracking.screen.gameplayStart]: "gameplayStart",
            [e.tracking.screen.gameplayStop]: "gameplayStop",
            [e.tracking.screen.rewardedBreak]: "rewardedBreak"
        };
        let Ir = (e, t) => {},
            Cr = [],
            Tr = 0;
        const Pr = [...Object.values(e.tracking.screen), e.tracking.ads.status.completed, e.tracking.ads.status.error, e.tracking.ads.status.limit, e.tracking.ads.video.progress];
        let _r = [],
            Mr = [];
        try {
            const e = e => {
                const t = console[e];
                console[e] = (...n) => {
                    t.apply(console, n), Mr && Mr.push({
                        timeMs: performance.now(),
                        level: e,
                        message: fr(n)
                    })
                }, _r.push(() => {
                    console[e] = t
                })
            };
            z.gameID && !z.isPlayground && !z.isPokiExternal && z.isPokiIframe && (e("log"), e("info"), e("warn"), e("error"))
        } catch (N) {}

        function Or() {
            Cr = null, _r.forEach(e => e()), _r = [], Mr = null
        }

        function Dr(t, n) {
            let o;
            try {
                const e = document.createElement("canvas"),
                    t = {
                        powerPreference: "high-performance",
                        failIfMajorPerformanceCaveat: !1
                    };
                let n = null;
                try {
                    if (n = e.getContext("webgl2", t), n || (n = e.getContext("webgl", t), n || (n = e.getContext("experimental-webgl", t))), n) {
                        const e = n,
                            t = e.getExtension("WEBGL_debug_renderer_info");
                        t && (o = e.getParameter(t.UNMASKED_RENDERER_WEBGL)), o || (o = e.getParameter(e.RENDERER))
                    }
                } finally {
                    br(n)
                }
            } catch (e) {}
            const i = {
                type: "save",
                game_id: z.gameID,
                version_id: z.versionID,
                playtest_request_id: n,
                device_category: z.device,
                webgl_renderer: o,
                sdk_version: "cfd5714d1960ba69f6a0b6759a03db6ae35bc250",
                cpus: navigator.hardwareConcurrency,
                device_pixel_ratio: window.devicePixelRatio || 1,
                canvasses: t.length,
                fps: Ln
            };
            te("PLAYTEST: start recording using worker encoder", i);
            let r = 0,
                a = null,
                s = null,
                c = !1,
                d = null;
            const l = {};
            let u = !1;
            const p = e => function(e, t) {
                    return 0 === e ? 0 : Math.round((null != t ? t : performance.now()) - e)
                }(r, e),
                f = e => {
                    ! function(e) {
                        Gn && Ao({
                            packet: e,
                            type: "playtestPacket"
                        })
                    }(e)
                },
                h = e => {
                    l[e.code] || (l[e.code] = !0, u = !0)
                },
                m = e => {
                    l[e.code] && (l[e.code] = !1, u = !0)
                },
                g = ({
                    position: t
                }) => {
                    let n = e.tracking.screen.commercialBreak,
                        o = "Commercial Break";
                    t === e.ads.position.rewarded && (n = e.tracking.screen.rewardedBreak, o = "Rewarded Break"), ei(o), f({
                        type: "sdk-event",
                        offset: p(),
                        event: n
                    })
                },
                y = () => {
                    ei("")
                },
                v = Ai(t, {
                    savePacket: i,
                    callbacks: {
                        onReady: () => {
                            te("PLAYTEST: websocket open", JSON.stringify(i))
                        },
                        onRecordingStarted: () => {
                            r = performance.now(), d = function(e, t) {
                                return window.addEventListener("keydown", e, !0), window.addEventListener("keyup", t, !0), () => {
                                    window.removeEventListener("keydown", e, !0), window.removeEventListener("keyup", t, !0)
                                }
                            }(h, m), a = setInterval(() => {
                                const e = Object.keys(l);
                                u && e.length > 0 && f({
                                    type: "keyboard",
                                    offset: p(),
                                    keys: l
                                }), u = !1, e.forEach(e => {
                                    l[e] || delete l[e]
                                })
                            }, 50), Ir = (e, t) => {
                                f({
                                    type: "sdk-event",
                                    offset: p(t),
                                    event: e
                                });
                                const n = xr[e];
                                n && f({
                                    type: "console",
                                    offset: p(t),
                                    level: "log",
                                    message: `PokiSDK.${n}()`
                                })
                            }, null !== Cr && (Cr.forEach(e => {
                                Ir(e.event, e.timeMs)
                            }), Cr = null), Oe(e => {
                                f({
                                    type: "error",
                                    offset: p(),
                                    error: e
                                })
                            }), _r.forEach(e => e()), _r = [];
                            try {
                                const e = e => {
                                    const t = console[e];
                                    console[e] = (...n) => {
                                        t.apply(console, n), f({
                                            type: "console",
                                            offset: p(),
                                            level: e,
                                            message: fr(n)
                                        })
                                    }, _r.push(() => {
                                        console[e] = t
                                    })
                                };
                                e("log"), e("info"), e("warn"), e("error")
                            } catch (e) {}
                            Mr && (Mr.forEach(e => {
                                f({
                                    type: "console",
                                    offset: p(e.timeMs),
                                    level: e.level,
                                    message: e.message
                                })
                            }), Mr = null), "force" === Tn() && f({
                                type: "console",
                                offset: p(Sn),
                                level: "log",
                                message: "No canvas found, using HTML capture"
                            }), X.addEventListener(e.playtest.startVideo, g), X.addEventListener(e.playtest.stopVideo, y);
                            const t = new it(1);
                            s = setInterval(() => {
                                f({
                                    type: "fps",
                                    offset: p(),
                                    stats: t.stats()
                                })
                            }, 1e3)
                        },
                        onError: t => {
                            de.track(e.tracking.playtest.error, {
                                message: t
                            }), oe("PLAYTEST: error", t)
                        },
                        onClose: t => {
                            c || (c = !0, te("PLAYTEST: websocket closed", t), Ir = () => {}, X.removeEventListener(e.playtest.startVideo, g), X.removeEventListener(e.playtest.stopVideo, y), null == d || d(), d = null, a && (clearInterval(a), a = null), s && (clearInterval(s), s = null), Oe(() => {}), Or(), de.track(e.tracking.playtest.closed, {
                                reason: `${t.reason}:${t.code}:${t.wasClean}`
                            }))
                        }
                    }
                });
            v || Or()
        }
        re = function(t) {
            var n;
            if (n = performance.now(), mr = n, t.event === e.tracking.screen.gameLoadingFinished ? Tr = performance.now() : t.event === e.tracking.screen.gameplayStart && function(e) {
                    hr = e
                }(performance.now()), Pr.includes(t.event)) try {
                Ir(t.event), null !== Cr && Cr.push({
                    event: t.event,
                    timeMs: performance.now()
                })
            } catch (e) {
                ne("PLAYTEST: failed to forward logger event", e)
            }
        };

        function Lr(t) {
            const n = performance.now(),
                o = n + 12e4,
                i = setInterval(() => {
                    const r = performance.now();
                    let a = ni();
                    if (!a.length && ! function() {
                            const e = window;
                            return !!(e.THREE || e.__THREE__ || e.pc && (e.pc.app || e.pc.AppBase) || e.c3_runtimeInterface || e._dmJSDeviceShared || e.g_WebAudioContext || e.unityGame)
                        }() && Tr && r - Math.max(n, Tr) > 1e4 && (de.track(e.tracking.playtest.noCanvas), console.info("%cPOKI_PLAYTEST:%c no canvas found, switch to HTML capture", "font-weight: bold", ""), Pn("force"), a = ni()), a.length) {
                        clearInterval(i), de.track(e.tracking.playtest.starting);
                        try {
                            Dr(a, t.playtestRequestID)
                        } catch (e) {}
                    } else r > o && (de.track(e.tracking.playtest.notLoaded), clearInterval(i), te("PLAYTEST: no game canvas within 2 minutes"), Or())
                }, 1e3)
        }

        function Br(t) {
            return Er(this, void 0, void 0, function*() {
                if (z.domain.endsWith(".poki.ai") || "poki.ai" === z.domain) return void Or();
                const n = yield function(e) {
                    return kr(this, void 0, void 0, function*() {
                        const t = M("playtest");
                        if ("1" === t || "2" === t) {
                            const e = yield Sr();
                            return e.length > 0 && ne(`Playtest recorder is not supported in this browser, but playtest=${t} is set in the URL. Please use a supported browser to run the playtest.`, e.join(", ")), 0 === e.length
                        }
                        if (!z.country) return !1;
                        if (!z.isPokiIframe) return !1;
                        if (!e.playtestRecord) return !1;
                        if (e.playtestVersion && e.playtestVersion !== z.versionID) return !1;
                        if (e.playtestNewUser && Ar) return !1;
                        if (n = e, o = z.device, !(n.playtestDeviceCategories ? n.playtestDeviceCategories.includes(o) : !("desktop" === n.playtestDeviceCategory && "desktop" !== o || "mobile" === n.playtestDeviceCategory && "desktop" === o))) return !1;
                        var n, o;
                        if (["GB", "NL", "CA"].includes(z.country)) return !1;
                        const i = navigator;
                        if (i.connection && i.connection.effectiveType && "4g" !== i.connection.effectiveType) return !1;
                        if ((null == i ? void 0 : i.hardwareConcurrency) < 8) return !1;
                        const r = document.createElement("canvas").getContext("webgl2", {
                            failIfMajorPerformanceCaveat: !0
                        });
                        try {
                            if (!r) return !1
                        } finally {
                            br(r)
                        }
                        return 0 === (yield Sr()).length
                    })
                }(t), o = "1" === M("force_playerfit"), i = M("playerfit_test_id") || void 0, r = M("playerfit_play_id") || void 0;
                if (n && !o) {
                    var a;
                    if ("2" !== M("playtest")) de.track(e.tracking.playtest.showModal, {
                        show: !0
                    }), (a = (null == t ? void 0 : t.gameTitle) || "this game", new Promise((e, t) => {
                        te("PLAYTEST: showing consent screen"), pr({
                            rejectCallback: t,
                            resolveCallback: e,
                            gameTitle: a
                        })
                    })).then(() => {
                        de.track(e.tracking.playtest.accepted), Lr(t)
                    }).catch(t => {
                        de.track(e.tracking.playtest.rejected), te("PLAYTEST: rejected", t), Or()
                    });
                    else Lr(t)
                } else {
                    if (o || function(e) {
                            return !!z.isPokiIframe && !!e
                        }(i)) {
                        const t = wr(i, r);
                        de.track(e.tracking.playerfittest.starting, {
                            playId: t
                        })
                    }
                    Or()
                }
            })
        }
        var Rr, Nr, jr, Fr, Wr, Vr, Ur, Hr, zr, Gr, Kr, qr, $r, Yr, Qr, Jr, Zr, Xr = function(e, t, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((o = o.apply(e, t || [])).next())
                })
            },
            ea = function(e, t, n, o, i) {
                if ("m" === o) throw new TypeError("Private method is not writable");
                if ("a" === o && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            },
            ta = function(e, t, n, o) {
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? o : "a" === n ? o.call(e) : o ? o.value : t.get(e)
            };
        const na = atob("c3VibWl0U2NvcmU=");
        Rr = new WeakMap, Nr = new WeakMap, jr = new WeakMap, Fr = new WeakMap, Wr = new WeakMap, Vr = new WeakMap, Ur = new WeakMap, Hr = new WeakMap, zr = new WeakMap, Gr = new WeakMap, Kr = new WeakMap, qr = new WeakMap, $r = new WeakMap, Yr = new WeakMap, Qr = new WeakMap, Jr = new WeakMap, Zr = new WeakMap;
        const oa = class {
                constructor(t, n = !1) {
                    this.__gameStarted = !1, Rr.set(this, !1), Nr.set(this, new it(.01)), jr.set(this, 0), Fr.set(this, 0), Wr.set(this, 0), Vr.set(this, 0), Ur.set(this, new Bi), Hr.set(this, !1), zr.set(this, !1), Gr.set(this, null), Kr.set(this, !1), qr.set(this, new cr), $r.set(this, new Zi({
                        onPlayerActive: () => ta(this, qr, "f").activateWakeLock(),
                        onPlayerInactive: () => ta(this, qr, "f").deactivateWakeLock()
                    })), Yr.set(this, () => {
                        z.isInspector && document.pointerLockElement && G.sendMessage(e.message.sendInspectorEvent, {
                            event: "pointer-lock-during-ad"
                        })
                    }), this.init = (t = {}) => {
                        var n, o;
                        if (this.__logCall("init", t), ta(this, Gr, "f")) return oe("PokiSDK.init() called more than once"), ta(this, Gr, "f");
                        ea(this, Kr, !0 === window.__poki_no_ads, "f"), t[na] && t[na]((t, n) => function(t, n) {
                            return Ri(this, void 0, void 0, function*() {
                                const o = {
                                    time_on_page: performance.now(),
                                    p4d_version_id: z.versionID,
                                    sdk_version: "cfd5714d1960ba69f6a0b6759a03db6ae35bc250"
                                };
                                ji || (ji = !0, window.addEventListener("message", Wi));
                                const i = (Ni++).toString(36);
                                return G.sendMessage(e.message.sendScore, {
                                    data: {
                                        leaderboard: t,
                                        score: n,
                                        meta: o,
                                        message_id: i
                                    }
                                }), new Promise(e => {
                                    Fi.set(i, e)
                                })
                            })
                        }(t, n)), ta(this, $r, "f").startTrackingInteractions();
                        const i = window;
                        if (null === (o = null === (n = i.engine) || void 0 === n ? void 0 : n.config) || void 0 === o ? void 0 : o.onPrint) {
                            const e = i.engine.config.onPrint;
                            i.engine.config.onPrint = (...t) => {
                                var n;
                                e(...t);
                                const o = null === (n = t[0]) || void 0 === n ? void 0 : n.match(/Godot Engine (.+)/);
                                o && o[1] && (! function(e) {
                                    he = e
                                }(o[1]), i.engine.config.onPrint = e)
                            }
                        }
                        return ea(this, Gr, new Promise(n => {
                            if (ta(this, Kr, "f")) {
                                const e = M("playtest_request_id");
                                "2" === M("playtest") && z.gameID && Br({
                                    adTiming: {},
                                    gameID: z.gameID,
                                    gameTitle: "this game",
                                    playtestRecord: !0,
                                    playtestRequestID: e
                                }).catch(e => {
                                    ne("error in maybeStartPlaytest", e)
                                }), setTimeout(() => {
                                    n()
                                }, 10)
                            } else this.__monetization.init(Object.assign(Object.assign({}, t), {
                                onReady: () => {
                                    M("preroll") && this.__monetization.forcePreroll(), n()
                                }
                            }));
                            ta(this, Qr, "f").call(this), z.isInspector && ta(this, Jr, "f").call(this), document.location.search.length <= 1 && G.sendMessage(e.message.sendInspectorEvent, {
                                event: "bad-behavior",
                                data: {
                                    behavior: "rewrite_query_params"
                                }
                            }), G.sendMessage(e.message.sdkDetails, {
                                version: "cfd5714d1960ba69f6a0b6759a03db6ae35bc250"
                            })
                        }), "f"), ta(this, Gr, "f")
                    }, Qr.set(this, () => {
                        window.addEventListener("message", t => Xr(this, void 0, void 0, function*() {
                            if ("pokiGenerateScreenshot" === t.data.type) n = t.data, mn(void 0, void 0, void 0, function*() {
                                const {
                                    hasFrame: t
                                } = n;
                                let o = null;
                                if (t) {
                                    const {
                                        title: e,
                                        thumbnail: t
                                    } = n;
                                    o = yield kn({
                                        title: e,
                                        thumbnail: t
                                    })
                                } else o = yield kn();
                                const i = {
                                    screenshot: o,
                                    errors: ge
                                };
                                n.callback && (i.callback = n.callback), G.sendMessage(e.message.sendGameScreenshot, {
                                    data: i
                                })
                            });
                            else if ("pokiGenerateRawScreenshot" === t.data.type) mn(void 0, void 0, void 0, function*() {
                                const t = yield bn();
                                G.sendMessage(e.message.sendGameRawScreenshot, {
                                    data: {
                                        screenshot: t
                                    }
                                })
                            });
                            else if ("pokiUploadScreenshot" === t.data.type) {
                                const n = yield yn(t.data);
                                G.sendMessage(e.message.sendUploadScreenshot, {
                                    data: {
                                        screenshot: n
                                    }
                                })
                            }
                            var n
                        }), !1)
                    }), Jr.set(this, () => {
                        if (window.addEventListener("message", t => Xr(this, void 0, void 0, function*() {
                                if ("pokiInspectorAllowCommercialBreak" === t.data.type && (H("adOverrideMode", !0), H("houseAdsOnly", !0)), "pokiInspectorDisallowCommercialBreak" === t.data.type && (H("adOverrideMode", !1), H("houseAdsOnly", !1)), "pokiInspectorRequestCookies" === t.data.type && st().then(t => {
                                        G.sendMessage(e.message.sendInspectorCookies, {
                                            data: {
                                                cookies: t
                                            }
                                        }), G.sendMessage(e.message.sendInspectorEvent, {
                                            event: "cookies",
                                            data: {
                                                cookies: t
                                            }
                                        })
                                    }), "pokiInspectorClearLocalStorage" === t.data.type) try {
                                    if (localStorage.clear(), indexedDB.databases) {
                                        const e = yield indexedDB.databases(), t = (yield Promise.allSettled(e.filter(e => "string" == typeof e.name).map(e => indexedDB.deleteDatabase(e.name)))).filter(e => "rejected" === e.status);
                                        t.length > 0 && ne("PokiSDK: Some IndexedDB databases failed to delete", t)
                                    }
                                    document.cookie.split(";").forEach(e => {
                                        const t = e.split("=")[0].trim();
                                        document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
                                    }), G.sendMessage(e.message.sendInspectorEvent, {
                                        event: "localStorageCleared"
                                    })
                                } catch (t) {
                                    ne("PokiSDK: Error clearing localStorage", t), G.sendMessage(e.message.sendInspectorEvent, {
                                        event: "localStorageClearError",
                                        data: {
                                            error: String(t)
                                        }
                                    })
                                }
                            }), !1), "desktop" !== z.device) try {
                            const t = t => {
                                const n = console[t];
                                console[t] = (...o) => {
                                    G.sendMessage(e.message.sendInspectorConsole, {
                                        data: {
                                            level: t,
                                            args: fe(o)
                                        }
                                    }), G.sendMessage(e.message.sendInspectorEvent, {
                                        event: "console",
                                        data: {
                                            level: t,
                                            args: fe(o)
                                        }
                                    }), n.apply(console, o)
                                }
                            };
                            t("log"), t("warn"), t("error")
                        } catch (e) {}
                    }), this.initWithVideoHB = () => this.init(), this.setDebug = (t = !0) => {
                        this.__logCall("setDebug", t);
                        const {
                            hostname: n
                        } = window.location;
                        n.endsWith("poki-gdn.com") || n.endsWith("gdn.poki.com") ? t && de.track(e.tracking.debugTrueInProduction) : ($.debug = t, $.log = null != t ? t : $.log, t ? Ke() : Ge())
                    }, this.setLogging = e => {
                        this.__logCall("setLogging", e), $.log = e
                    }, Zr.set(this, () => ta(this, Fr, "f") >= 10), this.gameLoadingFinished = () => {
                        var t, n;
                        this.__logCall("gameLoadingFinished"), clearInterval(window.pokiCancelProgressInterval), de.track(e.tracking.screen.gameLoadingFinished, {
                            transferSize: An(),
                            trackers: le().join(","),
                            error_session_id: Ae,
                            now: Math.round(null === (n = null === (t = window.performance) || void 0 === t ? void 0 : t.now) || void 0 === n ? void 0 : n.call(t)) || void 0
                        });
                        const o = window.pokiMeasureBuildin;
                        window.PokiSDK.measure("game", "loading", "complete"), window.pokiMeasureBuildin = o
                    }, this.gameplayStart = t => {
                        var n;
                        if (this.__logCall("gameplayStart", t), ta(this, Zr, "f").call(this)) return void ne("PokiSDK.gameplayStart() ignored because of too many events");
                        ea(this, Rr, !0, "f"), this.__gameStarted || (this.__gameStarted = !0, de.track(e.tracking.screen.firstRound), ta(this, Kr, "f") || this.__monetization.startStartAdsAfterTimer());
                        const o = ta(this, Fr, "f"),
                            i = "1" === M("bot");
                        setTimeout(() => {
                            const n = Object.assign(Object.assign({}, t), {
                                fps: ta(this, Nr, "f").stats(),
                                badEvents: o,
                                interaction: ta(this, $r, "f").getRecentInteraction()
                            });
                            i && (n.bot = 1), de.track(e.tracking.screen.gameplayStart, n)
                        }, 0), ta(this, qr, "f").activateWakeLock(), ta(this, $r, "f").schedulePlayerActiveCheck(), ta(this, jr, "f") && (ta(this, jr, "f") > performance.now() - 50 && ea(this, Fr, (n = ta(this, Fr, "f"), ++n), "f"), ea(this, jr, 0, "f"))
                    }, this.gameplayStop = t => {
                        if (this.__logCall("gameplayStop", t), ta(this, Zr, "f").call(this)) return void ne("PokiSDK.gameplayStart() ignored because of too many events");
                        ea(this, Rr, !1, "f");
                        const n = "1" === M("bot"),
                            o = Object.assign(Object.assign({}, t), {
                                fps: ta(this, Nr, "f").stats()
                            });
                        if (n && (o.bot = 1), de.track(e.tracking.screen.gameplayStop, o), ta(this, $r, "f").clearPlayerActiveCheck(), ta(this, qr, "f").deactivateWakeLock(), ea(this, jr, performance.now(), "f"), !ta(this, zr, "f") && z.isPokiIframe) {
                            ea(this, zr, !0, "f");
                            try {
                                const e = 400 * Math.random() - 200 + 500,
                                    t = crypto.getRandomValues(new Uint8Array(e)),
                                    o = btoa(String.fromCharCode.apply(null, t));
                                fetch(`https://games.poki.com/savegame?domain=${encodeURIComponent(z.domain)}&game=${z.gameID}&version=${z.versionID}&gameplay=${crypto.randomUUID()}&device=${z.device}&country=${z.country}${n?"&bot=1":""}`, {
                                    method: "POST",
                                    mode: "no-cors",
                                    body: o
                                }).catch(() => {})
                            } catch (e) {}
                        }
                    }, this.openExternalLink = t => {
                        this.__logCall("openExternalLink", t), G.sendMessage(e.message.openExternalLink, {
                            params: {
                                url: t
                            }
                        })
                    }, this.customEvent = (t, n, o = {}) => {
                        this.__logCall("customEvent", t, n, o), t && n ? (t = String(t), n = String(n), o = Object.assign({}, o), "game" === t && "segment" === n && o.segment || de.track(e.tracking.custom, {
                            eventNoun: t,
                            eventVerb: n,
                            eventData: o
                        })) : console.error("%cPOKI:%c PokiSDK.customEvent() needs at least a noun and a verb", "font-weight: bold", "")
                    }, this.commercialBreak = t => new Promise(n => {
                        if (this.__logCall("commercialBreak", t), ta(this, Kr, "f")) return void setTimeout(() => {
                            n()
                        }, 100);
                        if ("977b60eb-ff81-4c3a-895b-b585410d6c0d" === z.gameID) return void n();
                        if (ta(this, Zr, "f").call(this)) return ne("PokiSDK.commercialBreak() ignored because of too many calls"), void n();
                        const o = this.__gameStarted ? e.ads.position.midroll : e.ads.position.preroll;
                        this.__runVideoAd({
                            amount: 1,
                            position: o,
                            onStart: () => {
                                var e;
                                if (ea(this, Wr, (e = ta(this, Wr, "f"), ++e), "f"), window.pokiMeasureBuildin && window.PokiSDK.measure("midroll", ta(this, Wr, "f")), "function" == typeof t) try {
                                    t()
                                } catch (e) {
                                    ne("error in onStart callback of PokiSDK.commercialBreak()", e)
                                }
                            }
                        }).then(() => {
                            n()
                        })
                    }), this.rewardedBreak = t => new Promise(n => {
                        if (this.__logCall("rewardedBreak", t), "977b60eb-ff81-4c3a-895b-b585410d6c0d" === z.gameID) return void n(!1);
                        let o, i = 1;
                        if ("function" == typeof t) o = t;
                        else if ("object" == typeof t) {
                            t.onStart && (o = t.onStart);
                            const e = (null == t ? void 0 : t.size) || $e.SMALL;
                            e === $e.SMALL ? i = 1 : e === $e.MEDIUM ? i = 2 : e === $e.LARGE && (i = 3)
                        }
                        ta(this, Kr, "f") ? setTimeout(() => {
                            if ("function" == typeof o) try {
                                o()
                            } catch (e) {
                                ne("error in onStart callback of PokiSDK.rewardedBreak()", e)
                            }
                            setTimeout(() => {
                                n(!0)
                            }, 100)
                        }, 100) : setTimeout(() => {
                            this.__runVideoAd({
                                position: e.ads.position.rewarded,
                                amount: i,
                                onStart: () => {
                                    var e;
                                    if (ea(this, Vr, (e = ta(this, Vr, "f"), ++e), "f"), window.pokiMeasureBuildin && window.PokiSDK.measure("rewarded", ta(this, Vr, "f")), "function" == typeof o) try {
                                        o()
                                    } catch (e) {
                                        ne("error in onStart callback of PokiSDK.rewardedBreak()", e)
                                    }
                                }
                            }).then(e => {
                                n(e)
                            })
                        }, 0)
                    }), this.displayAd = (t, n, o, i) => {
                        if (this.__logCall("displayAd", t, n, o, i), ta(this, Kr, "f")) return;
                        if ("977b60eb-ff81-4c3a-895b-b585410d6c0d" === z.gameID) return void(o && o());
                        const r = qe();
                        de.track(e.tracking.screen.displayAd, {
                            size: n,
                            opportunityId: r,
                            duringGameplay: ta(this, Rr, "f")
                        });
                        const a = {
                            container: t,
                            opportunityId: r,
                            size: n,
                            duringGameplay: ta(this, Rr, "f"),
                            onCanDestroy: o,
                            onDisplayRendered: i,
                            headerBiddingAllowed: !0
                        };
                        this.__monetization.displayAd(a)
                    }, this.destroyAd = e => {
                        this.__logCall("destroyAd", e), ta(this, Kr, "f") || this.__monetization.destroyAd(e)
                    }, this.isAdBlocked = () => !1, this.muteAd = () => {
                        this.__logCall("muteAd"), ta(this, Kr, "f") || this.__monetization.muteAd()
                    }, this.setVolume = e => {
                        this.__logCall("setVolume", e), ta(this, Kr, "f") || this.__monetization.setVolume(e)
                    }, this.logError = e => {
                        this.captureError(e)
                    }, this.setPlaytestCanvas = e => {
                        this.__logCall("setPlaytestCanvas", e), this.playtestSetCanvas(e)
                    }, this.playtestSetCanvas = e => {
                        if (this.__logCall("playtestSetCanvas", e), !e) return void Cn([]);
                        const t = [].concat(e);
                        Cn(t), fi(t)
                    }, this.playtestCaptureHtmlOnce = () => {
                        this.__logCall("playtestCaptureHtmlOnce"), Pn("once")
                    }, this.playtestCaptureHtmlForce = () => {
                        this.__logCall("playtestCaptureHtmlForce"), Pn("force")
                    }, this.playtestCaptureHtmlOn = () => {
                        this.__logCall("playtestCaptureHtmlOn"), Pn("on")
                    }, this.playtestCaptureHtmlOff = () => {
                        this.__logCall("playtestCaptureHtmlOff"), Pn("off")
                    }, this.shareableURL = (t = {}) => new Promise((n, o) => {
                        this.__logCall("shareableURL", t);
                        const i = new URLSearchParams,
                            r = Object.keys(t);
                        if (z.isPokiIframe || z.isInspector) {
                            const o = M("poki_url");
                            r.forEach(e => {
                                void 0 !== t[e] && null !== t[e] && i.set(`gd${e}`, t[e])
                            }), n(`${o}?${i.toString()}`), G.sendMessage(e.message.setPokiURLParams, {
                                params: t
                            })
                        } else window.self === window.top ? (r.forEach(e => {
                            void 0 !== t[e] && null !== t[e] && i.set(`${e}`, t[e])
                        }), n(`${window.location.origin}${window.location.pathname}?${i.toString()}`)) : o(new Error("shareableURL only works on Poki or a top level frame"))
                    }), this.movePill = (e, t) => {
                        var n;
                        this.__logCall("movePill", e, t), "number" == typeof e && "number" == typeof t ? this.__monetization.moveDebugMobilePill ? this.__monetization.moveDebugMobilePill(e, t) : null === (n = null === window || void 0 === window ? void 0 : window.top) || void 0 === n || n.postMessage({
                            type: "pokiMessageSetMobileNavPosition",
                            content: {
                                topPercent: e,
                                topPx: t
                            }
                        }, "*") : ne("PokiSDK.movePill() called with invalid parameters", e, t)
                    }, this.getURLParam = e => M(`gd${e}`) || M(e), this.captureError = e => {
                        this.__logCall("captureError", e), Ne(e)
                    }, this.getLanguage = () => (M("iso_lang") || navigator.language.toLowerCase()).split("-")[0], this.getDeviceInfo = () => ({
                        category: z.device
                    }), this.generateScreenshot = () => Xr(this, void 0, void 0, function*() {
                        return this.__logCall("generateScreenshot"), kn(null)
                    }), this.showLeaderboard = t => {
                        G.sendMessage(e.message.showLeaderboard, {
                            data: {
                                id: Number.isInteger(t) && t || -1
                            }
                        })
                    }, this.enableEventTracking = () => {
                        var e;
                        this.__logCall("enableEventTracking"), z.isPlayground || z.isPokiIframe || z.isInspector || (null === (e = null === document || void 0 === document ? void 0 : document.referrer) || void 0 === e ? void 0 : e.includes("games.poki.com")) || de.setupObserverWithCMP()
                    }, this.__runVideoAd = ({
                        position: t,
                        amount: n,
                        onStart: o,
                        timeBetweenAds: i,
                        platformAd: r
                    }) => new Promise(a => {
                        let s = 1;
                        this.__monetization.setNrAds(s, n);
                        const c = qe(),
                            d = o => {
                                setTimeout(() => {
                                    if ((null == o ? void 0 : o.type) === e.ads.limit || (null == o ? void 0 : o.type) === e.ads.busy || (null == o ? void 0 : o.type) === e.ads.stopped) return this.__monetization.endBreak(), void a(!1);
                                    const l = X.getVideoDataAnnotations();
                                    if (s === n || ta(this, Hr, "f") || "poki" === (null == l ? void 0 : l.bidder)) return X.dispatchEvent(e.ads.startTimer, {
                                        overwriteTimeBetweenAds: i
                                    }), this.__monetization.endBreak(), void a(!!(null == o ? void 0 : o.rewardAllowed));
                                    s++, X.clearVideoDataAnnotations(), X.addVideoDataAnnotations({
                                        adBreakId: c,
                                        position: t,
                                        opportunityId: qe(),
                                        currentAdNumber: s,
                                        totalAdAmount: n
                                    }), this.__monetization.setNrAds(s, n), this.__monetization.requestAd({
                                        position: t,
                                        platformAd: r,
                                        onFinish: d,
                                        onStart: ta(this, Yr, "f")
                                    })
                                }, 0)
                            };
                        X.clearVideoDataAnnotations(), X.addVideoDataAnnotations({
                            adBreakId: c,
                            position: t,
                            opportunityId: qe(),
                            currentAdNumber: 1,
                            totalAdAmount: n
                        }), this.__monetization.requestAd({
                            position: t,
                            platformAd: r,
                            onFinish: d,
                            onStart: () => {
                                if (this.__monetization.setNrAds(s, n), ta(this, Yr, "f").call(this), "function" == typeof o) try {
                                    o()
                                } catch (e) {
                                    console.error("%cPOKI:%c error in onStart callback of PokiSDK.runVideoAd()", "font-weight: bold", "", e)
                                }
                            }
                        })
                    }), this.__logCall = (e, ...t) => {
                        if (!z.isPlayground) {
                            for (let e = 0; e < t.length; e++) void 0 === t[e] && (t[e] = "");
                            te(`PokiSDK.${e}(`, ...t, ")")
                        }
                    }, this.setDebugTouchOverlayController = () => {}, this.gameInteractive = () => {}, this.gameLoadingProgress = () => {}, this.gameLoadingStart = () => {}, this.getLeaderboard = () => Promise.resolve([]), this.happyTime = () => {}, this.sendHighscore = () => {}, this.setPlayerAge = () => {}, this.roundStart = () => {}, this.roundEnd = () => {}, this.getUser = () => Xr(this, void 0, void 0, function*() {
                        return ta(this, Ur, "f").getUser()
                    }), this.getToken = () => Xr(this, void 0, void 0, function*() {
                        return ta(this, Ur, "f").getToken()
                    }), this.login = () => Xr(this, void 0, void 0, function*() {
                        return ta(this, Ur, "f").login()
                    }), this.__monetization = t, ea(this, Hr, n, "f"), xi(), setInterval(() => {
                        ea(this, Fr, Math.max(ta(this, Fr, "f") - 1, 0), "f")
                    }, 1e3)
                }
            },
            ia = {
                adTagUrl: "//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1",
                adTiming: {
                    preroll: !1,
                    timeBetweenAds: 12e4,
                    timePerTry: 7e3,
                    startAdsAfter: 12e4
                },
                waterfallRetries: 2
            };

        function ra(e) {
            let t = `/21682198607/debug-display/debug-display-${e}`;
            return $.debug || (t = z.isPokiIframe ? `/21682198607/${z.device}_ingame_${e}/${z.siteID}_${z.device}_ingame_${e}` : z.isPokiExternal ? `/21682198607/external_${z.device}_display_platform` : `/21682198607/external_${z.device}_display_ingame/external_${z.device}_ingame_${e}`), t
        }
        var aa = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        const sa = () => {
            let {
                pathname: e
            } = window.location;
            "/" !== e[0] && (e = `/${e}`);
            let t = "";
            window.top !== window && (t = encodeURIComponent(document.referrer));
            return hn(`https://devs-api.poki.com/gameinfo/@sdk?href=${encodeURIComponent(`${window.location.protocol}//${window.location.host}${e}${window.location.search}`)}&referrer=${t}`, {
                method: "GET",
                headers: {
                    "Content-Type": "text/plain"
                }
            }).then(e => aa(void 0, void 0, void 0, function*() {
                if (e.status >= 200 && e.status < 400) {
                    const t = yield e.json();
                    if (!t.game_id) return;
                    return {
                        gameID: t.game_id,
                        gameTitle: t.game_name,
                        playtestRecord: t.playtest_record,
                        playtestVersion: t.playtest_version,
                        playtestDeviceCategory: t.playtest_device_category,
                        playtestDeviceCategories: t.playtest_device_categories,
                        playtestNewUser: t.playtest_new_user,
                        playtestRequestID: t.playtest_request_id,
                        cachedContentGameID: t.cached_content_game_id,
                        specialConditions: t.ad_settings.special_conditions,
                        adTiming: {
                            preroll: t.ad_settings.preroll,
                            timePerTry: t.ad_settings.time_per_try,
                            timeBetweenAds: t.ad_settings.time_between_ads,
                            startAdsAfter: t.ad_settings.start_ads_after
                        }
                    }
                }
                throw e
            })).catch(e => {
                console.warn("%cPOKI:%c failed request p4d info", "font-weight: bold", "", e)
            })
        };
        var ca, da;
        n.dn(function() {
            if (window.__tcfapi || ca.isPlayground || ca.familyFriendly) return;
            const e = window.top,
                t = {};
            let n = !1;
            const o = [];
            window.__tcfapi = (i, r, a, s) => {
                if (!n) return o.push([i, r, a, s]), !0;
                const c = `${Math.random()}`,
                    d = {
                        __tcfapiCall: {
                            command: i,
                            parameter: s,
                            version: r,
                            callId: c
                        }
                    };
                return t[c] = a, e.postMessage(d, "*"), !0
            }, window.addEventListener("message", function(e) {
                let n = {};
                try {
                    n = "string" == typeof e.data ? JSON.parse(e.data) : e.data
                } catch (e) {}
                const o = n.__tcfapiReturn;
                o && "function" == typeof t[o.callId] && (t[o.callId](o.returnValue, o.success), delete t[o.callId])
            }, !1);
            const i = `${Math.random()}`;
            let r = null;
            t[i] = (e, t) => {
                n || t && (n = !0, clearInterval(r), o.forEach(e => {
                    window.__tcfapi(...e)
                }), o.length = 0)
            }, r = setInterval(() => {
                e.postMessage({
                    __tcfapiCall: {
                        command: "ping",
                        version: 2,
                        callId: i
                    }
                }, "*")
            }, 500), setTimeout(() => {
                clearInterval(r)
            }, 1e4)
        }), n.dn(function() {
            if (window.__uspapi || da.isPlayground || da.familyFriendly) return;
            const e = window.top,
                t = {};
            window.__uspapi = (n, o, i) => {
                const r = `${Math.random()}`,
                    a = {
                        __uspapiCall: {
                            command: n,
                            version: o,
                            callId: r
                        }
                    };
                t[r] = i, e.postMessage(a, "*")
            }, window.addEventListener("message", function(e) {
                const n = e && e.data && e.data.__uspapiReturn;
                n && n.callId && "function" == typeof t[n.callId] && (t[n.callId](n.returnValue, n.success), t[n.callId] = null)
            }, !1)
        });
        var la = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        class ua {
            constructor(e) {
                this.p = new Promise(e)
            }
        }
        ua.__typeson__type__ = "TypesonPromise", "undefined" != typeof Symbol && Object.defineProperty(ua.prototype, Symbol.toStringTag, {
            get: () => "TypesonPromise"
        }), ua.prototype.then = function(e, t) {
            return new ua((n, o) => {
                this.p.then(function(t) {
                    n(e ? e(t) : t)
                }).catch(function(e) {
                    return t ? t(e) : Promise.reject(e)
                }).then(n, o)
            })
        }, ua.prototype.catch = function(e) {
            return this.then(void 0, e)
        }, ua.resolve = function(e) {
            return new ua(t => {
                t(e)
            })
        }, ua.reject = function(e) {
            return new ua((t, n) => {
                n(e)
            })
        }, ua.all = function(e) {
            return new ua(function(t, n) {
                Promise.all(e.map(e => (null == e ? void 0 : e.constructor) && "__typeson__type__" in e.constructor && "TypesonPromise" === e.constructor.__typeson__type__ ? e.p : e)).then(t, n)
            })
        }, ua.race = function(e) {
            return new ua(function(t, n) {
                Promise.race(e.map(e => (null == e ? void 0 : e.constructor) && "__typeson__type__" in e.constructor && "TypesonPromise" === e.constructor.__typeson__type__ ? e.p : e)).then(t, n)
            })
        }, ua.allSettled = function(e) {
            return new ua(function(t, n) {
                Promise.allSettled(e.map(e => (null == e ? void 0 : e.constructor) && "__typeson__type__" in e.constructor && "TypesonPromise" === e.constructor.__typeson__type__ ? e.p : e)).then(t, n)
            })
        };
        const {
            hasOwn: pa
        } = Object, fa = Object.getPrototypeOf;

        function ha(e, t) {
            return wa(e) && "function" == typeof e.then && (!t || "function" == typeof e.catch)
        }

        function ma(e) {
            return Object.prototype.toString.call(e).slice(8, -1)
        }

        function ga(e, t) {
            if (!e || "object" != typeof e) return !1;
            const n = fa(e);
            if (!n) return null === t;
            const o = pa(n, "constructor") && n.constructor;
            return "function" != typeof o ? null === t : t === o || null !== t && Function.prototype.toString.call(o) === Function.prototype.toString.call(t) || "function" == typeof t && "string" == typeof o.__typeson__type__ && o.__typeson__type__ === t.__typeson__type__
        }

        function ya(e) {
            return !(!e || "Object" !== ma(e)) && (!fa(e) || ga(e, Object))
        }

        function va(e) {
            if (!e || "Object" !== ma(e)) return !1;
            const t = fa(e);
            return !t || ga(e, Object) || va(t)
        }

        function wa(e) {
            return null !== e && "object" == typeof e
        }

        function ba(e) {
            return e.replaceAll("''", "''''").replace(/^$/u, "''").replaceAll("~", "~0").replaceAll(".", "~1")
        }

        function ka(e) {
            return e.replaceAll("~1", ".").replaceAll("~0", "~").replace(/^''$/u, "").replaceAll("''''", "''")
        }

        function Aa(e, t, n) {
            if ("" === t) return e;
            if (null === e || "object" != typeof e) throw new TypeError("Unexpected non-object type");
            const o = t.indexOf("."),
                i = ka(-1 === o ? t : t.slice(0, o));
            if (!n || pa(e, i)) {
                if (-1 !== o) {
                    const r = e[i];
                    return void 0 === r ? void 0 : Aa(r, t.slice(o + 1), n)
                }
                return e[i]
            }
        }

        function Sa(e, t, n, o) {
            if ("" === t) return n;
            let i = e,
                r = t;
            for (;;) {
                if (!i || "object" != typeof i) throw new TypeError("Unexpected non-object type");
                const t = r.indexOf("."),
                    a = ka(-1 === t ? r : r.slice(0, t));
                if ("__proto__" === a) throw new TypeError("Invalid property");
                if (-1 === t) return i[a] = n, e;
                if (o && !pa(i, a)) throw new TypeError("Invalid property");
                i = i[a], r = r.slice(t + 1)
            }
        }

        function Ea(e) {
            return null === e ? "null" : Array.isArray(e) ? "array" : typeof e
        }
        const {
            keys: xa,
            hasOwn: Ia
        } = Object, {
            isArray: Ca
        } = Array, Ta = ["type", "replaced", "iterateIn", "iterateUnsetNumeric", "iterateSymbols", "addLength"];

        function Pa(e, t, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            })
        }
        const _a = ["asyncIterator", "hasInstance", "isConcatSpreadable", "iterator", "match", "matchAll", "replace", "search", "species", "split", "toPrimitive", "toStringTag", "unscopables"];

        function Ma(e, t) {
            var n, o;
            if ("" === e.keypath) return -1;
            let i = null !== (n = e.keypath.match(/\./gu)) && void 0 !== n ? n : 0,
                r = null !== (o = t.keypath.match(/\./gu)) && void 0 !== o ? o : 0;
            return i && (i = i.length), r && (r = r.length), i > r ? -1 : i < r ? 1 : e.keypath < t.keypath ? -1 : e.keypath > t.keypath ? 1 : 0
        }
        class Oa {
            constructor(e) {
                this.options = e, this.plainObjectReplacers = [], this.nonplainObjectReplacers = [], this.revivers = {}, this.types = {}, this.symbolsByName = Object.create(null), this.symbolsByValue = new Map;
                const t = null == e ? void 0 : e.symbols;
                t && Object.entries(t).forEach(([e, t]) => {
                    if ("symbol" != typeof t) throw new TypeError("Non-symbol value supplied for `symbols` entry: " + e);
                    this.symbolsByName[e] = t, this.symbolsByValue.set(t, e)
                })
            }
            stringify(e, t, n, o) {
                o = Object.assign(Object.assign(Object.assign({}, this.options), o), {
                    stringification: !0
                });
                const i = this.encapsulate(e, null, o);
                return Ca(i) ? JSON.stringify(i[0], t, n) : i.then(e => JSON.stringify(e, t, n))
            }
            stringifySync(e, t, n, o) {
                return this.stringify(e, t, n, Object.assign(Object.assign({
                    throwOnBadSyncType: !0
                }, o), {
                    sync: !0
                }))
            }
            stringifyAsync(e, t, n, o) {
                return this.stringify(e, t, n, Object.assign(Object.assign({
                    throwOnBadSyncType: !0
                }, o), {
                    sync: !1
                }))
            }
            parse(e, t, n) {
                return n = Object.assign(Object.assign(Object.assign({}, this.options), n), {
                    parse: !0
                }), this.revive(JSON.parse(e, t), n)
            }
            parseSync(e, t, n) {
                return this.parse(e, t, Object.assign(Object.assign({
                    throwOnBadSyncType: !0
                }, n), {
                    sync: !0
                }))
            }
            parseAsync(e, t, n) {
                return this.parse(e, t, Object.assign(Object.assign({
                    throwOnBadSyncType: !0
                }, n), {
                    sync: !1
                }))
            }
            specialTypeNames(e, t, n = {}) {
                return this.encapsulate(e, t, Object.assign(Object.assign({}, n), {
                    returnTypeNames: !0
                }))
            }
            rootTypeName(e, t, n = {}) {
                return this.encapsulate(e, t, Object.assign(Object.assign({}, n), {
                    iterateNone: !0
                }))
            }
            encapsulate(e, t, n) {
                const o = Object.assign(Object.assign({
                        sync: !0
                    }, this.options), n),
                    {
                        sync: i
                    } = o,
                    r = {},
                    a = {},
                    s = [],
                    c = [],
                    d = [],
                    l = !("cyclic" in o) || o.cyclic,
                    {
                        encapsulateObserver: u,
                        encapsulateError: p
                    } = o,
                    f = e => {
                        const t = Object.values(r);
                        if (o.iterateNone) return t.length ? t[0] : Ea(e);
                        if (o.returnTypeNames) return !!t.length && [...new Set(t)];
                        const n = Object.keys(a).length > 0,
                            i = wa(e) && (Ia(e, "$types") || Ia(e, "$symbolKeys"));
                        return n || t.length ? (!i && e && ya(e) ? t.length && (e.$types = r) : e = {
                            $: e,
                            $types: {
                                $: r
                            }
                        }, n && (e.$symbolKeys = a)) : i && (e = {
                            $: e,
                            $types: !0
                        }), e
                    },
                    h = (e, t) => la(this, void 0, void 0, function*() {
                        const n = yield Promise.all(t.map(e => e[1].p));
                        return yield Promise.all(n.map(function(n) {
                            return la(this, void 0, void 0, function*() {
                                const o = [],
                                    [i] = t.splice(0, 1),
                                    [r, , a, s, c, d, l] = i,
                                    u = g(r, n, a, s, o, !0, l),
                                    p = ga(u, ua);
                                return r && p ? (Pa(c, d, yield u.p), h(e, o)) : (r ? Pa(c, d, u) : e = p ? u.p : u, h(e, o))
                            })
                        })), e
                    }),
                    m = (e, t, n) => {
                        Object.assign(e, t);
                        const o = Ta.map(t => {
                            const n = e[t];
                            return delete e[t], n
                        });
                        n(), Ta.forEach((t, n) => {
                            e[t] = o[n]
                        })
                    },
                    g = (e, t, n, i, d, l, f) => {
                        let h, v = {};
                        const w = u ? function(o) {
                                var r;
                                const a = null !== (r = null != f ? f : i.type) && void 0 !== r ? r : Ea(t);
                                u(Object.assign(null != o ? o : v, {
                                    keypath: e,
                                    value: t,
                                    cyclic: n,
                                    stateObj: i,
                                    promisesData: d,
                                    resolvingTypesonPromise: l,
                                    awaitingTypesonPromise: ga(t, ua)
                                }, {
                                    type: a
                                }))
                            } : null,
                            b = (e, t, o) => {
                                var r;
                                try {
                                    return {
                                        value: g(e, t[o], Boolean(n), i, d, l)
                                    }
                                } catch (n) {
                                    if (!p) throw n;
                                    const a = null !== (r = null != f ? f : i.type) && void 0 !== r ? r : Ea(t),
                                        s = p({
                                            keypath: e,
                                            error: n,
                                            parent: t,
                                            key: o,
                                            stateObj: i,
                                            type: a
                                        });
                                    if (!s) throw n;
                                    if ("substitute" in s) return {
                                        value: s.substitute,
                                        substitute: !0
                                    };
                                    if (s.ignore) return;
                                    throw n
                                }
                            };
                        if (["string", "boolean", "number", "undefined"].includes(typeof t)) return void 0 === t || t === 1 / 0 || 0 === t || t === -1 / 0 || Number.isNaN(t) ? (h = i.replaced ? t : y(e, t, i, d, !1, l, w), h !== t && (v = {
                            replaced: h
                        })) : h = t, w && w(), h;
                        if (null === t) return w && w(), t;
                        if (n && t && "object" == typeof t && !i.iterateIn && !i.iterateUnsetNumeric) {
                            const o = s.indexOf(t);
                            if (-1 !== o) return r[e] = "#", w && w({
                                cyclicKeypath: c[o]
                            }), "#" + c[o];
                            !0 === n && (s.push(t), c.push(e))
                        }
                        const k = ya(t),
                            A = Ca(t),
                            S = (k || A) && (!this.plainObjectReplacers.length || i.replaced) || i.iterateIn ? t : y(e, t, i, d, k || A, null, w);
                        let E;
                        if (S !== t ? (h = S, v = {
                                replaced: S
                            }) : "" === e && ga(t, ua) ? (d.push([e, t, n, i, void 0, void 0, i.type]), h = t) : A && "object" !== i.iterateIn || "array" === i.iterateIn ? (E = new Array(t.length), v = {
                                clone: E
                            }) : !k && ("object" != typeof t || "toJSON" in t || ga(t, ua) || ga(t, Promise) || ga(t, ArrayBuffer)) && "object" !== i.iterateIn ? h = t : (E = {}, i.addLength && (E.length = t.length), v = {
                                clone: E
                            }), w && w(), o.iterateNone) return null != E ? E : h;
                        if (!E) return h;
                        if (i.iterateIn) {
                            for (const o in t) {
                                const r = {
                                    ownKeys: Ia(t, o)
                                };
                                m(i, r, () => {
                                    const r = e + (e ? "." : "") + ba(o),
                                        a = b(r, t, o),
                                        s = a && a.value;
                                    ga(s, ua) ? d.push([r, s, Boolean(n), i, E, o, i.type]) : a && (void 0 !== s || "substitute" in a) && Pa(E, o, s)
                                })
                            }
                            w && w({
                                endIterateIn: !0,
                                end: !0
                            })
                        } else xa(t).forEach(function(o) {
                            const r = e + (e ? "." : "") + ba(o);
                            m(i, {
                                ownKeys: !0
                            }, () => {
                                const e = b(r, t, o),
                                    a = e && e.value;
                                ga(a, ua) ? d.push([r, a, Boolean(n), i, E, o, i.type]) : e && (void 0 !== a || "substitute" in e) && Pa(E, o, a)
                            })
                        }), w && w({
                            endIterateOwn: !0,
                            end: !0
                        }), (i.iterateSymbols || o.iterateSymbols) && (Object.getOwnPropertySymbols(t).filter(e => Object.prototype.propertyIsEnumerable.call(t, e)).forEach(r => {
                            var s;
                            const c = function(e, t) {
                                const n = Symbol.keyFor(e);
                                if (void 0 !== n) return {
                                    for: n
                                };
                                const o = _a.find(t => Symbol[t] === e);
                                if (o) return {
                                    wellKnown: o
                                };
                                const i = t.get(e);
                                return void 0 !== i ? {
                                    registered: i
                                } : null
                            }(r, this.symbolsByValue);
                            if (!c) {
                                if (o.throwOnUnregisteredSymbol) throw new TypeError("Cannot serialize a Symbol-keyed property whose Symbol has no portable identity (not global, not well-known, and not in the `symbols` option): " + String(r));
                                return
                            }
                            const l = null !== (s = a[e]) && void 0 !== s ? s : a[e] = [],
                                u = {
                                    key: c
                                };
                            l.push(u);
                            const p = l.length - 1,
                                f = `$symbolKeys.${ba(e)}.${String(p)}.value`,
                                h = {
                                    value: t[r]
                                };
                            m(i, {
                                ownKeys: !0
                            }, () => {
                                const e = b(f, h, "value"),
                                    t = e && e.value;
                                ga(t, ua) ? d.push([f, t, Boolean(n), i, u, "value", i.type]) : e && (void 0 !== t || "substitute" in e) && Pa(u, "value", t)
                            })
                        }), w && w({
                            endIterateSymbols: !0,
                            end: !0
                        }));
                        if (i.iterateUnsetNumeric) {
                            const o = t.length;
                            for (let r = 0; r < o; r++) {
                                if (r in t) continue;
                                const o = `${e}${e?".":""}${String(r)}`;
                                m(i, {
                                    ownKeys: !1
                                }, () => {
                                    const e = g(o, void 0, Boolean(n), i, d, l);
                                    ga(e, ua) ? d.push([o, e, Boolean(n), i, E, r, i.type]) : void 0 !== e && Pa(E, r, e)
                                })
                            }
                            w && w({
                                endIterateUnsetNumeric: !0,
                                end: !0
                            })
                        }
                        return E
                    },
                    y = (e, t, n, o, a, s, c) => {
                        const d = a ? this.plainObjectReplacers : this.nonplainObjectReplacers;
                        let u = d.length;
                        for (; u--;) {
                            const a = d[u];
                            if (a.test(t, n)) {
                                const {
                                    type: d
                                } = a;
                                if (Object.hasOwn(this.revivers, d)) {
                                    const t = r[e];
                                    r[e] = t ? [d].concat(t) : d
                                }
                                if (Object.assign(n, {
                                        type: d,
                                        replaced: !0
                                    }), (i || !a.replaceAsync) && !a.replace) return c && c({
                                    typeDetected: !0
                                }), g(e, t, l && "readonly", n, o, s, d);
                                let u;
                                if (c && c({
                                        replacing: !0
                                    }), i || !a.replaceAsync) {
                                    if (void 0 === a.replace) throw new TypeError("Missing replacer");
                                    u = a.replace(t, n)
                                } else u = a.replaceAsync(t, n);
                                return g(e, u, l && "readonly", n, o, s, d)
                            }
                        }
                        return t
                    },
                    v = g("", e, l, null != t ? t : {}, d);
                if (d.length) return i && o.throwOnBadSyncType ? (() => {
                    throw new TypeError("Sync method requested but async result obtained")
                })() : Promise.resolve(h(v, d)).then(f);
                if (!i && o.throwOnBadSyncType) throw new TypeError("Async method requested but sync result obtained");
                return i && o.stringification ? [f(v)] : i ? f(v) : Promise.resolve(f(v))
            }
            encapsulateSync(e, t, n) {
                return this.encapsulate(e, t, Object.assign(Object.assign({
                    throwOnBadSyncType: !0
                }, n), {
                    sync: !0
                }))
            }
            encapsulateAsync(e, t, n) {
                return this.encapsulate(e, t, Object.assign(Object.assign({
                    throwOnBadSyncType: !0
                }, n), {
                    sync: !1
                }))
            }
            revive(e, t) {
                const n = Object.assign(Object.assign({
                        sync: !0
                    }, this.options), t),
                    {
                        sync: o
                    } = n;

                function i(e) {
                    if (o) return e;
                    if (n.throwOnBadSyncType) throw new TypeError("Async method requested but sync result obtained");
                    return Promise.resolve(e)
                }
                if (!e || "object" != typeof e || Array.isArray(e)) return i(e);
                let r = e.$types;
                if (!0 === r) return i(e.$);
                const a = e.$symbolKeys;
                let s = void 0 !== a;
                if (!r || "object" != typeof r || Array.isArray(r)) {
                    if (!a) return i(e);
                    r = {}
                }
                const c = [],
                    d = Object.create(null),
                    l = {};
                let u = !0;
                r.$ && ya(r.$) && (e = e.$, r = r.$, u = !1, s = !1, void 0 !== a && wa(e) && !Ia(e, "$symbolKeys") && (e.$symbolKeys = a, s = !0));
                const p = (e, t) => {
                        var n;
                        const [i] = null !== (n = this.revivers[e]) && void 0 !== n ? n : [];
                        if (!i) throw new Error("Unregistered type: " + e);
                        if (o && !("revive" in i)) return t;
                        if (!o && i.reviveAsync) return i.reviveAsync(t, l);
                        if (i.revive) return i.revive(t, l);
                        throw new Error("Missing reviver")
                    },
                    f = [];

                function h(e) {
                    return ga(e, Da) ? void 0 : e
                }
                const m = e => {
                        if (!wa(e)) return;
                        const t = s ? e.$symbolKeys : a;
                        t && (Object.entries(t).forEach(([t, n]) => {
                            const o = Aa(e, t, !0);
                            wa(o) && n.forEach(e => {
                                if (!Ia(e, "value")) return;
                                const t = function(e, t) {
                                        if ("for" in e) return Symbol.for(e.for);
                                        if ("wellKnown" in e) {
                                            const t = _a.find(t => t === e.wellKnown);
                                            if (!t) throw new Error("Unknown well-known Symbol: " + e.wellKnown);
                                            return Symbol[t]
                                        }
                                        if (!Ia(t, e.registered)) throw new Error("Unregistered symbol: " + e.registered);
                                        return t[e.registered]
                                    }(e.key, this.symbolsByName),
                                    n = h(e.value);
                                e.descriptor ? Object.defineProperty(o, t, Object.assign(Object.assign({
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0
                                }, e.descriptor), {
                                    value: n
                                })) : o[t] = n
                            })
                        }), s && delete e.$symbolKeys)
                    },
                    g = (() => {
                        if (!r) throw new Error("Found bad `types`");
                        const t = [];
                        if (Object.entries(r).forEach(([e, n]) => {
                                "#" !== n && [].concat(n).forEach(n => {
                                    var o;
                                    const [, {
                                        plain: i
                                    }] = null !== (o = this.revivers[n]) && void 0 !== o ? o : [null, {}];
                                    i && (t.push({
                                        keypath: e,
                                        type: n
                                    }), delete r[e])
                                })
                            }), t.length) return t.sort(Ma), t.reduce(function t(n, {
                            keypath: o,
                            type: i
                        }) {
                            if (ha(n)) return n.then(e => t(e, {
                                keypath: o,
                                type: i
                            }));
                            let r = Aa(e, o, !0);
                            if (r = p(i, r), ga(r, ua)) return r.then(t => {
                                const n = Sa(e, o, t, !0);
                                n === t && (e = n)
                            });
                            const a = Sa(e, o, r, !0);
                            a === r && (e = a)
                        }, void 0)
                    })();
                let y;
                return ga(g, ua) ? y = g.then(() => e) : (y = function e(t, n, i, a, s) {
                    if (u && "$types" === t) return;
                    const l = f.length,
                        h = Ia(r, t) ? r[t] : void 0,
                        m = Ca(n);
                    if (m || ya(n)) {
                        const o = m ? new Array(n.length) : {};
                        for (xa(n).forEach(r => {
                                const a = e(t + (t ? "." : "") + ba(r), n[r], null != i ? i : o, o, r),
                                    s = e => (ga(e, Da) ? Pa(o, r, void 0) : void 0 !== e && Pa(o, r, e), e);
                                ga(a, ua) ? f.push(a.then(e => s(e))) : s(a)
                            }), n = o; c.length;) {
                            const [
                                [e, t, n, o]
                            ] = c, i = Ia(d, t), r = i ? d[t] : Aa(e, t, !0);
                            if (!i && void 0 === r) break;
                            Pa(n, o, r), c.shift()
                        }
                    }
                    if (!h) return d[t] = n, n;
                    if ("#" === h) {
                        const e = n.slice(1),
                            t = Ia(d, e),
                            o = t ? d[e] : Aa(i, e, !0);
                        return t || void 0 !== o || c.push([i, e, a, s]), o
                    }
                    const g = e => {
                        const n = [].concat(h).reduce(function e(t, n) {
                            if (ga(t, ua)) return t.then(t => e(t, n));
                            if ("string" != typeof n) throw new TypeError("Bad type JSON");
                            return p(n, t)
                        }, e);
                        return ga(n, ua) ? n.then(e => (d[t] = e, e)) : (d[t] = n, n)
                    };
                    return !o && f.length > l ? ua.all(f.slice(l)).then(() => g(n)) : g(n)
                }("", e, null), f.length && (y = ua.resolve(y).then(e => ua.all([e, ...f])).then(([e]) => e))), a && (ha(y) ? y = y.then(e => (m(e), e)) : m(y)), ha(y) ? o && n.throwOnBadSyncType ? (() => {
                    throw new TypeError("Sync method requested but async result obtained")
                })() : ga(y, ua) ? y.p.then(h) : y : !o && n.throwOnBadSyncType ? (() => {
                    throw new TypeError("Async method requested but sync result obtained")
                })() : o ? h(y) : Promise.resolve(h(y))
            }
            reviveSync(e, t) {
                return this.revive(e, Object.assign(Object.assign({
                    throwOnBadSyncType: !0
                }, t), {
                    sync: !0
                }))
            }
            reviveAsync(e, t) {
                return this.revive(e, Object.assign(Object.assign({
                    throwOnBadSyncType: !0
                }, t), {
                    sync: !1
                }))
            }
            register(e, t) {
                const n = null != t ? t : {},
                    o = e => {
                        Ca(e) ? e.forEach(e => {
                            o(e)
                        }) : xa(e).forEach(t => {
                            if ("#" === t) throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
                            if (La.includes(t)) throw new TypeError("Plain JSON object types are reserved as type names");
                            let o = e[t];
                            if ([this.plainObjectReplacers, this.nonplainObjectReplacers].forEach(e => {
                                    const n = e.findIndex(e => e.type === t); - 1 !== n && e.splice(n, 1)
                                }), delete this.revivers[t], delete this.types[t], "function" == typeof o) {
                                const e = o;
                                o = {
                                    test: t => t && t.constructor === e,
                                    replace: e => Object.assign({}, e),
                                    revive: t => Object.assign(Object.create(e.prototype), t)
                                }
                            } else if (Ca(o)) {
                                const [e, t, n] = o;
                                o = {
                                    test: e,
                                    replace: t,
                                    revive: n
                                }
                            }
                            if (!(null == o ? void 0 : o.test)) return;
                            const i = {
                                type: t,
                                test: o.test.bind(o)
                            };
                            o.replace && (i.replace = o.replace.bind(o)), o.replaceAsync && (i.replaceAsync = o.replaceAsync.bind(o));
                            const r = "number" == typeof n.fallback ? n.fallback : n.fallback ? 0 : 1 / 0;
                            if (o.testPlainObjects ? this.plainObjectReplacers.splice(r, 0, i) : this.nonplainObjectReplacers.splice(r, 0, i), o.revive || o.reviveAsync) {
                                const e = {};
                                o.revive && (e.revive = o.revive.bind(o)), o.reviveAsync && (e.reviveAsync = o.reviveAsync.bind(o)), this.revivers[t] = [e, {
                                    plain: o.testPlainObjects
                                }]
                            }
                            this.types[t] = o
                        })
                    };
                return [].concat(e).forEach(e => {
                    o(e)
                }), this
            }
        }
        class Da {}
        Da.__typeson__type__ = "TypesonUndefined";
        const La = ["null", "boolean", "number", "string", "array", "object"];
        for (var Ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ra = new Uint8Array(256), Na = 0; Na < 64; Na++) Ra[Ba.codePointAt(Na)] = Na;
        var ja = function(e, t, n) {
                null == n && (n = e.byteLength);
                for (var o = new Uint8Array(e, 0, n), i = o.length, r = "", a = 0; a < i; a += 3) r += Ba[o[a] >> 2], r += Ba[(3 & o[a]) << 4 | o[a + 1] >> 4], r += Ba[(15 & o[a + 1]) << 2 | o[a + 2] >> 6], r += Ba[63 & o[a + 2]];
                return i % 3 == 2 ? r = r.slice(0, -1) + "=" : i % 3 == 1 && (r = r.slice(0, -2) + "=="), r
            },
            Fa = function(e, t) {
                var n = e.length;
                if (n % 4) throw new Error("Bad base64 length: not divisible by four");
                var o, i, r, a, s = .75 * e.length,
                    c = 0;
                "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
                for (var d = new ArrayBuffer(s, t), l = new Uint8Array(d), u = 0; u < n; u += 4) o = Ra[e.codePointAt(u)], i = Ra[e.codePointAt(u + 1)], r = Ra[e.codePointAt(u + 2)], a = Ra[e.codePointAt(u + 3)], l[c++] = o << 2 | i >> 4, l[c++] = (15 & i) << 4 | r >> 2, l[c++] = (3 & r) << 6 | 63 & a;
                return d
            };
        const Wa = {
                arraybuffer: {
                    test: e => "ArrayBuffer" === ma(e),
                    replace(e, t) {
                        t.buffers || (t.buffers = []);
                        const n = t.buffers.indexOf(e);
                        return -1 !== n ? {
                            index: n
                        } : (t.buffers.push(e), {
                            s: ja(e),
                            maxByteLength: e.maxByteLength,
                            resizable: e.resizable
                        })
                    },
                    revive(e, t) {
                        if (t.buffers || (t.buffers = []), Object.hasOwn(e, "index")) return t.buffers[e.index];
                        const n = Fa(e.s, e.resizable ? {
                            maxByteLength: e.maxByteLength
                        } : void 0);
                        return t.buffers.push(n), n
                    }
                }
            },
            Va = {
                audiodata: {
                    test: e => "AudioData" === ma(e),
                    replace(e) {
                        const {
                            format: t,
                            sampleRate: n,
                            numberOfFrames: o,
                            numberOfChannels: i,
                            timestamp: r
                        } = e, a = t.endsWith("-planar") ? i : 1, s = [];
                        let c = 0;
                        for (let t = 0; t < a; t++) {
                            const n = e.allocationSize({
                                planeIndex: t
                            });
                            s.push(n), c += n
                        }
                        const d = new ArrayBuffer(c);
                        let l = 0;
                        for (let t = 0; t < a; t++) {
                            const n = new Uint8Array(d, l, s[t]);
                            e.copyTo(n, {
                                planeIndex: t
                            }), l += s[t]
                        }
                        return {
                            format: t,
                            sampleRate: n,
                            numberOfFrames: o,
                            numberOfChannels: i,
                            timestamp: r,
                            data: d
                        }
                    },
                    revive: ({
                        format: e,
                        sampleRate: t,
                        numberOfFrames: n,
                        numberOfChannels: o,
                        timestamp: i,
                        data: r
                    }) => new AudioData({
                        format: e,
                        sampleRate: t,
                        numberOfFrames: n,
                        numberOfChannels: o,
                        timestamp: i,
                        data: new Uint8Array(r)
                    })
                }
            },
            Ua = {
                bigintObject: {
                    test: e => "object" == typeof e && ga(e, BigInt),
                    replace: String,
                    revive: e => new Object(BigInt(e))
                }
            },
            Ha = {
                bigint: {
                    test: e => "bigint" == typeof e,
                    replace: String,
                    revive: e => BigInt(e)
                }
            };

        function za(e) {
            return new Uint8Array(e).reduce((e, t) => e + String.fromCodePoint(t), "")
        }

        function Ga(e) {
            const t = new Uint8Array(e.length);
            for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
            return t.buffer
        }
        const Ka = {
            blob: {
                test: e => "Blob" === ma(e),
                replace(e) {
                    const t = new XMLHttpRequest;
                    if (t.overrideMimeType("text/plain; charset=x-user-defined"), t.open("GET", URL.createObjectURL(e), !1), t.send(), 200 !== t.status && 0 !== t.status) throw new Error("Bad Blob access: " + t.status);
                    return {
                        type: e.type,
                        stringContents: t.responseText
                    }
                },
                revive(e) {
                    const {
                        type: t,
                        stringContents: n
                    } = e;
                    return new Blob([Ga(n)], {
                        type: t
                    })
                },
                replaceAsync: e => new ua((t, n) => {
                    const o = new FileReader;
                    o.addEventListener("load", () => {
                        t({
                            type: e.type,
                            stringContents: za(o.result)
                        })
                    }), o.addEventListener("error", () => {
                        n(o.error)
                    }), o.readAsArrayBuffer(e)
                })
            }
        };
        const qa = {
                cryptokey: {
                    test: e => "CryptoKey" === ma(e) && e.extractable,
                    replaceAsync: e => new ua((t, n) => la(void 0, void 0, void 0, function*() {
                        let o;
                        try {
                            o = yield crypto.subtle.exportKey("jwk", e)
                        } catch (e) {
                            return void n(e)
                        }
                        t({
                            jwk: o,
                            algorithm: e.algorithm,
                            usages: e.usages
                        })
                    })),
                    revive(e) {
                        const {
                            jwk: t,
                            algorithm: n,
                            usages: o
                        } = e;
                        return crypto.subtle.importKey("jwk", t, n, !0, o)
                    }
                }
            },
            $a = {
                dataview: {
                    test: e => "DataView" === ma(e),
                    replace({
                        buffer: e,
                        byteOffset: t,
                        byteLength: n
                    }, o) {
                        o.buffers || (o.buffers = []);
                        const i = o.buffers.indexOf(e);
                        return -1 !== i ? {
                            index: i,
                            byteOffset: t,
                            byteLength: n
                        } : (o.buffers.push(e), {
                            encoded: ja(e),
                            maxByteLength: e.maxByteLength,
                            resizable: e.resizable,
                            byteOffset: t,
                            byteLength: n
                        })
                    },
                    revive(e, t) {
                        t.buffers || (t.buffers = []);
                        const {
                            byteOffset: n,
                            byteLength: o,
                            encoded: i,
                            index: r,
                            maxByteLength: a,
                            resizable: s
                        } = e;
                        let c;
                        return "index" in e ? c = t.buffers[r] : (c = Fa(i, s ? {
                            maxByteLength: a
                        } : a), t.buffers.push(c)), new DataView(c, n, o)
                    }
                }
            },
            Ya = {
                date: {
                    test: e => "Date" === ma(e),
                    replace(e) {
                        const t = e.getTime();
                        return Number.isNaN(t) ? "NaN" : t
                    },
                    revive: e => new Date("NaN" === e ? NaN : e)
                }
            },
            Qa = {
                domexception: {
                    test: e => "DOMException" === ma(e),
                    replace: e => ({
                        name: e.name,
                        message: e.message
                    }),
                    revive: ({
                        message: e,
                        name: t
                    }) => new DOMException(e, t)
                }
            },
            Ja = {};

        function Za(e) {
            Ja[e.name.toLowerCase()] = {
                test: t => ma(t) === e.name,
                replace: e => e.is2D ? {
                    a: e.a,
                    b: e.b,
                    c: e.c,
                    d: e.d,
                    e: e.e,
                    f: e.f
                } : {
                    m11: e.m11,
                    m12: e.m12,
                    m13: e.m13,
                    m14: e.m14,
                    m21: e.m21,
                    m22: e.m22,
                    m23: e.m23,
                    m24: e.m24,
                    m31: e.m31,
                    m32: e.m32,
                    m33: e.m33,
                    m34: e.m34,
                    m41: e.m41,
                    m42: e.m42,
                    m43: e.m43,
                    m44: e.m44
                },
                revive: t => Object.hasOwn(t, "a") ? new e([t.a, t.b, t.c, t.d, t.e, t.f]) : new e([t.m11, t.m12, t.m13, t.m14, t.m21, t.m22, t.m23, t.m24, t.m31, t.m32, t.m33, t.m34, t.m41, t.m42, t.m43, t.m44])
            }
        }
        "undefined" != typeof DOMMatrix && Za(DOMMatrix), "undefined" != typeof DOMMatrixReadOnly && Za(DOMMatrixReadOnly);
        const Xa = {};

        function es(e) {
            Xa[e.name.toLowerCase()] = {
                test: t => ma(t) === e.name,
                replace: e => ({
                    x: e.x,
                    y: e.y,
                    z: e.z,
                    w: e.w
                }),
                revive: ({
                    x: t,
                    y: n,
                    z: o,
                    w: i
                }) => new e(t, n, o, i)
            }
        }
        "undefined" != typeof DOMPoint && es(DOMPoint), "undefined" != typeof DOMPointReadOnly && es(DOMPointReadOnly);
        const ts = {
                domquad: {
                    test: e => "DOMQuad" === ma(e),
                    replace: e => ({
                        p1: e.p1,
                        p2: e.p2,
                        p3: e.p3,
                        p4: e.p4
                    }),
                    revive: ({
                        p1: e,
                        p2: t,
                        p3: n,
                        p4: o
                    }) => new DOMQuad(e, t, n, o)
                }
            },
            ns = {};

        function os(e) {
            ns[e.name.toLowerCase()] = {
                test: t => ma(t) === e.name,
                replace: e => ({
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height
                }),
                revive: ({
                    x: t,
                    y: n,
                    width: o,
                    height: i
                }) => new e(t, n, o, i)
            }
        }
        "undefined" != typeof DOMRect && os(DOMRect), "undefined" != typeof DOMRectReadOnly && os(DOMRectReadOnly);
        const is = {
                encodedaudiochunk: {
                    test: e => "EncodedAudioChunk" === ma(e),
                    replace(e) {
                        const {
                            type: t,
                            timestamp: n,
                            duration: o,
                            byteLength: i
                        } = e, r = new ArrayBuffer(i);
                        return e.copyTo(r), {
                            type: t,
                            timestamp: n,
                            duration: o,
                            data: r
                        }
                    },
                    revive({
                        type: e,
                        timestamp: t,
                        duration: n,
                        data: o
                    }) {
                        const i = {
                            type: e,
                            timestamp: t,
                            data: new Uint8Array(o)
                        };
                        return null != n && (i.duration = n), new EncodedAudioChunk(i)
                    }
                }
            },
            rs = {
                encodedvideochunk: {
                    test: e => "EncodedVideoChunk" === ma(e),
                    replace(e) {
                        const {
                            type: t,
                            timestamp: n,
                            duration: o,
                            byteLength: i
                        } = e, r = new ArrayBuffer(i);
                        return e.copyTo(r), {
                            type: t,
                            timestamp: n,
                            duration: o,
                            data: r
                        }
                    },
                    revive({
                        type: e,
                        timestamp: t,
                        duration: n,
                        data: o
                    }) {
                        const i = {
                            type: e,
                            timestamp: t,
                            data: new Uint8Array(o)
                        };
                        return null != n && (i.duration = n), new EncodedVideoChunk(i)
                    }
                }
            },
            as = {
                error: {
                    test: e => "Error" === ma(e),
                    replace: ({
                        name: e,
                        message: t,
                        cause: n,
                        stack: o,
                        fileName: i,
                        lineNumber: r,
                        columnNumber: a
                    }) => ({
                        name: e,
                        message: t,
                        cause: n,
                        stack: o,
                        fileName: i,
                        lineNumber: r,
                        columnNumber: a
                    }),
                    revive(e) {
                        const t = new Error(e.message);
                        return t.name = e.name, t.cause = e.cause, t.stack = e.stack, t.fileName = e.fileName, t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t
                    }
                }
            },
            ss = {};

        function cs(e) {
            ss[e.name.toLowerCase()] = {
                test: t => ga(t, e),
                replace: ({
                    name: e,
                    message: t,
                    cause: n,
                    stack: o,
                    fileName: i,
                    lineNumber: r,
                    columnNumber: a,
                    errors: s
                }) => ({
                    name: e,
                    message: t,
                    cause: n,
                    stack: o,
                    fileName: i,
                    lineNumber: r,
                    columnNumber: a,
                    errors: s
                }),
                revive(t) {
                    const n = "undefined" != typeof AggregateError && e === AggregateError ? new e(t.errors, t.message) : new e(t.message);
                    return n.name = t.name, n.cause = t.cause, n.stack = t.stack, n.fileName = t.fileName, n.lineNumber = t.lineNumber, n.columnNumber = t.columnNumber, n
                }
            }
        }[TypeError, RangeError, SyntaxError, ReferenceError, EvalError, URIError].forEach(e => cs(e)), "undefined" != typeof AggregateError && cs(AggregateError), "function" == typeof InternalError && cs(InternalError);
        const ds = {
                file: {
                    test: e => "File" === ma(e),
                    replace(e) {
                        const t = new XMLHttpRequest;
                        if (t.overrideMimeType("text/plain; charset=x-user-defined"), t.open("GET", URL.createObjectURL(e), !1), t.send(), 200 !== t.status && 0 !== t.status) throw new Error("Bad File access: " + t.status);
                        return {
                            type: e.type,
                            stringContents: t.responseText,
                            name: e.name,
                            lastModified: e.lastModified
                        }
                    },
                    revive: ({
                        name: e,
                        type: t,
                        stringContents: n,
                        lastModified: o
                    }) => new File([Ga(n)], e, {
                        type: t,
                        lastModified: o
                    }),
                    replaceAsync: e => new ua(function(t, n) {
                        const o = new FileReader;
                        o.addEventListener("load", function() {
                            t({
                                type: e.type,
                                stringContents: za(o.result),
                                name: e.name,
                                lastModified: e.lastModified
                            })
                        }), o.addEventListener("error", function() {
                            n(o.error)
                        }), o.readAsArrayBuffer(e)
                    })
                }
            },
            ls = {
                file: ds.file,
                filelist: {
                    test: e => "FileList" === ma(e),
                    replace(e) {
                        const t = [];
                        for (let n = 0; n < e.length; n++) t[n] = e.item(n);
                        return t
                    },
                    revive(e) {
                        class t {
                            constructor() {
                                this._files = arguments[0], this.length = this._files.length
                            }
                            item(e) {
                                return this._files[e]
                            }
                            get[Symbol.toStringTag]() {
                                return "FileList"
                            }
                        }
                        return new t(e)
                    }
                }
            },
            us = {
                gpucompilationinfo: {
                    test: e => "GPUCompilationInfo" === ma(e),
                    replace: ({
                        messages: e
                    }) => ({
                        messages: e
                    }),
                    revive({
                        messages: e
                    }) {
                        class t {
                            get[Symbol.toStringTag]() {
                                return "GPUCompilationInfo"
                            }
                            get messages() {
                                return e
                            }
                        }
                        return new t
                    }
                }
            },
            ps = {
                gpucompilationmessage: {
                    test: e => "GPUCompilationMessage" === ma(e),
                    replace: ({
                        length: e,
                        lineNum: t,
                        linePos: n,
                        message: o,
                        offset: i,
                        type: r
                    }) => ({
                        length: e,
                        lineNum: t,
                        linePos: n,
                        message: o,
                        offset: i,
                        type: r
                    }),
                    revive({
                        length: e,
                        lineNum: t,
                        linePos: n,
                        message: o,
                        offset: i,
                        type: r
                    }) {
                        class a {
                            get[Symbol.toStringTag]() {
                                return "GPUCompilationMessage"
                            }
                            get length() {
                                return e
                            }
                            get lineNum() {
                                return t
                            }
                            get linePos() {
                                return n
                            }
                            get message() {
                                return o
                            }
                            get offset() {
                                return i
                            }
                            get type() {
                                return r
                            }
                        }
                        return new a
                    }
                }
            },
            fs = {
                imagebitmap: {
                    test: e => "ImageBitmap" === ma(e),
                    replace(e) {
                        const t = document.createElement("canvas");
                        return t.getContext("2d").drawImage(e, 0, 0), {
                            width: e.width,
                            height: e.height,
                            dataURL: t.toDataURL()
                        }
                    },
                    revive(e) {
                        const t = "undefined" == typeof OffscreenCanvas ? document.createElement("canvas") : new OffscreenCanvas(e.width, e.height),
                            n = t.getContext("2d"),
                            o = document.createElement("img");
                        return o.addEventListener("load", function() {
                            try {
                                n.drawImage(o, 0, 0)
                            } catch (e) {}
                        }), o.src = e.dataURL, "undefined" == typeof OffscreenCanvas ? t : t.transferToImageBitmap()
                    },
                    reviveAsync(e) {
                        const t = document.createElement("canvas"),
                            n = t.getContext("2d"),
                            o = document.createElement("img");
                        return o.addEventListener("load", function() {
                            n.drawImage(o, 0, 0)
                        }), o.src = e.dataURL, new ua((e, n) => la(this, void 0, void 0, function*() {
                            try {
                                e(yield createImageBitmap(t))
                            } catch (e) {
                                n(e)
                            }
                        }))
                    }
                }
            },
            hs = {
                imagedata: {
                    test: e => "ImageData" === ma(e),
                    replace(e) {
                        const t = "Float16Array" === ma(e.data) ? "rgba-float16" : "rgba-unorm8";
                        return {
                            array: [...e.data],
                            width: e.width,
                            height: e.height,
                            pixelFormat: t,
                            colorSpace: e.colorSpace
                        }
                    },
                    revive(e) {
                        const {
                            array: t,
                            width: n,
                            height: o,
                            colorSpace: i,
                            pixelFormat: r
                        } = e;
                        return "rgba-float16" === r ? new ImageData(new Float16Array(t), n, o, {
                            colorSpace: i,
                            pixelFormat: r
                        }) : new ImageData(new Uint8ClampedArray(t), n, o, {
                            colorSpace: i,
                            pixelFormat: r
                        })
                    }
                }
            },
            ms = {
                test: e => ga(e, Intl.Collator),
                replace: e => e.resolvedOptions(),
                revive: e => new Intl.Collator(e.locale, e)
            },
            gs = {
                IntlCollator: ms,
                IntlDateTimeFormat: {
                    test: e => ga(e, Intl.DateTimeFormat),
                    replace: e => e.resolvedOptions(),
                    revive: e => new Intl.DateTimeFormat(e.locale, e)
                },
                IntlNumberFormat: {
                    test: e => ga(e, Intl.NumberFormat),
                    replace: e => e.resolvedOptions(),
                    revive: e => new Intl.NumberFormat(e.locale, e)
                }
            },
            ys = {
                map: {
                    test: e => "Map" === ma(e),
                    replace: e => e.entries().toArray(),
                    revive: e => new Map(e)
                }
            },
            vs = {
                nan: {
                    test: e => Number.isNaN(e),
                    replace: () => "NaN",
                    revive: () => NaN
                }
            },
            ws = {
                negativeZero: {
                    test: e => Object.is(e, -0),
                    replace: () => 0,
                    revive: () => -0
                }
            },
            bs = {
                StringObject: {
                    test: e => "String" === ma(e) && "object" == typeof e,
                    replace: String,
                    revive: e => new String(e)
                },
                BooleanObject: {
                    test: e => "Boolean" === ma(e) && "object" == typeof e,
                    replace: e => e.valueOf(),
                    revive: e => new Boolean(e)
                },
                NumberObject: {
                    test: e => "Number" === ma(e) && "object" == typeof e,
                    replace(e) {
                        const t = e.valueOf();
                        return Number.isNaN(t) ? "NaN" : t === 1 / 0 ? "Infinity" : t === -1 / 0 ? "-Infinity" : Object.is(t, -0) ? "-0" : t
                    },
                    revive: e => new Number("NaN" === e ? NaN : "Infinity" === e ? 1 / 0 : "-Infinity" === e ? -1 / 0 : "-0" === e ? -0 : e)
                }
            },
            ks = {
                quotaexceedederror: {
                    test: e => "QuotaExceededError" === ma(e),
                    replace: ({
                        message: e,
                        quota: t,
                        requested: n,
                        cause: o,
                        stack: i,
                        fileName: r,
                        lineNumber: a,
                        columnNumber: s
                    }) => ({
                        message: e,
                        quota: t,
                        requested: n,
                        cause: o,
                        stack: i,
                        fileName: r,
                        lineNumber: a,
                        columnNumber: s
                    }),
                    revive(e) {
                        const {
                            message: t,
                            quota: n,
                            requested: o
                        } = e, i = {};
                        null != n && (i.quota = n), null != o && (i.requested = o);
                        const r = new QuotaExceededError(t, i);
                        return r.cause = e.cause, r.stack = e.stack, r.fileName = e.fileName, r.lineNumber = e.lineNumber, r.columnNumber = e.columnNumber, r
                    }
                }
            },
            As = {
                regexp: {
                    test: e => "RegExp" === ma(e),
                    replace: e => ({
                        source: e.source,
                        flags: (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.unicodeSets ? "v" : "") + (e.hasIndices ? "d" : "") + (e.dotAll ? "s" : "")
                    }),
                    revive: ({
                        source: e,
                        flags: t
                    }) => new RegExp(e, t)
                }
            },
            Ss = {
                set: {
                    test: e => "Set" === ma(e),
                    replace: e => e.values().toArray(),
                    revive: e => new Set(e)
                }
            },
            Es = {};
        "function" == typeof Int8Array && [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ..."function" == typeof BigInt64Array ? [BigInt64Array, BigUint64Array] : [], ..."function" == typeof Float16Array ? [Float16Array] : []].forEach(e => function(e) {
            const t = e.name;
            Es[t.toLowerCase()] = {
                test: e => ma(e) === t,
                replace: e => (0 === e.byteOffset && e.byteLength === e.buffer.byteLength ? e : e.slice(0)).buffer,
                revive: t => "ArrayBuffer" === ma(t) ? new e(t) : t
            }
        }(e));
        const xs = {};
        "function" == typeof Int8Array && [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ..."function" == typeof BigInt64Array ? [BigInt64Array, BigUint64Array] : [], ..."function" == typeof Float16Array ? [Float16Array] : []].forEach(e => function(e) {
            const t = e.name;
            xs[t.toLowerCase()] = {
                test: e => ma(e) === t,
                replace({
                    buffer: e,
                    byteOffset: t,
                    length: n
                }, o) {
                    o.buffers || (o.buffers = []);
                    const i = o.buffers.indexOf(e);
                    return -1 !== i ? {
                        index: i,
                        byteOffset: t,
                        length: n
                    } : (o.buffers.push(e), {
                        maxByteLength: e.maxByteLength,
                        resizable: e.resizable,
                        encoded: ja(e),
                        byteOffset: t,
                        length: n
                    })
                },
                revive(t, n) {
                    n.buffers || (n.buffers = []);
                    const {
                        byteOffset: o,
                        length: i,
                        encoded: r,
                        index: a,
                        maxByteLength: s,
                        resizable: c
                    } = t;
                    let d;
                    return "index" in t ? d = n.buffers[a] : (d = Fa(r, c ? {
                        maxByteLength: s
                    } : void 0), n.buffers.push(d)), new e(d, o, i)
                }
            }
        }(e));
        const Is = {
                undef: {
                    test: (e, t) => void 0 === e && (t.ownKeys || !("ownKeys" in t)),
                    replace: () => 0,
                    revive: () => new Da
                }
            },
            Cs = {
                userObject: {
                    test: e => va(e),
                    replace: e => Object.assign({}, e),
                    revive: e => e
                }
            },
            Ts = {
                videoframe: {
                    test: e => "VideoFrame" === ma(e),
                    replaceAsync: e => new ua((t, n) => la(void 0, void 0, void 0, function*() {
                        try {
                            const {
                                format: n,
                                codedWidth: o,
                                codedHeight: i,
                                timestamp: r,
                                duration: a,
                                visibleRect: s,
                                displayWidth: c,
                                displayHeight: d,
                                colorSpace: l
                            } = e, u = new ArrayBuffer(e.allocationSize());
                            yield e.copyTo(u), t({
                                format: n,
                                codedWidth: o,
                                codedHeight: i,
                                timestamp: r,
                                duration: a,
                                visibleRect: {
                                    x: s.x,
                                    y: s.y,
                                    width: s.width,
                                    height: s.height
                                },
                                displayWidth: c,
                                displayHeight: d,
                                colorSpace: {
                                    primaries: l.primaries,
                                    transfer: l.transfer,
                                    matrix: l.matrix,
                                    fullRange: l.fullRange
                                },
                                data: u
                            })
                        } catch (e) {
                            n(e)
                        }
                    })),
                    revive({
                        format: e,
                        codedWidth: t,
                        codedHeight: n,
                        timestamp: o,
                        duration: i,
                        visibleRect: r,
                        displayWidth: a,
                        displayHeight: s,
                        colorSpace: c,
                        data: d
                    }) {
                        const l = {
                            format: e,
                            codedWidth: t,
                            codedHeight: n,
                            timestamp: o,
                            visibleRect: r,
                            displayWidth: a,
                            displayHeight: s,
                            colorSpace: c
                        };
                        return null != i && (l.duration = i), new VideoFrame(new Uint8Array(d), l)
                    }
                }
            },
            Ps = {
                webtransporterror: {
                    test: e => "WebTransportError" === ma(e),
                    replace: ({
                        message: e,
                        streamErrorCode: t,
                        cause: n,
                        stack: o,
                        fileName: i,
                        lineNumber: r,
                        columnNumber: a
                    }) => ({
                        message: e,
                        streamErrorCode: t,
                        cause: n,
                        stack: o,
                        fileName: i,
                        lineNumber: r,
                        columnNumber: a
                    }),
                    revive(e) {
                        const {
                            message: t,
                            streamErrorCode: n
                        } = e, o = new WebTransportError({
                            message: t,
                            streamErrorCode: n
                        });
                        return o.cause = e.cause, o.stack = e.stack, o.fileName = e.fileName, o.lineNumber = e.lineNumber, o.columnNumber = e.columnNumber, o
                    }
                }
            },
            _s = [{
                arrayNonindexKeys: {
                    testPlainObjects: !0,
                    test: (e, t) => !!Array.isArray(e) && (Object.keys(e).some(e => String(Number(e)) !== e) && (t.iterateIn = "object", t.addLength = !0), !0),
                    replace: (e, t) => (t.iterateUnsetNumeric = !0, e),
                    revive(e) {
                        if (Array.isArray(e)) return e;
                        const t = [];
                        return Object.entries(e).forEach(([e, n]) => {
                            t[e] = n
                        }), t
                    }
                }
            }, {
                sparseUndefined: {
                    test: (e, t) => void 0 === e && !1 === t.ownKeys,
                    replace: () => 0,
                    revive() {}
                }
            }],
            Ms = [vs, {
                infinity: {
                    test: e => e === 1 / 0,
                    replace: () => "Infinity",
                    revive: () => 1 / 0
                }
            }, {
                negativeInfinity: {
                    test: e => e === -1 / 0,
                    replace: () => "-Infinity",
                    revive: () => -1 / 0
                }
            }, ws],
            Os = ([Is, _s, bs, Ms, Ya, as, ss, As].concat("function" == typeof Map ? ys : [], "function" == typeof Set ? Ss : [], "function" == typeof ArrayBuffer ? Wa : [], "function" == typeof Uint8Array ? xs : [], "function" == typeof DataView ? $a : [], "undefined" != typeof Intl ? gs : [], "undefined" != typeof BigInt ? [Ha, Ua] : []), [Cs, Is, _s, bs, Ms, Ya, As, hs, fs, ds, ls, Ka, as, ss].concat("function" == typeof Map ? ys : [], "function" == typeof Set ? Ss : [], "function" == typeof ArrayBuffer ? Wa : [], "function" == typeof Uint8Array ? xs : [], "function" == typeof DataView ? $a : [], "undefined" != typeof crypto ? qa : [], "undefined" != typeof BigInt ? [Ha, Ua] : [], "undefined" != typeof DOMException ? Qa : [], "undefined" != typeof QuotaExceededError ? ks : [], "undefined" != typeof WebTransportError ? Ps : [], "undefined" != typeof DOMRect ? ns : [], "undefined" != typeof DOMPoint ? Xa : [], "undefined" != typeof DOMQuad ? ts : [], "undefined" != typeof DOMMatrix ? Ja : [], "undefined" != typeof AudioData ? Va : [], "undefined" != typeof EncodedAudioChunk ? is : [], "undefined" != typeof EncodedVideoChunk ? rs : [], "undefined" != typeof VideoFrame ? Ts : [], "undefined" != typeof GPUCompilationInfo ? us : [], "undefined" != typeof GPUCompilationMessage ? ps : [])),
            Ds = Os.concat({
                checkDataCloneException: {
                    test(e) {
                        const t = {}.toString.call(e).slice(8, -1);
                        if (["symbol", "function"].includes(typeof e) || ["Arguments", "Module", "Promise", "WeakMap", "WeakSet", "WeakRef", "FinalizationRegistry", "Generator", "AsyncGenerator", "String Iterator", "Array Iterator", "Map Iterator", "Set Iterator", "RegExp String Iterator", "Intl.Collator", "Intl.DateTimeFormat", "Intl.DisplayNames", "Intl.DurationFormat", "Intl.ListFormat", "Intl.Locale", "Intl.NumberFormat", "Intl.PluralRules", "Intl.RelativeTimeFormat", "Intl.Segmenter", "Event", "MessageChannel", "MessagePort", "ReadableStream", "WritableStream", "TransformStream", "OffscreenCanvas"].includes(t) || e && e.constructor && ["MessageChannel", "MessagePort"].includes(e.constructor.name) || ["ArrayBuffer", "DataView", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array"].includes(t) && function(e) {
                                if ("boolean" == typeof e.detached) return e.detached;
                                if (0 !== e.byteLength) return !1;
                                try {
                                    return new Uint8Array(e), !1
                                } catch (e) {
                                    return !0
                                }
                            }(e) || e && "object" == typeof e && "number" == typeof e.nodeType && "function" == typeof e.insertBefore) throw new DOMException("The object cannot be cloned.", "DataCloneError");
                        return !1
                    }
                }
            });
        Ds.concat({
            checkSharedArrayBufferException: {
                test(e) {
                    if ("SharedArrayBuffer" === {}.toString.call(e).slice(8, -1)) throw new DOMException("The object cannot be cloned.", "DataCloneError");
                    return !1
                }
            }
        });

        function Ls(e, t = 300, n = 1e3) {
            let o, i;
            return function(...r) {
                const a = this,
                    s = () => {
                        clearTimeout(o), clearTimeout(i), o = void 0, i = void 0, e.apply(a, r)
                    };
                clearTimeout(o), o = setTimeout(s, t), i || (i = setTimeout(s, n))
            }
        }

        function Bs(e) {
            if (!document.body || !document.body.appendChild) return void document.addEventListener("DOMContentLoaded", () => {
                Bs(e)
            });
            const t = document.createElement("iframe");
            t.style.display = "none", document.body.appendChild(t), t.contentWindow && (t.contentWindow.document.open(), t.contentWindow.document.write(`<script>${e}<\/script>`), t.contentWindow.document.close())
        }

        function Rs(e) {
            const t = function(e) {
                for (var t, n = "0123456789ABCDEF", o = "", i = 0; i < e.length; i++) t = e.charCodeAt(i), o += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
                return o
            }(function(e) {
                for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
                return t
            }(function(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                for (var n = 1732584193, o = -271733879, i = -1732584194, r = 271733878, a = 0; a < e.length; a += 16) {
                    const t = n,
                        s = o,
                        c = i,
                        d = r;
                    o = Vs(o = Vs(o = Vs(o = Vs(o = Ws(o = Ws(o = Ws(o = Ws(o = Fs(o = Fs(o = Fs(o = Fs(o = js(o = js(o = js(o = js(o, i = js(i, r = js(r, n = js(n, o, i, r, e[a + 0], 7, -680876936), o, i, e[a + 1], 12, -389564586), n, o, e[a + 2], 17, 606105819), r, n, e[a + 3], 22, -1044525330), i = js(i, r = js(r, n = js(n, o, i, r, e[a + 4], 7, -176418897), o, i, e[a + 5], 12, 1200080426), n, o, e[a + 6], 17, -1473231341), r, n, e[a + 7], 22, -45705983), i = js(i, r = js(r, n = js(n, o, i, r, e[a + 8], 7, 1770035416), o, i, e[a + 9], 12, -1958414417), n, o, e[a + 10], 17, -42063), r, n, e[a + 11], 22, -1990404162), i = js(i, r = js(r, n = js(n, o, i, r, e[a + 12], 7, 1804603682), o, i, e[a + 13], 12, -40341101), n, o, e[a + 14], 17, -1502002290), r, n, e[a + 15], 22, 1236535329), i = Fs(i, r = Fs(r, n = Fs(n, o, i, r, e[a + 1], 5, -165796510), o, i, e[a + 6], 9, -1069501632), n, o, e[a + 11], 14, 643717713), r, n, e[a + 0], 20, -373897302), i = Fs(i, r = Fs(r, n = Fs(n, o, i, r, e[a + 5], 5, -701558691), o, i, e[a + 10], 9, 38016083), n, o, e[a + 15], 14, -660478335), r, n, e[a + 4], 20, -405537848), i = Fs(i, r = Fs(r, n = Fs(n, o, i, r, e[a + 9], 5, 568446438), o, i, e[a + 14], 9, -1019803690), n, o, e[a + 3], 14, -187363961), r, n, e[a + 8], 20, 1163531501), i = Fs(i, r = Fs(r, n = Fs(n, o, i, r, e[a + 13], 5, -1444681467), o, i, e[a + 2], 9, -51403784), n, o, e[a + 7], 14, 1735328473), r, n, e[a + 12], 20, -1926607734), i = Ws(i, r = Ws(r, n = Ws(n, o, i, r, e[a + 5], 4, -378558), o, i, e[a + 8], 11, -2022574463), n, o, e[a + 11], 16, 1839030562), r, n, e[a + 14], 23, -35309556), i = Ws(i, r = Ws(r, n = Ws(n, o, i, r, e[a + 1], 4, -1530992060), o, i, e[a + 4], 11, 1272893353), n, o, e[a + 7], 16, -155497632), r, n, e[a + 10], 23, -1094730640), i = Ws(i, r = Ws(r, n = Ws(n, o, i, r, e[a + 13], 4, 681279174), o, i, e[a + 0], 11, -358537222), n, o, e[a + 3], 16, -722521979), r, n, e[a + 6], 23, 76029189), i = Ws(i, r = Ws(r, n = Ws(n, o, i, r, e[a + 9], 4, -640364487), o, i, e[a + 12], 11, -421815835), n, o, e[a + 15], 16, 530742520), r, n, e[a + 2], 23, -995338651), i = Vs(i, r = Vs(r, n = Vs(n, o, i, r, e[a + 0], 6, -198630844), o, i, e[a + 7], 10, 1126891415), n, o, e[a + 14], 15, -1416354905), r, n, e[a + 5], 21, -57434055), i = Vs(i, r = Vs(r, n = Vs(n, o, i, r, e[a + 12], 6, 1700485571), o, i, e[a + 3], 10, -1894986606), n, o, e[a + 10], 15, -1051523), r, n, e[a + 1], 21, -2054922799), i = Vs(i, r = Vs(r, n = Vs(n, o, i, r, e[a + 8], 6, 1873313359), o, i, e[a + 15], 10, -30611744), n, o, e[a + 6], 15, -1560198380), r, n, e[a + 13], 21, 1309151649), i = Vs(i, r = Vs(r, n = Vs(n, o, i, r, e[a + 4], 6, -145523070), o, i, e[a + 11], 10, -1120210379), n, o, e[a + 2], 15, 718787259), r, n, e[a + 9], 21, -343485551), n = Us(n, t), o = Us(o, s), i = Us(i, c), r = Us(r, d)
                }
                return Array(n, o, i, r)
            }(function(e) {
                for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
                for (n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
                return t
            }(e), 8 * e.length)));
            return t.toLowerCase()
        }

        function Ns(e, t, n, o, i, r) {
            return Us(function(e, t) {
                return e << t | e >>> 32 - t
            }(Us(Us(t, e), Us(o, r)), i), n)
        }

        function js(e, t, n, o, i, r, a) {
            return Ns(t & n | ~t & o, e, t, i, r, a)
        }

        function Fs(e, t, n, o, i, r, a) {
            return Ns(t & o | n & ~o, e, t, i, r, a)
        }

        function Ws(e, t, n, o, i, r, a) {
            return Ns(t ^ n ^ o, e, t, i, r, a)
        }

        function Vs(e, t, n, o, i, r, a) {
            return Ns(n ^ (t | ~o), e, t, i, r, a)
        }

        function Us(e, t) {
            const n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }
        n.dn(Ls), n.dn(Rs);
        let Hs, zs = "";
        try {
            const e = window.location.href.split("?")[0].replace(/\/[^/]*$/, "");
            zs = Rs(e), Hs = localStorage.getItem("savegame_idbfs_hash")
        } catch (N) {}

        function Gs(e) {
            if (!Hs) return e;
            try {
                return e.replace(zs, Hs)
            } catch (t) {
                return e
            }
        }
        var Ks = function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        };
        const qs = 1e4,
            $s = 2e4,
            Ys = "poki_gs_state_token",
            Qs = "poki_playtime",
            Js = "poki_ignore",
            Zs = [Ys, Qs],
            Xs = [];
        let ec = performance.now();

        function tc(e) {
            return !e || ("UnityCache" === e || ("EM_PRELOAD_CACHE" === e || "emscripten_filesystem" === e))
        }

        function nc(e) {
            return !e || (!!Zs.includes(e) || !!e.startsWith(Js))
        }

        function oc(e, t) {
            return new Promise((n, o) => {
                if (!e) return void o(new Error("Cannot export database without a name"));
                const i = indexedDB.open(e, t);
                i.onsuccess = t => {
                    const i = t.target.result,
                        r = Array.from(i.objectStoreNames).filter(e => ! function(e) {
                            return e.startsWith(Js)
                        }(e)),
                        a = {
                            name: e,
                            version: i.version,
                            objectStores: []
                        };
                    let s = r.length;
                    if (0 === s) return i.close(), void o(new Error(`Database ${e} has no exportable stores.`));
                    r.forEach(t => {
                        const o = i.transaction(t, "readonly").objectStore(t),
                            r = Array.from(o.indexNames),
                            c = [],
                            d = {
                                name: t,
                                keyPath: o.keyPath,
                                autoIncrement: o.autoIncrement,
                                indexes: [],
                                data: []
                            };
                        r.forEach(e => {
                            const t = o.index(e),
                                n = {
                                    name: e,
                                    keyPath: t.keyPath,
                                    unique: t.unique,
                                    multiEntry: t.multiEntry
                                };
                            d.indexes.push(n)
                        });
                        const l = o.openCursor();
                        l.onerror = () => {
                            console.warn(`%cPOKI_SAVEGAME:%c error fetching data from object store ${t}`, "font-weight: bold", ""), s--, 0 === s && (i.close(), n(a))
                        }, l.onsuccess = o => {
                            const r = o.target;
                            if (!r) return;
                            const l = r.result;
                            if (null === l) return d.data = c, a.objectStores.push(d), s--, void(0 === s && (i.close(), n(a)));
                            (function(e, t, n) {
                                return !("string" != typeof n || ("/data" !== e || "FILE_DATA" !== t || !n.endsWith(".zip") && !n.includes("liveupdate.arc")) && !n.startsWith(Js))
                            })(e, t, l.primaryKey) || c.push({
                                k: Gs(l.primaryKey),
                                v: l.value
                            }), l.continue()
                        }
                    })
                }, i.onerror = e => {
                    console.warn("%cPOKI_SAVEGAME:%c error opening database", "font-weight: bold", "", e.target.error), o(e.target.error)
                }
            })
        }

        function ic() {
            console.info("%cPOKI_SAVEGAME:%c setupCloudSaveExports", "font-weight: bold", "");
            const e = (new Oa).register([Os]),
                t = () => {
                    const t = performance.now(),
                        n = Math.ceil((t - ec) / 1e3);
                    let o = 0;
                    try {
                        o = Number.parseInt(localStorage.getItem(Qs) || "0", 10)
                    } catch (e) {
                        ne("error getting current playtime", e)
                    }
                    const i = o + n;
                    try {
                        localStorage.setItem(Qs, i.toString())
                    } catch (e) {
                        ne("error setting current playtime", e)
                    }
                    ec = t;
                    try {
                        const t = {};
                        for (let e = 0; e < localStorage.length; e++) {
                            const n = localStorage.key(e);
                            if (!nc(n)) {
                                const e = localStorage.getItem(n);
                                null !== e && (t[n] = e)
                            }
                        }(function() {
                            return Ks(this, void 0, void 0, function*() {
                                if (!("databases" in indexedDB)) return console.warn("%cPOKI_SAVEGAME:%c indexedDB.databases() is not supported in this browser.", "font-weight: bold", ""), [];
                                const e = yield indexedDB.databases();
                                0 === e.length && (console.info("%cPOKI_SAVEGAME:%c No databases found, using IDBDatabaseInfos", "font-weight: bold", "", Xs.map(e => e.name)), e.push(...Xs));
                                const t = [];
                                return e.forEach(e => Ks(this, void 0, void 0, function*() {
                                    tc(e.name) || t.push(oc(e.name || "", e.version))
                                })), (yield Promise.allSettled(t)).filter(e => "fulfilled" === e.status).map(e => e.value)
                            })
                        })().then(o => {
                            var r;
                            const a = {
                                ls: JSON.stringify(t),
                                idb: e.stringify(o),
                                playtimeInterval: n,
                                metadata: {
                                    playtime: i
                                },
                                version: 1
                            };
                            null === (r = null === window || void 0 === window ? void 0 : window.top) || void 0 === r || r.postMessage({
                                type: "mutateSaveGame",
                                content: a
                            }, "*")
                        })
                    } catch (e) {
                        console.warn("%cPOKI_SAVEGAME:%c savegame error", "font-weight: bold", "", e)
                    }
                };

            function n(e, t) {
                const n = {
                    name: e,
                    version: t
                };
                Xs.find(n => n.name === e && n.version === t) || Xs.push(n)
            }
            const o = `(${function(){window.addEventListener("storage",e=>{var t;e.key&&(["poki_gs_state_token","poki_playtime","savegame_idbfs_hash"].includes(e.key)||e.key.startsWith("poki_ignore"))||null===(t=null===window||void 0===window?void 0:window.parent)||void 0===t||t.postMessage({type:"LocalStorageChanged"},"*")})}.toString()})();`;
            Bs(o);
            const i = Ls(() => {
                console.info("%cPOKI_SAVEGAME:%c trigger mutate", "font-weight: bold", ""), t()
            }, qs, $s);
            window.addEventListener("message", e => Ks(this, void 0, void 0, function*() {
                var t, n;
                "LocalStorageChanged" !== (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.type) ? "pokiSetEtag" === (null === (n = null == e ? void 0 : e.data) || void 0 === n ? void 0 : n.type) && (e => {
                    const {
                        etag: t
                    } = e.data;
                    try {
                        localStorage.setItem(Ys, t)
                    } catch (e) {
                        ne("error setting etag", e)
                    }
                })(e) : i()
            }));
            const r = (e, t) => {
                    tc(e) ? console.info(`Skip IDB Pulse - DB: ${e}, action: ${t}`) : i()
                },
                a = window.IDBObjectStore.prototype.put;
            window.IDBObjectStore.prototype.put = function(...e) {
                n(this.transaction.db.name, this.transaction.db.version);
                const t = a.apply(this, e);
                return r(this.transaction.db.name, "put"), t
            };
            const s = window.IDBObjectStore.prototype.add;
            window.IDBObjectStore.prototype.add = function(...e) {
                n(this.transaction.db.name, this.transaction.db.version);
                const t = s.apply(this, e);
                return r(this.transaction.db.name, "add"), t
            };
            const c = window.IDBObjectStore.prototype.delete;
            window.IDBObjectStore.prototype.delete = function(...e) {
                n(this.transaction.db.name, this.transaction.db.version);
                const t = c.apply(this, e);
                return r(this.transaction.db.name, "delete"), t
            };
            const d = window.IDBObjectStore.prototype.clear;
            window.IDBObjectStore.prototype.clear = function(...e) {
                n(this.transaction.db.name, this.transaction.db.version);
                const t = d.apply(this, e);
                return r(this.transaction.db.name, "clear"), t
            };
            const l = indexedDB.open.bind(indexedDB);
            indexedDB.open = function(e, t) {
                return e && n(e, "number" == typeof t ? t : 1), l(e, t)
            }
        }
        var rc, ac, sc, cc, dc, lc, uc = function(e, t, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(e) {
                        try {
                            c(o.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(o.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((o = o.apply(e, t || [])).next())
                })
            },
            pc = function(e, t, n, o) {
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? o : "a" === n ? o.call(e) : o ? o.value : t.get(e)
            },
            fc = function(e, t, n, o, i) {
                if ("m" === o) throw new TypeError("Private method is not writable");
                if ("a" === o && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            };
        const hc = "none",
            mc = "requesting";
        rc = new WeakMap, ac = new WeakMap, sc = new WeakMap, cc = new WeakMap, dc = new WeakMap, lc = new WeakMap;
        const gc = class {
            constructor() {
                rc.set(this, {}), ac.set(this, ia.adTiming), sc.set(this, new MutationObserver(this.mutationObserved.bind(this))), cc.set(this, hc), dc.set(this, void 0), lc.set(this, !1), this.init = e => {
                    if (pc(this, lc, "f")) return;
                    fc(this, lc, !0, "f");
                    const {
                        onReady: t = null
                    } = e;
                    z.isPokiIframe && setTimeout(ct.trackSavegames, 1e4), z.cloudSaveGames && ic(), z.kioskMode && document.addEventListener("keydown", e => {
                        "Escape" === e.key && this.postSDKMessage("keydownEscape")
                    });
                    const n = () => {
                        let e, n = 1;
                        pc(this, rc, "f").playgroundInit = () => {
                            clearTimeout(e), null == t || t()
                        };
                        const o = () => {
                            this.postSDKMessage("adTiming", {
                                adTiming: pc(this, ac, "f"),
                                specialConditions: pc(this, dc, "f")
                            }), n++, e = setTimeout(o, 100 * n)
                        };
                        e = setTimeout(o, 100 * n)
                    };
                    if (z.forceAd) return fc(this, ac, {
                        preroll: !0,
                        timeBetweenAds: 12e4,
                        timePerTry: 7e3,
                        startAdsAfter: 0
                    }, "f"), void n();
                    if ($.debug) return void n();
                    sa().then(e => {
                        fc(this, ac, (null == e ? void 0 : e.adTiming) || ia.adTiming, "f"), fc(this, dc, (null == e ? void 0 : e.specialConditions) || [], "f"), "mobile" === z.device ? fc(this, ac, {
                            startAdsAfter: 36e4,
                            timeBetweenAds: 36e4
                        }, "f") : "tablet" === z.device ? fc(this, ac, {
                            startAdsAfter: 24e4,
                            timeBetweenAds: 24e4
                        }, "f") : fc(this, ac, {
                            startAdsAfter: 12e4,
                            timeBetweenAds: 18e4
                        }, "f"), n(), e && Br(e).catch(e => {
                            ne("error in maybeStartPlaytest", e)
                        })
                    }).catch(() => {
                        n()
                    })
                }, this.isAdBlocked = () => !1, this.postSDKMessage = (t, ...n) => uc(this, [t, ...n], void 0, function*(t, n = {}) {
                    G.sendMessage(e.message.sendCommand, {
                        event: t,
                        data: n
                    }, window.top)
                }), this.handleMessageReceived = t => {
                    var n, o, i, r, a, s, c, d, l, u, p, f;
                    switch (null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.type) {
                        case "hoist_displayAd_onDisplayRendered":
                            {
                                const e = null === (o = null == t ? void 0 : t.data) || void 0 === o ? void 0 : o.data;
                                if (e) {
                                    const {
                                        opportunityId: t,
                                        isEmpty: n
                                    } = e;
                                    null === (r = null === (i = pc(this, rc, "f")[t]) || void 0 === i ? void 0 : i.onDisplayRendered) || void 0 === r || r.call(i, n)
                                }
                                break
                            }
                        case "hoist_displayAd_onCanDestroy":
                            {
                                const e = null === (a = null == t ? void 0 : t.data) || void 0 === a ? void 0 : a.data;
                                if (e) {
                                    const {
                                        opportunityId: t
                                    } = e;
                                    null === (c = null === (s = pc(this, rc, "f")[t]) || void 0 === s ? void 0 : s.onCanDestroy) || void 0 === c || c.call(s)
                                }
                                break
                            }
                        case "hoist_videoAd_onStart":
                            {
                                const n = null === (d = null == t ? void 0 : t.data) || void 0 === d ? void 0 : d.data;
                                if (n) {
                                    const {
                                        opportunityId: t
                                    } = n;
                                    if (pc(this, cc, "f") !== mc) return;
                                    if (!pc(this, rc, "f")[t]) return;
                                    const {
                                        onStart: o,
                                        position: i
                                    } = pc(this, rc, "f")[t];
                                    o && o(), X.dispatchEvent(e.playtest.startVideo, {
                                        position: i
                                    }), fc(this, cc, "playing", "f")
                                }
                                break
                            }
                        case "hoist_videoAd_onFinish":
                            {
                                const n = null === (l = null == t ? void 0 : t.data) || void 0 === l ? void 0 : l.data;
                                if (n) {
                                    const {
                                        opportunityId: t,
                                        rewardAllowed: o
                                    } = n;
                                    if (!pc(this, rc, "f")[t]) return;
                                    const {
                                        onFinish: i,
                                        position: r
                                    } = pc(this, rc, "f")[t];
                                    if (pc(this, cc, "f") === mc) {
                                        if (i) try {
                                            r === e.ads.position.rewarded ? i(!!o) : i()
                                        } catch (e) {
                                            console.error("%cPOKI:%c error in onFinish callback", "font-weight: bold", "", e)
                                        }
                                        return fc(this, cc, hc, "f"), void delete pc(this, rc, "f")[t]
                                    }
                                    if (i) try {
                                        i(o)
                                    } catch (e) {
                                        console.error("%cPOKI:%c error in onFinish callback", "font-weight: bold", "", e)
                                    }
                                    X.dispatchEvent(e.playtest.stopVideo), fc(this, cc, hc, "f"), delete pc(this, rc, "f")[t]
                                }
                                break
                            }
                        case "hoist_playgroundInit":
                            null === (p = (u = pc(this, rc, "f")).playgroundInit) || void 0 === p || p.call(u), delete pc(this, rc, "f").playgroundInit;
                            break;
                        case "hoist_displayAd_destroy":
                            {
                                const e = null === (f = null == t ? void 0 : t.data) || void 0 === f ? void 0 : f.data;
                                if (e) {
                                    const {
                                        containerID: t
                                    } = e;
                                    this.cleanAdContainer(t)
                                }
                                break
                            }
                        case "hoist_refocus_game":
                            {
                                const e = new Event("focus");window.dispatchEvent(e);
                                break
                            }
                    }
                }, this.cleanAdContainer = e => {
                    const t = document.querySelector(`*[data-poki-ad-container-id="${e}"]`);
                    if (t) {
                        for (; t.lastChild;) t.removeChild(t.lastChild);
                        t.removeAttribute("data-poki-opportunity-id"), t.removeAttribute("data-poki-ad-container-id")
                    }
                }
            }
            forcePreroll() {
                this.postSDKMessage("forcePreroll")
            }
            startStartAdsAfterTimer() {
                this.postSDKMessage("startStartAdsAfterTimer")
            }
            muteAd() {
                this.postSDKMessage("muteAd")
            }
            setVolume(e) {
                this.postSDKMessage("setVolume", {
                    volume: e || 1
                })
            }
            requestAd(t) {
                const {
                    onStart: n,
                    onFinish: o,
                    position: i,
                    customCriteria: r
                } = t, a = qe();
                if (pc(this, cc, "f") === hc) fc(this, cc, mc, "f"), pc(this, rc, "f")[a] = {
                    position: i,
                    onStart: () => {
                        if (n && "function" == typeof n) try {
                            n()
                        } catch (e) {
                            console.error("%cPOKI:%c error in onStart callback", "font-weight: bold", "", e)
                        }
                    },
                    onFinish: e => {
                        if (o && "function" == typeof o) try {
                            o({
                                rewardAllowed: e
                            })
                        } catch (e) {
                            console.error("%cPOKI:%c error in onFinish callback", "font-weight: bold", "", e)
                        }
                    }
                }, this.postSDKMessage("requestVideoAd", {
                    position: i,
                    customCriteria: r,
                    opportunityId: a
                });
                else if (o) try {
                    i === e.ads.position.rewarded ? o({
                        rewardAllowed: !1
                    }) : o()
                } catch (e) {
                    console.error("%cPOKI:%c error in onFinish callback", "font-weight: bold", "", e)
                }
            }
            displayAd(e) {
                if (z.kioskMode) return !1;
                const {
                    container: t,
                    size: n,
                    opportunityId: o,
                    onCanDestroy: i,
                    onDisplayRendered: r
                } = e;
                if (!t) return console.error("%cPOKI:%c PokiSDK.displayAd() given container does not exist", "font-weight: bold", ""), !1;
                const a = t.getAttribute("data-poki-ad-container-id") || qe();
                this.cleanAdContainer(a), t.setAttribute("data-poki-ad-container-id", a), t.setAttribute("data-poki-opportunity-id", o);
                const [s, c] = n.split("x").map(e => parseInt(e, 10)), d = document.createElement("div");
                d.style.width = `${s}px`, d.style.height = `${c}px`, d.style.overflow = "hidden", d.style.position = "relative", d.style.pointerEvents = "none", t.appendChild(d);
                const l = t.getBoundingClientRect(),
                    u = {
                        x: (null == l ? void 0 : l.x) || 0,
                        y: (null == l ? void 0 : l.y) || 0,
                        w: s || 0,
                        h: c || 0
                    };
                return pc(this, rc, "f")[o] = {
                    onCanDestroy: () => {
                        i && "function" == typeof i && i()
                    },
                    onDisplayRendered: e => {
                        r && "function" == typeof r && r(e)
                    }
                }, pc(this, sc, "f").observe(t.parentElement || document.body, {
                    childList: !0
                }), pc(this, sc, "f").observe(t, {
                    attributes: !0,
                    attributeFilter: ["style"]
                }), this.postSDKMessage("displayAd", {
                    containerID: a,
                    adUnitPath: ra(n),
                    size: e.size,
                    opportunityId: o,
                    duringGameplay: e.duringGameplay,
                    location: u
                }), !0
            }
            destroyAd(e) {
                if (!e) return void console.error("%cPOKI:%c PokiSDK.destroyAd() given container does not exist", "font-weight: bold", "");
                const t = e.getAttribute("data-poki-opportunity-id"),
                    n = e.getAttribute("data-poki-ad-container-id");
                n && (delete pc(this, rc, "f")[t], this.cleanAdContainer(n), this.postSDKMessage("destroyAd", {
                    containerID: n,
                    opportunityId: t
                }))
            }
            mutationObserved(e) {
                e.forEach(e => {
                    var t, n, o, i, r;
                    "childList" === (null == e ? void 0 : e.type) && (null === (n = null === (t = e.removedNodes) || void 0 === t ? void 0 : t.forEach) || void 0 === n || n.call(t, e => {
                        var t;
                        (null === (t = null == e ? void 0 : e.getAttribute) || void 0 === t ? void 0 : t.call(e, "data-poki-ad-container-id")) && this.destroyAd(e)
                    })), "attributes" === (null == e ? void 0 : e.type) && (null === (i = null === (o = null == e ? void 0 : e.target) || void 0 === o ? void 0 : o.getAttribute) || void 0 === i ? void 0 : i.call(o, "data-poki-ad-container-id")) && ("none" === (null == (r = e.target) ? void 0 : r.style.display) || parseInt(r.style.opacity, 10) < 1 || "hidden" === r.style.visibility) && this.destroyAd(e.target)
                })
            }
            stopVideoAd() {}
            resizeVideoAd() {}
            setAdTimings(e) {}
            setSpecialConditions(e) {}
            setNrAds(e) {}
            endBreak() {}
        };
        ! function(e) {
            for (const t in e) t.startsWith("__") || (window.PokiSDK[t] = e[t])
        }(new class extends oa {
            constructor() {
                super(new gc, !0), window.addEventListener("message", this.__monetization.handleMessageReceived)
            }
        })
    })()
})();