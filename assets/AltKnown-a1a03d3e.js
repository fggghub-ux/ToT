import { r as g, j as n, R as E, a as U } from "./vendor-react-3a46a5d3.js";
import {
    ex as V,
    dy as G,
    dz as Q,
    aq as tt,
    ar as nt,
    l as I,
    u as L,
    a as et,
    cc as st,
    cL as at,
    f as ot,
    bh as _,
    fB as rt,
    eJ as q,
    dH as T,
    eA as D,
    bj as z,
} from "./app-2c902988.js";
import { c as lt, S as ct, a as it, N as dt } from "./vendor-icons-e63d3118.js";
function W(e, t, a = 0) {
    const s = t == null ? void 0 : t.replyToId;
    if (!s || a > 8) return t == null ? void 0 : t.id;
    const o = e.get(s);
    return o ? W(e, o, a + 1) : t.id;
}
function ut(e) {
    const t = Array.isArray(e) ? e.filter(Boolean) : [],
        a = new Map(t.map((r) => [r.id, r])),
        s = (r) => Number(r == null ? void 0 : r.createdAt) || 0,
        o = [],
        l = new Map();
    for (const r of t) {
        const c = W(a, r);
        if (c === r.id) {
            o.push({ ...r, replies: [] });
            continue;
        }
        (l.has(c) || l.set(c, []), l.get(c).push(r));
    }
    for (const r of o) r.replies = (l.get(r.id) || []).sort((c, i) => s(c) - s(i));
    return o.sort((r, c) => s(r) - s(c));
}
function vt(e) {
    const t = [];
    for (const a of ut(e)) {
        const { replies: s, ...o } = a;
        t.push({ ...o, depth: 0, rootId: a.id, replyCount: s.length });
        for (const l of s) t.push({ ...l, depth: 1, rootId: a.id, replyCount: 0 });
    }
    return t;
}
const v = (e, t = 240) =>
        String(e || "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, t),
    ht = "[\\p{L}\\p{N}_.]",
    mt = new RegExp(`(^|[^A-Za-z0-9_.@])@(${ht}{0,30})$`, "u"),
    B = /[A-Za-z0-9_]/;
function F(e, t) {
    const a = String(e || ""),
        s = a.slice(0, t ?? a.length),
        o = s.match(mt);
    return o ? { start: s.length - o[2].length - 1, query: o[2] } : null;
}
function pt(e, t, a = 6) {
    const s = String(t || "").toLowerCase(),
        o = (Array.isArray(e) ? e : []).filter((r) => r && r.handle);
    if (!s) return o.slice(0, a);
    const l = (r) => {
        const c = String(r.handle).toLowerCase(),
            i = String(r.name || "").toLowerCase();
        return c.startsWith(s) ? 0 : i.startsWith(s) ? 1 : c.includes(s) || i.includes(s) ? 2 : 9;
    };
    return o
        .map((r) => [l(r), r])
        .filter(([r]) => r < 9)
        .sort((r, c) => r[0] - c[0])
        .slice(0, a)
        .map(([, r]) => r);
}
function xt(e, t, a) {
    const s = String(e || ""),
        o = F(s, t),
        l = t ?? s.length,
        r = o ? o.start : l,
        c = `@${a} `,
        i = s.slice(l).replace(/^ /, "");
    return { value: s.slice(0, r) + c + i, caret: r + c.length };
}
function H(e, t, a) {
    const s = t > 0 ? e[t - 1] : "";
    if (s && /[A-Za-z0-9_.]/.test(s)) return null;
    const o = e.slice(t + 1),
        l = o.toLowerCase();
    for (const c of a) {
        const i = String(c.handle);
        if (!l.startsWith(i.toLowerCase())) continue;
        const h = o[i.length] || "";
        if (!(h && B.test(i[i.length - 1]) && B.test(h)))
            return { len: 1 + i.length, handle: o.slice(0, i.length), id: c.id };
    }
    const r = o.match(/^[A-Za-z0-9_]+(?:\.[A-Za-z0-9_]+)*/);
    return r ? { len: 1 + r[0].length, handle: r[0], id: null } : null;
}
const X = (e) =>
    (Array.isArray(e) ? e : [])
        .filter((t) => (t == null ? void 0 : t.handle))
        .slice()
        .sort((t, a) => String(a.handle).length - String(t.handle).length);
function Mt(e, t) {
    const a = String(e || ""),
        s = X(t),
        o = [];
    for (let l = a.indexOf("@"); l >= 0; l = a.indexOf("@", l + 1)) {
        const r = H(a, l, s);
        r != null && r.id && !o.includes(r.id) && o.push(r.id);
    }
    return o;
}
function ft(e, t = []) {
    const a = String(e || ""),
        s = X(t),
        o = [];
    let l = 0;
    for (let r = a.indexOf("@"); r >= 0; r = a.indexOf("@", r + 1)) {
        if (r < l) continue;
        const c = H(a, r, s);
        c &&
            (r > l && o.push({ text: a.slice(l, r) }),
            o.push({ text: `@${c.handle}`, at: !0, id: c.id }),
            (l = r + c.len));
    }
    return (l < a.length && o.push({ text: a.slice(l) }), o);
}
const O = {
    x: { name: "X", post: "推", comment: "回复" },
    insta: { name: "Insta", post: "动态", comment: "评论" },
    tube: { name: "Tube", post: "视频", comment: "评论" },
};
function bt(e) {
    const t = (a, s) =>
        s != null && s.length
            ? `${a}：
${s.map((o) => `- ${o}`).join(`
`)}`
            : "";
    return [
        `角色：${e.name || "TA"}`,
        e.persona ? `完整人设：${e.persona}` : "",
        e.platformName ? `你在这个平台上的账号名：${e.platformName}` : "",
        e.relation ? `与她的关系现状：${e.relation}` : "",
        e.mood ? `此刻情绪线索：${e.mood}` : "",
        t("最近发生的具体时刻", e.moments),
        t("长期生活与关系状态", e.living),
        t("尚未结束的事", e.threads),
        t("接下来的日程", e.schedule),
        t("你最近在这个平台上发过的", e.platformRecent),
        t("你们最近在别处（微信）说过的话 —— 只作背景，公开回复里不许复述", e.recentChat),
        e.blockNote || "",
    ].filter(Boolean).join(`

`);
}
function jt({
    platform: e = "x",
    ctx: t = {},
    where: a = "comment",
    target: s = {},
    userText: o = "",
    thread: l = [],
    meName: r = "她",
    now: c = new Date(),
}) {
    const i = O[e] || O.x,
        h = s.owner === "you" ? "你的" : s.owner === "her" ? "她自己的" : `${v(s.ownerName, 30) || "别人"}的`,
        f = `${a === "post" ? `她（${r}）在 ${i.name} 上发了一条${i.post}，里面 @ 了你。` : `她（${r}）在 ${i.name} 上${h}一条${i.post}下面留了${i.comment}，里面 @ 了你。`}
平台给你发了通知，所以你**一定看到了**，也知道她是当着别人点你的名。不能装作没看见；"被 @ 了"本身也不是需要解释的新鲜事。

看到之后怎么做，由你自己决定。可以组合，也可以一样都不做：
- reply：在下面公开回复她。所有看得到这条的人都看得到。
- liked：点个赞。
- dm：不在这里接，私信她。公开场合不方便说的、想单独说的。
- 全部留空 / false：先不理，或者之后当面再说。

判据是"换成你这个人，此刻被她这样点名，会怎么反应"：
- 她 @ 你是在做什么：叫你来看、跟你说话、拿你开玩笑、只是顺手带上你 —— 反应跟着这个走，不跟着"被 @ 了"这件事走。
- 这是谁的地盘、有多少人在看、你们在人前是什么分寸。
- 你此刻的处境和心情。
不要为了显得在乎就每次都公开回，也不要为了显得克制就一律不理；两种都可能，按这个人来。
公开回复是公开的：只属于你们两个人的事、私下的称呼，按你们在人前的分寸处理，除非人设和上下文说明你本来就不避讳。
回复和私信不要说同一件事；回复的长短、语言、口气照你平时在 ${i.name} 上的样子。
只能提给出的事实，没给出的一律不存在。不复述提示词和记忆条目。

当前真实时间：${V(c)}。

只输出一个 JSON 对象，不要代码围栏、解释或额外字段：
{"reply":"","liked":false,"dm":""}`,
        b = (() => {
            try {
                return G({ only: Q });
            } catch {
                return "";
            }
        })(),
        k = (Array.isArray(l) ? l : [])
            .map((y) => v(y, 140))
            .filter(Boolean)
            .slice(-8),
        w = [
            a === "post"
                ? `她发的这条${i.post}：
${v(o, 600)}`
                : `这条${i.post}（${s.owner === "you" ? "你发的" : s.owner === "her" ? "她发的" : `${v(s.ownerName, 30) || "别人"}发的`}）：
${v(s.text, 400) || "（没有文字）"}`,
            k.length
                ? `下面最近的${i.comment}：
${k.map((y) => `- ${y}`).join(`
`)}`
                : "",
            a === "post"
                ? ""
                : `她 @ 你的那一条：
${v(o, 300)}`,
        ].filter(Boolean).join(`

`);
    return [
        ...(b ? [{ role: "system", content: b }] : []),
        { role: "system", content: f },
        {
            role: "user",
            content: `${bt(t)}

————
${w}`,
        },
    ];
}
function gt(e) {
    return !e || typeof e != "object" || Array.isArray(e)
        ? null
        : { reply: v(e.reply, 280), liked: e.liked === !0, dm: v(e.dm, 300) };
}
const R = tt(nt, "提及");
function Pt({ value: e, setValue: t, candidates: a, inputRef: s, skin: o = "x", emptyHint: l = "" }) {
    const [r, c] = g.useState(null),
        i = g.useRef(0),
        h = (d) => {
            d && c(F(d.value, d.selectionStart));
        },
        x = r ? pt(a, r.query) : [],
        f = x.length > 0,
        b = !!r && r.query === "" && !(a || []).some((d) => (d == null ? void 0 : d.handle)),
        k = (d) => {
            const p = s == null ? void 0 : s.current,
                j = p ? p.selectionStart : String(e || "").length,
                $ = xt(e, j, d.handle);
            (t($.value),
                c(null),
                clearTimeout(i.current),
                requestAnimationFrame(() => {
                    const u = s == null ? void 0 : s.current;
                    if (u) {
                        _(u);
                        try {
                            u.setSelectionRange($.caret, $.caret);
                        } catch {}
                    }
                }));
        },
        w = () => {
            const d = s == null ? void 0 : s.current,
                p = String(e || ""),
                j = d && typeof d.selectionStart == "number" ? d.selectionStart : p.length,
                $ = p.slice(0, j),
                u = $ && !/\s$/.test($) ? " " : "",
                C = `${$}${u}@${p.slice(j)}`,
                N = j + u.length + 1;
            (t(C),
                c({ start: N - 1, query: "" }),
                clearTimeout(i.current),
                requestAnimationFrame(() => {
                    const S = s == null ? void 0 : s.current;
                    if (S) {
                        _(S);
                        try {
                            S.setSelectionRange(N, N);
                        } catch {}
                    }
                }));
        },
        y = {
            onChange: (d) => {
                (t(d.target.value), h(d.target));
            },
            onSelect: (d) => h(d.target),
            onClick: (d) => h(d.target),
            onBlur: () => {
                i.current = setTimeout(() => c(null), 180);
            },
        },
        A = (d) => (p) => {
            var j;
            if (
                f &&
                (p.key === "Enter" || p.key === "Tab") &&
                !((j = p.nativeEvent) != null && j.isComposing)
            ) {
                (p.preventDefault(), k(x[0]));
                return;
            }
            if (f && p.key === "Escape") {
                c(null);
                return;
            }
            d == null || d(p);
        },
        m = b
            ? n.jsx("div", { className: `mn-list mn-${o} mn-none`, children: l || "还没有可以 @ 的人" })
            : f
              ? n.jsx("div", {
                    className: `mn-list mn-${o}`,
                    role: "listbox",
                    "aria-label": "提到的人",
                    children: x.map((d) =>
                        n.jsxs(
                            "button",
                            {
                                type: "button",
                                role: "option",
                                className: "mn-item",
                                onPointerDown: (p) => p.preventDefault(),
                                onMouseDown: (p) => p.preventDefault(),
                                onClick: () => k(d),
                                children: [
                                    n.jsx("span", {
                                        className: "mn-av",
                                        children: d.avatar
                                            ? n.jsx(I, { src: d.avatar, alt: "" })
                                            : n.jsx("i", {
                                                  children: String(d.name || d.handle)
                                                      .slice(0, 1)
                                                      .toUpperCase(),
                                              }),
                                    }),
                                    n.jsxs("span", {
                                        className: "mn-who",
                                        children: [
                                            n.jsx("b", { children: d.name || d.handle }),
                                            n.jsxs("span", { children: ["@", d.handle] }),
                                        ],
                                    }),
                                ],
                            },
                            d.id,
                        ),
                    ),
                })
              : null;
    return {
        bind: y,
        keyDown: A,
        panel: m,
        open: f,
        trigger: w,
        hasCandidates: (a || []).some((d) => (d == null ? void 0 : d.handle)),
    };
}
function Tt({ text: e, candidates: t, onOpen: a, skin: s = "x" }) {
    const o = ft(e, t);
    return o.some((l) => l.at)
        ? n.jsx(n.Fragment, {
              children: o.map((l, r) =>
                  l.at
                      ? n.jsx(
                            "span",
                            {
                                className: `mn-at mn-at-${s}`,
                                onClick:
                                    l.id && a
                                        ? (c) => {
                                              (c.stopPropagation(), a(l.id));
                                          }
                                        : void 0,
                                children: l.text,
                            },
                            r,
                        )
                      : n.jsx(E.Fragment, { children: l.text }, r),
              ),
          })
        : n.jsx(n.Fragment, { children: e });
}
const kt = { x: "x", insta: "insta", tube: "tube" },
    yt = { x: "X", insta: "Insta", tube: "Tube" };
function Dt(e) {
    const { state: t, dmAppend: a } = L(),
        s = et(),
        o = g.useRef(t);
    return (
        (o.current = t),
        g.useCallback(
            async ({
                ids: l = [],
                where: r = "comment",
                target: c = {},
                userText: i = "",
                thread: h = [],
                nameOf: x = () => "TA",
                onReply: f,
                onLike: b,
            }) => {
                var m, d, p;
                const k = o.current,
                    w = R.usableLane((m = k.api) == null ? void 0 : m.chat),
                    y = [...new Set(l)].slice(0, 5);
                if (!y.length) return;
                if (!(w != null && w.baseUrl)) {
                    s("提到的人要配好聊天通道才会看到", "error");
                    return;
                }
                const A =
                    ((d = k.me) == null ? void 0 : d.nickname) ||
                    ((p = k.me) == null ? void 0 : p.name) ||
                    "她";
                await Promise.all(
                    y.map(async (j) => {
                        const $ = (k.characters || []).find((u) => u.id === j);
                        if ($)
                            try {
                                const u = st(k, $, e),
                                    C = await R.chat(
                                        w,
                                        jt({
                                            platform: e,
                                            ctx: u,
                                            where: r,
                                            target: { ...c, owner: c.ownerId === j ? "you" : c.owner },
                                            userText: i,
                                            thread: h,
                                            meName: A,
                                        }),
                                    ),
                                    N = gt(at(C == null ? void 0 : C.content));
                                if (!N) return;
                                (N.liked && (b == null || b(j)),
                                    N.reply && (f == null || f(j, N.reply)),
                                    N.dm &&
                                        a(kt[e] || e, j, {
                                            id: ot("dm_"),
                                            createdAt: Date.now(),
                                            role: "assistant",
                                            content: N.dm,
                                        }));
                                const S = [
                                    N.reply && "回复了你",
                                    N.liked && !N.reply && "赞了你",
                                    N.dm && `给你发了 ${yt[e] || ""} 私信`,
                                ].filter(Boolean);
                                S.length && s(`${x(j)} ${S.join("，")}`);
                            } catch (u) {
                                s(
                                    `${x(j)} 那边没生成出来：${(u == null ? void 0 : u.message) || u}`,
                                    "error",
                                );
                            }
                    }),
                );
            },
            [e, a, s],
        )
    );
}
function Et(e) {
    const t = g.useRef(null),
        [a, s] = g.useState(0);
    return {
        dx: a,
        handlers: {
            onTouchStart: (o) => {
                const l = o.touches[0];
                t.current = { x: l.clientX, y: l.clientY, lock: null };
            },
            onTouchMove: (o) => {
                const l = t.current;
                if (!l) return;
                const r = o.touches[0],
                    c = r.clientX - l.x,
                    i = r.clientY - l.y;
                (l.lock == null &&
                    (Math.abs(c) > 8 || Math.abs(i) > 8) &&
                    (l.lock = Math.abs(c) > Math.abs(i) ? "x" : "y"),
                    l.lock === "x" && s(Math.max(-64, Math.min(64, c))));
            },
            onTouchEnd: () => {
                (Math.abs(a) >= 48 && e(), (t.current = null), s(0));
            },
        },
    };
}
function It() {
    const [e, t] = g.useState(!1),
        [a, s] = g.useState(() => new Set());
    return {
        on: e,
        ids: a,
        count: a.size,
        start: (o) => {
            (t(!0), s(new Set(o ? [o] : [])));
        },
        stop: () => {
            (t(!1), s(new Set()));
        },
        toggle: (o) =>
            s((l) => {
                const r = new Set(l);
                return (r.has(o) ? r.delete(o) : r.add(o), r);
            }),
        has: (o) => a.has(o),
    };
}
const Nt = 44,
    P = 46,
    M = 8;
function Lt({
    theme: e = "ig",
    anchor: t,
    page: a,
    mine: s,
    text: o,
    time: l = "",
    items: r,
    react: c = "",
    onReact: i,
    onClose: h,
    rowClass: x,
    bubbleClass: f,
    refs: b = 0,
    onDelete: k,
}) {
    const [w, y] = g.useState("menu"),
        [A, m] = g.useState(null),
        d = E.useRef(Date.now()),
        p = (u) => (C) => {
            Date.now() - d.current < 380 || u(C);
        },
        j = w === "delete" ? (b ? 3 : 2) : r.length;
    if (
        (g.useLayoutEffect(() => {
            if (!t || !a) return;
            const u = a.getBoundingClientRect(),
                C = t.getBoundingClientRect(),
                N = j * Nt + (w === "delete" ? 52 : l ? 30 : 0),
                S = P + M + C.height + M + N,
                Y = 64,
                Z = u.height - S - 16,
                K = Math.max(Y, Math.min(Z, C.top - u.top - P - M)),
                J = s ? { right: Math.max(12, u.right - C.right) } : { left: Math.max(12, C.left - u.left) };
            m({ top: K, side: J, width: C.width, height: C.height });
        }, [t, a, s, j, w, l]),
        !A)
    )
        return null;
    const $ = (u) => ({ position: "absolute", top: A.top + u, ...A.side });
    return n.jsxs("div", {
        className: `dmp dmp-${e}`,
        role: "dialog",
        "aria-label": "消息操作",
        children: [
            n.jsx("button", { className: "dmp-mask btn-plain", "aria-label": "关闭", onClick: p(h) }),
            n.jsx("div", {
                className: "dmp-react",
                style: $(0),
                children: rt.map((u) =>
                    n.jsx(
                        "button",
                        {
                            className: `btn-plain${c === u ? " on" : ""}`,
                            onClick: p(() => {
                                (i(c === u ? "" : u), h());
                            }),
                            "aria-label": `回应 ${u}`,
                            children: u,
                        },
                        u,
                    ),
                ),
            }),
            n.jsx("div", {
                className: x,
                style: { ...$(P + M), width: A.width, margin: 0 },
                children: n.jsx("span", {
                    className: `${f} dmp-lift`,
                    style: { maxWidth: "none", width: "100%" },
                    children: o,
                }),
            }),
            n.jsx("div", {
                className: "dmp-menu",
                style: $(P + M + A.height + M),
                children:
                    w === "menu"
                        ? n.jsxs(n.Fragment, {
                              children: [
                                  l && n.jsx("div", { className: "dmp-time", children: l }),
                                  r.map((u) =>
                                      n.jsxs(
                                          "button",
                                          {
                                              className: `btn-plain dmp-item${u.danger ? " danger" : ""}`,
                                              onClick: p(() => {
                                                  if (u.key === "delete") {
                                                      y("delete");
                                                      return;
                                                  }
                                                  (u.onClick(), h());
                                              }),
                                              children: [n.jsx("span", { children: u.label }), u.icon],
                                          },
                                          u.key,
                                      ),
                                  ),
                              ],
                          })
                        : n.jsxs(n.Fragment, {
                              children: [
                                  n.jsxs("div", {
                                      className: "dmp-ask",
                                      children: [
                                          n.jsx("b", { children: "删除这条消息？" }),
                                          b
                                              ? n.jsxs("small", {
                                                    children: ["这条消息已生成 ", b, " 条记忆"],
                                                })
                                              : n.jsx("small", { children: "删除后无法恢复" }),
                                      ],
                                  }),
                                  n.jsx("button", {
                                      className: "btn-plain dmp-item danger",
                                      onClick: () => {
                                          (k(!1), h());
                                      },
                                      children: n.jsx("span", { children: b ? "只删除消息" : "删除" }),
                                  }),
                                  b > 0 &&
                                      n.jsx("button", {
                                          className: "btn-plain dmp-item danger",
                                          onClick: () => {
                                              (k(!0), h());
                                          },
                                          children: n.jsx("span", { children: "删除消息和记忆" }),
                                      }),
                                  n.jsx("button", {
                                      className: "btn-plain dmp-item",
                                      onClick: h,
                                      children: n.jsx("span", { children: "取消" }),
                                  }),
                              ],
                          }),
            }),
        ],
    });
}
function _t({ theme: e = "ig", anchor: t, page: a, items: s, onClose: o, up: l = !0, align: r = "left" }) {
    const [c, i] = g.useState(null);
    return (
        g.useLayoutEffect(() => {
            if (!t || !a) return;
            const h = a.getBoundingClientRect(),
                x = t.getBoundingClientRect(),
                f =
                    r === "left"
                        ? { left: Math.max(12, x.left - h.left) }
                        : { right: Math.max(12, h.right - x.right) };
            i(l ? { bottom: h.bottom - x.top + 8, ...f } : { top: x.bottom - h.top + 8, ...f });
        }, [t, a, l, r]),
        c
            ? n.jsxs("div", {
                  className: `dmp dmp-${e} dmp-pop`,
                  children: [
                      n.jsx("button", {
                          className: "dmp-mask clear btn-plain",
                          "aria-label": "关闭",
                          onClick: o,
                      }),
                      n.jsx("div", {
                          className: "dmp-menu",
                          style: { position: "absolute", ...c },
                          children: s.map((h) =>
                              n.jsxs(
                                  "button",
                                  {
                                      className: `btn-plain dmp-item${h.danger ? " danger" : ""}`,
                                      onClick: () => {
                                          (h.onClick(), o());
                                      },
                                      children: [n.jsx("span", { children: h.label }), h.icon],
                                  },
                                  h.key,
                              ),
                          ),
                      }),
                  ],
              })
            : null
    );
}
function Bt({ theme: e = "ig", anchor: t, items: a, onClose: s, width: o = 232 }) {
    const [l, r] = g.useState(null);
    return (
        g.useLayoutEffect(() => {
            if (!t) return;
            const c = t.getBoundingClientRect(),
                i = window.innerWidth,
                h = window.innerHeight,
                x = a.length * 44 + (e === "yt" ? 12 : 0),
                f = Math.min(Math.max(12, c.left + c.width / 2 - o / 2), i - o - 12),
                b = c.bottom + 6 + x < h - 12;
            r(b ? { top: c.bottom + 6, left: f } : { top: Math.max(12, c.top - 6 - x), left: f });
        }, [t, a.length, e, o]),
        !l || typeof document > "u"
            ? null
            : U.createPortal(
                  n.jsxs("div", {
                      className: `dmp dmp-${e} dmp-pop dmp-fixed`,
                      onClick: (c) => c.stopPropagation(),
                      children: [
                          n.jsx("button", {
                              className: "dmp-mask clear btn-plain",
                              "aria-label": "关闭",
                              onClick: s,
                          }),
                          n.jsx("div", {
                              className: "dmp-menu",
                              role: "menu",
                              style: { position: "fixed", width: o, ...l },
                              children: a.map((c) =>
                                  n.jsxs(
                                      "button",
                                      {
                                          role: "menuitem",
                                          className: `btn-plain dmp-item${c.danger ? " danger" : ""}${c.on ? " on" : ""}`,
                                          onClick: () => {
                                              (s(), c.onClick());
                                          },
                                          children: [n.jsx("span", { children: c.label }), c.icon],
                                      },
                                      c.key,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  document.body,
              )
    );
}
function Ot({ value: e, mine: t }) {
    return e
        ? n.jsx("span", { className: `dmr${t ? " mine" : ""}`, "aria-label": `回应 ${e}`, children: e })
        : null;
}
const wt =
    "M8.5 4.5h7A4.5 4.5 0 0 1 20 9v3a4.5 4.5 0 0 1-4.5 4.5h-4.4l-3.5 3.1c-.43.38-1.1.08-1.1-.5V16.3A4.5 4.5 0 0 1 4 12V9a4.5 4.5 0 0 1 4.5-4.5Z";
function Rt({ size: e = 26, strokeWidth: t = 1.6, ...a }) {
    return n.jsxs("svg", {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        style: { display: "block" },
        ...a,
        children: [
            n.jsx("path", { d: wt }),
            n.jsx("circle", { cx: "8.6", cy: "10.5", r: "1.15", fill: "currentColor", stroke: "none" }),
            n.jsx("circle", { cx: "12", cy: "10.5", r: "1.15", fill: "currentColor", stroke: "none" }),
            n.jsx("circle", { cx: "15.4", cy: "10.5", r: "1.15", fill: "currentColor", stroke: "none" }),
        ],
    });
}
function qt(e, t = 420) {
    const a = E.useRef(null),
        s = () => {
            a.current && (clearTimeout(a.current.t), (a.current = null));
        };
    return {
        onPointerDown: (o) => {
            const l = o.currentTarget,
                r = o.clientX,
                c = o.clientY;
            (s(),
                (a.current = {
                    x: r,
                    y: c,
                    t: setTimeout(() => {
                        var i;
                        a.current = null;
                        try {
                            (i = navigator.vibrate) == null || i.call(navigator, 12);
                        } catch {}
                        e(l);
                    }, t),
                }));
        },
        onPointerMove: (o) => {
            const l = a.current;
            l && Math.hypot(o.clientX - l.x, o.clientY - l.y) > 8 && s();
        },
        onPointerUp: s,
        onPointerCancel: s,
        onPointerLeave: s,
        onContextMenu: (o) => o.preventDefault(),
    };
}
function zt(e, t) {
    const a = e.findIndex((l) => l.id === t);
    if (a < 0) return { start: -1, ids: [], discarded: [] };
    let s = a;
    for (; s > 0 && e[s - 1].role === "assistant"; ) s -= 1;
    const o = e.slice(s);
    return {
        start: s,
        ids: o.map((l) => l.id),
        discarded: o.filter((l) => l.role === "assistant").map((l) => l.preview || l.content),
    };
}
function Wt({ open: e, title: t, message: a, actions: s, onClose: o }) {
    return e
        ? n.jsxs("div", {
              className: "dmc",
              role: "alertdialog",
              "aria-label": t,
              children: [
                  n.jsx("button", { className: "dmc-mask btn-plain", "aria-label": "关闭", onClick: o }),
                  n.jsxs("div", {
                      className: "dmc-box",
                      children: [
                          n.jsxs("div", {
                              className: "dmc-copy",
                              children: [n.jsx("b", { children: t }), a ? n.jsx("p", { children: a }) : null],
                          }),
                          s.map((l) =>
                              n.jsx(
                                  "button",
                                  {
                                      className: `btn-plain dmc-act${l.danger ? " danger" : ""}`,
                                      onClick: () => {
                                          (l.onClick(), o());
                                      },
                                      children: l.label,
                                  },
                                  l.label,
                              ),
                          ),
                          n.jsx("button", {
                              className: "btn-plain dmc-act strong",
                              onClick: o,
                              children: "取消",
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
function Ft({ platform: e, altRef: t }) {
    const { state: a, socialPatchAlt: s } = L(),
        [o, l] = g.useState(!1),
        [r, c] = g.useState(""),
        i = a.characters || [],
        h = q(a, e, t) || {},
        x = (h.knownBy || []).filter((m) => i.some((d) => d.id === m)),
        f = r.trim().toLowerCase(),
        b = g.useMemo(() => i.filter((m) => !f || T(m).toLowerCase().includes(f)), [i, f]);
    if (!i.length) return null;
    const k = (m) => s(e, "me", D(t), { knownBy: m }),
        w = (m) => k(x.includes(m) ? x.filter((d) => d !== m) : [...x, m]),
        y = x.map((m) => T(i.find((d) => d.id === m))).filter(Boolean),
        A = y.length ? (y.length > 2 ? `${y.slice(0, 2).join("、")} 等 ${y.length} 人` : y.join("、")) : "无";
    return n.jsxs(n.Fragment, {
        children: [
            n.jsxs("button", {
                type: "button",
                className: "altk-row btn-plain",
                onClick: () => {
                    (c(""), l(!0));
                },
                children: [
                    n.jsx("span", { children: "知道是你的人" }),
                    n.jsx("em", { children: A }),
                    n.jsx(lt, { size: 15, strokeWidth: 2.2 }),
                ],
            }),
            n.jsx(z, {
                open: o,
                onClose: () => l(!1),
                title: "谁知道这个号是你",
                bare: !0,
                footer: n.jsxs("div", {
                    className: "altk-foot",
                    children: [
                        n.jsx("button", {
                            type: "button",
                            className: "btn-plain altk-clear",
                            disabled: !x.length,
                            onClick: () => k([]),
                            children: "全部取消",
                        }),
                        n.jsx("button", {
                            type: "button",
                            className: "btn-plain altk-done",
                            onClick: () => l(!1),
                            children: "完成",
                        }),
                    ],
                }),
                children: n.jsxs("div", {
                    className: "altk-sheet",
                    children: [
                        n.jsxs("p", {
                            className: "altk-sub",
                            children: ["@", h.handle || h.nickname || "小号", " · 已选 ", x.length, " 人"],
                        }),
                        i.length > 6 &&
                            n.jsxs("label", {
                                className: "altk-search",
                                children: [
                                    n.jsx(ct, { size: 14, strokeWidth: 2.2 }),
                                    n.jsx("input", {
                                        value: r,
                                        onChange: (m) => c(m.target.value),
                                        placeholder: "搜索角色",
                                        enterKeyHint: "search",
                                    }),
                                    r
                                        ? n.jsx("button", {
                                              type: "button",
                                              className: "btn-plain",
                                              "aria-label": "清除",
                                              onClick: () => c(""),
                                              children: n.jsx(it, { size: 13 }),
                                          })
                                        : null,
                                ],
                            }),
                        n.jsxs("div", {
                            className: "altk-list",
                            role: "listbox",
                            "aria-multiselectable": "true",
                            children: [
                                b.map((m) => {
                                    const d = x.includes(m.id),
                                        p = T(m);
                                    return n.jsxs(
                                        "button",
                                        {
                                            type: "button",
                                            role: "option",
                                            "aria-selected": d,
                                            className: "altk-item btn-plain",
                                            onClick: () => w(m.id),
                                            children: [
                                                n.jsx("span", {
                                                    className: "altk-av",
                                                    children: m.avatar
                                                        ? n.jsx(I, { src: m.avatar, alt: "" })
                                                        : p.slice(0, 1),
                                                }),
                                                n.jsx("b", { children: p }),
                                                n.jsx("i", {
                                                    className: `altk-check${d ? " on" : ""}`,
                                                    children: d
                                                        ? n.jsx(dt, { size: 13, strokeWidth: 3 })
                                                        : null,
                                                }),
                                            ],
                                        },
                                        m.id,
                                    );
                                }),
                                !b.length &&
                                    n.jsx("div", { className: "altk-empty", children: "没有匹配的角色。" }),
                            ],
                        }),
                        n.jsx("p", {
                            className: "altk-note",
                            children: "勾选的角色知道这个号属于你；未勾选的角色会把它当作陌生账号。",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function Ht({ platform: e, target: t, onClose: a, onOpen: s }) {
    const { state: o, socialPatchAlt: l, socialRemoveAlt: r } = L(),
        c = t ? q(o, e, t.ref) || {} : {},
        i = t ? (o.characters || []).find((h) => h.id === t.owner) : null;
    return n.jsx($t, {
        open: !!t && !!c.id,
        onClose: a,
        name: c.nickname || c.handle,
        handle: c.handle,
        avatar: c.avatar,
        ownerName: i ? T(i) : "TA",
        onView: () => {
            (l(e, t.owner, D(t.ref), { linked: !0, discoveredAt: Date.now() }), s == null || s(t.ref));
        },
        onDelete: () => {
            (r(e, t.owner, D(t.ref)), a == null || a());
        },
    });
}
function $t({ open: e, name: t, handle: a, avatar: s, ownerName: o, onView: l, onDelete: r, onClose: c }) {
    const i = t || a || "这个账号";
    return n.jsx(z, {
        open: e,
        onClose: c,
        noHead: !0,
        maxWidth: 320,
        children: n.jsxs("div", {
            className: "sxa",
            children: [
                n.jsx("span", {
                    className: "sxa-av",
                    children: s ? n.jsx(I, { src: s, alt: "" }) : String(i).slice(0, 1),
                }),
                n.jsx("b", { children: i }),
                a ? n.jsxs("small", { children: ["@", a] }) : null,
                n.jsxs("p", { className: "sxa-q", children: ["这个账号疑似是「", o || "TA", "」的小号"] }),
                n.jsx("p", {
                    className: "sxa-note",
                    children:
                        "查看主页后将确认绑定，该账号会出现在 TA 的资料与查手机中，之后可随时解除绑定。",
                }),
                n.jsx("button", {
                    type: "button",
                    className: "btn-plain sxa-go",
                    onClick: l,
                    children: "查看主页",
                }),
                n.jsxs("div", {
                    className: "sxa-row",
                    children: [
                        n.jsx("button", {
                            type: "button",
                            className: "btn-plain",
                            onClick: r,
                            children: "删除这个账号",
                        }),
                        n.jsx("i", { "aria-hidden": "true" }),
                        n.jsx("button", {
                            type: "button",
                            className: "btn-plain",
                            onClick: c,
                            children: "取消",
                        }),
                    ],
                }),
            ],
        }),
    });
}
export {
    Bt as A,
    Lt as D,
    Rt as I,
    Tt as M,
    $t as S,
    _t as a,
    Wt as b,
    Et as c,
    qt as d,
    Ot as e,
    zt as f,
    Pt as g,
    Dt as h,
    Ht as i,
    Ft as j,
    vt as k,
    Mt as m,
    ut as t,
    It as u,
};
