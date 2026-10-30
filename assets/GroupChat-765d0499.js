import { r as S, j as e, R as Ze } from "./vendor-react-3a46a5d3.js";
import {
    bj as Re,
    l as De,
    dA as le,
    u as ft,
    kL as Qe,
    kM as we,
    dx as xt,
    cp as Ct,
    kN as St,
    dG as re,
    kO as G,
    kP as oe,
    kQ as Ee,
    cV as At,
    kR as pe,
    bi as jt,
    kS as _t,
    kT as Ke,
    kU as We,
    b9 as It,
    dj as Mt,
    kV as R,
    kW as Oe,
    kX as bt,
    a as Tt,
    kY as Lt,
    kZ as $e,
    k_ as Et,
    ag as Ot,
    k$ as Dt,
    l0 as Rt,
    l1 as Gt,
    l2 as Pt,
    l3 as qt,
    f as W,
    l4 as Ye,
    l5 as Ft,
    l6 as Je,
    l7 as zt,
    l8 as Vt,
    l9 as Bt,
    la as Ut,
    A as Wt,
    lb as ct,
    ar as dt,
    au as Yt,
    dw as mt,
    aw as Jt,
    lc as Xt,
    ld as Ht,
    le as Qt,
} from "./app-2c902988.js";
import {
    bo as vt,
    bv as Kt,
    t as Zt,
    db as es,
    aw as ts,
    o as ss,
    dd as as,
    e6 as ns,
    c0 as os,
} from "./vendor-icons-e63d3118.js";
import {
    g as ls,
    n as rs,
    a as is,
    N as cs,
    T as Xe,
    c as ut,
    b as yt,
    d as ds,
    e as ms,
    l as gt,
    L as pt,
    f as us,
    h as He,
    s as gs,
    G as ps,
    R as hs,
    i as fs,
    j as xs,
    k as js,
    m as bs,
} from "./GroupMoney-d3c13e8f.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const vs = { photo: "文字图", loc: "定位", gift: "礼物", narr: "插入旁白" };
function ys({ members: i, picked: v, onToggle: d, multi: y }) {
    return e.jsxs("div", {
        className: "gp-pick",
        children: [
            i.map((h) => {
                const x = v.includes(h.id);
                return e.jsxs(
                    "button",
                    {
                        className: `btn-plain gp-chip${x ? " on" : ""}`,
                        onClick: () => d(h.id),
                        "aria-pressed": x,
                        children: [
                            e.jsxs("span", {
                                className: "gp-ava",
                                children: [
                                    h.avatar
                                        ? e.jsx(De, { src: h.avatar, alt: "" })
                                        : e.jsx("i", { children: (h.name || "·").slice(0, 1) }),
                                    x && e.jsx("b", { children: e.jsx(vt, { size: 10, weight: "bold" }) }),
                                ],
                            }),
                            e.jsx("small", { children: h.name }),
                        ],
                    },
                    h.id,
                );
            }),
            y &&
                i.length > 1 &&
                e.jsx("button", {
                    className: "btn-plain gp-all",
                    onClick: () => d("__all"),
                    children: v.length === i.length ? "全不选" : "全选",
                }),
        ],
    });
}
function ks({ kind: i, onClose: v, members: d = [], onSend: y }) {
    const [h, x] = S.useState([]),
        [j, f] = S.useState(""),
        [I, b] = S.useState(""),
        [V, se] = S.useState("");
    S.useEffect(() => {
        i && (x([]), f(""), b(""), se(""));
    }, [i]);
    const he = (M) => x((ie) => (ie[0] === M ? [] : [M]));
    let ae = null,
        K = !1,
        Q = () => {},
        ue = "发送";
    return (
        i === "photo"
            ? ((K = !!j.trim()),
              (Q = () => y({ type: "text_image", content: j.trim() })),
              (ae = e.jsx("textarea", {
                  className: "gp-input",
                  rows: 4,
                  value: j,
                  maxLength: 300,
                  onChange: (M) => f(M.target.value),
                  placeholder: "画面描述",
                  autoFocus: !0,
              })))
            : i === "loc"
              ? ((K = !!j.trim()),
                (Q = () =>
                    y({ type: "location_card", location: j.trim(), note: I.trim(), content: j.trim() })),
                (ae = e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("input", {
                            className: "gp-input",
                            value: j,
                            maxLength: 60,
                            onChange: (M) => f(M.target.value),
                            placeholder: "地点",
                            autoFocus: !0,
                        }),
                        e.jsx("input", {
                            className: "gp-input",
                            value: I,
                            maxLength: 40,
                            onChange: (M) => b(M.target.value),
                            placeholder: "附言（选填）",
                        }),
                    ],
                })))
              : i === "gift"
                ? ((K = h.length === 1 && !!j.trim()),
                  (Q = () =>
                      y({ type: "gift_card", to: h[0], content: j.trim(), brand: I.trim(), note: V.trim() })),
                  (ae = e.jsxs(e.Fragment, {
                      children: [
                          e.jsx("div", { className: "gp-label", children: "送给" }),
                          e.jsx(ys, { members: d, picked: h, onToggle: he }),
                          e.jsx("input", {
                              className: "gp-input",
                              value: j,
                              maxLength: 40,
                              onChange: (M) => f(M.target.value),
                              placeholder: "礼物名称",
                          }),
                          e.jsx("input", {
                              className: "gp-input",
                              value: I,
                              maxLength: 20,
                              onChange: (M) => b(M.target.value),
                              placeholder: "品牌（选填）",
                          }),
                          e.jsx("input", {
                              className: "gp-input",
                              value: V,
                              maxLength: 40,
                              onChange: (M) => se(M.target.value),
                              placeholder: "附言（选填）",
                          }),
                      ],
                  })))
                : i === "narr" &&
                  ((K = !!j.trim()),
                  (ue = "插入"),
                  (Q = () =>
                      y(
                          { type: "narration", content: `*${j.trim().replace(/^\*+|\*+$/g, "")}*` },
                          { reply: !1 },
                      )),
                  (ae = e.jsxs(e.Fragment, {
                      children: [
                          e.jsx("textarea", {
                              className: "gp-input",
                              rows: 4,
                              value: j,
                              maxLength: 400,
                              onChange: (M) => f(M.target.value),
                              placeholder: "描述此刻的场景或动作",
                              autoFocus: !0,
                          }),
                          e.jsx("p", {
                              className: "gp-note",
                              children: "旁白会居中显示，所有成员都能看到。",
                          }),
                      ],
                  }))),
        e.jsx(Re, {
            open: !!i,
            onClose: v,
            title: vs[i] || "",
            maxWidth: 350,
            children:
                i &&
                e.jsxs("div", {
                    className: "gp-body",
                    children: [
                        ae,
                        e.jsxs("div", {
                            className: "gp-acts",
                            children: [
                                e.jsx("button", { className: "btn-plain", onClick: v, children: "取消" }),
                                e.jsx("button", {
                                    className: "btn-plain primary",
                                    disabled: !K,
                                    onClick: Q,
                                    children: ue,
                                }),
                            ],
                        }),
                    ],
                }),
        })
    );
}
const $s = [
    ["owner", "群主", "群主头衔"],
    ["admin", "管理员", "管理员头衔"],
    ["member", "成员", "成员头衔"],
];
function ws({ ui: i, onChange: v }) {
    const d = ls(i),
        y = (x, j, f) => v({ ...((i == null ? void 0 : i.groupTagColors) || {}), [x]: { ...d[x], [j]: f } }),
        h = !!(i != null && i.groupTagColors) && Object.keys(i.groupTagColors).length > 0;
    return e.jsxs(le, {
        header: "群聊美化 · 头衔配色",
        footer: "群聊中名字前的标签。有头衔时显示头衔，没有时显示「群主」「管理员」；底色区分身份。",
        children: [
            $s.map(([x, j, f]) =>
                e.jsxs(
                    "div",
                    {
                        className: "ios-row gtc-row",
                        children: [
                            e.jsx("span", { className: "row-title", children: j }),
                            e.jsx("b", {
                                className: "gtc-pill",
                                style: { background: d[x].bg, color: d[x].fg },
                                children: f,
                            }),
                            e.jsxs("label", {
                                className: "gtc-dot",
                                title: "底色",
                                children: [
                                    e.jsx("i", { style: { background: d[x].bg } }),
                                    e.jsx("small", { children: "底色" }),
                                    e.jsx("input", {
                                        type: "color",
                                        value: d[x].bg,
                                        onChange: (I) => y(x, "bg", I.target.value),
                                        "aria-label": `${j}底色`,
                                    }),
                                ],
                            }),
                            e.jsxs("label", {
                                className: "gtc-dot",
                                title: "文字",
                                children: [
                                    e.jsx("i", { style: { background: d[x].fg } }),
                                    e.jsx("small", { children: "文字" }),
                                    e.jsx("input", {
                                        type: "color",
                                        value: d[x].fg,
                                        onChange: (I) => y(x, "fg", I.target.value),
                                        "aria-label": `${j}文字色`,
                                    }),
                                ],
                            }),
                        ],
                    },
                    x,
                ),
            ),
            h &&
                e.jsx("div", {
                    className: "ios-row",
                    style: { cursor: "pointer" },
                    onClick: () => v(void 0),
                    children: e.jsx("div", { className: "row-title", children: "恢复默认配色" }),
                }),
        ],
    });
}
function Ns({ groupId: i, onClose: v, onLeft: d }) {
    var Me;
    const { state: y, patch: h } = ft(),
        x = Qe(y, i),
        j = y.characters || [],
        [f, I] = S.useState(!1),
        [b, V] = S.useState(null),
        [se, he] = S.useState(null),
        [ae, K] = S.useState(!1),
        [Q, ue] = S.useState(!1),
        [M, ie] = S.useState(!1),
        [Ne, ve] = S.useState(!1),
        ye = S.useRef(null),
        $ = (a) =>
            h((c) => ({
                groups: (c.groups || []).map((m) =>
                    m.id === i ? { ...m, ...(typeof a == "function" ? a(we(m)) : a) } : m,
                ),
            }));
    if (!x) return null;
    const l = we(x),
        P = xt(y.me),
        fe = l.memberIds.map((a) => j.find((c) => c.id === a)).filter(Boolean),
        F = l.ownerId === "me",
        ee = F || l.adminIds.includes("me"),
        xe = l.notice ? rs(l.messages) : null,
        Y = async (a) => {
            var A;
            const c = (A = a.target.files) == null ? void 0 : A[0];
            if (((a.target.value = ""), !c)) return;
            const m = await Mt(c, { aspect: 1, shape: "rounded", title: "头像" }, { note: "群头像" });
            m && $((ce) => ({ avatar: m, messages: [...ce.messages, R(`${P} 修改了群头像`)] }));
        },
        H = (a, c) => $((m) => ({ titles: { ...m.titles, [a]: c.slice(0, Xe) } })),
        g = (a) =>
            $((c) => ({
                showLevel: a,
                messages: [...c.messages, R(a ? "群主开启了群活跃等级" : "群主关闭了群活跃等级")],
            })),
        Z = j.filter((a) => Ct(a) && !l.memberIds.includes(a.id)),
        J = (a) => {
            if (!a.length) return;
            const c = a
                .map((m) =>
                    G(
                        l,
                        j.find((A) => A.id === m),
                    ),
                )
                .join("、");
            ($((m) => ({
                memberIds: [...m.memberIds, ...a],
                messages: [...m.messages, R(`${P} 把 ${c} 拉进了群`)],
            })),
                I(!1));
        },
        te = (a) => {
            const c = G(
                l,
                j.find((m) => m.id === a),
            );
            ($((m) => ({
                memberIds: m.memberIds.filter((A) => A !== a),
                adminIds: m.adminIds.filter((A) => A !== a),
                messages: [...m.messages, R(`${c} 被移出了群聊`)],
            })),
                V(null));
        },
        k = (a) => {
            const c = G(
                    l,
                    j.find((A) => A.id === a),
                ),
                m = l.adminIds.includes(a);
            $((A) => ({
                adminIds: m ? A.adminIds.filter((ce) => ce !== a) : [...A.adminIds, a],
                messages: [...A.messages, R(m ? `${c} 不再是管理员` : `${c} 成为管理员`)],
            }));
        },
        je = (a) => {
            const c = G(
                l,
                j.find((m) => m.id === a),
            );
            ($((m) => ({
                ownerId: a,
                adminIds: m.adminIds.filter((A) => A !== a),
                messages: [...m.messages, R(`群主已经转让给 ${c}`)],
            })),
                V(null));
        },
        Ge = (a, c) => {
            if ((l.aliases[a.id] || "") === c) return;
            const m = G(l, a);
            $((A) => ({
                aliases: { ...A.aliases, [a.id]: c },
                aliasBy: { ...A.aliasBy, [a.id]: "me" },
                messages: [
                    ...A.messages,
                    R(c ? `${P} 把 ${m} 的群昵称改成了「${c}」` : `${P} 去掉了 ${m} 的群昵称`),
                ],
            }));
        },
        Ce = (a) => {
            const c = !l.mutedIds.includes(a.id);
            $((m) => ({
                mutedIds: c ? [...new Set([...m.mutedIds, a.id])] : m.mutedIds.filter((A) => A !== a.id),
                messages: [...m.messages, R(c ? `${G(l, a)} 被 ${P} 禁言` : `${P} 解除了 ${G(l, a)} 的禁言`)],
            }));
        },
        Se = (a) =>
            $((c) => ({
                allMuted: a,
                messages: [...c.messages, R(a ? `${P} 开启了全员禁言` : `${P} 关闭了全员禁言`)],
            })),
        Pe = (a, c, m) =>
            $((A) => ({
                memory: {
                    ...A.memory,
                    perMember: { ...A.memory.perMember, [a]: { ...(A.memory.perMember[a] || {}), [c]: m } },
                },
            })),
        qe = () => {
            (F
                ? h((a) => ({ groups: (a.groups || []).filter((c) => c.id !== i) }))
                : $((a) => ({ messages: [...a.messages, R(`${P} 退出了群聊`)], left: !0 })),
                d == null || d());
        },
        Ae = l.createdAt
            ? (() => {
                  const a = new Date(l.createdAt);
                  return `${a.getFullYear()}年${a.getMonth() + 1}月${a.getDate()}日`;
              })()
            : "",
        X = (a) => he(a),
        [Fe, _e] = S.useState(!1),
        Ie = (a) => {
            const c = Oe(l, a);
            return c === "member" ? null : e.jsx("em", { className: `gs-role ${c}`, children: bt[c] });
        },
        ke = ({ src: a, name: c, local: m }) =>
            e.jsx("div", {
                className: "gs-mava",
                children: a
                    ? m
                        ? e.jsx(De, { src: a, alt: "" })
                        : e.jsx("img", { src: a, alt: "" })
                    : e.jsx("i", { children: (c || "·").slice(0, 1) }),
            });
    return e.jsxs(St, {
        title: `群设置（${fe.length + 1}）`,
        onClose: v,
        className: "gs-set",
        style: is(y.ui),
        children: [
            e.jsxs("div", {
                className: "pb-8",
                children: [
                    e.jsxs("div", {
                        className: "gs-members",
                        children: [
                            e.jsxs("div", {
                                className: "gs-member",
                                children: [
                                    e.jsx(ke, {
                                        src: (Me = y.me) == null ? void 0 : Me.avatar,
                                        name: P,
                                        local: !0,
                                    }),
                                    e.jsx("span", { children: l.myAlias || P }),
                                    F && e.jsx("em", { className: "gs-role owner", children: "群主" }),
                                ],
                            }),
                            fe.map((a) =>
                                e.jsxs(
                                    "button",
                                    {
                                        className: "gs-member btn-plain",
                                        onClick: () => V(a),
                                        children: [
                                            e.jsxs("span", {
                                                className: "gs-mava-wrap",
                                                children: [
                                                    e.jsx(ke, { src: re(a), name: G(l, a), local: !0 }),
                                                    l.mutedIds.includes(a.id) &&
                                                        e.jsx("b", {
                                                            className: "gs-muted",
                                                            "aria-label": "已禁言",
                                                            children: "禁",
                                                        }),
                                                ],
                                            }),
                                            e.jsx("span", { children: G(l, a) }),
                                            Ie(a.id),
                                        ],
                                    },
                                    a.id,
                                ),
                            ),
                            e.jsxs("button", {
                                className: "gs-member btn-plain",
                                onClick: () => I(!0),
                                children: [
                                    e.jsx("div", {
                                        className: "gs-mava add",
                                        children: e.jsx(Kt, { size: 20 }),
                                    }),
                                    e.jsx("span", { children: "添加" }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs(le, {
                        header: "群资料",
                        children: [
                            e.jsx(oe, {
                                title: "群聊名称",
                                value: l.name || Ee(l, j),
                                onClick: () =>
                                    X({
                                        title: "群聊名称",
                                        value: l.name,
                                        max: 24,
                                        placeholder: Ee(l, j),
                                        onSave: (a) => $({ name: a }),
                                    }),
                            }),
                            e.jsx(oe, {
                                title: "群头像",
                                onClick: ee
                                    ? async () => {
                                          var c;
                                          const a = await At({ current: l.avatar });
                                          a === "file"
                                              ? (c = ye.current) == null || c.click()
                                              : a != null &&
                                                a.url &&
                                                $((m) => ({
                                                    avatar: a.url,
                                                    messages: [...m.messages, R(`${P} 修改了群头像`)],
                                                }));
                                      }
                                    : void 0,
                                chevron: ee,
                                children: l.avatar
                                    ? e.jsx("span", {
                                          className: "gs-gava",
                                          children: e.jsx(De, { src: l.avatar, alt: "" }),
                                      })
                                    : e.jsx("span", { className: "row-value", children: "未设置" }),
                            }),
                            e.jsx("input", {
                                ref: ye,
                                type: "file",
                                accept: "image/*",
                                hidden: !0,
                                onChange: Y,
                            }),
                            e.jsx(oe, {
                                title: "群公告",
                                value: l.notice ? (ee ? "编辑" : "") : "未设置",
                                onClick: ee ? () => ie(!0) : void 0,
                                chevron: ee,
                            }),
                            l.notice &&
                                e.jsx(cs, {
                                    text: l.notice,
                                    meta: xe,
                                    onClick: () => (ee ? ie(!0) : ve(!0)),
                                }),
                            Ae && e.jsx(oe, { title: "建群日期", value: Ae, chevron: !1 }),
                        ],
                    }),
                    e.jsxs(le, {
                        header: "我在本群",
                        children: [
                            e.jsx(oe, {
                                title: "我的群昵称",
                                value: l.myAlias || P,
                                onClick: () =>
                                    X({
                                        title: "我的群昵称",
                                        value: l.myAlias,
                                        max: 16,
                                        placeholder: P,
                                        onSave: (a) => $({ myAlias: a }),
                                    }),
                            }),
                            F &&
                                e.jsx(oe, {
                                    title: "我的群头衔",
                                    value: l.titles.me || "未设置",
                                    onClick: () =>
                                        X({
                                            title: "我的群头衔",
                                            value: l.titles.me || "",
                                            max: Xe,
                                            placeholder: "最多 8 个字",
                                            onSave: (a) => H("me", ut(a)),
                                        }),
                                }),
                        ],
                    }),
                    ee &&
                        e.jsxs(le, {
                            header: "群管理",
                            footer: "全员禁言时，群主和管理员仍可发言。",
                            children: [
                                e.jsx(pe, { title: "全员禁言", on: !!l.allMuted, onChange: Se }),
                                F
                                    ? e.jsx(pe, { title: "群活跃等级", on: !!l.showLevel, onChange: g })
                                    : e.jsx(oe, {
                                          title: "群活跃等级",
                                          value: l.showLevel ? "已开启" : "未开启",
                                          chevron: !1,
                                      }),
                                F &&
                                    l.showLevel &&
                                    e.jsx(oe, {
                                        title: "等级头衔",
                                        value: (l.levelNames || []).some((a) => yt(a)) ? "已自定义" : "默认",
                                        onClick: () => _e(!0),
                                    }),
                            ],
                        }),
                    e.jsx(ws, {
                        ui: y.ui,
                        onChange: (a) => h((c) => ({ ui: { ...c.ui, groupTagColors: a } })),
                    }),
                    e.jsxs(le, {
                        children: [
                            e.jsx(pe, {
                                title: "消息免打扰",
                                on: !!l.muted,
                                onChange: (a) => $({ muted: a }),
                            }),
                            e.jsx(pe, {
                                title: "置顶聊天",
                                on: !!l.pinned,
                                onChange: (a) => $({ pinned: a }),
                            }),
                            e.jsx(pe, {
                                title: "我不在时他们也会聊",
                                on: l.awayChat !== !1,
                                onChange: (a) => $({ awayChat: a }),
                            }),
                        ],
                    }),
                    e.jsxs(le, {
                        header: "记忆",
                        footer: "带进群：成员在群里会记得和你的私事。记回私聊：成员单聊时会记得群里的事。",
                        children: [
                            e.jsx(pe, {
                                title: "私事带进群",
                                on: !!l.memory.inbound,
                                onChange: (a) => $((c) => ({ memory: { ...c.memory, inbound: a } })),
                            }),
                            e.jsx(pe, {
                                title: "群里的事记回私聊",
                                on: !!l.memory.outbound,
                                onChange: (a) => $((c) => ({ memory: { ...c.memory, outbound: a } })),
                            }),
                            e.jsx(oe, { title: "按成员设置", onClick: () => K(!0) }),
                        ],
                    }),
                    e.jsx(le, {
                        children: e.jsx(oe, {
                            title: F ? "解散群聊" : "退出群聊",
                            danger: !0,
                            chevron: !1,
                            onClick: () => ue(!0),
                        }),
                    }),
                ],
            }),
            e.jsx(Ss, { edit: se, onClose: () => he(null) }),
            e.jsx(ds, {
                open: M,
                onClose: () => ie(!1),
                value: l.notice || "",
                meta: xe,
                onSave: (a) =>
                    $((c) => ({
                        notice: a,
                        messages: a ? [...c.messages, R(`${P} 发布了群公告：${a}`)] : c.messages,
                    })),
            }),
            e.jsx(ms, {
                open: Ne,
                onClose: () => ve(!1),
                text: l.notice || "",
                group: l.name || Ee(l, j),
                meta: xe,
            }),
            e.jsx(jt, {
                open: ae,
                onClose: () => K(!1),
                title: "按成员设置记忆",
                children: e.jsx("div", {
                    className: "pb-8",
                    children: fe.map((a) =>
                        e.jsx(
                            le,
                            {
                                header: G(l, a),
                                children: ["inbound", "outbound"].map((c) =>
                                    e.jsxs(
                                        "div",
                                        {
                                            className: "ios-row gs-mem-seg",
                                            children: [
                                                e.jsx("span", {
                                                    className: "row-title",
                                                    children: c === "inbound" ? "私事带进群" : "记回私聊",
                                                }),
                                                e.jsx("div", {
                                                    className: "ios-seg-pill",
                                                    children: Object.entries(_t).map(([m, A]) => {
                                                        var ce;
                                                        return e.jsx(
                                                            "button",
                                                            {
                                                                className:
                                                                    (((ce = l.memory.perMember[a.id]) == null
                                                                        ? void 0
                                                                        : ce[c]) || "inherit") === m
                                                                        ? "on"
                                                                        : "",
                                                                onClick: () => Pe(a.id, c, m),
                                                                children:
                                                                    m === "inherit"
                                                                        ? `跟随（${Ke(l, a.id, c) ? "开" : "关"}）`
                                                                        : A,
                                                            },
                                                            m,
                                                        );
                                                    }),
                                                }),
                                            ],
                                        },
                                        c,
                                    ),
                                ),
                            },
                            a.id,
                        ),
                    ),
                }),
            }),
            e.jsx(As, { open: f, candidates: Z, group: l, onClose: () => I(!1), onDone: J }),
            e.jsx(Cs, {
                open: Fe,
                names: l.levelNames,
                onClose: () => _e(!1),
                onSave: (a) =>
                    $((c) => ({ levelNames: a, messages: [...c.messages, R("群主修改了等级头衔")] })),
            }),
            e.jsx(Re, {
                open: !!b,
                onClose: () => V(null),
                title: b ? G(l, b) : "",
                maxWidth: 340,
                children:
                    b &&
                    e.jsxs("div", {
                        className: "gs-msheet",
                        children: [
                            e.jsxs("div", {
                                className: "gs-msheet-head",
                                children: [
                                    e.jsx(ke, { src: re(b), name: G(l, b), local: !0 }),
                                    Ie(b.id) ||
                                        e.jsx("em", { className: "gs-role member", children: "成员" }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "gs-msheet-list",
                                children: [
                                    e.jsxs("button", {
                                        className: "btn-plain",
                                        disabled: !We(l, "me", "alias", b.id),
                                        onClick: () =>
                                            X({
                                                title: "群昵称",
                                                value: l.aliases[b.id] || "",
                                                max: 16,
                                                placeholder: b.nickname || b.name,
                                                onSave: (a) => Ge(b, a),
                                            }),
                                        children: [
                                            e.jsx("span", { children: "群昵称" }),
                                            e.jsx("small", { children: l.aliases[b.id] || "未设置" }),
                                        ],
                                    }),
                                    F &&
                                        e.jsxs("button", {
                                            className: "btn-plain",
                                            onClick: () =>
                                                X({
                                                    title: "群头衔",
                                                    value: l.titles[b.id] || "",
                                                    max: Xe,
                                                    placeholder: "最多 8 个字",
                                                    onSave: (a) => H(b.id, ut(a)),
                                                }),
                                            children: [
                                                e.jsx("span", { children: "群头衔" }),
                                                e.jsx("small", { children: l.titles[b.id] || "未设置" }),
                                            ],
                                        }),
                                    We(l, "me", "mute", b.id) &&
                                        e.jsx("button", {
                                            className: "btn-plain",
                                            onClick: () => Ce(b),
                                            children: e.jsx("span", {
                                                children: l.mutedIds.includes(b.id) ? "解除禁言" : "禁言",
                                            }),
                                        }),
                                    F &&
                                        e.jsx("button", {
                                            className: "btn-plain",
                                            onClick: () => k(b.id),
                                            children: e.jsx("span", {
                                                children: l.adminIds.includes(b.id)
                                                    ? "撤销管理员"
                                                    : "设为管理员",
                                            }),
                                        }),
                                    F &&
                                        e.jsx("button", {
                                            className: "btn-plain",
                                            onClick: () => je(b.id),
                                            children: e.jsx("span", { children: "转让群主" }),
                                        }),
                                    We(l, "me", "kick", b.id) &&
                                        e.jsx("button", {
                                            className: "btn-plain danger",
                                            onClick: () => te(b.id),
                                            children: e.jsx("span", { children: "移出群聊" }),
                                        }),
                                ],
                            }),
                        ],
                    }),
            }),
            e.jsx(It, {
                open: Q,
                onClose: () => ue(!1),
                title: F ? "解散群聊" : "退出群聊",
                message: F ? "群聊和其中的消息都会删除。" : "你与成员各自的私聊不受影响。",
                confirm: { label: F ? "解散" : "退出", destructive: !0, onClick: qe },
            }),
        ],
    });
}
function Cs({ open: i, names: v, onClose: d, onSave: y }) {
    const [h, x] = S.useState(() => gt(v));
    Ze.useEffect(() => {
        i && x(gt(v));
    }, [i, v]);
    const j = (f, I) => x((b) => b.map((V, se) => (se === f ? I : V)));
    return e.jsx(Re, {
        open: i,
        onClose: d,
        title: "等级头衔",
        maxWidth: 340,
        children:
            i &&
            e.jsxs("div", {
                className: "gs-edit gs-lv",
                children: [
                    e.jsxs("p", {
                        className: "gs-lv-note",
                        children: [
                            "按成员在本群的发言条数自动升级。名称最多 ",
                            pt,
                            " 个字，留空时使用默认名称。",
                        ],
                    }),
                    e.jsx("div", {
                        className: "gs-lv-list",
                        children: us.map((f, I) =>
                            e.jsxs(
                                "label",
                                {
                                    className: "gs-lv-row",
                                    children: [
                                        e.jsxs("span", {
                                            className: "gs-lv-k",
                                            children: [
                                                e.jsxs("b", { children: ["LV", I + 1] }),
                                                e.jsx("small", { children: f ? `${f} 条起` : "起始" }),
                                            ],
                                        }),
                                        e.jsx("input", {
                                            value: h[I],
                                            maxLength: pt,
                                            placeholder: He[I],
                                            onChange: (b) => j(I, b.target.value),
                                        }),
                                    ],
                                },
                                I,
                            ),
                        ),
                    }),
                    e.jsx("button", {
                        className: "btn-plain gs-lv-reset",
                        onClick: () => x([...He]),
                        children: "恢复默认名称",
                    }),
                    e.jsxs("div", {
                        className: "gs-edit-acts",
                        children: [
                            e.jsx("button", { className: "btn-plain", onClick: d, children: "取消" }),
                            e.jsx("button", {
                                className: "btn-plain primary",
                                onClick: () => {
                                    const f = h.map((I, b) => {
                                        const V = yt(I);
                                        return V && V !== He[b] ? V : "";
                                    });
                                    (y(f.some(Boolean) ? f : []), d());
                                },
                                children: "完成",
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function Ss({ edit: i, onClose: v }) {
    const [d, y] = S.useState("");
    return (
        Ze.useEffect(() => {
            i && y(i.value || "");
        }, [i]),
        e.jsx(Re, {
            open: !!i,
            onClose: v,
            title: (i == null ? void 0 : i.title) || "",
            maxWidth: 340,
            children:
                i &&
                e.jsxs("div", {
                    className: "gs-edit",
                    children: [
                        i.multiline
                            ? e.jsx("textarea", {
                                  rows: 4,
                                  value: d,
                                  maxLength: i.max,
                                  placeholder: i.placeholder,
                                  onChange: (h) => y(h.target.value),
                                  autoFocus: !0,
                              })
                            : e.jsx("input", {
                                  value: d,
                                  maxLength: i.max,
                                  placeholder: i.placeholder,
                                  onChange: (h) => y(h.target.value),
                                  autoFocus: !0,
                              }),
                        e.jsxs("div", {
                            className: "gs-edit-acts",
                            children: [
                                e.jsx("button", { className: "btn-plain", onClick: v, children: "取消" }),
                                e.jsx("button", {
                                    className: "btn-plain primary",
                                    onClick: () => {
                                        (i.onSave(d.trim()), v());
                                    },
                                    children: "完成",
                                }),
                            ],
                        }),
                    ],
                }),
        })
    );
}
function As({ open: i, candidates: v, group: d, onClose: y, onDone: h }) {
    const [x, j] = S.useState([]);
    return (
        Ze.useEffect(() => {
            i && j([]);
        }, [i]),
        e.jsx(jt, {
            open: i,
            onClose: y,
            title: "添加成员",
            rightAction: e.jsxs("button", {
                className: "ios-capsule btn-plain",
                disabled: !x.length,
                onClick: () => h(x),
                children: ["完成", x.length ? `（${x.length}）` : ""],
            }),
            children: e.jsx("div", {
                className: "pb-8",
                children: v.length
                    ? e.jsx(le, {
                          children: v.map((f) => {
                              const I = x.includes(f.id);
                              return e.jsxs(
                                  "div",
                                  {
                                      className: "ios-row gs-pick",
                                      onClick: () =>
                                          j((b) => (I ? b.filter((V) => V !== f.id) : [...b, f.id])),
                                      children: [
                                          e.jsx("i", {
                                              className: `gs-check${I ? " on" : ""}`,
                                              children: I ? e.jsx(vt, { size: 12, weight: "bold" }) : null,
                                          }),
                                          e.jsx("div", {
                                              className: "gs-mava sm",
                                              children: re(f)
                                                  ? e.jsx(De, { src: re(f), alt: "" })
                                                  : e.jsx("i", { children: G(d, f).slice(0, 1) }),
                                          }),
                                          e.jsx("span", { className: "row-title", children: G(d, f) }),
                                      ],
                                  },
                                  f.id,
                              );
                          }),
                      })
                    : e.jsx("div", {
                          className: "py-10 text-center ios-footnote",
                          style: { color: "var(--text-2)" },
                          children: "通讯录中没有可添加的联系人",
                      }),
            }),
        })
    );
}
const _s = { ...dt, chat: (i, v, d) => dt.chat(i, v, { ...(d || {}), _noTask: !0, _noLog: !0 }) },
    Is = (i) => {
        var y;
        const d = (
            ((y = String(i || "").match(/```(?:json)?\s*([\s\S]*?)```/i)) == null ? void 0 : y[1]) ||
            String(i || "")
        ).match(/\{[\s\S]*\}/);
        if (!d) return null;
        try {
            return JSON.parse(d[0]);
        } catch {
            try {
                return JSON.parse(d[0].replace(/,\s*([}\]])/g, "$1"));
            } catch {
                return null;
            }
        }
    },
    Ms = 0.85,
    be = (i, v) => {
        var d, y, h, x, j, f;
        return v === "me"
            ? Number((y = (d = i.wallet) == null ? void 0 : d.me) == null ? void 0 : y.balance) || 0
            : Number(
                  ((j = (x = (h = i.wallet) == null ? void 0 : h.chars) == null ? void 0 : x[v]) == null
                      ? void 0
                      : j.balance) ??
                      ((f = i.wallet) == null ? void 0 : f.defaultCharBalance) ??
                      1e4,
              ) || 0;
    },
    ht = (i, v) => {
        var y;
        const d = i.stickerBindings || {};
        return (((y = i.gallery) == null ? void 0 : y.stickers) || []).filter((h) => {
            const x = d[h.category || "未分类"] || [];
            return x.length === 0 || x.includes(v == null ? void 0 : v.id);
        });
    };
function Ps({ groupId: i, onBack: v }) {
    var et;
    const { state: d, patch: y, walletAppend: h } = ft(),
        x = Tt(),
        j = S.useMemo(() => Qe(d, i), [d, i]),
        f = d.characters || [],
        [I, b] = S.useState(!1),
        [V, se] = S.useState(!1),
        [he, ae] = S.useState(""),
        [K, Q] = S.useState(null),
        [ue, M] = S.useState(null),
        [ie, Ne] = S.useState(null),
        [ve, ye] = S.useState(null),
        [$, l] = S.useState(null),
        [P, fe] = S.useState(null),
        F = S.useRef(d);
    F.current = d;
    const ee = S.useRef(!1),
        xe = S.useRef(new Map()),
        Y = (t) =>
            y((n) => ({
                groups: (n.groups || []).map((o) =>
                    o.id === i ? { ...o, ...(typeof t == "function" ? t(we(o)) : t) } : o,
                ),
            })),
        H = (...t) => Y((n) => ({ messages: [...n.messages, ...t] }));
    if (
        (S.useEffect(() => {
            if (!j) return;
            const t = Lt(j);
            t || Y({ lastReadAt: Date.now() });
            const n = t ? setTimeout(() => X([], { mode: "away" }), 900) : null;
            return () => {
                clearTimeout(n);
            };
        }, [i]),
        !j)
    )
        return null;
    const g = we(j),
        Z = xt(d.me),
        J = Ee(g, f),
        te = g.memberIds.map((t) => f.find((n) => n.id === t)).filter(Boolean),
        k = (t) =>
            t === "me"
                ? g.myAlias || Z
                : G(
                      g,
                      f.find((n) => n.id === t),
                  ) || "有人",
        je = () => we(Qe(F.current, i)),
        Ge = () => {
            const t = {};
            for (const n of te) {
                if (!Ke(g, n.id, "inbound")) continue;
                const o = [
                    ...Yt(n)
                        .filter((r) => r.status !== "archived")
                        .slice(-3)
                        .filter((r) => r.title)
                        .map((r) => `${mt(r.lastUpdatedAt || r.createdAt || r.at)}${r.title}`),
                    ...Jt(n)
                        .slice(-2)
                        .filter((r) => r.text)
                        .map((r) => `${mt(r.at || r.createdAt)}${r.text}`),
                ];
                o.length && (t[n.id] = o.join("；"));
            }
            return t;
        },
        Ce = (t, n) => {
            const o = je().messages.find((E) => E.id === t);
            if (!o || o.type !== "red_packet_card") return null;
            let r = xe.current.get(t);
            if (
                (r ||
                    ((r = {
                        spent: (o.grabs || []).reduce((E, T) => E + Ye(T.amount), 0),
                        who: new Set((o.grabs || []).map((E) => E.who)),
                    }),
                    xe.current.set(t, r)),
                r.who.has(n) ||
                    r.who.size >= o.count ||
                    (o.mode === "exclusive" && o.to && n !== o.to) ||
                    Je({ count: o.count, createdAt: o.createdAt, grabs: [] }).status === "expired")
            )
                return null;
            const w = Xt(Ye(o.total) - r.spent, o.count - r.who.size, o.mode);
            ((r.spent += w), r.who.add(n));
            const N = Qt(w),
                D = r.who.size >= o.count,
                u = o.role === "user" ? "me" : o.charId,
                q =
                    n === "me" || u === "me"
                        ? {
                              ...R(
                                  `${n === "me" ? "你" : k(n)} 领取了${u === "me" ? "你" : ` ${k(u)} `}的红包${D ? "，红包已被领完" : ""}`,
                              ),
                              type: "claim",
                              of: t,
                          }
                        : null;
            return (
                Y((E) => ({
                    messages: [
                        ...E.messages.map((T) =>
                            T.id === t
                                ? { ...T, grabs: [...(T.grabs || []), { who: n, amount: N, at: Date.now() }] }
                                : T,
                        ),
                        ...(q ? [q] : []),
                    ],
                })),
                h(n, { amount: N, note: `抢到 ${k(u)} 的红包（${J}）`, kind: "redpacket", ref: t }),
                N
            );
        },
        Se = (t, n, o, r = "") => {
            const w = r
                ? r !== "me" && r !== n && g.memberIds.includes(r)
                    ? [r]
                    : []
                : g.memberIds.filter((D) => D !== n && Math.random() < Ms);
            let N = 0;
            for (const D of w) {
                const u = 1200 + Math.random() * 7e3;
                ((N = Math.max(N, u)), setTimeout(() => Ce(t, D), u));
            }
            o && setTimeout(o, N + 1200);
        },
        Pe = (t, n) => {
            var D;
            const o = je().messages.find((u) => u.id === t);
            if (
                !o ||
                o.type !== "collect_card" ||
                o.closed ||
                ((D = o.paid) != null && D[n]) ||
                !(o.members || []).includes(n)
            )
                return;
            const r = Number(o.each) || 0;
            if (be(d, n) < r) return;
            const w = { ...(o.paid || {}), [n]: Date.now() },
                N = (o.members || []).every((u) => w[u]);
            (Y((u) => ({
                messages: [
                    ...u.messages.map((q) => (q.id === t ? { ...q, paid: w } : q)),
                    { ...R(`${k(n)} 已付款 ¥${ct(r)}${N ? "，收款已收齐" : ""}`), type: "claim", of: t },
                ],
            })),
                h(n, { amount: -r, note: `群收款（${J}）`, kind: "transfer", ref: t }),
                h("me", { amount: r, note: `${k(n)} 付的群收款（${J}）`, kind: "transfer", ref: t }));
        },
        qe = ({ mode: t, each: n, total: o, members: r, note: w }) => {
            const N = W("gm_"),
                D = {
                    id: N,
                    role: "user",
                    type: "collect_card",
                    mode: t,
                    each: n,
                    total: o,
                    members: r,
                    paid: {},
                    note: w,
                    content: w || "群收款",
                    createdAt: Date.now(),
                };
            H(D);
            const u = r.filter((E) => E !== "me" && Math.random() < Ht);
            let q = 0;
            for (const E of u) {
                const T = 1500 + Math.random() * 9e3;
                ((q = Math.max(q, T)), setTimeout(() => Pe(N, E), T));
            }
            setTimeout(() => X([]), q + 1200);
        },
        Ae = (t) => {
            Y((n) => ({
                messages: [
                    ...n.messages.map((o) => (o.id === t ? { ...o, closed: !0 } : o)),
                    R("你结束了群收款"),
                ],
            }));
        },
        X = async (t = [], { mode: n = "reply", addressed: o = [] } = {}) => {
            var r, w, N, D;
            if (!ee.current) {
                ((ee.current = !0), b(!0), ae(""));
                try {
                    const u = je(),
                        q = [...u.messages, ...t],
                        E = q
                            .filter((s) => s.type !== "claim" && (s.content || s.type === "sticker"))
                            .slice(-24),
                        T = new Map(),
                        de = E.map((s, p) => {
                            var L;
                            s.role !== "system" && T.set(p + 1, s);
                            const O =
                                    (L = s.quoted) != null && L.id
                                        ? q.find((_) => _.id === s.quoted.id)
                                        : null,
                                U = s.quoted
                                    ? `（回复 ${s.quoted.name}「${String(O ? $e(O, k) : s.quoted.content || "").slice(0, 30)}」）`
                                    : "";
                            return {
                                ref: s.role === "system" ? 0 : p + 1,
                                who:
                                    s.role === "user"
                                        ? Z
                                        : s.role === "system"
                                          ? "（系统）"
                                          : G(
                                                g,
                                                f.find((_) => _.id === s.charId),
                                            ) || "有人",
                                text: s.role === "system" ? s.content : `${U}${$e(s, k)}`,
                                at: (s.at || []).map((_) => (_ === "all" ? "所有人" : k(_))),
                                time: s.createdAt || 0,
                            };
                        });
                    for (const s of q
                        .filter((p) => p.type === "red_packet_card" && (p.grabs || []).length)
                        .slice(-3))
                        de.push({
                            who: "（系统）",
                            text: `${k(s.role === "user" ? "me" : s.charId)} 的红包：${s.grabs.map((p) => `${k(p.who)} 抢到 ¥${p.amount}`).join("，")}${s.grabs.length >= s.count ? "（已领完）" : ""}`,
                        });
                    const z = F.current,
                        ge = {},
                        tt = {};
                    for (const s of te)
                        ((ge[s.id] =
                            ((r = s.autonomy) == null ? void 0 : r.sendSticker) === !1
                                ? []
                                : [
                                      ...new Set(
                                          ht(z, s)
                                              .map((p) => (p.name || "").trim())
                                              .filter(Boolean),
                                      ),
                                  ]),
                            (tt[s.id] = be(z, s.id)));
                    const st = q.filter(
                            (s) =>
                                s.type === "transfer_card" &&
                                s.role === "user" &&
                                (s.status || "pending") === "pending" &&
                                g.memberIds.includes(s.to),
                        ),
                        at = {};
                    for (const s of te) {
                        const p = Et(s, { deviceTz: Ot() });
                        p && (at[s.id] = p);
                    }
                    const nt = {},
                        ot = {};
                    for (const s of te) {
                        const p = Dt(s, {
                            offlineFloors: (z.offlineChat || []).filter(
                                (L) => L.charId === s.id && !L.theaterId,
                            ),
                        });
                        p &&
                            (nt[s.id] = {
                                ...p,
                                stage: Ke(g, s.id, "inbound")
                                    ? String(((w = s.relationStage) == null ? void 0 : w.label) || "")
                                    : "",
                            });
                        const O = u.messages
                                .filter(
                                    (L) =>
                                        L.role === "assistant" &&
                                        L.charId === s.id &&
                                        (L.type === "text" || L.type === "voice"),
                                )
                                .slice(-20)
                                .map((L) => String(L.content || "")),
                            U = Rt(O, { max: 3 });
                        U.length && (ot[s.id] = U.map((L) => L.quote));
                    }
                    const wt = Gt({
                            group: u,
                            chars: f,
                            meName: Z,
                            recent: de,
                            privateNotes: Ge(),
                            situations: at,
                            arcs: nt,
                            stockLines: ot,
                            mode: n,
                            addressed: o,
                            stickers: ge,
                            balances: tt,
                            pendingTransfers: st.map((s) => ({
                                id: s.id,
                                name: k(s.to),
                                amount: s.amount,
                                note: s.note,
                            })),
                        }),
                        Be = await _s.memory((N = z.api) == null ? void 0 : N.chat, wt, {
                            fallback: (D = z.api) == null ? void 0 : D.chat,
                            max_tokens: 1600,
                            temperature: 0.92,
                        }),
                        lt = Is(Be == null ? void 0 : Be.content),
                        Te = Pt(lt, new Set(o.length ? o : g.memberIds), { group: u, chars: f }),
                        B = qt(lt, g.memberIds, { group: u, chars: f }),
                        rt = (s, p) => {
                            const O = [];
                            if (
                                (s.text &&
                                    O.push(
                                        s.voice
                                            ? {
                                                  ...p,
                                                  id: W("gm_"),
                                                  type: "voice",
                                                  content: s.text,
                                                  durationMs: Math.min(
                                                      6e4,
                                                      Math.max(1500, s.text.length * 260),
                                                  ),
                                              }
                                            : { ...p, id: W("gm_"), type: "text", content: s.text },
                                    ),
                                s.photo &&
                                    O.push({
                                        ...p,
                                        id: W("gm_"),
                                        at: [],
                                        type: "text_image",
                                        content: s.photo,
                                    }),
                                s.music &&
                                    O.push({
                                        ...p,
                                        id: W("gm_"),
                                        at: [],
                                        type: "music_card",
                                        kind: "song",
                                        note: s.music.note || "",
                                        content: "",
                                        song: {
                                            key: `search:${s.music.title}|${s.music.artist || ""}`,
                                            source: "search",
                                            sid: `${s.music.title}|${s.music.artist || ""}`,
                                            title: s.music.title,
                                            artist: s.music.artist || "",
                                        },
                                    }),
                                s.sticker)
                            ) {
                                const U = f.find((ne) => ne.id === s.charId),
                                    L = ht(z, U),
                                    _ = s.sticker.toLowerCase(),
                                    me =
                                        L.find((ne) => (ne.name || "").toLowerCase() === _) ||
                                        L.find((ne) => (ne.name || "").toLowerCase().includes(_));
                                me &&
                                    O.push({
                                        ...p,
                                        id: W("gm_"),
                                        at: [],
                                        type: "sticker",
                                        content: me.dataUrl,
                                        name: me.name || "",
                                        stickerId: me.id,
                                    });
                            }
                            return O;
                        },
                        Ue = (B.pats || []).map((s) => {
                            const p = (O) => (O === "me" ? u.myAlias || Z : k(O));
                            return {
                                id: W("gm_"),
                                role: "system",
                                type: "pat",
                                by: s.by,
                                target: s.target,
                                content: `"${p(s.by)}"拍了拍${s.target === "me" ? "你" : `"${p(s.target)}"`}`,
                                createdAt: Date.now(),
                            };
                        });
                    for (const s of B.replies) {
                        const p = st.find((O) => O.id === s.id);
                        p &&
                            (Y((O) => ({
                                messages: O.messages.map((U) =>
                                    U.id === p.id
                                        ? { ...U, status: s.action === "accept" ? "accepted" : "rejected" }
                                        : U,
                                ),
                            })),
                            H({
                                id: W("gm_"),
                                role: "assistant",
                                charId: p.to,
                                type: "transfer_response",
                                action: s.action,
                                amount: p.amount,
                                content: s.action === "accept" ? "已收款" : "已退还",
                                createdAt: Date.now(),
                            }),
                            s.action === "accept"
                                ? h(p.to, {
                                      amount: p.amount,
                                      note: `${Z} 的转账（${J}）`,
                                      kind: "transfer",
                                      ref: p.id,
                                  })
                                : h("me", {
                                      amount: p.amount,
                                      note: `转账被退回（${J}）`,
                                      kind: "transfer",
                                      ref: p.id,
                                  }));
                    }
                    if (
                        (Fe(B.ops),
                        Ue.length && n !== "away" && H(...Ue),
                        !Te.length &&
                            !B.redpacket &&
                            !B.transfer &&
                            !B.replies.length &&
                            !B.ops.length &&
                            !Ue.length)
                    ) {
                        n === "reply" && ae("这一轮没人接话 —— 群里本来就常常是这样。");
                        return;
                    }
                    if (n === "away") {
                        const s = Math.max(0, ...u.messages.map((_) => Number(_.createdAt) || 0)),
                            p = Math.max(5 * 6e4, Date.now() - s),
                            O = Te.length * 3 * 6e4;
                        let U = s + Math.max(6e4, (p - O) * (0.3 + Math.random() * 0.55));
                        const L = [];
                        (Te.forEach((_) => {
                            ((U += 3e4 + Math.random() * 15e4), (U = Math.min(U, Date.now() - 6e4)));
                            const me = [...u.messages, ...L],
                                ne = _.replyTo
                                    ? [...me]
                                          .reverse()
                                          .find(
                                              (Le) =>
                                                  (_.replyTo === "me"
                                                      ? Le.role === "user"
                                                      : Le.charId === _.replyTo) &&
                                                  Le.role !== "system" &&
                                                  Le.type !== "claim",
                                          )
                                    : null,
                                it = ne
                                    ? {
                                          id: ne.id,
                                          name: ne.role === "user" ? Z : k(ne.charId),
                                          content: $e(ne, k).slice(0, 80),
                                      }
                                    : null,
                                Nt = {
                                    role: "assistant",
                                    charId: _.charId,
                                    replyTo: _.replyTo || "",
                                    at: _.at || [],
                                    createdAt: Math.round(U),
                                    ...(it ? { quoted: it } : {}),
                                };
                            L.push(...rt(_, Nt));
                        }),
                            L.sort((_, me) => _.createdAt - me.createdAt),
                            Y((_) => ({ messages: [..._.messages, ...L], lastAwayAt: Date.now() })));
                        return;
                    }
                    for (const s of Te) {
                        (fe(s.charId),
                            await new Promise((_) =>
                                setTimeout(
                                    _,
                                    420 + Math.random() * 680 + Math.min(1800, (s.text || "").length * 45),
                                ),
                            ));
                        const p = s.quote
                                ? T.get(s.quote)
                                : s.replyTo
                                  ? [...je().messages]
                                        .reverse()
                                        .find(
                                            (_) =>
                                                (s.replyTo === "me"
                                                    ? _.role === "user"
                                                    : _.charId === s.replyTo) &&
                                                _.role !== "system" &&
                                                _.type !== "claim",
                                        )
                                  : null,
                            O = p
                                ? {
                                      id: p.id,
                                      name: p.role === "user" ? Z : k(p.charId),
                                      content: $e(p, k).slice(0, 80),
                                  }
                                : null,
                            U = {
                                role: "assistant",
                                charId: s.charId,
                                replyTo: s.replyTo || "",
                                at: s.at || [],
                                createdAt: Date.now(),
                                ...(O ? { quoted: O } : {}),
                            },
                            L = rt(s, U);
                        L.length && H(...L);
                    }
                    if (B.transfer && B.transfer.amount <= be(F.current, B.transfer.charId)) {
                        const s = B.transfer;
                        (H({
                            id: W("gm_"),
                            role: "assistant",
                            charId: s.charId,
                            type: "transfer_card",
                            amount: s.amount,
                            note: s.note,
                            to: "me",
                            status: "pending",
                            content: s.note,
                            createdAt: Date.now(),
                        }),
                            h(s.charId, {
                                amount: -s.amount,
                                note: `转账给 ${Z}（${J}）`,
                                kind: "transfer",
                            }));
                    }
                    if (
                        B.redpacket &&
                        B.redpacket.total <= be(F.current, B.redpacket.charId) &&
                        Ye(B.redpacket.total) >= B.redpacket.count
                    ) {
                        const s = B.redpacket,
                            p = W("gm_");
                        (H({
                            id: p,
                            role: "assistant",
                            charId: s.charId,
                            type: "red_packet_card",
                            content: s.note || "恭喜发财，大吉大利",
                            total: s.total,
                            count: s.count,
                            mode: s.mode,
                            ...(s.to ? { to: s.to } : null),
                            grabs: [],
                            createdAt: Date.now(),
                        }),
                            h(s.charId, {
                                amount: -s.total,
                                note: s.to ? `给 ${k(s.to)} 的专属红包（${J}）` : `群红包（${J}）`,
                                kind: "redpacket",
                            }),
                            setTimeout(() => Se(p, s.charId, void 0, s.to || ""), 300));
                    }
                } catch (u) {
                    ae((u == null ? void 0 : u.message) || "这一轮没发出去，检查一下聊天 API。");
                } finally {
                    ((ee.current = !1),
                        b(!1),
                        fe(null),
                        n === "away" && Y({ lastAwayAt: Date.now(), lastReadAt: Date.now() }));
                }
            }
        },
        Fe = (t = []) => {
            for (const n of t) {
                const o = k(n.by);
                if (n.kind === "rename")
                    Y((r) => ({
                        name: n.name,
                        messages: [...r.messages, R(`${o} 修改群名为「${n.name}」`)],
                    }));
                else if (n.kind === "alias") {
                    const r = n.target === n.by,
                        w = k(n.target);
                    Y((N) =>
                        n.target === "me"
                            ? {
                                  myAlias: n.name,
                                  aliasBy: { ...N.aliasBy, me: n.by },
                                  messages: [...N.messages, R(`${o} 把你的群昵称改成了「${n.name || Z}」`)],
                              }
                            : {
                                  aliases: { ...N.aliases, [n.target]: n.name },
                                  aliasBy: { ...N.aliasBy, [n.target]: n.by },
                                  messages: [
                                      ...N.messages,
                                      R(
                                          r
                                              ? `${w} 把自己的群昵称改成了「${n.name}」`
                                              : `${o} 把 ${w} 的群昵称改成了「${n.name}」`,
                                      ),
                                  ],
                              },
                    );
                } else if (n.kind === "mute") {
                    const r = n.target === "me" ? "你" : k(n.target);
                    Y((w) => ({
                        mutedIds: n.on
                            ? [...new Set([...w.mutedIds, n.target])]
                            : w.mutedIds.filter((N) => N !== n.target),
                        messages: [...w.messages, R(n.on ? `${r} 被 ${o} 禁言` : `${o} 解除了 ${r} 的禁言`)],
                    }));
                } else
                    n.kind === "muteAll" &&
                        Y((r) => ({
                            allMuted: n.on,
                            messages: [
                                ...r.messages,
                                R(n.on ? `${o} 开启了全员禁言` : `${o} 关闭了全员禁言`),
                            ],
                        }));
            }
        },
        _e = (t, { reply: n = !1, at: o = [], quote: r = null } = {}) => {
            if (!t) return;
            const w = r ? { id: r.id, name: r.name, content: r.text } : null,
                N = {
                    id: W("gm_"),
                    role: "user",
                    type: "text",
                    content: t,
                    at: o,
                    createdAt: Date.now(),
                    ...(w ? { quoted: w } : {}),
                };
            Y((u) => ({ messages: [...u.messages, N], lastReadAt: Date.now() }));
            const D = (o || []).filter((u) => u && u !== "all" && g.memberIds.includes(String(u)));
            D.length ? X([N], { addressed: [...new Set(D.map(String))] }) : n && X([N]);
        },
        Ie = (t) => {
            const n = {
                id: W("gm_"),
                role: "user",
                type: "voice",
                content: t.text || "",
                durationMs: t.durationMs,
                mode: t.mode,
                audioUrl: t.audioUrl,
                createdAt: Date.now(),
            };
            (H(n), X([n]));
        },
        ke = (t) => {
            const n = {
                id: W("gm_"),
                role: "user",
                type: "sticker",
                content: t.dataUrl,
                name: t.name || "",
                stickerId: t.id,
                createdAt: Date.now(),
            };
            (H(n), X([n]));
        },
        Me = ({ total: t, count: n, mode: o, note: r, to: w = "" }) => {
            const N = W("gm_"),
                D = {
                    id: N,
                    role: "user",
                    type: "red_packet_card",
                    content: r || "恭喜发财，大吉大利",
                    total: t,
                    count: n,
                    mode: o,
                    ...(o === "exclusive" && w ? { to: w } : null),
                    grabs: [],
                    createdAt: Date.now(),
                };
            (H(D),
                h("me", {
                    amount: -t,
                    note: o === "exclusive" && w ? `给 ${k(w)} 的专属红包（${J}）` : `群红包（${J}）`,
                    kind: "redpacket",
                }),
                Se(N, "me", () => X([]), o === "exclusive" ? w : ""));
        },
        a = ({ target: t, amount: n, note: o }) => {
            const r = {
                id: W("gm_"),
                role: "user",
                type: "transfer_card",
                amount: n,
                note: o,
                to: t.key,
                status: "pending",
                content: o,
                createdAt: Date.now(),
            };
            (H(r), h("me", { amount: -n, note: `转账给 ${t.name}（${J}）`, kind: "transfer" }), X([r]));
        },
        c = (t, n) => {
            (Y((o) => ({
                messages: o.messages.map((r) =>
                    r.id === t.id ? { ...r, status: n === "accept" ? "accepted" : "rejected" } : r,
                ),
            })),
                H({
                    id: W("gm_"),
                    role: "user",
                    type: "transfer_response",
                    action: n,
                    amount: t.amount,
                    content: n === "accept" ? "已收款" : "已退还",
                    createdAt: Date.now(),
                }),
                n === "accept"
                    ? h("me", {
                          amount: t.amount,
                          note: `${k(t.charId)} 的转账（${J}）`,
                          kind: "transfer",
                          ref: t.id,
                      })
                    : h(t.charId, {
                          amount: t.amount,
                          note: `转账被退回（${J}）`,
                          kind: "transfer",
                          ref: t.id,
                      }));
        },
        m = (t) => {
            const n = g.messages.find((o) => (o.id || "") === t.id);
            if (n) {
                if (n.type === "red_packet_card") {
                    Ne(n.id);
                    return;
                }
                if (n.type === "collect_card") {
                    ye(n.id);
                    return;
                }
                if (n.type === "transfer_card") {
                    const o = n.status || "pending";
                    n.to === "me" && o === "pending"
                        ? l(n)
                        : x == null ||
                          x(
                              o === "accepted" ? "对方已收款" : o === "rejected" ? "已退还" : "等对方收款",
                              "success",
                          );
                }
            }
        },
        A = g.showLevel ? gs(g.messages) : {},
        ce = (t) =>
            js({
                role: Oe(g, t),
                title: g.titles[t] || "",
                level: g.showLevel ? bs(A[t] || 0) : 0,
                showLevel: !!g.showLevel,
                levelNames: g.levelNames,
            }),
        kt = g.messages.map((t, n) => {
            const o = t.id || `gm${n}`,
                r = t.createdAt || 0;
            if (t.type === "claim") return { id: o, kind: "claim", content: t.content, createdAt: r };
            if (t.role === "system") return { id: o, kind: "system", content: t.content, createdAt: r };
            const w = t.role === "user";
            let N = null,
                D = "";
            if (!w) {
                const q = f.find((T) => T.id === t.charId),
                    E = G(g, q) || "已退群的人";
                ((D = E), (N = { key: t.charId || "gone", name: E, avatar: re(q) }));
            }
            const u = { id: o, out: w, createdAt: r, who: N, label: D, tags: w ? null : ce(t.charId) };
            switch (t.type) {
                case "voice":
                    return {
                        ...u,
                        kind: "voice",
                        content: t.content,
                        durationMs: t.durationMs,
                        audioUrl: t.audioUrl,
                    };
                case "sticker":
                    return { ...u, kind: "sticker", src: t.content, name: t.name };
                case "text_image":
                    return { ...u, kind: "photo", content: t.content, imgRef: t.imgRef || "" };
                case "location_card":
                    return { ...u, kind: "location", location: t.location, note: t.note || "" };
                case "gift_card":
                    return {
                        ...u,
                        kind: "gift",
                        content: t.content,
                        brand: t.brand || "",
                        price: t.price || 0,
                        note: `送给${t.to === "me" ? "你" : k(t.to)}${t.note ? ` · ${t.note}` : ""}`,
                    };
                case "narration":
                    return { ...u, kind: "narration", content: t.content };
                case "music_card":
                    return {
                        ...u,
                        kind: "music",
                        content: "",
                        song: t.song,
                        note: t.note,
                        musicKind: t.kind,
                    };
                case "red_packet_card":
                    return {
                        ...u,
                        kind: "redpacket",
                        content: t.content,
                        mode: t.mode,
                        toName: t.to ? (t.to === "me" ? "你" : k(t.to)) : "",
                        packetStatus: Je({
                            count: t.count,
                            createdAt: r,
                            grabs: t.grabs || [],
                            me: "me",
                            to: t.to,
                        }).status,
                    };
                case "transfer_card":
                    return {
                        ...u,
                        kind: "transfer",
                        amount: t.amount,
                        note: `转给${t.to === "me" ? "你" : k(t.to)}${t.note ? ` · ${t.note}` : ""}`,
                        status: t.status || "pending",
                    };
                case "transfer_response":
                    return {
                        ...u,
                        kind: "transfer_response",
                        action: t.action,
                        amount: t.amount,
                        content: t.content,
                    };
                case "collect_card":
                    return {
                        ...u,
                        kind: "collect",
                        each: t.each,
                        note: t.note || "",
                        members: t.members || [],
                        paid: t.paid || {},
                        closed: !!t.closed,
                    };
                case "chat_record_card":
                    return { ...u, kind: "record", title: t.title, items: t.items, people: t.people };
                default: {
                    const q = (t.at || [])
                            .map((z) => `@${z === "all" ? "所有人" : k(z)} `)
                            .filter((z) => !String(t.content || "").includes(z.trim()))
                            .join(""),
                        E =
                            t.quoted ||
                            (t.replyTo
                                ? (() => {
                                      const z = [...g.messages.slice(0, n)]
                                          .reverse()
                                          .find(
                                              (ge) =>
                                                  (t.replyTo === "me"
                                                      ? ge.role === "user"
                                                      : ge.charId === t.replyTo) &&
                                                  ge.role !== "system" &&
                                                  ge.type !== "claim",
                                          );
                                      return z
                                          ? {
                                                id: z.id,
                                                name: z.role === "user" ? g.myAlias || Z : k(z.charId),
                                                content: $e(z, k).slice(0, 80),
                                            }
                                          : null;
                                  })()
                                : null),
                        T = E != null && E.id ? g.messages.find((z) => z.id === E.id) : null,
                        de =
                            !T || !T.type || T.type === "text"
                                ? null
                                : T.type === "sticker"
                                  ? { type: "sticker", text: "[动画表情]", img: T.content || "" }
                                  : T.type === "text_image"
                                    ? { type: "text_image", text: "[照片]", img: T.imgRef || "" }
                                    : { type: "card", text: String(Ft(T) || "").trim() || "[消息]" };
                    return {
                        ...u,
                        kind: "text",
                        content: `${q}${t.content}`,
                        ...(E
                            ? {
                                  quote: {
                                      name: E.name,
                                      text: de
                                          ? de.text
                                          : T
                                            ? String(T.content || "").slice(0, 80)
                                            : E.content,
                                      ...(de ? { type: de.type, img: de.img || "" } : {}),
                                  },
                              }
                            : {}),
                    };
                }
            }
        }),
        C = ie ? g.messages.find((t) => t.id === ie) : null,
        ze = (t) => {
            var n, o;
            return t === "me"
                ? { name: g.myAlias || Z, avatar: (n = d.me) == null ? void 0 : n.avatar, local: !0 }
                : {
                      name: k(t),
                      avatar: (o = f.find((r) => r.id === t)) == null ? void 0 : o.avatar,
                      local: !0,
                  };
        },
        $t = C ? (C.grabs || []).map((t) => ({ ...t, ...ze(t.who) })) : [],
        Ve = te.map((t) => ({ key: t.id, name: G(g, t), avatar: re(t), local: !0 }));
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(ps, {
                title: `${J}(${te.length + 1})`,
                subtitle: g.muted ? "免打扰" : "",
                faces: te.slice(0, 4).map((t) => ({ name: G(g, t), avatar: re(t), local: !0 })),
                groupAvatar: g.avatar || "",
                groupAvatarLocal: !0,
                onBack: v,
                onMore: () => se(!0),
                items: kt,
                typing: P
                    ? [
                          {
                              key: P,
                              name: k(P),
                              avatar: (et = f.find((t) => t.id === P)) == null ? void 0 : et.avatar,
                          },
                      ]
                    : I
                      ? [{ key: "__group", name: "群里有人在输入" }]
                      : [],
                note: he,
                placeholder: "",
                active: !V,
                notice: g.notice || "",
                top: e.jsx(e.Fragment, {
                    children:
                        !g.messages.length &&
                        e.jsxs("div", {
                            className: "gc-empty",
                            children: ["这个群还没有人说话。", e.jsx("br", {}), "你先开个头，看看谁会接。"],
                        }),
                }),
                plusItems: [
                    {
                        label: "红包转账",
                        icon: e.jsx(Zt, { size: 26, weight: "regular" }),
                        onClick: () => Q("money"),
                    },
                    {
                        label: "文字图",
                        icon: e.jsx(es, { size: 26, weight: "regular" }),
                        onClick: () => M("photo"),
                    },
                    {
                        label: "定位",
                        icon: e.jsx(ts, { size: 26, weight: "regular" }),
                        onClick: () => M("loc"),
                    },
                    {
                        label: "礼物",
                        icon: e.jsx(ss, { size: 26, weight: "regular" }),
                        onClick: () => M("gift"),
                    },
                    {
                        label: "插入旁白",
                        icon: e.jsx(as, { size: 26, weight: "regular" }),
                        onClick: () => M("narr"),
                    },
                    {
                        label: "继续",
                        icon: e.jsx(ns, { size: 26, weight: "regular" }),
                        onClick: () => X([], { mode: "follow" }),
                    },
                    {
                        label: "群设置",
                        icon: e.jsx(os, { size: 26, weight: "regular" }),
                        onClick: () => se(!0),
                    },
                ],
                onSend: _e,
                onVoice: Ie,
                onSticker: ke,
                onCardTap: m,
                members: te.map((t) => ({
                    key: t.id,
                    name: G(g, t),
                    avatar: re(t),
                    local: !0,
                    ref: t.id,
                    tag: Oe(g, t.id) !== "member" ? bt[Oe(g, t.id)] : "",
                })),
                canAtAll: g.ownerId === "me" || g.adminIds.includes("me"),
                readOnly: g.left
                    ? "你已退出该群聊，无法发送消息"
                    : g.mutedIds.includes("me")
                      ? "你已被禁言"
                      : zt(g, "me")
                        ? null
                        : "全员禁言中，只有群主和管理员可以发言",
            }),
            e.jsx(Vt, {
                open: K === "money",
                group: !0,
                onClose: () => Q((t) => (t === "money" ? null : t)),
                onPick: (t) => Q(t),
            }),
            e.jsx(hs, {
                open: K === "packet",
                onClose: () => Q(null),
                onSend: Me,
                people: te.length + 1,
                balance: be(d, "me"),
                targets: Ve,
            }),
            K === "collect" && e.jsx(Bt, { group: { targets: Ve }, onClose: () => Q(null), onSend: qe }),
            (() => {
                const t = ve ? g.messages.find((n) => n.id === ve) : null;
                return t
                    ? e.jsx(Ut, {
                          m: t,
                          faceOf: ze,
                          onEnd: t.role === "user" ? () => Ae(t.id) : null,
                          onClose: () => ye(null),
                      })
                    : null;
            })(),
            e.jsx(fs, {
                open: K === "transfer",
                onClose: () => Q(null),
                onSend: a,
                targets: Ve,
                balance: be(d, "me"),
            }),
            e.jsx(xs, {
                open: !!C,
                onClose: () => Ne(null),
                sender: C ? ze(C.role === "user" ? "me" : C.charId) : null,
                note: C == null ? void 0 : C.content,
                total: C == null ? void 0 : C.total,
                count: C == null ? void 0 : C.count,
                mode: C == null ? void 0 : C.mode,
                toName: C != null && C.to ? (C.to === "me" ? "你" : k(C.to)) : "",
                state: C
                    ? Je({ count: C.count, createdAt: C.createdAt, grabs: C.grabs || [], me: "me", to: C.to })
                    : null,
                grabs: $t,
                mineIsSender: (C == null ? void 0 : C.role) === "user",
                onGrab: async () => {
                    if (Ce(C.id, "me") == null) throw new Error("手慢了，红包派完了");
                },
            }),
            e.jsx(Wt, {
                open: !!$,
                onClose: () => l(null),
                title: $ ? `${k($.charId)} 转给你 ¥${ct($.amount)}` : "",
                message: ($ == null ? void 0 : $.note) || "",
                actions: $
                    ? [
                          {
                              label: "收款",
                              onClick: () => {
                                  const t = $;
                                  (l(null), c(t, "accept"));
                              },
                          },
                          {
                              label: "退还",
                              destructive: !0,
                              onClick: () => {
                                  const t = $;
                                  (l(null), c(t, "reject"));
                              },
                          },
                      ]
                    : [],
            }),
            e.jsx(ks, {
                kind: ue,
                onClose: () => M(null),
                members: te.map((t) => ({ id: t.id, name: G(g, t), avatar: re(t) })),
                onSend: (t, { reply: n = !0 } = {}) => {
                    M(null);
                    const o = { id: W("gm_"), role: "user", createdAt: Date.now(), ...t };
                    (H(o), n && X([o]));
                },
            }),
            V &&
                e.jsx(Ns, {
                    groupId: i,
                    onClose: () => se(!1),
                    onLeft: () => {
                        (se(!1), v == null || v());
                    },
                }),
        ],
    });
}
export { Ps as default };
