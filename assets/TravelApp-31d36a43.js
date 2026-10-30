import { r as k, j as e, R as De, a as vt } from "./vendor-react-3a46a5d3.js";
import {
    u as ut,
    jq as ss,
    c as ie,
    l as gs,
    a as fe,
    cu as ve,
    jr as ts,
    aD as ls,
    js as As,
    A as qs,
    jt as ds,
    ju as Y,
    jv as jt,
    jw as pt,
    jx as gt,
    jy as Js,
    aq as fs,
    ar as ys,
    jz as ft,
    jA as yt,
    jB as Nt,
    jC as bt,
    jD as Ks,
    jE as kt,
    jF as wt,
    ay as Re,
    dx as oe,
    jG as Tt,
    jH as St,
    fj as Us,
    jI as $t,
    jJ as Ct,
    jK as It,
    ed as Mt,
    dw as At,
    jL as Ce,
    jM as Xe,
    jN as ns,
    jO as os,
    jP as Dt,
    f as ms,
    jQ as Ns,
    jR as Et,
    jS as Ft,
    jT as Vs,
    jU as xe,
    jV as is,
    jW as Qs,
    jX as Be,
    jY as le,
    jZ as zt,
    j_ as Ee,
    j$ as Se,
    k0 as rs,
    k1 as Wt,
    k2 as Lt,
    k3 as he,
    k4 as Ds,
    k5 as Pt,
    k6 as Ys,
    k7 as Gs,
    k8 as Xs,
    k9 as Ot,
    ka as Rt,
    kb as Bt,
    kc as Ht,
    kd as _t,
    ke as qt,
    kf as Jt,
    kg as Kt,
    kh as Zs,
    ki as Ut,
    kj as Vt,
    kk as hs,
    kl as Es,
    d9 as Qt,
    km as Yt,
    kn as Gt,
    ko as Xt,
    kp as Fs,
    q as Zt,
    kq as et,
    kr as xs,
    ks as $e,
    b9 as zs,
    ca as en,
    kt as bs,
    ku as sn,
    kv as tn,
    kw as nn,
    kx as vs,
    ky as an,
    kz as cs,
    kA as ks,
    kB as ln,
    kC as Ze,
    kD as es,
    kE as rn,
    kF as cn,
    kG as dn,
    kH as ge,
    kI as on,
    kJ as mn,
    bj as hn,
    kK as xn,
} from "./app-2c902988.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-icons-e63d3118.js";
import "./vendor-leaflet-f4c2a8c5.js";
function Z() {
    const { state: s, patch: t, patchChar: n } = ut(),
        l = ss(s),
        c = k.useCallback(
            (d) =>
                t((r) => {
                    const x = ss(r);
                    return { travel: { ...x, ...d(x) } };
                }),
            [t],
        ),
        a = k.useCallback(
            (d, r) =>
                c((x) => ({
                    trips: x.trips.map((i) =>
                        i.id === d
                            ? { ...i, ...(typeof r == "function" ? r(i) : r), updatedAt: Date.now() }
                            : i,
                    ),
                })),
            [c],
        );
    return { state: s, tv: l, update: c, putTrip: a, patch: t, patchChar: n };
}
const Ne = (s) =>
        function ({ size: n = 20 }) {
            return e.jsx("svg", {
                width: n,
                height: n,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: s,
            });
        },
    vn = Ne(
        e.jsxs(e.Fragment, {
            children: [
                e.jsx("path", {
                    d: "M10.5 13.5 3 11l1.5-1.5 7 1 4.5-4.5c.8-.8 2.2-.8 2.9-.1.7.7.7 2.1-.1 2.9L14.3 13.3l1 7-1.5 1.5-2.5-7.5",
                }),
                e.jsx("path", { d: "M6 17.5 3.5 20.5" }),
            ],
        }),
    ),
    un = Ne(
        e.jsxs(e.Fragment, {
            children: [
                e.jsx("circle", { cx: "6", cy: "5.5", r: "2" }),
                e.jsx("circle", { cx: "18", cy: "18.5", r: "2" }),
                e.jsx("path", { d: "M8 5.5h7.5a3.5 3.5 0 0 1 0 7h-7a3.5 3.5 0 0 0 0 7H16" }),
            ],
        }),
    ),
    jn = Ne(
        e.jsxs(e.Fragment, {
            children: [
                e.jsx("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "5" }),
                e.jsx("path", { d: "M12 8.5v7M8.5 12h7" }),
            ],
        }),
    ),
    pn = Ne(
        e.jsxs(e.Fragment, {
            children: [
                e.jsx("path", { d: "M5 4.5h11.5a2 2 0 0 1 2 2v13H7a2 2 0 0 1-2-2z" }),
                e.jsx("path", { d: "M5 17.5a2 2 0 0 1 2-2h11.5" }),
                e.jsx("path", { d: "M9 8.5h5.5" }),
            ],
        }),
    ),
    gn = Ne(
        e.jsxs(e.Fragment, {
            children: [
                e.jsx("rect", { x: "5", y: "3.5", width: "14", height: "17", rx: "2.5" }),
                e.jsx("circle", { cx: "12", cy: "11", r: "3" }),
                e.jsx("path", { d: "M9.5 16.5h5" }),
            ],
        }),
    ),
    Fe = Ne(e.jsx("path", { d: "M14.5 5.5 8 12l6.5 6.5" })),
    st = Ne(
        e.jsxs(e.Fragment, {
            children: [
                e.jsx("circle", { cx: "6", cy: "12", r: ".6", fill: "currentColor" }),
                e.jsx("circle", { cx: "12", cy: "12", r: ".6", fill: "currentColor" }),
                e.jsx("circle", { cx: "18", cy: "12", r: ".6", fill: "currentColor" }),
            ],
        }),
    ),
    fn = Ne(e.jsx("path", { d: "M12 18.5v-13M6.5 11 12 5.5 17.5 11" }));
function yn({ tab: s, onTab: t }) {
    const n = [
        ["home", "旅行", vn],
        ["plan", "行程", un],
        ["new", "发起", jn],
        ["journal", "手账", pn],
        ["passport", "护照", gn],
    ];
    return e.jsx("nav", {
        className: "tv-tab",
        children: n.map(([l, c, a]) =>
            e.jsxs(
                "button",
                { className: s === l ? "on" : "", onClick: () => t(l), children: [e.jsx(a, {}), c] },
                l,
            ),
        ),
    });
}
function tt({ src: s, className: t = "", style: n }) {
    return e.jsx("span", {
        className: `tv-ph ${t}`,
        style: { display: "block", ...n },
        children: s ? e.jsx(gs, { src: s, alt: "" }) : null,
    });
}
function ye({ char: s, me: t, label: n }) {
    const l = (s == null ? void 0 : s.avatar) || (t == null ? void 0 : t.avatar),
        c = n || (s ? (ie(s) || "·").slice(0, 1) : "我");
    return e.jsx("span", { className: "tv-av", children: l ? e.jsx(gs, { src: l, alt: "" }) : c });
}
function ze({ en: s, name: t, date: n, empty: l = !1, size: c = 62 }) {
    const a = l
        ? e.jsxs("span", {
              className: "tv-stamp empty",
              children: [e.jsx("span", { children: "NEXT" }), e.jsx("b", { children: "?" })],
          })
        : e.jsxs("span", {
              className: "tv-stamp",
              children: [
                  e.jsx("span", { children: (s || t || "").slice(0, 9) }),
                  e.jsx("b", { className: "tn", children: Y(n) }),
                  s && t ? e.jsx("small", { children: t.slice(0, 4) }) : null,
              ],
          });
    return c === 62
        ? a
        : e.jsx("span", {
              style: { width: c, height: c, flex: "none", display: "inline-block" },
              children: e.jsx("span", {
                  style: { display: "inline-block", transform: `scale(${c / 62})`, transformOrigin: "0 0" },
                  children: a,
              }),
          });
}
function Nn({ rb: s, doneLegs: t = 0 }) {
    const n = jt(s);
    if (!n)
        return e.jsx("div", {
            className: "tv-empty",
            style: { padding: "28px 0" },
            children: "行程站点缺少位置信息，暂时无法绘制路线。",
        });
    const l = [],
        c = (a, d, r) => {
            const x = Math.max(1, [...r].length) * 8,
                i = 9,
                m = [
                    { x: a[0], y: a[1] + 15, a: "middle" },
                    { x: a[0], y: a[1] - 9, a: "middle" },
                    { x: a[0] + 8, y: a[1] + 3, a: "start" },
                    { x: a[0] - 8, y: a[1] + 3, a: "end" },
                ];
            for (const v of m) {
                const j = v.a === "middle" ? v.x - x / 2 : v.a === "start" ? v.x : v.x - x,
                    o = [j, v.y - i + 1, j + x, v.y + 1];
                if (o[0] < 0 || o[2] > n.W || o[1] < 0 || o[3] > n.H) continue;
                const h = n.pos.some(
                        (u, C) =>
                            C !== d &&
                            u[0] > o[0] - 5 &&
                            u[0] < o[2] + 5 &&
                            u[1] > o[1] - 5 &&
                            u[1] < o[3] + 5,
                    ),
                    p = l.some((u) => !(o[2] < u[0] || o[0] > u[2] || o[3] < u[1] || o[1] > u[3])),
                    I = n.segs.some((u) =>
                        u.pts.some(
                            (C) =>
                                C[0] > o[0] - 1.5 &&
                                C[0] < o[2] + 1.5 &&
                                C[1] > o[1] - 1.5 &&
                                C[1] < o[3] + 1.5,
                        ),
                    );
                if (!h && !p && !I) return (l.push(o), v);
            }
            for (const v of m) {
                const j = v.a === "middle" ? v.x - x / 2 : v.a === "start" ? v.x : v.x - x,
                    o = [j, v.y - i + 1, j + x, v.y + 1];
                if (
                    !(o[0] < 0 || o[2] > n.W || o[1] < 0 || o[3] > n.H) &&
                    !n.pos.some(
                        (h, p) =>
                            p !== d &&
                            h[0] > o[0] - 5 &&
                            h[0] < o[2] + 5 &&
                            h[1] > o[1] - 5 &&
                            h[1] < o[3] + 5,
                    ) &&
                    !l.some((h) => !(o[2] < h[0] || o[0] > h[2] || o[3] < h[1] || o[1] > h[3]))
                )
                    return (l.push(o), v);
            }
            return null;
        };
    return e.jsxs("svg", {
        viewBox: `0 0 ${n.W} ${n.H}`,
        width: "100%",
        fill: "none",
        style: { display: "block", height: "auto" },
        children: [
            n.segs.map((a, d) => {
                if (d < t)
                    return e.jsx(
                        "path",
                        {
                            d: a.d,
                            stroke: "#141414",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            fill: "none",
                        },
                        d,
                    );
                const r = Math.max(1, Math.round(a.len / 7.5));
                return e.jsx(
                    "path",
                    {
                        d: a.d,
                        pathLength: r * 7.5,
                        stroke: "#141414",
                        strokeWidth: "1.6",
                        fill: "none",
                        strokeDasharray: "4 3.5",
                        strokeDashoffset: "-1.75",
                    },
                    d,
                );
            }),
            n.segs.map((a, d) =>
                a.rest
                    ? e.jsxs(
                          "g",
                          {
                              children: [
                                  e.jsx("circle", { cx: a.rest[0], cy: a.rest[1], r: "4.2", fill: "#fff" }),
                                  e.jsx("circle", {
                                      cx: a.rest[0],
                                      cy: a.rest[1],
                                      r: "3.2",
                                      fill: "#bdbdb9",
                                  }),
                              ],
                          },
                          `r${d}`,
                      )
                    : null,
            ),
            n.pos.map((a, d) => {
                if (s.stations[d].end && Math.hypot(a[0] - n.pos[0][0], a[1] - n.pos[0][1]) < 1) return null;
                const i = d === 0 || d <= t;
                return e.jsx(
                    "circle",
                    {
                        cx: a[0],
                        cy: a[1],
                        r: "4.5",
                        fill: i ? "#141414" : "#fff",
                        stroke: "#141414",
                        strokeWidth: "1.6",
                    },
                    `s${d}`,
                );
            }),
            n.pos.map((a, d) => {
                const r = s.stations[d];
                if (r.end && Math.hypot(a[0] - n.pos[0][0], a[1] - n.pos[0][1]) < 1) return null;
                const x = String(r.name).slice(0, 6),
                    i = c(a, d, x);
                return i
                    ? e.jsx(
                          "text",
                          { x: i.x, y: i.y, fontSize: "8", fill: "#5c5c5a", textAnchor: i.a, children: x },
                          `t${d}`,
                      )
                    : null;
            }),
        ],
    });
}
function bn({ rb: s, charName: t, meName: n }) {
    return e.jsx(e.Fragment, {
        children: s.days.map((l) =>
            e.jsxs(
                De.Fragment,
                {
                    children: [
                        e.jsxs("div", {
                            className: "tv-leg",
                            children: [
                                e.jsx("i", { className: "dot" }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsxs("b", {
                                            children: ["Day ", l.day, " · ", l.from, " → ", l.to],
                                        }),
                                        e.jsxs("div", {
                                            className: "tv-s",
                                            children: [
                                                l.driver === "me" ? n : t,
                                                "驾驶",
                                                l.legs > 1 ? ` · ${l.legs} 段` : "",
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsxs("span", {
                                    className: "tv-s tn",
                                    children: [l.km, " km · ", pt(l.min)],
                                }),
                            ],
                        }),
                        s.legs
                            .filter((c) => c.day === l.day && c.rest)
                            .map((c) =>
                                e.jsxs(
                                    "div",
                                    {
                                        className: "tv-leg",
                                        children: [
                                            e.jsx("i", { className: "dot rest" }),
                                            e.jsxs("div", {
                                                children: [
                                                    "休息站",
                                                    e.jsxs("div", {
                                                        className: "tv-s",
                                                        children: [c.from, " — ", c.to, " 中途"],
                                                    }),
                                                ],
                                            }),
                                            e.jsxs("span", {
                                                className: "tv-s tn",
                                                children: ["+", c.rest.min, " min"],
                                            }),
                                        ],
                                    },
                                    `r${c.i}`,
                                ),
                            ),
                    ],
                },
                l.day,
            ),
        ),
    });
}
function kn({ v: s, onClick: t }) {
    const n = s.kind === "flight" || s.kind === "train" || s.kind === "drive",
        l =
            {
                flight: "Flight",
                train: "Train",
                drive: "Road book",
                stay: "Stay",
                table: "Table",
                ticket: "Ticket",
                gift: "Souvenir",
            }[s.kind] || "Ticket";
    return e.jsxs("button", {
        className: `tv-voucher tv-press${n ? " dark" : ""}`,
        onClick: t,
        style: { display: "block", width: "100%", textAlign: "left" },
        children: [
            e.jsxs("div", {
                className: "vh",
                children: [
                    e.jsxs("div", {
                        style: { minWidth: 0 },
                        children: [
                            e.jsx("div", { className: "tv-k", children: s.ret ? "Return" : l }),
                            e.jsx("b", { className: "tn", children: s.title }),
                        ],
                    }),
                    e.jsx("span", {
                        className: "tv-s tn",
                        style: { flex: "none", opacity: n ? 0.7 : 1 },
                        children: Y(s.date),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "vb",
                children: [
                    e.jsx("span", { className: "tn", children: s.sub }),
                    e.jsx("span", { children: s.right || (s.by === "char" ? "他预订" : "") }),
                ],
            }),
        ],
    });
}
function nt({ children: s }) {
    const [t, n] = k.useState(null),
        l = k.useCallback((c) => {
            c && n(c.closest(".tv"));
        }, []);
    return t ? vt.createPortal(s, t) : e.jsx("span", { ref: l, hidden: !0 });
}
function me({ open: s, onClose: t, children: n }) {
    return s
        ? e.jsxs(nt, {
              children: [
                  e.jsx("div", { className: "tv-scrim", onClick: t }),
                  e.jsxs("div", {
                      className: "tv-sheet",
                      role: "dialog",
                      children: [e.jsx("div", { className: "grab" }), n],
                  }),
              ],
          })
        : null;
}
function Ae({ on: s, onChange: t }) {
    return e.jsx("button", { className: `tv-sw${s ? " on" : ""}`, onClick: () => t(!s), "aria-pressed": s });
}
const Ws = new Set();
function Ie({
    cat: s = "dest",
    k: t,
    look: n = "",
    place: l = "",
    img: c = null,
    shift: a = 0,
    base: d = 0,
    desc: r = "",
    label: x = "",
    editable: i = !1,
    auto: m = !1,
    onChange: v,
    className: j = "",
    style: o,
}) {
    const { state: h } = Z(),
        p = fe(),
        [I, u] = k.useState(!1),
        C = `travel-img-${s}-${t}-${d}`,
        b = ve(C),
        O = ts(h),
        S = ls(h, "travel"),
        T = c || As(s, t, { look: n, place: l, shift: (Number(a) || 0) + d }),
        $ = (W = !1) => {
            if (!S) {
                W || p("请先在 设置 → 生图 中配置接口并开启「旅行」", "error");
                return;
            }
            b.run(
                async (M) => {
                    const L = await gt(h, {
                        desc: Js(
                            `${r}
画面里没有人：不出现任何人物、人影或身体局部，只拍地方与物件本身。`,
                            O,
                        ),
                        charId: null,
                        orient: "landscape",
                        signal: M,
                        context: { text: r },
                    });
                    return (v == null || v({ img: L }), L);
                },
                { label: "旅行图片" },
            ).then((M) => {
                M != null && M.error && !W && p(M.error.message || String(M.error), "error");
            });
        };
    return (
        k.useEffect(() => {
            !m || c || !S || !O.imageAuto || !r || !v || Ws.has(C) || (Ws.add(C), $(!0));
        }, [m, c, S, O.imageAuto, C]),
        e.jsxs("span", {
            className: `tv-ph tv-img ${j}${!c && !T ? " text" : ""}`,
            style: { display: "block", ...o },
            children: [
                c
                    ? e.jsx(gs, { src: c, alt: "" })
                    : T
                      ? e.jsx("img", { src: T, alt: "", loading: "lazy", decoding: "async" })
                      : e.jsx("span", { className: "tv-img-name", children: x }),
                b.busy &&
                    e.jsx("span", {
                        className: "tv-img-busy",
                        children: e.jsx("span", { className: "tv-spin" }),
                    }),
                i &&
                    e.jsx("button", {
                        className: "tv-img-btn",
                        onClick: (W) => {
                            (W.stopPropagation(), b.busy ? b.stop() : u(!0));
                        },
                        "aria-label": "更换图片",
                        children: e.jsxs("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.8",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                e.jsx("path", { d: "M20 11a8 8 0 0 0-14.3-4.9L4 8" }),
                                e.jsx("path", { d: "M4 4v4h4" }),
                                e.jsx("path", { d: "M4 13a8 8 0 0 0 14.3 4.9L20 16" }),
                                e.jsx("path", { d: "M20 20v-4h-4" }),
                            ],
                        }),
                    }),
                i &&
                    e.jsx(qs, {
                        open: I,
                        onClose: () => u(!1),
                        title: "图片",
                        message: S
                            ? `按「${(ds.find(([W]) => W === O.imageStyle) || ds[1])[1]}」风格生成，可在旅行设置中修改。`
                            : "开启旅行生图后可以按内容生成。",
                        actions: [
                            { label: c ? "重新生成" : "生成图片", onClick: () => $(!1) },
                            ...(As(s, t)
                                ? [
                                      {
                                          label: "换一张（内置图库）",
                                          onClick: () =>
                                              v == null
                                                  ? void 0
                                                  : v({ img: null, shift: (Number(a) || 0) + 1 }),
                                      },
                                  ]
                                : []),
                            ...(c
                                ? [
                                      {
                                          label: "恢复默认",
                                          onClick: () => (v == null ? void 0 : v({ img: null })),
                                      },
                                  ]
                                : []),
                        ],
                    }),
            ],
        })
    );
}
const at = fs(ys, "旅行");
function wn(s, t = "offline") {
    const n = new Set();
    return [t, "offline", "social", "chat"]
        .map((l) => at.usableLane(Us(s, l)))
        .filter((l) => {
            if (!(l != null && l.baseUrl)) return !1;
            const c = `${l.baseUrl}|${l.model}|${l.apiKey || ""}`;
            return n.has(c) ? !1 : (n.add(c), !0);
        });
}
const Ls = (s) =>
    typeof (s == null ? void 0 : s.content) == "string"
        ? s.content
        : typeof (s == null ? void 0 : s.text) == "string"
          ? s.text
          : "";
function He(s, t, n = null) {
    var l;
    return (l = n == null ? void 0 : n.origin) != null && l.name
        ? `- Where you two set out from: ${n.origin.name}`
        : "(the two of you)";
}
function Tn(s, t) {
    return ((t == null ? void 0 : t.messages) || [])
        .filter((n) => (n.role === "user" || n.role === "assistant") && Ls(n))
        .slice(-16)
        .map((n) => ({ role: n.role, content: `${At(n.createdAt)}${Ls(n).slice(0, 600)}` }));
}
function Sn(s, t, n) {
    return [
        ...(t ? $t(s, t) : []),
        ...(t ? Tn(s, t) : []),
        ...n,
        ...(t ? [Ct(s, t)].filter(Boolean) : []),
        {
            role: "user",
            content:
                "(System note: now write the JSON described in the task above, as yourself. Output only the JSON, no other text.)",
        },
    ];
}
function $n(s) {
    return (
        It(s) ||
        (() => {
            try {
                return Mt(s);
            } catch {
                return null;
            }
        })()
    );
}
async function We(s, t, n, l, { first: c = "offline" } = {}) {
    const a = wn(s, c);
    if (!a.length) throw new Error("请先在 设置 → 模型与 API 中配置模型通道");
    const d = Sn(s, t, n);
    let r = null;
    for (const x of a)
        try {
            const i = await at.chat(x, d, { signal: l, temperature: 0.8, _keepAlive: !0 }),
                m = $n(Ks(String((i == null ? void 0 : i.content) || "")));
            if (m && typeof m == "object") return m;
            r = new Error("返回的内容无法解析");
        } catch (i) {
            if ((l != null && l.aborted) || (i == null ? void 0 : i.name) === "AbortError") throw i;
            r = i;
        }
    throw r || new Error("返回的内容无法解析，请重试");
}
async function Cn(s, t, n, l) {
    const c = await We(s, t, ft(He(), n), l),
        a = yt(c);
    if (!a.length) throw new Error("没有得到推荐，请重试");
    return a;
}
const In = (s, t, n, l) => We(s, t, Nt(He(s, t, n), n), l),
    lt = (s, t, n, l, c) => We(s, t, kt(He(s, t, n), n, l), c),
    Mn = (s, t, n, l, c) => We(s, t, bt(He(s, t, n), n, l), c);
async function An(s, t, n, { writeMemory: l }, c) {
    return We(s, t, wt(He(s, t, n), n, { writeMemory: l, charName: Re(t), meName: oe(s.me) }), c);
}
async function Dn(s, t, n) {
    const l = Tt(await We(s, null, St(t), n, { first: "social" }));
    if (!l) throw new Error("模板生成失败，请重试");
    return { ...l, direction: String(t || "").slice(0, 120) };
}
const En = (s) => {
    try {
        window.dispatchEvent(new CustomEvent("litot:request-reply", { detail: { charId: s } }));
    } catch {}
};
function Fn({ char: s, onDone: t, onCancel: n }) {
    const { state: l, update: c, patchChar: a } = Z(),
        d = fe(),
        [r, x] = k.useState(0),
        [i, m] = k.useState(() => {
            var w;
            return ((w = l.travel) == null ? void 0 : w.lastOrigin) || "";
        }),
        [v, j] = k.useState(null),
        [o, h] = k.useState(""),
        [p, I] = k.useState(() => {
            var w, P;
            return ((P = (w = l.travel) == null ? void 0 : w.suggest) == null ? void 0 : P[s.id]) || [];
        }),
        [u, C] = k.useState(4),
        [b, O] = k.useState(() => Ce(Xe(), 7)),
        [S, T] = k.useState("normal"),
        [$, W] = k.useState("real"),
        [M, L] = k.useState(""),
        y = ve(`travel-suggest-${s.id}`),
        f = ie(s),
        N = () =>
            y
                .run(async (w) => {
                    const P = await Cn(l, s, { days: u, month: `${Number(b.split("-")[1])}月` }, w);
                    return (c((B) => ({ suggest: { ...(B.suggest || {}), [s.id]: P } })), I(P), P);
                })
                .then((w) => {
                    w != null && w.error && d(w.error.message || String(w.error), "error");
                }),
        E = v || (o.trim() ? { name: o.trim(), en: "" } : null),
        F = [!0, !!E, !!b && u > 0, !0][r],
        D = (w) => {
            const P = {
                ...Dt({
                    charId: s.id,
                    dest: { ...E, look: E.look || ns(E.name, (E.tags || []).join(" ")) },
                    origin: i.trim(),
                    startDate: $ === "real" ? b : Xe(),
                    days: u,
                    pace: S,
                    timeMode: $,
                }),
                status: w ? "invited" : "planning",
            };
            if (
                (v != null && v.quote && (P.destQuote = v.quote),
                v != null && v.img && (P.cover = { img: v.img }),
                w)
            ) {
                const B = ms("m_");
                ((P.invite = { msgId: B, status: "pending", at: Date.now() }),
                    a(s.id, (V) => ({
                        messages: [
                            ...(V.messages || []),
                            {
                                id: B,
                                role: "user",
                                type: "travel_invite_card",
                                content: "",
                                createdAt: Date.now(),
                                status: "pending",
                                tripId: P.id,
                                dest: P.dest.name,
                                en: P.dest.en,
                                origin: P.origin.name,
                                startDate: P.startDate,
                                days: u,
                                timeMode: $,
                                note: M.trim().slice(0, 80),
                            },
                        ],
                    })));
            }
            (c((B) => ({ trips: [P, ...B.trips], lastOrigin: i.trim() })), w && En(s.id), t(P.id, w));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className: "tv-scroll",
                style: { paddingBottom: "calc(var(--sab, 0px) + 170px)" },
                children: [
                    e.jsxs("div", {
                        className: "tv-row",
                        children: [
                            e.jsxs("span", {
                                className: "tv-k",
                                children: ["Step ", r + 1, " / 4 · ", ["Who", "Where", "When", "Invite"][r]],
                            }),
                            e.jsx("button", {
                                className: "tv-s",
                                onClick: r === 0 ? n : () => x(r - 1),
                                children: r === 0 ? "取消" : "上一步",
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        className: "tv-steps",
                        children: [0, 1, 2, 3].map((w) => e.jsx("i", { className: w <= r ? "on" : "" }, w)),
                    }),
                    r === 0 &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx("div", {
                                    className: "tv-h",
                                    style: { marginTop: 16 },
                                    children: "同行者",
                                }),
                                e.jsx("div", { className: "tv-s", children: "本次旅行的同行者与出发地。" }),
                                e.jsxs("div", {
                                    className: "tv-card",
                                    style: { marginTop: 16, padding: "4px 16px" },
                                    children: [
                                        e.jsxs("div", {
                                            className: "tv-field",
                                            children: [
                                                e.jsx("span", { children: "同行者" }),
                                                e.jsxs("span", {
                                                    style: { display: "flex", alignItems: "center", gap: 8 },
                                                    children: [e.jsx(ye, { char: s }), f],
                                                }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "tv-field",
                                            children: [
                                                e.jsx("span", { children: "出发地" }),
                                                e.jsx("input", {
                                                    value: i,
                                                    onChange: (w) => m(w.target.value),
                                                    placeholder: "城市名称",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsx("div", {
                                    className: "tv-s",
                                    style: { marginTop: 10, lineHeight: 1.7 },
                                    children:
                                        "出发地用于安排往返交通与自驾路线；留空时由他依据你们所在的城市确定。",
                                }),
                            ],
                        }),
                    r === 1 &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsxs("div", {
                                    className: "tv-row",
                                    style: { marginTop: 16 },
                                    children: [
                                        e.jsx("div", { className: "tv-h", children: "目的地" }),
                                        e.jsx("button", {
                                            className: "tv-chip",
                                            onClick: y.busy ? y.stop : N,
                                            children: y.busy
                                                ? e.jsxs(e.Fragment, {
                                                      children: [
                                                          e.jsx("span", {
                                                              className: "tv-spin",
                                                              style: {
                                                                  width: 10,
                                                                  height: 10,
                                                                  marginRight: 6,
                                                              },
                                                          }),
                                                          "停止",
                                                      ],
                                                  })
                                                : p.length
                                                  ? "重新推荐"
                                                  : `请${f}推荐`,
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "tv-s",
                                    children: [f, "依据人设、聊天与记忆推荐，也可以自行填写。"],
                                }),
                                p.map((w, P) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            className: `tv-opt tv-press${(v == null ? void 0 : v.name) === w.name ? " on" : ""}`,
                                            style: { marginTop: 12, display: "flex", gap: 12 },
                                            onClick: () => {
                                                (j(w), h(""), w.days && C(w.days));
                                            },
                                            children: [
                                                e.jsx(Ie, {
                                                    cat: "dest",
                                                    k: `sug${P}`,
                                                    place: `${w.name} ${w.en || ""}`,
                                                    look: w.look || ns(w.name, w.tags.join(" ")),
                                                    img: w.img,
                                                    desc: `${w.name}的风景${w.tags.length ? `，${w.tags.join("、")}` : ""}`,
                                                    onChange: (B) => {
                                                        const V = p.map((te, re) =>
                                                            re === P ? { ...te, ...B } : te,
                                                        );
                                                        (I(V),
                                                            c((te) => ({
                                                                suggest: { ...(te.suggest || {}), [s.id]: V },
                                                            })));
                                                    },
                                                    style: {
                                                        width: 70,
                                                        height: 84,
                                                        borderRadius: 12,
                                                        flex: "none",
                                                    },
                                                }),
                                                e.jsxs("span", {
                                                    style: { flex: 1, minWidth: 0 },
                                                    children: [
                                                        e.jsxs("span", {
                                                            className: "tv-row",
                                                            children: [
                                                                e.jsx("b", {
                                                                    style: { fontSize: 15 },
                                                                    children: w.name,
                                                                }),
                                                                (v == null ? void 0 : v.name) === w.name &&
                                                                    e.jsx("span", {
                                                                        className: "tv-chip",
                                                                        style: { height: 19 },
                                                                        children: "已选",
                                                                    }),
                                                            ],
                                                        }),
                                                        e.jsxs("span", {
                                                            className: "tv-s",
                                                            style: { display: "block", marginTop: 2 },
                                                            children: [
                                                                w.days,
                                                                " 天",
                                                                w.tags.length
                                                                    ? ` · ${w.tags.join(" · ")}`
                                                                    : "",
                                                            ],
                                                        }),
                                                        w.quote &&
                                                            e.jsxs("span", {
                                                                className: "tv-quote",
                                                                style: { display: "block" },
                                                                children: ["「", w.quote, "」"],
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        w.name,
                                    ),
                                ),
                                e.jsx("div", {
                                    className: "tv-card",
                                    style: { marginTop: 12, padding: "4px 16px" },
                                    children: e.jsxs("div", {
                                        className: "tv-field",
                                        children: [
                                            e.jsx("span", { children: "自行填写" }),
                                            e.jsx("input", {
                                                value: o,
                                                onChange: (w) => {
                                                    (h(w.target.value), j(null));
                                                },
                                                placeholder: "城市或地区",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    r === 2 &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx("div", {
                                    className: "tv-h",
                                    style: { marginTop: 16 },
                                    children: "日期与天数",
                                }),
                                e.jsx("div", {
                                    className: "tv-s",
                                    children:
                                        "现实时间按真实日期出发；虚拟时间可立即出发，旅途按自己的时钟进行。",
                                }),
                                e.jsxs("div", {
                                    className: "tv-mode",
                                    children: [
                                        e.jsx("button", {
                                            className: $ === "real" ? "on" : "",
                                            onClick: () => W("real"),
                                            children: "现实时间",
                                        }),
                                        e.jsx("button", {
                                            className: $ === "virtual" ? "on" : "",
                                            onClick: () => W("virtual"),
                                            children: "虚拟时间",
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "tv-card",
                                    style: { marginTop: 12, padding: "4px 16px" },
                                    children: [
                                        $ === "real" &&
                                            e.jsxs("div", {
                                                className: "tv-field",
                                                children: [
                                                    e.jsx("span", { children: "出发日期" }),
                                                    e.jsx("input", {
                                                        type: "date",
                                                        value: b,
                                                        min: Xe(),
                                                        onChange: (w) => O(w.target.value),
                                                    }),
                                                ],
                                            }),
                                        e.jsxs("div", {
                                            className: "tv-field",
                                            children: [
                                                e.jsx("span", { children: "天数" }),
                                                e.jsxs("span", {
                                                    style: { display: "flex", alignItems: "center", gap: 14 },
                                                    children: [
                                                        e.jsx("button", {
                                                            className: "tv-round",
                                                            style: { width: 28, height: 28 },
                                                            onClick: () => C(Math.max(1, u - 1)),
                                                            children: "−",
                                                        }),
                                                        e.jsxs("b", {
                                                            className: "tn",
                                                            style: { minWidth: 48, textAlign: "center" },
                                                            children: [u, " 天"],
                                                        }),
                                                        e.jsx("button", {
                                                            className: "tv-round",
                                                            style: { width: 28, height: 28 },
                                                            onClick: () => C(Math.min(10, u + 1)),
                                                            children: "＋",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        $ === "real" &&
                                            e.jsxs("div", {
                                                className: "tv-field",
                                                children: [
                                                    e.jsx("span", { children: "日期" }),
                                                    e.jsxs("span", {
                                                        className: "tn",
                                                        children: [Y(b), " — ", Y(Ce(b, u - 1))],
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                                e.jsx("div", {
                                    className: "tv-label",
                                    children: e.jsx("b", { children: "节奏" }),
                                }),
                                e.jsx("div", {
                                    className: "tv-seg2",
                                    children: Object.entries(os).map(([w, P]) =>
                                        e.jsx(
                                            "button",
                                            {
                                                className: S === w ? "on" : "",
                                                onClick: () => T(w),
                                                children: P,
                                            },
                                            w,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    r === 3 &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx("div", {
                                    className: "tv-h",
                                    style: { marginTop: 16 },
                                    children: "发送邀请",
                                }),
                                e.jsxs("div", {
                                    className: "tv-s",
                                    children: ["邀请以卡片形式发送至聊天，", f, "将在聊天中回应。"],
                                }),
                                e.jsxs("div", {
                                    className: "tv-voucher dark",
                                    style: { marginTop: 16 },
                                    children: [
                                        e.jsxs("div", {
                                            className: "vh",
                                            children: [
                                                e.jsxs("div", {
                                                    children: [
                                                        e.jsx("div", {
                                                            className: "tv-k",
                                                            children: "Invitation",
                                                        }),
                                                        e.jsx("b", { children: E == null ? void 0 : E.name }),
                                                    ],
                                                }),
                                                e.jsx("span", {
                                                    className: "tv-s tn",
                                                    children: $ === "real" ? Y(b) : "随时出发",
                                                }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "vb",
                                            children: [
                                                e.jsxs("span", {
                                                    children: [
                                                        i.trim() ? `${i.trim()} 出发 · ` : "",
                                                        u,
                                                        " 天 · ",
                                                        os[S],
                                                    ],
                                                }),
                                                e.jsxs("span", { children: [f, " · 我"] }),
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "tv-label",
                                    children: [
                                        e.jsx("b", { children: "附言" }),
                                        e.jsx("span", { className: "tv-k", children: "Optional" }),
                                    ],
                                }),
                                e.jsx("textarea", {
                                    className: "tv-area",
                                    value: M,
                                    onChange: (w) => L(w.target.value),
                                    maxLength: 80,
                                    placeholder: "写给他的一句话（可选）",
                                }),
                            ],
                        }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-foot",
                style: { bottom: "calc(var(--sab, 0px) + 86px)" },
                children: [
                    r < 3 &&
                        e.jsx("button", {
                            className: "tv-btn",
                            disabled: !F,
                            onClick: () => x(r + 1),
                            children: ["下一步 · 目的地", "下一步 · 日期与天数", "下一步 · 发送邀请"][r],
                        }),
                    r === 3 &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx("button", {
                                    className: "tv-btn ghost",
                                    style: { flex: 1 },
                                    onClick: () => D(!1),
                                    children: "直接规划",
                                }),
                                e.jsx("button", {
                                    className: "tv-btn",
                                    style: { flex: 1.4 },
                                    onClick: () => D(!0),
                                    children: "发送邀请",
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
const zn = fs(ys, "旅行"),
    Wn = (s) => {
        var t, n, l;
        return (n = (t = s.api) == null ? void 0 : t.memory) != null && n.baseUrl
            ? s.api.memory
            : (l = s.api) == null
              ? void 0
              : l.chat;
    };
async function ws({ state: s, trip: t, char: n, putTrip: l, patchChar: c, signal: a = void 0 }) {
    var o;
    const d = Ns(t);
    if (!d.some((h) => h.who === "me" || h.who === "char")) return { added: 0 };
    const r = oe(s.me) === "我" ? "她" : oe(s.me),
        x = await zn.memory(Wn(s), Et(t, d, { charName: Re(n), herName: r }), {
            fallback: (o = s.api) == null ? void 0 : o.chat,
            signal: a,
            temperature: 0.5,
        }),
        i = Ft(x == null ? void 0 : x.content);
    if (!i.length) throw new Error("这一段没有总结出可用的记忆，可以稍后再试");
    const m = Math.max(...d.map((h) => h.at || 0)),
        v = t.timeMode === "real",
        j = v ? Vs(t, i, { dateOf: (h) => xe(t, h) }) : [];
    return (
        l(t.id, (h) => {
            var p, I, u;
            return {
                memory: {
                    ...(h.memory || {}),
                    entries: [...(((p = h.memory) == null ? void 0 : p.entries) || []), ...i],
                    coveredAt: m,
                    ...(v
                        ? {
                              merged: !0,
                              mergedIds: [
                                  ...(((I = h.memory) == null ? void 0 : I.mergedIds) || []),
                                  ...j.map((C) => C.id),
                              ],
                              mergedEntryIds: [
                                  ...(((u = h.memory) == null ? void 0 : u.mergedEntryIds) || []),
                                  ...i.map((C) => C.id),
                              ],
                          }
                        : null),
                },
            };
        }),
        v && j.length && c(n.id, (h) => ({ diary: [...(h.diary || []), ...j].slice(-400) })),
        { added: i.length }
    );
}
function Ts({ trip: s, char: t, putTrip: n, patchChar: l }) {
    var r, x;
    const c = new Set(((r = s.memory) == null ? void 0 : r.mergedEntryIds) || []),
        a = (((x = s.memory) == null ? void 0 : x.entries) || []).filter((i) => !c.has(i.id));
    if (!a.length) return 0;
    const d = Vs(s, a, { dateOf: (i) => xe(s, i) });
    return (
        l(t.id, (i) => ({ diary: [...(i.diary || []), ...d].slice(-400) })),
        n(s.id, (i) => {
            var m, v;
            return {
                memory: {
                    ...(i.memory || {}),
                    merged: !0,
                    mergedIds: [
                        ...(((m = i.memory) == null ? void 0 : m.mergedIds) || []),
                        ...d.map((j) => j.id),
                    ],
                    mergedEntryIds: [
                        ...(((v = i.memory) == null ? void 0 : v.mergedEntryIds) || []),
                        ...a.map((j) => j.id),
                    ],
                },
            };
        }),
        d.length
    );
}
function it({ trip: s, char: t, putTrip: n, patchChar: l }) {
    var a;
    const c = new Set(((a = s.memory) == null ? void 0 : a.mergedIds) || []);
    (l(t.id, (d) => ({ diary: (d.diary || []).filter((r) => !c.has(r.id)) })),
        n(s.id, (d) => ({ memory: { ...(d.memory || {}), merged: !1, mergedIds: [], mergedEntryIds: [] } })));
}
const Ln = [
    ["delay", "推迟"],
    ["replace", "替换"],
    ["cancel", "取消"],
    ["add", "新增一项"],
    ["extend", "延长停留"],
    ["end_day", "提前结束今天"],
];
function rt({ open: s, trip: t, char: n, day: l, onClose: c, onChanged: a }) {
    const { state: d, putTrip: r } = Z(),
        x = fe(),
        i = ie(n),
        m = is(t),
        v = l === m.day && !m.before ? m.min : 0,
        j = Qs(t, l)
            .filter((F) => F.state !== "done")
            .map((F) => F.item),
        [o, h] = k.useState(null),
        [p, I] = k.useState("delay"),
        [u, C] = k.useState(""),
        [b, O] = k.useState(""),
        [S, T] = k.useState(60),
        [$, W] = k.useState(!1),
        [M, L] = k.useState(""),
        y = ve(`travel-consult-${t.id}`);
    k.useEffect(() => {
        var F;
        s && (h(((F = j[0]) == null ? void 0 : F.id) || null), C(""), O(""), L(""));
    }, [s]);
    const N =
            $ ||
            ((!(p !== "add" && p !== "end_day") || o) && (p !== "replace" && p !== "add" ? !0 : u.trim())),
        E = () => {
            if ($) {
                (c(),
                    y
                        .run(
                            async (B) => {
                                const V = await Mn(d, n, t, { day: l, fromMin: v, reason: M }, B),
                                    te = le("ch");
                                return (
                                    r(t.id, (re) => zt(re, l, v, V, { changeId: te })),
                                    a == null ||
                                        a({
                                            id: te,
                                            by: "char",
                                            desc: `按商量的结果调整了第 ${l} 天剩下的安排`,
                                            quote: V == null ? void 0 : V.quote,
                                        }),
                                    !0
                                );
                            },
                            {
                                label: "商量行程",
                                done: () => ({
                                    title: `旅行 · ${i}给出了调整方案`,
                                    text: "点这里查看",
                                    app: "travel",
                                    target: { tripId: t.id },
                                }),
                            },
                        )
                        .then((B) => {
                            B != null && B.error && x(B.error.message || String(B.error), "error");
                        }));
                return;
            }
            const F = j.find((B) => B.id === o),
                D = {
                    op: p,
                    target: o,
                    day: l,
                    note: M.trim(),
                    ...(p === "delay" ? (b ? { time: b } : { minutes: S }) : null),
                    ...(p === "extend" ? { minutes: S } : null),
                    ...(p === "replace" || p === "add"
                        ? {
                              title: u.trim(),
                              place: u.trim(),
                              time:
                                  b ||
                                  (p === "add" ? Ee(Math.max(v + 30, 600)) : F == null ? void 0 : F.time),
                              kind: (F == null ? void 0 : F.kind) || "sight",
                          }
                        : null),
                    ...(p === "end_day" ? { time: Ee(v) } : null),
                },
                w = le("ch"),
                P = Se(t, { ...D, changeId: w }, "me").change;
            if (!P) {
                c();
                return;
            }
            (r(t.id, (B) => Se(B, { ...D, changeId: w }, "me").trip), a == null || a(P), c());
        };
    return e.jsxs(me, {
        open: s,
        onClose: c,
        children: [
            e.jsxs("div", {
                className: "tv-row",
                children: [
                    e.jsx("h3", { children: "修改计划" }),
                    e.jsxs("span", { className: "tv-s", children: ["第 ", l, " 天剩余 ", j.length, " 项"] }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-card",
                style: { marginTop: 12, padding: "2px 12px", boxShadow: "0 0 0 .5px var(--tv-line)" },
                children: [
                    j.map((F) =>
                        e.jsxs(
                            "button",
                            {
                                className: `tv-seg${o === F.id && !$ ? " sel" : ""}`,
                                onClick: () => h(F.id),
                                children: [
                                    e.jsx("span", { className: "tm tn", children: F.time }),
                                    e.jsxs("div", {
                                        children: [
                                            e.jsx("div", { className: "ti", children: F.title }),
                                            e.jsxs("div", {
                                                className: "ty",
                                                children: [Be[F.kind], F.voucherId ? " · 已预约" : ""],
                                            }),
                                        ],
                                    }),
                                    e.jsx("span", { className: `tv-radio${o === F.id && !$ ? " on" : ""}` }),
                                ],
                            },
                            F.id,
                        ),
                    ),
                    !j.length &&
                        e.jsx("div", {
                            className: "tv-s",
                            style: { padding: "12px 0" },
                            children: "今天没有剩余的安排。",
                        }),
                ],
            }),
            !$ &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("div", {
                            className: "tv-grid3",
                            style: { marginTop: 10 },
                            children: Ln.map(([F, D]) =>
                                e.jsx(
                                    "button",
                                    { className: p === F ? "on" : "", onClick: () => I(F), children: D },
                                    F,
                                ),
                            ),
                        }),
                        (p === "replace" || p === "add") &&
                            e.jsx("input", {
                                className: "tv-input",
                                style: { marginTop: 10 },
                                value: u,
                                onChange: (F) => C(F.target.value),
                                placeholder: p === "add" ? "新增的地点或安排" : "替换为",
                            }),
                        (p === "delay" || p === "add" || p === "replace") &&
                            e.jsxs("div", {
                                className: "tv-row",
                                style: { marginTop: 10 },
                                children: [
                                    e.jsx("span", { className: "tv-s", children: "时间" }),
                                    e.jsx("input", {
                                        type: "time",
                                        className: "tv-input",
                                        style: { width: 130 },
                                        value: b,
                                        onChange: (F) => O(F.target.value),
                                    }),
                                ],
                            }),
                        (p === "extend" || (p === "delay" && !b)) &&
                            e.jsx("div", {
                                className: "tv-seg2",
                                style: { marginTop: 10 },
                                children: [30, 60, 120].map((F) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            className: S === F ? "on" : "",
                                            onClick: () => T(F),
                                            children: [F, " 分钟"],
                                        },
                                        F,
                                    ),
                                ),
                            }),
                    ],
                }),
            e.jsx("div", {
                className: "tv-card",
                style: { marginTop: 10, padding: "11px 14px", boxShadow: "0 0 0 .5px var(--tv-line)" },
                children: e.jsxs("div", {
                    className: "tv-row",
                    children: [
                        e.jsxs("div", {
                            children: [
                                e.jsxs("div", {
                                    style: { fontSize: 13, fontWeight: 600 },
                                    children: ["与", i, "商量"],
                                }),
                                e.jsx("div", {
                                    className: "tv-s",
                                    style: { marginTop: 2 },
                                    children: "由他给出调整方案，直接生效，可撤销",
                                }),
                            ],
                        }),
                        e.jsx(Ae, { on: $, onChange: W }),
                    ],
                }),
            }),
            e.jsx("input", {
                className: "tv-input",
                style: { marginTop: 10 },
                value: M,
                onChange: (F) => L(F.target.value),
                placeholder: "原因（可选）",
            }),
            e.jsx("button", {
                className: "tv-btn",
                style: { marginTop: 12 },
                disabled: !N || y.busy,
                onClick: E,
                children: y.busy
                    ? e.jsxs(e.Fragment, {
                          children: [e.jsx("span", { className: "tv-spin" }), i, "正在考虑"],
                      })
                    : $
                      ? "发给他"
                      : "确认修改",
            }),
        ],
    });
}
const Ps = fs(ys, "旅行"),
    us = new Map(),
    js = new Set(),
    Os = (s, t) => {
        (t == null ? us.delete(s) : us.set(s, t), js.forEach((n) => n()));
    };
function Pn(s) {
    const [, t] = k.useState(0);
    return (
        k.useEffect(() => {
            const n = () => t((l) => l + 1);
            return (js.add(n), () => js.delete(n));
        }, []),
        us.get(s)
    );
}
const On = {
    first: "第一人称有限视角。只写此刻你能看到、听到、想到的；不进入对方的头脑，不用上帝视角。",
    second: "第二人称视角。叙述对着你说：你是「你」，他用名字或「他」，从外面写他；只写他看得到的你，不替你想。",
    third: "第三人称限定视角。他和你都用第三人称：写他用名字或「他」，写你用你的名字或「她」；跟着他的视点走，只写他看得到的你，不进入你的头脑。",
};
function Rs(s) {
    const t = [...String(s || "").matchAll(/\d+/g)].map((n) => Number(n[0])).filter((n) => n > 0 && n < 1e4);
    return t.length >= 2
        ? { min: Math.min(t[0], t[1]), max: Math.max(t[0], t[1]) }
        : t.length === 1
          ? { min: Math.round(t[0] * 0.8), max: Math.round(t[0] * 1.2) }
          : { min: 400, max: 700 };
}
function Rn(s, t) {
    var i;
    const n = hs(t),
        l = s.offline || {},
        c = (((i = s.offlinePresets) == null ? void 0 : i.style) || []).find((m) => m.id === n.style),
        a =
            n.style === "offline"
                ? l.style
                : n.style === "travelogue"
                  ? Yt
                  : n.style === "custom"
                    ? n.styleText
                    : (c == null ? void 0 : c.value) || "",
        d = n.words === "offline" ? Rs(l.wordCount) : Rs(String(n.words)),
        r = n.pov === "offline" ? Gt(l.perspective) : n.pov,
        x = n.pov === "offline" ? l.perspective : On[n.pov] || "";
    return { style: a, words: d, pov: r, perspectiveText: x };
}
function Bn({ trip: s, char: t, at: n, onClose: l, onMove: c }) {
    var Ss, $s, Cs, Is, Ms;
    const { state: a, putTrip: d, patchChar: r } = Z(),
        x = k.useRef(a);
    x.current = a;
    const i = fe(),
        m = n.day,
        v = n.itemId ? rs(s, n.itemId) : null,
        j = (v == null ? void 0 : v.item) || null,
        o = n.gapAfter ? ((Ss = rs(s, n.gapAfter)) == null ? void 0 : Ss.item) : null,
        h = j ? Wt(m, j.id) : Lt(m, n.gapAfter),
        p = (($s = s.scenes) == null ? void 0 : $s[h]) || [],
        [I, u] = k.useState(""),
        [C, b] = k.useState(null),
        [O, S] = k.useState(null),
        [T, $] = k.useState(null),
        W = k.useRef(null);
    k.useEffect(() => {
        const g = W.current;
        g && ((g.style.height = "auto"), (g.style.height = `${Math.min(g.scrollHeight, 120)}px`));
    }, [I]);
    const M = ve(`travel-scene-${s.id}`),
        L = Pn(s.id),
        y = k.useRef(null),
        f = ie(t),
        N = oe(a.me) === "我" ? "我" : oe(a.me),
        E = j ? j.title : o ? `${o.title}之后 · 自由时间` : "自由时间",
        F =
            s.timeMode === "virtual" &&
            ((Cs = s.clock) == null ? void 0 : Cs.day) === m &&
            (Is = s.clock) != null &&
            Is.time
                ? s.clock.time
                : ((Ms = p.filter((g) => g.time).slice(-1)[0]) == null ? void 0 : Ms.time) ||
                  (j == null ? void 0 : j.time) ||
                  (o ? Ee((he(o.time) ?? 0) + 60) : "");
    k.useEffect(() => {
        var g;
        (g = y.current) == null || g.scrollTo({ top: 1e6, behavior: "smooth" });
    }, [p.length, !!L]);
    const D = (g) =>
            d(s.id, (A) => {
                var z;
                return {
                    scenes: {
                        ...(A.scenes || {}),
                        [h]: [...(((z = A.scenes) == null ? void 0 : z[h]) || []), ...g],
                    },
                };
            }),
        w = (g, A, z = {}) => ({ id: le("e"), who: "note", kind: g, text: A, at: Date.now(), time: F, ...z }),
        P = ({ regen: g = !1, base: A = p, bridgeTo: z = null } = {}) => {
            const R = g || z ? "" : I.trim();
            if (M.busy) return;
            S(null);
            const K = Date.now(),
                ee = [];
            (A.length || ee.push(w("enter", `you two are now at 「${E}」`, { hidden: !0 })),
                R && ee.push({ id: le("e"), who: "me", text: R, at: K, time: F }));
            const ne = g || z ? null : Pt(s, { item: j, day: m });
            (ne && ee.push(w("event", ne.title, { event: ne, hidden: !1 })),
                ee.length && D(ee),
                ne && d(s.id, (ae) => ({ events: [...(ae.events || []), ne] })),
                !g && !z && u(""));
            const Q = {
                ...s,
                scenes: { ...(s.scenes || {}), [h]: [...A, ...ee] },
                events: ne ? [...(s.events || []), ne] : s.events,
            };
            M.run(
                async (ae) => {
                    const U = Ps.usableLane(Us(a, "offline"));
                    if (!(U != null && U.baseUrl))
                        throw new Error("请先在 设置 → 模型与 API 中配置线下通道或聊天通道");
                    const Te = Object.values(Q.scenes || {})
                            .flat()
                            .sort((H, de) => (H.at || 0) - (de.at || 0))
                            .slice(-Ys(Q, a).contextFloors)
                            .map((H) =>
                                H.who === "note"
                                    ? { who: "note", text: H.text, at: H.at }
                                    : { who: H.who, text: H.text, at: H.at },
                            ),
                        Le = Q.settings || Xt,
                        Me = Gs(a, t, "offline").map((H) => H.id),
                        Ue = Xs(Q.settings, Me),
                        Ve = (a.worldbook || []).filter((H) => H.enabled !== !1 && Ue.has(H.id)),
                        Qe = Ot(a, t, {
                            entries: Te,
                            sceneBlock: Rt(Q, {
                                item: j,
                                day: m,
                                gapAfter: o,
                                herName: N,
                                event: ne,
                                bridgeTo: z,
                                opening: !A.some((H) => H.who === "char" || H.who === "me"),
                            }),
                            abilityBlock: Bt({ herName: N }),
                            writing: Rn(a, Le),
                            worldbook: Ve,
                            virtualTime: Q.timeMode === "virtual",
                            trip: Q,
                        });
                    let Pe = "";
                    const J = await Ps.chat(U, Qe, {
                            signal: ae,
                            onDelta: (H) => {
                                ((Pe = Ht(H)), Os(s.id, Pe));
                            },
                        }),
                        X = Ks(String((J == null ? void 0 : J.content) || "")).replace(_t, "");
                    (B(X),
                        z &&
                            D([
                                w("goto", `next: 「${z.title}」`, {
                                    hidden: !1,
                                    to: { day: z.day, itemId: z.itemId, title: z.title, time: z.time },
                                }),
                            ]));
                    const se = ss(x.current).trips.find((H) => H.id === s.id);
                    return (
                        se &&
                            qt(se, x.current) &&
                            ws({ state: x.current, trip: se, char: t, putTrip: d, patchChar: r }).catch(
                                () => {},
                            ),
                        !0
                    );
                },
                {
                    label: "旅途现场",
                    done: () => ({
                        title: `旅行 · ${f}`,
                        text: "现场有新的一段",
                        app: "travel",
                        target: { tripId: s.id },
                    }),
                },
            ).then((ae) => {
                (Os(s.id, null), ae != null && ae.error && i(ae.error.message || String(ae.error), "error"));
            });
        },
        B = (g) => {
            const A = Ds(g);
            s.timeMode === "virtual" &&
                A.time &&
                !A.plan.length &&
                (A.time = Jt(s, {
                    day: m,
                    fromTime: F,
                    toTime: A.time,
                    itemId: (j == null ? void 0 : j.id) || null,
                }));
            const z = A.time || F,
                R = Date.now(),
                K = A.photo.map((U) => {
                    const q = ["her", "you", "both", "view"].includes(U.of) ? U.of : "view";
                    return {
                        id: le("ph"),
                        by: "char",
                        of: q,
                        desc: String(U.desc || "").slice(0, 160),
                        at: R,
                        day: m,
                        where: E,
                        ref: null,
                    };
                }),
                ee = A.plan.map((U) => ({ o: U, changeId: le("ch") })),
                ne = A.book
                    .map((U) => ({ o: U, vid: le("v"), changeId: le("ch") }))
                    .filter((U) => String(U.o.name || "").trim()),
                Q = A.buy.map((U) => ({ o: U, id: le("sv") })).filter((U) => String(U.o.item || "").trim()),
                ae = {
                    main: le("e"),
                    notes: Array.from({ length: ee.length + K.length + ne.length + Q.length }, () => le("e")),
                };
            d(s.id, (U) => {
                var Ue, Ve, Qe, Pe;
                let q = { ...U };
                const Te = [{ id: ae.main, who: "char", text: A.text, at: R, time: z }];
                let Le = 0;
                const Me = (J, X, se) => ({
                    id: ae.notes[Le++],
                    who: "note",
                    kind: J,
                    text: X,
                    at: R,
                    time: z,
                    by: "char",
                    ...se,
                });
                for (const { o: J, changeId: X } of ee) {
                    const se = Kt(q, J, { day: m });
                    if (!se) {
                        Le++;
                        continue;
                    }
                    const H = Se(q, { ...se, changeId: X }, "char");
                    H.change
                        ? ((q = H.trip),
                          Te.push(
                              Me("change", `you changed the plan: ${H.change.desc}`, {
                                  changeId: X,
                                  label: H.change.desc,
                              }),
                          ))
                        : Le++;
                }
                for (const J of K)
                    ((q.photos = [...(q.photos || []), J]),
                        Te.push(
                            Me(
                                "photo",
                                `you took a photo (${J.of === "her" ? "of her" : J.of === "you" ? "of yourself" : J.of === "both" ? "of the two of you" : "of the view"}): ${J.desc}`,
                                { photoId: J.id },
                            ),
                        ));
                for (const { o: J, vid: X, changeId: se } of ne) {
                    const H = String(J.name).trim().slice(0, 24),
                        de = Math.max(1, Math.min(q.days, Number(J.day) || m)),
                        pe = String(J.time || "19:00").slice(0, 5);
                    ((q.vouchers = [
                        ...(q.vouchers || []),
                        {
                            id: X,
                            kind: "table",
                            title: H,
                            date: xe(q, de),
                            time: pe,
                            sub: `${pe} · 2 位${J.seat ? ` · ${String(J.seat).slice(0, 10)}` : ""}`,
                            by: "char",
                            note: String(J.note || "").slice(0, 40),
                        },
                    ]),
                        (q = Se(
                            q,
                            { op: "add", day: de, time: pe, title: H, kind: "meal", place: H, changeId: se },
                            "char",
                        ).trip),
                        (q = {
                            ...q,
                            plan: {
                                days: q.plan.days.map((Ge) =>
                                    Ge.day === de
                                        ? {
                                              ...Ge,
                                              items: Ge.items.map((Oe) =>
                                                  Oe.title === H && Oe.time === pe && !Oe.voucherId
                                                      ? { ...Oe, voucherId: X }
                                                      : Oe,
                                              ),
                                          }
                                        : Ge,
                                ),
                            },
                        }),
                        Te.push(
                            Me("book", `you booked a table: ${H}, day ${de} ${pe}`, {
                                voucherId: X,
                                changeId: se,
                                label: `${H} · 第 ${de} 天 ${pe}`,
                            }),
                        ));
                }
                for (const { o: J, id: X } of Q) {
                    const se = String(J.item).trim().slice(0, 20),
                        H = {
                            id: X,
                            by: "char",
                            name: se,
                            price: Math.max(0, Math.round(Number(J.price) || 0)),
                            for: J.for === "you" ? "char" : ["her", "both"].includes(J.for) ? J.for : "her",
                            secret: !!J.secret,
                            card: String(J.card || "").slice(0, 120),
                            at: R,
                            day: m,
                            where: E,
                        };
                    ((q.souvenirs = [...(q.souvenirs || []), H]),
                        Te.push(
                            Me(
                                "buy",
                                `you bought ${se}${H.for === "her" ? " for her" : ""}${H.secret ? " (she does not know yet)" : ""}`,
                                { souvenirId: X },
                            ),
                        ));
                }
                if (j && q.timeMode === "virtual") {
                    const J = he(F),
                        X = rs(q, j.id),
                        se = he((Ue = X == null ? void 0 : X.item) == null ? void 0 : Ue.time),
                        H = (((Ve = q.scenes) == null ? void 0 : Ve[h]) || []).some(
                            (de) =>
                                de.who === "char" &&
                                he(de.time) != null &&
                                Math.abs(he(de.time) - (J ?? 0)) >= 60,
                        );
                    if (X && X.day === m && J != null && se != null && Math.abs(J - se) >= 60 && !H) {
                        const de = Math.min(
                                J,
                                ...(((Qe = q.scenes) == null ? void 0 : Qe[h]) || [])
                                    .map((Ye) => he(Ye.time))
                                    .filter((Ye) => Ye != null),
                            ),
                            pe = Se(
                                q,
                                { op: "delay", target: j.id, time: Ee(de), why: "实际去的时间" },
                                "scene",
                            );
                        pe.change && (q = pe.trip);
                    }
                }
                return (
                    q.timeMode === "virtual" && A.time && (q.clock = { day: m, time: A.time }),
                    q.status === "ready" && q.timeMode === "virtual" && (q.status = "ongoing"),
                    (q.scenes = {
                        ...(q.scenes || {}),
                        [h]: [...(((Pe = q.scenes) == null ? void 0 : Pe[h]) || []), ...Te],
                    }),
                    q
                );
            });
            for (const U of K) V(U, A.text);
        },
        { shoot: V } = ht({ state: a, trip: s, char: t, putTrip: d }),
        te = (g) => {
            var R;
            const A = ((R = [...p].reverse().find((K) => K.who === "char")) == null ? void 0 : R.text) || "";
            return `${g === "him" ? `她给${Re(t)}拍的照片，画面主体是他` : g === "both" ? "两个人的合照" : g === "self" ? "她的自拍" : `${E}的风景`}。拍下的是此刻：${
                A.replace(/[「」]/g, "")
                    .replace(/\s+/g, " ")
                    .slice(-260) || E
            }`;
        },
        re = (g) =>
            d(s.id, (A) => {
                var z;
                return {
                    scenes: { ...(A.scenes || {}), [h]: g(((z = A.scenes) == null ? void 0 : z[h]) || []) },
                };
            }),
        be = (g) =>
            g.who === "char"
                ? (A) => A.id === g.id || (A.who === "note" && A.by === "char" && A.at === g.at)
                : (A) => A.id === g.id,
        ke = (g) => {
            const A = be(g);
            (re((z) => z.filter((R) => !A(R))), S(null));
        },
        we = () => {
            const g = T == null ? void 0 : T.text.trim();
            (g && re((A) => A.map((z) => (z.id === T.id ? { ...z, text: g, edited: !0 } : z))),
                $(null),
                S(null));
        },
        ue = [...p].reverse().find((g) => g.who === "char"),
        _e = (g) => {
            const A = be(g),
                z = p.filter((R) => !A(R));
            (re((R) => R.filter((K) => !A(K))), P({ regen: !0, base: z }));
        },
        qe = (g) => {
            (g.changeId && d(s.id, (A) => Zs(A, g.changeId)),
                g.voucherId &&
                    d(s.id, (A) => ({ vouchers: (A.vouchers || []).filter((z) => z.id !== g.voucherId) })),
                d(s.id, (A) => ({
                    scenes: {
                        ...A.scenes,
                        [h]: (A.scenes[h] || []).map((z) => (z.id === g.id ? { ...z, undone: !0 } : z)),
                    },
                })));
        },
        je = (g, A, z = {}) => D([w(g, A, { by: "me", ...z })]),
        Je = () => {
            var z, R;
            const g = (z = s.dest) == null ? void 0 : z.name;
            if ((s.stamps || []).some((K) => K.name === g)) {
                i(`${g}的印章已经盖过了`);
                return;
            }
            const A = {
                name: g,
                en: ((R = s.dest) == null ? void 0 : R.en) || "",
                date: s.timeMode === "real" ? xe(s, m) : xe(s, m),
                at: Date.now(),
            };
            (d(s.id, (K) => ({ stamps: [...(K.stamps || []), A] })),
                je("stamp", `she stamped her passport: ${g}`, { stamp: A }));
        },
        Ke = () => {
            const g = Fs(s, m).filter((K) => K.status !== "cancelled"),
                A = j || o,
                z = A ? g.findIndex((K) => K.id === A.id) : -1,
                R = g[z + 1];
            if (R) return { day: m, itemId: R.id, title: R.title, time: R.time };
            if (m < s.days) {
                const K = Fs(s, m + 1).find((ee) => ee.status !== "cancelled");
                if (K) return { day: m + 1, itemId: K.id, title: K.title, time: K.time };
            }
            return null;
        },
        _ = (g) => {
            (c({ day: g.day, itemId: g.itemId }),
                s.timeMode === "virtual" && d(s.id, { clock: { day: g.day, time: g.time } }));
        },
        G = () => {
            var z;
            if (M.busy) return;
            const g = Ke();
            if (!g) {
                i("这已经是最后一个时段");
                return;
            }
            const A = [...p].reverse().find((R) => R.kind === "goto" && !R.undone);
            if (A && ((z = A.to) == null ? void 0 : z.itemId) === g.itemId && A === p[p.length - 1]) {
                _(g);
                return;
            }
            if (!p.some((R) => R.who === "char" || R.who === "me")) {
                _(g);
                return;
            }
            P({ bridgeTo: g });
        },
        ce = p.filter((g) => !g.hidden);
    return e.jsxs("div", {
        className: "tv-live",
        children: [
            e.jsxs("div", {
                className: "tv-livebar",
                children: [
                    e.jsx("button", {
                        className: "tv-press",
                        onClick: l,
                        "aria-label": "返回",
                        style: { display: "flex" },
                        children: e.jsx(Fe, { size: 18 }),
                    }),
                    e.jsxs("div", {
                        style: { flex: 1, minWidth: 0 },
                        children: [
                            e.jsx("div", { className: "ttl", children: E }),
                            e.jsxs("div", {
                                className: "tv-s tn",
                                children: ["DAY ", m, " · ", j ? Be[j.kind] : "自由时间"],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        style: { textAlign: "right" },
                        children: [
                            e.jsx("div", {
                                className: "tn",
                                style: { fontSize: 13.5, fontWeight: 600 },
                                children: F || "—",
                            }),
                            e.jsx("div", {
                                className: "tv-s tn",
                                children:
                                    s.timeMode === "real" ? xe(s, m).slice(5).replace("-", ".") : "virtual",
                            }),
                        ],
                    }),
                    e.jsx("button", {
                        className: "tv-round tv-press",
                        style: { width: 28, height: 28 },
                        onClick: () => b("settings"),
                        "aria-label": "现场设置",
                        children: e.jsx(st, { size: 16 }),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-livebody",
                ref: y,
                children: [
                    !ce.length &&
                        !L &&
                        e.jsxs("div", {
                            className: "tv-empty",
                            style: { paddingTop: 36 },
                            children: [
                                (j == null ? void 0 : j.note) ||
                                    (j ? `${Be[j.kind]} · 计划 ${j.time}` : "没有安排的时间。"),
                                e.jsx("br", {}),
                                "输入你想说的话，或直接发送让",
                                f,
                                "开始。",
                            ],
                        }),
                    ce.map((g) => {
                        var R, K, ee, ne;
                        if (g.kind === "goto")
                            return e.jsxs(
                                "div",
                                {
                                    className: "tv-entry",
                                    children: [
                                        e.jsxs("div", {
                                            className: "tm tn",
                                            children: [g.time, " · 下一时段"],
                                        }),
                                        e.jsxs("button", {
                                            className: "tv-goto tv-press",
                                            onClick: () => _(g.to),
                                            children: [
                                                e.jsxs("span", {
                                                    children: [
                                                        e.jsxs("span", {
                                                            className: "tv-k",
                                                            children: [
                                                                "Next",
                                                                ((R = g.to) == null ? void 0 : R.day) !== m
                                                                    ? ` · Day ${(K = g.to) == null ? void 0 : K.day}`
                                                                    : "",
                                                            ],
                                                        }),
                                                        e.jsx("b", {
                                                            children: (ee = g.to) == null ? void 0 : ee.title,
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs("span", {
                                                    className: "tn go",
                                                    children: [
                                                        ((ne = g.to) == null ? void 0 : ne.time) || "",
                                                        e.jsx("i", { children: e.jsx(Fe, { size: 14 }) }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                g.id,
                            );
                        const A = g.who === "char" || g.who === "me";
                        if (A && (T == null ? void 0 : T.id) === g.id)
                            return e.jsxs(
                                "div",
                                {
                                    className: "tv-entry",
                                    children: [
                                        e.jsxs("div", {
                                            className: "tm tn",
                                            children: [g.time, g.who === "me" ? " · 你" : "", " · 编辑"],
                                        }),
                                        e.jsx("textarea", {
                                            className: "tv-area tv-edit",
                                            autoFocus: !0,
                                            value: T.text,
                                            onChange: (Q) => $({ ...T, text: Q.target.value }),
                                        }),
                                        e.jsxs("div", {
                                            className: "tv-eacts",
                                            children: [
                                                e.jsx("button", {
                                                    onClick: () => {
                                                        ($(null), S(null));
                                                    },
                                                    children: "取消",
                                                }),
                                                e.jsx("button", {
                                                    className: "pri",
                                                    onClick: we,
                                                    children: "保存",
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                g.id,
                            );
                        const z = e.jsx(Hn, {
                            e: g,
                            trip: s,
                            char: t,
                            name: f,
                            aiName: Re(t),
                            onUndo: () => qe(g),
                            onEvent: (Q) => {
                                (d(s.id, (ae) => ({
                                    scenes: {
                                        ...ae.scenes,
                                        [h]: ae.scenes[h].map((U) =>
                                            U.id === g.id ? { ...U, resolved: Q ? "keep" : "adjust" } : U,
                                        ),
                                    },
                                })),
                                    Q
                                        ? je("note", "she wants to keep to the plan", { hidden: !0 })
                                        : b("edit"));
                            },
                        });
                        return A
                            ? e.jsxs(
                                  "div",
                                  {
                                      className: `tv-etap${O === g.id ? " on" : ""}`,
                                      onClick: () => !M.busy && S(O === g.id ? null : g.id),
                                      children: [
                                          z,
                                          O === g.id &&
                                              e.jsxs("div", {
                                                  className: "tv-eacts",
                                                  onClick: (Q) => Q.stopPropagation(),
                                                  children: [
                                                      e.jsx("button", {
                                                          onClick: () => $({ id: g.id, text: g.text }),
                                                          children: "编辑",
                                                      }),
                                                      g.id === (ue == null ? void 0 : ue.id) &&
                                                          e.jsx("button", {
                                                              onClick: () => _e(g),
                                                              children: "重写",
                                                          }),
                                                      e.jsx("button", {
                                                          className: "del",
                                                          onClick: () => ke(g),
                                                          children: "删除",
                                                      }),
                                                  ],
                                              }),
                                      ],
                                  },
                                  g.id,
                              )
                            : e.jsx(De.Fragment, { children: z }, g.id);
                    }),
                    L != null &&
                        M.busy &&
                        e.jsxs("div", {
                            className: "tv-entry stream",
                            children: [
                                e.jsx("div", { className: "tm tn", children: F }),
                                e.jsx(ct, { text: Ds(L).text || " ", charName: Re(t) }),
                            ],
                        }),
                    M.busy &&
                        L == null &&
                        e.jsxs("div", {
                            className: "tv-entry",
                            children: [
                                e.jsx("div", { className: "tm", children: f }),
                                e.jsxs("p", {
                                    className: "tv-s",
                                    children: [
                                        e.jsx("span", {
                                            className: "tv-spin",
                                            style: {
                                                display: "inline-block",
                                                width: 10,
                                                height: 10,
                                                marginRight: 6,
                                                verticalAlign: -1,
                                            },
                                        }),
                                        "正在写",
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-composer",
                children: [
                    e.jsxs("div", {
                        className: "acts",
                        children: [
                            e.jsx("button", {
                                className: "pri",
                                onClick: () => b("edit"),
                                children: "修改计划",
                            }),
                            e.jsx("button", { onClick: () => b("photo"), children: "拍照" }),
                            e.jsx("button", { onClick: Je, children: "盖章" }),
                            e.jsx("button", { onClick: () => b("food"), children: "餐厅" }),
                            e.jsx("button", { onClick: () => b("shop"), children: "纪念品" }),
                            e.jsx("button", { onClick: G, children: "下一时段" }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "in",
                        children: [
                            e.jsx("textarea", {
                                ref: W,
                                rows: 1,
                                value: I,
                                onChange: (g) => u(g.target.value),
                                enterKeyHint: "send",
                                placeholder: "直接输入为对白；（）内为动作与叙述",
                                onKeyDown: (g) => {
                                    g.key === "Enter" &&
                                        !g.shiftKey &&
                                        !g.nativeEvent.isComposing &&
                                        (g.preventDefault(), P());
                                },
                            }),
                            e.jsx("button", {
                                className: "tv-send tv-press",
                                onClick: M.busy ? M.stop : () => P(),
                                "aria-label": M.busy ? "停止" : "发送",
                                children: M.busy
                                    ? e.jsx("span", {
                                          style: {
                                              width: 10,
                                              height: 10,
                                              background: "#fff",
                                              borderRadius: 2,
                                          },
                                      })
                                    : e.jsx(fn, { size: 18 }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(rt, {
                open: C === "edit",
                trip: s,
                char: t,
                day: m,
                onClose: () => b(null),
                onChanged: (g) =>
                    je(
                        "change",
                        `${g.by === "char" ? "after talking it over, the plan changed" : "she changed the plan"}: ${g.desc}${g.quote ? ` (you said: ${g.quote})` : ""}`,
                        { changeId: g.id, label: g.desc, by: g.by || "me" },
                    ),
            }),
            e.jsx(qn, { open: C === "settings", trip: s, char: t, onClose: () => b(null) }),
            e.jsx(Un, {
                open: C === "photo",
                name: f,
                onClose: () => b(null),
                onShoot: (g, A) => {
                    const z = A || te(g),
                        R = {
                            id: le("ph"),
                            by: "me",
                            of: g,
                            desc: z,
                            at: Date.now(),
                            day: m,
                            where: E,
                            ref: null,
                        };
                    (d(s.id, (K) => ({ photos: [...(K.photos || []), R] })),
                        je(
                            "photo",
                            `she took a photo (${g === "him" ? "of you" : g === "both" ? "of the two of you" : g === "self" ? "of herself" : "of the view"})${A ? `: ${A}` : ""}`,
                            { photoId: R.id },
                        ),
                        V(R, z),
                        b(null));
                },
            }),
            e.jsx(Vn, {
                open: C === "food",
                trip: s,
                item: j,
                day: m,
                name: f,
                onClose: () => b(null),
                onBook: (g, A, z, R) => {
                    const K = le("v"),
                        ee = le("ch");
                    (d(s.id, (ne) => {
                        const Q = Se(
                            ne,
                            {
                                op: "add",
                                day: m,
                                time: A,
                                title: g.name,
                                kind: "meal",
                                place: g.name,
                                changeId: ee,
                            },
                            "me",
                        ).trip;
                        return {
                            ...Q,
                            vouchers: [
                                ...(Q.vouchers || []),
                                {
                                    id: K,
                                    kind: "table",
                                    title: g.name,
                                    date: xe(Q, m),
                                    time: A,
                                    sub: `${A} · 2 位${z ? ` · ${z}` : ""}`,
                                    by: "me",
                                    note: R,
                                },
                            ],
                        };
                    }),
                        je("book", `she booked a table: ${g.name}, ${A}${z ? `, ${z}` : ""}`, {
                            voucherId: K,
                            changeId: ee,
                            label: `${g.name} · ${A}`,
                        }),
                        b(null));
                },
            }),
            e.jsx(Qn, {
                open: C === "shop",
                trip: s,
                item: j,
                name: f,
                onClose: () => b(null),
                onBuy: (g, A, z) => {
                    const R = {
                        id: le("sv"),
                        by: "me",
                        name: g.name,
                        price: g.price,
                        for: A,
                        card: z,
                        at: Date.now(),
                        day: m,
                        where: E,
                        secret: !1,
                    };
                    (d(s.id, (K) => ({ souvenirs: [...(K.souvenirs || []), R] })),
                        je(
                            "buy",
                            `she bought ${g.name}${A === "char" ? " for you" : A === "both" ? " (a pair, for both of you)" : " for herself"}${z ? `, with a card: ${z}` : ""}`,
                            { souvenirId: R.id },
                        ),
                        b(null));
                },
            }),
        ],
    });
}
function ct({ text: s, charName: t = "" }) {
    return k
        .useMemo(() => Ut(s, { charName: t }), [s, t])
        .map((l, c) =>
            l.kind === "p"
                ? e.jsx("p", { children: l.text }, c)
                : l.kind === "his"
                  ? e.jsx("div", { className: "his", children: l.text }, c)
                  : l.kind === "mine"
                    ? e.jsx("div", { className: "mine", children: l.text }, c)
                    : l.kind === "thought"
                      ? e.jsx("p", { className: "thought", children: l.text }, c)
                      : e.jsxs(
                            "div",
                            {
                                className: "other",
                                children: [l.who && e.jsx("small", { children: l.who }), l.text],
                            },
                            c,
                        ),
        );
}
function Hn({ e: s, trip: t, char: n, name: l, aiName: c, onUndo: a, onEvent: d }) {
    var x, i, m, v, j;
    if (s.who === "char")
        return e.jsxs("div", {
            className: "tv-entry",
            children: [
                e.jsx("div", { className: "tm tn", children: s.time }),
                e.jsx(ct, { text: s.text, charName: c }),
            ],
        });
    if (s.who === "me") {
        const o = Vt(s.text);
        return e.jsxs("div", {
            className: "tv-entry",
            children: [
                e.jsxs("div", { className: "tm tn", children: [s.time, " · 你"] }),
                o.map((h, p) =>
                    h.kind === "act"
                        ? e.jsx("p", { children: h.text }, p)
                        : e.jsx("div", { className: "mine", children: h.text }, p),
                ),
            ],
        });
    }
    const r = s.by === "char" ? l : "你";
    if (s.kind === "event")
        return e.jsxs("div", {
            className: "tv-entry",
            children: [
                e.jsxs("div", { className: "tm tn", children: [s.time, " · ", s.text] }),
                e.jsxs("div", {
                    className: "tv-evt",
                    children: [
                        e.jsx("b", { children: (x = s.event) == null ? void 0 : x.title }),
                        e.jsx("div", {
                            className: "tv-s",
                            style: { marginTop: 3 },
                            children: _n[(i = s.event) == null ? void 0 : i.k] || "计划可能受到影响",
                        }),
                        e.jsxs("div", {
                            className: "acts",
                            children: [
                                e.jsx("button", {
                                    disabled: !!s.resolved,
                                    onClick: () => d(!0),
                                    children: "照原计划",
                                }),
                                e.jsx("button", {
                                    className: "pri",
                                    disabled: !!s.resolved,
                                    onClick: () => d(!1),
                                    children: "调整计划",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    if (s.kind === "change")
        return e.jsxs("div", {
            className: "tv-entry",
            children: [
                e.jsxs("div", { className: "tm tn", children: [s.time, " · 行程已调整"] }),
                e.jsxs("div", {
                    className: "tv-evt",
                    children: [
                        e.jsxs("div", {
                            className: "tv-row",
                            children: [
                                e.jsxs("b", { children: [r, "调整了计划"] }),
                                e.jsx("span", { className: "tv-k", children: "Plan" }),
                            ],
                        }),
                        e.jsx("div", { className: "tv-s", style: { marginTop: 3 }, children: s.label }),
                        s.by === "char" &&
                            e.jsx("div", {
                                className: "acts",
                                children: e.jsx("button", {
                                    disabled: s.undone,
                                    onClick: a,
                                    children: s.undone ? "已撤销" : "撤销",
                                }),
                            }),
                    ],
                }),
            ],
        });
    if (s.kind === "photo") {
        const o = (t.photos || []).find((h) => h.id === s.photoId);
        return e.jsxs("div", {
            className: "tv-entry",
            children: [
                e.jsx("div", { className: "tm tn", children: s.time }),
                e.jsxs("div", {
                    className: "tv-pol-wrap",
                    children: [
                        e.jsxs("b", {
                            children: [
                                r,
                                (o == null ? void 0 : o.of) === "her" && s.by === "char"
                                    ? "拍下了你"
                                    : "拍了一张照片",
                            ],
                        }),
                        o
                            ? e.jsx(xt, { p: o, trip: t, char: n, variant: "polaroid", className: "tv-pol" })
                            : e.jsx(tt, {}),
                    ],
                }),
            ],
        });
    }
    if (s.kind === "book")
        return e.jsxs("div", {
            className: "tv-entry",
            children: [
                e.jsx("div", { className: "tm tn", children: s.time }),
                e.jsxs("div", {
                    className: "tv-inl",
                    children: [
                        e.jsxs("div", {
                            style: { flex: 1 },
                            children: [
                                e.jsxs("div", {
                                    className: "tv-row",
                                    children: [
                                        e.jsxs("b", { children: [r, "预订了餐厅"] }),
                                        e.jsx("span", { className: "tv-k", children: "Table" }),
                                    ],
                                }),
                                e.jsx("div", {
                                    className: "tv-s",
                                    style: { marginTop: 2 },
                                    children: s.label,
                                }),
                            ],
                        }),
                        s.by === "char" &&
                            e.jsx("button", {
                                className: "tv-s",
                                disabled: s.undone,
                                onClick: a,
                                children: s.undone ? "已撤销" : "撤销",
                            }),
                    ],
                }),
            ],
        });
    if (s.kind === "buy") {
        const o = (t.souvenirs || []).find((p) => p.id === s.souvenirId),
            h = (o == null ? void 0 : o.secret) && s.by === "char" && t.status !== "done";
        return e.jsxs("div", {
            className: "tv-entry",
            children: [
                e.jsx("div", { className: "tm tn", children: s.time }),
                e.jsx("div", {
                    className: "tv-inl",
                    children: e.jsxs("div", {
                        style: { flex: 1 },
                        children: [
                            e.jsxs("div", {
                                className: "tv-row",
                                children: [
                                    e.jsx("b", {
                                        children: h
                                            ? `${l}买了一样东西`
                                            : `${r}买了${(o == null ? void 0 : o.name) || ""}`,
                                    }),
                                    e.jsx("span", { className: "tv-k", children: "Souvenir" }),
                                ],
                            }),
                            e.jsx("div", {
                                className: "tv-s",
                                style: { marginTop: 2 },
                                children: h
                                    ? "返程后在手账中揭晓"
                                    : [
                                          (o == null ? void 0 : o.for) === "her"
                                              ? "送给你"
                                              : (o == null ? void 0 : o.for) === "char"
                                                ? `送给${l}`
                                                : (o == null ? void 0 : o.for) === "both"
                                                  ? "一对"
                                                  : "",
                                          o != null && o.price ? `¥${o.price}` : "",
                                      ]
                                          .filter(Boolean)
                                          .join(" · "),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }
    return s.kind === "stamp"
        ? e.jsxs("div", {
              className: "tv-entry",
              children: [
                  e.jsxs("div", { className: "tm tn", children: [s.time, " · 盖章"] }),
                  e.jsx("div", {
                      style: { marginTop: 8 },
                      children: e.jsx(ze, {
                          en: (m = s.stamp) == null ? void 0 : m.en,
                          name: (v = s.stamp) == null ? void 0 : v.name,
                          date: (j = s.stamp) == null ? void 0 : j.date,
                          size: 56,
                      }),
                  }),
              ],
          })
        : null;
}
const _n = {
    rain: "接下来的安排可能受影响",
    queue: "可能需要等待一段时间",
    closed: "部分区域今天不开放",
    delay: "到达时间可能推迟",
    soldout: "想要的可能买不到了",
};
function qn({ open: s, trip: t, char: n, onClose: l }) {
    var I;
    const { state: c, putTrip: a } = Z(),
        d = hs(t.settings),
        r = (u) => a(t.id, (C) => ({ settings: { ...hs(C.settings), ...u, custom: !0 } })),
        x = ((I = c.offlinePresets) == null ? void 0 : I.style) || [],
        i = Gs(c, n, "offline"),
        m = (c.worldbook || []).filter((u) => u.enabled !== !1),
        [v, j] = k.useState(d.styleText || ""),
        [o, h] = k.useState(
            typeof d.words == "number" && !Es.some(([u]) => u === d.words) ? String(d.words) : "",
        );
    k.useEffect(() => {
        s && j(d.styleText || "");
    }, [s]);
    const p = [
        ["offline", "沿用线下设置", "与线下现场相同"],
        ["travelogue", "游记", "细写风景与沿途见闻"],
        ...x.map((u) => [u.id, u.name, "线下文风预设"]),
        ["custom", "自定义", "填写你想要的文风描述"],
    ];
    return e.jsxs(me, {
        open: s,
        onClose: l,
        children: [
            e.jsx("h3", { children: "现场设置" }),
            e.jsx("div", { className: "tv-k", style: { marginTop: 16 }, children: "文风" }),
            e.jsx("div", {
                className: "tv-card",
                style: { marginTop: 6, padding: "2px 12px", boxShadow: "0 0 0 .5px var(--tv-line)" },
                children: p.map(([u, C, b]) =>
                    e.jsxs(
                        "button",
                        {
                            className: "tv-seg",
                            style: { gridTemplateColumns: "1fr auto" },
                            onClick: () => r({ style: u }),
                            children: [
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("div", { className: "ti", children: C }),
                                        e.jsx("div", { className: "ty", children: b }),
                                    ],
                                }),
                                e.jsx("span", { className: `tv-radio${d.style === u ? " on" : ""}` }),
                            ],
                        },
                        u,
                    ),
                ),
            }),
            d.style === "custom" &&
                e.jsx("textarea", {
                    className: "tv-area",
                    style: { marginTop: 8 },
                    value: v,
                    onChange: (u) => j(u.target.value),
                    onBlur: () => r({ styleText: v.trim() }),
                    placeholder: "描述你想要的文风",
                }),
            e.jsx("div", { className: "tv-k", style: { marginTop: 16 }, children: "字数" }),
            e.jsxs("div", {
                className: "tv-seg2",
                style: { marginTop: 6 },
                children: [
                    e.jsx("button", {
                        className: d.words === "offline" ? "on" : "",
                        onClick: () => r({ words: "offline" }),
                        children: "沿用线下",
                    }),
                    Es.map(([u, C]) =>
                        e.jsxs(
                            "button",
                            {
                                className: d.words === u ? "on" : "",
                                onClick: () => r({ words: u }),
                                children: [C, " · ", u],
                            },
                            u,
                        ),
                    ),
                ],
            }),
            e.jsxs("div", {
                className: "tv-row",
                style: { marginTop: 8 },
                children: [
                    e.jsx("span", { className: "tv-s", children: "自定义字数" }),
                    e.jsx("input", {
                        className: "tv-input",
                        style: { width: 120 },
                        inputMode: "numeric",
                        value: o,
                        onChange: (u) => h(u.target.value.replace(/\D/g, "")),
                        onBlur: () => o && r({ words: Number(o) }),
                        placeholder: "如 700",
                    }),
                ],
            }),
            e.jsx("div", { className: "tv-k", style: { marginTop: 16 }, children: "视角" }),
            e.jsx("div", {
                className: "tv-seg2",
                style: { marginTop: 6 },
                children: [
                    ["offline", "沿用线下"],
                    ["first", "第一人称"],
                    ["second", "第二人称"],
                    ["third", "第三人称"],
                ].map(([u, C]) =>
                    e.jsx(
                        "button",
                        { className: d.pov === u ? "on" : "", onClick: () => r({ pov: u }), children: C },
                        u,
                    ),
                ),
            }),
            e.jsx(Jn, { s: d, set: r, offWb: i, allWb: m }),
            e.jsx(Kn, { trip: t, char: n }),
            e.jsx("button", {
                className: "tv-btn",
                style: { marginTop: 16 },
                onClick: () => {
                    (d.style === "custom" && r({ styleText: v.trim() }), l());
                },
                children: "完成",
            }),
        ],
    });
}
function Jn({ s, set: t, offWb: n, allWb: l }) {
    const [c, a] = k.useState(""),
        d = n.map((o) => o.id),
        r = Xs(s, d),
        x = new Set(d),
        i = l.reduce((o, h) => {
            const p = h.category || "未分类";
            return ((o[p] = o[p] || []).push(h), o);
        }, {}),
        m = (o, h) => {
            s.wbOffline !== !1 && x.has(o.id)
                ? t({
                      wbOff: h
                          ? (s.wbOff || []).filter((p) => p !== o.id)
                          : [...new Set([...(s.wbOff || []), o.id])],
                  })
                : t({
                      wbIds: h
                          ? [...new Set([...(s.wbIds || []), o.id])]
                          : (s.wbIds || []).filter((p) => p !== o.id),
                  });
        },
        v = (o, h) => {
            const p = o.filter((u) => s.wbOffline !== !1 && x.has(u.id)).map((u) => u.id),
                I = o.filter((u) => !(s.wbOffline !== !1 && x.has(u.id))).map((u) => u.id);
            t({
                wbOff: h
                    ? (s.wbOff || []).filter((u) => !p.includes(u))
                    : [...new Set([...(s.wbOff || []), ...p])],
                wbIds: h
                    ? [...new Set([...(s.wbIds || []), ...I])]
                    : (s.wbIds || []).filter((u) => !I.includes(u)),
            });
        },
        j = new Set(l.filter((o) => r.has(o.id)).map((o) => o.category || "未分类")).size;
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className: "tv-row",
                style: { marginTop: 16 },
                children: [
                    e.jsx("span", { className: "tv-k", children: "世界书" }),
                    e.jsxs("span", { className: "tv-s", children: ["已开启 ", j, " 本 · ", r.size, " 条"] }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-card",
                style: { marginTop: 6, padding: "2px 12px", boxShadow: "0 0 0 .5px var(--tv-line)" },
                children: [
                    e.jsxs("div", {
                        className: "tv-seg",
                        style: { gridTemplateColumns: "1fr auto" },
                        children: [
                            e.jsxs("div", {
                                children: [
                                    e.jsx("div", { className: "ti", children: "沿用线下的绑定" }),
                                    e.jsx("div", {
                                        className: "ty",
                                        children: n.length
                                            ? `${new Set(n.map((o) => o.category || "未分类")).size} 本 · ${n.length} 条，可在下面逐条关闭`
                                            : "线下未绑定世界书",
                                    }),
                                ],
                            }),
                            e.jsx(Ae, { on: s.wbOffline !== !1, onChange: (o) => t({ wbOffline: o }) }),
                        ],
                    }),
                    Object.entries(i).map(([o, h]) => {
                        const p = h.filter((u) => r.has(u.id)).length,
                            I = c === o;
                        return e.jsxs(
                            De.Fragment,
                            {
                                children: [
                                    e.jsxs("div", {
                                        className: "tv-seg",
                                        style: { gridTemplateColumns: "1fr auto" },
                                        children: [
                                            e.jsxs("button", {
                                                type: "button",
                                                className: "tv-wb-book",
                                                onClick: () => a(I ? "" : o),
                                                children: [
                                                    e.jsxs("div", {
                                                        className: "ti",
                                                        children: [
                                                            o,
                                                            e.jsx("span", {
                                                                className: `tv-wb-caret${I ? " on" : ""}`,
                                                                children: "›",
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx("div", {
                                                        className: "ty",
                                                        children:
                                                            p && p < h.length
                                                                ? `部分 · 已开启 ${p} / ${h.length} 条`
                                                                : p
                                                                  ? `已开启 ${p} 条`
                                                                  : `${h.length} 条`,
                                                    }),
                                                ],
                                            }),
                                            e.jsx(Ae, { on: p > 0, onChange: (u) => v(h, u) }),
                                        ],
                                    }),
                                    I &&
                                        h.map((u) =>
                                            e.jsxs(
                                                "div",
                                                {
                                                    className: "tv-seg tv-wb-entry",
                                                    style: { gridTemplateColumns: "1fr auto" },
                                                    children: [
                                                        e.jsxs("div", {
                                                            children: [
                                                                e.jsx("div", {
                                                                    className: "ti",
                                                                    children: u.name || "未命名条目",
                                                                }),
                                                                s.wbOffline !== !1 && x.has(u.id)
                                                                    ? e.jsx("div", {
                                                                          className: "ty",
                                                                          children: "线下已绑定",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                        e.jsx(Ae, {
                                                            on: r.has(u.id),
                                                            onChange: (C) => m(u, C),
                                                        }),
                                                    ],
                                                },
                                                u.id,
                                            ),
                                        ),
                                ],
                            },
                            o,
                        );
                    }),
                ],
            }),
        ],
    });
}
function Kn({ trip: s, char: t }) {
    var b, O, S;
    const { state: n, putTrip: l, patchChar: c } = Z(),
        a = fe(),
        d = Ys(s, n),
        r = ((b = s.memory) == null ? void 0 : b.entries) || [],
        x = Ns(s).filter((T) => T.who === "me" || T.who === "char").length,
        [i, m] = k.useState(!1),
        [v, j] = k.useState(null),
        o = ve(`travel-mem-${s.id}`),
        h = (T) =>
            l(s.id, ($) => {
                var W;
                return {
                    memory: {
                        ...($.memory || {}),
                        cfg: { ...(((W = $.memory) == null ? void 0 : W.cfg) || {}), ...T },
                    },
                };
            }),
        p = () =>
            o
                .run((T) => ws({ state: n, trip: s, char: t, putTrip: l, patchChar: c, signal: T }), {
                    label: "旅行记忆",
                })
                .then((T) => {
                    var $;
                    T != null && T.error
                        ? a(T.error.message || String(T.error), "error")
                        : ($ = T == null ? void 0 : T.value) != null && $.added
                          ? a(`记下了 ${T.value.added} 条`)
                          : a("没有新的内容需要总结");
                }),
        I = () => {
            (l(s.id, (T) => {
                var $;
                return {
                    memory: {
                        ...(T.memory || {}),
                        entries: ((($ = T.memory) == null ? void 0 : $.entries) || []).map((W) =>
                            W.id === v.id ? { ...W, text: v.text.trim().slice(0, 600) } : W,
                        ),
                    },
                };
            }),
                j(null));
        },
        u = (T) =>
            l(s.id, ($) => {
                var W;
                return {
                    memory: {
                        ...($.memory || {}),
                        entries: (((W = $.memory) == null ? void 0 : W.entries) || []).filter(
                            (M) => M.id !== T,
                        ),
                    },
                };
            }),
        C = (T, $) => {
            const W = Math.round(Number(String(T).replace(/\D/g, "")));
            W && $(W);
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className: "tv-row",
                style: { marginTop: 16 },
                children: [
                    e.jsx("span", { className: "tv-k", children: "本次旅行的记忆" }),
                    e.jsxs("span", {
                        className: "tv-s",
                        children: [
                            r.length,
                            " 条",
                            (O = s.memory) != null && O.merged
                                ? " · 已接入主线"
                                : s.timeMode === "real"
                                  ? " · 随时接入主线"
                                  : " · 独立保存",
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-card",
                style: { marginTop: 6, padding: "2px 12px", boxShadow: "0 0 0 .5px var(--tv-line)" },
                children: [
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "上下文" }),
                            e.jsxs("span", {
                                children: [
                                    e.jsx("input", {
                                        className: "tv-input tn",
                                        style: { width: 56, height: 32, textAlign: "right" },
                                        inputMode: "numeric",
                                        defaultValue: d.contextFloors,
                                        onBlur: (T) =>
                                            C(T.target.value, ($) =>
                                                h({ contextFloors: Math.max(6, Math.min(120, $)) }),
                                            ),
                                    }),
                                    " 层",
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "自动总结" }),
                            e.jsxs("span", {
                                children: [
                                    "每 ",
                                    e.jsx("input", {
                                        className: "tv-input tn",
                                        style: { width: 56, height: 32, textAlign: "right" },
                                        inputMode: "numeric",
                                        defaultValue: d.every,
                                        onBlur: (T) =>
                                            C(T.target.value, ($) =>
                                                h({ every: Math.max(6, Math.min(200, $)) }),
                                            ),
                                    }),
                                    " 层",
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "还没总结" }),
                            e.jsxs("span", { className: "tn", children: [x, " 层"] }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                style: { display: "flex", gap: 8, marginTop: 8 },
                children: [
                    e.jsx("button", {
                        className: "tv-btn ghost",
                        style: { flex: 1 },
                        onClick: () => m(!0),
                        children: "查看记忆库",
                    }),
                    e.jsx("button", {
                        className: "tv-btn ghost",
                        style: { flex: 1 },
                        onClick: o.busy ? o.stop : p,
                        children: o.busy
                            ? e.jsxs(e.Fragment, {
                                  children: [e.jsx("span", { className: "tv-spin" }), "总结中 · 停止"],
                              })
                            : "立即总结",
                    }),
                ],
            }),
            e.jsx("div", {
                className: "tv-s",
                style: { marginTop: 6, lineHeight: 1.7 },
                children:
                    s.timeMode === "real"
                        ? "现实时间的旅行：每次总结后同时写入主线记忆。"
                        : "虚拟时间的旅行：记忆只属于这次旅行，结束时可以选择接入主线。",
            }),
            s.timeMode !== "real" &&
                r.length > 0 &&
                e.jsx("button", {
                    className: "tv-btn ghost",
                    style: { marginTop: 8 },
                    onClick: () => {
                        var T;
                        if ((T = s.memory) != null && T.merged)
                            (it({ trip: s, char: t, putTrip: l, patchChar: c }),
                                a("已从主线撤回，记忆库还在"));
                        else {
                            const $ = Ts({ trip: s, char: t, putTrip: l, patchChar: c });
                            a($ ? `已接入主线：${$} 条` : "没有新的记忆可以接入");
                        }
                    },
                    children: (S = s.memory) != null && S.merged ? "从主线撤回" : "接入主线记忆",
                }),
            e.jsxs(me, {
                open: i,
                onClose: () => {
                    (m(!1), j(null));
                },
                children: [
                    e.jsxs("div", {
                        className: "tv-row",
                        children: [
                            e.jsx("h3", { children: "本次旅行的记忆" }),
                            e.jsxs("span", { className: "tv-s", children: [r.length, " 条"] }),
                        ],
                    }),
                    !r.length &&
                        e.jsxs("div", {
                            className: "tv-empty",
                            children: [
                                "还没有记忆。现场每攒够 ",
                                d.every,
                                " 层会自动总结一次，也可以点「立即总结」。",
                            ],
                        }),
                    e.jsx("div", {
                        className: "tv-mem-list",
                        children: r.map((T) =>
                            e.jsxs(
                                "div",
                                {
                                    className: "tv-mem",
                                    children: [
                                        e.jsxs("div", {
                                            className: "tv-row",
                                            children: [
                                                e.jsxs("span", {
                                                    className: "tv-k tn",
                                                    children: ["Day ", T.day, T.time ? ` · ${T.time}` : ""],
                                                }),
                                                e.jsxs("span", {
                                                    style: { display: "flex", gap: 12 },
                                                    children: [
                                                        e.jsx("button", {
                                                            className: "tv-s",
                                                            onClick: () => j({ id: T.id, text: T.text }),
                                                            children: "编辑",
                                                        }),
                                                        e.jsx("button", {
                                                            className: "tv-s",
                                                            onClick: () => u(T.id),
                                                            children: "删除",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        T.title &&
                                            e.jsx("div", {
                                                className: "ti",
                                                style: { marginTop: 4 },
                                                children: T.title,
                                            }),
                                        (v == null ? void 0 : v.id) === T.id
                                            ? e.jsxs(e.Fragment, {
                                                  children: [
                                                      e.jsx("textarea", {
                                                          className: "tv-area",
                                                          style: { marginTop: 6, minHeight: 96 },
                                                          value: v.text,
                                                          onChange: ($) => j({ ...v, text: $.target.value }),
                                                      }),
                                                      e.jsxs("div", {
                                                          style: { display: "flex", gap: 8, marginTop: 6 },
                                                          children: [
                                                              e.jsx("button", {
                                                                  className: "tv-btn ghost",
                                                                  style: { flex: 1 },
                                                                  onClick: () => j(null),
                                                                  children: "取消",
                                                              }),
                                                              e.jsx("button", {
                                                                  className: "tv-btn",
                                                                  style: { flex: 1 },
                                                                  onClick: I,
                                                                  children: "保存",
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              })
                                            : e.jsx("p", { className: "tv-mem-text", children: T.text }),
                                    ],
                                },
                                T.id,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
function Un({ open: s, name: t, onClose: n, onShoot: l }) {
    const [c, a] = k.useState("him"),
        [d, r] = k.useState("");
    return (
        k.useEffect(() => {
            s && r("");
        }, [s]),
        e.jsxs(me, {
            open: s,
            onClose: n,
            children: [
                e.jsx("h3", { children: "拍照" }),
                e.jsx("div", {
                    className: "tv-grid3",
                    style: { marginTop: 12, gridTemplateColumns: "repeat(4, 1fr)" },
                    children: [
                        ["him", `拍${t.slice(0, 4)}`],
                        ["both", "合照"],
                        ["self", "自拍"],
                        ["view", "风景"],
                    ].map(([x, i]) =>
                        e.jsx(
                            "button",
                            { className: c === x ? "on" : "", onClick: () => a(x), children: i },
                            x,
                        ),
                    ),
                }),
                e.jsx("textarea", {
                    className: "tv-area",
                    style: { marginTop: 10, minHeight: 64 },
                    value: d,
                    onChange: (x) => r(x.target.value),
                    placeholder: "画面描述（可选）",
                }),
                e.jsx("div", {
                    className: "tv-s",
                    style: { marginTop: 6, lineHeight: 1.7 },
                    children:
                        "留空时按此刻的情节生成。开启「旅行」生图时生成照片，否则以描述保存；照片存入本次相册。",
                }),
                e.jsx("button", {
                    className: "tv-btn",
                    style: { marginTop: 12 },
                    onClick: () => l(c, d.trim().slice(0, 160)),
                    children: "拍下",
                }),
            ],
        })
    );
}
function dt(s, t) {
    const n = s.nearby || [],
        l = String((t == null ? void 0 : t.place) || (t == null ? void 0 : t.title) || ""),
        c = n.find((a) => l && (a.near.includes(l) || l.includes(a.near)));
    return c ? [c, ...n.filter((a) => a !== c)] : n;
}
function ot(s) {
    const { putTrip: t } = Z();
    return (n, l) =>
        t(s.id, (c) => ({
            nearby: (c.nearby || []).map((a) => ({
                ...a,
                food: a.food.map((d) => (d.id === n ? { ...d, ...l } : d)),
                shops: a.shops.map((d) => ({
                    ...d,
                    items: d.items.map((r) => (r.id === n ? { ...r, ...l } : r)),
                })),
            })),
        }));
}
function Vn({ open: s, trip: t, item: n, day: l, name: c, onClose: a, onBook: d }) {
    const r = ot(t),
        i = dt(t, n).flatMap((S) => S.food.map((T) => ({ ...T, near: S.near }))),
        [m, v] = k.useState(null),
        [j, o] = k.useState("19:00"),
        [h, p] = k.useState(""),
        [I, u] = k.useState(""),
        [C, b] = k.useState("");
    k.useEffect(() => {
        var S;
        s && (v(((S = i[0]) == null ? void 0 : S.id) || null), b(""));
    }, [s]);
    const O = i.find((S) => S.id === m) || (C.trim() ? { name: C.trim() } : null);
    return e.jsxs(me, {
        open: s,
        onClose: a,
        children: [
            e.jsxs("div", {
                className: "tv-row",
                children: [
                    e.jsx("h3", { children: "餐厅预订" }),
                    e.jsxs("span", {
                        className: "tv-s",
                        children: ["第 ", l, " 天 · 附近 ", i.length, " 家"],
                    }),
                ],
            }),
            e.jsx("div", {
                style: { marginTop: 12 },
                children: i.slice(0, 6).map((S, T) =>
                    e.jsxs(
                        "div",
                        {
                            role: "button",
                            className: `tv-opt tv-press${m === S.id ? " on" : ""}`,
                            style: {
                                display: "flex",
                                gap: 12,
                                alignItems: m === S.id ? "flex-start" : "center",
                            },
                            onClick: () => {
                                (v(S.id), b(""));
                            },
                            children: [
                                e.jsx(Ie, {
                                    cat: "food",
                                    k: t.id,
                                    base: T,
                                    img: S.img,
                                    shift: S.shift,
                                    editable: m === S.id,
                                    desc: `${S.name}，${S.type || ""}，餐厅与菜品`,
                                    style: {
                                        width: m === S.id ? 78 : 50,
                                        height: m === S.id ? 92 : 50,
                                        borderRadius: 10,
                                        flex: "none",
                                        transition: "width .2s, height .2s",
                                    },
                                    onChange: ($) => r(S.id, $),
                                }),
                                e.jsxs("span", {
                                    style: { display: "block", flex: 1, minWidth: 0 },
                                    children: [
                                        e.jsxs("span", {
                                            className: "tv-row",
                                            children: [
                                                e.jsx("b", { style: { fontSize: 13.5 }, children: S.name }),
                                                e.jsx("span", { className: "tv-s", children: S.price }),
                                            ],
                                        }),
                                        e.jsx("span", {
                                            className: "tv-s",
                                            style: { display: "block", marginTop: 2 },
                                            children: [S.type, S.near].filter(Boolean).join(" · "),
                                        }),
                                        m === S.id &&
                                            S.quote &&
                                            e.jsxs("span", {
                                                className: "tv-quote",
                                                style: { display: "block" },
                                                children: ["「", S.quote, "」"],
                                            }),
                                    ],
                                }),
                            ],
                        },
                        S.id,
                    ),
                ),
            }),
            e.jsx("input", {
                className: "tv-input",
                style: { marginTop: 8 },
                value: C,
                onChange: (S) => {
                    (b(S.target.value), v(null));
                },
                placeholder: "或自行填写餐厅名称",
            }),
            e.jsxs("div", {
                className: "tv-card",
                style: { marginTop: 10, padding: "10px 14px", boxShadow: "0 0 0 .5px var(--tv-line)" },
                children: [
                    e.jsx("div", { className: "tv-k", children: "Time" }),
                    e.jsx("div", {
                        style: { display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" },
                        children: ["12:00", "18:00", "18:30", "19:00", "19:30", "20:00"].map((S) =>
                            e.jsx(
                                "button",
                                {
                                    className: `tv-chip${j === S ? " on" : ""}`,
                                    onClick: () => o(S),
                                    children: S,
                                },
                                S,
                            ),
                        ),
                    }),
                    e.jsx("div", { className: "tv-line", style: { margin: "10px 0 2px" } }),
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "人数" }),
                            e.jsx("span", { className: "tn", children: "2 位" }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "座位" }),
                            e.jsx("input", {
                                value: h,
                                onChange: (S) => p(S.target.value),
                                placeholder: "可选",
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "备注" }),
                            e.jsx("input", {
                                value: I,
                                onChange: (S) => u(S.target.value),
                                placeholder: "可选",
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs("button", {
                className: "tv-btn",
                style: { marginTop: 12 },
                disabled: !O,
                onClick: () => d(O, j, h.trim().slice(0, 10), I.trim().slice(0, 40)),
                children: ["预约 · ", j],
            }),
        ],
    });
}
function Qn({ open: s, trip: t, item: n, name: l, onClose: c, onBuy: a }) {
    const d = ot(t),
        r = dt(t, n),
        x = r.flatMap((b) => b.shops)[0] || null,
        i = r.flatMap((b) => b.shops.flatMap((O) => O.items.map((S) => ({ ...S, shop: O.name })))),
        [m, v] = k.useState(null),
        [j, o] = k.useState("char"),
        [h, p] = k.useState(""),
        [I, u] = k.useState("");
    k.useEffect(() => {
        var b;
        s && (v(((b = i[0]) == null ? void 0 : b.id) || null), p(""), u(""));
    }, [s]);
    const C = i.find((b) => b.id === m) || (I.trim() ? { name: I.trim(), price: 0 } : null);
    return e.jsxs(me, {
        open: s,
        onClose: c,
        children: [
            e.jsxs("div", {
                className: "tv-row",
                children: [
                    e.jsx("h3", { children: "纪念品" }),
                    e.jsx("span", {
                        className: "tv-s",
                        children: (x == null ? void 0 : x.name) || "附近的小店",
                    }),
                ],
            }),
            e.jsx("div", {
                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 },
                children: i.slice(0, 6).map((b, O) =>
                    e.jsxs(
                        "div",
                        {
                            role: "button",
                            className: `tv-opt tv-press${m === b.id ? " on" : ""}`,
                            style: { margin: 0, padding: 8 },
                            onClick: () => {
                                (v(b.id), u(""));
                            },
                            children: [
                                e.jsx(Ie, {
                                    cat: "gift",
                                    k: t.id,
                                    base: O,
                                    label: b.name,
                                    img: b.img,
                                    shift: b.shift,
                                    editable: m === b.id,
                                    desc: `${b.name}，${b.note || ""}，纪念品静物`,
                                    style: { aspectRatio: "1", borderRadius: 9 },
                                    onChange: (S) => d(b.id, S),
                                }),
                                e.jsx("span", {
                                    style: { display: "block", fontSize: 12, fontWeight: 600, marginTop: 7 },
                                    children: b.name,
                                }),
                                e.jsxs("span", {
                                    className: "tv-row",
                                    children: [
                                        e.jsxs("span", { className: "tv-s tn", children: ["¥", b.price] }),
                                        e.jsx("span", { className: "tv-s", children: b.note }),
                                    ],
                                }),
                            ],
                        },
                        b.id,
                    ),
                ),
            }),
            e.jsx("input", {
                className: "tv-input",
                style: { marginTop: 8 },
                value: I,
                onChange: (b) => {
                    (u(b.target.value), v(null));
                },
                placeholder: "或自行填写物品",
            }),
            e.jsx("div", {
                className: "tv-seg2",
                style: { marginTop: 10 },
                children: [
                    ["char", `送给${l.slice(0, 4)}`],
                    ["self", "自己"],
                    ["both", "一对"],
                ].map(([b, O]) =>
                    e.jsx("button", { className: j === b ? "on" : "", onClick: () => o(b), children: O }, b),
                ),
            }),
            j !== "self" &&
                e.jsx("input", {
                    className: "tv-input",
                    style: { marginTop: 8 },
                    value: h,
                    onChange: (b) => p(b.target.value),
                    placeholder: "附卡（可选，返程后在手账中开启）",
                }),
            e.jsx("button", {
                className: "tv-btn",
                style: { marginTop: 12 },
                disabled: !C,
                onClick: () => a(C, j, h.trim().slice(0, 80)),
                children: "购买",
            }),
        ],
    });
}
const mt = (s, t) => `travel:${s.id}:${t.id}`;
function ht({ state: s, trip: t, char: n, putTrip: l }) {
    const c = (r, x) =>
            l(t.id, (i) => ({ photos: (i.photos || []).map((m) => (m.id === r ? { ...m, ...x } : m)) })),
        a = (r, x = "") => {
            var m;
            if (!ls(s, "travel")) return !1;
            const i = r.of === "her" || r.of === "self" ? "me" : r.of === "view" ? null : n.id;
            return Zt({
                key: mt(t, r),
                desc: Js(r.desc, ts(s)),
                charId: i,
                albumOwner: n.id,
                context: {
                    text: String(x || r.desc).slice(0, 800),
                    place: `${((m = t.dest) == null ? void 0 : m.name) || ""} ${r.where || ""}`,
                    at: r.at,
                },
                getState: () => s,
                apply: (v) => c(r.id, { ref: v }),
            });
        };
    return {
        shoot: a,
        editDesc: (r, x) => {
            const i = { ...r, desc: x };
            (c(r.id, { desc: x }), a(i));
        },
    };
}
function xt({
    p: s,
    trip: t,
    char: n,
    className: l = "",
    imgClassName: c = "",
    variant: a = "",
    caption: d = "",
}) {
    const { state: r, putTrip: x } = Z(),
        i = ht({ state: r, trip: t, char: n, putTrip: x }),
        m = ls(r, "travel");
    return e.jsx(Qt, {
        src: s.ref,
        desc: s.desc,
        genKey: mt(t, s),
        className: l,
        imgClassName: c,
        label: "照片",
        variant: a,
        caption: d,
        onRegen: m ? () => i.shoot(s) : void 0,
        onDescChange: (v) =>
            m
                ? i.editDesc(s, v)
                : x(t.id, (j) => ({
                      photos: (j.photos || []).map((o) => (o.id === s.id ? { ...o, desc: v } : o)),
                  })),
    });
}
function Yn({ trip: s, char: t, onClose: n }) {
    const l = ie(t),
        c = s.photos || [];
    return e.jsxs("div", {
        className: "tv-live",
        children: [
            e.jsxs("div", {
                className: "tv-livebar",
                children: [
                    e.jsx("button", {
                        className: "tv-press",
                        onClick: n,
                        "aria-label": "返回",
                        style: { display: "flex" },
                        children: e.jsx(Fe, { size: 18 }),
                    }),
                    e.jsxs("div", {
                        style: { flex: 1 },
                        children: [
                            e.jsx("div", { className: "ttl", children: "本次相册" }),
                            e.jsxs("div", { className: "tv-s tn", children: [c.length, " 张"] }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-livebody",
                children: [
                    !c.length &&
                        e.jsxs("div", {
                            className: "tv-empty",
                            children: [
                                "在旅途现场选择「拍照」，照片会存在这里。",
                                l,
                                "拍的照片也会存在这里。",
                            ],
                        }),
                    e.jsx("div", {
                        style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 },
                        children: c.map((a) =>
                            e.jsxs(
                                "div",
                                {
                                    className: "tv-album-cell",
                                    children: [
                                        e.jsx(xt, { p: a, trip: s, char: t }),
                                        e.jsxs("small", {
                                            children: [a.by === "char" ? l : "你", " · D", a.day],
                                        }),
                                    ],
                                },
                                a.id,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
const Bs = "M 30 132 C 110 18, 250 18, 330 132",
    Gn = (s) => 1 - Math.pow(1 - s, 3) * (1 - s * 0.2),
    Xn = (s) => (s < 0.5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2);
function Zn({ mode: s }) {
    return s === "train"
        ? e.jsxs("g", {
              children: [
                  e.jsx("rect", {
                      x: "-11",
                      y: "-7",
                      width: "22",
                      height: "14",
                      rx: "4",
                      fill: "currentColor",
                  }),
                  e.jsx("rect", { x: "-7", y: "-4", width: "5", height: "4", rx: "1", fill: "#fff" }),
                  e.jsx("rect", { x: "2", y: "-4", width: "5", height: "4", rx: "1", fill: "#fff" }),
              ],
          })
        : s === "drive"
          ? e.jsxs("g", {
                children: [
                    e.jsx("rect", {
                        x: "-11",
                        y: "-5",
                        width: "22",
                        height: "9",
                        rx: "3.5",
                        fill: "currentColor",
                    }),
                    e.jsx("path", { d: "M-6 -5 -3 -9h7l3 4", fill: "currentColor" }),
                    e.jsx("circle", {
                        cx: "-6",
                        cy: "5",
                        r: "2.4",
                        fill: "currentColor",
                        stroke: "#fff",
                        strokeWidth: "1.2",
                    }),
                    e.jsx("circle", {
                        cx: "6",
                        cy: "5",
                        r: "2.4",
                        fill: "currentColor",
                        stroke: "#fff",
                        strokeWidth: "1.2",
                    }),
                ],
            })
          : e.jsx("path", {
                d: "M12 0c0-1.3-1-2-2.2-2H3.4L-3.4-11h-3l3.6 9h-5.6l-2.2-3.2h-2.2l1.4 5.2-1.4 5.2h2.2l2.2-3.2h5.6L-6.8 11h3L3.4 2h6.4C11 2 12 1.3 12 0Z",
                fill: "currentColor",
            });
}
function ea({ trip: s, onDone: t }) {
    var C, b, O, S, T;
    const n = k.useRef(null),
        [l, c] = k.useState(0),
        [a, d] = k.useState(!1),
        r = k.useRef(!1),
        x = et(s),
        i = ((C = s.transport) == null ? void 0 : C.mode) || "flight",
        m = (x == null ? void 0 : x.from) || ((b = s.origin) == null ? void 0 : b.name) || "出发地",
        v = (x == null ? void 0 : x.to) || ((O = s.dest) == null ? void 0 : O.name) || "目的地",
        j = () => {
            r.current || ((r.current = !0), d(!0), setTimeout(() => (t == null ? void 0 : t()), 420));
        };
    k.useEffect(() => {
        let $ = !1;
        try {
            $ = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        } catch {}
        if ($) {
            c(1);
            const f = setTimeout(j, 900);
            return () => clearTimeout(f);
        }
        const W = 2200,
            M = performance.now() + 450;
        let L = 0;
        const y = (f) => {
            const N = Math.max(0, Math.min(1, (f - M) / W));
            (c(N), N < 1 ? (L = requestAnimationFrame(y)) : setTimeout(j, 650));
        };
        return ((L = requestAnimationFrame(y)), () => cancelAnimationFrame(L));
    }, []);
    const o = i === "flight" ? Xn(l) : Gn(l);
    let h = { x: 30, y: 132, a: 0 },
        p = 0;
    const I = n.current;
    if (I) {
        p = I.getTotalLength();
        const $ = I.getPointAtLength(o * p),
            W = I.getPointAtLength(Math.min(p, o * p + 1));
        h = { x: $.x, y: $.y, a: (Math.atan2(W.y - $.y, W.x - $.x) * 180) / Math.PI };
    }
    const u =
        l <= 0
            ? i === "flight"
                ? "正在登机"
                : i === "train"
                  ? "正在检票"
                  : "准备出发"
            : l < 1
              ? i === "flight"
                  ? "已起飞"
                  : "途中"
              : `已抵达${v}`;
    return e.jsxs("div", {
        className: `tv-depart${a ? " out" : ""}`,
        onClick: j,
        role: "presentation",
        children: [
            e.jsxs("div", {
                className: "tv-depart-top",
                children: [
                    e.jsxs("span", {
                        className: "tv-k",
                        children: ["Departure · ", ((S = xs) == null ? void 0 : S[i]) || ""],
                    }),
                    e.jsx("b", {
                        className: "tn",
                        children:
                            (x == null ? void 0 : x.code) ||
                            s.title ||
                            ((T = s.dest) == null ? void 0 : T.name),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-depart-route",
                children: [
                    e.jsxs("div", {
                        className: "end",
                        children: [
                            e.jsx("span", {
                                className: "code tn",
                                children: (x == null ? void 0 : x.fromCode) || "",
                            }),
                            e.jsx("b", { children: m }),
                            e.jsx("span", {
                                className: "tm tn",
                                children: (x == null ? void 0 : x.dep) || "",
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "end r",
                        children: [
                            e.jsx("span", {
                                className: "code tn",
                                children: (x == null ? void 0 : x.toCode) || "",
                            }),
                            e.jsx("b", { children: v }),
                            e.jsx("span", {
                                className: "tm tn",
                                children: (x == null ? void 0 : x.arr) || "",
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs("svg", {
                className: "tv-depart-arc",
                viewBox: "0 0 360 150",
                "aria-hidden": !0,
                children: [
                    e.jsx("path", {
                        ref: n,
                        d: Bs,
                        fill: "none",
                        stroke: "currentColor",
                        strokeOpacity: ".22",
                        strokeWidth: "1.2",
                        strokeDasharray: "2 5",
                        strokeLinecap: "round",
                    }),
                    p > 0 &&
                        e.jsx("path", {
                            d: Bs,
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            strokeDasharray: `${o * p} ${p}`,
                        }),
                    e.jsx("circle", { cx: "30", cy: "132", r: "3.5", fill: "currentColor" }),
                    e.jsx("circle", {
                        cx: "330",
                        cy: "132",
                        r: "3.5",
                        fill: l >= 1 ? "currentColor" : "#fff",
                        stroke: "currentColor",
                        strokeWidth: "1.2",
                    }),
                    e.jsx("g", {
                        transform: `translate(${h.x} ${h.y}) rotate(${h.a})`,
                        children: e.jsx(Zn, { mode: i }),
                    }),
                ],
            }),
            e.jsx("div", { className: "tv-depart-status", children: u }, u),
            e.jsx("div", {
                className: "tv-depart-bar",
                children: e.jsx("i", { style: { transform: `scaleX(${o})` } }),
            }),
            e.jsx("div", { className: "tv-depart-skip", children: "轻点跳过" }),
        ],
    });
}
const sa = {
    draft: "草稿",
    invited: "等待回应",
    declined: "未接受",
    planning: "规划中",
    ready: "已出票",
    ongoing: "进行中",
    done: "已结束",
};
function ta({ trip: s, char: t, liveAt: n = null, onOpenChat: l, onJournal: c, onDeleted: a }) {
    var ke, we, ue, _e, qe, je, Je, Ke;
    const { state: d, putTrip: r, update: x, patchChar: i } = Z(),
        m = fe(),
        v = (((ke = s.plan) == null ? void 0 : ke.days) || []).length > 0,
        j = s.status === "ready" || s.status === "ongoing" || s.status === "done",
        o = ((we = s.transport) == null ? void 0 : we.mode) === "drive",
        h = [
            ...(j ? [["today", "今日"]] : []),
            ["plan", "行程"],
            ["stay", "住宿"],
            ["go", "出行"],
            ...(o ? [["road", "路书"]] : []),
            ["wallet", "票夹"],
        ],
        [p, I] = k.useState(j ? "today" : "plan"),
        [u, C] = k.useState(!1),
        [b, O] = k.useState(!1),
        [S, T] = k.useState(!1),
        [$, W] = k.useState(n);
    k.useEffect(() => {
        n && W(n);
    }, [n]);
    const [M, L] = k.useState(() => s.status === "ongoing" && !s.departShown),
        y = () => L(!0),
        f = () => {
            (L(!1),
                r(s.id, (_) => ({
                    departShown: Date.now(),
                    ...(_.status === "ready" ? { status: "ongoing", clock: { day: 1, time: "" } } : null),
                })),
                I("today"));
        },
        N = ve(`travel-plan-${s.id}`),
        [E, F] = k.useState(!1),
        D = () => {
            var G;
            r(s.id, { status: "done", endedAt: Date.now() });
            const _ = Ns(s).some((ce) => ce.who === "me" || ce.who === "char")
                ? ws({ state: d, trip: s, char: t, putTrip: r, patchChar: i }).catch(() => null)
                : Promise.resolve(null);
            s.timeMode === "virtual" && !((G = s.memory) != null && G.merged)
                ? ((w.current = _), F(!0))
                : c();
        },
        w = De.useRef(null),
        P = async () => {
            await w.current;
            const _ = ss(B.current).trips.find((ce) => ce.id === s.id) || s,
                G = Ts({ trip: _, char: t, putTrip: r, patchChar: i });
            m(G ? `已接入主线：${G} 条旅行记忆` : "这次旅行还没有记忆可以接入");
        },
        B = De.useRef(d);
    B.current = d;
    const V = ie(t),
        te = oe(d.me) === "我" ? "我" : oe(d.me);
    k.useEffect(() => {
        s.status === "ready" &&
            s.timeMode === "real" &&
            $e(s) <= 0 &&
            (r(s.id, { status: "ongoing" }), s.departShown || L(!0));
    }, [s.status]);
    const re = () =>
            N.run(
                async (_) => {
                    const G = await In(d, t, s, _);
                    return (
                        r(s.id, (ce) => ({
                            ...bs(ce, G),
                            status: ce.status === "draft" ? "planning" : ce.status,
                        })),
                        !0
                    );
                },
                {
                    label: "行程方案",
                    done: () => ({
                        title: "旅行 · 行程方案已生成",
                        text: "点这里查看",
                        app: "travel",
                        target: { tripId: s.id },
                    }),
                },
            ).then((_) => {
                _ != null && _.error && m(_.error.message || String(_.error), "error");
            }),
        be = () => {
            if (!v) return;
            r(s.id, (G) => ({
                status: G.timeMode === "real" && $e(G) <= 0 ? "ongoing" : "ready",
                issuedAt: Date.now(),
            }));
            const _ = sn(s);
            (_.length &&
                i(t.id, (G) => ({
                    scheduleItems: [
                        ...(G.scheduleItems || []).filter((ce) => !String(ce.id).startsWith(`trip:${s.id}:`)),
                        ..._.map(tn),
                    ],
                })),
                I("wallet"),
                m("已出票，凭证已存入票夹", "success"),
                s.timeMode === "real" && $e(s) <= 0 && L(!0));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className: "tv-scroll",
                children: [
                    e.jsxs("div", {
                        className: "tv-row",
                        children: [
                            e.jsxs("span", {
                                className: "tv-k",
                                children: [
                                    sa[s.status] || "",
                                    " · ",
                                    ((ue = s.dest) == null ? void 0 : ue.en) ||
                                        ((_e = s.dest) == null ? void 0 : _e.name),
                                ],
                            }),
                            e.jsx("button", {
                                className: "tv-press",
                                onClick: () => C(!0),
                                "aria-label": "更多",
                                children: e.jsx(st, {}),
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        className: "tv-h",
                        children: s.title || ((qe = s.dest) == null ? void 0 : qe.name) || "未命名的旅行",
                    }),
                    e.jsxs("div", {
                        className: "tv-s tn",
                        children: [
                            s.timeMode === "real"
                                ? `${Y(s.startDate)} — ${Y(Ce(s.startDate, s.days - 1))}`
                                : "虚拟时间",
                            " · ",
                            s.days,
                            " 天 · ",
                            os[s.pace] || "",
                            (je = s.origin) != null && je.name ? ` · ${s.origin.name}出发` : "",
                        ],
                    }),
                    s.invite &&
                        e.jsx(na, { trip: s, name: V, onOpenChat: () => (l == null ? void 0 : l(t.id)) }),
                    v &&
                        e.jsx("div", {
                            className: "tv-tabs",
                            children: h.map(([_, G]) =>
                                e.jsx(
                                    "button",
                                    { className: p === _ ? "on" : "", onClick: () => I(_), children: G },
                                    _,
                                ),
                            ),
                        }),
                    v
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  p === "today" &&
                                      e.jsx(ha, {
                                          trip: s,
                                          char: t,
                                          onScene: W,
                                          onJournal: c,
                                          onDepart: y,
                                          onEnd: D,
                                      }),
                                  p === "plan" &&
                                      e.jsx(aa, { trip: s, char: t, busy: N.busy, onStop: N.stop }),
                                  p === "stay" && e.jsx(ia, { trip: s, name: V }),
                                  p === "go" && e.jsx(ca, { trip: s, char: t, name: V, meName: te }),
                                  p === "road" && e.jsx(da, { trip: s, name: V, meName: te }),
                                  p === "wallet" && e.jsx(oa, { trip: s, name: V, meName: te }),
                              ],
                          })
                        : e.jsxs("div", {
                              className: "tv-card",
                              style: { marginTop: 18, padding: "22px 18px", textAlign: "center" },
                              children: [
                                  e.jsx("div", {
                                      style: { fontSize: 14, fontWeight: 600 },
                                      children: "行程尚未生成",
                                  }),
                                  e.jsxs("div", {
                                      className: "tv-s",
                                      style: { marginTop: 6, lineHeight: 1.7 },
                                      children: [
                                          V,
                                          "将一次给出每日行程、住宿与出行方案、各站附近的餐厅与店铺、行李清单与预算。",
                                      ],
                                  }),
                                  s.destQuote &&
                                      e.jsxs("div", {
                                          className: "tv-quote",
                                          style: { textAlign: "left" },
                                          children: ["「", s.destQuote, "」"],
                                      }),
                                  e.jsx("button", {
                                      className: "tv-btn",
                                      style: { marginTop: 16 },
                                      onClick: N.busy ? N.stop : re,
                                      children: N.busy
                                          ? e.jsxs(e.Fragment, {
                                                children: [
                                                    e.jsx("span", { className: "tv-spin" }),
                                                    "正在规划 · 停止",
                                                ],
                                            })
                                          : "生成行程",
                                  }),
                              ],
                          }),
                    v &&
                        !j &&
                        (p === "go" || p === "wallet") &&
                        e.jsx("button", {
                            className: "tv-btn",
                            style: { marginTop: 20 },
                            onClick: be,
                            children: "出票 · 确认全部预订",
                        }),
                ],
            }),
            M && e.jsx(ea, { trip: s, onDone: f }),
            e.jsx(zs, {
                open: E,
                onClose: () => {
                    (F(!1), c());
                },
                title: "这段旅行的记忆接入主线吗",
                message: `接入后，${V}会把这几天当作真的过过：线上聊天、线下、日程都会记得。不接入的话，它只作为一段独立的旅行保存在这里，之后在现场设置或手账里也能再接入。`,
                cancelLabel: "暂不接入",
                confirm: {
                    label: "接入主线",
                    onClick: () => {
                        P();
                    },
                },
            }),
            $ &&
                ($.album
                    ? e.jsx(Yn, { trip: s, char: t, onClose: () => W(null) })
                    : e.jsx(Bn, { trip: s, char: t, at: $, onClose: () => W(null), onMove: W })),
            e.jsx(qs, {
                open: u,
                onClose: () => C(!1),
                title: s.title || ((Je = s.dest) == null ? void 0 : Je.name),
                actions: [
                    ...(v ? [{ label: "重新生成行程", onClick: re }] : []),
                    ...(s.status === "ongoing" ? [{ label: "结束旅行", onClick: D }] : []),
                    ...(s.status === "ready" && s.timeMode === "virtual"
                        ? [{ label: "出发", onClick: y }]
                        : []),
                    { label: "修改名称", onClick: () => O(!0) },
                    {
                        label: s.timeMode === "real" ? "改为虚拟时间" : "改为现实时间",
                        onClick: () =>
                            r(s.id, (_) => ({
                                timeMode: _.timeMode === "real" ? "virtual" : "real",
                                ...(_.timeMode === "virtual" && $e(_) < 0 ? { startDate: Xe() } : null),
                            })),
                    },
                    { label: "删除这次旅行", destructive: !0, onClick: () => T(!0) },
                ],
            }),
            e.jsx(en, {
                open: b,
                onClose: () => O(!1),
                title: "旅行名称",
                value: s.title || "",
                placeholder: ((Ke = s.dest) == null ? void 0 : Ke.name) || "名称",
                maxLength: 16,
                confirmLabel: "保存",
                onSave: (_) => r(s.id, { title: _ }),
            }),
            e.jsx(zs, {
                open: S,
                onClose: () => T(!1),
                title: "删除这次旅行？",
                message: "行程、现场记录与手账将一并删除，且无法恢复。",
                confirm: {
                    label: "删除",
                    destructive: !0,
                    onClick: () => {
                        (x((_) => ({ trips: _.trips.filter((G) => G.id !== s.id) })),
                            i(t.id, (_) => ({
                                scheduleItems: (_.scheduleItems || []).filter(
                                    (G) => !String(G.id).startsWith(`trip:${s.id}:`),
                                ),
                            })),
                            a());
                    },
                },
            }),
        ],
    });
}
function na({ trip: s, name: t, onOpenChat: n }) {
    var a;
    const l = (a = s.invite) == null ? void 0 : a.status,
        c =
            l === "accepted"
                ? `${t}已接受邀请`
                : l === "rejected"
                  ? `${t}没有接受这次邀请`
                  : `邀请已发送，等待${t}回应`;
    return e.jsx("button", {
        className: "tv-voucher tv-press",
        style: { marginTop: 12, display: "block", width: "100%", textAlign: "left" },
        onClick: n,
        children: e.jsxs("div", {
            className: "vb",
            style: { padding: "10px 14px" },
            children: [
                e.jsx("span", { style: { color: "var(--tv-ink)" }, children: c }),
                e.jsx("span", { children: "前往聊天 ›" }),
            ],
        }),
    });
}
function aa({ trip: s, char: t, busy: n, onStop: l }) {
    var $, W, M, L;
    const { state: c, putTrip: a } = Z(),
        d = fe(),
        [r, x] = k.useState(1),
        [i, m] = k.useState(null),
        [v, j] = k.useState(!1),
        [o, h] = k.useState(""),
        p = ve(`travel-adjust-${s.id}`),
        I = (($ = s.plan.days.find((y) => y.day === r)) == null ? void 0 : $.items) || [],
        u = ie(t),
        C = (s.packing || []).filter((y) => y.done).length,
        b = (s.packing || []).filter((y) => y.by === "char").length,
        O = () => {
            const y = o.trim();
            (j(!1),
                p
                    .run(
                        async (f) => {
                            const N = await lt(c, t, s, y, f);
                            return (
                                a(s.id, (E) => ({
                                    ...bs(E, N),
                                    adjustQuote: String(N.quote || "").slice(0, 120),
                                })),
                                !0
                            );
                        },
                        {
                            label: "调整行程",
                            done: () => ({
                                title: `旅行 · ${u}调整了行程`,
                                text: "点这里查看",
                                app: "travel",
                                target: { tripId: s.id },
                            }),
                        },
                    )
                    .then((f) => {
                        f != null && f.error ? d(f.error.message || String(f.error), "error") : h("");
                    }));
        },
        S = (y) => {
            (a(s.id, (f) => ({
                plan: {
                    days: f.plan.days.map((E) => {
                        if (E.day !== (y.day || r))
                            return {
                                ...E,
                                items: E.items.filter((w) => w.id !== y.id || E.day === (y.day || r)),
                            };
                        const F = E.items.some((w) => w.id === y.id),
                            D = cn({ ...y, by: y.by || "me" }, "me");
                        return {
                            ...E,
                            items: dn(
                                F
                                    ? E.items.map((w) => (w.id === y.id ? { ...w, ...D, id: w.id } : w))
                                    : [...E.items, D],
                            ),
                        };
                    }),
                },
            })),
                m(null));
        },
        T = (y) => {
            (a(s.id, (f) => ({
                plan: {
                    days: f.plan.days.map((N) => ({ ...N, items: N.items.filter((E) => E.id !== y.id) })),
                },
            })),
                m(null));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("div", {
                className: "tv-days",
                children: s.plan.days.map((y) =>
                    e.jsxs(
                        "button",
                        {
                            className: `tv-chip${y.day === r ? " on" : ""}`,
                            onClick: () => x(y.day),
                            children: ["DAY ", y.day],
                        },
                        y.day,
                    ),
                ),
            }),
            s.adjustQuote && e.jsxs("div", { className: "tv-quote", children: ["「", s.adjustQuote, "」"] }),
            e.jsx("div", {
                className: "tv-card",
                style: { marginTop: 12, padding: "6px 16px 10px" },
                children: e.jsxs("div", {
                    className: "tv-tl",
                    children: [
                        I.map((y) =>
                            e.jsxs(
                                "button",
                                {
                                    className: `it${y.auto ? " auto" : ""}${y.status === "cancelled" ? " off" : ""}`,
                                    style: { display: "block", width: "100%", textAlign: "left" },
                                    onClick: () => m(y),
                                    children: [
                                        e.jsxs("div", {
                                            className: "tv-row",
                                            children: [
                                                e.jsx("b", { children: y.title }),
                                                e.jsx("span", { className: "tm tn", children: y.time }),
                                            ],
                                        }),
                                        y.note &&
                                            e.jsx("div", {
                                                className: "tv-s",
                                                style: { marginTop: 2 },
                                                children: y.note,
                                            }),
                                        y.quote &&
                                            e.jsxs("div", {
                                                className: "tv-quote",
                                                children: ["「", y.quote, "」"],
                                            }),
                                    ],
                                },
                                y.id,
                            ),
                        ),
                        e.jsx("button", {
                            className: "it",
                            style: { display: "block", width: "100%", textAlign: "left", opacity: 0.5 },
                            onClick: () => {
                                var y;
                                return m({
                                    new: !0,
                                    day: r,
                                    time: Ee(
                                        (he((y = I[I.length - 1]) == null ? void 0 : y.time) ?? 540) + 60,
                                    ),
                                    kind: "sight",
                                    title: "",
                                });
                            },
                            children: e.jsx("span", { style: { fontSize: 12.5 }, children: "＋ 新增一项" }),
                        }),
                    ],
                }),
            }),
            e.jsxs("div", {
                className: "tv-stats",
                children: [
                    e.jsxs("div", {
                        children: [
                            e.jsx("span", { className: "tv-k", children: "Budget" }),
                            e.jsxs("b", {
                                className: "tn",
                                children: [
                                    "¥ ",
                                    Number(((W = s.budget) == null ? void 0 : W.total) || 0).toLocaleString(),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        children: [
                            e.jsx("span", { className: "tv-k", children: "Packing" }),
                            e.jsxs("b", { className: "tn", children: [C, " / ", (s.packing || []).length] }),
                        ],
                    }),
                    e.jsxs("div", {
                        children: [
                            e.jsx("span", { className: "tv-k", children: "Payer" }),
                            e.jsx("b", {
                                children:
                                    { char: u, me: "我", split: "AA" }[
                                        (M = s.budget) == null ? void 0 : M.payer
                                    ] || "AA",
                            }),
                        ],
                    }),
                ],
            }),
            ((L = s.budget) == null ? void 0 : L.note) &&
                e.jsx("div", {
                    className: "tv-s",
                    style: { marginTop: 6, padding: "0 2px" },
                    children: s.budget.note,
                }),
            (s.packing || []).length > 0 &&
                e.jsxs("div", {
                    className: "tv-card",
                    style: { marginTop: 12, padding: "10px 16px" },
                    children: [
                        e.jsxs("div", {
                            className: "tv-row",
                            children: [
                                e.jsx("span", {
                                    style: { fontSize: 12.5, fontWeight: 600 },
                                    children: "行李清单",
                                }),
                                b > 0 &&
                                    e.jsxs("span", { className: "tv-k", children: [u, "补充 ", b, " 项"] }),
                            ],
                        }),
                        e.jsx("div", {
                            style: { marginTop: 6 },
                            children: s.packing.map((y) =>
                                e.jsxs(
                                    "button",
                                    {
                                        className: `tv-check${y.done ? " on" : ""}`,
                                        onClick: () =>
                                            a(s.id, (f) => ({
                                                packing: f.packing.map((N) =>
                                                    N.id === y.id ? { ...N, done: !N.done } : N,
                                                ),
                                            })),
                                        children: [
                                            e.jsx("i", { children: y.done ? "✓" : "" }),
                                            e.jsx("span", { children: y.text }),
                                            e.jsx("span", {
                                                className: "tv-s",
                                                children: [y.note, y.by === "char" ? `${u}补充` : ""]
                                                    .filter(Boolean)
                                                    .join(" · "),
                                            }),
                                        ],
                                    },
                                    y.id,
                                ),
                            ),
                        }),
                    ],
                }),
            e.jsxs("div", {
                style: { display: "flex", gap: 8, marginTop: 16 },
                children: [
                    e.jsx("button", {
                        className: "tv-btn ghost",
                        style: { flex: 1 },
                        onClick: p.busy ? p.stop : () => j(!0),
                        children: p.busy
                            ? e.jsxs(e.Fragment, {
                                  children: [e.jsx("span", { className: "tv-spin" }), "调整中 · 停止"],
                              })
                            : `请${u}调整`,
                    }),
                    n &&
                        e.jsxs("button", {
                            className: "tv-btn ghost",
                            style: { flex: 1 },
                            onClick: l,
                            children: [e.jsx("span", { className: "tv-spin" }), "停止"],
                        }),
                ],
            }),
            e.jsxs(me, {
                open: v,
                onClose: () => j(!1),
                children: [
                    e.jsxs("h3", { children: ["请", u, "调整"] }),
                    e.jsx("div", {
                        className: "tv-s",
                        style: { marginTop: 6, lineHeight: 1.7 },
                        children: "你在行程中做的修改会一并交给他参考，他只返回需要变动的部分。",
                    }),
                    e.jsx("textarea", {
                        className: "tv-area",
                        style: { marginTop: 12 },
                        value: o,
                        onChange: (y) => h(y.target.value),
                        placeholder: "希望调整的内容（可选）",
                    }),
                    e.jsx("button", {
                        className: "tv-btn",
                        style: { marginTop: 14 },
                        onClick: O,
                        children: "发送",
                    }),
                ],
            }),
            e.jsx(la, {
                item: i,
                days: s.plan.days.length,
                onClose: () => m(null),
                onSave: S,
                onRemove: T,
                onToggle: (y) => {
                    (a(
                        s.id,
                        (f) =>
                            Se(f, { op: y.status === "cancelled" ? "restore" : "cancel", target: y.id }, "me")
                                .trip,
                    ),
                        m(null));
                },
            }),
        ],
    });
}
function la({ item: s, days: t, onClose: n, onSave: l, onRemove: c, onToggle: a }) {
    const [d, r] = k.useState(s);
    if ((k.useEffect(() => r(s), [s]), !s || !d)) return null;
    const x = (i, m) => r((v) => ({ ...v, [i]: m }));
    return e.jsxs(me, {
        open: !0,
        onClose: n,
        children: [
            e.jsx("h3", { children: s.new ? "新增一项" : "编辑" }),
            e.jsxs("div", {
                className: "tv-card",
                style: { marginTop: 12, padding: "2px 16px", boxShadow: "0 0 0 .5px var(--tv-line)" },
                children: [
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "名称" }),
                            e.jsx("input", {
                                value: d.title || "",
                                onChange: (i) => x("title", i.target.value),
                                placeholder: "地点或安排",
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "时间" }),
                            e.jsx("input", {
                                type: "time",
                                value: d.time || "10:00",
                                onChange: (i) => x("time", i.target.value),
                            }),
                        ],
                    }),
                    s.new &&
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "日期" }),
                                e.jsx("select", {
                                    value: d.day,
                                    onChange: (i) => x("day", Number(i.target.value)),
                                    children: Array.from({ length: t }, (i, m) =>
                                        e.jsxs(
                                            "option",
                                            { value: m + 1, children: ["第 ", m + 1, " 天"] },
                                            m,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "类型" }),
                            e.jsx("select", {
                                value: d.kind || "sight",
                                onChange: (i) => x("kind", i.target.value),
                                children: ["sight", "meal", "shop", "free", "stay", "transit"].map((i) =>
                                    e.jsx("option", { value: i, children: Be[i] }, i),
                                ),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "tv-field",
                        children: [
                            e.jsx("span", { children: "备注" }),
                            e.jsx("input", {
                                value: d.note || "",
                                onChange: (i) => x("note", i.target.value),
                                placeholder: "可选",
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("button", {
                className: "tv-btn",
                style: { marginTop: 14 },
                disabled: !String(d.title || "").trim(),
                onClick: () => l({ ...d, place: d.place || d.title }),
                children: "保存",
            }),
            !s.new &&
                e.jsxs("div", {
                    style: { display: "flex", gap: 8, marginTop: 8 },
                    children: [
                        e.jsx("button", {
                            className: "tv-btn ghost",
                            style: { flex: 1 },
                            onClick: () => a(s),
                            children: s.status === "cancelled" ? "恢复" : "取消这一项",
                        }),
                        !s.auto &&
                            e.jsx("button", {
                                className: "tv-btn ghost",
                                style: { flex: 1 },
                                onClick: () => c(s),
                                children: "删除",
                            }),
                    ],
                }),
        ],
    });
}
function ia({ trip: s, name: t }) {
    const { putTrip: n } = Z(),
        l = nn(s);
    if (!(s.stays || []).length)
        return e.jsx("div", { className: "tv-empty", children: "本次行程没有住宿方案。" });
    const c = Math.max(1, s.days - 1);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className: "tv-row",
                style: { marginTop: 14 },
                children: [
                    e.jsxs("span", { className: "tv-k", children: ["Stay · ", c, " nights"] }),
                    e.jsxs("span", {
                        className: "tv-s tn",
                        children: [Y(s.startDate), " — ", Y(Ce(s.startDate, s.days - 1))],
                    }),
                ],
            }),
            e.jsx("div", {
                style: { marginTop: 10 },
                children: s.stays.map((a, d) => {
                    const r = a.id === s.stayId;
                    return e.jsxs(
                        "div",
                        {
                            role: "button",
                            className: `tv-opt tv-press${r ? " on" : ""}`,
                            style: r ? null : { display: "flex", gap: 12, alignItems: "center" },
                            onClick: () => n(s.id, (x) => vs({ ...x, stayId: a.id })),
                            children: [
                                r
                                    ? e.jsx(Ie, {
                                          cat: "stay",
                                          k: s.id,
                                          base: d,
                                          img: a.img,
                                          shift: a.shift,
                                          editable: !0,
                                          auto: ["ready", "ongoing", "done"].includes(s.status),
                                          desc: `${a.name}，${[a.room, a.desc].filter(Boolean).join("，")}，住宿房间`,
                                          style: { height: 150, borderRadius: 12, marginBottom: 10 },
                                          onChange: (x) =>
                                              n(s.id, (i) => ({
                                                  stays: i.stays.map((m) =>
                                                      m.id === a.id ? { ...m, ...x } : m,
                                                  ),
                                              })),
                                      })
                                    : e.jsx(Ie, {
                                          cat: "stay",
                                          k: s.id,
                                          base: d,
                                          img: a.img,
                                          shift: a.shift,
                                          desc: `${a.name}，${[a.room, a.desc].filter(Boolean).join("，")}，住宿房间`,
                                          style: { width: 56, height: 56, borderRadius: 10, flex: "none" },
                                          onChange: (x) =>
                                              n(s.id, (i) => ({
                                                  stays: i.stays.map((m) =>
                                                      m.id === a.id ? { ...m, ...x } : m,
                                                  ),
                                              })),
                                      }),
                                e.jsxs("span", {
                                    style: { display: "block", flex: 1, minWidth: 0 },
                                    children: [
                                        e.jsxs("span", {
                                            className: "tv-row",
                                            children: [
                                                e.jsx("b", { style: { fontSize: 14 }, children: a.name }),
                                                e.jsxs("span", {
                                                    className: "tn",
                                                    style: { fontSize: 13, fontWeight: 600 },
                                                    children: [
                                                        "¥",
                                                        a.price.toLocaleString(),
                                                        e.jsx("span", { className: "tv-s", children: "/晚" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        e.jsx("span", {
                                            className: "tv-s",
                                            style: { display: "block", marginTop: 3 },
                                            children: [a.room, a.breakfast, a.area]
                                                .filter(Boolean)
                                                .join(" · "),
                                        }),
                                        r &&
                                            a.quote &&
                                            e.jsxs("span", {
                                                className: "tv-quote",
                                                style: { display: "block" },
                                                children: ["「", a.quote, "」"],
                                            }),
                                    ],
                                }),
                            ],
                        },
                        a.id,
                    );
                }),
            }),
            l &&
                e.jsxs("div", {
                    className: "tv-card",
                    style: { marginTop: 12, padding: "2px 16px" },
                    children: [
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "房型" }),
                                e.jsx("b", { children: l.room || "—" }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "早餐" }),
                                e.jsx("span", { children: l.breakfast || "—" }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "合计" }),
                                e.jsxs("span", {
                                    className: "tn",
                                    children: ["¥", (l.price * c).toLocaleString(), " · ", c, " 晚"],
                                }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [e.jsx("span", { children: "付款" }), e.jsx(ra, { trip: s, name: t })],
                        }),
                    ],
                }),
            e.jsx("div", {
                className: "tv-s",
                style: { marginTop: 10, lineHeight: 1.7 },
                children: "入住、每晚回到住处与退房会自动成为行程中的时段。",
            }),
        ],
    });
}
function ra({ trip: s, name: t }) {
    var l;
    const { putTrip: n } = Z();
    return e.jsxs("select", {
        value: ((l = s.budget) == null ? void 0 : l.payer) || "split",
        onChange: (c) => n(s.id, (a) => ({ budget: { ...a.budget, payer: c.target.value } })),
        children: [
            e.jsxs("option", { value: "char", children: [t, "支付"] }),
            e.jsx("option", { value: "me", children: "我支付" }),
            e.jsx("option", { value: "split", children: "AA" }),
        ],
    });
}
const Hs = [
    ["train", "改坐火车"],
    ["drive", "改为自驾"],
    ["flight", "改坐飞机"],
    ["other", "换一班"],
    ["free", "自行填写"],
];
function ca({ trip: s, char: t, name: n, meName: l }) {
    var C, b, O, S, T, $, W;
    const { state: c, putTrip: a } = Z(),
        d = fe(),
        [r, x] = k.useState(!1),
        [i, m] = k.useState(""),
        v = ve(`travel-adjust-${s.id}`),
        j = ((C = s.transport) == null ? void 0 : C.mode) || "flight",
        o = ((O = (b = s.transport) == null ? void 0 : b.options) == null ? void 0 : O[j]) || [],
        h = et(s),
        p = an(s),
        I = (M) =>
            a(s.id, (L) => {
                var f, N, E;
                const y = ((f = L.transport.options) == null ? void 0 : f[M]) || [];
                return vs({
                    ...L,
                    transport: {
                        ...L.transport,
                        mode: M,
                        goId: ((N = y.find((F) => F.dir === "go")) == null ? void 0 : N.id) || null,
                        retId: ((E = y.find((F) => F.dir === "ret")) == null ? void 0 : E.id) || null,
                    },
                });
            }),
        u = (M) => {
            var y;
            const L =
                M === "free"
                    ? i.trim()
                    : M === "other"
                      ? "想换一班（去程或返程）"
                      : `我想${(y = Hs.find((f) => f[0] === M)) == null ? void 0 : y[1]}${i.trim() ? `：${i.trim()}` : ""}`;
            L &&
                (x(!1),
                v
                    .run(
                        async (f) => {
                            const N = await lt(c, t, s, `关于出行方式：${L}`, f);
                            return (
                                a(s.id, (E) => ({
                                    ...bs(E, N),
                                    goQuote: String(N.quote || "").slice(0, 120),
                                })),
                                !0
                            );
                        },
                        {
                            label: "出行方案",
                            done: () => ({
                                title: `旅行 · ${n}回复了出行修改`,
                                text: "点这里查看",
                                app: "travel",
                                target: { tripId: s.id },
                            }),
                        },
                    )
                    .then((f) => {
                        f != null && f.error ? d(f.error.message || String(f.error), "error") : m("");
                    }));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className: "tv-row",
                style: { marginTop: 14 },
                children: [
                    e.jsx("span", { className: "tv-k", children: "Getting there" }),
                    e.jsx("span", { className: "tv-s", children: "往返" }),
                ],
            }),
            e.jsx("div", {
                className: "tv-mode",
                children: ["flight", "train", "drive"].map((M) =>
                    e.jsx(
                        "button",
                        { className: j === M ? "on" : "", onClick: () => I(M), children: xs[M] },
                        M,
                    ),
                ),
            }),
            j !== "drive" &&
                !o.length &&
                e.jsxs("div", {
                    className: "tv-empty",
                    style: { padding: "22px 0" },
                    children: ["暂无", xs[j], "班次，可以向", n, "提出修改。"],
                }),
            j !== "drive" &&
                ["go", "ret"].map((M) => {
                    const L = o.filter((f) => f.dir === M);
                    if (!L.length) return null;
                    const y = M === "go" ? s.transport.goId : s.transport.retId;
                    return e.jsxs(
                        "div",
                        {
                            children: [
                                e.jsxs("div", {
                                    className: "tv-label",
                                    children: [
                                        e.jsx("b", { children: M === "go" ? "去程" : "返程" }),
                                        e.jsx("span", {
                                            className: "tv-k tn",
                                            children: Y(M === "go" ? s.startDate : xe(s, s.days)),
                                        }),
                                    ],
                                }),
                                L.map((f) =>
                                    e.jsx(
                                        "button",
                                        {
                                            className: `tv-opt tv-press${y === f.id ? " on" : ""}`,
                                            onClick: () =>
                                                a(s.id, (N) =>
                                                    vs({
                                                        ...N,
                                                        transport: {
                                                            ...N.transport,
                                                            [M === "go" ? "goId" : "retId"]: f.id,
                                                        },
                                                    }),
                                                ),
                                            children: e.jsxs("span", {
                                                className: "tv-row",
                                                children: [
                                                    e.jsxs("span", {
                                                        children: [
                                                            e.jsxs("span", {
                                                                className: "tn",
                                                                style: {
                                                                    fontSize: 17,
                                                                    fontWeight: 600,
                                                                    color:
                                                                        y === f.id
                                                                            ? "var(--tv-ink)"
                                                                            : "var(--tv-ink2)",
                                                                },
                                                                children: [f.dep, " → ", f.arr],
                                                            }),
                                                            e.jsx("span", {
                                                                className: "tv-s",
                                                                style: { display: "block" },
                                                                children: [
                                                                    f.code,
                                                                    f.from && f.to
                                                                        ? `${f.from} → ${f.to}`
                                                                        : "",
                                                                    f.dur,
                                                                ]
                                                                    .filter(Boolean)
                                                                    .join(" · "),
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "tn",
                                                        style: { fontSize: 13, fontWeight: 600 },
                                                        children: ["¥", cs(s, f).toLocaleString()],
                                                    }),
                                                ],
                                            }),
                                        },
                                        f.id,
                                    ),
                                ),
                            ],
                        },
                        M,
                    );
                }),
            j === "drive" &&
                e.jsxs("div", {
                    className: "tv-card",
                    style: { marginTop: 12, padding: "2px 16px" },
                    children: [
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "路线" }),
                                e.jsx("span", {
                                    children:
                                        ((S = s.transport) == null ? void 0 : S.road) ||
                                        `${((T = s.origin) == null ? void 0 : T.name) || "出发地"} → ${($ = s.dest) == null ? void 0 : $.name}`,
                                }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "全程" }),
                                e.jsxs("span", { className: "tn", children: [ks(s).km, " km（往返）"] }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "路书" }),
                                e.jsx("span", { className: "tv-s", children: "见「路书」" }),
                            ],
                        }),
                    ],
                }),
            (s.goQuote || ((W = s.transport) == null ? void 0 : W.quote)) &&
                e.jsxs("div", {
                    className: "tv-quote",
                    style: { marginTop: 12 },
                    children: ["「", s.goQuote || s.transport.quote, "」"],
                }),
            e.jsx("button", {
                className: "tv-voucher tv-press",
                style: { marginTop: 10, display: "block", width: "100%", textAlign: "left" },
                onClick: v.busy ? v.stop : () => x(!0),
                children: e.jsxs("div", {
                    className: "vb",
                    style: { padding: "11px 14px" },
                    children: [
                        e.jsx("span", {
                            style: { color: "var(--tv-ink)", fontWeight: 600 },
                            children: v.busy ? `${n}正在考虑 · 停止` : "提出修改",
                        }),
                        e.jsxs("span", { className: "tv-k", children: ["To ", n] }),
                    ],
                }),
            }),
            j !== "drive" &&
                o.length > 0 &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs("div", {
                            className: "tv-label",
                            children: [
                                e.jsx("b", { children: j === "train" ? "座席" : "舱位" }),
                                e.jsx("span", {
                                    className: "tv-k",
                                    children: j === "train" ? "Seat class" : "Cabin",
                                }),
                            ],
                        }),
                        e.jsx("div", {
                            className: "tv-seg2",
                            children: ln[j].map(([M, L]) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: Ze(s).key === M ? "on" : "",
                                        onClick: () =>
                                            a(s.id, (y) => ({
                                                transport: {
                                                    ...y.transport,
                                                    cabin: { ...(y.transport.cabin || {}), [j]: M },
                                                },
                                            })),
                                        children: L,
                                    },
                                    M,
                                ),
                            ),
                        }),
                    ],
                }),
            j !== "drive" &&
                e.jsxs("div", {
                    className: "tv-card",
                    style: { marginTop: 12, padding: "2px 16px" },
                    children: [
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "乘客" }),
                                e.jsxs("span", { children: [n, " · ", l] }),
                            ],
                        }),
                        h &&
                            e.jsxs("div", {
                                className: "tv-field",
                                children: [
                                    e.jsx("span", { children: "去程座位" }),
                                    e.jsxs("span", {
                                        className: "tn",
                                        children: [Ze(s).label, " · ", es(s, h).seats],
                                    }),
                                ],
                            }),
                        p &&
                            e.jsxs("div", {
                                className: "tv-field",
                                children: [
                                    e.jsx("span", { children: "返程座位" }),
                                    e.jsxs("span", {
                                        className: "tn",
                                        children: [Ze(s).label, " · ", es(s, p).seats],
                                    }),
                                ],
                            }),
                        j === "flight" &&
                            e.jsxs("div", {
                                className: "tv-field",
                                children: [
                                    e.jsx("span", { children: "托运行李" }),
                                    e.jsxs("span", {
                                        className: "tn",
                                        children: ["每人 ", es(s, h || p || {}).bag],
                                    }),
                                ],
                            }),
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "返程" }),
                                e.jsx("span", {
                                    className: "tn",
                                    children: p ? `${Y(xe(s, s.days))} · ${p.dep}` : "—",
                                }),
                            ],
                        }),
                        h &&
                            p &&
                            e.jsxs("div", {
                                className: "tv-field",
                                children: [
                                    e.jsx("span", { children: "票价" }),
                                    e.jsxs("span", {
                                        className: "tn",
                                        children: [
                                            "¥",
                                            ((cs(s, h) + cs(s, p)) * 2).toLocaleString(),
                                            " · 两人往返",
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            e.jsxs(me, {
                open: r,
                onClose: () => x(!1),
                children: [
                    e.jsxs("h3", { children: ["向", n, "提出修改"] }),
                    e.jsx("div", {
                        className: "tv-s",
                        style: { marginTop: 6, lineHeight: 1.7 },
                        children: "他会依据你的提议给出新的方案，也可能有自己的考虑。",
                    }),
                    e.jsx("textarea", {
                        className: "tv-area",
                        style: { marginTop: 12, minHeight: 64 },
                        value: i,
                        onChange: (M) => m(M.target.value),
                        placeholder: "补充说明（可选）",
                    }),
                    e.jsx("div", {
                        className: "tv-grid3",
                        style: { marginTop: 12 },
                        children: Hs.filter(([M]) => M !== j).map(([M, L]) =>
                            e.jsx(
                                "button",
                                { onClick: () => u(M), disabled: M === "free" && !i.trim(), children: L },
                                M,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
function da({ trip: s, name: t, meName: n }) {
    var r, x;
    const { putTrip: l } = Z(),
        c = k.useMemo(() => ks(s), [s.plan, s.origin, s.transport]),
        a = is(s),
        d =
            s.status === "ongoing" || s.status === "done"
                ? c.legs.filter((i) => i.day < a.day || a.after).length
                : 0;
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className: "tv-row",
                style: { marginTop: 14 },
                children: [
                    e.jsxs("span", {
                        className: "tv-k",
                        children: [
                            "Road book · ",
                            ((r = s.dest) == null ? void 0 : r.en) ||
                                ((x = s.dest) == null ? void 0 : x.name),
                        ],
                    }),
                    e.jsx("span", { className: "tv-chip", children: "自驾" }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-card",
                style: { marginTop: 10, padding: 12 },
                children: [
                    e.jsx(Nn, { rb: c, doneLegs: d }),
                    e.jsxs("div", {
                        className: "tv-row",
                        style: { fontSize: 11.5, marginTop: 8 },
                        children: [
                            e.jsxs("span", {
                                className: "tn",
                                children: [e.jsxs("b", { children: [c.km, " km"] }), " · 全程"],
                            }),
                            e.jsxs("span", { className: "tv-s tn", children: ["Day 1 → Day ", s.days] }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "tv-card",
                style: { marginTop: 10, padding: "2px 14px" },
                children: e.jsx(bn, { rb: c, charName: t, meName: n }),
            }),
            e.jsx("div", { className: "tv-label", children: e.jsx("b", { children: "驾驶安排" }) }),
            e.jsx("div", {
                className: "tv-card",
                style: { padding: "2px 16px" },
                children: Array.from({ length: s.days }, (i, m) => String(m + 1)).map((i) =>
                    e.jsxs(
                        "div",
                        {
                            className: "tv-field",
                            children: [
                                e.jsxs("span", { children: ["第 ", i, " 天"] }),
                                e.jsx("span", {
                                    className: "tv-seg2",
                                    style: { width: 150 },
                                    children: [
                                        ["char", t.slice(0, 4)],
                                        ["me", n.slice(0, 4)],
                                    ].map(([m, v]) => {
                                        var j, o;
                                        return e.jsx(
                                            "button",
                                            {
                                                className:
                                                    (((o = (j = s.transport) == null ? void 0 : j.drivers) ==
                                                    null
                                                        ? void 0
                                                        : o[i]) || "char") === m
                                                        ? "on"
                                                        : "",
                                                onClick: () =>
                                                    l(s.id, (h) => ({
                                                        transport: {
                                                            ...h.transport,
                                                            drivers: {
                                                                ...(h.transport.drivers || {}),
                                                                [i]: m,
                                                            },
                                                        },
                                                    })),
                                                children: v,
                                            },
                                            m,
                                        );
                                    }),
                                }),
                            ],
                        },
                        i,
                    ),
                ),
            }),
            e.jsx("div", {
                className: "tv-s",
                style: { marginTop: 10, lineHeight: 1.7 },
                children:
                    "路书由行程站点生成：修改行程、在现场调整计划后，路线与里程同步重算。实线为已完成的路段，虚线为未完成的路段。",
            }),
        ],
    });
}
function oa({ trip: s, name: t, meName: n }) {
    var d, r;
    const [l, c] = k.useState(null),
        a = rn(s, n, t);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("div", {
                className: "tv-row",
                style: { marginTop: 14 },
                children: [
                    e.jsxs("span", {
                        className: "tv-k",
                        children: [
                            "Wallet · ",
                            ((d = s.dest) == null ? void 0 : d.en) ||
                                ((r = s.dest) == null ? void 0 : r.name),
                        ],
                    }),
                    e.jsxs("span", { className: "tv-s", children: [a.length, " 张"] }),
                ],
            }),
            e.jsxs("div", {
                style: { marginTop: 10 },
                children: [
                    a.map((x) => e.jsx(kn, { v: x, onClick: () => (x.leg ? c(x) : null) }, x.id)),
                    !a.length &&
                        e.jsx("div", {
                            className: "tv-empty",
                            children: "确认住宿与出行后，凭证将存入这里。",
                        }),
                ],
            }),
            s.status === "planning" || s.status === "invited" || s.status === "draft"
                ? e.jsx("div", { className: "tv-s", style: { marginTop: 10 }, children: "出票后凭证生效。" })
                : null,
            l &&
                e.jsx(nt, {
                    children: e.jsx(ma, { v: l, trip: s, name: t, meName: n, onClose: () => c(null) }),
                }),
        ],
    });
}
function ma({ v: s, trip: t, name: n, meName: l, onClose: c }) {
    var m;
    const a = s.leg,
        d = Ze(t),
        r = es(t, a),
        x = ((m = t.transport) == null ? void 0 : m.mode) === "train",
        i = $e(t);
    return e.jsx("div", {
        className: "tv-live tv-dark",
        style: { zIndex: 40 },
        children: e.jsxs("div", {
            className: "tv-livebody",
            style: { paddingTop: "calc(var(--sat, 0px) + 16px)" },
            children: [
                e.jsxs("div", {
                    className: "tv-row",
                    children: [
                        e.jsxs("span", { className: "tv-k", children: ["Boarding · ", a.code] }),
                        e.jsx("button", {
                            className: "tv-k",
                            onClick: c,
                            style: { color: "#f2f2f0" },
                            children: "关闭",
                        }),
                    ],
                }),
                e.jsx("div", {
                    className: "tv-h",
                    style: { color: "#fff" },
                    children: s.ret
                        ? "Return trip."
                        : i > 0 && t.timeMode === "real"
                          ? e.jsxs(e.Fragment, {
                                children: [
                                    "Board in ",
                                    e.jsx("span", { className: "tn", children: i }),
                                    " days.",
                                ],
                            })
                          : "Board today.",
                }),
                e.jsxs("div", { className: "tv-s", children: [Y(s.date), " · ", a.from, " → ", a.to] }),
                e.jsxs("div", {
                    className: "tv-pass",
                    children: [
                        e.jsxs("div", {
                            className: "tv-row",
                            children: [
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("div", { className: "tv-k", children: "From" }),
                                        e.jsx("div", {
                                            className: "code tn",
                                            children: a.fromCode || a.from.slice(0, 3),
                                        }),
                                        e.jsx("div", { className: "tv-s tn", children: a.dep }),
                                    ],
                                }),
                                e.jsx("div", {
                                    style: {
                                        flex: 1,
                                        margin: "0 12px",
                                        borderTop: "1px dashed rgba(0,0,0,.3)",
                                    },
                                }),
                                e.jsxs("div", {
                                    style: { textAlign: "right" },
                                    children: [
                                        e.jsx("div", { className: "tv-k", children: "To" }),
                                        e.jsx("div", {
                                            className: "code tn",
                                            children: a.toCode || a.to.slice(0, 3),
                                        }),
                                        e.jsx("div", { className: "tv-s tn", children: a.arr }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx("div", { className: "tv-line", style: { margin: "16px 0" } }),
                        e.jsxs("div", {
                            className: "tv-row",
                            children: [
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("div", { className: "tv-k", children: "Passengers" }),
                                        e.jsxs("div", {
                                            style: { fontSize: 13, fontWeight: 600, marginTop: 3 },
                                            children: [n, " · ", l],
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    style: { textAlign: "right" },
                                    children: [
                                        e.jsx("div", { className: "tv-k", children: "Class" }),
                                        e.jsx("div", {
                                            style: { fontSize: 13, fontWeight: 600, marginTop: 3 },
                                            children: d.label,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "tv-pass-grid",
                            children: [
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("div", { className: "tv-k", children: "Seats" }),
                                        e.jsx("b", { className: "tn", children: r.seats }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("div", { className: "tv-k", children: "Gate" }),
                                        e.jsx("b", { className: "tn", children: r.gate }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("div", {
                                            className: "tv-k",
                                            children: x ? "Check-in" : "Boarding",
                                        }),
                                        e.jsx("b", { className: "tn", children: r.board }),
                                    ],
                                }),
                                r.bag
                                    ? e.jsxs("div", {
                                          children: [
                                              e.jsx("div", { className: "tv-k", children: "Baggage" }),
                                              e.jsx("b", { className: "tn", children: r.bag }),
                                          ],
                                      })
                                    : e.jsxs("div", {
                                          children: [
                                              e.jsx("div", { className: "tv-k", children: "Train" }),
                                              e.jsx("b", { className: "tn", children: a.code }),
                                          ],
                                      }),
                            ],
                        }),
                        e.jsxs("div", { className: "cut", children: [e.jsx("i", {}), e.jsx("i", {})] }),
                        e.jsxs("div", {
                            className: "tv-row",
                            style: { alignItems: "flex-start" },
                            children: [
                                e.jsx("svg", {
                                    width: "78",
                                    height: "78",
                                    viewBox: "0 0 7 7",
                                    shapeRendering: "crispEdges",
                                    children: e.jsxs("g", {
                                        fill: "#141414",
                                        children: [
                                            e.jsx("rect", { x: "0", y: "0", width: "3", height: "3" }),
                                            e.jsx("rect", { x: "4", y: "0", width: "3", height: "3" }),
                                            e.jsx("rect", { x: "0", y: "4", width: "3", height: "3" }),
                                            e.jsx("rect", {
                                                x: "1",
                                                y: "1",
                                                width: "1",
                                                height: "1",
                                                fill: "#f4f4f2",
                                            }),
                                            e.jsx("rect", {
                                                x: "5",
                                                y: "1",
                                                width: "1",
                                                height: "1",
                                                fill: "#f4f4f2",
                                            }),
                                            e.jsx("rect", {
                                                x: "1",
                                                y: "5",
                                                width: "1",
                                                height: "1",
                                                fill: "#f4f4f2",
                                            }),
                                            e.jsx("rect", { x: "4", y: "4", width: "1", height: "1" }),
                                            e.jsx("rect", { x: "6", y: "5", width: "1", height: "1" }),
                                            e.jsx("rect", { x: "5", y: "6", width: "1", height: "1" }),
                                            e.jsx("rect", { x: "3", y: "3", width: "1", height: "1" }),
                                        ],
                                    }),
                                }),
                                t.voucherNote &&
                                    e.jsxs("div", {
                                        style: { textAlign: "right" },
                                        children: [
                                            e.jsx("div", { className: "tv-k", children: "Note" }),
                                            e.jsxs("div", {
                                                style: {
                                                    fontSize: 12,
                                                    lineHeight: 1.6,
                                                    marginTop: 4,
                                                    maxWidth: 170,
                                                },
                                                children: ["「", t.voucherNote, "」"],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                e.jsx("div", {
                    className: "tv-row",
                    style: { marginTop: 16 },
                    children: e.jsxs("div", {
                        children: [
                            e.jsx("div", { className: "tv-k", children: "Packing" }),
                            e.jsxs("div", {
                                className: "tn",
                                style: { fontSize: 14, fontWeight: 600, color: "#fff" },
                                children: [
                                    (t.packing || []).filter((v) => v.done).length,
                                    " / ",
                                    (t.packing || []).length,
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function ha({ trip: s, char: t, onScene: n, onJournal: l, onDepart: c, onEnd: a }) {
    const { putTrip: d } = Z(),
        r = is(s),
        [x, i] = k.useState(Math.min(s.days, r.day)),
        [m, v] = k.useState(!1),
        j = Qs(s, x),
        o = ie(t),
        h = s.status === "ready",
        p = x === s.days,
        I = (s.log || [])
            .filter((u) => !u.undone)
            .slice(-3)
            .reverse();
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("div", {
                className: "tv-days",
                children: s.plan.days.map((u) =>
                    e.jsxs(
                        "button",
                        {
                            className: `tv-chip${u.day === x ? " on" : ""}`,
                            onClick: () => i(u.day),
                            children: ["DAY ", u.day],
                        },
                        u.day,
                    ),
                ),
            }),
            e.jsxs("div", {
                className: "tv-row",
                style: { marginTop: 12 },
                children: [
                    e.jsxs("span", {
                        className: "tv-k tn",
                        children: [
                            "Day ",
                            x,
                            " · ",
                            s.timeMode === "real" ? Y(xe(s, x)) : "virtual",
                            p ? " · Last day" : "",
                        ],
                    }),
                    !h &&
                        x === r.day &&
                        !r.after &&
                        e.jsx("span", { className: "tv-chip", children: "● 进行中" }),
                ],
            }),
            h &&
                e.jsxs("div", {
                    className: "tv-card",
                    style: { marginTop: 10, padding: "14px 16px" },
                    children: [
                        e.jsxs("div", {
                            className: "tv-row",
                            children: [
                                e.jsx("span", {
                                    style: { fontSize: 13, fontWeight: 600 },
                                    children:
                                        s.timeMode === "real"
                                            ? `距离出发还有 ${Math.max(0, $e(s))} 天`
                                            : "准备就绪",
                                }),
                                s.timeMode === "virtual" &&
                                    e.jsx("button", {
                                        className: "tv-chip on",
                                        onClick: c,
                                        children: "出发",
                                    }),
                            ],
                        }),
                        e.jsx("div", {
                            className: "tv-s",
                            style: { marginTop: 4, lineHeight: 1.7 },
                            children: "出发前也可以进入任意时段的现场。",
                        }),
                    ],
                }),
            e.jsxs("div", {
                className: "tv-card",
                style: { marginTop: 10, padding: "2px 12px" },
                children: [
                    e.jsx("button", {
                        className: "tv-gap",
                        onClick: () => n({ day: x, gapAfter: null }),
                        children: "此刻 · 自由时间",
                    }),
                    j.map(({ item: u, state: C }, b) => {
                        var O;
                        return e.jsxs(
                            De.Fragment,
                            {
                                children: [
                                    e.jsxs("button", {
                                        className: `tv-seg ${C}`,
                                        onClick: () => n({ day: x, itemId: u.id }),
                                        children: [
                                            e.jsxs("span", {
                                                className: "tm tn",
                                                children: [
                                                    u.time,
                                                    C === "now" &&
                                                        e.jsx("i", { className: "nowk", children: "NOW" }),
                                                ],
                                            }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("div", { className: "ti", children: u.title }),
                                                    e.jsxs("div", {
                                                        className: "ty",
                                                        children: [
                                                            Be[u.kind],
                                                            u.voucherId ? " · 已预约" : "",
                                                            (
                                                                ((O = s.scenes) == null
                                                                    ? void 0
                                                                    : O[`${x}:${u.id}`]) || []
                                                            ).length
                                                                ? ` · ${s.scenes[`${x}:${u.id}`].length} 段`
                                                                : "",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            e.jsx("span", {
                                                className: "go",
                                                children:
                                                    C === "done"
                                                        ? "回看 ›"
                                                        : C === "now"
                                                          ? "进入现场"
                                                          : "进入 ›",
                                            }),
                                        ],
                                    }),
                                    b < j.length - 1 &&
                                        (he(j[b + 1].item.time) ?? 0) - (he(u.time) ?? 0) >= 90 &&
                                        e.jsxs("button", {
                                            className: "tv-gap",
                                            onClick: () => n({ day: x, gapAfter: u.id }),
                                            children: [Ee((he(u.time) ?? 0) + 60), " · 空档"],
                                        }),
                                ],
                            },
                            u.id,
                        );
                    }),
                ],
            }),
            I.length > 0 &&
                e.jsx("div", {
                    className: "tv-card",
                    style: { marginTop: 10, padding: "4px 14px" },
                    children: I.map((u) =>
                        e.jsxs(
                            "div",
                            {
                                className: "tv-change",
                                children: [
                                    e.jsxs("span", {
                                        children: [
                                            e.jsx("b", {
                                                children:
                                                    u.by === "char" ? o : u.by === "scene" ? "实际" : "我",
                                            }),
                                            u.desc,
                                        ],
                                    }),
                                    e.jsx("button", {
                                        className: "tv-s",
                                        onClick: () => d(s.id, (C) => Zs(C, u.id)),
                                        children: "撤销",
                                    }),
                                ],
                            },
                            u.id,
                        ),
                    ),
                }),
            e.jsxs("div", {
                style: { display: "flex", gap: 8, marginTop: 12 },
                children: [
                    e.jsxs("button", {
                        className: "tv-card tv-press",
                        style: { flex: 1, padding: "11px 0", textAlign: "center" },
                        onClick: () => v(!0),
                        children: [
                            e.jsx("div", {
                                style: { fontSize: 12.5, fontWeight: 600 },
                                children: "修改计划",
                            }),
                            e.jsx("div", { className: "tv-k", style: { marginTop: 3 }, children: "Edit" }),
                        ],
                    }),
                    e.jsxs("button", {
                        className: "tv-card tv-press",
                        style: { flex: 1, padding: "11px 0", textAlign: "center" },
                        onClick: () => n({ day: x, album: !0 }),
                        children: [
                            e.jsx("div", {
                                style: { fontSize: 12.5, fontWeight: 600 },
                                children: "本次相册",
                            }),
                            e.jsxs("div", {
                                className: "tv-k tn",
                                style: { marginTop: 3 },
                                children: [(s.photos || []).length, " Photos"],
                            }),
                        ],
                    }),
                    s.status === "ongoing" &&
                        p &&
                        e.jsxs("button", {
                            className: "tv-card tv-press",
                            style: { flex: 1, padding: "11px 0", textAlign: "center" },
                            onClick: a,
                            children: [
                                e.jsx("div", {
                                    style: { fontSize: 12.5, fontWeight: 600 },
                                    children: "到家",
                                }),
                                e.jsx("div", {
                                    className: "tv-k",
                                    style: { marginTop: 3 },
                                    children: "Journal",
                                }),
                            ],
                        }),
                ],
            }),
            s.status === "done" &&
                e.jsx("button", {
                    className: "tv-btn",
                    style: { marginTop: 16 },
                    onClick: l,
                    children: "查看手账",
                }),
            e.jsx(rt, { open: m, trip: s, char: t, day: x, onClose: () => v(!1) }),
        ],
    });
}
function xa(s) {
    const t = String(s || "").replace("#", ""),
        n =
            t.length === 3
                ? t
                      .split("")
                      .map((d) => d + d)
                      .join("")
                : t,
        [l, c, a] = [0, 2, 4].map((d) => parseInt(n.slice(d, d + 2), 16) || 0);
    return (l * 299 + c * 587 + a * 114) / 1e3 < 110;
}
const as = [
        {
            id: "minimal",
            name: "极简",
            sub: "米白 · 细线",
            layout: "minimal",
            bg: "#f7f7f5",
            paper: "#ffffff",
            ink: "#141414",
            ink2: "#5c5c5a",
            accent: "#141414",
            font: "sans",
            titleFont: "sans",
            decor: "rule",
            radius: 16,
            tilt: -1.2,
            grain: 0,
            photoFilter: "none",
        },
        {
            id: "film",
            name: "胶片",
            sub: "暗房 · 底片条",
            layout: "film",
            bg: "#151515",
            paper: "#0d0d0d",
            ink: "#f2f2f0",
            ink2: "#a4a4a0",
            accent: "#f2f2f0",
            font: "sans",
            titleFont: "sans",
            decor: "perforation",
            radius: 3,
            tilt: 0,
            grain: 0,
            photoFilter: "film",
        },
        {
            id: "magazine",
            name: "杂志",
            sub: "衬线 · 编辑排版",
            layout: "magazine",
            bg: "#ffffff",
            paper: "#ffffff",
            ink: "#141414",
            ink2: "#5c5c5a",
            accent: "#141414",
            font: "serif",
            titleFont: "serif",
            decor: "rule",
            radius: 0,
            tilt: 0,
            grain: 0,
            photoFilter: "none",
        },
    ],
    va = {
        film: "saturate(.82) contrast(.94) brightness(1.03) sepia(.14)",
        none: "none",
        grayscale: "grayscale(1) brightness(.82)",
        warm: "sepia(.25) saturate(1.1)",
        cool: "saturate(.8) hue-rotate(-8deg) brightness(1.02)",
        fade: "contrast(.86) brightness(1.06) saturate(.8)",
    };
function ua({ trips: s, char: t, onOpen: n }) {
    const { tv: l } = Z();
    return e.jsxs("div", {
        className: "tv-scroll",
        children: [
            e.jsx("div", { className: "tv-k", children: "Journal" }),
            e.jsx("div", { className: "tv-h", children: "手账" }),
            e.jsx("div", {
                className: "tv-s",
                children: "旅行结束后整理为手账，可选择模板，或由 AI 按你填写的方向生成模板。",
            }),
            !s.length &&
                e.jsx("div", {
                    className: "tv-empty",
                    children: "还没有完成的旅行。到家后，手账会出现在这里。",
                }),
            e.jsx("div", {
                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 16 },
                children: s.map((c) => {
                    var d, r, x, i;
                    const a =
                        [...as, ...l.templates].find((m) => {
                            var v;
                            return m.id === ((v = c.journal) == null ? void 0 : v.tpl);
                        }) || as[0];
                    return e.jsxs(
                        "button",
                        {
                            className: "tv-tpl tv-press",
                            onClick: () => n(c),
                            children: [
                                e.jsxs("div", {
                                    className: "pv",
                                    style: { background: a.bg, color: a.ink, fontFamily: ge[a.titleFont] },
                                    children: [
                                        e.jsx("div", {
                                            style: { fontSize: 8, letterSpacing: ".24em", opacity: 0.6 },
                                            children:
                                                ((d = c.dest) == null ? void 0 : d.en) ||
                                                ((r = c.dest) == null ? void 0 : r.name),
                                        }),
                                        e.jsx("div", {
                                            style: {
                                                fontSize: 15,
                                                fontWeight: 600,
                                                marginTop: 6,
                                                lineHeight: 1.25,
                                            },
                                            children: c.title || ((x = c.dest) == null ? void 0 : x.name),
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "nm",
                                    children: [
                                        (i = c.dest) == null ? void 0 : i.name,
                                        e.jsxs("small", {
                                            className: "tn",
                                            children: [Y(c.startDate), " · ", c.days, " 天"],
                                        }),
                                    ],
                                }),
                            ],
                        },
                        c.id,
                    );
                }),
            }),
        ],
    });
}
function ja({ tripId: s, char: t, onBack: n }) {
    var M, L, y;
    const { state: l, tv: c, putTrip: a, update: d, patchChar: r } = Z(),
        x = fe(),
        i = c.trips.find((f) => f.id === s),
        [m, v] = k.useState(!1),
        [j, o] = k.useState(""),
        h = ve(`travel-journal-${s}`),
        p = ve("travel-template");
    if (!i) return null;
    const I = i.journal || {},
        u = [...as, ...c.templates],
        C = u.find((f) => f.id === I.tpl) || as[0],
        b = ie(t),
        O = oe(l.me) === "我" ? "我" : oe(l.me),
        S = (f) => {
            var D, w;
            if (!(f != null && f.diary) && !((f == null ? void 0 : f.memories) || []).length) return [];
            const N = Date.now(),
                E = Date.parse(Ce(i.startDate, i.days - 1)) || N,
                F = [
                    ...(f.diary
                        ? [
                              {
                                  id: ms("d_"),
                                  at: E,
                                  text: `[旅行 · ${(D = i.dest) == null ? void 0 : D.name}] ${String(f.diary).slice(0, 600)}`,
                                  weight: 4,
                                  keywords: [(w = i.dest) == null ? void 0 : w.name, "旅行"].filter(Boolean),
                                  sourceEventIds: [`travel:${i.id}`],
                                  createdAt: N,
                              },
                          ]
                        : []),
                    ...(f.memories || []).slice(0, 5).map((P) => {
                        var B;
                        return {
                            id: ms("d_"),
                            at: E,
                            text: String(P).slice(0, 160),
                            weight: 3,
                            keywords: [(B = i.dest) == null ? void 0 : B.name].filter(Boolean),
                            sourceEventIds: [`travel:${i.id}`],
                            createdAt: N,
                        };
                    }),
                ];
            return (
                r(t.id, (P) => ({ diary: [...(P.diary || []), ...F].slice(-400) })),
                Ts({ trip: i, char: t, putTrip: a, patchChar: r }),
                F.map((P) => P.id)
            );
        },
        T = () => {
            const f = new Set(I.memoryIds || []);
            (r(t.id, (N) => ({ diary: (N.diary || []).filter((E) => !f.has(E.id)) })),
                a(i.id, (N) => ({ journal: { ...N.journal, memoryIds: [], writeMemory: !1 } })),
                i.timeMode !== "real" && it({ trip: i, char: t, putTrip: a, patchChar: r }));
        },
        $ = (f) =>
            h
                .run(
                    async (N) => {
                        const E = await An(l, t, i, { writeMemory: f }, N),
                            F = f ? S(E) : [];
                        return (
                            a(i.id, (D) => {
                                var w, P;
                                return {
                                    journal: {
                                        ...(D.journal || {}),
                                        postcard: String(
                                            E.postcard ||
                                                ((w = D.journal) == null ? void 0 : w.postcard) ||
                                                "",
                                        ).slice(0, 300),
                                        diary: String(E.diary || "").slice(0, 800),
                                        memories: (E.memories || []).slice(0, 5),
                                        writeMemory: f,
                                        memoryIds: [
                                            ...(((P = D.journal) == null ? void 0 : P.memoryIds) || []),
                                            ...F,
                                        ],
                                        at: Date.now(),
                                    },
                                };
                            }),
                            !0
                        );
                    },
                    {
                        label: "旅行手账",
                        done: () => ({
                            title: "旅行 · 手账已整理",
                            text: "点这里查看",
                            app: "travel",
                            target: { tripId: i.id },
                        }),
                    },
                )
                .then((N) => {
                    N != null && N.error && x(N.error.message || String(N.error), "error");
                }),
        W = () =>
            p
                .run(
                    async (f) => {
                        const N = await Dn(l, j, f);
                        return (
                            d((E) => ({ templates: [...E.templates, N] })),
                            a(i.id, (E) => ({ journal: { ...(E.journal || {}), tpl: N.id } })),
                            o(""),
                            N
                        );
                    },
                    { label: "手账模板" },
                )
                .then((f) => {
                    f != null && f.error && x(f.error.message || String(f.error), "error");
                });
    return e.jsxs("div", {
        className: `tv-live tv-jv${xa(C.bg) ? " dark" : ""}`,
        style: { zIndex: 6, background: C.bg, "--jv-bg": C.bg },
        children: [
            e.jsxs("div", {
                className: "tv-livebar",
                children: [
                    e.jsx("button", {
                        className: "tv-press",
                        onClick: n,
                        "aria-label": "返回",
                        style: { display: "flex" },
                        children: e.jsx(Fe, { size: 18 }),
                    }),
                    e.jsxs("div", {
                        style: { flex: 1 },
                        children: [
                            e.jsx("div", {
                                className: "ttl",
                                children: i.title || ((M = i.dest) == null ? void 0 : M.name),
                            }),
                            e.jsxs("div", { className: "tv-s", children: ["旅行手账 · ", C.name] }),
                        ],
                    }),
                    e.jsx("button", { className: "tv-chip", onClick: () => v(!0), children: "模板" }),
                ],
            }),
            e.jsxs("div", {
                className: "tv-livebody",
                style: { padding: 0 },
                children: [
                    e.jsx(fa, { trip: i, tpl: C, name: b, meName: O, char: t }),
                    e.jsxs("div", {
                        style: { padding: "16px 18px calc(var(--sab, 0px) + 28px)" },
                        children: [
                            !I.postcard &&
                                e.jsx("button", {
                                    className: "tv-btn",
                                    onClick: h.busy ? h.stop : () => $(!!I.writeMemoryWanted),
                                    children: h.busy
                                        ? e.jsxs(e.Fragment, {
                                              children: [
                                                  e.jsx("span", { className: "tv-spin" }),
                                                  "整理中 · 停止",
                                              ],
                                          })
                                        : `整理手账 · ${b}写明信片`,
                                }),
                            e.jsx("div", {
                                className: "tv-card",
                                style: { marginTop: 12, padding: "12px 16px" },
                                children: e.jsxs("div", {
                                    className: "tv-row",
                                    children: [
                                        e.jsxs("div", {
                                            children: [
                                                e.jsx("div", {
                                                    style: { fontSize: 13, fontWeight: 600 },
                                                    children: "写入记忆",
                                                }),
                                                e.jsx("div", {
                                                    className: "tv-s",
                                                    style: { marginTop: 2 },
                                                    children:
                                                        (L = I.memoryIds) != null && L.length
                                                            ? `已写入 ${I.memoryIds.length} 条，${b}之后会记得`
                                                            : "这次旅行的记忆库按天接入主线，另整理一篇日记；关闭时仅作为一段独立的旅行保存在这里",
                                                }),
                                            ],
                                        }),
                                        e.jsx(Ae, {
                                            on: !!(
                                                ((y = I.memoryIds) != null && y.length) ||
                                                I.writeMemoryWanted
                                            ),
                                            onChange: (f) => {
                                                var N;
                                                if (!f) {
                                                    ((N = I.memoryIds) != null && N.length && T(),
                                                        a(i.id, (E) => ({
                                                            journal: {
                                                                ...(E.journal || {}),
                                                                writeMemoryWanted: !1,
                                                            },
                                                        })));
                                                    return;
                                                }
                                                (a(i.id, (E) => ({
                                                    journal: { ...(E.journal || {}), writeMemoryWanted: !0 },
                                                })),
                                                    I.postcard && $(!0));
                                            },
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs(me, {
                open: m,
                onClose: () => v(!1),
                children: [
                    e.jsxs("div", {
                        className: "tv-row",
                        children: [
                            e.jsx("h3", { children: "手账模板" }),
                            e.jsxs("span", { className: "tv-s", children: [u.length, " 套"] }),
                        ],
                    }),
                    e.jsx("div", {
                        className: "tv-tpls",
                        style: { marginTop: 12 },
                        children: u.map((f) =>
                            e.jsxs(
                                "button",
                                {
                                    className: `tv-tpl${f.id === C.id ? " on" : ""}`,
                                    onClick: () =>
                                        a(i.id, (N) => ({ journal: { ...(N.journal || {}), tpl: f.id } })),
                                    children: [
                                        e.jsx(pa, { t: f }),
                                        e.jsxs("div", {
                                            className: "nm",
                                            children: [
                                                f.name,
                                                e.jsx("small", {
                                                    children: f.sub || (f.ai ? "AI 生成" : ""),
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                f.id,
                            ),
                        ),
                    }),
                    e.jsxs("div", {
                        className: "tv-card",
                        style: {
                            marginTop: 12,
                            padding: "12px 14px",
                            boxShadow: "0 0 0 .5px var(--tv-line)",
                        },
                        children: [
                            e.jsx("div", { className: "tv-k", children: "AI 生成 · Direction" }),
                            e.jsx("textarea", {
                                className: "tv-area",
                                style: { marginTop: 8, minHeight: 64 },
                                value: j,
                                onChange: (f) => o(f.target.value),
                                placeholder: "想要的方向，例如材质、色调、版式与氛围",
                            }),
                            e.jsxs("div", {
                                className: "tv-row",
                                style: { marginTop: 8 },
                                children: [
                                    e.jsx("span", {
                                        className: "tv-s",
                                        children: "生成后保存为模板，可用于其他旅行",
                                    }),
                                    e.jsx("button", {
                                        className: "tv-chip on",
                                        disabled: !j.trim() && !p.busy,
                                        onClick: p.busy ? p.stop : W,
                                        children: p.busy ? "停止" : "生成",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function pa({ t: s }) {
    const t = ge[s.titleFont];
    return s.layout === "film"
        ? e.jsxs("div", {
              className: "pv",
              style: { background: s.bg },
              children: [
                  e.jsx("div", {
                      style: { display: "flex", gap: 3, marginTop: 6 },
                      children: [0, 1, 2, 3].map((n) =>
                          e.jsx(
                              "i",
                              {
                                  style: {
                                      flex: 1,
                                      height: 34,
                                      background: "#3a3a3a",
                                      borderRadius: 2,
                                      boxShadow: `0 0 0 2px ${s.bg}`,
                                  },
                              },
                              n,
                          ),
                      ),
                  }),
                  e.jsx("div", {
                      style: {
                          height: 4,
                          width: "60%",
                          background: s.ink,
                          borderRadius: 2,
                          marginTop: 10,
                          opacity: 0.9,
                      },
                  }),
              ],
          })
        : s.layout === "magazine"
          ? e.jsxs("div", {
                className: "pv",
                style: { background: s.bg, fontFamily: t },
                children: [
                    e.jsx("div", {
                        style: { fontSize: 15, lineHeight: 1, color: s.ink },
                        children: "Journal",
                    }),
                    e.jsx("div", { style: { height: 0.5, background: s.ink, margin: "6px 0" } }),
                    e.jsxs("div", {
                        style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 },
                        children: [
                            e.jsx("i", { style: { height: 34, background: "#d6d6d2" } }),
                            e.jsx("div", {
                                children: [1, 1, 0.7].map((n, l) =>
                                    e.jsx(
                                        "div",
                                        {
                                            style: {
                                                height: 3,
                                                width: `${n * 100}%`,
                                                background: s.ink2,
                                                opacity: 0.5,
                                                marginBottom: 3,
                                            },
                                        },
                                        l,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            })
          : s.layout === "collage"
            ? e.jsxs("div", {
                  className: "pv",
                  style: { background: s.bg },
                  children: [
                      e.jsx("i", {
                          style: {
                              position: "absolute",
                              left: 12,
                              top: 12,
                              width: 42,
                              height: 50,
                              background: s.paper,
                              boxShadow: "0 2px 6px rgba(0,0,0,.15)",
                              transform: "rotate(-6deg)",
                          },
                      }),
                      e.jsx("i", {
                          style: {
                              position: "absolute",
                              left: 44,
                              top: 22,
                              width: 46,
                              height: 54,
                              background: s.paper,
                              boxShadow: "0 2px 6px rgba(0,0,0,.15)",
                              transform: "rotate(5deg)",
                          },
                      }),
                      e.jsx("i", {
                          style: {
                              position: "absolute",
                              left: 58,
                              top: 16,
                              width: 22,
                              height: 8,
                              background: s.accent,
                              opacity: 0.5,
                              transform: "rotate(5deg)",
                          },
                      }),
                  ],
              })
            : e.jsxs("div", {
                  className: "pv",
                  style: { background: s.bg },
                  children: [
                      e.jsx("div", {
                          style: { height: 5, width: "46%", background: s.ink, borderRadius: 2 },
                      }),
                      e.jsxs("div", {
                          style: {
                              display: "grid",
                              gridTemplateColumns: "1.4fr 1fr",
                              gap: 3,
                              marginTop: 8,
                              height: 52,
                          },
                          children: [
                              e.jsx("i", {
                                  style: { background: "#cfcfcb", borderRadius: Math.min(4, s.radius) },
                              }),
                              e.jsx("i", {
                                  style: { background: "#dadad6", borderRadius: Math.min(4, s.radius) },
                              }),
                          ],
                      }),
                  ],
              });
}
function ga(s, t) {
    return k.useMemo(() => {
        var m, v, j, o;
        const n = (((m = s.plan) == null ? void 0 : m.days) || [])
                .flatMap((h) => h.items)
                .filter((h) => !h.auto && h.status !== "cancelled"),
            l = s.photos || [],
            c = ((v = s.transport) == null ? void 0 : v.mode) === "drive" ? ks(s).km : null,
            a = on(s),
            d = Object.values(s.scenes || {})
                .flat()
                .filter((h) => h.who === "char")
                .sort((h, p) => h.at - p.at),
            r =
                (((j = d[0]) == null ? void 0 : j.text) || "")
                    .split(/\n+/)
                    .find((h) => h.length > 30 && !/^[「“"]/.test(h)) || "",
            x =
                (((o = d[d.length - 1]) == null ? void 0 : o.text) || "")
                    .split(/\n+/)
                    .find((h) => h.length > 30 && !/^[「“"]/.test(h)) || "",
            i = s.souvenirs || [];
        return { stops: n, photos: l, km: c, excerpts: a, para: r, para2: x !== r ? x : "", gifts: i };
    }, [s, t]);
}
function fa({ trip: s, tpl: t, name: n, meName: l, char: c }) {
    var p, I, u, C, b, O, S, T, $, W, M, L, y, f, N, E, F;
    const a = ga(s, c),
        d = s.journal || {},
        r = {
            background: t.bg,
            color: t.ink,
            fontFamily: ge[t.font],
            padding: "18px 18px 26px",
            "--j-ink2": t.ink2,
            "--j-paper": t.paper,
            "--j-r": `${t.radius}px`,
            position: "relative",
        };
    let x = 0;
    const i = (D, w, P = {}) => {
            var te, re, be, ke, we, ue;
            const B = x++,
                V = { height: w, borderRadius: t.radius, filter: va[t.photoFilter] || "none", ...P };
            return D != null && D.ref
                ? e.jsx(tt, { src: D.ref, style: V }, D.id)
                : e.jsx(
                      Ie,
                      {
                          cat: "dest",
                          k: s.id,
                          place: `${((te = s.dest) == null ? void 0 : te.name) || ""} ${((re = s.dest) == null ? void 0 : re.en) || ""}`,
                          look:
                              ((be = s.dest) == null ? void 0 : be.look) ||
                              ns((ke = s.dest) == null ? void 0 : ke.name, s.title),
                          img: B === 0 ? ((we = s.cover) == null ? void 0 : we.img) : null,
                          shift: (((ue = s.cover) == null ? void 0 : ue.shift) || 0) + B,
                          style: V,
                      },
                      `g${B}`,
                  );
        },
        m = `${Y(s.startDate)} — ${Y(Ce(s.startDate, s.days - 1))}`,
        v = (D) =>
            e.jsx("div", {
                style: {
                    fontSize: 9,
                    letterSpacing: ".28em",
                    textTransform: "uppercase",
                    color: t.ink2,
                    fontFamily: ge.sans,
                },
                children: D,
            }),
        j =
            d.postcard &&
            e.jsxs("div", {
                style: {
                    marginTop: 16,
                    padding: 16,
                    background: t.paper,
                    borderRadius: t.radius,
                    transform: `rotate(${t.tilt}deg)`,
                    boxShadow:
                        t.layout === "film"
                            ? "none"
                            : "0 0 0 .5px rgba(0,0,0,.1), 0 8px 20px -14px rgba(0,0,0,.3)",
                    borderTop: t.layout === "film" ? `.5px solid ${t.ink2}` : "none",
                },
                children: [
                    e.jsxs("div", {
                        className: "tv-row",
                        children: [
                            v(`${t.layout === "film" ? "Last frame" : "Postcard"} · from ${n}`),
                            e.jsx("span", {
                                style: { color: t.ink },
                                children: e.jsx(ze, {
                                    en: (p = s.dest) == null ? void 0 : p.en,
                                    name: (I = s.dest) == null ? void 0 : I.name,
                                    date: s.startDate,
                                    size: 40,
                                }),
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        style: { fontSize: 13, lineHeight: 1.85, marginTop: 8, color: t.ink2 },
                        children: d.postcard,
                    }),
                ],
            }),
        o =
            a.gifts.length > 0 &&
            e.jsxs("div", {
                style: { marginTop: 16 },
                children: [
                    v("Souvenirs"),
                    a.gifts.map((D) =>
                        e.jsxs(
                            "div",
                            {
                                style: {
                                    padding: "10px 0",
                                    borderBottom: `.5px solid ${t.ink2}33`,
                                    fontSize: 12.5,
                                },
                                children: [
                                    e.jsxs("div", {
                                        className: "tv-row",
                                        children: [
                                            e.jsx("span", { children: D.name }),
                                            e.jsxs("span", {
                                                style: { color: t.ink2, fontSize: 11 },
                                                children: [
                                                    D.by === "char" ? `${n}买的` : "你买的",
                                                    D.for === "her"
                                                        ? " · 送给你"
                                                        : D.for === "char"
                                                          ? ` · 送给${n}`
                                                          : D.for === "both"
                                                            ? " · 一对"
                                                            : "",
                                                ],
                                            }),
                                        ],
                                    }),
                                    D.card &&
                                        e.jsxs("div", {
                                            style: {
                                                marginTop: 4,
                                                color: t.ink2,
                                                fontSize: 12,
                                                lineHeight: 1.7,
                                            },
                                            children: ["附卡：", D.card],
                                        }),
                                ],
                            },
                            D.id,
                        ),
                    ),
                ],
            }),
        h = (D) =>
            e.jsxs(
                "div",
                {
                    children: [
                        v(`${D.time} · ${D.where}`),
                        e.jsx("div", {
                            style: {
                                marginTop: 6,
                                fontSize: 13,
                                lineHeight: 1.6,
                                paddingLeft: 10,
                                boxShadow: `inset 1.5px 0 0 ${t.layout === "film" ? "#5a5a58" : "#c4c4c0"}`,
                                color: t.ink2,
                            },
                            children: D.me,
                        }),
                        e.jsx("div", {
                            style: {
                                marginTop: 4,
                                fontSize: 13,
                                lineHeight: 1.6,
                                paddingLeft: 10,
                                boxShadow: `inset 1.5px 0 0 ${t.ink}`,
                                color: t.ink,
                            },
                            children: D.him,
                        }),
                    ],
                },
                `${D.where}${D.time}`,
            );
    if (t.layout === "film") {
        const D = e.jsx("div", {
                style: { display: "flex", justifyContent: "space-between", padding: "0 4px" },
                children: Array.from({ length: 12 }, (P, B) =>
                    e.jsx("i", { style: { width: 6, height: 4, background: "#2c2c2c", borderRadius: 1 } }, B),
                ),
            }),
            w = [
                ...a.photos,
                ...a.stops
                    .filter((P) => !a.photos.some((B) => B.where === P.title))
                    .map((P) => ({ id: P.id, ref: null, where: P.title })),
            ]
                .concat([{ id: "f0" }, { id: "f1" }, { id: "f2" }])
                .slice(0, Math.max(3, Math.min(6, a.photos.length)));
        return e.jsxs("div", {
            style: r,
            children: [
                v(
                    `Roll 01 · ${((u = s.dest) == null ? void 0 : u.en) || ((C = s.dest) == null ? void 0 : C.name)} · ${String(Math.max(a.photos.length, 1)).padStart(2, "0")} EXP`,
                ),
                e.jsx("div", {
                    style: {
                        fontSize: 26,
                        fontWeight: 300,
                        letterSpacing: ".02em",
                        marginTop: 6,
                        fontFamily: ge[t.titleFont],
                    },
                    children: s.title || ((b = s.dest) == null ? void 0 : b.name),
                }),
                e.jsxs("div", {
                    style: { fontSize: 11.5, color: t.ink2 },
                    className: "tn",
                    children: [m, " · ", a.stops.length, " stops · ", a.photos.length, " photos"],
                }),
                e.jsxs("div", {
                    style: { marginTop: 14, background: t.paper, padding: "8px 6px", borderRadius: 4 },
                    children: [
                        D,
                        e.jsx("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(3,1fr)",
                                gap: 4,
                                margin: "6px 0",
                            },
                            children: w.slice(0, 6).map((P) => i(P, 84)),
                        }),
                        D,
                        e.jsx("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(3,1fr)",
                                gap: 4,
                                marginTop: 4,
                                fontSize: 8.5,
                                color: "#8a8a87",
                                letterSpacing: ".1em",
                            },
                            className: "tn",
                            children: w
                                .slice(0, 3)
                                .map((P, B) =>
                                    e.jsxs(
                                        "span",
                                        {
                                            children: [
                                                String(B + 1).padStart(2, "0"),
                                                " · ",
                                                (P.where || "").slice(0, 5),
                                            ],
                                        },
                                        B,
                                    ),
                                ),
                        }),
                    ],
                }),
                e.jsx("div", {
                    style: { marginTop: 18, display: "flex", flexDirection: "column", gap: 14 },
                    children: a.excerpts.map(h),
                }),
                j,
                o,
            ],
        });
    }
    if (t.layout === "magazine") {
        const D = a.excerpts[0];
        return e.jsxs("div", {
            style: { ...r, fontFamily: ge[t.font] },
            children: [
                e.jsxs("div", {
                    className: "tv-row",
                    children: [
                        v(
                            `Issue ${String(s.startDate).slice(5, 7)} · ${((O = s.dest) == null ? void 0 : O.country) || "Travel"}`,
                        ),
                        v(((S = s.dest) == null ? void 0 : S.en) || ""),
                    ],
                }),
                e.jsx("div", {
                    style: {
                        fontSize: 44,
                        lineHeight: 0.95,
                        marginTop: 12,
                        letterSpacing: "-.02em",
                        fontFamily: ge[t.titleFont],
                    },
                    children: (
                        ((T = s.dest) == null ? void 0 : T.en) ||
                        (($ = s.dest) == null ? void 0 : $.name) ||
                        ""
                    )
                        .toLowerCase()
                        .replace(/^./, (w) => w.toUpperCase()),
                }),
                e.jsxs("div", {
                    style: { fontSize: 13, marginTop: 8, color: t.ink2 },
                    children: [s.title || "", " —— ", (W = s.dest) == null ? void 0 : W.name, s.days, "日"],
                }),
                e.jsx("div", { style: { height: 0.5, background: t.ink, margin: "14px 0" } }),
                e.jsxs("div", {
                    style: { display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 12 },
                    children: [
                        i(a.photos[0], 168),
                        e.jsx("div", {
                            style: { fontSize: 12, lineHeight: 1.8, color: t.ink2 },
                            children: a.para
                                ? e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx("span", {
                                              style: {
                                                  float: "left",
                                                  fontSize: 34,
                                                  lineHeight: 0.9,
                                                  margin: "2px 5px 0 0",
                                                  color: t.ink,
                                              },
                                              children: a.para[0],
                                          }),
                                          a.para.slice(1, 120),
                                      ],
                                  })
                                : `${((M = s.dest) == null ? void 0 : M.name) || ""}，${s.days} 天。`,
                        }),
                    ],
                }),
                D &&
                    e.jsxs("div", {
                        style: {
                            margin: "16px 0",
                            padding: "12px 0",
                            borderTop: `.5px solid ${t.ink}33`,
                            borderBottom: `.5px solid ${t.ink}33`,
                            textAlign: "center",
                        },
                        children: [
                            e.jsxs("div", {
                                style: { fontSize: 16, lineHeight: 1.5 },
                                children: ["“", D.him, "”"],
                            }),
                            e.jsx("div", {
                                style: { marginTop: 5 },
                                children: v(`— ${n} · ${D.where} · ${D.time}`),
                            }),
                        ],
                    }),
                e.jsxs("div", {
                    style: { display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 12 },
                    children: [
                        e.jsx("div", {
                            style: { fontSize: 12, lineHeight: 1.8, color: t.ink2 },
                            children: (a.para2 || d.postcard || "").slice(0, 110),
                        }),
                        i(a.photos[1], 124),
                    ],
                }),
                j,
                o,
                e.jsxs("div", {
                    className: "tv-row",
                    style: { marginTop: 16 },
                    children: [v("P. 01"), v("LiToT Travel")],
                }),
            ],
        });
    }
    return t.layout === "collage"
        ? e.jsxs("div", {
              style: r,
              children: [
                  v(
                      `Journal · ${((L = s.dest) == null ? void 0 : L.en) || ((y = s.dest) == null ? void 0 : y.name)} · ${m}`,
                  ),
                  e.jsx("div", {
                      style: { fontSize: 26, fontWeight: 600, marginTop: 6, fontFamily: ge[t.titleFont] },
                      children: s.title || ((f = s.dest) == null ? void 0 : f.name),
                  }),
                  e.jsx("div", {
                      style: { position: "relative", height: 250, marginTop: 14 },
                      children: [0, 1, 2].map((D) =>
                          e.jsxs(
                              "div",
                              {
                                  style: {
                                      position: "absolute",
                                      left: ["2%", "38%", "16%"][D],
                                      top: [0, 20, 120][D],
                                      width: "52%",
                                      padding: 8,
                                      paddingBottom: 22,
                                      background: t.paper,
                                      boxShadow: "0 4px 14px -6px rgba(0,0,0,.3)",
                                      transform: `rotate(${[-4, 5, -1][D] + t.tilt}deg)`,
                                  },
                                  children: [
                                      i(a.photos[D], 100, { borderRadius: Math.min(t.radius, 4) }),
                                      t.decor === "tape" &&
                                          e.jsx("i", {
                                              style: {
                                                  position: "absolute",
                                                  top: -7,
                                                  left: "35%",
                                                  width: 50,
                                                  height: 14,
                                                  background: t.accent,
                                                  opacity: 0.45,
                                              },
                                          }),
                                  ],
                              },
                              D,
                          ),
                      ),
                  }),
                  e.jsx("div", {
                      style: { marginTop: 6, display: "flex", flexDirection: "column", gap: 14 },
                      children: a.excerpts.map(h),
                  }),
                  j,
                  o,
              ],
          })
        : e.jsxs("div", {
              style: r,
              children: [
                  v(
                      `Journal · ${((N = s.dest) == null ? void 0 : N.en) || ((E = s.dest) == null ? void 0 : E.name)} · ${m}`,
                  ),
                  e.jsx("div", {
                      style: { fontSize: 26, fontWeight: 600, marginTop: 6, fontFamily: ge[t.titleFont] },
                      children: s.title || ((F = s.dest) == null ? void 0 : F.name),
                  }),
                  e.jsx("div", {
                      className: "tv-row",
                      style: { marginTop: 12 },
                      children: [
                          [s.days, "Days"],
                          [a.stops.length, "Stops"],
                          [a.photos.length, "Photos"],
                          ...(a.km != null ? [[a.km, "Km"]] : []),
                      ].map(([D, w]) =>
                          e.jsxs(
                              "div",
                              {
                                  children: [
                                      e.jsx("div", {
                                          className: "tn",
                                          style: { fontSize: 18, fontWeight: 600 },
                                          children: D,
                                      }),
                                      v(w),
                                  ],
                              },
                              w,
                          ),
                      ),
                  }),
                  e.jsxs("div", {
                      style: {
                          display: "grid",
                          gridTemplateColumns: "1.4fr 1fr",
                          gridTemplateRows: "70px 70px",
                          gap: 6,
                          marginTop: 14,
                      },
                      children: [
                          i(a.photos[0], "100%", { gridRow: "span 2" }),
                          i(a.photos[1], "100%"),
                          i(a.photos[2], "100%"),
                      ],
                  }),
                  j,
                  a.excerpts.length > 0 &&
                      e.jsx("div", {
                          style: {
                              marginTop: 16,
                              padding: "4px 14px",
                              background: t.paper,
                              borderRadius: t.radius,
                              boxShadow: "0 0 0 .5px rgba(0,0,0,.1)",
                          },
                          children: a.excerpts.map((D) =>
                              e.jsxs(
                                  "div",
                                  {
                                      className: "tv-dlg",
                                      children: [
                                          e.jsxs("div", {
                                              className: "where",
                                              children: [
                                                  D.where,
                                                  e.jsxs("small", {
                                                      className: "tn",
                                                      children: ["DAY ", D.day, " · ", D.time],
                                                  }),
                                              ],
                                          }),
                                          e.jsxs("div", {
                                              children: [
                                                  e.jsxs("div", {
                                                      className: "tv-say mine",
                                                      children: [
                                                          e.jsx("i", { children: l.slice(0, 1) }),
                                                          D.me,
                                                      ],
                                                  }),
                                                  e.jsxs("div", {
                                                      className: "tv-say his",
                                                      children: [
                                                          e.jsx("i", { children: n.slice(0, 1) }),
                                                          D.him,
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  },
                                  `${D.where}${D.time}`,
                              ),
                          ),
                      }),
                  o,
              ],
          });
}
const ps = ["draft", "invited", "planning", "ready", "ongoing"];
function Da({ onBack: s, onOpenChat: t, launch: n }) {
    const { state: l, tv: c, update: a, putTrip: d } = Z(),
        r = l.characters || [],
        [x, i] = k.useState(() => {
            var N;
            return (
                (n == null ? void 0 : n.charId) ||
                c.charId ||
                l.activeCharId ||
                ((N = r[0]) == null ? void 0 : N.id) ||
                null
            );
        }),
        m = r.find((N) => N.id === x) || r[0] || null,
        [v, j] = k.useState("home"),
        [o, h] = k.useState(null),
        [p, I] = k.useState(null),
        [u, C] = k.useState(!1),
        [b, O] = k.useState(!1),
        [S, T] = k.useState(null);
    k.useEffect(() => {
        if (!(n != null && n.tripId)) return;
        const N = c.trips.find((E) => E.id === n.tripId);
        N && (i(N.charId), h(N.id), j("plan"), T(n.live ? mn(N) : null));
    }, [n == null ? void 0 : n.at]);
    const $ = k.useMemo(
            () =>
                c.trips
                    .filter((N) => N.charId === (m == null ? void 0 : m.id))
                    .sort((N, E) => E.createdAt - N.createdAt),
            [c.trips, m == null ? void 0 : m.id],
        ),
        W =
            $.find((N) => N.status === "ongoing") ||
            $.filter((N) => ps.includes(N.status)).sort((N, E) =>
                String(N.startDate).localeCompare(String(E.startDate)),
            )[0] ||
            null,
        M = $.filter((N) => N.status === "done"),
        L = o ? $.find((N) => N.id === o) : null,
        y = (N) => {
            (i(N), a(() => ({ charId: N })), h(null));
        },
        f = (N) => {
            (h(null), I(null), N === "plan" && W && h(W.id), j(N));
        };
    return m
        ? e.jsxs("div", {
              className: "tv",
              children: [
                  e.jsxs("div", {
                      className: "tv-top",
                      children: [
                          e.jsx("button", {
                              className: "tv-round tv-press",
                              onClick: s,
                              "aria-label": "返回",
                              children: e.jsx(Fe, {}),
                          }),
                          e.jsx("span", { style: { flex: 1 } }),
                          e.jsx("button", {
                              className: "tv-round tv-press",
                              style: { marginRight: 10 },
                              onClick: () => O(!0),
                              "aria-label": "旅行设置",
                              children: e.jsxs("svg", {
                                  width: "17",
                                  height: "17",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "1.5",
                                  strokeLinecap: "round",
                                  children: [
                                      e.jsx("path", { d: "M4 7h10M18 7h2M4 17h4M12 17h8" }),
                                      e.jsx("circle", { cx: "16", cy: "7", r: "2" }),
                                      e.jsx("circle", { cx: "10", cy: "17", r: "2" }),
                                  ],
                              }),
                          }),
                          e.jsxs("button", {
                              className: "tv-press",
                              onClick: () => C(!0),
                              "aria-label": "切换同行者",
                              style: { display: "flex", alignItems: "center", gap: 8 },
                              children: [
                                  e.jsx("span", { className: "tv-s", children: ie(m) }),
                                  e.jsxs("span", {
                                      className: "tv-avs",
                                      children: [e.jsx(ye, { char: m }), e.jsx(ye, { me: l.me })],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  v === "home" &&
                      e.jsx(Na, {
                          state: l,
                          char: m,
                          current: W,
                          done: M,
                          trips: $,
                          putTrip: d,
                          onOpen: (N) => {
                              (h(N.id), j("plan"));
                          },
                          onNew: () => j("new"),
                          onJournal: (N) => {
                              (I(N.id), j("journal"));
                          },
                      }),
                  v === "plan" &&
                      (L
                          ? e.jsx(
                                ta,
                                {
                                    trip: L,
                                    char: m,
                                    liveAt: S,
                                    onOpenChat: t,
                                    onJournal: () => {
                                        (I(L.id), j("journal"));
                                    },
                                    onDeleted: () => {
                                        (h(null), j("home"));
                                    },
                                },
                                L.id,
                            )
                          : e.jsx(ka, { trips: $, onOpen: (N) => h(N.id), onNew: () => j("new") })),
                  v === "new" &&
                      e.jsx(Fn, {
                          char: m,
                          onDone: (N, E) => {
                              (h(N), j("plan"), E && (t == null || t(m.id)));
                          },
                          onCancel: () => j("home"),
                      }),
                  v === "journal" &&
                      (p
                          ? e.jsx(ja, { tripId: p, char: m, onBack: () => I(null) })
                          : e.jsx(ua, { trips: M, char: m, onOpen: (N) => I(N.id) })),
                  v === "passport" && e.jsx(wa, { trips: $, char: m, me: l.me }),
                  e.jsx(yn, { tab: v, onTab: f }),
                  e.jsx(Ta, { open: b, onClose: () => O(!1) }),
                  e.jsx(ya, {
                      open: u,
                      chars: r,
                      current: m,
                      me: l.me,
                      trips: c.trips,
                      onClose: () => C(!1),
                      onPick: (N) => {
                          (y(N), C(!1));
                      },
                  }),
              ],
          })
        : e.jsxs("div", {
              className: "tv",
              children: [
                  e.jsx("div", {
                      className: "tv-top",
                      children: e.jsx("button", {
                          className: "tv-round tv-press",
                          onClick: s,
                          "aria-label": "返回",
                          children: e.jsx(Fe, {}),
                      }),
                  }),
                  e.jsxs("div", {
                      className: "tv-empty-full",
                      children: [
                          e.jsx("span", {
                              className: "tv-empty-ic",
                              children: e.jsx("svg", {
                                  width: "26",
                                  height: "26",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "1.4",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  children: e.jsx("path", {
                                      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
                                  }),
                              }),
                          }),
                          e.jsx("b", { children: "还没有可以同行的人" }),
                          e.jsx("span", { children: "在联系人中添加角色后，即可规划一次旅行。" }),
                      ],
                  }),
              ],
          });
}
const _s = 8;
function ya({ open: s, chars: t, current: n, me: l, trips: c, onClose: a, onPick: d }) {
    const [r, x] = k.useState(!1);
    k.useEffect(() => {
        s || x(!1);
    }, [s]);
    const i = k.useMemo(() => t.filter((h) => h.id !== (n == null ? void 0 : n.id)), [t, n]),
        m = r ? i : i.slice(0, _s),
        v = (h) => (c || []).filter((p) => p.charId === h.id),
        j = (h) => v(h).some((p) => ps.includes(p.status)),
        o = (h) => {
            const p = v(h);
            if (p.some((u) => u.status === "ongoing")) return "旅途中";
            if (p.some((u) => ps.includes(u.status))) return "有安排中的旅行";
            const I = p.filter((u) => u.status === "done").length;
            return I ? `已同行 ${I} 次` : "尚未一起旅行";
        };
    return e.jsx(hn, {
        open: s,
        onClose: a,
        noHead: !0,
        maxWidth: 344,
        children: e.jsxs("div", {
            className: "tvp",
            children: [
                e.jsxs("div", {
                    className: "tvp-head",
                    children: [
                        e.jsxs("div", {
                            children: [
                                e.jsxs("div", {
                                    className: "tvp-k",
                                    children: [
                                        "Companion · ",
                                        e.jsx("span", { className: "tn", children: t.length }),
                                    ],
                                }),
                                e.jsx("div", { className: "tvp-title", children: "与谁同行" }),
                            ],
                        }),
                        e.jsx("button", {
                            type: "button",
                            className: "tvp-x",
                            onClick: a,
                            "aria-label": "关闭",
                            children: e.jsx("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                children: e.jsx("path", { d: "M6 6l12 12M18 6 6 18" }),
                            }),
                        }),
                    ],
                }),
                n &&
                    e.jsxs("div", {
                        className: "tvp-cur",
                        children: [
                            e.jsxs("span", {
                                className: "tvp-pair",
                                children: [e.jsx(ye, { char: n }), e.jsx(ye, { me: l })],
                            }),
                            e.jsxs("span", {
                                className: "tvp-cur-t",
                                children: [
                                    e.jsx("b", { children: ie(n) }),
                                    e.jsx("small", { children: o(n) }),
                                ],
                            }),
                            e.jsx("span", { className: "tvp-tag", children: "当前" }),
                        ],
                    }),
                i.length > 0 &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs("div", {
                                className: "tvp-sec",
                                children: [
                                    e.jsx("span", { children: "切换同行者" }),
                                    e.jsx("span", { className: "tn", children: i.length }),
                                ],
                            }),
                            e.jsx("div", {
                                className: `tvp-grid${r ? " all" : ""}`,
                                children: m.map((h) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            type: "button",
                                            className: "tvp-cell",
                                            onClick: () => d(h.id),
                                            title: o(h),
                                            children: [
                                                e.jsx("span", {
                                                    className: `tvp-ava${j(h) ? " busy" : ""}`,
                                                    children: e.jsx(ye, { char: h }),
                                                }),
                                                e.jsx("span", { className: "tvp-name", children: ie(h) }),
                                            ],
                                        },
                                        h.id,
                                    ),
                                ),
                            }),
                            i.length > _s &&
                                e.jsx("button", {
                                    type: "button",
                                    className: "tvp-more",
                                    onClick: () => x((h) => !h),
                                    children: r
                                        ? "收起"
                                        : e.jsxs(e.Fragment, {
                                              children: [
                                                  "展开全部 ",
                                                  e.jsxs("span", {
                                                      className: "tn",
                                                      children: ["· ", i.length],
                                                  }),
                                              ],
                                          }),
                                }),
                        ],
                    }),
                e.jsx("p", {
                    className: "tvp-foot",
                    children: "每位同行者拥有各自的旅行记录。黑点表示有安排中的旅行。",
                }),
            ],
        }),
    });
}
function Na({
    state: s,
    char: t,
    current: n,
    done: l,
    trips: c,
    putTrip: a,
    onOpen: d,
    onNew: r,
    onJournal: x,
}) {
    var p, I, u, C, b, O, S, T, $, W, M, L;
    const i = n ? $e(n) : null,
        m = n ? is(n) : null,
        v = new Date().getFullYear(),
        j = n
            ? n.status === "ongoing"
                ? `旅途中 · 第 ${m.day} 天`
                : n.status === "invited"
                  ? "邀请已发送，等待回应"
                  : n.status === "declined"
                    ? "邀请未被接受"
                    : n.timeMode === "virtual"
                      ? "准备就绪，可随时出发"
                      : i > 0
                        ? null
                        : "今天出发"
            : "还没有安排中的旅行",
        o = n
            ? (((p = n.plan) == null ? void 0 : p.days) || [])
                  .flatMap((y) => y.items)
                  .filter((y) => !y.auto && y.status !== "cancelled" && y.kind === "sight")
                  .slice(0, 4)
            : [],
        h = c.flatMap((y) => y.stamps || []);
    return e.jsxs("div", {
        className: "tv-scroll",
        children: [
            e.jsx("div", {
                className: "tv-row",
                children: e.jsxs("span", { className: "tv-k", children: ["Travel · ", v] }),
            }),
            e.jsx("div", { className: "tv-h", children: "旅行" }),
            e.jsx("div", {
                className: "tv-s",
                children:
                    j ||
                    e.jsxs(e.Fragment, {
                        children: [
                            "距离下一次出发还有 ",
                            e.jsx("b", { className: "tn", children: i }),
                            " 天",
                        ],
                    }),
            }),
            n
                ? e.jsxs("div", {
                      className: "tv-card",
                      style: { marginTop: 16, overflow: "hidden" },
                      children: [
                          e.jsx(Ie, {
                              cat: "dest",
                              k: n.id,
                              place: `${((I = n.dest) == null ? void 0 : I.name) || ""} ${((u = n.dest) == null ? void 0 : u.en) || ""}`,
                              look:
                                  ((C = n.dest) == null ? void 0 : C.look) ||
                                  ns((b = n.dest) == null ? void 0 : b.name, n.title),
                              img: (O = n.cover) == null ? void 0 : O.img,
                              shift: (S = n.cover) == null ? void 0 : S.shift,
                              editable: !0,
                              auto: ["ready", "ongoing", "done"].includes(n.status),
                              desc: `${((T = n.dest) == null ? void 0 : T.name) || ""}${($ = n.dest) != null && $.country ? `（${n.dest.country}）` : ""}最有代表性的风景，旅行封面`,
                              style: { height: 168 },
                              onChange: (y) => a(n.id, (f) => ({ cover: { ...(f.cover || {}), ...y } })),
                          }),
                          e.jsxs("div", {
                              style: {
                                  position: "relative",
                                  zIndex: 1,
                                  marginTop: -168,
                                  height: 168,
                                  padding: 14,
                                  color: "#fff",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                  pointerEvents: "none",
                                  background: "linear-gradient(to top, rgba(0,0,0,.42), rgba(0,0,0,0) 58%)",
                              },
                              children: [
                                  e.jsx("span", {
                                      className: "tv-chip",
                                      style: {
                                          color: "#fff",
                                          boxShadow: "inset 0 0 0 .5px rgba(255,255,255,.6)",
                                          alignSelf: "flex-start",
                                      },
                                      children:
                                          n.status === "ongoing"
                                              ? `DAY ${m.day}`
                                              : n.timeMode === "virtual"
                                                ? "READY"
                                                : `D-${Math.max(0, i)} · ${Y(n.startDate)}`,
                                  }),
                                  e.jsxs("div", {
                                      children: [
                                          e.jsx("div", {
                                              style: { fontSize: 10, letterSpacing: ".24em", opacity: 0.85 },
                                              children: [
                                                  (W = n.dest) == null ? void 0 : W.en,
                                                  (M = n.dest) == null ? void 0 : M.name,
                                              ]
                                                  .filter(Boolean)
                                                  .join(" · "),
                                          }),
                                          e.jsx("div", {
                                              style: {
                                                  fontSize: 21,
                                                  fontWeight: 600,
                                                  marginTop: 4,
                                                  lineHeight: 1.25,
                                              },
                                              children:
                                                  n.title ||
                                                  ((L = n.dest) == null ? void 0 : L.name) ||
                                                  "未命名的旅行",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          e.jsxs("div", {
                              style: { padding: "12px 16px 16px" },
                              children: [
                                  e.jsxs("div", {
                                      className: "tv-row",
                                      children: [
                                          e.jsxs("span", {
                                              className: "tv-s",
                                              children: [
                                                  n.days,
                                                  " 天 ",
                                                  Math.max(0, n.days - 1),
                                                  " 晚",
                                                  o.length ? ` · ${o.length} 站` : "",
                                              ],
                                          }),
                                          e.jsxs("span", {
                                              className: "tv-avs",
                                              children: [e.jsx(ye, { char: t }), e.jsx(ye, { me: s.me })],
                                          }),
                                      ],
                                  }),
                                  o.length > 0 &&
                                      e.jsx("div", {
                                          className: "tv-route",
                                          children: o.map((y) =>
                                              e.jsxs(
                                                  "div",
                                                  {
                                                      className: `st${y.status === "done" ? " done" : ""}`,
                                                      children: [
                                                          e.jsx("i", {}),
                                                          (y.place || y.title).slice(0, 6),
                                                      ],
                                                  },
                                                  y.id,
                                              ),
                                          ),
                                      }),
                                  e.jsx("button", {
                                      className: "tv-btn",
                                      style: { marginTop: 16 },
                                      onClick: () => d(n),
                                      children: n.status === "ongoing" ? "进入今日行程" : "查看行程",
                                  }),
                              ],
                          }),
                      ],
                  })
                : e.jsxs("div", {
                      className: "tv-card",
                      style: { marginTop: 16, padding: "26px 18px", textAlign: "center" },
                      children: [
                          e.jsxs("div", {
                              style: { fontSize: 14, fontWeight: 600 },
                              children: ["与", ie(t), "的第一次旅行"],
                          }),
                          e.jsx("div", {
                              className: "tv-s",
                              style: { marginTop: 6, lineHeight: 1.7 },
                              children: "选择目的地与日期，向他发出邀请。行程、住宿与出行由你们共同决定。",
                          }),
                          e.jsx("button", {
                              className: "tv-btn",
                              style: { marginTop: 16 },
                              onClick: r,
                              children: "发起旅行",
                          }),
                      ],
                  }),
            e.jsxs("div", {
                className: "tv-label",
                children: [
                    e.jsx("b", { children: "护照" }),
                    e.jsxs("span", { className: "tv-k", children: [h.length, " stamps"] }),
                ],
            }),
            e.jsxs("div", {
                style: { display: "flex", gap: 12, overflowX: "auto", padding: "4px 2px 6px" },
                children: [
                    h.slice(-6).map((y, f) => e.jsx(ze, { en: y.en, name: y.name, date: y.date }, f)),
                    e.jsx(ze, { empty: !0 }),
                ],
            }),
            l.length > 0 &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs("div", {
                            className: "tv-label",
                            children: [
                                e.jsx("b", { children: "去过的地方" }),
                                e.jsxs("span", { className: "tv-k", children: [l.length, " trips"] }),
                            ],
                        }),
                        e.jsx("div", {
                            className: "tv-card",
                            style: { padding: "2px 14px" },
                            children: l.map((y) => {
                                var f, N;
                                return e.jsxs(
                                    "button",
                                    {
                                        className: "tv-seg",
                                        onClick: () => x(y),
                                        children: [
                                            e.jsx("span", { className: "tm tn", children: Y(y.startDate) }),
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("div", {
                                                        className: "ti",
                                                        children:
                                                            y.title ||
                                                            ((f = y.dest) == null ? void 0 : f.name),
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "ty",
                                                        children: [
                                                            (N = y.dest) == null ? void 0 : N.name,
                                                            " · ",
                                                            y.days,
                                                            " 天",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            e.jsx("span", { className: "go", children: "手账 ›" }),
                                        ],
                                    },
                                    y.id,
                                );
                            }),
                        }),
                    ],
                }),
        ],
    });
}
const ba = {
    draft: "草稿",
    invited: "等待回应",
    declined: "未接受",
    planning: "规划中",
    ready: "已出票",
    ongoing: "进行中",
    done: "已结束",
};
function ka({ trips: s, onOpen: t, onNew: n }) {
    return s.length
        ? e.jsxs("div", {
              className: "tv-scroll",
              children: [
                  e.jsx("div", { className: "tv-k", children: "Plans" }),
                  e.jsx("div", { className: "tv-h", children: "行程" }),
                  e.jsx("div", {
                      className: "tv-card",
                      style: { padding: "2px 14px", marginTop: 14 },
                      children: s.map((l) => {
                          var c, a;
                          return e.jsxs(
                              "button",
                              {
                                  className: "tv-seg",
                                  onClick: () => t(l),
                                  children: [
                                      e.jsx("span", { className: "tm tn", children: Y(l.startDate) }),
                                      e.jsxs("div", {
                                          children: [
                                              e.jsx("div", {
                                                  className: "ti",
                                                  children:
                                                      l.title ||
                                                      ((c = l.dest) == null ? void 0 : c.name) ||
                                                      "未命名的旅行",
                                              }),
                                              e.jsxs("div", {
                                                  className: "ty",
                                                  children: [
                                                      (a = l.dest) == null ? void 0 : a.name,
                                                      " · ",
                                                      l.days,
                                                      " 天 · ",
                                                      Y(l.startDate),
                                                      " — ",
                                                      Y(Ce(l.startDate, l.days - 1)),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      e.jsxs("span", {
                                          className: "go",
                                          children: [ba[l.status] || "", " ›"],
                                      }),
                                  ],
                              },
                              l.id,
                          );
                      }),
                  }),
              ],
          })
        : e.jsxs("div", {
              className: "tv-scroll",
              children: [
                  e.jsx("div", { className: "tv-k", children: "Plans" }),
                  e.jsx("div", { className: "tv-h", children: "行程" }),
                  e.jsxs("div", {
                      className: "tv-empty",
                      children: [
                          "还没有行程。",
                          e.jsx("br", {}),
                          e.jsx("button", {
                              className: "tv-chip on",
                              style: { marginTop: 14 },
                              onClick: n,
                              children: "发起旅行",
                          }),
                      ],
                  }),
              ],
          });
}
function wa({ trips: s, char: t, me: n }) {
    const l = s.flatMap((a) =>
            (a.stamps || []).map((d) => {
                var r;
                return { ...d, trip: a.title || ((r = a.dest) == null ? void 0 : r.name) };
            }),
        ),
        c = new Set(l.map((a) => a.name));
    return e.jsxs("div", {
        className: "tv-scroll",
        children: [
            e.jsx("div", { className: "tv-k", children: "Passport" }),
            e.jsx("div", { className: "tv-h", children: "护照" }),
            e.jsxs("div", {
                className: "tv-s",
                children: [
                    "与",
                    ie(t),
                    "到访 ",
                    e.jsx("b", { className: "tn", children: c.size }),
                    " 座城市 · ",
                    oe(n) === "我" ? "" : oe(n),
                ],
            }),
            e.jsxs("div", {
                className: "tv-card",
                style: { marginTop: 16, padding: 18 },
                children: [
                    e.jsxs("div", {
                        className: "tv-row",
                        children: [
                            e.jsx("span", { className: "tv-k", children: "Stamps" }),
                            e.jsx("span", { className: "tv-k tn", children: l.length }),
                        ],
                    }),
                    e.jsxs("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: 14,
                            marginTop: 16,
                            justifyItems: "center",
                        },
                        children: [
                            l.map((a, d) => e.jsx(ze, { en: a.en, name: a.name, date: a.date }, d)),
                            e.jsx(ze, { empty: !0 }),
                        ],
                    }),
                    !l.length &&
                        e.jsx("div", {
                            className: "tv-s",
                            style: { marginTop: 14, lineHeight: 1.7 },
                            children: "抵达一座城市后，在旅途现场选择「盖章」，印章将留在这里。",
                        }),
                ],
            }),
        ],
    });
}
function Ta({ open: s, onClose: t }) {
    const { state: n, update: l } = Z(),
        c = ts(n),
        a = ls(n, "travel"),
        d = (i) => l((m) => ({ prefs: { ...xn, ...(m.prefs || {}), ...i } })),
        [r, x] = k.useState(c.imageStyleText);
    return (
        k.useEffect(() => {
            s && x(ts(n).imageStyleText);
        }, [s]),
        e.jsxs(me, {
            open: s,
            onClose: t,
            children: [
                e.jsx("h3", { children: "旅行设置" }),
                e.jsx("div", { className: "tv-k", style: { marginTop: 16 }, children: "生图" }),
                e.jsxs("div", {
                    className: "tv-card",
                    style: { marginTop: 6, padding: "2px 14px", boxShadow: "0 0 0 .5px var(--tv-line)" },
                    children: [
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsx("span", { children: "旅行生图" }),
                                e.jsx("span", {
                                    className: "tv-s",
                                    children: a ? "已开启" : "未开启（设置 → 生图 → 旅行）",
                                }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "tv-field",
                            children: [
                                e.jsxs("span", {
                                    style: { color: "var(--tv-ink)", flex: 1, minWidth: 0 },
                                    children: [
                                        "默认生成图片",
                                        e.jsx("div", {
                                            className: "tv-s",
                                            style: { marginTop: 2 },
                                            children:
                                                "出票后为行程封面与预订的住宿生成图片；其余图片可在图片上手动生成",
                                        }),
                                    ],
                                }),
                                e.jsx(Ae, { on: c.imageAuto, onChange: (i) => d({ imageAuto: i }) }),
                            ],
                        }),
                    ],
                }),
                e.jsx("div", { className: "tv-k", style: { marginTop: 16 }, children: "画面风格" }),
                e.jsx("div", {
                    className: "tv-card",
                    style: { marginTop: 6, padding: "2px 12px", boxShadow: "0 0 0 .5px var(--tv-line)" },
                    children: ds.map(([i, m, v]) =>
                        e.jsxs(
                            "button",
                            {
                                className: "tv-seg",
                                style: { gridTemplateColumns: "1fr auto" },
                                onClick: () => d({ imageStyle: i }),
                                children: [
                                    e.jsxs("div", {
                                        children: [
                                            e.jsx("div", { className: "ti", children: m }),
                                            e.jsx("div", {
                                                className: "ty",
                                                style: { letterSpacing: 0, lineHeight: 1.5 },
                                                children: i === "custom" ? "填写你想要的画面风格" : v,
                                            }),
                                        ],
                                    }),
                                    e.jsx("span", {
                                        className: `tv-radio${c.imageStyle === i ? " on" : ""}`,
                                    }),
                                ],
                            },
                            i,
                        ),
                    ),
                }),
                c.imageStyle === "custom" &&
                    e.jsx("textarea", {
                        className: "tv-area",
                        style: { marginTop: 8 },
                        value: r,
                        maxLength: 200,
                        onChange: (i) => x(i.target.value),
                        onBlur: () => d({ imageStyleText: r.trim() }),
                        placeholder: "例如胶片相机、色调、颗粒、光线与构图",
                    }),
                e.jsx("div", {
                    className: "tv-s",
                    style: { marginTop: 8, lineHeight: 1.7 },
                    children:
                        "风格用于旅行中生成的所有图片，包括旅途现场的照片。已生成的图片不会改变，可在图片上选择「重新生成」。",
                }),
                e.jsx("button", {
                    className: "tv-btn",
                    style: { marginTop: 14 },
                    onClick: () => {
                        (c.imageStyle === "custom" && d({ imageStyleText: r.trim() }), t());
                    },
                    children: "完成",
                }),
            ],
        })
    );
}
export { Da as default };
