var Zt =
    typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof self < "u"
              ? self
              : {};
function zt(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
const st = "modulepreload",
    ft = function (t) {
        return "/ToT/" + t;
    },
    Ne = {},
    lt = function (e, r, n) {
        if (!r || r.length === 0) return e();
        const i = document.getElementsByTagName("link");
        return Promise.all(
            r.map((a) => {
                if (((a = ft(a)), a in Ne)) return;
                Ne[a] = !0;
                const s = a.endsWith(".css"),
                    o = s ? '[rel="stylesheet"]' : "";
                if (!!n)
                    for (let v = i.length - 1; v >= 0; v--) {
                        const l = i[v];
                        if (l.href === a && (!s || l.rel === "stylesheet")) return;
                    }
                else if (document.querySelector(`link[href="${a}"]${o}`)) return;
                const y = document.createElement("link");
                if (
                    ((y.rel = s ? "stylesheet" : st),
                    s || ((y.as = "script"), (y.crossOrigin = "")),
                    (y.href = a),
                    document.head.appendChild(y),
                    s)
                )
                    return new Promise((v, l) => {
                        (y.addEventListener("load", v),
                            y.addEventListener("error", () =>
                                l(new Error(`Unable to preload CSS for ${a}`)),
                            ));
                    });
            }),
        )
            .then(() => e())
            .catch((a) => {
                const s = new Event("vite:preloadError", { cancelable: !0 });
                if (((s.payload = a), window.dispatchEvent(s), !s.defaultPrevented)) throw a;
            });
    };
var j = Uint8Array,
    G = Uint16Array,
    Ue = Int32Array,
    me = new j([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
    ]),
    be = new j([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0,
        0,
    ]),
    _e = new j([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    Ze = function (t, e) {
        for (var r = new G(31), n = 0; n < 31; ++n) r[n] = e += 1 << t[n - 1];
        for (var i = new Ue(r[30]), n = 1; n < 30; ++n)
            for (var a = r[n]; a < r[n + 1]; ++a) i[a] = ((a - r[n]) << 5) | n;
        return { b: r, r: i };
    },
    ze = Ze(me, 2),
    et = ze.b,
    Te = ze.r;
((et[28] = 258), (Te[258] = 28));
var tt = Ze(be, 0),
    ct = tt.b,
    $e = tt.r,
    De = new G(32768);
for (var I = 0; I < 32768; ++I) {
    var ee = ((I & 43690) >> 1) | ((I & 21845) << 1);
    ((ee = ((ee & 52428) >> 2) | ((ee & 13107) << 2)),
        (ee = ((ee & 61680) >> 4) | ((ee & 3855) << 4)),
        (De[I] = (((ee & 65280) >> 8) | ((ee & 255) << 8)) >> 1));
}
var X = function (t, e, r) {
        for (var n = t.length, i = 0, a = new G(e); i < n; ++i) t[i] && ++a[t[i] - 1];
        var s = new G(e);
        for (i = 1; i < e; ++i) s[i] = (s[i - 1] + a[i - 1]) << 1;
        var o;
        if (r) {
            o = new G(1 << e);
            var c = 15 - e;
            for (i = 0; i < n; ++i)
                if (t[i])
                    for (
                        var y = (i << 4) | t[i], v = e - t[i], l = s[t[i] - 1]++ << v, h = l | ((1 << v) - 1);
                        l <= h;
                        ++l
                    )
                        o[De[l] >> c] = y;
        } else for (o = new G(n), i = 0; i < n; ++i) t[i] && (o[i] = De[s[t[i] - 1]++] >> (15 - t[i]));
        return o;
    },
    oe = new j(288);
for (var I = 0; I < 144; ++I) oe[I] = 8;
for (var I = 144; I < 256; ++I) oe[I] = 9;
for (var I = 256; I < 280; ++I) oe[I] = 7;
for (var I = 280; I < 288; ++I) oe[I] = 8;
var ve = new j(32);
for (var I = 0; I < 32; ++I) ve[I] = 5;
var ut = X(oe, 9, 0),
    ht = X(oe, 9, 1),
    gt = X(ve, 5, 0),
    vt = X(ve, 5, 1),
    ke = function (t) {
        for (var e = t[0], r = 1; r < t.length; ++r) t[r] > e && (e = t[r]);
        return e;
    },
    V = function (t, e, r) {
        var n = (e / 8) | 0;
        return ((t[n] | (t[n + 1] << 8)) >> (e & 7)) & r;
    },
    Be = function (t, e) {
        var r = (e / 8) | 0;
        return (t[r] | (t[r + 1] << 8) | (t[r + 2] << 16)) >> (e & 7);
    },
    je = function (t) {
        return ((t + 7) / 8) | 0;
    },
    we = function (t, e, r) {
        return (
            (e == null || e < 0) && (e = 0),
            (r == null || r > t.length) && (r = t.length),
            new j(t.subarray(e, r))
        );
    },
    dt = [
        "unexpected EOF",
        "invalid block type",
        "invalid length/literal",
        "invalid distance",
        "stream finished",
        "no stream handler",
        ,
        "no callback",
        "invalid UTF-8 data",
        "extra field too long",
        "date not in range 1980-2099",
        "filename too long",
        "stream finishing",
        "invalid zip data",
    ],
    K = function (t, e, r) {
        var n = new Error(e || dt[t]);
        if (((n.code = t), Error.captureStackTrace && Error.captureStackTrace(n, K), !r)) throw n;
        return n;
    },
    wt = function (t, e, r, n) {
        var i = t.length,
            a = n ? n.length : 0;
        if (!i || (e.f && !e.l)) return r || new j(0);
        var s = !r,
            o = s || e.i != 2,
            c = e.i;
        s && (r = new j(i * 3));
        var y = function (le) {
                var ce = r.length;
                if (le > ce) {
                    var se = new j(Math.max(ce * 2, le));
                    (se.set(r), (r = se));
                }
            },
            v = e.f || 0,
            l = e.p || 0,
            h = e.b || 0,
            b = e.l,
            C = e.d,
            A = e.m,
            k = e.n,
            M = i * 8;
        do {
            if (!b) {
                v = V(t, l, 1);
                var T = V(t, l + 1, 3);
                if (((l += 3), T))
                    if (T == 1) ((b = ht), (C = vt), (A = 9), (k = 5));
                    else if (T == 2) {
                        var N = V(t, l, 31) + 257,
                            g = V(t, l + 10, 15) + 4,
                            u = N + V(t, l + 5, 31) + 1;
                        l += 14;
                        for (var f = new j(u), w = new j(19), d = 0; d < g; ++d)
                            w[_e[d]] = V(t, l + d * 3, 7);
                        l += g * 3;
                        for (var p = ke(w), m = (1 << p) - 1, E = X(w, p, 1), d = 0; d < u; ) {
                            var B = E[V(t, l, m)];
                            l += B & 15;
                            var O = B >> 4;
                            if (O < 16) f[d++] = O;
                            else {
                                var L = 0,
                                    x = 0;
                                for (
                                    O == 16
                                        ? ((x = 3 + V(t, l, 3)), (l += 2), (L = f[d - 1]))
                                        : O == 17
                                          ? ((x = 3 + V(t, l, 7)), (l += 3))
                                          : O == 18 && ((x = 11 + V(t, l, 127)), (l += 7));
                                    x--;

                                )
                                    f[d++] = L;
                            }
                        }
                        var P = f.subarray(0, N),
                            _ = f.subarray(N);
                        ((A = ke(P)), (k = ke(_)), (b = X(P, A, 1)), (C = X(_, k, 1)));
                    } else K(1);
                else {
                    var O = je(l) + 4,
                        R = t[O - 4] | (t[O - 3] << 8),
                        D = O + R;
                    if (D > i) {
                        c && K(0);
                        break;
                    }
                    (o && y(h + R), r.set(t.subarray(O, D), h), (e.b = h += R), (e.p = l = D * 8), (e.f = v));
                    continue;
                }
                if (l > M) {
                    c && K(0);
                    break;
                }
            }
            o && y(h + 131072);
            for (var Z = (1 << A) - 1, W = (1 << k) - 1, Q = l; ; Q = l) {
                var L = b[Be(t, l) & Z],
                    S = L >> 4;
                if (((l += L & 15), l > M)) {
                    c && K(0);
                    break;
                }
                if ((L || K(2), S < 256)) r[h++] = S;
                else if (S == 256) {
                    ((Q = l), (b = null));
                    break;
                } else {
                    var F = S - 254;
                    if (S > 264) {
                        var d = S - 257,
                            U = me[d];
                        ((F = V(t, l, (1 << U) - 1) + et[d]), (l += U));
                    }
                    var Y = C[Be(t, l) & W],
                        ie = Y >> 4;
                    (Y || K(3), (l += Y & 15));
                    var _ = ct[ie];
                    if (ie > 3) {
                        var U = be[ie];
                        ((_ += Be(t, l) & ((1 << U) - 1)), (l += U));
                    }
                    if (l > M) {
                        c && K(0);
                        break;
                    }
                    o && y(h + 131072);
                    var ae = h + F;
                    if (h < _) {
                        var ye = a - _,
                            pe = Math.min(_, ae);
                        for (ye + h < 0 && K(3); h < pe; ++h) r[h] = n[ye + h];
                    }
                    for (; h < ae; ++h) r[h] = r[h - _];
                }
            }
            ((e.l = b), (e.p = Q), (e.b = h), (e.f = v), b && ((v = 1), (e.m = A), (e.d = C), (e.n = k)));
        } while (!v);
        return h != r.length && s ? we(r, 0, h) : r.subarray(0, h);
    },
    z = function (t, e, r) {
        r <<= e & 7;
        var n = (e / 8) | 0;
        ((t[n] |= r), (t[n + 1] |= r >> 8));
    },
    ue = function (t, e, r) {
        r <<= e & 7;
        var n = (e / 8) | 0;
        ((t[n] |= r), (t[n + 1] |= r >> 8), (t[n + 2] |= r >> 16));
    },
    Le = function (t, e) {
        for (var r = [], n = 0; n < t.length; ++n) t[n] && r.push({ s: n, f: t[n] });
        var i = r.length,
            a = r.slice();
        if (!i) return { t: nt, l: 0 };
        if (i == 1) {
            var s = new j(r[0].s + 1);
            return ((s[r[0].s] = 1), { t: s, l: 1 });
        }
        (r.sort(function (D, N) {
            return D.f - N.f;
        }),
            r.push({ s: -1, f: 25001 }));
        var o = r[0],
            c = r[1],
            y = 0,
            v = 1,
            l = 2;
        for (r[0] = { s: -1, f: o.f + c.f, l: o, r: c }; v != i - 1; )
            ((o = r[r[y].f < r[l].f ? y++ : l++]),
                (c = r[y != v && r[y].f < r[l].f ? y++ : l++]),
                (r[v++] = { s: -1, f: o.f + c.f, l: o, r: c }));
        for (var h = a[0].s, n = 1; n < i; ++n) a[n].s > h && (h = a[n].s);
        var b = new G(h + 1),
            C = Oe(r[v - 1], b, 0);
        if (C > e) {
            var n = 0,
                A = 0,
                k = C - e,
                M = 1 << k;
            for (
                a.sort(function (N, g) {
                    return b[g.s] - b[N.s] || N.f - g.f;
                });
                n < i;
                ++n
            ) {
                var T = a[n].s;
                if (b[T] > e) ((A += M - (1 << (C - b[T]))), (b[T] = e));
                else break;
            }
            for (A >>= k; A > 0; ) {
                var O = a[n].s;
                b[O] < e ? (A -= 1 << (e - b[O]++ - 1)) : ++n;
            }
            for (; n >= 0 && A; --n) {
                var R = a[n].s;
                b[R] == e && (--b[R], ++A);
            }
            C = e;
        }
        return { t: new j(b), l: C };
    },
    Oe = function (t, e, r) {
        return t.s == -1 ? Math.max(Oe(t.l, e, r + 1), Oe(t.r, e, r + 1)) : (e[t.s] = r);
    },
    Fe = function (t) {
        for (var e = t.length; e && !t[--e]; );
        for (
            var r = new G(++e),
                n = 0,
                i = t[0],
                a = 1,
                s = function (c) {
                    r[n++] = c;
                },
                o = 1;
            o <= e;
            ++o
        )
            if (t[o] == i && o != e) ++a;
            else {
                if (!i && a > 2) {
                    for (; a > 138; a -= 138) s(32754);
                    a > 2 && (s(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305), (a = 0));
                } else if (a > 3) {
                    for (s(i), --a; a > 6; a -= 6) s(8304);
                    a > 2 && (s(((a - 3) << 5) | 8208), (a = 0));
                }
                for (; a--; ) s(i);
                ((a = 1), (i = t[o]));
            }
        return { c: r.subarray(0, n), n: e };
    },
    he = function (t, e) {
        for (var r = 0, n = 0; n < e.length; ++n) r += t[n] * e[n];
        return r;
    },
    rt = function (t, e, r) {
        var n = r.length,
            i = je(e + 2);
        ((t[i] = n & 255), (t[i + 1] = n >> 8), (t[i + 2] = t[i] ^ 255), (t[i + 3] = t[i + 1] ^ 255));
        for (var a = 0; a < n; ++a) t[i + a + 4] = r[a];
        return (i + 4 + n) * 8;
    },
    He = function (t, e, r, n, i, a, s, o, c, y, v) {
        (z(e, v++, r), ++i[256]);
        for (
            var l = Le(i, 15),
                h = l.t,
                b = l.l,
                C = Le(a, 15),
                A = C.t,
                k = C.l,
                M = Fe(h),
                T = M.c,
                O = M.n,
                R = Fe(A),
                D = R.c,
                N = R.n,
                g = new G(19),
                u = 0;
            u < T.length;
            ++u
        )
            ++g[T[u] & 31];
        for (var u = 0; u < D.length; ++u) ++g[D[u] & 31];
        for (var f = Le(g, 7), w = f.t, d = f.l, p = 19; p > 4 && !w[_e[p - 1]]; --p);
        var m = (y + 5) << 3,
            E = he(i, oe) + he(a, ve) + s,
            B = he(i, h) + he(a, A) + s + 14 + 3 * p + he(g, w) + 2 * g[16] + 3 * g[17] + 7 * g[18];
        if (c >= 0 && m <= E && m <= B) return rt(e, v, t.subarray(c, c + y));
        var L, x, P, _;
        if ((z(e, v, 1 + (B < E)), (v += 2), B < E)) {
            ((L = X(h, b, 0)), (x = h), (P = X(A, k, 0)), (_ = A));
            var Z = X(w, d, 0);
            (z(e, v, O - 257), z(e, v + 5, N - 1), z(e, v + 10, p - 4), (v += 14));
            for (var u = 0; u < p; ++u) z(e, v + 3 * u, w[_e[u]]);
            v += 3 * p;
            for (var W = [T, D], Q = 0; Q < 2; ++Q)
                for (var S = W[Q], u = 0; u < S.length; ++u) {
                    var F = S[u] & 31;
                    (z(e, v, Z[F]), (v += w[F]), F > 15 && (z(e, v, (S[u] >> 5) & 127), (v += S[u] >> 12)));
                }
        } else ((L = ut), (x = oe), (P = gt), (_ = ve));
        for (var u = 0; u < o; ++u) {
            var U = n[u];
            if (U > 255) {
                var F = (U >> 18) & 31;
                (ue(e, v, L[F + 257]), (v += x[F + 257]), F > 7 && (z(e, v, (U >> 23) & 31), (v += me[F])));
                var Y = U & 31;
                (ue(e, v, P[Y]), (v += _[Y]), Y > 3 && (ue(e, v, (U >> 5) & 8191), (v += be[Y])));
            } else (ue(e, v, L[U]), (v += x[U]));
        }
        return (ue(e, v, L[256]), v + x[256]);
    },
    yt = new Ue([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
    nt = new j(0),
    pt = function (t, e, r, n, i, a) {
        var s = a.z || t.length,
            o = new j(n + s + 5 * (1 + Math.ceil(s / 7e3)) + i),
            c = o.subarray(n, o.length - i),
            y = a.l,
            v = (a.r || 0) & 7;
        if (e) {
            v && (c[0] = a.r >> 3);
            for (
                var l = yt[e - 1],
                    h = l >> 13,
                    b = l & 8191,
                    C = (1 << r) - 1,
                    A = a.p || new G(32768),
                    k = a.h || new G(C + 1),
                    M = Math.ceil(r / 3),
                    T = 2 * M,
                    O = function (Ee) {
                        return (t[Ee] ^ (t[Ee + 1] << M) ^ (t[Ee + 2] << T)) & C;
                    },
                    R = new Ue(25e3),
                    D = new G(288),
                    N = new G(32),
                    g = 0,
                    u = 0,
                    f = a.i || 0,
                    w = 0,
                    d = a.w || 0,
                    p = 0;
                f + 2 < s;
                ++f
            ) {
                var m = O(f),
                    E = f & 32767,
                    B = k[m];
                if (((A[E] = B), (k[m] = E), d <= f)) {
                    var L = s - f;
                    if ((g > 7e3 || w > 24576) && (L > 423 || !y)) {
                        ((v = He(t, c, 0, R, D, N, u, w, p, f - p, v)), (w = g = u = 0), (p = f));
                        for (var x = 0; x < 286; ++x) D[x] = 0;
                        for (var x = 0; x < 30; ++x) N[x] = 0;
                    }
                    var P = 2,
                        _ = 0,
                        Z = b,
                        W = (E - B) & 32767;
                    if (L > 2 && m == O(f - W))
                        for (
                            var Q = Math.min(h, L) - 1, S = Math.min(32767, f), F = Math.min(258, L);
                            W <= S && --Z && E != B;

                        ) {
                            if (t[f + P] == t[f + P - W]) {
                                for (var U = 0; U < F && t[f + U] == t[f + U - W]; ++U);
                                if (U > P) {
                                    if (((P = U), (_ = W), U > Q)) break;
                                    for (var Y = Math.min(W, U - 2), ie = 0, x = 0; x < Y; ++x) {
                                        var ae = (f - W + x) & 32767,
                                            ye = A[ae],
                                            pe = (ae - ye) & 32767;
                                        pe > ie && ((ie = pe), (B = ae));
                                    }
                                }
                            }
                            ((E = B), (B = A[E]), (W += (E - B) & 32767));
                        }
                    if (_) {
                        R[w++] = 268435456 | (Te[P] << 18) | $e[_];
                        var le = Te[P] & 31,
                            ce = $e[_] & 31;
                        ((u += me[le] + be[ce]), ++D[257 + le], ++N[ce], (d = f + P), ++g);
                    } else ((R[w++] = t[f]), ++D[t[f]]);
                }
            }
            for (f = Math.max(f, d); f < s; ++f) ((R[w++] = t[f]), ++D[t[f]]);
            ((v = He(t, c, y, R, D, N, u, w, p, f - p, v)),
                y ||
                    ((a.r = (v & 7) | (c[(v / 8) | 0] << 3)),
                    (v -= 7),
                    (a.h = k),
                    (a.p = A),
                    (a.i = f),
                    (a.w = d)));
        } else {
            for (var f = a.w || 0; f < s + y; f += 65535) {
                var se = f + 65535;
                (se >= s && ((c[(v / 8) | 0] = y), (se = s)), (v = rt(c, v + 1, t.subarray(f, se))));
            }
            a.i = s;
        }
        return we(o, 0, n + je(v) + i);
    },
    mt = (function () {
        for (var t = new Int32Array(256), e = 0; e < 256; ++e) {
            for (var r = e, n = 9; --n; ) r = (r & 1 && -306674912) ^ (r >>> 1);
            t[e] = r;
        }
        return t;
    })(),
    bt = function () {
        var t = -1;
        return {
            p: function (e) {
                for (var r = t, n = 0; n < e.length; ++n) r = mt[(r & 255) ^ e[n]] ^ (r >>> 8);
                t = r;
            },
            d: function () {
                return ~t;
            },
        };
    },
    xt = function (t, e, r, n, i) {
        if (!i && ((i = { l: 1 }), e.dictionary)) {
            var a = e.dictionary.subarray(-32768),
                s = new j(a.length + t.length);
            (s.set(a), s.set(t, a.length), (t = s), (i.w = a.length));
        }
        return pt(
            t,
            e.level == null ? 6 : e.level,
            e.mem == null
                ? i.l
                    ? Math.ceil(Math.max(8, Math.min(13, Math.log(t.length))) * 1.5)
                    : 20
                : 12 + e.mem,
            r,
            n,
            i,
        );
    },
    ot = function (t, e) {
        var r = {};
        for (var n in t) r[n] = t[n];
        for (var n in e) r[n] = e[n];
        return r;
    },
    q = function (t, e) {
        return t[e] | (t[e + 1] << 8);
    },
    J = function (t, e) {
        return (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | (t[e + 3] << 24)) >>> 0;
    },
    Pe = function (t, e) {
        return J(t, e) + J(t, e + 4) * 4294967296;
    },
    $ = function (t, e, r) {
        for (; r; ++e) ((t[e] = r), (r >>>= 8));
    };
function At(t, e) {
    return xt(t, e || {}, 0, 0);
}
function Ct(t, e) {
    return wt(t, { i: 2 }, e && e.out, e && e.dictionary);
}
var it = function (t, e, r, n) {
        for (var i in t) {
            var a = t[i],
                s = e + i,
                o = n;
            (Array.isArray(a) && ((o = ot(n, a[1])), (a = a[0])),
                ArrayBuffer.isView(a) ? (r[s] = [a, o]) : ((r[(s += "/")] = [new j(0), o]), it(a, s, r, n)));
        }
    },
    Ke = typeof TextEncoder < "u" && new TextEncoder(),
    Re = typeof TextDecoder < "u" && new TextDecoder(),
    Et = 0;
try {
    (Re.decode(nt, { stream: !0 }), (Et = 1));
} catch {}
var kt = function (t) {
    for (var e = "", r = 0; ; ) {
        var n = t[r++],
            i = (n > 127) + (n > 223) + (n > 239);
        if (r + i > t.length) return { s: e, r: we(t, r - 1) };
        i
            ? i == 3
                ? ((n =
                      (((n & 15) << 18) | ((t[r++] & 63) << 12) | ((t[r++] & 63) << 6) | (t[r++] & 63)) -
                      65536),
                  (e += String.fromCharCode(55296 | (n >> 10), 56320 | (n & 1023))))
                : i & 1
                  ? (e += String.fromCharCode(((n & 31) << 6) | (t[r++] & 63)))
                  : (e += String.fromCharCode(((n & 15) << 12) | ((t[r++] & 63) << 6) | (t[r++] & 63)))
            : (e += String.fromCharCode(n));
    }
};
function We(t, e) {
    if (e) {
        for (var r = new j(t.length), n = 0; n < t.length; ++n) r[n] = t.charCodeAt(n);
        return r;
    }
    if (Ke) return Ke.encode(t);
    for (
        var i = t.length,
            a = new j(t.length + (t.length >> 1)),
            s = 0,
            o = function (v) {
                a[s++] = v;
            },
            n = 0;
        n < i;
        ++n
    ) {
        if (s + 5 > a.length) {
            var c = new j(s + 8 + ((i - n) << 1));
            (c.set(a), (a = c));
        }
        var y = t.charCodeAt(n);
        y < 128 || e
            ? o(y)
            : y < 2048
              ? (o(192 | (y >> 6)), o(128 | (y & 63)))
              : y > 55295 && y < 57344
                ? ((y = (65536 + (y & 1047552)) | (t.charCodeAt(++n) & 1023)),
                  o(240 | (y >> 18)),
                  o(128 | ((y >> 12) & 63)),
                  o(128 | ((y >> 6) & 63)),
                  o(128 | (y & 63)))
                : (o(224 | (y >> 12)), o(128 | ((y >> 6) & 63)), o(128 | (y & 63)));
    }
    return we(a, 0, s);
}
function Bt(t, e) {
    if (e) {
        for (var r = "", n = 0; n < t.length; n += 16384)
            r += String.fromCharCode.apply(null, t.subarray(n, n + 16384));
        return r;
    } else {
        if (Re) return Re.decode(t);
        var i = kt(t),
            a = i.s,
            r = i.r;
        return (r.length && K(8), a);
    }
}
var Lt = function (t, e) {
        return e + 30 + q(t, e + 26) + q(t, e + 28);
    },
    Pt = function (t, e, r) {
        var n = q(t, e + 28),
            i = q(t, e + 30),
            a = Bt(t.subarray(e + 46, e + 46 + n), !(q(t, e + 8) & 2048)),
            s = e + 46 + n,
            o = Mt(t, s, i, r, J(t, e + 20), J(t, e + 24), J(t, e + 42)),
            c = o[0],
            y = o[1],
            v = o[2];
        return [q(t, e + 10), c, y, a, s + i + q(t, e + 32), v];
    },
    Mt = function (t, e, r, n, i, a, s) {
        var o = i == 4294967295,
            c = a == 4294967295,
            y = s == 4294967295,
            v = e + r,
            l = o + c + y;
        if (n && l) {
            for (; e + 4 < v; e += 4 + q(t, e + 2))
                if (q(t, e) == 1)
                    return [
                        o ? Pe(t, e + 4 + 8 * c) : i,
                        c ? Pe(t, e + 4) : a,
                        y ? Pe(t, e + 4 + 8 * (c + o)) : s,
                        1,
                    ];
            n < 2 && K(13);
        }
        return [i, a, s, 0];
    },
    Ie = function (t) {
        var e = 0;
        if (t)
            for (var r in t) {
                var n = t[r].length;
                (n > 65535 && K(9), (e += n + 4));
            }
        return e;
    },
    Ge = function (t, e, r, n, i, a, s, o) {
        var c = n.length,
            y = r.extra,
            v = o && o.length,
            l = Ie(y);
        ($(t, e, s != null ? 33639248 : 67324752),
            (e += 4),
            s != null && ((t[e++] = 20), (t[e++] = r.os)),
            (t[e] = 20),
            (e += 2),
            (t[e++] = (r.flag << 1) | (a < 0 && 8)),
            (t[e++] = i && 8),
            (t[e++] = r.compression & 255),
            (t[e++] = r.compression >> 8));
        var h = new Date(r.mtime == null ? Date.now() : r.mtime),
            b = h.getFullYear() - 1980;
        if (
            ((b < 0 || b > 119) && K(10),
            $(
                t,
                e,
                (b << 25) |
                    ((h.getMonth() + 1) << 21) |
                    (h.getDate() << 16) |
                    (h.getHours() << 11) |
                    (h.getMinutes() << 5) |
                    (h.getSeconds() >> 1),
            ),
            (e += 4),
            a != -1 && ($(t, e, r.crc), $(t, e + 4, a < 0 ? -a - 2 : a), $(t, e + 8, r.size)),
            $(t, e + 12, c),
            $(t, e + 14, l),
            (e += 16),
            s != null && ($(t, e, v), $(t, e + 6, r.attrs), $(t, e + 10, s), (e += 14)),
            t.set(n, e),
            (e += c),
            l)
        )
            for (var C in y) {
                var A = y[C],
                    k = A.length;
                ($(t, e, +C), $(t, e + 2, k), t.set(A, e + 4), (e += 4 + k));
            }
        return (v && (t.set(o, e), (e += v)), e);
    },
    _t = function (t, e, r, n, i) {
        ($(t, e, 101010256), $(t, e + 8, r), $(t, e + 10, r), $(t, e + 12, n), $(t, e + 16, i));
    };
function er(t, e) {
    e || (e = {});
    var r = {},
        n = [];
    it(t, "", r, e);
    var i = 0,
        a = 0;
    for (var s in r) {
        var o = r[s],
            c = o[0],
            y = o[1],
            v = y.level == 0 ? 0 : 8,
            l = We(s),
            h = l.length,
            b = y.comment,
            C = b && We(b),
            A = C && C.length,
            k = Ie(y.extra);
        h > 65535 && K(11);
        var M = v ? At(c, y) : c,
            T = M.length,
            O = bt();
        (O.p(c),
            n.push(
                ot(y, {
                    size: c.length,
                    crc: O.d(),
                    c: M,
                    f: l,
                    m: C,
                    u: h != s.length || (C && b.length != A),
                    o: i,
                    compression: v,
                }),
            ),
            (i += 30 + h + k + T),
            (a += 76 + 2 * (h + k) + (A || 0) + T));
    }
    for (var R = new j(a + 22), D = i, N = a - i, g = 0; g < n.length; ++g) {
        var l = n[g];
        Ge(R, l.o, l, l.f, l.u, l.c.length);
        var u = 30 + l.f.length + Ie(l.extra);
        (R.set(l.c, l.o + u),
            Ge(R, i, l, l.f, l.u, l.c.length, l.o, l.m),
            (i += 16 + u + (l.m ? l.m.length : 0)));
    }
    return (_t(R, i, n.length, N, D), R);
}
function tr(t, e) {
    for (var r = {}, n = t.length - 22; J(t, n) != 101010256; --n) (!n || t.length - n > 65558) && K(13);
    var i = q(t, n + 8);
    if (!i) return {};
    var a = J(t, n + 16),
        s = J(t, n - 20) == 117853008;
    if (s) {
        var o = J(t, n - 12);
        ((s = J(t, o) == 101075792), s && ((i = J(t, o + 32)), (a = J(t, o + 48))));
    }
    for (var c = e && e.filter, y = 0; y < i; ++y) {
        var v = Pt(t, a, s),
            l = v[0],
            h = v[1],
            b = v[2],
            C = v[3],
            A = v[4],
            k = v[5],
            M = Lt(t, k);
        ((a = A),
            (!c || c({ name: C, size: h, originalSize: b, compression: l })) &&
                (l
                    ? l == 8
                        ? (r[C] = Ct(t.subarray(M, M + h), { out: new j(b) }))
                        : K(14, "unknown compression type " + l)
                    : (r[C] = we(t, M, M + h))));
    }
    return r;
}
/*! Capacitor: https://capacitorjs.com/ - MIT License */ var fe;
(function (t) {
    ((t.Unimplemented = "UNIMPLEMENTED"), (t.Unavailable = "UNAVAILABLE"));
})(fe || (fe = {}));
class Me extends Error {
    constructor(e, r, n) {
        (super(e), (this.message = e), (this.code = r), (this.data = n));
    }
}
const Tt = (t) => {
        var e, r;
        return t != null && t.androidBridge
            ? "android"
            : !(
                    (r =
                        (e = t == null ? void 0 : t.webkit) === null || e === void 0
                            ? void 0
                            : e.messageHandlers) === null || r === void 0
                ) && r.bridge
              ? "ios"
              : "web";
    },
    Dt = (t) => {
        const e = t.CapacitorCustomPlatform || null,
            r = t.Capacitor || {},
            n = (r.Plugins = r.Plugins || {}),
            i = () => (e !== null ? e.name : Tt(t)),
            a = () => i() !== "web",
            s = (l) => {
                const h = y.get(l);
                return !!((h != null && h.platforms.has(i())) || o(l));
            },
            o = (l) => {
                var h;
                return (h = r.PluginHeaders) === null || h === void 0 ? void 0 : h.find((b) => b.name === l);
            },
            c = (l) => t.console.error(l),
            y = new Map(),
            v = (l, h = {}) => {
                const b = y.get(l);
                if (b)
                    return (
                        console.warn(
                            `Capacitor plugin "${l}" already registered. Cannot register plugins twice.`,
                        ),
                        b.proxy
                    );
                const C = i(),
                    A = o(l);
                let k;
                const M = async () => (
                        !k && C in h
                            ? (k = typeof h[C] == "function" ? (k = await h[C]()) : (k = h[C]))
                            : e !== null &&
                              !k &&
                              "web" in h &&
                              (k = typeof h.web == "function" ? (k = await h.web()) : (k = h.web)),
                        k
                    ),
                    T = (u, f) => {
                        var w, d;
                        if (A) {
                            const p = A == null ? void 0 : A.methods.find((m) => f === m.name);
                            if (p)
                                return p.rtype === "promise"
                                    ? (m) => r.nativePromise(l, f.toString(), m)
                                    : (m, E) => r.nativeCallback(l, f.toString(), m, E);
                            if (u) return (w = u[f]) === null || w === void 0 ? void 0 : w.bind(u);
                        } else {
                            if (u) return (d = u[f]) === null || d === void 0 ? void 0 : d.bind(u);
                            throw new Me(`"${l}" plugin is not implemented on ${C}`, fe.Unimplemented);
                        }
                    },
                    O = (u) => {
                        let f;
                        const w = (...d) => {
                            const p = M().then((m) => {
                                const E = T(m, u);
                                if (E) {
                                    const B = E(...d);
                                    return ((f = B == null ? void 0 : B.remove), B);
                                } else
                                    throw new Me(
                                        `"${l}.${u}()" is not implemented on ${C}`,
                                        fe.Unimplemented,
                                    );
                            });
                            return (u === "addListener" && (p.remove = async () => f()), p);
                        };
                        return (
                            (w.toString = () => `${u.toString()}() { [capacitor code] }`),
                            Object.defineProperty(w, "name", { value: u, writable: !1, configurable: !1 }),
                            w
                        );
                    },
                    R = O("addListener"),
                    D = O("removeListener"),
                    N = (u, f) => {
                        const w = R({ eventName: u }, f),
                            d = async () => {
                                const m = await w;
                                D({ eventName: u, callbackId: m }, f);
                            },
                            p = new Promise((m) => w.then(() => m({ remove: d })));
                        return (
                            (p.remove = async () => {
                                (console.warn("Using addListener() without 'await' is deprecated."),
                                    await d());
                            }),
                            p
                        );
                    },
                    g = new Proxy(
                        {},
                        {
                            get(u, f) {
                                switch (f) {
                                    case "$$typeof":
                                        return;
                                    case "toJSON":
                                        return () => ({});
                                    case "addListener":
                                        return A ? N : R;
                                    case "removeListener":
                                        return D;
                                    default:
                                        return O(f);
                                }
                            },
                        },
                    );
                return (
                    (n[l] = g),
                    y.set(l, {
                        name: l,
                        proxy: g,
                        platforms: new Set([...Object.keys(h), ...(A ? [C] : [])]),
                    }),
                    g
                );
            };
        return (
            r.convertFileSrc || (r.convertFileSrc = (l) => l),
            (r.getPlatform = i),
            (r.handleError = c),
            (r.isNativePlatform = a),
            (r.isPluginAvailable = s),
            (r.registerPlugin = v),
            (r.Exception = Me),
            (r.DEBUG = !!r.DEBUG),
            (r.isLoggingEnabled = !!r.isLoggingEnabled),
            r
        );
    },
    Ot = (t) => (t.Capacitor = Dt(t)),
    Se = Ot(
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : typeof window < "u"
                ? window
                : typeof global < "u"
                  ? global
                  : {},
    ),
    xe = Se.registerPlugin;
class Ae {
    constructor() {
        ((this.listeners = {}), (this.retainedEventArguments = {}), (this.windowListeners = {}));
    }
    addListener(e, r) {
        let n = !1;
        (this.listeners[e] || ((this.listeners[e] = []), (n = !0)), this.listeners[e].push(r));
        const a = this.windowListeners[e];
        (a && !a.registered && this.addWindowListener(a), n && this.sendRetainedArgumentsForEvent(e));
        const s = async () => this.removeListener(e, r);
        return Promise.resolve({ remove: s });
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const e in this.windowListeners) this.removeWindowListener(this.windowListeners[e]);
        this.windowListeners = {};
    }
    notifyListeners(e, r, n) {
        const i = this.listeners[e];
        if (!i) {
            if (n) {
                let a = this.retainedEventArguments[e];
                (a || (a = []), a.push(r), (this.retainedEventArguments[e] = a));
            }
            return;
        }
        i.forEach((a) => a(r));
    }
    hasListeners(e) {
        var r;
        return !!(!((r = this.listeners[e]) === null || r === void 0) && r.length);
    }
    registerWindowListener(e, r) {
        this.windowListeners[r] = {
            registered: !1,
            windowEventName: e,
            pluginEventName: r,
            handler: (n) => {
                this.notifyListeners(r, n);
            },
        };
    }
    unimplemented(e = "not implemented") {
        return new Se.Exception(e, fe.Unimplemented);
    }
    unavailable(e = "not available") {
        return new Se.Exception(e, fe.Unavailable);
    }
    async removeListener(e, r) {
        const n = this.listeners[e];
        if (!n) return;
        const i = n.indexOf(r);
        (i !== -1 && this.listeners[e].splice(i, 1),
            this.listeners[e].length || this.removeWindowListener(this.windowListeners[e]));
    }
    addWindowListener(e) {
        (window.addEventListener(e.windowEventName, e.handler), (e.registered = !0));
    }
    removeWindowListener(e) {
        e && (window.removeEventListener(e.windowEventName, e.handler), (e.registered = !1));
    }
    sendRetainedArgumentsForEvent(e) {
        const r = this.retainedEventArguments[e];
        r &&
            (delete this.retainedEventArguments[e],
            r.forEach((n) => {
                this.notifyListeners(e, n);
            }));
    }
}
const Qe = (t) =>
        encodeURIComponent(t)
            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape),
    Je = (t) => t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class Rt extends Ae {
    async getCookies() {
        const e = document.cookie,
            r = {};
        return (
            e.split(";").forEach((n) => {
                if (n.length <= 0) return;
                let [i, a] = n.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
                ((i = Je(i).trim()), (a = Je(a).trim()), (r[i] = a));
            }),
            r
        );
    }
    async setCookie(e) {
        try {
            const r = Qe(e.key),
                n = Qe(e.value),
                i = e.expires ? `; expires=${e.expires.replace("expires=", "")}` : "",
                a = (e.path || "/").replace("path=", ""),
                s = e.url != null && e.url.length > 0 ? `domain=${e.url}` : "";
            document.cookie = `${r}=${n || ""}${i}; path=${a}; ${s};`;
        } catch (r) {
            return Promise.reject(r);
        }
    }
    async deleteCookie(e) {
        try {
            document.cookie = `${e.key}=; Max-Age=0`;
        } catch (r) {
            return Promise.reject(r);
        }
    }
    async clearCookies() {
        try {
            const e = document.cookie.split(";") || [];
            for (const r of e)
                document.cookie = r
                    .replace(/^ +/, "")
                    .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    async clearAllCookies() {
        try {
            await this.clearCookies();
        } catch (e) {
            return Promise.reject(e);
        }
    }
}
xe("CapacitorCookies", { web: () => new Rt() });
const It = async (t) =>
        new Promise((e, r) => {
            const n = new FileReader();
            ((n.onload = () => {
                const i = n.result;
                e(i.indexOf(",") >= 0 ? i.split(",")[1] : i);
            }),
                (n.onerror = (i) => r(i)),
                n.readAsDataURL(t));
        }),
    St = (t = {}) => {
        const e = Object.keys(t);
        return Object.keys(t)
            .map((i) => i.toLocaleLowerCase())
            .reduce((i, a, s) => ((i[a] = t[e[s]]), i), {});
    },
    Ut = (t, e = !0) =>
        t
            ? Object.entries(t)
                  .reduce((n, i) => {
                      const [a, s] = i;
                      let o, c;
                      return (
                          Array.isArray(s)
                              ? ((c = ""),
                                s.forEach((y) => {
                                    ((o = e ? encodeURIComponent(y) : y), (c += `${a}=${o}&`));
                                }),
                                c.slice(0, -1))
                              : ((o = e ? encodeURIComponent(s) : s), (c = `${a}=${o}`)),
                          `${n}&${c}`
                      );
                  }, "")
                  .substr(1)
            : null,
    jt = (t, e = {}) => {
        const r = Object.assign({ method: t.method || "GET", headers: t.headers }, e),
            i = St(t.headers)["content-type"] || "";
        if (typeof t.data == "string") r.body = t.data;
        else if (i.includes("application/x-www-form-urlencoded")) {
            const a = new URLSearchParams();
            for (const [s, o] of Object.entries(t.data || {})) a.set(s, o);
            r.body = a.toString();
        } else if (i.includes("multipart/form-data") || t.data instanceof FormData) {
            const a = new FormData();
            if (t.data instanceof FormData)
                t.data.forEach((o, c) => {
                    a.append(c, o);
                });
            else for (const o of Object.keys(t.data)) a.append(o, t.data[o]);
            r.body = a;
            const s = new Headers(r.headers);
            (s.delete("content-type"), (r.headers = s));
        } else
            (i.includes("application/json") || typeof t.data == "object") &&
                (r.body = JSON.stringify(t.data));
        return r;
    };
class Nt extends Ae {
    async request(e) {
        const r = jt(e, e.webFetchExtra),
            n = Ut(e.params, e.shouldEncodeUrlParams),
            i = n ? `${e.url}?${n}` : e.url,
            a = await fetch(i, r),
            s = a.headers.get("content-type") || "";
        let { responseType: o = "text" } = a.ok ? e : {};
        s.includes("application/json") && (o = "json");
        let c, y;
        switch (o) {
            case "arraybuffer":
            case "blob":
                ((y = await a.blob()), (c = await It(y)));
                break;
            case "json":
                c = await a.json();
                break;
            case "document":
            case "text":
            default:
                c = await a.text();
        }
        const v = {};
        return (
            a.headers.forEach((l, h) => {
                v[h] = l;
            }),
            { data: c, headers: v, status: a.status, url: a.url }
        );
    }
    async get(e) {
        return this.request(Object.assign(Object.assign({}, e), { method: "GET" }));
    }
    async post(e) {
        return this.request(Object.assign(Object.assign({}, e), { method: "POST" }));
    }
    async put(e) {
        return this.request(Object.assign(Object.assign({}, e), { method: "PUT" }));
    }
    async patch(e) {
        return this.request(Object.assign(Object.assign({}, e), { method: "PATCH" }));
    }
    async delete(e) {
        return this.request(Object.assign(Object.assign({}, e), { method: "DELETE" }));
    }
}
const rr = xe("CapacitorHttp", { web: () => new Nt() });
var Ve;
(function (t) {
    ((t.Dark = "DARK"), (t.Light = "LIGHT"), (t.Default = "DEFAULT"));
})(Ve || (Ve = {}));
var Ye;
(function (t) {
    ((t.StatusBar = "StatusBar"), (t.NavigationBar = "NavigationBar"));
})(Ye || (Ye = {}));
class $t extends Ae {
    async setStyle() {
        this.unavailable("not available for web");
    }
    async setAnimation() {
        this.unavailable("not available for web");
    }
    async show() {
        this.unavailable("not available for web");
    }
    async hide() {
        this.unavailable("not available for web");
    }
}
xe("SystemBars", { web: () => new $t() });
const Ce = function (t, e) {
    let i = t;
    const a = ge[e];
    let s = null,
        o = 0,
        c = null;
    const y = [],
        v = {},
        l = function (g, u) {
            ((o = i * 4 + 17),
                (s = (function (f) {
                    const w = new Array(f);
                    for (let d = 0; d < f; d += 1) {
                        w[d] = new Array(f);
                        for (let p = 0; p < f; p += 1) w[d][p] = null;
                    }
                    return w;
                })(o)),
                h(0, 0),
                h(o - 7, 0),
                h(0, o - 7),
                A(),
                C(),
                M(g, u),
                i >= 7 && k(g),
                c == null && (c = R(i, a, y)),
                T(c, u));
        },
        h = function (g, u) {
            for (let f = -1; f <= 7; f += 1)
                if (!(g + f <= -1 || o <= g + f))
                    for (let w = -1; w <= 7; w += 1)
                        u + w <= -1 ||
                            o <= u + w ||
                            ((0 <= f && f <= 6 && (w == 0 || w == 6)) ||
                            (0 <= w && w <= 6 && (f == 0 || f == 6)) ||
                            (2 <= f && f <= 4 && 2 <= w && w <= 4)
                                ? (s[g + f][u + w] = !0)
                                : (s[g + f][u + w] = !1));
        },
        b = function () {
            let g = 0,
                u = 0;
            for (let f = 0; f < 8; f += 1) {
                l(!0, f);
                const w = re.getLostPoint(v);
                (f == 0 || g > w) && ((g = w), (u = f));
            }
            return u;
        },
        C = function () {
            for (let g = 8; g < o - 8; g += 1) s[g][6] == null && (s[g][6] = g % 2 == 0);
            for (let g = 8; g < o - 8; g += 1) s[6][g] == null && (s[6][g] = g % 2 == 0);
        },
        A = function () {
            const g = re.getPatternPosition(i);
            for (let u = 0; u < g.length; u += 1)
                for (let f = 0; f < g.length; f += 1) {
                    const w = g[u],
                        d = g[f];
                    if (s[w][d] == null)
                        for (let p = -2; p <= 2; p += 1)
                            for (let m = -2; m <= 2; m += 1)
                                p == -2 || p == 2 || m == -2 || m == 2 || (p == 0 && m == 0)
                                    ? (s[w + p][d + m] = !0)
                                    : (s[w + p][d + m] = !1);
                }
        },
        k = function (g) {
            const u = re.getBCHTypeNumber(i);
            for (let f = 0; f < 18; f += 1) {
                const w = !g && ((u >> f) & 1) == 1;
                s[Math.floor(f / 3)][(f % 3) + o - 8 - 3] = w;
            }
            for (let f = 0; f < 18; f += 1) {
                const w = !g && ((u >> f) & 1) == 1;
                s[(f % 3) + o - 8 - 3][Math.floor(f / 3)] = w;
            }
        },
        M = function (g, u) {
            const f = (a << 3) | u,
                w = re.getBCHTypeInfo(f);
            for (let d = 0; d < 15; d += 1) {
                const p = !g && ((w >> d) & 1) == 1;
                d < 6 ? (s[d][8] = p) : d < 8 ? (s[d + 1][8] = p) : (s[o - 15 + d][8] = p);
            }
            for (let d = 0; d < 15; d += 1) {
                const p = !g && ((w >> d) & 1) == 1;
                d < 8 ? (s[8][o - d - 1] = p) : d < 9 ? (s[8][15 - d - 1 + 1] = p) : (s[8][15 - d - 1] = p);
            }
            s[o - 8][8] = !g;
        },
        T = function (g, u) {
            let f = -1,
                w = o - 1,
                d = 7,
                p = 0;
            const m = re.getMaskFunction(u);
            for (let E = o - 1; E > 0; E -= 2)
                for (E == 6 && (E -= 1); ; ) {
                    for (let B = 0; B < 2; B += 1)
                        if (s[w][E - B] == null) {
                            let L = !1;
                            (p < g.length && (L = ((g[p] >>> d) & 1) == 1),
                                m(w, E - B) && (L = !L),
                                (s[w][E - B] = L),
                                (d -= 1),
                                d == -1 && ((p += 1), (d = 7)));
                        }
                    if (((w += f), w < 0 || o <= w)) {
                        ((w -= f), (f = -f));
                        break;
                    }
                }
        },
        O = function (g, u) {
            let f = 0,
                w = 0,
                d = 0;
            const p = new Array(u.length),
                m = new Array(u.length);
            for (let x = 0; x < u.length; x += 1) {
                const P = u[x].dataCount,
                    _ = u[x].totalCount - P;
                ((w = Math.max(w, P)), (d = Math.max(d, _)), (p[x] = new Array(P)));
                for (let S = 0; S < p[x].length; S += 1) p[x][S] = 255 & g.getBuffer()[S + f];
                f += P;
                const Z = re.getErrorCorrectPolynomial(_),
                    Q = de(p[x], Z.getLength() - 1).mod(Z);
                m[x] = new Array(Z.getLength() - 1);
                for (let S = 0; S < m[x].length; S += 1) {
                    const F = S + Q.getLength() - m[x].length;
                    m[x][S] = F >= 0 ? Q.getAt(F) : 0;
                }
            }
            let E = 0;
            for (let x = 0; x < u.length; x += 1) E += u[x].totalCount;
            const B = new Array(E);
            let L = 0;
            for (let x = 0; x < w; x += 1)
                for (let P = 0; P < u.length; P += 1) x < p[P].length && ((B[L] = p[P][x]), (L += 1));
            for (let x = 0; x < d; x += 1)
                for (let P = 0; P < u.length; P += 1) x < m[P].length && ((B[L] = m[P][x]), (L += 1));
            return B;
        },
        R = function (g, u, f) {
            const w = qe.getRSBlocks(g, u),
                d = Xe();
            for (let m = 0; m < f.length; m += 1) {
                const E = f[m];
                (d.put(E.getMode(), 4), d.put(E.getLength(), re.getLengthInBits(E.getMode(), g)), E.write(d));
            }
            let p = 0;
            for (let m = 0; m < w.length; m += 1) p += w[m].dataCount;
            if (d.getLengthInBits() > p * 8)
                throw "code length overflow. (" + d.getLengthInBits() + ">" + p * 8 + ")";
            for (d.getLengthInBits() + 4 <= p * 8 && d.put(0, 4); d.getLengthInBits() % 8 != 0; )
                d.putBit(!1);
            for (; !(d.getLengthInBits() >= p * 8 || (d.put(236, 8), d.getLengthInBits() >= p * 8)); )
                d.put(17, 8);
            return O(d, w);
        };
    ((v.addData = function (g, u) {
        u = u || "Byte";
        let f = null;
        switch (u) {
            case "Numeric":
                f = Ft(g);
                break;
            case "Alphanumeric":
                f = Ht(g);
                break;
            case "Byte":
                f = Kt(g);
                break;
            case "Kanji":
                f = Wt(g);
                break;
            default:
                throw "mode:" + u;
        }
        (y.push(f), (c = null));
    }),
        (v.isDark = function (g, u) {
            if (g < 0 || o <= g || u < 0 || o <= u) throw g + "," + u;
            return s[g][u];
        }),
        (v.getModuleCount = function () {
            return o;
        }),
        (v.make = function () {
            if (i < 1) {
                let g = 1;
                for (; g < 40; g++) {
                    const u = qe.getRSBlocks(g, a),
                        f = Xe();
                    for (let d = 0; d < y.length; d++) {
                        const p = y[d];
                        (f.put(p.getMode(), 4),
                            f.put(p.getLength(), re.getLengthInBits(p.getMode(), g)),
                            p.write(f));
                    }
                    let w = 0;
                    for (let d = 0; d < u.length; d++) w += u[d].dataCount;
                    if (f.getLengthInBits() <= w * 8) break;
                }
                i = g;
            }
            l(!1, b());
        }),
        (v.createTableTag = function (g, u) {
            ((g = g || 2), (u = typeof u > "u" ? g * 4 : u));
            let f = "";
            ((f += '<table style="'),
                (f += " border-width: 0px; border-style: none;"),
                (f += " border-collapse: collapse;"),
                (f += " padding: 0px; margin: " + u + "px;"),
                (f += '">'),
                (f += "<tbody>"));
            for (let w = 0; w < v.getModuleCount(); w += 1) {
                f += "<tr>";
                for (let d = 0; d < v.getModuleCount(); d += 1)
                    ((f += '<td style="'),
                        (f += " border-width: 0px; border-style: none;"),
                        (f += " border-collapse: collapse;"),
                        (f += " padding: 0px; margin: 0px;"),
                        (f += " width: " + g + "px;"),
                        (f += " height: " + g + "px;"),
                        (f += " background-color: "),
                        (f += v.isDark(w, d) ? "#000000" : "#ffffff"),
                        (f += ";"),
                        (f += '"/>'));
                f += "</tr>";
            }
            return ((f += "</tbody>"), (f += "</table>"), f);
        }),
        (v.createSvgTag = function (g, u, f, w) {
            let d = {};
            (typeof arguments[0] == "object" &&
                ((d = arguments[0]), (g = d.cellSize), (u = d.margin), (f = d.alt), (w = d.title)),
                (g = g || 2),
                (u = typeof u > "u" ? g * 4 : u),
                (f = typeof f == "string" ? { text: f } : f || {}),
                (f.text = f.text || null),
                (f.id = f.text ? f.id || "qrcode-description" : null),
                (w = typeof w == "string" ? { text: w } : w || {}),
                (w.text = w.text || null),
                (w.id = w.text ? w.id || "qrcode-title" : null));
            const p = v.getModuleCount() * g + u * 2;
            let m,
                E,
                B,
                L,
                x = "",
                P;
            for (
                P = "l" + g + ",0 0," + g + " -" + g + ",0 0,-" + g + "z ",
                    x += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
                    x += d.scalable ? "" : ' width="' + p + 'px" height="' + p + 'px"',
                    x += ' viewBox="0 0 ' + p + " " + p + '" ',
                    x += ' preserveAspectRatio="xMinYMin meet"',
                    x +=
                        w.text || f.text
                            ? ' role="img" aria-labelledby="' + D([w.id, f.id].join(" ").trim()) + '"'
                            : "",
                    x += ">",
                    x += w.text ? '<title id="' + D(w.id) + '">' + D(w.text) + "</title>" : "",
                    x += f.text ? '<description id="' + D(f.id) + '">' + D(f.text) + "</description>" : "",
                    x += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
                    x += '<path d="',
                    B = 0;
                B < v.getModuleCount();
                B += 1
            )
                for (L = B * g + u, m = 0; m < v.getModuleCount(); m += 1)
                    v.isDark(B, m) && ((E = m * g + u), (x += "M" + E + "," + L + P));
            return ((x += '" stroke="transparent" fill="black"/>'), (x += "</svg>"), x);
        }),
        (v.createDataURL = function (g, u) {
            ((g = g || 2), (u = typeof u > "u" ? g * 4 : u));
            const f = v.getModuleCount() * g + u * 2,
                w = u,
                d = f - u;
            return Vt(f, f, function (p, m) {
                if (w <= p && p < d && w <= m && m < d) {
                    const E = Math.floor((p - w) / g),
                        B = Math.floor((m - w) / g);
                    return v.isDark(B, E) ? 0 : 1;
                } else return 1;
            });
        }),
        (v.createImgTag = function (g, u, f) {
            ((g = g || 2), (u = typeof u > "u" ? g * 4 : u));
            const w = v.getModuleCount() * g + u * 2;
            let d = "";
            return (
                (d += "<img"),
                (d += ' src="'),
                (d += v.createDataURL(g, u)),
                (d += '"'),
                (d += ' width="'),
                (d += w),
                (d += '"'),
                (d += ' height="'),
                (d += w),
                (d += '"'),
                f && ((d += ' alt="'), (d += D(f)), (d += '"')),
                (d += "/>"),
                d
            );
        }));
    const D = function (g) {
            let u = "";
            for (let f = 0; f < g.length; f += 1) {
                const w = g.charAt(f);
                switch (w) {
                    case "<":
                        u += "&lt;";
                        break;
                    case ">":
                        u += "&gt;";
                        break;
                    case "&":
                        u += "&amp;";
                        break;
                    case '"':
                        u += "&quot;";
                        break;
                    default:
                        u += w;
                        break;
                }
            }
            return u;
        },
        N = function (g) {
            g = typeof g > "u" ? 1 * 2 : g;
            const f = v.getModuleCount() * 1 + g * 2,
                w = g,
                d = f - g;
            let p, m, E, B, L;
            const x = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " },
                P = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " };
            let _ = "";
            for (p = 0; p < f; p += 2) {
                for (E = Math.floor((p - w) / 1), B = Math.floor((p + 1 - w) / 1), m = 0; m < f; m += 1)
                    ((L = "█"),
                        w <= m &&
                            m < d &&
                            w <= p &&
                            p < d &&
                            v.isDark(E, Math.floor((m - w) / 1)) &&
                            (L = " "),
                        w <= m && m < d && w <= p + 1 && p + 1 < d && v.isDark(B, Math.floor((m - w) / 1))
                            ? (L += " ")
                            : (L += "█"),
                        (_ += g < 1 && p + 1 >= d ? P[L] : x[L]));
                _ += `
`;
            }
            return f % 2 && g > 0
                ? _.substring(0, _.length - f - 1) + Array(f + 1).join("▀")
                : _.substring(0, _.length - 1);
        };
    return (
        (v.createASCII = function (g, u) {
            if (((g = g || 1), g < 2)) return N(u);
            ((g -= 1), (u = typeof u > "u" ? g * 2 : u));
            const f = v.getModuleCount() * g + u * 2,
                w = u,
                d = f - u;
            let p, m, E, B;
            const L = Array(g + 1).join("██"),
                x = Array(g + 1).join("  ");
            let P = "",
                _ = "";
            for (p = 0; p < f; p += 1) {
                for (E = Math.floor((p - w) / g), _ = "", m = 0; m < f; m += 1)
                    ((B = 1),
                        w <= m && m < d && w <= p && p < d && v.isDark(E, Math.floor((m - w) / g)) && (B = 0),
                        (_ += B ? L : x));
                for (E = 0; E < g; E += 1)
                    P +=
                        _ +
                        `
`;
            }
            return P.substring(0, P.length - 1);
        }),
        (v.renderTo2dContext = function (g, u) {
            u = u || 2;
            const f = v.getModuleCount();
            for (let w = 0; w < f; w++)
                for (let d = 0; d < f; d++)
                    ((g.fillStyle = v.isDark(w, d) ? "black" : "white"), g.fillRect(d * u, w * u, u, u));
        }),
        v
    );
};
Ce.stringToBytes = function (t) {
    const e = [];
    for (let r = 0; r < t.length; r += 1) {
        const n = t.charCodeAt(r);
        e.push(n & 255);
    }
    return e;
};
Ce.createStringToBytes = function (t, e) {
    const r = (function () {
            const i = Qt(t),
                a = function () {
                    const c = i.read();
                    if (c == -1) throw "eof";
                    return c;
                };
            let s = 0;
            const o = {};
            for (;;) {
                const c = i.read();
                if (c == -1) break;
                const y = a(),
                    v = a(),
                    l = a(),
                    h = String.fromCharCode((c << 8) | y),
                    b = (v << 8) | l;
                ((o[h] = b), (s += 1));
            }
            if (s != e) throw s + " != " + e;
            return o;
        })(),
        n = "?".charCodeAt(0);
    return function (i) {
        const a = [];
        for (let s = 0; s < i.length; s += 1) {
            const o = i.charCodeAt(s);
            if (o < 128) a.push(o);
            else {
                const c = r[i.charAt(s)];
                typeof c == "number"
                    ? (c & 255) == c
                        ? a.push(c)
                        : (a.push(c >>> 8), a.push(c & 255))
                    : a.push(n);
            }
        }
        return a;
    };
};
const H = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 },
    ge = { L: 1, M: 0, Q: 3, H: 2 },
    te = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
    },
    re = (function () {
        const t = [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170],
            ],
            e = 1335,
            r = 7973,
            n = 21522,
            i = {},
            a = function (s) {
                let o = 0;
                for (; s != 0; ) ((o += 1), (s >>>= 1));
                return o;
            };
        return (
            (i.getBCHTypeInfo = function (s) {
                let o = s << 10;
                for (; a(o) - a(e) >= 0; ) o ^= e << (a(o) - a(e));
                return ((s << 10) | o) ^ n;
            }),
            (i.getBCHTypeNumber = function (s) {
                let o = s << 12;
                for (; a(o) - a(r) >= 0; ) o ^= r << (a(o) - a(r));
                return (s << 12) | o;
            }),
            (i.getPatternPosition = function (s) {
                return t[s - 1];
            }),
            (i.getMaskFunction = function (s) {
                switch (s) {
                    case te.PATTERN000:
                        return function (o, c) {
                            return (o + c) % 2 == 0;
                        };
                    case te.PATTERN001:
                        return function (o, c) {
                            return o % 2 == 0;
                        };
                    case te.PATTERN010:
                        return function (o, c) {
                            return c % 3 == 0;
                        };
                    case te.PATTERN011:
                        return function (o, c) {
                            return (o + c) % 3 == 0;
                        };
                    case te.PATTERN100:
                        return function (o, c) {
                            return (Math.floor(o / 2) + Math.floor(c / 3)) % 2 == 0;
                        };
                    case te.PATTERN101:
                        return function (o, c) {
                            return ((o * c) % 2) + ((o * c) % 3) == 0;
                        };
                    case te.PATTERN110:
                        return function (o, c) {
                            return (((o * c) % 2) + ((o * c) % 3)) % 2 == 0;
                        };
                    case te.PATTERN111:
                        return function (o, c) {
                            return (((o * c) % 3) + ((o + c) % 2)) % 2 == 0;
                        };
                    default:
                        throw "bad maskPattern:" + s;
                }
            }),
            (i.getErrorCorrectPolynomial = function (s) {
                let o = de([1], 0);
                for (let c = 0; c < s; c += 1) o = o.multiply(de([1, ne.gexp(c)], 0));
                return o;
            }),
            (i.getLengthInBits = function (s, o) {
                if (1 <= o && o < 10)
                    switch (s) {
                        case H.MODE_NUMBER:
                            return 10;
                        case H.MODE_ALPHA_NUM:
                            return 9;
                        case H.MODE_8BIT_BYTE:
                            return 8;
                        case H.MODE_KANJI:
                            return 8;
                        default:
                            throw "mode:" + s;
                    }
                else if (o < 27)
                    switch (s) {
                        case H.MODE_NUMBER:
                            return 12;
                        case H.MODE_ALPHA_NUM:
                            return 11;
                        case H.MODE_8BIT_BYTE:
                            return 16;
                        case H.MODE_KANJI:
                            return 10;
                        default:
                            throw "mode:" + s;
                    }
                else if (o < 41)
                    switch (s) {
                        case H.MODE_NUMBER:
                            return 14;
                        case H.MODE_ALPHA_NUM:
                            return 13;
                        case H.MODE_8BIT_BYTE:
                            return 16;
                        case H.MODE_KANJI:
                            return 12;
                        default:
                            throw "mode:" + s;
                    }
                else throw "type:" + o;
            }),
            (i.getLostPoint = function (s) {
                const o = s.getModuleCount();
                let c = 0;
                for (let l = 0; l < o; l += 1)
                    for (let h = 0; h < o; h += 1) {
                        let b = 0;
                        const C = s.isDark(l, h);
                        for (let A = -1; A <= 1; A += 1)
                            if (!(l + A < 0 || o <= l + A))
                                for (let k = -1; k <= 1; k += 1)
                                    h + k < 0 ||
                                        o <= h + k ||
                                        (A == 0 && k == 0) ||
                                        (C == s.isDark(l + A, h + k) && (b += 1));
                        b > 5 && (c += 3 + b - 5);
                    }
                for (let l = 0; l < o - 1; l += 1)
                    for (let h = 0; h < o - 1; h += 1) {
                        let b = 0;
                        (s.isDark(l, h) && (b += 1),
                            s.isDark(l + 1, h) && (b += 1),
                            s.isDark(l, h + 1) && (b += 1),
                            s.isDark(l + 1, h + 1) && (b += 1),
                            (b == 0 || b == 4) && (c += 3));
                    }
                for (let l = 0; l < o; l += 1)
                    for (let h = 0; h < o - 6; h += 1)
                        s.isDark(l, h) &&
                            !s.isDark(l, h + 1) &&
                            s.isDark(l, h + 2) &&
                            s.isDark(l, h + 3) &&
                            s.isDark(l, h + 4) &&
                            !s.isDark(l, h + 5) &&
                            s.isDark(l, h + 6) &&
                            (c += 40);
                for (let l = 0; l < o; l += 1)
                    for (let h = 0; h < o - 6; h += 1)
                        s.isDark(h, l) &&
                            !s.isDark(h + 1, l) &&
                            s.isDark(h + 2, l) &&
                            s.isDark(h + 3, l) &&
                            s.isDark(h + 4, l) &&
                            !s.isDark(h + 5, l) &&
                            s.isDark(h + 6, l) &&
                            (c += 40);
                let y = 0;
                for (let l = 0; l < o; l += 1) for (let h = 0; h < o; h += 1) s.isDark(h, l) && (y += 1);
                const v = Math.abs((100 * y) / o / o - 50) / 5;
                return ((c += v * 10), c);
            }),
            i
        );
    })(),
    ne = (function () {
        const t = new Array(256),
            e = new Array(256);
        for (let n = 0; n < 8; n += 1) t[n] = 1 << n;
        for (let n = 8; n < 256; n += 1) t[n] = t[n - 4] ^ t[n - 5] ^ t[n - 6] ^ t[n - 8];
        for (let n = 0; n < 255; n += 1) e[t[n]] = n;
        const r = {};
        return (
            (r.glog = function (n) {
                if (n < 1) throw "glog(" + n + ")";
                return e[n];
            }),
            (r.gexp = function (n) {
                for (; n < 0; ) n += 255;
                for (; n >= 256; ) n -= 255;
                return t[n];
            }),
            r
        );
    })(),
    de = function (t, e) {
        if (typeof t.length > "u") throw t.length + "/" + e;
        const r = (function () {
                let i = 0;
                for (; i < t.length && t[i] == 0; ) i += 1;
                const a = new Array(t.length - i + e);
                for (let s = 0; s < t.length - i; s += 1) a[s] = t[s + i];
                return a;
            })(),
            n = {};
        return (
            (n.getAt = function (i) {
                return r[i];
            }),
            (n.getLength = function () {
                return r.length;
            }),
            (n.multiply = function (i) {
                const a = new Array(n.getLength() + i.getLength() - 1);
                for (let s = 0; s < n.getLength(); s += 1)
                    for (let o = 0; o < i.getLength(); o += 1)
                        a[s + o] ^= ne.gexp(ne.glog(n.getAt(s)) + ne.glog(i.getAt(o)));
                return de(a, 0);
            }),
            (n.mod = function (i) {
                if (n.getLength() - i.getLength() < 0) return n;
                const a = ne.glog(n.getAt(0)) - ne.glog(i.getAt(0)),
                    s = new Array(n.getLength());
                for (let o = 0; o < n.getLength(); o += 1) s[o] = n.getAt(o);
                for (let o = 0; o < i.getLength(); o += 1) s[o] ^= ne.gexp(ne.glog(i.getAt(o)) + a);
                return de(s, 0).mod(i);
            }),
            n
        );
    },
    qe = (function () {
        const t = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12, 7, 37, 13],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16],
            ],
            e = function (i, a) {
                const s = {};
                return ((s.totalCount = i), (s.dataCount = a), s);
            },
            r = {},
            n = function (i, a) {
                switch (a) {
                    case ge.L:
                        return t[(i - 1) * 4 + 0];
                    case ge.M:
                        return t[(i - 1) * 4 + 1];
                    case ge.Q:
                        return t[(i - 1) * 4 + 2];
                    case ge.H:
                        return t[(i - 1) * 4 + 3];
                    default:
                        return;
                }
            };
        return (
            (r.getRSBlocks = function (i, a) {
                const s = n(i, a);
                if (typeof s > "u") throw "bad rs block @ typeNumber:" + i + "/errorCorrectionLevel:" + a;
                const o = s.length / 3,
                    c = [];
                for (let y = 0; y < o; y += 1) {
                    const v = s[y * 3 + 0],
                        l = s[y * 3 + 1],
                        h = s[y * 3 + 2];
                    for (let b = 0; b < v; b += 1) c.push(e(l, h));
                }
                return c;
            }),
            r
        );
    })(),
    Xe = function () {
        const t = [];
        let e = 0;
        const r = {};
        return (
            (r.getBuffer = function () {
                return t;
            }),
            (r.getAt = function (n) {
                const i = Math.floor(n / 8);
                return ((t[i] >>> (7 - (n % 8))) & 1) == 1;
            }),
            (r.put = function (n, i) {
                for (let a = 0; a < i; a += 1) r.putBit(((n >>> (i - a - 1)) & 1) == 1);
            }),
            (r.getLengthInBits = function () {
                return e;
            }),
            (r.putBit = function (n) {
                const i = Math.floor(e / 8);
                (t.length <= i && t.push(0), n && (t[i] |= 128 >>> e % 8), (e += 1));
            }),
            r
        );
    },
    Ft = function (t) {
        const e = H.MODE_NUMBER,
            r = t,
            n = {};
        ((n.getMode = function () {
            return e;
        }),
            (n.getLength = function (s) {
                return r.length;
            }),
            (n.write = function (s) {
                const o = r;
                let c = 0;
                for (; c + 2 < o.length; ) (s.put(i(o.substring(c, c + 3)), 10), (c += 3));
                c < o.length &&
                    (o.length - c == 1
                        ? s.put(i(o.substring(c, c + 1)), 4)
                        : o.length - c == 2 && s.put(i(o.substring(c, c + 2)), 7));
            }));
        const i = function (s) {
                let o = 0;
                for (let c = 0; c < s.length; c += 1) o = o * 10 + a(s.charAt(c));
                return o;
            },
            a = function (s) {
                if ("0" <= s && s <= "9") return s.charCodeAt(0) - "0".charCodeAt(0);
                throw "illegal char :" + s;
            };
        return n;
    },
    Ht = function (t) {
        const e = H.MODE_ALPHA_NUM,
            r = t,
            n = {};
        ((n.getMode = function () {
            return e;
        }),
            (n.getLength = function (a) {
                return r.length;
            }),
            (n.write = function (a) {
                const s = r;
                let o = 0;
                for (; o + 1 < s.length; ) (a.put(i(s.charAt(o)) * 45 + i(s.charAt(o + 1)), 11), (o += 2));
                o < s.length && a.put(i(s.charAt(o)), 6);
            }));
        const i = function (a) {
            if ("0" <= a && a <= "9") return a.charCodeAt(0) - "0".charCodeAt(0);
            if ("A" <= a && a <= "Z") return a.charCodeAt(0) - "A".charCodeAt(0) + 10;
            switch (a) {
                case " ":
                    return 36;
                case "$":
                    return 37;
                case "%":
                    return 38;
                case "*":
                    return 39;
                case "+":
                    return 40;
                case "-":
                    return 41;
                case ".":
                    return 42;
                case "/":
                    return 43;
                case ":":
                    return 44;
                default:
                    throw "illegal char :" + a;
            }
        };
        return n;
    },
    Kt = function (t) {
        const e = H.MODE_8BIT_BYTE,
            r = Ce.stringToBytes(t),
            n = {};
        return (
            (n.getMode = function () {
                return e;
            }),
            (n.getLength = function (i) {
                return r.length;
            }),
            (n.write = function (i) {
                for (let a = 0; a < r.length; a += 1) i.put(r[a], 8);
            }),
            n
        );
    },
    Wt = function (t) {
        const e = H.MODE_KANJI,
            r = Ce.stringToBytes;
        (function (a, s) {
            const o = r(a);
            if (o.length != 2 || ((o[0] << 8) | o[1]) != s) throw "sjis not supported.";
        })("友", 38726);
        const n = r(t),
            i = {};
        return (
            (i.getMode = function () {
                return e;
            }),
            (i.getLength = function (a) {
                return ~~(n.length / 2);
            }),
            (i.write = function (a) {
                const s = n;
                let o = 0;
                for (; o + 1 < s.length; ) {
                    let c = ((255 & s[o]) << 8) | (255 & s[o + 1]);
                    if (33088 <= c && c <= 40956) c -= 33088;
                    else if (57408 <= c && c <= 60351) c -= 49472;
                    else throw "illegal char at " + (o + 1) + "/" + c;
                    ((c = ((c >>> 8) & 255) * 192 + (c & 255)), a.put(c, 13), (o += 2));
                }
                if (o < s.length) throw "illegal char at " + (o + 1);
            }),
            i
        );
    },
    at = function () {
        const t = [],
            e = {};
        return (
            (e.writeByte = function (r) {
                t.push(r & 255);
            }),
            (e.writeShort = function (r) {
                (e.writeByte(r), e.writeByte(r >>> 8));
            }),
            (e.writeBytes = function (r, n, i) {
                ((n = n || 0), (i = i || r.length));
                for (let a = 0; a < i; a += 1) e.writeByte(r[a + n]);
            }),
            (e.writeString = function (r) {
                for (let n = 0; n < r.length; n += 1) e.writeByte(r.charCodeAt(n));
            }),
            (e.toByteArray = function () {
                return t;
            }),
            (e.toString = function () {
                let r = "";
                r += "[";
                for (let n = 0; n < t.length; n += 1) (n > 0 && (r += ","), (r += t[n]));
                return ((r += "]"), r);
            }),
            e
        );
    },
    Gt = function () {
        let t = 0,
            e = 0,
            r = 0,
            n = "";
        const i = {},
            a = function (o) {
                n += String.fromCharCode(s(o & 63));
            },
            s = function (o) {
                if (o < 0) throw "n:" + o;
                if (o < 26) return 65 + o;
                if (o < 52) return 97 + (o - 26);
                if (o < 62) return 48 + (o - 52);
                if (o == 62) return 43;
                if (o == 63) return 47;
                throw "n:" + o;
            };
        return (
            (i.writeByte = function (o) {
                for (t = (t << 8) | (o & 255), e += 8, r += 1; e >= 6; ) (a(t >>> (e - 6)), (e -= 6));
            }),
            (i.flush = function () {
                if ((e > 0 && (a(t << (6 - e)), (t = 0), (e = 0)), r % 3 != 0)) {
                    const o = 3 - (r % 3);
                    for (let c = 0; c < o; c += 1) n += "=";
                }
            }),
            (i.toString = function () {
                return n;
            }),
            i
        );
    },
    Qt = function (t) {
        const e = t;
        let r = 0,
            n = 0,
            i = 0;
        const a = {};
        a.read = function () {
            for (; i < 8; ) {
                if (r >= e.length) {
                    if (i == 0) return -1;
                    throw "unexpected end of file./" + i;
                }
                const c = e.charAt(r);
                if (((r += 1), c == "=")) return ((i = 0), -1);
                if (c.match(/^\s$/)) continue;
                ((n = (n << 6) | s(c.charCodeAt(0))), (i += 6));
            }
            const o = (n >>> (i - 8)) & 255;
            return ((i -= 8), o);
        };
        const s = function (o) {
            if (65 <= o && o <= 90) return o - 65;
            if (97 <= o && o <= 122) return o - 97 + 26;
            if (48 <= o && o <= 57) return o - 48 + 52;
            if (o == 43) return 62;
            if (o == 47) return 63;
            throw "c:" + o;
        };
        return a;
    },
    Jt = function (t, e) {
        const r = t,
            n = e,
            i = new Array(t * e),
            a = {};
        ((a.setPixel = function (y, v, l) {
            i[v * r + y] = l;
        }),
            (a.write = function (y) {
                (y.writeString("GIF87a"),
                    y.writeShort(r),
                    y.writeShort(n),
                    y.writeByte(128),
                    y.writeByte(0),
                    y.writeByte(0),
                    y.writeByte(0),
                    y.writeByte(0),
                    y.writeByte(0),
                    y.writeByte(255),
                    y.writeByte(255),
                    y.writeByte(255),
                    y.writeString(","),
                    y.writeShort(0),
                    y.writeShort(0),
                    y.writeShort(r),
                    y.writeShort(n),
                    y.writeByte(0));
                const v = 2,
                    l = o(v);
                y.writeByte(v);
                let h = 0;
                for (; l.length - h > 255; ) (y.writeByte(255), y.writeBytes(l, h, 255), (h += 255));
                (y.writeByte(l.length - h),
                    y.writeBytes(l, h, l.length - h),
                    y.writeByte(0),
                    y.writeString(";"));
            }));
        const s = function (y) {
                const v = y;
                let l = 0,
                    h = 0;
                const b = {};
                return (
                    (b.write = function (C, A) {
                        if (C >>> A) throw "length over";
                        for (; l + A >= 8; )
                            (v.writeByte(255 & ((C << l) | h)),
                                (A -= 8 - l),
                                (C >>>= 8 - l),
                                (h = 0),
                                (l = 0));
                        ((h = (C << l) | h), (l = l + A));
                    }),
                    (b.flush = function () {
                        l > 0 && v.writeByte(h);
                    }),
                    b
                );
            },
            o = function (y) {
                const v = 1 << y,
                    l = (1 << y) + 1;
                let h = y + 1;
                const b = c();
                for (let T = 0; T < v; T += 1) b.add(String.fromCharCode(T));
                (b.add(String.fromCharCode(v)), b.add(String.fromCharCode(l)));
                const C = at(),
                    A = s(C);
                A.write(v, h);
                let k = 0,
                    M = String.fromCharCode(i[k]);
                for (k += 1; k < i.length; ) {
                    const T = String.fromCharCode(i[k]);
                    ((k += 1),
                        b.contains(M + T)
                            ? (M = M + T)
                            : (A.write(b.indexOf(M), h),
                              b.size() < 4095 && (b.size() == 1 << h && (h += 1), b.add(M + T)),
                              (M = T)));
                }
                return (A.write(b.indexOf(M), h), A.write(l, h), A.flush(), C.toByteArray());
            },
            c = function () {
                const y = {};
                let v = 0;
                const l = {};
                return (
                    (l.add = function (h) {
                        if (l.contains(h)) throw "dup key:" + h;
                        ((y[h] = v), (v += 1));
                    }),
                    (l.size = function () {
                        return v;
                    }),
                    (l.indexOf = function (h) {
                        return y[h];
                    }),
                    (l.contains = function (h) {
                        return typeof y[h] < "u";
                    }),
                    l
                );
            };
        return a;
    },
    Vt = function (t, e, r) {
        const n = Jt(t, e);
        for (let o = 0; o < e; o += 1) for (let c = 0; c < t; c += 1) n.setPixel(c, o, r(c, o));
        const i = at();
        n.write(i);
        const a = Gt(),
            s = i.toByteArray();
        for (let o = 0; o < s.length; o += 1) a.writeByte(s[o]);
        return (a.flush(), "data:image/gif;base64," + a);
    },
    Yt = xe("App", {
        web: () => lt(() => Promise.resolve().then(() => Xt), void 0).then((t) => new t.AppWeb()),
    }),
    nr = Object.freeze(
        Object.defineProperty({ __proto__: null, App: Yt }, Symbol.toStringTag, { value: "Module" }),
    );
class qt extends Ae {
    constructor() {
        (super(),
            (this.handleVisibilityChange = () => {
                const e = { isActive: document.hidden !== !0 };
                (this.notifyListeners("appStateChange", e),
                    document.hidden
                        ? this.notifyListeners("pause", null)
                        : this.notifyListeners("resume", null));
            }),
            document.addEventListener("visibilitychange", this.handleVisibilityChange, !1));
    }
    exitApp() {
        throw this.unimplemented("Not implemented on web.");
    }
    async getInfo() {
        throw this.unimplemented("Not implemented on web.");
    }
    async getLaunchUrl() {
        return { url: "" };
    }
    async getState() {
        return { isActive: document.hidden !== !0 };
    }
    async minimizeApp() {
        throw this.unimplemented("Not implemented on web.");
    }
    async toggleBackButtonHandler() {
        throw this.unimplemented("Not implemented on web.");
    }
    async getAppLanguage() {
        return { value: navigator.language.split("-")[0].toLowerCase() };
    }
}
const Xt = Object.freeze(
    Object.defineProperty({ __proto__: null, AppWeb: qt }, Symbol.toStringTag, { value: "Module" }),
);
export {
    Se as C,
    lt as _,
    We as a,
    rr as b,
    Zt as c,
    At as d,
    nr as e,
    zt as g,
    Ct as i,
    Ce as q,
    xe as r,
    Bt as s,
    tr as u,
    er as z,
};
