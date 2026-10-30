import { r as p, j as e, R as Ks, a as Gs } from "./vendor-react-3a46a5d3.js";
import {
    u as le,
    eA as de,
    eB as Pe,
    eC as qs,
    eD as Cs,
    eE as Vs,
    eF as Te,
    l as Ce,
    eG as Ys,
    ba as Qs,
    aq as Xs,
    ar as Zs,
    cj as ps,
    dX as Js,
    dI as Le,
    eH as es,
    cq as qe,
    dH as Se,
    cs as ze,
    eI as ss,
    a as Ne,
    b5 as ts,
    eJ as ge,
    bb as Re,
    eK as et,
    eL as We,
    eM as st,
    A as Ve,
    eN as tt,
    eO as ns,
    eP as as,
    eQ as xs,
    eR as js,
    cL as Ue,
    dM as Ss,
    eS as Fe,
    aC as is,
    cW as nt,
    eT as at,
    eU as it,
    dx as bs,
    cD as lt,
    cE as Ge,
    f as ye,
    cF as rt,
    eV as ct,
    cH as ot,
    cI as dt,
    dv as mt,
    eW as As,
    eX as Is,
    cN as gs,
    cQ as ht,
    cO as ut,
    cP as ft,
    n as pt,
    o as xt,
    eY as jt,
    cU as bt,
    dP as gt,
    eZ as kt,
    c2 as vt,
    cu as Nt,
    c$ as yt,
    aR as wt,
    dw as ks,
    ex as Ct,
    bk as Ms,
    bh as St,
    dj as At,
    p as It,
    e_ as ls,
    aD as $s,
    e$ as Mt,
    dc as $t,
    f0 as Pt,
    f1 as Tt,
    dg as zt,
    cZ as Rt,
    d9 as Dt,
    f2 as Bt,
} from "./app-2c902988.js";
import {
    i as Ft,
    A as _t,
    g as Ps,
    h as Ts,
    t as Ot,
    j as Wt,
    m as zs,
    M as Et,
} from "./AltKnown-a1a03d3e.js";
import { D as Lt, s as Rs, S as Ut, b as Ht, v as Kt, m as Gt } from "./platformDm-22d28248.js";
import {
    a8 as Ye,
    P as Ds,
    am as Bs,
    aM as qt,
    a as Ae,
    c as Qe,
    V as He,
    Z as Fs,
    dz as _s,
    au as Xe,
    N as Vt,
    T as Yt,
    as as Qt,
    b as Xt,
    dA as Zt,
    aq as Jt,
} from "./vendor-icons-e63d3118.js";
import { A as en, m as sn } from "./vendor-motion-62fc1664.js";
import "./vendor-7bc51c32.js";
import "./vendor-leaflet-f4c2a8c5.js";
const we = Xs(Zs, "Insta"),
    Os = p.createContext(null),
    me = () => p.useContext(Os),
    Ws = p.createContext({ v: "me", readOnly: !1 }),
    ke = () => p.useContext(Ws);
function Dn({
    onBack: s,
    viewerId: t = "me",
    readOnly: n = !1,
    phoneFeed: l = null,
    ghostDm: a = null,
    onPostAsOwner: o = null,
}) {
    const { state: i } = le(),
        r = t || "me",
        [u, j] = p.useState("home"),
        [v, w] = p.useState([]),
        [y, A] = p.useState(!1),
        [z, I] = p.useState(null),
        [b, c] = p.useState(null),
        [B, f] = p.useState(null),
        d = v[v.length - 1] || null,
        m = p.useCallback((S) => w((K) => [...K, S]), []),
        g = p.useRef(!1),
        [k, P] = p.useState(!1),
        E = p.useCallback((S) => {
            ((g.current = S), P(S));
        }, []),
        h = p.useRef(v);
    h.current = v;
    const M = p.useCallback(() => {
            if (g.current && h.current.length <= 1) {
                (E(!1), s == null || s());
                return;
            }
            w((S) => S.slice(0, -1));
        }, [s, E]),
        R = p.useCallback(
            (S) => {
                (E(!1), j(S), w([]));
            },
            [E],
        ),
        [_, Z] = p.useState(r);
    p.useEffect(() => {
        Z(r);
    }, [r]);
    const T = p.useCallback(
            (S) => {
                if ((de(S) ? Pe(i, "insta", S) : S) === r) {
                    (E(!1), Z(S), j("me"), w([]));
                    return;
                }
                m({ name: "profile", ownerId: S });
            },
            [m, r, i, E],
        ),
        C = p.useCallback((S, K) => m({ name: "thread", ownerId: S, postId: K }), [m]),
        D = p.useCallback((S) => m({ name: "people", mode: S }), [m]),
        H = p.useCallback((S) => m({ name: "dm", charId: S }), [m]);
    (p.useEffect(() => {
        if (a) {
            if ((E(!1), String(a).startsWith("s:"))) {
                const S = String(a).slice(2);
                w((K) => {
                    const Q = K[K.length - 1];
                    return (Q == null ? void 0 : Q.name) === "stranger" && Q.convId === S
                        ? K
                        : [{ name: "stranger", accountRef: "me", convId: S }];
                });
                return;
            }
            w((S) => {
                const K = S[S.length - 1];
                return (K == null ? void 0 : K.name) === "dm" && K.charId === a
                    ? S
                    : [{ name: "dm", charId: a }];
            });
        }
    }, [a]),
        p.useEffect(() => {
            if (r !== "me") return;
            const S = (Q) => {
                var O, X, G, te, oe, ne, ue, De, Oe;
                if (!Q) return;
                const he =
                        (Q.ownerId === "me"
                            ? (X = (O = i.insta) == null ? void 0 : O.me) == null
                                ? void 0
                                : X.posts
                            : String(Q.ownerId).startsWith("pub:")
                              ? (oe =
                                    (te = (G = i.insta) == null ? void 0 : G.publics) == null
                                        ? void 0
                                        : te[String(Q.ownerId).slice(4)]) == null
                                  ? void 0
                                  : oe.posts
                              : (De =
                                      (ue = (ne = i.insta) == null ? void 0 : ne.chars) == null
                                          ? void 0
                                          : ue[Q.ownerId]) == null
                                ? void 0
                                : De.posts) || [],
                    je =
                        Q.postId && he.some((ms) => ms.id === Q.postId)
                            ? Q.postId
                            : (Oe = he[0]) == null
                              ? void 0
                              : Oe.id;
                je && (E(!!Q.solo), j("home"), w([{ name: "thread", ownerId: Q.ownerId, postId: je }]));
            };
            S(ps("insta"));
            const K = (Q) => {
                var he;
                ((he = Q.detail) == null ? void 0 : he.app) === "insta" && S(ps("insta"));
            };
            return (
                window.addEventListener("litot:focus-post", K),
                () => window.removeEventListener("litot:focus-post", K)
            );
        }, []));
    const se = p.useCallback((S, K) => m({ name: "stranger", accountRef: S, convId: K }), [m]),
        L = p.useCallback((S) => m({ name: "accounts", ownerId: S }), [m]),
        N = p.useCallback((S) => m({ name: "newalt", ownerId: S }), [m]),
        [$, V] = p.useState(null),
        Y = p.useMemo(
            () => ({
                push: m,
                pop: M,
                rootTab: R,
                openProfile: T,
                openThread: C,
                openPeople: D,
                openDm: H,
                openStranger: se,
                openAccounts: L,
                openNewAlt: N,
                onBack: s,
                openLightbox: I,
                editPost: (S, K) => c({ ownerId: S, post: K }),
                compose: () => A(!0),
                openAlt: (S, K, Q) => (Q ? V({ ref: S, owner: K }) : T(S)),
                quote: (S, K) => A({ quote: { ownerId: S, postId: K.id } }),
                share: (S, K = null) => f({ card: S, defaultCharId: K }),
            }),
            [m, M, R, T, C, D, H, se, L, N, s],
        ),
        pe = p.useMemo(() => ({ v: r, readOnly: n, phoneFeed: l }), [r, n, l]),
        ce =
            u === "home"
                ? e.jsx(nn, {})
                : u === "search"
                  ? e.jsx(rn, {})
                  : u === "activity"
                    ? e.jsx(cn, {})
                    : e.jsx(ys, { ownerId: _, root: !0 });
    return e.jsx(Ws.Provider, {
        value: pe,
        children: e.jsx(Os.Provider, {
            value: Y,
            children: e.jsxs("div", {
                className: "insta-shell",
                children: [
                    e.jsx("div", {
                        className: "insta-body",
                        children: d
                            ? d.name === "profile"
                                ? e.jsx(ys, { ownerId: d.ownerId }, d.ownerId)
                                : d.name === "thread"
                                  ? e.jsx(fn, { ownerId: d.ownerId, postId: d.postId }, d.postId)
                                  : d.name === "dm"
                                    ? e.jsx(
                                          Lt,
                                          {
                                              charId: d.charId,
                                              platform: "insta",
                                              onClose: M,
                                              avatarOf: (S) => ie(i, S),
                                              nameOf: (S) => U(i, S).name,
                                              handleOf: (S) => U(i, S).handle,
                                              onProfile: (S) => T(S),
                                              mirror: n,
                                              mirrorName: U(i, "me").name,
                                              mirrorAvatar: ie(i, "me"),
                                          },
                                          d.charId,
                                      )
                                    : d.name === "stranger"
                                      ? e.jsx(on, { accountRef: d.accountRef, convId: d.convId, onClose: M })
                                      : d.name === "people"
                                        ? e.jsx(dn, { mode: d.mode })
                                        : d.name === "accounts"
                                          ? e.jsx(kn, { ownerId: d.ownerId })
                                          : d.name === "newalt"
                                            ? e.jsx(vn, { ownerId: d.ownerId })
                                            : null
                            : ce,
                    }),
                    k &&
                        e.jsx("div", {
                            "aria-hidden": !0,
                            style: { flexShrink: 0, height: "var(--sab, 0px)" },
                        }),
                    !k &&
                        e.jsxs("nav", {
                            className: "insta-bottom",
                            children: [
                                e.jsx(Be, {
                                    on: u === "home" && !d,
                                    onClick: () => R("home"),
                                    label: "首页",
                                    children: e.jsx(qs, { filled: u === "home" && !d }),
                                }),
                                e.jsx(Be, {
                                    on: u === "search" && !d,
                                    onClick: () => R("search"),
                                    label: "搜索",
                                    children: e.jsx(Cs, { filled: u === "search" && !d }),
                                }),
                                (!n || o) &&
                                    e.jsx(Be, {
                                        onClick: () => A(!0),
                                        label: "发布",
                                        children: e.jsx(Vs, {}),
                                    }),
                                e.jsx(Be, {
                                    on: u === "activity" && !d,
                                    onClick: () => R("activity"),
                                    label: "动态",
                                    children: e.jsx(Te, { filled: u === "activity" && !d }),
                                }),
                                e.jsx(Be, {
                                    on: u === "me" && !d,
                                    onClick: () => R("me"),
                                    label: "我",
                                    children: ie(i, r)
                                        ? e.jsx("span", {
                                              className: `insta-tab-av ${u === "me" && !d ? "on" : ""}`,
                                              children: e.jsx(Ce, { src: ie(i, r), alt: "" }),
                                          })
                                        : e.jsx(Ys, { filled: u === "me" && !d }),
                                }),
                            ],
                        }),
                    e.jsx(ws, {
                        open: !!y,
                        onClose: () => A(!1),
                        initial: null,
                        owner: n ? r : _,
                        quote: (y == null ? void 0 : y.quote) || null,
                        onPosted: n ? o : null,
                    }),
                    e.jsx(ws, {
                        open: !!b,
                        onClose: () => c(null),
                        initial: b == null ? void 0 : b.post,
                        owner: b == null ? void 0 : b.ownerId,
                    }),
                    e.jsx(gn, { src: z == null ? void 0 : z.src, onClose: () => I(null) }),
                    e.jsx(Ft, {
                        platform: "insta",
                        target: $,
                        onClose: () => V(null),
                        onOpen: (S) => {
                            (V(null), T(S));
                        },
                    }),
                    !n &&
                        e.jsx(Qs, {
                            open: !!B,
                            onClose: () => f(null),
                            card: B == null ? void 0 : B.card,
                            defaultCharId: B == null ? void 0 : B.defaultCharId,
                        }),
                ],
            }),
        }),
    });
}
function Be({ on: s, onClick: t, label: n, children: l }) {
    return e.jsx("button", {
        className: `insta-tab ${s ? "on" : ""}`,
        onClick: t,
        "aria-label": n,
        title: n,
        children: l,
    });
}
function rs({ right: s, account: t }) {
    const n = me();
    return e.jsxs("header", {
        className: `insta-topbar ${t ? "profile" : ""}`,
        children: [
            t
                ? e.jsxs("button", {
                      className: `insta-account-title btn-plain ${t.onClick ? "can-switch" : ""}`,
                      onClick: t.onClick,
                      disabled: !t.onClick,
                      "aria-label": t.onClick ? "切换账号" : void 0,
                      children: [
                          e.jsxs("span", { children: ["@", t.handle] }),
                          t.onClick && e.jsx(Qt, { size: 17, strokeWidth: 2.4 }),
                      ],
                  })
                : e.jsxs("div", {
                      className: "insta-logo",
                      children: [
                          e.jsx("span", { children: "Insta" }),
                          e.jsx("small", { children: "social / now" }),
                      ],
                  }),
            e.jsxs("div", {
                className: "insta-topbar-right",
                children: [
                    s,
                    e.jsx("button", {
                        className: "insta-icon-button",
                        onClick: n.onBack,
                        "aria-label": "退出",
                        children: e.jsx(Ae, { size: 19 }),
                    }),
                ],
            }),
        ],
    });
}
function Ie({ title: s, right: t }) {
    const n = me();
    return e.jsxs("header", {
        className: "insta-subbar",
        children: [
            e.jsx("button", {
                className: "insta-icon-button",
                onClick: n.pop,
                "aria-label": "返回",
                children: e.jsx(Xt, { size: 22 }),
            }),
            e.jsx("span", { children: s }),
            e.jsx("div", { className: "insta-topbar-right", children: t }),
        ],
    });
}
function tn(s) {
    const t = [];
    for (const n of s) {
        const l = n.replyToName ? [...t].reverse().find((a) => a.name === n.replyToName) : null;
        t.push(l ? { ...n, replyToId: l.id } : n);
    }
    return t;
}
function Ze(s) {
    const t = Math.max(2, Math.min(12, Number(s) || 6));
    return [Math.max(1, t - 2), Math.min(12, t + 2)];
}
function Es(s = "insta:batch") {
    const { state: t, instaAppendPost: n, instaUpdatePost: l, instaUpsertPublic: a } = le(),
        o = Ne(),
        i = Nt(s),
        r = we.usableLane(t.api.insta, t.api.chat);
    return {
        run: async (j, { count: v = 3, quota: w = null, strangers: y = 0, comments: A = [3, 8] } = {}) => {
            if (!(r != null && r.baseUrl)) return (o("先在 API 设置里配好聊天或 Insta 通道", "error"), 0);
            const z = !0,
                I = $s(t, "insta");
            let b = 0;
            const c = await i.run(async (B) => {
                var P, E;
                const f = j.map(({ char: h, ref: M }) => ({ ...as(t, h, { ref: M }), id: M || h.id })),
                    d = Mt(
                        t,
                        j.map(({ char: h, ref: M }) => ({ ...h, __id: M || h.id })),
                        (h) => h.__id,
                    ),
                    m = await we.insta(
                        r,
                        $t(Pt(f, { count: v, allowPhoto: z, quota: w, strangers: y, comments: A }), d),
                        {
                            fallback: t.api.chat,
                            signal: B,
                            max_tokens: Math.min(16e3, 1500 + (v + y) * (500 + A[1] * 70)),
                        },
                    ),
                    g = Date.now(),
                    k = Tt(Ue(m.content), {
                        allowedCharIds: f.map((h) => h.id),
                        now: g,
                        allowStrangers: y > 0,
                    });
                if (!k.length) throw new Error("这一批格式不合格，已丢弃；不会为修格式二次调用");
                for (const h of k.slice().sort((M, R) => M.createdAt - R.createdAt)) {
                    const M = h.author
                            ? h.author.followers || 300
                            : Number((P = f.find((C) => C.id === h.charId)) == null ? void 0 : P.followers) ||
                              500,
                        R =
                            !h.author && h.pics
                                ? (E = j.find((C) => (C.ref || C.char.id) === h.charId)) == null
                                    ? void 0
                                    : E.char
                                : null,
                        _ = R ? zt(t, R, h.pics) : [],
                        Z = {
                            id: ye("p_"),
                            kind: h.kind,
                            body: h.body,
                            caption: h.caption,
                            location: h.location,
                            ...(h.tr ? { tr: h.tr } : null),
                            ...(h.photoDesc
                                ? {
                                      photoDesc: h.photoDesc,
                                      media: (h.photoDescs || [h.photoDesc]).map((C) => ({
                                          ref: null,
                                          desc: C,
                                      })),
                                  }
                                : null),
                            ...(_.length
                                ? {
                                      kind: "photo",
                                      body: "",
                                      caption: h.caption || h.body || "",
                                      photoDesc: void 0,
                                      photoDescs: void 0,
                                      media: _.map((C) => ({ ref: C.src, desc: C.label || "" })),
                                      photoByMe: !0,
                                  }
                                : null),
                            createdAt: h.createdAt,
                            likes: Math.floor(M * (0.02 + Math.random() * 0.08)),
                            comments: tn(
                                h.comments.map((C, D) => ({
                                    id: ye("cc_"),
                                    name: C.name,
                                    text: C.text,
                                    author: "ai",
                                    ...(C.tr ? { tr: C.tr } : null),
                                    ...(C.replyToName ? { replyToName: C.replyToName } : null),
                                    createdAt:
                                        h.createdAt + (D + 1) * Math.floor(Math.random() * 40 + 5) * 6e4,
                                })),
                            ),
                        },
                        T = h.author ? `pub:${h.author.handle}` : h.charId;
                    (h.author &&
                        a(h.author.handle, {
                            nickname: h.author.name,
                            bio: h.author.bio,
                            followers: h.author.followers,
                        }),
                        n(T, Z),
                        I && ls(t, l, T, Z) && (b += 1));
                }
                return k.length;
            });
            return c != null && c.skipped
                ? (o("上一次刷新仍在进行"), 0)
                : c != null && c.aborted
                  ? (o("已停止生成"), 0)
                  : c != null && c.error
                    ? (o(c.error.message, "error"), 0)
                    : (typeof (c == null ? void 0 : c.value) == "number" &&
                          o(`Insta 新发了 ${c.value} 条${b ? `，${b} 张配图在后台生成` : ""}`),
                      typeof (c == null ? void 0 : c.value) == "number" &&
                          Rt({ title: "Insta 已刷新", text: `新发了 ${c.value} 条`, app: "insta" }),
                      (c == null ? void 0 : c.value) || 0);
        },
        busy: i.busy,
        stop: i.stop,
    };
}
function nn() {
    const { state: s } = le(),
        t = me(),
        { v: n, readOnly: l } = ke(),
        [a, o] = p.useState("all"),
        i = Es(),
        [r, u] = p.useState(!1),
        j = (s.characters || []).filter((c) => {
            var B;
            return (B = s.insta.chars[c.id]) == null ? void 0 : B.username;
        }),
        v = j.length ? j : s.characters || [],
        w = (c = {}) => {
            const { count: B = 8 } = c,
                f = Math.max(0, Number(c.strangers ?? 3)),
                d = Ze(c.comments),
                m = yt(c, v);
            if (m) {
                i.run(
                    m.map(({ char: k }) => ({ char: k })),
                    {
                        count: m.reduce((k, P) => k + P.count, 0),
                        quota: Object.fromEntries(m.map((k) => [k.char.id, k.count])),
                        strangers: f,
                        comments: d,
                    },
                );
                return;
            }
            const g = v
                .slice()
                .sort(() => Math.random() - 0.5)
                .slice(0, Math.min(8, Math.max(1, Math.ceil(B / 2))));
            (!g.length && !f) ||
                i.run(
                    g.map((k) => ({ char: k })),
                    { count: Math.min(12, Math.max(B, 0)), strangers: f, comments: d },
                );
        },
        y = l && n !== "me",
        A = y ? (s.characters || []).find((c) => c.id === n) : null,
        z = p.useMemo(() => (A ? Js(A).feeds.insta || [] : []), [A]),
        I = p.useMemo(() => {
            var f, d, m;
            const c = [];
            if (y) {
                (c.push(...(s.insta.me.posts || []).map((g) => ({ ...g, ownerKind: "me", ownerId: "me" }))),
                    c.push(
                        ...(((f = s.insta.chars[n]) == null ? void 0 : f.posts) || []).map((g) => ({
                            ...g,
                            ownerKind: "char",
                            ownerId: n,
                        })),
                    ));
                for (const g of Le(s, n))
                    g === "me" ||
                        g === n ||
                        c.push(
                            ...(((d = s.insta.chars[g]) == null ? void 0 : d.posts) || []).map((k) => ({
                                ...k,
                                ownerKind: "char",
                                ownerId: g,
                            })),
                        );
                return (
                    c.push(
                        ...z
                            .filter((g) => a === "all" || g.who !== "suggested")
                            .map((g) => ({ ...g, createdAt: g.at, gen: !0 })),
                    ),
                    c.sort((g, k) => Ee(k) - Ee(g))
                );
            }
            c.push(...(s.insta.me.posts || []).map((g) => ({ ...g, ownerKind: "me", ownerId: "me" })));
            for (const g of s.characters)
                c.push(
                    ...(((m = s.insta.chars[g.id]) == null ? void 0 : m.posts) || []).map((k) => ({
                        ...k,
                        ownerKind: "char",
                        ownerId: g.id,
                    })),
                );
            for (const [g, k] of Object.entries(s.insta.publics || {}))
                c.push(...(k.posts || []).map((P) => ({ ...P, ownerKind: "pub", ownerId: `pub:${g}` })));
            if ((c.sort((g, k) => Ee(k) - Ee(g)), a === "all")) return c;
            const B = n === "me" ? new Set([...(s.insta.me.following || []), "me"]) : new Set(["me", n]);
            return c.filter((g) => B.has(g.ownerId) || (n === "me" && g.repostedByMe));
        }, [s.insta, s.characters, s.relations, a, n, y, z]),
        { phoneFeed: b } = ke();
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(rs, {
                right: l
                    ? y && b
                        ? e.jsx("button", {
                              className: `insta-icon-button ${b.busy ? "is-busy" : ""}`,
                              onClick: b.busy ? void 0 : b.onGen,
                              disabled: b.busy,
                              "aria-label": "刷新他的首页",
                              children: e.jsx(Ye, { size: 18, className: b.busy ? "spin" : "" }),
                          })
                        : null
                    : e.jsx("button", {
                          className: `insta-icon-button ${i.busy ? "is-busy" : ""}`,
                          onClick: i.busy ? i.stop : () => u(!0),
                          "aria-label": i.busy ? "停止" : "刷新首页",
                          children: i.busy ? e.jsx(es, { size: 18 }) : e.jsx(Ye, { size: 18 }),
                      }),
            }),
            e.jsx(qe, {
                open: r,
                onClose: () => u(!1),
                app: "insta",
                title: "刷新首页",
                fields: [
                    {
                        key: "count",
                        label: "联系人动态",
                        hint: "通讯录中角色发布的动态",
                        min: 1,
                        max: 12,
                        def: 8,
                        randomOnly: !0,
                    },
                    {
                        key: "strangers",
                        label: "推荐动态",
                        hint: "非联系人用户发布的动态",
                        min: 0,
                        max: 8,
                        def: 3,
                    },
                    {
                        key: "comments",
                        label: "评论数量",
                        hint: "每条动态的评论条数（约）",
                        min: 2,
                        max: 12,
                        def: 6,
                    },
                ],
                people: v.map((c) => {
                    var B, f;
                    return {
                        id: c.id,
                        name: ((B = s.insta.chars[c.id]) == null ? void 0 : B.nickname) || Se(c),
                        avatar: ((f = s.insta.chars[c.id]) == null ? void 0 : f.avatar) || c.avatar,
                    };
                }),
                perMax: 4,
                maxTotal: 12,
                onStart: w,
            }),
            e.jsxs("div", {
                className: "insta-scroll",
                children: [
                    e.jsxs("div", {
                        className: "insta-scope",
                        children: [
                            e.jsx("button", {
                                className: a === "all" ? "on" : "",
                                onClick: () => o("all"),
                                children: "推荐",
                            }),
                            e.jsx("button", {
                                className: a === "following" ? "on" : "",
                                onClick: () => o("following"),
                                children: "关注中",
                            }),
                        ],
                    }),
                    !y && e.jsx(an, { posts: I }),
                    !l &&
                        e.jsxs("button", {
                            className: "ig-prompt btn-plain",
                            onClick: t.compose,
                            children: [
                                e.jsx(ee, { src: ie(s, n), name: U(s, n).name, size: 36 }),
                                e.jsxs("span", {
                                    className: "ig-prompt-main",
                                    children: [
                                        e.jsx("b", { children: U(s, n).name }),
                                        e.jsx("span", { children: "有什么新鲜事？" }),
                                    ],
                                }),
                                e.jsx("span", { className: "ig-prompt-btn", children: "发布" }),
                            ],
                        }),
                    y &&
                        !z.length &&
                        e.jsx("div", {
                            className: "ig-gen-hint",
                            children:
                                b != null && b.busy
                                    ? "正在生成他首页刷到的东西…"
                                    : "这里现在只有你们俩发的。点右上角，看看他平时首页刷到的是什么。",
                        }),
                    I.length === 0
                        ? e.jsx(fe, {
                              title: a === "following" ? "关注的人还没发过什么" : "还没有动态",
                              hint: a === "following" ? "去搜索里关注几个人" : void 0,
                              action:
                                  a === "following"
                                      ? { label: "去看看", onClick: () => t.rootTab("search") }
                                      : l
                                        ? void 0
                                        : { label: "发第一条", onClick: t.compose },
                          })
                        : I.map((c) =>
                              c.gen
                                  ? e.jsx(
                                        ln,
                                        { post: c, hisName: A ? U(s, n).name : "他", hisAvatar: ie(s, n) },
                                        c.id,
                                    )
                                  : e.jsx(_e, { post: c, repostLine: c.ownerId !== "me" }, c.id),
                          ),
                ],
            }),
        ],
    });
}
function Ee(s) {
    return Math.max(s.createdAt || 0, (s.repostedByMe && s.ownerId !== "me" && s.repostAt) || 0);
}
function an({ posts: s }) {
    const { state: t } = le(),
        n = me(),
        { v: l } = ke(),
        a = p.useMemo(() => {
            const i = new Map();
            for (const r of s) r.ownerId === l || i.has(r.ownerId) || i.set(r.ownerId, r.createdAt || 0);
            return [...i.entries()]
                .slice(0, 14)
                .map(([r, u]) => ({ id: r, at: u, who: U(t, r), fresh: Date.now() - u < 24 * 36e5 }));
        }, [s, t, l]);
    if (!a.length) return null;
    const o = U(t, l);
    return e.jsxs("div", {
        className: "ig-stories",
        role: "list",
        children: [
            e.jsxs("button", {
                className: "btn-plain ig-story me",
                onClick: n.compose,
                role: "listitem",
                children: [
                    e.jsxs("span", {
                        className: "ig-story-ring",
                        children: [
                            e.jsx(ee, { src: ie(t, l), name: o.name, size: 56 }),
                            e.jsx("i", {
                                className: "ig-story-plus",
                                children: e.jsx(Ds, { size: 12, strokeWidth: 3 }),
                            }),
                        ],
                    }),
                    e.jsx("em", { children: "你的动态" }),
                ],
            }),
            a.map((i) =>
                e.jsxs(
                    "button",
                    {
                        className: `btn-plain ig-story ${i.fresh ? "fresh" : ""}`,
                        onClick: () => n.openProfile(i.id),
                        role: "listitem",
                        children: [
                            e.jsx("span", {
                                className: "ig-story-ring",
                                children: e.jsx(ee, { src: i.who.avatar, name: i.who.name, size: 56 }),
                            }),
                            e.jsx("em", { children: i.who.name }),
                        ],
                    },
                    i.id,
                ),
            ),
        ],
    });
}
const vs = { friend: "", follow: "", suggested: "为你推荐" };
function ln({ post: s, hisName: t, hisAvatar: n }) {
    const [l, a] = p.useState(!1),
        o = s.comments || [],
        i = l
            ? o
            : o
                  .filter((r) => r.byHim)
                  .concat(o.filter((r) => !r.byHim))
                  .slice(0, 2);
    return e.jsxs("article", {
        className: "th-item ig-gen",
        children: [
            e.jsx("div", { className: "th-gutter", children: e.jsx(ee, { name: s.name, size: 38 }) }),
            e.jsxs("div", {
                className: "th-main",
                children: [
                    e.jsxs("header", {
                        className: "th-head",
                        children: [
                            e.jsx("span", { className: "th-name", children: s.name }),
                            e.jsxs("span", {
                                className: "th-time",
                                children: [vs[s.who] ? `${vs[s.who]} · ` : "", be(s.createdAt)],
                            }),
                        ],
                    }),
                    e.jsx("div", { className: "th-text", children: s.text }),
                    e.jsx(ze, { className: "th-trans", text: s.text, known: s.tr }),
                    s.photo
                        ? e.jsxs("div", {
                              className: "ig-gen-photo",
                              children: [e.jsx(Bs, { size: 16 }), e.jsx("span", { children: s.photo })],
                          })
                        : null,
                    e.jsxs("div", {
                        className: "th-actions counts",
                        children: [
                            e.jsxs("span", {
                                className: s.liked ? "on liked" : "",
                                children: [
                                    e.jsx(Te, { size: 19, filled: s.liked }),
                                    s.likes > 0 && e.jsx("span", { children: ve(s.likes) }),
                                ],
                            }),
                            e.jsxs("span", {
                                children: [
                                    e.jsx(ss, { size: 19 }),
                                    o.length > 0 && e.jsx("span", { children: o.length }),
                                ],
                            }),
                            s.saved &&
                                e.jsxs("span", {
                                    className: "ig-gen-saved",
                                    children: [e.jsx(qt, { size: 17, fill: "currentColor" }), "已收藏"],
                                }),
                        ],
                    }),
                    i.length > 0 &&
                        e.jsxs("div", {
                            className: "ig-gen-comments",
                            children: [
                                i.map((r) =>
                                    e.jsxs(
                                        "div",
                                        {
                                            className: `ig-gen-c ${r.byHim ? "him" : ""}`,
                                            children: [
                                                r.byHim ? e.jsx(ee, { src: n, name: t, size: 18 }) : null,
                                                e.jsx("b", { children: r.byHim ? t : r.name }),
                                                e.jsxs("span", {
                                                    children: [
                                                        r.text,
                                                        e.jsx(ze, {
                                                            className: "th-trans",
                                                            text: r.text,
                                                            known: r.tr,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        r.id,
                                    ),
                                ),
                                o.length > i.length &&
                                    e.jsxs("button", {
                                        className: "btn-plain ig-gen-more",
                                        onClick: () => a(!0),
                                        children: ["查看全部 ", o.length, " 条回复"],
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function rn() {
    const { state: s, instaToggleFollow: t } = le(),
        n = me(),
        { v: l } = ke(),
        [a, o] = p.useState(""),
        i = a.trim().toLowerCase(),
        r = p.useMemo(() => {
            const v = (l === "me" ? s.characters.map((w) => w.id) : [...Le(s, l)].filter((w) => w !== l)).map(
                (w) => ({ id: w, ...U(s, w) }),
            );
            return i ? v.filter((w) => w.name.toLowerCase().includes(i) || w.handle.includes(i)) : v;
        }, [s, i, l]),
        u = p.useMemo(() => {
            var y;
            if (!i) return [];
            const j = [],
                v = (A, z) => {
                    var I, b;
                    for (const c of A || [])
                        [
                            c.body,
                            c.caption,
                            (I = c.card) == null ? void 0 : I.title,
                            (b = c.card) == null ? void 0 : b.body,
                        ]
                            .filter(Boolean)
                            .join(" ")
                            .toLowerCase()
                            .includes(i) &&
                            j.push({ ...c, ownerId: z, ownerKind: z === "me" ? "me" : "char" });
                };
            v(s.insta.me.posts, "me");
            const w = l === "me" ? null : Le(s, l);
            for (const A of s.characters)
                (!w || w.has(A.id)) && v((y = s.insta.chars[A.id]) == null ? void 0 : y.posts, A.id);
            return j.sort((A, z) => z.createdAt - A.createdAt);
        }, [s, i, l]);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("header", {
                className: "insta-topbar search",
                children: [
                    e.jsxs("div", {
                        className: "insta-search-field",
                        children: [
                            e.jsx(Cs, { size: 16 }),
                            e.jsx("input", {
                                value: a,
                                onChange: (j) => o(j.target.value),
                                placeholder: "搜昵称、@ID 或内容",
                            }),
                            a &&
                                e.jsx("button", {
                                    className: "btn-plain",
                                    onClick: () => o(""),
                                    "aria-label": "清空",
                                    children: e.jsx(Ae, { size: 15 }),
                                }),
                        ],
                    }),
                    e.jsx("button", {
                        className: "insta-icon-button",
                        onClick: n.onBack,
                        "aria-label": "退出",
                        children: e.jsx(Ae, { size: 19 }),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "insta-scroll",
                children: [
                    e.jsx("div", { className: "insta-sec", children: i ? "账号" : "为你推荐" }),
                    r.length === 0 && e.jsx(fe, { title: `没有叫「${a}」的账号` }),
                    r.map((j) => {
                        const v = (s.insta.me.following || []).includes(j.id);
                        return e.jsxs(
                            "div",
                            {
                                className: "insta-person",
                                children: [
                                    e.jsxs("button", {
                                        className: "insta-person-main btn-plain",
                                        onClick: () => n.openProfile(j.id),
                                        children: [
                                            e.jsx(ee, { src: j.avatar, name: j.name, size: 44 }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("div", {
                                                        className: "insta-person-name",
                                                        children: j.name,
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "insta-person-sub",
                                                        children: [
                                                            "@",
                                                            j.handle,
                                                            j.followers != null
                                                                ? ` · ${ve(j.followers)} 位关注者`
                                                                : "",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    l === "me" &&
                                        e.jsx("button", {
                                            className: `th-btn tight ${v ? "" : "solid"}`,
                                            onClick: () => t(j.id),
                                            children: v ? "已关注" : "关注",
                                        }),
                                ],
                            },
                            j.id,
                        );
                    }),
                    i &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx("div", { className: "insta-sec", children: "内容" }),
                                u.length === 0
                                    ? e.jsx(fe, { title: "没有匹配的动态" })
                                    : u.map((j) => e.jsx(_e, { post: j }, j.id)),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function cn() {
    const { state: s, socialSetInbox: t, dmAppend: n } = le(),
        l = me(),
        a = Ne(),
        o = ts(),
        { v: i, readOnly: r } = ke(),
        [u, j] = p.useState("comments"),
        v = i,
        w = p.useMemo(() => {
            const f = [],
                d = (h) => (i === "me" ? h.author === "me" : h.author === "char" && h.charId === i),
                m = new Set(),
                g = (h) => {
                    for (const M of h.comments || []) d(M) && m.add(M.id);
                },
                k = i === "me" ? null : Le(s, i),
                P = [
                    ...(s.insta.me.posts || []).map((h) => ({ post: h, ownerId: "me" })),
                    ...s.characters
                        .filter((h) => !k || k.has(h.id))
                        .flatMap((h) => {
                            var M;
                            return (((M = s.insta.chars[h.id]) == null ? void 0 : M.posts) || []).map(
                                (R) => ({ post: R, ownerId: h.id }),
                            );
                        }),
                ];
            P.forEach(({ post: h }) => g(h));
            for (const { post: h, ownerId: M } of P) {
                if (M === i)
                    for (const R of h.comments || [])
                        d(R) ||
                            f.push({
                                id: `c_${R.id}`,
                                at: R.createdAt,
                                kind: "comment",
                                comment: R,
                                post: h,
                                ownerId: M,
                            });
                for (const R of h.comments || [])
                    d(R) ||
                        (R.replyToId &&
                            m.has(R.replyToId) &&
                            f.push({
                                id: `r_${R.id}`,
                                at: R.createdAt,
                                kind: "reply",
                                comment: R,
                                post: h,
                                ownerId: M,
                            }));
                M !== i &&
                    (i !== "me" || (s.insta.me.following || []).includes(M)) &&
                    f.push({ id: `p_${h.id}`, at: h.createdAt, kind: "post", post: h, ownerId: M });
            }
            const E = new Set();
            return f
                .filter((h) => (E.has(h.id) ? !1 : E.add(h.id)))
                .sort((h, M) => (M.at || 0) - (h.at || 0))
                .slice(0, 80);
        }, [s.insta, s.characters, s.relations, i]),
        y = Rs(s, "insta", v),
        A = p.useMemo(() => {
            var f, d;
            if (i !== "me") {
                const m = ((d = (f = s.dm) == null ? void 0 : f.insta) == null ? void 0 : d[i]) || [];
                if (!m.length) return [];
                const g = U(s, "me");
                return [
                    {
                        id: `char:${i}`,
                        charId: i,
                        real: !0,
                        mirror: !0,
                        name: g.name,
                        handle: g.handle,
                        avatar: ie(s, "me"),
                        relation: "你们在这儿说过话",
                        unread: 0,
                        last: m[m.length - 1],
                    },
                ];
            }
            return (s.characters || [])
                .map((m) => {
                    var g, k;
                    return {
                        c: m,
                        msgs: ((k = (g = s.dm) == null ? void 0 : g.insta) == null ? void 0 : k[m.id]) || [],
                    };
                })
                .filter((m) => m.msgs.length)
                .map((m) => ({
                    id: `char:${m.c.id}`,
                    charId: m.c.id,
                    real: !0,
                    mirror: !1,
                    name: U(s, m.c.id).name,
                    handle: U(s, m.c.id).handle,
                    avatar: ie(s, m.c.id),
                    relation: "你们认识",
                    unread: 0,
                    last: m.msgs[m.msgs.length - 1],
                }));
        }, [i, s.characters, s.dm, s.insta]),
        z = p.useMemo(() => {
            const f = (y.strangers || []).map((d) => {
                var m, g;
                return {
                    id: d.id,
                    stranger: d,
                    name: d.name,
                    handle: d.handle,
                    avatar: null,
                    relation: d.relation,
                    unread: d.unread,
                    last: {
                        content: (m = d.msgs[d.msgs.length - 1]) == null ? void 0 : m.text,
                        createdAt: (g = d.msgs[d.msgs.length - 1]) == null ? void 0 : g.at,
                    },
                };
            });
            return [...A, ...f].sort((d, m) => {
                var g, k;
                return (
                    (((g = m.last) == null ? void 0 : g.createdAt) || 0) -
                    (((k = d.last) == null ? void 0 : k.createdAt) || 0)
                );
            });
        }, [A, y.strangers]),
        I = p.useMemo(
            () =>
                i !== "me"
                    ? []
                    : (s.characters || []).map((f) => {
                          var m, g, k;
                          const d =
                              ((g = (m = s.dm) == null ? void 0 : m.insta) == null ? void 0 : g[f.id]) || [];
                          return {
                              id: f.id,
                              name: U(s, f.id).name,
                              recent: (k = d[d.length - 1]) == null ? void 0 : k.content,
                          };
                      }),
            [i, s.characters, s.dm, s.insta],
        ),
        b = async () => {
            const f = we.usableLane(s.api.insta, s.api.chat);
            if (!(f != null && f.baseUrl)) {
                a("先在 API 设置里配好聊天或 Insta 通道", "error");
                return;
            }
            const d = ns(s, "insta", i, { all: !0 }).find((h) => h.ref === v) || { handle: "", main: !0 },
                m = ge(s, "insta", v),
                g = (m.posts || []).slice(0, 10),
                k = (s.characters || [])
                    .flatMap((h) => wt(s, h) || [])
                    .sort((h, M) => (M.at || 0) - (h.at || 0))
                    .slice(0, 20)
                    .reverse()
                    .map(
                        (h) =>
                            `${ks(h.at)}${h.source ? `[${h.source}] ` : ""}${String(h.line).slice(0, 140)}`,
                    ),
                P = await o.run(async (h) => {
                    const M = await we.insta(
                            f,
                            Ht({
                                platform: "insta",
                                account: { ...d, bio: m.bio, why: m.why },
                                posts: g.map((_) => {
                                    var Z;
                                    return `${ks(_.createdAt || _.at)}${_.body || _.caption || ((Z = _.card) == null ? void 0 : Z.title) || "[图片]"}`;
                                }),
                                stream: k,
                                followers: m.followers ?? 0,
                                nowText: Ct(),
                                existing: y.strangers,
                                chars: I,
                            }),
                            { fallback: s.api.chat, signal: h, max_tokens: 3e3 },
                        ),
                        R = Kt(Ue(M.content), { postIds: g.map((_) => _.id), charIds: I.map((_) => _.id) });
                    if (!R) throw new Error("这一次没解析出可用的内容，作废");
                    return R;
                });
            if ((P != null && P.aborted) || (P != null && P.skipped)) return;
            if (P != null && P.error) {
                a(P.error.message, "error");
                return;
            }
            t("insta", v, Gt(y, P.value));
            for (const h of P.value.known || [])
                for (const M of h.msgs)
                    n("insta", h.charId, { role: "assistant", content: M.text, createdAt: M.at });
            const E = (P.value.known || []).reduce((h, M) => h + M.msgs.length, 0);
            (a(
                `赞 ${P.value.likes.length} · 陌生人 ${P.value.strangers.length} 条${E ? ` · 认识的人 ${E} 条` : ""}`,
            ),
                (P.value.strangers.length || E) && j("dm"));
        },
        c = z.reduce((f, d) => f + (d.unread || 0), 0),
        B = [
            ["likes", "点赞"],
            ["comments", "评论"],
            ["dm", "私信"],
        ];
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(rs, {}),
            e.jsxs("div", {
                className: "insta-acttabs",
                children: [
                    B.map(([f, d]) =>
                        e.jsxs(
                            "button",
                            {
                                className: u === f ? "on" : "",
                                onClick: () => j(f),
                                children: [d, f === "dm" && c ? e.jsx("i", { children: c }) : null],
                            },
                            f,
                        ),
                    ),
                    e.jsx("button", {
                        className: "insta-actrefresh",
                        onClick: b,
                        disabled: o.busy,
                        "aria-label": "刷新",
                        children: e.jsx(Ye, { size: 16, className: o.busy ? "insta-spin" : "" }),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "insta-scroll",
                children: [
                    u === "likes" &&
                        ((y.likes || []).length === 0
                            ? e.jsx(fe, {
                                  title: "还没有人点赞",
                                  hint: "点右上角刷新，看看这段时间谁来过",
                                  action: { label: "刷新", onClick: b },
                              })
                            : (y.likes || []).map((f) => {
                                  var g;
                                  const d = (ge(s, "insta", v).posts || []).find((k) => k.id === f.postId),
                                      m = d
                                          ? d.body ||
                                            d.caption ||
                                            ((g = d.card) == null ? void 0 : g.title) ||
                                            "[图片]"
                                          : "";
                                  return e.jsxs(
                                      "button",
                                      {
                                          className: "insta-act btn-plain",
                                          disabled: !d,
                                          onClick: () => d && l.openThread(v, d.id),
                                          children: [
                                              e.jsx(ee, { src: null, name: f.name, size: 38 }),
                                              e.jsxs("div", {
                                                  className: "insta-act-copy",
                                                  children: [
                                                      e.jsxs("div", {
                                                          className: "insta-act-head",
                                                          children: [
                                                              e.jsx("b", { children: f.name }),
                                                              e.jsxs("span", {
                                                                  className: "insta-act-what",
                                                                  children: [
                                                                      "赞了",
                                                                      r ? "他" : "你",
                                                                      "的动态",
                                                                  ],
                                                              }),
                                                              e.jsx("i", { children: be(f.at) }),
                                                          ],
                                                      }),
                                                      e.jsx("div", {
                                                          className: "insta-act-body",
                                                          children: m
                                                              ? `「${String(m).slice(0, 40)}」`
                                                              : `@${f.handle}`,
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      },
                                      f.id,
                                  );
                              })),
                    u === "dm" &&
                        (z.length === 0
                            ? e.jsx(fe, {
                                  title: "还没有私信",
                                  hint: "认识的人可以从他主页发消息；陌生人要刷新才会来",
                                  action: { label: "刷新", onClick: b },
                              })
                            : z.map((f) => {
                                  var d, m;
                                  return e.jsxs(
                                      "button",
                                      {
                                          className: "insta-act btn-plain",
                                          onClick: () =>
                                              f.charId
                                                  ? l.openDm(f.charId)
                                                  : l.openStranger(v, f.stranger.id),
                                          children: [
                                              e.jsx(ee, { src: f.avatar, name: f.name, size: 38 }),
                                              e.jsxs("div", {
                                                  className: "insta-act-copy",
                                                  children: [
                                                      e.jsxs("div", {
                                                          className: "insta-act-head",
                                                          children: [
                                                              e.jsx("b", { children: f.name }),
                                                              f.charId
                                                                  ? e.jsx("span", {
                                                                        className: "insta-act-known",
                                                                        children: "认识",
                                                                    })
                                                                  : e.jsx("span", {
                                                                        className: "insta-act-what",
                                                                        children: f.relation,
                                                                    }),
                                                              e.jsx("i", {
                                                                  children: be(
                                                                      (d = f.last) == null
                                                                          ? void 0
                                                                          : d.createdAt,
                                                                  ),
                                                              }),
                                                          ],
                                                      }),
                                                      e.jsx("div", {
                                                          className: "insta-act-body",
                                                          children: String(
                                                              ((m = f.last) == null ? void 0 : m.content) ||
                                                                  "",
                                                          ).slice(0, 60),
                                                      }),
                                                  ],
                                              }),
                                              f.unread
                                                  ? e.jsx("em", {
                                                        className: "insta-act-unread",
                                                        children: f.unread,
                                                    })
                                                  : e.jsx(Qe, { size: 16, className: "insta-act-chev" }),
                                          ],
                                      },
                                      f.id,
                                  );
                              })),
                    u === "comments" &&
                        (w.length === 0
                            ? e.jsx(fe, {
                                  title: "还没有人评论",
                                  hint: "别人评论你、回复你，或者你关注的人更新时会出现在这里",
                              })
                            : w.map((f) => {
                                  var k;
                                  const d = f.kind === "post" ? U(s, f.ownerId) : Me(s, f.comment),
                                      m =
                                          f.kind === "post"
                                              ? "发布了新动态"
                                              : f.kind === "reply"
                                                ? "回复了你"
                                                : "评论了你的动态",
                                      g =
                                          f.kind === "post"
                                              ? f.post.body ||
                                                f.post.caption ||
                                                ((k = f.post.card) == null ? void 0 : k.title) ||
                                                "[图片]"
                                              : f.comment.text;
                                  return e.jsxs(
                                      "button",
                                      {
                                          className: "insta-act btn-plain",
                                          onClick: () => l.openThread(f.ownerId, f.post.id),
                                          children: [
                                              e.jsx(ee, { src: d.avatar, name: d.name, size: 38 }),
                                              e.jsxs("div", {
                                                  className: "insta-act-copy",
                                                  children: [
                                                      e.jsxs("div", {
                                                          className: "insta-act-head",
                                                          children: [
                                                              e.jsx("b", { children: d.name }),
                                                              e.jsx("span", { children: m }),
                                                              e.jsx("i", { children: be(f.at) }),
                                                          ],
                                                      }),
                                                      e.jsx("div", {
                                                          className: "insta-act-body",
                                                          children: String(g).slice(0, 60),
                                                      }),
                                                  ],
                                              }),
                                              e.jsx(Qe, { size: 16, className: "insta-act-chev" }),
                                          ],
                                      },
                                      f.id,
                                  );
                              })),
                ],
            }),
        ],
    });
}
function on({ accountRef: s, convId: t, onClose: n }) {
    const { state: l, socialSetInbox: a } = le(),
        { readOnly: o } = ke(),
        i = Rs(l, "insta", s),
        r = (i.strangers || []).find((u) => u.id === t);
    return (
        p.useEffect(() => {
            !r ||
                !r.unread ||
                a("insta", s, {
                    ...i,
                    strangers: i.strangers.map((u) => (u.id === t ? { ...u, unread: 0 } : u)),
                });
        }, [t]),
        r
            ? e.jsxs(e.Fragment, {
                  children: [
                      e.jsx(Ie, { title: r.name }),
                      e.jsxs("div", {
                          className: "insta-scroll",
                          children: [
                              e.jsxs("div", {
                                  className: "insta-stranger-head",
                                  children: [
                                      e.jsx(ee, { src: null, name: r.name, size: 64 }),
                                      e.jsx("b", { children: r.name }),
                                      e.jsxs("span", { children: ["@", r.handle] }),
                                      r.relation ? e.jsx("em", { children: r.relation }) : null,
                                  ],
                              }),
                              e.jsx("div", {
                                  className: "insta-stranger-thread",
                                  children: r.msgs.map((u, j) => {
                                      const v = r.msgs[j - 1],
                                          w = !v || u.at - v.at > 36e5;
                                      return e.jsxs(
                                          Ks.Fragment,
                                          {
                                              children: [
                                                  w
                                                      ? e.jsx("div", {
                                                            className: "insta-stranger-when",
                                                            children: be(u.at),
                                                        })
                                                      : null,
                                                  e.jsxs("div", {
                                                      className: `insta-stranger-msg ${u.dir === "out" ? "out" : ""}`,
                                                      children: [
                                                          e.jsx("span", {
                                                              className: "selectable",
                                                              children: u.text,
                                                          }),
                                                          e.jsx(ze, {
                                                              className: "dm-trans",
                                                              text: u.text,
                                                              open: !0,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          },
                                          u.id,
                                      );
                                  }),
                              }),
                              e.jsx("div", {
                                  className: "insta-stranger-note",
                                  children: o
                                      ? "他这边收到的记录，只读。"
                                      : "陌生人发来的记录，只读。想真的认识这个人，得先在他主页加上 —— 那是另一件事。",
                              }),
                          ],
                      }),
                  ],
              })
            : e.jsxs(e.Fragment, {
                  children: [
                      e.jsx(Ie, { title: "私信" }),
                      e.jsx("div", {
                          className: "insta-scroll",
                          children: e.jsx(fe, { title: "这条不在了" }),
                      }),
                  ],
              })
    );
}
function dn({ mode: s = "following" }) {
    const { state: t, instaToggleFollow: n } = le(),
        l = me(),
        [a, o] = p.useState(s),
        i = t.insta.me.following || [],
        r =
            a === "following"
                ? t.characters.filter((u) => i.includes(u.id))
                : t.characters.filter((u) => !i.includes(u.id));
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Ie, { title: "关注" }),
            e.jsxs("div", {
                className: "insta-scroll",
                children: [
                    e.jsxs("div", {
                        className: "insta-people-switch",
                        children: [
                            e.jsx("button", {
                                className: a === "following" ? "on" : "",
                                onClick: () => o("following"),
                                children: "正在关注",
                            }),
                            e.jsx("button", {
                                className: a === "suggest" ? "on" : "",
                                onClick: () => o("suggest"),
                                children: "为你推荐",
                            }),
                        ],
                    }),
                    r.length === 0
                        ? e.jsx(fe, { title: a === "following" ? "还没有关注任何人" : "没有可推荐的账号了" })
                        : r.map((u) => {
                              const j = U(t, u.id),
                                  v = i.includes(u.id);
                              return e.jsxs(
                                  "div",
                                  {
                                      className: "insta-person",
                                      children: [
                                          e.jsxs("button", {
                                              className: "insta-person-main btn-plain",
                                              onClick: () => l.openProfile(u.id),
                                              children: [
                                                  e.jsx(ee, { src: j.avatar, name: j.name, size: 44 }),
                                                  e.jsxs("div", {
                                                      children: [
                                                          e.jsx("div", {
                                                              className: "insta-person-name",
                                                              children: j.name,
                                                          }),
                                                          e.jsxs("div", {
                                                              className: "insta-person-sub",
                                                              children: [
                                                                  "@",
                                                                  j.handle,
                                                                  j.bio
                                                                      ? ` · ${String(j.bio).slice(0, 18)}`
                                                                      : "",
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          e.jsx("button", {
                                              className: `th-btn tight ${v ? "" : "solid"}`,
                                              onClick: () => n(u.id),
                                              children: v ? "已关注" : "关注",
                                          }),
                                      ],
                                  },
                                  u.id,
                              );
                          }),
                ],
            }),
        ],
    });
}
function Me(s, t) {
    var n, l;
    if ((t == null ? void 0 : t.author) === "char" && t.charId && de(t.acct)) {
        const a = ge(s, "insta", t.acct) || {};
        return a.id
            ? {
                  name: a.nickname || a.handle || t.name,
                  avatar: a.avatar || null,
                  handle: a.handle || null,
                  known: !1,
                  charId: null,
                  altRef: t.acct,
                  altOwner: t.charId,
                  suspect: a.linked !== !0 && !!a.fromGen,
              }
            : { name: t.name || "anon", avatar: null, handle: null, known: !1, charId: null };
    }
    if ((t == null ? void 0 : t.author) === "char" && t.charId) {
        const a = s.characters.find((o) => o.id === t.charId);
        return {
            name: ((n = s.insta.chars[t.charId]) == null ? void 0 : n.nickname) || Se(a),
            avatar: ie(s, t.charId),
            handle: $e((l = s.insta.chars[t.charId]) == null ? void 0 : l.username, Se(a)),
            known: !0,
            charId: t.charId,
        };
    }
    return (t == null ? void 0 : t.author) === "me"
        ? {
              name: s.insta.me.nickname || Re(s.me),
              avatar: ie(s, "me"),
              handle: $e(s.insta.me.username, Re(s.me)),
              known: !0,
              charId: "me",
          }
        : {
              name: (t == null ? void 0 : t.name) || "anon",
              avatar: (t == null ? void 0 : t.avatar) || null,
              handle: null,
              known: !1,
              charId: null,
          };
}
function U(s, t) {
    var i;
    if (String(t).startsWith("pub:")) {
        const r = String(t).slice(4),
            u = ((i = s.insta.publics) == null ? void 0 : i[r]) || {};
        return {
            name: u.nickname || r,
            username: r,
            avatar: null,
            handle: r,
            bio: u.bio || "",
            followers: u.followers || 0,
            stranger: !0,
        };
    }
    if (de(t)) {
        const r = ge(s, "insta", t),
            u = r.nickname || r.handle || "小号";
        return {
            name: u,
            username: r.handle,
            avatar: r.avatar || null,
            handle: $e(r.handle, u),
            bio: r.bio || "",
            bioTr: r.bioTr || "",
            followers: r.followers || 0,
            alt: !0,
            why: r.why || "",
        };
    }
    if (t === "me") {
        const r = s.insta.me.nickname || Re(s.me);
        return {
            name: r,
            username: s.insta.me.username,
            avatar: ie(s, "me"),
            handle: $e(s.insta.me.username, r),
            bio: s.insta.me.bio ?? s.me.signature ?? "",
            followers: s.insta.me.followers || 0,
        };
    }
    const l = s.characters.find((r) => r.id === t),
        a = s.insta.chars[t],
        o = (a == null ? void 0 : a.nickname) || Se(l);
    return {
        name: o,
        username: a == null ? void 0 : a.username,
        avatar: ie(s, t),
        handle: $e(a == null ? void 0 : a.username, o),
        bio: (a == null ? void 0 : a.bio) ?? (l == null ? void 0 : l.signature) ?? "",
        bioTr: (a != null && a.bio && a.bioTr) || "",
        followers: (a == null ? void 0 : a.followers) ?? null,
    };
}
function cs() {
    const { state: s } = le();
    return p.useMemo(
        () =>
            (s.characters || []).map((t) => {
                const n = s.insta.chars[t.id],
                    l = (n == null ? void 0 : n.nickname) || Se(t);
                return {
                    id: t.id,
                    name: l,
                    handle: $e(n == null ? void 0 : n.username, l),
                    avatar: ie(s, t.id),
                };
            }),
        [s.characters, s.insta.chars],
    );
}
function Je({ text: s }) {
    const t = me(),
        n = cs();
    return e.jsx(Et, { text: s, candidates: n, onOpen: t.openProfile, skin: "insta" });
}
function ee({ src: s, name: t, size: n = 36, className: l = "" }) {
    return e.jsx("span", {
        className: `th-av ${l}`,
        style: { width: n, height: n, fontSize: Math.round(n * 0.42) },
        children: s ? e.jsx(Ce, { src: s, alt: "" }) : e.jsx("i", { children: String(t || "·").slice(0, 1) }),
    });
}
function os(s, t, n) {
    var a;
    const l =
        t === "me"
            ? s.insta.me
            : String(t).startsWith("pub:")
              ? (a = s.insta.publics) == null
                  ? void 0
                  : a[String(t).slice(4)]
              : String(t).startsWith("alt:")
                ? ge(s, "insta", t)
                : s.insta.chars[t];
    return ((l == null ? void 0 : l.posts) || []).find((o) => o.id === n) || null;
}
function Ls(s, t, n) {
    var o, i;
    const l = U(s, t),
        a = Fe(n)[0];
    return {
        ownerId: t,
        postId: n.id,
        name: l.name,
        avatar: l.avatar || null,
        createdAt: n.createdAt,
        text: (n.kind === "textcard"
            ? [(o = n.card) == null ? void 0 : o.title, (i = n.card) == null ? void 0 : i.body]
                  .filter(Boolean)
                  .join(" ")
            : n.body || n.caption || ""
        ).slice(0, 400),
        thumb: (a == null ? void 0 : a.ref) || null,
        thumbDesc: (a == null ? void 0 : a.desc) || "",
        count: Fe(n).length,
    };
}
function Us({ quote: s, onOpen: t }) {
    const { state: n } = le(),
        l = s ? os(n, s.ownerId, s.postId) : null;
    if (!s) return null;
    const a = l ? Ls(n, s.ownerId, l) : s,
        o = !l;
    return e.jsxs("div", {
        role: "button",
        tabIndex: 0,
        className: `th-qcard${o ? " gone" : ""}`,
        onClick: (i) => {
            (i.stopPropagation(), o || t == null || t(s.ownerId, s.postId));
        },
        children: [
            e.jsxs("div", {
                className: "th-qhead",
                children: [
                    e.jsx(ee, { src: a.avatar, name: a.name, size: 20 }),
                    e.jsx("b", { children: a.name }),
                    e.jsx("span", { children: a.createdAt ? be(a.createdAt) : "" }),
                ],
            }),
            a.text ? e.jsx("div", { className: "th-qtext", children: a.text }) : null,
            a.thumb || a.thumbDesc
                ? e.jsxs("div", {
                      className: "th-qmedia",
                      children: [
                          a.thumb ? e.jsx(Ce, { src: a.thumb, alt: "" }) : e.jsx(is, { desc: a.thumbDesc }),
                          a.count > 1 ? e.jsx("i", { children: a.count }) : null,
                      ],
                  })
                : null,
            o ? e.jsx("div", { className: "th-qgone", children: "原帖已删除" }) : null,
        ],
    });
}
function fe({ title: s, hint: t, action: n }) {
    return e.jsxs("div", {
        className: "insta-empty",
        children: [
            e.jsx("div", { className: "insta-empty-title", children: s }),
            t && e.jsx("div", { className: "insta-empty-hint", children: t }),
            n && e.jsx("button", { className: "insta-empty-action", onClick: n.onClick, children: n.label }),
        ],
    });
}
function Hs({ post: s, item: t, index: n = 0, className: l = "th-descimg" }) {
    const { state: a, instaUpdatePost: o } = le(),
        i = s.ownerId || (s.ownerKind === "me" ? "me" : null),
        r = i && $s(a, "insta", i) ? () => ls(a, o, i, s) : void 0;
    return e.jsx(Dt, {
        className: l,
        src: null,
        desc: (t == null ? void 0 : t.desc) ?? s.photoDesc,
        genKey: Bt(s, n),
        onRegen: r,
    });
}
function mn({ post: s, items: t, onOpenLightbox: n }) {
    return e.jsx("div", {
        className: "th-carousel",
        onClick: (l) => l.stopPropagation(),
        children: t.map((l, a) =>
            e.jsx(
                "div",
                {
                    className: `th-slide ${l.ref ? "is-img" : "is-desc"}`,
                    children: l.ref
                        ? e.jsx(Ce, {
                              src: l.ref,
                              alt: "",
                              onClick: () => (n == null ? void 0 : n({ src: l.ref })),
                          })
                        : e.jsx(Hs, { post: s, item: l, index: a, className: "th-slide-desc" }),
                },
                a,
            ),
        ),
    });
}
function hn({ src: s, onOpenLightbox: t }) {
    const [n, l] = p.useState(!1);
    return e.jsx("div", {
        className: `th-media${n ? " is-tall" : ""}`,
        children: e.jsx(Ce, {
            src: s,
            alt: "",
            onLoad: (a) => {
                const { naturalWidth: o, naturalHeight: i } = a.currentTarget;
                l(o > 0 && i / o > 1.25);
            },
            onClick: (a) => {
                (a.stopPropagation(), t == null || t({ src: s }));
            },
        }),
    });
}
function un({ post: s, onOpenLightbox: t }) {
    var v, w, y, A;
    const { state: n } = le(),
        l = me(),
        a = s.ownerId && de(s.ownerId) ? Pe(n, "insta", s.ownerId) : s.ownerId,
        o = s.kind === "textcard",
        i = o
            ? [
                  (v = s.card) == null ? void 0 : v.title,
                  (w = s.card) == null ? void 0 : w.body,
                  s.caption,
              ].filter(Boolean).join(`
`)
            : s.body,
        r = Ms(s.kind === "pure_text" || o ? i : s.caption, s.tr),
        u = Fe(s),
        j =
            a && a !== "me" && r.text
                ? e.jsx(ze, { className: "th-trans", charId: a, known: r.tr, text: r.text })
                : null;
    return e.jsxs(e.Fragment, {
        children: [
            (s.kind === "pure_text" || o) &&
                e.jsx("div", {
                    className: "th-text",
                    children: r.text ? e.jsx(Je, { text: r.text }) : "(空)",
                }),
            (s.kind === "pure_text" || o) && j,
            s.kind === "photo" &&
                e.jsxs(e.Fragment, {
                    children: [
                        r.text &&
                            e.jsx("div", { className: "th-text", children: e.jsx(Je, { text: r.text }) }),
                        j,
                        u.length > 1
                            ? e.jsx(mn, { post: s, items: u, onOpenLightbox: t })
                            : (y = u[0]) != null && y.ref
                              ? e.jsx(hn, { src: u[0].ref, onOpenLightbox: t })
                              : (A = u[0]) != null && A.desc
                                ? e.jsx("div", {
                                      className: "th-media",
                                      children: e.jsx(Hs, { post: s, item: u[0] }),
                                  })
                                : null,
                    ],
                }),
            s.location &&
                e.jsxs("div", { className: "th-place", children: [e.jsx(Xe, { size: 11 }), s.location] }),
            s.quoteOf && e.jsx(Us, { quote: s.quoteOf, onOpen: l.openThread }),
        ],
    });
}
function _e({ post: s, root: t = !1, repostLine: n = !1 }) {
    var C;
    const { state: l, instaRemovePost: a, instaUpdatePost: o } = le(),
        i = me(),
        r = Ne(),
        [u, j] = p.useState(!!s.likedByMe),
        v = (D) => {
            const H = typeof D == "function" ? D(u) : D;
            j(H);
            try {
                o(s.ownerId, s.id, { likedByMe: H, likedAt: H ? Date.now() : 0, __silent: !0 });
            } catch {}
        },
        w = !!s.repostedByMe,
        [y, A] = p.useState(null),
        z = () => o(s.ownerId, s.id, { repostedByMe: !w, repostAt: w ? 0 : Date.now(), __silent: !0 }),
        I = (s.reposts || 0) + (w ? 1 : 0),
        [b, c] = p.useState(!1),
        [B, f] = p.useState(!1),
        d = ds(),
        m = U(l, s.ownerId),
        g = s.comments || [],
        k = p.useMemo(() => et(l.characters, s.id), [l.characters, s.id]),
        P = p.useMemo(() => {
            const D = new Set(),
                H = [];
            for (const se of g) {
                const L = Me(l, se);
                if (!D.has(L.name) && (D.add(L.name), H.push(L), H.length >= 3)) break;
            }
            return H;
        }, [g, l]),
        E = () => i.openThread(s.ownerId, s.id),
        { readOnly: h } = ke(),
        M = (s.likes || 0) + (u ? 1 : 0),
        R = () => i.share(wn(l, s), s.ownerId !== "me" && !de(s.ownerId) ? s.ownerId : null),
        _ = n === !0 ? "me" : n,
        Z = _ && (_ === "me" ? w : (s.repostedBy || []).includes(_)) ? U(l, _) : null,
        T = _ === "me" ? s.repostAt : (C = s.repostAtBy) == null ? void 0 : C[_];
    return e.jsxs("article", {
        className: `th-item ${t ? "is-root" : ""}${Z ? " has-rp" : ""}`,
        children: [
            Z &&
                e.jsxs("div", {
                    className: "th-rpline",
                    children: [
                        e.jsx("i", {
                            className: "th-rpico",
                            "aria-hidden": "true",
                            children: e.jsx(We, { size: 14, strokeWidth: 2 }),
                        }),
                        e.jsxs("span", { children: [Z.name, " 转发了"] }),
                        e.jsx("em", { children: be(T || s.createdAt) }),
                    ],
                }),
            e.jsxs("div", {
                className: "th-gutter",
                children: [
                    e.jsx("button", {
                        className: "btn-plain",
                        onClick: () => i.openProfile(s.ownerId),
                        "aria-label": "打开主页",
                        children: e.jsx(ee, { src: m.avatar, name: m.name, size: 38 }),
                    }),
                    g.length > 0 && !t && e.jsx("span", { className: "th-line" }),
                    P.length > 0 &&
                        !t &&
                        e.jsx("span", {
                            className: "th-faces",
                            children: P.map((D, H) =>
                                e.jsx(
                                    ee,
                                    { src: D.avatar, name: D.name, size: 18, className: `th-face i${H}` },
                                    H,
                                ),
                            ),
                        }),
                ],
            }),
            e.jsxs("div", {
                className: "th-main",
                children: [
                    e.jsxs("header", {
                        className: "th-head",
                        children: [
                            e.jsx("button", {
                                className: "th-name btn-plain",
                                onClick: () => i.openProfile(s.ownerId),
                                children: m.name,
                            }),
                            m.stranger && e.jsx("span", { className: "th-rec", children: "推荐" }),
                            e.jsxs("span", {
                                className: "th-time",
                                children: [be(s.createdAt), s.editedAt ? " · 已编辑" : ""],
                            }),
                            s.deletedAt
                                ? e.jsx("span", { className: "th-flag", children: "已删除" })
                                : s.onlyMe
                                  ? e.jsx("span", { className: "th-flag", children: "仅自己可见" })
                                  : null,
                            e.jsx("button", {
                                className: "th-more btn-plain",
                                onClick: (D) => {
                                    (D.stopPropagation(), c(!0));
                                },
                                "aria-label": "更多操作",
                                children: e.jsx(He, { size: 17 }),
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        className: t ? "" : "th-tap",
                        onClick: t ? void 0 : E,
                        children: e.jsx(un, { post: s, onOpenLightbox: i.openLightbox }),
                    }),
                    e.jsxs("div", {
                        className: "th-actions counts",
                        children: [
                            e.jsxs("button", {
                                onClick: (D) => {
                                    (D.stopPropagation(), v((H) => !H));
                                },
                                "aria-label": "点赞",
                                className: u ? "on liked" : "",
                                children: [
                                    e.jsx(Te, { size: 19, filled: u }),
                                    M > 0 && e.jsx("span", { children: ve(M) }),
                                ],
                            }),
                            e.jsxs("button", {
                                onClick: (D) => {
                                    (D.stopPropagation(), E());
                                },
                                "aria-label": "回复",
                                children: [
                                    e.jsx(ss, { size: 19 }),
                                    g.length > 0 && e.jsx("span", { children: g.length }),
                                ],
                            }),
                            e.jsxs("button", {
                                onClick: (D) => {
                                    (D.stopPropagation(), h || A(D.currentTarget));
                                },
                                "aria-label": w ? "已转发" : "转发",
                                "aria-haspopup": "menu",
                                className: w ? "on reposted" : "",
                                children: [
                                    e.jsx(We, { size: 20, strokeWidth: w ? 2.1 : 1.7 }),
                                    I > 0 && e.jsx("span", { children: ve(I) }),
                                ],
                            }),
                            !h &&
                                e.jsx("button", {
                                    onClick: (D) => {
                                        (D.stopPropagation(), R());
                                    },
                                    "aria-label": "分享到聊天",
                                    children: e.jsx(Fs, { size: 18, strokeWidth: 1.9 }),
                                }),
                        ],
                    }),
                    s.reacting && e.jsx("div", { className: "th-meta", children: "正在扩散到时间线…" }),
                ],
            }),
            y &&
                e.jsx(_t, {
                    theme: "ig",
                    anchor: y,
                    onClose: () => A(null),
                    items: [
                        w
                            ? { key: "rp", label: "移除", icon: e.jsx(We, { size: 20 }), onClick: z }
                            : { key: "rp", label: "转发", icon: e.jsx(We, { size: 20 }), onClick: z },
                        {
                            key: "q",
                            label: "引用",
                            icon: e.jsx(st, { size: 20 }),
                            onClick: () => i.quote(s.ownerId, s),
                        },
                    ],
                }),
            e.jsx(Ve, {
                open: b,
                onClose: () => c(!1),
                title: "这条动态",
                actions: [
                    !h && { label: "分享到聊天", onClick: R },
                    {
                        label: d.busy ? "停止生成反响" : "让大家看到这条 · 生成一轮反响",
                        onClick: () => (d.busy ? d.stop() : d.run(s.ownerId, s)),
                    },
                    { label: "编辑", onClick: () => i.editPost(s.ownerId, s) },
                    {
                        label: "删除",
                        destructive: !0,
                        onClick: () => {
                            k ? f(!0) : a(s.ownerId, s.id);
                        },
                    },
                ].filter(Boolean),
            }),
            e.jsx(Ve, {
                open: B,
                onClose: () => f(!1),
                title: `这条动态关联 ${k} 条记忆`,
                actions: [
                    {
                        label: "仅删除动态 · 保留记忆",
                        destructive: !0,
                        onClick: () => {
                            (a(s.ownerId, s.id), r("动态已删除，关联记忆已保留"));
                        },
                    },
                    {
                        label: "动态与关联记忆一起删除",
                        destructive: !0,
                        onClick: () => {
                            (a(s.ownerId, s.id, { removeDerived: !0 }), r(`已删除动态与 ${k} 条关联记忆`));
                        },
                    },
                ],
            }),
        ],
    });
}
function Ns({
    c: s,
    child: t = !1,
    rootName: n = "",
    lineBelow: l = !1,
    replies: a = 0,
    state: o,
    nav: i,
    onReply: r,
    onMore: u,
    onLike: j,
}) {
    var A;
    const v = Me(o, s),
        w = Ms(s.text, s.tr),
        y = s.replyToName && (!t || s.replyToName !== n) ? s.replyToName : "";
    return e.jsxs("article", {
        className: `th-item th-reply ${t ? "is-child" : ""}`,
        children: [
            e.jsxs("div", {
                className: "th-gutter",
                children: [
                    e.jsx("button", {
                        className: "btn-plain",
                        onClick: () =>
                            v.altRef
                                ? i.openAlt(v.altRef, v.altOwner, v.suspect)
                                : v.charId && i.openProfile(v.charId),
                        "aria-label": "打开主页",
                        children: e.jsx(ee, { src: v.avatar, name: v.name, size: t ? 26 : 36 }),
                    }),
                    l && e.jsx("span", { className: "th-line" }),
                ],
            }),
            e.jsxs("div", {
                className: "th-main",
                children: [
                    e.jsxs("header", {
                        className: "th-head",
                        children: [
                            e.jsx("span", { className: "th-name", children: v.name }),
                            e.jsx("span", { className: "th-time", children: be(s.createdAt) }),
                            e.jsx("button", {
                                className: "th-more btn-plain",
                                onClick: () => u(s),
                                "aria-label": "更多操作",
                                children: e.jsx(He, { size: 15 }),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "th-text",
                        children: [
                            y && e.jsxs("span", { className: "th-at", children: ["@", y, " "] }),
                            e.jsx(Je, { text: w.text }),
                        ],
                    }),
                    s.author !== "me" &&
                        e.jsx(ze, {
                            className: "th-trans",
                            charId: v.charId || null,
                            text: w.text,
                            known: w.tr,
                        }),
                    (A = s.likedBy) != null && A.length
                        ? e.jsxs("div", {
                              className: "th-liked-by",
                              children: [
                                  e.jsx(Te, { size: 11, filled: !0 }),
                                  s.likedBy.map((z) => U(o, z).name).join("、"),
                                  " 赞了",
                              ],
                          })
                        : null,
                    e.jsxs("div", {
                        className: "th-actions counts th-reply-acts",
                        children: [
                            e.jsxs("button", {
                                className: s.likedByMe ? "on liked" : "",
                                onClick: () => j(s),
                                "aria-label": "点赞",
                                children: [
                                    e.jsx(Te, { size: 17, filled: !!s.likedByMe }),
                                    s.likes > 0 && e.jsx("span", { children: ve(s.likes) }),
                                ],
                            }),
                            e.jsxs("button", {
                                onClick: () => r(s),
                                "aria-label": "回复",
                                children: [e.jsx(ss, { size: 17 }), a > 0 && e.jsx("span", { children: a })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function fn({ ownerId: s, postId: t }) {
    var Z;
    const { state: n, instaAppendComment: l, instaRemoveComment: a, instaUpdatePost: o } = le(),
        i = me(),
        r = Ne(),
        u = ds(),
        [j, v] = p.useState(""),
        [w, y] = p.useState(() => new Set()),
        [A, z] = p.useState(null),
        [I, b] = p.useState(null),
        c = p.useRef(null),
        B = p.useRef(null),
        f = cs(),
        d = Ps({ value: j, setValue: v, candidates: f, inputRef: c, skin: "insta" }),
        m = Ts("insta"),
        k = (
            (s === "me"
                ? n.insta.me
                : String(s).startsWith("pub:")
                  ? ((Z = n.insta.publics) == null ? void 0 : Z[String(s).slice(4)]) || { posts: [] }
                  : String(s).startsWith("alt:")
                    ? ge(n, "insta", s) || { posts: [] }
                    : n.insta.chars[s] || { posts: [] }
            ).posts || []
        ).find((T) => T.id === t),
        P = p.useMemo(() => Ot((k == null ? void 0 : k.comments) || []), [k == null ? void 0 : k.comments]),
        E = ((k == null ? void 0 : k.comments) || []).length,
        h = (T) =>
            o(s, t, {
                comments: ((k == null ? void 0 : k.comments) || []).map((C) =>
                    C.id === T.id
                        ? {
                              ...C,
                              likedByMe: !C.likedByMe,
                              likes: Math.max(0, (C.likes || 0) + (C.likedByMe ? -1 : 1)),
                          }
                        : C,
                ),
                __silent: !0,
            }),
        M = U(n, s),
        R = (T) => {
            const C = Me(n, T);
            (z({ id: T.id, name: C.name }), requestAnimationFrame(() => St(c)));
        },
        _ = () => {
            var se;
            if (!j.trim() || !k) return;
            const T = j.trim(),
                C = n.insta.me.nickname || Re(n.me),
                D = ye("cc_"),
                H = zs(T, f);
            (l(s, t, {
                id: D,
                name: C,
                text: T,
                avatar: ie(n, "me"),
                author: "me",
                replyToId: (A == null ? void 0 : A.id) || null,
                replyToName: (A == null ? void 0 : A.name) || null,
                ...(H.length ? { mentions: H } : null),
            }),
                H.length &&
                    m({
                        ids: H,
                        where: "comment",
                        userText: T,
                        target: {
                            ownerId: s,
                            ownerName: M.name,
                            owner: s === "me" ? "her" : "other",
                            text:
                                k.kind === "pure_text"
                                    ? k.body
                                    : [(se = k.card) == null ? void 0 : se.title, k.caption].filter(Boolean)
                                          .join(`
`),
                        },
                        thread: (k.comments || []).slice(-6).map((L) => `${Me(n, L).name}：${L.text}`),
                        nameOf: (L) => U(n, L).name,
                        onReply: (L, N) =>
                            l(s, t, {
                                name: U(n, L).name,
                                text: N,
                                avatar: ie(n, L),
                                author: "char",
                                charId: L,
                                replyToId: D,
                                replyToName: C,
                                createdAt: Date.now() + 6e4,
                            }),
                        onLike: (L) =>
                            o(s, t, (N) => ({
                                comments: (N.comments || []).map(($) =>
                                    $.id === D
                                        ? {
                                              ...$,
                                              likes: ($.likes || 0) + 1,
                                              likedBy: [...new Set([...($.likedBy || []), L])],
                                          }
                                        : $,
                                ),
                                __silent: !0,
                            })),
                    }),
                v(""),
                z(null),
                requestAnimationFrame(() => {
                    B.current && (B.current.scrollTop = B.current.scrollHeight);
                }));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Ie, {
                title: "帖子",
                right: k
                    ? e.jsx("button", {
                          className: `insta-icon-button ${u.busy ? "is-busy" : ""}`,
                          onClick: () => (u.busy ? u.stop() : u.run(s, k)),
                          "aria-label": u.busy ? "停止生成" : "生成一轮反响",
                          title: u.busy ? "停止生成" : "生成一轮反响",
                          children: u.busy ? e.jsx(es, { size: 18 }) : e.jsx(tt, { size: 18 }),
                      })
                    : null,
            }),
            e.jsx("div", {
                className: "th-page-scroll",
                ref: B,
                children: k
                    ? e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(_e, { post: { ...k, ownerId: s }, root: !0 }),
                              e.jsx("div", {
                                  className: "th-replies-head",
                                  children: E ? `${E} 条回复` : "还没有人回复",
                              }),
                              P.map((T) => {
                                  const C = w.has(T.id),
                                      D = C ? T.replies : T.replies.slice(0, 2),
                                      H = T.replies.length - D.length,
                                      se = Me(n, T).name,
                                      L = { state: n, nav: i, onReply: R, onMore: b, onLike: h };
                                  return e.jsxs(
                                      "div",
                                      {
                                          className: "th-group",
                                          children: [
                                              e.jsx(Ns, { c: T, replies: T.replies.length, ...L }),
                                              (D.length > 0 || H > 0) &&
                                                  e.jsxs("div", {
                                                      className: "th-children",
                                                      children: [
                                                          D.map((N) =>
                                                              e.jsx(
                                                                  Ns,
                                                                  { c: N, child: !0, rootName: se, ...L },
                                                                  N.id,
                                                              ),
                                                          ),
                                                          H > 0 &&
                                                              e.jsxs("button", {
                                                                  className: "th-more-replies btn-plain",
                                                                  onClick: () =>
                                                                      y((N) => new Set([...N, T.id])),
                                                                  children: [
                                                                      e.jsx("i", {
                                                                          className: "th-more-dash",
                                                                      }),
                                                                      "查看另外 ",
                                                                      H,
                                                                      " 条回复",
                                                                  ],
                                                              }),
                                                          C &&
                                                              T.replies.length > 2 &&
                                                              e.jsxs("button", {
                                                                  className: "th-more-replies btn-plain",
                                                                  onClick: () =>
                                                                      y((N) => {
                                                                          const $ = new Set(N);
                                                                          return ($.delete(T.id), $);
                                                                      }),
                                                                  children: [
                                                                      e.jsx("i", {
                                                                          className: "th-more-dash",
                                                                      }),
                                                                      "收起回复",
                                                                  ],
                                                              }),
                                                      ],
                                                  }),
                                          ],
                                      },
                                      T.id,
                                  );
                              }),
                          ],
                      })
                    : e.jsx("div", { className: "th-gone", children: "这条动态已经删掉了" }),
            }),
            A &&
                e.jsxs("div", {
                    className: "th-replying",
                    children: [
                        e.jsxs("span", { children: ["回复 @", A.name] }),
                        e.jsx("button", {
                            className: "btn-plain",
                            onClick: () => z(null),
                            "aria-label": "取消回复",
                            children: e.jsx(Ae, { size: 14 }),
                        }),
                    ],
                }),
            d.panel,
            e.jsxs("div", {
                className: "th-compose",
                children: [
                    e.jsx(ee, { src: ie(n, "me"), name: "我", size: 30 }),
                    e.jsx("input", {
                        ref: c,
                        value: j,
                        ...d.bind,
                        onKeyDown: d.keyDown((T) => {
                            T.key === "Enter" && _();
                        }),
                        placeholder: A ? `回复 ${A.name}…` : `回复 ${M.name}…`,
                    }),
                    e.jsx("button", {
                        className: "th-at-btn btn-plain",
                        onClick: d.trigger,
                        "aria-label": "提到别人",
                        children: e.jsx(_s, { size: 18 }),
                    }),
                    e.jsx("button", {
                        className: "th-send",
                        onClick: _,
                        disabled: !j.trim(),
                        "aria-label": "发送",
                        children: e.jsx(Fs, { size: 18 }),
                    }),
                ],
            }),
            e.jsx(Ve, {
                open: !!I,
                onClose: () => b(null),
                title: "这条回复",
                message: I ? String(I.text).slice(0, 40) : void 0,
                actions: [
                    { label: "回复 TA", onClick: () => R(I) },
                    {
                        label: "删除",
                        destructive: !0,
                        onClick: () => {
                            (a(s, t, I.id),
                                r(I.replyCount > 0 ? "已删除；它下面的回复升成了独立评论" : "已删除"));
                        },
                    },
                ],
            }),
        ],
    });
}
const pn = [
    ["posts", "动态"],
    ["replies", "回复"],
    ["media", "媒体"],
    ["reposts", "转发"],
];
function ys({ ownerId: s, root: t = !1 }) {
    var hs;
    const {
            state: n,
            instaSetMe: l,
            instaSetChar: a,
            instaToggleFollow: o,
            instaAppendPost: i,
            socialAddAlt: r,
            socialPatchAlt: u,
        } = le(),
        j = me(),
        v = Ne(),
        w = ts(),
        y = Es(`insta:batch:${s}`),
        { v: A, readOnly: z } = ke(),
        I = de(s),
        b = I ? Pe(n, "insta", s) : s,
        c = b === "me",
        B = b === A,
        f = c && !z,
        d = c ? null : n.characters.find((x) => x.id === b),
        m = String(s).startsWith("pub:"),
        g = m
            ? ((hs = n.insta.publics) == null ? void 0 : hs[String(s).slice(4)]) || { posts: [] }
            : I
              ? ge(n, "insta", s)
              : c
                ? n.insta.me
                : n.insta.chars[b] || {
                      nickname: null,
                      username: null,
                      bio: null,
                      avatar: null,
                      followers: null,
                      posts: [],
                  },
        [k, P] = p.useState(!1),
        E = p.useRef(null),
        [h, M] = p.useState(!1),
        [R, _] = p.useState("posts"),
        [Z, T] = p.useState(!1),
        C = U(n, s),
        D = z && b === A,
        H = p.useMemo(
            () =>
                ns(n, "insta", b, {
                    all: D,
                    nameOf: (x) => (x === "me" ? Re(n.me) : Se(n.characters.find((F) => F.id === x) || {})),
                }),
            [n.insta, n.characters, n.me, b, D],
        ),
        se = !B && (n.insta.me.following || []).includes(I ? s : b),
        L = (x) => {
            const F = "bio" in x && !("bioTr" in x) ? { ...x, bioTr: "" } : x;
            if (I) {
                const { username: q, ...J } = F;
                u("insta", b, I, "username" in F ? { ...J, handle: q } : J);
                return;
            }
            c ? l(F) : a(b, F);
        },
        N = async (x) => {
            var J;
            const F = (J = x.target.files) == null ? void 0 : J[0];
            if (((x.target.value = ""), !F)) return;
            const q = await At(F, { aspect: 1, shape: "circle", title: "头像" }, { note: "Insta 头像" });
            q && L({ avatar: q });
        },
        $ = we.usableLane(n.api.insta, n.api.chat),
        V = d ? as(n, d, { ref: s }) : null,
        Y = (x, F) =>
            x != null && x.aborted
                ? (v("已停止生成"), !1)
                : x != null && x.skipped
                  ? !1
                  : x != null && x.error
                    ? (v(x.error.message, "error"), !1)
                    : (F && v(F), !0),
        pe = async (x = {}) => {
            var J, W;
            if (((he.current = x), !d)) return;
            if (!($ != null && $.baseUrl)) {
                v("先在 API 设置里配好聊天或 Insta 通道", "error");
                return;
            }
            const F = await w.run(async (re) => {
                    const ae = await we.insta($, xs(V), { fallback: n.api.chat, signal: re }),
                        xe = js(Ue(ae.content), { forbiddenUsernames: [d.wechatId] });
                    if (!xe) throw new Error("主页结果格式不合格，已丢弃；不会为修格式二次调用");
                    return (
                        L({
                            nickname: xe.nickname,
                            username: xe.username,
                            bio: xe.bio,
                            bioTr: xe.bioTr,
                            followers: xe.followers,
                            ...(xe.direction ? { direction: xe.direction } : {}),
                        }),
                        !0
                    );
                }),
                q = Number(((J = he.current) == null ? void 0 : J.posts) ?? 3);
            Y(F, "主页已刷新") &&
                q > 0 &&
                (await y.run([{ char: d, ref: s !== d.id ? s : void 0 }], {
                    count: q,
                    comments: Ze((W = he.current) == null ? void 0 : W.comments),
                }));
        },
        [ce, S] = p.useState(!1),
        [K, Q] = p.useState(!1),
        he = p.useRef(null),
        je = async (x = {}) => {
            d &&
                (await y.run([{ char: d, ref: s !== d.id ? s : void 0 }], {
                    count: Math.max(1, Number(x.count) || 5),
                    comments: Ze(x.comments),
                }));
        },
        O = p.useRef(!1);
    p.useEffect(() => {
        c ||
            O.current ||
            !d ||
            g.followers != null ||
            !($ != null && $.baseUrl) ||
            ((O.current = !0),
            w
                .run(async (x) => {
                    const F = await we.insta($, xs(V), { fallback: n.api.chat, signal: x }),
                        q = js(Ue(F.content), { forbiddenUsernames: [d.wechatId] });
                    if (!q) throw new Error("主页资料格式不合格");
                    return (
                        L({
                            nickname: q.nickname,
                            username: q.username,
                            bio: q.bio,
                            bioTr: q.bioTr,
                            followers: q.followers,
                            ...(q.direction ? { direction: q.direction } : {}),
                        }),
                        !0
                    );
                })
                .then((x) => {
                    if (x != null && x.error) {
                        console.warn("[insta] 自动补主页资料失败", x.error);
                        return;
                    }
                    x != null && x.value && !(g.posts || []).length && y.run([{ char: d }], { count: 3 });
                }));
    }, [s, c, g.followers, $ == null ? void 0 : $.baseUrl]);
    const X = p.useMemo(
            () =>
                (g.posts || [])
                    .filter((x) => D || !(x.onlyMe || x.deletedAt))
                    .map((x) => ({ ...x, ownerId: s, ownerKind: c ? "me" : m ? "pub" : "char" }))
                    .sort((x, F) => (F.createdAt || 0) - (x.createdAt || 0)),
            [g.posts, s, c, D],
        ),
        G = p.useMemo(
            () => Sn([...(g.posts || [])].sort((x, F) => (F.createdAt || 0) - (x.createdAt || 0))),
            [g.posts],
        ),
        te = p.useMemo(() => {
            var q;
            const x = [],
                F = (J, W) => {
                    for (const re of W || [])
                        for (const ae of re.comments || [])
                            (c ? ae.author === "me" : ae.author === "char" && ae.charId === s) &&
                                x.push({ comment: ae, post: re, hostId: J });
                };
            F("me", n.insta.me.posts);
            for (const J of n.characters) F(J.id, (q = n.insta.chars[J.id]) == null ? void 0 : q.posts);
            return x.sort((J, W) => (W.comment.createdAt || 0) - (J.comment.createdAt || 0));
        }, [n.insta, n.characters, s, c]),
        oe = p.useMemo(() => {
            var J;
            if (I || m) return [];
            const x = [],
                F = (W, re) => {
                    for (const ae of re || [])
                        (c ? ae.repostedByMe : (ae.repostedBy || []).includes(b)) &&
                            x.push({ ...ae, ownerId: W, ownerKind: W === "me" ? "me" : "char" });
                };
            F("me", n.insta.me.posts);
            for (const W of n.characters) F(W.id, (J = n.insta.chars[W.id]) == null ? void 0 : J.posts);
            for (const [W, re] of Object.entries(n.insta.publics || {})) F(`pub:${W}`, re.posts);
            const q = (W) => {
                var re;
                return (c ? W.repostAt : (re = W.repostAtBy) == null ? void 0 : re[b]) || W.createdAt || 0;
            };
            return x.sort((W, re) => q(re) - q(W));
        }, [n.insta, n.characters, b, c, I, m]),
        ne = (n.insta.me.following || []).length,
        ue = p.useMemo(
            () =>
                c
                    ? (n.characters || []).slice(0, 3).map((x) => U(n, x.id))
                    : m
                      ? se
                          ? [U(n, "me")]
                          : []
                      : [U(n, "me")],
            [c, m, se, n],
        ),
        De = () => j.share(Cn(C, X.length, s), c || I ? null : b),
        Oe = w.busy || y.busy,
        Ke = (
            c || m
                ? []
                : [
                      {
                          title: "内容生成",
                          foot: "只影响这个号在 Insta 上的内容，不会发到聊天里",
                          items: (Oe
                              ? [
                                    {
                                        label: "停止生成",
                                        destructive: !0,
                                        onClick: () => (y.busy ? y.stop() : w.stop()),
                                    },
                                ]
                              : [
                                    {
                                        label: "让 TA 发一批动态",
                                        sub: "可设置动态与评论数量",
                                        onClick: () => S(!0),
                                    },
                                    {
                                        label: "重新生成主页资料",
                                        sub: "昵称、简介、粉丝数，可同时发布动态",
                                        onClick: () => Q(!0),
                                    },
                                    !z && {
                                        label: "资料 / 生成方向",
                                        sub: "看或改模型往哪个方向写这个号",
                                        onClick: () => P(!0),
                                    },
                                ]
                          ).filter(Boolean),
                      },
                      !z && { title: "分享", items: [{ label: "分享到聊天", onClick: De }] },
                      !z &&
                          I &&
                          (() => {
                              const x = Ss(n, "insta", b).find((F) => F.id === I);
                              return !!(x != null && x.fromGen) && x.linked === !0;
                          })() && {
                              title: "账号",
                              foot: "解除后，这个账号不再出现在 TA 的资料与查手机中；再次点到时会重新询问。",
                              items: [
                                  {
                                      label: "解除绑定",
                                      destructive: !0,
                                      onClick: () => {
                                          (u("insta", b, I, { linked: !1 }), v("已解除绑定"), j.pop());
                                      },
                                  },
                              ],
                          },
                  ]
        ).filter((x) => x && x.items.length);
    return e.jsxs(e.Fragment, {
        children: [
            t
                ? e.jsx(rs, {
                      account: {
                          handle: C.handle,
                          onClick: H.length > 1 || (B && !z) ? () => j.openAccounts(s) : null,
                      },
                      right: Ke.length
                          ? e.jsx("button", {
                                className: "insta-icon-button",
                                onClick: () => T(!0),
                                "aria-label": "更多操作",
                                children: e.jsx(He, { size: 19 }),
                            })
                          : null,
                  })
                : e.jsx(Ie, {
                      title: `@${C.handle}`,
                      right: Ke.length
                          ? e.jsx("button", {
                                className: "insta-icon-button",
                                onClick: () => T(!0),
                                "aria-label": "更多操作",
                                children: e.jsx(He, { size: 19 }),
                            })
                          : null,
                  }),
            e.jsxs("div", {
                className: "insta-scroll",
                children: [
                    C.alt &&
                        C.why &&
                        e.jsxs("div", {
                            className: "insta-accwhy",
                            children: [e.jsx("b", { children: "这个号是干嘛的：" }), C.why],
                        }),
                    e.jsxs("div", {
                        className: "th-profile ig-prof",
                        children: [
                            e.jsxs("div", {
                                className: "ig-prof-top",
                                children: [
                                    e.jsx("button", {
                                        className: "btn-plain ig-prof-av",
                                        onClick: () => f && M(!0),
                                        "aria-label": "头像",
                                        children: e.jsx(ee, { src: C.avatar, name: C.name, size: 84 }),
                                    }),
                                    e.jsxs("div", {
                                        className: "ig-prof-stats",
                                        children: [
                                            e.jsxs("span", {
                                                children: [
                                                    e.jsx("b", { children: X.length }),
                                                    e.jsx("em", { children: "动态" }),
                                                ],
                                            }),
                                            e.jsxs("button", {
                                                className: "btn-plain",
                                                onClick: () => f && P(!0),
                                                children: [
                                                    e.jsx("b", { children: ve(C.followers ?? "—") }),
                                                    e.jsx("em", { children: "关注者" }),
                                                ],
                                            }),
                                            c &&
                                                e.jsxs("button", {
                                                    className: "btn-plain",
                                                    onClick: () => j.openPeople("following"),
                                                    children: [
                                                        e.jsx("b", { children: ne }),
                                                        e.jsx("em", { children: "正在关注" }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "ig-prof-id",
                                children: [
                                    e.jsx("button", {
                                        className: "th-profile-name btn-plain",
                                        onClick: () => f && P(!0),
                                        children: C.name,
                                    }),
                                    e.jsxs("button", {
                                        className: "th-profile-handle btn-plain",
                                        onClick: () => f && P(!0),
                                        children: [
                                            "@",
                                            C.handle,
                                            e.jsx("span", {
                                                className: "th-domain",
                                                children: "litot.social",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsx("button", {
                                className: "th-profile-bio btn-plain",
                                onClick: () => f && P(!0),
                                children: C.bio || (f ? "添加个人简介" : "暂无简介"),
                            }),
                            !c &&
                                !m &&
                                C.bio &&
                                e.jsx(ze, {
                                    className: "th-trans th-profile-trans",
                                    charId: (d == null ? void 0 : d.id) || null,
                                    text: C.bio,
                                    known: C.bioTr,
                                }),
                            c &&
                                ue.length > 0 &&
                                e.jsxs("div", {
                                    className: "ig-prof-known",
                                    children: [
                                        e.jsx("span", {
                                            className: "th-follower-faces",
                                            children: ue.map((x, F) =>
                                                e.jsx(ee, { src: x.avatar, name: x.name, size: 20 }, F),
                                            ),
                                        }),
                                        e.jsx("span", {
                                            children: `${ue
                                                .map((x) => x.name)
                                                .slice(0, 2)
                                                .join("、")}${ue.length > 2 ? " 等人" : ""} 关注了你`,
                                        }),
                                    ],
                                }),
                            e.jsx("div", {
                                className: "th-profile-actions",
                                children: B
                                    ? z
                                        ? null
                                        : e.jsxs(e.Fragment, {
                                              children: [
                                                  e.jsx("button", {
                                                      className: "th-btn",
                                                      onClick: () => P(!0),
                                                      children: "编辑个人资料",
                                                  }),
                                                  e.jsx("button", {
                                                      className: "th-btn",
                                                      onClick: De,
                                                      children: "分享个人主页",
                                                  }),
                                              ],
                                          })
                                    : e.jsxs(e.Fragment, {
                                          children: [
                                              !z &&
                                                  e.jsx("button", {
                                                      className: `th-btn ${se ? "" : "solid"}`,
                                                      onClick: () => o(s),
                                                      children: se ? "已关注" : "关注",
                                                  }),
                                              !m &&
                                                  !I &&
                                                  e.jsx("button", {
                                                      className: "th-btn",
                                                      onClick: () => j.openDm(s === "me" ? A : s),
                                                      children: "发消息",
                                                  }),
                                          ],
                                      }),
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        className: "th-tabs",
                        children: pn.map(([x, F]) =>
                            e.jsx(
                                "button",
                                { className: R === x ? "on" : "", onClick: () => _(x), children: F },
                                x,
                            ),
                        ),
                    }),
                    R === "posts" &&
                        (X.length === 0
                            ? e.jsx(fe, {
                                  title: "还没有动态",
                                  hint: c || z ? void 0 : "在右上角 ⋯ 里可以让 TA 发一条",
                              })
                            : X.map((x) => e.jsx(_e, { post: x }, x.id))),
                    R === "reposts" &&
                        (oe.length === 0
                            ? e.jsx(fe, { title: "还没有转发" })
                            : oe.map((x) =>
                                  e.jsx(_e, { post: x, repostLine: c ? "me" : b }, `${x.ownerId}:${x.id}`),
                              )),
                    R === "replies" &&
                        (te.length === 0
                            ? e.jsx(fe, { title: "还没有在别人那里说过话" })
                            : te.map(({ comment: x, post: F, hostId: q }) => {
                                  var W;
                                  const J = U(n, q);
                                  return e.jsxs(
                                      "button",
                                      {
                                          className: "th-item th-reply-card btn-plain",
                                          onClick: () => j.openThread(q, F.id),
                                          children: [
                                              e.jsx("div", {
                                                  className: "th-gutter",
                                                  children: e.jsx(ee, {
                                                      src: C.avatar,
                                                      name: C.name,
                                                      size: 34,
                                                  }),
                                              }),
                                              e.jsxs("div", {
                                                  className: "th-main",
                                                  children: [
                                                      e.jsxs("header", {
                                                          className: "th-head",
                                                          children: [
                                                              e.jsx("span", {
                                                                  className: "th-name",
                                                                  children: C.name,
                                                              }),
                                                              e.jsx("span", {
                                                                  className: "th-time",
                                                                  children: be(x.createdAt),
                                                              }),
                                                          ],
                                                      }),
                                                      e.jsxs("div", {
                                                          className: "th-text",
                                                          children: [
                                                              x.replyToName &&
                                                                  e.jsxs("span", {
                                                                      className: "th-at",
                                                                      children: ["@", x.replyToName, " "],
                                                                  }),
                                                              x.text,
                                                          ],
                                                      }),
                                                      e.jsxs("div", {
                                                          className: "th-quoted",
                                                          children: [
                                                              "回复 ",
                                                              J.name,
                                                              " 的动态：",
                                                              (F.kind === "textcard"
                                                                  ? (W = F.card) == null
                                                                      ? void 0
                                                                      : W.title
                                                                  : F.body || F.caption) || "[图片]",
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      },
                                      x.id,
                                  );
                              })),
                    R === "media" &&
                        (G.length === 0
                            ? e.jsx(fe, { title: "还没有图片或文字" })
                            : e.jsx("div", {
                                  className: "ig-media",
                                  children: G.map(({ label: x, posts: F }) => {
                                      var J;
                                      const q = new Date(
                                          ((J = F[0]) == null ? void 0 : J.createdAt) || Date.now(),
                                      );
                                      return e.jsxs(
                                          "section",
                                          {
                                              className: "ig-media-sec",
                                              children: [
                                                  e.jsxs("header", {
                                                      className: "ig-media-h",
                                                      children: [
                                                          e.jsx("b", {
                                                              children: String(q.getDate()).padStart(2, "0"),
                                                          }),
                                                          e.jsxs("span", {
                                                              children: [
                                                                  e.jsxs("em", {
                                                                      children: [
                                                                          q.getMonth() + 1,
                                                                          " 月",
                                                                          q.getFullYear() !==
                                                                          new Date().getFullYear()
                                                                              ? ` · ${q.getFullYear()}`
                                                                              : "",
                                                                      ],
                                                                  }),
                                                                  e.jsx("i", { children: x }),
                                                              ],
                                                          }),
                                                          e.jsxs("small", { children: [F.length, " 条"] }),
                                                      ],
                                                  }),
                                                  e.jsx("div", {
                                                      className: "ig-media-grid",
                                                      children: F.map((W) => {
                                                          var us, fs;
                                                          const re = Fe(W),
                                                              ae = re[0],
                                                              xe =
                                                                  W.kind === "textcard"
                                                                      ? [
                                                                            (us = W.card) == null
                                                                                ? void 0
                                                                                : us.title,
                                                                            (fs = W.card) == null
                                                                                ? void 0
                                                                                : fs.body,
                                                                        ]
                                                                            .filter(Boolean)
                                                                            .join(" ")
                                                                      : W.body || W.caption || "";
                                                          return e.jsxs(
                                                              "button",
                                                              {
                                                                  className: `btn-plain ig-media-cell ${W.kind === "photo" ? "is-photo" : "is-text"}`,
                                                                  onClick: () => {
                                                                      W.kind === "photo" &&
                                                                      re.length === 1 &&
                                                                      ae != null &&
                                                                      ae.ref
                                                                          ? j.openLightbox({ src: ae.ref })
                                                                          : j.openThread(s, W.id);
                                                                  },
                                                                  children: [
                                                                      W.kind === "photo"
                                                                          ? ae != null && ae.ref
                                                                              ? e.jsx(Ce, {
                                                                                    src: ae.ref,
                                                                                    alt: "",
                                                                                })
                                                                              : e.jsx(is, { desc: "" })
                                                                          : e.jsx("span", {
                                                                                className: "ig-media-text",
                                                                                children: xe.slice(0, 90),
                                                                            }),
                                                                      re.length > 1 &&
                                                                          e.jsxs("span", {
                                                                              className: "ig-media-multi",
                                                                              "aria-label": `${re.length} 张`,
                                                                              children: [
                                                                                  e.jsx("i", {}),
                                                                                  e.jsx("i", {}),
                                                                              ],
                                                                          }),
                                                                      e.jsxs("span", {
                                                                          className: "ig-media-likes",
                                                                          children: [
                                                                              e.jsx(Te, {
                                                                                  size: 10,
                                                                                  filled: !0,
                                                                              }),
                                                                              ve(W.likes || 0),
                                                                          ],
                                                                      }),
                                                                  ],
                                                              },
                                                              W.id,
                                                          );
                                                      }),
                                                  }),
                                              ],
                                          },
                                          x,
                                      );
                                  }),
                              })),
                ],
            }),
            e.jsx(yn, {
                open: Z,
                onClose: () => T(!1),
                title: c ? "我的主页" : C.name,
                message: w.busy || y.busy ? "正在生成，可以随时停止" : void 0,
                groups: Ke,
            }),
            e.jsx(qe, {
                open: ce,
                onClose: () => S(!1),
                app: "insta-profile-posts",
                title: "发布动态",
                fields: [
                    { key: "count", label: "动态数量", min: 1, max: 10, def: 5 },
                    {
                        key: "comments",
                        label: "评论数量",
                        hint: "每条动态的评论条数（约）",
                        min: 2,
                        max: 12,
                        def: 6,
                    },
                ],
                onStart: je,
            }),
            e.jsx(qe, {
                open: K,
                onClose: () => Q(!1),
                app: "insta-profile-page",
                title: "重新生成主页资料",
                fields: [
                    {
                        key: "posts",
                        label: "同时发布动态",
                        hint: "设为 0 时仅更新资料",
                        min: 0,
                        max: 10,
                        def: 3,
                    },
                    {
                        key: "comments",
                        label: "评论数量",
                        hint: "每条动态的评论条数（约）",
                        min: 2,
                        max: 12,
                        def: 6,
                    },
                ],
                onStart: pe,
            }),
            w.busy &&
                e.jsxs("button", {
                    className: "insta-busy-bar",
                    onClick: w.stop,
                    children: [e.jsx(es, { size: 16 }), e.jsx("span", { children: "正在生成 · 点这里停下" })],
                }),
            e.jsx("input", { ref: E, type: "file", accept: "image/*", hidden: !0, onChange: N }),
            e.jsx(nt, {
                open: h,
                onClose: () => M(!1),
                title: "Insta 头像",
                ownerId: c ? "me" : b,
                current: C.avatar || "",
                onPick: (x) => L({ avatar: x }),
                onUpload: () => {
                    var x;
                    return (x = E.current) == null ? void 0 : x.click();
                },
            }),
            e.jsx(Ut, {
                open: k && !z,
                onClose: () => P(!1),
                platform: "insta",
                data: g,
                isMe: c,
                isAlt: !!I,
                title: `@${C.handle}`,
                avatarNode: e.jsx(ee, { src: C.avatar, name: C.name, size: 52 }),
                onPickAvatar: () => M(!0),
                onSave: (x) => L(x),
            }),
        ],
    });
}
function xn(s) {
    var n;
    const t = [(n = s.insta.me) == null ? void 0 : n.username];
    for (const l of Object.values(s.insta.chars || {})) t.push(l == null ? void 0 : l.username);
    for (const l of Object.values(s.insta.alts || {}))
        for (const a of l || []) t.push(a == null ? void 0 : a.handle);
    for (const [l] of Object.entries(s.insta.publics || {})) t.push(l);
    return t.filter(Boolean).map((l) => String(l).toLowerCase());
}
function jn(s, t) {
    var a;
    const n = (a = s.insta.chars[t]) == null ? void 0 : a.username,
        l = As(s, "insta", t);
    return [
        n ? `主号 @${n}` : "主号（未开）",
        ...l.map(
            (o) =>
                `小号 id=alt:${o.id} @${o.handle || o.nickname}${o.direction ? `（${String(o.direction).slice(0, 40)}）` : ""}`,
        ),
    ].join("；");
}
async function bn(s, t, n, { signal: l, charIds: a = null, passersby: o = !0, hint: i = null } = {}) {
    var C, D, H, se, L;
    const { state: r, instaUpdatePost: u, instaAppendComment: j, socialAddAlt: v, patch: w } = s,
        y = os(r, t, n) || i;
    if (!y) return null;
    const A = String(t).startsWith("pub:"),
        z =
            t === "me"
                ? r.insta.me.nickname || r.me.nickname || "我"
                : A || de(t)
                  ? U(r, t).name
                  : ((C = r.insta.chars[t]) == null ? void 0 : C.nickname) ||
                    ((D = r.characters.find((N) => N.id === t)) == null ? void 0 : D.name) ||
                    "TA",
        I =
            t === "me"
                ? r.insta.me.followers || 800
                : A
                  ? U(r, t).followers || 300
                  : ((H = r.insta.chars[t]) == null ? void 0 : H.followers) || 800,
        b = !A && t !== "me" ? r.characters.find((N) => N.id === (de(t) ? Pe(r, "insta", t) : t)) : null,
        c = at(r, "insta", t),
        B = b ? it(b, { meName: bs(r.me) }) : "",
        f = de(t) && Pe(r, "insta", t) === "me" ? ge(r, "insta", t) : null,
        d = t === "me" || !!f;
    let m = r.characters.filter((N) => N.id !== t && !(y.mentions || []).includes(N.id));
    if ((a && (m = m.filter((N) => a.includes(N.id))), (m = m.slice(0, 6)), d && !a)) {
        const { nowGroup: N, later: $ } = lt(m, `insta:${y.id}`);
        (Ge(
            w,
            $.map((V) => ({
                id: ye("sp_"),
                kind: "notice",
                platform: "insta",
                ownerId: t,
                postId: y.id,
                charIds: V.chars.map((Y) => Y.id),
                due: V.at,
            })),
        ),
            (m = N));
    }
    if (!m.length && !o) return null;
    const g = rt(m.length),
        k = (y.comments || []).map((N) => ({
            ...N,
            author: N.author === "me" || N.author === "user" ? "me" : N.author,
        })),
        P = k.map((N) => N.id).filter(Boolean),
        E = bs(r.me),
        h = m.map((N) => {
            var V, Y;
            const $ = as(r, N);
            return {
                id: N.id,
                name: ((V = r.insta.chars[N.id]) == null ? void 0 : V.nickname) || N.name,
                persona: String($.persona || "").slice(0, g.persona),
                relation: String($.relation || "").slice(0, g.relation),
                mood: $.mood,
                memory: [...$.moments, ...$.living, ...$.threads, ...$.schedule, ...$.recentChat]
                    .slice(-g.memory)
                    .join("；")
                    .slice(0, g.memoryChars),
                accounts: jn(r, N.id),
                ownerNote: f
                    ? ct(f, N.id)
                        ? `这条是她用小号 @${f.handle || f.nickname} 发的，你知道这个号是她。`
                        : `这条来自账号 @${f.handle || f.nickname}，你不知道这个号是她，它在你眼里是陌生账号。`
                    : "",
                ...(d
                    ? {
                          now: ot(N),
                          done: dt(N.id, k, (Y = y.noticeLog) == null ? void 0 : Y[N.id], { meName: E }),
                      }
                    : null),
            };
        }),
        M = await we.reactToPost(r.api.insta, r.api.chat, {
            post: y,
            ownerName: z,
            chars: h,
            followers: I,
            direction: c,
            publicity: B,
            signal: l,
            notice: d,
            passersby: o,
            commentSection: d ? mt(k, { meName: E }) : "",
        });
    if (!M) return (u(t, y.id, { reacting: !1 }), null);
    u(t, y.id, (N) => ({
        likes: o
            ? Math.max(Number(N.likes) || 0, M.likes || Math.floor(I * (0.02 + Math.random() * 0.08)))
            : N.likes,
        reacting: !1,
        __silent: !0,
    }));
    const R = new Set(xn(r)),
        _ = {},
        Z = new Map(k.map((N) => [N.id, N]));
    for (const N of M.charComments) {
        const $ = r.characters.find((ce) => ce.id === N.charId);
        if (!$) continue;
        const V = As(r, "insta", $.id);
        let Y = null;
        if ((se = N.as) != null && se.startsWith("alt:"))
            Y =
                V.find((ce) => `alt:${ce.id}` === N.as) ||
                (_[$.id] || []).find((ce) => `alt:${ce.id}` === N.as) ||
                null;
        else if (N.as === "new" && N.newAlt && V.length + (_[$.id] || []).length < 2) {
            let ce = N.newAlt.handle,
                S = 2;
            for (; R.has(ce); ) ce = `${N.newAlt.handle.slice(0, 26)}${S++}`;
            (R.add(ce),
                (Y = {
                    ...Is("insta", { handle: ce, nickname: N.newAlt.nickname, bio: N.newAlt.bio }),
                    followers: 20 + Math.floor(Math.random() * 260),
                    fromGen: !0,
                    linked: !1,
                    fromReact: !0,
                }),
                v("insta", $.id, Y),
                (_[$.id] = [...(_[$.id] || []), Y]));
        }
        const pe = gs(N, P) ? Z.get(gs(N, P)) : null;
        (j(t, y.id, {
            name: Y
                ? Y.nickname || Y.handle
                : ((L = r.insta.chars[$.id]) == null ? void 0 : L.nickname) || $.name,
            text: N.text,
            ...(N.tr ? { tr: N.tr } : null),
            avatar: Y ? Y.avatar || null : ie(r, $.id),
            author: "char",
            charId: $.id,
            ...(Y ? { acct: `alt:${Y.id}` } : null),
            ...(pe ? { replyToId: pe.id, replyToName: pe.author === "me" ? E : pe.name } : null),
        }),
            a &&
                ht({
                    app: "insta",
                    charId: $.id,
                    text: pe ? "回复了评论区" : "评论了你的帖子",
                    postId: y.id,
                }));
    }
    if (d) {
        const N = ut(M.charActs, { allowedCharIds: h.map((V) => V.id), commentIds: P }),
            $ = `Insta · 她发的帖子：${String(y.body || y.caption || "").slice(0, 60) || "（图片）"}`;
        (Ge(
            w,
            Object.values(N).flatMap((V) =>
                ft(
                    V,
                    { platform: "insta", ownerId: t, postId: y.id, label: $, comments: k },
                    { uid: () => ye("sp_") },
                ),
            ),
        ),
            Ge(
                w,
                h
                    .filter((V) => !N[V.id])
                    .map((V) => ({
                        id: ye("sp_"),
                        kind: "seen",
                        platform: "insta",
                        ownerId: t,
                        postId: y.id,
                        charId: V.id,
                        due: Date.now(),
                    })),
            ));
    }
    const T = [...(y.comments || [])];
    for (const N of M.comments) {
        const $ = N.replyToName ? [...T].reverse().find((Y) => Y.name === N.replyToName) : null,
            V = {
                id: ye("cc_"),
                name: N.name,
                text: N.text,
                author: "ai",
                ...(N.tr ? { tr: N.tr } : null),
                ...($ ? { replyToId: $.id, replyToName: $.name } : null),
                createdAt: Date.now() + Math.floor(Math.random() * 6e4),
            };
        (T.push(V), j(t, y.id, V));
    }
    return M;
}
function ds() {
    const s = le(),
        { instaUpdatePost: t } = s,
        n = p.useRef(s);
    n.current = s;
    const l = Ne(),
        a = ts(),
        o = (r, u, j) => bn(n.current, r, u.id, { signal: j, hint: u }),
        i = async (r, u) => {
            const j = await a.run((w) => o(r, u, w));
            if (j != null && j.aborted) return (t(r, u.id, { reacting: !1 }), l("已停止生成"), null);
            if (j != null && j.skipped) return null;
            if (j != null && j.error)
                return (t(r, u.id, { reacting: !1 }), l(j.error.message, "error"), null);
            const v = j == null ? void 0 : j.value;
            return v
                ? (l(`点赞 ${v.likes} · 评论 ${v.charComments.length + v.comments.length} 条`), v)
                : (l("没生成出来，检查一下 API 设置", "error"), null);
        };
    return { busy: a.busy, stop: a.stop, run: i, perform: o };
}
function ws({
    open: s,
    onClose: t,
    owner: n = "me",
    initial: l = null,
    quote: a = null,
    onPosted: o = null,
}) {
    const { state: i, instaAppendPost: r, instaUpdatePost: u, instaAppendComment: j } = le(),
        v = ds(),
        w = Ne(),
        y = !!l,
        [A, z] = p.useState(!1),
        [I, b] = p.useState(""),
        [c, B] = p.useState(""),
        [f, d] = p.useState(!1),
        [m, g] = p.useState([]),
        [k, P] = p.useState(null),
        [E, h] = p.useState(""),
        [M, R] = p.useState(""),
        [_, Z] = p.useState(null),
        T = 6,
        C = m.length ? "photo" : "pure_text",
        D = p.useRef(null),
        H = p.useRef(null),
        se = cs(),
        L = Ps({ value: I, setValue: b, candidates: se, inputRef: H, skin: "insta" }),
        N = Ts("insta");
    p.useEffect(() => {
        var O, X;
        if (s)
            if ((P(null), h(""), R(""), Z(null), l)) {
                const G = l.kind === "textcard";
                (b(
                    G
                        ? [
                              (O = l.card) == null ? void 0 : O.title,
                              (X = l.card) == null ? void 0 : X.body,
                          ].filter(Boolean).join(`
`)
                        : l.kind === "photo"
                          ? l.caption || ""
                          : l.body || "",
                ),
                    B(l.location || ""),
                    d(!!l.location),
                    g(Fe(l)));
            } else (b(""), B(""), d(!1), g([]));
    }, [s, l]);
    const $ = async (O) => {
            const X = [...(O.target.files || [])].slice(0, T - m.length);
            O.target.value = "";
            const G = [];
            for (const te of X) {
                const oe = await It(te, { note: "Insta 帖子" });
                oe && G.push({ ref: oe, desc: "" });
            }
            G.length && g((te) => [...te, ...G].slice(0, T));
        },
        V = () => {
            const O = E.trim();
            O && (g((X) => [...X, { ref: null, desc: O.slice(0, 300) }].slice(0, T)), h(""), P(null));
        },
        Y = () => {
            _ != null &&
                _.ref &&
                (g((O) =>
                    [
                        ...O,
                        {
                            ref: _.ref,
                            desc: M.trim().slice(0, 300),
                            ...(_.brief ? { brief: _.brief } : null),
                        },
                    ].slice(0, T),
                ),
                Z(null),
                R(""),
                P(null));
        },
        pe = (O) => g((X) => X.filter((G, te) => te !== O)),
        ce = async () => {
            if (A || (C === "pure_text" && !I.trim() && !a)) return;
            const O = a ? os(i, a.ownerId, a.postId) : null,
                X = O ? Ls(i, a.ownerId, O) : void 0,
                G =
                    C === "photo"
                        ? {
                              kind: "photo",
                              caption: I.trim(),
                              location: c.trim(),
                              media: m,
                              imgDataUrl: m[0].ref || void 0,
                              photoDesc: m[0].desc || void 0,
                              ...(m[0].brief ? { photoBrief: m[0].brief } : null),
                              card: void 0,
                              body: void 0,
                          }
                        : {
                              kind: "pure_text",
                              caption: "",
                              location: c.trim(),
                              body: I.trim(),
                              card: void 0,
                              media: void 0,
                              imgDataUrl: void 0,
                              photoDesc: void 0,
                          };
            if ((X && (G.quoteOf = X), y)) {
                (u(n, l.id, G), t());
                return;
            }
            const te = ye("p_"),
                oe =
                    n === "me"
                        ? zs(
                              [G.body, G.caption].filter(Boolean).join(`
`),
                              se,
                          )
                        : [];
            (oe.length && (G.mentions = oe),
                o && (G.byHer = !0),
                r(n, {
                    ...G,
                    id: te,
                    likes: 0,
                    comments: [],
                    reacting: !0,
                    ownerKind: n === "me" ? "me" : "char",
                    ownerId: n,
                }),
                o == null ||
                    o({
                        postId: te,
                        text: [G.body, G.caption].filter(Boolean).join(`
`),
                        images: m.length,
                    }),
                C === "photo" &&
                    m.some((ne) => !ne.ref && ne.desc) &&
                    ls(i, u, n, { ...G, id: te, createdAt: Date.now() }),
                t(),
                oe.length &&
                    N({
                        ids: oe,
                        where: "post",
                        target: { owner: "her" },
                        userText:
                            [G.body, G.caption].filter(Boolean).join(`
`) +
                            (G.kind === "photo"
                                ? `
（附 ${m.length} 张图）`
                                : ""),
                        nameOf: (ne) => U(i, ne).name,
                        onReply: (ne, ue) =>
                            j(n, te, {
                                name: U(i, ne).name,
                                text: ue,
                                avatar: ie(i, ne),
                                author: "char",
                                charId: ne,
                                createdAt: Date.now() + 6e4,
                            }),
                        onLike: (ne) =>
                            u(n, te, (ue) => ({
                                likes: (ue.likes || 0) + 1,
                                likedBy: [...new Set([...(ue.likedBy || []), ne])],
                                __silent: !0,
                            })),
                    }),
                z(!0));
            try {
                await v.run(n, { ...G, id: te });
            } catch (ne) {
                w(ne.message || "生成反响失败", "error");
            }
            z(!1);
        },
        S = U(i, n),
        K = C === "photo" ? m.length > 0 : !!I.trim() || !!a,
        Q = pt(xt(i)),
        he = m.length >= T,
        je = (O, X, G, te, oe = !1, ne = !1) =>
            e.jsx(
                "button",
                {
                    type: "button",
                    className: `btn-plain igc-tool${oe ? " on" : ""}`,
                    onClick: te,
                    disabled: ne,
                    "aria-label": G,
                    title: G,
                    children: e.jsx(X, { size: 20, strokeWidth: 1.7 }),
                },
                O,
            );
    return typeof document > "u"
        ? null
        : Gs.createPortal(
              e.jsx(en, {
                  children:
                      s &&
                      e.jsxs(sn.div, {
                          className: "igc",
                          role: "dialog",
                          "aria-modal": "true",
                          "aria-label": y ? "编辑帖子" : a ? "引用" : "新帖子",
                          initial: { y: "100%" },
                          animate: { y: 0 },
                          exit: { y: "100%" },
                          transition: { type: "spring", damping: 36, stiffness: 380 },
                          children: [
                              e.jsxs("header", {
                                  className: "igc-bar",
                                  children: [
                                      e.jsx("button", {
                                          type: "button",
                                          className: "btn-plain igc-cancel",
                                          onClick: t,
                                          children: "取消",
                                      }),
                                      e.jsx("b", { children: y ? "编辑帖子" : a ? "引用" : "新帖子" }),
                                      e.jsx("span", {}),
                                  ],
                              }),
                              e.jsxs("div", {
                                  className: "igc-scroll",
                                  children: [
                                      o && e.jsx(jt, { name: S.name, avatar: S.avatar }),
                                      e.jsxs("div", {
                                          className: "igc-row",
                                          children: [
                                              e.jsxs("div", {
                                                  className: "igc-gutter",
                                                  children: [
                                                      e.jsx(ee, { src: S.avatar, name: S.name, size: 36 }),
                                                      e.jsx("span", { className: "igc-line" }),
                                                  ],
                                              }),
                                              e.jsxs("div", {
                                                  className: "igc-main",
                                                  children: [
                                                      e.jsx("div", {
                                                          className: "igc-name",
                                                          children: S.handle || S.name,
                                                      }),
                                                      e.jsx("textarea", {
                                                          ref: H,
                                                          rows: m.length || a ? 2 : 3,
                                                          value: I,
                                                          ...L.bind,
                                                          onKeyDown: L.keyDown(),
                                                          className: "igc-input",
                                                          placeholder: a
                                                              ? "说点什么…"
                                                              : m.length
                                                                ? "添加配文…"
                                                                : "有什么新鲜事？",
                                                      }),
                                                      L.panel &&
                                                          e.jsx("div", {
                                                              className: "igc-mention",
                                                              children: L.panel,
                                                          }),
                                                      m.length > 0 &&
                                                          e.jsx("div", {
                                                              className: "igc-strip",
                                                              children: m.map((O, X) =>
                                                                  e.jsxs(
                                                                      "div",
                                                                      {
                                                                          className: "igc-thumb",
                                                                          children: [
                                                                              O.ref
                                                                                  ? e.jsx(Ce, {
                                                                                        src: O.ref,
                                                                                        alt: "",
                                                                                    })
                                                                                  : e.jsx(is, {
                                                                                        desc: O.desc,
                                                                                    }),
                                                                              e.jsx("button", {
                                                                                  type: "button",
                                                                                  className: "btn-plain",
                                                                                  onClick: () => pe(X),
                                                                                  "aria-label": "移除",
                                                                                  children: e.jsx(Ae, {
                                                                                      size: 13,
                                                                                      strokeWidth: 2.6,
                                                                                  }),
                                                                              }),
                                                                          ],
                                                                      },
                                                                      X,
                                                                  ),
                                                              ),
                                                          }),
                                                      k === "desc" &&
                                                          e.jsxs("div", {
                                                              className: "igc-card",
                                                              children: [
                                                                  e.jsx("span", {
                                                                      className: "igc-card-h",
                                                                      children: "文字图",
                                                                  }),
                                                                  e.jsx("textarea", {
                                                                      rows: 2,
                                                                      value: E,
                                                                      onChange: (O) => h(O.target.value),
                                                                      placeholder: "描述图片内容",
                                                                      autoFocus: !0,
                                                                  }),
                                                                  e.jsxs("div", {
                                                                      className: "igc-card-acts",
                                                                      children: [
                                                                          e.jsx("button", {
                                                                              type: "button",
                                                                              className: "btn-plain",
                                                                              onClick: () => P(null),
                                                                              children: "取消",
                                                                          }),
                                                                          e.jsx("button", {
                                                                              type: "button",
                                                                              className: "btn-plain solid",
                                                                              onClick: V,
                                                                              disabled: !E.trim(),
                                                                              children: "添加",
                                                                          }),
                                                                      ],
                                                                  }),
                                                              ],
                                                          }),
                                                      k === "gen" &&
                                                          e.jsxs("div", {
                                                              className: "igc-card",
                                                              children: [
                                                                  e.jsx("span", {
                                                                      className: "igc-card-h",
                                                                      children: "生成图片",
                                                                  }),
                                                                  e.jsx("textarea", {
                                                                      rows: 2,
                                                                      value: M,
                                                                      onChange: (O) => R(O.target.value),
                                                                      placeholder: "描述画面，或粘贴标签",
                                                                      autoFocus: !0,
                                                                  }),
                                                                  e.jsx(bt, {
                                                                      desc: M,
                                                                      context: { text: I, place: c },
                                                                      onChange: Z,
                                                                  }),
                                                                  e.jsxs("div", {
                                                                      className: "igc-card-acts",
                                                                      children: [
                                                                          e.jsx("button", {
                                                                              type: "button",
                                                                              className: "btn-plain",
                                                                              onClick: () => P(null),
                                                                              children: "取消",
                                                                          }),
                                                                          e.jsx("button", {
                                                                              type: "button",
                                                                              className: "btn-plain solid",
                                                                              onClick: Y,
                                                                              disabled: !(_ != null && _.ref),
                                                                              children: "添加",
                                                                          }),
                                                                      ],
                                                                  }),
                                                              ],
                                                          }),
                                                      a && e.jsx(Us, { quote: a }),
                                                      (f || c) &&
                                                          e.jsxs("label", {
                                                              className: "igc-loc",
                                                              children: [
                                                                  e.jsx(Xe, { size: 14, strokeWidth: 2 }),
                                                                  e.jsx("input", {
                                                                      value: c,
                                                                      onChange: (O) => B(O.target.value),
                                                                      placeholder: "添加位置",
                                                                      autoFocus: !c,
                                                                  }),
                                                                  e.jsx("button", {
                                                                      type: "button",
                                                                      className: "btn-plain",
                                                                      onClick: () => {
                                                                          (B(""), d(!1));
                                                                      },
                                                                      "aria-label": "移除位置",
                                                                      children: e.jsx(Ae, {
                                                                          size: 13,
                                                                          strokeWidth: 2.4,
                                                                      }),
                                                                  }),
                                                              ],
                                                          }),
                                                      e.jsxs("div", {
                                                          className: "igc-tools",
                                                          children: [
                                                              je(
                                                                  "pick",
                                                                  Bs,
                                                                  "相册",
                                                                  () => {
                                                                      var O;
                                                                      return (O = D.current) == null
                                                                          ? void 0
                                                                          : O.click();
                                                                  },
                                                                  !1,
                                                                  he,
                                                              ),
                                                              je(
                                                                  "desc",
                                                                  Zt,
                                                                  "文字图",
                                                                  () => P(k === "desc" ? null : "desc"),
                                                                  k === "desc",
                                                                  he,
                                                              ),
                                                              Q &&
                                                                  je(
                                                                      "gen",
                                                                      Jt,
                                                                      "生成图片",
                                                                      () => P(k === "gen" ? null : "gen"),
                                                                      k === "gen",
                                                                      he,
                                                                  ),
                                                              je("loc", Xe, "位置", () => d(!0), f || !!c),
                                                              !y &&
                                                                  je("at", _s, "提到别人", () => L.trigger()),
                                                              m.length > 0 &&
                                                                  e.jsxs("span", {
                                                                      className: "igc-count",
                                                                      children: [m.length, " / ", T],
                                                                  }),
                                                          ],
                                                      }),
                                                      e.jsx("input", {
                                                          ref: D,
                                                          type: "file",
                                                          accept: "image/*",
                                                          multiple: !0,
                                                          hidden: !0,
                                                          onChange: $,
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              e.jsxs("footer", {
                                  className: "igc-foot",
                                  children: [
                                      e.jsx("span", {
                                          children: y
                                              ? "仅修改本条内容，不重新生成互动。"
                                              : "发布后将生成一轮点赞与回复。",
                                      }),
                                      e.jsx("button", {
                                          type: "button",
                                          className: "btn-plain igc-post",
                                          onClick: ce,
                                          disabled: !K || A,
                                          children: y ? "保存" : A ? "发布中…" : "发布",
                                      }),
                                  ],
                              }),
                          ],
                      }),
              }),
              document.body,
          );
}
function gn({ src: s, onClose: t }) {
    return s
        ? e.jsxs("div", {
              onClick: t,
              style: {
                  position: "absolute",
                  inset: 0,
                  zIndex: 300,
                  background: "rgba(0,0,0,0.92)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 16,
              },
              children: [
                  e.jsx(Ce, {
                      src: s,
                      alt: "",
                      style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" },
                  }),
                  e.jsx("button", {
                      className: "btn-plain",
                      onClick: t,
                      style: {
                          position: "absolute",
                          top: "calc(var(--sat) + 12px)",
                          right: 12,
                          width: 34,
                          height: 34,
                          borderRadius: 999,
                          background: "rgba(255,255,255,0.12)",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                      },
                      children: e.jsx(Ae, { size: 18 }),
                  }),
              ],
          })
        : null;
}
function kn({ ownerId: s }) {
    const { state: t, socialRemoveAlt: n, socialPatchAlt: l } = le(),
        { v: a, readOnly: o } = ke(),
        i = me(),
        r = Ne(),
        [u, j] = p.useState(null),
        v = de(s) ? Pe(t, "insta", s) : s,
        w = v === a,
        A = ns(t, "insta", v, {
            all: o && v === a,
            nameOf: (b) => (b === "me" ? Re(t.me) : Se(t.characters.find((c) => c.id === b) || {})),
        }),
        z = (b) => {
            (i.pop(), i.openProfile(b));
        },
        I = (b) => {
            const c = Ss(t, "insta", v).find((B) => B.id === de(b));
            return !!(c != null && c.fromGen) && c.linked === !0;
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Ie, { title: "账号" }),
            e.jsxs("div", {
                className: "insta-scroll insta-accpage",
                children: [
                    e.jsxs("p", {
                        className: "insta-accpage-hint",
                        children: [
                            "同一人在本平台的全部账号。更换人设请前往",
                            e.jsx("b", { children: "设置 → 人设" }),
                            "。",
                        ],
                    }),
                    e.jsx("div", {
                        className: "insta-acclist",
                        children: A.map((b) => {
                            const c = b.ref === s;
                            return e.jsxs(
                                "div",
                                {
                                    className: `insta-accrow ${c ? "on" : ""}`,
                                    children: [
                                        e.jsxs("button", {
                                            className: "insta-accrow-main btn-plain",
                                            onClick: () => (c ? i.pop() : z(b.ref)),
                                            children: [
                                                e.jsx(ee, { src: b.avatar, name: b.nickname, size: 44 }),
                                                e.jsxs("span", {
                                                    className: "insta-accrow-text",
                                                    children: [
                                                        e.jsx("b", { children: b.nickname || b.handle }),
                                                        e.jsxs("small", {
                                                            children: [
                                                                "@",
                                                                b.handle,
                                                                b.main ? " · 主号" : "",
                                                                b.pending
                                                                    ? e.jsx("em", {
                                                                          className: "insta-accrow-pending",
                                                                          children: "未接入线上",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                        e.jsxs("small", {
                                                            children: [
                                                                gt(ge(t, "insta", b.ref).followers || 0),
                                                                " · ",
                                                                b.count,
                                                                " 条内容",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                c &&
                                                    e.jsx(Vt, {
                                                        size: 18,
                                                        strokeWidth: 2.6,
                                                        className: "insta-accrow-tick",
                                                    }),
                                            ],
                                        }),
                                        w &&
                                            !o &&
                                            !b.main &&
                                            e.jsx("button", {
                                                className: "insta-accrow-del btn-plain",
                                                onClick: () => j(b.ref),
                                                "aria-label": "删除这个号",
                                                children: e.jsx(Yt, { size: 16, strokeWidth: 2.2 }),
                                            }),
                                        !w &&
                                            !o &&
                                            !b.main &&
                                            I(b.ref) &&
                                            e.jsx("button", {
                                                className: "insta-accrow-unlink btn-plain",
                                                onClick: () => {
                                                    (l("insta", v, de(b.ref), { linked: !1 }),
                                                        b.ref === s && (i.pop(), i.openProfile(v)),
                                                        r("已解除绑定"));
                                                },
                                                children: "解除绑定",
                                            }),
                                        w &&
                                            !o &&
                                            !b.main &&
                                            v === "me" &&
                                            e.jsx(Wt, { platform: "insta", altRef: b.ref }),
                                    ],
                                },
                                b.ref,
                            );
                        }),
                    }),
                    w &&
                        !o &&
                        e.jsxs("button", {
                            className: "insta-accnew",
                            onClick: () => i.openNewAlt(v),
                            children: [
                                e.jsx("span", {
                                    className: "insta-accnew-icon",
                                    children: e.jsx(Ds, { size: 18, strokeWidth: 2.6 }),
                                }),
                                e.jsxs("span", {
                                    children: [
                                        e.jsx("b", { children: "新建小号" }),
                                        e.jsx("small", { children: "同一人在本平台的另一个账号" }),
                                    ],
                                }),
                                e.jsx(Qe, { size: 17, strokeWidth: 2.4 }),
                            ],
                        }),
                ],
            }),
            u &&
                e.jsx(Nn, {
                    title: "删掉这个小号？",
                    body: "该账号发布的内容将一并删除，主号不受影响。",
                    danger: "删掉",
                    onCancel: () => j(null),
                    onOk: () => {
                        const b = de(u);
                        (n("insta", v, b), j(null), u === s && (i.pop(), i.openProfile(v)), r("删掉了"));
                    },
                }),
        ],
    });
}
function vn({ ownerId: s }) {
    const { state: t, socialAddAlt: n } = le(),
        l = me(),
        a = Ne(),
        [o, i] = p.useState(""),
        [r, u] = p.useState(""),
        [j, v] = p.useState(""),
        [w, y] = p.useState(""),
        A = o ? kt(t, "insta", o) : { ok: !1, err: "" },
        z = () => {
            if (!A.ok) {
                a(A.err || "先起个账号名", "error");
                return;
            }
            const I = Is("insta", { handle: A.handle, nickname: r, bio: j, why: w });
            (n("insta", s, I), l.pop(), l.pop(), l.openProfile(`alt:${I.id}`), a("小号开好了"));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Ie, { title: "新建小号" }),
            e.jsxs("div", {
                className: "insta-scroll insta-form",
                children: [
                    e.jsxs("div", {
                        className: "insta-form-group",
                        children: [
                            e.jsxs("label", {
                                className: "insta-form-row",
                                children: [
                                    e.jsx("span", { children: "账号名" }),
                                    e.jsx("input", {
                                        value: o,
                                        onChange: (I) => i(I.target.value),
                                        placeholder: "小写字母、数字、下划线、点",
                                        autoCapitalize: "none",
                                        autoCorrect: "off",
                                        spellCheck: !1,
                                    }),
                                ],
                            }),
                            e.jsxs("label", {
                                className: "insta-form-row",
                                children: [
                                    e.jsx("span", { children: "显示名" }),
                                    e.jsx("input", {
                                        value: r,
                                        onChange: (I) => u(I.target.value),
                                        placeholder: "不填就用账号名",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx("p", {
                        className: `insta-form-note ${o && !A.ok ? "bad" : ""}`,
                        children: o
                            ? A.ok
                                ? `@${A.handle} 可以用`
                                : A.err
                            : "3–30 位，只能用小写字母、数字、下划线和点",
                    }),
                    e.jsxs("div", {
                        className: "insta-form-group",
                        children: [
                            e.jsxs("label", {
                                className: "insta-form-row col",
                                children: [
                                    e.jsx("span", { children: "简介" }),
                                    e.jsx("textarea", {
                                        value: j,
                                        onChange: (I) => v(I.target.value),
                                        placeholder: "陌生人也会看到，可以空着",
                                        rows: 2,
                                    }),
                                ],
                            }),
                            e.jsxs("label", {
                                className: "insta-form-row col",
                                children: [
                                    e.jsx("span", { children: "这个号是干嘛的" }),
                                    e.jsx("textarea", {
                                        value: w,
                                        onChange: (I) => y(I.target.value),
                                        placeholder:
                                            "只给自己看，也会告诉 AI —— 它靠这句话决定这个号上该发什么",
                                        rows: 2,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx("button", {
                        className: "insta-form-go",
                        onClick: z,
                        disabled: !A.ok,
                        children: "开号",
                    }),
                ],
            }),
        ],
    });
}
function Nn({ title: s, body: t, danger: n, onCancel: l, onOk: a }) {
    return e.jsx("div", {
        className: "insta-confirm",
        onClick: l,
        children: e.jsxs("div", {
            className: "insta-confirm-card",
            onClick: (o) => o.stopPropagation(),
            children: [
                e.jsx("b", { children: s }),
                e.jsx("p", { children: t }),
                e.jsxs("div", {
                    className: "insta-confirm-btns",
                    children: [
                        e.jsx("button", { className: "th-btn", onClick: l, children: "取消" }),
                        e.jsx("button", { className: "th-btn danger", onClick: a, children: n }),
                    ],
                }),
            ],
        }),
    });
}
function yn({ open: s, onClose: t, title: n, message: l, groups: a }) {
    return e.jsx(vt, {
        open: s,
        onClose: t,
        children: e.jsxs("div", {
            className: "ig-menu",
            children: [
                n && e.jsx("div", { className: "ig-menu-title", children: n }),
                l && e.jsx("div", { className: "ig-menu-msg", children: l }),
                a.map((o) =>
                    e.jsxs(
                        "section",
                        {
                            className: "ig-menu-group",
                            children: [
                                o.title && e.jsx("div", { className: "ig-menu-head", children: o.title }),
                                e.jsx("div", {
                                    className: "ig-menu-card",
                                    children: o.items.map((i) =>
                                        e.jsxs(
                                            "button",
                                            {
                                                className: `ig-menu-row btn-plain ${i.destructive ? "danger" : ""}`,
                                                onClick: () => {
                                                    var r;
                                                    (t == null || t(), (r = i.onClick) == null || r.call(i));
                                                },
                                                children: [
                                                    e.jsx("span", { children: i.label }),
                                                    i.sub && e.jsx("small", { children: i.sub }),
                                                ],
                                            },
                                            i.label,
                                        ),
                                    ),
                                }),
                                o.foot && e.jsx("div", { className: "ig-menu-foot", children: o.foot }),
                            ],
                        },
                        o.title,
                    ),
                ),
            ],
        }),
    });
}
function wn(s, t) {
    var o, i;
    const n = U(s, t.ownerId),
        l =
            t.kind === "pure_text"
                ? t.body
                : t.kind === "textcard"
                  ? [
                        (o = t.card) == null ? void 0 : o.title,
                        (i = t.card) == null ? void 0 : i.body,
                        t.caption,
                    ].filter(Boolean).join(`
`)
                  : t.caption,
        a = (t.comments || []).length;
    return {
        platform: "insta",
        kind: "post",
        text: l || (t.kind === "photo" ? "[图片]" : ""),
        author: { name: n.name, handle: n.handle, avatar: n.avatar },
        image: t.kind === "photo" ? t.imgDataUrl : "",
        meta: [`${ve(t.likes || 0)} 赞`, a ? `${a} 条回复` : "", t.location].filter(Boolean).join(" · "),
        refId: t.id,
        ownerId: t.ownerId,
    };
}
function Cn(s, t, n) {
    return {
        platform: "insta",
        kind: "profile",
        title: s.name,
        text: s.bio || "",
        author: { name: s.name, handle: s.handle, avatar: s.avatar },
        meta: [s.followers != null ? `${ve(s.followers)} 位关注者` : "", `${t} 条动态`]
            .filter(Boolean)
            .join(" · "),
        ownerId: n,
    };
}
function ie(s, t) {
    if (String(t).startsWith("pub:")) return null;
    if (de(t)) return ge(s, "insta", t).avatar || null;
    if (t === "me") return s.insta.me.avatar || s.me.avatar || null;
    const n = s.insta.chars[t],
        l = s.characters.find((a) => a.id === t);
    return (n == null ? void 0 : n.avatar) || (l == null ? void 0 : l.avatar) || null;
}
function $e(s, t) {
    const n = String(s || "")
        .trim()
        .replace(/^@/, "");
    if (n) return n;
    const l = String(t || "")
        .toLowerCase()
        .replace(/\s+/g, ".")
        .replace(/[^a-z0-9._]/g, "")
        .replace(/^[._]+|[._]+$/g, "")
        .slice(0, 24);
    return l.length >= 3
        ? l
        : `litot.${[...String(t || "user")]
              .reduce((o, i) => (o * 33 + i.charCodeAt(0)) >>> 0, 5381)
              .toString(36)
              .slice(-6)}`;
}
function ve(s) {
    const t = Number(s);
    return Number.isFinite(t)
        ? t < 1e3
            ? String(t)
            : t < 1e6
              ? (t / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
              : (t / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
        : "—";
}
function be(s) {
    if (!s) return "";
    const t = Math.max(1, Math.floor((Date.now() - s) / 1e3));
    if (t < 60) return `${t} 秒前`;
    const n = Math.floor(t / 60);
    if (n < 60) return `${n} 分钟前`;
    const l = Math.floor(n / 60);
    if (l < 24) return `${l} 小时前`;
    const a = Math.floor(l / 24);
    return a < 7 ? `${a} 天前` : new Date(s).toLocaleDateString("zh-CN");
}
function Sn(s) {
    const t = new Map(),
        n = new Date(),
        l = n.toDateString(),
        a = new Date(n.getTime() - 864e5).toDateString();
    for (const o of s) {
        const i = new Date(o.createdAt);
        let r;
        (i.toDateString() === l
            ? (r = "今天")
            : i.toDateString() === a
              ? (r = "昨天")
              : n - i < 7 * 864e5
                ? (r = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][i.getDay()])
                : i.getFullYear() === n.getFullYear()
                  ? (r = `${i.getMonth() + 1} 月 ${i.getDate()} 日`)
                  : (r = `${i.getFullYear()} 年 ${i.getMonth() + 1} 月`),
            t.has(r) || t.set(r, []),
            t.get(r).push(o));
    }
    return Array.from(t, ([o, i]) => ({ label: o, posts: i }));
}
export { Dn as default, Bt as mediaKey, Fe as mediaOf, bn as performInstaReaction, ls as queueInstaImage };
