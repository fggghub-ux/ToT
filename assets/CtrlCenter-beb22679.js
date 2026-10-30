import { r as f, j as s } from "./vendor-react-3a46a5d3.js";
import {
    u as V,
    a1 as X,
    a2 as Y,
    a3 as Z,
    a4 as B,
    a5 as z,
    a6 as N,
    a7 as A,
    a8 as y,
    l as F,
    a9 as L,
    c as J,
    aa as Q,
    ab as ss,
} from "./app-2c902988.js";
import { b as O, cv as ts, a as ns, c as G, cw as P } from "./vendor-icons-e63d3118.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const M = (t) => ({ popup: !0, ball: !1, ...((t == null ? void 0 : t.ctrl) || {}) }),
    h = (t) => t === "running" || t === "queued",
    g = { running: "进行中", queued: "排队中", done: "已完成", failed: "失败", stopped: "已停止" },
    S = (t) => {
        const l = new Date(t || 0);
        return `${String(l.getHours()).padStart(2, "0")}:${String(l.getMinutes()).padStart(2, "0")}`;
    },
    $ = (t) => {
        const l = Math.max(0, Math.round(t / 1e3));
        return l < 60 ? `${l} 秒` : `${Math.floor(l / 60)} 分 ${l % 60} 秒`;
    },
    ls = (t) => {
        const l = new Date(t),
            d = new Date();
        d.setHours(0, 0, 0, 0);
        const a = Math.round(
            (d.getTime() - new Date(l.getFullYear(), l.getMonth(), l.getDate()).getTime()) / 864e5,
        );
        return a <= 0 ? "今天" : a === 1 ? "昨天" : `${l.getMonth() + 1}月${l.getDate()}日`;
    };
function es() {
    return f.useSyncExternalStore(Z, B, B);
}
function D(t) {
    const [, l] = f.useState(0);
    f.useEffect(() => {
        if (!t) return;
        const d = setInterval(() => l((a) => a + 1), 1e3);
        return () => clearInterval(d);
    }, [t]);
}
function as(t) {
    const l = new Map(),
        d = [];
    for (const a of t)
        if (a.kind === "image" && a.group) {
            let e = l.get(a.group);
            (e ||
                ((e = { id: a.group, kind: "group", label: a.label, items: [], startedAt: a.startedAt }),
                l.set(a.group, e),
                d.push(e)),
                e.items.push(a),
                (e.startedAt = Math.min(e.startedAt, a.startedAt)));
        } else d.push(a);
    for (const a of l.values()) {
        const e = { queued: 0, running: 0, done: 0, failed: 0, stopped: 0 };
        for (const r of a.items) e[r.status] = (e[r.status] || 0) + 1;
        ((a.count = e),
            (a.status =
                e.running || e.queued ? "running" : e.failed ? "failed" : e.done ? "done" : "stopped"),
            (a.endedAt = Math.max(...a.items.map((r) => r.endedAt || 0))));
    }
    return d.sort((a, e) => e.startedAt - a.startedAt);
}
const C = (t, l) =>
    l === "all"
        ? !0
        : t.kind === "group"
          ? l === "running"
              ? t.count.running + t.count.queued > 0
              : l === "failed"
                ? t.count.failed > 0
                : t.status === "done"
          : l === "running"
            ? h(t.status)
            : l === "failed"
              ? t.status === "failed" || t.status === "stopped"
              : t.status === "done";
function H({ status: t }) {
    return s.jsx("span", {
        className: `ctl-mark is-${t}`,
        "aria-label": g[t] || t,
        children: t === "running" ? s.jsx("i", {}) : null,
    });
}
const v = (t) => (l) => {
    (l.stopPropagation(), t());
};
function cs({ e: t, onOpen: l }) {
    const d = h(t.status),
        a = t.endedAt
            ? t.endedAt > t.startedAt
                ? $(t.endedAt - t.startedAt)
                : ""
            : d && t.status === "running"
              ? $(Date.now() - t.startedAt)
              : "";
    return s.jsxs("div", {
        className: `ctl-row is-${t.status}${l ? " is-tap" : ""}`,
        role: l ? "button" : void 0,
        onClick: l,
        children: [
            s.jsx(H, { status: t.status }),
            s.jsxs("div", {
                className: "ctl-row-t",
                children: [
                    s.jsx("b", { children: t.label }),
                    s.jsxs("small", {
                        children: [
                            s.jsx("span", { className: "tn", children: S(t.startedAt) }),
                            t.auto ? " · 自动" : "",
                            " · ",
                            g[t.status],
                            a ? ` · ${a}` : "",
                        ],
                    }),
                    t.status === "failed" && t.error ? s.jsx("em", { children: t.error }) : null,
                    t.status === "stopped" && t.error ? s.jsx("em", { children: t.error }) : null,
                ],
            }),
            s.jsxs("div", {
                className: "ctl-row-act",
                children: [
                    d &&
                        z(t.id) &&
                        s.jsx("button", {
                            className: "btn-plain ctl-pill",
                            onClick: v(() => A(t.id)),
                            children: "停止",
                        }),
                    !d &&
                        t.status !== "done" &&
                        N(t.id) &&
                        s.jsx("button", {
                            className: "btn-plain ctl-pill dark",
                            onClick: v(() => y(t.id)),
                            children: "重试",
                        }),
                    !d &&
                        !N(t.id) &&
                        s.jsx("button", {
                            className: "btn-plain ctl-x",
                            "aria-label": "删除这条记录",
                            onClick: v(() => ss(t.id)),
                            children: s.jsx(ns, { size: 13 }),
                        }),
                    l && s.jsx(G, { size: 16, className: "ctl-chev" }),
                ],
            }),
        ],
    });
}
function is({ g: t, people: l, onOpen: d }) {
    const a = t.count,
        e = t.items.length;
    return s.jsxs("button", {
        className: `ctl-row ctl-group btn-plain is-${t.status}`,
        onClick: d,
        children: [
            s.jsx(H, { status: t.status }),
            s.jsxs("div", {
                className: "ctl-row-t",
                children: [
                    s.jsx("b", { children: t.label }),
                    s.jsxs("small", {
                        children: [
                            s.jsx("span", { className: "tn", children: S(t.startedAt) }),
                            " · ",
                            e,
                            " 张",
                            l ? ` · ${l} 人` : "",
                            a.failed ? ` · ${a.failed} 张失败` : "",
                        ],
                    }),
                    s.jsx("div", {
                        className: "ctl-seg",
                        "aria-hidden": !0,
                        children: t.items
                            .slice()
                            .reverse()
                            .map((r) => s.jsx("i", { className: `is-${r.status}` }, r.id)),
                    }),
                ],
            }),
            s.jsxs("div", {
                className: "ctl-row-act",
                children: [
                    s.jsxs("span", { className: "ctl-count tn", children: [a.done, "/", e] }),
                    s.jsx(G, { size: 16, className: "ctl-chev" }),
                ],
            }),
        ],
    });
}
function rs({ g: t, nameOf: l, onBack: d, onOpenItem: a }) {
    if ((D(t && t.count.running > 0), !t)) return null;
    const e = t.count,
        r = t.items.filter((c) => h(c.status)),
        o = t.items.filter((c) => (c.status === "failed" || c.status === "stopped") && N(c.id));
    return s.jsxs("div", {
        className: "ctl-page ctl-sub",
        children: [
            s.jsxs("div", {
                className: "ctl-topbar",
                children: [
                    s.jsx("button", {
                        className: "ctl-round btn-plain",
                        onClick: d,
                        "aria-label": "返回",
                        children: s.jsx(O, { size: 22, strokeWidth: 2.4 }),
                    }),
                    s.jsx("span", { className: "ctl-topbar-t", children: t.label }),
                    s.jsx("span", { className: "ctl-round-sp" }),
                ],
            }),
            s.jsxs("div", {
                className: "ctl-scroll",
                children: [
                    s.jsxs("div", {
                        className: "ctl-hero sm",
                        children: [
                            s.jsxs("div", {
                                className: "ctl-eyebrow",
                                children: ["IMAGE BATCH · ", S(t.startedAt)],
                            }),
                            s.jsxs("div", {
                                className: "ctl-hero-row",
                                children: [
                                    s.jsxs("div", {
                                        className: "ctl-big tn",
                                        children: [
                                            e.done,
                                            s.jsxs("small", { children: ["/ ", t.items.length] }),
                                        ],
                                    }),
                                    s.jsxs("div", {
                                        className: "ctl-hero-meta",
                                        children: [
                                            e.running + e.queued
                                                ? s.jsxs("span", {
                                                      children: [e.running + e.queued, " 张进行中"],
                                                  })
                                                : null,
                                            e.failed
                                                ? s.jsxs("span", { children: [e.failed, " 张失败"] })
                                                : null,
                                            e.stopped
                                                ? s.jsxs("span", { children: [e.stopped, " 张已停止"] })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "ctl-acts",
                                children: [
                                    r.length > 0 &&
                                        s.jsx("button", {
                                            className: "btn-plain ctl-pill",
                                            onClick: () => r.forEach((c) => A(c.id)),
                                            children: "全部停止",
                                        }),
                                    o.length > 0 &&
                                        s.jsxs("button", {
                                            className: "btn-plain ctl-pill dark",
                                            onClick: () => o.forEach((c) => y(c.id)),
                                            children: ["重试失败的 ", o.length, " 张"],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    s.jsx("div", {
                        className: "ctl-grid",
                        children: t.items.map((c) => {
                            var x, p, u;
                            return s.jsxs(
                                "div",
                                {
                                    className: `ctl-img is-${c.status} is-tap`,
                                    role: "button",
                                    onClick: () => a(c.id),
                                    children: [
                                        s.jsx("div", {
                                            className: "ctl-img-pic",
                                            children:
                                                (x = c.meta) != null && x.ref
                                                    ? s.jsx(F, { src: c.meta.ref, alt: "" })
                                                    : s.jsx("span", {
                                                          className: "ctl-img-ph",
                                                          children:
                                                              c.status === "running"
                                                                  ? s.jsx("i", { className: "ctl-spin" })
                                                                  : g[c.status],
                                                      }),
                                        }),
                                        s.jsxs("div", {
                                            className: "ctl-img-t",
                                            children: [
                                                s.jsx("b", {
                                                    children: l((p = c.meta) == null ? void 0 : p.charId),
                                                }),
                                                s.jsx("p", {
                                                    children: ((u = c.meta) == null ? void 0 : u.desc) || "—",
                                                }),
                                                c.error ? s.jsx("em", { children: c.error }) : null,
                                            ],
                                        }),
                                        s.jsxs("div", {
                                            className: "ctl-img-act",
                                            children: [
                                                s.jsx("span", {
                                                    className: "ctl-tag",
                                                    children: g[c.status],
                                                }),
                                                h(c.status) &&
                                                    z(c.id) &&
                                                    s.jsx("button", {
                                                        className: "btn-plain ctl-pill",
                                                        onClick: v(() => A(c.id)),
                                                        children: "停止",
                                                    }),
                                                !h(c.status) &&
                                                    c.status !== "done" &&
                                                    N(c.id) &&
                                                    s.jsxs("button", {
                                                        className: "btn-plain ctl-pill dark",
                                                        onClick: v(() => y(c.id)),
                                                        children: [s.jsx(P, { size: 12 }), "重试"],
                                                    }),
                                            ],
                                        }),
                                    ],
                                },
                                c.id,
                            );
                        }),
                    }),
                    s.jsx("p", {
                        className: "ctl-foot",
                        children: "每一张单独排队、单独生成；停止只影响这一张。重新生成后会写回原来的帖子。",
                    }),
                ],
            }),
        ],
    });
}
const ds = {
    insta: "insta",
    x: "x",
    tube: "youtube",
    moments: "moments",
    plog: "schedule",
    travel: "travel",
};
function os(t) {
    var a, e, r;
    if ((a = t.meta) != null && a.nav && (t.meta.nav.app || t.meta.nav.charId)) return t.meta.nav;
    if (t.kind !== "image") return null;
    const { platform: l } = L((e = t.meta) == null ? void 0 : e.key);
    if (l === "moments") return { app: "moments", postId: String(t.meta.key).split(":")[1] || "" };
    if (l === "chat" || l === "offline")
        return (r = t.meta) != null && r.charId ? { charId: t.meta.charId } : null;
    const d = ds[l];
    return d && d !== "travel" && d !== "schedule" ? { app: d, bg: !0 } : null;
}
function us({ e: t, nameOf: l, onBack: d, onGo: a }) {
    var p, u, k, j;
    if ((D(t && h(t.status)), !t)) return null;
    const e = h(t.status),
        r = os(t),
        o = t.kind === "image" ? L((p = t.meta) == null ? void 0 : p.key).label : "",
        c =
            t.endedAt && t.endedAt > t.startedAt
                ? $(t.endedAt - t.startedAt)
                : e && t.status === "running"
                  ? $(Date.now() - t.startedAt)
                  : "",
        x = [
            ["状态", g[t.status] || t.status],
            ["开始", S(t.startedAt)],
            c ? ["用时", c] : null,
            o ? ["来源", o] : null,
            (u = t.meta) != null && u.charId ? ["人物", l(t.meta.charId)] : null,
            ["触发", t.auto ? "自动" : "手动"],
        ].filter(Boolean);
    return s.jsxs("div", {
        className: "ctl-page ctl-sub",
        children: [
            s.jsxs("div", {
                className: "ctl-topbar",
                children: [
                    s.jsx("button", {
                        className: "ctl-round btn-plain",
                        onClick: d,
                        "aria-label": "返回",
                        children: s.jsx(O, { size: 22, strokeWidth: 2.4 }),
                    }),
                    s.jsx("span", { className: "ctl-topbar-t", children: t.label }),
                    s.jsx("span", { className: "ctl-round-sp" }),
                ],
            }),
            s.jsxs("div", {
                className: "ctl-scroll",
                children: [
                    t.kind === "image" &&
                        s.jsx("div", {
                            className: "ctl-ent-pic",
                            children:
                                (k = t.meta) != null && k.ref
                                    ? s.jsx(F, { src: t.meta.ref, alt: "" })
                                    : s.jsx("span", {
                                          className: "ctl-img-ph",
                                          children:
                                              t.status === "running"
                                                  ? s.jsx("i", { className: "ctl-spin" })
                                                  : g[t.status],
                                      }),
                        }),
                    s.jsx("div", {
                        className: "ctl-card ctl-ent-list",
                        children: x.map(([w, E]) =>
                            s.jsxs(
                                "div",
                                {
                                    className: "ctl-ent-row",
                                    children: [
                                        s.jsx("span", { children: w }),
                                        s.jsx("b", { className: "tn", children: E }),
                                    ],
                                },
                                w,
                            ),
                        ),
                    }),
                    (j = t.meta) != null && j.desc
                        ? s.jsxs(s.Fragment, {
                              children: [
                                  s.jsx("div", {
                                      className: "ctl-sec-h",
                                      children: s.jsx("span", { children: "画面描述" }),
                                  }),
                                  s.jsx("div", { className: "ctl-card ctl-ent-text", children: t.meta.desc }),
                              ],
                          })
                        : null,
                    t.error
                        ? s.jsxs(s.Fragment, {
                              children: [
                                  s.jsx("div", {
                                      className: "ctl-sec-h",
                                      children: s.jsx("span", {
                                          children: t.status === "failed" ? "失败原因" : "说明",
                                      }),
                                  }),
                                  s.jsx("div", {
                                      className: "ctl-card ctl-ent-text is-err",
                                      children: t.error,
                                  }),
                              ],
                          })
                        : null,
                    s.jsxs("div", {
                        className: "ctl-ent-acts",
                        children: [
                            e &&
                                z(t.id) &&
                                s.jsx("button", {
                                    className: "btn-plain ctl-btn",
                                    onClick: () => A(t.id),
                                    children: "停止",
                                }),
                            !e &&
                                t.status !== "done" &&
                                N(t.id) &&
                                s.jsxs("button", {
                                    className: "btn-plain ctl-btn dark",
                                    onClick: () => {
                                        (y(t.id), d());
                                    },
                                    children: [s.jsx(P, { size: 14 }), "重新生成"],
                                }),
                            t.status === "done" &&
                                r &&
                                s.jsx("button", {
                                    className: "btn-plain ctl-btn dark",
                                    onClick: () => a(r),
                                    children: "前往查看",
                                }),
                            !e &&
                                t.status !== "done" &&
                                !N(t.id) &&
                                r &&
                                s.jsx("button", {
                                    className: "btn-plain ctl-btn",
                                    onClick: () => a(r),
                                    children: "前往原处重新生成",
                                }),
                        ],
                    }),
                    !e &&
                        t.status !== "done" &&
                        !N(t.id) &&
                        s.jsx("p", {
                            className: "ctl-foot",
                            children: "页面重新加载后，这条记录无法在此重试。",
                        }),
                ],
            }),
        ],
    });
}
function Ns({ onClose: t }) {
    const { state: l, patch: d } = V(),
        a = es(),
        e = f.useMemo(() => as(a), [a]),
        [r, o] = f.useState("all"),
        [c, x] = f.useState(null),
        [p, u] = f.useState(null),
        k = (n) => window.dispatchEvent(new CustomEvent("litot:ctrl-open", { detail: n })),
        j = M(l.ui),
        w = e.some((n) => (n.kind === "group" ? n.status === "running" : h(n.status)));
    D(w);
    const E = l.characters || [],
        R = (n) =>
            n
                ? n === "me"
                    ? "我"
                    : (() => {
                          const i = E.find((m) => m.id === n);
                          return i ? J(i) : "路人";
                      })()
                : "路人",
        W = (n) =>
            new Set(
                n.items.map((i) => {
                    var m;
                    return ((m = i.meta) == null ? void 0 : m.charId) || "npc";
                }),
            ).size,
        I = {
            running: e.filter((n) => C(n, "running")).length,
            failed: e.filter((n) => C(n, "failed")).length,
            done: e.filter((n) => C(n, "done")).length,
        },
        _ = e.filter((n) => C(n, r)),
        b = [];
    for (const n of _) {
        const i = ls(n.startedAt),
            m = b[b.length - 1];
        (m == null ? void 0 : m.h) === i ? m.rows.push(n) : b.push({ h: i, rows: [n] });
    }
    const K = (n) => d((i) => ({ ui: { ...(i.ui || {}), ctrl: { ...M(i.ui), ...n } } })),
        U = (n) =>
            d((i) => ({
                ui: {
                    ...(i.ui || {}),
                    ctrl: { ...M(i.ui), ball: n },
                    ...(n ? { floatBall: { ...Q(i.ui), on: !0 } } : null),
                },
            })),
        q = p ? a.find((n) => n.id === p) : null;
    if (q)
        return s.jsx("div", {
            className: "ctl",
            children: s.jsx(us, { e: q, nameOf: R, onBack: () => u(null), onGo: k }),
        });
    const T = c ? e.find((n) => n.id === c) : null;
    return T
        ? s.jsx("div", {
              className: "ctl",
              children: s.jsx(rs, { g: T, nameOf: R, onBack: () => x(null), onOpenItem: u }),
          })
        : s.jsx("div", {
              className: "ctl",
              children: s.jsxs("div", {
                  className: "ctl-page",
                  children: [
                      s.jsxs("div", {
                          className: "ctl-topbar",
                          children: [
                              s.jsx("button", {
                                  className: "ctl-round btn-plain",
                                  onClick: t,
                                  "aria-label": "关闭",
                                  children: s.jsx(O, { size: 22, strokeWidth: 2.4 }),
                              }),
                              I.running > 0 &&
                                  s.jsxs("button", {
                                      className: "btn-plain ctl-pill",
                                      onClick: X,
                                      children: [s.jsx(ts, { size: 11, fill: "currentColor" }), "全部停止"],
                                  }),
                          ],
                      }),
                      s.jsxs("div", {
                          className: "ctl-scroll",
                          children: [
                              s.jsx("div", { className: "ctl-eyebrow pad", children: "BACKGROUND" }),
                              s.jsx("h1", { className: "ctl-title", children: "控制中心" }),
                              s.jsx("div", {
                                  className: "ctl-tiles",
                                  children: [
                                      ["running", "进行中"],
                                      ["failed", "失败"],
                                      ["done", "近一小时完成"],
                                  ].map(([n, i]) =>
                                      s.jsxs(
                                          "button",
                                          {
                                              className: `ctl-tile btn-plain${r === n ? " on" : ""}`,
                                              onClick: () => o(r === n ? "all" : n),
                                              children: [
                                                  s.jsx("span", {
                                                      className: "ctl-tile-n tn",
                                                      children: I[n],
                                                  }),
                                                  s.jsxs("span", {
                                                      className: "ctl-tile-l",
                                                      children: [
                                                          n === "running" && I.running > 0
                                                              ? s.jsx("i", { className: "ctl-dot" })
                                                              : null,
                                                          i,
                                                      ],
                                                  }),
                                              ],
                                          },
                                          n,
                                      ),
                                  ),
                              }),
                              s.jsx("div", {
                                  className: "ctl-seg-ctl",
                                  role: "tablist",
                                  children: [
                                      ["all", "全部"],
                                      ["running", "进行中"],
                                      ["failed", "失败"],
                                      ["done", "已完成"],
                                  ].map(([n, i]) =>
                                      s.jsx(
                                          "button",
                                          {
                                              role: "tab",
                                              "aria-selected": r === n,
                                              className: `btn-plain${r === n ? " on" : ""}`,
                                              onClick: () => o(n),
                                              children: i,
                                          },
                                          n,
                                      ),
                                  ),
                              }),
                              b.length
                                  ? b.map((n) =>
                                        s.jsxs(
                                            "section",
                                            {
                                                className: "ctl-sec",
                                                children: [
                                                    s.jsxs("div", {
                                                        className: "ctl-sec-h",
                                                        children: [
                                                            s.jsx("span", { children: n.h }),
                                                            n === b[0] &&
                                                                r !== "running" &&
                                                                e.some(
                                                                    (i) => !h(i.status) && i.kind !== "group",
                                                                ) &&
                                                                s.jsx("button", {
                                                                    className: "btn-plain ctl-link",
                                                                    onClick: () =>
                                                                        Y(
                                                                            r === "failed"
                                                                                ? "failed"
                                                                                : r === "done"
                                                                                  ? "done"
                                                                                  : "all",
                                                                        ),
                                                                    children: "清除已结束",
                                                                }),
                                                        ],
                                                    }),
                                                    s.jsx("div", {
                                                        className: "ctl-card",
                                                        children: n.rows.map((i) =>
                                                            i.kind === "group"
                                                                ? s.jsx(
                                                                      is,
                                                                      {
                                                                          g: i,
                                                                          people: W(i),
                                                                          onOpen: () => x(i.id),
                                                                      },
                                                                      i.id,
                                                                  )
                                                                : s.jsx(
                                                                      cs,
                                                                      { e: i, onOpen: () => u(i.id) },
                                                                      i.id,
                                                                  ),
                                                        ),
                                                    }),
                                                ],
                                            },
                                            n.h,
                                        ),
                                    )
                                  : s.jsxs("div", {
                                        className: "ctl-empty",
                                        children: [
                                            s.jsx("b", {
                                                children:
                                                    r === "running"
                                                        ? "没有进行中的调用"
                                                        : r === "failed"
                                                          ? "没有失败的调用"
                                                          : "还没有后台调用记录",
                                            }),
                                            s.jsx("span", { children: "后台调用开始后会按时间出现在这里。" }),
                                        ],
                                    }),
                              s.jsx("div", {
                                  className: "ctl-sec-h",
                                  style: { marginTop: 28 },
                                  children: s.jsx("span", { children: "显示方式" }),
                              }),
                              s.jsxs("div", {
                                  className: "ctl-card",
                                  children: [
                                      s.jsxs("label", {
                                          className: "ctl-set",
                                          children: [
                                              s.jsxs("div", {
                                                  children: [
                                                      s.jsx("b", { children: "调用开始时顶部提示" }),
                                                      s.jsx("small", {
                                                          children:
                                                              "出现约 3 秒后自动收起，点一下进入控制中心。",
                                                      }),
                                                  ],
                                              }),
                                              s.jsx("input", {
                                                  type: "checkbox",
                                                  className: "ctl-switch",
                                                  checked: j.popup && !j.ball,
                                                  disabled: j.ball,
                                                  onChange: (n) => K({ popup: n.target.checked }),
                                              }),
                                          ],
                                      }),
                                      s.jsxs("label", {
                                          className: "ctl-set",
                                          children: [
                                              s.jsxs("div", {
                                                  children: [
                                                      s.jsx("b", { children: "用悬浮球显示后台调用" }),
                                                      s.jsx("small", {
                                                          children:
                                                              "有调用进行时，悬浮球显示进度；点一下进入控制中心。开启后不再弹出顶部提示。",
                                                      }),
                                                  ],
                                              }),
                                              s.jsx("input", {
                                                  type: "checkbox",
                                                  className: "ctl-switch",
                                                  checked: j.ball,
                                                  onChange: (n) => U(n.target.checked),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              s.jsx("p", {
                                  className: "ctl-foot",
                                  children:
                                      "已完成的记录保留一小时后自动删除；失败和已停止的保留三天。自动进行的调用标有「自动」。",
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
export { M as ctrlOf, Ns as default };
