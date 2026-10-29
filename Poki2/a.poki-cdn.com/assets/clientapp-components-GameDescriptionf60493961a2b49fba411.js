"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6265, 6314], {
        76291(e, i, t) {
            t.r(i), t.d(i, {
                default: () => M
            });
            var s = t(21681),
                r = t(13526),
                n = t(10061),
                o = t(74606),
                a = t(30559),
                c = t(48120),
                l = t(40700),
                _ = t(56963),
                m = t(91642),
                g = t(23221),
                d = t(11297),
                p = t(84213),
                h = t(52405),
                u = t(33960),
                D = t(49170),
                v = t(74731),
                f = t(58738);
            const y = (0, s.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-Breadcrumbs-tsx",
                    isReady(e) {
                        const i = this.resolve(e);
                        return !0 === this.resolved[i] && !!t.m[i]
                    },
                    importAsync: () => t.e(8984).then(t.bind(t, 50273)),
                    requireAsync(e) {
                        const i = this.resolve(e);
                        return this.resolved[i] = !1, this.importAsync(e).then(e => (this.resolved[i] = !0, e))
                    },
                    requireSync(e) {
                        const i = this.resolve(e);
                        return t(i)
                    },
                    resolve: () => 50273
                }),
                b = (0, s.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-FAQ-tsx",
                    isReady(e) {
                        const i = this.resolve(e);
                        return !0 === this.resolved[i] && !!t.m[i]
                    },
                    importAsync: () => Promise.resolve().then(t.bind(t, 36871)),
                    requireAsync(e) {
                        const i = this.resolve(e);
                        return this.resolved[i] = !1, this.importAsync(e).then(e => (this.resolved[i] = !0, e))
                    },
                    requireSync(e) {
                        const i = this.resolve(e);
                        return t(i)
                    },
                    resolve: () => 36871
                }),
                N = (0, s.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-GameFactList-tsx",
                    isReady(e) {
                        const i = this.resolve(e);
                        return !0 === this.resolved[i] && !!t.m[i]
                    },
                    importAsync: () => t.e(1930).then(t.bind(t, 14951)),
                    requireAsync(e) {
                        const i = this.resolve(e);
                        return this.resolved[i] = !1, this.importAsync(e).then(e => (this.resolved[i] = !0, e))
                    },
                    requireSync(e) {
                        const i = this.resolve(e);
                        return t(i)
                    },
                    resolve: () => 14951
                }),
                F = (0, s.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-GameStats-tsx",
                    isReady(e) {
                        const i = this.resolve(e);
                        return !0 === this.resolved[i] && !!t.m[i]
                    },
                    importAsync: () => t.e(8253).then(t.bind(t, 19380)),
                    requireAsync(e) {
                        const i = this.resolve(e);
                        return this.resolved[i] = !1, this.importAsync(e).then(e => (this.resolved[i] = !0, e))
                    },
                    requireSync(e) {
                        const i = this.resolve(e);
                        return t(i)
                    },
                    resolve: () => 19380
                }),
                w = (0, s.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-MediaGallery-tsx",
                    isReady(e) {
                        const i = this.resolve(e);
                        return !0 === this.resolved[i] && !!t.m[i]
                    },
                    importAsync: () => t.e(4832).then(t.bind(t, 91405)),
                    requireAsync(e) {
                        const i = this.resolve(e);
                        return this.resolved[i] = !1, this.importAsync(e).then(e => (this.resolved[i] = !0, e))
                    },
                    requireSync(e) {
                        const i = this.resolve(e);
                        return t(i)
                    },
                    resolve: () => 91405
                }),
                L = (0, s.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-StoreLinks-tsx",
                    isReady(e) {
                        const i = this.resolve(e);
                        return !0 === this.resolved[i] && !!t.m[i]
                    },
                    importAsync: () => t.e(9936).then(t.bind(t, 149)),
                    requireAsync(e) {
                        const i = this.resolve(e);
                        return this.resolved[i] = !1, this.importAsync(e).then(e => (this.resolved[i] = !0, e))
                    },
                    requireSync(e) {
                        const i = this.resolve(e);
                        return t(i)
                    },
                    resolve: () => 149
                }),
                A = p.EH[1],
                Y = p.EH[3],
                k = 224,
                T = (0, g.z9)(6),
                S = (0, g.z9)(17);

            function I() {
                return "undefined" == typeof window ? 100 : window.matchMedia(S).matches ? 5 : window.matchMedia(T).matches ? 4 : 3
            }

            function M({
                gameData: e,
                gameMeta: i
            }) {
                const {
                    isMobile: t
                } = (0, n.useContext)(m.F), [s, g] = (0, n.useState)(!1), [p, M] = (0, n.useState)(6), [q, x] = (0, n.useState)(!1), [R, U] = (0, n.useState)(I), C = (0, n.useRef)(null), G = (0, n.useRef)(null), E = (0, n.useRef)(null), V = (0, n.useRef)(null), j = (0, n.useRef)(null), B = (0, n.useRef)(null), $ = (0, n.useRef)(null), H = (0, o.d4)(_.Gd), z = (0, o.d4)(l.K), Q = e.json_blobs ? .find(e => e.faq ? .length), O = e.categories.length, J = O > 6, K = p >= O, {
                    body: Z,
                    imageUrl: W,
                    developerGames: P
                } = i, X = (P ? .length ? ? 0) > R, ee = q;
                (0, n.useEffect)(() => {
                    const e = C.current,
                        i = G.current,
                        t = E.current,
                        s = V.current,
                        r = j.current,
                        n = B.current,
                        o = $.current,
                        a = new IntersectionObserver(c => {
                            c.forEach(c => {
                                c.isIntersecting && (a.unobserve(c.target), c.target === e && (0, h.F)({
                                    category: "gameDescription",
                                    action: "mainInfoVisible"
                                }), c.target === i && (0, h.F)({
                                    category: "gameDescription",
                                    action: "galleryVisible"
                                }), c.target === t && (0, h.F)({
                                    category: "gameDescription",
                                    action: "factTableVisible"
                                }), c.target === s && (0, h.F)({
                                    category: "gameDescription",
                                    action: "relatedCategoriesVisible"
                                }), c.target === r && (0, h.F)({
                                    category: "gameDescription",
                                    action: "developerGamesVisible"
                                }), c.target === n && (0, h.F)({
                                    category: "gameDescription",
                                    action: "gameFAQVisible"
                                }), c.target === o && (0, h.F)({
                                    category: "gameDescription",
                                    action: "getAppVisible"
                                }))
                            })
                        }, {
                            threshold: .5
                        });
                    return e && a.observe(e), i && a.observe(i), t && a.observe(t), s && a.observe(s), r && a.observe(r), n && a.observe(n), o && a.observe(o), () => a.disconnect()
                }, []), (0, n.useEffect)(() => {
                    const e = window.matchMedia(T),
                        i = window.matchMedia(S),
                        t = () => U(I());
                    return e.addEventListener("change", t), i.addEventListener("change", t), () => {
                        e.removeEventListener("change", t), i.removeEventListener("change", t)
                    }
                }, []);
                const ie = W ? (0, D.pN)({
                        width: Y,
                        height: Y,
                        imageUrl: W
                    }) : "",
                    te = W ? (0, D.pN)({
                        width: 2 * Y,
                        height: 2 * Y,
                        imageUrl: W
                    }) : "",
                    se = W ? (0, D.pN)({
                        width: A,
                        height: A,
                        imageUrl: W
                    }) : "",
                    re = W ? (0, D.pN)({
                        width: 2 * A,
                        height: 2 * A,
                        imageUrl: W
                    }) : "",
                    ne = e.intro && e.intro.length > 0 ? e.intro : function(e) {
                        if (e.length <= k) return e;
                        const i = e.match(/<p>([\s\S]*?)<\/p>/i),
                            t = i ? i[0] : e;
                        if (t.length <= k) return t;
                        const s = t.slice(0, k).lastIndexOf(" "),
                            r = s > 0 ? s : k,
                            n = t.slice(0, r);
                        return n.endsWith(".") || n.endsWith("!") || n.endsWith("?") ? n : `${n}...`
                    }(Z),
                    oe = ne !== Z,
                    ae = e.store_urls && Object.keys(e.store_urls).length > 0,
                    ce = (0, n.useMemo)(() => P ? function({
                        site: e,
                        isMobile: i,
                        developerGames: t
                    }) {
                        return t.map((t, s) => {
                            const r = (0, D.AO)(e, "game", t.slug),
                                n = (0, u.n)(t.id),
                                o = (0, d.m)({
                                    className: v.gameDescription__developerGame,
                                    data: { ...t,
                                        imageUrl: n.imageUrl ? ? t.imageUrl,
                                        url: r
                                    },
                                    isMobile: i,
                                    alwaysShowTitle: i,
                                    list: "related-developer",
                                    componentKey: "game-description",
                                    trackingIndex: s,
                                    lazy: !0,
                                    imageVariant: n.imageVariant
                                });
                            return `\n\t\t\t<li class="${v.gameDescription__developerGames__item}">\n\t\t\t\t${o}\n\t\t\t</li>\n\t\t`
                        }).join("")
                    }({
                        site: H,
                        isMobile: t,
                        developerGames: q ? P : P.slice(0, R)
                    }) : "", [H, t, P, q, R]),
                    le = (0, n.useMemo)(() => (i.screenshots ? ? []).map((e, i) => ({
                        id: `screenshot-${i}`,
                        type: "image",
                        url: e.image_url,
                        thumbnailUrl: e.image_url,
                        altText: e.alt_text,
                        caption: e.caption,
                        width: e.width,
                        height: e.height
                    })), [i.screenshots]);
                return (0, f.FD)("div", {
                    className: v.gameDescription,
                    id: "game-description",
                    children: [(0, f.FD)("div", {
                        className: v.gameDescription__section,
                        children: [(0, f.FD)("div", {
                            className: v.gameDescription__mainInfo,
                            ref: C,
                            children: [(0, f.FD)("figure", {
                                className: v.gameDescription__mainInfo__figure,
                                children: [W && (0, f.FD)("picture", {
                                    className: v.gameDescription__thumbnailContainer,
                                    children: [(0, f.Y)("source", {
                                        className: v.gameDescription__thumbnail,
                                        srcSet: `${ie} 1x, ${te} 2x`,
                                        media: "(min-width: 800px)",
                                        width: Y,
                                        height: Y
                                    }), (0, f.Y)("img", {
                                        className: v.gameDescription__thumbnail,
                                        alt: i.title,
                                        src: se,
                                        srcSet: `${se} 1x, ${re} 2x`,
                                        decoding: "async",
                                        fetchPriority: "high",
                                        width: A,
                                        height: A
                                    })]
                                }), (0, f.FD)("figcaption", {
                                    className: v.gameDescription__mainInfo__figure__caption,
                                    children: [(0, f.Y)(y, {
                                        breadcrumbs: i.breadcrumbs
                                    }), t ? (0, f.Y)("div", {
                                        className: v.gameDescription__mainInfo__title,
                                        "data-testid": "game-description-title",
                                        children: i.title
                                    }) : (0, f.Y)("h1", {
                                        className: v.gameDescription__mainInfo__title,
                                        "data-testid": "game-description-title",
                                        children: i.title
                                    }), (0, f.FD)("div", {
                                        className: v.gameDescription__mainInfo__developer,
                                        children: [e.developer_logo_url ? (0, f.Y)("img", {
                                            width: 24,
                                            height: 24,
                                            src: (0, D.pN)({
                                                width: 48,
                                                imageUrl: e.developer_logo_url
                                            }),
                                            alt: i.developer,
                                            className: v.gameDescription__mainInfo__developerLogo
                                        }) : (0, f.Y)("span", {
                                            children: `${z.by} `
                                        }), i.developer]
                                    })]
                                })]
                            }), ne && (0, f.FD)("div", {
                                className: v.gameDescription__description,
                                children: [(0, f.Y)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: ne
                                    }
                                }), oe && (0, f.FD)("button", {
                                    className: (0, r.$)("buttonReset", v.gameDescription__description__readMoreToggle),
                                    type: "button",
                                    onClick: () => {
                                        s ? (0, h.F)({
                                            category: "page",
                                            action: "showLess",
                                            label: "hero"
                                        }) : (0, h.F)({
                                            category: "page",
                                            action: "showMore",
                                            label: "hero"
                                        }), g(e => !e)
                                    },
                                    children: [s ? z.show_less : z.show_more, s ? (0, f.Y)(c.default, {
                                        name: "ui-icons-minus",
                                        recolor: !0,
                                        decorative: !0
                                    }) : (0, f.Y)(c.default, {
                                        name: "ui-icons-plus",
                                        recolor: !0,
                                        decorative: !0
                                    })]
                                })]
                            })]
                        }), (0, f.Y)("div", {
                            className: (0, r.$)(v.gameDescription__fullDescription, {
                                [v.gameDescription__fullDescription_expanded]: s
                            }),
                            dangerouslySetInnerHTML: {
                                __html: Z
                            }
                        })]
                    }), (0, f.Y)("div", {
                        className: (0, r.$)(v.gameDescription__section, v.gameDescription__section_stats),
                        children: (0, f.Y)(F, {
                            gameData: e
                        })
                    }), le.length > 0 && (0, f.Y)("div", {
                        className: (0, r.$)(v.gameDescription__section, v.gameDescription__section_fullBleed),
                        ref: G,
                        children: (0, f.Y)(w, {
                            items: le
                        })
                    }), (0, f.FD)("div", {
                        className: (0, r.$)(v.gameDescription__section, v.gameDescription__section_fullBleed),
                        ref: E,
                        children: [(0, f.Y)("h2", {
                            className: v.gameDescription__sectionTitle,
                            children: z.about_this_game
                        }), (0, f.Y)(N, {
                            gameData: e
                        })]
                    }), e.categories.length > 0 && (0, f.FD)("div", {
                        className: v.gameDescription__section,
                        ref: V,
                        children: [(0, f.FD)("h2", {
                            className: v.gameDescription__sectionTitle,
                            children: [z.related_categories, J && (0, f.FD)("button", {
                                onClick: () => {
                                    6 === p ? (M(O), (0, h.F)({
                                        category: "page",
                                        action: "showMore",
                                        label: "relatedCategories"
                                    })) : (M(6), (0, h.F)({
                                        category: "page",
                                        action: "showLess",
                                        label: "relatedCategories"
                                    }))
                                },
                                type: "button",
                                className: (0, r.$)("buttonReset", v.gameDescription__sectionTitle__toggleButton),
                                children: [K ? z.show_less : z.show_more, (0, f.Y)(c.default, {
                                    name: K ? "ui-icons-minus" : "ui-icons-plus",
                                    recolor: !0,
                                    decorative: !0
                                })]
                            })]
                        }), (0, f.Y)("ul", {
                            className: v.gameDescription__categoriesList,
                            children: e.categories.map((e, i) => (0, f.Y)("li", {
                                className: (0, r.$)(v.gameDescription__categoriesList__item, {
                                    [v.gameDescription__categoriesList__item_hidden]: !K && i >= p
                                }),
                                children: (0, f.FD)(a.default, {
                                    to: (0, D.AO)(H, "category", e.slug),
                                    className: v.gameDescription__categoriesList__link,
                                    onClick: () => {
                                        return i = e.slug, void(0, h.F)({
                                            category: "gameDescription",
                                            action: "clickCategory",
                                            label: i
                                        });
                                        var i
                                    },
                                    children: [e.title, (0, f.Y)("span", {
                                        className: v.gameDescription__categoriesList__count,
                                        children: e.gameCount
                                    })]
                                })
                            }, e.id))
                        })]
                    }), ce && (0, f.FD)("div", {
                        className: v.gameDescription__section,
                        ref: j,
                        children: [(0, f.FD)("h2", {
                            className: v.gameDescription__sectionTitle,
                            children: [1 === i.developers.length ? z.more_games_by_this_developer : z.more_games_by_these_developers, X && (0, f.FD)("button", {
                                onClick: () => {
                                    const e = !q;
                                    x(e), (0, h.F)({
                                        category: "page",
                                        action: e ? "showMore" : "showLess",
                                        label: "moreFromDeveloper"
                                    })
                                },
                                type: "button",
                                className: (0, r.$)("buttonReset", v.gameDescription__sectionTitle__toggleButton),
                                children: [ee ? z.show_less : z.show_more, (0, f.Y)(c.default, {
                                    name: ee ? "ui-icons-minus" : "ui-icons-plus",
                                    recolor: !0,
                                    decorative: !0
                                })]
                            })]
                        }), (0, f.Y)("ul", {
                            className: (0, r.$)(v.gameDescription__developerGames, {
                                [v.gameDescription__developerGames_expanded]: q
                            }),
                            dangerouslySetInnerHTML: {
                                __html: ce
                            }
                        })]
                    }), Q && (0, f.FD)(f.FK, {
                        children: [!!Q ? ._jsonLd && (0, f.Y)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: Q._jsonLd
                            }
                        }), !!Q.faq && Q.faq.length > 0 && (0, f.FD)("div", {
                            className: (0, r.$)(v.gameDescription__section, v.gameDescription__section_fullBleed),
                            ref: B,
                            children: [(0, f.Y)("h2", {
                                className: v.gameDescription__sectionTitle,
                                children: z.faq
                            }), (0, f.Y)(b, {
                                className: v.gameDescription__faq,
                                items: Q.faq,
                                onQuestionClick: e => {
                                    var i;
                                    i = e, (0, h.F)({
                                        category: "gamepage",
                                        action: "faqQuestionClick",
                                        label: i,
                                        options: {
                                            interaction: !0
                                        }
                                    })
                                }
                            })]
                        })]
                    }), ae && (0, f.FD)("div", {
                        className: v.gameDescription__section,
                        ref: $,
                        children: [(0, f.Y)("h2", {
                            className: v.gameDescription__sectionTitle,
                            children: z.get_the_app
                        }), (0, f.Y)(L, {
                            urls: e.store_urls
                        })]
                    })]
                })
            }
        },
        74731(e, i, t) {
            t.r(i), t.d(i, {
                gameDescription: () => s,
                gameDescription__categoriesList: () => r,
                gameDescription__categoriesList__count: () => n,
                gameDescription__categoriesList__item: () => o,
                gameDescription__categoriesList__item_hidden: () => a,
                gameDescription__categoriesList__link: () => c,
                gameDescription__description: () => l,
                gameDescription__description__readMoreToggle: () => _,
                gameDescription__developerGame: () => m,
                gameDescription__developerGames: () => g,
                gameDescription__developerGames__item: () => d,
                gameDescription__developerGames_expanded: () => p,
                gameDescription__factsList: () => h,
                gameDescription__factsList__item: () => u,
                gameDescription__factsList__itemContent: () => D,
                gameDescription__factsList__itemIcon: () => v,
                gameDescription__factsList__itemTitle: () => f,
                gameDescription__faq: () => y,
                gameDescription__fullDescription: () => b,
                gameDescription__fullDescription_expanded: () => N,
                gameDescription__mainInfo: () => F,
                gameDescription__mainInfo__developer: () => w,
                gameDescription__mainInfo__developerLogo: () => L,
                gameDescription__mainInfo__figure: () => A,
                gameDescription__mainInfo__figure__caption: () => Y,
                gameDescription__mainInfo__title: () => k,
                gameDescription__section: () => T,
                gameDescription__sectionTitle: () => S,
                gameDescription__sectionTitle__toggleButton: () => I,
                gameDescription__section_fullBleed: () => M,
                gameDescription__section_stats: () => q,
                gameDescription__thumbnail: () => x,
                gameDescription__thumbnailContainer: () => R
            });
            var s = "SPLjvwUglljx72Cbc38U",
                r = "WNs0WK_kKS4Tw4N2BU_Q",
                n = "UkY3le28tsmpXED0VrUt",
                o = "AY3eerQoNJRosYf4dkQc",
                a = "NTuM1V3CqSR6U_UeJBYo",
                c = "g13ksvx8siaWVRTFwryx",
                l = "tFZVF03PQZaPOzLciiSJ",
                _ = "m82lRUpJLGRrwux8_eBE",
                m = "pDGkugzaQKKE6lCiEh7S",
                g = "g2tEngeMmDqI8BTZL_jR",
                d = "TAsfHzItc3reeL3tB6QD",
                p = "Sfta56Vdj4j8MbZiLF5A",
                h = "DYSH75e_xV1ipN6pRaoG",
                u = "ZNN1aQFL1j7FDSxvQeGs",
                D = "AsZ81LGiCzpYzd8Kw6kw",
                v = "FG8m6jbUgMy1vDpwZIwk",
                f = "Pmh0eFO9p2IU2tyhtSE1",
                y = "VowJhUcqvUF6f5WcDayi",
                b = "aYbRzQy1dkv5k0ahUrTx",
                N = "NIcJCRy9m6Tia4ZzdWyx",
                F = "faGITj9TBz9lF7f5QD7x",
                w = "JMcreCZt8qSHW4ejT2vM",
                L = "pOURJXMThzFtHqzE0zn7",
                A = "OFjmSu01hMepf7DYV_tM",
                Y = "pkyQYZUaPcJ5T7YkBgYe",
                k = "TIakIJk_seZmjAw2Dhmw",
                T = "gnTU2EC40IjqezF8mtia",
                S = "mksXb8gjVNuyAlN4LgAP",
                I = "BwqVbdkO7EidsFkFtiKw",
                M = "kTngT1jPeeDVW_iVpBY3",
                q = "L2_WH8qwnlLKoltC4VDR",
                x = "ZkjjJvdHN77mDHPbAqAe",
                R = "HEphDnRJV3iA80Y1FG5e"
        }
    }
]);
//# sourceMappingURL=client~app-components-GameDescription~f60493961a2b49fba411.js.map