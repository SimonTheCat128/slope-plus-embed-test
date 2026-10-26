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
                default: () => A
            });
            var o = n(21681),
                s = n(13526),
                l = n(10061),
                r = n(74606),
                a = n(15383),
                c = n(85749),
                i = n(48120),
                u = n(40700),
                d = n(9722),
                _ = n(56963),
                h = n(91642),
                m = n(98508),
                f = n(49170),
                v = n(59841),
                p = n(58738);
            const g = (0, o.Ay)({
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
                N = (0, o.Ay)({
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

            function S({
                href: e,
                lang: t
            }) {
                e ? .includes("poki.com/") && (0, m.A)(t)
            }

            function y(e) {
                return [...e].sort((e, t) => (e.languageName ? ? "").toLowerCase().localeCompare((t.languageName ? ? "").toLowerCase()))
            }

            function A() {
                const [e, t] = (0, l.useState)(!1), {
                    isMobile: n
                } = (0, l.useContext)(h.F), o = (0, r.d4)(d.nK), m = (0, r.d4)(_.Gd), A = (0, r.d4)(_.n), C = (0, r.d4)(u.K), k = (0, l.useRef)(null), D = (0, l.useRef)(null);
                if (47 === m.id) return null;
                const b = m.iso_lang.replace("-", "_"),
                    B = (0, l.useMemo)(() => function({
                        alternates: e,
                        site: t,
                        sites: n
                    }) {
                        const o = e => (0, p.Y)(g, {
                            className: v.siteSelector__flag,
                            flag: e.replace("-", "_")
                        });
                        if (e && e.length) return y(e).map(({
                            href: e,
                            hrefLang: t,
                            lang: n,
                            languageName: s
                        }) => {
                            const l = o(t);
                            return (0, p.FD)("a", {
                                className: v.siteSelector__link,
                                "data-lang": t,
                                href: e,
                                onClick: () => S({
                                    href: e,
                                    lang: n
                                }),
                                children: [l, s]
                            }, t)
                        });
                        const s = [];
                        return y(Object.values(n)).forEach(({
                            domain: e,
                            domain_title: n,
                            iso_lang: l,
                            lang: r,
                            languageName: a,
                            paths: c
                        }) => {
                            const i = o(l),
                                u = window.location.pathname,
                                d = (0, f.M5)(t, u),
                                _ = "home" === d ? "" : (0, f.TH)(t, d, u),
                                h = {
                                    paths: c
                                },
                                m = `https://${e}${(0,f.AO)(h,d,_)}`;
                            s.push((0, p.FD)("a", {
                                className: v.siteSelector__link,
                                "data-lang": l,
                                href: m,
                                title: n,
                                onClick: () => S({
                                    href: m,
                                    lang: r
                                }),
                                children: [i, a]
                            }, l))
                        }), s
                    }({
                        alternates: o,
                        site: m,
                        sites: A
                    }), [o, m, A]);
                (0, l.useEffect)(() => {
                    function n(n) {
                        e && k.current && D.current && !k.current.contains(n.target) && !D.current.contains(n.target) && (document.body.style.overflow = "", t(!1))
                    }
                    return document.addEventListener("mousedown", n), () => {
                        document.removeEventListener("mousedown", n)
                    }
                }, [e]);
                const Y = !n || e;
                return (0, p.FD)("div", {
                    className: (0, s.A)(v.siteSelector, {
                        [v.siteSelector_open]: e
                    }),
                    children: [(0, p.FD)(N, {
                        ref: D,
                        onClick: () => {
                            n && (document.body.style.overflow = e ? "" : "hidden"), t(!e)
                        },
                        ariaLabel: "Choose language",
                        active: e,
                        children: [(0, p.Y)(c.default, {
                            children: (0, p.Y)("span", {
                                className: v.siteSelector__flagWrapper,
                                children: (0, p.Y)(g, {
                                    flag: b
                                })
                            })
                        }), (0, p.Y)("span", {
                            children: m.languageName
                        }), (0, p.Y)(i.default, {
                            name: "ui-icons-chevron-down",
                            className: (0, s.A)(v.siteSelector__chevron, e && v.siteSelector__chevron_active),
                            recolor: !0,
                            decorative: !0
                        })]
                    }), (0, p.FD)("div", {
                        ref: k,
                        "data-testid": "site-selector-panel",
                        className: (0, s.A)(v.siteSelector__panel, {
                            [v.siteSelector__panel_visible]: e
                        }),
                        children: [Y && (0, p.FD)("div", {
                            className: v.siteSelector__headerRow,
                            children: [(0, p.Y)("h6", {
                                className: v.siteSelector__header,
                                children: C.select_language
                            }), (0, p.Y)(a.default, {
                                onClick: () => {
                                    document.body.style.overflow = "", t(!1)
                                }
                            })]
                        }), (0, p.Y)("div", {
                            className: v.siteSelector__linksColumns,
                            children: B.length > 0 ? B : (0, p.Y)("span", {
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
//# sourceMappingURL=client~app-components-SiteSelector~2b46d769e67a642e5ad2.js.map