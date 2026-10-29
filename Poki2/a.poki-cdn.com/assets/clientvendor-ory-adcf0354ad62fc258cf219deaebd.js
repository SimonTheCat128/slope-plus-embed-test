"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1663], {
        9615(e, o, t) {
            t.d(o, {
                rc: () => d
            });
            var i = t(46977),
                n = t(38914),
                s = t(52118),
                r = function(e, o, t, i) {
                    return new(t || (t = Promise))(function(n, s) {
                        function r(e) {
                            try {
                                d(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function a(e) {
                            try {
                                d(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function d(e) {
                            var o;
                            e.done ? n(e.value) : (o = e.value, o instanceof t ? o : new t(function(e) {
                                e(o)
                            })).then(r, a)
                        }
                        d((i = i.apply(e, o || [])).next())
                    })
                };
            const a = function(e) {
                const o = function(e) {
                    return {
                        createBrowserLoginFlow: (o, t, i, s, a, d, l, c, ...u) => r(this, [o, t, i, s, a, d, l, c, ...u], void 0, function*(o, t, i, s, r, a, d, l, c = {}) {
                            const u = new URL("/self-service/login/browser", n.fY);
                            let v;
                            e && (v = e.baseOptions);
                            const h = Object.assign(Object.assign({
                                    method: "GET"
                                }, v), c),
                                g = {},
                                w = {};
                            void 0 !== o && (w.refresh = o), void 0 !== t && (w.aal = t), void 0 !== i && (w.return_to = i), void 0 !== r && (w.login_challenge = r), void 0 !== a && (w.organization = a), void 0 !== d && (w.via = d), void 0 !== l && (w.identity_schema = l), null != s && (g.Cookie = String(s)), (0, n.rZ)(u, w);
                            let b = v && v.headers ? v.headers : {};
                            return h.headers = Object.assign(Object.assign(Object.assign({}, g), b), c.headers), {
                                url: (0, n.uD)(u),
                                options: h
                            }
                        }),
                        createBrowserLogoutFlow: (o, t, ...i) => r(this, [o, t, ...i], void 0, function*(o, t, i = {}) {
                            const s = new URL("/self-service/logout/browser", n.fY);
                            let r;
                            e && (r = e.baseOptions);
                            const a = Object.assign(Object.assign({
                                    method: "GET"
                                }, r), i),
                                d = {},
                                l = {};
                            void 0 !== t && (l.return_to = t), null != o && (d.cookie = String(o)), (0, n.rZ)(s, l);
                            let c = r && r.headers ? r.headers : {};
                            return a.headers = Object.assign(Object.assign(Object.assign({}, d), c), i.headers), {
                                url: (0, n.uD)(s),
                                options: a
                            }
                        }),
                        createBrowserRecoveryFlow: (o, t, ...i) => r(this, [o, t, ...i], void 0, function*(o, t, i = {}) {
                            const s = new URL("/self-service/recovery/browser", n.fY);
                            let r;
                            e && (r = e.baseOptions);
                            const a = Object.assign(Object.assign({
                                    method: "GET"
                                }, r), i),
                                d = {};
                            void 0 !== o && (d.return_to = o), void 0 !== t && (d.skip_settings = t), (0, n.rZ)(s, d);
                            let l = r && r.headers ? r.headers : {};
                            return a.headers = Object.assign(Object.assign(Object.assign({}, {}), l), i.headers), {
                                url: (0, n.uD)(s),
                                options: a
                            }
                        }),
                        createBrowserRegistrationFlow: (o, t, i, s, a, ...d) => r(this, [o, t, i, s, a, ...d], void 0, function*(o, t, i, s, r, a = {}) {
                            const d = new URL("/self-service/registration/browser", n.fY);
                            let l;
                            e && (l = e.baseOptions);
                            const c = Object.assign(Object.assign({
                                    method: "GET"
                                }, l), a),
                                u = {};
                            void 0 !== o && (u.return_to = o), void 0 !== t && (u.login_challenge = t), void 0 !== i && (u.after_verification_return_to = i), void 0 !== s && (u.organization = s), void 0 !== r && (u.identity_schema = r), (0, n.rZ)(d, u);
                            let v = l && l.headers ? l.headers : {};
                            return c.headers = Object.assign(Object.assign(Object.assign({}, {}), v), a.headers), {
                                url: (0, n.uD)(d),
                                options: c
                            }
                        }),
                        createBrowserSettingsFlow: (o, t, ...i) => r(this, [o, t, ...i], void 0, function*(o, t, i = {}) {
                            const s = new URL("/self-service/settings/browser", n.fY);
                            let r;
                            e && (r = e.baseOptions);
                            const a = Object.assign(Object.assign({
                                    method: "GET"
                                }, r), i),
                                d = {},
                                l = {};
                            void 0 !== o && (l.return_to = o), null != t && (d.Cookie = String(t)), (0, n.rZ)(s, l);
                            let c = r && r.headers ? r.headers : {};
                            return a.headers = Object.assign(Object.assign(Object.assign({}, d), c), i.headers), {
                                url: (0, n.uD)(s),
                                options: a
                            }
                        }),
                        createBrowserVerificationFlow: (o, ...t) => r(this, [o, ...t], void 0, function*(o, t = {}) {
                            const i = new URL("/self-service/verification/browser", n.fY);
                            let s;
                            e && (s = e.baseOptions);
                            const r = Object.assign(Object.assign({
                                    method: "GET"
                                }, s), t),
                                a = {};
                            void 0 !== o && (a.return_to = o), (0, n.rZ)(i, a);
                            let d = s && s.headers ? s.headers : {};
                            return r.headers = Object.assign(Object.assign(Object.assign({}, {}), d), t.headers), {
                                url: (0, n.uD)(i),
                                options: r
                            }
                        }),
                        createFedcmFlow: (...o) => r(this, [...o], void 0, function*(o = {}) {
                            const t = new URL("/self-service/fed-cm/parameters", n.fY);
                            let i;
                            e && (i = e.baseOptions);
                            const s = Object.assign(Object.assign({
                                method: "GET"
                            }, i), o);
                            (0, n.rZ)(t, {});
                            let r = i && i.headers ? i.headers : {};
                            return s.headers = Object.assign(Object.assign(Object.assign({}, {}), r), o.headers), {
                                url: (0, n.uD)(t),
                                options: s
                            }
                        }),
                        createNativeLoginFlow: (o, t, i, s, a, d, l, c, ...u) => r(this, [o, t, i, s, a, d, l, c, ...u], void 0, function*(o, t, i, s, r, a, d, l, c = {}) {
                            const u = new URL("/self-service/login/api", n.fY);
                            let v;
                            e && (v = e.baseOptions);
                            const h = Object.assign(Object.assign({
                                    method: "GET"
                                }, v), c),
                                g = {},
                                w = {};
                            void 0 !== o && (w.refresh = o), void 0 !== t && (w.aal = t), void 0 !== s && (w.return_session_token_exchange_code = s), void 0 !== r && (w.return_to = r), void 0 !== a && (w.organization = a), void 0 !== d && (w.via = d), void 0 !== l && (w.identity_schema = l), null != i && (g["X-Session-Token"] = String(i)), (0, n.rZ)(u, w);
                            let b = v && v.headers ? v.headers : {};
                            return h.headers = Object.assign(Object.assign(Object.assign({}, g), b), c.headers), {
                                url: (0, n.uD)(u),
                                options: h
                            }
                        }),
                        createNativeRecoveryFlow: (...o) => r(this, [...o], void 0, function*(o = {}) {
                            const t = new URL("/self-service/recovery/api", n.fY);
                            let i;
                            e && (i = e.baseOptions);
                            const s = Object.assign(Object.assign({
                                method: "GET"
                            }, i), o);
                            (0, n.rZ)(t, {});
                            let r = i && i.headers ? i.headers : {};
                            return s.headers = Object.assign(Object.assign(Object.assign({}, {}), r), o.headers), {
                                url: (0, n.uD)(t),
                                options: s
                            }
                        }),
                        createNativeRegistrationFlow: (o, t, i, s, ...a) => r(this, [o, t, i, s, ...a], void 0, function*(o, t, i, s, r = {}) {
                            const a = new URL("/self-service/registration/api", n.fY);
                            let d;
                            e && (d = e.baseOptions);
                            const l = Object.assign(Object.assign({
                                    method: "GET"
                                }, d), r),
                                c = {};
                            void 0 !== o && (c.return_session_token_exchange_code = o), void 0 !== t && (c.return_to = t), void 0 !== i && (c.organization = i), void 0 !== s && (c.identity_schema = s), (0, n.rZ)(a, c);
                            let u = d && d.headers ? d.headers : {};
                            return l.headers = Object.assign(Object.assign(Object.assign({}, {}), u), r.headers), {
                                url: (0, n.uD)(a),
                                options: l
                            }
                        }),
                        createNativeSettingsFlow: (o, ...t) => r(this, [o, ...t], void 0, function*(o, t = {}) {
                            const i = new URL("/self-service/settings/api", n.fY);
                            let s;
                            e && (s = e.baseOptions);
                            const r = Object.assign(Object.assign({
                                    method: "GET"
                                }, s), t),
                                a = {};
                            null != o && (a["X-Session-Token"] = String(o)), (0, n.rZ)(i, {});
                            let d = s && s.headers ? s.headers : {};
                            return r.headers = Object.assign(Object.assign(Object.assign({}, a), d), t.headers), {
                                url: (0, n.uD)(i),
                                options: r
                            }
                        }),
                        createNativeVerificationFlow: (o, ...t) => r(this, [o, ...t], void 0, function*(o, t = {}) {
                            const i = new URL("/self-service/verification/api", n.fY);
                            let s;
                            e && (s = e.baseOptions);
                            const r = Object.assign(Object.assign({
                                    method: "GET"
                                }, s), t),
                                a = {};
                            void 0 !== o && (a.return_to = o), (0, n.rZ)(i, a);
                            let d = s && s.headers ? s.headers : {};
                            return r.headers = Object.assign(Object.assign(Object.assign({}, {}), d), t.headers), {
                                url: (0, n.uD)(i),
                                options: r
                            }
                        }),
                        disableMyOtherSessions: (o, t, ...i) => r(this, [o, t, ...i], void 0, function*(o, t, i = {}) {
                            const s = new URL("/sessions", n.fY);
                            let r;
                            e && (r = e.baseOptions);
                            const a = Object.assign(Object.assign({
                                    method: "DELETE"
                                }, r), i),
                                d = {};
                            null != o && (d["X-Session-Token"] = String(o)), null != t && (d.Cookie = String(t)), (0, n.rZ)(s, {});
                            let l = r && r.headers ? r.headers : {};
                            return a.headers = Object.assign(Object.assign(Object.assign({}, d), l), i.headers), {
                                url: (0, n.uD)(s),
                                options: a
                            }
                        }),
                        disableMySession: (o, t, i, ...s) => r(this, [o, t, i, ...s], void 0, function*(o, t, i, s = {}) {
                            (0, n.WC)("disableMySession", "id", o);
                            const r = "/sessions/{id}".replace("{id}", encodeURIComponent(String(o))),
                                a = new URL(r, n.fY);
                            let d;
                            e && (d = e.baseOptions);
                            const l = Object.assign(Object.assign({
                                    method: "DELETE"
                                }, d), s),
                                c = {};
                            null != t && (c["X-Session-Token"] = String(t)), null != i && (c.Cookie = String(i)), (0, n.rZ)(a, {});
                            let u = d && d.headers ? d.headers : {};
                            return l.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                                url: (0, n.uD)(a),
                                options: l
                            }
                        }),
                        exchangeSessionToken: (o, t, ...i) => r(this, [o, t, ...i], void 0, function*(o, t, i = {}) {
                            (0, n.WC)("exchangeSessionToken", "initCode", o), (0, n.WC)("exchangeSessionToken", "returnToCode", t);
                            const s = new URL("/sessions/token-exchange", n.fY);
                            let r;
                            e && (r = e.baseOptions);
                            const a = Object.assign(Object.assign({
                                    method: "GET"
                                }, r), i),
                                d = {};
                            void 0 !== o && (d.init_code = o), void 0 !== t && (d.return_to_code = t), (0, n.rZ)(s, d);
                            let l = r && r.headers ? r.headers : {};
                            return a.headers = Object.assign(Object.assign(Object.assign({}, {}), l), i.headers), {
                                url: (0, n.uD)(s),
                                options: a
                            }
                        }),
                        getFlowError: (o, ...t) => r(this, [o, ...t], void 0, function*(o, t = {}) {
                            (0, n.WC)("getFlowError", "id", o);
                            const i = new URL("/self-service/errors", n.fY);
                            let s;
                            e && (s = e.baseOptions);
                            const r = Object.assign(Object.assign({
                                    method: "GET"
                                }, s), t),
                                a = {};
                            void 0 !== o && (a.id = o), (0, n.rZ)(i, a);
                            let d = s && s.headers ? s.headers : {};
                            return r.headers = Object.assign(Object.assign(Object.assign({}, {}), d), t.headers), {
                                url: (0, n.uD)(i),
                                options: r
                            }
                        }),
                        getLoginFlow: (o, t, ...i) => r(this, [o, t, ...i], void 0, function*(o, t, i = {}) {
                            (0, n.WC)("getLoginFlow", "id", o);
                            const s = new URL("/self-service/login/flows", n.fY);
                            let r;
                            e && (r = e.baseOptions);
                            const a = Object.assign(Object.assign({
                                    method: "GET"
                                }, r), i),
                                d = {},
                                l = {};
                            void 0 !== o && (l.id = o), null != t && (d.Cookie = String(t)), (0, n.rZ)(s, l);
                            let c = r && r.headers ? r.headers : {};
                            return a.headers = Object.assign(Object.assign(Object.assign({}, d), c), i.headers), {
                                url: (0, n.uD)(s),
                                options: a
                            }
                        }),
                        getRecoveryFlow: (o, t, ...i) => r(this, [o, t, ...i], void 0, function*(o, t, i = {}) {
                            (0, n.WC)("getRecoveryFlow", "id", o);
                            const s = new URL("/self-service/recovery/flows", n.fY);
                            let r;
                            e && (r = e.baseOptions);
                            const a = Object.assign(Object.assign({
                                    method: "GET"
                                }, r), i),
                                d = {},
                                l = {};
                            void 0 !== o && (l.id = o), null != t && (d.Cookie = String(t)), (0, n.rZ)(s, l);
                            let c = r && r.headers ? r.headers : {};
                            return a.headers = Object.assign(Object.assign(Object.assign({}, d), c), i.headers), {
                                url: (0, n.uD)(s),
                                options: a
                            }
                        }),
                        getRegistrationFlow: (o, t, ...i) => r(this, [o, t, ...i], void 0, function*(o, t, i = {}) {
                            (0, n.WC)("getRegistrationFlow", "id", o);
                            const s = new URL("/self-service/registration/flows", n.fY);
                            let r;
                            e && (r = e.baseOptions);
                            const a = Object.assign(Object.assign({
                                    method: "GET"
                                }, r), i),
                                d = {},
                                l = {};
                            void 0 !== o && (l.id = o), null != t && (d.Cookie = String(t)), (0, n.rZ)(s, l);
                            let c = r && r.headers ? r.headers : {};
                            return a.headers = Object.assign(Object.assign(Object.assign({}, d), c), i.headers), {
                                url: (0, n.uD)(s),
                                options: a
                            }
                        }),
                        getSettingsFlow: (o, t, i, ...s) => r(this, [o, t, i, ...s], void 0, function*(o, t, i, s = {}) {
                            (0, n.WC)("getSettingsFlow", "id", o);
                            const r = new URL("/self-service/settings/flows", n.fY);
                            let a;
                            e && (a = e.baseOptions);
                            const d = Object.assign(Object.assign({
                                    method: "GET"
                                }, a), s),
                                l = {},
                                c = {};
                            void 0 !== o && (c.id = o), null != t && (l["X-Session-Token"] = String(t)), null != i && (l.Cookie = String(i)), (0, n.rZ)(r, c);
                            let u = a && a.headers ? a.headers : {};
                            return d.headers = Object.assign(Object.assign(Object.assign({}, l), u), s.headers), {
                                url: (0, n.uD)(r),
                                options: d
                            }
                        }),
                        getVerificationFlow: (o, t, ...i) => r(this, [o, t, ...i], void 0, function*(o, t, i = {}) {
                            (0, n.WC)("getVerificationFlow", "id", o);
                            const s = new URL("/self-service/verification/flows", n.fY);
                            let r;
                            e && (r = e.baseOptions);
                            const a = Object.assign(Object.assign({
                                    method: "GET"
                                }, r), i),
                                d = {},
                                l = {};
                            void 0 !== o && (l.id = o), null != t && (d.cookie = String(t)), (0, n.rZ)(s, l);
                            let c = r && r.headers ? r.headers : {};
                            return a.headers = Object.assign(Object.assign(Object.assign({}, d), c), i.headers), {
                                url: (0, n.uD)(s),
                                options: a
                            }
                        }),
                        getWebAuthnJavaScript: (...o) => r(this, [...o], void 0, function*(o = {}) {
                            const t = new URL("/.well-known/ory/webauthn.js", n.fY);
                            let i;
                            e && (i = e.baseOptions);
                            const s = Object.assign(Object.assign({
                                method: "GET"
                            }, i), o);
                            (0, n.rZ)(t, {});
                            let r = i && i.headers ? i.headers : {};
                            return s.headers = Object.assign(Object.assign(Object.assign({}, {}), r), o.headers), {
                                url: (0, n.uD)(t),
                                options: s
                            }
                        }),
                        listMySessions: (o, t, i, s, a, d, ...l) => r(this, [o, t, i, s, a, d, ...l], void 0, function*(o, t, i, s, r, a, d = {}) {
                            const l = new URL("/sessions", n.fY);
                            let c;
                            e && (c = e.baseOptions);
                            const u = Object.assign(Object.assign({
                                    method: "GET"
                                }, c), d),
                                v = {},
                                h = {};
                            void 0 !== o && (h.per_page = o), void 0 !== t && (h.page = t), void 0 !== i && (h.page_size = i), void 0 !== s && (h.page_token = s), null != r && (v["X-Session-Token"] = String(r)), null != a && (v.Cookie = String(a)), (0, n.rZ)(l, h);
                            let g = c && c.headers ? c.headers : {};
                            return u.headers = Object.assign(Object.assign(Object.assign({}, v), g), d.headers), {
                                url: (0, n.uD)(l),
                                options: u
                            }
                        }),
                        performNativeLogout: (o, ...t) => r(this, [o, ...t], void 0, function*(o, t = {}) {
                            (0, n.WC)("performNativeLogout", "performNativeLogoutBody", o);
                            const i = new URL("/self-service/logout/api", n.fY);
                            let s;
                            e && (s = e.baseOptions);
                            const r = Object.assign(Object.assign({
                                    method: "DELETE"
                                }, s), t),
                                a = {
                                    "Content-Type": "application/json"
                                };
                            (0, n.rZ)(i, {});
                            let d = s && s.headers ? s.headers : {};
                            return r.headers = Object.assign(Object.assign(Object.assign({}, a), d), t.headers), r.data = (0, n.Np)(o, r, e), {
                                url: (0, n.uD)(i),
                                options: r
                            }
                        }),
                        toSession: (o, t, i, ...s) => r(this, [o, t, i, ...s], void 0, function*(o, t, i, s = {}) {
                            const r = new URL("/sessions/whoami", n.fY);
                            let a;
                            e && (a = e.baseOptions);
                            const d = Object.assign(Object.assign({
                                    method: "GET"
                                }, a), s),
                                l = {},
                                c = {};
                            void 0 !== i && (c.tokenize_as = i), null != o && (l["X-Session-Token"] = String(o)), null != t && (l.Cookie = String(t)), (0, n.rZ)(r, c);
                            let u = a && a.headers ? a.headers : {};
                            return d.headers = Object.assign(Object.assign(Object.assign({}, l), u), s.headers), {
                                url: (0, n.uD)(r),
                                options: d
                            }
                        }),
                        updateFedcmFlow: (o, ...t) => r(this, [o, ...t], void 0, function*(o, t = {}) {
                            (0, n.WC)("updateFedcmFlow", "updateFedcmFlowBody", o);
                            const i = new URL("/self-service/fed-cm/token", n.fY);
                            let s;
                            e && (s = e.baseOptions);
                            const r = Object.assign(Object.assign({
                                    method: "POST"
                                }, s), t),
                                a = {
                                    "Content-Type": "application/json"
                                };
                            (0, n.rZ)(i, {});
                            let d = s && s.headers ? s.headers : {};
                            return r.headers = Object.assign(Object.assign(Object.assign({}, a), d), t.headers), r.data = (0, n.Np)(o, r, e), {
                                url: (0, n.uD)(i),
                                options: r
                            }
                        }),
                        updateLoginFlow: (o, t, i, s, ...a) => r(this, [o, t, i, s, ...a], void 0, function*(o, t, i, s, r = {}) {
                            (0, n.WC)("updateLoginFlow", "flow", o), (0, n.WC)("updateLoginFlow", "updateLoginFlowBody", t);
                            const a = new URL("/self-service/login", n.fY);
                            let d;
                            e && (d = e.baseOptions);
                            const l = Object.assign(Object.assign({
                                    method: "POST"
                                }, d), r),
                                c = {},
                                u = {};
                            void 0 !== o && (u.flow = o), c["Content-Type"] = "application/json", null != i && (c["X-Session-Token"] = String(i)), null != s && (c.Cookie = String(s)), (0, n.rZ)(a, u);
                            let v = d && d.headers ? d.headers : {};
                            return l.headers = Object.assign(Object.assign(Object.assign({}, c), v), r.headers), l.data = (0, n.Np)(t, l, e), {
                                url: (0, n.uD)(a),
                                options: l
                            }
                        }),
                        updateLogoutFlow: (o, t, i, ...s) => r(this, [o, t, i, ...s], void 0, function*(o, t, i, s = {}) {
                            const r = new URL("/self-service/logout", n.fY);
                            let a;
                            e && (a = e.baseOptions);
                            const d = Object.assign(Object.assign({
                                    method: "GET"
                                }, a), s),
                                l = {},
                                c = {};
                            void 0 !== o && (c.token = o), void 0 !== t && (c.return_to = t), null != i && (l.Cookie = String(i)), (0, n.rZ)(r, c);
                            let u = a && a.headers ? a.headers : {};
                            return d.headers = Object.assign(Object.assign(Object.assign({}, l), u), s.headers), {
                                url: (0, n.uD)(r),
                                options: d
                            }
                        }),
                        updateRecoveryFlow: (o, t, i, s, ...a) => r(this, [o, t, i, s, ...a], void 0, function*(o, t, i, s, r = {}) {
                            (0, n.WC)("updateRecoveryFlow", "flow", o), (0, n.WC)("updateRecoveryFlow", "updateRecoveryFlowBody", t);
                            const a = new URL("/self-service/recovery", n.fY);
                            let d;
                            e && (d = e.baseOptions);
                            const l = Object.assign(Object.assign({
                                    method: "POST"
                                }, d), r),
                                c = {},
                                u = {};
                            void 0 !== o && (u.flow = o), void 0 !== i && (u.token = i), c["Content-Type"] = "application/json", null != s && (c.Cookie = String(s)), (0, n.rZ)(a, u);
                            let v = d && d.headers ? d.headers : {};
                            return l.headers = Object.assign(Object.assign(Object.assign({}, c), v), r.headers), l.data = (0, n.Np)(t, l, e), {
                                url: (0, n.uD)(a),
                                options: l
                            }
                        }),
                        updateRegistrationFlow: (o, t, i, ...s) => r(this, [o, t, i, ...s], void 0, function*(o, t, i, s = {}) {
                            (0, n.WC)("updateRegistrationFlow", "flow", o), (0, n.WC)("updateRegistrationFlow", "updateRegistrationFlowBody", t);
                            const r = new URL("/self-service/registration", n.fY);
                            let a;
                            e && (a = e.baseOptions);
                            const d = Object.assign(Object.assign({
                                    method: "POST"
                                }, a), s),
                                l = {},
                                c = {};
                            void 0 !== o && (c.flow = o), l["Content-Type"] = "application/json", null != i && (l.Cookie = String(i)), (0, n.rZ)(r, c);
                            let u = a && a.headers ? a.headers : {};
                            return d.headers = Object.assign(Object.assign(Object.assign({}, l), u), s.headers), d.data = (0, n.Np)(t, d, e), {
                                url: (0, n.uD)(r),
                                options: d
                            }
                        }),
                        updateSettingsFlow: (o, t, i, s, ...a) => r(this, [o, t, i, s, ...a], void 0, function*(o, t, i, s, r = {}) {
                            (0, n.WC)("updateSettingsFlow", "flow", o), (0, n.WC)("updateSettingsFlow", "updateSettingsFlowBody", t);
                            const a = new URL("/self-service/settings", n.fY);
                            let d;
                            e && (d = e.baseOptions);
                            const l = Object.assign(Object.assign({
                                    method: "POST"
                                }, d), r),
                                c = {},
                                u = {};
                            void 0 !== o && (u.flow = o), c["Content-Type"] = "application/json", null != i && (c["X-Session-Token"] = String(i)), null != s && (c.Cookie = String(s)), (0, n.rZ)(a, u);
                            let v = d && d.headers ? d.headers : {};
                            return l.headers = Object.assign(Object.assign(Object.assign({}, c), v), r.headers), l.data = (0, n.Np)(t, l, e), {
                                url: (0, n.uD)(a),
                                options: l
                            }
                        }),
                        updateVerificationFlow: (o, t, i, s, ...a) => r(this, [o, t, i, s, ...a], void 0, function*(o, t, i, s, r = {}) {
                            (0, n.WC)("updateVerificationFlow", "flow", o), (0, n.WC)("updateVerificationFlow", "updateVerificationFlowBody", t);
                            const a = new URL("/self-service/verification", n.fY);
                            let d;
                            e && (d = e.baseOptions);
                            const l = Object.assign(Object.assign({
                                    method: "POST"
                                }, d), r),
                                c = {},
                                u = {};
                            void 0 !== o && (u.flow = o), void 0 !== i && (u.token = i), c["Content-Type"] = "application/json", null != s && (c.Cookie = String(s)), (0, n.rZ)(a, u);
                            let v = d && d.headers ? d.headers : {};
                            return l.headers = Object.assign(Object.assign(Object.assign({}, c), v), r.headers), l.data = (0, n.Np)(t, l, e), {
                                url: (0, n.uD)(a),
                                options: l
                            }
                        })
                    }
                }(e);
                return {
                    createBrowserLoginFlow(t, a, d, l, c, u, v, h, g) {
                        return r(this, void 0, void 0, function*() {
                            var r, w, b;
                            const f = yield o.createBrowserLoginFlow(t, a, d, l, c, u, v, h, g), p = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, F = null === (b = null === (w = s.z9["FrontendApi.createBrowserLoginFlow"]) || void 0 === w ? void 0 : w[p]) || void 0 === b ? void 0 : b.url;
                            return (o, t) => (0, n.yZ)(f, i.A, s.o2, e)(o, F || t)
                        })
                    },
                    createBrowserLogoutFlow(t, a, d) {
                        return r(this, void 0, void 0, function*() {
                            var r, l, c;
                            const u = yield o.createBrowserLogoutFlow(t, a, d), v = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, h = null === (c = null === (l = s.z9["FrontendApi.createBrowserLogoutFlow"]) || void 0 === l ? void 0 : l[v]) || void 0 === c ? void 0 : c.url;
                            return (o, t) => (0, n.yZ)(u, i.A, s.o2, e)(o, h || t)
                        })
                    },
                    createBrowserRecoveryFlow(t, a, d) {
                        return r(this, void 0, void 0, function*() {
                            var r, l, c;
                            const u = yield o.createBrowserRecoveryFlow(t, a, d), v = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, h = null === (c = null === (l = s.z9["FrontendApi.createBrowserRecoveryFlow"]) || void 0 === l ? void 0 : l[v]) || void 0 === c ? void 0 : c.url;
                            return (o, t) => (0, n.yZ)(u, i.A, s.o2, e)(o, h || t)
                        })
                    },
                    createBrowserRegistrationFlow(t, a, d, l, c, u) {
                        return r(this, void 0, void 0, function*() {
                            var r, v, h;
                            const g = yield o.createBrowserRegistrationFlow(t, a, d, l, c, u), w = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, b = null === (h = null === (v = s.z9["FrontendApi.createBrowserRegistrationFlow"]) || void 0 === v ? void 0 : v[w]) || void 0 === h ? void 0 : h.url;
                            return (o, t) => (0, n.yZ)(g, i.A, s.o2, e)(o, b || t)
                        })
                    },
                    createBrowserSettingsFlow(t, a, d) {
                        return r(this, void 0, void 0, function*() {
                            var r, l, c;
                            const u = yield o.createBrowserSettingsFlow(t, a, d), v = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, h = null === (c = null === (l = s.z9["FrontendApi.createBrowserSettingsFlow"]) || void 0 === l ? void 0 : l[v]) || void 0 === c ? void 0 : c.url;
                            return (o, t) => (0, n.yZ)(u, i.A, s.o2, e)(o, h || t)
                        })
                    },
                    createBrowserVerificationFlow(t, a) {
                        return r(this, void 0, void 0, function*() {
                            var r, d, l;
                            const c = yield o.createBrowserVerificationFlow(t, a), u = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, v = null === (l = null === (d = s.z9["FrontendApi.createBrowserVerificationFlow"]) || void 0 === d ? void 0 : d[u]) || void 0 === l ? void 0 : l.url;
                            return (o, t) => (0, n.yZ)(c, i.A, s.o2, e)(o, v || t)
                        })
                    },
                    createFedcmFlow(t) {
                        return r(this, void 0, void 0, function*() {
                            var r, a, d;
                            const l = yield o.createFedcmFlow(t), c = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, u = null === (d = null === (a = s.z9["FrontendApi.createFedcmFlow"]) || void 0 === a ? void 0 : a[c]) || void 0 === d ? void 0 : d.url;
                            return (o, t) => (0, n.yZ)(l, i.A, s.o2, e)(o, u || t)
                        })
                    },
                    createNativeLoginFlow(t, a, d, l, c, u, v, h, g) {
                        return r(this, void 0, void 0, function*() {
                            var r, w, b;
                            const f = yield o.createNativeLoginFlow(t, a, d, l, c, u, v, h, g), p = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, F = null === (b = null === (w = s.z9["FrontendApi.createNativeLoginFlow"]) || void 0 === w ? void 0 : w[p]) || void 0 === b ? void 0 : b.url;
                            return (o, t) => (0, n.yZ)(f, i.A, s.o2, e)(o, F || t)
                        })
                    },
                    createNativeRecoveryFlow(t) {
                        return r(this, void 0, void 0, function*() {
                            var r, a, d;
                            const l = yield o.createNativeRecoveryFlow(t), c = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, u = null === (d = null === (a = s.z9["FrontendApi.createNativeRecoveryFlow"]) || void 0 === a ? void 0 : a[c]) || void 0 === d ? void 0 : d.url;
                            return (o, t) => (0, n.yZ)(l, i.A, s.o2, e)(o, u || t)
                        })
                    },
                    createNativeRegistrationFlow(t, a, d, l, c) {
                        return r(this, void 0, void 0, function*() {
                            var r, u, v;
                            const h = yield o.createNativeRegistrationFlow(t, a, d, l, c), g = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, w = null === (v = null === (u = s.z9["FrontendApi.createNativeRegistrationFlow"]) || void 0 === u ? void 0 : u[g]) || void 0 === v ? void 0 : v.url;
                            return (o, t) => (0, n.yZ)(h, i.A, s.o2, e)(o, w || t)
                        })
                    },
                    createNativeSettingsFlow(t, a) {
                        return r(this, void 0, void 0, function*() {
                            var r, d, l;
                            const c = yield o.createNativeSettingsFlow(t, a), u = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, v = null === (l = null === (d = s.z9["FrontendApi.createNativeSettingsFlow"]) || void 0 === d ? void 0 : d[u]) || void 0 === l ? void 0 : l.url;
                            return (o, t) => (0, n.yZ)(c, i.A, s.o2, e)(o, v || t)
                        })
                    },
                    createNativeVerificationFlow(t, a) {
                        return r(this, void 0, void 0, function*() {
                            var r, d, l;
                            const c = yield o.createNativeVerificationFlow(t, a), u = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, v = null === (l = null === (d = s.z9["FrontendApi.createNativeVerificationFlow"]) || void 0 === d ? void 0 : d[u]) || void 0 === l ? void 0 : l.url;
                            return (o, t) => (0, n.yZ)(c, i.A, s.o2, e)(o, v || t)
                        })
                    },
                    disableMyOtherSessions(t, a, d) {
                        return r(this, void 0, void 0, function*() {
                            var r, l, c;
                            const u = yield o.disableMyOtherSessions(t, a, d), v = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, h = null === (c = null === (l = s.z9["FrontendApi.disableMyOtherSessions"]) || void 0 === l ? void 0 : l[v]) || void 0 === c ? void 0 : c.url;
                            return (o, t) => (0, n.yZ)(u, i.A, s.o2, e)(o, h || t)
                        })
                    },
                    disableMySession(t, a, d, l) {
                        return r(this, void 0, void 0, function*() {
                            var r, c, u;
                            const v = yield o.disableMySession(t, a, d, l), h = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, g = null === (u = null === (c = s.z9["FrontendApi.disableMySession"]) || void 0 === c ? void 0 : c[h]) || void 0 === u ? void 0 : u.url;
                            return (o, t) => (0, n.yZ)(v, i.A, s.o2, e)(o, g || t)
                        })
                    },
                    exchangeSessionToken(t, a, d) {
                        return r(this, void 0, void 0, function*() {
                            var r, l, c;
                            const u = yield o.exchangeSessionToken(t, a, d), v = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, h = null === (c = null === (l = s.z9["FrontendApi.exchangeSessionToken"]) || void 0 === l ? void 0 : l[v]) || void 0 === c ? void 0 : c.url;
                            return (o, t) => (0, n.yZ)(u, i.A, s.o2, e)(o, h || t)
                        })
                    },
                    getFlowError(t, a) {
                        return r(this, void 0, void 0, function*() {
                            var r, d, l;
                            const c = yield o.getFlowError(t, a), u = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, v = null === (l = null === (d = s.z9["FrontendApi.getFlowError"]) || void 0 === d ? void 0 : d[u]) || void 0 === l ? void 0 : l.url;
                            return (o, t) => (0, n.yZ)(c, i.A, s.o2, e)(o, v || t)
                        })
                    },
                    getLoginFlow(t, a, d) {
                        return r(this, void 0, void 0, function*() {
                            var r, l, c;
                            const u = yield o.getLoginFlow(t, a, d), v = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, h = null === (c = null === (l = s.z9["FrontendApi.getLoginFlow"]) || void 0 === l ? void 0 : l[v]) || void 0 === c ? void 0 : c.url;
                            return (o, t) => (0, n.yZ)(u, i.A, s.o2, e)(o, h || t)
                        })
                    },
                    getRecoveryFlow(t, a, d) {
                        return r(this, void 0, void 0, function*() {
                            var r, l, c;
                            const u = yield o.getRecoveryFlow(t, a, d), v = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, h = null === (c = null === (l = s.z9["FrontendApi.getRecoveryFlow"]) || void 0 === l ? void 0 : l[v]) || void 0 === c ? void 0 : c.url;
                            return (o, t) => (0, n.yZ)(u, i.A, s.o2, e)(o, h || t)
                        })
                    },
                    getRegistrationFlow(t, a, d) {
                        return r(this, void 0, void 0, function*() {
                            var r, l, c;
                            const u = yield o.getRegistrationFlow(t, a, d), v = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, h = null === (c = null === (l = s.z9["FrontendApi.getRegistrationFlow"]) || void 0 === l ? void 0 : l[v]) || void 0 === c ? void 0 : c.url;
                            return (o, t) => (0, n.yZ)(u, i.A, s.o2, e)(o, h || t)
                        })
                    },
                    getSettingsFlow(t, a, d, l) {
                        return r(this, void 0, void 0, function*() {
                            var r, c, u;
                            const v = yield o.getSettingsFlow(t, a, d, l), h = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, g = null === (u = null === (c = s.z9["FrontendApi.getSettingsFlow"]) || void 0 === c ? void 0 : c[h]) || void 0 === u ? void 0 : u.url;
                            return (o, t) => (0, n.yZ)(v, i.A, s.o2, e)(o, g || t)
                        })
                    },
                    getVerificationFlow(t, a, d) {
                        return r(this, void 0, void 0, function*() {
                            var r, l, c;
                            const u = yield o.getVerificationFlow(t, a, d), v = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, h = null === (c = null === (l = s.z9["FrontendApi.getVerificationFlow"]) || void 0 === l ? void 0 : l[v]) || void 0 === c ? void 0 : c.url;
                            return (o, t) => (0, n.yZ)(u, i.A, s.o2, e)(o, h || t)
                        })
                    },
                    getWebAuthnJavaScript(t) {
                        return r(this, void 0, void 0, function*() {
                            var r, a, d;
                            const l = yield o.getWebAuthnJavaScript(t), c = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, u = null === (d = null === (a = s.z9["FrontendApi.getWebAuthnJavaScript"]) || void 0 === a ? void 0 : a[c]) || void 0 === d ? void 0 : d.url;
                            return (o, t) => (0, n.yZ)(l, i.A, s.o2, e)(o, u || t)
                        })
                    },
                    listMySessions(t, a, d, l, c, u, v) {
                        return r(this, void 0, void 0, function*() {
                            var r, h, g;
                            const w = yield o.listMySessions(t, a, d, l, c, u, v), b = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, f = null === (g = null === (h = s.z9["FrontendApi.listMySessions"]) || void 0 === h ? void 0 : h[b]) || void 0 === g ? void 0 : g.url;
                            return (o, t) => (0, n.yZ)(w, i.A, s.o2, e)(o, f || t)
                        })
                    },
                    performNativeLogout(t, a) {
                        return r(this, void 0, void 0, function*() {
                            var r, d, l;
                            const c = yield o.performNativeLogout(t, a), u = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, v = null === (l = null === (d = s.z9["FrontendApi.performNativeLogout"]) || void 0 === d ? void 0 : d[u]) || void 0 === l ? void 0 : l.url;
                            return (o, t) => (0, n.yZ)(c, i.A, s.o2, e)(o, v || t)
                        })
                    },
                    toSession(t, a, d, l) {
                        return r(this, void 0, void 0, function*() {
                            var r, c, u;
                            const v = yield o.toSession(t, a, d, l), h = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, g = null === (u = null === (c = s.z9["FrontendApi.toSession"]) || void 0 === c ? void 0 : c[h]) || void 0 === u ? void 0 : u.url;
                            return (o, t) => (0, n.yZ)(v, i.A, s.o2, e)(o, g || t)
                        })
                    },
                    updateFedcmFlow(t, a) {
                        return r(this, void 0, void 0, function*() {
                            var r, d, l;
                            const c = yield o.updateFedcmFlow(t, a), u = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, v = null === (l = null === (d = s.z9["FrontendApi.updateFedcmFlow"]) || void 0 === d ? void 0 : d[u]) || void 0 === l ? void 0 : l.url;
                            return (o, t) => (0, n.yZ)(c, i.A, s.o2, e)(o, v || t)
                        })
                    },
                    updateLoginFlow(t, a, d, l, c) {
                        return r(this, void 0, void 0, function*() {
                            var r, u, v;
                            const h = yield o.updateLoginFlow(t, a, d, l, c), g = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, w = null === (v = null === (u = s.z9["FrontendApi.updateLoginFlow"]) || void 0 === u ? void 0 : u[g]) || void 0 === v ? void 0 : v.url;
                            return (o, t) => (0, n.yZ)(h, i.A, s.o2, e)(o, w || t)
                        })
                    },
                    updateLogoutFlow(t, a, d, l) {
                        return r(this, void 0, void 0, function*() {
                            var r, c, u;
                            const v = yield o.updateLogoutFlow(t, a, d, l), h = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, g = null === (u = null === (c = s.z9["FrontendApi.updateLogoutFlow"]) || void 0 === c ? void 0 : c[h]) || void 0 === u ? void 0 : u.url;
                            return (o, t) => (0, n.yZ)(v, i.A, s.o2, e)(o, g || t)
                        })
                    },
                    updateRecoveryFlow(t, a, d, l, c) {
                        return r(this, void 0, void 0, function*() {
                            var r, u, v;
                            const h = yield o.updateRecoveryFlow(t, a, d, l, c), g = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, w = null === (v = null === (u = s.z9["FrontendApi.updateRecoveryFlow"]) || void 0 === u ? void 0 : u[g]) || void 0 === v ? void 0 : v.url;
                            return (o, t) => (0, n.yZ)(h, i.A, s.o2, e)(o, w || t)
                        })
                    },
                    updateRegistrationFlow(t, a, d, l) {
                        return r(this, void 0, void 0, function*() {
                            var r, c, u;
                            const v = yield o.updateRegistrationFlow(t, a, d, l), h = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, g = null === (u = null === (c = s.z9["FrontendApi.updateRegistrationFlow"]) || void 0 === c ? void 0 : c[h]) || void 0 === u ? void 0 : u.url;
                            return (o, t) => (0, n.yZ)(v, i.A, s.o2, e)(o, g || t)
                        })
                    },
                    updateSettingsFlow(t, a, d, l, c) {
                        return r(this, void 0, void 0, function*() {
                            var r, u, v;
                            const h = yield o.updateSettingsFlow(t, a, d, l, c), g = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, w = null === (v = null === (u = s.z9["FrontendApi.updateSettingsFlow"]) || void 0 === u ? void 0 : u[g]) || void 0 === v ? void 0 : v.url;
                            return (o, t) => (0, n.yZ)(h, i.A, s.o2, e)(o, w || t)
                        })
                    },
                    updateVerificationFlow(t, a, d, l, c) {
                        return r(this, void 0, void 0, function*() {
                            var r, u, v;
                            const h = yield o.updateVerificationFlow(t, a, d, l, c), g = null !== (r = null == e ? void 0 : e.serverIndex) && void 0 !== r ? r : 0, w = null === (v = null === (u = s.z9["FrontendApi.updateVerificationFlow"]) || void 0 === u ? void 0 : u[g]) || void 0 === v ? void 0 : v.url;
                            return (o, t) => (0, n.yZ)(h, i.A, s.o2, e)(o, w || t)
                        })
                    }
                }
            };
            class d extends s.yi {
                createBrowserLoginFlow(e = {}, o) {
                    return a(this.configuration).createBrowserLoginFlow(e.refresh, e.aal, e.returnTo, e.cookie, e.loginChallenge, e.organization, e.via, e.identitySchema, o).then(e => e(this.axios, this.basePath))
                }
                createBrowserLogoutFlow(e = {}, o) {
                    return a(this.configuration).createBrowserLogoutFlow(e.cookie, e.returnTo, o).then(e => e(this.axios, this.basePath))
                }
                createBrowserRecoveryFlow(e = {}, o) {
                    return a(this.configuration).createBrowserRecoveryFlow(e.returnTo, e.skipSettings, o).then(e => e(this.axios, this.basePath))
                }
                createBrowserRegistrationFlow(e = {}, o) {
                    return a(this.configuration).createBrowserRegistrationFlow(e.returnTo, e.loginChallenge, e.afterVerificationReturnTo, e.organization, e.identitySchema, o).then(e => e(this.axios, this.basePath))
                }
                createBrowserSettingsFlow(e = {}, o) {
                    return a(this.configuration).createBrowserSettingsFlow(e.returnTo, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                createBrowserVerificationFlow(e = {}, o) {
                    return a(this.configuration).createBrowserVerificationFlow(e.returnTo, o).then(e => e(this.axios, this.basePath))
                }
                createFedcmFlow(e) {
                    return a(this.configuration).createFedcmFlow(e).then(e => e(this.axios, this.basePath))
                }
                createNativeLoginFlow(e = {}, o) {
                    return a(this.configuration).createNativeLoginFlow(e.refresh, e.aal, e.xSessionToken, e.returnSessionTokenExchangeCode, e.returnTo, e.organization, e.via, e.identitySchema, o).then(e => e(this.axios, this.basePath))
                }
                createNativeRecoveryFlow(e) {
                    return a(this.configuration).createNativeRecoveryFlow(e).then(e => e(this.axios, this.basePath))
                }
                createNativeRegistrationFlow(e = {}, o) {
                    return a(this.configuration).createNativeRegistrationFlow(e.returnSessionTokenExchangeCode, e.returnTo, e.organization, e.identitySchema, o).then(e => e(this.axios, this.basePath))
                }
                createNativeSettingsFlow(e = {}, o) {
                    return a(this.configuration).createNativeSettingsFlow(e.xSessionToken, o).then(e => e(this.axios, this.basePath))
                }
                createNativeVerificationFlow(e = {}, o) {
                    return a(this.configuration).createNativeVerificationFlow(e.returnTo, o).then(e => e(this.axios, this.basePath))
                }
                disableMyOtherSessions(e = {}, o) {
                    return a(this.configuration).disableMyOtherSessions(e.xSessionToken, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                disableMySession(e, o) {
                    return a(this.configuration).disableMySession(e.id, e.xSessionToken, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                exchangeSessionToken(e, o) {
                    return a(this.configuration).exchangeSessionToken(e.initCode, e.returnToCode, o).then(e => e(this.axios, this.basePath))
                }
                getFlowError(e, o) {
                    return a(this.configuration).getFlowError(e.id, o).then(e => e(this.axios, this.basePath))
                }
                getLoginFlow(e, o) {
                    return a(this.configuration).getLoginFlow(e.id, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                getRecoveryFlow(e, o) {
                    return a(this.configuration).getRecoveryFlow(e.id, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                getRegistrationFlow(e, o) {
                    return a(this.configuration).getRegistrationFlow(e.id, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                getSettingsFlow(e, o) {
                    return a(this.configuration).getSettingsFlow(e.id, e.xSessionToken, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                getVerificationFlow(e, o) {
                    return a(this.configuration).getVerificationFlow(e.id, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                getWebAuthnJavaScript(e) {
                    return a(this.configuration).getWebAuthnJavaScript(e).then(e => e(this.axios, this.basePath))
                }
                listMySessions(e = {}, o) {
                    return a(this.configuration).listMySessions(e.perPage, e.page, e.pageSize, e.pageToken, e.xSessionToken, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                performNativeLogout(e, o) {
                    return a(this.configuration).performNativeLogout(e.performNativeLogoutBody, o).then(e => e(this.axios, this.basePath))
                }
                toSession(e = {}, o) {
                    return a(this.configuration).toSession(e.xSessionToken, e.cookie, e.tokenizeAs, o).then(e => e(this.axios, this.basePath))
                }
                updateFedcmFlow(e, o) {
                    return a(this.configuration).updateFedcmFlow(e.updateFedcmFlowBody, o).then(e => e(this.axios, this.basePath))
                }
                updateLoginFlow(e, o) {
                    return a(this.configuration).updateLoginFlow(e.flow, e.updateLoginFlowBody, e.xSessionToken, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                updateLogoutFlow(e = {}, o) {
                    return a(this.configuration).updateLogoutFlow(e.token, e.returnTo, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                updateRecoveryFlow(e, o) {
                    return a(this.configuration).updateRecoveryFlow(e.flow, e.updateRecoveryFlowBody, e.token, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                updateRegistrationFlow(e, o) {
                    return a(this.configuration).updateRegistrationFlow(e.flow, e.updateRegistrationFlowBody, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                updateSettingsFlow(e, o) {
                    return a(this.configuration).updateSettingsFlow(e.flow, e.updateSettingsFlowBody, e.xSessionToken, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
                updateVerificationFlow(e, o) {
                    return a(this.configuration).updateVerificationFlow(e.flow, e.updateVerificationFlowBody, e.token, e.cookie, o).then(e => e(this.axios, this.basePath))
                }
            }
        }
    }
]);
//# sourceMappingURL=client~vendor-ory-adcf0354~ad62fc258cf219deaebd.js.map