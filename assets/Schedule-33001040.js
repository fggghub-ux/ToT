import { r as b, j as e, R as Hs } from "./vendor-react-3a46a5d3.js";
import {
    aw as Re,
    bo as Ge,
    bz as He,
    cx as Ks,
    b$ as Tt,
    cy as At,
    bI as Us,
    cz as Ie,
    cA as Ke,
    cB as Ms,
    cC as qs,
    cD as Mt,
    bv as Pe,
    aJ as Ot,
    bA as Et,
    bM as Js,
    cE as It,
    cF as Pt,
    f as zt,
} from "./vendor-icons-e63d3118.js";
import {
    ac as Ze,
    ad as Vs,
    ae as Ft,
    af as es,
    ag as ss,
    ah as ts,
    ai as ns,
    aj as ze,
    ak as de,
    al as te,
    am as Os,
    an as Rt,
    ao as Lt,
    ap as _t,
    aq as as,
    ar as ls,
    as as Bt,
    at as Yt,
    au as Wt,
    av as Gt,
    aw as Xs,
    u as $e,
    a as De,
    ax as Es,
    ay as ne,
    l as Qs,
    az as Ht,
    aA as Kt,
    A as Ut,
    aB as qt,
    aC as Jt,
    aD as Vt,
    p as Xt,
    aE as Qt,
    aF as Zt,
    aG as en,
    q as sn,
    aH as Ue,
    aI as We,
    aJ as Zs,
    aK as qe,
    aL as Is,
    aM as Je,
    aN as ye,
    aO as tn,
    aP as nn,
    aQ as et,
    aR as an,
    aS as ln,
    aT as Ps,
    aU as cn,
    aV as rn,
    aW as dn,
    aX as zs,
    aY as on,
    aZ as hn,
    a_ as un,
    a$ as Fs,
    b0 as Oe,
    b1 as mn,
    b2 as xn,
    b3 as jn,
    b4 as pn,
} from "./app-2c902988.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const ve = (s) => String(s).padStart(2, "0"),
    Rs = (s) => `${s.getFullYear()}-${ve(s.getMonth() + 1)}-${ve(s.getDate())}`;
function gn(s, t = 0) {
    let a = 7,
        h = 24;
    for (const i of s) {
        const c = new Date(i.occurrenceStart + t).getHours(),
            p = i.occurrenceEnd ? new Date(i.occurrenceEnd + t).getHours() + 1 : c + 1;
        ((a = Math.min(a, c)), (h = Math.max(h, p)));
    }
    return { from: Math.max(0, a - 1), to: Math.min(28, Math.max(h, a + 6)) };
}
const Ee = 52;
function fn(s, t, a) {
    const h = s
            .map((o) => ({
                key: `${o.id}@${o.occurrenceStart}`,
                top: a(o.occurrenceStart),
                bottom: a(o.occurrenceStart) + t(o),
            }))
            .sort((o, l) => o.top - l.top || l.bottom - o.bottom),
        i = new Map();
    let c = [],
        p = [],
        f = -1 / 0;
    const d = () => {
        for (const o of c) i.set(o.key, { col: o.col, cols: p.length });
        ((c = []), (p = []));
    };
    for (const o of h) {
        o.top >= f && (d(), (f = -1 / 0));
        let l = p.findIndex((x) => x <= o.top);
        (l < 0 ? ((l = p.length), p.push(o.bottom)) : (p[l] = o.bottom),
            (o.col = l),
            c.push(o),
            (f = Math.max(f, o.bottom)));
    }
    return (d(), i);
}
const bn = (s, t) => {
    if (!s || s.cols < 2) return null;
    const a = `(100% - ${54 + (t ? 48 : 12)}px)`;
    return {
        left: `calc(54px + ${a} * ${s.col / s.cols})`,
        right: "auto",
        width: `calc(${a} / ${s.cols} - 4px)`,
    };
};
function Nn({ char: s, date: t, onPick: a, onNew: h, onSummary: i, summary: c }) {
    const [p, f] = b.useState(Date.now());
    b.useEffect(() => {
        const j = setInterval(() => f(Date.now()), 6e4);
        return () => clearInterval(j);
    }, []);
    const d = Ze(s, p),
        o = Rs(t) === Rs(new Date(p + d)),
        l = o ? p : 0,
        x = b.useMemo(() => Vs(s, t, d).filter((j) => !j.untimed), [s, t, p, d]),
        { current: N, recent: C } = b.useMemo(() => Ft(s, p), [s, p]),
        { from: D, to: Y } = gn(x, d),
        A = (j) => {
            const m = (((j * 60 - d / 6e4) % 1440) + 1440) % 1440;
            return `${ve(Math.floor(m / 60))}:${ve(m % 60)}`;
        },
        $ = Array.from({ length: Y - D }, (j, m) => D + m),
        z = b.useRef(null),
        R = (j) => {
            if (j.kind !== "travel" || !ze(j) || !j.occurrenceEnd) return "";
            const m = Rt(j.occurrenceEnd, Lt(j.placeTz) || _t(j.place));
            return m &&
                m.clock !==
                    de(
                        { ...j, occurrenceEnd: 0, allDay: !1, timeTbd: !1, occurrenceStart: j.occurrenceEnd },
                        d,
                    )
                ? ` · ${j.place} ${m.clock} 到`
                : "";
        },
        H = (j) => {
            const m = new Date(j + d);
            return (m.getHours() + m.getMinutes() / 60 - D) * Ee;
        },
        S = (j) =>
            j.occurrenceEnd ? Math.max(34, ((j.occurrenceEnd - j.occurrenceStart) / 36e5) * Ee - 4) : 34,
        w = b.useMemo(() => fn(x, S, H), [x, D, d]);
    b.useEffect(() => {
        if (!o || !z.current) return;
        const j = H(Date.now()) - 160;
        z.current.scrollTop = Math.max(0, j);
    }, [o, D]);
    const M = es(s, { deviceTz: ss() }),
        _ = ts(t, M.regions || [M.his, M.hers]).filter((j) => j.weight >= 0.6),
        K = ns(t, M.his),
        O = N[0] || null,
        L = O ? null : C[0],
        q = [];
    for (const j of x) {
        if (!j.place || j.status === "skipped") continue;
        const m = q[q.length - 1];
        if (m && m.place === j.place) {
            m.end = j.occurrenceEnd || j.occurrenceStart;
            continue;
        }
        q.push({
            place: j.place,
            start: j.occurrenceStart,
            end: j.occurrenceEnd || j.occurrenceStart,
            travel: ze(j),
        });
    }
    const V = o ? q.reduce((j, m, G) => (m.start <= l ? G : j), -1) : -1,
        B = (O == null ? void 0 : O.place) || (V >= 0 ? q[V].place : "");
    return e.jsxs("div", {
        className: "sch-day",
        children: [
            e.jsxs("div", {
                className: "sch-hero",
                children: [
                    e.jsxs("div", {
                        className: "sch-hero-top",
                        children: [
                            e.jsxs("span", {
                                children: [
                                    o ? "此刻" : `${t.getMonth() + 1} 月 ${t.getDate()} 日`,
                                    o && B
                                        ? e.jsxs("em", {
                                              className: "sch-here",
                                              children: [e.jsx(Re, { size: 11, weight: "fill" }), B],
                                          })
                                        : null,
                                ],
                            }),
                            e.jsx("span", { children: _.map((j) => j.name).join(" · ") || K.label }),
                        ],
                    }),
                    O
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx("b", { children: O.title }),
                                  e.jsxs("small", {
                                      children: [de(O, d), " · ", te(O.kind), O.note ? ` · ${O.note}` : ""],
                                  }),
                                  e.jsx("div", {
                                      className: "sch-hero-bar",
                                      children: e.jsx("i", {
                                          style: {
                                              width: `${Math.min(100, Math.max(0, ((l - O.occurrenceStart) / (O.occurrenceEnd - O.occurrenceStart)) * 100))}%`,
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : L
                          ? e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx("b", { children: "刚忙完" }),
                                    e.jsxs("small", {
                                        children: [
                                            de(L, d),
                                            "「",
                                            L.title,
                                            "」· ",
                                            Math.max(1, Math.round((l - L.occurrenceEnd) / 6e4)),
                                            " 分钟前",
                                        ],
                                    }),
                                ],
                            })
                          : e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx("b", {
                                        children: o
                                            ? "这会儿空着"
                                            : x.length
                                              ? `这天有 ${x.length} 件事`
                                              : "这天空着",
                                    }),
                                    e.jsx("small", {
                                        children: o
                                            ? "空白本来就是一天里最多的那部分。"
                                            : "留白也是生活的一部分。",
                                    }),
                                ],
                            }),
                ],
            }),
            q.length > 0 &&
                e.jsx("div", {
                    className: "sch-route",
                    "aria-label": "今天的动线",
                    children: q.map((j, m) =>
                        e.jsxs(
                            Hs.Fragment,
                            {
                                children: [
                                    m > 0 && e.jsx("i", { className: j.travel ? "far" : "" }),
                                    e.jsx("span", {
                                        className: m === V ? "here" : o && j.end <= l && m < V ? "past" : "",
                                        children: j.place,
                                    }),
                                ],
                            },
                            `${j.place}_${j.start}`,
                        ),
                    ),
                }),
            K.kind === "break" &&
                e.jsxs("div", {
                    className: "sch-banner",
                    children: [K.spanName, " · ", K.label, "　多数人不上班 —— 他上不上，看他是做什么的"],
                }),
            d !== 0 &&
                e.jsxs("div", {
                    className: "sch-rail-tz",
                    children: [
                        e.jsxs("span", { children: [s.nickname || s.name || "TA", "那边"] }),
                        e.jsx("span", { children: "你这边" }),
                    ],
                }),
            e.jsx("div", {
                className: `sch-rail${d !== 0 ? " dual" : ""}`,
                ref: z,
                children: e.jsxs("div", {
                    className: "sch-rail-inner",
                    style: { height: `${$.length * Ee}px` },
                    children: [
                        $.map((j) =>
                            e.jsxs(
                                "div",
                                {
                                    className: "sch-hour",
                                    style: { top: `${(j - D) * Ee}px` },
                                    children: [
                                        e.jsxs("span", { children: [ve(j % 24), ":00"] }),
                                        e.jsx("i", {}),
                                        d !== 0 && e.jsx("b", { children: A(j) }),
                                    ],
                                },
                                j,
                            ),
                        ),
                        o &&
                            e.jsxs("div", {
                                className: "sch-now",
                                style: { top: `${H(l)}px` },
                                children: [e.jsx("em", {}), e.jsx("i", {})],
                            }),
                        x.map((j) => {
                            const m = j.occurrenceEnd && j.occurrenceEnd <= l,
                                G = O && O.id === j.id && O.occurrenceStart === j.occurrenceStart,
                                T = S(j),
                                J = T < 48,
                                X = w.get(`${j.id}@${j.occurrenceStart}`);
                            return e.jsxs(
                                "button",
                                {
                                    className: `sch-block k-${j.kind}${m ? " past" : ""}${G ? " live" : ""}${j.status === "completed" ? " done" : ""}${j.status === "skipped" ? " skipped" : ""}${j.about === "user" ? " about-user" : ""}${J ? " compact" : ""}${(X == null ? void 0 : X.cols) > 1 ? " lane" : ""}`,
                                    style: {
                                        top: `${H(j.occurrenceStart)}px`,
                                        height: `${T}px`,
                                        ...bn(X, d !== 0),
                                    },
                                    onClick: () => (a == null ? void 0 : a(j)),
                                    children: [
                                        e.jsxs("b", {
                                            children: [
                                                e.jsx("span", { className: "sch-title", children: j.title }),
                                                j.place
                                                    ? e.jsxs("span", {
                                                          className: "sch-place",
                                                          children: [
                                                              j.kind === "travel" && ze(j)
                                                                  ? "→"
                                                                  : e.jsx(Re, { size: 9, weight: "fill" }),
                                                              j.place,
                                                          ],
                                                      })
                                                    : null,
                                            ],
                                        }),
                                        e.jsxs("small", {
                                            children: [de(j, d), R(j), j.note ? ` · ${j.note}` : ""],
                                        }),
                                    ],
                                },
                                `${j.id}@${j.occurrenceStart}`,
                            );
                        }),
                        !x.length &&
                            e.jsx("div", { className: "sch-rail-empty", children: "这一天还没有排任何时段" }),
                    ],
                }),
            }),
            e.jsx("div", {
                className: "sch-day-actions",
                children: e.jsx("button", {
                    onClick: i,
                    className: c ? "has" : "",
                    children: c ? "这天的小结" : "给这天写个小结",
                }),
            }),
            c &&
                e.jsxs("div", {
                    className: "sch-day-summary",
                    children: [
                        e.jsx("p", { children: c.summary }),
                        e.jsx("time", {
                            children: c.at
                                ? new Date(c.at).toLocaleString("zh-CN", {
                                      month: "numeric",
                                      day: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                  })
                                : "",
                        }),
                    ],
                }),
        ],
    });
}
function yn({ char: s, onPick: t, onToggle: a, onNew: h }) {
    const i = Date.now(),
        c = Os(s, { now: i }),
        p = Os(s, { now: i, includeDone: !0 })
            .filter((x) => x.status === "completed" || x.status === "skipped")
            .slice(0, 12),
        f = c.filter((x) => x.overdueDays >= 7),
        d = c.filter((x) => x.overdueDays >= 2 && x.overdueDays < 7),
        o = c.filter((x) => x.overdueDays < 2),
        l = ({ title: x, rows: N, tone: C }) =>
            N.length
                ? e.jsxs("section", {
                      className: `sch-todo-group ${C || ""}`,
                      children: [
                          e.jsxs("h4", { children: [x, e.jsx("em", { children: N.length })] }),
                          N.map((D) =>
                              e.jsxs(
                                  "div",
                                  {
                                      className: "sch-todo",
                                      children: [
                                          e.jsx("button", {
                                              className: "sch-todo-check",
                                              onClick: () => (a == null ? void 0 : a(D)),
                                              "aria-label": "标记完成",
                                          }),
                                          e.jsxs("button", {
                                              className: "sch-todo-body",
                                              onClick: () => (t == null ? void 0 : t(D)),
                                              children: [
                                                  e.jsx("b", { children: D.title }),
                                                  e.jsxs("small", {
                                                      children: [
                                                          te(D.kind),
                                                          D.note ? ` · ${D.note}` : "",
                                                          D.overdueDays > 0
                                                              ? ` · 挂了 ${D.overdueDays} 天`
                                                              : "",
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  },
                                  D.id,
                              ),
                          ),
                      ],
                  })
                : null;
    return e.jsxs("div", {
        className: "sch-todos",
        children: [
            !c.length &&
                !p.length &&
                e.jsxs("div", {
                    className: "schedule-empty compact",
                    children: [
                        e.jsx("b", { children: "没有欠着的事" }),
                        e.jsx("span", { children: "待办是没有固定时段、但一直挂在他心上的那几件。" }),
                    ],
                }),
            e.jsx(l, { title: "拖了一周以上", rows: f, tone: "stale" }),
            e.jsx(l, { title: "挂了几天", rows: d }),
            e.jsx(l, { title: "最近加的", rows: o }),
            p.length > 0 &&
                e.jsxs("section", {
                    className: "sch-todo-group done",
                    children: [
                        e.jsxs("h4", { children: ["已经了结", e.jsx("em", { children: p.length })] }),
                        p.map((x) => {
                            var N;
                            return e.jsxs(
                                "div",
                                {
                                    className: "sch-todo",
                                    children: [
                                        e.jsx("button", {
                                            className: "sch-todo-check on",
                                            onClick: () => (a == null ? void 0 : a(x)),
                                            "aria-label": "恢复",
                                            children: e.jsx(Ge, { size: 12, weight: "bold" }),
                                        }),
                                        e.jsxs("button", {
                                            className: "sch-todo-body",
                                            onClick: () => (t == null ? void 0 : t(x)),
                                            children: [
                                                e.jsx("b", { children: x.title }),
                                                e.jsxs("small", {
                                                    children: [
                                                        x.status === "skipped" ? "最后没做" : "做完了",
                                                        (N = x.recap) != null && N.text
                                                            ? ` · ${x.recap.text}`
                                                            : "",
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                x.id,
                            );
                        }),
                    ],
                }),
            e.jsx("button", { className: "sch-todo-add", onClick: h, children: "记一件欠着的事" }),
        ],
    });
}
const vn = as(ls, "日程"),
    Ls = (s) => {
        const t = es(s, { deviceTz: ss() });
        return { c: t, both: t.regions || [t.his, t.hers] };
    },
    _s = (s) => String(s).padStart(2, "0"),
    wn = (s) => `${s.getFullYear()}-${_s(s.getMonth() + 1)}-${_s(s.getDate())}`,
    kn = (s) => {
        var h;
        const a = (
            ((h = String(s || "").match(/```(?:json)?\s*([\s\S]*?)```/i)) == null ? void 0 : h[1]) ||
            String(s || "")
        ).match(/\{[\s\S]*\}/);
        if (!a) return null;
        try {
            return JSON.parse(a[0]);
        } catch {
            try {
                return JSON.parse(a[0].replace(/,\s*([}\]])/g, "$1"));
            } catch {
                return null;
            }
        }
    },
    cs = (s) =>
        (s == null ? void 0 : s.nickname) ||
        (s == null ? void 0 : s.name) ||
        (s == null ? void 0 : s.realName) ||
        "未命名角色";
function st(s) {
    return {
        name: cs(s),
        persona: String(s.persona || "").slice(0, 2e3),
        core: Yt(s).slice(0, 400),
        relationStage: s.relationStage || null,
        living: Wt(s)
            .filter((t) => t.status !== "archived" && t.reviewStatus !== "deleted")
            .slice(-20)
            .map((t, a) => ({
                ref: `L${a + 1}`,
                scope: t.scope,
                kind: t.kind,
                title: t.title,
                detail: t.detail,
            })),
        recentDiary: Gt(s)
            .filter((t) => t.reviewStatus !== "deleted")
            .sort((t, a) => Number(a.at || 0) - Number(t.at || 0))
            .slice(0, 4)
            .map((t, a) => ({
                ref: `D${a + 1}`,
                title: t.title,
                text: String(t.text || t.narrative || "").slice(0, 220),
            })),
        recentMoments: Xs(s)
            .filter((t) => t.reviewStatus !== "deleted")
            .sort((t, a) => Number(a.at || 0) - Number(t.at || 0))
            .slice(0, 6)
            .map((t, a) => ({ ref: `M${a + 1}`, text: t.text, note: t.note })),
    };
}
async function tt(s, t, a, { maxTokens: h = 900, temperature: i = 0.75 } = {}) {
    var f, d, o, l;
    const c =
            (d = (f = s.api) == null ? void 0 : f.memory) != null && d.baseUrl
                ? s.api.memory
                : (o = s.api) == null
                  ? void 0
                  : o.chat,
        p = await vn.memory(
            c,
            [
                { role: "system", content: t },
                { role: "user", content: JSON.stringify(a) },
            ],
            { fallback: (l = s.api) == null ? void 0 : l.chat, max_tokens: h, temperature: i },
        );
    return kn(p == null ? void 0 : p.content);
}
function $n({ state: s, char: t, event: a, onClose: h, onSave: i }) {
    var N;
    const [c, p] = b.useState(((N = a == null ? void 0 : a.recap) == null ? void 0 : N.text) || ""),
        [f, d] = b.useState(!1),
        [o, l] = b.useState(""),
        x = async () => {
            if (!f) {
                (d(!0), l(""));
                try {
                    const C = [
                            `你在替角色“${cs(t)}”补一句话：这件已经过去的安排，**实际上**是怎么样的。`,
                            '只输出 JSON：{"text":""}。',
                            "硬规则：",
                            "1. 20–50 字，第一人称，像他自己事后想起来会说的一句，不是日报也不是总结陈词。",
                            '2. 必须有**具体**的东西：一个动作、一个细节、一句被谁说了什么、一点当时的身体感受。空泛的"挺顺利的""还行"不要。',
                            "3. 只能从 persona / living / recentDiary / recentMoments 和这条安排本身推。不要编出资料里没有的人名、地名、事件。",
                            "4. 不要提到用户，除非这条安排本身就和她有关。这是他自己的生活。",
                            '5. 不写"我完成了日程"这种系统口气；不写日期和时间（上面已经有了）。',
                            "6. 允许不顺利：迟到、被打断、做了一半、心不在焉，都比一句漂亮话真实。",
                        ].join(`
`),
                        D = await tt(
                            s,
                            C,
                            {
                                ...st(t),
                                item: {
                                    title: a.title,
                                    kind: te(a.kind),
                                    time: de(a),
                                    note: a.note || "",
                                    status:
                                        a.status === "skipped"
                                            ? "最后没做"
                                            : a.status === "completed"
                                              ? "做了"
                                              : "不确定做没做",
                                },
                            },
                            { maxTokens: 400 },
                        ),
                        Y = String((D == null ? void 0 : D.text) || "")
                            .trim()
                            .slice(0, 200);
                    if (!Y) {
                        l("这次没生成出可用的一句，手写一句也行。");
                        return;
                    }
                    p(Y);
                } catch (C) {
                    l((C == null ? void 0 : C.message) || "生成失败，检查记忆 API。");
                } finally {
                    d(!1);
                }
            }
        };
    return e.jsx("div", {
        className: "schedule-modal",
        onClick: (C) => {
            C.target === C.currentTarget && h();
        },
        children: e.jsxs("section", {
            className: "schedule-sheet",
            children: [
                e.jsx("i", { className: "schedule-grab" }),
                e.jsxs("header", {
                    children: [
                        e.jsx("button", { onClick: h, children: "取消" }),
                        e.jsx("b", { children: "实际上怎么样了" }),
                        e.jsx("button", {
                            className: "done",
                            disabled: !c.trim(),
                            onClick: () => i(c.trim().slice(0, 200)),
                            children: "保存",
                        }),
                    ],
                }),
                e.jsx("div", {
                    className: "sch-gen-intro",
                    children: e.jsxs("div", {
                        children: [
                            e.jsx("b", { children: a == null ? void 0 : a.title }),
                            e.jsxs("p", { children: [de(a || {}), " · ", te(a == null ? void 0 : a.kind)] }),
                        ],
                    }),
                }),
                e.jsx("textarea", {
                    className: "sch-gen-text",
                    value: c,
                    maxLength: 200,
                    rows: 4,
                    placeholder: "他事后想起来会怎么说这件事",
                    onChange: (C) => p(C.target.value),
                }),
                e.jsx("button", {
                    className: "sch-gen-run",
                    disabled: f,
                    onClick: x,
                    children: f ? "想一想…" : "让他自己说一句",
                }),
                o && e.jsx("p", { className: "sch-gen-err", children: o }),
                e.jsx("p", {
                    children:
                        "补过这一句，这件事才会作为“发生过的事”进入他的记忆。没补的只是一条排过的计划。",
                }),
            ],
        }),
    });
}
function Dn({ state: s, char: t, day: a, onClose: h, onSave: i }) {
    var Y, A;
    const c = b.useMemo(() => new Date(`${a}T12:00:00`), [a]),
        p = b.useMemo(() => Bt(t, { days: 40 }).filter(($) => wn(new Date($.occurrenceStart)) === a), [t, a]),
        f = b.useMemo(() => Vs(t, c), [t, c]),
        [d, o] = b.useState(
            ((A = (Y = t == null ? void 0 : t.scheduleDays) == null ? void 0 : Y[a]) == null
                ? void 0
                : A.summary) || "",
        ),
        [l, x] = b.useState(!1),
        [N, C] = b.useState(""),
        D = async () => {
            if (!l) {
                (x(!0), C(""));
                try {
                    const $ = ts(c, Ls(t).both).map((S) => S.name),
                        z = [
                            `你在替角色“${cs(t)}”写一条 ${a} 这一天的小结 —— 他自己回头看这一天。`,
                            '只输出 JSON：{"summary":""}。',
                            "硬规则：",
                            "1. 60–140 字，第一人称，是**回头看**的语气，不是逐条复述清单。",
                            "2. 抓这一天真正留下痕迹的一两件事，其余可以一笔带过或者完全不提。一天里大部分事本来就不值得记。",
                            "3. 只能用 lived（实际发生的，带他自己补的那句）和 planned（排过的）里的东西，以及人设与记忆。不要编新事件。",
                            "4. planned 里没有结果的那几条 = **不确定做没做**，不要当成做了。",
                            "5. 允许平淡：没什么事发生的一天就写成没什么事发生，不要硬凑起承转合。",
                            "6. 不要提到用户，除非这一天真的有和她相关的条目。这是他自己的一天。",
                            '7. 不写日期、不写"今日总结"这种标题口气。',
                            $.length
                                ? `8. 这天是${$.join("、")}。这件事会不会改变他这一天，由他的职业和作息决定 —— 不要自动写成过节。`
                                : "",
                        ].filter(Boolean).join(`
`),
                        R = await tt(
                            s,
                            z,
                            {
                                ...st(t),
                                day: a,
                                weekday: `周${["日", "一", "二", "三", "四", "五", "六"][c.getDay()]}`,
                                rest: ns(c, Ls(t).c.his).label,
                                holidays: $,
                                lived: p.map((S) => {
                                    var w;
                                    return {
                                        title: S.title,
                                        kind: te(S.kind),
                                        time: de(S),
                                        status: S.status === "skipped" ? "没做" : "做了",
                                        recap: ((w = S.recap) == null ? void 0 : w.text) || "",
                                    };
                                }),
                                planned: f
                                    .filter((S) => !p.some((w) => w.id === S.id))
                                    .map((S) => ({
                                        title: S.title,
                                        kind: te(S.kind),
                                        time: de(S),
                                        note: S.note || "",
                                    })),
                            },
                            { maxTokens: 700 },
                        ),
                        H = String((R == null ? void 0 : R.summary) || "")
                            .trim()
                            .slice(0, 400);
                    if (!H) {
                        C("这天可写的东西太少，先去补几条「实际上怎么样了」。");
                        return;
                    }
                    o(H);
                } catch ($) {
                    C(($ == null ? void 0 : $.message) || "生成失败，检查记忆 API。");
                } finally {
                    x(!1);
                }
            }
        };
    return e.jsx("div", {
        className: "schedule-modal",
        onClick: ($) => {
            $.target === $.currentTarget && h();
        },
        children: e.jsxs("section", {
            className: "schedule-sheet",
            children: [
                e.jsx("i", { className: "schedule-grab" }),
                e.jsxs("header", {
                    children: [
                        e.jsx("button", { onClick: h, children: "取消" }),
                        e.jsx("b", { children: "这一天" }),
                        e.jsx("button", {
                            className: "done",
                            disabled: !d.trim(),
                            onClick: () => i(d.trim().slice(0, 400)),
                            children: "保存",
                        }),
                    ],
                }),
                e.jsx("div", {
                    className: "sch-gen-intro",
                    children: e.jsxs("div", {
                        children: [
                            e.jsxs("b", { children: [c.getMonth() + 1, " 月 ", c.getDate(), " 日"] }),
                            e.jsxs("p", { children: ["发生过 ", p.length, " 件 · 排过 ", f.length, " 段"] }),
                        ],
                    }),
                }),
                e.jsx("textarea", {
                    className: "sch-gen-text",
                    value: d,
                    maxLength: 400,
                    rows: 6,
                    placeholder: "他回头看这一天会怎么说",
                    onChange: ($) => o($.target.value),
                }),
                e.jsx("button", {
                    className: "sch-gen-run",
                    disabled: l,
                    onClick: D,
                    children: l ? "回想一下…" : "让他自己回头看一遍",
                }),
                N && e.jsx("p", { className: "sch-gen-err", children: N }),
                e.jsx("p", {
                    children:
                        "小结会作为“这一天”进入他的记忆，和逐条日程分开记 —— 一天回头看是什么样，和这天做了哪几件事，不是一回事。",
                }),
            ],
        }),
    });
}
const je = (s) => String(s).padStart(2, "0"),
    ee = (s) => `${s.getFullYear()}-${je(s.getMonth() + 1)}-${je(s.getDate())}`;
function rs(s) {
    const t = new Date(s),
        a = ee(new Date()),
        h = new Date();
    return (
        h.setDate(h.getDate() - 1),
        `${ee(t) === a ? "今天" : ee(t) === ee(h) ? "昨天" : `${t.getMonth() + 1}月${t.getDate()}日`} ${je(t.getHours())}:${je(t.getMinutes())}`
    );
}
function is({ shot: s, genKey: t, big: a = !1, onOpen: h }) {
    const { pending: i, error: c } = qt(t);
    if (s != null && s.img)
        return e.jsx("div", {
            className: `plg-shot has-img${a ? " big" : ""}`,
            children: e.jsx(Qs, { src: s.img, alt: "" }),
        });
    const p = h
        ? {
              role: "button",
              tabIndex: 0,
              "aria-label": "查看画面描述",
              onPointerDown: (f) => f.stopPropagation(),
              onClick: (f) => {
                  (f.stopPropagation(), h());
              },
          }
        : {};
    return e.jsxs("div", {
        className: `plg-shot is-placeholder${a ? " big" : ""}${h ? " tappable" : ""}`,
        ...p,
        children: [
            e.jsx(Jt, { desc: (s == null ? void 0 : s.desc) || "" }),
            i && e.jsx("em", { className: "dimg-badge", children: "生成中…" }),
            !i && c && e.jsx("em", { className: "dimg-badge err", children: "生图失败" }),
        ],
    });
}
function we({ char: s, size: t = 32 }) {
    const a = ne(s) || "TA";
    return e.jsx("span", {
        className: "plg-av",
        style: { width: t, height: t },
        children:
            s != null && s.avatar
                ? e.jsx(Qs, { src: s.avatar, alt: "" })
                : e.jsx("i", { style: { fontSize: Math.round(t * 0.4) }, children: a.slice(0, 1) }),
    });
}
function nt(s) {
    const t = Math.max(0, Math.round((Date.now() - s) / 6e4));
    if (t < 1) return "刚刚";
    if (t < 60) return `${t} 分钟前`;
    const a = Math.round(t / 60);
    return a < 24 ? `${a} 小时前` : rs(s);
}
const at = (s) => (Date.now() - s < 864e5 ? nt(s) : rs(s).split(" ")[0]),
    Bs = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
function Cn(s) {
    const t = ee(new Date()),
        a = new Date();
    a.setDate(a.getDate() - 1);
    const [h, i, c] = s.split("-").map(Number),
        p = new Date(h, i - 1, c),
        f = s === t ? "今天" : s === ee(a) ? "昨天" : `${i}月${c}日`,
        d = s === t || s === ee(a) ? `${i}月${c}日 ${Bs[p.getDay()]}` : Bs[p.getDay()];
    return { main: f, sub: d };
}
const lt = (s) => {
    const t = new Date(s);
    return `${je(t.getHours())}:${je(t.getMinutes())}`;
};
function Sn({ char: s, chars: t = [], onSelectChar: a }) {
    var H, S;
    const { state: h, patchChar: i } = $e(),
        c = De(),
        [p, f] = b.useState(null),
        [d, o] = b.useState(null),
        [l, x] = b.useState(!1),
        N = b.useMemo(() => Es(s), [s]),
        C = ne(s) || "TA",
        D = async () => {
            if (!l) {
                x(!0);
                try {
                    const w = await Ht(h, s, i, { manual: !0 });
                    w &&
                        c(
                            w.plogs
                                ? `记录了 ${w.plogs} 条日常`
                                : w.records
                                  ? `记录了 ${w.records} 件事`
                                  : "暂时没有想记录的内容",
                        );
                } catch (w) {
                    c((w == null ? void 0 : w.message) || "记录失败，请检查记忆通道的 API 设置", "error");
                } finally {
                    x(!1);
                }
            }
        },
        Y = p ? N.find((w) => w.id === p) : null,
        A = ee(new Date()),
        $ = N[0],
        z =
            ((S = (H = s == null ? void 0 : s.scheduleDays) == null ? void 0 : H[A]) == null
                ? void 0
                : S.summary) || "",
        R = (w) => Es(w).some((M) => ee(new Date(M.at)) === A);
    return e.jsxs("div", {
        className: "plg plg-v3",
        children: [
            t.length > 1 &&
                e.jsx("nav", {
                    className: "plg-tray",
                    "aria-label": "切换角色",
                    children: t.map((w) =>
                        e.jsxs(
                            "button",
                            {
                                className: `${w.id === s.id ? "on" : ""}${R(w) ? " fresh" : ""}`,
                                onClick: () => (a == null ? void 0 : a(w.id)),
                                "aria-pressed": w.id === s.id,
                                children: [
                                    e.jsx("span", {
                                        className: "plg-ring",
                                        children: e.jsx(we, { char: w, size: 50 }),
                                    }),
                                    e.jsx("small", { children: ne(w) }),
                                ],
                            },
                            w.id,
                        ),
                    ),
                }),
            e.jsxs("section", {
                className: "plg-now",
                children: [
                    e.jsxs("div", {
                        className: "plg-now-row",
                        children: [
                            e.jsx("button", {
                                className: "plg-now-av",
                                onClick: () => $ && o($.id),
                                "aria-label": "看快拍",
                                disabled: !$,
                                children: e.jsx("span", {
                                    className: `plg-ring${$ && ee(new Date($.at)) === A ? " live" : ""}`,
                                    children: e.jsx(we, { char: s, size: 42 }),
                                }),
                            }),
                            e.jsxs("div", {
                                className: "plg-now-copy",
                                children: [
                                    e.jsxs("b", { children: [C, e.jsx("small", { children: "此刻" })] }),
                                    e.jsx("span", {
                                        children: $
                                            ? `${nt($.at)}${$.place ? ` · 在${$.place}` : ""}${$.mood ? ` · ${$.mood}` : ""}`
                                            : "今天还没有动静",
                                    }),
                                ],
                            }),
                            e.jsx("button", {
                                className: "plg-now-btn",
                                onClick: D,
                                disabled: l,
                                children: l ? "记录中…" : "记一下",
                            }),
                        ],
                    }),
                    z && e.jsx("p", { className: "plg-now-sum", children: z }),
                ],
            }),
            !N.length &&
                e.jsxs("div", {
                    className: "plg-empty",
                    children: [
                        e.jsx("b", { children: "还没有日常" }),
                        e.jsxs("span", {
                            children: [
                                "点「记一下」，",
                                C,
                                " 会把此刻在做的事发上来；也可以在右上角 ⋯ 里打开自动更新，按设定的频率记录。",
                            ],
                        }),
                    ],
                }),
            e.jsx("div", {
                className: "plg-feed",
                children: N.map((w, M) => {
                    const _ = ee(new Date(w.at)),
                        K = M === 0 || ee(new Date(N[M - 1].at)) !== _,
                        O = Cn(_);
                    return e.jsxs(
                        Hs.Fragment,
                        {
                            children: [
                                K &&
                                    M > 0 &&
                                    e.jsx("div", {
                                        className: "plg-sep",
                                        children: e.jsxs("span", { children: [O.main, " · ", O.sub] }),
                                    }),
                                e.jsx(Tn, {
                                    char: s,
                                    plog: w,
                                    onOpen: () => o(w.id),
                                    onComments: () => f(w.id),
                                }),
                            ],
                        },
                        w.id,
                    );
                }),
            }),
            d &&
                e.jsx(Mn, {
                    char: s,
                    plogs: N,
                    startId: d,
                    onClose: () => o(null),
                    onComments: (w) => {
                        (o(null), f(w));
                    },
                }),
            Y && e.jsx(En, { char: s, plog: Y, onClose: () => f(null) }),
        ],
    });
}
const Ve = (s) => ([...String(s)].reduce((t, a) => t + a.charCodeAt(0), 0) % 2 ? "dark" : "light");
function Tn({ char: s, plog: t, onOpen: a, onComments: h }) {
    var D, Y, A, $;
    const [i, c] = b.useState(0),
        [p, f] = b.useState(!1),
        d = t.shots || [],
        o = !d.length,
        l = (t.comments || []).length,
        x = p && t.captionTr ? t.captionTr : t.caption,
        N = [
            ((D = t.sharedTo) == null ? void 0 : D.insta) && "Insta",
            ((Y = t.sharedTo) == null ? void 0 : Y.moments) && "朋友圈",
        ].filter(Boolean),
        C = (z) => {
            const R = Math.round(z.currentTarget.scrollLeft / Math.max(1, z.currentTarget.clientWidth));
            R !== i && c(R);
        };
    return e.jsxs("article", {
        className: "plg-st",
        children: [
            e.jsxs("div", {
                className: `plg-st-frame${o ? ` note ${Ve(t.id)}` : ""}`,
                children: [
                    o
                        ? e.jsx("button", {
                              className: "plg-st-text",
                              onClick: a,
                              children: e.jsx("p", { children: x }),
                          })
                        : e.jsx("div", {
                              className: "plg-track",
                              onScroll: C,
                              children: d.map((z, R) =>
                                  e.jsx(
                                      "div",
                                      {
                                          className: "plg-slide",
                                          onClick: a,
                                          children: e.jsx(is, { shot: z, genKey: `plog:${t.id}:${R}` }),
                                      },
                                      R,
                                  ),
                              ),
                          }),
                    e.jsxs("div", {
                        className: "plg-st-top",
                        children: [
                            d.length > 1 &&
                                e.jsx("div", {
                                    className: "plg-bars",
                                    children: d.map((z, R) =>
                                        e.jsx("i", { className: R <= i ? "on" : "" }, R),
                                    ),
                                }),
                            e.jsxs("div", {
                                className: "plg-st-who",
                                children: [
                                    e.jsx(we, { char: s, size: 26 }),
                                    e.jsx("b", { children: ne(s) }),
                                    e.jsx("time", { children: lt(t.at) }),
                                    e.jsx("span", { children: at(t.at) }),
                                ],
                            }),
                        ],
                    }),
                    (t.place || (!o && x)) &&
                        e.jsxs("div", {
                            className: "plg-st-bottom",
                            children: [
                                t.place &&
                                    e.jsxs("span", {
                                        className: "plg-sticker",
                                        children: [e.jsx(Re, { size: 12, weight: "fill" }), t.place],
                                    }),
                                !o && x && e.jsx("p", { children: x }),
                            ],
                        }),
                ],
            }),
            e.jsxs("footer", {
                className: "plg-st-foot",
                children: [
                    e.jsx("button", {
                        className: "plg-st-reply",
                        onClick: h,
                        children: l ? `${l} 条评论` : `回复 ${ne(s) || "TA"}…`,
                    }),
                    t.captionTr &&
                        e.jsx("button", {
                            className: "plg-st-chip",
                            onClick: () => f((z) => !z),
                            children: p ? "原文" : "翻译",
                        }),
                    t.mood && e.jsx("span", { className: "plg-st-chip plain", children: t.mood }),
                ],
            }),
            ((A = t.tags) != null && A.length) || N.length
                ? e.jsxs("div", {
                      className: "plg-st-meta",
                      children: [
                          ($ = t.tags) == null
                              ? void 0
                              : $.slice(0, 3).map((z) => e.jsxs("span", { children: ["#", z] }, z)),
                          N.length > 0 && e.jsxs("em", { children: ["已发到 ", N.join("、")] }),
                      ],
                  })
                : null,
        ],
    });
}
function ct(s, t) {
    const { state: a, patchChar: h } = $e(),
        i = De(),
        [c, p] = b.useState(!1);
    return {
        send: async (d) => {
            const o = String(d || "").trim();
            if (!o || c || !t) return !1;
            const l = !!t.legacy,
                x = l ? t.id.replace(/^legacy_/, "plog_") : t.id;
            if (l) {
                const { legacy: N, ...C } = t;
                h(s.id, (D) => ({ plogs: [{ ...C, id: x }, ...(D.plogs || [])] }));
            }
            p(!0);
            try {
                (await en(a, s, l ? { ...t, id: x } : t, o, h)) || i("他这次没回", "error");
            } catch {
                i("回复没生成出来，留言已保存", "error");
            } finally {
                p(!1);
            }
            return !0;
        },
        sending: c,
    };
}
function rt(s, t) {
    var f;
    const { state: a, patchChar: h } = $e(),
        i = De(),
        c = !!t && !t.legacy && !!((f = t.shots) != null && f.length) && Vt(a, "plog", s.id);
    return {
        regen: (d) => {
            var l;
            const o = (l = t == null ? void 0 : t.shots) == null ? void 0 : l[d];
            !(o != null && o.desc) ||
                t.legacy ||
                (sn({
                    key: `plog:${t.id}:${d}`,
                    desc: o.desc,
                    charId: s.id,
                    orient: "portrait",
                    context: { text: t.caption, place: t.place, at: t.at },
                    getState: () => a,
                    apply: (x) =>
                        h(s.id, (N) => ({
                            plogs: (N.plogs || []).map((C) =>
                                C.id === t.id
                                    ? {
                                          ...C,
                                          shots: (C.shots || []).map((D, Y) =>
                                              Y === d ? { ...D, img: x } : D,
                                          ),
                                      }
                                    : C,
                            ),
                        })),
                }),
                i("已加入生图队列"));
        },
        canGen: c,
    };
}
const An = 5e3;
function Mn({ char: s, plogs: t, startId: a, onClose: h, onComments: i }) {
    const c = b.useMemo(
            () =>
                t.flatMap((T) =>
                    (T.shots || []).length ? T.shots.map((J, X) => ({ p: T, k: X })) : [{ p: T, k: -1 }],
                ),
            [t],
        ),
        [p, f] = b.useState(() =>
            Math.max(
                0,
                c.findIndex((T) => T.p.id === a),
            ),
        ),
        [d, o] = b.useState(!1),
        [l, x] = b.useState(!1),
        [N, C] = b.useState(""),
        [D, Y] = b.useState(!1),
        A = b.useRef(0),
        $ = c[Math.min(p, c.length - 1)],
        { send: z, sending: R } = ct(s, $ == null ? void 0 : $.p),
        { regen: H, canGen: S } = rt(s, $ == null ? void 0 : $.p),
        w = De();
    if (!$) return null;
    const { p: M, k: _ } = $,
        K = Math.max(1, (M.shots || []).length),
        O = Math.max(0, _),
        L = _ >= 0 ? M.shots[_] : null,
        q = d || l || R || !!N || D,
        V = () => (p + 1 < c.length ? f(p + 1) : h()),
        B = () => f(Math.max(0, p - 1)),
        j = (T) => {
            if (Date.now() - A.current > 280) return;
            const J = T.currentTarget.getBoundingClientRect();
            T.clientX - J.left < J.width / 3 ? B() : V();
        },
        m = async () => {
            const T = N.trim();
            T && (C(""), (await z(T)) && w("已留言"));
        },
        G = (M.comments || []).length;
    return e.jsx("div", {
        className: "plg-sv-mask",
        onClick: h,
        children: e.jsxs("div", {
            className: `plg-sv${_ < 0 ? ` note-${Ve(M.id)}` : ""}`,
            role: "dialog",
            "aria-label": "快拍",
            onClick: (T) => T.stopPropagation(),
            children: [
                e.jsx("div", {
                    className: `plg-sv-stage${_ < 0 ? ` note ${Ve(M.id)}` : ""}`,
                    onPointerDown: () => {
                        ((A.current = Date.now()), o(!0));
                    },
                    onPointerUp: () => o(!1),
                    onPointerLeave: () => o(!1),
                    onPointerCancel: () => o(!1),
                    onClick: j,
                    children: L
                        ? e.jsx(is, {
                              shot: L,
                              genKey: `plog:${M.id}:${_}`,
                              big: !0,
                              onOpen: () => {
                                  (o(!1), Y(!0));
                              },
                          })
                        : e.jsx("div", {
                              className: "plg-sv-text",
                              children: e.jsx("p", { children: M.caption }),
                          }),
                }),
                e.jsxs("header", {
                    className: "plg-sv-top",
                    children: [
                        e.jsx("div", {
                            className: "plg-bars",
                            children: Array.from({ length: K }, (T, J) =>
                                e.jsx(
                                    "i",
                                    {
                                        className: J < O ? "on" : "",
                                        children:
                                            J === O &&
                                            e.jsx(
                                                "b",
                                                {
                                                    className: q ? "paused" : "",
                                                    style: { animationDuration: `${An}ms` },
                                                    onAnimationEnd: V,
                                                },
                                                p,
                                            ),
                                    },
                                    J,
                                ),
                            ),
                        }),
                        e.jsxs("div", {
                            className: "plg-sv-who",
                            children: [
                                e.jsx(we, { char: s, size: 32 }),
                                e.jsx("b", { children: ne(s) }),
                                e.jsx("time", { children: lt(M.at) }),
                                e.jsx("span", { children: at(M.at) }),
                                e.jsx("button", {
                                    onClick: h,
                                    "aria-label": "关闭",
                                    children: e.jsx(He, { size: 20 }),
                                }),
                            ],
                        }),
                    ],
                }),
                (M.place || (L && M.caption) || (L == null ? void 0 : L.desc)) &&
                    e.jsxs("div", {
                        className: "plg-sv-bottom",
                        children: [
                            M.place &&
                                e.jsxs("span", {
                                    className: "plg-sticker",
                                    children: [e.jsx(Re, { size: 12, weight: "fill" }), M.place],
                                }),
                            L && M.caption && O === 0 && e.jsx("p", { children: M.caption }),
                            L && !L.img && L.desc && e.jsxs("small", { children: ["画面：", L.desc] }),
                        ],
                    }),
                e.jsxs("div", {
                    className: "plg-sv-reply",
                    children: [
                        e.jsx("input", {
                            value: N,
                            onChange: (T) => C(T.target.value),
                            placeholder: `回复 ${ne(s) || "TA"}…`,
                            onFocus: () => x(!0),
                            onBlur: () => x(!1),
                            onKeyDown: (T) => {
                                T.key === "Enter" && m();
                            },
                        }),
                        N.trim()
                            ? e.jsx("button", {
                                  onClick: m,
                                  disabled: R,
                                  "aria-label": "发送",
                                  children: e.jsx(Ks, { size: 20, weight: "fill" }),
                              })
                            : e.jsxs("button", {
                                  onClick: () => i(M.id),
                                  "aria-label": "评论",
                                  children: [
                                      e.jsx(Tt, { size: 22 }),
                                      G ? e.jsx("em", { children: G }) : null,
                                  ],
                              }),
                    ],
                }),
                L &&
                    e.jsx(Kt, {
                        open: D,
                        onClose: () => Y(!1),
                        src: L.img || null,
                        desc: L.desc,
                        genKey: `plog:${M.id}:${_}`,
                        onRegen: S && L.desc ? () => H(_) : void 0,
                        label: "画面描述",
                    }),
            ],
        }),
    });
}
function On({ plog: s, onIndex: t, onTap: a }) {
    const [h, i] = b.useState(0),
        c = s.shots || [],
        p = (f) => {
            const d = Math.round(f.currentTarget.scrollLeft / Math.max(1, f.currentTarget.clientWidth));
            d !== h && (i(d), t == null || t(d));
        };
    return c.length
        ? e.jsxs("div", {
              className: "plg-frame",
              children: [
                  c.length > 1 &&
                      e.jsx("div", {
                          className: "plg-bars",
                          children: c.map((f, d) => e.jsx("i", { className: d <= h ? "on" : "" }, d)),
                      }),
                  e.jsx("div", {
                      className: "plg-track",
                      onScroll: p,
                      children: c.map((f, d) =>
                          e.jsx(
                              "div",
                              {
                                  className: "plg-slide",
                                  onClick: a,
                                  children: e.jsx(is, { shot: f, genKey: `plog:${s.id}:${d}` }),
                              },
                              d,
                          ),
                      ),
                  }),
              ],
          })
        : e.jsx("div", {
              className: "plg-frame text",
              onClick: a,
              children: e.jsx("p", { children: s.caption }),
          });
}
function En({ char: s, plog: t, onClose: a }) {
    var j, m, G, T, J, X, ae;
    const { state: h, patchChar: i, instaAppendPost: c, patch: p } = $e(),
        f = De(),
        [d, o] = b.useState(!1),
        [l, x] = b.useState(""),
        { send: N, sending: C } = ct(s, t),
        { regen: D, canGen: Y } = rt(s, t),
        [A, $] = b.useState(!1),
        [z, R] = b.useState(0),
        H = b.useRef(null),
        S = !!t.legacy,
        w = (v) => i(s.id, (I) => ({ plogs: (I.plogs || []).map((Q) => (Q.id === t.id ? v(Q) : Q)) })),
        M = async (v) => {
            var le;
            const I = (le = v.target.files) == null ? void 0 : le[0];
            if (((v.target.value = ""), !I)) return;
            if (S) {
                f("这条是旧格式，先在新记录里操作", "error");
                return;
            }
            const Q = await Xt(I, { note: "生活 · 照片" });
            Q &&
                w((re) => {
                    var oe;
                    const me = ((oe = re.shots) != null && oe.length ? re.shots : [{ desc: "" }]).map(
                        (u, r) => {
                            var k;
                            return r === Math.min(z, (((k = re.shots) == null ? void 0 : k.length) || 1) - 1)
                                ? { ...u, img: Q }
                                : u;
                        },
                    );
                    return { ...re, shots: me };
                });
        },
        _ = (t.shots || []).map((v) => v.img).filter(Boolean),
        K = () => {
            var v;
            return D(Math.min(z, (((v = t.shots) == null ? void 0 : v.length) || 1) - 1));
        },
        O = () => {
            const v = _[0];
            (c(
                s.id,
                v
                    ? {
                          kind: "photo",
                          imgDataUrl: v,
                          caption: t.caption,
                          location: t.place,
                          likes: 0,
                          comments: [],
                      }
                    : {
                          kind: "pure_text",
                          body: [t.caption, ...(t.shots || []).map((I) => `［${I.desc}］`)].filter(Boolean)
                              .join(`
`),
                          location: t.place,
                          likes: 0,
                          comments: [],
                      },
            ),
                S || w((I) => ({ ...I, sharedTo: { ...(I.sharedTo || {}), insta: !0 } })),
                f("已发到 Insta"));
        },
        L = () => {
            const v = {
                ...Qt({ authorId: s.id, text: t.caption, images: _, location: t.place }),
                photoHint: _.length
                    ? ""
                    : (t.shots || [])
                          .map((I) => I.desc)
                          .join("；")
                          .slice(0, 40),
            };
            (p((I) => {
                var Q;
                return {
                    moments: {
                        ...(I.moments || { cover: null, posts: [] }),
                        posts: [...(((Q = I.moments) == null ? void 0 : Q.posts) || []), v],
                    },
                };
            }),
                Zt(h, p, v),
                S || w((I) => ({ ...I, sharedTo: { ...(I.sharedTo || {}), moments: !0 } })),
                f("已发到朋友圈"));
        },
        q = () => {
            if (S) {
                f("旧格式的记录在日程详情里改");
                return;
            }
            (i(s.id, (v) => ({ plogs: (v.plogs || []).filter((I) => I.id !== t.id) })), a());
        },
        V = () => {
            if (!l.trim() || C) return;
            const v = l;
            (x(""), N(v));
        },
        B = (s.scheduleItems || []).filter((v) => (t.itemIds || []).includes(v.id));
    return e.jsxs("div", {
        className: "plg-detail",
        children: [
            e.jsxs("header", {
                className: "plg-detail-top",
                children: [
                    e.jsx("button", { onClick: a, "aria-label": "返回", children: e.jsx(At, { size: 22 }) }),
                    e.jsx("b", { children: "日常" }),
                    e.jsx("button", {
                        onClick: () => o(!0),
                        "aria-label": "更多",
                        children: e.jsx(Us, { size: 24 }),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "plg-detail-scroll",
                children: [
                    e.jsxs("div", {
                        className: "plg-detail-who",
                        children: [
                            e.jsx(we, { char: s, size: 36 }),
                            e.jsxs("div", {
                                children: [
                                    e.jsx("b", { children: ne(s) }),
                                    e.jsxs("small", { children: [rs(t.at), t.place ? ` · ${t.place}` : ""] }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        className: "plg-detail-frame",
                        children: e.jsx(On, { plog: t, onIndex: R }),
                    }),
                    (() => {
                        var I, Q;
                        const v =
                            (Q = t.shots) == null
                                ? void 0
                                : Q[Math.min(z, (((I = t.shots) == null ? void 0 : I.length) || 1) - 1)];
                        return v != null && v.desc && !v.img
                            ? e.jsxs("p", { className: "plg-shotdesc", children: ["画面：", v.desc] })
                            : null;
                    })(),
                    e.jsxs("div", {
                        className: "plg-body",
                        children: [
                            t.caption &&
                                e.jsx("p", {
                                    className: "big",
                                    children: A && t.captionTr ? t.captionTr : t.caption,
                                }),
                            t.captionTr &&
                                e.jsx("button", {
                                    className: "plg-tr",
                                    onClick: () => $((v) => !v),
                                    children: A ? "显示原文" : "显示翻译",
                                }),
                            ((j = t.tags) != null && j.length) || t.mood
                                ? e.jsxs("div", {
                                      className: "plg-tags",
                                      children: [
                                          (m = t.tags) == null
                                              ? void 0
                                              : m.map((v) => e.jsxs("span", { children: ["#", v] }, v)),
                                          t.mood && e.jsx("span", { className: "mood", children: t.mood }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    B.length > 0 &&
                        e.jsx("div", {
                            className: "plg-linked",
                            children: B.map((v) => {
                                var I;
                                return e.jsxs(
                                    "div",
                                    {
                                        children: [
                                            e.jsx("b", { children: v.title }),
                                            e.jsx("small", {
                                                children: ((I = v.recap) == null ? void 0 : I.text) || "",
                                            }),
                                        ],
                                    },
                                    v.id,
                                );
                            }),
                        }),
                    e.jsxs("div", {
                        className: "plg-comments",
                        children: [
                            e.jsxs("h4", {
                                children: ["评论 ", ((G = t.comments) == null ? void 0 : G.length) || ""],
                            }),
                            !(t.comments || []).length &&
                                e.jsx("p", { className: "plg-muted", children: "还没有人留言" }),
                            (t.comments || []).map((v) => {
                                var I;
                                return e.jsxs(
                                    "div",
                                    {
                                        className: `plg-cmt ${v.by}`,
                                        children: [
                                            e.jsx("b", {
                                                children:
                                                    v.by === "me"
                                                        ? ((I = h.me) == null ? void 0 : I.nickname) || "我"
                                                        : ne(s),
                                            }),
                                            e.jsxs("span", {
                                                children: [
                                                    v.text,
                                                    v.tr ? e.jsx("small", { children: v.tr }) : null,
                                                ],
                                            }),
                                        ],
                                    },
                                    v.id,
                                );
                            }),
                            C && e.jsxs("p", { className: "plg-muted", children: [ne(s), " 正在回复…"] }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "plg-input",
                children: [
                    e.jsx("input", {
                        value: l,
                        onChange: (v) => x(v.target.value),
                        placeholder: "说点什么…",
                        onKeyDown: (v) => {
                            v.key === "Enter" && V();
                        },
                    }),
                    e.jsx("button", {
                        onClick: V,
                        disabled: !l.trim() || C,
                        "aria-label": "发送",
                        children: e.jsx(Ks, { size: 20, weight: "fill" }),
                    }),
                ],
            }),
            e.jsx("input", { ref: H, type: "file", accept: "image/*", hidden: !0, onChange: M }),
            e.jsx(Ut, {
                open: d,
                onClose: () => o(!1),
                actions: [
                    ...(((T = t.shots) != null && T.length) || !S
                        ? [
                              {
                                  label:
                                      ((J = t.shots) == null ? void 0 : J.length) > 1
                                          ? `换第 ${z + 1} 张图`
                                          : "换成真图",
                                  sub: "用你自己的照片替换这张画面描述",
                                  onClick: () => {
                                      var v;
                                      return (v = H.current) == null ? void 0 : v.click();
                                  },
                              },
                          ]
                        : []),
                    ...(Y
                        ? [
                              {
                                  label: t.shots.length > 1 ? `生成第 ${z + 1} 张图` : "生成图片",
                                  sub: "按画面描述在后台生成，完成后替换",
                                  onClick: K,
                              },
                          ]
                        : []),
                    {
                        label: (X = t.sharedTo) != null && X.insta ? "再发一次到 Insta" : "发到 Insta",
                        onClick: O,
                    },
                    {
                        label: (ae = t.sharedTo) != null && ae.moments ? "再发一次到朋友圈" : "发到朋友圈",
                        onClick: L,
                    },
                    { label: "删除这条", destructive: !0, onClick: q },
                ],
            }),
        ],
    });
}
const Ys = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    se = (s) => {
        const [t, a, h] = String(s).split("-").map(Number);
        return new Date(t, a - 1, h);
    },
    Xe = (s) => {
        const t = se(s);
        return `${t.getMonth() + 1}/${t.getDate()}`;
    },
    In = (s, t) => Math.round((se(t) - se(s)) / 864e5) + 1,
    it = (s, t) => {
        const a = Math.round((se(s) - se(t)) / 864e5);
        return a === 0 ? "今天" : a === 1 ? "明天" : a === 2 ? "后天" : a > 0 ? `${a} 天后` : `${-a} 天前`;
    },
    dt = { auto: { label: "按人设" }, ...et },
    ot =
        "节点结果按实力位置决定概率：位置越高，顺利与成功越常见，但不保证每次都赢。按人设时由生成步骤读取，并随近期结果调整。";
function xe({ value: s, options: t, onChange: a }) {
    return e.jsx("div", {
        className: "arc-seg",
        role: "radiogroup",
        children: Object.entries(t).map(([h, i]) =>
            e.jsx(
                "button",
                {
                    role: "radio",
                    "aria-checked": s === h,
                    className: s === h ? "on" : "",
                    onClick: () => a(h),
                    children: i.label,
                },
                h,
            ),
        ),
    });
}
function Pn({
    char: s,
    name: t,
    patchChar: a,
    runGenerate: h,
    runAdvance: i,
    focusBeatId: c,
    onFocusDone: p,
    addSignal: f,
}) {
    const d = Ue(s),
        o = Ze(s),
        l = Date.now() + o,
        x = We(new Date(l)),
        N = Zs(d, l),
        C = qe(N, l),
        [D, Y] = b.useState(""),
        [A, $] = b.useState(""),
        [z, R] = b.useState(() => new Set()),
        [H, S] = b.useState(null),
        [w, M] = b.useState(null),
        [_, K] = b.useState(null),
        [O, L] = b.useState(!1),
        [q, V] = b.useState(!1),
        B = (u) =>
            a(s.id, (r) => ({
                storyArc: {
                    ...(r.storyArc || {}),
                    ...(typeof u == "function" ? u(Ue(r), r.storyArc || {}) : u),
                },
            }));
    (b.useEffect(() => {
        if (!c) return;
        const u = d.beats.find((r) => r.id === c);
        if (u) {
            S({ ...u });
            const r = d.phases.find((k) => k.from <= u.date && k.to >= u.date);
            r && R((k) => new Set(k).add(r.id));
        }
        p == null || p();
    }, [c]),
        b.useEffect(() => {
            f && S({ ...Is(x), isNew: !0 });
        }, [f]));
    const j = async (u) => {
            if (!D) {
                (Y(u), $(""));
                try {
                    (u === "advance" ? await i() : await h(u)) ||
                        $(
                            u === "advance"
                                ? "这次没有需要推进的，或者没读出结果。"
                                : "没读出可用的主线，换个方向或稍后再试。",
                        );
                } catch (r) {
                    $((r == null ? void 0 : r.message) || "生成失败，检查记忆 API。");
                } finally {
                    Y("");
                }
            }
        },
        m = d.beats.find((u) => u.date >= x && !u.outcome && u.known !== !1) || null,
        G = d.beats.filter((u) => u.date > x && u.known === !1 && !u.outcome).length,
        T = N ? d.phases.indexOf(N) : -1,
        J = (u) => d.beats.filter((r) => r.date >= u.from && r.date <= u.to),
        X = (u) => z.has(u.id) || (u === N && !z.has(`-${u.id}`)),
        ae = (u) =>
            R((r) => {
                const k = new Set(r);
                return (
                    u === N
                        ? k.has(`-${u.id}`)
                            ? k.delete(`-${u.id}`)
                            : k.add(`-${u.id}`)
                        : k.has(u.id)
                          ? k.delete(u.id)
                          : k.add(u.id),
                    k
                );
            }),
        v = (u) => {
            const r = {
                ...u,
                title: String(u.title || "")
                    .trim()
                    .slice(0, 22),
                note: String(u.note || "")
                    .trim()
                    .slice(0, 40),
                outcome: String(u.outcome || "")
                    .trim()
                    .slice(0, 60),
                userEdited: !0,
            };
            (delete r.isNew,
                delete r.revealed,
                !(!r.title || !/^\d{4}-\d{2}-\d{2}$/.test(r.date)) &&
                    (r.time || (delete r.time, delete r.endTime),
                    (!r.endTime || r.endTime <= r.time) && delete r.endTime,
                    r.outcome || delete r.outcome,
                    B((k) => ({
                        beats: [...k.beats.filter((U) => U.id !== r.id), r].sort((U, F) =>
                            `${U.date}${U.time || ""}`.localeCompare(`${F.date}${F.time || ""}`),
                        ),
                    })),
                    S(null)));
        },
        I = (u) => {
            (B((r) => ({ beats: r.beats.filter((k) => k.id !== u) })), S(null));
        },
        Q = (u) => {
            const r = {
                ...u,
                title: String(u.title || "")
                    .trim()
                    .slice(0, 20),
                summary: String(u.summary || "")
                    .trim()
                    .slice(0, 90),
                userEdited: !0,
            };
            (delete r.isNew,
                !(!r.title || r.from > r.to) &&
                    (B((k) => ({
                        phases: [...k.phases.filter((U) => U.id !== r.id), r].sort((U, F) =>
                            U.from.localeCompare(F.from),
                        ),
                    })),
                    M(null)));
        },
        le = (u) => {
            (B((r) => ({ phases: r.phases.filter((k) => k.id !== u) })), M(null));
        },
        re = (u) => {
            const r = {
                ...u,
                name: String(u.name || "")
                    .trim()
                    .slice(0, 20),
                role: String(u.role || "")
                    .trim()
                    .slice(0, 24),
                userEdited: !0,
            };
            (delete r.isNew,
                r.name &&
                    (B((k) => ({
                        circle: k.circle.some((U) => U.id === r.id)
                            ? k.circle.map((U) => (U.id === r.id ? r : U))
                            : [...k.circle, r],
                    })),
                    K(null)));
        },
        me = (u) => {
            (B((r) => ({ circle: r.circle.filter((k) => k.id !== u) })), K(null));
        };
    if (!d.enabled || !d.phases.length)
        return e.jsxs("div", {
            className: "arc",
            children: [
                e.jsxs("section", {
                    className: "arc-intro",
                    children: [
                        e.jsx("span", { className: "arc-badge", children: e.jsx(Ie, { size: 28 }) }),
                        e.jsx("h2", { children: "主线" }),
                        e.jsxs("p", {
                            children: ["为", t, "安排以月为单位的阶段与关键节点，日程和聊天随之推进。"],
                        }),
                        e.jsxs("ul", {
                            className: "arc-points",
                            children: [
                                e.jsxs("li", {
                                    children: [
                                        e.jsx("i", { children: e.jsx(Ie, { size: 18 }) }),
                                        e.jsxs("div", {
                                            children: [
                                                e.jsx("b", { children: "按人设生成" }),
                                                e.jsx("small", {
                                                    children:
                                                        "阶段与节点取决于他的职业和世界观；以日常为主的角色只生成简略主线。",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsxs("li", {
                                    children: [
                                        e.jsx("i", { children: e.jsx(Ke, { size: 18 }) }),
                                        e.jsxs("div", {
                                            children: [
                                                e.jsx("b", { children: "认知边界" }),
                                                e.jsx("small", {
                                                    children:
                                                        "他只知道已公开的安排；突发事件当天才发生，结果在节点结束后生成。",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsxs("li", {
                                    children: [
                                        e.jsx("i", { children: e.jsx(Ms, { size: 18 }) }),
                                        e.jsxs("div", {
                                            children: [
                                                e.jsx("b", { children: "自动推进" }),
                                                e.jsx("small", {
                                                    children: "节点结束后生成结果，后续安排随之调整。",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                e.jsx("div", { className: "sch-set-label", children: "跨度" }),
                e.jsx(xe, { value: d.span, options: Je, onChange: (u) => B({ span: u }) }),
                e.jsx("div", { className: "sch-set-label", children: "基调" }),
                e.jsx(xe, { value: d.tone, options: ye, onChange: (u) => B({ tone: u }) }),
                e.jsx("p", { className: "arc-note", children: ye[d.tone].note }),
                e.jsx("div", { className: "sch-set-label", children: "实力位置" }),
                e.jsx(xe, {
                    value: d.standingEdited ? d.standing : "auto",
                    options: dt,
                    onChange: (u) =>
                        B(u === "auto" ? { standingEdited: !1 } : { standing: u, standingEdited: !0 }),
                }),
                e.jsx("p", { className: "arc-note", children: ot }),
                e.jsx("div", { className: "sch-set-label", children: "方向（选填）" }),
                e.jsx("textarea", {
                    className: "arc-dir-input",
                    rows: 3,
                    maxLength: 300,
                    value: d.direction,
                    placeholder: "希望主线走向哪里：结果、转折、节奏。留空则按人设推演。",
                    onChange: (u) => B({ direction: u.target.value }),
                }),
                e.jsx("button", {
                    className: "arc-primary",
                    disabled: !!D,
                    onClick: () => {
                        (B({ enabled: !0 }), j("create"));
                    },
                    children: D
                        ? e.jsxs(e.Fragment, {
                              children: [e.jsx("i", { className: "arc-spin" }), "正在生成…"],
                          })
                        : d.enabled
                          ? "生成主线"
                          : "开启主线",
                }),
                A && e.jsx("p", { className: "arc-err", children: A }),
                e.jsxs("p", {
                    className: "arc-foot",
                    children: [
                        "默认关闭，使用记忆 API 生成。",
                        d.enabled &&
                            e.jsx("button", {
                                className: "arc-link",
                                onClick: () => B({ enabled: !1 }),
                                children: "关闭主线",
                            }),
                    ],
                }),
            ],
        });
    const oe = N ? C.left : 0;
    return e.jsxs("div", {
        className: "arc",
        children: [
            e.jsxs("section", {
                className: `arc-hero${D ? " is-busy" : ""}`,
                children: [
                    e.jsxs("div", {
                        className: "arc-hero-top",
                        children: [
                            e.jsx("span", {
                                children: N ? `当前阶段 · ${T + 1}/${d.phases.length}` : "主线",
                            }),
                            e.jsx("span", { className: "arc-scale", children: tn[d.scale] }),
                        ],
                    }),
                    d.arena && e.jsx("div", { className: "arc-arena", children: d.arena }),
                    e.jsx("h2", { children: N ? N.title : "暂无阶段" }),
                    N != null && N.summary
                        ? e.jsx("p", { children: N.summary })
                        : N
                          ? null
                          : e.jsx("p", { children: "主线已排完，推进后继续。" }),
                    N &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx("div", {
                                    className: "arc-progress",
                                    role: "progressbar",
                                    "aria-valuenow": Math.round(C.ratio * 100),
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    children: e.jsx("i", {
                                        style: { width: `${Math.max(4, C.ratio * 100)}%` },
                                    }),
                                }),
                                e.jsxs("div", {
                                    className: "arc-hero-meta",
                                    children: [
                                        e.jsxs("span", {
                                            children: ["第 ", C.nth, " 天 · 共 ", C.total, " 天"],
                                        }),
                                        e.jsx("span", { children: oe > 0 ? `剩余 ${oe} 天` : "最后一天" }),
                                    ],
                                }),
                            ],
                        }),
                    m &&
                        e.jsxs("button", {
                            className: "arc-next",
                            onClick: () => S({ ...m }),
                            children: [
                                e.jsxs("span", {
                                    className: "arc-next-date",
                                    children: [
                                        e.jsx("b", { children: se(m.date).getDate() }),
                                        e.jsxs("small", {
                                            children: [
                                                se(m.date).getMonth() + 1,
                                                "月 · ",
                                                Ys[se(m.date).getDay()],
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsxs("span", {
                                    className: "arc-next-body",
                                    children: [
                                        e.jsxs("small", { children: ["下一节点 · ", it(m.date, x)] }),
                                        e.jsx("b", { children: m.title }),
                                        m.time
                                            ? e.jsxs("em", {
                                                  children: [m.time, m.endTime ? `–${m.endTime}` : ""],
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                    D &&
                        e.jsxs("div", {
                            className: "arc-hero-busy",
                            children: [
                                e.jsx("i", { className: "arc-spin light" }),
                                D === "advance" ? "正在推进…" : "正在重新安排…",
                            ],
                        }),
                ],
            }),
            A && e.jsx("p", { className: "arc-err", children: A }),
            e.jsxs("div", {
                className: "arc-sec",
                children: [
                    e.jsx("h3", { children: "时间线" }),
                    G > 0 &&
                        e.jsxs("button", {
                            className: "arc-spoil",
                            onClick: () => V((u) => !u),
                            children: [
                                q ? e.jsx(Ke, { size: 15 }) : e.jsx(qs, { size: 15 }),
                                q ? "隐藏" : `${G} 个未公开`,
                            ],
                        }),
                ],
            }),
            e.jsxs("ol", {
                className: "arc-line",
                children: [
                    d.phases.map((u) => {
                        const r = u.to < x ? "past" : u.from > x ? "future" : "now",
                            k = J(u);
                        k.filter((F) => F.outcome).length;
                        const U = X(u);
                        return e.jsxs(
                            "li",
                            {
                                className: `arc-phase ${r}${U ? " open" : ""}`,
                                children: [
                                    e.jsxs("div", {
                                        className: "arc-phase-row",
                                        children: [
                                            e.jsx("i", { className: "arc-dot" }),
                                            e.jsxs("button", {
                                                className: "arc-phase-head",
                                                onClick: () => ae(u),
                                                "aria-expanded": U,
                                                children: [
                                                    e.jsxs("span", {
                                                        children: [
                                                            e.jsx("b", { children: u.title }),
                                                            e.jsxs("small", {
                                                                children: [
                                                                    Xe(u.from),
                                                                    " – ",
                                                                    Xe(u.to),
                                                                    " · ",
                                                                    In(u.from, u.to),
                                                                    " 天",
                                                                    k.length ? ` · ${k.length} 个节点` : "",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    r === "now"
                                                        ? e.jsx("em", {
                                                              className: "arc-tag",
                                                              children: "进行中",
                                                          })
                                                        : null,
                                                    e.jsx(Mt, { size: 14, className: "arc-caret" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    U &&
                                        e.jsxs("div", {
                                            className: "arc-phase-body",
                                            children: [
                                                u.summary &&
                                                    e.jsxs("p", {
                                                        className: "arc-phase-sum",
                                                        children: [
                                                            u.summary,
                                                            e.jsx("button", {
                                                                className: "arc-link",
                                                                onClick: () => M({ ...u }),
                                                                children: "编辑",
                                                            }),
                                                        ],
                                                    }),
                                                !u.summary &&
                                                    e.jsx("p", {
                                                        className: "arc-phase-sum",
                                                        children: e.jsx("button", {
                                                            className: "arc-link",
                                                            onClick: () => M({ ...u }),
                                                            children: "编辑阶段",
                                                        }),
                                                    }),
                                                e.jsxs("ul", {
                                                    className: "arc-beats",
                                                    children: [
                                                        k.map((F) => {
                                                            const Ce =
                                                                    F.known === !1 &&
                                                                    !F.outcome &&
                                                                    F.date > x &&
                                                                    !q,
                                                                Se = F.date < x || !!F.outcome,
                                                                Te = se(F.date);
                                                            return e.jsx(
                                                                "li",
                                                                {
                                                                    children: e.jsxs("button", {
                                                                        className: `arc-beat${Se ? " past" : ""}${Ce ? " hidden" : ""}${F.stakes === "high" ? " high" : ""}${F.date === x ? " today" : ""}`,
                                                                        onClick: () => S({ ...F }),
                                                                        children: [
                                                                            e.jsxs("time", {
                                                                                children: [
                                                                                    e.jsx("b", {
                                                                                        children:
                                                                                            Te.getDate(),
                                                                                    }),
                                                                                    e.jsxs("small", {
                                                                                        children: [
                                                                                            Te.getMonth() + 1,
                                                                                            "月",
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            e.jsx("i", {
                                                                                className: "arc-node",
                                                                            }),
                                                                            e.jsx("span", {
                                                                                className: "arc-beat-body",
                                                                                children: Ce
                                                                                    ? e.jsxs(e.Fragment, {
                                                                                          children: [
                                                                                              e.jsx("b", {
                                                                                                  children:
                                                                                                      "未公开节点",
                                                                                              }),
                                                                                              e.jsx("small", {
                                                                                                  children:
                                                                                                      "点按查看",
                                                                                              }),
                                                                                          ],
                                                                                      })
                                                                                    : e.jsxs(e.Fragment, {
                                                                                          children: [
                                                                                              e.jsxs("b", {
                                                                                                  children: [
                                                                                                      F.title,
                                                                                                      F.stakes ===
                                                                                                      "high"
                                                                                                          ? e.jsx(
                                                                                                                "em",
                                                                                                                {
                                                                                                                    children:
                                                                                                                        "关键",
                                                                                                                },
                                                                                                            )
                                                                                                          : null,
                                                                                                      F.known ===
                                                                                                      !1
                                                                                                          ? e.jsx(
                                                                                                                "em",
                                                                                                                {
                                                                                                                    className:
                                                                                                                        "sub",
                                                                                                                    children:
                                                                                                                        "突发",
                                                                                                                },
                                                                                                            )
                                                                                                          : null,
                                                                                                      F.userEdited
                                                                                                          ? e.jsx(
                                                                                                                "em",
                                                                                                                {
                                                                                                                    className:
                                                                                                                        "sub",
                                                                                                                    children:
                                                                                                                        "已修改",
                                                                                                                },
                                                                                                            )
                                                                                                          : null,
                                                                                                  ],
                                                                                              }),
                                                                                              e.jsx("small", {
                                                                                                  children: [
                                                                                                      Ys[
                                                                                                          Te.getDay()
                                                                                                      ],
                                                                                                      F.time
                                                                                                          ? `${F.time}${F.endTime ? `–${F.endTime}` : ""}`
                                                                                                          : "",
                                                                                                      F.note,
                                                                                                  ]
                                                                                                      .filter(
                                                                                                          Boolean,
                                                                                                      )
                                                                                                      .join(
                                                                                                          " · ",
                                                                                                      ),
                                                                                              }),
                                                                                              F.outcome
                                                                                                  ? e.jsx(
                                                                                                        "span",
                                                                                                        {
                                                                                                            className:
                                                                                                                "arc-outcome",
                                                                                                            children:
                                                                                                                F.outcome,
                                                                                                        },
                                                                                                    )
                                                                                                  : F.date < x
                                                                                                    ? e.jsx(
                                                                                                          "span",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "arc-outcome wait",
                                                                                                              children:
                                                                                                                  "待生成结果",
                                                                                                          },
                                                                                                      )
                                                                                                    : null,
                                                                                          ],
                                                                                      }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                F.id,
                                                            );
                                                        }),
                                                        e.jsx("li", {
                                                            children: e.jsxs("button", {
                                                                className: "arc-add",
                                                                onClick: () =>
                                                                    S({
                                                                        ...Is(
                                                                            u.from > x
                                                                                ? u.from
                                                                                : u.to < x
                                                                                  ? u.to
                                                                                  : x,
                                                                        ),
                                                                        isNew: !0,
                                                                    }),
                                                                children: [
                                                                    e.jsx(Pe, { size: 14 }),
                                                                    "添加节点",
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                ],
                            },
                            u.id,
                        );
                    }),
                    e.jsx("li", {
                        className: "arc-phase add",
                        children: e.jsxs("div", {
                            className: "arc-phase-row",
                            children: [
                                e.jsx("i", { className: "arc-dot" }),
                                e.jsxs("button", {
                                    className: "arc-phase-head",
                                    onClick: () => {
                                        const u = d.phases[d.phases.length - 1],
                                            r = u ? We(new Date(se(u.to).getTime() + 36 * 36e5)) : x;
                                        M({
                                            ...nn(r, We(new Date(se(r).getTime() + 30 * 864e5))),
                                            isNew: !0,
                                        });
                                    },
                                    children: [
                                        e.jsx("span", { children: e.jsx("b", { children: "添加阶段" }) }),
                                        e.jsx(Pe, { size: 14, className: "arc-caret" }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            e.jsx("div", { className: "arc-sec", children: e.jsx("h3", { children: "圈子" }) }),
            e.jsxs("div", {
                className: "arc-circle",
                children: [
                    d.circle.map((u) =>
                        e.jsxs(
                            "button",
                            {
                                onClick: () => K({ ...u }),
                                children: [
                                    e.jsx("span", { className: "arc-av", children: Array.from(u.name)[0] }),
                                    e.jsx("b", { children: u.name }),
                                    e.jsx("small", { children: u.role || " " }),
                                ],
                            },
                            u.id || u.name,
                        ),
                    ),
                    e.jsxs("button", {
                        className: "add",
                        onClick: () =>
                            K({ id: `cc_${Date.now().toString(36)}`, name: "", role: "", isNew: !0 }),
                        children: [
                            e.jsx("span", { className: "arc-av", children: e.jsx(Pe, { size: 16 }) }),
                            e.jsx("b", { children: "添加" }),
                            e.jsx("small", { children: " " }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", { className: "arc-sec", children: e.jsx("h3", { children: "方向" }) }),
            e.jsxs("button", {
                className: "arc-dir",
                onClick: () => L(!0),
                children: [
                    e.jsx("p", {
                        className: d.direction ? "" : "empty",
                        children: d.direction || "未填写，按人设推演。",
                    }),
                    e.jsxs("span", {
                        children: [
                            e.jsx("b", { children: Je[d.span].label }),
                            e.jsx("b", { children: ye[d.tone].label }),
                            d.standing ? e.jsx("b", { children: et[d.standing].label }) : null,
                            e.jsx("em", { children: "编辑" }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "schedule-form-group arc-group",
                children: [
                    e.jsxs("button", {
                        className: "arc-row",
                        disabled: !!D,
                        onClick: () => j("advance"),
                        children: [
                            e.jsxs("span", {
                                children: [
                                    e.jsx("b", { children: "推进一次" }),
                                    e.jsx("small", { children: "生成已结束节点的结果" }),
                                ],
                            }),
                            e.jsx(Ms, { size: 18 }),
                        ],
                    }),
                    e.jsxs("button", {
                        className: "arc-row",
                        disabled: !!D,
                        onClick: () => j("redirect"),
                        children: [
                            e.jsxs("span", {
                                children: [
                                    e.jsx("b", { children: "重新安排" }),
                                    e.jsx("small", { children: "重排今天之后的部分" }),
                                ],
                            }),
                            e.jsx(Ie, { size: 18 }),
                        ],
                    }),
                    e.jsxs("button", {
                        className: "sch-set-row sch-set-toggle on",
                        role: "switch",
                        "aria-checked": "true",
                        onClick: () => B({ enabled: !1 }),
                        children: [
                            e.jsx("span", { children: "主线" }),
                            e.jsx("i", { className: "sch-switch", children: e.jsx("i", {}) }),
                        ],
                    }),
                ],
            }),
            e.jsx("p", {
                className: "arc-foot",
                children: "节点结束或临近末尾时自动推进，修改过的内容会保留。",
            }),
            H && e.jsx(zn, { beat: H, today: x, onClose: () => S(null), onSave: v, onDelete: () => I(H.id) }),
            w && e.jsx(Fn, { phase: w, onClose: () => M(null), onSave: Q, onDelete: () => le(w.id) }),
            _ && e.jsx(Rn, { peer: _, onClose: () => K(null), onSave: re, onDelete: () => me(_.id) }),
            O &&
                e.jsx(Ln, {
                    arc: d,
                    busy: !!D,
                    onClose: () => L(!1),
                    onSave: (u, r) => {
                        (B(u), L(!1), r && setTimeout(() => j("redirect"), 0));
                    },
                }),
        ],
    });
}
function ke({
    title: s,
    onClose: t,
    onDone: a,
    doneLabel: h = "完成",
    doneDisabled: i,
    noCancel: c = !1,
    children: p,
}) {
    return e.jsx("div", {
        className: "schedule-modal",
        onClick: (f) => {
            f.target === f.currentTarget && t();
        },
        children: e.jsxs("section", {
            className: "schedule-sheet arc-sheet",
            children: [
                e.jsx("i", { className: "schedule-grab" }),
                e.jsxs("header", {
                    children: [
                        c ? e.jsx("span", {}) : e.jsx("button", { onClick: t, children: "取消" }),
                        e.jsx("b", { children: s }),
                        e.jsx("button", { className: "done", disabled: i, onClick: a, children: h }),
                    ],
                }),
                p,
            ],
        }),
    });
}
function zn({ beat: s, today: t, onClose: a, onSave: h, onDelete: i }) {
    const [c, p] = b.useState(s),
        f = c.known === !1 && !c.outcome && c.date > t && !c.revealed && !c.isNew,
        d = (o, l) => p((x) => ({ ...x, [o]: l }));
    return f
        ? e.jsx(ke, {
              title: "未公开节点",
              onClose: a,
              onDone: a,
              doneLabel: "关闭",
              noCancel: !0,
              children: e.jsxs("div", {
                  className: "arc-veil",
                  children: [
                      e.jsx(Ke, { size: 28 }),
                      e.jsxs("b", { children: [Xe(c.date), " · ", it(c.date, t)] }),
                      e.jsx("p", { children: "此事件当天才会发生，他目前并不知情。查看内容不影响他。" }),
                      e.jsxs("button", {
                          className: "arc-primary ghost",
                          onClick: () => d("revealed", !0),
                          children: [e.jsx(qs, { size: 16 }), "查看内容"],
                      }),
                  ],
              }),
          })
        : e.jsxs(ke, {
              title: c.isNew ? "新节点" : "节点",
              onClose: a,
              onDone: () => h(c),
              doneLabel: c.isNew ? "添加" : "保存",
              doneDisabled: !String(c.title || "").trim(),
              children: [
                  e.jsxs("label", {
                      children: [
                          "标题",
                          e.jsx("input", {
                              autoFocus: c.isNew,
                              value: c.title,
                              maxLength: 22,
                              placeholder: "节点名称",
                              onChange: (o) => d("title", o.target.value),
                          }),
                      ],
                  }),
                  e.jsxs("div", {
                      className: "schedule-form-group",
                      children: [
                          e.jsxs("label", {
                              children: [
                                  e.jsx("span", { children: "日期" }),
                                  e.jsx("input", {
                                      type: "date",
                                      value: c.date,
                                      onChange: (o) => d("date", o.target.value),
                                  }),
                              ],
                          }),
                          e.jsxs("label", {
                              children: [
                                  e.jsx("span", { children: "指定时段" }),
                                  e.jsx("input", {
                                      type: "checkbox",
                                      checked: !!c.time,
                                      onChange: (o) =>
                                          p((l) => ({
                                              ...l,
                                              time: o.target.checked ? l.time || "19:00" : "",
                                              endTime: o.target.checked ? l.endTime || "21:00" : "",
                                          })),
                                  }),
                              ],
                          }),
                          c.time
                              ? e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsxs("label", {
                                            children: [
                                                e.jsx("span", { children: "开始" }),
                                                e.jsx("input", {
                                                    type: "time",
                                                    value: c.time,
                                                    onChange: (o) => d("time", o.target.value),
                                                }),
                                            ],
                                        }),
                                        e.jsxs("label", {
                                            children: [
                                                e.jsx("span", { children: "结束" }),
                                                e.jsx("input", {
                                                    type: "time",
                                                    value: c.endTime || "",
                                                    onChange: (o) => d("endTime", o.target.value),
                                                }),
                                            ],
                                        }),
                                    ],
                                })
                              : null,
                          e.jsxs("label", {
                              children: [
                                  e.jsx("span", { children: "他提前知道" }),
                                  e.jsx("input", {
                                      type: "checkbox",
                                      checked: c.known !== !1,
                                      onChange: (o) => d("known", o.target.checked),
                                  }),
                              ],
                          }),
                          e.jsxs("label", {
                              children: [
                                  e.jsx("span", { children: "关键节点" }),
                                  e.jsx("input", {
                                      type: "checkbox",
                                      checked: c.stakes === "high",
                                      onChange: (o) => d("stakes", o.target.checked ? "high" : "normal"),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  e.jsx("p", {
                      className: "arc-note",
                      children:
                          c.known === !1
                              ? "当天之前不会出现在他的日程和聊天中。"
                              : "会体现在他的日程和聊天中。",
                  }),
                  e.jsxs("label", {
                      children: [
                          "背景（选填）",
                          e.jsx("input", {
                              value: c.note || "",
                              maxLength: 40,
                              placeholder: "一句话说明",
                              onChange: (o) => d("note", o.target.value),
                          }),
                      ],
                  }),
                  (c.date <= t || c.outcome) &&
                      e.jsxs("label", {
                          children: [
                              "结果",
                              e.jsx("textarea", {
                                  rows: 2,
                                  value: c.outcome || "",
                                  maxLength: 60,
                                  placeholder: "留空则在推进时生成",
                                  onChange: (o) => d("outcome", o.target.value),
                              }),
                          ],
                      }),
                  !c.isNew && e.jsx("button", { className: "arc-danger", onClick: i, children: "删除节点" }),
              ],
          });
}
function Fn({ phase: s, onClose: t, onSave: a, onDelete: h }) {
    const [i, c] = b.useState(s),
        p = (f, d) => c((o) => ({ ...o, [f]: d }));
    return e.jsxs(ke, {
        title: i.isNew ? "新阶段" : "阶段",
        onClose: t,
        onDone: () => a(i),
        doneLabel: i.isNew ? "添加" : "保存",
        doneDisabled: !String(i.title || "").trim() || i.from > i.to,
        children: [
            e.jsxs("label", {
                children: [
                    "名称",
                    e.jsx("input", {
                        autoFocus: i.isNew,
                        value: i.title,
                        maxLength: 20,
                        placeholder: "阶段名称",
                        onChange: (f) => p("title", f.target.value),
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "schedule-form-group",
                children: [
                    e.jsxs("label", {
                        children: [
                            e.jsx("span", { children: "开始" }),
                            e.jsx("input", {
                                type: "date",
                                value: i.from,
                                onChange: (f) => p("from", f.target.value),
                            }),
                        ],
                    }),
                    e.jsxs("label", {
                        children: [
                            e.jsx("span", { children: "结束" }),
                            e.jsx("input", {
                                type: "date",
                                value: i.to,
                                onChange: (f) => p("to", f.target.value),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs("label", {
                children: [
                    "概述",
                    e.jsx("textarea", {
                        rows: 3,
                        value: i.summary || "",
                        maxLength: 90,
                        placeholder: "这段时间的重心与处境",
                        onChange: (f) => p("summary", f.target.value),
                    }),
                ],
            }),
            !i.isNew && e.jsx("button", { className: "arc-danger", onClick: h, children: "删除阶段" }),
        ],
    });
}
function Rn({ peer: s, onClose: t, onSave: a, onDelete: h }) {
    const [i, c] = b.useState(s);
    return e.jsxs(ke, {
        title: i.isNew ? "添加人物" : "人物",
        onClose: t,
        onDone: () => a(i),
        doneLabel: i.isNew ? "添加" : "保存",
        doneDisabled: !String(i.name || "").trim(),
        children: [
            e.jsxs("label", {
                children: [
                    "名称",
                    e.jsx("input", {
                        autoFocus: i.isNew,
                        value: i.name,
                        maxLength: 20,
                        placeholder: "人物、团队或机构",
                        onChange: (p) => c({ ...i, name: p.target.value }),
                    }),
                ],
            }),
            e.jsxs("label", {
                children: [
                    "关系",
                    e.jsx("input", {
                        value: i.role || "",
                        maxLength: 24,
                        placeholder: "与他的关系",
                        onChange: (p) => c({ ...i, role: p.target.value }),
                    }),
                ],
            }),
            !i.isNew && e.jsx("button", { className: "arc-danger", onClick: h, children: "移除" }),
        ],
    });
}
function Ln({ arc: s, busy: t, onClose: a, onSave: h }) {
    const i = s.standingEdited ? s.standing : "auto",
        [c, p] = b.useState({ direction: s.direction, span: s.span, tone: s.tone, st: i }),
        f = c.direction !== s.direction || c.span !== s.span || c.tone !== s.tone || c.st !== i,
        d = () => {
            const { st: o, ...l } = c;
            return { ...l, ...(o === "auto" ? { standingEdited: !1 } : { standing: o, standingEdited: !0 }) };
        };
    return e.jsxs(ke, {
        title: "方向",
        onClose: a,
        onDone: () => h(d(), !1),
        doneLabel: "保存",
        children: [
            e.jsx("textarea", {
                className: "arc-dir-input",
                rows: 5,
                maxLength: 300,
                value: c.direction,
                placeholder: "希望主线走向哪里：结果、转折、节奏。留空则按人设推演。",
                onChange: (o) => p({ ...c, direction: o.target.value }),
            }),
            e.jsx("div", { className: "sch-set-label", children: "跨度" }),
            e.jsx(xe, { value: c.span, options: Je, onChange: (o) => p({ ...c, span: o }) }),
            e.jsx("div", { className: "sch-set-label", children: "基调" }),
            e.jsx(xe, { value: c.tone, options: ye, onChange: (o) => p({ ...c, tone: o }) }),
            e.jsx("p", { className: "arc-note", children: ye[c.tone].note }),
            e.jsx("div", { className: "sch-set-label", children: "实力位置" }),
            e.jsx(xe, { value: c.st, options: dt, onChange: (o) => p({ ...c, st: o }) }),
            e.jsx("p", { className: "arc-note", children: ot }),
            e.jsx("button", {
                className: "arc-primary",
                disabled: t,
                onClick: () => h(d(), !0),
                children: f ? "保存并重新安排" : "按此方向重新安排",
            }),
            e.jsxs("p", {
                className: "arc-note",
                children: [
                    "保存：下次推进时生效。",
                    e.jsx("br", {}),
                    "重新安排：重排今天之后的部分，保留已发生和修改过的。",
                ],
            }),
        ],
    });
}
const _n = as(ls, "日程"),
    Qe = (s) => String(s).padStart(2, "0"),
    W = (s) => `${s.getFullYear()}-${Qe(s.getMonth() + 1)}-${Qe(s.getDate())}`,
    ue = (s, t = "09:00") => {
        const [a, h, i] = s.split("-").map(Number),
            [c, p] = String(t || "09:00")
                .split(":")
                .map(Number);
        return new Date(a, h - 1, i, c || 0, p || 0).getTime();
    },
    ht = (s, t) => W(new Date(s)) === W(t),
    ie = (s) =>
        (s == null ? void 0 : s.nickname) ||
        (s == null ? void 0 : s.name) ||
        (s == null ? void 0 : s.realName) ||
        "未命名角色";
function Bn(s, t, a = 0) {
    if (s.startAt && ht(s.startAt + a, t)) return !0;
    const h = s.recurrence;
    if (!h || h.pattern === "none" || h.pattern === "once") return !1;
    const i = s.startAt ? new Date(s.startAt + a) : null;
    return (i && W(t) < W(i)) || (h.validUntil && W(t) > String(h.validUntil).slice(0, 10))
        ? !1
        : h.pattern === "daily"
          ? !0
          : h.pattern === "weekly"
            ? (t.getDay() || 7) === Number(h.weekday || (i == null ? void 0 : i.getDay()) || 7)
            : h.pattern === "monthly"
              ? t.getDate() === Number(h.monthday || (i == null ? void 0 : i.getDate()))
              : !1;
}
function Yn(s, t) {
    if (s.status !== "open" || s.reviewStatus === "needs_review") return !1;
    if (Number(s.dueAt) && ht(s.dueAt, t)) return !0;
    const a = s.recurrence;
    return !(a != null && a.pattern) || (a.validUntil && W(t) > String(a.validUntil).slice(0, 10))
        ? !1
        : a.pattern === "daily"
          ? !0
          : a.pattern === "weekly"
            ? (t.getDay() || 7) === Number(a.weekday)
            : a.pattern === "monthly"
              ? t.getDate() === Number(a.monthday || 1)
              : !1;
}
const Ws = (s) => new Date(s).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: !1 }),
    Fe = (s) => /^([01]?\d|2[0-3]):[0-5]\d$/.test(String(s || "")),
    Wn = (s, t) => {
        var d;
        if ((s != null && s.schedule) || !Number(s == null ? void 0 : s.dueAt)) return null;
        const a = new Set(s.sourceEventIds || []),
            h = t
                .filter((o) => a.has(o.id))
                .map((o) => o.line || "")
                .join(" ");
        if (
            !/(今天|明天|后天|大后天|下周|这周|本周|周[一二三四五六日天]|星期[一二三四五六日天]|\d{1,2}月\d{1,2}[日号]|\d{4}[-/.年]\d{1,2}[-/.月]\d{1,2})/.test(
                h,
            )
        )
            return null;
        const c = [...h.matchAll(/(?:^|[^\d])([01]?\d|2[0-3])[：:]([0-5]\d)(?!\d)/g)]
                .map((o) => `${Qe(Number(o[1]))}:${o[2]}`)
                .slice(0, 2),
            p = W(new Date(Number(s.dueAt))),
            f = Fe((d = s.recurrence) == null ? void 0 : d.time) ? s.recurrence.time : c[0] || "";
        return {
            startAt: ue(p, f || "00:00"),
            endAt: c[1] ? ue(p, c[1]) : 0,
            allDay: !1,
            timeTbd: !f,
            recurrence: s.recurrence || null,
            scheduleEvidence: h.slice(0, 100),
            legacyEvidenceChecked: !0,
        };
    },
    Gn = (s) => {
        var i, c;
        const t = s == null ? void 0 : s.schedule;
        if (!t || t.eligible !== !0 || t.dateConfirmed !== !0) return null;
        const a =
                t.timeConfirmed === !0 && Fe(t.startTime)
                    ? t.startTime
                    : t.timeConfirmed === !0 && Fe((i = s.recurrence) == null ? void 0 : i.time)
                      ? s.recurrence.time
                      : "",
            h = Number(t.dateAt || s.dueAt) || 0;
        return !h && !((c = s.recurrence) != null && c.pattern)
            ? null
            : {
                  startAt: h ? ue(W(new Date(h)), a || "00:00") : 0,
                  endAt: h && t.timeConfirmed === !0 && Fe(t.endTime) ? ue(W(new Date(h)), t.endTime) : 0,
                  allDay: t.allDay === !0,
                  timeTbd: t.allDay !== !0 && !a,
                  recurrence: s.recurrence || null,
                  scheduleEvidence: t.evidence || "",
              };
    };
function be(s, t = 0) {
    var c;
    if (s.allDay || s.kind === "anniversary") return "全天";
    if (s.timeTbd) return "待定";
    const a = s.source === "schedule" ? t : 0,
        h = s.startAt
            ? Ws(s.startAt + a)
            : ((c = s.recurrence) == null ? void 0 : c.time) || s.time || "待定",
        i = s.endAt ? Ws(s.endAt + a) : "";
    return i && i !== h ? `${h}–${i}` : h;
}
function Hn(s) {
    if (!Number(s.startAt) || !Number(s.endAt) || s.timeTbd || s.allDay) return 79;
    const t = Math.max(0.5, Math.min(6, (s.endAt - s.startAt) / 36e5));
    return Math.round(72 + t * 13);
}
function Kn(s, t = Date.now()) {
    return s.status === "completed"
        ? { key: "completed", label: "已完成" }
        : s.status === "skipped"
          ? { key: "skipped", label: "已跳过" }
          : s.timeTbd || s.allDay || !Number(s.startAt)
            ? { key: "planned", label: "" }
            : Number(s.endAt) && t >= s.startAt && t < s.endAt
              ? { key: "in_progress", label: "进行中" }
              : Number(s.endAt) && t >= s.endAt
                ? { key: "elapsed", label: "时段已过" }
                : { key: "planned", label: "" };
}
const Ne = mn;
function Un(s, t) {
    const a = ts(s, t.regions || [t.his, t.hers])
            .filter((i) => i.weight >= 0.6)
            .sort(
                (i, c) =>
                    Number(c.regions.includes(t.his)) - Number(i.regions.includes(t.his)) ||
                    c.weight - i.weight,
            ),
        h = ns(s, t.his);
    return { holiday: a[0] || null, holidays: a, rest: h };
}
const Gs = as(ls, "主线"),
    qn = [
        ["today", "今天", Pt, "Today"],
        ["month", "日历", Js, "Calendar"],
        ["life", "生活", zt, "Life"],
        ["arc", "主线", Ie, "Story"],
    ];
function sa({ initialCharId: s, onCharChange: t, onClose: a }) {
    var ms, xs, js, ps, gs, fs, bs, Ns, ys, vs, ws, ks, $s, Ds;
    const { state: h, patchChar: i } = $e(),
        c = h.characters || [],
        p = s || h.activeCharId || ((ms = c[0]) == null ? void 0 : ms.id) || "",
        [f, d] = b.useState(p),
        o = c.some((n) => n.id === f) ? f : p,
        l = c.find((n) => n.id === o),
        x = l ? Ze(l) : 0,
        [N, C] = b.useState(() => new Date(Date.now() + x)),
        [D, Y] = b.useState(!1),
        [A, $] = b.useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1)),
        [z, R] = b.useState(!1),
        [H, S] = b.useState(!1),
        [w, M] = b.useState("setup"),
        [_, K] = b.useState(() => {
            var n, g;
            return {
                days: Number((n = l == null ? void 0 : l.schedulePreferences) == null ? void 0 : n.days) || 3,
                density:
                    ((g = l == null ? void 0 : l.schedulePreferences) == null ? void 0 : g.density) ||
                    "natural",
            };
        }),
        [O, L] = b.useState(!1),
        [q, V] = b.useState(""),
        [B, j] = b.useState([]),
        [m, G] = b.useState(null),
        [T, J] = b.useState("today"),
        [X, ae] = b.useState(null),
        [v, I] = b.useState(""),
        [Q, le] = b.useState(!1),
        [re, me] = b.useState(""),
        [oe, u] = b.useState(0),
        [r, k] = b.useState(() => ({
            title: "",
            date: W(new Date()),
            time: "09:00",
            endTime: "10:00",
            allDay: !1,
            repeat: "none",
            kind: "work",
            about: "self",
            note: "",
            untimed: !1,
            reachWant: !1,
            reachWhen: "after",
            reachNote: "",
            place: "",
        })),
        U = (n) => {
            var y, P;
            const g = c.find((E) => E.id === n);
            (d(n),
                K({
                    days:
                        Number((y = g == null ? void 0 : g.schedulePreferences) == null ? void 0 : y.days) ||
                        3,
                    density:
                        ((P = g == null ? void 0 : g.schedulePreferences) == null ? void 0 : P.density) ||
                        "natural",
                }),
                S(!1),
                t == null || t(n),
                G(null));
        },
        F = b.useMemo(() => {
            if (!l) return [];
            const n = (l.scheduleItems || [])
                    .filter((E) => E.status !== "cancelled")
                    .map((E) => ({ ...E, sourceOriginal: E.source, source: "schedule" })),
                g = an(h, l),
                y = (l.threads || [])
                    .filter((E) => E.status === "open")
                    .map((E) => {
                        const he = Gn(E) || Wn(E, g);
                        return he ? { ...E, ...he, source: "thread", readOnly: !0 } : null;
                    })
                    .filter(Boolean),
                P = Xs(l)
                    .filter((E) => E.isAnniversary && E.at && E.reviewStatus !== "deleted")
                    .map((E) => ({
                        id: `ann_${E.id}`,
                        sourceId: E.id,
                        title: E.text || E.tag || "纪念日",
                        startAt: E.at,
                        kind: "anniversary",
                        source: "memory",
                        readOnly: !0,
                        allDay: !0,
                    }));
            return [...n, ...y, ...P];
        }, [l, h]),
        Ce = (n) =>
            F.filter((g) => {
                if (g.kind === "anniversary") {
                    const y = new Date(g.startAt);
                    return (
                        y.getMonth() === n.getMonth() &&
                        y.getDate() === n.getDate() &&
                        n.getFullYear() >= y.getFullYear()
                    );
                }
                return g.source === "thread" ? Yn(g, n) : Bn(g, n, x);
            })
                .concat(l ? zs(l, n) : [])
                .sort((g, y) => be(g, x).localeCompare(be(y, x))),
        Se = l
            ? es(l, { deviceTz: ss() })
            : { his: "CN", hers: "CN", regions: ["CN"], hisAuto: "CN", hersAuto: "CN" },
        ut = (new Date(A.getFullYear(), A.getMonth(), 1).getDay() + 6) % 7,
        ds = new Date(A.getFullYear(), A.getMonth() + 1, 0).getDate(),
        mt = new Date(A.getFullYear(), A.getMonth(), 0).getDate(),
        xt = Array.from({ length: 42 }, (n, g) => {
            const y = g - ut + 1,
                P =
                    y < 1
                        ? new Date(A.getFullYear(), A.getMonth() - 1, mt + y)
                        : y > ds
                          ? new Date(A.getFullYear(), A.getMonth() + 1, y - ds)
                          : new Date(A.getFullYear(), A.getMonth(), y);
            return { date: P, outside: P.getMonth() !== A.getMonth() };
        }),
        os = Ce(N),
        jt = () => {
            if (!l || !r.title.trim()) return;
            const n = r.untimed === !0,
                g = ue(r.date, n || r.allDay ? "00:00" : r.time) - x;
            let y = n || r.allDay ? 0 : ue(r.date, r.endTime) - x;
            !n && !r.allDay && y <= g && (y = g + 60 * 6e4);
            const P = {
                id: `sch_${Date.now().toString(36)}`,
                title: r.title.trim(),
                startAt: g,
                endAt: y,
                kind: Fs[r.kind] ? r.kind : "work",
                about: r.about === "user" ? "user" : "self",
                note: String(r.note || "")
                    .trim()
                    .slice(0, 120),
                ...(String(r.place || "").trim() ? { place: String(r.place).trim().slice(0, 24) } : null),
                reachOut: r.reachWant
                    ? {
                          want: !0,
                          when: Oe[r.reachWhen] ? r.reachWhen : "after",
                          offsetMin: 0,
                          note: String(r.reachNote || "")
                              .trim()
                              .slice(0, 60),
                      }
                    : null,
                allDay: !n && r.allDay,
                untimed: n,
                recurrence:
                    n || r.repeat === "none"
                        ? null
                        : {
                              pattern: r.repeat,
                              weekday: r.repeat === "weekly" ? new Date(g + x).getDay() || 7 : void 0,
                              monthday: r.repeat === "monthly" ? new Date(g + x).getDate() : void 0,
                              time: r.allDay ? "" : r.time,
                          },
                status: "active",
                source: "manual",
                createdAt: Date.now(),
            };
            i(l.id, (he) => ({ scheduleItems: [...(he.scheduleItems || []), P] }));
            const E = new Date(g + x);
            (C(E),
                $(new Date(E.getFullYear(), E.getMonth(), 1)),
                k({
                    title: "",
                    date: W(E),
                    time: "09:00",
                    endTime: "10:00",
                    allDay: !1,
                    repeat: "none",
                    kind: "work",
                    about: "self",
                    note: "",
                    untimed: !1,
                    reachWant: !1,
                    reachWhen: "after",
                    reachNote: "",
                    place: "",
                }),
                R(!1));
        },
        pt = (n) => {
            !l ||
                n.source !== "schedule" ||
                (i(l.id, (g) => ({ scheduleItems: (g.scheduleItems || []).filter((y) => y.id !== n.id) })),
                G(null));
        },
        Le = (n, g) => {
            !l ||
                n.source !== "schedule" ||
                (i(l.id, (y) => ({
                    scheduleItems: (y.scheduleItems || []).map((P) =>
                        P.id === n.id ? { ...P, status: g, statusUpdatedAt: Date.now() } : P,
                    ),
                })),
                G((y) => y && { ...y, status: g, statusUpdatedAt: Date.now() }));
        },
        _e = (n, g) => {
            !l ||
                n.source !== "schedule" ||
                (i(l.id, (y) => ({
                    scheduleItems: (y.scheduleItems || []).map((P) => (P.id === n.id ? { ...P, ...g } : P)),
                })),
                G((y) => y && { ...y, ...g }));
        },
        gt = (n) => {
            if (!l) return;
            const g = n.status === "completed" ? "active" : "completed";
            i(l.id, (y) => ({
                scheduleItems: (y.scheduleItems || []).map((P) =>
                    P.id === n.id ? { ...P, status: g, statusUpdatedAt: Date.now() } : P,
                ),
            }));
        },
        ft = (n) => {
            !l ||
                !X ||
                (i(l.id, (g) => ({
                    scheduleItems: (g.scheduleItems || []).map((y) =>
                        y.id === X.id
                            ? {
                                  ...y,
                                  recap: { text: n, at: Date.now(), by: "char" },
                                  status: y.status === "active" ? "completed" : y.status,
                                  statusUpdatedAt: Date.now(),
                              }
                            : y,
                    ),
                })),
                ae(null));
        },
        bt = (n) => {
            !l ||
                !v ||
                (i(l.id, (g) => ({
                    scheduleDays: { ...(g.scheduleDays || {}), [v]: { summary: n, at: Date.now() } },
                })),
                I(""));
        },
        Be = ((xs = l == null ? void 0 : l.schedulePreferences) == null ? void 0 : xs.auto) === !0,
        Nt = () => {
            l && i(l.id, (n) => ({ schedulePreferences: { ...(n.schedulePreferences || {}), auto: !Be } }));
        },
        yt = l ? ln(l) : "few",
        vt = (n) =>
            l &&
            i(l.id, (g) => ({
                schedulePreferences: { ...(g.schedulePreferences || {}), plogFreq: n, plogPerDay: Ps[n].n },
            })),
        Ae = ((js = l == null ? void 0 : l.schedulePreferences) == null ? void 0 : js.density) || "natural",
        wt = (n) =>
            l && i(l.id, (g) => ({ schedulePreferences: { ...(g.schedulePreferences || {}), density: n } })),
        hs = () => {
            var n, g;
            (K({
                days: Number((n = l == null ? void 0 : l.schedulePreferences) == null ? void 0 : n.days) || 3,
                density:
                    ((g = l == null ? void 0 : l.schedulePreferences) == null ? void 0 : g.density) ||
                    "natural",
            }),
                M("setup"),
                V(""),
                j([]),
                S(!0));
        },
        us = async () => {
            var he, Cs, Ss, Ts;
            if (!l || O) return;
            const n = [1, 3, 7].includes(Number(_.days)) ? Number(_.days) : 3;
            (i(l.id, (Z) => ({
                schedulePreferences: { ...(Z.schedulePreferences || {}), days: n, density: _.density },
            })),
                M("review"),
                L(!0),
                V(""),
                j([]));
            const g = new Date(),
                y = new Date(g.getFullYear(), g.getMonth(), g.getDate() + n - 1, 23, 59).getTime(),
                P = F.filter(
                    (Z) =>
                        Z.source !== "memory" &&
                        Number(Z.startAt) >= g.getTime() - 864e5 &&
                        Number(Z.startAt) <= y,
                ).map((Z) => ({
                    title: Z.title,
                    date: W(new Date(Z.startAt + (Z.source === "schedule" ? x : 0))),
                    time: be(Z, x),
                })),
                E = xn(l, { days: n, density: _.density, existing: P, now: g.getTime(), state: h });
            try {
                const Z =
                        (Cs = (he = h.api) == null ? void 0 : he.memory) != null && Cs.baseUrl
                            ? h.api.memory
                            : (Ss = h.api) == null
                              ? void 0
                              : Ss.chat,
                    Ye = await _n.memory(Z, E.messages, {
                        fallback: (Ts = h.api) == null ? void 0 : Ts.chat,
                        max_tokens: E.maxTokens,
                        temperature: 0.72,
                    }),
                    As = jn(Ye == null ? void 0 : Ye.content, E.ctx);
                (j(As), As.length || V("这次没有足够可靠的生活依据，日程保持留白。"));
            } catch (Z) {
                V((Z == null ? void 0 : Z.message) || "生成失败，请检查记忆 API。");
            } finally {
                L(!1);
            }
        },
        kt = () => {
            if (!l) return;
            const n = B.filter((E) => E.selected);
            if (!n.length) {
                S(!1);
                return;
            }
            const g = Date.now();
            i(l.id, (E) => ({ scheduleItems: [...(E.scheduleItems || []), ...pn(n, { createdAt: g })] }));
            const y = n[0],
                P = new Date(ue(y.date, y.startTime));
            (C(P), $(new Date(P.getFullYear(), P.getMonth(), 1)), S(!1));
        };
    if (!l)
        return e.jsxs("main", {
            className: "schedule-app",
            children: [
                e.jsxs("header", {
                    className: "schedule-top is-empty",
                    children: [
                        e.jsx("button", { onClick: a, children: e.jsx(He, { size: 21 }) }),
                        e.jsx("h1", { children: "日程" }),
                        e.jsx("span", {}),
                    ],
                }),
                e.jsxs("div", {
                    className: "schedule-empty",
                    children: [
                        e.jsx("b", { children: "还没有角色" }),
                        e.jsx("span", { children: "创建角色后才能建立日程。" }),
                    ],
                }),
            ],
        });
    const $t = Q
            ? e.jsx("div", {
                  className: "schedule-modal",
                  onClick: (n) => {
                      n.target === n.currentTarget && le(!1);
                  },
                  children: e.jsxs("section", {
                      className: "schedule-sheet",
                      children: [
                          e.jsx("i", { className: "schedule-grab" }),
                          e.jsxs("header", {
                              children: [
                                  e.jsx("span", {}),
                                  e.jsx("b", { children: "日程设置" }),
                                  e.jsx("button", {
                                      className: "done",
                                      onClick: () => le(!1),
                                      children: "完成",
                                  }),
                              ],
                          }),
                          e.jsx("div", {
                              className: "schedule-form-group",
                              children: e.jsxs("button", {
                                  className: `sch-set-row sch-set-toggle${Be ? " on" : ""}`,
                                  role: "switch",
                                  "aria-checked": Be,
                                  onClick: Nt,
                                  children: [
                                      e.jsx("span", { children: "自动更新日程" }),
                                      e.jsx("i", { className: "sch-switch", children: e.jsx("i", {}) }),
                                  ],
                              }),
                          }),
                          e.jsx("p", {
                              children:
                                  "打开后：过完的安排他会自己记一笔（做没做、实际怎样），晚上把当天的日常发到「生活」里并写个小结；往后快排空时自动接着排。关闭时只在你手动操作时才生成。",
                          }),
                          e.jsx("div", { className: "sch-set-label", children: "自动排日程" }),
                          e.jsx("div", {
                              className: "schedule-choice-grid perday",
                              children: Object.entries(Ne).map(([n, g]) =>
                                  e.jsx(
                                      "button",
                                      {
                                          className: Ae === n ? "selected" : "",
                                          onClick: () => wt(n),
                                          children: e.jsx("span", { children: g.label }),
                                      },
                                      n,
                                  ),
                              ),
                          }),
                          e.jsxs("p", {
                              children: [
                                  "决定自动排出的日程有多满。",
                                  (ps = Ne[Ae]) != null && ps.byChar
                                      ? "跟角色时由他的生活节奏决定。"
                                      : `每天约 ${(gs = Ne[Ae]) == null ? void 0 : gs.min}–${(fs = Ne[Ae]) == null ? void 0 : fs.max} 项。`,
                              ],
                          }),
                          e.jsx("div", { className: "sch-set-label", children: "生活动态频率" }),
                          e.jsx("div", {
                              className: "schedule-choice-grid perday",
                              children: Object.entries(Ps).map(([n, g]) =>
                                  e.jsx(
                                      "button",
                                      {
                                          className: yt === n ? "selected" : "",
                                          onClick: () => vt(n),
                                          children: e.jsx("span", { children: g.label }),
                                      },
                                      n,
                                  ),
                              ),
                          }),
                          e.jsx("p", { children: "为上限而非指标；跟角色时按他平时发动态的习惯决定。" }),
                          (T === "today" || T === "month") &&
                              e.jsx("div", {
                                  className: "schedule-form-group",
                                  children: e.jsx("button", {
                                      className: "sch-set-row",
                                      onClick: () => {
                                          (le(!1), hs());
                                      },
                                      children: "往后排几天（先看一眼再加入）",
                                  }),
                              }),
                      ],
                  }),
              })
            : null,
        Me = T === "life",
        pe = T === "arc",
        ce = Ue(l),
        ge = ce.enabled ? Zs(ce, Date.now() + x) : null,
        fe = ce.enabled
            ? ce.beats.find((n) => n.date >= W(new Date(Date.now() + x)) && !n.outcome && n.known !== !1)
            : null,
        Dt = ce.enabled && ce.beats.some((n) => !n.outcome && n.date < W(new Date(Date.now() + x))),
        Ct = Me ? "生活" : pe ? "主线" : "日程",
        St = () => {
            if (pe) {
                u((n) => n + 1);
                return;
            }
            (k((n) => ({ ...n, date: W(N), untimed: !1 })), R(!0));
        };
    return e.jsxs("main", {
        className: "schedule-app has-tabbar",
        children: [
            e.jsxs("header", {
                className: "schedule-top",
                children: [
                    e.jsx("button", {
                        className: "schedule-circle",
                        onClick: a,
                        "aria-label": "返回桌面",
                        children: e.jsx(He, { size: 20 }),
                    }),
                    e.jsxs("div", {
                        className: "schedule-heading",
                        children: [
                            e.jsx("h1", { children: Ct }),
                            !Me &&
                                e.jsx("select", {
                                    "aria-label": "切换角色",
                                    value: l.id,
                                    onChange: (n) => U(n.target.value),
                                    children: c.map((n) =>
                                        e.jsx("option", { value: n.id, children: ie(n) }, n.id),
                                    ),
                                }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "schedule-top-r",
                        children: [
                            e.jsx("button", {
                                className: "schedule-circle",
                                onClick: () => le(!0),
                                "aria-label": "日程设置",
                                children: e.jsx(Us, { size: 22, weight: "bold" }),
                            }),
                            !Me &&
                                !(pe && !ce.phases.length) &&
                                e.jsx("button", {
                                    className: "schedule-circle",
                                    onClick: St,
                                    "aria-label": pe ? "新建节点" : "新建日程",
                                    children: e.jsx(Pe, { size: 21 }),
                                }),
                        ],
                    }),
                ],
            }),
            e.jsx("i", { className: "sch-tabbar-fade", "aria-hidden": "true" }),
            e.jsx("nav", {
                className: "sch-tabbar",
                "aria-label": "日程分页",
                children: qn.map(([n, g, y, P]) =>
                    e.jsxs(
                        "button",
                        {
                            className: T === n ? "on" : "",
                            "aria-label": g,
                            "aria-current": T === n ? "page" : void 0,
                            onClick: () => J(n),
                            children: [
                                e.jsx(y, { size: 24, weight: T === n ? "fill" : "regular" }),
                                e.jsx("span", { children: P }),
                                n === "arc" && Dt && T !== "arc"
                                    ? e.jsx("i", { className: "sch-tab-dot" })
                                    : null,
                            ],
                        },
                        n,
                    ),
                ),
            }),
            Me &&
                e.jsx("section", {
                    className: "schedule-scroll snap",
                    children: e.jsx(Sn, {
                        char: l,
                        chars: c,
                        onSelectChar: U,
                        onPickItem: (n) => ae({ ...n, source: "schedule" }),
                        onSummarize: (n) => I(n),
                    }),
                }),
            pe &&
                e.jsx("section", {
                    className: "schedule-scroll",
                    children: e.jsx(Pn, {
                        char: l,
                        name: ie(l),
                        patchChar: i,
                        focusBeatId: re,
                        onFocusDone: () => me(""),
                        addSignal: oe,
                        runGenerate: (n) => cn(h, l, i, { mode: n, client: Gs }),
                        runAdvance: () => rn(h, l, i, { client: Gs }),
                    }),
                }),
            (T === "today" || T === "month") &&
                e.jsxs("section", {
                    className: "schedule-scroll",
                    children: [
                        T === "today" &&
                            ge &&
                            e.jsxs("button", {
                                className: "arc-strip",
                                onClick: () => J("arc"),
                                children: [
                                    e.jsxs("small", { children: ["主线 · ", ce.arena || ge.title] }),
                                    e.jsx("b", { children: ge.title }),
                                    e.jsx("em", {
                                        children: fe
                                            ? `${fe.date === W(new Date(Date.now() + x)) ? "今天" : `${Number(fe.date.slice(5, 7))}/${Number(fe.date.slice(8, 10))}`} · ${fe.title}`
                                            : `还剩 ${qe(ge, Date.now() + x).left} 天`,
                                    }),
                                    e.jsx("span", {
                                        className: "arc-strip-bar",
                                        children: e.jsx("i", {
                                            style: {
                                                width: `${Math.max(4, qe(ge, Date.now() + x).ratio * 100)}%`,
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        T === "today" && e.jsx(dn, { char: l, name: ie(l), onEdit: () => Y(!0) }),
                        T === "today" &&
                            e.jsx(Nn, {
                                char: l,
                                date: N,
                                summary: ((bs = l.scheduleDays) == null ? void 0 : bs[W(N)]) || null,
                                onPick: (n) => G({ ...n, source: "schedule", sourceOriginal: n.source }),
                                onNew: () => {
                                    (k((n) => ({ ...n, date: W(N), untimed: !1 })), R(!0));
                                },
                                onSummary: () => I(W(N)),
                            }),
                        T === "today" && e.jsx("h3", { className: "sch-sec", children: "待办" }),
                        T === "today" &&
                            e.jsx(yn, {
                                char: l,
                                onPick: (n) => G({ ...n, source: "schedule", sourceOriginal: n.source }),
                                onToggle: gt,
                                onNew: () => {
                                    (k((n) => ({ ...n, date: W(N), untimed: !0, kind: "todo", allDay: !1 })),
                                        R(!0));
                                },
                            }),
                        T === "month" &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsxs("div", {
                                        className: "schedule-month-card",
                                        children: [
                                            e.jsxs("div", {
                                                className: "schedule-month-head",
                                                children: [
                                                    e.jsx("button", {
                                                        onClick: () =>
                                                            $(new Date(A.getFullYear(), A.getMonth() - 1, 1)),
                                                        "aria-label": "上个月",
                                                        children: e.jsx(Ot, { size: 19 }),
                                                    }),
                                                    e.jsxs("strong", {
                                                        children: [
                                                            A.getFullYear(),
                                                            " 年 ",
                                                            A.getMonth() + 1,
                                                            " 月",
                                                        ],
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: () =>
                                                            $(new Date(A.getFullYear(), A.getMonth() + 1, 1)),
                                                        "aria-label": "下个月",
                                                        children: e.jsx(Et, { size: 19 }),
                                                    }),
                                                ],
                                            }),
                                            e.jsx("div", {
                                                className: "schedule-week",
                                                children: ["一", "二", "三", "四", "五", "六", "日"].map(
                                                    (n) => e.jsx("span", { children: n }, n),
                                                ),
                                            }),
                                            e.jsx("div", {
                                                className: "schedule-grid",
                                                children: xt.map(({ date: n, outside: g }) => {
                                                    const y = W(n) === W(N),
                                                        P = Un(n, Se),
                                                        E = ce.enabled && zs(l, n).length > 0;
                                                    return e.jsxs(
                                                        "button",
                                                        {
                                                            className: `${g ? "outside " : ""}${y ? "selected " : ""}${P.rest.kind === "break" ? "is-break " : ""}${E ? "has-arc" : ""}`,
                                                            onClick: () => {
                                                                (C(n),
                                                                    g &&
                                                                        $(
                                                                            new Date(
                                                                                n.getFullYear(),
                                                                                n.getMonth(),
                                                                                1,
                                                                            ),
                                                                        ));
                                                            },
                                                            children: [
                                                                e.jsx("span", { children: n.getDate() }),
                                                                P.holiday
                                                                    ? e.jsx("em", {
                                                                          className: "schedule-day-festival",
                                                                          children: P.holiday.name.replace(
                                                                              /节$/,
                                                                              "",
                                                                          ),
                                                                      })
                                                                    : null,
                                                            ],
                                                        },
                                                        W(n),
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "schedule-agenda-head",
                                        children: [
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("b", {
                                                        children:
                                                            W(N) === W(new Date())
                                                                ? "今天"
                                                                : `${N.getMonth() + 1} 月 ${N.getDate()} 日`,
                                                    }),
                                                    e.jsx("span", { children: on(N.getTime(), Se) }),
                                                ],
                                            }),
                                            e.jsxs("div", {
                                                className: "schedule-agenda-actions",
                                                children: [
                                                    e.jsxs("small", { children: [ie(l), "的安排"] }),
                                                    e.jsx("button", {
                                                        onClick: hs,
                                                        disabled: O,
                                                        children: O ? "生成中" : "刷新日程",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsx("section", {
                                        className: "schedule-agenda",
                                        children: os.length
                                            ? os.map((n) => {
                                                  var y, P;
                                                  const g = Kn(n);
                                                  return e.jsxs(
                                                      "button",
                                                      {
                                                          className: `schedule-event ${g.key}${n.source === "arc" ? " arc-event" : ""}`,
                                                          style: { "--event-height": `${Hn(n)}px` },
                                                          onClick: () =>
                                                              n.source === "arc"
                                                                  ? (me(n.beatId), J("arc"))
                                                                  : G(n),
                                                          children: [
                                                              e.jsx("time", { children: be(n, x) }),
                                                              e.jsx("i", {
                                                                  className: `schedule-event-line ${n.source}`,
                                                              }),
                                                              e.jsxs("span", {
                                                                  children: [
                                                                      e.jsxs("b", {
                                                                          children: [
                                                                              n.source === "arc"
                                                                                  ? e.jsx("em", {
                                                                                        children: "主线",
                                                                                    })
                                                                                  : null,
                                                                              n.about === "user"
                                                                                  ? e.jsx("em", {
                                                                                        className:
                                                                                            "schedule-about-user",
                                                                                        children: "关于她",
                                                                                    })
                                                                                  : null,
                                                                              n.title,
                                                                          ],
                                                                      }),
                                                                      e.jsxs("small", {
                                                                          children: [
                                                                              g.label ? `${g.label} · ` : "",
                                                                              n.place ? `${n.place} · ` : "",
                                                                              (y = n.reachOut) != null &&
                                                                              y.want
                                                                                  ? "完了想找你 · "
                                                                                  : "",
                                                                              n.source === "arc"
                                                                                  ? n.outcome ||
                                                                                    n.note ||
                                                                                    "主线节点 · 在主线里编辑"
                                                                                  : n.source === "thread"
                                                                                    ? "来自已确认约定 · 只读"
                                                                                    : n.source === "memory"
                                                                                      ? "来自纪念日 · 只读"
                                                                                      : n.note
                                                                                        ? n.note
                                                                                        : n.sourceOriginal ===
                                                                                            "generated"
                                                                                          ? "结合记忆生成"
                                                                                          : (P =
                                                                                                  n.recurrence) !=
                                                                                                  null &&
                                                                                              P.pattern &&
                                                                                              n.recurrence
                                                                                                  .pattern !==
                                                                                                  "none"
                                                                                            ? "重复安排"
                                                                                            : te(n.kind),
                                                                          ],
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      },
                                                      `${n.source}_${n.id}`,
                                                  );
                                              })
                                            : e.jsxs("div", {
                                                  className: "schedule-empty compact",
                                                  children: [
                                                      e.jsx("b", { children: "这天没有安排" }),
                                                      e.jsx("span", { children: "留白也是生活的一部分。" }),
                                                  ],
                                              }),
                                    }),
                                    e.jsx("div", {
                                        className: "sch-month-extra",
                                        children: e.jsx("button", {
                                            onClick: () => I(W(N)),
                                            children: "给这天写小结",
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
            $t,
            D &&
                e.jsx("div", {
                    className: "schedule-modal",
                    onClick: (n) => {
                        n.target === n.currentTarget && Y(!1);
                    },
                    children: e.jsxs("section", {
                        className: "schedule-sheet",
                        children: [
                            e.jsx("i", { className: "schedule-grab" }),
                            e.jsxs("header", {
                                children: [
                                    e.jsx("span", {}),
                                    e.jsx("b", { children: "所在地" }),
                                    e.jsx("button", {
                                        className: "done",
                                        onClick: () => Y(!1),
                                        children: "完成",
                                    }),
                                ],
                            }),
                            e.jsx(hn, { char: l, name: ie(l) }),
                        ],
                    }),
                }),
            z &&
                e.jsx("div", {
                    className: "schedule-modal",
                    onClick: (n) => {
                        n.target === n.currentTarget && R(!1);
                    },
                    children: e.jsxs("section", {
                        className: "schedule-sheet",
                        children: [
                            e.jsx("i", { className: "schedule-grab" }),
                            e.jsxs("header", {
                                children: [
                                    e.jsx("button", { onClick: () => R(!1), children: "取消" }),
                                    e.jsx("b", { children: "新建日程" }),
                                    e.jsx("button", { className: "done", onClick: jt, children: "添加" }),
                                ],
                            }),
                            e.jsxs("label", {
                                children: [
                                    "标题",
                                    e.jsx("input", {
                                        autoFocus: !0,
                                        value: r.title,
                                        maxLength: 60,
                                        placeholder: "他接下来要做什么",
                                        onChange: (n) => k({ ...r, title: n.target.value }),
                                    }),
                                ],
                            }),
                            e.jsx("div", {
                                className: "schedule-kind-row",
                                children: un.map((n) =>
                                    e.jsx(
                                        "button",
                                        {
                                            className: r.kind === n ? "on" : "",
                                            onClick: () => k({ ...r, kind: n }),
                                            children: Fs[n].label,
                                        },
                                        n,
                                    ),
                                ),
                            }),
                            e.jsxs("div", {
                                className: "schedule-about-row",
                                children: [
                                    e.jsxs("button", {
                                        className: r.about === "self" ? "on" : "",
                                        onClick: () => k({ ...r, about: "self" }),
                                        children: [
                                            e.jsx("b", { children: "他自己的事" }),
                                            e.jsx("small", { children: "他这段时间在干什么" }),
                                        ],
                                    }),
                                    e.jsxs("button", {
                                        className: r.about === "user" ? "on" : "",
                                        onClick: () => k({ ...r, about: "user" }),
                                        children: [
                                            e.jsx("b", { children: "他记下的、关于你的" }),
                                            e.jsx("small", { children: "你几点下课 / 你的 deadline" }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "schedule-form-group",
                                children: [
                                    e.jsxs("label", {
                                        children: [
                                            e.jsx("span", {
                                                children: "这是一件待办（没有固定时段，做不完会一直挂着）",
                                            }),
                                            e.jsx("input", {
                                                type: "checkbox",
                                                checked: !!r.untimed,
                                                onChange: (n) =>
                                                    k({
                                                        ...r,
                                                        untimed: n.target.checked,
                                                        kind: n.target.checked ? "todo" : r.kind,
                                                    }),
                                            }),
                                        ],
                                    }),
                                    e.jsxs("label", {
                                        children: [
                                            e.jsx("span", {
                                                children: r.untimed ? "从哪天开始挂着" : "日期",
                                            }),
                                            e.jsx("input", {
                                                type: "date",
                                                value: r.date,
                                                onChange: (n) => k({ ...r, date: n.target.value }),
                                            }),
                                        ],
                                    }),
                                    !r.untimed &&
                                        e.jsxs("label", {
                                            children: [
                                                e.jsx("span", { children: "全天" }),
                                                e.jsx("input", {
                                                    type: "checkbox",
                                                    checked: r.allDay,
                                                    onChange: (n) => k({ ...r, allDay: n.target.checked }),
                                                }),
                                            ],
                                        }),
                                    !r.untimed &&
                                        !r.allDay &&
                                        e.jsxs(e.Fragment, {
                                            children: [
                                                e.jsxs("label", {
                                                    children: [
                                                        e.jsx("span", { children: "开始" }),
                                                        e.jsx("input", {
                                                            type: "time",
                                                            value: r.time,
                                                            onChange: (n) =>
                                                                k({ ...r, time: n.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs("label", {
                                                    children: [
                                                        e.jsx("span", { children: "结束" }),
                                                        e.jsx("input", {
                                                            type: "time",
                                                            value: r.endTime,
                                                            onChange: (n) =>
                                                                k({ ...r, endTime: n.target.value }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    !r.untimed &&
                                        e.jsxs("label", {
                                            children: [
                                                e.jsx("span", { children: "重复" }),
                                                e.jsxs("select", {
                                                    value: r.repeat,
                                                    onChange: (n) => k({ ...r, repeat: n.target.value }),
                                                    children: [
                                                        e.jsx("option", { value: "none", children: "永不" }),
                                                        e.jsx("option", { value: "daily", children: "每天" }),
                                                        e.jsx("option", {
                                                            value: "weekly",
                                                            children: "每周",
                                                        }),
                                                        e.jsx("option", {
                                                            value: "monthly",
                                                            children: "每月",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            x !== 0 &&
                                !r.untimed &&
                                e.jsxs("p", {
                                    children: [
                                        ie(l),
                                        "现在在别的时区：上面的日期和时间按 TA 那边的当地时间填。",
                                    ],
                                }),
                            e.jsxs("label", {
                                children: [
                                    "地点（可留空）",
                                    e.jsx("input", {
                                        value: r.place,
                                        maxLength: 24,
                                        placeholder: "公司 / 健身房 / 某座城市",
                                        onChange: (n) => k({ ...r, place: n.target.value }),
                                    }),
                                ],
                            }),
                            ze({ place: r.place.trim(), kind: r.kind }) &&
                                e.jsxs("p", {
                                    children: [
                                        "这是一座城市：这件事",
                                        r.kind === "travel" ? "结束" : "开始",
                                        "后，",
                                        ie(l),
                                        "的所在地会跟着变成「",
                                        r.place.trim(),
                                        "」。",
                                    ],
                                }),
                            e.jsxs("label", {
                                children: [
                                    "他给自己写的一句（可留空）",
                                    e.jsx("input", {
                                        value: r.note,
                                        maxLength: 40,
                                        placeholder: "选填 · 一句备忘",
                                        onChange: (n) => k({ ...r, note: n.target.value }),
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "schedule-reach",
                                children: [
                                    e.jsxs("label", {
                                        className: "schedule-reach-head",
                                        children: [
                                            e.jsxs("span", {
                                                children: [
                                                    e.jsx("b", { children: "完了之后他会想找你" }),
                                                    e.jsx("small", {
                                                        children:
                                                            "到点成为他主动开口的由头 —— 由头，不是闹钟",
                                                    }),
                                                ],
                                            }),
                                            e.jsx("input", {
                                                type: "checkbox",
                                                checked: r.reachWant,
                                                onChange: (n) => k({ ...r, reachWant: n.target.checked }),
                                            }),
                                        ],
                                    }),
                                    r.reachWant &&
                                        e.jsxs(e.Fragment, {
                                            children: [
                                                e.jsx("div", {
                                                    className: "schedule-reach-when",
                                                    children: Object.entries(Oe).map(([n, g]) =>
                                                        e.jsx(
                                                            "button",
                                                            {
                                                                className: r.reachWhen === n ? "on" : "",
                                                                onClick: () => k({ ...r, reachWhen: n }),
                                                                children: g,
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                                }),
                                                e.jsx("input", {
                                                    value: r.reachNote,
                                                    maxLength: 30,
                                                    placeholder: "他给自己留的那一句",
                                                    onChange: (n) => k({ ...r, reachNote: n.target.value }),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            e.jsxs("p", {
                                children: [
                                    "普通日程不会自动写入记忆。只有聊天里明确确认过日期与时间的约定，才会以只读形式显示。",
                                    e.jsx("br", {}),
                                    "「完了之后会想找你」要生效，还得在 TA 的自主权限里把主动发消息的强度调到「跟日程」—— 到点了他仍然会自己判断这会儿想不想说话。",
                                ],
                            }),
                        ],
                    }),
                }),
            H &&
                e.jsx("div", {
                    className: "schedule-modal",
                    onClick: (n) => {
                        n.target === n.currentTarget && !O && S(!1);
                    },
                    children: e.jsxs("section", {
                        className: "schedule-sheet schedule-refresh-sheet",
                        children: [
                            e.jsx("i", { className: "schedule-grab" }),
                            e.jsxs("header", {
                                children: [
                                    e.jsx("button", {
                                        disabled: O,
                                        onClick: () => (w === "review" && !O ? M("setup") : S(!1)),
                                        children: w === "review" ? "返回" : "取消",
                                    }),
                                    e.jsx("b", { children: "刷新日程" }),
                                    w === "setup"
                                        ? e.jsx("span", {})
                                        : e.jsx("button", {
                                              className: "done",
                                              disabled: O || !B.some((n) => n.selected),
                                              onClick: kt,
                                              children: "加入",
                                          }),
                                ],
                            }),
                            e.jsx("div", {
                                className: "schedule-refresh-intro",
                                children: e.jsxs("div", {
                                    children: [
                                        e.jsxs("b", { children: ["从 ", ie(l), " 的生活里排一点"] }),
                                        e.jsx("p", {
                                            children: "使用记忆 API 读取人设与现有记忆，结果先确认再加入。",
                                        }),
                                    ],
                                }),
                            }),
                            w === "setup" &&
                                e.jsxs("div", {
                                    className: "schedule-refresh-setup",
                                    children: [
                                        e.jsxs("section", {
                                            children: [
                                                e.jsx("b", { children: "生成范围" }),
                                                e.jsx("div", {
                                                    className: "schedule-choice-grid range",
                                                    children: [
                                                        [1, "今日"],
                                                        [3, "近三日"],
                                                        [7, "近七日"],
                                                    ].map(([n, g]) =>
                                                        e.jsxs(
                                                            "button",
                                                            {
                                                                className: _.days === n ? "selected" : "",
                                                                onClick: () => K((y) => ({ ...y, days: n })),
                                                                children: [
                                                                    e.jsx("span", { children: g }),
                                                                    e.jsx("small", {
                                                                        children:
                                                                            n === 1
                                                                                ? "只安排今天剩余时间"
                                                                                : `从今天起 ${n} 天`,
                                                                    }),
                                                                ],
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        e.jsxs("section", {
                                            children: [
                                                e.jsx("b", { children: "日程密度" }),
                                                e.jsx("div", {
                                                    className: "schedule-choice-grid density",
                                                    children: Object.entries(Ne).map(([n, g]) =>
                                                        e.jsxs(
                                                            "button",
                                                            {
                                                                className: _.density === n ? "selected" : "",
                                                                onClick: () =>
                                                                    K((y) => ({ ...y, density: n })),
                                                                children: [
                                                                    e.jsx("span", { children: g.label }),
                                                                    e.jsx("small", { children: g.note }),
                                                                ],
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        e.jsx("p", {
                                            children:
                                                "“自然”每天约 3–4 项，但仍会根据角色作息和已有安排留白，不机械填满。",
                                        }),
                                        e.jsx("button", {
                                            className: "schedule-generate-button",
                                            onClick: us,
                                            children: "生成候选",
                                        }),
                                    ],
                                }),
                            w === "review" &&
                                O &&
                                e.jsxs("div", {
                                    className: "schedule-refresh-loading",
                                    children: [
                                        e.jsx("i", {}),
                                        e.jsx("span", { children: "正在读人设、短期与长期记忆…" }),
                                    ],
                                }),
                            w === "review" &&
                                !O &&
                                q &&
                                e.jsxs("div", {
                                    className: "schedule-refresh-empty",
                                    children: [q, e.jsx("button", { onClick: us, children: "再试一次" })],
                                }),
                            w === "review" &&
                                !O &&
                                B.length > 0 &&
                                e.jsx("div", {
                                    className: "schedule-candidates",
                                    children: B.map((n) =>
                                        e.jsxs(
                                            "button",
                                            {
                                                className: n.selected ? "selected" : "",
                                                onClick: () =>
                                                    j((g) =>
                                                        g.map((y) =>
                                                            y.id === n.id
                                                                ? { ...y, selected: !y.selected }
                                                                : y,
                                                        ),
                                                    ),
                                                children: [
                                                    e.jsx("span", {
                                                        className: "schedule-candidate-check",
                                                        children: n.selected
                                                            ? e.jsx(Ge, { size: 14, weight: "bold" })
                                                            : null,
                                                    }),
                                                    e.jsxs("span", {
                                                        children: [
                                                            e.jsx("b", { children: n.title }),
                                                            e.jsxs("time", {
                                                                children: [
                                                                    Number(n.date.slice(5, 7)),
                                                                    " 月 ",
                                                                    Number(n.date.slice(8, 10)),
                                                                    " 日 · ",
                                                                    n.startTime,
                                                                    "–",
                                                                    n.endTime,
                                                                    " · ",
                                                                    te(n.kind),
                                                                ],
                                                            }),
                                                            e.jsxs("small", {
                                                                children: [
                                                                    n.note ? `「${n.note}」　` : "",
                                                                    n.reason,
                                                                ],
                                                            }),
                                                            n.reachWant
                                                                ? e.jsxs("small", {
                                                                      className: "schedule-candidate-reach",
                                                                      children: [
                                                                          "完了想找你",
                                                                          n.reachNote
                                                                              ? `：${n.reachNote}`
                                                                              : "",
                                                                      ],
                                                                  })
                                                                : null,
                                                        ],
                                                    }),
                                                ],
                                            },
                                            n.id,
                                        ),
                                    ),
                                }),
                            w === "review" &&
                                !O &&
                                B.length > 0 &&
                                e.jsx("p", { children: "取消勾选可保留这段空白；刷新不会覆盖已有日程。" }),
                        ],
                    }),
                }),
            m &&
                e.jsx("div", {
                    className: "schedule-modal",
                    onClick: (n) => {
                        n.target === n.currentTarget && G(null);
                    },
                    children: e.jsxs("section", {
                        className: "schedule-sheet detail",
                        children: [
                            e.jsx("i", { className: "schedule-grab" }),
                            e.jsxs("header", {
                                children: [
                                    e.jsx("button", { onClick: () => G(null), children: "完成" }),
                                    e.jsx("b", { children: "日程详情" }),
                                    e.jsx("span", {}),
                                ],
                            }),
                            e.jsx("div", {
                                className: "schedule-detail-icon",
                                children:
                                    m.source === "schedule"
                                        ? e.jsx(Js, { size: 26 })
                                        : m.source === "thread"
                                          ? e.jsx(It, { size: 26 })
                                          : e.jsx(Ge, { size: 26 }),
                            }),
                            e.jsx("h2", { children: m.title }),
                            e.jsx("p", {
                                children:
                                    m.summary ||
                                    m.note ||
                                    (m.source === "thread"
                                        ? "这条安排来自现有记忆中的“悬着”，日程不会擅自修改它。"
                                        : m.source === "memory"
                                          ? "这一天来自已保存的纪念日。"
                                          : "这是独立的普通日程，不会自动写入长期记忆。"),
                            }),
                            e.jsxs("div", {
                                className: "schedule-detail-meta",
                                children: [
                                    e.jsx("span", { children: "时间" }),
                                    e.jsx("b", { children: be(m, x) }),
                                    m.place
                                        ? e.jsxs(e.Fragment, {
                                              children: [
                                                  e.jsx("span", { children: "地点" }),
                                                  e.jsx("b", {
                                                      children:
                                                          m.kind === "travel" ? `→ ${m.place}` : m.place,
                                                  }),
                                              ],
                                          })
                                        : null,
                                    e.jsx("span", { children: "类别" }),
                                    e.jsx("b", {
                                        children: m.about === "user" ? `${te(m.kind)} · 关于她` : te(m.kind),
                                    }),
                                    e.jsx("span", { children: "来源" }),
                                    e.jsx("b", {
                                        children:
                                            m.source === "schedule"
                                                ? m.sourceOriginal === "generated"
                                                    ? "根据记忆推测"
                                                    : "普通日程"
                                                : m.source === "thread"
                                                  ? "Memory · 已确认约定"
                                                  : "Memory · MOMENTS",
                                    }),
                                ],
                            }),
                            m.note
                                ? e.jsxs("div", {
                                      className: "schedule-detail-note",
                                      children: ["他给自己写的：", m.note],
                                  })
                                : null,
                            m.generationReason
                                ? e.jsxs("div", {
                                      className: "schedule-detail-note reason",
                                      children: ["为什么是这一条：", m.generationReason],
                                  })
                                : null,
                            (Ns = m.memoryRefs) != null && Ns.length
                                ? e.jsxs("div", {
                                      className: "schedule-detail-note refs",
                                      children: ["依据记忆 ", m.memoryRefs.join(" / ")],
                                  })
                                : null,
                            m.source === "schedule" &&
                                e.jsxs("div", {
                                    className: "schedule-detail-reach",
                                    children: [
                                        e.jsxs("label", {
                                            children: [
                                                e.jsxs("span", {
                                                    children: [
                                                        e.jsx("b", { children: "完了之后他会想找你" }),
                                                        e.jsx("small", {
                                                            children:
                                                                (ys = m.reachOut) != null && ys.want
                                                                    ? `${Oe[m.reachOut.when] || "结束之后"}${m.reachOut.note ? ` · 他写的是「${m.reachOut.note}」` : ""}`
                                                                    : "现在这一条不会让他想起开口",
                                                        }),
                                                    ],
                                                }),
                                                e.jsx("input", {
                                                    type: "checkbox",
                                                    checked: !!((vs = m.reachOut) != null && vs.want),
                                                    onChange: (n) => {
                                                        var g, y;
                                                        return _e(m, {
                                                            reachOut: n.target.checked
                                                                ? {
                                                                      want: !0,
                                                                      when:
                                                                          ((g = m.reachOut) == null
                                                                              ? void 0
                                                                              : g.when) || "after",
                                                                      offsetMin: 0,
                                                                      note:
                                                                          ((y = m.reachOut) == null
                                                                              ? void 0
                                                                              : y.note) || "",
                                                                  }
                                                                : null,
                                                        });
                                                    },
                                                }),
                                            ],
                                        }),
                                        ((ws = m.reachOut) == null ? void 0 : ws.want) &&
                                            e.jsx("div", {
                                                className: "schedule-reach-when",
                                                children: Object.entries(Oe).map(([n, g]) =>
                                                    e.jsx(
                                                        "button",
                                                        {
                                                            className: m.reachOut.when === n ? "on" : "",
                                                            onClick: () =>
                                                                _e(m, {
                                                                    reachOut: { ...m.reachOut, when: n },
                                                                }),
                                                            children: g,
                                                        },
                                                        n,
                                                    ),
                                                ),
                                            }),
                                        ((ks = m.reachOut) == null ? void 0 : ks.want) &&
                                            e.jsx("input", {
                                                value: m.reachOut.note || "",
                                                maxLength: 30,
                                                placeholder: "他给自己留的那一句",
                                                onChange: (n) =>
                                                    _e(m, {
                                                        reachOut: {
                                                            ...m.reachOut,
                                                            note: n.target.value.slice(0, 30),
                                                        },
                                                    }),
                                            }),
                                    ],
                                }),
                            m.source === "schedule" &&
                                e.jsxs("div", {
                                    className: "schedule-detail-actions",
                                    children: [
                                        m.status !== "completed" &&
                                            e.jsx("button", {
                                                onClick: () => Le(m, "completed"),
                                                children: "标记完成",
                                            }),
                                        m.status !== "skipped" &&
                                            e.jsx("button", {
                                                onClick: () => Le(m, "skipped"),
                                                children: "跳过",
                                            }),
                                        (m.status === "completed" || m.status === "skipped") &&
                                            e.jsx("button", {
                                                onClick: () => Le(m, "active"),
                                                children: "恢复安排",
                                            }),
                                        e.jsx("button", {
                                            className: "schedule-delete",
                                            onClick: () => pt(m),
                                            children: "删除日程",
                                        }),
                                    ],
                                }),
                            m.source === "schedule" &&
                                e.jsx("button", {
                                    className: "sch-detail-recap",
                                    onClick: () => {
                                        (ae(m), G(null));
                                    },
                                    children:
                                        ($s = m.recap) != null && $s.text
                                            ? "改一句实际发生了什么"
                                            : "补一句实际发生了什么",
                                }),
                            ((Ds = m.recap) == null ? void 0 : Ds.text) &&
                                e.jsxs("div", {
                                    className: "schedule-detail-note",
                                    children: ["实际上：", m.recap.text],
                                }),
                        ],
                    }),
                }),
            X && e.jsx($n, { state: h, char: l, event: X, onClose: () => ae(null), onSave: ft }),
            v && e.jsx(Dn, { state: h, char: l, day: v, onClose: () => I(""), onSave: bt }),
        ],
    });
}
export { sa as default };
