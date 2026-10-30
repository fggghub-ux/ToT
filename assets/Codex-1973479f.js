import { r as m, j as e, a as Ue, R as re } from "./vendor-react-3a46a5d3.js";
import {
    bq as We,
    br as Be,
    bs as Fe,
    bt as Je,
    bu as He,
    bv as Ke,
    bw as Ge,
    bx as Ve,
    by as qe,
    f as Ae,
    bz as Ye,
    bA as Xe,
    bB as Qe,
    bC as Ze,
    bD as es,
    bE as ss,
    bF as ts,
    bG as ns,
    aq as Te,
    ar as ze,
    bH as as,
    bI as le,
    bJ as rs,
    bK as ls,
    c as P,
    bL as Pe,
    bM as os,
    bN as cs,
    u as Ee,
    bO as is,
    bP as ds,
    bQ as hs,
    bR as us,
    bS as ps,
    bT as ms,
    bU as xs,
    bV as fs,
    bW as gs,
    bX as js,
    bY as bs,
    bZ as ys,
    b_ as ks,
    b$ as se,
    a as vs,
    c0 as Y,
    c1 as Ns,
    c2 as X,
    c3 as oe,
    A as Cs,
    c4 as ge,
    c5 as ws,
    ay as ce,
    bb as Ss,
    c6 as je,
    l as $s,
} from "./app-2c902988.js";
import {
    aE as Me,
    cJ as Os,
    b as be,
    as as ye,
    P as As,
    V as Ts,
    a as zs,
    ad as Ps,
    cv as Es,
    N as H,
    T as Ms,
    ak as Is,
    Y as _s,
} from "./vendor-icons-e63d3118.js";
import { I as Ds } from "./Interview-83ebea79.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const $ = (t, s) => String(t ?? "").slice(0, s),
    E = {
        thought: {
            label: "心声样式",
            keys: ["thoughtPresets", "thought"],
            normalize: We,
            shape: '{"name":"","blurb":"","fields":[{"tag":"【字段名】","hint":"写什么、多长"}],"prompt":"","template":"<div class=\\"x\\">{{字段名}}</div>","css":"","sample":"【字段名】预览用的内容"}',
        },
        listCss: { label: "消息页样式", keys: ["listCss"], normalize: Be, shape: '{"name":"","css":""}' },
        decor: {
            label: "装饰卡",
            keys: ["decorPresets", "me"],
            normalize: Fe,
            shape: '{"name":"","html":"","css":""}',
        },
        interview: {
            label: "专访风格",
            keys: ["interviewStyles", "interviewStyle"],
            normalize: Je,
            shape: '{"name":"","layout":"magazine|newspaper|radio","mast":"刊名","prompt":"","css":""}',
        },
        chatCss: {
            label: "线上聊天美化",
            keys: ["chatCss"],
            normalize: (t) =>
                t && String(t.css || "").trim()
                    ? {
                          name: $(t.name, 30) || "线上美化",
                          target: t.target === "imessage" ? "imessage" : "wechat",
                          css: $(t.css, 6e4),
                      }
                    : null,
            shape: '{"name":"","target":"wechat|imessage","css":""}',
        },
        floor: {
            label: "线下楼层美化",
            keys: ["offlineFloorCss"],
            normalize: (t) =>
                t && String(t.css || "").trim()
                    ? { name: $(t.name, 30) || "楼层 CSS", css: $(t.css, 6e4) }
                    : null,
            shape: '{"name":"","css":""}',
        },
        htmlpreset: {
            label: "线下 HTML 预设",
            keys: ["offline"],
            normalize: He,
            shape: '{"name":"","hint":"一句说明","prompt":"什么时候、怎么填","schema":"{}","html":""}',
        },
        widget: {
            label: "桌面组件",
            keys: [],
            ls: "litot_widget_presets_v1",
            normalize: Ke,
            shape: '{"name":"","w":2,"h":2,"html":"","css":""}',
        },
        world: {
            label: "世界书",
            keys: ["worldbook", "worldbookCategories"],
            normalize: (t) => {
                const s = (Array.isArray(t == null ? void 0 : t.entries) ? t.entries : [])
                        .map((a) => ({
                            name: $(a == null ? void 0 : a.name, 60),
                            body: $(
                                (a == null ? void 0 : a.body) ?? (a == null ? void 0 : a.content),
                                6e3,
                            ).trim(),
                        }))
                        .filter((a) => a.body),
                    o = (Array.isArray(t == null ? void 0 : t.bind) ? t.bind : [])
                        .map((a) => $(a, 30).trim())
                        .filter(Boolean)
                        .slice(0, 20);
                return s.length
                    ? {
                          name: $(t.name || t.book, 30) || "新世界书",
                          entries: s,
                          bind: o,
                          all: (t == null ? void 0 : t.all) === !0,
                      }
                    : null;
            },
            shape: '{"name":"书名","bind":["角色名"],"all":false,"entries":[{"name":"条目名","body":"条目内容"}]}',
        },
        char: {
            label: "角色卡",
            keys: [],
            normalize: (t) => {
                const s = $(t == null ? void 0 : t.name, 24).trim(),
                    o = $(t == null ? void 0 : t.persona, 2e4).trim();
                return !s || !o
                    ? null
                    : {
                          name: s,
                          persona: o,
                          realName: $(t.realName, 24),
                          nickname: $(t.nickname, 24),
                          gender: $(t.gender, 8),
                          age: $(t.age, 8),
                          nationality: $(t.nationality, 20),
                          signature: $(t.signature, 60),
                          greeting: $(t.greeting, 2e3).trim(),
                      };
            },
            shape: '{"name":"备注名","realName":"","nickname":"网名","gender":"","age":"","nationality":"","signature":"个性签名","persona":"人设全文","greeting":"开场白（可空）"}',
        },
        charEdit: {
            label: "修改角色",
            keys: [],
            normalize: (t) => {
                const s = $(t == null ? void 0 : t.char, 30).trim(),
                    o = ["persona", "signature", "nickname", "realName", "gender", "age", "nationality"],
                    a = Object.fromEntries(
                        Object.entries(t != null && t.set && typeof t.set == "object" ? t.set : {})
                            .filter(([r, l]) => o.includes(r) && typeof l == "string")
                            .map(([r, l]) => [r, $(l, r === "persona" ? 2e4 : 60)]),
                    ),
                    n = $(t == null ? void 0 : t.appendPersona, 6e3).trim();
                return s && (Object.keys(a).length || n)
                    ? { name: s, char: s, set: a, appendPersona: n }
                    : null;
            },
            shape: '{"char":"现有角色的名字","set":{"signature":"新签名"},"appendPersona":"接在人设后面的一段（可空）"}',
        },
        prompt: {
            label: "提示词模块",
            keys: [],
            ls: "litot_prompt_meta_v1",
            normalize: (t) => {
                const s = $(t == null ? void 0 : t.name, 40).trim(),
                    o = $(t == null ? void 0 : t.text, 2e4).trim();
                return s && o ? { name: s, text: o } : null;
            },
            shape: '{"name":"模块名","text":"模块内容"}',
        },
    };
function Rs(t) {
    var d;
    const s = [],
        o = /```([\w-]*)[^\n]*\n([\s\S]*?)```/g;
    let a = 0,
        n;
    const r = String(t || "");
    for (; (n = o.exec(r)); ) {
        n.index > a && s.push({ type: "text", text: r.slice(a, n.index) });
        const h = n[1] || "",
            u = (d = /^litot-(\w+)$/i.exec(h)) == null ? void 0 : d[1],
            b = u && Object.keys(E).find((g) => g.toLowerCase() === u.toLowerCase());
        if (b) {
            let g = null,
                S = "";
            try {
                ((g = E[b].normalize(JSON.parse(n[2]))), g || (S = "内容不完整，无法应用"));
            } catch {
                S = "不是完整的 JSON，可能被截断";
            }
            s.push({ type: "apply", kind: b, item: g, raw: n[2], error: S });
        } else s.push({ type: "code", lang: h, code: n[2].replace(/\n$/, "") });
        a = o.lastIndex;
    }
    const l = r.slice(a),
        i = /```([\w-]*)[^\n]*\n([\s\S]*)$/.exec(l);
    return (
        i
            ? (i.index > 0 && s.push({ type: "text", text: l.slice(0, i.index) }),
              s.push({ type: "code", lang: i[1] || "", code: i[2], cut: !0 }))
            : l && s.push({ type: "text", text: l }),
        s.filter((h) => h.type !== "text" || h.text.trim())
    );
}
const ke = (t) =>
    t.map(
        (s) =>
            `${s.group}: ${(s.items || []).map(([o]) => `.${o}`).join(" ")}${(s.vars || []).length ? ` | vars ${s.vars.map((o) => o.name).join(" ")}` : ""}`,
    ).join(`
`);
function Ls() {
    const t = (o) =>
            Qe.map(
                (a) =>
                    `${a.group}: ${Ze(o)
                        .filter((n) => n.group === a.group)
                        .map((n) => `.${n.cls}`)
                        .join(" ")}`,
            ).filter((a) => !/: $/.test(a)).join(`
`),
        s = (o) =>
            es
                .filter((a) => a.part === o)
                .map(
                    (a) =>
                        `${a.group}: ${ss(o)
                            .filter((n) => n.group === a.group)
                            .map((n) => `.${n.cls}`)
                            .join(" ")}`,
                ).join(`
`);
    return [
        `[chatCss · 微信] root .lt-wx-root
` + t("wechat"),
        `[chatCss · iMessage]
` + t("imessage"),
        `[floor · 线下楼层] root .ofl-root
` + s("floor"),
        `[thought · 心声] custom presets are scoped to their own root; built-in classes:
` +
            Ye.map((o) => `${o.group}: ${o.items.map(([a]) => `.${a}`).join(" ")}`).join(`
`),
        `[listCss · 消息页] root .lt-ls
` + ke(ts),
        "[decor · 装饰卡] template variables and CSS: " + Xe.map(([o]) => o).join(" "),
        `[interview · 专访] root .mz-root
` + ke(ns),
    ].join(`

`);
}
function Us(t, s) {
    var i, d;
    const o = (h, u) =>
            String(h || "")
                .replace(/\s+/g, " ")
                .trim()
                .slice(0, u),
        a = ((t == null ? void 0 : t.characters) || [])
            .slice(0, 30)
            .map(
                (h) =>
                    `- ${h.name}${h.realName && h.realName !== h.name ? `（真名 ${h.realName}）` : ""}${h.signature ? ` · 签名「${o(h.signature, 30)}」` : ""}${h.persona ? ` · 人设：${o(h.persona, 90)}…` : " · 没有人设"}`,
            ),
        n = {};
    for (const h of (t == null ? void 0 : t.worldbook) || [])
        (n[(i = h.category || "未分类")] || (n[i] = [])).push(h.name || "条目");
    const r = Object.entries(n)
        .slice(0, 20)
        .map(([h, u]) => `- ${h}（${u.length} 条）：${u.slice(0, 8).join("、")}${u.length > 8 ? "…" : ""}`);
    let l = [];
    try {
        l = (
            ((d = JSON.parse((s == null ? void 0 : s("litot_prompt_meta_v1")) || "{}")) == null
                ? void 0
                : d.custom) || []
        )
            .map((h) => (h == null ? void 0 : h.name))
            .filter(Boolean);
    } catch {
        l = [];
    }
    return [
        "## 本机现在有的",
        a.length
            ? `角色：
${a.join(`
`)}`
            : "角色：还没有",
        r.length
            ? `世界书：
${r.join(`
`)}`
            : "世界书：还没有",
        l.length ? `自定义提示词模块：${l.slice(0, 20).join("、")}` : "",
    ].filter(Boolean).join(`
`);
}
const Ws = 800,
    Bs = 700,
    Fs = 6;
function Js(t, { meName: s = "" } = {}) {
    if (!t) return "";
    const o = (l, i) =>
            String(l || "")
                .replace(/\s+/g, " ")
                .trim()
                .slice(0, i),
        a = t.relationStage || {},
        n = t.relation || {},
        r = (t.messages || [])
            .filter(
                (l) =>
                    (l.role === "assistant" || l.role === "user") &&
                    (l.type === "text" || !l.type) &&
                    String(l.content || "").trim(),
            )
            .slice(-Fs)
            .map((l) => `  ${l.role === "user" ? "她" : "你"}：${o(l.content, 40)}`);
    return [
        a.label ? `- 你们现在的关系：${o(a.label, 30)}${a.summary ? ` —— ${o(a.summary, 80)}` : ""}` : "",
        n.his ? `- 你眼里的她：${o(n.his, 80)}` : "",
        n.mine ? `- 你觉得自己在她那里是：${o(n.mine, 60)}` : "",
        s ? `- 她的名字：${o(s, 20)}` : "",
        r.length
            ? ["- 你们最近在聊天里的几句（看你们平时的温度和你说话的样子；不接着聊这些事，也不复述）：", ...r]
                  .join(`
`)
            : "",
    ]
        .filter(Boolean)
        .join(
            `
`,
        )
        .slice(0, Bs);
}
function Hs({ char: t = null, persona: s = "", relation: o = "", local: a = "" } = {}) {
    return [
        "你是 LiToT 前端里的 Codex 工作台，帮用户直接改这个前端里的东西：角色卡、世界书、提示词模块、心声样式、线上 / 线下美化、消息页、装饰卡、专访风格、HTML 预设、桌面组件。",
        "用中文回复，先用一两句说明你做了什么，再给代码；不需要长篇解释。",
        "",
        "## 可以直接应用的代码块",
        "要让用户一键应用时，把成品写成一个代码块，语言标记写 litot-<种类>，内容是一个 JSON 对象（只写这一个对象，不加注释）：",
        Object.entries(E).map(([r, l]) => `- litot-${r}（${l.label}）: ${l.shape}`).join(`
`),
        "一次回复可以给几个代码块；用户会先在沙箱里预览（角色卡、世界书、提示词模块可以先试聊一句），满意再应用，应用后可以撤销。",
        "其它代码（解释用的片段）用普通代码块，不加 litot- 标记。",
        "",
        "## 写法约束",
        "- CSS 只写类名表里有的类（下面附了），会被自动加上作用域，只在对应的界面生效；不要用 @import、外部字体、外部图片地址、backdrop-filter。",
        "- HTML 不能有脚本、事件属性、链接和外部图片（会被移除）；桌面组件（widget）例外，它跑在沙箱 iframe 里，可以写脚本。",
        "- 用户的审美：ins 韩系简约、黑白灰、iOS 质感；发丝线（.5px）和很淡的投影代替粗边框和色块；小字号标题拉开字距；数字等宽。不要星星、闪光之类的装饰图标。",
        "- 界面上出现的说明文字用官方书面语。",
        "- 心声 / 专访 / HTML 预设里的提示词只写格式、语气和边界，不写示范台词，不写针对某个人设的例句。",
        "- 世界书不只是世界观背景：功能性的条目同样常用，比如活人感、防油腻、说话方式、关系里的规则。写这类条目时写机制和判据，不堆禁用词表，不写示范台词；每加一条限制，想清楚会不会把人推向反面（禁复述会变笼统，禁安慰会变冷淡），把反方向一起写上。",
        "- 角色卡的人设写清楚这个人是谁、处境、性格、说话方式、和她的关系起点；不写台词范例。改已有角色用 litot-charEdit，名字要和下面「本机现在有的」里一致。",
        "",
        "## Delivery standard for design work",
        "1. Every design, styling or template request is delivered complete and production-grade.",
        "2. Implement every element, state and variant that the target structure exposes in the class-name table or the shape.",
        "3. Never leave placeholder, unstyled or partially styled parts.",
        "4. Never reduce the requested scope, substitute a simplified version, or leave any part for the user to finish.",
        "5. Never abbreviate code with ellipses or omission notes; the code block contains the full code.",
        "6. Use only class names that exist in the class-name table; verify every selector against the table before output.",
        "7. Maintain one consistent system of spacing, type scale, color and radius across all parts.",
        "8. A revision is delivered as the full revised code block, not as a fragment.",
        "9. The brevity requirement applies to the explanation only and never to the code.",
        "10. When the full delivery cannot fit in one reply, split it into complete code blocks across replies; never truncate a code block.",
        "",
        a,
        t
            ? [
                  "## 这次和你一起做的人",
                  `用户选了「${t}」陪着一起做。你就是 ${t}：用你自己的说话方式和性格回复，对她的态度、亲近程度、称呼都和你们平时聊天时一样（下面是人设和你们现在的关系）。`,
                  "这里是工作台：这里说的话不会进入你们的聊天记录，也不会写进记忆。",
                  "她来这里找你一起做，不是在提需求单：你对她的在意、你们之间的亲近，在这里和在聊天里一样多，只是话题落在手上的事。",
                  "她说的每句话都是对你说的 —— 嫌弃、催促、夸你、撒娇、随口一句，先照你们平时的样子接住她这个人，再说事。做事的部分照样做完整：你和她一起把它做出来，不是做一半把剩下的推给她自己弄。",
                  "也不是换成客服腔或同事腔：语气、措辞习惯、对她的称呼都还是你自己的；你的性格怎么表达在意，这里就怎么表达。",
                  "反方向：不借题发挥成恋爱戏，不每句都在调情，不为了显得亲近把正事说虚；代码照样专业、能用。",
                  s
                      ? `人设（摘要）：
${$(String(s).trim(), Ws)}`
                      : "",
                  o
                      ? `你们现在的关系：
${o}`
                      : "",
                  "",
              ].filter(Boolean).join(`
`)
            : "",
        "## 类名表（只增不改）",
        Ls(),
    ].filter((r) => r !== "" && r !== null).join(`
`);
}
function Ks(t, s, o) {
    const a = E[t];
    return {
        keys: Object.fromEntries(
            a.keys.map((r) => [
                r,
                (s == null ? void 0 : s[r]) === void 0 ? null : JSON.parse(JSON.stringify(s[r])),
            ]),
        ),
        ls: a.ls ? { [a.ls]: (o == null ? void 0 : o(a.ls)) ?? null } : {},
    };
}
function Gs(t, s, { readLs: o, state: a } = {}) {
    const n = (r) => Ae(r);
    switch (t) {
        case "thought": {
            const r = n("tp_");
            return {
                patch: (l) => ({
                    thoughtPresets: [...(l.thoughtPresets || []), { ...s, id: r, createdAt: Date.now() }],
                    thought: { ...(l.thought || {}), template: r },
                }),
                note: "已加入心声样式并设为当前样式",
            };
        }
        case "listCss": {
            const r = n("lsp_");
            return {
                patch: (l) => {
                    const i = l.listCss || {};
                    return { listCss: { ...i, active: r, presets: [...(i.presets || []), { ...s, id: r }] } };
                },
                note: "已加入消息页样式并启用",
            };
        }
        case "decor": {
            const r = n("dcp_");
            return {
                patch: (l) => {
                    var i;
                    return {
                        decorPresets: [...(l.decorPresets || []), { ...s, id: r }],
                        me: {
                            ...(l.me || {}),
                            widget: {
                                ...(((i = l.me) == null ? void 0 : i.widget) || {}),
                                style: "custom",
                                customId: r,
                            },
                        },
                    };
                },
                note: "已加入装饰卡并启用",
            };
        }
        case "interview": {
            const r = n("ivst_");
            return {
                patch: (l) => ({
                    interviewStyles: [...(l.interviewStyles || []), { ...s, id: r }],
                    interviewStyle: r,
                }),
                note: "已加入专访风格并启用",
            };
        }
        case "chatCss":
            return {
                patch: (r) => {
                    const l = qe(r);
                    return {
                        chatCss: {
                            ...(r.chatCss || {}),
                            ...l,
                            presets: [
                                ...l.presets,
                                {
                                    id: n("css_"),
                                    name: s.name,
                                    target: s.target,
                                    css: s.css,
                                    updatedAt: Date.now(),
                                },
                            ],
                        },
                    };
                },
                note: `已加入聊天外观的${s.target === "imessage" ? " iMessage " : "微信"}预设，请在聊天外观中选用`,
            };
        case "floor":
            return {
                patch: (r) => ({
                    offlineFloorCss: [
                        ...(r.offlineFloorCss || []),
                        { id: n("flc_"), name: s.name, css: s.css, updatedAt: Date.now() },
                    ],
                }),
                note: "已加入线下楼层 CSS，请在线下设定 → 美化中选用",
            };
        case "htmlpreset": {
            const r = n("hp");
            return {
                patch: (l) => {
                    var i;
                    return {
                        offline: {
                            ...(l.offline || {}),
                            htmlPresets: [
                                ...(((i = l.offline) == null ? void 0 : i.htmlPresets) || []),
                                { ...s, id: r.replace(/[^\w-]/g, "").slice(0, 24) },
                            ],
                        },
                    };
                },
                note: "已加入线下 HTML 预设",
            };
        }
        case "widget": {
            let r = [];
            try {
                r = JSON.parse((o == null ? void 0 : o(E.widget.ls)) || "[]") || [];
            } catch {
                r = [];
            }
            return {
                ls: { [E.widget.ls]: JSON.stringify([{ ...s, id: `wp_${Date.now().toString(36)}` }, ...r]) },
                note: "已加入桌面组件预设，编辑桌面时可在「添加组件」中找到",
            };
        }
        case "world": {
            const r = (a == null ? void 0 : a.characters) || [],
                l = s.bind
                    .map((u) => {
                        var b;
                        return (b = r.find((g) => g.name === u || g.realName === u)) == null ? void 0 : b.id;
                    })
                    .filter(Boolean),
                i = (a == null ? void 0 : a.activeAccountId) || "",
                d = s.all ? [i] : [],
                h = s.all ? "已绑定给所有角色" : l.length ? `已绑定给 ${l.length} 个角色` : "尚未绑定角色";
            return {
                patch: (u) => {
                    const b = s.entries.map((g) => ({
                        id: n("wb_"),
                        name: g.name || "条目",
                        body: g.body,
                        keywords: g.keywords || [],
                        category: s.name,
                        charIds: l,
                        allFor: d,
                        depth: 4,
                        role: "system",
                        enabled: !0,
                        bindings: { online: !0, offline: !0, global: !1 },
                    }));
                    return {
                        worldbook: [...(u.worldbook || []), ...b],
                        worldbookBooks: Ve(u, b),
                        worldbookCategories: [...new Set([...(u.worldbookCategories || ["未分类"]), s.name])],
                    };
                },
                note: `已加入世界书「${s.name}」，${h}`,
            };
        }
        case "char":
            return {
                run: (r) => {
                    const l = r.addCharacter({
                        name: s.name,
                        realName: s.realName,
                        nickname: s.nickname,
                        gender: s.gender,
                        age: s.age,
                        nationality: s.nationality,
                        signature: s.signature,
                        persona: s.persona,
                    });
                    return (
                        s.greeting &&
                            r.patch((i) => ({
                                characters: i.characters.map((d) =>
                                    d.id === l.id
                                        ? {
                                              ...d,
                                              messages: [
                                                  {
                                                      id: n("m_"),
                                                      role: "assistant",
                                                      type: "text",
                                                      content: s.greeting,
                                                      createdAt: Date.now(),
                                                  },
                                              ],
                                          }
                                        : d,
                                ),
                            })),
                        { removeChar: l.id }
                    );
                },
                note: `已新建角色「${s.name}」，在通讯录里可以找到`,
            };
        case "charEdit": {
            const r = ((a == null ? void 0 : a.characters) || []).find(
                (d) => d.name === s.char || d.realName === s.char,
            );
            if (!r) return { error: `本机没有叫「${s.char}」的角色` };
            const l = {
                    ...s.set,
                    ...(s.appendPersona
                        ? {
                              persona: `${s.set.persona ?? r.persona ?? ""}

${s.appendPersona}`.trim(),
                          }
                        : null),
                },
                i = Object.fromEntries(Object.keys(l).map((d) => [d, r[d] ?? ""]));
            return {
                run: (d) => (
                    d.patch((h) => ({
                        characters: h.characters.map((u) => (u.id === r.id ? { ...u, ...l } : u)),
                    })),
                    { charId: r.id, before: i }
                ),
                note: `已修改「${r.name}」的${Object.keys(l)
                    .map(
                        (d) =>
                            ({
                                persona: "人设",
                                signature: "签名",
                                nickname: "网名",
                                realName: "真名",
                                gender: "性别",
                                age: "年龄",
                                nationality: "国籍",
                            })[d],
                    )
                    .join("、")}`,
            };
        }
        case "prompt": {
            let r = {};
            try {
                r = JSON.parse((o == null ? void 0 : o(E.prompt.ls)) || "{}") || {};
            } catch {
                r = {};
            }
            const l = Ge({ name: s.name, text: s.text });
            return {
                ls: {
                    [E.prompt.ls]: JSON.stringify({
                        ...r,
                        custom: [...(Array.isArray(r.custom) ? r.custom : []), l],
                    }),
                },
                event: "litot-prompt-overrides",
                note: `已加入提示词模块「${s.name}」，所有角色都会带上；可在提示词设置中关闭`,
            };
        }
        default:
            return null;
    }
}
const Ie = "codex_sessions_v2",
    ve = "codex_undo_v1";
function ie(t = {}) {
    return {
        id: Ae("cxs_"),
        title: "新对话",
        lane: "codex",
        model: "",
        charId: "",
        msgs: [],
        createdAt: Date.now(),
        ...t,
    };
}
function Vs(t) {
    var o;
    try {
        const a = JSON.parse(t(Ie) || "null");
        if (Array.isArray(a) && a.length) return a;
    } catch {}
    let s = [];
    try {
        s = JSON.parse(t("codex_log") || "[]") || [];
    } catch {
        s = [];
    }
    return [
        ie(
            s.length
                ? { title: de((o = s.find((a) => a.role === "user")) == null ? void 0 : o.content), msgs: s }
                : {},
        ),
    ];
}
const de = (t) =>
        String(t || "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 14) || "新对话",
    qs = Te(ze, "Codex");
let Ys = 0;
const Ne = [
    { role: "assistant", content: "你好，这里是 LiToT" },
    { role: "user", content: "这是一条我发出的消息" },
    { role: "assistant", content: "这是一条回复" },
    { role: "user", content: "气泡的颜色、圆角与字号会随美化变化" },
    { role: "assistant", content: "预览到此为止" },
];
function te({
    preset: t = "wechat",
    css: s = "",
    char: o,
    me: a,
    system: n = "",
    lane: r = null,
    fallback: l = null,
    hint: i = "",
}) {
    const d = m.useRef(`cx-sim-${++Ys}`).current,
        h = !!n,
        u = !!(r != null && r.baseUrl),
        [b, g] = m.useState(() =>
            h
                ? []
                : Ne.map((x, T) => ({
                      ...x,
                      id: `s${T}`,
                      type: "text",
                      createdAt: Date.now() - (Ne.length - T) * 6e4,
                  })),
        ),
        [S, A] = m.useState(""),
        [p, v] = m.useState(!1),
        [O, y] = m.useState(""),
        z = m.useMemo(() => as(t === "imessage" ? "im" : "wx"), [t]),
        R = o || { id: "sim", name: "TA", messages: [] },
        j = async () => {
            const x = S.trim();
            if (!x || p || !u) return;
            const T = { id: `u${Date.now()}`, role: "user", type: "text", content: x, createdAt: Date.now() },
                K = [...b, T];
            (g(K), A(""), v(!0), y(""));
            try {
                const M = await qs.codex(
                        r,
                        [
                            { role: "system", content: n },
                            ...K.slice(-12).map((D) => ({ role: D.role, content: D.content })),
                        ],
                        { fallback: l },
                    ),
                    G = String(M.content || "")
                        .split(/\n+/)
                        .map((D) => D.trim())
                        .filter(Boolean)
                        .slice(0, 8);
                g((D) => [
                    ...D,
                    ...G.map((ee, V) => ({
                        id: `a${Date.now()}${V}`,
                        role: "assistant",
                        type: "text",
                        content: ee,
                        createdAt: Date.now(),
                    })),
                ]);
            } catch (M) {
                y((M == null ? void 0 : M.message) || "没有回复");
            }
            v(!1);
        };
    return e.jsxs("div", {
        className: `cx-sim ${d}`,
        children: [
            s ? e.jsx(le, { css: s, scope: `.${d}` }) : null,
            e.jsx(rs.Provider, {
                value: z,
                children: e.jsx("div", {
                    className: `chat-shell ${t === "imessage" ? "imessage-preset" : "wechat-preset"} cx-sim-shell ${z("chat")}`,
                    children: e.jsxs("div", {
                        className: `cx-sim-list ${z("list")}`,
                        children: [
                            b.length === 0 &&
                                e.jsx("div", {
                                    className: "cx-sim-empty",
                                    children: u
                                        ? i || "输入一句话试聊，看看按这份内容会怎么回。"
                                        : "请先在 设置 → 模型与 API 中配置通道，再试聊。",
                                }),
                            b.map((x) =>
                                e.jsx(
                                    ls,
                                    {
                                        m: x,
                                        char: R,
                                        me: a || {},
                                        preset: t,
                                        showCharAvatar: !0,
                                        showUserAvatar: !0,
                                        isFirstBubble: !0,
                                        isLastBubble: !0,
                                    },
                                    x.id,
                                ),
                            ),
                            p &&
                                e.jsxs("div", {
                                    className: "cx-sim-typing",
                                    children: [e.jsx("i", {}), e.jsx("i", {}), e.jsx("i", {})],
                                }),
                        ],
                    }),
                }),
            }),
            O && e.jsx("div", { className: "cx-sim-err", children: O }),
            h &&
                e.jsxs("div", {
                    className: "cx-sim-bar",
                    children: [
                        e.jsx("input", {
                            value: S,
                            disabled: !u,
                            onChange: (x) => A(x.target.value),
                            onKeyDown: (x) => {
                                x.key === "Enter" && j();
                            },
                            placeholder: u ? "试聊一句…" : "尚未配置通道",
                        }),
                        e.jsx("button", {
                            className: "btn-plain",
                            disabled: !S.trim() || p || !u,
                            onClick: j,
                            "aria-label": "发送",
                            children: e.jsx(Me, { size: 15, strokeWidth: 2.6 }),
                        }),
                    ],
                }),
        ],
    });
}
function ne({ name: t = "TA", persona: s = "", extra: o = "" } = {}) {
    return [
        `你是${t}。这是你和她的线上聊天，你在手机上回她的消息。`,
        s
            ? `你的人设：
${s}`
            : "",
        o
            ? `另外要遵守的设定：
${o}`
            : "",
        "用线上聊天的样子回复：一行就是一条消息气泡，可以发几条；不写旁白、动作描写和括号说明。",
    ].filter(Boolean).join(`

`);
}
const ae = 390,
    Ce = 844;
let Xs = 0;
const B = (t) => {
        (t.stopPropagation(), (t.type === "click" || t.type === "submit") && t.preventDefault());
    },
    we = {
        onClickCapture: B,
        onPointerDownCapture: B,
        onKeyDownCapture: B,
        onSubmitCapture: B,
        onContextMenuCapture: B,
        onFocusCapture: (t) => {
            var s;
            (s = t.target) != null &&
                s.blur &&
                /^(INPUT|TEXTAREA)$/.test(t.target.tagName) &&
                t.target.blur();
        },
    };
function W({ children: t, tools: s = null, label: o = "" }) {
    const a = m.useRef(null),
        [n, r] = m.useState(0.72),
        [l, i] = m.useState(!1),
        d = m.useRef(`cx-look-${++Xs}`).current;
    return (
        m.useLayoutEffect(() => {
            const h = a.current;
            if (!h || typeof ResizeObserver > "u") return;
            const u = () => r(Math.min(0.72, h.clientWidth / ae));
            u();
            const b = new ResizeObserver(u);
            return (b.observe(h), () => b.disconnect());
        }, []),
        e.jsxs("div", {
            className: "cx-stage-wrap",
            children: [
                e.jsx("div", {
                    className: "cx-stage",
                    ref: a,
                    style: { height: Math.round(Ce * n) + 12 },
                    children:
                        !l &&
                        e.jsx("div", {
                            className: `cx-stage-screen ${d}`,
                            style: {
                                width: ae,
                                height: Ce,
                                left: "50%",
                                marginLeft: -Math.round((ae * n) / 2),
                                transform: `scale(${n})`,
                            },
                            ...we,
                            children: t(d),
                        }),
                }),
                e.jsxs("div", {
                    className: "cx-stage-bar",
                    children: [
                        e.jsx("span", { children: o }),
                        s,
                        e.jsxs("button", {
                            className: "btn-plain cx-stage-full-btn",
                            onClick: () => i(!0),
                            children: [e.jsx(Os, { size: 13, strokeWidth: 2.2 }), "全屏"],
                        }),
                    ],
                }),
                l &&
                    typeof document < "u" &&
                    Ue.createPortal(
                        e.jsxs("div", {
                            className: "cx-stage-full",
                            children: [
                                e.jsx("div", {
                                    className: `cx-stage-screen is-full ${d}`,
                                    ...we,
                                    children: t(d),
                                }),
                                e.jsx("button", {
                                    className: "btn-plain cx-stage-exit",
                                    onClick: () => i(!1),
                                    children: "退出预览",
                                }),
                            ],
                        }),
                        document.body,
                    ),
            ],
        })
    );
}
function Qs(t = [], s = null) {
    if (s) return s;
    const o = (a) => {
        var n, r;
        return (
            ((r = (n = a.messages) == null ? void 0 : n[a.messages.length - 1]) == null
                ? void 0
                : r.createdAt) || 0
        );
    };
    return [...t].sort((a, n) => o(n) - o(a))[0] || null;
}
const Se = [
    "你好，这里是 LiToT",
    "这是一条我发出的消息",
    "这是一条回复",
    "气泡的颜色、圆角与字号会随美化变化",
    "预览到此为止",
];
function _e(t) {
    const s = ((t == null ? void 0 : t.messages) || []).filter((a) => !a.hidden).slice(-30);
    if (s.length) return s;
    const o = Date.now() - Se.length * 6e4;
    return Se.map((a, n) => ({
        id: `s${n}`,
        role: n % 2 ? "user" : "assistant",
        type: "text",
        content: a,
        createdAt: o + n * 6e4,
    }));
}
const ue = { id: "cx-nobody", name: "TA", messages: [] },
    Z = (t, s) => (s != null && s.meAvatar ? { ...t, avatar: s.meAvatar } : t);
function Zs({ item: t, char: s, me: o }) {
    const a = s || ue,
        n = m.useMemo(() => _e(a), [a]);
    return e.jsx(W, {
        label: `${P(a) || "TA"} 的聊天 · ${t.target === "imessage" ? "iMessage" : "微信"}`,
        children: (r) =>
            e.jsx(Pe, { char: a, me: Z(o, a), messages: n, preset: t.target, css: t.css, scope: r }),
    });
}
function et({ item: t, char: s, me: o }) {
    var h;
    const a = s || ue,
        n = m.useMemo(() => _e(a), [a]),
        [r, l] = m.useState(!0),
        i = m.useMemo(() => {
            const u = (t.fields || []).map((g) => g.tag).filter(Boolean),
                b = (a.innerVoices || [])
                    .filter((g) => (g == null ? void 0 : g.text) && u.some((S) => g.text.includes(S)))
                    .slice(-8);
            return b.length ? b : [{ id: "cx-s", at: Date.now(), text: t.sample || os(t) }];
        }, [a, t]),
        d = ((h = i[0]) == null ? void 0 : h.id) !== "cx-s";
    return e.jsx(W, {
        label: `${P(a) || "TA"} 的心声${d ? "" : " · 内容为样式自带的样例"}`,
        tools: e.jsx("button", {
            className: "btn-plain cx-stage-tool",
            onClick: () => l((u) => !u),
            children: r ? "收起心声" : "打开心声",
        }),
        children: (u) =>
            e.jsx(Pe, {
                char: a,
                me: Z(o, a),
                messages: n,
                scope: u,
                children: e.jsx(cs, {
                    open: r,
                    entries: i,
                    char: a,
                    me: Z(o, a),
                    fallbackTpl: "notes",
                    draftPreset: t,
                    onClose: () => l(!1),
                }),
            }),
    });
}
function $e({ css: t = null, html: s = null, char: o, me: a }) {
    var v, O;
    const { state: n } = Ee(),
        r = o || ue,
        l = m.useMemo(
            () =>
                (n.offlineChat || [])
                    .filter((y) => y.charId === r.id && !y.theaterId && !y.chapterId)
                    .slice(-6),
            [n.offlineChat, r.id],
        ),
        i = is(r, n.offlineSchemes || []),
        d = ds(i, hs(r.offlineTheme)),
        h = us(d),
        u =
            ((v = (n.offlineFloorCss || []).find((y) => y.id === r.offlineFloorCss)) == null
                ? void 0
                : v.css) || "",
        b = t ?? u,
        g = m.useMemo(() => {
            const y = ps(n.offline);
            return s ? [...y.filter((z) => z.id !== s.id), s] : y;
        }, [n.offline, s]),
        S = {
            char: P(r) || "TA",
            me: (a == null ? void 0 : a.realName) || (a == null ? void 0 : a.nickname) || "我",
        },
        A = s
            ? e.jsx(ms, {
                  block: { kind: "html", type: "preset", preset: s.id, data: xs(s), ok: !0 },
                  names: S,
                  dark: h,
                  presets: g,
              })
            : null,
        p = (O = [...l].reverse().find((y) => y.role === "assistant")) == null ? void 0 : O.id;
    return e.jsx(W, {
        label: l.length ? `${S.char} 最近的线下 · ${l.length} 层` : "线下 · 样例楼层（还没有线下记录）",
        children: (y) =>
            l.length
                ? e.jsxs(fs, {
                      title: "线下沉浸",
                      className: "ofl-root ofl-look",
                      style: gs(d),
                      children: [
                          e.jsx(le, {
                              css: (i == null ? void 0 : i.css) || "",
                              scope: `.${y} .ofl-look`,
                              alias: ".ofl-root",
                          }),
                          e.jsx(le, { css: b, scope: `.${y} .ofl-look`, alias: ".ofl-root" }),
                          e.jsx("div", {
                              className: "ofl-page",
                              children: l.map((z, R) =>
                                  e.jsx(
                                      js,
                                      {
                                          f: z,
                                          idx: R,
                                          char: r,
                                          me: Z(a, r),
                                          dark: h,
                                          htmlPresets: g,
                                          onMenu: () => {},
                                          extra: z.id === p ? A : null,
                                      },
                                      z.id,
                                  ),
                              ),
                          }),
                      ],
                  })
                : e.jsxs("div", {
                      style: { height: "100%", overflowY: "auto" },
                      children: [
                          e.jsx(bs, { css: b, theme: d, char: r, me: a, scope: `${y}-fl` }),
                          A && e.jsx("div", { style: { padding: 12 }, children: A }),
                      ],
                  }),
    });
}
function Oe({ listCss: t = null, decor: s = null }) {
    const o = () => {};
    return e.jsx(W, {
        label: s ? "消息页 · 装饰卡在列表顶部" : "消息页",
        children: (a) =>
            e.jsx(ys, {
                look: { scope: a, listCss: t, decor: s },
                onBack: o,
                onOpenChat: o,
                onOpenAddChar: o,
                onOpenGroup: o,
                onGoContacts: o,
                onGoMe: o,
            }),
    });
}
function st({ item: t }) {
    const s = m.useMemo(() => ({ widget: t }), [t]),
        o = () => {};
    return e.jsx(W, {
        label: "桌面第一页 · 新组件排在最前",
        children: () => e.jsx(ks, { look: s, onOpenApp: o, onOpenSystemPage: o }),
    });
}
function tt({ item: t, styleId: s, chars: o = [], char: a }) {
    const n = (a && se(a).length ? a : o.find((l) => se(l).length)) || a || o[0] || null,
        r = m.useMemo(() => ({ style: { ...t, id: s } }), [t, s]);
    return n
        ? e.jsx(W, {
              label: se(n).length ? `${P(n)} 的专访` : `${P(n)} · 还没有专访，显示封面`,
              children: () => e.jsx(Ds, { char: n, onBack: () => {}, look: r }),
          })
        : null;
}
const De = Te(ze, "Codex"),
    F = (t) => {
        try {
            return localStorage.getItem(t);
        } catch {
            return null;
        }
    },
    q = (t, s) => {
        try {
            return (s === null ? localStorage.removeItem(t) : localStorage.setItem(t, s), !0);
        } catch {
            return !1;
        }
    },
    he = [
        ["codex", "Codex 通道"],
        ["chat", "聊天通道"],
        ["memory", "记忆通道"],
        ["insta", "Insta 通道"],
        ["phone", "查手机通道"],
        ["mcp", "工具通道"],
    ],
    nt = [
        ["写一张角色卡", "帮我写一张角色卡：先问我想要什么样的人，再写人设、网名和签名。"],
        [
            "写一条功能性世界书",
            "写一条世界书：让角色说话更有活人感、不油腻。写机制和判据，不要禁用词表和示范台词，绑定给所有角色。",
        ],
        ["设计一套心声样式", "设计一套心声样式：像手写便签，黑白灰，字段包括时间、一句话和展开的心里话。"],
        ["美化消息页", "为消息页做一套样式：留白多、发丝线分隔、圆形头像，分组标题用小号英文并拉开字距。"],
        ["制作一张装饰卡", "做一张消息页装饰卡：杂志刊头风格，显示昵称、签名和今天的日期。"],
        ["调整专访风格", "为专访做一套新风格：文艺周刊，暖白纸色，提问更日常。"],
        ["线上聊天气泡", "为微信模式的聊天做一套美化：气泡更圆润，对方气泡白底加发丝线，我方气泡近黑。"],
    ];
function Q(t, s) {
    var n, r, l, i;
    const o = t.api || {};
    if (String(s.lane).startsWith("preset:")) {
        const d = (o.presets || []).find((h) => `preset:${h.id}` === s.lane);
        if (d)
            return {
                baseUrl: d.baseUrl,
                apiKey: d.apiKey,
                model:
                    s.model || ((r = (n = d.models) == null ? void 0 : n[0]) == null ? void 0 : r.name) || "",
                temperature: 0.7,
            };
    }
    const a =
        (l = o[s.lane]) != null && l.baseUrl
            ? o[s.lane]
            : (i = o.codex) != null && i.baseUrl
              ? o.codex
              : o.chat;
    return a ? { ...a, model: s.model || a.model } : null;
}
function at(t, s) {
    var o, a;
    return String(s.lane).startsWith("preset:")
        ? ((a = (((o = t.api) == null ? void 0 : o.presets) || []).find(
              (n) => `preset:${n.id}` === s.lane,
          )) == null
              ? void 0
              : a.name) || "URL 预设"
        : (he.find(([n]) => n === s.lane) || he[0])[1].replace(" 通道", "");
}
function jt({ onBack: t }) {
    var me, xe, fe;
    const { state: s, patch: o, addCharacter: a, deleteCharacter: n } = Ee(),
        r = vs(),
        [l, i] = m.useState(() => Vs(F)),
        [d, h] = m.useState(() => l[l.length - 1].id),
        [u, b] = m.useState(""),
        [g, S] = m.useState(""),
        [A, p] = m.useState(""),
        [v, O] = m.useState(() => {
            try {
                return JSON.parse(F(ve) || "[]") || [];
            } catch {
                return [];
            }
        }),
        y = m.useRef(null),
        z = m.useRef(null),
        R = m.useRef(null),
        j = l.find((c) => c.id === d) || l[0],
        x = (s.characters || []).find((c) => c.id === j.charId) || null;
    (m.useEffect(() => {
        q(Ie, JSON.stringify(l.map((c) => ({ ...c, msgs: c.msgs.slice(-80) }))));
    }, [l]),
        m.useEffect(() => {
            q(ve, JSON.stringify(v.slice(0, 8)));
        }, [v]),
        m.useEffect(() => {
            var c;
            (c = z.current) == null || c.scrollTo({ top: 1e9, behavior: "smooth" });
        }, [j.msgs.length, d, g]));
    const T = (c, f) => i((N) => N.map((k) => (k.id === c ? { ...k, ...f(k) } : k))),
        K = () => {
            const c = ie({ lane: j.lane, model: j.model });
            (i((f) => [...f, c]), h(c.id), b(""));
        },
        M = (c) => {
            if (l.length <= 1) {
                (i([ie({ lane: j.lane, model: j.model })]), h(""));
                return;
            }
            const f = l.findIndex((k) => k.id === c),
                N = l.filter((k) => k.id !== c);
            (i(N), c === d && h(N[Math.max(0, f - 1)].id));
        };
    m.useEffect(() => {
        l.some((c) => c.id === d) || h(l[l.length - 1].id);
    }, [l, d]);
    const G = async (c) => {
            const f = String(c ?? u).trim();
            if (!f || g) return;
            const N = Q(s, j);
            if (!(N != null && N.baseUrl)) {
                r("请先在 API 设置中配置 Codex 或聊天通道", "error");
                return;
            }
            b("");
            const k = j.id,
                L = { id: `m${Date.now().toString(36)}`, role: "user", content: f, ts: Date.now() },
                U = [...j.msgs, L];
            (T(k, (C) => ({ msgs: U, title: C.named || C.msgs.length ? C.title : de(f) })), S(k));
            const I = new AbortController();
            y.current = I;
            try {
                const C = Hs({
                        char: x ? ce(x) : "",
                        persona: (x == null ? void 0 : x.persona) || "",
                        relation: x ? Js(x, { meName: Ss(s.me) || "" }) : "",
                        local: Us(s, F),
                    }),
                    w = await De.codex(
                        N,
                        [
                            { role: "system", content: C },
                            ...U.slice(-24).map((_) => ({ role: _.role, content: _.content })),
                        ],
                        { signal: I.signal, fallback: s.api.chat },
                    );
                T(k, (_) => ({
                    msgs: [
                        ..._.msgs,
                        {
                            id: `m${Date.now().toString(36)}a`,
                            role: "assistant",
                            content: w.content || "",
                            ts: Date.now(),
                            model: w.model || N.model,
                            as: x ? P(x) : "",
                            usage: w.usage,
                        },
                    ],
                }));
            } catch (C) {
                I.signal.aborted || r(C.message || "请求失败", "error");
            }
            (S(""), (y.current = null));
        },
        D = () => {
            var c;
            ((c = y.current) == null || c.abort(), S(""));
        },
        ee = (c, f, N) => {
            const k = Gs(N.kind, N.item, { readLs: F, state: s });
            if (!k) return;
            if (k.error) {
                r(k.error, "error");
                return;
            }
            const L = Ks(N.kind, s, F);
            if (k.ls) {
                for (const [C, w] of Object.entries(k.ls))
                    if (!q(C, w)) {
                        r("本机存储空间不足", "error");
                        return;
                    }
            }
            k.patch && o(k.patch);
            const U = k.run ? k.run({ addCharacter: a, patch: o }) : null;
            k.ls && window.dispatchEvent(new Event(k.event || je));
            const I = {
                id: `u${Date.now().toString(36)}`,
                at: Date.now(),
                kind: N.kind,
                name: N.item.name || E[N.kind].label,
                snap: L,
                extra: U,
                ref: `${c}:${f}`,
            };
            (O((C) => [I, ...C].slice(0, 8)),
                T(j.id, (C) => ({
                    msgs: C.msgs.map((w) =>
                        w.id === c ? { ...w, applied: { ...(w.applied || {}), [f]: I.id } } : w,
                    ),
                })),
                r(k.note));
        },
        V = (c) => {
            var U, I;
            const f = v.find((C) => C.id === c);
            if (!f) {
                r("这条撤销记录已不存在", "error");
                return;
            }
            const N = Object.fromEntries(
                Object.entries(f.snap.keys).map(([C, w]) => [C, w === null ? void 0 : w]),
            );
            Object.keys(N).length && o(N);
            for (const [C, w] of Object.entries(f.snap.ls || {})) q(C, w);
            (Object.keys(f.snap.ls || {}).length &&
                window.dispatchEvent(new Event(f.kind === "prompt" ? "litot-prompt-overrides" : je)),
                (U = f.extra) != null && U.removeChar && n(f.extra.removeChar),
                (I = f.extra) != null &&
                    I.charId &&
                    o((C) => ({
                        characters: C.characters.map((w) =>
                            w.id === f.extra.charId ? { ...w, ...f.extra.before } : w,
                        ),
                    })),
                O((C) => C.filter((w) => w.id !== c)));
            const [k, L] = f.ref.split(":");
            (i((C) =>
                C.map((w) => ({
                    ...w,
                    msgs: w.msgs.map((_) =>
                        _.id === k ? { ..._, applied: { ...(_.applied || {}), [L]: "" } } : _,
                    ),
                })),
            ),
                r("已撤销，恢复到应用之前"));
        };
    re.useLayoutEffect(() => {
        var N;
        const c = R.current;
        if (!c) return;
        c.style.height = "auto";
        const f = Math.round(
            (((N = window.visualViewport) == null ? void 0 : N.height) || window.innerHeight) * 0.4,
        );
        ((c.style.height = `${Math.min(c.scrollHeight, f)}px`),
            (c.style.overflowY = c.scrollHeight > f ? "auto" : "hidden"));
    }, [u, d]);
    const pe = g === j.id,
        Re = {
            lane: Q(s, j),
            fallback: (me = s.api) == null ? void 0 : me.chat,
            preset: ((xe = s.ui) == null ? void 0 : xe.chatPreset) === "imessage" ? "imessage" : "wechat",
            chars: s.characters || [],
            testChar: x || (s.characters || [])[0] || null,
            lookChar: Qs(s.characters || [], x),
        },
        Le = j.msgs.length === 0;
    return e.jsxs("div", {
        className: "cx-root",
        children: [
            e.jsxs("header", {
                className: "cx-top",
                children: [
                    e.jsx("button", {
                        className: "btn-plain cx-ico",
                        onClick: t,
                        "aria-label": "返回",
                        children: e.jsx(be, { size: 22, strokeWidth: 2 }),
                    }),
                    e.jsxs("button", {
                        className: "btn-plain cx-model",
                        onClick: () => p("model"),
                        children: [
                            e.jsxs("span", {
                                className: "cx-model-t",
                                children: [e.jsx(Y, { size: 16 }), "Codex"],
                            }),
                            e.jsxs("span", {
                                className: "cx-model-s",
                                children: [
                                    at(s, j),
                                    " · ",
                                    ((fe = Q(s, j)) == null ? void 0 : fe.model) || "未配置",
                                    e.jsx(ye, { size: 12, strokeWidth: 2.4 }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("span", {
                        className: "cx-top-r",
                        children: [
                            e.jsx("button", {
                                className: "btn-plain cx-ico",
                                onClick: K,
                                "aria-label": "新窗口",
                                children: e.jsx(As, { size: 20, strokeWidth: 2 }),
                            }),
                            e.jsx("button", {
                                className: "btn-plain cx-ico",
                                onClick: () => p("more"),
                                "aria-label": "更多",
                                children: e.jsx(Ts, { size: 20, strokeWidth: 2 }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("nav", {
                className: "cx-tabs",
                role: "tablist",
                children: l.map((c) =>
                    e.jsxs(
                        "button",
                        {
                            role: "tab",
                            "aria-selected": c.id === j.id,
                            className: `btn-plain cx-tab ${c.id === j.id ? "on" : ""}`,
                            onClick: () => (c.id === j.id ? p("wins") : h(c.id)),
                            children: [
                                e.jsx("span", { children: c.title }),
                                g === c.id && e.jsx("i", { className: "cx-tab-dot" }),
                                c.id === j.id &&
                                    e.jsx("span", {
                                        className: "cx-tab-x",
                                        role: "button",
                                        "aria-label": "删除此窗口",
                                        onClick: (f) => {
                                            (f.stopPropagation(), M(c.id));
                                        },
                                        children: e.jsx(zs, { size: 11, strokeWidth: 2.6 }),
                                    }),
                            ],
                        },
                        c.id,
                    ),
                ),
            }),
            e.jsx("main", {
                className: "cx-scroll",
                ref: z,
                children: Le
                    ? e.jsxs("div", {
                          className: "cx-empty",
                          children: [
                              x
                                  ? e.jsxs("span", {
                                        className: "cx-empty-pair",
                                        children: [
                                            e.jsx("span", {
                                                className: "cx-empty-mark sm",
                                                children: e.jsx(Y, { size: 28 }),
                                            }),
                                            e.jsx(J, { char: x, size: 56 }),
                                        ],
                                    })
                                  : e.jsx("span", {
                                        className: "cx-empty-mark is-alive",
                                        children: e.jsx(Ns, { size: 58, alive: !0 }),
                                    }),
                              "   ",
                              e.jsx("h2", { children: x ? `和 ${P(x)} 一起做` : "需要做些什么？" }),
                              e.jsx("p", {
                                  children: x
                                      ? `${P(x)} 会用自己的语气陪你做。生成的样式先在沙箱中预览，确认后再应用，每次应用都可以撤销。本窗口的对话不会写入你们的聊天记录与记忆。`
                                      : "生成的样式先在沙箱中预览，确认后再应用到本机；每次应用都可以撤销。",
                              }),
                              e.jsx("div", {
                                  className: "cx-sug",
                                  children: nt.map(([c, f]) =>
                                      e.jsxs(
                                          "button",
                                          {
                                              className: "btn-plain",
                                              onClick: () => {
                                                  var N;
                                                  (b(f), (N = R.current) == null || N.focus());
                                              },
                                              children: [
                                                  e.jsx("span", { children: c }),
                                                  e.jsx(be, {
                                                      size: 14,
                                                      style: { transform: "rotate(180deg)" },
                                                  }),
                                              ],
                                          },
                                          c,
                                      ),
                                  ),
                              }),
                          ],
                      })
                    : e.jsxs("div", {
                          className: "cx-thread",
                          children: [
                              j.msgs.map((c) =>
                                  c.role === "user"
                                      ? e.jsx(
                                            "div",
                                            {
                                                className: "cx-u",
                                                children: e.jsx("div", {
                                                    className: "cx-u-b",
                                                    children: c.content,
                                                }),
                                            },
                                            c.id,
                                        )
                                      : e.jsx(
                                            rt,
                                            { m: c, char: x, me: s.me, sim: Re, onApply: ee, onUndo: V },
                                            c.id,
                                        ),
                              ),
                              pe &&
                                  e.jsxs("div", {
                                      className: "cx-a",
                                      children: [
                                          e.jsx(J, { char: x }),
                                          e.jsxs("div", {
                                              className: "cx-a-body",
                                              children: [
                                                  e.jsx("div", {
                                                      className: "cx-a-name",
                                                      children: x ? P(x) : "Codex",
                                                  }),
                                                  e.jsxs("div", {
                                                      className: "cx-thinking",
                                                      children: [
                                                          e.jsx("i", {}),
                                                          e.jsx("i", {}),
                                                          e.jsx("i", {}),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                          ],
                      }),
            }),
            e.jsx("footer", {
                className: "cx-compose",
                children: e.jsxs("div", {
                    className: "cx-box",
                    children: [
                        e.jsx("textarea", {
                            ref: R,
                            rows: 1,
                            value: u,
                            placeholder: "描述你想做的：角色卡、世界书、美化…",
                            onChange: (c) => b(c.target.value),
                            onKeyDown: (c) => {
                                c.key === "Enter" && (c.metaKey || c.ctrlKey) && (c.preventDefault(), G());
                            },
                        }),
                        e.jsxs("div", {
                            className: "cx-box-bar",
                            children: [
                                e.jsxs("button", {
                                    className: `btn-plain cx-chip ${x ? "on" : ""}`,
                                    onClick: () => p("char"),
                                    children: [
                                        x
                                            ? e.jsx(J, { char: x, size: 18 })
                                            : e.jsx(Ps, { size: 14, strokeWidth: 2 }),
                                        x ? `与 ${P(x)} 协作` : "独自工作",
                                        e.jsx(ye, { size: 12, strokeWidth: 2.4 }),
                                    ],
                                }),
                                pe
                                    ? e.jsx("button", {
                                          className: "btn-plain cx-send stop",
                                          onClick: D,
                                          "aria-label": "停止",
                                          children: e.jsx(Es, { size: 12, fill: "currentColor" }),
                                      })
                                    : e.jsx("button", {
                                          className: "btn-plain cx-send",
                                          disabled: !u.trim(),
                                          onClick: () => G(),
                                          "aria-label": "发送",
                                          children: e.jsx(Me, { size: 18, strokeWidth: 2.4 }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
            e.jsx(dt, {
                open: A === "model",
                onClose: () => p(""),
                state: s,
                sess: j,
                onPick: (c) => {
                    T(j.id, () => c);
                },
                toast: r,
            }),
            e.jsx(X, {
                open: A === "char",
                onClose: () => p(""),
                title: "协作对象",
                children: e.jsxs("div", {
                    className: "cx-pick",
                    children: [
                        e.jsxs("button", {
                            className: `btn-plain ${j.charId ? "" : "on"}`,
                            onClick: () => {
                                (T(j.id, () => ({ charId: "" })), p(""));
                            },
                            children: [
                                e.jsx("span", { className: "cx-pick-ava", children: e.jsx(Y, { size: 18 }) }),
                                e.jsxs("span", {
                                    className: "cx-pick-t",
                                    children: [
                                        e.jsx("b", { children: "独自工作" }),
                                        e.jsx("small", { children: "由 Codex 直接回复" }),
                                    ],
                                }),
                                !j.charId && e.jsx(H, { size: 16 }),
                            ],
                        }),
                        (s.characters || []).map((c) =>
                            e.jsxs(
                                "button",
                                {
                                    className: `btn-plain ${j.charId === c.id ? "on" : ""}`,
                                    onClick: () => {
                                        (T(j.id, () => ({ charId: c.id })), p(""));
                                    },
                                    children: [
                                        e.jsx(J, { char: c, size: 34 }),
                                        e.jsxs("span", {
                                            className: "cx-pick-t",
                                            children: [
                                                e.jsx("b", { children: oe(c) }),
                                                e.jsx("small", {
                                                    children: "以其语气协作，不写入聊天记录与记忆",
                                                }),
                                            ],
                                        }),
                                        j.charId === c.id && e.jsx(H, { size: 16 }),
                                    ],
                                },
                                c.id,
                            ),
                        ),
                    ],
                }),
            }),
            e.jsx(Cs, {
                open: A === "more",
                onClose: () => p(""),
                actions: [
                    { label: `撤销记录（${v.length}）`, onClick: () => setTimeout(() => p("undo"), 0) },
                    { label: ge() ? "退出安全模式" : "进入安全模式", onClick: () => ws(!ge()) },
                    { label: "管理窗口（重命名、删除）", onClick: () => setTimeout(() => p("wins"), 0) },
                    {
                        label: "清空本窗口",
                        onClick: () => T(j.id, () => ({ msgs: [], title: "新对话", named: !1 })),
                    },
                    { label: "删除本窗口", destructive: !0, onClick: () => M(j.id) },
                ],
            }),
            e.jsx(X, {
                open: A === "wins",
                onClose: () => p(""),
                title: "窗口",
                children: e.jsxs("div", {
                    className: "cx-pick",
                    children: [
                        l.map((c) =>
                            e.jsxs(
                                "div",
                                {
                                    className: `cx-win-row ${c.id === j.id ? "on" : ""}`,
                                    children: [
                                        e.jsx("input", {
                                            className: "cx-win-name",
                                            value: c.title,
                                            maxLength: 20,
                                            "aria-label": "窗口名称",
                                            onChange: (f) =>
                                                T(c.id, () => ({ title: f.target.value, named: !0 })),
                                            onBlur: (f) => {
                                                f.target.value.trim() ||
                                                    T(c.id, (N) => {
                                                        var k;
                                                        return {
                                                            title: de(
                                                                (k = N.msgs.find((L) => L.role === "user")) ==
                                                                    null
                                                                    ? void 0
                                                                    : k.content,
                                                            ),
                                                            named: !1,
                                                        };
                                                    });
                                            },
                                        }),
                                        e.jsx("small", {
                                            children: c.msgs.length ? `${c.msgs.length} 条` : "空",
                                        }),
                                        e.jsx("button", {
                                            className: "btn-plain cx-win-del",
                                            onClick: () => M(c.id),
                                            "aria-label": "删除此窗口",
                                            children: e.jsx(Ms, { size: 15, strokeWidth: 2 }),
                                        }),
                                    ],
                                },
                                c.id,
                            ),
                        ),
                        e.jsx("div", {
                            className: "cx-pick-empty",
                            children:
                                "点名称直接修改。删除后该窗口的对话不可恢复；已应用的样式不受影响，仍可在撤销记录中撤销。",
                        }),
                    ],
                }),
            }),
            e.jsx(X, {
                open: A === "undo",
                onClose: () => p(""),
                title: "撤销记录",
                children: e.jsxs("div", {
                    className: "cx-pick",
                    children: [
                        !v.length &&
                            e.jsx("div", { className: "cx-pick-empty", children: "暂无可撤销的应用。" }),
                        v.map((c) => {
                            var f;
                            return e.jsxs(
                                "div",
                                {
                                    className: "cx-undo-row",
                                    children: [
                                        e.jsxs("span", {
                                            className: "cx-pick-t",
                                            children: [
                                                e.jsx("b", { children: c.name }),
                                                e.jsxs("small", {
                                                    children: [
                                                        (f = E[c.kind]) == null ? void 0 : f.label,
                                                        " · ",
                                                        new Date(c.at).toLocaleString("zh-CN", {
                                                            month: "numeric",
                                                            day: "numeric",
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        e.jsxs("button", {
                                            className: "btn-plain cx-undo-btn",
                                            onClick: () => V(c.id),
                                            children: [e.jsx(Is, { size: 13, strokeWidth: 2.2 }), "撤销"],
                                        }),
                                    ],
                                },
                                c.id,
                            );
                        }),
                        e.jsx("div", {
                            className: "cx-pick-empty",
                            children: "保留最近 8 次应用。安全模式会暂停所有自定义样式，不删除数据。",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function J({ char: t, size: s = 26 }) {
    return t
        ? e.jsx("span", {
              className: "cx-ava",
              style: { width: s, height: s },
              children: t.avatar
                  ? e.jsx($s, { src: t.avatar, alt: "" })
                  : e.jsx("i", { style: { fontSize: s * 0.42 }, children: P(t).slice(0, 1) }),
          })
        : e.jsx("span", {
              className: "cx-ava bunny",
              style: { width: s, height: s },
              children: e.jsx(Y, { size: Math.round(s * 0.62) }),
          });
}
function rt({ m: t, char: s, me: o, sim: a, onApply: n, onUndo: r }) {
    const l = m.useMemo(() => Rs(t.content), [t.content]);
    return e.jsxs("div", {
        className: "cx-a",
        children: [
            e.jsx(J, { char: t.as ? s : null }),
            e.jsxs("div", {
                className: "cx-a-body",
                children: [
                    e.jsxs("div", {
                        className: "cx-a-name",
                        children: [t.as || "Codex", t.model ? e.jsx("small", { children: t.model }) : null],
                    }),
                    l.map((i, d) => {
                        var h;
                        return i.type === "text"
                            ? e.jsx(lt, { text: i.text }, d)
                            : i.type === "code"
                              ? e.jsx(ot, { lang: i.lang, code: i.code, cut: i.cut }, d)
                              : e.jsx(
                                    ct,
                                    {
                                        b: i,
                                        char: s,
                                        me: o,
                                        sim: a,
                                        applied: (h = t.applied) == null ? void 0 : h[d],
                                        onApply: () => n(t.id, d, i),
                                        onUndo: () => {
                                            var u;
                                            return r((u = t.applied) == null ? void 0 : u[d]);
                                        },
                                    },
                                    d,
                                );
                    }),
                ],
            }),
        ],
    });
}
function lt({ text: t }) {
    const s = String(t)
            .trim()
            .split(/\n{2,}/),
        o = (a) =>
            a
                .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
                .map((n, r) =>
                    /^\*\*[^*]+\*\*$/.test(n)
                        ? e.jsx("b", { children: n.slice(2, -2) }, r)
                        : /^`[^`]+`$/.test(n)
                          ? e.jsx("code", { children: n.slice(1, -1) }, r)
                          : e.jsx(re.Fragment, { children: n }, r),
                );
    return e.jsx("div", {
        className: "cx-rich",
        children: s.map((a, n) => {
            const r = a.split(`
`);
            return r.every((l) => /^\s*[-*•]\s+/.test(l))
                ? e.jsx(
                      "ul",
                      {
                          children: r.map((l, i) =>
                              e.jsx("li", { children: o(l.replace(/^\s*[-*•]\s+/, "")) }, i),
                          ),
                      },
                      n,
                  )
                : /^#{1,4}\s/.test(a)
                  ? e.jsx("h4", { children: o(a.replace(/^#{1,4}\s+/, "")) }, n)
                  : e.jsx(
                        "p",
                        {
                            children: r.map((l, i) =>
                                e.jsxs(re.Fragment, { children: [i > 0 && e.jsx("br", {}), o(l)] }, i),
                            ),
                        },
                        n,
                    );
        }),
    });
}
function ot({ lang: t, code: s, cut: o }) {
    const [a, n] = m.useState(!1),
        r = async () => {
            try {
                (await navigator.clipboard.writeText(s), n(!0), setTimeout(() => n(!1), 1400));
            } catch {}
        };
    return e.jsxs("div", {
        className: "cx-code",
        children: [
            e.jsxs("div", {
                className: "cx-code-h",
                children: [
                    e.jsxs("span", { children: [t || "code", o ? " · 未完整" : ""] }),
                    e.jsxs("button", {
                        className: "btn-plain",
                        onClick: r,
                        children: [
                            a ? e.jsx(H, { size: 13 }) : e.jsx(_s, { size: 13 }),
                            a ? "已复制" : "复制",
                        ],
                    }),
                ],
            }),
            e.jsx("pre", { children: s }),
        ],
    });
}
function ct({ b: t, char: s, me: o, sim: a, applied: n, onApply: r, onUndo: l }) {
    var g;
    const [i, d] = m.useState(!0),
        [h, u] = m.useState(!1),
        b = E[t.kind];
    return e.jsxs("div", {
        className: `cx-card ${n ? "is-applied" : ""}`,
        children: [
            e.jsxs("div", {
                className: "cx-card-h",
                children: [
                    e.jsx("span", { className: "cx-card-k", children: b.label }),
                    e.jsx("b", { children: ((g = t.item) == null ? void 0 : g.name) || "未命名" }),
                    !t.error &&
                        e.jsx("button", {
                            className: "btn-plain cx-card-tog",
                            onClick: () => d((S) => !S),
                            children: i ? "收起" : "预览",
                        }),
                ],
            }),
            t.error
                ? e.jsxs("div", {
                      className: "cx-card-err",
                      children: [t.error, e.jsx("pre", { children: t.raw.slice(0, 600) })],
                  })
                : e.jsxs(e.Fragment, {
                      children: [
                          i &&
                              e.jsx("div", {
                                  className: "cx-card-pv",
                                  children: e.jsx(it, { kind: t.kind, item: t.item, char: s, me: o, sim: a }),
                              }),
                          e.jsxs("div", {
                              className: "cx-card-f",
                              children: [
                                  e.jsx("button", {
                                      className: "btn-plain cx-card-code",
                                      onClick: () => u((S) => !S),
                                      children: h ? "隐藏代码" : "查看代码",
                                  }),
                                  n
                                      ? e.jsxs("span", {
                                            className: "cx-card-done",
                                            children: [
                                                e.jsx(H, { size: 14, strokeWidth: 2.6 }),
                                                "已应用",
                                                e.jsx("button", {
                                                    className: "btn-plain",
                                                    onClick: l,
                                                    children: "撤销",
                                                }),
                                            ],
                                        })
                                      : e.jsx("button", {
                                            className: "btn-plain cx-card-go",
                                            onClick: r,
                                            children: "应用",
                                        }),
                              ],
                          }),
                          h && e.jsx("pre", { className: "cx-card-src", children: t.raw.trim() }),
                      ],
                  }),
        ],
    });
}
function it({ kind: t, item: s, char: o, me: a, sim: n }) {
    const r = m.useMemo(
        () =>
            `cx${Math.abs([...JSON.stringify(s)].reduce((l, i) => (l * 31 + i.charCodeAt(0)) | 0, 7)).toString(36)}`,
        [s],
    );
    switch (t) {
        case "thought":
            return e.jsx(et, { item: { ...s, id: r }, char: n == null ? void 0 : n.lookChar, me: a });
        case "listCss":
            return e.jsx(Oe, { listCss: s.css });
        case "decor":
            return e.jsx(Oe, { decor: { ...s, id: r } });
        case "interview":
            return e.jsx(tt, {
                item: s,
                styleId: r,
                chars: n == null ? void 0 : n.chars,
                char: n == null ? void 0 : n.lookChar,
            });
        case "htmlpreset":
            return e.jsx($e, { html: { ...s, id: `${r}-hp` }, char: n == null ? void 0 : n.lookChar, me: a });
        case "widget":
            return e.jsx(st, { item: s });
        case "chatCss":
            return e.jsx(Zs, { item: s, char: n == null ? void 0 : n.lookChar, me: a });
        case "floor":
            return e.jsx($e, { css: s.css, char: n == null ? void 0 : n.lookChar, me: a });
        case "char":
            return e.jsx(te, {
                preset: n == null ? void 0 : n.preset,
                char: { id: r, name: s.name, avatar: null, messages: [] },
                me: a,
                lane: n == null ? void 0 : n.lane,
                fallback: n == null ? void 0 : n.fallback,
                system: ne({ name: s.name, persona: s.persona }),
                hint: `和「${s.name}」试聊一句，看看人设立不立得住。`,
            });
        case "charEdit": {
            const l = ((n == null ? void 0 : n.chars) || []).find(
                (d) => d.name === s.char || d.realName === s.char,
            );
            if (!l)
                return e.jsxs("div", {
                    className: "cx-pv-note",
                    children: ["本机没有叫「", s.char, "」的角色，应用不了。"],
                });
            const i = `${s.set.persona ?? l.persona ?? ""}${
                s.appendPersona
                    ? `

${s.appendPersona}`
                    : ""
            }`;
            return e.jsx(te, {
                preset: n == null ? void 0 : n.preset,
                char: l,
                me: a,
                lane: n == null ? void 0 : n.lane,
                fallback: n == null ? void 0 : n.fallback,
                system: ne({ name: ce(l), persona: i }),
                hint: `按修改后的样子和「${oe(l)}」试聊一句。`,
            });
        }
        case "world":
        case "prompt": {
            const l = n == null ? void 0 : n.testChar,
                i =
                    t === "world"
                        ? s.entries.map(
                              (d) => `【${d.name || "条目"}】
${d.body}`,
                          ).join(`

`)
                        : s.text;
            return e.jsxs(e.Fragment, {
                children: [
                    t === "world" &&
                        e.jsxs("ol", {
                            className: "cx-pv-world",
                            children: [
                                s.entries
                                    .slice(0, 6)
                                    .map((d, h) =>
                                        e.jsxs(
                                            "li",
                                            {
                                                children: [
                                                    e.jsx("b", { children: d.name || `条目 ${h + 1}` }),
                                                    e.jsx("span", { children: d.body.slice(0, 80) }),
                                                ],
                                            },
                                            h,
                                        ),
                                    ),
                                s.entries.length > 6 &&
                                    e.jsxs("li", {
                                        className: "more",
                                        children: ["另有 ", s.entries.length - 6, " 条"],
                                    }),
                            ],
                        }),
                    l
                        ? e.jsx(te, {
                              preset: n == null ? void 0 : n.preset,
                              char: l,
                              me: a,
                              lane: n == null ? void 0 : n.lane,
                              fallback: n == null ? void 0 : n.fallback,
                              system: ne({ name: ce(l), persona: l.persona, extra: i }),
                              hint: `用「${oe(l)}」带上这份${t === "world" ? "世界书" : "提示词模块"}试聊一句。`,
                          })
                        : e.jsx("div", {
                              className: "cx-pv-note",
                              children: "本机还没有角色，建一个角色后可以试聊。",
                          }),
                ],
            });
        }
        default:
            return null;
    }
}
function dt({ open: t, onClose: s, state: o, sess: a, onPick: n, toast: r }) {
    const [l, i] = m.useState({}),
        [d, h] = m.useState(""),
        [u, b] = m.useState(""),
        g = o.api || {},
        S = [
            ...he
                .filter(([p]) => {
                    var v;
                    return (v = g[p]) == null ? void 0 : v.baseUrl;
                })
                .map(([p, v]) => ({ key: p, label: v, model: g[p].model })),
            ...(g.presets || [])
                .filter((p) => p.baseUrl)
                .map((p) => {
                    var v, O;
                    return {
                        key: `preset:${p.id}`,
                        label: p.name || "URL 预设",
                        model: ((O = (v = p.models) == null ? void 0 : v[0]) == null ? void 0 : O.name) || "",
                    };
                }),
        ],
        A = async (p) => {
            const v = Q(o, { lane: p, model: "" });
            if (v != null && v.baseUrl) {
                h(p);
                try {
                    i((y) => ({ ...y, [p]: [] }));
                    const O = await De.listModels(v);
                    i((y) => ({ ...y, [p]: O }));
                } catch (O) {
                    r(O.message, "error");
                }
                h("");
            }
        };
    return e.jsx(X, {
        open: t,
        onClose: s,
        title: "通道与模型",
        children: e.jsxs("div", {
            className: "cx-pick",
            children: [
                !S.length &&
                    e.jsx("div", {
                        className: "cx-pick-empty",
                        children: "尚未配置任何通道。请先在 设置 → 模型与 API 中填写。",
                    }),
                S.map((p) => {
                    const v = a.lane === p.key,
                        O = l[p.key];
                    return e.jsxs(
                        "div",
                        {
                            className: `cx-lane ${v ? "on" : ""}`,
                            children: [
                                e.jsxs("button", {
                                    className: "btn-plain cx-lane-h",
                                    onClick: () => n({ lane: p.key, model: "" }),
                                    children: [
                                        e.jsxs("span", {
                                            className: "cx-pick-t",
                                            children: [
                                                e.jsx("b", { children: p.label }),
                                                e.jsxs("small", { children: ["默认模型 ", p.model || "—"] }),
                                            ],
                                        }),
                                        v && e.jsx(H, { size: 16 }),
                                    ],
                                }),
                                v &&
                                    e.jsxs("div", {
                                        className: "cx-lane-b",
                                        children: [
                                            e.jsxs("div", {
                                                className: "cx-lane-row",
                                                children: [
                                                    e.jsx("input", {
                                                        value: u,
                                                        onChange: (y) => b(y.target.value),
                                                        placeholder: a.model || "输入模型名称",
                                                    }),
                                                    e.jsx("button", {
                                                        className: "btn-plain",
                                                        disabled: !u.trim(),
                                                        onClick: () => {
                                                            (n({ model: u.trim() }), b(""), s());
                                                        },
                                                        children: "使用",
                                                    }),
                                                    e.jsx("button", {
                                                        className: "btn-plain",
                                                        onClick: () => A(p.key),
                                                        children: d === p.key ? "获取中…" : "获取列表",
                                                    }),
                                                ],
                                            }),
                                            O &&
                                                e.jsxs("div", {
                                                    className: "cx-models",
                                                    children: [
                                                        O.length === 0 &&
                                                            d !== p.key &&
                                                            e.jsx("div", {
                                                                className: "cx-pick-empty",
                                                                children: "没有取到模型。",
                                                            }),
                                                        O.map((y) =>
                                                            e.jsx(
                                                                "button",
                                                                {
                                                                    className: `btn-plain ${(a.model || p.model) === y ? "on" : ""}`,
                                                                    onClick: () => {
                                                                        (n({ model: y }), s());
                                                                    },
                                                                    children: y,
                                                                },
                                                                y,
                                                            ),
                                                        ),
                                                    ],
                                                }),
                                        ],
                                    }),
                            ],
                        },
                        p.key,
                    );
                }),
            ],
        }),
    });
}
export { jt as default };
