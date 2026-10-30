import { r as C, j as s, R as bs } from "./vendor-react-3a46a5d3.js";
import {
    aJ as ue,
    cQ as pe,
    d9 as be,
    bv as Ne,
    bo as ws,
    ea as Ps,
    eb as ge,
    ec as Vs,
    bE as fe,
    bA as Us,
    cD as we,
    dK as ve,
    ed as ye,
    cB as As,
    ee as $e,
    bz as ke,
} from "./vendor-icons-e63d3118.js";
import {
    m9 as Ce,
    c as A,
    ma as Se,
    mb as _s,
    mc as xs,
    u as Hs,
    a as Ie,
    md as os,
    me as Ae,
    mf as Ee,
    aq as ze,
    ar as Be,
    i7 as Re,
    l as Js,
    mg as Ks,
    mh as Me,
    bj as Gs,
    cu as Te,
    mi as Es,
    mj as ds,
    mk as Qs,
    ml as es,
    mm as Ys,
    mn as Oe,
    mo as Fe,
    mp as De,
    b9 as Le,
    mq as Ns,
    bi as Xs,
    mr as We,
    ms as qe,
    mt as Pe,
    mu as Ve,
    mv as Ue,
    mw as _e,
    mx as He,
    my as zs,
    mz as Bs,
    mA as as,
    mB as Zs,
    mC as se,
    mD as ee,
    mE as ae,
    mF as Je,
    mG as Ke,
    mH as Ge,
    mI as ne,
    mJ as Qe,
    mK as Rs,
    dA as H,
    es as Ms,
    dB as Ts,
    mL as le,
    mM as ie,
    kR as Ye,
    g1 as Xe,
    b$ as Ze,
    mN as sa,
    mO as ea,
    mP as aa,
    mQ as na,
    mR as la,
    mS as ia,
    mT as ta,
    f as ra,
    mU as ca,
    kV as da,
    dx as oa,
    mV as ha,
    mW as ma,
    mX as xa,
    mY as ja,
    mZ as ua,
} from "./app-2c902988.js";
import { I as pa } from "./Interview-83ebea79.js";
import { A as ba, m as is } from "./vendor-motion-62fc1664.js";
import "./vendor-7bc51c32.js";
import "./vendor-leaflet-f4c2a8c5.js";
const X = new Map(),
    gs = new Set(),
    rs = () =>
        gs.forEach((e) => {
            try {
                e();
            } catch {}
        }),
    ts = (e, l) => [e, l].sort().join("|");
function Na(e) {
    return (gs.add(e), () => gs.delete(e));
}
function ga(e, l) {
    return X.get(ts(e, l)) || null;
}
function fa() {
    return [...X.values()].filter((e) => e.status === "running");
}
const Os = (e, l = "success") => {
    try {
        window.dispatchEvent(new CustomEvent("litot:notice", { detail: { message: e, type: l } }));
    } catch {}
};
function te(e, l, n, u, { watching: b = !0 } = {}) {
    const x = ts(n.id, u.id),
        h = X.get(x);
    if ((h == null ? void 0 : h.status) === "running") return ((h.watching = b), rs(), h);
    const c = new AbortController();
    Ce(c.signal);
    const p = {
        key: x,
        aId: n.id,
        bId: u.id,
        aName: A(n),
        bName: A(u),
        startedAt: Date.now(),
        status: "running",
        bond: null,
        error: null,
        watching: b,
        ac: c,
    };
    return (
        (p.logId = Se({
            label: `关系推演 · ${p.aName} × ${p.bName}`,
            kind: "job",
            meta: { key: x },
            stop: () => re(x),
            retry: () => te(e, l, n, u, { watching: !1 }),
        })),
        X.set(x, p),
        rs(),
        (async () => {
            try {
                const o = await _s(e, l, n, u, { signal: c.signal });
                if (c.signal.aborted) return;
                if (o != null && o.error) throw o.error;
                if (!(o != null && o.ok)) throw new Error("未能读取结果，请重试");
                ((p.status = "done"),
                    (p.bond = o.bond),
                    xs(p.logId, { status: "done" }),
                    p.watching || Os(`${p.aName} 与 ${p.bName} 的关系推演已完成`));
            } catch (o) {
                if (c.signal.aborted || (o == null ? void 0 : o.name) === "AbortError") return;
                ((p.status = "error"),
                    (p.error = o),
                    xs(p.logId, { status: "failed", error: (o == null ? void 0 : o.message) || String(o) }),
                    p.watching ||
                        Os(
                            `${p.aName} 与 ${p.bName} 的关系推演未完成：${String((o == null ? void 0 : o.message) || o).slice(0, 80)}`,
                            "error",
                        ));
            } finally {
                (c.signal.aborted &&
                    ((p.status = "stopped"), X.delete(x), xs(p.logId, { status: "stopped" })),
                    rs());
            }
        })(),
        p
    );
}
function re(e) {
    var n;
    const l = X.get(e);
    l && ((n = l.ac) == null || n.abort(), X.delete(e), rs());
}
function Fs(e, l) {
    const n = X.get(e);
    n && ((n.watching = l), rs());
}
function Ds(e) {
    const l = X.get(e);
    l && l.status !== "running" && (X.delete(e), rs());
}
const hs = ze(Be, "关系"),
    ce = Re;
function F({ char: e, name: l, size: n = 40, dark: u = !1 }) {
    const b = (l || A(e) || "·").slice(0, 1);
    return s.jsx("span", {
        className: `rl-face ${u ? "dark" : ""}`,
        style: { width: n, height: n, fontSize: n * 0.4 },
        children: e != null && e.avatar ? s.jsx(Js, { src: e.avatar, alt: "" }) : b,
    });
}
function Pa({ onBack: e }) {
    var V;
    const { state: l, patch: n, patchChar: u, addCharacter: b } = Hs(),
        x = Ie(),
        h = l.characters || [],
        [c, p] = C.useState(
            l.activeCharId && h.some((m) => m.id === l.activeCharId)
                ? l.activeCharId
                : (V = h[0]) == null
                  ? void 0
                  : V.id,
        ),
        o = h.find((m) => m.id === c) || h[0] || null,
        [y, E] = C.useState("circle"),
        [f, k] = C.useState(null),
        [t, r] = C.useState(null),
        [v, S] = C.useState(!1),
        [M, D] = C.useState([]),
        [j, w] = C.useState(null),
        [B, R] = C.useState(null);
    if (!o)
        return s.jsxs("div", {
            className: "rl-root",
            children: [
                s.jsx(fs, { onBack: e, title: "关系" }),
                s.jsxs("div", {
                    className: "rl-empty",
                    children: ["还没有联系人。", s.jsx("br", {}), "先在「信息」里添加一个角色。"],
                }),
            ],
        });
    const $ = os(o),
        L = f === "new" ? null : $.find((m) => m.id === f),
        q = (m) => u(o.id, { npcs: m }),
        P = (m) => u(o.id, (I) => ({ npcs: [...os(I), ...m] })),
        G = (m, I) =>
            D((T) => [
                ...T,
                ...I.filter((i) => !T.some((g) => g.char.id === i.char.id && g.owner.id === m.id)).map(
                    (i) => ({ ...i, owner: m }),
                ),
            ]),
        Z = async (m) => {
            var Q;
            const I = M[0];
            if ((D((K) => K.slice(1)), !I)) return;
            const { owner: T, npc: i, char: g } = I,
                O = (K) => u(T.id, (cs) => ({ npcs: [...os(cs), K] }));
            if (!m) {
                O(i);
                return;
            }
            O({ ...i, linkedCharId: g.id, isChar: !0 });
            const _ = A(g);
            if (Ks(l, T.id, g.id)) {
                x("已记入圈子。两人的关系此前已推演");
                return;
            }
            (w(g.id), x(`正在推演与${_}的关系`));
            let J;
            try {
                J = await _s(l, n, T, g);
            } catch (K) {
                J = { error: K };
            }
            (w(null),
                J != null && J.ok
                    ? x(`已推演${A(T)}与${_}的关系`)
                    : x(
                          ((Q = J == null ? void 0 : J.error) == null ? void 0 : Q.message) ||
                              "关系推演没有读出结果，可在「交集」中重试",
                          "error",
                      ));
        },
        Y = (m) => {
            (R(m), E("bonds"));
        },
        U = (m) => {
            const I = Me(m, o),
                T = b(I);
            (q($.map((i) => (i.id === m.id ? { ...i, linkedCharId: T.id } : i))), r(T));
        };
    return s.jsxs("div", {
        className: "rl-root",
        children: [
            s.jsx(fs, { onBack: e, title: "关系" }),
            s.jsxs("div", {
                className: "rl-scroll",
                children: [
                    s.jsx("div", {
                        className: "rl-chars",
                        role: "tablist",
                        children: h.map((m) =>
                            s.jsxs(
                                "button",
                                {
                                    className: `rl-chip btn-plain ${m.id === o.id ? "on" : ""}`,
                                    onClick: () => p(m.id),
                                    children: [
                                        s.jsx(F, { char: m, size: 26 }),
                                        s.jsx("span", { children: A(m) }),
                                    ],
                                },
                                m.id,
                            ),
                        ),
                    }),
                    s.jsx("div", {
                        className: "rl-seg",
                        role: "tablist",
                        children: [
                            ["circle", "圈子"],
                            ["bonds", "交集"],
                            ["feature", "专访"],
                        ].map(([m, I]) =>
                            s.jsx(
                                "button",
                                {
                                    role: "tab",
                                    "aria-selected": y === m,
                                    className: `btn-plain ${y === m ? "on" : ""}`,
                                    onClick: () => {
                                        (R(null), E(m));
                                    },
                                    children: I,
                                },
                                m,
                            ),
                        ),
                    }),
                    y === "circle" &&
                        s.jsx(va, {
                            char: o,
                            npcs: $,
                            state: l,
                            onOpen: k,
                            onAppend: P,
                            onAsk: (m) => G(o, m),
                            onOpenBond: Y,
                            bondBusy: j,
                            toast: x,
                        }),
                    y === "bonds" && s.jsx(Ia, { char: o, state: l, patch: n, toast: x, initialDetail: B }),
                    y === "feature" && s.jsx(Ma, { char: o, onOpen: () => S(!0) }),
                ],
            }),
            s.jsxs(ba, {
                children: [
                    f &&
                        s.jsx(
                            Ca,
                            {
                                owner: o,
                                npc: L,
                                onClose: () => k(null),
                                onSave: (m) => {
                                    const I = !L && !m.linkedCharId ? Ae(l, o, m.name) : null;
                                    (I && !$.some((T) => T.linkedCharId === I.id)
                                        ? G(o, [{ npc: m, char: I }])
                                        : q(L ? $.map((T) => (T.id === m.id ? m : T)) : [...$, m]),
                                        k(null));
                                },
                                onDelete: (m) => {
                                    (q($.filter((I) => I.id !== m)), k(null));
                                },
                                onAddFriend: (m) => {
                                    (k(null), U(m));
                                },
                                linkedChar:
                                    L != null && L.linkedCharId
                                        ? h.find((m) => m.id === L.linkedCharId)
                                        : null,
                            },
                            "npc",
                        ),
                    t && s.jsx(Ee, { char: t, onBack: () => r(null), onDone: () => r(null) }, "apply"),
                    v &&
                        s.jsx(
                            is.div,
                            {
                                className: "rl-layer",
                                ...ce,
                                children: s.jsx(pa, { char: o, onBack: () => S(!1) }),
                            },
                            "mag",
                        ),
                ],
            }),
            s.jsx(wa, { item: M[0] || null, onYes: () => Z(!0), onNo: () => Z(!1) }),
        ],
    });
}
function wa({ item: e, onYes: l, onNo: n }) {
    const u = e == null ? void 0 : e.npc,
        b = e == null ? void 0 : e.char,
        x = e == null ? void 0 : e.owner,
        h = String((b == null ? void 0 : b.persona) || "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 60);
    return s.jsx(Gs, {
        open: !!e,
        onClose: n,
        title: s.jsxs("span", {
            className: "cav-h",
            children: [s.jsx("em", { children: "SAME NAME" }), s.jsx("b", { children: "是不是这个人" })],
        }),
        maxWidth: 340,
        bare: !0,
        children:
            e &&
            s.jsxs(
                "div",
                {
                    className: "rl-same",
                    children: [
                        s.jsxs("div", {
                            className: "rl-same-pair",
                            children: [
                                s.jsx(is.span, {
                                    className: `rl-mono c-${u.circle}`,
                                    initial: { x: 18, opacity: 0 },
                                    animate: { x: 0, opacity: 1 },
                                    transition: { duration: 0.36, ease: [0.2, 0, 0, 1] },
                                    children: u.name.slice(0, 1),
                                }),
                                s.jsx("svg", {
                                    className: "rl-same-line",
                                    viewBox: "0 0 64 8",
                                    "aria-hidden": !0,
                                    children: s.jsx(is.path, {
                                        d: "M2 4 H62",
                                        initial: { pathLength: 0 },
                                        animate: { pathLength: 1 },
                                        transition: { delay: 0.3, duration: 0.5, ease: "easeInOut" },
                                    }),
                                }),
                                s.jsx(is.span, {
                                    initial: { x: -18, opacity: 0, scale: 0.92 },
                                    animate: { x: 0, opacity: 1, scale: 1 },
                                    transition: { delay: 0.12, duration: 0.4, ease: [0.2, 0, 0, 1] },
                                    children: s.jsx(F, { char: b, size: 48 }),
                                }),
                            ],
                        }),
                        s.jsxs("p", {
                            className: "rl-same-q",
                            children: [
                                A(x),
                                "的圈子里认出了「",
                                u.name,
                                "」",
                                u.role ? `（${u.role}）` : "",
                                "，通讯录中有一位同名的角色。",
                            ],
                        }),
                        s.jsxs(is.div, {
                            className: "rl-same-card",
                            initial: { y: 8, opacity: 0 },
                            animate: { y: 0, opacity: 1 },
                            transition: { delay: 0.5, duration: 0.3 },
                            children: [
                                s.jsx(F, { char: b, size: 36 }),
                                s.jsxs("span", {
                                    children: [
                                        s.jsx("b", { children: A(b) }),
                                        s.jsx("small", { children: h || "未填写人设" }),
                                    ],
                                }),
                            ],
                        }),
                        s.jsx("p", {
                            className: "rl-same-note",
                            children: "确认后以角色身份记入圈子，并推演两人的关系。",
                        }),
                        s.jsxs("div", {
                            className: "rl-same-acts",
                            children: [
                                s.jsx("button", {
                                    className: "btn-plain",
                                    onClick: n,
                                    children: "不是，另记一人",
                                }),
                                s.jsx("button", {
                                    className: "btn-plain solid",
                                    onClick: l,
                                    children: "是这个人",
                                }),
                            ],
                        }),
                    ],
                },
                `${x.id}-${b.id}`,
            ),
    });
}
function fs({ onBack: e, title: l, right: n }) {
    return s.jsxs("div", {
        className: "rl-top",
        children: [
            s.jsx("button", {
                className: "rl-round btn-plain",
                onClick: e,
                "aria-label": "返回",
                children: s.jsx(ue, { size: 20, weight: "bold" }),
            }),
            s.jsx("div", { className: "rl-top-title", children: l }),
            s.jsx("div", { className: "rl-top-r", children: n }),
        ],
    });
}
function va({
    char: e,
    npcs: l,
    state: n,
    onOpen: u,
    onAppend: b,
    onAsk: x,
    onOpenBond: h,
    bondBusy: c,
    toast: p,
}) {
    const o = Te(`relations-npc-${e.id}`),
        [y, E] = C.useState("all"),
        f = Es(n, e.id),
        k = n.characters || [],
        t = [];
    for (const j of l) {
        const w = j.linkedCharId && k.find((B) => B.id === j.linkedCharId);
        w && t.push({ o: w, n: j, bond: Es(n, e.id).find((B) => B.a === w.id || B.b === w.id) || null });
    }
    for (const j of f) {
        const w = ds(j, e.id).otherId,
            B = k.find((R) => R.id === w);
        B && j.acquainted !== !1 && !t.some((R) => R.o.id === w) && t.push({ o: B, n: null, bond: j });
    }
    const r = l.filter(
            (j) =>
                !t.some((w) => {
                    var B;
                    return ((B = w.n) == null ? void 0 : B.id) === j.id;
                }),
        ),
        v = y === "all" ? r : r.filter((j) => j.circle === y),
        S =
            y === "all"
                ? t
                : t.filter((j) => {
                      var w;
                      return ((w = j.n) == null ? void 0 : w.circle) === y;
                  }),
        M = l.filter((j) => j.wechatId).length,
        D = async () => {
            const j = hs.usableLane(n.api.chat);
            if (!(j != null && j.baseUrl)) {
                p("先在 API 设置里配好聊天通道", "error");
                return;
            }
            const w = await o.run(
                async ($) => {
                    const L = await hs.chat(j, sa(n, e), { signal: $ }),
                        q = ea(L.content);
                    if (!(q != null && q.length)) throw new Error("没读出人来，再试一次");
                    const { plain: P, matches: G } = aa(n, e, q);
                    return (P.length && b(P), { n: q.length, matches: G });
                },
                {
                    label: `圈子 · ${A(e)}`,
                    done: ($) => ({
                        title: `${A(e)} 的圈子已更新`,
                        text: `认出了 ${$.n} 个人`,
                        app: "relations",
                    }),
                },
            );
            if ((w != null && w.aborted) || (w != null && w.skipped)) return;
            if (w != null && w.error) {
                p(w.error.message, "error");
                return;
            }
            const { n: B, matches: R } = w.value;
            (R.length && x(R),
                p(`认出了 ${B} 个人${R.length ? `，其中 ${R.length} 位与通讯录中的角色同名` : ""}`));
        };
    return s.jsxs(s.Fragment, {
        children: [
            s.jsxs("div", {
                className: "rl-card rl-hero",
                children: [
                    s.jsx(ka, { char: e, npcs: l, bonds: f, chars: n.characters || [] }),
                    s.jsxs("div", {
                        className: "rl-stats",
                        children: [
                            s.jsxs("div", {
                                children: [
                                    s.jsx("b", { children: l.length }),
                                    s.jsx("span", { children: "圈子里的人" }),
                                ],
                            }),
                            s.jsxs("div", {
                                children: [
                                    s.jsx("b", { children: M }),
                                    s.jsx("span", { children: "开放微信" }),
                                ],
                            }),
                            s.jsxs("div", {
                                children: [
                                    s.jsx("b", { children: f.length }),
                                    s.jsx("span", { children: "相识的角色" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            s.jsx("div", {
                className: "rl-filters",
                children: [["all", "全部"], ...Qs].map(([j, w]) => {
                    const B =
                        j === "all"
                            ? r.length + t.length
                            : r.filter((R) => R.circle === j).length +
                              t.filter((R) => {
                                  var $;
                                  return (($ = R.n) == null ? void 0 : $.circle) === j;
                              }).length;
                    return j !== "all" && !B
                        ? null
                        : s.jsxs(
                              "button",
                              {
                                  className: `rl-pill btn-plain ${y === j ? "on" : ""}`,
                                  onClick: () => E(j),
                                  children: [w, s.jsx("i", { children: B })],
                              },
                              j,
                          );
                }),
            }),
            v.length + S.length === 0
                ? s.jsxs("div", {
                      className: "rl-card rl-blank",
                      children: [
                          s.jsx("div", {
                              className: "rl-blank-t",
                              children: l.length || t.length ? "这一类还没有人" : "他的圈子还是空的",
                          }),
                          s.jsx("div", {
                              className: "rl-blank-s",
                              children: "从人设和记忆里认出他身边的人：家人、朋友、同事、过去的人。",
                          }),
                      ],
                  })
                : s.jsxs("div", {
                      className: "rl-list",
                      children: [
                          S.map((j) =>
                              s.jsx(
                                  ya,
                                  {
                                      owner: e,
                                      row: j,
                                      busy: c === j.o.id,
                                      onClick: () => (j.bond ? h(j.o.id) : j.n ? u(j.n.id) : null),
                                  },
                                  j.o.id,
                              ),
                          ),
                          v.map((j) => s.jsx($a, { n: j, onClick: () => u(j.id) }, j.id)),
                      ],
                  }),
            s.jsxs("div", {
                className: "rl-dock",
                children: [
                    s.jsxs("button", {
                        className: `rl-cta btn-plain ${o.busy ? "busy" : ""}`,
                        onClick: o.busy ? o.stop : D,
                        children: [
                            o.busy
                                ? s.jsx(pe, { size: 16, weight: "fill" })
                                : s.jsx(be, { size: 16, weight: "fill" }),
                            s.jsx("span", { children: o.busy ? "正在翻记忆…" : "从记忆里认人" }),
                        ],
                    }),
                    s.jsx("button", {
                        className: "rl-cta ghost btn-plain",
                        onClick: () => u("new"),
                        "aria-label": "手动添加",
                        children: s.jsx(Ne, { size: 18, weight: "bold" }),
                    }),
                ],
            }),
        ],
    });
}
function ya({ owner: e, row: l, busy: n, onClick: u }) {
    const { o: b, n: x, bond: h } = l,
        c = h ? ds(h, e.id) : null;
    return s.jsxs("button", {
        className: "rl-npc rl-cast btn-plain",
        onClick: u,
        children: [
            s.jsx("span", { className: "rl-cast-face", children: s.jsx(F, { char: b, size: 48 }) }),
            s.jsxs("span", {
                className: "rl-npc-body",
                children: [
                    s.jsxs("span", {
                        className: "rl-npc-head",
                        children: [
                            s.jsx("b", { children: A(b) }),
                            s.jsx("i", { className: "rl-is-char", children: "角色" }),
                            ((x == null ? void 0 : x.role) || (h == null ? void 0 : h.label)) &&
                                s.jsx("em", { children: (x == null ? void 0 : x.role) || h.label }),
                        ],
                    }),
                    s.jsx("span", {
                        className: "rl-npc-rel",
                        children:
                            (c == null ? void 0 : c.mine) ||
                            (x == null ? void 0 : x.relation) ||
                            (h == null ? void 0 : h.history) ||
                            "—",
                    }),
                    s.jsx("span", {
                        className: "rl-npc-foot",
                        children: h
                            ? s.jsxs(s.Fragment, {
                                  children: [
                                      s.jsx("span", {
                                          className: "rl-bar",
                                          children: s.jsx("i", { style: { width: `${h.tension}%` } }),
                                      }),
                                      s.jsx("span", {
                                          className: "rl-wx mute",
                                          children:
                                              h.acquainted === !1 && es(h).key === "unaware"
                                                  ? "互不相识"
                                                  : es(h).label,
                                      }),
                                  ],
                              })
                            : s.jsx("span", {
                                  className: "rl-wx mute",
                                  children: n ? "正在推演关系…" : "尚未推演关系",
                              }),
                    }),
                ],
            }),
        ],
    });
}
function $a({ n: e, onClick: l }) {
    return s.jsxs("button", {
        className: "rl-npc btn-plain",
        onClick: l,
        children: [
            s.jsx("span", { className: `rl-mono c-${e.circle}`, children: e.name.slice(0, 1) }),
            s.jsxs("span", {
                className: "rl-npc-body",
                children: [
                    s.jsxs("span", {
                        className: "rl-npc-head",
                        children: [
                            s.jsx("b", { children: e.name }),
                            e.role && s.jsx("em", { children: e.role }),
                        ],
                    }),
                    s.jsx("span", {
                        className: "rl-npc-rel",
                        children: e.relation || e.traits || (e.status ? `最近：${e.status}` : "—"),
                    }),
                    s.jsxs("span", {
                        className: "rl-npc-foot",
                        children: [
                            s.jsx("span", {
                                className: "rl-bar",
                                children: s.jsx("i", { style: { width: `${e.closeness}%` } }),
                            }),
                            e.linkedCharId
                                ? s.jsxs("span", {
                                      className: "rl-wx on",
                                      children: [s.jsx(ws, { size: 11, weight: "bold" }), "已加好友"],
                                  })
                                : e.wechatId
                                  ? s.jsxs("span", {
                                        className: "rl-wx",
                                        children: [s.jsx(Ps, { size: 12, weight: "fill" }), e.wechatId],
                                    })
                                  : s.jsx("span", { className: "rl-wx mute", children: Ys(e.circle) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const js = 320,
    us = 260,
    Ls = [
        [-1, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
    ];
function ka({ char: e, npcs: l, bonds: n, chars: u }) {
    const b = js / 2,
        x = us / 2 - 6,
        h = [56, 80, 102],
        c = n
            .map((t) => u.find((r) => r.id === ds(t, e.id).otherId))
            .filter(Boolean)
            .slice(0, 4),
        p = l
            .slice(0, 12)
            .slice()
            .sort((t, r) => r.closeness - t.closeness),
        o = Math.max(p.length, 1),
        y = [2, 3, 5, 7].find((t) => o > t && o % t !== 0) || 1,
        E = p.map((t, r) => {
            const v = t.closeness >= 70 ? h[0] : t.closeness >= 40 ? h[1] : h[2],
                S = (((r * y) % o) / o) * Math.PI * 2 - Math.PI / 2;
            return { n: t, x: b + Math.cos(S) * v * 1.18, y: x + Math.sin(S) * v * 0.92 };
        }),
        f = c.map((t, r) => ({ c: t, x: b + Ls[r][0] * 128, y: x + Ls[r][1] * 96 })),
        k = (t, r) => ({ left: `${(t / js) * 100}%`, top: `${(r / us) * 100}%` });
    return s.jsxs("div", {
        className: "rl-star",
        children: [
            s.jsxs("svg", {
                viewBox: `0 0 ${js} ${us}`,
                "aria-hidden": !0,
                children: [
                    h.map((t) =>
                        s.jsx("ellipse", { cx: b, cy: x, rx: t * 1.18, ry: t * 0.92, className: "ring" }, t),
                    ),
                    E.map(({ n: t, x: r, y: v }) =>
                        s.jsx(
                            "line",
                            {
                                x1: b,
                                y1: x,
                                x2: r,
                                y2: v,
                                className: `ray ${t.closeness >= 70 ? "near" : ""}`,
                            },
                            t.id,
                        ),
                    ),
                    f.map(({ c: t, x: r, y: v }) =>
                        s.jsx("line", { x1: b, y1: x, x2: r, y2: v, className: "ray ext" }, t.id),
                    ),
                ],
            }),
            E.map(({ n: t, x: r, y: v }) =>
                s.jsxs(
                    "span",
                    {
                        className: `rl-node ${t.closeness >= 70 ? "near" : t.closeness >= 40 ? "mid" : "far"} ${v < x - 20 ? "up" : ""}`,
                        style: k(r, v),
                        children: [t.name.slice(0, 1), s.jsx("small", { children: t.name })],
                    },
                    t.id,
                ),
            ),
            f.map(({ c: t, x: r, y: v }) =>
                s.jsxs(
                    "span",
                    {
                        className: "rl-node ext",
                        style: k(r, v),
                        children: [s.jsx(F, { char: t, size: 32 }), s.jsx("small", { children: A(t) })],
                    },
                    t.id,
                ),
            ),
            s.jsx("span", {
                className: "rl-core",
                style: k(b, x),
                children: s.jsx(F, { char: e, size: 58, dark: !0 }),
            }),
        ],
    });
}
function Ca({ owner: e, npc: l, onClose: n, onSave: u, onDelete: b, onAddFriend: x, linkedChar: h }) {
    const [c, p] = C.useState(() => l || Oe({ source: "manual", closeness: 50 })),
        [o, y] = C.useState(!1),
        E = (t) => (r) => p((v) => ({ ...v, [t]: r != null && r.target ? r.target.value : r })),
        f = !!c.wechatId,
        k = A(e);
    return s.jsxs(is.div, {
        className: "rl-layer rl-sub",
        ...ce,
        children: [
            s.jsx(fs, {
                onBack: n,
                title: l ? "人物资料" : "添加人物",
                right: s.jsx("button", {
                    className: "rl-round solid btn-plain",
                    onClick: () => u(c),
                    "aria-label": "保存",
                    children: s.jsx(ws, { size: 18, weight: "bold" }),
                }),
            }),
            s.jsxs("div", {
                className: "rl-scroll",
                children: [
                    s.jsxs("div", {
                        className: "rl-id",
                        children: [
                            s.jsx("span", {
                                className: `rl-mono xl c-${c.circle}`,
                                children: (c.name || "·").slice(0, 1),
                            }),
                            s.jsx("input", {
                                className: "rl-id-name",
                                value: c.name,
                                onChange: E("name"),
                                placeholder: "名字",
                            }),
                            s.jsx("input", {
                                className: "rl-id-role",
                                value: c.role,
                                onChange: E("role"),
                                placeholder: `是${k}的谁`,
                            }),
                        ],
                    }),
                    s.jsx("div", {
                        className: "rl-filters center",
                        children: Qs.map(([t, r]) =>
                            s.jsx(
                                "button",
                                {
                                    className: `rl-pill btn-plain ${c.circle === t ? "on" : ""}`,
                                    onClick: () => p((v) => ({ ...v, circle: t })),
                                    children: r,
                                },
                                t,
                            ),
                        ),
                    }),
                    s.jsxs("div", {
                        className: "rl-group",
                        children: [
                            s.jsxs("label", {
                                className: "rl-field",
                                children: [
                                    s.jsx("span", { children: "年龄" }),
                                    s.jsx("input", { value: c.age, onChange: E("age"), placeholder: "—" }),
                                ],
                            }),
                            s.jsxs("label", {
                                className: "rl-field",
                                children: [
                                    s.jsx("span", { children: "性别" }),
                                    s.jsx("input", {
                                        value: c.gender,
                                        onChange: E("gender"),
                                        placeholder: "—",
                                    }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "rl-field",
                                children: [
                                    s.jsx("span", { children: "亲近" }),
                                    s.jsx("input", {
                                        type: "range",
                                        min: 0,
                                        max: 100,
                                        value: c.closeness,
                                        onChange: (t) =>
                                            p((r) => ({ ...r, closeness: Number(t.target.value) })),
                                        className: "rl-range",
                                        style: { "--v": `${c.closeness}%` },
                                    }),
                                    s.jsx("em", { children: c.closeness }),
                                ],
                            }),
                        ],
                    }),
                    s.jsxs("div", { className: "rl-cap", children: ["和", k] }),
                    s.jsx("div", {
                        className: "rl-group",
                        children: s.jsx("textarea", {
                            rows: 2,
                            value: c.relation,
                            onChange: E("relation"),
                            placeholder: "怎么认识的、现在怎样",
                        }),
                    }),
                    s.jsx("div", { className: "rl-cap", children: "为人" }),
                    s.jsx("div", {
                        className: "rl-group",
                        children: s.jsx("textarea", {
                            rows: 2,
                            value: c.traits,
                            onChange: E("traits"),
                            placeholder: "这个人自己是什么样的",
                        }),
                    }),
                    s.jsx("div", { className: "rl-cap", children: "你们之间" }),
                    s.jsx("div", {
                        className: "rl-group",
                        children: s.jsx("textarea", {
                            rows: 3,
                            value: c.story,
                            onChange: E("story"),
                            placeholder: "和他之间一件具体的事",
                        }),
                    }),
                    s.jsx("div", { className: "rl-cap", children: "微信" }),
                    s.jsxs("div", {
                        className: `rl-card rl-wxcard ${f ? "on" : ""}`,
                        children: [
                            s.jsxs("div", {
                                className: "rl-wx-row",
                                children: [
                                    s.jsx("span", {
                                        className: "rl-wx-ic",
                                        children: s.jsx(Ps, { size: 20, weight: "fill" }),
                                    }),
                                    s.jsxs("div", {
                                        className: "rl-wx-copy",
                                        children: [
                                            s.jsx("b", { children: "开放微信号" }),
                                            s.jsxs("span", {
                                                children: [
                                                    "开放后可在「信息 → 添加朋友」搜到。加上的人一开始就知道自己认识",
                                                    k,
                                                    "。",
                                                ],
                                            }),
                                        ],
                                    }),
                                    s.jsx("button", {
                                        className: `rl-switch btn-plain ${f ? "on" : ""}`,
                                        role: "switch",
                                        "aria-checked": f,
                                        onClick: () =>
                                            p((t) => ({ ...t, wechatId: t.wechatId ? "" : Fe(t) })),
                                        disabled: !!h,
                                        children: s.jsx("i", {}),
                                    }),
                                ],
                            }),
                            f &&
                                s.jsxs("div", {
                                    className: "rl-wx-id",
                                    children: [
                                        s.jsx("span", { children: "微信号" }),
                                        s.jsx("input", {
                                            value: c.wechatId,
                                            onChange: (t) =>
                                                p((r) => ({
                                                    ...r,
                                                    wechatId: t.target.value.replace(/\s/g, ""),
                                                })),
                                            disabled: !!h,
                                        }),
                                    ],
                                }),
                            f &&
                                !h &&
                                l &&
                                s.jsxs("button", {
                                    className: "rl-cta full btn-plain",
                                    onClick: () => x(c),
                                    children: [
                                        s.jsx(ge, { size: 16, weight: "bold" }),
                                        s.jsx("span", { children: "现在添加好友" }),
                                        s.jsx(Vs, { size: 14, weight: "bold" }),
                                    ],
                                }),
                            h &&
                                s.jsxs("div", {
                                    className: "rl-linked",
                                    children: [
                                        s.jsx(F, { char: h, size: 28 }),
                                        s.jsxs("span", {
                                            children: [
                                                "已是联系人 · ",
                                                De(h).status === "friend" ? "好友" : "等待验证",
                                            ],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    l &&
                        s.jsxs("button", {
                            className: "rl-danger btn-plain",
                            onClick: () => y(!0),
                            children: [s.jsx(fe, { size: 15 }), "从圈子里移除"],
                        }),
                    s.jsx("div", { style: { height: 40 } }),
                ],
            }),
            s.jsx(Le, {
                open: o,
                onClose: () => y(!1),
                title: `移除 ${c.name}？`,
                message: "只移除这份资料。已经加成联系人的不受影响。",
                confirm: { label: "移除", destructive: !0, onClick: () => b(c.id) },
            }),
        ],
    });
}
const Ws = (e, l) => {
    const n = os(e).find((u) => u.linkedCharId === l.id);
    return n ? n.role || Ys(n.circle) : "";
};
function Sa({ a: e, b: l, done: n, startedAt: u = 0, onStop: b, onMinimize: x }) {
    const h = [`读取${A(e)}的人设与记忆`, `读取${A(l)}的人设与记忆`, "比对两人的世界设定", "推演两人的关系"],
        [c, p] = C.useState(() => (u ? Math.min(h.length - 1, Math.floor((Date.now() - u) / 1400)) : 0));
    return (
        C.useEffect(() => {
            if (n) {
                p(h.length);
                return;
            }
            const o = setInterval(() => p((y) => Math.min(h.length - 1, y + 1)), 1400);
            return () => clearInterval(o);
        }, [n]),
        s.jsxs("div", {
            className: `rl-query${n ? " done" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: [
                s.jsx("span", { className: "rl-kick", children: "关系推演" }),
                s.jsxs("div", {
                    className: "rl-query-pair",
                    children: [
                        s.jsxs("div", {
                            className: "rl-query-face",
                            children: [
                                s.jsx(F, { char: e, size: 64, dark: !0 }),
                                s.jsx("b", { children: A(e) }),
                            ],
                        }),
                        s.jsxs("div", {
                            className: "rl-query-line",
                            children: [
                                s.jsx("svg", {
                                    viewBox: "0 0 120 8",
                                    preserveAspectRatio: "none",
                                    "aria-hidden": !0,
                                    children: s.jsx("line", { x1: "0", y1: "4", x2: "120", y2: "4" }),
                                }),
                                s.jsx("i", { className: "rl-query-pulse" }),
                                n &&
                                    s.jsx("em", {
                                        children: n.acquainted === !1 ? "互不相识" : n.label || es(n).label,
                                    }),
                            ],
                        }),
                        s.jsxs("div", {
                            className: "rl-query-face",
                            children: [s.jsx(F, { char: l, size: 64 }), s.jsx("b", { children: A(l) })],
                        }),
                    ],
                }),
                s.jsx("ol", {
                    className: "rl-query-steps",
                    children: h.map((o, y) =>
                        s.jsxs(
                            "li",
                            {
                                className: y < c ? "ok" : y === c ? "now" : "",
                                style: { "--i": y },
                                children: [s.jsx("span", { className: "mk" }), o],
                            },
                            o,
                        ),
                    ),
                }),
                s.jsx("div", {
                    className: "rl-query-foot",
                    children: n
                        ? "推演完成"
                        : s.jsxs(s.Fragment, {
                              children: [
                                  s.jsx("button", {
                                      className: "btn-plain rl-query-btn",
                                      onClick: x,
                                      children: "缩小",
                                  }),
                                  s.jsx("button", {
                                      className: "btn-plain rl-query-btn",
                                      onClick: b,
                                      children: "停止",
                                  }),
                              ],
                          }),
                }),
            ],
        })
    );
}
function Ia({ char: e, state: l, patch: n, toast: u, initialDetail: b = null }) {
    var I, T;
    const x = (l.characters || []).filter((i) => i.id !== e.id),
        h = x.map((i) => ({ o: i, bond: Ks(l, e.id, i.id) })),
        c = h.filter((i) => i.bond),
        p = c.length ? Math.round(c.reduce((i, g) => i + g.bond.tension, 0) / c.length) : 0,
        o = c.length ? [...c].sort((i, g) => g.bond.tension - i.bond.tension)[0].bond : null,
        y = (i) => {
            var O;
            const g = (((O = l.relations) == null ? void 0 : O.bonds) || []).filter(
                (_) => !((_.a === i.a && _.b === i.b) || (_.a === i.b && _.b === i.a)),
            );
            n({ relations: { ...(l.relations || {}), bonds: [...g, i] } });
        },
        E = (i) =>
            n((g) => ({
                characters: (g.characters || []).map((O) => (i[O.id] ? { ...O, ...na(O, i[O.id]) } : O)),
            })),
        f = (i) => {
            var O, _;
            const g = new Set(
                [
                    (O = i == null ? void 0 : i.a) == null ? void 0 : O.id,
                    (_ = i == null ? void 0 : i.b) == null ? void 0 : _.id,
                ].filter(Boolean),
            );
            n((J) => ({
                characters: (J.characters || []).map((Q) =>
                    Array.isArray(Q.diary) && Q.diary.some((K) => g.has(K.id))
                        ? { ...Q, diary: Q.diary.filter((K) => !g.has(K.id)) }
                        : Q,
                ),
            }));
        },
        k = (i) => {
            var g;
            return n({
                relations: {
                    ...(l.relations || {}),
                    bonds: (((g = l.relations) == null ? void 0 : g.bonds) || []).filter(
                        (O) => O.id !== i.id,
                    ),
                },
            });
        },
        [t, r] = C.useState(null),
        [, v] = C.useState(0);
    C.useEffect(() => Na(() => v((i) => i + 1)), []);
    const S = (i) => ga(e.id, i.id),
        M = (i) => {
            var g;
            return ((g = S(i)) == null ? void 0 : g.status) === "running";
        },
        D = ((I = x.find((i) => M(i))) == null ? void 0 : I.id) || null,
        j = (i, { stage: g = !1 } = {}) => {
            (te(l, n, e, i, { watching: g }), g && r({ o: i }));
        },
        w = (i) => {
            (Fs(ts(e.id, i.id), !0), r({ o: i }));
        },
        B = () => {
            (t && Fs(ts(e.id, t.o.id), !1), r(null));
        },
        R = () => {
            (t && re(ts(e.id, t.o.id)), r(null));
        },
        $ = t && !t.done ? S(t.o) : null;
    C.useEffect(() => {
        var i;
        if ($) {
            if ($.status === "done") {
                (r({ o: t.o, done: $.bond }), Ds($.key));
                return;
            }
            $.status === "error" &&
                (u(((i = $.error) == null ? void 0 : i.message) || "推演未完成，请重试", "error"),
                Ds($.key),
                r(null));
        }
    }, [$ == null ? void 0 : $.status]);
    const L = t != null && t.done ? t.o.id : null;
    C.useEffect(() => {
        if (!L) return;
        const i = setTimeout(() => {
            (r(null), Y(L));
        }, 1500);
        return () => clearTimeout(i);
    }, [L]);
    const q = fa().filter((i) => (i.aId === e.id || i.bId === e.id) && !(t && ts(e.id, t.o.id) === i.key)),
        [P, G] = C.useState(!1),
        [Z, Y] = C.useState(b),
        U = h.filter((i) => !i.bond),
        V = c.find((i) => i.o.id === Z) || null;
    if (!x.length)
        return s.jsxs("div", {
            className: "rl-card rl-blank",
            children: [
                s.jsx("div", { className: "rl-blank-t", children: "只有他一个人" }),
                s.jsx("div", {
                    className: "rl-blank-s",
                    children: "再添加一个角色，就能看他们之间认不认识。",
                }),
            ],
        });
    const m = P || !c.length;
    return s.jsxs(s.Fragment, {
        children: [
            s.jsxs("div", {
                className: "rl-card rl-heat",
                children: [
                    s.jsxs("div", {
                        className: "rl-heat-l",
                        children: [
                            s.jsx("span", { className: "rl-kick", children: "张力" }),
                            s.jsx("b", { children: p }),
                            s.jsx("span", {
                                className: "rl-heat-s",
                                children: o ? `最高：${es(o).label}` : "还没有人相识",
                            }),
                        ],
                    }),
                    s.jsxs("div", {
                        className: "rl-heat-faces",
                        children: [
                            s.jsx(F, { char: e, size: 46, dark: !0 }),
                            c.slice(0, 4).map(({ o: i }) => s.jsx(F, { char: i, size: 38 }, i.id)),
                        ],
                    }),
                ],
            }),
            c.length > 0 &&
                s.jsxs(s.Fragment, {
                    children: [
                        s.jsxs("div", {
                            className: "rl-sec",
                            children: ["已有关系", s.jsx("b", { children: c.length })],
                        }),
                        s.jsx("div", {
                            className: "rl-list",
                            children: c.map(({ o: i, bond: g }) =>
                                s.jsxs(
                                    "button",
                                    {
                                        className: "rl-card rl-bond-row btn-plain",
                                        onClick: () => Y(i.id),
                                        children: [
                                            s.jsxs("div", {
                                                className: "rl-pair",
                                                children: [
                                                    s.jsx(F, { char: e, size: 40, dark: !0 }),
                                                    s.jsx(F, { char: i, size: 40 }),
                                                ],
                                            }),
                                            s.jsxs("div", {
                                                className: "rl-bond-row-main",
                                                children: [
                                                    s.jsxs("b", {
                                                        children: [
                                                            A(i),
                                                            g.label
                                                                ? s.jsx("em", { children: g.label })
                                                                : null,
                                                            g.unseen
                                                                ? s.jsx("i", {
                                                                      className: "rl-new-dot",
                                                                      "aria-label": "有新变化",
                                                                  })
                                                                : null,
                                                        ],
                                                    }),
                                                    s.jsx("span", {
                                                        className: "rl-bond-row-bar",
                                                        children: s.jsx("i", {
                                                            style: { width: `${g.tension}%` },
                                                        }),
                                                    }),
                                                    s.jsxs("small", {
                                                        children: [
                                                            g.acquainted === !1 && es(g).key === "unaware"
                                                                ? "互不相识"
                                                                : es(g).label,
                                                            Ns(e, i).length
                                                                ? ` · 共同记忆 ${Ns(e, i).length}`
                                                                : "",
                                                            Ws(e, i) ? ` · 圈子里的${Ws(e, i)}` : "",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            s.jsx(Us, {
                                                size: 16,
                                                weight: "bold",
                                                className: "rl-bond-row-chev",
                                            }),
                                        ],
                                    },
                                    i.id,
                                ),
                            ),
                        }),
                    ],
                }),
            U.length > 0 &&
                s.jsxs(s.Fragment, {
                    children: [
                        s.jsxs("button", {
                            className: "rl-sec rl-sec-btn btn-plain",
                            onClick: () => G((i) => !i),
                            "aria-expanded": m,
                            children: [
                                "未连接",
                                s.jsx("b", { children: U.length }),
                                c.length > 0 &&
                                    s.jsx(we, { size: 12, weight: "bold", className: m ? "open" : "" }),
                            ],
                        }),
                        m &&
                            s.jsx("div", {
                                className: "rl-list",
                                children: U.map(({ o: i }) =>
                                    s.jsxs(
                                        "div",
                                        {
                                            className: "rl-card rl-bond-new",
                                            children: [
                                                s.jsxs("div", {
                                                    className: "rl-pair",
                                                    children: [
                                                        s.jsx(F, { char: e, size: 40, dark: !0 }),
                                                        s.jsx(F, { char: i, size: 40 }),
                                                    ],
                                                }),
                                                s.jsxs("div", {
                                                    className: "rl-bond-new-copy",
                                                    children: [
                                                        s.jsxs("b", { children: [A(e), " × ", A(i)] }),
                                                        s.jsx("span", { children: "还不知道他们认不认识" }),
                                                    ],
                                                }),
                                                s.jsx("button", {
                                                    className: `rl-pill solid btn-plain ${M(i) ? "busy" : ""}`,
                                                    onClick: () => (M(i) ? w(i) : j(i, { stage: !0 })),
                                                    children: M(i) ? "推演中…" : "推演关系",
                                                }),
                                            ],
                                        },
                                        i.id,
                                    ),
                                ),
                            }),
                    ],
                }),
            t &&
                s.jsx(Sa, {
                    a: e,
                    b: t.o,
                    done: t.done,
                    startedAt: ((T = S(t.o)) == null ? void 0 : T.startedAt) || 0,
                    onStop: R,
                    onMinimize: B,
                }),
            q.length > 0 &&
                !t &&
                s.jsx("div", {
                    className: "rl-bg-jobs",
                    children: q.map((i) => {
                        const g = x.find((O) => O.id === (i.aId === e.id ? i.bId : i.aId));
                        return g
                            ? s.jsxs(
                                  "button",
                                  {
                                      className: "btn-plain rl-bg-job",
                                      onClick: () => w(g),
                                      children: [
                                          s.jsx("span", { className: "rl-bg-spin", "aria-hidden": !0 }),
                                          "正在推演 ",
                                          A(e),
                                          " × ",
                                          A(g),
                                      ],
                                  },
                                  i.key,
                              )
                            : null;
                    }),
                }),
            s.jsx(Xs, {
                open: !!V,
                onClose: () => Y(null),
                title: "关系",
                children:
                    V &&
                    s.jsx(Ba, {
                        me: e,
                        other: V.o,
                        bond: V.bond,
                        busy: D === V.o.id,
                        state: l,
                        patch: n,
                        toast: u,
                        onClose: () => Y(null),
                        onRegen: () => j(V.o),
                        onSave: y,
                        onDrop: () => {
                            (k(V.bond), Y(null));
                        },
                        onAddShared: (i) => E(We([e, V.o], { fallback: i, source: "manual", nameOf: A })),
                        onRemoveShared: f,
                    }),
            }),
        ],
    });
}
const Aa = { gen: "推演", cast: "群像卡", edit: "手动设定", legacy: "最初记录" },
    Ea = {
        label: "关系名",
        history: "来历",
        aView: "看法",
        bView: "看法",
        aRead: "理解",
        bRead: "理解",
        aInner: "心里的话",
        bInner: "心里的话",
        tension: "张力",
        aKnows: "知道",
        bKnows: "知道",
        acquainted: "是否认识",
        basis: "依据",
        now: "当前关系",
        threads: "未了的事",
        setting: "初始设定",
    },
    qs = (e, l, n) => (e === "both" ? "两人都知道" : `只有${n(e === "a" ? l.a : l.b)}知道`),
    ns = (e) => {
        if (!e || e < 9466848e5) return "";
        const l = new Date(e);
        return `${l.getMonth() + 1}月${l.getDate()}日`;
    },
    ps = (e, l) => (ns(e) ? `${ns(e)} · ${l}` : l);
function za({ series: e }) {
    if (!e || e.length < 2) return null;
    const l = 132,
        n = 40,
        u = 4,
        b = e[0].at,
        x = e[e.length - 1].at || b + 1,
        h = (f) => u + ((f - b) / Math.max(1, x - b)) * (l - u * 2),
        c = Math.max(0, Math.min(...e.map((f) => f.v)) - 8),
        p = Math.min(100, Math.max(...e.map((f) => f.v)) + 8),
        o = (f) => n - u - ((f - c) / Math.max(1, p - c)) * (n - u * 2),
        y = e.map((f, k) => `${k ? "L" : "M"}${h(f.at).toFixed(1)},${o(f.v).toFixed(1)}`).join(" "),
        E = e[e.length - 1];
    return s.jsxs("svg", {
        className: "bd-spark",
        width: l,
        height: n,
        viewBox: `0 0 ${l} ${n}`,
        "aria-label": "张力变化",
        children: [
            s.jsx("path", { d: `M${u},${n - u} L${l - u},${n - u}`, className: "bd-spark-mid" }),
            s.jsx("path", { d: y, className: "bd-spark-line" }),
            s.jsx("circle", { cx: h(E.at), cy: o(E.v), r: "3", className: "bd-spark-dot" }),
        ],
    });
}
function Ba({
    me: e,
    other: l,
    bond: n,
    busy: u,
    state: b,
    patch: x,
    toast: h,
    onClose: c,
    onRegen: p,
    onSave: o,
    onDrop: y,
    onAddShared: E,
    onRemoveShared: f,
}) {
    const [k, t] = C.useState(!1),
        [r, v] = C.useState(""),
        [S, M] = C.useState("two"),
        [D, j] = C.useState("all"),
        [w, B] = C.useState(!1),
        [R, $] = C.useState(""),
        L = ds(n, e.id),
        q = ds(n, l.id),
        P = Ns(e, l),
        G = qe(n),
        Z = Pe(n),
        Y = Ve(n, e, l),
        U = Y.a.length + Y.b.length,
        V = [...G].reverse().find((a) => a.kind === "update" && a.reason),
        m = (a) => A(a),
        I = Ue(n),
        T = _e(n),
        i = He(n),
        g = (a) => i[n.a === a ? "a" : "b"],
        O = (a) => {
            var N, W;
            const d = Number(
                (W = (N = a == null ? void 0 : a.relationStage) == null ? void 0 : N.affection) == null
                    ? void 0
                    : W.value,
            );
            return Number.isFinite(d) ? `${Math.round(d)} / 100` : "尚未形成";
        },
        _ = () => {
            const a = r.trim();
            a && (E(a), v(""));
        },
        J = () => {
            n.unseen && o({ ...n, unseen: !1 });
        };
    bs.useEffect(() => {
        J();
    }, []);
    const [Q, K] = C.useState(!1),
        cs = (a = n) => {
            (K(!0),
                la(b, x, a)
                    .catch(() => {})
                    .finally(() => K(!1)));
        };
    bs.useEffect(() => {
        n.setting && !zs(n) && cs();
    }, [n.setting]);
    const vs = (a) => m(a === e.id ? e : l),
        de = () => {
            (x((a) => ({
                characters: (a.characters || []).map((d) => {
                    var N;
                    return d.id === e.id
                        ? {
                              ...d,
                              ...ia(d, "main", [
                                  ...new Set([
                                      ...(((N = d.offlineCast) == null ? void 0 : N.main) || []),
                                      l.id,
                                  ]),
                              ]),
                          }
                        : d;
                }),
            })),
                ta(e.id, { at: Date.now(), plain: !0 }),
                c == null || c(),
                window.dispatchEvent(new CustomEvent("litot:goto-offline", { detail: { charId: e.id } })));
        },
        oe = () => {
            const a = (b.groups || []).find(
                    (N) =>
                        (N.memberIds || []).length === 2 &&
                        N.memberIds.includes(e.id) &&
                        N.memberIds.includes(l.id),
                ),
                d = (a == null ? void 0 : a.id) || ra("grp_");
            if (!a) {
                const N = Date.now();
                x((W) => ({
                    groups: [
                        ...(W.groups || []),
                        {
                            ...ca,
                            id: d,
                            name: `${m(e)}、${m(l)}`,
                            ownerId: "me",
                            memberIds: [e.id, l.id],
                            createdAt: N,
                            messages: [da(`${oa(b.me)} 建了这个群`, N)],
                            memory: { inbound: !0, outbound: !0, perMember: {} },
                        },
                    ],
                }));
            }
            (c == null || c(),
                window.dispatchEvent(new CustomEvent("litot:open-group", { detail: { groupId: d } })));
        },
        he = async (a) => {
            var z;
            B(!1);
            const d = hs.usableLane((z = b.api) == null ? void 0 : z.chat);
            if (!(d != null && d.baseUrl)) {
                h("请先在 API 设置中配置聊天通道", "error");
                return;
            }
            const N = a === e.id ? e : l,
                W = a === e.id ? l : e;
            $("voice");
            try {
                const ss = await hs.chat(d, ha(b, n, N, W), { temperature: 0.8 }),
                    Is = String((ss == null ? void 0 : ss.content) || "")
                        .replace(/<think>[\s\S]*?<\/think>/gi, "")
                        .trim()
                        .slice(0, 300);
                if (!Is) throw new Error("这次没有写出来，请重试");
                (o(ma(n, { kind: "voice", who: a, text: Is })), M("log"));
            } catch (ss) {
                h(ss.message || "生成失败", "error");
            }
            $("");
        },
        ys = async () => {
            if (!U) {
                p();
                return;
            }
            $("update");
            try {
                const a = await xa(b, x, n);
                a != null && a.skipped && !(a != null && a.nothing)
                    ? h("请先在 API 设置中配置聊天通道", "error")
                    : a != null && a.ok && (h("已按最近的记忆更新"), M("log"));
            } catch (a) {
                h(a.message || "更新失败", "error");
            }
            $("");
        },
        $s = P.filter((a) => a.a && a.b),
        ks = P.filter((a) => !a.a || !a.b),
        Cs = D === "both" ? $s : D === "one" ? ks : P,
        Ss = [
            ...G.map((a) => ({ t: "log", at: a.at, l: a })),
            ...P.map((a) => ({ t: "mem", at: a.at, x: a })),
        ].sort((a, d) => (d.at || 0) - (a.at || 0)),
        me = Bs(e, l),
        xe = Bs(l, e),
        ms = (a) => [...G].reverse().find((d) => d.kind === "voice" && d.who === a),
        je = [
            ["眼中的对方", L.mine, q.mine, ""],
            ["对眼下的理解", L.read, q.read, ""],
            ["心里的话", L.inner, q.inner, "quote"],
        ],
        ls = ({ c: a }) =>
            s.jsxs("span", {
                className: "bd2-who",
                children: [
                    s.jsx(F, { char: a, size: 22, dark: a.id === e.id }),
                    s.jsx("b", { children: m(a) }),
                ],
            });
    return s.jsxs("div", {
        className: "bd2",
        children: [
            s.jsxs("header", {
                className: "bd2-head",
                children: [
                    s.jsxs("div", {
                        className: "bd2-faces",
                        children: [
                            s.jsx(F, { char: e, size: 64, dark: !0 }),
                            s.jsx(F, { char: l, size: 64 }),
                        ],
                    }),
                    s.jsxs("span", {
                        className: "bd2-eyebrow",
                        children: ["RELATION", n.unseen ? " · NEW" : ""],
                    }),
                    s.jsxs("h2", {
                        className: "bd2-title",
                        children: [m(e), s.jsx("i", { children: "×" }), m(l)],
                    }),
                    n.label && s.jsx("span", { className: "bd2-label", children: n.label }),
                    n.history && s.jsx("p", { className: "bd2-history", children: n.history }),
                    n.basis &&
                        s.jsxs("p", {
                            className: "bd2-basis",
                            children: [s.jsx("span", { children: "依据" }), n.basis],
                        }),
                ],
            }),
            s.jsxs("section", {
                className: "bd2-tension",
                children: [
                    s.jsxs("div", {
                        className: "bd2-tension-l",
                        children: [
                            s.jsx("span", { className: "bd2-eyebrow", children: "NOW · 当前关系" }),
                            s.jsx("div", {
                                className: "bd2-tension-v",
                                children: s.jsx("b", {
                                    className: "bd2-tone",
                                    children: n.now || n.label || es(n).label,
                                }),
                            }),
                            s.jsxs("small", {
                                children: [es(n).label, Z.length > 1 ? ` · 共 ${Z.length - 1} 次变化` : ""],
                            }),
                        ],
                    }),
                    s.jsx(za, { series: Z }),
                ],
            }),
            s.jsxs("nav", {
                className: "bd2-acts",
                children: [
                    s.jsxs("button", {
                        className: "btn-plain",
                        onClick: de,
                        children: [
                            s.jsx("span", { children: s.jsx(ve, { size: 20 }) }),
                            s.jsx("em", { children: "见一面" }),
                        ],
                    }),
                    s.jsxs("button", {
                        className: "btn-plain",
                        onClick: oe,
                        children: [
                            s.jsx("span", { children: s.jsx(ye, { size: 20 }) }),
                            s.jsx("em", { children: "拉个群" }),
                        ],
                    }),
                    s.jsxs("button", {
                        className: "btn-plain",
                        onClick: () => B(!0),
                        disabled: R === "voice",
                        children: [
                            s.jsx("span", {
                                children:
                                    R === "voice"
                                        ? s.jsx(As, { size: 18, className: "spin" })
                                        : s.jsx($e, { size: 20 }),
                            }),
                            s.jsx("em", { children: "听他说" }),
                        ],
                    }),
                    s.jsxs("button", {
                        className: "btn-plain",
                        onClick: ys,
                        disabled: !!R || u,
                        children: [
                            s.jsx("span", {
                                children: s.jsx(As, {
                                    size: 19,
                                    className: R === "update" || u ? "spin" : "",
                                }),
                            }),
                            s.jsx("em", { children: U ? "更新关系" : "重新推演" }),
                        ],
                    }),
                ],
            }),
            (U > 0 || V) &&
                s.jsxs("button", {
                    className: "btn-plain bd2-note",
                    onClick: U ? ys : () => M("log"),
                    disabled: !!R,
                    children: [
                        s.jsx("i", { className: U ? "on" : "" }),
                        s.jsxs("span", {
                            children: [
                                s.jsx("b", {
                                    children: U
                                        ? `有 ${U} 条新记忆尚未计入`
                                        : `最近的变化${ns(V.at) ? ` · ${ns(V.at)}` : ""}`,
                                }),
                                U ? "点按以按最近的事更新这段关系" : V.reason,
                            ],
                        }),
                        s.jsx(Us, { size: 13, weight: "bold" }),
                    ],
                }),
            s.jsx("div", {
                className: "bd2-tabs",
                role: "tablist",
                children: [
                    ["two", "两个人", ""],
                    ["mem", "共同记忆", P.length],
                    ["log", "变化", G.length],
                ].map(([a, d, N]) =>
                    s.jsxs(
                        "button",
                        {
                            role: "tab",
                            "aria-selected": S === a,
                            className: `btn-plain${S === a ? " on" : ""}`,
                            onClick: () => M(a),
                            children: [d, N !== "" ? s.jsx("em", { className: "tn", children: N }) : null],
                        },
                        a,
                    ),
                ),
            }),
            S === "two" &&
                s.jsxs("div", {
                    className: "bd2-sheet",
                    children: [
                        je.map(([a, d, N, W]) =>
                            s.jsxs(
                                "section",
                                {
                                    className: "bd2-row",
                                    children: [
                                        s.jsx("h3", { children: a }),
                                        s.jsxs("div", {
                                            className: "bd2-pair",
                                            children: [
                                                s.jsx(ls, { c: e }),
                                                s.jsx("p", {
                                                    className: W === "quote" ? "bd2-quote" : "",
                                                    children: d || "—",
                                                }),
                                            ],
                                        }),
                                        s.jsxs("div", {
                                            className: "bd2-pair",
                                            children: [
                                                s.jsx(ls, { c: l }),
                                                s.jsx("p", {
                                                    className: W === "quote" ? "bd2-quote" : "",
                                                    children: N || "—",
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                a,
                            ),
                        ),
                        s.jsxs("section", {
                            className: "bd2-row",
                            children: [
                                s.jsx("h3", { children: "现状" }),
                                [
                                    [e, g(e.id), me],
                                    [l, g(l.id), xe],
                                ].map(([a, d, N]) =>
                                    s.jsxs(
                                        "div",
                                        {
                                            className: "bd2-st",
                                            children: [
                                                s.jsx(ls, { c: a }),
                                                s.jsxs("dl", {
                                                    children: [
                                                        s.jsxs("div", {
                                                            children: [
                                                                s.jsx("dt", { children: "认知" }),
                                                                s.jsxs("dd", {
                                                                    children: [
                                                                        s.jsx("b", {
                                                                            children: as(Zs, d.aware),
                                                                        }),
                                                                        d.awareWhy
                                                                            ? s.jsx("small", {
                                                                                  children: d.awareWhy,
                                                                              })
                                                                            : null,
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        s.jsxs("div", {
                                                            children: [
                                                                s.jsx("dt", { children: "在意程度" }),
                                                                s.jsxs("dd", {
                                                                    children: [
                                                                        s.jsx("b", { children: O(a) }),
                                                                        s.jsx("small", {
                                                                            children: "来自好感度",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        s.jsxs("div", {
                                                            children: [
                                                                s.jsx("dt", { children: "威胁感" }),
                                                                s.jsxs("dd", {
                                                                    children: [
                                                                        s.jsx("b", {
                                                                            children: as(se, d.threat),
                                                                        }),
                                                                        d.threatWhy
                                                                            ? s.jsx("small", {
                                                                                  children: d.threatWhy,
                                                                              })
                                                                            : null,
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        s.jsxs("div", {
                                                            children: [
                                                                s.jsx("dt", { children: "外显" }),
                                                                s.jsxs("dd", {
                                                                    children: [
                                                                        s.jsx("b", {
                                                                            children: as(ee, d.shown),
                                                                        }),
                                                                        d.shownWhy
                                                                            ? s.jsx("small", {
                                                                                  children: d.shownWhy,
                                                                              })
                                                                            : null,
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                N.shared || N.mentions[0]
                                                    ? s.jsxs("p", {
                                                          className: "bd2-know-mem",
                                                          children: [
                                                              N.shared
                                                                  ? `和${m(a.id === e.id ? l : e)}一起经历过 ${N.shared} 件事`
                                                                  : "",
                                                              N.shared && N.mentions[0] ? "；" : "",
                                                              N.mentions[0]
                                                                  ? `他记得：${String(N.mentions[0].text || "").slice(0, 40)}${String(N.mentions[0].text || "").length > 40 ? "…" : ""}`
                                                                  : "",
                                                          ],
                                                      })
                                                    : null,
                                            ],
                                        },
                                        a.id,
                                    ),
                                ),
                                s.jsx("div", {
                                    className: "bd2-st two",
                                    children: s.jsxs("dl", {
                                        children: [
                                            s.jsxs("div", {
                                                children: [
                                                    s.jsx("dt", { children: "两人温度" }),
                                                    s.jsxs("dd", {
                                                        children: [
                                                            s.jsx("b", { children: as(le, i.warmthNow) }),
                                                            i.warmthNowWhy
                                                                ? s.jsx("small", { children: i.warmthNowWhy })
                                                                : null,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            s.jsxs("div", {
                                                children: [
                                                    s.jsx("dt", { children: "走向" }),
                                                    s.jsxs("dd", {
                                                        children: [
                                                            s.jsx("b", { children: as(ie, i.trend) }),
                                                            i.trendWhy
                                                                ? s.jsx("small", { children: i.trendWhy })
                                                                : null,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                (n.threads || []).length > 0 &&
                                    s.jsxs("div", {
                                        className: "bd2-st two bd2-threads",
                                        children: [
                                            s.jsx("span", { className: "bd2-th-h", children: "未了的事" }),
                                            n.threads.map((a) =>
                                                s.jsxs(
                                                    "div",
                                                    {
                                                        className: `bd2-th ${a.state}`,
                                                        children: [
                                                            s.jsx("p", { children: a.text }),
                                                            s.jsxs("small", {
                                                                children: [
                                                                    as(ae, a.state),
                                                                    " · ",
                                                                    qs(a.who, n, vs),
                                                                    a.why ? ` · ${a.why}` : "",
                                                                ],
                                                            }),
                                                        ],
                                                    },
                                                    a.id,
                                                ),
                                            ),
                                        ],
                                    }),
                                s.jsx("p", {
                                    className: "bd2-toggle-note",
                                    children:
                                        "现状随两人的记忆自动更新，可在下方「编辑关系」中手动校正；改动会记入「变化」。",
                                }),
                            ],
                        }),
                        s.jsxs("section", {
                            className: "bd2-row bd2-origin",
                            children: [
                                s.jsxs("h3", {
                                    children: [
                                        "初始设定",
                                        s.jsxs("em", {
                                            children: [
                                                Aa[I.source] || "推演",
                                                I.at ? ` · ${ns(I.at) || ""}` : "",
                                            ],
                                        }),
                                    ],
                                }),
                                s.jsxs("p", {
                                    className: "bd2-origin-line",
                                    children: [
                                        I.label ? s.jsx("b", { children: I.label }) : null,
                                        T.length
                                            ? s.jsxs("span", { children: ["现状已有 ", T.length, " 项不同"] })
                                            : s.jsx("span", { children: "与现状一致" }),
                                    ],
                                }),
                                n.setting
                                    ? s.jsx("p", {
                                          className: "bd2-origin-h bd2-setting",
                                          children: n.setting,
                                      })
                                    : s.jsxs(s.Fragment, {
                                          children: [
                                              I.history &&
                                                  I.history !== n.history &&
                                                  s.jsx("p", {
                                                      className: "bd2-origin-h",
                                                      children: I.history,
                                                  }),
                                              n.note &&
                                                  s.jsx("p", { className: "bd2-origin-h", children: n.note }),
                                          ],
                                      }),
                                n.setting &&
                                    (zs(n)
                                        ? n.parse.items.length > 0 &&
                                          s.jsx("ul", {
                                              className: "bd2-parse",
                                              children: n.parse.items.map((a, d) =>
                                                  s.jsxs(
                                                      "li",
                                                      {
                                                          children: [
                                                              s.jsx("em", { children: as(Je, a.kind) }),
                                                              s.jsx("span", { children: a.text }),
                                                              s.jsx("small", { children: qs(a.who, n, vs) }),
                                                          ],
                                                      },
                                                      d,
                                                  ),
                                              ),
                                          })
                                        : s.jsx("button", {
                                              className: "btn-plain bd2-origin-btn",
                                              disabled: Q,
                                              onClick: () => cs(),
                                              children: Q ? "正在拆解…" : "拆解初始设定",
                                          })),
                                T.length > 0 &&
                                    s.jsx("button", {
                                        className: "btn-plain bd2-origin-btn",
                                        onClick: () => o(Ke(n)),
                                        children: "回到初始设定",
                                    }),
                                s.jsx("p", {
                                    className: "bd2-toggle-note",
                                    children: n.setting
                                        ? "以原文为准。聊天时每人只读到原文中自己知道的部分；拆解用于区分谁知道什么，并记录未了的事的进展。"
                                        : "导出群像卡时默认带初始设定；随记忆形成的现状依赖记忆，不随卡导出。",
                                }),
                            ],
                        }),
                        (ms(e.id) || ms(l.id)) &&
                            s.jsxs("section", {
                                className: "bd2-row",
                                children: [
                                    s.jsx("h3", { children: "最近的心声" }),
                                    [e, l].map((a) => {
                                        const d = ms(a.id);
                                        return d
                                            ? s.jsxs(
                                                  "div",
                                                  {
                                                      className: "bd2-pair",
                                                      children: [
                                                          s.jsx(ls, { c: a }),
                                                          s.jsxs("p", {
                                                              className: "bd2-quote",
                                                              children: [
                                                                  d.text,
                                                                  s.jsx("small", { children: ns(d.at) }),
                                                              ],
                                                          }),
                                                      ],
                                                  },
                                                  a.id,
                                              )
                                            : null;
                                    }),
                                ],
                            }),
                    ],
                }),
            S === "mem" &&
                s.jsxs("div", {
                    className: "bd2-sheet",
                    children: [
                        P.length > 0 &&
                            s.jsx("div", {
                                className: "bd2-filter",
                                children: [
                                    ["all", "全部", P.length],
                                    ["both", "两人都记得", $s.length],
                                    ["one", "只有一方记得", ks.length],
                                ].map(([a, d, N]) =>
                                    s.jsxs(
                                        "button",
                                        {
                                            className: `btn-plain${D === a ? " on" : ""}`,
                                            onClick: () => j(a),
                                            children: [d, s.jsx("em", { className: "tn", children: N })],
                                        },
                                        a,
                                    ),
                                ),
                            }),
                        P.length === 0 &&
                            s.jsx("p", {
                                className: "bd2-empty",
                                children:
                                    "还没有共同记忆。记忆总结、多人线下收篇、推演时会自动补充，也可以在下方手动添加，同时记入两人的记忆库。",
                            }),
                        Cs.map((a) => {
                            var d, N;
                            return s.jsxs(
                                "section",
                                {
                                    className: "bd2-row bd2-mem",
                                    children: [
                                        s.jsxs("div", {
                                            className: "bd2-mem-h",
                                            children: [
                                                s.jsxs("span", {
                                                    children: [
                                                        ns(
                                                            Math.max(
                                                                ((d = a.a) == null ? void 0 : d.at) || 0,
                                                                ((N = a.b) == null ? void 0 : N.at) || 0,
                                                            ),
                                                        ) || "更早",
                                                        !a.a || !a.b
                                                            ? s.jsx("i", { children: "只有一方记得" })
                                                            : null,
                                                    ],
                                                }),
                                                s.jsx("button", {
                                                    className: "btn-plain",
                                                    "aria-label": "删除这条共同记忆",
                                                    onClick: () => f(a),
                                                    children: s.jsx(ke, { size: 12, weight: "bold" }),
                                                }),
                                            ],
                                        }),
                                        s.jsxs("div", {
                                            className: "bd2-pair",
                                            children: [
                                                s.jsx(ls, { c: e }),
                                                s.jsx("p", {
                                                    className: a.a ? "" : "dim",
                                                    children: a.a ? a.a.text : "不记得这件事",
                                                }),
                                            ],
                                        }),
                                        s.jsxs("div", {
                                            className: "bd2-pair",
                                            children: [
                                                s.jsx(ls, { c: l }),
                                                s.jsx("p", {
                                                    className: a.b ? "" : "dim",
                                                    children: a.b ? a.b.text : "不记得这件事",
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                a.key,
                            );
                        }),
                        P.length > 0 &&
                            Cs.length === 0 &&
                            s.jsx("p", { className: "bd2-empty", children: "没有符合条件的记忆。" }),
                        s.jsxs("div", {
                            className: "bd2-add",
                            children: [
                                s.jsx("input", {
                                    value: r,
                                    placeholder: "添加一条共同记忆",
                                    onChange: (a) => v(a.target.value),
                                    onKeyDown: (a) => {
                                        a.key === "Enter" && _();
                                    },
                                }),
                                s.jsx("button", {
                                    className: "btn-plain",
                                    disabled: !r.trim(),
                                    onClick: _,
                                    children: "添加",
                                }),
                            ],
                        }),
                        s.jsx("p", {
                            className: "bd2-foot",
                            children:
                                "共同记忆是两人各自长期记忆中的条目，会被正常想起，提到对方时更容易想起。在此删除会同时删除两边的条目；只删除一方的，请在其记忆库中操作。",
                        }),
                    ],
                }),
            S === "log" &&
                s.jsxs("div", {
                    className: "bd2-sheet bd2-tl",
                    children: [
                        Ss.length === 0 &&
                            s.jsx("p", {
                                className: "bd2-empty",
                                children: "还没有变化记录。推演、更新、听他说之后会记在这里。",
                            }),
                        Ss.map((a) => {
                            if (a.t === "mem") {
                                const z = a.x;
                                return s.jsxs(
                                    "div",
                                    {
                                        className: "bd2-tl-row",
                                        children: [
                                            s.jsx("span", {
                                                className: "bd2-tl-mk",
                                                children: s.jsx("i", { className: "hollow" }),
                                            }),
                                            s.jsxs("div", {
                                                className: "bd2-tl-body",
                                                children: [
                                                    s.jsx("span", {
                                                        className: "bd2-tl-meta",
                                                        children: ps(a.at, "一起经历"),
                                                    }),
                                                    s.jsx("p", { children: (z.a || z.b).text }),
                                                ],
                                            }),
                                        ],
                                    },
                                    `m-${z.key}`,
                                );
                            }
                            const d = a.l;
                            if (d.kind === "voice") {
                                const z = d.who === e.id ? e : l;
                                return s.jsxs(
                                    "div",
                                    {
                                        className: "bd2-tl-row",
                                        children: [
                                            s.jsx("span", {
                                                className: "bd2-tl-mk",
                                                children: s.jsx(F, {
                                                    char: z,
                                                    size: 20,
                                                    dark: z.id === e.id,
                                                }),
                                            }),
                                            s.jsxs("div", {
                                                className: "bd2-tl-body",
                                                children: [
                                                    s.jsx("span", {
                                                        className: "bd2-tl-meta",
                                                        children: ps(d.at, `${m(z)}的心声`),
                                                    }),
                                                    s.jsx("p", { className: "bd2-quote", children: d.text }),
                                                ],
                                            }),
                                        ],
                                    },
                                    d.id,
                                );
                            }
                            const N =
                                    Number.isFinite(d.tensionFrom) &&
                                    Number.isFinite(d.tensionTo) &&
                                    d.tensionFrom !== d.tensionTo
                                        ? d.tensionTo - d.tensionFrom
                                        : 0,
                                W = [
                                    ...new Set(
                                        (d.changed || [])
                                            .filter((z) => z !== "tension")
                                            .map(
                                                (z) =>
                                                    `${/^a/.test(z) && z !== "label" ? m(n.a === e.id ? e : l) : /^b/.test(z) ? m(n.b === e.id ? e : l) : ""}${Ea[z] || z}`,
                                            ),
                                    ),
                                ];
                            return s.jsxs(
                                "div",
                                {
                                    className: "bd2-tl-row",
                                    children: [
                                        s.jsx("span", {
                                            className: "bd2-tl-mk",
                                            children: s.jsx("i", {
                                                className:
                                                    d.kind === "gen" || d.kind === "cast" ? "solid" : "",
                                            }),
                                        }),
                                        s.jsxs("div", {
                                            className: "bd2-tl-body",
                                            children: [
                                                s.jsxs("span", {
                                                    className: "bd2-tl-meta",
                                                    children: [
                                                        ps(
                                                            d.at,
                                                            d.kind === "gen"
                                                                ? "推演"
                                                                : d.kind === "cast"
                                                                  ? "群像卡导入"
                                                                  : d.kind === "edit"
                                                                    ? "手动修改"
                                                                    : "随记忆更新",
                                                        ),
                                                        N
                                                            ? s.jsxs("i", {
                                                                  className: "tn",
                                                                  children: [
                                                                      "张力 ",
                                                                      d.tensionFrom,
                                                                      " → ",
                                                                      d.tensionTo,
                                                                  ],
                                                              })
                                                            : null,
                                                    ],
                                                }),
                                                d.reason && s.jsx("p", { children: d.reason }),
                                                W.length > 0 &&
                                                    s.jsx("div", {
                                                        className: "bd2-tl-tags",
                                                        children: W.map((z) =>
                                                            s.jsx("em", { children: z }, z),
                                                        ),
                                                    }),
                                            ],
                                        }),
                                    ],
                                },
                                d.id,
                            );
                        }),
                    ],
                }),
            s.jsxs("footer", {
                className: "bd2-end",
                children: [
                    s.jsx("button", { className: "btn-plain", onClick: () => t(!0), children: "编辑关系" }),
                    s.jsx("i", {}),
                    s.jsx("button", { className: "btn-plain danger", onClick: y, children: "删除关系" }),
                ],
            }),
            s.jsxs(Gs, {
                open: w,
                onClose: () => B(!1),
                title: s.jsxs("span", {
                    className: "cav-h",
                    children: [s.jsx("em", { children: "VOICE" }), s.jsx("b", { children: "听谁说" })],
                }),
                maxWidth: 340,
                bare: !0,
                children: [
                    s.jsx("div", {
                        className: "bd-who",
                        children: [e, l].map((a) =>
                            s.jsxs(
                                "button",
                                {
                                    className: "btn-plain",
                                    onClick: () => he(a.id),
                                    children: [
                                        s.jsx(F, { char: a, size: 52, dark: a.id === e.id }),
                                        s.jsx("b", { children: m(a) }),
                                        s.jsxs("small", {
                                            children: ["此刻心里对", m(a.id === e.id ? l : e), "的想法"],
                                        }),
                                    ],
                                },
                                a.id,
                            ),
                        ),
                    }),
                    s.jsx("p", {
                        className: "bd-who-note",
                        children: "生成一段他此刻不会说出口的想法，记入这段关系的变化中。",
                    }),
                ],
            }),
            s.jsx(Ra, {
                open: k,
                bond: n,
                me: e,
                other: l,
                onClose: () => t(!1),
                onSave: (a, d) => {
                    let N = Ge(n, a, { kind: "edit", reason: d ? "手动修改，并设为初始设定" : "手动修改" });
                    const W = String(a.setting || "")
                            .trim()
                            .slice(0, ne),
                        z = W !== (n.setting || "");
                    ((N = {
                        ...N,
                        setting: W,
                        now: String(a.now || "")
                            .trim()
                            .slice(0, 16),
                        threads: a.threads || N.threads,
                        ...(z ? { parse: null } : {}),
                    }),
                        z && W && !n.setting && (N = { ...N, history: "", note: "" }));
                    const ss = d ? Qe(N, "edit") : N;
                    (o(ss), t(!1), z && W && cs(ss));
                },
            }),
        ],
    });
}
function Ra({ open: e, bond: l, me: n, other: u, onClose: b, onSave: x }) {
    const h = () => ({ ...l, ...ja(l), setting: ua(l), threads: (l.threads || []).map((r) => ({ ...r })) }),
        [c, p] = C.useState(h),
        [o, y] = C.useState(!Rs(l));
    bs.useEffect(() => {
        e && (p(h()), y(!Rs(l)));
    }, [e]);
    const E = l.a === n.id,
        f = A(E ? n : u),
        k = A(E ? u : n),
        t = (r) => p((v) => ({ ...v, ...r }));
    return s.jsx(Xs, {
        open: e,
        onClose: b,
        title: "编辑关系",
        rightAction: s.jsx("button", {
            className: "ios-capsule btn-plain",
            onClick: () => x({ ...c, updatedAt: Date.now() }, o),
            children: "保存",
        }),
        children: s.jsxs("div", {
            className: "pb-8",
            children: [
                s.jsx(H, {
                    header: `${f} × ${k}`,
                    children: s.jsx(Ms, {
                        label: "关系",
                        children: s.jsx(Ts, {
                            value: c.label,
                            onChange: (r) => t({ label: r.slice(0, 24) }),
                            placeholder: "两人之间的关系",
                        }),
                    }),
                }),
                s.jsx(H, {
                    header: "初始设定",
                    footer: "以自由文字描述两人的关系、过往与现状。保存后会自动拆解为发生过的事、各自的说法与未了的事，并标注谁知道；聊天时每人只读到自己知道的部分。",
                    children: s.jsx("div", {
                        className: "ios-row",
                        children: s.jsx("textarea", {
                            className: "rl-edit-ta rl-setting-ta",
                            rows: 8,
                            value: c.setting || "",
                            maxLength: ne,
                            onChange: (r) => t({ setting: r.target.value }),
                            placeholder: "两人之间的关系、发生过的事、还没有了结的事，以及谁知道什么。",
                        }),
                    }),
                }),
                s.jsx(H, {
                    header: `${f} 怎么看 ${k}`,
                    children: s.jsx("div", {
                        className: "ios-row",
                        children: s.jsx("textarea", {
                            className: "rl-edit-ta",
                            rows: 3,
                            value: c.aView || "",
                            maxLength: 200,
                            onChange: (r) => t({ aView: r.target.value }),
                        }),
                    }),
                }),
                s.jsx(H, {
                    header: `${k} 怎么看 ${f}`,
                    children: s.jsx("div", {
                        className: "ios-row",
                        children: s.jsx("textarea", {
                            className: "rl-edit-ta",
                            rows: 3,
                            value: c.bView || "",
                            maxLength: 200,
                            onChange: (r) => t({ bView: r.target.value }),
                        }),
                    }),
                }),
                s.jsx(H, {
                    header: `${f} 对眼下的理解`,
                    children: s.jsx("div", {
                        className: "ios-row",
                        children: s.jsx("textarea", {
                            className: "rl-edit-ta",
                            rows: 2,
                            value: c.aRead || "",
                            maxLength: 200,
                            onChange: (r) => t({ aRead: r.target.value }),
                        }),
                    }),
                }),
                s.jsx(H, {
                    header: `${k} 对眼下的理解`,
                    children: s.jsx("div", {
                        className: "ios-row",
                        children: s.jsx("textarea", {
                            className: "rl-edit-ta",
                            rows: 2,
                            value: c.bRead || "",
                            maxLength: 200,
                            onChange: (r) => t({ bRead: r.target.value }),
                        }),
                    }),
                }),
                s.jsx(H, {
                    header: `${f} 心里的话`,
                    footer: "只是他自己的想法，不会对对方说出口。",
                    children: s.jsx("div", {
                        className: "ios-row",
                        children: s.jsx("textarea", {
                            className: "rl-edit-ta",
                            rows: 2,
                            value: c.aInner || "",
                            maxLength: 200,
                            onChange: (r) => t({ aInner: r.target.value }),
                        }),
                    }),
                }),
                s.jsx(H, {
                    header: `${k} 心里的话`,
                    children: s.jsx("div", {
                        className: "ios-row",
                        children: s.jsx("textarea", {
                            className: "rl-edit-ta",
                            rows: 2,
                            value: c.bInner || "",
                            maxLength: 200,
                            onChange: (r) => t({ bInner: r.target.value }),
                        }),
                    }),
                }),
                s.jsx(H, {
                    footer: "关系页顶部显示的一句话，随两人的记忆自动更新。",
                    children: s.jsx(Ms, {
                        label: "当前关系",
                        children: s.jsx(Ts, {
                            value: c.now || "",
                            onChange: (r) => t({ now: r.slice(0, 16) }),
                            placeholder: "未设置",
                        }),
                    }),
                }),
                (c.threads || []).length > 0 &&
                    s.jsx(H, {
                        header: "未了的事",
                        footer: "来自初始设定的拆解和之后的记忆；可在此校正进展。",
                        children: c.threads.map((r, v) =>
                            s.jsxs(
                                "div",
                                {
                                    className: "ios-row rl-th-row",
                                    children: [
                                        s.jsx("span", { className: "rl-th-t", children: r.text }),
                                        s.jsx("span", {
                                            className: "rl-warm rl-st-seg",
                                            children: ae.map(([S, M]) =>
                                                s.jsx(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        className: `btn-plain${r.state === S ? " on" : ""}`,
                                                        onClick: () =>
                                                            t({
                                                                threads: c.threads.map((D, j) =>
                                                                    j === v
                                                                        ? { ...D, state: S, at: Date.now() }
                                                                        : D,
                                                                ),
                                                            }),
                                                        children: M,
                                                    },
                                                    S,
                                                ),
                                            ),
                                        }),
                                    ],
                                },
                                r.id,
                            ),
                        ),
                    }),
                [
                    ["a", f],
                    ["b", k],
                ].map(([r, v]) =>
                    s.jsx(
                        H,
                        {
                            header: `${v}的现状`,
                            footer: r === "b" ? "认知为「不知道」时，威胁感和外显不生效。" : void 0,
                            children: [
                                ["Aware", "认知", Zs],
                                ["Threat", "威胁感", se],
                                ["Shown", "外显", ee],
                            ].map(([S, M, D]) =>
                                s.jsxs(
                                    "div",
                                    {
                                        className: "ios-row rl-st-row",
                                        children: [
                                            s.jsx("span", { className: "rl-st-l", children: M }),
                                            s.jsx("span", {
                                                className: "rl-warm rl-st-seg",
                                                children: D.map(([j, w]) =>
                                                    s.jsx(
                                                        "button",
                                                        {
                                                            type: "button",
                                                            className: `btn-plain${c[`${r}${S}`] === j ? " on" : ""}`,
                                                            onClick: () => t({ [`${r}${S}`]: j }),
                                                            children: w,
                                                        },
                                                        j,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    },
                                    S,
                                ),
                            ),
                        },
                        r,
                    ),
                ),
                s.jsx(H, {
                    header: "两人之间",
                    children: [
                        ["warmthNow", "两人温度", le],
                        ["trend", "走向", ie],
                    ].map(([r, v, S]) =>
                        s.jsxs(
                            "div",
                            {
                                className: "ios-row rl-st-row",
                                children: [
                                    s.jsx("span", { className: "rl-st-l", children: v }),
                                    s.jsx("span", {
                                        className: "rl-warm rl-st-seg",
                                        children: S.map(([M, D]) =>
                                            s.jsx(
                                                "button",
                                                {
                                                    type: "button",
                                                    className: `btn-plain${c[r] === M ? " on" : ""}`,
                                                    onClick: () => t({ [r]: M }),
                                                    children: D,
                                                },
                                                M,
                                            ),
                                        ),
                                    }),
                                ],
                            },
                            r,
                        ),
                    ),
                }),
                s.jsx(H, {
                    footer: "初始设定是这段关系的起点，导出群像卡时默认带它。关闭时只修改现状，起点保持不变。",
                    children: s.jsx(Ye, { title: "同时设为初始设定", on: o, onChange: y }),
                }),
            ],
        }),
    });
}
function Ma({ char: e, onOpen: l }) {
    const { state: n } = Hs(),
        u = Xe(n).cur.mast || "PORTRAIT",
        b = Ze(e),
        x = b[b.length - 1],
        h = new Date(),
        c = h.toLocaleString("en-US", { month: "long" }).toUpperCase();
    return s.jsxs(s.Fragment, {
        children: [
            s.jsxs("button", {
                className: "rl-mag btn-plain",
                onClick: l,
                children: [
                    e.avatar && s.jsx(Js, { src: e.avatar, alt: "", className: "rl-mag-img" }),
                    s.jsx("span", { className: "rl-mag-shade" }),
                    s.jsxs("span", {
                        className: "rl-mag-top",
                        children: [
                            s.jsxs("span", {
                                className: "rl-mag-issue",
                                children: [
                                    "N°",
                                    String((x == null ? void 0 : x.issue) || 1).padStart(2, "0"),
                                ],
                            }),
                            s.jsxs("span", {
                                className: "rl-mag-issue",
                                children: [c, " ", h.getFullYear()],
                            }),
                        ],
                    }),
                    s.jsx("span", { className: "rl-mag-mast", children: u }),
                    s.jsxs("span", {
                        className: "rl-mag-bottom",
                        children: [
                            s.jsx("span", { className: "rl-mag-kick", children: "THE INTERVIEW" }),
                            s.jsx("span", {
                                className: "rl-mag-hl",
                                children: (x == null ? void 0 : x.headline) || `${A(e)}，另一面`,
                            }),
                            s.jsxs("span", {
                                className: "rl-mag-go",
                                children: [
                                    b.length ? "翻开这一期" : "策划第一期",
                                    s.jsx(Vs, { size: 13, weight: "bold" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            s.jsx("div", {
                className: "rl-note",
                children:
                    "杂志专访式地多问几面：兴趣、耳机里的歌、第一印象的气味、活动半径、衣柜。答完可以改，确定的几段应用为人设参考。",
            }),
            b.length > 0 &&
                s.jsx("div", {
                    className: "rl-issues",
                    children: b
                        .slice()
                        .reverse()
                        .map((p) =>
                            s.jsxs(
                                "button",
                                {
                                    className: "rl-issue btn-plain",
                                    onClick: l,
                                    children: [
                                        s.jsxs("span", {
                                            className: "rl-issue-n",
                                            children: ["N°", String(p.issue).padStart(2, "0")],
                                        }),
                                        s.jsx("span", {
                                            className: "rl-issue-t",
                                            children: p.headline || "无题",
                                        }),
                                        s.jsx("span", {
                                            className: "rl-issue-s",
                                            children: (p.sections || [])
                                                .map((o) => o.tagEn)
                                                .filter(Boolean)
                                                .slice(0, 3)
                                                .join(" · "),
                                        }),
                                        p.appliedAt
                                            ? s.jsxs("span", {
                                                  className: "rl-wx on",
                                                  children: [
                                                      s.jsx(ws, { size: 11, weight: "bold" }),
                                                      "已应用",
                                                  ],
                                              })
                                            : null,
                                    ],
                                },
                                p.id,
                            ),
                        ),
                }),
        ],
    });
}
export { Pa as default };
