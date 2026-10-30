import { j as e, r as g, R as nn } from "./vendor-react-3a46a5d3.js";
import {
    fC as Qn,
    fD as de,
    fE as et,
    fF as R,
    fG as tn,
    fH as st,
    fI as nt,
    fJ as tt,
    f as W,
    fK as js,
    fL as at,
    ay as ue,
    cp as rt,
    cg as ps,
    dm as ct,
    fM as an,
    fN as rn,
    fO as it,
    fP as gs,
    fQ as lt,
    c6 as Ws,
    fR as cn,
    fS as ln,
    o as bs,
    fT as De,
    fU as ot,
    fV as Ee,
    fW as mt,
    fX as on,
    fY as dt,
    fZ as ht,
    by as ks,
    f_ as We,
    f$ as mn,
    g0 as dn,
    g1 as hn,
    bu as qe,
    bv as Qe,
    g2 as un,
    g3 as ut,
    g4 as vs,
    bt as ws,
    bs as Ns,
    br as ys,
    dl as Cs,
    bq as Ss,
    g5 as $s,
    g6 as Ps,
    g7 as xn,
    g8 as xt,
    cY as ft,
    g9 as G,
    ga as jt,
    gb as pt,
    gc as Be,
    gd as Ke,
    ge as gt,
    gf as bt,
    gg as fn,
    gh as ms,
    gi as kt,
    gj as vt,
    gk as jn,
    gl as ds,
    gm as wt,
    gn as Nt,
    go as yt,
    gp as Ct,
    gq as St,
    gr as U,
    gs as Ks,
    gt as $t,
    gu as pn,
    u as zs,
    gv as Pt,
    l as gn,
    c0 as zt,
    a as Tt,
    gw as It,
    gx as Et,
    Y as Mt,
    gy as At,
    gz as Rt,
    gA as Ue,
    gB as J,
    gC as as,
    gD as rs,
    gE as Us,
    gF as Hs,
    gG as Ot,
    gH as _t,
    gI as Lt,
    gJ as Bt,
    gK as Ft,
    gL as He,
    gM as se,
    gN as Ze,
    gO as Dt,
    gP as es,
    gQ as ne,
    gR as Wt,
    gS as X,
    gT as Kt,
    gU as hs,
    gV as bn,
    gW as Ye,
    gX as ze,
    gY as Zs,
    gZ as Ut,
    g_ as Ht,
    g$ as kn,
    h0 as vn,
    h1 as Zt,
    h2 as Yt,
    h3 as Gt,
    h4 as Jt,
    h5 as Xt,
    h6 as Vt,
    h7 as qt,
} from "./app-2c902988.js";
import {
    aJ as xe,
    cW as Ts,
    dK as wn,
    dL as Nn,
    dM as ss,
    bu as Me,
    bD as yn,
    bo as Is,
    cA as Cn,
    bE as Qt,
    dN as ea,
    bI as Sn,
    c_ as Es,
    bA as Ms,
    dO as $n,
    bz as Ys,
    bv as Pn,
    dP as ns,
    db as Ge,
    dQ as sa,
    dR as na,
    dS as zn,
    cV as ta,
    dT as aa,
    dU as Te,
    dV as ra,
    dW as Gs,
    dX as ca,
    dY as ia,
    c2 as cs,
    bY as is,
    dZ as Tn,
} from "./vendor-icons-e63d3118.js";
import { _ as Je } from "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const we = [
        ["like", "喜欢"],
        ["thanks", "感谢"],
        ["more", "催更"],
        ["love", "表白"],
        ["flower", "送花"],
    ],
    In =
        "M0 3.2C-3.6 0.4 -6 -2.2 -4.3 -4.6C-3 -6.4 -0.9 -6 0 -4C0.9 -6 3 -6.4 4.3 -4.6C6 -2.2 3.6 0.4 0 3.2Z",
    ls = ({ x: s, y: n, s: t = 1, r = 0, fill: c, stroke: a, sw: i = 2.2, className: l = "" }) =>
        e.jsx("g", {
            className: l,
            transform: `translate(${s} ${n}) rotate(${r}) scale(${t})`,
            children: e.jsx("path", {
                d: In,
                fill: c,
                stroke: a,
                strokeWidth: a ? i / t : 0,
                strokeLinejoin: "round",
            }),
        }),
    K = Qn,
    la = "#e6e6e3",
    _e = "#3a3a38",
    Js = 0.56,
    oa = `translate(${50 - 60 * Js} 4.8) scale(${Js})`;
function ma({ eyes: s = "dot" }) {
    return e.jsxs("g", {
        transform: oa,
        children: [
            e.jsxs("g", {
                fill: K,
                stroke: K,
                strokeWidth: "6.4",
                strokeLinejoin: "round",
                children: [
                    e.jsx("g", { className: "bx-earl", children: e.jsx("path", { d: de.earL }) }),
                    e.jsx("g", { className: "bx-earr", children: e.jsx("path", { d: de.earR }) }),
                    e.jsx("path", { d: de.head }),
                ],
            }),
            e.jsxs("g", {
                fill: "#fff",
                children: [
                    e.jsx("g", { className: "bx-earl", children: e.jsx("path", { d: de.earL }) }),
                    e.jsx("g", { className: "bx-earr", children: e.jsx("path", { d: de.earR }) }),
                ],
            }),
            e.jsx("path", { d: de.head, fill: "#fff" }),
            s === "dot"
                ? e.jsxs(e.Fragment, {
                      children: [
                          e.jsx("ellipse", { cx: "44", cy: "88", rx: "3.1", ry: "3.3", fill: K }),
                          e.jsx("ellipse", { cx: "76", cy: "88", rx: "3.1", ry: "3.3", fill: K }),
                      ],
                  })
                : e.jsx("path", {
                      d: "M39.6 89.4q4.4-4.6 8.8 0M71.6 89.4q4.4-4.6 8.8 0",
                      fill: "none",
                      stroke: K,
                      strokeWidth: "3",
                      strokeLinecap: "round",
                  }),
            e.jsx("path", { d: de.mouth, fill: "none", stroke: K, strokeWidth: "3", strokeLinecap: "round" }),
        ],
    });
}
function Ie({ bow: s = !1, eyes: n = "dot", front: t = null, back: r = null }) {
    return e.jsx("g", {
        transform: "translate(0 12)",
        children: e.jsxs("g", {
            className: "bx-body",
            children: [
                r,
                e.jsx("g", {
                    className: "bx-head",
                    transform: s ? "rotate(-8 50 64)" : void 0,
                    children: e.jsx(ma, { eyes: n }),
                }),
                t,
            ],
        }),
    });
}
const ce = ({ x: s, y: n, r: t = 0 }) =>
        e.jsx("ellipse", {
            cx: s,
            cy: n,
            rx: "3.5",
            ry: "2.9",
            transform: t ? `rotate(${t} ${s} ${n})` : void 0,
            fill: "#fff",
            stroke: K,
            strokeWidth: "1.8",
        }),
    Xs = {
        like: () =>
            e.jsx(Ie, {
                front: e.jsxs("g", {
                    className: "bx-act bx-beat",
                    children: [
                        e.jsx(ls, { x: 50, y: 74.5, s: 1.7, fill: _e }),
                        e.jsx(ce, { x: 41.6, y: 75, r: -20 }),
                        e.jsx(ce, { x: 58.4, y: 75, r: 20 }),
                    ],
                }),
            }),
        thanks: () =>
            e.jsx(Ie, {
                bow: !0,
                eyes: "happy",
                front: e.jsxs("g", {
                    className: "bx-act",
                    children: [
                        e.jsx(ce, { x: 46.8, y: 72.5, r: -25 }),
                        e.jsx(ce, { x: 53.2, y: 72.5, r: 25 }),
                        e.jsx("path", {
                            d: "M73 26q3 2 2 6M78 32q2.4 1.6 1.6 4.8",
                            fill: "none",
                            stroke: K,
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                        }),
                    ],
                }),
            }),
        more: () =>
            e.jsx(Ie, {
                front: e.jsxs("g", {
                    className: "bx-act bx-wave",
                    children: [
                        e.jsx("path", {
                            d: "M66.6 84L71.6 42",
                            stroke: K,
                            strokeWidth: "1.9",
                            strokeLinecap: "round",
                        }),
                        e.jsx("circle", { cx: "72.6", cy: "33.6", r: "11", fill: _e }),
                        e.jsx("text", {
                            x: "72.6",
                            y: "38",
                            textAnchor: "middle",
                            fontSize: "12.5",
                            fontWeight: "700",
                            fill: "#fff",
                            fontFamily: "-apple-system, 'PingFang SC', sans-serif",
                            children: "更",
                        }),
                        e.jsx(ce, { x: 66.4, y: 70, r: 10 }),
                    ],
                }),
            }),
        love: () =>
            e.jsx(Ie, {
                front: e.jsxs("g", {
                    className: "bx-act",
                    children: [
                        e.jsxs("g", {
                            className: "bx-letter",
                            children: [
                                e.jsx("rect", {
                                    x: "39.5",
                                    y: "67",
                                    width: "21",
                                    height: "14.5",
                                    rx: "2",
                                    fill: "#fff",
                                    stroke: K,
                                    strokeWidth: "1.8",
                                }),
                                e.jsx("path", {
                                    d: "M40 67.8L50 75.6l10-7.8",
                                    fill: "none",
                                    stroke: K,
                                    strokeWidth: "1.6",
                                    strokeLinejoin: "round",
                                }),
                                e.jsx(ls, { x: 50, y: 76.4, s: 0.6, fill: _e }),
                            ],
                        }),
                        e.jsx(ce, { x: 40, y: 75.5, r: -15 }),
                        e.jsx(ce, { x: 60, y: 75.5, r: 15 }),
                        e.jsx("g", {
                            className: "bx-heartfloat",
                            children: e.jsx(ls, { x: 75, y: 24, s: 1, r: 12, fill: _e }),
                        }),
                    ],
                }),
            }),
        flower: () =>
            e.jsx(Ie, {
                front: e.jsxs("g", {
                    className: "bx-act bx-give",
                    children: [
                        e.jsx("path", {
                            d: "M68.6 50.5L73.4 58M64.6 50L66.4 60",
                            stroke: K,
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                        }),
                        e.jsx("path", {
                            d: "M71.6 44.6c-2.6-4.6 0-7.8 2.4-5.2 2-3.2 5.4-1.6 4 3.2-1 3.4-5.4 4.6-6.4 2z",
                            fill: la,
                            stroke: K,
                            strokeWidth: "1.6",
                            strokeLinejoin: "round",
                        }),
                        e.jsx("path", {
                            d: "M60.6 44c-1.6-4.8 1.4-7.4 3.4-4.4 2.4-2.8 5.4-.6 3.4 3.8-1.4 3.2-6 3.4-6.8.6z",
                            fill: "#fff",
                            stroke: K,
                            strokeWidth: "1.6",
                            strokeLinejoin: "round",
                        }),
                        e.jsx("path", {
                            d: "M60 56.5L74.5 54.5L69 74.5Z",
                            fill: "#fff",
                            stroke: K,
                            strokeWidth: "1.7",
                            strokeLinejoin: "round",
                        }),
                        e.jsx(ce, { x: 66, y: 69, r: 10 }),
                    ],
                }),
            }),
    };
function Fe({ kind: s, size: n = 40 }) {
    const t = Xs[s] || Xs.like;
    return e.jsx("svg", {
        className: `bx bx-${s}`,
        width: n,
        height: n,
        viewBox: "0 0 100 100",
        "aria-hidden": "true",
        children: e.jsx(t, {}),
    });
}
const da = { like: "heart", love: "heart", flower: "petal", thanks: "dot", more: "bang" };
function En({ kind: s }) {
    const n = da[s];
    return e.jsx("span", {
        className: "bx-burst",
        "aria-hidden": "true",
        children: [-1, 0, 1].map((t, r) => {
            const c = { "--dx": `${t * 16}px`, "--rot": `${t * 18}deg`, "--d": `${r * 60}ms` };
            return n === "heart"
                ? e.jsx(
                      "svg",
                      {
                          className: "bx-pt",
                          style: c,
                          viewBox: "-7 -7 14 11",
                          width: "11",
                          height: "9",
                          children: e.jsx("path", { d: In, fill: "currentColor" }),
                      },
                      r,
                  )
                : n === "petal"
                  ? e.jsx(
                        "svg",
                        {
                            className: "bx-pt",
                            style: c,
                            viewBox: "0 0 10 14",
                            width: "8",
                            height: "11",
                            children: e.jsx("path", {
                                d: "M5 0C10 3.5 10 10.5 5 14C0 10.5 0 3.5 5 0Z",
                                fill: "currentColor",
                            }),
                        },
                        r,
                    )
                  : n === "bang"
                    ? e.jsx("span", { className: "bx-pt bx-pt-t", style: c, children: "!" }, r)
                    : e.jsx("span", { className: "bx-pt bx-pt-dot", style: c }, r);
        }),
    });
}
function Mn() {
    const [s, n] = g.useState(0),
        t = g.useRef(null);
    return (
        g.useEffect(() => () => clearTimeout(t.current), []),
        [
            s,
            () => {
                (n((c) => c + 1), clearTimeout(t.current), (t.current = setTimeout(() => n(0), 1100)));
            },
        ]
    );
}
function ha({ kind: s, label: n, on: t, count: r, onToggle: c }) {
    const [a, i] = Mn();
    return e.jsxs("button", {
        type: "button",
        className: `bxc ${t ? "on" : ""} ${a ? "popping" : ""}`,
        "aria-pressed": t,
        "aria-label": n,
        onClick: (l) => {
            (l.stopPropagation(), t || i(), c == null || c());
        },
        children: [
            e.jsxs(
                "span",
                {
                    className: "bxc-stage",
                    children: [e.jsx(Fe, { kind: s, size: 44 }), a > 0 && e.jsx(En, { kind: s })],
                },
                a,
            ),
            e.jsx("span", { className: "bxc-label", children: n }),
            e.jsx("em", { className: "bxc-n", children: r > 0 ? r : "" }),
        ],
    });
}
function ua({
    reactions: s = {},
    mine: n = [],
    onToggle: t,
    full: r = !1,
    extra: c = null,
    legacy: a = null,
}) {
    const i = new Set(n);
    return r
        ? e.jsxs("div", {
              className: "bxbar full",
              onClick: (l) => l.stopPropagation(),
              children: [
                  e.jsx("div", {
                      className: "bxc-row",
                      children: we.map(([l, u]) =>
                          e.jsx(
                              ha,
                              {
                                  kind: l,
                                  label: u,
                                  on: i.has(l),
                                  count: s[l] || 0,
                                  onToggle: () => (t == null ? void 0 : t(l)),
                              },
                              l,
                          ),
                      ),
                  }),
                  a,
              ],
          })
        : e.jsx(xa, { reactions: s, mineSet: i, onToggle: t, extra: c, legacy: a });
}
function xa({ reactions: s, mineSet: n, onToggle: t, extra: r, legacy: c }) {
    var F, T;
    const [a, i] = g.useState(!1),
        [l, u] = g.useState(""),
        [o, h] = g.useState(""),
        [m, x] = Mn(),
        d = g.useRef(null);
    g.useEffect(() => {
        if (!a) return;
        const y = (w) => {
            var E;
            ((E = d.current) != null && E.contains(w.target)) || i(!1);
        };
        return (
            document.addEventListener("pointerdown", y, !0),
            () => document.removeEventListener("pointerdown", y, !0)
        );
    }, [a]);
    const p = we.reduce((y, [w]) => y + (s[w] || 0), 0),
        k = we
            .filter(([y]) => s[y] > 0)
            .sort((y, w) => s[w[0]] - s[y[0]])
            .slice(0, 3),
        C = we.filter(([y]) => n.has(y)),
        P = o && n.has(o) ? o : ((F = C[C.length - 1]) == null ? void 0 : F[0]) || "",
        I = (y) => {
            const w = !n.has(y);
            (i(!1), u(""), w && (h(y), x()), t == null || t(y));
        };
    return e.jsxs("div", {
        className: "bxbar",
        ref: d,
        onClick: (y) => y.stopPropagation(),
        children: [
            p > 0 &&
                e.jsxs("span", {
                    className: "bxsum",
                    "aria-label": `${p} 人表态`,
                    children: [
                        e.jsx("span", {
                            className: "bxsum-stack",
                            children: k.map(([y]) =>
                                e.jsx("i", { children: e.jsx(Fe, { kind: y, size: 20 }) }, y),
                            ),
                        }),
                        e.jsx("b", { children: p }),
                    ],
                }),
            e.jsxs("span", {
                className: "bxpill-wrap",
                children: [
                    e.jsxs("button", {
                        type: "button",
                        className: `bxpill ${P ? "on" : ""} ${m ? "popping" : ""}`,
                        onClick: () => i((y) => !y),
                        "aria-expanded": a,
                        children: [
                            e.jsxs(
                                "span",
                                {
                                    className: "bxpill-ic",
                                    children: [
                                        e.jsx(Fe, { kind: P || "like", size: 22 }),
                                        m > 0 && P && e.jsx(En, { kind: P }),
                                    ],
                                },
                                m,
                            ),
                            P ? ((T = we.find(([y]) => y === P)) == null ? void 0 : T[1]) : "表态",
                        ],
                    }),
                    a &&
                        e.jsx("span", {
                            className: "bxtray",
                            role: "menu",
                            onPointerLeave: () => u(""),
                            children: we.map(([y, w], E) =>
                                e.jsxs(
                                    "button",
                                    {
                                        type: "button",
                                        role: "menuitemcheckbox",
                                        "aria-checked": n.has(y),
                                        "aria-label": w,
                                        className: `bxtray-i ${l === y ? "hot" : ""} ${n.has(y) ? "on" : ""}`,
                                        style: { "--i": E },
                                        onPointerEnter: () => u(y),
                                        onPointerDown: () => u(y),
                                        onClick: () => I(y),
                                        children: [
                                            e.jsx("span", { className: "bxtray-tip", children: w }),
                                            e.jsx(Fe, { kind: y, size: 38 }),
                                        ],
                                    },
                                    y,
                                ),
                            ),
                        }),
                ],
            }),
            c,
            r && e.jsx("span", { className: "bxbar-r", children: r }),
        ],
    });
}
const B = (s) => new TextEncoder().encode(s),
    An = (s) => new TextDecoder().decode(s),
    Rn = (s) => s.category || "未分类";
function fa(s) {
    let n = "";
    for (let t = 0; t < s.length; t += 32768) n += String.fromCharCode.apply(null, s.subarray(t, t + 32768));
    return btoa(n);
}
function ja(s) {
    var r, c;
    const n = (a) => (Array.isArray(a) ? a : []),
        t = {};
    for (const a of n(s == null ? void 0 : s.worldbook)) (t[(r = Rn(a))] || (t[r] = [])).push(a);
    return [
        {
            kind: "chatCss",
            items: ks(s).presets.map((a) => ({
                id: a.id,
                name: a.name || "未命名美化",
                sub: a.target === "imessage" ? "iMessage" : "微信",
            })),
        },
        {
            kind: "offline",
            items: [
                ...n(s == null ? void 0 : s.offlineSchemes).map((a) => ({
                    id: a.id,
                    name: a.name || "未命名线下美化",
                    sub: "美化方案",
                })),
                ...n(s == null ? void 0 : s.offlineFloorCss).map((a) => ({
                    id: `floor:${a.id}`,
                    name: a.name || "未命名楼层 CSS",
                    sub: "楼层 CSS",
                })),
            ],
        },
        {
            kind: "status",
            items: n(s == null ? void 0 : s.offlineStatusPresets)
                .filter((a) => !a.builtin)
                .map((a) => ({ id: a.id, name: a.name || "未命名状态栏" })),
        },
        {
            kind: "thought",
            items: n(s == null ? void 0 : s.thoughtPresets).map((a) => ({
                id: a.id,
                name: a.name || "未命名心声",
            })),
        },
        { kind: "stickers", items: ga(s).map(([a, i]) => ({ id: `cat:${a}`, name: a, sub: `${i} 张` })) },
        {
            kind: "char",
            items: n(s == null ? void 0 : s.characters).map((a) => ({
                id: a.id,
                name: ue(a) || "未命名角色",
                sub: a.signature || "",
                avatar: a.avatar || "",
            })),
        },
        {
            kind: "world",
            items: Object.entries(t).map(([a, i]) => ({
                id: `book:${a}`,
                name: a,
                sub: `${i.length} 条 · ${pa(s, i)}`,
            })),
        },
        {
            kind: "xpreset",
            items: n((c = ps(s)) == null ? void 0 : c.presets).map((a) => ({
                id: a.id,
                name: a.name || "未命名预设",
            })),
        },
        { kind: "promptset", items: Ln(xn).map((a) => ({ id: a.id, name: a.name, sub: As(a) })) },
        {
            kind: "thinkchain",
            items: n(s == null ? void 0 : s.thinkChainPresets).map((a) => ({
                id: a.id,
                name: a.name || "未命名思维链",
                sub: a.desc || "",
            })),
        },
        {
            kind: "imagepreset",
            items: n(bs(s).presets).map((a) => ({
                id: a.id,
                name: a.name,
                sub: a.kind === "nai" ? "NAI" : "GPT",
            })),
        },
        { kind: "novelpreset", items: _n(s).map((a) => ({ id: a.id, name: a.name, sub: On[a.type] })) },
        { kind: "listCss", items: mn(s).presets.map((a) => ({ id: a.id, name: a.name })) },
        { kind: "decor", items: dn(s).own.map((a) => ({ id: a.id, name: a.name })) },
        { kind: "interview", items: hn(s).own.map((a) => ({ id: a.id, name: a.name, sub: a.mast })) },
        {
            kind: "htmlpreset",
            items: Bn(s).map((a) => ({ id: a.id, name: a.name, sub: a.builtin ? "改过的内置" : "" })),
        },
        { kind: "desktop", items: gs().map((a) => ({ id: a.id, name: a.name || "我的桌面" })) },
        {
            kind: "widget",
            items: Rs().map((a) => ({
                id: a.id,
                name: a.name || "未命名组件",
                sub: a.w && a.h ? `${a.w}×${a.h}` : "",
            })),
        },
    ].filter((a) => a.items.length);
}
function pa(s, n) {
    if (n.some((c) => (c.allFor || []).length || (!c.allFor && !(c.charIds || []).length)))
        return "绑定给所有角色";
    const r = [...new Set(n.flatMap((c) => c.charIds || []))]
        .map((c) => ((s == null ? void 0 : s.characters) || []).find((a) => a.id === c))
        .filter(Boolean)
        .map((c) => ue(c));
    return r.length
        ? `绑定给${r.slice(0, 2).join("、")}${r.length > 2 ? ` 等 ${r.length} 人` : ""}`
        : "仅自己使用";
}
const On = { world: "世界观", style: "文风", scene: "剧场情境" };
function _n(s) {
    const n = tn(s);
    return [
        ...n.worlds.map((t) => ({ ...t, type: "world" })),
        ...n.styles.map((t) => ({ ...t, type: "style" })),
        ...n.scenes.map((t) => ({ ...t, type: "scene" })),
    ];
}
const Ln = (s) => {
        try {
            return s() || [];
        } catch {
            return [];
        }
    },
    As = (s) =>
        [
            `关了 ${Object.values(s.table || {}).filter((n) => n.off).length} 个`,
            `改了 ${Object.values(s.table || {}).filter((n) => n.text).length} 个`,
            (s.custom || []).length ? `${s.custom.length} 个自建` : "",
        ]
            .filter(Boolean)
            .join(" · ");
function ga(s) {
    var t;
    const n = new Map();
    for (const r of Array.isArray((t = s == null ? void 0 : s.gallery) == null ? void 0 : t.stickers)
        ? s.gallery.stickers
        : []) {
        const c = r.category || "未分类";
        n.set(c, (n.get(c) || 0) + 1);
    }
    return [...n.entries()];
}
function Bn(s) {
    var n;
    return (
        Array.isArray((n = s == null ? void 0 : s.offline) == null ? void 0 : n.htmlPresets)
            ? s.offline.htmlPresets
            : []
    )
        .map(qe)
        .filter(Boolean)
        .map((t) => (ln.some((r) => r.id === t.id) ? { ...t, builtin: !0 } : t));
}
function Rs() {
    try {
        return (JSON.parse(localStorage.getItem(cn) || "[]") || []).filter((s) => Qe(s));
    } catch {
        return [];
    }
}
function Fn(s, n) {
    var c, a;
    if (n === "none") return null;
    if (n) {
        const i = We(s).find((l) => l.id === n);
        return i ? { id: i.id, name: i.name || "头像框", frames: un(i) } : null;
    }
    const t = (c = s == null ? void 0 : s.ui) == null ? void 0 : c.avatarFrame,
        r = ut(s, (s == null ? void 0 : s.ui) || {});
    return r
        ? typeof t == "string"
            ? {
                  id: t,
                  name: ((a = We(s).find((i) => i.id === t)) == null ? void 0 : a.name) || "头像框",
                  frames: r,
              }
            : { id: null, name: (t == null ? void 0 : t.name) || "临时修改", frames: r }
        : null;
}
async function ba(s, n, t, r = {}) {
    var i, l, u;
    const c = (o) => (Array.isArray(o) ? o : []),
        a = (o, h, m, x) => ({ kind: n, name: o, summary: h, mime: m, data: fa(x), size: x.length });
    switch (n) {
        case "chatCss": {
            const o = ks(s).presets.find((k) => k.id === t);
            if (!o) break;
            const h = Fn(s, r.frameId),
                m = h
                    ? await bt(
                          h.frames,
                          (
                              await Je(
                                  () => import("./app-2c902988.js").then((k) => k.nm),
                                  [
                                      "assets/app-2c902988.js",
                                      "assets/vendor-react-3a46a5d3.js",
                                      "assets/vendor-7bc51c32.js",
                                      "assets/vendor-motion-62fc1664.js",
                                      "assets/vendor-icons-e63d3118.js",
                                      "assets/vendor-leaflet-f4c2a8c5.js",
                                      "assets/vendor-leaflet-4d8e306f.css",
                                      "assets/index-fdd52a35.css",
                                  ],
                              )
                          ).toDataUrl,
                      )
                    : null,
                { frames: x, ...d } = o,
                p = [
                    o.target === "imessage" ? "iMessage 预设" : "微信预设",
                    h ? `附带头像框「${h.name}」` : "",
                ]
                    .filter(Boolean)
                    .join(" · ");
            return {
                ...a(o.name, p, "text/css", B(fn({ ...d, frames: m }))),
                opts: { frameId: h ? h.id : "none" },
            };
        }
        case "offline": {
            if (String(t).startsWith("floor:")) {
                const d = c(s.offlineFloorCss).find((k) => k.id === String(t).slice(6));
                if (!d) break;
                const p = { name: d.name, floorCss: { name: d.name, css: d.css } };
                return a(d.name, Ke(p), "application/json", B(Be(p)));
            }
            const o = c(s.offlineSchemes).find((d) => d.id === t);
            if (!o) break;
            const h = gt(s.offlineStatusPresets),
                m = c(o.status),
                x = {
                    name: o.name,
                    scheme: !0,
                    globalCss: o.css,
                    theme: o.theme,
                    statusMode: o.statusMode,
                    statusBuiltin: m.filter((d) => /^sb_/.test(d) && h.some((p) => p.id === d && p.builtin)),
                    statusPresets: h.filter((d) => !d.builtin && m.includes(d.id)),
                };
            return a(o.name, Ke(x), "application/json", B(Be(x)));
        }
        case "status": {
            const o = c(s.offlineStatusPresets).find((m) => m.id === t && !m.builtin);
            if (!o) break;
            const h = { name: o.name, statusPresets: [o] };
            return a(o.name, "状态栏预设", "application/json", B(Be(h)));
        }
        case "promptset": {
            const o = Ln(xn).find((h) => h.id === t);
            if (!o) break;
            return a(o.name, As(o), "application/json", B(G("promptset", o.name, [o], Ps)));
        }
        case "thinkchain": {
            const o = c(s.thinkChainPresets).find((h) => h.id === t);
            if (!o) break;
            return a(
                o.name,
                "思维链预设",
                "application/json",
                B(
                    G(
                        "thinkchain",
                        o.name,
                        [{ id: o.id, name: o.name, prompt: o.prompt, ...(o.desc ? { desc: o.desc } : null) }],
                        De,
                    ),
                ),
            );
        }
        case "imagepreset": {
            const o = c(bs(s).presets).find((h) => h.id === t);
            if (!o) break;
            return a(
                o.name,
                o.kind === "nai" ? "NAI 生图预设" : "GPT 生图预设",
                "application/json",
                B(G("imagepreset", o.name, [o], $s)),
            );
        }
        case "listCss": {
            const o = mn(s).presets.find((h) => h.id === t);
            if (!o) break;
            return a(o.name, "消息页样式", "application/json", B(G("listcss", o.name, [o], ys)));
        }
        case "decor": {
            const o = dn(s).own.find((h) => h.id === t);
            if (!o) break;
            return a(o.name, "自定义装饰卡", "application/json", B(G("decor", o.name, [o], Ns)));
        }
        case "interview": {
            const o = hn(s).own.find((h) => h.id === t);
            if (!o) break;
            return a(
                o.name,
                o.mast ? `专访风格 · ${o.mast}` : "专访风格",
                "application/json",
                B(G("interview", o.name, [o], ws)),
            );
        }
        case "novelpreset": {
            const o = _n(s).find((h) => h.id === t);
            if (!o) break;
            return a(o.name, `${On[o.type]}预设`, "application/json", B(G("novelpreset", o.name, [o], vs)));
        }
        case "htmlpreset": {
            const o = Bn(s).find((h) => h.id === t);
            if (!o) break;
            return a(o.name, o.hint || "HTML 卡片", "application/json", B(G("htmlpreset", o.name, [o], qe)));
        }
        case "widget": {
            const o = Rs().find((h) => h.id === t);
            if (!o) break;
            return a(
                o.name || "桌面组件",
                o.w && o.h ? `${o.w}×${o.h}` : "自定义组件",
                "application/json",
                B(G("widget", o.name, [o], Qe)),
            );
        }
        case "desktop": {
            const o = gs().find((x) => x.id === t);
            if (!o) break;
            const h = await pt(o.name, o.config),
                m = Object.keys(h.assets).length;
            return a(
                o.name || "我的桌面",
                `${(((i = o.config) == null ? void 0 : i.pages) || []).length} 页${m ? ` · 带 ${m} 张图` : ""}`,
                "application/json",
                B(JSON.stringify(h)),
            );
        }
        case "stickers": {
            const o = String(t).replace(/^cat:/, ""),
                h = jt((l = s == null ? void 0 : s.gallery) == null ? void 0 : l.stickers, { cats: [o] });
            if (!h.length) break;
            const m = await Je(
                    () => import("./app-2c902988.js").then((p) => p.nn),
                    [
                        "assets/app-2c902988.js",
                        "assets/vendor-react-3a46a5d3.js",
                        "assets/vendor-7bc51c32.js",
                        "assets/vendor-motion-62fc1664.js",
                        "assets/vendor-icons-e63d3118.js",
                        "assets/vendor-leaflet-f4c2a8c5.js",
                        "assets/vendor-leaflet-4d8e306f.css",
                        "assets/index-fdd52a35.css",
                    ],
                ),
                x = await m.exportRows(h),
                d = await m.packPngBytes(o, x, m.bindingsByName(s, [o]));
            return a(o, `${x.length} 张表情`, "image/png", d);
        }
        case "thought": {
            const o = c(s.thoughtPresets).find((h) => h.id === t);
            if (!o) break;
            return a(
                o.name,
                `${c(o.fields).length} 个字段`,
                "application/json",
                B(G("thought", o.name, [o], Ss)),
            );
        }
        case "xpreset": {
            const o = c((u = ps(s)) == null ? void 0 : u.presets).find((m) => m.id === t),
                h = o && ft(o);
            if (!h) break;
            return a(
                o.name,
                `${h.cast.length} 个角色位 · ${h.npcs.length} 个 NPC 号`,
                "application/json",
                B(G("xpreset", o.name, [h], Cs)),
            );
        }
        case "char": {
            const o = c(s.characters).find((p) => p.id === t);
            if (!o) break;
            const h = { ...o, ...(r.edits || {}) },
                m = String(h.persona || h.description || "").length,
                x = c(s.worldbook).filter((p) => (r.worldbookIds || []).includes(p.id)),
                d = [
                    m ? `人设 ${m >= 1e3 ? `${(m / 1e3).toFixed(1)}k` : m} 字` : "角色卡",
                    x.length ? `世界书 ${x.length} 条` : "",
                ]
                    .filter(Boolean)
                    .join(" · ");
            return {
                ...a(ue(h), d, "image/png", await xt(s, h, { worldbook: x, avatar: r.avatar })),
                opts: r,
            };
        }
        case "world": {
            const o = String(t).replace(/^book:/, ""),
                h = c(s.worldbook)
                    .filter((m) => Rn(m) === o)
                    .map(({ id: m, charIds: x, allFor: d, ...p }) => ({ ...p, category: o }));
            if (!h.length) break;
            return a(o, `${h.length} 条`, "application/json", B(JSON.stringify(h, null, 2)));
        }
    }
    throw new Error("这份内容在本机找不到了");
}
async function Vs(s, n, { state: t, patch: r, addCharacter: c, patchChar: a }) {
    var l, u, o, h;
    const i = () => An(n);
    switch (s.kind) {
        case "chatCss": {
            const m = on(i(), { filename: `${s.name}.css` }),
                x = dt(m.css) || m.target || "wechat",
                d = m.frames
                    ? await ht(
                          m.frames,
                          (
                              await Je(
                                  () => import("./app-2c902988.js").then((k) => k.nm),
                                  [
                                      "assets/app-2c902988.js",
                                      "assets/vendor-react-3a46a5d3.js",
                                      "assets/vendor-7bc51c32.js",
                                      "assets/vendor-motion-62fc1664.js",
                                      "assets/vendor-icons-e63d3118.js",
                                      "assets/vendor-leaflet-f4c2a8c5.js",
                                      "assets/vendor-leaflet-4d8e306f.css",
                                      "assets/index-fdd52a35.css",
                                  ],
                              )
                          ).putDataUrl,
                      )
                    : null,
                p = m.name || s.name || "导入的头像框";
            return (
                r((k) => {
                    const C = ks(k);
                    return {
                        chatCss: {
                            ...(k.chatCss || {}),
                            ...C,
                            presets: [
                                ...C.presets,
                                {
                                    id: W("css_"),
                                    name: m.name || s.name,
                                    target: x,
                                    css: m.css,
                                    updatedAt: Date.now(),
                                    ...(m.look ? { look: m.look } : null),
                                },
                            ],
                        },
                        ...(d
                            ? {
                                  avatarFramePresets: [
                                      ...We(k),
                                      { id: W("afp_"), name: p, ...d, updatedAt: Date.now() },
                                  ],
                              }
                            : null),
                    };
                }),
                `已加到聊天外观的${x === "imessage" ? " iMessage " : "微信"}预设里${d ? `；附带的头像框存进了头像框库：「${p}」` : ""}`
            );
        }
        case "offline": {
            const m = Ee(i()),
                x = m.statusPresets.map(() => W("sbp_")),
                d = m.floorCss ? W("flc_") : null,
                p = m.scheme ? W("ofs_") : null;
            return (
                r((k) => ({
                    ...(x.length
                        ? {
                              offlineStatusPresets: [
                                  ...(k.offlineStatusPresets || []),
                                  ...m.statusPresets.map((C, P) => ({
                                      ...C,
                                      id: x[P],
                                      createdAt: Date.now(),
                                  })),
                              ],
                          }
                        : {}),
                    ...(d
                        ? {
                              offlineFloorCss: [
                                  ...(k.offlineFloorCss || []),
                                  {
                                      id: d,
                                      name: m.floorCss.name,
                                      css: m.floorCss.css,
                                      updatedAt: Date.now(),
                                  },
                              ],
                          }
                        : {}),
                    ...(p
                        ? {
                              offlineSchemes: [
                                  ...(k.offlineSchemes || []),
                                  {
                                      ...mt({
                                          name: m.name,
                                          css: m.globalCss,
                                          theme: m.theme,
                                          status: [...m.statusBuiltin, ...x],
                                          statusMode: m.statusMode,
                                      }),
                                      id: p,
                                      createdAt: Date.now(),
                                  },
                              ],
                          }
                        : {}),
                })),
                "已加到线下美化库，在某个人的线下设置里选用"
            );
        }
        case "status": {
            const m = Ee(i());
            if (!m.statusPresets.length) throw new Error("里面没有状态栏预设");
            return (
                r((x) => ({
                    offlineStatusPresets: [
                        ...(x.offlineStatusPresets || []),
                        ...m.statusPresets.map((d) => ({ ...d, id: W("sbp_"), createdAt: Date.now() })),
                    ],
                })),
                "已加到状态栏预设里，在某个人的线下设置里选用"
            );
        }
        case "promptset": {
            const { items: m } = R(i(), { wantKind: "promptset", normalize: Ps });
            return (ot(m), "已加到提示词预设里，在设置 → 提示词里点一下应用");
        }
        case "thinkchain": {
            const { items: m } = R(i(), { wantKind: "thinkchain", normalize: De }),
                x = m
                    .map((d) => De(d))
                    .filter(Boolean)
                    .map((d) => ({ ...d, id: W("tc_"), createdAt: Date.now() }));
            return (
                r((d) => ({ thinkChainPresets: [...(d.thinkChainPresets || []), ...x].slice(-50) })),
                "已加到思考链预设里，在聊天设置 → 思考链预设里选用"
            );
        }
        case "imagepreset": {
            const { items: m } = R(i(), { wantKind: "imagepreset", normalize: $s });
            return (
                r((x) => {
                    const d = bs(x),
                        p = [
                            ...(d.presets || []),
                            ...m.map((k) => ({ ...k, kind: k.kind || "gpt", id: W("ip_") })),
                        ];
                    return { api: { ...x.api, image: { ...d, presets: p.slice(-50) } } };
                }),
                "已加到生图预设里，在设置 → 模型与 API → 生图里选用"
            );
        }
        case "htmlpreset": {
            const { items: m } = R(i(), { wantKind: "htmlpreset", normalize: qe });
            return (
                r((x) => {
                    var p;
                    const d = [...(((p = x.offline) == null ? void 0 : p.htmlPresets) || [])];
                    for (const k of m) {
                        const C = ln.find((I) => I.name === k.name),
                            P = C ? C.id : `hp${Math.random().toString(36).slice(2, 8)}`;
                        d.splice(0, d.length, ...d.filter((I) => I.id !== P), { ...k, id: P });
                    }
                    return { offline: { ...(x.offline || {}), htmlPresets: d } };
                }),
                "已加到线下 HTML 预设里"
            );
        }
        case "widget": {
            const { items: m } = R(i(), { wantKind: "widget", normalize: Qe }),
                x = [
                    ...m.map((d) => ({
                        ...d,
                        id: `wp_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
                    })),
                    ...Rs(),
                ];
            try {
                localStorage.setItem(cn, JSON.stringify(x));
            } catch {
                throw new Error("本机存不下了");
            }
            return (
                window.dispatchEvent(new Event(Ws)),
                "已加到桌面组件预设里，编辑桌面时「添加组件」能找到"
            );
        }
        case "desktop": {
            const m = await it(JSON.parse(i()), s.name),
                x = [...gs(), { id: `dp_${Date.now().toString(36)}`, name: m.name, config: m.config }];
            try {
                localStorage.setItem(lt, JSON.stringify(x));
            } catch {
                throw new Error("本机存不下了（桌面预设里的图片比较大）");
            }
            return (window.dispatchEvent(new Event(Ws)), "已存成桌面预设，在设置 → 墙纸与桌面里点一下就能用");
        }
        case "stickers": {
            const m = an(rn(n, null)),
                x = await Je(
                    () => import("./app-2c902988.js").then((p) => p.nn),
                    [
                        "assets/app-2c902988.js",
                        "assets/vendor-react-3a46a5d3.js",
                        "assets/vendor-7bc51c32.js",
                        "assets/vendor-motion-62fc1664.js",
                        "assets/vendor-icons-e63d3118.js",
                        "assets/vendor-leaflet-f4c2a8c5.js",
                        "assets/vendor-leaflet-4d8e306f.css",
                        "assets/index-fdd52a35.css",
                    ],
                ),
                d = await x.rowsToStickers(
                    m.rows,
                    ((l = t == null ? void 0 : t.gallery) == null ? void 0 : l.stickers) || [],
                );
            return d.length
                ? (r((p) => {
                      var k;
                      return {
                          gallery: {
                              ...(p.gallery || {}),
                              stickers: [
                                  ...(((k = p.gallery) == null ? void 0 : k.stickers) || []),
                                  ...d.map((C) => ({ id: W("st_"), ...C })),
                              ],
                          },
                          stickerBindings: x.mergeBindings(p, m.bindings),
                      };
                  }),
                  `已加到相册 · 表情包「${[...new Set(d.map((p) => p.category))].join("、")}」，共 ${d.length} 张`)
                : "这些表情已经都在相册里了";
        }
        case "thought": {
            const { items: m } = R(i(), { wantKind: "thought", normalize: Ss });
            return (
                r((x) => ({
                    thoughtPresets: [
                        ...(x.thoughtPresets || []),
                        ...m.map((d) => ({ ...d, id: W("tp_"), createdAt: Date.now() })),
                    ],
                })),
                "已加到心声预设里"
            );
        }
        case "xpreset": {
            const { items: m } = R(i(), { wantKind: "xpreset", normalize: Cs }),
                x = (t.characters || []).filter((d) => rt(d));
            return (
                r((d) => {
                    const p = ps(d);
                    return { x: { ...p, presets: ct(p.presets, m, { pool: x, nameOf: ue }) } };
                }),
                x.length
                    ? "已加到 X 论坛预设里，角色位已经对上本机的人"
                    : "已加到 X 论坛预设里，角色位进预设里选人"
            );
        }
        case "char": {
            const m = await at(new File([n], `${s.name}.card.png`, { type: "image/png" }), { tavern: !1 }),
                x =
                    m.greeting &&
                    !String(((u = m.char) == null ? void 0 : u.persona) || "").includes(m.greeting)
                        ? [
                              ((o = m.char) == null ? void 0 : o.persona) || "",
                              `【开场白】
${m.greeting}`,
                          ].filter(Boolean).join(`

`)
                        : (h = m.char) == null
                          ? void 0
                          : h.persona,
                d = c({
                    ...m.char,
                    ...(x ? { persona: x } : null),
                    ...(m.avatar ? { avatar: m.avatar } : null),
                    friend: {
                        status: "none",
                        removedBy: null,
                        met: !1,
                        since: 0,
                        updatedAt: Date.now(),
                        log: [],
                    },
                });
            if (m.book) {
                const p = m.book.bookName;
                r((k) => ({
                    worldbook: [
                        ...(k.worldbook || []),
                        ...m.book.entries.map((C) => ({
                            id: W("wb_"),
                            name: C.name,
                            body: C.body,
                            category: C.category || p,
                            charIds: [d.id],
                            depth: C.depth ?? 4,
                            role: "system",
                            enabled: C.enabled !== !1,
                            bindings: { online: !0, offline: !0, global: !1 },
                        })),
                    ],
                    worldbookCategories: [
                        ...new Set([
                            ...(k.worldbookCategories || ["未分类"]),
                            ...m.book.entries.map((C) => C.category || p),
                        ]),
                    ],
                }));
            }
            return `已添加到联系人「${ue(d) || s.name}」，去 LiToT 按号添加好友后就能聊天`;
        }
        case "world": {
            const m = js(`${s.name}.json`, JSON.parse(i()));
            if (!m.entries.length) throw new Error("这本世界书里没有能用的条目");
            const x = m.entries.map((p) => ({
                    id: W("wb_"),
                    name: p.name,
                    body: p.body,
                    category: p.category || m.bookName,
                    charIds: [],
                    allFor: [],
                    depth: p.depth ?? 4,
                    role: "system",
                    enabled: p.enabled !== !1,
                    bindings: p.bindings || { online: !0, offline: !0, global: !1 },
                })),
                d = [...new Set(x.map((p) => p.category))];
            return (
                r((p) => ({
                    worldbook: [...(p.worldbook || []), ...x],
                    worldbookCategories: [...new Set([...(p.worldbookCategories || ["未分类"]), ...d])],
                })),
                `已导入世界书「${m.bookName}」${x.length} 条，还没绑定给任何人`
            );
        }
        case "listCss": {
            const { items: m } = R(i(), { wantKind: "listcss", normalize: ys });
            return (
                r((x) => {
                    const d = x.listCss || {};
                    return {
                        listCss: {
                            ...d,
                            presets: [...(d.presets || []), ...m.map((p) => ({ ...p, id: W("lsp_") }))],
                        },
                    };
                }),
                "已加到消息页样式里，在 消息 → 我 → 装饰 中选用"
            );
        }
        case "decor": {
            const { items: m } = R(i(), { wantKind: "decor", normalize: Ns });
            return (
                r((x) => ({
                    decorPresets: [...(x.decorPresets || []), ...m.map((d) => ({ ...d, id: W("dcp_") }))],
                })),
                "已加到装饰卡样式里，在 消息 → 我 → 装饰 中选用"
            );
        }
        case "interview": {
            const { items: m } = R(i(), { wantKind: "interview", normalize: ws });
            return (
                r((x) => ({
                    interviewStyles: [
                        ...(x.interviewStyles || []),
                        ...m.map((d) => ({ ...d, id: W("ivst_") })),
                    ],
                })),
                "已加到专访风格里，在 关系 → 专访 → 风格 中选用"
            );
        }
        case "novelpreset": {
            const { items: m } = R(i(), { wantKind: "novelpreset", normalize: vs }),
                x = (d) => ({ ...d, id: void 0 });
            return (
                r((d) => {
                    const p = tn(d);
                    return {
                        novel: {
                            ...(d.novel || {}),
                            ...p,
                            worlds: [
                                ...p.worlds,
                                ...m
                                    .filter((k) => k.type === "world")
                                    .map((k) => st(x(k)))
                                    .filter(Boolean),
                            ],
                            styles: [
                                ...p.styles,
                                ...m
                                    .filter((k) => k.type === "style")
                                    .map((k) => nt(x(k)))
                                    .filter(Boolean),
                            ],
                            scenes: [
                                ...p.scenes,
                                ...m
                                    .filter((k) => k.type === "scene")
                                    .map((k) => tt(x(k)))
                                    .filter(Boolean),
                            ],
                        },
                    };
                }),
                "已加到阅读 → 同人 → 预设里，新建同人或剧场时可以选用"
            );
        }
        case "cast":
            throw new Error("群像卡要先预览再导入");
        default:
            return (await et(n, s.name, s.mime || "application/octet-stream", { fx: !1 }), "已下载");
    }
}
const _ = (s, n) => {
        const t = String(s || "")
            .replace(/\s+/g, " ")
            .trim();
        return t.length > n ? `${t.slice(0, n)}…` : t;
    },
    ee = (s, n = 14) => {
        const t = String(s || "").split(`
`);
        return (
            t.slice(0, n).join(`
`) +
            (t.length > n
                ? `
…（还有 ${t.length - n} 行）`
                : "")
        );
    };
function ka(s, n) {
    var t, r, c;
    try {
        const a = () => An(n);
        switch (s.kind) {
            case "char": {
                const { char: i, greeting: l, book: u } = vt(jn(n));
                return {
                    rows: [
                        i.signature && { t: "签名", s: _(i.signature, 60) },
                        i.persona && { t: "人设", s: _(i.persona, 160) },
                        l && { t: "开场白", s: _(l, 80) },
                        ((t = i.greetings) == null ? void 0 : t.length) > 0 && {
                            t: "开场白",
                            s: `${i.greetings.length} 条 · ${_(i.greetings[0].text, 60)}`,
                        },
                        u && { t: "附带世界书", s: `${u.entries.length} 条 · 导入后只绑给他` },
                    ].filter(Boolean),
                };
            }
            case "cast": {
                const i = ms(a()),
                    l = (u) => {
                        var o;
                        return ue((o = i.chars.find((h) => h.key === u)) == null ? void 0 : o.char);
                    };
                return {
                    tags: [
                        `${i.chars.length} 个人`,
                        `${i.bonds.length} 条关系`,
                        ...(i.entries.length ? [`${i.entries.length} 条世界书`] : []),
                    ],
                    rows: [
                        ...i.chars.map((u) => ({
                            t: ue(u.char),
                            s: _(u.char.signature || u.char.persona, 60) || "—",
                        })),
                        ...i.bonds.map((u) => ({
                            t: `${l(u.a)} × ${l(u.b)}`,
                            s: `${u.label ? `${u.label} · ` : ""}${kt(u.tension)} ${u.tension} · ${l(u.a)}${u.aKnows ? "知道" : "不知道"} / ${l(u.b)}${u.bKnows ? "知道" : "不知道"}`,
                        })),
                    ],
                };
            }
            case "world": {
                const i = js(`${s.name}.json`, JSON.parse(a()));
                return {
                    rows: i.entries.slice(0, 8).map((l) => ({ t: l.name, s: _(l.body, 60) })),
                    note: i.entries.length > 8 ? `还有 ${i.entries.length - 8} 条` : "",
                };
            }
            case "chatCss": {
                const i = on(a()),
                    l = (i.css.match(/\{/g) || []).length;
                return {
                    tags: [
                        i.target === "imessage" ? "iMessage" : "微信",
                        `${l} 条规则`,
                        ...(un(i.frames) ? ["附带头像框"] : []),
                    ],
                    code: ee(i.css),
                };
            }
            case "offline": {
                const i = Ee(a());
                return {
                    tags: Ke(i).split(" · ").filter(Boolean),
                    code: i.globalCss ? ee(i.globalCss) : i.floorCss ? ee(i.floorCss.css) : "",
                };
            }
            case "status": {
                const i = Ee(a());
                return {
                    tags: [`${i.statusPresets.length} 套状态栏`],
                    rows: i.statusPresets.map((l) => ({
                        t: l.name,
                        s: _(l.desc || l.hint || "", 60) || "—",
                    })),
                };
            }
            case "promptset": {
                const { items: i } = R(a(), { normalize: Ps }),
                    l = i[0];
                return {
                    tags: As(l).split(" · "),
                    rows: [
                        l.desc && { t: "说明", s: _(l.desc, 120) },
                        ...(l.custom || [])
                            .slice(0, 6)
                            .map((u) => ({
                                t: `自建 · ${u.name || u.title || "模块"}`,
                                s: _(u.text || u.body || "", 80),
                            })),
                    ].filter(Boolean),
                };
            }
            case "thinkchain": {
                const { items: i } = R(a(), { normalize: De }),
                    l = i[0];
                return {
                    tags: ["思维链"],
                    rows: [
                        l.desc && { t: "说明", s: _(l.desc, 120) },
                        { t: "这一步想什么", s: _(l.prompt, 400) },
                    ].filter(Boolean),
                };
            }
            case "imagepreset": {
                const { items: i } = R(a(), { normalize: $s }),
                    l = i[0],
                    u = [
                        ["gptPositive", "GPT 正面"],
                        ["gptNegative", "GPT 负面"],
                        ["naiPositive", "NAI 正面"],
                        ["naiNegative", "NAI 负面"],
                        ["naiArtists", "画师串"],
                        ["lookRules", "外貌规则"],
                        ["briefRules", "画面规则"],
                    ];
                return {
                    tags: [
                        l.kind === "nai" ? "NAI" : "GPT",
                        ...((r = l.vibes) != null && r.length ? [`${l.vibes.length} 张参考图`] : []),
                    ],
                    rows: u.filter(([o]) => l[o]).map(([o, h]) => ({ t: h, s: _(l[o], 100) })),
                };
            }
            case "listCss": {
                const { items: i } = R(a(), { normalize: ys });
                return { tags: ["消息页样式"], code: ee(i[0].css, 12) };
            }
            case "decor": {
                const { items: i } = R(a(), { normalize: Ns });
                return { tags: ["自定义装饰卡"], code: ee(i[0].html, 12) };
            }
            case "interview": {
                const { items: i } = R(a(), { normalize: ws }),
                    l = i[0];
                return {
                    tags: ["专访风格", ...(l.mast ? [l.mast] : [])],
                    rows: [l.prompt && { t: "风格提示词", s: _(l.prompt, 160) }].filter(Boolean),
                    code: l.css ? ee(l.css, 8) : void 0,
                };
            }
            case "novelpreset": {
                const { items: i } = R(a(), { normalize: vs }),
                    l = i[0];
                return l.type === "style"
                    ? { tags: ["文风"], rows: [{ t: "写法", s: _(l.rules, 160) }] }
                    : l.type === "scene"
                      ? {
                            tags: ["剧场情境"],
                            rows: [
                                { t: "情境", s: _(l.premise, 120) },
                                l.play && { t: "互动方式", s: _(l.play, 80) },
                            ].filter(Boolean),
                        }
                      : {
                            tags: ["世界观", ...(l.tags || []).slice(0, 3)],
                            rows: [
                                { t: "世界设定", s: _(l.world, 160) },
                                l.roles && { t: "人设映射", s: _(l.roles, 100) },
                                l.hooks && { t: "常见开端", s: _(l.hooks, 80) },
                            ].filter(Boolean),
                        };
            }
            case "htmlpreset": {
                const { items: i } = R(a(), { normalize: qe }),
                    l = i[0];
                return {
                    rows: [
                        l.hint && { t: "说明", s: l.hint },
                        l.prompt && { t: "给 TA 的写法", s: _(l.prompt, 100) },
                    ].filter(Boolean),
                    code: ee(l.html, 12),
                };
            }
            case "widget": {
                const { items: i } = R(a(), { normalize: Qe }),
                    l = i[0];
                return {
                    tags: [l.w && l.h ? `${l.w}×${l.h}` : "自定义组件"],
                    code: ee(l.html || l.css || "", 12),
                };
            }
            case "desktop": {
                const i = JSON.parse(a()),
                    l = ((c = i.config) == null ? void 0 : c.pages) || [];
                return {
                    tags: [`${l.length} 页`, `${Object.keys(i.assets || {}).length} 张图`],
                    rows: l.map((u, o) => ({
                        t: `第 ${o + 1} 页`,
                        s: `${u.filter((h) => String(h).startsWith("app:")).length} 个应用 · ${u.filter((h) => String(h).startsWith("widget:")).length} 个组件`,
                    })),
                };
            }
            case "stickers": {
                const i = an(rn(n, null)),
                    l = [...new Set(i.rows.map((u) => u.category))];
                return {
                    tags: [`${i.rows.length} 张`, ...l.slice(0, 3)],
                    rows: i.rows.slice(0, 8).map((u) => ({ t: u.name, s: u.note || u.category })),
                };
            }
            case "thought": {
                const { items: i } = R(a(), { normalize: Ss });
                return { rows: i[0].fields.map((l) => ({ t: l.tag, s: l.hint || "—" })) };
            }
            case "xpreset": {
                const { items: i } = R(a(), { normalize: Cs }),
                    l = i[0];
                return {
                    rows: [
                        l.world && { t: "世界观", s: _(l.world, 120) },
                        ...l.cast.map((u) => ({
                            t: `角色位 · ${u.slot || "未命名"}`,
                            s: _(u.role, 60) || "导入后自动对上本机的人",
                        })),
                        l.npcs.length && {
                            t: "NPC 号",
                            s: l.npcs.map((u) => u.name || `@${u.handle}`).join("、"),
                        },
                    ].filter(Boolean),
                };
            }
            default:
                return s.mime === "image/png" ? null : { code: ee(a()) };
        }
    } catch {
        return null;
    }
}
const va = 1280,
    qs = 480;
async function os(s, n, t) {
    const r = Math.min(1, n / Math.max(s.naturalWidth, s.naturalHeight)),
        c = Math.max(1, Math.round(s.naturalWidth * r)),
        a = Math.max(1, Math.round(s.naturalHeight * r)),
        i = document.createElement("canvas");
    ((i.width = c), (i.height = a));
    const l = i.getContext("2d");
    return (
        (l.fillStyle = "#fff"),
        l.fillRect(0, 0, c, a),
        l.drawImage(s, 0, 0, c, a),
        { dataUrl: i.toDataURL("image/jpeg", t), w: c, h: a }
    );
}
const Os = (s) =>
        new Promise((n, t) => {
            const r = new FileReader();
            ((r.onload = () => n(r.result)), (r.onerror = t), r.readAsDataURL(s));
        }),
    _s = (s) =>
        new Promise((n, t) => {
            const r = new Image();
            ((r.onload = () => n(r)), (r.onerror = () => t(new Error("这张图片打不开"))), (r.src = s));
        });
async function wa(s) {
    const n = await Os(s),
        t = await _s(n);
    if (s.type === "image/gif") {
        if (s.size > 600 * 1024) throw new Error("动图太大了（超过 600 KB）");
        const a = await os(t, qs, 0.7);
        return { full: n, thumb: a.dataUrl, w: t.naturalWidth, h: t.naturalHeight, preview: n };
    }
    const r = await os(t, va, 0.82),
        c = await os(t, qs, 0.7);
    return { full: r.dataUrl, thumb: c.dataUrl, w: r.w, h: r.h, preview: c.dataUrl };
}
async function Na(s) {
    const n = await _s(await Os(s)),
        t = 1080,
        r = 360,
        c = Math.max(t / n.naturalWidth, r / n.naturalHeight),
        a = t / c,
        i = r / c,
        l = document.createElement("canvas");
    ((l.width = t), (l.height = r));
    const u = l.getContext("2d");
    return (
        (u.fillStyle = "#fff"),
        u.fillRect(0, 0, t, r),
        u.drawImage(n, (n.naturalWidth - a) / 2, (n.naturalHeight - i) / 2, a, i, 0, 0, t, r),
        l.toDataURL("image/jpeg", 0.82)
    );
}
async function ya(s) {
    const n = await _s(await Os(s)),
        t = 256,
        r = Math.min(n.naturalWidth, n.naturalHeight),
        c = document.createElement("canvas");
    ((c.width = t), (c.height = t));
    const a = c.getContext("2d");
    return (
        (a.fillStyle = "#fff"),
        a.fillRect(0, 0, t, t),
        a.drawImage(n, (n.naturalWidth - r) / 2, (n.naturalHeight - r) / 2, r, r, 0, 0, t, t),
        c.toDataURL("image/jpeg", 0.85)
    );
}
const Ca = { listcss: "listCss" },
    he = (s) => new TextEncoder().encode(s),
    Sa = (s) => new TextDecoder().decode(s),
    Dn = (s) =>
        String(s || "")
            .replace(/\.(json|txt|css|png|html?)$/i, "")
            .trim();
function ie(s, n, t, r, c) {
    return !U[s] || s === "file"
        ? null
        : { kind: s, name: String(n || U[s].label).slice(0, 40), summary: t || "", mime: r, bytes: c };
}
function Wn(s, n) {
    const t = R(s),
        r = Ca[t.kind] || t.kind;
    return ie(
        r,
        t.name || n,
        t.items.length > 1 ? `${t.items.length} 份 · ${Ks[t.kind] || ""}` : Ks[t.kind] || "",
        "application/json",
        he(s),
    );
}
function Kn(s, n) {
    var c;
    const t = Be(s);
    if (!t) return null;
    const r = !s.scheme && !s.floorCss && ((c = s.statusPresets) == null ? void 0 : c.length);
    return ie(r ? "status" : "offline", s.name || n, Ke(s), "application/json", he(t));
}
function Un(s, n = "") {
    var a, i;
    const t = String(s || "").trim(),
        r = Dn(n);
    if (!t) return null;
    if (/^\s*\/\*\s*litot-chat-preset/.test(t))
        return ie(
            "chatCss",
            ((a = /name="([^"]*)"/.exec(t)) == null ? void 0 : a[1]) || r,
            /target=imessage/.test(t) ? "iMessage 预设" : "微信预设",
            "text/css",
            he(t),
        );
    if (!/^[[{]/.test(t)) return null;
    let c;
    try {
        c = JSON.parse(t);
    } catch {
        return null;
    }
    try {
        if ((c == null ? void 0 : c.format) === "litot-pack") return Wn(t, r);
    } catch {
        return null;
    }
    try {
        if ((c == null ? void 0 : c.format) === "litot-cast")
            return ie(
                "cast",
                c.name || r,
                `${(c.chars || []).length} 个人 · ${(c.bonds || []).length} 条关系`,
                "application/json",
                he(t),
            );
    } catch {}
    if ((c == null ? void 0 : c.format) === "litot-desktop-preset" && c.config)
        return ie("desktop", c.name || r, `${(c.config.pages || []).length} 页`, "application/json", he(t));
    if (
        c &&
        !Array.isArray(c) &&
        (c.format === $t || c.litotStatusPreset || (Array.isArray(c.fields) && c.fields.length))
    )
        try {
            return Kn(Ee(t, { filename: n }), r);
        } catch {
            return null;
        }
    try {
        const l = js(n || `${r}.json`, c);
        if ((i = l == null ? void 0 : l.entries) != null && i.length)
            return ie("world", l.bookName || r, `${l.entries.length} 条`, "application/json", he(t));
    } catch {}
    return null;
}
function Ls(s, n = null, t = "") {
    const r = Dn(t);
    try {
        const c = ds(s) && wt(s, "litot-desktop");
        if (c) {
            const a = Un(Nt(c), r);
            if (a) return a;
        }
    } catch {}
    try {
        return Wn(yt(s, n), r);
    } catch {}
    try {
        const c = Ct(s, n);
        return ie(
            "chatCss",
            c.name || r,
            c.target === "imessage" ? "iMessage 预设" : "微信预设",
            "text/css",
            he(fn(c)),
        );
    } catch {}
    try {
        return Kn(St(s, { filename: t, imageData: n }), r);
    } catch {}
    if (ds(s))
        try {
            const c = jn(s),
                a = (c == null ? void 0 : c.data) || c,
                i = String(
                    (a == null ? void 0 : a.description) || (a == null ? void 0 : a.persona) || "",
                ).length;
            return ie(
                "char",
                (a == null ? void 0 : a.name) || r,
                i ? `人设 ${i >= 1e3 ? `${(i / 1e3).toFixed(1)}k` : i} 字` : "角色卡",
                "image/png",
                s,
            );
        } catch {}
    return null;
}
function Hn(s, { name: n = "", mime: t = "", imageData: r = null } = {}) {
    if (ds(s) || /^image\//.test(t)) return Ls(s, r, n);
    try {
        return Un(Sa(s), n);
    } catch {
        return null;
    }
}
function Qs(s, n) {
    let t = "";
    for (let r = 0; r < s.bytes.length; r += 32768)
        t += String.fromCharCode.apply(null, s.bytes.subarray(r, r + 32768));
    return {
        localId: n,
        kind: s.kind,
        name: s.name,
        summary: s.summary,
        mime: s.mime,
        data: btoa(t),
        size: s.bytes.length,
    };
}
const en = 3;
function $a({ it: s, kind: n }) {
    return n !== "char"
        ? null
        : e.jsx("span", {
              className: "cmp-av",
              children: s.avatar ? e.jsx(gn, { src: s.avatar, alt: "" }) : (s.name || "·").slice(0, 1),
          });
}
function Pa({ groups: s, picked: n, limit: t = 3, onToggle: r, onCast: c, onBack: a }) {
    const [i, l] = g.useState(""),
        [u, o] = g.useState(""),
        [h, m] = g.useState({}),
        x = g.useMemo(() => {
            const d = i.trim().toLowerCase();
            return s
                .filter((p) => !u || p.kind === u)
                .map((p) => ({
                    ...p,
                    items: d
                        ? p.items.filter((k) => `${k.name}${k.sub || ""}`.toLowerCase().includes(d))
                        : p.items,
                }))
                .filter((p) => p.items.length);
        }, [s, i, u]);
    return e.jsxs("div", {
        className: "cm-layer cmp",
        children: [
            e.jsxs("header", {
                className: "cm-nav",
                children: [
                    e.jsxs("button", {
                        className: "cm-back",
                        onClick: a,
                        children: [e.jsx(xe, { size: 22, weight: "bold" }), "返回"],
                    }),
                    e.jsx("b", { children: "选择内容" }),
                    e.jsx("span", {
                        className: "cm-nav-r",
                        children: e.jsxs("span", { className: "cmp-count", children: ["已选 ", n.length] }),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "cm-scroll",
                children: [
                    e.jsxs("div", {
                        className: "cmp-search",
                        children: [
                            e.jsx(Ts, { size: 16 }),
                            e.jsx("input", {
                                value: i,
                                onChange: (d) => l(d.target.value),
                                placeholder: "搜索名称",
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "cmp-chips",
                        children: [
                            e.jsx("button", {
                                className: u ? "" : "on",
                                onClick: () => o(""),
                                children: "全部",
                            }),
                            s.map((d) => {
                                var p;
                                return e.jsxs(
                                    "button",
                                    {
                                        className: u === d.kind ? "on" : "",
                                        onClick: () => o(d.kind === u ? "" : d.kind),
                                        children: [
                                            (p = U[d.kind]) == null ? void 0 : p.label,
                                            e.jsx("i", { children: d.items.length }),
                                        ],
                                    },
                                    d.kind,
                                );
                            }),
                        ],
                    }),
                    !u &&
                        !i &&
                        e.jsxs("div", {
                            className: "cmp-grp",
                            children: [
                                e.jsx("div", {
                                    className: "cmp-grp-h",
                                    children: e.jsx("b", { children: "CAST" }),
                                }),
                                e.jsx("div", {
                                    className: "cmp-blk",
                                    children: e.jsxs("button", {
                                        className: "cmp-row plain",
                                        onClick: c,
                                        children: [
                                            e.jsxs("span", {
                                                className: "cmp-t",
                                                children: [
                                                    e.jsx("b", { children: "群像卡" }),
                                                    e.jsx("small", {
                                                        children: "选几个人，连同他们之间的关系一起打包",
                                                    }),
                                                ],
                                            }),
                                            e.jsx(wn, { size: 20 }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    x.map((d) => {
                        var C;
                        const p = h[d.kind] || !!i || !!u,
                            k = p ? d.items : d.items.slice(0, en);
                        return e.jsxs(
                            "div",
                            {
                                className: "cmp-grp",
                                children: [
                                    e.jsxs("div", {
                                        className: "cmp-grp-h",
                                        children: [
                                            e.jsxs("b", {
                                                children: [
                                                    pn[d.kind] ||
                                                        ((C = U[d.kind]) == null ? void 0 : C.label),
                                                    e.jsx("i", { children: d.items.length }),
                                                ],
                                            }),
                                            h[d.kind] &&
                                                !i &&
                                                !u &&
                                                e.jsx("button", {
                                                    onClick: () => m((P) => ({ ...P, [d.kind]: !1 })),
                                                    children: "收起",
                                                }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "cmp-blk",
                                        children: [
                                            k.map((P) => {
                                                const I = n.includes(P.id);
                                                return e.jsxs(
                                                    "button",
                                                    {
                                                        className: `cmp-row${d.kind === "char" ? "" : " plain"}`,
                                                        onClick: () => r(d.kind, P),
                                                        disabled: !I && n.length >= t,
                                                        children: [
                                                            e.jsx($a, { it: P, kind: d.kind }),
                                                            e.jsxs("span", {
                                                                className: "cmp-t",
                                                                children: [
                                                                    e.jsx("b", { children: P.name }),
                                                                    P.sub
                                                                        ? e.jsx("small", { children: P.sub })
                                                                        : null,
                                                                ],
                                                            }),
                                                            e.jsx("span", {
                                                                className: `cmp-dot${I ? " on" : ""}`,
                                                            }),
                                                        ],
                                                    },
                                                    P.id,
                                                );
                                            }),
                                            !p &&
                                                d.items.length > en &&
                                                e.jsxs("button", {
                                                    className: "cmp-more",
                                                    onClick: () => m((P) => ({ ...P, [d.kind]: !0 })),
                                                    children: ["展开全部 ", d.items.length, " 个"],
                                                }),
                                        ],
                                    }),
                                ],
                            },
                            d.kind,
                        );
                    }),
                    !x.length &&
                        e.jsx("div", {
                            className: "cmp-empty",
                            children: i ? "没有找到。" : "本机还没有可以分享的内容。",
                        }),
                ],
            }),
            e.jsxs("footer", {
                className: "cmp-foot",
                children: [
                    e.jsxs("span", { children: ["已选 ", e.jsx("b", { children: n.length }), " / ", t] }),
                    e.jsx("button", { className: "cmp-done", onClick: a, children: "完成" }),
                ],
            }),
        ],
    });
}
const za = (s) =>
    new Promise((n, t) => {
        const r = new FileReader();
        ((r.onload = () => n(r.result)), (r.onerror = t), r.readAsDataURL(s));
    });
function Ta({ charId: s, initial: n = null, onDone: t, onBack: r }) {
    const { state: c } = zs(),
        a = (c.characters || []).find((w) => w.id === s),
        i = g.useMemo(() => (a ? Pt(c, a) : []), [c, a]),
        [l, u] = g.useState(
            () =>
                (n == null ? void 0 : n.edits) || {
                    name: (a == null ? void 0 : a.realName) || (a == null ? void 0 : a.name) || "",
                    signature: (a == null ? void 0 : a.signature) || "",
                    persona: (a == null ? void 0 : a.persona) || "",
                },
        ),
        [o, h] = g.useState(() => (n == null ? void 0 : n.worldbookIds) || []),
        [m, x] = g.useState(() => !!((n == null ? void 0 : n.worldbookIds) || []).length),
        [d, p] = g.useState(
            () => (n == null ? void 0 : n.avatarMode) || (a != null && a.avatar ? "current" : "miffy"),
        ),
        [k, C] = g.useState(() => (n == null ? void 0 : n.avatarData) || ""),
        [P, I] = g.useState(""),
        F = g.useRef(null);
    if (!a) return null;
    const T = () => {
            const w = m ? o : [];
            t({
                edits: { realName: l.name, name: l.name, signature: l.signature, persona: l.persona },
                worldbookIds: w,
                avatar: d === "miffy" ? null : d === "custom" ? k : void 0,
                avatarMode: d,
                avatarData: k,
            });
        },
        y = (w) => h((E) => (E.includes(w) ? E.filter((D) => D !== w) : [...E, w]));
    return e.jsxs("div", {
        className: "cm-layer cmp",
        children: [
            e.jsxs("header", {
                className: "cm-nav",
                children: [
                    e.jsxs("button", {
                        className: "cm-back",
                        onClick: r,
                        children: [e.jsx(xe, { size: 22, weight: "bold" }), "返回"],
                    }),
                    e.jsx("b", { children: "编辑分享内容" }),
                    e.jsx("span", {
                        className: "cm-nav-r",
                        children: e.jsx("button", {
                            className: "cmp-nav-done",
                            onClick: T,
                            children: "完成",
                        }),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "cm-scroll",
                children: [
                    e.jsx("div", { className: "cmp-lbl", children: "头像" }),
                    e.jsxs("div", {
                        className: "cmp-blk cmp-avs",
                        children: [
                            e.jsxs("button", {
                                className: d === "current" ? "on" : "",
                                disabled: !a.avatar,
                                onClick: () => p("current"),
                                children: [
                                    e.jsx("span", {
                                        className: "cmp-sq",
                                        children: a.avatar ? e.jsx(gn, { src: a.avatar, alt: "" }) : "—",
                                    }),
                                    "当前头像",
                                ],
                            }),
                            e.jsxs("button", {
                                className: d === "miffy" ? "on" : "",
                                onClick: () => p("miffy"),
                                children: [
                                    e.jsx("span", { className: "cmp-sq", children: e.jsx(zt, { size: 34 }) }),
                                    "小兔",
                                ],
                            }),
                            e.jsxs("button", {
                                className: d === "custom" ? "on" : "",
                                onClick: () => {
                                    var w;
                                    return (w = F.current) == null ? void 0 : w.click();
                                },
                                children: [
                                    e.jsx("span", {
                                        className: "cmp-sq",
                                        children: k
                                            ? e.jsx("img", { src: k, alt: "" })
                                            : e.jsx("i", { children: "+" }),
                                    }),
                                    "选择图片",
                                ],
                            }),
                        ],
                    }),
                    e.jsx("p", {
                        className: "cmp-hint",
                        children: "分享出去的头像。本机角色的头像不受影响。",
                    }),
                    e.jsx("div", { className: "cmp-lbl", children: "基础内容" }),
                    e.jsx("div", {
                        className: "cmp-blk",
                        children: [
                            ["name", "名字"],
                            ["signature", "签名"],
                            ["persona", "人设"],
                        ].map(([w, E]) =>
                            e.jsxs(
                                "div",
                                {
                                    className: "cmp-field",
                                    children: [
                                        e.jsxs("button", {
                                            className: "cmp-kv",
                                            onClick: () => I(P === w ? "" : w),
                                            children: [
                                                e.jsx("span", { children: E }),
                                                e.jsx("em", {
                                                    children:
                                                        w === "persona"
                                                            ? `${String(l.persona || "").length} 字`
                                                            : l[w] || "未填写",
                                                }),
                                                e.jsx("i", { children: P === w ? "收起" : "修改" }),
                                            ],
                                        }),
                                        P === w &&
                                            (w === "persona"
                                                ? e.jsx("textarea", {
                                                      rows: 8,
                                                      value: l.persona,
                                                      onChange: (D) =>
                                                          u((H) => ({ ...H, persona: D.target.value })),
                                                  })
                                                : e.jsx("input", {
                                                      value: l[w],
                                                      maxLength: w === "name" ? 40 : 80,
                                                      onChange: (D) =>
                                                          u((H) => ({ ...H, [w]: D.target.value })),
                                                  })),
                                    ],
                                },
                                w,
                            ),
                        ),
                    }),
                    e.jsx("p", { className: "cmp-hint", children: "修改只影响分享出去的这一份。" }),
                    e.jsx("div", { className: "cmp-lbl", children: "附加内容（可选）" }),
                    e.jsxs("div", {
                        className: "cmp-blk",
                        children: [
                            e.jsxs("button", {
                                className: "cmp-kv",
                                onClick: () => x((w) => !w),
                                disabled: !i.length,
                                children: [
                                    e.jsx("span", { children: "绑定的世界书" }),
                                    e.jsx("em", {
                                        children: i.length
                                            ? m
                                                ? `${o.length} / ${i.length} 条`
                                                : `${i.length} 条`
                                            : "没有绑定",
                                    }),
                                    e.jsx("i", { className: `cmp-tog${m && i.length ? " on" : ""}` }),
                                ],
                            }),
                            m &&
                                i.map((w) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            className: "cmp-sub",
                                            onClick: () => y(w.id),
                                            children: [
                                                e.jsx("i", {
                                                    className: `cmp-check${o.includes(w.id) ? " on" : ""}`,
                                                }),
                                                e.jsx("span", { children: w.name || "未命名条目" }),
                                                e.jsxs("em", {
                                                    children: [String(w.body || "").length, " 字"],
                                                }),
                                            ],
                                        },
                                        w.id,
                                    ),
                                ),
                        ],
                    }),
                    e.jsx("p", { className: "cmp-hint", children: "关系、聊天记录和记忆不会分享。" }),
                ],
            }),
            e.jsx("input", {
                ref: F,
                type: "file",
                accept: "image/*",
                hidden: !0,
                onChange: async (w) => {
                    var D;
                    const E = (D = w.target.files) == null ? void 0 : D[0];
                    ((w.target.value = ""), E && (C(await za(E)), p("custom")));
                },
            }),
        ],
    });
}
const Ia = (s) => s && s.length > 8 && s[0] === 137 && s[1] === 80 && s[2] === 78 && s[3] === 71,
    ve = (s) =>
        function ({ size: t = 24 }) {
            return e.jsx("svg", {
                width: t,
                height: t,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: s,
            });
        },
    Bs = {
        style: ve(
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx("path", {
                        d: "M12 3.6c2.7 3.1 4.4 5.5 4.4 7.7a4.4 4.4 0 0 1-8.8 0c0-2.2 1.7-4.6 4.4-7.7Z",
                    }),
                    e.jsx("path", { d: "M4 19.2c1.6-1.2 3.2-1.2 4.8 0s3.2 1.2 4.8 0 3.2-1.2 4.8 0" }),
                ],
            }),
        ),
        desktop: ve(
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx("rect", { x: "5.5", y: "2.8", width: "13", height: "18.4", rx: "3.2" }),
                    e.jsx("rect", { x: "8.4", y: "6.2", width: "2.8", height: "2.8", rx: ".9" }),
                    e.jsx("rect", { x: "12.8", y: "6.2", width: "2.8", height: "2.8", rx: ".9" }),
                    e.jsx("rect", { x: "8.4", y: "10.6", width: "2.8", height: "2.8", rx: ".9" }),
                    e.jsx("rect", { x: "12.8", y: "10.6", width: "2.8", height: "2.8", rx: ".9" }),
                    e.jsx("path", { d: "M10.8 18h2.4" }),
                ],
            }),
        ),
        html: ve(
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx("path", { d: "m8 7.5-4.5 4.5L8 16.5" }),
                    e.jsx("path", { d: "m16 7.5 4.5 4.5-4.5 4.5" }),
                    e.jsx("path", { d: "m13.4 5.5-2.8 13" }),
                ],
            }),
        ),
        char: ve(
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx("rect", { x: "5", y: "3", width: "14", height: "18", rx: "3" }),
                    e.jsx("circle", { cx: "12", cy: "9.2", r: "2.5" }),
                    e.jsx("path", { d: "M8.6 15c.8-1.5 2-2.2 3.4-2.2s2.6.7 3.4 2.2" }),
                    e.jsx("path", { d: "M9.5 18h5" }),
                ],
            }),
        ),
        world: ve(
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx("path", { d: "M12 6.4C10.3 5 8 4.4 4 4.5v13.8c4-.1 6.3.5 8 1.9" }),
                    e.jsx("path", { d: "M12 6.4c1.7-1.4 4-2 8-1.9v13.8c-4-.1-6.3.5-8 1.9" }),
                    e.jsx("path", { d: "M12 6.4v13.8" }),
                ],
            }),
        ),
        preset: ve(
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx("path", { d: "M4 7h16M4 12h16M4 17h16" }),
                    e.jsx("circle", { cx: "9", cy: "7", r: "1.9", fill: "var(--cc,#fff)" }),
                    e.jsx("circle", { cx: "15.5", cy: "12", r: "1.9", fill: "var(--cc,#fff)" }),
                    e.jsx("circle", { cx: "7.5", cy: "17", r: "1.9", fill: "var(--cc,#fff)" }),
                ],
            }),
        ),
    },
    Ea = {
        style: "STYLE",
        desktop: "DESKTOP",
        html: "HTML",
        char: "CHARACTER",
        world: "WORLDBOOK",
        preset: "PRESET",
    },
    Xe = {
        stickers: aa,
        chatCss: Te,
        offline: Te,
        status: ra,
        thought: Te,
        desktop: Gs,
        widget: Gs,
        htmlpreset: ca,
        char: ia,
        cast: wn,
        world: cs,
        xpreset: is,
        promptset: is,
        thinkchain: is,
        imagepreset: Ge,
        novelpreset: cs,
        listCss: Te,
        decor: Te,
        interview: cs,
        file: ns,
    },
    Zn = (s) => [He(s.kind).name, Ze(s.kind, s.sub)].filter(Boolean).join(" · "),
    us = (s) => Object.values((s == null ? void 0 : s.reactions) || {}).reduce((n, t) => n + t, 0),
    q = (s) => s.stopPropagation();
async function Ve(s, n, t) {
    var a;
    const r = new File([s], n, { type: t || "application/octet-stream" });
    if (Ft() && (a = navigator.canShare) != null && a.call(navigator, { files: [r] }))
        try {
            return (await navigator.share({ files: [r] }), "ok");
        } catch (i) {
            if ((i == null ? void 0 : i.name) === "AbortError") return "cancel";
            if ((i == null ? void 0 : i.name) === "NotAllowedError") return "tap";
        }
    const c = document.createElement("a");
    return (
        (c.href = URL.createObjectURL(r)),
        (c.download = n),
        c.click(),
        setTimeout(() => URL.revokeObjectURL(c.href), 4e3),
        "ok"
    );
}
const xs = (s) =>
        ({
            "image/png": "png",
            "image/jpeg": "jpg",
            "image/webp": "webp",
            "image/gif": "gif",
            "application/json": "json",
            "text/css": "css",
            "text/html": "html",
        })[s] || "txt",
    Ma = (s) => (/\.[a-z0-9]{2,5}$/i.test(s.name) ? s.name : `${s.name}.${xs(s.mime)}`);
function Ae({ user: s, size: n = 40, onClick: t }) {
    const r = (s == null ? void 0 : s.name) || "?";
    return e.jsx("span", {
        className: `cm-av ${t ? "tap" : ""}`,
        style: { width: n, height: n, fontSize: n * 0.4 },
        onClick: t
            ? (c) => {
                  (q(c), t());
              }
            : void 0,
        children:
            s != null && s.avatar
                ? e.jsx("img", { src: s.avatar.startsWith("data:") ? s.avatar : ne(s.avatar), alt: "" })
                : String(r).slice(0, 1),
    });
}
const Fs = ({ author: s }) =>
        s != null && s.retired ? e.jsx("i", { className: "cm-retired", children: "已停用" }) : null,
    Aa = ({ p: s }) => {
        var n;
        return s.sensitive
            ? e.jsx("i", {
                  className: `cm-sens-tag s-${s.sensitive}`,
                  children: (n = es[s.sensitive]) == null ? void 0 : n.tag,
              })
            : null;
    },
    Ra = (s, n) => !!s.sensitive && !s.isMine && !n.showSensitive && !n.revealed.has(s.id);
function Yn({ p: s, ax: n, children: t }) {
    if (!Ra(s, n)) return t;
    const r = es[s.sensitive];
    return e.jsxs("div", {
        className: "cm-gate",
        onClick: (c) => {
            (q(c), n.askReveal(s));
        },
        children: [
            e.jsx("div", { className: "cm-gate-blur", "aria-hidden": "true", children: t }),
            e.jsxs("div", {
                className: "cm-gate-cover",
                children: [
                    e.jsx("span", { className: "cm-gate-ic", children: e.jsx(Cn, { size: 20 }) }),
                    e.jsx("b", { children: r.title }),
                    e.jsx("span", { children: "成人向或深渊题材，确认后查看" }),
                    e.jsx("button", { className: "cm-pill", children: "点击查看" }),
                ],
            }),
        ],
    });
}
function te({ icon: s = ea, title: n, sub: t, action: r }) {
    return e.jsxs("div", {
        className: "cm-empty",
        children: [
            e.jsx("span", { className: "cm-empty-ic", children: e.jsx(s, { size: 28 }) }),
            e.jsx("b", { children: n }),
            t && e.jsx("span", { children: t }),
            r,
        ],
    });
}
const Gn = ({ n: s = 3 }) =>
    e.jsx(e.Fragment, {
        children: Array.from({ length: s }, (n, t) =>
            e.jsxs(
                "div",
                {
                    className: "cm-skel",
                    children: [
                        e.jsx("span", { className: "cm-skel-av" }),
                        e.jsxs("div", {
                            children: [
                                e.jsx("span", { style: { width: "42%" } }),
                                e.jsx("span", { style: { width: "92%" } }),
                                e.jsx("span", { style: { width: "70%" } }),
                                e.jsx("span", { className: "blk" }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
function Jn({ list: s, onView: n, p: t }) {
    if (!(s != null && s.length)) return null;
    const r =
        s.length === 1 && s[0].w > 0 && s[0].h > 0
            ? { aspectRatio: Math.min(16 / 9, Math.max(4 / 5, s[0].w / s[0].h)) }
            : void 0;
    return e.jsx("div", {
        className: `cm-imgs n${Math.min(s.length, 4)}`,
        onClick: q,
        children: s
            .slice(0, 4)
            .map((c, a) =>
                e.jsx(
                    "span",
                    {
                        className: "cm-img",
                        style: r,
                        onClick: () => (n == null ? void 0 : n(s, a, t)),
                        children: e.jsx("img", {
                            src: c.preview || ne(c.thumb || c.key),
                            alt: "",
                            loading: "lazy",
                        }),
                    },
                    c.key || a,
                ),
            ),
    });
}
const Le = new Map();
function Oa(s) {
    return (
        Le.has(s.key) ||
            Le.set(
                s.key,
                Ue(s)
                    .then(async (n) => {
                        var r;
                        const t =
                            (r = s.mime) != null && r.startsWith("image/")
                                ? await Ye(n, s.mime).catch(() => null)
                                : null;
                        return { bytes: n, sniffed: Hn(n, { name: s.name, mime: s.mime, imageData: t }) };
                    })
                    .catch(() => (Le.delete(s.key), { bytes: null, sniffed: null })),
            ),
        Le.get(s.key)
    );
}
function _a(s) {
    const [n, t] = g.useState(null);
    return (
        g.useEffect(() => {
            if (s.kind !== "file" || !s.key) return;
            let r = !0;
            return (
                Oa(s).then((c) => {
                    r && t(c);
                }),
                () => {
                    r = !1;
                }
            );
        }, [s.key, s.kind]),
        n
    );
}
function Xn({ p: s, att: n, ax: t }) {
    var x, d;
    const r = Xe[n.kind] || ns,
        c = `${s.id}:${n.id}`,
        a = t.busy === c,
        i = _a(n),
        l = n.kind === "file",
        u = l ? (i == null ? void 0 : i.sniffed) : null,
        o = !l || !!u,
        h = o && t.imported.has(c),
        m = u
            ? `${(x = U[u.kind]) == null ? void 0 : x.label} · 可导入`
            : (d = U[n.kind]) == null
              ? void 0
              : d.label;
    return e.jsxs("div", {
        className: "cm-att",
        onClick: q,
        children: [
            e.jsxs("span", {
                className: "cm-att-rc",
                "aria-hidden": "true",
                children: [
                    e.jsx("span", { children: "RECEIPT" }),
                    e.jsx("span", { children: pn[(u == null ? void 0 : u.kind) || n.kind] || "FILE" }),
                    e.jsx("span", { children: n.size ? X(n.size) : "" }),
                ],
            }),
            n.kind === "char" && n.key
                ? e.jsx("span", {
                      className: "cm-att-card",
                      children: e.jsx("img", { src: ne(n.key), alt: "", loading: "lazy" }),
                  })
                : e.jsx("span", {
                      className: "cm-att-ic",
                      children: nn.createElement((u && Xe[u.kind]) || r, { size: 20 }),
                  }),
            e.jsxs("span", {
                className: "cm-att-t",
                children: [
                    e.jsx("b", { children: n.name }),
                    e.jsx("small", {
                        children: [m, n.summary, n.size ? X(n.size) : ""].filter(Boolean).join(" · "),
                    }),
                ],
            }),
            e.jsxs("span", {
                className: "cm-att-acts",
                children: [
                    e.jsx("button", {
                        className: "cm-pill ghost",
                        disabled: a,
                        onClick: () => t.saveAtt(s, n, (i == null ? void 0 : i.bytes) || null),
                        children: "保存",
                    }),
                    l && !i
                        ? e.jsx("button", { className: "cm-pill", disabled: !0, children: "识别中" })
                        : o &&
                          e.jsx("button", {
                              className: `cm-pill ${h ? "ghost" : ""}`,
                              disabled: a,
                              onClick: () => (u ? t.importSniffed(s, u, c) : t.importAtt(s, n)),
                              children: a
                                  ? "导入中…"
                                  : h
                                    ? e.jsxs(e.Fragment, {
                                          children: [e.jsx(Is, { size: 13, weight: "bold" }), "已导入"],
                                      })
                                    : "导入",
                          }),
                ],
            }),
        ],
    });
}
function Vn({ p: s, full: n = !1, ax: t }) {
    const r = kn.filter(([a]) => {
            var i;
            return (((i = s.reactions) == null ? void 0 : i[a]) || 0) > 0;
        }),
        c = r.length
            ? e.jsx("span", {
                  className: "cm-react-legacy",
                  children: r.map(([a, i]) => `${i} ${s.reactions[a]}`).join(" · "),
              })
            : null;
    return e.jsx(ua, {
        full: n,
        reactions: s.reactions || {},
        mine: s.mine || [],
        onToggle: (a) => t.react(s, a),
        legacy: c,
        extra: n
            ? null
            : e.jsxs(e.Fragment, {
                  children: [
                      s.importCount
                          ? e.jsxs("span", {
                                className: "cm-imp",
                                title: "导入过的人",
                                children: [e.jsx(Me, { size: 15 }), se(s.importCount)],
                            })
                          : null,
                      e.jsx("button", {
                          className: `cm-save ${s.savedByMe ? "on" : ""}`,
                          onClick: () => t.save(s),
                          "aria-label": "收藏",
                          children: e.jsx(Es, { size: 18, weight: s.savedByMe ? "fill" : "regular" }),
                      }),
                  ],
              }),
    });
}
function La({ p: s, ax: n, showZone: t = !0 }) {
    return e.jsxs("article", {
        className: "cm-post",
        onClick: () => n.open(s),
        children: [
            e.jsxs("div", {
                className: "cm-post-top",
                children: [
                    e.jsx(Ae, { user: s.author, size: 42, onClick: () => n.user(s.author) }),
                    e.jsxs("div", {
                        className: "cm-post-who",
                        children: [
                            e.jsxs("div", {
                                className: "cm-head",
                                children: [
                                    e.jsx("b", { children: s.author.name }),
                                    e.jsx(Fs, { author: s.author }),
                                    e.jsx(Aa, { p: s }),
                                    e.jsx("span", { className: "cm-time", children: vn(s.createdAt) }),
                                    (s.isMine || n.isAdmin) &&
                                        e.jsx("button", {
                                            className: "cm-more",
                                            onClick: (r) => {
                                                (q(r), n.menu(s));
                                            },
                                            "aria-label": "更多",
                                            children: e.jsx(Sn, { size: 18, weight: "bold" }),
                                        }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "cm-sub",
                                children: [
                                    "@",
                                    s.author.id,
                                    s.editedAt ? " · 已编辑" : "",
                                    t && e.jsx("span", { className: "cm-zone-tag", children: Zn(s) }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "cm-post-col",
                children: [
                    e.jsxs(Yn, {
                        p: s,
                        ax: n,
                        children: [
                            s.text && e.jsx("p", { className: "cm-text clamp", children: s.text }),
                            e.jsx(Jn, { list: s.images, onView: n.view, p: s }),
                            (s.attachments || []).map((r) => e.jsx(Xn, { p: s, att: r, ax: n }, r.id)),
                        ],
                    }),
                    e.jsx(Vn, { p: s, ax: n }),
                ],
            }),
        ],
    });
}
function Ne(s, n) {
    const [t, r] = g.useState([]),
        [c, a] = g.useState(null),
        [i, l] = g.useState("loading"),
        u = JSON.stringify(s),
        o = g.useCallback(
            async (h = null) => {
                l(h ? "more" : "loading");
                try {
                    const m = await Gt({ ...s, next: h });
                    (n.upsert(m.posts || []),
                        r((x) => [
                            ...(h ? x : []),
                            ...(m.posts || []).map((d) => d.id).filter((d) => !h || !x.includes(d)),
                        ]),
                        a(m.next || null),
                        l("ready"));
                } catch (m) {
                    (l("error"), n.toast(J(m), "error"));
                }
            },
            [u],
        );
    return (
        g.useEffect(() => {
            o();
        }, [o]),
        {
            ids: t,
            next: c,
            state: i,
            more: () => c && i === "ready" && o(c),
            reload: () => o(),
            drop: (h) => r((m) => m.filter((x) => x !== h)),
            add: (h) => r((m) => [h, ...m.filter((x) => x !== h)]),
        }
    );
}
function ye({ list: s, ax: n, empty: t, showZone: r }) {
    const c = s.ids.map((i) => n.byId[i]).filter(Boolean),
        a = g.useRef(null);
    return (
        g.useEffect(() => {
            if (!a.current || !s.next) return;
            const i = new IntersectionObserver(
                (l) => {
                    l[0].isIntersecting && s.more();
                },
                { rootMargin: "300px" },
            );
            return (i.observe(a.current), () => i.disconnect());
        }, [s.next, s.state]),
        s.state === "loading"
            ? e.jsx(Gn, {})
            : e.jsxs(e.Fragment, {
                  children: [
                      c.map((i) => e.jsx(La, { p: i, ax: n, showZone: r }, i.id)),
                      s.state === "error" &&
                          e.jsx(te, {
                              icon: Tn,
                              title: "没加载出来",
                              sub: "网络不太好",
                              action: e.jsx("button", {
                                  className: "cm-pill ghost",
                                  onClick: s.reload,
                                  children: "重试",
                              }),
                          }),
                      s.state === "ready" && !c.length && t,
                      s.next &&
                          e.jsx("div", {
                              ref: a,
                              className: "cm-more-row",
                              children: s.state === "more" ? "加载中…" : "",
                          }),
                      !s.next &&
                          c.length > 4 &&
                          e.jsx("div", { className: "cm-end", children: "· 到底了 ·" }),
                  ],
              })
    );
}
function Ba({ value: s, onChange: n }) {
    return e.jsxs("label", {
        className: "cm-search",
        children: [
            e.jsx(Ts, { size: 17 }),
            e.jsx("input", {
                value: s,
                onChange: (t) => n(t.target.value),
                placeholder: "搜索美化、角色卡、世界书、作者",
                enterKeyHint: "search",
            }),
            s &&
                e.jsx("button", {
                    onClick: () => n(""),
                    "aria-label": "清空",
                    children: e.jsx(Tn, { size: 17, weight: "fill" }),
                }),
        ],
    });
}
function Fa({ k: s, size: n = "m" }) {
    const t = Bs[s];
    return e.jsx("span", { className: `cm-glyph ${n}`, children: e.jsx(t, { size: n === "l" ? 30 : 22 }) });
}
const sn = {
    style: "Style",
    desktop: "Desktop",
    html: "HTML",
    char: "Character",
    world: "Worldbook",
    preset: "Preset",
};
function Da({ zones: s, onOpen: n }) {
    return e.jsxs("div", {
        className: "cm-index",
        children: [
            e.jsxs("div", {
                className: "cm-index-h",
                children: [
                    e.jsx("small", { children: "INDEX" }),
                    e.jsxs("small", { children: [String(hs.length).padStart(2, "0"), " ZONES"] }),
                ],
            }),
            hs.map((t, r) => {
                const c = s == null ? void 0 : s[t.k];
                return e.jsxs(
                    "button",
                    {
                        className: "cm-index-row",
                        onClick: () => n(t.k),
                        children: [
                            e.jsx("span", {
                                className: "cm-index-no",
                                children: String(r + 1).padStart(2, "0"),
                            }),
                            e.jsxs("span", {
                                className: "cm-index-t",
                                children: [
                                    e.jsx("b", { children: sn[t.k] }),
                                    t.name !== sn[t.k] && e.jsx("small", { children: t.name }),
                                ],
                            }),
                            e.jsxs("span", {
                                className: "cm-index-n",
                                children: [
                                    c != null && c.today ? e.jsxs("em", { children: ["+", c.today] }) : null,
                                    e.jsx("span", { children: c ? se(c.posts) : "—" }),
                                ],
                            }),
                            e.jsx(Ms, { size: 13, weight: "bold", className: "cm-index-chev" }),
                        ],
                    },
                    t.k,
                );
            }),
        ],
    });
}
function Wa({ ax: s, feedRef: n }) {
    const [t, r] = g.useState("new"),
        [c, a] = g.useState(""),
        [i, l] = g.useState("");
    g.useEffect(() => {
        const o = setTimeout(() => l(c.trim()), 400);
        return () => clearTimeout(o);
    }, [c]);
    const u = Ne(i ? { q: i } : { sort: t }, s);
    return (
        (n.current = u),
        e.jsxs(e.Fragment, {
            children: [
                e.jsxs("div", {
                    className: "cm-hero",
                    children: [
                        e.jsx("h1", { children: "Community" }),
                        e.jsx("p", { children: "大家做的美化、桌面、角色卡和预设，看中了一键导入。" }),
                        e.jsx(Ba, { value: c, onChange: a }),
                    ],
                }),
                i
                    ? e.jsxs(e.Fragment, {
                          children: [
                              e.jsxs("div", { className: "cm-sec", children: ["搜索「", i, "」"] }),
                              e.jsx(ye, {
                                  list: u,
                                  ax: s,
                                  empty: e.jsx(te, {
                                      icon: Ts,
                                      title: "没搜到",
                                      sub: "换个词试试，比如角色名或者「气泡」",
                                  }),
                              }),
                          ],
                      })
                    : e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(Da, { zones: s.zones, onOpen: s.zone }),
                              e.jsxs("div", {
                                  className: "cm-feed-h",
                                  children: [
                                      e.jsx("b", { children: "动态" }),
                                      e.jsx(Ds, {
                                          small: !0,
                                          value: t,
                                          onChange: r,
                                          options: [
                                              ["new", "Latest"],
                                              ["hot", "Popular"],
                                          ],
                                      }),
                                  ],
                              }),
                              e.jsx(ye, {
                                  list: u,
                                  ax: s,
                                  empty: e.jsx(te, {
                                      icon: ss,
                                      title: "还没有人分享",
                                      sub: "来发第一条吧",
                                      action: e.jsx("button", {
                                          className: "cm-pill",
                                          onClick: s.compose,
                                          children: "发帖",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        })
    );
}
function ts({ title: s, back: n = "返回", onBack: t, right: r, children: c }) {
    return e.jsxs("div", {
        className: "cm-layer",
        children: [
            e.jsxs("header", {
                className: "cm-nav",
                children: [
                    e.jsxs("button", {
                        className: "cm-back",
                        onClick: t,
                        children: [e.jsx(xe, { size: 22, weight: "bold" }), n],
                    }),
                    e.jsx("b", { children: s }),
                    e.jsx("span", { className: "cm-nav-r", children: r }),
                ],
            }),
            e.jsx("div", { className: "cm-scroll", children: c }),
        ],
    });
}
function Ka({ k: s, ax: n, onBack: t, listRef: r }) {
    var m;
    const c = He(s),
        a = (m = n.zones) == null ? void 0 : m[s],
        [i, l] = g.useState("new"),
        [u, o] = g.useState(""),
        h = Ne({ kind: s, sub: u, sort: i }, n);
    return (
        (r.current = h),
        e.jsxs(ts, {
            title: c.name,
            back: "社区",
            onBack: t,
            right: e.jsx("button", {
                className: "cm-icon",
                onClick: n.compose,
                "aria-label": "发帖",
                children: e.jsx(ss, { size: 22 }),
            }),
            children: [
                e.jsxs("div", {
                    className: "cm-zcard",
                    children: [
                        e.jsxs("div", {
                            className: "cm-zcard-top",
                            children: [
                                e.jsx(Fa, { k: s, size: "l" }),
                                e.jsxs("div", {
                                    className: "cm-zcard-t",
                                    children: [
                                        e.jsx("small", { children: Ea[s] }),
                                        e.jsx("h2", { children: c.name }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx("p", { className: "cm-zcard-desc", children: c.desc }),
                        e.jsxs("div", {
                            className: "cm-fields",
                            children: [
                                e.jsxs("span", {
                                    children: [
                                        e.jsx("small", { children: "POSTS" }),
                                        e.jsx("b", { children: se((a == null ? void 0 : a.posts) || 0) }),
                                    ],
                                }),
                                e.jsxs("span", {
                                    children: [
                                        e.jsx("small", { children: "IMPORTS" }),
                                        e.jsx("b", { children: se((a == null ? void 0 : a.imports) || 0) }),
                                    ],
                                }),
                                e.jsxs("span", {
                                    children: [
                                        e.jsx("small", { children: "TODAY" }),
                                        e.jsx("b", { children: (a == null ? void 0 : a.today) || 0 }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                c.subs.length > 0 &&
                    e.jsx("div", {
                        className: "cm-subs",
                        children: [["", "全部"], ...c.subs].map(([x, d]) => {
                            var p;
                            return e.jsxs(
                                "button",
                                {
                                    className: u === x ? "on" : "",
                                    onClick: () => o(x),
                                    children: [
                                        d,
                                        e.jsx("em", {
                                            children: se(
                                                x
                                                    ? ((p = a == null ? void 0 : a.subs) == null
                                                          ? void 0
                                                          : p[x]) || 0
                                                    : (a == null ? void 0 : a.posts) || 0,
                                            ),
                                        }),
                                    ],
                                },
                                x,
                            );
                        }),
                    }),
                e.jsxs("div", {
                    className: "cm-feed-h",
                    children: [
                        e.jsx("b", { children: u ? Ze(s, u) : "帖子" }),
                        e.jsx(Ds, {
                            small: !0,
                            value: i,
                            onChange: l,
                            options: [
                                ["new", "Latest"],
                                ["hot", "Popular"],
                            ],
                        }),
                    ],
                }),
                e.jsx(ye, {
                    list: h,
                    ax: n,
                    showZone: !!c.subs.length && !u,
                    empty: e.jsx(te, {
                        icon: Bs[s],
                        title: `「${u ? Ze(s, u) : c.name}」还没有分享`,
                        sub: "发帖时选这个分区，就会出现在这里",
                    }),
                }),
            ],
        })
    );
}
function qn({ profile: s, stats: n, quota: t, actions: r }) {
    const c = t ? Math.min(100, (t.used / t.limit) * 100) : 0;
    return e.jsxs("div", {
        className: "cm-card-me",
        children: [
            e.jsx("div", {
                className: `cm-card-banner${s != null && s.cover ? " has-img" : ""}`,
                "aria-hidden": "true",
                children: (s == null ? void 0 : s.cover) && e.jsx("img", { src: ne(s.cover), alt: "" }),
            }),
            e.jsx("div", {
                className: "cm-me-av",
                children: e.jsx(Ae, { user: s || { name: "?" }, size: 84 }),
            }),
            e.jsxs("div", {
                className: "cm-me-t",
                children: [
                    e.jsxs("span", {
                        className: "cm-me-name",
                        children: [
                            e.jsx("b", { children: (s == null ? void 0 : s.name) || "还没设置昵称" }),
                            e.jsx(Fs, { author: s }),
                        ],
                    }),
                    e.jsx("span", { className: "cm-me-id", children: s ? `@${s.id}` : "设置昵称后即可发帖" }),
                ],
            }),
            (s == null ? void 0 : s.bio) && e.jsx("p", { className: "cm-me-bio", children: s.bio }),
            e.jsxs("div", {
                className: "cm-fields",
                children: [
                    e.jsxs("span", {
                        children: [
                            e.jsx("small", { children: "POSTS" }),
                            e.jsx("b", { children: se((n == null ? void 0 : n.posts) || 0) }),
                        ],
                    }),
                    e.jsxs("span", {
                        children: [
                            e.jsx("small", { children: "IMPORTS" }),
                            e.jsx("b", { children: se((n == null ? void 0 : n.imports) || 0) }),
                        ],
                    }),
                    e.jsxs("span", {
                        children: [
                            e.jsx("small", { children: "REACTIONS" }),
                            e.jsx("b", { children: se((n == null ? void 0 : n.reactions) || 0) }),
                        ],
                    }),
                ],
            }),
            t &&
                e.jsxs("div", {
                    className: "cm-me-quota",
                    children: [
                        e.jsxs("div", {
                            children: [
                                e.jsx("small", { children: "STORAGE" }),
                                e.jsxs("span", { children: [X(t.used), " / ", X(t.limit)] }),
                            ],
                        }),
                        e.jsx("i", {
                            children: e.jsx("b", { style: { width: `${Math.max(c, t.used ? 1.5 : 0)}%` } }),
                        }),
                    ],
                }),
            r && e.jsx("div", { className: "cm-me-acts", children: r }),
        ],
    });
}
function Ds({ value: s, onChange: n, options: t, small: r = !1 }) {
    const c = Math.max(
        0,
        t.findIndex(([a]) => a === s),
    );
    return e.jsxs("div", {
        className: `cm-switcher ${r ? "sm" : ""}`,
        role: "tablist",
        style: { "--n": t.length, "--i": c },
        children: [
            e.jsx("i", { className: "cm-switcher-thumb", "aria-hidden": "true" }),
            t.map(([a, i, l]) =>
                e.jsxs(
                    "button",
                    {
                        role: "tab",
                        "aria-selected": s === a,
                        className: s === a ? "on" : "",
                        onClick: () => n(a),
                        children: [e.jsx("span", { children: i }), l != null && e.jsx("em", { children: l })],
                    },
                    a,
                ),
            ),
        ],
    });
}
function Ua({ u: s, ax: n, onBack: t }) {
    var i, l;
    const [r, c] = g.useState(null);
    g.useEffect(() => {
        Dt(s.id)
            .then(c)
            .catch((u) => n.toast(J(u), "error"));
    }, [s.id]);
    const a = Ne({ author: s.id }, n);
    return e.jsxs(ts, {
        title: ((i = r == null ? void 0 : r.profile) == null ? void 0 : i.name) || s.name,
        onBack: t,
        children: [
            e.jsx(qn, {
                profile: (r == null ? void 0 : r.profile) || s,
                stats: r == null ? void 0 : r.stats,
            }),
            ((l = r == null ? void 0 : r.profile) == null ? void 0 : l.retired) &&
                e.jsx("div", {
                    className: "cm-banner",
                    children: "这个账号已停用，分享的内容还在，照样能导入。",
                }),
            e.jsx("div", { className: "cm-sec", children: "TA 的分享" }),
            e.jsx(ye, { list: a, ax: n, empty: e.jsx(te, { title: "还没有分享" }) }),
        ],
    });
}
function Ha({ att: s }) {
    var a, i;
    const [n, t] = g.useState(!1),
        [r, c] = g.useState(void 0);
    return (
        g.useEffect(() => {
            !n ||
                r !== void 0 ||
                Ue(s)
                    .then((l) => c(ka(s, l)))
                    .catch(() => c(null));
        }, [n]),
        s.kind === "file" && s.mime === "image/png"
            ? null
            : e.jsxs("div", {
                  className: `cm-pv ${n ? "open" : ""}`,
                  children: [
                      e.jsxs("button", {
                          className: "cm-pv-h",
                          onClick: () => t((l) => !l),
                          children: [
                              e.jsx("span", { children: "里面有什么" }),
                              e.jsx(Ms, { size: 14, weight: "bold" }),
                          ],
                      }),
                      n &&
                          (r === void 0
                              ? e.jsxs("div", {
                                    className: "cm-pv-b",
                                    children: [
                                        e.jsx("span", { className: "cm-skel-line" }),
                                        e.jsx("span", { className: "cm-skel-line short" }),
                                    ],
                                })
                              : r
                                ? e.jsxs("div", {
                                      className: "cm-pv-b",
                                      children: [
                                          ((a = r.tags) == null ? void 0 : a.length) > 0 &&
                                              e.jsx("div", {
                                                  className: "cm-pv-tags",
                                                  children: r.tags.map((l) =>
                                                      e.jsx("span", { children: l }, l),
                                                  ),
                                              }),
                                          (i = r.rows) == null
                                              ? void 0
                                              : i.map((l, u) =>
                                                    e.jsxs(
                                                        "div",
                                                        {
                                                            className: "cm-pv-row",
                                                            children: [
                                                                e.jsx("b", { children: l.t }),
                                                                e.jsx("span", { children: l.s }),
                                                            ],
                                                        },
                                                        u,
                                                    ),
                                                ),
                                          r.note &&
                                              e.jsx("div", { className: "cm-pv-note", children: r.note }),
                                          r.code && e.jsx("pre", { className: "cm-code", children: r.code }),
                                      ],
                                  })
                                : e.jsx("div", {
                                      className: "cm-pv-b muted",
                                      children: "读不出预览，可以直接导入试试",
                                  })),
                  ],
              })
    );
}
function Za({ p: s, ax: n, onBack: t }) {
    const r = new Date(s.createdAt);
    return e.jsx(ts, {
        title: "帖子",
        back: "返回",
        onBack: t,
        right: e.jsxs(e.Fragment, {
            children: [
                (s.isMine || n.isAdmin) &&
                    e.jsx("button", {
                        className: "cm-icon",
                        onClick: () => n.menu(s),
                        "aria-label": "更多",
                        children: e.jsx(Sn, { size: 22, weight: "bold" }),
                    }),
                e.jsx("button", {
                    className: "cm-icon",
                    onClick: () => n.save(s),
                    "aria-label": "收藏",
                    children: e.jsx(Es, { size: 21, weight: s.savedByMe ? "fill" : "regular" }),
                }),
            ],
        }),
        children: e.jsxs("div", {
            className: "cm-detail",
            children: [
                e.jsxs("button", {
                    className: "cm-author",
                    onClick: () => n.user(s.author),
                    children: [
                        e.jsx(Ae, { user: s.author, size: 44 }),
                        e.jsxs("span", {
                            className: "cm-author-t",
                            children: [
                                e.jsxs("span", {
                                    className: "cm-me-name",
                                    children: [
                                        e.jsx("b", { children: s.author.name }),
                                        e.jsx(Fs, { author: s.author }),
                                    ],
                                }),
                                e.jsxs("small", {
                                    children: ["@", s.author.id, s.author.bio ? ` · ${s.author.bio}` : ""],
                                }),
                            ],
                        }),
                        e.jsx(Ms, { size: 16, className: "cm-chev" }),
                    ],
                }),
                s.sensitive &&
                    e.jsxs("div", {
                        className: `cm-sens-bar s-${s.sensitive}`,
                        children: [
                            e.jsx($n, { size: 16, weight: "fill" }),
                            es[s.sensitive].title,
                            s.isMine ? "（你标的，别人会先看到模糊）" : "",
                        ],
                    }),
                e.jsxs(Yn, {
                    p: s,
                    ax: n,
                    children: [
                        s.text && e.jsx("p", { className: "cm-detail-text", children: s.text }),
                        e.jsx(Jn, { list: s.images, onView: n.view, p: s }),
                        (s.attachments || []).map((c) =>
                            e.jsxs(
                                "div",
                                {
                                    className: "cm-att-wrap",
                                    children: [e.jsx(Xn, { p: s, att: c, ax: n }), e.jsx(Ha, { att: c })],
                                },
                                c.id,
                            ),
                        ),
                    ],
                }),
                e.jsxs("div", {
                    className: "cm-meta",
                    children: [
                        e.jsx("span", {
                            children: `${String(r.getHours()).padStart(2, "0")}:${String(r.getMinutes()).padStart(2, "0")} · ${r.getMonth() + 1}月${r.getDate()}日`,
                        }),
                        s.editedAt ? e.jsx("span", { children: "已编辑" }) : null,
                        e.jsx("button", {
                            className: "cm-zone-tag",
                            onClick: () => n.zone(s.kind),
                            children: Zn(s),
                        }),
                        s.importCount ? e.jsxs("span", { children: [se(s.importCount), " 人导入过"] }) : null,
                    ],
                }),
                e.jsx("div", {
                    className: "cm-rights",
                    children: "作品版权归作者所有。导入仅供个人使用，未经作者允许禁止二传、二改和商用。",
                }),
                e.jsx("div", { className: "cm-react-h", children: "表个态" }),
                e.jsx(Vn, { p: s, full: !0, ax: n }),
            ],
        }),
    });
}
function Ya({ onClose: s, onPosted: n, ax: t, profile: r, editing: c = null }) {
    const { state: a } = zs(),
        [i, l] = g.useState((c == null ? void 0 : c.text) || ""),
        [u, o] = g.useState(() =>
            ((c == null ? void 0 : c.images) || []).map((j) => ({
                ...j,
                kept: !0,
                preview: ne(j.thumb || j.key),
            })),
        ),
        [h, m] = g.useState(() =>
            ((c == null ? void 0 : c.attachments) || []).map((j) => ({ ...j, kept: !0, localId: j.key })),
        ),
        [x, d] = g.useState((c == null ? void 0 : c.sensitive) || ""),
        [p, k] = g.useState(!1),
        [C, P] = g.useState(!1),
        I = g.useRef(null),
        F = g.useRef(null),
        T = g.useMemo(() => ja(a), [a]),
        [y, w] = g.useState(!1),
        E = (j) => {
            const N = new TextEncoder().encode(JSON.stringify(j));
            if (N.length > 2 * 1024 * 1024) {
                t.toast(`群像卡太大了（${X(N.length)}），上限 2 MB，少选几个人或不带头像试试`, "error");
                return;
            }
            if (h.length >= 3) {
                t.toast("一条最多挂 3 个附件", "error");
                return;
            }
            let S = "";
            for (let $ = 0; $ < N.length; $ += 32768)
                S += String.fromCharCode.apply(null, N.subarray($, $ + 32768));
            (m(($) => [
                ...$,
                {
                    localId: `cast${Date.now()}`,
                    kind: "cast",
                    name: j.name,
                    summary: `${j.chars.length} 个人 · ${j.bonds.length} 条关系`,
                    mime: "application/json",
                    data: btoa(S),
                    size: N.length,
                },
            ]),
                w(!1));
        },
        [D, H] = g.useState(null),
        [le, Re] = g.useState(null),
        Oe = We(a),
        Q = Fn(a),
        ae = async (j, N, S) => {
            try {
                const $ = await ba(a, j, N, S);
                if ($.size > ze(j)) throw new Error(`「${$.name}」太大了（${X($.size)}），上限 ${X(ze(j))}`);
                m((O) =>
                    O.some((z) => z.localId === N)
                        ? O.map((z) => (z.localId === N ? { ...$, localId: N } : z))
                        : [...O, { ...$, localId: N }],
                );
            } catch ($) {
                t.toast($.message, "error");
            }
        },
        Ce = async (j, N) => {
            if (h.some((S) => S.localId === N.id)) {
                m((S) => S.filter(($) => $.localId !== N.id));
                return;
            }
            if (h.length >= 3) {
                t.toast("一条最多挂 3 个附件", "error");
                return;
            }
            if (j === "char") {
                H({ id: N.id, initial: null });
                return;
            }
            ae(j, N.id);
        },
        [oe, fe] = g.useState(() => (c ? { zone: c.kind, sub: c.sub || "" } : null)),
        Z = h.map((j) => U[j.kind]).find((j) => (j == null ? void 0 : j.zone)),
        L = oe || (Z ? { zone: Z.zone, sub: Z.sub } : null),
        V = L ? He(L.zone) : null,
        Se = (j) => {
            const N = He(j);
            fe({
                zone: j,
                sub: N.subs.length
                    ? (Z == null ? void 0 : Z.zone) === j
                        ? Z.sub
                        : (L == null ? void 0 : L.zone) === j
                          ? L.sub
                          : N.subs[0][0]
                    : "",
            });
        },
        [je] = g.useState(() => !Wt()),
        [pe, ge] = g.useState(!1),
        [be, ke] = g.useState(!1),
        Y = (i.trim() || u.length || h.length) && !!L && !C && (!je || pe),
        $e = async () => {
            (P(!0), je && Jt());
            try {
                const j = {
                        text: i,
                        sensitive: x,
                        zone: L.zone,
                        sub: L.sub,
                        images: u.map(({ kept: S, key: $, full: O, thumb: z, w: f, h: b }) =>
                            S ? { key: $ } : { full: O, thumb: z, w: f, h: b },
                        ),
                        attachments: h.map(
                            ({ kept: S, key: $, kind: O, name: z, summary: f, mime: b, data: v }) =>
                                S ? { key: $ } : { kind: O, name: z, summary: f, mime: b, data: v },
                        ),
                    },
                    N = c ? await Xt(c.id, j) : await Vt(j);
                n(N.post, !!c);
            } catch (j) {
                (t.toast(J(j), "error"), P(!1));
            }
        };
    return e.jsxs("div", {
        className: "cm-layer cm-compose",
        children: [
            e.jsxs("header", {
                className: "cm-nav",
                children: [
                    e.jsx("button", {
                        className: "cm-back",
                        onClick: s,
                        "aria-label": "取消",
                        children: e.jsx(xe, { size: 22, weight: "bold" }),
                    }),
                    e.jsx("b", { children: c ? "编辑" : "发帖" }),
                    e.jsx("button", {
                        className: "cm-pill",
                        disabled: !Y,
                        onClick: $e,
                        children: C ? (c ? "保存中…" : "发布中…") : c ? "保存" : "发布",
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "cm-scroll",
                children: [
                    e.jsxs("div", {
                        className: "cm-compose-who",
                        children: [
                            e.jsx(Ae, { user: r, size: 36 }),
                            e.jsxs("span", {
                                children: [
                                    e.jsx("b", { children: r == null ? void 0 : r.name }),
                                    e.jsx("small", {
                                        children: L
                                            ? `发到「${[V.name, Ze(L.zone, L.sub)].filter(Boolean).join(" · ")}」`
                                            : "选一个分区（挂上附件会自动选好）",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx("textarea", {
                        autoFocus: !0,
                        className: "cm-compose-text",
                        value: i,
                        maxLength: 2e3,
                        onChange: (j) => l(j.target.value),
                        placeholder: "介绍一下你分享的东西：做了什么、适合什么样的人设、导入后怎么用",
                    }),
                    e.jsxs("div", { className: "cm-count", children: [i.length, " / 2000"] }),
                    u.length > 0 &&
                        e.jsxs("div", {
                            className: "cm-compose-imgs",
                            children: [
                                u.map((j, N) =>
                                    e.jsxs(
                                        "span",
                                        {
                                            children: [
                                                e.jsx("img", { src: j.preview, alt: "" }),
                                                e.jsx("button", {
                                                    onClick: () => o((S) => S.filter(($, O) => O !== N)),
                                                    "aria-label": "移除",
                                                    children: e.jsx(Ys, { size: 12, weight: "bold" }),
                                                }),
                                            ],
                                        },
                                        N,
                                    ),
                                ),
                                u.length < 4 &&
                                    e.jsx("button", {
                                        className: "cm-compose-add",
                                        onClick: () => {
                                            var j;
                                            return (j = I.current) == null ? void 0 : j.click();
                                        },
                                        children: e.jsx(Pn, { size: 22 }),
                                    }),
                            ],
                        }),
                    h.map((j) => {
                        var N;
                        return e.jsxs(
                            "div",
                            {
                                className: "cm-att compose",
                                children: [
                                    e.jsx("span", {
                                        className: "cm-att-ic",
                                        children: nn.createElement(Xe[j.kind] || ns, { size: 20 }),
                                    }),
                                    e.jsxs("span", {
                                        className: "cm-att-t",
                                        children: [
                                            e.jsx("b", { children: j.name }),
                                            e.jsx("small", {
                                                children: [
                                                    (N = U[j.kind]) == null ? void 0 : N.label,
                                                    j.summary,
                                                    X(j.size),
                                                ]
                                                    .filter(Boolean)
                                                    .join(" · "),
                                            }),
                                        ],
                                    }),
                                    j.kind === "char" &&
                                        !j.kept &&
                                        e.jsx("button", {
                                            className: "cm-att-edit",
                                            onClick: () => H({ id: j.localId, initial: j.opts || null }),
                                            children: "编辑",
                                        }),
                                    j.kind === "chatCss" &&
                                        !j.kept &&
                                        (Oe.length > 0 || Q) &&
                                        e.jsx("button", {
                                            className: "cm-att-edit",
                                            onClick: () => Re(j.localId),
                                            children: "头像框",
                                        }),
                                    e.jsx("button", {
                                        className: "cm-x",
                                        onClick: () => m((S) => S.filter(($) => $.localId !== j.localId)),
                                        "aria-label": "移除",
                                        children: e.jsx(Ys, { size: 14, weight: "bold" }),
                                    }),
                                ],
                            },
                            j.localId,
                        );
                    }),
                    e.jsx(Kt, { open: y, onClose: () => w(!1), onPack: E }),
                    e.jsxs("div", {
                        className: "cm-zone-pick",
                        children: [
                            e.jsxs("div", {
                                className: "cm-zone-pick-h",
                                children: [
                                    e.jsx("b", { children: "发到哪个分区" }),
                                    !L && e.jsx("span", { children: "还没选" }),
                                ],
                            }),
                            e.jsx("div", {
                                className: "cm-subs in-compose",
                                children: hs.map((j) => {
                                    const N = Bs[j.k];
                                    return e.jsxs(
                                        "button",
                                        {
                                            className: (L == null ? void 0 : L.zone) === j.k ? "on" : "",
                                            onClick: () => Se(j.k),
                                            children: [e.jsx(N, { size: 14 }), j.name],
                                        },
                                        j.k,
                                    );
                                }),
                            }),
                            (V == null ? void 0 : V.subs.length) > 0 &&
                                e.jsx("div", {
                                    className: "cm-subs in-compose small",
                                    children: V.subs.map(([j, N]) =>
                                        e.jsx(
                                            "button",
                                            {
                                                className: L.sub === j ? "on" : "",
                                                onClick: () => fe({ zone: V.k, sub: j }),
                                                children: N,
                                            },
                                            j,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    e.jsxs("button", {
                        className: "cm-setting in-compose",
                        onClick: () => d((j) => (j ? "" : "nsfw")),
                        children: [
                            e.jsxs("span", {
                                children: [
                                    e.jsx("b", { children: "含 NSFW / 深渊内容" }),
                                    e.jsx("small", {
                                        children: x
                                            ? "别人看到的是模糊的，确认后才能看"
                                            : "成人向，或暗黑、血腥、自伤这类题材请打开；没标的站主可以替你标",
                                    }),
                                ],
                            }),
                            e.jsx("i", { className: `cm-switch ${x ? "on" : ""}` }),
                        ],
                    }),
                    c &&
                        e.jsx("div", {
                            className: "cm-compose-note warn",
                            children:
                                "保存后整条替换：删掉或换掉的图片、附件会从服务器上删除；换过的附件，导入过的人会重新看到「导入」。",
                        }),
                    je &&
                        e.jsxs("label", {
                            className: "cm-terms-agree",
                            children: [
                                e.jsx("input", {
                                    type: "checkbox",
                                    checked: pe,
                                    onChange: (j) => ge(j.target.checked),
                                }),
                                e.jsxs("span", {
                                    children: [
                                        "我确认发布的是本人原创，或已取得原作者授权并注明出处；已阅读并同意",
                                        e.jsxs("button", {
                                            type: "button",
                                            onClick: (j) => {
                                                (j.preventDefault(), ke(!0));
                                            },
                                            children: ["《", bn, "》"],
                                        }),
                                        "。",
                                    ],
                                }),
                            ],
                        }),
                    e.jsxs("div", {
                        className: "cm-compose-note",
                        children: [
                            "别人看到的是你的社区昵称，看不到登录用户名。角色卡默认只带人设和基本资料；头像、名字可以在编辑页修改，绑定的世界书可以逐条选择是否附带。聊天记录和记忆不会带出去。",
                            e.jsx("br", {}),
                            "发布即确认是本人原创或已获授权；禁止抄袭、洗稿、搬运。",
                            e.jsx("button", {
                                type: "button",
                                className: "cm-terms-link",
                                onClick: () => ke(!0),
                                children: "发帖须知",
                            }),
                        ],
                    }),
                ],
            }),
            be && e.jsx(Ga, { onBack: () => ke(!1) }),
            p &&
                e.jsx(Pa, {
                    groups: T,
                    picked: h.map((j) => j.localId),
                    onToggle: Ce,
                    onCast: () => w(!0),
                    onBack: () => k(!1),
                }),
            le &&
                (() => {
                    const j = h.find(($) => $.localId === le),
                        N = j != null && j.opts ? j.opts.frameId : "none",
                        S = ($, O, z) => ({
                            label: $,
                            icon: z ? e.jsx(Is, { size: 18 }) : null,
                            run: () => ae("chatCss", le, O ? { frameId: O } : {}),
                        });
                    return e.jsx(fs, {
                        title: "附带哪一对头像框（对方导入后存进他的头像框库）",
                        onClose: () => Re(null),
                        actions: [
                            ...(Q && !Q.id ? [S(`正在用的：${Q.name}`, null, N === null)] : []),
                            ...Oe.map(($) =>
                                S(
                                    `${$.name || "头像框"}${(Q == null ? void 0 : Q.id) === $.id ? "（正在用）" : ""}`,
                                    $.id,
                                    N === $.id,
                                ),
                            ),
                            S("不附带头像框", "none", N === "none"),
                        ],
                    });
                })(),
            D &&
                e.jsx(Ta, {
                    charId: D.id,
                    initial: D.initial,
                    onBack: () => H(null),
                    onDone: (j) => {
                        const N = D.id;
                        (H(null), ae("char", N, j));
                    },
                }),
            e.jsx("input", {
                ref: I,
                type: "file",
                accept: "image/*",
                multiple: !0,
                hidden: !0,
                onChange: async (j) => {
                    const N = [...(j.target.files || [])].slice(0, 4 - u.length);
                    j.target.value = "";
                    for (const S of N)
                        try {
                            const $ = await wa(S),
                                O = new Uint8Array(await S.arrayBuffer()),
                                z = Ls(O, await Ye(O, S.type).catch(() => null), S.name);
                            (z &&
                                (S.type === "image/png" &&
                                    S.size <= 560 * 1024 &&
                                    ($.full = await new Promise((f, b) => {
                                        const v = new FileReader();
                                        ((v.onload = () => f(v.result)), (v.onerror = b), v.readAsDataURL(S));
                                    })),
                                m((f) =>
                                    f.some((b) => b.kind === z.kind && b.name === z.name)
                                        ? f
                                        : f.length >= 3 || z.bytes.length > ze(z.kind)
                                          ? (t.toast(
                                                `认出这张图是${U[z.kind].label}，但附件已满或太大，没能挂上`,
                                                "error",
                                            ),
                                            f)
                                          : (t.toast(
                                                `认出是${U[z.kind].label}「${z.name}」，已挂成附件，别人能一键导入`,
                                            ),
                                            [...f, Qs(z, `img${Date.now()}${Math.random()}`)]),
                                )),
                                o((f) => [...f, $].slice(0, 4)));
                        } catch ($) {
                            t.toast($.message, "error");
                        }
                },
            }),
            e.jsx("input", {
                ref: F,
                type: "file",
                accept: ".json,.txt,.css,.html,.htm,.png,application/json,text/plain,text/css,text/html,image/png",
                hidden: !0,
                onChange: async (j) => {
                    var b;
                    const N = (b = j.target.files) == null ? void 0 : b[0];
                    if (((j.target.value = ""), !N)) return;
                    if (N.size > Math.max(...Object.values(Zs), ze("file"))) {
                        t.toast(`文件太大了，上限 ${X(Math.max(...Object.values(Zs)))}`, "error");
                        return;
                    }
                    if (h.length >= 3) {
                        t.toast("一条最多挂 3 个附件", "error");
                        return;
                    }
                    const S = new Uint8Array(await N.arrayBuffer());
                    let $ = "";
                    for (let v = 0; v < S.length; v += 32768)
                        $ += String.fromCharCode.apply(null, S.subarray(v, v + 32768));
                    const O = /\.png$/i.test(N.name)
                            ? "image/png"
                            : /\.css$/i.test(N.name)
                              ? "text/css"
                              : /\.json$/i.test(N.name)
                                ? "application/json"
                                : /\.html?$/i.test(N.name)
                                  ? "text/html"
                                  : "text/plain",
                        z = Hn(S, {
                            name: N.name,
                            mime: O,
                            imageData: O === "image/png" ? await Ye(S, O).catch(() => null) : null,
                        }),
                        f = ze(z ? z.kind : "file");
                    if ((z ? z.bytes.length : N.size) > f) {
                        t.toast(
                            `${z ? U[z.kind].label : "文件"}太大了（${X(z ? z.bytes.length : N.size)}），上限 ${X(f)}`,
                            "error",
                        );
                        return;
                    }
                    (z && t.toast(`认出是${U[z.kind].label}「${z.name}」，别人能一键导入`),
                        m((v) => [
                            ...v,
                            z
                                ? Qs(z, `f${Date.now()}`)
                                : {
                                      localId: `f${Date.now()}`,
                                      kind: "file",
                                      name: N.name,
                                      summary: "",
                                      mime: O,
                                      data: btoa($),
                                      size: N.size,
                                  },
                        ]));
                },
            }),
            e.jsxs("footer", {
                className: "cm-tools",
                children: [
                    e.jsx("button", {
                        onClick: () => {
                            var j;
                            return (j = I.current) == null ? void 0 : j.click();
                        },
                        "aria-label": "图片",
                        disabled: u.length >= 4,
                        children: e.jsx(Ge, { size: 22 }),
                    }),
                    e.jsx("button", {
                        onClick: () => {
                            var j;
                            return (j = F.current) == null ? void 0 : j.click();
                        },
                        "aria-label": "文件",
                        children: e.jsx(sa, { size: 22 }),
                    }),
                    e.jsx("button", {
                        className: `cm-tools-local ${p ? "on" : ""}`,
                        onClick: () => k(!0),
                        children: "从本机选要分享的内容",
                    }),
                ],
            }),
        ],
    });
}
function Ga({ onBack: s }) {
    return e.jsx(ts, {
        title: bn,
        back: "返回",
        onBack: s,
        children: e.jsx("div", {
            className: "cm-terms",
            children: Ut.map(([n, t], r) =>
                e.jsxs("p", { children: [e.jsxs("b", { children: [r + 1, ". ", n] }), t] }, n),
            ),
        }),
    });
}
function Ja({ profile: s, first: n, onClose: t, onSaved: r, ax: c }) {
    const [a, i] = g.useState((s == null ? void 0 : s.name) || ""),
        [l, u] = g.useState((s == null ? void 0 : s.bio) || ""),
        [o, h] = g.useState(void 0),
        [m, x] = g.useState(void 0),
        [d, p] = g.useState(!1),
        k = g.useRef(null),
        C = g.useRef(null),
        P = o === void 0 ? (s == null ? void 0 : s.avatar) : o,
        I = m === void 0 ? (s == null ? void 0 : s.cover) : m,
        F = async () => {
            p(!0);
            try {
                const T = await qt({ nickname: a, bio: l, avatar: o, cover: m });
                r(T.profile);
            } catch (T) {
                (c.toast(J(T), "error"), p(!1));
            }
        };
    return e.jsxs("div", {
        className: "cm-layer",
        children: [
            e.jsxs("header", {
                className: "cm-nav",
                children: [
                    e.jsx("button", {
                        className: "cm-back",
                        onClick: t,
                        "aria-label": "取消",
                        children: e.jsx(xe, { size: 22, weight: "bold" }),
                    }),
                    e.jsx("b", { children: n ? "设置社区资料" : "编辑资料" }),
                    e.jsx("button", {
                        className: "cm-pill",
                        disabled: !a.trim() || d,
                        onClick: F,
                        children: d ? "保存中…" : "保存",
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "cm-scroll",
                children: [
                    n &&
                        e.jsxs("div", {
                            className: "cm-first",
                            children: [
                                e.jsx("b", { children: "先给自己起个社区名字" }),
                                e.jsx("span", {
                                    children:
                                        "发帖、表态都用这个名字。和登录账号分开，别人看不到你的登录用户名。",
                                }),
                            ],
                        }),
                    e.jsxs("div", {
                        className: `cm-prof-cover${I ? " has-img" : ""}`,
                        children: [
                            I && e.jsx("img", { src: I.startsWith("data:") ? I : ne(I), alt: "" }),
                            e.jsxs("span", {
                                className: "cm-prof-cover-acts",
                                children: [
                                    I && e.jsx("button", { onClick: () => x(null), children: "移除" }),
                                    e.jsxs("button", {
                                        onClick: () => {
                                            var T;
                                            return (T = C.current) == null ? void 0 : T.click();
                                        },
                                        children: [e.jsx(Ge, { size: 14 }), I ? "更换背景" : "上传背景"],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "cm-prof-av on-cover",
                        children: [
                            e.jsxs("button", {
                                onClick: () => {
                                    var T;
                                    return (T = k.current) == null ? void 0 : T.click();
                                },
                                children: [
                                    e.jsx(Ae, { user: { name: a || "?", avatar: P }, size: 88 }),
                                    e.jsx("span", {
                                        className: "cm-prof-cam",
                                        children: e.jsx(Ge, { size: 14 }),
                                    }),
                                ],
                            }),
                            e.jsxs("span", {
                                className: "cm-prof-btns",
                                children: [
                                    e.jsx("button", {
                                        className: "cm-link",
                                        onClick: () => {
                                            var T;
                                            return (T = k.current) == null ? void 0 : T.click();
                                        },
                                        children: P ? "换头像" : "选头像",
                                    }),
                                    P &&
                                        e.jsx("button", {
                                            className: "cm-link muted",
                                            onClick: () => h(null),
                                            children: "移除",
                                        }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "cm-form",
                        children: [
                            e.jsxs("label", {
                                children: [
                                    e.jsx("span", { children: "昵称" }),
                                    e.jsx("input", {
                                        value: a,
                                        maxLength: 20,
                                        onChange: (T) => i(T.target.value),
                                        placeholder: "社区里显示的名字",
                                    }),
                                    e.jsxs("em", { children: [a.length, "/20"] }),
                                ],
                            }),
                            e.jsxs("label", {
                                children: [
                                    e.jsx("span", { children: "简介" }),
                                    e.jsx("input", {
                                        value: l,
                                        maxLength: 80,
                                        onChange: (T) => u(T.target.value),
                                        placeholder: "一句话介绍自己（可不填）",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "cm-compose-note",
                        children: [
                            s != null && s.id
                                ? `你的短号是 @${s.id}，不会变。`
                                : "保存后会给你一个随机短号，不会变。",
                            "昵称、头像、背景和简介可随时修改。",
                        ],
                    }),
                ],
            }),
            e.jsx("input", {
                ref: k,
                type: "file",
                accept: "image/*",
                hidden: !0,
                onChange: async (T) => {
                    var w;
                    const y = (w = T.target.files) == null ? void 0 : w[0];
                    if (((T.target.value = ""), y))
                        try {
                            h(await ya(y));
                        } catch (E) {
                            c.toast(E.message, "error");
                        }
                },
            }),
            e.jsx("input", {
                ref: C,
                type: "file",
                accept: "image/*",
                hidden: !0,
                onChange: async (T) => {
                    var w;
                    const y = (w = T.target.files) == null ? void 0 : w[0];
                    if (((T.target.value = ""), y))
                        try {
                            x(await Na(y));
                        } catch (E) {
                            c.toast(E.message, "error");
                        }
                },
            }),
        ],
    });
}
function Xa({ ax: s }) {
    const n = Ne({ mine: !0 }, s),
        t = n.ids.map((r) => s.byId[r]).filter((r) => r && (us(r) || r.importCount));
    return n.state === "loading"
        ? e.jsx(Gn, { n: 2 })
        : e.jsxs(e.Fragment, {
              children: [
                  t.length > 0 && e.jsx("div", { className: "cm-sec", children: "我的分享收到的" }),
                  t.map((r) => {
                      var l, u, o, h, m;
                      const c = us(r),
                          a = (l = r.images) == null ? void 0 : l[0],
                          i =
                              Xe[
                                  (o = (u = r.attachments) == null ? void 0 : u[0]) == null ? void 0 : o.kind
                              ] || ns;
                      return e.jsxs(
                          "div",
                          {
                              className: "cm-notif",
                              onClick: () => s.open(r),
                              children: [
                                  e.jsx("span", {
                                      className: "cm-notif-ic",
                                      children: c
                                          ? e.jsx(na, { size: 18, weight: "fill" })
                                          : e.jsx(Me, { size: 18, weight: "bold" }),
                                  }),
                                  e.jsxs("div", {
                                      children: [
                                          e.jsxs("p", {
                                              children: [
                                                  "「",
                                                  ((m = (h = r.attachments) == null ? void 0 : h[0]) == null
                                                      ? void 0
                                                      : m.name) ||
                                                      r.text.slice(0, 14) ||
                                                      "图片",
                                                  "」",
                                              ],
                                          }),
                                          e.jsxs("div", {
                                              className: "cm-notif-chips",
                                              children: [
                                                  r.importCount
                                                      ? e.jsxs("span", {
                                                            className: "strong",
                                                            children: [
                                                                e.jsx(Me, { size: 13, weight: "bold" }),
                                                                r.importCount,
                                                                " 人导入",
                                                            ],
                                                        })
                                                      : null,
                                                  [...Ht, ...kn]
                                                      .filter(([x]) => {
                                                          var d;
                                                          return (d = r.reactions) == null ? void 0 : d[x];
                                                      })
                                                      .map(([x, d]) =>
                                                          e.jsxs(
                                                              "span",
                                                              { children: [d, " ", r.reactions[x]] },
                                                              x,
                                                          ),
                                                      ),
                                              ],
                                          }),
                                          e.jsxs("small", { children: [vn(r.createdAt), "发布"] }),
                                      ],
                                  }),
                                  e.jsx("span", {
                                      className: "cm-notif-th",
                                      children: a
                                          ? e.jsx("img", { src: ne(a.thumb || a.key), alt: "" })
                                          : e.jsx(i, { size: 20 }),
                                  }),
                              ],
                          },
                          r.id,
                      );
                  }),
                  n.state === "ready" &&
                      !t.length &&
                      e.jsx(te, {
                          icon: zn,
                          title: "还没有动静",
                          sub: "你分享的东西收到表态或被导入时，会显示在这里",
                      }),
              ],
          });
}
function Va({ ax: s, me: n, onEdit: t }) {
    const [r, c] = g.useState("mine"),
        a = Ne({ mine: !0 }, s),
        i = Ne({ saved: !0 }, s);
    s.mineRef.current = a;
    const l = a.ids.map((h) => s.byId[h]).filter(Boolean),
        u = {
            posts: l.length,
            imports: l.reduce((h, m) => h + (m.importCount || 0), 0),
            reactions: l.reduce((h, m) => h + us(m), 0),
        },
        o = i.ids.length;
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(qn, {
                profile: n == null ? void 0 : n.profile,
                stats: u,
                quota: s.quota,
                actions: e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs("button", {
                            className: "cm-btn",
                            onClick: t,
                            children: [
                                e.jsx(yn, { size: 13, weight: "bold" }),
                                n != null && n.profile ? "Edit Profile" : "Set Up Profile",
                            ],
                        }),
                        e.jsxs("button", {
                            className: "cm-btn k",
                            onClick: s.compose,
                            children: [e.jsx(Pn, { size: 13, weight: "bold" }), "New Post"],
                        }),
                    ],
                }),
            }),
            e.jsx("div", {
                className: "cm-seg-wrap",
                children: e.jsx(Ds, {
                    value: r,
                    onChange: c,
                    options: [
                        ["mine", "Posts", l.length],
                        ["saved", "Saved", o],
                    ],
                }),
            }),
            r === "mine"
                ? e.jsx(ye, {
                      list: a,
                      ax: s,
                      empty: e.jsx(te, {
                          icon: ss,
                          title: "还没有分享过",
                          sub: "把自己做的美化、角色卡分享出去吧",
                          action: e.jsx("button", {
                              className: "cm-pill",
                              onClick: s.compose,
                              children: "发帖",
                          }),
                      }),
                  })
                : e.jsx(ye, {
                      list: i,
                      ax: s,
                      empty: e.jsx(te, { icon: Es, title: "还没有收藏", sub: "看到喜欢的点右下角的书签" }),
                  }),
        ],
    });
}
function qa({ list: s, index: n, p: t, ax: r, onClose: c }) {
    var p;
    const [a, i] = g.useState(n),
        [l, u] = g.useState({}),
        o = g.useRef(0),
        h = s[a],
        m = h.key || `local${a}`;
    g.useEffect(() => {
        if (l[m] || !h.key) return;
        let k = !1;
        return (
            (async () => {
                try {
                    const C = await fetch(ne(h.key));
                    if (!C.ok) return;
                    const P = C.headers.get("content-type") || "image/jpeg",
                        I = new Uint8Array(await C.arrayBuffer()),
                        F = Ls(I, await Ye(I, P).catch(() => null), `图片${a + 1}`);
                    k || u((T) => ({ ...T, [m]: { bytes: I, mime: P, sniffed: F } }));
                } catch {}
            })(),
            () => {
                k = !0;
            }
        );
    }, [m]);
    const x = l[m],
        d = async (k) => {
            if ((q(k), !x)) {
                r.toast("图片还在加载，稍等一下");
                return;
            }
            (await Ve(
                x.bytes,
                `litot-${(t == null ? void 0 : t.id) || "image"}-${a + 1}.${xs(x.mime)}`,
                x.mime,
            )) === "tap" &&
                r.askTap({
                    label: "存图片",
                    run: () =>
                        Ve(
                            x.bytes,
                            `litot-${(t == null ? void 0 : t.id) || "image"}-${a + 1}.${xs(x.mime)}`,
                            x.mime,
                        ),
                });
        };
    return e.jsxs("div", {
        className: "cm-viewer",
        onClick: c,
        onTouchStart: (k) => {
            o.current = k.touches[0].clientX;
        },
        onTouchEnd: (k) => {
            const C = k.changedTouches[0].clientX - o.current;
            Math.abs(C) > 50 &&
                (k.stopPropagation(), i((P) => Math.max(0, Math.min(s.length - 1, P + (C < 0 ? 1 : -1)))));
        },
        children: [
            e.jsx("img", { src: h.preview || ne(h.key), alt: "" }),
            s.length > 1 &&
                e.jsx("span", {
                    className: "cm-viewer-n",
                    children: s.map((k, C) => e.jsx("i", { className: C === a ? "on" : "" }, C)),
                }),
            h.key &&
                e.jsxs("div", {
                    className: "cm-viewer-bar",
                    onClick: q,
                    children: [
                        e.jsxs("button", { onClick: d, children: [e.jsx(Me, { size: 18 }), "存图"] }),
                        (x == null ? void 0 : x.sniffed) &&
                            e.jsxs("button", {
                                className: "strong",
                                onClick: (k) => {
                                    (q(k),
                                        r.importSniffed(
                                            t,
                                            x.sniffed,
                                            `${t == null ? void 0 : t.id}:img:${h.key}`,
                                        ));
                                },
                                children: [
                                    "导入「",
                                    x.sniffed.name,
                                    "」",
                                    e.jsx("small", {
                                        children: (p = U[x.sniffed.kind]) == null ? void 0 : p.label,
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function fs({ title: s, actions: n, onClose: t }) {
    return e.jsx("div", {
        className: "cm-sheet-bg",
        onClick: t,
        children: e.jsxs("div", {
            className: "cm-sheet",
            onClick: q,
            children: [
                e.jsxs("div", {
                    className: "cm-sheet-g",
                    children: [
                        s && e.jsx("div", { className: "cm-sheet-title", children: s }),
                        n.map((r) =>
                            e.jsxs(
                                "button",
                                {
                                    className: r.danger ? "danger" : "",
                                    onClick: () => {
                                        (t(), r.run());
                                    },
                                    children: [r.icon, r.label],
                                },
                                r.label,
                            ),
                        ),
                    ],
                }),
                e.jsx("div", {
                    className: "cm-sheet-g",
                    children: e.jsx("button", { className: "cancel", onClick: t, children: "取消" }),
                }),
            ],
        }),
    });
}
function Qa({ p: s, onOk: n, onClose: t }) {
    const r = es[s.sensitive];
    return e.jsx("div", {
        className: "cm-alert-bg",
        onClick: t,
        children: e.jsxs("div", {
            className: "cm-alert",
            onClick: q,
            role: "alertdialog",
            "aria-label": r.title,
            children: [
                e.jsx("span", {
                    className: `cm-alert-ic s-${s.sensitive}`,
                    children: e.jsx($n, { size: 22, weight: "fill" }),
                }),
                e.jsx("b", { children: r.title }),
                e.jsx("p", { children: r.desc }),
                e.jsxs("div", {
                    className: "cm-alert-btns",
                    children: [
                        e.jsx("button", { onClick: t, children: "取消" }),
                        e.jsx("button", { className: "strong", onClick: n, children: "我已知晓，查看" }),
                    ],
                }),
            ],
        }),
    });
}
const er = [
    ["share", "社区", ta],
    ["inbox", "通知", zn],
    ["me", "我", Nn],
];
function ir({ onBack: s }) {
    const n = Tt(),
        t = zs(),
        [r, c] = g.useState("share"),
        [a, i] = g.useState([]),
        [l, u] = g.useState(!1),
        [o, h] = g.useState(null),
        [m, x] = g.useState({}),
        [d, p] = g.useState(null),
        [k, C] = g.useState(null),
        [P, I] = g.useState(""),
        [F, T] = g.useState(() => It()),
        [y, w] = g.useState(null),
        [E, D] = g.useState(null),
        [H, le] = g.useState(null),
        [Re, Oe] = g.useState(() => Et()),
        Q = !1,
        [ae, Ce] = g.useState(null),
        [oe, fe] = g.useState(null),
        [Z, L] = g.useState(null),
        V = g.useRef(null),
        Se = g.useRef(null),
        je = g.useRef(null),
        pe = Mt(),
        ge = g.useCallback(
            () =>
                At()
                    .then(p)
                    .catch(() => {}),
            [],
        ),
        be = g.useCallback(
            () =>
                Rt()
                    .then((f) => C(f.zones))
                    .catch(() => {}),
            [],
        );
    g.useEffect(() => {
        pe && (ge(), be());
    }, [pe, ge, be]);
    const ke = g.useCallback((f) => x((b) => ({ ...b, ...Object.fromEntries(f.map((v) => [v.id, v])) })), []),
        Y = (f, b) => x((v) => (v[f] ? { ...v, [f]: b(v[f]) } : v)),
        $e = (f) => i((b) => [...b.filter((v) => !(v.t === f.t && v.id === f.id)), f]),
        j = () => i((f) => f.slice(0, -1)),
        N = () => (d != null && d.profile ? u(!0) : h("first")),
        S = {
            byId: m,
            toast: n,
            upsert: ke,
            busy: P,
            imported: F,
            mineRef: Se,
            zones: k,
            isAdmin: !!(d != null && d.isAdmin),
            quota: d == null ? void 0 : d.quota,
            revealed: Re,
            showSensitive: Q,
            askReveal: (f) => Ce(f),
            open: (f) => f && $e({ t: "post", id: f.id }),
            zone: (f) => $e({ t: "zone", id: f }),
            user: (f) => (f == null ? void 0 : f.id) && $e({ t: "user", id: f.id, u: f }),
            compose: N,
            view: (f, b, v) => w({ list: f, i: b, p: v }),
            askTap: (f) => L(f),
            saveAtt: async (f, b, v = null) => {
                const M = `${f.id}:${b.id}`;
                let A = v;
                if (!A) {
                    I(M);
                    try {
                        A = await Ue(b);
                    } catch (Pe) {
                        (n(J(Pe), "error"), I(""));
                        return;
                    }
                    I("");
                }
                const re = Ma(b);
                (await Ve(A, re, b.mime)) === "tap" &&
                    L({ label: `存「${re}」`, run: () => Ve(A, re, b.mime) });
            },
            importSniffed: async (f, b, v) => {
                var M;
                if (!(F.has(v) && !confirm(`「${b.name}」之前导入过，再导一份？`)))
                    try {
                        if (b.kind === "cast") {
                            fe({ pack: ms(new TextDecoder().decode(b.bytes)), p: f, key: v });
                            return;
                        }
                        const A = await Vs({ kind: b.kind, name: b.name, mime: b.mime }, b.bytes, t);
                        (as(v), T((me) => new Set([...me, v])));
                        const re = f ? await rs(f.id).catch(() => null) : null;
                        (re && Y(f.id, (me) => ({ ...me, importCount: re.importCount })),
                            b.kind === "char"
                                ? Us(b.bytes, { sub: "已添加到联系人" })
                                : Hs(
                                      /^image\/png/.test(b.mime || "")
                                          ? new Blob([b.bytes], { type: "image/png" })
                                          : "",
                                      {
                                          title: "Imported",
                                          lines: [
                                              {
                                                  name: b.name,
                                                  meta: (M = U[b.kind]) == null ? void 0 : M.label,
                                              },
                                              { name: A },
                                          ],
                                      },
                                  ));
                    } catch (A) {
                        n(J(A), "error");
                    }
            },
            menu: (f) => D(f),
            react: async (f, b) => {
                const v = !(f.mine || []).includes(b);
                Y(f.id, (M) => ({
                    ...M,
                    mine: v ? [...M.mine, b] : M.mine.filter((A) => A !== b),
                    reactions: { ...M.reactions, [b]: Math.max(0, (M.reactions[b] || 0) + (v ? 1 : -1)) },
                }));
                try {
                    const M = await Ot(f.id, b, v);
                    Y(f.id, (A) => ({ ...A, ...M }));
                } catch (M) {
                    (Y(f.id, () => f), n(J(M), "error"));
                }
            },
            save: async (f) => {
                const b = !f.savedByMe;
                Y(f.id, (v) => ({ ...v, savedByMe: b }));
                try {
                    (await _t(f.id, b), b && n("已收藏，在「我 → 我收藏的」里"));
                } catch (v) {
                    (Y(f.id, () => f), n(J(v), "error"));
                }
            },
            importAtt: async (f, b) => {
                var M;
                const v = `${f.id}:${b.id}`;
                if (!(b.kind !== "file" && F.has(v) && !confirm(`「${b.name}」之前导入过，再导一份？`))) {
                    I(v);
                    try {
                        const A = await Ue(b);
                        if (b.kind === "cast") {
                            (fe({ pack: ms(new TextDecoder().decode(A)), p: f, key: v }), I(""));
                            return;
                        }
                        const re = await Vs(b, A, t);
                        if (b.kind !== "file") {
                            (as(v), T((Pe) => new Set([...Pe, v])));
                            const me = await rs(f.id).catch(() => null);
                            me && Y(f.id, (Pe) => ({ ...Pe, importCount: me.importCount }));
                        }
                        b.kind === "char"
                            ? Us(A, { sub: "已添加到联系人" })
                            : Hs(Ia(A) ? new Blob([A], { type: "image/png" }) : "", {
                                  title: "Imported",
                                  lines: [
                                      { name: b.name, meta: (M = U[b.kind]) == null ? void 0 : M.label },
                                      { name: re },
                                  ],
                              });
                    } catch (A) {
                        n(J(A), "error");
                    }
                    I("");
                }
            },
        },
        $ = async (f, b) => {
            try {
                (await Zt(f.id, b),
                    Y(f.id, (v) => ({ ...v, sensitive: b })),
                    n(b ? "已标为 NSFW / 深渊" : "已取消标记"));
            } catch (v) {
                n(J(v), "error");
            }
        },
        O = async (f) => {
            if (
                confirm(
                    f.isMine
                        ? "删除这条分享？图片和附件会一起删掉，已经导入过的人不受影响。"
                        : "以站主身份删除这条分享？",
                )
            )
                try {
                    (await Yt(f.id),
                        [V, Se, je].forEach((b) => {
                            var v;
                            return (v = b.current) == null ? void 0 : v.drop(f.id);
                        }),
                        x((b) => {
                            const { [f.id]: v, ...M } = b;
                            return M;
                        }),
                        i((b) => b.filter((v) => !(v.t === "post" && v.id === f.id))),
                        ge(),
                        be(),
                        n("已删除"));
                } catch (b) {
                    n(J(b), "error");
                }
        };
    if (!pe)
        return e.jsxs("div", {
            className: "cm-shell",
            children: [
                e.jsxs("header", {
                    className: "cm-nav",
                    children: [
                        e.jsxs("button", {
                            className: "cm-back",
                            onClick: s,
                            children: [e.jsx(xe, { size: 22, weight: "bold" }), "桌面"],
                        }),
                        e.jsx("b", { children: "社区" }),
                        e.jsx("span", {}),
                    ],
                }),
                e.jsx("div", {
                    className: "cm-body",
                    children: e.jsx(te, { icon: Nn, title: "登录之后才能看社区", sub: "在设置里登录账号" }),
                }),
            ],
        });
    const z = { share: "", inbox: "通知", me: "我" }[r];
    return e.jsxs("div", {
        className: "cm-shell",
        children: [
            e.jsxs("header", {
                className: "cm-nav",
                children: [
                    e.jsxs("button", {
                        className: "cm-back",
                        onClick: s,
                        children: [e.jsx(xe, { size: 22, weight: "bold" }), "桌面"],
                    }),
                    e.jsx("b", { children: z }),
                    e.jsx("span", {
                        className: "cm-nav-r",
                        children:
                            r === "share"
                                ? e.jsx("button", {
                                      className: "cm-icon",
                                      onClick: N,
                                      "aria-label": "发帖",
                                      children: e.jsx(ss, { size: 22 }),
                                  })
                                : null,
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "cm-body",
                children: [
                    r === "share" && e.jsx(Wa, { ax: S, feedRef: V }),
                    r === "inbox" && e.jsx(Xa, { ax: S }),
                    r === "me" &&
                        e.jsx(Va, {
                            ax: S,
                            me: d,
                            onEdit: () => h(d != null && d.profile ? "edit" : "first"),
                        }),
                ],
            }),
            e.jsx("nav", {
                className: "cm-tabbar",
                children: er.map(([f, b, v]) =>
                    e.jsxs(
                        "button",
                        {
                            className: r === f ? "on" : "",
                            onClick: () => {
                                (c(f), i([]));
                            },
                            children: [
                                e.jsx(v, { size: 22, weight: r === f ? "fill" : "regular" }),
                                e.jsx("span", { children: b }),
                            ],
                        },
                        f,
                    ),
                ),
            }),
            a.map((f, b) =>
                e.jsxs(
                    "div",
                    {
                        className: "cm-layer-slot",
                        style: { zIndex: 5 + b },
                        children: [
                            f.t === "post" && m[f.id] && e.jsx(Za, { p: m[f.id], ax: S, onBack: j }),
                            f.t === "zone" && e.jsx(Ka, { k: f.id, ax: S, onBack: j, listRef: je }),
                            f.t === "user" && e.jsx(Ua, { u: f.u, ax: S, onBack: j }),
                        ],
                    },
                    `${f.t}:${f.id}`,
                ),
            ),
            (l || H) &&
                e.jsx(Ya, {
                    ax: S,
                    profile: d == null ? void 0 : d.profile,
                    editing: H,
                    onClose: () => {
                        (u(!1), le(null));
                    },
                    onPosted: (f, b) => {
                        var v, M;
                        if ((ke([f]), ge(), be(), b)) {
                            (le(null), n("已保存"));
                            return;
                        }
                        ((v = V.current) == null || v.add(f.id),
                            (M = Se.current) == null || M.add(f.id),
                            u(!1),
                            i([]),
                            c("share"),
                            n("已发布"));
                    },
                }),
            o &&
                e.jsx(Ja, {
                    ax: S,
                    profile: d == null ? void 0 : d.profile,
                    first: o === "first",
                    onClose: () => h(null),
                    onSaved: (f) => {
                        const b = o === "first" && r === "share";
                        (p((v) => ({ ...(v || {}), profile: f })),
                            x((v) =>
                                Object.fromEntries(
                                    Object.entries(v).map(([M, A]) => [
                                        M,
                                        A.isMine ? { ...A, author: { ...A.author, ...f } } : A,
                                    ]),
                                ),
                            ),
                            h(null),
                            b && u(!0));
                    },
                }),
            y && e.jsx(qa, { list: y.list, index: y.i, p: y.p, ax: S, onClose: () => w(null) }),
            Z &&
                e.jsx(fs, {
                    title: "文件准备好了",
                    onClose: () => L(null),
                    actions: [{ label: Z.label, icon: e.jsx(Me, { size: 18 }), run: Z.run }],
                }),
            E &&
                e.jsx(fs, {
                    title: E.isMine ? null : "站主操作",
                    onClose: () => D(null),
                    actions: [
                        ...(E.isMine
                            ? [{ label: "编辑", icon: e.jsx(yn, { size: 18 }), run: () => le(E) }]
                            : []),
                        ...(!E.isMine && S.isAdmin
                            ? [
                                  E.sensitive
                                      ? {
                                            label: "取消 NSFW / 深渊标记",
                                            icon: e.jsx(Is, { size: 18 }),
                                            run: () => $(E, ""),
                                        }
                                      : {
                                            label: "标为 NSFW / 深渊",
                                            icon: e.jsx(Cn, { size: 18 }),
                                            run: () => $(E, "nsfw"),
                                        },
                              ]
                            : []),
                        { label: "删除这条分享", danger: !0, icon: e.jsx(Qt, { size: 18 }), run: () => O(E) },
                    ],
                }),
            e.jsx(Lt, {
                open: !!oe,
                pack: oe == null ? void 0 : oe.pack,
                onClose: () => fe(null),
                onDone: async () => {
                    const { p: f, key: b } = oe;
                    (as(b), T((M) => new Set([...M, b])));
                    const v = await rs(f.id).catch(() => null);
                    v && Y(f.id, (M) => ({ ...M, importCount: v.importCount }));
                },
            }),
            ae &&
                e.jsx(Qa, {
                    p: ae,
                    onClose: () => Ce(null),
                    onOk: () => {
                        (Bt(ae.id), Oe((f) => new Set([...f, ae.id])), Ce(null));
                    },
                }),
        ],
    });
}
export { ir as default };
