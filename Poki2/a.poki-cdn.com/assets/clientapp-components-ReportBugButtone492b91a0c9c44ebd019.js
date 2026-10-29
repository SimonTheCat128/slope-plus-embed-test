"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9018], {
        70371(e, s, t) {
            t.r(s), t.d(s, {
                default: () => h
            });
            var r = t(21681),
                n = t(74606),
                o = t(40700),
                i = t(56396),
                c = t(58738);
            const u = (0, r.Ay)({
                resolved: {},
                chunkName: () => "app-components-GameBarButton-tsx",
                isReady(e) {
                    const s = this.resolve(e);
                    return !0 === this.resolved[s] && !!t.m[s]
                },
                importAsync: () => t.e(9935).then(t.bind(t, 96570)),
                requireAsync(e) {
                    const s = this.resolve(e);
                    return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
                },
                requireSync(e) {
                    const s = this.resolve(e);
                    return t(s)
                },
                resolve: () => 96570
            });

            function h() {
                const e = (0, n.wA)(),
                    s = (0, n.d4)(i.x0),
                    t = (0, n.d4)(o.K);
                return (0, c.Y)(u, {
                    id: "report-bug-button",
                    iconName: "ui-icons-flag",
                    isHighlighted: s,
                    onClick: async () => {
                        s || e((0, i.fy)())
                    },
                    hoverText: t.report_bug
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-ReportBugButton~e492b91a0c9c44ebd019.js.map