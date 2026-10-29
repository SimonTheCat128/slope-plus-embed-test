"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4996], {
        23474(e, t, a) {
            a.d(t, {
                S: () => n,
                zq: () => o,
                aI: () => r
            });
            const i = "en-US";

            function r(e) {
                if (!e) return "";
                const t = e.getFullYear(),
                    a = e.getMonth() + 1,
                    i = e.getDate();
                return `${t}-${a<10?"0":""}${a}-${i<10?"0":""}${i}`
            }

            function n(e, t) {
                const a = function() {
                        const e = navigator.language.replace(/_/g, "-");
                        try {
                            return Intl.getCanonicalLocales(e)[0] || i
                        } catch {
                            return i
                        }
                    }(),
                    r = new Intl.RelativeTimeFormat(a, {
                        numeric: "auto"
                    }),
                    n = new Date,
                    o = new Date(e),
                    l = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
                    m = new Date(o.getFullYear(), o.getMonth(), o.getDate()),
                    s = Math.round((l.getTime() - m.getTime()) / 864e5);
                return 0 === s ? t ? .time_today || r.format(0, "day") : 1 === s ? t ? .time_yesterday || r.format(-1, "day") : s < 7 ? t ? .time_this_week || r.format(0, "week") : s < 14 ? t ? .time_last_week || r.format(-1, "week") : s < 30 ? t ? .time_this_month || r.format(0, "month") : s < 60 ? t ? .time_last_month || r.format(-1, "month") : s < 365 ? t ? .time_this_year || r.format(0, "year") : s < 730 ? t ? .time_last_year || r.format(-1, "year") : new Intl.DateTimeFormat(a, {
                    dateStyle: "medium"
                }).format(o)
            }

            function o(e, t, a = {
                year: "numeric",
                month: "short"
            }) {
                const i = new Date(e),
                    r = t.replace("_", "-") || void 0;
                return new Intl.DateTimeFormat(r, a).format(i)
            }
        },
        86547(e, t, a) {
            a.d(t, {
                u: () => l,
                c: () => s
            });
            var i = a(11297),
                r = a(84213),
                n = a(52267);
            class o {
                constructor(e) {
                    this.options = e
                }
                renderToString() {
                    const {
                        data: e,
                        href: t,
                        className: a,
                        lazy: i = !1,
                        fetchPriority: o = !1,
                        list: l = "",
                        idx: m = 0,
                        trackingIndex: s = m,
                        componentKey: c = "",
                        isMobile: g = !1,
                        mysteryPath: d,
                        mysteryUrl: p
                    } = this.options, {
                        isMapped: u
                    } = (0, r.hS)({
                        list: l,
                        idx: m,
                        componentKey: c,
                        isMobile: g
                    }), h = e.showNormalTile ? ? !1;
                    let y = "Mystery Tile",
                        f = `<img class="summaryTile__img" src="https://a.poki-cdn.com/images/mystery-tile-v2.svg" alt="${y}" decoding="async" />`;
                    h && e.thumbnail && (e.title && (y = e.title), f = (0, n.c)({
                        imageUrl: e.thumbnail,
                        alt: y,
                        lazy: i,
                        fetchPriority: o,
                        list: l,
                        idx: m,
                        componentKey: c,
                        isMobile: g
                    }));
                    const _ = h ? `<span class="summaryTile__title global-cq-title">${y}</span>` : "";
                    return `<a class="${function(...e){return e.filter(Boolean).join(" ")}("summaryTile","summaryTile_fixedAspectRatio",u&&"summaryTile_container",a)}" href="${t}" ${["data-mystery-tile",`data-tile-index="${s}"`,`data-tile-list="${l}"`,`data-mystery-game-id="${e.id}"`,`data-mystery-path="${d}"`,`data-mystery-url="${p}"`].filter(Boolean).join(" ")}>${_}${f}</a>`
                }
            }

            function l(e) {
                const {
                    className: t,
                    lazy: a,
                    fetchPriority: r,
                    list: n,
                    idx: o,
                    componentKey: l,
                    isMobile: m
                } = e;
                return {
                    p4dGameID: e.data.p4dGameID,
                    mysteryTileRenderOptions: {
                        className: t,
                        lazy: a,
                        fetchPriority: r,
                        list: n,
                        idx: o,
                        componentKey: l,
                        isMobile: m
                    },
                    staticTileRenderOptions: e,
                    html: (0, i.m)(e)
                }
            }

            function m(e, t) {
                return {
                    p4dGameID: e.data.id,
                    mysteryTileRenderOptions: t,
                    mysteryTileOptions: e,
                    html: (a = { ...e,
                        ...t
                    }, new o(a).renderToString())
                };
                var a
            }

            function s(e, t, {
                getTileRenderOptions: a,
                randomSeed: i
            }) {
                if (0 === t.length) return;
                const r = [];
                t.forEach(t => {
                    if (!t.canReplaceGameTile) return;
                    const a = e.findIndex(e => e.p4dGameID === t.data.id);
                    if (-1 === a) return;
                    const [i] = e.splice(a, 1);
                    t.preserveReplacedGameTile && r.push(i)
                });
                let n = Math.floor(4294967296 * i);
                const o = () => (n = (1664525 * n + 1013904223) % 4294967296, n / 4294967296),
                    s = Math.min(30, e.length),
                    c = [];
                let g = 2 + Math.floor(2 * o());
                t.forEach((a, i) => {
                    c.push(m(a)), g -= 1, 0 === g && i < t.length - 1 && (c.push(...e.splice(s, 1 + Math.floor(2 * o()))), g = 2 + Math.floor(2 * o()))
                }), e.splice(s, 0, ...c, ...r);
                const d = new Set(r);
                e.forEach((t, i) => {
                    const r = a(i, e.length);
                    t.mysteryTileOptions ? e[i] = m(t.mysteryTileOptions, r) : t.staticTileRenderOptions && (e[i] = l({ ...t.staticTileRenderOptions,
                        ...r,
                        ...d.has(t) ? {
                            eagerMappedImages: !1,
                            lazy: !0,
                            fetchPriority: !1
                        } : {}
                    }))
                })
            }
        },
        4502(e, t, a) {
            a.d(t, {
                A: () => g
            });
            var i = a(52405),
                r = a(49170),
                n = a(51869);
            const o = /<youtube\s+ids=\[([^\]]*)\]\s*\/>/g,
                l = /<tiktok\s+(autoplay\s+)?ids=\[([^\]]*)\]\s*\/>/g,
                m = /["']([^"']+)["']/g;
            let s = !1;

            function c(e, t) {
                const a = e.match(m) ? .map(e => e.replace(/["']/g, "")) ? ? [];
                if (0 === a.length) return "";
                ! function() {
                    if ("undefined" == typeof window || s) return;
                    s = !0;
                    const e = new Map;
                    window.addEventListener("message", t => {
                        if (!t.data ? .["x-tiktok-player"]) return;
                        const {
                            type: a,
                            value: r
                        } = t.data, n = t.source, o = n ? Array.from(document.querySelectorAll("iframe[data-tiktok-id]")).find(e => e.contentWindow === n) : null, l = o ? .dataset.tiktokId ? ? "unknown";
                        if ("onStateChange" === a && (1 === r ? (0, i.F)({
                                category: "tiktok",
                                action: "video-start",
                                label: l
                            }) : 0 === r && ((0, i.F)({
                                category: "tiktok",
                                action: "video-complete",
                                label: l
                            }), e.set(l, 0))), "onCurrentTime" === a) {
                            const t = r.currentTime / r.duration * 100,
                                a = e.get(l) ? ? 0;
                            if (100 === t) return void e.set(l, t);
                            [25, 50, 75].forEach(e => {
                                a < e && t >= e && (0, i.F)({
                                    category: "tiktok",
                                    action: `video-quartile-${e}`,
                                    label: l
                                })
                            }), e.set(l, t)
                        }
                    })
                }();
                const r = a.map((e, a) => {
                    const i = t && 0 === a ? "&autoplay=1" : "";
                    return `<iframe class="${n.description__videoEmbed__iframe}" src="https://www.tiktok.com/player/v1/${e}?music_info=0&description=0${i}" allow="fullscreen" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="TikTok video ${e}" data-tiktok-id="${e}"></iframe>`
                }).join("");
                return `<div class="${n.description__videoEmbed}">${r}</div>`
            }

            function g(e, t) {
                if (!t) return "";
                let a = t.split(/(<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>)/gi);
                a = a.map(t => {
                    if (!t) return;
                    const a = /<a([^>]+)href="([^"]*)"[^>]*>[^<]*<\/a>/gm;
                    return t.startsWith("<script") ? t.replace(a, e => e.replace(/"/g, '\\"')) : t ? .replace(a, (t, a, i) => {
                        const n = i.replace(/https:\/\/|http:\/\//gi, "").replace(e.domain, ""),
                            o = t.toLowerCase(),
                            l = o.includes("onclick"),
                            m = o.includes('target="_blank"');
                        return !(0, r.xs)(n) || l || m ? t : t.replace(a, `${a}onclick="window.navigateTo('${n}');return false;" `)
                    })
                });
                let i = a.join("");
                return i = i.replace(o, (e, t) => function(e) {
                    const t = e.match(m) ? .map(e => e.replace(/["']/g, "")) ? ? [];
                    if (0 === t.length) return "";
                    const a = t.map(e => `<iframe class="${n.description__videoEmbed__iframe}" src="https://www.youtube-nocookie.com/embed/${e}?playlist=${e}&loop=1&rel=0" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="fullscreen; picture-in-picture; encrypted-media" allowfullscreen title="YouTube video ${e}"></iframe>`).join("");
                    return `<div class="${n.description__videoEmbed}">${a}</div>`
                }(t)), i = i.replace(l, (e, t, a) => c(a, !!t)), i
            }
        },
        55618(e, t, a) {
            a.d(t, {
                b: () => c
            });
            var i = a(59134),
                r = a(23474),
                n = a(4502),
                o = a(18464),
                l = a(49170);
            const m = 512,
                s = e => e.startsWith("http") ? e : `https://img.poki-cdn.com/${e.replace(/^\//,"")}`;

            function c(e, t, a) {
                const c = (0, l.kC)(e, "game", a.game.slug),
                    g = (a.game.intro ? ? "").replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1").trim() || a.game.meta.description;
                const d = function({
                        desktop_available: e,
                        mobile_available: t
                    }) {
                        return {
                            gamePlatform: [...e ? ["https://schema.org/DesktopWebPlatform"] : [], ...t ? ["https://schema.org/MobileWebPlatform"] : []],
                            operatingSystem: [...e ? ["Windows", "Chrome OS", "Linux", "macOS"] : [], ...t ? ["Android", "iOS"] : []],
                            availableOnDevice: [...t ? ["Mobile", "Tablet"] : [], ...e ? ["Desktop"] : []]
                        }
                    }(a.game),
                    p = [{
                        label: t.breadcrumb_games,
                        path: (0, l.AO)(e, "home", ""),
                        url: (0, l.kC)(e, "home", "")
                    }, ...(a.game.breadcrumbs || []).map(t => ({
                        label: t.title,
                        path: (0, l.AO)(e, "category", t.slug),
                        url: (0, l.kC)(e, "category", t.slug)
                    }))],
                    u = (0, l.pN)({
                        width: 1200,
                        height: 1200,
                        imageUrl: a.game.imageUrl,
                        format: "png"
                    }),
                    h = a.game.imageUrl && s(a.game.imageUrl),
                    y = h ? {
                        "@type": "ImageObject",
                        "@id": h,
                        url: (0, l.pN)({
                            width: m,
                            imageUrl: h,
                            format: "png"
                        }),
                        contentUrl: (0, l.pN)({
                            width: m,
                            imageUrl: h,
                            format: "png"
                        }),
                        thumbnailUrl: (0, l.pN)({
                            width: 94,
                            imageUrl: h,
                            format: "png"
                        }),
                        width: m,
                        height: m
                    } : void 0,
                    f = y ? {
                        "@id": y["@id"]
                    } : void 0,
                    _ = (a.game.screenshots ? ? []).filter(e => e ? .image_url).map(({
                        image_url: e,
                        alt_text: t,
                        caption: a,
                        width: i,
                        height: r
                    }) => ({
                        "@type": "ImageObject",
                        "@id": s(e),
                        url: (0, l.pN)({
                            width: i,
                            height: r,
                            imageUrl: e
                        }),
                        contentUrl: (0, l.pN)({
                            width: i,
                            height: r,
                            imageUrl: e
                        }),
                        thumbnailUrl: (0, l.pN)({
                            width: 363,
                            imageUrl: e
                        }),
                        ...i ? {
                            width: i
                        } : {},
                        ...r ? {
                            height: r
                        } : {},
                        ...t ? {
                            description: t
                        } : {},
                        ...a ? {
                            caption: a
                        } : {}
                    })),
                    b = [];
                a.game.no_index && b.push("noindex"), a.game.unlisted && b.push("nosnippet");
                const w = a.game.animated_thumbnail && (0, i.getVideo)({
                        videoUrl: a.game.animated_thumbnail,
                        videoSize: "3x3"
                    }).h264,
                    v = w ? {
                        video: w,
                        "video:type": "video/mp4",
                        "video:width": 314,
                        "video:height": 314
                    } : {},
                    k = a.game.developer_games ? .map(e => {
                        const t = e.imageUrl ? ? e.image_url;
                        return t ? { ...e,
                            imageUrl: t,
                            animatedThumbnail: e.animated_thumbnail
                        } : null
                    }).filter(e => null !== e);
                return {
                    jsonLD: {
                        "@context": "https://schema.org",
                        "@graph": [{
                            "@type": "ItemPage",
                            "@id": `${c}/#ItemPage`,
                            url: c,
                            name: a.game.title,
                            description: g,
                            inLanguage: e.iso_lang,
                            breadcrumb: {
                                "@type": "BreadcrumbList",
                                itemListElement: p.map(({
                                    label: e = "",
                                    url: t = ""
                                }, a) => ({
                                    "@type": "ListItem",
                                    position: a + 1,
                                    item: {
                                        "@type": "Thing",
                                        "@id": t,
                                        name: e
                                    }
                                }))
                            },
                            ...f ? {
                                primaryImageOfPage: f,
                                image: f
                            } : {},
                            mainEntity: {
                                "@type": ["VideoGame", "WebApplication"],
                                "@id": (0, o.Wu)(a.game.id),
                                name: a.game.title,
                                description: g,
                                url: c,
                                ...f ? {
                                    image: f
                                } : {},
                                applicationCategory: "GameApplication",
                                ...a.game.genre ? .title ? {
                                    applicationSubCategory: a.game.genre.title
                                } : {},
                                ...d,
                                ...t.browser_requirements ? {
                                    browserRequirements: t.browser_requirements
                                } : {},
                                provider : (0, o.tc)(),
                                author: {
                                    "@type": "Person",
                                    name: a.game.developer
                                },
                                datePublished: a.game.release_date ? (0, r.aI)(new Date(a.game.release_date)) : void 0,
                                dateModified: a.game.version_last_updated ? (0, r.aI)(new Date(a.game.version_last_updated)) : void 0,
                                aggregateRating: a.game.rating && {
                                    "@type": "AggregateRating",
                                    worstRating: 1,
                                    bestRating: 5,
                                    ratingValue: a.game.rating.rating,
                                    ratingCount: a.game.rating.up_count + a.game.rating.down_count
                                },
                                offers: {
                                    "@type": "Offer",
                                    price: 0,
                                    priceCurrency: "EUR",
                                    availability: "https://schema.org/InStock"
                                },
                                ..._.length ? {
                                    screenshot: _
                                } : {},
                                potentialAction: {
                                    "@type": "PlayAction",
                                    name: a.game.title,
                                    target: {
                                        "@type": "EntryPoint",
                                        urlTemplate: c
                                    }
                                }
                            },
                            isPartOf: (0, o.Tz)()
                        }, ...y ? [y] : [], ..._]
                    },
                    og: {
                        title: a.game.meta.title,
                        url: c,
                        description: a.game.meta.description,
                        locale: e.locale,
                        image: u,
                        "image:width": 1200,
                        "image:height": 1200,
                        "image:type": "image/png",
                        "image:alt": `${a.game.title} - ${e.title}`,
                        site_name: "Poki",
                        type: "website",
                        ...v
                    },
                    twitter: {
                        card: "summary_large_image",
                        title: a.game.meta.title,
                        description: a.game.meta.description,
                        image: u,
                        "image:alt": `${a.game.title} - ${e.title}`,
                        site: "@Poki"
                    },
                    id: a.game.id,
                    slug: a.game.slug,
                    meta: { ...a.game.meta,
                        robots: b.join(", "),
                        canonical: c
                    },
                    description: {
                        id: a.game.id,
                        breadcrumbs: p,
                        title: a.game.title,
                        developer: a.game.developer,
                        developers: a.game.developers,
                        body: (0, n.A)(e, a.game.description),
                        tags: a.game.categories.map(({
                            title: e,
                            url: t
                        }) => ({
                            label: e,
                            url: t
                        })),
                        store_urls: a.game.store_urls,
                        rating: a.game.rating,
                        imageUrl: a.game.imageUrl,
                        privacy_policy_url: a.game.privacy_policy_url,
                        developerGames: k,
                        screenshots: a.game.screenshots
                    },
                    content: a,
                    rating: a.game.rating
                }
            }
        },
        86715(e, t, a) {
            a.d(t, {
                G: () => m
            });
            var i = a(10061),
                r = a(74606),
                n = a(36059),
                o = a(56963),
                l = a(49170);

            function m() {
                const e = (0, r.d4)(n.L7),
                    t = (0, r.d4)(o.Gd);
                return (0, i.useMemo)(() => e.map(e => function(e, t) {
                    const a = e.normal_url ? ? (0, l.AO)(t, "mystery", e.path);
                    return {
                        canReplaceGameTile: Boolean(e.playerfit_test_id && e.normal_tile && e.thumbnail),
                        preserveReplacedGameTile: !0 === e.released,
                        data: {
                            id: e.id,
                            thumbnail: e.thumbnail,
                            title: e.title,
                            showNormalTile: e.normal_tile
                        },
                        href: a,
                        mysteryPath: e.path,
                        mysteryUrl: a
                    }
                }(e, t)), [e, t])
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-PageGame-a1d170d4~de1abe9a263d06f4ad67.js.map