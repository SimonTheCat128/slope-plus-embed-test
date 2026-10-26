"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1299, 9936], {
        149(e, s, a) {
            a.r(s), a.d(s, {
                default: () => n
            });
            var r = a(13526),
                o = a(52405),
                l = a(59565),
                t = a(58738);

            function n({
                className: e,
                urls: s
            }) {
                const a = [];
                return s.apple && a.push({
                    href: s.apple,
                    name: "App Store",
                    src: "https://a.poki-cdn.com/app-stores/apple.svg"
                }), s.googleplay && a.push({
                    href: s.googleplay,
                    name: "Google Play",
                    src: "https://a.poki-cdn.com/app-stores/google.svg"
                }), s.steam && a.push({
                    href: s.steam,
                    name: "Steam",
                    src: "https://a.poki-cdn.com/app-stores/steam.png"
                }), a.length ? (0, t.Y)("ul", {
                    className: (0, r.A)(l.storeLinks__list, e),
                    children: a.map(({
                        href: e,
                        src: s,
                        name: a
                    }) => (0, t.Y)("li", {
                        className: l.storeLinks__badge,
                        children: (0, t.Y)("a", {
                            href: e,
                            onClick: () => {
                                return e = a, void(0, o.F)({
                                    category: "game",
                                    action: "appstoreClick",
                                    label: e,
                                    options: {
                                        interaction: !0
                                    }
                                });
                                var e
                            },
                            target: "_blank",
                            rel: "noopener nofollow",
                            referrerPolicy: "origin",
                            children: (0, t.Y)("img", {
                                src: s,
                                alt: `${a} logo`
                            })
                        })
                    }, a))
                }) : null
            }
        },
        59565(e, s, a) {
            a.r(s), a.d(s, {
                storeLinks__badge: () => r,
                storeLinks__list: () => o
            });
            var r = "zTUfgc5RP7UAgQI8J_wa",
                o = "hivVkI4L0qFkg_HnueXg"
        }
    }
]);
//# sourceMappingURL=client~app-components-StoreLinks~7e36f493c205848020d7.js.map