import { r as j, j as s } from "./vendor-react-3a46a5d3.js";
import {
    I as y,
    G as he,
    u as X,
    a as ce,
    c as J,
    g as M,
    b as se,
    d as Y,
    e as ae,
    A as W,
    T as Z,
    f as ee,
    h as pe,
    i as be,
    j as ie,
    k as fe,
    l as je,
    P as xe,
    m as ke,
    C as re,
    n as ve,
    o as Ce,
    q as Ne,
    p as Ae,
    s as ge,
} from "./app-2c902988.js";
import "./vendor-7bc51c32.js";
import "./vendor-motion-62fc1664.js";
import "./vendor-icons-e63d3118.js";
import "./vendor-leaflet-f4c2a8c5.js";
function V({ name: g, count: p, cover: r, onClick: u }) {
    return s.jsxs("button", {
        className: "btn-plain pa-card",
        onClick: u,
        children: [s.jsx(re, { src: r }), s.jsx("b", { children: g }), s.jsx("small", { children: p })],
    });
}
function Le({ onClose: g }) {
    const [p, r] = j.useState("albums"),
        [u, S] = j.useState(null),
        [h, o] = j.useState(!1);
    return s.jsxs("div", {
        className: "pa",
        children: [
            p === "stickers"
                ? s.jsxs("div", {
                      className: "pa-page",
                      children: [
                          s.jsxs("header", {
                              className: "pa-head",
                              children: [
                                  s.jsx("button", {
                                      className: "btn-plain pa-round",
                                      onClick: g,
                                      "aria-label": "返回",
                                      children: y.back,
                                  }),
                                  s.jsx("h1", { children: "表情包" }),
                                  s.jsx("span", {}),
                              ],
                          }),
                          s.jsx(he, { embedded: !0 }),
                      ],
                  })
                : h
                  ? s.jsx(Se, {
                        onClose: () => o(!1),
                        onOpen: (b) => {
                            (o(!1), S(b));
                        },
                    })
                  : u
                    ? s.jsx(ye, { view: u, onBack: () => S(null) })
                    : s.jsx($e, { onClose: g, onOpen: S }),
            s.jsxs("nav", {
                className: "pa-tabbar",
                children: [
                    s.jsxs("div", {
                        className: "pa-tabs",
                        children: [
                            s.jsxs("button", {
                                className: `btn-plain ${p === "stickers" ? "on" : ""}`,
                                onClick: () => {
                                    (r("stickers"), o(!1));
                                },
                                children: [y.face, s.jsx("span", { children: "表情包" })],
                            }),
                            s.jsxs("button", {
                                className: `btn-plain ${p === "albums" ? "on" : ""}`,
                                onClick: () => {
                                    (p === "albums" && S(null), r("albums"), o(!1));
                                },
                                children: [y.stack, s.jsx("span", { children: "相册" })],
                            }),
                        ],
                    }),
                    s.jsx("button", {
                        className: "btn-plain pa-round pa-search",
                        onClick: () => {
                            (r("albums"), o(!0));
                        },
                        "aria-label": "搜索",
                        children: y.search,
                    }),
                ],
            }),
        ],
    });
}
function we() {
    var h, o;
    const { state: g } = X(),
        p = g.characters || [],
        [r, u] = j.useState(((h = p[0]) == null ? void 0 : h.id) || null);
    return [p.some((b) => b.id === r) ? r : ((o = p[0]) == null ? void 0 : o.id) || null, u, p];
}
function $e({ onClose: g, onOpen: p }) {
    var D, z, O, d, i;
    const { state: r, galleryEdit: u } = X(),
        S = ce(),
        [h, o, b] = we(),
        [C, x] = j.useState(!1),
        [k, f] = j.useState(!1),
        R = b.find((t) => t.id === h),
        _ = R ? J(R) : "TA",
        q = h ? M(r, h) : [],
        H = h ? se(r, h) : [],
        L = (h && ((z = (D = r.gallery) == null ? void 0 : D.charAvatars) == null ? void 0 : z[h])) || [],
        w = h ? Y(r, h) : [],
        T = ae(r),
        K = (t, N) => {
            if (t.cover) {
                const A = N(t.cover);
                if (A) return A.src;
            }
            for (const A of t.items || []) {
                const $ = N(A);
                if ($) return $.src;
            }
            return null;
        },
        U = new Set(L.filter((t) => t.kind === "pair").map((t) => t.pairId)).size;
    return s.jsxs("div", {
        className: "pa-page",
        children: [
            s.jsxs("header", {
                className: "pa-head",
                children: [
                    s.jsx("button", {
                        className: "btn-plain pa-round",
                        onClick: g,
                        "aria-label": "返回",
                        children: y.back,
                    }),
                    s.jsx("h1", { children: "相册" }),
                    s.jsx("button", {
                        className: "btn-plain pa-round",
                        onClick: () => f(!0),
                        "aria-label": "新建相册",
                        children: y.plus,
                    }),
                ],
            }),
            b.length === 0
                ? s.jsx("div", { className: "pa-empty", children: "还没有联系人" })
                : s.jsxs(s.Fragment, {
                      children: [
                          s.jsxs("div", {
                              className: "pa-sec",
                              children: [
                                  s.jsx("b", { children: "内置相册" }),
                                  s.jsxs("button", {
                                      className: "btn-plain pa-pill",
                                      onClick: () => x(!0),
                                      children: [_, s.jsx("i", { children: y.down })],
                                  }),
                              ],
                          }),
                          s.jsxs("div", {
                              className: "pa-row",
                              children: [
                                  s.jsx(V, {
                                      name: "生图",
                                      count: q.length,
                                      cover: (O = q[0]) == null ? void 0 : O.src,
                                      onClick: () => p({ kind: "gen", charId: h }),
                                  }),
                                  s.jsx(V, {
                                      name: "头像库",
                                      count: `${L.filter((t) => t.kind !== "pair").length}${U ? ` · ${U} 对` : ""}`,
                                      cover: (d = L[0]) == null ? void 0 : d.dataUrl,
                                      onClick: () => p({ kind: "avatars", charId: h }),
                                  }),
                                  s.jsx(V, {
                                      name: "最近存入",
                                      count: H.length,
                                      cover: (i = H[0]) == null ? void 0 : i.src,
                                      onClick: () => p({ kind: "saved", charId: h }),
                                  }),
                              ],
                          }),
                          s.jsx("div", {
                              className: "pa-sec",
                              children: s.jsxs("b", { children: [_, "建的相册"] }),
                          }),
                          w.length
                              ? s.jsx("div", {
                                    className: "pa-row wrap",
                                    children: w.map((t) =>
                                        s.jsx(
                                            V,
                                            {
                                                name: t.name,
                                                count: (t.items || []).length,
                                                cover: K(t, (N) => ie(r, h, N)),
                                                onClick: () => p({ kind: "char", charId: h, albumId: t.id }),
                                            },
                                            t.id,
                                        ),
                                    ),
                                })
                              : s.jsxs("p", {
                                    className: "pa-note",
                                    children: [_, " 还没建过相册。他会自己决定建不建、往里放什么。"],
                                }),
                      ],
                  }),
            s.jsxs("div", {
                className: "pa-sec",
                children: [
                    s.jsx("b", { children: "我的相册" }),
                    s.jsx("button", {
                        className: "btn-plain pa-pill",
                        onClick: () => f(!0),
                        children: "新建",
                    }),
                ],
            }),
            T.length
                ? s.jsx("div", {
                      className: "pa-row wrap",
                      children: T.map((t) =>
                          s.jsx(
                              V,
                              {
                                  name: t.name,
                                  count: (t.items || []).length,
                                  cover: K(
                                      t,
                                      (N) => (t.items || []).find((A) => A.id === (N.id || N)) || null,
                                  ),
                                  onClick: () => p({ kind: "user", albumId: t.id }),
                              },
                              t.id,
                          ),
                      ),
                  })
                : s.jsx("p", {
                      className: "pa-note",
                      children: "你自己的相册。他只能看，动不了；每张写一句描述，他看到的就是这一句。",
                  }),
            s.jsx("div", { className: "pa-bottom-space" }),
            s.jsx(W, {
                open: C,
                onClose: () => x(!1),
                title: "看谁的相册",
                actions: b.map((t) => ({
                    label: `${t.id === h ? "✓ " : ""}${J(t)}`,
                    onClick: () => o(t.id),
                })),
            }),
            s.jsx(Z, {
                open: k,
                title: "新建我的相册",
                placeholder: "相册名",
                onClose: () => f(!1),
                onSave: (t) => {
                    (u((N) => ({
                        ...N,
                        userAlbums: [
                            ...(N.userAlbums || []),
                            { id: ee("ua_"), name: t.slice(0, 20), items: [], createdAt: Date.now() },
                        ],
                    })),
                        S("已新建"));
                },
            }),
        ],
    });
}
function ye({ view: g, onBack: p }) {
    const { state: r, galleryEdit: u, galleryRemoveCharPhoto: S, patch: h } = X(),
        o = ce(),
        [b, C] = j.useState(!1),
        [x, k] = j.useState([]),
        [f, R] = j.useState(null),
        [_, q] = j.useState(!1),
        [H, L] = j.useState(!1),
        [w, T] = j.useState(null),
        [K, U] = j.useState(!1),
        [D, z] = j.useState(null),
        O = j.useRef(null),
        { kind: d, charId: i, albumId: t } = g,
        N = (r.characters || []).find((e) => e.id === i),
        A = N ? J(N) : "TA";
    let $ = "",
        B = "",
        E = [],
        v = null;
    if (
        (d === "gen"
            ? (($ = "生图"),
              (B = `${A} 用生图画的每一张都会自动进这里，他也可以另外放进别的相册。画错了、描述不对，你可以直接改。`),
              (E = M(r, i).map((e) => ({
                  key: `gen:${e.id}`,
                  src: e.src,
                  desc: e.desc,
                  at: e.at,
                  pool: "gen",
                  id: e.id,
                  meta: pe[be(e.key)] || "生图",
                  raw: e,
              }))))
            : d === "saved"
              ? (($ = "最近存入"),
                (B = `${A} 从聊天里存下的你的照片。存不存由他决定，存进来的他之后可以自己发。`),
                (E = se(r, i).map((e) => ({
                    key: `photo:${e.id}`,
                    src: e.src,
                    desc: e.label,
                    at: e.savedAt || e.at,
                    pool: "photo",
                    id: e.id,
                    meta: e.thought ? `他存的时候想：${e.thought}` : "",
                    raw: e,
                }))))
              : d === "char"
                ? ((v = Y(r, i).find((e) => e.id === t)),
                  ($ = (v == null ? void 0 : v.name) || "相册"),
                  (B = `${A} 自己建的相册。你也可以改：改描述、移出、重命名、删掉。`),
                  (E = ((v == null ? void 0 : v.items) || [])
                      .map((e) => {
                          const a = ie(r, i, e);
                          return a
                              ? {
                                    key: `${a.pool}:${a.id}`,
                                    ...a,
                                    meta: a.pool === "gen" ? "生图" : "存下的照片",
                                }
                              : null;
                      })
                      .filter(Boolean)))
                : d === "user" &&
                  ((v = ae(r).find((e) => e.id === t)),
                  ($ = (v == null ? void 0 : v.name) || "相册"),
                  (B = "你自己的相册。他只能看；每张写一句描述，他看到的就是这一句。"),
                  (E = ((v == null ? void 0 : v.items) || []).map((e) => ({
                      key: `user:${e.id}`,
                      src: e.src,
                      desc: e.desc,
                      at: e.at,
                      pool: "user",
                      id: e.id,
                  })))),
        !v && (d === "char" || d === "user"))
    )
        return s.jsxs("div", {
            className: "pa-page",
            children: [
                s.jsxs("header", {
                    className: "pa-nav",
                    children: [
                        s.jsx("button", { className: "btn-plain pa-round", onClick: p, children: y.back }),
                        s.jsx("b", { children: "相册" }),
                        s.jsx("span", {}),
                    ],
                }),
                s.jsx("div", { className: "pa-empty", children: "这个相册已经删掉了" }),
            ],
        });
    if (d === "avatars") return s.jsx(fe, { charId: i, onBack: p });
    const oe = (e, a) => {
            const n = a.slice(0, 300);
            e.pool === "gen"
                ? u((l) => {
                      var c;
                      return {
                          ...l,
                          charGen: {
                              ...(l.charGen || {}),
                              [i]: (((c = l.charGen) == null ? void 0 : c[i]) || []).map((m) =>
                                  m.id === e.id ? { ...m, desc: n } : m,
                              ),
                          },
                      };
                  })
                : e.pool === "photo"
                  ? u((l) => {
                        var c;
                        return {
                            ...l,
                            charPhotos: {
                                ...(l.charPhotos || {}),
                                [i]: (((c = l.charPhotos) == null ? void 0 : c[i]) || []).map((m) =>
                                    m.id === e.id ? { ...m, label: n.slice(0, 60) } : m,
                                ),
                            },
                        };
                    })
                  : e.pool === "user" &&
                    u((l) => ({
                        ...l,
                        userAlbums: (l.userAlbums || []).map((c) =>
                            c.id !== t
                                ? c
                                : {
                                      ...c,
                                      items: c.items.map((m) => (m.id === e.id ? { ...m, desc: n } : m)),
                                  },
                        ),
                    }));
        },
        de = (e) => {
            if (e.length) {
                if (d === "char") {
                    (u((a) => {
                        var n;
                        return {
                            ...a,
                            charAlbums: {
                                ...(a.charAlbums || {}),
                                [i]: (((n = a.charAlbums) == null ? void 0 : n[i]) || []).map((l) =>
                                    l.id !== t
                                        ? l
                                        : {
                                              ...l,
                                              items: l.items.filter(
                                                  (c) => !e.some((m) => m.pool === c.pool && m.id === c.id),
                                              ),
                                          },
                                ),
                            },
                        };
                    }),
                        o(`已从「${$}」移出 ${e.length} 张（图本身还在）`));
                    return;
                }
                if (window.confirm(`删除这 ${e.length} 张？`)) {
                    if (d === "gen") {
                        const a = new Set(e.map((n) => n.id));
                        u((n) => {
                            var l, c;
                            return {
                                ...n,
                                charGen: {
                                    ...(n.charGen || {}),
                                    [i]: (((l = n.charGen) == null ? void 0 : l[i]) || []).filter(
                                        (m) => !a.has(m.id),
                                    ),
                                },
                                charAlbums: {
                                    ...(n.charAlbums || {}),
                                    [i]: (((c = n.charAlbums) == null ? void 0 : c[i]) || []).map((m) => ({
                                        ...m,
                                        items: (m.items || []).filter(
                                            (I) => !(I.pool === "gen" && a.has(I.id)),
                                        ),
                                    })),
                                },
                            };
                        });
                    } else if (d === "saved") e.forEach((a) => S(i, a.id));
                    else if (d === "user") {
                        const a = new Set(e.map((n) => n.id));
                        u((n) => ({
                            ...n,
                            userAlbums: (n.userAlbums || []).map((l) =>
                                l.id !== t ? l : { ...l, items: l.items.filter((c) => !a.has(c.id)) },
                            ),
                        }));
                    }
                    o(`已删除 ${e.length} 张`);
                }
            }
        },
        ne = (e, a, n = "") => {
            (u((l) => {
                var I;
                let c = [...(((I = l.charAlbums) == null ? void 0 : I[i]) || [])],
                    m = e;
                return (
                    m ||
                        ((m = ee("al_")),
                        c.push({
                            id: m,
                            name: n.slice(0, 20),
                            items: [],
                            by: "user",
                            createdAt: Date.now(),
                        })),
                    (c = c.map((P) => {
                        if (P.id !== m) return P;
                        const F = new Set((P.items || []).map((G) => `${G.pool}:${G.id}`));
                        return {
                            ...P,
                            items: [
                                ...a
                                    .filter((G) => !F.has(`${G.pool}:${G.id}`))
                                    .map((G) => ({ pool: G.pool, id: G.id })),
                                ...(P.items || []),
                            ],
                        };
                    })),
                    { ...l, charAlbums: { ...(l.charAlbums || {}), [i]: c } }
                );
            }),
                o("已放进相册"));
        },
        le = (e) => {
            if (!ve(Ce(r))) {
                o("先在 API 设置里配好生图", "error");
                return;
            }
            const a = e.raw || M(r, i).find((c) => c.id === e.id);
            if (!a) return;
            const n = a.key || `gen:${a.id}`;
            a.key ||
                u((c) => {
                    var m;
                    return {
                        ...c,
                        charGen: {
                            ...(c.charGen || {}),
                            [i]: (((m = c.charGen) == null ? void 0 : m[i]) || []).map((I) =>
                                I.id === a.id ? { ...I, key: n } : I,
                            ),
                        },
                    };
                });
            const l = Ne({
                key: n,
                desc: a.desc,
                charId: i,
                context: { at: Date.now() },
                getState: () => r,
                apply: (c) => {
                    if (!n.startsWith("chat:")) return;
                    const m = n.slice(5);
                    h((I) => ({
                        characters: I.characters.map((P) =>
                            P.id !== i
                                ? P
                                : {
                                      ...P,
                                      messages: (P.messages || []).map((F) =>
                                          F.id === m ? { ...F, imgRef: c } : F,
                                      ),
                                  },
                        ),
                    }));
                },
            });
            o(l ? "在后台重新生成，好了会替换这一张" : "这一张已经在生成了");
        },
        ue = (e) => {
            const a = { pool: e.pool, id: e.id };
            (d === "char" &&
                u((n) => {
                    var l;
                    return {
                        ...n,
                        charAlbums: {
                            ...(n.charAlbums || {}),
                            [i]: (((l = n.charAlbums) == null ? void 0 : l[i]) || []).map((c) =>
                                c.id === t ? { ...c, cover: a } : c,
                            ),
                        },
                    };
                }),
                d === "user" &&
                    u((n) => ({
                        ...n,
                        userAlbums: (n.userAlbums || []).map((l) =>
                            l.id === t ? { ...l, cover: { id: e.id } } : l,
                        ),
                    })),
                o("已设为封面"));
        },
        me = async (e) => {
            const a = [];
            for (const n of e)
                a.push({ id: ee("up_"), src: await Ae(n, { note: "我的相册" }), desc: "", at: Date.now() });
            (u((n) => ({
                ...n,
                userAlbums: (n.userAlbums || []).map((l) =>
                    l.id !== t ? l : { ...l, items: [...a, ...(l.items || [])] },
                ),
            })),
                a[0] && T({ item: { ...a[0], pool: "user" }, value: "", chain: a.slice(1) }));
        },
        Q = E.filter((e) => x.includes(e.key)),
        te = (e, a = null) =>
            [
                a && {
                    label: "改描述",
                    sub: d === "user" ? "他看到的就是这一句" : "他以为这张是什么",
                    onClick: () => T({ item: a, value: a.desc || "" }),
                },
                a &&
                    a.src && {
                        label: "保存图片",
                        onClick: () => {
                            ge(a.src, a.desc ? String(a.desc).slice(0, 16) : "litot").catch((n) =>
                                o(n.message || "保存失败", "error"),
                            );
                        },
                    },
                a && a.pool === "gen" && { label: "重新生成", sub: "按描述再画一次", onClick: () => le(a) },
                d !== "user" && { label: `放进${A}的相册`, sub: "也可以新建一个", onClick: () => z(e) },
                a && (d === "char" || d === "user") && { label: "设为封面", onClick: () => ue(a) },
                {
                    label: d === "char" ? "从这个相册移出" : "删除",
                    destructive: !0,
                    onClick: () => {
                        (de(e), R(null), k([]), C(!1));
                    },
                },
            ].filter(Boolean);
    return s.jsxs("div", {
        className: "pa-page",
        children: [
            s.jsxs("header", {
                className: "pa-nav",
                children: [
                    s.jsx("button", { className: "btn-plain pa-round", onClick: p, children: y.back }),
                    s.jsx("b", { children: $ }),
                    E.length
                        ? s.jsx("button", {
                              className: "btn-plain pa-text",
                              onClick: () => {
                                  (C(!b), k([]));
                              },
                              children: b ? "完成" : "选择",
                          })
                        : d === "user"
                          ? s.jsx("button", {
                                className: "btn-plain pa-round",
                                onClick: () => {
                                    var e;
                                    return (e = O.current) == null ? void 0 : e.click();
                                },
                                children: y.plus,
                            })
                          : s.jsx("span", {}),
                ],
            }),
            s.jsx("p", { className: "pa-sub", children: B }),
            (d === "char" || d === "user") &&
                s.jsxs("div", {
                    className: "pa-tools",
                    children: [
                        d === "user" &&
                            s.jsx("button", {
                                className: "btn-plain pa-pill",
                                onClick: () => {
                                    var e;
                                    return (e = O.current) == null ? void 0 : e.click();
                                },
                                children: "添加照片",
                            }),
                        s.jsx("button", {
                            className: "btn-plain pa-pill",
                            onClick: () => L(!0),
                            children: "相册设置",
                        }),
                    ],
                }),
            E.length
                ? s.jsx("div", {
                      className: "pa-grid",
                      children: E.map((e) => {
                          const a = x.includes(e.key);
                          return s.jsxs(
                              "button",
                              {
                                  className: `btn-plain pa-cell ${b && !a ? "dim" : ""}`,
                                  onClick: () =>
                                      b ? k((n) => (a ? n.filter((l) => l !== e.key) : [...n, e.key])) : R(e),
                                  children: [
                                      s.jsx(je, { src: e.src, alt: "", loading: "lazy" }),
                                      !e.desc && s.jsx("em", { className: "pa-warn", children: "没描述" }),
                                      b && s.jsx("i", { className: `pa-check ${a ? "on" : ""}` }),
                                  ],
                              },
                              e.key,
                          );
                      }),
                  })
                : s.jsx("div", {
                      className: "pa-empty",
                      children: d === "user" ? "还是空的，点右上角加照片" : "这里还什么都没有",
                  }),
            b &&
                x.length > 0 &&
                s.jsxs("div", {
                    className: "pa-selbar",
                    children: [
                        s.jsxs("span", { children: ["已选 ", x.length, " 张"] }),
                        s.jsx("button", {
                            className: "btn-plain pa-pill dark",
                            onClick: () => q(!0),
                            children: "操作",
                        }),
                    ],
                }),
            s.jsx("div", { className: "pa-bottom-space" }),
            s.jsx("input", {
                ref: O,
                type: "file",
                accept: "image/*",
                multiple: !0,
                hidden: !0,
                onChange: (e) => {
                    const a = [...(e.target.files || [])];
                    ((e.target.value = ""), a.length && me(a));
                },
            }),
            s.jsx(W, {
                open: _,
                onClose: () => q(!1),
                message: `已选 ${Q.length} 张`,
                actions: te(Q, Q.length === 1 ? Q[0] : null),
            }),
            s.jsx(xe, {
                item: f ? E.find((e) => e.key === f.key) || f : null,
                onClose: () => R(null),
                who: A,
                actions: f ? te([f], f) : [],
                extra:
                    f && f.pool === "gen" && (f.raw || M(r, i).find((e) => e.id === f.id))
                        ? (() => {
                              const e = f.raw || M(r, i).find((a) => a.id === f.id);
                              return s.jsx(ke, {
                                  dark: !0,
                                  genKey: e.key || `gen:${e.id}`,
                                  fallback: e.brief || "",
                                  onRegen: () => le(f),
                              });
                          })()
                        : null,
            }),
            s.jsx(Z, {
                open: !!w,
                title: w != null && w.chain ? "这张是什么" : "改描述",
                multiline: !0,
                value: w == null ? void 0 : w.value,
                placeholder: d === "user" ? "写一句这张是什么，他看到的就是这一句" : "这张是什么",
                onClose: () => T(null),
                onSave: (e) => {
                    (oe(w.item, e), R(null));
                    const a = w.chain || [];
                    a.length
                        ? setTimeout(
                              () => T({ item: { ...a[0], pool: "user" }, value: "", chain: a.slice(1) }),
                              250,
                          )
                        : o("已保存");
                },
            }),
            s.jsx(W, {
                open: !!D,
                onClose: () => z(null),
                title: `放进${A}的相册`,
                actions: [
                    ...Y(r, i)
                        .filter((e) => !(d === "char" && e.id === t))
                        .map((e) => ({ label: e.name, onClick: () => ne(e.id, D) })),
                    {
                        label: "新建相册…",
                        onClick: () => {
                            const e = D;
                            setTimeout(() => {
                                const a = window.prompt("相册名");
                                a && a.trim() && ne(null, e, a.trim());
                            }, 200);
                        },
                    },
                ],
            }),
            s.jsx(W, {
                open: H,
                onClose: () => L(!1),
                title: $,
                actions: [
                    { label: "重命名", onClick: () => U(!0) },
                    {
                        label: "删除这个相册",
                        sub: d === "char" ? "里面的图还留在生图 / 最近存入里" : "里面的照片一起删掉",
                        destructive: !0,
                        onClick: () => {
                            window.confirm(`删除相册「${$}」？`) &&
                                (u(
                                    d === "char"
                                        ? (e) => {
                                              var a;
                                              return {
                                                  ...e,
                                                  charAlbums: {
                                                      ...(e.charAlbums || {}),
                                                      [i]: (
                                                          ((a = e.charAlbums) == null ? void 0 : a[i]) || []
                                                      ).filter((n) => n.id !== t),
                                                  },
                                              };
                                          }
                                        : (e) => ({
                                              ...e,
                                              userAlbums: (e.userAlbums || []).filter((a) => a.id !== t),
                                          }),
                                ),
                                p());
                        },
                    },
                ],
            }),
            s.jsx(Z, {
                open: K,
                title: "重命名",
                value: $,
                placeholder: "相册名",
                onClose: () => U(!1),
                onSave: (e) => {
                    const a = e.slice(0, 20);
                    u(
                        d === "char"
                            ? (n) => {
                                  var l;
                                  return {
                                      ...n,
                                      charAlbums: {
                                          ...(n.charAlbums || {}),
                                          [i]: (((l = n.charAlbums) == null ? void 0 : l[i]) || []).map(
                                              (c) => (c.id === t ? { ...c, name: a } : c),
                                          ),
                                      },
                                  };
                              }
                            : (n) => ({
                                  ...n,
                                  userAlbums: (n.userAlbums || []).map((l) =>
                                      l.id === t ? { ...l, name: a } : l,
                                  ),
                              }),
                    );
                },
            }),
        ],
    });
}
function Se({ onClose: g, onOpen: p }) {
    const { state: r } = X(),
        [u, S] = j.useState(""),
        h = j.useMemo(() => {
            const o = u.trim().toLowerCase();
            if (!o) return [];
            const b = [];
            for (const C of r.characters || []) {
                const x = J(C);
                (M(r, C.id).forEach((k) => {
                    String(k.desc || "")
                        .toLowerCase()
                        .includes(o) &&
                        b.push({
                            key: `g${k.id}`,
                            src: k.src,
                            desc: k.desc,
                            where: `${x} · 生图`,
                            view: { kind: "gen", charId: C.id },
                        });
                }),
                    se(r, C.id).forEach((k) => {
                        String(k.label || "")
                            .toLowerCase()
                            .includes(o) &&
                            b.push({
                                key: `p${k.id}`,
                                src: k.src,
                                desc: k.label,
                                where: `${x} · 最近存入`,
                                view: { kind: "saved", charId: C.id },
                            });
                    }));
            }
            return (
                ae(r).forEach((C) =>
                    (C.items || []).forEach((x) => {
                        String(x.desc || "")
                            .toLowerCase()
                            .includes(o) &&
                            b.push({
                                key: `u${x.id}`,
                                src: x.src,
                                desc: x.desc,
                                where: `我的相册 · ${C.name}`,
                                view: { kind: "user", albumId: C.id },
                            });
                    }),
                ),
                b.slice(0, 60)
            );
        }, [u, r]);
    return s.jsxs("div", {
        className: "pa-page",
        children: [
            s.jsxs("header", {
                className: "pa-nav",
                children: [
                    s.jsx("button", { className: "btn-plain pa-round", onClick: g, children: y.back }),
                    s.jsx("b", { children: "搜索" }),
                    s.jsx("span", {}),
                ],
            }),
            s.jsxs("label", {
                className: "pa-searchbox",
                children: [
                    y.search,
                    s.jsx("input", {
                        autoFocus: !0,
                        value: u,
                        onChange: (o) => S(o.target.value),
                        placeholder: "按描述搜照片",
                    }),
                ],
            }),
            u.trim() &&
                !h.length &&
                s.jsxs("div", { className: "pa-empty", children: ["没有描述里带「", u.trim(), "」的照片"] }),
            s.jsx("div", {
                className: "pa-hits",
                children: h.map((o) =>
                    s.jsxs(
                        "button",
                        {
                            className: "btn-plain pa-hit",
                            onClick: () => p(o.view),
                            children: [
                                s.jsx(re, { src: o.src }),
                                s.jsxs("div", {
                                    children: [
                                        s.jsx("b", { children: o.desc || "（没描述）" }),
                                        s.jsx("small", { children: o.where }),
                                    ],
                                }),
                            ],
                        },
                        o.key,
                    ),
                ),
            }),
            s.jsx("div", { className: "pa-bottom-space" }),
        ],
    });
}
export { Le as default };
