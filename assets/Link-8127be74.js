import { r as u, j as e } from "./vendor-react-3a46a5d3.js";
import {
    aJ as Ot,
    bV as Lt,
    bv as vt,
    e7 as yt,
    cT as St,
    e8 as Pt,
    bo as Et,
    t as Dt,
    e6 as qt,
    c0 as zt,
} from "./vendor-icons-e63d3118.js";
import {
    u as Oa,
    a as Ga,
    Y as lt,
    lf as wt,
    lg as Ft,
    dx as na,
    lh as Ut,
    li as xa,
    lj as Bt,
    lk as ct,
    aq as Gt,
    ar as Wt,
    ll as Ht,
    lm as Te,
    ln as Nt,
    cp as Vt,
    c as ta,
    l as Aa,
    lo as qa,
    ay as Ra,
    lp as ot,
    lq as Jt,
    lr as Ye,
    ls as Kt,
    lt as mt,
    lu as dt,
    lv as Yt,
    au as Qt,
    aw as Xt,
    lw as Zt,
    lx as It,
    ly as en,
    k_ as an,
    ag as tn,
    lz as ut,
    lA as ft,
    lB as nn,
    lC as ht,
    lD as Fe,
    lE as sn,
    lF as rn,
    lG as za,
    lH as pt,
    lI as ln,
    lJ as gt,
    l6 as kt,
    lK as cn,
    l8 as on,
    A as ka,
    lb as mn,
    b9 as _t,
    kN as dn,
    dA as Pe,
    es as fa,
    dB as ha,
    kP as Ke,
    kR as pa,
    bj as xt,
    lL as un,
    lM as Ct,
    lN as Wa,
    lO as fn,
    lP as hn,
    lQ as pn,
    dj as gn,
} from "./app-2c902988.js";
import {
    G as kn,
    R as xn,
    i as bn,
    j as jn,
    N as vn,
    T as Fa,
    d as yn,
    e as Sn,
    k as wn,
} from "./GroupMoney-d3c13e8f.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const Nn = Gt(Wt, "Link"),
    _n = 2500,
    Ue = new Map(),
    Ua = new Set();
function Cn(t, s) {
    const [, S] = u.useState(0),
        M = s.join(",");
    return (
        u.useEffect(() => {
            let A = !0;
            for (const g of s)
                !g ||
                    Ue.has(g) ||
                    Ua.has(g) ||
                    (Ua.add(g),
                    un(t, g)
                        .then((x) => {
                            x != null && x.dataUrl && Ue.set(g, x.dataUrl);
                        })
                        .catch((x) => {
                            (x == null ? void 0 : x.status) === 404 && Ue.set(g, null);
                        })
                        .finally(() => {
                            (Ua.delete(g), A && S((x) => x + 1));
                        }));
            return () => {
                A = !1;
            };
        }, [t, M]),
        (A) => (A && Ue.get(A)) || ""
    );
}
const $n = (t) => !!t && Ue.has(t) && Ue.get(t) === null;
async function An(t) {
    let s = t;
    if (
        (typeof t == "string" && t.startsWith("asset:") && (s = await Ct(t)),
        typeof s == "string" && /^https?:/.test(s))
    ) {
        const M = await (await fetch(s)).blob();
        s = await new Promise((A, g) => {
            const x = new FileReader();
            ((x.onload = () => A(x.result)), (x.onerror = g), x.readAsDataURL(M));
        });
    }
    if (typeof s != "string" || !s.startsWith("data:image/")) throw new Error("这张表情读不出来");
    if (s.startsWith("data:image/gif") && s.length < 1e3 * 1024) return s;
    const S = await Wa(s, { maxPx: 320, quality: 0.85 });
    return S && S.startsWith("data:image/") ? S : s;
}
function Rn(t, s) {
    var M;
    const S = t.stickerBindings || {};
    return (((M = t.gallery) == null ? void 0 : M.stickers) || []).filter((A) => {
        const g = S[A.category || "未分类"] || [];
        return g.length === 0 || g.includes(s == null ? void 0 : s.id);
    });
}
const ga = (t, s) => {
        var S, M, A, g, x, m;
        return s === "me"
            ? Number((M = (S = t.wallet) == null ? void 0 : S.me) == null ? void 0 : M.balance) || 0
            : Number(
                  ((x = (g = (A = t.wallet) == null ? void 0 : A.chars) == null ? void 0 : g[s]) == null
                      ? void 0
                      : x.balance) ??
                      ((m = t.wallet) == null ? void 0 : m.defaultCharBalance) ??
                      1e4,
              ) || 0;
    },
    Tn = 8e3,
    Ba = {
        room_not_found: "没有这个房间 —— 检查一下房间码，或者房间已经解散了。",
        room_full: "这个房间人满了。",
        room_media_full: "这个房间的图片和语音存满了（100MB），过一阵旧的会自动清掉。",
        too_many_rooms: "你同时在的房间太多了，先退出几个不用的。",
        char_required: "先选一个要带进去的人。",
        bad_code: "房间码是 6 位。",
        code_busy: "服务器忙，再点一次。",
        packet_empty: "手慢了，红包派完了",
        packet_expired: "红包已过期",
        media_too_big: "文件太大了，发不出去",
        bad_target: "转账对象不在房间里了",
        not_owner: "只有群主能这么做。",
        not_admin: "只有群主和管理员能这么做。",
        not_allowed: "管理员只能移出普通成员，群主不能被移出。",
        bad_avatar: "这张图用不了，换一张小一点的。",
    },
    ve = (t) =>
        Ba[t == null ? void 0 : t.message] ||
        ((t == null ? void 0 : t.status) === 429
            ? "点得太快了，歇几秒再试。"
            : t != null && t.status
              ? `出错了（${t.message}）`
              : "连不上服务器，检查一下网络。"),
    Mn = (t) => {
        const s = new Date(t);
        return Number.isFinite(s.getTime())
            ? new Date().toDateString() === s.toDateString()
                ? s.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: !1 })
                : `${s.getMonth() + 1}/${s.getDate()}`
            : "";
    };
async function Ta(t) {
    try {
        return (await navigator.clipboard.writeText(t), !0);
    } catch {}
    try {
        const s = document.createElement("textarea");
        ((s.value = t),
            (s.style.position = "fixed"),
            (s.style.opacity = "0"),
            document.body.appendChild(s),
            s.select());
        const S = document.execCommand("copy");
        return (s.remove(), S);
    } catch {
        return !1;
    }
}
async function Ma(t) {
    if (!t) return "";
    try {
        const s = await Wa(t, { maxPx: 96, quality: 0.72, remote: "inline", passFallback: !0 });
        if (
            typeof s == "string" &&
            (s.startsWith("data:image/") || s.startsWith("https://")) &&
            s.length < 6e4
        )
            return s;
    } catch {}
    return "";
}
async function On({ me: t, char: s, meName: S, intro: M }) {
    const [A, g] = await Promise.all([Ma(t == null ? void 0 : t.avatar), Ma(s == null ? void 0 : s.avatar)]);
    return {
        me: { name: (S || na(t)).slice(0, 20), avatar: A },
        char: { name: Ra(s).slice(0, 20), avatar: g, intro: (M || "").slice(0, 80) },
    };
}
function Ln({ src: t, name: s, local: S = !1, className: M = "" }) {
    const A = e.jsx("i", { children: (s || "?").slice(0, 1) });
    return e.jsx("div", {
        className: `gc-ava ${M}`,
        children: t
            ? S
                ? e.jsx(Aa, { src: t, alt: "", fallback: A })
                : e.jsx("img", { src: t, alt: "", referrerPolicy: "no-referrer" })
            : A,
    });
}
function Vn({ onBack: t, onOpenCloud: s }) {
    var Me;
    const { state: S, patch: M } = Oa(),
        A = Ga(),
        g = lt(),
        x = ((Me = wt()) == null ? void 0 : Me.id) || "",
        [m, E] = u.useState(null),
        [o, T] = u.useState(""),
        [O, d] = u.useState(null),
        [ce, F] = u.useState(null),
        [fe, L] = u.useState(null),
        he = u.useRef(""),
        Q = u.useRef(new Map()),
        _e = u.useRef(new Map()),
        ne = u.useCallback(async () => {
            if (lt())
                try {
                    const k = await Ft(he.current),
                        D = (k.rooms || []).map((c) => ({
                            ...c,
                            avatar:
                                "avatar" in c
                                    ? (_e.current.set(c.id, c.avatar || ""), c.avatar || "")
                                    : _e.current.get(c.id) || "",
                            members: (c.members || []).map((p) => {
                                const U = `${c.id}:${p.user_id}`;
                                return p.profile
                                    ? (Q.current.set(U, p.profile), p)
                                    : { ...p, profile: Q.current.get(U) || {} };
                            }),
                        }));
                    (k.membersHash && (he.current = k.membersHash), E(D), T(""));
                } catch (k) {
                    (T(ve(k)), E((D) => D || []));
                }
        }, []);
    u.useEffect(() => {
        if (fe || !g) return;
        ne();
        const k = setInterval(() => {
            document.hidden || ne();
        }, Tn);
        return () => clearInterval(k);
    }, [fe, g, ne]);
    const V = (k, D) => {
        const c = k.room;
        M((p) => {
            var U;
            return {
                linkRooms: {
                    ...(p.linkRooms || {}),
                    [c.id]: {
                        ...Ht,
                        ...Te((U = p.linkRooms) == null ? void 0 : U[c.id]),
                        charId: D,
                        myUserId: x,
                        name: c.name || "",
                        code: c.code,
                        members: k.members || [],
                        left: !1,
                        leftAt: 0,
                        leftReason: "",
                    },
                },
            };
        });
    };
    if (fe)
        return e.jsx(Dn, {
            roomId: fe,
            onBack: () => {
                (L(null), ne());
            },
        });
    const P = { meName: na(S.me) },
        Ce = g ? Ut(S.linkRooms, o ? null : m, x) : [];
    return e.jsxs("main", {
        className: "lk-app",
        children: [
            e.jsxs("header", {
                className: "lk-top",
                children: [
                    e.jsx("button", { onClick: t, "aria-label": "返回", children: e.jsx(Ot, { size: 22 }) }),
                    e.jsx("b", { children: "联机" }),
                    e.jsx("span", {}),
                ],
            }),
            e.jsxs("section", {
                className: "lk-scroll",
                children: [
                    e.jsxs("div", {
                        className: "lk-hero",
                        children: [
                            e.jsx("h1", { children: "带着 TA 见朋友" }),
                            e.jsxs("p", {
                                children: [
                                    "你带着 TA，朋友们各带着自己的那位，几对人在一个群里。",
                                    e.jsx("br", {}),
                                    "各自的 TA 用各自手机上的 API 和记忆说话。",
                                ],
                            }),
                        ],
                    }),
                    g
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsxs("div", {
                                      className: "lk-actions",
                                      children: [
                                          e.jsxs("button", {
                                              className: "lk-action primary",
                                              onClick: () => d("create"),
                                              children: [
                                                  e.jsx("span", {
                                                      children: e.jsx(vt, { size: 20, weight: "bold" }),
                                                  }),
                                                  e.jsx("b", { children: "创建房间" }),
                                                  e.jsx("small", { children: "生成房间码，发给朋友" }),
                                              ],
                                          }),
                                          e.jsxs("button", {
                                              className: "lk-action",
                                              onClick: () => d("join"),
                                              children: [
                                                  e.jsx("span", {
                                                      children: e.jsx(yt, { size: 20, weight: "bold" }),
                                                  }),
                                                  e.jsx("b", { children: "输入房间码" }),
                                                  e.jsx("small", { children: "朋友发来的 6 位码" }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  e.jsxs("div", {
                                      className: "wx-seclabel lk-seclabel",
                                      children: [
                                          "Rooms",
                                          e.jsx("b", {
                                              children: ((m == null ? void 0 : m.length) || 0) + Ce.length,
                                          }),
                                      ],
                                  }),
                                  o && e.jsx("div", { className: "lk-err", children: o }),
                                  m === null
                                      ? e.jsx("div", { className: "lk-empty", children: "加载中…" })
                                      : m.length + Ce.length === 0
                                        ? e.jsxs("div", {
                                              className: "lk-empty",
                                              children: [
                                                  "还没有房间。",
                                                  e.jsx("br", {}),
                                                  "建一个，把房间码发给朋友；或者填朋友发来的码。",
                                              ],
                                          })
                                        : e.jsxs("div", {
                                              className: "lk-rooms",
                                              children: [
                                                  m.map((k) => {
                                                      var p, U, Z;
                                                      const D = (p = S.linkRooms) == null ? void 0 : p[k.id],
                                                          { mine: c } = xa(k.members, x);
                                                      return e.jsx(
                                                          jt,
                                                          {
                                                              r: k,
                                                              myUserId: x,
                                                              unread: Bt(D, k.last, x),
                                                              preview: ct(k.last, k.members, x, {
                                                                  ...P,
                                                                  myCharName:
                                                                      (Z =
                                                                          (U =
                                                                              c == null
                                                                                  ? void 0
                                                                                  : c.profile) == null
                                                                              ? void 0
                                                                              : U.char) == null
                                                                          ? void 0
                                                                          : Z.name,
                                                              }),
                                                              at: k.last_msg_at,
                                                              onOpen: () => L(k.id),
                                                          },
                                                          k.id,
                                                      );
                                                  }),
                                                  Ce.map((k) => {
                                                      var c, p, U;
                                                      const { mine: D } = xa(k.members, x);
                                                      return e.jsx(
                                                          jt,
                                                          {
                                                              r: { ...k, name: k.name },
                                                              myUserId: x,
                                                              left:
                                                                  k.leftReason === "gone"
                                                                      ? "群聊已不在"
                                                                      : "已退出",
                                                              preview: k.last
                                                                  ? ct(k.last, k.members, x, {
                                                                        ...P,
                                                                        myCharName:
                                                                            (p =
                                                                                (c =
                                                                                    D == null
                                                                                        ? void 0
                                                                                        : D.profile) == null
                                                                                    ? void 0
                                                                                    : c.char) == null
                                                                                ? void 0
                                                                                : p.name,
                                                                    })
                                                                  : "",
                                                              at:
                                                                  (U = k.last) == null
                                                                      ? void 0
                                                                      : U.created_at,
                                                              onOpen: () => L(k.id),
                                                          },
                                                          k.id,
                                                      );
                                                  }),
                                              ],
                                          }),
                              ],
                          })
                        : e.jsxs("div", {
                              className: "lk-login",
                              children: [
                                  e.jsx(Lt, { size: 28, weight: "duotone" }),
                                  e.jsx("b", { children: "联机要先登录账号" }),
                                  e.jsx("p", {
                                      children:
                                          "房间和房间里的话要经过服务器转给朋友，所以两边都得登录。人设、记忆和 API 密钥不会上传。",
                                  }),
                                  s && e.jsx("button", { onClick: s, children: "去登录" }),
                              ],
                          }),
                ],
            }),
            O &&
                e.jsx(En, {
                    mode: O,
                    created: ce,
                    onClose: () => {
                        (d(null), F(null));
                    },
                    onDone: async (k, D) => {
                        var c, p, U, Z;
                        (V(k, D),
                            O === "create"
                                ? (F({
                                      id: k.room.id,
                                      code: k.room.code,
                                      name: k.room.name || "",
                                      at: k.room.created_at || Date.now(),
                                      charId: D,
                                      meName:
                                          ((Z =
                                              (U =
                                                  (p =
                                                      (c = k.members) == null
                                                          ? void 0
                                                          : c.find(
                                                                (oe) => String(oe.user_id) === String(x),
                                                            )) == null
                                                      ? void 0
                                                      : p.profile) == null
                                                  ? void 0
                                                  : U.me) == null
                                              ? void 0
                                              : Z.name) || na(S.me),
                                  }),
                                  ne())
                                : (d(null), L(k.room.id)));
                    },
                    onEnter: (k) => {
                        (d(null), F(null), L(k));
                    },
                    toast: A,
                }),
        ],
    });
}
function bt({ m: t, empty: s = !1 }) {
    var M, A;
    if (s)
        return e.jsx("span", {
            className: "lk-pair empty",
            "aria-label": "空位",
            children: e.jsx("i", { children: "+" }),
        });
    const S = (g) =>
        g != null && g.avatar
            ? e.jsx("img", { src: g.avatar, alt: "", referrerPolicy: "no-referrer" })
            : e.jsx("i", { children: ((g == null ? void 0 : g.name) || "·").slice(0, 1) });
    return e.jsxs("span", {
        className: "lk-pair",
        children: [
            e.jsx("span", {
                className: "a",
                children: S((M = t == null ? void 0 : t.profile) == null ? void 0 : M.me),
            }),
            e.jsx("span", {
                className: "b",
                children: S((A = t == null ? void 0 : t.profile) == null ? void 0 : A.char),
            }),
        ],
    });
}
const Pn = (t) => {
    const s = new Date(t);
    return Number.isFinite(s.getTime())
        ? `${s.getFullYear()}年${s.getMonth() + 1}月${s.getDate()}日建群`
        : "";
};
function jt({ r: t, myUserId: s, unread: S = 0, preview: M, at: A, left: g = "", onOpen: x }) {
    const { mine: m, others: E, otherHere: o } = xa(t.members, s),
        T = [m, ...E].filter(Boolean),
        O = g || (o ? `${T.length} 对在场` : "等朋友进来"),
        d = t.avatar ? 3 : 4;
    return e.jsxs("button", {
        className: `lk-room${g ? " left" : ""}`,
        onClick: x,
        children: [
            e.jsxs("div", {
                className: "lk-room-top",
                children: [
                    e.jsxs("div", {
                        className: "lk-pairs",
                        children: [
                            t.avatar
                                ? e.jsx("img", { className: "lk-room-ava", src: t.avatar, alt: "" })
                                : null,
                            T.slice(0, d).map((ce) => e.jsx(bt, { m: ce }, ce.user_id)),
                            !g && !o && e.jsx(bt, { empty: !0 }),
                            T.length > d &&
                                e.jsxs("span", { className: "lk-more", children: ["+", T.length - d] }),
                        ],
                    }),
                    e.jsx("time", { children: A ? Mn(A) : "" }),
                ],
            }),
            e.jsxs("div", {
                className: "lk-room-name",
                children: [
                    e.jsx("b", { children: Nt(t, t.members, s) }),
                    S > 0 && e.jsx("i", { className: "lk-dot" }),
                ],
            }),
            e.jsxs("div", {
                className: "lk-room-meta",
                children: [
                    e.jsx("span", { className: `lk-state${!g && !o ? " wait" : ""}`, children: O }),
                    !g && t.created_at && e.jsx("span", { children: Pn(t.created_at) }),
                    !g && !o && t.code && e.jsx("span", { className: "mono", children: t.code }),
                ],
            }),
            t.notice && !g
                ? e.jsxs("div", {
                      className: "lk-room-notice",
                      children: [e.jsx("em", { children: "公告" }), t.notice],
                  })
                : null,
            M ? e.jsx("div", { className: "lk-room-last", children: M }) : null,
        ],
    });
}
function En({ mode: t, created: s, onClose: S, onDone: M, onEnter: A, toast: g }) {
    var k, D;
    const { state: x } = Oa(),
        m = u.useMemo(() => (x.characters || []).filter((c) => Vt(c)), [x.characters]),
        [E, o] = u.useState(() => {
            var c;
            return ((c = m.find((p) => p.id === x.activeCharId) || m[0]) == null ? void 0 : c.id) || "";
        }),
        [T, O] = u.useState(""),
        [d, ce] = u.useState(() => na(x.me)),
        [F, fe] = u.useState(""),
        [L, he] = u.useState(""),
        [Q, _e] = u.useState(!1),
        [ne, V] = u.useState(""),
        P = u.useRef(null);
    u.useEffect(() => {
        t === "join" &&
            setTimeout(() => {
                var c;
                return (c = P.current) == null ? void 0 : c.focus();
            }, 250);
    }, [t]);
    const Ce = async () => {
            let c = "";
            try {
                c = await navigator.clipboard.readText();
            } catch {}
            const p = qa(c);
            p.length === 6 ? (he(p), V("")) : V("剪贴板里没找到 6 位房间码");
        },
        Me = async () => {
            if (Q) return;
            const c = m.find((p) => p.id === E);
            if (!c) {
                V(Ba.char_required);
                return;
            }
            if (t === "join" && L.length !== 6) {
                V(Ba.bad_code);
                return;
            }
            (_e(!0), V(""));
            try {
                const p = await On({ me: x.me, char: c, meName: d.trim(), intro: F.trim() }),
                    U = t === "create" ? await fn(T.trim(), p) : await hn(L, p);
                await M(U, c.id);
            } catch (p) {
                V(ve(p));
            } finally {
                _e(!1);
            }
        };
    if (s) {
        const c = (k = x.characters) == null ? void 0 : k.find((I) => I.id === s.charId),
            p = c ? ta(c) : "TA",
            U = new Date(s.at),
            Z = `${U.getFullYear()}.${String(U.getMonth() + 1).padStart(2, "0")}.${String(U.getDate()).padStart(2, "0")}`,
            oe = s.name || "联机房间",
            se = `「${oe}」
${s.meName} 带着 ${p}，等你带着你的那位来。
打开 LiToT → 联机 → 输入房间码：${s.code}`;
        return e.jsx("div", {
            className: "lk-mask",
            onClick: S,
            children: e.jsxs("div", {
                className: "lk-sheet",
                onClick: (I) => I.stopPropagation(),
                children: [
                    e.jsx("i", { className: "lk-grab" }),
                    e.jsxs("div", {
                        className: "lk-ticket",
                        children: [
                            e.jsxs("div", {
                                className: "lk-ticket-top",
                                children: [
                                    e.jsx("small", { children: "INVITATION · LiToT" }),
                                    e.jsx("h3", { children: oe }),
                                    e.jsxs("div", {
                                        className: "lk-ticket-host",
                                        children: [
                                            e.jsxs("span", {
                                                className: "lk-pair big",
                                                children: [
                                                    e.jsx("span", {
                                                        className: "a",
                                                        children:
                                                            (D = x.me) != null && D.avatar
                                                                ? e.jsx(Aa, {
                                                                      src: x.me.avatar,
                                                                      alt: "",
                                                                      fallback: e.jsx("i", {
                                                                          children: (s.meName || "我").slice(
                                                                              0,
                                                                              1,
                                                                          ),
                                                                      }),
                                                                  })
                                                                : e.jsx("i", {
                                                                      children: (s.meName || "我").slice(
                                                                          0,
                                                                          1,
                                                                      ),
                                                                  }),
                                                    }),
                                                    e.jsx("span", {
                                                        className: "b",
                                                        children:
                                                            c != null && c.avatar
                                                                ? e.jsx(Aa, {
                                                                      src: c.avatar,
                                                                      alt: "",
                                                                      fallback: e.jsx("i", {
                                                                          children: p.slice(0, 1),
                                                                      }),
                                                                  })
                                                                : e.jsx("i", { children: p.slice(0, 1) }),
                                                    }),
                                                ],
                                            }),
                                            e.jsxs("p", {
                                                children: [
                                                    e.jsx("b", { children: s.meName }),
                                                    " 带着 ",
                                                    e.jsx("b", { children: p }),
                                                    e.jsx("br", {}),
                                                    "等你带着你的那位来",
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsx("div", { className: "lk-ticket-date", children: Z }),
                                ],
                            }),
                            e.jsx("div", { className: "lk-ticket-cut", "aria-hidden": !0 }),
                            e.jsxs("div", {
                                className: "lk-ticket-code",
                                children: [
                                    e.jsx("small", { children: "房间码" }),
                                    e.jsx("div", {
                                        className: "lk-code big",
                                        children: s.code
                                            .split("")
                                            .map((I, me) => e.jsx("span", { children: I }, me)),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "lk-sheet-row",
                        children: [
                            e.jsxs("button", {
                                onClick: async () =>
                                    g == null
                                        ? void 0
                                        : g(
                                              (await Ta(se))
                                                  ? "邀请已复制，发给朋友即可"
                                                  : "复制失败，请手动记下房间码",
                                              "success",
                                          ),
                                children: [e.jsx(St, { size: 17 }), " 复制邀请"],
                            }),
                            e.jsx("button", {
                                className: "primary",
                                onClick: () => A(s.id),
                                children: "进入房间",
                            }),
                        ],
                    }),
                    e.jsx("p", {
                        className: "lk-hint small",
                        children: "朋友在「联机 → 输入房间码」中填入后，即可带着自己的那位进入房间。",
                    }),
                ],
            }),
        });
    }
    return e.jsx("div", {
        className: "lk-mask",
        onClick: S,
        children: e.jsxs("div", {
            className: "lk-sheet",
            onClick: (c) => c.stopPropagation(),
            children: [
                e.jsx("i", { className: "lk-grab" }),
                e.jsx("h3", { children: t === "create" ? "创建房间" : "输入房间码" }),
                t === "join" &&
                    e.jsxs("label", {
                        className: "lk-code-input",
                        onClick: () => {
                            var c;
                            return (c = P.current) == null ? void 0 : c.focus();
                        },
                        children: [
                            e.jsx("div", {
                                className: "lk-code",
                                children: Array.from({ length: 6 }).map((c, p) =>
                                    e.jsx(
                                        "span",
                                        { className: p === L.length ? "cursor" : "", children: L[p] || "" },
                                        p,
                                    ),
                                ),
                            }),
                            e.jsx("input", {
                                ref: P,
                                value: L,
                                inputMode: "text",
                                autoCapitalize: "characters",
                                autoComplete: "off",
                                autoCorrect: "off",
                                spellCheck: !1,
                                "aria-label": "房间码",
                                onChange: (c) => he(qa(c.target.value)),
                                onPaste: (c) => {
                                    var U;
                                    const p = (U = c.clipboardData) == null ? void 0 : U.getData("text");
                                    p && (c.preventDefault(), he(qa(p)));
                                },
                            }),
                        ],
                    }),
                t === "join" &&
                    e.jsxs("button", {
                        className: "lk-paste",
                        onClick: Ce,
                        children: [e.jsx(Pt, { size: 16 }), " 粘贴房间码"],
                    }),
                e.jsx("div", { className: "lk-field-label", children: "带谁去" }),
                m.length === 0
                    ? e.jsx("div", {
                          className: "lk-hint",
                          children: "通讯录里还没有能带的人（得先是好友）。",
                      })
                    : e.jsx("div", {
                          className: "lk-picker",
                          children: m.map((c) =>
                              e.jsxs(
                                  "button",
                                  {
                                      className: c.id === E ? "on" : "",
                                      onClick: () => o(c.id),
                                      children: [
                                          e.jsxs("span", {
                                              className: "lk-pick-ava",
                                              children: [
                                                  e.jsx(Aa, {
                                                      src: c.avatar,
                                                      alt: "",
                                                      fallback: e.jsx("i", { children: ta(c).slice(0, 1) }),
                                                  }),
                                                  c.id === E &&
                                                      e.jsx("em", {
                                                          children: e.jsx(Et, { size: 11, weight: "bold" }),
                                                      }),
                                              ],
                                          }),
                                          e.jsx("small", { children: ta(c) }),
                                      ],
                                  },
                                  c.id,
                              ),
                          ),
                      }),
                e.jsxs("div", {
                    className: "lk-fields",
                    children: [
                        t === "create" &&
                            e.jsxs("label", {
                                className: "gc-field",
                                children: [
                                    e.jsx("span", { children: "房间名" }),
                                    e.jsx("input", {
                                        value: T,
                                        maxLength: 30,
                                        placeholder: "可不填",
                                        onChange: (c) => O(c.target.value),
                                    }),
                                ],
                            }),
                        e.jsxs("label", {
                            className: "gc-field",
                            children: [
                                e.jsx("span", { children: "我在房间里叫" }),
                                e.jsx("input", {
                                    value: d,
                                    maxLength: 20,
                                    onChange: (c) => ce(c.target.value),
                                }),
                            ],
                        }),
                        e.jsxs("label", {
                            className: "gc-field",
                            children: [
                                e.jsx("span", { children: "给朋友看的介绍" }),
                                e.jsx("input", {
                                    value: F,
                                    maxLength: 80,
                                    placeholder: "可不填，一句话介绍你的 TA",
                                    onChange: (c) => fe(c.target.value),
                                }),
                            ],
                        }),
                    ],
                }),
                ne && e.jsx("div", { className: "lk-err", children: ne }),
                e.jsx("button", {
                    className: "lk-submit",
                    disabled: Q || !E || (t === "join" && L.length !== 6),
                    onClick: Me,
                    children: Q ? "稍等…" : t === "create" ? "创建并生成房间码" : "进入房间",
                }),
                e.jsx("p", {
                    className: "lk-hint small",
                    children:
                        "朋友那边只看得到名字、头像和这句介绍。TA 的人设、你们俩的记忆、你的 API 密钥都留在你手机上。",
                }),
            ],
        }),
    });
}
function Dn({ roomId: t, onBack: s }) {
    var Ka, Ya, Qa, Xa, Za, Ia, et, at, tt, nt, st;
    const { state: S, patch: M, patchChar: A, walletAppend: g } = Oa(),
        x = Ga(),
        m = ((Ka = wt()) == null ? void 0 : Ka.id) || "",
        E = Te((Ya = S.linkRooms) == null ? void 0 : Ya[t]),
        o = (S.characters || []).find((a) => a.id === E.charId) || null,
        T = na(S.me),
        O = o ? Ra(o) : "TA",
        [d, ce] = u.useState({
            id: t,
            name: E.name,
            code: E.code,
            avatar: E.avatar || "",
            owner_id: E.ownerId || "",
            show_level: !!E.showLevel,
        }),
        [F, fe] = u.useState(E.members),
        [L, he] = u.useState(E.log),
        [Q, _e] = u.useState(!1),
        [ne, V] = u.useState(""),
        [P, Ce] = u.useState(!!E.left),
        [Me, k] = u.useState(!1),
        [D, c] = u.useState(!1),
        [p, U] = u.useState(!1),
        [Z, oe] = u.useState(!1),
        [se, I] = u.useState(null),
        [me, Be] = u.useState(null),
        [pe, Ee] = u.useState(null),
        Qe = u.useRef(L);
    Qe.current = L;
    const Xe = u.useRef(!1),
        Ge = u.useRef(0),
        de = u.useRef(""),
        Oe = u.useRef(new Map()),
        sa = u.useRef(E.handledId || 0),
        ra = u.useRef(null),
        $e = u.useRef(S);
    $e.current = S;
    const K = u.useCallback(
            (a) =>
                M((n) => {
                    var l;
                    const i = Te((l = n.linkRooms) == null ? void 0 : l[t]);
                    return {
                        linkRooms: {
                            ...(n.linkRooms || {}),
                            [t]: { ...i, ...(typeof a == "function" ? a(i) : a) },
                        },
                    };
                }),
            [M, t],
        ),
        ye = u.useCallback(
            (a, n = {}) => {
                var f;
                if (!(a != null && a.length) && !Object.keys(n).length) return;
                const i = ot(Qe.current, a || []);
                ((Qe.current = i), he(i));
                const l = ((f = i[i.length - 1]) == null ? void 0 : f.id) || 0;
                K((j) => ({ log: ot(j.log, a || []), readId: Math.max(j.readId || 0, l), ...n }));
            },
            [K],
        ),
        ue = u.useCallback(async () => {
            var a, n, i, l, f, j, w, y, q;
            try {
                const z = Ge.current ? Math.max(0, Ge.current - 8) : 0,
                    $ = await Jt(t, z, de.current);
                if ($.membersSame)
                    $.members = ($.members || []).map((X) => ({
                        ...X,
                        profile: Oe.current.get(String(X.user_id)) || {},
                    }));
                else for (const X of $.members || []) Oe.current.set(String(X.user_id), X.profile || {});
                $.membersHash && (de.current = $.membersHash);
                const ie = ($.messages || []).reduce((X, Re) => Math.max(X, Number(Re.id) || 0), 0);
                (ie > Ge.current && (Ge.current = ie),
                    ce((X) => ({
                        ...$.room,
                        avatar:
                            "avatar" in ($.room || {})
                                ? $.room.avatar
                                : (X == null ? void 0 : X.avatar) || "",
                    })),
                    fe($.members || []));
                const xe = ($.members || []).map(({ typing: X, ...Re }) => Re),
                    Ne = Te((a = $e.current.linkRooms) == null ? void 0 : a[t]),
                    B = "avatar" in ($.room || {}) ? $.room.avatar || "" : Ne.avatar || "",
                    be =
                        JSON.stringify(xe) !== JSON.stringify(Ne.members) ||
                        (((n = $.room) == null ? void 0 : n.name) || "") !== (Ne.name || "") ||
                        B !== (Ne.avatar || "") ||
                        (((i = $.room) == null ? void 0 : i.owner_id) || "") !== (Ne.ownerId || "") ||
                        !!((l = $.room) != null && l.show_level) != !!Ne.showLevel;
                return (
                    ye(
                        $.messages || [],
                        be
                            ? {
                                  members: xe,
                                  name: ((f = $.room) == null ? void 0 : f.name) || "",
                                  code: ((j = $.room) == null ? void 0 : j.code) || "",
                                  avatar: B,
                                  ownerId: ((w = $.room) == null ? void 0 : w.owner_id) || "",
                                  showLevel: !!((y = $.room) != null && y.show_level),
                              }
                            : {},
                    ),
                    $
                );
            } catch (z) {
                return (
                    (z == null ? void 0 : z.message) === "room_not_found" &&
                        (Ce(!0),
                        Te((q = $e.current.linkRooms) == null ? void 0 : q[t]).left ||
                            (K({ left: !0, leftAt: Date.now(), leftReason: "gone" }), k(!0))),
                    null
                );
            }
        }, [t, ye, K]);
    u.useEffect(() => {
        var n;
        if (Te((n = $e.current.linkRooms) == null ? void 0 : n[t]).left) return;
        ue();
        const a = setInterval(() => {
            document.hidden || ue();
        }, _n);
        return () => {
            (clearInterval(a), clearTimeout(ra.current));
        };
    }, [ue]);
    const { mine: _, others: ia, otherHere: Ze } = xa(F, m),
        ba = String(d.owner_id || "") === String(m) || (_ == null ? void 0 : _.role) === "admin",
        ja = ((_ == null ? void 0 : _.muted) || []).includes("char") || (!!d.all_muted && !ba),
        la = u.useRef("");
    u.useEffect(() => {
        var n;
        if (P || !(_ != null && _.profile) || !o) return;
        const a = `${((n = S.me) == null ? void 0 : n.avatar) || ""}|${o.avatar || ""}`;
        la.current !== a &&
            ((la.current = a),
            (async () => {
                var j, w, y, q, z, $, ie, we;
                const [i, l] = await Promise.all([Ma((j = S.me) == null ? void 0 : j.avatar), Ma(o.avatar)]),
                    f = _.profile;
                if (
                    !(
                        (((w = f.me) == null ? void 0 : w.avatar) || "") === i &&
                        (((y = f.char) == null ? void 0 : y.avatar) || "") === l
                    )
                )
                    try {
                        const xe = await Ye(t, {
                            profile: {
                                me: {
                                    name:
                                        ((q = f.me) == null ? void 0 : q.card) ||
                                        ((z = f.me) == null ? void 0 : z.name) ||
                                        T,
                                    avatar: i,
                                },
                                char: {
                                    name:
                                        (($ = f.char) == null ? void 0 : $.card) ||
                                        ((ie = f.char) == null ? void 0 : ie.name) ||
                                        O,
                                    avatar: l,
                                    intro: ((we = f.char) == null ? void 0 : we.intro) || "",
                                },
                            },
                        });
                        xe != null && xe.members && fe(xe.members);
                    } catch {
                        la.current = "";
                    }
            })());
    }, [P, _, o, (Qa = S.me) == null ? void 0 : Qa.avatar, t, T, O]);
    const re = u.useCallback(
            (a, n, i = F) => {
                var f, j, w, y, q;
                if (String(a) === String(m))
                    return n === "char"
                        ? O
                        : ((j = (f = _ == null ? void 0 : _.profile) == null ? void 0 : f.me) == null
                              ? void 0
                              : j.name) || T;
                const l =
                    ((w = i.find((z) => String(z.user_id) === String(a))) == null ? void 0 : w.profile) || {};
                return (
                    (n === "char"
                        ? (y = l.char) == null
                            ? void 0
                            : y.name
                        : (q = l.me) == null
                          ? void 0
                          : q.name) || "有人"
                );
            },
            [F, m, O, T, _],
        ),
        ge = u.useCallback(
            async (a) => {
                const n = await Kt(t, a);
                return (ye(n.messages || []), n.messages || []);
            },
            [t, ye],
        ),
        Ie = u.useCallback(
            async (a) => {
                var f, j;
                const n =
                    (j = Te((f = $e.current.linkRooms) == null ? void 0 : f[t]).stickerMedia) == null
                        ? void 0
                        : j[a.id];
                if (n) return n;
                const i = await An(a.dataUrl),
                    { id: l } = await mt(t, i);
                return (
                    Ue.set(l, i),
                    K((w) => ({ stickerMedia: { ...(w.stickerMedia || {}), [a.id]: l } })),
                    l
                );
            },
            [t, K],
        ),
        We = u.useCallback(
            async (a = !1, n = null) => {
                var l, f, j, w, y, q, z, $, ie, we, xe, Ne, B, be, X, Re, qe, ze, oa, ma;
                if (Xe.current || !o) return;
                ((Xe.current = !0), _e(!0), V(""));
                let i = !1;
                try {
                    let C = await ue();
                    for (
                        let v = 0;
                        v < 8 &&
                        ((C == null ? void 0 : C.members) || []).some(
                            (h) =>
                                String(h.user_id) !== String(m) &&
                                h.typing &&
                                !h.left &&
                                String(h.user_id) < String(m),
                        );
                        v++
                    )
                        (await new Promise((h) => setTimeout(h, 1500)), (C = (await ue()) || C));
                    dt(t, !0).catch(() => {});
                    const Ca = Qe.current,
                        Le = (C == null ? void 0 : C.members) || F,
                        je = xa(Le, m),
                        ea = $e.current,
                        rt = Te((l = ea.linkRooms) == null ? void 0 : l[t]),
                        Rt = rt.memoryIn ? Yt(o, { living: Qt(o), moments: Xt(o), meName: T }) : "",
                        Pa = ((f = o.autonomy) == null ? void 0 : f.sendSticker) === !1 ? [] : Rn(ea, o),
                        it = Zt(Ca, m),
                        Tt = It({
                            char: o,
                            me: ea.me,
                            friends: je.others.map((v) => {
                                var R, h, H, ae, te, le;
                                return {
                                    name:
                                        (h = (R = v.profile) == null ? void 0 : R.me) == null
                                            ? void 0
                                            : h.name,
                                    charName:
                                        (ae = (H = v.profile) == null ? void 0 : H.char) == null
                                            ? void 0
                                            : ae.name,
                                    intro:
                                        (le = (te = v.profile) == null ? void 0 : te.char) == null
                                            ? void 0
                                            : le.intro,
                                };
                            }),
                            recent: en(Ca, Le, m, { meName: T, myCharName: O }),
                            privateNotes: Rt,
                            roomName: ((j = C == null ? void 0 : C.room) == null ? void 0 : j.name) || d.name,
                            notice:
                                ((w = C == null ? void 0 : C.room) == null ? void 0 : w.notice) ??
                                d.notice ??
                                "",
                            meRoomName:
                                ((z =
                                    (q = (y = je.mine) == null ? void 0 : y.profile) == null
                                        ? void 0
                                        : q.me) == null
                                    ? void 0
                                    : z.name) || "",
                            situation: an(o, { deviceTz: tn() }),
                            met: (o.acquaintances || [])
                                .filter((v) => v.times > 1 || Date.now() - (v.firstMet || 0) > 2 * 36e5)
                                .filter((v) =>
                                    je.others.some((R) => {
                                        var h, H, ae, te;
                                        return [
                                            (H = (h = R.profile) == null ? void 0 : h.me) == null
                                                ? void 0
                                                : H.name,
                                            (te = (ae = R.profile) == null ? void 0 : ae.char) == null
                                                ? void 0
                                                : te.name,
                                        ].includes(v.name);
                                    }),
                                ),
                            trigger: (() => {
                                const v =
                                    n ||
                                    [...Ca]
                                        .reverse()
                                        .find(
                                            (h) =>
                                                h.speaker !== "system" &&
                                                !(h.speaker === "char" && String(h.user_id) === String(m)),
                                        );
                                if (!v) return null;
                                const R = ut(v, Le, m, { meName: T, myCharName: O });
                                return {
                                    who: R.name,
                                    relation: R.relation,
                                    text: ft(v, Le, m, { meName: T, myCharName: O }),
                                };
                            })(),
                            facts: (() => {
                                var H, ae, te, le, Je;
                                const v = ((H = je.mine) == null ? void 0 : H.aliases) || {},
                                    R = (aa) => {
                                        var Da, da, ua;
                                        return aa
                                            ? String(aa) === String(m)
                                                ? T
                                                : ((ua =
                                                      (da =
                                                          (Da = Le.find(
                                                              (Y) => String(Y.user_id) === String(aa),
                                                          )) == null
                                                              ? void 0
                                                              : Da.profile) == null
                                                          ? void 0
                                                          : da.me) == null
                                                      ? void 0
                                                      : ua.name) || "有人"
                                            : "";
                                    },
                                    h =
                                        String(((C == null ? void 0 : C.room) || d).owner_id || "") ===
                                        String(m);
                                return {
                                    myAlias: v.char || "",
                                    myAliasBy:
                                        (ae = v.by) != null && ae.char && String(v.by.char) !== String(m)
                                            ? R(v.by.char)
                                            : "",
                                    meAlias: v.me || "",
                                    meAliasBy:
                                        (te = v.by) != null && te.me && String(v.by.me) !== String(m)
                                            ? R(v.by.me)
                                            : "",
                                    allMuted: !!((C == null ? void 0 : C.room) || d).all_muted,
                                    iManage: h
                                        ? "owner"
                                        : ((le = je.mine) == null ? void 0 : le.role) === "admin"
                                          ? "admin"
                                          : "",
                                    meMuted: (((Je = je.mine) == null ? void 0 : Je.muted) || []).includes(
                                        "me",
                                    ),
                                };
                            })(),
                            abilities: {
                                acts: (($ = o.autonomy) == null ? void 0 : $.groupActs) !== !1,
                                manage:
                                    String(((C == null ? void 0 : C.room) || d).owner_id || "") ===
                                        String(m) || ((ie = je.mine) == null ? void 0 : ie.role) === "admin",
                                stickers: [...new Set(Pa.map((v) => (v.name || "").trim()).filter(Boolean))],
                                balance: ga(ea, o.id),
                                pendingTransfers: it.map((v) => {
                                    var R, h;
                                    return {
                                        id: v.id,
                                        from: re(v.user_id, (R = v.payload) == null ? void 0 : R.side, Le),
                                        amount: (h = v.payload) == null ? void 0 : h.amount,
                                        note: v.content,
                                    };
                                }),
                                grabbed: rt.grabbed || [],
                            },
                        }),
                        Ea = await Nn.memory((we = ea.api) == null ? void 0 : we.chat, Tt, {
                            fallback: (xe = ea.api) == null ? void 0 : xe.chat,
                            max_tokens: 900,
                            temperature: 0.9,
                        }),
                        G = nn(Ea == null ? void 0 : Ea.content);
                    if (G === null) {
                        V("这一轮没写出来（格式不对），可以点「戳一下」再试。");
                        return;
                    }
                    K({ grabbed: [] });
                    for (const v of G.replies) {
                        const R = it.find((h) => Number(h.id) === v.id);
                        if (R)
                            try {
                                const h = await ht(t, R.id, v.action);
                                (ye([h.message]),
                                    (i = !0),
                                    v.action === "accept" &&
                                        g(o.id, {
                                            amount: Number(R.payload.amount) || 0,
                                            note: `${re(R.user_id, R.payload.side, Le)} 的转账（${d.name || "联机"}）`,
                                            kind: "transfer",
                                            ref: `link:${R.id}`,
                                        }));
                            } catch {}
                    }
                    if (G.meta.length) {
                        const v = [
                                {
                                    user: m,
                                    side: "me",
                                    name:
                                        ((be =
                                            (B = (Ne = je.mine) == null ? void 0 : Ne.profile) == null
                                                ? void 0
                                                : B.me) == null
                                            ? void 0
                                            : be.name) || T,
                                },
                                ...je.others.flatMap((h) => {
                                    var H, ae, te, le;
                                    return [
                                        {
                                            user: h.user_id,
                                            side: "me",
                                            name:
                                                (ae = (H = h.profile) == null ? void 0 : H.me) == null
                                                    ? void 0
                                                    : ae.name,
                                        },
                                        {
                                            user: h.user_id,
                                            side: "char",
                                            name:
                                                (le = (te = h.profile) == null ? void 0 : te.char) == null
                                                    ? void 0
                                                    : le.name,
                                        },
                                    ];
                                }),
                            ].filter((h) => h.name),
                            R = (h) =>
                                v.find((H) => H.name === h) ||
                                v.find((H) => H.name.includes(h) || h.includes(H.name));
                        (await ge(
                            G.meta.map((h) => {
                                var da, ua;
                                if (G.voice)
                                    return {
                                        speaker: "char",
                                        kind: "voice",
                                        content: h.text,
                                        payload: {
                                            durationMs: Math.min(6e4, Math.max(1500, h.text.length * 260)),
                                        },
                                    };
                                const H = ((da = o.autonomy) == null ? void 0 : da.groupActs) !== !1,
                                    ae =
                                        String(((C == null ? void 0 : C.room) || d).owner_id || "") ===
                                            String(m) ||
                                        ((ua = je.mine) == null ? void 0 : ua.role) === "admin",
                                    te = H && ae && h.at.some((Y) => /^(所有人|全体成员|all)$/i.test(Y)),
                                    le = H
                                        ? [
                                              ...(te ? ["all"] : []),
                                              ...h.at
                                                  .filter((Y) => !/^(所有人|全体成员|all)$/i.test(Y))
                                                  .map(R)
                                                  .filter(Boolean)
                                                  .map((Y) => ({ user: Y.user, side: Y.side, name: Y.name })),
                                          ]
                                        : [],
                                    Je = h.quote
                                        ? Ca.find((Y) => Number(Y.id) === h.quote && Y.speaker !== "system")
                                        : null,
                                    aa = Je
                                        ? {
                                              id: Je.id,
                                              name: ut(Je, Le, m, { meName: T, myCharName: O }).name.replace(
                                                  /^你（(.*)）$/,
                                                  "$1",
                                              ),
                                              text: ft(Je, Le, m, { meName: T, myCharName: O }).slice(0, 80),
                                          }
                                        : null;
                                return {
                                    speaker: "char",
                                    content: `${le
                                        .map((Y) => (Y === "all" ? { name: "所有人" } : Y))
                                        .filter((Y) => !h.text.includes(`@${Y.name}`))
                                        .map((Y) => `@${Y.name} `)
                                        .join("")}${h.text}`,
                                    payload: {
                                        ...(le.length ? { at: le } : {}),
                                        ...(aa ? { quote: aa } : {}),
                                    },
                                };
                            }),
                        ),
                            (i = !0));
                    }
                    if (G.sticker) {
                        const v = G.sticker.toLowerCase(),
                            R =
                                Pa.find((h) => (h.name || "").toLowerCase() === v) ||
                                Pa.find((h) => (h.name || "").toLowerCase().includes(v));
                        if (R)
                            try {
                                (await ge([
                                    {
                                        speaker: "char",
                                        kind: "sticker",
                                        content: R.name || "[表情]",
                                        payload: { mediaId: await Ie(R), name: R.name || "" },
                                    },
                                ]),
                                    (i = !0));
                            } catch {}
                    }
                    const $a = ((X = o.autonomy) == null ? void 0 : X.groupActs) !== !1,
                        Mt =
                            String(((C == null ? void 0 : C.room) || d).owner_id || "") === String(m) ||
                            ((Re = je.mine) == null ? void 0 : Re.role) === "admin";
                    if (
                        $a &&
                        G.myAlias !== null &&
                        G.myAlias !==
                            (((ze = (qe = je.mine) == null ? void 0 : qe.aliases) == null
                                ? void 0
                                : ze.char) || "")
                    )
                        try {
                            const v = await Fe(t, m, {
                                alias: { side: "char", name: G.myAlias, by: "char" },
                            });
                            (v != null && v.members && fe(v.members), (i = !0));
                        } catch {}
                    if ($a && Mt && G.rename && G.rename !== ((C == null ? void 0 : C.room) || d).name)
                        try {
                            const v = await Ye(t, { name: G.rename });
                            (v != null && v.room && ce((R) => ({ ...R, ...v.room })), (i = !0));
                        } catch {}
                    if (
                        ($a &&
                            G.redpacket &&
                            G.redpacket.total <= ga($e.current, o.id) &&
                            G.redpacket.total * 100 >= G.redpacket.count &&
                            (await ge([
                                {
                                    speaker: "char",
                                    kind: "redpacket",
                                    content: G.redpacket.note,
                                    payload: G.redpacket,
                                },
                            ]),
                            g(o.id, {
                                amount: -G.redpacket.total,
                                note: `群红包（${d.name || "联机"}）`,
                                kind: "redpacket",
                            }),
                            (i = !0)),
                        $a && G.transfer && G.transfer.amount <= ga($e.current, o.id))
                    ) {
                        const v = [
                                {
                                    user: m,
                                    side: "me",
                                    name:
                                        ((ma =
                                            (oa = _ == null ? void 0 : _.profile) == null ? void 0 : oa.me) ==
                                        null
                                            ? void 0
                                            : ma.name) || T,
                                },
                                ...je.others.flatMap((h) => {
                                    var H, ae, te, le;
                                    return [
                                        {
                                            user: h.user_id,
                                            side: "me",
                                            name:
                                                (ae = (H = h.profile) == null ? void 0 : H.me) == null
                                                    ? void 0
                                                    : ae.name,
                                        },
                                        {
                                            user: h.user_id,
                                            side: "char",
                                            name:
                                                (le = (te = h.profile) == null ? void 0 : te.char) == null
                                                    ? void 0
                                                    : le.name,
                                        },
                                    ];
                                }),
                            ],
                            R =
                                v.find((h) => h.name && h.name === G.transfer.to) ||
                                v.find(
                                    (h) =>
                                        h.name &&
                                        (h.name.includes(G.transfer.to) || G.transfer.to.includes(h.name)),
                                );
                        R &&
                            (await ge([
                                {
                                    speaker: "char",
                                    kind: "transfer",
                                    content: G.transfer.note,
                                    payload: { amount: G.transfer.amount, toUser: R.user, toSide: R.side },
                                },
                            ]),
                            g(o.id, {
                                amount: -G.transfer.amount,
                                note: `转账给 ${R.name}（${d.name || "联机"}）`,
                                kind: "transfer",
                            }),
                            (i = !0));
                    }
                    !i && a && V(`${O} 这一轮没说话。`);
                } catch (C) {
                    V(
                        C != null && C.status
                            ? ve(C)
                            : (C == null ? void 0 : C.message) || "这一轮没发出去，检查一下聊天 API。",
                    );
                } finally {
                    (i || dt(t, !1).catch(() => {}), (Xe.current = !1), _e(!1));
                }
            },
            [o, t, ue, F, m, T, O, d.name, ye, ge, Ie, re, _, K, g],
        );
    (u.useEffect(() => {
        var j, w, y, q;
        if (!E.autoReply || !o || P || ja) return;
        const a = [
                ...new Set(
                    [
                        Ra(o),
                        ta(o),
                        o.nickname,
                        (w = (j = _ == null ? void 0 : _.profile) == null ? void 0 : j.char) == null
                            ? void 0
                            : w.name,
                    ]
                        .map((z) => String(z || "").trim())
                        .filter((z) => z.length >= 2),
                ),
            ],
            n = [
                ...new Set(
                    [
                        T,
                        (q = (y = _ == null ? void 0 : _.profile) == null ? void 0 : y.me) == null
                            ? void 0
                            : q.name,
                    ]
                        .map((z) => String(z || "").trim())
                        .filter((z) => z.length >= 2),
                ),
            ],
            i = sn(L, m, sa.current, Date.now(), { myNames: a, partnerNames: n });
        if (!i) return;
        ((sa.current = Number(i.id)), K({ handledId: Number(i.id) }));
        const f = String(i.user_id) === String(m) ? 900 + Math.random() * 1300 : 1800 + Math.random() * 2400;
        (clearTimeout(ra.current), (ra.current = setTimeout(() => We(!1, i), f)));
    }, [L, E.autoReply, o, P, m, K, We, _, T, ja]),
        u.useEffect(() => {
            if (!o || !F.length) return;
            const a = rn(o.acquaintances, F, m, { roomName: d.name || "" });
            a && A(o.id, { acquaintances: a });
        }, [F, o == null ? void 0 : o.id, m]));
    const ca = u.useRef(new Set());
    (u.useEffect(() => {
        var n, i;
        if (!E.autoReply || !o || P) return;
        const a = Date.now();
        for (const l of L.slice(-60)) {
            if (
                l.kind !== "redpacket" ||
                ca.current.has(l.id) ||
                (String(l.user_id) === String(m) && ((n = l.payload) == null ? void 0 : n.side) === "char") ||
                a - new Date(l.created_at).getTime() > 10 * 60 * 1e3
            )
                continue;
            const f = za(L, l.id);
            f.length >= (((i = l.payload) == null ? void 0 : i.count) || 0) ||
                f.some((j) => j.who === `${m}:char`) ||
                (ca.current.add(l.id),
                setTimeout(
                    async () => {
                        var j;
                        try {
                            const w = await pt(t, l.id, "char");
                            if ((w.message && ye([w.message]), !w.already)) {
                                const y = re(l.user_id, (j = l.payload) == null ? void 0 : j.side);
                                (g(o.id, {
                                    amount: w.amount,
                                    note: `抢到 ${y} 的红包（${d.name || "联机"}）`,
                                    kind: "redpacket",
                                    ref: `link:${l.id}`,
                                }),
                                    K((q) => ({
                                        grabbed: [...(q.grabbed || []), { from: y, amount: w.amount }].slice(
                                            -5,
                                        ),
                                    })));
                            }
                        } catch {}
                    },
                    1500 + Math.random() * 4500,
                ));
        }
    }, [L, E.autoReply, o, P, m, t, ye, re, g, K, d.name]),
        u.useEffect(() => {
            var i, l;
            const a = new Set(E.refunded || []),
                n = [];
            for (const f of L) {
                if (
                    f.kind !== "transfer_response" ||
                    ((i = f.payload) == null ? void 0 : i.action) !== "reject"
                )
                    continue;
                const j = L.find((y) => Number(y.id) === Number(f.payload.of));
                if (!j || String(j.user_id) !== String(m) || a.has(j.id)) continue;
                const w =
                    ((l = j.payload) == null ? void 0 : l.side) === "char"
                        ? o == null
                            ? void 0
                            : o.id
                        : "me";
                w &&
                    (g(w, {
                        amount: Number(j.payload.amount) || 0,
                        note: `转账被退回（${d.name || "联机"}）`,
                        kind: "transfer",
                        ref: `link:${j.id}`,
                    }),
                    n.push(j.id));
            }
            n.length && K((f) => ({ refunded: [...(f.refunded || []), ...n].slice(-200) }));
        }, [L]));
    const va = (a) => {
            var n;
            a &&
                !Te((n = $e.current.linkRooms) == null ? void 0 : n[t]).autoReply &&
                setTimeout(() => We(!0), 600);
        },
        ya = async (a, { reply: n = !1, at: i = [], quote: l = null } = {}) => {
            if (!a) return;
            V("");
            const f = {
                ...(i.length ? { at: i } : {}),
                ...(l
                    ? {
                          quote: {
                              id: Number(String(l.id).replace(/^lk/, "")) || 0,
                              name: l.name,
                              text: l.text,
                          },
                      }
                    : {}),
            };
            try {
                (await ge([{ speaker: "user", content: a, payload: f }]), va(n));
            } catch (j) {
                V(ve(j));
            }
        },
        Sa = async (a) => {
            V("");
            try {
                let n = null;
                if (a.mode === "real" && a.audioUrl)
                    try {
                        const l = await Ct(a.audioUrl);
                        l && ((n = (await mt(t, l)).id), Ue.set(n, l));
                    } catch {}
                const i = String(a.text || "").trim() || (n ? "" : "（语音）");
                await ge([
                    {
                        speaker: "user",
                        kind: "voice",
                        content: i,
                        payload: { durationMs: a.durationMs, mediaId: n, mode: a.mode },
                    },
                ]);
            } catch (n) {
                V(ve(n));
            }
        },
        wa = async (a) => {
            V("");
            try {
                const n = await Ie(a);
                await ge([
                    {
                        speaker: "user",
                        kind: "sticker",
                        content: a.name || "[表情]",
                        payload: { mediaId: n, name: a.name || "" },
                    },
                ]);
            } catch (n) {
                V(n != null && n.status ? ve(n) : (n == null ? void 0 : n.message) || "表情没发出去");
            }
        },
        Na = async ({ total: a, count: n, mode: i, note: l }) => {
            try {
                await ge([
                    {
                        speaker: "user",
                        kind: "redpacket",
                        content: l,
                        payload: { total: a, count: n, mode: i },
                    },
                ]);
            } catch (f) {
                throw new Error(ve(f));
            }
            g("me", { amount: -a, note: `群红包（${d.name || "联机"}）`, kind: "redpacket" });
        },
        r = async ({ target: a, amount: n, note: i }) => {
            try {
                await ge([
                    {
                        speaker: "user",
                        kind: "transfer",
                        content: i,
                        payload: { amount: n, toUser: a.user, toSide: a.side },
                    },
                ]);
            } catch (l) {
                throw new Error(ve(l));
            }
            g("me", { amount: -n, note: `转账给 ${a.name}（${d.name || "联机"}）`, kind: "transfer" });
        },
        b = async (a) => {
            var i;
            let n;
            try {
                n = await pt(t, a.id, "me");
            } catch (l) {
                throw new Error(ve(l));
            }
            (n.message && ye([n.message]),
                n.already ||
                    g("me", {
                        amount: n.amount,
                        note: `领取 ${re(a.user_id, (i = a.payload) == null ? void 0 : i.side)} 的红包（${d.name || "联机"}）`,
                        kind: "redpacket",
                        ref: `link:${a.id}`,
                    }));
        },
        N = async (a, n) => {
            var i;
            try {
                const l = await ht(t, a.id, n);
                (ye([l.message]),
                    n === "accept" &&
                        g("me", {
                            amount: Number(a.payload.amount) || 0,
                            note: `${re(a.user_id, (i = a.payload) == null ? void 0 : i.side)} 的转账（${d.name || "联机"}）`,
                            kind: "transfer",
                            ref: `link:${a.id}`,
                        }));
            } catch (l) {
                x == null || x(ve(l), "error");
            }
        },
        J = (a) => {
            var i, l;
            const n = L.find((f) => `lk${f.id}` === a.id);
            if (n) {
                if (n.kind === "redpacket") {
                    Be(n);
                    return;
                }
                if (n.kind === "transfer") {
                    const f = gt(L, n.id),
                        j =
                            String((i = n.payload) == null ? void 0 : i.toUser) === String(m) &&
                            ((l = n.payload) == null ? void 0 : l.toSide) === "me";
                    j && f === "pending" && P
                        ? x == null || x("已经不在这个群里了，收不了这笔转账", "error")
                        : j && f === "pending"
                          ? Ee(n)
                          : x == null ||
                            x(
                                f === "accepted" ? "对方已收款" : f === "rejected" ? "已退还" : "等对方收款",
                                "success",
                            );
                }
            }
        },
        ee = Nt(d, F, m),
        ke = F.filter((a) => String(a.user_id) !== String(m) && a.typing && !a.left),
        Ae = async () =>
            x == null
                ? void 0
                : x((await Ta(d.code || "")) ? "房间码已复制" : "复制失败，手动记一下", "success"),
        Se = Cn(
            t,
            P
                ? []
                : L.map((a) => {
                      var n;
                      return (n = a.payload) == null ? void 0 : n.mediaId;
                  }).filter(Boolean),
        ),
        De = `${m}:me`,
        He = (a) => {
            var w, y, q, z, $;
            const n = L.find((ie) => {
                    var we;
                    return Number(ie.id) === Number((we = a.payload) == null ? void 0 : we.of);
                }),
                i = String(a.user_id) === String(m),
                l = n && String(n.user_id) === String(m);
            if (!i && !l) return "";
            const f =
                    i && ((w = a.payload) == null ? void 0 : w.side) === "me"
                        ? "你"
                        : re(a.user_id, (y = a.payload) == null ? void 0 : y.side),
                j =
                    l && ((q = n.payload) == null ? void 0 : q.side) === "me"
                        ? "你"
                        : n
                          ? re(n.user_id, (z = n.payload) == null ? void 0 : z.side)
                          : "有人";
            return `${f} 领取了${j === "你" ? "你" : ` ${j} `}的红包${($ = a.payload) != null && $.finished ? "，红包已被领完" : ""}`;
        },
        Ve = (a, n) => {
            var f, j;
            const i = F.find((w) => String(w.user_id) === String(a)),
                l =
                    n !== "me"
                        ? "member"
                        : String(d.owner_id) === String(a)
                          ? "owner"
                          : (i == null ? void 0 : i.role) === "admin"
                            ? "admin"
                            : "member";
            return wn({
                role: l,
                title: ((f = i == null ? void 0 : i.titles) == null ? void 0 : f[n]) || "",
                level: ((j = i == null ? void 0 : i.lv) == null ? void 0 : j[n]) || 0,
                showLevel: !!d.show_level,
            });
        },
        _a = L.map((a) => {
            var q, z, $, ie, we, xe, Ne;
            const n = new Date(a.created_at).getTime() || 0,
                i = `lk${a.id}`;
            if (a.kind === "claim") {
                const B = He(a);
                return B ? { id: i, kind: "claim", content: B, createdAt: n } : null;
            }
            if (a.speaker === "system") {
                const B = String(a.content || "").match(
                    /^(.+?) 带着 (.+?) (建了房间|进了房间|离开了房间|被移出了群聊)$/,
                );
                if (B) {
                    const be =
                            F.find((Re) => {
                                var qe, ze, oa, ma;
                                return (
                                    ((ze = (qe = Re.profile) == null ? void 0 : qe.me) == null
                                        ? void 0
                                        : ze.name) === B[1] &&
                                    ((ma = (oa = Re.profile) == null ? void 0 : oa.char) == null
                                        ? void 0
                                        : ma.name) === B[2]
                                );
                            }) ||
                            F.find((Re) => {
                                var qe, ze;
                                return (
                                    ((ze = (qe = Re.profile) == null ? void 0 : qe.char) == null
                                        ? void 0
                                        : ze.name) === B[2]
                                );
                            }),
                        X = B[3] === "离开了房间" || B[3] === "被移出了群聊";
                    return {
                        id: i,
                        kind: "arrival",
                        gone: X,
                        me: {
                            name: B[1],
                            avatar:
                                ((z = (q = be == null ? void 0 : be.profile) == null ? void 0 : q.me) == null
                                    ? void 0
                                    : z.avatar) || "",
                        },
                        char: {
                            name: B[2],
                            avatar:
                                ((ie = ($ = be == null ? void 0 : be.profile) == null ? void 0 : $.char) ==
                                null
                                    ? void 0
                                    : ie.avatar) || "",
                        },
                        content: X
                            ? `${B[1]} 带着 ${B[2]} ${B[3] === "离开了房间" ? "离开了" : "被移出了群聊"}`
                            : `${B[1]} 带着 ${B[2]} ${B[3] === "建了房间" ? "开好了房间" : "到了"}`,
                        createdAt: n,
                    };
                }
                return { id: i, kind: "system", content: a.content, createdAt: n };
            }
            const l = ln(a, F, m, { meName: T, myCharName: O }),
                f =
                    ((we = F.find((B) => String(B.user_id) === String(a.user_id))) == null
                        ? void 0
                        : we.profile) || {},
                j =
                    l.side === "myChar"
                        ? { key: "myChar", name: o ? ta(o) : l.name, avatar: o == null ? void 0 : o.avatar }
                        : l.side === "friendChar"
                          ? {
                                key: `fc:${a.user_id}`,
                                name: l.name,
                                avatar: (xe = f.char) == null ? void 0 : xe.avatar,
                            }
                          : {
                                key: `f:${a.user_id}`,
                                name: l.name,
                                avatar: (Ne = f.me) == null ? void 0 : Ne.avatar,
                            },
                w = {
                    id: i,
                    out: l.side === "me",
                    content: a.content,
                    createdAt: n,
                    who: j,
                    tags: Ve(a.user_id, a.speaker === "char" ? "char" : "me"),
                },
                y = a.payload || {};
            switch (a.kind) {
                case "voice":
                    return {
                        ...w,
                        kind: "voice",
                        durationMs: y.durationMs,
                        audioUrl: y.mediaId ? Se(y.mediaId) : "",
                    };
                case "sticker":
                    return $n(y.mediaId) || (P && !Se(y.mediaId))
                        ? {
                              ...w,
                              kind: "text",
                              content: `[表情${y.name ? `：${y.name}` : ""}${P ? "" : "（已过期）"}]`,
                          }
                        : { ...w, kind: "sticker", src: Se(y.mediaId), name: y.name };
                case "redpacket": {
                    const B = za(L, a.id);
                    return {
                        ...w,
                        kind: "redpacket",
                        mode: y.mode,
                        packetStatus: kt({ count: y.count, createdAt: n, grabs: B, me: De }).status,
                    };
                }
                case "transfer": {
                    const be =
                        String(y.toUser) === String(m) && y.toSide === "me" ? "你" : re(y.toUser, y.toSide);
                    return {
                        ...w,
                        kind: "transfer",
                        amount: y.amount,
                        note: `转给${be}${a.content ? ` · ${a.content}` : ""}`,
                        status: gt(L, a.id),
                    };
                }
                case "transfer_response":
                    return { ...w, kind: "transfer_response", action: y.action, amount: y.amount };
                default:
                    return {
                        ...w,
                        kind: "text",
                        ...(y.quote ? { quote: { name: y.quote.name, text: y.quote.text } } : {}),
                    };
            }
        }).filter(Boolean),
        $t = [
            ...(Q && o ? [{ key: "myChar", name: ta(o), avatar: o.avatar }] : []),
            ...ke.map((a) => {
                var n, i, l, f;
                return {
                    key: `fc:${a.user_id}`,
                    name: ((i = (n = a.profile) == null ? void 0 : n.char) == null ? void 0 : i.name) || "TA",
                    avatar: (f = (l = a.profile) == null ? void 0 : l.char) == null ? void 0 : f.avatar,
                };
            }),
        ],
        La = cn(F);
    if (Z)
        return e.jsx(qn, {
            roomId: t,
            room: d,
            myUserId: m,
            char: o,
            mine: _,
            others: ia,
            onClose: () => oe(!1),
            onRenamed: (a) => {
                (ce((n) => ({ ...a.room, avatar: "avatar" in a.room ? a.room.avatar : n.avatar })),
                    fe(a.members || []),
                    ue());
            },
            members: F,
            onLeft: s,
        });
    const At = (a) =>
            String(a.user) === String(m) ? "myChar" : `${a.side === "char" ? "fc" : "f"}:${a.user}`,
        Ha = [
            ...(o ? [{ key: `${m}:char`, user: m, side: "char", name: O, avatar: o.avatar, local: !0 }] : []),
            ...ia.flatMap((a) => {
                var n, i, l, f, j, w, y, q;
                return [
                    {
                        key: `${a.user_id}:me`,
                        user: a.user_id,
                        side: "me",
                        name:
                            ((i = (n = a.profile) == null ? void 0 : n.me) == null ? void 0 : i.name) ||
                            "朋友",
                        avatar: (f = (l = a.profile) == null ? void 0 : l.me) == null ? void 0 : f.avatar,
                    },
                    {
                        key: `${a.user_id}:char`,
                        user: a.user_id,
                        side: "char",
                        name:
                            ((w = (j = a.profile) == null ? void 0 : j.char) == null ? void 0 : w.name) ||
                            "TA",
                        avatar: (q = (y = a.profile) == null ? void 0 : y.char) == null ? void 0 : q.avatar,
                    },
                ];
            }),
        ],
        Va = (a, n) => {
            var l, f, j, w, y, q, z, $;
            if (String(a) === String(m))
                return n === "char"
                    ? { name: O, avatar: o == null ? void 0 : o.avatar, local: !0 }
                    : {
                          name:
                              ((f = (l = _ == null ? void 0 : _.profile) == null ? void 0 : l.me) == null
                                  ? void 0
                                  : f.name) || T,
                          avatar: (j = S.me) == null ? void 0 : j.avatar,
                          local: !0,
                      };
            const i =
                ((w = F.find((ie) => String(ie.user_id) === String(a))) == null ? void 0 : w.profile) || {};
            return n === "char"
                ? {
                      name: ((y = i.char) == null ? void 0 : y.name) || "TA",
                      avatar: (q = i.char) == null ? void 0 : q.avatar,
                  }
                : {
                      name: ((z = i.me) == null ? void 0 : z.name) || "朋友",
                      avatar: ($ = i.me) == null ? void 0 : $.avatar,
                  };
        },
        W = me,
        Ja = W ? za(L, W.id).map((a) => ({ ...a, ...Va(a.user_id, a.side) })) : [];
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(kn, {
                skinChar: o,
                title: P ? ee : `${ee}${La ? `(${La})` : ""}`,
                subtitle: P || Ze ? "" : "等朋友进来",
                faces: [
                    { name: O, avatar: o == null ? void 0 : o.avatar, local: !0 },
                    { name: T, avatar: (Xa = S.me) == null ? void 0 : Xa.avatar, local: !0 },
                    ...ia.flatMap((a) => {
                        var n, i, l, f, j, w, y, q;
                        return [
                            {
                                name:
                                    ((i = (n = a.profile) == null ? void 0 : n.char) == null
                                        ? void 0
                                        : i.name) || "",
                                avatar:
                                    (f = (l = a.profile) == null ? void 0 : l.char) == null
                                        ? void 0
                                        : f.avatar,
                            },
                            {
                                name:
                                    ((w = (j = a.profile) == null ? void 0 : j.me) == null
                                        ? void 0
                                        : w.name) || "",
                                avatar:
                                    (q = (y = a.profile) == null ? void 0 : y.me) == null ? void 0 : q.avatar,
                            },
                        ];
                    }),
                ],
                onBack: s,
                onMore: () => (P ? c(!0) : oe(!0)),
                onVoice: P ? void 0 : Sa,
                onSticker: P ? void 0 : wa,
                onCardTap: J,
                members: Ha.map((a) => ({
                    key: At(a),
                    name: a.name,
                    avatar: a.avatar,
                    local: a.local,
                    ref: { user: a.user, side: a.side, name: a.name },
                    tag:
                        a.side === "char"
                            ? String(a.user) === String(m)
                                ? "我的 TA"
                                : `${re(a.user, "me")}的 TA`
                            : "朋友",
                })),
                canAtAll:
                    !P &&
                    (String(d.owner_id || "") === String(m) || (_ == null ? void 0 : _.role) === "admin"),
                groupAvatar: d.avatar || "",
                items: _a,
                typing: $t,
                note: P ? "" : ne,
                readOnly: P
                    ? E.leftReason === "gone"
                        ? "这个群聊已经不在了，无法发送消息"
                        : "你已退出该群聊，无法发送消息"
                    : ((_ == null ? void 0 : _.muted) || []).includes("me")
                      ? "你已被禁言"
                      : d.all_muted && !ba
                        ? "全员禁言中，只有群主和管理员可以发言"
                        : null,
                placeholder: Ze ? "" : "等朋友进来的时候也可以先说",
                notice: P ? "" : d.notice || "",
                top: e.jsxs(e.Fragment, {
                    children: [
                        !o &&
                            !P &&
                            e.jsxs("div", {
                                className: "lk-wait",
                                children: [
                                    e.jsx("b", { children: "带进这个房间的人已经不在通讯录里了" }),
                                    e.jsx("small", { children: "在房间设置里退出，重新带一个人进来。" }),
                                ],
                            }),
                        !Ze &&
                            !P &&
                            d.code &&
                            e.jsxs("div", {
                                className: "lk-wait",
                                children: [
                                    e.jsx("b", { children: "等朋友进来 · 把房间码发给朋友们" }),
                                    e.jsx("div", {
                                        className: "lk-code",
                                        children: d.code
                                            .split("")
                                            .map((a, n) => e.jsx("span", { children: a }, n)),
                                    }),
                                    e.jsxs("button", {
                                        onClick: Ae,
                                        children: [e.jsx(St, { size: 15 }), " 复制房间码"],
                                    }),
                                ],
                            }),
                    ],
                }),
                plusItems: P
                    ? []
                    : [
                          {
                              label: "红包转账",
                              icon: e.jsx(Dt, { size: 26, weight: "regular" }),
                              onClick: () => I("money"),
                          },
                          {
                              label: `戳一下${O}`,
                              icon: e.jsx(qt, { size: 26, weight: "regular" }),
                              onClick: () => We(!0),
                          },
                          { label: "房间码", icon: e.jsx(yt, { size: 26, weight: "regular" }), onClick: Ae },
                          {
                              label: "房间设置",
                              icon: e.jsx(zt, { size: 26, weight: "regular" }),
                              onClick: () => oe(!0),
                          },
                      ],
                onSend: ya,
            }),
            e.jsx(on, {
                open: se === "money",
                group: !0,
                onClose: () => I((a) => (a === "money" ? null : a)),
                onPick: (a) => I(a),
            }),
            e.jsx(xn, {
                open: se === "packet",
                onClose: () => I(null),
                onSend: Na,
                people: La,
                balance: ga(S, "me"),
            }),
            e.jsx(bn, {
                open: se === "transfer",
                onClose: () => I(null),
                onSend: r,
                targets: Ha,
                balance: ga(S, "me"),
            }),
            e.jsx(jn, {
                open: !!W,
                onClose: () => Be(null),
                sender: W ? Va(W.user_id, (Za = W.payload) == null ? void 0 : Za.side) : null,
                note: W == null ? void 0 : W.content,
                total: (Ia = W == null ? void 0 : W.payload) == null ? void 0 : Ia.total,
                count: (et = W == null ? void 0 : W.payload) == null ? void 0 : et.count,
                mode: (at = W == null ? void 0 : W.payload) == null ? void 0 : at.mode,
                state: W
                    ? kt({
                          count: (tt = W.payload) == null ? void 0 : tt.count,
                          createdAt: new Date(W.created_at).getTime(),
                          grabs: Ja,
                          me: De,
                      })
                    : null,
                grabs: Ja,
                mineIsSender: W ? String(W.user_id) === String(m) : !1,
                onGrab: () => (P ? Promise.reject(new Error("已经不在这个群里了")) : b(W)),
            }),
            e.jsx(ka, {
                open: !!pe,
                onClose: () => Ee(null),
                title: pe
                    ? `${re(pe.user_id, (nt = pe.payload) == null ? void 0 : nt.side)} 转给你 ¥${mn((st = pe.payload) == null ? void 0 : st.amount)}`
                    : "",
                message: (pe == null ? void 0 : pe.content) || "",
                actions: pe
                    ? [
                          {
                              label: "收款",
                              onClick: () => {
                                  const a = pe;
                                  (Ee(null), N(a, "accept"));
                              },
                          },
                          {
                              label: "退还",
                              destructive: !0,
                              onClick: () => {
                                  const a = pe;
                                  (Ee(null), N(a, "reject"));
                              },
                          },
                      ]
                    : [],
            }),
            e.jsx(ka, {
                open: Me,
                onClose: () => k(!1),
                title: "这个群聊已经不在了",
                message: `聊天记录还留在你手机上。这次房间里的聊天，要记进${O}的记忆吗？`,
                actions: [
                    {
                        label: `记进${O}的记忆`,
                        onClick: () => {
                            (k(!1), K({ memoryOut: !0 }));
                        },
                    },
                    {
                        label: "不记",
                        onClick: () => {
                            (k(!1), K({ memoryOut: !1 }));
                        },
                    },
                ],
            }),
            e.jsx(ka, {
                open: D,
                onClose: () => c(!1),
                title: ee,
                message: E.memoryOut ? `这次的聊天在${O}的记忆里。` : `这次的聊天没有记进${O}的记忆。`,
                actions: [
                    E.memoryOut
                        ? {
                              label: `从${O}的记忆里拿掉`,
                              onClick: () => {
                                  (c(!1), K({ memoryOut: !1 }));
                              },
                          }
                        : {
                              label: `记进${O}的记忆`,
                              onClick: () => {
                                  (c(!1), K({ memoryOut: !0 }));
                              },
                          },
                    {
                        label: "删除聊天记录",
                        destructive: !0,
                        onClick: () => {
                            (c(!1), U(!0));
                        },
                    },
                ],
            }),
            e.jsx(_t, {
                open: p,
                onClose: () => U(!1),
                title: "删除这个群的聊天记录？",
                message: `会从你手机上删掉，列表里也不再出现。${E.memoryOut ? `已经总结进${O}记忆里的那部分不受影响。` : ""}这一步撤不回来。`,
                confirm: {
                    label: "删除",
                    destructive: !0,
                    onClick: () => {
                        (M((a) => {
                            const n = { ...(a.linkRooms || {}) };
                            return (delete n[t], { linkRooms: n });
                        }),
                            s());
                    },
                },
            }),
        ],
    });
}
function qn({
    roomId: t,
    room: s,
    myUserId: S,
    char: M,
    mine: A,
    others: g,
    members: x = [],
    onClose: m,
    onRenamed: E,
    onLeft: o,
}) {
    var re, ge, Ie, We, ca, va, ya, Sa, wa, Na;
    const { state: T, patch: O } = Oa(),
        d = Ga(),
        ce = Te((re = T.linkRooms) == null ? void 0 : re[t]),
        [F, fe] = u.useState(s.name || ""),
        [L, he] = u.useState(!1),
        Q = M ? Ra(M) : "TA",
        _e = na(T.me),
        ne = (r) =>
            O((b) => {
                var N;
                return {
                    linkRooms: {
                        ...(b.linkRooms || {}),
                        [t]: { ...Te((N = b.linkRooms) == null ? void 0 : N[t]), ...r },
                    },
                };
            }),
        V = async () => {
            if ((F || "").trim() !== (s.name || ""))
                try {
                    E(await Ye(t, { name: F.trim() }));
                } catch (r) {
                    d == null || d(ve(r), "error");
                }
        },
        P = async (r) => {
            try {
                await pn(t);
            } catch (b) {
                if ((b == null ? void 0 : b.message) !== "room_not_found") {
                    d == null || d(ve(b), "error");
                    return;
                }
            }
            (ne({ left: !0, leftAt: Date.now(), leftReason: "self", memoryOut: !!r }), o == null || o());
        },
        Ce = (r) => {
            var b;
            return String(s.owner_id || "") === String(r)
                ? "owner"
                : ((b = x.find((N) => String(N.user_id) === String(r))) == null ? void 0 : b.role) === "admin"
                  ? "admin"
                  : "member";
        },
        Me = Ce(S),
        k = Me === "owner",
        D = Me !== "member",
        c = { owner: "群主", admin: "管理员" },
        [p, U] = u.useState(null),
        [Z, oe] = u.useState(null),
        [se, I] = u.useState(null),
        [me, Be] = u.useState(null),
        [pe, Ee] = u.useState(!1),
        [Qe, Xe] = u.useState(!1),
        Ge = u.useRef(null),
        de = async (r, b) => {
            try {
                (E(await r()), b && (d == null || d(b, "success")));
            } catch (N) {
                d == null || d(ve(N), "error");
            }
        },
        Oe = (r) => x.find((b) => String(b.user_id) === String(r)),
        sa = (r, b) => {
            var J, ee, ke;
            const N = ((J = Oe(r)) == null ? void 0 : J.titles) || {};
            oe({
                uid: r,
                meName: ((ee = b == null ? void 0 : b.me) == null ? void 0 : ee.name) || "朋友",
                charName: ((ke = b == null ? void 0 : b.char) == null ? void 0 : ke.name) || "TA",
                me: N.me || "",
                char: N.char || "",
            });
        },
        ra = async (r) => {
            var N;
            const b = (N = r.target.files) == null ? void 0 : N[0];
            if (((r.target.value = ""), !!b))
                try {
                    const J = await gn(b, { aspect: 1, shape: "rounded", title: "头像" }, { note: "群头像" });
                    if (!J) return;
                    const ee = await Wa(J, { maxPx: 200, quality: 0.85 });
                    await de(() => Ye(t, { avatar: ee }), "群头像已更新");
                } catch {
                    d == null || d("这张图读不出来", "error");
                }
        },
        $e = (r) => {
            (r || "").trim() !== (s.notice || "") &&
                de(() => Ye(t, { notice: r.trim() }), r.trim() ? "群公告已发布" : "群公告已清除");
        },
        K = [
            {
                key: "me",
                uid: S,
                name:
                    ((Ie = (ge = A == null ? void 0 : A.profile) == null ? void 0 : ge.me) == null
                        ? void 0
                        : Ie.name) || _e,
                src: (We = T.me) == null ? void 0 : We.avatar,
                local: !0,
                tag: c[Me] || "我",
            },
            { key: "myChar", uid: S, name: Q, src: M == null ? void 0 : M.avatar, local: !0, tag: "我的 TA" },
            ...g.flatMap((r) => {
                var b, N, J, ee, ke, Ae, Se, De, He, Ve;
                return [
                    {
                        key: `f:${r.user_id}`,
                        uid: r.user_id,
                        friend: r,
                        name:
                            ((N = (b = r.profile) == null ? void 0 : b.me) == null ? void 0 : N.name) ||
                            "朋友",
                        src: (ee = (J = r.profile) == null ? void 0 : J.me) == null ? void 0 : ee.avatar,
                        tag: c[Ce(r.user_id)] || "朋友",
                    },
                    {
                        key: `fc:${r.user_id}`,
                        uid: r.user_id,
                        friend: r,
                        name:
                            ((Ae = (ke = r.profile) == null ? void 0 : ke.char) == null ? void 0 : Ae.name) ||
                            "TA",
                        src: (De = (Se = r.profile) == null ? void 0 : Se.char) == null ? void 0 : De.avatar,
                        tag: `${((Ve = (He = r.profile) == null ? void 0 : He.me) == null ? void 0 : Ve.name) || "朋友"}的 TA`,
                    },
                ];
            }),
        ],
        ye = (r) => {
            var b, N;
            if (r.friend) {
                D && U(r.friend);
                return;
            }
            k &&
                sa(S, {
                    me: {
                        name:
                            ((N = (b = A == null ? void 0 : A.profile) == null ? void 0 : b.me) == null
                                ? void 0
                                : N.name) || _e,
                    },
                    char: { name: Q },
                });
        },
        ue =
            ((va = (ca = p == null ? void 0 : p.profile) == null ? void 0 : ca.me) == null
                ? void 0
                : va.name) || "朋友",
        _ = p ? Ce(p.user_id) : "member",
        ia = (r) => {
            var b;
            return ((b = Oe(r)) == null ? void 0 : b.muted) || [];
        },
        Ze = (r, b) => {
            var ee, ke, Ae, Se, De, He, Ve, _a;
            const N = Oe(r),
                J = (N == null ? void 0 : N.aliases) || {};
            I({
                uid: r,
                self: b,
                meName:
                    ((ke = (ee = N == null ? void 0 : N.profile) == null ? void 0 : ee.me) == null
                        ? void 0
                        : ke.card) ||
                    ((Se = (Ae = N == null ? void 0 : N.profile) == null ? void 0 : Ae.me) == null
                        ? void 0
                        : Se.name) ||
                    "朋友",
                charName:
                    ((He = (De = N == null ? void 0 : N.profile) == null ? void 0 : De.char) == null
                        ? void 0
                        : He.card) ||
                    ((_a = (Ve = N == null ? void 0 : N.profile) == null ? void 0 : Ve.char) == null
                        ? void 0
                        : _a.name) ||
                    "TA",
                me: J.me || "",
                char: J.char || "",
            });
        },
        ba = (r) =>
            ["me", "char"].map((b) => {
                var ee, ke, Ae, Se;
                const N = ia(r.user_id).includes(b),
                    J =
                        b === "me"
                            ? ((ke = (ee = r.profile) == null ? void 0 : ee.me) == null ? void 0 : ke.name) ||
                              "朋友"
                            : ((Se = (Ae = r.profile) == null ? void 0 : Ae.char) == null
                                  ? void 0
                                  : Se.name) || "TA";
                return {
                    label: N ? `解除 ${J} 的禁言` : `禁言 ${J}`,
                    onClick: () =>
                        de(
                            () => Fe(t, r.user_id, { mute: { side: b, on: !N } }),
                            N ? "已解除禁言" : "已禁言",
                        ),
                };
            }),
        ja = p
            ? [
                  ...(k
                      ? [
                            {
                                label: "修改群昵称",
                                sub: `给 ${ue} 和 TA 带来的那位改群里的名字`,
                                onClick: () => Ze(p.user_id, !1),
                            },
                        ]
                      : []),
                  ...(k || (D && _ === "member") ? ba(p) : []),
                  ...(k
                      ? [
                            _ === "admin"
                                ? {
                                      label: "取消管理员",
                                      onClick: () => de(() => Fe(t, p.user_id, { role: "member" })),
                                  }
                                : {
                                      label: "设为管理员",
                                      onClick: () => de(() => Fe(t, p.user_id, { role: "admin" })),
                                  },
                            {
                                label: "设置群头衔",
                                sub: `给 ${ue} 和 TA 带来的那位各起一个`,
                                onClick: () => sa(p.user_id, p.profile),
                            },
                            {
                                label: "转让群主",
                                onClick: () =>
                                    Be({
                                        title: `把群主转让给 ${ue}？`,
                                        message:
                                            "转让之后你就是普通成员了，设管理员、头衔、活跃等级这些都由新群主来管。",
                                        label: "转让",
                                        run: () => de(() => Fe(t, p.user_id, { owner: !0 }), "群主已转让"),
                                    }),
                            },
                        ]
                      : []),
                  ...(k || (D && _ === "member")
                      ? [
                            {
                                label: "移出群聊",
                                destructive: !0,
                                onClick: () => {
                                    var r, b;
                                    return Be({
                                        title: `把 ${ue} 移出群聊？`,
                                        message: `${ue} 带来的 ${((b = (r = p.profile) == null ? void 0 : r.char) == null ? void 0 : b.name) || "TA"} 也会一起离开。TA 手机上的聊天记录还在，只是不能再说话。`,
                                        label: "移出",
                                        run: () => de(() => Fe(t, p.user_id, { remove: !0 }), "已移出"),
                                    });
                                },
                            },
                        ]
                      : []),
              ]
            : [],
        la = async () =>
            d == null
                ? void 0
                : d((await Ta(s.code || "")) ? "房间码已复制，发给朋友就能进来" : "复制失败", "success");
    return e.jsxs(dn, {
        title: "聊天信息",
        onClose: m,
        children: [
            e.jsx(Pe, {
                children: e.jsxs("div", {
                    className: "lk-members",
                    children: [
                        K.map((r) =>
                            e.jsxs(
                                "button",
                                {
                                    className: "lk-member",
                                    onClick: () => ye(r),
                                    children: [
                                        e.jsx(Ln, {
                                            src: r.src,
                                            name: r.name,
                                            local: r.local,
                                            className: "lg",
                                        }),
                                        e.jsx("span", { children: r.name }),
                                        e.jsx("em", { children: r.tag }),
                                    ],
                                },
                                r.key,
                            ),
                        ),
                        e.jsxs("button", {
                            className: "lk-invite",
                            onClick: la,
                            children: [
                                e.jsx("div", {
                                    className: "gc-ava lg dashed",
                                    children: e.jsx(vt, { size: 20 }),
                                }),
                                e.jsx("span", { children: "邀请朋友" }),
                            ],
                        }),
                    ],
                }),
            }),
            e.jsxs(Pe, {
                children: [
                    e.jsx(fa, {
                        label: "群聊名称",
                        children: e.jsx(ha, {
                            value: F,
                            placeholder: "房间里的人都看得到",
                            onChange: (r) => fe(r.slice(0, 30)),
                            onBlur: V,
                        }),
                    }),
                    e.jsx(Ke, {
                        title: "房间码",
                        value: s.code,
                        onClick: async () =>
                            d == null
                                ? void 0
                                : d((await Ta(s.code || "")) ? "房间码已复制" : "复制失败", "success"),
                        chevron: !1,
                    }),
                    e.jsx(Ke, {
                        title: "群头像",
                        value: s.avatar
                            ? e.jsx("img", { className: "lk-group-ava", src: s.avatar, alt: "" })
                            : D
                              ? "未设置"
                              : "",
                        onClick: D
                            ? () => {
                                  var r;
                                  return (r = Ge.current) == null ? void 0 : r.click();
                              }
                            : void 0,
                    }),
                    e.jsx("input", { ref: Ge, type: "file", accept: "image/*", hidden: !0, onChange: ra }),
                    e.jsx(Ke, {
                        title: "群公告",
                        value: s.notice ? (D ? "编辑" : "") : "未设置",
                        onClick: D ? () => Ee(!0) : void 0,
                        chevron: D,
                    }),
                    s.notice ? e.jsx(vn, { text: s.notice, onClick: () => (D ? Ee(!0) : Xe(!0)) }) : null,
                ],
            }),
            e.jsx(Pe, {
                footer: `群昵称只在这个群里用。${Q} 自己也可以改（「自主权限 → 在群里」开着的话），改了群里会有一行提示。`,
                children: e.jsx(Ke, {
                    title: "我和 TA 的群昵称",
                    value:
                        [
                            (Sa = (ya = Oe(S)) == null ? void 0 : ya.aliases) == null ? void 0 : Sa.me,
                            (Na = (wa = Oe(S)) == null ? void 0 : wa.aliases) == null ? void 0 : Na.char,
                        ]
                            .filter(Boolean)
                            .join(" · ") || "没设",
                    onClick: () => Ze(S, !0),
                }),
            }),
            e.jsx(Pe, {
                footer: s.all_muted
                    ? "全员禁言中：只有群主和管理员（以及他们带来的 TA）能说话。"
                    : D
                      ? "开启后只有群主和管理员（以及他们带来的 TA）能说话。"
                      : "",
                children: D
                    ? e.jsx(pa, {
                          title: "全员禁言",
                          on: !!s.all_muted,
                          onChange: (r) => de(() => Ye(t, { all_muted: r })),
                      })
                    : e.jsx(Ke, { title: "全员禁言", value: s.all_muted ? "已开启" : "未开启", chevron: !1 }),
            }),
            e.jsx(Pe, {
                footer: k
                    ? "开着的话，每个人名字前面挂「LV3 吐槽」这样的等级，按在这个群里说过多少话算，TA 们也一样。只有群主能开关。"
                    : `活跃等级由群主决定开不开，现在是${s.show_level ? "开着" : "关着"}的。${D ? "" : "群主给你起了头衔的话，会挂在你的名字前面。"}`,
                children: k
                    ? e.jsx(pa, {
                          title: "群活跃等级",
                          on: !!s.show_level,
                          onChange: (r) => de(() => Ye(t, { show_level: r })),
                      })
                    : e.jsx(Ke, {
                          title: "群活跃等级",
                          value: s.show_level ? "已开启" : "未开启",
                          chevron: !1,
                      }),
            }),
            e.jsx(Pe, {
                header: `${Q} 在这个房间里`,
                footer: `有人说话后，${Q} 用你的 API 决定接不接、说什么，每轮最多开口一次。关掉之后只在你点「回复」或加号里的「戳一下」时说话。`,
                children: e.jsx(pa, {
                    title: "自动接话",
                    on: ce.autoReply,
                    onChange: (r) => ne({ autoReply: r }),
                }),
            }),
            e.jsx(Pe, {
                footer: `${Q} 说话时知道你们之间的默契、最近的事和私聊里最近几句。这些是你们俩私下的事，当着朋友说不说由 TA 自己把握。`,
                children: e.jsx(pa, {
                    title: "带着我们俩的记忆",
                    on: ce.memoryIn,
                    onChange: (r) => ne({ memoryIn: r }),
                }),
            }),
            e.jsx(Pe, {
                footer: "开着的话，这次见面会进你们俩的记忆时间线，单聊时 TA 记得房间里发生过什么。关着的话，房间里的事不会带回你们俩的单聊。这三项只在你手机上，朋友看不到。",
                children: e.jsx(pa, {
                    title: `房间里的事记进${Q}的记忆`,
                    on: ce.memoryOut,
                    onChange: (r) => ne({ memoryOut: r }),
                }),
            }),
            e.jsx(Pe, {
                footer:
                    k && g.length
                        ? "你是群主。退出之后，群主会交给管理员里最早进来的那位；没有管理员就交给最早进来的人。"
                        : "",
                children: e.jsx(Ke, { title: "退出群聊", danger: !0, chevron: !1, onClick: () => he(!0) }),
            }),
            e.jsx(ka, {
                open: !!p,
                onClose: () => U(null),
                title: ue,
                message: c[_] ? `${c[_]}` : "",
                actions: ja,
            }),
            e.jsx(_t, {
                open: !!me,
                onClose: () => Be(null),
                title: me == null ? void 0 : me.title,
                message: me == null ? void 0 : me.message,
                confirm: me
                    ? {
                          label: me.label,
                          destructive: !0,
                          onClick: () => {
                              const r = me;
                              (Be(null), r.run());
                          },
                      }
                    : void 0,
            }),
            e.jsx(xt, {
                open: !!Z,
                onClose: () => oe(null),
                title: "群头衔",
                maxWidth: 340,
                children:
                    Z &&
                    e.jsxs("div", {
                        className: "lk-title-form",
                        children: [
                            e.jsxs("p", {
                                className: "lk-hint",
                                children: [
                                    "头衔挂在名字前面，群里所有人都看得到。最多 ",
                                    Fa,
                                    " 个字，留空则不显示。",
                                ],
                            }),
                            e.jsx(fa, {
                                label: Z.meName,
                                children: e.jsx(ha, {
                                    value: Z.me,
                                    placeholder: "未设置",
                                    onChange: (r) => oe((b) => ({ ...b, me: r.slice(0, Fa) })),
                                }),
                            }),
                            e.jsx(fa, {
                                label: Z.charName,
                                children: e.jsx(ha, {
                                    value: Z.char,
                                    placeholder: "未设置",
                                    onChange: (r) => oe((b) => ({ ...b, char: r.slice(0, Fa) })),
                                }),
                            }),
                            e.jsx("button", {
                                className: "lk-submit",
                                onClick: () => {
                                    const r = Z;
                                    (oe(null),
                                        de(
                                            () => Fe(t, r.uid, { titles: { me: r.me, char: r.char } }),
                                            "头衔已更新",
                                        ));
                                },
                                children: "保存",
                            }),
                        ],
                    }),
            }),
            e.jsx(xt, {
                open: !!se,
                onClose: () => I(null),
                title: "群昵称",
                maxWidth: 340,
                children:
                    se &&
                    e.jsxs("div", {
                        className: "lk-title-form",
                        children: [
                            e.jsx("p", {
                                className: "lk-hint",
                                children: "群昵称仅在本群生效，群内所有成员均可见。留空时显示名片上的名字。",
                            }),
                            e.jsx(fa, {
                                label: se.meName,
                                children: e.jsx(ha, {
                                    value: se.me,
                                    placeholder: se.meName,
                                    onChange: (r) => I((b) => ({ ...b, me: r.slice(0, 16) })),
                                }),
                            }),
                            e.jsx(fa, {
                                label: se.charName,
                                children: e.jsx(ha, {
                                    value: se.char,
                                    placeholder: se.charName,
                                    onChange: (r) => I((b) => ({ ...b, char: r.slice(0, 16) })),
                                }),
                            }),
                            e.jsx("button", {
                                className: "lk-submit",
                                onClick: async () => {
                                    var N;
                                    const r = se;
                                    I(null);
                                    const b = ((N = Oe(r.uid)) == null ? void 0 : N.aliases) || {};
                                    for (const J of ["me", "char"])
                                        (b[J] || "") !== r[J].trim() &&
                                            (await de(() =>
                                                Fe(t, r.uid, { alias: { side: J, name: r[J].trim() } }),
                                            ));
                                },
                                children: "保存",
                            }),
                        ],
                    }),
            }),
            e.jsx(ka, {
                open: L,
                onClose: () => he(!1),
                title: "退出群聊",
                message: `退出后聊天记录还留在你手机上，但不能再在这个群里说话。这次房间里的聊天，要记进${Q}的记忆吗？`,
                actions: [
                    {
                        label: `记进${Q}的记忆，退出`,
                        onClick: () => {
                            (he(!1), P(!0));
                        },
                    },
                    {
                        label: "不记，退出",
                        destructive: !0,
                        onClick: () => {
                            (he(!1), P(!1));
                        },
                    },
                ],
            }),
            e.jsx(yn, { open: pe, onClose: () => Ee(!1), value: s.notice || "", onSave: $e }),
            e.jsx(Sn, { open: Qe, onClose: () => Xe(!1), text: s.notice || "", group: s.name || "" }),
            e.jsx("div", { style: { height: 40 } }),
        ],
    });
}
export { Vn as default };
