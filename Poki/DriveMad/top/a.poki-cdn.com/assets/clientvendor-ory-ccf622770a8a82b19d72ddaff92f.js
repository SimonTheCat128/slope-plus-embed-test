"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9387], {
        52118(o, e, r) {
            r.d(e, {
                Q0: () => n,
                o2: () => s,
                yi: () => a,
                z9: () => i
            });
            var t = r(46977);
            const s = "https://playground.projects.oryapis.com".replace(/\/+$/, "");
            class a {
                constructor(o, e = s, r = t.A) {
                    var a;
                    this.basePath = e, this.axios = r, o && (this.configuration = o, this.basePath = null !== (a = o.basePath) && void 0 !== a ? a : e)
                }
            }
            class n extends Error {
                constructor(o, e) {
                    super(e), this.field = o, this.name = "RequiredError"
                }
            }
            const i = {
                "EventsApi.createEventStream": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "EventsApi.deleteEventStream": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "EventsApi.listEventStreams": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "EventsApi.setEventStream": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.createOrganization": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.createOrganizationOnboardingPortalLink": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.createProject": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.createProjectApiKey": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.deleteOrganization": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.deleteOrganizationOnboardingPortalLink": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.deleteProjectApiKey": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.getOrganization": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.getOrganizationOnboardingPortalLinks": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.getProject": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.getProjectMembers": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.listOrganizations": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.listProjectApiKeys": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.listProjects": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.patchProject": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.patchProjectWithRevision": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.purgeProject": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.removeProjectMember": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.setProject": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.updateOrganization": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "ProjectApi.updateOrganizationOnboardingPortalLink": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "WorkspaceApi.createWorkspace": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "WorkspaceApi.createWorkspaceApiKey": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "WorkspaceApi.deleteWorkspaceApiKey": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "WorkspaceApi.getWorkspace": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "WorkspaceApi.listWorkspaceApiKeys": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "WorkspaceApi.listWorkspaceProjects": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "WorkspaceApi.listWorkspaces": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }],
                "WorkspaceApi.updateWorkspace": [{
                    url: "https://api.console.ory.sh",
                    description: "The Ory Network control plane API which is used to manage your Ory Network projects and workspaces."
                }]
            }
        },
        38914(o, e, r) {
            r.d(e, {
                Np: () => c,
                WC: () => a,
                fY: () => s,
                rZ: () => i,
                uD: () => p,
                yZ: () => h
            });
            var t = r(52118);
            const s = "https://example.com",
                a = function(o, e, r) {
                    if (null == r) throw new t.Q0(e, `Required parameter ${e} was null or undefined when calling ${o}.`)
                };

            function n(o, e, r = "") {
                null != e && ("object" == typeof e ? Array.isArray(e) ? e.forEach(e => n(o, e, r)) : Object.keys(e).forEach(t => n(o, e[t], `${r}${""!==r?".":""}${t}`)) : o.has(r) ? o.append(r, e) : o.set(r, e))
            }
            const i = function(o, ...e) {
                    const r = new URLSearchParams(o.search);
                    n(r, e), o.search = r.toString()
                },
                c = function(o, e, r) {
                    const t = "string" != typeof o;
                    return (t && r && r.isJsonMime ? r.isJsonMime(e.headers["Content-Type"]) : t) ? JSON.stringify(void 0 !== o ? o : {}) : o || ""
                },
                p = function(o) {
                    return o.pathname + o.search + o.hash
                },
                h = function(o, e, r, t) {
                    return (s = e, a = r) => {
                        var n;
                        const i = Object.assign(Object.assign({}, o.options), {
                            url: (s.defaults.baseURL ? "" : null !== (n = null == t ? void 0 : t.basePath) && void 0 !== n ? n : a) + o.url
                        });
                        return s.request(i)
                    }
                }
        },
        12902(o, e, r) {
            r.d(e, {
                Configuration: () => s,
                FrontendApi: () => t.rc
            });
            var t = r(9615);
            class s {
                constructor(o = {}) {
                    var e;
                    this.apiKey = o.apiKey, this.username = o.username, this.password = o.password, this.accessToken = o.accessToken, this.awsv4 = o.awsv4, this.basePath = o.basePath, this.serverIndex = o.serverIndex, this.baseOptions = Object.assign(Object.assign({}, o.baseOptions), {
                        headers: Object.assign({}, null === (e = o.baseOptions) || void 0 === e ? void 0 : e.headers)
                    }), this.formDataCtor = o.formDataCtor
                }
                isJsonMime(o) {
                    const e = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
                    return null !== o && (e.test(o) || "application/json-patch+json" === o.toLowerCase())
                }
            }
        }
    }
]);
//# sourceMappingURL=client~vendor-ory-ccf62277~0a8a82b19d72ddaff92f.js.map