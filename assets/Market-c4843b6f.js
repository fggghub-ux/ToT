import { r as f, j as e, R as _s } from "./vendor-react-3a46a5d3.js";
import {
    u as B,
    a as V,
    b9 as Is,
    dE as se,
    bi as fe,
    bb as os,
    c as Me,
    l as Se,
    dj as Ks,
    ef as ke,
    ba,
    eg as $e,
    eh as Ae,
    ei as ne,
    ej as qs,
    ek as We,
    el as Hs,
    em as Ce,
    en as fa,
    eo as Be,
    ep as He,
    eq as as,
    er as ga,
    es as Ne,
    dB as ve,
    c2 as Us,
    et as Re,
    eu as J,
    ev as ns,
    ew as qe,
    ex as Ie,
    bj as Na,
    ey as va,
    ez as ya,
    f as xe,
    p as Gs,
} from "./app-2c902988.js";
import {
    O as ds,
    P as Te,
    dj as ts,
    an as ls,
    aj as is,
    am as De,
    dq as Ue,
    T as Ge,
    N as Qs,
    cG as ka,
    b5 as ue,
    di as ms,
    bc as Ca,
    S as hs,
    c as de,
    cm as Fe,
    b4 as Ys,
    au as je,
    dr as Sa,
    ds as $a,
    dt as wa,
    a3 as za,
    b0 as Xs,
    dp as Vs,
    b9 as Zs,
    a8 as Js,
    Z as ps,
    b3 as Aa,
    a as cs,
    co as ea,
    az as Ma,
    du as Ta,
    dv as Oa,
    dw as Da,
    dx as La,
    aB as Pa,
    dy as Wa,
} from "./vendor-icons-e63d3118.js";
import { m as Je, A as Ra } from "./vendor-motion-62fc1664.js";
import "./vendor-7bc51c32.js";
import "./vendor-leaflet-f4c2a8c5.js";
const xs = [
        { id: "graphite", zh: "石墨" },
        { id: "pearl", zh: "珍珠白" },
        { id: "fog", zh: "雾银" },
        { id: "mocha", zh: "摩卡" },
    ],
    Ts = [
        "招商银行",
        "中国工商银行",
        "中国建设银行",
        "中国银行",
        "中国农业银行",
        "交通银行",
        "浦发银行",
        "中信银行",
        "兴业银行",
        "平安银行",
        "民生银行",
        "光大银行",
        "邮储银行",
        "北京银行",
        "上海银行",
    ],
    Fa = ["工资", "兼职", "奖金", "家里给的", "理财收益", "退款", "其他"],
    sa = ["mall-refresh", "mall-order-auto", "mall-food-auto"],
    ae = (s) => {
        const n = Math.round((Number(s) || 0) * 100) / 100;
        return Number.isFinite(n) ? n : 0;
    },
    us = (s) => ({
        id: `l_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
        createdAt: Date.now(),
        ...s,
    });
function re(s) {
    const n = String((s == null ? void 0 : s.tail) || "")
        .replace(/\D/g, "")
        .slice(-4);
    if (n.length === 4) return n;
    let t = 7;
    for (const r of String((s == null ? void 0 : s.id) || "x")) t = (t * 31 + r.charCodeAt(0)) >>> 0;
    return String(1e3 + (t % 9e3));
}
function aa(s) {
    if (!s || typeof s != "object") return null;
    const n = String(s.bank || "")
        .trim()
        .slice(0, 16);
    return n
        ? {
              id: String(s.id || `card_${Date.now().toString(36)}`),
              bank: n,
              tail: String(s.tail || "")
                  .replace(/\D/g, "")
                  .slice(-4),
              type: s.type === "credit" ? "credit" : "debit",
              face: xs.some((t) => t.id === s.face) ? s.face : "graphite",
              ...(s.image ? { image: String(s.image) } : {}),
              ...(s.note ? { note: String(s.note).slice(0, 60) } : {}),
              ...(s.gen ? { gen: !0 } : {}),
              balance: ae(s.balance),
              addedAt: Number(s.addedAt) || Date.now(),
          }
        : null;
}
const ce = (s) => (Array.isArray(s == null ? void 0 : s.cards) ? s.cards : []);
function Ba(s, n) {
    const t = aa(n);
    if (!t) return s;
    const r = t.balance
        ? [
              us({
                  amount: t.balance,
                  note: `${t.bank} ••${re(t)} 添加时的余额`,
                  kind: "card-open",
                  card: t.id,
              }),
              ...((s == null ? void 0 : s.ledger) || []),
          ]
        : (s == null ? void 0 : s.ledger) || [];
    return { ...s, cards: [...ce(s), t], ledger: r };
}
function Ea(s, n) {
    return { ...s, cards: ce(s).filter((t) => t.id !== n) };
}
function _a(s, n, t) {
    return {
        ...s,
        cards: ce(s).map((r) => (r.id === n ? aa({ ...r, ...t, id: r.id, balance: r.balance }) : r)),
    };
}
function Qe(s, { cardId: n = null, amount: t, note: r, kind: i = "manual" }) {
    const l = ae(t);
    if (!l) return s;
    const d = us({
        amount: l,
        note: String(r || "").slice(0, 40) || (l > 0 ? "收入" : "支出"),
        kind: i,
        ...(n ? { card: n } : {}),
    });
    return n
        ? ce(s).some((c) => c.id === n)
            ? {
                  ...s,
                  cards: ce(s).map((c) => (c.id === n ? { ...c, balance: ae(c.balance + l) } : c)),
                  ledger: [d, ...((s == null ? void 0 : s.ledger) || [])],
              }
            : s
        : {
              ...s,
              balance: ae(((s == null ? void 0 : s.balance) || 0) + l),
              ledger: [d, ...((s == null ? void 0 : s.ledger) || [])],
          };
}
function Ia(s, { from: n = null, to: t = null, amount: r }) {
    const i = ae(r);
    if (i <= 0 || n === t) return s;
    const l = (x) => {
        const g = ce(s).find((j) => j.id === x);
        return x ? (g ? `${g.bank} ••${re(g)}` : "银行卡") : "余额";
    };
    if (
        ((x) => {
            var g;
            return x
                ? (((g = ce(s).find((j) => j.id === x)) == null ? void 0 : g.balance) ?? 0)
                : (s == null ? void 0 : s.balance) || 0;
        })(n) < i
    )
        return s;
    const c = (x, g) => (j) =>
        x
            ? { ...j, cards: ce(j).map((a) => (a.id === x ? { ...a, balance: ae(a.balance + g) } : a)) }
            : { ...j, balance: ae((j.balance || 0) + g) };
    let p = c(n, -i)(c(t, i)(s));
    return (
        (p = {
            ...p,
            ledger: [
                us({ amount: 0, moved: i, from: n, to: t, note: `${l(n)} → ${l(t)}`, kind: "card-move" }),
                ...((s == null ? void 0 : s.ledger) || []),
            ],
        }),
        p
    );
}
function js(s, n, t) {
    var l;
    const r = n
            ? (l = ce(s).find((d) => d.id === n)) == null
                ? void 0
                : l.balance
            : s == null
              ? void 0
              : s.balance,
        i = n ? ce(s).find((d) => d.id === n) : null;
    return (i == null ? void 0 : i.type) === "credit" ? !0 : ae(r) >= ae(t);
}
function na(s) {
    const n = ((s == null ? void 0 : s.ledger) || []).filter((t) => sa.includes(t == null ? void 0 : t.kind));
    return { count: n.length, refund: ae(-n.reduce((t, r) => t + (Number(r.amount) || 0), 0)) };
}
function Ka(s) {
    const { refund: n } = na(s);
    return {
        ...s,
        balance: ae(((s == null ? void 0 : s.balance) || 0) + n),
        ledger: ((s == null ? void 0 : s.ledger) || []).filter(
            (t) => !sa.includes(t == null ? void 0 : t.kind),
        ),
    };
}
function qa(s, n) {
    return ((s == null ? void 0 : s.ledger) || []).filter((t) =>
        (t == null ? void 0 : t.kind) === "card-move"
            ? n
                ? t.from === n || t.to === n
                : t.from == null || t.to == null
            : n
              ? (t == null ? void 0 : t.card) === n
              : !(t != null && t.card),
    );
}
const Ha = "__pay",
    ye = (s) => `¥${Math.abs(Number(s) || 0).toFixed(2)}`,
    Oe = (s) => {
        const n = Number(s) || 0;
        return `${n < 0 ? "-" : ""}¥${Math.abs(n).toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };
function ta(s) {
    var l;
    const { state: n } = B(),
        t = s === "me",
        r = (t ? n.wallet.me : (l = n.wallet.chars) == null ? void 0 : l[s]) || {
            balance: t ? 0 : (n.wallet.defaultCharBalance ?? 1e4),
            ledger: [],
        },
        i = f.useMemo(() => {
            var c;
            if (t) return ((c = n.me) == null ? void 0 : c.realName) || os(n.me) || "我";
            const d = (n.characters || []).find((p) => p.id === s);
            return (d && (d.realName || Me(d))) || "TA";
        }, [t, s, n.me, n.characters]);
    return { wallet: r, holder: i, isMe: t };
}
function Ua() {
    return e.jsxs("span", {
        className: "bc-chip",
        "aria-hidden": !0,
        children: [e.jsx("i", {}), e.jsx("i", {}), e.jsx("i", {}), e.jsx("b", {})],
    });
}
function Ga() {
    return e.jsxs("svg", {
        className: "bc-nfc",
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        children: [
            e.jsx("path", { d: "M8.2 8.6a5 5 0 0 1 0 6.8" }),
            e.jsx("path", { d: "M11.4 6.4a8.4 8.4 0 0 1 0 11.2" }),
            e.jsx("path", { d: "M14.6 4.2a11.8 11.8 0 0 1 0 15.6" }),
        ],
    });
}
function be({
    card: s,
    holder: n = "",
    balance: t,
    compact: r = !1,
    sheen: i = !1,
    className: l = "",
    style: d,
}) {
    const c = !s,
        p = c ? "pay" : s.image ? "image" : s.face || "graphite",
        x = c ? "" : re(s);
    return e.jsxs("div", {
        className: `bc bc-${p} ${r ? "bc-compact" : ""} ${i ? "bc-sheen-on" : ""} ${l}`,
        style: d,
        children: [
            (s == null ? void 0 : s.image) && e.jsx(Se, { className: "bc-img", src: s.image, alt: "" }),
            e.jsx("span", { className: "bc-tex", "aria-hidden": !0 }),
            e.jsx("span", { className: "bc-sheen", "aria-hidden": !0 }),
            e.jsxs("div", {
                className: "bc-top",
                children: [
                    e.jsx("div", {
                        className: "bc-bank",
                        children: c
                            ? e.jsxs(e.Fragment, { children: [e.jsx("b", { children: "LiToT" }), " Pay"] })
                            : e.jsx("b", { children: s.bank }),
                    }),
                    e.jsxs("div", {
                        className: "bc-type",
                        children: [
                            c ? "余额" : s.type === "credit" ? "信用卡" : "储蓄卡",
                            e.jsx("small", {
                                children: c ? "BALANCE" : s.type === "credit" ? "CREDIT" : "DEBIT",
                            }),
                        ],
                    }),
                ],
            }),
            !r && e.jsxs("div", { className: "bc-mid", children: [e.jsx(Ua, {}), e.jsx(Ga, {})] }),
            !r && !c && e.jsxs("div", { className: "bc-num", children: ["•••• •••• •••• ", x] }),
            !r && c && e.jsx("div", { className: "bc-num bc-num-pay", children: Oe(t) }),
            e.jsxs("div", {
                className: "bc-bottom",
                children: [
                    r
                        ? e.jsx("span", { className: "bc-holder", children: c ? "余额" : `尾号 ${x}` })
                        : e.jsx("span", { className: "bc-holder", children: String(n || "").toUpperCase() }),
                    (r || !c) && e.jsx("span", { className: "bc-bal", children: Oe(t) }),
                    !r && c && e.jsx("span", { className: "bc-bal bc-bal-dim", children: "可用余额" }),
                ],
            }),
        ],
    });
}
const Os = 12;
function Qa({ ownerId: s, onOpen: n }) {
    var K;
    const { wallet: t, holder: r } = ta(s),
        i = t.cards || [],
        l = f.useMemo(() => {
            const T = Date.now() - 2592e6;
            return (t.ledger || []).reduce(
                (w, N) => w + (N.amount < 0 && N.createdAt > T ? -N.amount : 0),
                0,
            );
        }, [t]),
        d = f.useMemo(() => ["pay", ...i.map((T) => T.id)], [i]),
        [c, p] = f.useState(() => [...d.slice(1).slice(-2), "pay"]);
    f.useEffect(() => {
        p((T) => {
            const w = T.filter((z) => d.includes(z)),
                N = d.filter((z) => !w.includes(z));
            return [...N.filter((z) => z !== "pay"), ...w, ...(N.includes("pay") ? ["pay"] : [])];
        });
    }, [d]);
    const [x, g] = f.useState(null),
        [j, a] = f.useState(0),
        [o, b] = f.useState(0),
        m = f.useRef(null),
        u = f.useRef(!1),
        v = f.useRef(null),
        h = f.useRef([]);
    f.useEffect(() => () => h.current.forEach(clearTimeout), []);
    const y = Math.min(2, c.length - 1),
        k = Math.round((((K = v.current) == null ? void 0 : K.offsetHeight) || 200) * 0.62),
        $ = (T) => {
            !T ||
                T === c[c.length - 1] ||
                x ||
                (g({ k: T, phase: "up" }),
                h.current.push(
                    setTimeout(() => {
                        (p((w) => [w[w.length - 1], ...w.filter((N) => N !== T && N !== w[w.length - 1]), T]),
                            g({ k: T, phase: "down" }),
                            b(0));
                    }, 270),
                ),
                h.current.push(
                    setTimeout(() => g((w) => ((w == null ? void 0 : w.k) === T ? null : w)), 270 + 520),
                ));
        },
        S = c[c.length - 2],
        D = (T) => {
            x || ((m.current = { y: T.clientY, id: T.pointerId, el: T.currentTarget }), (u.current = !1));
        },
        I = (T) => {
            const w = m.current;
            if (!w) return;
            const N = T.clientY - w.y;
            if (!u.current && Math.abs(N) > 8) {
                u.current = !0;
                try {
                    w.el.setPointerCapture(w.id);
                } catch {}
            }
            N < 0
                ? (a(0), b(c.length > 1 ? Math.max(-k, N) : Math.max(-14, N * 0.3)))
                : (b(0), a(Math.min(60, N * 0.5)));
        },
        A = (T) => {
            const w = m.current;
            if (((m.current = null), !w)) return;
            const N = T.clientY - w.y;
            (a(0), Math.abs(N) > 28 && c.length > 1 ? $(S) : b(0));
        },
        q = (T) => (T === "pay" ? null : i.find((w) => w.id === T)),
        R = c[c.length - 1];
    return e.jsxs("div", {
        className: "wm-entry",
        children: [
            e.jsxs("div", {
                className: "wm-stack",
                style: { paddingTop: y * Os },
                onPointerDown: D,
                onPointerMove: I,
                onPointerUp: A,
                onPointerCancel: () => {
                    ((m.current = null), a(0), b(0));
                },
                children: [
                    c.map((T, w) => {
                        const N = c.length - 1 - w,
                            z = Math.min(N, y),
                            O = q(T),
                            F = N === 0;
                        let E = 0,
                            Z;
                        return (
                            (x == null ? void 0 : x.k) === T && x.phase === "up"
                                ? ((E = -k),
                                  (Z =
                                      "top .5s cubic-bezier(.32,.72,0,1), transform .27s cubic-bezier(.25,.8,.35,1)"))
                                : !x && T === S && o
                                  ? ((E = o), (Z = "none"))
                                  : F && j
                                    ? ((E = j), (Z = "none"))
                                    : F && (x == null ? void 0 : x.phase) === "up" && (E = 10),
                            e.jsx(
                                "button",
                                {
                                    type: "button",
                                    className: `wm-card btn-plain${F ? " front" : ""}${N > y ? " hidden" : ""}`,
                                    style: {
                                        top: (y - z) * Os,
                                        zIndex: 10 - N,
                                        transform: `scale(${1 - z * 0.045}) translateY(${E}px)`,
                                        transition: Z,
                                    },
                                    onClick: () => {
                                        if (u.current) {
                                            u.current = !1;
                                            return;
                                        }
                                        F ? n() : $(T);
                                    },
                                    "aria-label": O ? `${O.bank} 尾号 ${re(O)}` : "余额",
                                    children: e.jsx("span", {
                                        className: "wm-card-in",
                                        children: e.jsx(be, {
                                            card: O,
                                            holder: r,
                                            balance: O ? O.balance : t.balance,
                                            sheen: F,
                                        }),
                                    }),
                                },
                                T,
                            )
                        );
                    }),
                    e.jsx("div", {
                        className: "wm-sizer",
                        "aria-hidden": !0,
                        ref: v,
                        children: e.jsx(be, { card: null, holder: "", balance: 0 }),
                    }),
                ],
            }),
            e.jsxs("button", {
                type: "button",
                className: "wm-row btn-plain",
                onClick: n,
                children: [
                    e.jsx(
                        "span",
                        {
                            className: "wm-row-cur",
                            children:
                                R === "pay"
                                    ? `近 30 天支出 ${ye(l)}`
                                    : (() => {
                                          const T = q(R);
                                          return T ? `${T.bank} · 尾号 ${re(T)}` : "";
                                      })(),
                        },
                        R,
                    ),
                    e.jsxs("span", {
                        className: "wm-row-go",
                        children: [i.length ? `${i.length} 张银行卡 · ` : "", "钱包 ›"],
                    }),
                ],
            }),
        ],
    });
}
function la({ wallet: s, value: n, onChange: t, total: r = 0 }) {
    const i = (s == null ? void 0 : s.cards) || [],
        l = [
            { id: null, card: null, balance: (s == null ? void 0 : s.balance) || 0 },
            ...i.map((d) => ({ id: d.id, card: d, balance: d.balance })),
        ];
    return i.length
        ? e.jsx("div", {
              className: "wp-pick",
              role: "radiogroup",
              "aria-label": "付款方式",
              children: l.map((d) => {
                  const c = js(s, d.id, r),
                      p = (n || null) === d.id;
                  return e.jsxs(
                      "button",
                      {
                          type: "button",
                          role: "radio",
                          "aria-checked": p,
                          className: `wp-pick-it btn-plain ${p ? "on" : ""} ${c ? "" : "short"}`,
                          onClick: () => t(d.id),
                          children: [
                              e.jsx(be, { card: d.card, balance: d.balance, compact: !0 }),
                              e.jsx("span", {
                                  className: "wp-pick-st",
                                  children: p
                                      ? e.jsxs(e.Fragment, {
                                            children: [e.jsx(Qs, { size: 11, strokeWidth: 3 }), " 用这张"],
                                        })
                                      : c
                                        ? ""
                                        : "余额不够",
                              }),
                          ],
                      },
                      d.id || "pay",
                  );
              }),
          })
        : e.jsx("div", {
              className: "wp-pick-hint",
              children: "从钱包余额付。钱包里加了银行卡，这里就能选卡付。",
          });
}
const es = 58,
    Ds = 9;
function Ya(s) {
    const [n, t] = f.useState(0);
    return (
        f.useLayoutEffect(() => {
            const r = s.current;
            if (!r) return;
            const i = () => t(r.clientWidth);
            if ((i(), typeof ResizeObserver > "u")) return;
            const l = new ResizeObserver(i);
            return (l.observe(r), () => l.disconnect());
        }, [s]),
        n
    );
}
function Xa({ ownerId: s, onBack: n, onOpenKinship: t }) {
    var w;
    const { walletUpdate: r, mallPatchSlice: i } = B(),
        l = V(),
        { wallet: d, holder: c, isMe: p } = ta(s),
        x = d.cards || [],
        g = f.useMemo(
            () => [
                { id: Ha, card: null, balance: d.balance || 0 },
                ...x.map((N) => ({ id: N.id, card: N, balance: N.balance })),
            ],
            [d.balance, x],
        ),
        [j, a] = f.useState(null),
        [o, b] = f.useState(null),
        [m, u] = f.useState(null),
        [v, h] = f.useState(!1),
        y = f.useRef(null),
        k = Ya(y),
        $ = k ? k / 1.586 : 200;
    (f.useEffect(() => {
        j && !g.some((N) => N.id === j) && a(null);
    }, [g, j]),
        f.useEffect(() => {
            if (!o) return;
            const N = setTimeout(() => b(null), 1400);
            return () => clearTimeout(N);
        }, [o]));
    const S = g.findIndex((N) => N.id === j),
        D = (N) => {
            if (S < 0) return { y: N * es, scale: 1, z: N };
            if (N === S) return { y: 0, scale: 1, z: 50 };
            const z = N < S ? N : N - 1;
            return { y: $ + 22 + z * Ds, scale: 0.92 - (g.length - 2 - z) * 0.012, z };
        },
        I = S < 0 ? (g.length - 1) * es + $ : $ + (g.length > 1 ? 22 + (g.length - 2) * Ds + 16 : 0),
        A = S >= 0 ? g[S] : null,
        q = f.useMemo(() => (A ? qa(d, A.card ? A.id : null) : d.ledger || []), [A, d]),
        R = p ? na(d) : { count: 0 },
        K = (N, z) => {
            (r(s, N), z && l(z));
        },
        T = () => {
            (K(Ka, `已清掉 ${R.count} 条，${ye(R.refund)} 退回余额`),
                i("productOrders", "me", (N = []) => N.filter((z) => !z.autoGenerated)),
                i("foodOrders", "me", (N = []) => N.filter((z) => !z.autoGenerated)));
        };
    return e.jsxs("div", {
        className: "mall-view wv",
        children: [
            e.jsxs("header", {
                className: "m26-top",
                children: [
                    e.jsx("button", {
                        className: "m26-back btn-plain",
                        onClick: j ? () => a(null) : n,
                        "aria-label": "返回",
                        children: e.jsx(ds, { size: 19, strokeWidth: 2.1 }),
                    }),
                    e.jsxs("div", {
                        className: "m26-top-t",
                        children: [
                            e.jsx("b", { children: "钱包" }),
                            e.jsx("small", { children: j ? "点下面那摞卡回到全部" : `${g.length} 张卡` }),
                        ],
                    }),
                    e.jsx("span", {
                        className: "m26-top-r",
                        children: e.jsx("button", {
                            className: "wv-add btn-plain",
                            onClick: () => u("add"),
                            "aria-label": "添加银行卡",
                            children: e.jsx(Te, { size: 18, strokeWidth: 2.2 }),
                        }),
                    }),
                ],
            }),
            R.count > 0 &&
                !j &&
                e.jsxs("div", {
                    className: "wv-fab",
                    children: [
                        e.jsxs("div", {
                            children: [
                                e.jsxs("b", { children: ["有 ", R.count, " 条不是你做的记录"] }),
                                e.jsxs("p", {
                                    children: [
                                        "旧版本的商城刷新替你编过订单和流水（",
                                        R.refund >= 0 ? `共扣了 ${ye(R.refund)}` : `共多记了 ${ye(R.refund)}`,
                                        "）。现在刷新只换货架，不会再动你的账。",
                                    ],
                                }),
                            ],
                        }),
                        e.jsxs("button", {
                            className: "btn-plain",
                            onClick: T,
                            children: ["清掉并", R.refund >= 0 ? "退回" : "扣回"],
                        }),
                    ],
                }),
            e.jsx("div", {
                ref: y,
                className: `wv-stack ${j ? "picked" : ""}`,
                style: { height: I },
                children: g.map((N, z) => {
                    const O = D(z),
                        F = o === N.id,
                        E = z === S,
                        Z = z * es - Math.min(64, $ * 0.32);
                    return e.jsx(
                        Je.button,
                        {
                            type: "button",
                            className: "wv-card btn-plain",
                            style: { zIndex: E ? z : O.z },
                            initial: F ? { y: O.y + $ + 160, opacity: 0, rotateX: 18 } : !1,
                            animate: E
                                ? {
                                      y: [null, Z, 0],
                                      scale: [null, 1.035, 1],
                                      rotateX: [0, -7, 0],
                                      opacity: 1,
                                  }
                                : { y: O.y, scale: O.scale, opacity: 1, rotateX: 0 },
                            transition: E
                                ? { duration: 0.62, times: [0, 0.42, 1], ease: [0.3, 0.7, 0.25, 1] }
                                : { type: "spring", stiffness: 260, damping: 30, mass: 0.9 },
                            whileTap: { scale: O.scale * 0.975 },
                            drag: "y",
                            dragConstraints: { top: 0, bottom: 0 },
                            dragElastic: 0.45,
                            dragSnapToOrigin: !0,
                            onDragEnd: (_, U) => {
                                S < 0 && U.offset.y < -36 ? a(N.id) : E && U.offset.y > 48 && a(null);
                            },
                            onClick: () => a(S >= 0 ? null : N.id),
                            "aria-label": N.card ? `${N.card.bank} 尾号 ${re(N.card)}` : "余额",
                            children: e.jsx(be, {
                                card: N.card,
                                holder: c,
                                balance: N.balance,
                                sheen: F || z === S,
                            }),
                        },
                        N.id,
                    );
                }),
            }),
            e.jsx(Ra, {
                mode: "wait",
                children: A
                    ? e.jsxs(
                          Je.div,
                          {
                              className: "wv-detail",
                              initial: { opacity: 0, y: 14 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 8 },
                              transition: { duration: 0.22, delay: 0.08 },
                              children: [
                                  e.jsxs("div", {
                                      className: "wv-bal",
                                      children: [
                                          e.jsx("small", {
                                              children: A.card
                                                  ? A.card.type === "credit"
                                                      ? "信用卡 · 当前额度使用"
                                                      : "卡内余额"
                                                  : "钱包余额",
                                          }),
                                          e.jsx("b", { children: Oe(A.balance) }),
                                          (w = A.card) != null && w.note
                                              ? e.jsx("small", {
                                                    className: "wv-note",
                                                    children: A.card.note,
                                                })
                                              : null,
                                      ],
                                  }),
                                  e.jsx("div", {
                                      className: "wv-acts",
                                      children: A.card
                                          ? e.jsxs(e.Fragment, {
                                                children: [
                                                    e.jsx(pe, {
                                                        icon: e.jsx(ts, { size: 17 }),
                                                        label: "记一笔收入",
                                                        onClick: () => u("income"),
                                                    }),
                                                    e.jsx(pe, {
                                                        icon: e.jsx(ls, { size: 17 }),
                                                        label: "记一笔支出",
                                                        onClick: () => u("spend"),
                                                    }),
                                                    e.jsx(pe, {
                                                        icon: e.jsx(is, { size: 17 }),
                                                        label: "转入余额",
                                                        onClick: () => u("move"),
                                                    }),
                                                    e.jsx(pe, {
                                                        icon: e.jsx(De, { size: 17 }),
                                                        label: "换卡面",
                                                        onClick: () => u("face"),
                                                    }),
                                                ],
                                            })
                                          : e.jsxs(e.Fragment, {
                                                children: [
                                                    e.jsx(pe, {
                                                        icon: e.jsx(is, { size: 17 }),
                                                        label: "从卡里转入",
                                                        onClick: () => (x.length ? u("move") : u("add")),
                                                    }),
                                                    e.jsx(pe, {
                                                        icon: e.jsx(ts, { size: 17 }),
                                                        label: "记一笔收入",
                                                        onClick: () => u("income"),
                                                    }),
                                                    e.jsx(pe, {
                                                        icon: e.jsx(ls, { size: 17 }),
                                                        label: "记一笔支出",
                                                        onClick: () => u("spend"),
                                                    }),
                                                    e.jsx(pe, {
                                                        icon: e.jsx(Ue, { size: 17 }),
                                                        label: "亲属卡",
                                                        onClick: t,
                                                    }),
                                                ],
                                            }),
                                  }),
                                  e.jsx(Ls, { list: q, cardId: A.card ? A.id : null, wallet: d }),
                                  A.card &&
                                      e.jsxs("button", {
                                          className: "wv-del btn-plain",
                                          onClick: () => h(!0),
                                          children: [e.jsx(Ge, { size: 13 }), " 从钱包里移除这张卡"],
                                      }),
                              ],
                          },
                          `d-${A.id}`,
                      )
                    : e.jsxs(
                          Je.div,
                          {
                              className: "wv-detail",
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.18 },
                              children: [
                                  !x.length &&
                                      e.jsxs("button", {
                                          className: "wv-empty btn-plain",
                                          onClick: () => u("add"),
                                          children: [
                                              e.jsx(Te, { size: 16 }),
                                              " ",
                                              e.jsxs("span", {
                                                  children: [
                                                      e.jsx("b", { children: "添加银行卡" }),
                                                      e.jsx("small", {
                                                          children:
                                                              "钱不够时，从自己的卡里转进余额。卡里有多少、每一笔进账，都由你自己填。",
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  e.jsx(Ls, { list: q, cardId: void 0, wallet: d, title: "全部流水" }),
                              ],
                          },
                          "all",
                      ),
            }),
            e.jsx(Va, {
                open: m === "add",
                onClose: () => u(null),
                holder: c,
                onSave: (N) => {
                    const z = `card_${Date.now().toString(36)}`;
                    (K((O) => Ba(O, { ...N, id: z, addedAt: Date.now() }), `已添加 ${N.bank}`),
                        u(null),
                        a(null),
                        b(z));
                },
            }),
            e.jsx(Za, {
                open: m === "income" || m === "spend",
                dir: m === "spend" ? -1 : 1,
                onClose: () => u(null),
                target: A,
                holder: c,
                onSave: ({ amount: N, note: z }) => {
                    const O = A != null && A.card ? A.id : null;
                    (K(
                        (F) => Qe(F, { cardId: O, amount: N, note: z, kind: N > 0 ? "income" : "manual" }),
                        N > 0 ? "已记入" : "已记账",
                    ),
                        u(null));
                },
            }),
            e.jsx(Ja, {
                open: m === "move",
                onClose: () => u(null),
                wallet: d,
                fromId: A != null && A.card ? A.id : null,
                onSave: ({ from: N, amount: z }) => {
                    (K((O) => Ia(O, { from: N, to: null, amount: z }), `${ye(z)} 已转入余额`), u(null));
                },
            }),
            e.jsx(en, {
                open: m === "face",
                onClose: () => u(null),
                card: A == null ? void 0 : A.card,
                holder: c,
                onSave: (N) => {
                    (K((z) => _a(z, A.id, N), "卡面已更换"), u(null));
                },
            }),
            e.jsx(Is, {
                open: v,
                onClose: () => h(!1),
                title: "从钱包里移除这张卡？",
                message:
                    A != null && A.card && Number(A.balance)
                        ? `卡里的 ${Oe(A.balance)} 不会转进余额；想留着就先「转入余额」。流水记录保留。`
                        : "流水记录保留。",
                confirm: {
                    label: "移除",
                    destructive: !0,
                    onClick: () => {
                        (K((N) => Ea(N, A.id), "已移除"), a(null));
                    },
                },
            }),
        ],
    });
}
function pe({ icon: s, label: n, onClick: t }) {
    return e.jsxs("button", {
        className: "wv-act btn-plain",
        onClick: t,
        children: [e.jsx("span", { children: s }), e.jsx("small", { children: n })],
    });
}
function Ls({ list: s, cardId: n, wallet: t, title: r = "流水" }) {
    const i = (d) => {
            if (!d) return "余额";
            const c = (t.cards || []).find((p) => p.id === d);
            return c ? `${c.bank} ••${re(c)}` : "已移除的卡";
        },
        l = s.slice(0, 80);
    return e.jsxs("section", {
        className: "wv-ledger",
        children: [
            e.jsxs("div", {
                className: "wv-ledger-h",
                children: [
                    e.jsx("b", { children: r }),
                    e.jsxs("small", { children: ["共 ", s.length, " 条"] }),
                ],
            }),
            !l.length && e.jsx("div", { className: "wv-ledger-empty", children: "还没有记录" }),
            l.map((d) => {
                const c = d.kind === "card-move",
                    p = c
                        ? n === void 0
                            ? 0
                            : n
                              ? d.to === n
                                  ? d.moved
                                  : -d.moved
                              : d.to == null
                                ? d.moved
                                : -d.moved
                        : Number(d.amount) || 0;
                return e.jsxs(
                    "div",
                    {
                        className: "wv-row",
                        children: [
                            e.jsx("span", {
                                className: `wv-row-ic ${c ? "mv" : p >= 0 ? "in" : "out"}`,
                                children: c
                                    ? e.jsx(is, { size: 13 })
                                    : p >= 0
                                      ? e.jsx(ts, { size: 13 })
                                      : e.jsx(ls, { size: 13 }),
                            }),
                            e.jsxs("div", {
                                className: "wv-row-t",
                                children: [
                                    e.jsx("b", { children: d.note || (p >= 0 ? "收入" : "支出") }),
                                    e.jsx(se, { text: d.note }),
                                    e.jsxs("small", {
                                        children: [
                                            new Date(d.createdAt).toLocaleString("zh-CN", {
                                                month: "numeric",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            }),
                                            n === void 0 && !c ? ` · ${i(d.card)}` : "",
                                        ],
                                    }),
                                ],
                            }),
                            e.jsx("span", {
                                className: `wv-row-a ${p > 0 ? "in" : ""}`,
                                children:
                                    c && n === void 0 ? `⇄ ${ye(d.moved)}` : `${p >= 0 ? "+" : "-"}${ye(p)}`,
                            }),
                        ],
                    },
                    d.id,
                );
            }),
        ],
    });
}
function Va({ open: s, onClose: n, onSave: t, holder: r }) {
    const i = V(),
        [l, d] = f.useState({
            bank: "",
            tail: "",
            type: "debit",
            face: "graphite",
            image: null,
            balance: "",
        });
    f.useEffect(() => {
        s && d({ bank: "", tail: "", type: "debit", face: "graphite", image: null, balance: "" });
    }, [s]);
    const c = f.useRef(null),
        p = (a) => d((o) => ({ ...o, ...a })),
        x = {
            id: "preview",
            bank: l.bank || "银行名称",
            tail: l.tail,
            type: l.type,
            face: l.face,
            image: l.image,
        },
        g = async (a) => {
            var m;
            const o = (m = a.target.files) == null ? void 0 : m[0];
            if (((a.target.value = ""), !o)) return;
            const b = await Ks(o, { aspect: 1.586, shape: "rounded", title: "卡面" }, { note: "银行卡卡面" });
            b && p({ image: b });
        },
        j = () => {
            if (!l.bank.trim()) {
                i("填一下是哪家银行");
                return;
            }
            if (l.tail && l.tail.length !== 4) {
                i("卡号后四位要填 4 个数字，或者空着");
                return;
            }
            t({
                bank: l.bank.trim(),
                tail: l.tail,
                type: l.type,
                face: l.face,
                image: l.image,
                balance: l.type === "credit" ? 0 : Number(l.balance) || 0,
            });
        };
    return e.jsx(fe, {
        open: s,
        onClose: n,
        title: "添加银行卡",
        children: e.jsxs("div", {
            className: "wv-form",
            children: [
                e.jsx("div", {
                    className: "wv-form-prev",
                    children: e.jsx(be, {
                        card: x,
                        holder: r,
                        balance: l.type === "credit" ? 0 : Number(l.balance) || 0,
                        sheen: !0,
                    }),
                }),
                e.jsxs("label", {
                    className: "wv-f",
                    children: [
                        e.jsx("span", { children: "银行" }),
                        e.jsx("input", {
                            value: l.bank,
                            onChange: (a) => p({ bank: a.target.value.slice(0, 16) }),
                            placeholder: "例：招商银行",
                            list: "wv-banks",
                        }),
                        e.jsx("datalist", {
                            id: "wv-banks",
                            children: Ts.map((a) => e.jsx("option", { value: a }, a)),
                        }),
                    ],
                }),
                e.jsx("div", {
                    className: "wv-chips",
                    children: Ts.slice(0, 6).map((a) =>
                        e.jsx(
                            "button",
                            {
                                type: "button",
                                className: `btn-plain ${l.bank === a ? "on" : ""}`,
                                onClick: () => p({ bank: a }),
                                children: a,
                            },
                            a,
                        ),
                    ),
                }),
                e.jsxs("label", {
                    className: "wv-f",
                    children: [
                        e.jsx("span", { children: "卡号后四位" }),
                        e.jsx("input", {
                            value: l.tail,
                            inputMode: "numeric",
                            onChange: (a) => p({ tail: a.target.value.replace(/\D/g, "").slice(0, 4) }),
                            placeholder: "可空着",
                        }),
                    ],
                }),
                e.jsxs("div", {
                    className: "wv-f",
                    children: [
                        e.jsx("span", { children: "类型" }),
                        e.jsx("div", {
                            className: "wv-seg",
                            children: [
                                ["debit", "储蓄卡"],
                                ["credit", "信用卡"],
                            ].map(([a, o]) =>
                                e.jsx(
                                    "button",
                                    {
                                        type: "button",
                                        className: `btn-plain ${l.type === a ? "on" : ""}`,
                                        onClick: () => p({ type: a }),
                                        children: o,
                                    },
                                    a,
                                ),
                            ),
                        }),
                    ],
                }),
                l.type === "debit" &&
                    e.jsxs("label", {
                        className: "wv-f",
                        children: [
                            e.jsx("span", { children: "卡里现在有" }),
                            e.jsx("input", {
                                value: l.balance,
                                inputMode: "decimal",
                                onChange: (a) => p({ balance: a.target.value.replace(/[^\d.]/g, "") }),
                                placeholder: "自己填，不填就是 0",
                            }),
                        ],
                    }),
                l.type === "credit" &&
                    e.jsx("p", {
                        className: "wv-f-hint",
                        children: "信用卡可以透支付款，花掉的记成负数，还款时「记一笔收入」。",
                    }),
                e.jsxs("div", {
                    className: "wv-f wv-f-col",
                    children: [
                        e.jsx("span", { children: "卡面" }),
                        e.jsxs("div", {
                            className: "wv-faces",
                            children: [
                                xs.map((a) =>
                                    e.jsx(
                                        "button",
                                        {
                                            type: "button",
                                            className: `wv-face bc-${a.id} btn-plain ${!l.image && l.face === a.id ? "on" : ""}`,
                                            onClick: () => p({ face: a.id, image: null }),
                                            "aria-label": a.zh,
                                            children: e.jsx("small", { children: a.zh }),
                                        },
                                        a.id,
                                    ),
                                ),
                                e.jsxs("button", {
                                    type: "button",
                                    className: `wv-face wv-face-img btn-plain ${l.image ? "on" : ""}`,
                                    onClick: () => {
                                        var a;
                                        return (a = c.current) == null ? void 0 : a.click();
                                    },
                                    "aria-label": "自选图片",
                                    children: [e.jsx(De, { size: 14 }), e.jsx("small", { children: "图片" })],
                                }),
                                e.jsx("input", {
                                    ref: c,
                                    type: "file",
                                    accept: "image/*",
                                    hidden: !0,
                                    onChange: g,
                                }),
                            ],
                        }),
                    ],
                }),
                e.jsx("button", { className: "btn-ios primary wv-save", onClick: j, children: "添加到钱包" }),
            ],
        }),
    });
}
function Za({ open: s, onClose: n, onSave: t, dir: r, target: i, holder: l }) {
    const d = V(),
        [c, p] = f.useState(""),
        [x, g] = f.useState(""),
        [j, a] = f.useState("");
    f.useEffect(() => {
        s && (p(""), g(""), a(""));
    }, [s]);
    const o = () => {
        const b = Number(c);
        if (!(b > 0)) {
            d("填一个金额");
            return;
        }
        const m = [x, j.trim()].filter(Boolean).join(" · ") || (r > 0 ? "收入" : "支出");
        t({ amount: r * b, note: m });
    };
    return e.jsx(fe, {
        open: s,
        onClose: n,
        title: r > 0 ? "记一笔收入" : "记一笔支出",
        children: e.jsxs("div", {
            className: "wv-form",
            children: [
                e.jsx("div", {
                    className: "wv-form-prev sm",
                    children: e.jsx(be, {
                        card: (i == null ? void 0 : i.card) || null,
                        holder: l,
                        balance: ((i == null ? void 0 : i.balance) || 0) + r * (Number(c) || 0),
                    }),
                }),
                e.jsxs("label", {
                    className: "wv-f wv-f-amt",
                    children: [
                        e.jsx("span", { children: r > 0 ? "进账" : "花了" }),
                        e.jsx("input", {
                            value: c,
                            inputMode: "decimal",
                            autoFocus: !0,
                            onChange: (b) => p(b.target.value.replace(/[^\d.]/g, "")),
                            placeholder: "0.00",
                        }),
                    ],
                }),
                r > 0 &&
                    e.jsx("div", {
                        className: "wv-chips",
                        children: Fa.map((b) =>
                            e.jsx(
                                "button",
                                {
                                    type: "button",
                                    className: `btn-plain ${x === b ? "on" : ""}`,
                                    onClick: () => g(x === b ? "" : b),
                                    children: b,
                                },
                                b,
                            ),
                        ),
                    }),
                e.jsxs("label", {
                    className: "wv-f",
                    children: [
                        e.jsx("span", { children: "备注" }),
                        e.jsx("input", {
                            value: j,
                            onChange: (b) => a(b.target.value.slice(0, 30)),
                            placeholder: "可空着",
                        }),
                    ],
                }),
                e.jsxs("p", {
                    className: "wv-f-hint",
                    children: [
                        "只记你自己知道的钱。这一笔会进",
                        i != null && i.card ? `这张卡（尾号 ${re(i.card)}）` : "钱包余额",
                        "的流水。",
                    ],
                }),
                e.jsx("button", { className: "btn-ios primary wv-save", onClick: o, children: "记下" }),
            ],
        }),
    });
}
function Ja({ open: s, onClose: n, onSave: t, wallet: r, fromId: i }) {
    const l = V(),
        d = (r.cards || []).filter((o) => o.type !== "credit"),
        [c, p] = f.useState(i),
        [x, g] = f.useState("");
    f.useEffect(() => {
        var o;
        s && (p(i || ((o = d[0]) == null ? void 0 : o.id) || null), g(""));
    }, [s]);
    const j = d.find((o) => o.id === c),
        a = () => {
            const o = Number(x);
            if (!j) {
                l("先选一张储蓄卡");
                return;
            }
            if (!(o > 0)) {
                l("填一个金额");
                return;
            }
            if (o > j.balance) {
                l(`这张卡里只有 ${Oe(j.balance)}`);
                return;
            }
            t({ from: c, amount: o });
        };
    return e.jsx(fe, {
        open: s,
        onClose: n,
        title: "转入余额",
        children: e.jsxs("div", {
            className: "wv-form",
            children: [
                !d.length &&
                    e.jsx("p", {
                        className: "wv-f-hint",
                        children: "还没有储蓄卡可以转。信用卡不能直接转进余额。",
                    }),
                !!d.length &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx("div", { className: "wv-f-lbl", children: "从哪张卡转" }),
                            e.jsx("div", {
                                className: "wp-pick",
                                children: d.map((o) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            type: "button",
                                            className: `wp-pick-it btn-plain ${c === o.id ? "on" : ""}`,
                                            onClick: () => p(o.id),
                                            children: [
                                                e.jsx(be, { card: o, balance: o.balance, compact: !0 }),
                                                e.jsx("span", {
                                                    className: "wp-pick-st",
                                                    children:
                                                        c === o.id
                                                            ? e.jsxs(e.Fragment, {
                                                                  children: [
                                                                      e.jsx(Qs, { size: 11, strokeWidth: 3 }),
                                                                      " 从这张",
                                                                  ],
                                                              })
                                                            : "",
                                                }),
                                            ],
                                        },
                                        o.id,
                                    ),
                                ),
                            }),
                            e.jsxs("label", {
                                className: "wv-f wv-f-amt",
                                children: [
                                    e.jsx("span", { children: "转多少" }),
                                    e.jsx("input", {
                                        value: x,
                                        inputMode: "decimal",
                                        onChange: (o) => g(o.target.value.replace(/[^\d.]/g, "")),
                                        placeholder: "0.00",
                                    }),
                                ],
                            }),
                            j &&
                                e.jsxs("button", {
                                    type: "button",
                                    className: "wv-all btn-plain",
                                    onClick: () => g(String(j.balance)),
                                    children: ["全部转入（", Oe(j.balance), "）"],
                                }),
                            e.jsx("p", {
                                className: "wv-f-hint",
                                children: "卡里少多少、余额就多多少，流水两边都记着。",
                            }),
                            e.jsx("button", {
                                className: "btn-ios primary wv-save",
                                onClick: a,
                                children: "转入",
                            }),
                        ],
                    }),
            ],
        }),
    });
}
function en({ open: s, onClose: n, onSave: t, card: r, holder: i }) {
    const [l, d] = f.useState("graphite"),
        [c, p] = f.useState(null),
        x = f.useRef(null);
    if (
        (f.useEffect(() => {
            s && r && (d(r.face || "graphite"), p(r.image || null));
        }, [s, r]),
        !r)
    )
        return null;
    const g = async (j) => {
        var b;
        const a = (b = j.target.files) == null ? void 0 : b[0];
        if (((j.target.value = ""), !a)) return;
        const o = await Ks(a, { aspect: 1.586, shape: "rounded", title: "卡面" }, { note: "银行卡卡面" });
        o && p(o);
    };
    return e.jsx(fe, {
        open: s,
        onClose: n,
        title: "换卡面",
        children: e.jsxs("div", {
            className: "wv-form",
            children: [
                e.jsx("div", {
                    className: "wv-form-prev",
                    children: e.jsx(be, {
                        card: { ...r, face: l, image: c },
                        holder: i,
                        balance: r.balance,
                        sheen: !0,
                    }),
                }),
                e.jsxs("div", {
                    className: "wv-faces",
                    children: [
                        xs.map((j) =>
                            e.jsx(
                                "button",
                                {
                                    type: "button",
                                    className: `wv-face bc-${j.id} btn-plain ${!c && l === j.id ? "on" : ""}`,
                                    onClick: () => {
                                        (d(j.id), p(null));
                                    },
                                    children: e.jsx("small", { children: j.zh }),
                                },
                                j.id,
                            ),
                        ),
                        e.jsxs("button", {
                            type: "button",
                            className: `wv-face wv-face-img btn-plain ${c ? "on" : ""}`,
                            onClick: () => {
                                var j;
                                return (j = x.current) == null ? void 0 : j.click();
                            },
                            children: [e.jsx(De, { size: 14 }), e.jsx("small", { children: "图片" })],
                        }),
                        e.jsx("input", { ref: x, type: "file", accept: "image/*", hidden: !0, onChange: g }),
                    ],
                }),
                e.jsx("button", {
                    className: "btn-ios primary wv-save",
                    onClick: () => t({ face: l, image: c || void 0 }),
                    children: "用这个卡面",
                }),
            ],
        }),
    });
}
const ia = { all: ea, digital: Ma, apparel: Ta, jewelry: Oa, care: Da, living: La, gift: Pa },
    Ke = [{ id: "all", zh: "全部", en: "ALL" }, ...Ae],
    sn = [{ id: "all", zh: "推荐" }, ...Hs],
    an = { home: "/ToT/mall/hero-1.jpg", food: "/ToT/mall/hero-2.jpg", shop: "/ToT/mall/hero-3.jpg" },
    nn = [
        {
            id: "fb-1",
            title: "AirPods Pro 2",
            brand: "Apple",
            price: 1899,
            iconKey: "product-headphones",
            eyebrow: "主动降噪 · USB-C",
            category: "digital",
            colors: ["白色"],
        },
        {
            id: "fb-2",
            title: "Apple Watch SE",
            brand: "Apple",
            price: 1999,
            iconKey: "product-watch",
            eyebrow: "40 毫米 · GPS",
            category: "digital",
            colors: ["星光色", "午夜色"],
        },
        {
            id: "fb-3",
            title: "Samba OG",
            brand: "adidas",
            price: 899,
            iconKey: "product-sneaker",
            eyebrow: "翻毛皮 · 生胶底",
            category: "apparel",
            colors: ["白绿", "黑白"],
            sizes: ["36", "37", "38", "39", "40"],
        },
        {
            id: "fb-4",
            title: "双面羊毛大衣",
            brand: "COS",
            price: 2250,
            iconKey: "product-jacket",
            eyebrow: "含羊毛 90%",
            category: "apparel",
            colors: ["燕麦", "黑"],
            sizes: ["S", "M", "L"],
        },
        {
            id: "fb-5",
            title: "T Smile 项链",
            brand: "Tiffany & Co.",
            price: 7800,
            iconKey: "product-necklace",
            eyebrow: "18K 玫瑰金",
            category: "jewelry",
        },
        {
            id: "fb-6",
            title: "素圈银戒",
            brand: "Georg Jensen",
            price: 1350,
            iconKey: "product-ring",
            eyebrow: "925 银",
            category: "jewelry",
            sizes: ["10", "12", "14"],
        },
        {
            id: "fb-7",
            title: "小众香水 · 淡香精",
            brand: "Le Labo",
            price: 1650,
            iconKey: "product-perfume",
            eyebrow: "50ml · 木质调",
            category: "care",
        },
        {
            id: "fb-8",
            title: "保湿修护面霜",
            brand: "Aesop",
            price: 560,
            iconKey: "product-skincare",
            eyebrow: "60ml",
            category: "care",
        },
        {
            id: "fb-9",
            title: "无花果香薰蜡烛",
            brand: "Diptyque",
            price: 580,
            iconKey: "product-candle",
            eyebrow: "190g · 约 50 小时",
            category: "living",
        },
        {
            id: "fb-10",
            title: "游戏手柄",
            brand: "Xbox",
            price: 449,
            iconKey: "product-controller",
            eyebrow: "无线 · 蓝牙",
            category: "living",
        },
        {
            id: "fb-11",
            title: "白玫瑰花束",
            brand: "Roseonly",
            price: 699,
            iconKey: "product-bouquet",
            eyebrow: "11 枝 · 同城配送",
            category: "gift",
        },
        {
            id: "fb-12",
            title: "手写信纸礼盒",
            brand: "MIDORI",
            price: 168,
            iconKey: "product-letter",
            eyebrow: "信纸 + 信封 + 火漆",
            category: "gift",
        },
    ],
    tn = [
        {
            id: "ffb-1",
            shop: "吉野家",
            dish: "招牌牛肉饭",
            price: 28,
            emoji: "🍛",
            note: "加温泉蛋",
            category: "meal",
        },
        {
            id: "ffb-2",
            shop: "味千拉面",
            dish: "豚骨叉烧拉面",
            price: 36,
            emoji: "🍜",
            note: "",
            category: "meal",
        },
        {
            id: "ffb-3",
            shop: "麦当劳",
            dish: "巨无霸套餐",
            price: 39,
            emoji: "🍔",
            note: "中薯 + 可乐",
            category: "fast",
        },
        {
            id: "ffb-4",
            shop: "必胜客",
            dish: "超级至尊披萨",
            price: 69,
            emoji: "🍕",
            note: "9 寸",
            category: "fast",
        },
        {
            id: "ffb-5",
            shop: "Manner",
            dish: "燕麦拿铁",
            price: 22,
            emoji: "☕",
            note: "少冰",
            category: "coffee",
        },
        {
            id: "ffb-6",
            shop: "喜茶",
            dish: "多肉葡萄",
            price: 19,
            emoji: "🧋",
            note: "少甜",
            category: "coffee",
        },
        {
            id: "ffb-7",
            shop: "鲍师傅",
            dish: "肉松小贝",
            price: 24,
            emoji: "🍰",
            note: "4 只装",
            category: "sweet",
        },
        {
            id: "ffb-8",
            shop: "哈根达斯",
            dish: "香草冰淇淋",
            price: 42,
            emoji: "🍦",
            note: "",
            category: "sweet",
        },
        {
            id: "ffb-9",
            shop: "Wagas",
            dish: "牛油果鸡胸沙拉",
            price: 58,
            emoji: "🥗",
            note: "油醋汁",
            category: "light",
        },
        {
            id: "ffb-10",
            shop: "Subway",
            dish: "烤鸡三明治",
            price: 26,
            emoji: "🥪",
            note: "全麦面包",
            category: "light",
        },
    ];
function Qn({ onExitToHome: s, forceOwner: n = null, launch: t = null }) {
    var E, Z, _, U;
    const r = B(),
        { state: i, mallSetOwner: l, mallOrderPatch: d } = r,
        c = V(),
        [p, x] = f.useState("home"),
        [g, j] = f.useState("all"),
        [a, o] = f.useState(null),
        [b, m] = f.useState(!1),
        [u, v] = f.useState(null),
        [h, y] = f.useState(null),
        [k, $] = f.useState(!1),
        S = n || "me";
    f.useEffect(() => {
        (i.mall.currentOwner || "me") !== S && l(S);
    }, [S, i.mall.currentOwner, l]);
    const I = S === "me" ? os(i.me) || "我" : Me(i.characters.find((C) => C.id === S)) || "角色";
    f.useEffect(() => {
        const C = (W) => {
            var Q, Y;
            const H =
                ((Q = W.detail) == null ? void 0 : Q.ownerId) === "me"
                    ? "我"
                    : ((Y = i.characters.find((L) => {
                          var le;
                          return L.id === ((le = W.detail) == null ? void 0 : le.ownerId);
                      })) == null
                          ? void 0
                          : Y.name) || "角色";
            c(`${H} 的商城已刷新完毕`);
        };
        return (
            window.addEventListener("litot:mall-refresh-done", C),
            () => window.removeEventListener("litot:mall-refresh-done", C)
        );
    }, [i.characters, c]);
    const A = we(15e3),
        q = (E = i.mall.foodOrders) == null ? void 0 : E[S];
    f.useEffect(() => {
        for (const C of q || [])
            C.status === "done" ||
                C.arrivalNoticed ||
                !ke(C, A).done ||
                (d(S, "food", C.id, { arrivalNoticed: !0 }),
                A - ke(C, A).eta < 30 * 6e4 &&
                    c(`「${C.shop}」的外卖送到了${C.contactless ? "，放在门口" : ""}`));
    }, [A, q, S, d, c]);
    const R = (C) =>
            r.patch((W) => {
                const H = W.mall.customProducts || {},
                    Q = H[S] || [],
                    Y = Q.some((L) => L.id === C.id) ? Q.map((L) => (L.id === C.id ? C : L)) : [C, ...Q];
                return { mall: { ...W.mall, customProducts: { ...H, [S]: Y } } };
            }),
        K = (C) =>
            r.patch((W) => {
                const H = W.mall.customProducts || {};
                return {
                    mall: {
                        ...W.mall,
                        customProducts: { ...H, [S]: (H[S] || []).filter((Q) => Q.id !== C) },
                    },
                };
            }),
        T = fs(S),
        w = (C = null) => {
            (v(C), m(!0));
        },
        N = (C, W) => o({ name: C, params: W });
    f.useEffect(() => {
        if (!(!(t != null && t.at) || n)) {
            if (t.product) {
                (x("shop"), o({ name: "product", params: { item: t.product } }));
                return;
            }
            (x("food"),
                o(
                    t.orderId
                        ? { name: "fooddetail", params: { orderId: t.orderId } }
                        : { name: "foodorders", params: {} },
                ));
        }
    }, [t == null ? void 0 : t.at]);
    const z = f.useRef(null);
    f.useEffect(() => {
        z.current && (z.current.scrollTop = 0);
    }, [a, p]);
    const O = () => o(null),
        F = () =>
            o((C) => {
                var W;
                return ((W = C == null ? void 0 : C.params) == null ? void 0 : W.from) || null;
            });
    return e.jsxs("div", {
        className: "mall-root",
        children: [
            e.jsxs("div", {
                className: "mall-body",
                ref: z,
                children: [
                    a == null &&
                        p === "home" &&
                        e.jsx(cn, {
                            ownerId: S,
                            ownerLabel: I,
                            onSearch: () => m(!0),
                            onOpenCart: () => N("cart"),
                            onOpenProduct: (C) => N("product", { item: C }),
                            onJumpShop: (C = "all") => {
                                (j(C), x("shop"));
                            },
                        }),
                    a == null &&
                        p === "shop" &&
                        e.jsx(jn, {
                            ownerId: S,
                            cat: g,
                            setCat: j,
                            onSearch: () => m(!0),
                            onOpenCart: () => N("cart"),
                            onOpenProduct: (C) => N("product", { item: C }),
                        }),
                    a == null &&
                        p === "food" &&
                        e.jsx(bn, {
                            ownerId: S,
                            onSearch: () => m(!0),
                            onOpenFoodOrders: () => N("foodorders"),
                            onOpenFood: (C) => N("foodbuy", { item: C }),
                        }),
                    a == null &&
                        p === "me" &&
                        e.jsx(fn, {
                            ownerId: S,
                            ownerLabel: I,
                            onOpenWallet: () => N("wallet"),
                            onOpenOrders: (C) => N("orders", { tab: typeof C == "string" ? C : "all" }),
                            onOpenBanners: () => N("banners"),
                            onOpenFoodOrders: () => N("foodorders"),
                            onOpenLogistics: () => N("logistics"),
                            onOpenDelivery: () => N("delivery"),
                            onOpenAddresses: () => N("addresses"),
                            onOpenKinship: () => N("kinship"),
                            onOpenRefreshLog: () => $(!0),
                        }),
                    (a == null ? void 0 : a.name) === "product" &&
                        e.jsx(Cn, {
                            ownerId: S,
                            item: a.params.item,
                            onBack: F,
                            onOpenCart: () => N("cart", { from: a }),
                            onOpenBuy: (C) => N("buy", { items: C, from: a }),
                            onShare: (C) => y(Ws(C, S)),
                            onEdit: (C) => w(C),
                            onDelete: (C) => {
                                (K(C.id), c("已删掉这个商品"), F());
                            },
                        }),
                    (a == null ? void 0 : a.name) === "cart" &&
                        e.jsx($n, {
                            ownerId: S,
                            onBack: F,
                            onCheckout: (C) => N("buy", { items: C, from: a }),
                        }),
                    (a == null ? void 0 : a.name) === "buy" &&
                        e.jsx(wn, {
                            ownerId: S,
                            items: a.params.items,
                            onBack: F,
                            onDone: (C) => o({ name: "paid", params: { orderId: C } }),
                        }),
                    (a == null ? void 0 : a.name) === "paid" &&
                        e.jsx(An, {
                            ownerId: S,
                            orderId: a.params.orderId,
                            onOpen: () => o({ name: "orderdetail", params: { orderId: a.params.orderId } }),
                            onHome: () => o(null),
                        }),
                    (a == null ? void 0 : a.name) === "orders" &&
                        e.jsx(Mn, {
                            ownerId: S,
                            initialTab: ((Z = a.params) == null ? void 0 : Z.tab) || "all",
                            onBack: O,
                            onOpen: (C) => N("orderdetail", { orderId: C, from: a }),
                            onOpenLogistics: (C) => N("logistics", { orderId: C, from: a }),
                            onRebuy: (C) => N("buy", { items: C }),
                        }),
                    (a == null ? void 0 : a.name) === "orderdetail" &&
                        e.jsx(Tn, {
                            ownerId: S,
                            orderId: a.params.orderId,
                            onBack: F,
                            onOpenLogistics: (C) => N("logistics", { orderId: C, from: a }),
                            onRebuy: (C) => N("buy", { items: C }),
                        }),
                    (a == null ? void 0 : a.name) === "logistics" &&
                        e.jsx(On, {
                            ownerId: S,
                            orderId: (_ = a.params) == null ? void 0 : _.orderId,
                            onBack: F,
                        }),
                    (a == null ? void 0 : a.name) === "banners" && e.jsx(un, { ownerId: S, onBack: O }),
                    (a == null ? void 0 : a.name) === "foodbuy" &&
                        e.jsx(Dn, {
                            ownerId: S,
                            item: a.params.item,
                            onBack: O,
                            onDone: (C) => o({ name: "fooddetail", params: { orderId: C } }),
                        }),
                    (a == null ? void 0 : a.name) === "foodorders" &&
                        e.jsx(Ln, {
                            ownerId: S,
                            onBack: O,
                            onOpen: (C) => N("fooddetail", { orderId: C, from: a }),
                        }),
                    (a == null ? void 0 : a.name) === "fooddetail" &&
                        e.jsx(ua, { ownerId: S, orderId: a.params.orderId, onBack: F }),
                    (a == null ? void 0 : a.name) === "delivery" &&
                        e.jsx(Wn, {
                            ownerId: S,
                            orderId: (U = a.params) == null ? void 0 : U.orderId,
                            onBack: O,
                        }),
                    (a == null ? void 0 : a.name) === "wallet" &&
                        e.jsx(Xa, { ownerId: S, onBack: O, onOpenKinship: () => N("kinship") }),
                    (a == null ? void 0 : a.name) === "addresses" && e.jsx(Fn, { ownerId: S, onBack: O }),
                    (a == null ? void 0 : a.name) === "kinship" && e.jsx(Bn, { ownerId: S, onBack: O }),
                ],
            }),
            e.jsxs("nav", {
                className: "mall-nav",
                "aria-label": "商城导航",
                children: [
                    e.jsx("button", {
                        className: "mall-nav-back",
                        onClick: s,
                        "aria-label": "返回主页",
                        children: e.jsx(ds, { size: 20, strokeWidth: 2 }),
                    }),
                    e.jsx(_e, {
                        active: p === "home" && !a,
                        onClick: () => {
                            (O(), x("home"));
                        },
                        icon: e.jsx(ka, { size: 19, strokeWidth: 1.8 }),
                        label: "首页",
                    }),
                    e.jsx(_e, {
                        active: p === "shop" && !a,
                        onClick: () => {
                            (O(), x("shop"));
                        },
                        icon: e.jsx(ue, { size: 19, strokeWidth: 1.8 }),
                        label: "商城",
                    }),
                    e.jsx(_e, {
                        active: p === "food" && !a,
                        onClick: () => {
                            (O(), x("food"));
                        },
                        icon: e.jsx(ms, { size: 19, strokeWidth: 1.8 }),
                        label: "外卖",
                    }),
                    e.jsx(_e, {
                        active: p === "me" && !a,
                        onClick: () => {
                            (O(), x("me"));
                        },
                        icon: e.jsx(Ca, { size: 19, strokeWidth: 1.8 }),
                        label: "我的",
                    }),
                ],
            }),
            e.jsx(vn, {
                open: b,
                editing: u,
                onClose: () => {
                    (m(!1), v(null));
                },
                onSave: (C, W) => {
                    (R(C),
                        m(!1),
                        v(null),
                        o((H) => {
                            var Q, Y;
                            return (H == null ? void 0 : H.name) === "product" &&
                                ((Y = (Q = H.params) == null ? void 0 : Q.item) == null ? void 0 : Y.id) ===
                                    C.id
                                ? { ...H, params: { ...H.params, item: C } }
                                : H;
                        }),
                        W === "cart"
                            ? T(C)
                            : W === "share"
                              ? y(Ws(C, S))
                              : c(u ? "已保存" : "已放进商城，在「商城」列表最前面"));
                },
            }),
            e.jsx(ba, { open: !!h, card: h, onClose: () => y(null) }),
            e.jsx(yn, { open: k, onClose: () => $(!1) }),
        ],
    });
}
function _e({ active: s, onClick: n, icon: t, label: r }) {
    return e.jsxs("button", {
        className: `mall-nav-btn btn-plain ${s ? "active" : ""}`,
        onClick: n,
        children: [t, e.jsx("span", { children: r })],
    });
}
function Ee({ tabs: s, value: n, onChange: t, counts: r, icon: i }) {
    const l = f.useRef(null);
    return (
        f.useEffect(() => {
            var c;
            const d = (c = l.current) == null ? void 0 : c.querySelector(".m26-seg.on");
            if (d && l.current) {
                const p = l.current,
                    x = d.offsetLeft - (p.clientWidth - d.offsetWidth) / 2;
                p.scrollTo({ left: Math.max(0, x), behavior: "smooth" });
            }
        }, [n]),
        e.jsx("div", {
            className: "m26-track-wrap",
            children: e.jsx("div", {
                className: "m26-track",
                role: "tablist",
                ref: l,
                children: s.map((d) => {
                    const c = n === d.id,
                        p = r == null ? void 0 : r[d.id];
                    return e.jsxs(
                        "button",
                        {
                            role: "tab",
                            "aria-selected": c,
                            className: `m26-seg btn-plain ${c ? "on" : ""}`,
                            onClick: () => t(d.id),
                            children: [
                                i && e.jsx("span", { className: "m26-seg-ic", children: i(d.id, c) }),
                                e.jsx("span", { children: d.zh }),
                                p != null && e.jsx("em", { children: p }),
                            ],
                        },
                        d.id,
                    );
                }),
            }),
        })
    );
}
const ca = (s) => {
        const n = ia[s] || ea;
        return e.jsx(n, { size: 15, strokeWidth: 2 });
    },
    ln = (s) => e.jsx(Be, { category: s, size: 16 });
function bs(s, n, t) {
    const r = { all: s.length };
    for (const i of t) r[i] = 0;
    for (const i of s) {
        const l = n(i);
        r[l] = (r[l] || 0) + 1;
    }
    return r;
}
function fs(s) {
    const { mallCartAdd: n } = B(),
        t = V();
    return (r) => {
        var d, c;
        const i = ((d = r.colors) == null ? void 0 : d[0]) || "",
            l = ((c = r.sizes) == null ? void 0 : c[0]) || "";
        (n(s, {
            id: `${r.id}--${i || "x"}--${l || "x"}`,
            iconKey: $e(r),
            title: r.title,
            brand: r.brand,
            price: r.price,
            qty: 1,
            color: i,
            size: l,
            ...(r.image ? { image: r.image } : null),
        }),
            t(`已加入购物车${i || l ? ` · ${[i, l].filter(Boolean).join(" / ")}` : ""}`));
    };
}
function cn({ ownerId: s, ownerLabel: n, onSearch: t, onOpenCart: r, onOpenProduct: i, onJumpShop: l }) {
    var u, v;
    const [d, c] = f.useState("all"),
        p = Cs(s),
        x = Ss(s),
        g = fs(s),
        j = f.useMemo(
            () =>
                bs(
                    p,
                    ne,
                    Ae.map((h) => h.id),
                ),
            [p],
        ),
        a = ja(p, d),
        o = qs(),
        b =
            ((u = x == null ? void 0 : x.home) == null ? void 0 : u.title) ||
            `${o}日上新
这一季的新东西`,
        m =
            ((v = x == null ? void 0 : x.home) == null ? void 0 : v.sub) ||
            `${Ae.length} 个分类 · 共 ${p.length} 件`;
    return e.jsxs("div", {
        className: "mall-view",
        children: [
            e.jsxs("header", {
                className: "mall-top",
                children: [
                    e.jsxs("div", {
                        children: [
                            e.jsx("h1", { className: "mall-title", children: "今日推荐" }),
                            e.jsx("div", { className: "mall-sub", children: "今日也有值得带回家的东西" }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "mall-actions",
                        children: [
                            e.jsx(vs, { ownerId: s }),
                            e.jsx("button", {
                                className: "mall-icon-btn btn-plain",
                                onClick: t,
                                "aria-label": "自定义商品搜索",
                                children: e.jsx(hs, { size: 17, strokeWidth: 1.9 }),
                            }),
                            e.jsx("button", {
                                className: "mall-icon-btn btn-plain",
                                onClick: r,
                                "aria-label": "购物车",
                                children: e.jsx(ue, { size: 17, strokeWidth: 1.9 }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(xn, { ownerId: s, items: p, heroTitle: b, heroSub: m, onOpenProduct: i, onJumpShop: l }),
            e.jsxs("div", {
                className: "m26-head",
                children: [
                    e.jsx("h2", { children: "商品分类" }),
                    e.jsxs("button", {
                        className: "m26-more btn-plain",
                        onClick: () => l(d),
                        children: ["查看全部", e.jsx(de, { size: 14, strokeWidth: 2.2 })],
                    }),
                ],
            }),
            e.jsx(Ee, { tabs: Ke, value: d, onChange: c, counts: j, icon: ca }),
            e.jsxs("div", {
                className: "m26-head",
                children: [
                    e.jsx("h2", { children: "为你精选" }),
                    e.jsxs("span", { className: "m26-count", children: [a.length, " 件"] }),
                ],
            }),
            e.jsxs("div", {
                className: "m26-rail",
                children: [
                    a
                        .slice(0, 10)
                        .map((h) =>
                            e.jsx(
                                Ns,
                                { item: h, onClick: () => i(h), onAdd: () => g(h), variant: "home" },
                                h.id,
                            ),
                        ),
                    a.length === 0 &&
                        e.jsx("div", {
                            className: "m26-empty",
                            children: "这一类还没上货 · 点右上角刷新一次",
                        }),
                ],
            }),
            e.jsx("div", { className: "m26-head", children: e.jsx("h2", { children: "按分类逛" }) }),
            e.jsx("div", {
                className: "m26-catlist",
                children: Ae.map((h) => {
                    const y = p.filter(($) => ne($) === h.id),
                        k = ia[h.id];
                    return e.jsxs(
                        "button",
                        {
                            className: "m26-catrow btn-plain",
                            onClick: () => l(h.id),
                            children: [
                                e.jsx("span", {
                                    className: "m26-catrow-ic",
                                    children: e.jsx(k, { size: 18, strokeWidth: 1.9 }),
                                }),
                                e.jsxs("span", {
                                    className: "m26-catrow-txt",
                                    children: [
                                        e.jsx("b", { children: h.zh }),
                                        e.jsx("small", {
                                            children: y.length
                                                ? `${y.length} 件 · ${[...new Set(y.map(($) => $.brand).filter(Boolean))].slice(0, 2).join("、") || h.en}`
                                                : "还没上货",
                                        }),
                                    ],
                                }),
                                e.jsx("span", {
                                    className: "m26-stack",
                                    children: y
                                        .slice(0, 3)
                                        .map(($) =>
                                            e.jsx(
                                                "i",
                                                {
                                                    children: e.jsx(te, {
                                                        item: $,
                                                        size: 22,
                                                        strokeWidth: 1.7,
                                                    }),
                                                },
                                                $.id,
                                            ),
                                        ),
                                }),
                                e.jsx(de, { size: 16, strokeWidth: 2, className: "m26-chev" }),
                            ],
                        },
                        h.id,
                    );
                }),
            }),
        ],
    });
}
const gs = (s) => `/ToT/mall/banners/${s}.jpg`,
    ra = {
        home: ["home", "home-2", "home-3"],
        digital: ["digital", "digital-2", "digital-3"],
        phone: ["phone", "phone-2", "phone-3"],
        watch: [
            "watch",
            "watch-2",
            "watch-3",
            "watch-4",
            "watch-5",
            "watch-6",
            "watch-7",
            "watch-8",
            "watch-9",
        ],
        controller: [
            "controller",
            "controller-2",
            "controller-3",
            "controller-4",
            "controller-5",
            "controller-6",
            "controller-7",
        ],
        apparel: ["apparel", "apparel-2", "apparel-3", "apparel-4", "apparel-5", "apparel-6"],
        handbag: ["handbag", "handbag-2", "handbag-3", "handbag-4", "handbag-5", "handbag-6"],
        coat: ["coat"],
        jewelry: ["jewelry"],
        perfume: ["perfume", "perfume-2", "perfume-3", "perfume-4"],
        skincare: ["skincare", "skincare-2"],
        care: ["care", "care-2"],
        living: ["living"],
        gift: ["gift", "gift-2", "gift-3", "gift-4"],
        giftbox: ["giftbox", "giftbox-2", "giftbox-3"],
    },
    rn = new Set([
        "home",
        "home-2",
        "phone-3",
        "watch",
        "watch-2",
        "watch-5",
        "watch-6",
        "watch-7",
        "watch-8",
        "watch-9",
        "controller",
        "controller-2",
        "controller-4",
        "controller-5",
        "controller-6",
        "controller-7",
        "apparel-2",
        "apparel-3",
        "apparel-4",
        "apparel-5",
        "apparel-6",
        "handbag",
        "handbag-2",
        "handbag-3",
        "handbag-4",
        "handbag-5",
        "handbag-6",
        "coat",
        "jewelry",
        "perfume",
        "perfume-2",
        "perfume-4",
        "skincare-2",
        "care",
        "living",
        "gift",
        "gift-2",
        "gift-3",
        "gift-4",
        "giftbox",
        "giftbox-2",
        "giftbox-3",
    ]),
    on = (s) => {
        const n = /\/mall\/banners\/([\w-]+)\.jpg$/.exec(String(s || ""));
        return n && rn.has(n[1]) ? "dark" : "light";
    },
    dn = (s) => {
        let n = 7;
        for (const t of String(s || "")) n = (n * 31 + t.charCodeAt(0)) >>> 0;
        return n;
    },
    rs = (s, n = "") => {
        const t = ra[s];
        return t ? gs(t[dn(n) % t.length]) : null;
    },
    oa = {
        digital: "digital",
        apparel: "apparel",
        jewelry: "jewelry",
        care: "care",
        living: "living",
        gift: "gift",
    },
    mn = Object.fromEntries(Object.entries(oa).map(([s, n]) => [s, gs(n)])),
    hn = [
        [/headphones|speaker|camera/, "digital"],
        [/smartphone/, "phone"],
        [/watch/, "watch"],
        [/controller/, "controller"],
        [/sneaker|running-shoe|boots|heels|sandals|loafers/, "apparel"],
        [/handbag|backpack/, "handbag"],
        [/tee|shirt|blouse|hoodie|jacket|sweater|tank|shorts|trousers|skirt|dress|cap/, "coat"],
        [/necklace|jewelry|earrings|ring/, "jewelry"],
        [/perfume/, "perfume"],
        [/skincare/, "skincare"],
        [/candle/, "living"],
        [/bouquet/, "gift"],
        [/gift|letter/, "giftbox"],
    ];
function pn(s) {
    const n = $e(s),
        t = (s == null ? void 0 : s.id) || (s == null ? void 0 : s.title);
    for (const [i, l] of hn) if (i.test(n) && ra[l]) return rs(l, t);
    const r = oa[ne(s)];
    return r ? rs(r, t) : null;
}
const da = ["digital", "apparel", "care", "jewelry", "gift", "living"];
function xn({ ownerId: s, items: n, heroTitle: t, heroSub: r, onOpenProduct: i, onJumpShop: l }) {
    const { state: d } = B(),
        c = d.mall.bannerPhotos || {},
        p = f.useMemo(() => {
            const m = [{ key: "theme", kind: "theme", photo: c.home || rs("home", t) }];
            for (const u of da) {
                const v = n.find((h) => ne(h) === u);
                if (
                    v &&
                    (m.push({ key: u, kind: "pick", cat: u, item: v, photo: c[u] || pn(v) }), m.length >= 4)
                )
                    break;
            }
            return m;
        }, [n, c, t]),
        x = f.useRef(null),
        [g, j] = f.useState(0),
        a = f.useRef(0);
    f.useEffect(() => {
        const m = setInterval(() => {
            const u = x.current;
            if (!u || Date.now() - a.current < 8e3 || p.length < 2) return;
            const v = (Math.round(u.scrollLeft / u.clientWidth) + 1) % p.length;
            u.scrollTo({ left: v * u.clientWidth, behavior: "smooth" });
        }, 5e3);
        return () => clearInterval(m);
    }, [p.length]);
    const o = () => {
            const m = x.current;
            m && j(Math.round(m.scrollLeft / m.clientWidth));
        },
        b = (m) => {
            const u = x.current;
            (u && u.scrollTo({ left: m * u.clientWidth, behavior: "smooth" }), (a.current = Date.now()));
        };
    return e.jsxs("div", {
        className: "m26-car",
        children: [
            e.jsx("div", {
                className: "m26-car-track",
                ref: x,
                onScroll: o,
                onTouchStart: () => {
                    a.current = Date.now();
                },
                onPointerDown: () => {
                    a.current = Date.now();
                },
                children: p.map((m) =>
                    e.jsxs(
                        "button",
                        {
                            className: `m26-slide btn-plain ${m.photo ? `photo ${on(m.photo)}` : "plain"}`,
                            onClick: () => (m.kind === "theme" ? l("all") : i(m.item)),
                            children: [
                                m.photo &&
                                    e.jsxs("span", {
                                        className: "m26-slide-ph",
                                        "aria-hidden": !0,
                                        children: [e.jsx(Se, { src: m.photo, alt: "" }), e.jsx("i", {})],
                                    }),
                                m.kind === "theme"
                                    ? e.jsxs("span", {
                                          className: "m26-slide-copy",
                                          children: [
                                              e.jsx("small", { children: "今日推荐" }),
                                              e.jsx("b", {
                                                  children: t
                                                      .split(
                                                          `
`,
                                                      )
                                                      .map((u, v) =>
                                                          e.jsxs(
                                                              _s.Fragment,
                                                              { children: [v > 0 && e.jsx("br", {}), u] },
                                                              v,
                                                          ),
                                                      ),
                                              }),
                                              e.jsx("span", { children: r }),
                                              e.jsx("span", {
                                                  className: "m26-slide-cta",
                                                  children: e.jsxs("i", {
                                                      children: [
                                                          "逛全部",
                                                          e.jsx(de, { size: 12, strokeWidth: 2.6 }),
                                                      ],
                                                  }),
                                              }),
                                          ],
                                      })
                                    : e.jsxs("span", {
                                          className: "m26-slide-copy",
                                          children: [
                                              e.jsxs("small", {
                                                  children: [We(m.cat), " · ", m.item.brand || "精选"],
                                              }),
                                              e.jsx("b", { children: m.item.title }),
                                              e.jsx("span", {
                                                  children: m.item.eyebrow || m.item.desc || "",
                                              }),
                                              e.jsxs("span", {
                                                  className: "m26-slide-cta",
                                                  children: [
                                                      "¥",
                                                      Number(m.item.price || 0).toLocaleString(),
                                                      e.jsxs("i", {
                                                          children: [
                                                              "去看看",
                                                              e.jsx(de, { size: 12, strokeWidth: 2.6 }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                !m.photo &&
                                    e.jsx("span", {
                                        className: "m26-slide-pic",
                                        children: e.jsx(te, { item: m.item, size: 104 }),
                                    }),
                            ],
                        },
                        m.key,
                    ),
                ),
            }),
            p.length > 1 &&
                e.jsx("div", {
                    className: "m26-dots",
                    role: "tablist",
                    children: p.map((m, u) =>
                        e.jsx(
                            "button",
                            {
                                className: `btn-plain ${g === u ? "on" : ""}`,
                                onClick: () => b(u),
                                "aria-label": `第 ${u + 1} 张`,
                            },
                            m.key,
                        ),
                    ),
                }),
        ],
    });
}
function un({ ownerId: s, onBack: n }) {
    const { state: t, patch: r } = B(),
        i = V(),
        l = t.mall.bannerPhotos || {},
        d = Cs(s),
        c = f.useRef(null),
        [p, x] = f.useState(null),
        g = (o, b) =>
            r((m) => {
                const u = { ...(m.mall.bannerPhotos || {}) };
                return (b ? (u[o] = b) : delete u[o], { mall: { ...m.mall, bannerPhotos: u } });
            }),
        j = async (o) => {
            var u;
            const b = (u = o.target.files) == null ? void 0 : u[0];
            if (((o.target.value = ""), !b || !p)) return;
            const m = await Gs(b, { note: `商城横幅 ${p}` });
            m && (g(p, m), i("已换上"));
        },
        a = [
            { k: "home", zh: "今日推荐（第一张）", sub: "整批的主题图" },
            ...da.map((o) => {
                var b;
                return {
                    k: o,
                    zh: We(o),
                    sub: ((b = d.find((m) => ne(m) === o)) == null ? void 0 : b.title) || "这一类还没上货",
                };
            }),
        ];
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, { title: "首页横幅图片", onBack: n }),
            e.jsx("p", {
                className: "m26-hint",
                children:
                    "首页横幅会轮播「今日推荐」和几个分类里的一件商品。每个位置可以换成你自己的商品海报（横版，约 2.4 : 1，主体放右边，左边留给文字）。图片只存在这台手机上。",
            }),
            e.jsx(G, {
                children: a.map((o) => {
                    const b = l[o.k] || (o.k === "home" ? gs("home") : mn[o.k]) || null;
                    return e.jsxs(
                        "div",
                        {
                            className: "m26-bp",
                            children: [
                                e.jsx("span", {
                                    className: "m26-bp-pic",
                                    children: b
                                        ? String(b).startsWith("asset:")
                                            ? e.jsx(Se, { src: b, alt: "" })
                                            : e.jsx("img", { src: b, alt: "" })
                                        : e.jsx(De, { size: 20, strokeWidth: 1.6 }),
                                }),
                                e.jsxs("span", {
                                    className: "m26-bp-t",
                                    children: [
                                        e.jsx("b", { children: o.zh }),
                                        e.jsxs("small", {
                                            children: [
                                                l[o.k]
                                                    ? "自定义"
                                                    : b
                                                      ? "内置照片"
                                                      : "没有照片 · 显示商品图标",
                                                " · ",
                                                o.sub,
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsxs("span", {
                                    className: "m26-bp-acts",
                                    children: [
                                        e.jsx("button", {
                                            className: "m26-mini dark btn-plain",
                                            onClick: () => {
                                                var m;
                                                (x(o.k), (m = c.current) == null || m.click());
                                            },
                                            children: l[o.k] ? "更换" : "上传",
                                        }),
                                        l[o.k] &&
                                            e.jsx("button", {
                                                className: "m26-mini btn-plain",
                                                onClick: () => {
                                                    (g(o.k, null), i("已恢复"));
                                                },
                                                children: "恢复",
                                            }),
                                    ],
                                }),
                            ],
                        },
                        o.k,
                    );
                }),
            }),
            e.jsx("input", { ref: c, type: "file", accept: "image/*", hidden: !0, onChange: j }),
        ],
    });
}
function jn({ ownerId: s, cat: n, setCat: t, onSearch: r, onOpenCart: i, onOpenProduct: l }) {
    var o, b;
    const d = Cs(s),
        c = Ss(s),
        p = fs(s),
        x = f.useMemo(
            () =>
                bs(
                    d,
                    ne,
                    Ae.map((m) => m.id),
                ),
            [d],
        ),
        g = ja(d, n),
        j = Ke.find((m) => m.id === n) || Ke[0],
        a =
            d.find((m) => {
                var u;
                return (
                    ((u = c == null ? void 0 : c.shop) == null ? void 0 : u.pick) && m.title === c.shop.pick
                );
            }) ||
            d.find((m) => ne(m) === "digital") ||
            d[0];
    return e.jsxs("div", {
        className: "mall-view",
        children: [
            e.jsxs("header", {
                className: "mall-top",
                children: [
                    e.jsxs("div", {
                        children: [
                            e.jsx("h1", { className: "mall-title", children: "商城" }),
                            e.jsx("div", { className: "mall-sub", children: "把喜欢的东西放进购物车" }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "mall-actions",
                        children: [
                            e.jsx(vs, { ownerId: s }),
                            e.jsx("button", {
                                className: "mall-icon-btn btn-plain",
                                onClick: r,
                                "aria-label": "搜索",
                                children: e.jsx(hs, { size: 17, strokeWidth: 1.9 }),
                            }),
                            e.jsx("button", {
                                className: "mall-icon-btn btn-plain",
                                onClick: i,
                                "aria-label": "购物袋",
                                children: e.jsx(ue, { size: 17, strokeWidth: 1.9 }),
                            }),
                        ],
                    }),
                ],
            }),
            a &&
                e.jsxs("button", {
                    className: "m26-promo btn-plain",
                    onClick: () => l(a),
                    children: [
                        e.jsxs("span", {
                            className: "m26-promo-copy",
                            children: [
                                e.jsx("small", {
                                    children:
                                        ((o = c == null ? void 0 : c.shop) == null ? void 0 : o.kicker) ||
                                        `NEW IN · ${qs()}季`,
                                }),
                                e.jsx("b", {
                                    children:
                                        ((b = c == null ? void 0 : c.shop) == null ? void 0 : b.title) ||
                                        a.title,
                                }),
                                e.jsx("span", {
                                    className: "m26-promo-meta",
                                    children: [a.brand, `¥${Number(a.price || 0).toLocaleString()}`]
                                        .filter(Boolean)
                                        .join(" · "),
                                }),
                                e.jsxs("span", {
                                    className: "m26-promo-cta",
                                    children: ["去看看", e.jsx(de, { size: 13, strokeWidth: 2.4 })],
                                }),
                            ],
                        }),
                        e.jsx("span", {
                            className: "m26-promo-pic",
                            children: e.jsx(te, { item: a, size: 96, strokeWidth: 1.5 }),
                        }),
                    ],
                }),
            e.jsx(Ee, { tabs: Ke, value: n, onChange: t, counts: x, icon: ca }),
            e.jsxs("div", {
                className: "m26-cat-head",
                children: [
                    e.jsxs("div", {
                        children: [
                            e.jsx("small", { children: j.en }),
                            e.jsx("h2", { children: j.id === "all" ? "全部商品" : j.zh }),
                        ],
                    }),
                    e.jsxs("span", { className: "m26-count", children: [g.length, " 件"] }),
                ],
            }),
            e.jsx("div", {
                className: "m26-grid",
                children: g.map((m) =>
                    e.jsx(
                        Ns,
                        { item: m, onClick: () => l(m), onAdd: () => p(m), showCat: n === "all" },
                        m.id,
                    ),
                ),
            }),
            g.length === 0 &&
                e.jsxs("div", {
                    className: "m26-empty big",
                    children: [
                        j.zh,
                        "还没上货",
                        e.jsx("br", {}),
                        e.jsx("span", { children: "点右上角的刷新，每个分类都会补上" }),
                    ],
                }),
        ],
    });
}
function bn({ ownerId: s, onSearch: n, onOpenFoodOrders: t, onOpenFood: r }) {
    var o, b;
    const [i, l] = f.useState("all"),
        d = En(s),
        c = Ss(s),
        p = f.useMemo(
            () =>
                bs(
                    d,
                    Ce,
                    Hs.map((m) => m.id),
                ),
            [d],
        ),
        x = _n(d, i),
        g = fa(),
        j =
            ((o = c == null ? void 0 : c.food) == null ? void 0 : o.title) ||
            `${g}时间
附近现做`,
        a = ((b = c == null ? void 0 : c.food) == null ? void 0 : b.sub) || `${d.length} 道 · 配送约 30 分钟`;
    return e.jsxs("div", {
        className: "mall-view",
        children: [
            e.jsxs("header", {
                className: "mall-top",
                children: [
                    e.jsxs("div", {
                        children: [
                            e.jsx("h1", { className: "mall-title", children: "外卖" }),
                            e.jsx("div", { className: "mall-sub", children: "附近的热乎饭，马上送到" }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "mall-actions",
                        children: [
                            e.jsx(vs, { ownerId: s }),
                            e.jsx("button", {
                                className: "mall-icon-btn btn-plain",
                                onClick: n,
                                "aria-label": "搜索",
                                children: e.jsx(hs, { size: 17, strokeWidth: 1.9 }),
                            }),
                            e.jsx("button", {
                                className: "mall-icon-btn btn-plain",
                                onClick: t,
                                "aria-label": "外卖订单",
                                children: e.jsx(ms, { size: 17, strokeWidth: 1.9 }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "mall-hero food-hero",
                style: {
                    backgroundImage: `linear-gradient(90deg,rgba(255,255,255,.97) 0%,rgba(255,255,255,.86) 33%,rgba(255,255,255,.16) 72%,rgba(255,255,255,0) 100%),url(${an.food})`,
                },
                children: e.jsxs("div", {
                    className: "mall-hero-copy",
                    children: [
                        e.jsx("h2", {
                            children: j
                                .split(
                                    `
`,
                                )
                                .map((m, u) =>
                                    e.jsxs(_s.Fragment, { children: [u > 0 && e.jsx("br", {}), m] }, u),
                                ),
                        }),
                        e.jsx("p", { children: a }),
                    ],
                }),
            }),
            e.jsx(Ee, { tabs: sn, value: i, onChange: l, counts: p, icon: ln }),
            e.jsx("div", {
                className: "m26-foods",
                children: x.map((m) => {
                    const u = Ce(m);
                    return e.jsxs(
                        "button",
                        {
                            className: "m26-food btn-plain",
                            onClick: () => r(m),
                            children: [
                                e.jsx("span", {
                                    className: "m26-food-pic",
                                    children: e.jsx(Be, { category: u, size: 40 }),
                                }),
                                e.jsxs("span", {
                                    className: "m26-food-body",
                                    children: [
                                        e.jsx("b", { children: m.dish }),
                                        e.jsx("small", { children: m.shop }),
                                        e.jsxs("span", {
                                            className: "m26-tags",
                                            children: [
                                                e.jsx("i", { children: He(u) }),
                                                e.jsxs("i", {
                                                    children: [
                                                        e.jsx(Fe, { size: 11, strokeWidth: 2.2 }),
                                                        "约 30 分钟",
                                                    ],
                                                }),
                                                m.note ? e.jsx("i", { children: m.note }) : null,
                                            ],
                                        }),
                                        e.jsxs("span", {
                                            className: "m26-food-foot",
                                            children: [
                                                e.jsxs("span", {
                                                    className: "m26-price",
                                                    children: ["¥", m.price],
                                                }),
                                                e.jsx("span", {
                                                    className: "m26-orderbtn",
                                                    children: "下单",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        },
                        m.id,
                    );
                }),
            }),
            x.length === 0 &&
                e.jsxs("div", {
                    className: "m26-empty big",
                    children: [
                        "这一类今天没有",
                        e.jsx("br", {}),
                        e.jsx("span", { children: "点右上角的刷新，每个分类都会补上" }),
                    ],
                }),
        ],
    });
}
function fn({
    ownerId: s,
    ownerLabel: n,
    onOpenWallet: t,
    onOpenOrders: r,
    onOpenFoodOrders: i,
    onOpenLogistics: l,
    onOpenDelivery: d,
    onOpenAddresses: c,
    onOpenKinship: p,
    onOpenRefreshLog: x,
    onOpenBanners: g,
}) {
    var y, k, $, S;
    const { state: j } = B(),
        a = s === "me",
        o = ((y = j.mall.productOrders) == null ? void 0 : y[s]) || [],
        b = ((k = j.mall.foodOrders) == null ? void 0 : k[s]) || [],
        m = f.useMemo(() => {
            if (a) {
                const I = (j.characters || []).reduce(
                    (A, q) => Math.min(A, q.createdAt || Date.now()),
                    Date.now(),
                );
                return Math.max(1, Math.floor((Date.now() - I) / 864e5));
            }
            const D = j.characters.find((I) => I.id === s);
            return D ? Math.max(1, Math.floor((Date.now() - (D.createdAt || Date.now())) / 864e5)) : 0;
        }, [a, s, j.characters]),
        u = f.useMemo(() => {
            if (a) {
                const A = j.me.wechatId;
                return A
                    ? `ID  ${A}`
                    : `ID  ${(j.me.nickname || j.me.realName || "me").toString().toLowerCase().replace(/\s+/g, "_").slice(0, 10)}_${(j.me.id || "").slice(-4) || "0000"}`;
            }
            const D = j.characters.find((A) => A.id === s);
            return D
                ? D.wechatId
                    ? `ID  ${D.wechatId}`
                    : `ID  ${(D.realName || D.name || "char").toString().toLowerCase().replace(/\s+/g, "_").slice(0, 10)}_${(D.id || "").slice(-4)}`
                : "ID  -";
        }, [a, s, j.characters, j.me]),
        v = a
            ? j.me.avatar
            : (($ = j.characters.find((D) => D.id === s)) == null ? void 0 : $.avatar) || null,
        h = (n || "·").slice(0, 3);
    return e.jsxs("div", {
        className: "mall-view",
        children: [
            e.jsxs("div", {
                className: "me-account-v2",
                children: [
                    e.jsx("div", {
                        className: `me-avatar-badge ${v ? "has-img" : ""}`,
                        children: v ? e.jsx(Se, { src: v, alt: "" }) : h,
                    }),
                    e.jsxs("div", {
                        className: "me-info",
                        children: [
                            e.jsx("div", { className: "me-hello", children: "欢迎回来，账户中心" }),
                            e.jsx("h2", { className: "me-name", children: n }),
                            e.jsxs("div", {
                                className: "me-pills",
                                children: [
                                    e.jsx("span", { className: "me-pill me-pill-id", children: u }),
                                    e.jsxs("span", {
                                        className: "me-pill me-pill-vip",
                                        children: [a ? "VIP 会员" : "角色视角", "　已陪伴 ", m, " 天"],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(Qa, { ownerId: s, onOpen: t }),
            e.jsx(gn, { ownerId: s, onOpenOrders: r, onOpenDelivery: d }),
            e.jsx("div", { className: "mall-head", children: e.jsx("h2", { children: "订单与物流" }) }),
            e.jsxs("div", {
                className: "me-list",
                children: [
                    e.jsx(ge, {
                        icon: e.jsx(ue, { size: 16 }),
                        title: "商品订单",
                        value: `${o.length} 笔 ›`,
                        onClick: r,
                    }),
                    e.jsx(ge, {
                        icon: e.jsx(ms, { size: 16 }),
                        title: "外卖订单",
                        value: `${b.length} 笔 ›`,
                        onClick: i,
                    }),
                    e.jsx(ge, {
                        icon: e.jsx(Ys, { size: 16 }),
                        title: "商品物流",
                        value: o.some((D) => D.status !== "done") ? "运输中 ›" : "›",
                        onClick: l,
                    }),
                    e.jsx(ge, {
                        icon: e.jsx(je, { size: 16 }),
                        title: "外卖送达查询",
                        value: ((S = b[0]) == null ? void 0 : S.eta) || "›",
                        onClick: d,
                    }),
                ],
            }),
            e.jsx("div", {
                className: "mall-head",
                style: { marginTop: 20 },
                children: e.jsx("h2", { children: "账户设置" }),
            }),
            e.jsxs("div", {
                className: "me-list",
                children: [
                    e.jsx(ge, { icon: e.jsx(je, { size: 16 }), title: "收货地址", value: "›", onClick: c }),
                    e.jsx(ge, {
                        icon: e.jsx(De, { size: 16 }),
                        title: "首页横幅图片",
                        value: `${Object.keys(j.mall.bannerPhotos || {}).length} 张自定义 ›`,
                        onClick: g,
                    }),
                    e.jsx(ge, {
                        icon: e.jsx(Ue, { size: 16 }),
                        title: "亲属卡",
                        value: `${(j.mall.kinshipCards || []).filter((D) => D.holderId === s || D.granterId === s).length} 张 ›`,
                        onClick: p,
                    }),
                ],
            }),
            e.jsx("div", {
                className: "mall-head",
                style: { marginTop: 20 },
                children: e.jsx("h2", { children: "刷新与后台" }),
            }),
            e.jsx(Nn, { onOpenLog: x }),
        ],
    });
}
function gn({ ownerId: s, onOpenOrders: n, onOpenDelivery: t }) {
    var g, j;
    const { state: r } = B(),
        i = we(3e4),
        l = ((g = r.mall.productOrders) == null ? void 0 : g[s]) || [],
        d = ((j = r.mall.foodOrders) == null ? void 0 : j[s]) || [],
        c = (a) => l.filter((o) => ns(o, i) === a).length,
        p = d.filter((a) => !ke(a, i).done).length,
        x = [
            { k: "toship", zh: "待发货", Icon: Sa, n: c("toship"), on: () => n("toship") },
            { k: "transit", zh: "运输中", Icon: $a, n: c("transit"), on: () => n("transit") },
            { k: "toreceive", zh: "待收货", Icon: ue, n: c("toreceive"), on: () => n("toreceive") },
            { k: "food", zh: "外卖在路上", Icon: wa, n: p, on: t },
        ];
    return e.jsx("div", {
        className: "m26-strip",
        children: x.map((a) =>
            e.jsxs(
                "button",
                {
                    className: "btn-plain",
                    onClick: a.on,
                    children: [
                        e.jsxs("span", {
                            className: "m26-strip-ic",
                            children: [
                                e.jsx(a.Icon, { size: 20, strokeWidth: 1.8 }),
                                a.n > 0 && e.jsx("em", { className: "m26-badge", children: a.n }),
                            ],
                        }),
                        e.jsx("span", { children: a.zh }),
                    ],
                },
                a.k,
            ),
        ),
    });
}
function ge({ icon: s, title: n, value: t, onClick: r }) {
    return e.jsxs("button", {
        className: "me-row btn-plain",
        onClick: r,
        children: [
            e.jsx("div", { className: "me-row-icon", children: s }),
            e.jsx("span", { className: "me-row-title", children: n }),
            e.jsx("span", { className: "mall-muted", style: { fontSize: 12 }, children: t }),
        ],
    });
}
function Nn({ onOpenLog: s }) {
    var p;
    const { state: n, mallRefreshSetPaused: t, mallRefreshEnqueue: r } = B(),
        i = n.mall.refreshPaused,
        l = n.mall.refreshRunning,
        d = (n.mall.refreshQueue || []).length,
        c = () => {
            (r({ ownerId: "me", source: "global", kind: "all" }),
                (n.characters || []).forEach((x) => r({ ownerId: x.id, source: "global", kind: "all" })));
        };
    return e.jsxs("div", {
        className: "me-list",
        children: [
            e.jsxs("button", {
                className: "me-row btn-plain",
                onClick: c,
                children: [
                    e.jsx("div", { className: "me-row-icon", children: e.jsx(za, { size: 16 }) }),
                    e.jsxs("span", {
                        className: "me-row-title",
                        children: ["全局刷新（我 + ", n.characters.length, " 个角色）"],
                    }),
                    e.jsx("span", {
                        className: "mall-muted",
                        style: { fontSize: 12 },
                        children: l ? "刷新中…" : d > 0 ? `${d} 待刷` : "›",
                    }),
                ],
            }),
            e.jsxs("button", {
                className: "me-row btn-plain",
                onClick: () => t(!i),
                children: [
                    e.jsx("div", {
                        className: "me-row-icon",
                        children: i ? e.jsx(Xs, { size: 16 }) : e.jsx(Vs, { size: 16 }),
                    }),
                    e.jsx("span", {
                        className: "me-row-title",
                        children: i ? "继续后台刷新" : "暂停后台刷新",
                    }),
                    e.jsx("span", {
                        className: "mall-muted",
                        style: { fontSize: 12 },
                        children: i ? "已暂停 ›" : "运行中 ›",
                    }),
                ],
            }),
            e.jsxs("button", {
                className: "me-row btn-plain",
                onClick: s,
                children: [
                    e.jsx("div", { className: "me-row-icon", children: e.jsx(Zs, { size: 16 }) }),
                    e.jsx("span", { className: "me-row-title", children: "刷新记录" }),
                    e.jsxs("span", {
                        className: "mall-muted",
                        style: { fontSize: 12 },
                        children: [((p = n.mall.refreshLog) == null ? void 0 : p.length) || 0, " 条 ›"],
                    }),
                ],
            }),
        ],
    });
}
function te({ item: s, iconKey: n, size: t = 60, strokeWidth: r }) {
    return s != null && s.image
        ? e.jsx(Se, { className: "m26-pic-img", src: s.image, alt: "" })
        : e.jsx(as, { iconKey: n || $e(s), size: t, strokeWidth: r });
}
function Ns({ item: s, onClick: n, onAdd: t, variant: r = "shop", showCat: i = !1 }) {
    const l = $e(s),
        d = r === "home";
    return e.jsxs("div", {
        className: `m26-card ${d ? "home" : ""}`,
        onClick: n,
        role: "button",
        tabIndex: 0,
        children: [
            e.jsxs("div", {
                className: "m26-card-pic",
                children: [
                    i && e.jsx("span", { className: "m26-card-cat", children: We(ne(s)) }),
                    e.jsx(te, { item: s, iconKey: l, size: d ? 64 : 60 }),
                ],
            }),
            s.brand && e.jsx("div", { className: "m26-card-brand", children: s.brand }),
            e.jsx("div", { className: "m26-card-title", children: s.title }),
            !d &&
                ((s.custom && s.desc) || s.eyebrow) &&
                e.jsx("div", { className: "m26-card-eyebrow", children: (s.custom && s.desc) || s.eyebrow }),
            e.jsxs("div", {
                className: "m26-card-foot",
                children: [
                    e.jsxs("span", {
                        className: "m26-price",
                        children: ["¥", Number(s.price || 0).toLocaleString()],
                    }),
                    t &&
                        e.jsx("button", {
                            className: "m26-add btn-plain",
                            onClick: (c) => {
                                (c.stopPropagation(), t());
                            },
                            "aria-label": "加入购物车",
                            children: e.jsx(Te, { size: 16, strokeWidth: 2.6 }),
                        }),
                ],
            }),
        ],
    });
}
function vs({ ownerId: s }) {
    const { state: n, mallRefreshEnqueue: t } = B(),
        r = n.mall.refreshRunning != null,
        i = (n.mall.refreshQueue || []).some((d) => d.ownerId === s),
        l = r || i;
    return e.jsxs("button", {
        className: "mall-refresh-dot btn-plain",
        "aria-label": "刷新商品",
        onClick: () => t({ ownerId: s, source: "page", kind: "all" }),
        children: [
            e.jsx(Js, { size: 16, strokeWidth: 1.9, className: r ? "spin" : "" }),
            l && e.jsx("span", { className: "dot" }),
        ],
    });
}
const Ps = {
    title: "",
    brand: "",
    price: "",
    desc: "",
    category: "gift",
    iconKey: "product-gift",
    image: "",
};
function vn({ open: s, onClose: n, editing: t, onSave: r }) {
    const i = V(),
        [l, d] = f.useState(Ps),
        [c, p] = f.useState(!1),
        x = f.useRef(null),
        g = f.useMemo(() => ga(), []);
    f.useEffect(() => {
        s &&
            d(
                t
                    ? {
                          title: t.title || "",
                          brand: t.brand || "",
                          price: t.price != null ? String(t.price) : "",
                          desc: t.desc || "",
                          category: ne(t),
                          iconKey: $e(t),
                          image: t.image || "",
                      }
                    : Ps,
            );
    }, [s, t]);
    const j = (u) => (v) => d((h) => ({ ...h, [u]: v })),
        a = async (u) => {
            var h;
            const v = (h = u.target.files) == null ? void 0 : h[0];
            if (((u.target.value = ""), !!v)) {
                p(!0);
                try {
                    const y = await Gs(v, { note: "自定义商品图" });
                    y && d((k) => ({ ...k, image: y }));
                } catch {
                    i("图片存不进去", "error");
                } finally {
                    p(!1);
                }
            }
        },
        o = {
            id: (t == null ? void 0 : t.id) || "cus-preview",
            title: l.title.trim() || "商品名",
            brand: l.brand.trim(),
            price: Math.max(0, Number(l.price) || 0),
            desc: l.desc.trim(),
            category: l.category,
            iconKey: l.iconKey,
            ...(l.image ? { image: l.image } : null),
            eyebrow: "自己添加",
            custom: !0,
        },
        b = !!l.title.trim(),
        m = (u) => {
            b &&
                r(
                    {
                        ...o,
                        id: (t == null ? void 0 : t.id) || xe("cus-"),
                        createdAt: (t == null ? void 0 : t.createdAt) || Date.now(),
                        custom: !0,
                    },
                    u,
                );
        };
    return e.jsx(fe, {
        open: s,
        onClose: n,
        title: t ? "编辑商品" : "自定义商品",
        children: e.jsxs("div", {
            className: "cp-edit",
            children: [
                e.jsxs("div", {
                    className: "cp-hero",
                    children: [
                        e.jsxs("button", {
                            className: "cp-hero-pic btn-plain",
                            onClick: () => {
                                var u;
                                return (u = x.current) == null ? void 0 : u.click();
                            },
                            "aria-label": l.image ? "换一张图片" : "上传图片",
                            children: [
                                l.image
                                    ? e.jsx(Se, { src: l.image, alt: "" })
                                    : e.jsx(as, { iconKey: l.iconKey, size: 88 }),
                                e.jsxs("span", {
                                    className: "cp-hero-cta",
                                    children: [
                                        e.jsx(De, { size: 14, strokeWidth: 2 }),
                                        c ? "正在存…" : l.image ? "换一张" : "上传图片",
                                    ],
                                }),
                            ],
                        }),
                        l.image &&
                            e.jsx("button", {
                                className: "cp-hero-x btn-plain",
                                onClick: () => j("image")(""),
                                children: "去掉图片，用图标",
                            }),
                        e.jsx("input", { ref: x, type: "file", accept: "image/*", hidden: !0, onChange: a }),
                    ],
                }),
                e.jsxs("div", {
                    className: "ios-list",
                    children: [
                        e.jsx(Ne, {
                            label: "商品名",
                            children: e.jsx(ve, {
                                value: l.title,
                                onChange: j("title"),
                                placeholder: "例如：手写卡片",
                            }),
                        }),
                        e.jsx(Ne, {
                            label: "品牌",
                            children: e.jsx(ve, {
                                value: l.brand,
                                onChange: j("brand"),
                                placeholder: "可选",
                            }),
                        }),
                        e.jsx(Ne, {
                            label: "价格",
                            children: e.jsx(ve, {
                                type: "number",
                                value: l.price,
                                onChange: j("price"),
                                placeholder: "¥ 数字",
                            }),
                        }),
                        e.jsx(Ne, {
                            label: "介绍",
                            children: e.jsx(ve, {
                                value: l.desc,
                                onChange: j("desc"),
                                placeholder: "可选，一两句",
                            }),
                        }),
                    ],
                }),
                e.jsx("div", { className: "cp-label", children: "分类" }),
                e.jsx("div", {
                    className: "cp-cats",
                    children: Ae.map((u) =>
                        e.jsx(
                            "button",
                            {
                                className: `btn-plain ${l.category === u.id ? "on" : ""}`,
                                onClick: () => j("category")(u.id),
                                children: u.zh,
                            },
                            u.id,
                        ),
                    ),
                }),
                e.jsxs("div", {
                    className: "cp-label",
                    children: [
                        "图标",
                        e.jsx("small", {
                            children: l.image ? "有图片时显示图片；去掉图片才用图标" : "没有图片时显示它",
                        }),
                    ],
                }),
                e.jsx("div", {
                    className: `cp-icons ${l.image ? "dim" : ""}`,
                    children: g.map(({ key: u, label: v }) =>
                        e.jsxs(
                            "button",
                            {
                                className: `btn-plain ${l.iconKey === u ? "on" : ""}`,
                                onClick: () => j("iconKey")(u),
                                "aria-label": v,
                                children: [
                                    e.jsx(as, { iconKey: u, size: 26 }),
                                    e.jsx("span", { children: v }),
                                ],
                            },
                            u,
                        ),
                    ),
                }),
                e.jsx("div", { className: "cp-label", children: "在商城里的样子" }),
                e.jsx("div", { className: "cp-preview", children: e.jsx(Ns, { item: o }) }),
                e.jsxs("div", {
                    className: "cp-actions",
                    children: [
                        e.jsx("button", {
                            className: "m26-cta btn-plain",
                            disabled: !b,
                            onClick: () => m("cart"),
                            children: "加入购物车",
                        }),
                        e.jsxs("div", {
                            className: "cp-actions-row",
                            children: [
                                e.jsx("button", {
                                    className: "m26-cta ghost btn-plain",
                                    disabled: !b,
                                    onClick: () => m("save"),
                                    children: t ? "保存" : "放进商城",
                                }),
                                e.jsxs("button", {
                                    className: "m26-cta ghost btn-plain",
                                    disabled: !b,
                                    onClick: () => m("share"),
                                    children: [e.jsx(ps, { size: 15, strokeWidth: 2 }), "分享给 TA"],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function Ws(s, n) {
    return {
        platform: "mall",
        kind: "product",
        title: s.title,
        text: [s.brand, s.custom ? s.desc : s.desc || s.eyebrow].filter(Boolean).join(" · "),
        image: s.image || "",
        iconKey: $e(s),
        meta: `¥${Number(s.price || 0).toLocaleString()}`,
        refId: s.id,
        ownerId: n,
    };
}
function yn({ open: s, onClose: n }) {
    const { state: t, mallRefreshLogClear: r } = B(),
        i = t.mall.refreshLog || [];
    return e.jsx(Us, {
        open: s,
        onClose: n,
        title: "刷新记录",
        children: e.jsxs("div", {
            className: "px-4 pb-6",
            children: [
                e.jsxs("div", {
                    className: "flex items-center justify-between",
                    style: { marginBottom: 10 },
                    children: [
                        e.jsxs("div", {
                            className: "ios-footnote mall-muted",
                            children: ["最近 ", i.length, " 次刷新（最多留 50 条）"],
                        }),
                        i.length > 0 &&
                            e.jsxs("button", {
                                className: "ios-capsule sm btn-plain",
                                onClick: r,
                                children: [e.jsx(Ge, { size: 12 }), " 清空"],
                            }),
                    ],
                }),
                i.length === 0 && e.jsx("div", { className: "mall-empty", children: "还没跑过刷新" }),
                i.map((l) =>
                    e.jsxs(
                        "div",
                        {
                            className: `refresh-log-row ${l.ok ? "" : "err"}`,
                            children: [
                                e.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        e.jsx("b", { children: l.ownerLabel }),
                                        e.jsx("span", {
                                            className: "mall-muted",
                                            style: { fontSize: 11 },
                                            children: new Date(l.at).toLocaleString("zh-CN"),
                                        }),
                                    ],
                                }),
                                e.jsx("div", {
                                    className: "ios-footnote",
                                    style: { marginTop: 4, color: l.ok ? "var(--text-2)" : "var(--danger)" },
                                    children: l.summary,
                                }),
                                e.jsx("div", {
                                    className: "ios-caption-1 mall-muted",
                                    style: { marginTop: 2 },
                                    children: l.source === "global" ? "全局刷新" : "页面刷新",
                                }),
                            ],
                        },
                        l.id,
                    ),
                ),
            ],
        }),
    });
}
function ma(s) {
    const n = String(s || "").toLowerCase(),
        t = [
            ["白", "#f5f5f5"],
            ["米", "#eee6d3"],
            ["杏", "#e5d8bd"],
            ["黑", "#111"],
            ["灰", "#8a8a8f"],
            ["深灰", "#3a3a3e"],
            ["星光", "#e6e5df"],
            ["银", "#c9c9cc"],
            ["金", "#d4b072"],
            ["蓝", "#3a5a92"],
            ["粉", "#eab5c0"],
            ["樱花", "#f6d7dd"],
            ["红", "#c93a3a"],
            ["橙", "#e08b3a"],
            ["黄", "#e6c74a"],
            ["绿", "#5a8b62"],
            ["紫", "#7a5a92"],
            ["棕", "#8a6a4a"],
        ],
        r = (i) => {
            const l = i.length === 4 ? `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}` : i,
                d = parseInt(l.slice(1), 16),
                p = Math.round(0.299 * ((d >> 16) & 255) + 0.587 * ((d >> 8) & 255) + 0.114 * (d & 255))
                    .toString(16)
                    .padStart(2, "0");
            return `#${p}${p}${p}`;
        };
    for (const [i, l] of t) if (n.includes(i)) return r(l);
    return "#c9c9c9";
}
function Pe(s) {
    if (!(s != null && s.length)) return "订单";
    const n = s[0],
        t = s.length - 1;
    return `${n.brand ? n.brand + " " : ""}${n.title}${t > 0 ? ` 等 ${s.length} 件` : ""}`;
}
function ie(s, n) {
    if (n === "me") return os(s.me) || "我";
    const t = s.characters.find((r) => r.id === n);
    return t ? Me(t) : "角色";
}
function ha({ open: s, onClose: n, ownerId: t, selectedId: r, onPick: i }) {
    var m;
    const { state: l, mallAddrAppend: d, mallAddrRemove: c, mallAddrSetDefault: p } = B(),
        x = ((m = l.mall.addresses) == null ? void 0 : m[t]) || [],
        [g, j] = f.useState(!1),
        [a, o] = f.useState({ name: "", phone: "", address: "", tag: "家", unit: "", note: "" });
    f.useEffect(() => {
        s || j(!1);
    }, [s]);
    const b = () => {
        !a.name.trim() ||
            !a.phone.trim() ||
            !a.address.trim() ||
            (d(t, a), o({ name: "", phone: "", address: "", tag: "家", unit: "", note: "" }), j(!1));
    };
    return e.jsx(fe, {
        open: s,
        onClose: n,
        title: "选择收货地址",
        children: e.jsxs("div", {
            className: "px-4 pb-6",
            children: [
                x.length === 0 &&
                    e.jsx("div", {
                        className: "mall-empty",
                        style: { padding: "20px 0" },
                        children: "还没有地址，加一个",
                    }),
                x.map((u) =>
                    e.jsxs(
                        "div",
                        {
                            className: `address-card btn-plain ${r === u.id ? "on" : ""}`,
                            onClick: () => i(u.id),
                            children: [
                                e.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        e.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                e.jsx(je, { size: 13 }),
                                                e.jsx("b", { children: u.name }),
                                                u.tag &&
                                                    e.jsx("span", {
                                                        className: "addr-quick-chip on",
                                                        style: { padding: "2px 8px", fontSize: 10 },
                                                        children: u.tag,
                                                    }),
                                                e.jsx("span", { className: "mall-muted", children: u.phone }),
                                            ],
                                        }),
                                        u.isDefault && e.jsx("span", { className: "tag", children: "默认" }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "mall-muted",
                                    style: { marginTop: 6, fontSize: 13 },
                                    children: [u.address, u.unit ? ` · ${u.unit}` : ""],
                                }),
                                u.note &&
                                    e.jsxs("div", {
                                        className: "mall-muted",
                                        style: { marginTop: 4, fontSize: 12 },
                                        children: ["备注：", u.note],
                                    }),
                                e.jsxs("div", {
                                    className: "flex gap-2",
                                    style: { marginTop: 8 },
                                    children: [
                                        !u.isDefault &&
                                            e.jsx("button", {
                                                className: "ios-capsule sm btn-plain",
                                                onClick: (v) => {
                                                    (v.stopPropagation(), p(t, u.id));
                                                },
                                                children: "设为默认",
                                            }),
                                        e.jsxs("button", {
                                            className: "ios-capsule sm btn-plain",
                                            onClick: (v) => {
                                                (v.stopPropagation(), c(t, u.id));
                                            },
                                            children: [e.jsx(Ge, { size: 12 }), " 删除"],
                                        }),
                                    ],
                                }),
                            ],
                        },
                        u.id,
                    ),
                ),
                g
                    ? e.jsxs("div", {
                          className: "addr-form-list",
                          style: { marginTop: 10 },
                          children: [
                              e.jsx("div", {
                                  className: "addr-quick-chips",
                                  children: ["家", "公司", "学校", "其他"].map((u) =>
                                      e.jsx(
                                          "button",
                                          {
                                              className: `addr-quick-chip ${a.tag === u ? "on" : ""}`,
                                              onClick: () => o({ ...a, tag: u }),
                                              children: u,
                                          },
                                          u,
                                      ),
                                  ),
                              }),
                              e.jsxs("div", {
                                  className: "addr-form-row",
                                  children: [
                                      e.jsx("span", { className: "lbl", children: "收件人" }),
                                      e.jsx("input", {
                                          className: "val",
                                          value: a.name,
                                          onChange: (u) => o({ ...a, name: u.target.value }),
                                          placeholder: "姓名",
                                      }),
                                  ],
                              }),
                              e.jsxs("div", {
                                  className: "addr-form-row",
                                  children: [
                                      e.jsx("span", { className: "lbl", children: "电话" }),
                                      e.jsx("input", {
                                          className: "val",
                                          value: a.phone,
                                          onChange: (u) => o({ ...a, phone: u.target.value }),
                                          placeholder: "11 位手机号",
                                          inputMode: "numeric",
                                      }),
                                  ],
                              }),
                              e.jsxs("div", {
                                  className: "addr-form-row",
                                  children: [
                                      e.jsx("span", { className: "lbl", children: "省市区街道" }),
                                      e.jsx("input", {
                                          className: "val",
                                          value: a.address,
                                          onChange: (u) => o({ ...a, address: u.target.value }),
                                          placeholder: "详细地址",
                                      }),
                                  ],
                              }),
                              e.jsxs("div", {
                                  className: "addr-form-row",
                                  children: [
                                      e.jsx("span", { className: "lbl", children: "门牌 / 楼层" }),
                                      e.jsx("input", {
                                          className: "val",
                                          value: a.unit,
                                          onChange: (u) => o({ ...a, unit: u.target.value }),
                                          placeholder: "例：3-1602 / A 座 5 层",
                                      }),
                                  ],
                              }),
                              e.jsxs("div", {
                                  className: "addr-form-row",
                                  children: [
                                      e.jsx("span", { className: "lbl", children: "备注" }),
                                      e.jsx("input", {
                                          className: "val",
                                          value: a.note,
                                          onChange: (u) => o({ ...a, note: u.target.value }),
                                          placeholder: "例：门口保安处 / 放门口即可",
                                      }),
                                  ],
                              }),
                              e.jsx("div", {
                                  style: { padding: 12 },
                                  children: e.jsx("button", {
                                      className: "btn-ios primary",
                                      onClick: b,
                                      children: "保存地址",
                                  }),
                              }),
                          ],
                      })
                    : e.jsxs("button", {
                          className: "ios-capsule btn-plain",
                          style: { marginTop: 10 },
                          onClick: () => j(!0),
                          children: [e.jsx(Te, { size: 12 }), " 添加地址"],
                      }),
            ],
        }),
    });
}
function kn(s, n) {
    var t;
    if (n.payMethod === "self") {
        if (!n.cardId) return "钱包余额";
        const r = n.payerId === "me" ? s.wallet.me : (t = s.wallet.chars) == null ? void 0 : t[n.payerId],
            i = ((r == null ? void 0 : r.cards) || []).find((l) => l.id === n.cardId);
        return i ? `${i.bank} 尾号 ${re(i)}` : "银行卡";
    }
    return n.payMethod === "kinship"
        ? `亲属卡（${ie(s, n.payerId)} 的额度）`
        : n.payMethod === "proxy"
          ? `${ie(s, n.proxyCharId)} 代付`
          : n.payMethod;
}
function we(s = 2e4) {
    const [n, t] = f.useState(Date.now());
    return (
        f.useEffect(() => {
            const r = setInterval(() => t(Date.now()), s);
            return () => clearInterval(r);
        }, [s]),
        n
    );
}
function Le({ children: s }) {
    return e.jsx("div", {
        className: "m26-bar",
        children: e.jsx("div", { className: "m26-bar-in", children: s }),
    });
}
function G({ title: s, children: n, right: t }) {
    return e.jsxs("section", {
        className: "m26-group",
        children: [
            s && e.jsxs("div", { className: "m26-group-h", children: [e.jsx("b", { children: s }), t] }),
            n,
        ],
    });
}
function P({ label: s, children: n, onClick: t, sub: r }) {
    const i = t ? "button" : "div";
    return e.jsxs(i, {
        className: `m26-row ${t ? "btn-plain tap" : ""}`,
        onClick: t,
        children: [
            e.jsx("span", { className: "m26-row-l", children: s }),
            e.jsxs("span", { className: "m26-row-v", children: [n, r && e.jsx("small", { children: r })] }),
            t && e.jsx(de, { size: 16, strokeWidth: 2, className: "m26-chev" }),
        ],
    });
}
function ys({ value: s, onChange: n, min: t = 1, max: r = 99 }) {
    return e.jsxs("span", {
        className: "m26-stepper",
        onClick: (i) => i.stopPropagation(),
        children: [
            e.jsx("button", {
                className: "btn-plain",
                disabled: s <= t,
                onClick: () => n(Math.max(t, s - 1)),
                "aria-label": "减少",
                children: e.jsx(Wa, { size: 14, strokeWidth: 2.4 }),
            }),
            e.jsx("b", { children: s }),
            e.jsx("button", {
                className: "btn-plain",
                disabled: s >= r,
                onClick: () => n(Math.min(r, s + 1)),
                "aria-label": "增加",
                children: e.jsx(Te, { size: 14, strokeWidth: 2.4 }),
            }),
        ],
    });
}
function Rs({ on: s, onClick: n, label: t }) {
    return e.jsx("span", {
        role: "checkbox",
        "aria-checked": s,
        "aria-label": t,
        tabIndex: 0,
        className: `m26-check ${s ? "on" : ""}`,
        onClick: (r) => {
            (r.stopPropagation(), n());
        },
        onKeyDown: (r) => {
            (r.key === " " || r.key === "Enter") && (r.preventDefault(), n());
        },
        children:
            s &&
            e.jsx("svg", {
                viewBox: "0 0 16 16",
                "aria-hidden": !0,
                children: e.jsx("path", {
                    d: "M3.5 8.4l2.9 2.9 6-6.3",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }),
            }),
    });
}
function pa({ steps: s, index: n }) {
    return e.jsx("div", {
        className: "m26-steps",
        children: s.map((t, r) =>
            e.jsxs(
                "div",
                {
                    className: `m26-step ${r <= n ? "done" : ""} ${r === n ? "cur" : ""}`,
                    children: [e.jsx("i", {}), e.jsx("span", { children: t.label })],
                },
                t.key,
            ),
        ),
    });
}
function xa({ steps: s, extra: n = [] }) {
    const t = [...s.filter((i) => i.done), ...n].sort((i, l) => l.at - i.at),
        r = s.filter((i) => !i.done).reverse();
    return e.jsxs("ol", {
        className: "m26-tl",
        children: [
            r.map((i) =>
                e.jsxs(
                    "li",
                    {
                        className: "future",
                        children: [
                            e.jsx("i", {}),
                            e.jsxs("div", {
                                children: [
                                    e.jsx("b", { children: i.label }),
                                    e.jsxs("span", { children: ["预计 ", J(i.at)] }),
                                ],
                            }),
                        ],
                    },
                    `f-${i.key}`,
                ),
            ),
            t.map((i, l) =>
                e.jsxs(
                    "li",
                    {
                        className: l === 0 ? "latest" : "",
                        children: [
                            e.jsx("i", {}),
                            e.jsxs("div", {
                                children: [
                                    e.jsx("b", { children: i.text || i.label }),
                                    e.jsx("span", { children: J(i.at) }),
                                ],
                            }),
                        ],
                    },
                    `d-${i.key || l}-${i.at}`,
                ),
            ),
        ],
    });
}
function Ye(s) {
    return [s.color, s.size].filter(Boolean).join(" / ");
}
function Cn({
    ownerId: s,
    item: n,
    onBack: t,
    onOpenCart: r,
    onOpenBuy: i,
    onShare: l,
    onEdit: d,
    onDelete: c,
}) {
    var A, q, R, K, T, w, N;
    const { state: p, mallCartAdd: x } = B(),
        g = V(),
        j = $e(n),
        a = ne(n),
        [o, b] = f.useState(null),
        [m, u] = f.useState({
            color: ((A = n.colors) == null ? void 0 : A[0]) || "",
            size: ((q = n.sizes) == null ? void 0 : q[0]) || "",
            qty: 1,
        }),
        h = (((R = p.mall.carts) == null ? void 0 : R[s]) || []).reduce((z, O) => z + (O.qty || 0), 0),
        y = ((K = p.mall.addresses) == null ? void 0 : K[s]) || [],
        k = y.find((z) => z.isDefault) || y[0],
        $ = new Date(Date.now() + 26 * 36e5),
        S = `${$.getMonth() + 1}月${$.getDate()}日`,
        D = (z) => ({
            id: `${n.id}--${z.color || "x"}--${z.size || "x"}`,
            iconKey: j,
            title: n.title,
            brand: n.brand,
            price: n.price,
            category: a,
            qty: z.qty,
            color: z.color,
            size: z.size,
            ...(n.image ? { image: n.image } : null),
        }),
        I =
            (((T = n.colors) == null ? void 0 : T.length) || 0) +
                (((w = n.sizes) == null ? void 0 : w.length) || 0) >
            0;
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, {
                title: "商品详情",
                onBack: t,
                right: e.jsxs(e.Fragment, {
                    children: [
                        l &&
                            e.jsx("button", {
                                className: "mall-icon-btn btn-plain",
                                onClick: () => l(n),
                                "aria-label": "分享给 TA",
                                children: e.jsx(ps, { size: 16, strokeWidth: 1.9 }),
                            }),
                        e.jsxs("button", {
                            className: "mall-icon-btn btn-plain m26-badge-wrap",
                            onClick: r,
                            "aria-label": "购物车",
                            children: [
                                e.jsx(ue, { size: 17, strokeWidth: 1.9 }),
                                h > 0 &&
                                    e.jsx("em", { className: "m26-badge", children: h > 99 ? "99+" : h }),
                            ],
                        }),
                    ],
                }),
            }),
            e.jsxs("div", {
                className: "m26-pd-hero",
                children: [
                    e.jsx("span", { className: "m26-card-cat", children: We(a) }),
                    e.jsx(te, { item: n, iconKey: j, size: 148 }),
                    ((N = n.colors) == null ? void 0 : N.length) > 1 &&
                        e.jsx("div", {
                            className: "m26-pd-dots",
                            children: n.colors.map((z) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `btn-plain ${m.color === z ? "on" : ""}`,
                                        onClick: () => u((O) => ({ ...O, color: z })),
                                        "aria-label": z,
                                        children: e.jsx("i", { style: { background: ma(z) } }),
                                    },
                                    z,
                                ),
                            ),
                        }),
                ],
            }),
            e.jsxs("div", {
                className: "m26-pd-info",
                children: [
                    e.jsxs("div", {
                        className: "m26-pd-price",
                        children: [e.jsx("small", { children: "¥" }), Number(n.price || 0).toLocaleString()],
                    }),
                    n.brand && e.jsx("div", { className: "m26-pd-brand", children: n.brand }),
                    e.jsx("h1", { children: n.title }),
                    n.desc && e.jsx("p", { children: n.desc }),
                    e.jsxs("div", {
                        className: "m26-tags big",
                        children: [
                            e.jsx("i", { children: We(a) }),
                            n.eyebrow && e.jsx("i", { children: n.eyebrow }),
                            e.jsx("i", { children: "正品保障" }),
                        ],
                    }),
                ],
            }),
            e.jsxs(G, {
                children: [
                    e.jsxs(P, {
                        label: "已选",
                        onClick: () => b("pick"),
                        children: [
                            [m.color, m.size].filter(Boolean).join(" / ") || "默认",
                            " · ",
                            m.qty,
                            " 件",
                        ],
                    }),
                    e.jsxs(P, {
                        label: "配送",
                        sub: k
                            ? `至 ${k.address}${k.unit ? ` ${k.unit}` : ""}`
                            : "还没有收货地址，结算时添加",
                        children: ["顺丰包邮 · 预计 ", S, " 送达"],
                    }),
                    e.jsx(P, { label: "服务", children: "正品保障 · 7 天无理由退货 · 极速退款" }),
                ],
            }),
            n.custom &&
                e.jsxs(G, {
                    title: "自己添加的商品",
                    children: [
                        e.jsx(P, {
                            label: "编辑",
                            onClick: () => (d == null ? void 0 : d(n)),
                            children: "图片、名字、价格、分类",
                        }),
                        e.jsx(P, {
                            label: "删除",
                            onClick: () => {
                                confirm(`删掉「${n.title}」？已经下的单不受影响。`) && (c == null || c(n));
                            },
                            children: "从商城里拿掉",
                        }),
                    ],
                }),
            e.jsxs(Le, {
                children: [
                    e.jsxs("button", {
                        className: "m26-bar-ic btn-plain m26-badge-wrap",
                        onClick: r,
                        "aria-label": "购物车",
                        children: [
                            e.jsx(ue, { size: 20, strokeWidth: 1.8 }),
                            e.jsx("span", { children: "购物车" }),
                            h > 0 && e.jsx("em", { className: "m26-badge", children: h > 99 ? "99+" : h }),
                        ],
                    }),
                    e.jsx("button", {
                        className: "m26-cta ghost btn-plain",
                        onClick: () => (I ? b("cart") : (x(s, D(m)), g("已加入购物车"))),
                        children: "加入购物车",
                    }),
                    e.jsx("button", {
                        className: "m26-cta btn-plain",
                        onClick: () => (I ? b("buy") : i([D(m)])),
                        children: "立即购买",
                    }),
                ],
            }),
            e.jsx(Sn, {
                open: !!o,
                onClose: () => b(null),
                item: n,
                iconKey: j,
                initial: m,
                mode: o,
                onConfirm: (z, O) => {
                    (u(z),
                        b(null),
                        O === "cart" &&
                            (x(s, D(z)),
                            g(
                                `已加入购物车 · ${[z.color, z.size].filter(Boolean).join(" / ") || `${z.qty} 件`}`,
                            )),
                        O === "buy" && i([D(z)]));
                },
            }),
        ],
    });
}
function Sn({ open: s, onClose: n, item: t, iconKey: r, initial: i, mode: l, onConfirm: d }) {
    const c = Array.isArray(t == null ? void 0 : t.colors) && t.colors.length ? t.colors : null,
        p = Array.isArray(t == null ? void 0 : t.sizes) && t.sizes.length ? t.sizes : null,
        [x, g] = f.useState(""),
        [j, a] = f.useState(""),
        [o, b] = f.useState(1);
    f.useEffect(() => {
        s &&
            (g((i == null ? void 0 : i.color) || (c == null ? void 0 : c[0]) || ""),
            a((i == null ? void 0 : i.size) || (p == null ? void 0 : p[0]) || ""),
            b((i == null ? void 0 : i.qty) || 1));
    }, [s, t == null ? void 0 : t.id]);
    const m = { color: x, size: j, qty: o },
        u = Number((t == null ? void 0 : t.price) || 0) * o;
    return e.jsx(Us, {
        open: s,
        onClose: n,
        title: "选择规格",
        children: e.jsxs("div", {
            className: "m26-spec",
            children: [
                e.jsxs("div", {
                    className: "m26-spec-hd",
                    children: [
                        e.jsx("span", {
                            className: "m26-spec-pic",
                            children: t && e.jsx(te, { item: t, iconKey: r, size: 54 }),
                        }),
                        e.jsxs("div", {
                            children: [
                                e.jsxs("div", {
                                    className: "m26-pd-price sm",
                                    children: [
                                        e.jsx("small", { children: "¥" }),
                                        Number((t == null ? void 0 : t.price) || 0).toLocaleString(),
                                    ],
                                }),
                                e.jsx("div", {
                                    className: "m26-spec-t",
                                    children: t == null ? void 0 : t.title,
                                }),
                                e.jsxs("div", {
                                    className: "m26-spec-sel",
                                    children: [
                                        "已选：",
                                        [x, j].filter(Boolean).join(" / ") || "默认",
                                        " · ",
                                        o,
                                        " 件",
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                c &&
                    e.jsxs("div", {
                        className: "m26-spec-g",
                        children: [
                            e.jsx("b", { children: "颜色" }),
                            e.jsx("div", {
                                className: "m26-chips",
                                children: c.map((v) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            className: `m26-chip btn-plain ${x === v ? "on" : ""}`,
                                            onClick: () => g(v),
                                            children: [e.jsx("i", { style: { background: ma(v) } }), v],
                                        },
                                        v,
                                    ),
                                ),
                            }),
                        ],
                    }),
                p &&
                    e.jsxs("div", {
                        className: "m26-spec-g",
                        children: [
                            e.jsx("b", { children: "尺码" }),
                            e.jsx("div", {
                                className: "m26-chips",
                                children: p.map((v) =>
                                    e.jsx(
                                        "button",
                                        {
                                            className: `m26-chip btn-plain ${j === v ? "on" : ""}`,
                                            onClick: () => a(v),
                                            children: v,
                                        },
                                        v,
                                    ),
                                ),
                            }),
                        ],
                    }),
                e.jsxs("div", {
                    className: "m26-spec-g row",
                    children: [e.jsx("b", { children: "数量" }), e.jsx(ys, { value: o, onChange: b })],
                }),
                e.jsx("div", {
                    className: "m26-spec-foot",
                    children:
                        l === "pick"
                            ? e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx("button", {
                                          className: "m26-cta ghost btn-plain",
                                          onClick: () => d(m, "cart"),
                                          children: "加入购物车",
                                      }),
                                      e.jsxs("button", {
                                          className: "m26-cta btn-plain",
                                          onClick: () => d(m, "buy"),
                                          children: ["立即购买 ¥", u.toLocaleString()],
                                      }),
                                  ],
                              })
                            : e.jsx("button", {
                                  className: "m26-cta btn-plain wide",
                                  onClick: () => d(m, l),
                                  children:
                                      l === "buy"
                                          ? `立即购买 · ¥${u.toLocaleString()}`
                                          : `加入购物车 · ¥${u.toLocaleString()}`,
                              }),
                }),
            ],
        }),
    });
}
function $n({ ownerId: s, onBack: n, onCheckout: t }) {
    var y;
    const { state: r, mallCartRemove: i, mallCartSetQty: l } = B(),
        d = V(),
        c = ((y = r.mall.carts) == null ? void 0 : y[s]) || [],
        [p, x] = f.useState(() => new Set()),
        [g, j] = f.useState(!1),
        a = c.filter((k) => !p.has(k.id)),
        o = a.reduce((k, $) => k + $.price * $.qty, 0),
        b = a.reduce((k, $) => k + $.qty, 0),
        m = c.length > 0 && a.length === c.length,
        u = (k) =>
            x(($) => {
                const S = new Set($);
                return (S.has(k) ? S.delete(k) : S.add(k), S);
            }),
        v = () => x(m ? new Set(c.map((k) => k.id)) : new Set()),
        h = () => {
            (a.forEach((k) => i(s, k.id)), d(`已删除 ${a.length} 件`), j(!1));
        };
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, {
                title: "购物车",
                sub: c.length ? `共 ${c.reduce((k, $) => k + $.qty, 0)} 件` : void 0,
                onBack: n,
                right: c.length
                    ? e.jsx("button", {
                          className: "m26-more btn-plain",
                          onClick: () => j((k) => !k),
                          children: g ? "完成" : "管理",
                      })
                    : null,
            }),
            c.length === 0
                ? e.jsxs("div", {
                      className: "m26-emptyblock",
                      children: [
                          e.jsx("span", {
                              className: "m26-emptyblock-ic",
                              children: e.jsx(ue, { size: 30, strokeWidth: 1.6 }),
                          }),
                          e.jsx("b", { children: "购物车还是空的" }),
                          e.jsx("span", { children: "看到喜欢的，点商品卡右下角的「+」就进来了" }),
                          e.jsx("button", { className: "m26-cta btn-plain", onClick: n, children: "去逛逛" }),
                      ],
                  })
                : e.jsx(G, {
                      title: "Litot 商城",
                      right: e.jsx("span", { className: "m26-group-sub", children: "顺丰包邮" }),
                      children: c.map((k) =>
                          e.jsxs(
                              "div",
                              {
                                  className: "m26-ci",
                                  onClick: () => u(k.id),
                                  children: [
                                      e.jsx(Rs, { on: !p.has(k.id), onClick: () => u(k.id), label: "选择" }),
                                      e.jsx("span", {
                                          className: "m26-thumb",
                                          children: e.jsx(te, { item: k, iconKey: k.iconKey, size: 36 }),
                                      }),
                                      e.jsxs("div", {
                                          className: "m26-ci-main",
                                          children: [
                                              e.jsx("b", { children: k.title }),
                                              e.jsx("span", {
                                                  className: "m26-ci-sub",
                                                  children:
                                                      [k.brand, Ye(k)].filter(Boolean).join(" · ") ||
                                                      "默认规格",
                                              }),
                                              e.jsxs("div", {
                                                  className: "m26-ci-foot",
                                                  children: [
                                                      e.jsxs("span", {
                                                          className: "m26-price sm",
                                                          children: ["¥", Number(k.price).toLocaleString()],
                                                      }),
                                                      e.jsx(ys, {
                                                          value: k.qty,
                                                          onChange: ($) => l(s, k.id, $),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              },
                              k.id,
                          ),
                      ),
                  }),
            c.length > 0 &&
                e.jsxs(Le, {
                    children: [
                        e.jsxs("button", {
                            className: "m26-all btn-plain",
                            onClick: v,
                            children: [
                                e.jsx(Rs, { on: m, onClick: v, label: "全选" }),
                                e.jsx("span", { children: "全选" }),
                            ],
                        }),
                        g
                            ? e.jsxs("button", {
                                  className: "m26-cta danger btn-plain",
                                  disabled: !a.length,
                                  onClick: h,
                                  children: ["删除", a.length ? `（${a.length}）` : ""],
                              })
                            : e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsxs("span", {
                                          className: "m26-sum",
                                          children: [
                                              e.jsx("small", { children: "合计" }),
                                              e.jsxs("b", { children: ["¥", o.toLocaleString()] }),
                                          ],
                                      }),
                                      e.jsxs("button", {
                                          className: "m26-cta btn-plain",
                                          disabled: !a.length,
                                          onClick: () => t(a),
                                          children: ["结算", b ? `（${b}）` : ""],
                                      }),
                                  ],
                              }),
                    ],
                }),
        ],
    });
}
function wn({ ownerId: s, items: n, onBack: t, onDone: r }) {
    var $s, ws, zs, As, Ms;
    const i = B(),
        {
            state: l,
            walletAppend: d,
            walletUpdate: c,
            mallCartRemove: p,
            mallOrderAppend: x,
            kinshipCharge: g,
            patchChar: j,
        } = i,
        a = V(),
        o = s === "me",
        b = (($s = l.mall.addresses) == null ? void 0 : $s[s]) || [],
        m = (l.mall.kinshipCards || []).filter((M) => M.active && M.holderId === s),
        u = (n || []).reduce((M, X) => M + X.price * X.qty, 0),
        v = (n || []).reduce((M, X) => M + X.qty, 0),
        h = u,
        [y, k] = f.useState(
            ((ws = b.find((M) => M.isDefault)) == null ? void 0 : ws.id) ||
                ((zs = b[0]) == null ? void 0 : zs.id) ||
                null,
        ),
        [$, S] = f.useState("self"),
        [D, I] = f.useState(null),
        [A, q] = f.useState(((As = m[0]) == null ? void 0 : As.id) || null),
        [R, K] = f.useState(""),
        [T, w] = f.useState(""),
        [N, z] = f.useState(""),
        [O, F] = f.useState(!1),
        [E, Z] = f.useState(!1);
    f.useEffect(() => {
        var M, X;
        b.some((he) => he.id === y) ||
            k(
                ((M = b.find((he) => he.isDefault)) == null ? void 0 : M.id) ||
                    ((X = b[0]) == null ? void 0 : X.id) ||
                    null,
            );
    }, [b, y]);
    const _ = b.find((M) => M.id === y),
        U = o ? l.wallet.me : (Ms = l.wallet.chars) == null ? void 0 : Ms[s],
        C = Number((U == null ? void 0 : U.balance) || 0),
        W = m.find((M) => M.id === A),
        H = W ? Math.max(0, (W.limit || 0) - (W.used || 0)) : 0,
        Q = new Date(Date.now() + 26 * 36e5),
        Y = _
            ? $ === "self" && !js(U, D, h)
                ? D
                    ? "这张卡里的钱不够"
                    : `余额不足，还差 ¥${(h - C).toFixed(2)}`
                : $ === "kinship" && !W
                  ? "没有可用的亲属卡"
                  : $ === "kinship" && H < h
                    ? "这张亲属卡的额度不够"
                    : $ === "proxy" && !R
                      ? "选一个人帮你付"
                      : ""
            : "先选一个收货地址",
        L = (M) => {
            ((n || []).forEach((X) => p(s, X.id)), r(M));
        },
        le = () => {
            if (Y) {
                (a(Y, "error"), _ || F(!0));
                return;
            }
            if ($ === "proxy") {
                me();
                return;
            }
            Z(!0);
        },
        me = () => {
            if (Y) {
                (a(Y, "error"), _ || F(!0));
                return;
            }
            if ($ === "self") {
                D
                    ? c(s, (ze) => Qe(ze, { cardId: D, amount: -h, note: Pe(n), kind: "mall-order" }))
                    : d(s, { amount: -h, note: Pe(n), kind: "mall-order" });
                const oe = {
                    ...ss({ items: n, total: h, addr: _, payerId: s, payMethod: "self", deliverNote: N }),
                    ...(D ? { cardId: D } : {}),
                };
                (x(s, "product", oe), L(oe.id));
                return;
            }
            if ($ === "kinship") {
                (d(W.granterId, { amount: -h, note: `亲属卡·${Pe(n)} → ${ie(l, s)}`, kind: "kinship-spend" }),
                    g(W.id, h));
                const oe = ss({
                    items: n,
                    total: h,
                    addr: _,
                    payerId: W.granterId,
                    payMethod: "kinship",
                    kinshipCardId: W.id,
                    deliverNote: N,
                });
                (x(s, "product", oe), L(oe.id));
                return;
            }
            const M = xe("po_"),
                X = xe("m_"),
                he = l.characters.find((oe) => oe.id === R);
            if (!he) {
                a("这个人不在了", "error");
                return;
            }
            const Ve = ss({
                items: n,
                total: h,
                addr: _,
                payerId: R,
                payMethod: "proxy",
                proxyCharId: R,
                note: T,
                deliverNote: N,
                status: "awaiting_proxy_pay",
                payRequestMsgId: X,
                id: M,
            });
            (x(s, "product", Ve),
                j(R, (oe) => ({
                    messages: [
                        ...oe.messages,
                        {
                            id: X,
                            role: "user",
                            type: "pay_request_card",
                            amount: h,
                            note: T || "",
                            status: "pending",
                            items: n.map((ze) => ({
                                title: ze.title,
                                brand: ze.brand,
                                iconKey: ze.iconKey,
                                qty: ze.qty,
                            })),
                            orderId: M,
                            requesterOwnerId: s,
                            createdAt: Date.now(),
                        },
                    ],
                })));
            const Ze = 3e3 + Math.random() * 3e3;
            (setTimeout(() => {
                window.dispatchEvent(
                    new CustomEvent("litot:mall-proxy-decide", {
                        detail: {
                            charId: R,
                            orderId: M,
                            requestMsgId: X,
                            total: h,
                            ownerId: s,
                            itemsNoteText: Pe(n),
                        },
                    }),
                );
            }, Ze),
                a(`已发给 ${Me(he)}，等 TA 回应`),
                L(M));
        },
        Xe = ({ id: M, icon: X, title: he, sub: Ve, disabled: Ze }) =>
            e.jsxs("button", {
                className: `m26-pay btn-plain ${$ === M ? "on" : ""}`,
                disabled: Ze,
                onClick: () => S(M),
                children: [
                    e.jsx("span", { className: "m26-pay-ic", children: X }),
                    e.jsxs("span", {
                        className: "m26-pay-t",
                        children: [e.jsx("b", { children: he }), e.jsx("small", { children: Ve })],
                    }),
                    e.jsx("span", { className: `m26-radio ${$ === M ? "on" : ""}` }),
                ],
            });
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, { title: "确认订单", onBack: t }),
            e.jsxs("button", {
                className: "m26-addr btn-plain",
                onClick: () => F(!0),
                children: [
                    e.jsx("span", {
                        className: "m26-addr-ic",
                        children: e.jsx(je, { size: 18, strokeWidth: 2 }),
                    }),
                    _
                        ? e.jsxs("span", {
                              className: "m26-addr-t",
                              children: [
                                  e.jsxs("b", {
                                      children: [
                                          _.name,
                                          e.jsx("small", { children: _.phone }),
                                          _.tag && e.jsx("em", { children: _.tag }),
                                      ],
                                  }),
                                  e.jsxs("span", { children: [_.address, _.unit ? ` ${_.unit}` : ""] }),
                              ],
                          })
                        : e.jsxs("span", {
                              className: "m26-addr-t",
                              children: [
                                  e.jsx("b", { children: "添加收货地址" }),
                                  e.jsx("span", { children: "结算前需要一个地址" }),
                              ],
                          }),
                    e.jsx(de, { size: 16, strokeWidth: 2, className: "m26-chev" }),
                ],
            }),
            e.jsxs(G, {
                title: "Litot 商城",
                right: e.jsxs("span", { className: "m26-group-sub", children: ["共 ", v, " 件"] }),
                children: [
                    n.map((M) =>
                        e.jsxs(
                            "div",
                            {
                                className: "m26-ci static",
                                children: [
                                    e.jsx("span", {
                                        className: "m26-thumb",
                                        children: e.jsx(te, { item: M, iconKey: M.iconKey, size: 36 }),
                                    }),
                                    e.jsxs("div", {
                                        className: "m26-ci-main",
                                        children: [
                                            e.jsx("b", { children: M.title }),
                                            e.jsx(se, { text: M.title }),
                                            e.jsx("span", {
                                                className: "m26-ci-sub",
                                                children:
                                                    [M.brand, Ye(M)].filter(Boolean).join(" · ") ||
                                                    "默认规格",
                                            }),
                                            e.jsxs("div", {
                                                className: "m26-ci-foot",
                                                children: [
                                                    e.jsxs("span", {
                                                        className: "m26-price sm",
                                                        children: ["¥", Number(M.price).toLocaleString()],
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "m26-x",
                                                        children: ["× ", M.qty],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            M.id,
                        ),
                    ),
                    e.jsx(P, { label: "配送", children: "顺丰速运 · 包邮" }),
                    e.jsxs(P, {
                        label: "预计送达",
                        children: [Q.getMonth() + 1, "月", Q.getDate(), "日 前"],
                    }),
                    e.jsxs("label", {
                        className: "m26-row m26-row-input",
                        children: [
                            e.jsx("span", { className: "m26-row-l", children: "送达备注" }),
                            e.jsx("input", {
                                value: N,
                                onChange: (M) => z(M.target.value),
                                placeholder: "放驿站 / 交给保安 / 打电话",
                                maxLength: 40,
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs(G, {
                title: "支付方式",
                children: [
                    e.jsx(Xe, {
                        id: "self",
                        icon: e.jsx(Ys, { size: 17 }),
                        title: "自己付",
                        sub: D ? "用银行卡" : `钱包余额 · 可用 ¥${C.toFixed(2)}${C < h ? " · 不足" : ""}`,
                    }),
                    $ === "self" && e.jsx(la, { wallet: U, value: D, onChange: I, total: h }),
                    e.jsx(Xe, {
                        id: "kinship",
                        icon: e.jsx(Ue, { size: 17 }),
                        title: "亲属卡",
                        disabled: !m.length,
                        sub: m.length
                            ? W
                                ? `${ie(l, W.granterId)} 的卡 · 剩 ¥${H.toFixed(2)}`
                                : `${m.length} 张可用`
                            : "暂无可用 · 去「我的 → 亲属卡」申请",
                    }),
                    $ === "kinship" &&
                        m.length > 1 &&
                        e.jsx("div", {
                            className: "m26-chips pad",
                            children: m.map((M) =>
                                e.jsxs(
                                    "button",
                                    {
                                        className: `m26-chip btn-plain ${A === M.id ? "on" : ""}`,
                                        onClick: () => q(M.id),
                                        children: [
                                            ie(l, M.granterId),
                                            " · 剩 ¥",
                                            Math.max(0, M.limit - (M.used || 0)).toFixed(0),
                                        ],
                                    },
                                    M.id,
                                ),
                            ),
                        }),
                    e.jsx(Xe, {
                        id: "proxy",
                        icon: e.jsx(Aa, { size: 17 }),
                        title: "找 TA 帮我付",
                        disabled: !l.characters.length,
                        sub: "发一张代付卡到你们的聊天，TA 同意后从 TA 的钱包扣",
                    }),
                    $ === "proxy" &&
                        e.jsxs("div", {
                            className: "m26-proxy",
                            children: [
                                e.jsx("div", {
                                    className: "m26-chips",
                                    children: l.characters.map((M) =>
                                        e.jsxs(
                                            "button",
                                            {
                                                className: `m26-chip btn-plain ${R === M.id ? "on" : ""}`,
                                                onClick: () => K(M.id),
                                                children: [
                                                    M.avatar
                                                        ? e.jsx("span", {
                                                              className: "m26-chip-av",
                                                              children: e.jsx(Se, { src: M.avatar, alt: "" }),
                                                          })
                                                        : null,
                                                    Me(M),
                                                ],
                                            },
                                            M.id,
                                        ),
                                    ),
                                }),
                                e.jsx("input", {
                                    className: "m26-input",
                                    placeholder: "附一句话给 TA（可不写）",
                                    value: T,
                                    maxLength: 60,
                                    onChange: (M) => w(M.target.value),
                                }),
                            ],
                        }),
                ],
            }),
            e.jsxs(G, {
                title: "价格明细",
                children: [
                    e.jsxs(P, { label: "商品金额", children: ["¥", u.toLocaleString()] }),
                    e.jsx(P, {
                        label: "运费",
                        children: e.jsx("span", { className: "m26-free", children: "包邮" }),
                    }),
                    e.jsx(P, {
                        label: $ === "proxy" ? "由 TA 支付" : "实付",
                        children: e.jsxs("b", {
                            className: "m26-price",
                            children: ["¥", h.toLocaleString()],
                        }),
                    }),
                ],
            }),
            e.jsxs(Le, {
                children: [
                    e.jsxs("span", {
                        className: "m26-sum",
                        children: [
                            e.jsx("small", { children: Y || ($ === "proxy" ? "待 TA 支付" : "实付") }),
                            e.jsxs("b", { children: ["¥", h.toLocaleString()] }),
                        ],
                    }),
                    e.jsx("button", {
                        className: `m26-cta btn-plain ${Y ? "soft" : ""}`,
                        onClick: le,
                        children: $ === "proxy" ? "发送代付申请" : "提交订单",
                    }),
                ],
            }),
            e.jsx(ha, {
                open: O,
                onClose: () => F(!1),
                ownerId: s,
                selectedId: y,
                onPick: (M) => {
                    (k(M), F(!1));
                },
            }),
            E &&
                e.jsx(zn, {
                    total: h,
                    source:
                        $ === "kinship"
                            ? `亲属卡 · ${ie(l, W == null ? void 0 : W.granterId)}`
                            : D
                              ? (() => {
                                    const M = ((U == null ? void 0 : U.cards) || []).find((X) => X.id === D);
                                    return M ? `${M.bank} · 尾号 ${re(M)}` : "银行卡";
                                })()
                              : "LiToT Pay 余额",
                    to: _ ? `${_.name} · ${_.address}` : "",
                    onCancel: () => Z(!1),
                    onPaid: me,
                }),
        ],
    });
}
function zn({ total: s, source: n, to: t, onCancel: r, onPaid: i }) {
    const [l, d] = f.useState("confirm"),
        [c, p] = f.useState(!1),
        x = () => {
            (d("auth"), setTimeout(() => d("done"), 1e3), setTimeout(() => i(), 1750));
        },
        g = () => {
            l === "confirm" && (p(!0), setTimeout(r, 240));
        };
    return e.jsx("div", {
        className: `m26-pay-layer${c ? " out" : ""}`,
        onClick: g,
        children: e.jsxs("div", {
            className: "m26-paysheet",
            onClick: (j) => j.stopPropagation(),
            role: "dialog",
            "aria-label": "确认付款",
            children: [
                e.jsxs("div", {
                    className: "m26-paysheet-h",
                    children: [
                        e.jsx("b", { children: "LiToT Pay" }),
                        l === "confirm" &&
                            e.jsx("button", {
                                className: "btn-plain",
                                onClick: g,
                                "aria-label": "关闭",
                                children: e.jsx(cs, { size: 16, strokeWidth: 2.4 }),
                            }),
                    ],
                }),
                e.jsxs("div", {
                    className: "m26-paysheet-amt tn",
                    children: [
                        "¥",
                        Number(s).toLocaleString(void 0, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }),
                    ],
                }),
                e.jsxs("div", {
                    className: "m26-paysheet-rows",
                    children: [
                        e.jsxs("div", {
                            children: [e.jsx("span", { children: "付款方式" }), e.jsx("b", { children: n })],
                        }),
                        t &&
                            e.jsxs("div", {
                                children: [
                                    e.jsx("span", { children: "收货人" }),
                                    e.jsx("b", { children: t }),
                                ],
                            }),
                    ],
                }),
                e.jsxs("div", {
                    className: `m26-paysheet-act ${l}`,
                    children: [
                        l === "confirm" &&
                            e.jsx("button", {
                                className: "m26-cta btn-plain",
                                onClick: x,
                                children: "确认付款",
                            }),
                        l !== "confirm" &&
                            e.jsxs("div", {
                                className: "m26-auth",
                                children: [
                                    e.jsx("svg", {
                                        viewBox: "0 0 56 56",
                                        "aria-hidden": !0,
                                        className: l,
                                        children:
                                            l === "auth"
                                                ? e.jsxs("g", {
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      strokeWidth: "2.2",
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                      children: [
                                                          e.jsx("path", {
                                                              className: "fr",
                                                              d: "M4 16V9a5 5 0 0 1 5-5h7M40 4h7a5 5 0 0 1 5 5v7M52 40v7a5 5 0 0 1-5 5h-7M16 52H9a5 5 0 0 1-5-5v-7",
                                                          }),
                                                          e.jsx("path", {
                                                              className: "fc",
                                                              d: "M20 21v4M36 21v4M28 21v9h-3M21 37c4 4 10 4 14 0",
                                                          }),
                                                      ],
                                                  })
                                                : e.jsxs("g", {
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      strokeWidth: "2.4",
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                      children: [
                                                          e.jsx("circle", {
                                                              className: "m26-ring",
                                                              cx: "28",
                                                              cy: "28",
                                                              r: "24",
                                                          }),
                                                          e.jsx("path", {
                                                              className: "m26-tick",
                                                              d: "M17 29l7.5 7.5L39 21",
                                                          }),
                                                      ],
                                                  }),
                                    }),
                                    e.jsx("span", { children: l === "auth" ? "正在验证" : "已支付" }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
}
function An({ ownerId: s, orderId: n, onOpen: t, onHome: r }) {
    var p;
    const { state: i } = B(),
        l = (((p = i.mall.productOrders) == null ? void 0 : p[s]) || []).find((x) => x.id === n),
        d = (l == null ? void 0 : l.status) === "awaiting_proxy_pay",
        c = l ? Re(l).eta : null;
    return e.jsxs("div", {
        className: "mall-view m26-page m26-paid",
        children: [
            e.jsx("div", {
                className: "m26-paid-mark",
                "aria-hidden": !0,
                children: e.jsx("svg", {
                    viewBox: "0 0 56 56",
                    children: e.jsx("g", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: d
                            ? e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx("circle", { className: "m26-ring", cx: "28", cy: "28", r: "24" }),
                                      e.jsx("path", { className: "m26-tick", d: "M28 16v13l8 5" }),
                                  ],
                              })
                            : e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx("circle", { className: "m26-ring", cx: "28", cy: "28", r: "24" }),
                                      e.jsx("path", { className: "m26-tick", d: "M17 29l7.5 7.5L39 21" }),
                                  ],
                              }),
                    }),
                }),
            }),
            e.jsx("h2", { children: d ? "代付申请已发送" : "支付成功" }),
            l &&
                e.jsxs("div", {
                    className: "m26-paid-amt tn",
                    children: [
                        "¥",
                        Number(l.total).toLocaleString(void 0, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }),
                    ],
                }),
            e.jsx("p", {
                children: d
                    ? `等待${ie(i, l == null ? void 0 : l.proxyCharId)}回应`
                    : c
                      ? `预计 ${J(c)} 送达`
                      : "",
            }),
            l &&
                e.jsxs("div", {
                    className: "m26-paid-items",
                    children: [
                        (l.items || [])
                            .slice(0, 4)
                            .map((x, g) =>
                                e.jsx(
                                    "span",
                                    {
                                        className: "m26-thumb sm",
                                        children: e.jsx(te, { item: x, iconKey: x.iconKey, size: 26 }),
                                    },
                                    g,
                                ),
                            ),
                        e.jsxs("span", {
                            className: "m26-paid-count",
                            children: ["共 ", (l.items || []).reduce((x, g) => x + (g.qty || 1), 0), " 件"],
                        }),
                    ],
                }),
            e.jsxs("div", {
                className: "m26-paid-acts",
                children: [
                    e.jsx("button", { className: "m26-cta btn-plain", onClick: t, children: "查看订单" }),
                    e.jsx("button", {
                        className: "m26-cta ghost btn-plain",
                        onClick: r,
                        children: "继续逛逛",
                    }),
                ],
            }),
        ],
    });
}
function ss({
    items: s,
    total: n,
    addr: t,
    payerId: r,
    payMethod: i,
    kinshipCardId: l,
    proxyCharId: d,
    note: c,
    deliverNote: p,
    status: x,
    payRequestMsgId: g,
    id: j,
}) {
    const a = Date.now();
    return {
        id: j || xe("po_"),
        items: s.map((o) => ({ ...o })),
        total: n,
        addressSnapshot: t
            ? { name: t.name, phone: t.phone, address: t.address, unit: t.unit, tag: t.tag }
            : null,
        payerId: r,
        payMethod: i,
        kinshipCardId: l || null,
        proxyCharId: d || null,
        note: c || "",
        deliverNote: p || "",
        status: x || "paid",
        tracking: [{ at: a, text: x === "awaiting_proxy_pay" ? "等待 TA 同意代付" : "已下单" }],
        payRequestMsgId: g || null,
        createdAt: a,
        ...(x === "awaiting_proxy_pay" ? null : { paidAt: a }),
    };
}
const Fs = [
        { id: "all", zh: "全部" },
        { id: "toship", zh: "待发货" },
        { id: "transit", zh: "运输中" },
        { id: "toreceive", zh: "待收货" },
        { id: "done", zh: "已完成" },
        { id: "proxy", zh: "代付" },
        { id: "closed", zh: "退款/取消" },
    ],
    ks = {
        awaiting_proxy_pay: "warn",
        declined: "bad",
        done: "ok",
        delivered: "ok",
        cancelled: "bad",
        refunded: "bad",
    },
    Bs = [
        ["good", "满意"],
        ["ok", "一般"],
        ["bad", "不满意"],
    ];
function Mn({ ownerId: s, onBack: n, onOpen: t, onOpenLogistics: r, onRebuy: i, initialTab: l = "all" }) {
    var m, u;
    const { state: d, mallOrderPatch: c } = B(),
        p = V(),
        x = we(),
        g = ((m = d.mall.productOrders) == null ? void 0 : m[s]) || [],
        [j, a] = f.useState(l),
        o = f.useMemo(() => {
            const v = { all: g.length };
            for (const h of g) {
                const y = ns(h, x);
                v[y] = (v[y] || 0) + 1;
            }
            return v;
        }, [g, x]),
        b = j === "all" ? g : g.filter((v) => ns(v, x) === j);
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, { title: "商品订单", onBack: n }),
            e.jsx(Ee, { tabs: Fs, value: j, onChange: a, counts: o }),
            b.length === 0 &&
                e.jsxs("div", {
                    className: "m26-emptyblock sm",
                    children: [
                        e.jsx("span", {
                            className: "m26-emptyblock-ic",
                            children: e.jsx(Zs, { size: 26, strokeWidth: 1.7 }),
                        }),
                        e.jsx("b", {
                            children:
                                j === "all"
                                    ? "还没有订单"
                                    : `没有${(u = Fs.find((v) => v.id === j)) == null ? void 0 : u.zh}的订单`,
                        }),
                    ],
                }),
            e.jsx("div", {
                className: "m26-orders",
                children: b.map((v) => {
                    const h = Re(v, x),
                        y = h.steps.filter((k) => k.done).slice(-1)[0];
                    return e.jsxs(
                        "div",
                        {
                            className: "m26-order",
                            onClick: () => t(v.id),
                            role: "button",
                            tabIndex: 0,
                            children: [
                                e.jsxs("div", {
                                    className: "m26-order-h",
                                    children: [
                                        e.jsx("b", { children: "Litot 商城" }),
                                        e.jsx("span", {
                                            className: `m26-status ${ks[h.phase] || ""}`,
                                            children: h.label,
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "m26-order-items",
                                    children: [
                                        (v.items || [])
                                            .slice(0, 4)
                                            .map((k, $) =>
                                                e.jsx(
                                                    "span",
                                                    {
                                                        className: "m26-thumb sm",
                                                        children: e.jsx(te, {
                                                            item: k,
                                                            iconKey: k.iconKey,
                                                            size: 28,
                                                        }),
                                                    },
                                                    $,
                                                ),
                                            ),
                                        (v.items || []).length === 1 &&
                                            e.jsxs("div", {
                                                className: "m26-order-one",
                                                children: [
                                                    e.jsx("b", { children: v.items[0].title }),
                                                    e.jsx(se, { text: v.items[0].title }),
                                                    e.jsx("span", {
                                                        children: [v.items[0].brand, Ye(v.items[0])]
                                                            .filter(Boolean)
                                                            .join(" · "),
                                                    }),
                                                ],
                                            }),
                                        e.jsxs("div", {
                                            className: "m26-order-sum",
                                            children: [
                                                e.jsxs("b", {
                                                    children: ["¥", Number(v.total).toLocaleString()],
                                                }),
                                                e.jsxs("span", {
                                                    children: [
                                                        "共 ",
                                                        (v.items || []).reduce((k, $) => k + ($.qty || 1), 0),
                                                        " 件",
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                y &&
                                    h.phase !== "done" &&
                                    e.jsxs("div", {
                                        className: "m26-order-track",
                                        children: [e.jsx(Fe, { size: 12, strokeWidth: 2.2 }), y.text],
                                    }),
                                v.innerNote &&
                                    e.jsxs("div", {
                                        className: "inner-note",
                                        children: [v.innerNote, e.jsx(se, { text: v.innerNote })],
                                    }),
                                e.jsxs("div", {
                                    className: "m26-order-acts",
                                    onClick: (k) => k.stopPropagation(),
                                    children: [
                                        h.index >= 0 &&
                                            e.jsx("button", {
                                                className: "m26-mini btn-plain",
                                                onClick: () => r(v.id),
                                                children: "查看物流",
                                            }),
                                        h.phase === "delivered" &&
                                            !h.received &&
                                            e.jsx("button", {
                                                className: "m26-mini dark btn-plain",
                                                onClick: () => {
                                                    (c(s, "product", v.id, {
                                                        status: "done",
                                                        receivedAt: Date.now(),
                                                    }),
                                                        p("已确认收货"));
                                                },
                                                children: "确认收货",
                                            }),
                                        (h.received ||
                                            h.phase === "declined" ||
                                            h.phase === "cancelled" ||
                                            h.phase === "refunded") &&
                                            e.jsx("button", {
                                                className: "m26-mini btn-plain",
                                                onClick: () => i(v.items),
                                                children: "再买一单",
                                            }),
                                    ],
                                }),
                            ],
                        },
                        v.id,
                    );
                }),
            }),
        ],
    });
}
function Tn({ ownerId: s, orderId: n, onBack: t, onOpenLogistics: r, onRebuy: i }) {
    var K, T;
    const { state: l, mallOrderPatch: d, walletAppend: c, walletUpdate: p, kinshipCharge: x } = B(),
        g = V(),
        j = we(),
        [a, o] = f.useState(null),
        [b, m] = f.useState(!1),
        [u, v] = f.useState({ mood: "good", text: "" }),
        h = (((K = l.mall.productOrders) == null ? void 0 : K[s]) || []).find((w) => w.id === n);
    if (!h)
        return e.jsxs("div", {
            className: "mall-view",
            children: [
                e.jsx(ee, { title: "订单详情", onBack: t }),
                e.jsx("div", {
                    className: "m26-emptyblock sm",
                    children: e.jsx("b", { children: "找不到这个订单" }),
                }),
            ],
        });
    const y = Re(h, j),
        k = y.steps.filter((w) => w.done).slice(-1)[0],
        $ = j - (h.createdAt || 0) < 6e4,
        S = () => {
            const w = Number(h.total) || 0,
                N = `退款·${Pe(h.items)}`;
            h.payMethod === "self"
                ? h.cardId
                    ? p(h.payerId || s, (z) =>
                          Qe(z, { cardId: h.cardId, amount: w, note: N, kind: "mall-refund" }),
                      )
                    : c(h.payerId || s, { amount: w, note: N, kind: "mall-refund" })
                : h.payMethod === "kinship"
                  ? (c(h.payerId, { amount: w, note: N, kind: "mall-refund" }),
                    h.kinshipCardId && x(h.kinshipCardId, -w))
                  : h.payMethod === "proxy" &&
                    h.paidAt &&
                    c(h.proxyCharId, { amount: w, note: N, kind: "mall-refund" });
        },
        D = y.phase === "placed",
        I =
            y.phase === "delivered" ||
            y.phase === "out" ||
            (y.received && j - (h.receivedAt || 0) < 7 * 864e5),
        A = {
            withdraw: {
                title: "撤回代付申请？",
                message: "订单将被取消，对方将无法再为此订单付款。",
                label: "撤回",
                run: () => {
                    (d(s, "product", h.id, { status: "cancelled", cancelledAt: Date.now() }),
                        g("已撤回代付申请"));
                },
            },
            cancel: {
                title: "取消订单？",
                message: `商家尚未发货，¥${Number(h.total).toLocaleString()} 将原路退回。`,
                label: "取消订单",
                run: () => {
                    (S(),
                        d(s, "product", h.id, { status: "cancelled", cancelledAt: Date.now() }),
                        g("订单已取消，款项已退回"));
                },
            },
            refund: {
                title: "申请退款？",
                message: `退款金额 ¥${Number(h.total).toLocaleString()}，将原路退回。`,
                label: "申请退款",
                run: () => {
                    (S(),
                        d(s, "product", h.id, { status: "refunded", refundedAt: Date.now() }),
                        g("退款成功"));
                },
            },
        },
        q = (w) => {
            var N;
            try {
                ((N = navigator.clipboard) == null || N.writeText(w), g("已复制"));
            } catch {
                g("复制失败", "error");
            }
        },
        R =
            y.phase === "cancelled"
                ? { t: "订单已取消", s: h.paidAt && h.payMethod !== "proxy" ? "款项已原路退回" : "" }
                : y.phase === "refunded"
                  ? { t: "退款成功", s: `¥${Number(h.total).toLocaleString()} 已原路退回` }
                  : y.phase === "awaiting_proxy_pay"
                    ? {
                          t: "等 TA 同意代付",
                          s: `代付卡已发给 ${ie(l, h.proxyCharId)}，TA 同意后订单开始处理`,
                      }
                    : y.phase === "declined"
                      ? { t: "TA 没有同意代付", s: "这一单没有扣钱，可以换一种方式再买一次" }
                      : y.received
                        ? { t: "订单已完成", s: h.receivedAt ? `${J(h.receivedAt)} 确认收货` : "已确认收货" }
                        : y.phase === "delivered"
                          ? { t: "已送达", s: "快递送到了，收到东西后点确认收货" }
                          : { t: y.label, s: y.eta ? `预计 ${J(y.eta)} 送达` : "" };
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, { title: "订单详情", onBack: t }),
            e.jsxs("div", {
                className: `m26-hero-status ${ks[y.phase] || ""}`,
                children: [
                    $ &&
                        y.index >= 0 &&
                        e.jsxs("span", {
                            className: "m26-paid-pill",
                            children: [e.jsx(Ue, { size: 13 }), "支付成功"],
                        }),
                    e.jsx("h2", { children: R.t }),
                    R.s && e.jsx("p", { children: R.s }),
                    y.index >= 0 &&
                        (() => {
                            const w = y.steps.filter((N) => N.key !== "arrived");
                            return e.jsx(pa, { steps: w, index: w.filter((N) => N.done).length - 1 });
                        })(),
                ],
            }),
            k &&
                y.index >= 0 &&
                e.jsxs("button", {
                    className: "m26-latest btn-plain",
                    onClick: () => r(h.id),
                    children: [
                        e.jsx("span", { className: "m26-latest-ic", children: qe(h).slice(0, 1) }),
                        e.jsxs("span", {
                            className: "m26-latest-t",
                            children: [
                                e.jsx("b", { children: k.text }),
                                e.jsx("small", { children: J(k.at) }),
                            ],
                        }),
                        e.jsx(de, { size: 16, strokeWidth: 2, className: "m26-chev" }),
                    ],
                }),
            h.addressSnapshot &&
                e.jsxs("div", {
                    className: "m26-addr static",
                    children: [
                        e.jsx("span", {
                            className: "m26-addr-ic",
                            children: e.jsx(je, { size: 18, strokeWidth: 2 }),
                        }),
                        e.jsxs("span", {
                            className: "m26-addr-t",
                            children: [
                                e.jsxs("b", {
                                    children: [
                                        h.addressSnapshot.name,
                                        e.jsx("small", { children: h.addressSnapshot.phone }),
                                    ],
                                }),
                                e.jsxs("span", {
                                    children: [
                                        h.addressSnapshot.address,
                                        h.addressSnapshot.unit ? ` ${h.addressSnapshot.unit}` : "",
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            e.jsxs(G, {
                title: "Litot 商城",
                children: [
                    h.items.map((w, N) =>
                        e.jsxs(
                            "div",
                            {
                                className: "m26-ci static",
                                children: [
                                    e.jsx("span", {
                                        className: "m26-thumb",
                                        children: e.jsx(te, { item: w, iconKey: w.iconKey, size: 36 }),
                                    }),
                                    e.jsxs("div", {
                                        className: "m26-ci-main",
                                        children: [
                                            e.jsx("b", { children: w.title }),
                                            e.jsx(se, { text: w.title }),
                                            e.jsx("span", {
                                                className: "m26-ci-sub",
                                                children:
                                                    [w.brand, Ye(w)].filter(Boolean).join(" · ") ||
                                                    "默认规格",
                                            }),
                                            e.jsxs("div", {
                                                className: "m26-ci-foot",
                                                children: [
                                                    e.jsxs("span", {
                                                        className: "m26-price sm",
                                                        children: ["¥", Number(w.price).toLocaleString()],
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "m26-x",
                                                        children: ["× ", w.qty],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            N,
                        ),
                    ),
                    e.jsx(P, {
                        label: "实付",
                        children: e.jsxs("b", {
                            className: "m26-price",
                            children: ["¥", Number(h.total).toLocaleString()],
                        }),
                    }),
                ],
            }),
            h.innerNote &&
                e.jsxs("div", {
                    className: "m26-note",
                    children: [
                        e.jsx("small", { children: "下单时在想" }),
                        h.innerNote,
                        e.jsx(se, { text: h.innerNote }),
                    ],
                }),
            h.route &&
                (h.route.from || h.route.to) &&
                e.jsxs(G, {
                    title: "配送",
                    children: [
                        e.jsx(P, { label: "快递", children: qe(h) }),
                        h.route.from && e.jsx(P, { label: "发货地", children: h.route.from }),
                        h.route.to && e.jsx(P, { label: "收货地", children: h.route.to }),
                        ((T = h.route.hubs) == null ? void 0 : T.length) > 0 &&
                            e.jsx(P, { label: "途经", children: h.route.hubs.join(" → ") }),
                    ],
                }),
            h.review &&
                e.jsxs("div", {
                    className: "m26-note",
                    children: [
                        e.jsx("small", {
                            children: h.forWhom === "her" ? "买给她的 · 他的评价" : "他的评价",
                        }),
                        h.review,
                        e.jsx(se, { text: h.review }),
                    ],
                }),
            h.myReview &&
                e.jsxs("div", {
                    className: "m26-note",
                    children: [
                        e.jsxs("small", {
                            children: [
                                "我的评价 · ",
                                (Bs.find((w) => w[0] === h.myReview.mood) || [])[1] || "",
                            ],
                        }),
                        h.myReview.text || "未填写评价内容",
                    ],
                }),
            !h.review &&
                h.forWhom === "her" &&
                e.jsxs("div", {
                    className: "m26-note",
                    children: [e.jsx("small", { children: "这一单" }), "买给她的"],
                }),
            e.jsxs(G, {
                title: "订单信息",
                children: [
                    e.jsx(P, {
                        label: "订单编号",
                        children: e.jsxs("button", {
                            className: "m26-copy btn-plain",
                            onClick: () => q(h.id.toUpperCase()),
                            children: [h.id.toUpperCase().slice(-12), e.jsx("small", { children: "复制" })],
                        }),
                    }),
                    e.jsx(P, { label: "下单时间", children: Ie(new Date(h.createdAt)) }),
                    e.jsx(P, { label: "支付方式", children: kn(l, h) }),
                    h.deliverNote && e.jsx(P, { label: "送达备注", children: h.deliverNote }),
                    h.note && e.jsx(P, { label: "代付附言", children: h.note }),
                    h.cancelledAt && e.jsx(P, { label: "取消时间", children: Ie(new Date(h.cancelledAt)) }),
                    h.refundedAt && e.jsx(P, { label: "退款时间", children: Ie(new Date(h.refundedAt)) }),
                ],
            }),
            (D || I || y.phase === "awaiting_proxy_pay") &&
                e.jsxs("div", {
                    className: "m26-after",
                    children: [
                        y.phase === "awaiting_proxy_pay" &&
                            e.jsx("button", {
                                className: "btn-plain",
                                onClick: () => o("withdraw"),
                                children: "撤回代付申请",
                            }),
                        D &&
                            e.jsx("button", {
                                className: "btn-plain",
                                onClick: () => o("cancel"),
                                children: "取消订单",
                            }),
                        I &&
                            e.jsx("button", {
                                className: "btn-plain",
                                onClick: () => o("refund"),
                                children: "申请退款",
                            }),
                    ],
                }),
            e.jsx(Is, {
                open: !!a,
                onClose: () => o(null),
                title: a ? A[a].title : "",
                message: a ? A[a].message : "",
                cancelLabel: "暂不",
                confirm: a ? { label: A[a].label, destructive: !0, onClick: A[a].run } : null,
            }),
            e.jsx(Na, {
                open: b,
                onClose: () => m(!1),
                title: "评价",
                children: e.jsxs("div", {
                    className: "m26-review",
                    children: [
                        e.jsx("div", {
                            className: "m26-review-seg",
                            role: "tablist",
                            children: Bs.map(([w, N]) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `btn-plain${u.mood === w ? " on" : ""}`,
                                        onClick: () => v((z) => ({ ...z, mood: w })),
                                        children: N,
                                    },
                                    w,
                                ),
                            ),
                        }),
                        e.jsx("textarea", {
                            value: u.text,
                            maxLength: 200,
                            onChange: (w) => v((N) => ({ ...N, text: w.target.value })),
                            placeholder: "分享你对商品的看法（选填）",
                        }),
                        e.jsx("button", {
                            className: "m26-cta btn-plain",
                            onClick: () => {
                                (d(s, "product", h.id, { myReview: { ...u, at: Date.now() } }),
                                    m(!1),
                                    g("评价已提交"));
                            },
                            children: "提交",
                        }),
                    ],
                }),
            }),
            e.jsx(Le, {
                children:
                    y.phase === "delivered" && !y.received
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx("button", {
                                      className: "m26-cta ghost btn-plain",
                                      onClick: () => r(h.id),
                                      children: "查看物流",
                                  }),
                                  e.jsx("button", {
                                      className: "m26-cta btn-plain",
                                      onClick: () => {
                                          (d(s, "product", h.id, { status: "done", receivedAt: Date.now() }),
                                              g("已确认收货"));
                                      },
                                      children: "确认收货",
                                  }),
                              ],
                          })
                        : y.received ||
                            y.phase === "declined" ||
                            y.phase === "cancelled" ||
                            y.phase === "refunded"
                          ? e.jsxs(e.Fragment, {
                                children: [
                                    y.received &&
                                        !h.myReview &&
                                        e.jsx("button", {
                                            className: "m26-cta ghost btn-plain",
                                            onClick: () => m(!0),
                                            children: "评价",
                                        }),
                                    y.received &&
                                        h.myReview &&
                                        e.jsx("button", {
                                            className: "m26-cta ghost btn-plain",
                                            onClick: () => r(h.id),
                                            children: "查看物流",
                                        }),
                                    e.jsx("button", {
                                        className: "m26-cta btn-plain",
                                        onClick: () => i(h.items),
                                        children: "再买一单",
                                    }),
                                ],
                            })
                          : y.index >= 0
                            ? e.jsx("button", {
                                  className: "m26-cta btn-plain",
                                  onClick: () => r(h.id),
                                  children: "查看物流",
                              })
                            : e.jsxs("span", {
                                  className: "m26-sum",
                                  children: [
                                      e.jsx("small", { children: "等 TA 回应" }),
                                      e.jsxs("b", { children: ["¥", Number(h.total).toLocaleString()] }),
                                  ],
                              }),
            }),
        ],
    });
}
function On({ ownerId: s, orderId: n, onBack: t }) {
    var j;
    const { state: r } = B(),
        i = V(),
        l = we(),
        d = ((j = r.mall.productOrders) == null ? void 0 : j[s]) || [],
        c = n ? d.find((a) => a.id === n) : d.find((a) => Re(a, l).index >= 0 && a.status !== "done") || d[0];
    if (!c)
        return e.jsxs("div", {
            className: "mall-view",
            children: [
                e.jsx(ee, { title: "物流", onBack: t }),
                e.jsx("div", {
                    className: "m26-emptyblock sm",
                    children: e.jsx("b", { children: "还没有要查的包裹" }),
                }),
            ],
        });
    const p = Re(c, l),
        x = va(c),
        g = (c.tracking || []).filter((a) => /代付/.test(a.text)).map((a) => ({ ...a, label: a.text }));
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, { title: "物流详情", onBack: t }),
            e.jsxs("div", {
                className: "m26-carrier",
                children: [
                    e.jsx("span", { className: "m26-carrier-logo", children: qe(c).slice(0, 1) }),
                    e.jsxs("div", {
                        children: [
                            e.jsx("b", { children: qe(c) }),
                            e.jsxs("button", {
                                className: "m26-copy btn-plain",
                                onClick: () => {
                                    var a;
                                    try {
                                        ((a = navigator.clipboard) == null || a.writeText(x),
                                            i("单号已复制"));
                                    } catch {
                                        i("复制失败", "error");
                                    }
                                },
                                children: [x, e.jsx("small", { children: "复制" })],
                            }),
                        ],
                    }),
                    e.jsx("span", { className: `m26-status ${ks[p.phase] || ""}`, children: p.label }),
                ],
            }),
            p.index >= 0 &&
                e.jsx("div", {
                    className: "m26-progress",
                    children: e.jsx("i", { style: { width: `${Math.round(p.progress * 100)}%` } }),
                }),
            e.jsx("div", {
                className: "m26-progress-t",
                children: p.received
                    ? "已完成"
                    : p.eta
                      ? `预计 ${J(p.eta)} 送达`
                      : p.index < 0
                        ? "还没开始配送"
                        : "已送达，等你确认收货",
            }),
            c.route &&
                (c.route.from || c.route.to) &&
                e.jsxs("div", {
                    className: "m26-route",
                    children: [
                        e.jsx("span", { children: c.route.from || "发货地" }),
                        e.jsx("i", {}),
                        e.jsx("span", { children: c.route.to || "收货地" }),
                    ],
                }),
            e.jsx(G, { children: e.jsx(xa, { steps: p.steps, extra: g }) }),
            c.addressSnapshot &&
                e.jsxs("div", {
                    className: "m26-addr static",
                    children: [
                        e.jsx("span", {
                            className: "m26-addr-ic",
                            children: e.jsx(je, { size: 18, strokeWidth: 2 }),
                        }),
                        e.jsxs("span", {
                            className: "m26-addr-t",
                            children: [
                                e.jsxs("b", {
                                    children: [
                                        "送至",
                                        e.jsxs("small", {
                                            children: [c.addressSnapshot.name, " ", c.addressSnapshot.phone],
                                        }),
                                    ],
                                }),
                                e.jsxs("span", {
                                    children: [
                                        c.addressSnapshot.address,
                                        c.addressSnapshot.unit ? ` ${c.addressSnapshot.unit}` : "",
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function Dn({ ownerId: s, item: n, onBack: t, onDone: r }) {
    var W, H, Q, Y;
    const { state: i, walletAppend: l, walletUpdate: d, mallOrderAppend: c } = B(),
        p = V(),
        g = s === "me" ? i.wallet.me : (W = i.wallet.chars) == null ? void 0 : W[s],
        j = Number((g == null ? void 0 : g.balance) || 0),
        [a, o] = f.useState(null),
        b = ((H = i.mall.addresses) == null ? void 0 : H[s]) || [],
        [m, u] = f.useState(
            ((Q = b.find((L) => L.isDefault)) == null ? void 0 : Q.id) ||
                ((Y = b[0]) == null ? void 0 : Y.id) ||
                null,
        ),
        [v, h] = f.useState(!1);
    f.useEffect(() => {
        var L, le;
        b.some((me) => me.id === m) ||
            u(
                ((L = b.find((me) => me.isDefault)) == null ? void 0 : L.id) ||
                    ((le = b[0]) == null ? void 0 : le.id) ||
                    null,
            );
    }, [b, m]);
    const y = b.find((L) => L.id === m),
        [k, $] = f.useState(1),
        [S, D] = f.useState("now"),
        [I, A] = f.useState(() => {
            const L = new Date(Date.now() + 36e5);
            return `${String(L.getHours()).padStart(2, "0")}:${String(Math.floor(L.getMinutes() / 15) * 15).padStart(2, "0")}`;
        }),
        [q, R] = f.useState(!0),
        [K, T] = f.useState(""),
        [w, N] = f.useState("1"),
        z = Number(n.price) * k,
        O = 2,
        F = z >= 30 ? 0 : 3,
        E = z + O + F,
        Z = Ce(n),
        _ = S === "now" ? "约 30 分钟送达" : `预约 ${I} 送达`,
        U = y
            ? js(g, a, E)
                ? ""
                : a
                  ? "这张卡里的钱不够"
                  : `余额不足，还差 ¥${(E - j).toFixed(2)}`
            : "先选一个送达地址",
        C = () => {
            if (U) {
                (p(U, "error"), y || h(!0));
                return;
            }
            const L = `${n.shop} ${n.dish}${k > 1 ? ` ×${k}` : ""}`;
            a
                ? d(s, (me) => Qe(me, { cardId: a, amount: -E, note: L, kind: "mall-food" }))
                : l(s, { amount: -E, note: L, kind: "mall-food" });
            const le = xe("fo_");
            (c(s, "food", {
                id: le,
                shop: n.shop,
                dish: n.dish,
                emoji: n.emoji,
                note: n.note,
                category: Z,
                qty: k,
                total: E,
                fee: F,
                pack: O,
                addressSnapshot: {
                    name: y.name,
                    phone: y.phone,
                    address: y.address,
                    unit: y.unit,
                    tag: y.tag,
                },
                payerId: s,
                payMethod: "self",
                ...(a ? { cardId: a } : {}),
                status: "delivering",
                eta: _,
                scheduled: S === "later",
                contactless: q,
                deliveryNote: K.trim(),
                utensils: w,
                tracking: [{ at: Date.now(), text: "订单已提交" }],
            }),
                p("下单成功，商家正在接单"),
                r(le));
        };
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, { title: "确认订单", onBack: t }),
            e.jsxs("button", {
                className: "m26-addr btn-plain",
                onClick: () => h(!0),
                children: [
                    e.jsx("span", {
                        className: "m26-addr-ic",
                        children: e.jsx(je, { size: 18, strokeWidth: 2 }),
                    }),
                    y
                        ? e.jsxs("span", {
                              className: "m26-addr-t",
                              children: [
                                  e.jsxs("b", {
                                      children: [
                                          y.name,
                                          e.jsx("small", { children: y.phone }),
                                          y.tag && e.jsx("em", { children: y.tag }),
                                      ],
                                  }),
                                  e.jsxs("span", { children: [y.address, y.unit ? ` ${y.unit}` : ""] }),
                              ],
                          })
                        : e.jsxs("span", {
                              className: "m26-addr-t",
                              children: [
                                  e.jsx("b", { children: "添加送达地址" }),
                                  e.jsx("span", { children: "骑手要知道送到哪" }),
                              ],
                          }),
                    e.jsx(de, { size: 16, strokeWidth: 2, className: "m26-chev" }),
                ],
            }),
            e.jsx(G, {
                title: n.shop,
                right: e.jsx("span", { className: "m26-group-sub", children: _ }),
                children: e.jsxs("div", {
                    className: "m26-ci static",
                    children: [
                        e.jsx("span", {
                            className: "m26-thumb",
                            children: e.jsx(Be, { category: Z, size: 34 }),
                        }),
                        e.jsxs("div", {
                            className: "m26-ci-main",
                            children: [
                                e.jsx("b", { children: n.dish }),
                                e.jsx("span", {
                                    className: "m26-ci-sub",
                                    children: [He(Z), n.note].filter(Boolean).join(" · "),
                                }),
                                e.jsxs("div", {
                                    className: "m26-ci-foot",
                                    children: [
                                        e.jsxs("span", {
                                            className: "m26-price sm",
                                            children: ["¥", n.price],
                                        }),
                                        e.jsx(ys, { value: k, onChange: $, max: 20 }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            e.jsxs(G, {
                title: "配送",
                children: [
                    e.jsxs("div", {
                        className: "m26-row",
                        children: [
                            e.jsx("span", { className: "m26-row-l", children: "送达时间" }),
                            e.jsxs("span", {
                                className: "m26-seg2",
                                children: [
                                    e.jsx("button", {
                                        className: `btn-plain ${S === "now" ? "on" : ""}`,
                                        onClick: () => D("now"),
                                        children: "尽快送达",
                                    }),
                                    e.jsx("button", {
                                        className: `btn-plain ${S === "later" ? "on" : ""}`,
                                        onClick: () => D("later"),
                                        children: "预约",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    S === "later" &&
                        e.jsxs("label", {
                            className: "m26-row m26-row-input",
                            children: [
                                e.jsx("span", { className: "m26-row-l", children: "预约时间" }),
                                e.jsx("input", {
                                    type: "time",
                                    step: "900",
                                    value: I,
                                    onChange: (L) => A(L.target.value),
                                }),
                            ],
                        }),
                    e.jsxs("div", {
                        className: "m26-row",
                        children: [
                            e.jsx("span", { className: "m26-row-l", children: "餐具" }),
                            e.jsx("span", {
                                className: "m26-seg2",
                                children: ["无需", "1", "2", "3"].map((L) =>
                                    e.jsx(
                                        "button",
                                        {
                                            className: `btn-plain ${w === L ? "on" : ""}`,
                                            onClick: () => N(L),
                                            children: L === "无需" ? L : `${L} 份`,
                                        },
                                        L,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    e.jsxs("button", {
                        className: "m26-row btn-plain tap",
                        onClick: () => R((L) => !L),
                        children: [
                            e.jsx("span", { className: "m26-row-l", children: "无接触配送" }),
                            e.jsx("span", {
                                className: "m26-row-v",
                                children: e.jsx("small", { children: "骑手放门口后打电话" }),
                            }),
                            e.jsx("span", { className: `ios-switch ${q ? "on" : ""}` }),
                        ],
                    }),
                    e.jsxs("label", {
                        className: "m26-row m26-row-input",
                        children: [
                            e.jsx("span", { className: "m26-row-l", children: "备注" }),
                            e.jsx("input", {
                                value: K,
                                onChange: (L) => T(L.target.value),
                                placeholder: "少辣 / 多给纸巾 / 别按门铃",
                                maxLength: 40,
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(G, { title: "付款", children: e.jsx(la, { wallet: g, value: a, onChange: o, total: E }) }),
            e.jsxs(G, {
                title: "价格明细",
                children: [
                    e.jsxs(P, { label: `餐品 × ${k}`, children: ["¥", z] }),
                    e.jsxs(P, { label: "打包费", children: ["¥", O] }),
                    e.jsx(P, {
                        label: "配送费",
                        children: F
                            ? `¥${F}`
                            : e.jsx("span", { className: "m26-free", children: "满 30 免配送费" }),
                    }),
                    e.jsx(P, {
                        label: "实付",
                        children: e.jsxs("b", { className: "m26-price", children: ["¥", E] }),
                    }),
                ],
            }),
            e.jsxs(Le, {
                children: [
                    e.jsxs("span", {
                        className: "m26-sum",
                        children: [
                            e.jsx("small", {
                                children: U || (a ? "用银行卡付" : `钱包余额 ¥${j.toFixed(2)}`),
                            }),
                            e.jsxs("b", { children: ["¥", E] }),
                        ],
                    }),
                    e.jsx("button", {
                        className: `m26-cta btn-plain ${U ? "soft" : ""}`,
                        onClick: C,
                        children: "提交订单",
                    }),
                ],
            }),
            e.jsx(ha, {
                open: v,
                onClose: () => h(!1),
                ownerId: s,
                selectedId: m,
                onPick: (L) => {
                    (u(L), h(!1));
                },
            }),
        ],
    });
}
function Ln({ ownerId: s, onBack: n, onOpen: t }) {
    var a;
    const { state: r } = B(),
        i = we(),
        l = ((a = r.mall.foodOrders) == null ? void 0 : a[s]) || [],
        [d, c] = f.useState("all"),
        p = [
            { id: "all", zh: "全部" },
            { id: "going", zh: "进行中" },
            { id: "done", zh: "已送达" },
        ],
        x = (o) => ke(o, i).done,
        g = { all: l.length, going: l.filter((o) => !x(o)).length, done: l.filter(x).length },
        j = d === "all" ? l : l.filter((o) => (d === "done" ? x(o) : !x(o)));
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, { title: "外卖订单", onBack: n }),
            e.jsx(Ee, { tabs: p, value: d, onChange: c, counts: g }),
            j.length === 0 &&
                e.jsxs("div", {
                    className: "m26-emptyblock sm",
                    children: [
                        e.jsx("span", {
                            className: "m26-emptyblock-ic",
                            children: e.jsx(Fe, { size: 26, strokeWidth: 1.7 }),
                        }),
                        e.jsx("b", { children: d === "going" ? "没有在路上的外卖" : "还没有外卖订单" }),
                    ],
                }),
            e.jsx("div", {
                className: "m26-orders",
                children: j.map((o) => {
                    const b = ke(o, i);
                    return e.jsxs(
                        "div",
                        {
                            className: "m26-order",
                            onClick: () => t(o.id),
                            role: "button",
                            tabIndex: 0,
                            children: [
                                e.jsxs("div", {
                                    className: "m26-order-h",
                                    children: [
                                        e.jsx("b", { children: o.shop }),
                                        e.jsx("span", {
                                            className: `m26-status ${b.done ? "ok" : "live"}`,
                                            children: b.done
                                                ? o.status === "done"
                                                    ? "已收餐"
                                                    : "已送达 · 待确认"
                                                : b.label,
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "m26-order-items",
                                    children: [
                                        e.jsx("span", {
                                            className: "m26-thumb sm",
                                            children: e.jsx(Be, { category: Ce(o), size: 26 }),
                                        }),
                                        e.jsxs("div", {
                                            className: "m26-order-one",
                                            children: [
                                                e.jsxs("b", {
                                                    children: [o.dish, o.qty > 1 ? ` × ${o.qty}` : ""],
                                                }),
                                                e.jsx(se, { text: o.dish }),
                                                e.jsx("span", { children: o.note || He(Ce(o)) }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "m26-order-sum",
                                            children: [
                                                e.jsxs("b", { children: ["¥", o.total] }),
                                                e.jsx("span", { children: J(o.createdAt) }),
                                            ],
                                        }),
                                    ],
                                }),
                                !b.done &&
                                    e.jsxs("div", {
                                        className: "m26-order-track live",
                                        children: [
                                            e.jsx(Fe, { size: 12, strokeWidth: 2.2 }),
                                            b.index >= 3
                                                ? `骑手距你 ${b.distanceKm.toFixed(1)} km · 约 ${b.minutesLeft} 分钟`
                                                : `${b.steps[b.index].text} · 预计 ${J(b.eta).replace(/^今天 /, "")} 送达`,
                                        ],
                                    }),
                                o.innerNote &&
                                    e.jsxs("div", {
                                        className: "inner-note",
                                        children: [o.innerNote, e.jsx(se, { text: o.innerNote })],
                                    }),
                            ],
                        },
                        o.id,
                    );
                }),
            }),
        ],
    });
}
function Pn({ order: s, progress: n }) {
    const t = [...String((s == null ? void 0 : s.id) || "x")].reduce(
            (a, o) => (a * 31 + o.charCodeAt(0)) >>> 0,
            7,
        ),
        r = 360,
        i = 210,
        l = { x: 52, y: 44 + (t % 30) },
        d = { x: r - 56, y: i - 46 - ((t >>> 4) % 30) },
        c = { x: r * (0.35 + ((t >>> 8) % 30) / 100), y: i * (0.85 - ((t >>> 12) % 40) / 100) },
        x = ((a) => ({
            x: (1 - a) ** 2 * l.x + 2 * (1 - a) * a * c.x + a * a * d.x,
            y: (1 - a) ** 2 * l.y + 2 * (1 - a) * a * c.y + a * a * d.y,
        }))(Math.max(0, Math.min(1, n))),
        g = `M${l.x},${l.y} Q${c.x},${c.y} ${d.x},${d.y}`,
        j = [];
    for (let a = 0; a < 5; a++)
        j.push(
            e.jsx(
                "line",
                {
                    x1: "0",
                    x2: r,
                    y1: 20 + a * 44 + ((t >>> a) % 12),
                    y2: 16 + a * 44 + ((t >>> (a + 3)) % 12),
                },
                `h${a}`,
            ),
        );
    for (let a = 0; a < 7; a++)
        j.push(
            e.jsx(
                "line",
                {
                    y1: "0",
                    y2: i,
                    x1: 14 + a * 56 + ((t >>> a) % 14),
                    x2: 20 + a * 56 + ((t >>> (a + 2)) % 14),
                },
                `v${a}`,
            ),
        );
    return e.jsx("div", {
        className: "m26-map",
        children: e.jsxs("svg", {
            viewBox: `0 0 ${r} ${i}`,
            preserveAspectRatio: "xMidYMid slice",
            "aria-hidden": !0,
            children: [
                e.jsx("rect", { width: r, height: i, fill: "#f2f2f2" }),
                e.jsx("rect", { x: r * 0.62, y: "8", width: "90", height: "56", rx: "12", fill: "#e5e5e5" }),
                e.jsx("rect", { x: "10", y: i - 70, width: "80", height: "58", rx: "12", fill: "#e5e5e5" }),
                e.jsx("g", { stroke: "#fff", strokeWidth: "9", strokeLinecap: "round", children: j }),
                e.jsx("path", {
                    d: g,
                    fill: "none",
                    stroke: "#c7c7c7",
                    strokeWidth: "5",
                    strokeLinecap: "round",
                    strokeDasharray: "1 9",
                }),
                e.jsx("path", {
                    d: g,
                    fill: "none",
                    stroke: "#111",
                    strokeWidth: "5",
                    strokeLinecap: "round",
                    pathLength: "1",
                    strokeDasharray: `${n} 1`,
                }),
                e.jsxs("g", {
                    transform: `translate(${l.x} ${l.y})`,
                    children: [
                        e.jsx("circle", { r: "15", fill: "#111" }),
                        e.jsx("path", {
                            d: "M-6 -2 h12 v8 h-12z M-7 -3 l2 -5 h10 l2 5",
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: "1.8",
                            strokeLinejoin: "round",
                        }),
                    ],
                }),
                e.jsxs("g", {
                    transform: `translate(${d.x} ${d.y})`,
                    children: [
                        e.jsx("circle", { r: "15", fill: "#fff", stroke: "#111", strokeWidth: "2.5" }),
                        e.jsx("path", { d: "M-6 1 l6 -6 l6 6 v6 h-12z", fill: "#111" }),
                    ],
                }),
                n > 0 &&
                    n < 1 &&
                    e.jsxs("g", {
                        transform: `translate(${x.x} ${x.y})`,
                        children: [
                            e.jsx("circle", { r: "18", fill: "rgba(0,0,0,.14)", className: "m26-pulse" }),
                            e.jsx("circle", { r: "10", fill: "#000", stroke: "#fff", strokeWidth: "3" }),
                        ],
                    }),
            ],
        }),
    });
}
function ua({ ownerId: s, orderId: n, onBack: t }) {
    var y, k;
    const { state: r, mallOrderPatch: i } = B(),
        l = V(),
        d = we(1e4),
        [c, p] = f.useState(!1),
        [x, g] = f.useState(""),
        j = ((y = r.mall.foodOrders) == null ? void 0 : y[s]) || [],
        a = n ? j.find(($) => $.id === n) : j.find(($) => !ke($, d).done) || j[0];
    if (!a)
        return e.jsxs("div", {
            className: "mall-view",
            children: [
                e.jsx(ee, { title: "外卖订单", onBack: t }),
                e.jsxs("div", {
                    className: "m26-emptyblock sm",
                    children: [
                        e.jsx("span", {
                            className: "m26-emptyblock-ic",
                            children: e.jsx(Fe, { size: 26, strokeWidth: 1.7 }),
                        }),
                        e.jsx("b", { children: "还没有外卖订单" }),
                    ],
                }),
            ],
        });
    const o = ke(a, d),
        b = ya(a),
        m = Ce(a),
        u = a.status === "done",
        v = o.done
            ? u
                ? "已收餐"
                : "外卖到了"
            : o.index >= 3
              ? `约 ${o.minutesLeft} 分钟送达`
              : o.steps[o.index].label,
        h = o.done
            ? u
                ? `${J(o.eta)} 送达 · 已确认收餐${a.confirmedAt ? `（${J(a.confirmedAt).replace(/^今天 /, "")}）` : ""}`
                : `${J(o.eta)} 骑手送达 · ${a.contactless ? "按备注放在门口" : "骑手在等你取餐"}`
            : o.index >= 3
              ? `骑手距你 ${o.distanceKm.toFixed(1)} km · 预计 ${J(o.eta).replace(/^今天 /, "")} 到`
              : `${o.steps[o.index].text} · 预计 ${J(o.eta).replace(/^今天 /, "")} 送达`;
    return e.jsxs("div", {
        className: "mall-view m26-page",
        children: [
            e.jsx(ee, { title: a.shop, onBack: t }),
            e.jsx(Pn, { order: a, progress: o.riderProgress }),
            e.jsxs("div", {
                className: `m26-hero-status ${o.done ? "ok" : "live"} tight`,
                children: [
                    e.jsx("h2", { children: v }),
                    e.jsx("p", { children: h }),
                    (() => {
                        const $ = o.steps.filter((S) => S.key !== "accepted");
                        return e.jsx(pa, { steps: $, index: $.filter((S) => S.done).length - 1 });
                    })(),
                ],
            }),
            o.index >= 3 &&
                !o.done &&
                e.jsxs("div", {
                    className: "m26-rider",
                    children: [
                        e.jsx("span", { className: "m26-rider-av", children: b.name.slice(0, 1) }),
                        e.jsxs("div", {
                            children: [
                                e.jsx("b", { children: b.name }),
                                e.jsxs("small", { children: ["★ ", b.rating, " · 已送 ", b.trips, " 单"] }),
                            ],
                        }),
                        e.jsx("button", {
                            className: "m26-round btn-plain",
                            onClick: () => p(!0),
                            "aria-label": "给骑手留言",
                            children: e.jsx(ps, { size: 16 }),
                        }),
                        e.jsx("button", {
                            className: "m26-round dark btn-plain",
                            onClick: () => l(`正在呼叫${b.name}…`),
                            "aria-label": "联系骑手",
                            children: e.jsx(Rn, {}),
                        }),
                    ],
                }),
            !!((k = a.riderMsgs) != null && k.length) &&
                e.jsx(G, {
                    title: "给骑手的留言",
                    children: a.riderMsgs.map(($, S) =>
                        e.jsx(P, { label: J($.at).replace(/^今天 /, ""), children: $.text }, S),
                    ),
                }),
            e.jsx(G, { title: "配送进度", children: e.jsx(xa, { steps: o.steps }) }),
            e.jsxs(G, {
                title: a.shop,
                children: [
                    e.jsxs("div", {
                        className: "m26-ci static",
                        children: [
                            e.jsx("span", {
                                className: "m26-thumb",
                                children: e.jsx(Be, { category: m, size: 34 }),
                            }),
                            e.jsxs("div", {
                                className: "m26-ci-main",
                                children: [
                                    e.jsx("b", { children: a.dish }),
                                    e.jsx(se, { text: a.dish }),
                                    e.jsx("span", {
                                        className: "m26-ci-sub",
                                        children: [He(m), a.shopArea, a.note].filter(Boolean).join(" · "),
                                    }),
                                    e.jsxs("div", {
                                        className: "m26-ci-foot",
                                        children: [
                                            e.jsxs("span", {
                                                className: "m26-price sm",
                                                children: ["¥", a.total],
                                            }),
                                            e.jsxs("span", {
                                                className: "m26-x",
                                                children: ["× ", a.qty || 1],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    a.pack != null &&
                        e.jsxs(P, {
                            label: "打包费 / 配送费",
                            children: ["¥", a.pack, " / ", a.fee ? `¥${a.fee}` : "免"],
                        }),
                ],
            }),
            a.innerNote &&
                e.jsxs("div", {
                    className: "m26-note",
                    children: [
                        e.jsx("small", { children: "下单时在想" }),
                        a.innerNote,
                        e.jsx(se, { text: a.innerNote }),
                    ],
                }),
            e.jsxs(G, {
                title: "订单信息",
                children: [
                    a.addressSnapshot &&
                        e.jsxs(P, {
                            label: "送达地址",
                            children: [
                                a.addressSnapshot.address,
                                a.addressSnapshot.unit ? ` ${a.addressSnapshot.unit}` : "",
                            ],
                        }),
                    e.jsxs(P, {
                        label: "送达方式",
                        children: [
                            a.contactless ? "无接触配送" : "当面交付",
                            a.scheduled ? ` · ${a.eta}` : "",
                        ],
                    }),
                    a.utensils &&
                        e.jsx(P, {
                            label: "餐具",
                            children: a.utensils === "无需" ? "无需餐具" : `${a.utensils} 份`,
                        }),
                    a.deliveryNote &&
                        e.jsxs(P, {
                            label: "备注",
                            children: [a.deliveryNote, e.jsx(se, { text: a.deliveryNote })],
                        }),
                    a.autoGenerated && a.riderName && e.jsx(P, { label: "骑手", children: a.riderName }),
                    e.jsx(P, { label: "下单时间", children: Ie(new Date(a.createdAt)) }),
                ],
            }),
            o.done &&
                a.status !== "done" &&
                e.jsxs(Le, {
                    children: [
                        e.jsxs("span", {
                            className: "m26-sum",
                            children: [
                                e.jsx("small", { children: a.contactless ? "已放门口" : "骑手已到" }),
                                e.jsxs("b", { children: ["¥", a.total] }),
                            ],
                        }),
                        e.jsx("button", {
                            className: "m26-cta btn-plain",
                            onClick: () => {
                                (i(s, "food", a.id, { status: "done", confirmedAt: Date.now() }),
                                    l("已确认收餐"));
                            },
                            children: "确认收餐",
                        }),
                    ],
                }),
            e.jsx(fe, {
                open: c,
                onClose: () => p(!1),
                title: `给${b.name}留言`,
                children: e.jsxs("div", {
                    className: "px-4 pb-6",
                    children: [
                        e.jsx("div", {
                            className: "ios-list",
                            children: e.jsx(Ne, {
                                label: "留言",
                                children: e.jsx(ve, { value: x, onChange: g, placeholder: "自己写要说的话" }),
                            }),
                        }),
                        e.jsx("button", {
                            className: "btn-ios primary",
                            style: { marginTop: 12 },
                            onClick: () => {
                                const $ = x.trim();
                                $ &&
                                    (i(s, "food", a.id, {
                                        riderMsgs: [
                                            ...(a.riderMsgs || []),
                                            { text: $.slice(0, 60), at: Date.now() },
                                        ],
                                    }),
                                    g(""),
                                    p(!1),
                                    l("留言已发给骑手"));
                            },
                            children: "发送",
                        }),
                    ],
                }),
            }),
        ],
    });
}
const Wn = ua;
function Rn() {
    return e.jsx("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": !0,
        children: e.jsx("path", {
            d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",
        }),
    });
}
function Fn({ ownerId: s, onBack: n }) {
    var a;
    const { state: t, mallAddrAppend: r, mallAddrRemove: i, mallAddrSetDefault: l } = B(),
        d = ((a = t.mall.addresses) == null ? void 0 : a[s]) || [],
        [c, p] = f.useState(!1),
        [x, g] = f.useState({ name: "", phone: "", address: "", tag: "家", unit: "", note: "" }),
        j = () => {
            !x.name.trim() ||
                !x.phone.trim() ||
                !x.address.trim() ||
                (r(s, x), g({ name: "", phone: "", address: "", tag: "家", unit: "", note: "" }), p(!1));
        };
    return e.jsxs("div", {
        className: "mall-view",
        children: [
            e.jsx(ee, { title: "收货地址", onBack: n }),
            d.length === 0 &&
                e.jsx("div", {
                    className: "mall-empty",
                    style: { marginTop: 30 },
                    children: "还没有地址，加一个",
                }),
            d.map((o) =>
                e.jsxs(
                    "div",
                    {
                        className: "address-card static",
                        children: [
                            e.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            e.jsx(je, { size: 13 }),
                                            e.jsx("b", { children: o.name }),
                                            o.tag &&
                                                e.jsx("span", {
                                                    className: "addr-quick-chip on",
                                                    style: { padding: "2px 8px", fontSize: 10 },
                                                    children: o.tag,
                                                }),
                                            e.jsx("span", { className: "mall-muted", children: o.phone }),
                                        ],
                                    }),
                                    o.isDefault && e.jsx("span", { className: "tag", children: "默认" }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "mall-muted",
                                style: { marginTop: 6, fontSize: 13 },
                                children: [o.address, o.unit ? ` · ${o.unit}` : ""],
                            }),
                            o.note &&
                                e.jsxs("div", {
                                    className: "mall-muted",
                                    style: { marginTop: 4, fontSize: 12 },
                                    children: ["备注：", o.note],
                                }),
                            e.jsxs("div", {
                                className: "flex gap-2",
                                style: { marginTop: 8 },
                                children: [
                                    !o.isDefault &&
                                        e.jsx("button", {
                                            className: "ios-capsule sm btn-plain",
                                            onClick: () => l(s, o.id),
                                            children: "设为默认",
                                        }),
                                    e.jsxs("button", {
                                        className: "ios-capsule sm btn-plain",
                                        onClick: () => i(s, o.id),
                                        children: [e.jsx(Ge, { size: 12 }), " 删除"],
                                    }),
                                ],
                            }),
                        ],
                    },
                    o.id,
                ),
            ),
            c
                ? e.jsxs("div", {
                      className: "addr-form-list",
                      style: { marginTop: 12 },
                      children: [
                          e.jsx("div", {
                              className: "addr-quick-chips",
                              children: ["家", "公司", "学校", "其他"].map((o) =>
                                  e.jsx(
                                      "button",
                                      {
                                          className: `addr-quick-chip ${x.tag === o ? "on" : ""}`,
                                          onClick: () => g({ ...x, tag: o }),
                                          children: o,
                                      },
                                      o,
                                  ),
                              ),
                          }),
                          e.jsxs("div", {
                              className: "addr-form-row",
                              children: [
                                  e.jsx("span", { className: "lbl", children: "收件人" }),
                                  e.jsx("input", {
                                      className: "val",
                                      value: x.name,
                                      onChange: (o) => g({ ...x, name: o.target.value }),
                                      placeholder: "姓名",
                                  }),
                              ],
                          }),
                          e.jsxs("div", {
                              className: "addr-form-row",
                              children: [
                                  e.jsx("span", { className: "lbl", children: "电话" }),
                                  e.jsx("input", {
                                      className: "val",
                                      value: x.phone,
                                      onChange: (o) => g({ ...x, phone: o.target.value }),
                                      placeholder: "11 位手机号",
                                      inputMode: "numeric",
                                  }),
                              ],
                          }),
                          e.jsxs("div", {
                              className: "addr-form-row",
                              children: [
                                  e.jsx("span", { className: "lbl", children: "省市区街道" }),
                                  e.jsx("input", {
                                      className: "val",
                                      value: x.address,
                                      onChange: (o) => g({ ...x, address: o.target.value }),
                                      placeholder: "详细地址",
                                  }),
                              ],
                          }),
                          e.jsxs("div", {
                              className: "addr-form-row",
                              children: [
                                  e.jsx("span", { className: "lbl", children: "门牌 / 楼层" }),
                                  e.jsx("input", {
                                      className: "val",
                                      value: x.unit,
                                      onChange: (o) => g({ ...x, unit: o.target.value }),
                                      placeholder: "例：3-1602 / A 座 5 层",
                                  }),
                              ],
                          }),
                          e.jsxs("div", {
                              className: "addr-form-row",
                              children: [
                                  e.jsx("span", { className: "lbl", children: "备注" }),
                                  e.jsx("input", {
                                      className: "val",
                                      value: x.note,
                                      onChange: (o) => g({ ...x, note: o.target.value }),
                                      placeholder: "例：门口保安处 / 放门口即可",
                                  }),
                              ],
                          }),
                          e.jsx("div", {
                              style: { padding: 12 },
                              children: e.jsx("button", {
                                  className: "btn-ios primary",
                                  onClick: j,
                                  children: "保存地址",
                              }),
                          }),
                      ],
                  })
                : e.jsxs("button", {
                      className: "ios-capsule btn-plain",
                      style: { marginTop: 12 },
                      onClick: () => p(!0),
                      children: [e.jsx(Te, { size: 12 }), " 添加地址"],
                  }),
        ],
    });
}
function Bn({ ownerId: s, onBack: n }) {
    const { state: t, kinshipIssue: r, kinshipPatch: i, kinshipRevoke: l, patchChar: d } = B(),
        c = V(),
        p = t.mall.kinshipCards || [],
        x = p.filter((m) => m.holderId === s),
        g = p.filter((m) => m.granterId === s),
        [j, a] = f.useState(!1),
        [o, b] = f.useState(!1);
    return e.jsxs("div", {
        className: "mall-view",
        children: [
            e.jsx(ee, { title: "亲属卡", sub: "预授权额度，可暂停/解绑", onBack: n }),
            e.jsx("div", {
                className: "mall-head",
                style: { marginTop: 4 },
                children: e.jsx("h2", { children: "我持有的卡" }),
            }),
            x.length === 0 && e.jsx("div", { className: "mall-empty", children: "还没有别人给你的卡" }),
            x.map((m) =>
                e.jsxs(
                    "div",
                    {
                        className: "kinship-card",
                        children: [
                            e.jsxs("div", {
                                className: "mall-box-row",
                                children: [
                                    e.jsxs("b", { children: ["来自 ", ie(t, m.granterId), " 的卡"] }),
                                    e.jsx("span", {
                                        className: `tag ${m.active ? "" : "off"}`,
                                        children: m.active ? "生效中" : "已暂停",
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "kin-amt",
                                children: [
                                    "¥ ",
                                    Math.max(0, (m.limit || 0) - (m.used || 0)).toFixed(2),
                                    e.jsxs("span", { children: [" / ", Number(m.limit || 0).toFixed(0)] }),
                                ],
                            }),
                            m.note &&
                                e.jsx("div", {
                                    className: "mall-muted",
                                    style: { fontSize: 12, marginTop: 2 },
                                    children: m.note,
                                }),
                            e.jsxs("div", {
                                className: "flex gap-2",
                                style: { marginTop: 10 },
                                children: [
                                    e.jsx("button", {
                                        className: "ios-capsule sm btn-plain",
                                        onClick: () => i(m.id, { active: !m.active }),
                                        children: m.active
                                            ? e.jsxs(e.Fragment, {
                                                  children: [e.jsx(Vs, { size: 12 }), " 暂停"],
                                              })
                                            : e.jsxs(e.Fragment, {
                                                  children: [e.jsx(Xs, { size: 12 }), " 恢复"],
                                              }),
                                    }),
                                    e.jsxs("button", {
                                        className: "ios-capsule sm btn-plain",
                                        onClick: () => i(m.id, { used: 0, cycleStart: Date.now() }),
                                        children: [e.jsx(Js, { size: 12 }), " 重置额度"],
                                    }),
                                    e.jsxs("button", {
                                        className: "ios-capsule sm btn-plain",
                                        onClick: () => l(m.id),
                                        children: [e.jsx(cs, { size: 12 }), " 解绑"],
                                    }),
                                ],
                            }),
                        ],
                    },
                    m.id,
                ),
            ),
            e.jsx("div", {
                className: "mall-head",
                style: { marginTop: 16 },
                children: e.jsx("h2", { children: "我发出的卡" }),
            }),
            g.length === 0 && e.jsx("div", { className: "mall-empty", children: "还没给谁发过卡" }),
            g.map((m) =>
                e.jsxs(
                    "div",
                    {
                        className: "kinship-card",
                        children: [
                            e.jsxs("div", {
                                className: "mall-box-row",
                                children: [
                                    e.jsxs("b", { children: ["发给 ", ie(t, m.holderId), " 的卡"] }),
                                    e.jsx("span", {
                                        className: `tag ${m.active ? "" : "off"}`,
                                        children: m.active ? "生效中" : "已暂停",
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "kin-amt",
                                children: [
                                    "¥ ",
                                    Math.max(0, (m.limit || 0) - (m.used || 0)).toFixed(2),
                                    e.jsxs("span", { children: [" / ", Number(m.limit || 0).toFixed(0)] }),
                                ],
                            }),
                            m.note &&
                                e.jsx("div", {
                                    className: "mall-muted",
                                    style: { fontSize: 12, marginTop: 2 },
                                    children: m.note,
                                }),
                            e.jsxs("div", {
                                className: "flex gap-2",
                                style: { marginTop: 10 },
                                children: [
                                    e.jsx("button", {
                                        className: "ios-capsule sm btn-plain",
                                        onClick: () => i(m.id, { active: !m.active }),
                                        children: m.active ? "暂停" : "恢复",
                                    }),
                                    e.jsxs("button", {
                                        className: "ios-capsule sm btn-plain",
                                        onClick: () => l(m.id),
                                        children: [e.jsx(cs, { size: 12 }), " 收回"],
                                    }),
                                ],
                            }),
                        ],
                    },
                    m.id,
                ),
            ),
            e.jsxs("div", {
                className: "flex gap-2",
                style: { marginTop: 20 },
                children: [
                    e.jsx("button", {
                        className: "btn-ios ghost compact flex-1",
                        onClick: () => b(!0),
                        children: "申请一张",
                    }),
                    e.jsx("button", {
                        className: "btn-ios primary compact flex-1",
                        onClick: () => a(!0),
                        children: "发一张",
                    }),
                ],
            }),
            e.jsx(Es, {
                open: j,
                onClose: () => a(!1),
                ownerId: s,
                mode: "issue",
                onSubmit: ({ targetId: m, limit: u, note: v }) => {
                    const h = xe("kin_");
                    (r({ id: h, granterId: s, holderId: m, limit: u, note: v }),
                        m !== "me" &&
                            d(m, (y) => ({
                                messages: [
                                    ...y.messages,
                                    {
                                        id: xe("m_"),
                                        role: "user",
                                        type: "kinship_card",
                                        kind: "grant",
                                        cardId: h,
                                        granterId: s,
                                        holderId: m,
                                        limit: u,
                                        note: v,
                                        status: "active",
                                        createdAt: Date.now(),
                                    },
                                ],
                            })),
                        a(!1),
                        c("已发出一张亲属卡"));
                },
            }),
            e.jsx(Es, {
                open: o,
                onClose: () => b(!1),
                ownerId: s,
                mode: "apply",
                onSubmit: ({ targetId: m, limit: u, note: v }) => {
                    (d(m, (h) => ({
                        messages: [
                            ...h.messages,
                            {
                                id: xe("m_"),
                                role: "user",
                                type: "kinship_card",
                                kind: "apply",
                                granterId: m,
                                holderId: s,
                                limit: u,
                                note: v,
                                status: "pending",
                                createdAt: Date.now(),
                            },
                        ],
                    })),
                        b(!1),
                        c("已发出申请，等待 TA 回应"));
                },
            }),
        ],
    });
}
function Es({ open: s, onClose: n, ownerId: t, mode: r, onSubmit: i }) {
    const { state: l } = B(),
        [d, c] = f.useState(""),
        [p, x] = f.useState("2000"),
        [g, j] = f.useState("");
    f.useEffect(() => {
        s && (c(""), x("2000"), j(""));
    }, [s]);
    const a = l.characters.filter((b) => b.id !== t),
        o = !!d && Number(p) > 0;
    return e.jsx(fe, {
        open: s,
        onClose: n,
        title: r === "issue" ? "发一张亲属卡" : "申请一张亲属卡",
        children: e.jsxs("div", {
            className: "px-4 pb-6",
            children: [
                e.jsx("div", {
                    className: "ios-footnote mall-muted",
                    style: { marginBottom: 10 },
                    children:
                        r === "issue"
                            ? "发给谁：TA 可以在自己的商城里刷这张卡，钱从你的钱包扣。你随时可以暂停/解绑。"
                            : "找谁申请：TA 同意后会绑一张卡到你名下，你在商城结算时能刷。",
                }),
                a.length === 0
                    ? e.jsx("div", { className: "mall-empty", children: "还没有联系人" })
                    : e.jsx("div", {
                          className: "ios-list",
                          children: a.map((b) =>
                              e.jsxs(
                                  "button",
                                  {
                                      className: `ios-row btn-plain ${d === b.id ? "on" : ""}`,
                                      onClick: () => c(b.id),
                                      children: [
                                          e.jsx("span", { className: "row-title", children: Me(b) }),
                                          e.jsx("span", {
                                              className: "mall-muted",
                                              children: d === b.id ? "✓" : "",
                                          }),
                                      ],
                                  },
                                  b.id,
                              ),
                          ),
                      }),
                e.jsxs("div", {
                    className: "ios-list",
                    style: { marginTop: 10 },
                    children: [
                        e.jsx(Ne, {
                            label: "额度上限",
                            children: e.jsx(ve, { type: "number", value: p, onChange: x, placeholder: "¥" }),
                        }),
                        e.jsx(Ne, {
                            label: "备注",
                            children: e.jsx(ve, { value: g, onChange: j, placeholder: "可选" }),
                        }),
                    ],
                }),
                e.jsx("button", {
                    className: "btn-ios primary",
                    style: { marginTop: 12 },
                    disabled: !o,
                    onClick: () => i({ targetId: d, limit: Number(p), note: g }),
                    children: r === "issue" ? "发送这张卡" : "发出申请",
                }),
            ],
        }),
    });
}
function ee({ title: s, sub: n, onBack: t, right: r }) {
    return e.jsxs("header", {
        className: "m26-top",
        children: [
            e.jsx("button", {
                className: "m26-back btn-plain",
                onClick: t,
                "aria-label": "返回",
                children: e.jsx(ds, { size: 19, strokeWidth: 2.1 }),
            }),
            e.jsxs("div", {
                className: "m26-top-t",
                children: [e.jsx("b", { children: s }), n && e.jsx("small", { children: n })],
            }),
            e.jsx("span", { className: "m26-top-r", children: r }),
        ],
    });
}
function Cs(s) {
    var l, d, c;
    const { state: n } = B(),
        t = (l = n.mall.productCache) == null ? void 0 : l[s],
        r = (d = t == null ? void 0 : t.items) != null && d.length ? t.items : nn,
        i = (c = n.mall.customProducts) == null ? void 0 : c[s];
    return f.useMemo(() => (i != null && i.length ? [...i, ...r] : r), [i, r]);
}
function En(s) {
    var r, i;
    const { state: n } = B(),
        t = (r = n.mall.foodCache) == null ? void 0 : r[s];
    return (i = t == null ? void 0 : t.items) != null && i.length ? t.items : tn;
}
function Ss(s) {
    var t, r;
    const { state: n } = B();
    return ((r = (t = n.mall.productCache) == null ? void 0 : t[s]) == null ? void 0 : r.banner) || null;
}
function _n(s, n) {
    return !n || n === "all" ? s : s.filter((t) => Ce(t) === n);
}
function ja(s, n) {
    return !n || n === "all" ? s : s.filter((t) => ne(t) === n);
}
export { Qn as default, Ws as productShareCard };
