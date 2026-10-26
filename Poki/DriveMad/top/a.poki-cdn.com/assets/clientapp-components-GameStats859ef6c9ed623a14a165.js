"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3346, 3464, 8253], {
        95197(e, a, o) {
            o.d(a, {
                K0: () => N,
                ro: () => h
            });
            var n = {};
            o.r(n), o.d(n, {
                iconButton: () => f,
                iconButton__circle: () => _,
                iconButton__label: () => b,
                iconButton_default: () => v,
                iconButton_inverted: () => w,
                iconButton_lg: () => y,
                iconButton_md: () => k,
                iconButton_sm: () => D
            });
            var r = o(58738),
                t = {
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
                style: n,
                ...s
            }) {
                const d = `https://a.poki-cdn.com/icons/${a?"ui-masks":"ui"}/${function(e){return i.has(e)?`ui-icons-${e}`:l.has(e)?`brand-icons-${e}`:c.has(e)?`content-icons-${e}`:e}(e)}.svg`,
                    m = {
                        "--icon-src": `url('${d}')`,
                        ...n
                    },
                    u = [t.icon, a && t.recolor, o].filter(Boolean).join(" ");
                return (0, r.Y)("span", {
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
            const g = {
                yellow: "var(--color-background-rainbow-yellow)",
                pink: "var(--color-background-rainbow-pink)",
                green: "var(--color-background-rainbow-green)",
                purple: "var(--color-background-rainbow-purple)"
            };

            function h({
                label: e,
                value: a,
                icon: o,
                color: n,
                direction: t = "horizontal"
            }) {
                const i = "horizontal" === t;
                return (0, r.FD)("div", {
                    className: (0, d.A)("Dz72S9PfF0_5L_MGOyTU", {
                        [p]: i
                    }),
                    role: "group",
                    "aria-label": `${e}: ${a}`,
                    children: [(0, r.Y)("span", {
                        className: "eN50Kn7d5ULSTTl3VsMC",
                        style: {
                            backgroundColor: g[n]
                        },
                        children: (0, r.Y)(s, {
                            name: o,
                            recolor: !0,
                            "aria-hidden": !0
                        })
                    }), (0, r.FD)("div", {
                        className: (0, d.A)("UlAhp1u_QFgsszvRThTA", {
                            [m]: i
                        }),
                        "aria-hidden": !0,
                        children: [(0, r.Y)("span", {
                            className: "Ds8tJVxPq13N1T7g7P5q",
                            children: e
                        }), (0, r.Y)("span", {
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
                label: t,
                className: i,
                disabled: l = !1,
                ...c
            }) {
                return (0, r.FD)("button", {
                    type: "button",
                    className: (0, d.A)(f, n[`iconButton_${a}`], n[`iconButton_${o}`], i),
                    disabled: l,
                    ...c,
                    children: [(0, r.Y)("span", {
                        className: _,
                        children: (0, r.Y)(s, {
                            name: e,
                            recolor: !0,
                            "aria-hidden": !0
                        })
                    }), t && (0, r.Y)("span", {
                        className: b,
                        children: t
                    })]
                })
            }
        },
        19380(e, a, o) {
            o.r(a), o.d(a, {
                default: () => p
            });
            var n = o(10061),
                r = o(74606),
                t = o(37654),
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
                } = (0, n.useContext)(c.F), p = o ? "vertical" : "horizontal", g = (0, r.d4)(l.Gd), h = (0, r.d4)(i.K), {
                    locale: f,
                    iso_lang: _
                } = g, {
                    data: b,
                    isSuccess: v
                } = (0, t.vY)({
                    p4dGameID: e.pokifordevs_game_id
                });
                return (0, u.FD)("ul", {
                    className: m.gameStats,
                    children: [e.rating && (0, u.Y)("li", {
                        className: m.gameStats__item,
                        children: (0, u.Y)(s.ro, {
                            label: h.rating,
                            icon: "star-filled",
                            value: e.rating.rating.toFixed(1),
                            color: "yellow",
                            direction: p
                        })
                    }), a && (0, u.Y)("li", {
                        className: m.gameStats__item,
                        children: (0, u.Y)(s.ro, {
                            label: h.trending,
                            icon: "fire",
                            value: `#${a}`,
                            color: "pink",
                            direction: p
                        })
                    }), v && b ? .users && (0, u.Y)("li", {
                        className: m.gameStats__item,
                        children: (0, u.Y)(s.ro, {
                            label: h.live,
                            icon: "users",
                            value: `${b.users.toLocaleString()}+`,
                            color: "green",
                            direction: p
                        })
                    }), e.version_last_updated && (0, u.Y)("li", {
                        className: m.gameStats__item,
                        children: (0, u.Y)(s.ro, {
                            label: h.updated,
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
                S: () => t,
                zq: () => i,
                aI: () => r
            });
            const n = "en-US";

            function r(e) {
                if (!e) return "";
                const a = e.getFullYear(),
                    o = e.getMonth() + 1,
                    n = e.getDate();
                return `${a}-${o<10?"0":""}${o}-${n<10?"0":""}${n}`
            }

            function t(e, a) {
                const o = function() {
                        const e = navigator.language.replace(/_/g, "-");
                        try {
                            return Intl.getCanonicalLocales(e)[0] || n
                        } catch {
                            return n
                        }
                    }(),
                    r = new Intl.RelativeTimeFormat(o, {
                        numeric: "auto"
                    }),
                    t = new Date,
                    i = new Date(e),
                    l = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
                    c = new Date(i.getFullYear(), i.getMonth(), i.getDate()),
                    s = Math.round((l.getTime() - c.getTime()) / 864e5);
                return 0 === s ? a ? .time_today || r.format(0, "day") : 1 === s ? a ? .time_yesterday || r.format(-1, "day") : s < 7 ? a ? .time_this_week || r.format(0, "week") : s < 14 ? a ? .time_last_week || r.format(-1, "week") : s < 30 ? a ? .time_this_month || r.format(0, "month") : s < 60 ? a ? .time_last_month || r.format(-1, "month") : s < 365 ? a ? .time_this_year || r.format(0, "year") : s < 730 ? a ? .time_last_year || r.format(-1, "year") : new Intl.DateTimeFormat(o, {
                    dateStyle: "medium"
                }).format(i)
            }

            function i(e, a, o = {
                year: "numeric",
                month: "short"
            }) {
                const n = new Date(e),
                    r = a.replace("_", "-") || void 0;
                return new Intl.DateTimeFormat(r, o).format(n)
            }
        },
        89882(e, a, o) {
            o.r(a), o.d(a, {
                gameStats: () => n,
                gameStats__item: () => r
            });
            var n = "Z7DT_mB2R6VWvdLiCfMW",
                r = "kGgaXgO0yXnelvq8Y3Hw"
        }
    }
]);
//# sourceMappingURL=client~app-components-GameStats~859ef6c9ed623a14a165.js.map