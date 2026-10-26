"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7419, 8984], {
        50273(e, r, a) {
            a.r(r), a.d(r, {
                default: () => b
            });
            var c = a(13526),
                s = a(30559),
                d = a(48120),
                _ = a(52309),
                n = a(58738);

            function b({
                breadcrumbs: e,
                className: r
            }) {
                const {
                    length: a
                } = e;
                return 0 === a ? null : (0, n.Y)("nav", {
                    className: (0, c.A)(_.breadcrumbs, r),
                    children: (0, n.Y)("div", {
                        className: _.breadcrumbs__container,
                        children: e.map(({
                            label: e,
                            path: r
                        }, a) => (0, n.FD)("div", {
                            className: _.breadcrumbs__item,
                            children: [a > 0 && (0, n.Y)(d.default, {
                                name: "ui-icons-chevron-down",
                                className: _.breadcrumbs__chevron,
                                recolor: !0,
                                decorative: !0
                            }), (0, n.Y)(s.default, {
                                to: r,
                                children: e
                            })]
                        }, r || e))
                    })
                })
            }
        },
        52309(e, r, a) {
            a.r(r), a.d(r, {
                breadcrumbs: () => c,
                breadcrumbs__chevron: () => s,
                breadcrumbs__container: () => d,
                breadcrumbs__item: () => _
            });
            var c = "kd9Is9cTBZ_vuww2pWiX",
                s = "FzCrgTBdL_UGZ6dZa4R7",
                d = "wpZ3GoxLQVMZwH0a4VbJ",
                _ = "ywoqqyUKAOhwkYT8pgAd"
        }
    }
]);
//# sourceMappingURL=client~app-components-Breadcrumbs~a39dbca676fcc662d6fa.js.map