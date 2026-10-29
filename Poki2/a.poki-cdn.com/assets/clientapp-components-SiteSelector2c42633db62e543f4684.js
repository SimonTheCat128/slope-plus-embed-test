"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [368, 2125, 2791, 4348, 6358], {
        15383(e, t, n) {
            n.r(t), n.d(t, {
                default: () => u
            });
            var o = n(13526),
                s = n(74606),
                l = n(30559),
                r = n(48120),
                a = n(40700),
                c = n(88927),
                i = n(58738);

            function u({
                className: e,
                to: t,
                tiny: n,
                onClick: u
            }) {
                const d = (0, s.d4)(a.K),
                    _ = (0, i.Y)(r.default, {
                        className: c.closeButton__icon,
                        name: "ui-icons-close",
                        recolor: !0,
                        decorative: !0
                    });
                return t ? (0, i.Y)(l.default, {
                    to: t,
                    onClick: u,
                    className: (0, o.A)(c.closeButton, {
                        [c.closeButton_tiny]: n
                    }, e),
                    ariaLabel: d.exit,
                    children: _
                }) : (0, i.Y)("button", {
                    type: "button",
                    onClick: u,
                    className: (0, o.A)("buttonReset", c.closeButton, {
                        [c.closeButton_tiny]: n
                    }, e),
                    "aria-label": d.exit,
                    children: _
                })
            }
        },
        85749(e, t, n) {
            n.r(t), n.d(t, {
                default: () => u
            });
            var o = n(10061),
                s = n(74606),
                l = n(9722),
                r = n(60529),
                a = n(74237),
                c = n(58738);
            const i = "default";

            function u({
                children: e,
                placeholder: t,
                className: n,
                bot: u = !1,
                onVisible: d,
                navigationAware: _
            }) {
                const h = (0, s.d4)(r.E6),
                    m = (0, s.d4)(l.Xk),
                    f = (0, o.useRef)(null),
                    [v, p] = (0, o.useState)(!1);
                return _ && "POP" === h && !m || u ? e : ((0, o.useEffect)(() => {
                    const e = f.current;
                    return e && (0, a.lB)(i, e, () => {
                        p(!0), "function" == typeof d && d()
                    }), () => {
                        e && (0, a.OV)(i, e)
                    }
                }, [f.current]), v ? e : (0, c.Y)("div", {
                    className: n,
                    ref: f,
                    children: t || null
                }))
            }
        },
        57725(e, t, n) {
            n.r(t), n.d(t, {
                default: () => C
            });
            var o = n(21681),
                s = n(13526),
                l = n(10061),
                r = n(74606),
                a = n(15383),
                c = n(85749),
                i = n(48120),
                u = n(40700),
                d = n(28147),
                _ = n(9722),
                h = n(56963),
                m = n(91642),
                f = n(98508),
                v = n(49170),
                p = n(59841),
                g = n(58738);
            const N = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-Flag-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e(5824).then(n.bind(n, 84149)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve: () => 84149
                }),
                S = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-RoundedButton-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e(6181).then(n.bind(n, 6776)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve: () => 6776
                });

            function y({
                href: e,
                lang: t
            }) {
                e ? .includes("poki.com/") && (0, f.A)(t)
            }

            function A(e) {
                return [...e].sort((e, t) => (e.languageName ? ? "").toLowerCase().localeCompare((t.languageName ? ? "").toLowerCase()))
            }

            function C() {
                const [e, t] = (0, l.useState)(!1), {
                    isMobile: n
                } = (0, l.useContext)(m.F), o = (0, r.d4)(_.nK), f = (0, r.d4)(h.Gd), C = (0, r.d4)(h.n), D = (0, r.d4)(d.wu), k = (0, r.d4)(u.K), b = (0, l.useRef)(null), B = (0, l.useRef)(null);
                if ("ID" === D || "CN" === D) return null;
                const Y = f.iso_lang.replace("-", "_"),
                    w = (0, l.useMemo)(() => function({
                        alternates: e,
                        site: t,
                        sites: n
                    }) {
                        const o = e => (0, g.Y)(N, {
                            className: p.siteSelector__flag,
                            flag: e.replace("-", "_")
                        });
                        if (e && e.length) return A(e).map(({
                            href: e,
                            hrefLang: t,
                            lang: n,
                            languageName: s
                        }) => {
                            const l = o(t);
                            return (0, g.FD)("a", {
                                className: p.siteSelector__link,
                                "data-lang": t,
                                href: e,
                                onClick: () => y({
                                    href: e,
                                    lang: n
                                }),
                                children: [l, s]
                            }, t)
                        });
                        const s = [];
                        return A(Object.values(n)).forEach(({
                            domain: e,
                            domain_title: n,
                            iso_lang: l,
                            lang: r,
                            languageName: a,
                            paths: c
                        }) => {
                            const i = o(l),
                                u = window.location.pathname,
                                d = (0, v.M5)(t, u),
                                _ = "home" === d ? "" : (0, v.TH)(t, d, u),
                                h = {
                                    paths: c
                                },
                                m = `https://${e}${(0,v.AO)(h,d,_)}`;
                            s.push((0, g.FD)("a", {
                                className: p.siteSelector__link,
                                "data-lang": l,
                                href: m,
                                title: n,
                                onClick: () => y({
                                    href: m,
                                    lang: r
                                }),
                                children: [i, a]
                            }, l))
                        }), s
                    }({
                        alternates: o,
                        site: f,
                        sites: C
                    }), [o, f, C]);
                (0, l.useEffect)(() => {
                    function n(n) {
                        e && b.current && B.current && !b.current.contains(n.target) && !B.current.contains(n.target) && (document.body.style.overflow = "", t(!1))
                    }
                    return document.addEventListener("mousedown", n), () => {
                        document.removeEventListener("mousedown", n)
                    }
                }, [e]);
                const L = !n || e;
                return (0, g.FD)("div", {
                    className: (0, s.A)(p.siteSelector, {
                        [p.siteSelector_open]: e
                    }),
                    children: [(0, g.FD)(S, {
                        ref: B,
                        onClick: () => {
                            n && (document.body.style.overflow = e ? "" : "hidden"), t(!e)
                        },
                        ariaLabel: "Choose language",
                        active: e,
                        children: [(0, g.Y)(c.default, {
                            children: (0, g.Y)("span", {
                                className: p.siteSelector__flagWrapper,
                                children: (0, g.Y)(N, {
                                    flag: Y
                                })
                            })
                        }), (0, g.Y)("span", {
                            children: f.languageName
                        }), (0, g.Y)(i.default, {
                            name: "ui-icons-chevron-down",
                            className: (0, s.A)(p.siteSelector__chevron, e && p.siteSelector__chevron_active),
                            recolor: !0,
                            decorative: !0
                        })]
                    }), (0, g.FD)("div", {
                        ref: b,
                        "data-testid": "site-selector-panel",
                        className: (0, s.A)(p.siteSelector__panel, {
                            [p.siteSelector__panel_visible]: e
                        }),
                        children: [L && (0, g.FD)("div", {
                            className: p.siteSelector__headerRow,
                            children: [(0, g.Y)("h6", {
                                className: p.siteSelector__header,
                                children: k.select_language
                            }), (0, g.Y)(a.default, {
                                onClick: () => {
                                    document.body.style.overflow = "", t(!1)
                                }
                            })]
                        }), (0, g.Y)("div", {
                            className: p.siteSelector__linksColumns,
                            children: w.length > 0 ? w : (0, g.Y)("span", {
                                role: "img",
                                "aria-label": "No other options",
                                children: "🚫😠⁉️ 😉🎮"
                            })
                        })]
                    })]
                })
            }
        },
        98508(e, t, n) {
            function o(e) {
                document.cookie = `poki_language_choice=${e}; domain=poki.com; path=/; max-age=7776000; samesite=lax`
            }
            n.d(t, {
                A: () => o
            })
        },
        88927(e, t, n) {
            n.r(t), n.d(t, {
                closeButton: () => o,
                closeButton__icon: () => s,
                closeButton_tiny: () => l
            });
            var o = "Xxfq9ma7MZpaemlj7seC",
                s = "BmX244PYynHQn8Y7ZtIt",
                l = "dVUHCWDo3NQu9bPjDWlg"
        },
        59841(e, t, n) {
            n.r(t), n.d(t, {
                siteSelector: () => o,
                siteSelector__chevron: () => s,
                siteSelector__chevron_active: () => l,
                siteSelector__close: () => r,
                siteSelector__flag: () => a,
                siteSelector__flagWrapper: () => c,
                siteSelector__header: () => i,
                siteSelector__headerRow: () => u,
                siteSelector__link: () => d,
                siteSelector__linksColumns: () => _,
                siteSelector__panel: () => h,
                siteSelector__panel_visible: () => m,
                siteSelector_open: () => f
            });
            var o = "OpF4NXmnwNP6RxPvobuQ",
                s = "olRsF7CGxfUvXH_CcZG3",
                l = "rZrRB9cNGvtRvHJeWi30",
                r = "DovojMSK_z9_OBlOiZ6Q",
                a = "XsV06PdBuhK9jfL4DVBm",
                c = "NNlUglN3fQaJWUr6z6cQ",
                i = "nVr20T58FFNNPkgQz8ME",
                u = "f_7RanptQUMqDN0K0HTn",
                d = "tko1gSDdFM6HXc1XCDaq",
                _ = "pwOYZu8yUEeDUGsaiVqz",
                h = "iJTBZuG7MdrvBS7meXjn",
                m = "DAzPLwcQPICYR_IpYaeU",
                f = "ddNCPvnGpyjAae8NZBpj"
        }
    }
]);
//# sourceMappingURL=client~app-components-SiteSelector~2c42633db62e543f4684.js.map