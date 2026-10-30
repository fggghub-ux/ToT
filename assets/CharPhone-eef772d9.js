import { j as s, r as v, R as Fs } from "./vendor-react-3a46a5d3.js";
import {
    dD as we,
    dE as V,
    dF as rs,
    bb as se,
    dx as ee,
    dG as Ys,
    dH as ls,
    bl as jt,
    bm as ut,
    l as hs,
    dI as Nt,
    dJ as gt,
    dK as vt,
    dL as Ie,
    dM as Mc,
    dN as bt,
    cs as ft,
    dO as kt,
    d9 as wt,
    dP as Sc,
    dQ as Ac,
    dR as yt,
    dS as Ct,
    u as zc,
    a as Wc,
    dT as $t,
    dU as Mt,
    b5 as St,
    dV as ss,
    dW as At,
    dX as Us,
    dY as zt,
    dZ as mc,
    d_ as pc,
    ay as he,
    d$ as Wt,
    e0 as Tt,
    e1 as jc,
    e2 as _t,
    e3 as uc,
    aq as It,
    ar as Dt,
    f as xe,
    e4 as Ft,
    e5 as Nc,
    e6 as Lt,
    aR as Bt,
    e7 as Pt,
    e8 as Rt,
    e9 as Et,
    ea as gc,
    eb as vc,
    ec as Ot,
    ed as Zt,
    ee as qt,
} from "./app-2c902988.js";
import {
    ac as ce,
    V as Tc,
    aZ as js,
    as as Ks,
    dh as We,
    c as Q,
    am as bc,
    di as fc,
    S as us,
    bg as Ht,
    P as Be,
    ad as _c,
    N as Gt,
    a8 as J,
    b as bs,
    aq as Ut,
    aM as ge,
    dj as Vt,
    an as Yt,
    aC as Kt,
    ci as Jt,
    dk as Qt,
    dl as Xt,
    cl as Ic,
    ck as sa,
    a as Js,
    cm as ea,
    a_ as kc,
    dm as ca,
    dn as ta,
    b0 as aa,
    dp as na,
    Z as la,
} from "./vendor-icons-e63d3118.js";
import { A as ia } from "./vendor-motion-62fc1664.js";
import ra from "./Insta-379a6cec.js";
import da from "./Youtube-b2d89cc9.js";
import oa from "./Market-c4843b6f.js";
import "./vendor-7bc51c32.js";
import "./vendor-leaflet-f4c2a8c5.js";
import "./AltKnown-a1a03d3e.js";
import "./platformDm-22d28248.js";
const Cs = { display: "block" };
function ds({ children: e, size: t = 33 }) {
    return s.jsx("svg", {
        width: t,
        height: t,
        viewBox: "0 0 32 32",
        fill: "currentColor",
        style: Cs,
        "aria-hidden": !0,
        children: e,
    });
}
const ha = () =>
        s.jsxs(ds, {
            children: [
                s.jsx("path", {
                    d: "M12.6 4C6.9 4 2.3 7.9 2.3 12.7c0 2.7 1.5 5.1 3.8 6.7l-1 3.2 3.6-1.8c1.2.3 2.5.5 3.9.5h.5a7.9 7.9 0 0 1-.2-1.7c0-4.6 4.5-8.3 10-8.3h.7C22.7 7.2 18.2 4 12.6 4Z",
                }),
                s.jsx("path", {
                    d: "M29.7 19.5c0-3.8-3.7-6.8-8.3-6.8s-8.3 3-8.3 6.8c0 3.8 3.7 6.9 8.3 6.9 1 0 2-.2 2.9-.4l3.2 1.6-.9-2.7c1.9-1.3 3.1-3.2 3.1-5.4Z",
                    opacity: ".55",
                }),
            ],
        }),
    Dc = () =>
        s.jsx(ds, {
            children: s.jsx("path", {
                d: "M16 4C8.8 4 3 9 3 15.2c0 3.6 2 6.8 5.1 8.8-.3 1.9-1.2 3.4-2.4 4.5-.3.3-.1.8.3.7 2.9-.4 5.2-1.6 6.8-2.8 1 .2 2.1.3 3.2.3 7.2 0 13-5 13-11.5S23.2 4 16 4Z",
            }),
        }),
    xa = () =>
        s.jsxs(ds, {
            children: [
                s.jsx("path", { d: "M6 3h20a2 2 0 0 1 2 2v3H4V5a2 2 0 0 1 2-2Z" }),
                s.jsx("path", { d: "M4 10h24v17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10Z", opacity: ".38" }),
                s.jsx("rect", { x: "8", y: "14", width: "16", height: "2", rx: "1" }),
                s.jsx("rect", { x: "8", y: "19", width: "16", height: "2", rx: "1" }),
                s.jsx("rect", { x: "8", y: "24", width: "10", height: "2", rx: "1" }),
            ],
        }),
    ma = () =>
        s.jsx(ds, {
            children: Array.from({ length: 8 }).map((e, t) =>
                s.jsx(
                    "ellipse",
                    {
                        cx: "16",
                        cy: "9.4",
                        rx: "4.1",
                        ry: "6.6",
                        transform: `rotate(${t * 45} 16 16)`,
                        opacity: 0.3 + (t % 4) * 0.18,
                    },
                    t,
                ),
            ),
        }),
    pa = () =>
        s.jsxs(ds, {
            children: [
                s.jsx("path", {
                    d: "M11.6 4h8.8l1.7 3H27a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h4.9l1.7-3Z",
                    opacity: ".8",
                }),
                s.jsx("circle", { cx: "16", cy: "17.5", r: "6.4" }),
                s.jsx("circle", { cx: "16", cy: "17.5", r: "2.9", opacity: ".25" }),
            ],
        }),
    ja = () =>
        s.jsxs(ds, {
            children: [
                s.jsx("rect", { x: "3", y: "9", width: "26", height: "6", rx: "2.4", opacity: ".4" }),
                s.jsx("rect", { x: "3", y: "13", width: "26", height: "14", rx: "3.4" }),
                s.jsx("rect", { x: "20", y: "18", width: "7", height: "4", rx: "2", opacity: ".35" }),
            ],
        }),
    ua = () =>
        s.jsxs(ds, {
            children: [
                s.jsx("path", { d: "M7 10h18l1.6 16.2a2.6 2.6 0 0 1-2.6 2.8H8a2.6 2.6 0 0 1-2.6-2.8L7 10Z" }),
                s.jsx("path", {
                    d: "M11.4 12.6V9.2a4.6 4.6 0 0 1 9.2 0v3.4",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.4",
                    strokeLinecap: "round",
                    opacity: ".45",
                }),
            ],
        }),
    Na = () =>
        s.jsxs(ds, {
            children: [
                s.jsx("path", {
                    d: "M10.6 3h10.8A7.6 7.6 0 0 1 29 10.6v10.8A7.6 7.6 0 0 1 21.4 29H10.6A7.6 7.6 0 0 1 3 21.4V10.6A7.6 7.6 0 0 1 10.6 3Zm0 3A4.6 4.6 0 0 0 6 10.6v10.8A4.6 4.6 0 0 0 10.6 26h10.8a4.6 4.6 0 0 0 4.6-4.6V10.6A4.6 4.6 0 0 0 21.4 6H10.6Z",
                }),
                s.jsx("path", {
                    d: "M16 9.4a6.6 6.6 0 1 1 0 13.2 6.6 6.6 0 0 1 0-13.2Zm0 3a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z",
                }),
                s.jsx("circle", { cx: "23.3", cy: "8.7", r: "1.7" }),
            ],
        }),
    ga = () =>
        s.jsx("svg", {
            width: "33",
            height: "33",
            viewBox: "0 0 32 32",
            style: Cs,
            "aria-hidden": !0,
            children: s.jsx("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M29.2 10.6c-.3-2.4-1.4-3.5-3.8-3.8C22.6 6.4 19 6.3 16 6.3s-6.6.1-9.4.5c-2.4.3-3.5 1.4-3.8 3.8-.3 1.9-.4 3.6-.4 5.4s.1 3.5.4 5.4c.3 2.4 1.4 3.5 3.8 3.8 2.8.4 6.4.5 9.4.5s6.6-.1 9.4-.5c2.4-.3 3.5-1.4 3.8-3.8.3-1.9.4-3.6.4-5.4s-.1-3.5-.4-5.4ZM13.3 20.4V11.6L21 16l-7.7 4.4Z",
                clipRule: "evenodd",
            }),
        }),
    va = () =>
        s.jsxs(ds, {
            children: [
                s.jsx("path", {
                    d: "M18 3h7a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4h-7a1.6 1.6 0 0 1 0-3.2h7a.8.8 0 0 0 .8-.8V7a.8.8 0 0 0-.8-.8h-7A1.6 1.6 0 0 1 18 3Z",
                }),
                s.jsx("path", {
                    d: "M13.4 9.3a1.6 1.6 0 0 1 0 2.26L10.56 14.4H20a1.6 1.6 0 0 1 0 3.2h-9.44l2.84 2.84a1.6 1.6 0 1 1-2.26 2.26l-5.57-5.57a1.6 1.6 0 0 1 0-2.26l5.57-5.57a1.6 1.6 0 0 1 2.26 0Z",
                }),
            ],
        }),
    ba = () =>
        s.jsx(ds, {
            children: s.jsx("path", {
                transform: "translate(2.2 2.2) scale(1.15)",
                d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
            }),
        }),
    fa = () =>
        s.jsxs(ds, {
            children: [
                s.jsx("circle", { cx: "21", cy: "12", r: "4.4", opacity: ".5" }),
                s.jsx("path", {
                    d: "M12.6 26.4c0-4 3.8-6.6 8.4-6.6s8.4 2.6 8.4 6.6a1.3 1.3 0 0 1-1.3 1.3H13.9a1.3 1.3 0 0 1-1.3-1.3Z",
                    opacity: ".5",
                }),
                s.jsx("circle", { cx: "12.5", cy: "10.6", r: "5.4" }),
                s.jsx("path", {
                    d: "M2.4 26.4c0-4.6 4.5-7.7 10.1-7.7s10.1 3.1 10.1 7.7a1.3 1.3 0 0 1-1.3 1.3H3.7a1.3 1.3 0 0 1-1.3-1.3Z",
                }),
            ],
        }),
    ka = () =>
        s.jsx(ds, {
            children: s.jsx("path", {
                d: "M26 4.2v16.3a4.3 4.3 0 1 1-2.6-3.95V9.6l-11 2.4v11.1a4.3 4.3 0 1 1-2.6-3.95V7.4c0-.8.55-1.5 1.35-1.66l12.6-2.75A1.9 1.9 0 0 1 26 4.2Z",
            }),
        }),
    wa = () =>
        s.jsxs("svg", {
            width: "33",
            height: "33",
            viewBox: "0 0 32 32",
            style: Cs,
            "aria-hidden": !0,
            children: [
                s.jsx("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16 2.5a13.5 13.5 0 1 1 0 27 13.5 13.5 0 0 1 0-27Zm6.6 6.9-8.7 4.5-4.5 8.7 8.7-4.5 4.5-8.7Z",
                }),
                s.jsx("path", {
                    fill: "currentColor",
                    opacity: ".45",
                    d: "m13.9 13.9 4.2 4.2-8.7 4.5 4.5-8.7Z",
                }),
            ],
        }),
    ya = () =>
        s.jsx("svg", {
            width: "33",
            height: "33",
            viewBox: "0 0 32 32",
            style: Cs,
            "aria-hidden": !0,
            children: s.jsx("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.2 8.5h11.6c3.3 0 5.6 2.3 6.3 5.6l1.4 6.9c.6 3-1.5 5.5-4.2 5.5-1.6 0-2.8-.8-3.7-2.1l-1.5-2.2a2 2 0 0 0-1.7-.9h-4.8a2 2 0 0 0-1.7.9l-1.5 2.2c-.9 1.3-2.1 2.1-3.7 2.1-2.7 0-4.8-2.5-4.2-5.5l1.4-6.9c.7-3.3 3-5.6 6.3-5.6Zm-.6 4.3a1 1 0 0 0-1 1v1.6H7a1 1 0 1 0 0 2h1.6V19a1 1 0 1 0 2 0v-1.6h1.6a1 1 0 1 0 0-2h-1.6v-1.6a1 1 0 0 0-1-1Zm12.9.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm-2.8 2.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z",
            }),
        }),
    Ca = {
        chat: ha,
        sms: Dc,
        notes: xa,
        photos: ma,
        moments: pa,
        wallet: ja,
        market: ua,
        insta: Na,
        tube: ga,
        exit: va,
        calls: ba,
        accounts: fa,
        music: ka,
        safari: wa,
        steam: ya,
    };
function $a({ size: e = 30 }) {
    return s.jsxs("svg", {
        width: e,
        height: e,
        viewBox: "0 0 32 32",
        fill: "currentColor",
        style: Cs,
        "aria-hidden": !0,
        children: [
            s.jsx("circle", { cx: "16", cy: "11", r: "6.2" }),
            s.jsx("path", {
                d: "M16 19.4c-5.4 0-9.8 3.3-9.8 7.4 0 .7.5 1.2 1.2 1.2h17.2c.7 0 1.2-.5 1.2-1.2 0-4.1-4.4-7.4-9.8-7.4Z",
            }),
        ],
    });
}
const ye = (e = 26) => ({ width: e, height: e, viewBox: "0 0 28 28", style: Cs, "aria-hidden": !0 }),
    Ma = ({ on: e }) =>
        s.jsxs("svg", {
            ...ye(),
            fill: e ? "currentColor" : "none",
            stroke: "currentColor",
            strokeWidth: e ? 0 : 1.7,
            children: [
                s.jsx("path", {
                    d: "M11 4C5.9 4 1.8 7.5 1.8 11.8c0 2.4 1.3 4.6 3.4 6l-.9 2.9 3.3-1.6c1 .3 2.2.4 3.4.4h.4a7 7 0 0 1-.2-1.5c0-4.1 4-7.4 8.9-7.4h.6C19.9 6.9 15.9 4 11 4Z",
                }),
                s.jsx("path", {
                    d: "M26.2 17.4c0-3.4-3.3-6.1-7.4-6.1s-7.4 2.7-7.4 6.1 3.3 6.2 7.4 6.2c.9 0 1.8-.1 2.6-.4l2.9 1.4-.8-2.4c1.7-1.1 2.7-2.8 2.7-4.8Z",
                    opacity: e ? ".55" : "1",
                }),
            ],
        }),
    Sa = ({ on: e }) =>
        s.jsxs("svg", {
            ...ye(),
            fill: e ? "currentColor" : "none",
            stroke: "currentColor",
            strokeWidth: e ? 0 : 1.7,
            children: [
                s.jsx("rect", { x: "3.5", y: "4", width: "21", height: "20", rx: "3" }),
                s.jsx("circle", { cx: "14", cy: "12", r: "3.4", fill: e ? "#fff" : "none" }),
                s.jsx("path", {
                    d: "M8.4 20.4c.9-2.5 3-4 5.6-4s4.7 1.5 5.6 4",
                    fill: "none",
                    stroke: e ? "#fff" : "currentColor",
                    strokeWidth: "1.7",
                    strokeLinecap: "round",
                }),
            ],
        }),
    Aa = ({ on: e }) =>
        s.jsxs("svg", {
            ...ye(),
            fill: e ? "currentColor" : "none",
            stroke: "currentColor",
            strokeWidth: e ? 0 : 1.7,
            children: [
                s.jsx("circle", { cx: "14", cy: "14", r: "10.5" }),
                s.jsx("path", {
                    d: "M18.4 9.6 12.6 12l-2.4 5.8 5.8-2.4 2.4-5.8Z",
                    fill: e ? "#fff" : "none",
                    stroke: e ? "none" : "currentColor",
                    strokeWidth: "1.7",
                    strokeLinejoin: "round",
                }),
            ],
        }),
    za = ({ on: e }) =>
        s.jsxs("svg", {
            ...ye(),
            fill: e ? "currentColor" : "none",
            stroke: "currentColor",
            strokeWidth: e ? 0 : 1.7,
            children: [
                s.jsx("circle", { cx: "14", cy: "9.6", r: "4.6" }),
                s.jsx("path", { d: "M4.6 24c0-4.4 4.2-8 9.4-8s9.4 3.6 9.4 8" }),
            ],
        }),
    Wa = () =>
        s.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 28 28",
            fill: "currentColor",
            style: Cs,
            "aria-hidden": !0,
            children: [
                s.jsx("circle", { cx: "9", cy: "9", r: "4.2" }),
                s.jsx("circle", { cx: "19.4", cy: "9", r: "3.1", opacity: ".55" }),
                s.jsx("circle", { cx: "9", cy: "19.4", r: "3.1", opacity: ".55" }),
                s.jsx("circle", { cx: "19.4", cy: "19.4", r: "4.2" }),
            ],
        }),
    U = (e) => () =>
        s.jsx("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 28 28",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: Cs,
            "aria-hidden": !0,
            children: e,
        }),
    Ta = {
        channels: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("rect", { x: "3.5", y: "5.5", width: "21", height: "17", rx: "4" }),
                    s.jsx("path", { d: "M11.5 10.6v6.8l6-3.4-6-3.4Z", fill: "currentColor", stroke: "none" }),
                ],
            }),
        ),
        live: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "14", cy: "14", r: "2.6", fill: "currentColor", stroke: "none" }),
                    s.jsx("path", {
                        d: "M8.4 8.4a8 8 0 0 0 0 11.2M19.6 8.4a8 8 0 0 1 0 11.2M4.8 4.8a13 13 0 0 0 0 18.4M23.2 4.8a13 13 0 0 1 0 18.4",
                    }),
                ],
            }),
        ),
        scan: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("path", {
                        d: "M4.5 9.5v-3a2 2 0 0 1 2-2h3M18.5 4.5h3a2 2 0 0 1 2 2v3M23.5 18.5v3a2 2 0 0 1-2 2h-3M9.5 23.5h-3a2 2 0 0 1-2-2v-3",
                    }),
                    s.jsx("path", { d: "M4.5 14h19" }),
                ],
            }),
        ),
        shake: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("rect", { x: "9.5", y: "4.5", width: "9", height: "19", rx: "2.4" }),
                    s.jsx("path", {
                        d: "M5.2 10.5 3.4 9M5.2 17.5 3.4 19M22.8 10.5 24.6 9M22.8 17.5 24.6 19",
                    }),
                ],
            }),
        ),
        look: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("path", {
                        d: "M2.5 14S6.8 7.5 14 7.5 25.5 14 25.5 14 21.2 20.5 14 20.5 2.5 14 2.5 14Z",
                    }),
                    s.jsx("circle", { cx: "14", cy: "14", r: "3.2" }),
                ],
            }),
        ),
        search: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "12.5", cy: "12.5", r: "7.5" }),
                    s.jsx("path", { d: "M18.2 18.2 24 24" }),
                ],
            }),
        ),
        shop: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("path", { d: "M5.5 9.5h17l1.2 12.2a2 2 0 0 1-2 2.3H6.3a2 2 0 0 1-2-2.3L5.5 9.5Z" }),
                    s.jsx("path", { d: "M10 11.6V8.4a4 4 0 0 1 8 0v3.2" }),
                ],
            }),
        ),
        game: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("rect", { x: "2.5", y: "8.5", width: "23", height: "12", rx: "5" }),
                    s.jsx("path", { d: "M8 12.5v4M6 14.5h4M18.5 13.5h.01M21 16h.01" }),
                ],
            }),
        ),
        pay: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("rect", { x: "3.5", y: "6.5", width: "21", height: "15", rx: "3" }),
                    s.jsx("path", { d: "M3.5 11.5h21M18.5 16.5h3" }),
                ],
            }),
        ),
        fav: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("path", { d: "M14 3.8 23.5 9v10L14 24.2 4.5 19V9L14 3.8Z" }),
                    s.jsx("path", { d: "M4.5 9 14 14.2 23.5 9M14 14.2v10" }),
                ],
            }),
        ),
        newfriend: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "11.5", cy: "10", r: "4.5" }),
                    s.jsx("path", { d: "M3.5 23c.8-4.2 4-6.8 8-6.8 1.6 0 3 .4 4.2 1.1M21 15.5v7M17.5 19h7" }),
                ],
            }),
        ),
        chatonly: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "11.5", cy: "10", r: "4.5" }),
                    s.jsx("path", {
                        d: "M3.5 23c.8-4.2 4-6.8 8-6.8s7.2 2.6 8 6.8M19.5 6.5l4 4M23.5 6.5l-4 4",
                    }),
                ],
            }),
        ),
        groups: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "10", cy: "10.5", r: "3.8" }),
                    s.jsx("circle", { cx: "19", cy: "11.5", r: "3" }),
                    s.jsx("path", {
                        d: "M3.5 22.5c.6-3.6 3.3-5.8 6.5-5.8s5.9 2.2 6.5 5.8M17.5 17c3.3-.4 6.2 1.6 7 5.5",
                    }),
                ],
            }),
        ),
        tags: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("path", { d: "M4.5 5.5v8.2l10 10 9.2-9.2-10-10H5.5a1 1 0 0 0-1 1Z" }),
                    s.jsx("circle", { cx: "10", cy: "10", r: "1.6", fill: "currentColor", stroke: "none" }),
                ],
            }),
        ),
        official: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "14", cy: "11", r: "6.5" }),
                    s.jsx("path", { d: "M9.8 16.2 7 24l7-3 7 3-2.8-7.8" }),
                ],
            }),
        ),
        voice: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "14", cy: "14", r: "11" }),
                    s.jsx("path", { d: "M11 10.4a5 5 0 0 1 0 7.2M14.4 8a8.4 8.4 0 0 1 0 12" }),
                ],
            }),
        ),
        smile: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "14", cy: "14", r: "11" }),
                    s.jsx("path", { d: "M10.2 12h.01M17.8 12h.01M9.4 16.4a5.6 5.6 0 0 0 9.2 0" }),
                ],
            }),
        ),
        plus: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "14", cy: "14", r: "11" }),
                    s.jsx("path", { d: "M14 9v10M9 14h10" }),
                ],
            }),
        ),
        qr: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("rect", { x: "4.5", y: "4.5", width: "7.5", height: "7.5", rx: "1" }),
                    s.jsx("rect", { x: "16", y: "4.5", width: "7.5", height: "7.5", rx: "1" }),
                    s.jsx("rect", { x: "4.5", y: "16", width: "7.5", height: "7.5", rx: "1" }),
                    s.jsx("path", { d: "M16 16h3v3M23.5 16v.01M16 23.5h3M22 20.5v3h1.5" }),
                ],
            }),
        ),
        cards: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("rect", { x: "3.5", y: "8.5", width: "21", height: "13", rx: "2.6" }),
                    s.jsx("path", { d: "M7 5.5h14M3.5 13.5h21" }),
                ],
            }),
        ),
        emoji: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "14", cy: "14", r: "10" }),
                    s.jsx("path", { d: "M10 12h.01M18 12h.01M9.6 17a5.6 5.6 0 0 0 8.8 0" }),
                ],
            }),
        ),
        settings: U(
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx("circle", { cx: "14", cy: "14", r: "3.6" }),
                    s.jsx("path", {
                        d: "M14 3.5v3M14 21.5v3M24.5 14h-3M6.5 14h-3M21.4 6.6l-2.1 2.1M8.7 19.3l-2.1 2.1M21.4 21.4l-2.1-2.1M8.7 8.7 6.6 6.6",
                    }),
                ],
            }),
        ),
    };
function Ds({ id: e }) {
    const t = Ta[e];
    return t ? s.jsx(t, {}) : null;
}
function Te({ id: e }) {
    const t = Ca[e] || Dc;
    return s.jsx(t, {});
}
const ve = (e) => String(e).padStart(2, "0"),
    _a = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
function Pe(e) {
    const t = new Date(e || 0);
    return `${ve(t.getHours())}:${ve(t.getMinutes())}`;
}
function Ps(e, t = Date.now()) {
    if (!e) return "";
    const c = new Date(e),
        n = new Date(t);
    n.setHours(0, 0, 0, 0);
    const r = n.getTime() - new Date(e).setHours(0, 0, 0, 0);
    return r <= 0
        ? Pe(e)
        : r <= 864e5
          ? "昨天"
          : r < 7 * 864e5
            ? _a[c.getDay()]
            : c.getFullYear() === new Date(t).getFullYear()
              ? `${c.getMonth() + 1}/${c.getDate()}`
              : `${c.getFullYear()}/${c.getMonth() + 1}/${c.getDate()}`;
}
function be(e, t = Date.now()) {
    const c = Ps(e, t),
        n = Pe(e);
    return c === n ? n : `${c} ${n}`;
}
function Ce(e) {
    const t = new Date(e || 0);
    return `${t.getFullYear()}年${t.getMonth() + 1}月${t.getDate()}日 ${ve(t.getHours())}:${ve(t.getMinutes())}`;
}
function Ia(e, t = Date.now()) {
    const c = t - (e || 0);
    if (c < 864e5) return "今天";
    if (c < 7 * 864e5) return "过去 7 天";
    if (c < 30 * 864e5) return "过去 30 天";
    const n = new Date(e).getFullYear();
    return n === new Date(t).getFullYear() ? "今年早些时候" : `${n} 年`;
}
const $e = (e) =>
        String(e || "·")
            .trim()
            .slice(0, 1),
    Da = (e) =>
        String(e || "")
            .replace(/\s+/g, " ")
            .trim();
function H({ back: e, actions: t }) {
    return s.jsxs("div", {
        className: "cp-float",
        children: [
            e
                ? s.jsx("button", {
                      className: "cp-gbtn",
                      onClick: e,
                      "aria-label": "返回",
                      children: s.jsx(bs, { size: 23, strokeWidth: 2.4 }),
                  })
                : s.jsx("span", {}),
            s.jsx("div", { className: "cp-float-r", children: t }),
        ],
    });
}
function es({ text: e, sub: t }) {
    return s.jsxs(s.Fragment, {
        children: [
            s.jsx("div", { className: "cp-title", children: e }),
            t ? s.jsx("div", { className: "cp-title-sub", children: t }) : null,
        ],
    });
}
function os({ title: e, chevron: t = !1, right: c }) {
    return s.jsxs("div", {
        className: "cp-sect",
        children: [
            s.jsxs("h2", { children: [e, t ? s.jsx(Q, { size: 20, strokeWidth: 2.6 }) : null] }),
            s.jsx("div", { className: "cp-sect-r", children: c }),
        ],
    });
}
function Ls({ children: e }) {
    return s.jsx("div", { className: "cp-bottom", children: e });
}
function De({ value: e, onChange: t, placeholder: c = "搜索" }) {
    return s.jsxs("label", {
        className: "cp-search",
        children: [
            s.jsx(us, { size: 18, strokeWidth: 2.4 }),
            s.jsx("input", {
                value: e,
                onChange: (n) => t(n.target.value),
                placeholder: c,
                style: {
                    flex: 1,
                    minWidth: 0,
                    border: 0,
                    background: "none",
                    outline: "none",
                    font: "inherit",
                    color: "var(--cp-text)",
                },
            }),
        ],
    });
}
function is({ busy: e, onClick: t, label: c = "重新生成" }) {
    return s.jsx("button", {
        className: "cp-gbtn",
        onClick: t,
        disabled: e,
        "aria-label": c,
        title: c,
        children: s.jsx(J, { size: 18, strokeWidth: 2.2, className: e ? "cp-spin" : "" }),
    });
}
function Me({ text: e, known: t = "" }) {
    return s.jsx(ft, { className: "cp-tr", text: e, known: t, open: !0, labels: ["翻译", "收起翻译"] });
}
function Bs({ tr: e }) {
    return e != null && e.any
        ? s.jsx("button", {
              className: `cp-gbtn btn-plain cp-trbtn ${e.on ? "on" : ""}`,
              onClick: e.toggle,
              disabled: e.busy,
              "aria-label": e.on ? "收起翻译" : "翻译整段",
              title: e.on ? "收起翻译" : "翻译整段",
              children: e.busy
                  ? s.jsx(J, { size: 16, strokeWidth: 2.2, className: "cp-spin" })
                  : s.jsx("span", { children: "译" }),
          })
        : null;
}
function Qs({ text: e }) {
    return e ? s.jsx("span", { className: "cp-tr-line", children: e }) : null;
}
function xs({ title: e, children: t, action: c }) {
    return s.jsxs("div", { className: "cp-empty", children: [s.jsx("b", { children: e }), t, c] });
}
function Xs({ src: e, size: t = 30 }) {
    return s.jsx("span", {
        className: "cp-msgav",
        children: e ? s.jsx(hs, { src: e, alt: "" }) : s.jsx($a, { size: t }),
    });
}
function Re(e) {
    const t = v.useRef(null);
    return (
        v.useEffect(() => {
            const c = t.current;
            c && (c.scrollTop = c.scrollHeight);
        }, [e]),
        t
    );
}
function Fa({ hint: e = "这是他的手机 · 只能看，不能发" }) {
    return s.jsxs("div", {
        className: "cp-compose",
        children: [
            s.jsx("span", {
                className: "cp-compose-plus",
                children: s.jsx(Be, { size: 19, strokeWidth: 2.2 }),
            }),
            s.jsx("span", { className: "cp-compose-field", children: e }),
        ],
    });
}
function La(e, t) {
    return e.map((c, n) => {
        const r = e[n + 1];
        return { m: c, tail: !r || t(r) !== t(c) };
    });
}
function Ba({ at: e }) {
    const t = Ps(e),
        c = Pe(e);
    return s.jsx("div", {
        className: "cp-msg-time",
        children: t === c ? c : s.jsxs(s.Fragment, { children: [s.jsx("b", { children: t }), c] }),
    });
}
function te({ what: e, busy: t, onGen: c }) {
    return t
        ? s.jsx(xs, {
              title: `正在生成${e}`,
              children: s.jsxs("span", {
                  className: "cp-typing",
                  children: [s.jsx("span", {}), s.jsx("span", {}), s.jsx("span", {})],
              }),
          })
        : s.jsx(xs, {
              title: `${e}还是空的`,
              action: s.jsxs("button", {
                  className: "cp-gpill",
                  onClick: c,
                  children: [s.jsx(J, { size: 16 }), "生成", e],
              }),
              children: "这一块在别处没有原始数据，要按他的人设和你们之间发生过的事现长出来。会花一次调用。",
          });
}
function Pa({ phone: e, busy: t, onGen: c, onExit: n, onForward: r }) {
    const [h, g] = v.useState({ kind: "folders" }),
        [x, u] = v.useState(""),
        [p, A] = v.useState(!1),
        m = e.notes.items || [],
        o = e.notes.folders || [],
        b = m.filter((j) => j.private).length;
    if (!m.length)
        return s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll",
                    children: [
                        s.jsx(es, { text: "备忘录" }),
                        s.jsx(te, { what: "备忘录", busy: t, onGen: c }),
                    ],
                }),
                s.jsx(H, { back: n, actions: s.jsx(is, { busy: t, onClick: c }) }),
            ],
        });
    const _ = (j) =>
        j === "__private"
            ? m.filter((d) => d.private)
            : m.filter((d) => !d.private && (j === "__all" ? !0 : (d.folderId || "") === j));
    if (h.kind === "note") {
        const j = m.find((z) => z.id === h.id);
        if (!j)
            return s.jsxs("div", {
                className: "cp-screen push",
                children: [
                    s.jsx("div", {
                        className: "cp-scroll",
                        children: s.jsx(xs, {
                            title: "这条不在了",
                            children: "备忘录重新生成过，原来那条没有对应的新条目。",
                        }),
                    }),
                    s.jsx(H, { back: () => g({ kind: "folders" }) }),
                ],
            });
        const d = String(j.body || "").trim();
        return s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsx("div", {
                    className: "cp-scroll tight",
                    children: s.jsxs("div", {
                        className: "cp-note-detail selectable",
                        children: [
                            s.jsx("time", { children: Ce(j.updatedAt) }),
                            s.jsx("h1", { children: j.title }),
                            d
                                ? d
                                      .split(
                                          `
`,
                                      )
                                      .map((z, N) =>
                                          z.trim()
                                              ? s.jsx("p", { children: z }, N)
                                              : s.jsx("p", { style: { height: 8, margin: 0 } }, N),
                                      )
                                : s.jsx("p", {
                                      style: { color: "var(--cp-text-3)" },
                                      children: "这条只有标题，没有正文。",
                                  }),
                            s.jsx(Me, {
                                text: [j.title, d].filter(Boolean).join(`
`),
                            }),
                        ],
                    }),
                }),
                s.jsx(H, {
                    back: () => g(h.from),
                    actions: s.jsxs(s.Fragment, {
                        children: [
                            s.jsx("button", {
                                className: "cp-gbtn btn-plain",
                                onClick: () =>
                                    r == null
                                        ? void 0
                                        : r({ app: "notes", title: j.title || "一条备忘录", body: d }),
                                "aria-label": "转发到聊天",
                                children: s.jsx(ce, { size: 18, strokeWidth: 2.2 }),
                            }),
                            s.jsx("span", {
                                className: "cp-gbtn",
                                children: s.jsx(Tc, { size: 20, strokeWidth: 2.4 }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }
    if (h.kind === "list" && h.folderId === "__private" && !p)
        return s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll",
                    children: [
                        s.jsx(es, { text: h.title }),
                        s.jsxs("div", {
                            className: "cp-note-lock",
                            children: [
                                s.jsx(js, { size: 34, strokeWidth: 1.6 }),
                                s.jsx("b", { children: "此文件夹已锁定" }),
                                s.jsxs("span", { children: [b, " 条备忘录"] }),
                                s.jsx("button", {
                                    type: "button",
                                    className: "cp-note-lock-btn",
                                    onClick: () => A(!0),
                                    children: "查看备忘录",
                                }),
                            ],
                        }),
                    ],
                }),
                s.jsx(H, { back: () => g({ kind: "folders" }) }),
            ],
        });
    if (h.kind === "list") {
        const j = x.trim().toLowerCase(),
            d = _(h.folderId).filter((k) => !j || `${k.title} ${k.body}`.toLowerCase().includes(j)),
            z = d.filter((k) => k.pinned).sort((k, W) => W.updatedAt - k.updatedAt),
            N = d.filter((k) => !k.pinned).sort((k, W) => W.updatedAt - k.updatedAt),
            $ = [];
        N.forEach((k) => {
            const W = Ia(k.updatedAt),
                y = $.find((S) => S.k === W);
            y ? y.rows.push(k) : $.push({ k: W, rows: [k] });
        });
        const C = (k) =>
            s.jsx(
                "button",
                {
                    className: "cp-row cp-note-row",
                    onClick: () => g({ kind: "note", id: k.id, from: h }),
                    children: s.jsxs("div", {
                        className: "cp-row-main",
                        children: [
                            s.jsx("div", { className: "cp-row-title", children: k.title }),
                            s.jsxs("div", {
                                className: "cp-row-sub one",
                                children: [
                                    s.jsx("em", { children: Ps(k.updatedAt) }),
                                    Da(k.body) || "没有其他文本",
                                ],
                            }),
                        ],
                    }),
                },
                k.id,
            );
        return s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll",
                    children: [
                        s.jsx(es, { text: h.title, sub: `${d.length} 条备忘录` }),
                        z.length > 0 &&
                            s.jsxs(s.Fragment, {
                                children: [
                                    s.jsx(os, {
                                        title: "置顶",
                                        right: s.jsx("span", {
                                            className: "cp-chevbtn",
                                            children: s.jsx(Ks, { size: 17, strokeWidth: 2.6 }),
                                        }),
                                    }),
                                    s.jsx("div", { className: "cp-group", children: z.map(C) }),
                                ],
                            }),
                        $.map((k) =>
                            s.jsxs(
                                Fs.Fragment,
                                {
                                    children: [
                                        s.jsx(os, { title: k.k }),
                                        s.jsx("div", { className: "cp-group", children: k.rows.map(C) }),
                                    ],
                                },
                                k.k,
                            ),
                        ),
                        d.length === 0 && s.jsx(xs, { title: "没有匹配的", children: "换个词试试。" }),
                    ],
                }),
                s.jsx(H, {
                    back: () => g({ kind: "folders" }),
                    actions: s.jsx(is, { busy: t, onClick: c, label: "重新生成备忘录" }),
                }),
                s.jsx(Ls, { children: s.jsx(De, { value: x, onChange: u }) }),
            ],
        });
    }
    const w = (j) => _(j).length;
    return s.jsxs("div", {
        className: "cp-screen push",
        children: [
            s.jsxs("div", {
                className: "cp-scroll",
                children: [
                    s.jsx(es, { text: "文件夹" }),
                    s.jsx(os, { title: "这台手机" }),
                    s.jsxs("div", {
                        className: "cp-group",
                        children: [
                            s.jsxs("button", {
                                className: "cp-row lead",
                                onClick: () => g({ kind: "list", folderId: "__all", title: "全部备忘录" }),
                                children: [
                                    s.jsx("span", {
                                        className: "cp-row-ic",
                                        children: s.jsx(We, { size: 21, strokeWidth: 1.8 }),
                                    }),
                                    s.jsx("div", {
                                        className: "cp-row-main",
                                        children: s.jsx("div", {
                                            className: "cp-row-title",
                                            children: "全部备忘录",
                                        }),
                                    }),
                                    s.jsx("span", { className: "cp-row-val", children: m.length - b }),
                                    s.jsx(Q, { size: 17, strokeWidth: 2.6, className: "cp-chev" }),
                                ],
                            }),
                            o.map((j) =>
                                s.jsxs(
                                    "button",
                                    {
                                        className: "cp-row lead",
                                        onClick: () => g({ kind: "list", folderId: j.id, title: j.name }),
                                        children: [
                                            s.jsx("span", {
                                                className: "cp-row-ic",
                                                children: s.jsx(We, { size: 21, strokeWidth: 1.8 }),
                                            }),
                                            s.jsx("div", {
                                                className: "cp-row-main",
                                                children: s.jsx("div", {
                                                    className: "cp-row-title",
                                                    children: j.name,
                                                }),
                                            }),
                                            s.jsx("span", { className: "cp-row-val", children: w(j.id) }),
                                            s.jsx(Q, { size: 17, strokeWidth: 2.6, className: "cp-chev" }),
                                        ],
                                    },
                                    j.id,
                                ),
                            ),
                            w("") > 0 &&
                                s.jsxs("button", {
                                    className: "cp-row lead",
                                    onClick: () => g({ kind: "list", folderId: "", title: "备忘录" }),
                                    children: [
                                        s.jsx("span", {
                                            className: "cp-row-ic",
                                            children: s.jsx(We, { size: 21, strokeWidth: 1.8 }),
                                        }),
                                        s.jsx("div", {
                                            className: "cp-row-main",
                                            children: s.jsx("div", {
                                                className: "cp-row-title",
                                                children: "备忘录",
                                            }),
                                        }),
                                        s.jsx("span", { className: "cp-row-val", children: w("") }),
                                        s.jsx(Q, { size: 17, strokeWidth: 2.6, className: "cp-chev" }),
                                    ],
                                }),
                            b > 0 &&
                                s.jsxs("button", {
                                    className: "cp-row lead",
                                    onClick: () =>
                                        g({ kind: "list", folderId: "__private", title: "私密备忘录" }),
                                    children: [
                                        s.jsx("span", {
                                            className: "cp-row-ic",
                                            children: s.jsx(js, { size: 20, strokeWidth: 1.9 }),
                                        }),
                                        s.jsx("div", {
                                            className: "cp-row-main",
                                            children: s.jsx("div", {
                                                className: "cp-row-title",
                                                children: "私密备忘录",
                                            }),
                                        }),
                                        s.jsx("span", { className: "cp-row-val", children: p ? b : "" }),
                                        s.jsx(Q, { size: 17, strokeWidth: 2.6, className: "cp-chev" }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            s.jsx(H, { back: n, actions: s.jsx(is, { busy: t, onClick: c, label: "重新生成备忘录" }) }),
            s.jsx(Ls, {
                children: s.jsx(De, {
                    value: x,
                    onChange: (j) => {
                        (u(j), j && g({ kind: "list", folderId: "__all", title: "全部备忘录" }));
                    },
                }),
            }),
        ],
    });
}
const Ra = { service: "服务号码", person: "未存号码", unknown: "陌生号码" };
function Ea({ phone: e, busy: t, onGen: c, onExit: n, onForward: r }) {
    const [h, g] = v.useState(null),
        [x, u] = v.useState(""),
        p = e.sms.threads || [],
        A = Re(h),
        m = p.find((j) => j.id === h),
        o = we(v.useMemo(() => ((m == null ? void 0 : m.msgs) || []).map((j) => j.text), [m]));
    if (!p.length)
        return s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll",
                    children: [s.jsx(es, { text: "信息" }), s.jsx(te, { what: "短信", busy: t, onGen: c })],
                }),
                s.jsx(H, { back: n, actions: s.jsx(is, { busy: t, onClick: c }) }),
            ],
        });
    const b = p.find((j) => j.id === h);
    if (b) {
        const j = La(b.msgs, (d) => d.dir);
        return s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll tight has-compose",
                    ref: A,
                    children: [
                        s.jsxs("div", {
                            className: "cp-thread-head",
                            children: [
                                s.jsx(Xs, { size: 34 }),
                                s.jsxs("b", {
                                    children: [
                                        b.name,
                                        s.jsx(Q, { size: 14, strokeWidth: 2.8, className: "cp-chev" }),
                                    ],
                                }),
                                s.jsx(V, { text: b.name, className: "cp-head-tr" }),
                                s.jsx("small", { children: b.number || Ra[b.kind] || "" }),
                            ],
                        }),
                        s.jsx("div", {
                            className: "cp-thread",
                            children: j.map(({ m: d, tail: z }, N) => {
                                const $ = b.msgs[N - 1],
                                    C = !$ || d.at - $.at > 30 * 6e4;
                                return s.jsxs(
                                    Fs.Fragment,
                                    {
                                        children: [
                                            C && s.jsx(Ba, { at: d.at }),
                                            s.jsxs("div", {
                                                className: `cp-msg selectable ${d.dir === "out" ? "out" : "in"}${z ? " tail" : ""}`,
                                                children: [d.text, s.jsx(Qs, { text: o.trOf(d.text) })],
                                            }),
                                        ],
                                    },
                                    d.id,
                                );
                            }),
                        }),
                    ],
                }),
                s.jsx(H, {
                    back: () => g(null),
                    actions: r
                        ? s.jsxs(s.Fragment, {
                              children: [
                                  s.jsx(Bs, { tr: o }),
                                  s.jsx("button", {
                                      className: "cp-gbtn btn-plain",
                                      "aria-label": "转发到聊天",
                                      onClick: () =>
                                          r({
                                              app: "sms",
                                              title: `他和「${b.name}」的短信`,
                                              body: (b.msgs || [])
                                                  .slice(-40)
                                                  .map((d) => `${d.dir === "out" ? "他" : b.name}：${d.text}`)
                                                  .join(`
`),
                                          }),
                                      children: s.jsx(ce, { size: 18, strokeWidth: 2.2 }),
                                  }),
                              ],
                          })
                        : s.jsx(Bs, { tr: o }),
                }),
                s.jsx(Fa, {}),
            ],
        });
    }
    const _ = x.trim().toLowerCase(),
        w = p.filter(
            (j) =>
                !_ ||
                `${j.name} ${j.number} ${j.msgs.map((d) => d.text).join(" ")}`.toLowerCase().includes(_),
        );
    return (
        p.filter((j) => j.unread).length,
        s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll",
                    children: [
                        s.jsx(es, { text: "信息" }),
                        s.jsx("div", {
                            className: "cp-msglist",
                            children: w.map((j) => {
                                const d = j.msgs[j.msgs.length - 1];
                                return s.jsxs(
                                    "button",
                                    {
                                        className: "cp-msgrow",
                                        onClick: () => g(j.id),
                                        children: [
                                            s.jsx("span", {
                                                className: `cp-msgrow-dot ${j.unread ? "" : "off"}`,
                                            }),
                                            s.jsx(Xs, {}),
                                            s.jsxs("span", {
                                                className: "cp-msgrow-main",
                                                children: [
                                                    s.jsxs("span", {
                                                        className: "cp-msgrow-top",
                                                        children: [
                                                            s.jsxs("span", {
                                                                className: "cp-msgrow-name",
                                                                children: [
                                                                    j.name,
                                                                    s.jsx(rs, { text: j.name }),
                                                                ],
                                                            }),
                                                            s.jsx("span", {
                                                                className: "cp-msgrow-time",
                                                                children: Ps(d == null ? void 0 : d.at),
                                                            }),
                                                            s.jsx(Q, {
                                                                size: 15,
                                                                strokeWidth: 2.6,
                                                                className: "cp-msgrow-chev",
                                                            }),
                                                        ],
                                                    }),
                                                    s.jsxs("span", {
                                                        className: "cp-msgrow-prev",
                                                        children: [
                                                            (d == null ? void 0 : d.dir) === "out"
                                                                ? "我："
                                                                : "",
                                                            d == null ? void 0 : d.text,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    j.id,
                                );
                            }),
                        }),
                        w.length === 0 && s.jsx(xs, { title: "没有匹配的", children: "换个词试试。" }),
                    ],
                }),
                s.jsx(H, { back: n, actions: s.jsx(is, { busy: t, onClick: c, label: "重新生成短信" }) }),
                s.jsx(Ls, { children: s.jsx(De, { value: x, onChange: u }) }),
            ],
        })
    );
}
function me({ p: e, onClick: t, big: c = !1, dark: n = !1 }) {
    return s.jsxs("button", {
        className: `cp-tile ${c ? "big" : ""}${n ? " dark" : ""}`,
        onClick: t,
        children: [
            s.jsx("span", {
                className: "cp-tile-cap",
                children: s.jsxs("span", {
                    children: [e.caption, s.jsx(V, { text: e.caption, className: "cp-tile-tr" })],
                }),
            }),
            e.favorite && s.jsx(ge, { size: 12, fill: "currentColor", className: "cp-tile-fav" }),
        ],
    });
}
function Oa({ phone: e, busy: t, onGen: c, onExit: n, onForward: r }) {
    var N;
    const [h, g] = v.useState("collections"),
        [x, u] = v.useState(null),
        [p, A] = v.useState(null),
        [m, o] = v.useState("closed"),
        b = () => {
            var $;
            m !== "open" &&
                (o("scanning"),
                setTimeout(
                    () => o("open"),
                    ($ = window.matchMedia) != null &&
                        $.call(window, "(prefers-reduced-motion: reduce)").matches
                        ? 50
                        : 1100,
                ));
        },
        _ = e.photos.items || [],
        w = e.photos.albums || [],
        j = e.photos.private || [];
    if (!_.length)
        return s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll",
                    children: [
                        s.jsx(es, { text: "照片" }),
                        s.jsx(te, { what: "相册", busy: t, onGen: c }),
                        s.jsx("div", {
                            className: "cp-note",
                            children:
                                "这一页不放真的图片 —— 每一条只有一句「这是什么」。 相册的信息本来就在**他为什么留着这张**，不在这张好不好看。",
                        }),
                    ],
                }),
                s.jsx(H, { back: n, actions: s.jsx(is, { busy: t, onClick: c }) }),
            ],
        });
    const d = _.filter(($) => $.favorite),
        z = x ? _.filter(($) => $.albumId === x) : _;
    return m === "open"
        ? s.jsxs("div", {
              className: "cp-screen push",
              children: [
                  s.jsxs("div", {
                      className: "cp-scroll",
                      children: [
                          s.jsx(es, { text: "私密", sub: `${j.length} 条 · 已用面容 ID 解锁` }),
                          s.jsx("div", { style: { height: 14 } }),
                          s.jsx("div", {
                              className: "cp-grid3",
                              children: j.map(($) =>
                                  s.jsx(me, { p: $, dark: !0, onClick: () => A($) }, $.id),
                              ),
                          }),
                          s.jsx("div", { className: "cp-note", children: "离开这一页会重新上锁。" }),
                      ],
                  }),
                  s.jsx(H, { back: () => o("closed") }),
                  p && s.jsx(_e, { p, onClose: () => A(null), onForward: r }),
              ],
          })
        : x || h === "library"
          ? s.jsxs("div", {
                className: "cp-screen push",
                children: [
                    s.jsxs("div", {
                        className: "cp-scroll",
                        children: [
                            s.jsx(es, {
                                text: x
                                    ? ((N = w.find(($) => $.id === x)) == null ? void 0 : N.name) || "相册"
                                    : "图库",
                                sub: `${z.length} 条`,
                            }),
                            s.jsx("div", { style: { height: 14 } }),
                            s.jsx("div", {
                                className: "cp-grid3",
                                children: z.map(($) => s.jsx(me, { p: $, onClick: () => A($) }, $.id)),
                            }),
                        ],
                    }),
                    s.jsx(H, {
                        back: x ? () => u(null) : n,
                        actions: s.jsx(is, { busy: t, onClick: c, label: "重新编排相册" }),
                    }),
                    !x &&
                        s.jsxs(Ls, {
                            children: [
                                s.jsxs("div", {
                                    className: "cp-seg",
                                    children: [
                                        s.jsxs("button", {
                                            className: h === "library" ? "on" : "",
                                            onClick: () => g("library"),
                                            children: [s.jsx(bc, { size: 17 }), "图库"],
                                        }),
                                        s.jsxs("button", {
                                            className: h === "collections" ? "on" : "",
                                            onClick: () => g("collections"),
                                            children: [s.jsx(fc, { size: 17 }), "合集"],
                                        }),
                                    ],
                                }),
                                s.jsx("span", {
                                    className: "cp-fab",
                                    children: s.jsx(us, { size: 19, strokeWidth: 2.4 }),
                                }),
                            ],
                        }),
                    p && s.jsx(_e, { p, onClose: () => A(null), onForward: r }),
                ],
            })
          : s.jsxs("div", {
                className: "cp-screen push",
                children: [
                    s.jsxs("div", {
                        className: "cp-scroll",
                        children: [
                            s.jsx(es, { text: "合集" }),
                            s.jsx(os, {
                                title: "回忆",
                                chevron: !0,
                                right: s.jsx("span", {
                                    className: "cp-chevbtn",
                                    children: s.jsx(Ks, { size: 17, strokeWidth: 2.6 }),
                                }),
                            }),
                            s.jsx("div", {
                                className: "cp-mem-scroll",
                                children: _.slice(0, 4).map(($) =>
                                    s.jsx(me, { p: $, big: !0, onClick: () => A($) }, $.id),
                                ),
                            }),
                            d.length > 0 &&
                                s.jsxs(s.Fragment, {
                                    children: [
                                        s.jsx(os, {
                                            title: "精选",
                                            chevron: !0,
                                            right: s.jsxs(s.Fragment, {
                                                children: [
                                                    s.jsx("span", {
                                                        className: "cp-editbtn",
                                                        children: "编辑",
                                                    }),
                                                    s.jsx("span", {
                                                        className: "cp-chevbtn",
                                                        children: s.jsx(Ks, { size: 17, strokeWidth: 2.6 }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        s.jsx("div", {
                                            className: "cp-pin-grid",
                                            children: d
                                                .slice(0, 6)
                                                .map(($) => s.jsx(me, { p: $, onClick: () => A($) }, $.id)),
                                        }),
                                    ],
                                }),
                            s.jsx(os, {
                                title: "相册",
                                chevron: !0,
                                right: s.jsx("span", {
                                    className: "cp-chevbtn",
                                    children: s.jsx(Ks, { size: 17, strokeWidth: 2.6 }),
                                }),
                            }),
                            s.jsx("div", {
                                className: "cp-mem-scroll",
                                style: { gridAutoColumns: "43%" },
                                children: w.map(($) => {
                                    const C = _.filter((k) => k.albumId === $.id);
                                    return s.jsx(
                                        "button",
                                        {
                                            className: "cp-tile big album",
                                            onClick: () => u($.id),
                                            children: s.jsx("span", {
                                                className: "cp-tile-cap",
                                                children: s.jsxs("span", {
                                                    children: [
                                                        s.jsxs("b", {
                                                            children: [
                                                                $.hidden
                                                                    ? s.jsx(js, {
                                                                          size: 13,
                                                                          style: {
                                                                              marginRight: 5,
                                                                              verticalAlign: -2,
                                                                          },
                                                                      })
                                                                    : null,
                                                                $.name,
                                                            ],
                                                        }),
                                                        s.jsxs("em", { children: [C.length, " 条"] }),
                                                    ],
                                                }),
                                            }),
                                        },
                                        $.id,
                                    );
                                }),
                            }),
                            j.length > 0 &&
                                s.jsxs(s.Fragment, {
                                    children: [
                                        s.jsx(os, { title: "实用工具" }),
                                        s.jsx("div", {
                                            className: "cp-group",
                                            children: s.jsxs("button", {
                                                className: "cp-row btn-plain cp-priv-row",
                                                onClick: b,
                                                children: [
                                                    s.jsx("span", {
                                                        className: "cp-priv-ic",
                                                        children: s.jsx(js, { size: 16, strokeWidth: 2.4 }),
                                                    }),
                                                    s.jsx("span", {
                                                        className: "cp-row-main",
                                                        children: s.jsx("b", { children: "私密" }),
                                                    }),
                                                    s.jsxs("span", {
                                                        className: "cp-row-r",
                                                        children: [
                                                            s.jsx(js, { size: 13 }),
                                                            j.length,
                                                            s.jsx(Q, { size: 16 }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            w.some(($) => $.hidden) &&
                                s.jsxs("div", {
                                    className: "cp-note",
                                    children: [
                                        s.jsx("b", { children: "他有一个隐藏相册。" }),
                                        "密码开的是这台手机，不是他的分类习惯 —— 藏起来的东西也可能只是无聊，点进去看就知道了。",
                                    ],
                                }),
                        ],
                    }),
                    s.jsx(H, { back: n, actions: s.jsx(is, { busy: t, onClick: c, label: "重新编排相册" }) }),
                    s.jsxs(Ls, {
                        children: [
                            s.jsxs("div", {
                                className: "cp-seg",
                                children: [
                                    s.jsxs("button", {
                                        className: h === "library" ? "on" : "",
                                        onClick: () => g("library"),
                                        children: [s.jsx(bc, { size: 17 }), "图库"],
                                    }),
                                    s.jsxs("button", {
                                        className: h === "collections" ? "on" : "",
                                        onClick: () => g("collections"),
                                        children: [s.jsx(fc, { size: 17 }), "合集"],
                                    }),
                                ],
                            }),
                            s.jsx("span", {
                                className: "cp-fab",
                                children: s.jsx(us, { size: 19, strokeWidth: 2.4 }),
                            }),
                        ],
                    }),
                    p && s.jsx(_e, { p, onClose: () => A(null), onForward: r }),
                    m === "scanning" &&
                        s.jsxs("div", {
                            className: "cp-faceid",
                            role: "status",
                            "aria-label": "正在用面容 ID 解锁",
                            children: [
                                s.jsx("span", {
                                    className: "cp-faceid-glyph",
                                    children: s.jsxs("svg", {
                                        width: "64",
                                        height: "64",
                                        viewBox: "0 0 64 64",
                                        "aria-hidden": !0,
                                        children: [
                                            s.jsx("path", {
                                                d: "M6 20V12a6 6 0 0 1 6-6h8M44 6h8a6 6 0 0 1 6 6v8M58 44v8a6 6 0 0 1-6 6h-8M20 58h-8a6 6 0 0 1-6-6v-8",
                                            }),
                                            s.jsx("path", {
                                                className: "cp-faceid-face",
                                                d: "M23 24v4M41 24v4M32 26v10h-3M25 43c4 3 10 3 14 0",
                                            }),
                                        ],
                                    }),
                                }),
                                s.jsx("b", { children: "面容 ID" }),
                            ],
                        }),
                ],
            });
}
function _e({ p: e, onClose: t, onForward: c }) {
    return s.jsxs("div", {
        className: "cp-lightbox",
        children: [
            s.jsx("div", {
                className: "cp-lightbox-main",
                children: s.jsx("div", {
                    className: `cp-lightbox-tile${e.private ? " dark" : ""}`,
                    children: s.jsxs("span", {
                        children: [e.caption, s.jsx(V, { text: e.caption, className: "cp-tile-tr" })],
                    }),
                }),
            }),
            s.jsxs("div", {
                className: "cp-lightbox-cap",
                children: [s.jsx(Me, { text: e.caption }), s.jsx("small", { children: Ce(e.at) })],
            }),
            s.jsx(H, {
                back: t,
                actions: c
                    ? s.jsx("button", {
                          className: "cp-gbtn btn-plain",
                          "aria-label": "转发到聊天",
                          onClick: () => c({ app: "photos", title: "他相册里的一张", body: e.caption || "" }),
                          children: s.jsx(ce, { size: 18, strokeWidth: 2.2 }),
                      })
                    : void 0,
            }),
        ],
    });
}
function Fe(e) {
    var t;
    switch (e.type) {
        case "voice":
            return `［语音］${e.content || ""}`;
        case "sticker":
            return "［表情］";
        case "transfer_card":
            return `［转账 ¥${e.amount}］${e.note || ""}`;
        case "transfer_response":
            return `［转账${e.accepted === !1 ? "被退回" : "已收"}］`;
        case "gift_card":
            return `［礼物］${e.content || ""}${e.note ? ` · ${e.note}` : ""}`;
        case "gift_response":
            return "［礼物已收下］";
        case "location_card":
            return `［位置］${e.location || ""}`;
        case "call_card":
            return `［${e.callKind === "video" ? "视频通话" : "语音通话"}］${e.duration || ""}`;
        case "offline_invite_card":
            return `［见面邀约］${[e.when, e.where].filter(Boolean).join(" · ")}`;
        case "travel_invite_card":
            return `［旅行邀请］${e.dest || ""}`;
        case "game_invite_card":
            return "［组队邀请］";
        case "music_card":
            return `［${e.kind === "lyric" ? "歌词" : e.kind === "invite" ? "一起听" : "音乐"}］${e.kind === "lyric" ? e.line || "" : ((t = e.song) == null ? void 0 : t.title) || ""}`;
        case "phone_request_card":
            return `［想看我手机］${e.status === "granted" ? "我给了" : e.status === "denied" ? "我没给" : ""}`;
        case "phone_quote_card":
            return `［TA 把我手机里的一条甩了出来］${e.title || ""}`;
        case "phone_post_card":
            return `［TA 用我的号发了${e.platform === "moments" ? "朋友圈" : "帖子"}］${e.content || ""}`;
        case "share_card":
            return `［TA 转来的分享］${kt(e)}`;
        case "pay_request_card":
            return `［代付请求 ¥${e.amount || ""}］`;
        case "kinship_card":
            return "［亲属卡］";
        case "html_card":
            return "［TA 做的小网页］";
        case "file_card":
            return `［文件］${e.name || ""}`;
        case "pat":
            return e.content || "［拍一拍］";
        case "tool_card": {
            const c = e.content && typeof e.content == "object" ? e.content.result || {} : {},
                n = c.title || c.url || "";
            return n ? `［链接］${n}` : "［链接］";
        }
        default:
            return typeof e.content == "string" ? e.content : "";
    }
}
const wc = 30;
function ae({ title: e, sub: t, onBack: c, right: n, flat: r = !1 }) {
    return s.jsxs("div", {
        className: `cp-wx-bar${r ? " flat" : ""}`,
        children: [
            s.jsx("button", {
                className: "cp-wx-back",
                onClick: c,
                "aria-label": "返回",
                children: s.jsx(bs, { size: 22, strokeWidth: 2.4 }),
            }),
            s.jsxs("div", {
                className: "cp-wx-title",
                children: [e, t ? s.jsx("small", { children: t }) : null],
            }),
            s.jsx("div", {
                className: "cp-wx-right",
                children: n ?? s.jsx(Tc, { size: 22, strokeWidth: 2 }),
            }),
        ],
    });
}
const Za = [
    ["chats", "微信", Ma],
    ["contacts", "通讯录", Sa],
    ["discover", "发现", Aa],
    ["me", "我", za],
];
function qa({ tab: e, onTab: t, unread: c }) {
    return s.jsx("div", {
        className: "cp-wx-tabbar",
        children: Za.map(([n, r, h]) =>
            s.jsxs(
                "button",
                {
                    className: e === n ? "on" : "",
                    onClick: () => t(n),
                    children: [
                        s.jsxs("span", {
                            className: "cp-wx-tabic",
                            children: [
                                s.jsx(h, { on: e === n }),
                                n === "chats" &&
                                    c > 0 &&
                                    s.jsx("i", { className: "cp-wx-dot", children: c > 99 ? "99+" : c }),
                            ],
                        }),
                        s.jsx("span", { children: r }),
                    ],
                },
                n,
            ),
        ),
    });
}
function As({ src: e, name: t, members: c = 0, group: n = !1, size: r = 44 }) {
    const h = { width: r, height: r, flex: `0 0 ${r}px`, fontSize: Math.round(r * 0.38) };
    if (n) {
        const g = Math.min(4, Math.max(2, c || 3));
        return s.jsx("span", {
            className: "cp-wx-av group",
            style: h,
            children: Array.from({ length: g }).map((x, u) => s.jsx("i", {}, u)),
        });
    }
    return s.jsx("span", {
        className: "cp-wx-av",
        style: h,
        children: e ? s.jsx(hs, { src: e, alt: "" }) : $e(t),
    });
}
function yc({ value: e, onChange: t, placeholder: c = "搜索" }) {
    return s.jsxs("label", {
        className: "cp-wx-search",
        children: [
            s.jsx(us, { size: 15, strokeWidth: 2.6 }),
            s.jsx("input", { value: e, onChange: (n) => t(n.target.value), placeholder: c }),
        ],
    });
}
function Ha(e) {
    const t = e.msgs[e.msgs.length - 1];
    return t
        ? t.dir === "out"
            ? `我: ${t.text}`
            : e.kind === "group" && t.speaker
              ? `${t.speaker}: ${t.text}`
              : t.text
        : "";
}
function Ga(e) {
    const t = new Map();
    for (const c of e) {
        const n = String(c.name || "")
                .trim()
                .slice(0, 1)
                .toUpperCase(),
            r = /^[A-Z]$/.test(n) ? n : "#";
        (t.has(r) || t.set(r, []), t.get(r).push(c));
    }
    return [...t.entries()]
        .sort((c, n) => (c[0] === "#" ? 1 : n[0] === "#" ? -1 : c[0].localeCompare(n[0])))
        .map(([c, n]) => ({
            k: c,
            rows: n.sort((r, h) => String(r.name).localeCompare(String(h.name), "zh")),
        }));
}
const Ua = [
        [["moments", "朋友圈", !0]],
        [
            ["channels", "视频号"],
            ["live", "直播"],
        ],
        [
            ["scan", "扫一扫"],
            ["shake", "摇一摇"],
        ],
        [
            ["look", "看一看"],
            ["search", "搜一搜"],
        ],
        [
            ["shop", "购物"],
            ["game", "游戏"],
        ],
    ],
    Va = [
        [["pay", "服务"]],
        [
            ["fav", "收藏"],
            ["moments", "朋友圈"],
            ["cards", "卡包"],
            ["emoji", "表情"],
        ],
        [["settings", "设置"]],
    ];
function Cc({ icon: e, label: t, onClick: c, right: n, badge: r }) {
    const h = c ? "button" : "div";
    return s.jsxs(h, {
        className: `cp-wx-cell ${c ? "" : "static"}`,
        onClick: c,
        children: [
            s.jsx("span", {
                className: "cp-wx-ic",
                children: e === "moments" ? s.jsx(Wa, {}) : s.jsx(Ds, { id: e }),
            }),
            s.jsx("span", {
                className: "cp-wx-cell-main",
                children: s.jsx("span", {
                    className: "cp-wx-cell-top",
                    children: s.jsx("b", { children: t }),
                }),
            }),
            r ? s.jsx("i", { className: "cp-wx-badge", children: r }) : null,
            n,
            c ? s.jsx(Q, { size: 17, strokeWidth: 2.4, className: "cp-chev" }) : null,
        ],
    });
}
function Ya({
    char: e,
    me: t,
    state: c,
    phone: n,
    busy: r,
    onGen: h,
    momentsBusy: g,
    onGenMoments: x,
    onPostMoment: u,
    altBusy: p,
    onGenAlts: A,
    onExit: m,
    onForward: o,
}) {
    var $s, ks, Ms;
    const [b, _] = v.useState("chats"),
        [w, j] = v.useState(null),
        [d, z] = v.useState(""),
        [N, $] = v.useState(null),
        C = se(t) || ee(t) || "我",
        k = String((($s = n == null ? void 0 : n.wechat) == null ? void 0 : $s.meRemark) || "").trim() || C,
        W = ((ks = n == null ? void 0 : n.wxalts) == null ? void 0 : ks.accounts) || [],
        y = N ? W.find((T) => T.id === N) : null,
        S = y || (n == null ? void 0 : n.wechat) || { contacts: [], threads: [] },
        l = v.useMemo(() => {
            const T = (e.messages || []).filter(
                (R) => R.type !== "narration" && R.role !== "system" && R.type !== "system",
            );
            return T[T.length - 1] || null;
        }, [e.messages]),
        M = v.useMemo(() => {
            const T = y
                    ? null
                    : {
                          id: "__me",
                          real: !0,
                          name: k,
                          avatar: t == null ? void 0 : t.avatar,
                          pinned: !0,
                          muted: !1,
                          unread: 0,
                          kind: "person",
                          at: (l == null ? void 0 : l.createdAt) || 0,
                          preview: l ? `${l.role === "assistant" ? "我: " : ""}${Fe(l)}` : "还没说过话",
                      },
                R = (S.threads || []).map((G) => {
                    var gs;
                    return {
                        id: G.id,
                        thread: G,
                        name: G.remark || G.name,
                        avatar: null,
                        pinned: G.pinned,
                        muted: G.muted,
                        unread: G.unread,
                        kind: G.kind,
                        members: G.members,
                        at: ((gs = G.msgs[G.msgs.length - 1]) == null ? void 0 : gs.at) || 0,
                        preview: Ha(G),
                    };
                }),
                ns = d.trim().toLowerCase();
            return [...(T ? [T] : []), ...R]
                .filter((G) => !ns || `${G.name} ${G.preview}`.toLowerCase().includes(ns))
                .sort((G, gs) => Number(gs.pinned) - Number(G.pinned) || gs.at - G.at);
        }, [S.threads, d, l, k, t == null ? void 0 : t.avatar, y]),
        D = (S.threads || []).reduce((T, R) => T + (R.muted ? 0 : R.unread || 0), 0),
        fs = (T) => {
            ($(T), j(null), z(""), _("chats"));
        };
    if (w === "accounts")
        return s.jsx(Ka, {
            char: e,
            accounts: W,
            current: N,
            decided: (Ms = n == null ? void 0 : n.wxalts) == null ? void 0 : Ms.decided,
            busy: p,
            onGen: A,
            onPick: fs,
            onBack: () => j(null),
        });
    if (w === "thread") return s.jsx(tn, { char: e, me: t, onBack: () => j(null) });
    if (w === "moments")
        return s.jsx(rn, { char: e, me: t, state: c, busy: g, onGen: x, onPost: u, onBack: () => j(null) });
    if (w != null && w.wx) {
        const T = (S.threads || []).find((R) => R.id === w.wx);
        if (T) return s.jsx(Ja, { thread: T, char: e, onBack: () => j(null), onForward: o });
    }
    if (w != null && w.contact) {
        const T = (S.contacts || []).find((R) => R.id === w.contact);
        if (T) return s.jsx(Qa, { contact: T, onBack: () => j(null) });
    }
    const Ns = s.jsx("button", {
            className: "cp-wx-refresh",
            onClick: h,
            disabled: r,
            "aria-label": "刷新微信",
            title: "重新生成他的通讯录和会话",
            children: s.jsx(J, { size: 17, strokeWidth: 2.2, className: r ? "cp-spin" : "" }),
        }),
        Rs = !(S.threads || []).length && !(S.contacts || []).length;
    return s.jsxs("div", {
        className: `cp-screen push cp-wx tab-${b}`,
        children: [
            s.jsx(ae, {
                title:
                    (b === "chats" ? "微信" : b === "contacts" ? "通讯录" : b === "discover" ? "发现" : "") +
                    (y && b !== "me" ? `（${y.nickname}）` : ""),
                onBack: m,
                right: Ns,
                flat: !0,
            }),
            s.jsxs("div", {
                className: "cp-scroll wx-body wx-tabbed",
                children: [
                    b === "chats" &&
                        s.jsxs("div", {
                            className: "cp-wx-list",
                            children: [
                                s.jsx("div", {
                                    className: "cp-wx-searchwrap",
                                    children: s.jsx(yc, { value: d, onChange: z }),
                                }),
                                M.map((T) =>
                                    s.jsxs(
                                        "button",
                                        {
                                            className: `cp-wx-cell chat${T.pinned ? " pinned" : ""}`,
                                            onClick: () => j(T.real ? "thread" : { wx: T.id }),
                                            children: [
                                                s.jsxs("span", {
                                                    className: "cp-wx-avwrap",
                                                    children: [
                                                        s.jsx(As, {
                                                            src: T.avatar,
                                                            name: T.name,
                                                            group: T.kind === "group",
                                                            members: T.members,
                                                            size: 48,
                                                        }),
                                                        T.unread > 0 &&
                                                            (T.muted
                                                                ? s.jsx("i", { className: "cp-wx-mutedot" })
                                                                : s.jsx("i", {
                                                                      className: "cp-wx-badge float",
                                                                      children:
                                                                          T.unread > 99 ? "99+" : T.unread,
                                                                  })),
                                                    ],
                                                }),
                                                s.jsxs("span", {
                                                    className: "cp-wx-cell-main",
                                                    children: [
                                                        s.jsxs("span", {
                                                            className: "cp-wx-cell-top",
                                                            children: [
                                                                s.jsxs("b", {
                                                                    children: [
                                                                        T.name,
                                                                        s.jsx(rs, { text: T.name }),
                                                                    ],
                                                                }),
                                                                s.jsx("time", { children: Ps(T.at) }),
                                                            ],
                                                        }),
                                                        s.jsxs("span", {
                                                            className: "cp-wx-cell-prev",
                                                            children: [
                                                                T.muted
                                                                    ? s.jsx(Ht, {
                                                                          size: 12,
                                                                          strokeWidth: 2.4,
                                                                          className: "cp-wx-mute",
                                                                      })
                                                                    : null,
                                                                T.preview,
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        T.id,
                                    ),
                                ),
                                Rs &&
                                    (y
                                        ? s.jsx(Ne, {
                                              what: "这个号里的会话",
                                              busy: p,
                                              onGen: A,
                                              children: "生成「微信小号」后可查看该账号的通讯录与会话。",
                                          })
                                        : s.jsx(Ne, {
                                              what: "他微信里的其他人",
                                              busy: r,
                                              onGen: h,
                                              children: "生成后可查看他的通讯录、会话与群聊。",
                                          })),
                            ],
                        }),
                    b === "contacts" &&
                        s.jsxs("div", {
                            className: "cp-wx-list",
                            children: [
                                s.jsx("div", {
                                    className: "cp-wx-searchwrap",
                                    children: s.jsx(yc, { value: d, onChange: z }),
                                }),
                                !d.trim() &&
                                    s.jsx("div", {
                                        className: "cp-wx-fixed",
                                        children: [
                                            ["newfriend", "新的朋友"],
                                            ["chatonly", "仅聊天的朋友"],
                                            ["groups", "群聊"],
                                            ["tags", "标签"],
                                            ["official", "公众号"],
                                        ].map(([T, R]) =>
                                            s.jsxs(
                                                "div",
                                                {
                                                    className: "cp-wx-cell static",
                                                    children: [
                                                        s.jsx("span", {
                                                            className: "cp-wx-sq",
                                                            children: s.jsx(Ds, { id: T }),
                                                        }),
                                                        s.jsx("span", {
                                                            className: "cp-wx-cell-main",
                                                            children: s.jsx("span", {
                                                                className: "cp-wx-cell-top",
                                                                children: s.jsx("b", { children: R }),
                                                            }),
                                                        }),
                                                    ],
                                                },
                                                T,
                                            ),
                                        ),
                                    }),
                                !y &&
                                    s.jsxs("div", {
                                        className: "cp-wx-cell static",
                                        children: [
                                            s.jsx(As, { src: t == null ? void 0 : t.avatar, name: k }),
                                            s.jsxs("span", {
                                                className: "cp-wx-cell-main",
                                                children: [
                                                    s.jsx("span", {
                                                        className: "cp-wx-cell-top",
                                                        children: s.jsx("b", { children: k }),
                                                    }),
                                                    k !== C
                                                        ? s.jsxs("span", {
                                                              className: "cp-wx-cell-prev",
                                                              children: ["昵称：", C],
                                                          })
                                                        : null,
                                                ],
                                            }),
                                        ],
                                    }),
                                Ga(
                                    (S.contacts || []).filter((T) => {
                                        const R = d.trim().toLowerCase();
                                        return (
                                            !R ||
                                            `${T.name} ${T.remark} ${T.signature}`.toLowerCase().includes(R)
                                        );
                                    }),
                                ).map((T) =>
                                    s.jsxs(
                                        Fs.Fragment,
                                        {
                                            children: [
                                                s.jsx("div", { className: "cp-wx-group", children: T.k }),
                                                T.rows.map((R) =>
                                                    s.jsxs(
                                                        "button",
                                                        {
                                                            className: "cp-wx-cell",
                                                            onClick: () => j({ contact: R.id }),
                                                            children: [
                                                                s.jsx(As, {
                                                                    src: null,
                                                                    name: R.remark || R.name,
                                                                }),
                                                                s.jsxs("span", {
                                                                    className: "cp-wx-cell-main",
                                                                    children: [
                                                                        s.jsx("span", {
                                                                            className: "cp-wx-cell-top",
                                                                            children: s.jsxs("b", {
                                                                                children: [
                                                                                    R.remark || R.name,
                                                                                    s.jsx(rs, {
                                                                                        text:
                                                                                            R.remark ||
                                                                                            R.name,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                        R.remark && R.remark !== R.name
                                                                            ? s.jsxs("span", {
                                                                                  className:
                                                                                      "cp-wx-cell-prev",
                                                                                  children: [
                                                                                      "昵称：",
                                                                                      R.name,
                                                                                  ],
                                                                              })
                                                                            : null,
                                                                    ],
                                                                }),
                                                            ],
                                                        },
                                                        R.id,
                                                    ),
                                                ),
                                            ],
                                        },
                                        T.k,
                                    ),
                                ),
                                (S.contacts || []).length > 0 &&
                                    s.jsxs("div", {
                                        className: "cp-wx-count",
                                        children: [(S.contacts || []).length + (y ? 0 : 1), " 个朋友"],
                                    }),
                                !(S.contacts || []).length &&
                                    s.jsx(Ne, {
                                        what: "他的通讯录",
                                        busy: r,
                                        onGen: h,
                                        children: "生成后可查看他的通讯录。",
                                    }),
                            ],
                        }),
                    b === "discover" &&
                        s.jsx("div", {
                            className: "cp-wx-list",
                            children: Ua.map((T, R) =>
                                s.jsx(
                                    "div",
                                    {
                                        className: "cp-wx-block",
                                        children: T.map(([ns, X, G]) =>
                                            s.jsx(
                                                Cc,
                                                {
                                                    icon: ns,
                                                    label: X,
                                                    onClick: G ? () => j("moments") : void 0,
                                                },
                                                ns + X,
                                            ),
                                        ),
                                    },
                                    R,
                                ),
                            ),
                        }),
                    b === "me" &&
                        s.jsxs("div", {
                            className: "cp-wx-list",
                            children: [
                                s.jsxs("div", {
                                    className: "cp-wx-mehead",
                                    children: [
                                        s.jsx(As, {
                                            src: y ? null : Ys(e),
                                            name: y ? y.nickname : ls(e),
                                            size: 64,
                                        }),
                                        s.jsxs("span", {
                                            children: [
                                                s.jsx("b", { children: y ? y.nickname : ls(e) || e.name }),
                                                s.jsxs("small", {
                                                    children: [
                                                        s.jsxs("span", {
                                                            children: [
                                                                "微信号：",
                                                                y ? y.wxid || "—" : e.wechatId || "—",
                                                            ],
                                                        }),
                                                        s.jsx("span", {
                                                            className: "cp-wx-qr",
                                                            children: s.jsx(Ds, { id: "qr" }),
                                                        }),
                                                        s.jsx(Q, {
                                                            size: 16,
                                                            strokeWidth: 2,
                                                            className: "cp-chev",
                                                        }),
                                                    ],
                                                }),
                                                s.jsxs("span", {
                                                    className: "cp-wx-status",
                                                    children: [
                                                        s.jsx(Be, { size: 12, strokeWidth: 2.4 }),
                                                        "状态",
                                                    ],
                                                }),
                                                (y == null ? void 0 : y.signature) &&
                                                    s.jsx("small", {
                                                        className: "cp-wx-mesig",
                                                        children: y.signature,
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                s.jsx("div", {
                                    className: "cp-wx-block",
                                    children: s.jsxs("button", {
                                        className: "cp-wx-cell",
                                        onClick: () => j("accounts"),
                                        children: [
                                            s.jsx("span", {
                                                className: "cp-wx-ic",
                                                children: s.jsx(_c, { size: 22, strokeWidth: 1.8 }),
                                            }),
                                            s.jsx("span", {
                                                className: "cp-wx-cell-main",
                                                children: s.jsx("span", {
                                                    className: "cp-wx-cell-top",
                                                    children: s.jsx("b", { children: "切换账号" }),
                                                }),
                                            }),
                                            s.jsxs("span", {
                                                className: "cp-wx-val",
                                                children: [
                                                    y ? y.nickname : "主号",
                                                    W.length ? ` · ${W.length + 1} 个` : "",
                                                ],
                                            }),
                                            s.jsx(Q, { size: 17, strokeWidth: 2, className: "cp-chev" }),
                                        ],
                                    }),
                                }),
                                Va.map((T, R) =>
                                    s.jsx(
                                        "div",
                                        {
                                            className: "cp-wx-block",
                                            children: T.map(([ns, X]) =>
                                                s.jsx(Cc, { icon: ns, label: X }, ns + X),
                                            ),
                                        },
                                        R,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            s.jsx(qa, {
                tab: b,
                onTab: (T) => {
                    (_(T), z(""));
                },
                unread: D,
            }),
        ],
    });
}
function Ka({ char: e, accounts: t, current: c, decided: n, busy: r, onGen: h, onPick: g, onBack: x }) {
    const u = [
        {
            id: null,
            name: ls(e) || e.name,
            avatar: e.avatar,
            sub: "主号 · 你们那条会话在这里",
            wxid: e.wechatId,
        },
        ...t.map((p) => ({
            id: p.id,
            name: p.nickname,
            avatar: null,
            sub: p.why || `${(p.threads || []).length} 个会话`,
            wxid: p.wxid,
        })),
    ];
    return s.jsxs("div", {
        className: "cp-screen push cp-wx",
        children: [
            s.jsx("div", {
                className: "cp-scroll wx-body",
                children: s.jsxs("div", {
                    className: "cp-wx-list",
                    children: [
                        s.jsx("div", {
                            className: "cp-wx-block",
                            children: u.map((p) =>
                                s.jsxs(
                                    "button",
                                    {
                                        className: "cp-wx-cell",
                                        onClick: () => g(p.id),
                                        children: [
                                            s.jsx(As, { src: p.avatar, name: p.name }),
                                            s.jsxs("span", {
                                                className: "cp-wx-cell-main",
                                                children: [
                                                    s.jsxs("span", {
                                                        className: "cp-wx-cell-top",
                                                        children: [
                                                            s.jsx("b", { children: p.name }),
                                                            c === p.id &&
                                                                s.jsx(Gt, { size: 17, strokeWidth: 2.6 }),
                                                        ],
                                                    }),
                                                    s.jsxs("span", {
                                                        className: "cp-wx-cell-prev",
                                                        children: [
                                                            p.wxid ? `微信号：${p.wxid} · ` : "",
                                                            p.sub,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    p.id || "__main",
                                ),
                            ),
                        }),
                        !t.length &&
                            s.jsx(Ne, {
                                what: "他的另一个微信",
                                busy: r,
                                onGen: h,
                                children: n ? "未发现其他微信账号。" : "生成后可查看他是否有其他微信账号。",
                            }),
                    ],
                }),
            }),
            s.jsx(ae, { title: "切换账号", onBack: x, right: s.jsx("span", {}) }),
        ],
    });
}
function Ne({ what: e, busy: t, onGen: c, children: n }) {
    return s.jsxs("div", {
        className: "cp-wx-empty",
        children: [
            s.jsx("b", { children: t ? `正在生成${e}` : `${e}还是空的` }),
            s.jsx("p", { children: n }),
            t
                ? s.jsxs("span", {
                      className: "cp-typing",
                      children: [s.jsx("span", {}), s.jsx("span", {}), s.jsx("span", {})],
                  })
                : s.jsxs("button", {
                      className: "cp-gpill",
                      onClick: c,
                      children: [s.jsx(J, { size: 16 }), "生成"],
                  }),
        ],
    });
}
function Ja({ thread: e, char: t, onBack: c, onForward: n }) {
    const r = Re(e.id),
        h = e.kind === "group",
        g = we(v.useMemo(() => (e.msgs || []).map((x) => x.text), [e]));
    return s.jsxs("div", {
        className: "cp-screen push cp-wx",
        children: [
            s.jsx("div", {
                className: "cp-scroll wx-body has-compose",
                ref: r,
                children: s.jsx("div", {
                    className: "cp-wx-thread",
                    children: e.msgs.map((x, u) => {
                        const p = e.msgs[u - 1],
                            A = !p || x.at - p.at > 5 * 6e4,
                            m = x.dir === "out";
                        return s.jsxs(
                            Fs.Fragment,
                            {
                                children: [
                                    A && s.jsx("div", { className: "cp-wx-time", children: be(x.at) }),
                                    s.jsxs("div", {
                                        className: `cp-wx-row ${m ? "out" : ""}`,
                                        children: [
                                            s.jsx(As, {
                                                src: m ? t.avatar : null,
                                                name: m ? ls(t) : x.speaker || e.name,
                                                size: 40,
                                            }),
                                            s.jsxs("div", {
                                                className: "cp-wx-bubwrap",
                                                children: [
                                                    h && !m && x.speaker
                                                        ? s.jsxs("span", {
                                                              className: "cp-wx-speaker",
                                                              children: [
                                                                  x.speaker,
                                                                  s.jsx(rs, { text: x.speaker }),
                                                              ],
                                                          })
                                                        : null,
                                                    s.jsxs("div", {
                                                        className: "cp-wx-bubble selectable",
                                                        children: [
                                                            x.text,
                                                            s.jsx(Qs, { text: g.trOf(x.text) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            x.id,
                        );
                    }),
                }),
            }),
            s.jsx(ae, {
                title: e.remark || e.name,
                sub: [
                    jt(e.remark || e.name) ? ut(e.remark || e.name) : "",
                    h && !/[（(]\d+[)）]$/.test(e.remark || e.name) ? `${e.members} 人` : "",
                ]
                    .filter(Boolean)
                    .join(" · "),
                onBack: c,
                right: n
                    ? s.jsxs("span", {
                          className: "cp-wx-right",
                          children: [
                              s.jsx(Bs, { tr: g }),
                              s.jsx("button", {
                                  className: "cp-wx-refresh btn-plain",
                                  "aria-label": "转发到聊天",
                                  onClick: () =>
                                      n({
                                          app: "chat",
                                          title: `他和「${e.remark || e.name}」的对话`,
                                          body: (e.msgs || [])
                                              .slice(-40)
                                              .map(
                                                  (x) =>
                                                      `${x.dir === "out" ? "他" : x.speaker || e.name}：${x.text}`,
                                              ).join(`
`),
                                      }),
                                  children: s.jsx(ce, { size: 17, strokeWidth: 2.2 }),
                              }),
                          ],
                      })
                    : s.jsx(Bs, { tr: g }),
            }),
            s.jsx(Fc, {}),
        ],
    });
}
function Fc() {
    return s.jsxs("div", {
        className: "cp-wx-compose",
        "aria-hidden": !0,
        children: [
            s.jsx("span", { className: "g", children: s.jsx(Ds, { id: "voice" }) }),
            s.jsx("span", { className: "f" }),
            s.jsx("span", { className: "g", children: s.jsx(Ds, { id: "smile" }) }),
            s.jsx("span", { className: "g", children: s.jsx(Ds, { id: "plus" }) }),
        ],
    });
}
function Qa({ contact: e, onBack: t }) {
    const c = e.remark || e.name;
    return s.jsxs("div", {
        className: "cp-screen push cp-wx tab-me",
        children: [
            s.jsxs("div", {
                className: "cp-scroll wx-body",
                children: [
                    s.jsxs("div", {
                        className: "cp-wx-cardhead",
                        children: [
                            s.jsx(As, { src: null, name: c, size: 64 }),
                            s.jsxs("div", {
                                children: [
                                    s.jsxs("b", { children: [c, s.jsx(rs, { text: c })] }),
                                    e.remark && e.remark !== e.name
                                        ? s.jsxs("em", {
                                              children: ["昵称：", e.name, s.jsx(rs, { text: e.name })],
                                          })
                                        : null,
                                    e.tag ? s.jsxs("em", { children: ["标签：", e.tag] }) : null,
                                ],
                            }),
                        ],
                    }),
                    s.jsxs("div", {
                        className: "cp-wx-block",
                        children: [
                            s.jsxs("div", {
                                className: "cp-wx-cell static",
                                children: [
                                    s.jsx("span", {
                                        className: "cp-wx-cell-main",
                                        children: s.jsx("span", {
                                            className: "cp-wx-cell-top",
                                            children: s.jsx("b", { children: "个性签名" }),
                                        }),
                                    }),
                                    s.jsxs("span", {
                                        className: "cp-wx-val",
                                        children: [
                                            e.signature || "未填写",
                                            e.signature ? s.jsx(V, { text: e.signature }) : null,
                                        ],
                                    }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "cp-wx-cell static",
                                children: [
                                    s.jsx("span", {
                                        className: "cp-wx-cell-main",
                                        children: s.jsx("span", {
                                            className: "cp-wx-cell-top",
                                            children: s.jsx("b", { children: "朋友圈" }),
                                        }),
                                    }),
                                    s.jsx(Q, { size: 17, strokeWidth: 2, className: "cp-chev" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            s.jsx(ae, { title: "", onBack: t, flat: !0 }),
        ],
    });
}
const Lc = (e) => {
        const t = Math.max(0, Math.round((e || 0) / 1e3));
        return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
    },
    Le = (e) => Lc((e || 0) * 1e3),
    Bc = 4,
    $c = 12;
function Xa({ dir: e, missed: t }) {
    return s.jsx("span", {
        className: `cp-callarrow ${t ? "missed" : ""}`,
        "aria-hidden": !0,
        children:
            e === "in"
                ? s.jsx(Vt, { size: 13, strokeWidth: 2.8 })
                : s.jsx(Yt, { size: 13, strokeWidth: 2.8 }),
    });
}
function sn({ char: e, me: t, phone: c, busy: n, onGen: r, onExit: h }) {
    var N, $;
    const [g, x] = v.useState(null),
        [u, p] = v.useState("all"),
        A = se(t) || ee(t) || "我",
        m = v.useMemo(
            () =>
                (e.messages || [])
                    .filter((C) => C.type === "call_card")
                    .sort((C, k) => (k.createdAt || 0) - (C.createdAt || 0))
                    .slice(0, Bc)
                    .map((C) => ({
                        id: C.id,
                        real: C,
                        name: A,
                        avatar: t == null ? void 0 : t.avatar,
                        at: C.createdAt || 0,
                        dir: C.role === "assistant" ? "out" : "in",
                        missed: C.connected === !1,
                        seconds: Math.round((C.durationMs || 0) / 1e3),
                        kind: C.callKind === "video" ? "video" : "voice",
                        summary: "",
                    })),
            [e.messages, A, t == null ? void 0 : t.avatar],
        ),
        o = v.useMemo(() => (e.messages || []).filter((C) => C.type === "call_card").length, [e.messages]),
        b = v.useMemo(() => {
            var C;
            return (((C = c == null ? void 0 : c.calls) == null ? void 0 : C.items) || []).map((k) => ({
                ...k,
                avatar: null,
                kind: "voice",
            }));
        }, [(N = c == null ? void 0 : c.calls) == null ? void 0 : N.items]),
        _ = v.useMemo(() => [...m, ...b].sort((C, k) => k.at - C.at), [m, b]),
        w = u === "missed" ? _.filter((C) => C.missed) : _,
        j = _.filter((C) => C.missed).length,
        d = ($ = m.find((C) => C.id === g)) == null ? void 0 : $.real;
    if (d) {
        const C = (d.lines || []).filter((W) => W.text),
            k = C.slice(-$c);
        return s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll tight",
                    children: [
                        s.jsxs("div", {
                            className: "cp-thread-head",
                            children: [
                                s.jsx(Xs, { src: t == null ? void 0 : t.avatar, size: 34 }),
                                s.jsx("b", { children: A }),
                                s.jsxs("small", {
                                    children: [
                                        d.callKind === "video" ? "视频通话" : "语音通话",
                                        " ·",
                                        " ",
                                        d.connected === !1 ? "未接通" : `通话 ${Lc(d.durationMs)}`,
                                        " · ",
                                        Ce(d.createdAt),
                                    ],
                                }),
                            ],
                        }),
                        k.length === 0
                            ? s.jsx(xs, {
                                  title: d.connected === !1 ? "没接通" : "这通没有留下文字",
                                  children:
                                      d.connected === !1 ? "响过，没接起来。" : "通话内容没有被记下来。",
                              })
                            : s.jsxs("div", {
                                  className: "cp-thread",
                                  children: [
                                      C.length > k.length &&
                                          s.jsxs("div", {
                                              className: "cp-msg-time",
                                              children: ["只留了最后 ", $c, " 句 · 整通在聊天页里"],
                                          }),
                                      k.map((W, y) =>
                                          W.who === "narration"
                                              ? s.jsx(
                                                    "div",
                                                    { className: "cp-msg-sys", children: W.text },
                                                    W.id || y,
                                                )
                                              : s.jsx(
                                                    "div",
                                                    {
                                                        className: `cp-msg selectable ${W.who === "char" ? "out tail" : "in tail"}`,
                                                        children: W.text,
                                                    },
                                                    W.id || y,
                                                ),
                                      ),
                                  ],
                              }),
                    ],
                }),
                s.jsx(H, { back: () => x(null) }),
            ],
        });
    }
    const z = b.find((C) => C.id === g);
    return z
        ? s.jsx(en, { other: z, onBack: () => x(null) })
        : s.jsx(cn, {
              all: _,
              rows: w,
              others: b,
              missedCount: j,
              mine: m,
              mineTotal: o,
              tab: u,
              setTab: p,
              busy: n,
              onGen: r,
              onExit: h,
              setOpenId: x,
          });
}
function en({ other: e, onBack: t }) {
    const c = we(v.useMemo(() => [e.summary, ...(e.lines || []).map((n) => n.text)].filter(Boolean), [e]));
    return s.jsxs("div", {
        className: "cp-screen push",
        children: [
            s.jsxs("div", {
                className: "cp-scroll tight",
                children: [
                    s.jsxs("div", {
                        className: "cp-thread-head",
                        children: [
                            s.jsx(Xs, { size: 34 }),
                            s.jsx("b", { children: e.name }),
                            s.jsx("small", {
                                children: e.number || (e.kind === "service" ? "服务号码" : "未存为联系人"),
                            }),
                        ],
                    }),
                    s.jsx("div", {
                        className: "cp-group",
                        children: s.jsxs("div", {
                            className: "cp-row",
                            children: [
                                s.jsxs("div", {
                                    className: "cp-row-main",
                                    children: [
                                        s.jsx("div", {
                                            className: "cp-row-title",
                                            children: e.missed
                                                ? "未接来电"
                                                : e.dir === "in"
                                                  ? "来电"
                                                  : "呼出",
                                        }),
                                        s.jsx("div", { className: "cp-row-sub one", children: Ce(e.at) }),
                                    ],
                                }),
                                s.jsx("span", {
                                    className: "cp-row-val",
                                    children: e.missed ? "未接通" : Le(e.seconds),
                                }),
                            ],
                        }),
                    }),
                    e.summary
                        ? s.jsxs("div", {
                              className: "cp-note selectable",
                              children: [
                                  s.jsx("b", { className: "cp-note-h", children: "这通电话" }),
                                  e.summary,
                                  s.jsx(Qs, { text: c.trOf(e.summary) }),
                              ],
                          })
                        : null,
                    (e.lines || []).length > 0
                        ? s.jsxs("div", {
                              className: "cp-thread",
                              children: [
                                  s.jsx("div", { className: "cp-msg-time", children: "通话里的几句" }),
                                  e.lines.map((n, r) =>
                                      s.jsxs(
                                          "div",
                                          {
                                              className: `cp-msg selectable ${n.who === "him" ? "out" : "in"} tail`,
                                              children: [n.text, s.jsx(Qs, { text: c.trOf(n.text) })],
                                          },
                                          r,
                                      ),
                                  ),
                              ],
                          })
                        : e.summary
                          ? null
                          : s.jsx("div", {
                                className: "cp-note",
                                children:
                                    "这一通是旧版本生成的，只记了谁、什么时候、多久。重新生成通话记录之后，点开能看到描述和对话。",
                            }),
                ],
            }),
            s.jsx(H, { back: t, actions: s.jsx(Bs, { tr: c }) }),
        ],
    });
}
function cn({
    all: e,
    rows: t,
    others: c,
    missedCount: n,
    mine: r,
    mineTotal: h,
    tab: g,
    setTab: x,
    busy: u,
    onGen: p,
    onExit: A,
    setOpenId: m,
}) {
    return s.jsxs("div", {
        className: "cp-screen push",
        children: [
            s.jsxs("div", {
                className: "cp-scroll",
                children: [
                    s.jsx(es, {
                        text: "通话记录",
                        sub: c.length ? `${e.length} 条${n ? ` · ${n} 个未接` : ""}` : void 0,
                    }),
                    e.length === 0
                        ? s.jsx(xs, {
                              title: "通话记录是空的",
                              action: s.jsxs("button", {
                                  className: "cp-gpill",
                                  onClick: p,
                                  disabled: u,
                                  children: [
                                      s.jsx(J, { size: 16, className: u ? "cp-spin" : "" }),
                                      "生成通话记录",
                                  ],
                              }),
                              children: "你们还没通过电话，他和别人的那些也还没长出来。",
                          })
                        : s.jsxs(s.Fragment, {
                              children: [
                                  s.jsx("div", {
                                      className: "cp-msglist",
                                      children: t.map((o) =>
                                          s.jsxs(
                                              "button",
                                              {
                                                  className: "cp-msgrow",
                                                  onClick: () => m(o.id),
                                                  children: [
                                                      s.jsx("span", { className: "cp-msgrow-dot off" }),
                                                      s.jsx(Xs, { src: o.avatar }),
                                                      s.jsxs("span", {
                                                          className: "cp-msgrow-main",
                                                          children: [
                                                              s.jsxs("span", {
                                                                  className: "cp-msgrow-top",
                                                                  children: [
                                                                      s.jsxs("span", {
                                                                          className: `cp-msgrow-name ${o.missed ? "missed" : ""}`,
                                                                          children: [
                                                                              o.name,
                                                                              s.jsx(rs, { text: o.name }),
                                                                          ],
                                                                      }),
                                                                      s.jsx("span", {
                                                                          className: "cp-msgrow-time",
                                                                          children: Ps(o.at),
                                                                      }),
                                                                      s.jsx(Q, {
                                                                          size: 15,
                                                                          strokeWidth: 2.6,
                                                                          className: "cp-msgrow-chev",
                                                                      }),
                                                                  ],
                                                              }),
                                                              s.jsxs("span", {
                                                                  className: "cp-msgrow-prev",
                                                                  children: [
                                                                      s.jsx(Xa, {
                                                                          dir: o.dir,
                                                                          missed: o.missed,
                                                                      }),
                                                                      o.real
                                                                          ? `${o.kind === "video" ? "视频通话" : "语音通话"} · ${o.missed ? "未接通" : Le(o.seconds)}`
                                                                          : `${o.missed ? "未接通" : Le(o.seconds)}${o.summary ? ` · ${o.summary}` : ""}`,
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              o.id,
                                          ),
                                      ),
                                  }),
                                  t.length === 0 &&
                                      s.jsx(xs, { title: "没有未接来电", children: "这一栏是空的。" }),
                                  h > r.length &&
                                      s.jsxs("div", {
                                          className: "cp-note",
                                          children: [
                                              "和你的通话这里只留了最近 ",
                                              Bc,
                                              " 通（一共 ",
                                              h,
                                              ' 通）。 全部记录在聊天页里 —— 通话记录这一页是给"他还跟谁打电话"用的。',
                                          ],
                                      }),
                                  !c.length &&
                                      s.jsxs("div", {
                                          className: "cp-note",
                                          children: [
                                              s.jsx("b", { children: "这里现在只有你们之间的通话。" }),
                                              "一台只跟一个人打过电话的手机是假的 —— 他和别人的那些要按刷新才长出来。",
                                              s.jsxs("button", {
                                                  className: "cp-gpill",
                                                  style: { marginTop: 10 },
                                                  onClick: p,
                                                  disabled: u,
                                                  children: [
                                                      s.jsx(J, { size: 16, className: u ? "cp-spin" : "" }),
                                                      "生成他和别人的通话",
                                                  ],
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            s.jsx(H, { back: A, actions: s.jsx(is, { busy: u, onClick: p, label: "重新生成通话记录" }) }),
            e.length > 0 &&
                s.jsx(Ls, {
                    children: s.jsxs("div", {
                        className: "cp-seg",
                        children: [
                            s.jsx("button", {
                                className: g === "all" ? "on" : "",
                                onClick: () => x("all"),
                                children: "全部",
                            }),
                            s.jsx("button", {
                                className: g === "missed" ? "on" : "",
                                onClick: () => x("missed"),
                                children: "未接",
                            }),
                        ],
                    }),
                }),
        ],
    });
}
function tn({ char: e, me: t, onBack: c }) {
    const n = v.useMemo(
            () =>
                (e.messages || []).filter(
                    (m) =>
                        !(
                            m.type === "narration" ||
                            m.undelivered ||
                            (m.role === "system" && m.type !== "withdrawn" && m.type !== "pat") ||
                            m.type === "system"
                        ),
                ),
            [e.messages],
        ),
        r = v.useMemo(() => n.slice(-wc), [n]),
        h = we(
            v.useMemo(() => r.map((m) => Fe(m)).filter(Boolean), [r]),
            e.id,
        ),
        g = se(t) || ee(t) || "我",
        x = r.filter((m) => m.type === "withdrawn" && m.originalContent).length,
        u = Re(r.length),
        p = (m) => (m ? e.avatar : t == null ? void 0 : t.avatar),
        A = (m) => (m ? ls(e) : g);
    return s.jsxs("div", {
        className: "cp-screen push cp-wx",
        children: [
            s.jsxs("div", {
                className: "cp-scroll wx-body has-compose",
                ref: u,
                children: [
                    x > 0 &&
                        s.jsxs("div", {
                            className: "cp-wx-time",
                            children: ["其中 ", x, " 条消息已撤回，以下显示原文"],
                        }),
                    s.jsxs("div", {
                        className: "cp-wx-thread",
                        children: [
                            r.length === 0 &&
                                s.jsx(xs, {
                                    title: "这段聊天是空的",
                                    children: "你们还没说过话，或者记录被清过。",
                                }),
                            n.length > r.length &&
                                s.jsxs("div", {
                                    className: "cp-wx-time",
                                    children: ["仅显示最近 ", wc, " 条消息"],
                                }),
                            r.map((m, o) => {
                                const b = r[o - 1],
                                    _ = r[o + 1],
                                    w = !b || (m.createdAt || 0) - (b.createdAt || 0) > 5 * 6e4,
                                    j = m.role === "assistant";
                                if (
                                    (!((C) => C && C.type !== "withdrawn" && C.type !== "pat")(_) || _.role,
                                    m.type === "withdrawn")
                                )
                                    return s.jsxs(
                                        Fs.Fragment,
                                        {
                                            children: [
                                                w &&
                                                    s.jsx("div", {
                                                        className: "cp-wx-time",
                                                        children: be(m.createdAt),
                                                    }),
                                                s.jsxs("div", {
                                                    className: "cp-wx-pull selectable",
                                                    children: [
                                                        s.jsx("b", {
                                                            children:
                                                                m.role === "assistant" ||
                                                                m.withdrawnBy === "char"
                                                                    ? "他撤回的"
                                                                    : "你撤回的",
                                                        }),
                                                        m.originalContent || "（原文没有留下来）",
                                                    ],
                                                }),
                                            ],
                                        },
                                        m.id || o,
                                    );
                                if (m.type === "pat")
                                    return s.jsx(
                                        "div",
                                        { className: "cp-wx-sys", children: m.content || "拍了拍" },
                                        m.id || o,
                                    );
                                const z = m.type === "image" || m.type === "text_image",
                                    N = z ? "" : Fe(m);
                                if (!z && !N) return null;
                                const $ = w
                                    ? s.jsx("div", { className: "cp-wx-time", children: be(m.createdAt) })
                                    : null;
                                return s.jsxs(
                                    Fs.Fragment,
                                    {
                                        children: [
                                            $,
                                            s.jsxs("div", {
                                                className: `cp-wx-row ${j ? "out" : ""}`,
                                                children: [
                                                    s.jsx("span", {
                                                        className: "cp-wx-av",
                                                        children: p(j)
                                                            ? s.jsx(hs, { src: p(j), alt: "" })
                                                            : $e(A(j)),
                                                    }),
                                                    z
                                                        ? s.jsx("span", {
                                                              className: "cp-wx-img",
                                                              children:
                                                                  m.dataUrl || m.content
                                                                      ? s.jsx(hs, {
                                                                            src: m.dataUrl || m.content,
                                                                            alt: "",
                                                                        })
                                                                      : null,
                                                          })
                                                        : s.jsxs("div", {
                                                              className: "cp-wx-bubble selectable",
                                                              children: [N, s.jsx(Qs, { text: h.trOf(N) })],
                                                          }),
                                                ],
                                            }),
                                            z && m.caption
                                                ? s.jsxs("div", {
                                                      className: `cp-wx-row ${j ? "out" : ""}`,
                                                      children: [
                                                          s.jsx("span", {
                                                              className: "cp-wx-av",
                                                              style: { visibility: "hidden" },
                                                          }),
                                                          s.jsx("div", {
                                                              className: "cp-wx-bubble selectable",
                                                              children: m.caption,
                                                          }),
                                                      ],
                                                  })
                                                : null,
                                        ],
                                    },
                                    m.id || o,
                                );
                            }),
                        ],
                    }),
                ],
            }),
            s.jsx(ae, { title: g, onBack: c, right: s.jsx(Bs, { tr: h }) }),
            s.jsx(Fc, {}),
        ],
    });
}
function an(e, t = Date.now()) {
    const c = Math.max(0, t - (e || 0));
    if (c < 6e4) return "刚刚";
    if (c < 36e5) return `${Math.floor(c / 6e4)} 分钟前`;
    if (c < 864e5) return `${Math.floor(c / 36e5)} 小时前`;
    if (c < 2 * 864e5) return "昨天";
    if (c < 30 * 864e5) return `${Math.floor(c / 864e5)} 天前`;
    const n = new Date(e);
    return `${n.getMonth() + 1}月${n.getDate()}日`;
}
function nn(e) {
    return e <= 1 ? 1 : e <= 4 ? 2 : 3;
}
function ln({ post: e, nameOf: t, avatarOf: c, onImage: n }) {
    const r = t(e.authorId),
        h = (e.images || []).slice(0, 9),
        g = nn(h.length),
        x = (e.likes || []).map((p) => t(p.id)).filter(Boolean),
        u = e.comments || [];
    return s.jsxs("div", {
        className: "cp-mo-post",
        children: [
            s.jsx("span", {
                className: "cp-wx-av",
                style: { width: 40, height: 40, flex: "0 0 40px", fontSize: 15 },
                children: c(e.authorId) ? s.jsx(hs, { src: c(e.authorId), alt: "" }) : $e(r),
            }),
            s.jsxs("div", {
                className: "cp-mo-main",
                children: [
                    s.jsx("div", { className: "cp-mo-name", children: r }),
                    e.text
                        ? s.jsxs("div", {
                              className: "cp-mo-text selectable",
                              children: [e.text, s.jsx(Me, { text: e.text })],
                          })
                        : null,
                    h.length > 0
                        ? s.jsx("div", {
                              className: `cp-mo-grid c${g}`,
                              children: h.map((p, A) =>
                                  s.jsx(
                                      "button",
                                      {
                                          className: "cp-mo-cell",
                                          onClick: () => (n == null ? void 0 : n(p)),
                                          children: s.jsx(hs, { src: p, alt: "" }),
                                      },
                                      A,
                                  ),
                              ),
                          })
                        : e.photoHint
                          ? s.jsx("div", {
                                className: "cp-mo-grid c1",
                                children: s.jsx(wt, {
                                    className: "cp-mo-cell cp-mo-descimg",
                                    src: null,
                                    desc: e.photoHint,
                                    label: "照片描述",
                                }),
                            })
                          : null,
                    e.location ? s.jsx("div", { className: "cp-mo-loc", children: e.location }) : null,
                    s.jsxs("div", {
                        className: "cp-mo-foot",
                        children: [
                            s.jsx("time", { children: an(e.createdAt) }),
                            s.jsxs("span", {
                                className: "cp-mo-dots",
                                "aria-hidden": !0,
                                children: [s.jsx("i", {}), s.jsx("i", {})],
                            }),
                        ],
                    }),
                    (x.length > 0 || u.length > 0) &&
                        s.jsxs("div", {
                            className: "cp-mo-react",
                            children: [
                                x.length > 0 &&
                                    s.jsxs("div", {
                                        className: "cp-mo-likes",
                                        children: [
                                            s.jsx(Kt, { size: 13, fill: "currentColor" }),
                                            s.jsx("span", { children: x.join("，") }),
                                        ],
                                    }),
                                x.length > 0 && u.length > 0 && s.jsx("div", { className: "cp-mo-sep" }),
                                u.map((p) =>
                                    s.jsxs(
                                        "div",
                                        {
                                            className: "cp-mo-cmt selectable",
                                            children: [
                                                s.jsx("b", { children: p.byName || t(p.byId) }),
                                                p.replyToName
                                                    ? s.jsxs(s.Fragment, {
                                                          children: [
                                                              " 回复 ",
                                                              s.jsx("b", { children: p.replyToName }),
                                                          ],
                                                      })
                                                    : null,
                                                "：",
                                                p.text,
                                            ],
                                        },
                                        p.id,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function rn({ char: e, me: t, state: c, busy: n, onGen: r, onPost: h, onBack: g }) {
    const [x, u] = v.useState(null),
        [p, A] = v.useState(null),
        m = v.useRef(null),
        o = v.useRef(!1),
        b = () => {
            ((o.current = !1),
                (m.current = setTimeout(() => {
                    ((o.current = !0), A("text"));
                }, 480)));
        },
        _ = () => {
            (clearTimeout(m.current), o.current || A("photo"));
        },
        w = v.useMemo(() => {
            var y;
            const k = Nt(c, e.id),
                W = (S, l) => k.has(S) || (l && (!S || String(S).startsWith("npc")));
            return [...(((y = c.moments) == null ? void 0 : y.posts) || [])]
                .filter((S) => k.has(S.authorId) && gt(c, S, e))
                .map((S) => {
                    const l = S.authorId === e.id;
                    return {
                        ...S,
                        likes: (S.likes || []).filter((M) => W(M.id, l)),
                        comments: (S.comments || []).filter(
                            (M) =>
                                W(M.byId, l) &&
                                (!M.replyToId ||
                                    (S.comments || []).some((D) => D.id === M.replyToId && W(D.byId, l))),
                        ),
                    };
                })
                .sort((S, l) => (l.createdAt || 0) - (S.createdAt || 0))
                .slice(0, 40);
        }, [c.moments, c, e]),
        j = se(t) || ee(t) || "我",
        d = ls(e) || e.name || "他",
        z = (k) => {
            if (!k) return "";
            if (k === "me") return j;
            if (k === e.id) return d;
            const W = (c.characters || []).find((y) => y.id === k);
            return W ? ls(W) || W.name : "";
        },
        N = (k) => {
            if (k === "me") return (t == null ? void 0 : t.avatar) || null;
            {
                const W = (c.characters || []).find((y) => y.id === k);
                return (W && Ys(W)) || null;
            }
        },
        $ = v.useMemo(() => {
            var W;
            return (
                (((W = c.moments) == null ? void 0 : W.posts) || [])
                    .filter((y) => y.authorId === e.id)
                    .flatMap((y) => y.images || [])[0] ||
                Ys(e) ||
                null
            );
        }, [c.moments, e]),
        C = w.filter((k) => k.authorId === e.id).length;
    return s.jsxs("div", {
        className: "cp-screen push cp-wx cp-mo",
        children: [
            s.jsxs("div", {
                className: "cp-scroll cp-mo-body",
                children: [
                    s.jsxs("div", {
                        className: "cp-mo-cover",
                        children: [
                            $
                                ? s.jsx(hs, { src: $, alt: "" })
                                : s.jsx("span", {
                                      className: "cp-mo-cover-ph",
                                      style: { "--seed": (d.charCodeAt(0) || 7) % 360 },
                                  }),
                            s.jsx("span", { className: "cp-mo-shade" }),
                            s.jsxs("div", {
                                className: "cp-mo-owner",
                                children: [
                                    s.jsx("b", { children: d }),
                                    s.jsx("span", {
                                        className: "cp-wx-av",
                                        style: { width: 62, height: 62, flex: "0 0 62px", fontSize: 24 },
                                        children: Ys(e) ? s.jsx(hs, { src: Ys(e), alt: "" }) : $e(d),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    s.jsx("div", {
                        className: "cp-mo-feed",
                        children:
                            w.length === 0
                                ? s.jsxs("div", {
                                      className: "cp-wx-empty",
                                      children: [
                                          s.jsx("b", {
                                              children: n ? "他正在想发点什么" : "这里还没有人发过",
                                          }),
                                          s.jsx("p", {
                                              children:
                                                  "朋友圈是一份共用的时间线 —— 他刷到的和你在主界面看到的是同一批。 现在它是空的。让他先发一条，底下的赞和评论会跟着一起长出来。",
                                          }),
                                          n
                                              ? s.jsxs("span", {
                                                    className: "cp-typing",
                                                    children: [
                                                        s.jsx("span", {}),
                                                        s.jsx("span", {}),
                                                        s.jsx("span", {}),
                                                    ],
                                                })
                                              : s.jsxs("button", {
                                                    className: "cp-gpill",
                                                    onClick: r,
                                                    children: [s.jsx(J, { size: 16 }), "让他发一条"],
                                                }),
                                      ],
                                  })
                                : s.jsxs(s.Fragment, {
                                      children: [
                                          w.map((k) =>
                                              s.jsx(
                                                  ln,
                                                  { post: k, nameOf: z, avatarOf: N, onImage: u },
                                                  k.id,
                                              ),
                                          ),
                                          s.jsxs("div", {
                                              className: "cp-mo-tail",
                                              children: [
                                                  "朋友仅展示最近三天的朋友圈",
                                                  s.jsxs("small", { children: ["他自己发过 ", C, " 条"] }),
                                              ],
                                          }),
                                      ],
                                  }),
                    }),
                ],
            }),
            s.jsxs("div", {
                className: "cp-mo-bar",
                children: [
                    s.jsx("button", {
                        className: "cp-mo-btn",
                        onClick: g,
                        "aria-label": "返回",
                        children: s.jsx(bs, { size: 24, strokeWidth: 2.4 }),
                    }),
                    s.jsxs("span", {
                        style: { display: "flex" },
                        children: [
                            s.jsx("button", {
                                className: "cp-mo-btn",
                                onClick: r,
                                disabled: n,
                                "aria-label": "让他发一条",
                                title: "让他发一条",
                                children: s.jsx(J, {
                                    size: 19,
                                    strokeWidth: 2.2,
                                    className: n ? "cp-spin" : "",
                                }),
                            }),
                            h &&
                                s.jsx("button", {
                                    className: "cp-mo-btn",
                                    "aria-label": "用他的账号发表（长按发纯文字）",
                                    title: "用他的账号发表（长按发纯文字）",
                                    onMouseDown: b,
                                    onMouseUp: _,
                                    onMouseLeave: () => clearTimeout(m.current),
                                    onTouchStart: b,
                                    onTouchEnd: _,
                                    onTouchCancel: () => clearTimeout(m.current),
                                    children: s.jsx(Ut, { size: 20, strokeWidth: 2.2 }),
                                }),
                        ],
                    }),
                ],
            }),
            s.jsx(ia, {
                children:
                    p &&
                    s.jsx(
                        vt,
                        { withPhoto: p === "photo", asChar: e, onPosted: h, onClose: () => A(null) },
                        "cp-mo-compose",
                    ),
            }),
            x &&
                s.jsx("div", {
                    className: "cp-lightbox",
                    onClick: () => u(null),
                    children: s.jsx("div", {
                        className: "cp-lightbox-main",
                        children: s.jsx(hs, { src: x, alt: "" }),
                    }),
                }),
        ],
    });
}
function dn({ appId: e, reason: t, kind: c, onExit: n, onAskAgain: r }) {
    const h = Ie[e] || e;
    return s.jsxs("div", {
        className: "cp-screen push",
        children: [
            s.jsx("div", {
                className: "cp-scroll",
                children: s.jsxs("div", {
                    className: "cp-locked-page",
                    children: [
                        s.jsx("div", { className: "cp-lock-glyph", children: s.jsx(js, { size: 18 }) }),
                        c === "locked"
                            ? s.jsxs(s.Fragment, {
                                  children: [
                                      "他把「",
                                      h,
                                      "」单独锁上了。",
                                      s.jsx("br", {}),
                                      "手机密码开不了这里。",
                                  ],
                              })
                            : s.jsxs(s.Fragment, { children: ["这次他给的权限里没有「", h, "」。"] }),
                        t
                            ? s.jsxs("div", {
                                  style: { marginTop: 14, color: "var(--cp-text-3)" },
                                  children: ["他的说法：", t],
                              })
                            : null,
                        r &&
                            s.jsx("button", {
                                className: "cp-gpill",
                                style: { marginTop: 22 },
                                onClick: r,
                                children: "再去问一次",
                            }),
                    ],
                }),
            }),
            s.jsx(H, { back: n }),
        ],
    });
}
function on({ row: e, onBack: t, onToggle: c }) {
    const { a: n, label: r, unit: h, count: g, items: x, linked: u } = e;
    return s.jsxs("div", {
        className: "cp-screen push",
        children: [
            s.jsxs("div", {
                className: "cp-scroll",
                children: [
                    s.jsx(es, { text: `@${n.handle}`, sub: `${r} 小号` }),
                    s.jsx("div", {
                        className: "cp-group",
                        children: s.jsxs("div", {
                            className: "cp-acc",
                            children: [
                                s.jsxs("div", {
                                    className: "cp-acc-main",
                                    children: [
                                        n.nickname &&
                                            n.nickname !== n.handle &&
                                            s.jsx("div", {
                                                className: "cp-acc-head",
                                                children: s.jsxs("b", {
                                                    children: [n.nickname, s.jsx(rs, { text: n.nickname })],
                                                }),
                                            }),
                                        n.bio &&
                                            s.jsxs("div", {
                                                className: "cp-acc-nick",
                                                children: [n.bio, s.jsx(V, { text: n.bio })],
                                            }),
                                        n.why && s.jsx("div", { className: "cp-acc-why", children: n.why }),
                                        n.why && s.jsx(V, { text: n.why }),
                                        s.jsxs("div", {
                                            className: "cp-acc-meta",
                                            children: [Sc(g, h), " · ", x.length, " 条内容"],
                                        }),
                                    ],
                                }),
                                s.jsx("button", {
                                    className: `cp-gpill ${u ? "" : "solid"}`,
                                    onClick: () => c(e.plat, n.id, !u),
                                    children: u ? "撤下" : "接入线上",
                                }),
                            ],
                        }),
                    }),
                    s.jsx(os, { title: "已发布内容" }),
                    x.length
                        ? s.jsx("div", {
                              className: "cp-group",
                              children: x.map((p) =>
                                  s.jsx(
                                      "div",
                                      {
                                          className: "cp-acc",
                                          children: s.jsxs("div", {
                                              className: "cp-acc-main",
                                              children: [
                                                  s.jsx("div", {
                                                      className: "cp-acc-post",
                                                      children: p.text,
                                                  }),
                                                  s.jsx(V, { text: p.text }),
                                                  s.jsxs("div", {
                                                      className: "cp-acc-meta",
                                                      children: [be(p.at), " · ", p.likes, " 个赞"],
                                                  }),
                                              ],
                                          }),
                                      },
                                      p.id,
                                  ),
                              ),
                          })
                        : s.jsx("div", {
                              className: "cp-acc-foot",
                              children: "该账号暂无内容。可返回上一页重新查看。",
                          }),
                ],
            }),
            s.jsx(H, { back: t }),
        ],
    });
}
function hn({ char: e, state: t, phone: c, busy: n, onGen: r, onExit: h, onToggle: g }) {
    var j, d, z;
    const x = v.useMemo(() => {
            const N = [];
            for (const [$, C, k] of [
                ["insta", "Insta", "粉丝"],
                ["youtube", "YouTube", "订阅"],
            ])
                for (const W of Mc(t, $, e.id))
                    N.push({
                        plat: $,
                        label: C,
                        unit: k,
                        a: W,
                        count: $ === "insta" ? W.followers || 0 : W.subscribers || 0,
                        items: ($ === "insta" ? W.posts : W.videos) || [],
                        linked: bt(W),
                        fromGen: !!W.fromGen,
                    });
            return N;
        }, [t.insta, t.youtube, e.id]),
        [u, p] = v.useState(null),
        A = x.filter((N) => N.fromGen && !N.linked),
        m = x.filter((N) => N.linked),
        o = (j = c.alts) == null ? void 0 : j.decided,
        b = (((d = c.wxalts) == null ? void 0 : d.accounts) || []).length;
    if (!x.length && !b)
        return s.jsxs("div", {
            className: "cp-screen push",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll",
                    children: [
                        s.jsx(es, { text: "账号", sub: "他在各个平台上的小号" }),
                        o
                            ? s.jsx(xs, {
                                  title: "他没有小号",
                                  action: s.jsxs("button", {
                                      className: "cp-gpill",
                                      onClick: r,
                                      children: [s.jsx(J, { size: 16 }), "再查一次"],
                                  }),
                                  children: "查过了 —— 不是每个人都有小号。",
                              })
                            : s.jsx(te, { what: "小号", busy: n, onGen: r }),
                    ],
                }),
                s.jsx(H, { back: h, actions: s.jsx(is, { busy: n, onClick: r, label: "重新查" }) }),
            ],
        });
    const _ = ({ r: N }) =>
            s.jsxs("div", {
                className: "cp-acc",
                children: [
                    s.jsxs("button", {
                        className: "cp-acc-main btn-plain",
                        style: { textAlign: "left" },
                        onClick: () => p(N.a.id),
                        children: [
                            s.jsxs("div", {
                                className: "cp-acc-head",
                                children: [
                                    s.jsxs("b", { children: ["@", N.a.handle] }),
                                    s.jsx("span", { className: "cp-acc-plat", children: N.label }),
                                ],
                            }),
                            N.a.nickname &&
                                N.a.nickname !== N.a.handle &&
                                s.jsxs("div", {
                                    className: "cp-acc-nick",
                                    children: [N.a.nickname, s.jsx(rs, { text: N.a.nickname })],
                                }),
                            N.a.why && s.jsx("div", { className: "cp-acc-why", children: N.a.why }),
                            N.a.why && s.jsx(V, { text: N.a.why }),
                            s.jsxs("div", {
                                className: "cp-acc-meta",
                                children: [Sc(N.count, N.unit), " · ", N.items.length, " 条内容"],
                            }),
                        ],
                    }),
                    s.jsx("button", {
                        className: `cp-gpill ${N.linked ? "" : "solid"}`,
                        onClick: () => g(N.plat, N.a.id, !N.linked),
                        children: N.linked ? "撤下" : "接入线上",
                    }),
                ],
            }),
        w = u ? x.find((N) => N.a.id === u) : null;
    return w
        ? s.jsx(on, { row: w, onBack: () => p(null), onToggle: g })
        : s.jsxs("div", {
              className: "cp-screen push",
              children: [
                  s.jsxs("div", {
                      className: "cp-scroll",
                      children: [
                          s.jsx(es, { text: "账号", sub: "他在各个平台上的小号" }),
                          A.length > 0 &&
                              s.jsxs(s.Fragment, {
                                  children: [
                                      s.jsx(os, { title: "待确认" }),
                                      s.jsx("div", {
                                          className: "cp-group",
                                          children: A.map((N) => s.jsx(_, { r: N }, N.a.id)),
                                      }),
                                      s.jsxs("div", {
                                          className: "cp-acc-foot",
                                          children: [
                                              "以下账号为本次查看时发现。",
                                              s.jsx("b", { children: "接入线上" }),
                                              "后，账号将出现在 Insta / Tube 中，他在聊天中也会知晓此账号；接入前仅作为线索保留。",
                                          ],
                                      }),
                                  ],
                              }),
                          (((z = c.wxalts) == null ? void 0 : z.accounts) || []).length > 0 &&
                              s.jsxs(s.Fragment, {
                                  children: [
                                      s.jsx(os, { title: "微信小号" }),
                                      s.jsx("div", {
                                          className: "cp-group",
                                          children: (c.wxalts.accounts || []).map((N) =>
                                              s.jsx(
                                                  "div",
                                                  {
                                                      className: "cp-acc",
                                                      children: s.jsxs("div", {
                                                          className: "cp-acc-main",
                                                          children: [
                                                              s.jsxs("div", {
                                                                  className: "cp-acc-head",
                                                                  children: [
                                                                      s.jsxs("b", {
                                                                          children: [
                                                                              N.nickname,
                                                                              s.jsx(rs, { text: N.nickname }),
                                                                          ],
                                                                      }),
                                                                      s.jsx("span", {
                                                                          className: "cp-acc-plat",
                                                                          children: "微信",
                                                                      }),
                                                                  ],
                                                              }),
                                                              N.wxid &&
                                                                  s.jsxs("div", {
                                                                      className: "cp-acc-nick",
                                                                      children: ["微信号：", N.wxid],
                                                                  }),
                                                              N.why &&
                                                                  s.jsx("div", {
                                                                      className: "cp-acc-why",
                                                                      children: N.why,
                                                                  }),
                                                              N.why && s.jsx(V, { text: N.why }),
                                                              s.jsxs("div", {
                                                                  className: "cp-acc-meta",
                                                                  children: [
                                                                      (N.contacts || []).length,
                                                                      " 个联系人 · ",
                                                                      (N.threads || []).length,
                                                                      " 个会话",
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  },
                                                  N.id,
                                              ),
                                          ),
                                      }),
                                      s.jsx("div", {
                                          className: "cp-acc-foot",
                                          children:
                                              "微信小号无需接入线上，仅保存在这台手机中。可在微信「我」页面切换查看。",
                                      }),
                                  ],
                              }),
                          m.length > 0 &&
                              s.jsxs(s.Fragment, {
                                  children: [
                                      s.jsx(os, { title: "已接入" }),
                                      s.jsx("div", {
                                          className: "cp-group",
                                          children: m.map((N) => s.jsx(_, { r: N }, N.a.id)),
                                      }),
                                      s.jsx("div", {
                                          className: "cp-acc-foot",
                                          children:
                                              "以下账号已在线上显示并与他绑定。撤下后内容不会删除，仅在线上隐藏。",
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  s.jsx(H, { back: h, actions: s.jsx(is, { busy: n, onClick: r, label: "重新查" }) }),
              ],
          });
}
const Pc = 864e5;
function xn(e) {
    const t = String(e || "").trim();
    if (/[぀-ヿ㐀-鿿가-힯]/.test(t.slice(0, 2))) return t.replace(/\s+/g, "").slice(0, 2);
    const c = t
        .replace(/[^A-Za-z0-9\s:-]/g, " ")
        .split(/[\s:-]+/)
        .filter(Boolean);
    return (
        c.length > 1
            ? c
                  .slice(0, 2)
                  .map((r) => r[0])
                  .join("")
            : (c[0] || "·").slice(0, 2)
    ).toUpperCase();
}
function mn(e) {
    let t = 2166136261;
    for (const n of String(e || "")) ((t ^= n.charCodeAt(0)), (t = Math.imul(t, 16777619)));
    const c = (t >>> 0) % 100;
    return { a: `hsl(0 0% ${16 + (c % 14)}%)`, b: `hsl(0 0% ${34 + (c % 22)}%)`, angle: 130 + (c % 90) };
}
const pn = (e) => {
        const t = new Date(e);
        return `${t.getFullYear()} 年 ${t.getMonth() + 1} 月 ${t.getDate()} 日`;
    },
    vs = (e) => (e >= 100 ? Math.round(e).toLocaleString("zh-CN") : (Math.round(e * 10) / 10).toString());
function _s(e, t = Date.now()) {
    const c = Math.floor((t - e) / Pc);
    return c <= 0
        ? "今天"
        : c === 1
          ? "昨天"
          : c < 30
            ? `${c} 天前`
            : c < 365
              ? `${Math.floor(c / 30)} 个月前`
              : `${Math.floor(c / 365)} 年前`;
}
function Rc({ name: e, size: t = "sm" }) {
    const c = mn(e);
    return s.jsx("span", {
        className: `st-cover ${t}`,
        style: { background: `linear-gradient(${c.angle}deg, ${c.a}, ${c.b})` },
        "aria-hidden": !0,
        children: s.jsx("b", { children: xn(e) }),
    });
}
function jn({ daily: e = [] }) {
    const t = Math.max(1, ...e);
    return s.jsx("span", {
        className: "st-spark",
        "aria-label": "最近两周",
        children: e.map((c, n) =>
            s.jsx(
                "i",
                {
                    style: { height: `${c > 0 ? Math.max(14, (c / t) * 100) : 6}%` },
                    className: c > 0 ? "on" : "",
                },
                n,
            ),
        ),
    });
}
function un({ got: e, total: t, size: c = 44 }) {
    const n = (c - 5) / 2,
        r = 2 * Math.PI * n,
        h = t ? e / t : 0;
    return s.jsxs("svg", {
        className: "st-ring",
        width: c,
        height: c,
        viewBox: `0 0 ${c} ${c}`,
        "aria-hidden": !0,
        children: [
            s.jsx("circle", { cx: c / 2, cy: c / 2, r: n, className: "bg" }),
            s.jsx("circle", {
                cx: c / 2,
                cy: c / 2,
                r: n,
                className: "fg",
                style: { strokeDasharray: r, strokeDashoffset: r * (1 - h) },
            }),
        ],
    });
}
function Nn({ phone: e, busy: t, onGen: c, onExit: n, ownerName: r = "" }) {
    const h = e.steam || {},
        g = h.games || [],
        [x, u] = v.useState("recent"),
        [p, A] = v.useState(null),
        m = v.useMemo(
            () =>
                x === "hours"
                    ? g.slice().sort((d, z) => z.hours - d.hours)
                    : g.slice().sort((d, z) => z.lastAt - d.lastAt),
            [g, x],
        ),
        o = g.find((d) => d.id === p) || null;
    if (!h.generatedAt)
        return s.jsxs("div", {
            className: "cp-screen push st",
            children: [
                s.jsxs("div", {
                    className: "cp-scroll",
                    children: [
                        s.jsx("div", { className: "st-eyebrow", children: "STEAM" }),
                        s.jsx(te, { what: "游戏库", busy: t, onGen: c }),
                    ],
                }),
                s.jsx(H, { back: n }),
            ],
        });
    if (o) return s.jsx(gn, { game: o, onBack: () => A(null) });
    const b = g.reduce((d, z) => d + z.hours, 0),
        _ = g.reduce((d, z) => d + z.recent, 0),
        w = h.profile,
        j = /^游戏中/.test((w == null ? void 0 : w.status) || "");
    return s.jsxs("div", {
        className: "cp-screen push st",
        children: [
            s.jsxs("div", {
                className: "cp-scroll",
                children: [
                    s.jsx("div", { className: "st-eyebrow", children: "STEAM · 库" }),
                    w &&
                        s.jsxs("div", {
                            className: "st-profile",
                            children: [
                                s.jsx("span", {
                                    className: "st-avatar",
                                    children: String(w.name || r || "·").slice(0, 1),
                                }),
                                s.jsxs("span", {
                                    className: "st-profile-main",
                                    children: [
                                        s.jsx("b", { children: w.name || r }),
                                        s.jsxs("small", {
                                            children: [
                                                s.jsx("i", {
                                                    className: `st-dot ${j ? "on" : /在线/.test(w.status) ? "idle" : ""}`,
                                                }),
                                                w.status || "离线",
                                                w.years ? ` · ${w.years} 年` : "",
                                            ],
                                        }),
                                    ],
                                }),
                                w.level > 0 &&
                                    s.jsxs("span", {
                                        className: "st-level",
                                        children: [s.jsx("em", { children: "LV" }), w.level],
                                    }),
                            ],
                        }),
                    w &&
                        (w.bio || w.friends > 0 || w.badges > 0) &&
                        s.jsxs("div", {
                            className: "st-profile-sub",
                            children: [
                                w.bio && s.jsx("p", { children: w.bio }),
                                s.jsxs("span", {
                                    children: [
                                        w.friends > 0 &&
                                            s.jsxs(s.Fragment, {
                                                children: [s.jsx("b", { children: w.friends }), " 位好友"],
                                            }),
                                        w.friends > 0 && w.badges > 0 && s.jsx("i", {}),
                                        w.badges > 0 &&
                                            s.jsxs(s.Fragment, {
                                                children: [s.jsx("b", { children: w.badges }), " 枚徽章"],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    j &&
                        (() => {
                            const d = String(w.status).replace(/^游戏中[:：]\s*/, ""),
                                z = g.find((N) => N.name === d || d.includes(N.name) || N.name.includes(d));
                            return s.jsxs("button", {
                                className: "st-now btn-plain",
                                onClick: () => z && A(z.id),
                                disabled: !z,
                                children: [
                                    s.jsx("span", { className: "st-now-pulse", "aria-hidden": !0 }),
                                    s.jsxs("span", {
                                        className: "st-now-main",
                                        children: [
                                            s.jsx("small", { children: "正在游戏" }),
                                            s.jsx("b", { children: d }),
                                        ],
                                    }),
                                    z && s.jsx(Q, { size: 15, className: "st-chev" }),
                                ],
                            });
                        })(),
                    g.length
                        ? s.jsxs(s.Fragment, {
                              children: [
                                  s.jsxs("div", {
                                      className: "st-stats",
                                      children: [
                                          s.jsxs("div", {
                                              children: [
                                                  s.jsx("b", { children: g.length }),
                                                  s.jsx("span", { children: "游戏" }),
                                              ],
                                          }),
                                          s.jsxs("div", {
                                              children: [
                                                  s.jsx("b", { children: vs(b) }),
                                                  s.jsx("span", { children: "总时长 · 小时" }),
                                              ],
                                          }),
                                          s.jsxs("div", {
                                              children: [
                                                  s.jsx("b", { children: vs(_) }),
                                                  s.jsx("span", { children: "最近两周 · 小时" }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  s.jsx("div", {
                                      className: "st-seg",
                                      role: "tablist",
                                      children: [
                                          ["recent", "最近玩过"],
                                          ["hours", "按时长"],
                                      ].map(([d, z]) =>
                                          s.jsx(
                                              "button",
                                              {
                                                  role: "tab",
                                                  "aria-selected": x === d,
                                                  className: `btn-plain${x === d ? " on" : ""}`,
                                                  onClick: () => u(d),
                                                  children: z,
                                              },
                                              d,
                                          ),
                                      ),
                                  }),
                                  s.jsx("div", {
                                      className: "st-list",
                                      children: m.map((d) =>
                                          s.jsxs(
                                              "button",
                                              {
                                                  className: "st-row btn-plain",
                                                  onClick: () => A(d.id),
                                                  children: [
                                                      s.jsx(Rc, { name: d.name }),
                                                      s.jsxs("span", {
                                                          className: "st-row-main",
                                                          children: [
                                                              s.jsx("b", { children: d.name }),
                                                              d.genre &&
                                                                  s.jsx("em", {
                                                                      className: "st-genre",
                                                                      children: d.genre,
                                                                  }),
                                                              s.jsxs("small", {
                                                                  children: [
                                                                      vs(d.hours),
                                                                      " 小时 · ",
                                                                      d.recent > 0
                                                                          ? `两周 ${vs(d.recent)} 小时`
                                                                          : _s(d.lastAt),
                                                                  ],
                                                              }),
                                                              d.ach &&
                                                                  s.jsx("span", {
                                                                      className: "st-achbar",
                                                                      children: s.jsx("i", {
                                                                          style: {
                                                                              width: `${(d.ach[0] / d.ach[1]) * 100}%`,
                                                                          },
                                                                      }),
                                                                  }),
                                                          ],
                                                      }),
                                                      s.jsx(jn, { daily: d.daily }),
                                                      s.jsx(Q, { size: 15, className: "st-chev" }),
                                                  ],
                                              },
                                              d.id,
                                          ),
                                      ),
                                  }),
                                  s.jsx("p", {
                                      className: "st-foot",
                                      children: "时长、生涯和对局按他的人设、日子和你们之间的记录生成。",
                                  }),
                              ],
                          })
                        : s.jsx(xs, {
                              title: "这台手机上没有 Steam",
                              children: "他的世界里没有这个，或者他不玩游戏。",
                          }),
                ],
            }),
            s.jsx(H, { back: n, actions: s.jsx(is, { busy: t, onClick: c, label: "重新生成游戏库" }) }),
        ],
    });
}
function gn({ game: e, onBack: t }) {
    const [c, n] = v.useState(null),
        [r, h] = v.useState(null),
        g = Math.max(1, ...e.daily),
        x = e.daily.filter((o) => o > 0).length,
        u = e.matches.filter((o) => o.duration > 0),
        p = u.length ? Math.round(u.reduce((o, b) => o + b.duration, 0) / u.length) : 0,
        A = new Date(),
        m = (o) => {
            const b = new Date(A.getTime() - (13 - o) * Pc);
            return `${b.getMonth() + 1}/${b.getDate()}`;
        };
    return s.jsxs("div", {
        className: "cp-screen push st",
        children: [
            s.jsxs("div", {
                className: "cp-scroll",
                children: [
                    s.jsxs("div", {
                        className: "st-hero",
                        children: [
                            s.jsx(Rc, { name: e.name, size: "xl" }),
                            s.jsxs("div", {
                                className: "st-hero-copy",
                                children: [
                                    s.jsx("span", {
                                        className: "st-eyebrow tight",
                                        children: "STEAM · 游戏",
                                    }),
                                    s.jsx("h1", { children: e.name }),
                                    s.jsx("small", {
                                        children:
                                            [e.genre, e.developer, e.year].filter(Boolean).join(" · ") ||
                                            `最后运行 ${_s(e.lastAt)}`,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    s.jsxs("div", {
                        className: "st-grid",
                        children: [
                            s.jsxs("div", {
                                children: [
                                    s.jsx("span", { children: "总时长" }),
                                    s.jsxs("b", {
                                        children: [vs(e.hours), s.jsx("em", { children: "小时" })],
                                    }),
                                ],
                            }),
                            s.jsxs("div", {
                                children: [
                                    s.jsx("span", { children: "最近两周" }),
                                    s.jsxs("b", {
                                        children: [vs(e.recent), s.jsx("em", { children: "小时" })],
                                    }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "ach",
                                children: [
                                    s.jsx("span", { children: "成就" }),
                                    e.ach
                                        ? s.jsxs("b", {
                                              className: "with-ring",
                                              children: [
                                                  s.jsx(un, { got: e.ach[0], total: e.ach[1], size: 34 }),
                                                  e.ach[0],
                                                  s.jsxs("em", { children: ["/ ", e.ach[1]] }),
                                              ],
                                          })
                                        : s.jsx("b", { className: "mute", children: "—" }),
                                ],
                            }),
                            s.jsxs("div", {
                                children: [
                                    s.jsx("span", { children: "最后运行" }),
                                    s.jsx("b", { className: "sm", children: _s(e.lastAt) }),
                                ],
                            }),
                        ],
                    }),
                    s.jsxs("div", {
                        className: "st-card",
                        children: [
                            s.jsxs("div", {
                                className: "st-card-head",
                                children: [
                                    s.jsx("b", { children: "最近两周" }),
                                    s.jsx("small", {
                                        children:
                                            r != null
                                                ? `${m(r)} · ${vs(e.daily[r])} 小时`
                                                : x
                                                  ? `${x} 天在玩 · 日均 ${vs(e.recent / 14)} 小时`
                                                  : "这两周没有打开",
                                    }),
                                ],
                            }),
                            s.jsx("div", {
                                className: "st-chart",
                                onMouseLeave: () => h(null),
                                children: e.daily.map((o, b) =>
                                    s.jsx(
                                        "button",
                                        {
                                            type: "button",
                                            className: `st-col btn-plain${r === b ? " sel" : ""}${r != null && r !== b ? " dim" : ""}`,
                                            onClick: () => h(r === b ? null : b),
                                            "aria-label": `${m(b)} ${o} 小时`,
                                            children: s.jsx("i", {
                                                style: {
                                                    height: `${o > 0 ? Math.max(4, (o / g) * 100) : 0}%`,
                                                    "--i": b * 28,
                                                },
                                                className: o > 0 ? "on" : "",
                                            }),
                                        },
                                        b,
                                    ),
                                ),
                            }),
                            s.jsxs("div", {
                                className: "st-axis",
                                children: [
                                    s.jsx("span", { children: m(0) }),
                                    s.jsx("span", { children: m(7) }),
                                    s.jsx("span", { children: m(13) }),
                                ],
                            }),
                        ],
                    }),
                    (e.firstAt || p || e.friends.length > 0 || e.developer) &&
                        s.jsxs(s.Fragment, {
                            children: [
                                s.jsx("div", { className: "st-sect", children: "资料" }),
                                s.jsxs("div", {
                                    className: "st-group",
                                    children: [
                                        e.genre &&
                                            s.jsxs("div", {
                                                className: "st-kv",
                                                children: [
                                                    s.jsx("span", { children: "类型" }),
                                                    s.jsx("b", { children: e.genre }),
                                                ],
                                            }),
                                        e.developer &&
                                            s.jsxs("div", {
                                                className: "st-kv",
                                                children: [
                                                    s.jsx("span", { children: "开发商" }),
                                                    s.jsx("b", { children: e.developer }),
                                                ],
                                            }),
                                        e.year &&
                                            s.jsxs("div", {
                                                className: "st-kv",
                                                children: [
                                                    s.jsx("span", { children: "发行" }),
                                                    s.jsxs("b", { children: [e.year, " 年"] }),
                                                ],
                                            }),
                                        e.firstAt &&
                                            s.jsxs("div", {
                                                className: "st-kv",
                                                children: [
                                                    s.jsx("span", { children: "第一次运行" }),
                                                    s.jsx("b", { children: pn(e.firstAt) }),
                                                ],
                                            }),
                                        p > 0 &&
                                            s.jsxs("div", {
                                                className: "st-kv",
                                                children: [
                                                    s.jsx("span", { children: "平均每次" }),
                                                    s.jsxs("b", { children: [p, " 分钟"] }),
                                                ],
                                            }),
                                        e.friends.length > 0 &&
                                            s.jsxs("div", {
                                                className: "st-kv",
                                                children: [
                                                    s.jsx("span", { children: "一起玩" }),
                                                    s.jsxs("span", {
                                                        className: "st-friends",
                                                        children: [
                                                            e.friends.map((o) =>
                                                                s.jsx(
                                                                    "i",
                                                                    { title: o, children: o.slice(0, 1) },
                                                                    o,
                                                                ),
                                                            ),
                                                            s.jsx("b", { children: e.friends.join("、") }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    e.review &&
                        s.jsxs(s.Fragment, {
                            children: [
                                s.jsx("div", { className: "st-sect", children: "他的评测" }),
                                s.jsxs("div", {
                                    className: "st-review",
                                    children: [
                                        s.jsxs("div", {
                                            className: `st-review-head ${e.review.up ? "up" : "down"}`,
                                            children: [
                                                e.review.up
                                                    ? s.jsx(Jt, { size: 16, strokeWidth: 2.4 })
                                                    : s.jsx(Qt, { size: 16, strokeWidth: 2.4 }),
                                                s.jsx("b", { children: e.review.up ? "推荐" : "不推荐" }),
                                                s.jsxs("small", {
                                                    children: [
                                                        "写于 ",
                                                        _s(e.review.at),
                                                        " · 当时 ",
                                                        vs(e.hours),
                                                        " 小时",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        s.jsxs("p", {
                                            children: [e.review.text, s.jsx(V, { text: e.review.text })],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    e.unlocks.length > 0 &&
                        s.jsxs(s.Fragment, {
                            children: [
                                s.jsx("div", { className: "st-sect", children: "最近解锁" }),
                                s.jsx("div", {
                                    className: "st-group",
                                    children: e.unlocks.map((o, b) =>
                                        s.jsxs(
                                            "div",
                                            {
                                                className: "st-unlock",
                                                children: [
                                                    s.jsx("span", {
                                                        className: `st-trophy${o.pct < 10 ? " rare" : ""}`,
                                                        "aria-hidden": !0,
                                                        children: o.pct < 10 ? "◆" : "◇",
                                                    }),
                                                    s.jsxs("span", {
                                                        className: "st-unlock-main",
                                                        children: [
                                                            s.jsxs("b", {
                                                                children: [
                                                                    o.name,
                                                                    s.jsx(rs, { text: o.name }),
                                                                ],
                                                            }),
                                                            o.desc &&
                                                                s.jsxs("small", {
                                                                    children: [
                                                                        o.desc,
                                                                        s.jsx(V, { text: o.desc }),
                                                                    ],
                                                                }),
                                                        ],
                                                    }),
                                                    s.jsxs("span", {
                                                        className: "st-unlock-r",
                                                        children: [
                                                            s.jsx("b", {
                                                                children: o.pct ? `${o.pct}%` : "—",
                                                            }),
                                                            s.jsx("small", { children: _s(o.at) }),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            b,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    e.career.length > 0 &&
                        s.jsxs(s.Fragment, {
                            children: [
                                s.jsx("div", { className: "st-sect", children: "生涯" }),
                                s.jsx("div", {
                                    className: "st-group",
                                    children: e.career.map((o, b) =>
                                        s.jsxs(
                                            "div",
                                            {
                                                className: "st-kv",
                                                children: [
                                                    s.jsxs("span", {
                                                        children: [o.k, s.jsx(V, { text: o.k })],
                                                    }),
                                                    s.jsxs("b", { children: [o.v, s.jsx(V, { text: o.v })] }),
                                                ],
                                            },
                                            b,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    s.jsx("div", { className: "st-sect", children: "最近对局" }),
                    e.matches.length
                        ? s.jsx("div", {
                              className: "st-group",
                              children: e.matches.map((o) => {
                                  const b = c === o.id,
                                      _ = o.result === "胜" || o.result === "通关";
                                  return s.jsxs(
                                      "button",
                                      {
                                          className: `st-match btn-plain${b ? " open" : ""}`,
                                          onClick: () => n(b ? null : o.id),
                                          "aria-expanded": b,
                                          disabled: !o.note,
                                          children: [
                                              s.jsx("span", {
                                                  className: `st-res ${_ ? "win" : o.result ? "loss" : "none"}`,
                                                  children: o.result || "—",
                                              }),
                                              s.jsxs("span", {
                                                  className: "st-match-main",
                                                  children: [
                                                      s.jsxs("b", {
                                                          children: [
                                                              o.mode || "对局",
                                                              s.jsx(rs, { text: o.mode }),
                                                          ],
                                                      }),
                                                      o.line && s.jsx("small", { children: o.line }),
                                                      b &&
                                                          o.note &&
                                                          s.jsxs("p", {
                                                              children: [o.note, s.jsx(V, { text: o.note })],
                                                          }),
                                                  ],
                                              }),
                                              s.jsxs("span", {
                                                  className: "st-match-r",
                                                  children: [
                                                      s.jsx("small", { children: _s(o.at) }),
                                                      o.duration > 0 &&
                                                          s.jsxs("small", {
                                                              children: [o.duration, " 分钟"],
                                                          }),
                                                  ],
                                              }),
                                              o.note
                                                  ? s.jsx(Ks, { size: 14, className: "st-match-chev" })
                                                  : s.jsx("span", { className: "st-match-chev" }),
                                          ],
                                      },
                                      o.id,
                                  );
                              }),
                          })
                        : s.jsx("div", { className: "st-empty", children: "这款还没有对局记录。" }),
                    s.jsx("div", { style: { height: 40 } }),
                ],
            }),
            s.jsx(H, { back: t }),
        ],
    });
}
const fe = (e) => String(e).padStart(2, "0");
function Ec(e) {
    const t = String(e || "");
    let c = 2166136261;
    for (let r = 0; r < t.length; r++) ((c ^= t.charCodeAt(r)), (c = Math.imul(c, 16777619)));
    const n = (c >>> 0) % 100;
    return {
        a: `hsl(0 0% ${20 + (n % 30)}%)`,
        b: `hsl(0 0% ${(n % 2 ? 62 : 8) + (n % 14)}%)`,
        angle: 110 + (n % 140),
    };
}
function zs(e, t = Date.now()) {
    const c = Math.max(0, t - (Number(e) || 0));
    if (c < 6e4) return "刚刚";
    if (c < 36e5) return `${Math.floor(c / 6e4)} 分钟前`;
    if (c < 864e5) return `${Math.floor(c / 36e5)} 小时前`;
    if (c < 30 * 864e5) return `${Math.floor(c / 864e5)} 天前`;
    const n = new Date(e);
    return `${n.getMonth() + 1}月${n.getDate()}日`;
}
function vn(e, t = Date.now()) {
    const c = new Date(e),
        n = new Date(t),
        r = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
    return e >= r ? "今天" : e >= r - 864e5 ? "昨天" : `${c.getMonth() + 1}月${c.getDate()}日`;
}
function ke({ seed: e, size: t, radius: c = 8, label: n = "", round: r = !1 }) {
    const h = Ec(e);
    return s.jsx("span", {
        className: "mu-cover cpm-cover",
        style: {
            width: t,
            height: t,
            borderRadius: r ? "50%" : c,
            background: `linear-gradient(${h.angle}deg, ${h.a}, ${h.b})`,
        },
        children: n
            ? s.jsx("b", { children: n })
            : s.jsx(Ac, { size: typeof t == "number" ? Math.round(t * 0.4) : 44 }),
    });
}
function pe({ seed: e, label: t, title: c, sub: n, onClick: r, size: h = 150 }) {
    return s.jsxs("button", {
        className: "btn-plain mu-tile",
        onClick: r,
        style: { width: h },
        children: [
            s.jsx(ke, { seed: e, size: h, radius: 10, label: t }),
            s.jsx("span", { className: "mu-tile-title", children: c }),
            n && s.jsx("span", { className: "mu-tile-sub", children: n }),
        ],
    });
}
function Vs({ song: e, index: t, sub: c, right: n }) {
    const { state: r } = zc(),
        h = Wc(),
        g = () => {
            var x;
            return Mt(`phone:${e.title}|${e.artist}`, e, (x = r.music) == null ? void 0 : x.songs).catch(
                (u) => h(u.message || "没找到这首歌", "error"),
            );
        };
    return s.jsxs("div", {
        className: "mu-song",
        role: "button",
        onClick: g,
        children: [
            t != null
                ? s.jsx("span", { className: "mu-song-idx", children: t })
                : s.jsx("span", {
                      className: "mu-song-art",
                      children: s.jsx(ke, { seed: `${e.title}${e.artist}`, size: 48, radius: 6 }),
                  }),
            s.jsxs("span", {
                className: "mu-song-text",
                children: [
                    s.jsx("span", { className: "mu-song-title", children: e.title }),
                    s.jsx("span", {
                        className: "mu-song-sub",
                        children: c ?? [e.artist, e.album].filter(Boolean).join(" · "),
                    }),
                ],
            }),
            n || s.jsx("span", { className: "mu-song-more", children: s.jsx($t, { size: 20 }) }),
        ],
    });
}
function Ss({ title: e, onMore: t, children: c }) {
    return s.jsxs("section", {
        className: "mu-sec",
        children: [
            s.jsxs("button", {
                className: "btn-plain mu-sec-head",
                onClick: t,
                disabled: !t,
                children: [s.jsx("span", { children: e }), t && s.jsx(Q, { size: 20, strokeWidth: 2.6 })],
            }),
            c,
        ],
    });
}
function bn({ src: e, name: t, size: c = 36 }) {
    return s.jsx("span", {
        className: "mu-avatar",
        style: { width: c, height: c, fontSize: c * 0.4 },
        children: e ? s.jsx(hs, { src: e, alt: "" }) : String(t || "·").slice(0, 1),
    });
}
const fn = [
    {
        id: "home",
        label: "主页",
        Icon: ({ on: e }) =>
            s.jsx("svg", {
                width: "25",
                height: "25",
                viewBox: "0 0 24 24",
                fill: e ? "currentColor" : "none",
                stroke: "currentColor",
                strokeWidth: "1.9",
                strokeLinejoin: "round",
                "aria-hidden": !0,
                children: s.jsx("path", {
                    d: "M3.5 10.2 12 3.5l8.5 6.7V19a1.5 1.5 0 0 1-1.5 1.5h-4.3v-5.6H9.3v5.6H5A1.5 1.5 0 0 1 3.5 19v-8.8Z",
                }),
            }),
    },
    { id: "library", label: "资料库", Icon: () => s.jsx(Ic, { size: 25, strokeWidth: 2 }) },
    { id: "search", label: "搜索", Icon: () => s.jsx(us, { size: 25, strokeWidth: 2.3 }) },
];
function kn({ char: e, state: t, phone: c, busy: n, onGen: r, onExit: h }) {
    var S;
    const g = c.music || {},
        [x, u] = v.useState("home"),
        [p, A] = v.useState(null),
        [m, o] = v.useState(""),
        b = ls(e),
        _ = g.playlists || [],
        w = g.recent || [],
        j = g.liked || [],
        d = v.useMemo(() => {
            const l = new Map();
            for (const M of [...w, ...j, ..._.flatMap((D) => D.songs)]) {
                const D = `${M.title}\0${M.artist}`;
                l.has(D) || l.set(D, M);
            }
            return [...l.values()];
        }, [w, j, _]),
        z = (((S = t.music) == null ? void 0 : S.sessions) || []).filter((l) => l.charId === e.id),
        N = [...w]
            .sort((l, M) => (M.plays || 0) - (l.plays || 0))
            .filter((l) => (l.plays || 0) >= 3)
            .slice(0, 5),
        $ = !_.length && !w.length,
        C = g.nowPlaying,
        k = s.jsx("button", {
            className: "btn-plain mu-glass-btn",
            onClick: n ? void 0 : r,
            disabled: n,
            "aria-label": "重新生成",
            children: s.jsx(J, { size: 18, strokeWidth: 2.2, className: n ? "cp-spin" : "" }),
        }),
        W = (l, M = !1) =>
            s.jsxs("header", {
                className: "mu-lt",
                children: [
                    s.jsx("button", {
                        className: "btn-plain mu-glass-btn",
                        onClick: h,
                        "aria-label": "返回",
                        children: s.jsx(bs, { size: 22, strokeWidth: 2.4 }),
                    }),
                    s.jsx("h1", { children: l }),
                    s.jsxs("div", {
                        className: "mu-lt-right",
                        children: [k, M && s.jsx(bn, { src: e.avatar, name: b, size: 36 })],
                    }),
                ],
            });
    let y;
    if ((p == null ? void 0 : p.type) === "playlist") {
        const l = _.find((M) => M.id === p.id);
        y = l
            ? s.jsxs(s.Fragment, {
                  children: [
                      s.jsx("div", {
                          className: "mu-pagebar",
                          children: s.jsx("button", {
                              className: "btn-plain mu-glass-btn",
                              onClick: () => A(null),
                              "aria-label": "返回",
                              children: s.jsx(bs, { size: 22, strokeWidth: 2.4 }),
                          }),
                      }),
                      s.jsxs("div", {
                          className: "cpm-pl-head",
                          children: [
                              s.jsx(ke, { seed: l.name, size: 230, radius: 14, label: l.name }),
                              s.jsx("h2", { children: l.name }),
                              s.jsx("em", { children: b }),
                              s.jsxs("span", { children: [l.songs.length, " 首歌曲 · 更新于 ", zs(l.at)] }),
                              l.desc ? s.jsx("p", { children: l.desc }) : null,
                          ],
                      }),
                      s.jsx("div", {
                          className: "mu-list",
                          children: l.songs.map((M, D) => s.jsx(Vs, { song: M, index: D + 1 }, M.id)),
                      }),
                  ],
              })
            : null;
    } else if ((p == null ? void 0 : p.type) === "lib") {
        const l = p.which,
            M = l === "liked" ? j : d;
        y = s.jsxs(s.Fragment, {
            children: [
                s.jsxs("div", {
                    className: "mu-pagebar is-titled",
                    children: [
                        s.jsx("button", {
                            className: "btn-plain mu-glass-btn",
                            onClick: () => A(null),
                            "aria-label": "返回",
                            children: s.jsx(bs, { size: 22, strokeWidth: 2.4 }),
                        }),
                        s.jsx("span", {
                            className: "mu-pagebar-title",
                            children: l === "playlists" ? "歌单" : l === "liked" ? "收藏" : "歌曲",
                        }),
                    ],
                }),
                l === "playlists"
                    ? s.jsx("div", {
                          className: "mu-grid",
                          children: _.map((D) =>
                              s.jsx(
                                  pe,
                                  {
                                      seed: D.name,
                                      label: D.name,
                                      title: D.name,
                                      sub: `${D.songs.length} 首`,
                                      size: "100%",
                                      onClick: () => A({ type: "playlist", id: D.id }),
                                  },
                                  D.id,
                              ),
                          ),
                      })
                    : s.jsx("div", {
                          className: "mu-list",
                          children: M.map((D) => s.jsx(Vs, { song: D }, D.id)),
                      }),
            ],
        });
    } else if (x === "home")
        y = s.jsxs(s.Fragment, {
            children: [
                W("主页", !0),
                $
                    ? s.jsxs("div", {
                          className: "mu-hero-empty",
                          children: [
                              s.jsx("span", {
                                  className: "mu-hero-glyph",
                                  children: s.jsx(Ac, { size: 30 }),
                              }),
                              s.jsx("b", { children: n ? "正在生成他的音乐" : "他的音乐还是空的" }),
                              s.jsx("p", {
                                  children:
                                      "他的歌单、最近在放的、单曲循环的那几首，要按他的人设和最近过的日子长出来。会花一次调用。",
                              }),
                              !n &&
                                  s.jsx("div", {
                                      className: "mu-hero-actions",
                                      children: s.jsxs("button", {
                                          className: "btn-plain mu-pill dark",
                                          onClick: r,
                                          children: [s.jsx(J, { size: 16, strokeWidth: 2.4 }), "生成"],
                                      }),
                                  }),
                          ],
                      })
                    : s.jsxs(s.Fragment, {
                          children: [
                              !!w.length &&
                                  s.jsx(Ss, {
                                      title: "最近播放",
                                      children: s.jsx("div", {
                                          className: "mu-shelf",
                                          children: w
                                              .slice(0, 12)
                                              .map((l) =>
                                                  s.jsx(
                                                      pe,
                                                      {
                                                          seed: `${l.title}${l.artist}`,
                                                          title: l.title,
                                                          sub: l.artist,
                                                      },
                                                      l.id,
                                                  ),
                                              ),
                                      }),
                                  }),
                              !!N.length &&
                                  s.jsx(Ss, {
                                      title: "单曲循环",
                                      children: s.jsx("div", {
                                          className: "mu-list",
                                          children: N.map((l) =>
                                              s.jsx(
                                                  Vs,
                                                  { song: l, sub: `${l.artist} · 这周放了 ${l.plays} 次` },
                                                  l.id,
                                              ),
                                          ),
                                      }),
                                  }),
                              !!_.length &&
                                  s.jsx(Ss, {
                                      title: "他的歌单",
                                      onMore: () => A({ type: "lib", which: "playlists" }),
                                      children: s.jsx("div", {
                                          className: "mu-shelf",
                                          children: _.map((l) =>
                                              s.jsx(
                                                  pe,
                                                  {
                                                      seed: l.name,
                                                      label: l.name,
                                                      title: l.name,
                                                      sub: `${l.songs.length} 首`,
                                                      onClick: () => A({ type: "playlist", id: l.id }),
                                                  },
                                                  l.id,
                                              ),
                                          ),
                                      }),
                                  }),
                              !!z.length &&
                                  s.jsx(Ss, {
                                      title: `和${se(t.me) || "你"}一起听过`,
                                      children: s.jsx("div", {
                                          className: "mu-list",
                                          children: z.slice(0, 5).map((l) => {
                                              const M = new Date(l.since);
                                              return s.jsxs(
                                                  "div",
                                                  {
                                                      className: "mu-song",
                                                      children: [
                                                          s.jsx("span", {
                                                              className: "mu-song-art",
                                                              children: s.jsx("span", {
                                                                  className:
                                                                      "mu-cover cpm-cover cpm-together",
                                                                  style: {
                                                                      width: 48,
                                                                      height: 48,
                                                                      borderRadius: 6,
                                                                  },
                                                                  children: s.jsx(Xt, { size: 20 }),
                                                              }),
                                                          }),
                                                          s.jsxs("span", {
                                                              className: "mu-song-text",
                                                              children: [
                                                                  s.jsxs("span", {
                                                                      className: "mu-song-title",
                                                                      children: [
                                                                          M.getMonth() + 1,
                                                                          "月",
                                                                          M.getDate(),
                                                                          "日 ",
                                                                          fe(M.getHours()),
                                                                          ":",
                                                                          fe(M.getMinutes()),
                                                                      ],
                                                                  }),
                                                                  s.jsxs("span", {
                                                                      className: "mu-song-sub",
                                                                      children: [
                                                                          (l.songs || []).length,
                                                                          " 首 · ",
                                                                          (l.songs || [])
                                                                              .slice(0, 2)
                                                                              .map((D) => D.title)
                                                                              .filter(Boolean)
                                                                              .join("、") || "没放完一首",
                                                                      ],
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  },
                                                  l.id,
                                              );
                                          }),
                                      }),
                                  }),
                              !!j.length &&
                                  s.jsx(Ss, {
                                      title: "收藏的歌曲",
                                      onMore: () => A({ type: "lib", which: "liked" }),
                                      children: s.jsx("div", {
                                          className: "mu-list",
                                          children: j
                                              .slice(0, 5)
                                              .map((l) =>
                                                  s.jsx(
                                                      Vs,
                                                      {
                                                          song: l,
                                                          right: s.jsx("span", {
                                                              className: "mu-song-more",
                                                              children: s.jsx(ge, {
                                                                  size: 16,
                                                                  fill: "currentColor",
                                                                  strokeWidth: 0,
                                                              }),
                                                          }),
                                                      },
                                                      l.id,
                                                  ),
                                              ),
                                      }),
                                  }),
                          ],
                      }),
            ],
        });
    else if (x === "library")
        y = s.jsxs(s.Fragment, {
            children: [
                W("资料库"),
                s.jsx("div", {
                    className: "mu-lib-rows",
                    children: [
                        ["playlists", "歌单", Ic, _.length],
                        ["songs", "歌曲", sa, d.length],
                        ["liked", "收藏", ge, j.length],
                    ].map(([l, M, D, fs]) =>
                        s.jsxs(
                            "button",
                            {
                                className: "btn-plain mu-lib-row",
                                onClick: () => A({ type: "lib", which: l }),
                                children: [
                                    s.jsx(D, { size: 26, strokeWidth: 1.8 }),
                                    s.jsx("span", { children: M }),
                                    s.jsx("em", { className: "cpm-count", children: fs }),
                                    s.jsx(Q, { size: 20, className: "mu-dim" }),
                                ],
                            },
                            l,
                        ),
                    ),
                }),
                !!_.length &&
                    s.jsx(Ss, {
                        title: "最近添加",
                        children: s.jsx("div", {
                            className: "mu-grid",
                            children: [..._]
                                .sort((l, M) => M.at - l.at)
                                .slice(0, 6)
                                .map((l) =>
                                    s.jsx(
                                        pe,
                                        {
                                            seed: l.name,
                                            label: l.name,
                                            title: l.name,
                                            sub: `歌单 · ${l.songs.length} 首`,
                                            size: "100%",
                                            onClick: () => A({ type: "playlist", id: l.id }),
                                        },
                                        l.id,
                                    ),
                                ),
                        }),
                    }),
            ],
        });
    else {
        const l = m.trim().toLowerCase(),
            M = l ? d.filter((D) => `${D.title} ${D.artist} ${D.album}`.toLowerCase().includes(l)) : [];
        y = s.jsxs(s.Fragment, {
            children: [
                W("搜索"),
                s.jsx("div", {
                    className: "mu-search",
                    children: s.jsxs("label", {
                        className: "mu-field",
                        children: [
                            s.jsx(us, { size: 18, strokeWidth: 2.4 }),
                            s.jsx("input", {
                                value: m,
                                placeholder: "搜索他的资料库",
                                onChange: (D) => o(D.target.value),
                            }),
                            m &&
                                s.jsx("button", {
                                    className: "btn-plain mu-field-x",
                                    onClick: () => o(""),
                                    "aria-label": "清除",
                                    children: s.jsx(Js, { size: 12, strokeWidth: 3 }),
                                }),
                        ],
                    }),
                }),
                l
                    ? M.length
                        ? s.jsx("div", {
                              className: "mu-list",
                              children: M.map((D) => s.jsx(Vs, { song: D }, D.id)),
                          })
                        : s.jsxs("div", { className: "cpm-note", children: ["他的资料库里没有「", m, "」"] })
                    : s.jsx(Ss, {
                          title: "最近搜索",
                          children: (g.searches || []).length
                              ? s.jsx("div", {
                                    className: "cpm-searches",
                                    children: g.searches.map((D, fs) =>
                                        s.jsxs(
                                            "button",
                                            {
                                                className: "btn-plain",
                                                onClick: () => o(D),
                                                children: [
                                                    s.jsx(ea, { size: 16, className: "mu-dim" }),
                                                    s.jsx("span", { children: D }),
                                                ],
                                            },
                                            fs,
                                        ),
                                    ),
                                })
                              : s.jsx("div", { className: "cpm-note", children: "没有搜索记录" }),
                      }),
            ],
        });
    }
    return s.jsxs("div", {
        className: "mu-app cpm",
        children: [
            s.jsx("div", {
                className: "mu-scroll",
                children: s.jsxs("div", {
                    className: "mu-page",
                    children: [y, s.jsx("div", { className: "mu-bottom-space" })],
                }),
            }),
            s.jsxs("div", {
                className: "mu-dock",
                children: [
                    s.jsxs("div", {
                        className: "mu-mini",
                        children: [
                            s.jsx("span", {
                                className: "mu-mini-art",
                                children: s.jsx(ke, {
                                    seed: C ? `${C.title}${C.artist}` : "none",
                                    size: 40,
                                    round: !0,
                                }),
                            }),
                            s.jsxs("span", {
                                className: "mu-mini-title",
                                children: [
                                    C ? C.title : "未在播放",
                                    C && s.jsxs("em", { children: [C.artist, " · ", zs(C.at), "停在这里"] }),
                                ],
                            }),
                            s.jsx("span", { className: "mu-mini-btn", children: s.jsx(yt, { size: 22 }) }),
                            s.jsx("span", { className: "mu-mini-btn", children: s.jsx(Ct, { size: 26 }) }),
                            C &&
                                s.jsx("span", {
                                    className: "mu-mini-progress",
                                    style: { width: `${C.progress || 0}%` },
                                }),
                        ],
                    }),
                    s.jsx("nav", {
                        className: "mu-tabbar cpm-tabbar",
                        children: fn.map(({ id: l, label: M, Icon: D }) =>
                            s.jsxs(
                                "button",
                                {
                                    className: `btn-plain mu-tab ${x === l && !p ? "on" : ""}`,
                                    onClick: () => {
                                        (u(l), A(null));
                                    },
                                    children: [
                                        s.jsx("span", {
                                            className: "mu-tab-ico",
                                            children: s.jsx(D, { on: x === l }),
                                        }),
                                        s.jsx("span", { children: M }),
                                    ],
                                },
                                l,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
const ys = (e) => {
    try {
        return new URL(e).hostname.replace(/^www\./, "");
    } catch {
        return String(e || "");
    }
};
function Is({ url: e, title: t, size: c = 60 }) {
    const n = ys(e),
        r = Ec(n),
        h = String(t || n || "·")
            .trim()
            .slice(0, 1)
            .toUpperCase();
    return s.jsx("span", {
        className: "cps-icon",
        style: {
            width: c,
            height: c,
            background: `linear-gradient(${r.angle}deg, ${r.a}, ${r.b})`,
            fontSize: c * 0.42,
        },
        children: h,
    });
}
function wn({ entry: e, onForward: t, onFill: c }) {
    const n = ys(e.url),
        r = String(e.excerpt || "")
            .split(/\n+/)
            .map((x) => x.trim())
            .filter(Boolean),
        [h, g] = v.useState(!1);
    return e.query
        ? s.jsxs("article", {
              className: "cps-page",
              children: [
                  s.jsxs("div", { className: "cps-serp-q", children: [s.jsx(us, { size: 16 }), e.query] }),
                  s.jsx(V, { text: e.query, className: "cps-tr-sub" }),
                  s.jsx("p", {
                      className: "cps-serp-note",
                      children: "这是他搜的。结果页没有留在手机上 —— 只有这一行在历史记录里。",
                  }),
                  s.jsxs("div", { className: "cps-serp-when", children: [zs(e.at), " · ", n] }),
              ],
          })
        : s.jsxs("article", {
              className: "cps-page",
              children: [
                  s.jsxs("div", {
                      className: "cps-site",
                      children: [
                          s.jsx(Is, { url: e.url, title: n, size: 22 }),
                          s.jsx("span", { children: n }),
                      ],
                  }),
                  s.jsx("h1", { children: e.title }),
                  s.jsx(V, { text: e.title, className: "cps-tr-sub" }),
                  s.jsx("div", {
                      className: "cps-when",
                      children:
                          e.kind === "reading"
                              ? `阅读列表 · ${zs(e.at)}存的${e.read ? " · 读过" : " · 还没读"}`
                              : e.at
                                ? `${zs(e.at)}${e.excerpt ? "停在这里" : ""}`
                                : "",
                  }),
                  r.length
                      ? r.map((x, u) => s.jsx("p", { children: x }, u))
                      : s.jsxs("div", {
                            className: "cps-dim",
                            children: [
                                s.jsx("p", { children: "这一页没有存下正文。" }),
                                c &&
                                    s.jsxs("button", {
                                        className: "cps-pill",
                                        disabled: h,
                                        onClick: async () => {
                                            g(!0);
                                            try {
                                                await c(e);
                                            } finally {
                                                g(!1);
                                            }
                                        },
                                        children: [
                                            s.jsx(J, { size: 15, className: h ? "cp-spin" : "" }),
                                            h ? "正在打开…" : "打开这一页",
                                        ],
                                    }),
                            ],
                        }),
                  r.length > 0 &&
                      s.jsx(Me, {
                          text: r.join(`
`),
                      }),
                  t &&
                      s.jsxs("button", {
                          className: "cps-fwd",
                          onClick: () =>
                              t({
                                  app: "safari",
                                  title: e.title,
                                  body: [e.url, ...r].join(`
`),
                              }),
                          children: [s.jsx(ce, { size: 15 }), "转发到聊天"],
                      }),
              ],
          });
}
function yn({ phone: e, busy: t, onGen: c, onExit: n, onForward: r, onFillPage: h }) {
    const g = e.browser || {},
        x = g.tabs || [],
        u = g.history || [],
        [p, A] = v.useState(() => (x.length ? "page" : "start")),
        [m, o] = v.useState(() => x[0] || null),
        [b, _] = v.useState("bookmarks"),
        w = g.privateTabs || [],
        [j, d] = v.useState(!1),
        z = !x.length && !u.length,
        N = (y) => {
            (o(y), A("page"));
        },
        $ = h
            ? async (y) => {
                  const S = await h(y);
                  S && o((l) => (l && l.id === y.id ? { ...l, excerpt: S } : l));
              }
            : null,
        C = v.useMemo(() => {
            const y = [];
            for (const S of u) {
                const l = vn(S.at),
                    M = y[y.length - 1];
                M && M.head === l ? M.items.push(S) : y.push({ head: l, items: [S] });
            }
            return y;
        }, [u]);
    let k;
    if (p === "tabs") {
        const y = j ? w : x;
        k = s.jsxs("div", {
            className: `cps-scroll cps-tabs-scroll${j ? " is-private" : ""}`,
            children: [
                s.jsx("div", {
                    className: "cps-tabs-head",
                    children: w.length
                        ? s.jsxs("span", {
                              className: "cps-tabs-switch",
                              children: [
                                  s.jsxs("button", {
                                      type: "button",
                                      className: j ? "" : "on",
                                      onClick: () => d(!1),
                                      children: [x.length, " 个标签页"],
                                  }),
                                  s.jsx("button", {
                                      type: "button",
                                      className: j ? "on" : "",
                                      onClick: () => d(!0),
                                      children: "无痕浏览",
                                  }),
                              ],
                          })
                        : s.jsxs("b", { children: [x.length, " 个标签页"] }),
                }),
                s.jsx("div", {
                    className: "cps-tabgrid",
                    children: y.map((S) =>
                        s.jsxs(
                            "button",
                            {
                                className: `cps-tabcard ${(m == null ? void 0 : m.id) === S.id ? "on" : ""}`,
                                onClick: () => N(S),
                                children: [
                                    s.jsxs("span", {
                                        className: "cps-tabcard-shot",
                                        children: [
                                            s.jsx("b", { children: S.title }),
                                            s.jsx("span", {
                                                children: String(S.excerpt || "").slice(0, 140),
                                            }),
                                        ],
                                    }),
                                    s.jsxs("span", {
                                        className: "cps-tabcard-cap",
                                        children: [
                                            s.jsx(Is, { url: S.url, title: ys(S.url), size: 16 }),
                                            s.jsx("em", { children: S.title }),
                                        ],
                                    }),
                                    s.jsx(V, { text: S.title, className: "cps-tab-tr" }),
                                ],
                            },
                            S.id,
                        ),
                    ),
                }),
            ],
        });
    } else if (p === "library") {
        const y = g.reading || [],
            S = g.bookmarks || [];
        k = s.jsxs("div", {
            className: "cps-scroll",
            children: [
                s.jsx("div", {
                    className: "cps-title",
                    children: b === "bookmarks" ? "书签" : b === "reading" ? "阅读列表" : "历史记录",
                }),
                s.jsx("div", {
                    className: "cps-seg",
                    children: [
                        ["bookmarks", s.jsx(ge, { size: 17 }, "b")],
                        ["reading", s.jsx(kc, { size: 17 }, "r")],
                        ["history", s.jsx(ca, { size: 17 }, "h")],
                    ].map(([l, M]) =>
                        s.jsx(
                            "button",
                            { className: b === l ? "on" : "", onClick: () => _(l), children: M },
                            l,
                        ),
                    ),
                }),
                b === "bookmarks" &&
                    (S.length
                        ? s.jsx("div", {
                              className: "cps-group",
                              children: S.map((l) =>
                                  s.jsxs(
                                      "button",
                                      {
                                          className: "cps-row",
                                          onClick: () => N({ ...l, at: 0 }),
                                          children: [
                                              s.jsx(Is, { url: l.url, title: l.title, size: 30 }),
                                              s.jsxs("span", {
                                                  className: "cps-row-main",
                                                  children: [
                                                      s.jsx("b", { children: l.title }),
                                                      s.jsx(V, { text: l.title }),
                                                      s.jsxs("em", {
                                                          children: [
                                                              l.folder ? `${l.folder} · ` : "",
                                                              ys(l.url),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      },
                                      l.id,
                                  ),
                              ),
                          })
                        : s.jsx("div", { className: "cps-empty", children: "没有书签" })),
                b === "reading" &&
                    (y.length
                        ? s.jsx("div", {
                              className: "cps-group",
                              children: y.map((l) =>
                                  s.jsxs(
                                      "button",
                                      {
                                          className: "cps-row",
                                          onClick: () => N({ ...l, kind: "reading" }),
                                          children: [
                                              s.jsx("span", {
                                                  className: `cps-unread ${l.read ? "read" : ""}`,
                                              }),
                                              s.jsxs("span", {
                                                  className: "cps-row-main",
                                                  children: [
                                                      s.jsx("b", { children: l.title }),
                                                      s.jsx(V, { text: l.title }),
                                                      s.jsxs("em", {
                                                          children: [ys(l.url), " · ", zs(l.at), "加的"],
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      },
                                      l.id,
                                  ),
                              ),
                          })
                        : s.jsx("div", { className: "cps-empty", children: "阅读列表是空的" })),
                b === "history" &&
                    (C.length
                        ? C.map((l) =>
                              s.jsxs(
                                  "section",
                                  {
                                      children: [
                                          s.jsx("div", { className: "cps-sect", children: l.head }),
                                          s.jsx("div", {
                                              className: "cps-group",
                                              children: l.items.map((M) =>
                                                  s.jsxs(
                                                      "button",
                                                      {
                                                          className: "cps-row",
                                                          onClick: () => N(M),
                                                          children: [
                                                              M.query
                                                                  ? s.jsx("span", {
                                                                        className: "cps-row-ic",
                                                                        children: s.jsx(us, { size: 16 }),
                                                                    })
                                                                  : s.jsx(Is, {
                                                                        url: M.url,
                                                                        title: M.title,
                                                                        size: 30,
                                                                    }),
                                                              s.jsxs("span", {
                                                                  className: "cps-row-main",
                                                                  children: [
                                                                      s.jsx("b", {
                                                                          children: M.query
                                                                              ? `「${M.query}」`
                                                                              : M.title,
                                                                      }),
                                                                      s.jsx(V, { text: M.query || M.title }),
                                                                      s.jsx("em", {
                                                                          children: M.query
                                                                              ? "搜索"
                                                                              : ys(M.url),
                                                                      }),
                                                                  ],
                                                              }),
                                                              s.jsx("span", {
                                                                  className: "cps-row-time",
                                                                  children: `${fe(new Date(M.at).getHours())}:${fe(new Date(M.at).getMinutes())}`,
                                                              }),
                                                          ],
                                                      },
                                                      M.id,
                                                  ),
                                              ),
                                          }),
                                      ],
                                  },
                                  l.head,
                              ),
                          )
                        : s.jsx("div", { className: "cps-empty", children: "没有历史记录" })),
            ],
        });
    } else if (p === "page" && m)
        k = s.jsx("div", {
            className: "cps-scroll cps-page-scroll",
            children: s.jsx(wn, { entry: m, onForward: r, onFill: m.query ? null : $ }, m.id),
        });
    else {
        const y = g.favorites || [],
            S = u.filter((l) => l.query).slice(0, 6);
        k = s.jsx("div", {
            className: "cps-scroll",
            children: z
                ? s.jsxs("div", {
                      className: "cps-empty big",
                      children: [
                          s.jsx(ta, { size: 34, strokeWidth: 1.6 }),
                          s.jsx("b", { children: t ? "正在生成他的浏览器" : "他的浏览器还是空的" }),
                          s.jsx("p", {
                              children:
                                  "开着的网页、搜过的词、存下的书签 —— 要按他的人设和最近过的日子长出来。会花一次调用。",
                          }),
                          !t &&
                              s.jsxs("button", {
                                  className: "cps-pill",
                                  onClick: c,
                                  children: [s.jsx(J, { size: 15 }), "生成"],
                              }),
                      ],
                  })
                : s.jsxs(s.Fragment, {
                      children: [
                          y.length > 0 &&
                              s.jsxs(s.Fragment, {
                                  children: [
                                      s.jsx("div", { className: "cps-sect", children: "个人收藏" }),
                                      s.jsx("div", {
                                          className: "cps-favs",
                                          children: y.map((l) =>
                                              s.jsxs(
                                                  "button",
                                                  {
                                                      className: "cps-fav",
                                                      onClick: () => N({ ...l, at: 0 }),
                                                      children: [
                                                          s.jsx(Is, { url: l.url, title: l.title, size: 60 }),
                                                          s.jsx("em", { children: l.title }),
                                                      ],
                                                  },
                                                  l.id,
                                              ),
                                          ),
                                      }),
                                  ],
                              }),
                          S.length > 0 &&
                              s.jsxs(s.Fragment, {
                                  children: [
                                      s.jsx("div", { className: "cps-sect", children: "最近搜索" }),
                                      s.jsx("div", {
                                          className: "cps-group",
                                          children: S.map((l) =>
                                              s.jsxs(
                                                  "button",
                                                  {
                                                      className: "cps-row",
                                                      onClick: () => N(l),
                                                      children: [
                                                          s.jsx("span", {
                                                              className: "cps-row-ic",
                                                              children: s.jsx(us, { size: 16 }),
                                                          }),
                                                          s.jsxs("span", {
                                                              className: "cps-row-main",
                                                              children: [
                                                                  s.jsx("b", { children: l.query }),
                                                                  s.jsx(V, { text: l.query }),
                                                              ],
                                                          }),
                                                          s.jsx("span", {
                                                              className: "cps-row-time",
                                                              children: zs(l.at),
                                                          }),
                                                      ],
                                                  },
                                                  l.id,
                                              ),
                                          ),
                                      }),
                                  ],
                              }),
                          (g.reading || []).length > 0 &&
                              s.jsxs(s.Fragment, {
                                  children: [
                                      s.jsx("div", { className: "cps-sect", children: "阅读列表" }),
                                      s.jsx("div", {
                                          className: "cps-group",
                                          children: g.reading
                                              .slice(0, 3)
                                              .map((l) =>
                                                  s.jsxs(
                                                      "button",
                                                      {
                                                          className: "cps-row",
                                                          onClick: () => N({ ...l, kind: "reading" }),
                                                          children: [
                                                              s.jsx(Is, {
                                                                  url: l.url,
                                                                  title: l.title,
                                                                  size: 30,
                                                              }),
                                                              s.jsxs("span", {
                                                                  className: "cps-row-main",
                                                                  children: [
                                                                      s.jsx("b", { children: l.title }),
                                                                      s.jsx("em", { children: ys(l.url) }),
                                                                  ],
                                                              }),
                                                          ],
                                                      },
                                                      l.id,
                                                  ),
                                              ),
                                      }),
                                  ],
                              }),
                      ],
                  }),
        });
    }
    const W =
        p === "page" && m
            ? m.query || ys(m.url)
            : p === "tabs"
              ? j
                  ? "无痕浏览"
                  : `${x.length} 个标签页`
              : "搜索或输入网站名称";
    return s.jsxs("div", {
        className: "cps",
        children: [
            k,
            s.jsx("div", {
                className: "cps-bar",
                children:
                    p === "tabs"
                        ? s.jsxs(s.Fragment, {
                              children: [
                                  s.jsx("button", {
                                      className: "cps-round",
                                      onClick: () => A("start"),
                                      "aria-label": "新标签页",
                                      children: s.jsx(Be, { size: 22 }),
                                  }),
                                  s.jsx("span", { className: "cps-address center", children: W }),
                                  s.jsx("button", {
                                      className: "cps-round solid",
                                      onClick: () => A(m ? "page" : "start"),
                                      "aria-label": "完成",
                                      children: s.jsx("span", { className: "cps-done", children: "完成" }),
                                  }),
                              ],
                          })
                        : s.jsxs(s.Fragment, {
                              children: [
                                  s.jsx("button", {
                                      className: "cps-round",
                                      onClick:
                                          p === "start" || p === "library"
                                              ? p === "library"
                                                  ? () => A(m ? "page" : "start")
                                                  : n
                                              : () => A("start"),
                                      "aria-label": "返回",
                                      children: s.jsx(bs, { size: 23, strokeWidth: 2.3 }),
                                  }),
                                  s.jsxs("button", {
                                      className: "cps-address",
                                      onClick: () => A("start"),
                                      children: [
                                          p === "page" && m != null && m.query
                                              ? s.jsx(us, { size: 14 })
                                              : null,
                                          s.jsx("span", { children: W }),
                                      ],
                                  }),
                                  s.jsx("button", {
                                      className: "cps-round",
                                      onClick: () => A("library"),
                                      "aria-label": "书签",
                                      children: s.jsx(kc, { size: 19 }),
                                  }),
                                  s.jsx("button", {
                                      className: "cps-round",
                                      onClick: () => A("tabs"),
                                      "aria-label": "标签页",
                                      children: s.jsx("i", { className: "cps-tabsico", children: x.length }),
                                  }),
                              ],
                          }),
            }),
            s.jsxs("div", {
                className: "cps-top",
                children: [
                    s.jsx("button", {
                        className: "cps-round",
                        onClick: n,
                        "aria-label": "退出",
                        children: s.jsx(Js, { size: 19 }),
                    }),
                    s.jsx("button", {
                        className: "cps-round",
                        onClick: t ? void 0 : c,
                        disabled: t,
                        "aria-label": "重新生成",
                        children: s.jsx(J, { size: 17, className: t ? "cp-spin" : "" }),
                    }),
                ],
            }),
        ],
    });
}
const je = It(Dt, "查手机"),
    Cn = ["chat", "photos", "insta", "tube"],
    $n = ["sms", "notes", "calls", "music", "safari", "steam", "accounts", "market", "exit"],
    Mn = Zt,
    Sn = [
        ["1", ""],
        ["2", "ABC"],
        ["3", "DEF"],
        ["4", "GHI"],
        ["5", "JKL"],
        ["6", "MNO"],
        ["7", "PQRS"],
        ["8", "TUV"],
        ["9", "WXYZ"],
    ],
    An = (e) => {
        const t = new Date(e),
            c = t.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: !1 });
        return t.toDateString() === new Date().toDateString()
            ? `今天 ${c}`
            : `${t.getMonth() + 1}/${t.getDate()} ${c}`;
    },
    ue = (e) => (e ? [...e.querySelectorAll(":scope > .cp-pick-phone")] : []);
function En({ onClose: e, onOpenChat: t }) {
    var nc, lc, ic;
    const { state: c, patch: n, patchChar: r } = zc(),
        h = Wc(),
        g = St(),
        x = c.characters || [],
        [u, p] = v.useState(() => {
            var a;
            return c.activeCharId || ((a = x[0]) == null ? void 0 : a.id) || null;
        }),
        A = v.useRef(0),
        [m, o] = v.useState(!1),
        [b, _] = v.useState(""),
        [w, j] = v.useState(1),
        [d, z] = v.useState(""),
        [N, $] = v.useState(!1),
        [C, k] = v.useState(!1),
        [W, y] = v.useState("pick"),
        [S, l] = v.useState(""),
        M = v.useRef(null),
        D = v.useRef(null),
        fs = v.useRef(null),
        [Ns, Rs] = v.useState(null),
        [$s, ks] = v.useState(null),
        [Ms, T] = v.useState(Date.now()),
        [R, ns] = v.useState(!1),
        [X, G] = v.useState(() => {
            const a = ss.map((i) => i.kind).filter((i) => i !== "moments");
            try {
                const i = JSON.parse(localStorage.getItem("litot_phone_pick") || "null");
                if (!Array.isArray(i)) return a;
                const f = JSON.parse(localStorage.getItem("litot_phone_known") || "null"),
                    B = Array.isArray(f) ? a.filter((F) => !f.includes(F)) : [];
                return [...new Set([...i.filter((F) => ss.some((L) => L.kind === F)), ...B])];
            } catch {
                return a;
            }
        });
    v.useEffect(() => {
        try {
            localStorage.setItem("litot_phone_known", JSON.stringify(ss.map((a) => a.kind)));
        } catch {}
    }, []);
    const [gs, Oc] = v.useState(() => {
            try {
                return JSON.parse(localStorage.getItem("litot_phone_modes") || "{}") || {};
            } catch {
                return {};
            }
        }),
        Ee = (a) => {
            G(a);
            try {
                localStorage.setItem("litot_phone_pick", JSON.stringify(a));
            } catch {}
        },
        ne = (a) => {
            Oc(a);
            try {
                localStorage.setItem("litot_phone_modes", JSON.stringify(a));
            } catch {}
        },
        Oe = (a) => (gs[a] === "append" ? "append" : "replace"),
        Se = v.useRef(new Set()),
        q = At(),
        I = x.find((a) => a.id === u) || null,
        Ws = new Set(
            q.queue
                .filter((a) => a.charId === u)
                .map((a) => a.kind)
                .concat(((nc = q.running) == null ? void 0 : nc.charId) === u ? [q.running.kind] : []),
        ),
        Zc = {
            calls: "calls",
            sms: "sms",
            notes: "notes",
            photos: "photos",
            music: "music",
            safari: "browser",
            market: "wallet",
            steam: "steam",
        },
        qc = (a) =>
            (a === "chat" ? Ws.has("wechat") || Ws.has("moments") : Ws.has(Zc[a] || a)) ||
            ((a === "insta" || a === "tube") && (Ws.has("dms") || Ws.has("alts") || Ws.has("feeds"))),
        P = v.useMemo(() => Us(I), [I]),
        Ze = v.useMemo(() => {
            var a;
            return { ...(c.me || {}), avatar: zt(c, I) || ((a = c.me) == null ? void 0 : a.avatar) || null };
        }, [c.me, I]);
    v.useMemo(() => {
        try {
            mc(Object.entries(P.trMap || {}));
        } catch {}
    }, [P.trMap]);
    const le = pc(P, Ms);
    (v.useEffect(() => {
        const a = setInterval(() => T(Date.now()), 2e4);
        return () => clearInterval(a);
    }, []),
        v.useEffect(() => {
            (k(!1), ks(null), z(""), (Se.current = new Set()));
        }, [u]),
        v.useEffect(() => {
            var a;
            u && !x.some((i) => i.id === u) && p(((a = x[0]) == null ? void 0 : a.id) || null);
        }, [x, u]),
        v.useEffect(() => {
            if (W !== "pick") return;
            const a = setTimeout(() => {
                const i = M.current,
                    f =
                        ue(i)[
                            Math.max(
                                0,
                                x.findIndex((B) => B.id === u),
                            )
                        ];
                i && f && (i.scrollLeft = f.offsetLeft - (i.clientWidth - f.clientWidth) / 2);
            }, 0);
            return () => clearTimeout(a);
        }, [W]));
    const [Es, qe] = v.useState(null);
    v.useEffect(() => {
        const a = (f) => qe(f.detail || null),
            i = () => qe(null);
        return (
            window.addEventListener("litot:phone-gen-tick", a),
            window.addEventListener("litot:phone-gen-done", i),
            () => {
                (window.removeEventListener("litot:phone-gen-tick", a),
                    window.removeEventListener("litot:phone-gen-done", i));
            }
        );
    }, []);
    const ms = (a) => r(u, (i) => ({ phone: typeof a == "function" ? a(Us(i)) : a })),
        He = (a) => {
            (C &&
                I &&
                ms((i) => ({
                    ...i,
                    visits: [...(i.visits || []), { at: Date.now(), apps: [...Se.current] }].slice(-20),
                    access: i.access.mode === "once" ? { ...i.access, consumedAt: Date.now() } : i.access,
                })),
                k(!1),
                ks(null),
                z(""),
                y("lock"),
                a && (e == null || e()));
        },
        ie = je.usableLane(c.api.chat),
        ps = je.usableLane(c.api.phone, c.api.chat),
        Hc = async () => {
            if (!I) return;
            if (!(ie != null && ie.baseUrl)) {
                h("先在 API 设置里配好聊天通道", "error");
                return;
            }
            const a = b.trim(),
                i = xe("m_"),
                f = Date.now();
            r(I.id, (O) => ({
                messages: [
                    ...(O.messages || []),
                    {
                        id: i,
                        role: "user",
                        type: "phone_request_card",
                        content: a,
                        status: "pending",
                        createdAt: f,
                    },
                ],
            }));
            const B = Us(I);
            (ms((O) => ({ ...O, access: { ...O.access, status: "pending", at: f, msgId: i } })),
                o(!1),
                _(""),
                He(!1),
                t == null || t(I.id));
            const L = await (async (O) => {
                try {
                    return { value: await O(void 0) };
                } catch (E) {
                    return { error: E };
                }
            })(async (O) => {
                var rc, dc, oc, hc;
                const E = Bt(c, I) || [],
                    Y = Pt(I, { stream: E, meName: ee(c.me), me: c.me, now: Date.now(), state: c }),
                    ws = (I.messages || [])
                        .filter(
                            (as) =>
                                as.role !== "system" &&
                                (as.type === "text" || as.type === "voice" || !as.type),
                        )
                        .slice(-14)
                        .map((as) => ({ role: as.role, text: as.content })),
                    Zs = Rt({
                        ctx: Y,
                        askText: a,
                        history: ws,
                        attempt: w,
                        phone: B,
                        alts: [
                            ...(((dc = (rc = c.insta) == null ? void 0 : rc.alts) == null
                                ? void 0
                                : dc[I.id]) || []),
                            ...(((hc = (oc = c.youtube) == null ? void 0 : oc.alts) == null
                                ? void 0
                                : hc[I.id]) || []),
                        ],
                    }),
                    qs = async (as) => {
                        const Gs = await je.chat(ie, as, { signal: O, max_tokens: 2400 }),
                            xc = Mn(Gs.content);
                        return { out: Et(xc, { current: B.passcode }), obj: xc, raw: Gs.content };
                    };
                let { out: oe, obj: Hs, raw: ze } = await qs(Zs);
                if (!oe) {
                    const as = Hs ? gc(Hs, { current: B.passcode }) : vc(ze);
                    ({
                        out: oe,
                        obj: Hs,
                        raw: ze,
                    } = await qs([
                        ...Zs,
                        {
                            role: "system",
                            content: `上一次的回应没能用（${as}）。
重来一次，这一次：
· 第一个字符必须是左花括号，最后一个字符必须是右花括号，中间不要任何说明文字；
· reply 必须是**字符串数组**，一句一条；
· passcode 必须是 **4 位或 6 位纯数字**（给不给都要写），不能是 000000、123456 这类占位；
  reply 里念出来的那串数字要和它**完全一致**。`,
                        },
                    ]));
                }
                if (!oe) {
                    const as = Hs ? gc(Hs, { current: B.passcode }) : vc(ze),
                        Gs = new Error(as || "他那边的回应没解析出来");
                    throw ((Gs.softFail = !0), Gs);
                }
                return oe;
            });
            if (L != null && L.aborted) {
                h("停在这儿了 —— 这条申请留在聊天里，他会在那边回你");
                return;
            }
            if (L != null && L.skipped) {
                h("这条申请留在聊天里，他会在那边回你");
                return;
            }
            if (L != null && L.error) {
                if (L.error.softFail) {
                    h(
                        `他没给出能用的回应（${L.error.message}）—— 这条申请留在聊天里，他下次开口会答`,
                        "error",
                    );
                    return;
                }
                (r(I.id, (O) => ({ messages: (O.messages || []).filter((E) => E.id !== i) })),
                    ms((O) => ({
                        ...O,
                        access: { ...O.access, status: O.passcode ? "granted" : "none", msgId: "" },
                    })),
                    h(L.error.message, "error"));
                return;
            }
            const Z = L.value,
                K = Date.now();
            (r(I.id, (O) => ({
                messages: [
                    ...(O.messages || []).map((E) =>
                        E.id === i
                            ? {
                                  ...E,
                                  status: Z.grant ? "granted" : "denied",
                                  mode: Z.mode,
                                  locked: Z.locked,
                                  scope: Z.scope,
                              }
                            : E,
                    ),
                    ...Z.reply.map((E, Y) => ({
                        id: xe("m_"),
                        role: "assistant",
                        type: "text",
                        content: E,
                        createdAt: K + Y,
                    })),
                ],
            })),
                ms((O) => Ft(O, Z, { msgId: i, now: K })),
                j((O) => O + 1),
                z(""),
                h(Z.grant ? `${ls(I)} 给了密码` : `${ls(I)} 没给`));
        },
        re = P.passcode,
        Ge = (a) => {
            var B;
            if (!le.ok || (((B = P.attempts) == null ? void 0 : B.count) || 0) >= 5) {
                const F = re.length || 6,
                    L = (d + a).slice(0, F);
                (z(L),
                    L.length === F &&
                        ($(!0),
                        setTimeout(() => {
                            ($(!1), z(""));
                        }, 450)));
                return;
            }
            const i = re.length || 6,
                f = (d + a).slice(0, i);
            (z(f),
                f.length === i &&
                    (f === re
                        ? (l("unlocking"),
                          setTimeout(() => {
                              (k(!0), z(""), l(""), ms((F) => ({ ...F, attempts: { count: 0, lastAt: 0 } })));
                          }, 260))
                        : ($(!0),
                          setTimeout(() => {
                              ($(!1), z(""));
                          }, 450),
                          ms((F) => {
                              var L;
                              return {
                                  ...F,
                                  attempts: {
                                      count: (((L = F.attempts) == null ? void 0 : L.count) || 0) + 1,
                                      lastAt: Date.now(),
                                  },
                              };
                          }))));
        };
    v.useEffect(() => {
        const a = (i) => {
            const f = i.detail || {};
            f.charId !== u || !f.ok || h(`${uc[f.kind] || ""} 好了${f.summary ? ` · ${f.summary}` : ""}`);
        };
        return (
            window.addEventListener("litot:phone-gen-done", a),
            () => window.removeEventListener("litot:phone-gen-done", a)
        );
    }, [u, h]);
    const Gc = async (a) => {
            if (!(ps != null && ps.baseUrl) || !I)
                return (h("先在 API 设置的「查手机」里配好通道（留空会走聊天通道）", "error"), "");
            try {
                const i = await je.chat(
                        ps,
                        [
                            {
                                role: "system",
                                content: `你在还原一个人手机浏览器里存着的一页网页的正文。按这个网站和标题本来的样子写（新闻、帖子、百科、攻略、商品详情、论坛回复……），用这个网站本来的语言，2 到 5 段。只输出正文本身：不要标题、不要网址、不要任何说明。
正文不是中文时，在正文后面单独一行写 ===译文===，再写这一页的简体中文译文，段落和原文一一对应。正文是中文就不写这一部分。`,
                            },
                            {
                                role: "user",
                                content: `网页标题：${a.title || ""}
网址：${a.url || ""}

存下这一页的人：${he(I)}${I.nationality ? `（${I.nationality}）` : ""}
${String(I.persona || "").slice(0, 600)}`,
                            },
                        ],
                        { max_tokens: 1400, temperature: 0.8 },
                    ),
                    f = String((i == null ? void 0 : i.content) || "")
                        .replace(/^```\w*\s*|\s*```$/g, "")
                        .trim(),
                    [B, F = ""] = f.split(/\n?\s*={2,}\s*译文\s*={2,}\s*\n?/),
                    L = String(B || "")
                        .trim()
                        .slice(0, 1800);
                if (!L) return (h("这一页没打开", "error"), "");
                const Z = (E) =>
                        String(E || "")
                            .split(/\n+/)
                            .map((Y) => Y.trim())
                            .filter(Boolean).join(`
`),
                    K = String(F || "").trim();
                K && (mc([[Z(L), Z(K)]]), ms((E) => ({ ...E, trMap: { ...(E.trMap || {}), [Z(L)]: Z(K) } })));
                const O = (E) =>
                    Array.isArray(E) ? E.map((Y) => (Y.id === a.id ? { ...Y, excerpt: L } : Y)) : E;
                return (
                    ms((E) => {
                        var Y, ws, Zs, qs;
                        return {
                            ...E,
                            browser: {
                                ...E.browser,
                                reading: O((Y = E.browser) == null ? void 0 : Y.reading),
                                bookmarks: O((ws = E.browser) == null ? void 0 : ws.bookmarks),
                                favorites: O((Zs = E.browser) == null ? void 0 : Zs.favorites),
                                history: O((qs = E.browser) == null ? void 0 : qs.history),
                            },
                        };
                    }),
                    L
                );
            } catch (i) {
                return (h((i == null ? void 0 : i.message) || "这一页没打开", "error"), "");
            }
        },
        cs = (a, i = "replace") => {
            if (!(ps != null && ps.baseUrl)) {
                h("先在 API 设置的「查手机」里配好通道（留空会走聊天通道）", "error");
                return;
            }
            (q.enqueue(u, a, "page", i),
                h(
                    q.paused
                        ? "已排队 —— 但生成是暂停的"
                        : i === "append"
                          ? "排上了 · 追加，原有的保留"
                          : "排上了，后台跑，退出也不会断",
                ));
        },
        Uc = v.useMemo(
            () =>
                u
                    ? ["insta", "youtube"].reduce(
                          (a, i) => a + Mc(c, i, u).filter((f) => f.fromGen && f.linked !== !0).length,
                          0,
                      )
                    : 0,
            [c.insta, c.youtube, u],
        );
    if (!x.length)
        return s.jsxs("div", {
            className: "cp",
            children: [
                s.jsx("div", {
                    className: "cp-scroll",
                    children: s.jsxs("div", {
                        className: "cp-empty",
                        children: [
                            s.jsx("b", { children: "还没有人" }),
                            "先去联系人里建一个角色，再回来查他手机。",
                        ],
                    }),
                }),
                s.jsx("button", {
                    className: "cp-pick-x on-dark",
                    onClick: e,
                    "aria-label": "返回",
                    children: s.jsx(bs, { size: 24, strokeWidth: 2.2 }),
                }),
            ],
        });
    const Vc = ["cp", P.theme === "light" ? "is-light" : ""].filter(Boolean).join(" "),
        Ue = ls(I || {}) || he(I || {}),
        Ve = ((lc = P.access) == null ? void 0 : lc.at) || 0,
        Yc = ((I == null ? void 0 : I.messages) || []).some(
            (a) => a.role === "assistant" && (a.createdAt || 0) > Ve,
        ),
        Kc = 10 * 6e4,
        Ae = P.access.status === "pending" && !Yc && Date.now() - Ve < Kc,
        Jc = () =>
            P.access.status === "pending"
                ? Ae
                    ? { title: "等待他的回复", sub: "请求已发送至聊天" }
                    : { title: "未获得密码", sub: "他已回复，但没有提供密码" }
                : P.access.status === "denied"
                  ? { title: "他拒绝了请求", sub: P.access.reason ? `理由：${P.access.reason}` : "" }
                  : P.passcode
                    ? le.why === "expired"
                        ? { title: "授权已过期", sub: "「今天之内」的授权已失效" }
                        : le.why === "used"
                          ? { title: "授权已使用", sub: "「仅这一次」的授权已失效" }
                          : { title: "输入密码", sub: P.hint ? `提示：${P.hint}` : "" }
                    : { title: "需要密码", sub: "密码由他决定是否提供" },
        Ts = Wt(c),
        Qc = (() => {
            const a = ss.filter((f) => Tt.has(f.kind)).length,
                i = ss.length - a;
            return Math.ceil(a / Math.max(1, Ts)) + i;
        })(),
        Ye = le.ok,
        Ke = (((ic = P.attempts) == null ? void 0 : ic.count) || 0) >= 5,
        Xc = Ye && !Ke,
        Je = Ke && Ye ? { title: "尝试次数过多", sub: "请向他询问密码" } : Jc(),
        de = new Date(Ms),
        Qe = (a) => `${String(a.getHours()).padStart(2, "0")}:${String(a.getMinutes()).padStart(2, "0")}`,
        st = de.toLocaleDateString("zh-CN", { month: "long", day: "numeric", weekday: "long" }),
        et = g.busy ? "正在发送" : Ae ? "等待回复" : P.passcode ? "再次询问" : "向他要密码",
        Xe = Math.max(
            0,
            x.findIndex((a) => a.id === u),
        ),
        ct = () => {
            const a = M.current;
            if (!a || S || Date.now() < A.current) return;
            const i = ue(a),
                f = a.scrollWidth - a.clientWidth;
            let B = 0;
            if (f > 0 && a.scrollLeft >= f - 2) B = i.length - 1;
            else if (a.scrollLeft > 2) {
                const L = a.scrollLeft + a.clientWidth / 2;
                let Z = 1 / 0;
                i.forEach((K, O) => {
                    const E = Math.abs(K.offsetLeft + K.clientWidth / 2 - L);
                    E < Z && ((Z = E), (B = O));
                });
            }
            const F = x[B];
            F && F.id !== u && p(F.id);
        },
        sc = (a) => {
            const i = M.current,
                f = ue(i)[a];
            (x[a] && x[a].id !== u && p(x[a].id),
                (A.current = Date.now() + 600),
                i &&
                    f &&
                    i.scrollTo({
                        left: f.offsetLeft - (i.clientWidth - f.clientWidth) / 2,
                        behavior: "smooth",
                    }));
        },
        ec = () => {
            if (S) return;
            const a = ue(M.current)[Xe],
                i = fs.current;
            if (a && i) {
                const f = a.getBoundingClientRect(),
                    B = i.getBoundingClientRect();
                (Rs({ top: f.top - B.top, left: f.left - B.left, width: f.width, height: f.height, go: !1 }),
                    requestAnimationFrame(() =>
                        requestAnimationFrame(() => Rs((F) => F && { ...F, go: !0 })),
                    ));
            }
            (l("lifting"),
                setTimeout(() => {
                    (y("lock"), l(""));
                }, 470),
                setTimeout(() => Rs(null), 560));
        },
        tt = (a) => {
            const i = Us(a);
            return pc(i, Ms).ok
                ? { once: "已授权 · 仅这一次", today: "已授权 · 今天之内", always: "已授权 · 一直有效" }[
                      i.access.mode
                  ] || "已授权"
                : i.access.status === "pending"
                  ? "等待回复"
                  : i.access.status === "denied"
                    ? "已拒绝"
                    : i.passcode
                      ? "授权已失效"
                      : "未获得密码";
        },
        at = s.jsxs("div", {
            className: `cp-pick${S === "lifting" ? " lifting" : ""}`,
            children: [
                s.jsx("button", {
                    className: "cp-pick-x",
                    onClick: e,
                    "aria-label": "返回",
                    children: s.jsx(bs, { size: 24, strokeWidth: 2.2 }),
                }),
                s.jsxs("div", {
                    className: "cp-pick-head",
                    children: [
                        s.jsx("span", { children: "查手机" }),
                        s.jsx("b", { children: "选择一台手机" }),
                    ],
                }),
                s.jsxs("div", {
                    className: "cp-pick-rail",
                    ref: M,
                    onScroll: ct,
                    children: [
                        s.jsx("i", { className: "cp-pick-pad", "aria-hidden": "true" }),
                        x.map((a, i) => {
                            const f = Us(a);
                            return s.jsx(
                                "button",
                                {
                                    className: `cp-pick-phone${a.id === u ? " on" : ""}${f.theme === "light" ? " is-light" : ""}`,
                                    onClick: () => (a.id === u ? ec() : sc(i)),
                                    "aria-label": `${ls(a) || he(a)}的手机`,
                                    children: s.jsxs("span", {
                                        className: "cp-pick-screen",
                                        children: [
                                            s.jsx("i", { className: "cp-pick-island" }),
                                            s.jsx(js, {
                                                size: 11,
                                                strokeWidth: 2.6,
                                                className: "cp-pick-lock",
                                            }),
                                            s.jsx("span", {
                                                className: "cp-pick-date",
                                                children: de.toLocaleDateString("zh-CN", {
                                                    month: "numeric",
                                                    day: "numeric",
                                                    weekday: "short",
                                                }),
                                            }),
                                            s.jsx("span", { className: "cp-pick-time", children: Qe(de) }),
                                            s.jsx("i", { className: "cp-pick-home" }),
                                        ],
                                    }),
                                },
                                a.id,
                            );
                        }),
                        s.jsx("i", { className: "cp-pick-pad", "aria-hidden": "true" }),
                    ],
                }),
                s.jsxs(
                    "div",
                    {
                        className: "cp-pick-info",
                        children: [
                            s.jsx("span", {
                                className: "cp-pick-av",
                                children:
                                    I != null && I.avatar
                                        ? s.jsx(hs, { src: I.avatar, alt: "" })
                                        : Ue.slice(0, 1),
                            }),
                            s.jsx("b", { children: Ue }),
                            s.jsx("small", { children: I ? tt(I) : "" }),
                        ],
                    },
                    u,
                ),
                x.length > 1 &&
                    s.jsx("div", {
                        className: "cp-pick-dots",
                        children: x.map((a, i) =>
                            s.jsx("i", { className: i === Xe ? "on" : "", onClick: () => sc(i) }, a.id),
                        ),
                    }),
                s.jsxs("div", {
                    className: "cp-pick-foot",
                    children: [
                        s.jsxs("div", {
                            className: "cp-pick-seg",
                            role: "tablist",
                            "aria-label": "这台手机的外观",
                            children: [
                                s.jsx("button", {
                                    className: P.theme === "light" ? "on" : "",
                                    onClick: () => ms((a) => ({ ...a, theme: "light" })),
                                    children: "浅色",
                                }),
                                s.jsx("button", {
                                    className: P.theme !== "light" ? "on" : "",
                                    onClick: () => ms((a) => ({ ...a, theme: "dark" })),
                                    children: "深色",
                                }),
                            ],
                        }),
                        s.jsx("button", { className: "cp-pick-go", onClick: ec, children: "拿起手机" }),
                    ],
                }),
            ],
        }),
        nt = [
            {
                app: "chat",
                n: (P.wechat.threads || []).reduce((a, i) => a + (i.muted ? 0 : i.unread || 0), 0),
                at: Math.max(
                    0,
                    ...(P.wechat.threads || [])
                        .filter((a) => a.unread && !a.muted)
                        .map((a) => {
                            var i, f;
                            return (
                                ((f = (i = a.msgs) == null ? void 0 : i[a.msgs.length - 1]) == null
                                    ? void 0
                                    : f.at) || 0
                            );
                        }),
                ),
            },
            { app: "sms", n: (P.sms.threads || []).filter((a) => a.unread).length, at: 0 },
        ].filter((a) => a.n > 0),
        lt = (a) => {
            if (!a) return "";
            const i = Math.round((Ms - a) / 6e4);
            return i < 1
                ? "现在"
                : i < 60
                  ? `${i} 分钟前`
                  : i < 24 * 60
                    ? `${Math.round(i / 60)} 小时前`
                    : "";
        },
        cc = () => {
            S ||
                (l("to-code"),
                setTimeout(() => {
                    (y("code"), l(""));
                }, 320));
        },
        it = s.jsxs("div", {
            className: `cp-lock2${S === "to-code" ? " out" : ""}`,
            onClick: cc,
            onTouchStart: (a) => {
                D.current = a.touches[0].clientY;
            },
            onTouchEnd: (a) => {
                const i = D.current;
                (i != null && i - a.changedTouches[0].clientY > 40 && cc(), (D.current = null));
            },
            children: [
                s.jsxs("div", {
                    className: "cp-lock-clock",
                    children: [
                        s.jsx("div", {
                            className: "cp-lock-top-glyph",
                            children: s.jsx(js, { size: 15, strokeWidth: 2.4 }),
                        }),
                        s.jsx("div", { className: "cp-lock-date", children: st }),
                        s.jsx("div", { className: "cp-lock-time", children: Qe(de) }),
                    ],
                }),
                s.jsx("div", {
                    className: "cp-lock-notes",
                    children: nt.map((a, i) =>
                        s.jsxs(
                            "div",
                            {
                                className: "cp-lnote",
                                style: { "--i": i },
                                children: [
                                    s.jsx("span", {
                                        className: "cp-lnote-ic",
                                        children: s.jsx(Te, { id: a.app }),
                                    }),
                                    s.jsxs("span", {
                                        className: "cp-lnote-main",
                                        children: [
                                            s.jsxs("span", {
                                                className: "cp-lnote-top",
                                                children: [
                                                    s.jsx("b", { children: Ie[a.app] }),
                                                    s.jsx("time", { children: lt(a.at) }),
                                                ],
                                            }),
                                            s.jsx("span", {
                                                className: "cp-lnote-body",
                                                children: a.n > 1 ? `${a.n} 条通知` : "通知",
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            a.app,
                        ),
                    ),
                }),
                s.jsxs("div", {
                    className: "cp-lock-bottom",
                    children: [
                        s.jsx("button", {
                            className: "cp-lock-round",
                            onClick: (a) => {
                                (a.stopPropagation(), e == null || e());
                            },
                            "aria-label": "放下手机",
                            children: s.jsx(Js, { size: 20, strokeWidth: 2.2 }),
                        }),
                        s.jsx("span", { className: "cp-lock-hint", children: "上滑以解锁" }),
                        s.jsx("button", {
                            className: "cp-lock-round",
                            onClick: (a) => {
                                (a.stopPropagation(), y("pick"));
                            },
                            "aria-label": "换一台手机",
                            children: s.jsx(_c, { size: 19, strokeWidth: 2.1 }),
                        }),
                    ],
                }),
                s.jsx("i", { className: "cp-homebar" }),
            ],
        }),
        rt = s.jsxs("div", {
            className: `cp-code${S === "unlocking" ? " unlocking" : ""}`,
            children: [
                s.jsxs("div", {
                    className: "cp-code-head",
                    children: [
                        s.jsx(js, { size: 17, strokeWidth: 2.4 }),
                        s.jsx("b", { children: Je.title }),
                        s.jsx("p", { children: Je.sub || " " }),
                        s.jsx("div", {
                            className: `cp-dots ${N ? "shake" : ""}`,
                            children: Array.from({ length: re.length || 6 }).map((a, i) =>
                                s.jsx("i", { className: i < d.length || S === "unlocking" ? "on" : "" }, i),
                            ),
                        }),
                    ],
                }),
                s.jsxs("div", {
                    className: `cp-keypad${Xc ? "" : " idle"}`,
                    children: [
                        Sn.map(([a, i]) =>
                            s.jsxs(
                                "button",
                                {
                                    className: "cp-key",
                                    onClick: () => Ge(a),
                                    children: [
                                        s.jsx("b", { children: a }),
                                        i ? s.jsx("span", { children: i }) : null,
                                    ],
                                },
                                a,
                            ),
                        ),
                        s.jsx("span", { className: "cp-key plain" }),
                        s.jsx("button", {
                            className: "cp-key",
                            onClick: () => Ge("0"),
                            children: s.jsx("b", { children: "0" }),
                        }),
                        s.jsx("span", { className: "cp-key plain" }),
                    ],
                }),
                s.jsxs("div", {
                    className: "cp-code-foot",
                    children: [
                        s.jsxs("button", {
                            disabled: g.busy || Ae,
                            onClick: () => o(!0),
                            children: [g.busy ? s.jsx(J, { size: 14, className: "cp-spin" }) : null, et],
                        }),
                        s.jsx("button", {
                            onClick: () => (d ? z((a) => a.slice(0, -1)) : y("lock")),
                            children: d ? "删除" : "取消",
                        }),
                    ],
                }),
                s.jsx("i", { className: "cp-homebar" }),
            ],
        }),
        dt = {},
        tc = (a, i, f = 0) => {
            if (a === "exit")
                return s.jsxs(
                    "button",
                    {
                        className: "cp-app",
                        style: { "--i": f },
                        onClick: () => He(!0),
                        children: [
                            s.jsx("span", {
                                className: "cp-app-tile exit",
                                children: s.jsx(Te, { id: "exit" }),
                            }),
                            s.jsx("span", { className: "cp-app-label", children: "放下手机" }),
                        ],
                    },
                    "g-exit",
                );
            const B = Nc(P, a),
                F =
                    a === "sms"
                        ? (P.sms.threads || []).filter((L) => L.unread).length
                        : a === "chat"
                          ? (P.wechat.threads || []).reduce((L, Z) => L + (Z.muted ? 0 : Z.unread || 0), 0)
                          : a === "accounts"
                            ? Uc
                            : 0;
            return s.jsxs(
                "button",
                {
                    className: `cp-app ${B === "open" ? "" : "off"}`,
                    style: { "--i": f },
                    onClick: () => {
                        (ks(a), B === "open" && Se.current.add(a));
                    },
                    children: [
                        s.jsxs("span", {
                            className: `cp-app-tile ${dt[a] || "uni"}`,
                            children: [
                                s.jsx(Te, { id: a }),
                                B !== "open" &&
                                    s.jsx("span", {
                                        className: "cp-applock",
                                        children: s.jsx(js, { size: 11 }),
                                    }),
                                qc(a) &&
                                    s.jsx("span", {
                                        className: "cp-appgen",
                                        "aria-label": "正在生成",
                                        children: s.jsx("i", {}),
                                    }),
                            ],
                        }),
                        F > 0 &&
                            B === "open" &&
                            s.jsx("span", { className: "cp-badge", children: F > 99 ? "99+" : F }),
                        s.jsx("span", { className: "cp-app-label", children: Ie[a] }),
                    ],
                },
                `${i ? "d" : "g"}-${a}`,
            );
        },
        ot = { once: "仅这一次", today: "今天之内", always: "一直有效" },
        ht = (() => {
            var Z;
            const a = P.access.locked || [],
                i = P.access.scope || [],
                f = new Date(),
                B = i.length
                    ? `只开放 ${i.length} 个应用`
                    : a.length
                      ? `锁定 ${a.length} 个应用`
                      : "全部可查看",
                F =
                    q.queue.filter((K) => K.charId === u).length +
                    (((Z = q.running) == null ? void 0 : Z.charId) === u ? 1 : 0),
                L = F > 0;
            return s.jsxs(
                "div",
                {
                    className: "cp-widgets",
                    children: [
                        s.jsxs("div", {
                            className: "cp-wg cp-wg-date",
                            children: [
                                s.jsx("span", {
                                    className: "cp-wg-kicker",
                                    children: [
                                        "星期日",
                                        "星期一",
                                        "星期二",
                                        "星期三",
                                        "星期四",
                                        "星期五",
                                        "星期六",
                                    ][f.getDay()],
                                }),
                                s.jsx("b", { className: "cp-wg-big", children: f.getDate() }),
                                s.jsxs("span", {
                                    className: "cp-wg-sub",
                                    children: [
                                        f.getMonth() + 1,
                                        "月 · ",
                                        String(f.getHours()).padStart(2, "0"),
                                        ":",
                                        String(f.getMinutes()).padStart(2, "0"),
                                    ],
                                }),
                            ],
                        }),
                        s.jsxs("button", {
                            className: "cp-wg cp-wg-access",
                            onClick: () => ns(!0),
                            children: [
                                s.jsx("span", { className: "cp-wg-kicker", children: "访问权限" }),
                                s.jsx("b", {
                                    className: "cp-wg-title",
                                    children: ot[P.access.mode] || "仅这一次",
                                }),
                                s.jsx("span", { className: "cp-wg-sub", children: B }),
                                s.jsx("span", {
                                    className: "cp-wg-foot",
                                    children: L
                                        ? `正在生成 · 剩 ${F} 项${q.paused ? "（已暂停）" : ""}`
                                        : "轻点刷新内容",
                                }),
                            ],
                        }),
                    ],
                },
                "w",
            );
        })(),
        xt = s.jsxs("div", {
            className: "cp-home",
            children: [
                s.jsxs("div", {
                    className: "cp-home-grid",
                    children: [ht, $n.map((a, i) => tc(a, !1, i + 2))],
                }),
                s.jsx("div", { className: "cp-pagedots", children: s.jsx("i", { className: "on" }) }),
                s.jsx("div", { className: "cp-dock", children: Cn.map((a, i) => tc(a, !0, i + 10)) }),
            ],
        }),
        Os = ({ app: a, title: i, body: f }) => {
            if (!I) return;
            const B = String(f || "")
                .trim()
                .slice(0, 2e3);
            (r(I.id, (F) => ({
                messages: [
                    ...(F.messages || []),
                    {
                        id: xe("m_"),
                        role: "user",
                        type: "phone_quote_card",
                        app: a,
                        title: String(i || "").slice(0, 60),
                        content: B,
                        altId: (c == null ? void 0 : c.activeChatAltId) || null,
                        createdAt: Date.now(),
                    },
                ],
            })),
                h("甩到聊天里了 —— 他下次开口会知道你看到了"));
        },
        ac = ({ platform: a, postId: i, text: f, images: B }) => {
            I &&
                (r(I.id, (F) => ({
                    messages: [
                        ...(F.messages || []),
                        Ot({
                            platform: a,
                            postId: i,
                            text: f,
                            images: B,
                            altId: (c == null ? void 0 : c.activeChatAltId) || null,
                        }),
                    ],
                })),
                h("已发布 · 对方会收到通知"));
        },
        mt = (a, i, f) => {
            var L;
            const B = qt(a),
                F = ((((L = c == null ? void 0 : c[B]) == null ? void 0 : L.alts) || {})[u] || []).find(
                    (Z) => Z.id === i,
                );
            (n((Z) => {
                const K = Z[B] || {},
                    O = { ...(K.alts || {}) },
                    E = (O[u] || []).map((Y) => (Y.id === i ? { ...Y, linked: !!f } : Y));
                return ((O[u] = E), { [B]: { ...K, alts: O } });
            }),
                f &&
                    I &&
                    F &&
                    r(I.id, (Z) => ({
                        messages: [
                            ...(Z.messages || []),
                            {
                                id: xe("m_"),
                                role: "user",
                                type: "alt_link_card",
                                platform: a,
                                handle: String(F.handle || "").slice(0, 40),
                                why: String(F.why || "").slice(0, 120),
                                altId: (c == null ? void 0 : c.activeChatAltId) || null,
                                createdAt: Date.now(),
                            },
                        ],
                    })),
                h(f ? "接进线上了 —— Insta / Tube 里能看到，他也知道自己有这个号了" : "撤下来了，内容还在"));
        },
        ts = () => ks(null),
        pt = () => {
            const a = Nc(P, $s);
            if (a !== "open")
                return s.jsx(dn, {
                    appId: $s,
                    kind: a,
                    reason: P.access.reason,
                    onExit: ts,
                    onAskAgain: () => {
                        (ks(null), o(!0));
                    },
                });
            const i = (f) => q.pendingOf(u, f);
            switch ($s) {
                case "chat":
                    return s.jsx(Ya, {
                        onForward: Os,
                        char: I,
                        me: Ze,
                        state: c,
                        phone: P,
                        busy: i("wechat"),
                        onGen: () => cs("wechat"),
                        momentsBusy: i("moments"),
                        onGenMoments: () => cs("moments"),
                        onPostMoment: (f) => ac({ platform: "moments", ...f }),
                        altBusy: i("wxalts"),
                        onGenAlts: () => cs("wxalts"),
                        onExit: ts,
                    });
                case "calls":
                    return s.jsx(sn, {
                        char: I,
                        me: Ze,
                        phone: P,
                        busy: i("calls"),
                        onGen: () => cs("calls"),
                        onExit: ts,
                    });
                case "notes":
                    return s.jsx(Pa, {
                        phone: P,
                        busy: i("notes"),
                        onGen: () => cs("notes"),
                        onExit: ts,
                        onForward: Os,
                    });
                case "sms":
                    return s.jsx(Ea, {
                        phone: P,
                        busy: i("sms"),
                        onGen: () => cs("sms"),
                        onExit: ts,
                        onForward: Os,
                    });
                case "photos":
                    return s.jsx(Oa, {
                        phone: P,
                        busy: i("photos"),
                        onGen: () => cs("photos"),
                        onExit: ts,
                        onForward: Os,
                    });
                case "accounts":
                    return s.jsx(hn, {
                        char: I,
                        state: c,
                        phone: P,
                        busy: i("alts"),
                        onGen: () => cs("alts"),
                        onExit: ts,
                        onToggle: mt,
                    });
                case "insta":
                    return s.jsx("div", {
                        className: "cp-screen push cp-embed",
                        children: s.jsx(ra, {
                            viewerId: I.id,
                            readOnly: !0,
                            phoneFeed: { busy: i("feeds"), onGen: () => cs("feeds") },
                            onPostAsOwner: (f) => ac({ platform: "insta", ...f }),
                            onBack: ts,
                        }),
                    });
                case "tube":
                    return s.jsx("div", {
                        className: "cp-screen push cp-embed",
                        children: s.jsx(da, {
                            viewerId: I.id,
                            readOnly: !0,
                            phoneFeed: { busy: i("feeds"), onGen: () => cs("feeds") },
                            onBack: ts,
                        }),
                    });
                case "market":
                    return s.jsx("div", {
                        className: "cp-screen push cp-embed",
                        children: s.jsx(oa, { forceOwner: I.id, onExitToHome: ts }),
                    });
                case "music":
                    return s.jsx("div", {
                        className: "cp-screen push cp-embed",
                        children: s.jsx(kn, {
                            char: I,
                            state: c,
                            phone: P,
                            busy: i("music"),
                            onGen: () => cs("music"),
                            onExit: ts,
                        }),
                    });
                case "steam":
                    return s.jsx(Nn, {
                        phone: P,
                        busy: i("steam"),
                        onGen: () => cs("steam"),
                        onExit: ts,
                        ownerName: he(I),
                    });
                case "safari":
                    return s.jsx("div", {
                        className: "cp-screen push cp-embed",
                        children: s.jsx(yn, {
                            phone: P,
                            busy: i("browser"),
                            onGen: () => cs("browser"),
                            onExit: ts,
                            onForward: Os,
                            onFillPage: Gc,
                        }),
                    });
                default:
                    return null;
            }
        };
    return s.jsxs("div", {
        className: Vc,
        ref: fs,
        children: [
            C ? xt : W === "pick" ? at : W === "lock" ? it : rt,
            C && $s && pt(),
            Ns &&
                s.jsx("div", {
                    className: `cp-pick-ghost${Ns.go ? " go" : ""}`,
                    style: Ns.go
                        ? void 0
                        : { top: Ns.top, left: Ns.left, width: Ns.width, height: Ns.height },
                }),
            R &&
                s.jsx("div", {
                    className: "cp-sheet",
                    onClick: () => ns(!1),
                    children: s.jsxs("div", {
                        className: "cp-sheet-card",
                        onClick: (a) => a.stopPropagation(),
                        children: [
                            s.jsxs("div", {
                                className: "cp-sheet-head",
                                children: [
                                    s.jsxs("div", {
                                        children: [
                                            s.jsx("b", { children: "刷新手机里的内容" }),
                                            s.jsxs("p", {
                                                children: [
                                                    "排队跑、",
                                                    s.jsx("b", { children: "退出查手机也会继续跑" }),
                                                    "，跑完自己落盘。 下面那条决定一次调用写几块。",
                                                ],
                                            }),
                                        ],
                                    }),
                                    s.jsx("button", {
                                        className: "cp-sheet-x",
                                        onClick: () => ns(!1),
                                        "aria-label": "关闭",
                                        children: s.jsx(Js, { size: 16 }),
                                    }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "cp-sheet-body",
                                children: [
                                    s.jsxs("div", {
                                        className: "cp-bundle",
                                        children: [
                                            s.jsx("div", {
                                                className: "cp-bundle-head",
                                                children: s.jsx("b", { children: "一次调用写几块" }),
                                            }),
                                            s.jsxs("label", {
                                                className: "cp-slider flush",
                                                children: [
                                                    s.jsx("input", {
                                                        type: "range",
                                                        min: jc.min,
                                                        max: jc.max,
                                                        step: 1,
                                                        value: Ts,
                                                        onChange: (a) =>
                                                            q.setBundleSize(Number(a.target.value)),
                                                    }),
                                                    s.jsxs("b", {
                                                        children: [
                                                            Ts === 1 ? "关" : Ts,
                                                            s.jsx("i", {
                                                                children: Ts === 1 ? "一块一次" : "块",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            s.jsx("p", {
                                                children:
                                                    Ts === 1
                                                        ? s.jsxs(s.Fragment, {
                                                              children: [
                                                                  "每块各花一次调用。",
                                                                  ss.length,
                                                                  " 块全刷 = ",
                                                                  s.jsxs("b", {
                                                                      children: [ss.length, " 次"],
                                                                  }),
                                                                  "。",
                                                              ],
                                                          })
                                                        : s.jsxs(s.Fragment, {
                                                              children: [
                                                                  "能合的块会攒到一次里写完，",
                                                                  ss.length,
                                                                  " 块全刷约 ",
                                                                  s.jsxs("b", { children: [Qc, " 次"] }),
                                                                  "。 写不完的块会自动排队单独补一次 —— 所以调大最多是白合一次，不会更亏。 老是补第二趟就说明你的通道吐不了这么长，往小调。",
                                                              ],
                                                          }),
                                            }),
                                        ],
                                    }),
                                    s.jsxs("div", {
                                        className: "cp-pick-bar",
                                        children: [
                                            s.jsx("button", {
                                                onClick: () =>
                                                    Ee(X.length === ss.length ? [] : ss.map((a) => a.kind)),
                                                children: X.length === ss.length ? "全不选" : "全选",
                                            }),
                                            s.jsx("span", {}),
                                            s.jsx("button", {
                                                onClick: () =>
                                                    ne(
                                                        Object.fromEntries(
                                                            ss.map((a) => [a.kind, "replace"]),
                                                        ),
                                                    ),
                                                children: "全部覆盖",
                                            }),
                                            s.jsx("button", {
                                                onClick: () =>
                                                    ne(Object.fromEntries(ss.map((a) => [a.kind, "append"]))),
                                                children: "全部追加",
                                            }),
                                        ],
                                    }),
                                    s.jsx("p", {
                                        className: "cp-genmode-note",
                                        children:
                                            "覆盖：整块换成新的一批（已接入线上的小号、你亲手加的卡不会被冲掉）。追加：原有的保留，再长一批新的，他知道已经有什么，不重复。",
                                    }),
                                    s.jsx("div", {
                                        className: "cp-group",
                                        children: ss.map(({ kind: a, label: i }) => {
                                            var O, E, Y;
                                            const f = q.pendingOf(u, a),
                                                B =
                                                    ((O = q.running) == null ? void 0 : O.charId) === u &&
                                                    (((E = q.running) == null ? void 0 : E.kind) === a ||
                                                        (
                                                            ((Y = q.running) == null ? void 0 : Y.bundle) ||
                                                            []
                                                        ).includes(a)),
                                                F = Lt[a],
                                                L = _t(c, a),
                                                Z = X.includes(a),
                                                K = Oe(a);
                                            return s.jsxs(
                                                "div",
                                                {
                                                    className: `cp-genrow${Z ? " on" : ""}`,
                                                    children: [
                                                        s.jsxs("div", {
                                                            className: "cp-row cp-row-pick",
                                                            children: [
                                                                s.jsxs("button", {
                                                                    className: "cp-genpick",
                                                                    onClick: () =>
                                                                        Ee(
                                                                            Z
                                                                                ? X.filter((ws) => ws !== a)
                                                                                : [...X, a],
                                                                        ),
                                                                    "aria-label": Z ? "取消选择" : "选择",
                                                                    children: [
                                                                        s.jsx("i", {
                                                                            className: `cp-check${Z ? " on" : ""}`,
                                                                        }),
                                                                        s.jsxs("span", {
                                                                            className: "cp-row-main",
                                                                            children: [
                                                                                s.jsx("span", {
                                                                                    className: "cp-row-title",
                                                                                    children: i,
                                                                                }),
                                                                                s.jsx("span", {
                                                                                    className:
                                                                                        "cp-row-sub one",
                                                                                    children: B
                                                                                        ? (Es == null
                                                                                              ? void 0
                                                                                              : Es.charId) ===
                                                                                              u && Es.chars
                                                                                            ? `正在写…已经 ${Es.chars} 字`
                                                                                            : "正在生成"
                                                                                        : f
                                                                                          ? "排队中"
                                                                                          : K === "append"
                                                                                            ? "追加：原有的保留"
                                                                                            : "覆盖：换成新的一批",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                f
                                                                    ? s.jsx(J, {
                                                                          size: 17,
                                                                          className: B ? "cp-spin" : "",
                                                                      })
                                                                    : s.jsxs("span", {
                                                                          className: "cp-mode",
                                                                          role: "tablist",
                                                                          children: [
                                                                              s.jsx("button", {
                                                                                  className:
                                                                                      K === "replace"
                                                                                          ? "on"
                                                                                          : "",
                                                                                  onClick: () =>
                                                                                      ne({
                                                                                          ...gs,
                                                                                          [a]: "replace",
                                                                                      }),
                                                                                  children: "覆盖",
                                                                              }),
                                                                              s.jsx("button", {
                                                                                  className:
                                                                                      K === "append"
                                                                                          ? "on"
                                                                                          : "",
                                                                                  onClick: () =>
                                                                                      ne({
                                                                                          ...gs,
                                                                                          [a]: "append",
                                                                                      }),
                                                                                  children: "追加",
                                                                              }),
                                                                          ],
                                                                      }),
                                                            ],
                                                        }),
                                                        F &&
                                                            Z &&
                                                            s.jsxs("label", {
                                                                className: "cp-slider",
                                                                children: [
                                                                    s.jsx("input", {
                                                                        type: "range",
                                                                        min: F.min,
                                                                        max: F.max,
                                                                        step: "1",
                                                                        value: L,
                                                                        onChange: (ws) =>
                                                                            q.setCount(
                                                                                a,
                                                                                Number(ws.target.value),
                                                                            ),
                                                                    }),
                                                                    s.jsxs("b", {
                                                                        children: [
                                                                            L,
                                                                            s.jsx("i", { children: F.unit }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                },
                                                a,
                                            );
                                        }),
                                    }),
                                    s.jsxs("div", {
                                        className: "cp-sheet-row",
                                        children: [
                                            s.jsxs("button", {
                                                className: "cp-gpill solid",
                                                disabled: !X.length,
                                                onClick: () => {
                                                    if (!(ps != null && ps.baseUrl)) {
                                                        h(
                                                            "先在 API 设置的「查手机」里配好通道（留空会走聊天通道）",
                                                            "error",
                                                        );
                                                        return;
                                                    }
                                                    const a = ss
                                                        .map((i) => i.kind)
                                                        .filter((i) => X.includes(i));
                                                    for (const i of ["replace", "append"]) {
                                                        const f = a.filter((B) => Oe(B) === i);
                                                        f.length && q.enqueue(u, f, "all", i);
                                                    }
                                                    h(`已排上 ${a.length} 块，后台生成`);
                                                },
                                                children: [
                                                    s.jsx(J, { size: 16 }),
                                                    "刷新所选",
                                                    X.length ? ` ${X.length} 块` : "",
                                                ],
                                            }),
                                            s.jsxs("button", {
                                                className: "cp-gpill",
                                                onClick: () => q.setPaused(!q.paused),
                                                children: [
                                                    q.paused
                                                        ? s.jsx(aa, { size: 16 })
                                                        : s.jsx(na, { size: 16 }),
                                                    q.paused ? "继续" : "暂停",
                                                ],
                                            }),
                                        ],
                                    }),
                                    q.queue.length > 0 &&
                                        s.jsxs("div", {
                                            className: "cp-note",
                                            children: [
                                                "队列里还有 ",
                                                q.queue.length,
                                                " 块",
                                                q.paused
                                                    ? "，已暂停 —— 正在跑的那一块会跑完，之后不再领新活。"
                                                    : "。",
                                                s.jsx("button", {
                                                    className: "cp-gpill",
                                                    onClick: q.clearQueue,
                                                    children: "清空队列",
                                                }),
                                            ],
                                        }),
                                    q.log.length > 0 &&
                                        s.jsxs(s.Fragment, {
                                            children: [
                                                s.jsx("div", {
                                                    className: "cp-sect",
                                                    style: { padding: "18px 4px 8px" },
                                                    children: s.jsx("h2", {
                                                        style: { fontSize: 17 },
                                                        children: "最近的记录",
                                                    }),
                                                }),
                                                s.jsx("div", {
                                                    className: "cp-group",
                                                    children: q.log.slice(0, 8).map((a) => {
                                                        var i;
                                                        return s.jsxs(
                                                            "div",
                                                            {
                                                                className: "cp-row",
                                                                children: [
                                                                    s.jsxs("div", {
                                                                        className: "cp-row-main",
                                                                        children: [
                                                                            s.jsx("div", {
                                                                                className: "cp-row-title one",
                                                                                children: (
                                                                                    a.kinds || [a.kind]
                                                                                )
                                                                                    .map((f) => uc[f] || f)
                                                                                    .join(" · "),
                                                                            }),
                                                                            s.jsx("div", {
                                                                                className: "cp-row-sub one",
                                                                                children: a.ok
                                                                                    ? (i = a.failed) !=
                                                                                          null && i.length
                                                                                        ? `${a.summary}`
                                                                                        : a.summary
                                                                                    : `未完成 · ${a.err || ""}`,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    s.jsx("span", {
                                                                        className: "cp-row-time",
                                                                        children: An(a.at),
                                                                    }),
                                                                ],
                                                            },
                                                            a.id,
                                                        );
                                                    }),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            m &&
                s.jsx("div", {
                    className: "cp-sheet",
                    onClick: () => o(!1),
                    children: s.jsxs("div", {
                        className: "cp-sheet-card",
                        onClick: (a) => a.stopPropagation(),
                        children: [
                            s.jsxs("div", {
                                className: "cp-sheet-head",
                                children: [
                                    s.jsxs("div", {
                                        children: [
                                            s.jsx("b", { children: "向他要密码" }),
                                            s.jsx("p", {
                                                children:
                                                    "该请求将作为消息发送至你们的聊天，是否提供、开放哪些应用、有效多久由他决定。",
                                            }),
                                        ],
                                    }),
                                    s.jsx("button", {
                                        className: "cp-sheet-x",
                                        onClick: () => o(!1),
                                        "aria-label": "关闭",
                                        children: s.jsx(Js, { size: 16 }),
                                    }),
                                ],
                            }),
                            s.jsxs("div", {
                                className: "cp-sheet-body cp-ask",
                                children: [
                                    s.jsx("textarea", {
                                        value: b,
                                        onChange: (a) => _(a.target.value),
                                        maxLength: 300,
                                        placeholder: "想对他说的话（可不填）",
                                    }),
                                    s.jsxs("button", {
                                        className: "cp-gpill solid",
                                        onClick: Hc,
                                        disabled: g.busy,
                                        children: [s.jsx(la, { size: 16 }), g.busy ? "发送中" : "发到聊天里"],
                                    }),
                                    s.jsx("small", { children: "发送后将跳转至聊天页。" }),
                                ],
                            }),
                        ],
                    }),
                }),
        ],
    });
}
export { En as default };
