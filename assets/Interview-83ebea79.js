import { j as s, R as bs, r as Z } from "./vendor-react-3a46a5d3.js";
import {
    ef as qs,
    bm as U,
    eg as Es,
    cQ as J,
    bv as cs,
    bB as Is,
    eh as As,
    bo as B,
    bu as Ts,
    cB as gs,
    bE as fs,
    bz as ws,
    dR as Ds,
    ei as Fs,
    bw as Rs,
    aJ as Ms,
    e1 as Os,
    bD as Zs,
    d9 as Ps,
} from "./vendor-icons-e63d3118.js";
import {
    l as O,
    u as zs,
    a as ys,
    g1 as ks,
    m_ as Us,
    m$ as Ls,
    bi as Bs,
    n0 as Ys,
    n1 as _s,
    n2 as Hs,
    n3 as Ws,
    cX as Js,
    bt as ds,
    f as os,
    n4 as Vs,
    bI as is,
    b5 as Gs,
    b$ as G,
    ay as Ks,
    c as Qs,
    aq as Xs,
    ar as se,
    n5 as ee,
    n6 as ie,
    n7 as ne,
    n8 as ae,
    n9 as le,
    na as ce,
} from "./app-2c902988.js";
const q = (e) => String(e).padStart(2, "0"),
    Ss = "日一二三四五六",
    te = (e) => {
        const i = new Date(e || Date.now());
        return `${i.getFullYear()}年${i.getMonth() + 1}月${i.getDate()}日 星期${Ss[i.getDay()]}`;
    },
    H = (e) => `${q(Math.floor(e / 60))}:${q(Math.floor(e % 60))}`,
    re = (e) => {
        let i = 18;
        return e.map((a) => {
            const n = i;
            return (
                (i += Math.round((String(a.question).length + String(a.answer).length) / 4.5) + 6),
                { at: n, len: i - n }
            );
        });
    };
function Q({ s: e, onChange: i }) {
    return s.jsxs("div", {
        className: "ivx-edit",
        children: [
            s.jsxs("div", {
                className: "ivx-edit-tags",
                children: [
                    s.jsx("input", {
                        value: e.tagEn,
                        onChange: (a) => i({ tagEn: a.target.value.toUpperCase().slice(0, 24) }),
                        placeholder: "TAG",
                    }),
                    s.jsx("input", {
                        value: e.tagZh,
                        onChange: (a) => i({ tagZh: a.target.value.slice(0, 12) }),
                        placeholder: "栏目",
                    }),
                ],
            }),
            s.jsx("textarea", {
                rows: 2,
                value: e.question,
                onChange: (a) => i({ question: a.target.value }),
                placeholder: "提问",
            }),
            s.jsx("textarea", {
                rows: 6,
                value: e.answer,
                onChange: (a) => i({ answer: a.target.value }),
                placeholder: "回答",
            }),
            s.jsx("input", {
                value: e.pull,
                onChange: (a) => i({ pull: a.target.value.slice(0, 60) }),
                placeholder: "引语（从回答里摘一句）",
            }),
        ],
    });
}
function X({ s: e, editing: i, busy: a, onChange: n, onRewrite: o, onDrop: r, cls: d }) {
    const h = e.adopted === !1;
    return s.jsxs("div", {
        className: `${d}-tools`,
        children: [
            s.jsxs("button", {
                className: `${d}-adopt btn-plain ${h ? "" : "on"}`,
                onClick: () => n({ adopted: h }),
                children: [
                    s.jsx("span", {
                        className: "box",
                        children: !h && s.jsx(B, { size: 10, weight: "bold" }),
                    }),
                    h ? "不采用" : "采用为人设参考",
                ],
            }),
            i &&
                s.jsxs(s.Fragment, {
                    children: [
                        s.jsx("button", {
                            className: `${d}-tool btn-plain`,
                            onClick: o,
                            disabled: a,
                            "aria-label": "重写这一栏",
                            children: s.jsx(gs, { size: 14, weight: "bold", className: a ? "mz-spin" : "" }),
                        }),
                        s.jsx("button", {
                            className: `${d}-tool btn-plain`,
                            onClick: r,
                            "aria-label": "删除这一栏",
                            children: s.jsx(fs, { size: 14 }),
                        }),
                    ],
                }),
        ],
    });
}
function ss({ ctx: e, cls: i }) {
    const { adding: a, setAdding: n, busySec: o, task: r, rewrite: d } = e;
    return s.jsx("div", {
        className: `${i}-add`,
        children: a
            ? s.jsxs("div", {
                  className: `${i}-add-form`,
                  children: [
                      s.jsx("input", {
                          autoFocus: !0,
                          value: a.tagZh,
                          onChange: (h) => n({ tagZh: h.target.value.slice(0, 12) }),
                          placeholder: "栏目名",
                      }),
                      s.jsx("button", {
                          className: "btn-plain",
                          onClick: () => (o ? r.stop() : d(null)),
                          children: o === "new" ? "撰写中…" : "撰写",
                      }),
                      s.jsx("button", {
                          className: "btn-plain",
                          onClick: () => n(null),
                          "aria-label": "取消",
                          children: s.jsx(ws, { size: 15 }),
                      }),
                  ],
              })
            : s.jsxs("button", {
                  className: `${i}-add-btn btn-plain`,
                  onClick: () => n({ tagZh: "" }),
                  children: [s.jsx(cs, { size: 14, weight: "bold" }), "增加一个栏目"],
              }),
    });
}
const hs = "一二三四五六七八九十",
    de = {
        "，": "︐",
        ",": "︐",
        "。": "︒",
        "、": "︑",
        "：": "︓",
        ":": "︓",
        "；": "︔",
        "！": "︕",
        "？": "︖",
        "「": "﹁",
        "」": "﹂",
        "『": "﹃",
        "』": "﹄",
        "（": "︵",
        "）": "︶",
        "(": "︵",
        ")": "︶",
        "—": "︱",
        "…": "︙",
        "·": "・",
    };
function ms({ text: e, per: i = 12, className: a = "" }) {
    const n = Array.from(String(e || ""))
            .filter((r) => r.trim())
            .map((r) => de[r] || r),
        o = [];
    for (let r = 0; r < n.length; r += i) o.push(n.slice(r, r + i));
    return s.jsx("span", {
        className: `ivp-v ${a}`,
        "aria-label": e,
        role: "text",
        children: o.map((r, d) =>
            s.jsx(
                "span",
                {
                    className: "ivp-vcol",
                    "aria-hidden": "true",
                    children: r.map((h, c) => s.jsx("i", { children: h }, c)),
                },
                d,
            ),
        ),
    });
}
const oe = (e) => (e < 10 ? hs[e] : e < 20 ? `十${hs[e - 10] || ""}` : String(e + 1)),
    ns = (e) => {
        const i = new Date(e || Date.now());
        return `${i.getFullYear()}.${q(i.getMonth() + 1)}.${q(i.getDate())}`;
    },
    he = [
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
    js = (e) => {
        const i = new Date(e || Date.now());
        return `${he[i.getMonth()]} ${i.getDate()}, ${i.getFullYear()}`;
    },
    ps = ["column", "journal", "pict", "memo"],
    as = 5,
    $s = (e) => ({
        fontSize: Math.round(
            Math.max(26, Math.min(64, 300 / (Math.max(1, Array.from(String(e || "")).length) * 0.68))),
        ),
    });
function ls({ seed: e = "" }) {
    const i = Array.from(`${e}LITOT${e}`).map((a, n) => 1 + ((a.charCodeAt(0) * (n + 3)) % 3));
    return s.jsx("span", {
        className: "ivp-barcode",
        "aria-hidden": "true",
        children: i.map((a, n) => s.jsx("i", { style: { width: a, marginRight: (n % 3) + 1 } }, n)),
    });
}
function W({ mast: e, issueNo: i, page: a }) {
    return s.jsx("footer", {
        className: "ivp-folio",
        children: s.jsxs("div", {
            children: [
                s.jsxs("span", { children: [e, " / n.", i] }),
                s.jsx("span", { className: "ivp-pg", children: q(a) }),
            ],
        }),
    });
}
function L({ cover: e, name: i, className: a = "", pos: n = "50% 30%", zoom: o = 1 }) {
    return s.jsx("figure", {
        className: `ivp-photo ${e ? "" : "bare"} ${a}`,
        children: e
            ? s.jsx(O, {
                  src: e,
                  alt: "",
                  style: {
                      objectPosition: n,
                      transform: o !== 1 ? `scale(${o})` : void 0,
                      transformOrigin: n,
                  },
              })
            : s.jsx("span", { children: i.slice(0, 1) }),
    });
}
function K({ s: e, editing: i, patchSec: a, children: n }) {
    return i ? s.jsx(Q, { s: e, onChange: (o) => a(e.id, o) }) : n;
}
function me({ s: e, i, total: a, ctx: n }) {
    var v;
    const {
            name: o,
            cover: r,
            issueNo: d,
            mast: h,
            editing: c,
            busySec: m,
            patchSec: l,
            rewrite: w,
            dropSec: k,
        } = n,
        S = ps[i % ps.length],
        $ = as + i,
        E = s.jsx(X, {
            s: e,
            cls: "ivp",
            editing: c,
            busy: m === e.id,
            onChange: (y) => l(e.id, y),
            onRewrite: () => w(e),
            onDrop: () => k(e.id),
        }),
        j = s.jsxs("p", { className: "ivp-q", children: [s.jsx("span", { children: "Q" }), e.question] }),
        z = s.jsx("p", { className: "ivp-a", children: e.answer });
    let u;
    return (
        S === "column"
            ? (u = s.jsxs(s.Fragment, {
                  children: [
                      s.jsxs("div", {
                          className: "ivp-col-k",
                          children: [
                              s.jsx("span", { children: e.tagZh }),
                              s.jsx("em", { children: e.tagEn }),
                          ],
                      }),
                      s.jsxs("h3", {
                          className: "ivp-col-h",
                          children: [
                              e.tagZh,
                              e.pull
                                  ? s.jsxs(s.Fragment, {
                                        children: [
                                            s.jsx("b", { children: "：" }),
                                            s.jsx("span", { className: "ivp-pull", children: e.pull }),
                                        ],
                                    })
                                  : null,
                          ],
                      }),
                      s.jsx(K, {
                          s: e,
                          editing: c,
                          patchSec: l,
                          children: s.jsxs("div", { className: "ivp-col-body", children: [j, z] }),
                      }),
                  ],
              }))
            : S === "journal"
              ? (u = s.jsxs(s.Fragment, {
                    children: [
                        s.jsxs("div", {
                            className: "ivp-jr-top",
                            children: [
                                s.jsx("span", { children: e.tagEn }),
                                s.jsxs("span", { children: [h, s.jsx("br", {}), "journal"] }),
                            ],
                        }),
                        s.jsxs("div", {
                            className: "ivp-jr-grid",
                            children: [
                                s.jsxs("div", {
                                    className: "ivp-jr-pic",
                                    children: [
                                        s.jsx(L, {
                                            cover: r,
                                            name: o,
                                            pos: `${30 + ((i * 17) % 40)}% 40%`,
                                            zoom: 1.3,
                                        }),
                                        s.jsx("small", { children: o }),
                                    ],
                                }),
                                s.jsxs("div", {
                                    className: "ivp-jr-main",
                                    children: [
                                        s.jsxs("em", {
                                            className: "ivp-jr-pg",
                                            children: ["Page ", q(i + 1), " of ", q(a)],
                                        }),
                                        s.jsx("h3", { className: "ivp-jr-h", children: e.tagZh }),
                                        s.jsxs(K, {
                                            s: e,
                                            editing: c,
                                            patchSec: l,
                                            children: [
                                                j,
                                                z,
                                                e.pull &&
                                                    s.jsx("blockquote", {
                                                        className: "ivp-pull",
                                                        children: e.pull,
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }))
              : S === "pict"
                ? (u = s.jsxs(s.Fragment, {
                      children: [
                          s.jsxs("div", {
                              className: "ivp-pc-shot",
                              children: [s.jsx("i", {}), h, s.jsx("br", {}), "n.", d],
                          }),
                          s.jsxs("div", {
                              className: "ivp-pc-grid",
                              children: [
                                  s.jsxs("div", {
                                      className: "ivp-pc-side",
                                      children: [
                                          s.jsx("div", {
                                              className: "ivp-pc-t",
                                              children: s.jsx("span", { children: e.tagEn || e.tagZh }),
                                          }),
                                          s.jsxs("div", {
                                              className: "ivp-pc-meta",
                                              children: [
                                                  s.jsx("span", {
                                                      children: ns((v = n.iv) == null ? void 0 : v.createdAt),
                                                  }),
                                                  s.jsx("span", { children: e.tagZh }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  s.jsxs("div", {
                                      className: "ivp-pc-pics",
                                      children: [
                                          s.jsx(L, {
                                              cover: r,
                                              name: o,
                                              pos: `${20 + ((i * 23) % 60)}% 20%`,
                                              zoom: 1.6,
                                          }),
                                          s.jsx(L, {
                                              cover: r,
                                              name: o,
                                              pos: `${70 - ((i * 13) % 50)}% 80%`,
                                              zoom: 1.9,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          s.jsxs("div", {
                              className: "ivp-pc-sq",
                              "aria-hidden": "true",
                              children: [s.jsx("i", {}), s.jsx("i", {}), s.jsx("i", {})],
                          }),
                          s.jsxs(K, {
                              s: e,
                              editing: c,
                              patchSec: l,
                              children: [
                                  e.pull && s.jsx("p", { className: "ivp-pull", children: e.pull }),
                                  j,
                                  z,
                              ],
                          }),
                      ],
                  }))
                : (u = s.jsxs(s.Fragment, {
                      children: [
                          s.jsxs("div", {
                              className: "ivp-mm-top",
                              children: [
                                  s.jsx("h3", { children: e.tagEn || e.tagZh }),
                                  s.jsxs("span", { children: ["No.", q(i + 1)] }),
                                  s.jsx("span", { children: e.tagZh }),
                                  s.jsx("i", {}),
                              ],
                          }),
                          s.jsxs(K, {
                              s: e,
                              editing: c,
                              patchSec: l,
                              children: [
                                  s.jsxs("div", {
                                      className: "ivp-mm-grid",
                                      children: [
                                          j,
                                          s.jsx("div", {
                                              className: "ivp-mm-tone",
                                              children: e.pull
                                                  ? s.jsx("p", { className: "ivp-pull", children: e.pull })
                                                  : s.jsx("span", { children: e.tagZh }),
                                          }),
                                      ],
                                  }),
                                  s.jsxs("div", {
                                      className: "ivp-mm-arrow",
                                      children: [s.jsx("b", { children: ">>" }), s.jsx("i", {})],
                                  }),
                                  z,
                              ],
                          }),
                      ],
                  })),
        s.jsxs("article", {
            className: `ivp-sheet ivp-sec ivp-sec-${S} ${e.adopted === !1 ? "off" : ""}`,
            children: [
                s.jsxs("div", { className: "ivp-sec-main", children: [u, E] }),
                s.jsx("div", {
                    className: "ivp-sec-side",
                    "aria-hidden": "true",
                    children: s.jsxs("span", { className: "ivp-sec-no", children: ["其", oe(i)] }),
                }),
                s.jsx(W, { mast: h, issueNo: d, page: $ }),
            ],
        })
    );
}
function je({ ctx: e }) {
    var y;
    const {
            iv: i,
            ivs: a,
            name: n,
            cover: o,
            issueNo: r,
            mast: d,
            editing: h,
            task: c,
            planIssue: m,
            apply: l,
            adopted: w,
            char: k,
            pickIssue: S,
            busySec: $,
        } = e,
        E = new Date((i == null ? void 0 : i.createdAt) || Date.now()),
        j = (i == null ? void 0 : i.headline) || `${n}，另一面`,
        z = s.jsxs("header", {
            className: "ivp-top",
            children: [
                s.jsx("span", { className: "ivp-top-l", children: d }),
                s.jsxs("span", {
                    className: "ivp-top-r",
                    children: [
                        "n.",
                        r,
                        s.jsx("i", {}),
                        ns(i == null ? void 0 : i.createdAt),
                        s.jsx("i", {}),
                        "周",
                        Ss[E.getDay()],
                    ],
                }),
            ],
        }),
        u = s.jsxs("section", {
            className: "ivp-sheet ivp-cover",
            children: [
                s.jsxs("div", {
                    className: "ivp-cover-head",
                    children: [
                        s.jsx("h1", { className: "ivp-mast", style: $s(d), children: d }),
                        s.jsxs("div", {
                            className: "ivp-cover-no",
                            children: [
                                s.jsxs("b", { children: ["n.", r] }),
                                s.jsxs("small", {
                                    children: [
                                        js(i == null ? void 0 : i.createdAt),
                                        s.jsx("br", {}),
                                        "Weekend Feature",
                                        s.jsx("br", {}),
                                        "周末副刊 · 人物专访",
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                s.jsxs("div", {
                    className: "ivp-cover-lines",
                    children: [
                        s.jsx("strong", { className: "ivp-cover-name", children: n }),
                        s.jsx("span", { className: "ivp-cover-hl", children: j }),
                        i &&
                            s.jsx("ul", {
                                children: i.sections
                                    .slice(0, 4)
                                    .map((f) =>
                                        s.jsxs(
                                            "li",
                                            {
                                                children: [
                                                    s.jsx("b", { children: f.tagZh }),
                                                    s.jsx("em", { children: f.tagEn }),
                                                ],
                                            },
                                            f.id,
                                        ),
                                    ),
                            }),
                    ],
                }),
                s.jsx(L, { cover: o, name: n, className: "ivp-cover-photo", pos: "50% 25%" }),
                s.jsxs("div", {
                    className: "ivp-cover-foot",
                    children: [
                        s.jsx("span", { className: "ivp-seal", children: "专访" }),
                        s.jsx(ls, { seed: r }),
                    ],
                }),
            ],
        }),
        v = s.jsxs("section", {
            className: "ivp-sheet ivp-open",
            children: [
                s.jsx("div", {
                    className: "ivp-open-k",
                    children: s.jsxs("span", {
                        children: [
                            d,
                            " Feature",
                            s.jsx("br", {}),
                            s.jsxs("em", { children: ["A Conversation with ", n] }),
                        ],
                    }),
                }),
                s.jsxs("div", {
                    className: "ivp-open-grid",
                    children: [
                        s.jsxs("div", {
                            className: "ivp-open-l",
                            children: [
                                s.jsx("div", {
                                    className: "ivp-open-pic",
                                    children: s.jsx(L, { cover: o, name: n, pos: "35% 60%", zoom: 1.35 }),
                                }),
                                s.jsx("p", {
                                    className: "ivp-stand",
                                    children:
                                        (i == null ? void 0 : i.standfirst) ||
                                        "编辑部将围绕基本资料之外的若干切面，与他慢慢聊一期。",
                                }),
                            ],
                        }),
                        s.jsxs("div", {
                            className: "ivp-open-r",
                            children: [
                                s.jsx("h2", {
                                    className: "ivp-vt",
                                    children: s.jsx(ms, { text: j, per: 9 }),
                                }),
                                s.jsx("span", { className: "ivp-open-rule" }),
                                s.jsx("span", {
                                    className: "ivp-open-en",
                                    children: s.jsxs("em", {
                                        children: ["Interview · ", js(i == null ? void 0 : i.createdAt)],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                s.jsx("div", { className: "ivp-dots", "aria-hidden": "true", children: "····" }),
                s.jsx(W, { mast: d, issueNo: r, page: 2 }),
            ],
        });
    return i
        ? s.jsxs("div", {
              className: "ivp",
              children: [
                  z,
                  u,
                  v,
                  s.jsxs("section", {
                      className: "ivp-sheet ivp-portrait",
                      children: [
                          s.jsxs("div", {
                              className: "ivp-portrait-img",
                              children: [
                                  s.jsx(L, { cover: o, name: n, pos: "50% 30%" }),
                                  s.jsx("span", { className: "ivp-portrait-name", children: n }),
                              ],
                          }),
                          s.jsxs("p", { className: "ivp-portrait-cap", children: ["— 本期人物　", n, " —"] }),
                          s.jsx(W, { mast: d, issueNo: r, page: 3 }),
                      ],
                  }),
                  s.jsxs("section", {
                      className: "ivp-sheet ivp-profile",
                      children: [
                          s.jsx("div", {
                              className: "ivp-profile-tabs",
                              children: i.sections
                                  .slice(0, 3)
                                  .map((f) => s.jsx("span", { children: f.tagEn || f.tagZh }, f.id)),
                          }),
                          s.jsxs("div", {
                              className: "ivp-profile-grid",
                              children: [
                                  s.jsx("div", {
                                      className: "ivp-profile-name",
                                      children: s.jsx("h2", {
                                          className: "ivp-vt",
                                          children: s.jsx(ms, { text: n, per: 6 }),
                                      }),
                                  }),
                                  s.jsxs("div", {
                                      className: "ivp-profile-sub",
                                      children: [
                                          s.jsx("b", { children: "人物简介" }),
                                          s.jsx("em", { children: "Character Profile" }),
                                          s.jsxs("span", {
                                              children: [i.sections.length, " 个栏目 · 第 ", r, " 期"],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          s.jsxs("nav", {
                              className: "ivp-guide",
                              children: [
                                  s.jsxs("div", {
                                      className: "ivp-guide-h",
                                      children: [
                                          s.jsx("span", { children: "Contents" }),
                                          s.jsx("b", { children: "目次" }),
                                      ],
                                  }),
                                  s.jsx("ol", {
                                      children: i.sections.map((f, A) =>
                                          s.jsxs(
                                              "li",
                                              {
                                                  className: f.adopted === !1 ? "off" : "",
                                                  children: [
                                                      s.jsx("span", { className: "n", children: q(as + A) }),
                                                      s.jsxs("span", {
                                                          className: "t",
                                                          children: [
                                                              f.tagZh,
                                                              s.jsx("em", { children: f.tagEn }),
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              f.id,
                                          ),
                                      ),
                                  }),
                              ],
                          }),
                          s.jsx(W, { mast: d, issueNo: r, page: 4 }),
                      ],
                  }),
                  i.sections.map((f, A) => s.jsx(me, { s: f, i: A, total: i.sections.length, ctx: e }, f.id)),
                  h && s.jsx(ss, { ctx: e, cls: "ivp" }),
                  s.jsxs("section", {
                      className: "ivp-sheet ivp-note",
                      children: [
                          s.jsxs("div", {
                              className: "ivp-note-big",
                              children: [
                                  "Editor’s",
                                  s.jsx("br", {}),
                                  "Note",
                                  s.jsx("br", {}),
                                  "Issue ",
                                  r,
                                  s.jsx("br", {}),
                                  ns(i.createdAt),
                                  s.jsx("br", {}),
                                  w,
                                  " of ",
                                  i.sections.length,
                                  s.jsx("br", {}),
                                  "Adopted",
                              ],
                          }),
                          s.jsx("div", {
                              className: "ivp-guide-h",
                              children: s.jsx("span", { children: "编后记" }),
                          }),
                          s.jsxs("p", {
                              children: [
                                  "本期共 ",
                                  i.sections.length,
                                  " 个栏目，采用 ",
                                  w,
                                  " 段。采用的段落会合成一份人设参考，与人设资料同级生效，只通过他的选择与行为体现，不会被复述。",
                                  ((y = k.dossier) == null ? void 0 : y.sourceId) === i.id
                                      ? "本期正在生效。"
                                      : "",
                              ],
                          }),
                          s.jsx("button", {
                              className: "ivp-cta btn-plain",
                              onClick: l,
                              children: "应用为人设参考",
                          }),
                          s.jsx("button", {
                              className: `ivp-ghost btn-plain ${c.busy && !$ ? "busy" : ""}`,
                              onClick: c.busy && !$ ? c.stop : m,
                              children: c.busy && !$ ? "编辑部排版中…" : "策划下一期",
                          }),
                          s.jsx(W, { mast: d, issueNo: r, page: as + i.sections.length }),
                      ],
                  }),
                  a.length > 1 &&
                      s.jsxs("section", {
                          className: "ivp-archive",
                          children: [
                              s.jsxs("div", {
                                  className: "ivp-guide-h",
                                  children: [
                                      s.jsx("span", { children: "Back Issues" }),
                                      s.jsx("b", { children: "往期" }),
                                  ],
                              }),
                              s.jsx("div", {
                                  className: "ivp-books",
                                  children: a
                                      .slice()
                                      .reverse()
                                      .map((f) =>
                                          s.jsxs(
                                              "button",
                                              {
                                                  className: `ivp-book btn-plain ${f.id === i.id ? "on" : ""}`,
                                                  onClick: () => S(f.id),
                                                  children: [
                                                      s.jsx("span", { className: "mast", children: d }),
                                                      s.jsxs("span", {
                                                          className: "no",
                                                          children: ["n.", q(f.issue)],
                                                      }),
                                                      s.jsx("span", {
                                                          className: "hl",
                                                          children: f.headline,
                                                      }),
                                                      f.appliedAt
                                                          ? s.jsx("span", {
                                                                className: "use",
                                                                children: "生效中",
                                                            })
                                                          : null,
                                                      s.jsx(ls, { seed: q(f.issue) }),
                                                  ],
                                              },
                                              f.id,
                                          ),
                                      ),
                              }),
                          ],
                      }),
                  s.jsx("footer", {
                      className: "ivp-foot",
                      children: s.jsxs("span", { children: [d, "　n.", r, "　", te(i.createdAt)] }),
                  }),
              ],
          })
        : s.jsxs("div", {
              className: "ivp",
              children: [
                  z,
                  u,
                  v,
                  s.jsx("div", {
                      className: "ivp-empty",
                      children: s.jsx("button", {
                          className: `ivp-cta btn-plain ${c.busy ? "busy" : ""}`,
                          onClick: c.busy ? c.stop : m,
                          children: c.busy ? "编辑部排版中…" : "策划第一期",
                      }),
                  }),
              ],
          });
}
function pe({ ctx: e }) {
    var A;
    const {
            iv: i,
            ivs: a,
            name: n,
            cover: o,
            issueNo: r,
            mast: d,
            editing: h,
            busySec: c,
            task: m,
            planIssue: l,
            apply: w,
            adopted: k,
            char: S,
            patchSec: $,
            rewrite: E,
            dropSec: j,
            pickIssue: z,
            scrollTo: u,
        } = e,
        v = i ? re(i.sections) : [],
        y = v.length ? v[v.length - 1].at + v[v.length - 1].len + 20 : 0,
        f = s.jsxs("section", {
            className: "ivr-now",
            children: [
                s.jsxs("div", { className: "ivr-onair", children: [s.jsx("i", {}), "ON AIR"] }),
                s.jsx("div", {
                    className: `ivr-disc ${m.busy ? "spin" : ""}`,
                    children: s.jsx("span", {
                        className: "ivr-disc-in",
                        children: o ? s.jsx(O, { src: o, alt: "" }) : s.jsx("b", { children: n.slice(0, 1) }),
                    }),
                }),
                s.jsx("div", { className: "ivr-show", children: d }),
                s.jsxs("div", { className: "ivr-freq", children: ["FM 88.7 · 第 ", r, " 期 · 00:00—02:00"] }),
                s.jsx("h2", {
                    className: "ivr-title",
                    children: (i == null ? void 0 : i.headline) || `今晚的嘉宾：${n}`,
                }),
                s.jsx("p", {
                    className: "ivr-desc",
                    children:
                        (i == null ? void 0 : i.standfirst) ||
                        "节目尚未开播。编辑部会围绕基本资料之外的若干话题，与他聊一期。",
                }),
                i &&
                    s.jsxs(s.Fragment, {
                        children: [
                            s.jsx("div", { className: "ivr-bar", children: s.jsx("i", {}) }),
                            s.jsxs("div", {
                                className: "ivr-time",
                                children: [
                                    s.jsx("span", { children: H(Math.round(y * 0.36)) }),
                                    s.jsxs("span", { children: ["-", H(Math.round(y * 0.64))] }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "ivr-ctrl",
                                children: [
                                    s.jsx("button", {
                                        className: "btn-plain",
                                        onClick: () => u(".ivr-seg"),
                                        "aria-label": "上一段",
                                        children: s.jsx(qs, { size: 20, weight: "fill" }),
                                    }),
                                    s.jsx("button", {
                                        className: "btn-plain big",
                                        onClick: () => u(".ivr-tx"),
                                        "aria-label": "收听文字稿",
                                        children: s.jsx(U, { size: 22, weight: "fill" }),
                                    }),
                                    s.jsx("button", {
                                        className: "btn-plain",
                                        onClick: () => u(".ivr-note"),
                                        "aria-label": "下一段",
                                        children: s.jsx(Es, { size: 20, weight: "fill" }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                !i &&
                    s.jsx("button", {
                        className: `ivr-cta btn-plain ${m.busy ? "busy" : ""}`,
                        onClick: m.busy ? m.stop : l,
                        children: m.busy
                            ? s.jsxs(s.Fragment, {
                                  children: [s.jsx(J, { size: 14, weight: "fill" }), "准备节目中…"],
                              })
                            : "开始第一期",
                    }),
            ],
        });
    return i
        ? s.jsxs("div", {
              className: "ivr",
              children: [
                  f,
                  s.jsxs("section", {
                      className: "ivr-list",
                      children: [
                          s.jsxs("h3", {
                              children: [
                                  "本期节目单",
                                  s.jsxs("span", { children: [i.sections.length, " 段 · ", H(y)] }),
                              ],
                          }),
                          i.sections.map((p, I) =>
                              s.jsxs(
                                  "button",
                                  {
                                      className: `ivr-track btn-plain ${p.adopted === !1 ? "off" : ""}`,
                                      onClick: () => u(`#ivr-seg-${p.id}`),
                                      children: [
                                          s.jsx("span", { className: "no", children: q(I + 1) }),
                                          s.jsxs("span", {
                                              className: "t",
                                              children: [
                                                  s.jsx("b", { children: p.tagZh }),
                                                  s.jsx("small", { children: p.tagEn }),
                                              ],
                                          }),
                                          s.jsx("time", { children: H(v[I].len) }),
                                      ],
                                  },
                                  p.id,
                              ),
                          ),
                      ],
                  }),
                  s.jsxs("section", {
                      className: "ivr-tx",
                      children: [
                          s.jsx("h3", { children: "文字稿" }),
                          i.sections.map((p, I) =>
                              s.jsxs(
                                  "div",
                                  {
                                      id: `ivr-seg-${p.id}`,
                                      className: `ivr-seg ${p.adopted === !1 ? "off" : ""}`,
                                      children: [
                                          s.jsxs("div", {
                                              className: "ivr-seg-h",
                                              children: [
                                                  s.jsx("time", { children: H(v[I].at) }),
                                                  s.jsx("b", { children: p.tagZh }),
                                                  s.jsx("em", { children: p.tagEn }),
                                              ],
                                          }),
                                          h
                                              ? s.jsx(Q, { s: p, onChange: (T) => $(p.id, T) })
                                              : s.jsxs(s.Fragment, {
                                                    children: [
                                                        s.jsxs("div", {
                                                            className: "ivr-line host",
                                                            children: [
                                                                s.jsx("span", {
                                                                    className: "who",
                                                                    children: "主持人",
                                                                }),
                                                                s.jsx("p", { children: p.question }),
                                                            ],
                                                        }),
                                                        s.jsxs("div", {
                                                            className: "ivr-line guest",
                                                            children: [
                                                                s.jsx("span", {
                                                                    className: "who",
                                                                    children: n,
                                                                }),
                                                                s.jsx("p", { children: p.answer }),
                                                            ],
                                                        }),
                                                        p.pull &&
                                                            s.jsxs("div", {
                                                                className: "ivr-quote",
                                                                children: [
                                                                    s.jsx("span", {
                                                                        className: "ivr-wave",
                                                                        "aria-hidden": "true",
                                                                    }),
                                                                    s.jsx("p", { children: p.pull }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                          s.jsx(X, {
                                              s: p,
                                              cls: "ivr",
                                              editing: h,
                                              busy: c === p.id,
                                              onChange: (T) => $(p.id, T),
                                              onRewrite: () => E(p),
                                              onDrop: () => j(p.id),
                                          }),
                                      ],
                                  },
                                  p.id,
                              ),
                          ),
                          h && s.jsx(ss, { ctx: e, cls: "ivr" }),
                      ],
                  }),
                  s.jsxs("section", {
                      className: "ivr-note",
                      children: [
                          s.jsx("div", { className: "ivr-note-k", children: "节目尾声" }),
                          s.jsxs("h3", { children: ["采用 ", k, " / ", i.sections.length, " 段"] }),
                          s.jsxs("p", {
                              children: [
                                  "采用的段落会合成一份人设参考，与人设资料同级生效，只通过他的选择与行为体现，不会被复述。",
                                  ((A = S.dossier) == null ? void 0 : A.sourceId) === i.id
                                      ? "本期正在生效。"
                                      : "",
                              ],
                          }),
                          s.jsx("button", {
                              className: "ivr-cta btn-plain",
                              onClick: w,
                              children: "应用为人设参考",
                          }),
                          s.jsx("button", {
                              className: `ivr-ghost btn-plain ${m.busy && !c ? "busy" : ""}`,
                              onClick: m.busy && !c ? m.stop : l,
                              children: m.busy && !c ? "准备中…" : "录下一期",
                          }),
                      ],
                  }),
                  a.length > 1 &&
                      s.jsxs("section", {
                          className: "ivr-archive",
                          children: [
                              s.jsx("h3", { children: "往期节目" }),
                              a
                                  .slice()
                                  .reverse()
                                  .map((p) =>
                                      s.jsxs(
                                          "button",
                                          {
                                              className: `ivr-arch btn-plain ${p.id === i.id ? "on" : ""}`,
                                              onClick: () => z(p.id),
                                              children: [
                                                  s.jsx("span", {
                                                      className: "pl",
                                                      children: s.jsx(U, { size: 11, weight: "fill" }),
                                                  }),
                                                  s.jsxs("span", {
                                                      className: "t",
                                                      children: [
                                                          s.jsx("b", { children: p.headline }),
                                                          s.jsxs("small", {
                                                              children: [
                                                                  "第 ",
                                                                  q(p.issue),
                                                                  " 期",
                                                                  p.appliedAt ? " · 生效中" : "",
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          },
                                          p.id,
                                      ),
                                  ),
                          ],
                      }),
              ],
          })
        : s.jsx("div", { className: "ivr", children: f });
}
const xs = (e) => Math.max(3, Math.round((String(e.question).length + String(e.answer).length) / 9)),
    vs = ["A", "K", "M", "J", "S", "Y", "L", "R", "H", "N", "C", "W"],
    xe = (e) => ({
        objectPosition: `${(e * 37 + 20) % 100}% ${(e * 23 + 15) % 85}%`,
        transform: `scale(${(1.35 + ((e * 7) % 6) * 0.15).toFixed(2)})`,
    }),
    ve = (e, i) => 12 + ((String(e.answer).length * 7 + i * 31) % 240);
function ue({ s: e, i, ctx: a }) {
    const { name: n, cover: o, editing: r, busySec: d, patchSec: h, rewrite: c, dropSec: m } = a,
        l = i % 3 === 0;
    return s.jsxs("article", {
        id: `ivn-r-${e.id}`,
        className: `ivn-review ${e.adopted === !1 ? "off" : ""}`,
        children: [
            s.jsxs("div", {
                className: "ivn-viewer",
                children: [
                    s.jsx("span", { className: "av", "data-n": i % 4, children: vs[i % vs.length] }),
                    s.jsxs("span", {
                        className: "who",
                        children: [
                            s.jsx("b", { children: "匿名观众" }),
                            s.jsxs("em", { children: ["看到第 ", i + 1, " 集 · ", e.tagEn || "REVIEW"] }),
                        ],
                    }),
                    s.jsxs("span", {
                        className: `ivn-rate ${l ? "top" : ""}`,
                        children: [s.jsx(Ds, { size: 12, weight: l ? "fill" : "bold" }), l ? "超赞" : "赞"],
                    }),
                ],
            }),
            r
                ? s.jsx(Q, { s: e, onChange: (w) => h(e.id, w) })
                : s.jsxs(s.Fragment, {
                      children: [
                          s.jsx("h4", { className: "ivn-rev-t", children: e.tagZh }),
                          s.jsx("p", { className: "ivn-rev-q", children: e.question }),
                          s.jsxs("div", {
                              className: "ivn-reply",
                              children: [
                                  s.jsxs("div", {
                                      className: "by",
                                      children: [
                                          s.jsx("span", {
                                              className: "ava",
                                              children: o ? s.jsx(O, { src: o, alt: "" }) : n.slice(0, 1),
                                          }),
                                          s.jsx("b", { children: n }),
                                          s.jsx("span", { className: "ivn-badge", children: "主演回复" }),
                                      ],
                                  }),
                                  s.jsx("p", { children: e.answer }),
                              ],
                          }),
                          e.pull &&
                              s.jsxs("blockquote", {
                                  className: "ivn-hl",
                                  children: [
                                      s.jsxs("span", {
                                          children: ["高光台词 · S", q(Number(a.issueNo)), "E", q(i + 1)],
                                      }),
                                      e.pull,
                                  ],
                              }),
                      ],
                  }),
            s.jsxs("div", {
                className: "ivn-rev-foot",
                children: [
                    s.jsxs("span", { className: "ivn-useful", children: [ve(e, i), " 人觉得有用"] }),
                    s.jsx(X, {
                        s: e,
                        cls: "ivn",
                        editing: r,
                        busy: d === e.id,
                        onChange: (w) => h(e.id, w),
                        onRewrite: () => c(e),
                        onDrop: () => m(e.id),
                    }),
                ],
            }),
        ],
    });
}
function Ne({ ctx: e }) {
    var R;
    const {
            iv: i,
            ivs: a,
            name: n,
            cover: o,
            issueNo: r,
            mast: d,
            editing: h,
            task: c,
            planIssue: m,
            apply: l,
            adopted: w,
            char: k,
            pickIssue: S,
            scrollTo: $,
            busySec: E,
        } = e,
        [j, z] = bs.useState("eps"),
        u = h ? "rev" : j,
        v = (i == null ? void 0 : i.sections) || [],
        y = v.length ? Math.round(82 + 17 * (w / v.length)) : 98,
        f = new Date((i == null ? void 0 : i.createdAt) || Date.now()).getFullYear(),
        A = ((Number(r) * 7) % 9) + 1,
        p = (b, C) => {
            (z(b), setTimeout(() => $(C || ".ivn-tabs"), 30));
        },
        I = v
            .slice(0, 3)
            .map((b) => b.tagZh)
            .filter(Boolean),
        T = s.jsxs("section", {
            className: `ivn-hero ${o ? "" : "bare"}`,
            children: [
                o
                    ? s.jsx(O, { src: o, alt: "", className: "ivn-hero-img" })
                    : s.jsx("span", { className: "ivn-hero-mono", children: n.slice(0, 1) }),
                s.jsx("span", { className: "ivn-hero-shade" }),
                s.jsx("div", { className: "ivn-brand", children: d }),
                s.jsxs("div", {
                    className: "ivn-hero-foot",
                    children: [
                        s.jsxs("div", { className: "ivn-kind", children: [s.jsx("i", {}), "剧集"] }),
                        s.jsx("h1", { className: "ivn-title", children: n }),
                        (i == null ? void 0 : i.headline) &&
                            s.jsx("p", { className: "ivn-tagline", children: i.headline }),
                        I.length > 0 &&
                            s.jsx("div", {
                                className: "ivn-genres",
                                children: I.map((b, C) => s.jsx("span", { children: b }, C)),
                            }),
                    ],
                }),
            ],
        }),
        F = c.busy && !E,
        N = s.jsxs("section", {
            className: "ivn-info",
            children: [
                s.jsxs("div", {
                    className: "ivn-meta",
                    children: [
                        s.jsxs("span", { className: "ivn-match", children: [y, "% 匹配"] }),
                        s.jsx("span", { children: f }),
                        s.jsx("span", { className: "ivn-badge", children: "16+" }),
                        s.jsxs("span", { children: ["第 ", Number(r), " 季"] }),
                        s.jsx("span", { className: "ivn-badge", children: "HD" }),
                        s.jsx("span", { className: "ivn-badge", children: "5.1" }),
                    ],
                }),
                i &&
                    s.jsxs("div", {
                        className: "ivn-top",
                        children: [
                            s.jsxs("span", {
                                className: "ivn-top10",
                                children: [s.jsx("b", { children: "TOP" }), s.jsx("b", { children: "10" })],
                            }),
                            "今日剧集排行第 ",
                            A,
                            " 名",
                        ],
                    }),
                i
                    ? s.jsxs(s.Fragment, {
                          children: [
                              s.jsxs("button", {
                                  className: "ivn-play btn-plain",
                                  onClick: () => p("rev"),
                                  children: [s.jsx(U, { size: 17, weight: "fill" }), "观看评论"],
                              }),
                              s.jsx("button", {
                                  className: `ivn-ghost btn-plain ${F ? "busy" : ""}`,
                                  onClick: F ? c.stop : m,
                                  children: F
                                      ? s.jsxs(s.Fragment, {
                                            children: [
                                                s.jsx(J, { size: 14, weight: "fill" }),
                                                "下一季制作中…",
                                            ],
                                        })
                                      : s.jsxs(s.Fragment, {
                                            children: [s.jsx(cs, { size: 16, weight: "bold" }), "制作下一季"],
                                        }),
                              }),
                          ],
                      })
                    : s.jsx("button", {
                          className: `ivn-play btn-plain ${c.busy ? "busy" : ""}`,
                          onClick: c.busy ? c.stop : m,
                          children: c.busy
                              ? s.jsxs(s.Fragment, {
                                    children: [s.jsx(J, { size: 14, weight: "fill" }), "制作中…"],
                                })
                              : s.jsxs(s.Fragment, {
                                    children: [s.jsx(U, { size: 17, weight: "fill" }), "上线第一季"],
                                }),
                      }),
                s.jsx("p", {
                    className: `ivn-syn ${i ? "" : "solo"}`,
                    children:
                        (i == null ? void 0 : i.standfirst) ||
                        "编辑部会围绕基本资料之外的若干侧面制作一季，每一集附一条观众评论与他的回复。",
                }),
                s.jsxs("div", {
                    className: "ivn-credits",
                    children: [
                        s.jsxs("p", { children: [s.jsx("span", { children: "主演：" }), n] }),
                        s.jsxs("p", { children: [s.jsx("span", { children: "出品：" }), d, " 编辑部"] }),
                    ],
                }),
                i &&
                    s.jsxs("nav", {
                        className: "ivn-icons",
                        children: [
                            s.jsxs("button", {
                                className: "btn-plain",
                                onClick: () => p("eps"),
                                children: [s.jsx(Is, { size: 22 }), s.jsx("span", { children: "选集" })],
                            }),
                            s.jsxs("button", {
                                className: "btn-plain",
                                onClick: () => p("rev"),
                                children: [
                                    s.jsx(As, { size: 22 }),
                                    s.jsxs("span", { children: ["评论 ", v.length] }),
                                ],
                            }),
                            s.jsxs("button", {
                                className: "btn-plain",
                                onClick: () => $(".ivn-note"),
                                children: [
                                    s.jsx(B, { size: 22 }),
                                    s.jsxs("span", { children: ["采用 ", w, "/", v.length] }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    if (!i) return s.jsxs("div", { className: "ivn", children: [T, N] });
    const M = [["eps", "选集"], ["rev", "观众评论"], ...(a.length > 1 ? [["seasons", "往季"]] : [])];
    return s.jsxs("div", {
        className: "ivn",
        children: [
            T,
            N,
            s.jsx("div", {
                className: "ivn-tabs",
                role: "tablist",
                children: M.map(([b, C]) =>
                    s.jsx(
                        "button",
                        {
                            role: "tab",
                            "aria-selected": u === b,
                            className: `btn-plain ${u === b ? "on" : ""}`,
                            onClick: () => z(b),
                            children: C,
                        },
                        b,
                    ),
                ),
            }),
            u === "eps" &&
                s.jsxs("section", {
                    className: "ivn-eps",
                    children: [
                        s.jsxs("div", {
                            className: "ivn-eps-h",
                            children: [
                                s.jsxs("b", { children: ["第 ", Number(r), " 季"] }),
                                s.jsxs("span", {
                                    children: [
                                        v.length,
                                        " 集 · 共 ",
                                        v.reduce((b, C) => b + xs(C), 0),
                                        " 分钟",
                                    ],
                                }),
                            ],
                        }),
                        v.map((b, C) =>
                            s.jsxs(
                                "button",
                                {
                                    className: `ivn-ep btn-plain ${b.adopted === !1 ? "off" : ""}`,
                                    onClick: () => p("rev", `#ivn-r-${b.id}`),
                                    children: [
                                        s.jsxs("span", {
                                            className: "ivn-ep-row",
                                            children: [
                                                s.jsxs("span", {
                                                    className: "ivn-ep-thumb",
                                                    children: [
                                                        o
                                                            ? s.jsx(O, { src: o, alt: "", style: xe(C) })
                                                            : s.jsx("b", { children: q(C + 1) }),
                                                        s.jsx("i", {
                                                            className: "pl",
                                                            children: s.jsx(U, { size: 11, weight: "fill" }),
                                                        }),
                                                        s.jsx("i", {
                                                            className: "pg",
                                                            style: { width: `${12 + ((C * 37) % 76)}%` },
                                                        }),
                                                    ],
                                                }),
                                                s.jsxs("span", {
                                                    className: "ivn-ep-t",
                                                    children: [
                                                        s.jsxs("b", { children: [C + 1, ". ", b.tagZh] }),
                                                        s.jsxs("small", { children: [xs(b), " 分钟"] }),
                                                    ],
                                                }),
                                                s.jsx("span", {
                                                    className: "ivn-ep-dl",
                                                    "aria-hidden": "true",
                                                    children: s.jsx(Ts, { size: 19 }),
                                                }),
                                            ],
                                        }),
                                        b.pull &&
                                            s.jsxs("span", {
                                                className: "ivn-ep-d",
                                                children: ["「", b.pull, "」"],
                                            }),
                                    ],
                                },
                                b.id,
                            ),
                        ),
                    ],
                }),
            u === "rev" &&
                s.jsxs("section", {
                    className: "ivn-rev",
                    children: [
                        s.jsxs("div", {
                            className: "ivn-rev-sum",
                            children: [
                                s.jsxs("div", {
                                    children: [
                                        s.jsxs("b", { className: "tn", children: [y, "%"] }),
                                        s.jsx("span", { children: "的观众给出了超赞" }),
                                    ],
                                }),
                                s.jsx("i", { children: s.jsx("b", { style: { width: `${y}%` } }) }),
                            ],
                        }),
                        v.map((b, C) => s.jsx(ue, { s: b, i: C, ctx: e }, b.id)),
                        h && s.jsx(ss, { ctx: e, cls: "ivn" }),
                    ],
                }),
            u === "seasons" &&
                s.jsx("section", {
                    className: "ivn-seasons",
                    children: s.jsx("div", {
                        className: "ivn-row",
                        children: a
                            .slice()
                            .reverse()
                            .map((b) =>
                                s.jsxs(
                                    "button",
                                    {
                                        className: `ivn-poster btn-plain ${b.id === i.id ? "on" : ""}`,
                                        onClick: () => {
                                            (S(b.id), z("eps"));
                                        },
                                        children: [
                                            o
                                                ? s.jsx(O, { src: o, alt: "" })
                                                : s.jsx("span", {
                                                      className: "mono",
                                                      children: n.slice(0, 1),
                                                  }),
                                            s.jsx("span", { className: "sh" }),
                                            s.jsx("span", { className: "br", children: d }),
                                            s.jsxs("span", {
                                                className: "t",
                                                children: [
                                                    s.jsxs("b", { children: ["第 ", b.issue, " 季"] }),
                                                    s.jsx("small", { children: b.headline }),
                                                ],
                                            }),
                                            b.appliedAt
                                                ? s.jsx("span", { className: "use", children: "生效中" })
                                                : null,
                                        ],
                                    },
                                    b.id,
                                ),
                            ),
                    }),
                }),
            s.jsxs("section", {
                className: "ivn-note",
                children: [
                    s.jsxs("div", { className: "ivn-kind", children: [s.jsx("i", {}), "片尾字幕"] }),
                    s.jsxs("dl", {
                        className: "ivn-roll",
                        children: [
                            s.jsx("dt", { children: "主演" }),
                            s.jsx("dd", { children: n }),
                            s.jsx("dt", { children: "出品" }),
                            s.jsx("dd", { children: d }),
                            s.jsx("dt", { children: "本季" }),
                            s.jsxs("dd", { children: [v.length, " 集"] }),
                            s.jsx("dt", { children: "采用" }),
                            s.jsxs("dd", { className: "tn", children: [w, " / ", v.length] }),
                        ],
                    }),
                    s.jsxs("p", {
                        children: [
                            "采用的段落会合成一份人设参考，与人设资料同级生效，只通过他的选择与行为体现，不会被复述。",
                            ((R = k.dossier) == null ? void 0 : R.sourceId) === i.id ? "本季正在生效。" : "",
                        ],
                    }),
                    s.jsxs("button", {
                        className: "ivn-play btn-plain",
                        onClick: l,
                        children: [s.jsx(B, { size: 16, weight: "bold" }), "应用为人设参考"],
                    }),
                ],
            }),
        ],
    });
}
function be(e, i) {
    const a = String(e || ""),
        n = i ? a.indexOf(i) : -1;
    return n < 0
        ? a
        : s.jsxs(s.Fragment, {
              children: [
                  a.slice(0, n),
                  s.jsx("mark", { className: "ivq-pull", children: i }),
                  a.slice(n + i.length),
              ],
          });
}
const ge = (e) => {
    const i = new Date(e);
    return `${q(i.getMonth() + 1)}.${q(i.getDate())}`;
};
function fe({ ctx: e }) {
    var F;
    const {
            iv: i,
            ivs: a,
            name: n,
            cover: o,
            issueNo: r,
            mast: d,
            editing: h,
            busySec: c,
            task: m,
            planIssue: l,
            apply: w,
            adopted: k,
            char: S,
            patchSec: $,
            rewrite: E,
            dropSec: j,
            pickIssue: z,
        } = e,
        [u, v] = bs.useState(!1),
        y = (i == null ? void 0 : i.sections) || [],
        f = u && !h ? y.filter((N) => N.adopted !== !1) : y,
        A =
            String(d || "askme")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "") || "askme",
        p = (N) =>
            s.jsx("span", {
                className: N,
                children: o ? s.jsx(O, { src: o, alt: "" }) : s.jsx("b", { children: n.slice(0, 1) }),
            }),
        I = s.jsxs("section", {
            className: "ivq-head",
            children: [
                p("ivq-ava"),
                s.jsx("div", { className: "ivq-name", children: n }),
                s.jsxs("div", { className: "ivq-mast", children: ["@", A, " · N°", r] }),
                i &&
                    s.jsxs("div", {
                        className: "ivq-nums",
                        children: [
                            s.jsxs("span", {
                                children: [s.jsx("b", { className: "tn", children: y.length }), "回答"],
                            }),
                            s.jsx("i", {}),
                            s.jsxs("span", {
                                children: [s.jsx("b", { className: "tn", children: k }), "采用"],
                            }),
                            s.jsx("i", {}),
                            s.jsxs("span", {
                                children: [s.jsx("b", { className: "tn", children: a.length }), "期"],
                            }),
                        ],
                    }),
                s.jsx("h2", {
                    className: "ivq-title",
                    children: (i == null ? void 0 : i.headline) || `${n}的提问箱`,
                }),
                s.jsx("p", {
                    className: "ivq-desc",
                    children:
                        (i == null ? void 0 : i.standfirst) ||
                        "提问箱尚未开放。编辑部会收集若干匿名问题，由他挑选作答。",
                }),
            ],
        }),
        T = s.jsxs("section", {
            className: "ivq-ask",
            "aria-hidden": "true",
            children: [
                s.jsxs("span", { className: "ivq-ask-in", children: ["向", n, "匿名提问…"] }),
                s.jsxs("span", {
                    className: "ivq-ask-foot",
                    children: [
                        s.jsxs("span", {
                            children: [
                                s.jsx(Fs, { size: 12, weight: "bold" }),
                                "匿名提问，对方不会知道你是谁",
                            ],
                        }),
                        s.jsx("i", { children: s.jsx(Rs, { size: 14, weight: "bold" }) }),
                    ],
                }),
            ],
        });
    return i
        ? s.jsxs("div", {
              className: "ivq",
              children: [
                  I,
                  T,
                  s.jsxs("div", {
                      className: "ivq-stat",
                      children: [
                          s.jsxs("span", {
                              className: "ivq-chips",
                              children: [
                                  s.jsxs("button", {
                                      className: `btn-plain ${u ? "" : "on"}`,
                                      onClick: () => v(!1),
                                      children: [
                                          "全部 ",
                                          s.jsx("em", { className: "tn", children: y.length }),
                                      ],
                                  }),
                                  s.jsxs("button", {
                                      className: `btn-plain ${u ? "on" : ""}`,
                                      onClick: () => v(!0),
                                      children: ["已采用 ", s.jsx("em", { className: "tn", children: k })],
                                  }),
                              ],
                          }),
                          s.jsx("span", { className: "ivq-sort", children: "最新" }),
                      ],
                  }),
                  f.map((N) => {
                      const M = y.indexOf(N);
                      return s.jsxs(
                          "article",
                          {
                              className: `ivq-card ${N.adopted === !1 ? "off" : ""}`,
                              style: { animationDelay: `${Math.min(M, 6) * 40}ms` },
                              children: [
                                  h
                                      ? s.jsx(Q, { s: N, onChange: (R) => $(N.id, R) })
                                      : s.jsxs(s.Fragment, {
                                            children: [
                                                s.jsxs("div", {
                                                    className: "ivq-q",
                                                    children: [
                                                        s.jsx("span", {
                                                            className: "ivq-qmark",
                                                            "aria-hidden": "true",
                                                            children: "“",
                                                        }),
                                                        s.jsx("p", {
                                                            className: "ivq-qtext",
                                                            children: N.question,
                                                        }),
                                                        s.jsxs("div", {
                                                            className: "ivq-anon",
                                                            children: [
                                                                s.jsxs("span", {
                                                                    children: [s.jsx("i", {}), "ANONYMOUS"],
                                                                }),
                                                                s.jsx("time", {
                                                                    className: "tn",
                                                                    children: ge(
                                                                        (i.createdAt || Date.now()) -
                                                                            (y.length - M) * 864e5,
                                                                    ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                s.jsxs("div", {
                                                    className: "ivq-ans",
                                                    children: [
                                                        s.jsxs("div", {
                                                            className: "ivq-ans-by",
                                                            children: [
                                                                p("ivq-ava sm"),
                                                                s.jsx("b", { children: n }),
                                                                s.jsx("span", { children: "回答" }),
                                                                N.tagZh &&
                                                                    s.jsxs("span", {
                                                                        className: "ivq-tag",
                                                                        children: ["#", N.tagZh],
                                                                    }),
                                                            ],
                                                        }),
                                                        s.jsx("p", { children: be(N.answer, N.pull) }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                  s.jsx(X, {
                                      s: N,
                                      cls: "ivq",
                                      editing: h,
                                      busy: c === N.id,
                                      onChange: (R) => $(N.id, R),
                                      onRewrite: () => E(N),
                                      onDrop: () => j(N.id),
                                  }),
                              ],
                          },
                          N.id,
                      );
                  }),
                  u && !f.length && s.jsx("p", { className: "ivq-none", children: "还没有采用的回答。" }),
                  h && s.jsx(ss, { ctx: e, cls: "ivq" }),
                  s.jsxs("section", {
                      className: "ivq-note",
                      children: [
                          s.jsx("span", { className: "ivq-note-k", children: "ADOPTED" }),
                          s.jsxs("h3", {
                              className: "tn",
                              children: [k, s.jsxs("small", { children: [" / ", y.length] })],
                          }),
                          s.jsxs("p", {
                              children: [
                                  "采用的回答会合成一份人设参考，与人设资料同级生效，只通过他的选择与行为体现，不会被复述。",
                                  ((F = S.dossier) == null ? void 0 : F.sourceId) === i.id
                                      ? "本期正在生效。"
                                      : "",
                              ],
                          }),
                          s.jsx("button", {
                              className: "ivq-cta btn-plain",
                              onClick: w,
                              children: "应用为人设参考",
                          }),
                          s.jsx("button", {
                              className: `ivq-ghost btn-plain ${m.busy && !c ? "busy" : ""}`,
                              onClick: m.busy && !c ? m.stop : l,
                              children: m.busy && !c ? "收集问题中…" : "开放下一期",
                          }),
                      ],
                  }),
                  a.length > 1 &&
                      s.jsxs("section", {
                          className: "ivq-past",
                          children: [
                              s.jsx("h3", { children: "往期提问箱" }),
                              a
                                  .slice()
                                  .reverse()
                                  .map((N) =>
                                      s.jsxs(
                                          "button",
                                          {
                                              className: `ivq-past-row btn-plain ${N.id === i.id ? "on" : ""}`,
                                              onClick: () => z(N.id),
                                              children: [
                                                  s.jsxs("span", {
                                                      className: "no",
                                                      children: ["N°", q(N.issue)],
                                                  }),
                                                  s.jsx("span", {
                                                      className: "t",
                                                      children: N.headline || `第 ${N.issue} 期`,
                                                  }),
                                                  s.jsx("span", {
                                                      className: "n",
                                                      children: N.appliedAt
                                                          ? "生效中"
                                                          : `${(N.sections || []).length} 问`,
                                                  }),
                                              ],
                                          },
                                          N.id,
                                      ),
                                  ),
                          ],
                      }),
                  s.jsxs("footer", {
                      className: "ivq-sign",
                      children: [String(d || "ASK ME").toUpperCase(), " · N°", r],
                  }),
              ],
          })
        : s.jsxs("div", {
              className: "ivq",
              children: [
                  I,
                  T,
                  s.jsx("div", {
                      className: "ivq-empty",
                      children: s.jsx("button", {
                          className: `ivq-cta btn-plain ${m.busy ? "busy" : ""}`,
                          onClick: m.busy ? m.stop : l,
                          children: m.busy
                              ? s.jsxs(s.Fragment, {
                                    children: [s.jsx(J, { size: 13, weight: "fill" }), "收集问题中…"],
                                })
                              : "开放提问箱",
                      }),
                  }),
              ],
          });
}
function we({ layout: e, mast: i, name: a = "LiToT" }) {
    return e === "newspaper"
        ? s.jsx("div", {
              className: "ivp ivp-thumb",
              children: s.jsxs("section", {
                  className: "ivp-sheet ivp-cover",
                  children: [
                      s.jsxs("div", {
                          className: "ivp-cover-head",
                          children: [
                              s.jsx("h1", {
                                  className: "ivp-mast",
                                  style: $s(i || "WEEKEND"),
                                  children: i || "WEEKEND",
                              }),
                              s.jsx("div", {
                                  className: "ivp-cover-no",
                                  children: s.jsx("b", { children: "n.01" }),
                              }),
                          ],
                      }),
                      s.jsx("div", {
                          className: "ivp-cover-lines",
                          children: s.jsx("strong", { className: "ivp-cover-name", children: a }),
                      }),
                      s.jsx("figure", {
                          className: "ivp-photo bare ivp-cover-photo",
                          children: s.jsx("span", { children: a.slice(0, 1) }),
                      }),
                      s.jsxs("div", {
                          className: "ivp-cover-foot",
                          children: [
                              s.jsx("span", { className: "ivp-seal", children: "专访" }),
                              s.jsx(ls, { seed: "01" }),
                          ],
                      }),
                  ],
              }),
          })
        : e === "radio"
          ? s.jsx("div", {
                className: "ivr ivr-thumb",
                children: s.jsxs("section", {
                    className: "ivr-now",
                    children: [
                        s.jsxs("div", { className: "ivr-onair", children: [s.jsx("i", {}), "ON AIR"] }),
                        s.jsx("div", {
                            className: "ivr-disc",
                            children: s.jsx("span", {
                                className: "ivr-disc-in",
                                children: s.jsx("b", { children: a.slice(0, 1) }),
                            }),
                        }),
                        s.jsx("div", { className: "ivr-show", children: i || "LATE NIGHT" }),
                        s.jsx("div", { className: "ivr-freq", children: "FM 88.7" }),
                        s.jsx("div", { className: "ivr-bar", children: s.jsx("i", {}) }),
                    ],
                }),
            })
          : e === "netflix"
            ? s.jsxs("div", {
                  className: "ivn ivn-thumb",
                  children: [
                      s.jsxs("section", {
                          className: "ivn-hero bare",
                          children: [
                              s.jsx("span", { className: "ivn-hero-shade" }),
                              s.jsx("div", { className: "ivn-brand", children: i || "LITOFLIX" }),
                              s.jsxs("div", {
                                  className: "ivn-hero-foot",
                                  children: [
                                      s.jsxs("div", {
                                          className: "ivn-kind",
                                          children: [s.jsx("i", {}), "剧集"],
                                      }),
                                      s.jsx("h1", { className: "ivn-title", children: a }),
                                      s.jsxs("div", {
                                          className: "ivn-genres",
                                          children: [
                                              s.jsx("span", { children: "剧情" }),
                                              s.jsx("span", { children: "日常" }),
                                              s.jsx("span", { children: "独白" }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      s.jsxs("section", {
                          className: "ivn-info",
                          children: [
                              s.jsxs("div", {
                                  className: "ivn-meta",
                                  children: [
                                      s.jsx("span", { className: "ivn-match", children: "98% 匹配" }),
                                      s.jsx("span", { className: "ivn-badge", children: "16+" }),
                                      s.jsx("span", { className: "ivn-badge", children: "HD" }),
                                  ],
                              }),
                              s.jsxs("span", {
                                  className: "ivn-play",
                                  children: [s.jsx(U, { size: 17, weight: "fill" }), "观看评论"],
                              }),
                          ],
                      }),
                  ],
              })
            : e === "qbox"
              ? s.jsxs("div", {
                    className: "ivq ivq-thumb",
                    children: [
                        s.jsxs("section", {
                            className: "ivq-head",
                            children: [
                                s.jsx("span", {
                                    className: "ivq-ava",
                                    children: s.jsx("b", { children: a.slice(0, 1) }),
                                }),
                                s.jsx("div", { className: "ivq-name", children: a }),
                                s.jsxs("div", {
                                    className: "ivq-mast",
                                    children: [
                                        "@",
                                        String(i || "askme")
                                            .toLowerCase()
                                            .replace(/[^a-z0-9]+/g, ""),
                                    ],
                                }),
                            ],
                        }),
                        s.jsx("article", {
                            className: "ivq-card",
                            children: s.jsxs("div", {
                                className: "ivq-q",
                                children: [
                                    s.jsx("span", { className: "ivq-qmark", children: "“" }),
                                    s.jsx("p", { className: "ivq-qtext", children: "最近在听什么？" }),
                                    s.jsx("div", {
                                        className: "ivq-anon",
                                        children: s.jsxs("span", { children: [s.jsx("i", {}), "ANONYMOUS"] }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                })
              : null;
}
function us({ style: e, big: i = !1 }) {
    const a = `mz-${String(e.id || "draft").replace(/[^\w-]/g, "")}`;
    return ["newspaper", "radio", "netflix", "qbox"].includes(e.layout)
        ? s.jsxs("div", {
              className: `mz-root mz-mini mz-layout-${e.layout} ${i ? "big" : ""}`,
              "data-mz": a,
              children: [
                  e.css && s.jsx(is, { css: e.css, scope: `.mz-mini[data-mz="${a}"]`, alias: ".mz-root" }),
                  s.jsx(we, { layout: e.layout, mast: e.mast }),
              ],
          })
        : s.jsxs("div", {
              className: `mz-root mz-mini ${i ? "big" : ""}`,
              "data-mz": a,
              children: [
                  e.css && s.jsx(is, { css: e.css, scope: `.mz-mini[data-mz="${a}"]`, alias: ".mz-root" }),
                  s.jsxs("section", {
                      className: "mz-spread paper",
                      children: [
                          s.jsxs("div", {
                              className: "mz-sp-kick",
                              children: [
                                  s.jsx("span", { children: "01" }),
                                  s.jsx("i", {}),
                                  s.jsx("span", { children: e.mast || "PORTRAIT" }),
                              ],
                          }),
                          s.jsx("h3", { className: "mz-sp-title", children: "日常" }),
                          s.jsxs("div", {
                              className: "mz-q",
                              children: [
                                  s.jsx("span", { className: "mz-q-mark", children: "Q." }),
                                  s.jsx("p", { children: "最近一次让你停下来的是什么？" }),
                              ],
                          }),
                          s.jsxs("div", {
                              className: "mz-a",
                              children: [
                                  s.jsx("span", { className: "mz-a-by", children: "LITOT" }),
                                  s.jsxs("p", {
                                      children: [
                                          s.jsx("span", { className: "mz-drop", children: "回" }),
                                          "答的正文显示在这里，字号、行距与颜色随风格变化。",
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function ze({ open: e, onClose: i }) {
    const { state: a, patch: n } = zs(),
        o = ys(),
        { own: r, all: d, cur: h } = ks(a),
        [c, m] = Z.useState(null),
        l = (j) => r.some((z) => z.id === j),
        w =
            c != null && c.edit
                ? c.edit === "new"
                    ? {
                          name: "我的刊物",
                          mast: "ISSUE",
                          layout: h.layout || "magazine",
                          prompt: "",
                          css: Us(),
                      }
                    : d.find((j) => j.id === c.edit)
                : null,
        k = w ? { ...w, questions: w.questions || Ls } : null,
        S = (j) => {
            const z = ds(j);
            if (!z) {
                o("刊名、提示词与 CSS 至少填写一项", "error");
                return;
            }
            const u = l(c.edit) ? c.edit : os("ivst_");
            (n((v) => ({
                interviewStyle: u,
                interviewStyles: l(c.edit)
                    ? (v.interviewStyles || []).map((y) => (y.id === u ? { ...z, id: u } : y))
                    : [...(v.interviewStyles || []), { ...z, id: u }],
            })),
                m(null),
                o("已保存并启用"));
        },
        $ = () => {
            (n((j) => ({
                interviewStyles: (j.interviewStyles || []).filter((z) => z.id !== c.edit),
                interviewStyle: j.interviewStyle === c.edit ? "" : j.interviewStyle,
            })),
                m(null));
        },
        E =
            c != null && c.edit
                ? c.edit === "new"
                    ? "新建风格"
                    : "编辑风格"
                : c === "io"
                  ? "导入 / 导出"
                  : c === "classes"
                    ? "样式类名参考"
                    : "专访风格";
    return s.jsxs(Bs, {
        open: e,
        onClose: () => (c ? m(null) : i()),
        title: E,
        children: [
            !c &&
                s.jsxs("div", {
                    className: "ivs-pane",
                    children: [
                        s.jsx(Ys, {
                            items: d,
                            value: h.id,
                            onPick: (j) => n({ interviewStyle: j }),
                            render: (j) => s.jsx(us, { style: j }),
                        }),
                        s.jsx(_s, {
                            actions: [
                                { label: "新建", onClick: () => m({ edit: "new" }) },
                                { label: l(h.id) ? "编辑" : "复制修改", onClick: () => m({ edit: h.id }) },
                                { label: "导入导出", onClick: () => m("io") },
                                { label: "类名参考", onClick: () => m("classes") },
                            ],
                        }),
                        s.jsx("div", {
                            className: "dc-ed-hint",
                            children:
                                "风格包括版式、刊名、提示词、问题与美化 CSS。提示词仅影响之后策划与重写的栏目，已有内容不会改变；CSS 仅在专访页生效。",
                        }),
                    ],
                }),
            k &&
                s.jsx(
                    Hs,
                    {
                        preset: k,
                        saveLabel: l(c.edit) ? "保存" : "存为新风格",
                        fields: [
                            {
                                k: "mast",
                                label: "刊名",
                                kind: "line",
                                placeholder: "封面上的西文刊名",
                                max: 16,
                            },
                            {
                                k: "layout",
                                label: "版式",
                                kind: "choice",
                                options: Ws,
                                note: "版式决定整页结构：时装刊是大封面与跨页，周末副刊是竖排标题、装裱人像与目次，电台节目是唱片、节目单与带时间码的文字稿，影评是剧集页、选集与观众评论，提问箱是匿名问题卡与他的回答。",
                            },
                            {
                                k: "prompt",
                                label: "提示词",
                                kind: "text",
                                placeholder: "刊物类型、提问方式与语气（可空）",
                                note: "仅描述刊物与提问方式，请勿写示范问答。回答须与人设一致等规则由系统保留。",
                            },
                            {
                                k: "questions",
                                label: "问题",
                                kind: "text",
                                placeholder: "选题方向与提问范围",
                                note: "决定每期挑选哪些栏目、问哪些方面。只写方向，请勿写具体问题或示范回答。清空后使用默认选题。",
                            },
                            {
                                k: "css",
                                label: "CSS",
                                kind: "code",
                                note: "仅在专访页生效（挂在 .mz-root 下）。类名见「类名参考 → 专访」，该表只增不改。",
                            },
                        ],
                        preview: (j) => s.jsx(us, { style: { ...j, id: `draft${c.edit}` }, big: !0 }),
                        onSave: S,
                        onCancel: () => m(null),
                        onDelete: l(c.edit) ? $ : null,
                    },
                    c.edit,
                ),
            c === "io" &&
                s.jsx(Js, {
                    kind: "interview",
                    toast: o,
                    items: r.map((j) => ({ ...j, desc: j.mast || "专访风格" })),
                    initial: l(h.id) ? [h.id] : [],
                    normalize: ds,
                    onImport: (j) =>
                        n((z) => ({
                            interviewStyles: [
                                ...(z.interviewStyles || []),
                                ...j.map((u) => ({ ...u, id: os("ivst_") })),
                            ],
                        })),
                    emptyHint: "还没有自己的专访风格。可先新建一套，或在下方导入。",
                }),
            c === "classes" && s.jsx(Vs, { initialTab: "interview" }),
        ],
    });
}
const es = Xs(se, "采访"),
    ye = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ],
    P = (e) => String(e).padStart(2, "0"),
    Ns = (e) => {
        const i = new Date(e || Date.now());
        return `${ye[i.getMonth()]} ${i.getFullYear()}`;
    };
function qe({ char: e, onBack: i, look: a = null }) {
    var ts, rs;
    const { state: n, patchChar: o } = zs(),
        r = ys(),
        d = Gs(),
        h = G(e),
        [c, m] = Z.useState(((ts = h[h.length - 1]) == null ? void 0 : ts.id) || null),
        l = h.find((t) => t.id === c) || h[h.length - 1] || null,
        [w, k] = Z.useState(!1),
        [S, $] = Z.useState(null),
        [E, j] = Z.useState(null),
        z = Z.useRef(null),
        u = Ks(e) || Qs(e),
        v = (a == null ? void 0 : a.style) || ks(n).cur,
        y = v.mast || "PORTRAIT",
        [f, A] = Z.useState(!1),
        p = () => {
            const t = es.usableLane(n.api.chat);
            return (
                (t != null && t.baseUrl) || r("先在 API 设置里配好聊天通道", "error"),
                t != null && t.baseUrl ? t : null
            );
        },
        I = (t) => o(e.id, (x) => ({ interviews: G(x).map((g) => (g.id === t.id ? t : g)) })),
        T = (t, x) => I({ ...l, sections: l.sections.map((g) => (g.id === t ? { ...g, ...x } : g)) }),
        F = async () => {
            var D;
            const t = p();
            if (!t) return;
            const x = await d.run(async (_) => {
                const Cs = await es.chat(t, ee(n, e), { signal: _ });
                return ie(Cs.content);
            });
            if ((x != null && x.aborted) || (x != null && x.skipped)) return;
            if (x != null && x.error) {
                r(x.error.message, "error");
                return;
            }
            if (!(x != null && x.value)) {
                r("这一期没排出来，再试一次", "error");
                return;
            }
            const g = ne(e, x.value);
            (o(e.id, (_) => ({ interviews: [...G(_), g] })),
                m(g.id),
                (D = z.current) == null || D.scrollTo({ top: 0 }));
        },
        N = async (t) => {
            const x = p();
            if (!x) return;
            $((t == null ? void 0 : t.id) || "new");
            const g = await d.run(async (D) => {
                const _ = await es.chat(x, ae(n, e, t || E || {}), { signal: D });
                return le(_.content);
            });
            if (($(null), !((g != null && g.aborted) || (g != null && g.skipped)))) {
                if (g != null && g.error) {
                    r(g.error.message, "error");
                    return;
                }
                if (!(g != null && g.value)) {
                    r("没写出来，再试一次", "error");
                    return;
                }
                t
                    ? I({
                          ...l,
                          sections: l.sections.map((D) => (D.id === t.id ? { ...g.value, id: D.id } : D)),
                      })
                    : (I({ ...l, sections: [...l.sections, g.value] }), j(null));
            }
        },
        M = l ? l.sections.filter((t) => t.adopted !== !1).length : 0,
        R = () => {
            const t = ce(l);
            if (!t) {
                r("至少采用一段", "error");
                return;
            }
            const x = Date.now();
            (o(e.id, (g) => ({
                dossier: { text: t, appliedAt: x, sourceId: l.id },
                interviews: G(g).map((D) =>
                    D.id === l.id ? { ...D, appliedAt: x } : { ...D, appliedAt: 0 },
                ),
            })),
                k(!1),
                r(`已应用 ${M} 段为人设参考`));
        },
        b = e.avatar,
        C = P(l ? l.issue : h.length + 1),
        Y = v.layout || "magazine",
        V = {
            iv: l,
            ivs: h,
            name: u,
            cover: b,
            issueNo: C,
            mast: y,
            editing: w,
            busySec: S,
            adding: E,
            setAdding: j,
            task: d,
            planIssue: F,
            apply: R,
            adopted: M,
            char: e,
            patchSec: T,
            rewrite: N,
            dropSec: (t) => I({ ...l, sections: l.sections.filter((x) => x.id !== t) }),
            pickIssue: (t) => {
                var x;
                (m(t), (x = z.current) == null || x.scrollTo({ top: 0, behavior: "smooth" }));
            },
            scrollTo: (t) => {
                var g;
                const x = (g = z.current) == null ? void 0 : g.querySelector(t);
                x && z.current.scrollTo({ top: x.offsetTop - 70, behavior: "smooth" });
            },
        };
    return s.jsxs("div", {
        className: `mz-root mz-page mz-layout-${Y}`,
        "data-style": v.id,
        children: [
            v.css &&
                s.jsx(is, {
                    css: v.css,
                    scope: a ? `.mz-root.mz-page[data-style="${v.id}"]` : ".mz-root.mz-page",
                    alias: ".mz-root",
                }),
            s.jsxs("div", {
                className: "mz-bar",
                children: [
                    s.jsx("button", {
                        className: "mz-btn btn-plain",
                        onClick: i,
                        "aria-label": "返回",
                        children: s.jsx(Ms, { size: 19, weight: "bold" }),
                    }),
                    s.jsxs("span", {
                        className: "mz-bar-r",
                        children: [
                            s.jsxs("button", {
                                className: "mz-btn wide btn-plain",
                                onClick: () => A(!0),
                                "aria-label": "专访风格",
                                children: [s.jsx(Os, { size: 16, weight: "bold" }), "风格"],
                            }),
                            l &&
                                s.jsx("button", {
                                    className: `mz-btn wide btn-plain ${w ? "on" : ""}`,
                                    onClick: () => k((t) => !t),
                                    children: w
                                        ? s.jsxs(s.Fragment, {
                                              children: [s.jsx(B, { size: 15, weight: "bold" }), "完成"],
                                          })
                                        : s.jsxs(s.Fragment, {
                                              children: [s.jsx(Zs, { size: 15, weight: "bold" }), "编辑"],
                                          }),
                                }),
                        ],
                    }),
                ],
            }),
            s.jsx(ze, { open: f, onClose: () => A(!1) }),
            s.jsx("div", {
                className: "mz-scroll",
                ref: z,
                children:
                    Y === "newspaper"
                        ? s.jsx(je, { ctx: V })
                        : Y === "radio"
                          ? s.jsx(pe, { ctx: V })
                          : Y === "netflix"
                            ? s.jsx(Ne, { ctx: V })
                            : Y === "qbox"
                              ? s.jsx(fe, { ctx: V })
                              : s.jsxs(s.Fragment, {
                                    children: [
                                        s.jsxs("section", {
                                            className: `mz-cover ${b ? "" : "bare"}`,
                                            children: [
                                                b
                                                    ? s.jsx(O, { src: b, alt: "", className: "mz-cover-img" })
                                                    : s.jsx("span", {
                                                          className: "mz-cover-mono",
                                                          children: u.slice(0, 1),
                                                      }),
                                                s.jsx("span", { className: "mz-cover-shade" }),
                                                s.jsxs("div", {
                                                    className: "mz-cover-meta",
                                                    children: [
                                                        s.jsxs("span", { children: ["N°", C] }),
                                                        s.jsx("span", {
                                                            children: Ns(l == null ? void 0 : l.createdAt),
                                                        }),
                                                        s.jsx("span", { children: "LITOT EDITION" }),
                                                    ],
                                                }),
                                                s.jsx("h1", { className: "mz-mast", children: y }),
                                                l &&
                                                    s.jsx("ul", {
                                                        className: "mz-coverlines",
                                                        children: l.sections
                                                            .slice(0, 4)
                                                            .map((t) =>
                                                                s.jsxs(
                                                                    "li",
                                                                    {
                                                                        children: [
                                                                            s.jsx("b", { children: t.tagEn }),
                                                                            t.tagZh,
                                                                        ],
                                                                    },
                                                                    t.id,
                                                                ),
                                                            ),
                                                    }),
                                                s.jsxs("div", {
                                                    className: "mz-cover-foot",
                                                    children: [
                                                        s.jsx("span", {
                                                            className: "mz-kick",
                                                            children: "THE INTERVIEW · 独家专访",
                                                        }),
                                                        s.jsx("h2", {
                                                            className: "mz-hl",
                                                            children:
                                                                (l == null ? void 0 : l.headline) ||
                                                                `${u}，另一面`,
                                                        }),
                                                        (l == null ? void 0 : l.standfirst) &&
                                                            s.jsx("p", {
                                                                className: "mz-stand",
                                                                children: l.standfirst,
                                                            }),
                                                        !l &&
                                                            s.jsxs("button", {
                                                                className: `mz-cta btn-plain ${d.busy ? "busy" : ""}`,
                                                                onClick: d.busy ? d.stop : F,
                                                                children: [
                                                                    d.busy
                                                                        ? s.jsx(J, {
                                                                              size: 15,
                                                                              weight: "fill",
                                                                          })
                                                                        : s.jsx(Ps, {
                                                                              size: 15,
                                                                              weight: "fill",
                                                                          }),
                                                                    d.busy ? "编辑部排版中…" : "策划第一期",
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        l &&
                                            s.jsxs(s.Fragment, {
                                                children: [
                                                    s.jsxs("section", {
                                                        className: "mz-contents",
                                                        children: [
                                                            s.jsxs("div", {
                                                                className: "mz-rule-top",
                                                                children: [
                                                                    s.jsx("span", { children: "CONTENTS" }),
                                                                    s.jsx("span", { children: "目录" }),
                                                                ],
                                                            }),
                                                            s.jsxs("div", {
                                                                className: "mz-cn-issue",
                                                                children: [
                                                                    s.jsx("span", {
                                                                        className: "mz-cn-no",
                                                                        children: C,
                                                                    }),
                                                                    s.jsx("p", {
                                                                        children:
                                                                            l.standfirst ||
                                                                            `关于${u}，基本资料之外的${l.sections.length}个切面。`,
                                                                    }),
                                                                ],
                                                            }),
                                                            s.jsx("ol", {
                                                                className: "mz-toc",
                                                                children: l.sections.map((t, x) =>
                                                                    s.jsxs(
                                                                        "li",
                                                                        {
                                                                            className:
                                                                                t.adopted === !1 ? "off" : "",
                                                                            children: [
                                                                                s.jsx("span", {
                                                                                    className: "n",
                                                                                    children: P(x + 1),
                                                                                }),
                                                                                s.jsxs("span", {
                                                                                    className: "t",
                                                                                    children: [
                                                                                        s.jsx("b", {
                                                                                            children: t.tagEn,
                                                                                        }),
                                                                                        s.jsx("em", {
                                                                                            children: t.tagZh,
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                s.jsx("span", {
                                                                                    className: "q",
                                                                                    children: t.question,
                                                                                }),
                                                                            ],
                                                                        },
                                                                        t.id,
                                                                    ),
                                                                ),
                                                            }),
                                                        ],
                                                    }),
                                                    l.sections.map((t, x) =>
                                                        s.jsx(
                                                            ke,
                                                            {
                                                                s: t,
                                                                i: x,
                                                                name: u,
                                                                editing: w,
                                                                busy: S === t.id,
                                                                onChange: (g) => T(t.id, g),
                                                                onRewrite: () => N(t),
                                                                onDrop: () =>
                                                                    I({
                                                                        ...l,
                                                                        sections: l.sections.filter(
                                                                            (g) => g.id !== t.id,
                                                                        ),
                                                                    }),
                                                            },
                                                            t.id,
                                                        ),
                                                    ),
                                                    w &&
                                                        s.jsx("section", {
                                                            className: "mz-add",
                                                            children: E
                                                                ? s.jsxs("div", {
                                                                      className: "mz-add-form",
                                                                      children: [
                                                                          s.jsx("input", {
                                                                              autoFocus: !0,
                                                                              value: E.tagZh,
                                                                              onChange: (t) =>
                                                                                  j({
                                                                                      tagZh: t.target.value.slice(
                                                                                          0,
                                                                                          12,
                                                                                      ),
                                                                                  }),
                                                                              placeholder:
                                                                                  "栏目名，如：冰箱里",
                                                                          }),
                                                                          s.jsx("button", {
                                                                              className:
                                                                                  "mz-cta sm btn-plain",
                                                                              onClick: () =>
                                                                                  S ? d.stop() : N(null),
                                                                              children:
                                                                                  S === "new"
                                                                                      ? "撰写中…"
                                                                                      : "写这一栏",
                                                                          }),
                                                                          s.jsx("button", {
                                                                              className: "mz-x btn-plain",
                                                                              onClick: () => j(null),
                                                                              "aria-label": "取消",
                                                                              children: s.jsx(ws, {
                                                                                  size: 16,
                                                                              }),
                                                                          }),
                                                                      ],
                                                                  })
                                                                : s.jsxs("button", {
                                                                      className: "mz-add-btn btn-plain",
                                                                      onClick: () => j({ tagZh: "" }),
                                                                      children: [
                                                                          s.jsx(cs, {
                                                                              size: 15,
                                                                              weight: "bold",
                                                                          }),
                                                                          "加一个栏目",
                                                                      ],
                                                                  }),
                                                        }),
                                                    s.jsxs("section", {
                                                        className: "mz-colophon",
                                                        children: [
                                                            s.jsx("span", {
                                                                className: "mz-kick light",
                                                                children: "EDITOR'S NOTE",
                                                            }),
                                                            s.jsxs("h3", {
                                                                children: [
                                                                    "采用 ",
                                                                    M,
                                                                    " / ",
                                                                    l.sections.length,
                                                                    " 段",
                                                                ],
                                                            }),
                                                            s.jsxs("p", {
                                                                children: [
                                                                    "勾选的段落会合成一份人设参考，和人设资料同一级别生效；只通过他的选择和行为体现，不会被复述。",
                                                                    ((rs = e.dossier) == null
                                                                        ? void 0
                                                                        : rs.sourceId) === l.id
                                                                        ? " 这一期正在生效。"
                                                                        : "",
                                                                ],
                                                            }),
                                                            s.jsxs("button", {
                                                                className: "mz-cta light btn-plain",
                                                                onClick: R,
                                                                children: [
                                                                    s.jsx(B, { size: 15, weight: "bold" }),
                                                                    "应用为人设参考",
                                                                ],
                                                            }),
                                                            s.jsx("button", {
                                                                className: `mz-ghost btn-plain ${d.busy && !S ? "busy" : ""}`,
                                                                onClick: d.busy && !S ? d.stop : F,
                                                                children:
                                                                    d.busy && !S
                                                                        ? "编辑部排版中…"
                                                                        : "策划下一期",
                                                            }),
                                                            s.jsxs("div", {
                                                                className: "mz-sig",
                                                                children: [
                                                                    y,
                                                                    " · N°",
                                                                    C,
                                                                    " · ",
                                                                    Ns(l.createdAt),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    h.length > 1 &&
                                                        s.jsxs("section", {
                                                            className: "mz-archive",
                                                            children: [
                                                                s.jsxs("div", {
                                                                    className: "mz-rule-top",
                                                                    children: [
                                                                        s.jsx("span", {
                                                                            children: "PAST ISSUES",
                                                                        }),
                                                                        s.jsx("span", { children: "往期" }),
                                                                    ],
                                                                }),
                                                                s.jsx("div", {
                                                                    className: "mz-arch-row",
                                                                    children: h
                                                                        .slice()
                                                                        .reverse()
                                                                        .map((t) =>
                                                                            s.jsxs(
                                                                                "button",
                                                                                {
                                                                                    className: `mz-arch btn-plain ${t.id === l.id ? "on" : ""}`,
                                                                                    onClick: () => {
                                                                                        var x;
                                                                                        (m(t.id),
                                                                                            (x = z.current) ==
                                                                                                null ||
                                                                                                x.scrollTo({
                                                                                                    top: 0,
                                                                                                    behavior:
                                                                                                        "smooth",
                                                                                                }));
                                                                                    },
                                                                                    children: [
                                                                                        s.jsx("span", {
                                                                                            className:
                                                                                                "mz-arch-mast",
                                                                                            children: y,
                                                                                        }),
                                                                                        s.jsxs("span", {
                                                                                            className:
                                                                                                "mz-arch-no",
                                                                                            children: [
                                                                                                "N°",
                                                                                                P(t.issue),
                                                                                            ],
                                                                                        }),
                                                                                        s.jsx("span", {
                                                                                            className:
                                                                                                "mz-arch-hl",
                                                                                            children:
                                                                                                t.headline,
                                                                                        }),
                                                                                        t.appliedAt
                                                                                            ? s.jsx("span", {
                                                                                                  className:
                                                                                                      "mz-arch-on",
                                                                                                  children:
                                                                                                      "IN USE",
                                                                                              })
                                                                                            : null,
                                                                                    ],
                                                                                },
                                                                                t.id,
                                                                            ),
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                    ],
                                }),
            }),
        ],
    });
}
function ke({ s: e, i, name: a, editing: n, busy: o, onChange: r, onRewrite: d, onDrop: h }) {
    const c = ["paper", "ink", "stone"][i % 3],
        m = e.answer.slice(0, 1),
        l = e.answer.slice(1),
        w = e.adopted === !1;
    return s.jsxs("section", {
        className: `mz-spread ${c} ${w ? "off" : ""}`,
        children: [
            s.jsxs("div", {
                className: "mz-sp-kick",
                children: [
                    s.jsx("span", { children: P(i + 1) }),
                    s.jsx("i", {}),
                    s.jsx("span", { children: e.tagEn }),
                ],
            }),
            c === "paper" && s.jsx("div", { className: "mz-sp-no", "aria-hidden": !0, children: P(i + 1) }),
            c === "stone" && s.jsx("div", { className: "mz-sp-vert", "aria-hidden": !0, children: e.tagZh }),
            s.jsxs("div", {
                className: "mz-sp-body",
                children: [
                    n
                        ? s.jsxs("div", {
                              className: "mz-sp-tags",
                              children: [
                                  s.jsx("input", {
                                      value: e.tagEn,
                                      onChange: (k) =>
                                          r({ tagEn: k.target.value.toUpperCase().slice(0, 24) }),
                                      placeholder: "TAG",
                                  }),
                                  s.jsx("input", {
                                      value: e.tagZh,
                                      onChange: (k) => r({ tagZh: k.target.value.slice(0, 12) }),
                                      placeholder: "栏目",
                                  }),
                              ],
                          })
                        : s.jsx("h3", { className: "mz-sp-title", children: e.tagZh }),
                    c === "ink" &&
                        e.pull &&
                        !n &&
                        s.jsx("blockquote", { className: "mz-pull top", children: e.pull }),
                    s.jsxs("div", {
                        className: "mz-q",
                        children: [
                            s.jsx("span", { className: "mz-q-mark", children: "Q." }),
                            n
                                ? s.jsx("textarea", {
                                      rows: 2,
                                      value: e.question,
                                      onChange: (k) => r({ question: k.target.value }),
                                  })
                                : s.jsx("p", { children: e.question }),
                        ],
                    }),
                    s.jsxs("div", {
                        className: "mz-a",
                        children: [
                            s.jsx("span", { className: "mz-a-by", children: a.toUpperCase() }),
                            n
                                ? s.jsx("textarea", {
                                      rows: 6,
                                      value: e.answer,
                                      onChange: (k) => r({ answer: k.target.value }),
                                  })
                                : s.jsxs("p", {
                                      children: [s.jsx("span", { className: "mz-drop", children: m }), l],
                                  }),
                        ],
                    }),
                    c !== "ink" &&
                        e.pull &&
                        !n &&
                        s.jsx("blockquote", { className: "mz-pull", children: e.pull }),
                    n &&
                        s.jsx("input", {
                            className: "mz-pull-edit",
                            value: e.pull,
                            onChange: (k) => r({ pull: k.target.value.slice(0, 60) }),
                            placeholder: "引语（从回答里摘一句）",
                        }),
                    s.jsxs("div", {
                        className: "mz-sp-tools",
                        children: [
                            s.jsxs("button", {
                                className: `mz-adopt btn-plain ${w ? "" : "on"}`,
                                onClick: () => r({ adopted: w }),
                                children: [
                                    s.jsx("span", {
                                        className: "box",
                                        children: !w && s.jsx(B, { size: 11, weight: "bold" }),
                                    }),
                                    w ? "不采用" : "采用为人设参考",
                                ],
                            }),
                            n &&
                                s.jsxs(s.Fragment, {
                                    children: [
                                        s.jsx("button", {
                                            className: "mz-tool btn-plain",
                                            onClick: d,
                                            disabled: o,
                                            "aria-label": "重写这一栏",
                                            children: s.jsx(gs, {
                                                size: 15,
                                                weight: "bold",
                                                className: o ? "mz-spin" : "",
                                            }),
                                        }),
                                        s.jsx("button", {
                                            className: "mz-tool btn-plain",
                                            onClick: h,
                                            "aria-label": "删除这一栏",
                                            children: s.jsx(fs, { size: 15 }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
export { qe as I };
