import { r as T, j as t } from "./vendor-react-3a46a5d3.js";
import {
    u as D,
    a as O,
    nb as _,
    bq as S,
    kN as I,
    dA as j,
    kR as U,
    nc as q,
    kP as m,
    bi as G,
    nd as M,
    ne as z,
    nf as w,
    cX as B,
    n4 as F,
    ng as K,
    f as y,
} from "./app-2c902988.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-icons-e63d3118.js";
import "./vendor-leaflet-f4c2a8c5.js";
function Z({ onClose: $ }) {
    var k;
    const { state: d, patch: c } = D(),
        g = O(),
        a = d.thought || { template: "notes" },
        A = (e) => c({ thought: { ...a, template: e } }),
        b = _(d, null),
        o = a.mode === "random" && b.mode === "random",
        u = o ? b.pool : [],
        f = (e) =>
            c({
                thought:
                    e === "random"
                        ? {
                              ...a,
                              mode: "random",
                              pool: (a.pool || []).length ? a.pool : [a.template || "notes"],
                          }
                        : { ...a, mode: null },
            }),
        H = (e) => {
            const i = u.includes(e) ? u.filter((n) => n !== e) : [...u, e];
            i.length && c({ thought: { ...a, mode: "random", pool: i } });
        },
        p = (e) => (o ? u.includes(e) : a.template === e),
        N = (e) => (o ? H(e) : A(e)),
        x = (d.thoughtPresets || []).map((e) => ({ ...S(e), id: e.id })).filter((e) => e.name),
        [s, l] = T.useState(null),
        [C, v] = T.useState(a.patchCss || ""),
        P = ((k = d.characters) == null ? void 0 : k[0]) || { name: "TA" },
        E = (e, i) => {
            if (e === "new") {
                const n = y("tp_");
                c((r) => ({
                    thoughtPresets: [...(r.thoughtPresets || []), { ...i, id: n, createdAt: Date.now() }],
                    thought: { ...(r.thought || {}), template: n },
                }));
            } else
                c((n) => ({
                    thoughtPresets: (n.thoughtPresets || []).map((r) =>
                        r.id === e ? { ...r, ...i, id: e } : r,
                    ),
                }));
            (l(null), g("已保存"));
        },
        L = (e) => {
            const i = e.map(() => y("tp_"));
            c((n) => ({
                thoughtPresets: [
                    ...(n.thoughtPresets || []),
                    ...e.map((r, R) => ({ ...r, id: i[R], createdAt: Date.now() })),
                ],
                thought: { ...(n.thought || {}), template: i[0] },
            }));
        },
        h = a.autoClean || { enabled: !1, days: 7 };
    return t.jsx(I, {
        title: "心声样式",
        onClose: $,
        children: t.jsxs("div", {
            className: "pb-8",
            children: [
                t.jsxs(j, {
                    header: "自动清理",
                    footer: h.enabled
                        ? `超过 ${h.days} 天的心声会在你打开聊天时自动删掉。**收藏过的不会被删** —— 在心声里点书签即可保留。`
                        : "关着就一条都不删。心声每轮都会生成，长期不清会占不少空间。",
                    children: [
                        t.jsx(U, {
                            title: "自动清理旧心声",
                            on: !!h.enabled,
                            onChange: (e) => c({ thought: { ...a, autoClean: { ...h, enabled: e } } }),
                        }),
                        h.enabled &&
                            t.jsxs("div", {
                                className: "px-4 py-3",
                                children: [
                                    t.jsxs("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            t.jsx("span", {
                                                className: "ios-footnote",
                                                style: { color: "var(--text-2)" },
                                                children: "保留最近",
                                            }),
                                            t.jsxs("span", {
                                                className: "ios-footnote",
                                                style: { color: "var(--text-1)", fontWeight: 600 },
                                                children: [h.days, " 天"],
                                            }),
                                        ],
                                    }),
                                    t.jsx("div", {
                                        className: "lt-day-tab-row light",
                                        children: [3, 7, 14, 30, 90].map((e) =>
                                            t.jsxs(
                                                "button",
                                                {
                                                    className: `btn-plain lt-day-tab${h.days === e ? " on" : ""}`,
                                                    onClick: () =>
                                                        c({
                                                            thought: { ...a, autoClean: { ...h, days: e } },
                                                        }),
                                                    children: [e, " 天"],
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                    ],
                }),
                t.jsx(j, {
                    header: "呈现方式",
                    footer: `心声跟着 TA 每次回复一起生成，不额外发请求。模板越复杂，TA 每轮要多写的字越多，下方标注了大致的量。${o ? "多选随机时，每次从勾选的样式中随机选用一套，避免与上一条重复；至少保留一套。" : ""}每位联系人可在聊天的心声页中单独设置。`,
                    children: t.jsxs("div", {
                        className: "px-4 py-3 flex flex-col gap-2",
                        children: [
                            t.jsxs("div", {
                                className: "ofi-seg",
                                role: "radiogroup",
                                "aria-label": "选用方式",
                                style: { margin: "2px 0 6px" },
                                children: [
                                    t.jsx("button", {
                                        className: `btn-plain ${o ? "" : "on"}`,
                                        role: "radio",
                                        "aria-checked": !o,
                                        onClick: () => f("one"),
                                        children: "指定一套",
                                    }),
                                    t.jsx("button", {
                                        className: `btn-plain ${o ? "on" : ""}`,
                                        role: "radio",
                                        "aria-checked": o,
                                        onClick: () => f("random"),
                                        children: "多选随机",
                                    }),
                                ],
                            }),
                            q.map((e) =>
                                t.jsxs(
                                    "button",
                                    {
                                        className: `lt-tpl-card btn-plain ${p(e.id) ? "on" : ""}`,
                                        onClick: () => N(e.id),
                                        children: [
                                            t.jsxs("span", {
                                                className: "n",
                                                children: [
                                                    p(e.id) &&
                                                        t.jsx("span", { className: `dot${o ? " sq" : ""}` }),
                                                    e.name,
                                                ],
                                            }),
                                            t.jsx("span", { className: "b", children: e.blurb }),
                                            t.jsx("span", { className: "c", children: e.cost }),
                                        ],
                                    },
                                    e.id,
                                ),
                            ),
                            x.map((e) =>
                                t.jsxs(
                                    "button",
                                    {
                                        className: `lt-tpl-card btn-plain ${p(e.id) ? "on" : ""}`,
                                        onClick: () =>
                                            !o && a.template === e.id ? l({ edit: e.id }) : N(e.id),
                                        children: [
                                            t.jsxs("span", {
                                                className: "n",
                                                children: [
                                                    p(e.id) &&
                                                        t.jsx("span", { className: `dot${o ? " sq" : ""}` }),
                                                    e.name,
                                                ],
                                            }),
                                            t.jsx("span", {
                                                className: "b",
                                                children: e.blurb || `${e.fields.length} 个字段 · 自定义`,
                                            }),
                                            t.jsx("span", {
                                                className: "c",
                                                children:
                                                    !o && a.template === e.id ? "再点一下编辑" : "自定义",
                                            }),
                                        ],
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                }),
                t.jsxs(j, {
                    header: "自定义心声",
                    footer: "自己定字段、提示词、正则、HTML 和 CSS；做好的可以导出成 PNG 图片分享。",
                    children: [
                        t.jsx(m, { title: "＋ 新建自定义心声", onClick: () => l({ edit: "new" }) }),
                        t.jsx(m, { title: "导入 / 导出", value: "图片 · 文件", onClick: () => l("io") }),
                        t.jsx(m, { title: "类名表", value: "和设置里是同一份", onClick: () => l("classes") }),
                        t.jsx(m, {
                            title: "内置模板美化",
                            value: a.patchCss ? "已写" : "CSS",
                            onClick: () => {
                                (v(a.patchCss || ""), l("patch"));
                            },
                        }),
                        t.jsx(m, { title: "教程", value: "怎么做一套", onClick: () => l("tutorial") }),
                    ],
                }),
                t.jsx("div", {
                    className: "px-4 mt-3",
                    children: t.jsx("div", {
                        className: "ios-caption-1",
                        style: { color: "var(--text-2)", lineHeight: 1.75 },
                        children: "换模板只影响**之后**生成的心声。以前存的会按当时那套渲染，翻历史不会乱。",
                    }),
                }),
                t.jsxs(G, {
                    open: !!s,
                    onClose: () => l(null),
                    title:
                        s != null && s.edit
                            ? s.edit === "new"
                                ? "新建自定义心声"
                                : "编辑自定义心声"
                            : {
                                  io: "导入 / 导出",
                                  classes: "心声类名表",
                                  patch: "内置模板美化",
                                  tutorial: "教程",
                              }[s] || "",
                    children: [
                        (s == null ? void 0 : s.edit) &&
                            t.jsx(
                                M,
                                {
                                    preset:
                                        s.edit === "new"
                                            ? { ...(s.starter ? z : w), id: "" }
                                            : { ...w, ...x.find((e) => e.id === s.edit) },
                                    char: P,
                                    me: d.me,
                                    onCancel: () => l(null),
                                    onSave: (e) => E(s.edit, e),
                                    onDelete:
                                        s.edit === "new"
                                            ? null
                                            : () => {
                                                  confirm(
                                                      "删除这套自定义心声？已经生成的心声会按原文显示。",
                                                  ) &&
                                                      (c((e) => {
                                                          var i, n;
                                                          return {
                                                              thoughtPresets: (e.thoughtPresets || []).filter(
                                                                  (r) => r.id !== s.edit,
                                                              ),
                                                              thought: {
                                                                  ...(e.thought || {}),
                                                                  template:
                                                                      ((i = e.thought) == null
                                                                          ? void 0
                                                                          : i.template) === s.edit
                                                                          ? "notes"
                                                                          : (n = e.thought) == null
                                                                            ? void 0
                                                                            : n.template,
                                                              },
                                                          };
                                                      }),
                                                      l(null));
                                              },
                                },
                                `${s.edit}${s.starter ? ":starter" : ""}`,
                            ),
                        s === "io" &&
                            t.jsx(B, {
                                kind: "thought",
                                toast: g,
                                items: x.map((e) => ({ ...e, desc: e.blurb || `${e.fields.length} 个字段` })),
                                initial: x.some((e) => e.id === a.template) ? [a.template] : [],
                                normalize: S,
                                onImport: L,
                                emptyHint: "还没有自定义心声 —— 先新建一套，或者在下面导入别人的",
                            }),
                        s === "classes" && t.jsx(F, { initialTab: "thought" }),
                        s === "tutorial" &&
                            t.jsx("div", {
                                className: "px-4 pt-3 pb-8",
                                children: t.jsx(K, {
                                    char: P,
                                    me: d.me,
                                    onUseStarter: () => l({ edit: "new", starter: !0 }),
                                    useLabel: "以示范新建",
                                }),
                            }),
                        s === "patch" &&
                            t.jsxs("div", {
                                className: "px-4 pt-3 pb-8",
                                children: [
                                    t.jsx("textarea", {
                                        className: "ofe-code",
                                        value: C,
                                        onChange: (e) => v(e.target.value),
                                        spellCheck: !1,
                                        placeholder: `/* 改内置三套的样子，类名见「类名表」 */
.lt-notes { --lt-nt-accent: #b08a5a; }
[data-tpl="weibo"] .lt-wb-nm { letter-spacing: .04em; }`,
                                    }),
                                    t.jsx("div", {
                                        className: "ofs-note",
                                        children:
                                            "只在心声里生效（挂在 .lt-thought 下）。打开任意一条心声就能看到效果。",
                                    }),
                                    t.jsxs("div", {
                                        className: "ofe-acts",
                                        children: [
                                            t.jsx("button", {
                                                className: "btn-plain ghost",
                                                onClick: () => l(null),
                                                children: "取消",
                                            }),
                                            t.jsx("button", {
                                                className: "btn-plain solid",
                                                onClick: () => {
                                                    (c((e) => ({
                                                        thought: { ...(e.thought || {}), patchCss: C },
                                                    })),
                                                        l(null),
                                                        g("已保存"));
                                                },
                                                children: "保存",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
}
export { Z as default };
