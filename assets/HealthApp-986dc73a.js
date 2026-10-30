import { r as f, j as s } from "./vendor-react-3a46a5d3.js";
import {
    u as vs,
    a as q,
    r as es,
    t as bs,
    v as K,
    w as F,
    x as rs,
    H as S,
    l as R,
    c as P,
    y as A,
    z as ys,
    B as V,
    D as gs,
    S as ws,
    E as B,
    F as hs,
    J as ds,
    K as os,
    L as as,
    M as fs,
    N as Cs,
    O as Ss,
    Q as As,
    R as $s,
    U as zs,
    V as Ts,
    W as Os,
    X as Ls,
    Y as Ds,
    Z as Hs,
    _ as Ms,
    $ as Ps,
    a0 as _s,
} from "./app-2c902988.js";
import {
    b as _,
    c as C,
    az as ns,
    ad as ls,
    a8 as Y,
    S as Ws,
    cn as Q,
    aC as xs,
    co as Es,
    a as js,
    cp as Fs,
    cq as Rs,
    cr as Bs,
    cs as Us,
    ct as Is,
    cu as Ys,
    P as Ks,
    N as Vs,
    Y as Js,
} from "./vendor-icons-e63d3118.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const ms = { activity: Fs, heart: xs, sleep: Rs, cycle: Bs, resp: Us, body: Is, nutrition: Ys, vitals: Q },
    qs = ["steps", "sleep_hours", "heart_rate", "resting_hr", "active_kcal", "exercise_min", "weight_kg"],
    cs = 35,
    ps = ["日", "一", "二", "三", "四", "五", "六"],
    J = (l, r) => {
        var t;
        return r == null
            ? "—"
            : Number(r).toLocaleString("zh-CN", {
                  maximumFractionDigits: ((t = S[l]) == null ? void 0 : t.digits) ?? 0,
                  minimumFractionDigits: 0,
              });
    },
    g = (l) => {
        const r = A();
        if (l === r) return "今天";
        if (l === A(Date.now() - 864e5)) return "昨天";
        const t = new Date(B(l));
        return `${t.getMonth() + 1}月${t.getDate()}日`;
    };
function X({ cat: l, label: r }) {
    const t = rs(l),
        j = ms[l] || Q;
    return s.jsxs("span", {
        className: `hk-cat ${l === "cycle" ? "is-cycle" : ""}`,
        children: [s.jsx(j, { size: 15, strokeWidth: 2.4 }), r || t.label],
    });
}
function Qs({ data: l }) {
    const r = l.map((j) => j.v || 0),
        t = Math.max(1, ...r);
    return s.jsx("svg", {
        className: "hk-mini",
        viewBox: "0 0 70 34",
        "aria-hidden": "true",
        children: l.map((j, c) => {
            const a = j.v ? Math.max(3, (j.v / t) * 30) : 2;
            return s.jsx(
                "rect",
                {
                    x: c * 10 + 1,
                    y: 34 - a,
                    width: "6",
                    height: a,
                    rx: "2",
                    fill: c === l.length - 1 ? "#1c1c1e" : "#d1d1d6",
                },
                j.key,
            );
        }),
    });
}
function is({ health: l, metric: r, onOpen: t }) {
    const j = S[r],
        c = F(l, r);
    if (!c) return null;
    const a = j.agg === "max";
    return s.jsxs("button", {
        className: "hk-card btn-plain",
        onClick: t,
        children: [
            s.jsxs("div", {
                className: "hk-card-top",
                children: [
                    s.jsx(X, { cat: j.cat, label: j.label }),
                    s.jsxs("span", {
                        className: "hk-card-when",
                        children: [g(c.key), s.jsx(C, { size: 14, strokeWidth: 2.6 })],
                    }),
                ],
            }),
            s.jsxs("div", {
                className: "hk-card-body",
                children: [
                    s.jsxs("div", {
                        className: "hk-val",
                        children: [s.jsx("b", { children: J(r, c.v) }), s.jsx("span", { children: j.unit })],
                    }),
                    a && s.jsx(Qs, { data: hs(l, r, 7) }),
                ],
            }),
        ],
    });
}
function Xs({ cycle: l, onOpen: r }) {
    const t = ds(l),
        j = [];
    for (let c = -3; c <= 3; c++) {
        const a = A(Date.now() + c * 864e5);
        j.push({ key: a, mark: os(l, a), today: c === 0 });
    }
    return s.jsxs("button", {
        className: "hk-card btn-plain",
        onClick: r,
        children: [
            s.jsxs("div", {
                className: "hk-card-top",
                children: [
                    s.jsx(X, { cat: "cycle" }),
                    s.jsxs("span", {
                        className: "hk-card-when",
                        children: [
                            t.last ? g(t.last.end) : "未记录",
                            s.jsx(C, { size: 14, strokeWidth: 2.6 }),
                        ],
                    }),
                ],
            }),
            s.jsxs("div", {
                className: "hk-card-body",
                children: [
                    s.jsx("div", {
                        className: "hk-val",
                        children: t.last
                            ? t.inPeriod
                                ? s.jsxs(s.Fragment, {
                                      children: [
                                          s.jsx("span", { children: "经期：" }),
                                          s.jsxs("b", { children: ["第 ", t.dayOfPeriod, " 天"] }),
                                          t.open &&
                                              t.daysLeft > 0 &&
                                              s.jsxs("span", {
                                                  children: ["· 预计还有 ", t.daysLeft, " 天"],
                                              }),
                                      ],
                                  })
                                : t.late
                                  ? s.jsxs(s.Fragment, {
                                        children: [
                                            s.jsx("span", { children: "预计经期已过" }),
                                            s.jsx("b", { children: t.late }),
                                            s.jsx("span", { children: "天" }),
                                        ],
                                    })
                                  : s.jsxs(s.Fragment, {
                                        children: [
                                            s.jsx("span", { children: "预计经期" }),
                                            s.jsx("b", { children: t.daysUntil }),
                                            s.jsx("span", { children: "天后" }),
                                        ],
                                    })
                            : s.jsx(s.Fragment, {
                                  children: s.jsx("b", { className: "sm", children: "开始记录" }),
                              }),
                    }),
                    s.jsx("div", {
                        className: "hk-dots",
                        children: j.map((c) =>
                            s.jsx("i", { className: `${c.mark} ${c.today ? "today" : ""}` }, c.key),
                        ),
                    }),
                ],
            }),
        ],
    });
}
function Gs({ data: l, unit: r }) {
    const t = l.map((x) => x.v || 0),
        j = Math.max(1, ...t),
        c = Math.ceil(j / (j > 1e3 ? 1e3 : j > 100 ? 100 : 10)) * (j > 1e3 ? 1e3 : j > 100 ? 100 : 10),
        a = 320,
        p = 180,
        o = 40,
        n = (a - o) / l.length,
        k = Math.min(28, Math.max(4, n - 4));
    return s.jsxs("svg", {
        className: "hk-chart",
        viewBox: `0 -12 ${a} ${p + 34}`,
        children: [
            [0, 0.5, 1].map((x) =>
                s.jsxs(
                    "g",
                    {
                        children: [
                            s.jsx("line", {
                                x1: "0",
                                x2: a - o,
                                y1: p - x * p,
                                y2: p - x * p,
                                stroke: "#e5e5e5",
                                strokeWidth: "1",
                                strokeDasharray: x ? "3 3" : "",
                            }),
                            s.jsx("text", {
                                x: a - o + 4,
                                y: p - x * p + 4,
                                fontSize: "10",
                                fill: "#8e8e93",
                                children: Math.round(c * x).toLocaleString(),
                            }),
                        ],
                    },
                    x,
                ),
            ),
            l.map((x, i) => {
                const u = x.v ? Math.max(2, (x.v / c) * p) : 0,
                    h = i * n + (n - k) / 2,
                    v =
                        l.length <= 7
                            ? ps[new Date(B(x.key)).getDay()]
                            : i % 7 === 0
                              ? String(new Date(B(x.key)).getDate())
                              : "";
                return s.jsxs(
                    "g",
                    {
                        children: [
                            u > 0 &&
                                s.jsx("rect", {
                                    x: h,
                                    y: p - u,
                                    width: k,
                                    height: u,
                                    rx: Math.min(5, k / 2),
                                    fill: i === l.length - 1 ? "#1c1c1e" : "#8e8e93",
                                }),
                            s.jsx("text", {
                                x: h + k / 2,
                                y: p + 16,
                                fontSize: "10",
                                fill: "#8e8e93",
                                textAnchor: "middle",
                                children: v,
                            }),
                        ],
                    },
                    x.key,
                );
            }),
            s.jsx("title", { children: r }),
        ],
    });
}
const Zs = ["steps", "distance_km", "active_kcal", "exercise_min", "flights", "water_ml"];
function se({ hours: l }) {
    const c = 11.666666666666666,
        a = Math.max(3, c - 3),
        p = Math.max(1, ...(l || [])),
        o = p > 1e3 ? 1e3 : p > 100 ? 100 : 10,
        n = Math.ceil(p / o) * o,
        k = new Date().getHours();
    return s.jsxs("svg", {
        className: "hk-chart",
        viewBox: `0 -12 320 ${150 + 34}`,
        children: [
            [0, 0.5, 1].map((x) =>
                s.jsxs(
                    "g",
                    {
                        children: [
                            s.jsx("line", {
                                x1: "0",
                                x2: 320 - 40,
                                y1: 150 - x * 150,
                                y2: 150 - x * 150,
                                stroke: "#e5e5e5",
                                strokeWidth: "1",
                                strokeDasharray: x ? "3 3" : "",
                            }),
                            s.jsx("text", {
                                x: 320 - 40 + 4,
                                y: 150 - x * 150 + 4,
                                fontSize: "10",
                                fill: "#8e8e93",
                                children: Math.round(n * x).toLocaleString(),
                            }),
                        ],
                    },
                    x,
                ),
            ),
            Array.from({ length: 24 }, (x, i) => {
                const u = (l == null ? void 0 : l[i]) || 0,
                    h = u ? Math.max(2, (u / n) * 150) : 0,
                    v = i * c + (c - a) / 2;
                return s.jsxs(
                    "g",
                    {
                        children: [
                            h > 0 &&
                                s.jsx("rect", {
                                    x: v,
                                    y: 150 - h,
                                    width: a,
                                    height: h,
                                    rx: Math.min(2.5, a / 2),
                                    fill: i === k ? "#1c1c1e" : "#8e8e93",
                                }),
                            i % 6 === 0 &&
                                s.jsx("text", {
                                    x: v,
                                    y: 150 + 16,
                                    fontSize: "10",
                                    fill: "#8e8e93",
                                    children: `${i} 时`,
                                }),
                        ],
                    },
                    i,
                );
            }),
        ],
    });
}
function ee({ health: l, metric: r, onBack: t, onAdd: j }) {
    var u, h, v, y;
    const c = S[r],
        [a, p] = f.useState("W"),
        n = hs(l, r, a === "D" ? 1 : a === "W" ? 7 : 30),
        k = n.filter((N) => N.v != null),
        x = k.length ? k.reduce((N, w) => N + w.v, 0) / k.length : null,
        i = c.agg === "max" && a === "D" ? ((u = n[0]) == null ? void 0 : u.v) : x;
    return s.jsxs("div", {
        className: "hk-page",
        children: [
            s.jsxs("div", {
                className: "hk-nav",
                children: [
                    s.jsx("button", {
                        className: "hk-back btn-plain",
                        "aria-label": "返回",
                        onClick: t,
                        children: s.jsx(_, { size: 22, strokeWidth: 2.4 }),
                    }),
                    s.jsx("b", { className: "hk-nav-title", children: c.label }),
                    s.jsx("button", {
                        className: "hk-navbtn btn-plain",
                        onClick: j,
                        "aria-label": "添加数据",
                        children: s.jsx(Ks, { size: 20, strokeWidth: 2.4 }),
                    }),
                ],
            }),
            s.jsxs("div", {
                className: "hk-scroll",
                children: [
                    s.jsx("div", {
                        className: "hk-seg",
                        children: [
                            ["D", "日"],
                            ["W", "周"],
                            ["M", "月"],
                        ].map(([N, w]) =>
                            s.jsx(
                                "button",
                                { className: a === N ? "on" : "", onClick: () => p(N), children: w },
                                N,
                            ),
                        ),
                    }),
                    s.jsxs("div", {
                        className: "hk-detail-head",
                        children: [
                            s.jsx("small", {
                                children: a === "D" ? (c.agg === "max" ? "总计" : "最新") : "日均",
                            }),
                            s.jsxs("div", {
                                className: "hk-val big",
                                children: [
                                    s.jsx("b", { children: J(r, i) }),
                                    s.jsx("span", { children: c.unit }),
                                ],
                            }),
                            s.jsx("small", {
                                children:
                                    a === "D" ? g(n[0].key) : `${g(n[0].key)} – ${g(n[n.length - 1].key)}`,
                            }),
                        ],
                    }),
                    a === "D"
                        ? (y =
                              (v = (h = l.days) == null ? void 0 : h[n[0].key]) == null
                                  ? void 0
                                  : v._hourly) != null && y[r]
                            ? s.jsx("div", {
                                  className: "hk-chartbox",
                                  children: s.jsx(se, { hours: l.days[n[0].key]._hourly[r] }),
                              })
                            : s.jsx("div", {
                                  className: "hk-chartbox hk-chart-empty",
                                  children: Zs.includes(r)
                                      ? "按小时的分布要用 iOS App 版同步后才有"
                                      : "这一项按天记录，看「周」「月」的变化更直观",
                              })
                        : s.jsx("div", {
                              className: "hk-chartbox",
                              children: s.jsx(Gs, { data: n, unit: c.unit }),
                          }),
                    s.jsxs("div", {
                        className: "hk-group",
                        children: [
                            k
                                .slice()
                                .reverse()
                                .slice(0, 10)
                                .map((N) => {
                                    var w, z, W;
                                    return s.jsxs(
                                        "div",
                                        {
                                            className: "hk-row",
                                            children: [
                                                s.jsx("span", { children: g(N.key) }),
                                                s.jsxs("span", {
                                                    className: "hk-row-r",
                                                    children: [
                                                        J(r, N.v),
                                                        " ",
                                                        c.unit,
                                                        ((W =
                                                            (z = (w = l.days) == null ? void 0 : w[N.key]) ==
                                                            null
                                                                ? void 0
                                                                : z._src) == null
                                                            ? void 0
                                                            : W[r]) === "manual"
                                                            ? s.jsx("em", { children: "手动" })
                                                            : s.jsx("em", {
                                                                  children:
                                                                      K() === "android" ? "手机" : "iPhone",
                                                              }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        N.key,
                                    );
                                }),
                            !k.length &&
                                s.jsx("div", { className: "hk-row muted", children: "这段时间还没有数据" }),
                        ],
                    }),
                    s.jsxs("p", {
                        className: "hk-about",
                        children: [
                            s.jsxs("b", { children: ["关于", c.label] }),
                            "数据来自",
                            K() === "android"
                                ? "手机的 Health Connect（App 版直接读取）"
                                : "你的 iPhone 健康（App 版直接读取，网页版通过快捷指令同步）",
                            "或你在这里手动添加的记录。共享给 TA 的话，TA 会知道最近的数值 —— 只是知道，不会替你下结论。",
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ae({ health: l, onBack: r, onLog: t, chars: j = [], onDropNote: c, onEnd: a }) {
    var u;
    const p = l.cycle,
        o = ds(p),
        [n, k] = f.useState(A()),
        x = f.useMemo(() => {
            const h = [];
            for (let v = -cs; v <= 40; v++) h.push(A(Date.now() + v * 864e5));
            return h;
        }, []),
        i = ((u = p.logs) == null ? void 0 : u[n]) || {};
    return s.jsxs("div", {
        className: "hk-page",
        children: [
            s.jsxs("div", {
                className: "hk-nav",
                children: [
                    s.jsx("button", {
                        className: "hk-back btn-plain",
                        "aria-label": "返回",
                        onClick: r,
                        children: s.jsx(_, { size: 22, strokeWidth: 2.4 }),
                    }),
                    s.jsx("b", { className: "hk-nav-title", children: "周期跟踪" }),
                    s.jsx("span", {}),
                ],
            }),
            s.jsxs("div", {
                className: "hk-scroll",
                children: [
                    s.jsx("div", {
                        className: "hk-cyc-strip",
                        ref: (h) => {
                            h &&
                                !h.dataset.done &&
                                ((h.scrollLeft = 16 + cs * 46 + 21 - h.clientWidth / 2),
                                (h.dataset.done = "1"));
                        },
                        children: x.map((h) => {
                            const v = new Date(B(h)),
                                y = os(p, h);
                            return s.jsxs(
                                "button",
                                {
                                    className: `hk-cyc-day btn-plain ${n === h ? "sel" : ""} ${h === A() ? "today" : ""}`,
                                    onClick: () => k(h),
                                    children: [
                                        s.jsx("small", { children: ps[v.getDay()] }),
                                        s.jsx("i", { className: y, children: v.getDate() }),
                                    ],
                                },
                                h,
                            );
                        }),
                    }),
                    s.jsxs("div", {
                        className: "hk-cyc-legend",
                        children: [
                            s.jsxs("span", { children: [s.jsx("i", { className: "period" }), "经期"] }),
                            o.open &&
                                s.jsxs("span", { children: [s.jsx("i", { className: "ongoing" }), "推算"] }),
                            s.jsxs("span", {
                                children: [s.jsx("i", { className: "predicted" }), "预测经期"],
                            }),
                            s.jsxs("span", {
                                children: [s.jsx("i", { className: "fertile" }), "预测易孕期"],
                            }),
                        ],
                    }),
                    s.jsx("button", {
                        className: "hk-pill btn-plain",
                        onClick: () => t(n),
                        children: "添加时段",
                    }),
                    o.open &&
                        s.jsxs(s.Fragment, {
                            children: [
                                s.jsx("div", { className: "hk-sect", children: "本次经期" }),
                                s.jsxs("div", {
                                    className: "hk-group",
                                    children: [
                                        s.jsxs("div", {
                                            className: "hk-row",
                                            children: [
                                                s.jsx("span", { children: "开始" }),
                                                s.jsx("span", {
                                                    className: "hk-row-r",
                                                    children: g(o.open.start),
                                                }),
                                            ],
                                        }),
                                        s.jsxs("div", {
                                            className: "hk-row",
                                            children: [
                                                s.jsx("span", { children: "当前" }),
                                                s.jsxs("span", {
                                                    className: "hk-row-r",
                                                    children: [
                                                        "第 ",
                                                        o.dayOfPeriod,
                                                        " 天",
                                                        o.daysLeft > 0 ? ` · 预计还有 ${o.daysLeft} 天` : "",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        s.jsxs("button", {
                                            className: "hk-row btn-plain hk-row-act",
                                            onClick: () => a(n < A() && n >= o.open.start ? n : A()),
                                            children: [
                                                s.jsx("span", {
                                                    children:
                                                        n < A() && n >= o.open.start
                                                            ? `经期在${g(n)}结束`
                                                            : "经期已结束",
                                                }),
                                                s.jsx(C, { size: 15 }),
                                            ],
                                        }),
                                    ],
                                }),
                                s.jsx("p", {
                                    className: "hk-about",
                                    children:
                                        "记录第一天后，之后的日子会按平均经期长度自动推算并显示为经期，直到你标记结束。也可以在结束后的第一天记录流量「无」。选中前面的某一天再点，可把结束日设为那一天。",
                                }),
                            ],
                        }),
                    s.jsx("div", { className: "hk-sect", children: g(n) }),
                    s.jsxs("div", {
                        className: "hk-group",
                        children: [
                            s.jsxs("button", {
                                className: "hk-row btn-plain",
                                onClick: () => t(n),
                                children: [
                                    s.jsx("span", { children: "月经流量" }),
                                    s.jsxs("span", {
                                        className: "hk-row-r",
                                        children: [
                                            i.flow && i.flow !== "none" ? Ls[i.flow] : "未记录",
                                            s.jsx(C, { size: 15 }),
                                        ],
                                    }),
                                ],
                            }),
                            s.jsxs("button", {
                                className: "hk-row btn-plain",
                                onClick: () => t(n),
                                children: [
                                    s.jsx("span", { children: "症状" }),
                                    s.jsxs("span", {
                                        className: "hk-row-r",
                                        children: [
                                            (i.symptoms || []).length ? i.symptoms.join("、") : "未记录",
                                            s.jsx(C, { size: 15 }),
                                        ],
                                    }),
                                ],
                            }),
                            (i.by || i.src) && ((i.flow && i.flow !== "none") || (i.symptoms || []).length)
                                ? s.jsxs("div", {
                                      className: "hk-row",
                                      children: [
                                          s.jsx("span", { children: "记录来源" }),
                                          s.jsx("span", {
                                              className: "hk-row-r",
                                              children:
                                                  i.src === "ios"
                                                      ? "iOS 健康"
                                                      : i.by && i.by !== "me"
                                                        ? `${P(j.find((h) => h.id === i.by)) || "角色"} · 聊天中记录`
                                                        : "你自己",
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    Object.keys(i.notes || {}).length > 0 &&
                        s.jsxs(s.Fragment, {
                            children: [
                                s.jsx("div", { className: "hk-sect", children: "批注" }),
                                s.jsx("div", {
                                    className: "hk-group",
                                    children: Object.entries(i.notes).map(([h, v]) => {
                                        const y = j.find((N) => N.id === h);
                                        return s.jsxs(
                                            "div",
                                            {
                                                className: "hk-note",
                                                children: [
                                                    s.jsx("span", {
                                                        className: "hk-note-av",
                                                        children:
                                                            y != null && y.avatar
                                                                ? s.jsx(R, { src: y.avatar, alt: "" })
                                                                : s.jsx("b", {
                                                                      children: (P(y) || "·").slice(0, 1),
                                                                  }),
                                                    }),
                                                    s.jsxs("span", {
                                                        className: "hk-note-body",
                                                        children: [
                                                            s.jsx("small", {
                                                                children: P(y) || "已删除的角色",
                                                            }),
                                                            v.text,
                                                        ],
                                                    }),
                                                    s.jsx("button", {
                                                        className: "hk-note-x btn-plain",
                                                        "aria-label": "删除批注",
                                                        onClick: () => c(n, h),
                                                        children: s.jsx(js, { size: 14 }),
                                                    }),
                                                ],
                                            },
                                            h,
                                        );
                                    }),
                                }),
                            ],
                        }),
                    s.jsx("div", { className: "hk-sect", children: "预测" }),
                    s.jsxs("div", {
                        className: "hk-group",
                        children: [
                            s.jsxs("div", {
                                className: "hk-row",
                                children: [
                                    s.jsx("span", { children: "下次经期" }),
                                    s.jsx("span", {
                                        className: "hk-row-r",
                                        children: o.last
                                            ? o.late
                                                ? `已过 ${o.late} 天`
                                                : `${g(o.nextStart)}${o.inPeriod ? "" : ` · ${o.daysUntil} 天后`}`
                                            : "记录一次之后才能预测",
                                    }),
                                ],
                            }),
                            o.last &&
                                !o.inPeriod &&
                                s.jsxs("div", {
                                    className: "hk-row",
                                    children: [
                                        s.jsx("span", { children: "易孕期" }),
                                        s.jsx("span", {
                                            className: "hk-row-r",
                                            children: o.fertile ? "现在可能处于易孕期" : "不在易孕期",
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    s.jsx("div", { className: "hk-sect", children: "你的周期" }),
                    s.jsxs("div", {
                        className: "hk-group",
                        children: [
                            s.jsxs("div", {
                                className: "hk-row",
                                children: [
                                    s.jsx("span", { children: "平均周期长度" }),
                                    s.jsxs("span", { className: "hk-row-r", children: [o.cycleLen, " 天"] }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "hk-row",
                                children: [
                                    s.jsx("span", { children: "平均经期长度" }),
                                    s.jsxs("span", { className: "hk-row-r", children: [o.periodLen, " 天"] }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "hk-row",
                                children: [
                                    s.jsx("span", { children: "上次经期开始" }),
                                    s.jsx("span", {
                                        className: "hk-row-r",
                                        children: o.last ? g(o.last.start) : "—",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    s.jsx("p", {
                        className: "hk-about",
                        children:
                            "预测按 litot 里的经期记录推算，不是医学判断。记录在所有角色之间同步；允许记录的角色可在聊天中帮你记录或修改，并留下批注，批注只有写下它的角色能看到。在 App 中，记录会同步写回 iOS 健康。",
                    }),
                ],
            }),
        ],
    });
}
function ts({ label: l, value: r, mono: t }) {
    const j = q(),
        [c, a] = f.useState(!1),
        p = async () => {
            try {
                (await navigator.clipboard.writeText(r), a(!0), setTimeout(() => a(!1), 1500));
            } catch {
                j("复制失败，长按手动选中", "error");
            }
        };
    return s.jsxs("button", {
        className: "hk-row btn-plain",
        onClick: p,
        children: [
            s.jsxs("span", {
                className: "hk-copy-l",
                children: [
                    s.jsx("small", { children: l }),
                    s.jsx("b", { className: t ? "mono" : "", children: r }),
                ],
            }),
            s.jsx("span", {
                className: "hk-row-r",
                children: c ? s.jsx(Vs, { size: 17 }) : s.jsx(Js, { size: 17 }),
            }),
        ],
    });
}
const $ = (l, r, t) =>
    s.jsxs(
        "div",
        {
            className: "hk-step",
            children: [
                s.jsx("i", { children: l }),
                s.jsxs("div", { children: [s.jsx("b", { children: r }), t] }),
            ],
        },
        l,
    );
function ne({ health: l, onBack: r, saveHealth: t }) {
    const j = q(),
        [c, a] = f.useState(!1),
        p = `${Ps()}/v1/device-data`,
        o = l.setupToken || "",
        n = Ds(),
        k = async () => {
            var i;
            a(!0);
            try {
                const u = await _s("iPhone 健康"),
                    h = (i = u == null ? void 0 : u.pair) == null ? void 0 : i.pair_token;
                if (!h) throw new Error("没拿到口令");
                (t((v) => ({ ...v, setupToken: h })), j("口令已生成", "success"));
            } catch (u) {
                j(`生成失败：${(u == null ? void 0 : u.message) || u}`, "error");
            } finally {
                a(!1);
            }
        },
        x = l.lastReceived;
    return s.jsxs("div", {
        className: "hk-page",
        children: [
            s.jsxs("div", {
                className: "hk-nav",
                children: [
                    s.jsx("button", {
                        className: "hk-back btn-plain",
                        "aria-label": "返回",
                        onClick: r,
                        children: s.jsx(_, { size: 22, strokeWidth: 2.4 }),
                    }),
                    s.jsx("b", { className: "hk-nav-title", children: "设置同步" }),
                    s.jsx("span", {}),
                ],
            }),
            s.jsxs("div", {
                className: "hk-scroll",
                children: [
                    s.jsx("p", {
                        className: "hk-about",
                        style: { marginTop: 4 },
                        children:
                            "网页读不了 iPhone 的健康数据，只有「快捷指令」能读。所以搭一条快捷指令：它读健康 App → 传到这里。 搭好之后设成每天自动跑，或者在「共享」里点「从健康 App 同步」随时跑一次。",
                    }),
                    s.jsx("div", { className: "hk-sect", children: "① 地址和口令（填进快捷指令里）" }),
                    s.jsxs("div", {
                        className: "hk-group",
                        children: [
                            s.jsx(ts, { label: "URL", value: p, mono: !0 }),
                            o
                                ? s.jsx(ts, { label: "口令（JSON 里 token 字段的值）", value: o, mono: !0 })
                                : s.jsx("button", {
                                      className: "hk-row btn-plain",
                                      onClick: n ? k : void 0,
                                      disabled: c || !n,
                                      children: s.jsx("span", {
                                          className: "hk-blue",
                                          children: n
                                              ? c
                                                  ? "生成中…"
                                                  : "生成口令"
                                              : "先在「设置 → 云同步」登录",
                                      }),
                                  }),
                        ],
                    }),
                    s.jsxs("div", { className: "hk-sect", children: ["② 新建快捷指令「", V, "」"] }),
                    s.jsxs("div", {
                        className: "hk-card hk-steps",
                        children: [
                            $(
                                1,
                                "查找健康样本 · 步数",
                                s.jsx("p", {
                                    children: "类型「步数」，开始日期「是今天」，分组方式「天」。",
                                }),
                            ),
                            $(
                                2,
                                "查找健康样本 · 睡眠",
                                s.jsx("p", {
                                    children:
                                        "类型「睡眠分析」，开始日期「在过去 1 天」，值「不是 卧床」，再加一条值「不是 清醒」。",
                                }),
                            ),
                            $(
                                3,
                                "获取健康样本的详细信息",
                                s.jsx("p", { children: "选「时长」（作用于第 2 步的结果）。" }),
                            ),
                            $(
                                4,
                                "计算统计数据",
                                s.jsx("p", { children: "选「总和」（作用于第 3 步的结果）。" }),
                            ),
                            $(
                                5,
                                "查找健康样本 · 心率",
                                s.jsx("p", {
                                    children:
                                        "类型「心率」，排序方式「开始日期」，顺序「最新优先」，限制「1」。",
                                }),
                            ),
                            $(
                                6,
                                "获取 URL 内容",
                                s.jsxs("p", {
                                    children: [
                                        "URL 粘贴上面的地址；方法 POST；请求体选 JSON，加 5 个字段：",
                                        s.jsx("code", { children: "token" }),
                                        " 文本 = 口令（放请求体里，不放标头 —— 后台自动化跑时 iOS 有时会丢掉自定义标头），",
                                        s.jsx("code", { children: "kind" }),
                                        " 文本 ",
                                        s.jsx("code", { children: "health" }),
                                        "，",
                                        s.jsx("code", { children: "steps" }),
                                        " 选第 1 步，",
                                        s.jsx("code", { children: "sleep_hours" }),
                                        " 选第 4 步，",
                                        s.jsx("code", { children: "heart_rate" }),
                                        " 选第 5 步。",
                                    ],
                                }),
                            ),
                        ],
                    }),
                    s.jsx("div", { className: "hk-sect", children: "③ 每天自动跑" }),
                    s.jsxs("div", {
                        className: "hk-card hk-steps",
                        children: [
                            $(
                                1,
                                "自动化 → 新建 → 特定时间",
                                s.jsx("p", { children: "比如早上 9:00，「每天」，选「立即运行」。" }),
                            ),
                            $(
                                2,
                                "运行快捷指令",
                                s.jsxs("p", { children: ["选「", V, "」。想一天两次就再建一条晚上的。"] }),
                            ),
                        ],
                    }),
                    s.jsxs("div", { className: "hk-sect", children: ["④ 位置（可选）·「", Hs, "」"] }),
                    s.jsxs("div", {
                        className: "hk-card hk-steps",
                        children: [
                            $(1, "获取当前位置", null),
                            $(
                                2,
                                "获取 URL 内容",
                                s.jsxs("p", {
                                    children: [
                                        "同一个地址；JSON：",
                                        s.jsx("code", { children: "token" }),
                                        " = 口令，",
                                        s.jsx("code", { children: "kind" }),
                                        " 文本 ",
                                        s.jsx("code", { children: "location" }),
                                        "，",
                                        s.jsx("code", { children: "lat" }),
                                        " 选当前位置的「纬度」，",
                                        s.jsx("code", { children: "lon" }),
                                        " 选「经度」，",
                                        s.jsx("code", { children: "place" }),
                                        " 选「城市」或「名称」。",
                                    ],
                                }),
                            ),
                            $(
                                3,
                                "自动化",
                                s.jsx("p", {
                                    children:
                                        "「到达 / 离开」某地，或特定时间。TA 要在自主权限里开了「看你的位置」才看得到。",
                                }),
                            ),
                        ],
                    }),
                    s.jsx("div", { className: "hk-sect", children: "⑤ 检查：最近收到" }),
                    s.jsx("div", {
                        className: "hk-group",
                        children: x
                            ? Object.entries(x.payload || {})
                                  .filter(([i]) => i !== "date")
                                  .map(([i, u]) => {
                                      var h;
                                      return s.jsxs(
                                          "div",
                                          {
                                              className: "hk-row",
                                              children: [
                                                  s.jsx("span", {
                                                      children: ((h = S[i]) == null ? void 0 : h.label) || i,
                                                  }),
                                                  s.jsx("span", {
                                                      className: "hk-row-r",
                                                      children:
                                                          i === "sleep_hours"
                                                              ? `${(Ms(u) ?? 0).toFixed(1)} 小时`
                                                              : `${u}${S[i] ? ` ${S[i].unit}` : ""}`,
                                                  }),
                                              ],
                                          },
                                          i,
                                      );
                                  })
                            : s.jsx("div", {
                                  className: "hk-row muted",
                                  children: "还没收到。手动跑一次快捷指令，再回来点「共享 → 只刷新」。",
                              }),
                    }),
                    x
                        ? s.jsxs("p", {
                              className: "hk-about",
                              children: [
                                  "收到于 ",
                                  new Date(x.at).toLocaleString("zh-CN", {
                                      month: "numeric",
                                      day: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                  }),
                                  "。哪一项没有，就是快捷指令里那个字段没选对变量。",
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
function de({ onClose: l }) {
    var Z, ss;
    const { state: r, patch: t, patchChar: j } = vs(),
        c = q(),
        a = es(r),
        [p, o] = f.useState("summary"),
        [n, k] = f.useState(null),
        [x, i] = f.useState(null),
        [u, h] = f.useState(""),
        [v, y] = f.useState(null),
        [N, w] = f.useState(!1),
        [z, W] = f.useState(""),
        O = (e) => t((d) => ({ health: e(es(d)) })),
        L = r.characters || [],
        ks = async () => {
            w(!0);
            try {
                const e = await as(t);
                c(e ? `同步了 ${e} 条` : "没有新的数据");
            } catch (e) {
                c((e == null ? void 0 : e.message) || "同步失败", "error");
            } finally {
                w(!1);
            }
        };
    f.useEffect(() => {
        const e = () => {
            if (document.hidden || !fs()) return;
            w(!0);
            const d = () => as(t).catch(() => 0);
            setTimeout(async () => {
                let m = await d();
                (m || (await new Promise((b) => setTimeout(b, 5e3)), (m = await d())),
                    w(!1),
                    c(
                        m ? `已从健康 App 同步 ${m} 条` : "还没收到 —— 快捷指令跑完了吗？",
                        m ? "success" : "info",
                    ));
            }, 1500);
        };
        return (
            document.addEventListener("visibilitychange", e),
            () => document.removeEventListener("visibilitychange", e)
        );
    }, [t, c]);
    const D = bs(),
        H = K() === "android",
        U = H && !D,
        us = H ? "Health Connect" : "iPhone 健康",
        E = async (e = !1) => {
            w(!0);
            try {
                const d = a.nativeOn && !e ? await Cs(t, { quiet: !1 }) : await Ss(t, r, { fresh: e });
                c(d ? `已从健康同步 ${d} 条` : "已同步，没有新的数据", "success");
            } catch (d) {
                c(As(d), "error");
            } finally {
                w(!1);
            }
        },
        I = qs.filter((e) => F(a, e)),
        G = Object.keys(a.cycle.logs || {}).length > 0;
    let M = null;
    if ((n == null ? void 0 : n.kind) === "metric")
        M = s.jsx(ee, {
            health: a,
            metric: n.id,
            onBack: () => k(n.parent || null),
            onAdd: () => {
                (i(n.id), h(""));
            },
        });
    else if ((n == null ? void 0 : n.kind) === "cycle")
        M = s.jsx(ae, {
            health: a,
            chars: L,
            onBack: () => k(n.parent || null),
            onLog: (e) => y(e),
            onDropNote: (e, d) => {
                (O((m) => $s(m, e, d, "")), c("已删除批注"));
            },
            onEnd: (e) => {
                (O((d) => zs(d, e)), c("已标记经期结束"));
            },
        });
    else if ((n == null ? void 0 : n.kind) === "setup")
        M = s.jsx(ne, { health: a, saveHealth: O, onBack: () => k(null) });
    else if ((n == null ? void 0 : n.kind) === "cat") {
        const e = rs(n.id),
            d = Object.keys(S).filter((m) => S[m].cat === n.id);
        M = s.jsxs("div", {
            className: "hk-page",
            children: [
                s.jsxs("div", {
                    className: "hk-nav",
                    children: [
                        s.jsx("button", {
                            className: "hk-back btn-plain",
                            "aria-label": "返回",
                            onClick: () => k(null),
                            children: s.jsx(_, { size: 22, strokeWidth: 2.4 }),
                        }),
                        s.jsx("b", { className: "hk-nav-title", children: e.label }),
                        s.jsx("span", {}),
                    ],
                }),
                s.jsxs("div", {
                    className: "hk-scroll",
                    children: [
                        s.jsx("div", { className: "hk-sect", children: "有数据的项目" }),
                        d
                            .filter((m) => F(a, m))
                            .map((m) =>
                                s.jsx(
                                    is,
                                    {
                                        health: a,
                                        metric: m,
                                        onOpen: () => k({ kind: "metric", id: m, parent: n }),
                                    },
                                    m,
                                ),
                            ),
                        !d.some((m) => F(a, m)) &&
                            s.jsxs("div", {
                                className: "hk-empty-row",
                                children: ["还没有", e.label, "数据"],
                            }),
                        s.jsxs("div", { className: "hk-sect", children: ["所有", e.label, "数据"] }),
                        s.jsx("div", {
                            className: "hk-group",
                            children: d.map((m) =>
                                s.jsxs(
                                    "button",
                                    {
                                        className: "hk-row btn-plain",
                                        onClick: () => k({ kind: "metric", id: m, parent: n }),
                                        children: [
                                            s.jsx("span", { children: S[m].label }),
                                            s.jsx(C, { size: 15, className: "hk-chev" }),
                                        ],
                                    },
                                    m,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        });
    }
    return s.jsxs("div", {
        className: "hk",
        children: [
            M ||
                s.jsxs("div", {
                    className: "hk-page",
                    children: [
                        s.jsxs("div", {
                            className: "hk-topbar",
                            children: [
                                s.jsx("button", {
                                    className: "hk-close btn-plain",
                                    onClick: l,
                                    "aria-label": "关闭",
                                    children: s.jsx(_, { size: 22, strokeWidth: 2.4 }),
                                }),
                                p === "summary" &&
                                    s.jsx("span", {
                                        className: "hk-me",
                                        children:
                                            (Z = r.me) != null && Z.avatar
                                                ? s.jsx(R, { src: r.me.avatar, alt: "" })
                                                : (
                                                      ((ss = r.me) == null ? void 0 : ss.nickname) || "我"
                                                  ).slice(0, 1),
                                    }),
                            ],
                        }),
                        s.jsxs("div", {
                            className: "hk-scroll",
                            children: [
                                p === "summary" &&
                                    s.jsxs(s.Fragment, {
                                        children: [
                                            s.jsx("h1", { className: "hk-title", children: "摘要" }),
                                            s.jsxs("div", {
                                                className: "hk-sect-row",
                                                children: [
                                                    s.jsx("span", { children: "已固定" }),
                                                    s.jsx("button", {
                                                        className: "hk-link btn-plain",
                                                        onClick: () => o("browse"),
                                                        children: "编辑",
                                                    }),
                                                ],
                                            }),
                                            G &&
                                                s.jsx(Xs, {
                                                    cycle: a.cycle,
                                                    onOpen: () => k({ kind: "cycle" }),
                                                }),
                                            I.map((e) =>
                                                s.jsx(
                                                    is,
                                                    {
                                                        health: a,
                                                        metric: e,
                                                        onOpen: () => k({ kind: "metric", id: e }),
                                                    },
                                                    e,
                                                ),
                                            ),
                                            !G &&
                                                s.jsxs("button", {
                                                    className: "hk-card btn-plain",
                                                    onClick: () => k({ kind: "cycle" }),
                                                    children: [
                                                        s.jsxs("div", {
                                                            className: "hk-card-top",
                                                            children: [
                                                                s.jsx(X, { cat: "cycle" }),
                                                                s.jsx("span", {
                                                                    className: "hk-card-when",
                                                                    children: s.jsx(C, {
                                                                        size: 14,
                                                                        strokeWidth: 2.6,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        s.jsx("div", {
                                                            className: "hk-card-body",
                                                            children: s.jsx("div", {
                                                                className: "hk-val",
                                                                children: s.jsx("span", {
                                                                    children: "记录经期，预测下一次",
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            !I.length &&
                                                U &&
                                                s.jsxs("div", {
                                                    className: "hk-card hk-card-cta",
                                                    children: [
                                                        s.jsx("div", {
                                                            className: "hk-cta-ic",
                                                            children: s.jsx(ns, { size: 22 }),
                                                        }),
                                                        s.jsx("b", { children: "记录你的健康数据" }),
                                                        s.jsx("p", {
                                                            children:
                                                                "这个版本的安卓 App 还不能自动读取手机里的健康数据（更新到最新版就可以），可以先在「浏览」里手动添加步数、睡眠、心率这些，经期在周期跟踪里记。",
                                                        }),
                                                        s.jsx("button", {
                                                            className: "hk-pill btn-plain",
                                                            onClick: () => o("browse"),
                                                            children: "去浏览",
                                                        }),
                                                    ],
                                                }),
                                            !I.length &&
                                                !U &&
                                                s.jsxs("div", {
                                                    className: "hk-card hk-card-cta",
                                                    children: [
                                                        s.jsx("div", {
                                                            className: "hk-cta-ic",
                                                            children: s.jsx(ns, { size: 22 }),
                                                        }),
                                                        s.jsx("b", {
                                                            children: H
                                                                ? "接入手机的健康数据"
                                                                : "接入 iPhone 的健康数据",
                                                        }),
                                                        s.jsxs("p", {
                                                            children: [
                                                                H
                                                                    ? "在 Health Connect 里授权一次，之后打开 App 时自动同步步数、睡眠、心率和经期；"
                                                                    : D
                                                                      ? "授权一次，之后自动同步步数、睡眠、心率和经期；"
                                                                      : "用快捷指令把步数、睡眠、心率这些同步过来；",
                                                                "也可以在「浏览」里手动添加。",
                                                            ],
                                                        }),
                                                        s.jsx("button", {
                                                            className: "hk-pill btn-plain",
                                                            onClick: () => (D ? E(!1) : k({ kind: "setup" })),
                                                            children: D ? "连接健康 App" : "去设置",
                                                        }),
                                                    ],
                                                }),
                                            s.jsxs("button", {
                                                className: "hk-group hk-all btn-plain",
                                                onClick: () => o("browse"),
                                                children: [
                                                    "显示所有健康数据",
                                                    s.jsx(C, { size: 15, className: "hk-chev" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                p === "sharing" &&
                                    s.jsxs(s.Fragment, {
                                        children: [
                                            s.jsx("h1", { className: "hk-title", children: "共享" }),
                                            s.jsxs("div", {
                                                className: "hk-card hk-share-hero",
                                                children: [
                                                    s.jsx("div", {
                                                        className: "hk-share-ic",
                                                        children: s.jsx(ls, { size: 26 }),
                                                    }),
                                                    s.jsx("b", { children: "与 TA 共享你的健康数据" }),
                                                    s.jsx("p", {
                                                        children:
                                                            "开着的人能知道你最近的步数、睡眠、心率，以及你是不是在经期、下次大概什么时候。只是知道，提不提、怎么关心由 TA 自己判断。",
                                                    }),
                                                ],
                                            }),
                                            s.jsx("div", { className: "hk-sect", children: "共享对象" }),
                                            s.jsxs("div", {
                                                className: "hk-group",
                                                children: [
                                                    L.map((e) => {
                                                        var m;
                                                        const d =
                                                            ((m = e.autonomy) == null
                                                                ? void 0
                                                                : m.canSeeHealth) === !0;
                                                        return s.jsxs(
                                                            "div",
                                                            {
                                                                className: "hk-row",
                                                                children: [
                                                                    s.jsxs("span", {
                                                                        className: "hk-person",
                                                                        children: [
                                                                            s.jsx("i", {
                                                                                children: e.avatar
                                                                                    ? s.jsx(R, {
                                                                                          src: e.avatar,
                                                                                          alt: "",
                                                                                      })
                                                                                    : (e.name || "·").slice(
                                                                                          0,
                                                                                          1,
                                                                                      ),
                                                                            }),
                                                                            P(e),
                                                                        ],
                                                                    }),
                                                                    s.jsx("button", {
                                                                        className: `hk-switch btn-plain ${d ? "on" : ""}`,
                                                                        onClick: () =>
                                                                            j(e.id, (b) => ({
                                                                                autonomy: {
                                                                                    ...(b.autonomy || {}),
                                                                                    canSeeHealth: !d,
                                                                                },
                                                                            })),
                                                                        "aria-label": "共享开关",
                                                                        children: s.jsx("i", {}),
                                                                    }),
                                                                ],
                                                            },
                                                            e.id,
                                                        );
                                                    }),
                                                    !L.length &&
                                                        s.jsx("div", {
                                                            className: "hk-row muted",
                                                            children: "还没有联系人",
                                                        }),
                                                ],
                                            }),
                                            L.some((e) => {
                                                var d;
                                                return (
                                                    ((d = e.autonomy) == null ? void 0 : d.canSeeHealth) ===
                                                    !0
                                                );
                                            }) &&
                                                s.jsxs(s.Fragment, {
                                                    children: [
                                                        s.jsx("div", {
                                                            className: "hk-sect",
                                                            children: "可帮你记录经期",
                                                        }),
                                                        s.jsx("div", {
                                                            className: "hk-group",
                                                            children: L.filter((e) => {
                                                                var d;
                                                                return (
                                                                    ((d = e.autonomy) == null
                                                                        ? void 0
                                                                        : d.canSeeHealth) === !0
                                                                );
                                                            }).map((e) => {
                                                                var m;
                                                                const d =
                                                                    ((m = e.autonomy) == null
                                                                        ? void 0
                                                                        : m.canLogCycle) !== !1;
                                                                return s.jsxs(
                                                                    "div",
                                                                    {
                                                                        className: "hk-row",
                                                                        children: [
                                                                            s.jsxs("span", {
                                                                                className: "hk-person",
                                                                                children: [
                                                                                    s.jsx("i", {
                                                                                        children: e.avatar
                                                                                            ? s.jsx(R, {
                                                                                                  src: e.avatar,
                                                                                                  alt: "",
                                                                                              })
                                                                                            : (
                                                                                                  e.name ||
                                                                                                  "·"
                                                                                              ).slice(0, 1),
                                                                                    }),
                                                                                    P(e),
                                                                                ],
                                                                            }),
                                                                            s.jsx("button", {
                                                                                className: `hk-switch btn-plain ${d ? "on" : ""}`,
                                                                                onClick: () =>
                                                                                    j(e.id, (b) => ({
                                                                                        autonomy: {
                                                                                            ...(b.autonomy ||
                                                                                                {}),
                                                                                            canLogCycle: !d,
                                                                                        },
                                                                                    })),
                                                                                "aria-label": "记录开关",
                                                                                children: s.jsx("i", {}),
                                                                            }),
                                                                        ],
                                                                    },
                                                                    e.id,
                                                                );
                                                            }),
                                                        }),
                                                        s.jsx("p", {
                                                            className: "hk-about",
                                                            children:
                                                                "你在聊天中提到经期时，开着的人可以帮你记录或修改当天的流量和症状，并留下只属于 TA 的批注。记录在所有人之间同步；记错的可以在周期跟踪里改回来，批注可以删除。",
                                                        }),
                                                    ],
                                                }),
                                            U
                                                ? s.jsxs(s.Fragment, {
                                                      children: [
                                                          s.jsx("div", {
                                                              className: "hk-sect",
                                                              children: "数据来源",
                                                          }),
                                                          s.jsx("p", {
                                                              className: "hk-about",
                                                              children:
                                                                  "这个版本的安卓 App 还不能自动读取手机里的健康数据，这里的数据都是你自己手动记的。更新到最新版的 App 后可以连接 Health Connect。",
                                                          }),
                                                      ],
                                                  })
                                                : D
                                                  ? s.jsxs(s.Fragment, {
                                                        children: [
                                                            s.jsx("div", {
                                                                className: "hk-sect",
                                                                children: "数据来源",
                                                            }),
                                                            s.jsxs("div", {
                                                                className: "hk-group",
                                                                children: [
                                                                    s.jsxs("div", {
                                                                        className: "hk-row",
                                                                        children: [
                                                                            s.jsx("span", { children: us }),
                                                                            s.jsx("span", {
                                                                                className: "hk-row-r",
                                                                                children: a.nativeOn
                                                                                    ? a.lastSyncAt
                                                                                        ? `${g(A(a.lastSyncAt))} ${new Date(a.lastSyncAt).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })} 已同步`
                                                                                        : "已连接"
                                                                                    : "未连接",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    a.nativeOn
                                                                        ? s.jsxs(s.Fragment, {
                                                                              children: [
                                                                                  s.jsxs("button", {
                                                                                      className:
                                                                                          "hk-row btn-plain",
                                                                                      onClick: () => E(!1),
                                                                                      disabled: N,
                                                                                      children: [
                                                                                          s.jsx("span", {
                                                                                              className:
                                                                                                  "hk-blue",
                                                                                              children: N
                                                                                                  ? "正在同步…"
                                                                                                  : "立即同步",
                                                                                          }),
                                                                                          N
                                                                                              ? s.jsx(Y, {
                                                                                                    size: 15,
                                                                                                    className:
                                                                                                        "hk-spin",
                                                                                                })
                                                                                              : null,
                                                                                      ],
                                                                                  }),
                                                                                  s.jsxs("button", {
                                                                                      className:
                                                                                          "hk-row btn-plain",
                                                                                      onClick: () => E(!0),
                                                                                      disabled: N,
                                                                                      children: [
                                                                                          s.jsx("span", {
                                                                                              children:
                                                                                                  "重新连接",
                                                                                          }),
                                                                                          s.jsx("span", {
                                                                                              className:
                                                                                                  "hk-row-r",
                                                                                              children:
                                                                                                  "换一个同步口令",
                                                                                          }),
                                                                                      ],
                                                                                  }),
                                                                              ],
                                                                          })
                                                                        : s.jsxs("button", {
                                                                              className: "hk-row btn-plain",
                                                                              onClick: () => E(!1),
                                                                              disabled: N,
                                                                              children: [
                                                                                  s.jsx("span", {
                                                                                      className: "hk-blue",
                                                                                      children: N
                                                                                          ? "正在连接…"
                                                                                          : "连接健康 App",
                                                                                  }),
                                                                                  N
                                                                                      ? s.jsx(Y, {
                                                                                            size: 15,
                                                                                            className:
                                                                                                "hk-spin",
                                                                                        })
                                                                                      : s.jsx(C, {
                                                                                            size: 15,
                                                                                            className:
                                                                                                "hk-chev",
                                                                                        }),
                                                                              ],
                                                                          }),
                                                                ],
                                                            }),
                                                            a.nativeError
                                                                ? s.jsx("p", {
                                                                      className: "hk-about hk-err",
                                                                      children: a.nativeError,
                                                                  })
                                                                : null,
                                                            s.jsx("p", {
                                                                className: "hk-about",
                                                                children: H
                                                                    ? a.nativeOn
                                                                        ? "已经和 Health Connect 连上了：App 开着时每分钟同步一次（安卓不会在后台叫醒 App 同步）。想改给了哪些数据：系统设置 → Health Connect →「应用权限」→ LiToT。"
                                                                        : "点「连接健康 App」会弹出 Health Connect 的授权，勾上要同步的项目（步数、睡眠、心率、经期……）点允许，之后就会自动同步。手机上没有 Health Connect 时会先打开应用商店。"
                                                                    : a.nativeOn
                                                                      ? "已经和 iPhone 的健康连上了：打开 App 时、健康里有新数据时都会自动同步（后台的频率由 iOS 决定，大约一小时内）。想改给了哪些数据：iPhone 设置 → 健康 → 数据访问与设备 → litot。"
                                                                      : "点「连接健康 App」会弹出 iPhone 的健康授权，勾上要同步的项目（步数、睡眠、心率、经期……）点允许，之后就会自动同步。",
                                                            }),
                                                        ],
                                                    })
                                                  : s.jsxs(s.Fragment, {
                                                        children: [
                                                            s.jsx("div", {
                                                                className: "hk-sect",
                                                                children: "数据来源",
                                                            }),
                                                            s.jsxs("div", {
                                                                className: "hk-group",
                                                                children: [
                                                                    s.jsxs("div", {
                                                                        className: "hk-row",
                                                                        children: [
                                                                            s.jsx("span", {
                                                                                children: "iPhone 健康",
                                                                            }),
                                                                            s.jsx("span", {
                                                                                className: "hk-row-r",
                                                                                children: a.lastSyncAt
                                                                                    ? `${g(A(a.lastSyncAt))} ${new Date(a.lastSyncAt).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })} 已同步`
                                                                                    : "还没同步过",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    s.jsxs("button", {
                                                                        className: "hk-row btn-plain",
                                                                        onClick: () => ys(),
                                                                        disabled: N,
                                                                        children: [
                                                                            s.jsx("span", {
                                                                                className: "hk-blue",
                                                                                children: N
                                                                                    ? "正在同步…"
                                                                                    : "从健康 App 同步",
                                                                            }),
                                                                            N
                                                                                ? s.jsx(Y, {
                                                                                      size: 15,
                                                                                      className: "hk-spin",
                                                                                  })
                                                                                : s.jsx(C, {
                                                                                      size: 15,
                                                                                      className: "hk-chev",
                                                                                  }),
                                                                        ],
                                                                    }),
                                                                    s.jsxs("button", {
                                                                        className: "hk-row btn-plain",
                                                                        onClick: ks,
                                                                        disabled: N,
                                                                        children: [
                                                                            s.jsx("span", {
                                                                                children: "只刷新",
                                                                            }),
                                                                            s.jsx("span", {
                                                                                className: "hk-row-r",
                                                                                children: "拉服务器上已有的",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    s.jsxs("button", {
                                                                        className: "hk-row btn-plain",
                                                                        onClick: () => k({ kind: "setup" }),
                                                                        children: [
                                                                            s.jsx("span", {
                                                                                children: "设置同步",
                                                                            }),
                                                                            s.jsx(C, {
                                                                                size: 15,
                                                                                className: "hk-chev",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            s.jsxs("p", {
                                                                className: "hk-about",
                                                                children: [
                                                                    "「从健康 App 同步」会打开快捷指令跑「",
                                                                    V,
                                                                    "」，跑完回到这里自动拉取。第一次用先点「设置同步」搭好那条快捷指令。",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                        ],
                                    }),
                                p === "browse" &&
                                    s.jsxs(s.Fragment, {
                                        children: [
                                            s.jsx("h1", { className: "hk-title", children: "浏览" }),
                                            s.jsxs("label", {
                                                className: "hk-search",
                                                children: [
                                                    s.jsx(Ws, { size: 17 }),
                                                    s.jsx("input", {
                                                        value: z,
                                                        onChange: (e) => W(e.target.value),
                                                        placeholder: "搜索",
                                                    }),
                                                ],
                                            }),
                                            s.jsx("div", { className: "hk-sect", children: "健康类别" }),
                                            s.jsx("div", {
                                                className: "hk-group",
                                                children: gs
                                                    .filter(
                                                        (e) =>
                                                            !z ||
                                                            e.label.includes(z) ||
                                                            Object.values(S).some(
                                                                (d) => d.cat === e.id && d.label.includes(z),
                                                            ),
                                                    )
                                                    .map((e) => {
                                                        const d = ms[e.id] || Q;
                                                        return s.jsxs(
                                                            "button",
                                                            {
                                                                className: "hk-row btn-plain",
                                                                onClick: () =>
                                                                    k(
                                                                        e.id === "cycle"
                                                                            ? { kind: "cycle" }
                                                                            : { kind: "cat", id: e.id },
                                                                    ),
                                                                children: [
                                                                    s.jsxs("span", {
                                                                        className: "hk-browse-l",
                                                                        children: [
                                                                            s.jsx("i", {
                                                                                className: `hk-ic ${e.id === "cycle" ? "is-cycle" : ""}`,
                                                                                children: s.jsx(d, {
                                                                                    size: 17,
                                                                                    strokeWidth: 2.2,
                                                                                }),
                                                                            }),
                                                                            e.label,
                                                                        ],
                                                                    }),
                                                                    s.jsx(C, {
                                                                        size: 15,
                                                                        className: "hk-chev",
                                                                    }),
                                                                ],
                                                            },
                                                            e.id,
                                                        );
                                                    }),
                                            }),
                                        ],
                                    }),
                                s.jsx("div", { style: { height: 96 } }),
                            ],
                        }),
                        s.jsx("nav", {
                            className: "hk-tabs",
                            children: [
                                ["summary", "摘要", xs],
                                ["sharing", "共享", ls],
                                ["browse", "浏览", Es],
                            ].map(([e, d, m]) =>
                                s.jsxs(
                                    "button",
                                    {
                                        className: `btn-plain ${p === e ? "on" : ""}`,
                                        onClick: () => {
                                            (o(e), k(null));
                                        },
                                        children: [
                                            s.jsx(m, { size: 21, strokeWidth: p === e ? 2.4 : 2 }),
                                            s.jsx("span", { children: d }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            x &&
                s.jsx("div", {
                    className: "hk-sheet",
                    onClick: () => i(null),
                    children: s.jsxs("div", {
                        className: "hk-sheet-card",
                        onClick: (e) => e.stopPropagation(),
                        children: [
                            s.jsxs("div", {
                                className: "hk-sheet-head",
                                children: [
                                    s.jsx("button", {
                                        className: "btn-plain hk-link",
                                        onClick: () => i(null),
                                        children: "取消",
                                    }),
                                    s.jsx("b", { children: S[x].label }),
                                    s.jsx("button", {
                                        className: "btn-plain hk-link strong",
                                        disabled: u === "",
                                        onClick: () => {
                                            (O((e) => Ts(e, A(), x, Number(u))), i(null), c("已添加"));
                                        },
                                        children: "添加",
                                    }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "hk-group",
                                children: [
                                    s.jsxs("div", {
                                        className: "hk-row",
                                        children: [
                                            s.jsx("span", { children: "日期" }),
                                            s.jsx("span", { className: "hk-row-r", children: "今天" }),
                                        ],
                                    }),
                                    s.jsxs("div", {
                                        className: "hk-row",
                                        children: [
                                            s.jsx("span", { children: S[x].unit }),
                                            s.jsx("input", {
                                                className: "hk-input",
                                                inputMode: "decimal",
                                                autoFocus: !0,
                                                value: u,
                                                onChange: (e) => h(e.target.value.replace(/[^\d.]/g, "")),
                                                placeholder: "0",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            v &&
                (() => {
                    var m;
                    const e = ((m = a.cycle.logs) == null ? void 0 : m[v]) || {},
                        d = (b) => O((T) => Os(T, v, b, { by: "me" }));
                    return s.jsx("div", {
                        className: "hk-sheet",
                        onClick: () => y(null),
                        children: s.jsxs("div", {
                            className: "hk-sheet-card",
                            onClick: (b) => b.stopPropagation(),
                            children: [
                                s.jsxs("div", {
                                    className: "hk-sheet-head",
                                    children: [
                                        s.jsx("span", {}),
                                        s.jsx("b", { children: g(v) }),
                                        s.jsx("button", {
                                            className: "btn-plain hk-link strong",
                                            onClick: () => y(null),
                                            children: "完成",
                                        }),
                                    ],
                                }),
                                s.jsx("div", { className: "hk-sect", children: "月经流量" }),
                                s.jsx("div", {
                                    className: "hk-flow",
                                    children: [
                                        ["none", "无"],
                                        ["spotting", "点滴"],
                                        ["light", "少"],
                                        ["medium", "中等"],
                                        ["heavy", "多"],
                                    ].map(([b, T]) =>
                                        s.jsxs(
                                            "button",
                                            {
                                                className: `btn-plain ${(e.flow || "none") === b ? "on" : ""}`,
                                                onClick: () => d({ flow: b }),
                                                children: [s.jsx("i", { className: `f-${b}` }), T],
                                            },
                                            b,
                                        ),
                                    ),
                                }),
                                s.jsx("div", { className: "hk-sect", children: "症状" }),
                                s.jsx("div", {
                                    className: "hk-chips",
                                    children: ws.map((b) => {
                                        const T = (e.symptoms || []).includes(b);
                                        return s.jsx(
                                            "button",
                                            {
                                                className: `btn-plain ${T ? "on" : ""}`,
                                                onClick: () =>
                                                    d({
                                                        symptoms: T
                                                            ? e.symptoms.filter((Ns) => Ns !== b)
                                                            : [...(e.symptoms || []), b],
                                                    }),
                                                children: b,
                                            },
                                            b,
                                        );
                                    }),
                                }),
                                s.jsx("button", {
                                    className: "hk-close-x btn-plain",
                                    onClick: () => y(null),
                                    "aria-label": "关闭",
                                    children: s.jsx(js, { size: 16 }),
                                }),
                            ],
                        }),
                    });
                })(),
        ],
    });
}
export { de as default };
