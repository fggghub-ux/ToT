import { r as y, j as e, R as Ie } from "./vendor-react-3a46a5d3.js";
import {
    u as $,
    a as q,
    b5 as ue,
    b6 as $e,
    b7 as Me,
    A as oe,
    b8 as F,
    b9 as de,
    ba as Re,
    bb as De,
    c as Y,
    f as U,
    bc as Z,
    bd as Be,
    be as Ee,
    bf as je,
    bg as Fe,
    bh as Pe,
    bi as Le,
    l as Q,
    bj as We,
    bk as He,
    bl as _e,
    bm as Ge,
    bn as Oe,
    p as Ye,
    bo as Je,
    bp as Ve,
} from "./app-2c902988.js";
import {
    ap as qe,
    cG as Ke,
    a_ as Ue,
    b as W,
    S as he,
    a as pe,
    aZ as H,
    aC as xe,
    aH as be,
    cm as J,
    cH as fe,
    aO as Ze,
    au as ge,
    Z as Qe,
    am as Xe,
    cI as es,
    P as ye,
    ac as ss,
    V as as,
} from "./vendor-icons-e63d3118.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const ts = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    ns = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    P = (a) => String(a).padStart(2, "0"),
    D = (a) => {
        const s = new Date(a);
        return `${s.getFullYear()}-${P(s.getMonth() + 1)}-${P(s.getDate())} ${P(s.getHours())}:${P(s.getMinutes())}`;
    },
    Ne = (a) => {
        const s = new Date(a);
        return `${P(s.getHours())}:${P(s.getMinutes())}`;
    };
function is() {
    const { state: a } = $();
    return (s) => {
        var r, l, c;
        const t = typeof s == "string" ? s : s.author === "me" ? "me" : s.charId;
        if (t === "me") {
            const m = (a.accounts || []).find((j) => j.id === a.activeAccountId);
            return {
                id: "me",
                name: De(a.me) || "我",
                handle: (m == null ? void 0 : m.handle) || ((r = a.me) == null ? void 0 : r.wechatId) || "me",
                avatar: ((l = a.me) == null ? void 0 : l.avatar) || null,
                line: ((c = a.me) == null ? void 0 : c.signature) || "",
            };
        }
        const i = (a.characters || []).find((m) => m.id === t);
        return {
            id: t,
            name: Y(i) || "TA",
            handle:
                (i == null ? void 0 : i.wechatId) ||
                (i != null && i.name ? String(i.name).toLowerCase() : "ta"),
            avatar: (i == null ? void 0 : i.avatar) || null,
            line: (i == null ? void 0 : i.signature) || "",
            char: i,
        };
    };
}
function B({ src: a, name: s, size: t = 40 }) {
    return e.jsx("span", {
        className: "ic-av",
        style: { width: t, height: t },
        children: a
            ? e.jsx(Q, { src: a, alt: "" })
            : e.jsx("b", {
                  style: { fontSize: Math.round(t * 0.4) },
                  children: String(s || "·").slice(0, 1),
              }),
    });
}
function vs({ onBack: a, onOpenChat: s }) {
    var re;
    const { state: t, patch: i, patchChar: r } = $(),
        l = q(),
        c = is(),
        m = ue(),
        j = $e(t),
        d = y.useMemo(() => new Set((t.characters || []).map((n) => n.id)), [t.characters]),
        p = d.has(t.icitySpace)
            ? t.icitySpace
            : ((re = (t.characters || [])[0]) == null ? void 0 : re.id) || null,
        o = (n) => i({ icitySpace: n }),
        g = y.useMemo(
            () =>
                j.entries
                    .filter((n) => (n.author === "me" || d.has(n.charId)) && (!p || Me(n, p)))
                    .sort((n, f) => f.createdAt - n.createdAt),
            [j.entries, d, p],
        ),
        [N, z] = y.useState("home"),
        [u, v] = y.useState([]),
        b = u[u.length - 1] || null,
        h = (n) => v((f) => [...f, n]),
        x = () => v((n) => n.slice(0, -1)),
        [T, S] = y.useState(!1),
        [w, M] = y.useState(null),
        [_, se] = y.useState(null),
        [L, G] = y.useState(null),
        [R, ae] = y.useState(null),
        [te, ne] = y.useState(null),
        ie = (n) => {
            var C;
            if (n.author !== "char" || ((C = n.readBy) != null && C.me)) return;
            const f = Date.now();
            F(i, n.id, (I) => ({ readBy: { ...(I.readBy || {}), me: f } }));
            const k = (t.characters || []).find((I) => I.id === n.charId);
            (k &&
                r(k.id, (I) => ({
                    messages: [
                        ...(I.messages || []),
                        {
                            id: U("m_"),
                            role: "system",
                            type: "system",
                            createdAt: f,
                            content: `你看了 ${Y(k)} ${D(n.createdAt).slice(5)} 写的${n.private ? "私密" : ""}日记 —— TA 知道你看过`,
                        },
                    ],
                })),
                G({ entry: n, at: f }));
        },
        we = (n) => {
            var f;
            if (n.author === "char" && n.private && !((f = n.readBy) != null && f.me)) {
                se(n);
                return;
            }
            (ie(n), h({ name: "detail", id: n.id }));
        },
        Ae = () => {
            if (!L) return;
            const { entry: n, at: f } = L;
            (r(n.charId, () => ({ icityTalk: { entryId: n.id, at: f } })), G(null), s == null || s(n.charId));
        },
        ce = (n) => {
            const f = c(n);
            ae({
                card: {
                    platform: "icity",
                    kind: "diary",
                    text: n.text,
                    author: { name: f.name, handle: f.handle, avatar: f.avatar },
                    image: (n.images || [])[0] || "",
                    meta: [D(n.createdAt), n.private ? "私密" : "", n.location].filter(Boolean).join(" · "),
                    refId: n.id,
                    ownerId: n.author === "me" ? "me" : n.charId,
                },
                defaultCharId: n.author === "char" ? n.charId : null,
            });
        },
        Se = (n) => {
            n.author === "char" &&
                F(i, n.id, (f) => {
                    const k = { ...(f.likes || {}) };
                    return (k.me ? delete k.me : (k.me = Date.now()), { likes: k });
                });
        },
        ze = (n) => Z(i, (f) => ({ ...f, entries: f.entries.filter((k) => k.id !== n.id) })),
        K = async (n, f) => {
            const k = (t.characters || []).find((I) => I.id === n);
            if (!k) return;
            const C = await m.run((I) => Be(t, i, k, { privacy: f, signal: I }));
            C != null && C.aborted
                ? l("已停止")
                : C != null && C.error
                  ? l(C.error.message, "error")
                  : C != null && C.value && l(`${Y(k)} 写了一篇${C.value.private ? "私密" : ""}日记`);
        },
        Te = async (n) => {
            if (!n || n.private || !n.forCharId) return;
            const f = (t.characters || []).find((C) => C.id === n.forCharId);
            if (!f) return;
            const k = await m.run((C) => Ee(t, i, f, n, { signal: C }));
            k != null && k.aborted ? l("已停止") : k != null && k.error && l(k.error.message, "error");
        },
        O = {
            entries: g,
            who: c,
            openEntry: we,
            shareEntry: ce,
            toggleLike: Se,
            push: h,
            pop: x,
            space: p,
            setSpace: o,
            openMenu: ne,
            openPerson: (n) => (n === "me" ? (z("mine"), v([])) : h({ name: "person", charId: n })),
            compose: () => S(!0),
            askWrite: M,
            busy: m.busy,
            stop: m.stop,
        },
        le = (b == null ? void 0 : b.name) === "detail" ? g.find((n) => n.id === b.id) : null;
    let E;
    (b == null ? void 0 : b.name) === "detail"
        ? (E = le ? e.jsx(us, { ctx: O, entry: le }) : e.jsx(js, { onBack: x }))
        : (b == null ? void 0 : b.name) === "person"
          ? (E = e.jsx(ms, { ctx: O, charId: b.charId }))
          : (b == null ? void 0 : b.name) === "settings"
            ? (E = e.jsx(xs, { charId: b.charId, onBack: x }))
            : N === "home"
              ? (E = e.jsx(cs, { ctx: O, onBack: a }))
              : (E = e.jsx(ve, {
                    ctx: O,
                    title: p ? `写给 ${c(p).name}` : `${c("me").name} · 日记`,
                    list: g.filter((n) => n.author === "me"),
                    onBack: a,
                    backIsExit: !0,
                }));
    const A = te ? g.find((n) => n.id === te) : null;
    return e.jsxs("div", {
        className: "ic-shell",
        children: [
            e.jsx("div", { className: "ic-body", children: E }),
            !b &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx("button", {
                            className: "ic-fab btn-plain",
                            onClick: () => S(!0),
                            "aria-label": "写日记",
                            children: e.jsx(qe, { size: 22 }),
                        }),
                        e.jsxs("nav", {
                            className: "ic-tabbar",
                            children: [
                                e.jsx("button", {
                                    className: N === "home" ? "on" : "",
                                    onClick: () => z("home"),
                                    "aria-label": "首页",
                                    children: e.jsx(Ke, {
                                        size: 25,
                                        fill: N === "home" ? "currentColor" : "none",
                                    }),
                                }),
                                e.jsx("button", {
                                    className: N === "mine" ? "on" : "",
                                    onClick: () => z("mine"),
                                    "aria-label": "日记",
                                    children: e.jsx(Ue, {
                                        size: 25,
                                        fill: N === "mine" ? "currentColor" : "none",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            e.jsx(ps, {
                open: T,
                onClose: () => S(!1),
                space: p,
                spaceName: p ? c(p).name : "",
                onPublished: Te,
            }),
            e.jsx(oe, {
                open: !!w,
                onClose: () => M(null),
                title: w ? `让 ${c(w).name} 现在写一篇` : "",
                actions: [
                    { label: "TA 自己决定公开还是私密", onClick: () => K(w, "auto") },
                    { label: "公开", sub: "写的时候知道你会看", onClick: () => K(w, "public") },
                    {
                        label: "私密",
                        sub: "你要点开才看得到，点开 TA 会知道",
                        onClick: () => K(w, "private"),
                    },
                ],
            }),
            e.jsx(oe, {
                open: !!A,
                onClose: () => ne(null),
                title: A ? D(A.createdAt) : "",
                actions: A
                    ? [
                          { label: "转发到聊天", onClick: () => ce(A) },
                          A.author === "me" &&
                              !A.forCharId &&
                              p && {
                                  label: `只给 ${c(p).name} 看`,
                                  sub: "这篇是旧日记，目前所有人都能看到",
                                  onClick: () => F(i, A.id, () => ({ forCharId: p })),
                              },
                          A.author === "me" && {
                              label: A.private ? "改为公开" : "改为私密",
                              sub: A.private ? "TA 之后会读到" : "TA 读过的不会因此忘掉",
                              onClick: () => F(i, A.id, (n) => ({ private: !n.private })),
                          },
                          A.author === "char" && {
                              label: `和 ${c(A).name} 聊聊这篇`,
                              onClick: () => {
                                  G({ entry: A, at: Date.now() });
                              },
                          },
                          {
                              label: "删除",
                              destructive: !0,
                              onClick: () => {
                                  (ze(A), (b == null ? void 0 : b.name) === "detail" && x());
                              },
                          },
                      ].filter(Boolean)
                    : [],
            }),
            e.jsx(de, {
                open: !!_,
                onClose: () => se(null),
                title: "这是一篇私密日记",
                message: _ ? `${c(_).name} 没打算给你看。点开的话，TA 会知道你看过。` : "",
                cancelLabel: "不看了",
                confirm: {
                    label: "看",
                    onClick: () => {
                        const n = _;
                        (ie(n), h({ name: "detail", id: n.id }));
                    },
                },
            }),
            e.jsx(de, {
                open: !!L,
                onClose: () => G(null),
                title: L ? `${c(L.entry).name} 知道你看了` : "",
                message: "要去聊天吗？TA 会先开口。",
                cancelLabel: "先不",
                confirm: { label: "去聊天", onClick: Ae },
            }),
            e.jsx(Re, {
                open: !!R,
                onClose: () => ae(null),
                card: R == null ? void 0 : R.card,
                defaultCharId: R == null ? void 0 : R.defaultCharId,
            }),
        ],
    });
}
function cs({ ctx: a, onBack: s }) {
    const { state: t } = $(),
        [i, r] = y.useState(null),
        l = a.entries.find((o) => o.author === "char"),
        c = a.space ? a.who(a.space) : null,
        m = c
            ? c.line ||
              (l && !l.private
                  ? String(l.text).split(`
`)[0]
                  : "")
            : "",
        j = String(i || "").trim(),
        d = j
            ? a.entries.filter((o) => {
                  var g;
                  return (
                      !(o.author === "char" && o.private && !((g = o.readBy) != null && g.me)) &&
                      o.text.includes(j)
                  );
              })
            : a.entries,
        p = (t.characters || []).slice(0, 8);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("header", {
                className: "ic-top",
                children: [
                    e.jsx("button", {
                        className: "ic-top-back btn-plain",
                        onClick: s,
                        "aria-label": "返回桌面",
                        children: e.jsx(W, { size: 24 }),
                    }),
                    e.jsx("span", { className: "ic-logo", children: "iCity" }),
                    e.jsx("button", {
                        className: "ic-top-icon btn-plain",
                        "aria-label": "搜索",
                        onClick: () => r((o) => (o === null ? "" : null)),
                        children: i === null ? e.jsx(he, { size: 22 }) : e.jsx(pe, { size: 22 }),
                    }),
                ],
            }),
            i !== null &&
                e.jsxs("div", {
                    className: "ic-search",
                    children: [
                        e.jsx(he, { size: 15 }),
                        e.jsx("input", {
                            autoFocus: !0,
                            value: i,
                            onChange: (o) => r(o.target.value),
                            placeholder: "搜日记里的字",
                        }),
                    ],
                }),
            e.jsxs("div", {
                className: "ic-scroll",
                children: [
                    p.length > 1 &&
                        e.jsx("div", {
                            className: "ic-people",
                            role: "tablist",
                            "aria-label": "切换日记空间",
                            children: p.map((o) => {
                                const g = a.who(o.id),
                                    N = o.id === a.space;
                                return e.jsxs(
                                    "button",
                                    {
                                        className: `btn-plain ${N ? "on" : ""}`,
                                        role: "tab",
                                        "aria-selected": N,
                                        onClick: () => a.setSpace(o.id),
                                        children: [
                                            e.jsx("span", {
                                                className: "ic-people-ring",
                                                children: e.jsx(B, { src: g.avatar, name: g.name, size: 40 }),
                                            }),
                                            e.jsx("span", { children: g.name }),
                                        ],
                                    },
                                    o.id,
                                );
                            }),
                        }),
                    !j &&
                        c &&
                        m &&
                        e.jsxs("button", {
                            className: "ic-status btn-plain",
                            onClick: () => a.openPerson(c.id),
                            children: [
                                e.jsx(B, { src: c.avatar, name: c.name, size: 46 }),
                                e.jsxs("span", {
                                    className: "ic-status-copy",
                                    children: [
                                        e.jsx("small", { children: c.name }),
                                        e.jsx("b", { children: m.slice(0, 40) }),
                                    ],
                                }),
                            ],
                        }),
                    d.length === 0
                        ? e.jsxs("div", {
                              className: "ic-empty",
                              children: [
                                  e.jsx("b", { children: j ? "没有搜到" : "还没有日记" }),
                                  !j &&
                                      e.jsxs("span", {
                                          children: [
                                              "点右下角写一篇，只有 ",
                                              (c == null ? void 0 : c.name) || "TA",
                                              " 看得到；也可以进 TA 的日记页，让 TA 写一篇。",
                                          ],
                                      }),
                                  !j &&
                                      a.space &&
                                      e.jsxs("button", {
                                          className: "ic-empty-btn btn-plain",
                                          onClick: () => a.openPerson(a.space),
                                          children: ["去 ", a.who(a.space).name, " 的日记"],
                                      }),
                              ],
                          })
                        : d.map((o) => e.jsx(os, { ctx: a, entry: o }, o.id)),
                ],
            }),
        ],
    });
}
function X({ list: a }) {
    return a != null && a.length
        ? e.jsx("div", {
              className: `ic-imgs n${Math.min(a.length, 3)}`,
              children: a
                  .slice(0, 9)
                  .map((s, t) => e.jsx("span", { children: e.jsx(Q, { src: s, alt: "" }) }, t)),
          })
        : null;
}
function ke({ w: a }) {
    return e.jsxs("div", {
        className: "ic-locked",
        children: [
            e.jsx(H, { size: 16 }),
            e.jsxs("span", { children: [a.name, " 的私密日记"] }),
            e.jsx("small", { children: "点开的话 TA 会知道" }),
        ],
    });
}
const me = e.jsxs("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": !0,
        children: [
            e.jsx("path", { d: "M4 5h9M8.5 3v2M6 5c.6 3.4 2.6 6 5.5 7.5M11 5c-.8 3.6-3.2 6.6-7 8" }),
            e.jsx("path", { d: "M12.5 21l4-10 4 10M14 17.5h5" }),
        ],
    }),
    ls = [
        [/[\uac00-\ud7af]/, "韩语"],
        [/[\u3040-\u30ff]/, "日语"],
        [/[\u0400-\u04ff]/, "俄语"],
        [/[\u0e00-\u0e7f]/, "泰语"],
        [/[\u0600-\u06ff]/, "阿拉伯语"],
    ];
function rs(a, s) {
    var i;
    try {
        const r = (i = Je(s)) == null ? void 0 : i.outputLanguage;
        if (r && r !== "中文") return r;
    } catch {}
    const t = ls.find(([r]) => r.test(a));
    return t ? t[1] : "外文";
}
function V({ text: a, tr: s, charId: t, className: i = "ic-text" }) {
    const { state: r } = $(),
        l = q(),
        c = He(a, s),
        m = !!t && t !== "me" && _e(c.text),
        [j, d] = y.useState(!1),
        [p, o] = y.useState(() => c.tr || (m ? Ge(c.text, t) : "")),
        [g, N] = y.useState(!1);
    if (!m) return e.jsx("p", { className: i, children: c.text });
    const z = async (u) => {
        var v, b;
        if ((u.stopPropagation(), !g)) {
            if (p) {
                d(!0);
                return;
            }
            if (!((b = (v = r.api) == null ? void 0 : v.chat) != null && b.baseUrl)) {
                l("先在 API 设置里配好聊天通道", "error");
                return;
            }
            N(!0);
            try {
                const h = await Ve(r, c.text, t);
                if (!h) {
                    l("未能翻译", "error");
                    return;
                }
                (o(h), d(!0));
            } catch {
                l("翻译失败", "error");
            } finally {
                N(!1);
            }
        }
    };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("p", { className: i, children: c.text }),
            j
                ? e.jsxs(e.Fragment, {
                      children: [
                          e.jsxs("div", {
                              className: "ic-tr-tag",
                              onClick: (u) => u.stopPropagation(),
                              children: [
                                  e.jsxs("span", { children: [me, "译自", rs(c.text, t)] }),
                                  e.jsx("button", {
                                      type: "button",
                                      className: "btn-plain",
                                      onClick: (u) => {
                                          (u.stopPropagation(), d(!1));
                                      },
                                      children: "收起",
                                  }),
                              ],
                          }),
                          e.jsx("p", { className: `${i} ic-tr-text`, children: p }),
                      ],
                  })
                : e.jsx("div", {
                      className: "ic-tr-tag",
                      onClick: (u) => u.stopPropagation(),
                      children: e.jsxs("button", {
                          type: "button",
                          className: "btn-plain ic-tr-open",
                          onClick: z,
                          children: [me, g ? "翻译中…" : "查看翻译"],
                      }),
                  }),
        ],
    });
}
function os({ ctx: a, entry: s }) {
    var m, j;
    const t = a.who(s),
        i = new Date(s.createdAt),
        r = s.author === "char" && s.private && !((m = s.readBy) != null && m.me),
        l =
            s.author === "char"
                ? !!((j = s.likes) != null && j.me)
                : Object.keys(s.likes || {}).some((d) => d !== "me"),
        c = (s.notes || []).length;
    return e.jsxs("article", {
        className: "ic-fcard",
        children: [
            e.jsxs("header", {
                className: "ic-fcard-head",
                children: [
                    e.jsx("button", {
                        className: "btn-plain",
                        onClick: () => a.openPerson(t.id),
                        children: e.jsx(B, { src: t.avatar, name: t.name, size: 44 }),
                    }),
                    e.jsxs("div", {
                        className: "ic-fcard-who",
                        children: [
                            e.jsx("b", { children: t.name }),
                            e.jsxs("span", { children: ["@", t.handle] }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "ic-fcard-date",
                        children: [
                            e.jsxs("span", {
                                children: [i.getMonth() + 1, "月", i.getDate(), "日 · ", ts[i.getDay()]],
                            }),
                            e.jsx("small", { children: i.getFullYear() }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "ic-fcard-body",
                onClick: () => a.openEntry(s),
                children: [
                    r
                        ? e.jsx(ke, { w: t })
                        : e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx(V, {
                                      text: s.text,
                                      tr: s.tr,
                                      charId: s.author === "char" ? s.charId : null,
                                      className: "ic-text clamp",
                                  }),
                                  e.jsx(X, { list: s.images }),
                              ],
                          }),
                    e.jsxs("div", {
                        className: "ic-fcard-acts",
                        onClick: (d) => d.stopPropagation(),
                        children: [
                            s.private &&
                                e.jsx("span", { className: "ic-ico", children: e.jsx(H, { size: 19 }) }),
                            e.jsx("button", {
                                className: `ic-ico btn-plain ${l ? "liked" : ""}`,
                                onClick: () => a.toggleLike(s),
                                "aria-label": "喜欢",
                                children: e.jsx(xe, { size: 19, fill: l ? "currentColor" : "none" }),
                            }),
                            e.jsxs("button", {
                                className: "ic-ico btn-plain",
                                onClick: () => a.openEntry(s),
                                "aria-label": "小纸条",
                                children: [e.jsx(be, { size: 19 }), c > 0 && e.jsx("i", { children: c })],
                            }),
                            e.jsxs("span", {
                                className: "ic-ico ic-clock",
                                children: [e.jsx(J, { size: 19 }), Ne(s.createdAt)],
                            }),
                            e.jsx("button", {
                                className: "ic-ico btn-plain",
                                onClick: () => a.openMenu(s.id),
                                "aria-label": "更多",
                                children: e.jsx(fe, { size: 19 }),
                            }),
                        ],
                    }),
                ],
            }),
            s.author === "me" && e.jsx(ee, { ctx: a, entry: s }),
        ],
    });
}
function ee({ ctx: a, entry: s }) {
    if (s.private) return null;
    const t = Object.keys(s.readBy || {}).filter((l) => l !== "me");
    if (!t.length) return null;
    const i = t.map((l) => a.who(l).name).join("、"),
        r = Math.max(...t.map((l) => s.readBy[l]));
    return e.jsxs("div", { className: "ic-seen", children: [i, " 看过 · ", D(r).slice(5)] });
}
function ds(a) {
    const s = [];
    for (const t of a) {
        const i = new Date(t.createdAt),
            r = `${ns[i.getMonth()]} ${i.getFullYear()}`;
        ((!s.length || s[s.length - 1].key !== r) && s.push({ key: r, list: [] }),
            s[s.length - 1].list.push(t));
    }
    return s;
}
function ve({
    ctx: a,
    title: s,
    list: t,
    onBack: i,
    right: r = null,
    backIsExit: l = !1,
    headExtra: c = null,
}) {
    const m = ds(t);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("header", {
                className: "ic-sub",
                children: [
                    e.jsx("button", {
                        className: "ic-top-back btn-plain",
                        onClick: i,
                        "aria-label": l ? "返回桌面" : "返回",
                        children: e.jsx(W, { size: 24 }),
                    }),
                    e.jsx("b", { children: s }),
                    e.jsx("span", { className: "ic-sub-right", children: r }),
                ],
            }),
            e.jsxs("div", {
                className: "ic-scroll",
                children: [
                    c,
                    t.length === 0 &&
                        e.jsx("div", {
                            className: "ic-empty",
                            children: e.jsx("b", { children: "还没有日记" }),
                        }),
                    m.map((j, d) =>
                        e.jsxs(
                            "section",
                            {
                                children: [
                                    d > 0 || m.length > 1
                                        ? e.jsx("div", { className: "ic-month", children: j.key })
                                        : null,
                                    j.list.map((p) => e.jsx(hs, { ctx: a, entry: p }, p.id)),
                                ],
                            },
                            j.key,
                        ),
                    ),
                ],
            }),
        ],
    });
}
function Ce({ ctx: a, entry: s }) {
    var l;
    const t =
            s.author === "char"
                ? !!((l = s.likes) != null && l.me)
                : Object.keys(s.likes || {}).some((c) => c !== "me"),
        i = s.author === "me" && t ? `喜欢 ${Object.keys(s.likes).filter((c) => c !== "me").length}` : "喜欢",
        r = (s.notes || []).length;
    return e.jsxs("div", {
        className: "ic-acts",
        children: [
            e.jsxs("button", {
                className: `btn-plain ${t ? "liked" : ""}`,
                onClick: () => a.toggleLike(s),
                disabled: s.author === "me",
                children: [
                    e.jsx(xe, { size: 20, fill: t ? "currentColor" : "none" }),
                    e.jsx("span", { children: i }),
                ],
            }),
            e.jsx("i", {}),
            e.jsxs("button", {
                className: "btn-plain",
                onClick: () => a.openEntry(s),
                children: [
                    e.jsxs("span", {
                        className: "ic-note-ico",
                        children: [e.jsx(be, { size: 19 }), e.jsx(ye, { size: 10, strokeWidth: 3 })],
                    }),
                    e.jsxs("span", { children: ["小纸条", r ? ` ${r}` : ""] }),
                ],
            }),
            e.jsx("i", {}),
            e.jsxs("button", {
                className: "btn-plain",
                onClick: () => a.shareEntry(s),
                children: [e.jsx(ss, { size: 19 }), e.jsx("span", { children: "转发" })],
            }),
            e.jsx("i", {}),
            e.jsx("button", {
                className: "btn-plain ic-acts-more",
                onClick: () => a.openMenu(s.id),
                "aria-label": "更多",
                children: e.jsx(as, { size: 20 }),
            }),
        ],
    });
}
function hs({ ctx: a, entry: s }) {
    var r;
    const t = a.who(s),
        i = s.author === "char" && s.private && !((r = s.readBy) != null && r.me);
    return e.jsxs("article", {
        className: "ic-dcard",
        children: [
            e.jsxs("div", {
                className: "ic-dcard-who",
                onClick: () => a.openEntry(s),
                children: [
                    e.jsx(B, { src: t.avatar, name: t.name, size: 46 }),
                    e.jsxs("div", {
                        children: [
                            e.jsx("b", { children: t.name }),
                            e.jsxs("span", { children: ["@", t.handle] }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "ic-dcard-body",
                onClick: () => a.openEntry(s),
                children: i
                    ? e.jsx(ke, { w: t })
                    : e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(V, {
                                  text: s.text,
                                  tr: s.tr,
                                  charId: s.author === "char" ? s.charId : null,
                                  className: "ic-text clamp",
                              }),
                              e.jsx(X, { list: s.images }),
                          ],
                      }),
            }),
            e.jsxs("div", {
                className: "ic-dcard-meta",
                children: [
                    e.jsxs("span", { children: [e.jsx(J, { size: 16 }), D(s.createdAt)] }),
                    s.private &&
                        e.jsxs("span", {
                            className: "ic-private",
                            children: [e.jsx(H, { size: 16 }), "私密"],
                        }),
                ],
            }),
            s.author === "me" && e.jsx(ee, { ctx: a, entry: s }),
            e.jsx(Ce, { ctx: a, entry: s }),
        ],
    });
}
function ms({ ctx: a, charId: s }) {
    const t = a.who(s),
        i = a.entries.filter((c) => c.author === "char" && c.charId === s),
        { state: r } = $(),
        l = je(r, s);
    return e.jsx(ve, {
        ctx: a,
        title: `${t.name} · 日记`,
        list: i,
        onBack: a.pop,
        right: e.jsx("button", {
            className: "ic-top-icon btn-plain",
            onClick: () => a.push({ name: "settings", charId: s }),
            "aria-label": "定时",
            children: e.jsx(Ze, { size: 21 }),
        }),
        headExtra: e.jsxs("div", {
            className: "ic-person",
            children: [
                e.jsx(B, { src: t.avatar, name: t.name, size: 60 }),
                e.jsxs("div", {
                    className: "ic-person-copy",
                    children: [
                        e.jsx("b", { children: t.name }),
                        e.jsxs("span", { children: ["@", t.handle, " · ", i.length, " 篇日记"] }),
                        e.jsx("small", {
                            children: l.times.length ? `每天 ${l.times.join("、")} 写` : "没有设定时间",
                        }),
                    ],
                }),
                e.jsx("button", {
                    className: `ic-person-btn btn-plain ${a.busy ? "busy" : ""}`,
                    onClick: () => (a.busy ? a.stop() : a.askWrite(s)),
                    children: a.busy ? "正在写… 点这里停下" : "让 TA 写一篇",
                }),
            ],
        }),
    });
}
function us({ ctx: a, entry: s }) {
    var u, v, b;
    const { state: t, patch: i } = $(),
        r = q(),
        l = ue(),
        c = a.who(s),
        [m, j] = y.useState(""),
        d = y.useRef(null),
        p =
            s.author === "char"
                ? s.charId
                : ((u = (s.notes || []).filter((h) => h.by !== "me").slice(-1)[0]) == null ? void 0 : u.by) ||
                  s.replyCharId ||
                  t.activeCharId ||
                  ((v = (t.characters || [])[0]) == null ? void 0 : v.id),
        o = (t.characters || []).find((h) => h.id === p),
        g = o && (s.author === "char" || Fe(o, s)),
        N = async () => {
            const h = m.trim();
            if (!h) return;
            j("");
            const x = { id: U("icn_"), by: "me", text: h, at: Date.now(), pending: !!g };
            if (
                (F(i, s.id, (w) => ({
                    notes: [...(w.notes || []), x],
                    ...(w.author === "me" && g ? { replyCharId: p } : null),
                })),
                !g)
            )
                return;
            const T = { ...s, notes: [...(s.notes || []), x] },
                S = await l.run((w) => Oe(t, i, o, T, { signal: w }));
            S != null && S.error && r("TA 暂时没回，稍后会在后台再试", "error");
        },
        z = (h) => F(i, s.id, (x) => ({ notes: (x.notes || []).filter((T) => T.id !== h) }));
    return e.jsxs("div", {
        className: "ic-detail",
        children: [
            e.jsxs("header", {
                className: "ic-sub",
                children: [
                    e.jsx("button", {
                        className: "ic-top-back btn-plain",
                        onClick: a.pop,
                        "aria-label": "返回",
                        children: e.jsx(W, { size: 24 }),
                    }),
                    e.jsxs("b", { children: [c.name, " · 日记"] }),
                    e.jsx("span", { className: "ic-sub-right" }),
                ],
            }),
            e.jsx("div", {
                className: "ic-scroll",
                children: e.jsxs("article", {
                    className: "ic-dcard detail",
                    children: [
                        e.jsxs("div", {
                            className: "ic-dcard-who",
                            onClick: () => a.openPerson(c.id),
                            children: [
                                e.jsx(B, { src: c.avatar, name: c.name, size: 50 }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("b", { children: c.name }),
                                        e.jsxs("span", { children: ["@", c.handle] }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx(V, {
                            text: s.text,
                            tr: s.tr,
                            charId: s.author === "char" ? s.charId : null,
                            className: "ic-text",
                        }),
                        e.jsx(X, { list: s.images }),
                        (s.location || s.weather) &&
                            e.jsxs("div", {
                                className: "ic-line",
                                children: [
                                    e.jsx(ge, { size: 16 }),
                                    [s.location, s.weather].filter(Boolean).join(" "),
                                ],
                            }),
                        e.jsxs("div", {
                            className: "ic-line",
                            children: [
                                e.jsx(J, { size: 16 }),
                                D(s.createdAt),
                                s.private &&
                                    e.jsxs("span", {
                                        className: "ic-private right",
                                        children: [e.jsx(H, { size: 15 }), "私密"],
                                    }),
                            ],
                        }),
                        s.author === "me" && e.jsx(ee, { ctx: a, entry: s }),
                        s.author === "char" &&
                            ((b = s.readBy) == null ? void 0 : b.me) &&
                            e.jsxs("div", {
                                className: "ic-seen",
                                children: ["你 ", D(s.readBy.me).slice(5), " 看过 · ", c.name, " 知道"],
                            }),
                        e.jsx(Ce, { ctx: a, entry: s }),
                        (s.notes || []).map((h) => {
                            const x = a.who(h.by === "me" ? "me" : h.by);
                            return e.jsxs(
                                "div",
                                {
                                    className: "ic-note",
                                    children: [
                                        e.jsx(B, { src: x.avatar, name: x.name, size: 40 }),
                                        e.jsxs("div", {
                                            className: "ic-note-copy",
                                            children: [
                                                e.jsxs("div", {
                                                    className: "ic-note-head",
                                                    children: [
                                                        e.jsx("b", { children: x.name }),
                                                        e.jsxs("span", {
                                                            children: [e.jsx(J, { size: 14 }), Ne(h.at)],
                                                        }),
                                                    ],
                                                }),
                                                e.jsx(V, {
                                                    text: h.text,
                                                    tr: h.tr,
                                                    charId: h.by !== "me" ? h.by : null,
                                                    className: "ic-note-text",
                                                }),
                                            ],
                                        }),
                                        h.by === "me" &&
                                            e.jsx("button", {
                                                className: "btn-plain ic-note-more",
                                                onClick: () => z(h.id),
                                                "aria-label": "删除",
                                                children: e.jsx(fe, { size: 17 }),
                                            }),
                                    ],
                                },
                                h.id,
                            );
                        }),
                        l.busy &&
                            e.jsxs("div", {
                                className: "ic-typing",
                                children: [o ? Y(o) : "TA", " 正在写小纸条…"],
                            }),
                    ],
                }),
            }),
            e.jsxs("div", {
                className: "ic-reply",
                children: [
                    e.jsx("input", {
                        ref: d,
                        value: m,
                        onChange: (h) => j(h.target.value),
                        placeholder: g ? "写张小纸条" : "写给自己（私密日记 TA 看不到）",
                        onKeyDown: (h) => {
                            h.key === "Enter" && N();
                        },
                    }),
                    e.jsxs("button", {
                        className: "btn-plain",
                        onClick: N,
                        disabled: !m.trim(),
                        children: [e.jsx(Qe, { size: 17 }), e.jsx("span", { children: "发送" })],
                    }),
                ],
            }),
        ],
    });
}
function js({ onBack: a }) {
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("header", {
                className: "ic-sub",
                children: [
                    e.jsx("button", {
                        className: "ic-top-back btn-plain",
                        onClick: a,
                        children: e.jsx(W, { size: 24 }),
                    }),
                    e.jsx("b", { children: "日记" }),
                    e.jsx("span", { className: "ic-sub-right" }),
                ],
            }),
            e.jsx("div", { className: "ic-empty", children: e.jsx("b", { children: "这篇日记不在了" }) }),
        ],
    });
}
function ps({ open: a, onClose: s, space: t = null, spaceName: i = "", onPublished: r }) {
    const { patch: l } = $(),
        c = q(),
        [m, j] = y.useState(""),
        [d, p] = y.useState([]),
        [o, g] = y.useState(""),
        [N, z] = y.useState(!1),
        u = y.useRef(null),
        v = y.useRef(null);
    Ie.useEffect(() => {
        a && (j(""), p([]), g(""), z(!1), setTimeout(() => Pe(v), 280));
    }, [a]);
    const b = async (x) => {
            const T = [...(x.target.files || [])].slice(0, 9 - d.length);
            x.target.value = "";
            const S = [];
            for (const w of T) {
                const M = await Ye(w, { note: "iCity 日记" });
                M && S.push(M);
            }
            p((w) => [...w, ...S].slice(0, 9));
        },
        h = () => {
            const x = m.trim();
            if (!x && !d.length) return;
            const T = {
                id: U("ic_"),
                author: "me",
                charId: null,
                forCharId: t,
                text: x,
                images: d,
                location: o.trim(),
                weather: "",
                createdAt: Date.now(),
                private: N,
                likes: {},
                readBy: {},
                notes: [],
            };
            (Z(l, (S) => ({ ...S, entries: [T, ...S.entries] })),
                c(N ? "已保存 · 只有你看得到" : `已发布 · 只有 ${i || "TA"} 看得到`),
                s(),
                r == null || r(T));
        };
    return e.jsx(Le, {
        open: a,
        onClose: s,
        title: i ? `写给 ${i}` : "写日记",
        rightAction: e.jsx("button", {
            className: "btn-plain ic-publish",
            onClick: h,
            disabled: !m.trim() && !d.length,
            children: "发布",
        }),
        children: e.jsxs("div", {
            className: "ic-compose",
            children: [
                e.jsx("textarea", {
                    ref: v,
                    value: m,
                    onChange: (x) => j(x.target.value),
                    placeholder: "今天发生了什么……",
                    rows: 9,
                }),
                d.length > 0 &&
                    e.jsx("div", {
                        className: "ic-compose-imgs",
                        children: d.map((x, T) =>
                            e.jsxs(
                                "span",
                                {
                                    children: [
                                        e.jsx(Q, { src: x, alt: "" }),
                                        e.jsx("button", {
                                            className: "btn-plain",
                                            onClick: () => p((S) => S.filter((w, M) => M !== T)),
                                            "aria-label": "移除",
                                            children: e.jsx(pe, { size: 12 }),
                                        }),
                                    ],
                                },
                                T,
                            ),
                        ),
                    }),
                e.jsxs("div", {
                    className: "ic-compose-rows",
                    children: [
                        e.jsxs("button", {
                            className: "btn-plain ic-compose-row",
                            onClick: () => {
                                var x;
                                return (x = u.current) == null ? void 0 : x.click();
                            },
                            disabled: d.length >= 9,
                            children: [
                                e.jsx(Xe, { size: 19 }),
                                e.jsx("span", { children: "添加图片" }),
                                e.jsx("small", { children: d.length ? `${d.length}/9` : "" }),
                            ],
                        }),
                        e.jsxs("label", {
                            className: "ic-compose-row",
                            children: [
                                e.jsx(ge, { size: 19 }),
                                e.jsx("input", {
                                    value: o,
                                    onChange: (x) => g(x.target.value),
                                    placeholder: "所在位置（可选）",
                                }),
                            ],
                        }),
                        e.jsxs("button", {
                            className: "btn-plain ic-compose-row",
                            onClick: () => z((x) => !x),
                            children: [
                                N ? e.jsx(H, { size: 19 }) : e.jsx(es, { size: 19 }),
                                e.jsx("span", { children: N ? "私密" : "公开" }),
                                e.jsx("small", {
                                    children: N
                                        ? "只有自己看得到，TA 不会知道写过"
                                        : "TA 会读到，可能会留小纸条",
                                }),
                            ],
                        }),
                    ],
                }),
                e.jsx("input", {
                    ref: u,
                    type: "file",
                    accept: "image/*",
                    multiple: !0,
                    hidden: !0,
                    onChange: b,
                }),
            ],
        }),
    });
}
function xs({ charId: a, onBack: s }) {
    var z;
    const { state: t, patch: i, patchChar: r } = $(),
        l = je(t, a),
        c = (t.characters || []).find((u) => u.id === a),
        [m, j] = y.useState(!1),
        [d, p] = y.useState("22:30"),
        o = (u) => Z(i, (v) => ({ ...v, settings: { ...v.settings, [a]: { ...l, ...u } } })),
        g = ((z = c == null ? void 0 : c.autonomy) == null ? void 0 : z.checkMyDiary) !== !1,
        N = [
            ["auto", "TA 自己决定"],
            ["public", "公开"],
            ["private", "私密"],
        ];
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("header", {
                className: "ic-sub",
                children: [
                    e.jsx("button", {
                        className: "ic-top-back btn-plain",
                        onClick: s,
                        "aria-label": "返回",
                        children: e.jsx(W, { size: 24 }),
                    }),
                    e.jsx("b", { children: "定时写日记" }),
                    e.jsx("span", { className: "ic-sub-right" }),
                ],
            }),
            e.jsxs("div", {
                className: "ic-scroll ic-settings",
                children: [
                    e.jsx("div", { className: "ic-set-head", children: "每天写日记的时间" }),
                    e.jsxs("div", {
                        className: "ic-set-card",
                        children: [
                            l.times.length === 0 &&
                                e.jsx("div", {
                                    className: "ic-set-row muted",
                                    children: "还没有 —— 只在你让 TA 写的时候才写",
                                }),
                            l.times.map((u) =>
                                e.jsxs(
                                    "div",
                                    {
                                        className: "ic-set-row",
                                        children: [
                                            e.jsx("span", { children: u }),
                                            e.jsx("button", {
                                                className: "btn-plain danger",
                                                onClick: () => o({ times: l.times.filter((v) => v !== u) }),
                                                children: "移除",
                                            }),
                                        ],
                                    },
                                    u,
                                ),
                            ),
                            e.jsxs("button", {
                                className: "ic-set-row btn-plain add",
                                onClick: () => j(!0),
                                children: [e.jsx(ye, { size: 16 }), "添加一个时间"],
                            }),
                        ],
                    }),
                    e.jsx("div", {
                        className: "ic-set-foot",
                        children: "一天可以写不止一篇。到点之后 45 分钟内打开过 app 就会写；错过了不补。",
                    }),
                    e.jsx("div", { className: "ic-set-head", children: "公开还是私密" }),
                    e.jsx("div", {
                        className: "ic-set-card",
                        children: N.map(([u, v]) =>
                            e.jsxs(
                                "button",
                                {
                                    className: "ic-set-row btn-plain",
                                    onClick: () => o({ privacy: u }),
                                    children: [
                                        e.jsx("span", { children: v }),
                                        l.privacy === u && e.jsx("b", { className: "check", children: "✓" }),
                                    ],
                                },
                                u,
                            ),
                        ),
                    }),
                    e.jsx("div", {
                        className: "ic-set-foot",
                        children: "私密的那篇你也能点开，但 TA 会知道你看过。",
                    }),
                    e.jsx("div", { className: "ic-set-head", children: "关于你的日记" }),
                    e.jsx("div", {
                        className: "ic-set-card",
                        children: e.jsxs("button", {
                            className: "ic-set-row btn-plain",
                            onClick: () =>
                                r(a, (u) => ({ autonomy: { ...(u.autonomy || {}), checkMyDiary: !g } })),
                            children: [
                                e.jsx("span", { children: "允许 TA 读我的公开日记" }),
                                e.jsx("span", {
                                    className: `ic-switch ${g ? "on" : ""}`,
                                    children: e.jsx("i", {}),
                                }),
                            ],
                        }),
                    }),
                    e.jsx("div", {
                        className: "ic-set-foot",
                        children:
                            "读过之后 TA 会知道你写了什么，也可能留小纸条；你这边会显示「TA 看过」。私密的那些 TA 永远看不到。",
                    }),
                ],
            }),
            e.jsx(We, {
                open: m,
                onClose: () => j(!1),
                title: "添加时间",
                maxWidth: 300,
                children: e.jsxs("div", {
                    className: "np-body",
                    children: [
                        e.jsx("input", {
                            type: "time",
                            value: d,
                            onChange: (u) => p(u.target.value),
                            className: "ic-time-input",
                        }),
                        e.jsx("div", {
                            className: "np-note",
                            style: { textAlign: "center" },
                            children: l.times.includes(d) ? "该时间已存在。" : "每天到此时间后写一篇日记。",
                        }),
                        e.jsxs("div", {
                            className: "np-actions",
                            children: [
                                e.jsx("button", {
                                    className: "btn-plain np-btn",
                                    onClick: () => j(!1),
                                    children: "取消",
                                }),
                                e.jsx("button", {
                                    className: "btn-plain np-btn primary",
                                    disabled: !d || l.times.includes(d),
                                    onClick: () => {
                                        (o({ times: [...l.times, d].sort() }), j(!1));
                                    },
                                    children: "添加",
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
export { vs as default };
