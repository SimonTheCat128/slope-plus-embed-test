"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5770], {
        23170(e, o, t) {
            t.r(o), t.d(o, {
                default: () => w,
                familyModeCookieConsentGBNotification: () => _
            });
            var i = t(13526),
                a = t(10061),
                n = t(74606),
                l = t(38739),
                c = t(28147),
                s = t(9722),
                d = t(53242),
                r = t(60529),
                f = t(1224),
                g = t(21246),
                u = t(55221),
                m = t(52405),
                h = t(14516),
                y = t(58738);
            const p = "familyModeCookieConsentGBNotification",
                _ = () => ({
                    notification: {
                        id: p,
                        title: "Cookies",
                        titleIcon: "ui-icons-lock",
                        childComponent: {
                            name: "FamilyModeCookieGBNotification"
                        },
                        blocking: !0,
                        showCloseButtonInHeader: !1
                    }
                });

            function w() {
                const [e, o] = (0, a.useState)(!1), t = (0, n.wA)(), _ = (0, n.d4)(s.FR), w = (0, n.d4)(d.Ir), k = (0, n.d4)(d.dV), C = (0, n.d4)(r.Lf), b = (e, o) => {
                    t((0, d.rB)({
                        shown: !0
                    })), t((0, f.oe)({
                        id: p
                    })), o && window.loadTS2(), e && (window.localStorageConsentSet = !0, (0, m.F)({
                        category: "consent",
                        action: "full"
                    }), t((0, c.F8)({
                        consentStatus: g.T2
                    }))), t((0, d.S9)({
                        toggle: o
                    })), (0, u.M)({
                        name: "poki_analytics",
                        value: o
                    }), t((0, d.LX)({
                        toggle: e
                    })), (0, u.M)({
                        name: "poki_ads_allowed",
                        value: e
                    }), !C || e && o || window.location.reload()
                }, N = e => {
                    b(e, e)
                }, B = () => {
                    (0, m.F)({
                        category: "privacyCenter",
                        action: "pokiAnalytics",
                        label: w ? "off" : "on"
                    }), t((0, d.S9)({
                        toggle: !w
                    })), (0, u.M)({
                        name: "poki_analytics",
                        value: !w
                    })
                }, v = () => {
                    (0, m.F)({
                        category: "privacyCenter",
                        action: "adsAllowed",
                        label: k ? "off" : "on"
                    }), t((0, d.LX)({
                        toggle: !k
                    })), (0, u.M)({
                        name: "poki_ads_allowed",
                        value: !k
                    })
                };
                return e ? (0, y.FD)("div", {
                    className: h.familyModeCookieGBNotification__moreOptions,
                    children: [(0, y.Y)("small", {
                        children: 'Use the toggles below to decide what cookies can be stored on your device. You can change your settings and review them anytime by clicking "Manage Consent" at the bottom of each Poki page.'
                    }), (0, y.FD)("button", {
                        type: "button",
                        className: (0, i.A)("buttonReset", h.familyModeCookieGBNotification__toggleWrapper),
                        onClick: B,
                        children: [(0, y.Y)("h3", {
                            className: h.familyModeCookieGBNotification__label,
                            children: "Opt-in to Poki Analytics"
                        }), (0, y.FD)("label", {
                            className: h.familyModeCookieGBNotification__toggle,
                            "aria-label": "Toggle Poki Analytics on or off",
                            htmlFor: "toggle-pokiAnalytics",
                            children: [(0, y.Y)("input", {
                                type: "checkbox",
                                className: h.familyModeCookieGBNotification__input,
                                checked: w,
                                id: "toggle-pokiAnalytics",
                                onChange: B
                            }), (0, y.Y)("span", {
                                className: h.familyModeCookieGBNotification__toggle__slider
                            })]
                        })]
                    }), (0, y.FD)("button", {
                        type: "button",
                        className: (0, i.A)("buttonReset", h.familyModeCookieGBNotification__toggleWrapper),
                        onClick: v,
                        children: [(0, y.Y)("h3", {
                            className: h.familyModeCookieGBNotification__label,
                            children: "Opt-in to contextual advertisements"
                        }), (0, y.FD)("label", {
                            className: h.familyModeCookieGBNotification__toggle,
                            "aria-label": "Toggle contextual advertisements on or off",
                            htmlFor: "toggle-adsAllowed",
                            children: [(0, y.Y)("input", {
                                type: "checkbox",
                                className: h.familyModeCookieGBNotification__input,
                                checked: k,
                                id: "toggle-adsAllowed",
                                onChange: v
                            }), (0, y.Y)("span", {
                                className: h.familyModeCookieGBNotification__toggle__slider
                            })]
                        })]
                    }), (0, y.Y)(l.default, {
                        size: "small",
                        simplified: !0,
                        onClick: () => {
                            b(k, w)
                        },
                        className: h.familyModeCookieGBNotification__fullWidthButton,
                        children: "Save & Continue"
                    })]
                }) : (0, y.FD)(y.FK, {
                    children: [(0, y.Y)("strong", {
                        children: (0, y.Y)("small", {
                            children: "Please check with your parents if you are under 13!"
                        })
                    }), (0, y.Y)("small", {
                        children: "At Poki, we believe in a free to play experience and in limiting the personal data we process about you. To improve your experience, we place our own analytical cookies. To keep our website free, we use non-personalized advertising cookies (meaning any ads you see are not based on profiling you), and anti-fraud cookies."
                    }), (0, y.FD)("small", {
                        children: ["Please click ", (0, y.Y)("a", {
                            href: _,
                            target: "_blank",
                            referrerPolicy: "origin",
                            rel: "noopener",
                            children: "here"
                        }), " to learn more about the cookies we use. If you are under the age of 13, you need to check with your parents before clicking on the below."]
                    }), (0, y.Y)(l.default, {
                        size: "small",
                        simplified: !0,
                        secondary: !0,
                        className: h.familyModeCookieGBNotification__fullWidthButton,
                        onClick: () => {
                            o(!e)
                        },
                        children: "More Options"
                    }), (0, y.FD)("div", {
                        className: h.familyModeCookieGBNotification__buttons,
                        children: [(0, y.Y)(l.default, {
                            size: "small",
                            simplified: !0,
                            onClick: () => {
                                N(!0)
                            },
                            className: h.familyModeCookieGBNotification__fullWidthButton,
                            children: "Accept all optional Cookies"
                        }), (0, y.Y)(l.default, {
                            size: "small",
                            simplified: !0,
                            onClick: () => {
                                N(!1)
                            },
                            className: h.familyModeCookieGBNotification__fullWidthButton,
                            children: "Reject all optional Cookies"
                        })]
                    })]
                })
            }
        },
        55221(e, o, t) {
            function i({
                name: e,
                value: o
            }) {
                document.cookie = `${e}=${o}; path=/; max-age=7776000; samesite=lax`
            }
            t.d(o, {
                M: () => i
            })
        },
        56938(e, o, t) {
            function i() {
                const e = document.getElementById("game-element");
                try {
                    e ? .contentWindow ? .frames[0] ? .focus()
                } catch {
                    try {
                        e ? .contentWindow ? .focus()
                    } catch {
                        e ? .focus()
                    }
                }
            }
            t.d(o, {
                r: () => i
            })
        },
        81576(e, o, t) {
            t(84292);
            var i = t(40700),
                a = t(28147),
                n = t(9722),
                l = t(53242),
                c = t(56963),
                s = t(1224),
                d = t(52405),
                r = t(6752);
            const f = window.store.getState();
            window.location.hash.includes("#utm_source=redirect") && (0, c.DF)(f) !== c.LJ.APP && (0, r.Z)({
                actionCreator: a.Xy,
                effect: async (e, o) => {
                    o.unsubscribe(), await o.condition((e, o) => a.F8.match(e) && (0, a.Wv)(o) || !!(0, l.VH)(o)),
                        function({
                            dispatch: e,
                            getState: o
                        }) {
                            const t = o();
                            let a, l;
                            const c = window.location.hash.replace("#utm_source=redirect-", "") || "";
                            window.location.hash = "", 5 === c.length && ([a, l] = c.split("-"));
                            const r = (0, n.nK)(t),
                                f = r.find(e => e ? .href ? .includes("poki.com/") && e ? .lang === a),
                                g = r.find(e => e ? .href ? .includes("poki.com/") && e ? .lang === l);
                            if (!f || !g) return;
                            const u = (0, i.K)(t),
                                m = `${u.auto_redirect_title.replace("[language]",g.languageName)}`,
                                h = u.auto_redirect_message.replace("[language]", f.languageName),
                                y = u.auto_redirect_button ? .replace("[language]", f.languageName);
                            (0, d.F)({
                                category: "page",
                                action: "autoRedirectImpression",
                                data: {
                                    from: f.languageName,
                                    to: g.languageName
                                }
                            }), e((0, s.Gg)({
                                notification: {
                                    title: m,
                                    titleIcon: "ui-icons-world",
                                    childComponent: {
                                        name: "AutoRedirectNotification",
                                        props: {
                                            message: h,
                                            button: y,
                                            href: f ? .href,
                                            lang: f ? .lang
                                        }
                                    },
                                    autoExpire: 1e4
                                }
                            }))
                        }(o)
                }
            });
            var g = t(13730);
            (0, r.Z)({
                actionCreator: a.Xy,
                effect: (e, o) => {
                    o.unsubscribe();
                    const t = o.getState(),
                        i = (0, n.FR)(t),
                        a = `https://${(0,c.Gd)(t).domain}${i}`;
                    console.info(`%cGoogle Analytics is blocked by Poki, refer to our privacy statement (${a})`, "background:rgb(0, 156, 255);color:#fff"), console.info(`Git SHA: ffbb45776ee3e08704a0615d909bc5c01ddd84f8, Experiment: ${(0,g.p)(t)||"main"}, SDK Version: ${(0,g.c)(t)||"v2"}`)
                }
            });
            const u = window.store.getState();
            if ((0, l.hv)(u) && (0, a.Rd)(u) <= .5) {
                const e = (0, a.K7)(u);
                (0, r.Z)({
                    actionCreator: n.yc,
                    effect: async (o, i) => {
                        i.unsubscribe(), await i.delay(6e4);
                        const {
                            default: a
                        } = await t.e(2766).then(t.bind(t, 92766));
                        a(e)
                    }
                })
            }
            var m = t(50820);
            (0, r.Z)({
                actionCreator: m.HH,
                effect: async (e, o) => {
                    o.unsubscribe();
                    const {
                        default: i
                    } = await t.e(5273).then(t.bind(t, 45273));
                    await i() && o.dispatch((0, m.Q5)())
                }
            });
            t(77403);
            var h = t(95445),
                y = t(60529);
            (0, r.Z)({
                type: "@@router/LOCATION_CHANGE",
                effect: (e, o) => {
                    (0, y.k4)(o.getState()) !== (0, y.k4)(o.getOriginalState()) && (0, h.L)(o.getState()).filter(e => e.navigateToClose).forEach(e => o.dispatch((0, s.oe)({
                        id: e.id
                    })))
                }
            });
            t(13167), t(69297), t(43724), t(96282), t(19754), t(93335), t(82764), t(30956);
            var p = t(50),
                _ = t(11992),
                w = t(56938),
                k = t(88815),
                C = t(83389);
            const b = () => {
                    document.getElementById("game-element") && (0, C.e)()
                },
                N = e => {
                    if ("tiktok" === (0, a.zO)(e)) return;
                    if (!(0, a.zS)(e) && !(0, a.W3)(e)) try {
                        document.body.requestFullscreen({
                            navigationUI: "hide"
                        }).catch(() => {})
                    } catch {} finally {
                        document.body.focus()
                    }
                    const o = (0, n.Vv)(e) ? .mobile_file ? .orientation;
                    (0, a.H6)(e) && window ? .screen ? .orientation ? .lock && ("portrait" === o || "landscape" === o) && window.screen.orientation.lock(o).catch(() => {})
                },
                B = document.exitFullscreen ? .bind(document);
            document.exitFullscreen = () => Promise.resolve();
            const v = ({
                dispatch: e,
                getState: o
            }) => {
                if ((0, p.QX)(o())) {
                    window ? .PokiSDK ? .stopVideoAd ? .(), (0, k.Jb)();
                    try {
                        B ? .().catch(() => {})
                    } catch {}
                    e((0, p.gO)({
                        toggle: !1
                    }))
                }
            };
            window.addEventListener("fullscreenchange", () => {
                b();
                const e = window.store.getState(),
                    o = !!document.fullscreenElement;
                (0, p.QX)(e) !== o && ((0, a.H6)(e) && !o || window.store.dispatch((0, p.gO)({
                    toggle: o
                })))
            }), (0, r.Z)({
                type: p.lh.type,
                effect: (e, o) => {
                    e.toggle ? (N(o.getState()), o.dispatch((0, p.gO)({
                        toggle: !0
                    }))) : v(o)
                }
            }), (0, r.Z)({
                type: "@@router/LOCATION_CHANGE",
                effect: (e, o) => {
                    const t = window.location.toString();
                    t.includes("#fullscreen") || t.includes("#goog_rewarded") || v(o);
                    const i = o.getState();
                    "game" === (0, n.K5)(i) && (0, a.H6)(i) && "#fullscreen" === window.location.hash && !(0, p.QX)(i) && o.dispatch((0, p.lh)({
                        toggle: !0
                    }))
                }
            }), (0, r.Z)({
                actionCreator: p.gO,
                effect: async ({
                    payload: {
                        toggle: e
                    }
                }, {
                    cancelActiveListeners: o,
                    condition: t,
                    fork: i,
                    getState: n,
                    signal: l
                }) => {
                    o(), e && (0, a.H6)(n()) && ((0, w.r)(), b(), window.addEventListener("resize", () => {
                        i(async e => {
                            await e.delay(500), b()
                        })
                    }, {
                        signal: l
                    }), window.addEventListener("orientationchange", b, {
                        signal: l
                    }), await t(e => p.gO.match(e) && !e.payload.toggle))
                }
            }), (0, r.Z)({
                actionCreator: p.gO,
                effect: ({
                    payload: {
                        toggle: e
                    }
                }) => {
                    const o = document.getElementById("app-root");
                    if (o.style.overflow = e ? "hidden" : "", o.style.height = e ? "100svh" : "", document.body.classList.toggle("isFullscreen", e), e || "#fullscreen" !== window.location.hash) return;
                    const t = (0, _.A)();
                    t.location.state ? .pokiFullscreenEntry ? t.back() : queueMicrotask(() => t.replace(`${window.location.pathname}${window.location.search}`))
                }
            }), (0, r.Z)({
                type: p.Br.type,
                effect: async (e, {
                    cancelActiveListeners: o,
                    condition: t,
                    getState: i,
                    signal: n
                }) => {
                    if (!(0, a.H6)(i())) return;
                    o();
                    const l = () => {
                        (0, p.QX)(i()) && N(i()), (0, k.IF)()
                    };
                    document.getElementById("game-container").addEventListener("click", l, {
                        signal: n
                    }), document.getElementById("game-element").addEventListener("click", l, {
                        signal: n
                    }), await t(e => e.type === p.Br.type)
                }
            }), (0, r.Z)({
                actionCreator: a.Xy,
                effect: (e, {
                    dispatch: o,
                    getState: t
                }) => {
                    const i = t();
                    "game" === (0, n.K5)(i) && (0, a.H6)(i) && "#fullscreen" === window.location.hash && o((0, p.lh)({
                        toggle: !0
                    }))
                }
            });
            t(28941), t(96942);
            if ((0, a.Mn)(window.store.getState())) window.store.dispatch((0, a.Xy)());
            else {
                const e = window.store.subscribe(() => {
                    (0, a.Mn)(window.store.getState()) && (e(), window.store.dispatch((0, a.Xy)()))
                })
            }
        },
        14516(e, o, t) {
            t.r(o), t.d(o, {
                familyModeCookieGBNotification__buttons: () => i,
                familyModeCookieGBNotification__fullWidthButton: () => a,
                familyModeCookieGBNotification__input: () => n,
                familyModeCookieGBNotification__label: () => l,
                familyModeCookieGBNotification__moreOptions: () => c,
                familyModeCookieGBNotification__toggle: () => s,
                familyModeCookieGBNotification__toggleWrapper: () => d,
                familyModeCookieGBNotification__toggle__slider: () => r
            });
            var i = "d_DmuPsXDqfP77VXDFjg",
                a = "iVrAj29wqK0ZABkf8f3L",
                n = "GaaLeCRZn_VbfBtVimO1",
                l = "CdaRGBjd1rgs4_qvLuby",
                c = "_gv64sEAxjHYEnyWUbgd",
                s = "sFVfo08BSK3Q4hVOeWFD",
                d = "lBoDCt5y_q8wpYa4cSPp",
                r = "KYiB_uvdlQx4jd5658_K"
        }
    }
]);
//# sourceMappingURL=client~5770~da4fefbe3be56d239062.js.map