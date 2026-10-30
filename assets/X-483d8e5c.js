import { r as P, j as e, R as Ya } from "./vendor-react-3a46a5d3.js";
import {
    aq as ta,
    ar as la,
    u as xe,
    a as ye,
    b5 as ia,
    c7 as Us,
    c8 as Ka,
    c9 as qs,
    b9 as Ga,
    ca as Va,
    l as Le,
    cb as Qa,
    cc as Za,
    cd as en,
    ce as sn,
    bh as an,
    f as $e,
    ba as nn,
    cf as os,
    cg as ce,
    ch as ae,
    ay as he,
    ci as ee,
    cj as Hs,
    ck as Xe,
    cl as ge,
    cm as pe,
    cn as Se,
    co as Pe,
    cp as Ve,
    cq as As,
    cr as Qe,
    cs as bs,
    ct as _e,
    A as ns,
    cu as ca,
    cv as Fe,
    cw as tn,
    cx as ln,
    cy as Je,
    cz as ss,
    cA as oa,
    cB as es,
    cC as cn,
    cD as on,
    cE as ws,
    cF as rn,
    bb as ps,
    cG as We,
    cH as dn,
    cI as hn,
    cJ as ra,
    cK as Ye,
    cL as Ue,
    cM as da,
    cN as xn,
    cO as mn,
    cP as un,
    cQ as pn,
    cR as ha,
    cS as fn,
    cT as xa,
    cU as jn,
    cV as bn,
    cW as gn,
    cX as vn,
    cY as _s,
    cZ as Nn,
    c_ as zs,
    c$ as kn,
    d0 as ma,
    d1 as ts,
    d2 as Re,
    d3 as wn,
    d4 as gs,
    d5 as Cs,
    d6 as Ke,
    d7 as Me,
    d8 as yn,
    aD as Cn,
    d9 as $n,
    aC as Sn,
    da as ua,
    db as Pn,
    dc as Mn,
    dd as An,
    de as zn,
    df as Rn,
    dg as Tn,
    dh as In,
    di as Bn,
    p as pa,
    dj as Dn,
    dk as On,
    dl as Fn,
    dm as Xn,
    dn as En,
    dp as Ln,
    dq as Un,
    dr as qn,
    ds as Hn,
    dt as _n,
    du as Jn,
    dv as Wn,
} from "./app-2c902988.js";
import {
    cy as ls,
    bz as Ie,
    cK as $s,
    cL as Yn,
    cM as Kn,
    cN as Gn,
    cO as Vn,
    bv as Ge,
    cP as Qn,
    bH as Zn,
    cQ as is,
    cR as Js,
    bE as fs,
    bo as ze,
    cS as et,
    cT as st,
    cU as at,
    cV as nt,
    cW as fa,
    cX as tt,
    b$ as Rs,
    cY as lt,
    bI as Ze,
    cZ as it,
    c_ as ja,
    c$ as ba,
    d0 as vs,
    bN as ct,
    bG as Ts,
    d1 as ot,
    cD as ga,
    d2 as Ss,
    d3 as rt,
    d4 as va,
    d5 as dt,
    d6 as as,
    d7 as Na,
    d8 as ht,
    aw as cs,
    c3 as ka,
    bM as wa,
    d9 as xt,
    da as Ws,
    db as mt,
    f as Ys,
    dc as ya,
    dd as ut,
    bA as pt,
} from "./vendor-icons-e63d3118.js";
import {
    u as ft,
    I as Ks,
    D as jt,
    a as bt,
    b as Gs,
    c as gt,
    d as vt,
    e as Nt,
    f as kt,
    S as wt,
    g as Ca,
    h as $a,
    t as yt,
    M as Ct,
    A as $t,
    m as Sa,
} from "./AltKnown-a1a03d3e.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const Vs = ta(la, "X 私信"),
    ys = (s) => new Date(s).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
function Qs(s, a = Date.now()) {
    const t = new Date(s),
        n = new Date(a),
        i = (o) => new Date(o.getFullYear(), o.getMonth(), o.getDate()).getTime(),
        l = Math.round((i(n) - i(t)) / 864e5);
    return l === 0
        ? `Today ${ys(s)}`
        : l === 1
          ? `Yesterday ${ys(s)}`
          : `${t.toLocaleDateString("en-US", { month: "short", day: "numeric", ...(t.getFullYear() !== n.getFullYear() ? { year: "numeric" } : null) })}, ${ys(s)}`;
}
const St = (s) =>
        new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    Zs = 5 * 6e4,
    ea = 60 * 6e4;
function sa({ src: s, name: a, size: t }) {
    const n = String(a || "?")
        .trim()
        .slice(0, 1)
        .toUpperCase();
    return e.jsx("span", {
        className: "xd-av",
        style: { width: t, height: t, fontSize: Math.round(t * 0.4) },
        children: s ? e.jsx(Le, { src: s, alt: "" }) : e.jsx("i", { children: n }),
    });
}
function Pt({
    m: s,
    mine: a,
    first: t,
    last: n,
    quoteLabel: i,
    onTap: l,
    onReply: c,
    onLong: o,
    pressed: r,
    selecting: d = !1,
    selected: w = !1,
}) {
    const N = gt(c),
        m = vt(o);
    return e.jsxs("div", {
        className: `xd-row ${a ? "me" : ""} ${t ? "first" : ""} ${n ? "last" : ""} ${d ? "selecting" : ""} ${s.react ? "reacted" : ""}`,
        onClick: d ? l : void 0,
        children: [
            d &&
                e.jsx("span", {
                    className: `xd-check ${w ? "on" : ""}`,
                    "aria-hidden": !0,
                    children: w ? e.jsx(ze, { size: 13, weight: "bold" }) : null,
                }),
            s.replyTo &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("div", { className: "xd-replied", children: i }),
                        e.jsx("div", {
                            className: `xd-quote ${s.replyTo.role === "user" ? "mine" : ""}`,
                            children: s.replyTo.preview,
                        }),
                    ],
                }),
            s.shared &&
                e.jsxs("div", {
                    className: "xd-share",
                    children: [
                        e.jsx("small", { children: s.shared.where || "回复" }),
                        e.jsx("b", { children: s.shared.name || "你" }),
                        e.jsx("p", { children: s.shared.text }),
                    ],
                }),
            e.jsxs("span", {
                className: "xd-bwrap",
                children: [
                    e.jsx("button", {
                        className: `xd-bubble${r ? " is-pressed" : ""}`,
                        ...(d ? {} : { ...N.handlers, ...m }),
                        style: N.dx ? { transform: `translateX(${N.dx}px)` } : void 0,
                        children: s.preview,
                    }),
                    e.jsx(Nt, { value: s.react, mine: a }),
                ],
            }),
        ],
    });
}
function Mt({ charId: s, who: a, joined: t, onClose: n, onProfile: i, onOpenChat: l }) {
    var T;
    const { state: c, dmAppend: o, dmRemove: r, dmClear: d, dmPatch: w, dmRemoveMany: N } = xe(),
        m = ye(),
        C = ia(),
        [u, k] = P.useState(""),
        [U, x] = P.useState(null),
        [j, $] = P.useState(null),
        [g, v] = P.useState(!1),
        [b, F] = P.useState(null),
        [le, W] = P.useState(null),
        Y = P.useRef(null),
        M = P.useRef(null),
        [A, H] = P.useState(null),
        [_, G] = P.useState(!0),
        ne = P.useRef(null),
        X = P.useRef(null),
        p = ft(),
        R = c.characters.find((h) => h.id === s),
        S = P.useMemo(() => (R ? Us(c, s, "x") : []), [c.dm, s, R]),
        y = Ka(),
        I = ((T = y == null ? void 0 : y.typingIn) == null ? void 0 : T.call(y, "x_dm", s)) ?? null,
        se = (a == null ? void 0 : a.name) || (R == null ? void 0 : R.name) || "TA",
        B = (a == null ? void 0 : a.handle) || "",
        f = (h) => {
            const L = ne.current;
            L && L.scrollTo({ top: L.scrollHeight, behavior: h ? "smooth" : "auto" });
        };
    (P.useEffect(() => {
        _ && f(!1);
    }, [S.length, C.busy]),
        P.useEffect(() => {
            f(!1);
        }, []));
    const D = () => {
        const h = ne.current;
        h && G(h.scrollHeight - h.scrollTop - h.clientHeight < 80);
    };
    if (!R)
        return e.jsxs("div", {
            className: "xd-page",
            children: [
                e.jsx("header", {
                    className: "xd-top",
                    children: e.jsx("button", {
                        className: "xd-ic",
                        onClick: n,
                        "aria-label": "返回",
                        children: e.jsx(ls, { size: 24 }),
                    }),
                }),
                e.jsx("div", { className: "xd-gone", children: "这个人不在了" }),
            ],
        });
    const J = (h) => {
            const L = { id: $e("dm_"), createdAt: Date.now(), ...h };
            return (o("x", s, L), L);
        },
        Q = Vs.usableLane(c.api.chat),
        K = async (h = [], L = {}) => {
            if (!(Q != null && Q.baseUrl)) {
                m("先在 API 设置里配好聊天通道", "error");
                return;
            }
            const te = L.base || Us(c, s, "x", 40),
                ie = await C.run(async (Ne) => {
                    const we = [...te.slice(-40), ...h],
                        xs = await Vs.chat(
                            Q,
                            Qa(Za(c, R, "x"), we, { platform: "x", reroll: L.reroll || null }),
                            { signal: Ne },
                        ),
                        de = en(sn(xs.content), we);
                    if (!de) throw new Error("回复格式不合格，已丢弃；不会为修格式二次调用");
                    return { out: de, tail: we };
                });
            if (ie != null && ie.aborted) {
                m("已停止");
                return;
            }
            if (ie != null && ie.skipped) return;
            if (ie != null && ie.error) {
                m(ie.error.message, "error");
                return;
            }
            const ke = [...ie.value.tail].reverse().find((Ne) => Ne.role === "user");
            (ie.value.out.react && ke && w("x", s, ke.id, { react: ie.value.out.react, reactBy: "char" }),
                (ie.value.out || []).forEach((Ne, we) => {
                    setTimeout(
                        () =>
                            J({
                                role: "assistant",
                                content: Ne.text,
                                ...(Ne.replyTo ? { replyTo: Ne.replyTo } : null),
                            }),
                        we * 60,
                    );
                }));
        },
        oe = () => {
            const h = u.trim();
            if (!h) return null;
            const L = J({ role: "user", content: h, ...(U ? { replyTo: U } : null) });
            return (k(""), x(null), G(!0), { ...L, preview: h });
        },
        fe = () => {
            if (C.busy) {
                C.stop();
                return;
            }
            const h = oe();
            K(h ? [h] : []);
        },
        re = p.on ? [...p.ids].reduce((h, L) => h + qs(c.characters, "x", L), 0) : 0,
        q = (h) => {
            const L = p.count;
            (p.ids.forEach((te) => r("x", s, te, { removeDerived: h })),
                p.stop(),
                m(`已删除 ${L} 条${h ? "，关联记忆一起清掉了" : ""}`));
        },
        Z = (h) => {
            (x({ id: h.id, role: h.role, preview: String(h.preview || "").slice(0, 120) }),
                requestAnimationFrame(() => an(X)));
        },
        ue = (h) => `Replied to ${h.role === "user" ? "You" : se}`,
        z = (h, L) => {
            const te = kt(S, h.id);
            te.start < 0 ||
                (N("x", s, te.ids),
                K([], { base: S.slice(0, te.start), reroll: { reason: L, discarded: te.discarded } }));
        },
        E = (h) => {
            var L;
            try {
                ((L = navigator.clipboard) == null || L.writeText(h), m("已复制"));
            } catch {
                m("复制失败", "error");
            }
        },
        O = (h) => [
            { key: "reply", label: "回复", icon: e.jsx(et, { size: 20 }), onClick: () => Z(h) },
            { key: "copy", label: "复制消息", icon: e.jsx(st, { size: 20 }), onClick: () => E(h.preview) },
            ...(h.role === "assistant"
                ? [{ key: "reroll", label: "重回", icon: e.jsx(at, { size: 20 }), onClick: () => F(h) }]
                : []),
            { key: "multi", label: "多选", icon: e.jsx(Js, { size: 20 }), onClick: () => p.start(h.id) },
            { key: "delete", label: "删除", icon: e.jsx(fs, { size: 20 }), danger: !0 },
        ],
        V = S.map((h, L) => {
            const te = S[L - 1],
                ie = S[L + 1],
                ke = !te || h.createdAt - te.createdAt > ea,
                Ne = te && !ke && te.role === h.role && h.createdAt - te.createdAt < Zs && !h.replyTo,
                we =
                    ie &&
                    ie.role === h.role &&
                    ie.createdAt - h.createdAt < Zs &&
                    !ie.replyTo &&
                    !(ie.createdAt - h.createdAt > ea);
            return { m: h, divider: ke, first: !Ne, last: !we };
        });
    return e.jsxs("div", {
        className: "xd-page",
        ref: Y,
        children: [
            p.on
                ? e.jsxs("header", {
                      className: "xd-top xd-selhead",
                      children: [
                          e.jsx("button", {
                              className: "xd-ic",
                              onClick: p.stop,
                              "aria-label": "取消",
                              children: e.jsx(Ie, { size: 22 }),
                          }),
                          e.jsxs("b", { children: ["已选择 ", p.count, " 条"] }),
                      ],
                  })
                : e.jsxs("header", {
                      className: "xd-top",
                      children: [
                          e.jsx("button", {
                              className: "xd-ic",
                              onClick: n,
                              "aria-label": "返回",
                              children: e.jsx(ls, { size: 24 }),
                          }),
                          e.jsxs("button", {
                              className: "xd-who",
                              onClick: () => (i == null ? void 0 : i(s)),
                              children: [
                                  e.jsx(sa, {
                                      src: (a == null ? void 0 : a.avatar) || R.avatar,
                                      name: se,
                                      size: 36,
                                  }),
                                  e.jsxs("span", {
                                      children: [
                                          e.jsxs("b", {
                                              children: [
                                                  se,
                                                  a != null && a.verified
                                                      ? e.jsx($s, {
                                                            weight: "fill",
                                                            size: 16,
                                                            className: "xa-badge",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          e.jsxs("em", {
                                              children: [e.jsx(Yn, { size: 14 }), "Unencrypted"],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          e.jsx("button", {
                              className: "xd-ic",
                              onClick: () => H("voice"),
                              "aria-label": "语音通话",
                              children: e.jsx(Kn, { size: 24 }),
                          }),
                          e.jsx("button", {
                              className: "xd-ic",
                              onClick: () => H("video"),
                              "aria-label": "视频通话",
                              children: e.jsx(Gn, { size: 26 }),
                          }),
                      ],
                  }),
            e.jsxs("div", {
                className: "xd-scroll",
                children: [
                    e.jsxs("div", {
                        className: "xd-list",
                        ref: ne,
                        onScroll: D,
                        children: [
                            e.jsxs("div", {
                                className: "xd-card",
                                children: [
                                    e.jsx(sa, {
                                        src: (a == null ? void 0 : a.avatar) || R.avatar,
                                        name: se,
                                        size: 64,
                                    }),
                                    e.jsxs("b", {
                                        children: [
                                            se,
                                            a != null && a.verified
                                                ? e.jsx($s, {
                                                      weight: "fill",
                                                      size: 18,
                                                      className: "xa-badge",
                                                  })
                                                : null,
                                        ],
                                    }),
                                    B && e.jsxs("span", { children: ["@", B] }),
                                    t ? e.jsxs("span", { children: ["Joined ", St(t)] }) : null,
                                    e.jsx("button", {
                                        onClick: () => (i == null ? void 0 : i(s)),
                                        children: "View Profile",
                                    }),
                                ],
                            }),
                            V.map(({ m: h, divider: L, first: te, last: ie }) =>
                                e.jsxs(
                                    Ya.Fragment,
                                    {
                                        children: [
                                            L &&
                                                e.jsx("div", {
                                                    className: "xd-time",
                                                    children: Qs(h.createdAt),
                                                }),
                                            e.jsx(Pt, {
                                                m: h,
                                                mine: h.role === "user",
                                                first: te,
                                                last: ie,
                                                quoteLabel: h.replyTo ? ue(h.replyTo) : "",
                                                selecting: p.on,
                                                selected: p.has(h.id),
                                                pressed: (j == null ? void 0 : j.m.id) === h.id,
                                                onTap: () => p.toggle(h.id),
                                                onReply: () => Z(h),
                                                onLong: (ke) => $({ m: h, el: ke }),
                                            }),
                                        ],
                                    },
                                    h.id,
                                ),
                            ),
                            C.busy &&
                                e.jsx("div", {
                                    className: "xd-row first last",
                                    children: e.jsxs("span", {
                                        className: "xd-bubble xd-typing",
                                        "aria-label": "对方正在输入",
                                        children: [e.jsx("i", {}), e.jsx("i", {}), e.jsx("i", {})],
                                    }),
                                }),
                        ],
                    }),
                    !_ &&
                        e.jsx("button", {
                            className: "xd-down",
                            onClick: () => {
                                (f(!0), G(!0));
                            },
                            "aria-label": "回到最新",
                            children: e.jsx(Vn, { size: 24 }),
                        }),
                ],
            }),
            U &&
                e.jsxs("div", {
                    className: "xd-replying",
                    children: [
                        e.jsxs("div", {
                            children: [
                                e.jsxs("span", {
                                    children: ["Replying to ", U.role === "user" ? "yourself" : se],
                                }),
                                e.jsx("p", { children: U.preview }),
                            ],
                        }),
                        e.jsx("button", {
                            onClick: () => x(null),
                            "aria-label": "取消回复",
                            children: e.jsx(Ie, { size: 16 }),
                        }),
                    ],
                }),
            p.on
                ? e.jsx("div", {
                      className: "xd-selbar",
                      children: e.jsx("button", {
                          className: "danger",
                          disabled: !p.count,
                          onClick: () => W("bulk"),
                          children: p.count ? `删除 ${p.count} 条消息` : "删除",
                      }),
                  })
                : e.jsxs("div", {
                      className: "xd-compose",
                      children: [
                          e.jsx("button", {
                              className: "xd-plus",
                              ref: M,
                              onClick: () => v(!0),
                              "aria-label": "更多",
                              children: e.jsx(Ge, { size: 24 }),
                          }),
                          e.jsxs("label", {
                              className: "xd-field",
                              children: [
                                  e.jsx("input", {
                                      ref: X,
                                      value: I ?? u,
                                      onChange: (h) => k(h.target.value),
                                      readOnly: I != null,
                                      className: I != null ? "ghost-typing" : void 0,
                                      onKeyDown: (h) => {
                                          var L;
                                          h.key === "Enter" &&
                                              !((L = h.nativeEvent) != null && L.isComposing) &&
                                              oe();
                                      },
                                      placeholder: "Unencrypted",
                                      enterKeyHint: "send",
                                  }),
                                  (I ?? u).trim()
                                      ? e.jsx("button", {
                                            className: "xd-send",
                                            onClick: oe,
                                            "aria-label": "发送",
                                            children: e.jsx(Qn, { size: 18, weight: "fill" }),
                                        })
                                      : e.jsx("span", {
                                            className: "xd-mic",
                                            "aria-hidden": !0,
                                            children: e.jsx(Zn, { size: 24 }),
                                        }),
                              ],
                          }),
                          e.jsx("button", {
                              className: `xd-reply ${C.busy ? "busy" : ""}`,
                              onClick: fe,
                              "aria-label": C.busy ? "停止" : `让 ${se} 回复`,
                              children: C.busy
                                  ? e.jsx(is, { size: 20, weight: "fill" })
                                  : e.jsx(Ks, { size: 26 }),
                          }),
                      ],
                  }),
            j &&
                e.jsx(jt, {
                    theme: "x",
                    anchor: j.el,
                    page: Y.current,
                    mine: j.m.role === "user",
                    text: j.m.preview,
                    time: Qs(j.m.createdAt),
                    items: O(j.m),
                    react: j.m.reactBy === "char" ? "" : j.m.react,
                    onReact: (h) =>
                        w("x", s, j.m.id, h ? { react: h, reactBy: "me" } : { react: "", reactBy: "" }),
                    rowClass: `xd-row ${j.m.role === "user" ? "me" : ""} first last`,
                    bubbleClass: "xd-bubble",
                    refs: qs(c.characters, "x", j.m.id),
                    onDelete: (h) => {
                        (r("x", s, j.m.id, { removeDerived: h }),
                            m(h ? "已删除，关联记忆一起清掉了" : "已删除"));
                    },
                    onClose: () => $(null),
                }),
            g &&
                e.jsx(bt, {
                    theme: "x",
                    anchor: M.current,
                    page: Y.current,
                    up: !0,
                    align: "left",
                    onClose: () => v(!1),
                    items: [
                        C.busy
                            ? {
                                  key: "stop",
                                  label: "停止生成",
                                  icon: e.jsx(is, { size: 20 }),
                                  onClick: C.stop,
                              }
                            : {
                                  key: "ask",
                                  label: `让 ${se} 回一条`,
                                  icon: e.jsx(Ks, { size: 20 }),
                                  onClick: () => K(),
                              },
                        {
                            key: "multi",
                            label: "选择消息",
                            icon: e.jsx(Js, { size: 20 }),
                            onClick: () => p.start(),
                        },
                        {
                            key: "clear",
                            label: "清空这段私信",
                            icon: e.jsx(fs, { size: 20 }),
                            danger: !0,
                            onClick: () => W("clear"),
                        },
                    ],
                }),
            e.jsx(Gs, {
                open: le === "bulk",
                onClose: () => W(null),
                title: `删除 ${p.count} 条消息？`,
                message: re ? `这些消息已生成 ${re} 条记忆。` : "删除后无法恢复。",
                actions: re
                    ? [
                          { label: "只删除消息", danger: !0, onClick: () => q(!1) },
                          { label: "删除消息和记忆", danger: !0, onClick: () => q(!0) },
                      ]
                    : [{ label: "删除", danger: !0, onClick: () => q(!1) }],
            }),
            e.jsx(Gs, {
                open: le === "clear",
                onClose: () => W(null),
                title: "清空这段私信？",
                message: "已经生成的记忆会保留。",
                actions: [
                    {
                        label: "清空",
                        danger: !0,
                        onClick: () => {
                            (d("x", s), m("已清空"));
                        },
                    },
                ],
            }),
            e.jsx(Ga, {
                open: !!A,
                onClose: () => H(null),
                title: A === "video" ? "视频通话" : "语音通话",
                message: `X 上的通话没有单独接入；和 ${se} 的通话请在你们的聊天里拨打。`,
                confirm: l ? { label: "打开聊天", onClick: () => l(s) } : { label: "好", onClick: () => {} },
            }),
            e.jsx(Va, {
                open: !!b,
                onClose: () => F(null),
                title: "重回",
                multiline: !0,
                allowEmpty: !0,
                maxLength: 200,
                placeholder: "想让他怎么改（可以不填）",
                note: "他这一轮说的会撤回，按你的要求重新回复。",
                confirmLabel: "重新生成",
                onSave: (h) => z(b, h),
            }),
        ],
    });
}
const Be = ta(la, "X"),
    Pa = P.createContext(null),
    be = () => P.useContext(Pa);
function aa() {
    const s = ia(),
        a = ye(),
        t = P.useCallback(
            (n) =>
                s
                    .run(n)
                    .then((i) => (i != null && i.error && a(i.error.message || String(i.error), "error"), i)),
            [s.run, a],
        );
    return { ...s, run: t };
}
function Is(s) {
    const a = ca(s),
        t = ye(),
        n = P.useCallback(
            (i) =>
                a
                    .run(i)
                    .then(
                        (l) => (
                            l != null && l.error
                                ? t(l.error.message || String(l.error), "error")
                                : l &&
                                  "value" in l &&
                                  Nn({ title: "X 已更新", text: "后台生成完成", app: "x" }),
                            l
                        ),
                    ),
            [a.run, t],
        );
    return { ...a, run: n };
}
const De = (s) => {
        var a, t, n;
        return (t = (a = s.api) == null ? void 0 : a.insta) != null && t.baseUrl
            ? s.api.insta
            : (n = s.api) == null
              ? void 0
              : n.chat;
    },
    rs = (s) =>
        (s == null ? void 0 : s.name) !== "AbortError" &&
        (/^4(00|22) · /.test(String((s == null ? void 0 : s.message) || "")) ||
            /PROHIBITED|SAFETY|content.?filter|blocked|moderation|审核|违规|敏感|格式异常|无法识别为 JSON/i.test(
                String((s == null ? void 0 : s.message) || ""),
            )),
    Ma = (s) => {
        const a = Un(s);
        return a === "#" ? "" : a;
    };
async function Aa(s, a, t) {
    let n = null;
    for (const i of [0, 1, 2])
        try {
            return await Be.insta(s, a(i), t);
        } catch (l) {
            if ((l == null ? void 0 : l.name) === "AbortError" || !rs(l)) throw l;
            n = l;
        }
    throw n;
}
async function Ps(s, a, t, n, { ref: i = null } = {}) {
    var o;
    const l = We(s, a, { ref: i });
    let c = null;
    for (const r of [l, Re(l, 1), Re(l, 2)])
        try {
            const d = await Be.insta(t, qn(r), {
                    fallback: (o = s.api) == null ? void 0 : o.chat,
                    max_tokens: 700,
                    temperature: 0.85,
                    signal: n,
                }),
                w = Hn(Ue(d == null ? void 0 : d.content));
            if (w) return { prof: w, slim: r.slim || 0 };
            c = new Error(
                `返回内容格式异常，无法识别为 JSON：${String((d == null ? void 0 : d.content) || "（空）").slice(0, 120)}`,
            );
        } catch (d) {
            if ((d == null ? void 0 : d.name) === "AbortError") throw d;
            if (((c = d), !rs(d))) break;
        }
    return { prof: null, err: c };
}
const ds = (s) => Je(s, "me").filter((a) => a.main || a.acct.isUser !== !1),
    na = (s) => Je(s, "me").filter((a) => !a.main && a.acct.isUser === !1);
function Ns(s) {
    const a = new Set(),
        t = (n) => {
            const i = String(n || "").toLowerCase();
            i && a.add(i);
        };
    return (
        t(s.me.handle),
        Object.keys(s.chars || {}).forEach((n) => {
            var i;
            return t((i = ae(s, n)) == null ? void 0 : i.handle);
        }),
        Object.values(s.alts || {}).forEach((n) =>
            (n || []).forEach((i) => {
                var l;
                return t((l = ae(s, `alt:${i.id}`)) == null ? void 0 : l.handle);
            }),
        ),
        a
    );
}
function Bs(s, a) {
    var t;
    return a === "npc" ? s.feed || [] : ((t = ae(s, a)) == null ? void 0 : t.tweets) || [];
}
function za(s, a) {
    return ((a == null ? void 0 : a.npcs) || []).map((t) => {
        var c;
        const n = { pid: t.id, handle: t.handle },
            i = ((c = s.npcs) == null ? void 0 : c[os(n)]) || {},
            l = (s.feed || [])
                .filter((o) => es(o.npc, n) && (a ? o.pre === a.id : !o.pre))
                .slice(0, 3)
                .map((o) => o.text)
                .filter(Boolean);
        return { ...t, bio: t.bio || i.bio || "", anchor: i.anchor || "", recent: l };
    });
}
function Ra(s, a) {
    if (!a) return null;
    for (const t of s.presets || []) {
        const n = (t.npcs || []).find((i) => i.id === a);
        if (n) return n;
    }
    return null;
}
function ve() {
    const { state: s } = xe(),
        a = ce(s);
    return P.useCallback(
        (t, n = null) => {
            var c, o, r, d, w;
            if (t === "npc") {
                const N = Ra(a, (c = n == null ? void 0 : n.npc) == null ? void 0 : c.pid);
                return {
                    name: ((o = n == null ? void 0 : n.npc) == null ? void 0 : o.name) || "user",
                    handle: ((r = n == null ? void 0 : n.npc) == null ? void 0 : r.handle) || "user",
                    verified:
                        !!((d = n == null ? void 0 : n.npc) != null && d.verified) ||
                        !!(N != null && N.verified),
                    avatar: (N == null ? void 0 : N.avatar) || null,
                };
            }
            if (t === "me")
                return {
                    name: a.me.name || ps(s.me) || "我",
                    handle: a.me.handle || "me",
                    avatar: a.me.avatar || ((w = s.me) == null ? void 0 : w.avatar) || null,
                    verified: !!a.me.verified,
                };
            if (ge(t)) {
                const N = ae(a, t) || {};
                return {
                    name: N.name || N.handle || "user",
                    handle: N.handle || "",
                    avatar: N.avatar || null,
                    verified: !!N.verified,
                    alt: !0,
                };
            }
            const i = (s.characters || []).find((N) => N.id === t),
                l = ae(a, t) || {};
            return {
                name: l.name || he(i) || "TA",
                handle: l.handle || "",
                avatar: l.avatar || (i == null ? void 0 : i.avatar) || null,
                verified: !!l.verified,
            };
        },
        [s, a],
    );
}
function Ta(s, a, t) {
    if (t.author === "me") return s(t.as || "me");
    if (t.author === "char") return s(t.acct || t.charId);
    const n = Ra(a, t.pid);
    return {
        name: t.name,
        handle: t.handle,
        avatar: (n == null ? void 0 : n.avatar) || null,
        verified: t.verified || !!(n != null && n.verified),
    };
}
const ms = (s) => (s.author === "me" ? s.as || "me" : s.author === "char" ? s.acct || s.charId : null);
function At() {
    const { state: s } = xe();
    return Xe(ce(s));
}
function Ia(s, a) {
    var t, n;
    return {
        meDirection: ((t = ae(s, a)) == null ? void 0 : t.direction) || "",
        meRole: ((n = Se(s)) == null ? void 0 : n.meRole) || "",
    };
}
function Ds(s, a) {
    if (!ge(a)) return null;
    const t = ae(s, a) || {};
    return {
        handle: t.handle || "",
        name: t.name || "",
        isUser: t.isUser !== !1,
        knownBy: t.knownBy || [],
        persona: t.persona || "",
    };
}
function me({ src: s, name: a, size: t = 40, onClick: n }) {
    const i = String(a || "?")
            .trim()
            .slice(0, 1)
            .toUpperCase(),
        l = [...String(a || "")].reduce((c, o) => c + o.charCodeAt(0), 0) % 360;
    return e.jsx("span", {
        className: "xa-av",
        style: { width: t, height: t },
        onClick: n,
        children: s
            ? e.jsx(Le, { src: s, alt: "" })
            : e.jsx("i", { style: { background: `hsl(${l} 30% 78%)` }, children: i }),
    });
}
const Ce = ({ on: s }) => (s ? e.jsx($s, { weight: "fill", className: "xa-badge", size: 16 }) : null);
function Os() {
    const { state: s } = xe(),
        a = ce(s);
    return P.useMemo(
        () =>
            (s.characters || []).flatMap((t) =>
                Je(a, t.id)
                    .filter((n) => n.acct.handle)
                    .map((n) => ({
                        id: n.ref,
                        name: n.acct.name || (n.main ? he(t) : n.acct.handle),
                        handle: n.acct.handle,
                        avatar: n.acct.avatar || (n.main ? t.avatar : null) || null,
                    })),
            ),
        [s.characters, a],
    );
}
const Ba = (s, a) => [...new Set(a.map((t) => _e(s, t)).filter(Boolean))];
function qe({ text: s }) {
    const a = be(),
        t = Os();
    return e.jsx(Ct, { text: s, candidates: t, onOpen: a.openProfile, skin: "x" });
}
function il({ onBack: s, onOpenChat: a, ghostDm: t = null }) {
    const { state: n, patch: i } = xe(),
        [l, c] = P.useState("home"),
        [o, r] = P.useState([]),
        [d, w] = P.useState(!1),
        [N, m] = P.useState(null),
        [C, u] = P.useState(null),
        [k, U] = P.useState(null),
        [x, j] = P.useState(null),
        $ = o[o.length - 1] || null,
        g = P.useRef(!1),
        [v, b] = P.useState(!1),
        F = P.useCallback((M) => {
            ((g.current = M), b(M));
        }, []),
        le = P.useRef(o);
    ((le.current = o),
        P.useEffect(() => {
            const M = (H) => {
                var ne, X, p, R;
                if (!H) return;
                const _ =
                        (H.ownerId === "me"
                            ? (ne = ce(n).me) == null
                                ? void 0
                                : ne.tweets
                            : H.ownerId === "npc"
                              ? ce(n).feed
                              : (p = (X = ce(n).chars) == null ? void 0 : X[H.ownerId]) == null
                                ? void 0
                                : p.tweets) || [],
                    G =
                        H.postId && _.some((S) => S.id === H.postId)
                            ? H.postId
                            : (R = _[0]) == null
                              ? void 0
                              : R.id;
                G && (F(!!H.solo), c("home"), r([{ name: "post", owner: H.ownerId, id: G }]));
            };
            M(Hs("x"));
            const A = (H) => {
                var _;
                ((_ = H.detail) == null ? void 0 : _.app) === "x" && M(Hs("x"));
            };
            return (
                window.addEventListener("litot:focus-post", A),
                () => window.removeEventListener("litot:focus-post", A)
            );
        }, []),
        P.useEffect(() => {
            t &&
                (F(!1),
                r((M) => {
                    const A = M[M.length - 1];
                    return (A == null ? void 0 : A.name) === "dm" && A.charId === t
                        ? M
                        : [{ name: "dm", charId: t }];
                }));
        }, [t]));
    const W = P.useMemo(
            () => ({
                push: (M) => r((A) => [...A, M]),
                pop: () => {
                    if (g.current && le.current.length <= 1) {
                        (F(!1), s == null || s());
                        return;
                    }
                    r((M) => M.slice(0, -1));
                },
                openProfile: (M, A = null) => {
                    if ((w(!1), M === "npc")) {
                        ((A != null && A.handle) || (A != null && A.pid)) &&
                            r((H) => [
                                ...H,
                                {
                                    name: "npc",
                                    w: {
                                        pid: A.pid || null,
                                        handle: A.handle || "",
                                        name: A.name || "",
                                        verified: !!A.verified,
                                    },
                                },
                            ]);
                        return;
                    }
                    r((H) => [...H, { name: "profile", owner: M }]);
                },
                openPost: (M, A) => r((H) => [...H, { name: "post", owner: M, id: A }]),
                openDm: (M) => r((A) => [...A, { name: "dm", charId: M }]),
                openBookmarks: () => {
                    (w(!1), r((M) => [...M, { name: "bookmarks" }]));
                },
                openSettings: () => {
                    (w(!1), r((M) => [...M, { name: "settings" }]));
                },
                openPreset: (M) => r((A) => [...A, { name: "preset", id: M }]),
                openPresetIO: () => r((M) => [...M, { name: "presetio" }]),
                compose: () => m({}),
                suspect: (M, A) => u({ ref: M, owner: A }),
                quote: (M, A) => m({ quote: { owner: M, id: A } }),
                editMe: () => {
                    (w(!1), U("me"));
                },
                editProfile: (M) => {
                    (w(!1), U(M));
                },
                drawer: () => w(!0),
                share: (M, A = null) => j({ card: M, defaultCharId: A }),
                tab: (M) => {
                    (F(!1), w(!1), c(M), r([]));
                },
                onBack: s,
            }),
            [s, F],
        ),
        Y =
            l === "home"
                ? e.jsx(Rt, {})
                : l === "explore"
                  ? e.jsx(Ut, {})
                  : l === "notif"
                    ? e.jsx(qt, {})
                    : e.jsx(Ht, {});
    return e.jsx(Pa.Provider, {
        value: W,
        children: e.jsxs("div", {
            className: "xa-shell",
            children: [
                e.jsx(nn, {
                    open: !!x,
                    onClose: () => j(null),
                    card: x == null ? void 0 : x.card,
                    defaultCharId: x == null ? void 0 : x.defaultCharId,
                }),
                e.jsx("div", {
                    className: "xa-body",
                    children: $
                        ? $.name === "profile"
                            ? e.jsx(Dt, { owner: $.owner }, $.owner)
                            : $.name === "npc"
                              ? e.jsx(Ot, { w: $.w }, os($.w))
                              : $.name === "post"
                                ? e.jsx(Tt, { owner: $.owner, id: $.id }, $.id)
                                : $.name === "bookmarks"
                                  ? e.jsx(Ft, {})
                                  : $.name === "dm"
                                    ? e.jsx(_t, { charId: $.charId, onOpenChat: a }, $.charId)
                                    : $.name === "settings"
                                      ? e.jsx(Gt, {})
                                      : $.name === "preset"
                                        ? e.jsx(Qt, { id: $.id }, $.id)
                                        : $.name === "presetio"
                                          ? e.jsx(Vt, {})
                                          : null
                        : Y,
                }),
                v && e.jsx("div", { "aria-hidden": !0, style: { flexShrink: 0, height: "var(--sab, 0px)" } }),
                !v &&
                    e.jsx("nav", {
                        className: "xa-tabbar",
                        children: [
                            ["home", nt],
                            ["explore", fa],
                            ["notif", tt],
                            ["dm", Rs],
                        ].map(([M, A]) => {
                            const H = ($ == null ? void 0 : $.name) === "dm" ? M === "dm" : l === M && !$;
                            return e.jsx(
                                "button",
                                {
                                    className: H ? "on" : "",
                                    onClick: () => W.tab(M),
                                    "aria-label": M,
                                    children: e.jsx(A, { size: 26, weight: H ? "fill" : "regular" }),
                                },
                                M,
                            );
                        }),
                    }),
                (!$ || $.name === "profile") &&
                    l !== "dm" &&
                    e.jsx("button", {
                        className: "xa-fab",
                        onClick: W.compose,
                        "aria-label": "发帖",
                        children: e.jsx(lt, { size: 24, weight: "bold" }),
                    }),
                d && e.jsx(zt, { onClose: () => w(!1) }),
                N && e.jsx(Wt, { quote: N.quote || null, onClose: () => m(null) }),
                (() => {
                    var _;
                    const M = C
                            ? (((_ = ce(n).alts) == null ? void 0 : _[C.owner]) || []).find(
                                  (G) => `alt:${G.id}` === C.ref,
                              )
                            : null,
                        A = M ? ae(ce(n), C.ref) || M : {},
                        H = C ? (n.characters || []).find((G) => G.id === C.owner) : null;
                    return e.jsx(wt, {
                        open: !!M,
                        onClose: () => u(null),
                        name: A.name,
                        handle: A.handle,
                        avatar: A.avatar,
                        ownerName: H ? he(H) : "TA",
                        onView: () => {
                            ee(i, (ne) => {
                                var X;
                                return {
                                    ...ne,
                                    alts: {
                                        ...ne.alts,
                                        [C.owner]: (((X = ne.alts) == null ? void 0 : X[C.owner]) || []).map(
                                            (p) =>
                                                `alt:${p.id}` === C.ref
                                                    ? { ...p, linked: !0, discoveredAt: Date.now() }
                                                    : p,
                                        ),
                                    },
                                };
                            });
                            const G = C.ref;
                            (u(null), W.openProfile(G));
                        },
                        onDelete: () => {
                            (ee(i, (G) => {
                                var ne;
                                return {
                                    ...G,
                                    alts: {
                                        ...G.alts,
                                        [C.owner]: (
                                            ((ne = G.alts) == null ? void 0 : ne[C.owner]) || []
                                        ).filter((X) => `alt:${X.id}` !== C.ref),
                                    },
                                };
                            }),
                                u(null));
                        },
                    });
                })(),
                e.jsx(Kt, { owner: k, onClose: () => U(null) }),
            ],
        }),
    });
}
function zt({ onClose: s }) {
    const { state: a, patch: t } = xe(),
        n = ce(a),
        i = be(),
        l = ve(),
        c = Xe(n),
        o = l(c),
        r = ae(n, c) || {},
        d = ds(n),
        w = d.filter((u) => u.ref !== c),
        [N, m] = P.useState(!1),
        C = (u) => {
            (ee(t, (k) => ({ ...k, activeMe: u })), m(!1));
        };
    return e.jsx("div", {
        className: "xa-drawer-wrap",
        onClick: s,
        children: e.jsxs("aside", {
            className: "xa-drawer",
            onClick: (u) => u.stopPropagation(),
            children: [
                e.jsxs("div", {
                    className: "xa-drawer-head",
                    children: [
                        e.jsxs("div", {
                            className: "xa-drawer-top",
                            children: [
                                e.jsx(me, {
                                    src: o.avatar,
                                    name: o.name,
                                    size: 40,
                                    onClick: () => i.openProfile(c),
                                }),
                                e.jsxs("span", {
                                    className: "xa-drawer-alts",
                                    children: [
                                        w.slice(0, 2).map((u) => {
                                            const k = l(u.ref);
                                            return e.jsx(
                                                me,
                                                {
                                                    src: k.avatar,
                                                    name: k.name,
                                                    size: 32,
                                                    onClick: () => C(u.ref),
                                                },
                                                u.ref,
                                            );
                                        }),
                                        e.jsx("button", {
                                            className: "xa-drawer-more",
                                            onClick: () => m((u) => !u),
                                            "aria-label": "切换账号",
                                            children: e.jsx(Ze, { size: 20, weight: "bold" }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx("b", {
                            className: "xa-drawer-name",
                            onClick: () => i.openProfile(c),
                            children: o.name,
                        }),
                        e.jsxs("span", {
                            className: "xa-drawer-handle",
                            children: [
                                "@",
                                o.handle,
                                ge(c) ? e.jsx("em", { className: "xa-acct-tag", children: "小号" }) : null,
                            ],
                        }),
                        e.jsxs("p", {
                            className: "xa-drawer-counts",
                            children: [
                                e.jsxs("span", {
                                    children: [
                                        e.jsx("b", {
                                            children: pe(c === "me" ? _a(n) : r.followingCount || 0),
                                        }),
                                        "Following",
                                    ],
                                }),
                                e.jsxs("span", {
                                    children: [e.jsx("b", { children: pe(r.followers || 0) }), "Followers"],
                                }),
                            ],
                        }),
                    ],
                }),
                N &&
                    e.jsxs("div", {
                        className: "xa-acct-list",
                        children: [
                            d.map((u) => {
                                const k = l(u.ref);
                                return e.jsxs(
                                    "button",
                                    {
                                        onClick: () => C(u.ref),
                                        children: [
                                            e.jsx(me, { src: k.avatar, name: k.name, size: 36 }),
                                            e.jsxs("span", {
                                                children: [
                                                    e.jsx("b", { children: k.name }),
                                                    e.jsxs("small", {
                                                        children: ["@", k.handle, u.main ? "" : " · 小号"],
                                                    }),
                                                ],
                                            }),
                                            u.ref === c
                                                ? e.jsx(ze, { size: 18, weight: "bold", className: "on" })
                                                : null,
                                        ],
                                    },
                                    u.ref,
                                );
                            }),
                            e.jsxs("button", {
                                onClick: () => i.editProfile("new:me"),
                                children: [
                                    e.jsx("span", {
                                        className: "xa-acct-plus",
                                        children: e.jsx(Ge, { size: 18 }),
                                    }),
                                    e.jsxs("span", {
                                        children: [
                                            e.jsx("b", { children: "创建小号" }),
                                            e.jsx("small", { children: "仍然是你本人，换一个名字" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                e.jsxs("nav", {
                    className: "xa-drawer-nav",
                    children: [
                        e.jsxs("button", {
                            className: "xa-dw-row",
                            onClick: () => i.openProfile(c),
                            children: [
                                e.jsx("i", { className: "xa-dw-ic", children: e.jsx(it, { size: 24 }) }),
                                "Profile",
                            ],
                        }),
                        e.jsxs("button", {
                            className: "xa-dw-row",
                            onClick: i.openBookmarks,
                            children: [
                                e.jsx("i", { className: "xa-dw-ic", children: e.jsx(ja, { size: 24 }) }),
                                "Bookmarks",
                            ],
                        }),
                        e.jsxs("button", {
                            className: "xa-dw-row",
                            onClick: () => i.tab("dm"),
                            children: [
                                e.jsx("i", { className: "xa-dw-ic", children: e.jsx(ba, { size: 24 }) }),
                                "Chat",
                            ],
                        }),
                    ],
                }),
                e.jsx("hr", {}),
                e.jsxs("nav", {
                    className: "xa-drawer-nav",
                    children: [
                        e.jsxs("button", {
                            className: "xa-dw-row",
                            onClick: i.openSettings,
                            children: [
                                e.jsx("i", { className: "xa-dw-ic", children: e.jsx(vs, { size: 24 }) }),
                                "Settings and privacy",
                            ],
                        }),
                        e.jsxs("button", {
                            className: "xa-dw-row",
                            onClick: i.onBack,
                            children: [
                                e.jsx("i", { className: "xa-dw-ic", children: e.jsx(Ie, { size: 24 }) }),
                                "返回桌面",
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function js(s, a) {
    return Math.max(a.t.createdAt || 0, (a.t.rtByMe && !Pe(s, a.owner) && a.t.rtAt) || 0);
}
function Oe(s, a) {
    var i;
    const t = [],
        n = (l, c) => {
            for (const o of c || []) t.push({ owner: l, t: o });
        };
    for (const l of Je(s, "me")) n(l.ref, l.acct.tweets);
    for (const l of a.characters || []) {
        n(l.id, (i = s.chars[l.id]) == null ? void 0 : i.tweets);
        for (const c of s.alts[l.id] || []) n(`alt:${c.id}`, c.tweets);
    }
    return (n("npc", s.feed), t.sort((l, c) => c.t.createdAt - l.t.createdAt));
}
const Ae = zs;
function Fs() {
    const { state: s, patch: a } = xe(),
        t = ye();
    return P.useCallback(
        (n) => {
            const i = ce(s),
                l = (i.presets || []).find((o) => o.id === n) || null,
                c = l != null && l.meRef && (l.meRef === "me" || ss(i, l.meRef) === "me") ? l.meRef : null;
            (ee(a, (o) => ({ ...o, activePreset: l ? l.id : null, ...(c ? { activeMe: c } : null) })),
                t(l ? `已切到「${l.name}」${c ? "，发帖账号也换了" : ""}` : "已切回默认首页"));
        },
        [s, a, t],
    );
}
function Rt() {
    const { state: s, patch: a } = xe(),
        t = ce(s),
        n = be(),
        i = ye(),
        l = Is("x:home"),
        [c, o] = P.useState("foryou"),
        [r, d] = P.useState(!1),
        [w, N] = P.useState(!1),
        m = Fs(),
        C = Xe(t),
        u = ve()(C),
        k = Se(t),
        U = P.useMemo(() => {
            const v = Oe(t, s)
                .filter((b) => Ae(t, b.t))
                .sort((b, F) => js(t, F) - js(t, b));
            if (c === "following") {
                const b = new Set(t.me.following || []);
                return v.filter((F) => Pe(t, F.owner) || b.has(F.owner) || F.t.rtByMe);
            }
            return v;
        }, [t, s, c]),
        x = ((k == null ? void 0 : k.cast) || []).map((v) => v.charId).filter(Boolean),
        j = x.length ? x : null,
        $ = j
            ? (s.characters || []).filter((v) => j.includes(v.id))
            : (s.characters || []).filter((v) => Ve(v)),
        g = (v = {}) =>
            l.run(async (b) => {
                var Z, ue;
                const { strangers: F = k ? (k.strangers ?? 6) : 6 } = v,
                    le = De(s);
                if (!(le != null && le.baseUrl)) {
                    i("先在 API 设置里配好 Insta 或聊天通道", "error");
                    return;
                }
                if (!$.length) {
                    i(j ? "这个预设的名单里没有当前人设下的角色" : "还没有角色", "error");
                    return;
                }
                const W = kn(v, $),
                    Y = W ? Object.fromEntries(W.map((z) => [z.char.id, z.count])) : null,
                    M = W ? W.reduce((z, E) => z + E.count, 0) : v.count || 10,
                    A = W
                        ? W.map((z) => z.char)
                        : $.slice()
                              .sort(() => Math.random() - 0.5)
                              .slice(0, Math.min(6, $.length, Math.max(1, Math.ceil(M / 2)))),
                    H = (z) => {
                        var T, h;
                        const E =
                                (T = k == null ? void 0 : k.cast) == null
                                    ? void 0
                                    : T.find((L) => L.charId === z.id),
                            O = [z.id, ...(t.alts[z.id] || []).map((L) => `alt:${L.id}`)],
                            V =
                                (h = E == null ? void 0 : E.refs) != null && h.length
                                    ? O.filter((L) => E.refs.includes(L))
                                    : O;
                        return V.length ? V : [z.id];
                    };
                let _ = t;
                const G = [],
                    ne = [];
                for (const z of A)
                    for (const E of H(z)) {
                        if ((Z = ae(_, E)) != null && Z.handle) continue;
                        const O = await Ps({ ...s, x: _ }, z, le, b, { ref: E }),
                            V =
                                O.prof ||
                                ma(((ue = ae(_, E)) == null ? void 0 : ue.name) || he(z), {
                                    taken: Ns(_),
                                    initials: Ma,
                                });
                        (O.prof || ne.push(he(z)),
                            (_ = ts(_, E, (T) => ({
                                ...T,
                                ...V,
                                joined: V.joined || T.joined || Date.now(),
                                tweets: T.tweets || [],
                            }))),
                            G.push([E, V]));
                    }
                const X = { ...s, x: _ },
                    p = A.map((z) => {
                        var T;
                        const E = H(z).filter((h) => {
                                var L;
                                return (L = ae(_, h)) == null ? void 0 : L.handle;
                            }),
                            O = E.map((h) => ({
                                ref: h,
                                main: !ge(h),
                                handle: ae(_, h).handle,
                                direction: ae(_, h).direction || "",
                            })),
                            V =
                                (T = k == null ? void 0 : k.cast) == null
                                    ? void 0
                                    : T.find((h) => h.charId === z.id);
                        return {
                            id: z.id,
                            ...We(X, z, { ref: E.length === 1 ? E[0] : z.id, preset: k }),
                            accounts: O,
                            role: V ? [V.slot, V.role].filter(Boolean).join("：") : "",
                        };
                    }).filter((z) => z.accounts.length);
                if (!p.length) throw new Error("这次挑到的人都还没有能用的号");
                const R = Date.now(),
                    S = k ? { name: k.name, world: k.world, feed: k.feed } : null,
                    y = za(t, k),
                    I = async (z, E) => {
                        var V;
                        const O = (E.total || 0) + (E.strangers || 0);
                        for (let T = 0; ; T++) {
                            const h = await Be.insta(
                                    le,
                                    _n(z, { now: new Date(R), quota: Y, scene: S, npcs: y, ...E }),
                                    {
                                        fallback: (V = s.api) == null ? void 0 : V.chat,
                                        max_tokens: Math.min(16e3, 2500 + O * 650),
                                        temperature: T ? 0.8 : 0.95,
                                        signal: b,
                                    },
                                ),
                                L = Ue(h == null ? void 0 : h.content);
                            if (L) return L;
                            if (T >= 1)
                                throw new Error(
                                    `返回内容格式异常，无法识别为 JSON：${String((h == null ? void 0 : h.content) || "（空）").slice(0, 200)}`,
                                );
                        }
                    },
                    se = rs;
                let B,
                    f = !1;
                const D = [],
                    J = [];
                try {
                    B = await I(p, { strangers: F, total: M });
                } catch (z) {
                    if (!se(z)) throw z;
                    f = !0;
                    try {
                        B = await I(p, { lite: !0, total: M });
                    } catch (E) {
                        if (!se(E)) throw E;
                        B = { chars: [] };
                        for (const O of p) {
                            const V = (Y == null ? void 0 : Y[O.id]) || Math.max(1, Math.round(M / p.length));
                            let T = !1;
                            for (const [h, L] of [
                                [0, O],
                                [1, { ...Re(O, 1), accounts: O.accounts, role: O.role }],
                                [2, { ...Re(O, 2), accounts: O.accounts, role: O.role }],
                            ])
                                try {
                                    const te = await I([L], { lite: !0, total: V });
                                    (B.chars.push(
                                        ...(Array.isArray(te == null ? void 0 : te.chars) ? te.chars : []),
                                    ),
                                        h && J.push(O.displayName || O.name),
                                        (T = !0));
                                    break;
                                } catch (te) {
                                    if ((te == null ? void 0 : te.name) === "AbortError") throw te;
                                    if (!se(te)) break;
                                }
                            T || D.push(O.displayName || O.name);
                        }
                        if (!B.chars.length)
                            throw new Error(`${E.message}
（已去掉陌生人和话题、并逐个角色用精简资料重试，仍全部被拒绝）`);
                    }
                }
                const Q = (z) => {
                        var E;
                        return (
                            ((E = ae(_, z)) == null ? void 0 : E.name) ||
                            he((s.characters || []).find((O) => O.id === z))
                        );
                    },
                    K = wn(B, {
                        now: R,
                        charIds: A.map((z) => z.id),
                        charName: Q,
                        preset: k,
                        accountsOf: (z) => {
                            var E;
                            return ((E = p.find((O) => O.id === z)) == null ? void 0 : E.accounts) || [];
                        },
                        accounts: Ye(X, { preset: k, nameOf: he }),
                    }),
                    oe = Object.values(K.chars).reduce((z, E) => z + E.length, 0) + K.strangers.length,
                    fe = (z) => (k ? z.map((E) => ({ ...E, pre: k.id })) : z);
                ee(a, (z) => {
                    let E = z;
                    for (const [V, T] of G)
                        E = ts(E, V, (h) => ({
                            ...h,
                            ...T,
                            joined: T.joined || h.joined || Date.now(),
                            tweets: h.tweets || [],
                        }));
                    for (const [V, T] of Object.entries(K.chars))
                        E = gs(E, V, (h) => ({
                            ...h,
                            tweets: [...fe(T), ...(h.tweets || [])].slice(0, 120),
                        }));
                    const O = { ...(E.npcs || {}) };
                    for (const [V, T] of Object.entries(K.anchors || {})) {
                        const h = os({ pid: V });
                        O[h] = { ...(O[h] || {}), anchor: T, at: R };
                    }
                    return {
                        ...E,
                        feed: [
                            ...fe(K.strangers).map((V) => ({ ...V, accountId: s.activeAccountId })),
                            ...(E.feed || []),
                        ].slice(0, 160),
                        trends: K.trends.length ? K.trends : E.trends,
                        npcs: O,
                    };
                });
                for (const [z, E] of G) Cs(s, a, z, E);
                if (!oe) {
                    i("这次没刷出新内容", "error");
                    return;
                }
                const re = Ke(s, a, [
                        ...Object.entries(K.chars).flatMap(([z, E]) => E.map((O) => ({ owner: z, t: O }))),
                        ...K.strangers.map((z) => ({ owner: "npc", t: z })),
                    ]),
                    q = [
                        ne.length
                            ? `${ne.join("、")} 的资料被接口拦下，先按名字开了号，之后可在主页「重新生成资料」`
                            : "",
                        f ? "陌生人和话题这次被接口拦下，只刷了角色" : "",
                        J.length ? `${J.join("、")} 用精简资料写的` : "",
                        D.length ? `${D.join("、")} 这次没写出来，已跳过` : "",
                    ]
                        .filter(Boolean)
                        .join("；");
                i(`X 刷新了 ${oe} 条${re ? `，${re} 张配图在后台生成` : ""}${q ? `（${q}）` : ""}`);
            });
    return e.jsxs("div", {
        className: "xa-page",
        children: [
            e.jsxs("header", {
                className: "xa-top",
                children: [
                    e.jsxs("div", {
                        className: "xa-top-row",
                        children: [
                            e.jsx(me, { src: u.avatar, name: u.name, size: 32, onClick: n.drawer }),
                            e.jsx(ct, { size: 26, weight: "bold", className: "xa-logo" }),
                            e.jsx("button", {
                                className: `xa-icon ${l.busy ? "busy" : ""}`,
                                onClick: () => (l.busy ? l.stop() : d(!0)),
                                "aria-label": "刷新首页",
                                children: l.busy
                                    ? e.jsx(is, { size: 20, weight: "fill" })
                                    : e.jsx(Ts, { size: 21 }),
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        className: "xa-seg",
                        children: [
                            ["foryou", "For you"],
                            ["following", "Following"],
                        ].map(([v, b]) =>
                            e.jsx(
                                "button",
                                {
                                    className: c === v ? "on" : "",
                                    onClick: () => o(v),
                                    children: e.jsx("span", { children: b }),
                                },
                                v,
                            ),
                        ),
                    }),
                ],
            }),
            t.presets.length > 0 &&
                e.jsxs("button", {
                    className: "xa-preset-pill",
                    onClick: () => N(!0),
                    children: [
                        e.jsx(ot, { size: 15, weight: "bold" }),
                        e.jsx("span", { children: k ? k.name : "默认首页" }),
                        e.jsx(ga, { size: 12, weight: "bold" }),
                    ],
                }),
            l.busy &&
                e.jsx("div", {
                    className: "xa-loading",
                    children: "正在后台刷新首页…（可离开当前页面，点右上角可停止）",
                }),
            e.jsx(As, {
                open: r,
                onClose: () => d(!1),
                app: "x",
                title: k ? `刷新首页 · ${k.name}` : "刷新首页",
                fields: [
                    { key: "count", label: "刷新条数", min: 2, max: 15, def: 10, randomOnly: !0 },
                    {
                        key: "strangers",
                        label: "陌生账号条数",
                        min: 0,
                        max: 12,
                        def: k ? (k.strangers ?? 6) : 6,
                    },
                ],
                people: $.map((v) => {
                    var b, F;
                    return {
                        id: v.id,
                        name: ((b = ae(t, v.id)) == null ? void 0 : b.name) || he(v),
                        avatar: ((F = ae(t, v.id)) == null ? void 0 : F.avatar) || v.avatar,
                    };
                }),
                perMax: 5,
                maxTotal: 15,
                onStart: g,
            }),
            w &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("div", { className: "xa-acs-bg", onClick: () => N(!1) }),
                        e.jsxs("div", {
                            className: "xa-acs",
                            role: "dialog",
                            "aria-label": "论坛预设",
                            children: [
                                e.jsx("div", { className: "xa-acs-grab" }),
                                e.jsx("h4", { children: "首页圈子" }),
                                [
                                    { id: null, name: "默认首页", sub: "好友们随手发的日常" },
                                    ...t.presets.map((v) => ({
                                        id: v.id,
                                        name: v.name,
                                        sub: `${(v.npcs || []).length} 个 NPC 号`,
                                    })),
                                ].map((v) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            className: "xa-acs-row",
                                            onClick: () => {
                                                (m(v.id), N(!1));
                                            },
                                            children: [
                                                e.jsxs("span", {
                                                    children: [
                                                        e.jsx("b", { children: v.name }),
                                                        e.jsx("small", { children: v.sub }),
                                                    ],
                                                }),
                                                ((k == null ? void 0 : k.id) || null) === v.id
                                                    ? e.jsx(ze, {
                                                          size: 18,
                                                          weight: "bold",
                                                          className: "xs-on",
                                                      })
                                                    : null,
                                            ],
                                        },
                                        v.id || "default",
                                    ),
                                ),
                                e.jsxs("button", {
                                    className: "xa-acs-add",
                                    onClick: () => {
                                        (N(!1), n.openSettings());
                                    },
                                    children: [e.jsx(vs, { size: 18 }), "管理论坛预设"],
                                }),
                            ],
                        }),
                    ],
                }),
            U.length
                ? U.map((v) => e.jsx(hs, { owner: v.owner, t: v.t }, `${v.owner}:${v.t.id}`))
                : e.jsxs("div", {
                      className: "xa-empty",
                      children: [
                          e.jsx("b", { children: k ? k.name : "欢迎来到 X" }),
                          e.jsx("span", { children: "点右上角的刷新按钮加载首页内容。" }),
                      ],
                  }),
        ],
    });
}
function Xs() {
    const { patch: s } = xe();
    return P.useMemo(
        () => ({
            toggle(a, t, n) {
                const i = n === "likedByMe" ? "likes" : n === "rtByMe" ? "rts" : "bookmarks";
                ee(s, (l) =>
                    Me(l, a, (c) =>
                        c.id !== t
                            ? c
                            : {
                                  ...c,
                                  [n]: !c[n],
                                  [i]: Math.max(0, (c[i] || 0) + (c[n] ? -1 : 1)),
                                  ...(n === "likedByMe" ? { likedAt: c[n] ? 0 : Date.now() } : null),
                                  ...(n === "rtByMe" ? { rtAt: c[n] ? 0 : Date.now() } : null),
                              },
                    ),
                );
            },
            addReplies(a, t, n, i = {}, { loaded: l = !1 } = {}) {
                ee(s, (c) =>
                    Me(c, a, (o) =>
                        o.id !== t
                            ? o
                            : {
                                  ...o,
                                  ...i,
                                  replies: [...(o.replies || []), ...n],
                                  replyCount: Math.max(
                                      Fe(o) + (l ? 0 : n.length),
                                      (o.replies || []).length + n.length,
                                  ),
                              },
                    ),
                );
            },
            patchReply(a, t, n, i) {
                ee(s, (l) =>
                    Me(l, a, (c) =>
                        c.id !== t
                            ? c
                            : { ...c, replies: (c.replies || []).map((o) => (o.id === n ? i(o) : o)) },
                    ),
                );
            },
            removeReply(a, t, n) {
                ee(s, (i) =>
                    Me(i, a, (l) =>
                        l.id !== t
                            ? l
                            : {
                                  ...l,
                                  replies: (l.replies || []).filter((c) => c.id !== n),
                                  replyCount: Math.max(0, Fe(l) - 1),
                              },
                    ),
                );
            },
            remove(a, t) {
                (ee(s, (n) =>
                    a === "npc"
                        ? { ...n, feed: n.feed.filter((i) => i.id !== t) }
                        : ae(n, a)
                          ? gs(n, a, (i) => ({ ...i, tweets: (i.tweets || []).filter((l) => l.id !== t) }))
                          : n,
                ),
                    a !== "npc" && s((n) => ({ characters: yn(n.characters, [`x:${t}`, `x-reply:${t}:`]) })));
            },
        }),
        [s],
    );
}
function Da({ owner: s, t: a }) {
    const { state: t, patch: n } = xe(),
        i =
            Cn(t, "x", s) && a.photoDesc && !a.photoByMe
                ? () => Ke(t, n, [{ owner: s, t: { ...a, photoRef: null } }])
                : void 0;
    return e.jsxs(e.Fragment, {
        children: [
            (a.photoDesc || a.photoRef) &&
                e.jsx($n, {
                    className: "xa-photo",
                    src: a.photoRef,
                    desc: a.photoDesc || "",
                    genKey: `x:${a.id}`,
                    onRegen: i,
                }),
            a.place &&
                e.jsxs("div", {
                    className: "xa-place",
                    children: [e.jsx(cs, { size: 14, weight: "fill" }), a.place],
                }),
            a.card &&
                e.jsxs("div", {
                    className: "xa-card",
                    children: [
                        e.jsx("b", { children: a.card.title }),
                        a.card.body ? e.jsx("p", { children: a.card.body }) : null,
                    ],
                }),
            (a.quote || a.quoteRef) && e.jsx(Oa, { t: a }),
        ],
    });
}
function Oa({ t: s, compose: a = !1 }) {
    const { state: t } = xe(),
        n = ce(t),
        i = be(),
        l = ve(),
        c = s.quoteRef,
        o = c ? Bs(n, c.owner).find((w) => w.id === c.id) : null,
        r = o ? { ...Fa(l(c.owner, o), o) } : s.quote || {},
        d = !!c && !o;
    return e.jsxs("div", {
        className: `xa-qcard${a ? " compose" : ""}${d ? " gone" : ""}`,
        role: o ? "button" : void 0,
        onClick: (w) => {
            (w.stopPropagation(), o && !a && i.openPost(c.owner, c.id));
        },
        children: [
            e.jsxs("div", {
                className: "xa-qhead",
                children: [
                    e.jsx(me, { src: r.avatar || null, name: r.name || r.handle || "·", size: 20 }),
                    e.jsx("b", { children: r.name }),
                    e.jsx(Ce, { on: r.verified }),
                    e.jsxs("span", {
                        children: [
                            r.handle ? `@${r.handle}` : "",
                            r.createdAt ? ` · ${Qe(r.createdAt)}` : "",
                        ],
                    }),
                ],
            }),
            r.text ? e.jsx("p", { className: "xa-qtext", children: e.jsx(qe, { text: r.text }) }) : null,
            r.photoRef || r.photoDesc
                ? e.jsx("div", {
                      className: "xa-qmedia",
                      children: r.photoRef
                          ? e.jsx(Le, { src: r.photoRef, alt: "" })
                          : e.jsx(Sn, { desc: r.photoDesc }),
                  })
                : null,
            d ? e.jsx("div", { className: "xa-qgone", children: "This post was deleted" }) : null,
        ],
    });
}
function Fa(s, a) {
    return {
        name: s.name,
        handle: s.handle,
        avatar: s.avatar || null,
        verified: !!s.verified,
        createdAt: a.createdAt,
        text: String(a.text || "").slice(0, 560),
        photoRef: a.photoRef || null,
        photoDesc: a.photoDesc || "",
    };
}
function Xa({ owner: s, t: a, big: t = !1 }) {
    const { state: n } = xe(),
        i = Xs(),
        l = be(),
        [c, o] = P.useState(null),
        r = ve()(s, a),
        d = _e(ce(n), s),
        w = t ? 22 : 18;
    return e.jsxs("div", {
        className: `xa-acts ${t ? "big" : ""}`,
        onClick: (N) => N.stopPropagation(),
        children: [
            e.jsxs("button", {
                onClick: () => l.openPost(s, a.id),
                children: [e.jsx(Rs, { size: w }), e.jsx("span", { children: Fe(a) ? pe(Fe(a)) : "" })],
            }),
            e.jsxs("button", {
                className: a.rtByMe ? "rt" : "",
                "aria-haspopup": "menu",
                onClick: (N) => o(N.currentTarget),
                children: [
                    e.jsx(Ss, { size: w, weight: a.rtByMe ? "bold" : "regular" }),
                    e.jsx("span", { children: a.rts ? pe(a.rts) : "" }),
                ],
            }),
            c &&
                e.jsx($t, {
                    theme: "x",
                    anchor: c,
                    width: 200,
                    onClose: () => o(null),
                    items: [
                        {
                            key: "rt",
                            label: a.rtByMe ? "Undo repost" : "Repost",
                            on: !1,
                            icon: e.jsx(Ss, { size: 20 }),
                            onClick: () => i.toggle(s, a.id, "rtByMe"),
                        },
                        {
                            key: "q",
                            label: "Quote",
                            icon: e.jsx(ut, { size: 20 }),
                            onClick: () => l.quote(s, a.id),
                        },
                    ],
                }),
            e.jsxs("button", {
                className: a.likedByMe ? "like" : "",
                onClick: () => i.toggle(s, a.id, "likedByMe"),
                children: [
                    e.jsx(as, { size: w, weight: a.likedByMe ? "fill" : "regular" }),
                    e.jsx("span", { children: a.likes ? pe(a.likes) : "" }),
                ],
            }),
            !t &&
                e.jsxs("button", {
                    onClick: () => l.openPost(s, a.id),
                    "aria-label": "浏览量",
                    children: [
                        e.jsx(Na, { size: w }),
                        e.jsx("span", { children: a.views ? pe(a.views) : "" }),
                    ],
                }),
            e.jsxs("span", {
                className: "xa-acts-r",
                children: [
                    e.jsx("button", {
                        className: a.bookmarkedByMe ? "mark" : "",
                        onClick: () => i.toggle(s, a.id, "bookmarkedByMe"),
                        children: e.jsx(ja, { size: w, weight: a.bookmarkedByMe ? "fill" : "regular" }),
                    }),
                    e.jsx("button", {
                        onClick: () => l.share(La(s, a, r), d),
                        "aria-label": "分享到聊天",
                        children: e.jsx(ya, { size: w }),
                    }),
                ],
            }),
        ],
    });
}
function Ea() {
    const { state: s, patch: a } = xe(),
        t = be(),
        n = ye(),
        i = Xs(),
        l = ve(),
        c = Ha();
    return (o, r, { onRemoved: d } = {}) => {
        var U;
        const w = ce(s),
            N = l(o, r),
            m = Pe(w, o),
            C = !m && o !== "npc",
            u = C && (w.me.following || []).includes(o),
            k = () => {
                var j;
                const x = [r.text, ...(r.thread || [])].filter(Boolean).join(`
`);
                try {
                    ((j = navigator.clipboard) == null || j.writeText(x), n("已复制"));
                } catch {
                    n("复制失败", "error");
                }
            };
        return [
            C && {
                label: u ? `取消关注 @${N.handle || N.name}` : `关注 @${N.handle || N.name}`,
                onClick: () =>
                    ee(a, (x) => ({
                        ...x,
                        me: {
                            ...x.me,
                            following: u
                                ? (x.me.following || []).filter((j) => j !== o)
                                : [...(x.me.following || []), o],
                        },
                    })),
            },
            { label: `查看 ${N.name} 的主页`, onClick: () => t.openProfile(o, r.npc) },
            {
                label: r.bookmarkedByMe ? "取消收藏" : "收藏",
                onClick: () => i.toggle(o, r.id, "bookmarkedByMe"),
            },
            { label: "分享到聊天", onClick: () => t.share(La(o, r, N), _e(w, o)) },
            (r.text || ((U = r.thread) == null ? void 0 : U.length)) && { label: "复制正文", onClick: k },
            m && {
                label: ha(ks(r.id)) ? "停止生成互动" : "生成一轮互动（角色和路人来回复、点赞）",
                onClick: () => c(o, r),
            },
            m && {
                label: "删除",
                destructive: !0,
                onClick: () => {
                    (i.remove(o, r.id), d == null || d());
                },
            },
            !m && {
                label: "删除这条（生成得不对时用）",
                destructive: !0,
                onClick: () => {
                    window.confirm("删除这条推？连同下面的回复一起删掉。") &&
                        (i.remove(o, r.id), d == null || d());
                },
            },
        ].filter(Boolean);
    };
}
function hs({ owner: s, t: a }) {
    var d;
    const t = be(),
        { state: n } = xe(),
        i = ve()(s, a),
        l = ce(n),
        c = Ea(),
        [o, r] = P.useState(!1);
    return e.jsxs("article", {
        className: "xa-tweet",
        onClick: () => t.openPost(s, a.id),
        children: [
            a.rtByMe &&
                e.jsxs("div", {
                    className: "xa-rt-note",
                    children: [e.jsx(Ss, { size: 13 }), "You reposted"],
                }),
            e.jsxs("div", {
                className: "xa-tweet-main",
                children: [
                    e.jsx(me, {
                        src: i.avatar,
                        name: i.name,
                        onClick: (w) => {
                            (w.stopPropagation(), t.openProfile(s, a.npc));
                        },
                    }),
                    e.jsxs("div", {
                        className: "xa-tweet-col",
                        children: [
                            e.jsxs("div", {
                                className: "xa-tweet-head",
                                children: [
                                    e.jsx("b", { children: i.name }),
                                    e.jsx(Ce, { on: i.verified }),
                                    e.jsxs("span", { children: ["@", i.handle, " · ", Qe(a.createdAt)] }),
                                    e.jsx("button", {
                                        className: "xa-more",
                                        onClick: (w) => {
                                            (w.stopPropagation(), r(!0));
                                        },
                                        "aria-label": "更多",
                                        children: e.jsx(Ze, { size: 18 }),
                                    }),
                                ],
                            }),
                            a.text &&
                                e.jsx("p", { className: "xa-text", children: e.jsx(qe, { text: a.text }) }),
                            a.text &&
                                !Pe(l, s) &&
                                e.jsx(bs, {
                                    className: "xa-reply-trans",
                                    charId: _e(l, s),
                                    text: [a.text, ...(a.thread || [])].join(`
`),
                                    known: a.tr,
                                    labels: ["Show translation", "Hide translation"],
                                }),
                            (d = a.thread) != null && d.length
                                ? e.jsxs("p", {
                                      className: "xa-thread-hint",
                                      children: ["Show this thread · ", a.thread.length + 1],
                                  })
                                : null,
                            e.jsx(Da, { owner: s, t: a }),
                            e.jsx(Xa, { owner: s, t: a }),
                        ],
                    }),
                ],
            }),
            e.jsx("span", {
                onClick: (w) => w.stopPropagation(),
                children: e.jsx(ns, { open: o, onClose: () => r(!1), actions: o ? c(s, a) : [] }),
            }),
        ],
    });
}
function Tt({ owner: s, id: a }) {
    const { state: t, patch: n } = xe(),
        i = ce(t),
        l = be(),
        c = ye(),
        o = Xs(),
        r = aa(),
        d = aa(),
        w = Ea(),
        [N, m] = P.useState(""),
        [C, u] = P.useState(null),
        [k, U] = P.useState(!1),
        [x, j] = P.useState("relevant"),
        [$, g] = P.useState(null),
        [v, b] = P.useState(null),
        [F, le] = P.useState(() => new Set()),
        W = P.useRef(null),
        Y = ve(),
        M = At(),
        A = Os(),
        H = Ca({
            value: N,
            setValue: m,
            candidates: A,
            inputRef: W,
            skin: "x",
            emptyHint: "还没有开了 X 号的角色 —— 去 TA 的主页生成一下资料",
        }),
        _ = $a("x"),
        G = ca(ks(a)),
        ne = Ha(),
        X = Bs(i, s).find((q) => q.id === a);
    if (!X)
        return e.jsxs("div", {
            className: "xa-page",
            children: [
                e.jsx(He, { title: "Post" }),
                e.jsx("div", { className: "xa-empty", children: e.jsx("b", { children: "这条推不在了" }) }),
            ],
        });
    const p = Y(s, X),
        R = Pe(i, s),
        S = _e(i, s),
        y = !R && s !== "npc" && (i.me.following || []).includes(s),
        I = () =>
            ee(n, (q) => ({
                ...q,
                me: {
                    ...q.me,
                    following: y ? q.me.following.filter((Z) => Z !== s) : [...(q.me.following || []), s],
                },
            })),
        se = async () => {
            var Z;
            if (C) {
                u(null);
                return;
            }
            if (X.tr) {
                u(X.tr);
                return;
            }
            const q = (Z = t.api) == null ? void 0 : Z.chat;
            try {
                const ue = await Be.chat(
                    q,
                    [
                        { role: "system", content: "把用户给的这段社交平台正文翻译成简体中文，只输出译文。" },
                        {
                            role: "user",
                            content: [X.text, ...(X.thread || [])].join(`
`),
                        },
                    ],
                    { _noFloor: !0, _noHidden: !0, max_tokens: 600, temperature: 0.2 },
                );
                u(String((ue == null ? void 0 : ue.content) || "").trim() || "（没翻出来）");
            } catch {
                c("翻译失败", "error");
            }
        },
        B = (q) => Ta(Y, i, q),
        f = (q) => {
            (g(q ? { id: q.id, name: B(q).handle || B(q).name } : null),
                requestAnimationFrame(() => {
                    var Z;
                    return (Z = W.current) == null ? void 0 : Z.focus();
                }));
        },
        D = () =>
            r.run(async (q) => {
                var xs;
                const Z = N.trim();
                if (!Z) return;
                m("");
                const ue = $;
                g(null);
                const z = Y(M),
                    E = Ds(i, M),
                    O = $e("xr_"),
                    V = Ba(i, Sa(Z, A));
                o.addReplies(s, a, [
                    {
                        id: O,
                        author: "me",
                        ...(M !== "me" ? { as: M } : null),
                        name: z.name,
                        handle: z.handle,
                        text: Z,
                        likes: 0,
                        createdAt: Date.now(),
                        ...(ue ? { replyToId: ue.id, replyToName: ue.name } : null),
                        ...(V.length ? { mentions: V } : null),
                    },
                ]);
                const T = V.filter((de) => de !== S);
                if (
                    (T.length &&
                        _({
                            ids: T,
                            where: "comment",
                            userText: E ? `（用账号 @${E.handle} 发的）${Z}` : Z,
                            target: {
                                ownerId: S || s,
                                ownerName: p.name,
                                owner: R ? "her" : "other",
                                text: X.text,
                            },
                            thread: (X.replies || []).slice(-6).map((de) => `${de.name}：${de.text}`),
                            nameOf: (de) => Y(de).name,
                            onReply: (de, Ee) =>
                                o.addReplies(s, a, [
                                    {
                                        id: $e("xr_"),
                                        author: "char",
                                        charId: de,
                                        name: Y(de).name,
                                        handle: "",
                                        replyToMe: !0,
                                        replyToId: O,
                                        replyToName: z.handle,
                                        text: Ee,
                                        likes: 0,
                                        createdAt: Date.now(),
                                    },
                                ]),
                            onLike: (de) =>
                                o.patchReply(s, a, O, (Ee) => ({
                                    ...Ee,
                                    likes: (Ee.likes || 0) + 1,
                                    likedBy: [...new Set([...(Ee.likedBy || []), de])],
                                })),
                        }),
                    R || s === "npc" || !S)
                )
                    return;
                const h = (t.characters || []).find((de) => de.id === S),
                    L = De(t);
                if (!h || !(L != null && L.baseUrl)) return;
                const te = We(t, h, { ref: s }),
                    ie = ue ? `（回复 @${ue.name}）${Z}` : Z,
                    ke = await Aa(
                        L,
                        (de) =>
                            ua({
                                mode: "reply",
                                tweet: X,
                                userText: ie,
                                ownerCtx: de ? Re(te, de) : te,
                                as: E,
                                ...Ia(i, M),
                            }),
                        {
                            fallback: (xs = t.api) == null ? void 0 : xs.chat,
                            max_tokens: 1200,
                            temperature: 0.9,
                            signal: q,
                        },
                    ),
                    Ne = ra(Ue(ke == null ? void 0 : ke.content), {
                        now: Date.now(),
                        charIds: [S],
                        charName: () => p.name,
                        accounts: Ye(t, { preset: Se(i), nameOf: he }),
                    }),
                    we = [];
                (Ne.charReply &&
                    we.push({
                        id: $e("xr_"),
                        author: "char",
                        charId: S,
                        ...(ge(s) ? { acct: s } : null),
                        name: p.name,
                        handle: p.handle,
                        replyToMe: !0,
                        replyToId: O,
                        replyToName: z.handle,
                        text: Ne.charReply,
                        likes: 0,
                        createdAt: Date.now() + 9e4,
                    }),
                    we.push(...Ne.replies));
                for (let de = 0; de < we.length; de++) {
                    de && !(q != null && q.aborted) && (await qa(700 + Math.random() * 1500, q));
                    const Ee = Date.now(),
                        Ls = q != null && q.aborted ? we.slice(de) : [we[de]];
                    if (
                        (o.addReplies(
                            s,
                            a,
                            Ls.map((Ja, Wa) => ({ ...Ja, createdAt: Ee + Wa })),
                        ),
                        Ls.length > 1)
                    )
                        break;
                }
                Ne.liked &&
                    o.patchReply(s, a, O, (de) => ({ ...de, likes: (de.likes || 0) + 1, likedByOwner: !0 }));
            }),
        J = Fe(X),
        Q = Math.max(0, J - (X.replies || []).length),
        K = () =>
            d.run(async (q) => {
                var te;
                const Z = De(t);
                if (!(Z != null && Z.baseUrl)) {
                    c("先在 API 设置里配好 Insta 或聊天通道", "error");
                    return;
                }
                const ue = S ? (t.characters || []).find((ie) => ie.id === S) : null,
                    z = Math.max(3, Math.min(8, Q || 6)),
                    E = ue ? We(t, ue, { ref: s }) : null,
                    O = (ie, ke = !1) =>
                        Jn({
                            tweet: X,
                            count: z,
                            owner: { name: p.name, handle: p.handle, isChar: !!ue, ctx: ie, slim: ke },
                        }),
                    V = {
                        fallback: (te = t.api) == null ? void 0 : te.chat,
                        max_tokens: 700 + z * 220,
                        temperature: 0.95,
                        signal: q,
                    };
                let T;
                try {
                    T = await Be.insta(Z, O(E), V);
                } catch (ie) {
                    if (!rs(ie)) throw ie;
                    T = await Be.insta(Z, O(E ? Re(E, 2) : null, !0), V);
                }
                const h = Math.max(X.createdAt, ...(X.replies || []).map((ie) => ie.createdAt || 0)),
                    L = Pn(Ue(T == null ? void 0 : T.content), {
                        now: Date.now(),
                        after: h,
                        ownerId: ue ? S : null,
                        ownerRef: s,
                        ownerName: p.name,
                        existing: X.replies || [],
                        accounts: Ye(t, { preset: Se(i), nameOf: he }),
                    });
                if (!L.length) {
                    c("这次没写出新的回复", "error");
                    return;
                }
                o.addReplies(s, a, L, {}, { loaded: Q > 0 });
            }),
        oe = yt(X.replies || []).sort((q, Z) =>
            x === "recent"
                ? (Z.createdAt || 0) - (q.createdAt || 0)
                : (Z.likes || 0) + Z.replies.length * 3 - ((q.likes || 0) + q.replies.length * 3),
        ),
        fe = new Date(X.createdAt),
        re = v;
    return e.jsxs("div", {
        className: "xa-page xa-post-page",
        children: [
            e.jsx(He, { title: "Post" }),
            e.jsxs("div", {
                className: "xa-detail",
                children: [
                    e.jsxs("div", {
                        className: "xa-detail-head",
                        children: [
                            e.jsx(me, {
                                src: p.avatar,
                                name: p.name,
                                size: 44,
                                onClick: () => l.openProfile(s, X.npc),
                            }),
                            e.jsxs("div", {
                                className: "xa-detail-who",
                                children: [
                                    e.jsxs("b", { children: [p.name, e.jsx(Ce, { on: p.verified })] }),
                                    e.jsxs("span", { children: ["@", p.handle] }),
                                ],
                            }),
                            !R &&
                                s !== "npc" &&
                                e.jsx("button", {
                                    className: `xa-follow ${y ? "on" : ""}`,
                                    onClick: I,
                                    children: y ? "Following" : "Follow",
                                }),
                            e.jsx("button", {
                                className: "xa-icon",
                                onClick: () => U(!0),
                                "aria-label": "更多",
                                children: e.jsx(Ze, { size: 20 }),
                            }),
                        ],
                    }),
                    !R &&
                        Bt(X.text) &&
                        e.jsxs("button", {
                            className: "xa-trans",
                            onClick: se,
                            children: [e.jsx(rt, { size: 15 }), C ? "Hide translation" : "Show translation"],
                        }),
                    e.jsx("p", { className: "xa-detail-text", children: e.jsx(qe, { text: X.text }) }),
                    (X.thread || []).map((q, Z) =>
                        e.jsx("p", { className: "xa-detail-text", children: e.jsx(qe, { text: q }) }, Z),
                    ),
                    C && e.jsx("p", { className: "xa-detail-trans", children: C }),
                    e.jsx(Da, { owner: s, t: X }),
                    e.jsxs("div", {
                        className: "xa-detail-meta",
                        children: [
                            `${fe.getHours() % 12 || 12}:${String(fe.getMinutes()).padStart(2, "0")} ${fe.getHours() < 12 ? "AM" : "PM"} · ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][fe.getMonth()]} ${fe.getDate()}, ${fe.getFullYear()} · `,
                            e.jsx("b", { children: pe(X.views) }),
                            " Views",
                        ],
                    }),
                    X.rts || X.quotes || X.bookmarks
                        ? e.jsxs("div", {
                              className: "xa-detail-stats",
                              children: [
                                  X.rts
                                      ? e.jsxs("span", {
                                            children: [e.jsx("b", { children: pe(X.rts) }), " Reposts"],
                                        })
                                      : null,
                                  X.quotes
                                      ? e.jsxs("span", {
                                            children: [e.jsx("b", { children: pe(X.quotes) }), " Quotes"],
                                        })
                                      : null,
                                  X.likes
                                      ? e.jsxs("span", {
                                            children: [e.jsx("b", { children: pe(X.likes) }), " Likes"],
                                        })
                                      : null,
                                  X.bookmarks
                                      ? e.jsxs("span", {
                                            children: [
                                                e.jsx("b", { children: pe(X.bookmarks) }),
                                                " Bookmarks",
                                            ],
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    e.jsx(Xa, { owner: s, t: X, big: !0 }),
                    e.jsxs("button", {
                        className: "xa-relevant",
                        onClick: () => j((q) => (q === "relevant" ? "recent" : "relevant")),
                        "aria-label": "切换回复排序",
                        children: [
                            x === "relevant" ? "Most relevant" : "Most recent",
                            " ",
                            e.jsx(ga, { size: 14 }),
                            e.jsx("span", { children: J ? `${pe(J)} replies` : "" }),
                        ],
                    }),
                    oe.map((q) => {
                        const ue = F.has(q.id) ? q.replies : q.replies.slice(0, 2),
                            z = q.replies.length - ue.length,
                            E = [q, ...ue];
                        return e.jsxs(
                            "div",
                            {
                                className: "xa-chain",
                                children: [
                                    E.map((O, V) =>
                                        e.jsx(
                                            It,
                                            {
                                                r: O,
                                                rw: B(O),
                                                ownerName: p.name,
                                                likedNames: (O.likedBy || [])
                                                    .filter((T) => T !== S)
                                                    .map((T) => Y(T).name),
                                                lineBelow: V < E.length - 1 || z > 0,
                                                showReplyTo:
                                                    !!O.replyToName &&
                                                    !(V > 0 && E[V - 1].id === O.replyToId),
                                                replyCount: V === 0 ? q.replies.length : 0,
                                                onProfile: () => {
                                                    var T;
                                                    return O.author === "char" &&
                                                        ge(O.acct) &&
                                                        tn(
                                                            (
                                                                ((T = i.alts) == null
                                                                    ? void 0
                                                                    : T[O.charId]) || []
                                                            ).find((h) => `alt:${h.id}` === O.acct),
                                                        )
                                                        ? l.suspect(O.acct, O.charId)
                                                        : ms(O)
                                                          ? l.openProfile(ms(O))
                                                          : l.openProfile("npc", O);
                                                },
                                                onMore: () => b(O),
                                                onReply: () => f(O),
                                                onLike: () =>
                                                    o.patchReply(s, a, O.id, (T) => ({
                                                        ...T,
                                                        likedByMe: !T.likedByMe,
                                                        likes: Math.max(
                                                            0,
                                                            (T.likes || 0) + (T.likedByMe ? -1 : 1),
                                                        ),
                                                    })),
                                            },
                                            O.id,
                                        ),
                                    ),
                                    z > 0 &&
                                        e.jsxs("button", {
                                            className: "xa-chain-more",
                                            onClick: () => le((O) => new Set([...O, q.id])),
                                            children: ["Show ", z, " more ", z > 1 ? "replies" : "reply"],
                                        }),
                                ],
                            },
                            q.id,
                        );
                    }),
                    R &&
                        (G.busy
                            ? e.jsx("button", {
                                  className: "xa-more-replies busy",
                                  onClick: G.stop,
                                  children: "正在生成互动…（点这里停止）",
                              })
                            : e.jsx("button", {
                                  className: "xa-more-replies",
                                  onClick: () => ne(s, X),
                                  children: (X.replies || []).length ? "再生成一轮互动" : "生成互动",
                              })),
                    d.busy
                        ? e.jsx("div", { className: "xa-more-replies busy", children: "正在加载更多回复…" })
                        : (Q > 0 || oe.length > 0) &&
                          e.jsx("button", {
                              className: "xa-more-replies",
                              onClick: K,
                              children: "Show more replies",
                          }),
                ],
            }),
            e.jsxs("div", {
                className: "xa-replybar",
                children: [
                    $ &&
                        e.jsxs("div", {
                            className: "xa-replying",
                            children: [
                                e.jsxs("span", {
                                    children: ["Replying to ", e.jsxs("em", { children: ["@", $.name] })],
                                }),
                                e.jsx("button", {
                                    onClick: () => g(null),
                                    "aria-label": "取消回复",
                                    children: e.jsx(Ie, { size: 14 }),
                                }),
                            ],
                        }),
                    H.panel && e.jsx("div", { className: "xa-mention-up", children: H.panel }),
                    e.jsx("button", {
                        className: "xa-reply-at",
                        onClick: H.trigger,
                        "aria-label": "提到别人",
                        children: e.jsx(va, { size: 20 }),
                    }),
                    e.jsx("input", {
                        ref: W,
                        value: N,
                        ...H.bind,
                        placeholder: $
                            ? `Reply to @${$.name}`
                            : M !== "me"
                              ? `以 @${Y(M).handle} 回复`
                              : "Post your reply",
                        onKeyDown: H.keyDown((q) => {
                            q.key === "Enter" && D();
                        }),
                    }),
                    N.trim()
                        ? e.jsx("button", { onClick: D, disabled: r.busy, children: "Reply" })
                        : r.busy
                          ? e.jsx("span", { className: "xa-typing", children: "…" })
                          : null,
                ],
            }),
            e.jsx(ns, { open: k, onClose: () => U(!1), actions: k ? w(s, X, { onRemoved: l.pop }) : [] }),
            e.jsx(ns, {
                open: !!re,
                onClose: () => b(null),
                message: re ? String(re.text).slice(0, 40) : void 0,
                actions: re
                    ? [
                          { label: "回复这条", onClick: () => f(re) },
                          {
                              label: "复制",
                              onClick: () => {
                                  var q;
                                  try {
                                      ((q = navigator.clipboard) == null || q.writeText(re.text),
                                          c("已复制"));
                                  } catch {
                                      c("复制失败", "error");
                                  }
                              },
                          },
                          {
                              label: `查看 ${B(re).name} 的主页`,
                              onClick: () => (ms(re) ? l.openProfile(ms(re)) : l.openProfile("npc", re)),
                          },
                          {
                              label: "删除这条回复",
                              destructive: !0,
                              onClick: () => o.removeReply(s, a, re.id),
                          },
                      ].filter(Boolean)
                    : [],
            }),
        ],
    });
}
function It({
    r: s,
    rw: a,
    ownerName: t,
    likedNames: n,
    lineBelow: i,
    showReplyTo: l,
    replyCount: c,
    onProfile: o,
    onMore: r,
    onReply: d,
    onLike: w,
}) {
    return e.jsxs("div", {
        className: `xa-reply${i ? " has-line" : ""}`,
        children: [
            e.jsxs("div", {
                className: "xa-av-col",
                children: [
                    e.jsx(me, { src: a.avatar, name: a.name, onClick: o }),
                    i && e.jsx("i", { className: "xa-thread-line" }),
                ],
            }),
            e.jsxs("div", {
                className: "xa-tweet-col",
                children: [
                    e.jsxs("div", {
                        className: "xa-tweet-head",
                        children: [
                            e.jsx("b", { children: a.name }),
                            e.jsx(Ce, { on: a.verified }),
                            e.jsxs("span", { children: ["@", a.handle || "user", " · ", Qe(s.createdAt)] }),
                            e.jsx("button", {
                                className: "xa-more",
                                onClick: r,
                                "aria-label": "更多",
                                children: e.jsx(Ze, { size: 18 }),
                            }),
                        ],
                    }),
                    s.parody &&
                        e.jsxs("div", {
                            className: "xa-parody",
                            children: [e.jsx(dt, { size: 14 }), "Parody account"],
                        }),
                    l &&
                        e.jsxs("span", {
                            className: "xa-reply-to",
                            children: ["Replying to ", e.jsxs("em", { children: ["@", s.replyToName] })],
                        }),
                    e.jsx("p", { className: "xa-text", children: e.jsx(qe, { text: s.text }) }),
                    s.author !== "me" &&
                        e.jsx(bs, {
                            className: "xa-reply-trans",
                            charId: s.author === "char" ? s.charId : null,
                            text: s.text,
                            known: s.tr,
                            labels: ["Show translation", "Hide translation"],
                        }),
                    s.likedByOwner &&
                        e.jsxs("div", {
                            className: "xa-liked-by",
                            children: [e.jsx(as, { size: 12, weight: "fill" }), t, " 赞了"],
                        }),
                    n != null && n.length
                        ? e.jsxs("div", {
                              className: "xa-liked-by",
                              children: [e.jsx(as, { size: 12, weight: "fill" }), n.join("、"), " 赞了"],
                          })
                        : null,
                    e.jsxs("div", {
                        className: "xa-acts small",
                        children: [
                            e.jsxs("button", {
                                onClick: d,
                                "aria-label": "回复",
                                children: [
                                    e.jsx(Rs, { size: 16 }),
                                    e.jsx("span", { children: c ? pe(c) : "" }),
                                ],
                            }),
                            e.jsxs("button", {
                                className: s.likedByMe ? "like" : "",
                                onClick: w,
                                "aria-label": "点赞",
                                children: [
                                    e.jsx(as, {
                                        size: 16,
                                        weight: s.likedByMe || s.likedByOwner ? "fill" : "regular",
                                    }),
                                    e.jsx("span", { children: s.likes ? pe(s.likes) : "" }),
                                ],
                            }),
                            e.jsxs("span", {
                                className: "xa-views",
                                children: [e.jsx(Na, { size: 16 }), pe(s.views || (s.likes || 0) * 12 + 18)],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function La(s, a, t) {
    var i;
    const n = (a.replies || []).length;
    return {
        platform: "x",
        kind: "post",
        text:
            [a.text, ...(a.thread || [])].filter(Boolean).join(`
`) || (a.photoDesc ? `[图片] ${a.photoDesc}` : ""),
        title: ((i = a.card) == null ? void 0 : i.title) || "",
        author: { name: t.name, handle: t.handle, avatar: t.avatar },
        meta: [
            a.views ? `${pe(a.views)} Views` : "",
            a.likes ? `${pe(a.likes)} Likes` : "",
            n ? `${n} Replies` : "",
        ]
            .filter(Boolean)
            .join(" · "),
        refId: a.id,
        ownerId: s,
    };
}
function Bt(s) {
    const a = String(s || "").replace(/[\s\d\p{P}\p{S}]/gu, "");
    return a ? (a.match(/\p{Script=Han}/gu) || []).length / a.length < 0.5 : !1;
}
function He({ title: s, right: a = null }) {
    const t = be();
    return e.jsxs("header", {
        className: "xa-subtop",
        children: [
            e.jsx("button", {
                className: "xa-icon",
                onClick: t.pop,
                "aria-label": "返回",
                children: e.jsx(ls, { size: 22 }),
            }),
            e.jsx("b", { children: s }),
            a || e.jsx("span", { className: "xa-icon" }),
        ],
    });
}
function Dt({ owner: s }) {
    var B;
    const { state: a, patch: t } = xe(),
        n = ce(a),
        i = be(),
        l = ye(),
        c = Is(`x:batch:${s}`),
        [o, r] = P.useState(!1),
        [d, w] = P.useState(!1),
        [N, m] = P.useState("posts"),
        u = ve()(s),
        k = Pe(n, s),
        U = _e(n, s),
        x = U ? (a.characters || []).find((f) => f.id === U) : null,
        j = ae(n, s) || {},
        $ = (j.tweets || []).filter((f) => Ae(n, f)),
        g = !k && (n.me.following || []).includes(s),
        v = () =>
            ee(t, (f) => ({
                ...f,
                me: {
                    ...f.me,
                    following: g ? f.me.following.filter((D) => D !== s) : [...(f.me.following || []), s],
                },
            })),
        b = ge(s) ? s : null,
        F = ln(n, s) ? Se(n) : null,
        le = (f) =>
            ee(t, (D) =>
                ts(D, s, (J) => ({
                    ...J,
                    ...f,
                    draft: !1,
                    joined: f.joined || J.joined || Date.now(),
                    tweets: J.tweets || [],
                })),
            ),
        W = () =>
            c.run(async (f) => {
                var K;
                if (!((K = De(a)) != null && K.baseUrl)) {
                    l("先配好 API", "error");
                    return;
                }
                const { prof: D, slim: J, err: Q } = await Ps(a, x, De(a), f, { ref: b });
                if (!D) {
                    if (Q) throw Q;
                    l("资料没生成出来", "error");
                    return;
                }
                (le(D),
                    Cs(a, t, s, D),
                    l(J ? "资料更新了（完整资料被接口拦下，用精简资料生成的）" : "资料更新了"));
            }),
        Y = ({ count: f = 0 } = {}) =>
            c.run(async (D) => {
                var V;
                const J = De(a);
                if (!(J != null && J.baseUrl)) {
                    l("先配好 API", "error");
                    return;
                }
                let Q = a;
                if (!j.handle) {
                    const T = await Ps(a, x, J, D, { ref: b }),
                        h = T.prof || ma(j.name || he(x), { taken: Ns(n), initials: Ma });
                    T.prof || l(`${u.name} 的资料被接口拦下，先按名字开了号`, "error");
                    const L = ts(n, s, (te) => ({
                        ...te,
                        ...h,
                        joined: h.joined || Date.now(),
                        tweets: te.tweets || [],
                    }));
                    (ee(t, () => L), Cs(a, t, s, h), (Q = { ...a, x: L }));
                }
                const K = f || 8,
                    oe = ce(Q),
                    fe = (a.characters || [])
                        .filter((T) => T.id !== U)
                        .slice(0, 6)
                        .map((T) => {
                            var h, L;
                            return {
                                id: T.id,
                                name: ((h = ae(oe, T.id)) == null ? void 0 : h.name) || he(T),
                                handle: ((L = ae(oe, T.id)) == null ? void 0 : L.handle) || "",
                            };
                        }),
                    re = Se(oe),
                    q = Date.now(),
                    Z = We(Q, x, { ref: b }),
                    ue = (T) => {
                        var h;
                        return (
                            ((h = ae(oe, T)) == null ? void 0 : h.name) ||
                            he((a.characters || []).find((L) => L.id === T))
                        );
                    };
                let z = [],
                    E = null;
                for (const T of [Z, Re(Z, 1), Re(Z, 2)])
                    try {
                        const h = await Be.insta(
                            J,
                            Mn(
                                An(T, { count: K, now: new Date(q), otherChars: fe, npcs: za(oe, re) }),
                                k || !x ? "" : zn(a, x),
                            ),
                            {
                                fallback: (V = a.api) == null ? void 0 : V.chat,
                                max_tokens: Math.min(16e3, 2e3 + K * 900),
                                temperature: 0.95,
                                signal: D,
                            },
                        );
                        if (
                            ((z = Rn(Ue(h == null ? void 0 : h.content), {
                                now: q,
                                allowedCharIds: fe.map((L) => L.id),
                                charName: ue,
                                accounts: Ye(Q, { preset: re, nameOf: he }),
                            })),
                            z.length)
                        )
                            break;
                        E = new Error(
                            `返回内容格式异常，无法识别为 JSON：${String((h == null ? void 0 : h.content) || "（空）").slice(0, 120)}`,
                        );
                    } catch (h) {
                        if ((h == null ? void 0 : h.name) === "AbortError") throw h;
                        if (((E = h), !rs(h))) break;
                    }
                if (!z.length) {
                    if (E) throw E;
                    l("这次没写出来", "error");
                    return;
                }
                ((z = z.map(({ pics: T, ...h }) => {
                    const L = !k && x && T ? Tn(a, x, T)[0] : null;
                    return L
                        ? { ...h, photoRef: L.src, photoDesc: L.label || h.photoDesc || "", photoByMe: !0 }
                        : h;
                })),
                    re && (z = z.map((T) => ({ ...T, pre: re.id }))),
                    ee(t, (T) =>
                        gs(T, s, (h) => ({ ...h, tweets: [...z, ...(h.tweets || [])].slice(0, 120) })),
                    ));
                const O = Ke(
                    a,
                    t,
                    z.map((T) => ({ owner: s, t: T })),
                );
                l(`${u.name} 发了 ${z.length} 条${O ? `，${O} 张配图在后台生成` : ""}`);
            }),
        M = Je(n, k ? "me" : U).filter((f) => f.ref !== s),
        A = ge(s)
            ? (((B = n.alts) == null ? void 0 : B[ss(n, s)]) || []).find((f) => `alt:${f.id}` === s)
            : null,
        H = !!(A != null && A.fromReact) && A.linked === !0,
        _ = () => {
            const f = ss(n, s),
                D = s.slice(4);
            (ee(t, (J) => ({
                ...J,
                alts: {
                    ...J.alts,
                    [f]: (J.alts[f] || []).map((Q) => (Q.id === D ? { ...Q, linked: !1 } : Q)),
                },
            })),
                i.pop());
        },
        G = () => {
            !ge(s) ||
                !window.confirm(`删除 @${j.handle || j.name || "这个号"}？它发过的推一起删掉。`) ||
                (ee(t, (f) => {
                    const D = ss(f, s),
                        J = s.slice(4);
                    return {
                        ...f,
                        alts: { ...f.alts, [D]: (f.alts[D] || []).filter((Q) => Q.id !== J) },
                        activeMe: f.activeMe === s ? "me" : f.activeMe,
                        me: { ...f.me, following: (f.me.following || []).filter((Q) => Q !== s) },
                    };
                }),
                i.pop());
        },
        ne =
            N === "replies"
                ? Oe(n, a).filter(
                      (f) =>
                          Ae(n, f.t) &&
                          (f.t.replies || []).some((D) =>
                              k
                                  ? D.author === "me" && (D.as || "me") === s
                                  : D.author === "char" && D.charId === U && (D.acct || U) === s,
                          ),
                  )
                : N === "media"
                  ? $.filter((f) => f.photoDesc || f.photoRef || f.card).map((f) => ({ owner: s, t: f }))
                  : N === "likes" && s === "me"
                    ? Oe(n, a).filter((f) => Ae(n, f.t) && f.t.likedByMe)
                    : s === "me"
                      ? [
                            ...$.map((f) => ({ owner: s, t: f })),
                            ...Oe(n, a).filter((f) => Ae(n, f.t) && f.t.rtByMe && !Pe(n, f.owner)),
                        ].sort((f, D) => js(n, D) - js(n, f))
                      : $.map((f) => ({ owner: s, t: f })),
        X = j.joined ? new Date(j.joined) : null,
        p = k || !!j.handle,
        R = [...String(u.name || "")].reduce((f, D) => f + D.charCodeAt(0), 0) % 360,
        S = P.useRef(null),
        [y, I] = P.useState(!1);
    P.useEffect(() => {
        const f = S.current,
            D = f == null ? void 0 : f.closest(".xa-body");
        if (!f || !D || typeof IntersectionObserver > "u") return;
        const J = new IntersectionObserver(([Q]) => I(!Q.isIntersecting), {
            root: D,
            rootMargin: "-60px 0px 0px 0px",
        });
        return (J.observe(f), () => J.disconnect());
    }, []);
    const se = k
        ? null
        : e.jsxs(e.Fragment, {
              children: [
                  e.jsx("button", {
                      className: `xa-prof-fab ${c.busy ? "busy" : ""}`,
                      onClick: () => (c.busy ? c.stop() : w(!0)),
                      "aria-label": c.busy ? "停止" : "刷新主页",
                      children: c.busy
                          ? e.jsx(is, { size: 16, weight: "fill" })
                          : e.jsx(Ts, { size: 18, weight: "bold" }),
                  }),
                  e.jsx("button", {
                      className: "xa-prof-fab",
                      onClick: () => r(!0),
                      "aria-label": "更多",
                      children: e.jsx(Ze, { size: 20, weight: "bold" }),
                  }),
              ],
          });
    return e.jsxs("div", {
        className: "xa-page xa-prof-page",
        children: [
            e.jsxs("header", {
                className: `xa-prof-bar ${y ? "on" : ""}`,
                children: [
                    e.jsx("button", {
                        className: "xa-prof-fab",
                        onClick: i.pop,
                        "aria-label": "返回",
                        children: e.jsx(ls, { size: 18, weight: "bold" }),
                    }),
                    e.jsxs("div", {
                        className: "xa-prof-bar-t",
                        children: [
                            e.jsxs("b", { children: [u.name, e.jsx(Ce, { on: u.verified })] }),
                            e.jsxs("span", { children: [pe($.length), " posts"] }),
                        ],
                    }),
                    e.jsx("span", { className: "xa-prof-bar-r", children: se }),
                ],
            }),
            e.jsx("div", {
                className: "xa-banner",
                style: j.banner
                    ? void 0
                    : {
                          background: `linear-gradient(135deg, hsl(${R} 32% 78%), hsl(${(R + 40) % 360} 28% 62%))`,
                      },
                children: j.banner ? e.jsx(Le, { src: j.banner, alt: "" }) : null,
            }),
            e.jsxs("div", {
                className: "xa-prof",
                children: [
                    e.jsxs("div", {
                        className: "xa-prof-row",
                        children: [
                            e.jsx(me, { src: u.avatar, name: u.name, size: 84 }),
                            k
                                ? e.jsx("button", {
                                      className: "xa-follow ghost",
                                      onClick: () => i.editProfile(s),
                                      children: "Edit profile",
                                  })
                                : e.jsxs("span", {
                                      className: "xa-prof-btns",
                                      children: [
                                          x &&
                                              !ge(s) &&
                                              Ve(x) &&
                                              e.jsx("button", {
                                                  className: "xa-icon xa-ringbtn",
                                                  onClick: () => i.openDm(U),
                                                  "aria-label": "私信",
                                                  children: e.jsx(ba, { size: 18 }),
                                              }),
                                          p &&
                                              e.jsx("button", {
                                                  className: `xa-follow ${g ? "on" : ""}`,
                                                  onClick: v,
                                                  children: g ? "Following" : "Follow",
                                              }),
                                      ],
                                  }),
                        ],
                    }),
                    e.jsxs("b", {
                        className: "xa-prof-name",
                        ref: S,
                        children: [u.name, e.jsx(Ce, { on: u.verified })],
                    }),
                    e.jsxs("span", {
                        className: "xa-prof-handle",
                        children: [
                            p ? `@${u.handle}` : "还没有 X 账号",
                            ge(s)
                                ? e.jsx("em", {
                                      className: "xa-acct-tag",
                                      children: k ? (j.isUser === !1 ? "以前的 NPC 号" : "我的小号") : "小号",
                                  })
                                : null,
                            j.draft
                                ? e.jsx("em", { className: "xa-acct-tag warn", children: "资料待生成" })
                                : null,
                        ],
                    }),
                    j.bio && e.jsx("p", { className: "xa-prof-bio", children: e.jsx(qe, { text: j.bio }) }),
                    j.bio &&
                        !k &&
                        e.jsx(bs, {
                            className: "xa-reply-trans xa-prof-trans",
                            charId: U || null,
                            text: j.bio,
                            known: j.bioTr,
                            labels: ["Translate bio", "Hide translation"],
                        }),
                    p &&
                        e.jsxs("div", {
                            className: "xa-prof-meta",
                            children: [
                                j.category
                                    ? e.jsxs("span", { children: [e.jsx(ht, { size: 16 }), j.category] })
                                    : null,
                                j.location
                                    ? e.jsxs("span", { children: [e.jsx(cs, { size: 16 }), j.location] })
                                    : null,
                                j.website
                                    ? e.jsxs("span", {
                                          className: "link",
                                          children: [e.jsx(ka, { size: 16 }), j.website],
                                      })
                                    : null,
                                X
                                    ? e.jsxs("span", {
                                          children: [
                                              e.jsx(wa, { size: 16 }),
                                              "Joined ",
                                              X.toLocaleDateString("en-US", {
                                                  month: "long",
                                                  year: "numeric",
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    p &&
                        e.jsxs("div", {
                            className: "xa-prof-counts",
                            children: [
                                (s === "me" || j.followingCount != null) &&
                                    e.jsxs("span", {
                                        children: [
                                            e.jsx("b", {
                                                children: pe(s === "me" ? _a(n) : j.followingCount),
                                            }),
                                            " Following",
                                        ],
                                    }),
                                (s === "me" || j.followers != null) &&
                                    e.jsxs("span", {
                                        children: [
                                            e.jsx("b", { children: pe(j.followers || 0) }),
                                            " Followers",
                                        ],
                                    }),
                            ],
                        }),
                    !p &&
                        e.jsxs("div", {
                            className: "xa-prof-setup",
                            children: [
                                e.jsx("span", {
                                    className: "xa-prof-setup-ic",
                                    children: e.jsx(xt, { size: 22, weight: "fill" }),
                                }),
                                e.jsxs("b", {
                                    children: ["给 ", u.name, " 开一个 X 账号", F ? `（${F.name}）` : ""],
                                }),
                                F
                                    ? e.jsxs("p", {
                                          children: [
                                              "切到论坛预设「",
                                              F.name,
                                              "」后，TA 在这个圈子里是另一套资料和帖子；默认首页那个号的资料不受影响，切回去还在。",
                                          ],
                                      })
                                    : null,
                                e.jsx("p", {
                                    children:
                                        "按 TA 的人设生成显示名、@handle、简介、所在地、链接和注册时间；也可以开号后直接发一批推。",
                                }),
                                e.jsxs("div", {
                                    className: "xa-prof-setup-btns",
                                    children: [
                                        e.jsx("button", {
                                            className: "xa-follow",
                                            disabled: c.busy,
                                            onClick: W,
                                            children: c.busy ? "正在生成…" : "生成主页资料",
                                        }),
                                        e.jsx("button", {
                                            className: "xa-follow ghost",
                                            disabled: c.busy,
                                            onClick: () => w(!0),
                                            children: "开号并发一批推",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            p &&
                e.jsx("div", {
                    className: "xa-seg sticky",
                    children: [
                        ["posts", "Posts"],
                        ["replies", "Replies"],
                        ["media", "Media"],
                        ...(s === "me" ? [["likes", "Likes"]] : []),
                    ].map(([f, D]) =>
                        e.jsx(
                            "button",
                            {
                                className: N === f ? "on" : "",
                                onClick: () => m(f),
                                children: e.jsx("span", { children: D }),
                            },
                            f,
                        ),
                    ),
                }),
            c.busy && e.jsx("div", { className: "xa-loading", children: "正在后台生成…（可离开当前页面）" }),
            e.jsx(As, {
                open: d,
                onClose: () => w(!1),
                app: "x-batch",
                title: "刷新主页",
                fields: [{ key: "count", label: "刷新条数", min: 3, max: 15, def: 8 }],
                onStart: Y,
            }),
            p &&
                (ne.length
                    ? ne.map((f) => e.jsx(hs, { owner: f.owner, t: f.t }, `${f.owner}:${f.t.id}`))
                    : e.jsx("div", {
                          className: "xa-empty small",
                          children: e.jsx("span", {
                              children:
                                  N === "posts" && !k
                                      ? `${u.name} 还没发过推。点右上角的刷新，让 TA 发一批。`
                                      : "这里还什么都没有",
                          }),
                      })),
            e.jsx(ns, {
                open: o,
                onClose: () => r(!1),
                actions: [
                    {
                        label: j.handle ? "刷新主页" : "开号并刷新主页",
                        onClick: () => {
                            (r(!1), w(!0));
                        },
                    },
                    {
                        label: j.handle ? "重新生成资料" : "只开号（生成资料）",
                        onClick: () => {
                            (r(!1), W());
                        },
                    },
                    {
                        label: j.handle ? "编辑资料" : "自己填资料开号",
                        onClick: () => {
                            (r(!1), i.editProfile(s));
                        },
                    },
                    ...M.map((f) => ({
                        label: `查看 ${f.main ? "主号" : "另一个号"} @${f.acct.handle || f.acct.name || "（还没资料）"}`,
                        onClick: () => {
                            (r(!1), i.openProfile(f.ref));
                        },
                    })),
                    U && {
                        label: `给 ${he(x)} 再开一个号`,
                        onClick: () => {
                            (r(!1), i.editProfile(`new:${U}`));
                        },
                    },
                    !k &&
                        ge(s) &&
                        H && {
                            label: "解除绑定",
                            onClick: () => {
                                (r(!1), _());
                            },
                        },
                    ge(s) && {
                        label: "删除这个号",
                        destructive: !0,
                        onClick: () => {
                            (r(!1), G());
                        },
                    },
                ].filter(Boolean),
            }),
        ],
    });
}
function Ot({ w: s }) {
    const { state: a, patch: t } = xe(),
        n = ce(a),
        i = be(),
        l = ye(),
        c = os(s),
        o = Is(`x:npc:${c}`),
        [r, d] = P.useState(!1),
        [w, N] = P.useState(!1),
        [m, C] = P.useState("posts"),
        u = oa(n, s),
        k = Se(n),
        U = (n.feed || []).filter((b) => es(b.npc, u) && Ae(n, b)),
        x =
            m === "replies"
                ? Oe(n, a).filter(
                      (b) => Ae(n, b.t) && (b.t.replies || []).some((F) => F.author === "npc" && es(F, u)),
                  )
                : m === "media"
                  ? U.filter((b) => b.photoDesc || b.photoRef || b.card).map((b) => ({ owner: "npc", t: b }))
                  : U.map((b) => ({ owner: "npc", t: b })),
        j = [...String(u.name || "")].reduce((b, F) => b + F.charCodeAt(0), 0) % 360,
        $ = u.joined ? new Date(u.joined) : null,
        g = ({ count: b = 5, profileOnly: F = !1 } = {}) =>
            o.run(async (le) => {
                var R;
                const W = De(a);
                if (!(W != null && W.baseUrl)) {
                    l("先在 API 设置里配好 Insta 或聊天通道", "error");
                    return;
                }
                const Y = Date.now(),
                    M = Oe(n, a)
                        .filter((S) => Ae(n, S.t) && !(S.owner === "npc" && es(S.t.npc, u)))
                        .slice(0, 10)
                        .map((S) => {
                            var y, I;
                            return `${S.owner === "npc" ? ((y = S.t.npc) == null ? void 0 : y.name) || "user" : Pe(n, S.owner) ? "她" : ((I = ae(n, S.owner)) == null ? void 0 : I.name) || "TA"}：${S.t.text || ""}`;
                        }),
                    A = (a.characters || [])
                        .map((S) => {
                            var y, I;
                            return {
                                id: S.id,
                                name: ((y = ae(n, S.id)) == null ? void 0 : y.name) || he(S),
                                handle: ((I = ae(n, S.id)) == null ? void 0 : I.handle) || "",
                            };
                        })
                        .filter((S) => S.handle)
                        .slice(0, 8),
                    H = {
                        ...u,
                        recent: U.slice(0, 8)
                            .map((S) => S.text)
                            .filter(Boolean),
                    },
                    _ = await Be.insta(
                        W,
                        In({
                            npc: H,
                            around: M,
                            chars: A,
                            count: F ? 0 : b,
                            now: new Date(Y),
                            withProfile: !0,
                            scene: k ? { name: k.name, world: k.world, feed: k.feed } : null,
                        }),
                        {
                            fallback: (R = a.api) == null ? void 0 : R.chat,
                            max_tokens: Math.min(14e3, 1500 + (F ? 0 : b) * 800),
                            temperature: 0.9,
                            signal: le,
                        },
                    ),
                    G = Bn(Ue(_ == null ? void 0 : _.content), {
                        npc: H,
                        now: Y,
                        accounts: Ye(a, { preset: k, nameOf: he }),
                    });
                if (!G.profile && !G.tweets.length)
                    throw new Error(
                        `返回内容格式异常，无法识别为 JSON：${String((_ == null ? void 0 : _.content) || "（空）").slice(0, 160)}`,
                    );
                const ne = {
                        npc: {
                            name: u.name,
                            handle: u.handle,
                            verified: u.verified,
                            ...(u.pid ? { pid: u.pid } : null),
                        },
                        ...(k ? { pre: k.id } : null),
                    },
                    X = F ? [] : G.tweets.map((S) => ({ ...S, ...ne, accountId: a.activeAccountId }));
                ee(t, (S) => {
                    var y;
                    return {
                        ...S,
                        feed: [...X, ...(S.feed || [])].slice(0, 160),
                        npcs: {
                            ...(S.npcs || {}),
                            [c]: {
                                ...(((y = S.npcs) == null ? void 0 : y[c]) || {}),
                                name: u.name,
                                handle: u.handle,
                                verified: u.verified,
                                ...(G.profile || {}),
                                ...(G.anchor ? { anchor: G.anchor } : null),
                                at: Y,
                            },
                        },
                    };
                });
                const p = Ke(
                    a,
                    t,
                    X.map((S) => ({ owner: "npc", t: S })),
                );
                l(
                    F
                        ? "资料更新了"
                        : `${u.name} 发了 ${X.length} 条，首页也看得到${p ? `，${p} 张配图在后台生成` : ""}`,
                );
            }),
        v = () => {
            window.confirm(`删除 @${u.handle} 在${k ? `「${k.name}」里` : "默认首页"}发过的全部推？`) &&
                (ee(t, (b) => ({ ...b, feed: (b.feed || []).filter((F) => !(es(F.npc, u) && Ae(b, F))) })),
                l("已删除"));
        };
    return e.jsxs("div", {
        className: "xa-page xa-prof-page",
        children: [
            e.jsxs("header", {
                className: "xa-prof-bar on",
                children: [
                    e.jsx("button", {
                        className: "xa-prof-fab",
                        onClick: i.pop,
                        "aria-label": "返回",
                        children: e.jsx(ls, { size: 18, weight: "bold" }),
                    }),
                    e.jsxs("div", {
                        className: "xa-prof-bar-t",
                        children: [
                            e.jsxs("b", { children: [u.name, e.jsx(Ce, { on: u.verified })] }),
                            e.jsxs("span", { children: [pe(U.length), " posts"] }),
                        ],
                    }),
                    e.jsxs("span", {
                        className: "xa-prof-bar-r",
                        children: [
                            e.jsx("button", {
                                className: `xa-prof-fab ${o.busy ? "busy" : ""}`,
                                onClick: () => (o.busy ? o.stop() : d(!0)),
                                "aria-label": o.busy ? "停止" : "刷新主页",
                                children: o.busy
                                    ? e.jsx(is, { size: 16, weight: "fill" })
                                    : e.jsx(Ts, { size: 18, weight: "bold" }),
                            }),
                            e.jsx("button", {
                                className: "xa-prof-fab",
                                onClick: () => N(!0),
                                "aria-label": "更多",
                                children: e.jsx(Ze, { size: 20, weight: "bold" }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "xa-banner",
                style: {
                    background: `linear-gradient(135deg, hsl(${j} 32% 78%), hsl(${(j + 40) % 360} 28% 62%))`,
                },
            }),
            e.jsxs("div", {
                className: "xa-prof",
                children: [
                    e.jsx("div", {
                        className: "xa-prof-row",
                        children: e.jsx(me, { src: u.avatar, name: u.name, size: 84 }),
                    }),
                    e.jsxs("b", {
                        className: "xa-prof-name",
                        children: [u.name, e.jsx(Ce, { on: u.verified })],
                    }),
                    e.jsxs("span", {
                        className: "xa-prof-handle",
                        children: [
                            "@",
                            u.handle,
                            e.jsx("em", {
                                className: "xa-acct-tag",
                                children: u.pid ? "圈子里的固定账号" : "路人",
                            }),
                        ],
                    }),
                    u.bio
                        ? e.jsx("p", { className: "xa-prof-bio", children: e.jsx(qe, { text: u.bio }) })
                        : null,
                    u.bio
                        ? e.jsx(bs, {
                              className: "xa-reply-trans xa-prof-trans",
                              charId: null,
                              text: u.bio,
                              known: u.bioTr,
                              labels: ["Translate bio", "Hide translation"],
                          })
                        : null,
                    e.jsxs("div", {
                        className: "xa-prof-meta",
                        children: [
                            u.location
                                ? e.jsxs("span", { children: [e.jsx(cs, { size: 16 }), u.location] })
                                : null,
                            u.website
                                ? e.jsxs("span", {
                                      className: "link",
                                      children: [e.jsx(ka, { size: 16 }), u.website],
                                  })
                                : null,
                            $
                                ? e.jsxs("span", {
                                      children: [
                                          e.jsx(wa, { size: 16 }),
                                          "Joined ",
                                          $.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    (u.followingCount != null || u.followers != null) &&
                        e.jsxs("div", {
                            className: "xa-prof-counts",
                            children: [
                                u.followingCount != null &&
                                    e.jsxs("span", {
                                        children: [
                                            e.jsx("b", { children: pe(u.followingCount) }),
                                            " Following",
                                        ],
                                    }),
                                u.followers != null &&
                                    e.jsxs("span", {
                                        children: [
                                            e.jsx("b", { children: pe(u.followers || 0) }),
                                            " Followers",
                                        ],
                                    }),
                            ],
                        }),
                    !u.bio &&
                        !U.length &&
                        e.jsxs("p", {
                            className: "xe-note",
                            children: [
                                "还没有资料。点右上角的刷新，按",
                                u.pid ? "预设里写的背景" : "它在首页发过的推",
                                "生成资料和一批推。",
                            ],
                        }),
                ],
            }),
            e.jsx("div", {
                className: "xa-seg sticky",
                children: [
                    ["posts", "Posts"],
                    ["replies", "Replies"],
                    ["media", "Media"],
                ].map(([b, F]) =>
                    e.jsx(
                        "button",
                        {
                            className: m === b ? "on" : "",
                            onClick: () => C(b),
                            children: e.jsx("span", { children: F }),
                        },
                        b,
                    ),
                ),
            }),
            o.busy && e.jsx("div", { className: "xa-loading", children: "正在后台生成…（可离开当前页面）" }),
            e.jsx(As, {
                open: r,
                onClose: () => d(!1),
                app: "x-npc",
                title: "刷新主页",
                fields: [{ key: "count", label: "刷新条数", min: 2, max: 10, def: 5 }],
                onStart: g,
            }),
            x.length
                ? x.map((b) => e.jsx(hs, { owner: b.owner, t: b.t }, `${b.owner}:${b.t.id}`))
                : e.jsx("div", {
                      className: "xa-empty small",
                      children: e.jsx("span", {
                          children: m === "posts" ? "这里还没有推。点右上角的刷新。" : "这里还什么都没有",
                      }),
                  }),
            e.jsx(ns, {
                open: w,
                onClose: () => N(!1),
                actions: [
                    {
                        label: "刷新主页（资料 + 一批推）",
                        onClick: () => {
                            (N(!1), d(!0));
                        },
                    },
                    {
                        label: "只重新生成资料",
                        onClick: () => {
                            (N(!1), g({ profileOnly: !0 }));
                        },
                    },
                    U.length > 0 && {
                        label: "删除这个号在这里的全部推",
                        destructive: !0,
                        onClick: () => {
                            (N(!1), v());
                        },
                    },
                ].filter(Boolean),
            }),
        ],
    });
}
function Ft() {
    const { state: s } = xe(),
        a = ce(s),
        t = Oe(a, s).filter((n) => n.t.bookmarkedByMe);
    return e.jsxs("div", {
        className: "xa-page",
        children: [
            e.jsx(He, { title: "Bookmarks" }),
            t.length
                ? t.map((n) => e.jsx(hs, { owner: n.owner, t: n.t }, `${n.owner}:${n.t.id}`))
                : e.jsx("div", {
                      className: "xa-empty small",
                      children: e.jsx("span", { children: "还没有收藏" }),
                  }),
        ],
    });
}
const Xt = (s) =>
        String(s || "")
            .toLowerCase()
            .split(/\s+/)
            .map((a) => a.replace(/^@+/, ""))
            .filter(Boolean),
    Ua = (s, a) => {
        const t = s
            .filter(Boolean)
            .join(
                `
`,
            )
            .toLowerCase();
        return a.every((n) => t.includes(n));
    };
function Et(s, a, t, n) {
    var d, w, N;
    const i = [],
        l = new Set(),
        c = (m, C) => {
            if (l.has(m.key) || !Ua(C, t)) return;
            l.add(m.key);
            const u = t[0],
                k = String(m.handle || "").toLowerCase(),
                U = String(m.name || "").toLowerCase();
            ((m.rank = k === u || U === u ? 0 : k.startsWith(u) || U.startsWith(u) ? 1 : 2), i.push(m));
        },
        o = (m, C = {}) => {
            const u = n(m),
                k = ae(s, m) || {};
            return {
                key: m,
                ref: m,
                name: u.name,
                handle: u.handle,
                avatar: u.avatar,
                verified: u.verified,
                bio: k.bio || "",
                ...C,
            };
        };
    for (const m of ds(s)) {
        const C = o(m.ref, { tag: m.main ? "" : "小号" });
        c(C, [C.name, C.handle, C.bio]);
    }
    for (const m of a.characters || []) {
        const C = o(m.id);
        (((d = ae(s, m.id)) != null && d.handle) || (C.handle = ""), c(C, [C.name, C.handle, C.bio, he(m)]));
        for (const u of ((w = s.alts) == null ? void 0 : w[m.id]) || []) {
            if (!u.handle) continue;
            const k = o(`alt:${u.id}`);
            c(k, [k.name, k.handle, k.bio]);
        }
    }
    const r = [
        ...(((N = Se(s)) == null ? void 0 : N.npcs) || []).map((m) => ({
            pid: m.id,
            handle: m.handle,
            name: m.name,
            verified: !!m.verified,
        })),
        ...(s.feed || []).filter((m) => m.npc && zs(s, m)).map((m) => m.npc),
    ];
    for (const m of r) {
        const C = oa(s, m),
            u = `npc:${os(C.pid ? { pid: C.pid } : m)}`;
        c(
            {
                key: u,
                npc: { pid: C.pid, handle: C.handle, name: C.name, verified: C.verified },
                name: C.name,
                handle: C.handle,
                avatar: C.avatar,
                verified: C.verified,
                bio: C.bio || "",
            },
            [C.name, C.handle, C.bio],
        );
    }
    return i.sort((m, C) => m.rank - C.rank).slice(0, 40);
}
function Lt(s, a, t) {
    return Oe(s, a)
        .filter((n) => {
            var i, l, c;
            return (
                zs(s, n.t) &&
                Ua(
                    [
                        n.t.text,
                        ...(n.t.thread || []),
                        n.t.photoDesc,
                        n.t.place,
                        (i = n.t.card) == null ? void 0 : i.title,
                        (l = n.t.card) == null ? void 0 : l.body,
                        (c = n.t.quote) == null ? void 0 : c.text,
                    ],
                    t,
                )
            );
        })
        .map((n) => ({ ...n, score: (n.t.likes || 0) + (n.t.rts || 0) * 2 + Fe(n.t) * 3 }))
        .sort((n, i) => i.score - n.score || i.t.createdAt - n.t.createdAt)
        .slice(0, 60);
}
function Ut() {
    const { state: s, patch: a } = xe(),
        t = ce(s),
        n = be(),
        [i, l] = P.useState(""),
        [c, o] = P.useState("For you"),
        r = ve(),
        d = r(Xe(t)),
        w = ["For you", "Trending", "News", "Sports", "Entertainment"],
        N = (t.trends || []).filter((g) => c === "For you" || c === "Trending" || cn(g.category) === c),
        [m, C] = P.useState("top"),
        u = Xt(i),
        k = P.useMemo(() => (u.length ? Et(t, s, u, r) : []), [t, s, i]),
        U = P.useMemo(() => (u.length ? Lt(t, s, u) : []), [t, s, i]),
        x = m === "latest" ? U.slice().sort((g, v) => v.t.createdAt - g.t.createdAt) : U,
        j = (g) => (g.npc ? n.openProfile("npc", g.npc) : n.openProfile(g.ref)),
        $ = (g) =>
            e.jsxs(
                "div",
                {
                    className: "xa-person xa-sr-person",
                    onClick: () => j(g),
                    children: [
                        e.jsx(me, { src: g.avatar, name: g.name }),
                        e.jsxs("div", {
                            children: [
                                e.jsxs("b", {
                                    children: [
                                        g.name,
                                        e.jsx(Ce, { on: g.verified }),
                                        g.tag
                                            ? e.jsx("em", { className: "xa-acct-tag", children: g.tag })
                                            : null,
                                    ],
                                }),
                                e.jsxs("span", { children: ["@", g.handle || "user"] }),
                                g.bio ? e.jsx("p", { className: "xa-sr-bio", children: g.bio }) : null,
                            ],
                        }),
                    ],
                },
                g.key,
            );
    return e.jsxs("div", {
        className: "xa-page",
        children: [
            e.jsxs("header", {
                className: "xa-top",
                children: [
                    e.jsxs("div", {
                        className: "xa-top-row",
                        children: [
                            e.jsx(me, { src: d.avatar, name: d.name, size: 32, onClick: n.drawer }),
                            e.jsxs("label", {
                                className: "xa-search",
                                children: [
                                    e.jsx(fa, { size: 18 }),
                                    e.jsx("input", {
                                        type: "search",
                                        enterKeyHint: "search",
                                        value: i,
                                        onChange: (g) => l(g.target.value),
                                        onKeyDown: (g) => {
                                            g.key === "Enter" && g.currentTarget.blur();
                                        },
                                        placeholder: "Search",
                                    }),
                                    i
                                        ? e.jsx("button", {
                                              className: "xa-search-clear",
                                              onClick: (g) => {
                                                  (g.preventDefault(), l(""));
                                              },
                                              "aria-label": "清除",
                                              children: e.jsx(Ie, { size: 12, weight: "bold" }),
                                          })
                                        : null,
                                ],
                            }),
                            e.jsx("button", {
                                className: "xa-icon",
                                onClick: n.openSettings,
                                "aria-label": "设置",
                                children: e.jsx(vs, { size: 22 }),
                            }),
                        ],
                    }),
                    u.length
                        ? e.jsx("div", {
                              className: "xa-seg",
                              children: [
                                  ["top", "Top"],
                                  ["latest", "Latest"],
                                  ["people", "People"],
                              ].map(([g, v]) =>
                                  e.jsx(
                                      "button",
                                      {
                                          className: m === g ? "on" : "",
                                          onClick: () => C(g),
                                          children: e.jsx("span", { children: v }),
                                      },
                                      g,
                                  ),
                              ),
                          })
                        : e.jsx("div", {
                              className: "xa-seg scroll",
                              children: w.map((g) =>
                                  e.jsx(
                                      "button",
                                      {
                                          className: c === g ? "on" : "",
                                          onClick: () => o(g),
                                          children: e.jsx("span", { children: g }),
                                      },
                                      g,
                                  ),
                              ),
                          }),
                ],
            }),
            u.length
                ? e.jsxs(e.Fragment, {
                      children: [
                          m === "people"
                              ? k.map($)
                              : e.jsxs(e.Fragment, {
                                    children: [
                                        m === "top" &&
                                            k.length > 0 &&
                                            e.jsxs("section", {
                                                className: "xa-sr-block",
                                                children: [
                                                    e.jsx("h3", { className: "xa-h3", children: "People" }),
                                                    k.slice(0, 3).map($),
                                                    k.length > 3 &&
                                                        e.jsx("button", {
                                                            className: "xa-sr-all",
                                                            onClick: () => C("people"),
                                                            children: "View all",
                                                        }),
                                                ],
                                            }),
                                        x.map((g) =>
                                            e.jsx(hs, { owner: g.owner, t: g.t }, `${g.owner}:${g.t.id}`),
                                        ),
                                    ],
                                }),
                          (m === "people" ? !k.length : !k.length && !U.length) ||
                          (m === "latest" && !U.length)
                              ? e.jsxs("div", {
                                    className: "xa-empty",
                                    children: [
                                        e.jsxs("b", { children: ["未找到与「", i.trim(), "」相关的结果"] }),
                                        e.jsx("span", { children: "请尝试其他关键词，或检查拼写。" }),
                                    ],
                                })
                              : null,
                      ],
                  })
                : e.jsxs(e.Fragment, {
                      children: [
                          e.jsx("h3", { className: "xa-h3", children: "Today's News" }),
                          N.length
                              ? N.map((g, v) =>
                                    e.jsxs(
                                        "div",
                                        {
                                            className: "xa-trend",
                                            onClick: () => l(g.title.split(/[\s，,]/)[0]),
                                            children: [
                                                e.jsx("b", { children: g.title }),
                                                e.jsxs("span", {
                                                    children: [
                                                        Qe(g.at || Date.now()),
                                                        " · ",
                                                        g.category,
                                                        " · ",
                                                        pe(g.posts),
                                                        " posts",
                                                    ],
                                                }),
                                            ],
                                        },
                                        v,
                                    ),
                                )
                              : e.jsx("div", {
                                    className: "xa-empty small",
                                    children: e.jsx("span", {
                                        children: "刷新一次首页，这里会出现此刻的话题。",
                                    }),
                                }),
                          e.jsx("h3", { className: "xa-h3", children: "Who to follow" }),
                          (s.characters || [])
                              .filter((g) => !(t.me.following || []).includes(g.id))
                              .slice(0, 8)
                              .map((g) => {
                                  var F;
                                  const v = r(g.id),
                                      b = !!((F = ae(t, g.id)) != null && F.handle);
                                  return e.jsxs(
                                      "div",
                                      {
                                          className: "xa-person",
                                          onClick: () => n.openProfile(g.id),
                                          children: [
                                              e.jsx(me, { src: v.avatar, name: v.name }),
                                              e.jsxs("div", {
                                                  children: [
                                                      e.jsxs("b", {
                                                          children: [v.name, e.jsx(Ce, { on: v.verified })],
                                                      }),
                                                      e.jsx("span", {
                                                          children: b ? `@${v.handle}` : "还没有 X 账号",
                                                      }),
                                                  ],
                                              }),
                                              b
                                                  ? e.jsx("button", {
                                                        className: "xa-follow",
                                                        onClick: (le) => {
                                                            (le.stopPropagation(),
                                                                ee(a, (W) => ({
                                                                    ...W,
                                                                    me: {
                                                                        ...W.me,
                                                                        following: [
                                                                            ...(W.me.following || []),
                                                                            g.id,
                                                                        ],
                                                                    },
                                                                })));
                                                        },
                                                        children: "Follow",
                                                    })
                                                  : e.jsx("button", {
                                                        className: "xa-follow ghost",
                                                        onClick: (le) => {
                                                            (le.stopPropagation(), n.openProfile(g.id));
                                                        },
                                                        children: "开号",
                                                    }),
                                          ],
                                      },
                                      g.id,
                                  );
                              }),
                      ],
                  }),
        ],
    });
}
function qt() {
    const { state: s } = xe(),
        a = ce(s),
        t = be(),
        n = ve(),
        i = n(Xe(a)),
        [l, c] = P.useState("all"),
        o = [];
    for (const { ref: d, acct: w } of Je(a, "me"))
        for (const N of w.tweets || []) {
            for (const m of N.replies || [])
                m.author !== "me" && o.push({ kind: "reply", at: m.createdAt, t: N, r: m, owner: d });
            for (const m of N.likedBy || [])
                o.push({ kind: "like", at: N.createdAt + 5 * 6e4, t: N, charId: m, owner: d });
        }
    for (const d of s.characters || [])
        for (const { ref: w, acct: N } of [
            { ref: d.id, acct: a.chars[d.id] || {} },
            ...(a.alts[d.id] || []).map((m) => ({ ref: `alt:${m.id}`, acct: m })),
        ])
            for (const m of N.tweets || [])
                for (const C of m.replies || [])
                    C.replyToMe && o.push({ kind: "reply", at: C.createdAt, t: m, r: C, owner: w });
    o.sort((d, w) => w.at - d.at);
    const r = l === "mentions" ? o.filter((d) => d.kind === "reply") : o;
    return e.jsxs("div", {
        className: "xa-page",
        children: [
            e.jsxs("header", {
                className: "xa-top",
                children: [
                    e.jsxs("div", {
                        className: "xa-top-row",
                        children: [
                            e.jsx(me, { src: i.avatar, name: i.name, size: 32, onClick: t.drawer }),
                            e.jsx("b", { className: "xa-title", children: "Notifications" }),
                            e.jsx("button", {
                                className: "xa-icon",
                                onClick: t.openSettings,
                                "aria-label": "设置",
                                children: e.jsx(vs, { size: 22 }),
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        className: "xa-seg",
                        children: [
                            ["all", "All"],
                            ["mentions", "Mentions"],
                        ].map(([d, w]) =>
                            e.jsx(
                                "button",
                                {
                                    className: l === d ? "on" : "",
                                    onClick: () => c(d),
                                    children: e.jsx("span", { children: w }),
                                },
                                d,
                            ),
                        ),
                    }),
                ],
            }),
            r.length
                ? r.map((d, w) => {
                      if (d.kind === "like") {
                          const u = n(d.charId);
                          return e.jsxs(
                              "div",
                              {
                                  className: "xa-notif",
                                  onClick: () => t.openPost(d.owner || "me", d.t.id),
                                  children: [
                                      e.jsx(as, { size: 26, weight: "fill", className: "like" }),
                                      e.jsxs("div", {
                                          children: [
                                              e.jsx(me, { src: u.avatar, name: u.name, size: 32 }),
                                              e.jsxs("p", {
                                                  children: [
                                                      e.jsx("b", { children: u.name }),
                                                      " liked your post",
                                                  ],
                                              }),
                                              e.jsx("span", { children: d.t.text }),
                                          ],
                                      }),
                                  ],
                              },
                              w,
                          );
                      }
                      const N = d.r,
                          m = Ta(n, a, N),
                          C = Pe(a, d.owner) ? n(d.owner).handle : N.replyToName || i.handle;
                      return e.jsxs(
                          "div",
                          {
                              className: "xa-notif reply",
                              onClick: () => t.openPost(d.owner || "me", d.t.id),
                              children: [
                                  e.jsx(me, { src: m.avatar, name: m.name }),
                                  e.jsxs("div", {
                                      children: [
                                          e.jsxs("div", {
                                              className: "xa-tweet-head",
                                              children: [
                                                  e.jsx("b", { children: m.name }),
                                                  e.jsx(Ce, { on: m.verified }),
                                                  e.jsxs("span", {
                                                      children: [
                                                          "@",
                                                          m.handle || "user",
                                                          " · ",
                                                          Qe(N.createdAt),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          e.jsxs("span", {
                                              className: "xa-reply-to",
                                              children: [
                                                  "Replying to ",
                                                  e.jsxs("em", { children: ["@", C] }),
                                              ],
                                          }),
                                          e.jsx("p", { className: "xa-text", children: N.text }),
                                      ],
                                  }),
                              ],
                          },
                          w,
                      );
                  })
                : e.jsxs("div", {
                      className: "xa-empty",
                      children: [
                          e.jsx("b", { children: "还没有通知" }),
                          e.jsx("span", { children: "发一条推，或者去回复谁一句。" }),
                      ],
                  }),
        ],
    });
}
function Ht() {
    const { state: s } = xe(),
        a = be(),
        t = ve(),
        n = t(Xe(ce(s))),
        i = (s.characters || [])
            .filter((l) => Ve(l))
            .map((l) => {
                var o, r;
                const c = ((r = (o = s.dm) == null ? void 0 : o.x) == null ? void 0 : r[l.id]) || [];
                return { c: l, last: c[c.length - 1] || null };
            })
            .sort((l, c) => {
                var o, r;
                return (
                    (((o = c.last) == null ? void 0 : o.createdAt) || 0) -
                    (((r = l.last) == null ? void 0 : r.createdAt) || 0)
                );
            });
    return e.jsxs("div", {
        className: "xa-page",
        children: [
            e.jsx("header", {
                className: "xa-top",
                children: e.jsxs("div", {
                    className: "xa-top-row",
                    children: [
                        e.jsx(me, { src: n.avatar, name: n.name, size: 32, onClick: a.drawer }),
                        e.jsx("b", { className: "xa-title", children: "Chat" }),
                        e.jsx("span", { className: "xa-icon" }),
                    ],
                }),
            }),
            i.length
                ? i.map(({ c: l, last: c }) => {
                      const o = t(l.id);
                      return e.jsxs(
                          "div",
                          {
                              className: "xa-person dm",
                              onClick: () => a.openDm(l.id),
                              children: [
                                  e.jsx(me, { src: o.avatar, name: o.name, size: 52 }),
                                  e.jsxs("div", {
                                      children: [
                                          e.jsxs("p", {
                                              className: "xa-dm-head",
                                              children: [
                                                  e.jsx("b", { children: o.name }),
                                                  e.jsx(Ce, { on: o.verified }),
                                                  o.handle
                                                      ? e.jsxs("span", { children: ["@", o.handle] })
                                                      : null,
                                                  c
                                                      ? e.jsxs("em", { children: ["· ", Qe(c.createdAt)] })
                                                      : null,
                                              ],
                                          }),
                                          e.jsx("span", {
                                              className: c ? "" : "none",
                                              children: c
                                                  ? `${c.role === "user" ? "You: " : ""}${String(c.content || "").slice(0, 60)}`
                                                  : "Start a conversation",
                                          }),
                                      ],
                                  }),
                              ],
                          },
                          l.id,
                      );
                  })
                : e.jsxs("div", {
                      className: "xa-empty",
                      children: [
                          e.jsx("b", { children: "Welcome to your inbox!" }),
                          e.jsx("span", { children: "加了好友的角色会出现在这里。" }),
                      ],
                  }),
        ],
    });
}
function _t({ charId: s, onOpenChat: a }) {
    var c;
    const { state: t } = xe(),
        n = be(),
        i = ve()(s),
        l = ((c = ae(ce(t), s)) == null ? void 0 : c.joined) || null;
    return e.jsx(Mt, {
        charId: s,
        who: i,
        joined: l,
        onClose: n.pop,
        onProfile: n.openProfile,
        onOpenChat: a,
    });
}
const ks = (s) => `x:react:${s}`;
async function cl(s, a, t, { signal: n, charIds: i = null, passersby: l = !1 } = {}) {
    var r;
    const c = ce(s.state),
        o = (((r = ae(c, a)) == null ? void 0 : r.tweets) || []).find((d) => d.id === t);
    return o
        ? Es(s.state, s.patch, {
              owner: a,
              t: o,
              exclude: o.mentions || [],
              signal: n,
              charIds: i,
              passersby: l,
          })
        : null;
}
async function Es(
    s,
    a,
    { owner: t, t: n, exclude: i = [], signal: l, charIds: c = null, passersby: o = !0 },
) {
    var G, ne, X;
    const r = De(s);
    if (!(r != null && r.baseUrl)) throw new Error("先在 API 设置里配好 Insta 或聊天通道");
    const d = ce(s),
        w = Se(d),
        N = ((w == null ? void 0 : w.cast) || []).map((p) => p.charId).filter(Boolean),
        m = N.length ? N : null;
    let C = (s.characters || [])
        .filter((p) => (m ? m.includes(p.id) : Ve(p)) && !i.includes(p.id) && (!c || c.includes(p.id)))
        .slice(0, 6);
    if (!c) {
        const { nowGroup: p, later: R } = on(C, `x:${n.id}`);
        (ws(
            a,
            R.map((S) => ({
                id: $e("sp_"),
                kind: "notice",
                platform: "x",
                ownerId: t,
                postId: n.id,
                charIds: S.chars.map((y) => y.id),
                due: S.at,
            })),
        ),
            (C = p));
    }
    if (!C.length && !o) return { replies: 0, likes: 0 };
    const u = rn(C.length),
        k = t === "me" ? d.me.name || ps(s.me) || "我" : ((G = ae(d, t)) == null ? void 0 : G.name) || "她",
        U = (n.replies || []).map((p) => ({
            id: p.id,
            author: p.author === "me" ? "me" : p.author,
            charId: p.charId,
            name: p.name || p.handle || "路人",
            text: p.text,
            replyToId: p.replyToId,
        })),
        x = U.map((p) => p.id).filter(Boolean),
        j = C.map((p) => {
            var S, y;
            const R = We(s, p);
            return {
                id: p.id,
                ...R,
                persona: String(R.persona || "").slice(0, u.persona),
                relation: String(R.relation || "").slice(0, u.relation),
                ...(Array.isArray(R.recentChat)
                    ? { recentChat: R.recentChat.slice(-Math.max(2, Math.round(u.memory / 3))) }
                    : null),
                now: dn(p),
                done: hn(p.id, U, (S = n.noticeLog) == null ? void 0 : S[p.id], { meName: k }),
                altList: (((y = d.alts) == null ? void 0 : y[p.id]) || [])
                    .map((I) => {
                        var se;
                        return `alt:${I.id} @${((se = ae(d, `alt:${I.id}`)) == null ? void 0 : se.handle) || I.handle || ""}`;
                    })
                    .join("；"),
            };
        }),
        $ = (p) => {
            var R;
            return (
                ((R = ae(d, p)) == null ? void 0 : R.name) || he((s.characters || []).find((S) => S.id === p))
            );
        },
        g = (n.replies || []).map(
            (p) =>
                `${p.author === "char" ? $(p.charId) : p.author === "me" ? "她" : p.name || p.handle || "路人"}：${p.text}`,
        ),
        v = Ds(d, t),
        b = t === "me" ? d.me.name || ps(s.me) || "我" : ((ne = ae(d, t)) == null ? void 0 : ne.name) || "",
        F = (p) => {
            var R;
            return ua({
                mode: "mine",
                tweet: n,
                chars: p,
                meName: b,
                meFollowers: ((R = ae(d, t)) == null ? void 0 : R.followers) || 0,
                as: v,
                seen: g,
                ...Ia(d, t),
                notice: !0,
                passersby: o,
                commentSection: Wn(U, { meName: b }),
            });
        },
        le = {
            fallback: (X = s.api) == null ? void 0 : X.chat,
            max_tokens: 2400,
            temperature: 0.9,
            signal: l,
        },
        W = await Aa(r, (p) => F(p ? j.map((R) => ({ ...Re(R, p), id: R.id })) : j), le),
        Y = ra(Ue(W == null ? void 0 : W.content), {
            now: Date.now(),
            charIds: j.map((p) => p.id),
            charName: $,
            accounts: Ye(s, { preset: w, nameOf: he }),
        }),
        M = Ns(d),
        A = {},
        H = Y.charReplies.map(({ _as: p, _newAlt: R, ...S }) => {
            var Q;
            const y = [...(((Q = d.alts) == null ? void 0 : Q[S.charId]) || []), ...(A[S.charId] || [])];
            let I = p != null && p.startsWith("alt:") ? y.find((K) => `alt:${K.id}` === p) : null;
            if (p === "new" && R && y.length < 2) {
                let K = R.handle,
                    oe = 2;
                for (; M.has(K.toLowerCase()); ) K = `${R.handle.slice(0, 13)}${oe++}`;
                (M.add(K.toLowerCase()),
                    (I = da({
                        handle: K,
                        name: R.name,
                        followers: 10 + Math.floor(Math.random() * 180),
                        following: 30 + Math.floor(Math.random() * 300),
                        fromReact: !0,
                        linked: !1,
                    })),
                    (A[S.charId] = [...(A[S.charId] || []), I]));
            }
            const se = xn({ replyTo: S._replyTo }, x),
                { _replyTo: B, ...f } = S,
                D = se ? { ...f, replyToId: se } : f;
            if (!I) return D;
            const J = ae(d, `alt:${I.id}`) || I;
            return { ...D, acct: `alt:${I.id}`, name: J.name || J.handle, handle: J.handle || "" };
        });
    {
        const p = mn(Y.charActs, { allowedCharIds: j.map((S) => S.id), commentIds: x }),
            R = `X · 她发的推：${String(n.text || "").slice(0, 60) || "（图片）"}`;
        (ws(
            a,
            Object.values(p).flatMap((S) =>
                un(
                    S,
                    { platform: "x", ownerId: t, postId: n.id, label: R, comments: U },
                    { uid: () => $e("sp_") },
                ),
            ),
        ),
            ws(
                a,
                j
                    .filter((S) => !p[S.id])
                    .map((S) => ({
                        id: $e("sp_"),
                        kind: "seen",
                        platform: "x",
                        ownerId: t,
                        postId: n.id,
                        charId: S.id,
                        due: Date.now(),
                    })),
            ),
            c &&
                H.forEach((S) =>
                    pn({
                        app: "x",
                        charId: S.charId,
                        text: S.replyToId ? "回复了回复区" : "回复了你的推",
                        postId: n.id,
                    }),
                ));
    }
    Object.keys(A).length &&
        ee(a, (p) => ({
            ...p,
            alts: Object.fromEntries(
                [...new Set([...Object.keys(p.alts || {}), ...Object.keys(A)])].map((R) => [
                    R,
                    [...((p.alts || {})[R] || []), ...(A[R] || [])],
                ]),
            ),
        }));
    const _ = Jt(H, Y.replies);
    ee(a, (p) =>
        Me(p, t, (R) =>
            R.id !== n.id
                ? R
                : {
                      ...R,
                      likes: Math.max(
                          R.likes || 0,
                          (R.likes || 0) + Y.likedBy.filter((S) => !(R.likedBy || []).includes(S)).length,
                          Y.likes + Y.likedBy.length,
                      ),
                      views: Math.max(R.views || 0, Y.views, (Y.likes + 1) * 9),
                      likedBy: [...new Set([...(R.likedBy || []), ...Y.likedBy])],
                  },
        ),
    );
    for (let p = 0; p < _.length; p++) {
        p && !(l != null && l.aborted) && (await qa(700 + Math.random() * 1500, l));
        const R = Date.now(),
            S = l != null && l.aborted ? _.slice(p) : [_[p]];
        if (
            (ee(a, (y) =>
                Me(y, t, (I) =>
                    I.id !== n.id
                        ? I
                        : {
                              ...I,
                              replies: [
                                  ...(I.replies || []),
                                  ...S.map((se, B) => ({ ...se, createdAt: R + B })),
                              ],
                              replyCount: Math.max(Fe(I) + S.length, (I.replies || []).length + S.length),
                          },
                ),
            ),
            S.length > 1)
        )
            break;
    }
    return { replies: _.length, likes: Y.likedBy.length };
}
const qa = (s, a) =>
    new Promise((t) => {
        var i;
        const n = setTimeout(t, s);
        (i = a == null ? void 0 : a.addEventListener) == null ||
            i.call(
                a,
                "abort",
                () => {
                    (clearTimeout(n), t());
                },
                { once: !0 },
            );
    });
function Jt(s, a) {
    const t = [];
    for (let n = 0; n < Math.max(s.length, a.length); n++)
        (n < s.length && t.push(s[n]), n < a.length && t.push(a[n]));
    return t;
}
function Ha() {
    const { state: s, patch: a } = xe(),
        t = ye();
    return P.useCallback(
        (n, i) => {
            const l = ks(i.id);
            if (ha(l)) {
                fn(l);
                return;
            }
            xa(l, (c) => Es(s, a, { owner: n, t: i, exclude: i.mentions || [], signal: c }), {
                label: "X 反响",
            }).then((c) => {
                c != null && c.error
                    ? t(`互动没生成出来：${c.error.message || c.error}`, "error")
                    : c != null &&
                      c.value &&
                      t(
                          c.value.replies || c.value.likes
                              ? `新增 ${c.value.replies} 条回复${c.value.likes ? `、${c.value.likes} 个角色点赞` : ""}`
                              : "这一轮没人回复",
                      );
            });
        },
        [s, a, t],
    );
}
function Wt({ onClose: s, quote: a = null }) {
    var se;
    const { state: t, patch: n } = xe(),
        i = ye(),
        [l, c] = P.useState(""),
        [o, r] = P.useState(null),
        [d, w] = P.useState(!1),
        [N, m] = P.useState(""),
        [C, u] = P.useState(null),
        [k, U] = P.useState(!1),
        [x, j] = P.useState(""),
        $ = ve(),
        g = ce(t),
        v = Xe(g),
        b = $(v),
        [F, le] = P.useState(!1),
        [W, Y] = P.useState(null),
        M = (((se = Se(g)) == null ? void 0 : se.npcs) || []).filter((B) => B.handle || B.name),
        A = W ? M.find((B) => B.id === W) : null,
        H = P.useRef(null),
        _ = P.useRef(null),
        G = Os(),
        ne = Ca({
            value: l,
            setValue: c,
            candidates: G,
            inputRef: H,
            skin: "x",
            emptyHint: "还没有开了 X 号的角色 —— 去 TA 的主页生成一下资料",
        }),
        X = $a("x"),
        p = async (B) => {
            var J;
            const f = (J = B.target.files) == null ? void 0 : J[0];
            if (((B.target.value = ""), !f)) return;
            const D = await pa(f, { note: "X 帖子" });
            D && r(D);
        },
        R = !!(l.trim() || o || N.trim()),
        S = a ? Bs(g, a.owner).find((B) => B.id === a.id) : null,
        y = () => {
            const B = l.trim(),
                f = d ? N.trim().slice(0, 300) : "";
            if (!B && !o && !f) return null;
            const D = {
                id: $e("xt_"),
                createdAt: Date.now(),
                text: B.slice(0, 560),
                likes: 0,
                rts: 0,
                quotes: 0,
                bookmarks: 0,
                views: 0,
                replies: [],
                ...(o
                    ? { photoRef: o, photoByMe: !0 }
                    : !o && f && C != null && C.ref
                      ? { photoRef: C.ref, ...(C.brief ? { photoBrief: C.brief } : null) }
                      : {}),
                ...(f ? { photoDesc: f } : {}),
                ...(k && x.trim() ? { place: x.trim().slice(0, 40) } : {}),
                ...(S ? { quoteRef: { owner: a.owner, id: a.id }, quote: Fa($(a.owner, S), S) } : {}),
            };
            S &&
                ee(n, (K) =>
                    Me(K, a.owner, (oe) => (oe.id !== a.id ? oe : { ...oe, quotes: (oe.quotes || 0) + 1 })),
                );
            const J = Ba(g, Sa(B, G));
            if ((J.length && (D.mentions = J), g.activePreset && Se(g) && (D.pre = g.activePreset), A))
                return (
                    (D.npc = {
                        pid: A.id,
                        name: A.name || A.handle,
                        handle: A.handle || "",
                        verified: !!A.verified,
                    }),
                    (D.accountId = t.activeAccountId),
                    delete D.mentions,
                    ee(n, (K) => ({ ...K, feed: [D, ...(K.feed || [])] })),
                    s(),
                    f && !o && !D.photoRef && Ke(t, n, [{ owner: "npc", t: D }]),
                    null
                );
            const Q = Ds(g, v);
            return (
                ee(n, (K) => gs(K, v, (oe) => ({ ...oe, tweets: [D, ...(oe.tweets || [])] }))),
                s(),
                f && !o && !D.photoRef && Ke(t, n, [{ owner: v, t: D }]),
                J.length &&
                    X({
                        ids: J,
                        where: "post",
                        userText: [Q && `（用账号 @${Q.handle} 发的）`, B, f && `（配图：${f}）`].filter(
                            Boolean,
                        ).join(`
`),
                        target: { owner: "her" },
                        nameOf: (K) => $(K).name,
                        onReply: (K, oe) =>
                            ee(n, (fe) =>
                                Me(fe, v, (re) =>
                                    re.id !== D.id
                                        ? re
                                        : {
                                              ...re,
                                              replies: [
                                                  ...(re.replies || []),
                                                  {
                                                      id: $e("xr_"),
                                                      author: "char",
                                                      charId: K,
                                                      name: $(K).name,
                                                      handle: "",
                                                      text: oe,
                                                      likes: 0,
                                                      createdAt: Date.now(),
                                                  },
                                              ],
                                              replyCount: Fe(re) + 1,
                                          },
                                ),
                            ),
                        onLike: (K) =>
                            ee(n, (oe) =>
                                Me(oe, v, (fe) =>
                                    fe.id !== D.id
                                        ? fe
                                        : {
                                              ...fe,
                                              likedBy: [...new Set([...(fe.likedBy || []), K])],
                                              likes: (fe.likes || 0) + 1,
                                          },
                                ),
                            ),
                    }),
                D
            );
        },
        I = () => {
            const B = y();
            B &&
                xa(ks(B.id), (f) => Es(t, n, { owner: v, t: B, exclude: B.mentions || [], signal: f }), {
                    label: "X 反响",
                }).then((f) => {
                    f != null && f.error && i(`反响没生成出来：${f.error.message || f.error}`, "error");
                });
        };
    return e.jsxs("div", {
        className: "xa-compose",
        children: [
            e.jsxs("header", {
                children: [
                    e.jsx("button", { onClick: s, children: "Cancel" }),
                    e.jsx("button", { className: "post", disabled: !R, onClick: I, children: "Post" }),
                ],
            }),
            e.jsxs("div", {
                className: "xa-compose-body",
                children: [
                    A
                        ? e.jsx(me, {
                              src: A.avatar || null,
                              name: A.name || A.handle,
                              onClick: () => le(!0),
                          })
                        : e.jsx(me, { src: b.avatar, name: b.name, onClick: () => le(!0) }),
                    e.jsxs("div", {
                        className: "xa-compose-col",
                        children: [
                            e.jsx("textarea", {
                                ref: H,
                                autoFocus: !0,
                                value: l,
                                maxLength: 560,
                                ...ne.bind,
                                onKeyDown: ne.keyDown(),
                                placeholder: a ? "Add a comment" : "What's happening?",
                            }),
                            ne.panel && e.jsx("div", { className: "xa-mention-down", children: ne.panel }),
                            o &&
                                e.jsxs("div", {
                                    className: "xa-compose-photo",
                                    children: [
                                        e.jsx(Le, { src: o, alt: "" }),
                                        e.jsx("button", {
                                            onClick: () => r(null),
                                            "aria-label": "移除图片",
                                            children: e.jsx(Ie, { size: 14, weight: "bold" }),
                                        }),
                                    ],
                                }),
                            d &&
                                e.jsxs("div", {
                                    className: "xa-compose-att",
                                    children: [
                                        e.jsxs("span", {
                                            children: [
                                                e.jsx(Ws, { size: 14, weight: "bold" }),
                                                o
                                                    ? "图片描述（给角色看的，可选）"
                                                    : "文字图：写这张图拍了什么",
                                            ],
                                        }),
                                        e.jsx("textarea", {
                                            rows: 3,
                                            value: N,
                                            maxLength: 300,
                                            onChange: (B) => m(B.target.value),
                                            placeholder: o
                                                ? "例如：窗边的一杯冰美式"
                                                : "例如：窗边的一杯冰美式，下午的光斜着照进来",
                                        }),
                                        e.jsx("button", {
                                            onClick: () => {
                                                (w(!1), m(""), u(null));
                                            },
                                            "aria-label": "移除文字图",
                                            children: e.jsx(Ie, { size: 14, weight: "bold" }),
                                        }),
                                        !o && e.jsx(jn, { desc: N, context: { text: l }, onChange: u }),
                                    ],
                                }),
                            S && e.jsx(Oa, { t: { quoteRef: { owner: a.owner, id: a.id } }, compose: !0 }),
                            k &&
                                e.jsxs("div", {
                                    className: "xa-compose-att place",
                                    children: [
                                        e.jsx(cs, { size: 15, weight: "fill" }),
                                        e.jsx("input", {
                                            value: x,
                                            maxLength: 40,
                                            onChange: (B) => j(B.target.value),
                                            placeholder: "位置 / IP 属地，例如 上海",
                                            autoFocus: !0,
                                        }),
                                        e.jsx("button", {
                                            onClick: () => {
                                                (U(!1), j(""));
                                            },
                                            "aria-label": "移除位置",
                                            children: e.jsx(Ie, { size: 14, weight: "bold" }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            e.jsx("input", { ref: _, type: "file", accept: "image/*", hidden: !0, onChange: p }),
            F &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("div", { className: "xa-acs-bg", onClick: () => le(!1) }),
                        e.jsxs("div", {
                            className: "xa-acs",
                            role: "dialog",
                            "aria-label": "选择发帖账号",
                            children: [
                                e.jsx("div", { className: "xa-acs-grab" }),
                                e.jsx("h4", { children: "选择发帖账号" }),
                                ds(g).map((B) => {
                                    const f = $(B.ref),
                                        D = !A && B.ref === v;
                                    return e.jsxs(
                                        "button",
                                        {
                                            className: "xa-acs-row",
                                            onClick: () => {
                                                (Y(null), ee(n, (J) => ({ ...J, activeMe: B.ref })), le(!1));
                                            },
                                            children: [
                                                e.jsx(me, { src: f.avatar, name: f.name, size: 40 }),
                                                e.jsxs("span", {
                                                    children: [
                                                        e.jsx("b", { children: f.name }),
                                                        e.jsxs("small", {
                                                            children: [
                                                                "@",
                                                                f.handle,
                                                                B.main ? "" : " · 小号",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                D
                                                    ? e.jsx(ze, {
                                                          size: 18,
                                                          weight: "bold",
                                                          className: "xs-on",
                                                      })
                                                    : null,
                                            ],
                                        },
                                        B.ref,
                                    );
                                }),
                                M.length > 0 &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx("div", {
                                                className: "xa-acs-cap",
                                                children: "论坛 NPC · 不是你本人",
                                            }),
                                            M.map((B) =>
                                                e.jsxs(
                                                    "button",
                                                    {
                                                        className: "xa-acs-row",
                                                        onClick: () => {
                                                            (Y(B.id), le(!1));
                                                        },
                                                        children: [
                                                            e.jsx(me, {
                                                                src: B.avatar || null,
                                                                name: B.name || B.handle,
                                                                size: 40,
                                                            }),
                                                            e.jsxs("span", {
                                                                children: [
                                                                    e.jsx("b", {
                                                                        children: B.name || B.handle,
                                                                    }),
                                                                    e.jsxs("small", {
                                                                        children: ["@", B.handle || ""],
                                                                    }),
                                                                ],
                                                            }),
                                                            W === B.id
                                                                ? e.jsx(ze, {
                                                                      size: 18,
                                                                      weight: "bold",
                                                                      className: "xs-on",
                                                                  })
                                                                : null,
                                                        ],
                                                    },
                                                    B.id,
                                                ),
                                            ),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
            A
                ? e.jsxs("div", {
                      className: "xa-compose-as",
                      children: ["以论坛 NPC @", A.handle, " 发布 · 该账号不是你本人"],
                  })
                : v !== "me" &&
                  e.jsxs("div", { className: "xa-compose-as", children: ["以 @", b.handle, " 发布 · 小号"] }),
            e.jsxs("footer", {
                children: [
                    e.jsxs("div", {
                        className: "xa-compose-tools",
                        children: [
                            e.jsx("button", {
                                onClick: () => {
                                    var B;
                                    return (B = _.current) == null ? void 0 : B.click();
                                },
                                "aria-label": "添加图片",
                                children: e.jsx(mt, { size: 22 }),
                            }),
                            e.jsx("button", {
                                className: d ? "on" : "",
                                onClick: () => w(!0),
                                "aria-label": "文字图",
                                children: e.jsx(Ws, { size: 22 }),
                            }),
                            e.jsx("button", {
                                className: k ? "on" : "",
                                onClick: () => U(!0),
                                "aria-label": "添加位置",
                                children: e.jsx(cs, { size: 22 }),
                            }),
                            e.jsx("button", {
                                className: ne.open ? "on" : "",
                                onClick: ne.trigger,
                                "aria-label": "提到别人",
                                children: e.jsx(va, { size: 22 }),
                            }),
                        ],
                    }),
                    e.jsxs("span", { className: l.length > 280 ? "over" : "", children: [l.length, "/280"] }),
                ],
            }),
        ],
    });
}
function _a(s) {
    return s.me.followingCount != null ? s.me.followingCount : (s.me.following || []).length;
}
function us(s, a, t) {
    ee(s, (n) => ts(n, a, t));
}
const Yt = (s) => {
        const a = new Date(s);
        return `${a.getFullYear()}-${String(a.getMonth() + 1).padStart(2, "0")}`;
    },
    Ms = (s) => {
        const a = String(s ?? "").replace(/[,，\s]/g, "");
        if (a === "") return null;
        const t = Math.max(0, Math.round(Number(a)));
        return Number.isFinite(t) ? t : null;
    };
function je({
    label: s,
    value: a,
    onChange: t,
    max: n,
    multiline: i = !1,
    type: l = "text",
    inputMode: c,
    placeholder: o = "",
}) {
    const [r, d] = P.useState(!1),
        w = i ? "textarea" : "input";
    return e.jsxs("label", {
        className: `xe-field ${r ? "on" : ""}`,
        children: [
            e.jsxs("span", {
                className: "xe-field-top",
                children: [
                    e.jsx("span", { className: "xe-field-label", children: s }),
                    n && r
                        ? e.jsxs("span", {
                              className: "xe-field-count",
                              children: [String(a || "").length, " / ", n],
                          })
                        : null,
                ],
            }),
            l === "month"
                ? e.jsxs("span", {
                      className: `xe-month${a ? "" : " empty"}`,
                      children: [
                          a
                              ? a.replace(/^(\d{4})-(\d{2})$/, (N, m, C) => `${m} 年 ${Number(C)} 月`)
                              : o || "未设置",
                          e.jsx("input", {
                              type: "month",
                              value: a,
                              onFocus: () => d(!0),
                              onBlur: () => d(!1),
                              onChange: (N) => t(N.target.value),
                          }),
                      ],
                  })
                : e.jsx(w, {
                      className: "xe-field-input",
                      type: i ? void 0 : l,
                      inputMode: c,
                      value: a,
                      maxLength: n,
                      placeholder: o,
                      rows: i ? 2 : void 0,
                      onFocus: () => d(!0),
                      onBlur: () => d(!1),
                      onChange: (N) => t(N.target.value),
                  }),
        ],
    });
}
function Kt({ owner: s, onClose: a }) {
    var S;
    const { state: t, patch: n } = xe(),
        i = ce(t),
        l = String(s || "").startsWith("new:") ? String(s).slice(4) : null,
        c = l ? null : s,
        o = !!s,
        r = l ? l === "me" : Pe(i, c),
        d = l ? (l === "me" ? null : l) : _e(i, c),
        w = !!l || ge(c),
        N = d ? (t.characters || []).find((y) => y.id === d) : null,
        m = !o || l ? {} : ae(i, c) || {},
        [C, u] = P.useState(null),
        [k, U] = P.useState(!1),
        x = P.useRef(null),
        j = P.useRef(null),
        [$, g] = P.useState({});
    if (
        (P.useEffect(() => {
            (u(null), g({}));
        }, [s]),
        !o)
    )
        return null;
    const b =
            C ||
            (() => ({
                name: m.name || (w ? "" : r ? ps(t.me) : he(N)) || "",
                handle: m.handle || "",
                bio: m.bio || "",
                category: m.category || "",
                location: m.location || "",
                website: m.website || "",
                joined: m.joined ? Yt(m.joined) : "",
                followers: m.followers != null ? String(m.followers) : "",
                followingCount: m.followingCount != null ? String(m.followingCount) : "",
                verified: !!m.verified,
                direction: m.direction || "",
                persona: m.persona || "",
                isUser: m.isUser !== !1,
                knownBy: m.knownBy || [],
            }))(),
        F = (y, I) => u({ ...b, [y]: I }),
        le =
            $.avatar ||
            (c === "me"
                ? m.avatar || ((S = t.me) == null ? void 0 : S.avatar) || null
                : w
                  ? m.avatar || null
                  : m.avatar || (N == null ? void 0 : N.avatar) || null),
        W = $.banner || m.banner || null,
        Y = [...String(b.name || "")].reduce((y, I) => y + I.charCodeAt(0), 0) % 360,
        M = async (y, I) => {
            var f, D, J;
            const se = (f = y.target.files) == null ? void 0 : f[0];
            if (((y.target.value = ""), !se)) return;
            const B = await Dn(
                se,
                I === "avatar"
                    ? { aspect: 1, shape: "circle", title: "头像" }
                    : {
                          aspect: On(
                              (J = (D = y.target).closest) == null ? void 0 : J.call(D, '[class*="banner"]'),
                              3,
                          ),
                          shape: "square",
                      },
                { note: `x-${I}` },
            );
            B && (l ? g((Q) => ({ ...Q, [I]: B })) : us(n, c, (Q) => ({ ...Q, [I]: B })));
        },
        A = (y) => {
            l ? g((I) => ({ ...I, banner: y })) : us(n, c, (I) => ({ ...I, banner: y }));
        },
        H = () => {
            (u(null), g({}), a());
        },
        _ = b.handle.replace(/[^A-Za-z0-9_]/g, "").slice(0, 15),
        G = _ && Ns(i).has(_.toLowerCase()) && _.toLowerCase() !== String(m.handle || "").toLowerCase(),
        ne = () => {
            if (G) {
                window.alert(`@${_} 已经被别的号用了`);
                return;
            }
            const [y, I] = String(b.joined || "")
                    .split("-")
                    .map(Number),
                se = y && I ? new Date(y, I - 1, 1).getTime() : m.joined || (c === "me" ? null : Date.now()),
                B = (f) => ({
                    ...f,
                    name: b.name.trim() || null,
                    handle: _ || (c === "me" ? null : f.handle || null),
                    bio: b.bio.slice(0, 160),
                    ...(b.bio.slice(0, 160) !== (m.bio || "") ? { bioTr: "" } : null),
                    category: b.category.trim().slice(0, 30),
                    location: b.location.slice(0, 30),
                    website: b.website
                        .trim()
                        .replace(/^https?:\/\//, "")
                        .slice(0, 60),
                    joined: se,
                    followers: Ms(b.followers),
                    followingCount: Ms(b.followingCount),
                    verified: !!b.verified,
                    direction: b.direction.trim().slice(0, 400),
                    ...(r && w
                        ? {
                              isUser: !!b.isUser,
                              knownBy: b.isUser ? b.knownBy : [],
                              persona: b.persona.trim().slice(0, 800),
                          }
                        : null),
                    ...(_ ? { draft: !1 } : null),
                });
            if (l) {
                const f = B(da({ ...$ }));
                ee(n, (D) => ({ ...D, alts: { ...D.alts, [l]: [...(D.alts[l] || []), f] } }));
            } else us(n, c, B);
            H();
        },
        X = () => {
            !ge(c) ||
                !window.confirm(`删除 @${m.handle || m.name || "这个号"}？它发过的推一起删掉。`) ||
                (ee(n, (y) => {
                    const I = ss(y, c);
                    return {
                        ...y,
                        alts: { ...y.alts, [I]: (y.alts[I] || []).filter((se) => `alt:${se.id}` !== c) },
                        activeMe: y.activeMe === c ? "me" : y.activeMe,
                    };
                }),
                H());
        },
        p = t.characters || [],
        R = l ? (d ? `给 ${he(N)} 开新号` : "创建新账号") : "Edit profile";
    return e.jsxs("div", {
        className: "xe",
        role: "dialog",
        "aria-label": "Edit profile",
        children: [
            e.jsxs("header", {
                className: "xe-top",
                children: [
                    e.jsx("button", { className: "xe-cancel", onClick: H, children: "Cancel" }),
                    e.jsx("b", { className: "xe-title", children: R }),
                    e.jsx("button", { className: "xe-save", onClick: ne, children: "Save" }),
                ],
            }),
            e.jsxs("div", {
                className: "xe-body",
                children: [
                    e.jsxs("button", {
                        type: "button",
                        className: "btn-plain xe-banner",
                        style: W
                            ? void 0
                            : {
                                  background: `linear-gradient(135deg, hsl(${Y} 32% 78%), hsl(${(Y + 40) % 360} 28% 62%))`,
                              },
                        onClick: async () => {
                            var I;
                            const y = await bn({ current: W });
                            y === "file"
                                ? (I = j.current) == null || I.click()
                                : y != null && y.url && A(y.url);
                        },
                        children: [
                            W ? e.jsx(Le, { src: W, alt: "" }) : null,
                            e.jsx("span", {
                                className: "xe-cam",
                                "aria-label": "换横幅",
                                children: e.jsx(Ys, { size: 22 }),
                            }),
                        ],
                    }),
                    e.jsx("input", {
                        ref: j,
                        type: "file",
                        accept: "image/*",
                        hidden: !0,
                        onChange: (y) => M(y, "banner"),
                    }),
                    e.jsxs("button", {
                        type: "button",
                        className: "btn-plain xe-avatar",
                        onClick: () => U(!0),
                        children: [
                            e.jsx("span", {
                                className: "xe-avatar-img",
                                children: le
                                    ? e.jsx(Le, { src: le, alt: "" })
                                    : e.jsx("i", {
                                          style: { background: `hsl(${Y} 30% 78%)` },
                                          children: String(b.name || "?")
                                              .slice(0, 1)
                                              .toUpperCase(),
                                      }),
                            }),
                            e.jsx("span", {
                                className: "xe-cam",
                                "aria-label": "换头像",
                                children: e.jsx(Ys, { size: 20 }),
                            }),
                        ],
                    }),
                    e.jsx("input", {
                        ref: x,
                        type: "file",
                        accept: "image/*",
                        hidden: !0,
                        onChange: (y) => M(y, "avatar"),
                    }),
                    e.jsx(gn, {
                        open: k,
                        onClose: () => U(!1),
                        title: "X 头像",
                        ownerId: r ? "me" : d,
                        current: le || "",
                        onPick: (y) => {
                            l ? g((I) => ({ ...I, avatar: y })) : us(n, c, (I) => ({ ...I, avatar: y }));
                        },
                        onUpload: () => {
                            var y;
                            return (y = x.current) == null ? void 0 : y.click();
                        },
                    }),
                    e.jsxs("div", {
                        className: "xe-fields",
                        children: [
                            r &&
                                w &&
                                !l &&
                                m.isUser === !1 &&
                                e.jsxs("div", {
                                    className: "xe-seg",
                                    role: "radiogroup",
                                    "aria-label": "这个号是谁",
                                    children: [
                                        e.jsxs("button", {
                                            type: "button",
                                            className: b.isUser ? "on" : "",
                                            onClick: () => F("isUser", !0),
                                            children: [
                                                e.jsx("b", { children: "我的小号" }),
                                                e.jsx("small", { children: "是我，换了个名字" }),
                                            ],
                                        }),
                                        e.jsxs("button", {
                                            type: "button",
                                            className: b.isUser ? "" : "on",
                                            onClick: () => F("isUser", !1),
                                            children: [
                                                e.jsx("b", { children: "NPC 号" }),
                                                e.jsx("small", { children: "我操控，但不是我" }),
                                            ],
                                        }),
                                    ],
                                }),
                            e.jsx("div", { className: "xe-sec", children: "基本资料" }),
                            e.jsx(je, {
                                label: "名称",
                                value: b.name,
                                max: 50,
                                onChange: (y) => F("name", y),
                            }),
                            e.jsx(je, {
                                label: "用户名",
                                value: b.handle,
                                max: 15,
                                placeholder: c === "me" ? "" : "填写后即开通此账号",
                                onChange: (y) => F("handle", y),
                            }),
                            G
                                ? e.jsxs("p", {
                                      className: "xe-note warn",
                                      children: ["@", _, " 已被其他账号使用。"],
                                  })
                                : null,
                            e.jsx(je, {
                                label: "简介",
                                value: b.bio,
                                max: 160,
                                multiline: !0,
                                placeholder: "添加简介",
                                onChange: (y) => F("bio", y),
                            }),
                            e.jsx("div", { className: "xe-sec", children: "主页信息" }),
                            e.jsxs("div", {
                                className: "xe-pair",
                                children: [
                                    e.jsx(je, {
                                        label: "粉丝数",
                                        value: b.followers,
                                        inputMode: "numeric",
                                        placeholder: "留空不显示",
                                        onChange: (y) => F("followers", y),
                                    }),
                                    e.jsx(je, {
                                        label: "关注数",
                                        value: b.followingCount,
                                        inputMode: "numeric",
                                        placeholder:
                                            c === "me"
                                                ? `留空为 ${(i.me.following || []).length}`
                                                : "留空不显示",
                                        onChange: (y) => F("followingCount", y),
                                    }),
                                ],
                            }),
                            e.jsx(je, {
                                label: "职业类别",
                                value: b.category,
                                max: 30,
                                placeholder: "添加职业类别",
                                onChange: (y) => F("category", y),
                            }),
                            e.jsxs("div", {
                                className: "xe-pair",
                                children: [
                                    e.jsx(je, {
                                        label: "所在地",
                                        value: b.location,
                                        max: 30,
                                        placeholder: "添加所在地",
                                        onChange: (y) => F("location", y),
                                    }),
                                    e.jsx(je, {
                                        label: "注册时间",
                                        value: b.joined,
                                        type: "month",
                                        onChange: (y) => F("joined", y),
                                    }),
                                ],
                            }),
                            e.jsx(je, {
                                label: "网站",
                                value: b.website,
                                max: 60,
                                inputMode: "url",
                                placeholder: "添加网站",
                                onChange: (y) => F("website", y),
                            }),
                            e.jsxs("button", {
                                type: "button",
                                className: "xe-switch-row",
                                onClick: () => F("verified", !b.verified),
                                children: [
                                    e.jsxs("span", {
                                        children: [
                                            e.jsx("b", { children: "认证标记" }),
                                            e.jsx("small", { children: "名称后显示蓝色认证标记" }),
                                        ],
                                    }),
                                    e.jsx("span", {
                                        className: `xe-switch ${b.verified ? "on" : ""}`,
                                        "aria-checked": b.verified,
                                        role: "switch",
                                        children: e.jsx("i", {}),
                                    }),
                                ],
                            }),
                            e.jsx("div", { className: "xe-sec", children: "内容方向" }),
                            e.jsx(je, {
                                label: "这个账号发什么",
                                value: b.direction,
                                max: 400,
                                multiline: !0,
                                placeholder: "留空时按人设判断",
                                onChange: (y) => F("direction", y),
                            }),
                            e.jsx("p", { className: "xe-note", children: "仅供生成参考，不显示在主页上。" }),
                            r &&
                                w &&
                                !b.isUser &&
                                e.jsx(e.Fragment, {
                                    children: e.jsx(je, {
                                        label: "这个号是谁",
                                        value: b.persona,
                                        max: 800,
                                        multiline: !0,
                                        placeholder: "身份、背景与说话方式",
                                        onChange: (y) => F("persona", y),
                                    }),
                                }),
                            r &&
                                w &&
                                b.isUser &&
                                p.length > 0 &&
                                e.jsxs("div", {
                                    className: "xe-known",
                                    children: [
                                        e.jsx("span", {
                                            className: "xe-field-label",
                                            children: "知道这个号是你的人",
                                        }),
                                        e.jsx("div", {
                                            className: "xe-chips",
                                            children: p.map((y) => {
                                                const I = b.knownBy.includes(y.id);
                                                return e.jsxs(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        className: I ? "on" : "",
                                                        onClick: () =>
                                                            F(
                                                                "knownBy",
                                                                I
                                                                    ? b.knownBy.filter((se) => se !== y.id)
                                                                    : [...b.knownBy, y.id],
                                                            ),
                                                        children: [
                                                            I
                                                                ? e.jsx(ze, { size: 13, weight: "bold" })
                                                                : null,
                                                            he(y),
                                                        ],
                                                    },
                                                    y.id,
                                                );
                                            }),
                                        }),
                                        e.jsx("p", {
                                            className: "xe-note",
                                            children: "未勾选的角色会把它当作陌生账号。",
                                        }),
                                    ],
                                }),
                            ge(c) &&
                                e.jsx("button", {
                                    type: "button",
                                    className: "xe-danger",
                                    onClick: X,
                                    children: "删除这个号",
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Te({ title: s, sub: a, onClick: t, right: n = null, avatar: i = null }) {
    return e.jsxs("button", {
        className: "xs-row",
        onClick: t,
        children: [
            i,
            e.jsxs("span", {
                className: "xs-row-t",
                children: [e.jsx("b", { children: s }), a ? e.jsx("small", { children: a }) : null],
            }),
            n || e.jsx(pt, { size: 16, className: "xs-row-go" }),
        ],
    });
}
function Gt() {
    const { state: s, patch: a } = xe(),
        t = ce(s),
        n = be();
    ye();
    const i = ve(),
        l = Fs(),
        c = Xe(t),
        o = () => {
            const r = Fn({ name: `预设 ${t.presets.length + 1}` });
            (ee(a, (d) => ({ ...d, presets: [...(d.presets || []), r] })), n.openPreset(r.id));
        };
    return e.jsxs("div", {
        className: "xa-page xs-page",
        children: [
            e.jsx(He, { title: "Settings" }),
            e.jsx("h3", { className: "xs-h", children: "我的账号" }),
            e.jsx("p", { className: "xs-foot", children: "发帖时点按头像也可切换账号。" }),
            e.jsxs("div", {
                className: "xs-group",
                children: [
                    ds(t).map((r) => {
                        const d = i(r.ref);
                        return e.jsx(
                            Te,
                            {
                                avatar: e.jsx(me, { src: d.avatar, name: d.name, size: 36 }),
                                title: e.jsxs(e.Fragment, {
                                    children: [
                                        d.name,
                                        r.ref === c
                                            ? e.jsx("em", { className: "xa-acct-tag", children: "正在用" })
                                            : null,
                                    ],
                                }),
                                sub: `@${d.handle}${r.main ? " · 主号" : ` · 小号${(r.acct.knownBy || []).length ? ` · ${r.acct.knownBy.length} 人知道是我` : ""}`}`,
                                onClick: () => n.openProfile(r.ref),
                                right:
                                    r.ref === c
                                        ? e.jsx(ze, { size: 18, weight: "bold", className: "xs-on" })
                                        : e.jsx("span", {
                                              className: "xs-use",
                                              onClick: (w) => {
                                                  (w.stopPropagation(),
                                                      ee(a, (N) => ({ ...N, activeMe: r.ref })));
                                              },
                                              children: "切换",
                                          }),
                            },
                            r.ref,
                        );
                    }),
                    e.jsx(Te, {
                        avatar: e.jsx("span", { className: "xs-plus", children: e.jsx(Ge, { size: 18 }) }),
                        title: "创建小号",
                        sub: "仍然是你本人，换一个名字",
                        onClick: () => n.editProfile("new:me"),
                    }),
                ],
            }),
            na(t).length > 0 &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("h3", { className: "xs-h4", children: "以前建的 NPC 号" }),
                        e.jsx("p", {
                            className: "xs-foot",
                            children: "不再作为你的账号使用。可在资料中改回小号，或删除。",
                        }),
                        e.jsx("div", {
                            className: "xs-group",
                            children: na(t).map((r) => {
                                const d = i(r.ref);
                                return e.jsx(
                                    Te,
                                    {
                                        avatar: e.jsx(me, { src: d.avatar, name: d.name, size: 36 }),
                                        title: d.name,
                                        sub: `@${d.handle}`,
                                        onClick: () => n.editProfile(r.ref),
                                    },
                                    r.ref,
                                );
                            }),
                        }),
                    ],
                }),
            e.jsx("h3", { className: "xs-h", children: "角色的账号" }),
            e.jsx("p", { className: "xs-foot", children: "每位角色可以有多个账号。" }),
            e.jsxs("div", {
                className: "xs-group",
                children: [
                    (s.characters || []).map((r) => {
                        const d = Je(t, r.id);
                        return e.jsx(
                            Te,
                            {
                                avatar: e.jsx(me, { src: i(r.id).avatar, name: i(r.id).name, size: 36 }),
                                title: he(r),
                                sub: d.length
                                    ? d.map((w) => `@${w.acct.handle || "（待生成）"}`).join("  ")
                                    : "还没有 X 账号",
                                onClick: () => n.openProfile(r.id),
                                right: e.jsx("span", {
                                    className: "xs-use",
                                    onClick: (w) => {
                                        (w.stopPropagation(), n.editProfile(`new:${r.id}`));
                                    },
                                    children: "添加",
                                }),
                            },
                            r.id,
                        );
                    }),
                    !(s.characters || []).length &&
                        e.jsx("div", { className: "xs-empty", children: "还没有角色" }),
                ],
            }),
            e.jsx("h3", { className: "xs-h", children: "论坛预设" }),
            e.jsx("p", {
                className: "xs-foot",
                children:
                    "一份预设即一个世界观，包含背景、首页内容与 NPC 账号。切换后首页仅显示该世界的内容。",
            }),
            e.jsxs("div", {
                className: "xs-group",
                children: [
                    e.jsx(Te, {
                        title: "默认首页",
                        sub: "不用预设：好友们随手发的日常",
                        onClick: () => l(null),
                        right: t.activePreset
                            ? e.jsx("span", { className: "xs-use", children: "使用" })
                            : e.jsx(ze, { size: 18, weight: "bold", className: "xs-on" }),
                    }),
                    t.presets.map((r) =>
                        e.jsx(
                            Te,
                            {
                                title: r.name,
                                sub: [
                                    r.world ? String(r.world).slice(0, 28) : "还没写背景",
                                    `${(r.npcs || []).length} 个 NPC 号`,
                                ].join(" · "),
                                onClick: () => n.openPreset(r.id),
                                right:
                                    t.activePreset === r.id
                                        ? e.jsx(ze, { size: 18, weight: "bold", className: "xs-on" })
                                        : e.jsx("span", {
                                              className: "xs-use",
                                              onClick: (d) => {
                                                  (d.stopPropagation(), l(r.id));
                                              },
                                              children: "使用",
                                          }),
                            },
                            r.id,
                        ),
                    ),
                    e.jsx(Te, {
                        avatar: e.jsx("span", { className: "xs-plus", children: e.jsx(Ge, { size: 18 }) }),
                        title: "新建预设",
                        onClick: o,
                    }),
                    e.jsx(Te, {
                        avatar: e.jsx("span", { className: "xs-plus", children: e.jsx(ya, { size: 18 }) }),
                        title: "导入 / 导出",
                        sub: "图片（数据藏在图里）或 .json",
                        onClick: n.openPresetIO,
                    }),
                ],
            }),
        ],
    });
}
function Vt() {
    const { state: s, patch: a } = xe(),
        t = ce(s),
        n = ye();
    return e.jsxs("div", {
        className: "xa-page xs-page xs-io",
        children: [
            e.jsx(He, { title: "导入 / 导出论坛预设" }),
            e.jsx(vn, {
                kind: "xpreset",
                items: t.presets.map((i) => ({
                    ..._s(i),
                    id: i.id,
                    desc: `${(i.npcs || []).length} 个 NPC 号`,
                })),
                normalize: (i) => {
                    const l = _s(i);
                    return l ? { ...l, desc: void 0 } : null;
                },
                onImport: (i) =>
                    ee(a, (l) => ({
                        ...l,
                        presets: Xn(l.presets, i, {
                            pool: (s.characters || []).filter((c) => Ve(c)),
                            nameOf: he,
                        }),
                    })),
                toast: (i, l) => n(i, l),
                emptyHint: "还没有预设 —— 先新建一个",
            }),
        ],
    });
}
function Qt({ id: s }) {
    const { state: a, patch: t } = xe(),
        n = ce(a),
        i = be(),
        l = ve(),
        c = Fs(),
        o = n.presets.find((x) => x.id === s);
    if (!o)
        return e.jsxs("div", {
            className: "xa-page",
            children: [
                e.jsx(He, { title: "论坛预设" }),
                e.jsx("div", { className: "xa-empty", children: e.jsx("b", { children: "这份预设不在了" }) }),
            ],
        });
    const r = (x) => ee(t, (j) => ({ ...j, presets: (j.presets || []).map(($) => ($.id === s ? x($) : $)) })),
        d = (x, j) => r(($) => ({ ...$, [x]: j })),
        w = a.characters || [],
        N = (x, j) =>
            r(($) => ({
                ...$,
                cast: $.cast.map((g) =>
                    g === x || (g.id && g.id === x.id)
                        ? {
                              ...g,
                              ...j,
                              ...("charId" in j
                                  ? { name: j.charId ? he(w.find((v) => v.id === j.charId)) : g.name }
                                  : null),
                          }
                        : g,
                ),
            })),
        m = (x, j) => r(($) => ({ ...$, npcs: $.npcs.map((g) => (g.id === x ? j(g) : g)) })),
        C = () =>
            r((x) => ({
                ...x,
                npcs: [
                    ...(x.npcs || []),
                    {
                        id: $e("xn_"),
                        name: "",
                        handle: `npc${(x.npcs || []).length + 1}`,
                        persona: "",
                        verified: !1,
                        followers: 0,
                    },
                ],
            })),
        u = async (x, j) => {
            var v;
            const $ = (v = x.target.files) == null ? void 0 : v[0];
            if (((x.target.value = ""), !$)) return;
            const g = await pa($, { note: "x-npc" });
            m(j, (b) => ({ ...b, avatar: g }));
        },
        k = () => {
            window.confirm(`删除预设「${o.name}」？在它下面刷出来的推会留着，但回到默认首页看不到它们。`) &&
                (ee(t, (x) => ({
                    ...x,
                    presets: x.presets.filter((j) => j.id !== s),
                    activePreset: x.activePreset === s ? null : x.activePreset,
                })),
                i.pop());
        },
        U = n.activePreset === s;
    return e.jsxs("div", {
        className: "xa-page xs-page",
        children: [
            e.jsx(He, {
                title: "论坛预设",
                right: e.jsx("button", {
                    className: "xs-top-use",
                    onClick: () => c(U ? null : s),
                    children: U ? "停用" : "使用",
                }),
            }),
            e.jsx("h3", { className: "xs-h", children: "世界观" }),
            e.jsx("p", {
                className: "xs-foot",
                children: "整份预设可导出分享，导入方的角色会自动对上角色位。",
            }),
            e.jsxs("div", {
                className: "xe-fields xs-fields",
                children: [
                    e.jsx(je, { label: "名字", value: o.name, max: 30, onChange: (x) => d("name", x) }),
                    e.jsx(je, {
                        label: "背景 / 世界观",
                        value: o.world,
                        max: 3e3,
                        multiline: !0,
                        placeholder: "年代、行业、圈子里的势力、最近关心的事",
                        onChange: (x) => d("world", x),
                    }),
                    e.jsx(je, {
                        label: "首页刷什么",
                        value: o.feed,
                        max: 600,
                        multiline: !0,
                        placeholder: "如 八卦、同好讨论、新闻、应援；留空按背景判断",
                        onChange: (x) => d("feed", x),
                    }),
                    e.jsx(je, {
                        label: "陌生账号默认条数",
                        value: String(o.strangers ?? 6),
                        inputMode: "numeric",
                        onChange: (x) => d("strangers", Number(String(x).replace(/\D/g, "")) || 0),
                    }),
                ],
            }),
            e.jsx("h4", { className: "xs-h4", children: "这个世界里固定出现的 NPC 号" }),
            e.jsx("p", {
                className: "xs-foot",
                children: "站姐、营销号、爆料号等，刷新首页时由它们发帖；不是你本人。",
            }),
            (o.npcs || []).map((x) =>
                e.jsxs(
                    "div",
                    {
                        className: "xs-cast",
                        children: [
                            e.jsxs("div", {
                                className: "xs-cast-head",
                                children: [
                                    e.jsxs("label", {
                                        className: "xs-npc-av",
                                        children: [
                                            e.jsx(me, { src: x.avatar, name: x.name || x.handle, size: 34 }),
                                            e.jsx("input", {
                                                type: "file",
                                                accept: "image/*",
                                                hidden: !0,
                                                onChange: (j) => u(j, x.id),
                                            }),
                                        ],
                                    }),
                                    e.jsx("b", { children: x.name || `@${x.handle}` }),
                                    e.jsx("button", {
                                        className: "xs-del",
                                        onClick: () =>
                                            r((j) => ({ ...j, npcs: j.npcs.filter(($) => $.id !== x.id) })),
                                        "aria-label": "删除",
                                        children: e.jsx(fs, { size: 16 }),
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "xe-pair",
                                children: [
                                    e.jsx(je, {
                                        label: "名字",
                                        value: x.name,
                                        max: 40,
                                        onChange: (j) => m(x.id, ($) => ({ ...$, name: j })),
                                    }),
                                    e.jsx(je, {
                                        label: "@handle",
                                        value: x.handle,
                                        max: 15,
                                        onChange: (j) => m(x.id, ($) => ({ ...$, handle: En(j) })),
                                    }),
                                ],
                            }),
                            e.jsx(je, {
                                label: "这个号是谁",
                                value: x.persona,
                                max: 800,
                                multiline: !0,
                                placeholder: "身份、立场、说话方式",
                                onChange: (j) => m(x.id, ($) => ({ ...$, persona: j })),
                            }),
                            e.jsxs("div", {
                                className: "xe-pair",
                                children: [
                                    e.jsx(je, {
                                        label: "粉丝数",
                                        value: x.followers ? String(x.followers) : "",
                                        inputMode: "numeric",
                                        onChange: (j) => m(x.id, ($) => ({ ...$, followers: Ms(j) || 0 })),
                                    }),
                                    e.jsxs("button", {
                                        type: "button",
                                        className: "xe-switch-row",
                                        onClick: () => m(x.id, (j) => ({ ...j, verified: !j.verified })),
                                        children: [
                                            e.jsx("span", { children: e.jsx("b", { children: "蓝标" }) }),
                                            e.jsx("span", {
                                                className: `xe-switch ${x.verified ? "on" : ""}`,
                                                role: "switch",
                                                "aria-checked": x.verified,
                                                children: e.jsx("i", {}),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    },
                    x.id,
                ),
            ),
            e.jsxs("button", {
                className: "xs-add",
                onClick: C,
                children: [e.jsx(Ge, { size: 16 }), "添加 NPC 号"],
            }),
            e.jsx("h3", { className: "xs-h", children: "角色位" }),
            e.jsx("p", {
                className: "xs-foot",
                children: "不添加时，所有好友按各自人设参与。「由谁来」只在本机生效。",
            }),
            (o.cast || []).map((x, j) => {
                const $ = w.find((v) => v.id === x.charId),
                    g = $
                        ? [
                              { ref: $.id, main: !0, acct: n.chars[$.id] || {} },
                              ...(n.alts[$.id] || []).map((v) => ({ ref: `alt:${v.id}`, main: !1, acct: v })),
                          ]
                        : [];
                return e.jsxs(
                    "div",
                    {
                        className: "xs-cast",
                        children: [
                            e.jsxs("div", {
                                className: "xs-cast-head",
                                children: [
                                    e.jsx("b", { children: x.slot || `位置 ${j + 1}` }),
                                    e.jsx("button", {
                                        className: "xs-del",
                                        onClick: () =>
                                            r((v) => ({ ...v, cast: v.cast.filter((b) => b !== x) })),
                                        "aria-label": "删除",
                                        children: e.jsx(fs, { size: 16 }),
                                    }),
                                ],
                            }),
                            e.jsx(je, {
                                label: "位置名",
                                value: x.slot || "",
                                max: 30,
                                placeholder: "位置名称",
                                onChange: (v) => N(x, { slot: v }),
                            }),
                            e.jsx(je, {
                                label: "这个位置的背景",
                                value: x.role || "",
                                max: 600,
                                multiline: !0,
                                placeholder: "身份、处境、与他人的关系；留空按人设",
                                onChange: (v) => N(x, { role: v }),
                            }),
                            e.jsxs("div", {
                                className: "xs-chips small",
                                children: [
                                    e.jsx("span", { children: "由谁来：" }),
                                    w.map((v) =>
                                        e.jsx(
                                            "button",
                                            {
                                                className: x.charId === v.id ? "on" : "",
                                                onClick: () =>
                                                    N(x, { charId: x.charId === v.id ? "" : v.id, refs: [] }),
                                                children: he(v),
                                            },
                                            v.id,
                                        ),
                                    ),
                                ],
                            }),
                            !$ &&
                                e.jsxs("p", {
                                    className: "xe-note warn",
                                    children: [
                                        x.name ? `导出方这里是「${x.name}」，` : "",
                                        "还没选你这边由谁来 —— 没人的位置刷新时跳过。",
                                    ],
                                }),
                            g.length > 1 &&
                                e.jsxs("div", {
                                    className: "xs-chips small",
                                    children: [
                                        e.jsx("span", { children: "用哪几个号（不选 = 都用）：" }),
                                        g.map((v) => {
                                            const b = (x.refs || []).includes(v.ref);
                                            return e.jsx(
                                                "button",
                                                {
                                                    className: b ? "on" : "",
                                                    onClick: () =>
                                                        N(x, {
                                                            refs: b
                                                                ? x.refs.filter((F) => F !== v.ref)
                                                                : [...(x.refs || []), v.ref],
                                                        }),
                                                    children: v.acct.handle
                                                        ? `@${v.acct.handle}`
                                                        : v.main
                                                          ? "主号（待生成）"
                                                          : "小号（待生成）",
                                                },
                                                v.ref,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    },
                    x.id || j,
                );
            }),
            e.jsxs("button", {
                className: "xs-add",
                onClick: () =>
                    r((x) => ({
                        ...x,
                        cast: [
                            ...(x.cast || []),
                            { id: $e("xc_"), slot: "", role: "", charId: "", name: "", refs: [] },
                        ],
                    })),
                children: [e.jsx(Ge, { size: 16 }), "添加角色位"],
            }),
            (o.cast || []).some((x) => !w.some((j) => j.id === x.charId)) &&
                e.jsx("button", {
                    className: "xs-add",
                    onClick: () =>
                        r((x) =>
                            Ln(
                                x,
                                w.filter((j) => Ve(j)),
                                he,
                            ),
                        ),
                    children: "空着的位置自动对上我的角色",
                }),
            e.jsx("h3", { className: "xs-h", children: "我的位置" }),
            e.jsx("div", {
                className: "xe-fields xs-fields",
                children: e.jsx(je, {
                    label: "我在这个世界里是谁",
                    value: o.meRole || "",
                    max: 600,
                    multiline: !0,
                    placeholder: "留空时不设定",
                    onChange: (x) => d("meRole", x),
                }),
            }),
            e.jsx("h4", { className: "xs-h4", children: "切换到此预设时使用的账号" }),
            e.jsx("div", {
                className: "xs-chips",
                children: [
                    { ref: "", label: "不换" },
                    ...ds(n).map((x) => ({ ref: x.ref, label: `@${l(x.ref).handle}` })),
                ].map((x) =>
                    e.jsx(
                        "button",
                        {
                            className: (o.meRef || "") === x.ref ? "on" : "",
                            onClick: () => d("meRef", x.ref),
                            children: x.label,
                        },
                        x.ref || "none",
                    ),
                ),
            }),
            e.jsx("button", { className: "xe-danger xs-del-preset", onClick: k, children: "删除这份预设" }),
        ],
    });
}
export { il as default, cl as performXNotice };
