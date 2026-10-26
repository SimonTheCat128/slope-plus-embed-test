"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [182, 1223], {
        61046(e, t, a) {
            a.r(t), a.d(t, {
                default: () => o
            });
            var l = a(13526),
                n = a(10061),
                i = a(74606),
                s = a(48120),
                _ = a(40700),
                c = a(49170),
                m = a(47320),
                r = a(58738);

            function o({
                contentDetails: e,
                className: t
            }) {
                const a = (0, i.d4)(_.K),
                    {
                        imageUrl: o,
                        title: C,
                        developer: d,
                        playerCount: g
                    } = e,
                    [u, T] = (0, n.useState)(!1),
                    [v, D] = (0, n.useState)(g);
                (0, n.useEffect)(() => {
                    !u && g && D(g)
                }, [u, g]), (0, n.useEffect)(() => {
                    if (!g) return;
                    let e;
                    const t = setTimeout(() => {
                        T(!0), e = setInterval(() => {
                            T(e => !e)
                        }, 1e4)
                    }, 1e4);
                    return () => {
                        clearTimeout(t), void 0 !== e && clearInterval(e)
                    }
                }, [!!g]);
                const {
                    src1x: L,
                    src2x: N
                } = (0, c.tS)({
                    imageUrl: o,
                    width: 40
                }), f = !!L && !!N, h = f ? L : void 0, p = f ? `${L} 1x, ${N} 2x` : void 0;
                return (0, r.FD)("div", {
                    className: (0, l.A)(m.gameContentTile, t),
                    children: [h ? (0, r.Y)("img", {
                        className: m.gameContentTile__img,
                        alt: C,
                        src: h,
                        srcSet: p,
                        width: 40,
                        height: 40
                    }) : (0, r.Y)("div", {
                        className: m.gameContentTile__img
                    }), (0, r.FD)("div", {
                        className: m.gameContentTile__details,
                        children: [(0, r.Y)("div", {
                            className: m.gameContentTile__title,
                            children: C
                        }), u && v ? (0, r.FD)("span", {
                            className: m.gameContentTile__subtext,
                            children: [(0, r.Y)(s.default, {
                                name: "ui-icons-users",
                                className: m.gameContentTile__playerCountIcon,
                                ariaLabel: a.live
                            }), v.toLocaleString()]
                        }) : d && (0, r.FD)("span", {
                            className: m.gameContentTile__subtext,
                            children: [a.by, " ", d]
                        })]
                    })]
                })
            }
        },
        47320(e, t, a) {
            a.r(t), a.d(t, {
                gameContentTile: () => l,
                gameContentTile__details: () => n,
                gameContentTile__img: () => i,
                gameContentTile__playerCountIcon: () => s,
                gameContentTile__subtext: () => _,
                gameContentTile__title: () => c
            });
            var l = "BISYNVRlqGl3LXHhG8OQ",
                n = "CHVUtwTeELaQvB5XjIXn",
                i = "R7VHMHKzLDc3D3OfQ4pA",
                s = "Y0wrZCtcXPmPpipXiLT1",
                _ = "eIi_lqHFQeCbWfOlWwA8",
                c = "hSBT7NJmqCF0UOqGFDLA"
        }
    }
]);
//# sourceMappingURL=client~app-components-GameContentTile~0f81526a0bc3fddee9a5.js.map