"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1897, 1930], {
        14951(t, e, a) {
            a.r(e), a.d(e, {
                default: () => u
            });
            var i = a(74606),
                n = a(48120),
                o = a(40700),
                c = a(56963),
                r = a(23474),
                _ = a(82552),
                s = a(46635),
                l = a(58738);

            function m({
                title: t,
                content: e,
                iconName: a
            }) {
                return (0, l.FD)("li", {
                    className: s.gameFactList__factsList__item,
                    children: [(0, l.FD)("span", {
                        className: s.gameFactList__factsList__itemTitle,
                        children: [(0, l.Y)(n.default, {
                            name: a,
                            className: s.gameFactList__factsList__itemIcon,
                            recolor: !0,
                            decorative: !0
                        }), (0, l.Y)("span", {
                            className: s.gameFactList__factsList__itemTitle__text,
                            children: t
                        })]
                    }), (0, l.Y)("div", {
                        className: s.gameFactList__factsList__itemContent,
                        children: e
                    })]
                })
            }

            function u({
                gameData: t
            }) {
                const e = (0, i.d4)(c.Gd),
                    a = (0, i.d4)(o.K),
                    {
                        locale: n,
                        iso_lang: u
                    } = e,
                    d = [],
                    f = t.rating ? t.rating.up_count + t.rating.down_count : null;
                return t.desktop_available && d.push(a.desktop), t.mobile_available && d.push(a.phone_and_tablet), (0, l.FD)("ul", {
                    className: s.gameFactList__factsList,
                    children: [t.controls && (0, l.Y)(m, {
                        title: a.controls,
                        content: t.controls,
                        iconName: "ui-icons-controls"
                    }), d.length > 0 && (0, l.Y)(m, {
                        title: a.supported_devices,
                        content: d.join(", "),
                        iconName: "ui-icons-device-scanning"
                    }), t.difficulty && (0, l.Y)(m, {
                        title: a.difficulty,
                        content: t.difficulty,
                        iconName: "ui-icons-dashboard"
                    }), t.developer && (0, l.Y)(m, {
                        title: a.developer,
                        content: t.developer,
                        iconName: "ui-icons-code"
                    }), t ? .genre ? .title && (0, l.Y)(m, {
                        title: a.genre,
                        content: t.genre.title,
                        iconName: "ui-icons-splice"
                    }), t.release_date && (0, l.Y)(m, {
                        title: a.release_date,
                        content: (0, r.zq)(t.release_date, n || u, {
                            year: "numeric",
                            month: "long"
                        }),
                        iconName: "ui-icons-calendar"
                    }), t.version_last_updated && (0, l.Y)(m, {
                        title: a.updated_date,
                        content: (0, r.zq)(t.version_last_updated, n || u, {
                            year: "numeric",
                            month: "long"
                        }),
                        iconName: "ui-icons-calendar"
                    }), null !== f && (0, l.Y)(m, {
                        title: a.rating,
                        content: (0, l.FD)(l.FK, {
                            children: [t.rating.rating.toFixed(1), ` (${(0,_.Z)(f)} ${a.votes})`]
                        }),
                        iconName: "ui-icons-star"
                    }), t.privacy_policy_url && (0, l.Y)(m, {
                        title: a.nav_privacy_policy,
                        content: (0, l.Y)("a", {
                            className: s.gameFactList__factsList__itemContent__link,
                            href: t.privacy_policy_url,
                            target: "_blank",
                            rel: "noopener nofollow",
                            referrerPolicy: "origin",
                            children: t.privacy_policy_url
                        }),
                        iconName: "ui-icons-document"
                    })]
                })
            }
        },
        23474(t, e, a) {
            a.d(e, {
                S: () => o,
                zq: () => c,
                aI: () => n
            });
            const i = "en-US";

            function n(t) {
                if (!t) return "";
                const e = t.getFullYear(),
                    a = t.getMonth() + 1,
                    i = t.getDate();
                return `${e}-${a<10?"0":""}${a}-${i<10?"0":""}${i}`
            }

            function o(t, e) {
                const a = function() {
                        const t = navigator.language.replace(/_/g, "-");
                        try {
                            return Intl.getCanonicalLocales(t)[0] || i
                        } catch {
                            return i
                        }
                    }(),
                    n = new Intl.RelativeTimeFormat(a, {
                        numeric: "auto"
                    }),
                    o = new Date,
                    c = new Date(t),
                    r = new Date(o.getFullYear(), o.getMonth(), o.getDate()),
                    _ = new Date(c.getFullYear(), c.getMonth(), c.getDate()),
                    s = Math.round((r.getTime() - _.getTime()) / 864e5);
                return 0 === s ? e ? .time_today || n.format(0, "day") : 1 === s ? e ? .time_yesterday || n.format(-1, "day") : s < 7 ? e ? .time_this_week || n.format(0, "week") : s < 14 ? e ? .time_last_week || n.format(-1, "week") : s < 30 ? e ? .time_this_month || n.format(0, "month") : s < 60 ? e ? .time_last_month || n.format(-1, "month") : s < 365 ? e ? .time_this_year || n.format(0, "year") : s < 730 ? e ? .time_last_year || n.format(-1, "year") : new Intl.DateTimeFormat(a, {
                    dateStyle: "medium"
                }).format(c)
            }

            function c(t, e, a = {
                year: "numeric",
                month: "short"
            }) {
                const i = new Date(t),
                    n = e.replace("_", "-") || void 0;
                return new Intl.DateTimeFormat(n, a).format(i)
            }
        },
        82552(t, e, a) {
            a.d(e, {
                Z: () => n
            });
            const i = "undefined" != typeof Intl ? new Intl.NumberFormat : {
                format: t => t
            };

            function n(t) {
                return i.format(t)
            }
        },
        46635(t, e, a) {
            a.r(e), a.d(e, {
                gameFactList__factsList: () => i,
                gameFactList__factsList__item: () => n,
                gameFactList__factsList__itemContent: () => o,
                gameFactList__factsList__itemContent__link: () => c,
                gameFactList__factsList__itemIcon: () => r,
                gameFactList__factsList__itemTitle: () => _,
                gameFactList__factsList__itemTitle__text: () => s
            });
            var i = "ls7Q57iVJt400u5jthXr",
                n = "S6UxDoNzkX4ZuUx7qmPq",
                o = "OnH32zdME8mMTJvgJkfm",
                c = "MaDEOJvZicLUr7HumBf8",
                r = "ZfPBC5hXIpQLefXgh1Ap",
                _ = "_y5H6xC7p0G7OeZu54TP",
                s = "XJ8BFNhAzfgqNHfNKsJp"
        }
    }
]);
//# sourceMappingURL=client~app-components-GameFactList~119c705e98d0e2a657e6.js.map