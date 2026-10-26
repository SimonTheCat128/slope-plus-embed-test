"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [574, 9935], {
        96570(e, t, a) {
            a.r(t), a.d(t, {
                default: () => s
            });
            var n = a(21681),
                r = a(13526),
                o = a(10061),
                i = a(73664),
                _ = a(58738);
            const l = (0, n.Ay)({
                resolved: {},
                chunkName: () => "app-components-svg-SVGIconCDN-tsx",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!a.m[t]
                },
                importAsync: () => Promise.resolve().then(a.bind(a, 48120)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return a(t)
                },
                resolve: () => 48120
            });

            function s({
                id: e,
                iconName: t,
                text: a = "",
                hoverText: n = "",
                isHighlighted: s = !1,
                inverted: u = !1,
                nudge: B = !1,
                onClick: m,
                preventFocus: d = !1
            }) {
                const [c, g] = (0, o.useState)(!1), [v, h] = (0, o.useState)(!0), [D, A] = (0, o.useState)(0), b = d ? e => e.preventDefault() : void 0;
                return (0, _.FD)("button", {
                    className: (0, r.A)(i.gameBarButton, {
                        [i.gameBarButton_isHighlighted]: s,
                        [i.gameBarButton_inverted]: u,
                        [i.gameBarButton_interacted]: c,
                        [i.gameBarButton_pointerLeft]: v,
                        [i.gameBarButton_nudge]: B
                    }),
                    onClick: () => {
                        D + 500 > Date.now() || (A(Date.now()), m())
                    },
                    onPointerDown: () => {
                        g(!0), h(!1), d && m()
                    },
                    onPointerLeave: () => {
                        h(!0)
                    },
                    onMouseDown: b,
                    onTouchStart: b,
                    type: "button",
                    id: e,
                    children: [(0, _.Y)("div", {
                        className: i.gameBarButton__innerContainer,
                        children: (0, _.Y)(l, {
                            className: i.gameBarButton__icon,
                            name: t,
                            recolor: !0,
                            decorative: !0
                        })
                    }), (0, _.FD)("div", {
                        className: i.gameBarButton__labelContainer,
                        children: [(0, _.Y)("span", {
                            className: (0, r.A)(i.gameBarButton__label, i.gameBarButton__label_default),
                            "data-test": "default-label",
                            children: a
                        }), (0, _.Y)("span", {
                            className: (0, r.A)(i.gameBarButton__label, i.gameBarButton__label_hover),
                            children: n
                        })]
                    })]
                })
            }
        },
        73664(e, t, a) {
            a.r(t), a.d(t, {
                gameBarButton: () => n,
                gameBarButtonActiveIconKeyframes: () => r,
                gameBarButtonActiveInnerContainerKeyframes: () => o,
                gameBarButton__icon: () => i,
                gameBarButton__innerContainer: () => _,
                gameBarButton__label: () => l,
                gameBarButton__labelContainer: () => s,
                gameBarButton__label_default: () => u,
                gameBarButton__label_hover: () => B,
                gameBarButton_interacted: () => m,
                gameBarButton_inverted: () => d,
                gameBarButton_isHighlighted: () => c,
                gameBarButton_nudge: () => g,
                gameBarButton_pointerLeft: () => v
            });
            var n = "HPn_GzeLxs8_4nNebuj1",
                r = "P3t9z_dlMzH8JdQXYgb6",
                o = "iCKaV5q9eF5vB3DOHhTh",
                i = "AUcJqk5uLaoXL0jqRGuH",
                _ = "tqh57qBcKxMV9EdZQoAb",
                l = "L6WSODmebiIqJJOEi46E",
                s = "aAJE6r6D5rwwQuTmZqYG",
                u = "Vlw13G6cUIC6W9LiGC_X",
                B = "tz2DEu5qBC9Yd6hJGjoW",
                m = "mDTrvHhilj2xlIvo_kXA",
                d = "tkJkfkWXlmN_OvNzlLDg",
                c = "Vw1CuEQNiEwOdx9uRdMC",
                g = "wrjmV7BvZb_KjOCenpxv",
                v = "phlaiC_iad_lookW5__d"
        }
    }
]);
//# sourceMappingURL=client~app-components-GameBarButton~82b1f31f474bf978f25e.js.map