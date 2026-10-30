import { r as h, j as e, R as je, a as Ue } from "./vendor-react-3a46a5d3.js";
import {
    h8 as He,
    a as q,
    ca as P,
    b9 as V,
    h9 as We,
    ha as Ge,
    hb as Ke,
    hc as X,
    A as Me,
    hd as Ve,
    he as ze,
    hf as ve,
    hg as Xe,
    hh as Je,
    hi as Ee,
    hj as Ze,
    hk as es,
    hl as ss,
    hm as ts,
    hn as ns,
    ho as as,
    hp as ls,
    hq as Le,
    c0 as cs,
    hr as K,
    hs as rs,
    ht as is,
    bj as te,
    hu as fe,
    hv as xe,
    hw as os,
    hx as ds,
    hy as oe,
    hz as H,
    hA as De,
    hB as J,
    hC as ms,
    hD as hs,
    hE as us,
    hF as ps,
    hG as pe,
    hH as xs,
    hI as gs,
    hJ as js,
    hK as vs,
    hL as fs,
    hM as bs,
    hN as Ns,
    hO as Te,
    hP as ys,
    hQ as Ae,
    hR as be,
    hS as _s,
    hT as ws,
    hU as ks,
    hV as Ss,
    hW as Ne,
    hX as Cs,
    hY as $s,
    hZ as Ms,
    h_ as ye,
    h$ as Re,
    i0 as Es,
    i1 as Ls,
    i2 as Ds,
} from "./app-2c902988.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-icons-e63d3118.js";
import "./vendor-leaflet-f4c2a8c5.js";
const _e = 20;
function z(s, { empty: t = "没有日期" } = {}) {
    if (!s) return ["~", t];
    const l = new Date(s);
    if (Number.isNaN(l.getTime())) return ["~", t];
    const m = `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}-${String(l.getDate()).padStart(2, "0")}`,
        n = new Date();
    n.setHours(0, 0, 0, 0);
    const i = Math.round((n - new Date(l.getFullYear(), l.getMonth(), l.getDate())) / 864e5),
        c =
            i === 0
                ? "今天"
                : i === 1
                  ? "昨天"
                  : l.getFullYear() === n.getFullYear()
                    ? `${l.getMonth() + 1}月${l.getDate()}日`
                    : `${l.getFullYear()}年${l.getMonth() + 1}月${l.getDate()}日`;
    return [m, c];
}
function ue({
    items: s,
    groupOf: t,
    render: l,
    variant: m = "grp",
    keyOf: n = (a) => a.id,
    resetKey: i = "",
    openAll: c = !1,
}) {
    const a = h.useMemo(() => {
            const r = [],
                d = new Map();
            for (const x of s || []) {
                const [j, N] = t(x);
                (d.has(j) || (d.set(j, r.length), r.push({ k: j, label: N, list: [] })),
                    r[d.get(j)].list.push(x));
            }
            return r;
        }, [s, t]),
        [u, v] = h.useState({}),
        [f, o] = h.useState({});
    return (
        h.useEffect(() => {
            (v({}), o({}));
        }, [i]),
        a.map((r, d) => {
            const x = u[r.k] ?? (c || d === 0),
                j = f[r.k] || _e,
                N = r.list.slice(0, j),
                g = r.list.length - N.length;
            return e.jsxs(
                "section",
                {
                    className: `mg-gsec${x ? " on" : ""}`,
                    children: [
                        e.jsxs("button", {
                            type: "button",
                            className: "mg-gh",
                            "aria-expanded": x,
                            onClick: () => v((_) => ({ ..._, [r.k]: !x })),
                            children: [
                                e.jsx("b", { children: r.label }),
                                e.jsx("span", { children: r.list.length }),
                                e.jsx("i", { "aria-hidden": !0 }),
                            ],
                        }),
                        x &&
                            (m === "grp"
                                ? e.jsx("div", {
                                      className: "mg-grp",
                                      children: N.map((_) => e.jsx(je.Fragment, { children: l(_) }, n(_))),
                                  })
                                : N.map((_) => e.jsx(je.Fragment, { children: l(_) }, n(_)))),
                        x &&
                            g > 0 &&
                            e.jsxs("button", {
                                type: "button",
                                className: "mg-more",
                                onClick: () => o((_) => ({ ..._, [r.k]: j + _e })),
                                children: ["显示更多 · 还有 ", g, " 条"],
                            }),
                    ],
                },
                r.k,
            );
        })
    );
}
function Ts({ src: s, active: t, onZoom: l }) {
    const m = h.useRef(null),
        n = h.useRef({ s: 1, x: 0, y: 0 }),
        i = h.useRef(null),
        c = h.useRef(0),
        a = () => {
            const r = m.current;
            if (!r) return;
            const { s: d, x, y: j } = n.current;
            ((r.style.transform = `translate(${x}px, ${j}px) scale(${d})`),
                (r.style.touchAction = d > 1.01 ? "none" : "pan-x"),
                l == null || l(d > 1.01));
        },
        u = () => {
            const r = m.current;
            if (!r) return;
            const d = n.current;
            d.s = Math.max(1, Math.min(5, d.s));
            const x = (r.offsetWidth * (d.s - 1)) / 2,
                j = (r.offsetHeight * (d.s - 1)) / 2;
            ((d.x = Math.max(-x, Math.min(x, d.x))),
                (d.y = Math.max(-j, Math.min(j, d.y))),
                d.s <= 1.01 && ((d.s = 1), (d.x = 0), (d.y = 0)));
        },
        v = (r, d, x) => {
            const j = m.current;
            if (!j) return;
            const N = j.getBoundingClientRect(),
                g = n.current,
                _ = d - (N.left + N.width / 2),
                p = x - (N.top + N.height / 2),
                b = r / g.s;
            ((g.x = g.x - _ * (b - 1)), (g.y = g.y - p * (b - 1)), (g.s = r), u(), a());
        },
        f = (r, d) => {
            n.current.s > 1.01 ? ((n.current = { s: 1, x: 0, y: 0 }), a()) : v(2.5, r, d);
        };
    (h.useEffect(() => {
        !t && n.current.s !== 1 && ((n.current = { s: 1, x: 0, y: 0 }), a());
    }, [t]),
        h.useEffect(() => {
            const r = m.current;
            if (!r) return;
            const d = (p) => Math.hypot(p[0].clientX - p[1].clientX, p[0].clientY - p[1].clientY),
                x = (p) => [(p[0].clientX + p[1].clientX) / 2, (p[0].clientY + p[1].clientY) / 2],
                j = (p) => {
                    const b = p.touches;
                    if (b.length === 2) {
                        const [k, M] = x(b);
                        ((i.current = { pinch: !0, d0: d(b), s0: n.current.s, cx: k, cy: M }),
                            p.preventDefault());
                        return;
                    }
                    if (b.length === 1) {
                        const k = Date.now();
                        if (k - c.current < 280) {
                            ((c.current = 0),
                                (i.current = null),
                                f(b[0].clientX, b[0].clientY),
                                p.preventDefault());
                            return;
                        }
                        ((c.current = k),
                            n.current.s > 1.01 &&
                                (i.current = {
                                    pan: !0,
                                    px: b[0].clientX,
                                    py: b[0].clientY,
                                    x0: n.current.x,
                                    y0: n.current.y,
                                }));
                    }
                },
                N = (p) => {
                    const b = p.touches,
                        k = i.current;
                    if (k)
                        if (k.pinch && b.length === 2) {
                            const [M, D] = x(b);
                            (v(Math.max(1, Math.min(5, k.s0 * (d(b) / k.d0))), k.cx, k.cy),
                                (n.current.x += M - k.cx),
                                (n.current.y += D - k.cy),
                                (k.cx = M),
                                (k.cy = D),
                                u(),
                                a(),
                                p.preventDefault());
                        } else
                            k.pan &&
                                b.length === 1 &&
                                ((n.current.x = k.x0 + (b[0].clientX - k.px)),
                                (n.current.y = k.y0 + (b[0].clientY - k.py)),
                                u(),
                                a(),
                                p.preventDefault());
                },
                g = (p) => {
                    if (p.touches.length === 1 && n.current.s > 1.01) {
                        const b = p.touches[0];
                        i.current = {
                            pan: !0,
                            px: b.clientX,
                            py: b.clientY,
                            x0: n.current.x,
                            y0: n.current.y,
                        };
                        return;
                    }
                    p.touches.length || ((i.current = null), u(), a());
                },
                _ = (p) => p.preventDefault();
            return (
                r.addEventListener("gesturestart", _),
                r.addEventListener("touchstart", j, { passive: !1 }),
                r.addEventListener("touchmove", N, { passive: !1 }),
                r.addEventListener("touchend", g),
                r.addEventListener("touchcancel", g),
                () => {
                    (r.removeEventListener("gesturestart", _),
                        r.removeEventListener("touchstart", j),
                        r.removeEventListener("touchmove", N),
                        r.removeEventListener("touchend", g),
                        r.removeEventListener("touchcancel", g));
                }
            );
        }, []));
    const o = (r) => {
        if (n.current.s <= 1.01) return;
        const d = { px: r.clientX, py: r.clientY, x0: n.current.x, y0: n.current.y },
            x = (N) => {
                ((n.current.x = d.x0 + N.clientX - d.px), (n.current.y = d.y0 + N.clientY - d.py), u(), a());
            },
            j = () => {
                (window.removeEventListener("mousemove", x), window.removeEventListener("mouseup", j));
            };
        (window.addEventListener("mousemove", x), window.addEventListener("mouseup", j));
    };
    return e.jsx("img", {
        ref: m,
        src: s,
        alt: "",
        draggable: !1,
        className: "mg-gal-zoom",
        style: { touchAction: "pan-x" },
        onDoubleClick: (r) => f(r.clientX, r.clientY),
        onMouseDown: o,
    });
}
function qe({ images: s, index: t, onClose: l }) {
    var o;
    const m = t != null && (s || []).length > 0;
    He(m, l);
    const n = h.useRef(null),
        [i, c] = h.useState(t || 0),
        [a, u] = h.useState(!1);
    if (
        (h.useLayoutEffect(() => {
            !m || !n.current || ((n.current.scrollLeft = (t || 0) * n.current.clientWidth), c(t || 0));
        }, [m, t]),
        h.useEffect(() => {
            if (!m) return;
            const r = (x) => {
                    const j = n.current;
                    j &&
                        j.scrollTo({
                            left: (Math.round(j.scrollLeft / j.clientWidth) + x) * j.clientWidth,
                            behavior: "smooth",
                        });
                },
                d = (x) => {
                    x.key === "ArrowRight" ? r(1) : x.key === "ArrowLeft" ? r(-1) : x.key === "Escape" && l();
                };
            return (window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d));
        }, [m, l]),
        !m)
    )
        return null;
    const v = (r) => {
            const d = r.currentTarget,
                x = Math.round(d.scrollLeft / Math.max(1, d.clientWidth));
            x !== i && c(x);
        },
        f = (o = s[i]) == null ? void 0 : o.label;
    return Ue.createPortal(
        e.jsxs("div", {
            className: "mg-gal",
            role: "dialog",
            "aria-label": "查看图片",
            children: [
                e.jsxs("div", {
                    className: "mg-gal-top",
                    children: [
                        e.jsxs("span", {
                            className: "mg-gal-n",
                            children: [i + 1, " / ", s.length, f ? e.jsx("em", { children: f }) : null],
                        }),
                        e.jsx("button", {
                            type: "button",
                            className: "mg-gal-x",
                            onClick: l,
                            "aria-label": "关闭",
                        }),
                    ],
                }),
                e.jsx("div", {
                    className: `mg-gal-track${a ? " zoomed" : ""}`,
                    ref: n,
                    onScroll: v,
                    children: s.map((r, d) =>
                        e.jsx(
                            "div",
                            {
                                className: "mg-gal-slide",
                                onClick: (x) => {
                                    x.target === x.currentTarget && !a && l();
                                },
                                children: e.jsx(Ts, {
                                    src: r.src,
                                    active: d === i,
                                    onZoom: d === i ? u : void 0,
                                }),
                            },
                            d,
                        ),
                    ),
                }),
                e.jsx("p", {
                    className: "mg-gal-hint",
                    children: a ? "拖动查看 · 双击还原" : "双指或双击放大",
                }),
                s.length > 1 &&
                    e.jsx("div", {
                        className: "mg-gal-dots",
                        "aria-hidden": !0,
                        children: s.map((r, d) => e.jsx("i", { className: d === i ? "on" : "" }, d)),
                    }),
            ],
        }),
        document.body,
    );
}
const ne = (s) => {
        var t, l;
        return (
            {
                not_found: "没有这个账号。",
                no_such_user: "没有这个账号。",
                not_admin: "只有站主可以进行这项操作。",
                tavern_paused: "酒馆许可未开放，可在「设置 → 酒馆许可」中开启。",
            }[
                ((t = s == null ? void 0 : s.payload) == null ? void 0 : t.error) ||
                    (s == null ? void 0 : s.message)
            ] ||
            `操作失败（${((l = s == null ? void 0 : s.payload) == null ? void 0 : l.error) || (s == null ? void 0 : s.message) || "网络异常"}）`
        );
    },
    W = (s) => {
        if (!s) return "—";
        const t = new Date(s);
        return `${t.getMonth() + 1}/${t.getDate()}`;
    },
    we = (s) => (s >= 3600 ? `${(s / 3600).toFixed(1)} 小时` : `${Math.round((s || 0) / 60)} 分钟`);
function As(s) {
    if (!s) return "从未登录";
    const t = Math.max(0, (Date.now() - new Date(s).getTime()) / 1e3);
    return t < 120
        ? "刚刚"
        : t < 3600
          ? `${Math.round(t / 60)} 分钟前`
          : t < 86400
            ? `${Math.round(t / 3600)} 小时前`
            : `${Math.round(t / 86400)} 天前`;
}
function Oe({ items: s, value: t, onChange: l }) {
    return e.jsx("div", {
        className: "mg-seg",
        children: s.map(([m, n]) =>
            e.jsx(
                "button",
                { type: "button", className: t === m ? "on" : "", onClick: () => l(m), children: n },
                m,
            ),
        ),
    });
}
function Rs({ u: s, onAct: t, paused: l = !1, materials: m = [] }) {
    q();
    const [n, i] = h.useState(null),
        [c, a] = h.useState(null);
    return (
        h.useEffect(() => {
            s.files &&
                !s.tavern_ok_at &&
                We(s.handle)
                    .then((u) => i(u.images || []))
                    .catch(() => i([]));
        }, [s.handle, s.files]),
        e.jsxs("div", {
            className: "mg-it mg-tv",
            children: [
                e.jsxs("span", {
                    className: "tt",
                    children: [
                        e.jsx("b", { children: s.display_handle || s.handle }),
                        e.jsx("small", {
                            children: s.tavern_ok_at
                                ? `开通于 ${W(s.tavern_ok_at)}`
                                : `申请于 ${W(s.tavern_requested_at)}`,
                        }),
                        !s.tavern_ok_at &&
                        s.tavern_request_answers &&
                        Object.keys(s.tavern_request_answers).length
                            ? e.jsx("span", {
                                  className: "mg-tv-ans",
                                  children: Object.entries(s.tavern_request_answers).map(([u, v]) => {
                                      var f;
                                      return e.jsxs(
                                          "span",
                                          {
                                              children: [
                                                  e.jsx("em", {
                                                      children:
                                                          ((f = m.find((o) => o.id === u)) == null
                                                              ? void 0
                                                              : f.label) || "其他",
                                                  }),
                                                  v,
                                              ],
                                          },
                                          u,
                                      );
                                  }),
                              })
                            : !s.tavern_ok_at && s.tavern_request_note
                              ? e.jsx("span", { className: "mg-tv-note", children: s.tavern_request_note })
                              : null,
                        !s.tavern_ok_at &&
                            s.files > 0 &&
                            e.jsx("span", {
                                className: "mg-thumbs",
                                children: n
                                    ? n.map((u, v) =>
                                          e.jsx(
                                              "button",
                                              {
                                                  type: "button",
                                                  onClick: () => a(v),
                                                  children: e.jsx("img", { src: u, alt: "" }),
                                              },
                                              v,
                                          ),
                                      )
                                    : Array.from({ length: s.files }, (u, v) => e.jsx("i", {}, v)),
                            }),
                        !s.tavern_ok_at && !s.files
                            ? e.jsx("span", { className: "mg-tv-note muted", children: "未附截图" })
                            : null,
                    ],
                }),
                s.tavern_ok_at
                    ? e.jsx("button", {
                          type: "button",
                          className: "mg-link danger",
                          onClick: () => t(s, "revoke"),
                          children: "收回",
                      })
                    : e.jsxs("span", {
                          className: "mg-tv-acts",
                          children: [
                              e.jsx("button", {
                                  type: "button",
                                  className: "mg-link",
                                  onClick: () => t(s, "reject"),
                                  children: "不通过",
                              }),
                              l
                                  ? e.jsx("span", { className: "mg-tv-paused", children: "暂停开通" })
                                  : e.jsx("button", {
                                        type: "button",
                                        className: "mg-mini",
                                        onClick: () => t(s, "approve"),
                                        children: "通过",
                                    }),
                          ],
                      }),
                e.jsx(qe, { images: (n || []).map((u) => ({ src: u })), index: c, onClose: () => a(null) }),
            ],
        })
    );
}
const qs = (s) => z(s.tavern_requested_at),
    Os = (s) => z(s.tavern_ok_at);
function Bs() {
    const s = q(),
        [t, l] = h.useState(null),
        [m, n] = h.useState(!1),
        [i, c] = h.useState([]),
        [a, u] = h.useState("waiting"),
        [v, f] = h.useState(!1),
        [o, r] = h.useState(null),
        d = () =>
            Ge()
                .then((g) => {
                    (l(g.users || []), n(!!g.paused), c(g.materials || []));
                })
                .catch((g) => s(ne(g), "error"));
    h.useEffect(() => {
        d();
    }, []);
    const x = async (g, _) => {
            try {
                (await Ke(g, _),
                    s(
                        {
                            approve: `已为 ${g} 开通`,
                            revoke: `已收回 ${g} 的许可`,
                            reject: "已标记为不通过，对方可以重新申请",
                        }[_],
                    ),
                    d());
            } catch (p) {
                s(ne(p), "error");
            }
        },
        j = (t || []).filter((g) => !g.tavern_ok_at),
        N = a === "waiting" ? j : (t || []).filter((g) => g.tavern_ok_at);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Oe, {
                value: a,
                onChange: u,
                items: [
                    ["waiting", `待审${j.length ? ` ${j.length}` : ""}`],
                    ["ok", "已开通"],
                ],
            }),
            m &&
                e.jsx("p", {
                    className: "mg-note",
                    children:
                        "酒馆许可未开放：待审的申请保留，暂不能通过或直接开通；不通过、收回照常可用。站主可在「设置 → 酒馆许可」中开启。",
                }),
            (!t || !N.length) &&
                e.jsxs("div", {
                    className: "mg-grp mg-gap",
                    children: [
                        !t &&
                            e.jsx("div", {
                                className: "mg-it",
                                children: e.jsx("span", { className: "tt muted", children: "正在读取…" }),
                            }),
                        t &&
                            !N.length &&
                            e.jsx("div", {
                                className: "mg-it",
                                children: e.jsx("span", {
                                    className: "tt muted",
                                    children: a === "waiting" ? "没有待审核的申请。" : "还没有开通的账号。",
                                }),
                            }),
                    ],
                }),
            !!N.length &&
                e.jsx(ue, {
                    items: N,
                    groupOf: a === "waiting" ? qs : Os,
                    resetKey: a,
                    keyOf: (g) => g.handle,
                    render: (g) =>
                        e.jsx(Rs, {
                            u: g,
                            paused: m,
                            materials: i,
                            onAct: (_, p) => (p === "approve" ? x(_.handle, p) : r({ u: _, action: p })),
                        }),
                }),
            !m &&
                e.jsx("div", {
                    className: "mg-grp mg-gap",
                    children: e.jsxs("button", {
                        type: "button",
                        className: "mg-it btn",
                        onClick: () => f(!0),
                        children: [
                            e.jsx("span", { className: "mg-no add", children: "+" }),
                            e.jsxs("span", {
                                className: "tt",
                                children: ["直接开通", e.jsx("small", { children: "不需要对方先申请" })],
                            }),
                        ],
                    }),
                }),
            e.jsx("p", {
                className: "mg-note",
                children:
                    "开通后，该账号可以导入和导出酒馆格式的角色卡。LiToT 自己格式的角色卡不受影响。申请附带的截图在审核结束后删除。",
            }),
            e.jsx(P, {
                open: v,
                onClose: () => f(!1),
                title: "直接开通",
                label: "用户名",
                placeholder: "需要开通的账号",
                confirmLabel: "开通",
                onSave: (g) => x(g.toLowerCase(), "approve"),
            }),
            e.jsx(V, {
                open: !!o,
                onClose: () => r(null),
                title:
                    (o == null ? void 0 : o.action) === "revoke"
                        ? `收回 ${o == null ? void 0 : o.u.handle} 的许可？`
                        : `${(o == null ? void 0 : o.u.handle) || ""} 的申请不通过？`,
                message:
                    (o == null ? void 0 : o.action) === "revoke"
                        ? "收回后该账号无法再导入、导出酒馆格式的角色卡，已导入的角色不受影响。"
                        : "申请和截图会被清除，对方可以重新提交申请。",
                confirm: {
                    label: (o == null ? void 0 : o.action) === "revoke" ? "收回" : "不通过",
                    destructive: !0,
                    onClick: () => x(o.u.handle, o.action),
                },
            }),
        ],
    });
}
const Qs = [
        ["recent", "最近活跃"],
        ["online", "在线时长"],
        ["new", "新注册"],
        ["risk", "即将回收"],
    ],
    Is = [
        [36e3, "b4", "10 小时以上"],
        [7200, "b3", "2–10 小时"],
        [1, "b2", "不足 2 小时"],
        [0, "b1", "没有在线记录"],
    ],
    Fs = {
        recent: (s) => (s.online_now ? ["now", "此刻在线"] : z(s.last_active, { empty: "从未登录" })),
        new: (s) => z(s.created_at),
        risk: (s) => z(s.created_at),
        online: (s) => {
            const t = s.online_15d || 0,
                l = Is.find(([m]) => t >= m);
            return [l[1], `近 15 天在线 ${l[2]}`];
        },
    };
function Ps() {
    const s = q(),
        [t, l] = h.useState(""),
        [m, n] = h.useState("recent"),
        [i, c] = h.useState(null),
        [a, u] = h.useState(null),
        v = () =>
            Ve(t.trim(), m)
                .then((o) => c(o.users || []))
                .catch((o) => s(ne(o), "error"));
    h.useEffect(() => {
        const o = setTimeout(v, 250);
        return () => clearTimeout(o);
    }, [t, m]);
    const f = async (o, r) => {
        try {
            (await o(), s(r), v());
        } catch (d) {
            s(ne(d), "error");
        }
    };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("input", {
                className: "mg-ipt mg-search",
                value: t,
                onChange: (o) => l(o.target.value),
                placeholder: "搜索用户名",
                autoCapitalize: "none",
                autoCorrect: "off",
                spellCheck: !1,
            }),
            e.jsx(Oe, { value: m, onChange: n, items: Qs }),
            e.jsxs("div", {
                className: "mg-lab",
                children: [
                    "ACCOUNTS",
                    e.jsx("b", { children: i ? `${i.length}${i.length >= 200 ? "+" : ""} 个账号` : "账号" }),
                ],
            }),
            (!i || !i.length) &&
                e.jsxs("div", {
                    className: "mg-grp",
                    children: [
                        !i &&
                            e.jsx("div", {
                                className: "mg-it",
                                children: e.jsx("span", { className: "tt muted", children: "正在读取…" }),
                            }),
                        i &&
                            !i.length &&
                            e.jsx("div", {
                                className: "mg-it",
                                children: e.jsx("span", { className: "tt muted", children: "没有找到。" }),
                            }),
                    ],
                }),
            !!(i != null && i.length) &&
                e.jsx(ue, {
                    items: i,
                    groupOf: Fs[m],
                    resetKey: `${m}:${t.trim()}`,
                    keyOf: (o) => o.handle,
                    render: (o) =>
                        e.jsxs("button", {
                            type: "button",
                            className: "mg-it btn",
                            onClick: () => u(o),
                            children: [
                                e.jsx("span", {
                                    className: `mg-online${o.online_now ? " on" : ""}`,
                                    "aria-label": o.online_now ? "在线" : "离线",
                                }),
                                e.jsxs("span", {
                                    className: "tt",
                                    children: [
                                        e.jsx("b", { children: o.handle }),
                                        e.jsxs("small", {
                                            children: [
                                                o.online_now ? "在线" : `最后活跃 ${As(o.last_active)}`,
                                                " · 15 天在线 ",
                                                we(o.online_15d),
                                                " · ",
                                                o.devices,
                                                " 台设备",
                                            ],
                                        }),
                                    ],
                                }),
                                o.at_risk
                                    ? e.jsx(X, { children: "即将回收" })
                                    : o.tavern_ok_at
                                      ? e.jsx(X, { children: "酒馆" })
                                      : null,
                            ],
                        }),
                }),
            e.jsx("p", {
                className: "mg-note",
                children:
                    "「在线」指最近 2 分钟内有心跳。「即将回收」指注册满 15 天、近 15 天累计在线不足 2 小时的账号，每天自动清理时会被注销。",
            }),
            e.jsx(Me, {
                open: !!a,
                onClose: () => u(null),
                message: a
                    ? `${a.handle} · 注册于 ${W(a.created_at)} · 15 天在线 ${we(a.online_15d)}`
                    : void 0,
                actions: a
                    ? [
                          !a.is_admin &&
                              a.devices > 0 && {
                                  label: "让该账号的所有设备退出登录",
                                  destructive: !0,
                                  onClick: () => f(() => ze(a.handle), "已退出登录，下次打开时回到登录页"),
                              },
                          a.tavern_ok_at
                              ? {
                                    label: "收回酒馆角色卡许可",
                                    destructive: !0,
                                    onClick: () => f(() => ve(a.handle, !1), "已收回"),
                                }
                              : {
                                    label: "开通酒馆角色卡许可",
                                    onClick: () => f(() => ve(a.handle, !0), "已开通"),
                                },
                          {
                              label: "复制用户名",
                              onClick: () => {
                                  try {
                                      (navigator.clipboard.writeText(a.handle), s("已复制"));
                                  } catch {
                                      s(a.handle);
                                  }
                              },
                          },
                      ].filter(Boolean)
                    : [],
            }),
        ],
    });
}
function Ys() {
    const s = q(),
        [t, l] = h.useState(""),
        [m, n] = h.useState(!1),
        [i, c] = h.useState(null),
        a = /^[a-z0-9_.-]{3,32}$/.test(t.trim().toLowerCase()),
        u = async () => {
            if (!(!a || m)) {
                (n(!0), c(null));
                try {
                    c(await Xe(t.trim().toLowerCase()));
                } catch (f) {
                    s(ne(f), "error");
                }
                n(!1);
            }
        };
    let v = null;
    if (i) {
        const f = Math.round((i.required_seconds || 7200) / 60),
            o = i.window_days || 15;
        if (i.exists) {
            const r = i.account || {},
                d = Math.floor((r.online_15d || 0) / 60),
                [x, j, N] = r.in_grace
                    ? [
                          "ok",
                          "账号正常 · 新账号保护期内",
                          `注册于 ${W(r.created_at)}，注册不满 ${o} 天不会被回收。近 ${o} 天在线 ${d} 分钟，当前登录设备 ${r.live_sessions} 台。`,
                      ]
                    : r.at_risk
                      ? [
                            "warn",
                            "账号正常 · 即将被回收",
                            `近 ${o} 天在线 ${d} 分钟，不足 ${f} 分钟，请提醒对方尽快登录并保持在线。当前登录设备 ${r.live_sessions} 台，最近活跃 ${W(r.last_seen_at)}。`,
                        ]
                      : [
                            "ok",
                            "账号正常",
                            `近 ${o} 天在线 ${d} 分钟，已达到保活要求。当前登录设备 ${r.live_sessions} 台，最近活跃 ${W(r.last_seen_at)}。`,
                        ];
            v = {
                tone: x,
                title: j,
                body: N,
                next: "无法登录时多为密码错误或登录设备已满：可在「发码 → 重置码」为该账号生成重置码。",
            };
        } else if (i.retired) {
            const r = i.retired;
            v = {
                tone: "warn",
                title: "账号已被系统注销",
                body: `注销于 ${W(r.retired_at)}，当时近 ${o} 天在线 ${Math.round((r.online_seconds || 0) / 60)} 分钟。${r.restored_at ? `已于 ${W(r.restored_at)} 恢复过一次。` : ""}`,
                next: "可在「发码 → 重置码」为该用户名生成恢复码，使用后账号即可恢复，对方设备上的数据不受影响。",
            };
        } else
            v = {
                tone: "bad",
                title: "没有找到该账号，也没有注销记录",
                body: "可能是用户名记错（不区分大小写、不含空格），或账号在注销记录功能上线前已被清理，两种情况无法区分。",
                next: "处理方式相同：发一张新注册码，请对方用同一个用户名重新注册。对方设备上的数据不受影响。",
            };
    }
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("div", {
                className: "mg-grp mg-gap",
                children: e.jsx("div", {
                    className: "mg-it",
                    children: e.jsx("input", {
                        className: "mg-ipt bare",
                        value: t,
                        onChange: (f) => l(f.target.value),
                        placeholder: "对方提供的用户名",
                        autoCapitalize: "none",
                        autoCorrect: "off",
                        spellCheck: !1,
                        onKeyDown: (f) => {
                            f.key === "Enter" && u();
                        },
                    }),
                }),
            }),
            e.jsx("button", {
                type: "button",
                className: "mg-btn mg-gap",
                disabled: !a || m,
                onClick: u,
                children: m ? "正在查询…" : "查询",
            }),
            v &&
                e.jsxs("div", {
                    className: `mg-result ${v.tone}`,
                    children: [
                        e.jsxs("b", { children: [i.handle, " · ", v.title] }),
                        e.jsx("p", { children: v.body }),
                        e.jsx("p", { className: "next", children: v.next }),
                    ],
                }),
            e.jsx("p", {
                className: "mg-note",
                children:
                    "有人反馈无法登录时，先在这里查清是哪一种情况，再决定发重置码、恢复码还是新注册码。",
            }),
        ],
    });
}
const Us = [
    ["list", "账号列表"],
    ["lookup", "账号查询"],
];
function Hs({ tab: s = "list" }) {
    return s === "list" ? e.jsx(Ps, {}) : e.jsx(Ys, {});
}
const Ws = {
        quota_empty: "名额已用完，请联系站主追加。",
        already_reviewed: "这份申请已经处理过了。",
        reason_required: "请填写原因。",
        no_such_user: "没有这个账号。",
        is_owner: "站主不需要添加为管理员。",
        bad_handle: "用户名格式不正确。",
        not_revokable: "已使用的码不能撤回。",
        not_staff: "当前账号没有管理权限。",
        not_owner: "只有站主可以进行这项操作。",
        review_name_required: "请先设置审核名称。",
        name_required: "请填写审核名称。",
        name_taken: "这个审核名称已被使用。",
        contact_blocked: "该 QQ 号已被列入黑名单，不能通过。",
        bad_contact: "QQ 号格式不正确。",
        not_found: "没有找到这条记录。",
        bad_ip: "IP 地址格式不正确。",
        bad_url: "地址必须以 https 开头。",
        bad_subscription: "本机推送订阅失败。",
        push_not_configured: "服务器尚未配置推送密钥。",
    },
    E = (s) => {
        var t, l;
        return (
            Ws[
                ((t = s == null ? void 0 : s.payload) == null ? void 0 : t.error) ||
                    (s == null ? void 0 : s.message)
            ] ||
            `操作失败（${((l = s == null ? void 0 : s.payload) == null ? void 0 : l.error) || (s == null ? void 0 : s.message) || "网络异常"}）`
        );
    },
    Gs = (s) => {
        if (!s) return "—";
        const t = new Date(s);
        return `${t.getMonth() + 1}/${t.getDate()}`;
    },
    de = (s) => {
        if (!s) return "—";
        const t = new Date(s);
        return `${t.getMonth() + 1}/${t.getDate()} ${J(t.getHours())}:${J(t.getMinutes())}`;
    },
    U = (s) => {
        const t = Number(s) || 0;
        return t >= 1 << 30 ? `${(t / (1 << 30)).toFixed(1)} GB` : `${Math.round(t / (1 << 20))} MB`;
    },
    Ks = {
        overview: e.jsx("svg", {
            viewBox: "0 0 24 24",
            children: e.jsx("path", { d: "M5 19V12M10 19V6M15 19v-9M20 19v-5" }),
        }),
        review: e.jsxs("svg", {
            viewBox: "0 0 24 24",
            children: [
                e.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "3.5" }),
                e.jsx("path", { d: "M8.5 12.2l2.4 2.4 4.6-5" }),
            ],
        }),
        codes: e.jsxs("svg", {
            viewBox: "0 0 24 24",
            children: [
                e.jsx("path", {
                    d: "M3.5 7.5a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 1.5 1.5v2.1a2.4 2.4 0 0 0 0 4.8v2.1a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5v-2.1a2.4 2.4 0 0 0 0-4.8z",
                }),
                e.jsx("path", { d: "M15 7.5v1.4M15 11.3v1.4M15 15.1v1.4" }),
            ],
        }),
        accounts: e.jsxs("svg", {
            viewBox: "0 0 24 24",
            children: [
                e.jsx("circle", { cx: "12", cy: "8.5", r: "3.5" }),
                e.jsx("path", { d: "M5 19.5c.8-3.4 3.6-5.5 7-5.5s6.2 2.1 7 5.5" }),
            ],
        }),
        settings: e.jsxs("svg", {
            viewBox: "0 0 24 24",
            children: [
                e.jsx("path", { d: "M4 7h9M17 7h3M4 17h3M11 17h9" }),
                e.jsx("circle", { cx: "15", cy: "7", r: "2" }),
                e.jsx("circle", { cx: "9", cy: "17", r: "2" }),
            ],
        }),
    },
    Vs = { overview: "概览", review: "审核", codes: "发码", accounts: "账号", settings: "设置" };
function ae({ title: s, sub: t, role: l, onBack: m, right: n }) {
    return e.jsxs("div", {
        className: "mg-top",
        children: [
            e.jsx("button", { type: "button", className: "mg-close", onClick: m, "aria-label": "返回桌面" }),
            e.jsxs("div", {
                className: "mg-top-r",
                children: [
                    e.jsx("h2", { children: s }),
                    n || e.jsx("span", { className: "mg-role", children: l === "owner" ? "站主" : "管理员" }),
                ],
            }),
            t ? e.jsx("div", { className: "mg-sub", children: t }) : null,
        ],
    });
}
const T = ({ en: s, children: t }) =>
    e.jsxs("div", { className: "mg-lab", children: [s, e.jsx("b", { children: t })] });
function G({ items: s, value: t, onChange: l }) {
    return e.jsx("div", {
        className: "mg-seg",
        children: s.map(([m, n]) =>
            e.jsx(
                "button",
                { type: "button", className: t === m ? "on" : "", onClick: () => l(m), children: n },
                m,
            ),
        ),
    });
}
function me({ title: s, sub: t, used: l, value: m, onChange: n, step: i = 1 }) {
    const c = m < 0,
        [a, u] = h.useState(c ? Math.max(10, l + 10) : m);
    return e.jsxs("div", {
        className: "mg-it",
        children: [
            e.jsxs("span", {
                className: "tt",
                children: [s, e.jsx("small", { children: t || `已发 ${l}${c ? " · 在任期间不限" : ""}` })],
            }),
            !c &&
                e.jsx(Be, {
                    value: m,
                    min: 0,
                    step: i,
                    onChange: (v) => {
                        (u(v), n(v));
                    },
                }),
            e.jsx("span", {
                className: "mg-perm",
                children: e.jsx("button", {
                    type: "button",
                    className: c ? "on" : "",
                    "aria-pressed": c,
                    onClick: () => n(c ? Math.max(a, l) : -1),
                    children: "不限",
                }),
            }),
        ],
    });
}
function Be({ value: s, onChange: t, step: l = 1, min: m = 0, max: n = 99999 }) {
    const [i, c] = h.useState(null),
        a = () => {
            if (i == null) return;
            const u = parseInt(String(i).replace(/[^\d]/g, ""), 10);
            (c(null), Number.isFinite(u) && t(Math.min(n, Math.max(m, u))));
        };
    return e.jsxs("span", {
        className: "mg-step",
        children: [
            e.jsx("button", {
                type: "button",
                "aria-label": "减少",
                onClick: () => t(Math.max(m, s - l)),
                children: "−",
            }),
            e.jsx("input", {
                className: "mg-step-in",
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                "aria-label": "数量",
                value: i ?? String(s),
                onFocus: (u) => {
                    (c(String(s)), requestAnimationFrame(() => u.target.select()));
                },
                onChange: (u) => c(u.target.value.replace(/[^\d]/g, "").slice(0, 5)),
                onBlur: a,
                onKeyDown: (u) => {
                    u.key === "Enter" && u.currentTarget.blur();
                },
                style: { width: `${Math.max(2, String(i ?? s).length) + 1.6}ch` },
            }),
            e.jsx("button", {
                type: "button",
                "aria-label": "增加",
                onClick: () => t(Math.min(n, s + l)),
                children: "+",
            }),
        ],
    });
}
function Z({ title: s, back: t = "设置", onBack: l, right: m, children: n }) {
    return e.jsxs("div", {
        className: "mg-sub-page",
        children: [
            e.jsxs("div", {
                className: "mg-nav",
                children: [
                    e.jsx("button", { type: "button", className: "mg-back", onClick: l, children: t }),
                    e.jsx("b", { children: s }),
                    m ? e.jsx("span", { className: "mg-nav-r", children: m }) : null,
                ],
            }),
            e.jsx("div", { className: "mg-scroll", children: n }),
        ],
    });
}
function zs({ role: s, me: t, onBack: l, onChanged: m }) {
    var p;
    const n = q(),
        [i, c] = h.useState(!1),
        [a, u] = h.useState(null),
        [v, f] = h.useState(null),
        [o, r] = h.useState(null),
        d = () => {
            (js()
                .then(u)
                .catch((b) => n(E(b), "error")),
                xe()
                    .then(r)
                    .catch(() => {}));
        };
    h.useEffect(() => {
        d();
        const b = setInterval(d, 6e4);
        return () => clearInterval(b);
    }, []);
    const x = h.useMemo(() => {
            const b = new Date();
            b.setMinutes(0, 0, 0);
            const k = new Map(
                ((a == null ? void 0 : a.hourly) || []).map((M) => [new Date(M.hour).getTime(), M.users]),
            );
            return Array.from({ length: 24 }, (M, D) => {
                const C = b.getTime() - (23 - D) * 36e5;
                return { t: C, n: k.get(C) || 0 };
            });
        }, [a]),
        j = Math.max(1, ...x.map((b) => b.n)),
        N = x[v ?? 23],
        g = a == null ? void 0 : a.server;
    if (i)
        return e.jsx(et, {
            onBack: () => {
                (c(!1), m == null || m());
            },
        });
    const _ = t == null ? void 0 : t.guard;
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(ae, {
                title: "概览",
                role: s,
                onBack: l,
                sub: a ? `지금 ${a.online.users}명이 함께 있어요` : " ",
            }),
            e.jsxs("div", {
                className: "mg-scroll",
                children: [
                    e.jsxs("div", {
                        className: "mg-tiles",
                        children: [
                            e.jsxs("div", {
                                className: "mg-tile",
                                children: [
                                    e.jsx("span", { children: "ONLINE" }),
                                    e.jsx("em", { children: "此刻在线" }),
                                    e.jsx("b", { children: (a == null ? void 0 : a.online.users) ?? "—" }),
                                    e.jsxs("small", {
                                        children: [
                                            "共 ",
                                            (a == null ? void 0 : a.users.total) ?? "—",
                                            " 个账号",
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "mg-tile",
                                children: [
                                    e.jsx("span", { children: "24 HOURS" }),
                                    e.jsx("em", { children: "近 24 小时活跃" }),
                                    e.jsx("b", { children: (a == null ? void 0 : a.active.d1) ?? "—" }),
                                    e.jsxs("small", {
                                        children: ["新注册 ", (a == null ? void 0 : a.users.new_24h) ?? "—"],
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "mg-tile",
                                children: [
                                    e.jsx("span", { children: "REVIEW" }),
                                    e.jsx("em", { children: "待审核" }),
                                    e.jsx("b", { children: (t == null ? void 0 : t.pending) ?? "—" }),
                                    e.jsxs("small", {
                                        children: [
                                            "本轮通过 ",
                                            ((p = o == null ? void 0 : o.counts) == null
                                                ? void 0
                                                : p.approved) ?? "—",
                                            " / ",
                                            (o == null ? void 0 : o.quota) < 0
                                                ? "不限"
                                                : ((o == null ? void 0 : o.quota) ?? "—"),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "mg-tile",
                                children: [
                                    e.jsx("span", { children: "7 DAYS" }),
                                    e.jsx("em", { children: "近 7 天活跃" }),
                                    e.jsx("b", { children: (a == null ? void 0 : a.active.d7) ?? "—" }),
                                    e.jsxs("small", {
                                        children: ["快被回收 ", (a == null ? void 0 : a.at_risk) ?? "—"],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx(T, { en: "SECURITY", children: "安全" }),
                    e.jsx("div", {
                        className: "mg-grp",
                        children: e.jsxs("button", {
                            type: "button",
                            className: "mg-it btn",
                            onClick: () => c(!0),
                            children: [
                                e.jsx("i", {
                                    className: `mg-gd-dot ${(_ == null ? void 0 : _.status) || "ok"}`,
                                    "aria-hidden": "true",
                                }),
                                e.jsxs("span", {
                                    className: "tt",
                                    children: [
                                        e.jsx("b", {
                                            children: _
                                                ? _.status === "danger"
                                                    ? "存在危险"
                                                    : _.status === "warn"
                                                      ? "需要留意"
                                                      : "运行正常"
                                                : "正在读取",
                                        }),
                                        e.jsx("small", {
                                            children:
                                                _ != null && _.open
                                                    ? `${_.open} 条提醒未处理`
                                                    : "异常访问会被自动拦截，出现问题时会通知你。",
                                        }),
                                    ],
                                }),
                                e.jsx("span", { className: "mg-chev" }),
                            ],
                        }),
                    }),
                    e.jsxs(Ee, {
                        title: "HOURLY · 24H",
                        className: "mg-win",
                        children: [
                            e.jsxs("div", {
                                className: "mg-chart-h",
                                children: [
                                    e.jsx("span", { children: "每小时在线人数" }),
                                    e.jsx("b", {
                                        children: N ? `${new Date(N.t).getHours()}:00 · ${N.n} 人` : "",
                                    }),
                                ],
                            }),
                            e.jsx("div", {
                                className: "mg-bars",
                                role: "img",
                                "aria-label": `过去 24 小时每小时在线人数，最高 ${j} 人`,
                                children: x.map((b, k) =>
                                    e.jsx(
                                        "button",
                                        {
                                            type: "button",
                                            className: (v ?? 23) === k ? "k" : "",
                                            style: { height: `${b.n ? Math.max(6, (b.n / j) * 100) : 4}%` },
                                            onClick: () => f(k),
                                            "aria-label": `${new Date(b.t).getHours()} 点 ${b.n} 人`,
                                        },
                                        b.t,
                                    ),
                                ),
                            }),
                            e.jsxs("div", {
                                className: "mg-axis",
                                children: [
                                    e.jsxs("span", { children: [new Date(x[0].t).getHours(), ":00"] }),
                                    e.jsxs("span", { children: [new Date(x[6].t).getHours(), ":00"] }),
                                    e.jsxs("span", { children: [new Date(x[12].t).getHours(), ":00"] }),
                                    e.jsxs("span", { children: [new Date(x[18].t).getHours(), ":00"] }),
                                    e.jsx("span", { children: "NOW" }),
                                ],
                            }),
                        ],
                    }),
                    (a == null ? void 0 : a.community) &&
                        a.community.warn &&
                        e.jsxs("div", {
                            className: "mg-alert",
                            children: [
                                e.jsxs("b", {
                                    children: [
                                        "社区存储已用 ",
                                        Math.round((a.community.used / a.community.cap) * 100),
                                        "%",
                                    ],
                                }),
                                e.jsx("span", {
                                    children:
                                        "达到上限后所有人将无法发布带图片或附件的内容。可以删除部分旧帖，或提前更换服务器。",
                                }),
                            ],
                        }),
                    e.jsx(T, { en: "SERVER", children: "服务器" }),
                    e.jsxs("div", {
                        className: "mg-grp",
                        children: [
                            (g == null ? void 0 : g.disk) &&
                                e.jsxs("div", {
                                    className: "mg-it",
                                    children: [
                                        e.jsx("span", { className: "tt", children: "硬盘" }),
                                        e.jsxs("span", {
                                            className: "v",
                                            children: [U(g.disk.total - g.disk.free), " / ", U(g.disk.total)],
                                        }),
                                    ],
                                }),
                            g &&
                                e.jsxs("div", {
                                    className: "mg-it",
                                    children: [
                                        e.jsx("span", { className: "tt", children: "内存" }),
                                        e.jsxs("span", {
                                            className: "v",
                                            children: [
                                                U(g.host.total_mem - g.host.free_mem),
                                                " / ",
                                                U(g.host.total_mem),
                                            ],
                                        }),
                                    ],
                                }),
                            g &&
                                e.jsxs("div", {
                                    className: "mg-it",
                                    children: [
                                        e.jsx("span", { className: "tt", children: "数据库" }),
                                        e.jsx("span", { className: "v", children: U(g.db_bytes) }),
                                    ],
                                }),
                            e.jsxs("div", {
                                className: "mg-it",
                                children: [
                                    e.jsxs("span", {
                                        className: "tt",
                                        children: [
                                            "前端版本",
                                            e.jsxs("small", { children: ["构建于 ", Ze] }),
                                        ],
                                    }),
                                    e.jsx("span", { className: "v mono", children: es }),
                                ],
                            }),
                            (a == null ? void 0 : a.community) &&
                                e.jsxs("div", {
                                    className: "mg-it",
                                    children: [
                                        e.jsxs("span", {
                                            className: "tt",
                                            children: [
                                                "社区存储",
                                                e.jsx("small", {
                                                    children: a.community.top.length
                                                        ? `占用最多：${a.community.top
                                                              .slice(0, 3)
                                                              .map((b) => `${b.handle} ${U(b.bytes)}`)
                                                              .join("、")}`
                                                        : "暂无上传",
                                                }),
                                            ],
                                        }),
                                        e.jsxs("span", {
                                            className: "v",
                                            children: [U(a.community.used), " / ", U(a.community.cap)],
                                        }),
                                    ],
                                }),
                            !g &&
                                e.jsx("div", {
                                    className: "mg-it",
                                    children: e.jsx("span", { className: "tt", children: "正在读取…" }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const Xs = { danger: "危险", warn: "注意", info: "记录" },
    Js = (s) => {
        const t = Math.max(0, (Date.now() - new Date(s).getTime()) / 1e3);
        return t < 60
            ? "刚刚"
            : t < 3600
              ? `${Math.floor(t / 60)} 分钟前`
              : t < 86400
                ? `${Math.floor(t / 3600)} 小时前`
                : de(s);
    },
    Zs = (s) => {
        const t = Math.max(0, Math.round((new Date(s).getTime() - Date.now()) / 6e4));
        return t >= 1440
            ? `${Math.round(t / 1440)} 天后解除`
            : t >= 60
              ? `${Math.round(t / 60)} 小时后解除`
              : `${Math.max(1, t)} 分钟后解除`;
    },
    ke = () => {
        var s, t;
        try {
            return !!(
                (t = (s = window.Capacitor) == null ? void 0 : s.isNativePlatform) != null && t.call(s)
            );
        } catch {
            return !1;
        }
    };
function et({ onBack: s }) {
    const t = q(),
        [l, m] = h.useState(null),
        [n, i] = h.useState(!1),
        [c, a] = h.useState(null),
        [u, v] = h.useState(!1),
        [f, o] = h.useState(""),
        r = () =>
            vs()
                .then(m)
                .catch((p) => t(E(p), "error"));
    h.useEffect(() => {
        r();
        const p = setInterval(() => {
            document.hidden || r();
        }, 3e4);
        return () => clearInterval(p);
    }, []);
    const d = async (p, b, k) => {
            o(p);
            try {
                const M = await b;
                (k && t(typeof k == "function" ? k(M) : k), await r());
            } catch (M) {
                t(E(M), "error");
            }
            o("");
        },
        x = async () => {
            o("push");
            try {
                const p = await fs(),
                    b = await bs(p == null ? void 0 : p.publicKey);
                if (!b.ok) {
                    (t(b.reason, "error"), o(""));
                    return;
                }
                (await Ns(b.subscription), t("本机已开启安全提醒"), await r());
            } catch (p) {
                t(E(p), "error");
            }
            o("");
        },
        j = (p) => {
            const b = (p == null ? void 0 : p.results) || [];
            if (!b.length) return "尚未设置通知方式";
            const k = b.filter((M) => M.ok).length;
            return k === b.length ? `已发送测试提醒（${k} 处）` : `${k} 处发送成功，${b.length - k} 处失败`;
        },
        N = (l == null ? void 0 : l.status) || "ok",
        g = (l == null ? void 0 : l.live) || {},
        _ = ((l == null ? void 0 : l.events) || []).filter((p) => !p.handled_at && p.level !== "info");
    return e.jsxs(Z, {
        title: "安全",
        back: "概览",
        onBack: s,
        right: _.length
            ? e.jsx("button", {
                  type: "button",
                  className: "mg-link",
                  disabled: f === "handled",
                  onClick: () => d("handled", ss(), "已全部标为已处理"),
                  children: "全部已处理",
              })
            : null,
        children: [
            !l && e.jsx("div", { className: "mg-empty", children: "正在读取…" }),
            l &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs("div", {
                            className: `mg-gd-hero ${N}`,
                            children: [
                                e.jsx("span", {
                                    className: "mg-gd-en",
                                    children:
                                        N === "danger" ? "ALERT" : N === "warn" ? "NOTICE" : "ALL CLEAR",
                                }),
                                e.jsx("b", {
                                    children:
                                        N === "danger" ? "存在危险" : N === "warn" ? "需要留意" : "运行正常",
                                }),
                                e.jsx("small", {
                                    children: _.length
                                        ? `${_.length} 条提醒未处理，处理后点右上角「全部已处理」。`
                                        : "最近 24 小时没有未处理的提醒。",
                                }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "mg-tiles",
                            children: [
                                e.jsxs("div", {
                                    className: "mg-tile",
                                    children: [
                                        e.jsx("span", { children: "REQUESTS" }),
                                        e.jsx("em", { children: "每分钟请求" }),
                                        e.jsx("b", { children: g.rpm ?? "—" }),
                                        e.jsxs("small", {
                                            children: [
                                                "平时约 ",
                                                g.usualRpm ?? "—",
                                                " · 近一小时峰值 ",
                                                g.rpmPeak ?? "—",
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "mg-tile",
                                    children: [
                                        e.jsx("span", { children: "BLOCKED" }),
                                        e.jsx("em", { children: "封禁中的地址" }),
                                        e.jsx("b", { children: l.bans.length }),
                                        e.jsxs("small", { children: ["近 24 小时共 ", l.bans24h, " 次"] }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "mg-tile",
                                    children: [
                                        e.jsx("span", { children: "MEMORY" }),
                                        e.jsx("em", { children: "后端内存" }),
                                        e.jsxs("b", {
                                            children: [
                                                g.memMb ?? "—",
                                                e.jsx("i", { className: "mg-gd-unit", children: "MB" }),
                                            ],
                                        }),
                                        e.jsx("small", {
                                            children: g.memLimitMb ? `上限 ${g.memLimitMb} MB` : "上限未知",
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "mg-tile",
                                    children: [
                                        e.jsx("span", { children: "LATENCY" }),
                                        e.jsx("em", { children: "处理延迟" }),
                                        e.jsxs("b", {
                                            children: [
                                                g.lagMs ?? "—",
                                                e.jsx("i", { className: "mg-gd-unit", children: "ms" }),
                                            ],
                                        }),
                                        e.jsxs("small", {
                                            children: [
                                                "报错 ",
                                                g.err ?? 0,
                                                " 次/分钟",
                                                g.diskFreePct != null ? ` · 硬盘余 ${g.diskFreePct}%` : "",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx(T, { en: "EVENTS", children: "提醒" }),
                        e.jsxs("div", {
                            className: "mg-grp",
                            children: [
                                !l.events.length &&
                                    e.jsx("div", {
                                        className: "mg-it",
                                        children: e.jsx("span", {
                                            className: "tt muted",
                                            children: "暂无记录。",
                                        }),
                                    }),
                                l.events.slice(0, 30).map((p) => {
                                    var b;
                                    return e.jsxs(
                                        "div",
                                        {
                                            className: `mg-it mg-gd-ev${p.handled_at ? " done" : ""}`,
                                            children: [
                                                e.jsx("i", {
                                                    className: `mg-gd-dot ${p.level}`,
                                                    "aria-label": Xs[p.level],
                                                }),
                                                e.jsxs("span", {
                                                    className: "tt",
                                                    children: [
                                                        e.jsx("b", { children: p.label }),
                                                        p.count > 1
                                                            ? e.jsxs("em", {
                                                                  className: "mg-tag",
                                                                  children: ["× ", p.count],
                                                              })
                                                            : null,
                                                        e.jsx("small", {
                                                            children: [
                                                                p.ip,
                                                                (b = p.detail) == null ? void 0 : b.reason,
                                                                Js(p.last_at),
                                                            ]
                                                                .filter(Boolean)
                                                                .join(" · "),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        p.id,
                                    );
                                }),
                            ],
                        }),
                        e.jsx(T, { en: "BLOCKED", children: "封禁中的地址" }),
                        e.jsxs("div", {
                            className: "mg-grp",
                            children: [
                                !l.bans.length &&
                                    e.jsx("div", {
                                        className: "mg-it",
                                        children: e.jsx("span", {
                                            className: "tt muted",
                                            children: "当前没有被封禁的地址。",
                                        }),
                                    }),
                                l.bans.map((p) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            type: "button",
                                            className: "mg-it btn",
                                            onClick: () => a(p),
                                            children: [
                                                e.jsxs("span", {
                                                    className: "tt",
                                                    children: [
                                                        e.jsx("b", { className: "mono", children: p.ip }),
                                                        p.manual
                                                            ? e.jsx("em", {
                                                                  className: "mg-tag",
                                                                  children: "手动",
                                                              })
                                                            : null,
                                                        e.jsxs("small", {
                                                            children: [p.reason, " · ", Zs(p.until)],
                                                        }),
                                                    ],
                                                }),
                                                e.jsx("span", { className: "v", children: "解除" }),
                                            ],
                                        },
                                        p.ip,
                                    ),
                                ),
                                e.jsxs("button", {
                                    type: "button",
                                    className: "mg-it btn",
                                    onClick: () => i(!0),
                                    children: [
                                        e.jsx("span", { className: "tt", children: "手动封禁一个地址" }),
                                        e.jsx("span", { className: "mg-chev" }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx("p", {
                            className: "mg-note",
                            children:
                                "封禁只拦截未登录的请求，已登录的用户不受影响，避免误伤共用网络出口的正常用户。",
                        }),
                        e.jsx(T, { en: "NOTIFY", children: "通知方式" }),
                        e.jsxs("div", {
                            className: "mg-grp",
                            children: [
                                e.jsxs("button", {
                                    type: "button",
                                    className: "mg-it btn",
                                    disabled: f === "push" || ke(),
                                    onClick: x,
                                    children: [
                                        e.jsxs("span", {
                                            className: "tt",
                                            children: [
                                                "本机推送",
                                                e.jsx("small", {
                                                    children: ke()
                                                        ? "App 内无法接收网页推送，请使用下方的提醒地址。"
                                                        : l.notify.pushReady
                                                          ? "在这台设备上接收安全提醒。"
                                                          : "服务器尚未配置推送密钥。",
                                                }),
                                            ],
                                        }),
                                        e.jsx("span", {
                                            className: "v",
                                            children:
                                                f === "push"
                                                    ? "正在开启"
                                                    : l.notify.push
                                                      ? `已开启 ${l.notify.push} 台`
                                                      : "开启",
                                        }),
                                    ],
                                }),
                                e.jsxs("button", {
                                    type: "button",
                                    className: "mg-it btn",
                                    onClick: () => v(!0),
                                    children: [
                                        e.jsxs("span", {
                                            className: "tt",
                                            children: [
                                                "提醒地址",
                                                e.jsx("small", {
                                                    children: l.notify.urlSet
                                                        ? l.notify.url
                                                        : "填写 Bark、Server酱 等服务提供的地址，可推送到手机或微信。",
                                                }),
                                            ],
                                        }),
                                        e.jsx("span", { className: "mg-chev" }),
                                    ],
                                }),
                                e.jsxs("button", {
                                    type: "button",
                                    className: "mg-it btn",
                                    disabled: f === "test",
                                    onClick: () => d("test", ts(), j),
                                    children: [
                                        e.jsx("span", { className: "tt", children: "发送测试提醒" }),
                                        e.jsx("span", {
                                            className: "v",
                                            children: f === "test" ? "正在发送" : "",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx("p", {
                            className: "mg-note",
                            children:
                                "危险级别的情况会立即通知；需要留意的情况同一类 30 分钟内最多通知一次，每小时最多 8 条。",
                        }),
                        e.jsx(T, { en: "RULES", children: "自动拦截规则" }),
                        e.jsx("div", {
                            className: "mg-grp",
                            children: (l.rules || []).map((p, b) =>
                                e.jsx(
                                    "div",
                                    {
                                        className: "mg-it",
                                        children: e.jsxs("span", {
                                            className: "tt",
                                            children: [
                                                p.label,
                                                e.jsxs("small", {
                                                    children: [
                                                        p.mins,
                                                        " 分钟内达到 ",
                                                        p.max,
                                                        " 次 · 暂封 ",
                                                        p.banMin >= 60
                                                            ? `${p.banMin / 60} 小时`
                                                            : `${p.banMin} 分钟`,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    },
                                    b,
                                ),
                            ),
                        }),
                        e.jsx("p", {
                            className: "mg-note",
                            children:
                                "同一地址 24 小时内再次触发时，封禁时长依次乘以 4，最长 24 小时。整站请求突增、报错增多、内存或硬盘不足、处理变慢、注册突增、多个地址同时异常时也会提醒。",
                        }),
                    ],
                }),
            e.jsx(P, {
                open: n,
                onClose: () => i(!1),
                title: "手动封禁",
                label: "IP 地址",
                placeholder: "例如 203.0.113.8",
                confirmLabel: "封禁 24 小时",
                note: "仅拦截该地址未登录的请求，24 小时后自动解除，也可以随时手动解除。",
                onSave: (p) => {
                    (i(!1), d("ban", ns(String(p).trim(), 24), "已封禁"));
                },
            }),
            e.jsx(P, {
                open: u,
                onClose: () => v(!1),
                title: "提醒地址",
                label: "地址",
                value: "",
                maxLength: 500,
                allowEmpty: !0,
                placeholder: "https://api.day.app/你的密钥/{title}/{body}",
                confirmLabel: "保存",
                note: "必须以 https 开头。地址中的 {title}、{body} 会替换为提醒的标题和内容；不含这两处时，以 JSON 方式发送。留空并保存即可取消。",
                onSave: (p) => {
                    (v(!1),
                        d(
                            "url",
                            as(String(p || "").trim()),
                            String(p || "").trim() ? "已保存提醒地址" : "已取消提醒地址",
                        ));
                },
            }),
            e.jsx(V, {
                open: !!c,
                onClose: () => a(null),
                title: "解除封禁",
                message: c ? `解除 ${c.ip} 的封禁？` : "",
                confirm: {
                    label: "解除",
                    onClick: () => {
                        const p = c == null ? void 0 : c.ip;
                        p && d("unban", ls(p), "已解除");
                    },
                },
            }),
        ],
    });
}
const st = ["截图无法辨认，请重新上传清晰的截图。", "材料与本轮要求不符。", "联系方式无法联系。"],
    tt = ["重复提交或批量申请。", "转卖或转让注册码。", "提交虚假材料。"];
function Qe({ open: s, onClose: t, onConfirm: l, busy: m, contact: n = "" }) {
    const [i, c] = h.useState("");
    return (
        h.useEffect(() => {
            s && c("");
        }, [s]),
        e.jsx(te, {
            open: s,
            onClose: t,
            title: "拉黑",
            bare: !0,
            maxWidth: 340,
            children: e.jsxs("div", {
                className: "mg-sheet",
                children: [
                    n
                        ? e.jsxs("div", {
                              className: "mg-blk-who",
                              children: [
                                  e.jsx("span", { children: "QQ 号" }),
                                  e.jsx("b", { className: "mono", children: n }),
                              ],
                          })
                        : null,
                    e.jsx("div", {
                        className: "mg-reasons",
                        children: tt.map((a) =>
                            e.jsx(
                                "button",
                                {
                                    type: "button",
                                    className: i === a ? "on" : "",
                                    onClick: () => c(a),
                                    children: a,
                                },
                                a,
                            ),
                        ),
                    }),
                    e.jsx("textarea", {
                        className: "mg-ipt ta",
                        rows: 2,
                        value: i,
                        onChange: (a) => c(a.target.value),
                        placeholder: "原因（选填，仅审核人员可见）",
                        maxLength: 200,
                    }),
                    e.jsx("button", {
                        type: "button",
                        className: "mg-btn danger",
                        disabled: m,
                        onClick: () => l(i.trim()),
                        children: "拉黑",
                    }),
                    e.jsx("p", {
                        className: "mg-note c",
                        children:
                            "拉黑后该 QQ 号不能再提交申请；待审的申请标为未通过，已通过但未注册的注册码将被收回。可在「黑名单」中取消。",
                    }),
                ],
            }),
        })
    );
}
function nt({ a: s, materials: t, onDone: l, onNeedName: m }) {
    var le;
    const n = q(),
        [i, c] = h.useState(!1),
        [a, u] = h.useState(!1),
        [v, f] = h.useState(null),
        [o, r] = h.useState(!1),
        [d, x] = h.useState(!1),
        [j, N] = h.useState(""),
        [g, _] = h.useState(null),
        [p, b] = Le(),
        [k, M] = h.useState(!1),
        D = () => ye(s.id).then(f);
    h.useEffect(() => {
        s.status === "pending" && D().catch(() => {});
    }, [s.id]);
    const C = async () => {
            M(!0);
            try {
                await D();
            } catch (w) {
                n(E(w), "error");
            }
            M(!1);
        },
        Q = (v == null ? void 0 : v.materials) || t || [],
        O = (le = v == null ? void 0 : v.application) == null ? void 0 : le.contact,
        S = h.useMemo(
            () =>
                Q.filter((w) => w.type === "image").flatMap((w) =>
                    ((v == null ? void 0 : v.images) || [])
                        .filter((L) => L.field === w.id)
                        .map((L) => ({ src: L.src, label: w.label, field: w.id })),
                ),
            [v, Q],
        ),
        B = (w) => {
            var y;
            const L =
                ((y = w == null ? void 0 : w.payload) == null ? void 0 : y.error) ||
                (w == null ? void 0 : w.message);
            if (L === "review_name_required") {
                m == null || m();
                return;
            }
            (n(E(w), "error"), (L === "already_reviewed" || L === "contact_blocked") && (x(!1), l()));
        },
        $ = async (w) => {
            r(!0);
            try {
                const L = await Re({ application_id: s.id, reason: w });
                (c(!1), n(L.revoked ? "已拉黑，未使用的注册码已收回" : "已拉黑"), l());
            } catch (L) {
                B(L);
            }
            r(!1);
        },
        A = async () => {
            r(!0);
            try {
                (await Ae(O || (await ye(s.id)).application.contact), n("已取消拉黑"), l());
            } catch (w) {
                n(E(w), "error");
            }
            r(!1);
        },
        Y = async () => {
            r(!0);
            try {
                const w = await Es(s.id);
                (n(`已通过，注册码 ${K(w.invite_code)}`), l());
            } catch (w) {
                B(w);
            }
            r(!1);
        },
        R = async () => {
            if (j.trim()) {
                r(!0);
                try {
                    (await Ls(s.id, j.trim()), x(!1), n("已标记为未通过"), l());
                } catch (w) {
                    B(w);
                }
                r(!1);
            }
        },
        ee = (w) => ((v == null ? void 0 : v.images) || []).filter((L) => L.field === w);
    return e.jsxs(Ee, {
        title: `No. ${Te(s.no)} · ROUND ${J(s.round)}`,
        className: "mg-win mg-rv",
        children: [
            e.jsxs("div", {
                className: "mg-rv-h",
                children: [
                    e.jsxs("div", {
                        children: [
                            e.jsxs("b", { className: "mono", children: [s.view_hint, "-····"] }),
                            e.jsxs("small", { children: [de(s.created_at), " 提交"] }),
                        ],
                    }),
                    e.jsxs("span", {
                        className: "mg-rv-pills",
                        children: [
                            s.blocked ? e.jsx(X, { children: "已拉黑" }) : null,
                            e.jsx(X, {
                                k: s.status === "approved",
                                children: s.status === "pending" ? "待审" : ys(s.status),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "mg-kv",
                children: [
                    e.jsx("span", { children: "联系方式" }),
                    e.jsx("b", {
                        children: e.jsxs("span", {
                            className: "mg-reveal",
                            children: [
                                O || s.contact,
                                O
                                    ? e.jsx("button", {
                                          type: "button",
                                          onClick: () => b(O, "c"),
                                          children: p === "c" ? "已复制" : "复制",
                                      })
                                    : s.status !== "pending" &&
                                      e.jsx("button", {
                                          type: "button",
                                          disabled: k,
                                          onClick: C,
                                          children: k ? "读取中" : "查看",
                                      }),
                            ],
                        }),
                    }),
                ],
            }),
            Q.filter((w) => w.id !== "contact").map((w) => {
                var L;
                return w.type === "image"
                    ? s.status === "pending" && s.files
                        ? e.jsxs(
                              "div",
                              {
                                  className: "mg-kv",
                                  children: [
                                      e.jsx("span", { children: w.label }),
                                      e.jsx("div", {
                                          className: "mg-thumbs",
                                          children: v
                                              ? ee(w.id).map((y, I) =>
                                                    e.jsx(
                                                        "button",
                                                        {
                                                            type: "button",
                                                            onClick: () =>
                                                                _(S.findIndex((F) => F.src === y.src)),
                                                            children: e.jsx("img", { src: y.src, alt: "" }),
                                                        },
                                                        I,
                                                    ),
                                                )
                                              : Array.from({ length: Math.min(3, s.files) }, (y, I) =>
                                                    e.jsx("i", {}, I),
                                                ),
                                      }),
                                  ],
                              },
                              w.id,
                          )
                        : null
                    : (L = s.answers) != null && L[w.id]
                      ? e.jsxs(
                            "div",
                            {
                                className: "mg-kv",
                                children: [
                                    e.jsx("span", { children: w.label }),
                                    e.jsx("b", { className: "p", children: s.answers[w.id] }),
                                ],
                            },
                            w.id,
                        )
                      : null;
            }),
            s.status !== "pending" &&
                e.jsxs("div", {
                    className: "mg-kv",
                    children: [
                        e.jsx("span", { children: "审核人员" }),
                        e.jsxs("b", {
                            children: [s.reviewer_name || s.reviewer || "—", " · ", de(s.reviewed_at)],
                        }),
                    ],
                }),
            s.status === "approved" &&
                e.jsxs("div", {
                    className: "mg-kv",
                    children: [
                        e.jsx("span", { children: "注册码" }),
                        e.jsxs("b", {
                            className: "mono",
                            children: [K(s.invite_code), s.registered ? " · 已注册" : " · 未使用"],
                        }),
                    ],
                }),
            s.status === "rejected" &&
                e.jsxs("div", {
                    className: "mg-kv",
                    children: [
                        e.jsx("span", { children: "原因" }),
                        e.jsx("b", { className: "p", children: s.reason }),
                    ],
                }),
            s.status === "pending" &&
                e.jsxs("div", {
                    className: "mg-rv-acts",
                    children: [
                        e.jsx("button", {
                            type: "button",
                            className: "mg-btn ghost",
                            disabled: o,
                            onClick: () => {
                                (N(""), x(!0));
                            },
                            children: "不通过",
                        }),
                        e.jsx("button", {
                            type: "button",
                            className: "mg-btn",
                            disabled: o,
                            onClick: Y,
                            children: "通过并发码",
                        }),
                    ],
                }),
            e.jsx("div", {
                className: "mg-rv-foot",
                children: s.blocked
                    ? e.jsx("button", {
                          type: "button",
                          className: "mg-link sub",
                          disabled: o,
                          onClick: () => u(!0),
                          children: "取消拉黑",
                      })
                    : e.jsx("button", {
                          type: "button",
                          className: "mg-link sub",
                          disabled: o,
                          onClick: () => c(!0),
                          children: "拉黑此 QQ 号",
                      }),
            }),
            e.jsx(Qe, { open: i, onClose: () => c(!1), busy: o, contact: O || "", onConfirm: $ }),
            e.jsx(V, {
                open: a,
                onClose: () => u(!1),
                title: "取消拉黑",
                message: "取消后该 QQ 号可以重新提交申请。已标为未通过的申请不会自动恢复。",
                confirm: { label: "取消拉黑", onClick: A },
            }),
            e.jsx(te, {
                open: d,
                onClose: () => x(!1),
                title: "不通过的原因",
                bare: !0,
                maxWidth: 340,
                children: e.jsxs("div", {
                    className: "mg-sheet",
                    children: [
                        e.jsx("div", {
                            className: "mg-reasons",
                            children: st.map((w) =>
                                e.jsx(
                                    "button",
                                    {
                                        type: "button",
                                        className: j === w ? "on" : "",
                                        onClick: () => N(w),
                                        children: w,
                                    },
                                    w,
                                ),
                            ),
                        }),
                        e.jsx("textarea", {
                            className: "mg-ipt ta",
                            rows: 3,
                            value: j,
                            onChange: (w) => N(w.target.value),
                            placeholder: "也可以直接填写",
                            maxLength: 200,
                        }),
                        e.jsx("button", {
                            type: "button",
                            className: "mg-btn",
                            disabled: !j.trim() || o,
                            onClick: R,
                            children: "确定",
                        }),
                        e.jsx("p", {
                            className: "mg-note c",
                            children: "申请人用查看码查询时能看到这条原因。",
                        }),
                    ],
                }),
            }),
            e.jsx(qe, { images: S, index: g, onClose: () => _(null) }),
        ],
    });
}
const at = (s) => [`r${s.round}`, `第 ${J(s.round)} 轮`];
function lt() {
    const s = q(),
        [t, l] = h.useState(""),
        m = t.replace(/[^0-9]/g, ""),
        [n, i] = h.useState(null),
        [c, a] = h.useState(null),
        [u, v] = h.useState(""),
        [f, o] = h.useState(!1),
        r = () =>
            Ds(m)
                .then((x) => i(x.blocks || []))
                .catch((x) => s(E(x), "error"));
    h.useEffect(() => {
        const x = setTimeout(r, m ? 300 : 0);
        return () => clearTimeout(x);
    }, [m]);
    const d = async (x) => {
        o(!0);
        try {
            const j = await Re({ contact: u, reason: x });
            (v(""), s(j.revoked ? "已拉黑，未使用的注册码已收回" : "已拉黑"), r());
        } catch (j) {
            s(E(j), "error");
        }
        o(!1);
    };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("input", {
                className: "mg-ipt mg-search",
                value: t,
                onChange: (x) => l(x.target.value.replace(/[^0-9\s]/g, "").slice(0, 14)),
                placeholder: "按 QQ 号搜索",
                inputMode: "numeric",
                autoComplete: "off",
            }),
            e.jsx(T, {
                en: "BLOCKED",
                children: n ? `黑名单 · ${n.length}${n.length >= 300 ? "+" : ""}` : "黑名单",
            }),
            e.jsxs("div", {
                className: "mg-grp",
                children: [
                    !n &&
                        e.jsx("div", {
                            className: "mg-it",
                            children: e.jsx("span", { className: "tt muted", children: "正在读取…" }),
                        }),
                    n &&
                        !n.length &&
                        e.jsx("div", {
                            className: "mg-it",
                            children: e.jsx("span", {
                                className: "tt muted",
                                children: m ? "黑名单中没有这个 QQ 号。" : "黑名单为空。",
                            }),
                        }),
                    n == null
                        ? void 0
                        : n.map((x) =>
                              e.jsxs(
                                  "button",
                                  {
                                      type: "button",
                                      className: "mg-it btn",
                                      onClick: () => a(x),
                                      children: [
                                          e.jsxs("span", {
                                              className: "tt",
                                              children: [
                                                  e.jsx("b", { className: "mono", children: x.contact }),
                                                  x.application_no
                                                      ? e.jsxs("em", {
                                                            className: "mg-tag",
                                                            children: ["No. ", Te(x.application_no)],
                                                        })
                                                      : null,
                                                  e.jsx("small", {
                                                      children: [
                                                          String(x.reason || "").replace(/[。.]$/, ""),
                                                          x.by_name,
                                                          Gs(x.created_at),
                                                      ]
                                                          .filter(Boolean)
                                                          .join(" · "),
                                                  }),
                                              ],
                                          }),
                                          e.jsx("span", { className: "v", children: "取消" }),
                                      ],
                                  },
                                  x.contact,
                              ),
                          ),
                    e.jsxs("button", {
                        type: "button",
                        className: "mg-it btn",
                        onClick: () => v("ask"),
                        children: [
                            e.jsx("span", { className: "mg-no add", children: "+" }),
                            e.jsx("span", { className: "tt", children: "添加 QQ 号" }),
                        ],
                    }),
                ],
            }),
            e.jsx("p", {
                className: "mg-note",
                children:
                    "黑名单中的 QQ 号不能提交或重新提交申请，也不能被审核通过。所有审核人员共用这份名单。",
            }),
            e.jsx(P, {
                open: u === "ask",
                onClose: () => v(""),
                title: "添加到黑名单",
                label: "QQ 号",
                placeholder: "5–12 位数字",
                confirmLabel: "下一步",
                maxLength: 14,
                onSave: (x) => {
                    const j = String(x || "").replace(/[^0-9]/g, "");
                    if (!/^[1-9][0-9]{4,11}$/.test(j)) {
                        s("QQ 号格式不正确。", "error");
                        return;
                    }
                    v(j);
                },
            }),
            e.jsx(Qe, {
                open: !!u && u !== "ask",
                onClose: () => v(""),
                busy: f,
                contact: u !== "ask" ? u : "",
                onConfirm: d,
            }),
            e.jsx(V, {
                open: !!c,
                onClose: () => a(null),
                title: "取消拉黑",
                message: c ? `取消后 ${c.contact} 可以重新提交申请。已标为未通过的申请不会自动恢复。` : "",
                confirm: {
                    label: "取消拉黑",
                    onClick: async () => {
                        const x = c == null ? void 0 : c.contact;
                        try {
                            (await Ae(x), s("已取消拉黑"), r());
                        } catch (j) {
                            s(E(j), "error");
                        }
                    },
                },
            }),
        ],
    });
}
function ct({ role: s, me: t, onBack: l, onChanged: m }) {
    var O;
    const n = q(),
        i = [
            (t == null ? void 0 : t.can_codes) !== !1 && ["apply", "注册申请"],
            ((t == null ? void 0 : t.can_tavern) || s === "owner") && ["tavern", "酒馆许可"],
        ].filter(Boolean),
        [c, a] = h.useState(((O = i[0]) == null ? void 0 : O[0]) || "apply");
    h.useEffect(() => {
        i.length && !i.some(([S]) => S === c) && a(i[0][0]);
    }, [t == null ? void 0 : t.can_codes, t == null ? void 0 : t.can_tavern]);
    const [u, v] = h.useState("pending"),
        [f, o] = h.useState("done"),
        [r, d] = h.useState(!0),
        [x, j] = h.useState(""),
        N = x.replace(/[^0-9]/g, ""),
        [g, _] = h.useState(null),
        [p, b] = h.useState(!1),
        k = u === "done" ? f : "pending",
        M = () => {
            c === "apply" &&
                u !== "blocks" &&
                be(k, { q: N, mine: s === "owner" && r })
                    .then(_)
                    .catch((S) => n(E(S), "error"));
        };
    h.useEffect(() => {
        _(null);
        const S = setTimeout(M, N ? 300 : 0);
        return () => clearTimeout(S);
    }, [u, c, f, r, N]);
    const D = async (S) => {
        try {
            (await _s(String(S || "").trim()), n("审核名称已保存"), b(!1), m());
        } catch (B) {
            n(E(B), "error");
        }
    };
    h.useEffect(() => {
        if (c !== "apply" || u !== "pending") return;
        const S = () => {
                document.hidden ||
                    (be("pending", { q: N })
                        .then(_)
                        .catch(() => {}),
                    m());
            },
            B = setInterval(S, 2e4);
        return (
            document.addEventListener("visibilitychange", S),
            () => {
                (clearInterval(B), document.removeEventListener("visibilitychange", S));
            }
        );
    }, [u, c, N]);
    const C = t == null ? void 0 : t.invite,
        Q =
            s === "owner"
                ? "站主发码不设上限"
                : C != null && C.unlimited
                  ? "注册码不限量 · 在任期间有效"
                  : `剩余注册码名额 ${Math.max(0, ((C == null ? void 0 : C.quota) || 0) - ((C == null ? void 0 : C.used) || 0))} / ${(C == null ? void 0 : C.quota) ?? 0}`;
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(ae, {
                title: "审核",
                role: s,
                onBack: l,
                sub: c === "tavern" ? "酒馆格式角色卡的导入导出许可" : Q,
            }),
            i.length > 1 &&
                e.jsx("div", {
                    className: "mg-tabs-top",
                    children: e.jsx(G, { value: c, onChange: a, items: i }),
                }),
            e.jsx("div", {
                className: "mg-scroll",
                children:
                    c === "tavern"
                        ? e.jsx(Bs, {})
                        : e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx("div", {
                                      className: "mg-grp mg-rname",
                                      children: e.jsxs("button", {
                                          type: "button",
                                          className: "mg-it btn",
                                          onClick: () => b(!0),
                                          children: [
                                              e.jsxs("span", {
                                                  className: "tt",
                                                  children: [
                                                      "审核名称",
                                                      e.jsx("small", {
                                                          children:
                                                              t != null && t.review_name
                                                                  ? "已通过的申请人可以看到，用于 QQ 群验证。"
                                                                  : "尚未设置。设置后才能通过申请。",
                                                      }),
                                                  ],
                                              }),
                                              e.jsx("span", {
                                                  className: `v${t != null && t.review_name ? "" : " muted"}`,
                                                  children: (t == null ? void 0 : t.review_name) || "设置",
                                              }),
                                              e.jsx("span", { className: "mg-chev" }),
                                          ],
                                      }),
                                  }),
                                  e.jsx(G, {
                                      value: u,
                                      onChange: (S) => {
                                          (v(S), j(""));
                                      },
                                      items: [
                                          ["pending", `待审${t != null && t.pending ? ` ${t.pending}` : ""}`],
                                          ["done", "已处理"],
                                          ["blocks", "黑名单"],
                                      ],
                                  }),
                                  u === "blocks"
                                      ? e.jsx(lt, {})
                                      : e.jsxs(e.Fragment, {
                                            children: [
                                                e.jsx("input", {
                                                    className: "mg-ipt mg-search",
                                                    value: x,
                                                    onChange: (S) =>
                                                        j(
                                                            S.target.value
                                                                .replace(/[^0-9\s]/g, "")
                                                                .slice(0, 14),
                                                        ),
                                                    placeholder: "按 QQ 号搜索",
                                                    inputMode: "numeric",
                                                    autoComplete: "off",
                                                }),
                                                u === "done" &&
                                                    e.jsxs("div", {
                                                        className: "mg-rv-filter",
                                                        children: [
                                                            e.jsx(G, {
                                                                value: f,
                                                                onChange: o,
                                                                items: [
                                                                    ["done", "全部"],
                                                                    ["approved", "已通过"],
                                                                    ["rejected", "未通过"],
                                                                ],
                                                            }),
                                                            s === "owner" &&
                                                                e.jsx("span", {
                                                                    className: "mg-perm",
                                                                    children: e.jsx("button", {
                                                                        type: "button",
                                                                        className: r ? "on" : "",
                                                                        "aria-pressed": r,
                                                                        onClick: () => d(!r),
                                                                        children: "只看我的",
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                !g &&
                                                    e.jsx("div", {
                                                        className: "mg-empty",
                                                        children: "正在读取…",
                                                    }),
                                                g &&
                                                    !g.applications.length &&
                                                    e.jsx("div", {
                                                        className: "mg-empty",
                                                        children: N
                                                            ? "没有找到这个 QQ 号的申请。"
                                                            : u === "pending"
                                                              ? "没有待审核的申请。"
                                                              : s === "owner" && !r
                                                                ? "暂无记录。"
                                                                : "你还没有审核过的申请。",
                                                    }),
                                                g &&
                                                    e.jsx(ue, {
                                                        items: g.applications,
                                                        groupOf: at,
                                                        variant: "cards",
                                                        resetKey: `${u}:${f}:${N}`,
                                                        openAll: u === "pending" || !!N,
                                                        keyOf: (S) => `${S.id}:${S.status}:${S.blocked}`,
                                                        render: (S) =>
                                                            e.jsx(nt, {
                                                                a: S,
                                                                materials: g.materials,
                                                                onNeedName: () => {
                                                                    (n("请先设置审核名称", "error"), b(!0));
                                                                },
                                                                onDone: () => {
                                                                    (M(), m());
                                                                },
                                                            }),
                                                    }),
                                                g &&
                                                    e.jsxs("p", {
                                                        className: "mg-note",
                                                        children: [
                                                            u === "done"
                                                                ? (s === "owner" && !r
                                                                      ? "全部审核人员处理过的申请。"
                                                                      : "你审核过的申请。") +
                                                                  "申请人加入 QQ 群时会在验证信息中填写审核名称，可在此按 QQ 号核对。"
                                                                : "",
                                                            "截图在审核结束后立即删除，未审核的截图保留 30 天。申请中的文字材料在处理 30 天后清除，编号、联系方式、处理记录和注册码保留。",
                                                        ],
                                                    }),
                                            ],
                                        }),
                                  e.jsx(P, {
                                      open: p,
                                      onClose: () => b(!1),
                                      title: "审核名称",
                                      label: "名称",
                                      value: (t == null ? void 0 : t.review_name) || "",
                                      maxLength: 16,
                                      placeholder: "1–16 个字",
                                      confirmLabel: "保存",
                                      note: "已通过的申请人会在申请进度中看到这个名称，加入 QQ 群时填写在验证信息中，由你按 QQ 号核对。名称不能与其他审核人员重复。",
                                      onSave: D,
                                  }),
                              ],
                          }),
            }),
        ],
    });
}
const rt = (s) => z(s.created_at);
function it({ role: s, me: t, onBack: l, onChanged: m }) {
    const n = q(),
        [i, c] = h.useState("invite"),
        [a, u] = h.useState(null),
        [v, f] = h.useState(!1),
        [o, r] = h.useState(null),
        [d, x] = h.useState(!1),
        [j, N] = h.useState(""),
        [g, _] = h.useState(null),
        [p, b] = h.useState(null),
        [k, M] = Le(),
        D = () =>
            ws(i)
                .then(($) => u($.codes || []))
                .catch(($) => n(E($), "error"));
    h.useEffect(() => {
        (u(null), D());
    }, [i]);
    const C = t == null ? void 0 : t[i],
        Q = s === "owner" || !!(C != null && C.unlimited),
        O = Q
            ? null
            : Math.max(0, ((C == null ? void 0 : C.quota) || 0) - ((C == null ? void 0 : C.used) || 0)),
        S = async ($) => {
            var A, Y;
            f(!0);
            try {
                const R = await ks({ kind: i, ...$ });
                (r(
                    i === "reset"
                        ? {
                              kind: i,
                              code: R.code,
                              handle: (A = R.reset) == null ? void 0 : A.handle,
                              restore: ((Y = R.reset) == null ? void 0 : Y.kind) === "restore",
                          }
                        : { kind: i, code: R.invite.code },
                ),
                    D(),
                    m());
            } catch (R) {
                n(E(R), "error");
            }
            f(!1);
        },
        B = ($) =>
            $.used_at
                ? i === "reset"
                    ? "已使用"
                    : "已注册"
                : $.revoked_at
                  ? "已撤回"
                  : i === "reset" && new Date($.expires_at) < new Date()
                    ? "已过期"
                    : "未使用";
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(ae, {
                title: "发码",
                role: s,
                onBack: l,
                sub: i === "reset" ? "重置密码或恢复已注销的账号" : "用于注册新账号",
            }),
            e.jsx("div", {
                className: "mg-tabs-top",
                children: e.jsx(G, {
                    value: i,
                    onChange: c,
                    items: [
                        ["invite", "注册码"],
                        ["reset", "重置码"],
                    ],
                }),
            }),
            e.jsxs("div", {
                className: "mg-scroll",
                children: [
                    e.jsxs("div", {
                        className: "mg-quota",
                        children: [
                            e.jsxs("div", {
                                className: "mg-quota-a",
                                children: [
                                    e.jsxs("div", {
                                        children: [
                                            e.jsx("span", { children: "QUOTA" }),
                                            e.jsxs("b", {
                                                children: [
                                                    O ?? "∞",
                                                    !Q &&
                                                        e.jsxs("em", {
                                                            children: [
                                                                " / ",
                                                                (C == null ? void 0 : C.quota) ?? 0,
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            e.jsx("small", {
                                                children:
                                                    s === "owner"
                                                        ? `站主不设上限 · 已发 ${(C == null ? void 0 : C.used) ?? 0}`
                                                        : Q
                                                          ? `不限量 · 在任期间有效 · 已发 ${(C == null ? void 0 : C.used) ?? 0}`
                                                          : "剩余名额 · 由站主分配",
                                            }),
                                        ],
                                    }),
                                    e.jsx("span", {
                                        className: "mg-quota-ic",
                                        children: e.jsx(cs, { size: 34, fill: "var(--card, #fff)" }),
                                    }),
                                ],
                            }),
                            e.jsx("div", {
                                className: "mg-quota-b",
                                children: e.jsx("button", {
                                    type: "button",
                                    className: "mg-btn",
                                    disabled: v || O === 0,
                                    onClick: () => (i === "reset" ? (N(""), x(!0)) : S({})),
                                    children:
                                        O === 0
                                            ? "名额已用完"
                                            : i === "reset"
                                              ? "生成一张重置码"
                                              : "生成一张注册码",
                                }),
                            }),
                        ],
                    }),
                    e.jsxs(T, {
                        en: "ISSUED",
                        children: ["我发出的 · ", (a == null ? void 0 : a.length) ?? 0],
                    }),
                    (!a || !a.length) &&
                        e.jsxs("div", {
                            className: "mg-grp",
                            children: [
                                !a &&
                                    e.jsx("div", {
                                        className: "mg-it",
                                        children: e.jsx("span", { className: "tt", children: "正在读取…" }),
                                    }),
                                a &&
                                    !a.length &&
                                    e.jsx("div", {
                                        className: "mg-it",
                                        children: e.jsxs("span", {
                                            className: "tt muted",
                                            children: [
                                                "还没有发过",
                                                i === "reset" ? "重置码" : "注册码",
                                                "。",
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    !!(a != null && a.length) &&
                        e.jsx(ue, {
                            items: a,
                            groupOf: rt,
                            resetKey: i,
                            render: ($) => {
                                const A = B($);
                                return e.jsxs("button", {
                                    type: "button",
                                    className: `mg-it btn mg-code${$.revoked_at ? " off" : ""}`,
                                    onClick: () => _($),
                                    children: [
                                        e.jsxs("span", {
                                            className: "tt",
                                            children: [
                                                e.jsx("b", {
                                                    className: "mono",
                                                    children: i === "reset" ? $.handle : K($.code),
                                                }),
                                                e.jsx("small", {
                                                    children: $.note
                                                        ? `备注：${$.note}`
                                                        : $.used_handle
                                                          ? `注册为 ${$.used_handle}`
                                                          : `${de($.created_at)} 发出`,
                                                }),
                                            ],
                                        }),
                                        e.jsx(X, { k: A === "已注册" || A === "已使用", children: A }),
                                    ],
                                });
                            },
                        }),
                    e.jsxs("p", {
                        className: "mg-note",
                        children: [
                            "点一张码可以复制、写备注或撤回；已使用的码不能撤回。",
                            i === "reset" ? "重置码只在生成时显示一次，24 小时内有效。" : "",
                        ],
                    }),
                ],
            }),
            e.jsx(Me, {
                open: !!g,
                onClose: () => _(null),
                message: g ? (i === "reset" ? `${g.handle} 的重置码` : K(g.code)) : "",
                actions: g
                    ? [
                          i === "invite" && {
                              label: "复制",
                              onClick: () => {
                                  (M(K(g.code)), n("已复制"));
                              },
                          },
                          { label: g.note ? "修改备注" : "写备注", onClick: () => b(g) },
                          !g.used_at &&
                              !g.revoked_at && {
                                  label: "撤回",
                                  destructive: !0,
                                  onClick: async () => {
                                      try {
                                          (await rs(i, g.id), n("已撤回，名额已退回"), D(), m());
                                      } catch ($) {
                                          n(E($), "error");
                                      }
                                  },
                              },
                      ].filter(Boolean)
                    : [],
            }),
            e.jsx(P, {
                open: !!p,
                onClose: () => b(null),
                title: "备注",
                label: "备注",
                value: (p == null ? void 0 : p.note) || "",
                placeholder: "例如发给谁",
                allowEmpty: !0,
                onSave: async ($) => {
                    try {
                        (await is(i, p.id, $), D());
                    } catch (A) {
                        n(E(A), "error");
                    }
                },
            }),
            e.jsx(P, {
                open: d,
                onClose: () => x(!1),
                title: "生成重置码",
                label: "用户名",
                value: j,
                placeholder: "需要重置密码或恢复的账号",
                note: "账号仍在时生成重置码；账号已被注销时生成恢复码。",
                confirmLabel: "生成",
                onSave: ($) => S({ handle: $.toLowerCase() }),
            }),
            e.jsx(te, {
                open: !!o,
                onClose: () => r(null),
                title:
                    (o == null ? void 0 : o.kind) === "reset" ? (o.restore ? "恢复码" : "重置码") : "注册码",
                bare: !0,
                maxWidth: 330,
                children:
                    o &&
                    e.jsxs("div", {
                        className: "mg-sheet",
                        children: [
                            e.jsx("div", {
                                className: "mg-minted mono",
                                children:
                                    o.kind === "reset" ? o.code.replace(/(.{4})(?=.)/g, "$1-") : K(o.code),
                            }),
                            e.jsx("button", {
                                type: "button",
                                className: "mg-btn",
                                onClick: () => M(o.kind === "reset" ? o.code : K(o.code), "m"),
                                children: k === "m" ? "已复制" : "复制",
                            }),
                            e.jsx("p", {
                                className: "mg-note c",
                                children:
                                    o.kind === "reset"
                                        ? `仅可使用一次，24 小时内有效，只显示这一次。用于 ${o.handle}。`
                                        : "仅可使用一次。",
                            }),
                        ],
                    }),
            }),
        ],
    });
}
const Ie = { line: "一行文字", text: "段落", image: "图片", choice: "选项", verify: "手写核对" },
    Fe = (s) =>
        [
            Ie[s.type],
            s.required ? "必填" : "选填",
            s.type === "image" ? `最多 ${s.max || 3} 张` : "",
            s.id === "contact" ? "仅用于联系" : "",
            s.note ? "有备注" : "",
        ]
            .filter(Boolean)
            .join(" · ");
function ge({ value: s, onChange: t, maxLength: l, rows: m = 4, placeholder: n, className: i = "" }) {
    const c = h.useRef(null),
        [a, u] = h.useState(!1);
    h.useEffect(() => {
        const f = c.current;
        f && ((f.style.height = "auto"), (f.style.height = `${f.scrollHeight + 2}px`));
    }, [s]);
    const v = (f) => {
        const o = c.current,
            r = o ? (o.selectionStart ?? s.length) : s.length,
            d = Ss(s, r, f);
        d.value.length > l ||
            (t(d.value),
            requestAnimationFrame(() => {
                o && (o.focus(), o.setSelectionRange(d.caret, d.caret));
            }));
    };
    return e.jsxs("div", {
        className: `mg-ned ${i}`,
        children: [
            e.jsxs("div", {
                className: "mg-ned-bar",
                children: [
                    fe.map(([f, o]) =>
                        e.jsxs(
                            "button",
                            {
                                type: "button",
                                onMouseDown: (r) => r.preventDefault(),
                                onClick: () => v(f),
                                children: [e.jsx("b", { className: "mono", children: f }), o],
                            },
                            f,
                        ),
                    ),
                    e.jsx("button", {
                        type: "button",
                        className: `q${a ? " on" : ""}`,
                        onClick: () => u(!a),
                        "aria-label": "写法说明",
                        children: "?",
                    }),
                ],
            }),
            a &&
                e.jsxs("div", {
                    className: "mg-ned-help",
                    children: [
                        fe.map(([f, o, r]) =>
                            e.jsxs(
                                "div",
                                {
                                    children: [
                                        e.jsx("b", { className: "mono", children: f }),
                                        e.jsxs("span", { children: [o, " · ", r] }),
                                    ],
                                },
                                f,
                            ),
                        ),
                        e.jsxs("div", {
                            children: [
                                e.jsx("b", { className: "mono", children: "**" }),
                                e.jsx("span", { children: "行内加粗 · 例如 **拉黑账号**" }),
                            ],
                        }),
                        e.jsx("p", {
                            children:
                                "点按钮会在光标所在行插入；行首的符号可以直接打，全角半角都行。一个符号都不用时和以前一样显示。",
                        }),
                    ],
                }),
            e.jsx("textarea", {
                ref: c,
                className: "mg-ipt ta",
                rows: m,
                value: s,
                maxLength: l,
                placeholder: n,
                onChange: (f) => t(f.target.value),
            }),
            e.jsxs("div", { className: "mg-ned-n mono", children: [s.length, " / ", l] }),
        ],
    });
}
function Pe({ m: s, onClose: t, onSave: l, onDelete: m }) {
    const [n, i] = h.useState(s);
    if ((h.useEffect(() => i(s), [s]), !n)) return e.jsx(te, { open: !1, onClose: t });
    const c = n.id === "contact";
    return e.jsx(te, {
        open: !!s,
        onClose: t,
        title: s != null && s.isNew ? "添加材料" : "编辑材料",
        bare: !0,
        maxWidth: 340,
        children: e.jsxs("div", {
            className: "mg-sheet",
            children: [
                e.jsxs("label", {
                    className: "mg-fl",
                    children: [
                        e.jsx("b", { children: "名称" }),
                        e.jsx("input", {
                            className: "mg-ipt",
                            value: n.label,
                            maxLength: 30,
                            onChange: (a) => i({ ...n, label: a.target.value }),
                        }),
                    ],
                }),
                e.jsxs("label", {
                    className: "mg-fl",
                    children: [
                        e.jsx("b", { children: "说明" }),
                        e.jsx("input", {
                            className: "mg-ipt",
                            value: n.hint || "",
                            maxLength: 60,
                            placeholder: "选填，显示在名称右侧",
                            onChange: (a) => i({ ...n, hint: a.target.value }),
                        }),
                    ],
                }),
                e.jsxs("div", {
                    className: "mg-fl",
                    children: [
                        e.jsx("b", { children: "备注" }),
                        e.jsx(ge, {
                            value: n.note || "",
                            maxLength: 800,
                            rows: 5,
                            placeholder: `选填，显示在该项下方，例如
1. 支付宝年龄与 QQ 主页同屏
> 非年龄信息可打码`,
                            onChange: (a) => i({ ...n, note: a }),
                        }),
                    ],
                }),
                !c &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs("div", {
                                className: "mg-fl",
                                children: [
                                    e.jsx("b", { children: "类型" }),
                                    e.jsx(G, {
                                        value: n.type,
                                        onChange: (a) => i({ ...n, type: a }),
                                        items: Object.entries(Ie),
                                    }),
                                ],
                            }),
                            n.type === "image" &&
                                e.jsxs("div", {
                                    className: "mg-fl row",
                                    children: [
                                        e.jsx("b", { children: "最多张数" }),
                                        e.jsx(Be, {
                                            value: n.max || 3,
                                            min: 1,
                                            max: 6,
                                            onChange: (a) => i({ ...n, max: Math.min(6, a) }),
                                        }),
                                    ],
                                }),
                            n.type === "verify" &&
                                e.jsxs("label", {
                                    className: "mg-fl",
                                    children: [
                                        e.jsx("b", { children: "需要照抄的内容" }),
                                        e.jsx("textarea", {
                                            className: "mg-ipt ta",
                                            rows: 3,
                                            value: n.phrase || "",
                                            maxLength: 200,
                                            placeholder:
                                                "例如：我保证自己是已满 18 岁女性，遵守群内聊天规范。",
                                            onChange: (a) => i({ ...n, phrase: a.target.value }),
                                        }),
                                    ],
                                }),
                            n.type === "choice" &&
                                e.jsxs("label", {
                                    className: "mg-fl",
                                    children: [
                                        e.jsx("b", { children: "选项" }),
                                        e.jsx("textarea", {
                                            className: "mg-ipt ta",
                                            rows: 3,
                                            value: (n.options || []).join(`
`),
                                            placeholder: "每行一个选项",
                                            onChange: (a) =>
                                                i({
                                                    ...n,
                                                    options: a.target.value.split(`
`),
                                                }),
                                        }),
                                    ],
                                }),
                            e.jsxs("div", {
                                className: "mg-fl row",
                                children: [
                                    e.jsx("b", { children: "必填" }),
                                    e.jsx(oe, {
                                        on: !!n.required,
                                        onChange: (a) => i({ ...n, required: a }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                e.jsx("button", {
                    type: "button",
                    className: "mg-btn",
                    disabled: !n.label.trim() || (n.type === "verify" && !String(n.phrase || "").trim()),
                    onClick: () =>
                        l({
                            ...n,
                            label: n.label.trim(),
                            options: (n.options || []).map((a) => a.trim()).filter(Boolean),
                        }),
                    children: "完成",
                }),
                !c &&
                    !(s != null && s.isNew) &&
                    e.jsx("button", {
                        type: "button",
                        className: "mg-btn danger",
                        onClick: m,
                        children: "删除这项材料",
                    }),
                c &&
                    e.jsx("p", {
                        className: "mg-note c",
                        children: "联系方式固定为第一项，必填，仅用于联系申请人。",
                    }),
            ],
        }),
    });
}
const ot = (s) => {
        const t = String(s || "").trim();
        if (!t) return "";
        try {
            return new URL(/^https?:\/\//i.test(t) ? t : `https://${t}`).origin;
        } catch {
            return "";
        }
    },
    Se = (s) => {
        if (!s) return "";
        const t = new Date(s);
        if (Number.isNaN(t.getTime())) return "";
        const l = (m) => String(m).padStart(2, "0");
        return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
    },
    he = (s) => (s ? new Date(s).toISOString() : null),
    Ce = (s) => ({
        ...s,
        opens_at: he(s.opens_at),
        closes_at: he(s.closes_at),
        submit_cap: s.submit_cap < 0 ? null : s.submit_cap,
    }),
    dt = (s, t, l = 0, m = Date.now()) =>
        s.open
            ? s.opens_at && new Date(s.opens_at).getTime() > m
                ? "upcoming"
                : s.closes_at && new Date(s.closes_at).getTime() <= m
                  ? "ended"
                  : s.quota >= 0 && s.quota - t <= 0
                    ? "full"
                    : s.submit_cap >= 0 && l >= s.submit_cap
                      ? "capped"
                      : "open"
            : "closed",
    ie = (s) => {
        var t, l, m, n;
        return {
            open: s.opened,
            quota: s.quota,
            submit_cap: s.submit_cap == null ? -1 : s.submit_cap,
            opens_at: Se(s.opens_at),
            closes_at: Se(s.closes_at || (s.deadline ? `${s.deadline}T23:59:00+08:00` : null)),
            notice: s.notice,
            materials: s.materials,
            handout: {
                site_url: ((t = s.handout) == null ? void 0 : t.site_url) || "",
                qq_group: ((l = s.handout) == null ? void 0 : l.qq_group) || "",
                note: ((m = s.handout) == null ? void 0 : m.note) || "",
                site_private: ((n = s.handout) == null ? void 0 : n.site_private) !== !1,
            },
        };
    },
    $e = (s) => {
        const t = Math.max(0, Math.floor(s / 6e4)),
            l = Math.floor(t / 1440),
            m = Math.floor((t % 1440) / 60),
            n = t % 60;
        return l ? `${l} 天 ${m} 小时` : m ? `${m} 小时 ${n} 分` : `${n} 分钟`;
    };
function mt({ live: s, onQuick: t, onCloseNow: l }) {
    const m = s.counts || {},
        n = s.state || (s.open ? "open" : "closed"),
        [i, c] = h.useState(Date.now());
    (h.useEffect(() => {
        const o = setInterval(() => c(Date.now()), 3e4);
        return () => clearInterval(o);
    }, []),
        h.useEffect(() => c(Date.now()), [s]));
    const a = s.closes_at ? new Date(s.closes_at).getTime() : 0,
        u = s.opens_at ? new Date(s.opens_at).getTime() : 0,
        v =
            n === "upcoming"
                ? `距开放 ${$e(u - i)}`
                : a && a > i
                  ? `距截止 ${$e(a - i)}`
                  : a
                    ? `已于 ${H(s.closes_at)} 截止`
                    : "截止时间不限",
        f = (o) =>
            t(
                { closes_at: new Date(Math.max(a || 0, i) + o).toISOString() },
                `截止时间已延后至 ${H(Math.max(a || 0, i) + o)}`,
            );
    return e.jsxs("div", {
        className: "mg-live",
        children: [
            e.jsxs("div", {
                className: "mg-live-h",
                children: [
                    e.jsx("span", { children: "LIVE · 每 15 秒更新" }),
                    e.jsx(X, { dot: n === "open" || n === "upcoming", k: !1, children: De[n] || "未开放" }),
                ],
            }),
            e.jsxs("div", {
                className: "mg-live-n",
                children: [
                    e.jsxs("div", {
                        children: [
                            e.jsx("span", { children: "已投递" }),
                            e.jsxs("b", {
                                children: [
                                    m.submitted ?? 0,
                                    s.submit_cap != null && e.jsxs("em", { children: [" / ", s.submit_cap] }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        children: [
                            e.jsx("span", { children: "待审" }),
                            e.jsx("b", { children: m.pending ?? 0 }),
                        ],
                    }),
                    e.jsxs("div", {
                        children: [
                            e.jsx("span", { children: "已通过" }),
                            e.jsxs("b", {
                                children: [
                                    m.approved ?? 0,
                                    e.jsxs("em", { children: [" / ", s.quota < 0 ? "不限" : s.quota] }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "mg-live-m",
                children: ["近 1 小时 +", m.last_hour ?? 0, " · 今天 +", m.today ?? 0, " · ", v],
            }),
            e.jsxs("div", {
                className: "mg-live-q",
                children: [
                    s.quota >= 0 &&
                        e.jsx("button", {
                            type: "button",
                            onClick: () => t({ quota: s.quota + 10 }, `通过名额已增加到 ${s.quota + 10}`),
                            children: "通过名额 +10",
                        }),
                    s.submit_cap != null &&
                        e.jsx("button", {
                            type: "button",
                            onClick: () =>
                                t({ submit_cap: s.submit_cap + 20 }, `投递上限已增加到 ${s.submit_cap + 20}`),
                            children: "投递上限 +20",
                        }),
                    a > 0 &&
                        e.jsx("button", { type: "button", onClick: () => f(36e5), children: "延后 1 小时" }),
                    a > 0 &&
                        e.jsx("button", { type: "button", onClick: () => f(864e5), children: "延后 1 天" }),
                    s.opened &&
                        (!a || a > i) &&
                        e.jsx("button", {
                            type: "button",
                            className: "dst",
                            onClick: l,
                            children: "立即截止",
                        }),
                ],
            }),
        ],
    });
}
function ht({ role: s, me: t, onBack: l }) {
    var w, L;
    const m = q(),
        [n, i] = h.useState(null),
        [c, a] = h.useState(null),
        [u, v] = h.useState(""),
        [f, o] = h.useState("form"),
        [r, d] = h.useState(null),
        [x, j] = h.useState(!1),
        [N, g] = h.useState(!1),
        [_, p] = h.useState(null),
        b = () =>
            xe()
                .then((y) => {
                    (i(y), a(ie(y)), p(y));
                })
                .catch((y) => m(E(y), "error"));
    (h.useEffect(() => {
        b();
    }, []),
        h.useEffect(() => {
            const y = setInterval(() => {
                document.hidden ||
                    xe()
                        .then(p)
                        .catch(() => {});
            }, 15e3);
            return () => clearInterval(y);
        }, []));
    const k = async (y, I) => {
            try {
                const F = await Ne(y),
                    ce = ie(F);
                (i(F),
                    p(F),
                    a((se) => ({ ...se, ...Object.fromEntries(Object.keys(y).map((re) => [re, ce[re]])) })),
                    m(I));
            } catch (F) {
                m(E(F), "error");
            }
        },
        [M, D] = h.useState(!1),
        C = n && c && JSON.stringify(ie(n)) !== JSON.stringify(c),
        Q = async () => {
            j(!0);
            try {
                const y = await Ne(Ce(c));
                (i(y), a(ie(y)), m("已保存"));
            } catch (y) {
                m(E(y), "error");
            }
            j(!1);
        },
        O = async () => {
            try {
                (await Cs(Ce(c)), m("已开始新一轮"), b());
            } catch (y) {
                m(E(y), "error");
            }
        },
        S = c == null ? void 0 : c.handout,
        B = c && (ot(S.site_url) || n.default_site),
        $ = c && {
            no: 12,
            round: n.round,
            status: "approved",
            created_at: new Date(Date.now() - 864e5).toISOString(),
            reviewed_at: new Date().toISOString(),
            invite_code: "AB12CD34",
            register_url: B ? `${B}/?invite=AB12CD34` : "",
            handout: {
                site_url: B,
                qq_group: S.qq_group.replace(/\D/g, ""),
                note: S.note.trim(),
                site_private: S.site_private,
            },
            reviewer_name: (t == null ? void 0 : t.review_name) || "审核名称",
        },
        A = ((w = n == null ? void 0 : n.counts) == null ? void 0 : w.approved) || 0,
        Y = ((L = n == null ? void 0 : n.counts) == null ? void 0 : L.submitted) || 0,
        R = c && dt(c, A, Y),
        ee = !!(
            c != null &&
            c.opens_at &&
            c != null &&
            c.closes_at &&
            new Date(c.closes_at) <= new Date(c.opens_at)
        ),
        le = c && {
            round: n.round,
            open: R === "open",
            opened: c.open,
            state: R,
            opens_at: he(c.opens_at),
            closes_at: he(c.closes_at),
            quota: c.quota < 0 ? null : c.quota,
            unlimited: c.quota < 0,
            remaining: c.quota < 0 ? null : Math.max(0, c.quota - A),
            notice: c.notice,
            materials: c.materials,
        };
    return u === "preview"
        ? e.jsxs(Z, {
              title: "预览",
              back: "编辑",
              onBack: () => v(""),
              children: [
                  e.jsx(G, {
                      value: f,
                      onChange: o,
                      items: [
                          ["form", "申请页"],
                          ["ok", "通过后"],
                      ],
                  }),
                  e.jsxs("div", {
                      className: "mg-preview-bar",
                      children: [
                          e.jsx("b", { children: "PREVIEW" }),
                          e.jsx("span", {
                              children:
                                  f === "form"
                                      ? "申请人看到的样子 · 提交按钮不可用"
                                      : "已通过的样子 · 注册码为示例",
                          }),
                      ],
                  }),
                  e.jsx("div", {
                      className: "mg-preview",
                      children:
                          f === "form"
                              ? e.jsx(os, { info: le, preview: !0 })
                              : e.jsx(ds, { preview: !0, code: "", r: $ }),
                  }),
              ],
          })
        : u === "stats"
          ? e.jsx(xt, { onBack: () => v("") })
          : u === "staff"
            ? e.jsx(gt, { onBack: () => v("") })
            : u === "tavern"
              ? e.jsx(pt, { onBack: () => v("") })
              : e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(ae, {
                            title: "申请设置",
                            role: s,
                            onBack: l,
                            right: e.jsx("button", {
                                type: "button",
                                className: "mg-link",
                                disabled: !c,
                                onClick: () => {
                                    (o("form"), v("preview"));
                                },
                                children: "预览",
                            }),
                        }),
                        e.jsxs("div", {
                            className: "mg-scroll",
                            children: [
                                !c && e.jsx("div", { className: "mg-empty", children: "正在读取…" }),
                                c &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            _ && e.jsx(mt, { live: _, onQuick: k, onCloseNow: () => D(!0) }),
                                            e.jsxs("div", {
                                                className: "mg-grp",
                                                children: [
                                                    e.jsxs("div", {
                                                        className: "mg-it",
                                                        children: [
                                                            e.jsxs("span", {
                                                                className: "tt",
                                                                children: [
                                                                    "开放申请",
                                                                    e.jsx("small", {
                                                                        children:
                                                                            "关闭后申请网页显示「暂未开放申请」",
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx(oe, {
                                                                on: c.open,
                                                                onChange: (y) => a({ ...c, open: y }),
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx(me, {
                                                        title: "通过名额",
                                                        sub: `已通过 ${A}`,
                                                        used: A,
                                                        step: c.quota >= 50 ? 10 : 1,
                                                        value: c.quota,
                                                        onChange: (y) => a({ ...c, quota: y }),
                                                    }),
                                                    e.jsx(me, {
                                                        title: "投递上限",
                                                        sub: `已投递 ${Y}`,
                                                        used: Y,
                                                        value: c.submit_cap,
                                                        onChange: (y) => a({ ...c, submit_cap: y }),
                                                    }),
                                                    e.jsxs("label", {
                                                        className: "mg-it",
                                                        children: [
                                                            e.jsxs("span", {
                                                                className: "tt",
                                                                children: [
                                                                    "开放时间",
                                                                    e.jsx("small", {
                                                                        children: "不设置时，打开开关即开放",
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx("span", {
                                                                className: "v",
                                                                children: c.opens_at ? H(c.opens_at) : "立即",
                                                            }),
                                                            e.jsx("input", {
                                                                className: "mg-date",
                                                                type: "datetime-local",
                                                                value: c.opens_at,
                                                                onChange: (y) =>
                                                                    a({ ...c, opens_at: y.target.value }),
                                                            }),
                                                            e.jsx("i", { className: "mg-chev" }),
                                                        ],
                                                    }),
                                                    c.opens_at &&
                                                        e.jsx("button", {
                                                            type: "button",
                                                            className: "mg-it btn",
                                                            onClick: () => a({ ...c, opens_at: "" }),
                                                            children: e.jsx("span", {
                                                                className: "tt muted",
                                                                children: "清除开放时间",
                                                            }),
                                                        }),
                                                    e.jsxs("label", {
                                                        className: "mg-it",
                                                        children: [
                                                            e.jsxs("span", {
                                                                className: "tt",
                                                                children: [
                                                                    "截止时间",
                                                                    e.jsx("small", {
                                                                        children: "不设置时不限",
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx("span", {
                                                                className: "v",
                                                                children: c.closes_at
                                                                    ? H(c.closes_at)
                                                                    : "不限",
                                                            }),
                                                            e.jsx("input", {
                                                                className: "mg-date",
                                                                type: "datetime-local",
                                                                value: c.closes_at,
                                                                onChange: (y) =>
                                                                    a({ ...c, closes_at: y.target.value }),
                                                            }),
                                                            e.jsx("i", { className: "mg-chev" }),
                                                        ],
                                                    }),
                                                    c.closes_at &&
                                                        e.jsx("button", {
                                                            type: "button",
                                                            className: "mg-it btn",
                                                            onClick: () => a({ ...c, closes_at: "" }),
                                                            children: e.jsx("span", {
                                                                className: "tt muted",
                                                                children: "清除截止时间",
                                                            }),
                                                        }),
                                                ],
                                            }),
                                            e.jsx("p", {
                                                className: "mg-note",
                                                children:
                                                    "通过名额是最多通过的份数，投递上限是最多接收的申请份数。设为「不限」时只按开放和截止时间接收，可随时追加。",
                                            }),
                                            e.jsx("p", {
                                                className: `mg-note${ee ? " err" : ""}`,
                                                children: ee
                                                    ? "截止时间需晚于开放时间。"
                                                    : `保存后：${De[R]}${R === "upcoming" ? ` · ${H(c.opens_at)} 开放` : ""}${c.closes_at && R !== "ended" ? ` · ${H(c.closes_at)} 截止` : ""}${R === "ended" ? ` · 已于 ${H(c.closes_at)} 截止` : ""}。时间按本机时区。`,
                                            }),
                                            e.jsx(T, { en: "NOTICE", children: "本轮要求 · 申请人可见" }),
                                            e.jsx(ge, {
                                                className: "mg-notice",
                                                rows: 6,
                                                value: c.notice,
                                                maxLength: 1200,
                                                placeholder: `每行一条，例如
! 链接和群号必须打码
# 先确认资格
- 已满 18 周岁`,
                                                onChange: (y) => a({ ...c, notice: y }),
                                            }),
                                            e.jsx(T, { en: "MATERIALS", children: "需要提交的材料" }),
                                            e.jsxs("div", {
                                                className: "mg-grp",
                                                children: [
                                                    c.materials.map((y, I) =>
                                                        e.jsxs(
                                                            "button",
                                                            {
                                                                type: "button",
                                                                className: "mg-it btn",
                                                                onClick: () => d({ ...y, idx: I }),
                                                                children: [
                                                                    e.jsx("span", {
                                                                        className: "mg-no mono",
                                                                        children: J(I + 1),
                                                                    }),
                                                                    e.jsxs("span", {
                                                                        className: "tt",
                                                                        children: [
                                                                            y.label,
                                                                            e.jsx("small", {
                                                                                children: Fe(y),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    e.jsx("span", {
                                                                        className: "v",
                                                                        children: "编辑",
                                                                    }),
                                                                ],
                                                            },
                                                            y.id,
                                                        ),
                                                    ),
                                                    c.materials.length < 12 &&
                                                        e.jsxs("button", {
                                                            type: "button",
                                                            className: "mg-it btn",
                                                            onClick: () =>
                                                                d({
                                                                    id: `m${Date.now().toString(36)}`,
                                                                    type: "line",
                                                                    label: "",
                                                                    hint: "",
                                                                    required: !1,
                                                                    isNew: !0,
                                                                }),
                                                            children: [
                                                                e.jsx("span", {
                                                                    className: "mg-no add",
                                                                    children: "+",
                                                                }),
                                                                e.jsxs("span", {
                                                                    className: "tt",
                                                                    children: [
                                                                        "添加材料",
                                                                        e.jsx("small", {
                                                                            children:
                                                                                "一行文字 / 段落 / 图片 / 选项 / 手写核对",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            e.jsx(T, {
                                                en: "HANDOUT",
                                                children: "通过后发放 · 仅已通过的申请人可见",
                                            }),
                                            e.jsxs("div", {
                                                className: "mg-grp",
                                                children: [
                                                    e.jsxs("label", {
                                                        className: "mg-it",
                                                        children: [
                                                            e.jsx("span", {
                                                                className: "tt",
                                                                children: "网站地址",
                                                            }),
                                                            e.jsx("input", {
                                                                className: "mg-in",
                                                                value: S.site_url,
                                                                maxLength: 200,
                                                                inputMode: "url",
                                                                autoCapitalize: "off",
                                                                autoCorrect: "off",
                                                                spellCheck: !1,
                                                                placeholder:
                                                                    (n.default_site || "").replace(
                                                                        /^https:\/\//,
                                                                        "",
                                                                    ) || "例如 example.com",
                                                                onChange: (y) =>
                                                                    a({
                                                                        ...c,
                                                                        handout: {
                                                                            ...S,
                                                                            site_url: y.target.value,
                                                                        },
                                                                    }),
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsxs("label", {
                                                        className: "mg-it",
                                                        children: [
                                                            e.jsx("span", {
                                                                className: "tt",
                                                                children: "QQ 群号",
                                                            }),
                                                            e.jsx("input", {
                                                                className: "mg-in",
                                                                value: S.qq_group,
                                                                maxLength: 20,
                                                                inputMode: "numeric",
                                                                placeholder: "未填写时不显示",
                                                                onChange: (y) =>
                                                                    a({
                                                                        ...c,
                                                                        handout: {
                                                                            ...S,
                                                                            qq_group: y.target.value.replace(
                                                                                /\D/g,
                                                                                "",
                                                                            ),
                                                                        },
                                                                    }),
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "mg-it",
                                                        children: [
                                                            e.jsxs("span", {
                                                                className: "tt",
                                                                children: [
                                                                    "标注禁止外传",
                                                                    e.jsx("small", {
                                                                        children:
                                                                            "网站地址旁显示「禁止外传」及说明",
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx(oe, {
                                                                on: S.site_private,
                                                                onChange: (y) =>
                                                                    a({
                                                                        ...c,
                                                                        handout: { ...S, site_private: y },
                                                                    }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            e.jsx("textarea", {
                                                className: "mg-ipt ta mg-notice",
                                                rows: 3,
                                                value: S.note,
                                                maxLength: 600,
                                                placeholder: "说明 · 选填，显示在网站和 QQ 群号下方",
                                                onChange: (y) =>
                                                    a({ ...c, handout: { ...S, note: y.target.value } }),
                                            }),
                                            e.jsx("p", {
                                                className: "mg-note",
                                                children:
                                                    "网站地址留空时使用主站地址。注册码由审核通过时自动发放。",
                                            }),
                                            e.jsxs("div", {
                                                className: "mg-acts",
                                                children: [
                                                    e.jsx("button", {
                                                        type: "button",
                                                        className: "mg-btn ghost",
                                                        onClick: () => {
                                                            (o("ok"), v("preview"));
                                                        },
                                                        children: "预览通过后",
                                                    }),
                                                    e.jsx("button", {
                                                        type: "button",
                                                        className: "mg-btn",
                                                        disabled: !C || x || ee,
                                                        onClick: Q,
                                                        children: x ? "…" : C ? "保存" : "已保存",
                                                    }),
                                                ],
                                            }),
                                            e.jsx(T, { en: "DATA", children: "数据与人员" }),
                                            e.jsxs("div", {
                                                className: "mg-grp",
                                                children: [
                                                    e.jsxs("button", {
                                                        type: "button",
                                                        className: "mg-it btn",
                                                        onClick: () => v("stats"),
                                                        children: [
                                                            e.jsxs("span", {
                                                                className: "tt",
                                                                children: [
                                                                    "申请数据",
                                                                    e.jsx("small", {
                                                                        children:
                                                                            "提交、通过、已注册，按管理员统计",
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx("i", { className: "mg-chev" }),
                                                        ],
                                                    }),
                                                    e.jsxs("button", {
                                                        type: "button",
                                                        className: "mg-it btn",
                                                        onClick: () => v("staff"),
                                                        children: [
                                                            e.jsxs("span", {
                                                                className: "tt",
                                                                children: [
                                                                    "管理员与名额",
                                                                    e.jsx("small", {
                                                                        children:
                                                                            "添加管理员，分配注册码与重置码名额",
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx("i", { className: "mg-chev" }),
                                                        ],
                                                    }),
                                                    e.jsxs("button", {
                                                        type: "button",
                                                        className: "mg-it btn",
                                                        onClick: () => v("tavern"),
                                                        children: [
                                                            e.jsxs("span", {
                                                                className: "tt",
                                                                children: [
                                                                    "酒馆许可",
                                                                    e.jsx("small", {
                                                                        children:
                                                                            "开放状态、申请要求与需要提交的材料",
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx("i", { className: "mg-chev" }),
                                                        ],
                                                    }),
                                                    e.jsxs("button", {
                                                        type: "button",
                                                        className: "mg-it btn",
                                                        onClick: () => g(!0),
                                                        children: [
                                                            e.jsxs("span", {
                                                                className: "tt",
                                                                children: [
                                                                    "开始新一轮",
                                                                    e.jsxs("small", {
                                                                        children: [
                                                                            "当前为第 ",
                                                                            n.round,
                                                                            " 轮。新一轮沿用以上设置，名额重新计算",
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx("i", { className: "mg-chev" }),
                                                        ],
                                                    }),
                                                    e.jsx(ut, {}),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        e.jsx(Pe, {
                            m: r,
                            onClose: () => d(null),
                            onSave: (y) => {
                                const { idx: I, isNew: F, ...ce } = y;
                                (a((se) => ({
                                    ...se,
                                    materials: F
                                        ? [...se.materials, ce]
                                        : se.materials.map((re, Ye) => (Ye === I ? ce : re)),
                                })),
                                    d(null));
                            },
                            onDelete: () => {
                                (a((y) => ({ ...y, materials: y.materials.filter((I, F) => F !== r.idx) })),
                                    d(null));
                            },
                        }),
                        e.jsx(V, {
                            open: M,
                            onClose: () => D(!1),
                            title: "立即截止？",
                            message:
                                "截止时间改为现在，申请网页立即停止接收新申请；已提交的申请仍可以继续审核。之后可以再修改截止时间重新开放。",
                            confirm: {
                                label: "立即截止",
                                destructive: !0,
                                onClick: () => k({ closes_at: new Date().toISOString() }, "已截止"),
                            },
                        }),
                        e.jsx(V, {
                            open: N,
                            onClose: () => g(!1),
                            title: "开始新一轮？",
                            message: "当前这一轮结束，之后的申请计入新一轮；未处理的申请仍可以继续审核。",
                            confirm: { label: "开始", onClick: O },
                        }),
                    ],
                });
}
function ut() {
    const [s, t] = h.useState(void 0);
    h.useEffect(() => {
        fetch(`/beta/version.json?t=${Date.now()}`, { cache: "no-store" })
            .then((m) => (m.ok ? m.json() : null))
            .then((m) => t(m != null && m.version ? m : null))
            .catch(() => t(null));
    }, []);
    const l =
        s === void 0
            ? "正在读取…"
            : s
              ? `${s.version}${s.at ? ` · ${H(s.at)} 更新` : ""} · 仅站主账号可进入，与正式版共用本机数据`
              : "当前没有待确认的测试版";
    return e.jsxs("button", {
        type: "button",
        className: "mg-it btn",
        disabled: !s,
        onClick: () => {
            location.href = "/beta/";
        },
        children: [
            e.jsxs("span", { className: "tt", children: ["测试版", e.jsx("small", { children: l })] }),
            s ? e.jsx("i", { className: "mg-chev" }) : e.jsx("span", { className: "v", children: "未发布" }),
        ],
    });
}
function pt({ onBack: s }) {
    const t = q(),
        [l, m] = h.useState(null),
        [n, i] = h.useState(null),
        [c, a] = h.useState(null),
        [u, v] = h.useState(!1),
        [f, o] = h.useState(!1),
        r = () =>
            $s()
                .then((j) => {
                    (m(j), i({ open: j.open, notice: j.notice || "", materials: j.materials || [] }));
                })
                .catch((j) => t(E(j), "error"));
    h.useEffect(() => {
        r();
    }, []);
    const d =
            !!(n && l) &&
            JSON.stringify(n) !==
                JSON.stringify({ open: l.open, notice: l.notice || "", materials: l.materials || [] }),
        x = async () => {
            v(!0);
            try {
                const j = await Ms(n);
                (m(j),
                    i({ open: j.open, notice: j.notice || "", materials: j.materials || [] }),
                    t("已保存"));
            } catch (j) {
                t(E(j), "error");
            }
            v(!1);
        };
    return f && n
        ? e.jsxs(Z, {
              title: "预览",
              back: "编辑",
              onBack: () => o(!1),
              children: [
                  e.jsxs("div", {
                      className: "mg-preview-bar",
                      children: [
                          e.jsx("b", { children: "PREVIEW" }),
                          e.jsx("span", { children: "申请人在 App 里看到的样子 · 提交按钮不可用" }),
                      ],
                  }),
                  e.jsx("div", {
                      className: "mg-grp mg-tvpv",
                      children: n.open
                          ? e.jsx(ms, { info: n, preview: !0 })
                          : e.jsx("div", {
                                className: "tvs",
                                children: e.jsx("p", {
                                    className: "tvs-closed",
                                    children: "酒馆格式角色卡暂未开放申请，开放后会在这里提交。",
                                }),
                            }),
                  }),
              ],
          })
        : e.jsxs(Z, {
              title: "酒馆许可",
              onBack: s,
              right: e.jsx("button", {
                  type: "button",
                  className: "mg-link",
                  disabled: !n,
                  onClick: () => o(!0),
                  children: "预览",
              }),
              children: [
                  !n && e.jsx("div", { className: "mg-empty", children: "正在读取…" }),
                  n &&
                      e.jsxs(e.Fragment, {
                          children: [
                              e.jsx("div", {
                                  className: "mg-grp",
                                  children: e.jsxs("div", {
                                      className: "mg-it",
                                      children: [
                                          e.jsxs("span", {
                                              className: "tt",
                                              children: [
                                                  "开放酒馆许可",
                                                  e.jsx("small", {
                                                      children:
                                                          "关闭时不接收申请，也不能通过或直接开通；不通过、收回照常可用",
                                                  }),
                                              ],
                                          }),
                                          e.jsx(oe, { on: n.open, onChange: (j) => i({ ...n, open: j }) }),
                                      ],
                                  }),
                              }),
                              e.jsx(T, { en: "NOTICE", children: "申请要求 · 申请人可见" }),
                              e.jsx(ge, {
                                  className: "mg-notice",
                                  rows: 5,
                                  value: n.notice,
                                  maxLength: 1200,
                                  placeholder: `每行一条，例如
! 必须注明角色卡来源
# 需要提交
1. 角色卡来源截图`,
                                  onChange: (j) => i({ ...n, notice: j }),
                              }),
                              e.jsx(T, { en: "MATERIALS", children: "需要提交的材料" }),
                              e.jsxs("div", {
                                  className: "mg-grp",
                                  children: [
                                      n.materials.map((j, N) =>
                                          e.jsxs(
                                              "button",
                                              {
                                                  type: "button",
                                                  className: "mg-it btn",
                                                  onClick: () => a({ ...j, idx: N }),
                                                  children: [
                                                      e.jsx("span", {
                                                          className: "mg-no mono",
                                                          children: J(N + 1),
                                                      }),
                                                      e.jsxs("span", {
                                                          className: "tt",
                                                          children: [
                                                              j.label,
                                                              e.jsx("small", { children: Fe(j) }),
                                                          ],
                                                      }),
                                                      e.jsx("span", { className: "v", children: "编辑" }),
                                                  ],
                                              },
                                              j.id,
                                          ),
                                      ),
                                      n.materials.length < 12 &&
                                          e.jsxs("button", {
                                              type: "button",
                                              className: "mg-it btn",
                                              onClick: () =>
                                                  a({
                                                      id: `t${Date.now().toString(36)}`,
                                                      type: "line",
                                                      label: "",
                                                      hint: "",
                                                      required: !1,
                                                      isNew: !0,
                                                  }),
                                              children: [
                                                  e.jsx("span", { className: "mg-no add", children: "+" }),
                                                  e.jsxs("span", {
                                                      className: "tt",
                                                      children: [
                                                          "添加材料",
                                                          e.jsx("small", {
                                                              children:
                                                                  "一行文字 / 段落 / 图片 / 选项 / 手写核对",
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              e.jsx("p", {
                                  className: "mg-note",
                                  children:
                                      "申请人已登录，按账号审核，不需要填写联系方式。材料中的截图在审核结束后删除。",
                              }),
                              e.jsxs("div", {
                                  className: "mg-acts",
                                  children: [
                                      e.jsx("button", {
                                          type: "button",
                                          className: "mg-btn ghost",
                                          onClick: () => o(!0),
                                          children: "预览",
                                      }),
                                      e.jsx("button", {
                                          type: "button",
                                          className: "mg-btn",
                                          disabled: !d || u,
                                          onClick: x,
                                          children: u ? "…" : d ? "保存" : "已保存",
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  e.jsx(Pe, {
                      m: c,
                      onClose: () => a(null),
                      onSave: (j) => {
                          const { idx: N, isNew: g, ..._ } = j;
                          (i((p) => ({
                              ...p,
                              materials: g
                                  ? [...p.materials, _]
                                  : p.materials.map((b, k) => (k === N ? _ : b)),
                          })),
                              a(null));
                      },
                      onDelete: () => {
                          (i((j) => ({ ...j, materials: j.materials.filter((N, g) => g !== c.idx) })),
                              a(null));
                      },
                  }),
              ],
          });
}
function xt({ onBack: s }) {
    const t = q(),
        [l, m] = h.useState("round"),
        [n, i] = h.useState(null);
    h.useEffect(() => {
        (i(null),
            hs(l)
                .then(i)
                .catch((u) => t(E(u), "error")));
    }, [l]);
    const c =
            n && !n.empty
                ? [
                      ["提交", n.submitted],
                      ["待审", n.pending],
                      ["通过", n.approved],
                      ["未通过", n.rejected],
                      ["已注册", n.registered],
                  ]
                : [],
        a = Math.max(1, (n == null ? void 0 : n.submitted) || 0);
    return e.jsxs(Z, {
        title: "申请数据",
        onBack: s,
        children: [
            e.jsx(G, {
                value: l,
                onChange: m,
                items: [
                    ["round", "本轮"],
                    ["prev", "上一轮"],
                    ["all", "全部"],
                ],
            }),
            !n && e.jsx("div", { className: "mg-empty", children: "正在读取…" }),
            (n == null ? void 0 : n.empty) &&
                e.jsx("div", { className: "mg-empty", children: "还没有上一轮。" }),
            n &&
                !n.empty &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs("div", {
                            className: "mg-tiles",
                            children: [
                                e.jsxs("div", {
                                    className: "mg-tile",
                                    children: [
                                        e.jsx("span", { children: "SUBMITTED" }),
                                        e.jsx("em", { children: "提交" }),
                                        e.jsx("b", { children: n.submitted }),
                                        e.jsxs("small", { children: ["今天 +", n.today] }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "mg-tile",
                                    children: [
                                        e.jsx("span", { children: "APPROVED" }),
                                        e.jsx("em", { children: "通过" }),
                                        e.jsx("b", { children: n.approved }),
                                        e.jsxs("small", {
                                            children: [
                                                "通过率 ",
                                                n.submitted
                                                    ? Math.round((n.approved / n.submitted) * 100)
                                                    : 0,
                                                "%",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx(T, {
                            en: "PROGRESS",
                            children: l === "round" ? "本轮进度" : l === "prev" ? "上一轮" : "全部",
                        }),
                        e.jsx("div", {
                            className: "mg-grp mg-prog",
                            children: c.map(([u, v], f) =>
                                e.jsxs(
                                    "div",
                                    {
                                        className: "mg-prog-r",
                                        children: [
                                            e.jsx("span", { children: u }),
                                            e.jsx("i", {
                                                children: e.jsx("em", {
                                                    className: f === 1 || f === 3 ? "g" : "",
                                                    style: { width: `${(v / a) * 100}%` },
                                                }),
                                            }),
                                            e.jsx("b", { children: v }),
                                        ],
                                    },
                                    u,
                                ),
                            ),
                        }),
                        e.jsx("p", {
                            className: "mg-note",
                            children: "「已注册」是用码真正完成注册的人数。",
                        }),
                        e.jsx(T, { en: "BY ADMIN", children: "按管理员" }),
                        e.jsxs("div", {
                            className: "mg-grp",
                            children: [
                                !n.by_admin.length &&
                                    e.jsx("div", {
                                        className: "mg-it",
                                        children: e.jsx("span", {
                                            className: "tt muted",
                                            children: "暂无记录。",
                                        }),
                                    }),
                                n.by_admin.map((u) =>
                                    e.jsxs(
                                        "div",
                                        {
                                            className: "mg-it",
                                            children: [
                                                e.jsxs("span", {
                                                    className: "tt",
                                                    children: [
                                                        u.handle,
                                                        u.owner
                                                            ? e.jsx("em", {
                                                                  className: "mg-tag",
                                                                  children: "站主",
                                                              })
                                                            : null,
                                                        e.jsxs("small", {
                                                            children: [
                                                                "处理 ",
                                                                u.handled,
                                                                " · 通过 ",
                                                                u.approved,
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                u.quota != null &&
                                                    e.jsxs("span", {
                                                        className: "v",
                                                        children: [
                                                            "发码 ",
                                                            u.issued,
                                                            " / ",
                                                            u.quota < 0 ? "不限" : u.quota,
                                                        ],
                                                    }),
                                            ],
                                        },
                                        u.handle,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function gt({ onBack: s }) {
    const t = q(),
        [l, m] = h.useState(null),
        [n, i] = h.useState(!1),
        [c, a] = h.useState(null),
        [u, v] = h.useState(null),
        f = async (d) => {
            try {
                m((await d).staff || []);
            } catch (x) {
                t(E(x), "error");
            }
        };
    h.useEffect(() => {
        f(us());
    }, []);
    const o = (d, x, j) => {
            (m((N) => N.map((g) => (g.handle === d ? { ...g, [x]: j } : g))), f(pe(d, { [x]: j })));
        },
        r = (d, x, j) => {
            (m((N) => N.map((g) => (g.handle === d ? { ...g, [x]: j } : g))),
                clearTimeout(r.t),
                (r.t = setTimeout(() => f(pe(d, { [x]: j })), 500)));
        };
    return e.jsxs(Z, {
        title: "管理员",
        onBack: s,
        children: [
            !l && e.jsx("div", { className: "mg-empty", children: "正在读取…" }),
            l && !l.length && e.jsx("div", { className: "mg-empty", children: "还没有管理员。" }),
            l == null
                ? void 0
                : l.map((d) =>
                      e.jsxs(
                          "div",
                          {
                              className: "mg-grp mg-staff",
                              children: [
                                  e.jsxs("div", {
                                      className: "mg-it",
                                      children: [
                                          e.jsxs("span", {
                                              className: "tt",
                                              children: [
                                                  e.jsx("b", { children: d.handle }),
                                                  e.jsxs("small", {
                                                      children: ["处理 ", d.handled, " · 通过 ", d.approved],
                                                  }),
                                              ],
                                          }),
                                          e.jsx("button", {
                                              type: "button",
                                              className: "mg-link",
                                              onClick: () => a(d.handle),
                                              children: "移除",
                                          }),
                                      ],
                                  }),
                                  e.jsxs("button", {
                                      type: "button",
                                      className: "mg-it btn",
                                      onClick: () => v(d),
                                      children: [
                                          e.jsxs("span", {
                                              className: "tt",
                                              children: [
                                                  "审核名称",
                                                  e.jsx("small", {
                                                      children: "申请人在申请进度中看到的名称",
                                                  }),
                                              ],
                                          }),
                                          e.jsx("span", {
                                              className: `v${d.review_name ? "" : " muted"}`,
                                              children: d.review_name || "未设置",
                                          }),
                                          e.jsx("span", { className: "mg-chev" }),
                                      ],
                                  }),
                                  e.jsxs("div", {
                                      className: "mg-it",
                                      children: [
                                          e.jsxs("span", {
                                              className: "tt",
                                              children: [
                                                  "权限",
                                                  e.jsx("small", {
                                                      children:
                                                          d.can_codes && d.can_tavern
                                                              ? "注册审核与发码、酒馆许可"
                                                              : d.can_codes
                                                                ? "仅注册审核与发码"
                                                                : d.can_tavern
                                                                  ? "仅酒馆许可"
                                                                  : "未分配任何权限",
                                                  }),
                                              ],
                                          }),
                                          e.jsxs("span", {
                                              className: "mg-perm",
                                              children: [
                                                  e.jsx("button", {
                                                      type: "button",
                                                      className: d.can_codes ? "on" : "",
                                                      "aria-pressed": !!d.can_codes,
                                                      onClick: () => o(d.handle, "can_codes", !d.can_codes),
                                                      children: "发码",
                                                  }),
                                                  e.jsx("button", {
                                                      type: "button",
                                                      className: d.can_tavern ? "on" : "",
                                                      "aria-pressed": !!d.can_tavern,
                                                      onClick: () => o(d.handle, "can_tavern", !d.can_tavern),
                                                      children: "酒馆",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  d.can_codes &&
                                      e.jsxs(e.Fragment, {
                                          children: [
                                              e.jsx(me, {
                                                  title: "注册码名额",
                                                  used: d.invite_used,
                                                  value: d.invite_quota,
                                                  onChange: (x) => r(d.handle, "invite_quota", x),
                                              }),
                                              e.jsx(me, {
                                                  title: "重置码名额",
                                                  used: d.reset_used,
                                                  value: d.reset_quota,
                                                  onChange: (x) => r(d.handle, "reset_quota", x),
                                              }),
                                          ],
                                      }),
                              ],
                          },
                          d.handle,
                      ),
                  ),
            e.jsx("p", {
                className: "mg-note",
                children:
                    "「发码」包括审核注册申请、发注册码和重置码；「酒馆」包括审核、开通和收回酒馆格式角色卡许可。名额是这名管理员最多能发出的码数，用完后需要你追加；撤回未使用的码会退回名额。选择「不限」后，该管理员在任期间发码不设上限，移除后即不能再发。你自己发码不设上限。",
            }),
            e.jsx("div", {
                className: "mg-grp",
                children: e.jsxs("button", {
                    type: "button",
                    className: "mg-it btn",
                    onClick: () => i(!0),
                    children: [
                        e.jsx("span", { className: "mg-no add", children: "+" }),
                        e.jsx("span", { className: "tt", children: "添加管理员" }),
                    ],
                }),
            }),
            e.jsx(P, {
                open: n,
                onClose: () => i(!1),
                title: "添加管理员",
                label: "用户名",
                placeholder: "已注册的账号",
                confirmLabel: "添加",
                note: "默认只有发码权限，注册码名额 10、重置码名额 5；酒馆许可权限需要另外开启。添加后可以修改。",
                onSave: (d) => f(ps(d.toLowerCase())),
            }),
            e.jsx(P, {
                open: !!u,
                onClose: () => v(null),
                title: "审核名称",
                label: "名称",
                value: (u == null ? void 0 : u.review_name) || "",
                maxLength: 16,
                placeholder: "1–16 个字",
                confirmLabel: "保存",
                note: "名称不能与其他审核人员重复。管理员也可以在「审核」中自行修改。",
                onSave: (d) => {
                    const x = u == null ? void 0 : u.handle;
                    (v(null), f(pe(x, { review_name: String(d || "").trim() })));
                },
            }),
            e.jsx(V, {
                open: !!c,
                onClose: () => a(null),
                title: `移除 ${c || ""}？`,
                message: "移除后他将无法再审核和发码，已发出的码仍然有效。",
                confirm: { label: "移除", destructive: !0, onClick: () => f(xs(c)) },
            }),
        ],
    });
}
function jt({ role: s, onBack: t }) {
    const [l, m] = h.useState("list");
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(ae, {
                title: "账号",
                role: s,
                onBack: t,
                sub: l === "list" ? "搜索账号、退出登录、酒馆许可" : "无法登录时查清是哪一种情况",
            }),
            e.jsx("div", {
                className: "mg-tabs-top",
                children: e.jsx(G, { value: l, onChange: m, items: Us }),
            }),
            e.jsx("div", { className: "mg-scroll", children: e.jsx(Hs, { tab: l }) }),
        ],
    });
}
function wt({ onClose: s }) {
    const t = q(),
        [l, m] = h.useState(null),
        [n, i] = h.useState(""),
        c = (l == null ? void 0 : l.role) || Je(),
        a =
            c === "owner"
                ? ["overview", "review", "codes", "accounts", "settings"]
                : ["review", ...((l == null ? void 0 : l.can_codes) !== !1 ? ["codes"] : [])],
        [u, v] = h.useState(c === "owner" ? "overview" : "review"),
        f = () =>
            gs()
                .then((r) => {
                    var d;
                    m(r);
                    try {
                        localStorage.setItem(
                            "litot_staff_pending",
                            String(
                                (r.pending || 0) +
                                    (r.tavern_pending || 0) +
                                    (((d = r.guard) == null ? void 0 : d.open) || 0),
                            ),
                        );
                    } catch {}
                })
                .catch((r) => i(E(r)));
    (h.useEffect(() => {
        f();
    }, []),
        h.useEffect(() => {
            n && t(n, "error");
        }, [n]));
    const o = { role: c, me: l, onBack: s, onChanged: f };
    return e.jsxs("div", {
        className: "mg",
        children: [
            e.jsxs("div", {
                className: "mg-body",
                children: [
                    u === "overview" && e.jsx(zs, { ...o }),
                    u === "review" && e.jsx(ct, { ...o }),
                    u === "codes" && e.jsx(it, { ...o }),
                    u === "accounts" && e.jsx(jt, { ...o }),
                    u === "settings" && e.jsx(ht, { ...o }),
                ],
            }),
            e.jsx("nav", {
                className: "mg-tab",
                style: { gridTemplateColumns: `repeat(${a.length}, 1fr)` },
                children: a.map((r) =>
                    e.jsxs(
                        "button",
                        {
                            type: "button",
                            className: u === r ? "on" : "",
                            onClick: () => v(r),
                            children: [
                                Ks[r],
                                e.jsx("span", { children: Vs[r] }),
                                r === "review" &&
                                ((l != null && l.pending) || (l != null && l.tavern_pending))
                                    ? e.jsx("i", { className: "mg-dot" })
                                    : null,
                            ],
                        },
                        r,
                    ),
                ),
            }),
        ],
    });
}
export { ge as NoticeEditor, wt as default };
