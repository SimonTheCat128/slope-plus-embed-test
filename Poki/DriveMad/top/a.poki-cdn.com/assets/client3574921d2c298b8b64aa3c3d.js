"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3574], {
        93335(e, t, a) {
            var i = a(13730),
                o = a(50820),
                r = a(28147),
                c = a(50),
                n = a(9722),
                s = a(56963),
                d = a(56396),
                l = a(84966),
                f = a(11246),
                p = a(6752),
                m = a(55635);
            let y = 0;
            (0, p.Z)({
                type: c.kK.type,
                effect: (e, {
                    getState: t
                }) => {
                    const a = Date.now();
                    if (a - y < 3e3) return;
                    y = a;
                    const {
                        gameFrame: i
                    } = window.frames;
                    if (!i) return;
                    const {
                        callback: o
                    } = e, r = (0, n.Vv)(t());
                    i.postMessage({
                        type: "pokiGenerateScreenshot",
                        hasFrame: "screenshot" === o,
                        title: r.title,
                        thumbnail: r.imageUrl,
                        callback: o
                    }, "*")
                }
            });
            let g = 0;
            (0, p.Z)({
                actionCreator: d.X$,
                effect: async (e, {
                    getState: t
                }) => {
                    const a = Date.now();
                    if (a - g < 1e4) return;
                    if (!e.payload) return;
                    const {
                        screenshot: l,
                        errors: p
                    } = e.payload, y = t(), u = (0, n.Vv)(y), h = (0, c.yd)(y), w = h ? .gameID === u.pokifordevs_game_id ? h.gameVersion : void 0, v = window.session ? .page ? .start > 0 ? Date.now() - window.session.page.start : 0, S = document.getElementById("game-element"), C = S ? `${S.clientWidth}x${S.clientHeight}` : void 0;
                    g = a;
                    try {
                        await (0, f.E5)("/playground-feedback", {
                            method: "POST",
                            body: JSON.stringify({
                                p4d_game_id: u.pokifordevs_game_id,
                                p4d_version_id: w,
                                type: "bugreport",
                                site_id: (0, s.Gd)(y).id,
                                message: (0, d.p3)(y),
                                screenshot: l,
                                experiment: (0, i.p)(y),
                                adblock: (0, o.nj)(y),
                                was_fullscreen: (0, c.zM)(y),
                                game_resolution: C,
                                loading_finished: (0, c.pT)(y),
                                time_on_page: v,
                                errors: p,
                                webgl_renderer: (0, m.z)(),
                                device_pixel_ratio: window.devicePixelRatio || 1,
                                device_category: (0, r.K7)(y)
                            })
                        })
                    } catch {}
                }
            }), (0, p.Z)({
                type: c.u9.type,
                effect: (e, {
                    dispatch: t,
                    getState: a
                }) => {
                    const {
                        screenshot: i,
                        errors: o,
                        callback: r
                    } = e.data;
                    if ("bugReport" !== r) {
                        if ("ratings" === r) {
                            const e = (0, l.xI)(a());
                            t((0, l.rY)({
                                voteDirection: e.voteDirection,
                                message: e.message,
                                screenshot: i,
                                errors: o
                            }))
                        }
                    } else t((0, d.X$)({
                        screenshot: i,
                        errors: o
                    }))
                }
            })
        },
        19754(e, t, a) {
            var i = a(50),
                o = a(9722),
                r = a(6752),
                c = a(66038);
            (0, r.Z)({
                predicate: e => e.type === i.wZ.type && e.event === c.NS,
                effect: (e, {
                    dispatch: t
                }) => {
                    t((0, i.Rk)(!0))
                }
            }), (0, r.Z)({
                actionCreator: o.yc,
                effect: (e, {
                    dispatch: t
                }) => {
                    t((0, i.Rk)(!1))
                }
            })
        },
        28941(e, t, a) {
            var i = a(79899),
                o = a(10672),
                r = a(13583),
                c = a(50820),
                n = a(28147),
                s = a(50),
                d = a(9722),
                l = a(60529),
                f = a(63545),
                p = a(52405),
                m = a(56938),
                y = a(6752),
                g = a(66038);
            let u, h, w = Date.now(),
                v = "waiting";
            const S = (e, ...t) => e.type === s.wZ.type && t.includes(e.event),
                C = (e, t, a) => "@@router/LOCATION_CHANGE" === e.type && (0, l.k4)(t) !== (0, l.k4)(a),
                b = (0, i.i0)(n.Xy, d.yc),
                Z = (0, i.i0)(c.jO, c.wt),
                k = window.store.getState(),
                _ = (0, c.$i)(k);
            (0, y.Z)({
                actionCreator: c.sF,
                effect: ({
                    payload: {
                        refreshType: e
                    }
                }, t) => {
                    const a = t.getState();
                    if ((0, s.QX)(a))(0, f.KD)("refreshDisplayAds:suppressed:fullscreen", {
                        refreshType: e
                    }, {
                        kind: "refresh"
                    });
                    else {
                        const i = o.A.mobile.mobile_gamebar_320x50(a);
                        (0, r.d)(a).filter(({
                            code: e
                        }) => e !== i.code).forEach(({
                            code: a
                        }) => t.dispatch((0, c.XZ)({
                            code: a,
                            refreshType: e
                        })))
                    }
                    "armed" === v && t.dispatch((0, c.i$)())
                }
            }), (0, y.Z)({
                predicate: e => S(e, g.sf),
                effect: async (e, t) => {
                    t.unsubscribe(), await t.delay(5e3), "waiting" === v && (v = "armed")
                }
            }), (0, y.Z)({
                predicate: (e, t, a) => C(e, t, a) && !!(0, c.iM)(t),
                effect: (e, {
                    dispatch: t
                }) => {
                    t((0, c.jp)())
                }
            }), (0, y.Z)({
                actionCreator: d.yc,
                effect: (e, {
                    dispatch: t
                }) => {
                    v = "ended", _.immersiveTakeover && t((0, c.i$)())
                }
            }), (0, y.Z)({
                type: s.yq.type,
                effect: e => {
                    (0, p.F)({
                        category: "sdk",
                        action: "details",
                        data: e
                    })
                }
            }), (0, y.Z)({
                predicate: (e, t) => S(e, g.e0) && (0, d.ue)(t) === (0, l.k4)(t),
                effect: ({
                    data: e
                }, t) => {
                    const a = (0, d.Sk)(t.getState()) || {},
                        i = [...e ? .IMAWrapperIDs || [], e ? .creativeId || 0].find(e => a[e]);
                    void 0 !== i && t.dispatch((0, c.jO)({
                        takeover: {
                            creativeId: i,
                            config: a[i]
                        }
                    }))
                }
            }), (0, y.Z)({
                type: s.wZ.type,
                effect: ({
                    data: e,
                    event: t
                }, {
                    dispatch: a
                }) => {
                    switch (t) {
                        case g.XD:
                        case g.sf:
                            a((0, s.cD)({
                                event: t
                            }));
                            break;
                        case g.e0:
                            a((0, s.cD)({
                                event: t
                            })), a((0, s.qA)({
                                duration: 0,
                                currentTime: 0
                            }));
                            break;
                        case g.Zs:
                            a((0, s.qA)({
                                duration: e.duration,
                                currentTime: e.currentTime
                            }));
                            break;
                        case g.yk:
                        case g.yS:
                            a((0, s.vA)())
                    }
                }
            }), (0, y.Z)({
                predicate: e => d.yc.match(e) || S(e, g.sf, g.AY, g.Zt),
                effect: (e, {
                    dispatch: t
                }) => {
                    (0, m.r)(), t((0, s.m$)())
                }
            }), (0, y.Z)({
                predicate: e => S(e, g.e0, g.sf, g.Zt),
                effect: ({
                    event: e
                }, {
                    dispatch: t
                }) => {
                    t((0, s.Ck)(e === g.e0))
                }
            }), (0, n.H6)(k) && ((0, y.Z)({
                predicate: e => S(e, g.Pz, g.zY, g.e0, g.sf),
                effect: ({
                    event: e
                }, {
                    dispatch: t
                }) => {
                    t((0, c.eb)({
                        allowed: [g.Pz, g.sf].includes(e)
                    }))
                }
            }), (0, y.Z)({
                actionCreator: s.gO,
                effect: ({
                    payload: e
                }, {
                    dispatch: t
                }) => {
                    !0 === e ? .toggle && t((0, c.eb)({
                        allowed: !1
                    }))
                }
            })), (0, y.Z)({
                predicate: e => S(e, g.oM),
                effect: ({
                    data: e
                }, {
                    dispatch: t
                }) => {
                    "stopRefreshingForThisPage" === e.dfpCreativeId && (console.warn("force stopping refreshing, will activate next pageview"), (0, f.KD)("adRefresh:stopped:forceStopCampaign", {
                        reason: "Custom campaign requested stopRefreshingForThisPage"
                    }, {
                        kind: "refresh"
                    }), t((0, c.wt)()))
                }
            }), (0, y.Z)({
                predicate: (e, t, a) => C(e, t, a) || Z(e) || b(e) && "game" === (0, d.K5)(t) && !(0, n.H6)(t),
                effect: async (e, t) => {
                    if (t.cancelActiveListeners(), u = void 0, !b(e)) return;
                    const a = (0, d.Vv)(t.getState()),
                        i = a.ad_profiles ? .desktop;
                    if (w = Date.now(), h = i ? .display_refresh_cooldown ? ? 2e4, u = a.allow_smart_refresh ? "smart" : "dumb", (0, f.n4)(u), "smart" !== u)
                        for (; !t.signal.aborted;) await t.delay(i ? .display_refresh_interval ? ? 3e4), t.dispatch((0, c.sF)({
                            trigger: "dumb",
                            refreshType: "dumb"
                        }))
                }
            }), (0, y.Z)({
                predicate: e => !!u && (S(e, g.sf) || s.gO.match(e) && !e.payload.toggle),
                effect: (e, t) => {
                    w = Date.now(), t.dispatch((0, c.sF)({
                        trigger: "interaction",
                        refreshType: "direct"
                    }))
                }
            }), (0, y.Z)({
                predicate: e => "smart" === u && S(e, g.zY, g.yk, g.yS),
                effect: (e, t) => {
                    const a = Date.now() - w;
                    a < h ? (0, f.KD)("smartRefresh:suppressed:cooldown", {
                        elapsed: a,
                        required: h,
                        remaining: h - a
                    }, {
                        kind: "refresh"
                    }) : (w = Date.now(), t.dispatch((0, c.sF)({
                        trigger: "smart",
                        refreshType: "smart"
                    })))
                }
            })
        },
        69297(e, t, a) {
            var i = a(50),
                o = a(9722),
                r = a(52405),
                c = a(6752),
                n = a(64118),
                s = a(79173);
            (0, c.Z)({
                type: i.h8.type,
                effect: (e, {
                    dispatch: t,
                    getState: a
                }) => {
                    const {
                        params: r
                    } = e;
                    if (!r) return;
                    const c = Object.keys(r),
                        s = new URLSearchParams(window.location.search),
                        d = [];
                    s.forEach((e, t) => {
                        t.startsWith("gd") && d.push(t)
                    }), d.forEach(e => {
                        s.delete(e)
                    }), c.forEach(e => {
                        s.set(`gd${e}`, r[e])
                    });
                    const l = s.toString();
                    window.history.replaceState({}, document.title, `${window.location.pathname}${l?`?${l}`:""}`), (0, o.Vv)(a()) ? .id === n.b6 && t((0, i._1)({
                        countryCode: r.nation ? ? null
                    }))
                }
            }), (0, c.Z)({
                type: i.iG.type,
                effect: (e, {
                    dispatch: t,
                    getState: a
                }) => {
                    const c = (0, o.Vv)(a());
                    if (!c) return;
                    const n = (0, s.aG)(),
                        d = { ...e
                        };
                    (0, r.F)({
                        category: "pubHost",
                        action: "initialized",
                        data: { ...d,
                            refreshed: n
                        }
                    }), delete d.source, t((0, i.iw)({
                        gameId: c.id,
                        data: d
                    }))
                }
            })
        },
        13167(e, t, a) {
            var i = a(28147),
                o = a(9722),
                r = a(6752);
            (0, r.Z)({
                actionCreator: i.Xy,
                effect: async (e, t) => {
                    t.unsubscribe(), await t.delay(864e5), (0, r.Z)({
                        actionCreator: o.yc,
                        effect: () => window.location.reload()
                    })
                }
            })
        },
        82764(e, t, a) {
            var i = a(28147),
                o = a(9722);
            (0, a(6752).Z)({
                actionCreator: i.Xy,
                effect: async (e, {
                    delay: t,
                    getState: a,
                    unsubscribe: i
                }) => {
                    i(), "preview" === (0, o.K5)(a()) && (await t(1e4), console.info("%c🛡️ Content Security Policy (CSP) Notice 🛡️\n\n%cThis website enforces a strict Content Security Policy.\nIf your game needs to load resources from external domains, add them under Settings → CSP in our developer platform.\n\n%cOnce your CSP request is approved, re-upload the latest version of your game.\n\n%cThank you for helping us maintain our security standards!", "font-size: 20px; font-weight: bold; color: #4a90e2;", "font-size: 14px; color: #666;", "font-size: 14px; color: #0a84ff; font-weight: bold;", "font-size: 14px; color: #666; font-style: italic;"))
                }
            })
        },
        96942(e, t, a) {
            var i = a(23170),
                o = a(40700),
                r = a(28147),
                c = a(9722),
                n = a(53242),
                s = a(56963),
                d = a(1224),
                l = a(11992),
                f = a(52405),
                p = a(6752),
                m = a(49170);
            const y = window.store.getState(),
                g = (0, r.wu)(y);
            if ("CA" === g && "privacy" !== (0, c.K5)(y) && !(0, n.U4)(y)) {
                const e = "privacyCanadaNotification";
                (0, p.Z)({
                    actionCreator: r.Xy,
                    effect: (t, a) => {
                        a.unsubscribe(), a.dispatch((0, d.Gg)({
                            notification: {
                                id: e,
                                title: "Choose your cookies in the Privacy Center",
                                titleIcon: "ui-icons-lock",
                                childComponent: {
                                    name: "privacyCenter/PrivacyCenterCanadaNotification"
                                },
                                muteAfterClose: !0,
                                actions: [{
                                    title: "To Privacy Center",
                                    onClick: () => {
                                        const t = (0, s.Gd)(window.store.getState()),
                                            a = (0, m.AO)(t, "privacy", "");
                                        (0, l.A)().push(a), window.store.dispatch((0, d.oe)({
                                            id: e
                                        }))
                                    }
                                }]
                            }
                        }))
                    }
                })
            }
            if ((0, n.lb)(y) && !(0, n.VH)(y)) {
                const e = (0, o.K)(y);
                (0, p.Z)({
                    actionCreator: r.Xy,
                    effect: (t, a) => {
                        a.unsubscribe(), "GB" !== g ? (a.dispatch((0, d.Gg)({
                            notification: {
                                title: e.family_mode_title,
                                titleIcon: "ui-icons-lock",
                                childComponent: {
                                    name: "FamilyModeCookieNotification"
                                },
                                autoExpire: 1e4,
                                onExplicitClose: () => {
                                    (0, f.F)({
                                        category: "familyModeCookieConsent",
                                        action: "explicitClose"
                                    }), window.store.dispatch((0, n.rB)({
                                        shown: !0
                                    }))
                                }
                            }
                        })), (0, f.F)({
                            category: "familyModeCookieConsent",
                            action: "show"
                        })) : a.dispatch((0, d.Gg)((0, i.familyModeCookieConsentGBNotification)()))
                    }
                })
            }
        },
        96282(e, t, a) {
            var i = a(79899),
                o = a(24432),
                r = a(72305),
                c = a(28147),
                n = a(50),
                s = a(9722),
                d = a(60529),
                l = a(56963),
                f = a(11246),
                p = a(6752),
                m = a(52012),
                y = a(66038),
                g = a(49170),
                u = a(13462);
            const h = (0, f.T5)();
            (0, p.Z)({
                predicate: (e, t) => (0, i.i0)(c.SG, s.yc, c.Xy)(e) && (0, m.Z)((0, s.K5)(t), (0, s.Vv)(t)),
                effect: async (e, {
                    cancelActiveListeners: t,
                    dispatch: a,
                    getState: i,
                    take: f
                }) => {
                    t();
                    const p = (e => t => {
                            if (t.type !== o.LK) return !1;
                            const {
                                payload: a
                            } = t;
                            return !a ? .location || a.location.pathname !== e
                        })((0, d.k4)(i())),
                        [w] = await f(e => (e => e.type === n.wZ.type && e.event === y.Pz)(e) || p(e));
                    if (p(w)) return;
                    const v = i(),
                        S = (0, s.K5)(v);
                    if (!(0, m.Z)(S, (0, s.Vv)(v))) return;
                    const C = (0, s.Vv)(v),
                        b = (0, l.Gd)(v),
                        {
                            id: Z
                        } = C;
                    if ((0, r.Ep)(v)) try {
                        fetch(`${h}/players/history`, {
                            method: "POST",
                            body: JSON.stringify({
                                game_id: Z
                            }),
                            credentials: "include"
                        })
                    } catch {}
                    const k = (0, c.Fe)(v),
                        _ = k.find(e => e.id === Z),
                        D = k.filter(e => e.id !== Z),
                        G = {
                            id: Z,
                            pt: _ ? _.pt : 0,
                            pc: _ ? (_.pc || 0) + 1 : 1,
                            lp: Date.now()
                        };
                    D.unshift(G);
                    const A = {
                        recentGames: (0, m.D)(D).slice(0, 100),
                        siteID: b.id
                    };
                    if ((0, u.Y)(A), a((0, c.pX)(A)), "game" === S) {
                        const e = (0, r.eZ)(v).filter(e => e.id !== Z);
                        e.unshift({
                            id: C.id,
                            ...C.mobile_available && {
                                mobile: !0
                            },
                            slug: C.slug,
                            title: C.title,
                            type: "game",
                            imageUrl: C.imageUrl,
                            url: (0, g.AO)(b, "game", C.slug),
                            animatedThumbnail: C.animated_thumbnail
                        }), a((0, r.M5)({
                            recentGames: e.slice(0, 30)
                        }))
                    }
                }
            });
            (0, p.Z)({
                predicate: (e, t) => c.pX.match(e) && (0, m.Z)((0, s.K5)(t), (0, s.Vv)(t)),
                effect: async (e, {
                    cancelActiveListeners: t,
                    delay: a,
                    dispatch: i,
                    getState: o,
                    take: r
                }) => {
                    t();
                    const n = (0, s.Vv)(o()).id;
                    if (await Promise.race([a(6e4), r(s.yc.match)])) return;
                    const d = (0, c.Fe)(o()),
                        f = d.find(e => e.id === n);
                    if (!f) return;
                    const p = parseInt(String(f.pt || 0), 10) + 60,
                        y = {
                            recentGames: (0, m.D)(d.map(e => e.id === n ? { ...e,
                                pt: p
                            } : e)),
                            siteID: (0, l.Gd)(o()).id
                        };
                    (0, u.Y)(y), i((0, c.pX)(y))
                }
            })
        },
        30956(e, t, a) {
            var i = a(24432),
                o = a(37654),
                r = a(72305),
                c = a(28147),
                n = a(50),
                s = a(9722),
                d = a(60529),
                l = a(56963),
                f = a(6752),
                p = a(10982),
                m = a(66038);
            const y = e => t => {
                if (t.type !== i.LK) return !1;
                const {
                    payload: a
                } = t;
                return !a ? .location || a.location.pathname !== e
            };
            let g = null,
                u = null;
            (0, f.Z)({
                predicate: (e, t) => (e => e.type === n.wZ.type && e.event === m.Pz)(e) && (0, r.Ep)(t) && (0, p.e)((0, c.wu)(t)) && "game" === (0, s.K5)(t) && (0, s.Vv)(t) ? .id !== u,
                effect: async (e, {
                    cancelActiveListeners: t,
                    delay: a,
                    dispatch: i,
                    getState: n,
                    pause: f,
                    take: m
                }) => {
                    t();
                    const h = (0, s.Vv)(n()),
                        w = (0, d.k4)(n());
                    if (!h ? .id || g === h.id) return;
                    let v;
                    u = h.id;
                    try {
                        v = await Promise.race([a(3e5), m(y(w))])
                    } finally {
                        u === h.id && (u = null)
                    }
                    if (v) return;
                    const S = n(),
                        C = (0, l.Gd)(S),
                        b = (0, c.wu)(S);
                    if (!C || !(0, r.Ep)(S) || !(0, p.e)(b)) return;
                    g = h.id;
                    const Z = i(o.lh.endpoints.recalculateRecommendedGames.initiate({
                            site: C,
                            geo: b,
                            gameId: h.id
                        })),
                        k = await f(Z.unwrap().catch(() => null));
                    null !== k && i((0, r.wP)({
                        recommendedGames: k.length >= 3 ? k.slice(0, 6) : []
                    }))
                }
            })
        },
        43724(e, t, a) {
            var i = a(72305),
                o = a(50),
                r = a(9722),
                c = a(52405),
                n = a(6752),
                s = a(71764);
            (0, n.Z)({
                type: o.Co.type,
                effect: (e, {
                    getState: t
                }) => {
                    const a = (0, r.Vv)(t());
                    a ? .id && (0, c.F)({
                        category: "account",
                        action: "gamesaveError",
                        data: {
                            gameId: a.id,
                            method: "cloudsavegameScript",
                            context: "cloudsavegame script error",
                            error: e.data ? .error
                        }
                    })
                }
            });
            const d = () => window.frames.gameFrame;

            function l(e, t) {
                d() ? .postMessage ? .({
                    type: "fetchedSaveGame",
                    resolution: e,
                    data: t
                }, "*")
            }
            const f = "fetching",
                p = "done";

            function m(e) {
                d() ? .postMessage ? .({
                    type: "fetchGameStatus",
                    status: e
                }, "*")
            }(0, n.Z)({
                type: o.on.type,
                effect: async (e, {
                    getState: t
                }) => {
                    if (!["game", "preview", "mystery"].includes((0, r.K5)(t()))) return;
                    const a = (0, r.Vv)(t()),
                        o = (0, i.Fh)(t()),
                        n = a ? .id;
                    if (m(f), !n) return l("local", {
                        playtime: 0,
                        ls: "",
                        idb: ""
                    }), void m(p);
                    const d = e ? .metadata ? .etag || "";
                    try {
                        let e, a = 0,
                            r = !1;
                        if (!o.includes(n) && (0, i.Ep)(t())) try {
                            e = await (0, s.$)(n, d), a = e ? .playtime || 0, r = !(0, s.jJ)(e)
                        } catch (e) {
                            console.error(e), (0, c.F)({
                                category: "account",
                                action: "gamesaveError",
                                data: {
                                    gameId: n,
                                    method: "fetchSaveGameEpic",
                                    context: "fetching gamesave from cloud",
                                    error: e instanceof Error ? e.message : String(e)
                                }
                            })
                        }
                        const f = r ? "cloud" : "local";
                        if ("cloud" === f) try {
                            localStorage.removeItem(`playtime-${n}`), localStorage.removeItem(`gs-state-token-${n}`)
                        } catch {}(0, c.F)({
                            category: "account",
                            action: "fetchSaveGame",
                            data: {
                                resolution: f,
                                localPlaytime: 0,
                                cloudPlaytime: a,
                                receivedPopulatedSaveGameFromCloud: r
                            }
                        }), l(f, e), m(p)
                    } catch (e) {
                        console.error(e), (0, c.F)({
                            category: "account",
                            action: "gamesaveError",
                            data: {
                                gameId: n,
                                method: "fetchSaveGameEpic",
                                context: "sending postMessage to gameFrame",
                                error: e instanceof Error ? e.message : String(e)
                            }
                        })
                    }
                }
            })
        },
        77403(e, t, a) {
            var i = a(28147),
                o = a(9722),
                r = a(56963),
                c = a(1224),
                n = a(52405),
                s = a(6752),
                d = a(64404);
            const l = window.store.getState(),
                f = "user-satisfaction";
            d.DB.includes((0, i.wu)(l)) && 3 === (0, r.Gd)(l).id && !(0, c.hk)(l, f) && (0, i.Rd)(l) < .05 && ((0, n.F)({
                category: "pps",
                action: "trigger"
            }), (0, s.Z)({
                actionCreator: i.Xy,
                effect: async (e, t) => {
                    t.unsubscribe(), await t.delay(36e4), await t.condition((e, t) => o.yc.match(e) && "game" !== (0, o.K5)(t)), t.dispatch((0, c.Gg)({
                        notification: {
                            id: f,
                            title: "Would you recommend Poki to your friends?",
                            childComponent: {
                                name: "UserSatisfaction",
                                props: {
                                    notificationID: f
                                }
                            },
                            muteAfterClose: !0
                        }
                    }))
                }
            }))
        },
        84292(e, t, a) {
            var i = a(28147),
                o = a(6752);
            const r = window.matchMedia("(orientation: portrait)");
            let c;
            const n = () => {
                clearTimeout(c), c = setTimeout(() => {
                    window.store.dispatch((0, i.nx)({
                        orientation: r.matches ? "portrait" : "landscape"
                    }))
                }, 100)
            };
            window.addEventListener("orientationchange", n), (0, o.Z)({
                actionCreator: i.Xy,
                effect: n
            })
        }
    }
]);
//# sourceMappingURL=client~3574~921d2c298b8b64aa3c3d.js.map