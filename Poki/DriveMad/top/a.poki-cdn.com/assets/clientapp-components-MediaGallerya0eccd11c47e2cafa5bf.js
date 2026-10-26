"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4832, 6995], {
        91405(e, t, r) {
            r.r(t), r.d(t, {
                default: () => N
            });
            var l = r(13526),
                a = r(10061),
                n = r(74606),
                i = r(48120),
                o = r(40700),
                c = r(56963),
                s = r(52405),
                d = r(49170),
                u = r(48674),
                m = r(43085),
                _ = r(58738);
            const h = 204;

            function p(e) {
                return e.thumbnailUrl || e.url
            }

            function y(e, t) {
                const r = Math.max(1, Math.round(t * ((e.width || 16) / (e.height || 9))));
                return (0, d.pN)({
                    width: r,
                    height: t,
                    imageUrl: p(e)
                })
            }

            function f(e, t) {
                return `${y(e,t)} 1x, ${y(e,2*t)} 2x`
            }
            const g = new WeakMap,
                v = new WeakMap;

            function G(e, t, r = 350) {
                const l = g.get(e);
                void 0 !== l && cancelAnimationFrame(l);
                const a = e.scrollLeft,
                    n = t - a;
                if (Math.abs(n) < 1) return;
                e.style.scrollSnapType = "none";
                const i = performance.now(),
                    o = t => {
                        const l = t - i,
                            c = Math.min(l / r, 1),
                            s = 1 - (1 - c) ** 3;
                        e.scrollLeft = a + n * s, c < 1 ? g.set(e, requestAnimationFrame(o)) : (g.delete(e), e.style.scrollSnapType = "")
                    };
                g.set(e, requestAnimationFrame(o))
            }

            function b(e, t, r) {
                const l = v.get(e);
                void 0 !== l && cancelAnimationFrame(l);
                const a = e.scrollLeft,
                    n = t - a;
                if (Math.abs(n) < 1) return void r ? .();
                e.style.scrollSnapType = "none", e.style.scrollBehavior = "auto";
                const i = performance.now(),
                    o = t => {
                        const l = t - i,
                            c = Math.min(l / 500, 1),
                            s = 1 - (1 - c) ** 3;
                        e.scrollLeft = a + n * s, c < 1 ? v.set(e, requestAnimationFrame(o)) : (v.delete(e), e.style.scrollSnapType = "", e.style.scrollBehavior = "", r ? .())
                    };
                v.set(e, requestAnimationFrame(o))
            }

            function w(e) {
                return "rtl" === getComputedStyle(e).direction
            }

            function N({
                items: e,
                className: t
            }) {
                const r = (0, n.d4)(o.K),
                    d = (0, a.useRef)(null),
                    p = (0, a.useRef)(null),
                    g = (0, a.useRef)(null),
                    v = (0, a.useRef)(null),
                    N = (0, a.useRef)([]),
                    L = (0, a.useRef)([]),
                    x = (0, a.useRef)([]),
                    C = (0, a.useRef)(0),
                    k = (0, a.useRef)(0),
                    S = (0, a.useRef)(0),
                    Y = (0, a.useRef)(!1),
                    R = (0, a.useRef)(null),
                    E = (0, a.useRef)(null),
                    A = (0, a.useRef)(0),
                    F = (0, a.useRef)(0),
                    M = (0, a.useRef)(!1),
                    T = (0, a.useRef)(!1),
                    B = (0, a.useRef)(null),
                    [W, P] = (0, a.useState)(0),
                    [H, I] = (0, a.useState)(!0),
                    [D, q] = (0, a.useState)(!1),
                    [V, X] = (0, a.useState)(!1),
                    [O, K] = (0, a.useState)(!1),
                    [$, j] = (0, a.useState)(!1),
                    [Q, z] = (0, a.useState)(!0),
                    J = (0, n.d4)(c.Vy),
                    Z = () => {
                        null === R.current && (R.current = requestAnimationFrame(() => {
                            R.current = null;
                            const e = v.current;
                            e && (w(e) ? (I(e.scrollLeft < -1), q(Math.abs(e.scrollLeft) < e.scrollWidth - e.clientWidth - 1)) : (I(e.scrollLeft + e.clientWidth < e.scrollWidth - 1), q(e.scrollLeft > 1)))
                        }))
                    },
                    U = (e, t) => {
                        const r = p.current;
                        if (r) return M.current ? (T.current = !0, void b(r, e, () => (e => {
                            T.current = !1;
                            const t = k.current;
                            e !== t && ((0, s.F)({
                                category: "gamepage",
                                action: "gallerySwipe",
                                label: e > t ? "right" : "left",
                                options: {
                                    interaction: !0
                                }
                            }), k.current = e), P(e), L.current[e] ? .scrollIntoView({
                                behavior: "smooth",
                                block: "nearest",
                                inline: "nearest"
                            })
                        })(t))) : void b(r, e)
                    },
                    ee = e => {
                        const t = p.current;
                        if (t) {
                            const r = t.clientWidth + 24,
                                l = w(t) ? -r * e : r * e;
                            U(l, e)
                        }
                        M.current || L.current[e] ? .scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "nearest"
                        }), (0, s.F)({
                            category: "gamepage",
                            action: "galleryLightboxThumbClick",
                            options: {
                                interaction: !0
                            }
                        })
                    },
                    te = t => {
                        const r = p.current;
                        if (!r ? .clientWidth) return;
                        const l = r.clientWidth + 24,
                            a = w(r),
                            n = Math.max(0, Math.min(Math.round(Math.abs(r.scrollLeft) / l), e.length - 1)),
                            i = a ? -t : t,
                            o = Math.max(0, Math.min(n + i, e.length - 1));
                        U(a ? -l * o : l * o, o)
                    },
                    re = () => {
                        null !== B.current && (clearTimeout(B.current), B.current = null)
                    },
                    le = () => {
                        M.current && (re(), B.current = setTimeout(() => {
                            z(!1), B.current = null
                        }, 5e3))
                    },
                    ae = () => {
                        M.current && (z(!0), le())
                    };
                if ((0, a.useEffect)(() => {
                        const e = window.matchMedia("(hover: hover) and (pointer: fine)"),
                            t = () => {
                                M.current = e.matches, e.matches || (re(), z(!0))
                            };
                        return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t)
                    }, []), (0, a.useEffect)(() => () => re(), []), (0, a.useEffect)(() => {
                        const e = v.current;
                        if (!e) return;
                        e.scrollLeft = 0, Z(), e.addEventListener("scroll", Z, {
                            passive: !0
                        });
                        const t = e.querySelectorAll("img");
                        return t.forEach(e => e.addEventListener("load", Z)), () => {
                            e.removeEventListener("scroll", Z), t.forEach(e => e.removeEventListener("load", Z)), null !== R.current && (cancelAnimationFrame(R.current), R.current = null)
                        }
                    }, [e]), (0, a.useEffect)(() => {
                        const e = g.current;
                        if (!e) return;
                        const t = () => {
                            null === E.current && (E.current = requestAnimationFrame(() => {
                                E.current = null, w(e) ? (X(e.scrollLeft < -1), K(Math.abs(e.scrollLeft) < e.scrollWidth - e.clientWidth - 1)) : (X(e.scrollLeft + e.clientWidth < e.scrollWidth - 1), K(e.scrollLeft > 1))
                            }))
                        };
                        return t(), e.addEventListener("scroll", t, {
                            passive: !0
                        }), () => {
                            e.removeEventListener("scroll", t), null !== E.current && (cancelAnimationFrame(E.current), E.current = null)
                        }
                    }, [e]), (0, a.useEffect)(() => {
                        const e = d.current;
                        if (!e) return;
                        const t = e => {
                            const t = p.current,
                                r = g.current;
                            if ("closed" === e.newState) {
                                document.body.style.overflow = "";
                                const e = v.current;
                                if (e) {
                                    const t = e.getBoundingClientRect().top + window.scrollY - F.current;
                                    window.scrollTo(0, Math.max(0, t))
                                } else window.scrollTo(0, A.current);
                                re(), j(!1), z(!0)
                            }
                            if ("open" === e.newState) {
                                if (A.current = window.scrollY, v.current && (F.current = v.current.getBoundingClientRect().top), document.body.style.overflow = "hidden", z(!0), M.current && le(), t) {
                                    const e = t.clientWidth + 24,
                                        r = w(t) ? -e * C.current : e * C.current;
                                    t.scrollTo({
                                        left: r,
                                        behavior: "instant"
                                    })
                                }
                                r && (w(r) ? (X(r.scrollLeft < -1), K(Math.abs(r.scrollLeft) < r.scrollWidth - r.clientWidth - 1)) : (X(r.scrollLeft + r.clientWidth < r.scrollWidth - 1), K(r.scrollLeft > 1)))
                            }
                        };
                        return e.addEventListener("toggle", t), () => {
                            e.removeEventListener("toggle", t), e.matches(":popover-open") && (document.body.style.overflow = "")
                        }
                    }, []), (0, a.useEffect)(() => {
                        const e = p.current;
                        if (!e) return;
                        const t = new Map;
                        N.current.forEach((e, r) => {
                            e && t.set(e, r)
                        });
                        const r = new IntersectionObserver(e => {
                            M.current && T.current || e.forEach(e => {
                                if (e.isIntersecting) {
                                    const r = t.get(e.target);
                                    if (void 0 !== r) {
                                        const e = k.current;
                                        r !== e && ((0, s.F)({
                                            category: "gamepage",
                                            action: "gallerySwipe",
                                            label: r > e ? "right" : "left",
                                            options: {
                                                interaction: !0
                                            }
                                        }), k.current = r), P(r)
                                    }
                                }
                            })
                        }, {
                            root: e,
                            threshold: .6
                        });
                        return t.forEach((e, t) => r.observe(t)), () => r.disconnect()
                    }, [e]), (0, a.useEffect)(() => {
                        M.current || L.current[W] ? .scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "nearest"
                        })
                    }, [W]), (0, a.useEffect)(() => {
                        if (!$) return;
                        const e = W,
                            t = () => {
                                x.current[e] ? .scrollIntoView({
                                    block: "nearest",
                                    inline: "center"
                                })
                            },
                            r = requestAnimationFrame(() => {
                                requestAnimationFrame(t)
                            });
                        return () => cancelAnimationFrame(r)
                    }, [$, W]), (0, a.useEffect)(() => {
                        const e = () => j(!1);
                        return window.addEventListener("orientationchange", e), () => window.removeEventListener("orientationchange", e)
                    }, []), (0, a.useEffect)(() => {
                        const e = d.current;
                        if (!e) return;
                        const t = t => {
                            e.matches(":popover-open") && ("ArrowLeft" === t.key && (ae(), te(-1)), "ArrowRight" === t.key && (ae(), te(1)))
                        };
                        return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t)
                    }, []), !e.length) return null;
                const ne = e.some(e => (e.width || 16) / (e.height || 9) > 1.18),
                    ie = !ne && e.some(e => {
                        const t = (e.width || 16) / (e.height || 9);
                        return t >= .85 && t <= 1.18
                    }),
                    oe = ne ? m.mediaGallery__lightbox_widestLandscape : ie ? m.mediaGallery__lightbox_widestSquare : m.mediaGallery__lightbox_widestPortrait,
                    ce = (e, t) => {
                        const r = (e.width || 16) / (e.height || 9),
                            a = Math.max(1, Math.round(h * r));
                        return (0, _.Y)("button", {
                            type: "button",
                            className: (0, l.$)("buttonReset", m.mediaGallery__card),
                            onClick: () => (e => {
                                C.current = e, k.current = e, P(e), d.current ? .showPopover(), (0, s.F)({
                                    category: "gamepage",
                                    action: "galleryOpen",
                                    options: {
                                        interaction: !0
                                    }
                                })
                            })(t),
                            children: (0, _.Y)("img", {
                                draggable: !1,
                                className: m.mediaGallery__card__image,
                                width: a,
                                height: h,
                                src: y(e, h),
                                srcSet: f(e, h),
                                alt: e.altText ? ? "",
                                loading: "lazy",
                                decoding: "async"
                            })
                        })
                    },
                    se = (e, t, r, a, n = () => ee(t), i = 64) => (0, _.Y)("button", {
                        ref: a,
                        type: "button",
                        className: (0, l.$)("buttonReset", m.mediaGallery__thumb, {
                            [m.mediaGallery__thumb_active]: r
                        }),
                        onClick: n,
                        children: (0, _.Y)("img", {
                            className: m.mediaGallery__thumb__image,
                            src: y(e, i),
                            srcSet: f(e, i),
                            alt: e.altText ? ? "",
                            loading: "lazy",
                            decoding: "async"
                        })
                    });
                return (0, _.FD)("div", {
                    className: (0, l.$)(m.mediaGallery, t),
                    children: [(0, _.Y)(u.I, {
                        className: m.mediaGallery__cards,
                        ref: v,
                        children: e.map((e, t) => (0, _.Y)("div", {
                            children: ce(e, t)
                        }, e.id))
                    }), [{
                        visible: D,
                        hint: m.mediaGallery__scrollHint_prev,
                        hit: m.mediaGallery__scrollHit_prev,
                        icon: m.mediaGallery__scrollPrevIcon,
                        name: "ui-icons-chevron-left",
                        label: r.previous,
                        onClick: () => {
                            const e = v.current;
                            if (!e) return;
                            const t = e.getBoundingClientRect(),
                                r = Array.from(e.querySelectorAll(":scope > *"));
                            if (w(e)) {
                                const l = getComputedStyle(e),
                                    a = parseFloat(l.getPropertyValue("scroll-padding-inline-start")) || parseFloat(l.scrollPaddingRight) || 0,
                                    n = t.right - a,
                                    i = r.find(e => e.getBoundingClientRect().right < n - 1);
                                if (i) {
                                    const t = i.getBoundingClientRect().right - n;
                                    G(e, e.scrollLeft + t)
                                }
                            } else {
                                const l = parseFloat(getComputedStyle(e).paddingLeft) || 0,
                                    a = [...r].reverse().find(e => e.getBoundingClientRect().right < t.left + 1);
                                if (a) {
                                    const r = a.getBoundingClientRect().left - t.left - l;
                                    G(e, e.scrollLeft + r)
                                } else G(e, 0)
                            }(0, s.F)({
                                category: "gamepage",
                                action: "galleryArrowClick",
                                label: "left",
                                options: {
                                    interaction: !0
                                }
                            })
                        }
                    }, {
                        visible: H,
                        hint: void 0,
                        hit: m.mediaGallery__scrollHit_next,
                        icon: m.mediaGallery__scrollNextIcon,
                        name: "ui-icons-chevron-right",
                        label: r.next,
                        onClick: () => {
                            const e = v.current;
                            if (!e) return;
                            const t = e.getBoundingClientRect(),
                                r = Array.from(e.querySelectorAll(":scope > *"));
                            if (w(e)) {
                                const l = getComputedStyle(e),
                                    a = parseFloat(l.getPropertyValue("scroll-padding-inline-start")) || parseFloat(l.scrollPaddingRight) || 0,
                                    n = t.right - a,
                                    i = [...r].reverse().find(e => e.getBoundingClientRect().left > n + 1);
                                if (i) {
                                    const t = i.getBoundingClientRect().right - n;
                                    G(e, e.scrollLeft + t)
                                } else G(e, 0)
                            } else {
                                const l = parseFloat(getComputedStyle(e).paddingLeft) || 0,
                                    a = r.find(e => e.getBoundingClientRect().right > t.right + 1);
                                if (a) {
                                    const r = a.getBoundingClientRect().left - t.left - l;
                                    G(e, e.scrollLeft + r)
                                }
                            }(0, s.F)({
                                category: "gamepage",
                                action: "galleryArrowClick",
                                label: "right",
                                options: {
                                    interaction: !0
                                }
                            })
                        }
                    }].map(({
                        visible: e,
                        hint: t,
                        hit: r,
                        icon: a,
                        name: n,
                        label: o,
                        onClick: c
                    }) => (0, _.Y)("div", {
                        className: (0, l.$)(m.mediaGallery__scrollHint, t, !e && m.mediaGallery__scrollHint_hidden),
                        children: (0, _.Y)("button", {
                            type: "button",
                            className: (0, l.$)("buttonReset", m.mediaGallery__scrollHit, r),
                            onClick: c,
                            "aria-label": o,
                            children: (0, _.Y)("span", {
                                className: m.mediaGallery__scrollBtn,
                                children: (0, _.Y)(i.default, {
                                    className: a,
                                    name: n,
                                    recolor: !0,
                                    decorative: !0
                                })
                            })
                        })
                    }, n)), (0, _.FD)("div", {
                        id: "media-gallery",
                        ref: d,
                        popover: "auto",
                        role: "dialog",
                        className: (0, l.$)(m.mediaGallery__lightbox, oe),
                        onClick: () => d.current ? .hidePopover(),
                        onMouseMove: ae,
                        children: [(0, _.Y)("button", {
                            type: "button",
                            className: (0, l.$)("buttonReset", m.mediaGallery__close, $ && m.mediaGallery__close_landscapeSheetOpen, !Q && m.mediaGallery__close_controlsHidden),
                            onClick: e => {
                                e.stopPropagation(), j(!1), (0, s.F)({
                                    category: "gamepage",
                                    action: "galleryClose",
                                    options: {
                                        interaction: !0
                                    }
                                }), d.current ? .hidePopover()
                            },
                            "aria-label": r.exit,
                            children: (0, _.Y)(i.default, {
                                className: m.mediaGallery__closeIcon,
                                name: "ui-icons-close",
                                recolor: !0,
                                decorative: !0
                            })
                        }), (0, _.Y)("div", {
                            className: (0, l.$)(m.mediaGallery__lightboxNavPrev, ((J ? W >= e.length - 1 : 0 === W) || !Q) && m.mediaGallery__lightboxNav_hidden),
                            onClick: e => e.stopPropagation(),
                            children: (0, _.Y)("button", {
                                type: "button",
                                className: (0, l.$)("buttonReset", m.mediaGallery__arrowBtn),
                                onClick: e => {
                                    e.stopPropagation(), te(-1)
                                },
                                "aria-label": r.previous,
                                children: (0, _.Y)(i.default, {
                                    className: m.mediaGallery__arrowIcon,
                                    name: "ui-icons-chevron-left",
                                    recolor: !0,
                                    decorative: !0
                                })
                            })
                        }), (0, _.Y)("div", {
                            className: (0, l.$)(m.mediaGallery__lightboxNavNext, ((J ? 0 === W : W >= e.length - 1) || !Q) && m.mediaGallery__lightboxNav_hidden),
                            onClick: e => e.stopPropagation(),
                            children: (0, _.Y)("button", {
                                type: "button",
                                className: (0, l.$)("buttonReset", m.mediaGallery__arrowBtn),
                                onClick: e => {
                                    e.stopPropagation(), te(1)
                                },
                                "aria-label": r.next,
                                children: (0, _.Y)(i.default, {
                                    className: m.mediaGallery__arrowIcon,
                                    name: "ui-icons-chevron-right",
                                    recolor: !0,
                                    decorative: !0
                                })
                            })
                        }), (0, _.FD)("div", {
                            className: m.mediaGallery__lightboxInner,
                            onTouchStart: e => {
                                S.current = e.touches[0] ? .clientX ? ? 0, Y.current = !1
                            },
                            onTouchMove: e => {
                                Math.abs((e.touches[0] ? .clientX ? ? 0) - S.current) > 5 && (Y.current = !0)
                            },
                            children: [(0, _.FD)("div", {
                                className: m.mediaGallery__trackWrapper,
                                children: [(0, _.Y)("div", {
                                    className: m.mediaGallery__track,
                                    ref: p,
                                    children: e.map((e, t) => {
                                        const r = (e.width || 16) / (e.height || 9),
                                            a = r >= .85 && r <= 1.18,
                                            n = !a && (e.height || 0) > (e.width || 0),
                                            i = n && r >= .53 && r <= .59;
                                        return (0, _.Y)("figure", {
                                            className: (0, l.$)(m.mediaGallery__slide, n && m.mediaGallery__slide_portrait, i && m.mediaGallery__slide_portrait916, a && m.mediaGallery__slide_square),
                                            ref: e => {
                                                N.current[t] = e
                                            },
                                            children: (0, _.Y)("div", {
                                                className: m.mediaGallery__media,
                                                onClick: e => {
                                                    e.stopPropagation(), M.current || Y.current || z(e => !e)
                                                },
                                                children: (0, _.Y)("img", {
                                                    className: m.mediaGallery__media__image,
                                                    src: y(e, 592),
                                                    srcSet: f(e, 592),
                                                    alt: e.altText ? ? "",
                                                    loading: "lazy"
                                                })
                                            })
                                        }, e.id)
                                    })
                                }), (0, _.Y)("p", {
                                    className: (0, l.$)(m.mediaGallery__captionOverlay, (!e[W] ? .caption || !Q) && m.mediaGallery__captionOverlay_hidden),
                                    onClick: e => e.stopPropagation(),
                                    children: e[W] ? .caption
                                })]
                            }), (0, _.FD)("div", {
                                className: m.mediaGallery__stripWrapper,
                                onClick: e => e.stopPropagation(),
                                children: [(0, _.Y)("ul", {
                                    className: m.mediaGallery__lightboxStrip,
                                    ref: g,
                                    children: e.map((e, t) => (0, _.Y)("li", {
                                        children: se(e, t, t === W, e => {
                                            L.current[t] = e
                                        })
                                    }, e.id))
                                }), O && (0, _.Y)("div", {
                                    className: (0, l.$)(m.mediaGallery__arrow, m.mediaGallery__arrow_prev),
                                    children: (0, _.Y)("button", {
                                        type: "button",
                                        className: (0, l.$)("buttonReset", m.mediaGallery__arrowBtn),
                                        onClick: () => te(-1),
                                        "aria-label": r.previous,
                                        children: (0, _.Y)(i.default, {
                                            className: m.mediaGallery__arrowIcon,
                                            name: "ui-icons-chevron-left",
                                            recolor: !0,
                                            decorative: !0
                                        })
                                    })
                                }), V && (0, _.Y)("div", {
                                    className: (0, l.$)(m.mediaGallery__arrow, m.mediaGallery__arrow_next),
                                    children: (0, _.Y)("button", {
                                        type: "button",
                                        className: (0, l.$)("buttonReset", m.mediaGallery__arrowBtn),
                                        onClick: () => te(1),
                                        "aria-label": r.next,
                                        children: (0, _.Y)(i.default, {
                                            className: m.mediaGallery__arrowIcon,
                                            name: "ui-icons-chevron-right",
                                            recolor: !0,
                                            decorative: !0
                                        })
                                    })
                                })]
                            }), e[W] && !$ && (0, _.FD)("div", {
                                className: (0, l.$)(m.mediaGallery__landscapeBar, !Q && m.mediaGallery__landscapeBar_hidden),
                                onClick: e => e.stopPropagation(),
                                children: [(0, _.FD)("button", {
                                    type: "button",
                                    className: (0, l.$)("buttonReset", m.mediaGallery__landscapeGalleryBtn),
                                    onClick: () => {
                                        if (Y.current) return;
                                        const t = (() => {
                                            const t = p.current;
                                            if (!t ? .clientWidth) return W;
                                            const r = t.clientWidth + 24;
                                            return Math.max(0, Math.min(Math.round(Math.abs(t.scrollLeft) / r), e.length - 1))
                                        })();
                                        k.current = t, P(t), j(!0)
                                    },
                                    children: [(0, _.Y)("div", {
                                        className: m.mediaGallery__landscapeThumb,
                                        children: (0, _.Y)("img", {
                                            className: m.mediaGallery__thumb__image,
                                            src: y(e[W], 64),
                                            srcSet: f(e[W], 64),
                                            alt: e[W].altText ? ? ""
                                        })
                                    }), (0, _.Y)("span", {
                                        className: m.mediaGallery__landscapeGalleryLabel,
                                        children: r.gallery
                                    })]
                                }), e[W].caption && (0, _.Y)("p", {
                                    className: m.mediaGallery__landscapeCaption,
                                    children: e[W].caption
                                })]
                            }), (0, _.FD)("div", {
                                className: (0, l.$)(m.mediaGallery__landscapeSheet, {
                                    [m.mediaGallery__landscapeSheet_open]: $
                                }),
                                onClick: e => e.stopPropagation(),
                                children: [(0, _.Y)("p", {
                                    className: m.mediaGallery__landscapeSheetTitle,
                                    children: r.gallery
                                }), (0, _.Y)("button", {
                                    type: "button",
                                    className: (0, l.$)("buttonReset", m.mediaGallery__landscapeSheetClose),
                                    onClick: () => j(!1),
                                    "aria-label": r.exit,
                                    children: (0, _.Y)(i.default, {
                                        className: m.mediaGallery__closeIcon,
                                        name: "ui-icons-chevron-down",
                                        recolor: !0,
                                        decorative: !0
                                    })
                                }), (0, _.Y)("ul", {
                                    className: m.mediaGallery__lightboxStrip,
                                    children: e.map((e, t) => (0, _.Y)("li", {
                                        children: se(e, t, t === W, e => {
                                            x.current[t] = e
                                        }, () => (e => {
                                            ee(e), j(!1)
                                        })(t), 128)
                                    }, e.id))
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        48674(e, t, r) {
            r.d(t, {
                I: () => o
            });
            var l = r(10061),
                a = r(58738);

            function n({
                axis: e = "x"
            } = {}) {
                const t = l.default.useRef(null),
                    [r, a] = l.default.useState(!1),
                    n = l.default.useRef({
                        axis: e
                    });
                return l.default.useEffect(() => {
                    n.current = {
                        axis: e
                    }
                }, [e]), l.default.useEffect(() => {
                    const e = t.current;
                    if (!e) return;
                    e.style.overflowX || e.style.overflowY || (e.style.overflowX = "auto");
                    let r = !1,
                        l = !1,
                        i = 0,
                        o = 0,
                        c = 0,
                        s = 0,
                        d = "",
                        u = "",
                        m = null,
                        _ = null;
                    const h = () => {
                            _ = null, m && ("y" === m.axis ? e.scrollTop = m.value : e.scrollLeft = m.value, m = null)
                        },
                        p = t => {
                            const r = (() => {
                                const {
                                    axis: t
                                } = n.current;
                                if (!e) return [];
                                const r = getComputedStyle(e),
                                    l = parseFloat(r.getPropertyValue("x" === t ? "scroll-padding-left" : "scroll-padding-top")) || 0;
                                return Array.from(e.children).map(e => {
                                    const r = "x" === t ? e.offsetLeft : e.offsetTop;
                                    return Math.round(r - l)
                                })
                            })();
                            if (0 === r.length) return t;
                            const {
                                axis: l
                            } = n.current, a = r.reduce((e, r) => Math.abs(r - t) < Math.abs(e - t) ? r : e), i = "x" === l ? e.scrollWidth - e.clientWidth : e.scrollHeight - e.clientHeight;
                            return Math.max(0, Math.min(a, i))
                        },
                        y = t => {
                            "mouse" === t.pointerType && 0 === t.button && (r = !0, l = !1, i = t.clientX, o = t.clientY, c = e.scrollLeft, s = e.scrollTop, d = e.style.scrollSnapType, u = getComputedStyle(e).scrollSnapType, e.style.scrollSnapType = "none", a(!0), e.setAttribute("data-dragging", "true"), t.preventDefault())
                        },
                        f = e => {
                            if (!r) return;
                            const {
                                axis: t
                            } = n.current, a = e.clientX - i, d = e.clientY - o;
                            !l && Math.abs(a) + Math.abs(d) > 3 && (l = !0), m = "y" === t ? {
                                axis: "y",
                                value: s - d
                            } : {
                                axis: "x",
                                value: c - a
                            }, null === _ && (_ = requestAnimationFrame(h)), e.preventDefault()
                        },
                        g = () => {
                            if (!r) return;
                            r = !1, null !== _ && cancelAnimationFrame(_), h();
                            if (u && "none" !== u) {
                                const {
                                    axis: t
                                } = n.current, r = "x" === t ? e.scrollLeft : e.scrollTop, l = p(r), a = () => {
                                    e.style.scrollSnapType = d || u
                                };
                                e.addEventListener("scrollend", a, {
                                    once: !0
                                }), e.scrollTo({
                                    ["x" === t ? "left" : "top"]: l,
                                    behavior: "smooth"
                                })
                            }
                            if (a(!1), e.removeAttribute("data-dragging"), l) {
                                const t = r => {
                                    r.preventDefault(), r.stopPropagation(), e.removeEventListener("click", t, !0)
                                };
                                e.addEventListener("click", t, !0), setTimeout(() => e.removeEventListener("click", t, !0), 0)
                            }
                        };
                    return e.addEventListener("pointerdown", y), e.addEventListener("pointermove", f, {
                        passive: !1
                    }), e.addEventListener("pointerup", g), e.addEventListener("pointercancel", g), e.addEventListener("pointerleave", g), () => {
                        null !== _ && (cancelAnimationFrame(_), _ = null), e.removeEventListener("pointerdown", y), e.removeEventListener("pointermove", f), e.removeEventListener("pointerup", g), e.removeEventListener("pointercancel", g), e.removeEventListener("pointerleave", g)
                    }
                }, []), {
                    ref: t,
                    dragging: r
                }
            }

            function i(...e) {
                return t => {
                    e.forEach(e => {
                        e && ("function" == typeof e ? e(t) : e.current = t)
                    })
                }
            }
            const o = l.default.forwardRef(({
                axis: e = "x",
                style: t,
                ...r
            }, l) => {
                const {
                    ref: o,
                    dragging: c
                } = n({
                    axis: e
                });
                return (0, a.Y)("div", {
                    ref: i(o, l),
                    "data-dragging": c || void 0,
                    style: {
                        overflowX: "x" === e ? t ? .overflowX ? ? "auto" : t ? .overflowX,
                        overflowY: "y" === e ? t ? .overflowY ? ? "auto" : t ? .overflowY,
                        WebkitOverflowScrolling: "touch",
                        cursor: c ? "grabbing" : "grab",
                        ...t
                    },
                    ...r
                })
            })
        },
        43085(e, t, r) {
            r.r(t), r.d(t, {
                mediaGallery: () => l,
                mediaGallery__arrow: () => a,
                mediaGallery__arrowBtn: () => n,
                mediaGallery__arrowIcon: () => i,
                mediaGallery__arrow_next: () => o,
                mediaGallery__arrow_prev: () => c,
                mediaGallery__caption: () => s,
                mediaGallery__captionOverlay: () => d,
                mediaGallery__captionOverlay_hidden: () => u,
                mediaGallery__caption_controlsHidden: () => m,
                mediaGallery__caption_hidden: () => _,
                mediaGallery__card: () => h,
                mediaGallery__card__image: () => p,
                mediaGallery__cards: () => y,
                mediaGallery__close: () => f,
                mediaGallery__closeIcon: () => g,
                mediaGallery__close_controlsHidden: () => v,
                mediaGallery__close_landscapeSheetOpen: () => G,
                mediaGallery__landscapeBar: () => b,
                mediaGallery__landscapeBar_hidden: () => w,
                mediaGallery__landscapeCaption: () => N,
                mediaGallery__landscapeGalleryBtn: () => L,
                mediaGallery__landscapeGalleryLabel: () => x,
                mediaGallery__landscapeSheet: () => C,
                mediaGallery__landscapeSheetClose: () => k,
                mediaGallery__landscapeSheetTitle: () => S,
                mediaGallery__landscapeSheet_open: () => Y,
                mediaGallery__landscapeThumb: () => R,
                mediaGallery__lightbox: () => E,
                mediaGallery__lightboxInner: () => A,
                mediaGallery__lightboxNavNext: () => F,
                mediaGallery__lightboxNavPrev: () => M,
                mediaGallery__lightboxNav_hidden: () => T,
                mediaGallery__lightboxStrip: () => B,
                mediaGallery__lightbox_widestLandscape: () => W,
                mediaGallery__lightbox_widestPortrait: () => P,
                mediaGallery__lightbox_widestSquare: () => H,
                mediaGallery__media: () => I,
                mediaGallery__media__image: () => D,
                mediaGallery__scrollBtn: () => q,
                mediaGallery__scrollHint: () => V,
                mediaGallery__scrollHint_hidden: () => X,
                mediaGallery__scrollHint_prev: () => O,
                mediaGallery__scrollHit: () => K,
                mediaGallery__scrollHit_next: () => $,
                mediaGallery__scrollHit_prev: () => j,
                mediaGallery__scrollNextIcon: () => Q,
                mediaGallery__scrollPrevIcon: () => z,
                mediaGallery__slide: () => J,
                mediaGallery__slide_portrait: () => Z,
                mediaGallery__slide_portrait916: () => U,
                mediaGallery__slide_square: () => ee,
                mediaGallery__stripWrapper: () => te,
                mediaGallery__stripWrapper_hidden: () => re,
                mediaGallery__thumb: () => le,
                mediaGallery__thumb__image: () => ae,
                mediaGallery__thumb_active: () => ne,
                mediaGallery__track: () => ie,
                mediaGallery__trackWrapper: () => oe
            });
            var l = "uXm4NWUP7yAB9BxXSYI8",
                a = "PL2Fn6zmQfcHfu5zik_a",
                n = "mQvE1zap85M6k4Bojx54",
                i = "fHN4rlw9GIKCnG8mbuWY",
                o = "pMuLSHLF9gGKsJqnuu0b",
                c = "w3dSEapOmNkWINnYJ_Ty",
                s = "X4TeNShEeiYqJYiO5HaH",
                d = "u8sv4pCnXUh2V8DMKRQl",
                u = "SAvqgurP9MvtCwSTPQZw",
                m = "KoRHH_oEjsL90a6q0RQu",
                _ = "m5cXTAcJwjzomZGpTnT9",
                h = "EkIv_xvxn3HZUuoKkOaZ",
                p = "Wqozj6D1xue1JjbHiKoP",
                y = "U6pPzDFMCk1R5y_hOAvc",
                f = "dp3KWJ2zXUt_yOOIeSSM",
                g = "cxLdakkyWMuJ1B0dnr9O",
                v = "xZ6ruJV9JHzrATkoewCZ",
                G = "XWNWAP13JZXjfZM5BNng",
                b = "Mhleip44Ejq87sifMb_L",
                w = "yRZNYNjn8XgNopLt3jNr",
                N = "jrZerqAi1KKjdzRGkA4e",
                L = "U6bAqhYGLlSVIP8BW5j1",
                x = "HWba9kpduwWmfD1QxhFP",
                C = "sp4srJZivkDdnBuELYNF",
                k = "WepAR04KGL3prfojQsjQ",
                S = "J09Q4HqKMK3GyJv80ol_",
                Y = "J9JpGcqOivGkDcmvUSVn",
                R = "iugCQwohysRv0kC3Sjx7",
                E = "XdfWs8W2SGDUQ9goADFK",
                A = "k8C4LioZDHPLWNRt5KuS",
                F = "SQN5mRFI0xoyUiDwwPy2",
                M = "kh0DRkOudy3hyNkvYd6Y",
                T = "MAgkVCnFJVrLvScf0d8o",
                B = "V_DIrAy_bZBzVvuR3TrA",
                W = "Vun5wOlKxFvBfiobqkdT",
                P = "qe0Y4C4vmxJaP6vskQXH",
                H = "iFu1UQVHqRErpf6hBJlB",
                I = "kCZMqwZzD70NhVFBfGrC",
                D = "swlnRxrIFG2gWdATYCJQ",
                q = "cfm1llWw5QrbtkR52uDd",
                V = "hfiQVbTdhbbI91U3dtGs",
                X = "N3fkHDAalU_l7IcTE2mp",
                O = "NUK7dLtLfuULNcTARox0",
                K = "FtVrTksNGi4TCZn3E7Xy",
                $ = "aYNZuqnIGoBMyjBvhZfY",
                j = "j0aoiNXto13pHC3BYdK0",
                Q = "N8X3_iruC4BLY0jthMHp",
                z = "iCo68gAIg0z_n1FJNeSE",
                J = "Igls4vTjVlUI4qix2je2",
                Z = "duB5Na2WD78fduxdG_Co",
                U = "zQ1KUops0l6MQgY7cD0p",
                ee = "x2KV9rCylgLZ0ZjVzMrm",
                te = "fNNy5z737_kGWLagPm_w",
                re = "gt_6QFqd69Qs37itphnV",
                le = "ATwulkFvTamqFzWeyKBr",
                ae = "GlVuf1rNvvc09KVIxnH3",
                ne = "sdAjBzV5wXTOmflcY0G4",
                ie = "vGhVJfOrCNwa9rfyPuNQ",
                oe = "mr1cuAzCNs3DXLVZXRyY"
        }
    }
]);
//# sourceMappingURL=client~app-components-MediaGallery~a0eccd11c47e2cafa5bf.js.map