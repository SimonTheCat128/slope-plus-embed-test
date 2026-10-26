"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3832], {
        64200(e, t, a) {
            a.r(t), a.d(t, {
                default: () => r
            });
            var i = a(13526),
                s = a(58738);

            function r({
                className: e,
                style: t
            }) {
                const a = (0, i.A)("fakeTile", e);
                return (0, s.Y)("div", {
                    className: a,
                    style: t
                })
            }
        },
        35671(e, t, a) {
            a.r(t), a.d(t, {
                default: () => h
            });
            var i = a(10061),
                s = a(74606),
                r = a(62769),
                n = a(80874),
                o = a(40700),
                l = a(28147),
                c = a(86709),
                d = a(71211),
                _ = a(23915),
                p = a(58738);
            const m = "undefined" == typeof window;

            function h() {
                const e = (0, s.d4)(o.K),
                    t = (0, s.d4)(l.zO),
                    {
                        games: a
                    } = (0, d.G)(),
                    {
                        games: h,
                        shouldShowPlaceholders: u
                    } = (0, _.J)(),
                    [g, v] = i.default.useState(null),
                    y = i.default.useMemo(() => ({
                        forYou: e.for_you ? ? "",
                        play: e.play || "Play",
                        playAgain: e.play_again || "Play Again"
                    }), [e]);
                return (0, c.q)(g, "tiktok" !== t), m ? (0, p.Y)(r.ForYouCarouselFragmentSlot, {
                    localisations: y
                }) : (0, p.Y)(n.default, {
                    forYouGames: h,
                    playAgainGames: a,
                    forYouPending: u,
                    localisations: y,
                    contentRef: v
                })
            }
        },
        2491(e, t, a) {
            a.r(t), a.d(t, {
                default: () => d
            });
            var i = a(13526),
                s = (a(10061), a(64200)),
                r = a(46579),
                n = a(40960),
                o = a(31643),
                l = a(58738);

            function c({
                index: e
            }) {
                return (0, l.Y)("div", {
                    className: r.categoryShelf,
                    children: (0, l.Y)("div", {
                        className: r.categoryShelf__content,
                        children: Array.from({
                            length: 5
                        }).map((t, a) => (0, l.Y)(s.default, {
                            className: r.categoryShelf__tile,
                            style: {
                                "--fakeTileAnimationDelay": .1 * (5 * e + a) + "s"
                            }
                        }, a))
                    })
                })
            }

            function d() {
                return (0, l.FD)(l.FK, {
                    children: [Array.from({
                        length: 3
                    }).map((e, t) => (0, l.Y)(c, {
                        index: t
                    }, t)), (0, l.Y)("div", {
                        className: o.pageHome__mobileGridWrapper,
                        children: (0, l.Y)("div", {
                            className: (0, i.A)(n.pageGrid, o.pageHome_mobile, o.pageHome_mobile_chunk),
                            children: Array.from({
                                length: 12
                            }).map((e, t) => (0, l.Y)(s.default, {
                                className: `ip${t}`,
                                style: {
                                    "--fakeTileAnimationDelay": .1 * t + "s"
                                }
                            }, t))
                        })
                    })]
                })
            }
        },
        30559(e, t, a) {
            a.r(t), a.d(t, {
                default: () => o,
                isModifiedEvent: () => n
            });
            a(10061);
            var i = a(11992),
                s = a(49170),
                r = a(58738);

            function n(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
            }

            function o({
                className: e,
                children: t,
                to: a,
                onClick: o,
                target: l,
                title: c,
                rel: d,
                style: _,
                refForwarded: p,
                ariaLabel: m,
                viewabilityGameId: h,
                viewabilityList: u,
                viewabilityPanelSection: g,
                imageVariant: v,
                tileId: y,
                historyState: A
            }) {
                return "_blank" === l && (d = d ? `noopener ${d}` : "noopener"), (0, r.Y)("a", {
                    className: e,
                    href: a,
                    onClick: e => {
                        o && o(e), !(0, s.xs)(a) || e.defaultPrevented || 0 !== e.button || l || n(e) || (e.preventDefault(), (0, i.A)().push(a, A))
                    },
                    rel: d,
                    target: l,
                    title: c,
                    style: _,
                    ref: p,
                    "aria-label": m,
                    ...void 0 !== h && {
                        "data-viewability-game-tile": "",
                        "data-tile-list": u ? ? "",
                        "data-panel-section": g
                    },
                    "data-tile-id": y ? ? h,
                    "data-image-variant": v,
                    children: t
                })
            }
        },
        5511(e, t, a) {
            a.r(t), a.d(t, {
                default: () => u
            });
            var i = a(13526),
                s = a(10061),
                r = a(74606),
                n = a(64200),
                o = a(9722),
                l = a(76271),
                c = a(91642),
                d = a(40960),
                _ = a(15868),
                p = a(58738);
            const m = 30,
                h = 60;

            function u() {
                const {
                    isMobile: e
                } = (0, s.useContext)(c.F), t = (0, r.d4)(o.hT), a = (0, i.A)(d.pageGrid, {
                    [_.pageCategory_mobile]: e
                }, {
                    [_.pageCategory_desktop]: !e
                }), u = e ? m : h, g = (0, p.FD)(p.FK, {
                    children: [(0, p.Y)(n.default, {
                        style: {
                            width: "28px",
                            height: "28px",
                            minWidth: "28px",
                            minHeight: "28px",
                            borderRadius: "50%"
                        }
                    }), (0, p.Y)(n.default, {
                        style: {
                            width: "160px",
                            height: "28px",
                            minWidth: "160px",
                            minHeight: "28px",
                            borderRadius: "8px"
                        }
                    })]
                });
                return (0, p.FD)(p.FK, {
                    children: [e && (0, p.Y)("div", {
                        className: _.pageCategory__title,
                        children: g
                    }), (0, p.FD)("div", {
                        id: (0, l.ZM)(t),
                        className: a,
                        children: [!e && (0, p.Y)("div", {
                            className: (0, i.A)(_.pageCategory__titleBox, _.pageCategory__titleBoxSkeleton),
                            children: g
                        }), Array.from({
                            length: u
                        }).map((e, t) => (0, p.Y)(n.default, {
                            className: `ip${t}`,
                            style: {
                                "--fakeTileAnimationDelay": .1 * t + "s"
                            }
                        }, t))]
                    })]
                })
            }
        },
        75372(e, t, a) {
            a.r(t), a.d(t, {
                default: () => Y
            });
            var i = a(21681),
                s = a(10061),
                r = a(15136),
                n = a(74606),
                o = a(38739),
                l = a(36871),
                c = a(57015),
                d = a(48120),
                _ = a(37654),
                p = a(40700),
                m = a(9722),
                h = a(60529),
                u = a(56963),
                g = a(52405),
                v = a(95469),
                y = a(2454),
                A = a(58738);
            const f = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-ScrollToTop-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(7911).then(a.bind(a, 51074)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 51074
                }),
                F = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageError-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(3427).then(a.bind(a, 92146)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 92146
                }),
                k = (e, t) => {
                    (0, g.F)({
                        category: "faq",
                        action: e,
                        label: t,
                        options: {
                            interaction: !0
                        }
                    })
                };

            function Y() {
                const e = (0, n.wA)(),
                    t = (0, n.d4)(p.K),
                    a = (0, n.d4)(u.Gd),
                    i = (0, n.d4)(m.KO),
                    g = (0, n.d4)(h.k4),
                    {
                        spawnSparkle: Y,
                        SparkleContainer: N
                    } = (0, c.useSparkleEmitter)(),
                    x = `${t.faq} - ${a.title}`,
                    {
                        data: S,
                        isError: b,
                        isSuccess: q
                    } = (0, _.tE)({
                        key: "faq-page-content",
                        lang: a.lang
                    });
                (0, s.useEffect)(() => {
                    q && e((0, m.yc)({
                        path: g,
                        pageType: "content",
                        pageID: null
                    }))
                }, [q, g]);
                const C = (e, t) => {
                        k("faqQuestionClick", e), Y(t)
                    },
                    G = s.default.useMemo(() => S ? .sections ? S.sections.map(e => ({
                        id: e.id,
                        title: e.title,
                        icon: e.icon,
                        faqs: e.questions.map(e => ({
                            question: e.question,
                            answer: (0, v.A)(e.answer)
                        }))
                    })) : [], [S]);
                return b ? (0, A.Y)(F, {}) : (0, A.FD)(A.FK, {
                    children: [(0, A.FD)("div", {
                        className: y.pageFAQ,
                        id: "pageFAQ",
                        children: [(0, A.Y)(r.m, {
                            children: (0, A.Y)("title", {
                                children: x
                            })
                        }), (0, A.FD)("article", {
                            className: y.pageFAQ__content,
                            children: [(0, A.FD)("header", {
                                className: y.pageFAQ__header,
                                children: [(0, A.Y)("h1", {
                                    className: y.pageFAQ__header__title,
                                    children: t.faq
                                }), (0, A.FD)("div", {
                                    children: [(0, A.Y)("h2", {
                                        className: y.pageFAQ__quickLinks__title,
                                        children: S ? .quickLinksHeader
                                    }), (0, A.Y)("div", {
                                        className: y.pageFAQ__quickLinks__container,
                                        children: G ? .map(e => (0, A.FD)("a", {
                                            href: `#${e.id}`,
                                            className: y.pageFAQ__quickLinks__item,
                                            onClick: () => k("faqSectionClick", e.id),
                                            children: [(0, A.Y)(d.default, {
                                                className: y.pageFAQ__quickLinks__item__icon,
                                                name: e.icon,
                                                recolor: !0,
                                                decorative: !0
                                            }), (0, A.Y)("span", {
                                                className: y.pageFAQ__quickLinks__item__title,
                                                children: e.title
                                            })]
                                        }, e.id))
                                    })]
                                })]
                            }), (0, A.Y)("div", {
                                className: y.pageFAQ__container,
                                children: G.map(e => (0, A.FD)("div", {
                                    id: e.id,
                                    className: y.pageFAQ__section,
                                    children: [(0, A.FD)("div", {
                                        className: y.pageFAQ__section__header,
                                        children: [(0, A.Y)("div", {
                                            className: y.pageFAQ__section__iconWrapper,
                                            children: (0, A.Y)(d.default, {
                                                className: y.pageFAQ__section__icon,
                                                name: e.icon,
                                                recolor: !0,
                                                decorative: !0
                                            })
                                        }), (0, A.Y)("h3", {
                                            className: y.pageFAQ__section__title,
                                            children: e.title
                                        })]
                                    }), (0, A.Y)(l.default, {
                                        items: e.faqs.map((t, a) => ({
                                            id: `${e.id}-${a}`,
                                            question: t.question,
                                            answer: t.answer,
                                            alwaysOpen: "plr4lfz" === e.id
                                        })),
                                        onQuestionClick: C
                                    })]
                                }, e.id))
                            })]
                        }), (0, A.FD)("div", {
                            className: y.pageFAQ_contact,
                            children: [(0, A.Y)("p", {
                                className: y.pageFAQ_contact__text,
                                children: S ? .contactCTA.headline
                            }), (0, A.Y)(o.default, {
                                to: S ? .contactCTA.buttonLink || i,
                                children: S ? .contactCTA.buttonText
                            })]
                        }), S ? ._jsonLd && (0, A.Y)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: S._jsonLd
                            }
                        })]
                    }), (0, A.Y)(N, {}), (0, A.Y)(f, {
                        className: y.pageFAQ__scrollToTop
                    })]
                })
            }
        },
        47925(e, t, a) {
            a.r(t), a.d(t, {
                default: () => p
            });
            var i = a(13526),
                s = a(10061),
                r = a(64200),
                n = a(91642),
                o = a(40960),
                l = a(15890),
                c = a(58738);
            const d = 30,
                _ = 60;

            function p() {
                const {
                    isMobile: e
                } = (0, s.useContext)(n.F), t = (0, i.A)(o.pageGrid, {
                    [l.pageGame_mobile]: e
                }, {
                    [l.pageGame_desktop]: !e
                }), a = e ? d : _;
                return (0, c.FD)("div", {
                    className: t,
                    id: "pageGame",
                    children: [(0, c.Y)(r.default, {
                        className: (0, i.A)(l.pageGame__gameWrapper, {
                            [l.pageGame__gameWrapper_mobile]: e
                        })
                    }), !e && (0, c.FD)(c.FK, {
                        children: [(0, c.Y)(r.default, {
                            className: l.pageGame__advertisementA79,
                            style: {
                                width: "754px",
                                height: "90px"
                            }
                        }), (0, c.Y)(r.default, {
                            className: l.pageGame__advertisementA32,
                            style: {
                                width: "314px",
                                height: "314px"
                            }
                        }), (0, c.Y)(r.default, {
                            className: l.pageGame__advertisementA16,
                            style: {
                                width: "204x",
                                height: "644px"
                            }
                        })]
                    }), (0, c.Y)(r.default, {
                        className: "ir0"
                    }), (0, c.Y)(r.default, {
                        className: "ir1"
                    }), Array.from({
                        length: a
                    }).map((e, t) => (0, c.Y)(r.default, {
                        style: {
                            "--fakeTileAnimationDelay": .1 * t + "s"
                        }
                    }, `pageGameSkeleton-${t}`))]
                })
            }
        },
        4006(e, t, a) {
            a.r(t), a.d(t, {
                default: () => u
            });
            var i = a(13526),
                s = a(10061),
                r = a(64200),
                n = a(35671),
                o = a(2491),
                l = a(91642),
                c = a(40960),
                d = a(31643),
                _ = a(58738);
            const p = 12,
                m = 60;

            function h({
                startIndex: e
            }) {
                return (0, _.Y)("div", {
                    className: (0, i.A)(c.pageGrid, d.pageHome_mobile, d.pageHome_mobile_chunk),
                    children: Array.from({
                        length: p
                    }).map((t, a) => (0, _.Y)(r.default, {
                        className: `ip${a}`,
                        style: {
                            "--fakeTileAnimationDelay": .1 * (e + a) + "s"
                        }
                    }, a))
                })
            }

            function u() {
                const {
                    isMobile: e
                } = (0, s.useContext)(l.F);
                return e ? (0, _.FD)(_.FK, {
                    children: [(0, _.Y)("div", {
                        className: d.pageHome__personalSection,
                        children: (0, _.Y)(n.default, {})
                    }), (0, _.Y)(h, {
                        startIndex: 0
                    }), (0, _.Y)(o.default, {}), (0, _.Y)(h, {
                        startIndex: p
                    })]
                }) : (0, _.Y)("div", {
                    className: (0, i.A)(c.pageGrid, d.pageHome_desktop),
                    children: Array.from({
                        length: m
                    }).map((e, t) => (0, _.Y)(r.default, {
                        className: `ip${t}`,
                        style: {
                            "--fakeTileAnimationDelay": .1 * t + "s"
                        }
                    }, t))
                })
            }
        },
        66663(e, t, a) {
            a.r(t), a.d(t, {
                default: () => d
            });
            var i = a(21681),
                s = a(74606),
                r = a(92184),
                n = a(28147),
                o = a(64847),
                l = a(58738);
            const c = (0, i.Ay)({
                resolved: {},
                chunkName: () => "app-components-Spinner-tsx",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!a.m[t]
                },
                importAsync: () => a.e(6453).then(a.bind(a, 63216)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return a(t)
                },
                resolve: () => 63216
            });

            function d({
                forceLoadingState: e = !1
            }) {
                const t = (0, s.d4)(e => (0, r.rv)(e));
                return (0, s.d4)(e => (0, n.ac)(e)) || e ? (0, l.FD)(l.FK, {
                    children: [(0, l.Y)(c, {
                        className: o.pageLoader,
                        style: {
                            backgroundColor: t.color
                        },
                        small: !1
                    }), e && (0, l.Y)("div", {
                        className: o.pageLoader__filler
                    })]
                }) : null
            }
        },
        13373(e, t, a) {
            a.r(t), a.d(t, {
                default: () => i
            });
            const i = (0, a(21681).Ay)({
                resolved: {},
                chunkName: () => "app-components-ProfileSuccessScreen-tsx",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!a.m[t]
                },
                importAsync: () => a.e(1574).then(a.bind(a, 2995)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return a(t)
                },
                resolve: () => 2995
            })
        },
        40031(e, t, a) {
            a.r(t), a.d(t, {
                default: () => T
            });
            var i = a(21681),
                s = a(13526),
                r = a(10061),
                n = a(15136),
                o = a(37620),
                l = a(74606),
                c = a(13373),
                d = a(95445),
                _ = a(3133),
                p = a(72305),
                m = a(92184),
                h = a(50),
                u = a(9722),
                g = a(60529),
                v = a(72027),
                y = a(91642),
                A = a(14867),
                f = a(5576),
                F = a(83389),
                k = a(16797),
                Y = a(69351),
                N = a(58738);
            const x = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageBackground-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(9559).then(a.bind(a, 59934)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 59934
                }),
                S = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageLoader-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.resolve().then(a.bind(a, 66663)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 66663
                }),
                b = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-NotificationStack-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(302), a.e(2623)]).then(a.bind(a, 68204)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 68204
                }),
                q = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-FloatingWarning-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(4008).then(a.bind(a, 48093)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 48093
                }),
                C = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-Pill-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(6331), a.e(4363)]).then(a.bind(a, 36482)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 36482
                }),
                G = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-AuthPanel-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(2166).then(a.bind(a, 66707)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 66707
                }),
                D = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-Profile-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(6729).then(a.bind(a, 77032)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 77032
                }),
                Q = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-Footer-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(219).then(a.bind(a, 770)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 770
                }),
                L = (0, i.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-modals-ModalStack-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(302), a.e(1842)]).then(a.bind(a, 21227)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 21227
                }),
                H = (0, k.y1)();

            function T({
                children: e
            }) {
                const t = (0, l.wA)(),
                    {
                        isMobile: a
                    } = (0, r.useContext)(y.F),
                    i = (0, l.d4)(d.L),
                    k = (0, l.d4)(m.rv),
                    T = (0, l.d4)(p.IT),
                    I = (0, l.d4)(p.ij),
                    P = (0, l.d4)(p.Ep),
                    M = (0, l.d4)(u.Er),
                    R = (0, l.d4)(h.QX),
                    w = (0, l.d4)(u.K5),
                    K = (0, l.d4)(g.k4),
                    W = (0, l.d4)(g.E6),
                    O = (0, l.d4)(_.Z1),
                    U = (0, l.d4)(_.GO),
                    [B, E] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    (0, f.Ts)(), t((0, v.sx)()), E(!0)
                }, []), (0, r.useEffect)(() => {
                    "PUSH" === W && (0, F.e)()
                }, [K, W]);
                const j = I && P,
                    J = k ? .image !== A.V.default ? .image,
                    V = "privacy" === w,
                    z = T ? .identity ? .is_first_login,
                    X = z && !M,
                    Z = I && !P,
                    $ = a ? !R : "game" !== w,
                    ee = B && U && O.length > 0;
                return (0, N.FD)(N.FK, {
                    children: [(0, N.Y)(n.m, {
                        htmlAttributes: {
                            "data-theme": "playground-light"
                        },
                        children: (0, N.Y)("meta", {
                            name: "theme-color",
                            content: "#83ffe7"
                        })
                    }), (0, N.Y)("div", {
                        dangerouslySetInnerHTML: {
                            __html: '<template data-poki-fragment="recent-games"></template>'
                        }
                    }), a && "home" === w && (0, N.Y)("div", {
                        dangerouslySetInnerHTML: {
                            __html: '<template data-poki-fragment="recommended-games"></template>'
                        }
                    }), J && (0, N.Y)(x, {}), !V && (0, N.Y)(C, {}), (0, N.Y)("div", {
                        className: (0, s.A)(Y.root, {
                            [Y.root_desktop]: !a,
                            [Y.root_mobile]: a,
                            [Y.root_searchResults]: ee
                        }),
                        children: e
                    }), (0, N.Y)(Q, {}), (0, N.Y)(o.A, {
                        whenIdle: !0,
                        children: (0, N.Y)(S, {})
                    }), i.length > 0 && (0, N.Y)(b, {}), Z && (0, N.Y)(G, {}), j && (0, N.Y)(D, {}), X && (0, N.Y)(c.default, {}), $ && (0, N.Y)(L, {}), H && (0, N.Y)(q, {
                        id: "acceptance-message",
                        children: "🚨 Attention: This is an acceptance/testing site for Poki, not the official Poki.com. 🚨"
                    })]
                })
            }
        },
        55536(e, t, a) {
            a.r(t), a.d(t, {
                notificationIconShakeAnimation: () => i,
                notificationWrapperAnimatedIn: () => s,
                notificationWrapperAnimatedOut: () => r,
                notification__close: () => n,
                notification__close__hoverBall: () => o,
                notification__close__icon: () => l,
                notification__expireIndicator: () => c,
                notification__header: () => d,
                notification__header__icon: () => _,
                notification__header__title: () => p,
                notification__message: () => m,
                notification__sparkleLeft: () => h,
                notification__sparkleRight: () => u,
                notification__wrapper: () => g,
                notification__wrapper_blocking: () => v,
                notification_expireTimer: () => y,
                notification_isInteracted: () => A,
                notification_wrapperAnimatedIn: () => f,
                notification_wrapperAnimatedOut: () => F,
                notification_wrapperIsFeedback: () => k,
                notification_wrapperIsFeedback__body: () => Y
            });
            var i = "qc0C729kGhYTyUSlyBCJ",
                s = "lpfwRian8HD46WjUql1i",
                r = "GQrEA6h6AgSDTeICIxHd",
                n = "Shsu43Fg1D5RnKYAiYYo",
                o = "_1FSCFlXao44kVhv2N4M",
                l = "NvBftrLn_q4pc1fxRFQm",
                c = "jZYSM7MnMw1WtUJU514N",
                d = "lP0ckkTI5DBUm1fq1_Ro",
                _ = "CnHK0OsqH8MSMdvENGPf",
                p = "Qs7dl_Ld46ydOEIz0LXx",
                m = "d3ZIouFSeag377MFoV_m",
                h = "FmunYA2Gg9tnykhKAFAq",
                u = "XYdro20ImdsmNYxQ55oi",
                g = "G5CEDQHAMruXlbZB0uvQ",
                v = "fEM7CVMl4bvoHV3rVMLC",
                y = "XPu0c4J5lHNllu2xfgfF",
                A = "xp8eifzNm7QKRDRJIaom",
                f = "cuHhDdMPvHITQuAKqwdx",
                F = "qy4OFLRTxHf6bzJpfDsI",
                k = "Z7DC8Cr2YxWWfMvO_AtV",
                Y = "FNge7utDr74JoSlixzQf"
        },
        40960(e, t, a) {
            a.r(t), a.d(t, {
                pageGrid: () => i,
                pageTopContent: () => s
            });
            var i = "vtbwTfQNi80Hes0DzmGs",
                s = "pgTlDsvMokOdehB3D11L"
        },
        15868(e, t, a) {
            a.r(t), a.d(t, {
                pageCategory__faqItem: () => i,
                pageCategory__gridSection: () => s,
                pageCategory__mobileShelf: () => r,
                pageCategory__schemaList: () => n,
                pageCategory__schemaTitle: () => o,
                pageCategory__title: () => l,
                pageCategory__titleBox: () => c,
                pageCategory__titleBoxSkeleton: () => d,
                pageCategory__titleIcon: () => _,
                pageCategory__titleText: () => p,
                pageCategory__topContent: () => m,
                pageCategory_desktop: () => h,
                pageCategory_mobile: () => u,
                pageCategory_mobile_allCategories: () => g
            });
            var i = "uSPpW2ZYe05PNcSmK0FP",
                s = "gubbDR42MGUGFTiYoqWy",
                r = "prcD0VUy8dwWTBzY_Xdu",
                n = "WcMY3e5nv_iqM7rLTINg",
                o = "Vz1O5jCIfTAEjuWB2uXg",
                l = "BQo0uIq1O3DOY4dWYwfr",
                c = "rg0q25sDgc3c2A__7hrD",
                d = "HIUagiKnHtdvJCnNFT14",
                _ = "VkKaKnFoAibotfZH_vz5",
                p = "WYbdnDFa1nPzH5UFtOyA",
                m = "Wz4fsOmhQR4bEYpqHqhc",
                h = "JgLfL7LclbiAmVJ1BGIg",
                u = "BFj5_MRnlqMNxEud7CSZ",
                g = "hoebBxWlHBzbFSMw9FQR"
        },
        2454(e, t, a) {
            a.r(t), a.d(t, {
                flashBlue: () => i,
                flashBlueBg: () => s,
                pageFAQ: () => r,
                pageFAQ__container: () => n,
                pageFAQ__content: () => o,
                pageFAQ__header: () => l,
                pageFAQ__header__title: () => c,
                pageFAQ__icon: () => d,
                pageFAQ__quickLinks__container: () => _,
                pageFAQ__quickLinks__item: () => p,
                pageFAQ__quickLinks__item__icon: () => m,
                pageFAQ__quickLinks__item__title: () => h,
                pageFAQ__quickLinks__title: () => u,
                pageFAQ__scrollToTop: () => g,
                pageFAQ__section: () => v,
                pageFAQ__section__header: () => y,
                pageFAQ__section__icon: () => A,
                pageFAQ__section__iconWrapper: () => f,
                pageFAQ__section__title: () => F,
                pageFAQ_contact: () => k,
                pageFAQ_contact__text: () => Y
            });
            var i = "jxc8jxHpnFviKpnmZUYS",
                s = "UiDMAFIzsOCPusEnkagA",
                r = "_9N8IQhSCE9BZHGWJyOvw",
                n = "IvWzDYyn_oAPdUyRSs38",
                o = "GIw5nAelGzdtQEZnIjBL",
                l = "sbfoEnoxYu74FuKMTs7u",
                c = "RkjBTSC7_xOeIYtxPZ2y",
                d = "H3j1WSFJhCEMzobxeG81",
                _ = "_UX1Z_Q8uxXiibquOzn4",
                p = "GtDPL55hU7qRgxGgPedj",
                m = "Uz_hFSLlmPYmrBI_j_IO",
                h = "RfArMwOPF1KO6jUa968I",
                u = "lOQslmLgs6JfNjyS65wf",
                g = "S2LyiVxeVDAiHMBNM2fu",
                v = "Ya9x5F5JU2fOswlR79jA",
                y = "JWZj0QthqC3fOsNOfKB6",
                A = "_etfhM20QsbzUXW13NTl",
                f = "EIIEY9IflzBPdRek4cia",
                F = "Dj9etG4PiNA7k6a5bxsY",
                k = "tvCSnolYsU9r9UAxrkY4",
                Y = "HH4gFijCidJahURMlS_o"
        },
        15890(e, t, a) {
            a.r(t), a.d(t, {
                pageGame__advertisementA16: () => i,
                pageGame__advertisementA32: () => s,
                pageGame__advertisementA79: () => r,
                pageGame__description: () => n,
                pageGame__externallyHostedCommunication: () => o,
                pageGame__gameWrapper: () => l,
                pageGame__gameWrapper_fullBleed: () => c,
                pageGame__gameWrapper_hasLevelPacks: () => d,
                pageGame__gameWrapper_mobile: () => _,
                pageGame__pixel: () => p,
                pageGame__relatedGames: () => m,
                pageGame__titleOverlay: () => h,
                pageGame__titleOverlayDeveloper: () => u,
                pageGame__titleOverlayTitle: () => g,
                pageGame_desktop: () => v,
                pageGame_desktop_hasTakeover: () => y,
                pageGame_mobile: () => A,
                pageGame_mobile_hasLevelPacks: () => f
            });
            var i = "ZWzDTMK76w9X1iaBvoSs",
                s = "_K68p9Y5eLN5PSdt4um9",
                r = "iV0NGvWNqQGMUwVRfpqC",
                n = "V0qcUYuOullGYGWLFChZ",
                o = "lwfhBFf00emgvcGoqV0g",
                l = "cM0dvuoLEJDmDILA2Jo8",
                c = "pjGxDIhHynMo72FK9XAV",
                d = "AI2omrk_g96_HRFVzISO",
                _ = "ZJTKr_MXUFVVsJpV_qiz",
                p = "nQ32Q_5I94EeoEsR3ljg",
                m = "maLoMvDjtqoMXuNK1Qrg",
                h = "FFyyJk6SPXtCWUt79eau",
                u = "NnMLceeJVLjqVKSXxx7K",
                g = "x2Ue_8nyLeS9JNGC6PCh",
                v = "KOhrFB4QDKEFN2uykSgp",
                y = "RlUXPDIHC5o_sVPxHp0G",
                A = "Fs5S79qEs9av8TQAeTeb",
                f = "_Nl2JFEKRqci3dh3Z6a0"
        },
        31643(e, t, a) {
            a.r(t), a.d(t, {
                pageHome__categoryShelfSpacing: () => i,
                pageHome__fullBleed: () => s,
                pageHome__gridSection: () => r,
                pageHome__gridSectionTile: () => n,
                pageHome__mobileGridWrapper: () => o,
                pageHome__personalSection: () => l,
                pageHome_desktop: () => c,
                pageHome_desktop_categories: () => d,
                pageHome_mobile: () => _,
                pageHome_mobileRemainder: () => p,
                pageHome_mobile_chunk: () => m,
                pageHome_mobile_hasRecentGames: () => h
            });
            var i = "qA21GqcRzM8PtmG4RqKA",
                s = "Lh2rJRgt3jPNA4yrULtg",
                r = "QnUXeNmmmNSj8Jomqqfj",
                n = "rvA013x1bb3kN0qp6NSx",
                o = "PU4QJBpmW3NftMUyOAzy",
                l = "TPxmgw2PbcC0VT_YFPUv",
                c = "Eu3YePRYW_jQ2bgCbNjr",
                d = "kAJ2gw7y5rtrdfkoJoa1",
                _ = "sVO_yY3sP6R0A04SxJ_L",
                p = "aLZe3wxTvLDximNrHuy7",
                m = "p4MgJ7rTh9b6jTnnYHRN",
                h = "cJYQtSxOTUTbjSCK2sCg"
        },
        64847(e, t, a) {
            a.r(t), a.d(t, {
                pageLoader: () => i,
                pageLoaderWrapperFadeInAnimation: () => s,
                pageLoader__filler: () => r
            });
            var i = "BpGdi4Nhd9PmA4jbCDMd",
                s = "sbvbNDKUibhBW2I87TGN",
                r = "W8compNR7UyaOS_MWPEf"
        },
        69351(e, t, a) {
            a.r(t), a.d(t, {
                root: () => i,
                root_desktop: () => s,
                root_mobile: () => r,
                root_searchResults: () => n
            });
            var i = "lStd1276e_IhuA3g3FIs",
                s = "s9w4UjUUDL2klmhRDNdo",
                r = "ADMPJVcFvhX6udYDGs_x",
                n = "a5yzuWAQzHdNHnpAxxO5"
        }
    }
]);
//# sourceMappingURL=client~main-bec01985~7ead86f2cecd3fdd6353.js.map