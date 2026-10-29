"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3346, 3464, 8253], {
        95197(e, a, o) {
            o.d(a, {
                K0: () => N,
                ro: () => g
            });
            var r = {};
            o.r(r), o.d(r, {
                iconButton: () => f,
                iconButton__circle: () => _,
                iconButton__label: () => b,
                iconButton_default: () => v,
                iconButton_inverted: () => w,
                iconButton_lg: () => y,
                iconButton_md: () => k,
                iconButton_sm: () => D
            });
            var t = o(58738),
                n = {
                    icon: "Icon-module_icon__szG-X",
                    recolor: "Icon-module_recolor__cbzKk"
                };
            const i = new Set(["angry", "announcement", "archive", "arrow-d-l", "arrow-down", "arrow-l-u", "arrow-left", "arrow-r-d", "arrow-right", "arrow-u-r", "arrow-up", "bell-empty", "bell-filled", "best-practices", "big-smile", "book", "bookmark", "bottom", "bug", "build", "calendar", "camera", "check", "checklist", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "clipboard", "clock", "close", "code", "coin", "color", "comment", "complaining", "controls", "cookie", "copy", "core", "dashboard", "desktop-screen", "device-scanning", "diamond", "division", "document", "download", "editable", "eject", "eject-filled", "enter", "euro-symbol", "exclamation", "exit-link", "feather", "feedback", "filter", "fingerprint", "fire", "first", "flag", "floppy-disk", "formula", "fullscreen", "fullscreen-exit", "funnel", "gallery", "game", "gear", "graph", "grid", "hammer", "happy", "hastag", "health", "heart-empty", "heart-eyes", "heart-filled", "hidden", "home", "incognito", "indifferent", "info", "invoice", "key", "labs", "laptop", "last", "light-bulb", "lightning", "line-graph", "link", "live", "location", "lock", "login", "logout", "mail", "menu", "minus", "mobile-check", "mobile-phone", "monetization", "moon", "no-mouth", "opinionated", "overflow", "pause", "pencil", "phone", "play", "play-filled", "playground-integration", "plus", "podium", "poo", "preview", "previous", "previous-filled", "privacy-home", "question", "record", "record-filled", "refresh", "replay", "resume", "rocket", "rotate-device", "sad-face", "search", "share", "shuffle", "skip", "skip-filled", "sliders", "slightly-frowning-face", "splice", "star", "star-filled", "stop", "stop-filled", "sun", "surprised", "table", "technical-stability", "temple", "thumbs-down", "thumbs-up", "top", "trash", "trophy", "unarchive", "unavailable-on-mobile", "unlocked", "upload", "user", "users", "vendor", "verified", "world", "wrench"]),
                l = new Set(["apple", "google", "microsoft", "roblox"]),
                c = new Set(["accounts", "ads", "among-us", "analytics", "ball-rugby", "balloon", "brawl-stars", "bread", "cake", "chat", "chess", "clock", "cookie", "creeper", "culture", "dev-doc", "dev-key", "dev-window", "devices", "download-app", "drinks", "easy-access", "flag", "floppy-disk", "game-controller", "game-puzzle", "gameboy", "gear", "globe", "info", "ipod", "jobs", "laugh", "launch-pad", "localization", "lunch", "magic", "meh", "microscope", "monetize", "pacman", "pacman-ghost", "pencil", "phone", "pin", "player-device-report", "pokemon", "poo", "privacy", "roadmap", "scale", "scroll", "spider", "spyglass", "story", "support", "tamagotchi", "thumbnail", "warning", "web-game-engine", "wii", "wink", "wow"]);

            function s({
                name: e,
                recolor: a = !1,
                className: o,
                style: r,
                ...s
            }) {
                const d = `https://a.poki-cdn.com/icons/${a?"ui-masks":"ui"}/${function(e){return i.has(e)?`ui-icons-${e}`:l.has(e)?`brand-icons-${e}`:c.has(e)?`content-icons-${e}`:e}(e)}.svg`,
                    m = {
                        "--icon-src": `url('${d}')`,
                        ...r
                    },
                    u = [n.icon, a && n.recolor, o].filter(Boolean).join(" ");
                return (0, t.Y)("span", {
                    role: "img",
                    "aria-label": e,
                    ...s,
                    className: u,
                    style: m
                })
            }
            var d = o(13526),
                m = "Pl48kaej4Nf0vQr5gfmm",
                u = "AfXu33Y2DBdtMld48ghP",
                p = "cqtXzRSYKJZhHCXtRXdV";
            const h = {
                yellow: "var(--color-surface-rainbow-yellow)",
                pink: "var(--color-surface-rainbow-pink)",
                green: "var(--color-surface-rainbow-green)",
                purple: "var(--color-surface-rainbow-purple)"
            };

            function g({
                label: e,
                value: a,
                icon: o,
                color: r,
                direction: n = "horizontal"
            }) {
                const i = "horizontal" === n;
                return (0, t.FD)("div", {
                    className: (0, d.A)("Dz72S9PfF0_5L_MGOyTU", {
                        [p]: i
                    }),
                    role: "group",
                    "aria-label": `${e}: ${a}`,
                    children: [(0, t.Y)("span", {
                        className: "eN50Kn7d5ULSTTl3VsMC",
                        style: {
                            backgroundColor: h[r]
                        },
                        children: (0, t.Y)(s, {
                            name: o,
                            recolor: !0,
                            "aria-hidden": !0
                        })
                    }), (0, t.FD)("div", {
                        className: (0, d.A)("UlAhp1u_QFgsszvRThTA", {
                            [m]: i
                        }),
                        "aria-hidden": !0,
                        children: [(0, t.Y)("span", {
                            className: "Ds8tJVxPq13N1T7g7P5q",
                            children: e
                        }), (0, t.Y)("span", {
                            className: (0, d.A)("RBCBWW0co1LgyBq8rkJa", {
                                [u]: i
                            }),
                            children: a
                        })]
                    })]
                })
            }
            o(10061);
            var f = "Z95uHxw7hDQevQWrJSXg",
                _ = "NOTPj_njMR8KpMHObhRj",
                b = "JxvFsBKrd1ia3WEKl8_x",
                v = "WY0B2KqpqahsLsVC3pCi",
                w = "libtKybo5vzC6PwC8WOQ",
                y = "gD6ZzANfhG2zWDSFZV_A",
                k = "tb3wW0n3chRrjHWaCNoQ",
                D = "Hsc2sibvUMBKa64KZzEd";

            function N({
                icon: e,
                variant: a = "default",
                size: o = "md",
                label: n,
                className: i,
                disabled: l = !1,
                ...c
            }) {
                return (0, t.FD)("button", {
                    type: "button",
                    className: (0, d.A)(f, r[`iconButton_${a}`], r[`iconButton_${o}`], i),
                    disabled: l,
                    ...c,
                    children: [(0, t.Y)("span", {
                        className: _,
                        children: (0, t.Y)(s, {
                            name: e,
                            recolor: !0,
                            "aria-hidden": !0
                        })
                    }), n && (0, t.Y)("span", {
                        className: b,
                        children: n
                    })]
                })
            }
        },
        19380(e, a, o) {
            o.r(a), o.d(a, {
                default: () => p
            });
            var r = o(10061),
                t = o(74606),
                n = o(37654),
                i = o(40700),
                l = o(56963),
                c = o(91642),
                s = o(95197),
                d = o(23474),
                m = o(89882),
                u = o(58738);

            function p({
                gameData: e
            }) {
                const {
                    trending_rank: a
                } = e, {
                    isMobile: o
                } = (0, r.useContext)(c.F), p = o ? "vertical" : "horizontal", h = (0, t.d4)(l.Gd), g = (0, t.d4)(i.K), {
                    locale: f,
                    iso_lang: _
                } = h, {
                    data: b,
                    isSuccess: v
                } = (0, n.vY)({
                    p4dGameID: e.pokifordevs_game_id
                });
                return (0, u.FD)("ul", {
                    className: m.gameStats,
                    children: [e.rating && (0, u.Y)("li", {
                        className: m.gameStats__item,
                        children: (0, u.Y)(s.ro, {
                            label: g.rating,
                            icon: "star-filled",
                            value: e.rating.rating.toFixed(1),
                            color: "yellow",
                            direction: p
                        })
                    }), a && (0, u.Y)("li", {
                        className: m.gameStats__item,
                        children: (0, u.Y)(s.ro, {
                            label: g.trending,
                            icon: "fire",
                            value: `#${a}`,
                            color: "pink",
                            direction: p
                        })
                    }), v && b ? .users && (0, u.Y)("li", {
                        className: m.gameStats__item,
                        children: (0, u.Y)(s.ro, {
                            label: g.live,
                            icon: "users",
                            value: `${b.users.toLocaleString()}+`,
                            color: "green",
                            direction: p
                        })
                    }), e.version_last_updated && (0, u.Y)("li", {
                        className: m.gameStats__item,
                        children: (0, u.Y)(s.ro, {
                            label: g.updated,
                            icon: "lightning",
                            value: (0, d.zq)(e.version_last_updated, f || _),
                            color: "purple",
                            direction: p
                        })
                    })]
                })
            }
        },
        23474(e, a, o) {
            o.d(a, {
                S: () => n,
                zq: () => i,
                aI: () => t
            });
            const r = "en-US";

            function t(e) {
                if (!e) return "";
                const a = e.getFullYear(),
                    o = e.getMonth() + 1,
                    r = e.getDate();
                return `${a}-${o<10?"0":""}${o}-${r<10?"0":""}${r}`
            }

            function n(e, a) {
                const o = function() {
                        const e = navigator.language.replace(/_/g, "-");
                        try {
                            return Intl.getCanonicalLocales(e)[0] || r
                        } catch {
                            return r
                        }
                    }(),
                    t = new Intl.RelativeTimeFormat(o, {
                        numeric: "auto"
                    }),
                    n = new Date,
                    i = new Date(e),
                    l = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
                    c = new Date(i.getFullYear(), i.getMonth(), i.getDate()),
                    s = Math.round((l.getTime() - c.getTime()) / 864e5);
                return 0 === s ? a ? .time_today || t.format(0, "day") : 1 === s ? a ? .time_yesterday || t.format(-1, "day") : s < 7 ? a ? .time_this_week || t.format(0, "week") : s < 14 ? a ? .time_last_week || t.format(-1, "week") : s < 30 ? a ? .time_this_month || t.format(0, "month") : s < 60 ? a ? .time_last_month || t.format(-1, "month") : s < 365 ? a ? .time_this_year || t.format(0, "year") : s < 730 ? a ? .time_last_year || t.format(-1, "year") : new Intl.DateTimeFormat(o, {
                    dateStyle: "medium"
                }).format(i)
            }

            function i(e, a, o = {
                year: "numeric",
                month: "short"
            }) {
                const r = new Date(e),
                    t = a.replace("_", "-") || void 0;
                return new Intl.DateTimeFormat(t, o).format(r)
            }
        },
        89882(e, a, o) {
            o.r(a), o.d(a, {
                gameStats: () => r,
                gameStats__item: () => t
            });
            var r = "Z7DT_mB2R6VWvdLiCfMW",
                t = "kGgaXgO0yXnelvq8Y3Hw"
        }
    }
]);
//# sourceMappingURL=client~app-components-GameStats~a1d728f1c449a7e1b43f.js.map