"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3427, 6751], {
        92146(e, t, r) {
            r.r(t), r.d(t, {
                default: () => u
            });
            var a = r(21681),
                i = r(10061),
                s = r(15136),
                n = r(74606),
                o = r(37654),
                l = r(13730),
                d = r(40700),
                c = r(28147),
                m = r(9722),
                p = r(60529),
                _ = r(56963),
                v = r(58738);
            const h = (0, a.Ay)({
                resolved: {},
                chunkName: () => "app-components-contentTypes-ErrorLoader-tsx",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!r.m[t]
                },
                importAsync: () => r.e(680).then(r.bind(r, 40267)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return r(t)
                },
                resolve: () => 40267
            });

            function u() {
                const e = (0, n.wA)(),
                    t = (0, n.d4)(_.Gd),
                    r = (0, n.d4)(c.xp),
                    a = (0, n.d4)(c.wu),
                    u = (0, n.d4)(l.p),
                    g = (0, n.d4)(d.K),
                    y = (0, n.d4)(p.k4),
                    f = (0, n.d4)(m.K5),
                    b = (0, n.d4)(c.zO),
                    {
                        data: A,
                        isLoading: k
                    } = (0, o.mk)({
                        site: t,
                        device: r,
                        geo: a,
                        experiment: u,
                        trafficSource: b
                    });
                (0, i.useEffect)(() => {
                    e((0, m.mX)({
                        path: y
                    }))
                }, []), (0, i.useEffect)(() => {
                    e((0, m.yc)({
                        path: y,
                        pageType: f,
                        pageID: null
                    }))
                }, [y, f]);
                const {
                    games: N
                } = A || {}, Y = (0, i.useMemo)(() => ((e = []) => {
                    try {
                        return e[Math.floor(Math.random() * e.length)]
                    } catch {
                        return
                    }
                })(N), [A]);
                return k || N ? (0, v.FD)(v.FK, {
                    children: [(0, v.FD)(s.m, {
                        children: [(0, v.Y)("title", {
                            children: g.not_found_title
                        }), (0, v.Y)("meta", {
                            name: "description",
                            content: g.not_found_description
                        })]
                    }), Y && (0, v.Y)(h, {
                        game: Y
                    })]
                }) : (0, v.Y)("p", {
                    children: "Server error 💥"
                })
            }
        },
        46596(e, t, r) {
            r.r(t), r.d(t, {
                default: () => W
            });
            var a = r(21681),
                i = r(13526),
                s = r(10061),
                n = r(15136),
                o = r(74606),
                l = r(11116),
                d = r(48843),
                c = r(89311),
                m = r(92146),
                p = r(47925),
                _ = r(45477),
                v = r(10672),
                h = r(37654),
                u = r(13730),
                g = r(40700),
                y = r(50493),
                f = r(50820),
                b = r(28147),
                A = r(50),
                k = r(7372),
                N = r(36059),
                Y = r(9722),
                x = r(60529),
                S = r(56963),
                P = r(8512),
                w = r(91642),
                D = r(33960),
                G = r(86547),
                E = r(55618),
                L = r(86715),
                F = r(40960),
                R = r(15890),
                C = r(58738);
            const M = (0, a.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-contentTypes-GameUnavailable-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(6151).then(r.bind(r, 6604)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 6604
                }),
                T = (0, a.Ay)({
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
                I = (0, a.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-CategoryTile-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(7526).then(r.bind(r, 94251)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 94251
                }),
                q = (0, a.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-NavigationAwareLazyHydrate-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(4741).then(r.bind(r, 91936)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 91936
                }),
                j = (0, a.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-GameDescription-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(6314).then(r.bind(r, 76291)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 76291
                }),
                O = (0, a.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-GameFloatingCTA-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(2076).then(r.bind(r, 3789)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 3789
                }),
                V = "game";

            function U() {
                const e = (0, o.wA)(),
                    {
                        slug: t
                    } = (0, l.g)(),
                    {
                        isMobile: r
                    } = (0, s.useContext)(w.F),
                    a = (0, o.d4)(b.xp),
                    _ = (0, o.d4)(b.wu),
                    N = (0, o.d4)(u.p),
                    U = (0, o.d4)(S.Gd),
                    W = (0, o.d4)(g.K),
                    z = (0, o.d4)(x.k4),
                    H = (0, o.d4)(b.Rd),
                    J = (0, o.d4)(Y.K5),
                    K = (0, o.d4)(A.QX),
                    B = (0, o.d4)(y.N),
                    Z = (0, L.G)(),
                    {
                        data: $,
                        isUninitialized: Q,
                        isLoading: X,
                        isFetching: ee,
                        isSuccess: te,
                        isError: re
                    } = (0, h.gM)({
                        slug: t,
                        site: U,
                        device: a,
                        geo: _,
                        experiment: N,
                        pageType: J,
                        path: z,
                        playerFitAttribution: B
                    }, {
                        skip: !("preview" === J || "mystery" === J || "game" === J)
                    }),
                    ae = !Q && !X && !ee && te;
                if (re) return (0, C.Y)(m.default, {});
                if (!ae) return (0, C.Y)(p.default, {});
                const ie = (0, o.d4)(v.A.desktop.desktop_gp_728x90),
                    se = (0, o.d4)(v.A.desktop.desktop_gp_300x250),
                    ne = (0, o.d4)(v.A.desktop.desktop_gp_160x600),
                    oe = (0, o.d4)(f.iM),
                    le = $ ? .id,
                    de = !!oe && "object" == typeof oe,
                    ce = function({
                        gameID: e,
                        isMobile: t,
                        pageType: r
                    }) {
                        return !t && 30067 !== e && "preview" !== r
                    }({
                        gameID: le,
                        isMobile: r,
                        pageType: J
                    }),
                    me = oe ? .config ? .trackingUrl ? .replace("[timestamp]", Date.now()),
                    pe = $ ? .alternates || [];
                (0, s.useEffect)(() => {
                    z && e((0, Y.yc)({
                        path: z,
                        pageType: J,
                        pageID: le,
                        pokifordevs_team_id: $ ? .pokifordevs_team_id,
                        developer: $ ? .developer
                    }))
                }, [z]);
                const _e = !!$.slug && !!P.A[$.slug],
                    ve = (0, o.d4)(e => (0, x.wS)(e, "gdnation"));
                (0, s.useEffect)(() => {
                    e((0, k.c0)())
                }, [$.slug, ve]);
                const he = (0, s.useMemo)(() => (({
                        game: e,
                        gameID: t,
                        isMobile: r,
                        hasLevelPacks: a,
                        mysteryTiles: s,
                        randomSeed: n,
                        site: o,
                        localisations: l
                    }) => {
                        const d = !r || r && e.mobile_file ? (0, C.Y)(c.default, {}, `GameContainer-${t}`) : (0, C.Y)(M, {}, `GameUnavailable-${t}`),
                            m = e ? .relatedGames ? .map((e, t) => {
                                const a = {
                                        className: `ir${t}`,
                                        lazy: !0,
                                        isMobile: r,
                                        idx: t,
                                        list: "related",
                                        componentKey: V
                                    },
                                    i = (0, D.n)(e.id);
                                return (0, G.u)({ ...a,
                                    recommendationIndex: t,
                                    data: { ...e,
                                        imageUrl: i.imageUrl ? ? e.imageUrl
                                    },
                                    imageVariant: i.imageVariant
                                })
                            }) ? ? [];
                        (0, G.c)(m, s, {
                            randomSeed: n,
                            getTileRenderOptions: e => ({
                                className: `ir${e}`,
                                idx: e,
                                trackingIndex: e,
                                lazy: !0,
                                fetchPriority: !1,
                                isMobile: r,
                                list: "related",
                                componentKey: V
                            })
                        });
                        const p = e ? .relatedCategories ? .map((e, t) => {
                                const r = "basic-category";
                                return (0, C.Y)(I, {
                                    data: e,
                                    contentType: r,
                                    list: r,
                                    idx: t
                                }, `c-${e.id}`)
                            }),
                            _ = r ? [(0, C.Y)("div", {
                                className: R.pageGame__externallyHostedCommunication,
                                children: (0, C.Y)(T, {})
                            })] : [],
                            v = r && !a && (0, C.FD)("div", {
                                className: R.pageGame__titleOverlay,
                                children: [(0, C.Y)("h1", {
                                    className: R.pageGame__titleOverlayTitle,
                                    children: e.title
                                }), e.developer && (0, C.Y)("div", {
                                    className: R.pageGame__titleOverlayDeveloper,
                                    children: "tr" === o.lang ? `${e.developer} ${l.by}` : `${l.by} ${e.developer}`
                                })]
                            }),
                            h = (0, i.A)(R.pageGame__gameWrapper, {
                                [R.pageGame__gameWrapper_mobile]: r
                            }, {
                                [R.pageGame__gameWrapper_fullBleed]: a
                            }, {
                                [R.pageGame__gameWrapper_hasLevelPacks]: a
                            });
                        return [..._, (0, C.FD)("div", {
                            className: h,
                            children: [d, v]
                        }), (0, C.Y)("div", {
                            "data-testid": "game-related-grid",
                            className: R.pageGame__relatedGames,
                            dangerouslySetInnerHTML: {
                                __html: m.map(e => e.html).join("")
                            }
                        }), (0, C.Y)(q, {
                            whenVisible: !0,
                            children: p
                        })]
                    })({
                        game: $,
                        gameID: le,
                        hasTakeover: de,
                        isMobile: r,
                        hasLevelPacks: _e,
                        mysteryTiles: Z,
                        randomSeed: H,
                        site: U,
                        localisations: W
                    }), [le, de, r, _e, Z, H, U, W]),
                    ue = (0, s.useMemo)(() => (0, E.b)(U, W, {
                        game: $
                    }), [le]);
                return (0, C.FD)(C.FK, {
                    children: [!!ue ? .jsonLD && (0, C.Y)("script", {
                        type: "application/ld+json",
                        id: "game-json-ld",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(ue.jsonLD)
                        }
                    }), (0, C.FD)(n.m, {
                        children: [ue.meta.title && (0, C.Y)("title", {
                            children: ue.meta.title
                        }), ue.meta.robots && (0, C.Y)("meta", {
                            name: "robots",
                            content: ue.meta.robots
                        }), (0, C.Y)("meta", {
                            name: "keywords",
                            content: $.title
                        }), ue.meta.description && (0, C.Y)("meta", {
                            name: "description",
                            content: ue.meta.description
                        }), (0, C.Y)("link", {
                            rel: "canonical",
                            href: ue.meta.canonical
                        }, "canonical"), pe.map(({
                            href: e,
                            hrefLang: t
                        }) => (0, C.Y)("link", {
                            rel: "alternate",
                            href: e,
                            hrefLang: t
                        }, t)), ue.og && Object.entries(ue.og).map(([e, t]) => (0, C.Y)("meta", {
                            property: `og:${e}`,
                            content: t.toString()
                        }, `og:${e}`)), ue.twitter && Object.entries(ue.twitter).map(([e, t]) => (0, C.Y)("meta", {
                            property: `twitter:${e}`,
                            content: t
                        }, `twitter:${e}`))]
                    }), (0, C.FD)("div", {
                        className: (0, i.A)(F.pageGrid, {
                            [R.pageGame_mobile]: r
                        }, {
                            [R.pageGame_mobile_hasLevelPacks]: r && _e
                        }, {
                            [R.pageGame_desktop]: !r
                        }, {
                            [R.pageGame_desktop_hasTakeover]: de && !r
                        }),
                        id: "pageGame",
                        children: [he, ce && (0, C.FD)(C.FK, {
                            children: [(0, C.Y)(d.default, {
                                className: R.pageGame__advertisementA79,
                                data: ie
                            }, "advertisement-desktop_gp_728x90"), (0, C.Y)(d.default, {
                                className: R.pageGame__advertisementA32,
                                data: se
                            }, "advertisement-desktop_gp_300x250"), (0, C.Y)(d.default, {
                                className: R.pageGame__advertisementA16,
                                data: ne
                            }, "advertisement-desktop_gp_160x600")]
                        })]
                    }), (0, C.Y)(q, {
                        whenVisible: !0,
                        children: (0, C.Y)(j, {
                            gameData: $,
                            gameMeta: ue.description
                        })
                    }), r && !K && (0, C.Y)(O, {}), !!me && (0, C.Y)("img", {
                        className: R.pageGame__pixel,
                        src: me,
                        alt: ""
                    })]
                })
            }

            function W() {
                const e = (0, o.d4)(Y.K5),
                    t = (0, o.d4)(N.Bi);
                return "mystery" !== e || t ? (0, C.Y)(U, {}) : (0, C.Y)(_.default, {})
            }
        },
        45477(e, t, r) {
            r.r(t), r.d(t, {
                default: () => h
            });
            var a = r(13526),
                i = r(10061),
                s = r(15136),
                n = r(74606),
                o = r(9722),
                l = r(60529),
                d = r(91642),
                c = r(78821),
                m = r(68740),
                p = r(40960),
                _ = r(15890),
                v = r(58738);

            function h() {
                const e = (0, n.wA)(),
                    {
                        isMobile: t
                    } = (0, i.useContext)(d.F),
                    r = (0, n.d4)(l.k4);
                return (0, i.useEffect)(() => {
                    r && e((0, o.yc)({
                        path: r,
                        pageType: "mystery",
                        pageID: null
                    }))
                }, [r]), (0, v.FD)(v.FK, {
                    children: [(0, v.FD)(s.m, {
                        children: [(0, v.Y)("title", {
                            children: "Mystery Game"
                        }), (0, v.Y)("meta", {
                            name: "robots",
                            content: "noindex"
                        })]
                    }), (0, v.Y)("div", {
                        className: (0, a.A)(p.pageGrid, {
                            [_.pageGame_mobile]: t
                        }, {
                            [_.pageGame_desktop]: !t
                        }),
                        id: "pageGame",
                        children: (0, v.Y)("div", {
                            className: (0, a.A)(_.pageGame__gameWrapper, {
                                [_.pageGame__gameWrapper_mobile]: t
                            }),
                            children: (0, v.Y)("div", {
                                className: (0, a.A)(m.gamePlayer, {
                                    [m.gamePlayer_desktop]: !t
                                }),
                                children: (0, v.Y)("div", {
                                    className: m.gamePlayer__container,
                                    children: (0, v.Y)("div", {
                                        className: m.gamePlayer__game,
                                        id: "game-player",
                                        children: (0, v.Y)("div", {
                                            className: c.gameNotAvailable__container,
                                            children: (0, v.Y)("section", {
                                                className: (0, a.A)(c.gameNotAvailableInner__wrapper, c.gameNotAvailableInner__wrapper_og),
                                                children: (0, v.FD)("h3", {
                                                    className: c.gameNotAvailable__text,
                                                    children: [(0, v.Y)("em", {
                                                        children: "Mystery Game"
                                                    }), " is no longer available."]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })]
                })
            }
        },
        59134(e, t, r) {
            r.r(t), r.d(t, {
                default: () => l,
                getVideo: () => o
            });
            var a = r(13526),
                i = r(10061),
                s = r(10588),
                n = r(58738);

            function o({
                videoUrl: e,
                videoSize: t
            }) {
                return {
                    h264: `https://v.poki-cdn.com/${e}.${t}.h264.mp4`,
                    h265: `https://v.poki-cdn.com/${e}.${t}.h265.mp4`,
                    vp9: `https://v.poki-cdn.com/${e}.${t}.vp9.mp4`
                }
            }

            function l({
                videoUrl: e,
                showWhenPlayable: t = !1,
                onPlaying: r
            }) {
                const l = (0, i.useRef)(null),
                    [d, c] = (0, i.useState)(!t),
                    [m, p] = (0, i.useState)(null);
                (0, i.useEffect)(() => {
                    if (l.current) {
                        const {
                            width: e
                        } = l.current.getBoundingClientRect();
                        switch (!0) {
                            case e > 300:
                                p("3x3");
                                break;
                            case e > 200:
                                p("2x2");
                                break;
                            default:
                                p("1x1")
                        }
                    }
                }, [l.current]), (0, i.useEffect)(() => {
                    const e = l.current;
                    if (t && e) {
                        const t = () => {
                            c(!0)
                        };
                        return e.addEventListener("canplaythrough", t), () => {
                            e.removeEventListener("canplaythrough", t)
                        }
                    }
                }, [l.current, t]), (0, i.useEffect)(() => {
                    const e = l.current;
                    if (r && e) return e.addEventListener("playing", r), () => {
                        e.removeEventListener("playing", r)
                    }
                }, [l.current, r]);
                const {
                    h264: _,
                    h265: v,
                    vp9: h
                } = (0, i.useMemo)(() => o({
                    videoUrl: e,
                    videoSize: m
                }), [e, m]);
                return e && m ? (0, n.FD)("video", {
                    loop: !0,
                    muted: !0,
                    ref: l,
                    className: (0, a.A)(s.tileVideo, {
                        [s.tileVideo_visible]: d
                    }),
                    autoPlay: !0,
                    playsInline: !0,
                    children: [(0, n.Y)("source", {
                        src: h,
                        type: 'video/mp4; codecs="vp09.00.10.08"'
                    }), (0, n.Y)("source", {
                        src: v,
                        type: 'video/mp4; codecs="hvc1.1.6.L63.90"'
                    }), (0, n.Y)("source", {
                        src: _,
                        type: "video/mp4"
                    })]
                }) : (0, n.Y)("video", {
                    ref: l,
                    className: s.tileVideo
                })
            }
        },
        48843(e, t, r) {
            r.r(t), r.d(t, {
                default: () => m
            });
            var a = r(13526),
                i = r(10061),
                s = r(74606),
                n = r(40700),
                o = r(50820),
                l = r(9722),
                d = r(7087),
                c = r(58738);

            function m({
                id: e,
                className: t,
                data: {
                    code: r,
                    containerId: m,
                    width: p,
                    height: _
                },
                hideLabel: v
            }) {
                const h = (0, s.wA)(),
                    u = (0, s.d4)(l.Qk),
                    g = (0, s.d4)(o.iM),
                    y = (0, s.d4)(n.K),
                    f = {
                        height: _,
                        width: p,
                        overflow: "hidden"
                    };
                (0, i.useEffect)(() => (h((0, o.o3)({
                    code: r
                })), () => {
                    h((0, o.QB)({
                        code: r
                    }))
                }), [r, u, h]);
                const b = !!g && "object" == typeof g;
                let A;
                const k = function({
                    width: e,
                    height: t
                }) {
                    return 728 === e && 90 === t ? "desktop_gp_728x90" : 160 === e && 600 === t ? "desktop_gp_160x600" : 300 === e && 250 === t ? "desktop_gp_300x250" : void 0
                }({
                    width: p,
                    height: _
                });
                b && g ? .config ? .replacements && Object.keys(g.config.replacements).forEach(e => {
                    (r.includes(e) || m.includes(e) || k === e) && (A = g.config.replacements[e])
                });
                const N = 728 === p && 90 === _,
                    Y = 160 === p && 600 === _,
                    x = 300 === p && 250 === _;
                return (0, c.FD)(c.FK, {
                    children: [A && (0, c.Y)("a", {
                        className: (0, a.A)({
                            [d.advertisement__takeover160x600]: Y
                        }, {
                            [d.advertisement__takeover300x250]: x
                        }, t),
                        href: A.link,
                        target: "_blank",
                        rel: "noopener",
                        referrerPolicy: "origin",
                        children: (0, c.Y)("img", {
                            alt: `takeover-${r}`,
                            src: A.image
                        })
                    }), (0, c.Y)("div", {
                        id: e,
                        className: (0, a.A)(d.advertisement, {
                            [d.advertisement_hidden]: b
                        }, t),
                        children: (0, c.FD)("div", {
                            className: (0, a.A)(d.advertisement__container, {
                                [d.advertisement__container_728x90]: N
                            }),
                            children: [(0, c.Y)("div", {
                                className: d.advertisement__slot,
                                style: f,
                                children: (0, c.Y)("div", {
                                    id: m,
                                    style: f
                                })
                            }), !v && (0, c.Y)("div", {
                                className: (0, a.A)(d.advertisement__label, {
                                    [d.advertisement__label_728x90]: N
                                }),
                                children: y.advertisement
                            })]
                        })
                    })]
                })
            }
        },
        89311(e, t, r) {
            r.r(t), r.d(t, {
                default: () => h
            });
            var a = r(21681),
                i = r(13526),
                s = r(10061),
                n = r(74606),
                o = r(28147),
                l = r(50),
                d = r(91642),
                c = r(9819),
                m = r(58738);
            const p = (0, a.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-MobileNav-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(1711).then(r.bind(r, 88946)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 88946
                }),
                _ = (0, a.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PlayGameTile-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e(4354).then(r.bind(r, 71603)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 71603
                }),
                v = (0, a.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-GamePlayer-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => Promise.all([r.e(9658), r.e(3354), r.e(3787)]).then(r.bind(r, 43354)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve: () => 43354
                });

            function h({
                className: e
            }) {
                const {
                    isMobile: t
                } = (0, s.useContext)(d.F), r = (0, n.d4)(l.QX), a = (0, n.d4)(o.zS), [h, u] = (0, s.useState)(!1), [g, y] = (0, s.useState)(!t), f = (0, s.useRef)(null), b = t && !r;
                (0, s.useEffect)(() => {
                    a && setTimeout(() => {
                        u(r)
                    }, 0)
                }, [r]), (0, s.useEffect)(() => {
                    if (t) return r ? (clearTimeout(f.current), y(!0)) : f.current = setTimeout(() => {
                        y(!1)
                    }, 5e3), () => clearTimeout(f.current)
                }, [t, r]);
                const A = t && !b;
                return (0, m.FD)("div", {
                    id: "game-container",
                    className: (0, i.A)(c.gameContainer__wrapper, {
                        [c.gameContainer__wrapper_fullscreen]: r
                    }, {
                        [c.gameContainer__wrapper_ipadFix]: h
                    }, e),
                    children: [b && (0, m.Y)(_, {}), g && (0, m.Y)(v, {
                        className: (0, i.A)({
                            [c.gameContainer__gamePlayer_hidden]: b
                        })
                    }), A && (0, m.Y)(p, {})]
                })
            }
        },
        51869(e, t, r) {
            r.r(t), r.d(t, {
                description: () => a,
                description__SVGIconStar: () => i,
                description__appStoreTitle: () => s,
                description__body: () => n,
                description__breadcrumbs: () => o,
                description__developer: () => l,
                description__header: () => d,
                description__imageWrapper: () => c,
                description__label: () => m,
                description__labels: () => p,
                description__localized: () => _,
                description__localized_isHomePage: () => v,
                description__preTitle: () => h,
                description__rating: () => u,
                description__tags: () => g,
                description__thumbnail: () => y,
                description__thumbnailContainer: () => f,
                description__title: () => b,
                description__titleContainer: () => A,
                description__videoEmbed: () => k,
                description__videoEmbed__iframe: () => N
            });
            var a = "npmo3Vk8vdpOrUnRlo4K",
                i = "fcfViJboVjIxhb1F278U",
                s = "Z4P1bZJFYA_LBpxMeK3z",
                n = "ExURFs1eybHeBRR0Ay6d",
                o = "ODY4N8qthtyZR7ueRm8t",
                l = "ykSfXRX6hSsz0ISpeaWm",
                d = "ag25MXv4yZahCGrJMxIn",
                c = "v8TUHvsE2V93jQeU1nvV",
                m = "vd1aWiYRdRn48fpbDJ0_",
                p = "wY7sRBuJJVct_A0DPHDr",
                _ = "U5UHxulLIj1mqRNKVoIl",
                v = "S9u9oGGPKoCPdp0ckDId",
                h = "SIe_wNXliOAsytkgDP1I",
                u = "QYaTx0tHZZIBm0gZRzJf",
                g = "vSEqiNgYwM46IdL3tgV4",
                y = "bfq4PKbgNwePswLuaSwZ",
                f = "wIGewHYOM_yiDgJbC_XN",
                b = "Wa2Xpu5vfbxVCjRv2Gv_",
                A = "i3QPWr3keV_hOpU2xsic",
                k = "OomLyi2L_EiyzmIQ3mM_",
                N = "S45ulegipLVB735bYlW_"
        },
        78821(e, t, r) {
            r.r(t), r.d(t, {
                gameNotAvailableInner__wrapper: () => a,
                gameNotAvailableInner__wrapper_og: () => i,
                gameNotAvailable__button: () => s,
                gameNotAvailable__container: () => n,
                gameNotAvailable__text: () => o,
                gameNotAvailable__tile: () => l,
                gameNotAvailable__tileBtn: () => d,
                gameNotAvailable__tile_disabled: () => c
            });
            var a = "V9vd6zER1EaziDkk3NzM",
                i = "cp_MF6vaVmpn8IvCgE2p",
                s = "DdHGTqRCCkhSh7ugvVyD",
                n = "KgoXNWNJ6RnGxZYrXsuj",
                o = "BK2RxhELdp2BJogNswIx",
                l = "FgSi38OToaaRWjs_WgPb",
                d = "x4ymOt8MeJ4bQh3e4C4U",
                c = "oh_Otpi1ZdDu13ghHnDO"
        },
        68740(e, t, r) {
            r.r(t), r.d(t, {
                gamePlayer: () => a,
                gamePlayer__container: () => i,
                gamePlayer__game: () => s,
                gamePlayer__gameWrapper: () => n,
                gamePlayer__rotateScreen: () => o,
                gamePlayer__rotateScreen__btn: () => l,
                gamePlayer__rotateScreen__icon: () => d,
                gamePlayer__rotateScreen__text: () => c,
                gamePlayer__rotateScreen__wrapper: () => m,
                gamePlayer__rotateScreen_showExplicitOrientationnMessage: () => p,
                gamePlayer__tapForFullscreen: () => _,
                gamePlayer_desktop: () => v,
                gamePlayer_desktop_hasTakeover: () => h,
                gamePlayer_fullscreen: () => u,
                rotateIconShakeAnimation: () => g,
                rotateScreenHideAnimation: () => y
            });
            var a = "BgztZmlqUnzFdsjSmmJn",
                i = "L1ITkDzCRTkiRlpeLSPD",
                s = "oNVoB91JkRWfP4vHrjdX",
                n = "ZvQjR9fV3GRraesBQUjX",
                o = "J6tqxYc6fpBoHrC5vr0W",
                l = "jUUUu_FqreA_ek3ep9lh",
                d = "x0nvw8qmiCP6f8MAEIwx",
                c = "BZTO0rv6DO53A8Rj5NMM",
                m = "_SUZuMvsALFWI4KmxPdl",
                p = "AV6wA32JWQ1dnle8c9ba",
                _ = "rkUs26I46Zr_gd6A9Pjq",
                v = "O6aS7QO5ETmydBF0bVB7",
                h = "wvPBPqE1ylGFyuZc6pSW",
                u = "_0r9GJJwdYqkaOz4ipBQw",
                g = "seKqapJjAkQjXTrYoS9y",
                y = "ww039qaOhb5Veu2mbHrA"
        },
        10588(e, t, r) {
            r.r(t), r.d(t, {
                tileVideo: () => a,
                tileVideo_visible: () => i
            });
            var a = "UnEHxLYLNyXKaG7b1gjH",
                i = "epw1W_AjsRat5evp4n0h"
        },
        7087(e, t, r) {
            r.r(t), r.d(t, {
                advertisement: () => a,
                advertisement__container: () => i,
                advertisement__container_728x90: () => s,
                advertisement__label: () => n,
                advertisement__label_728x90: () => o,
                advertisement__slot: () => l,
                advertisement__takeover160x600: () => d,
                advertisement__takeover300x250: () => c,
                advertisement_hidden: () => m
            });
            var a = "yqRHsCZfzhtS8CI82MRw",
                i = "pBveriWEDsb6AJVk59Ng",
                s = "UHdP93WuO6JFP1eeavtH",
                n = "ijT1oilby2WbYJUzfbaJ",
                o = "J9jEffjY15TCePz3z84r",
                l = "okjidGhocmXN7zKxDo6s",
                d = "ENA2Z6w7FNjomfj9aSpL",
                c = "P3lVZ6Prom1CTL8J5Y3e",
                m = "Pg6vUQQ30ZWtdfOCpykP"
        },
        9819(e, t, r) {
            r.r(t), r.d(t, {
                gameContainer__gamePlayer_hidden: () => a,
                gameContainer__wrapper: () => i,
                gameContainer__wrapper_fullscreen: () => s,
                gameContainer__wrapper_ipadFix: () => n
            });
            var a = "zfbHEuhDZKba_V3Fboau",
                i = "EtDQGeSm9fMJvX4DEnsi",
                s = "NkWoGaPyP66RXOHJSvnD",
                n = "bqWCN9ZkqgLPEGLBPCLZ"
        }
    }
]);
//# sourceMappingURL=client~app-components-PageGame-16a7eadb~668ffb2f0447eac83e32.js.map