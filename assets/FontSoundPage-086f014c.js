import { r as x, j as e } from "./vendor-react-3a46a5d3.js";
import {
    u as E,
    a as y,
    kN as R,
    dA as g,
    kP as d,
    ca as z,
    nh as P,
    ni as j,
    nj as A,
    nk as O,
    p as F,
    nl as T,
} from "./app-2c902988.js";
import { b0 as B } from "./vendor-icons-e63d3118.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-leaflet-f4c2a8c5.js";
const L = [
        [0, "默认"],
        [90, "90%"],
        [110, "110%"],
        [120, "120%"],
        [135, "135%"],
    ],
    M = [
        [0, "默认"],
        [300, "细"],
        [400, "常规"],
        [500, "中等"],
        [600, "粗"],
    ],
    U = [
        ["default", "默认"],
        ["custom", "自定义"],
        ["off", "关闭"],
    ];
function C({ kind: h, title: p, conf: l, setConf: a }) {
    const c = y(),
        o = x.useRef(null),
        u = l.mode || "default",
        f = async (n) => {
            if (!n) return;
            if (!/^audio\//.test(n.type) && !/\.(mp3|m4a|aac|wav|caf|ogg)$/i.test(n.name || "")) {
                c("请选择音频文件（mp3、m4a、wav 等）", "error");
                return;
            }
            if (n.size > 3 * 1024 * 1024) {
                c("音频文件请小于 3MB", "error");
                return;
            }
            const i = await F(n, { kind: "audio" });
            if (!i) {
                c("导入失败", "error");
                return;
            }
            (a({ mode: "custom", ref: i, name: n.name || "自定义音频" }), c("已导入"));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(j, {
                label: p,
                value: u,
                options: U,
                right:
                    u !== "off"
                        ? e.jsxs("button", {
                              className: "mini-btn btn-plain",
                              onClick: () => A(h, { ...l, mode: u }),
                              children: [e.jsx(B, { size: 12, fill: "currentColor" }), "试听"],
                          })
                        : null,
                onChange: (n) => {
                    var i;
                    if (n === "custom" && !l.ref) {
                        (i = o.current) == null || i.click();
                        return;
                    }
                    a({ ...l, mode: n });
                },
            }),
            u === "custom" &&
                e.jsx(d, {
                    title: "音频文件",
                    value: l.name || "未选择",
                    onClick: () => {
                        var n;
                        return (n = o.current) == null ? void 0 : n.click();
                    },
                }),
            e.jsx("input", {
                ref: o,
                type: "file",
                accept: "audio/*,.mp3,.m4a,.aac,.wav,.caf",
                onChange: (n) => {
                    var m;
                    const i = (m = n.target.files) == null ? void 0 : m[0];
                    ((n.target.value = ""), f(i));
                },
                style: { position: "absolute", width: 0, height: 0, opacity: 0, pointerEvents: "none" },
            }),
        ],
    });
}
function Z({ onClose: h }) {
    var v, S;
    const { state: p, patch: l } = E(),
        a = y(),
        c = x.useRef(null),
        o = ((v = p.ui) == null ? void 0 : v.appFont) || {},
        u = ((S = p.ui) == null ? void 0 : S.sounds) || {},
        f = (t) =>
            l((s) => {
                var r;
                return {
                    ui: { ...s.ui, appFont: { ...(((r = s.ui) == null ? void 0 : r.appFont) || {}), ...t } },
                };
            }),
        n = (t, s) =>
            l((r) => {
                var b;
                return {
                    ui: { ...r.ui, sounds: { ...(((b = r.ui) == null ? void 0 : b.sounds) || {}), [t]: s } },
                };
            }),
        i = async (t) => {
            if (!t) return;
            if (!O(t)) {
                a("请选择字体文件（ttf、otf、woff、woff2）", "error");
                return;
            }
            if (t.size > 25 * 1024 * 1024) {
                a("字体文件请小于 25MB", "error");
                return;
            }
            const s = await F(t, { kind: "font" });
            if (!s) {
                a("导入失败", "error");
                return;
            }
            (f({ ref: s, name: (t.name || "自定义字体").replace(/\.(ttf|otf|woff2?)$/i, "") }), a("已应用"));
        },
        [m, w] = x.useState(!1),
        k = /^https?:\/\//i.test(String(o.ref || "")),
        N = async (t) => {
            const s = String(t || "").trim();
            if (!/^https?:\/\/\S+$/i.test(s)) {
                a("请填写以 http:// 或 https:// 开头的链接", "error");
                return;
            }
            a("正在加载字体…");
            const r = await T(s);
            if (!r.ok) {
                a(r.why, "error");
                return;
            }
            (f({ ref: s, name: r.name }), a("已应用"));
        };
    return e.jsx(R, {
        title: "字体与声音",
        onClose: h,
        children: e.jsxs("div", {
            className: "pb-8",
            children: [
                e.jsxs("div", {
                    className: "font-preview",
                    children: [
                        e.jsx("small", { children: "预览" }),
                        e.jsx("div", {
                            style: {
                                fontSize: `${17 * ((Number(o.size) || 100) / 100)}px`,
                                fontWeight: Number(o.weight) || void 0,
                                lineHeight: 1.55,
                            },
                            children: "今天也想和你说说话。Aa 0123",
                        }),
                    ],
                }),
                e.jsxs(g, {
                    header: "字体",
                    footer: "支持 ttf、otf、woff、woff2 格式的文件，或填写字体文件、字体样式表的链接。字体文件仅保存在本设备；使用链接时每次打开从该链接加载。字体中缺少的字符使用系统字体显示。",
                    children: [
                        e.jsx(d, {
                            title: "字体",
                            value: o.ref ? o.name || "自定义字体" : "系统字体",
                            onClick: () => {
                                var t;
                                return (t = c.current) == null ? void 0 : t.click();
                            },
                        }),
                        e.jsx(d, { title: "字体链接", value: k ? "已使用" : "未填写", onClick: () => w(!0) }),
                        o.ref &&
                            e.jsx(d, {
                                title: "恢复系统字体",
                                danger: !0,
                                chevron: !1,
                                onClick: () => f({ ref: "", name: "" }),
                            }),
                        e.jsx(z, {
                            open: m,
                            onClose: () => w(!1),
                            title: "字体链接",
                            label: "链接",
                            value: k ? o.ref : "",
                            placeholder: "https://",
                            maxLength: 600,
                            confirmLabel: "使用",
                            note: "填写字体文件（ttf、otf、woff、woff2）或字体样式表的链接。",
                            onSave: N,
                        }),
                        e.jsx("input", {
                            ref: c,
                            type: "file",
                            accept: P,
                            onChange: (t) => {
                                var r;
                                const s = (r = t.target.files) == null ? void 0 : r[0];
                                ((t.target.value = ""), i(s));
                            },
                            style: {
                                position: "absolute",
                                width: 0,
                                height: 0,
                                opacity: 0,
                                pointerEvents: "none",
                            },
                        }),
                    ],
                }),
                e.jsxs(g, {
                    header: "文字",
                    footer: "文字大小作用于聊天消息、聊天输入框、聊天列表和朋友圈正文。正文粗细不影响标题与按钮。",
                    children: [
                        e.jsx(j, {
                            label: "文字大小",
                            value: Number(o.size) || 0,
                            options: L,
                            onChange: (t) => f({ size: t }),
                        }),
                        e.jsx(j, {
                            label: "正文粗细",
                            value: Number(o.weight) || 0,
                            options: M,
                            onChange: (t) => f({ weight: t }),
                        }),
                    ],
                }),
                e.jsxs(g, {
                    header: "声音",
                    footer: "消息提示音在 App 打开且未停留在该聊天时播放。锁屏和后台的系统通知使用系统提示音，不受此处设置影响。音频文件请小于 3MB。",
                    children: [
                        e.jsx(C, {
                            kind: "msg",
                            title: "消息提示音",
                            conf: u.msg || {},
                            setConf: (t) => n("msg", t),
                        }),
                        e.jsx(C, {
                            kind: "call",
                            title: "来电铃声",
                            conf: u.call || {},
                            setConf: (t) => n("call", t),
                        }),
                    ],
                }),
            ],
        }),
    });
}
export { Z as default };
