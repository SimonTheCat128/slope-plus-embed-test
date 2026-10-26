"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9535], {
        73998(e, t, n) {
            n.r(t), n.d(t, {
                default: () => h
            });
            var o = n(21681),
                i = n(10061),
                s = n(74606),
                r = n(40700),
                c = n(84966),
                u = n(56938),
                d = n(58738);
            const a = (0, o.Ay)({
                resolved: {},
                chunkName: () => "app-components-GameBarButton-tsx",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: () => n.e(9935).then(n.bind(n, 96570)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return n(t)
                },
                resolve: () => 96570
            });

            function h({
                gameId: e,
                rating: t
            }) {
                const n = (0, s.wA)(),
                    o = (0, s.d4)(r.K),
                    h = (0, s.d4)(t => (0, c.p5)(t, e)),
                    l = (0, s.d4)(t => (0, c.dY)(t, e)),
                    [_, m] = (0, i.useState)(0),
                    [v, p] = (0, i.useState)(!1),
                    [f, y] = (0, i.useState)(!1);
                if ((0, i.useEffect)(() => {
                        0 === h ? (p(!1), y(!1)) : 1 === h ? (p(!0), y(!1)) : (p(!1), y(!0))
                    }, [h]), !t ? .rating && !l) return null;
                const g = (t, o) => {
                        (0, u.r)(), Date.now() < _ || (h === t && (t = 0), n((0, c.Vy)({
                            gameId: e,
                            direction: t,
                            source: o,
                            playerFitPlayID: l
                        })), m(Date.now() + 500))
                    },
                    A = e => e ? e > 1e6 ? `${(e/1e6).toFixed(1)}M` : e > 1e3 ? `${(e/1e3).toFixed(1)}K` : e.toString() : "0",
                    D = t ? .up_count ? A(t.up_count + (v ? 1 : 0)) : "",
                    w = t ? .down_count ? A(t.down_count + (f ? 1 : 0)) : "";
                return (0, d.FD)(d.FK, {
                    children: [(0, d.Y)(a, {
                        id: "vote-up",
                        iconName: "ui-icons-thumbs-up",
                        text: D,
                        hoverText: v ? o.remove_vote : o.i_like_it,
                        onClick: () => g(1, "thumbsUp"),
                        isHighlighted: v
                    }), (0, d.Y)(a, {
                        id: "vote-down",
                        iconName: "ui-icons-thumbs-down",
                        text: w,
                        hoverText: f ? o.remove_vote : o.i_dont_like_it,
                        onClick: () => g(-1, "thumbsDown"),
                        isHighlighted: f,
                        inverted: !0
                    })]
                })
            }
        },
        56938(e, t, n) {
            function o() {
                const e = document.getElementById("game-element");
                try {
                    e ? .contentWindow ? .frames[0] ? .focus()
                } catch {
                    try {
                        e ? .contentWindow ? .focus()
                    } catch {
                        e ? .focus()
                    }
                }
            }
            n.d(t, {
                r: () => o
            })
        }
    }
]);
//# sourceMappingURL=client~app-components-Voting~e9d1630aed9ee9f13306.js.map