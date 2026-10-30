import { r as u, j as e } from "./vendor-react-3a46a5d3.js";
import {
    u as Oe,
    a as xe,
    i3 as Re,
    cu as Ne,
    i4 as me,
    i5 as ie,
    A as fs,
    ba as Ds,
    i6 as zt,
    i7 as He,
    i8 as je,
    i9 as Bn,
    ia as Fs,
    ib as Mt,
    dx as ge,
    ic as Ft,
    id as he,
    ie as Ls,
    ig as we,
    ih as Rt,
    ii as yn,
    ij as Et,
    f as hs,
    ik as Bt,
    il as wn,
    im as Dt,
    io as Lt,
    ip as Pt,
    iq as Ot,
    ir as Ge,
    is as Ze,
    it as Is,
    iu as Xe,
    iv as Ht,
    iw as qt,
    ix as Cn,
    bj as ps,
    b9 as qe,
    iy as _t,
    iz as Wt,
    iA as Ut,
    iB as xs,
    iC as js,
    iD as Ps,
    iE as Kt,
    iF as Vt,
    iG as bs,
    iH as es,
    iI as Ke,
    iJ as Dn,
    iK as Os,
    iL as Gt,
    iM as Hs,
    iN as ss,
    iO as Rs,
    iP as gs,
    iQ as Sn,
    cX as Xt,
    g4 as Yt,
    fH as qs,
    fI as Ln,
    fJ as _s,
    iR as vs,
    iS as Ws,
    iT as Jt,
    iU as V,
    iV as Qt,
    iW as Zt,
    iX as ea,
    iY as Pn,
    iZ as sa,
    i_ as na,
    i$ as On,
    j0 as ta,
    j1 as aa,
    j2 as la,
    j3 as ia,
    j4 as Ve,
    cT as Us,
    j5 as ra,
    j6 as ca,
    j7 as Ye,
    j8 as Ks,
    dj as Hn,
    j9 as oa,
    ja as da,
    jb as Vs,
    jc as ha,
    jd as ua,
    je as ma,
    jf as pa,
    jg as xa,
    jh as ja,
    ji as va,
    jj as fa,
    jk as $n,
    jl as In,
    jm as Tn,
    jn as An,
    p as ba,
    jo as ga,
    jp as Na,
    cj as ka,
} from "./app-2c902988.js";
import {
    cB as ya,
    cx as qn,
    cS as wa,
    d_ as Gs,
    d$ as Ca,
    b$ as zn,
    bA as us,
    e0 as _n,
    bG as Sa,
    bo as Wn,
    aJ as Mn,
    bB as $a,
    c1 as Fn,
    e1 as Ia,
    bz as Rn,
    cT as Un,
    e2 as Ta,
    e3 as Aa,
    e4 as za,
    bE as Kn,
    bv as Fe,
    e5 as Vn,
    dc as Ma,
    bD as Gn,
    bI as Xs,
    db as Fa,
    bm as Ra,
    bY as Ea,
} from "./vendor-icons-e63d3118.js";
import { u as Ba, s as Da } from "./vendor-7bc51c32.js";
import { m as ne, A as ue } from "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const La = new Set([
        "p",
        "div",
        "br",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "li",
        "tr",
        "blockquote",
        "section",
        "article",
        "header",
        "footer",
        "pre",
        "hr",
        "dd",
        "dt",
        "figcaption",
        "aside",
    ]),
    Pa = new Set(["script", "style", "head", "title", "svg", "math"]);
function Ts(s, a) {
    const m = decodeURIComponent(String(a || "").split("#")[0]);
    if (!m) return "";
    const p = (s.includes("/") ? s.slice(0, s.lastIndexOf("/") + 1) : "").concat(m).split("/"),
        x = [];
    for (const j of p) j === ".." ? x.pop() : j && j !== "." && x.push(j);
    return x.join("/");
}
function Qe(s, a = "application/xml") {
    const m = new DOMParser().parseFromString(s, a);
    return m.getElementsByTagName("parsererror").length && a !== "text/html"
        ? new DOMParser().parseFromString(s, "text/html")
        : m;
}
const be = (s, a) =>
    [...s.getElementsByTagName("*")].filter((m) => (m.localName || m.nodeName).toLowerCase() === a);
function Oa(s) {
    let a = "";
    const m = {},
        p = () => {
            a &&
                !a.endsWith(`
`) &&
                (a += `
`);
        },
        x = (t) => {
            var y, T;
            if (t.nodeType === 3) {
                a += t.nodeValue.replace(/\s+/g, " ");
                return;
            }
            if (t.nodeType !== 1) return;
            const l = (t.localName || t.nodeName).toLowerCase();
            if (Pa.has(l)) return;
            const N =
                ((y = t.getAttribute) == null ? void 0 : y.call(t, "id")) ||
                ((T = t.getAttribute) == null ? void 0 : T.call(t, "name"));
            if ((N && m[N] == null && (m[N] = a.length), l === "img" || l === "image")) return;
            const b = La.has(l);
            b && p();
            for (const M of t.childNodes) x(M);
            b && p();
        };
    x(s.body || s.documentElement);
    let j = "";
    const h = [];
    let c = 0;
    for (const t of a.split(`
`)) {
        (h.push([c, j.length]), (c += t.length + 1));
        const l = t.trim();
        l &&
            (j += `${l}
`);
    }
    const A = (t) => {
        let l = 0;
        for (const [N, b] of h) {
            if (N > t) break;
            l = b;
        }
        return l;
    };
    return { text: j.trim(), ids: Object.fromEntries(Object.entries(m).map(([t, l]) => [t, A(l)])) };
}
function Ha(s) {
    var a;
    for (const m of ["h1", "h2", "h3", "title"]) {
        const p = s.getElementsByTagName(m)[0],
            x = (a = p == null ? void 0 : p.textContent) == null ? void 0 : a.replace(/\s+/g, " ").trim();
        if (x) return x.slice(0, 60);
    }
    return "";
}
function qa(s) {
    var k, W, Y, te, Q;
    const a = Ba(s instanceof Uint8Array ? s : new Uint8Array(s)),
        m = (r) => (a[r] ? Da(a[r]) : ""),
        p = Qe(m("META-INF/container.xml")),
        x =
            ((k = be(p, "rootfile")[0]) == null ? void 0 : k.getAttribute("full-path")) ||
            Object.keys(a).find((r) => r.endsWith(".opf"));
    if (!x || !a[x]) throw new Error("不是有效的 EPUB 文件");
    const j = Qe(m(x)),
        h = (r) => {
            var S, w;
            return (
                ((w = (S = be(j, r)[0]) == null ? void 0 : S.textContent) == null ? void 0 : w.trim()) || ""
            );
        },
        c = h("title"),
        A = h("creator"),
        t = {};
    for (const r of be(j, "item"))
        t[r.getAttribute("id")] = {
            href: Ts(x, r.getAttribute("href")),
            type: r.getAttribute("media-type") || "",
            props: r.getAttribute("properties") || "",
        };
    const l = be(j, "spine")[0],
        N = be(j, "itemref")
            .map((r) => t[r.getAttribute("idref")])
            .filter((r) => r && /html|xml/i.test(r.type) && a[r.href]);
    let b = null;
    const y =
            (W = be(j, "meta").find((r) => r.getAttribute("name") === "cover")) == null
                ? void 0
                : W.getAttribute("content"),
        T = Object.values(t).find((r) => /cover-image/.test(r.props)) || (y && t[y]);
    T && a[T.href] && /^image\//.test(T.type) && (b = new Blob([a[T.href]], { type: T.type }));
    let M = "";
    const E = {},
        C = {},
        v = {};
    for (const r of N) {
        const S = Qe(m(r.href), "application/xhtml+xml"),
            { text: w, ids: o } = Oa(S);
        (M &&
            w &&
            (M += `

`),
            (E[r.href] = M.length),
            (C[r.href] = o),
            (v[r.href] = Ha(S)),
            (M += w));
    }
    const $ = [],
        D = Object.values(t).find((r) => /\bnav\b/.test(r.props));
    if (D && a[D.href]) {
        const r = Qe(m(D.href), "application/xhtml+xml"),
            S = be(r, "nav"),
            w =
                S.find((o) => {
                    var z;
                    return /toc/.test(
                        o.getAttribute("epub:type") ||
                            ((z = o.getAttributeNS) == null
                                ? void 0
                                : z.call(o, "http://www.idpf.org/2007/ops", "type")) ||
                            "",
                    );
                }) || S[0];
        for (const o of w ? be(w, "a") : []) {
            const z = o.getAttribute("href");
            z &&
                $.push({
                    title: o.textContent.replace(/\s+/g, " ").trim(),
                    path: Ts(D.href, z),
                    frag: z.split("#")[1] || "",
                });
        }
    }
    if (!$.length) {
        const r =
            ((l == null ? void 0 : l.getAttribute("toc")) && t[l.getAttribute("toc")]) ||
            Object.values(t).find((S) => /ncx/.test(S.type));
        if (r && a[r.href]) {
            const S = Qe(m(r.href));
            for (const w of be(S, "navpoint")) {
                const o =
                        ((te = (Y = be(w, "text")[0]) == null ? void 0 : Y.textContent) == null
                            ? void 0
                            : te.replace(/\s+/g, " ").trim()) || "",
                    z = ((Q = be(w, "content")[0]) == null ? void 0 : Q.getAttribute("src")) || "";
                z && $.push({ title: o, path: Ts(r.href, z), frag: z.split("#")[1] || "" });
            }
        }
    }
    let R = $.map((r) => {
        var S;
        return E[r.path] == null
            ? null
            : {
                  title: (r.title || v[r.path] || "").slice(0, 60),
                  start:
                      E[r.path] +
                      (r.frag && ((S = C[r.path]) == null ? void 0 : S[r.frag]) != null
                          ? C[r.path][r.frag]
                          : 0),
              };
    }).filter(Boolean);
    R.length < 2 && (R = N.map((r, S) => ({ title: v[r.href] || `第 ${S + 1} 篇`, start: E[r.href] })));
    const O = new Set();
    R = R.sort((r, S) => r.start - S.start).filter((r) => (O.has(r.start) ? !1 : (O.add(r.start), !0)));
    const B = [];
    return (
        R.length &&
            M.slice(0, R[0].start).trim().length > 80 &&
            B.push({ title: "前言", start: 0, end: R[0].start }),
        R.forEach((r, S) => {
            const w = S + 1 < R.length ? R[S + 1].start : M.length;
            M.slice(r.start, w).trim() &&
                B.push({ title: r.title || `第 ${B.length + 1} 章`, start: r.start, end: w });
        }),
        {
            title: c,
            author: A,
            text: M,
            chapters: B.length ? B : [{ title: c || "正文", start: 0, end: M.length }],
            cover: b,
        }
    );
}
const _a = He;
function Wa({ name: s, size: a = 30 }) {
    const m = String(s || "读"),
        p = [...m].reduce((x, j) => x + j.charCodeAt(0), 0) % 4;
    return e.jsx("span", {
        className: `nv-face rd g${p}`,
        style: { width: a, height: a, fontSize: a * 0.42 },
        children: m.slice(0, 1),
    });
}
function Ua({
    kind: s,
    work: a,
    chapterTitle: m,
    chapterText: p,
    list: x,
    onChange: j,
    speakers: h,
    onSpeakers: c,
    castIds: A = [],
    taskKey: t,
    onClose: l,
}) {
    var de;
    const { state: N } = Oe(),
        b = xe(),
        y = Re(),
        T = Ne(t),
        M = N.me,
        E = N.characters || [],
        [C, v] = u.useState(""),
        [$, D] = u.useState(null),
        [R, O] = u.useState(null),
        [B, k] = u.useState(null),
        [W, Y] = u.useState(!1),
        te = u.useRef(null),
        Q = u.useRef(x);
    Q.current = x;
    const r = u.useMemo(
            () =>
                ((h == null ? void 0 : h.charIds) || [])
                    .map((F) => E.find((H) => H.id === F))
                    .filter(Boolean),
            [h, E],
        ),
        S = { readers: (h == null ? void 0 : h.readers) !== !1, chars: r },
        w = !!c,
        o = async () => {
            const F = y();
            if (!F) return;
            if (!S.readers && !S.chars.length) {
                b("先在发言设置里选择谁来评论", "error");
                return;
            }
            const H = await T.run(
                (ce) =>
                    je(
                        F,
                        Bn({
                            kind: s === "book" ? "book" : "fic",
                            work: a,
                            chapterTitle: m,
                            chapterText: p,
                            speakers: S,
                            me: M,
                            count: 8,
                            existing: Q.current,
                        }),
                        ce,
                    ),
                { label: "评论区" },
            );
            if (H.aborted || H.skipped) return;
            if (H.error) {
                b(H.error.message || "没刷出来，再试一次", "error");
                return;
            }
            const K = Fs(H.value, { chars: S.chars, existing: Q.current });
            if (!K.length) {
                b("没读出评论，再试一次", "error");
                return;
            }
            j([...Q.current, ...K]);
        },
        z = async () => {
            const F = C.trim();
            if (!F) return;
            const H = Mt({ who: "me", name: ge(M), text: F, replyTo: $ ? { id: $.id, name: $.name } : null }),
                K = [...Q.current, H];
            (j(K), v(""));
            const ce = $;
            D(null);
            const d = y();
            if (!d || (!S.readers && !S.chars.length)) return;
            const I = await T.run(
                (L) =>
                    je(
                        d,
                        Ft({
                            kind: s === "book" ? "book" : "fic",
                            work: a,
                            chapterTitle: m,
                            chapterText: p,
                            speakers: S,
                            me: M,
                            mine: H,
                            target: ce,
                            existing: K,
                        }),
                        L,
                    ),
                { label: "评论区" },
            );
            if (I.value) {
                const L = Fs(I.value, { chars: S.chars, existing: K }).map((U) => ({
                    ...U,
                    replyTo: U.replyTo || { id: H.id, name: H.name },
                }));
                L.length && j([...Q.current, ...L]);
            }
        },
        P = (F) =>
            j(
                Q.current.map((H) =>
                    H.id === F.id ? { ...H, liked: !H.liked, likes: (H.likes || 0) + (H.liked ? -1 : 1) } : H,
                ),
            ),
        Z = (F) => j(Q.current.filter((H) => H.id !== F.id)),
        G = u.useMemo(() => {
            const F = new Map(x.map((d) => [d.id, d])),
                H = (d) => {
                    let I = d,
                        L = 0;
                    for (; I != null && I.replyTo && F.get(I.replyTo.id) && L < 8; )
                        ((I = F.get(I.replyTo.id)), (L += 1));
                    return I;
                },
                K = [],
                ce = new Map();
            for (const d of x) {
                const I = H(d);
                I.id === d.id
                    ? (ce.set(d.id, K.length), K.push({ c: d, replies: [] }))
                    : ce.has(I.id)
                      ? K[ce.get(I.id)].replies.push(d)
                      : (ce.set(d.id, K.length), K.push({ c: d, replies: [] }));
            }
            return K;
        }, [x]),
        ve = (F, H = !1) => {
            const K = E.find((d) => d.id === F.who),
                ce = F.who === "me";
            return e.jsxs(
                "div",
                {
                    className: `nv-cm${H ? " sub" : ""}`,
                    children: [
                        K
                            ? e.jsx(he, { char: K, size: H ? 24 : 32 })
                            : ce
                              ? e.jsx(he, {
                                    char: { avatar: M == null ? void 0 : M.avatar, name: ge(M) },
                                    size: H ? 24 : 32,
                                })
                              : e.jsx(Wa, { name: F.name, size: H ? 24 : 32 }),
                        e.jsxs("div", {
                            className: "nv-cm-main",
                            onClick: () => O(F),
                            children: [
                                e.jsxs("div", {
                                    className: "nv-cm-head",
                                    children: [
                                        e.jsx("b", { children: F.name }),
                                        K &&
                                            e.jsx("i", {
                                                className: "nv-tag dark",
                                                children: s === "book" ? "共读" : "本人",
                                            }),
                                        ce && e.jsx("i", { className: "nv-tag", children: "我" }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "nv-cm-text",
                                    children: [
                                        F.replyTo && H
                                            ? e.jsxs("span", {
                                                  className: "nv-cm-re",
                                                  children: ["回复 ", F.replyTo.name, "："],
                                              })
                                            : null,
                                        F.text,
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "nv-cm-foot",
                                    children: [
                                        e.jsx("span", { children: Ls(F.at) }),
                                        e.jsxs("button", {
                                            className: "btn-plain",
                                            onClick: (d) => {
                                                var I;
                                                (d.stopPropagation(),
                                                    D(F),
                                                    (I = te.current) == null ||
                                                        I.focus({ preventScroll: !0 }));
                                            },
                                            children: [e.jsx(wa, { size: 13 }), "回复"],
                                        }),
                                        K &&
                                            e.jsxs("button", {
                                                className: "btn-plain",
                                                onClick: (d) => {
                                                    (d.stopPropagation(), k(F));
                                                },
                                                children: [e.jsx(Gs, { size: 13 }), "分享给 TA"],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsxs("button", {
                            className: `nv-cm-like btn-plain${F.liked ? " on" : ""}`,
                            onClick: () => P(F),
                            children: [
                                e.jsx(Ca, { size: 15, weight: F.liked ? "fill" : "regular" }),
                                e.jsx("span", { children: F.likes || "" }),
                            ],
                        }),
                    ],
                },
                F.id,
            );
        },
        _ = B ? E.find((F) => F.id === B.who) : null;
    return e.jsxs(ne.div, {
        className: "nv-layer nv-comments",
        ..._a,
        children: [
            e.jsx(me, {
                onBack: l,
                title: "评论",
                sub: m,
                right: w
                    ? e.jsx("button", {
                          className: "nv-text-btn btn-plain",
                          onClick: () => Y(!0),
                          children: "发言",
                      })
                    : null,
            }),
            e.jsxs("div", {
                className: "nv-scroll",
                children: [
                    e.jsxs("div", {
                        className: "nv-cm-bar",
                        children: [
                            e.jsx("span", { children: x.length ? `${x.length} 条评论` : "还没有评论" }),
                            e.jsx("button", {
                                className: `nv-pill${T.busy ? " busy" : " solid"} btn-plain`,
                                onClick: T.busy ? T.stop : o,
                                children: T.busy
                                    ? e.jsxs(e.Fragment, {
                                          children: [e.jsx("span", { className: "nv-spin light" }), "停止"],
                                      })
                                    : e.jsxs(e.Fragment, {
                                          children: [
                                              e.jsx(ya, { size: 14, weight: "bold" }),
                                              x.length ? "刷新评论" : "生成评论",
                                          ],
                                      }),
                            }),
                        ],
                    }),
                    w &&
                        e.jsxs("div", {
                            className: "nv-cm-who",
                            children: [
                                e.jsx("span", { children: "发言：" }),
                                S.readers && e.jsx("i", { children: "读者" }),
                                S.chars.map((F) => e.jsx("i", { children: ie(F) }, F.id)),
                                !S.readers &&
                                    !S.chars.length &&
                                    e.jsx("i", { className: "off", children: "未设置" }),
                            ],
                        }),
                    !x.length &&
                        !T.busy &&
                        e.jsxs("div", {
                            className: "nv-empty sm",
                            children: [
                                "点「生成评论」，会按这一章的内容写出评论区。",
                                e.jsx("br", {}),
                                "你发的评论也会有人回复。",
                            ],
                        }),
                    G.map(({ c: F, replies: H }) =>
                        e.jsxs(
                            "div",
                            {
                                className: "nv-cm-thread",
                                children: [
                                    ve(F),
                                    H.length > 0 &&
                                        e.jsx("div", {
                                            className: "nv-cm-replies",
                                            children: H.map((K) => ve(K, !0)),
                                        }),
                                ],
                            },
                            F.id,
                        ),
                    ),
                ],
            }),
            e.jsxs("div", {
                className: "nv-cm-input",
                children: [
                    $ &&
                        e.jsxs("div", {
                            className: "nv-cm-replying",
                            children: [
                                "回复 ",
                                $.name,
                                e.jsx("button", {
                                    className: "btn-plain",
                                    onClick: () => D(null),
                                    children: "取消",
                                }),
                            ],
                        }),
                    e.jsxs("div", {
                        className: "nv-cm-field",
                        children: [
                            e.jsx("input", {
                                ref: te,
                                value: C,
                                onChange: (F) => v(F.target.value),
                                placeholder: "写下你的评论",
                                onKeyDown: (F) => {
                                    F.key === "Enter" && !F.nativeEvent.isComposing && z();
                                },
                            }),
                            e.jsx("button", {
                                className: "nv-send btn-plain",
                                disabled: !C.trim(),
                                onClick: z,
                                "aria-label": "发送",
                                children: e.jsx(qn, { size: 18, weight: "fill" }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(fs, {
                open: !!R,
                onClose: () => O(null),
                title: R == null ? void 0 : R.name,
                message: (de = R == null ? void 0 : R.text) == null ? void 0 : de.slice(0, 60),
                actions: R
                    ? [
                          {
                              label: "回复",
                              onClick: () => {
                                  (D(R),
                                      setTimeout(() => {
                                          var F;
                                          return (F = te.current) == null
                                              ? void 0
                                              : F.focus({ preventScroll: !0 });
                                      }, 50));
                              },
                          },
                          {
                              label: "复制",
                              onClick: () => {
                                  var F;
                                  (F = navigator.clipboard) == null ||
                                      F.writeText(R.text)
                                          .then(() => b("已复制", "success"))
                                          .catch(() => {});
                              },
                          },
                          ...(E.some((F) => F.id === R.who)
                              ? [{ label: "分享给 TA", onClick: () => k(R) }]
                              : []),
                          { label: "删除", destructive: !0, onClick: () => Z(R) },
                      ]
                    : [],
            }),
            w && e.jsx(Ka, { open: W, onClose: () => Y(!1), value: h, onChange: c, chars: E, castIds: A }),
            e.jsx(Ds, {
                open: !!B && !!_,
                onClose: () => k(null),
                defaultCharId: _ == null ? void 0 : _.id,
                card:
                    B && _
                        ? zt({
                              work: a,
                              chapterTitle: m,
                              comment: B,
                              char: _,
                              kind: s === "book" ? "book" : "fic",
                          })
                        : null,
                onSent: () => {
                    (k(null), b("已分享到聊天，TA 会记得这条评论", "success"));
                },
            }),
        ],
    });
}
function Ka({ open: s, onClose: a, value: m, onChange: p, chars: x, castIds: j }) {
    const h = {
            readers: (m == null ? void 0 : m.readers) !== !1,
            charIds: (m == null ? void 0 : m.charIds) || [],
        },
        c = (l) =>
            p({
                ...h,
                charIds: h.charIds.includes(l) ? h.charIds.filter((N) => N !== l) : [...h.charIds, l],
            }),
        A = x.filter((l) => j.includes(l.id)),
        t = x.filter((l) => !j.includes(l.id) && !l.deleted);
    return s
        ? e.jsx("div", {
              className: "nv-modal",
              onClick: a,
              children: e.jsxs(ne.div, {
                  className: "nv-sheet",
                  initial: { y: "100%" },
                  animate: { y: 0 },
                  transition: { type: "spring", damping: 32, stiffness: 340 },
                  onClick: (l) => l.stopPropagation(),
                  children: [
                      e.jsx("div", { className: "nv-sheet-grip" }),
                      e.jsx("div", { className: "nv-sheet-title", children: "谁在评论区发言" }),
                      e.jsx("div", {
                          className: "nv-sheet-sub",
                          children: "选中的人会按这一章的内容写评论、回复你。",
                      }),
                      e.jsxs("button", {
                          className: `nv-pick btn-plain${h.readers ? " on" : ""}`,
                          onClick: () => p({ ...h, readers: !h.readers }),
                          children: [
                              e.jsx("span", {
                                  className: "nv-face rd g1",
                                  style: { width: 34, height: 34, fontSize: 14 },
                                  children: "读",
                              }),
                              e.jsxs("span", {
                                  className: "nv-pick-t",
                                  children: [
                                      e.jsx("b", { children: "读者" }),
                                      e.jsx("small", { children: "网站上的普通读者" }),
                                  ],
                              }),
                              e.jsx("span", { className: "nv-check" }),
                          ],
                      }),
                      A.length > 0 && e.jsx("div", { className: "nv-sheet-group", children: "作品里的人" }),
                      A.map((l) =>
                          e.jsxs(
                              "button",
                              {
                                  className: `nv-pick btn-plain${h.charIds.includes(l.id) ? " on" : ""}`,
                                  onClick: () => c(l.id),
                                  children: [
                                      e.jsx(he, { char: l, size: 34 }),
                                      e.jsxs("span", {
                                          className: "nv-pick-t",
                                          children: [
                                              e.jsx("b", { children: ie(l) }),
                                              e.jsx("small", { children: "以本人的身份读这篇" }),
                                          ],
                                      }),
                                      e.jsx("span", { className: "nv-check" }),
                                  ],
                              },
                              l.id,
                          ),
                      ),
                      t.length > 0 && e.jsx("div", { className: "nv-sheet-group", children: "其他联系人" }),
                      t.map((l) =>
                          e.jsxs(
                              "button",
                              {
                                  className: `nv-pick btn-plain${h.charIds.includes(l.id) ? " on" : ""}`,
                                  onClick: () => c(l.id),
                                  children: [
                                      e.jsx(he, { char: l, size: 34 }),
                                      e.jsx("span", {
                                          className: "nv-pick-t",
                                          children: e.jsx("b", { children: ie(l) }),
                                      }),
                                      e.jsx("span", { className: "nv-check" }),
                                  ],
                              },
                              l.id,
                          ),
                      ),
                      e.jsx("button", { className: "nv-btn block", onClick: a, children: "完成" }),
                  ],
              }),
          })
        : null;
}
const ms = {
        white: {
            bg: "#ffffff",
            ink: "#1b1b1b",
            sub: "#8d8d8d",
            line: "rgba(0,0,0,.08)",
            bar: "#ffffff",
            mark: "rgba(0,0,0,.07)",
        },
        paper: {
            bg: "#f5f2eb",
            ink: "#2a2824",
            sub: "#9b968b",
            line: "rgba(60,50,30,.12)",
            bar: "#f8f6f0",
            mark: "rgba(60,50,30,.09)",
        },
        grey: {
            bg: "#e8e8e6",
            ink: "#1e1e1e",
            sub: "#7b7b79",
            line: "rgba(0,0,0,.09)",
            bar: "#efefed",
            mark: "rgba(0,0,0,.08)",
        },
        night: {
            bg: "#141414",
            ink: "#cfcfcb",
            sub: "#6e6e6b",
            line: "rgba(255,255,255,.09)",
            bar: "#1c1c1c",
            mark: "rgba(255,255,255,.08)",
        },
    },
    Va = [
        ["white", "白"],
        ["paper", "纸"],
        ["grey", "灰"],
        ["night", "夜"],
    ],
    As = [
        ["#111111", "墨黑"],
        ["#3c3c3c", "深灰"],
        ["#6b6b68", "中灰"],
        ["#4a4038", "暖灰"],
        ["#3a4048", "冷灰"],
        ["#d9d9d5", "月白"],
    ],
    Xn = {
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { type: "spring", damping: 34, stiffness: 360 },
    };
function Ga({ kind: s, id: a, onClose: m }) {
    var pn, xn, jn, vn, fn, bn, gn, Nn;
    const { state: p } = Oe(),
        { nv: x, update: j, putItem: h } = we(),
        c = xe(),
        A = Re(),
        t = s === "book",
        l = t ? x.books.find((n) => n.id === a) : x.fics.find((n) => n.id === a),
        N = t ? "books" : "fics",
        b = x.prefs,
        y = ms[b.theme] || ms.paper,
        T = p.me,
        [M, E] = u.useState(t ? null : ""),
        [C, v] = u.useState(() => {
            var n, i, f;
            return Math.min(
                ((n = l == null ? void 0 : l.progress) == null ? void 0 : n.ch) || 0,
                Math.max(
                    0,
                    (t
                        ? (i = l == null ? void 0 : l.chapters) == null
                            ? void 0
                            : i.length
                        : (f = l == null ? void 0 : l.chapters) == null
                          ? void 0
                          : f.length) - 1 || 0,
                ),
            );
        }),
        [$, D] = u.useState(!1),
        [R, O] = u.useState(null),
        [B, k] = u.useState(null),
        [W, Y] = u.useState(null),
        [te, Q] = u.useState(!1),
        r = u.useRef(null),
        S = u.useRef(!1),
        w = b.turn === "page",
        [o, z] = u.useState(0),
        [P, Z] = u.useState(1),
        [G, ve] = u.useState({ w: 0, h: 0 }),
        _ = u.useRef(!1),
        [de, F] = u.useState(!0),
        H = u.useRef(!0);
    H.current = de;
    const [K, ce] = u.useState("");
    (u.useLayoutEffect(() => {
        const n = r.current;
        if (!n) return;
        const i = () =>
            ve((g) =>
                g.w === n.clientWidth && g.h === n.clientHeight ? g : { w: n.clientWidth, h: n.clientHeight },
            );
        i();
        const f = new ResizeObserver(i);
        return (f.observe(n), () => f.disconnect());
    }, []),
        u.useEffect(() => {
            if (!t || !l) return;
            let n = !0;
            return (
                Rt(l.textRef).then((i) => {
                    n && E(i || "");
                }),
                () => {
                    n = !1;
                }
            );
        }, [t, l == null ? void 0 : l.textRef]));
    const d = u.useMemo(() => (l == null ? void 0 : l.chapters) || [], [l == null ? void 0 : l.chapters]),
        I = d[C],
        L = (I == null ? void 0 : I.title) || "",
        U = u.useMemo(
            () => (I ? (t ? (M == null ? [] : yn(M.slice(I.start, I.end), I.title)) : yn(I.text || "")) : []),
            [I, M, t],
        ),
        Ce = u.useMemo(
            () =>
                U.join(`
`),
            [U],
        );
    (u.useLayoutEffect(() => {
        var q, ee;
        const n = r.current;
        if (!w || !n || !U.length || !G.w) return;
        const i = n.querySelector(".nv-rd-page"),
            f = Math.max(1, Math.round((((i == null ? void 0 : i.scrollWidth) || n.scrollWidth) + 26) / G.w));
        Z(f);
        let g = 0;
        (S.current
            ? _.current
                ? (g = f - 1)
                : (g = Math.min(o, f - 1))
            : ((S.current = !0),
              (g =
                  ((q = l == null ? void 0 : l.progress) == null ? void 0 : q.ch) === C
                      ? Math.round(
                            (((ee = l == null ? void 0 : l.progress) == null ? void 0 : ee.ratio) || 0) *
                                (f - 1),
                        )
                      : 0)),
            (_.current = !1),
            z(g),
            (n.scrollLeft = 0),
            requestAnimationFrame(() => requestAnimationFrame(() => F(!1))));
    }, [w, U, G.w, G.h, b.size, b.leading, b.serif, C]),
        u.useEffect(() => {
            !w && r.current && (r.current.scrollLeft = 0);
        }, [w]),
        u.useEffect(() => {
            if (w || !U.length) return;
            let n = 0,
                i = 0;
            return (
                (n = requestAnimationFrame(() => {
                    i = requestAnimationFrame(() => F(!1));
                })),
                () => {
                    (cancelAnimationFrame(n), cancelAnimationFrame(i));
                }
            );
        }, [w, U.length]),
        u.useLayoutEffect(() => {
            var i, f;
            const n = r.current;
            if (!(w || !n || !U.length) && !S.current) {
                S.current = !0;
                const g =
                    (((i = l == null ? void 0 : l.progress) == null ? void 0 : i.ch) === C &&
                        ((f = l == null ? void 0 : l.progress) == null ? void 0 : f.ratio)) ||
                    0;
                requestAnimationFrame(() => {
                    n.scrollTop = g * Math.max(0, n.scrollHeight - n.clientHeight);
                });
            }
        }, [U.length]));
    const Ie = u.useRef(0),
        Ee = () => {
            const n = r.current;
            n &&
                (clearTimeout(Ie.current),
                (Ie.current = setTimeout(() => {
                    const i =
                        n.scrollHeight > n.clientHeight ? n.scrollTop / (n.scrollHeight - n.clientHeight) : 0;
                    h(N, a, { progress: { ch: C, ratio: Math.round(i * 1e3) / 1e3 }, readAt: Date.now() });
                }, 400)));
        },
        pe = (n, { last: i = !1 } = {}) => {
            n < 0 ||
                n >= d.length ||
                ((_.current = i),
                w && n !== C && (F(!0), ce(n > C ? "next" : "prev")),
                i || z(0),
                v(n),
                O(null),
                h(N, a, { progress: { ch: n, ratio: 0 }, readAt: Date.now() }),
                requestAnimationFrame(() => {
                    r.current && (r.current.scrollTop = 0);
                }));
        },
        oe = (n) => {
            const i = o + n;
            if (i < 0) {
                C > 0 && pe(C - 1, { last: !0 });
                return;
            }
            if (i >= P) {
                C < d.length - 1 && pe(C + 1);
                return;
            }
            (z(i),
                h(N, a, {
                    progress: { ch: C, ratio: P > 1 ? Math.round((i / (P - 1)) * 1e3) / 1e3 : 0 },
                    readAt: Date.now(),
                }));
        },
        Be = u.useRef(null),
        ts = (n) => {
            var g;
            if (n.target.closest("button, input, textarea, a")) return;
            if ((g = Be.current) != null && g.moved) {
                Be.current = null;
                return;
            }
            if (R) return;
            if ($) {
                D(!1);
                return;
            }
            if (!w) {
                D(!0);
                return;
            }
            const i = r.current.getBoundingClientRect(),
                f = (n.clientX - i.left) / i.width;
            f < 0.3 ? oe(-1) : f > 0.7 ? oe(1) : D(!0);
        },
        De = (n) => {
            Be.current = { x: n.clientX, y: n.clientY, moved: !1 };
        },
        _e = (n) => {
            ln();
            const i = Be.current;
            if (!w || !i || R) return;
            const f = n.clientX - i.x,
                g = n.clientY - i.y;
            Math.abs(f) > 40 && Math.abs(f) > Math.abs(g) && ((i.moved = !0), oe(f < 0 ? 1 : -1));
        },
        X = t
            ? (p.characters || []).find((n) => {
                  var i;
                  return n.id === ((i = l == null ? void 0 : l.companion) == null ? void 0 : i.charId);
              })
            : null,
        Le = t ? (l == null ? void 0 : l.notes) || [] : [],
        Js = t ? (l == null ? void 0 : l.marks) || [] : [],
        as = Le.filter((n) => n.ch === C),
        dt = u.useMemo(() => {
            const n = new Map();
            for (const i of as) {
                const f = i.paras[i.paras.length - 1];
                (n.has(f) || n.set(f, []), n.get(f).push(i));
            }
            return n;
        }, [as]),
        ht = u.useMemo(() => new Set(as.flatMap((n) => n.paras)), [as]),
        Qs = u.useMemo(() => new Set(Js.filter((n) => n.ch === C).flatMap((n) => n.paras)), [Js, C]),
        ls = t && X ? X.id : "",
        [Zs, en] = u.useState(0),
        Te = u.useRef(null),
        Je = u.useRef(Date.now()),
        We = u.useRef(null);
    We.current = {
        ch: C,
        title: ((pn = d[C]) == null ? void 0 : pn.title) || "",
        ratio:
            (((xn = l == null ? void 0 : l.progress) == null ? void 0 : xn.ch) === C &&
                ((jn = l == null ? void 0 : l.progress) == null ? void 0 : jn.ratio)) ||
            0,
    };
    const Ns = () => {
        Je.current = Date.now();
    };
    u.useEffect(() => {
        if (!ls) return;
        const n = (q) => h("books", a, (ee) => ({ coSessions: Wt(ee.coSessions, q) }));
        ((Te.current = Et({ id: hs("crs_"), charId: ls, ch: We.current.ch, title: We.current.title })),
            (Je.current = Date.now()),
            en(0));
        const i = (q = document.visibilityState === "visible") => {
                const ee = wn(Te.current, { lastActive: Je.current, visible: q, pos: We.current });
                ((Te.current = ee), en(ee.ms), ee.ms >= 6e4 && n(ee));
            },
            f = setInterval(() => i(), Bt),
            g = () => {
                document.visibilityState === "hidden"
                    ? i(!0)
                    : ((Te.current = { ...Te.current, end: Date.now() }), (Je.current = Date.now()));
            };
        return (
            document.addEventListener("visibilitychange", g),
            () => {
                (clearInterval(f), document.removeEventListener("visibilitychange", g));
                const q = {
                    ...wn(Te.current, {
                        lastActive: Je.current,
                        visible: document.visibilityState === "visible",
                        pos: We.current,
                    }),
                    done: !0,
                };
                ((Te.current = null), n(q));
            }
        );
    }, [ls, a]);
    const ut = Dt(l)
            .filter((n) => {
                var i;
                return n.done || n.id !== ((i = Te.current) == null ? void 0 : i.id);
            })
            .slice(-3)
            .reverse(),
        sn = Ne(`novel-note-${a}`),
        ks = (n, i) =>
            h("books", a, (f) => ({
                notes: (f.notes || []).map((g) => (g.id === n ? { ...g, ...i(g) } : g)),
            })),
        nn = (n) => {
            let i = U.slice(0, n).join(`
`);
            if (i.length < 1200 && C > 0 && M) {
                const f = d[C - 1];
                i = `${f.title}
${M.slice(Math.max(f.start, f.end - (1600 - i.length)), f.end).trim()}

${L}
${i}`;
            }
            return i;
        },
        tn = (n) => {
            const i = Le.filter((f) => {
                var g;
                return f.id !== n && ((g = f.thread) == null ? void 0 : g.some((q) => q.who === "char"));
            }).slice(-6);
            return i.length
                ? [
                      "[Your earlier notes in this book (stay consistent; do not repeat yourself)]",
                      ...i.map((f) => {
                          var g;
                          return `- ${((g = d[f.ch]) == null ? void 0 : g.title) || ""} · "${f.quote.slice(0, 60)}" → ${f.thread
                              .filter((q) => q.who === "char")
                              .map((q) => q.text.slice(0, 140))
                              .join(" / ")}`;
                      }),
                  ].join(`
`)
                : "";
        },
        ys = async (n, i = "") => {
            var re;
            const f = A();
            if (!f || !X) return;
            const g = n.paras[0],
                q = n.paras[n.paras.length - 1],
                ee = Ut({
                    char: X,
                    me: T,
                    book: l,
                    chapterTitle: (re = d[n.ch]) == null ? void 0 : re.title,
                    before: n.ch === C ? nn(g) : "",
                    passage: n.quote,
                    after:
                        n.ch === C
                            ? U.slice(q + 1, q + 3).join(`
`)
                            : "",
                    thread: (n.thread || []).filter(
                        (ae) => !(i && ae === n.thread[n.thread.length - 1] && ae.who === "me"),
                    ),
                    ask: i,
                    priorNotes: tn(n.id),
                });
            ks(n.id, () => ({ pending: !0 }));
            const le = await sn.run((ae) => je(f, ee, ae), { label: "批注" });
            (ks(n.id, (ae) => ({
                pending: !1,
                ...(le.value
                    ? {
                          thread: [
                              ...(ae.thread || []),
                              { who: "char", text: le.value.trim(), at: Date.now() },
                          ],
                      }
                    : {}),
            })),
                le.error && c(le.error.message || "TA 没回上来，再试一次", "error"));
        },
        mt = () => {
            if (!(R != null && R.size)) return;
            if (!X) {
                (k("co"), c("先选一个一起读的人", "info"));
                return;
            }
            const n = [...R].sort((f, g) => f - g),
                i = {
                    id: hs("nn_"),
                    ch: C,
                    paras: n,
                    quote: n.map((f) => U[f]).join(`
`),
                    by: "me",
                    charId: X.id,
                    thread: [],
                    at: Date.now(),
                };
            (h("books", a, (f) => ({ notes: [...(f.notes || []), i] })), O(null), Y(i.id), ys(i));
        },
        pt = () => {
            const n = [...R].sort((f, g) => f - g),
                i = n.every((f) => Qs.has(f));
            (h("books", a, (f) => ({
                marks: i
                    ? (f.marks || [])
                          .map((g) =>
                              g.ch === C ? { ...g, paras: g.paras.filter((q) => !n.includes(q)) } : g,
                          )
                          .filter((g) => g.paras.length)
                    : [...(f.marks || []), { id: hs("nm_"), ch: C, paras: n, at: Date.now() }],
            })),
                O(null));
        },
        xt = () => {
            var i;
            const n = [...R].sort((f, g) => f - g).map((f) => U[f]).join(`
`);
            ((i = navigator.clipboard) == null ||
                i
                    .writeText(n)
                    .then(() => c("已复制", "success"))
                    .catch(() => c("复制失败", "error")),
                O(null));
        },
        ke = u.useRef({ ch: -1, max: -1, since: 0 }),
        Ue = u.useRef(new Set()),
        is = u.useRef(null),
        an = ((vn = l == null ? void 0 : l.companion) == null ? void 0 : vn.random) || "off",
        rs = t && X ? Lt(an) : 0;
    (u.useEffect(() => {
        if (!rs || !U.length) return;
        const n = r.current;
        if (!n) return;
        ke.current.ch !== C && ((ke.current = { ch: C, max: -1, since: 0 }), (Ue.current = new Set()));
        const i = new IntersectionObserver(
            (f) => {
                for (const q of f) {
                    const ee = Number(q.target.dataset.i);
                    q.isIntersecting ? Ue.current.add(ee) : Ue.current.delete(ee);
                }
                if (H.current || !Ue.current.size) return;
                const g = Math.max(...Ue.current);
                if (ke.current.max < 0) {
                    ke.current.max = g;
                    return;
                }
                (g > ke.current.max && ((ke.current.since += g - ke.current.max), (ke.current.max = g)),
                    ke.current.since >= rs && !is.current && ((ke.current.since = 0), jt(g)));
            },
            { root: n, threshold: 0.6 },
        );
        return (n.querySelectorAll(".nv-p").forEach((f) => i.observe(f)), () => i.disconnect());
    }, [rs, U, C]),
        u.useEffect(
            () => () => {
                var n;
                return (n = is.current) == null ? void 0 : n.abort();
            },
            [],
        ));
    const [cs, os] = u.useState(null),
        jt = async (n) => {
            const i = A();
            if (!i || !X) return;
            const f = Math.max(0, n - Math.min(rs, 10) + 1),
                g = U.slice(f, n + 1);
            if (!g.join("").trim()) return;
            const q = new AbortController();
            is.current = q;
            try {
                const ee = await je(
                        i,
                        Pt({
                            char: X,
                            me: T,
                            book: l,
                            chapterTitle: L,
                            before: nn(f),
                            paragraphs: g,
                            priorNotes: tn(""),
                        }),
                        q.signal,
                    ),
                    le = Ot(ee, g);
                if (!le) return;
                const re = {
                    id: hs("nn_"),
                    ch: C,
                    paras: [f + le.para],
                    quote: le.quote,
                    by: "char",
                    charId: X.id,
                    thread: [{ who: "char", text: le.say, at: Date.now() }],
                    at: Date.now(),
                };
                (h("books", a, (ae) => ({ notes: [...(ae.notes || []), re] })),
                    os(re.id),
                    setTimeout(() => os((ae) => (ae === re.id ? null : ae)), 7e3));
            } catch {
            } finally {
                is.current = null;
            }
        },
        Ae = u.useRef(null),
        vt = (n, i) => {
            if (!t) return;
            const f = i.clientX,
                g = i.clientY;
            Ae.current = {
                i: n,
                x: f,
                y: g,
                fired: !1,
                t: setTimeout(() => {
                    var q;
                    ((Ae.current.fired = !0),
                        (q = navigator.vibrate) == null || q.call(navigator, 8),
                        D(!1),
                        O((ee) => new Set([...(ee || []), n])));
                }, 420),
            };
        },
        ft = (n) => {
            const i = Ae.current;
            i &&
                !i.fired &&
                (Math.abs(n.clientX - i.x) > 8 || Math.abs(n.clientY - i.y) > 8) &&
                (clearTimeout(i.t), (Ae.current = null));
        },
        ln = () => {
            const n = Ae.current;
            n && !n.fired && clearTimeout(n.t);
        },
        bt = (n, i) => {
            var f;
            if ((f = Ae.current) != null && f.fired) {
                ((Ae.current = null), i.stopPropagation());
                return;
            }
            if (((Ae.current = null), R)) {
                i.stopPropagation();
                const g = new Set(R);
                (g.has(n) ? g.delete(n) : g.add(n), O(g.size ? g : null));
            }
        },
        se = t ? null : l,
        rn = se ? Ge(p, se.charIds) : [],
        Se = Ne(`fic-${a}`),
        cn = se && C === d.length - 1,
        ye = se ? Ze.find((n) => n.k === se.length) || Ze[1] : null,
        [$e, ws] = u.useState({ pick: -1, own: "" }),
        [gt, Cs] = u.useState(!1),
        [on, dn] = u.useState(""),
        [Nt, hn] = u.useState(!1);
    u.useEffect(() => {
        ws({ pick: -1, own: "" });
    }, [C]);
    const [Pe, kt] = u.useState(1),
        yt = async (n, i, f) => {
            var q, ee;
            const g = {
                readers: (((q = i.commentSpeakers) == null ? void 0 : q.readers) ?? !0) !== !1,
                chars: Ge(p, ((ee = i.commentSpeakers) == null ? void 0 : ee.charIds) || []),
            };
            if (!(!g.readers && !g.chars.length))
                try {
                    const le = await je(
                            n,
                            Bn({
                                kind: "fic",
                                work: i,
                                chapterTitle: f.title,
                                chapterText: f.text,
                                speakers: g,
                                me: T,
                                count: 6,
                                existing: [],
                            }),
                            void 0,
                            { _keepAlive: !0 },
                        ),
                        re = Fs(le, { chars: g.chars, existing: [] });
                    re.length &&
                        h("fics", a, (ae) => ({
                            comments: {
                                ...(ae.comments || {}),
                                [f.id]: [...((ae.comments || {})[f.id] || []), ...re],
                            },
                        }));
                } catch {}
        },
        wt = async () => {
            var q, ee;
            const n = A();
            if (!n || !se) return;
            const i =
                $e.own.trim() ||
                ($e.pick >= 0 && ((q = I == null ? void 0 : I.next) == null ? void 0 : q[$e.pick])) ||
                "";
            let f = se,
                g = 0;
            for (let le = 0; le < Pe; le++) {
                const re = f.chapters.length + 1,
                    ae = le === 0 ? i : "",
                    ze = await Se.run(
                        (ds) =>
                            je(n, xs({ fic: f, chars: rn, me: T, n: re, direction: ae }), ds, {
                                _keepAlive: !0,
                            }),
                        { label: Pe > 1 ? `写第 ${re} 章（${le + 1} / ${Pe}）` : "写下一章" },
                    );
                if (ze.aborted || ze.skipped) break;
                const Me = ze.value ? js(ze.value) : null;
                if (!Me) {
                    c(
                        ((ee = ze.error) == null ? void 0 : ee.message) ||
                            (g ? `已写至第 ${re - 1} 章，生成中断，请重试` : "本章生成失败，请重试"),
                        "error",
                    );
                    break;
                }
                const $s = Ps(Me, ae),
                    kn = !!(ye.chapters && re >= ye.chapters);
                if (
                    (h("fics", a, (ds) => ({
                        chapters: [...ds.chapters, $s],
                        ...(Me.outline ? { outline: Me.outline } : null),
                        status: kn ? "done" : "ongoing",
                        progress: { ch: ds.chapters.length, ratio: 0 },
                    })),
                    (f = {
                        ...f,
                        chapters: [...f.chapters, $s],
                        ...(Me.outline ? { outline: Me.outline } : null),
                    }),
                    g++,
                    yt(n, f, $s),
                    le === 0 &&
                        (v(re - 1),
                        requestAnimationFrame(() => {
                            r.current && (r.current.scrollTop = 0);
                        })),
                    kn)
                )
                    break;
            }
            g > 1 && c(`已生成 ${g} 章`, "success");
        },
        Ct = async () => {
            var re;
            const n = A();
            if (!n || !se || !I) return;
            Cs(!1);
            const i = C + 1,
                f = { ...se, chapters: d.slice(0, C) },
                g = await Se.run(
                    (ae) =>
                        je(
                            n,
                            xs({
                                fic: f,
                                chars: rn,
                                me: T,
                                n: i,
                                direction: I.direction || "",
                                rewrite: { note: on.trim(), old: I.text },
                            }),
                            ae,
                            { _keepAlive: !0 },
                        ),
                    { label: "重写" },
                );
            if (g.aborted || g.skipped) return;
            const q = g.value ? js(g.value) : null;
            if (!q) {
                c(((re = g.error) == null ? void 0 : re.message) || "没重写出来，再试一次", "error");
                return;
            }
            const { outline: ee, ...le } = q;
            (h("fics", a, (ae) => ({
                chapters: ae.chapters.map((ze, Me) => (Me === C ? { ...ze, ...le, at: Date.now() } : ze)),
            })),
                dn(""),
                requestAnimationFrame(() => {
                    r.current && (r.current.scrollTop = 0);
                }));
        },
        un = t ? String(C) : I == null ? void 0 : I.id,
        mn = ((l == null ? void 0 : l.comments) || {})[un] || [],
        St = (n) => h(N, a, (i) => ({ comments: { ...(i.comments || {}), [un]: n } })),
        $t = t
            ? { readers: !0, charIds: X ? [X.id] : [] }
            : (se == null ? void 0 : se.commentSpeakers) || { readers: !0, charIds: [] },
        [It, Ss] = u.useState(!1);
    if (!l) return null;
    const fe = Le.find((n) => n.id === W),
        Tt = {
            "--rd-bg": y.bg,
            "--rd-ink": y.ink,
            "--rd-sub": y.sub,
            "--rd-line": y.line,
            "--rd-bar": y.bar,
            "--rd-mark": y.mark,
            "--rd-size": `${b.size}px`,
            "--rd-lead": b.leading,
            "--rd-text": b.ink || y.ink,
        },
        At =
            w && G.w
                ? {
                      height: G.h,
                      columnWidth: G.w - 52,
                      columnGap: 52,
                      columnFill: "auto",
                      transform: `translate3d(${-o * G.w}px,0,0)`,
                  }
                : void 0;
    return e.jsxs(ne.div, {
        className: `nv-reader ${b.serif ? "serif" : "sans"} th-${b.theme}`,
        style: Tt,
        onPointerDownCapture: Ns,
        onScrollCapture: Ns,
        onKeyDownCapture: Ns,
        ...He,
        children: [
            e.jsxs("div", {
                className: "nv-rd-status",
                children: [
                    e.jsx("span", { children: L }),
                    e.jsxs("span", {
                        children: [
                            ls ? e.jsxs(e.Fragment, { children: ["共读 ", Is(Zs), " · "] }) : null,
                            w ? `${o + 1} / ${P} 页 · ` : "",
                            C + 1,
                            " / ",
                            d.length,
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: `nv-rd-scroll${w ? " paged" : ""}${K ? ` enter-${K}` : ""}`,
                ref: r,
                onAnimationEnd: () => ce(""),
                onScroll: w ? void 0 : Ee,
                onClick: ts,
                onPointerDown: De,
                onPointerMove: ft,
                onPointerUp: _e,
                onPointerCancel: ln,
                children:
                    t && M == null
                        ? e.jsx("div", {
                              className: "nv-rd-loading",
                              children: e.jsx("span", { className: "nv-spin" }),
                          })
                        : e.jsxs("article", {
                              className: `nv-rd-page${de ? " no-anim" : ""}`,
                              style: At,
                              children: [
                                  e.jsxs("header", {
                                      className: "nv-rd-head",
                                      children: [
                                          e.jsx("small", {
                                              children: t ? `chapter ${C + 1}` : `第 ${C + 1} 章`,
                                          }),
                                          e.jsx("h1", { children: L || "正文" }),
                                          !t &&
                                              e.jsxs("span", {
                                                  className: "nv-rd-meta",
                                                  children: [
                                                      Xe((I == null ? void 0 : I.text) || ""),
                                                      " 字",
                                                      I != null && I.direction ? " · 按你选的走向" : "",
                                                  ],
                                              }),
                                      ],
                                  }),
                                  U.map((n, i) => {
                                      const f = dt.get(i);
                                      return e.jsxs(
                                          "p",
                                          {
                                              "data-i": i,
                                              className: `nv-p${R != null && R.has(i) ? " sel" : ""}${ht.has(i) ? " noted" : ""}${Qs.has(i) ? " marked" : ""}`,
                                              onPointerDown: (g) => vt(i, g),
                                              onClick: (g) => bt(i, g),
                                              onContextMenu: (g) => g.preventDefault(),
                                              children: [
                                                  n,
                                                  f &&
                                                      f.map((g) =>
                                                          e.jsx(
                                                              "button",
                                                              {
                                                                  className: `nv-p-note btn-plain${cs === g.id ? " peek" : ""}${g.pending ? " wait" : ""}`,
                                                                  onClick: (q) => {
                                                                      (q.stopPropagation(),
                                                                          Y(g.id),
                                                                          os(null));
                                                                  },
                                                                  "aria-label": "查看批注",
                                                                  children: (() => {
                                                                      const q = (p.characters || []).find(
                                                                          (ee) => ee.id === g.charId,
                                                                      );
                                                                      return q
                                                                          ? e.jsx(he, { char: q, size: 18 })
                                                                          : e.jsx("span", {
                                                                                className: "nv-p-note-dot",
                                                                            });
                                                                  })(),
                                                              },
                                                              g.id,
                                                          ),
                                                      ),
                                              ],
                                          },
                                          i,
                                      );
                                  }),
                                  e.jsxs("footer", {
                                      className: "nv-rd-end",
                                      children: [
                                          e.jsx("div", {
                                              className: "nv-rd-endline",
                                              children: e.jsx("span", {
                                                  children:
                                                      cn && (se == null ? void 0 : se.status) === "done"
                                                          ? "全文完"
                                                          : "本章完",
                                              }),
                                          }),
                                          e.jsxs("button", {
                                              className: "nv-rd-cm btn-plain",
                                              onClick: () => Q(!0),
                                              children: [
                                                  e.jsx(zn, { size: 17 }),
                                                  e.jsx("span", { children: "本章评论" }),
                                                  e.jsx("b", { children: mn.length || "" }),
                                                  e.jsx(us, { size: 14 }),
                                              ],
                                          }),
                                          se &&
                                              cn &&
                                              se.status !== "done" &&
                                              e.jsxs("div", {
                                                  className: "nv-dir",
                                                  children: [
                                                      e.jsxs("div", {
                                                          className: "nv-dir-head",
                                                          children: [
                                                              e.jsx("b", { children: "剧情走向" }),
                                                              e.jsx("small", {
                                                                  children: "选一个，或者写下你想看的",
                                                              }),
                                                          ],
                                                      }),
                                                      ((I == null ? void 0 : I.next) || []).map((n, i) =>
                                                          e.jsxs(
                                                              "button",
                                                              {
                                                                  className: `nv-dir-opt btn-plain${$e.pick === i && !$e.own.trim() ? " on" : ""}`,
                                                                  onClick: () =>
                                                                      ws({
                                                                          pick: $e.pick === i ? -1 : i,
                                                                          own: "",
                                                                      }),
                                                                  children: [
                                                                      e.jsx("span", {
                                                                          className: "nv-dir-n",
                                                                          children: String(i + 1).padStart(
                                                                              2,
                                                                              "0",
                                                                          ),
                                                                      }),
                                                                      e.jsx("span", { children: n }),
                                                                  ],
                                                              },
                                                              i,
                                                          ),
                                                      ),
                                                      e.jsx("textarea", {
                                                          className: "nv-dir-own",
                                                          rows: 2,
                                                          value: $e.own,
                                                          onChange: (n) =>
                                                              ws({ pick: -1, own: n.target.value }),
                                                          placeholder:
                                                              "自己写：下一章发生什么、谁做了什么选择",
                                                      }),
                                                      !Se.busy &&
                                                          e.jsxs("div", {
                                                              className: "nv-dir-batch",
                                                              children: [
                                                                  e.jsx("span", { children: "每次生成" }),
                                                                  [1, 2, 3, 5]
                                                                      .filter(
                                                                          (n) =>
                                                                              !(ye != null && ye.chapters) ||
                                                                              n <=
                                                                                  Math.max(
                                                                                      1,
                                                                                      ye.chapters - d.length,
                                                                                  ),
                                                                      )
                                                                      .map((n) =>
                                                                          e.jsxs(
                                                                              "button",
                                                                              {
                                                                                  className: `btn-plain${Pe === n ? " on" : ""}`,
                                                                                  onClick: () => kt(n),
                                                                                  children: [n, " 章"],
                                                                              },
                                                                              n,
                                                                          ),
                                                                      ),
                                                              ],
                                                          }),
                                                      e.jsxs("div", {
                                                          className: "nv-dir-act",
                                                          children: [
                                                              e.jsx("button", {
                                                                  className: `nv-btn${Se.busy ? " busy" : ""}`,
                                                                  onClick: Se.busy ? Se.stop : wt,
                                                                  children: Se.busy
                                                                      ? e.jsxs(e.Fragment, {
                                                                            children: [
                                                                                e.jsx("span", {
                                                                                    className:
                                                                                        "nv-spin light",
                                                                                }),
                                                                                "正在写第 ",
                                                                                d.length + 1,
                                                                                " 章 · 停止",
                                                                            ],
                                                                        })
                                                                      : e.jsxs(e.Fragment, {
                                                                            children: [
                                                                                e.jsx(_n, {
                                                                                    size: 16,
                                                                                    weight: "bold",
                                                                                }),
                                                                                Pe > 1
                                                                                    ? `写第 ${d.length + 1}—${d.length + Pe} 章`
                                                                                    : `写第 ${d.length + 1} 章`,
                                                                            ],
                                                                        }),
                                                              }),
                                                              !Se.busy &&
                                                                  e.jsxs("button", {
                                                                      className: "nv-text-btn btn-plain",
                                                                      onClick: () => Cs(!0),
                                                                      children: [
                                                                          e.jsx(Sa, { size: 14 }),
                                                                          "重写这一章",
                                                                      ],
                                                                  }),
                                                              !Se.busy &&
                                                                  e.jsxs("button", {
                                                                      className: "nv-text-btn btn-plain",
                                                                      onClick: () => hn(!0),
                                                                      children: [
                                                                          e.jsx(Wn, { size: 14 }),
                                                                          "完结",
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      e.jsxs("div", {
                                                          className: "nv-dir-hint",
                                                          children: [
                                                              $e.own.trim()
                                                                  ? "按你写的走向"
                                                                  : $e.pick >= 0
                                                                    ? "按选中的走向"
                                                                    : "不选就按原来的走向继续",
                                                              Pe > 1 ? "（走向用在第一章，后面按大纲）" : "",
                                                              ye != null && ye.chapters
                                                                  ? ` · 计划约 ${ye.chapters} 章`
                                                                  : "",
                                                              " · 每章写好自带几条评论",
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          se &&
                                              e.jsxs("button", {
                                                  className: "nv-rd-cm btn-plain",
                                                  onClick: () => Ss(!0),
                                                  children: [
                                                      e.jsx(Gs, { size: 17 }),
                                                      e.jsx("span", { children: "把这一章分享给 TA" }),
                                                      e.jsx(us, { size: 14 }),
                                                  ],
                                              }),
                                          e.jsxs("div", {
                                              className: "nv-rd-nav",
                                              children: [
                                                  e.jsxs("button", {
                                                      className: "btn-plain",
                                                      disabled: C <= 0,
                                                      onClick: () => pe(C - 1),
                                                      children: [
                                                          e.jsx(Mn, { size: 15, weight: "bold" }),
                                                          "上一章",
                                                      ],
                                                  }),
                                                  e.jsxs("button", {
                                                      className: "btn-plain",
                                                      disabled: C >= d.length - 1,
                                                      onClick: () => pe(C + 1),
                                                      children: [
                                                          "下一章",
                                                          e.jsx(us, { size: 15, weight: "bold" }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
            }),
            e.jsx(ue, {
                children:
                    $ &&
                    !R &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs(
                                ne.div,
                                {
                                    className: "nv-rd-top",
                                    initial: { y: -80 },
                                    animate: { y: 0 },
                                    exit: { y: -80 },
                                    transition: { duration: 0.22 },
                                    children: [
                                        e.jsx("button", {
                                            className: "nv-rd-icon btn-plain",
                                            onClick: m,
                                            "aria-label": "返回",
                                            children: e.jsx(Mn, { size: 22, weight: "bold" }),
                                        }),
                                        e.jsxs("div", {
                                            className: "nv-rd-top-t",
                                            children: [
                                                e.jsx("b", { children: l.title }),
                                                e.jsx("small", { children: L }),
                                            ],
                                        }),
                                        e.jsx("span", { style: { width: 40 } }),
                                    ],
                                },
                                "top",
                            ),
                            e.jsxs(
                                ne.div,
                                {
                                    className: "nv-rd-bot",
                                    initial: { y: 140 },
                                    animate: { y: 0 },
                                    exit: { y: 140 },
                                    transition: { duration: 0.22 },
                                    children: [
                                        e.jsxs("div", {
                                            className: "nv-rd-prog",
                                            children: [
                                                e.jsx("button", {
                                                    className: "btn-plain",
                                                    disabled: C <= 0,
                                                    onClick: () => pe(C - 1),
                                                    children: "上一章",
                                                }),
                                                e.jsx("input", {
                                                    type: "range",
                                                    min: 0,
                                                    max: Math.max(0, d.length - 1),
                                                    value: C,
                                                    onChange: (n) => pe(Number(n.target.value)),
                                                }),
                                                e.jsx("button", {
                                                    className: "btn-plain",
                                                    disabled: C >= d.length - 1,
                                                    onClick: () => pe(C + 1),
                                                    children: "下一章",
                                                }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "nv-rd-tools",
                                            children: [
                                                e.jsxs("button", {
                                                    className: "btn-plain",
                                                    onClick: () => k("toc"),
                                                    children: [
                                                        e.jsx($a, { size: 21 }),
                                                        e.jsx("span", { children: "目录" }),
                                                    ],
                                                }),
                                                t &&
                                                    e.jsxs("button", {
                                                        className: "btn-plain",
                                                        onClick: () => k("co"),
                                                        children: [
                                                            X
                                                                ? e.jsx(he, { char: X, size: 21 })
                                                                : e.jsx(Fn, { size: 21 }),
                                                            e.jsx("span", {
                                                                children: X ? "共读中" : "一起读",
                                                            }),
                                                        ],
                                                    }),
                                                e.jsxs("button", {
                                                    className: "btn-plain",
                                                    onClick: () => Q(!0),
                                                    children: [
                                                        e.jsx(zn, { size: 21 }),
                                                        e.jsx("span", { children: "评论" }),
                                                    ],
                                                }),
                                                e.jsxs("button", {
                                                    className: "btn-plain",
                                                    onClick: () => k("aa"),
                                                    children: [
                                                        e.jsx(Ia, { size: 21 }),
                                                        e.jsx("span", { children: "设置" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                "bot",
                            ),
                        ],
                    }),
            }),
            e.jsx(ue, {
                children:
                    R &&
                    e.jsxs(ne.div, {
                        className: "nv-selbar",
                        initial: { y: 120 },
                        animate: { y: 0 },
                        exit: { y: 120 },
                        transition: { type: "spring", damping: 30, stiffness: 380 },
                        children: [
                            e.jsxs("div", {
                                className: "nv-selbar-head",
                                children: [
                                    e.jsxs("span", { children: ["已选 ", R.size, " 段"] }),
                                    e.jsx("button", {
                                        className: "btn-plain",
                                        onClick: () => O(null),
                                        "aria-label": "取消",
                                        children: e.jsx(Rn, { size: 16, weight: "bold" }),
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "nv-selbar-acts",
                                children: [
                                    e.jsxs("button", {
                                        className: "btn-plain",
                                        onClick: xt,
                                        children: [
                                            e.jsx(Un, { size: 19 }),
                                            e.jsx("span", { children: "复制" }),
                                        ],
                                    }),
                                    e.jsxs("button", {
                                        className: "btn-plain",
                                        onClick: pt,
                                        children: [
                                            e.jsx(Ta, { size: 19 }),
                                            e.jsx("span", { children: "划线" }),
                                        ],
                                    }),
                                    e.jsxs("button", {
                                        className: "btn-plain main",
                                        onClick: mt,
                                        children: [
                                            X ? e.jsx(he, { char: X, size: 20 }) : e.jsx(Fn, { size: 19 }),
                                            e.jsx("span", {
                                                children: X ? `请 ${ie(X)} 批注` : "选一个人一起读",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
            }),
            e.jsx(ue, {
                children:
                    cs &&
                    X &&
                    !R &&
                    e.jsxs(ne.button, {
                        className: "nv-peek btn-plain",
                        initial: { y: 40, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        exit: { y: 40, opacity: 0 },
                        onClick: () => {
                            (Y(cs), os(null));
                        },
                        children: [
                            e.jsx(he, { char: X, size: 24 }),
                            e.jsxs("span", {
                                children: [
                                    ie(X),
                                    " ",
                                    (() => {
                                        const n = Le.find((i) => i.id === cs);
                                        return n && n.ch === C && n.paras.some((i) => Ue.current.has(i))
                                            ? "在这一页留了批注"
                                            : "在前面读过的地方留了批注";
                                    })(),
                                ],
                            }),
                            e.jsx(us, { size: 13, weight: "bold" }),
                        ],
                    }),
            }),
            e.jsxs(ue, {
                children: [
                    B === "toc" &&
                        e.jsxs(
                            zs,
                            {
                                onClose: () => k(null),
                                children: [
                                    e.jsxs("div", {
                                        className: "nv-sheet-title",
                                        children: ["目录", e.jsxs("small", { children: [d.length, " 章"] })],
                                    }),
                                    e.jsx(Xa, {
                                        chapters: d,
                                        cur: C,
                                        notes: Le,
                                        onPick: (n) => {
                                            (pe(n), k(null), D(!1));
                                        },
                                    }),
                                ],
                            },
                            "toc",
                        ),
                    B === "aa" &&
                        e.jsxs(
                            zs,
                            {
                                onClose: () => k(null),
                                children: [
                                    e.jsx("div", { className: "nv-sheet-title", children: "阅读设置" }),
                                    e.jsxs("div", {
                                        className: "nv-aa-row",
                                        children: [
                                            e.jsx("span", { children: "背景" }),
                                            e.jsx("div", {
                                                className: "nv-swatches",
                                                children: Va.map(([n, i]) =>
                                                    e.jsx(
                                                        "button",
                                                        {
                                                            className: `btn-plain nv-swatch${b.theme === n ? " on" : ""}`,
                                                            style: { background: ms[n].bg, color: ms[n].ink },
                                                            onClick: () =>
                                                                j((f) => ({
                                                                    prefs: { ...f.prefs, theme: n },
                                                                })),
                                                            children: i,
                                                        },
                                                        n,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "nv-aa-row",
                                        children: [
                                            e.jsx("span", { children: "字号" }),
                                            e.jsxs("div", {
                                                className: "nv-stepper",
                                                children: [
                                                    e.jsx("button", {
                                                        className: "btn-plain",
                                                        onClick: () =>
                                                            j((n) => ({
                                                                prefs: {
                                                                    ...n.prefs,
                                                                    size: Math.max(14, n.prefs.size - 1),
                                                                },
                                                            })),
                                                        children: "A−",
                                                    }),
                                                    e.jsx("b", { children: b.size }),
                                                    e.jsx("button", {
                                                        className: "btn-plain",
                                                        onClick: () =>
                                                            j((n) => ({
                                                                prefs: {
                                                                    ...n.prefs,
                                                                    size: Math.min(26, n.prefs.size + 1),
                                                                },
                                                            })),
                                                        children: "A+",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "nv-aa-row",
                                        children: [
                                            e.jsx("span", { children: "文字颜色" }),
                                            e.jsxs("div", {
                                                className: "nv-inks",
                                                children: [
                                                    e.jsx("button", {
                                                        className: `btn-plain nv-ink def${b.ink ? "" : " on"}`,
                                                        style: { "--c": y.ink },
                                                        onClick: () =>
                                                            j((n) => ({ prefs: { ...n.prefs, ink: "" } })),
                                                        "aria-label": "跟随背景",
                                                        children: "A",
                                                    }),
                                                    As.map(([n, i]) =>
                                                        e.jsx(
                                                            "button",
                                                            {
                                                                className: `btn-plain nv-ink${b.ink === n ? " on" : ""}`,
                                                                style: { "--c": n },
                                                                onClick: () =>
                                                                    j((f) => ({
                                                                        prefs: { ...f.prefs, ink: n },
                                                                    })),
                                                                "aria-label": i,
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                                    e.jsx("label", {
                                                        className: `nv-ink custom${b.ink && !As.some(([n]) => n === b.ink) ? " on" : ""}`,
                                                        style: {
                                                            "--c":
                                                                b.ink && !As.some(([n]) => n === b.ink)
                                                                    ? b.ink
                                                                    : "transparent",
                                                        },
                                                        "aria-label": "自定义颜色",
                                                        children: e.jsx("input", {
                                                            type: "color",
                                                            value: b.ink || y.ink,
                                                            onChange: (n) =>
                                                                j((i) => ({
                                                                    prefs: {
                                                                        ...i.prefs,
                                                                        ink: n.target.value,
                                                                    },
                                                                })),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "nv-aa-row",
                                        children: [
                                            e.jsx("span", { children: "翻页" }),
                                            e.jsx("div", {
                                                className: "nv-glyphs",
                                                children: [
                                                    ["scroll", "上下滚动", Aa],
                                                    ["page", "左右翻页", za],
                                                ].map(([n, i, f]) =>
                                                    e.jsxs(
                                                        "button",
                                                        {
                                                            className: `btn-plain nv-glyph wide${(b.turn || "scroll") === n ? " on" : ""}`,
                                                            onClick: () =>
                                                                j((g) => ({
                                                                    prefs: { ...g.prefs, turn: n },
                                                                })),
                                                            children: [
                                                                e.jsx(f, { size: 20 }),
                                                                e.jsx("small", { children: i }),
                                                            ],
                                                        },
                                                        n,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "nv-aa-row",
                                        children: [
                                            e.jsx("span", { children: "行距" }),
                                            e.jsx("div", {
                                                className: "nv-glyphs",
                                                children: [
                                                    [1.7, "紧凑", 3],
                                                    [1.9, "标准", 5],
                                                    [2.2, "宽松", 7],
                                                ].map(([n, i, f]) =>
                                                    e.jsxs(
                                                        "button",
                                                        {
                                                            className: `btn-plain nv-glyph${b.leading === n ? " on" : ""}`,
                                                            onClick: () =>
                                                                j((g) => ({
                                                                    prefs: { ...g.prefs, leading: n },
                                                                })),
                                                            children: [
                                                                e.jsxs("span", {
                                                                    className: "nv-glyph-lines",
                                                                    style: { gap: f },
                                                                    children: [
                                                                        e.jsx("i", {}),
                                                                        e.jsx("i", {}),
                                                                        e.jsx("i", {}),
                                                                    ],
                                                                }),
                                                                e.jsx("small", { children: i }),
                                                            ],
                                                        },
                                                        n,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "nv-aa-row",
                                        children: [
                                            e.jsx("span", { children: "字体" }),
                                            e.jsx("div", {
                                                className: "nv-glyphs",
                                                children: [
                                                    [!0, "宋体", "serif"],
                                                    [!1, "黑体", "sans"],
                                                ].map(([n, i, f]) =>
                                                    e.jsxs(
                                                        "button",
                                                        {
                                                            className: `btn-plain nv-glyph${b.serif === n ? " on" : ""}`,
                                                            onClick: () =>
                                                                j((g) => ({
                                                                    prefs: { ...g.prefs, serif: n },
                                                                })),
                                                            children: [
                                                                e.jsx("span", {
                                                                    className: `nv-glyph-type ${f}`,
                                                                    children: "永",
                                                                }),
                                                                e.jsx("small", { children: i }),
                                                            ],
                                                        },
                                                        i,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            "aa",
                        ),
                    B === "co" &&
                        t &&
                        e.jsxs(
                            zs,
                            {
                                onClose: () => k(null),
                                children: [
                                    e.jsx("div", { className: "nv-sheet-title", children: "一起读" }),
                                    e.jsx("div", {
                                        className: "nv-sheet-sub",
                                        children:
                                            "选一个人和你读这本书。勾选段落可以请 TA 批注；打开随机批注，TA 读到有感觉的地方会自己留话。",
                                    }),
                                    e.jsxs("div", {
                                        className: "nv-co-list",
                                        children: [
                                            e.jsxs("button", {
                                                className: `nv-pick btn-plain${X ? "" : " on"}`,
                                                onClick: () =>
                                                    h("books", a, (n) => ({
                                                        companion: { ...(n.companion || {}), charId: "" },
                                                    })),
                                                children: [
                                                    e.jsx("span", {
                                                        className: "nv-face",
                                                        style: { width: 34, height: 34 },
                                                        children: e.jsx(Rn, { size: 14 }),
                                                    }),
                                                    e.jsx("span", {
                                                        className: "nv-pick-t",
                                                        children: e.jsx("b", { children: "自己读" }),
                                                    }),
                                                    e.jsx("span", { className: "nv-check" }),
                                                ],
                                            }),
                                            (p.characters || [])
                                                .filter((n) => !n.deleted)
                                                .map((n) =>
                                                    e.jsxs(
                                                        "button",
                                                        {
                                                            className: `nv-pick btn-plain${(X == null ? void 0 : X.id) === n.id ? " on" : ""}`,
                                                            onClick: () =>
                                                                h("books", a, (i) => ({
                                                                    companion: {
                                                                        ...(i.companion || {}),
                                                                        charId: n.id,
                                                                    },
                                                                })),
                                                            children: [
                                                                e.jsx(he, { char: n, size: 34 }),
                                                                e.jsxs("span", {
                                                                    className: "nv-pick-t",
                                                                    children: [
                                                                        e.jsx("b", { children: ie(n) }),
                                                                        Le.some((i) => i.charId === n.id) &&
                                                                            e.jsxs("small", {
                                                                                children: [
                                                                                    Le.filter(
                                                                                        (i) =>
                                                                                            i.charId === n.id,
                                                                                    ).length,
                                                                                    " 条批注",
                                                                                ],
                                                                            }),
                                                                    ],
                                                                }),
                                                                e.jsx("span", { className: "nv-check" }),
                                                            ],
                                                        },
                                                        n.id,
                                                    ),
                                                ),
                                        ],
                                    }),
                                    X &&
                                        e.jsxs("div", {
                                            className: "nv-aa-row col",
                                            children: [
                                                e.jsxs("span", {
                                                    children: [
                                                        "随机批注",
                                                        e.jsx("small", {
                                                            children:
                                                                "读过一些段落后，TA 会自己挑一句说说想法；没有想说的就不说",
                                                        }),
                                                    ],
                                                }),
                                                e.jsx(Ht, {
                                                    items: qt.map(([n, i]) => [n, i]),
                                                    value: an,
                                                    onChange: (n) =>
                                                        h("books", a, (i) => ({
                                                            companion: { ...(i.companion || {}), random: n },
                                                        })),
                                                }),
                                            ],
                                        }),
                                    X &&
                                        e.jsxs("div", {
                                            className: "nv-aa-row nv-co-mem",
                                            children: [
                                                e.jsxs("span", {
                                                    children: [
                                                        "接入线上记忆",
                                                        e.jsxs("small", {
                                                            children: [
                                                                "每次共读结束后，读了多久、读到哪里以及这一次的批注会进入 ",
                                                                ie(X),
                                                                " 的记忆。",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                e.jsx("button", {
                                                    className: `nv-toggle btn-plain${((fn = l.companion) == null ? void 0 : fn.memory) !== !1 ? " on" : ""}`,
                                                    role: "switch",
                                                    "aria-checked":
                                                        ((bn = l.companion) == null ? void 0 : bn.memory) !==
                                                        !1,
                                                    onClick: () =>
                                                        h("books", a, (n) => {
                                                            var i;
                                                            return {
                                                                companion: {
                                                                    ...(n.companion || {}),
                                                                    memory:
                                                                        ((i = n.companion) == null
                                                                            ? void 0
                                                                            : i.memory) === !1,
                                                                },
                                                            };
                                                        }),
                                                    children: e.jsx("i", {}),
                                                }),
                                            ],
                                        }),
                                    X &&
                                        e.jsxs("div", {
                                            className: "nv-co-log",
                                            children: [
                                                e.jsx("div", {
                                                    className: "nv-sheet-group",
                                                    children: "共读记录",
                                                }),
                                                e.jsxs("div", {
                                                    className: "nv-co-log-row now",
                                                    children: [
                                                        e.jsx("b", { children: "这一次" }),
                                                        e.jsxs("span", {
                                                            children: [Is(Zs), " · 读到", Cn(We.current)],
                                                        }),
                                                    ],
                                                }),
                                                ut.map((n) => {
                                                    const i = (p.characters || []).find(
                                                        (f) => f.id === n.charId,
                                                    );
                                                    return e.jsxs(
                                                        "div",
                                                        {
                                                            className: "nv-co-log-row",
                                                            children: [
                                                                e.jsxs("b", {
                                                                    children: [
                                                                        new Date(n.start).toLocaleDateString(
                                                                            "zh-CN",
                                                                            {
                                                                                month: "numeric",
                                                                                day: "numeric",
                                                                            },
                                                                        ),
                                                                        i && i.id !== X.id
                                                                            ? ` · ${ie(i)}`
                                                                            : "",
                                                                    ],
                                                                }),
                                                                e.jsxs("span", {
                                                                    children: [Is(n.ms), " · 读到", Cn(n.to)],
                                                                }),
                                                            ],
                                                        },
                                                        n.id,
                                                    );
                                                }),
                                            ],
                                        }),
                                ],
                            },
                            "co",
                        ),
                ],
            }),
            e.jsx(ue, {
                children:
                    fe &&
                    e.jsx(
                        Ya,
                        {
                            note: fe,
                            char: (p.characters || []).find((n) => n.id === fe.charId),
                            me: T,
                            book: l,
                            chapterTitle: (gn = d[fe.ch]) == null ? void 0 : gn.title,
                            busy: !!fe.pending,
                            onClose: () => Y(null),
                            onAsk: (n) => {
                                const i = [...(fe.thread || []), { who: "me", text: n, at: Date.now() }];
                                (ks(fe.id, () => ({ thread: i })), ys({ ...fe, thread: i }, n));
                            },
                            onRetry: () => ys(fe),
                            onStop: sn.stop,
                            onDelete: () => {
                                (h("books", a, (n) => ({
                                    notes: (n.notes || []).filter((i) => i.id !== fe.id),
                                })),
                                    Y(null));
                            },
                        },
                        fe.id,
                    ),
            }),
            e.jsx(ue, {
                children:
                    te &&
                    e.jsx(
                        Ua,
                        {
                            kind: t ? "book" : "fic",
                            work: l,
                            chapterTitle: t ? L : `第${C + 1}章 ${L}`,
                            chapterText: Ce,
                            list: mn,
                            onChange: St,
                            speakers: $t,
                            onSpeakers: t ? null : (n) => h("fics", a, { commentSpeakers: n }),
                            castIds: (se == null ? void 0 : se.charIds) || [],
                            taskKey: `novel-cm-${a}`,
                            onClose: () => Q(!1),
                        },
                        "cm",
                    ),
            }),
            e.jsx(ps, {
                open: gt,
                onClose: () => Cs(!1),
                title: "重写这一章",
                footer: e.jsx("button", { className: "nv-btn block", onClick: Ct, children: "重写" }),
                children: e.jsxs("div", {
                    className: "nv-cs",
                    children: [
                        e.jsx("div", {
                            className: "nv-form-hint",
                            children: "写下想怎么改（可以不写，换一种写法）。重写会替换现在这一章。",
                        }),
                        e.jsx("textarea", {
                            className: "nv-input area",
                            rows: 4,
                            value: on,
                            onChange: (n) => dn(n.target.value),
                            placeholder: "例如：节奏放慢、多写两个人的对话",
                        }),
                    ],
                }),
            }),
            e.jsx(qe, {
                open: Nt,
                onClose: () => hn(!1),
                title: "标记为完结？",
                message: "完结后不再显示剧情走向。之后仍可以在作品页重新开启连载。",
                confirm: { label: "完结", onClick: () => h("fics", a, { status: "done" }) },
            }),
            e.jsx(Ds, {
                open: It,
                onClose: () => Ss(!1),
                defaultCharId: (Nn = se == null ? void 0 : se.charIds) == null ? void 0 : Nn[0],
                card: se && I ? _t({ fic: se, chapter: I, index: C }) : null,
                onSent: () => {
                    (Ss(!1), c("已分享到聊天", "success"));
                },
            }),
        ],
    });
}
function zs({ children: s, onClose: a }) {
    return e.jsx(ne.div, {
        className: "nv-modal",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: a,
        children: e.jsxs(ne.div, {
            className: "nv-sheet",
            ...Xn,
            onClick: (m) => m.stopPropagation(),
            children: [e.jsx("div", { className: "nv-sheet-grip" }), s],
        }),
    });
}
function Xa({ chapters: s, cur: a, notes: m, onPick: p }) {
    const x = u.useRef(null);
    u.useEffect(() => {
        const h = x.current,
            c = h == null ? void 0 : h.querySelector(".on");
        c && (h.scrollTop = c.offsetTop - h.offsetTop - (h.clientHeight - c.offsetHeight) / 2);
    }, []);
    const j = u.useMemo(() => {
        const h = new Map();
        for (const c of m) h.set(c.ch, (h.get(c.ch) || 0) + 1);
        return h;
    }, [m]);
    return e.jsx("div", {
        className: "nv-toc",
        ref: x,
        children: s.map((h, c) =>
            e.jsxs(
                "button",
                {
                    className: `nv-toc-row btn-plain${c === a ? " on" : ""}${c < a ? " read" : ""}`,
                    onClick: () => p(c),
                    children: [
                        e.jsx("span", { className: "nv-toc-n", children: String(c + 1).padStart(2, "0") }),
                        e.jsx("span", { className: "nv-toc-t", children: h.title }),
                        j.get(c) ? e.jsx("i", { children: j.get(c) }) : null,
                    ],
                },
                c,
            ),
        ),
    });
}
function Ya({
    note: s,
    char: a,
    me: m,
    book: p,
    chapterTitle: x,
    busy: j,
    onClose: h,
    onAsk: c,
    onRetry: A,
    onStop: t,
    onDelete: l,
}) {
    var O;
    const [N, b] = u.useState(""),
        [y, T] = u.useState(!1),
        [M, E] = u.useState(!1),
        C = xe(),
        v = u.useRef(null);
    u.useEffect(() => {
        const B = v.current;
        B && (B.scrollTop = B.scrollHeight);
    }, [(O = s.thread) == null ? void 0 : O.length, j]);
    const $ = !j && !(s.thread || []).some((B) => B.who === "char"),
        D = () => {
            const B = N.trim();
            !B || j || (b(""), c(B));
        },
        R = () =>
            setTimeout(() => {
                var k;
                if (Vt(document.activeElement)) return;
                window.scrollY && window.scrollTo(0, 0);
                const B = (k = v.current) == null ? void 0 : k.closest(".nv-reader");
                B != null && B.scrollTop && (B.scrollTop = 0);
            }, 320);
    return e.jsx(ne.div, {
        className: "nv-modal",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: h,
        children: e.jsxs(ne.div, {
            className: "nv-sheet tall nv-thread",
            ...Xn,
            onClick: (B) => B.stopPropagation(),
            children: [
                e.jsx("div", { className: "nv-sheet-grip" }),
                e.jsxs("div", {
                    className: "nv-thread-head",
                    children: [
                        e.jsx("span", { children: x }),
                        e.jsxs("div", {
                            children: [
                                e.jsx("button", {
                                    className: "btn-plain",
                                    onClick: () => T(!0),
                                    "aria-label": "分享到聊天",
                                    children: e.jsx(Gs, { size: 18 }),
                                }),
                                e.jsx("button", {
                                    className: "btn-plain",
                                    onClick: () => E(!0),
                                    "aria-label": "删除",
                                    children: e.jsx(Kn, { size: 18 }),
                                }),
                            ],
                        }),
                    ],
                }),
                e.jsx("blockquote", { className: "nv-quote", children: s.quote }),
                e.jsxs("div", {
                    className: "nv-thread-list",
                    ref: v,
                    children: [
                        (s.thread || []).map((B, k) =>
                            e.jsxs(
                                "div",
                                {
                                    className: `nv-bub ${B.who === "me" ? "me" : "ta"}`,
                                    children: [
                                        B.who !== "me" && e.jsx(he, { char: a, size: 26 }),
                                        e.jsx("div", { className: "nv-bub-text", children: B.text }),
                                    ],
                                },
                                k,
                            ),
                        ),
                        j &&
                            e.jsxs("div", {
                                className: "nv-bub ta",
                                children: [
                                    e.jsx(he, { char: a, size: 26 }),
                                    e.jsxs("div", {
                                        className: "nv-bub-text typing",
                                        children: [e.jsx("i", {}), e.jsx("i", {}), e.jsx("i", {})],
                                    }),
                                ],
                            }),
                        $ &&
                            e.jsxs("div", {
                                className: "nv-thread-fail",
                                children: [
                                    "没有收到 ",
                                    ie(a),
                                    " 的批注",
                                    e.jsx("button", {
                                        className: "btn-plain",
                                        onClick: A,
                                        children: "再请一次",
                                    }),
                                ],
                            }),
                    ],
                }),
                e.jsxs("div", {
                    className: "nv-cm-field in-sheet",
                    children: [
                        e.jsx("input", {
                            value: N,
                            onChange: (B) => b(B.target.value),
                            onBlur: R,
                            placeholder: `和 ${ie(a)} 聊聊这段`,
                            onKeyDown: (B) => {
                                B.key === "Enter" && !B.nativeEvent.isComposing && D();
                            },
                        }),
                        j
                            ? e.jsx("button", {
                                  className: "nv-send btn-plain",
                                  onClick: t,
                                  "aria-label": "停止",
                                  children: e.jsx("span", { className: "nv-spin" }),
                              })
                            : e.jsx("button", {
                                  className: "nv-send btn-plain",
                                  disabled: !N.trim(),
                                  onClick: D,
                                  "aria-label": "发送",
                                  children: e.jsx(qn, { size: 18, weight: "fill" }),
                              }),
                    ],
                }),
                e.jsx(Ds, {
                    open: y,
                    onClose: () => T(!1),
                    defaultCharId: a == null ? void 0 : a.id,
                    card: Kt({ book: p, chapterTitle: x, note: s, char: a }),
                    onSent: () => {
                        (T(!1), C(`已分享到聊天，${ie(a)} 会记得这段`, "success"));
                    },
                }),
                e.jsx(qe, {
                    open: M,
                    onClose: () => E(!1),
                    title: "删除这条批注？",
                    message: "批注和里面的对话都会删除。",
                    confirm: { label: "删除", destructive: !0, onClick: l },
                }),
            ],
        }),
    });
}
const ns = He;
function Yn({ w: s, on: a, onClick: m, compact: p = !1 }) {
    var x;
    return e.jsxs("button", {
        className: `nv-wcard btn-plain${a ? " on" : ""}${p ? " compact" : ""}`,
        onClick: m,
        children: [
            e.jsxs("div", {
                className: "nv-wcard-top",
                children: [
                    e.jsx("b", { children: s.name }),
                    e.jsx("span", { children: Ws(s.id) ? Jt(s.genre) : "我的" }),
                ],
            }),
            e.jsx("p", { children: s.world }),
            !p &&
                ((x = s.tags) == null ? void 0 : x.length) > 0 &&
                e.jsx("div", {
                    className: "nv-wcard-tags",
                    children: s.tags.slice(0, 3).map((j) => e.jsx("i", { children: j }, j)),
                }),
        ],
    });
}
function Ja({ s, on: a, onClick: m }) {
    return e.jsxs("button", {
        className: `nv-scard btn-plain${a ? " on" : ""}`,
        onClick: m,
        children: [
            e.jsx("b", { children: s.name }),
            e.jsx("span", { children: s.desc || s.rules.slice(0, 24) }),
        ],
    });
}
function Jn({ initial: s, onSave: a, onClose: m }) {
    const [p, x] = u.useState(() => ({
            name: "",
            genre: "modern",
            tags: [],
            world: "",
            roles: "",
            hooks: "",
            ...(s || {}),
        })),
        [j, h] = u.useState(((s == null ? void 0 : s.tags) || []).join("、")),
        c = xe(),
        A = () => {
            const t = qs({
                ...p,
                id: s == null ? void 0 : s.id,
                tags: j.split(/[、,，\s]+/).filter(Boolean),
            });
            if (!t) {
                c("名字和世界设定都要写", "error");
                return;
            }
            a(t);
        };
    return e.jsxs(ne.div, {
        className: "nv-layer",
        ...ns,
        children: [
            e.jsx(me, {
                onBack: m,
                title: s != null && s.id ? "编辑世界观" : "新建世界观",
                right: e.jsx("button", {
                    className: "nv-text-btn strong btn-plain",
                    onClick: A,
                    children: "保存",
                }),
            }),
            e.jsxs("div", {
                className: "nv-scroll form",
                children: [
                    s &&
                        Ws(s.id) &&
                        e.jsx("div", {
                            className: "nv-form-hint",
                            children: "修改将直接应用于此内置预设，可随时在预设中「恢复默认」。",
                        }),
                    e.jsx(J, {
                        label: "名字",
                        children: e.jsx("input", {
                            className: "nv-input",
                            value: p.name,
                            maxLength: 20,
                            onChange: (t) => x({ ...p, name: t.target.value }),
                            placeholder: "给这套预设起个名字",
                        }),
                    }),
                    e.jsx(J, {
                        label: "分类",
                        children: e.jsx("div", {
                            className: "nv-chips",
                            children: Hs.map(([t, l]) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `nv-chip btn-plain${p.genre === t ? " on" : ""}`,
                                        onClick: () => x({ ...p, genre: t }),
                                        children: l,
                                    },
                                    t,
                                ),
                            ),
                        }),
                    }),
                    e.jsx(J, {
                        label: "标签",
                        hint: "用顿号或空格分开，最多 6 个",
                        children: e.jsx("input", {
                            className: "nv-input",
                            value: j,
                            onChange: (t) => h(t.target.value),
                            placeholder: "时代、题材",
                        }),
                    }),
                    e.jsx(J, {
                        label: "世界设定",
                        hint: "这个世界怎么运转：时代、地点、规则、利害",
                        children: e.jsx("textarea", {
                            className: "nv-input area",
                            rows: 5,
                            value: p.world,
                            onChange: (t) => x({ ...p, world: t.target.value }),
                        }),
                    }),
                    e.jsx(J, {
                        label: "人设映射",
                        hint: "人物在这个世界里可能是什么身份。不写具体的人，生成文案时会按各自人设对应",
                        children: e.jsx("textarea", {
                            className: "nv-input area",
                            rows: 3,
                            value: p.roles,
                            onChange: (t) => x({ ...p, roles: t.target.value }),
                        }),
                    }),
                    e.jsx(J, {
                        label: "常见开端",
                        hint: "故事通常从什么事情开始，选填",
                        children: e.jsx("textarea", {
                            className: "nv-input area",
                            rows: 2,
                            value: p.hooks,
                            onChange: (t) => x({ ...p, hooks: t.target.value }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function Qn({ initial: s, onSave: a, onClose: m }) {
    const [p, x] = u.useState(() => ({ name: "", desc: "", rules: "", ...(s || {}) })),
        j = xe(),
        h = () => {
            const c = Ln({ ...p, id: s == null ? void 0 : s.id });
            if (!c) {
                j("名字和写法都要写", "error");
                return;
            }
            a(c);
        };
    return e.jsxs(ne.div, {
        className: "nv-layer",
        ...ns,
        children: [
            e.jsx(me, {
                onBack: m,
                title: s != null && s.id ? "编辑文风" : "新建文风",
                right: e.jsx("button", {
                    className: "nv-text-btn strong btn-plain",
                    onClick: h,
                    children: "保存",
                }),
            }),
            e.jsxs("div", {
                className: "nv-scroll form",
                children: [
                    s &&
                        Rs(s.id) &&
                        e.jsx("div", {
                            className: "nv-form-hint",
                            children: "修改将直接应用于此内置预设，可随时在预设中「恢复默认」。",
                        }),
                    e.jsx(J, {
                        label: "名字",
                        children: e.jsx("input", {
                            className: "nv-input",
                            value: p.name,
                            maxLength: 16,
                            onChange: (c) => x({ ...p, name: c.target.value }),
                        }),
                    }),
                    e.jsx(J, {
                        label: "一句话说明",
                        children: e.jsx("input", {
                            className: "nv-input",
                            value: p.desc,
                            maxLength: 40,
                            onChange: (c) => x({ ...p, desc: c.target.value }),
                        }),
                    }),
                    e.jsx(J, {
                        label: "写法",
                        hint: "写手法：句子长短、描写重心、节奏、对话占比。不要写例句，例句会被照搬进每一章",
                        children: e.jsx("textarea", {
                            className: "nv-input area",
                            rows: 7,
                            value: p.rules,
                            onChange: (c) => x({ ...p, rules: c.target.value }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function Zn({ initial: s, onSave: a, onClose: m }) {
    const [p, x] = u.useState(() => ({ name: "", premise: "", play: "", ...(s || {}) })),
        j = xe(),
        h = () => {
            const c = _s({ ...p, id: s == null ? void 0 : s.id });
            if (!c) {
                j("名字和情境都要写", "error");
                return;
            }
            a(c);
        };
    return e.jsxs(ne.div, {
        className: "nv-layer",
        ...ns,
        children: [
            e.jsx(me, {
                onBack: m,
                title: "剧场情境",
                right: e.jsx("button", {
                    className: "nv-text-btn strong btn-plain",
                    onClick: h,
                    children: "保存",
                }),
            }),
            e.jsxs("div", {
                className: "nv-scroll form",
                children: [
                    e.jsx(J, {
                        label: "名字",
                        children: e.jsx("input", {
                            className: "nv-input",
                            value: p.name,
                            maxLength: 16,
                            onChange: (c) => x({ ...p, name: c.target.value }),
                        }),
                    }),
                    e.jsx(J, {
                        label: "情境",
                        hint: "在哪里、什么时候、正在发生什么",
                        children: e.jsx("textarea", {
                            className: "nv-input area",
                            rows: 4,
                            value: p.premise,
                            onChange: (c) => x({ ...p, premise: c.target.value }),
                        }),
                    }),
                    e.jsx(J, {
                        label: "互动方式",
                        hint: "你在里面可以做什么：选择、探索、拆开、回复",
                        children: e.jsx("textarea", {
                            className: "nv-input area",
                            rows: 3,
                            value: p.play,
                            onChange: (c) => x({ ...p, play: c.target.value }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function et({ initial: s, onSave: a, onClose: m }) {
    const [p, x] = u.useState(() => ({
            name: "",
            cat: "modern",
            tags: [],
            setting: "",
            ta: "",
            you: "",
            opening: "",
            arc: "",
            scene: "",
            brief: "",
            ...(s || {}),
        })),
        [j, h] = u.useState(() => (s && !s.brief && s.opening ? "fields" : "brief")),
        c = xe(),
        A = () => {
            const l =
                j === "brief"
                    ? vs({
                          id: s == null ? void 0 : s.id,
                          name: p.name,
                          cat: p.cat,
                          tags: p.tags,
                          brief: p.brief,
                      })
                    : vs({ ...p, brief: "", id: s == null ? void 0 : s.id, name: p.name });
            if (!l) {
                c(j === "brief" ? "先写一段话" : "名字和开场都要写", "error");
                return;
            }
            a(l);
        },
        t = (l) => ({ value: p[l], onChange: (N) => x({ ...p, [l]: N.target.value }) });
    return e.jsxs(ne.div, {
        className: "nv-layer",
        ...ns,
        children: [
            e.jsx(me, {
                onBack: m,
                title: "剧情预设",
                right: e.jsx("button", {
                    className: "nv-text-btn strong btn-plain",
                    onClick: A,
                    children: "保存",
                }),
            }),
            e.jsxs("div", {
                className: "nv-scroll form",
                children: [
                    e.jsxs("div", {
                        className: "ios-seg-pill nv-source-seg",
                        children: [
                            e.jsx("button", {
                                className: j === "brief" ? "on" : "",
                                onClick: () => h("brief"),
                                children: "一段话",
                            }),
                            e.jsx("button", {
                                className: j === "fields" ? "on" : "",
                                onClick: () => h("fields"),
                                children: "分栏填写",
                            }),
                        ],
                    }),
                    j === "brief"
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx("div", {
                                      className: "nv-form-hint",
                                      children:
                                          "想要什么样的故事，用一段话直接写，没有格式要求。这段话会原样交给 AI，写到的照办，没写到的自由发挥；各人的性格仍按各自的人设。",
                                  }),
                                  e.jsx(J, {
                                      label: "名字",
                                      hint: "选填，不填取这段话的开头",
                                      children: e.jsx("input", {
                                          className: "nv-input",
                                          maxLength: 20,
                                          ...t("name"),
                                      }),
                                  }),
                                  e.jsx(J, {
                                      label: "故事",
                                      children: e.jsx("textarea", {
                                          className: "nv-input area",
                                          rows: 10,
                                          maxLength: 2e3,
                                          ...t("brief"),
                                          placeholder: "想要的故事",
                                      }),
                                  }),
                              ],
                          })
                        : e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx("div", {
                                      className: "nv-form-hint",
                                      children:
                                          "只写处境和情节：身份、关系、发生过什么、眼下的局面。不写性格和说话方式，任何角色放进来都按各自的人设行事。",
                                  }),
                                  e.jsx(J, {
                                      label: "名字",
                                      children: e.jsx("input", {
                                          className: "nv-input",
                                          maxLength: 20,
                                          ...t("name"),
                                      }),
                                  }),
                                  e.jsx(V, { children: "分类" }),
                                  e.jsx("div", {
                                      className: "nv-chips wrap",
                                      children: Os.map(([l, N]) =>
                                          e.jsx(
                                              "button",
                                              {
                                                  className: `nv-chip btn-plain${p.cat === l ? " on" : ""}`,
                                                  onClick: () => x({ ...p, cat: l }),
                                                  children: N,
                                              },
                                              l,
                                          ),
                                      ),
                                  }),
                                  e.jsx(J, {
                                      label: "标签",
                                      hint: "用顿号分开，最多 6 个",
                                      children: e.jsx("input", {
                                          className: "nv-input",
                                          value: (p.tags || []).join("、"),
                                          onChange: (l) =>
                                              x({
                                                  ...p,
                                                  tags: l.target.value
                                                      .split(/[、,，]+/)
                                                      .map((N) => N.trim())
                                                      .filter(Boolean)
                                                      .slice(0, 6),
                                              }),
                                      }),
                                  }),
                                  e.jsx(J, {
                                      label: "背景",
                                      hint: "时代、地点",
                                      children: e.jsx("textarea", {
                                          className: "nv-input area",
                                          rows: 2,
                                          ...t("setting"),
                                      }),
                                  }),
                                  e.jsx(J, {
                                      label: "TA 的处境",
                                      hint: "身份、发生过什么；不写性格",
                                      children: e.jsx("textarea", {
                                          className: "nv-input area",
                                          rows: 3,
                                          ...t("ta"),
                                      }),
                                  }),
                                  e.jsx(J, {
                                      label: "你的处境",
                                      hint: "身份、发生过什么；不写性格",
                                      children: e.jsx("textarea", {
                                          className: "nv-input area",
                                          rows: 3,
                                          ...t("you"),
                                      }),
                                  }),
                                  e.jsx(J, {
                                      label: "开场",
                                      hint: "故事从哪一幕开始：在哪里、那一刻正在发生什么",
                                      children: e.jsx("textarea", {
                                          className: "nv-input area",
                                          rows: 3,
                                          ...t("opening"),
                                      }),
                                  }),
                                  e.jsx(J, {
                                      label: "大致走向",
                                      hint: "几个节点，用 → 连起来；写作时可以随时改方向",
                                      children: e.jsx("textarea", {
                                          className: "nv-input area",
                                          rows: 3,
                                          ...t("arc"),
                                      }),
                                  }),
                                  e.jsx(J, {
                                      label: "剧场切入",
                                      hint: "选填。做成互动剧场时从哪一幕开始",
                                      children: e.jsx("input", { className: "nv-input", ...t("scene") }),
                                  }),
                              ],
                          }),
                ],
            }),
        ],
    });
}
function J({ label: s, hint: a, children: m }) {
    return e.jsxs("label", {
        className: "nv-field",
        children: [
            e.jsx("span", { className: "nv-field-l", children: s }),
            m,
            a && e.jsx("span", { className: "nv-field-h", children: a }),
        ],
    });
}
function st() {
    const { nv: s, update: a } = we(),
        m = Re(),
        p = xe(),
        x = Ne("novel-preset-random");
    return {
        run: async (h, { hint: c = "", chars: A = [], me: t = null } = {}) => {
            var M;
            const l = m();
            if (!l) return null;
            const N =
                    h === "scene"
                        ? Qt({ hint: c, chars: A, me: t, taken: gs(s).map((E) => E.name) })
                        : h === "plot"
                          ? Zt({ hint: c, taken: es(s).map((E) => E.name) })
                          : ea({ hint: c, taken: bs(s).map((E) => E.name) }),
                b = await x.run((E) => je(l, N, E), { label: "随机预设" });
            if (b.aborted || b.skipped) return null;
            const y = h === "scene" ? _s : h === "plot" ? vs : qs,
                T = b.value ? y(Pn(b.value)) : null;
            return T
                ? (a((E) =>
                      h === "scene"
                          ? { scenes: [...E.scenes, T] }
                          : h === "plot"
                            ? { plots: [...E.plots, T] }
                            : { worlds: [...E.worlds, T] },
                  ),
                  T)
                : (p(((M = b.error) == null ? void 0 : M.message) || "没生成出来，再试一次", "error"), null);
        },
        busy: x.busy,
        stop: x.stop,
    };
}
function Qa() {
    var w;
    const { nv: s, update: a } = we(),
        m = xe(),
        p = st(),
        [x, j] = u.useState("plot"),
        [h, c] = u.useState("all"),
        [A, t] = u.useState("all"),
        [l, N] = u.useState(null),
        [b, y] = u.useState(null),
        [T, M] = u.useState(!1),
        [E, C] = u.useState(null),
        [v, $] = u.useState(!1),
        [D, R] = u.useState(""),
        O = u.useMemo(() => bs(s).filter((o) => A === "all" || o.genre === A), [s, A]),
        B = (o) => ({ world: "worlds", style: "styles", scene: "scenes", plot: "plots" })[o],
        k = (o, z) => {
            const P = B(o);
            (a((Z) => ({
                [P]: Z[P].some((G) => G.id === z.id)
                    ? Z[P].map((G) => (G.id === z.id ? z : G))
                    : [...Z[P], z],
            })),
                N(null),
                m("已保存", "success"));
        },
        W = ({ type: o, item: z }) => {
            const P = B(o);
            a((Z) => ({ [P]: Z[P].filter((G) => G.id !== z.id) }));
        },
        Y = (o, z) => (o === "world" ? Ws(z) : o === "style" ? Rs(z) : o === "plot" ? Ke(z) : Sn(z)),
        te = (o, z) => (s[B(o)] || []).some((P) => P.id === z),
        Q = async () => {
            $(!1);
            const o = await p.run(x === "scene" ? "scene" : x === "plot" ? "plot" : "world", {
                hint: D.trim(),
            });
            o && (m(`生成了「${o.name}」，已存进我的预设`, "success"), R(""));
        },
        r = [
            ...s.plots.map((o) => ({ ...o, type: "plot" })),
            ...s.worlds.map((o) => ({ ...o, type: "world" })),
            ...s.styles.map((o) => ({ ...o, type: "style" })),
            ...s.scenes.map((o) => ({ ...o, type: "scene" })),
        ],
        S = es(s).filter((o) =>
            h === "all" ? !0 : h === "mine" ? !Ke(o.id) || te("plot", o.id) : o.cat === h,
        );
    return e.jsxs("div", {
        className: "nv-presets",
        children: [
            e.jsx(Dn, {
                id: "preset",
                items: [
                    ["plot", "剧情预设"],
                    ["world", "世界观"],
                    ["style", "文风"],
                    ["scene", "剧场情境"],
                ],
                value: x,
                onChange: j,
            }),
            e.jsxs("div", {
                className: "nv-preset-acts",
                children: [
                    e.jsxs("button", {
                        className: "nv-pill btn-plain",
                        onClick: () => N({ type: x, item: null }),
                        children: [e.jsx(Fe, { size: 14, weight: "bold" }), "自己写"],
                    }),
                    x !== "style" &&
                        e.jsx("button", {
                            className: `nv-pill btn-plain${p.busy ? " busy" : ""}`,
                            onClick: p.busy ? p.stop : () => $(!0),
                            children: p.busy
                                ? e.jsxs(e.Fragment, {
                                      children: [e.jsx("span", { className: "nv-spin" }), "停止"],
                                  })
                                : e.jsxs(e.Fragment, {
                                      children: [e.jsx(Vn, { size: 14, weight: "bold" }), "AI 随机"],
                                  }),
                        }),
                    e.jsxs("button", {
                        className: "nv-pill btn-plain",
                        onClick: () => M(!0),
                        children: [e.jsx(Ma, { size: 14, weight: "bold" }), "导入 / 导出"],
                    }),
                ],
            }),
            x === "plot" &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("div", {
                            className: "nv-filters",
                            children: [["all", "全部"], ...Os, ["mine", "我的"]].map(([o, z]) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `nv-chip btn-plain${h === o ? " on" : ""}`,
                                        onClick: () => c(o),
                                        children: z,
                                    },
                                    o,
                                ),
                            ),
                        }),
                        e.jsx("div", {
                            className: "nv-slist",
                            children: S.map((o) => {
                                var z;
                                return e.jsxs(
                                    "button",
                                    {
                                        className: "nv-srow btn-plain",
                                        onClick: () => y({ type: "plot", item: o }),
                                        children: [
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("b", { children: o.name }),
                                                    e.jsx("i", {
                                                        className: "nv-tag",
                                                        children: Ke(o.id) ? Gt(o.cat) : "我的",
                                                    }),
                                                ],
                                            }),
                                            e.jsx("p", { children: o.opening || o.brief }),
                                            ((z = o.tags) == null ? void 0 : z.length) > 0 &&
                                                e.jsx("small", { children: o.tags.join(" · ") }),
                                        ],
                                    },
                                    o.id,
                                );
                            }),
                        }),
                    ],
                }),
            x === "world" &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("div", {
                            className: "nv-filters",
                            children: [["all", "全部"], ...Hs].map(([o, z]) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `nv-chip btn-plain${A === o ? " on" : ""}`,
                                        onClick: () => t(o),
                                        children: z,
                                    },
                                    o,
                                ),
                            ),
                        }),
                        e.jsx("div", {
                            className: "nv-wgrid",
                            children: O.map((o) =>
                                e.jsx(Yn, { w: o, onClick: () => y({ type: "world", item: o }) }, o.id),
                            ),
                        }),
                    ],
                }),
            x === "style" &&
                e.jsx("div", {
                    className: "nv-slist",
                    children: ss(s).map((o) =>
                        e.jsxs(
                            "button",
                            {
                                className: "nv-srow btn-plain",
                                onClick: () => y({ type: "style", item: o }),
                                children: [
                                    e.jsxs("div", {
                                        children: [
                                            e.jsx("b", { children: o.name }),
                                            !Rs(o.id) &&
                                                e.jsx("i", { className: "nv-tag", children: "我的" }),
                                        ],
                                    }),
                                    e.jsx("p", { children: o.rules }),
                                ],
                            },
                            o.id,
                        ),
                    ),
                }),
            x === "scene" &&
                e.jsx("div", {
                    className: "nv-slist",
                    children: gs(s).map((o) =>
                        e.jsxs(
                            "button",
                            {
                                className: "nv-srow btn-plain",
                                onClick: () => y({ type: "scene", item: o }),
                                children: [
                                    e.jsxs("div", {
                                        children: [
                                            e.jsx("b", { children: o.name }),
                                            !Sn(o.id) &&
                                                e.jsx("i", { className: "nv-tag", children: "我的" }),
                                        ],
                                    }),
                                    e.jsx("p", { children: o.premise }),
                                    o.play && e.jsx("small", { children: o.play }),
                                ],
                            },
                            o.id,
                        ),
                    ),
                }),
            e.jsx("div", {
                className: "nv-foot-note",
                children: "世界观和文风可以在「社区」发帖时从本机选择分享；剧场的 HTML 不分享。",
            }),
            b &&
                e.jsx(ps, {
                    open: !0,
                    onClose: () => y(null),
                    title: b.item.name,
                    footer: e.jsxs("div", {
                        className: "nv-sheet-acts",
                        children: [
                            e.jsxs("button", {
                                className: "nv-btn ghost",
                                onClick: () => {
                                    (N(b), y(null));
                                },
                                children: [e.jsx(Gn, { size: 15 }), "编辑"],
                            }),
                            Y(b.type, b.item.id)
                                ? te(b.type, b.item.id) &&
                                  e.jsxs("button", {
                                      className: "nv-btn ghost",
                                      onClick: () => {
                                          (W(b), y(null), m("已恢复默认"));
                                      },
                                      children: [e.jsx(Un, { size: 15 }), "恢复默认"],
                                  })
                                : e.jsxs("button", {
                                      className: "nv-btn ghost danger",
                                      onClick: () => {
                                          (C(b), y(null));
                                      },
                                      children: [e.jsx(Kn, { size: 15 }), "删除"],
                                  }),
                        ],
                    }),
                    children: e.jsx("div", {
                        className: "nv-cs",
                        children: e.jsx(nt, { type: b.type, item: b.item }),
                    }),
                }),
            e.jsx(ps, {
                open: v,
                onClose: () => $(!1),
                title: x === "scene" ? "AI 随机情境" : x === "plot" ? "AI 随机剧情预设" : "AI 随机世界观",
                footer: e.jsx("button", { className: "nv-btn block", onClick: Q, children: "生成" }),
                children: e.jsxs("div", {
                    className: "nv-cs",
                    children: [
                        e.jsx("div", {
                            className: "nv-form-hint",
                            children: "可以写几个关键词，不写就让 AI 自己挑。",
                        }),
                        e.jsx("input", {
                            className: "nv-input",
                            value: D,
                            onChange: (o) => R(o.target.value),
                            placeholder:
                                x === "scene"
                                    ? "例如：雪夜、停电"
                                    : x === "plot"
                                      ? "例如：暗恋、合租、重生"
                                      : "例如：海岛、蒸汽朋克、家族",
                        }),
                    ],
                }),
            }),
            (l == null ? void 0 : l.type) === "world" &&
                e.jsx(Jn, { initial: l.item, onSave: (o) => k("world", o), onClose: () => N(null) }),
            (l == null ? void 0 : l.type) === "style" &&
                e.jsx(Qn, { initial: l.item, onSave: (o) => k("style", o), onClose: () => N(null) }),
            (l == null ? void 0 : l.type) === "scene" &&
                e.jsx(Zn, { initial: l.item, onSave: (o) => k("scene", o), onClose: () => N(null) }),
            (l == null ? void 0 : l.type) === "plot" &&
                e.jsx(et, { initial: l.item, onSave: (o) => k("plot", o), onClose: () => N(null) }),
            T &&
                e.jsxs(ne.div, {
                    className: "nv-layer",
                    ...ns,
                    children: [
                        e.jsx(me, { onBack: () => M(!1), title: "导入 / 导出" }),
                        e.jsx("div", {
                            className: "nv-scroll form",
                            children: e.jsx(Xt, {
                                kind: "novelpreset",
                                toast: m,
                                items: r,
                                normalize: Yt,
                                emptyHint: "还没有自己的剧情预设、世界观、文风或情境",
                                onImport: (o) => {
                                    const z = (_) => ({ ..._, id: void 0 }),
                                        P = o
                                            .filter((_) => _.type === "world")
                                            .map((_) => qs(z(_)))
                                            .filter(Boolean),
                                        Z = o
                                            .filter((_) => _.type === "style")
                                            .map((_) => Ln(z(_)))
                                            .filter(Boolean),
                                        G = o
                                            .filter((_) => _.type === "scene")
                                            .map((_) => _s(z(_)))
                                            .filter(Boolean),
                                        ve = o
                                            .filter((_) => _.type === "plot")
                                            .map((_) => vs(z(_)))
                                            .filter(Boolean);
                                    (a((_) => ({
                                        worlds: [..._.worlds, ...P],
                                        styles: [..._.styles, ...Z],
                                        scenes: [..._.scenes, ...G],
                                        plots: [..._.plots, ...ve],
                                    })),
                                        m(
                                            `导入了 ${P.length + Z.length + G.length + ve.length} 个预设`,
                                            "success",
                                        ));
                                },
                            }),
                        }),
                    ],
                }),
            e.jsx(qe, {
                open: !!E,
                onClose: () => C(null),
                title: `删除「${(w = E == null ? void 0 : E.item) == null ? void 0 : w.name}」？`,
                message: "已经用它写好的作品不受影响。",
                confirm: { label: "删除", destructive: !0, onClick: () => W(E) },
            }),
        ],
    });
}
function nt({ type: s, item: a }) {
    var m, p;
    return s === "plot"
        ? e.jsxs("div", {
              className: "nv-pdetail",
              children: [
                  ((m = a.tags) == null ? void 0 : m.length) > 0 &&
                      e.jsx("div", {
                          className: "nv-wcard-tags",
                          children: a.tags.map((x) => e.jsx("i", { children: x }, x)),
                      }),
                  a.brief &&
                      e.jsxs(e.Fragment, {
                          children: [e.jsx(V, { children: "一段话" }), e.jsx("p", { children: a.brief })],
                      }),
                  a.setting &&
                      e.jsxs(e.Fragment, {
                          children: [e.jsx(V, { children: "背景" }), e.jsx("p", { children: a.setting })],
                      }),
                  a.ta &&
                      e.jsxs(e.Fragment, {
                          children: [
                              e.jsxs(V, {
                                  children: [
                                      e.jsx("span", { className: "nv-keepcase", children: "TA" }),
                                      " 的处境",
                                  ],
                              }),
                              e.jsx("p", { children: a.ta }),
                          ],
                      }),
                  a.you &&
                      e.jsxs(e.Fragment, {
                          children: [e.jsx(V, { children: "你的处境" }), e.jsx("p", { children: a.you })],
                      }),
                  a.opening &&
                      e.jsxs(e.Fragment, {
                          children: [e.jsx(V, { children: "开场" }), e.jsx("p", { children: a.opening })],
                      }),
                  a.arc &&
                      e.jsxs(e.Fragment, {
                          children: [e.jsx(V, { children: "大致走向" }), e.jsx("p", { children: a.arc })],
                      }),
                  a.scene &&
                      e.jsxs(e.Fragment, {
                          children: [e.jsx(V, { children: "剧场切入" }), e.jsx("p", { children: a.scene })],
                      }),
              ],
          })
        : s === "style"
          ? e.jsxs("div", {
                className: "nv-pdetail",
                children: [e.jsx(V, { children: "写法" }), e.jsx("p", { children: a.rules })],
            })
          : s === "scene"
            ? e.jsxs("div", {
                  className: "nv-pdetail",
                  children: [
                      e.jsx(V, { children: "情境" }),
                      e.jsx("p", { children: a.premise }),
                      a.play &&
                          e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx(V, { children: "互动方式" }),
                                  e.jsx("p", { children: a.play }),
                              ],
                          }),
                  ],
              })
            : e.jsxs("div", {
                  className: "nv-pdetail",
                  children: [
                      ((p = a.tags) == null ? void 0 : p.length) > 0 &&
                          e.jsx("div", {
                              className: "nv-wcard-tags",
                              children: a.tags.map((x) => e.jsx("i", { children: x }, x)),
                          }),
                      e.jsx(V, { children: "世界设定" }),
                      e.jsx("p", { children: a.world }),
                      a.roles &&
                          e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx(V, { children: "人设映射" }),
                                  e.jsx("p", { children: a.roles }),
                              ],
                          }),
                      a.hooks &&
                          e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx(V, { children: "常见开端" }),
                                  e.jsx("p", { children: a.hooks }),
                              ],
                          }),
                  ],
              });
}
const tt = {
    mode: "brief",
    plotId: "",
    worldId: "",
    tropes: [],
    meMode: "profile",
    meRole: "",
    sceneId: "",
    brief: "",
};
function Es(s) {
    return s.mode === "brief"
        ? !!String(s.brief || "").trim()
        : s.mode === "plot"
          ? !!s.plotId
          : !!(s.worldId || s.tropes.length || s.sceneId) && (s.meMode !== "custom" || !!s.meRole.trim());
}
function at(s, a) {
    return a.mode === "brief"
        ? { plot: na(a.brief), world: null, scene: null, tropes: [], meRole: "" }
        : a.mode === "plot"
          ? {
                plot: es(s).find((m) => m.id === a.plotId) || null,
                world: null,
                scene: null,
                tropes: [],
                meRole: "",
            }
          : {
                plot: null,
                world: bs(s).find((m) => m.id === a.worldId) || null,
                scene: gs(s).find((m) => m.id === a.sceneId) || null,
                tropes: a.tropes,
                meRole: a.meMode === "custom" ? a.meRole.trim() : "",
            };
}
function lt({ value: s, onChange: a, withScene: m = !1, me: p }) {
    const { nv: x, update: j } = we(),
        h = st(),
        [c, A] = u.useState("all"),
        [t, l] = u.useState("all"),
        [N, b] = u.useState(null),
        y = (v) => a({ ...s, ...v }),
        T = u.useMemo(
            () => es(x).filter((v) => (c === "all" ? !0 : c === "mine" ? !Ke(v.id) : v.cat === c)),
            [x, c],
        ),
        M = u.useMemo(() => bs(x).filter((v) => t === "all" || v.genre === t), [x, t]),
        E = es(x).find((v) => v.id === s.plotId),
        C = (v) =>
            y({
                tropes: s.tropes.includes(v) ? s.tropes.filter(($) => $ !== v) : [...s.tropes, v].slice(0, 6),
            });
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className: "ios-seg-pill nv-source-seg",
                children: [
                    e.jsx("button", {
                        className: s.mode === "brief" ? "on" : "",
                        onClick: () => y({ mode: "brief" }),
                        children: "一段话",
                    }),
                    e.jsx("button", {
                        className: s.mode === "plot" ? "on" : "",
                        onClick: () => y({ mode: "plot" }),
                        children: "剧情预设",
                    }),
                    e.jsx("button", {
                        className: s.mode === "free" ? "on" : "",
                        onClick: () => y({ mode: "free" }),
                        children: "自由组合",
                    }),
                ],
            }),
            e.jsx("div", {
                className: "nv-form-hint",
                children:
                    s.mode === "brief"
                        ? "用一段话写出想要的故事即可，不必逐项填写。写到的内容会照办，没写到的由 AI 自由发挥；各人的性格仍按各自的人设。"
                        : s.mode === "plot"
                          ? "选一条带初始剧情的完整预设：背景、TA 和你的处境、从哪一幕开始、大致走向。预设只决定处境，不改变任何人的性格。"
                          : "自己搭：选世界观、关系标签，再决定你在故事里的身份。都可以只选一部分，其余由 AI 按人设补全。",
            }),
            s.mode === "brief" &&
                e.jsx("textarea", {
                    className: "nv-input area",
                    rows: 7,
                    maxLength: 2e3,
                    value: s.brief || "",
                    onChange: (v) => y({ brief: v.target.value }),
                    placeholder: "例如设定、两个人的关系、发生过什么、想看的情节或氛围，写多写少都可以。",
                }),
            s.mode === "plot" &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs("div", {
                            className: "nv-preset-acts",
                            children: [
                                e.jsxs("button", {
                                    className: "nv-pill btn-plain",
                                    onClick: () => b({ type: "plot", item: null }),
                                    children: [e.jsx(Fe, { size: 14, weight: "bold" }), "自己写"],
                                }),
                                E &&
                                    e.jsxs("button", {
                                        className: "nv-pill btn-plain",
                                        onClick: () => b({ type: "plot", item: E }),
                                        children: [
                                            e.jsx(Gn, { size: 14, weight: "bold" }),
                                            Ke(E.id) ? "另存一份改" : "改这一个",
                                        ],
                                    }),
                            ],
                        }),
                        e.jsx("div", {
                            className: "nv-filters",
                            children: [["all", "全部"], ...Os, ["mine", "我的"]].map(([v, $]) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `nv-chip btn-plain${c === v ? " on" : ""}`,
                                        onClick: () => A(v),
                                        children: $,
                                    },
                                    v,
                                ),
                            ),
                        }),
                        E &&
                            e.jsxs("div", {
                                className: "nv-plot-picked",
                                children: [
                                    e.jsxs("div", {
                                        className: "nv-plot-picked-h",
                                        children: [
                                            e.jsx("b", { children: E.name }),
                                            e.jsx("span", { children: "已选" }),
                                        ],
                                    }),
                                    e.jsx(nt, { type: "plot", item: E }),
                                ],
                            }),
                        e.jsxs("div", {
                            className: "nv-slist",
                            children: [
                                T.map((v) => {
                                    var $;
                                    return e.jsxs(
                                        "button",
                                        {
                                            className: `nv-srow pick btn-plain${s.plotId === v.id ? " on" : ""}`,
                                            onClick: () => y({ plotId: v.id }),
                                            children: [
                                                e.jsxs("div", {
                                                    children: [
                                                        e.jsx("b", { children: v.name }),
                                                        !Ke(v.id) &&
                                                            e.jsx("i", {
                                                                className: "nv-tag",
                                                                children: "我的",
                                                            }),
                                                        e.jsx("span", { className: "nv-check" }),
                                                    ],
                                                }),
                                                e.jsx("p", { children: v.opening || v.brief }),
                                                (($ = v.tags) == null ? void 0 : $.length) > 0 &&
                                                    e.jsx("small", { children: v.tags.join(" · ") }),
                                            ],
                                        },
                                        v.id,
                                    );
                                }),
                                !T.length &&
                                    e.jsx("div", {
                                        className: "nv-empty sm",
                                        children: "这一类还没有预设。可以自己写，或在「预设」里导入。",
                                    }),
                            ],
                        }),
                    ],
                }),
            s.mode === "free" &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs(V, {
                            right: e.jsxs("div", {
                                className: "nv-inline-acts",
                                children: [
                                    e.jsx("button", {
                                        className: `nv-text-btn btn-plain${h.busy ? " busy" : ""}`,
                                        onClick: h.busy
                                            ? h.stop
                                            : async () => {
                                                  const v = await h.run("world");
                                                  v && (y({ worldId: v.id }), l("all"));
                                              },
                                        children: h.busy
                                            ? e.jsxs(e.Fragment, {
                                                  children: [e.jsx("span", { className: "nv-spin" }), "停止"],
                                              })
                                            : e.jsxs(e.Fragment, {
                                                  children: [
                                                      e.jsx(Vn, { size: 13, weight: "bold" }),
                                                      "AI 随机",
                                                  ],
                                              }),
                                    }),
                                    e.jsxs("button", {
                                        className: "nv-text-btn btn-plain",
                                        onClick: () => b({ type: "world", item: null }),
                                        children: [e.jsx(Fe, { size: 13, weight: "bold" }), "自己写"],
                                    }),
                                ],
                            }),
                            children: ["世界观 ", e.jsx("small", { children: "选填" })],
                        }),
                        e.jsx("div", {
                            className: "nv-filters",
                            children: [["all", "全部"], ...Hs].map(([v, $]) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `nv-chip btn-plain${t === v ? " on" : ""}`,
                                        onClick: () => l(v),
                                        children: $,
                                    },
                                    v,
                                ),
                            ),
                        }),
                        e.jsx("div", {
                            className: "nv-wgrid",
                            children: M.map((v) =>
                                e.jsx(
                                    Yn,
                                    {
                                        w: v,
                                        on: s.worldId === v.id,
                                        onClick: () => y({ worldId: s.worldId === v.id ? "" : v.id }),
                                    },
                                    v.id,
                                ),
                            ),
                        }),
                        m &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsxs(V, {
                                        right: e.jsxs("button", {
                                            className: "nv-text-btn btn-plain",
                                            onClick: () => b({ type: "scene", item: null }),
                                            children: [e.jsx(Fe, { size: 13, weight: "bold" }), "自己写"],
                                        }),
                                        children: ["情境 ", e.jsx("small", { children: "选填" })],
                                    }),
                                    e.jsx("div", {
                                        className: "nv-slist",
                                        children: gs(x).map((v) =>
                                            e.jsxs(
                                                "button",
                                                {
                                                    className: `nv-srow pick btn-plain${s.sceneId === v.id ? " on" : ""}`,
                                                    onClick: () =>
                                                        y({ sceneId: s.sceneId === v.id ? "" : v.id }),
                                                    children: [
                                                        e.jsxs("div", {
                                                            children: [
                                                                e.jsx("b", { children: v.name }),
                                                                e.jsx("span", { className: "nv-check" }),
                                                            ],
                                                        }),
                                                        e.jsx("p", { children: v.premise }),
                                                    ],
                                                },
                                                v.id,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                        e.jsxs(V, { children: ["关系标签 ", e.jsx("small", { children: "可多选" })] }),
                        e.jsx("div", {
                            className: "nv-chips wrap",
                            children: sa.map((v) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `nv-chip btn-plain${s.tropes.includes(v) ? " on" : ""}`,
                                        onClick: () => C(v),
                                        children: v,
                                    },
                                    v,
                                ),
                            ),
                        }),
                        e.jsx(V, { children: p ? `${p}在故事里` : "你在故事里" }),
                        e.jsxs("div", {
                            className: "nv-opts",
                            children: [
                                e.jsxs("button", {
                                    className: `nv-opt btn-plain${s.meMode !== "custom" ? " on" : ""}`,
                                    onClick: () => y({ meMode: "profile" }),
                                    children: [
                                        e.jsx("b", { children: "按我的人设" }),
                                        e.jsx("span", { children: "由 AI 按你的人设对应到这个故事里" }),
                                    ],
                                }),
                                e.jsxs("button", {
                                    className: `nv-opt btn-plain${s.meMode === "custom" ? " on" : ""}`,
                                    onClick: () => y({ meMode: "custom" }),
                                    children: [
                                        e.jsx("b", { children: "自定义身份" }),
                                        e.jsx("span", { children: "只写身份和处境，性格仍按你的人设" }),
                                    ],
                                }),
                            ],
                        }),
                        s.meMode === "custom" &&
                            e.jsx("input", {
                                className: "nv-input nv-after-opts",
                                value: s.meRole,
                                maxLength: 120,
                                onChange: (v) => y({ meRole: v.target.value }),
                                placeholder: "你在故事中的身份与处境",
                            }),
                    ],
                }),
            e.jsxs(ue, {
                children: [
                    (N == null ? void 0 : N.type) === "plot" &&
                        e.jsx(et, {
                            initial: N.item,
                            onClose: () => b(null),
                            onSave: (v) => {
                                (j(($) => ({
                                    plots: $.plots.some((D) => D.id === v.id)
                                        ? $.plots.map((D) => (D.id === v.id ? v : D))
                                        : [...$.plots, v],
                                })),
                                    y({ plotId: v.id }),
                                    A("all"),
                                    b(null));
                            },
                        }),
                    (N == null ? void 0 : N.type) === "world" &&
                        e.jsx(Jn, {
                            initial: N.item,
                            onClose: () => b(null),
                            onSave: (v) => {
                                (j(($) => ({
                                    worlds: $.worlds.some((D) => D.id === v.id)
                                        ? $.worlds.map((D) => (D.id === v.id ? v : D))
                                        : [...$.worlds, v],
                                })),
                                    y({ worldId: v.id }),
                                    l("all"),
                                    b(null));
                            },
                        }),
                    (N == null ? void 0 : N.type) === "scene" &&
                        e.jsx(Zn, {
                            initial: null,
                            onClose: () => b(null),
                            onSave: (v) => {
                                (j(($) => ({ scenes: [...$.scenes, v] })), y({ sceneId: v.id }), b(null));
                            },
                        }),
                ],
            }),
        ],
    });
}
const Za = He,
    En = ["人物", "故事", "文风与篇幅", "文案"];
async function it({ fic: s, lane: a, chars: m, me: p, putItem: x }) {
    var c;
    x("fics", s.id, { planning: !0 });
    const j = await Us(`fic-plan-${s.id}`, (A) => je(a, ra({ fic: s, chars: m, me: p }), A), {
        label: "生成文案",
    });
    if (j.skipped) return j;
    const h = j.value ? ca(j.value, m) : null;
    return (
        x("fics", s.id, h ? { ...h, planning: !1 } : { planning: !1 }),
        h
            ? Ye(`《${h.title}》的文案好了，去书架确认`, "success", { kind: "fic", id: s.id })
            : j.aborted ||
              Ye(((c = j.error) == null ? void 0 : c.message) || "文案没生成出来，在草稿里再试一次", "error"),
        { ...j, ok: !!h }
    );
}
async function rt({ fic: s, lane: a, chars: m, me: p, putItem: x }) {
    var c;
    x("fics", s.id, {
        status: "ongoing",
        planning: !1,
        commentSpeakers: { readers: !0, charIds: s.charIds.slice(0, 2) },
    });
    const j = await Us(`fic-${s.id}`, (A) => je(a, xs({ fic: s, chars: m, me: p, n: 1 }), A), {
            label: "写第一章",
        }),
        h = j.value ? js(j.value) : null;
    return (
        h
            ? (x("fics", s.id, { chapters: [Ps(h)] }),
              Ye(`《${s.title || "同人"}》第一章写好了`, "success", { kind: "fic", id: s.id }))
            : !j.aborted &&
              !j.skipped &&
              Ye(
                  ((c = j.error) == null ? void 0 : c.message) || "第一章没写出来，在作品页里再试一次",
                  "error",
              ),
        j
    );
}
function el({ onClose: s, onDone: a }) {
    const { state: m } = Oe(),
        { nv: p, update: x, putItem: j } = we(),
        h = Re(),
        c = m.me,
        A = (m.characters || []).filter((r) => !r.deleted),
        [t, l] = u.useState(0),
        [N, b] = u.useState(() => ({
            charIds: m.activeCharId && A.some((r) => r.id === m.activeCharId) ? [m.activeCharId] : [],
            multi: "rival",
            styleId: "bs_daily",
            length: "mid",
            words: 3e3,
            pov: "third",
            ending: "free",
            note: "",
            setting: "au",
        })),
        [y, T] = u.useState(tt),
        [M, E] = u.useState(null),
        [C, v] = u.useState(null),
        $ = C ? p.fics.find((r) => r.id === C) : null,
        D = Ne(`fic-plan-${C || "none"}`),
        R = ss(p).find((r) => r.id === N.styleId),
        O = N.charIds.map((r) => A.find((S) => S.id === r)).filter(Boolean),
        B = [O.length > 0, Es(y), !0, !!($ != null && $.title) && !($ != null && $.planning)][t],
        k = (r) =>
            b((S) => ({
                ...S,
                charIds: S.charIds.includes(r)
                    ? S.charIds.filter((w) => w !== r)
                    : [...S.charIds, r].slice(0, 5),
            })),
        W = async () => {
            const r = h();
            if (!r) return;
            const S = { ...ia({ ...N, ...at(p, y), style: R }), status: "draft", planning: !0 };
            (x((w) => ({ fics: [S, ...w.fics.filter((o) => o.id !== C)] })),
                v(S.id),
                await it({ fic: S, lane: r, chars: O, me: c, putItem: j }));
        },
        Y = () => {
            if (B) {
                if (t === 2) {
                    (l(3), $ || W());
                    return;
                }
                l(t + 1);
            }
        },
        te = () => {
            const r = h();
            !r || !$ || (a($.id), rt({ fic: $, lane: r, chars: O, me: c, putItem: j }));
        },
        Q = (r) => C && j("fics", C, (S) => (typeof r == "function" ? r(S) : r));
    return e.jsxs(ne.div, {
        className: "nv-layer",
        ...Za,
        children: [
            e.jsx(me, { onBack: t ? () => l(t - 1) : s, title: "新建同人", sub: `${t + 1} / 4 · ${En[t]}` }),
            e.jsx("div", {
                className: "nv-steps",
                children: En.map((r, S) => e.jsx("i", { className: S <= t ? "on" : "" }, r)),
            }),
            e.jsxs("div", {
                className: "nv-scroll form",
                children: [
                    t === 0 &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx(V, { children: "主角" }),
                                e.jsxs("div", {
                                    className: "nv-cast",
                                    children: [
                                        A.map((r) =>
                                            e.jsxs(
                                                "button",
                                                {
                                                    className: `nv-cast-item btn-plain${N.charIds.includes(r.id) ? " on" : ""}`,
                                                    onClick: () => k(r.id),
                                                    children: [
                                                        e.jsxs("span", {
                                                            className: "nv-cast-face",
                                                            children: [
                                                                e.jsx(he, { char: r, size: 56 }),
                                                                N.charIds.includes(r.id) &&
                                                                    e.jsx("i", {
                                                                        children: N.charIds.indexOf(r.id) + 1,
                                                                    }),
                                                            ],
                                                        }),
                                                        e.jsx("span", { children: ie(r) }),
                                                    ],
                                                },
                                                r.id,
                                            ),
                                        ),
                                        !A.length &&
                                            e.jsx("div", {
                                                className: "nv-empty sm",
                                                children: "还没有联系人，先在「信息」里添加一个角色。",
                                            }),
                                    ],
                                }),
                                O.length > 1 &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(V, { children: "几个人之间" }),
                                            e.jsxs("div", {
                                                className: "nv-opts",
                                                children: [
                                                    e.jsxs("button", {
                                                        className: `nv-opt btn-plain${N.multi === "rival" ? " on" : ""}`,
                                                        onClick: () => b({ ...N, multi: "rival" }),
                                                        children: [
                                                            e.jsx("b", { children: "修罗场" }),
                                                            e.jsx("span", {
                                                                children: "他们都喜欢你，彼此知道对方的存在",
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsxs("button", {
                                                        className: `nv-opt btn-plain${N.multi === "ensemble" ? " on" : ""}`,
                                                        onClick: () => b({ ...N, multi: "ensemble" }),
                                                        children: [
                                                            e.jsx("b", { children: "群像" }),
                                                            e.jsx("span", {
                                                                children: "每个人有自己的线，和你各有关系",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    t === 1 && e.jsx(lt, { value: y, onChange: T, me: ge(c) }),
                    t === 2 &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx(V, {
                                    right: e.jsx("button", {
                                        className: "nv-text-btn btn-plain",
                                        onClick: () => E({ item: null }),
                                        children: "自己写",
                                    }),
                                    children: "文风",
                                }),
                                e.jsx("div", {
                                    className: "nv-sgrid",
                                    children: ss(p).map((r) =>
                                        e.jsx(
                                            Ja,
                                            {
                                                s: r,
                                                on: N.styleId === r.id,
                                                onClick: () => b({ ...N, styleId: r.id }),
                                            },
                                            r.id,
                                        ),
                                    ),
                                }),
                                e.jsx(V, { children: "设定" }),
                                e.jsx("div", {
                                    className: "nv-opts",
                                    children: On.map((r) =>
                                        e.jsxs(
                                            "button",
                                            {
                                                className: `nv-opt btn-plain${N.setting === r.k ? " on" : ""}`,
                                                onClick: () => b({ ...N, setting: r.k }),
                                                children: [
                                                    e.jsx("b", { children: r.name }),
                                                    e.jsx("span", { children: r.desc }),
                                                ],
                                            },
                                            r.k,
                                        ),
                                    ),
                                }),
                                e.jsx(V, { children: "篇幅" }),
                                e.jsx("div", {
                                    className: "nv-opts four",
                                    children: Ze.map((r) =>
                                        e.jsxs(
                                            "button",
                                            {
                                                className: `nv-opt btn-plain${N.length === r.k ? " on" : ""}`,
                                                onClick: () => b({ ...N, length: r.k }),
                                                children: [
                                                    e.jsx("b", { children: r.name }),
                                                    e.jsx("span", { children: r.desc }),
                                                ],
                                            },
                                            r.k,
                                        ),
                                    ),
                                }),
                                e.jsx(Ms, {
                                    label: "每章字数",
                                    items: ta,
                                    value: N.words,
                                    onChange: (r) => b({ ...N, words: r }),
                                }),
                                e.jsx(Ms, {
                                    label: "视角",
                                    items: aa,
                                    value: N.pov,
                                    onChange: (r) => b({ ...N, pov: r }),
                                }),
                                e.jsx(Ms, {
                                    label: "结局",
                                    items: la,
                                    value: N.ending,
                                    onChange: (r) => b({ ...N, ending: r }),
                                }),
                                e.jsx(J, {
                                    label: "补充要求",
                                    hint: "选填。想看的情节、雷点、尺度等",
                                    children: e.jsx("textarea", {
                                        className: "nv-input area",
                                        rows: 3,
                                        value: N.note,
                                        onChange: (r) => b({ ...N, note: r.target.value }),
                                    }),
                                }),
                            ],
                        }),
                    t === 3 &&
                        (!$ || $.planning || !$.title
                            ? e.jsx("div", {
                                  className: "nv-gen-wait",
                                  children:
                                      ($ != null && $.planning) || D.busy
                                          ? e.jsxs(e.Fragment, {
                                                children: [
                                                    e.jsx("span", { className: "nv-spin big" }),
                                                    e.jsx("b", { children: "正在构思文案" }),
                                                    e.jsxs("small", {
                                                        children: [
                                                            "书名、文案、标签、人物身份和大纲。",
                                                            e.jsx("br", {}),
                                                            "可以先离开去做别的，好了会通知你，草稿在书架上。",
                                                        ],
                                                    }),
                                                    e.jsx("button", {
                                                        className: "nv-text-btn btn-plain",
                                                        onClick: D.stop,
                                                        children: "停止",
                                                    }),
                                                ],
                                            })
                                          : e.jsxs(e.Fragment, {
                                                children: [
                                                    e.jsx("b", { children: "还没有文案" }),
                                                    e.jsx("button", {
                                                        className: "nv-btn",
                                                        onClick: W,
                                                        children: "生成文案",
                                                    }),
                                                ],
                                            }),
                              })
                            : e.jsx(Ys, {
                                  draft: $,
                                  setDraft: Q,
                                  chars: O,
                                  me: c,
                                  busy: D.busy,
                                  onRegen: W,
                                  onStop: D.stop,
                              })),
                ],
            }),
            e.jsx("div", {
                className: "nv-foot",
                children:
                    t < 3
                        ? e.jsx("button", {
                              className: "nv-btn block",
                              disabled: !B,
                              onClick: Y,
                              children: t === 2 ? "生成文案" : "下一步",
                          })
                        : e.jsxs("button", {
                              className: "nv-btn block",
                              disabled: !B,
                              onClick: te,
                              children: [e.jsx(Wn, { size: 16, weight: "bold" }), "开始连载 · 后台写第一章"],
                          }),
            }),
            M &&
                e.jsx(Qn, {
                    initial: M.item,
                    onClose: () => E(null),
                    onSave: (r) => {
                        (x((S) => ({ styles: [...S.styles.filter((w) => w.id !== r.id), r] })),
                            b((S) => ({ ...S, styleId: r.id })),
                            E(null));
                    },
                }),
        ],
    });
}
function Ms({ label: s, items: a, value: m, onChange: p }) {
    return e.jsxs("div", {
        className: "nv-optrow",
        children: [
            e.jsx("span", { children: s }),
            e.jsx("div", {
                className: "nv-chips",
                children: a.map((x) =>
                    e.jsx(
                        "button",
                        {
                            className: `nv-chip btn-plain${m === x.k ? " on" : ""}`,
                            onClick: () => p(x.k),
                            children: x.name,
                        },
                        x.k,
                    ),
                ),
            }),
        ],
    });
}
function Ys({ draft: s, setDraft: a, chars: m, me: p, busy: x, onRegen: j, onStop: h, hideRegen: c = !1 }) {
    var l, N, b;
    const A = (y, T) => a((M) => ({ ...M, [y]: T })),
        t = (y) => (y === "me" ? ge(p) : ie(m.find((T) => T.id === y)));
    return e.jsxs("div", {
        className: "nv-draft",
        children: [
            e.jsxs("div", {
                className: "nv-draft-hero",
                children: [
                    e.jsx(Ve, { title: s.title, author: ge(p), cover: s.cover, w: 104, label: "fanfic" }),
                    e.jsxs("div", {
                        className: "nv-draft-hero-r",
                        children: [
                            e.jsx("input", {
                                className: "nv-title-input",
                                value: s.title,
                                onChange: (y) => A("title", y.target.value),
                            }),
                            e.jsxs("div", {
                                className: "nv-tagline",
                                children: [
                                    ((l = s.plot) == null ? void 0 : l.name) ||
                                        ((N = s.world) == null ? void 0 : N.name),
                                    (b = s.tropes) != null && b.length
                                        ? ` · ${s.tropes.slice(0, 2).join(" · ")}`
                                        : "",
                                ],
                            }),
                            e.jsx("div", {
                                className: "nv-tone-pick",
                                children: [0, 1, 2, 3, 4, 5].map((y) => {
                                    var T;
                                    return e.jsx(
                                        "button",
                                        {
                                            className: `btn-plain t${y}${((T = s.cover) == null ? void 0 : T.tone) === y ? " on" : ""}`,
                                            onClick: () => A("cover", { ...s.cover, tone: y }),
                                            "aria-label": "封面底色",
                                        },
                                        y,
                                    );
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(J, {
                label: "文案",
                children: e.jsx("textarea", {
                    className: "nv-input area blurb",
                    rows: 7,
                    value: s.blurb,
                    onChange: (y) => A("blurb", y.target.value),
                }),
            }),
            e.jsx(J, {
                label: "标签",
                hint: "用顿号分开",
                children: e.jsx("input", {
                    className: "nv-input",
                    value: (s.tags || []).join("、"),
                    onChange: (y) =>
                        A(
                            "tags",
                            y.target.value
                                .split(/[、,，]+/)
                                .map((T) => T.trim())
                                .filter(Boolean)
                                .slice(0, 6),
                        ),
                }),
            }),
            s.timeline !== void 0 &&
                e.jsx(J, {
                    label: "时间线",
                    hint: "各人物的年龄与过去事件的时间。之后每章都以此为准。",
                    children: e.jsx("textarea", {
                        className: "nv-input area",
                        rows: 2,
                        value: s.timeline || "",
                        onChange: (y) => A("timeline", y.target.value),
                    }),
                }),
            e.jsx(V, { children: "人物身份" }),
            e.jsx("div", {
                className: "nv-ids",
                children: (s.identities || []).map((y, T) =>
                    e.jsxs(
                        "div",
                        {
                            className: "nv-id-row",
                            children: [
                                e.jsx("b", { children: t(y.who) }),
                                e.jsx("input", {
                                    className: "nv-input",
                                    value: y.identity,
                                    onChange: (M) =>
                                        A(
                                            "identities",
                                            s.identities.map((E, C) =>
                                                C === T ? { ...E, identity: M.target.value } : E,
                                            ),
                                        ),
                                }),
                            ],
                        },
                        y.who,
                    ),
                ),
            }),
            e.jsx(J, {
                label: "想要的大致走向（选填）",
                hint: "生成的大纲不会展示，以免剧透。可以写下希望故事大致往哪里发展，后续章节将按此展开；每章末尾仍可选择下一章的走向。",
                children: e.jsx("textarea", {
                    className: "nv-input area",
                    rows: 4,
                    value: s.wish || "",
                    placeholder: "留空时由作者自行安排",
                    onChange: (y) => A("wish", y.target.value.slice(0, 600)),
                }),
            }),
            !c &&
                e.jsx("button", {
                    className: "nv-text-btn btn-plain center",
                    onClick: x ? h : j,
                    children: x
                        ? e.jsxs(e.Fragment, { children: [e.jsx("span", { className: "nv-spin" }), "停止"] })
                        : "换一版文案",
                }),
        ],
    });
}
const Bs = He;
function sl({ id: s, onClose: a, onRead: m }) {
    var te, Q, r, S;
    const { state: p } = Oe(),
        { nv: x, update: j, putItem: h } = we(),
        c = xe(),
        A = Re(),
        t = x.fics.find((w) => w.id === s),
        l = Ne(`fic-${s}`),
        [N, b] = u.useState(!1),
        [y, T] = u.useState(!1),
        [M, E] = u.useState(null),
        [C, v] = u.useState(!1),
        $ = p.me,
        D = u.useMemo(() => Ge(p, t == null ? void 0 : t.charIds), [p, t == null ? void 0 : t.charIds]);
    if (!t) return null;
    if (t.status === "draft") return e.jsx(nl, { fic: t, chars: D, me: $, onClose: a });
    const R = t.chapters.reduce((w, o) => w + Xe(o.text), 0),
        O = Ze.find((w) => w.k === t.length) || Ze[1],
        B = t.status === "done" ? "已完结" : "连载中",
        k = ((te = t.progress) == null ? void 0 : te.ch) || 0,
        W = async () => {
            var Z;
            const w = A();
            if (!w) return;
            const o = t.chapters.length + 1,
                z = await l.run((G) => je(w, xs({ fic: t, chars: D, me: $, n: o }), G), { label: "写一章" });
            if (z.aborted || z.skipped) return;
            const P = z.value ? js(z.value) : null;
            if (!P) {
                c(((Z = z.error) == null ? void 0 : Z.message) || "没写出来，再试一次", "error");
                return;
            }
            h("fics", s, (G) => ({ chapters: [...G.chapters, Ps(P)] }));
        },
        Y = (w) => {
            var z;
            const o = (z = w.target.files) == null ? void 0 : z[0];
            ((w.target.value = ""),
                o &&
                    Hn(o, { aspect: 1 / 1.42, shape: "rounded", title: "封面" }).then(
                        (P) => P && h("fics", s, (Z) => ({ cover: { ...(Z.cover || {}), image: P } })),
                    ));
        };
    return e.jsxs(ne.div, {
        className: "nv-layer",
        ...Bs,
        children: [
            e.jsx(me, {
                onBack: a,
                title: "",
                right: e.jsx("button", {
                    className: "nv-round btn-plain",
                    onClick: () => b(!0),
                    "aria-label": "更多",
                    children: e.jsx(Xs, { size: 22, weight: "bold" }),
                }),
            }),
            e.jsxs("div", {
                className: "nv-scroll detail",
                children: [
                    e.jsxs("div", {
                        className: "nv-hero",
                        children: [
                            e.jsx(Ve, {
                                title: t.title,
                                author: ge($),
                                cover: t.cover,
                                w: 128,
                                label: "fanfic",
                                className: "lifted",
                            }),
                            e.jsx("h1", { className: "nv-hero-title", children: t.title || "未命名" }),
                            e.jsxs("div", {
                                className: "nv-hero-by",
                                children: [ge($), " · ", ((Q = t.world) == null ? void 0 : Q.name) || "同人"],
                            }),
                            e.jsx("div", {
                                className: "nv-hero-tags",
                                children: (t.tags || []).map((w) => e.jsx("i", { children: w }, w)),
                            }),
                            e.jsxs("div", {
                                className: "nv-stats",
                                children: [
                                    e.jsxs("div", {
                                        children: [
                                            e.jsx("b", { children: t.chapters.length }),
                                            e.jsx("span", {
                                                children: O.chapters ? `/ ${O.chapters} 章` : "章",
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        children: [
                                            e.jsx("b", { children: Ks(R).replace(/ 字| 万字/, "") }),
                                            e.jsx("span", { children: R >= 1e4 ? "万字" : "字" }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        children: [
                                            e.jsx("b", { children: B }),
                                            e.jsxs("span", { children: [Ls(t.updatedAt), "更新"] }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx(V, { children: "文案" }),
                    e.jsxs("div", {
                        className: `nv-blurb${y ? " open" : ""}`,
                        onClick: () => T(!y),
                        children: [
                            t.blurb || "还没有文案",
                            !y &&
                                ((r = t.blurb) == null ? void 0 : r.length) > 120 &&
                                e.jsx("span", { className: "nv-more", children: "展开" }),
                        ],
                    }),
                    e.jsx(V, { children: "主要人物" }),
                    e.jsx("div", {
                        className: "nv-ids view",
                        children: [
                            ...D.map((w) => ({ who: w.id, c: w })),
                            { who: "me", c: { avatar: $ == null ? void 0 : $.avatar, name: ge($) } },
                        ].map(({ who: w, c: o }) => {
                            const z = (t.identities || []).find((P) => P.who === w);
                            return e.jsxs(
                                "div",
                                {
                                    className: "nv-id-view",
                                    children: [
                                        e.jsx(he, { char: o, size: 36 }),
                                        e.jsxs("div", {
                                            children: [
                                                e.jsx("b", { children: w === "me" ? ge($) : ie(o) }),
                                                e.jsx("span", {
                                                    children:
                                                        (z == null ? void 0 : z.identity) ||
                                                        (w === "me" ? t.meRole : "") ||
                                                        "—",
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                w,
                            );
                        }),
                    }),
                    e.jsx(V, {
                        right: e.jsxs("span", {
                            className: "nv-label-r",
                            children: [t.chapters.length, " 章"],
                        }),
                        children: "目录",
                    }),
                    e.jsxs("div", {
                        className: "nv-chlist",
                        children: [
                            t.chapters.map((w, o) =>
                                e.jsxs(
                                    "button",
                                    {
                                        className: `nv-chrow btn-plain${o === k && t.readAt ? " on" : ""}`,
                                        onClick: () => m(o),
                                        children: [
                                            e.jsx("span", {
                                                className: "nv-toc-n",
                                                children: String(o + 1).padStart(2, "0"),
                                            }),
                                            e.jsxs("span", {
                                                className: "nv-chrow-t",
                                                children: [
                                                    e.jsx("b", { children: w.title }),
                                                    e.jsxs("small", {
                                                        children: [
                                                            Xe(w.text),
                                                            " 字",
                                                            w.direction ? " · 按你选的走向" : "",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            o === k && t.readAt
                                                ? e.jsx("i", { className: "nv-tag", children: "读到这里" })
                                                : null,
                                        ],
                                    },
                                    w.id,
                                ),
                            ),
                            l.busy &&
                                e.jsxs("div", {
                                    className: "nv-chrow writing",
                                    children: [
                                        e.jsx("span", {
                                            className: "nv-toc-n",
                                            children: String(t.chapters.length + 1).padStart(2, "0"),
                                        }),
                                        e.jsxs("span", {
                                            className: "nv-chrow-t",
                                            children: [
                                                e.jsxs("b", {
                                                    children: ["正在写第 ", t.chapters.length + 1, " 章"],
                                                }),
                                                e.jsx("small", { children: "写完会出现在这里" }),
                                            ],
                                        }),
                                        e.jsx("button", {
                                            className: "nv-text-btn btn-plain",
                                            onClick: l.stop,
                                            children: "停止",
                                        }),
                                    ],
                                }),
                            !l.busy &&
                                !t.chapters.length &&
                                e.jsxs("div", {
                                    className: "nv-chrow empty",
                                    children: [
                                        e.jsx("span", { children: "还没有章节" }),
                                        e.jsxs("button", {
                                            className: "nv-btn sm",
                                            onClick: W,
                                            children: [e.jsx(_n, { size: 14, weight: "bold" }), "写第一章"],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "nv-foot",
                children: e.jsx("button", {
                    className: "nv-btn block",
                    disabled: !t.chapters.length,
                    onClick: () => m(t.readAt ? k : 0),
                    children: t.readAt ? `继续阅读 · 第 ${k + 1} 章` : "开始阅读",
                }),
            }),
            e.jsx(fs, {
                open: N,
                onClose: () => b(!1),
                title: t.title,
                actions: [
                    { label: "编辑书名、文案、大纲", onClick: () => E({ ...t }) },
                    {
                        label: "更换封面图片",
                        onClick: () => {
                            var w;
                            return (w = document.getElementById(`nv-cover-${s}`)) == null
                                ? void 0
                                : w.click();
                        },
                    },
                    ...((S = t.cover) != null && S.image
                        ? [
                              {
                                  label: "恢复排版封面",
                                  onClick: () =>
                                      h("fics", s, (w) => ({ cover: { ...(w.cover || {}), image: "" } })),
                              },
                          ]
                        : []),
                    t.status === "done"
                        ? { label: "重新开启连载", onClick: () => h("fics", s, { status: "ongoing" }) }
                        : { label: "标记为完结", onClick: () => h("fics", s, { status: "done" }) },
                    { label: "删除作品", destructive: !0, onClick: () => v(!0) },
                ],
            }),
            e.jsx("input", { id: `nv-cover-${s}`, type: "file", accept: "image/*", hidden: !0, onChange: Y }),
            e.jsx(qe, {
                open: C,
                onClose: () => v(!1),
                title: `删除《${t.title}》？`,
                message: "所有章节和评论都会删除，不能恢复。",
                confirm: {
                    label: "删除",
                    destructive: !0,
                    onClick: () => {
                        (j((w) => ({ fics: w.fics.filter((o) => o.id !== s) })), a());
                    },
                },
            }),
            e.jsx(ue, {
                children:
                    M &&
                    e.jsxs(ne.div, {
                        className: "nv-layer",
                        ...Bs,
                        children: [
                            e.jsx(me, {
                                onBack: () => E(null),
                                title: "编辑作品",
                                right: e.jsx("button", {
                                    className: "nv-text-btn strong btn-plain",
                                    onClick: () => {
                                        (h("fics", s, {
                                            title: M.title,
                                            blurb: M.blurb,
                                            tags: M.tags,
                                            identities: M.identities,
                                            timeline: M.timeline || "",
                                            wish: String(M.wish || "").trim(),
                                            cover: M.cover,
                                        }),
                                            E(null));
                                    },
                                    children: "保存",
                                }),
                            }),
                            e.jsxs("div", {
                                className: "nv-scroll form",
                                children: [
                                    e.jsx(Ys, {
                                        draft: M,
                                        setDraft: E,
                                        chars: D,
                                        me: $,
                                        busy: !1,
                                        onRegen: null,
                                        onStop: null,
                                        hideRegen: !0,
                                    }),
                                    e.jsxs("button", {
                                        className: "nv-text-btn btn-plain center",
                                        onClick: () => {
                                            var w;
                                            return (w = document.getElementById(`nv-cover-${s}`)) == null
                                                ? void 0
                                                : w.click();
                                        },
                                        children: [e.jsx(Fa, { size: 15 }), "用自己的图片做封面"],
                                    }),
                                ],
                            }),
                        ],
                    }),
            }),
        ],
    });
}
function nl({ fic: s, chars: a, me: m, onClose: p }) {
    const { update: x, putItem: j } = we(),
        h = Re(),
        c = Ne(`fic-plan-${s.id}`),
        [A, t] = u.useState(!1),
        l = c.busy || s.planning,
        N = () => {
            const T = h();
            T && it({ fic: s, lane: T, chars: a, me: m, putItem: j });
        },
        b = () => {
            const T = h();
            T && rt({ fic: s, lane: T, chars: a, me: m, putItem: j });
        },
        y = (T) => j("fics", s.id, (M) => (typeof T == "function" ? T(M) : T));
    return e.jsxs(ne.div, {
        className: "nv-layer",
        ...Bs,
        children: [
            e.jsx(me, {
                onBack: p,
                title: "草稿",
                sub: l ? "正在构思文案" : "确认文案后开始连载",
                right: e.jsx("button", {
                    className: "nv-text-btn btn-plain",
                    onClick: () => t(!0),
                    children: "删除",
                }),
            }),
            e.jsx("div", {
                className: "nv-scroll form",
                children:
                    l || !s.title
                        ? e.jsx("div", {
                              className: "nv-gen-wait",
                              children: l
                                  ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx("span", { className: "nv-spin big" }),
                                            e.jsx("b", { children: "正在构思文案" }),
                                            e.jsx("small", { children: "可以先离开，好了会通知你。" }),
                                            e.jsx("button", {
                                                className: "nv-text-btn btn-plain",
                                                onClick: () => {
                                                    (c.stop(), j("fics", s.id, { planning: !1 }));
                                                },
                                                children: "停止",
                                            }),
                                        ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx("b", { children: "文案没有生成出来" }),
                                            e.jsx("button", {
                                                className: "nv-btn",
                                                onClick: N,
                                                children: "重新生成",
                                            }),
                                        ],
                                    }),
                          })
                        : e.jsx(Ys, {
                              draft: s,
                              setDraft: y,
                              chars: a,
                              me: m,
                              busy: c.busy,
                              onRegen: N,
                              onStop: c.stop,
                          }),
            }),
            e.jsx("div", {
                className: "nv-foot",
                children: e.jsx("button", {
                    className: "nv-btn block",
                    disabled: l || !s.title,
                    onClick: b,
                    children: "开始连载 · 后台写第一章",
                }),
            }),
            e.jsx(qe, {
                open: A,
                onClose: () => t(!1),
                title: "删除这份草稿？",
                confirm: {
                    label: "删除",
                    destructive: !0,
                    onClick: () => {
                        (x((T) => ({ fics: T.fics.filter((M) => M.id !== s.id) })), p());
                    },
                },
            }),
        ],
    });
}
const ct = He;
async function ot({ lane: s, theater: a, chars: m, me: p, putItem: x }) {
    var c, A;
    x("theaters", a.id, { status: "making", makingAt: Date.now() });
    const j = await Us(
        `theater-${a.id}`,
        (t) => pa((l) => xa(s, l, t), ja({ theater: a, chars: m, me: p })),
        { label: "剧场" },
    );
    if (j.aborted || j.skipped)
        return (j.aborted && x("theaters", a.id, { status: a.html ? "ready" : "failed" }), j);
    const h = (c = j.value) != null && c.ok ? j.value.html : "";
    return (
        x(
            "theaters",
            a.id,
            h
                ? { html: h, status: "ready", acts: [], cardSave: null }
                : { status: a.html ? "ready" : "failed" },
        ),
        h
            ? Ye(`剧场「${a.title}」写好了`, "success", { kind: "theater", id: a.id })
            : Ye(
                  ((A = j.error) == null ? void 0 : A.message) ||
                      `剧场「${a.title}」没有写出来，可以在剧场里重试`,
                  "error",
              ),
        { ...j, ok: !!h }
    );
}
function tl({ onClose: s, onDone: a }) {
    const { state: m } = Oe(),
        { nv: p, update: x, putItem: j } = we(),
        h = xe(),
        c = Re(),
        A = (m.characters || []).filter((k) => !k.deleted),
        [t, l] = u.useState(() =>
            m.activeCharId && A.some((k) => k.id === m.activeCharId) ? [m.activeCharId] : [],
        ),
        [N, b] = u.useState(tt),
        [y, T] = u.useState("mid"),
        [M, E] = u.useState("au"),
        [C, v] = u.useState(""),
        [$, D] = u.useState(""),
        R = t.map((k) => A.find((W) => W.id === k)).filter(Boolean),
        O = ss(p).find((k) => k.id === C),
        B = () => {
            const k = c();
            if (!k || !R.length || !Es(N)) return;
            const W = ha({ charIds: t, ...at(p, N), style: O, note: $, length: y, setting: M });
            (x((Y) => ({ theaters: [W, ...Y.theaters] })),
                a(W.id),
                h("剧场在后台编排，写好了会通知你"),
                ot({ lane: k, theater: W, chars: R, me: m.me, putItem: j }));
        };
    return e.jsxs(ne.div, {
        className: "nv-layer",
        ...ct,
        children: [
            e.jsx(me, { onBack: s, title: "新建剧场" }),
            e.jsxs("div", {
                className: "nv-scroll form",
                children: [
                    e.jsx(V, { children: "出演" }),
                    e.jsx("div", {
                        className: "nv-cast",
                        children: A.map((k) =>
                            e.jsxs(
                                "button",
                                {
                                    className: `nv-cast-item btn-plain${t.includes(k.id) ? " on" : ""}`,
                                    onClick: () =>
                                        l((W) =>
                                            W.includes(k.id)
                                                ? W.filter((Y) => Y !== k.id)
                                                : [...W, k.id].slice(0, 4),
                                        ),
                                    children: [
                                        e.jsxs("span", {
                                            className: "nv-cast-face",
                                            children: [
                                                e.jsx(he, { char: k, size: 56 }),
                                                t.includes(k.id) &&
                                                    e.jsx("i", { children: t.indexOf(k.id) + 1 }),
                                            ],
                                        }),
                                        e.jsx("span", { children: ie(k) }),
                                    ],
                                },
                                k.id,
                            ),
                        ),
                    }),
                    e.jsx(V, { children: "故事" }),
                    e.jsx(lt, { value: N, onChange: b, withScene: !0, me: ge(m.me) }),
                    e.jsx(V, { children: "设定" }),
                    e.jsx("div", {
                        className: "nv-opts",
                        children: On.map((k) =>
                            e.jsxs(
                                "button",
                                {
                                    className: `nv-opt btn-plain${M === k.k ? " on" : ""}`,
                                    onClick: () => E(k.k),
                                    children: [
                                        e.jsx("b", { children: k.name }),
                                        e.jsx("span", { children: k.desc }),
                                    ],
                                },
                                k.k,
                            ),
                        ),
                    }),
                    e.jsxs(V, {
                        children: ["篇幅 ", e.jsx("small", { children: "剧场本身是一篇互动短篇" })],
                    }),
                    e.jsx("div", {
                        className: "nv-opts three",
                        children: oa.map((k) =>
                            e.jsxs(
                                "button",
                                {
                                    className: `nv-opt btn-plain${y === k.k ? " on" : ""}`,
                                    onClick: () => T(k.k),
                                    children: [
                                        e.jsx("b", { children: k.name }),
                                        e.jsx("span", { children: k.desc }),
                                    ],
                                },
                                k.k,
                            ),
                        ),
                    }),
                    e.jsxs(V, { children: ["文风 ", e.jsx("small", { children: "选填" })] }),
                    e.jsxs("div", {
                        className: "nv-chips wrap",
                        children: [
                            e.jsx("button", {
                                className: `nv-chip btn-plain${C ? "" : " on"}`,
                                onClick: () => v(""),
                                children: "不指定",
                            }),
                            ss(p).map((k) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `nv-chip btn-plain${C === k.id ? " on" : ""}`,
                                        onClick: () => v(k.id),
                                        children: k.name,
                                    },
                                    k.id,
                                ),
                            ),
                        ],
                    }),
                    e.jsx(J, {
                        label: "补充要求",
                        hint: "选填。想要的结局、互动方式、氛围",
                        children: e.jsx("textarea", {
                            className: "nv-input area",
                            rows: 3,
                            value: $,
                            onChange: (k) => D(k.target.value),
                        }),
                    }),
                ],
            }),
            e.jsx("div", {
                className: "nv-foot",
                children: e.jsxs("button", {
                    className: "nv-btn block",
                    disabled: !R.length || !Es(N),
                    onClick: B,
                    children: [e.jsx(Ra, { size: 15, weight: "fill" }), "开演 · 后台编排"],
                }),
            }),
        ],
    });
}
let al = 0;
function ll({ id: s, onClose: a }) {
    const { state: m } = Oe(),
        { nv: p, update: x, putItem: j } = we();
    xe();
    const h = Re(),
        c = p.theaters.find((S) => S.id === s),
        A = Ne(`theater-${s}`),
        t = Ne(`theater-reply-${s}`),
        l = u.useRef(`nvth${++al}`).current,
        N = u.useRef(null),
        [b, y] = u.useState(320),
        [T, M] = u.useState(!1),
        [E, C] = u.useState(!1),
        v = u.useMemo(() => Ge(m, c == null ? void 0 : c.charIds), [m, c == null ? void 0 : c.charIds]),
        $ = u.useRef(c);
    $.current = c;
    const [D, R] = u.useState(() => (c == null ? void 0 : c.cardSave) || null),
        [O, B] = u.useState(0);
    u.useEffect(() => {
        R((c == null ? void 0 : c.cardSave) || null);
    }, [c == null ? void 0 : c.html]);
    const k = u.useMemo(
        () => (c != null && c.html ? da(c.html, l, { saved: D }) : ""),
        [c == null ? void 0 : c.html, l, D, O],
    );
    u.useEffect(() => {
        const S = async (w) => {
            var z, P;
            const o = w.data;
            if (!(!o || o.litotHtml !== l)) {
                if (
                    (Number.isFinite(o.h) && y(Math.max(200, Math.min(4e3, o.h))),
                    typeof o.snap == "string" &&
                        j("theaters", s, (Z) => ({ cardSave: { ...(Z.cardSave || {}), snap: o.snap } })),
                    typeof o.save == "string")
                )
                    try {
                        const Z = JSON.parse(o.save);
                        j("theaters", s, (G) => ({ cardSave: { ...(G.cardSave || {}), state: Z } }));
                    } catch {}
                if (typeof o.act == "string" && o.act.trim()) {
                    const Z = o.act.trim().slice(0, 300);
                    j("theaters", s, (K) => ({
                        acts: [...(K.acts || []), { who: "user", text: Z, at: Date.now() }],
                    }));
                    const G = h();
                    if (!G) return;
                    const ve = { ...$.current, acts: [...($.current.acts || []), { who: "user", text: Z }] },
                        _ = await t.run((K) => je(G, ua({ theater: ve, chars: v, me: m.me, action: Z }), K), {
                            label: "剧场回应",
                        }),
                        de = _.value ? Pn(_.value) : null;
                    if (!de || (!de.say && !de.html)) return;
                    const F = v.find((K) => ie(K) === de.who) || v[0],
                        H = {
                            say: String(de.say || "").slice(0, 1200),
                            html: ma(de.html),
                            who: ie(F),
                            act: String(de.act || "").slice(0, 60),
                        };
                    (j("theaters", s, (K) => ({
                        acts: [
                            ...(K.acts || []),
                            {
                                who: "char",
                                charId: F == null ? void 0 : F.id,
                                name: H.who,
                                text: H.say || H.act || "…",
                                say: H.say,
                                html: H.html,
                                at: Date.now(),
                            },
                        ],
                    })),
                        (P = (z = N.current) == null ? void 0 : z.contentWindow) == null ||
                            P.postMessage({ litotReplyTo: l, reply: H }, "*"));
                }
            }
        };
        return (window.addEventListener("message", S), () => window.removeEventListener("message", S));
    }, [l, s, v]);
    const W = !!(D != null && D.snap) && (D.state === void 0 || D.state === null),
        Y = () => {
            var w, o;
            const S = (w = N.current) == null ? void 0 : w.contentWindow;
            if (!(!S || W))
                for (const z of ((o = $.current) == null ? void 0 : o.acts) || [])
                    z.who === "char" &&
                        (z.say || z.html) &&
                        S.postMessage(
                            {
                                litotReplyTo: l,
                                replay: !0,
                                reply: { say: z.say || "", html: z.html || "", who: z.name || "" },
                            },
                            "*",
                        );
        },
        te = () => {
            (j("theaters", s, { cardSave: null, acts: [] }), R(null), B((S) => S + 1));
        },
        Q = async () => {
            const S = h();
            S && (await ot({ lane: S, theater: c, chars: v, me: m.me, putItem: j }));
        };
    if (!c) return null;
    const r = !c.html && !A.busy && (c.status === "failed" || Date.now() - (c.makingAt || 0) > 24e4);
    return e.jsxs(ne.div, {
        className: "nv-layer nv-theater",
        ...ct,
        children: [
            e.jsx(me, {
                onBack: a,
                title: c.title,
                sub: v.map(ie).join("、"),
                right: e.jsx("button", {
                    className: "nv-round btn-plain",
                    onClick: () => M(!0),
                    "aria-label": "更多",
                    children: e.jsx(Xs, { size: 22, weight: "bold" }),
                }),
            }),
            e.jsxs("div", {
                className: "nv-scroll theater",
                children: [
                    c.scene &&
                        e.jsxs("div", {
                            className: "nv-th-head",
                            children: [
                                e.jsx(Vs, { chars: v, size: 26 }),
                                e.jsx("p", { children: c.scene.premise }),
                            ],
                        }),
                    c.html
                        ? e.jsxs("div", {
                              className: "nv-th-stage",
                              children: [
                                  e.jsx(
                                      "iframe",
                                      {
                                          ref: N,
                                          title: c.title,
                                          sandbox: "allow-scripts",
                                          srcDoc: k,
                                          style: { height: b },
                                          onLoad: Y,
                                      },
                                      O,
                                  ),
                                  (t.busy || A.busy) &&
                                      e.jsxs("div", {
                                          className: "nv-th-foot",
                                          children: [
                                              e.jsx("span", { className: "nv-spin" }),
                                              A.busy ? "正在重新编排…" : "有人在回应…",
                                          ],
                                      }),
                                  W &&
                                      !t.busy &&
                                      e.jsxs("div", {
                                          className: "nv-th-foot",
                                          children: [
                                              "上次玩到这里",
                                              e.jsx("button", {
                                                  className: "nv-text-btn btn-plain",
                                                  onClick: te,
                                                  children: "从头再玩",
                                              }),
                                          ],
                                      }),
                              ],
                          })
                        : e.jsx("div", {
                              className: "nv-gen-wait stage",
                              children: r
                                  ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx("b", { children: "剧场没做出来" }),
                                            e.jsx("button", {
                                                className: "nv-btn",
                                                onClick: Q,
                                                children: "再试一次",
                                            }),
                                        ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx("span", { className: "nv-spin big" }),
                                            e.jsx("b", { children: "正在编排剧场" }),
                                            e.jsx("small", { children: "写剧情、做页面，通常要一两分钟" }),
                                            A.busy &&
                                                e.jsx("button", {
                                                    className: "nv-text-btn btn-plain",
                                                    onClick: A.stop,
                                                    children: "停止",
                                                }),
                                        ],
                                    }),
                          }),
                ],
            }),
            e.jsx(fs, {
                open: T,
                onClose: () => M(!1),
                title: c.title,
                actions: [
                    { label: "从头再玩", onClick: te },
                    { label: "重新生成剧场", sub: "换一版页面和剧情", onClick: Q },
                    { label: "删除", destructive: !0, onClick: () => C(!0) },
                ],
            }),
            e.jsx(qe, {
                open: E,
                onClose: () => C(!1),
                title: "删除这个剧场？",
                confirm: {
                    label: "删除",
                    destructive: !0,
                    onClick: () => {
                        (x((S) => ({ theaters: S.theaters.filter((w) => w.id !== s) })), a());
                    },
                },
            }),
        ],
    });
}
function ml({ onBack: s }) {
    var _, de, F, H, K, ce;
    const { state: a } = Oe(),
        { nv: m, update: p, putItem: x } = we(),
        j = xe(),
        [h, c] = u.useState("shelf"),
        [A, t] = u.useState("long"),
        [l, N] = u.useState(!1),
        [b, y] = u.useState(null),
        [T, M] = u.useState(null),
        [E, C] = u.useState(!1),
        [v, $] = u.useState(!1),
        [D, R] = u.useState(null),
        [O, B] = u.useState(null),
        [k, W] = u.useState(null),
        [Y, te] = u.useState(null),
        [Q, r] = u.useState(!1),
        S = u.useRef(null),
        w = u.useRef(null),
        o = a.me;
    u.useEffect(() => {
        const d = () => {
            const I = ka("novel");
            I != null &&
                I.id &&
                (c("fan"), I.kind === "theater" ? (t("theater"), R(I.id)) : (t("long"), M(I.id)));
        };
        return (
            d(),
            window.addEventListener("litot:focus-post", d),
            () => window.removeEventListener("litot:focus-post", d)
        );
    }, []);
    const z = u.useMemo(
            () => [...m.books].sort((d, I) => (I.readAt || I.createdAt) - (d.readAt || d.createdAt)),
            [m.books],
        ),
        P = z.find((d) => d.readAt),
        Z = async (d) => {
            const I = [...(d.target.files || [])];
            if (((d.target.value = ""), !!I.length)) {
                r(!0);
                try {
                    for (const L of I) {
                        if (/\.epub$/i.test(L.name) || L.type === "application/epub+zip") {
                            const oe = qa(new Uint8Array(await L.arrayBuffer()));
                            if (!oe.text.trim()) {
                                j(`《${L.name}》里没有可读的文字`, "error");
                                continue;
                            }
                            const Be = await $n(new Blob([oe.text], { type: "text/plain;charset=utf-8" }), {
                                kind: "other",
                                note: L.name,
                            });
                            In(Be, oe.text);
                            const ts = Tn(L.name, oe.text),
                                De = An({
                                    title: oe.title || ts.title,
                                    author: oe.author || ts.author,
                                    textRef: Be,
                                    chapters: oe.chapters,
                                    size: Xe(oe.text),
                                });
                            if (oe.cover) {
                                const _e = await ba(oe.cover, { note: `封面 · ${De.title}` }).catch(() => "");
                                _e && (De.cover = { ...De.cover, image: _e });
                            }
                            (p((_e) => ({ books: [De, ..._e.books] })),
                                j(`已导入《${De.title}》· ${oe.chapters.length} 章`, "success"));
                            continue;
                        }
                        const U = ga(new Uint8Array(await L.arrayBuffer()));
                        if (!U.trim()) {
                            j(`《${L.name}》是空的`, "error");
                            continue;
                        }
                        const Ce = Tn(L.name, U),
                            Ie = Na(U),
                            Ee = await $n(new Blob([U], { type: "text/plain;charset=utf-8" }), {
                                kind: "other",
                                note: L.name,
                            });
                        In(Ee, U);
                        const pe = An({ ...Ce, textRef: Ee, chapters: Ie, size: Xe(U) });
                        (p((oe) => ({ books: [pe, ...oe.books] })),
                            j(`已导入《${pe.title}》· ${Ie.length} 章`, "success"));
                    }
                } catch (L) {
                    j(`导入失败：${(L == null ? void 0 : L.message) || L}`, "error");
                } finally {
                    r(!1);
                }
            }
        },
        G = (d) => {
            (x("fics", T, (I) => {
                var L;
                return {
                    progress: {
                        ch: d,
                        ratio: (((L = I.progress) == null ? void 0 : L.ch) === d && I.progress.ratio) || 0,
                    },
                    readAt: Date.now(),
                };
            }),
                y({ kind: "fic", id: T }));
        },
        ve = e.jsxs("div", {
            className: "nv-top-acts",
            children: [
                h !== "shelf" &&
                    e.jsx("button", {
                        className: "nv-round btn-plain",
                        onClick: () => N(!0),
                        "aria-label": "预设",
                        children: e.jsx(Ea, { size: 19, weight: "bold" }),
                    }),
                e.jsx("button", {
                    className: "nv-round solid btn-plain",
                    onClick: () => {
                        var d;
                        return h === "shelf"
                            ? (d = S.current) == null
                                ? void 0
                                : d.click()
                            : A === "long"
                              ? C(!0)
                              : $(!0);
                    },
                    "aria-label": h === "shelf" ? "导入 txt / epub" : "新建",
                    children: e.jsx(Fe, { size: 20, weight: "bold" }),
                }),
            ],
        });
    return e.jsxs("div", {
        className: "nv-root",
        children: [
            e.jsx(me, { onBack: s, title: "", right: ve }),
            e.jsxs("div", {
                className: "nv-scroll home",
                children: [
                    e.jsx(va, { eyebrow: "reading room" }),
                    e.jsx(Dn, {
                        size: "lg",
                        id: "home",
                        items: [
                            ["shelf", "书架"],
                            ["fan", "同人"],
                        ],
                        value: h,
                        onChange: c,
                    }),
                    h === "fan" &&
                        e.jsxs("div", {
                            className: "nv-switch-row",
                            children: [
                                e.jsx("div", {
                                    className: "nv-switch",
                                    role: "tablist",
                                    children: [
                                        ["long", "长篇"],
                                        ["theater", "剧场"],
                                    ].map(([d, I]) =>
                                        e.jsx(
                                            "button",
                                            {
                                                role: "tab",
                                                "aria-selected": A === d,
                                                className: `btn-plain${A === d ? " on" : ""}`,
                                                onClick: () => t(d),
                                                children: I,
                                            },
                                            d,
                                        ),
                                    ),
                                }),
                                e.jsx("span", {
                                    children:
                                        A === "long" ? `${m.fics.length} 部` : `${m.theaters.length} 场`,
                                }),
                            ],
                        }),
                    e.jsx("p", {
                        className: "nv-tab-note",
                        children:
                            h === "shelf"
                                ? "导入的书都在这里，可以选一个人陪你读。"
                                : A === "long"
                                  ? "你和 TA 的 AU 连载，每一章往哪走由你决定。"
                                  : "可以选择走向的互动短篇，你在里面演你自己。",
                    }),
                    h === "shelf" &&
                        e.jsxs(e.Fragment, {
                            children: [
                                P &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(V, { children: "reading now" }),
                                            e.jsxs("button", {
                                                className: "nv-now btn-plain",
                                                onClick: () => y({ kind: "book", id: P.id }),
                                                children: [
                                                    e.jsx(Ve, {
                                                        title: P.title,
                                                        author: P.author,
                                                        cover: P.cover,
                                                        w: 92,
                                                        className: "lifted",
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "nv-now-r",
                                                        children: [
                                                            e.jsx("b", {
                                                                className: "serif",
                                                                children: P.title,
                                                            }),
                                                            e.jsx("span", { children: P.author || "佚名" }),
                                                            e.jsx("small", {
                                                                children:
                                                                    (de =
                                                                        P.chapters[
                                                                            ((_ = P.progress) == null
                                                                                ? void 0
                                                                                : _.ch) || 0
                                                                        ]) == null
                                                                        ? void 0
                                                                        : de.title,
                                                            }),
                                                            e.jsx("div", {
                                                                className: "nv-bar",
                                                                children: e.jsx("i", {
                                                                    style: {
                                                                        width: `${Math.round((((((F = P.progress) == null ? void 0 : F.ch) || 0) + (((H = P.progress) == null ? void 0 : H.ratio) || 0)) / Math.max(1, P.chapters.length)) * 100)}%`,
                                                                    },
                                                                }),
                                                            }),
                                                            e.jsxs("div", {
                                                                className: "nv-now-foot",
                                                                children: [
                                                                    e.jsxs("span", {
                                                                        children: [
                                                                            Math.round(
                                                                                (((((K = P.progress) == null
                                                                                    ? void 0
                                                                                    : K.ch) || 0) +
                                                                                    (((ce = P.progress) ==
                                                                                    null
                                                                                        ? void 0
                                                                                        : ce.ratio) || 0)) /
                                                                                    Math.max(
                                                                                        1,
                                                                                        P.chapters.length,
                                                                                    )) *
                                                                                    100,
                                                                            ),
                                                                            "%",
                                                                        ],
                                                                    }),
                                                                    (() => {
                                                                        const d = (a.characters || []).find(
                                                                            (I) => {
                                                                                var L;
                                                                                return (
                                                                                    I.id ===
                                                                                    ((L = P.companion) == null
                                                                                        ? void 0
                                                                                        : L.charId)
                                                                                );
                                                                            },
                                                                        );
                                                                        return d
                                                                            ? e.jsxs("span", {
                                                                                  className: "nv-co-chip",
                                                                                  children: [
                                                                                      e.jsx(he, {
                                                                                          char: d,
                                                                                          size: 18,
                                                                                      }),
                                                                                      "和 ",
                                                                                      ie(d),
                                                                                      " 共读",
                                                                                  ],
                                                                              })
                                                                            : null;
                                                                    })(),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                e.jsx(V, {
                                    right: z.length
                                        ? e.jsxs("span", {
                                              className: "nv-label-r",
                                              children: [z.length, " 本"],
                                          })
                                        : null,
                                    children: "library",
                                }),
                                z.length
                                    ? e.jsx("div", {
                                          className: "nv-grid",
                                          children: z.map((d) => {
                                              var L, U;
                                              const I = Math.round(
                                                  (((((L = d.progress) == null ? void 0 : L.ch) || 0) +
                                                      (((U = d.progress) == null ? void 0 : U.ratio) || 0)) /
                                                      Math.max(1, d.chapters.length)) *
                                                      100,
                                              );
                                              return e.jsxs(
                                                  "div",
                                                  {
                                                      className: "nv-book",
                                                      children: [
                                                          e.jsxs("button", {
                                                              className: "btn-plain nv-book-cover",
                                                              onClick: () => y({ kind: "book", id: d.id }),
                                                              children: [
                                                                  e.jsx(Ve, {
                                                                      title: d.title,
                                                                      author: d.author,
                                                                      cover: d.cover,
                                                                      w: 104,
                                                                  }),
                                                                  (d.notes || []).length > 0 &&
                                                                      e.jsx("span", {
                                                                          className: "nv-book-badge",
                                                                          children: d.notes.length,
                                                                      }),
                                                              ],
                                                          }),
                                                          e.jsxs("div", {
                                                              className: "nv-book-meta",
                                                              children: [
                                                                  e.jsxs("div", {
                                                                      children: [
                                                                          e.jsx("b", { children: d.title }),
                                                                          e.jsx("span", {
                                                                              children: d.readAt
                                                                                  ? I >= 100
                                                                                      ? "已读完"
                                                                                      : `已读 ${I}%`
                                                                                  : `${d.chapters.length} 章 · 未读`,
                                                                          }),
                                                                      ],
                                                                  }),
                                                                  e.jsx("button", {
                                                                      className: "btn-plain nv-dots",
                                                                      onClick: () => B(d),
                                                                      "aria-label": "更多",
                                                                      children: e.jsx(Xs, {
                                                                          size: 18,
                                                                          weight: "bold",
                                                                      }),
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  },
                                                  d.id,
                                              );
                                          }),
                                      })
                                    : e.jsxs("div", {
                                          className: "nv-empty",
                                          children: [
                                              e.jsx("span", {
                                                  className: "nv-empty-mark",
                                                  children: "empty shelf",
                                              }),
                                              e.jsx("b", { children: "书架是空的" }),
                                              e.jsxs("span", {
                                                  children: [
                                                      "导入 txt 或 epub 小说，可以选一个人和你一起读：",
                                                      e.jsx("br", {}),
                                                      "勾选段落请 TA 批注，或让 TA 读到哪说到哪。",
                                                  ],
                                              }),
                                              e.jsxs("button", {
                                                  className: "nv-btn",
                                                  onClick: () => {
                                                      var d;
                                                      return (d = S.current) == null ? void 0 : d.click();
                                                  },
                                                  children: [
                                                      e.jsx(Fe, { size: 15, weight: "bold" }),
                                                      "导入书籍",
                                                  ],
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                    h === "fan" &&
                        A === "long" &&
                        e.jsx(e.Fragment, {
                            children: m.fics.length
                                ? e.jsx("div", {
                                      className: "nv-ficlist",
                                      children: m.fics.map((d) =>
                                          e.jsx(
                                              il,
                                              {
                                                  f: d,
                                                  chars: Ge(a, d.charIds),
                                                  me: o,
                                                  onClick: () => M(d.id),
                                              },
                                              d.id,
                                          ),
                                      ),
                                  })
                                : e.jsxs("div", {
                                      className: "nv-empty",
                                      children: [
                                          e.jsx("span", {
                                              className: "nv-empty-mark",
                                              children: "no story yet",
                                          }),
                                          e.jsx("b", { children: "还没有同人" }),
                                          e.jsxs("span", {
                                              children: [
                                                  "选好人物，写一段话、选一个剧情预设或自由组合世界观与标签，写一篇你和 TA 的 AU。",
                                                  e.jsx("br", {}),
                                                  "每一章写完，下一章往哪走由你决定。",
                                              ],
                                          }),
                                          e.jsxs("button", {
                                              className: "nv-btn",
                                              onClick: () => C(!0),
                                              children: [e.jsx(Fe, { size: 15, weight: "bold" }), "新建同人"],
                                          }),
                                      ],
                                  }),
                        }),
                    h === "fan" &&
                        A === "theater" &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsxs("div", {
                                    className: "nv-auto-th",
                                    children: [
                                        e.jsxs("div", {
                                            className: "nv-auto-th-h",
                                            children: [
                                                e.jsxs("div", {
                                                    children: [
                                                        e.jsx("b", { children: "自动小剧场" }),
                                                        e.jsx("small", {
                                                            children:
                                                                "开启后，聊天期间会不定期生成一场小剧场。剧情由 AI 依据人物设定生成，题材不限。",
                                                        }),
                                                    ],
                                                }),
                                                e.jsx("button", {
                                                    className: `nv-toggle btn-plain${m.prefs.autoTheater ? " on" : ""}`,
                                                    role: "switch",
                                                    "aria-checked": !!m.prefs.autoTheater,
                                                    onClick: () =>
                                                        p((d) => ({
                                                            prefs: {
                                                                ...d.prefs,
                                                                autoTheater: !d.prefs.autoTheater,
                                                            },
                                                        })),
                                                    children: e.jsx("i", {}),
                                                }),
                                            ],
                                        }),
                                        m.prefs.autoTheater &&
                                            e.jsx("div", {
                                                className: "nv-chips",
                                                children: fa.map(([d, I]) =>
                                                    e.jsx(
                                                        "button",
                                                        {
                                                            className: `nv-chip btn-plain${(m.prefs.autoTheaterFreq || "mid") === d ? " on" : ""}`,
                                                            onClick: () =>
                                                                p((L) => ({
                                                                    prefs: { ...L.prefs, autoTheaterFreq: d },
                                                                })),
                                                            children: I,
                                                        },
                                                        d,
                                                    ),
                                                ),
                                            }),
                                    ],
                                }),
                                m.theaters.length
                                    ? e.jsx("div", {
                                          className: "nv-thgrid",
                                          children: m.theaters.map((d, I) => {
                                              var U, Ce, Ie, Ee;
                                              const L = Ge(a, d.charIds);
                                              return e.jsxs(
                                                  "button",
                                                  {
                                                      className: "nv-thcard btn-plain",
                                                      onClick: () => R(d.id),
                                                      children: [
                                                          e.jsxs("div", {
                                                              className: "nv-thcard-top",
                                                              children: [
                                                                  e.jsx("span", {
                                                                      className: "nv-thcard-n",
                                                                      children:
                                                                          d.status === "ready"
                                                                              ? "theater"
                                                                              : d.status === "failed"
                                                                                ? "未完成"
                                                                                : "编排中",
                                                                  }),
                                                                  e.jsx(Vs, { chars: L, size: 22 }),
                                                              ],
                                                          }),
                                                          e.jsx("b", {
                                                              className: "serif",
                                                              children: d.title,
                                                          }),
                                                          e.jsx("p", {
                                                              children:
                                                                  ((U = d.plot) == null
                                                                      ? void 0
                                                                      : U.opening) ||
                                                                  ((Ce = d.plot) == null
                                                                      ? void 0
                                                                      : Ce.brief) ||
                                                                  ((Ie = d.scene) == null
                                                                      ? void 0
                                                                      : Ie.premise) ||
                                                                  ((Ee = d.world) == null
                                                                      ? void 0
                                                                      : Ee.world),
                                                          }),
                                                          e.jsxs("small", {
                                                              children: [
                                                                  Ls(d.updatedAt || d.createdAt),
                                                                  (d.acts || []).length
                                                                      ? ` · 互动 ${(d.acts || []).filter((pe) => pe.who === "user").length} 次`
                                                                      : "",
                                                              ],
                                                          }),
                                                      ],
                                                  },
                                                  d.id,
                                              );
                                          }),
                                      })
                                    : e.jsxs("div", {
                                          className: "nv-empty",
                                          children: [
                                              e.jsx("span", {
                                                  className: "nv-empty-mark",
                                                  children: "no theater yet",
                                              }),
                                              e.jsx("b", { children: "还没有剧场" }),
                                              e.jsxs("span", {
                                                  children: [
                                                      "选好人物，写一段话或选一个剧情预设、情境，AI 会写一篇可以选择走向的互动短篇，",
                                                      e.jsx("br", {}),
                                                      "你在里面演你自己，他们会当场回应。",
                                                  ],
                                              }),
                                              e.jsxs("button", {
                                                  className: "nv-btn",
                                                  onClick: () => $(!0),
                                                  children: [
                                                      e.jsx(Fe, { size: 15, weight: "bold" }),
                                                      "新建剧场",
                                                  ],
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                ],
            }),
            e.jsx("input", {
                ref: S,
                type: "file",
                accept: ".txt,text/plain,.epub,application/epub+zip",
                multiple: !0,
                hidden: !0,
                onChange: Z,
            }),
            e.jsx("input", {
                ref: w,
                type: "file",
                accept: "image/*",
                hidden: !0,
                onChange: (d) => {
                    var L;
                    const I = (L = d.target.files) == null ? void 0 : L[0];
                    ((d.target.value = ""),
                        !(!I || !k) &&
                            Hn(I, { aspect: 1 / 1.42, shape: "rounded", title: "封面" }).then(
                                (U) => U && W((Ce) => ({ ...Ce, cover: { ...(Ce.cover || {}), image: U } })),
                            ));
                },
            }),
            Q &&
                e.jsxs("div", {
                    className: "nv-importing",
                    children: [
                        e.jsx("span", { className: "nv-spin big light" }),
                        e.jsx("b", { children: "正在导入" }),
                        e.jsx("small", { children: "识别编码、切分章节" }),
                    ],
                }),
            e.jsx(fs, {
                open: !!O,
                onClose: () => B(null),
                title: O == null ? void 0 : O.title,
                message: O ? `${O.chapters.length} 章 · ${Ks(O.size || 0)}` : "",
                actions: O
                    ? [
                          { label: "书籍信息与封面", onClick: () => W({ ...O }) },
                          {
                              label: "从头开始读",
                              onClick: () => {
                                  (x("books", O.id, { progress: { ch: 0, ratio: 0 } }),
                                      y({ kind: "book", id: O.id }));
                              },
                          },
                          { label: "删除", destructive: !0, onClick: () => te(O) },
                      ]
                    : [],
            }),
            e.jsx(ps, {
                open: !!k,
                onClose: () => W(null),
                title: "书籍信息",
                footer: e.jsx("button", {
                    className: "nv-btn block",
                    onClick: () => {
                        (x("books", k.id, {
                            title: k.title.trim() || "未命名",
                            author: k.author.trim(),
                            cover: k.cover,
                        }),
                            W(null));
                    },
                    children: "保存",
                }),
                children:
                    k &&
                    e.jsxs("div", {
                        className: "nv-bookedit nv-cs",
                        children: [
                            e.jsx(Ve, { title: k.title, author: k.author, cover: k.cover, w: 84 }),
                            e.jsxs("div", {
                                className: "nv-bookedit-r",
                                children: [
                                    e.jsx("input", {
                                        className: "nv-input",
                                        value: k.title,
                                        onChange: (d) => W({ ...k, title: d.target.value.slice(0, 40) }),
                                        placeholder: "书名",
                                    }),
                                    e.jsx("input", {
                                        className: "nv-input",
                                        value: k.author,
                                        onChange: (d) => W({ ...k, author: d.target.value.slice(0, 20) }),
                                        placeholder: "作者",
                                    }),
                                    e.jsx("div", {
                                        className: "nv-tone-pick",
                                        children: [0, 1, 2, 3, 4, 5].map((d) => {
                                            var I, L;
                                            return e.jsx(
                                                "button",
                                                {
                                                    className: `btn-plain t${d}${!((I = k.cover) != null && I.image) && ((L = k.cover) == null ? void 0 : L.tone) === d ? " on" : ""}`,
                                                    onClick: () => W({ ...k, cover: { tone: d, image: "" } }),
                                                    "aria-label": "封面底色",
                                                },
                                                d,
                                            );
                                        }),
                                    }),
                                    e.jsx("button", {
                                        className: "nv-text-btn btn-plain",
                                        onClick: () => {
                                            var d;
                                            return (d = w.current) == null ? void 0 : d.click();
                                        },
                                        children: "用图片做封面",
                                    }),
                                ],
                            }),
                        ],
                    }),
            }),
            e.jsx(qe, {
                open: !!Y,
                onClose: () => te(null),
                title: `删除《${Y == null ? void 0 : Y.title}》？`,
                message: "正文、批注和评论都会删除。",
                confirm: {
                    label: "删除",
                    destructive: !0,
                    onClick: () => p((d) => ({ books: d.books.filter((I) => I.id !== Y.id) })),
                },
            }),
            e.jsx(ue, {
                children:
                    l &&
                    e.jsxs(
                        ne.div,
                        {
                            className: "nv-layer",
                            ...He,
                            children: [
                                e.jsx(me, {
                                    onBack: () => N(!1),
                                    title: "预设",
                                    sub: "世界观 · 文风 · 剧场情境",
                                }),
                                e.jsx("div", { className: "nv-scroll", children: e.jsx(Qa, {}) }),
                            ],
                        },
                        "presets",
                    ),
            }),
            e.jsx(ue, {
                children:
                    E &&
                    e.jsx(
                        el,
                        {
                            onClose: () => C(!1),
                            onDone: (d) => {
                                (C(!1), c("fan"), t("long"), M(d));
                            },
                        },
                        "fn",
                    ),
            }),
            e.jsx(ue, { children: T && e.jsx(sl, { id: T, onClose: () => M(null), onRead: G }, T) }),
            e.jsx(ue, {
                children:
                    v &&
                    e.jsx(
                        tl,
                        {
                            onClose: () => $(!1),
                            onDone: () => {
                                ($(!1), c("fan"), t("theater"));
                            },
                        },
                        "tn",
                    ),
            }),
            e.jsx(ue, { children: D && e.jsx(ll, { id: D, onClose: () => R(null) }, D) }),
            e.jsx(ue, {
                children:
                    b && e.jsx(Ga, { kind: b.kind, id: b.id, onClose: () => y(null) }, `${b.kind}-${b.id}`),
            }),
        ],
    });
}
function il({ f: s, chars: a, me: m, onClick: p }) {
    var c, A;
    const x = s.chapters.reduce((t, l) => t + Xe(l.text), 0),
        j = Ne(`fic-${s.id}`).busy,
        h = Ne(`fic-plan-${s.id}`).busy || s.planning;
    return e.jsxs("button", {
        className: "nv-ficrow btn-plain",
        onClick: p,
        children: [
            e.jsx(Ve, { title: s.title, author: ge(m), cover: s.cover, w: 74, label: "fanfic" }),
            e.jsxs("div", {
                className: "nv-ficrow-r",
                children: [
                    e.jsx("span", {
                        className: "nv-ficrow-eyebrow",
                        children:
                            ((c = s.plot) == null ? void 0 : c.name) ||
                            ((A = s.world) == null ? void 0 : A.name) ||
                            "fanfic",
                    }),
                    e.jsx("b", { className: "serif", children: s.title || "未命名" }),
                    e.jsx("p", { children: s.blurb }),
                    e.jsx("div", {
                        className: "nv-ficrow-tags",
                        children: (s.tags || []).slice(0, 3).map((t) => e.jsx("i", { children: t }, t)),
                    }),
                    e.jsxs("div", {
                        className: "nv-ficrow-foot",
                        children: [
                            e.jsx(Vs, { chars: a, size: 18 }),
                            e.jsx("span", {
                                children:
                                    s.status === "draft"
                                        ? h
                                            ? "正在构思文案…"
                                            : "草稿 · 文案待确认"
                                        : j
                                          ? "正在写…"
                                          : `${s.chapters.length} 章 · ${Ks(x)} · ${s.status === "done" ? "完结" : "连载"}`,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
export { ml as default };
