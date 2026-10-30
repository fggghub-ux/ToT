import { j as e, r as o, R as Se } from "./vendor-react-3a46a5d3.js";
import {
    bj as _e,
    a as Qe,
    u as Ye,
    lR as Je,
    lS as Ze,
    lT as es,
    lU as Ce,
    lV as ss,
    lW as ue,
    lX as as,
    l as U,
    lY as ns,
    lZ as ts,
    bJ as ls,
    c4 as cs,
    l_ as rs,
    l$ as is,
    bK as os,
    m0 as us,
    m1 as ds,
    m2 as ms,
    m3 as hs,
    A as gs,
    c2 as xs,
    m4 as ps,
    m5 as Ee,
    m6 as js,
    le as me,
    l4 as he,
    m7 as fs,
    lb as F,
    m8 as vs,
} from "./app-2c902988.js";
import { a as Pe, e9 as Le, V as bs, bA as ks } from "./vendor-icons-e63d3118.js";
import { A as Ns, m as ys } from "./vendor-motion-62fc1664.js";
const Ae = [0, 20, 60, 150, 300, 600],
    ws = ["潜水", "冒泡", "吐槽", "活跃", "话唠", "传说"],
    $s = 8;
function Ws(s) {
    let t = 1;
    for (let a = 0; a < Ae.length; a++) (Number(s) || 0) >= Ae[a] && (t = a + 1);
    return t;
}
const Ss = (s) =>
        String(s ?? "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, $s),
    Cs = 6,
    As = (s) =>
        String(s ?? "")
            .replace(/\s+/g, "")
            .slice(0, Cs);
function Ms(s) {
    const t = Array.isArray(s) ? s : [];
    return ws.map((a, l) => As(t[l]) || a);
}
function Is({
    role: s = "member",
    title: t = "",
    level: a = 0,
    showLevel: l = !1,
    levelNames: u = null,
} = {}) {
    const d = [],
        m = s === "owner" || s === "admin" ? s : "member",
        c = Ss(t);
    return (
        c
            ? d.push({ kind: "title", role: m, text: c })
            : m === "owner"
              ? d.push({ kind: "owner", role: m, text: "群主" })
              : m === "admin" && d.push({ kind: "admin", role: m, text: "管理员" }),
        l && a > 0 && d.push({ kind: "level", role: m, text: `LV${a} ${Ms(u)[a - 1]}` }),
        d
    );
}
const _s = Object.freeze({
    owner: { bg: "#F7ECA8", fg: "#2B2A26" },
    admin: { bg: "#C9E0F3", fg: "#262B30" },
    member: { bg: "#F1C9D3", fg: "#2E2729" },
});
function Es(s) {
    const t = (s == null ? void 0 : s.groupTagColors) || {},
        a = (l) => ({ ..._s[l], ...(t[l] || {}) });
    return { owner: a("owner"), admin: a("admin"), member: a("member") };
}
function Ps(s) {
    const t = Es(s),
        a = {};
    for (const l of ["owner", "admin", "member"])
        ((a[`--gtag-${l}-bg`] = t[l].bg), (a[`--gtag-${l}-fg`] = t[l].fg));
    return a;
}
function Hs(s) {
    const t = {};
    for (const a of Array.isArray(s) ? s : []) {
        if (!a || a.role === "system" || a.type === "claim") continue;
        const l = a.role === "user" ? "me" : a.charId;
        l && (t[l] = (t[l] || 0) + 1);
    }
    return t;
}
const Me = 200;
function Ls(s = []) {
    for (let t = s.length - 1; t >= 0; t--) {
        const a = s[t],
            u =
                a &&
                (a.kind === "system" || a.role === "system" || a.type === "system") &&
                String(a.content || "").match(/^(.+?) 发布了群公告/);
        if (u) return { by: u[1], at: a.createdAt || 0 };
    }
    return null;
}
const Te = (s) => {
        if (!s) return "";
        const t = new Date(s);
        return `${t.getMonth() + 1}月${t.getDate()}日 ${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
    },
    Ts = (s) => String(s || "").replace(/\s*[（(]\d+[）)]\s*$/, "");
function Re({ title: s, sub: t, onClose: a }) {
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("button", {
                className: "btn-plain gn-x",
                onClick: a,
                "aria-label": "关闭",
                children: e.jsx(Pe, { size: 16 }),
            }),
            e.jsx("span", { className: "gn-badge", children: e.jsx(Le, { size: 20, weight: "fill" }) }),
            e.jsx("span", { className: "gn-eyebrow", children: "ANNOUNCEMENT" }),
            e.jsx("h3", { className: "gn-title", children: s }),
            t ? e.jsx("div", { className: "gn-sub", children: t }) : null,
        ],
    });
}
function qe({ meta: s }) {
    return !(s != null && s.by) && !(s != null && s.at)
        ? null
        : e.jsxs("div", {
              className: "gn-sign",
              children: [
                  e.jsx("span", { children: s.by ? `${s.by} 发布` : "" }),
                  e.jsx("time", { children: Te(s.at) }),
              ],
          });
}
function Rs({ open: s, onClose: t, text: a, group: l = "", meta: u = null }) {
    return e.jsx(_e, {
        open: s,
        onClose: t,
        noHead: !0,
        maxWidth: 340,
        children: e.jsxs("div", {
            className: "gn",
            children: [
                e.jsx(Re, {
                    title: "群公告",
                    sub: [Ts(l), "全体成员可见"].filter(Boolean).join(" · "),
                    onClose: t,
                }),
                e.jsxs("div", {
                    className: "gn-paper",
                    children: [e.jsx("p", { children: a }), e.jsx(qe, { meta: u })],
                }),
                e.jsx("button", { className: "btn-plain gn-ok", onClick: t, children: "我知道了" }),
            ],
        }),
    });
}
function Ks({ open: s, onClose: t, value: a = "", meta: l = null, onSave: u }) {
    const [d, m] = o.useState("");
    o.useEffect(() => {
        s && m(a || "");
    }, [s, a]);
    const c = d.trim(),
        j = c !== String(a || "").trim();
    return e.jsx(_e, {
        open: s,
        onClose: t,
        noHead: !0,
        maxWidth: 340,
        children: e.jsxs("div", {
            className: "gn",
            children: [
                e.jsx(Re, {
                    title: a ? "编辑群公告" : "发布群公告",
                    sub: "发布后将以系统消息通知全体成员。",
                    onClose: t,
                }),
                e.jsxs("div", {
                    className: "gn-paper edit",
                    children: [
                        e.jsx("textarea", {
                            rows: 5,
                            value: d,
                            maxLength: Me,
                            placeholder: "公告内容",
                            onChange: (R) => m(R.target.value),
                            autoFocus: !0,
                        }),
                        e.jsxs("div", {
                            className: "gn-sign",
                            children: [
                                e.jsx("span", {
                                    children: a && l != null && l.at ? `上次发布 ${Te(l.at)}` : "",
                                }),
                                e.jsxs("time", { children: [d.length, " / ", Me] }),
                            ],
                        }),
                    ],
                }),
                e.jsxs("div", {
                    className: "gn-acts",
                    children: [
                        a
                            ? e.jsx("button", {
                                  className: "btn-plain gn-ghost danger",
                                  onClick: () => {
                                      (u(""), t());
                                  },
                                  children: "清除公告",
                              })
                            : e.jsx("button", {
                                  className: "btn-plain gn-ghost",
                                  onClick: t,
                                  children: "取消",
                              }),
                        e.jsx("button", {
                            className: "btn-plain gn-ok",
                            disabled: !c || !j,
                            onClick: () => {
                                (u(c), t());
                            },
                            children: "发布",
                        }),
                    ],
                }),
            ],
        }),
    });
}
function Xs({ text: s, meta: t, onClick: a }) {
    return e.jsxs("button", {
        className: "btn-plain gn-mini",
        onClick: a,
        disabled: !a,
        children: [e.jsx("p", { children: s }), e.jsx(qe, { meta: t })],
    });
}
const qs = Object.freeze({ id: "group", name: "" });
function Qs({
    notice: s = "",
    skinChar: t = null,
    title: a,
    subtitle: l = "",
    faces: u = [],
    onBack: d,
    onMore: m,
    items: c,
    typing: j = [],
    top: R = null,
    note: q = "",
    plusItems: O = [],
    placeholder: V = "",
    onSend: M,
    onVoice: P,
    onSticker: C,
    onCardTap: W,
    active: _ = !0,
    members: G = [],
    canAtAll: I = !1,
    readOnly: $ = null,
    groupAvatar: g = "",
    groupAvatarLocal: B = !1,
}) {
    var Ne, ye;
    const se = Qe(),
        { state: ae } = Ye(),
        { ui: ge, chatPreset: ne, chatStyle: Oe, ltK: i, chatCss: xe, chatWall: pe } = Je(ae, t);
    Ze(_);
    const te = o.useRef(null);
    es(te, [_]);
    const L = o.useRef(null),
        Ge = o.useRef(null),
        Be = o.useMemo(() => Ls(c), [c]),
        [le, ce] = o.useState(!1),
        [ze, De] = o.useState(0),
        [Fe, Ue] = o.useState(!1),
        [je, re] = o.useState(!1),
        [A, H] = o.useState(null),
        [Ve, K] = o.useState(!1),
        [f, fe] = o.useState(null),
        X = o.useRef([]),
        Q = o.useRef(""),
        Y = o.useRef(W);
    Y.current = W;
    const T = ne === "imessage",
        ve = o.useRef(new Map()),
        be = o.useRef(new Map()),
        We = o.useMemo(() => {
            var x;
            const n = [],
                h = new Map();
            for (let v = 0; v < c.length; v++) {
                const r = c[v],
                    b = c[v - 1],
                    k = c[v + 1],
                    N = (w) => w.kind === "system" || w.kind === "arrival" || w.kind === "narration",
                    p = (w, ee) => {
                        var we, $e;
                        return (
                            w &&
                            ee &&
                            !N(w) &&
                            !N(ee) &&
                            !!w.out == !!ee.out &&
                            (w.out ||
                                ((we = w.who) == null ? void 0 : we.key) ===
                                    (($e = ee.who) == null ? void 0 : $e.key))
                        );
                    },
                    y = !(p(b, r) && r.createdAt - b.createdAt < Ce),
                    S = !(p(r, k) && k.createdAt - r.createdAt < Ce),
                    E = !b || r.createdAt - b.createdAt >= ss,
                    z = [
                        r.id,
                        r.kind,
                        r.content,
                        r.createdAt,
                        r.out ? 1 : 0,
                        r.src,
                        r.audioUrl,
                        r.status,
                        r.packetStatus,
                        (x = r.quote) == null ? void 0 : x.text,
                        r.location,
                        r.note,
                    ].join("|");
                let Z = ve.current.get(z);
                (Z || (Z = Os(r)), h.set(z, Z));
                let D = null;
                if (!r.out && r.who) {
                    const w = `${r.who.key}|${r.who.name}|${r.who.avatar || ""}`;
                    ((D = be.current.get(w)),
                        D ||
                            ((D = { id: r.who.key, name: r.who.name, avatar: r.who.avatar || "" }),
                            be.current.set(w, D)));
                }
                n.push({ it: r, m: Z, who: D, head: y, tail: S, showDay: E });
            }
            return ((ve.current = h), n);
        }, [c]),
        Ie = c.length ? `${c[c.length - 1].id}` : "";
    o.useEffect(() => {
        const n = te.current;
        n && (n.scrollTop = n.scrollHeight);
    }, [Ie, j.length, q]);
    const ke = (n) => {
            var r, b, k, N;
            const h = String(
                ((b = (r = L.current) == null ? void 0 : r.getValue) == null ? void 0 : b.call(r)) || "",
            ).trim();
            if (!h) return;
            (N = (k = L.current) == null ? void 0 : k.clear) == null || N.call(k);
            const x = [];
            for (const p of X.current)
                h.includes(`@${p.name}`) &&
                    (p.all
                        ? x.includes("all") || x.push("all")
                        : x.some((y) => y !== "all" && y.__key === p.key) ||
                          x.push({ ...p.ref, __key: p.key }));
            ((X.current = []), (Q.current = ""));
            const v = A;
            (H(null),
                M == null ||
                    M(h, {
                        reply: n,
                        at: x.map((p) => (p === "all" ? "all" : (({ __key: y, ...S }) => S)(p))),
                        quote: v,
                    }));
        },
        J = (n, h = !1) => {
            var b, k, N, p;
            const x = String(
                    ((k = (b = L.current) == null ? void 0 : b.getValue) == null ? void 0 : k.call(b)) || "",
                ),
                v = h && x.endsWith("@") ? x.slice(0, -1) : x,
                r = `${v}${v && !/\s$/.test(v) ? " " : ""}@${n.name} `;
            ((p = (N = L.current) == null ? void 0 : N.setValue) == null || p.call(N, r),
                (Q.current = r),
                (X.current = [...X.current, n]),
                setTimeout(() => {
                    var y, S;
                    return (S = (y = L.current) == null ? void 0 : y.focusEnd) == null ? void 0 : S.call(y);
                }, 30));
        },
        ie = (n) => G.find((h) => h.key === n),
        He = (n) => {
            (n.length === Q.current.length + 1 && n.endsWith("@") && (G.length || I) && K(!0),
                (Q.current = n));
        },
        Ke = {
            voice: "[语音]",
            sticker: "[动画表情]",
            photo: "[照片]",
            music: "[音乐]",
            redpacket: "[红包]",
            transfer: "[转账]",
            transfer_response: "[转账回执]",
            location: "[位置]",
            gift: "[礼物]",
            collect: "[收款]",
            record: "[聊天记录]",
        },
        oe = (n) => {
            var h;
            return {
                id: n.id,
                name: n.out ? "我" : ((h = n.who) == null ? void 0 : h.name) || "",
                text: String(Ke[n.kind] || n.content || "").slice(0, 80),
                ...(n.kind === "sticker"
                    ? { img: n.src || "", media: !0 }
                    : n.kind === "photo"
                      ? { img: n.imgRef || "", media: !0 }
                      : {}),
            };
        },
        Xe = T
            ? e.jsxs("div", {
                  className: `ios-nav imessage-nav ${i("nav")}`,
                  children: [
                      e.jsx(ue, { at: "nav" }),
                      e.jsx("button", {
                          className: `imessage-back btn-plain ${i("nav-back")}`,
                          onClick: d,
                          "aria-label": "返回",
                          children: e.jsx(as, {}),
                      }),
                      e.jsxs("button", {
                          className: `imessage-profile btn-plain ${i("nav-title")}`,
                          onClick: m,
                          "aria-label": "群设置",
                          children: [
                              g
                                  ? e.jsx("span", {
                                        className: `imessage-profile-avatar gs-group-ava ${i("nav-avatar")}`,
                                        children: B
                                            ? e.jsx(U, { src: g, alt: "" })
                                            : e.jsx("img", { src: g, alt: "" }),
                                    })
                                  : e.jsx("span", {
                                        className: `imessage-profile-avatar gs-mosaic ${i("nav-avatar")}`,
                                        children: u
                                            .slice(0, 4)
                                            .map((n, h) =>
                                                e.jsx(
                                                    "span",
                                                    {
                                                        children:
                                                            n != null && n.avatar
                                                                ? n.local
                                                                    ? e.jsx(U, { src: n.avatar, alt: "" })
                                                                    : e.jsx("img", { src: n.avatar, alt: "" })
                                                                : e.jsx("i", {
                                                                      children: (
                                                                          (n == null ? void 0 : n.name) || "·"
                                                                      ).slice(0, 1),
                                                                  }),
                                                    },
                                                    h,
                                                ),
                                            ),
                                    }),
                              e.jsxs("span", {
                                  className: `imessage-name-pill ${i("nav-name")}`,
                                  children: [e.jsx("b", { children: a }), e.jsx(ns, {})],
                              }),
                          ],
                      }),
                      e.jsx("div", {
                          className: "imessage-actions",
                          children: e.jsx("button", {
                              className: `imessage-more btn-plain ${i("nav-more")}`,
                              onClick: m,
                              "aria-label": "群设置",
                              children: e.jsx(ts, {}),
                          }),
                      }),
                  ],
              })
            : e.jsxs("div", {
                  className: `ios-nav ${i("nav")}`,
                  children: [
                      e.jsx(ue, { at: "nav" }),
                      e.jsx("div", {
                          className: "nav-left",
                          children: e.jsx("button", {
                              className: `ios-capsule icon-only btn-plain ${i("nav-back")}`,
                              onClick: d,
                              "aria-label": "返回",
                              children: e.jsx("svg", {
                                  width: "16",
                                  height: "16",
                                  viewBox: "0 0 16 16",
                                  fill: "none",
                                  children: e.jsx("path", {
                                      d: "M10 3l-5 5 5 5",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                  }),
                              }),
                          }),
                      }),
                      e.jsxs("button", {
                          className: `btn-plain nav-title-c ${i("nav-title")}`,
                          onClick: m,
                          children: [
                              a,
                              l && e.jsx("span", { className: `nav-alt-tag ${i("nav-alt")}`, children: l }),
                          ],
                      }),
                      e.jsx("div", {
                          className: "nav-right",
                          children: e.jsx("button", {
                              className: `ios-capsule icon-only btn-plain ${i("nav-more")}`,
                              onClick: m,
                              "aria-label": "群设置",
                              children: e.jsx(bs, { size: 16, strokeWidth: 2.2 }),
                          }),
                      }),
                  ],
              });
    return e.jsxs(ls.Provider, {
        value: i,
        children: [
            e.jsxs("div", {
                className: `chat-shell ${T ? "imessage-preset" : "wechat-preset"} gs-shell w-full flex flex-col overflow-hidden ${i("chat")}`,
                style: { ...Oe, ...Ps(ae.ui) },
                children: [
                    pe &&
                        e.jsx("div", {
                            className: "chat-wall",
                            "aria-hidden": !0,
                            style: { backgroundImage: `url(${pe})` },
                        }),
                    "   ",
                    xe && !cs() && e.jsx("style", { "data-lt-css": "group", children: xe }),
                    e.jsx(ue, { at: "chat" }),
                    Xe,
                    s ? e.jsx(Gs, { text: s, group: a, meta: Be }) : null,
                    e.jsxs("div", {
                        ref: te,
                        className: `chat-msg-list flex-1 overflow-y-auto overflow-x-hidden px-3 ${i("list")}`,
                        onPointerDownCapture: () => {
                            le && ce(!1);
                        },
                        children: [
                            R,
                            We.map(({ it: n, m: h, who: x, head: v, tail: r, showDay: b }) => {
                                var k, N, p, y, S;
                                return n.kind === "claim"
                                    ? e.jsx(
                                          Se.Fragment,
                                          {
                                              children: e.jsx("div", {
                                                  className: `msg-day-sep ${i("system")}`,
                                                  children: e.jsxs("span", {
                                                      className: "light gs-claim",
                                                      children: [e.jsx(Bs, {}), n.content],
                                                  }),
                                              }),
                                          },
                                          h.id,
                                      )
                                    : n.kind === "narration"
                                      ? e.jsx(
                                            "div",
                                            {
                                                className: `narration-row ${i("narration", "out")}`,
                                                children: e.jsx("div", {
                                                    className: `narration-standalone ${i("narration__text", "out")}`,
                                                    children: String(n.content || "").replace(
                                                        /^\*+|\*+$/g,
                                                        "",
                                                    ),
                                                }),
                                            },
                                            h.id,
                                        )
                                      : n.kind === "arrival"
                                        ? e.jsxs(
                                              "div",
                                              {
                                                  className: `gs-arrive${n.gone ? " gone" : ""} ${i("system")}`,
                                                  children: [
                                                      e.jsxs("span", {
                                                          className: "gs-arrive-pair",
                                                          children: [
                                                              e.jsx("span", {
                                                                  children:
                                                                      (k = n.me) != null && k.avatar
                                                                          ? e.jsx("img", {
                                                                                src: n.me.avatar,
                                                                                alt: "",
                                                                            })
                                                                          : e.jsx("i", {
                                                                                children: (
                                                                                    ((N = n.me) == null
                                                                                        ? void 0
                                                                                        : N.name) || "·"
                                                                                ).slice(0, 1),
                                                                            }),
                                                              }),
                                                              e.jsx("span", {
                                                                  children:
                                                                      (p = n.char) != null && p.avatar
                                                                          ? e.jsx("img", {
                                                                                src: n.char.avatar,
                                                                                alt: "",
                                                                            })
                                                                          : e.jsx("i", {
                                                                                children: (
                                                                                    ((y = n.char) == null
                                                                                        ? void 0
                                                                                        : y.name) || "·"
                                                                                ).slice(0, 1),
                                                                            }),
                                                              }),
                                                          ],
                                                      }),
                                                      e.jsx("span", {
                                                          className: "gs-arrive-text",
                                                          children: n.content,
                                                      }),
                                                      e.jsx("time", {
                                                          children: new Date(n.createdAt).toLocaleTimeString(
                                                              "zh-CN",
                                                              {
                                                                  hour: "2-digit",
                                                                  minute: "2-digit",
                                                                  hour12: !1,
                                                              },
                                                          ),
                                                      }),
                                                  ],
                                              },
                                              h.id,
                                          )
                                        : e.jsxs(
                                              Se.Fragment,
                                              {
                                                  children: [
                                                      b &&
                                                          e.jsx("div", {
                                                              className: `msg-day-sep ${T ? "imessage-stamp" : ""} ${i("day")}`,
                                                              children: T
                                                                  ? e.jsx("span", {
                                                                        className: i("day-text"),
                                                                        children: rs(n.createdAt),
                                                                    })
                                                                  : e.jsx("span", {
                                                                        className: `day-pill ${i("day-text")}`,
                                                                        children: is(n.createdAt),
                                                                    }),
                                                          }),
                                                      e.jsx(os, {
                                                          m: h,
                                                          char: x || t || qs,
                                                          me: ae.me,
                                                          senderName: n.out
                                                              ? ""
                                                              : n.label ||
                                                                ((S = n.who) == null ? void 0 : S.name) ||
                                                                "",
                                                          senderTags: n.out ? null : n.tags,
                                                          isFirstBubble: v,
                                                          isLastBubble: r,
                                                          segmentGroupHead: v,
                                                          segmentGroupTail: r,
                                                          preset: ne,
                                                          showCharAvatar: !0,
                                                          showUserAvatar: ge.showUserAvatar,
                                                          charAvatarMode: "first",
                                                          userAvatarMode: ge.userAvatarMode || "first",
                                                          onCardTap: () => {
                                                              var E;
                                                              return (E = Y.current) == null
                                                                  ? void 0
                                                                  : E.call(Y, n);
                                                          },
                                                          onLongPress: $ ? void 0 : () => fe(n),
                                                          onSwipeQuote: $ ? void 0 : () => H(oe(n)),
                                                          onAvatarLongPress: $
                                                              ? void 0
                                                              : () => {
                                                                    var z;
                                                                    const E = ie(
                                                                        (z = n.who) == null ? void 0 : z.key,
                                                                    );
                                                                    E && J(E);
                                                                },
                                                      }),
                                                  ],
                                              },
                                              h.id,
                                          );
                            }),
                            j.map((n) =>
                                e.jsxs(
                                    "div",
                                    {
                                        className: `msg-row in group-head group-tail has-avatar ${T ? "imessage-message" : ""} ${i("row", "in", "head", "tail")}`,
                                        children: [
                                            e.jsx(us, {
                                                side: "in",
                                                url: n.avatar,
                                                name: n.name,
                                                visible: !0,
                                                className: i("avatar", "in"),
                                            }),
                                            e.jsxs("div", {
                                                className: `msg-slot ${i("slot")}`,
                                                children: [
                                                    e.jsx("div", {
                                                        className: `msg-sender ${i("sender")}`,
                                                        children: n.name,
                                                    }),
                                                    e.jsxs("div", {
                                                        className: `msg-bubble ${i("bubble", "in")} ${i("typing")}`,
                                                        style: { padding: "10px 14px" },
                                                        children: [
                                                            e.jsx("div", { className: "typing-dot" }),
                                                            e.jsx("div", {
                                                                className: "typing-dot",
                                                                style: { marginLeft: 4 },
                                                            }),
                                                            e.jsx("div", {
                                                                className: "typing-dot",
                                                                style: { marginLeft: 4 },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    n.key,
                                ),
                            ),
                            q &&
                                e.jsx("div", {
                                    className: `msg-day-sep ${i("system")}`,
                                    children: e.jsx("span", { className: "light", children: q }),
                                }),
                        ],
                    }),
                    A &&
                        !$ &&
                        e.jsxs("div", {
                            className: `px-3 py-2 flex items-center gap-2 ${i("quote-bar")}`,
                            style: { background: "var(--card)", borderTop: "0.5px solid var(--separator)" },
                            children: [
                                e.jsx("div", {
                                    className: "w-[3px] self-stretch rounded-full",
                                    style: { background: "var(--text-3)" },
                                }),
                                e.jsxs("div", {
                                    className: `flex-1 min-w-0 ${i("quote-bar-text")}`,
                                    children: [
                                        e.jsxs("div", {
                                            className: `ios-caption-1 ${i("quote-bar-name")}`,
                                            style: { color: "var(--text-2)" },
                                            children: ["回复 ", A.name],
                                        }),
                                        !A.media &&
                                            e.jsx("div", {
                                                className: `ios-footnote truncate ${i("quote-bar-body")}`,
                                                style: { color: "var(--text-2)" },
                                                children: A.text,
                                            }),
                                    ],
                                }),
                                A.media &&
                                    (A.img
                                        ? e.jsx(U, {
                                              className: "quote-thumb quote-bar-thumb",
                                              src: A.img,
                                              alt: "",
                                              draggable: !1,
                                          })
                                        : e.jsx("span", {
                                              className: "quote-thumb is-empty quote-bar-thumb",
                                              "aria-hidden": !0,
                                              children: e.jsxs("svg", {
                                                  viewBox: "0 0 24 24",
                                                  fill: "none",
                                                  stroke: "currentColor",
                                                  strokeWidth: "1.6",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  children: [
                                                      e.jsx("rect", {
                                                          x: "3.5",
                                                          y: "5",
                                                          width: "17",
                                                          height: "14",
                                                          rx: "2.5",
                                                      }),
                                                      e.jsx("circle", { cx: "9", cy: "10", r: "1.6" }),
                                                      e.jsx("path", { d: "m4 17 5-4.5 4 3.5 3-2.5 4 3.5" }),
                                                  ],
                                              }),
                                          })),
                                e.jsx("button", {
                                    className: `btn-plain ${i("quote-bar-close")}`,
                                    onClick: () => H(null),
                                    "aria-label": "取消引用",
                                    children: e.jsx(Pe, { size: 16 }),
                                }),
                            ],
                        }),
                    Ve &&
                        !$ &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx("div", { className: "gs-mpop-mask", onClick: () => K(!1) }),
                                e.jsx("div", {
                                    className: "gs-mpop-anchor",
                                    children: e.jsxs("div", {
                                        className: "gs-mpop",
                                        role: "listbox",
                                        "aria-label": "选择要 @ 的人",
                                        children: [
                                            I &&
                                                e.jsxs("button", {
                                                    className: "btn-plain",
                                                    onClick: () => {
                                                        (K(!1),
                                                            J({ key: "__all", name: "所有人", all: !0 }, !0));
                                                    },
                                                    children: [
                                                        e.jsx("span", {
                                                            className: "gs-mpop-ava all",
                                                            children: "@",
                                                        }),
                                                        e.jsx("b", { children: "所有人" }),
                                                    ],
                                                }),
                                            G.map((n) =>
                                                e.jsxs(
                                                    "button",
                                                    {
                                                        className: "btn-plain",
                                                        onClick: () => {
                                                            (K(!1), J(n, !0));
                                                        },
                                                        children: [
                                                            e.jsx("span", {
                                                                className: "gs-mpop-ava",
                                                                children: n.avatar
                                                                    ? n.local
                                                                        ? e.jsx(U, { src: n.avatar, alt: "" })
                                                                        : e.jsx("img", {
                                                                              src: n.avatar,
                                                                              alt: "",
                                                                          })
                                                                    : e.jsx("i", {
                                                                          children: (n.name || "·").slice(
                                                                              0,
                                                                              1,
                                                                          ),
                                                                      }),
                                                            }),
                                                            e.jsx("b", { children: n.name }),
                                                            n.tag ? e.jsx("em", { children: n.tag }) : null,
                                                        ],
                                                    },
                                                    n.key,
                                                ),
                                            ),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    $
                        ? e.jsx("div", { className: `gs-readonly ${i("composer")}`, children: $ })
                        : e.jsx(ds, {
                              ref: L,
                              onValueChange: He,
                              inputRef: Ge,
                              preset: ne,
                              voiceMode: Fe,
                              setVoiceMode: Ue,
                              noVoice: !P,
                              noEmoji: !C,
                              onVoiceRecord: (n) => (P == null ? void 0 : P(n)),
                              onEmoji: () => re(!0),
                              placeholder: V,
                              isThinking: !1,
                              onSendOnly: () => ke(!1),
                              onReply: () => ke(!0),
                              onPlus: () => ce((n) => !n),
                              showPlus: le,
                          }),
                    e.jsx(Ns, {
                        children:
                            le &&
                            O.length > 0 &&
                            e.jsx(ys.div, {
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                className: `overflow-hidden wechat-plus-tray ${T ? "imessage-plus-tray" : ""} ${i("plus")}`,
                                children: e.jsx(ms, {
                                    page: ze,
                                    setPage: De,
                                    children: Array.from({ length: Math.ceil(O.length / 6) }, (n, h) =>
                                        e.jsx(
                                            "div",
                                            {
                                                className: "plus-page-grid",
                                                children: O.slice(h * 6, h * 6 + 6).map((x) =>
                                                    e.jsx(
                                                        hs,
                                                        {
                                                            icon: x.icon,
                                                            label: x.label,
                                                            onClick: () => {
                                                                (ce(!1), x.onClick());
                                                            },
                                                        },
                                                        x.label,
                                                    ),
                                                ),
                                            },
                                            h,
                                        ),
                                    ),
                                }),
                            }),
                    }),
                ],
            }),
            e.jsx(gs, {
                open: !!f,
                onClose: () => fe(null),
                title: f
                    ? `${f.out ? "我" : ((Ne = f.who) == null ? void 0 : Ne.name) || ""}：${oe(f).text.slice(0, 30)}`
                    : "",
                actions: f
                    ? [
                          { label: "引用", onClick: () => H(oe(f)) },
                          ...(f.kind === "text" || f.kind === "voice"
                              ? [
                                    {
                                        label: "复制",
                                        onClick: async () => {
                                            try {
                                                (await navigator.clipboard.writeText(String(f.content || "")),
                                                    se == null || se("已复制", "success"));
                                            } catch {}
                                        },
                                    },
                                ]
                              : []),
                          ...(!f.out && ie((ye = f.who) == null ? void 0 : ye.key)
                              ? [{ label: `@${f.who.name}`, onClick: () => J(ie(f.who.key)) }]
                              : []),
                      ]
                    : [],
            }),
            e.jsx(xs, {
                open: je,
                onClose: () => re(!1),
                title: "表情",
                children:
                    je && e.jsx(ps, { onClose: () => re(!1), onPick: (n) => (C == null ? void 0 : C(n)) }),
            }),
        ],
    });
}
function Os(s) {
    const t = s.kind === "system" ? "system" : s.out ? "user" : "assistant",
        a = {
            id: s.id,
            role: t,
            content: s.content,
            createdAt: s.createdAt,
            ...(s.quote
                ? {
                      quoted: {
                          name: s.quote.name,
                          content: s.quote.text,
                          role: "assistant",
                          ...(s.quote.type && s.quote.type !== "card"
                              ? { type: s.quote.type, img: s.quote.img || "" }
                              : {}),
                      },
                  }
                : {}),
        };
    switch (s.kind) {
        case "system":
            return { ...a, type: "system" };
        case "voice":
            return {
                ...a,
                type: "voice",
                durationMs: s.durationMs,
                audioUrl: s.audioUrl || void 0,
                mode: s.audioUrl ? "real" : "fake",
            };
        case "sticker":
            return { ...a, type: "sticker", content: s.src || "", name: s.name || "" };
        case "photo":
            return { ...a, type: "text_image", content: s.content || "" };
        case "music":
            return {
                ...a,
                type: "music_card",
                kind: s.musicKind || "song",
                song: s.song,
                note: s.note || "",
                content: "",
            };
        case "redpacket":
            return {
                ...a,
                type: "red_packet_card",
                mode: s.mode,
                packetStatus: s.packetStatus,
                group: !0,
                toName: s.toName || "",
            };
        case "transfer":
            return {
                ...a,
                type: "transfer_card",
                amount: s.amount,
                note: s.note,
                status: s.status || "pending",
            };
        case "transfer_response":
            return { ...a, type: "transfer_response", action: s.action, amount: s.amount };
        case "location":
            return { ...a, type: "location_card", location: s.location, note: s.note || "" };
        case "gift":
            return {
                ...a,
                type: "gift_card",
                content: s.content,
                brand: s.brand || "",
                price: s.price || 0,
                note: s.note || "",
                sent: !0,
            };
        case "narration":
            return { ...a, type: "narration" };
        case "collect":
            return {
                ...a,
                type: "collect_card",
                each: s.each,
                note: s.note,
                members: s.members,
                paid: s.paid,
                closed: s.closed,
            };
        case "record":
            return {
                ...a,
                type: "chat_record_card",
                title: s.title,
                items: s.items || [],
                people: s.people || [],
            };
        default:
            return { ...a, type: "text" };
    }
}
function Gs({ text: s, group: t = "", meta: a = null }) {
    const [l, u] = o.useState(!1);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsxs("button", {
                className: "gs-notice btn-plain",
                onClick: () => u(!0),
                "aria-label": "查看群公告",
                children: [
                    e.jsx("span", {
                        className: "gs-notice-ico",
                        children: e.jsx(Le, { size: 14, weight: "fill" }),
                    }),
                    e.jsx("span", { className: "gs-notice-text", children: s }),
                    e.jsx(ks, { size: 14, weight: "bold", className: "gs-notice-go" }),
                ],
            }),
            e.jsx(Rs, { open: l, onClose: () => u(!1), text: s, group: t, meta: a }),
        ],
    });
}
function Bs() {
    return e.jsxs("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": !0,
        children: [
            e.jsx("rect", { x: "4.5", y: "3", width: "15", height: "18", rx: "2.5" }),
            e.jsx("path", { d: "M4.5 8.5c2.2 1.9 4.7 2.8 7.5 2.8s5.3-.9 7.5-2.8" }),
        ],
    });
}
function de({ src: s, name: t, local: a, size: l = 40 }) {
    const u = e.jsx("i", { children: (t || "·").slice(0, 1) });
    return e.jsx("span", {
        className: "gm-face",
        style: { width: l, height: l },
        children: s
            ? a
                ? e.jsx(U, { src: s, alt: "", fallback: u })
                : e.jsx("img", { src: s, alt: "" })
            : u,
    });
}
const zs = (s) => {
    const t = new Date(s);
    return Number.isFinite(t.getTime())
        ? `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`
        : "";
};
function Ys({ open: s, onClose: t, onSend: a, people: l = 2, balance: u = 0, targets: d = null }) {
    return s
        ? e.jsx(Ee, {
              kind: "packet",
              balance: u,
              onClose: t,
              group: {
                  people: l,
                  targets: d || [],
                  exclusive: !!(d != null && d.length),
                  check: (m) => js(m),
              },
              onSend: (m) => a({ ...m, total: me(he(m.total)) }),
          })
        : null;
}
function Js({ open: s, onClose: t, onSend: a, targets: l = [], balance: u = 0 }) {
    return s
        ? e.jsx(Ee, {
              kind: "transfer",
              balance: u,
              onClose: t,
              group: { people: l.length + 1, targets: l },
              onSend: ({ target: d, amount: m, note: c }) => {
                  const j = vs({ amount: m, balance: u });
                  if (j) throw new Error(j);
                  return a({ target: d, amount: me(he(m)), note: c });
              },
          })
        : null;
}
function Zs({
    open: s,
    onClose: t,
    sender: a,
    note: l,
    total: u,
    count: d,
    mode: m,
    state: c,
    grabs: j = [],
    onGrab: R,
    mineIsSender: q = !1,
    toName: O = "",
}) {
    const [V, M] = o.useState(!1),
        [P, C] = o.useState(""),
        [W, _] = o.useState(!1);
    o.useEffect(() => {
        s &&
            (M(!1),
            C(""),
            _((c == null ? void 0 : c.status) !== "fresh" && (c == null ? void 0 : c.status) !== "others"));
    }, [s]);
    const G = o.useMemo(() => fs(j, d), [j, d]);
    if (!s) return null;
    const I = async () => {
            (M(!0), C(""));
            try {
                (await R(), _(!0));
            } catch (g) {
                (C((g == null ? void 0 : g.message) || "没抢到"), _(!0));
            } finally {
                M(!1);
            }
        },
        $ = j.reduce((g, B) => g + he(B.amount), 0);
    return e.jsx("div", {
        className: "gm-mask",
        onClick: t,
        children: W
            ? e.jsxs("div", {
                  className: "gm-detail",
                  onClick: (g) => g.stopPropagation(),
                  children: [
                      e.jsxs("div", {
                          className: "gm-detail-head",
                          children: [
                              e.jsx(de, {
                                  src: a == null ? void 0 : a.avatar,
                                  name: a == null ? void 0 : a.name,
                                  local: a == null ? void 0 : a.local,
                                  size: 48,
                              }),
                              e.jsxs("b", {
                                  children: [
                                      (a == null ? void 0 : a.name) || "有人",
                                      " 的红包",
                                      m === "lucky"
                                          ? e.jsx("em", { children: "拼" })
                                          : m === "exclusive"
                                            ? e.jsx("em", { children: "专属" })
                                            : null,
                                  ],
                              }),
                              e.jsx("p", { children: l || "恭喜发财，大吉大利" }),
                              (c == null ? void 0 : c.status) === "grabbed"
                                  ? e.jsxs("div", {
                                        className: "gm-got",
                                        children: [F(c.amount), e.jsx("small", { children: "元" })],
                                    })
                                  : e.jsx("div", {
                                        className: "gm-miss",
                                        children:
                                            P ||
                                            ((c == null ? void 0 : c.status) === "expired"
                                                ? "红包已过期"
                                                : q
                                                  ? ""
                                                  : (c == null ? void 0 : c.status) === "empty"
                                                    ? "手慢了，红包派完了"
                                                    : ""),
                                    }),
                          ],
                      }),
                      e.jsx("div", {
                          className: "gm-detail-sum",
                          children:
                              j.length >= d
                                  ? `${d} 个红包共 ${F(u)} 元，已被领完`
                                  : `已领取 ${j.length}/${d} 个，共 ${F(me($))}/${F(u)} 元`,
                      }),
                      e.jsxs("div", {
                          className: "gm-grabs",
                          children: [
                              j.map((g, B) =>
                                  e.jsxs(
                                      "div",
                                      {
                                          className: "gm-grab",
                                          children: [
                                              e.jsx(de, {
                                                  src: g.avatar,
                                                  name: g.name,
                                                  local: g.local,
                                                  size: 38,
                                              }),
                                              e.jsxs("div", {
                                                  children: [
                                                      e.jsx("b", { children: g.name }),
                                                      e.jsx("small", { children: zs(g.at) }),
                                                  ],
                                              }),
                                              e.jsxs("span", {
                                                  className: "gm-grab-amt",
                                                  children: [
                                                      F(g.amount),
                                                      " 元",
                                                      G === g ? e.jsx("em", { children: "手气最佳" }) : null,
                                                  ],
                                              }),
                                          ],
                                      },
                                      B,
                                  ),
                              ),
                              !j.length && e.jsx("p", { className: "gm-hint center", children: "还没人领" }),
                          ],
                      }),
                      e.jsx("button", { className: "gm-close", onClick: t, children: "关闭" }),
                  ],
              })
            : e.jsxs("div", {
                  className: "gm-envelope",
                  onClick: (g) => g.stopPropagation(),
                  children: [
                      e.jsxs("div", {
                          className: "gm-env-top",
                          children: [
                              e.jsx(de, {
                                  src: a == null ? void 0 : a.avatar,
                                  name: a == null ? void 0 : a.name,
                                  local: a == null ? void 0 : a.local,
                                  size: 44,
                              }),
                              e.jsxs("b", { children: [(a == null ? void 0 : a.name) || "有人", " 的红包"] }),
                              e.jsx("p", { children: l || "恭喜发财，大吉大利" }),
                          ],
                      }),
                      (c == null ? void 0 : c.status) === "others"
                          ? e.jsxs("p", {
                                className: "gm-env-excl",
                                children: [O, " 的专属红包，只有 TA 可以领取"],
                            })
                          : e.jsx("button", {
                                className: "gm-open",
                                disabled: V,
                                onClick: I,
                                "aria-label": "开红包",
                                children: V ? "…" : "開",
                            }),
                      e.jsx("button", {
                          className: "gm-env-link",
                          onClick: () => _(!0),
                          children: "看看大家的手气 ›",
                      }),
                  ],
              }),
    });
}
export {
    Qs as G,
    Cs as L,
    Xs as N,
    Ys as R,
    $s as T,
    Ps as a,
    As as b,
    Ss as c,
    Ks as d,
    Rs as e,
    Ae as f,
    Es as g,
    ws as h,
    Js as i,
    Zs as j,
    Is as k,
    Ms as l,
    Ws as m,
    Ls as n,
    Hs as s,
};
