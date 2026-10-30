import { r as o, j as e, R as He, a as qs } from "./vendor-react-3a46a5d3.js";
import {
    i as $t,
    j as At,
    A as fs,
    g as Ks,
    h as Xs,
    k as Tt,
    M as zt,
    m as Js,
} from "./AltKnown-a1a03d3e.js";
import {
    u as te,
    f3 as he,
    ba as Rt,
    aq as Lt,
    ar as Ot,
    eA as ge,
    eJ as We,
    bb as It,
    dH as Et,
    l as ts,
    cj as Os,
    cq as Wt,
    a as ve,
    f4 as Zs,
    f5 as Me,
    f6 as ke,
    aD as Bt,
    aA as Dt,
    f7 as Pt,
    f8 as Je,
    A as _e,
    f9 as Qs,
    cs as $e,
    b9 as vs,
    eO as js,
    dP as Ft,
    eZ as Vt,
    b5 as Ht,
    dX as et,
    fa as _t,
    bh as Ns,
    eB as as,
    cW as Ut,
    eH as Re,
    eN as st,
    dM as tt,
    fb as gs,
    c2 as Yt,
    fc as ze,
    dD as Gt,
    fd as qt,
    fe as Kt,
    ce as Ce,
    ff as Xt,
    fg as Jt,
    fh as Is,
    es as Es,
    dB as Ws,
    bj as Zt,
    bi as Qt,
    cD as ea,
    cE as ms,
    f as pe,
    cF as sa,
    dx as ta,
    fi as aa,
    eU as na,
    eW as Bs,
    eV as ia,
    cH as la,
    cI as ra,
    dv as ca,
    fj as at,
    fk as oa,
    cN as da,
    cQ as ua,
    cO as ha,
    cP as ma,
    cu as xa,
    fl as pa,
    fm as ba,
    fn as ja,
    fo as ya,
    fp as fa,
    fq as va,
    fr as Na,
    fs as ga,
    c$ as ka,
    eX as nt,
    aR as Ca,
    dw as Ds,
    ex as wa,
    dj as Ps,
    dk as Sa,
    ft as Ma,
    fu as $a,
    fv as Fs,
    fw as Vs,
    p as Aa,
    fx as Ta,
    fy as za,
} from "./app-2c902988.js";
import { D as Ra, s as it, S as La, b as Oa, v as Ia, m as Ea } from "./platformDm-22d28248.js";
import {
    cG as Wa,
    P as Ue,
    dB as Ba,
    cH as Le,
    b as Ge,
    a as fe,
    b0 as ks,
    ci as Oe,
    N as Cs,
    aD as Da,
    aM as ws,
    dC as lt,
    ck as Pa,
    a8 as Pe,
    as as qe,
    dz as Ss,
    Z as ns,
    S as is,
    T as ls,
    c as rt,
    cm as Fa,
    aA as Ze,
    dD as ct,
    bg as Va,
    dE as Ha,
    bj as ot,
    dF as _a,
    dk as Ms,
    aH as Ua,
    dn as Ya,
    dG as Ga,
    aK as qa,
    dH as Ka,
    dp as Xa,
    _ as Ja,
    ad as Za,
    b3 as Hs,
    dI as Qe,
} from "./vendor-icons-e63d3118.js";
import { A as Qa, m as en } from "./vendor-motion-62fc1664.js";
import "./vendor-7bc51c32.js";
import "./vendor-leaflet-f4c2a8c5.js";
const De = Lt(Ot, "YouTube"),
    dt = o.createContext(null),
    ue = () => o.useContext(dt);
function de(s, a) {
    var i, m, u, x, l;
    const t = {
            nickname: null,
            handle: null,
            about: null,
            tagline: null,
            banner: null,
            avatar: null,
            subscribers: null,
            videos: [],
        },
        n = ge(a)
            ? We(s, "youtube", a)
            : a === "me"
              ? (i = s.youtube) == null
                  ? void 0
                  : i.me
              : String(a || "").startsWith("pub:")
                ? (u = (m = s.youtube) == null ? void 0 : m.publics) == null
                    ? void 0
                    : u[String(a).slice(4)]
                : (l = (x = s.youtube) == null ? void 0 : x.channels) == null
                  ? void 0
                  : l[a];
    return { ...t, ...(n || {}), videos: Array.isArray(n == null ? void 0 : n.videos) ? n.videos : [] };
}
function Q(s, a) {
    var i, m, u, x, l, b, r, d;
    if (ge(a)) return We(s, "youtube", a).avatar || null;
    if (a === "me")
        return (
            ((m = (i = s.youtube) == null ? void 0 : i.me) == null ? void 0 : m.avatar) ||
            ((x = (u = s.insta) == null ? void 0 : u.me) == null ? void 0 : x.avatar) ||
            s.me.avatar ||
            null
        );
    const t = (l = s.youtube.channels) == null ? void 0 : l[a],
        n = s.characters.find((C) => C.id === a);
    return (
        (t == null ? void 0 : t.avatar) ||
        ((d = (r = (b = s.insta) == null ? void 0 : b.chars) == null ? void 0 : r[a]) == null
            ? void 0
            : d.avatar) ||
        (n == null ? void 0 : n.avatar) ||
        null
    );
}
function $(s, a) {
    const t = de(s, a);
    return t.nickname
        ? t.nickname
        : ge(a)
          ? t.handle || "小号"
          : a === "me"
            ? It(s.me)
            : Et(s.characters.find((n) => n.id === a));
}
function be(s, a) {
    const t = de(s, a),
        n = String(t.handle || "")
            .trim()
            .replace(/^@/, "");
    if (n) return n;
    const i = $(s, a),
        m = String(i || "")
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[^a-z0-9._]/g, "")
            .slice(0, 20);
    return m.length >= 3
        ? m
        : `tube${[...String(a || "user")]
              .reduce((x, l) => (x * 33 + l.charCodeAt(0)) >>> 0, 5381)
              .toString(36)
              .slice(-6)}`;
}
function Ie(s, a) {
    if ((a == null ? void 0 : a.author) === "char" && ge(a.acct)) {
        const n = We(s, "youtube", a.acct) || {};
        return `@${n.handle || n.nickname || a.name || "user"}`;
    }
    if ((a == null ? void 0 : a.author) === "me") return `@${be(s, "me") || $(s, "me")}`;
    if ((a == null ? void 0 : a.author) === "char" && a.charId)
        return `@${be(s, a.charId) || $(s, a.charId)}`;
    const t = String((a == null ? void 0 : a.name) || "").trim();
    return t.startsWith("@") || !t ? t : `@${t}`;
}
function es(s, a) {
    return (a == null ? void 0 : a.author) === "char" && ge(a.acct)
        ? (We(s, "youtube", a.acct) || {}).avatar || null
        : (a == null ? void 0 : a.author) === "me"
          ? Q(s, "me") || a.avatar || null
          : (a == null ? void 0 : a.author) === "char" && a.charId
            ? Q(s, a.charId) || a.avatar || null
            : (a == null ? void 0 : a.avatar) || null;
}
function $s(s, a, t) {
    const n = t != null && t.replyToId ? (a || []).find((i) => i.id === t.replyToId) : null;
    return n ? Ie(s, n) : `@${(t == null ? void 0 : t.replyToName) || ""}`;
}
function ut() {
    const { state: s } = te(),
        a = ue();
    return (t) => {
        if ((t == null ? void 0 : t.author) === "char" && ge(t.acct)) {
            const n = We(s, "youtube", t.acct) || {};
            if (!n.id) return;
            n.fromGen && n.linked !== !0 ? a.suspect(t.acct, t.charId) : a.openChannel(t.acct);
            return;
        }
        (t == null ? void 0 : t.author) === "char" && t.charId && a.openChannel(t.charId);
    };
}
function ht({ onDelete: s }) {
    const [a, t] = o.useState(null);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("button", {
                className: "btn-plain yt-c-more",
                "aria-label": "更多",
                onClick: (n) => {
                    (n.stopPropagation(), t(n.currentTarget));
                },
                children: e.jsx(Le, { size: 16 }),
            }),
            a &&
                e.jsx(fs, {
                    theme: "yt",
                    anchor: a,
                    width: 180,
                    onClose: () => t(null),
                    items: [
                        {
                            key: "del",
                            label: "删除",
                            danger: !0,
                            icon: e.jsx(ls, { size: 18, strokeWidth: 1.7 }),
                            onClick: s,
                        },
                    ],
                }),
        ],
    });
}
function As() {
    var a;
    const { state: s } = te();
    return o.useMemo(
        () =>
            (s.characters || []).map((t) => ({
                id: t.id,
                name: $(s, t.id),
                handle: be(s, t.id),
                avatar: Q(s, t.id),
            })),
        [s.characters, (a = s.youtube) == null ? void 0 : a.channels],
    );
}
function rs({ text: s }) {
    const a = ue(),
        t = As();
    return e.jsx(zt, { text: s, candidates: t, onOpen: a.openChannel, skin: "tube" });
}
function mt(s, a, t) {
    const n = Math.floor((t.duration || 0) / 60),
        i = String((t.duration || 0) % 60).padStart(2, "0");
    return {
        platform: "youtube",
        kind: "video",
        title: t.title || "",
        text: String(t.description || t.cover || "").slice(0, 600),
        author: { name: $(s, a), handle: be(s, a), avatar: Q(s, a) },
        image: t.thumb || "",
        meta: [`${he(t.views)} 次观看`, t.duration ? `${n}:${i}` : ""].filter(Boolean).join(" · "),
        refId: t.id,
        ownerId: a,
    };
}
function _s(s, a) {
    const t = de(s, a);
    return {
        platform: "youtube",
        kind: "channel",
        title: $(s, a),
        text: String(t.about || t.tagline || "").slice(0, 300),
        author: { name: $(s, a), handle: be(s, a), avatar: Q(s, a) },
        meta: [
            t.subscribers != null ? `${he(t.subscribers)} 位订阅者` : "",
            `${(t.videos || []).length} 个视频`,
        ]
            .filter(Boolean)
            .join(" · "),
        ownerId: a,
    };
}
function Fe(s) {
    var t, n, i, m;
    const a = [];
    for (const u of ((n = (t = s.youtube) == null ? void 0 : t.me) == null ? void 0 : n.videos) || [])
        a.push({ ...u, ownerId: "me" });
    for (const u of s.characters)
        for (const x of ((m = (i = s.youtube.channels) == null ? void 0 : i[u.id]) == null
            ? void 0
            : m.videos) || [])
            a.push({ ...x, ownerId: u.id });
    return a.sort((u, x) => (x.createdAt || 0) - (u.createdAt || 0));
}
function cs(s) {
    const a = [...String(s || "")].reduce((t, n) => (t * 31 + n.charCodeAt(0)) >>> 0, 7);
    return {
        angle: a % 180,
        a: 6 + (a % 12),
        b: 66 + ((a >> 3) % 22),
        shift: (a >> 5) % 100,
        x: 18 + ((a >> 7) % 64),
        y: 20 + ((a >> 11) % 60),
        r: 28 + ((a >> 13) % 34),
    };
}
function xt(s) {
    return [
        `radial-gradient(circle at ${s.x}% ${s.y}%, hsl(0 0% ${Math.min(92, s.b + 16)}% / .55) 0%, transparent ${s.r}%)`,
        `linear-gradient(${s.angle}deg, hsl(0 0% ${s.a}%) 0%, hsl(0 0% ${s.b}%) ${s.shift}%, hsl(0 0% ${Math.max(8, s.a + 6)}%) 100%)`,
    ].join(", ");
}
function Ee({ video: s, className: a = "", children: t, showCover: n = !0 }) {
    const i = cs(s == null ? void 0 : s.id);
    return s != null && s.thumb
        ? e.jsxs("div", { className: `yt-thumb ${a}`, children: [e.jsx(ts, { src: s.thumb, alt: "" }), t] })
        : e.jsxs("div", {
              className: `yt-thumb yt-thumb-gen ${a}`,
              style: { background: xt(i) },
              children: [
                  n &&
                      (s != null && s.cover
                          ? e.jsx("span", { className: "yt-thumb-cover", children: s.cover })
                          : e.jsx(Qe, { size: 26, strokeWidth: 1.4 })),
                  t,
              ],
          });
}
function ne({ src: s, name: a, size: t = 36, className: n = "" }) {
    return e.jsx("div", {
        className: `yt-av ${n}`,
        style: { width: t, height: t, fontSize: Math.round(t * 0.42) },
        children: s
            ? e.jsx(ts, { src: s, alt: "" })
            : e.jsx("span", { children: String(a || "·").slice(0, 1) }),
    });
}
function sn({ busy: s, onRun: a, onStop: t, size: n = 18, className: i = "", label: m = "生成新一轮反响" }) {
    return e.jsx("button", {
        className: `yt-icon-btn ${s ? "is-busy" : ""} ${i}`,
        onClick: s ? t : a,
        "aria-label": s ? "停止生成" : m,
        title: s ? "停止生成" : m,
        children: s ? e.jsx(Re, { size: n }) : e.jsx(st, { size: n }),
    });
}
function tn(s, a, t, n) {
    var m, u, x;
    if (a === "video") return (de(s, t).videos || []).find((l) => l.id === n) || null;
    const i =
        t === "me"
            ? (m = s.youtube) == null
                ? void 0
                : m.me
            : (x = (u = s.youtube) == null ? void 0 : u.channels) == null
              ? void 0
              : x[t];
    return ((i == null ? void 0 : i.posts) || []).find((l) => l.id === n) || null;
}
async function pt(s, a, t, n, { signal: i, charIds: m = null, passersby: u = !0, hint: x = null } = {}) {
    var g, E, F, ie, oe;
    const { state: l, patch: b, tubeUpdateVideo: r, tubeAppendComments: d, socialAddAlt: C } = s,
        p = tn(l, a, t, n) || x;
    if (!p) return null;
    const j = a === "video" ? "youtube" : "tubepost",
        f = ge(t) && as(l, "youtube", t) === "me" ? We(l, "youtube", t) : null,
        A = t === "me" || !!f;
    let c = l.characters
        .filter((v) => v.id !== t && !(p.mentions || []).includes(v.id) && (!m || m.includes(v.id)))
        .slice(0, 6);
    if (A && !m) {
        const { nowGroup: v, later: K } = ea(c, `${j}:${p.id}`);
        (ms(
            b,
            K.map((V) => ({
                id: pe("sp_"),
                kind: "notice",
                platform: j,
                ownerId: t,
                postId: p.id,
                charIds: V.chars.map((ee) => ee.id),
                due: V.at,
            })),
        ),
            (c = v));
    }
    if (!c.length && !u) return 0;
    const z = sa(c.length),
        P = ta(l.me),
        B = (p.comments || []).map((v) => ({
            ...v,
            author: v.author === "me" || v.author === "user" ? "me" : v.author,
        })),
        Y = B.map((v) => v.id).filter(Boolean),
        L =
            a === "video"
                ? p.title
                : [
                      p.text,
                      p.videoRef ? `附的视频《${((g = p.video) == null ? void 0 : g.title) || ""}》` : "",
                  ]
                      .filter(Boolean)
                      .join("｜"),
        I = aa({
            kind: a,
            ownerName: $(l, t),
            subscribers: de(l, t).subscribers,
            views:
                a === "video"
                    ? p.views
                    : Math.max(30, Math.round((Number(de(l, t).subscribers) || 300) * 0.2)),
            title: L,
            notice: A,
            passersby: u,
            publicity: (() => {
                const v = l.characters.find((K) => K.id === t);
                return v ? na(v, { meName: P }) : "";
            })(),
            chars: c.map((v) => {
                var V;
                const K = ze(l, v);
                return {
                    id: v.id,
                    name: K.name,
                    persona: String(K.persona || "").slice(0, z.persona),
                    relation: String(K.relation || "").slice(0, z.relation),
                    mood: K.mood,
                    memory: [...K.moments, ...K.living].slice(-z.memory).join("；").slice(0, z.memoryChars),
                    accounts: [
                        `主频道 @${be(l, v.id) || $(l, v.id)}`,
                        ...Bs(l, "youtube", v.id).map(
                            (ee) => `小号 id=alt:${ee.id} @${ee.handle || ee.nickname}`,
                        ),
                    ].join("；"),
                    ownerNote: f
                        ? ia(f, v.id)
                            ? `这条是她用小号 @${f.handle || f.nickname} 发的，你知道这个号是她。`
                            : `这条来自频道 @${f.handle || f.nickname}，你不知道这个号是她，它在你眼里是陌生频道。`
                        : "",
                    ...(A
                        ? {
                              now: la(v),
                              done: ra(v.id, B, (V = p.noticeLog) == null ? void 0 : V[v.id], { meName: P }),
                          }
                        : null),
                };
            }),
        }),
        w = A
            ? ca(B, { meName: P })
            : (p.comments || []).slice(-10).map((v) => `${v.name}：${v.text}`).join(`
`),
        h = await De.youtube(
            at(l, "youtube"),
            [
                { role: "system", content: I },
                {
                    role: "user",
                    content: `${a === "video" ? `这期的简介：${p.description || "（无）"}` : `帖子正文：${p.text || "（无）"}`}

评论区${A ? "（带 id）" : "已有"}：
${w || "（还没有评论）"}`,
                },
            ],
            { fallback: l.api.chat, signal: i },
        ),
        W = Math.max(1, Number(a === "video" ? p.views : 300) || 500),
        N = oa(Ce(h.content), {
            allowedCharIds: c.map((v) => v.id),
            minLikes: 0,
            maxLikes: u ? Math.max(2, Math.round(W * 0.14)) : Number.MAX_SAFE_INTEGER,
        });
    if (!N) throw new Error("反响格式不合格，已丢弃；不会为修格式二次调用");
    u &&
        (a === "video"
            ? r(t, p.id, (v) => ({ likes: Math.max(Number(v.likes) || 0, N.likes) }))
            : Us(b, t, p.id, (v) => ({ likes: Math.max(Number(v.likes) || 0, N.likes) })));
    const T = {},
        U = new Set(
            [
                (F = (E = l.youtube) == null ? void 0 : E.me) == null ? void 0 : F.handle,
                ...Object.values(((ie = l.youtube) == null ? void 0 : ie.channels) || {}).map((v) =>
                    v == null ? void 0 : v.handle,
                ),
                ...Object.values(((oe = l.youtube) == null ? void 0 : oe.alts) || {})
                    .flat()
                    .map((v) => (v == null ? void 0 : v.handle)),
            ]
                .filter(Boolean)
                .map((v) => String(v).toLowerCase()),
        ),
        D = (v) => {
            var se;
            const K = [...Bs(l, "youtube", v.charId), ...(T[v.charId] || [])];
            if ((se = v.as) != null && se.startsWith("alt:"))
                return K.find((xe) => `alt:${xe.id}` === v.as) || null;
            if (v.as !== "new" || !v.newAlt || K.length >= 2) return null;
            let V = v.newAlt.handle,
                ee = 2;
            for (; U.has(V); ) V = `${v.newAlt.handle.slice(0, 26)}${ee++}`;
            U.add(V);
            const M = {
                ...nt("youtube", { handle: V, nickname: v.newAlt.nickname, bio: v.newAlt.bio }),
                subscribers: 5 + Math.floor(Math.random() * 120),
                fromGen: !0,
                linked: !1,
                fromReact: !0,
            };
            return (C("youtube", v.charId, M), (T[v.charId] = [...(T[v.charId] || []), M]), M);
        },
        O = new Map(B.map((v) => [v.id, v])),
        S = [
            ...N.charComments.map((v) => {
                const K = D(v),
                    V = O.get(da(v, Y));
                return {
                    name: K ? K.nickname || K.handle : $(l, v.charId),
                    text: v.text,
                    ...(v.tr ? { tr: v.tr } : null),
                    author: "char",
                    charId: v.charId,
                    avatar: K ? K.avatar || null : Q(l, v.charId),
                    likes: Math.floor(Math.random() * 40),
                    ...(K ? { acct: `alt:${K.id}` } : null),
                    ...(V ? { replyToId: V.id, replyToName: V.author === "me" ? P : V.name } : null),
                };
            }),
            ...N.comments.map((v) => ({
                name: v.name,
                text: v.text,
                ...(v.tr ? { tr: v.tr } : null),
                author: "ai",
                likes: v.likes,
            })),
        ];
    if (
        (S.length &&
            (a === "video"
                ? d(t, p.id, S)
                : Us(b, t, p.id, (v) => ({
                      comments: [
                          ...(v.comments || []),
                          ...S.map((K) => ({ id: pe("ypc_"), createdAt: Date.now(), likes: 0, ...K })),
                      ],
                  }))),
        m &&
            N.charComments.forEach((v) =>
                ua({
                    app: "youtube",
                    charId: v.charId,
                    text: "评论了你的" + (a === "video" ? "视频" : "帖子"),
                    postId: p.id,
                }),
            ),
        A)
    ) {
        const v = ha(N.charActs, { allowedCharIds: c.map((V) => V.id), commentIds: Y }),
            K =
                a === "video"
                    ? `Tube · 她发的视频《${String(p.title || "").slice(0, 40)}》`
                    : `Tube · 她在频道里发的帖子：${String(p.text || "").slice(0, 60) || "（附了一期视频）"}`;
        (ms(
            b,
            Object.values(v).flatMap((V) =>
                ma(
                    V,
                    { platform: j, ownerId: t, postId: p.id, label: K, comments: B },
                    { uid: () => pe("sp_") },
                ),
            ),
        ),
            ms(
                b,
                c
                    .filter((V) => !v[V.id])
                    .map((V) => ({
                        id: pe("sp_"),
                        kind: "seen",
                        platform: j,
                        ownerId: t,
                        postId: p.id,
                        charId: V.id,
                        due: Date.now(),
                    })),
            ));
    }
    return S.length;
}
function Us(s, a, t, n) {
    s((i) => {
        var x;
        const m = i.youtube || {},
            u = (l) => ({
                ...l,
                posts: ((l == null ? void 0 : l.posts) || []).map((b) =>
                    b.id === t ? { ...b, ...n(b) } : b,
                ),
            });
        return a === "me"
            ? { youtube: { ...m, me: u(m.me) } }
            : {
                  youtube: {
                      ...m,
                      channels: { ...m.channels, [a]: u((x = m.channels) == null ? void 0 : x[a]) },
                  },
              };
    });
}
const an = (s, a, t, n) => pt(s, "video", a, t, n),
    nn = (s, a, t, n) => pt(s, "post", a, t, n);
function Ae(s = "tube") {
    const a = te(),
        {
            state: t,
            tubeSetChannel: n,
            tubeAppendVideo: i,
            tubeAppendComments: m,
            tubeUpdateVideo: u,
            socialPatchAlt: x,
            socialAddAlt: l,
        } = a,
        b = o.useRef(a);
    b.current = a;
    const r = ve(),
        d = xa(s),
        C = De.usableLane(t.api.youtube, t.api.chat),
        p = !!(C != null && C.baseUrl),
        j = o.useCallback((w, h) => Je(t, u, w, h), [t, u]),
        f = o.useCallback(
            (w, h) => De.youtube(at(t, "youtube"), w, { fallback: t.api.chat, signal: h }),
            [t.api],
        ),
        A = o.useCallback(
            (w, h) =>
                w != null && w.aborted
                    ? (r("已停止生成"), !1)
                    : w != null && w.skipped
                      ? (r("上一次生成仍在进行"), !1)
                      : w != null && w.error
                        ? (r(w.error.message, "error"), !1)
                        : (h && r(h), !0),
            [r],
        ),
        c = o.useCallback(
            async (w, h, W = null) => {
                var O, S, g;
                const N = t.characters.find((E) => E.id === w);
                if (!N) return null;
                const T = ze(t, N, { ref: W }),
                    U = await f(pa(T), h),
                    D = ba(Ce(U.content), {
                        forbiddenHandles: [
                            N.wechatId,
                            (g = (S = (O = t.insta) == null ? void 0 : O.chars) == null ? void 0 : S[w]) ==
                            null
                                ? void 0
                                : g.username,
                        ],
                    });
                if (!D) throw new Error("频道资料格式不合格，已丢弃；不会为修格式二次调用");
                return (
                    W
                        ? x("youtube", as(t, "youtube", W), ge(W), {
                              nickname: D.nickname,
                              handle: D.handle,
                              about: D.about,
                              aboutTr: D.aboutTr || "",
                              subscribers: D.subscribers,
                              ...(D.direction ? { direction: D.direction } : {}),
                          })
                        : n(w, { aboutTr: "", ...D }),
                    D
                );
            },
            [t, f, n, x],
        ),
        z = o.useCallback(
            async (w, { silent: h = !1, ref: W = null } = {}) => {
                if (!p) {
                    h || r("先在 API 设置里配好聊天或 Tube 通道", "error");
                    return;
                }
                const N = await d.run((T) => c(w, T, W));
                if (h) {
                    N != null && N.error && console.warn("[tube] 自动补频道资料失败", N.error);
                    return;
                }
                A(N, "频道资料已更新");
            },
            [p, r, d, c, A],
        ),
        P = o.useCallback(
            async (w, { kind: h = "video", hint: W = "", ref: N = null } = {}) => {
                const T = t.characters.find((O) => O.id === w);
                if (!T) return null;
                if (!p) return (r("先在 API 设置里配好聊天或 Tube 通道", "error"), null);
                const U = N || w,
                    D = await d.run(async (O) => {
                        const S = de(t, U);
                        if (!N && S.subscribers == null)
                            try {
                                await c(w, O);
                            } catch (v) {
                                if ((v == null ? void 0 : v.name) === "AbortError") throw v;
                            }
                        const g = ze(t, T, { ref: N }),
                            E = await f(ja(g, { kind: h, hint: W }), O),
                            F = ya(Ce(E.content), { kind: h });
                        if (!F) throw new Error("内容格式不合格，已丢弃；不会为修格式二次调用");
                        const ie = pe("v_"),
                            oe = {
                                id: ie,
                                kind: h,
                                title: F.title,
                                titleTr: F.titleTr,
                                cover: F.cover,
                                duration: F.duration,
                                description: F.description,
                                descriptionTr: F.descriptionTr,
                                chapters: F.chapters,
                                scenes: F.scenes,
                                views: F.views,
                                likes: Math.max(0, Math.round(F.views * (0.02 + Math.random() * 0.06))),
                                comments: F.comments.map((v) => ({
                                    id: pe("yc_"),
                                    name: v.name,
                                    text: v.text,
                                    ...(v.tr ? { tr: v.tr } : null),
                                    likes: v.likes,
                                    author: "ai",
                                    createdAt: Date.now() - Math.floor(Math.random() * 6 * 36e5),
                                })),
                            };
                        return (i(U, oe), j(U, oe), ie);
                    });
                return A(D, h === "short" ? "短视频已发布" : "视频已发布") ? D.value : null;
            },
            [t, f, p, r, d, c, i, j, A],
        ),
        B = o.useCallback(
            async (w, h) => {
                if (!p) {
                    r("先在 API 设置里配好聊天或 Tube 通道", "error");
                    return;
                }
                const W = await d.run((N) => an(b.current, w, h.id, { signal: N, hint: h }));
                A(W) && typeof W.value == "number" && r(`新增 ${W.value} 条反响`);
            },
            [p, r, d, A],
        ),
        Y = o.useCallback(
            async (w, h, W = null) => {
                if (!p) {
                    r("先在 API 设置里配好聊天或 Tube 通道", "error");
                    return;
                }
                const N = await d.run((T) => nn(b.current, w, h, { signal: T, hint: W }));
                A(N) &&
                    typeof N.value == "number" &&
                    r(N.value ? `新增 ${N.value} 条评论` : "这一轮没有新评论");
            },
            [p, r, d, A],
        ),
        L = o.useCallback(
            async ({ count: w = 4 } = {}) => {
                if (!p) {
                    r("先在 API 设置里配好聊天或 Tube 通道", "error");
                    return;
                }
                const h = t.characters.slice(0, 6);
                if (!h.length) {
                    r("还没有角色", "error");
                    return;
                }
                const W = await d.run(async (N) => {
                    for (const O of h.filter((S) => de(t, S.id).subscribers == null).slice(0, 2))
                        try {
                            await c(O.id, N);
                        } catch (S) {
                            if ((S == null ? void 0 : S.name) === "AbortError") throw S;
                        }
                    const T = h.map((O) => ze(t, O)),
                        U = await f(fa(T, { count: w }), N),
                        D = va(Ce(U.content), { allowedCharIds: h.map((O) => O.id) });
                    if (!D) throw new Error("这一批格式不合格，已丢弃；不会为修格式二次调用");
                    for (const O of D) {
                        const S = {
                            id: pe("v_"),
                            kind: "short",
                            title: O.title,
                            titleTr: O.titleTr,
                            cover: O.cover,
                            duration: O.duration,
                            description: O.description,
                            descriptionTr: O.descriptionTr,
                            chapters: [],
                            scenes: O.scenes,
                            views: O.views,
                            likes: Math.max(0, Math.round(O.views * (0.02 + Math.random() * 0.06))),
                            comments: O.comments.map((g) => ({
                                id: pe("yc_"),
                                name: g.name,
                                text: g.text,
                                ...(g.tr ? { tr: g.tr } : null),
                                likes: g.likes,
                                author: "ai",
                                createdAt: Date.now() - Math.floor(Math.random() * 3 * 36e5),
                            })),
                        };
                        (i(O.charId, S), j(O.charId, S));
                    }
                    return D.length;
                });
                A(W) && typeof W.value == "number" && r(`刷到 ${W.value} 条新短视频`);
            },
            [t, f, p, r, d, c, i, j, A],
        ),
        I = o.useCallback(
            async (w, { count: h = 3, quota: W = null } = {}) => {
                if (!p) {
                    r("先在 API 设置里配好聊天或 Tube 通道", "error");
                    return;
                }
                const N = w.map((U) => t.characters.find((D) => D.id === U)).filter(Boolean);
                if (!N.length) {
                    r("还没有角色", "error");
                    return;
                }
                const T = await d.run(async (U) => {
                    for (const E of N.filter((F) => de(t, F.id).subscribers == null).slice(0, 2))
                        try {
                            await c(E.id, U);
                        } catch (F) {
                            if ((F == null ? void 0 : F.name) === "AbortError") throw F;
                        }
                    const D = N.map((E) => ({ ...ze(t, E), id: E.id })),
                        O = await f(Na(D, { count: h, quota: W }), U),
                        S = Date.now(),
                        g = ga(Ce(O.content), { allowedCharIds: N.map((E) => E.id), now: S });
                    if (!g.length) throw new Error("这一批格式不合格，已丢弃；不会为修格式二次调用");
                    for (const E of g) {
                        const F = {
                            id: pe("v_"),
                            kind: E.kind,
                            createdAt: E.createdAt,
                            title: E.title,
                            titleTr: E.titleTr,
                            cover: E.cover,
                            duration: E.duration,
                            description: E.description,
                            descriptionTr: E.descriptionTr,
                            chapters: E.chapters,
                            scenes: E.scenes,
                            views: E.views,
                            likes: Math.max(0, Math.round(E.views * (0.02 + Math.random() * 0.06))),
                            comments: E.comments.map((ie) => ({
                                id: pe("yc_"),
                                name: ie.name,
                                text: ie.text,
                                ...(ie.tr ? { tr: ie.tr } : null),
                                likes: ie.likes,
                                author: "ai",
                                createdAt: E.createdAt + Math.floor(Math.random() * 6 * 36e5),
                            })),
                        };
                        (i(E.charId, F), j(E.charId, F));
                    }
                    return g.length;
                });
                A(T) && typeof T.value == "number" && r(`新发了 ${T.value} 条`);
            },
            [t, f, p, r, d, c, i, j, A],
        );
    return {
        busy: d.busy,
        stop: d.stop,
        run: d.run,
        settle: A,
        genShortsFeed: L,
        genBatch: I,
        laneReady: p,
        lane: C,
        call: f,
        genChannel: z,
        genChannelWith: c,
        genVideo: P,
        genReaction: B,
        genPostReaction: Y,
    };
}
const bt = o.createContext({ v: "me", readOnly: !1 }),
    jt = o.createContext(null),
    ye = () => o.useContext(bt);
function _n({ onBack: s, viewerId: a = "me", readOnly: t = !1, phoneFeed: n = null, ghostDm: i = null }) {
    const { state: m } = te(),
        u = a || "me",
        x = o.useMemo(() => ({ v: u, readOnly: t, phoneFeed: n }), [u, t, n]),
        [l, b] = o.useState("home"),
        [r, d] = o.useState([]),
        [C, p] = o.useState(!1),
        [j, f] = o.useState(null),
        A = o.useCallback((H, X = null) => f({ card: H, defaultCharId: X }), []),
        c = r[r.length - 1] || null,
        z = o.useCallback((H) => d((X) => [...X, H]), []),
        P = o.useRef(!1),
        [B, Y] = o.useState(!1),
        L = o.useCallback((H) => {
            ((P.current = H), Y(H));
        }, []),
        I = o.useRef(r);
    I.current = r;
    const w = o.useCallback(() => {
            if (P.current && I.current.length <= 1) {
                (L(!1), s == null || s());
                return;
            }
            d((H) => H.slice(0, -1));
        }, [s, L]),
        h = o.useCallback(
            (H) => {
                (L(!1), b(H), d([]));
            },
            [L],
        ),
        W = o.useCallback((H) => z({ name: "channel", ownerId: H }), [z]),
        N = o.useCallback((H, X) => z({ name: "watch", ownerId: H, videoId: X }), [z]);
    o.useEffect(() => {
        if ((a || "me") !== "me") return;
        const H = (R) => {
            var q;
            if (!R) return;
            const y = de(m, R.ownerId).videos,
                _ =
                    R.postId && y.some((J) => J.id === R.postId)
                        ? R.postId
                        : (q = y[0]) == null
                          ? void 0
                          : q.id;
            _ && (L(!!R.solo), d([{ name: "watch", ownerId: R.ownerId, videoId: _ }]));
        };
        H(Os("youtube"));
        const X = (R) => {
            var y;
            ((y = R.detail) == null ? void 0 : y.app) === "youtube" && H(Os("youtube"));
        };
        return (
            window.addEventListener("litot:focus-post", X),
            () => window.removeEventListener("litot:focus-post", X)
        );
    }, []);
    const T = o.useCallback((H) => z({ name: "live", charId: H }), [z]),
        U = o.useCallback((H) => z({ name: "dm", charId: H }), [z]);
    o.useEffect(() => {
        if (i) {
            if ((L(!1), String(i).startsWith("s:"))) {
                const H = String(i).slice(2);
                d((X) => {
                    const R = X[X.length - 1];
                    return (R == null ? void 0 : R.name) === "stranger" && R.convId === H
                        ? X
                        : [{ name: "stranger", accountRef: "me", convId: H }];
                });
                return;
            }
            d((H) => {
                const X = H[H.length - 1];
                return (X == null ? void 0 : X.name) === "dm" && X.charId === i
                    ? H
                    : [{ name: "dm", charId: i }];
            });
        }
    }, [i]);
    const D = o.useCallback((H, X) => z({ name: "stranger", accountRef: H, convId: X }), [z]),
        O = o.useCallback((H, X, R) => z({ name: "accounts", ownerId: H, onPick: X, current: R }), [z]),
        S = o.useCallback((H, X) => z({ name: "newalt", ownerId: H, onPick: X }), [z]),
        g = m.youtube.live,
        E = o.useCallback((H, X) => z({ name: "newpost", ownerId: H, videoId: X }), [z]),
        [F, ie] = o.useState(null),
        oe = o.useCallback((H, X) => ie({ ref: H, owner: X }), []),
        v = o.useMemo(
            () => ({
                push: z,
                pop: w,
                rootTab: h,
                openChannel: W,
                openWatch: N,
                openLive: T,
                openDm: U,
                openStranger: D,
                openAccounts: O,
                openNewAlt: S,
                onBack: s,
                share: A,
                sharePost: E,
                suspect: oe,
            }),
            [z, w, h, W, N, T, U, D, s, A, E, oe],
        ),
        [K, V] = o.useState(null),
        [ee, M] = o.useState(!1),
        se = o.useMemo(() => ({ el: K, setDocked: M }), [K]),
        xe =
            l === "home"
                ? e.jsx(cn, {})
                : l === "shorts"
                  ? e.jsx(Nt, {})
                  : l === "subs"
                    ? e.jsx(xn, {})
                    : e.jsx(yn, {});
    return e.jsx(bt.Provider, {
        value: x,
        children: e.jsx(dt.Provider, {
            value: v,
            children: e.jsx(jt.Provider, {
                value: se,
                children: e.jsxs("div", {
                    className: "yt-shell",
                    children: [
                        e.jsx("div", {
                            className: "yt-body",
                            children: c
                                ? c.name === "channel"
                                    ? e.jsx(kn, { ownerId: c.ownerId }, c.ownerId)
                                    : c.name === "watch"
                                      ? e.jsx(
                                            Sn,
                                            { ownerId: c.ownerId, videoId: c.videoId, list: c.list },
                                            c.videoId,
                                        )
                                      : c.name === "dm"
                                        ? e.jsx(
                                              Ra,
                                              {
                                                  charId: c.charId,
                                                  platform: "tube",
                                                  onClose: w,
                                                  avatarOf: (H) => Q(m, H),
                                                  nameOf: (H) => $(m, H),
                                                  handleOf: (H) => be(m, H),
                                                  onProfile: (H) => W(H),
                                                  mirror: t,
                                                  mirrorName: $(m, "me"),
                                                  mirrorAvatar: Q(m, "me"),
                                              },
                                              c.charId,
                                          )
                                        : c.name === "stranger"
                                          ? e.jsx(
                                                fn,
                                                { accountRef: c.accountRef, convId: c.convId, onClose: w },
                                                c.convId,
                                            )
                                          : c.name === "live"
                                            ? e.jsx(
                                                  On,
                                                  { charId: c.charId, archiveId: c.archiveId },
                                                  `${c.charId}_${c.archiveId || "now"}`,
                                              )
                                            : c.name === "search"
                                              ? e.jsx(vn, {})
                                              : c.name === "history"
                                                ? e.jsx(ps, { kind: "history" })
                                                : c.name === "later"
                                                  ? e.jsx(ps, { kind: "later" })
                                                  : c.name === "lives"
                                                    ? e.jsx(ps, { kind: "lives" })
                                                    : c.name === "accounts"
                                                      ? e.jsx(bn, {
                                                            ownerId: c.ownerId,
                                                            onPick: c.onPick,
                                                            current: c.current,
                                                        })
                                                      : c.name === "newalt"
                                                        ? e.jsx(jn, { ownerId: c.ownerId, onPick: c.onPick })
                                                        : c.name === "newpost"
                                                          ? e.jsx(wn, {
                                                                ownerId: c.ownerId,
                                                                videoId: c.videoId,
                                                            })
                                                          : null
                                : xe,
                        }),
                        g &&
                            (c == null ? void 0 : c.name) !== "live" &&
                            e.jsxs("button", {
                                className: "yt-live-strip",
                                onClick: () => T(g.charId),
                                children: [
                                    e.jsx("span", { className: "yt-live-dot" }),
                                    e.jsx("b", { children: $(m, g.charId) }),
                                    e.jsxs("span", {
                                        className: "yt-live-strip-title",
                                        children: ["正在直播 · ", g.title],
                                    }),
                                    e.jsxs("span", {
                                        className: "yt-live-strip-count",
                                        children: [he(g.viewers), " 人在看"],
                                    }),
                                ],
                            }),
                        e.jsx("div", { className: "yt-dock-slot", ref: V }),
                        B &&
                            !ee &&
                            e.jsx("div", {
                                "aria-hidden": !0,
                                style: { flexShrink: 0, height: "var(--sab, 0px)" },
                            }),
                        e.jsxs("nav", {
                            className: "yt-tabbar",
                            style:
                                ee || B || (c == null ? void 0 : c.name) === "newpost"
                                    ? { display: "none" }
                                    : void 0,
                            children: [
                                e.jsx(Xe, {
                                    icon: e.jsx(Wa, {
                                        size: 22,
                                        strokeWidth: l === "home" && !c ? 2.3 : 1.7,
                                    }),
                                    label: "首页",
                                    on: l === "home" && !c,
                                    onClick: () => h("home"),
                                }),
                                e.jsx(Xe, {
                                    icon: e.jsx(Ye, { active: l === "shorts" && !c }),
                                    label: "Shorts",
                                    on: l === "shorts" && !c,
                                    onClick: () => h("shorts"),
                                }),
                                !t &&
                                    e.jsx("button", {
                                        className: "yt-tab yt-tab-plus",
                                        onClick: () => p(!0),
                                        "aria-label": "创建",
                                        children: e.jsx(Ue, { size: 24, strokeWidth: 2 }),
                                    }),
                                e.jsx(Xe, {
                                    icon: e.jsx(Ba, {
                                        size: 22,
                                        strokeWidth: l === "subs" && !c ? 2.3 : 1.7,
                                    }),
                                    label: "订阅",
                                    on: l === "subs" && !c,
                                    onClick: () => h("subs"),
                                }),
                                e.jsx(Xe, {
                                    icon: e.jsx(ne, { src: Q(m, u), name: $(m, u), size: 23 }),
                                    label: "我的",
                                    on: l === "you" && !c,
                                    onClick: () => h("you"),
                                }),
                            ],
                        }),
                        e.jsx(In, { open: C, onClose: () => p(!1) }),
                        e.jsx($t, {
                            platform: "youtube",
                            target: F,
                            onClose: () => ie(null),
                            onOpen: (H) => {
                                (ie(null), W(H));
                            },
                        }),
                        !t &&
                            e.jsx(Rt, {
                                open: !!j,
                                onClose: () => f(null),
                                card: j == null ? void 0 : j.card,
                                defaultCharId: j == null ? void 0 : j.defaultCharId,
                            }),
                    ],
                }),
            }),
        }),
    });
}
function Xe({ icon: s, label: a, on: t, onClick: n }) {
    return e.jsxs("button", {
        className: `yt-tab ${t ? "on" : ""}`,
        onClick: n,
        children: [s, e.jsx("span", { children: a })],
    });
}
function ss(s, a) {
    return !a || a === "me" ? null : String(a).startsWith("alt:") ? as(s, "youtube", a) || null : a;
}
function Ye({ active: s }) {
    return e.jsxs("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: s ? 2.3 : 1.7,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            e.jsx("rect", { x: "7", y: "2.5", width: "10", height: "19", rx: "5" }),
            e.jsx("path", { d: "M10.6 9.2 L14.8 12 L10.6 14.8 Z", fill: "currentColor", stroke: "none" }),
        ],
    });
}
function we({ title: s, onBack: a, right: t, sticky: n = !0 }) {
    ye();
    const i = ue();
    return e.jsxs("header", {
        className: `yt-topbar ${n ? "sticky" : ""}`,
        children: [
            a !== !1 &&
                e.jsx("button", {
                    className: "yt-icon-btn",
                    onClick: a || i.pop,
                    "aria-label": "返回",
                    children: e.jsx(Ge, { size: 24 }),
                }),
            typeof s == "string" ? e.jsx("div", { className: "yt-topbar-title", children: s }) : s,
            e.jsx("div", { className: "yt-topbar-right", children: t }),
        ],
    });
}
function yt() {
    const s = ue(),
        { state: a } = te(),
        t = ye();
    return e.jsxs("header", {
        className: "yt-topbar sticky",
        children: [
            e.jsxs("div", {
                className: "yt-brand",
                children: [
                    e.jsx("span", {
                        className: "yt-brand-mark",
                        children: e.jsx(ks, { size: 11, fill: "#fff", strokeWidth: 0 }),
                    }),
                    e.jsx("span", { className: "yt-brand-word", children: "Litot Tube" }),
                ],
            }),
            e.jsxs("div", {
                className: "yt-topbar-right",
                children: [
                    e.jsx("button", {
                        className: "yt-icon-btn",
                        "aria-label": "投屏",
                        onClick: () => s.push({ name: "lives" }),
                        children: e.jsx(ct, { size: 21 }),
                    }),
                    e.jsx("button", {
                        className: "yt-icon-btn",
                        "aria-label": "搜索",
                        onClick: () => s.push({ name: "search" }),
                        children: e.jsx(is, { size: 21 }),
                    }),
                    e.jsx("button", {
                        className: "yt-icon-btn",
                        "aria-label": "退出",
                        onClick: s.onBack,
                        children: e.jsx(fe, { size: 21 }),
                    }),
                    e.jsx("button", {
                        className: "btn-plain",
                        onClick: () => s.rootTab("you"),
                        "aria-label": "我的频道",
                        children: e.jsx(ne, { src: Q(a, t.v), name: $(a, t.v), size: 28 }),
                    }),
                ],
            }),
        ],
    });
}
const ln = [
        { id: "all", label: "全部" },
        { id: "live", label: "直播中" },
        { id: "subs", label: "已订阅" },
        { id: "short", label: "短视频" },
        { id: "new", label: "最新上传" },
        { id: "watched", label: "看过的" },
    ],
    rn = [
        { id: "all", label: "全部" },
        { id: "subs", label: "他订阅的" },
        { id: "half", label: "看了一半" },
        { id: "short", label: "短视频" },
        { id: "liked", label: "点过赞" },
    ];
function ft({ initialChip: s = "all" } = {}) {
    const { state: a } = te(),
        t = ue(),
        { v: n, phoneFeed: i } = ye(),
        [m, u] = o.useState(s),
        [x, l] = o.useState(null),
        b = (a.characters || []).find((p) => p.id === n),
        r = o.useMemo(() => (b ? et(b).feeds.tube || [] : []), [b]),
        d = o.useMemo(() => {
            let j = [
                ...Fe(a).filter((f) => f.ownerId === n || f.ownerId === "me"),
                ...r.map((f) => ({ ...f, createdAt: f.at, gen: !0 })),
            ].sort((f, A) => (A.createdAt || 0) - (f.createdAt || 0));
            return (
                m === "subs" && (j = j.filter((f) => !f.gen || f.subscribed)),
                m === "half" && (j = j.filter((f) => f.gen && f.progress > 0 && f.progress < 95)),
                m === "short" && (j = j.filter((f) => f.kind === "short")),
                m === "liked" && (j = j.filter((f) => f.gen && f.liked)),
                j
            );
        }, [a, r, m, n]),
        C = b ? $(a, n) : "他";
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(yt, {}),
            e.jsxs("div", {
                className: "yt-scroll",
                children: [
                    e.jsxs("div", {
                        className: "yt-chips",
                        children: [
                            rn.map((p) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `yt-chip ${m === p.id ? "on" : ""}`,
                                        onClick: () => u(p.id),
                                        children: p.label,
                                    },
                                    p.id,
                                ),
                            ),
                            i &&
                                e.jsx("button", {
                                    className: `yt-chip ${i.busy ? "is-busy" : ""}`,
                                    onClick: i.busy ? void 0 : i.onGen,
                                    disabled: i.busy,
                                    children: i.busy ? "生成中…" : "刷新他的首页",
                                }),
                        ],
                    }),
                    !r.length &&
                        e.jsx("div", {
                            className: "yt-gen-hint",
                            children:
                                i != null && i.busy
                                    ? "正在生成他首页刷到的视频…"
                                    : "这里现在只有你们俩的频道。点「刷新他的首页」，看看他平时在看什么。",
                        }),
                    d.length === 0
                        ? e.jsx(je, { title: "这一栏是空的" })
                        : d.map((p) =>
                              p.gen
                                  ? e.jsx(
                                        vt,
                                        {
                                            video: p,
                                            hisName: C,
                                            hisAvatar: Q(a, n),
                                            open: x === p.id,
                                            onToggle: () => l(x === p.id ? null : p.id),
                                        },
                                        p.id,
                                    )
                                  : e.jsx(Be, { video: p, onOpen: () => t.openWatch(p.ownerId, p.id) }, p.id),
                          ),
                ],
            }),
        ],
    });
}
function vt({ video: s, hisName: a, hisAvatar: t, open: n, onToggle: i }) {
    const m = s.comments || [];
    return e.jsxs("article", {
        className: "yt-card yt-his",
        children: [
            e.jsx("button", {
                className: "btn-plain",
                onClick: i,
                style: { display: "block", width: "100%" },
                children: e.jsxs(Ee, {
                    video: { id: s.id, cover: s.title },
                    className: "yt-thumb-wide",
                    children: [
                        e.jsx("span", {
                            className: "yt-dur",
                            children: s.kind === "short" ? "Shorts" : Me(s.duration),
                        }),
                        s.progress > 0 &&
                            e.jsx("span", { className: "yt-seen", style: { width: `${s.progress}%` } }),
                    ],
                }),
            }),
            e.jsxs("div", {
                className: "yt-card-foot",
                children: [
                    e.jsx(ne, { name: s.channel, size: 36 }),
                    e.jsxs("button", {
                        className: "yt-card-copy btn-plain",
                        onClick: i,
                        children: [
                            e.jsx("div", { className: "yt-card-title", children: s.title }),
                            e.jsxs("div", {
                                className: "yt-card-meta",
                                children: [s.channel, " · ", he(s.views), " 次观看 · ", ke(s.createdAt)],
                            }),
                            e.jsxs("div", {
                                className: "yt-his-tags",
                                children: [
                                    s.subscribed && e.jsx("span", { children: "已订阅" }),
                                    s.liked && e.jsx("span", { children: "赞过" }),
                                    s.progress >= 95
                                        ? e.jsx("span", { children: "看完了" })
                                        : s.progress > 0
                                          ? e.jsxs("span", { children: ["看到 ", s.progress, "%"] })
                                          : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            n &&
                e.jsxs("div", {
                    className: "yt-his-more",
                    children: [
                        s.desc ? e.jsx("p", { children: s.desc }) : null,
                        e.jsx($e, {
                            className: "yt-trans",
                            text: [s.title, s.desc].filter(Boolean).join(`
`),
                            known: s.tr,
                            labels: ["翻译成中文", "隐藏翻译"],
                        }),
                        m.map((u) =>
                            e.jsxs(
                                "div",
                                {
                                    className: `yt-his-c ${u.byHim ? "him" : ""}`,
                                    children: [
                                        e.jsx(ne, {
                                            src: u.byHim ? t : void 0,
                                            name: u.byHim ? a : u.name,
                                            size: 24,
                                        }),
                                        e.jsxs("span", {
                                            children: [
                                                e.jsx("b", { children: u.byHim ? a : u.name }),
                                                u.text,
                                                e.jsx($e, {
                                                    className: "yt-trans",
                                                    text: u.text,
                                                    known: u.tr,
                                                    labels: ["翻译成中文", "隐藏翻译"],
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                u.id,
                            ),
                        ),
                        !s.desc && !m.length && e.jsx("p", { children: "没有简介，也没人留言。" }),
                    ],
                }),
        ],
    });
}
function cn() {
    const s = ye();
    return s.readOnly && s.v !== "me" ? e.jsx(ft, {}) : e.jsx(on, {});
}
function on() {
    const { state: s } = te(),
        a = ue(),
        t = Ae(),
        [n, i] = o.useState("all"),
        [m, u] = o.useState(!1),
        x = (r = {}) => {
            const { count: d = 5 } = r,
                C = ka(r, s.characters);
            if (C) {
                t.genBatch(
                    C.map((j) => j.char.id),
                    {
                        count: C.reduce((j, f) => j + f.count, 0),
                        quota: Object.fromEntries(C.map((j) => [j.char.id, j.count])),
                    },
                );
                return;
            }
            const p = s.characters
                .slice()
                .sort(() => Math.random() - 0.5)
                .slice(0, Math.min(6, Math.max(1, Math.ceil(d / 2))))
                .map((j) => j.id);
            t.genBatch(p, { count: d });
        },
        l = s.youtube.live,
        b = o.useMemo(() => {
            let r = Fe(s);
            if (
                (n === "subs" && (r = r.filter((d) => (s.youtube.subscriptions || []).includes(d.ownerId))),
                n === "short" && (r = r.filter((d) => d.kind === "short")),
                n === "new" && (r = r.slice(0, 12)),
                n === "watched")
            ) {
                const d = new Set((s.youtube.history || []).map((C) => C.videoId));
                r = r.filter((C) => d.has(C.id));
            }
            return (n === "live" && (r = []), r);
        }, [s, n]);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(yt, {}),
            e.jsxs("div", {
                className: "yt-scroll",
                children: [
                    e.jsxs("div", {
                        className: "yt-chips",
                        children: [
                            ln.map((r) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `yt-chip ${n === r.id ? "on" : ""}`,
                                        onClick: () => i(r.id),
                                        children: r.label,
                                    },
                                    r.id,
                                ),
                            ),
                            e.jsx("button", {
                                className: `yt-chip ${t.busy ? "is-busy" : ""}`,
                                onClick: t.busy ? t.stop : () => u(!0),
                                children: t.busy ? "后台生成中 · 停止" : "刷新首页",
                            }),
                        ],
                    }),
                    e.jsx(Wt, {
                        open: m,
                        onClose: () => u(!1),
                        app: "tube",
                        title: "刷新首页",
                        fields: [
                            {
                                key: "count",
                                label: "刷新条数",
                                hint: "包含长视频和短视频",
                                min: 1,
                                max: 8,
                                def: 5,
                                randomOnly: !0,
                            },
                        ],
                        people: s.characters.map((r) => ({ id: r.id, name: $(s, r.id), avatar: r.avatar })),
                        perMax: 3,
                        maxTotal: 8,
                        onStart: x,
                    }),
                    l && (n === "all" || n === "live") && e.jsx(un, { live: l }),
                    b.length === 0
                        ? n === "live" && l
                            ? null
                            : e.jsx(je, {
                                  title: n === "live" ? "现在没有人在直播" : "这里还没有内容",
                                  hint:
                                      n === "live"
                                          ? "到底栏中间的 + 里挑一个人开播"
                                          : "底栏中间的 + 可以让某个角色发一期",
                              })
                        : n === "short"
                          ? e.jsx("div", {
                                className: "sh-grid two",
                                children: b.map((r) =>
                                    e.jsx(Ts, { video: r, onOpen: () => a.openWatch(r.ownerId, r.id) }, r.id),
                                ),
                            })
                          : (() => {
                                const r = b.filter((j) => j.kind !== "short"),
                                    d = b.filter((j) => j.kind === "short"),
                                    C = d.length ? e.jsx(dn, { videos: d }, "shelf") : null,
                                    p = r.map((j) =>
                                        e.jsx(
                                            Be,
                                            { video: j, onOpen: () => a.openWatch(j.ownerId, j.id) },
                                            j.id,
                                        ),
                                    );
                                return [...p.slice(0, 2), C, ...p.slice(2)];
                            })(),
                ],
            }),
        ],
    });
}
function Ts({ video: s, onOpen: a }) {
    return e.jsxs("button", {
        className: "btn-plain sh-tile",
        onClick: a,
        children: [
            e.jsx(Ee, { video: s, className: "sh-tile-img", showCover: !s.thumb }),
            e.jsxs("span", {
                className: "sh-tile-copy",
                children: [
                    e.jsx("b", { children: s.title }),
                    e.jsxs("em", { children: [he(s.views || 0), " 次观看"] }),
                ],
            }),
        ],
    });
}
function dn({ videos: s }) {
    const a = ue();
    return e.jsxs("section", {
        className: "sh-shelf",
        children: [
            e.jsxs("header", {
                className: "sh-shelf-h",
                children: [
                    e.jsx(Ye, { active: !0 }),
                    e.jsx("b", { children: "Shorts" }),
                    e.jsx("button", {
                        className: "btn-plain",
                        onClick: () => a.rootTab("shorts"),
                        children: "全部",
                    }),
                ],
            }),
            e.jsx("div", {
                className: "sh-shelf-row",
                children: s
                    .slice(0, 10)
                    .map((t) =>
                        e.jsx(
                            Ts,
                            { video: t, onOpen: () => a.openWatch(t.ownerId, t.id) },
                            `${t.ownerId}:${t.id}`,
                        ),
                    ),
            }),
        ],
    });
}
function un({ live: s }) {
    const { state: a } = te(),
        t = ue();
    return e.jsxs("button", {
        className: "yt-live-card btn-plain",
        onClick: () => t.openLive(s.charId),
        children: [
            e.jsxs("div", {
                className: "yt-live-card-stage",
                children: [
                    e.jsxs("span", {
                        className: "yt-badge-live",
                        children: [e.jsx("span", { className: "yt-live-dot" }), "直播中"],
                    }),
                    e.jsx("div", { className: "yt-live-card-title", children: s.title }),
                    e.jsxs("div", {
                        className: "yt-live-card-meta",
                        children: [
                            he(s.viewers),
                            " 人正在观看 · 已播 ",
                            Math.max(1, Math.round((Date.now() - s.startedAt) / 6e4)),
                            " 分钟",
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "yt-card-foot",
                children: [
                    e.jsx(ne, { src: Q(a, s.charId), name: $(a, s.charId), size: 36 }),
                    e.jsxs("div", {
                        className: "yt-card-copy",
                        children: [
                            e.jsx("div", { className: "yt-card-title", children: s.title }),
                            e.jsxs("div", {
                                className: "yt-card-meta",
                                children: [$(a, s.charId), " · ", s.category],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Be({ video: s, onOpen: a, compact: t = !1 }) {
    const { state: n, tubeToggleWatchLater: i, tubeRemoveVideo: m } = te(),
        u = ve(),
        [x, l] = o.useState(!1),
        b = (n.youtube.history || []).find((C) => C.videoId === s.id),
        r = (n.youtube.watchLater || []).some((C) => C.videoId === s.id),
        d = x ? Zs(n.characters, s.id) : 0;
    return t
        ? e.jsxs("div", {
              className: "yt-row",
              children: [
                  e.jsx("button", {
                      className: "yt-row-thumb btn-plain",
                      onClick: a,
                      children: e.jsxs(Ee, {
                          video: s,
                          children: [
                              e.jsx("span", { className: "yt-dur", children: Me(s.duration) }),
                              (b == null ? void 0 : b.progress) > 0 &&
                                  e.jsx("span", {
                                      className: "yt-seen",
                                      style: {
                                          width: `${Math.min(100, (b.progress / Math.max(1, s.duration)) * 100)}%`,
                                      },
                                  }),
                          ],
                      }),
                  }),
                  e.jsxs("button", {
                      className: "yt-row-copy btn-plain",
                      onClick: a,
                      children: [
                          e.jsx("div", { className: "yt-row-title", children: s.title }),
                          e.jsx("div", { className: "yt-row-meta", children: $(n, s.ownerId) }),
                          e.jsxs("div", {
                              className: "yt-row-meta",
                              children: [he(s.views), " 次观看 · ", ke(s.createdAt)],
                          }),
                      ],
                  }),
                  e.jsx("button", {
                      className: "yt-icon-btn yt-row-more",
                      onClick: () => l(!0),
                      "aria-label": "更多",
                      children: e.jsx(Le, { size: 18 }),
                  }),
                  e.jsx(ys, {
                      open: x,
                      onClose: () => l(!1),
                      video: s,
                      saved: r,
                      memRefs: d,
                      onSave: () => i(s.ownerId, s.id),
                      onRemove: (C) => {
                          (m(s.ownerId, s.id, { removeDerived: C }),
                              u(C ? `已删除视频与 ${d} 条关联记忆` : "已删除视频"));
                      },
                  }),
              ],
          })
        : e.jsxs("article", {
              className: "yt-card",
              children: [
                  e.jsx("button", {
                      className: "btn-plain",
                      onClick: a,
                      style: { display: "block", width: "100%" },
                      children: e.jsxs(Ee, {
                          video: s,
                          className: "yt-thumb-wide",
                          children: [
                              e.jsx("span", { className: "yt-dur", children: Me(s.duration) }),
                              (b == null ? void 0 : b.progress) > 0 &&
                                  e.jsx("span", {
                                      className: "yt-seen",
                                      style: {
                                          width: `${Math.min(100, (b.progress / Math.max(1, s.duration)) * 100)}%`,
                                      },
                                  }),
                          ],
                      }),
                  }),
                  e.jsxs("div", {
                      className: "yt-card-foot",
                      children: [
                          e.jsx(ne, { src: Q(n, s.ownerId), name: $(n, s.ownerId), size: 36 }),
                          e.jsxs("button", {
                              className: "yt-card-copy btn-plain",
                              onClick: a,
                              children: [
                                  e.jsx("div", { className: "yt-card-title", children: s.title }),
                                  e.jsxs("div", {
                                      className: "yt-card-meta",
                                      children: [
                                          $(n, s.ownerId),
                                          " · ",
                                          he(s.views),
                                          " 次观看 · ",
                                          ke(s.createdAt),
                                      ],
                                  }),
                              ],
                          }),
                          e.jsx("button", {
                              className: "yt-icon-btn",
                              onClick: () => l(!0),
                              "aria-label": "更多",
                              children: e.jsx(Le, { size: 18 }),
                          }),
                      ],
                  }),
                  e.jsx(ys, {
                      open: x,
                      onClose: () => l(!1),
                      video: s,
                      saved: r,
                      memRefs: d,
                      onSave: () => i(s.ownerId, s.id),
                      onRemove: (C) => {
                          (m(s.ownerId, s.id, { removeDerived: C }),
                              u(C ? `已删除视频与 ${d} 条关联记忆` : "已删除视频"));
                      },
                  }),
              ],
          });
}
function ys({ open: s, onClose: a, video: t, saved: n, memRefs: i, onSave: m, onRemove: u }) {
    const { state: x, tubeUpdateVideo: l } = te(),
        b = ue(),
        [r, d] = o.useState(!1),
        C = Bt(x, "youtube", t.ownerId),
        p = C ? () => Je(x, l, t.ownerId, t, { force: !0 }) : void 0;
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Dt, {
                open: r,
                onClose: () => d(!1),
                label: "封面",
                src: t.thumb || null,
                desc: Pt(t),
                genKey: `tube:${t.id}`,
                onRegen: p,
                onDescChange: (j) => {
                    (l(t.ownerId, t.id, { thumbDesc: j }),
                        C && Je(x, l, t.ownerId, { ...t, thumbDesc: j }, { force: !0 }));
                },
            }),
            e.jsx(_e, {
                open: s,
                onClose: a,
                title: t.title,
                message: i > 0 ? `这期已经生成了 ${i} 条记忆` : void 0,
                actions: [
                    {
                        label: t.thumb ? "封面 · 查看与重新生成" : "封面 · 文字图与生成",
                        onClick: () => d(!0),
                    },
                    { label: n ? "移出稍后观看" : "保存到稍后观看", onClick: m },
                    {
                        label: "分享到聊天",
                        onClick: () => b.share(mt(x, t.ownerId, t), t.ownerId !== "me" ? t.ownerId : null),
                    },
                    ...(i > 0
                        ? [{ label: `删除视频，保留 ${i} 条记忆`, destructive: !0, onClick: () => u(!1) }]
                        : []),
                    {
                        label: i > 0 ? `删除视频和 ${i} 条记忆` : "删除视频",
                        destructive: !0,
                        onClick: () => u(!0),
                    },
                ],
            }),
        ],
    });
}
function je({ title: s, hint: a }) {
    return e.jsxs("div", {
        className: "yt-empty",
        children: [
            e.jsx("div", { className: "yt-empty-title", children: s }),
            a && e.jsx("div", { className: "yt-empty-hint", children: a }),
        ],
    });
}
function Nt({ startId: s = null, onExit: a = null, channel: t = null }) {
    var L;
    const { state: n } = te(),
        i = ue(),
        m = Ae(),
        u = ye(),
        x = !!s,
        [l, b] = o.useState("foryou"),
        r =
            u != null && u.readOnly && (u == null ? void 0 : u.v) !== "me"
                ? []
                : n.youtube.subscriptions || [],
        d = o.useMemo(() => {
            if (t) {
                const w = (de(n, t.ownerId).videos || [])
                    .filter((h) => h.kind === "short")
                    .map((h) => ({ ...h, ownerId: t.ownerId }));
                return t.list.map((h) => w.find((W) => W.id === h)).filter(Boolean);
            }
            const I = Fe(n).filter((w) => w.kind === "short");
            return !x && l === "subs" ? I.filter((w) => r.includes(w.ownerId)) : I;
        }, [n, l, x, r, t]),
        [C, p] = o.useState(() =>
            Math.max(
                0,
                d.findIndex((I) => I.id === s),
            ),
        ),
        [j, f] = o.useState(null),
        A = o.useRef(null),
        c = a || i.onBack;
    (He.useLayoutEffect(() => {
        const I = A.current;
        I && C > 0 && (I.scrollTop = C * I.clientHeight);
    }, []),
        o.useEffect(() => {
            x || (p(0), A.current && (A.current.scrollTop = 0));
        }, [l, x]));
    const z = () => {
            const I = A.current;
            if (!I) return;
            const w = Math.round(I.scrollTop / Math.max(1, I.clientHeight));
            w !== C && p(w);
        },
        P = e.jsx("button", {
            className: `sh-top-btn ${m.busy ? "is-busy" : ""}`,
            onClick: m.busy ? m.stop : () => m.genShortsFeed({ count: 4 }),
            "aria-label": m.busy ? "停止生成" : "刷一批新的",
            children: m.busy ? e.jsx(Re, { size: 18 }) : e.jsx(Pe, { size: 19, strokeWidth: 1.8 }),
        }),
        B = e.jsxs("header", {
            className: "sh-top",
            children: [
                e.jsx("button", {
                    className: "sh-top-btn",
                    onClick: c,
                    "aria-label": x ? "返回" : "退出",
                    children: x
                        ? e.jsx(Ge, { size: 26, strokeWidth: 1.8 })
                        : e.jsx(fe, { size: 22, strokeWidth: 1.8 }),
                }),
                x
                    ? e.jsx("span", {
                          className: "sh-top-title",
                          children: t ? `${$(n, t.ownerId)} · Shorts` : "Shorts",
                      })
                    : e.jsx("nav", {
                          className: "sh-tabs",
                          children: [
                              ["subs", "订阅"],
                              ["foryou", "推荐"],
                          ].map(([I, w]) =>
                              e.jsx(
                                  "button",
                                  {
                                      className: `btn-plain ${l === I ? "on" : ""}`,
                                      onClick: () => b(I),
                                      children: w,
                                  },
                                  I,
                              ),
                          ),
                      }),
                u.readOnly || t ? e.jsx("span", { className: "sh-top-btn" }) : P,
            ],
        });
    if (!d.length)
        return e.jsxs("div", {
            className: "sh-root sh-empty",
            children: [
                B,
                e.jsxs("div", {
                    className: "sh-empty-body",
                    children: [
                        e.jsx(Ye, {}),
                        e.jsx("b", {
                            children: l === "subs" && !x ? "订阅的频道还没发短视频" : "还没有短视频",
                        }),
                        e.jsx("span", { children: "刷一批，或者到底栏中间的 + 里自己发一条" }),
                        !u.readOnly &&
                            e.jsx("button", {
                                className: "btn-plain sh-empty-btn",
                                onClick: m.busy ? m.stop : () => m.genShortsFeed({ count: 4 }),
                                children: m.busy ? "停止" : "刷一批",
                            }),
                    ],
                }),
            ],
        });
    const Y = j && ((L = de(n, j.ownerId).videos) == null ? void 0 : L.find((I) => I.id === j.id));
    return e.jsxs("div", {
        className: "sh-root",
        children: [
            B,
            e.jsx("div", {
                className: "sh-feed",
                ref: A,
                onScroll: z,
                children: d.map((I, w) =>
                    e.jsx(
                        hn,
                        {
                            v: I,
                            active: w === C && !Y,
                            near: Math.abs(w - C) <= 1,
                            onComments: () => f({ ownerId: I.ownerId, id: I.id }),
                        },
                        `${I.ownerId}:${I.id}`,
                    ),
                ),
            }),
            Y && e.jsx(mn, { ownerId: j.ownerId, video: Y, onClose: () => f(null) }),
        ],
    });
}
function hn({ v: s, active: a, near: t, onComments: n }) {
    var K;
    const {
            state: i,
            tubeRateVideo: m,
            tubeMarkWatched: u,
            tubeToggleSubscribe: x,
            tubeToggleWatchLater: l,
            tubeRemoveVideo: b,
        } = te(),
        r = ue(),
        d = ye(),
        C = ve(),
        [p, j] = o.useState(!1),
        f = p ? Zs(i.characters, s.id) : 0,
        [A, c] = o.useState(!1),
        [z, P] = o.useState(0),
        [B, Y] = o.useState([]),
        [L, I] = o.useState(!1),
        w = o.useRef({ at: 0, timer: 0 }),
        h = o.useRef(null),
        W = Qs((t && s.mediaRef) || null),
        N = !!(s.mediaRef && W),
        T = Math.max(1, s.duration || 30),
        U = a && !A;
    (o.useEffect(() => {
        a && (P(0), c(!1), u(s.ownerId, s.id, s.duration));
    }, [a]),
        o.useEffect(() => {
            if (N || !U) return;
            const V = setInterval(() => P((ee) => (ee + 0.25 >= T ? 0 : ee + 0.25)), 250);
            return () => clearInterval(V);
        }, [N, U, T]),
        o.useEffect(() => {
            const V = h.current;
            V && (U ? V.play().catch(() => {}) : V.pause());
        }, [U, N]));
    const O = ((K = i.youtube.likes) == null ? void 0 : K[`${s.ownerId}:${s.id}`]) === "up",
        S = (i.youtube.subscriptions || []).includes(s.ownerId),
        g = (i.youtube.watchLater || []).some((V) => V.videoId === s.id),
        E = s.scenes || [],
        F = [...E].reverse().find((V) => V.at <= z) || E[0] || null,
        ie = Math.min(100, (z / T) * 100),
        oe = $(i, s.ownerId),
        v = (V) => {
            const ee = Date.now(),
                M = V.currentTarget.getBoundingClientRect();
            if (ee - w.current.at < 280) {
                (clearTimeout(w.current.timer), (w.current.at = 0), O || m(s.ownerId, s.id, "up"));
                const se = {
                    id: ee,
                    x: V.clientX - M.left,
                    y: V.clientY - M.top,
                    rot: Math.round(Math.random() * 30 - 15),
                };
                (Y((xe) => [...xe, se]), setTimeout(() => Y((xe) => xe.filter((H) => H.id !== se.id)), 900));
                return;
            }
            ((w.current.at = ee), (w.current.timer = setTimeout(() => c((se) => !se), 280)));
        };
    return e.jsxs("section", {
        className: `sh-slide ${U ? "is-playing" : ""}`,
        children: [
            e.jsxs("div", {
                className: "sh-stage",
                onClick: v,
                children: [
                    N
                        ? e.jsx("video", {
                              ref: h,
                              src: W,
                              className: "sh-media",
                              loop: !0,
                              playsInline: !0,
                              muted: !1,
                          })
                        : e.jsx(Ee, { video: s, className: "sh-bg", showCover: !F }),
                    e.jsx("div", { className: "sh-shade" }),
                    !N &&
                        (F == null ? void 0 : F.shot) &&
                        e.jsx("p", { className: "sh-scene", children: F.shot }, F.at),
                    A &&
                        e.jsx("span", {
                            className: "sh-paused",
                            children: e.jsx(ks, { size: 30, fill: "currentColor", strokeWidth: 0 }),
                        }),
                    B.map((V) =>
                        e.jsx(
                            "span",
                            {
                                className: "sh-heart",
                                style: { left: V.x, top: V.y, "--rot": `${V.rot}deg` },
                                children: e.jsx(Oe, { size: 64, fill: "currentColor", strokeWidth: 0 }),
                            },
                            V.id,
                        ),
                    ),
                ],
            }),
            e.jsxs("aside", {
                className: "sh-rail",
                children: [
                    e.jsxs("div", {
                        className: "sh-rail-av",
                        children: [
                            e.jsx("button", {
                                className: "btn-plain",
                                onClick: () => r.openChannel(s.ownerId),
                                "aria-label": "打开频道",
                                children: e.jsx(ne, { src: Q(i, s.ownerId), name: oe, size: 44 }),
                            }),
                            s.ownerId !== "me" &&
                                !d.readOnly &&
                                e.jsx("button", {
                                    className: `btn-plain sh-follow ${S ? "on" : ""}`,
                                    onClick: () => x(s.ownerId),
                                    "aria-label": S ? "已订阅" : "订阅",
                                    children: S
                                        ? e.jsx(Cs, { size: 11, strokeWidth: 3 })
                                        : e.jsx(Ue, { size: 12, strokeWidth: 3 }),
                                }),
                        ],
                    }),
                    e.jsxs("button", {
                        className: `btn-plain sh-act ${O ? "on" : ""}`,
                        onClick: () => m(s.ownerId, s.id, "up"),
                        children: [
                            e.jsx(Oe, { size: 27, strokeWidth: 1.6, fill: O ? "currentColor" : "none" }),
                            e.jsx("span", { children: he((s.likes || 0) + (O ? 1 : 0)) }),
                        ],
                    }),
                    e.jsxs("button", {
                        className: "btn-plain sh-act",
                        onClick: n,
                        children: [
                            e.jsx(Da, { size: 27, strokeWidth: 1.6 }),
                            e.jsx("span", { children: (s.comments || []).length || "评论" }),
                        ],
                    }),
                    !d.readOnly &&
                        e.jsxs("button", {
                            className: `btn-plain sh-act ${g ? "on" : ""}`,
                            onClick: () => l(s.ownerId, s.id),
                            children: [
                                e.jsx(ws, { size: 26, strokeWidth: 1.6, fill: g ? "currentColor" : "none" }),
                                e.jsx("span", { children: g ? "已收藏" : "收藏" }),
                            ],
                        }),
                    !d.readOnly &&
                        e.jsxs(kt, {
                            ownerId: s.ownerId,
                            video: s,
                            className: "btn-plain sh-act",
                            up: !0,
                            children: [
                                e.jsx(lt, { size: 25, strokeWidth: 1.6 }),
                                e.jsx("span", { children: "分享" }),
                            ],
                        }),
                    !d.readOnly &&
                        e.jsxs("button", {
                            className: "btn-plain sh-act",
                            onClick: () => j(!0),
                            "aria-label": "更多",
                            children: [
                                e.jsx(Le, { size: 25, strokeWidth: 1.8 }),
                                e.jsx("span", { children: "更多" }),
                            ],
                        }),
                    e.jsx("span", {
                        className: "sh-disc",
                        children: e.jsx(ne, { src: Q(i, s.ownerId), name: oe, size: 22 }),
                    }),
                ],
            }),
            e.jsx(ys, {
                open: p,
                onClose: () => j(!1),
                video: s,
                saved: g,
                memRefs: f,
                onSave: () => l(s.ownerId, s.id),
                onRemove: (V) => {
                    (j(!1),
                        b(s.ownerId, s.id, { removeDerived: V }),
                        C(V && f ? `已删除这条 Short 与 ${f} 条关联记忆` : "已删除这条 Short"));
                },
            }),
            e.jsxs("div", {
                className: "sh-copy",
                children: [
                    e.jsxs("button", {
                        className: "btn-plain sh-owner",
                        onClick: () => r.openChannel(s.ownerId),
                        children: [
                            e.jsxs("b", { children: ["@", be(i, s.ownerId)] }),
                            e.jsxs("span", { children: ["· ", ke(s.createdAt)] }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: `sh-title ${L ? "open" : ""}`,
                        onClick: () => I((V) => !V),
                        children: [
                            s.title,
                            s.description && L ? e.jsx("em", { children: s.description }) : null,
                        ],
                    }),
                    s.ownerId !== "me" &&
                        e.jsx($e, {
                            className: "sh-trans",
                            charId: ss(i, s.ownerId),
                            text: [s.title, s.description].filter(Boolean).join(`
`),
                            known: s.titleTr
                                ? [s.titleTr, s.descriptionTr].filter(Boolean).join(`
`)
                                : "",
                            labels: ["翻译", "隐藏翻译"],
                        }),
                    e.jsxs("div", {
                        className: "sh-sound",
                        children: [
                            e.jsx(Pa, { size: 12, strokeWidth: 2 }),
                            e.jsx("span", { children: e.jsxs("i", { children: ["原声 · ", oe] }) }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", { className: "sh-progress", children: e.jsx("i", { style: { width: `${ie}%` } }) }),
        ],
    });
}
function mn({ ownerId: s, video: a, onClose: t }) {
    const n = ye(),
        i = Ae(),
        { state: m, tubeRemoveComment: u, tubeUpdateVideo: x } = te(),
        l = ve(),
        [b, r] = o.useState({}),
        [d, C] = o.useState(null),
        {
            rows: p,
            txt: j,
            replyTo: f,
            setReplyTo: A,
            inputRef: c,
            mention: z,
            send: P,
            beginReply: B,
        } = wt(s, a, "top"),
        Y = (a.comments || []).length,
        L = p.filter((h) => h.depth === 0 || b[h.rootId]),
        I = (h) => (s === "me" ? h.author === "me" : h.author === "char" && h.charId === s && !ge(h.acct)),
        w = (h) =>
            x(s, a.id, (W) => ({
                comments: (W.comments || []).map((N) =>
                    N.id === h.id
                        ? {
                              ...N,
                              likedByMe: !N.likedByMe,
                              likes: Math.max(0, (N.likes || 0) + (N.likedByMe ? -1 : 1)),
                          }
                        : N,
                ),
            }));
    return e.jsxs("div", {
        className: "sh-cmt-layer",
        children: [
            e.jsx("button", { className: "btn-plain sh-cmt-scrim", onClick: t, "aria-label": "关闭评论" }),
            e.jsxs("section", {
                className: "sh-cmt",
                role: "dialog",
                "aria-label": "评论",
                children: [
                    e.jsxs("header", {
                        className: "sh-cmt-h",
                        children: [
                            n.readOnly
                                ? e.jsx("span", {})
                                : e.jsx("button", {
                                      className: `btn-plain sh-cmt-gen ${i.busy ? "is-busy" : ""}`,
                                      onClick: i.busy ? i.stop : () => i.genReaction(s, a),
                                      "aria-label": i.busy ? "停止生成" : "刷新评论",
                                      title: i.busy ? "停止生成" : "刷新评论",
                                      children: e.jsx(Pe, { size: 17, strokeWidth: 1.7 }),
                                  }),
                            e.jsx("b", { children: Y ? `${Y} 条评论` : "评论" }),
                            e.jsx("button", {
                                className: "btn-plain sh-cmt-x",
                                onClick: t,
                                "aria-label": "关闭",
                                children: e.jsx(fe, { size: 18, strokeWidth: 1.8 }),
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        className: "sh-cmt-list",
                        children: p.length
                            ? L.map((h) => {
                                  var W;
                                  return e.jsxs(
                                      He.Fragment,
                                      {
                                          children: [
                                              e.jsxs("div", {
                                                  className: `sh-c ${h.depth === 1 ? "is-reply" : ""}`,
                                                  children: [
                                                      e.jsx(ne, {
                                                          src: es(m, h),
                                                          name: Ie(m, h).replace(/^@/, ""),
                                                          size: h.depth === 1 ? 24 : 32,
                                                          className: es(m, h)
                                                              ? ""
                                                              : `tone${[...String(h.name || "")].reduce((N, T) => N + T.charCodeAt(0), 0) % 3}`,
                                                      }),
                                                      e.jsxs("div", {
                                                          className: "sh-c-body",
                                                          children: [
                                                              e.jsxs("div", {
                                                                  className: "sh-c-name",
                                                                  children: [
                                                                      e.jsx("span", { children: Ie(m, h) }),
                                                                      I(h) &&
                                                                          e.jsx("span", {
                                                                              className: "yt-c-owner",
                                                                              children: "Creator",
                                                                          }),
                                                                      !n.readOnly &&
                                                                          e.jsx(ht, { onDelete: () => C(h) }),
                                                                  ],
                                                              }),
                                                              e.jsxs("div", {
                                                                  className: "sh-c-text",
                                                                  children: [
                                                                      h.replyToName &&
                                                                          h.depth === 1 &&
                                                                          e.jsxs("span", {
                                                                              className: "sh-c-at",
                                                                              children: [$s(m, p, h), " "],
                                                                          }),
                                                                      e.jsx(rs, { text: h.text }),
                                                                  ],
                                                              }),
                                                              h.author !== "me" &&
                                                                  e.jsx($e, {
                                                                      className: "sh-trans dim",
                                                                      charId:
                                                                          h.author === "char"
                                                                              ? h.charId
                                                                              : null,
                                                                      text: h.text,
                                                                      known: h.tr,
                                                                      labels: ["翻译", "隐藏翻译"],
                                                                  }),
                                                              e.jsxs("div", {
                                                                  className: "sh-c-meta",
                                                                  children: [
                                                                      e.jsx("span", {
                                                                          children: ke(h.createdAt),
                                                                      }),
                                                                      !n.readOnly &&
                                                                          e.jsx("button", {
                                                                              className: "btn-plain",
                                                                              onClick: () => B(h),
                                                                              children: "回复",
                                                                          }),
                                                                      (W = h.likedBy) != null && W.length
                                                                          ? e.jsxs("span", {
                                                                                className: "sh-c-liked",
                                                                                children: [
                                                                                    h.likedBy
                                                                                        .map((N) => $(m, N))
                                                                                        .join("、"),
                                                                                    " 赞了",
                                                                                ],
                                                                            })
                                                                          : null,
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                      e.jsxs("button", {
                                                          className: `btn-plain sh-c-like ${h.likedByMe ? "on" : ""}`,
                                                          onClick: () => w(h),
                                                          disabled: n.readOnly,
                                                          "aria-label": "赞",
                                                          children: [
                                                              e.jsx(Oe, {
                                                                  size: 15,
                                                                  strokeWidth: 1.7,
                                                                  fill: h.likedByMe ? "currentColor" : "none",
                                                              }),
                                                              e.jsx("span", { children: h.likes || "" }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              h.depth === 0 &&
                                                  h.replyCount > 0 &&
                                                  e.jsxs("button", {
                                                      className: "btn-plain sh-c-more",
                                                      onClick: () => r((N) => ({ ...N, [h.id]: !N[h.id] })),
                                                      children: [
                                                          e.jsx("i", {}),
                                                          b[h.id] ? "收起" : `展开 ${h.replyCount} 条回复`,
                                                          e.jsx(qe, {
                                                              size: 13,
                                                              strokeWidth: 1.8,
                                                              className: b[h.id] ? "up" : "",
                                                          }),
                                                      ],
                                                  }),
                                          ],
                                      },
                                      h.id,
                                  );
                              })
                            : e.jsxs("div", {
                                  className: "sh-cmt-empty",
                                  children: [
                                      e.jsx("b", { children: "还没有评论" }),
                                      e.jsx("span", { children: "写下第一条评论" }),
                                  ],
                              }),
                    }),
                    !n.readOnly &&
                        e.jsxs("footer", {
                            className: "sh-cmt-f",
                            children: [
                                f &&
                                    e.jsxs("div", {
                                        className: "sh-cmt-replying",
                                        children: [
                                            e.jsxs("span", { children: ["回复 @", f.name] }),
                                            e.jsx("button", {
                                                className: "btn-plain",
                                                onClick: () => A(null),
                                                "aria-label": "取消回复",
                                                children: e.jsx(fe, { size: 13 }),
                                            }),
                                        ],
                                    }),
                                z.panel,
                                e.jsxs("div", {
                                    className: "sh-cmt-input",
                                    children: [
                                        e.jsx("input", {
                                            ref: c,
                                            value: j,
                                            ...z.bind,
                                            onKeyDown: z.keyDown((h) => {
                                                h.key === "Enter" && P();
                                            }),
                                            placeholder: f ? `回复 ${f.name}…` : "说点什么…",
                                        }),
                                        e.jsx("button", {
                                            className: "btn-plain",
                                            onClick: z.trigger,
                                            "aria-label": "提到别人",
                                            children: e.jsx(Ss, { size: 18, strokeWidth: 1.7 }),
                                        }),
                                        e.jsx("button", {
                                            className: `btn-plain sh-send ${j.trim() ? "on" : ""}`,
                                            onClick: P,
                                            disabled: !j.trim(),
                                            "aria-label": "发送",
                                            children: e.jsx(ns, { size: 16, strokeWidth: 2 }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            e.jsx(vs, {
                open: !!d,
                onClose: () => C(null),
                title: "删除这条评论",
                message: d ? `${d.author === "me" ? "你" : d.name}：${String(d.text).slice(0, 40)}` : void 0,
                confirm: {
                    label: "删除",
                    destructive: !0,
                    onClick: () => {
                        (u(s, a.id, d.id),
                            l(d.replyCount > 0 ? "已删除；它下面的回复升成了独立评论" : "已删除"));
                    },
                },
            }),
        ],
    });
}
function xn() {
    const s = ye();
    return s.readOnly && s.v !== "me" ? e.jsx(ft, { initialChip: "subs" }) : e.jsx(pn, {});
}
function pn() {
    const { state: s } = te(),
        a = ue(),
        t = s.youtube.subscriptions || [],
        [n, i] = o.useState(null),
        m = o.useMemo(() => Fe(s).filter((u) => (n ? u.ownerId === n : t.includes(u.ownerId))), [s, t, n]);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(we, {
                onBack: !1,
                title: e.jsx("div", { className: "yt-topbar-title lead", children: "订阅内容" }),
                right: e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("button", {
                            className: "yt-icon-btn",
                            onClick: () => a.push({ name: "search" }),
                            "aria-label": "搜索",
                            children: e.jsx(is, { size: 21 }),
                        }),
                        e.jsx("button", {
                            className: "yt-icon-btn",
                            onClick: a.onBack,
                            "aria-label": "退出",
                            children: e.jsx(fe, { size: 21 }),
                        }),
                    ],
                }),
            }),
            e.jsxs("div", {
                className: "yt-scroll",
                children: [
                    e.jsxs("div", {
                        className: `yt-sub-row${n ? " picking" : ""}`,
                        children: [
                            e.jsxs("button", {
                                className: `yt-sub-chip all ${n ? "" : "cur"}`,
                                onClick: () => i(null),
                                children: [
                                    e.jsx("i", { className: "yt-sub-all", children: "全部" }),
                                    e.jsx("span", { children: "全部" }),
                                ],
                            }),
                            s.characters.map((u) => {
                                const x = t.includes(u.id);
                                return e.jsxs(
                                    "button",
                                    {
                                        className: `yt-sub-chip ${x ? "on" : ""} ${n === u.id ? "cur" : ""}`,
                                        onClick: () => i(n === u.id ? null : u.id),
                                        children: [
                                            e.jsx(ne, { src: Q(s, u.id), name: $(s, u.id), size: 52 }),
                                            e.jsx("span", { children: $(s, u.id) }),
                                        ],
                                    },
                                    u.id,
                                );
                            }),
                        ],
                    }),
                    n &&
                        e.jsxs("div", {
                            className: "yt-sub-head",
                            children: [
                                e.jsx("b", { children: $(s, n) }),
                                e.jsxs("small", {
                                    children: [
                                        t.includes(n) ? "已订阅" : "未订阅",
                                        " · ",
                                        m.length,
                                        " 个内容",
                                    ],
                                }),
                                e.jsx("button", {
                                    className: "btn-plain",
                                    onClick: () => a.openChannel(n),
                                    children: "查看频道",
                                }),
                            ],
                        }),
                    m.length === 0
                        ? e.jsx(je, {
                              title: n ? "该频道还没有更新" : "订阅的频道还没有更新",
                              hint: n
                                  ? "可在频道主页生成新内容。"
                                  : "选择上方的头像查看对应频道，或进入频道订阅并生成内容。",
                          })
                        : m.map((u) =>
                              e.jsx(Be, { video: u, onOpen: () => a.openWatch(u.ownerId, u.id) }, u.id),
                          ),
                ],
            }),
        ],
    });
}
function bn({ ownerId: s, onPick: a, current: t }) {
    const { state: n, socialRemoveAlt: i, socialPatchAlt: m } = te(),
        { v: u, readOnly: x } = ye(),
        l = ue(),
        b = ve(),
        [r, d] = o.useState(null),
        C = js(n, "youtube", s, { all: x && s === u, nameOf: (f) => $(n, f) }),
        p = t || s,
        j = (f) => {
            const A = tt(n, "youtube", s).find((c) => c.id === ge(f));
            return !!(A != null && A.fromGen) && A.linked === !0;
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(we, { title: "账号" }),
            e.jsxs("div", {
                className: "yt-scroll insta-accpage",
                children: [
                    e.jsxs("p", {
                        className: "insta-accpage-hint",
                        children: [
                            "同一人在 Tube 的全部频道。更换人设请前往",
                            e.jsx("b", { children: "设置 → 人设" }),
                            "。",
                        ],
                    }),
                    e.jsx("div", {
                        className: "insta-acclist",
                        children: C.map((f) =>
                            e.jsxs(
                                "div",
                                {
                                    className: `insta-accrow ${f.ref === p ? "on" : ""}`,
                                    children: [
                                        e.jsxs("button", {
                                            className: "insta-accrow-main btn-plain",
                                            onClick: () => {
                                                (a == null || a(f.ref), l.pop());
                                            },
                                            children: [
                                                e.jsx(ne, { src: f.avatar, name: f.nickname, size: 44 }),
                                                e.jsxs("span", {
                                                    className: "insta-accrow-text",
                                                    children: [
                                                        e.jsx("b", { children: f.nickname || f.handle }),
                                                        e.jsxs("small", {
                                                            children: [
                                                                "@",
                                                                f.handle,
                                                                f.main ? " · 主频道" : "",
                                                                f.pending
                                                                    ? e.jsx("em", {
                                                                          className: "insta-accrow-pending",
                                                                          children: "未接入线上",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                        e.jsxs("small", {
                                                            children: [
                                                                Ft(
                                                                    We(n, "youtube", f.ref).subscribers || 0,
                                                                    "订阅",
                                                                ),
                                                                " · ",
                                                                f.count,
                                                                " 个内容",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                f.ref === p &&
                                                    e.jsx(Cs, {
                                                        size: 18,
                                                        strokeWidth: 2.6,
                                                        className: "insta-accrow-tick",
                                                    }),
                                            ],
                                        }),
                                        !f.main &&
                                            !x &&
                                            e.jsx("button", {
                                                className: "insta-accrow-del btn-plain",
                                                onClick: () => d(f.ref),
                                                "aria-label": "删除这个号",
                                                children: e.jsx(ls, { size: 16, strokeWidth: 2.2 }),
                                            }),
                                        !x &&
                                            !f.main &&
                                            s !== "me" &&
                                            j(f.ref) &&
                                            e.jsx("button", {
                                                className: "insta-accrow-unlink btn-plain",
                                                onClick: () => {
                                                    (m("youtube", s, ge(f.ref), { linked: !1 }),
                                                        f.ref === p && (a == null || a(s)),
                                                        b("已解除绑定"));
                                                },
                                                children: "解除绑定",
                                            }),
                                        !x &&
                                            !f.main &&
                                            s === "me" &&
                                            e.jsx(At, { platform: "youtube", altRef: f.ref }),
                                    ],
                                },
                                f.ref,
                            ),
                        ),
                    }),
                    !x &&
                        e.jsxs("button", {
                            className: "insta-accnew",
                            onClick: () => l.openNewAlt(s, a),
                            children: [
                                e.jsx("span", {
                                    className: "insta-accnew-icon",
                                    children: e.jsx(Ue, { size: 18, strokeWidth: 2.6 }),
                                }),
                                e.jsxs("span", {
                                    children: [
                                        e.jsx("b", { children: "新建小号" }),
                                        e.jsx("small", { children: "同一人在 Tube 的另一个频道" }),
                                    ],
                                }),
                                e.jsx(rt, { size: 17, strokeWidth: 2.4 }),
                            ],
                        }),
                ],
            }),
            r &&
                e.jsx("div", {
                    className: "insta-confirm",
                    onClick: () => d(null),
                    children: e.jsxs("div", {
                        className: "insta-confirm-card",
                        onClick: (f) => f.stopPropagation(),
                        children: [
                            e.jsx("b", { children: "删掉这个小号？" }),
                            e.jsx("p", { children: "该频道发布的内容将一并删除，主频道不受影响。" }),
                            e.jsxs("div", {
                                className: "insta-confirm-btns",
                                children: [
                                    e.jsx("button", {
                                        className: "th-btn",
                                        onClick: () => d(null),
                                        children: "取消",
                                    }),
                                    e.jsx("button", {
                                        className: "th-btn danger",
                                        onClick: () => {
                                            (i("youtube", s, ge(r)),
                                                r === p && (a == null || a(s)),
                                                d(null),
                                                b("删掉了"));
                                        },
                                        children: "删掉",
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
        ],
    });
}
function jn({ ownerId: s, onPick: a }) {
    const { state: t, socialAddAlt: n } = te(),
        i = ue(),
        m = ve(),
        [u, x] = o.useState(""),
        [l, b] = o.useState(""),
        [r, d] = o.useState(""),
        [C, p] = o.useState(""),
        j = u ? Vt(t, "youtube", u) : { ok: !1, err: "" },
        f = () => {
            if (!j.ok) {
                m(j.err || "先起个频道名", "error");
                return;
            }
            const A = nt("youtube", { handle: j.handle, nickname: l, bio: r, why: C });
            (n("youtube", s, A), a == null || a(`alt:${A.id}`), i.pop(), i.pop(), m("小号开好了"));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(we, { title: "新建小号" }),
            e.jsxs("div", {
                className: "yt-scroll insta-form",
                children: [
                    e.jsxs("div", {
                        className: "insta-form-group",
                        children: [
                            e.jsxs("label", {
                                className: "insta-form-row",
                                children: [
                                    e.jsx("span", { children: "频道 ID" }),
                                    e.jsx("input", {
                                        value: u,
                                        onChange: (A) => x(A.target.value),
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
                                        value: l,
                                        onChange: (A) => b(A.target.value),
                                        placeholder: "不填就用频道 ID",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx("p", {
                        className: `insta-form-note ${u && !j.ok ? "bad" : ""}`,
                        children: u
                            ? j.ok
                                ? `@${j.handle} 可以用`
                                : j.err
                            : "3–30 位，只能用小写字母、数字、下划线和点",
                    }),
                    e.jsxs("div", {
                        className: "insta-form-group",
                        children: [
                            e.jsxs("label", {
                                className: "insta-form-row col",
                                children: [
                                    e.jsx("span", { children: "频道简介" }),
                                    e.jsx("textarea", {
                                        value: r,
                                        onChange: (A) => d(A.target.value),
                                        placeholder: "进主页才看得到，可以空着",
                                        rows: 2,
                                    }),
                                ],
                            }),
                            e.jsxs("label", {
                                className: "insta-form-row col",
                                children: [
                                    e.jsx("span", { children: "这个号是干嘛的" }),
                                    e.jsx("textarea", {
                                        value: C,
                                        onChange: (A) => p(A.target.value),
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
                        onClick: f,
                        disabled: !j.ok,
                        children: "开号",
                    }),
                ],
            }),
        ],
    });
}
function yn() {
    const { v: s, readOnly: a } = ye(),
        [t, n] = o.useState(s);
    o.useEffect(() => {
        n(s);
    }, [s]);
    const { state: i, socialSetInbox: m, dmAppend: u } = te(),
        x = ue(),
        l = ve(),
        b = Ht(),
        [r, d] = o.useState("chans"),
        C = a && s !== "me",
        p = C ? (i.characters || []).find((h) => h.id === s) : null,
        j = p ? gt(p) : [],
        f = C ? j : i.youtube.history || [],
        A = C ? [] : i.youtube.watchLater || [],
        c = C ? (i.youtube.lives || []).filter((h) => h.charId === s) : i.youtube.lives || [],
        z = o.useMemo(() => js(i, "youtube", s, { all: a, nameOf: (h) => $(i, h) }), [i, s, a]);
    o.useEffect(() => {
        z.some((h) => h.ref === t) || n(s);
    }, [z, t, s]);
    const P = de(i, t),
        B = it(i, "tube", t),
        Y = o.useMemo(() => {
            const h =
                    s !== "me"
                        ? (() => {
                              var U, D;
                              const N =
                                  ((D = (U = i.dm) == null ? void 0 : U.tube) == null ? void 0 : D[s]) || [];
                              if (!N.length) return [];
                              const T = N[N.length - 1];
                              return [
                                  {
                                      id: `char:${s}`,
                                      charId: s,
                                      name: $(i, "me"),
                                      avatar: Q(i, "me"),
                                      preview: T == null ? void 0 : T.content,
                                      at: T == null ? void 0 : T.createdAt,
                                      unread: 0,
                                  },
                              ];
                          })()
                        : (i.characters || [])
                              .map((N) => {
                                  var T, U;
                                  return {
                                      c: N,
                                      msgs:
                                          ((U = (T = i.dm) == null ? void 0 : T.tube) == null
                                              ? void 0
                                              : U[N.id]) || [],
                                  };
                              })
                              .filter((N) => N.msgs.length)
                              .map((N) => {
                                  const T = N.msgs[N.msgs.length - 1];
                                  return {
                                      id: `char:${N.c.id}`,
                                      charId: N.c.id,
                                      name: $(i, N.c.id),
                                      avatar: Q(i, N.c.id),
                                      preview: T == null ? void 0 : T.content,
                                      at: T == null ? void 0 : T.createdAt,
                                      unread: 0,
                                  };
                              }),
                W = (B.strangers || []).map((N) => {
                    const T = N.msgs[N.msgs.length - 1];
                    return {
                        id: N.id,
                        stranger: N,
                        name: N.name,
                        avatar: null,
                        preview: T == null ? void 0 : T.text,
                        at: T == null ? void 0 : T.at,
                        unread: N.unread,
                    };
                });
            return [...h, ...W].sort((N, T) => (T.at || 0) - (N.at || 0));
        }, [s, i.characters, i.dm, i.youtube, B.strangers]),
        L = o.useMemo(
            () =>
                s !== "me"
                    ? []
                    : (i.characters || []).map((h) => {
                          var N, T, U;
                          const W =
                              ((T = (N = i.dm) == null ? void 0 : N.tube) == null ? void 0 : T[h.id]) || [];
                          return {
                              id: h.id,
                              name: $(i, h.id),
                              recent: (U = W[W.length - 1]) == null ? void 0 : U.content,
                          };
                      }),
            [s, i.characters, i.dm, i.youtube],
        ),
        I = Y.reduce((h, W) => h + (W.unread || 0), 0),
        w = async () => {
            const h = De.usableLane(i.api.youtube, i.api.chat);
            if (!(h != null && h.baseUrl)) {
                l("先在 API 设置里配好聊天或 Tube 通道", "error");
                return;
            }
            const W = js(i, "youtube", s, { all: !0, nameOf: (S) => $(i, S) }).find((S) => S.ref === t) || {
                    handle: be(i, t),
                    main: !0,
                },
                N = de(i, t),
                T = (N.videos || []).slice(0, 10),
                U = (i.characters || [])
                    .flatMap((S) => Ca(i, S) || [])
                    .sort((S, g) => (g.at || 0) - (S.at || 0))
                    .slice(0, 20)
                    .reverse()
                    .map(
                        (S) =>
                            `${Ds(S.at)}${S.source ? `[${S.source}] ` : ""}${String(S.line).slice(0, 140)}`,
                    ),
                D = await b.run(async (S) => {
                    const g = await De.youtube(
                            h,
                            Oa({
                                platform: "tube",
                                account: { ...W, name: $(i, t), bio: N.bio || N.about, why: N.why },
                                posts: T.map((F) => `${Ds(F.createdAt || F.at)}${F.title || "[视频]"}`),
                                stream: U,
                                followers: N.subscribers ?? 0,
                                nowText: wa(),
                                existing: B.strangers,
                                chars: L,
                            }),
                            { fallback: i.api.chat, signal: S, max_tokens: 3e3 },
                        ),
                        E = Ia(Ce(g.content), { postIds: T.map((F) => F.id), charIds: L.map((F) => F.id) });
                    if (!E) throw new Error("这一次没解析出可用的内容，作废");
                    return E;
                });
            if ((D != null && D.aborted) || (D != null && D.skipped)) return;
            if (D != null && D.error) {
                l(D.error.message, "error");
                return;
            }
            m("tube", t, Ea(B, D.value));
            for (const S of D.value.known || [])
                for (const g of S.msgs)
                    u("tube", S.charId, { role: "assistant", content: g.text, createdAt: g.at });
            const O = (D.value.known || []).reduce((S, g) => S + g.msgs.length, 0);
            (d("dm"), l(`陌生人 ${D.value.strangers.length} 条${O ? ` · 认识的人 ${O} 条` : ""}`));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(we, {
                onBack: !1,
                title: e.jsx("div", { className: "yt-topbar-title lead", children: "我的" }),
                right: e.jsx("button", {
                    className: "yt-icon-btn",
                    onClick: x.onBack,
                    "aria-label": "退出",
                    children: e.jsx(fe, { size: 21 }),
                }),
            }),
            e.jsxs("div", {
                className: "yt-scroll",
                children: [
                    e.jsxs("div", {
                        className: "yt-me-head",
                        children: [
                            e.jsx("button", {
                                className: "yt-me-avatar btn-plain",
                                onClick: () => x.openChannel(t),
                                "aria-label": "查看我的频道",
                                children: e.jsx(ne, { src: Q(i, t), name: $(i, t), size: 72 }),
                            }),
                            e.jsxs("div", {
                                className: "yt-me-identity",
                                children: [
                                    e.jsxs("button", {
                                        className: "yt-me-name btn-plain",
                                        onClick: z.length > 1 || !a ? () => x.openAccounts(s, n, t) : void 0,
                                        "aria-label": z.length > 1 || !a ? "切换账号" : void 0,
                                        children: [
                                            e.jsx("span", { children: $(i, t) }),
                                            (z.length > 1 || !a) && e.jsx(qe, { size: 18, strokeWidth: 2.4 }),
                                        ],
                                    }),
                                    e.jsxs("button", {
                                        className: "yt-me-handle btn-plain",
                                        onClick: () => x.openChannel(t),
                                        children: ["@", be(i, t), " · 查看频道 ", e.jsx(rt, { size: 14 })],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    P.why
                        ? e.jsxs("div", {
                              className: "yt-accwhy",
                              children: [e.jsx("b", { children: "这个号是干嘛的：" }), P.why],
                          })
                        : null,
                    e.jsxs("div", {
                        className: "yt-me-links",
                        children: [
                            e.jsx(xs, {
                                icon: e.jsx(Fa, { size: 20 }),
                                label: "历史记录",
                                value: f.length,
                                onClick: () => x.push({ name: "history" }),
                            }),
                            e.jsx(xs, {
                                icon: e.jsx(ws, { size: 20 }),
                                label: "稍后观看",
                                value: A.length,
                                onClick: () => x.push({ name: "later" }),
                            }),
                            e.jsx(xs, {
                                icon: e.jsx(Ze, { size: 20 }),
                                label: "直播回顾",
                                value: c.length,
                                onClick: () => x.push({ name: "lives" }),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "yt-secttabs",
                        children: [
                            e.jsx("button", {
                                className: r === "chans" ? "on" : "",
                                onClick: () => d("chans"),
                                children: "订阅的频道",
                            }),
                            e.jsxs("button", {
                                className: r === "dm" ? "on" : "",
                                onClick: () => d("dm"),
                                children: ["私信", I ? e.jsx("i", { children: I }) : null],
                            }),
                            r === "dm" &&
                                e.jsx("button", {
                                    className: "yt-sectrefresh",
                                    onClick: w,
                                    disabled: b.busy,
                                    "aria-label": "刷新私信",
                                    children: e.jsx(Pe, { size: 16, className: b.busy ? "yt-spin" : "" }),
                                }),
                        ],
                    }),
                    r === "dm"
                        ? Y.length === 0
                            ? e.jsx(je, {
                                  title: "还没有私信",
                                  hint: a
                                      ? "他这个号上还没人来过 —— 点右上角刷新，看看这段时间谁找过他"
                                      : "认识的人可以从他频道页发消息；看了你内容的陌生人要刷新才会来",
                              })
                            : e.jsx("div", {
                                  className: "yt-channel-list",
                                  children: Y.map((h) =>
                                      e.jsxs(
                                          "button",
                                          {
                                              className: "yt-channel-row btn-plain",
                                              onClick: () =>
                                                  h.charId
                                                      ? x.openDm(h.charId)
                                                      : x.openStranger(t, h.stranger.id),
                                              children: [
                                                  e.jsx(ne, { src: h.avatar, name: h.name, size: 44 }),
                                                  e.jsxs("div", {
                                                      className: "yt-channel-copy",
                                                      children: [
                                                          e.jsxs("div", {
                                                              className: "yt-channel-name",
                                                              children: [
                                                                  h.name,
                                                                  h.charId
                                                                      ? e.jsx("span", {
                                                                            className: "yt-dm-known",
                                                                            children: "认识",
                                                                        })
                                                                      : null,
                                                                  e.jsx("span", {
                                                                      className: "yt-dm-time",
                                                                      children: ke(h.at),
                                                                  }),
                                                              ],
                                                          }),
                                                          e.jsx("div", {
                                                              className: "yt-channel-meta",
                                                              children: String(h.preview || "").slice(0, 60),
                                                          }),
                                                      ],
                                                  }),
                                                  h.unread
                                                      ? e.jsx("em", {
                                                            className: "yt-dm-unread",
                                                            children: h.unread,
                                                        })
                                                      : null,
                                              ],
                                          },
                                          h.id,
                                      ),
                                  ),
                              })
                        : e.jsxs("div", {
                              className: "yt-channel-list",
                              children: [
                                  (s === "me" ? i.characters.map((h) => h.id) : ["me"]).map((h) => {
                                      const W = de(i, h);
                                      return e.jsxs(
                                          "button",
                                          {
                                              className: "yt-channel-row btn-plain",
                                              onClick: () => x.openChannel(h),
                                              children: [
                                                  e.jsx(ne, { src: Q(i, h), name: $(i, h), size: 44 }),
                                                  e.jsxs("div", {
                                                      className: "yt-channel-copy",
                                                      children: [
                                                          e.jsx("div", {
                                                              className: "yt-channel-name",
                                                              children: $(i, h),
                                                          }),
                                                          e.jsxs("div", {
                                                              className: "yt-channel-meta",
                                                              children: [
                                                                  "@",
                                                                  be(i, h),
                                                                  " · ",
                                                                  W.subscribers == null
                                                                      ? "资料未生成"
                                                                      : `${he(W.subscribers)} 位订阅者`,
                                                                  " · ",
                                                                  (W.videos || []).length,
                                                                  " 个内容",
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                                  s === "me" &&
                                                      (i.youtube.subscriptions || []).includes(h) &&
                                                      e.jsx(Cs, { size: 17, className: "yt-channel-check" }),
                                              ],
                                          },
                                          h,
                                      );
                                  }),
                                  s === "me" &&
                                      i.characters.length === 0 &&
                                      e.jsx(je, { title: "还没有角色", hint: "先去联系人里加一个" }),
                                  s !== "me" &&
                                      e.jsx("div", {
                                          className: "yt-note-inline",
                                          children:
                                              "他这个号上只订阅了你。别的角色是**你**认识的人 —— 这个 app 里没有任何数据说他也认识他们，所以不该摆在他的订阅里。",
                                      }),
                              ],
                          }),
                ],
            }),
        ],
    });
}
function fn({ accountRef: s, convId: a, onClose: t }) {
    const { state: n, socialSetInbox: i } = te(),
        { readOnly: m } = ye(),
        u = it(n, "tube", s),
        x = (u.strangers || []).find((l) => l.id === a);
    return (
        o.useEffect(() => {
            !x ||
                !x.unread ||
                i("tube", s, {
                    ...u,
                    strangers: u.strangers.map((l) => (l.id === a ? { ...l, unread: 0 } : l)),
                });
        }, [a]),
        x
            ? e.jsxs(e.Fragment, {
                  children: [
                      e.jsx(we, { title: x.name, onBack: t }),
                      e.jsxs("div", {
                          className: "yt-scroll",
                          children: [
                              e.jsxs("div", {
                                  className: "yt-stranger-head",
                                  children: [
                                      e.jsx(ne, { src: null, name: x.name, size: 64 }),
                                      e.jsx("b", { children: x.name }),
                                      e.jsxs("span", { children: ["@", x.handle] }),
                                      x.relation ? e.jsx("em", { children: x.relation }) : null,
                                  ],
                              }),
                              e.jsx("div", {
                                  className: "yt-stranger-thread",
                                  children: x.msgs.map((l, b) => {
                                      const r = x.msgs[b - 1],
                                          d = !r || l.at - r.at > 36e5;
                                      return e.jsxs(
                                          He.Fragment,
                                          {
                                              children: [
                                                  d
                                                      ? e.jsx("div", {
                                                            className: "yt-stranger-when",
                                                            children: ke(l.at),
                                                        })
                                                      : null,
                                                  e.jsxs("div", {
                                                      className: `yt-stranger-msg ${l.dir === "out" ? "out" : ""}`,
                                                      children: [
                                                          e.jsx("span", {
                                                              className: "selectable",
                                                              children: l.text,
                                                          }),
                                                          e.jsx($e, {
                                                              className: "dm-trans",
                                                              text: l.text,
                                                              open: !0,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          },
                                          l.id,
                                      );
                                  }),
                              }),
                              e.jsx("div", {
                                  className: "yt-stranger-note",
                                  children: m ? "他这边收到的记录，只读。" : "陌生人发来的记录，只读。",
                              }),
                          ],
                      }),
                  ],
              })
            : e.jsxs(e.Fragment, {
                  children: [
                      e.jsx(we, { title: "私信", onBack: t }),
                      e.jsx("div", { className: "yt-scroll", children: e.jsx(je, { title: "这条不在了" }) }),
                  ],
              })
    );
}
function xs({ icon: s, label: a, value: t, onClick: n }) {
    return e.jsxs("button", {
        className: "yt-me-link btn-plain",
        onClick: n,
        children: [s, e.jsx("span", { children: a }), e.jsx("b", { children: t })],
    });
}
function gt(s) {
    return (et(s).feeds.tube || [])
        .filter((a) => Number(a.progress) > 0)
        .slice()
        .sort((a, t) => (t.at || 0) - (a.at || 0));
}
function ps({ kind: s }) {
    const { state: a, tubePatch: t, tubeRemoveLive: n } = te(),
        i = ue(),
        m = ve(),
        { v: u, readOnly: x } = ye(),
        [l, b] = o.useState(null),
        [r, d] = o.useState(null);
    if (x && u !== "me") {
        const c = (a.characters || []).find((L) => L.id === u),
            z = c ? $(a, u) : "他",
            P = s === "history" ? "历史记录" : s === "later" ? "稍后观看" : "直播回顾",
            B = s === "history" && c ? gt(c) : [],
            Y = s === "lives" ? (a.youtube.lives || []).filter((L) => L.charId === u) : [];
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(we, { title: P }),
                e.jsx("div", {
                    className: "yt-scroll",
                    children:
                        s === "lives"
                            ? Y.length === 0
                                ? e.jsx(je, { title: "他还没有直播存档" })
                                : Y.map((L) =>
                                      e.jsx(
                                          "div",
                                          {
                                              className: "yt-live-archive",
                                              children: e.jsxs("button", {
                                                  className: "yt-live-archive-main btn-plain",
                                                  onClick: () =>
                                                      i.push({
                                                          name: "live",
                                                          charId: L.charId,
                                                          archiveId: L.id,
                                                      }),
                                                  children: [
                                                      e.jsx("div", {
                                                          className: "yt-live-archive-title",
                                                          children: L.title,
                                                      }),
                                                      e.jsxs("div", {
                                                          className: "yt-live-archive-meta",
                                                          children: [
                                                              L.category,
                                                              " · ",
                                                              ke(L.startedAt),
                                                              " · 峰值 ",
                                                              he(L.peakViewers || L.viewers),
                                                              " 人",
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          },
                                          L.id,
                                      ),
                                  )
                            : B.length === 0
                              ? e.jsx(je, {
                                    title: s === "history" ? "他的历史记录是空的" : "他没存稍后观看",
                                    hint:
                                        s === "history"
                                            ? "先在首页「刷新他的首页」，他点开看过的会出现在这里"
                                            : void 0,
                                })
                              : B.map((L) =>
                                    e.jsx(
                                        vt,
                                        {
                                            video: { ...L, createdAt: L.at },
                                            hisName: z,
                                            hisAvatar: Q(a, u),
                                            open: r === L.id,
                                            onToggle: () => d(r === L.id ? null : L.id),
                                        },
                                        L.id,
                                    ),
                                ),
                }),
            ],
        });
    }
    const p = (c, z) => {
            const B = (de(a, c).videos || []).find((Y) => Y.id === z);
            return B ? { ...B, ownerId: c } : null;
        },
        j =
            s === "history"
                ? (a.youtube.history || []).map((c) => p(c.charId, c.videoId)).filter(Boolean)
                : s === "later"
                  ? (a.youtube.watchLater || []).map((c) => p(c.charId, c.videoId)).filter(Boolean)
                  : [],
        f = s === "history" ? "历史记录" : s === "later" ? "稍后观看" : "直播回顾",
        A = l ? _t(a.characters, l.id) : 0;
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(we, {
                title: f,
                right:
                    s === "history" && j.length > 0
                        ? e.jsx("button", {
                              className: "yt-text-btn",
                              onClick: () => {
                                  (t({ history: [] }), m("历史记录已清空"));
                              },
                              children: "清空",
                          })
                        : null,
            }),
            e.jsx("div", {
                className: "yt-scroll",
                children:
                    s === "lives"
                        ? (a.youtube.lives || []).length === 0
                            ? e.jsx(je, { title: "还没有直播存档", hint: "下播之后会自动存一份实录到这里" })
                            : (a.youtube.lives || []).map((c) =>
                                  e.jsxs(
                                      "div",
                                      {
                                          className: "yt-live-archive",
                                          children: [
                                              e.jsxs("button", {
                                                  className: "yt-live-archive-main btn-plain",
                                                  onClick: () =>
                                                      i.push({
                                                          name: "live",
                                                          charId: c.charId,
                                                          archiveId: c.id,
                                                      }),
                                                  children: [
                                                      e.jsx("div", {
                                                          className: "yt-live-archive-title",
                                                          children: c.title,
                                                      }),
                                                      e.jsxs("div", {
                                                          className: "yt-live-archive-meta",
                                                          children: [
                                                              $(a, c.charId),
                                                              " · ",
                                                              c.category,
                                                              " · ",
                                                              ke(c.startedAt),
                                                              " · 峰值 ",
                                                              he(c.peakViewers || c.viewers),
                                                              " 人",
                                                          ],
                                                      }),
                                                      c.memoryLine &&
                                                          e.jsx("div", {
                                                              className: "yt-live-archive-line",
                                                              children: c.memoryLine,
                                                          }),
                                                  ],
                                              }),
                                              e.jsx("button", {
                                                  className: "yt-icon-btn",
                                                  onClick: () => b(c),
                                                  "aria-label": "删除",
                                                  children: e.jsx(ls, { size: 17 }),
                                              }),
                                          ],
                                      },
                                      c.id,
                                  ),
                              )
                        : j.length === 0
                          ? e.jsx(je, { title: s === "history" ? "还没有看过什么" : "稍后观看是空的" })
                          : j.map((c, z) =>
                                e.jsx(
                                    Be,
                                    { video: c, compact: !0, onOpen: () => i.openWatch(c.ownerId, c.id) },
                                    `${c.id}_${z}`,
                                ),
                            ),
            }),
            e.jsx(_e, {
                open: !!l,
                onClose: () => b(null),
                title: l == null ? void 0 : l.title,
                message: A > 0 ? `这场直播已经生成了 ${A} 条记忆` : "这场直播还没有进记忆",
                actions: [
                    ...(A > 0
                        ? [
                              {
                                  label: `删存档，保留 ${A} 条记忆`,
                                  destructive: !0,
                                  onClick: () => {
                                      (n(l.id), m("存档已删除"));
                                  },
                              },
                          ]
                        : []),
                    {
                        label: A > 0 ? `删存档和 ${A} 条记忆` : "删除存档",
                        destructive: !0,
                        onClick: () => {
                            (n(l.id, { removeDerived: !0 }), m("已删除"));
                        },
                    },
                ],
            }),
        ],
    });
}
function vn() {
    const { state: s } = te(),
        a = ue(),
        [t, n] = o.useState(""),
        i = o.useRef(null);
    o.useEffect(() => {
        requestAnimationFrame(() => Ns(i));
    }, []);
    const m = t.trim().toLowerCase(),
        u = o.useMemo(
            () =>
                m
                    ? Fe(s).filter(
                          (l) =>
                              String(l.title || "")
                                  .toLowerCase()
                                  .includes(m) ||
                              String(l.description || "")
                                  .toLowerCase()
                                  .includes(m) ||
                              $(s, l.ownerId).toLowerCase().includes(m),
                      )
                    : [],
            [s, m],
        ),
        x = o.useMemo(
            () =>
                m
                    ? s.characters.filter(
                          (l) => $(s, l.id).toLowerCase().includes(m) || be(s, l.id).includes(m),
                      )
                    : [],
            [s, m],
        );
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("header", {
                className: "yt-topbar sticky",
                children: [
                    e.jsx("button", {
                        className: "yt-icon-btn",
                        onClick: a.pop,
                        "aria-label": "返回",
                        children: e.jsx(Ge, { size: 24 }),
                    }),
                    e.jsxs("div", {
                        className: "yt-search-field",
                        children: [
                            e.jsx(is, { size: 16 }),
                            e.jsx("input", {
                                ref: i,
                                value: t,
                                onChange: (l) => n(l.target.value),
                                placeholder: "搜索频道或内容",
                            }),
                            t &&
                                e.jsx("button", {
                                    className: "btn-plain",
                                    onClick: () => n(""),
                                    "aria-label": "清空",
                                    children: e.jsx(fe, { size: 15 }),
                                }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "yt-scroll",
                children: [
                    !m && e.jsx(je, { title: "搜点什么", hint: "标题、简介、频道名都能搜" }),
                    m && x.length === 0 && u.length === 0 && e.jsx(je, { title: `没有找到「${t}」` }),
                    x.map((l) =>
                        e.jsxs(
                            "button",
                            {
                                className: "yt-channel-row btn-plain",
                                onClick: () => a.openChannel(l.id),
                                children: [
                                    e.jsx(ne, { src: Q(s, l.id), name: $(s, l.id), size: 52 }),
                                    e.jsxs("div", {
                                        className: "yt-channel-copy",
                                        children: [
                                            e.jsx("div", {
                                                className: "yt-channel-name",
                                                children: $(s, l.id),
                                            }),
                                            e.jsxs("div", {
                                                className: "yt-channel-meta",
                                                children: [
                                                    "@",
                                                    be(s, l.id),
                                                    " · ",
                                                    (de(s, l.id).videos || []).length,
                                                    " 个内容",
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            l.id,
                        ),
                    ),
                    u.map((l) =>
                        e.jsx(
                            Be,
                            { video: l, compact: !0, onOpen: () => a.openWatch(l.ownerId, l.id) },
                            l.id,
                        ),
                    ),
                ],
            }),
        ],
    });
}
const Nn = [
        ["home", "首页"],
        ["videos", "视频"],
        ["shorts", "Shorts"],
        ["posts", "帖子"],
    ],
    gn = [
        ["latest", "最新"],
        ["popular", "热门"],
        ["oldest", "最早"],
    ];
function kn({ ownerId: s }) {
    var H, X, R;
    const { state: a, tubeToggleSubscribe: t, tubeSetBell: n, tubeSetChannel: i, socialPatchAlt: m } = te(),
        u = ue(),
        { v: x, readOnly: l } = ye(),
        b = ve(),
        r = Ae(`tube:${s}`),
        [d, C] = o.useState("videos"),
        [p, j] = o.useState("latest"),
        [f, A] = o.useState(!1),
        [c, z] = o.useState(!1),
        [P, B] = o.useState(!1),
        [Y, L] = o.useState(!1),
        I = o.useRef(null),
        w = o.useRef(null),
        [h, W] = o.useState(!1),
        N = s === "me",
        T = ge(s),
        U = T ? as(a, "youtube", s) : s,
        D = U === x,
        O = T ? { ref: s } : {},
        S = de(a, s),
        g = (a.youtube.subscriptions || []).includes(s),
        E = ((H = a.youtube.bells) == null ? void 0 : H[s]) || "personalized",
        F = (S.videos || []).map((y) => ({ ...y, ownerId: s })),
        ie = ((X = a.youtube.live) == null ? void 0 : X.charId) === s ? a.youtube.live : null,
        oe = o.useMemo(() => {
            let y = F.filter((_) =>
                d === "shorts" ? _.kind === "short" : d === "videos" ? _.kind !== "short" : !0,
            );
            return (
                p === "popular"
                    ? (y = [...y].sort((_, q) => (q.views || 0) - (_.views || 0)))
                    : p === "oldest"
                      ? (y = [...y].sort((_, q) => (_.createdAt || 0) - (q.createdAt || 0)))
                      : (y = [...y].sort((_, q) => (q.createdAt || 0) - (_.createdAt || 0))),
                y
            );
        }, [F, d, p]),
        v = o.useRef(!1);
    o.useEffect(() => {
        D ||
            v.current ||
            T ||
            S.subscribers != null ||
            !r.laneReady ||
            ((v.current = !0),
            (S.videos || []).length ? r.genChannel(s, { silent: !0 }) : r.genBatch([s], { count: 3 }));
    }, [s, D, S.subscribers, r.laneReady]);
    const K =
            S.about ||
            (N
                ? a.me.signature || ""
                : ((R = a.characters.find((y) => y.id === s)) == null ? void 0 : R.signature) || ""),
        V = S.subscribers == null ? "订阅数未生成" : `${he(S.subscribers)} 位订阅者`,
        ee = (y) => {
            T ? m("youtube", U, T, y) : i(s, y);
        },
        M = async (y) => {
            var J;
            const _ = (J = y.target.files) == null ? void 0 : J[0];
            if (!_) return;
            y.target.value = "";
            const q = await Ps(_, {
                aspect: Sa(document.querySelector(".yt-banner"), 16 / 5),
                shape: "rounded",
                title: "横幅",
            });
            q && ee({ banner: q });
        },
        se = async (y) => {
            var J;
            const _ = (J = y.target.files) == null ? void 0 : J[0];
            if (!_) return;
            y.target.value = "";
            const q = await Ps(_, { aspect: 1, shape: "circle", title: "头像" });
            q && ee({ avatar: q });
        },
        xe = async () => {
            if (D) {
                b("我的频道资料在「我的」里自己改");
                return;
            }
            if (T) {
                await r.genChannel(U, { ref: s });
                return;
            }
            await r.genBatch([U], { count: 3 });
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(we, {
                title: e.jsx("div", { className: "yt-topbar-title" }),
                right: e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("button", {
                            className: "yt-icon-btn",
                            "aria-label": "投屏",
                            onClick: () => b("没有可投屏的设备"),
                            children: e.jsx(ct, { size: 21 }),
                        }),
                        e.jsx("button", {
                            className: "yt-icon-btn",
                            "aria-label": "搜索",
                            onClick: () => u.push({ name: "search" }),
                            children: e.jsx(is, { size: 21 }),
                        }),
                        e.jsx("button", {
                            className: "yt-icon-btn",
                            "aria-label": "更多",
                            onClick: () => B(!0),
                            children: e.jsx(Le, { size: 21 }),
                        }),
                    ],
                }),
            }),
            e.jsxs("div", {
                className: "yt-scroll",
                children: [
                    e.jsx("button", {
                        className: "yt-banner btn-plain",
                        onClick: () => {
                            var y;
                            return (y = I.current) == null ? void 0 : y.click();
                        },
                        "aria-label": "换横幅",
                        children: S.banner
                            ? e.jsx(ts, { src: S.banner, alt: "", className: "yt-banner-img" })
                            : e.jsx("div", {
                                  className: "yt-banner-grid",
                                  children: Array.from({ length: 10 }, (y, _) => {
                                      const q = cs(`${s}_${_}`);
                                      return e.jsx(
                                          "span",
                                          {
                                              style: {
                                                  background: `linear-gradient(${q.angle}deg, hsl(0 0% ${q.a + 8}%), hsl(0 0% ${q.b}%))`,
                                              },
                                          },
                                          _,
                                      );
                                  }),
                              }),
                    }),
                    e.jsx("input", { ref: I, type: "file", accept: "image/*", hidden: !0, onChange: M }),
                    e.jsx("input", { ref: w, type: "file", accept: "image/*", hidden: !0, onChange: se }),
                    e.jsx(Ut, {
                        open: h,
                        onClose: () => W(!1),
                        title: "频道头像",
                        ownerId: U === "me" ? "me" : U,
                        current: Q(a, s) || "",
                        onPick: (y) => ee({ avatar: y }),
                        onUpload: () => {
                            var y;
                            return (y = w.current) == null ? void 0 : y.click();
                        },
                    }),
                    e.jsxs("div", {
                        className: "yt-ch-head",
                        children: [
                            e.jsxs("div", {
                                className: "yt-ch-id",
                                children: [
                                    e.jsx("button", {
                                        className: "btn-plain",
                                        onClick: () => W(!0),
                                        "aria-label": "换头像",
                                        children: e.jsx(ne, { src: Q(a, s), name: $(a, s), size: 86 }),
                                    }),
                                    e.jsx("div", { className: "yt-ch-name", children: $(a, s) }),
                                ],
                            }),
                            e.jsxs("div", { className: "yt-ch-handle", children: ["@", be(a, s)] }),
                            e.jsxs("div", {
                                className: "yt-ch-counts",
                                children: [V, " · ", F.length, " 个内容"],
                            }),
                            e.jsxs("button", {
                                className: `yt-ch-about btn-plain ${f ? "open" : ""}`,
                                onClick: () => A((y) => !y),
                                children: [
                                    K || "这个频道还没有简介",
                                    !f && e.jsx("span", { className: "yt-more", children: "…更多" }),
                                ],
                            }),
                            !N &&
                                K &&
                                e.jsx($e, {
                                    className: "yt-trans",
                                    charId: ss(a, s),
                                    text: K,
                                    known: S.aboutTr,
                                    labels: ["翻译简介", "隐藏翻译"],
                                }),
                            f &&
                                S.tagline &&
                                e.jsx("div", { className: "yt-ch-tagline", children: S.tagline }),
                            e.jsxs("div", { className: "yt-ch-link", children: ["litot.tube/@", be(a, s)] }),
                        ],
                    }),
                    D && !l
                        ? e.jsxs("div", {
                              className: "yt-ch-actions",
                              children: [
                                  e.jsx("button", {
                                      className: "yt-pill wide",
                                      onClick: () => L(!0),
                                      children: "编辑个人资料",
                                  }),
                                  e.jsx("button", {
                                      className: "yt-pill",
                                      onClick: () => u.push({ name: "history" }),
                                      children: "历史记录",
                                  }),
                              ],
                          })
                        : e.jsxs("div", {
                              className: "yt-ch-actions",
                              children: [
                                  e.jsx("button", {
                                      className: `yt-subscribe ${g ? "on" : ""}`,
                                      onClick: () => (g ? z(!0) : t(s)),
                                      children: g
                                          ? e.jsxs(e.Fragment, {
                                                children: [
                                                    E === "none"
                                                        ? e.jsx(Va, { size: 17 })
                                                        : E === "all"
                                                          ? e.jsx(Ha, { size: 17 })
                                                          : e.jsx(ot, { size: 17 }),
                                                    e.jsx("span", { children: "已订阅" }),
                                                    e.jsx(qe, { size: 15 }),
                                                ],
                                            })
                                          : e.jsx("span", { children: "订阅" }),
                                  }),
                                  e.jsx("button", {
                                      className: "yt-pill",
                                      onClick: () => u.openDm(s),
                                      children: "私信",
                                  }),
                                  e.jsxs("button", {
                                      className: `yt-pill ${r.busy ? "is-busy" : ""}`,
                                      onClick: r.busy ? r.stop : () => r.genVideo(U, { kind: "video", ...O }),
                                      children: [
                                          r.busy ? e.jsx(Re, { size: 15 }) : e.jsx(st, { size: 15 }),
                                          e.jsx("span", { children: r.busy ? "停止" : "发一期" }),
                                      ],
                                  }),
                                  e.jsxs("button", {
                                      className: "yt-pill",
                                      disabled: r.busy,
                                      onClick: xe,
                                      children: [
                                          e.jsx(Pe, { size: 15 }),
                                          e.jsx("span", { children: T ? "资料" : "刷新主页" }),
                                      ],
                                  }),
                              ],
                          }),
                    ie &&
                        e.jsxs("button", {
                            className: "yt-ch-live btn-plain",
                            onClick: () => u.openLive(s),
                            children: [
                                e.jsxs("span", {
                                    className: "yt-badge-live",
                                    children: [e.jsx("span", { className: "yt-live-dot" }), "直播中"],
                                }),
                                e.jsx("span", { children: ie.title }),
                            ],
                        }),
                    e.jsx("div", {
                        className: "yt-ch-tabs",
                        children: Nn.map(([y, _]) =>
                            e.jsx(
                                "button",
                                { className: d === y ? "on" : "", onClick: () => C(y), children: _ },
                                y,
                            ),
                        ),
                    }),
                    d === "posts"
                        ? e.jsx(Cn, { ownerId: s })
                        : e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx("div", {
                                      className: "yt-sorts",
                                      children: gn.map(([y, _]) =>
                                          e.jsx(
                                              "button",
                                              {
                                                  className: `yt-sort ${p === y ? "on" : ""}`,
                                                  onClick: () => j(y),
                                                  children: _,
                                              },
                                              y,
                                          ),
                                      ),
                                  }),
                                  oe.length === 0
                                      ? e.jsx(je, {
                                            title: d === "shorts" ? "还没有短视频" : "这个频道还没有内容",
                                            hint: D ? void 0 : "点上面的「发一期」",
                                        })
                                      : d === "shorts"
                                        ? e.jsx("div", {
                                              className: "sh-grid three",
                                              children: oe.map((y) =>
                                                  e.jsx(
                                                      Ts,
                                                      {
                                                          video: y,
                                                          onOpen: () =>
                                                              u.push({
                                                                  name: "watch",
                                                                  ownerId: s,
                                                                  videoId: y.id,
                                                                  list: oe.map((_) => _.id),
                                                              }),
                                                      },
                                                      y.id,
                                                  ),
                                              ),
                                          })
                                        : oe.map((y) =>
                                              e.jsx(
                                                  Be,
                                                  {
                                                      video: y,
                                                      compact: !0,
                                                      onOpen: () => u.openWatch(s, y.id),
                                                  },
                                                  y.id,
                                              ),
                                          ),
                              ],
                          }),
                ],
            }),
            e.jsx(_e, {
                open: c,
                onClose: () => z(!1),
                title: "通知",
                message: `${$(a, s)} 上新内容时`,
                actions: [
                    { label: "全部通知", onClick: () => n(s, "all") },
                    { label: "个性化通知", onClick: () => n(s, "personalized") },
                    { label: "不接收通知", onClick: () => n(s, "none") },
                    { label: "取消订阅", destructive: !0, onClick: () => t(s) },
                ],
            }),
            e.jsx(_e, {
                open: P,
                onClose: () => B(!1),
                title: "频道",
                actions: (N
                    ? [
                          !l && { label: "编辑频道资料 / 生成方向", onClick: () => L(!0) },
                          { label: "分享到聊天", onClick: () => u.share(_s(a, s), s !== "me" ? s : null) },
                          !l && {
                              label: "换横幅图",
                              onClick: () => {
                                  var y;
                                  return (y = I.current) == null ? void 0 : y.click();
                              },
                          },
                          !l && { label: "换头像", onClick: () => W(!0) },
                      ]
                    : [
                          {
                              label: r.busy ? "停止生成" : "生成一期短视频",
                              onClick: () => (r.busy ? r.stop() : r.genVideo(U, { kind: "short", ...O })),
                          },
                          !l && { label: "资料 / 生成方向", onClick: () => L(!0) },
                          { label: "分享到聊天", onClick: () => u.share(_s(a, s), s !== "me" ? s : null) },
                          !l && {
                              label: "换横幅图",
                              onClick: () => {
                                  var y;
                                  return (y = I.current) == null ? void 0 : y.click();
                              },
                          },
                          !l && { label: "换头像", onClick: () => W(!0) },
                          !l &&
                              T &&
                              (() => {
                                  const y = tt(a, "youtube", U).find((_) => _.id === T);
                                  return !!(y != null && y.fromGen) && y.linked === !0;
                              })() && {
                                  label: "解除绑定",
                                  onClick: () => {
                                      (m("youtube", U, T, { linked: !1 }), b("已解除绑定"), u.pop());
                                  },
                              },
                      ]
                ).filter(Boolean),
            }),
            e.jsx(La, {
                open: Y && !l,
                onClose: () => L(!1),
                platform: "youtube",
                data: S,
                isMe: N,
                isAlt: !!T,
                title: `@${be(a, s)}`,
                avatarNode: e.jsx(ne, { src: Q(a, s), name: $(a, s), size: 52 }),
                onPickAvatar: () => W(!0),
                onPickBanner: () => {
                    var y;
                    return (y = I.current) == null ? void 0 : y.click();
                },
                onSave: (y) => ee(y),
            }),
        ],
    });
}
function Cn({ ownerId: s }) {
    var m, u, x, l, b;
    const { state: a } = te(),
        t = (de(a, s).posts || []).map((r) => ({ ...r, tube: !0 })),
        n =
            s === "me"
                ? ((u = (m = a.insta) == null ? void 0 : m.me) == null ? void 0 : u.posts) || []
                : ((b = (l = (x = a.insta) == null ? void 0 : x.chars) == null ? void 0 : l[s]) == null
                      ? void 0
                      : b.posts) || [],
        i = [...t, ...n].sort((r, d) => (d.createdAt || 0) - (r.createdAt || 0));
    return i.length
        ? e.jsx("div", {
              className: "yt-posts",
              children: i.slice(0, 30).map((r) => {
                  var d, C, p;
                  return r.tube
                      ? e.jsx(Ys, { ownerId: s, post: r }, r.id)
                      : e.jsx(
                            Ys,
                            {
                                ownerId: s,
                                mirror: !0,
                                post: {
                                    id: r.id,
                                    createdAt: r.createdAt,
                                    likes: r.likes || 0,
                                    comments: r.comments || [],
                                    text:
                                        r.kind === "textcard"
                                            ? [
                                                  (d = r.card) == null ? void 0 : d.title,
                                                  (C = r.card) == null ? void 0 : C.body,
                                              ].filter(Boolean).join(`
`)
                                            : r.body || r.caption || "",
                                    image:
                                        (Array.isArray(r.media) &&
                                            ((p = r.media[0]) == null ? void 0 : p.ref)) ||
                                        r.imgDataUrl ||
                                        null,
                                },
                            },
                            r.id,
                        );
              }),
          })
        : e.jsx(je, { title: "还没有帖子", hint: "帖子与 Insta 那边同源" });
}
function kt({ ownerId: s, video: a, className: t, up: n = !1, children: i }) {
    const { state: m } = te(),
        u = ue(),
        x = ye(),
        [l, b] = o.useState(null),
        r = () => u.share(mt(m, s, a), s !== "me" && !String(s).startsWith("alt:") ? s : null);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("button", {
                className: t,
                "aria-haspopup": "menu",
                onClick: (d) => {
                    (d.stopPropagation(), x.readOnly ? r() : b(d.currentTarget));
                },
                "data-up": n ? "1" : void 0,
                children: i,
            }),
            l &&
                e.jsx(fs, {
                    theme: "yt",
                    anchor: l,
                    width: 220,
                    onClose: () => b(null),
                    items: [
                        {
                            key: "post",
                            label: "创建帖子",
                            icon: e.jsx(_a, { size: 20, strokeWidth: 1.7 }),
                            onClick: () => u.sharePost(s, a.id),
                        },
                        {
                            key: "chat",
                            label: "发送到聊天",
                            icon: e.jsx(ns, { size: 20, strokeWidth: 1.7 }),
                            onClick: r,
                        },
                    ],
                }),
        ],
    });
}
function Ct({ ownerId: s, videoId: a, snap: t, onOpen: n, compact: i = !1 }) {
    const { state: m } = te(),
        u = (de(m, s).videos || []).find((l) => l.id === a),
        x = u || t || {};
    return e.jsxs("div", {
        role: "button",
        tabIndex: 0,
        className: `yt-pv${i ? " compact" : ""}${u ? "" : " gone"}`,
        onClick: (l) => {
            (l.stopPropagation(), u && (n == null || n()));
        },
        children: [
            e.jsx(Ee, {
                video: x,
                className: "yt-pv-thumb",
                children: x.duration
                    ? e.jsx("span", {
                          className: "yt-dur",
                          children: x.kind === "short" ? "Shorts" : Me(x.duration),
                      })
                    : null,
            }),
            e.jsxs("div", {
                className: "yt-pv-meta",
                children: [
                    e.jsx("b", { children: x.title || "视频已不可用" }),
                    e.jsx("span", {
                        children: [
                            u ? $(m, s) : t == null ? void 0 : t.channel,
                            x.views != null ? `${he(x.views)} 次观看` : "",
                            x.createdAt ? ke(x.createdAt) : "",
                        ]
                            .filter(Boolean)
                            .join(" · "),
                    }),
                ],
            }),
        ],
    });
}
function Ys({ ownerId: s, post: a, mirror: t = !1 }) {
    const { state: n, patch: i } = te(),
        m = ue(),
        u = ye(),
        x = Ae(`tube:post:${a.id}`),
        l = ut(),
        [b, r] = o.useState(null),
        [d, C] = o.useState(!1),
        p = o.useMemo(() => {
            const c = [...(a.comments || [])].sort((I, w) => (I.createdAt || 0) - (w.createdAt || 0)),
                z = new Set(c.map((I) => I.id)),
                P = c.filter((I) => !I.replyToId || !z.has(I.replyToId)),
                B = (I) => c.filter((w) => w.replyToId === I),
                Y = [],
                L = (I, w) => {
                    (Y.push({ ...I, depth: Math.min(w, 1) }), B(I.id).forEach((h) => L(h, w + 1)));
                };
            return (P.forEach((I) => L(I, 0)), Y);
        }, [a.comments]),
        j = !!a.likedByMe,
        f = (c) =>
            i((z) => {
                var Y;
                const P = z.youtube || {},
                    B = (L) => ({
                        ...L,
                        posts: ((L == null ? void 0 : L.posts) || []).map((I) => (I.id === a.id ? c(I) : I)),
                    });
                return s === "me"
                    ? { youtube: { ...P, me: B(P.me) } }
                    : {
                          youtube: {
                              ...P,
                              channels: { ...P.channels, [s]: B((Y = P.channels) == null ? void 0 : Y[s]) },
                          },
                      };
            }),
        A = () =>
            i((c) => {
                var B;
                const z = c.youtube || {},
                    P = (Y) => ({
                        ...Y,
                        posts: ((Y == null ? void 0 : Y.posts) || []).filter((L) => L.id !== a.id),
                    });
                return s === "me"
                    ? { youtube: { ...z, me: P(z.me) } }
                    : {
                          youtube: {
                              ...z,
                              channels: { ...z.channels, [s]: P((B = z.channels) == null ? void 0 : B[s]) },
                          },
                      };
            });
    return e.jsxs("article", {
        className: "yt-cpost",
        children: [
            e.jsxs("header", {
                className: "yt-cpost-head",
                children: [
                    e.jsx(ne, { src: Q(n, s), name: $(n, s), size: 36 }),
                    e.jsxs("div", {
                        className: "yt-cpost-who",
                        children: [
                            e.jsx("b", { children: $(n, s) }),
                            e.jsx("span", { children: ke(a.createdAt) }),
                        ],
                    }),
                    !u.readOnly &&
                        s === "me" &&
                        !t &&
                        e.jsx("button", {
                            className: "yt-icon-btn",
                            "aria-label": "更多",
                            onClick: (c) => r(c.currentTarget),
                            children: e.jsx(Le, { size: 18 }),
                        }),
                ],
            }),
            a.text ? e.jsx("div", { className: "yt-cpost-text", children: a.text }) : null,
            a.image
                ? e.jsx("div", { className: "yt-cpost-img", children: e.jsx(ts, { src: a.image, alt: "" }) })
                : null,
            a.videoRef &&
                e.jsx(Ct, {
                    ownerId: a.videoRef.ownerId,
                    videoId: a.videoRef.videoId,
                    snap: a.video,
                    onOpen: () => m.openWatch(a.videoRef.ownerId, a.videoRef.videoId),
                }),
            e.jsxs("div", {
                className: "yt-cpost-acts",
                children: [
                    e.jsxs("button", {
                        className: `btn-plain${j ? " on" : ""}`,
                        disabled: t,
                        onClick: () =>
                            f((c) => ({
                                ...c,
                                likedByMe: !c.likedByMe,
                                likedAt: c.likedByMe ? 0 : Date.now(),
                            })),
                        "aria-label": "赞",
                        children: [
                            e.jsx(Oe, { size: 17, fill: j ? "currentColor" : "none" }),
                            e.jsx("span", { children: he((a.likes || 0) + (j ? 1 : 0)) || "" }),
                        ],
                    }),
                    e.jsx("button", {
                        className: "btn-plain",
                        "aria-label": "踩",
                        children: e.jsx(Ms, { size: 17 }),
                    }),
                    e.jsxs("button", {
                        className: "btn-plain",
                        "aria-label": "评论",
                        "aria-expanded": d,
                        onClick: () => C((c) => !c),
                        children: [
                            e.jsx(Ua, { size: 17 }),
                            e.jsx("span", { children: (a.comments || []).length || "" }),
                        ],
                    }),
                ],
            }),
            d &&
                e.jsx("div", {
                    className: "yt-cpost-cmts",
                    children: p.length
                        ? p.map((c) =>
                              e.jsxs(
                                  "div",
                                  {
                                      className: `yt-comment ${c.depth === 1 ? "is-reply" : ""}`,
                                      children: [
                                          e.jsx("button", {
                                              type: "button",
                                              className: "btn-plain yt-c-av",
                                              onClick: () => l(c),
                                              "aria-label": "打开频道",
                                              children: e.jsx(ne, {
                                                  src: es(n, c),
                                                  name: Ie(n, c).replace(/^@/, ""),
                                                  size: c.depth === 1 ? 24 : 28,
                                              }),
                                          }),
                                          e.jsxs("div", {
                                              className: "yt-comment-body",
                                              children: [
                                                  e.jsxs("div", {
                                                      className: "yt-comment-head",
                                                      children: [
                                                          e.jsx("span", {
                                                              className: "yt-comment-name",
                                                              children: Ie(n, c),
                                                          }),
                                                          e.jsx("span", {
                                                              className: "yt-comment-time",
                                                              children: ke(c.createdAt),
                                                          }),
                                                      ],
                                                  }),
                                                  e.jsxs("div", {
                                                      className: "yt-comment-text",
                                                      children: [
                                                          c.replyToName &&
                                                              e.jsxs("span", {
                                                                  className: "yt-comment-at",
                                                                  children: [$s(n, p, c), " "],
                                                              }),
                                                          e.jsx(rs, { text: c.text }),
                                                      ],
                                                  }),
                                                  c.author !== "me" &&
                                                      e.jsx($e, {
                                                          className: "yt-trans",
                                                          charId: c.author === "char" ? c.charId : null,
                                                          text: c.text,
                                                          known: c.tr,
                                                          labels: ["翻译成中文", "隐藏翻译"],
                                                      }),
                                              ],
                                          }),
                                      ],
                                  },
                                  c.id,
                              ),
                          )
                        : e.jsx("div", { className: "yt-cpost-empty", children: "暂无评论。" }),
                }),
            b &&
                e.jsx(fs, {
                    theme: "yt",
                    anchor: b,
                    width: 200,
                    onClose: () => r(null),
                    items: [
                        {
                            key: "gen",
                            label: x.busy ? "停止生成" : "刷新互动",
                            icon: e.jsx(Pe, { size: 20, strokeWidth: 1.7 }),
                            onClick: () => (x.busy ? x.stop() : x.genPostReaction(s, a.id, a)),
                        },
                        {
                            key: "del",
                            label: "删除",
                            danger: !0,
                            icon: e.jsx(ls, { size: 20, strokeWidth: 1.7 }),
                            onClick: A,
                        },
                    ],
                }),
        ],
    });
}
function wn({ ownerId: s, videoId: a }) {
    const { state: t, patch: n } = te(),
        i = Ae("tube:post"),
        m = ue(),
        u = ve(),
        [x, l] = o.useState(""),
        b = (de(t, s).videos || []).find((d) => d.id === a),
        r = () => {
            if (!b) return;
            const d = {
                id: pe("ytp_"),
                createdAt: Date.now(),
                text: x.trim().slice(0, 1e3),
                likes: 0,
                comments: [],
                videoRef: { ownerId: s, videoId: a },
                video: {
                    title: b.title,
                    channel: $(t, s),
                    duration: b.duration,
                    kind: b.kind,
                    views: b.views,
                    createdAt: b.createdAt,
                    thumb: b.thumb || null,
                    cover: b.cover || "",
                    id: b.id,
                },
            };
            (n((C) => {
                var p, j, f;
                return {
                    youtube: {
                        ...C.youtube,
                        me: {
                            ...(((p = C.youtube) == null ? void 0 : p.me) || {}),
                            posts: [
                                d,
                                ...(((f = (j = C.youtube) == null ? void 0 : j.me) == null
                                    ? void 0
                                    : f.posts) || []),
                            ],
                        },
                    },
                };
            }),
                u("已发布到你的频道"),
                i.genPostReaction("me", d.id, d),
                m.pop());
        };
    return e.jsxs("div", {
        className: "yt-page yt-newpost",
        children: [
            e.jsxs("header", {
                className: "yt-np-bar",
                children: [
                    e.jsx("button", {
                        className: "yt-icon-btn",
                        onClick: m.pop,
                        "aria-label": "关闭",
                        children: e.jsx(fe, { size: 22 }),
                    }),
                    e.jsx("div", { className: "yt-topbar-title", children: "创建帖子" }),
                    e.jsx("button", {
                        className: "yt-np-post btn-plain",
                        disabled: !b,
                        onClick: r,
                        children: "发布",
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "yt-np-body",
                children: [
                    e.jsxs("div", {
                        className: "yt-np-who",
                        children: [
                            e.jsx(ne, { src: Q(t, "me"), name: $(t, "me"), size: 36 }),
                            e.jsxs("div", {
                                children: [
                                    e.jsx("b", { children: $(t, "me") }),
                                    e.jsxs("span", {
                                        className: "yt-np-vis",
                                        children: [e.jsx(Ya, { size: 12, strokeWidth: 2 }), "公开"],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx("textarea", {
                        className: "yt-np-input",
                        rows: 4,
                        autoFocus: !0,
                        maxLength: 1e3,
                        value: x,
                        onChange: (d) => l(d.target.value),
                        placeholder: "分享你的想法",
                    }),
                    b
                        ? e.jsx(Ct, { ownerId: s, videoId: a, compact: !0 })
                        : e.jsx(je, { title: "这期视频已不可用" }),
                ],
            }),
        ],
    });
}
function Sn({ ownerId: s, videoId: a, list: t = null }) {
    const { state: n } = te(),
        i = ue(),
        m = (de(n, s).videos || []).find((u) => u.id === a);
    return (m == null ? void 0 : m.kind) === "short"
        ? e.jsx(Nt, { startId: a, onExit: i.pop, channel: Array.isArray(t) ? { ownerId: s, list: t } : null })
        : e.jsx(Mn, { ownerId: s, videoId: a });
}
function Mn({ ownerId: s, videoId: a }) {
    var ee;
    const {
            state: t,
            tubeRateVideo: n,
            tubeMarkWatched: i,
            tubeToggleSubscribe: m,
            tubeToggleWatchLater: u,
        } = te(),
        x = ue(),
        l = ve(),
        b = Ae(),
        r = de(t, s),
        d = (r.videos || []).find((M) => M.id === a),
        C = (t.youtube.history || []).find((M) => M.videoId === a),
        [p, j] = o.useState(() => {
            const M = Number(C == null ? void 0 : C.progress) || 0;
            return d && M >= d.duration - 2 ? 0 : M;
        }),
        [f, A] = o.useState(!0),
        [c, z] = o.useState(1),
        [P, B] = o.useState(!1),
        [Y, L] = o.useState(!1),
        [I, w] = o.useState(!1),
        [h, W] = o.useState(!0),
        N = o.useRef(null),
        T = o.useRef(null),
        U = o.useRef({ t: 0 });
    U.current.t = p;
    const D = Qs((d == null ? void 0 : d.mediaRef) || null),
        O = !!(d != null && d.mediaRef && D);
    if (
        (o.useEffect(() => {
            if (O || !f || !d) return;
            const M = setInterval(() => {
                j((se) => {
                    const xe = se + c;
                    return xe >= d.duration ? (A(!1), d.duration) : xe;
                });
            }, 1e3);
            return () => clearInterval(M);
        }, [O, f, c, d == null ? void 0 : d.duration]),
        o.useEffect(() => {
            const M = T.current;
            M && ((M.playbackRate = c), (M.muted = P), f ? M.play().catch(() => A(!1)) : M.pause());
        }, [O, f, c, P]),
        o.useEffect(
            () => () => {
                d && i(s, a, Math.floor(U.current.t));
            },
            [],
        ),
        o.useEffect(() => {
            if (!h) return;
            const M = setTimeout(() => W(!1), 2600);
            return () => clearTimeout(M);
        }, [h, p]),
        !d)
    )
        return e.jsxs(e.Fragment, {
            children: [e.jsx(we, { title: "视频不见了" }), e.jsx(je, { title: "这期已经被删了" })],
        });
    const S = (ee = t.youtube.likes) == null ? void 0 : ee[`${s}:${a}`],
        g = (t.youtube.subscriptions || []).includes(s),
        E = (t.youtube.watchLater || []).some((M) => M.videoId === a),
        F = Math.min(100, (p / Math.max(1, d.duration)) * 100),
        ie = [...(d.chapters || [])].reverse().find((M) => M.at <= p),
        oe = d.scenes || [],
        v = [...oe].reverse().find((M) => M.at <= p) || oe[0] || null,
        K = Fe(t)
            .filter((M) => M.id !== a)
            .slice(0, 8),
        V = (M) => {
            var R, y;
            const se = N.current;
            if (!se) return;
            const xe = se.getBoundingClientRect(),
                H =
                    ((((y = (R = M.touches) == null ? void 0 : R[0]) == null ? void 0 : y.clientX) ??
                        M.clientX) -
                        xe.left) /
                    xe.width,
                X = Math.max(0, Math.min(d.duration, Math.round(H * d.duration)));
            (j(X), T.current && (T.current.currentTime = X), W(!0));
        };
    return e.jsxs("div", {
        className: `yt-watch ${Y ? "wide" : ""}`,
        children: [
            e.jsx("div", {
                className: "yt-player-wrap",
                children: e.jsxs("div", {
                    className: "yt-player",
                    onClick: () => W((M) => !M),
                    children: [
                        O
                            ? e.jsx("video", {
                                  ref: T,
                                  src: D,
                                  className: "yt-player-media",
                                  playsInline: !0,
                                  preload: "metadata",
                                  onTimeUpdate: (M) => j(Math.floor(M.currentTarget.currentTime)),
                                  onEnded: () => A(!1),
                              })
                            : e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx(Ee, { video: d, className: "yt-player-bg", showCover: !1 }),
                                      ((v == null ? void 0 : v.shot) || d.cover || !d.thumb) &&
                                          e.jsxs("div", {
                                              className: `yt-player-frame ${h || !f ? "is-dim" : ""}`,
                                              children: [
                                                  e.jsxs("span", {
                                                      className: "yt-player-frame-tag",
                                                      children: [e.jsx(gs, { size: 12 }), "画面"],
                                                  }),
                                                  v != null && v.shot
                                                      ? e.jsx("p", { children: v.shot }, v.at)
                                                      : d.cover
                                                        ? e.jsx(
                                                              "p",
                                                              { className: "is-cover", children: d.cover },
                                                              "cover",
                                                          )
                                                        : e.jsx(
                                                              "p",
                                                              {
                                                                  className: "is-empty",
                                                                  children: "这一期没有画面描述",
                                                              },
                                                              "none",
                                                          ),
                                              ],
                                          }),
                                  ],
                              }),
                        e.jsxs("div", {
                            className: `yt-player-ui ${h || !f ? "show" : ""}`,
                            children: [
                                e.jsx("button", {
                                    className: "yt-player-close",
                                    onClick: (M) => {
                                        (M.stopPropagation(), x.pop());
                                    },
                                    "aria-label": "返回",
                                    children: e.jsx(Ge, { size: 24 }),
                                }),
                                e.jsxs("div", {
                                    className: "yt-player-top-right",
                                    children: [
                                        e.jsx("button", {
                                            className: "yt-player-btn",
                                            onClick: (M) => {
                                                (M.stopPropagation(), B((se) => !se));
                                            },
                                            "aria-label": "静音",
                                            children: P ? e.jsx(Ga, { size: 19 }) : e.jsx(qa, { size: 19 }),
                                        }),
                                        e.jsxs("button", {
                                            className: "yt-player-btn",
                                            onClick: (M) => {
                                                (M.stopPropagation(),
                                                    z((se) => (se === 1 ? 1.5 : se === 1.5 ? 2 : 1)));
                                            },
                                            children: [c, "x"],
                                        }),
                                        e.jsx("button", {
                                            className: "yt-player-btn",
                                            onClick: (M) => {
                                                (M.stopPropagation(), L((se) => !se));
                                            },
                                            "aria-label": "全屏",
                                            children: e.jsx(Ka, { size: 19 }),
                                        }),
                                    ],
                                }),
                                e.jsx("button", {
                                    className: "yt-player-play",
                                    onClick: (M) => {
                                        (M.stopPropagation(), A((se) => !se));
                                    },
                                    "aria-label": f ? "暂停" : "播放",
                                    children: f
                                        ? e.jsx(Xa, { size: 30, fill: "#fff", strokeWidth: 0 })
                                        : e.jsx(ks, { size: 30, fill: "#fff", strokeWidth: 0 }),
                                }),
                            ],
                        }),
                        ie && e.jsx("div", { className: "yt-player-chapter", children: ie.title }),
                        e.jsxs("div", {
                            className: "yt-player-bar",
                            ref: N,
                            onClick: (M) => {
                                (M.stopPropagation(), V(M));
                            },
                            children: [
                                e.jsx("span", { className: "yt-player-track" }),
                                e.jsx("span", { className: "yt-player-fill", style: { width: `${F}%` } }),
                                oe.map((M) =>
                                    e.jsx(
                                        "span",
                                        {
                                            className: "yt-player-tick",
                                            style: { left: `${(M.at / Math.max(1, d.duration)) * 100}%` },
                                        },
                                        M.at,
                                    ),
                                ),
                                e.jsx("span", { className: "yt-player-knob", style: { left: `${F}%` } }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "yt-player-time",
                            children: [Me(p), " / ", Me(d.duration)],
                        }),
                    ],
                }),
            }),
            e.jsxs("div", {
                className: "yt-scroll yt-watch-scroll",
                children: [
                    e.jsxs("button", {
                        className: "yt-watch-title btn-plain",
                        onClick: () => w(!0),
                        children: [
                            e.jsx("span", { children: d.title }),
                            e.jsxs("div", {
                                className: "yt-watch-sub",
                                children: [
                                    he(d.views),
                                    " 次观看 · ",
                                    ke(d.createdAt),
                                    " ",
                                    e.jsx(qe, { size: 14 }),
                                ],
                            }),
                        ],
                    }),
                    s !== "me" &&
                        e.jsx($e, {
                            className: "yt-trans yt-trans-title",
                            charId: ss(t, s),
                            text: d.title,
                            known: d.titleTr,
                            labels: ["翻译标题", "隐藏翻译"],
                        }),
                    e.jsxs("div", {
                        className: "yt-actions",
                        children: [
                            e.jsxs("div", {
                                className: "yt-action-pair",
                                children: [
                                    e.jsxs("button", {
                                        className: `yt-action ${S === "up" ? "on" : ""}`,
                                        onClick: () => n(s, a, "up"),
                                        children: [
                                            e.jsx(Oe, { size: 19 }),
                                            e.jsx("span", {
                                                children: he((d.likes || 0) + (S === "up" ? 1 : 0)),
                                            }),
                                        ],
                                    }),
                                    e.jsx("span", { className: "yt-action-split" }),
                                    e.jsx("button", {
                                        className: `yt-action ${S === "down" ? "on" : ""}`,
                                        onClick: () => n(s, a, "down"),
                                        children: e.jsx(Ms, { size: 19 }),
                                    }),
                                ],
                            }),
                            e.jsxs(kt, {
                                ownerId: s,
                                video: d,
                                className: "yt-action",
                                children: [e.jsx(lt, { size: 19 }), e.jsx("span", { children: "分享" })],
                            }),
                            e.jsxs("button", {
                                className: "yt-action",
                                onClick: () => l("已存到本地（模拟）"),
                                children: [e.jsx(Ja, { size: 19 }), e.jsx("span", { children: "下载" })],
                            }),
                            e.jsxs("button", {
                                className: `yt-action ${E ? "on" : ""}`,
                                onClick: () => u(s, a),
                                children: [
                                    e.jsx(ws, { size: 19 }),
                                    e.jsx("span", { children: E ? "已保存" : "保存" }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "yt-watch-owner",
                        children: [
                            e.jsxs("button", {
                                className: "btn-plain yt-watch-owner-main",
                                onClick: () => x.openChannel(s),
                                children: [
                                    e.jsx(ne, { src: Q(t, s), name: $(t, s), size: 40 }),
                                    e.jsxs("div", {
                                        children: [
                                            e.jsx("div", {
                                                className: "yt-watch-owner-name",
                                                children: $(t, s),
                                            }),
                                            e.jsx("div", {
                                                className: "yt-watch-owner-meta",
                                                children:
                                                    r.subscribers == null
                                                        ? "订阅数未生成"
                                                        : `${he(r.subscribers)} 位订阅者`,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            s !== "me" &&
                                e.jsx("button", {
                                    className: `yt-subscribe sm ${g ? "on" : ""}`,
                                    onClick: () => m(s),
                                    children: g
                                        ? e.jsxs(e.Fragment, {
                                              children: [
                                                  e.jsx(ot, { size: 15 }),
                                                  e.jsx("span", { children: "已订阅" }),
                                              ],
                                          })
                                        : e.jsx("span", { children: "订阅" }),
                                }),
                        ],
                    }),
                    e.jsx(An, {
                        ownerId: s,
                        video: d,
                        onGen: () => b.genReaction(s, d),
                        onStop: b.stop,
                        genBusy: b.busy,
                    }),
                    e.jsx("div", { className: "yt-sec-title", children: "接下来播放" }),
                    K.map((M) =>
                        e.jsx(
                            Be,
                            {
                                video: M,
                                compact: !0,
                                onOpen: () => x.push({ name: "watch", ownerId: M.ownerId, videoId: M.id }),
                            },
                            M.id,
                        ),
                    ),
                ],
            }),
            e.jsx(Yt, {
                open: I,
                onClose: () => w(!1),
                title: "简介",
                children: e.jsxs("div", {
                    className: "yt-desc-sheet",
                    children: [
                        e.jsx("div", { className: "yt-desc-title", children: d.title }),
                        e.jsxs("div", {
                            className: "yt-desc-stats",
                            children: [
                                e.jsxs("span", {
                                    children: [e.jsx("b", { children: he(d.views) }), "次观看"],
                                }),
                                e.jsxs("span", {
                                    children: [e.jsx("b", { children: he(d.likes || 0) }), "个赞"],
                                }),
                                e.jsxs("span", {
                                    children: [
                                        e.jsx("b", {
                                            children: new Date(d.createdAt).toLocaleDateString("zh-CN"),
                                        }),
                                        "发布",
                                    ],
                                }),
                            ],
                        }),
                        e.jsx("div", {
                            className: "yt-desc-body",
                            children: d.description
                                ? e.jsx(rs, { text: d.description })
                                : "这一期没有写简介。",
                        }),
                        s !== "me" &&
                            d.description &&
                            e.jsx($e, {
                                className: "yt-trans",
                                charId: ss(t, s),
                                text: d.description,
                                known: d.descriptionTr,
                                labels: ["翻译简介", "隐藏翻译"],
                            }),
                        oe.length > 0 &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx("div", { className: "yt-sec-title", children: "画面" }),
                                    oe.map((M, se) =>
                                        e.jsxs(
                                            "button",
                                            {
                                                className: "yt-chapter btn-plain",
                                                onClick: () => {
                                                    (j(M.at), w(!1), A(!0));
                                                },
                                                children: [
                                                    e.jsx("span", {
                                                        className: "yt-chapter-at",
                                                        children: Me(M.at),
                                                    }),
                                                    e.jsx("span", { children: M.shot }),
                                                ],
                                            },
                                            se,
                                        ),
                                    ),
                                ],
                            }),
                        (d.chapters || []).length > 0 &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx("div", { className: "yt-sec-title", children: "章节" }),
                                    d.chapters.map((M, se) =>
                                        e.jsxs(
                                            "button",
                                            {
                                                className: "yt-chapter btn-plain",
                                                onClick: () => {
                                                    (j(M.at), w(!1), A(!0));
                                                },
                                                children: [
                                                    e.jsx("span", {
                                                        className: "yt-chapter-at",
                                                        children: Me(M.at),
                                                    }),
                                                    e.jsx("span", { children: M.title }),
                                                ],
                                            },
                                            se,
                                        ),
                                    ),
                                ],
                            }),
                    ],
                }),
            }),
        ],
    });
}
const $n = [
    ["top", "最热"],
    ["new", "最新"],
];
function wt(s, a, t = "top") {
    const { state: n, tubeAppendComments: i, tubeUpdateVideo: m } = te(),
        [u, x] = o.useState(""),
        [l, b] = o.useState(null),
        r = o.useRef(null),
        d = As(),
        C = Ks({ value: u, setValue: x, candidates: d, inputRef: r, skin: "tube" }),
        p = Xs("tube");
    return {
        rows: o.useMemo(() => {
            const c = Tt(a.comments || []);
            return t !== "top"
                ? c
                : c
                      .filter((P) => P.depth === 0)
                      .sort((P, B) => (B.likes || 0) - (P.likes || 0))
                      .flatMap((P) => [P, ...c.filter((B) => B.depth === 1 && B.rootId === P.id)]);
        }, [a.comments, t]),
        txt: u,
        setTxt: x,
        replyTo: l,
        setReplyTo: b,
        inputRef: r,
        mention: C,
        send: () => {
            if (!u.trim()) return;
            const c = u.trim(),
                z = pe("yc_"),
                P = Js(c, d);
            (i(s, a.id, {
                id: z,
                name: $(n, "me"),
                text: c,
                author: "me",
                avatar: Q(n, "me"),
                replyToId: (l == null ? void 0 : l.id) || null,
                replyToName: (l == null ? void 0 : l.name) || null,
                ...(P.length ? { mentions: P } : null),
            }),
                x(""),
                b(null),
                P.length &&
                    p({
                        ids: P,
                        where: "comment",
                        userText: c,
                        target: {
                            ownerId: s,
                            ownerName: $(n, s),
                            owner: s === "me" ? "her" : "other",
                            text: [a.title, a.description].filter(Boolean).join(`
`),
                        },
                        thread: (a.comments || [])
                            .slice(-6)
                            .map((B) => `${B.author === "me" ? "她" : B.name}：${B.text}`),
                        nameOf: (B) => $(n, B),
                        onReply: (B, Y) =>
                            i(s, a.id, {
                                name: $(n, B),
                                text: Y,
                                author: "char",
                                charId: B,
                                avatar: Q(n, B),
                                replyToId: z,
                                replyToName: $(n, "me"),
                                createdAt: Date.now() + 6e4,
                            }),
                        onLike: (B) =>
                            m(s, a.id, (Y) => ({
                                comments: (Y.comments || []).map((L) =>
                                    L.id === z
                                        ? {
                                              ...L,
                                              likes: (L.likes || 0) + 1,
                                              likedBy: [...new Set([...(L.likedBy || []), B])],
                                          }
                                        : L,
                                ),
                            })),
                    }));
        },
        beginReply: (c) => {
            (b({ id: c.id, name: c.author === "me" ? "你" : c.name }), requestAnimationFrame(() => Ns(r)));
        },
    };
}
function An({ ownerId: s, video: a, onGen: t, onStop: n, genBusy: i }) {
    const m = ut(),
        u = ye(),
        { state: x, tubeRemoveComment: l } = te(),
        b = ve(),
        [r, d] = o.useState(null),
        [C, p] = o.useState("top"),
        [j, f] = o.useState({}),
        {
            rows: A,
            txt: c,
            replyTo: z,
            setReplyTo: P,
            inputRef: B,
            mention: Y,
            send: L,
            beginReply: I,
        } = wt(s, a, C),
        w = o.useContext(jt),
        [h, W] = o.useState(!1);
    He.useLayoutEffect(
        () => (w == null || w.setDocked(h), () => (w == null ? void 0 : w.setDocked(!1))),
        [h],
    );
    const N = () => {
            (W(!0), requestAnimationFrame(() => Ns(B)));
        },
        T = (g) => {
            (W(!0), I(g));
        },
        U = () => {
            c.trim() && (L(), W(!1));
        },
        D = () => {
            (P(null), W(!1));
        },
        O = h && (w == null ? void 0 : w.el),
        S = o.useMemo(() => {
            const g = new Map();
            return A.filter((E) => {
                if (E.depth === 0 || j[E.rootId]) return !0;
                const F = (g.get(E.rootId) || 0) + 1;
                return (g.set(E.rootId, F), F <= 2);
            });
        }, [A, j]);
    return e.jsxs("section", {
        className: "yt-comments-inline",
        children: [
            e.jsxs("div", {
                className: "yt-comments-bar",
                children: [
                    e.jsx("span", { className: "yt-comments-title", children: "评论" }),
                    e.jsx("b", { children: (a.comments || []).length }),
                    e.jsx("div", {
                        className: "yt-comments-sorts",
                        children: $n.map(([g, E]) =>
                            e.jsx(
                                "button",
                                {
                                    className: `yt-sort ${C === g ? "on" : ""}`,
                                    onClick: () => p(g),
                                    children: E,
                                },
                                g,
                            ),
                        ),
                    }),
                    e.jsx(sn, { busy: i, onRun: t, onStop: n, size: 18 }),
                ],
            }),
            !u.readOnly &&
                e.jsxs("button", {
                    type: "button",
                    className: "yt-comment-entry btn-plain",
                    onClick: N,
                    children: [
                        e.jsx(ne, { src: Q(x, u.v), name: $(x, u.v), size: 30 }),
                        e.jsx("span", { className: c ? "has" : "", children: c || "添加评论…" }),
                    ],
                }),
            O &&
                !u.readOnly &&
                qs.createPortal(
                    e.jsxs("div", {
                        className: "yt-dock",
                        children: [
                            Y.panel && e.jsx("div", { className: "yt-dock-mn", children: Y.panel }),
                            z &&
                                e.jsxs("div", {
                                    className: "yt-dock-reply",
                                    children: [
                                        e.jsxs("span", {
                                            children: ["回复 ", e.jsxs("b", { children: ["@", z.name] })],
                                        }),
                                        e.jsx("button", {
                                            className: "btn-plain",
                                            onClick: () => P(null),
                                            "aria-label": "取消回复",
                                            children: e.jsx(fe, { size: 14 }),
                                        }),
                                    ],
                                }),
                            e.jsxs("div", {
                                className: "yt-dock-row",
                                children: [
                                    e.jsx("button", {
                                        className: "yt-icon-btn",
                                        onClick: D,
                                        "aria-label": "收起",
                                        children: e.jsx(qe, { size: 20 }),
                                    }),
                                    e.jsx("input", {
                                        ref: B,
                                        value: c,
                                        ...Y.bind,
                                        onFocus: (g) => {
                                            const E = g.target.closest(".yt-shell");
                                            E && (E.scrollTop = 0);
                                        },
                                        onKeyDown: Y.keyDown((g) => {
                                            g.key === "Enter" && U();
                                        }),
                                        placeholder: z ? `回复 ${z.name}…` : "添加评论…",
                                    }),
                                    e.jsx("button", {
                                        className: "yt-icon-btn",
                                        onClick: Y.trigger,
                                        "aria-label": "提到别人",
                                        children: e.jsx(Ss, { size: 19 }),
                                    }),
                                    e.jsx("button", {
                                        className: "yt-icon-btn yt-dock-send",
                                        onClick: U,
                                        disabled: !c.trim(),
                                        "aria-label": "发送",
                                        children: e.jsx(ns, { size: 18 }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    w.el,
                ),
            A.length === 0
                ? e.jsx("div", {
                      className: "yt-empty-hint",
                      style: { padding: "22px 0 26px", textAlign: "center" },
                      children: "还没有人评论 · 写第一条，或让这期先扩散一轮",
                  })
                : S.map((g) => {
                      var E;
                      return e.jsxs(
                          He.Fragment,
                          {
                              children: [
                                  e.jsxs("div", {
                                      className: `yt-comment ${g.depth === 1 ? "is-reply" : ""}`,
                                      children: [
                                          e.jsx("button", {
                                              type: "button",
                                              className: "btn-plain yt-c-av",
                                              onClick: () => m(g),
                                              "aria-label": "打开频道",
                                              children: e.jsx(ne, {
                                                  src: es(x, g),
                                                  name: Ie(x, g).replace(/^@/, ""),
                                                  size: g.depth === 1 ? 26 : 30,
                                              }),
                                          }),
                                          e.jsxs("div", {
                                              className: "yt-comment-body",
                                              children: [
                                                  e.jsxs("div", {
                                                      className: "yt-comment-head",
                                                      children: [
                                                          e.jsx("span", {
                                                              className: "yt-comment-name",
                                                              children: Ie(x, g),
                                                          }),
                                                          ((g.author === "me" && s === "me") ||
                                                              (g.author === "char" &&
                                                                  g.charId === s &&
                                                                  !ge(g.acct))) &&
                                                              e.jsx("span", {
                                                                  className: "yt-c-owner",
                                                                  children: "Creator",
                                                              }),
                                                          e.jsx("span", {
                                                              className: "yt-comment-time",
                                                              children: ke(g.createdAt),
                                                          }),
                                                          e.jsx(ht, { onDelete: () => d(g) }),
                                                      ],
                                                  }),
                                                  e.jsxs("div", {
                                                      className: "yt-comment-text",
                                                      children: [
                                                          g.replyToName &&
                                                              e.jsxs("span", {
                                                                  className: "yt-comment-at",
                                                                  children: [$s(x, A, g), " "],
                                                              }),
                                                          e.jsx(rs, { text: g.text }),
                                                      ],
                                                  }),
                                                  g.author !== "me" &&
                                                      e.jsx($e, {
                                                          className: "yt-trans",
                                                          charId: g.author === "char" ? g.charId : null,
                                                          text: g.text,
                                                          known: g.tr,
                                                          labels: ["翻译成中文", "隐藏翻译"],
                                                      }),
                                                  (E = g.likedBy) != null && E.length
                                                      ? e.jsxs("div", {
                                                            className: "yt-comment-liked",
                                                            children: [
                                                                e.jsx(Oe, { size: 11 }),
                                                                g.likedBy.map((F) => $(x, F)).join("、"),
                                                                " 赞了",
                                                            ],
                                                        })
                                                      : null,
                                                  e.jsxs("div", {
                                                      className: "yt-comment-foot",
                                                      children: [
                                                          e.jsx(Oe, { size: 13 }),
                                                          e.jsx("span", { children: g.likes || 0 }),
                                                          e.jsx(Ms, { size: 13 }),
                                                          e.jsx("button", {
                                                              className: "btn-plain",
                                                              onClick: () => T(g),
                                                              children: "回复",
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  g.depth === 0 &&
                                      g.replyCount > 2 &&
                                      e.jsx("button", {
                                          className: "yt-comment-more btn-plain",
                                          onClick: () => f((F) => ({ ...F, [g.id]: !F[g.id] })),
                                          children: j[g.id] ? "收起回复" : `查看 ${g.replyCount} 条回复`,
                                      }),
                              ],
                          },
                          g.id,
                      );
                  }),
            e.jsx(vs, {
                open: !!r,
                onClose: () => d(null),
                title: "删除这条评论",
                message: r ? `${r.author === "me" ? "你" : r.name}：${String(r.text).slice(0, 40)}` : void 0,
                confirm: {
                    label: "删除",
                    destructive: !0,
                    onClick: () => {
                        (l(s, a.id, r.id),
                            b(r.replyCount > 0 ? "已删除；它下面的回复升成了独立评论" : "已删除"));
                    },
                },
            }),
        ],
    });
}
async function Tn(s, a) {
    const t = document.createElement("video");
    ((t.src = s),
        (t.muted = !0),
        (t.playsInline = !0),
        (t.preload = "auto"),
        await new Promise((b, r) => {
            ((t.onloadeddata = () => b()),
                (t.onerror = () => r(new Error("这段视频读不出来，换一个文件试试"))));
        }));
    const n = document.createElement("canvas"),
        i = t.videoWidth || 640,
        m = t.videoHeight || 360,
        u = Math.min(768, i);
    ((n.width = u), (n.height = Math.max(1, Math.round(u * (m / i)))));
    const x = n.getContext("2d"),
        l = [];
    for (const b of a)
        (await new Promise((r) => {
            ((t.onseeked = () => r()), (t.currentTime = Math.max(0, Math.min(b, (t.duration || 1) - 0.05))));
        }),
            x.drawImage(t, 0, 0, n.width, n.height),
            l.push(n.toDataURL("image/jpeg", 0.72)));
    return ((t.src = ""), l);
}
const bs = (s) => {
        const a = Math.max(0, Math.floor(Number(s) || 0));
        return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
    },
    zn = (s) => {
        const a = String(s || "").trim();
        if (!a) return 0;
        if (a.includes(":")) {
            const [t, n] = a.split(":");
            return Math.max(0, (Number(t) || 0) * 60 + (Number(n) || 0));
        }
        return Math.max(0, Number(a) || 0);
    };
function Gs({ value: s, max: a, onChange: t, className: n = "" }) {
    const [i, m] = o.useState(bs(s));
    return (
        o.useEffect(() => {
            m(bs(s));
        }, [s]),
        e.jsx("input", {
            className: `yc-clock ${n}`,
            inputMode: "numeric",
            value: i,
            onChange: (u) => m(u.target.value.replace(/[^\d:]/g, "").slice(0, 6)),
            onBlur: () => {
                const u = Math.min(a, Math.floor(zn(i)));
                (t(u), m(bs(u)));
            },
            "aria-label": "时间点（分:秒）",
        })
    );
}
function Rn({ open: s, onClose: a, onPublished: t, initialKind: n = "short" }) {
    const { state: i, tubeAppendVideo: m, tubeAppendComments: u, tubeUpdateVideo: x } = te(),
        l = ve(),
        b = Ae(),
        [r, d] = o.useState(n),
        C = r === "short",
        [p, j] = o.useState(""),
        [f, A] = o.useState(""),
        [c, z] = o.useState(""),
        [P, B] = o.useState(n === "short" ? 30 : 600),
        [Y, L] = o.useState([{ at: 0, shot: "" }]),
        [I, w] = o.useState([{ at: 0, title: "" }]),
        [h, W] = o.useState(null),
        [N, T] = o.useState(null),
        [U, D] = o.useState(!0),
        O = o.useRef(null),
        S = o.useRef(null),
        g = As(),
        E = Ks({ value: c, setValue: z, candidates: g, inputRef: S, skin: "tube" }),
        F = Xs("tube");
    o.useEffect(() => {
        if (s) {
            (d(n), B(n === "short" ? 30 : 600));
            return;
        }
        (j(""), A(""), z(""), L([{ at: 0, shot: "" }]), w([{ at: 0, title: "" }]), W(null), T(null));
    }, [s, n]);
    const ie = (R) => {
            R !== r && (d(R), h || B(R === "short" ? 30 : 600));
        },
        oe = async (R) => {
            var re;
            const y = (re = R.target.files) == null ? void 0 : re[0];
            if (((R.target.value = ""), !y)) return;
            const _ = URL.createObjectURL(y),
                q = document.createElement("video");
            ((q.src = _), (q.preload = "metadata"));
            const J = await new Promise((Ne) => {
                ((q.onloadedmetadata = () => Ne(Math.round(q.duration || 0))), (q.onerror = () => Ne(0)));
            });
            if (!J) {
                (l("无法读取该视频的时长，请更换文件。", "error"), URL.revokeObjectURL(_));
                return;
            }
            const Te = await Aa(y, { kind: "video", note: C ? "Tube 短视频" : "Tube 视频" });
            (W(Te),
                T(_),
                B(J),
                L(
                    [0, Math.round(J * 0.4), Math.round(J * 0.8)]
                        .filter((Ne, os, Ke) => Ke.indexOf(Ne) === os)
                        .map((Ne) => ({ at: Ne, shot: "" })),
                ),
                l(`已读取 ${Me(J)}。选好时间点后可读取画面。`));
        },
        v = async () => {
            if (!N) {
                l("请先上传视频。", "error");
                return;
            }
            const R = Y.map((_) => _.at);
            if (!R.length) {
                l("请先添加时间点。", "error");
                return;
            }
            const y = await b.run(async (_) => {
                const q = await Tn(N, R),
                    J = await De.describeFrames(i.api.youtube, i.api.chat, q, {
                        title: p,
                        hint: c,
                        signal: _,
                    });
                if (!J) throw new Error("识图没读出结果，已丢弃；不会自动重试");
                return J;
            });
            if (y != null && y.aborted) {
                l("已停止识图");
                return;
            }
            if (y != null && y.error) {
                l(y.error.message, "error");
                return;
            }
            y != null &&
                y.value &&
                (L((_) => _.map((q, J) => (y.value[J] ? { ...q, shot: y.value[J] } : q))),
                l("读取完成，可直接修改不准确的描述。"));
        },
        K = (R, y) => L((_) => _.map((q, J) => (J === R ? { ...q, ...y } : q))),
        V = () =>
            L((R) => {
                var y;
                return [
                    ...R,
                    {
                        at: Math.min(
                            P,
                            (((y = R[R.length - 1]) == null ? void 0 : y.at) || 0) + (C ? 5 : 60),
                        ),
                        shot: "",
                    },
                ];
            }),
        ee = (R) => L((y) => (y.length > 1 ? y.filter((_, q) => q !== R) : [{ at: 0, shot: "" }])),
        M = (R, y) => w((_) => _.map((q, J) => (J === R ? { ...q, ...y } : q))),
        se = () =>
            w((R) => {
                var y;
                return R.length >= 8
                    ? R
                    : [
                          ...R,
                          {
                              at: Math.min(P, (((y = R[R.length - 1]) == null ? void 0 : y.at) || 0) + 60),
                              title: "",
                          },
                      ];
            }),
        xe = (R) => w((y) => (y.length > 1 ? y.filter((_, q) => q !== R) : [{ at: 0, title: "" }])),
        H = async ({ react: R = !1 } = {}) => {
            if (!p.trim()) {
                l("请填写标题。", "error");
                return;
            }
            const y = pe("v_"),
                _ = Y.map((re) => ({
                    at: Math.max(0, Math.min(P, Math.floor(Number(re.at) || 0))),
                    shot: String(re.shot || "")
                        .trim()
                        .slice(0, 60),
                }))
                    .filter((re) => re.shot)
                    .sort((re, Ne) => re.at - Ne.at),
                q = C
                    ? []
                    : I.map((re) => ({
                          at: Math.max(0, Math.min(P, Math.floor(Number(re.at) || 0))),
                          title: String(re.title || "")
                              .trim()
                              .slice(0, 24),
                      }))
                          .filter((re) => re.title)
                          .sort((re, Ne) => re.at - Ne.at),
                J = {
                    id: y,
                    kind: C ? "short" : "video",
                    title: p.trim().slice(0, 100),
                    cover: f.trim().slice(0, 16),
                    duration: Math.max(1, Math.floor(P)),
                    description: c.trim().slice(0, 600),
                    chapters: q,
                    scenes: _,
                    mediaRef: h || null,
                    views: 0,
                    likes: 0,
                    comments: [],
                },
                Te = Js(
                    [J.title, J.description].join(`
`),
                    g,
                );
            (Te.length && (J.mentions = Te),
                m("me", J),
                !J.mediaRef && _.length && Je(i, x, "me", { ...J, createdAt: Date.now() }),
                a(),
                l("已发布"),
                Te.length &&
                    F({
                        ids: Te,
                        where: "post",
                        target: { owner: "her" },
                        userText: [
                            `标题：${J.title}`,
                            J.description && `简介：${J.description}`,
                            _.length ? `画面：${_.map((re) => re.shot).join(" / ")}` : "",
                        ].filter(Boolean).join(`
`),
                        nameOf: (re) => $(i, re),
                        onReply: (re, Ne) =>
                            u("me", y, {
                                name: $(i, re),
                                text: Ne,
                                author: "char",
                                charId: re,
                                avatar: Q(i, re),
                                createdAt: Date.now() + 6e4,
                            }),
                        onLike: () => x("me", y, (re) => ({ likes: (Number(re.likes) || 0) + 1 })),
                    }),
                R && (await b.genReaction("me", J)),
                t == null || t(y));
        },
        X = C ? 180 : 4 * 3600;
    return typeof document > "u"
        ? null
        : qs.createPortal(
              e.jsx(Qa, {
                  children:
                      s &&
                      e.jsxs(en.div, {
                          className: "ytc",
                          role: "dialog",
                          "aria-modal": "true",
                          "aria-label": "添加详细信息",
                          initial: { y: "100%" },
                          animate: { y: 0 },
                          exit: { y: "100%" },
                          transition: { type: "spring", damping: 36, stiffness: 380 },
                          children: [
                              e.jsxs("header", {
                                  className: "ytc-bar",
                                  children: [
                                      e.jsx("button", {
                                          type: "button",
                                          className: "yt-icon-btn",
                                          onClick: a,
                                          "aria-label": "关闭",
                                          children: e.jsx(fe, { size: 22 }),
                                      }),
                                      e.jsx("b", { children: "添加详细信息" }),
                                  ],
                              }),
                              e.jsxs("div", {
                                  className: "ytc-scroll",
                                  children: [
                                      e.jsxs("div", {
                                          className: `ytc-preview${C ? " is-short" : ""}`,
                                          children: [
                                              N
                                                  ? e.jsx("video", {
                                                        src: N,
                                                        muted: !0,
                                                        playsInline: !0,
                                                        loop: !0,
                                                        autoPlay: !0,
                                                        className: "ytc-video",
                                                    })
                                                  : e.jsx("div", {
                                                        className: "ytc-cover",
                                                        style: { background: xt(cs(p || "new")) },
                                                        children: f
                                                            ? e.jsx("span", { children: f })
                                                            : e.jsx(Qe, { size: 28, strokeWidth: 1.4 }),
                                                    }),
                                              e.jsx("button", {
                                                  type: "button",
                                                  className: "btn-plain ytc-upload",
                                                  onClick: () => {
                                                      var R;
                                                      return (R = O.current) == null ? void 0 : R.click();
                                                  },
                                                  children: h ? "更换视频" : "上传视频",
                                              }),
                                              e.jsx("span", { className: "yt-dur", children: Me(P) }),
                                          ],
                                      }),
                                      e.jsx("input", {
                                          ref: O,
                                          type: "file",
                                          accept: "video/*",
                                          hidden: !0,
                                          onChange: oe,
                                      }),
                                      e.jsx("div", {
                                          className: "ytc-seg",
                                          role: "tablist",
                                          children: [
                                              ["short", "短视频"],
                                              ["video", "视频"],
                                          ].map(([R, y]) =>
                                              e.jsx(
                                                  "button",
                                                  {
                                                      role: "tab",
                                                      "aria-selected": r === R,
                                                      className: `btn-plain ${r === R ? "on" : ""}`,
                                                      onClick: () => ie(R),
                                                      children: y,
                                                  },
                                                  R,
                                              ),
                                          ),
                                      }),
                                      e.jsx("input", {
                                          className: "ytc-title",
                                          value: p,
                                          maxLength: 100,
                                          onChange: (R) => j(R.target.value),
                                          placeholder: "创建标题",
                                      }),
                                      e.jsxs("div", {
                                          className: "ytc-desc",
                                          children: [
                                              e.jsx("textarea", {
                                                  ref: S,
                                                  rows: 2,
                                                  value: c,
                                                  ...E.bind,
                                                  onKeyDown: E.keyDown(),
                                                  placeholder: "添加描述",
                                              }),
                                              e.jsx("button", {
                                                  type: "button",
                                                  className: "btn-plain ytc-at",
                                                  onClick: E.trigger,
                                                  "aria-label": "提到别人",
                                                  children: e.jsx(Ss, { size: 16 }),
                                              }),
                                          ],
                                      }),
                                      E.panel && e.jsx("div", { className: "yc-mn", children: E.panel }),
                                      e.jsx("div", { className: "ytc-h", children: "详细信息" }),
                                      e.jsxs("div", {
                                          className: "ytc-group",
                                          children: [
                                              e.jsxs("label", {
                                                  className: "ytc-row",
                                                  children: [
                                                      e.jsx("span", { children: "封面文字" }),
                                                      e.jsx("input", {
                                                          value: f,
                                                          maxLength: 16,
                                                          onChange: (R) => A(R.target.value),
                                                          placeholder: "选填",
                                                      }),
                                                  ],
                                              }),
                                              e.jsxs("label", {
                                                  className: "ytc-row",
                                                  children: [
                                                      e.jsx("span", { children: "时长" }),
                                                      C
                                                          ? e.jsx("input", {
                                                                inputMode: "numeric",
                                                                value: String(P),
                                                                disabled: !!h,
                                                                onChange: (R) =>
                                                                    B(
                                                                        Math.max(
                                                                            1,
                                                                            Math.min(
                                                                                X,
                                                                                Math.floor(
                                                                                    Number(
                                                                                        R.target.value.replace(
                                                                                            /\D/g,
                                                                                            "",
                                                                                        ),
                                                                                    ) || 0,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    ),
                                                            })
                                                          : e.jsx("input", {
                                                                inputMode: "numeric",
                                                                value: String(
                                                                    Math.max(1, Math.round(P / 60)),
                                                                ),
                                                                disabled: !!h,
                                                                onChange: (R) =>
                                                                    B(
                                                                        Math.max(
                                                                            60,
                                                                            Math.min(
                                                                                X,
                                                                                Math.floor(
                                                                                    Number(
                                                                                        R.target.value.replace(
                                                                                            /\D/g,
                                                                                            "",
                                                                                        ),
                                                                                    ) || 1,
                                                                                ) * 60,
                                                                            ),
                                                                        ),
                                                                    ),
                                                            }),
                                                      e.jsx("em", { children: C ? "秒" : "分钟" }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      e.jsx("p", {
                                          className: "ytc-note",
                                          children: h
                                              ? "时长按已上传视频计算。"
                                              : C
                                                ? "短视频时长为 1–180 秒。"
                                                : "上传视频后按实际时长计算。",
                                      }),
                                      !C &&
                                          e.jsxs(e.Fragment, {
                                              children: [
                                                  e.jsxs("div", {
                                                      className: "ytc-h",
                                                      children: [
                                                          "章节",
                                                          e.jsx("span", { children: "选填 · 最多 8 个" }),
                                                      ],
                                                  }),
                                                  e.jsxs("div", {
                                                      className: "ytc-group",
                                                      children: [
                                                          I.map((R, y) =>
                                                              e.jsxs(
                                                                  "div",
                                                                  {
                                                                      className: "yc-line",
                                                                      children: [
                                                                          e.jsx(Gs, {
                                                                              value: R.at,
                                                                              max: P,
                                                                              onChange: (_) =>
                                                                                  M(y, { at: _ }),
                                                                          }),
                                                                          e.jsx("input", {
                                                                              className: "yc-line-text",
                                                                              value: R.title,
                                                                              maxLength: 24,
                                                                              onChange: (_) =>
                                                                                  M(y, {
                                                                                      title: _.target.value,
                                                                                  }),
                                                                              placeholder: "章节标题",
                                                                          }),
                                                                          e.jsx("button", {
                                                                              className: "btn-plain yc-x",
                                                                              onClick: () => xe(y),
                                                                              "aria-label": "删除这一章",
                                                                              children: e.jsx(fe, {
                                                                                  size: 15,
                                                                              }),
                                                                          }),
                                                                      ],
                                                                  },
                                                                  y,
                                                              ),
                                                          ),
                                                          I.length < 8 &&
                                                              e.jsxs("button", {
                                                                  className: "btn-plain yc-add",
                                                                  onClick: se,
                                                                  children: [
                                                                      e.jsx(Ue, { size: 15 }),
                                                                      "添加章节",
                                                                  ],
                                                              }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      e.jsxs("div", {
                                          className: "ytc-h",
                                          children: [
                                              "画面",
                                              h &&
                                                  e.jsx("button", {
                                                      type: "button",
                                                      className: `btn-plain ytc-hact ${b.busy ? "is-busy" : ""}`,
                                                      onClick: () => (b.busy ? b.stop() : v()),
                                                      children: b.busy
                                                          ? e.jsxs(e.Fragment, {
                                                                children: [e.jsx(Re, { size: 13 }), "停止"],
                                                            })
                                                          : e.jsxs(e.Fragment, {
                                                                children: [
                                                                    e.jsx(gs, { size: 13 }),
                                                                    "读取这几帧",
                                                                ],
                                                            }),
                                                  }),
                                          ],
                                      }),
                                      e.jsxs("div", {
                                          className: "ytc-group",
                                          children: [
                                              Y.map((R, y) =>
                                                  e.jsxs(
                                                      "div",
                                                      {
                                                          className: "yc-line",
                                                          children: [
                                                              e.jsx(Gs, {
                                                                  value: R.at,
                                                                  max: P,
                                                                  onChange: (_) => K(y, { at: _ }),
                                                              }),
                                                              e.jsx("input", {
                                                                  className: "yc-line-text",
                                                                  value: R.shot,
                                                                  maxLength: 60,
                                                                  onChange: (_) =>
                                                                      K(y, { shot: _.target.value }),
                                                                  placeholder: "这一时刻画面中的内容",
                                                              }),
                                                              e.jsx("button", {
                                                                  className: "btn-plain yc-x",
                                                                  onClick: () => ee(y),
                                                                  "aria-label": "删除这一条",
                                                                  children: e.jsx(fe, { size: 15 }),
                                                              }),
                                                          ],
                                                      },
                                                      y,
                                                  ),
                                              ),
                                              e.jsxs("button", {
                                                  className: "btn-plain yc-add",
                                                  onClick: V,
                                                  children: [e.jsx(Ue, { size: 15 }), "添加时间点"],
                                              }),
                                          ],
                                      }),
                                      e.jsx("p", {
                                          className: "ytc-note",
                                          children: h
                                              ? "识图只运行一次并保存结果，不准确时可直接修改。"
                                              : "未上传视频时，观众看到的画面即为以上文字。",
                                      }),
                                  ],
                              }),
                              e.jsxs("footer", {
                                  className: "ytc-foot",
                                  children: [
                                      e.jsxs("label", {
                                          className: "ytc-switch",
                                          children: [
                                              e.jsx("input", {
                                                  type: "checkbox",
                                                  checked: U,
                                                  onChange: (R) => D(R.target.checked),
                                              }),
                                              e.jsx("i", { "aria-hidden": "true" }),
                                              e.jsx("span", { children: "发布后生成一轮互动" }),
                                          ],
                                      }),
                                      e.jsx("button", {
                                          type: "button",
                                          className: "btn-plain ytc-post",
                                          disabled: !p.trim(),
                                          onClick: () => H({ react: U }),
                                          children: "发布",
                                      }),
                                  ],
                              }),
                          ],
                      }),
              }),
              document.body,
          );
}
const Ln = 25e3;
function On({ charId: s, archiveId: a }) {
    var zs, Rs;
    const { state: t, tubeSetLive: n, tubeAppendLiveChat: i, tubeEndLive: m, tubeRemoveLiveChat: u } = te(),
        x = ue(),
        l = ve(),
        b = Ae(),
        r = b.busy,
        [d, C] = o.useState(""),
        [p, j] = o.useState(null),
        [f, A] = o.useState(!0),
        [c, z] = o.useState(""),
        [P, B] = o.useState(!1),
        [Y, L] = o.useState(!1),
        [I, w] = o.useState(30),
        [h, W] = o.useState([]),
        [N, T] = o.useState(0),
        U = o.useRef(null),
        D = a ? (t.youtube.lives || []).find((k) => k.id === a) : null,
        O = !D && ((zs = t.youtube.live) == null ? void 0 : zs.charId) === s ? t.youtube.live : null,
        S = D || O,
        g = s === "me",
        E = t.characters.find((k) => k.id === s),
        F = !D && t.youtube.live && t.youtube.live.charId !== s ? t.youtube.live : null,
        [ie, oe] = o.useState(""),
        [v, K] = o.useState(""),
        V = o.useMemo(
            () =>
                t.characters.slice(0, 6).map((k) => {
                    const G = ze(t, k);
                    return {
                        id: k.id,
                        name: G.name,
                        persona: G.persona,
                        relation: G.relation,
                        mood: G.mood,
                        memory: [...G.moments, ...G.living].join("；"),
                    };
                }),
            [t],
        ),
        ee = (S == null ? void 0 : S.chat) || [],
        M = Gt(
            o.useMemo(() => ee.flatMap((k) => [k.text, k.shot].filter(Boolean)), [ee]),
            s,
        ),
        se = o.useMemo(() => [...ee].reverse().find((k) => k.author === "host") || null, [ee]),
        xe = (se == null ? void 0 : se.text) || "",
        H = o.useMemo(() => {
            var k;
            return (
                ((k = [...ee].reverse().find((G) => G.shot)) == null ? void 0 : k.shot) ||
                (S == null ? void 0 : S.shot) ||
                ""
            );
        }, [ee, S == null ? void 0 : S.shot]);
    (o.useEffect(() => {
        const k = U.current;
        k && (k.scrollTop = k.scrollHeight);
    }, [ee.length]),
        o.useEffect(() => {
            if (!O) return;
            const k = setInterval(
                () => T(Math.round((Math.random() - 0.45) * Math.max(2, O.viewers * 0.03))),
                4e3,
            );
            return () => clearInterval(k);
        }, [O == null ? void 0 : O.viewers]));
    const X = o.useCallback(() => (E ? ze(t, E) : null), [t, E]),
        R = async () => {
            if (!b.laneReady) {
                l("先在 API 设置里配好聊天或 Tube 通道", "error");
                return;
            }
            if (t.youtube.live) {
                l("已经有一场直播在进行，先下播", "error");
                return;
            }
            if (!ie.trim()) {
                l("先给直播间起个标题", "error");
                return;
            }
            const k = await b.run(async (G) => {
                const ce = de(t, "me"),
                    Se = await b.call(
                        Ta({
                            meName: $(t, "me"),
                            meBio: ce.about || t.me.signature || "",
                            subscribers: ce.subscribers || 0,
                            direction: ce.direction || "",
                            title: ie.trim(),
                            category: v.trim(),
                            hint: c,
                            chars: V,
                        }),
                        G,
                    ),
                    le = za(Ce(Se.content), { allowedCharIds: V.map((Z) => Z.id) });
                if (!le) throw new Error("开播结果格式不合格，已丢弃；不会为修格式二次调用");
                const ae = Date.now();
                return (
                    n({
                        id: pe("live_"),
                        hostKind: "me",
                        charId: "me",
                        title: ie.trim(),
                        category: v.trim() || "直播",
                        startedAt: ae,
                        viewers: le.viewers,
                        peakViewers: le.viewers,
                        likes: 0,
                        status: "live",
                        hint: c,
                        participants: le.charComments.map((Z) => Z.charId),
                        chat: [
                            {
                                id: pe("lc_"),
                                at: ae,
                                author: "system",
                                name: "",
                                text: `${$(t, "me")} 开始了直播`,
                            },
                            ...le.chat.map((Z, me) => ({
                                id: pe("lc_"),
                                at: ae + me,
                                author: "ai",
                                name: Z.name,
                                text: Z.text,
                            })),
                            ...le.charComments.map((Z, me) => ({
                                id: pe("lc_"),
                                at: ae + 50 + me,
                                author: "char",
                                charId: Z.charId,
                                name: $(t, Z.charId),
                                text: Z.text,
                            })),
                        ],
                    }),
                    z(""),
                    !0
                );
            });
            b.settle(k, "开播了");
        },
        y = async () => {
            if (g) {
                await R();
                return;
            }
            if (!E) return;
            if (!b.laneReady) {
                l("先在 API 设置里配好聊天或 Tube 通道", "error");
                return;
            }
            if (t.youtube.live) {
                l("已经有一场直播在进行，先下播", "error");
                return;
            }
            const k = await b.run(async (G) => {
                if (de(t, s).subscribers == null)
                    try {
                        await b.genChannelWith(s, G);
                    } catch (Z) {
                        if ((Z == null ? void 0 : Z.name) === "AbortError") throw Z;
                    }
                const Se = await b.call(Ma(X(), { hint: c }), G),
                    le = $a(Ce(Se.content));
                if (!le) throw new Error("开播结果格式不合格，已丢弃；不会为修格式二次调用");
                const ae = Date.now();
                return (
                    n({
                        id: pe("live_"),
                        charId: s,
                        title: le.title,
                        category: le.category,
                        startedAt: ae,
                        viewers: le.viewers,
                        peakViewers: le.viewers,
                        likes: 0,
                        status: "live",
                        hint: c,
                        shot: le.shot,
                        chat: [
                            {
                                id: pe("lc_"),
                                at: ae,
                                author: "system",
                                name: "",
                                text: `${$(t, s)} 开始了直播`,
                            },
                            {
                                id: pe("lc_"),
                                at: ae,
                                author: "host",
                                name: $(t, s),
                                text: le.opening,
                                shot: le.shot,
                            },
                            ...le.chat.map((Z, me) => ({
                                id: pe("lc_"),
                                at: ae + me,
                                author: "ai",
                                name: Z.name,
                                text: Z.text,
                            })),
                        ],
                    }),
                    z(""),
                    Is(t, E, le.opening, { scene: "live", toast: l }),
                    !0
                );
            });
            b.settle(k, "开播了");
        },
        _ = async ({ silent: k = !1 } = {}) => {
            const G = t.youtube.live;
            if (!G) return;
            let ce = null,
                Se = null;
            const le = await b.run(async (ae) => {
                if (G.hostKind === "me") {
                    const me = (G.participants || []).filter((Ve) => t.characters.some((us) => us.id === Ve));
                    if (!me.length) return null;
                    const Ls = {};
                    let ds = null;
                    for (const Ve of me.slice(0, 4)) {
                        const us = t.characters.find((Mt) => Mt.id === Ve),
                            St = await b.call(
                                Fs(ze(t, us), {
                                    live: G,
                                    transcript: G.chat || [],
                                    hostIsUser: !0,
                                    charName: $(t, Ve),
                                }),
                                ae,
                            ),
                            hs = Vs(Ce(St.content));
                        hs && ((Ls[Ve] = hs.line), (ds = ds || hs));
                    }
                    return ((Se = Ls), ds);
                }
                const Z = await b.call(Fs(X(), { live: G, transcript: G.chat || [] }), ae);
                return Vs(Ce(Z.content));
            });
            (le != null && le.value && (ce = le.value),
                m({
                    memoryLine: (ce == null ? void 0 : ce.line) || "",
                    highlight: (ce == null ? void 0 : ce.highlight) || "",
                    ...(Se ? { memoryLines: Se } : {}),
                }),
                k ||
                    l(
                        ce
                            ? "已下播，这场进了记忆"
                            : le != null && le.aborted
                              ? "已下播；总结被中止，这场没进记忆"
                              : G.hostKind === "me" && !(G.participants || []).length
                                ? "已下播；没有角色来过，这场不进任何人的记忆"
                                : "已下播；总结失败，这场没进记忆",
                    ),
                x.pop());
        },
        q = o.useCallback(
            async (k = "") => {
                const G = t.youtube.live;
                if (!G || G.hostKind !== "me") return;
                const ce = await b.run(async (Se) => {
                    const le = await b.call(
                            qt({
                                meName: $(t, "me"),
                                live: G,
                                recentChat: G.chat || [],
                                userLine: k,
                                userShot: G.shot || "",
                                chars: V,
                            }),
                            Se,
                        ),
                        ae = Kt(Ce(le.content), { allowedCharIds: V.map((Z) => Z.id) });
                    if (!ae) throw new Error("这一段格式不合格，已丢弃；不会为修格式二次调用");
                    return (
                        i([
                            ...ae.chat.map((Z) => ({ author: "ai", name: Z.name, text: Z.text })),
                            ...ae.charComments.map((Z) => ({
                                author: "char",
                                charId: Z.charId,
                                name: $(t, Z.charId),
                                text: Z.text,
                            })),
                            ...ae.superchat.map((Z) => ({
                                author: "sc",
                                name: Z.name,
                                text: Z.text,
                                amount: Z.amount,
                            })),
                        ]),
                        n(
                            (Z) =>
                                Z && {
                                    ...Z,
                                    viewers: ae.viewers,
                                    peakViewers: Math.max(Z.peakViewers || 0, ae.viewers),
                                    participants: [
                                        ...new Set([
                                            ...(Z.participants || []),
                                            ...ae.charComments.map((me) => me.charId),
                                        ]),
                                    ],
                                },
                        ),
                        !1
                    );
                });
                ce != null && ce.error && l(ce.error.message, "error");
            },
            [t.youtube.live, b, t, V, i, n, l],
        ),
        J = o.useCallback(
            async (k = "") => {
                if (g) {
                    await q(k);
                    return;
                }
                const G = t.youtube.live;
                if (!G || G.charId !== s) return;
                const ce = await b.run(async (Se) => {
                    const le = await b.call(
                            Xt(X(), { live: G, recentChat: G.chat || [], userLine: k, userName: $(t, "me") }),
                            Se,
                        ),
                        ae = Jt(Ce(le.content));
                    if (!ae) throw new Error("直播推进结果格式不合格，已丢弃；不会为修格式二次调用");
                    const Z = [
                        { author: "host", name: $(t, s), text: ae.say, shot: ae.shot, readUser: ae.readUser },
                        ...ae.chat.map((me) => ({ author: "ai", name: me.name, text: me.text })),
                        ...ae.superchat.map((me) => ({
                            author: "sc",
                            name: me.name,
                            text: me.text,
                            amount: me.amount,
                        })),
                    ];
                    return (
                        i(Z),
                        E && Is(t, E, ae.say, { scene: "live", toast: l }),
                        n(
                            (me) =>
                                me && {
                                    ...me,
                                    viewers: ae.viewers,
                                    peakViewers: Math.max(me.peakViewers || 0, ae.viewers),
                                    shot: ae.shot || me.shot,
                                },
                        ),
                        ae.ended
                    );
                });
                if (ce != null && ce.error) {
                    l(ce.error.message, "error");
                    return;
                }
                (ce == null ? void 0 : ce.value) === !0 && (await _({ silent: !1 }));
            },
            [t.youtube.live, s, g, q, b, X, t, i, n, l],
        );
    o.useEffect(() => {
        if (!O || !f) return;
        const k = setInterval(() => {
            b.busy || J("");
        }, Ln);
        return () => clearInterval(k);
    }, [O == null ? void 0 : O.id, f, J, b.busy]);
    const Te = () => {
            const k = d.trim();
            if (!(!k || !O)) {
                if (g) {
                    (i({ author: "host", name: $(t, "me"), text: k }), C(""), J(k));
                    return;
                }
                (i({ author: "me", name: $(t, "me"), text: k }), C(""), J(k));
            }
        },
        re = () => {
            const k = d.trim() || "加油";
            O &&
                (i({ author: "me-sc", name: $(t, "me"), text: k, amount: I }),
                C(""),
                L(!1),
                J(`${k}（付费留言 ¥${I}）`));
        },
        Ne = () => {
            const k = pe("h_");
            (W((G) => [...G.slice(-8), { id: k, left: 8 + Math.random() * 40 }]),
                setTimeout(() => W((G) => G.filter((ce) => ce.id !== k)), 1400),
                n((G) => G && { ...G, likes: (G.likes || 0) + 1 }));
        };
    if (!E && !g)
        return e.jsxs(e.Fragment, {
            children: [e.jsx(we, { title: "直播" }), e.jsx(je, { title: "这个角色不在了" })],
        });
    if (!S)
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(we, { title: "开一场直播" }),
                e.jsx("div", {
                    className: "yt-scroll",
                    children: e.jsxs("div", {
                        className: "yt-live-setup",
                        children: [
                            e.jsx(ne, { src: Q(t, s), name: $(t, s), size: 80 }),
                            e.jsx("div", { className: "yt-live-setup-name", children: $(t, s) }),
                            e.jsxs("div", { className: "yt-live-setup-handle", children: ["@", be(t, s)] }),
                            e.jsx("p", {
                                className: "yt-live-setup-note",
                                children: g
                                    ? "你是主播。你打的每一句都是对着镜头说的，模型只生成你面对的那一屋子人 —— 弹幕、付费留言、在线人数。应用内的角色会自己决定要不要来、要不要在公开弹幕区说话。下播时只给来过的人写记忆。"
                                    : "开播之后主播会按自己的节奏往下播，你发的弹幕会混进弹幕流里 —— 被不被读到由他决定。下播时这一场会压成一条记录进入长期记忆。",
                            }),
                            g &&
                                e.jsxs("div", {
                                    className: "ios-list",
                                    style: { width: "100%", marginTop: 16 },
                                    children: [
                                        e.jsx(Es, {
                                            label: "标题",
                                            children: e.jsx(Ws, {
                                                value: ie,
                                                onChange: oe,
                                                placeholder: "直播间标题",
                                            }),
                                        }),
                                        e.jsx(Es, {
                                            label: "类型",
                                            children: e.jsx(Ws, {
                                                value: v,
                                                onChange: K,
                                                placeholder: "日常 / 游戏 / 学习…",
                                            }),
                                        }),
                                    ],
                                }),
                            F &&
                                e.jsxs("div", {
                                    className: "yt-live-setup-warn",
                                    children: [$(t, F.charId), " 正在直播中，同一时间只能有一场。"],
                                }),
                            e.jsx("textarea", {
                                className: "yt-live-hint",
                                rows: 2,
                                value: c,
                                onChange: (k) => z(k.target.value),
                                placeholder: g
                                    ? "这场想播什么？给观众一点背景，可留空"
                                    : "想让他播点什么？留空就按他自己此刻的状态来",
                            }),
                            e.jsxs("button", {
                                className: `yt-primary ${r ? "is-busy" : ""}`,
                                onClick: r ? b.stop : y,
                                disabled: !r && !!F,
                                children: [
                                    r ? e.jsx(Re, { size: 17 }) : e.jsx(Ze, { size: 17 }),
                                    e.jsx("span", { children: r ? "停止连接" : "开始直播" }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        });
    const os = Math.max(0, (S.viewers || 0) + (O ? N : 0)),
        Ke = Math.max(1, Math.round((((D == null ? void 0 : D.endedAt) || Date.now()) - S.startedAt) / 6e4));
    return e.jsxs("div", {
        className: "yt-live-page",
        children: [
            e.jsxs("header", {
                className: "yt-live-head",
                children: [
                    e.jsx("button", {
                        className: "yt-icon-btn",
                        onClick: x.pop,
                        "aria-label": "返回",
                        children: e.jsx(Ge, { size: 24 }),
                    }),
                    e.jsxs("button", {
                        className: "yt-live-account btn-plain",
                        onClick: () => x.openChannel(s),
                        children: [
                            e.jsx(ne, { src: Q(t, s), name: $(t, s), size: 40 }),
                            e.jsxs("div", {
                                className: "yt-live-account-copy",
                                children: [
                                    e.jsxs("div", {
                                        className: "yt-live-account-name",
                                        children: [
                                            $(t, s),
                                            O &&
                                                e.jsxs("span", {
                                                    className: "yt-badge-live sm",
                                                    children: [
                                                        e.jsx("span", { className: "yt-live-dot" }),
                                                        "LIVE",
                                                    ],
                                                }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "yt-live-account-meta",
                                        children: [
                                            "@",
                                            be(t, s),
                                            " · ",
                                            he(de(t, s).subscribers || 0),
                                            " 位订阅者",
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx("button", {
                        className: "yt-icon-btn",
                        onClick: () => B(!0),
                        "aria-label": "更多",
                        children: e.jsx(Le, { size: 20 }),
                    }),
                ],
            }),
            e.jsx("div", {
                className: "yt-live-stage-wrap",
                children: e.jsxs("div", {
                    className: "yt-live-stage",
                    onClick: Ne,
                    children: [
                        e.jsx("div", {
                            className: "yt-live-stage-bg",
                            style: {
                                background: `linear-gradient(${cs(S.id).angle}deg, #0c0c0c, #2a2a2a 55%, #101010)`,
                            },
                        }),
                        e.jsxs("div", {
                            className: "yt-live-stage-top",
                            children: [
                                O
                                    ? e.jsxs("span", {
                                          className: "yt-badge-live",
                                          children: [e.jsx("span", { className: "yt-live-dot" }), "LIVE"],
                                      })
                                    : e.jsx("span", { className: "yt-badge-live ended", children: "已结束" }),
                                e.jsxs("span", {
                                    className: "yt-live-stage-count",
                                    children: [e.jsx(Za, { size: 12 }), he(os)],
                                }),
                                e.jsxs("span", { className: "yt-live-stage-count", children: [Ke, " 分钟"] }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "yt-live-stage-title",
                            children: [S.title, e.jsx("small", { children: S.category })],
                        }),
                        e.jsxs("div", {
                            className: "yt-live-stage-body",
                            onClick: (k) => k.stopPropagation(),
                            children: [
                                H &&
                                    e.jsxs(
                                        "div",
                                        {
                                            className: "yt-live-frame",
                                            children: [
                                                e.jsxs("span", {
                                                    className: "yt-live-frame-tag",
                                                    children: [e.jsx(gs, { size: 12 }), "画面"],
                                                }),
                                                e.jsx("p", { children: H }),
                                            ],
                                        },
                                        H,
                                    ),
                                xe && e.jsx("div", { className: "yt-live-caption", children: xe }),
                                M.trOf(xe) &&
                                    e.jsx("div", { className: "yt-live-tr on-stage", children: M.trOf(xe) }),
                            ],
                        }),
                        r &&
                            e.jsxs("div", {
                                className: "yt-live-typing",
                                children: [e.jsx("span", {}), e.jsx("span", {}), e.jsx("span", {})],
                            }),
                        h.map((k) =>
                            e.jsx(
                                "span",
                                {
                                    className: "yt-live-heart",
                                    style: { right: `${k.left}px` },
                                    children: "♥",
                                },
                                k.id,
                            ),
                        ),
                        e.jsxs("div", {
                            className: "yt-live-stage-foot",
                            children: [
                                e.jsxs("span", { children: [he(S.likes || 0), " 个赞 · 点画面点赞"] }),
                                O &&
                                    e.jsx("button", {
                                        className: `yt-live-auto ${f ? "on" : ""}`,
                                        onClick: (k) => {
                                            (k.stopPropagation(), A((G) => !G));
                                        },
                                        children: f ? "自动推进中" : "已暂停",
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            e.jsxs("div", {
                className: "yt-live-chat",
                ref: U,
                children: [
                    e.jsxs("div", {
                        className: "yt-live-chat-head",
                        children: [
                            "实时聊天",
                            M.any &&
                                e.jsx("button", {
                                    className: "yt-live-trbtn btn-plain",
                                    onClick: M.toggle,
                                    disabled: M.busy,
                                    children: M.busy ? "翻译中…" : M.on ? "收起翻译" : "翻译",
                                }),
                        ],
                    }),
                    ee.map((k) =>
                        k.author === "system"
                            ? e.jsx("div", { className: "yt-live-sys", children: k.text }, k.id)
                            : k.author === "host"
                              ? e.jsxs(
                                    "div",
                                    {
                                        className: "yt-live-msg host",
                                        children: [
                                            e.jsx(ne, { src: Q(t, s), name: k.name, size: 22 }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsxs("span", {
                                                        className: "yt-live-name host",
                                                        children: [
                                                            k.name,
                                                            e.jsx("span", {
                                                                className: "yt-live-owner-tag",
                                                                children: "主播",
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx("span", {
                                                        className: "yt-live-text",
                                                        children: k.text,
                                                    }),
                                                    M.trOf(k.text) &&
                                                        e.jsx("span", {
                                                            className: "yt-live-tr",
                                                            children: M.trOf(k.text),
                                                        }),
                                                    k.shot &&
                                                        e.jsxs("span", {
                                                            className: "yt-live-inline-shot",
                                                            children: ["画面：", k.shot],
                                                        }),
                                                    k.readUser &&
                                                        e.jsx("span", {
                                                            className: "yt-live-read",
                                                            children: "读到了你的弹幕",
                                                        }),
                                                ],
                                            }),
                                            O &&
                                                e.jsx("button", {
                                                    className: "yt-live-drop",
                                                    onClick: () => j(k),
                                                    "aria-label": "删除这条",
                                                    children: e.jsx(fe, { size: 13 }),
                                                }),
                                        ],
                                    },
                                    k.id,
                                )
                              : k.author === "sc" || k.author === "me-sc"
                                ? e.jsxs(
                                      "div",
                                      {
                                          className: "yt-live-sc",
                                          children: [
                                              e.jsxs("div", {
                                                  className: "yt-live-sc-head",
                                                  children: [
                                                      e.jsx("b", {
                                                          children: k.author === "me-sc" ? "你" : k.name,
                                                      }),
                                                      e.jsxs("span", { children: ["¥", k.amount] }),
                                                      O &&
                                                          e.jsx("button", {
                                                              className: "yt-live-drop on-sc",
                                                              onClick: () => j(k),
                                                              "aria-label": "删除这条",
                                                              children: e.jsx(fe, { size: 13 }),
                                                          }),
                                                  ],
                                              }),
                                              e.jsx("div", {
                                                  className: "yt-live-sc-text",
                                                  children: k.text,
                                              }),
                                              M.trOf(k.text) &&
                                                  e.jsx("div", {
                                                      className: "yt-live-tr",
                                                      children: M.trOf(k.text),
                                                  }),
                                          ],
                                      },
                                      k.id,
                                  )
                                : e.jsxs(
                                      "div",
                                      {
                                          className: `yt-live-msg ${k.author === "me" ? "me" : ""}`,
                                          children: [
                                              e.jsx(ne, {
                                                  src: k.author === "me" ? Q(t, "me") : null,
                                                  name: k.name,
                                                  size: 22,
                                              }),
                                              e.jsxs("div", {
                                                  children: [
                                                      e.jsx("span", {
                                                          className: `yt-live-name ${k.author === "me" ? "me" : ""}`,
                                                          children: k.author === "me" ? "你" : k.name,
                                                      }),
                                                      e.jsx("span", {
                                                          className: "yt-live-text",
                                                          children: k.text,
                                                      }),
                                                      M.trOf(k.text) &&
                                                          e.jsx("span", {
                                                              className: "yt-live-tr",
                                                              children: M.trOf(k.text),
                                                          }),
                                                  ],
                                              }),
                                              O &&
                                                  e.jsx("button", {
                                                      className: "yt-live-drop",
                                                      onClick: () => j(k),
                                                      "aria-label": "删除这条",
                                                      children: e.jsx(fe, { size: 13 }),
                                                  }),
                                          ],
                                      },
                                      k.id,
                                  ),
                    ),
                    !ee.length &&
                        e.jsx("div", {
                            className: "yt-empty-hint",
                            style: { padding: 24 },
                            children: "弹幕还没开始",
                        }),
                ],
            }),
            O
                ? e.jsxs("div", {
                      className: "yt-live-compose",
                      children: [
                          e.jsx(ne, { src: Q(t, "me"), name: $(t, "me"), size: 28 }),
                          e.jsx("input", {
                              value: d,
                              onChange: (k) => C(k.target.value),
                              onKeyDown: (k) => {
                                  k.key === "Enter" && Te();
                              },
                              placeholder: r
                                  ? g
                                      ? "弹幕在刷…"
                                      : "主播正在说话…"
                                  : g
                                    ? "对着镜头说点什么"
                                    : "发条弹幕",
                          }),
                          !g &&
                              e.jsx("button", {
                                  className: "yt-icon-btn",
                                  onClick: () => L(!0),
                                  "aria-label": "付费留言",
                                  children: e.jsx(Hs, { size: 18 }),
                              }),
                          r
                              ? e.jsx("button", {
                                    className: "yt-icon-btn is-busy",
                                    onClick: b.stop,
                                    "aria-label": "停止生成",
                                    title: "停止生成",
                                    children: e.jsx(Re, { size: 18 }),
                                })
                              : e.jsx("button", {
                                    className: "yt-icon-btn",
                                    onClick: Te,
                                    disabled: !d.trim(),
                                    "aria-label": "发送",
                                    children: e.jsx(ns, { size: 18 }),
                                }),
                      ],
                  })
                : e.jsxs("div", {
                      className: "yt-live-ended-bar",
                      children: ["这场直播已结束", D != null && D.highlight ? ` · ${D.highlight}` : ""],
                  }),
            e.jsx(_e, {
                open: P,
                onClose: () => B(!1),
                title: S.title,
                message: O ? `已播 ${Ke} 分钟 · 峰值 ${he(S.peakViewers || S.viewers)} 人` : void 0,
                actions: O
                    ? [
                          {
                              label: r ? "停止这一轮生成" : "立刻推进一轮",
                              onClick: () => (r ? b.stop() : J("")),
                          },
                          { label: f ? "暂停自动推进" : "恢复自动推进", onClick: () => A((k) => !k) },
                          { label: "进入频道", onClick: () => x.openChannel(s) },
                          { label: g ? "下播" : "下播并存档", destructive: !0, onClick: () => _({}) },
                      ]
                    : [{ label: "进入频道", onClick: () => x.openChannel(s) }],
            }),
            e.jsx(vs, {
                open: !!p,
                onClose: () => j(null),
                title: "删除这条",
                message: p
                    ? `${p.author === "host" ? "主播" : (Rs = p.author) != null && Rs.startsWith("me") ? "你" : p.name}：${String(p.text).slice(0, 40)}`
                    : void 0,
                confirm: {
                    label: "删除",
                    destructive: !0,
                    onClick: () => {
                        (u(p.id), l("已删除"));
                    },
                },
            }),
            e.jsx(Zt, {
                open: Y,
                onClose: () => L(!1),
                title: "付费留言",
                children: e.jsxs("div", {
                    className: "yt-sc-sheet",
                    children: [
                        e.jsx("div", {
                            className: "yt-sc-amounts",
                            children: [10, 30, 66, 128, 520].map((k) =>
                                e.jsxs(
                                    "button",
                                    {
                                        className: `yt-sort ${I === k ? "on" : ""}`,
                                        onClick: () => w(k),
                                        children: ["¥", k],
                                    },
                                    k,
                                ),
                            ),
                        }),
                        e.jsx("input", {
                            className: "yt-sc-input",
                            value: d,
                            onChange: (k) => C(k.target.value),
                            placeholder: "留言内容",
                        }),
                        e.jsx("p", {
                            className: "yt-empty-hint",
                            children: "付费留言会置顶在弹幕里，主播读到的概率更高，但仍然不保证。",
                        }),
                        e.jsxs("button", {
                            className: "yt-primary",
                            onClick: re,
                            children: [e.jsx(Hs, { size: 16 }), e.jsxs("span", { children: ["发送 ¥", I] })],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function In({ open: s, onClose: a }) {
    const { state: t } = te(),
        n = ue(),
        i = ve(),
        m = Ae(),
        [u, x] = o.useState(null),
        [l, b] = o.useState(""),
        [r, d] = o.useState(!1);
    o.useEffect(() => {
        var j;
        s && !u && x(t.activeCharId || ((j = t.characters[0]) == null ? void 0 : j.id) || "me");
    }, [s]);
    const C = u === "me",
        p = async (j) => {
            if (!u) {
                i("先选一个人", "error");
                return;
            }
            if (j === "live") {
                (a(), n.openLive(u));
                return;
            }
            if (C) {
                (a(), d(j === "video" ? "video" : "short"));
                return;
            }
            a();
            const f = await m.genVideo(u, { kind: j, hint: l });
            (b(""), f && n.openWatch(u, f));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Qt, {
                open: s,
                onClose: a,
                title: "创建",
                children: e.jsxs("div", {
                    className: "yt-create",
                    children: [
                        e.jsx("div", { className: "yt-create-label", children: "谁来做这期" }),
                        e.jsxs("div", {
                            className: "yt-create-chars",
                            children: [
                                e.jsxs("button", {
                                    className: `yt-create-char ${C ? "on" : ""}`,
                                    onClick: () => x("me"),
                                    children: [
                                        e.jsx(ne, { src: Q(t, "me"), name: $(t, "me"), size: 46 }),
                                        e.jsx("span", { children: "我" }),
                                    ],
                                }),
                                t.characters.map((j) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            className: `yt-create-char ${u === j.id ? "on" : ""}`,
                                            onClick: () => x(j.id),
                                            children: [
                                                e.jsx(ne, { src: Q(t, j.id), name: $(t, j.id), size: 46 }),
                                                e.jsx("span", { children: $(t, j.id) }),
                                            ],
                                        },
                                        j.id,
                                    ),
                                ),
                            ],
                        }),
                        !C &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx("div", { className: "yt-create-label", children: "方向 · 可留空" }),
                                    e.jsx("textarea", {
                                        className: "yt-live-hint",
                                        rows: 2,
                                        value: l,
                                        onChange: (j) => b(j.target.value),
                                        placeholder: "想看他做什么？留空就按他自己此刻的状态来",
                                    }),
                                ],
                            }),
                        m.busy &&
                            e.jsxs("button", {
                                className: "yt-create-stop",
                                onClick: m.stop,
                                children: [
                                    e.jsx(Re, { size: 17 }),
                                    e.jsx("span", { children: "正在生成 · 点这里停下" }),
                                ],
                            }),
                        e.jsx("div", {
                            className: "yt-create-actions",
                            children: C
                                ? e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsxs("button", {
                                              className: "yt-create-action",
                                              onClick: () => p("video"),
                                              children: [
                                                  e.jsx(Qe, { size: 20 }),
                                                  e.jsx("b", { children: "我发一期视频" }),
                                                  e.jsx("span", {
                                                      children: "填写标题、章节和画面，也可上传真实视频",
                                                  }),
                                              ],
                                          }),
                                          e.jsxs("button", {
                                              className: "yt-create-action",
                                              onClick: () => p("short"),
                                              children: [
                                                  e.jsx(Ye, {}),
                                                  e.jsx("b", { children: "我发一条短视频" }),
                                                  e.jsx("span", {
                                                      children: "填写标题和画面，也可上传真实视频",
                                                  }),
                                              ],
                                          }),
                                          e.jsxs("button", {
                                              className: "yt-create-action",
                                              onClick: () => p("live"),
                                              children: [
                                                  e.jsx(Ze, { size: 20 }),
                                                  e.jsx("b", { children: "我开一场直播" }),
                                                  e.jsx("span", {
                                                      children: "你对着镜头说话，弹幕和观众由这边生成",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  })
                                : e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsxs("button", {
                                              className: "yt-create-action",
                                              onClick: () => p("video"),
                                              disabled: m.busy,
                                              children: [
                                                  e.jsx(Qe, { size: 20 }),
                                                  e.jsx("b", { children: "发一期视频" }),
                                                  e.jsx("span", { children: "按频道定位做一期完整内容" }),
                                              ],
                                          }),
                                          e.jsxs("button", {
                                              className: "yt-create-action",
                                              onClick: () => p("short"),
                                              disabled: m.busy,
                                              children: [
                                                  e.jsx(Ye, {}),
                                                  e.jsx("b", { children: "发一条短视频" }),
                                                  e.jsx("span", { children: "一个瞬间、一句自言自语" }),
                                              ],
                                          }),
                                          e.jsxs("button", {
                                              className: "yt-create-action",
                                              onClick: () => p("live"),
                                              children: [
                                                  e.jsx(Ze, { size: 20 }),
                                                  e.jsx("b", { children: "开一场直播" }),
                                                  e.jsx("span", { children: "你可以在弹幕里和他说话" }),
                                              ],
                                          }),
                                          e.jsxs("button", {
                                              className: "yt-create-action",
                                              disabled: m.busy,
                                              onClick: () => {
                                                  u && m.genChannel(u);
                                              },
                                              children: [
                                                  e.jsx(Pe, { size: 20 }),
                                                  e.jsx("b", { children: "重建频道资料" }),
                                                  e.jsx("span", { children: "频道名、@ID、简介、订阅数" }),
                                              ],
                                          }),
                                      ],
                                  }),
                        }),
                    ],
                }),
            }),
            e.jsx(Rn, {
                open: !!r,
                initialKind: r === "video" ? "video" : "short",
                onClose: () => d(!1),
                onPublished: (j) => n.openWatch("me", j),
            }),
        ],
    });
}
export { _n as default, nn as performTubePostReaction, an as performTubeVideoReaction };
