"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3354], {
        43354(e, t, r) {
            r.r(t), r.d(t, {
                default: () => R,
                tagContent: () => Y,
                targetAspectRatio: () => L
            });
            var o = r(21681),
                n = r(13526),
                a = r(10061),
                s = r(74606),
                i = r(79658),
                l = r(20285),
                c = r(48120),
                d = r(13730),
                m = r(40700),
                _ = r(41061),
                p = r(72305),
                u = r(50820),
                y = r(28147),
                h = r(50),
                g = r(27761),
                v = r(9722),
                f = r(53242),
                w = r(60529),
                A = r(56963),
                k = r(21246),
                P = r(91642),
                b = r(52405),
                S = r(88815),
                F = r(49170),
                N = r(68740),
                x = r(58738);
            const B = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-GameNotAvailable-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(1320).then(r.bind(r, 18097)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 18097
                }),
                E = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-ExternallyHostedCommunication-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(5389).then(r.bind(r, 79528)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 79528
                }),
                q = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-AdsBlockedMessage-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(9845).then(r.bind(r, 61232)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 61232
                }),
                C = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-modals-ModalStack-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(302), r.e(1842)]).then(r.bind(r, 21227)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 21227
                }),
                D = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-game-Leaderboard-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(9978).then(r.bind(r, 78243)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 78243
                });

            function Y(e, t = {}) {
                let r = e;
                return ["localhost", "games.poki.com"].some(t => e.includes(`//${t}`)) ? (r = (0, F.O$)(e, {
                    tag: "pg-05564fb46a092d84bdd0f8be79eb39d9ff7e5bfb",
                    ...t
                }), "undefined" != typeof window && window.user ? .id && (r = (0, F.XB)(r, "user_id", window.user.id)), "undefined" != typeof window && window.pokiBotDetected ? .length && (r = (0, F.XB)(r, "bot", "1")), r) : e
            }
            const L = 16 / 9;

            function R({
                className: e
            }) {
                const [t, r] = (0, a.useState)(!1), [o, L] = (0, a.useState)(!0), [R, O] = (0, a.useState)(null), {
                    isMobile: M
                } = (0, a.useContext)(P.F), j = (0, s.d4)(v.Vv), U = (0, s.d4)(h.UO), J = (0, s.d4)(h.QX), H = (0, s.d4)(u.iM), I = !!H && "object" == typeof H, Q = (0, s.d4)(d.c), T = (0, s.d4)(d.p), W = (0, s.d4)(A.Gd), X = (0, s.d4)(y.rk), z = (0, s.d4)(y.wu), K = (0, s.d4)(e => (0, y.KM)(e, j.id)), Z = (0, s.d4)(w.IA), $ = (0, s.d4)(_.l), G = (0, s.d4)(v.Qk), V = (0, s.d4)(m.K), ee = (0, s.d4)(v.Xk), te = (0, s.d4)(v.Ue), re = (0, s.d4)(y.Jj), oe = (0, s.d4)(f.dR), ne = (0, s.d4)(f.lb), ae = (0, s.d4)(p.iJ), se = (0, s.d4)(p.tC), ie = (0, s.d4)(p.Ep), le = (0, s.d4)(y.K7), ce = !!(0, s.d4)(g.FT), de = (0, s.d4)(A.DF), me = (0, s.d4)(h._Y);
                (0, a.useEffect)(() => {
                    const e = () => {
                        const e = !!document.fullscreenElement;
                        M && L(e), (0, b.F)({
                            category: "fullscreenChange",
                            action: e ? "enter" : "exit"
                        })
                    };
                    return document.addEventListener("fullscreenchange", e), () => {
                        document.removeEventListener("fullscreenchange", e)
                    }
                }, []);
                let _e = (M && j.mobile_file ? .content ? j.mobile_file : j.file).content;
                const pe = ne ? "y" : "n",
                    ue = j.id,
                    ye = {
                        site_id: W.id,
                        iso_lang: W.iso_lang,
                        country: z,
                        poki_url: `https://${W.domain}${G}`,
                        ...Z,
                        ...$,
                        hoist: "yes",
                        nonPersonalized: oe ? "n" : "y",
                        cloudsavegames: R ? "y" : "n",
                        familyFriendly: pe,
                        device: le
                    };
                j.categories && (ye.categories = j.categories.map(({
                    id: e
                }) => e)), j.playerfit_test_id && (ye.playerfit_test_id = j.playerfit_test_id), j.playerfit_play_id && (ye.playerfit_play_id = j.playerfit_play_id), Q && (ye.ab = Q), T && (ye.experiment = T), ee ? ye.special_condition = "landing" : te && (ye.special_condition = "crosspromo"), ne && "NL" !== z && (ye.csp = 1), me && "version" in me && me.version ? _e = `${_e.replace("/458768","")}/${me.version}` : me && "countryCode" in me && me.countryCode && (_e = (0, F.XB)(_e, "gdnation", me.countryCode));
                const he = Y(_e, ye),
                    ge = !(M && "landscape" === X),
                    ve = "undefined" != typeof window && !K && !M && j.externally_hosted && k._k.includes(window.pokiCountry);
                (0, a.useEffect)(() => ((0, S.o0)(), () => {
                    (0, S.oW)()
                }), []), (0, a.useLayoutEffect)(() => {
                    if (M) {
                        const {
                            orientation: e
                        } = j, t = "both" !== e && e !== X && !U && de !== A.LJ.CAR;
                        r(t)
                    }
                }, [j, U, M, de, X]);
                const {
                    explicit_orientation_message: fe = !1
                } = j, we = M && J && !o, [Ae, ke] = (0, a.useState)("undefined" == typeof window || Array.isArray(window.pokiBotDetected));
                (0, a.useEffect)(() => {
                    !Ae && "undefined" != typeof window && window.pokiBotDetectedPromise && window.pokiBotDetectedPromise.finally(() => {
                        ke(!0)
                    })
                }, [Ae]);
                const Pe = null !== ae || se;
                (0, a.useEffect)(() => {
                    Pe && null === R && O(ie)
                }, [Pe, ie, R]);
                const be = null !== R && Ae;
                return (0, x.Y)("div", {
                    className: (0, n.A)(N.gamePlayer, {
                        [N.gamePlayer_desktop]: !M
                    }, {
                        [N.gamePlayer_desktop_hasTakeover]: !M && I && !J
                    }, {
                        [N.gamePlayer_fullscreen]: J
                    }, e),
                    children: (0, x.FD)("div", {
                        className: N.gamePlayer__container,
                        children: [(0, x.Y)(C, {}), (0, x.FD)("div", {
                            className: N.gamePlayer__game,
                            id: "game-player",
                            children: [t && (0, x.FD)("div", {
                                className: (0, n.A)(N.gamePlayer__rotateScreen, {
                                    [N.gamePlayer__rotateScreen_showExplicitOrientationnMessage]: fe
                                }),
                                onClick: () => {
                                    r(!1)
                                },
                                children: [(0, x.FD)("div", {
                                    className: N.gamePlayer__rotateScreen__wrapper,
                                    children: [(0, x.Y)(c.default, {
                                        className: N.gamePlayer__rotateScreen__icon,
                                        name: "rotation",
                                        decorative: !0
                                    }), (0, x.Y)("strong", {
                                        className: N.gamePlayer__rotateScreen__text,
                                        children: V.rotate_device
                                    })]
                                }), fe && (0, x.Y)("span", {
                                    className: N.gamePlayer__rotateScreen__btn,
                                    children: V.got_it
                                })]
                            }), U ? (0, x.Y)(B, {}) : (0, x.Y)("div", {
                                className: N.gamePlayer__gameWrapper,
                                children: ve ? (0, x.Y)(E, {
                                    showBackground: !0,
                                    startCollapsed: !1
                                }) : be && (0, x.Y)(l.default, {
                                    content: he,
                                    gameId: ue
                                })
                            }), we && (0, x.Y)("button", {
                                type: "button",
                                className: (0, n.A)("buttonReset", N.gamePlayer__tapForFullscreen),
                                children: V.tap_to_continue
                            })]
                        }), ge && (0, x.Y)(i.default, {}), re && (0, x.Y)(q, {}), ce && (0, x.Y)(D, {})]
                    })
                })
            }
        },
        20285(e, t, r) {
            r.r(t), r.d(t, {
                default: () => d
            });
            var o = r(10061),
                n = r(74606),
                a = r(50),
                s = r(52405),
                i = r(56938),
                l = r(37017),
                c = r(58738);

            function d({
                content: e,
                gameId: t
            }) {
                const r = (0, n.wA)();
                return (0, o.useEffect)(() => {
                    r((0, a.Br)({})), (0, s.F)({
                        category: "game",
                        action: "iframeLoaded",
                        options: {
                            once_per_pageview: !0
                        }
                    }), (0, i.r)()
                }, []), (0, c.Y)("iframe", {
                    id: "game-element",
                    allowFullScreen: !0,
                    allow: "autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope; microphone *; screen-wake-lock",
                    name: "gameFrame",
                    scrolling: "no",
                    sandbox: "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads",
                    src: e,
                    title: "Game",
                    className: l.iframe
                }, `gameFrame${t}`)
            }
        },
        68740(e, t, r) {
            r.r(t), r.d(t, {
                gamePlayer: () => o,
                gamePlayer__container: () => n,
                gamePlayer__game: () => a,
                gamePlayer__gameWrapper: () => s,
                gamePlayer__rotateScreen: () => i,
                gamePlayer__rotateScreen__btn: () => l,
                gamePlayer__rotateScreen__icon: () => c,
                gamePlayer__rotateScreen__text: () => d,
                gamePlayer__rotateScreen__wrapper: () => m,
                gamePlayer__rotateScreen_showExplicitOrientationnMessage: () => _,
                gamePlayer__tapForFullscreen: () => p,
                gamePlayer_desktop: () => u,
                gamePlayer_desktop_hasTakeover: () => y,
                gamePlayer_fullscreen: () => h,
                rotateIconShakeAnimation: () => g,
                rotateScreenHideAnimation: () => v
            });
            var o = "BgztZmlqUnzFdsjSmmJn",
                n = "L1ITkDzCRTkiRlpeLSPD",
                a = "oNVoB91JkRWfP4vHrjdX",
                s = "ZvQjR9fV3GRraesBQUjX",
                i = "J6tqxYc6fpBoHrC5vr0W",
                l = "jUUUu_FqreA_ek3ep9lh",
                c = "x0nvw8qmiCP6f8MAEIwx",
                d = "BZTO0rv6DO53A8Rj5NMM",
                m = "_SUZuMvsALFWI4KmxPdl",
                _ = "AV6wA32JWQ1dnle8c9ba",
                p = "rkUs26I46Zr_gd6A9Pjq",
                u = "O6aS7QO5ETmydBF0bVB7",
                y = "wvPBPqE1ylGFyuZc6pSW",
                h = "_0r9GJJwdYqkaOz4ipBQw",
                g = "seKqapJjAkQjXTrYoS9y",
                v = "ww039qaOhb5Veu2mbHrA"
        },
        37017(e, t, r) {
            r.r(t), r.d(t, {
                iframe: () => o
            });
            var o = "Clsn52HE2ZzhoBMbiAF6"
        }
    }
]);
//# sourceMappingURL=client~3354~b56aba6945612e82f1b0.js.map