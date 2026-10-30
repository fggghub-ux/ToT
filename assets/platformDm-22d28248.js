import { r as k, j as e, R as es } from "./vendor-react-3a46a5d3.js";
import {
    u as ss,
    a as Ye,
    b5 as ns,
    c7 as ke,
    c8 as ts,
    dH as as,
    c9 as ve,
    eH as we,
    b9 as ls,
    ca as is,
    aq as rs,
    ar as cs,
    l as os,
    cb as ds,
    cc as us,
    cd as ms,
    ce as hs,
    bh as xs,
    f as bs,
    fz as Ce,
    es as le,
    dB as ie,
    fA as re,
    dy as ps,
    dz as js,
} from "./app-2c902988.js";
import {
    cy as Se,
    aJ as Ae,
    bz as Re,
    bE as W,
    dJ as gs,
    cM as ys,
    cN as $s,
    f as Ns,
    cP as fs,
    bH as ks,
    bx as vs,
    cR as ce,
    bo as ws,
    cS as ze,
    cT as De,
    cU as Le,
} from "./vendor-icons-e63d3118.js";
import {
    u as Cs,
    e as qe,
    I as Me,
    D as Ss,
    a as As,
    b as Te,
    c as Rs,
    d as zs,
    f as Ds,
} from "./AltKnown-a1a03d3e.js";
const Ee = rs(cs, "私信"),
    Ke = {
        tube: { title: "私信", place: "Litot Tube" },
        insta: { title: "私信", place: "Litot Social" },
        x: { title: "私信", place: "X" },
    },
    Fe = 5 * 6e4,
    _e = 60 * 6e4,
    He = (t) => String(t).padStart(2, "0");
function Be(t, a = Date.now()) {
    const r = new Date(t),
        o = new Date(a),
        b = (s) => new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime(),
        d = Math.round((b(o) - b(r)) / 864e5),
        m = `${He(r.getHours())}:${He(r.getMinutes())}`;
    return d === 0
        ? `今天 ${m}`
        : d === 1
          ? `昨天 ${m}`
          : `${r.getFullYear() !== o.getFullYear() ? `${r.getFullYear()}年` : ""}${r.getMonth() + 1}月${r.getDate()}日 ${m}`;
}
function J({ src: t, name: a, size: r, className: o = "" }) {
    return e.jsx("span", {
        className: `dm-av ${o}`,
        style: r ? { width: r, height: r, fontSize: Math.round(r * 0.4) } : void 0,
        children: t ? e.jsx(os, { src: t, alt: "" }) : String(a || "?").slice(0, 1),
    });
}
function Ls({
    m: t,
    right: a,
    first: r,
    last: o,
    avatar: b,
    name: d,
    selecting: m,
    selected: s,
    onTap: c,
    onReply: p,
    onLong: i,
    pressed: l,
}) {
    const C = Rs(p),
        u = zs(i);
    return e.jsxs("div", {
        className: `dm-row ${a ? "me" : ""} ${r ? "first" : ""} ${o ? "last" : ""} ${m ? "selecting" : ""} ${t.react ? "reacted" : ""}`,
        onClick: m ? c : void 0,
        children: [
            m &&
                e.jsx("span", {
                    className: `dm-check ${s ? "on" : ""}`,
                    "aria-hidden": !0,
                    children: s ? e.jsx(ws, { size: 12, weight: "bold" }) : null,
                }),
            !a &&
                (o
                    ? e.jsx(J, { src: b, name: d, className: "sm" })
                    : e.jsx("span", { className: "dm-av-gap" })),
            e.jsxs("div", {
                className: "dm-col",
                children: [
                    t.replyTo &&
                        e.jsx("div", {
                            className: `dm-quote ${t.replyTo.role === "user" ? "mine" : ""}`,
                            children: t.replyTo.preview,
                        }),
                    t.shared &&
                        e.jsxs("div", {
                            className: "dm-share",
                            children: [
                                e.jsx("small", { children: t.shared.where || "评论" }),
                                e.jsx("b", { children: t.shared.name || "你" }),
                                e.jsx("p", { children: t.shared.text }),
                            ],
                        }),
                    e.jsx("button", {
                        className: `dm-bubble btn-plain${l ? " is-pressed" : ""}`,
                        ...(m ? {} : { ...C.handlers, ...u }),
                        style: C.dx ? { transform: `translateX(${C.dx}px)` } : void 0,
                        children: t.preview,
                    }),
                    e.jsx(qe, { value: t.react, mine: a }),
                ],
            }),
        ],
    });
}
function Gs({
    charId: t,
    platform: a = "tube",
    onClose: r,
    avatarOf: o,
    nameOf: b,
    handleOf: d,
    onProfile: m,
    mirror: s = !1,
    mirrorName: c = "",
    mirrorAvatar: p = null,
}) {
    var Ne;
    const { state: i, dmAppend: l, dmRemove: C, dmClear: u, dmPatch: A, dmRemoveMany: R } = ss(),
        w = Ye(),
        v = ns(),
        [$, U] = k.useState(""),
        _ = k.useRef(null),
        de = k.useRef(null),
        ue = k.useRef(null),
        me = k.useRef(null),
        [H, Z] = k.useState(null),
        [f, he] = k.useState(null),
        [Je, xe] = k.useState(!1),
        [be, ee] = k.useState(null),
        [pe, je] = k.useState(null),
        [ge, B] = k.useState(null),
        j = Cs(),
        g = a === "tube",
        T = i.characters.find((n) => n.id === t),
        L = k.useMemo(() => (T ? ke(i, t, a) : []), [i.dm, t, a, T]),
        I = ts(),
        E =
            ((Ne = I == null ? void 0 : I.typingIn) == null
                ? void 0
                : Ne.call(I, a === "insta" ? "insta_dm" : "tube_dm", t)) ?? null,
        K = Ke[a] || Ke.tube;
    if (
        (k.useEffect(() => {
            const n = de.current;
            n && (n.scrollTop = n.scrollHeight);
        }, [L.length, v.busy]),
        !T)
    )
        return e.jsxs("div", {
            className: `dm-page ${g ? "is-yt" : "is-ig"}`,
            children: [
                e.jsxs("header", {
                    className: "dm-bar",
                    children: [
                        e.jsx("button", {
                            className: "dm-icon",
                            onClick: r,
                            "aria-label": "返回",
                            children: g ? e.jsx(Se, { size: 22 }) : e.jsx(Ae, { size: 24 }),
                        }),
                        e.jsx("span", { children: K.title }),
                    ],
                }),
                e.jsx("div", { className: "dm-empty", children: "这个人不在了" }),
            ],
        });
    const S = s ? c || "对方" : (b == null ? void 0 : b(t)) || as(T),
        P = s ? p : (o == null ? void 0 : o(t)) || T.avatar || null,
        X = s ? "" : d ? d(t) : "",
        F = (n) => (s ? n.role === "assistant" : n.role === "user"),
        ye = (n) => {
            const h = { id: bs("dm_"), createdAt: Date.now(), ...n };
            return (l(a, t, h), h);
        },
        O = Ee.usableLane(i.api.chat),
        se = async (n = [], h = {}) => {
            if (!(O != null && O.baseUrl)) {
                w("先在 API 设置里配好聊天通道", "error");
                return;
            }
            const y = h.base || ke(i, t, a, 40),
                x = await v.run(async (M) => {
                    const Y = [...y.slice(-40), ...n],
                        Ze = await Ee.chat(O, ds(us(i, T, a), Y, { platform: a, reroll: h.reroll || null }), {
                            signal: M,
                        }),
                        fe = ms(hs(Ze.content), Y);
                    if (!fe) throw new Error("回复格式不合格，已丢弃；不会为修格式二次调用");
                    return { rows: fe, tail: Y };
                });
            if (x != null && x.aborted) {
                w("已停止");
                return;
            }
            if (x != null && x.skipped) return;
            if (x != null && x.error) {
                w(x.error.message, "error");
                return;
            }
            const { rows: z, tail: ae } = x.value,
                Q = [...ae].reverse().find((M) => M.role === "user");
            (z.react && Q && A(a, t, Q.id, { react: z.react, reactBy: "char" }),
                z.forEach((M, Y) => {
                    setTimeout(
                        () =>
                            ye({
                                role: "assistant",
                                content: M.text,
                                ...(M.replyTo ? { replyTo: M.replyTo } : null),
                            }),
                        Y * 60,
                    );
                }));
        },
        V = () => {
            const n = $.trim();
            if (!n) return null;
            const h = ye({ role: "user", content: n, ...(H ? { replyTo: H } : null) });
            return (U(""), Z(null), { ...h, preview: n });
        },
        Ue = () => {
            if (v.busy) {
                v.stop();
                return;
            }
            const n = V();
            se(n ? [n] : []);
        },
        $e = (n) => {
            (Z({ id: n.id, role: n.role, preview: String(n.preview || "").slice(0, 120) }),
                requestAnimationFrame(() => xs(ue)));
        },
        Xe = (n, h) => {
            const y = Ds(L, n.id);
            if (y.start < 0) return;
            const x = L.slice(0, y.start);
            (R(a, t, y.ids), se([], { base: x, reroll: { reason: h, discarded: y.discarded } }));
        },
        ne = j.on ? [...j.ids].reduce((n, h) => n + ve(i.characters, a, h), 0) : 0,
        te = (n) => {
            const h = j.count;
            (j.ids.forEach((y) => C(a, t, y, { removeDerived: n })),
                j.stop(),
                w(`已删除 ${h} 条${n ? "，关联记忆一起清掉了" : ""}`));
        },
        Oe = (n) => {
            var h;
            try {
                ((h = navigator.clipboard) == null || h.writeText(n), w("已复制"));
            } catch {
                w("复制失败", "error");
            }
        },
        Ve = L.map((n, h) => {
            const y = L[h - 1],
                x = L[h + 1],
                z = !y || n.createdAt - y.createdAt > _e,
                ae = y && !z && y.role === n.role && n.createdAt - y.createdAt < Fe && !n.replyTo,
                Q =
                    x &&
                    x.role === n.role &&
                    x.createdAt - n.createdAt < Fe &&
                    !x.replyTo &&
                    !(x.createdAt - n.createdAt > _e);
            return { m: n, divider: z, first: !ae, last: !Q };
        }),
        G = g
            ? {
                  reply: e.jsx(ze, { size: 22 }),
                  copy: e.jsx(De, { size: 22 }),
                  reroll: e.jsx(Le, { size: 22 }),
                  multi: e.jsx(ce, { size: 22 }),
                  del: e.jsx(W, { size: 22 }),
              }
            : {
                  reply: e.jsx(ze, { size: 20 }),
                  copy: e.jsx(De, { size: 20 }),
                  reroll: e.jsx(Le, { size: 20 }),
                  multi: e.jsx(ce, { size: 20 }),
                  del: e.jsx(W, { size: 20 }),
              },
        Qe = (n) => [
            { key: "reply", label: "回复", icon: G.reply, onClick: () => $e(n) },
            { key: "copy", label: "复制", icon: G.copy, onClick: () => Oe(n.preview) },
            ...(n.role === "assistant"
                ? [{ key: "reroll", label: "重回", icon: G.reroll, onClick: () => je(n) }]
                : []),
            { key: "multi", label: "多选", icon: G.multi, onClick: () => j.start(n.id) },
            { key: "delete", label: "删除", icon: G.del, danger: !0 },
        ],
        We = (E ?? $).trim();
    return e.jsxs("div", {
        className: `dm-page ${g ? "is-yt" : "is-ig"}`,
        ref: _,
        children: [
            j.on
                ? e.jsx("header", {
                      className: "dm-bar dm-selhead",
                      children: g
                          ? e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx("button", {
                                        className: "dm-icon",
                                        onClick: j.stop,
                                        "aria-label": "取消",
                                        children: e.jsx(Re, { size: 22 }),
                                    }),
                                    e.jsxs("b", {
                                        className: "dm-seltitle",
                                        children: ["已选择 ", j.count, " 项"],
                                    }),
                                    e.jsx("button", {
                                        className: "dm-icon",
                                        disabled: !j.count,
                                        onClick: () => B("bulk"),
                                        "aria-label": "删除",
                                        children: e.jsx(W, { size: 22 }),
                                    }),
                                ],
                            })
                          : e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx("button", {
                                        className: "dm-textbtn btn-plain",
                                        onClick: j.stop,
                                        children: "取消",
                                    }),
                                    e.jsxs("b", {
                                        className: "dm-seltitle",
                                        children: ["已选择 ", j.count, " 条"],
                                    }),
                                    e.jsx("span", { className: "dm-textbtn" }),
                                ],
                            }),
                  })
                : e.jsxs("header", {
                      className: "dm-bar",
                      children: [
                          e.jsx("button", {
                              className: "dm-icon",
                              onClick: r,
                              "aria-label": "返回",
                              children: g ? e.jsx(Se, { size: 22 }) : e.jsx(Ae, { size: 24, weight: "bold" }),
                          }),
                          e.jsxs("button", {
                              className: "dm-who btn-plain",
                              onClick: () => !s && (m == null ? void 0 : m(t)),
                              children: [
                                  e.jsx(J, { src: P, name: S }),
                                  e.jsxs("span", {
                                      children: [
                                          e.jsx("span", { className: "dm-name", children: S }),
                                          e.jsx("span", {
                                              className: "dm-sub",
                                              children: X ? `@${X}` : K.place,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          !s &&
                              (g
                                  ? e.jsx("button", {
                                        className: "dm-icon",
                                        ref: me,
                                        onClick: () => xe(!0),
                                        "aria-label": "更多",
                                        children: e.jsx(gs, { size: 22, weight: "bold" }),
                                    })
                                  : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx("button", {
                                                className: "dm-icon",
                                                onClick: () => ee("voice"),
                                                "aria-label": "语音通话",
                                                children: e.jsx(ys, { size: 23 }),
                                            }),
                                            e.jsx("button", {
                                                className: "dm-icon",
                                                onClick: () => ee("video"),
                                                "aria-label": "视频通话",
                                                children: e.jsx($s, { size: 25 }),
                                            }),
                                        ],
                                    })),
                      ],
                  }),
            e.jsxs("div", {
                className: "dm-list",
                ref: de,
                children: [
                    e.jsxs("div", {
                        className: "dm-intro",
                        children: [
                            e.jsx(J, { src: P, name: S, size: g ? 72 : 88 }),
                            e.jsx("b", { children: S }),
                            e.jsxs("span", { children: [X ? `@${X} · ` : "", K.place] }),
                            !s &&
                                m &&
                                e.jsx("button", {
                                    className: "btn-plain dm-intro-btn",
                                    onClick: () => m(t),
                                    children: g ? "查看频道" : "查看主页",
                                }),
                        ],
                    }),
                    L.length === 0 &&
                        e.jsx("div", {
                            className: "dm-empty",
                            children: e.jsx("span", {
                                children: s
                                    ? `这是 ${K.place} 上他和你的私信，现在是空的。`
                                    : `${K.place} 的私信和你们平时的聊天是分开的两段对话，两边都会进入记忆。`,
                            }),
                        }),
                    Ve.map(({ m: n, divider: h, first: y, last: x }) =>
                        e.jsxs(
                            es.Fragment,
                            {
                                children: [
                                    h && e.jsx("div", { className: "dm-time", children: Be(n.createdAt) }),
                                    s
                                        ? e.jsxs("div", {
                                              className: `dm-row ${F(n) ? "me" : ""} ${y ? "first" : ""} ${x ? "last" : ""}`,
                                              children: [
                                                  !F(n) &&
                                                      (x
                                                          ? e.jsx(J, { src: P, name: S, className: "sm" })
                                                          : e.jsx("span", { className: "dm-av-gap" })),
                                                  e.jsxs("div", {
                                                      className: "dm-col",
                                                      children: [
                                                          n.replyTo &&
                                                              e.jsx("div", {
                                                                  className: "dm-quote",
                                                                  children: n.replyTo.preview,
                                                              }),
                                                          e.jsx("span", {
                                                              className: "dm-bubble selectable",
                                                              children: n.preview,
                                                          }),
                                                          e.jsx(qe, { value: n.react, mine: F(n) }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : e.jsx(Ls, {
                                              m: n,
                                              right: F(n),
                                              first: y,
                                              last: x,
                                              avatar: P,
                                              name: S,
                                              selecting: j.on,
                                              selected: j.has(n.id),
                                              pressed: (f == null ? void 0 : f.m.id) === n.id,
                                              onTap: () => j.toggle(n.id),
                                              onReply: () => $e(n),
                                              onLong: (z) => he({ m: n, el: z }),
                                          }),
                                ],
                            },
                            n.id,
                        ),
                    ),
                    !s &&
                        v.busy &&
                        e.jsxs("div", {
                            className: "dm-row first last",
                            children: [
                                e.jsx(J, { src: P, name: S, className: "sm" }),
                                e.jsxs("span", {
                                    className: "dm-bubble dm-typing",
                                    "aria-label": "对方正在输入",
                                    children: [e.jsx("i", {}), e.jsx("i", {}), e.jsx("i", {})],
                                }),
                            ],
                        }),
                ],
            }),
            !s &&
                H &&
                !j.on &&
                e.jsxs("div", {
                    className: "dm-replying",
                    children: [
                        e.jsxs("div", {
                            children: [
                                e.jsxs("span", { children: ["回复", H.role === "user" ? "自己" : ` ${S}`] }),
                                e.jsx("p", { children: H.preview }),
                            ],
                        }),
                        e.jsx("button", {
                            className: "btn-plain",
                            onClick: () => Z(null),
                            "aria-label": "取消引用",
                            children: e.jsx(Re, { size: 14, weight: "bold" }),
                        }),
                    ],
                }),
            s
                ? e.jsx("div", {
                      className: "dm-compose readonly",
                      children: "这是他那一侧 · 只能看，不能发",
                  })
                : j.on
                  ? !g &&
                    e.jsx("div", {
                        className: "dm-selbar",
                        children: e.jsxs("button", {
                            className: "btn-plain",
                            disabled: !j.count,
                            onClick: () => B("bulk"),
                            children: ["删除", j.count ? `（${j.count}）` : ""],
                        }),
                    })
                  : e.jsxs("div", {
                        className: "dm-compose",
                        children: [
                            e.jsxs("label", {
                                className: "dm-field",
                                children: [
                                    !g &&
                                        e.jsx("button", {
                                            className: "btn-plain dm-cam",
                                            onClick: () => w("私信里暂时只能发文字"),
                                            "aria-label": "相机",
                                            children: e.jsx(Ns, { size: 19, weight: "fill" }),
                                        }),
                                    e.jsx("input", {
                                        ref: ue,
                                        value: E ?? $,
                                        onChange: (n) => U(n.target.value),
                                        readOnly: E != null,
                                        className: E != null ? "ghost-typing" : void 0,
                                        onKeyDown: (n) => {
                                            var h;
                                            n.key === "Enter" &&
                                                !((h = n.nativeEvent) != null && h.isComposing) &&
                                                V();
                                        },
                                        placeholder: v.busy ? "对方正在输入…" : "发消息…",
                                        enterKeyHint: "send",
                                    }),
                                    We
                                        ? g
                                            ? e.jsx("button", {
                                                  className: "btn-plain dm-send-ic",
                                                  onClick: V,
                                                  "aria-label": "发送",
                                                  children: e.jsx(fs, { size: 20, weight: "fill" }),
                                              })
                                            : e.jsx("button", {
                                                  className: "btn-plain dm-send-tx",
                                                  onClick: V,
                                                  children: "发送",
                                              })
                                        : !g &&
                                          e.jsxs("span", {
                                              className: "dm-tools",
                                              "aria-hidden": !0,
                                              children: [e.jsx(ks, { size: 22 }), e.jsx(vs, { size: 22 })],
                                          }),
                                ],
                            }),
                            e.jsx("button", {
                                className: `btn-plain dm-reply ${v.busy ? "is-busy" : ""}`,
                                onClick: Ue,
                                "aria-label": v.busy ? "停止生成" : `让 ${S} 回复`,
                                children: v.busy
                                    ? e.jsx(we, { size: g ? 24 : 26 })
                                    : e.jsx(Me, { size: g ? 24 : 26 }),
                            }),
                        ],
                    }),
            f &&
                e.jsx(Ss, {
                    theme: g ? "yt" : "ig",
                    anchor: f.el,
                    page: _.current,
                    mine: F(f.m),
                    text: f.m.preview,
                    time: Be(f.m.createdAt),
                    items: Qe(f.m),
                    react: f.m.reactBy === "char" ? "" : f.m.react,
                    onReact: (n) =>
                        A(a, t, f.m.id, n ? { react: n, reactBy: "me" } : { react: "", reactBy: "" }),
                    rowClass: `dm-row ${F(f.m) ? "me" : ""}`,
                    bubbleClass: "dm-bubble",
                    refs: ve(i.characters, a, f.m.id),
                    onDelete: (n) => {
                        (C(a, t, f.m.id, { removeDerived: n }),
                            w(n ? "已删除，关联记忆一起清掉了" : "已删除"));
                    },
                    onClose: () => he(null),
                }),
            Je &&
                e.jsx(As, {
                    theme: "yt",
                    anchor: me.current,
                    page: _.current,
                    up: !1,
                    align: "right",
                    onClose: () => xe(!1),
                    items: [
                        v.busy
                            ? {
                                  key: "stop",
                                  label: "停止生成",
                                  icon: e.jsx(we, { size: 20 }),
                                  onClick: v.stop,
                              }
                            : {
                                  key: "ask",
                                  label: `让 ${S} 回复`,
                                  icon: e.jsx(Me, { size: 20 }),
                                  onClick: () => se(),
                              },
                        {
                            key: "multi",
                            label: "选择消息",
                            icon: e.jsx(ce, { size: 20 }),
                            onClick: () => j.start(),
                        },
                        {
                            key: "clear",
                            label: "清空这段私信",
                            icon: e.jsx(W, { size: 20 }),
                            danger: !0,
                            onClick: () => B("clear"),
                        },
                    ],
                }),
            e.jsx(Te, {
                open: ge === "bulk",
                onClose: () => B(null),
                title: `删除 ${j.count} 条消息？`,
                message: ne ? `这些消息已生成 ${ne} 条记忆。` : "删除后无法恢复。",
                actions: ne
                    ? [
                          { label: "只删除消息", danger: !0, onClick: () => te(!1) },
                          { label: "删除消息和记忆", danger: !0, onClick: () => te(!0) },
                      ]
                    : [{ label: "删除", danger: !0, onClick: () => te(!1) }],
            }),
            e.jsx(Te, {
                open: ge === "clear",
                onClose: () => B(null),
                title: "清空这段私信？",
                message: "已经生成的记忆会保留。",
                actions: [
                    {
                        label: "清空",
                        danger: !0,
                        onClick: () => {
                            (u(a, t), w("已清空"));
                        },
                    },
                ],
            }),
            e.jsx(ls, {
                open: !!be,
                onClose: () => ee(null),
                title: be === "video" ? "视频通话" : "语音通话",
                message: `${K.place} 上的通话没有单独接入；和 ${S} 的通话请在你们的聊天里拨打。`,
                confirm: { label: "好", onClick: () => {} },
            }),
            e.jsx(is, {
                open: !!pe,
                onClose: () => je(null),
                title: "重回",
                multiline: !0,
                allowEmpty: !0,
                maxLength: 200,
                placeholder: "想让他怎么改（可以不填）",
                note: "他这一轮说的会撤回，按你的要求重新回复。",
                confirmLabel: "重新生成",
                onSave: (n) => Xe(pe, n),
            }),
        ],
    });
}
const Ie = {
        insta: {
            what: "主页",
            nameLabel: "昵称",
            handleLabel: "Insta ID",
            bioKey: "bio",
            bioLabel: "个人简介",
            bioMax: 100,
            bioHint: "陌生人也看得到的那几行",
            countKey: "followers",
            countLabel: "粉丝数",
            extraKey: null,
        },
        youtube: {
            what: "频道",
            nameLabel: "频道名",
            handleLabel: "频道 @ID",
            bioKey: "about",
            bioLabel: "频道简介",
            bioMax: 200,
            bioHint: "进主页才看得到的那段",
            countKey: "subscribers",
            countLabel: "订阅数",
            extraKey: "tagline",
            extraLabel: "横幅下那一句",
            extraMax: 40,
            extraHint: "比简介更短，可以留空",
        },
    },
    Ms = (t, a) => String((t === "insta" ? (a.username ?? a.handle) : a.handle) || "").replace(/^@/, ""),
    Ts = (t, a) => (t === "insta" ? { username: a } : { handle: a }),
    Es = /^[a-z0-9._]{3,30}$/;
function Ys({
    open: t,
    onClose: a,
    platform: r = "insta",
    data: o = {},
    isMe: b = !1,
    isAlt: d = !1,
    title: m = "",
    avatarNode: s = null,
    onPickAvatar: c,
    onPickBanner: p,
    onSave: i,
}) {
    const l = Ie[r] || Ie.insta,
        C = Ye(),
        [u, A] = k.useState(null);
    if (
        (k.useEffect(() => {
            if (!t) {
                A(null);
                return;
            }
            A({
                nickname: String(o.nickname || ""),
                handle: Ms(r, o),
                bio: String(o[l.bioKey] || ""),
                count: o[l.countKey] == null ? "" : String(o[l.countKey]),
                extra: l.extraKey ? String(o[l.extraKey] || "") : "",
                direction: String(o.direction || ""),
            });
        }, [t]),
        !u)
    )
        return e.jsx(Ce, { open: t, onClose: a, title: "编辑资料" });
    const R = ($) => (U) => A((_) => ({ ..._, [$]: U })),
        w = !u.handle || Es.test(u.handle),
        v = () => {
            if (!w) {
                C(`${l.handleLabel} 只能用 3—30 位小写字母、数字、点或下划线`, "error");
                return;
            }
            const $ = u.count.trim();
            (i == null ||
                i({
                    nickname: u.nickname.trim() || null,
                    ...Ts(r, u.handle.trim() || null),
                    [l.bioKey]: u.bio.trim() || null,
                    [l.countKey]: $ === "" ? null : Math.max(0, Math.floor(Number($) || 0)),
                    ...(l.extraKey ? { [l.extraKey]: u.extra.trim() || null } : {}),
                    direction: u.direction.trim().slice(0, re),
                }),
                C("已保存"),
                a == null || a());
        };
    return e.jsxs(Ce, {
        open: t,
        onClose: a,
        title: `编辑${l.what}资料`,
        subtitle: m ? `${d ? "小号 · " : ""}${m}` : void 0,
        footer: e.jsx("button", { className: "cmodal-primary", onClick: v, children: "保存" }),
        children: [
            (s || c) &&
                e.jsxs("div", {
                    className: "cmodal-avatar",
                    children: [
                        s,
                        e.jsxs("div", {
                            className: "cmodal-avatar-acts",
                            children: [
                                c &&
                                    e.jsx("button", {
                                        className: "cmodal-chip",
                                        onClick: c,
                                        children: "换头像",
                                    }),
                                p &&
                                    e.jsx("button", {
                                        className: "cmodal-chip",
                                        onClick: p,
                                        children: "换横幅",
                                    }),
                            ],
                        }),
                    ],
                }),
            e.jsxs("div", {
                className: "ios-list",
                style: { marginTop: 10 },
                children: [
                    e.jsx(le, {
                        label: l.nameLabel,
                        children: e.jsx(ie, {
                            value: u.nickname,
                            onChange: R("nickname"),
                            placeholder: b ? "留空 = 用「我」资料里的名字" : "留空 = 用角色名",
                        }),
                    }),
                    e.jsx(le, {
                        label: l.handleLabel,
                        children: e.jsx(ie, {
                            value: u.handle,
                            onChange: ($) =>
                                R("handle")(
                                    $.toLowerCase()
                                        .replace(/[^a-z0-9._]/g, "")
                                        .slice(0, 30),
                                ),
                            placeholder: "3—30 位小写字母 / 数字 / . / _",
                        }),
                    }),
                    e.jsx(le, {
                        label: l.countLabel,
                        children: e.jsx(ie, {
                            type: "number",
                            value: u.count,
                            onChange: R("count"),
                            placeholder: "留空 = 未设置",
                        }),
                    }),
                ],
            }),
            !w &&
                e.jsxs("div", {
                    className: "cmodal-warn",
                    children: [l.handleLabel, " 只能用 3—30 位小写字母、数字、点或下划线"],
                }),
            e.jsx("div", { className: "cmodal-label", children: l.bioLabel }),
            e.jsx("textarea", {
                className: "cmodal-area",
                rows: 3,
                value: u.bio,
                onChange: ($) => R("bio")($.target.value.slice(0, l.bioMax)),
                placeholder: l.bioHint,
            }),
            e.jsxs("div", { className: "cmodal-count", children: [u.bio.length, " / ", l.bioMax] }),
            l.extraKey &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("div", { className: "cmodal-label", children: l.extraLabel }),
                        e.jsx("textarea", {
                            className: "cmodal-area",
                            rows: 1,
                            value: u.extra,
                            onChange: ($) => R("extra")($.target.value.slice(0, l.extraMax)),
                            placeholder: l.extraHint,
                        }),
                    ],
                }),
            e.jsx("div", { className: "cmodal-label", children: "这个号的生成方向（可以不填）" }),
            e.jsx("textarea", {
                className: "cmodal-area",
                rows: 4,
                value: u.direction,
                onChange: ($) => R("direction")($.target.value.slice(0, re)),
                placeholder: "这个账号的用途与内容方向",
            }),
            e.jsxs("div", { className: "cmodal-count", children: [u.direction.length, " / ", re] }),
            e.jsxs("div", {
                className: "cmodal-hint",
                children: [
                    "只给模型看，不出现在",
                    l.what,
                    "上。写这个号",
                    e.jsx("b", { children: "写什么、以什么身份写" }),
                    "就够了 —— 人怎么说话仍然由人设管。留空就让模型自己按人设判断。",
                ],
            }),
        ],
    });
}
const D = (t, a = 200) =>
        String(t ?? "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, a),
    Pe = (t, a = 600) =>
        String(t ?? "")
            .replace(/\r/g, "")
            .trim()
            .slice(0, a),
    N = (t) => (Array.isArray(t) ? t : []),
    q = (t, a, r, o = 0) => {
        const b = Math.floor(Number(t));
        return Number.isFinite(b) ? Math.min(r, Math.max(a, b)) : o;
    },
    oe = (t) => `${t}${Math.random().toString(36).slice(2, 9)}${Date.now().toString(36).slice(-4)}`,
    Ks = { likes: [], strangers: [], refreshedAt: 0 };
function qs(t, a, r = "me") {
    var b, d;
    const o = a === "tube" || a === "youtube" ? "tube" : "insta";
    return {
        ...Ks,
        ...(((d = (b = t == null ? void 0 : t.social) == null ? void 0 : b[o]) == null ? void 0 : d[r]) ||
            {}),
    };
}
const Fs = (t) => (t === "tube" || t === "youtube" ? "tube" : "insta"),
    Ge = {
        insta: { name: "Litot Social", what: "一个公开社交平台", unit: "动态", act: "发动态" },
        tube: { name: "Litot Tube", what: "一个视频平台", unit: "视频", act: "发视频" },
    },
    _s = `你在生成一个社交账号**收到的**东西：谁点了赞、谁发来了私信。
注意方向 —— 这些都是**别人**做的，不是这个号自己做的。

谁会来，取决于**这是个什么号**：
- 号的定位（简介、它平时发什么、如果是小号还有"这个号是干嘛的"）决定了来的人是谁。
  一个发摄影的号收到的是问器材、问约拍、同行搭话；一个只发碎碎念的号收到的是
  路人共鸣和乱入。**先看这个号，再想谁会来。**
- 粉丝量决定密度：几十个粉的号一周可能就一两条私信，几万粉的号才会有陌生人扎堆。
  不要给一个刚开的小号编出一屏私信。

两个方向都要避免：
- 不要写成全是广告 / 推广 / 骚扰 —— 那样这一栏只剩噪音，看都不用看。
- 也不要写成全是夸赞和崇拜 —— 那是安慰剂，同样没有信息。
真实的私信列表是**杂的**：有正事、有闲聊、有没头没尾的一句、有你不想回的。

还有一条硬的：**陌生人只知道公开的东西。**
他们能看到的是这个号发出去的内容（下面会给），不知道任何私下发生的事。
让一个陌生人提起只有你和另一个人知道的事，整个世界立刻就垮了。
下面给的"最近真实发生过的事"是**给你对时间线用的**（他刚发过什么、
现在大概在忙什么），不是让陌生人知道的内容。

点赞那一栏：给出**谁**赞了**哪一条**。名字是路人的名字，不要都像同一个人起的。
同一条下面的点赞人不要写成一串同义词。

语气：私信比评论更随便，多数人打字很短。一条一两句，偶尔有人一次发好几句。

认识的人那一栏（只有在下面给了名单时才写，没给就留空数组）：
这些不是陌生人 —— 是这个号**本来就认识**的人，他们在这个平台上给这个号发了消息。
和陌生人完全两回事，判据也不一样：
- 他知道私下发生过什么，所以他可以提起。上面那条"陌生人只知道公开的东西"**不管他**。
- 但他为什么选**在这里**说，而不是在聊天里说？要有理由 ——
  因为他刷到了这个号刚发的东西，因为这件事只在这个平台上发生过，
  因为他现在不太想开那一边的对话框。写不出理由就别让他来。
- 他不是每次都来。名单上的人多数时候一条都不该有 —— 每次刷新所有人都来发消息，
  比一条都没有还假。

只输出一个合法 JSON 对象，不要代码围栏、不要多余字段：
{
  "likes": [{"name":"显示名","handle":"账号名","postIndex":整数（下面清单里那条的序号，从 1 开始）,"hoursAgo":整数}],
  "strangers": [{
    "name":"显示名","handle":"账号名","relation":"这人是谁 / 为什么来找，一句话，给界面看",
    "unread":整数,
    "msgs":[{"dir":"in" 或 "out","text":"内容","hoursAgo":整数}]
  }],
  "known": [{"id":"名单里给的那个 id","msgs":[{"text":"他发来的内容","hoursAgo":整数}]}]
}
dir 里 in = 对方发来的，out = 这个号回出去的。多数会话应该是对方在说、这边没回或只回一两句。
known 里的消息全是**他发来的**，所以不需要 dir。`;
function Js({
    platform: t,
    account: a,
    posts: r,
    stream: o,
    followers: b,
    nowText: d,
    existing: m = [],
    chars: s = [],
}) {
    const c = Ge[Fs(t)] || Ge.insta,
        p = (() => {
            try {
                return ps({ only: js });
            } catch {
                return "";
            }
        })(),
        i = N(r)
            .slice(0, 10)
            .map((u, A) => `${A + 1}. ${D(u, 120) || "（没有文字）"}`).join(`
`),
        l = N(m)
            .slice(0, 8)
            .map((u) => `@${u.handle}（${u.relation || "之前来过"}）`)
            .join("、"),
        C = [
            `平台：${c.name}（${c.what}）`,
            `这个号：${a.nickname || a.handle}（@${a.handle}）${a.main ? "" : " —— 这是一个小号"}`,
            a.bio ? `简介：${D(a.bio, 200)}` : "",
            a.why ? `这个号是干嘛的：${D(a.why, 160)}` : "",
            `粉丝：${b}`,
            i
                ? `它最近${c.act}（陌生人看得到的就是这些）：
${i}`
                : `它还没${c.act}过。`,
            l ? `已经来过的人（接着写他们的后续，比每次都换一批新人真实）：${l}` : "",
            N(s).length
                ? `————
认识的人（他们可能在这个平台上发消息过来，也可能这一轮谁都没发）：
${N(s).map(
    (u) =>
        `- id=${u.id} ${u.name}${u.recent ? `，最近一次说的是「${D(u.recent, 60)}」` : "，之前没在这个平台说过话"}`,
).join(`
`)}`
                : "",
            N(o).length
                ? `————
最近真实发生过的事（**只给你对时间线，陌生人不知道这些**）：
${N(o).map((u) => `- ${u}`).join(`
`)}`
                : "",
            `现在：${d}`,
        ].filter(Boolean).join(`

`);
    return [
        ...(p ? [{ role: "system", content: p }] : []),
        { role: "system", content: _s },
        { role: "user", content: C },
    ];
}
function Us(t, { postIds: a = [], charIds: r = [], now: o = Date.now() } = {}) {
    if (!t || typeof t != "object" || Array.isArray(t)) return null;
    const b = N(t.likes)
            .slice(0, 40)
            .map((s) => {
                const c = D(s == null ? void 0 : s.name, 30),
                    p = q(s == null ? void 0 : s.postIndex, 1, a.length, 0);
                return !c || !p
                    ? null
                    : {
                          id: oe("lk_"),
                          name: c,
                          handle: String((s == null ? void 0 : s.handle) || "")
                              .trim()
                              .replace(/^@/, "")
                              .slice(0, 30),
                          postId: a[p - 1],
                          at: o - q(s == null ? void 0 : s.hoursAgo, 0, 24 * 400, 4) * 36e5,
                      };
            })
            .filter(Boolean)
            .sort((s, c) => c.at - s.at),
        d = N(t.strangers)
            .slice(0, 10)
            .map((s) => {
                const c = D(s == null ? void 0 : s.name, 30),
                    p = N(s == null ? void 0 : s.msgs)
                        .slice(0, 12)
                        .map((i) => {
                            const l = Pe(i == null ? void 0 : i.text, 500);
                            return l
                                ? {
                                      id: oe("sm_"),
                                      dir: (i == null ? void 0 : i.dir) === "out" ? "out" : "in",
                                      text: l,
                                      at: o - q(i == null ? void 0 : i.hoursAgo, 0, 24 * 400, 6) * 36e5,
                                  }
                                : null;
                        })
                        .filter(Boolean)
                        .sort((i, l) => i.at - l.at);
                return !c || !p.length
                    ? null
                    : {
                          id: oe("sc_"),
                          name: c,
                          handle: String((s == null ? void 0 : s.handle) || "")
                              .trim()
                              .replace(/^@/, "")
                              .slice(0, 30),
                          relation: D(s == null ? void 0 : s.relation, 80),
                          unread: q(s == null ? void 0 : s.unread, 0, 99, 0),
                          msgs: p,
                      };
            })
            .filter(Boolean)
            .sort((s, c) => c.msgs[c.msgs.length - 1].at - s.msgs[s.msgs.length - 1].at),
        m = N(t.known)
            .slice(0, 6)
            .map((s) => {
                const c = D(s == null ? void 0 : s.id, 60),
                    p = N(s == null ? void 0 : s.msgs)
                        .slice(0, 4)
                        .map((i) => {
                            const l = Pe(i == null ? void 0 : i.text, 500);
                            return l
                                ? {
                                      text: l,
                                      at: o - q(i == null ? void 0 : i.hoursAgo, 0, 24 * 60, 3) * 36e5,
                                  }
                                : null;
                        })
                        .filter(Boolean)
                        .sort((i, l) => i.at - l.at);
                return !c || !p.length || !r.includes(c) ? null : { charId: c, msgs: p };
            })
            .filter(Boolean);
    return !b.length && !d.length && !m.length ? null : { likes: b, strangers: d, known: m, refreshedAt: o };
}
function Xs(t, a) {
    const r = new Map(N(t.strangers).map((d) => [d.handle || d.name, d]));
    for (const d of N(a.strangers)) {
        const m = d.handle || d.name,
            s = r.get(m);
        if (!s) {
            r.set(m, d);
            continue;
        }
        const c = new Set(N(s.msgs).map((p) => p.text));
        r.set(m, {
            ...s,
            relation: d.relation || s.relation,
            unread: d.unread,
            msgs: [...s.msgs, ...d.msgs.filter((p) => !c.has(p.text))].slice(-40),
        });
    }
    const o = [...r.values()]
        .sort((d, m) => {
            var s, c;
            return (
                (((s = m.msgs[m.msgs.length - 1]) == null ? void 0 : s.at) || 0) -
                (((c = d.msgs[d.msgs.length - 1]) == null ? void 0 : c.at) || 0)
            );
        })
        .slice(0, 20);
    return {
        likes: [...N(a.likes), ...N(t.likes)]
            .filter((d, m, s) => s.findIndex((c) => c.id === d.id) === m)
            .slice(0, 120),
        strangers: o,
        refreshedAt: a.refreshedAt,
    };
}
export { Gs as D, Ys as S, Js as b, Xs as m, qs as s, Us as v };
