import { r as a } from "./vendor-react-3a46a5d3.js";
var p2 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
const o2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    l = (e, t) => {
        const r = a.forwardRef(
            (
                {
                    color: h = "currentColor",
                    size: m = 24,
                    strokeWidth: c = 2,
                    absoluteStrokeWidth: H,
                    children: A,
                    ...M
                },
                V,
            ) =>
                a.createElement(
                    "svg",
                    {
                        ref: V,
                        ...p2,
                        width: m,
                        height: m,
                        stroke: h,
                        strokeWidth: H ? (Number(c) * 24) / Number(m) : c,
                        className: `lucide lucide-${o2(e)}`,
                        ...M,
                    },
                    [...t.map(([d, Z]) => a.createElement(d, Z)), ...((Array.isArray(A) ? A : [A]) || [])],
                ),
        );
        return ((r.displayName = `${e}`), r);
    },
    s6 = l("Activity", [["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]]),
    g6 = l("AlignLeft", [
        ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
        ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
        ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }],
    ]),
    i6 = l("Aperture", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "14.31", x2: "20.05", y1: "8", y2: "17.94", key: "jdes2e" }],
        ["line", { x1: "9.69", x2: "21.17", y1: "8", y2: "8", key: "1gubuk" }],
        ["line", { x1: "7.38", x2: "13.12", y1: "12", y2: "2.06", key: "1m4d1n" }],
        ["line", { x1: "9.69", x2: "3.95", y1: "16", y2: "6.06", key: "1wye2p" }],
        ["line", { x1: "14.31", x2: "2.83", y1: "16", y2: "16", key: "1l9f4x" }],
        ["line", { x1: "16.62", x2: "10.88", y1: "12", y2: "21.94", key: "1jjvfs" }],
    ]),
    u6 = l("Apple", [
        [
            "path",
            {
                d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
                key: "3s7exb",
            },
        ],
        ["path", { d: "M10 2c1 .5 2 2 2 5", key: "fcco2y" }],
    ]),
    L6 = l("Archive", [
        ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
        ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
        ["path", { d: "M10 12h4", key: "a56b0p" }],
    ]),
    y6 = l("ArrowDownLeft", [
        ["path", { d: "M17 7 7 17", key: "15tmo1" }],
        ["path", { d: "M17 17H7V7", key: "1org7z" }],
    ]),
    v6 = l("ArrowLeftRight", [
        ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
        ["path", { d: "M4 7h16", key: "6tx8e3" }],
        ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
        ["path", { d: "M20 17H4", key: "h6l3hr" }],
    ]),
    F6 = l("ArrowLeft", [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
    ]),
    f6 = l("ArrowUpRight", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
    ]),
    w6 = l("ArrowUp", [
        ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
        ["path", { d: "M12 19V5", key: "x0mq9r" }],
    ]),
    k6 = l("AtSign", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }],
    ]),
    C6 = l("BedDouble", [
        ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" }],
        ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" }],
        ["path", { d: "M12 4v6", key: "1dcgq2" }],
        ["path", { d: "M2 18h20", key: "ajqnye" }],
    ]),
    $6 = l("BellOff", [
        ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
        ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
        ["path", { d: "m2 2 20 20", key: "1ooewy" }],
    ]),
    x6 = l("BellRing", [
        ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
        ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
        ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
    ]),
    b6 = l("Bell", [
        ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
    ]),
    R6 = l("Bike", [
        ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
        ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
        ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
        ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }],
    ]),
    S6 = l("BookOpen", [
        ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
        ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
    ]),
    I6 = l("Bookmark", [
        ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
    ]),
    N6 = l("Brain", [
        [
            "path",
            {
                d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",
                key: "1mhkh5",
            },
        ],
        [
            "path",
            {
                d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",
                key: "1d6s00",
            },
        ],
    ]),
    q6 = l("CalendarDays", [
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
        ["path", { d: "M8 14h.01", key: "6423bh" }],
        ["path", { d: "M12 14h.01", key: "1etili" }],
        ["path", { d: "M16 14h.01", key: "1gbofw" }],
        ["path", { d: "M8 18h.01", key: "lrp35t" }],
        ["path", { d: "M12 18h.01", key: "mhygvu" }],
        ["path", { d: "M16 18h.01", key: "kzsmim" }],
    ]),
    z6 = l("Camera", [
        [
            "path",
            {
                d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
                key: "1tc9qg",
            },
        ],
        ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
    ]),
    j6 = l("Cast", [
        ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }],
        ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
        ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
        ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }],
    ]),
    P6 = l("CheckCircle2", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]),
    B6 = l("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]),
    D6 = l("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
    T6 = l("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]),
    U6 = l("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]),
    O6 = l("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]),
    G6 = l("Clapperboard", [
        [
            "path",
            { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" },
        ],
        ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
        ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
        ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }],
    ]),
    Q6 = l("Clock", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
    ]),
    W6 = l("Code2", [
        ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
        ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
        ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
    ]),
    K6 = l("Code", [
        ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
        ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
    ]),
    X6 = l("Coffee", [
        ["path", { d: "M17 8h1a4 4 0 1 1 0 8h-1", key: "jx4kbh" }],
        ["path", { d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z", key: "1bxrl0" }],
        ["line", { x1: "6", x2: "6", y1: "2", y2: "4", key: "1cr9l3" }],
        ["line", { x1: "10", x2: "10", y1: "2", y2: "4", key: "170wym" }],
        ["line", { x1: "14", x2: "14", y1: "2", y2: "4", key: "1c5f70" }],
    ]),
    J6 = l("Contact", [
        ["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2", key: "1mghuy" }],
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
        ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }],
    ]),
    Y6 = l("Copy", [
        ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
        ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
    ]),
    _6 = l("CreditCard", [
        ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
        ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
    ]),
    a3 = l("Database", [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
        ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
        ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
    ]),
    e3 = l("Disc3", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
        ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
        ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }],
    ]),
    t3 = l("DollarSign", [
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
        ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }],
    ]),
    l3 = l("Download", [
        ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
        ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
        ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
    ]),
    n3 = l("Droplet", [
        [
            "path",
            {
                d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
                key: "c7niix",
            },
        ],
    ]),
    m3 = l("Expand", [
        ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
        ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
        ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
        ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }],
    ]),
    r3 = l("EyeOff", [
        ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
        [
            "path",
            {
                d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
                key: "9wicm4",
            },
        ],
        [
            "path",
            { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" },
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
    ]),
    c3 = l("Eye", [
        ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
    ]),
    A3 = l("Feather", [
        ["path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z", key: "u4sw5n" }],
        ["line", { x1: "16", x2: "2", y1: "8", y2: "22", key: "1c47m2" }],
        ["line", { x1: "17.5", x2: "9", y1: "15", y2: "15", key: "2fj3pr" }],
    ]),
    h3 = l("FileAudio", [
        [
            "path",
            {
                d: "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
                key: "1013sb",
            },
        ],
        ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
        ["path", { d: "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z", key: "gqt63y" }],
        ["path", { d: "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z", key: "cf7lqx" }],
        ["path", { d: "M2 19v-3a6 6 0 0 1 12 0v3", key: "1acxgf" }],
    ]),
    Z3 = l("FileDown", [
        [
            "path",
            { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" },
        ],
        ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
        ["path", { d: "M12 18v-6", key: "17g6i2" }],
        ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }],
    ]),
    H3 = l("FileText", [
        [
            "path",
            { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" },
        ],
        ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
        ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
        ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
        ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }],
    ]),
    M3 = l("Flame", [
        [
            "path",
            {
                d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
                key: "96xj49",
            },
        ],
    ]),
    V3 = l("Folder", [
        [
            "path",
            {
                d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
                key: "1kt360",
            },
        ],
    ]),
    d3 = l("Forward", [
        ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
        ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }],
    ]),
    E3 = l("Gamepad2", [
        ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
        ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
        ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
        ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
        [
            "path",
            {
                d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
                key: "mfqc10",
            },
        ],
    ]),
    p3 = l("Gem", [
        ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
        ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
        ["path", { d: "M2 9h20", key: "16fsjt" }],
    ]),
    o3 = l("Gift", [
        ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
        ["path", { d: "M12 8v13", key: "1c76mn" }],
        ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
        [
            "path",
            {
                d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
                key: "1ihvrl",
            },
        ],
    ]),
    s3 = l("Globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
    ]),
    g3 = l("Grid3x3", [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
        ["path", { d: "M3 9h18", key: "1pudct" }],
        ["path", { d: "M3 15h18", key: "5xshup" }],
        ["path", { d: "M9 3v18", key: "fh3hqa" }],
        ["path", { d: "M15 3v18", key: "14nvp0" }],
    ]),
    i3 = l("Hand", [
        ["path", { d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "aigmz7" }],
        ["path", { d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "1n6bmn" }],
        ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8", key: "a9iiix" }],
        [
            "path",
            {
                d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
                key: "1s1gnw",
            },
        ],
    ]),
    u3 = l("HardDriveDownload", [
        ["path", { d: "M12 2v8", key: "1q4o3n" }],
        ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
        ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
        ["path", { d: "M6 18h.01", key: "uhywen" }],
        ["path", { d: "M10 18h.01", key: "h775k" }],
    ]),
    L3 = l("Headphones", [
        [
            "path",
            {
                d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
                key: "1xhozi",
            },
        ],
    ]),
    y3 = l("Heart", [
        [
            "path",
            {
                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
                key: "c3ymky",
            },
        ],
    ]),
    v3 = l("History", [
        ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
        ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
        ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
    ]),
    F3 = l("Home", [
        ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }],
        ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }],
    ]),
    f3 = l("ImagePlus", [
        ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
        ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
        ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
        ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
        ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
    ]),
    w3 = l("Image", [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
        ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
        ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
    ]),
    k3 = l("Info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
    ]),
    C3 = l("KeyRound", [
        ["path", { d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z", key: "167ctg" }],
        ["circle", { cx: "16.5", cy: "7.5", r: ".5", key: "1kog09" }],
    ]),
    $3 = l("Keyboard", [
        ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", ry: "2", key: "15u882" }],
        ["path", { d: "M6 8h.001", key: "1ej0i3" }],
        ["path", { d: "M10 8h.001", key: "1x2st2" }],
        ["path", { d: "M14 8h.001", key: "1vkmyp" }],
        ["path", { d: "M18 8h.001", key: "kfsenl" }],
        ["path", { d: "M8 12h.001", key: "1sjpby" }],
        ["path", { d: "M12 12h.001", key: "al75ts" }],
        ["path", { d: "M16 12h.001", key: "931bgk" }],
        ["path", { d: "M7 16h10", key: "wp8him" }],
    ]),
    x3 = l("Languages", [
        ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
        ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
        ["path", { d: "M2 5h12", key: "or177f" }],
        ["path", { d: "M7 2h1", key: "1t2jsx" }],
        ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
        ["path", { d: "M14 18h6", key: "1m8k6r" }],
    ]),
    b3 = l("Layers", [
        [
            "path",
            {
                d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
                key: "8b97xw",
            },
        ],
        ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
        ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }],
    ]),
    R3 = l("LayoutGrid", [
        ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
        ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
        ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
        ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
    ]),
    S3 = l("Lightbulb", [
        [
            "path",
            {
                d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
                key: "1gvzjb",
            },
        ],
        ["path", { d: "M9 18h6", key: "x1upvd" }],
        ["path", { d: "M10 22h4", key: "ceow96" }],
    ]),
    I3 = l("Link2", [
        ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
        ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
        ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
    ]),
    N3 = l("ListChecks", [
        ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
        ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
        ["path", { d: "M13 6h8", key: "15sg57" }],
        ["path", { d: "M13 12h8", key: "h98zly" }],
        ["path", { d: "M13 18h8", key: "oe0vm4" }],
    ]),
    q3 = l("ListEnd", [
        ["path", { d: "M16 12H3", key: "1a2rj7" }],
        ["path", { d: "M16 6H3", key: "1wxfjs" }],
        ["path", { d: "M10 18H3", key: "13769t" }],
        ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5", key: "ilrcs8" }],
        ["path", { d: "m16 16-2 2 2 2", key: "kkc6pm" }],
    ]),
    z3 = l("ListFilter", [
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M7 12h10", key: "b7w52i" }],
        ["path", { d: "M10 18h4", key: "1ulq68" }],
    ]),
    j3 = l("ListMusic", [
        ["path", { d: "M21 15V6", key: "h1cx4g" }],
        ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z", key: "8saifv" }],
        ["path", { d: "M12 12H3", key: "18klou" }],
        ["path", { d: "M16 6H3", key: "1wxfjs" }],
        ["path", { d: "M12 18H3", key: "11ftsu" }],
    ]),
    P3 = l("ListOrdered", [
        ["line", { x1: "10", x2: "21", y1: "6", y2: "6", key: "76qw6h" }],
        ["line", { x1: "10", x2: "21", y1: "12", y2: "12", key: "16nom4" }],
        ["line", { x1: "10", x2: "21", y1: "18", y2: "18", key: "u3jurt" }],
        ["path", { d: "M4 6h1v4", key: "cnovpq" }],
        ["path", { d: "M4 10h2", key: "16xx2s" }],
        ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }],
    ]),
    B3 = l("ListPlus", [
        ["path", { d: "M11 12H3", key: "51ecnj" }],
        ["path", { d: "M16 6H3", key: "1wxfjs" }],
        ["path", { d: "M16 18H3", key: "12xzn7" }],
        ["path", { d: "M18 9v6", key: "1twb98" }],
        ["path", { d: "M21 12h-6", key: "bt1uis" }],
    ]),
    D3 = l("ListStart", [
        ["path", { d: "M16 12H3", key: "1a2rj7" }],
        ["path", { d: "M16 18H3", key: "12xzn7" }],
        ["path", { d: "M10 6H3", key: "lf8lx7" }],
        ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5", key: "1hghli" }],
        ["path", { d: "m16 8-2-2 2-2", key: "160uvd" }],
    ]),
    T3 = l("ListVideo", [
        ["path", { d: "M12 12H3", key: "18klou" }],
        ["path", { d: "M16 6H3", key: "1wxfjs" }],
        ["path", { d: "M12 18H3", key: "11ftsu" }],
        ["path", { d: "m16 12 5 3-5 3v-6Z", key: "zpskkp" }],
    ]),
    U3 = l("Loader2", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]),
    O3 = l("LocateFixed", [
        ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
        ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
        ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
    ]),
    G3 = l("Lock", [
        ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
        ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
    ]),
    Q3 = l("LogOut", [
        ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
        ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
        ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
    ]),
    W3 = l("MailOpen", [
        [
            "path",
            {
                d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
                key: "1jhwl8",
            },
        ],
        ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }],
    ]),
    K3 = l("Mail", [
        ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
    ]),
    X3 = l("MapPin", [
        ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
        ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
    ]),
    J3 = l("Maximize", [
        ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
        ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
        ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
        ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }],
    ]),
    Y3 = l("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]),
    _3 = l("MessageCircle", [["path", { d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z", key: "v2veuj" }]]),
    aa = l("MessageSquare", [
        ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
    ]),
    ea = l("Mic2", [
        ["path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12", key: "zoua8r" }],
        ["circle", { cx: "17", cy: "7", r: "5", key: "1fomce" }],
    ]),
    ta = l("MicOff", [
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
        ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
        ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
        ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
    ]),
    la = l("Mic", [
        ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
        ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
    ]),
    na = l("MinusCircle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M8 12h8", key: "1wcyev" }],
    ]),
    ma = l("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]),
    ra = l("MoreHorizontal", [
        ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
        ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
        ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
    ]),
    ca = l("MoreVertical", [
        ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
        ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
        ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
    ]),
    Aa = l("Music2", [
        ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
        ["path", { d: "M12 18V2l7 4", key: "g04rme" }],
    ]),
    ha = l("Navigation", [["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]]),
    Za = l("Newspaper", [
        [
            "path",
            {
                d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
                key: "7pis2x",
            },
        ],
        ["path", { d: "M18 14h-8", key: "sponae" }],
        ["path", { d: "M15 18h-5", key: "95g1m2" }],
        ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }],
    ]),
    Ha = l("Package", [
        ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
        [
            "path",
            {
                d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
                key: "hh9hay",
            },
        ],
        ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
        ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ]),
    Ma = l("Palette", [
        ["circle", { cx: "13.5", cy: "6.5", r: ".5", key: "1xcu5" }],
        ["circle", { cx: "17.5", cy: "10.5", r: ".5", key: "736e4u" }],
        ["circle", { cx: "8.5", cy: "7.5", r: ".5", key: "clrty" }],
        ["circle", { cx: "6.5", cy: "12.5", r: ".5", key: "1s4xz9" }],
        [
            "path",
            {
                d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
                key: "12rzf8",
            },
        ],
    ]),
    Va = l("Pause", [
        ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
        ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }],
    ]),
    da = l("PenLine", [
        ["path", { d: "M12 20h9", key: "t2du7b" }],
        ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }],
    ]),
    Ea = l("PenSquare", [
        ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
        ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }],
    ]),
    pa = l("Pencil", [
        ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }],
        ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
    ]),
    oa = l("PersonStanding", [
        ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
        ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
        ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
        ["path", { d: "M12 10v4", key: "1kjpxc" }],
    ]),
    sa = l("PhoneMissed", [
        ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
        ["line", { x1: "16", x2: "22", y1: "2", y2: "8", key: "13zxdn" }],
        [
            "path",
            {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                key: "foiqr5",
            },
        ],
    ]),
    ga = l("Phone", [
        [
            "path",
            {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                key: "foiqr5",
            },
        ],
    ]),
    ia = l("PinOff", [
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
        ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12", key: "13x2n8" }],
        ["path", { d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89", key: "reo3ki" }],
    ]),
    ua = l("Pin", [
        ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
        [
            "path",
            {
                d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",
                key: "13yl11",
            },
        ],
    ]),
    La = l("PlaySquare", [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
        ["path", { d: "m9 8 6 4-6 4Z", key: "f1r3lt" }],
    ]),
    ya = l("Play", [["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]]),
    va = l("Plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
    ]),
    Fa = l("Quote", [
        [
            "path",
            {
                d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
                key: "4rm80e",
            },
        ],
        [
            "path",
            {
                d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
                key: "10za9r",
            },
        ],
    ]),
    fa = l("Radio", [
        ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
        ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
        ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
        ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
        ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }],
    ]),
    wa = l("RefreshCw", [
        ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
    ]),
    ka = l("Repeat1", [
        ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
        ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
        ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
        ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
        ["path", { d: "M11 10h1v4", key: "70cz1p" }],
    ]),
    Ca = l("Repeat", [
        ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
        ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
        ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
        ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
    ]),
    $a = l("RotateCcw", [
        ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
        ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    ]),
    xa = l("RotateCw", [
        ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ]),
    ba = l("Save", [
        ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
        ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
        ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }],
    ]),
    Ra = l("ScrollText", [
        ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }],
        ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
        ["path", { d: "M15 8h-5", key: "1khuty" }],
        ["path", { d: "M15 12h-5", key: "r7krc0" }],
    ]),
    Sa = l("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
    ]),
    Ia = l("SendHorizontal", [
        ["path", { d: "m3 3 3 9-3 9 19-9Z", key: "1aobqy" }],
        ["path", { d: "M6 12h16", key: "s4cdu5" }],
    ]),
    Na = l("Send", [
        ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
        ["path", { d: "M22 2 11 13", key: "nzbqef" }],
    ]),
    qa = l("Settings2", [
        ["path", { d: "M20 7h-9", key: "3s1dr2" }],
        ["path", { d: "M14 17H5", key: "gfn3mx" }],
        ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
        ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
    ]),
    za = l("Share2", [
        ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
        ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
        ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
        ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
        ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
    ]),
    ja = l("Share", [
        ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
        ["polyline", { points: "16 6 12 2 8 6", key: "m901s6" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "15", key: "1p0rca" }],
    ]),
    Pa = l("ShieldBan", [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
        ["path", { d: "m4 5 14 12", key: "1ta6nf" }],
    ]),
    Ba = l("ShieldCheck", [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]),
    Da = l("Shield", [["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]]),
    Ta = l("Shirt", [
        [
            "path",
            {
                d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
                key: "1wgbhj",
            },
        ],
    ]),
    Ua = l("ShoppingBag", [
        ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
    ]),
    Oa = l("Shuffle", [
        ["path", { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22", key: "1wmou1" }],
        ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
        ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2", key: "10bdb2" }],
        ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8", key: "vgxac0" }],
        ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
    ]),
    Ga = l("Smartphone", [
        ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
        ["path", { d: "M12 18h.01", key: "mhygvu" }],
    ]),
    Qa = l("Smile", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
        ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
        ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
    ]),
    Wa = l("Sofa", [
        ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }],
        [
            "path",
            {
                d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",
                key: "u5qfb7",
            },
        ],
        ["path", { d: "M4 18v2", key: "jwo5n2" }],
        ["path", { d: "M20 18v2", key: "1ar1qi" }],
        ["path", { d: "M12 4v9", key: "oqhhn3" }],
    ]),
    Ka = l("Sparkle", [
        [
            "path",
            {
                d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",
                key: "nraa5p",
            },
        ],
    ]),
    Xa = l("Square", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]),
    Ja = l("StopCircle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["rect", { width: "6", height: "6", x: "9", y: "9", key: "1wrtvo" }],
    ]),
    Ya = l("Swords", [
        ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
        ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
        ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
        ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
        ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }],
        ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
        ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
        ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }],
    ]),
    _a = l("Tags", [
        [
            "path",
            {
                d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",
                key: "gt587u",
            },
        ],
        ["path", { d: "M6 9.01V9", key: "1flxpt" }],
        ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }],
    ]),
    a5 = l("ThumbsDown", [
        ["path", { d: "M17 14V2", key: "8ymqnk" }],
        [
            "path",
            {
                d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
                key: "s6e0r",
            },
        ],
    ]),
    e5 = l("ThumbsUp", [
        ["path", { d: "M7 10v12", key: "1qc93n" }],
        [
            "path",
            {
                d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
                key: "y3tblf",
            },
        ],
    ]),
    t5 = l("Timer", [
        ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
        ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
        ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
    ]),
    l5 = l("Trash2", [
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
    ]),
    n5 = l("TrendingDown", [
        ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
        ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }],
    ]),
    m5 = l("TrendingUp", [
        ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
        ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
    ]),
    r5 = l("Truck", [
        ["path", { d: "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11", key: "hs4xqm" }],
        ["path", { d: "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2", key: "11fp61" }],
        ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
        ["path", { d: "M15 18H9", key: "1lyqi6" }],
        ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
    ]),
    c5 = l("Unlock", [
        ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
        ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }],
    ]),
    A5 = l("Upload", [
        ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
        ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
        ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
    ]),
    h5 = l("UserCircle2", [
        ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
        ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ]),
    Z5 = l("UserMinus", [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
    ]),
    H5 = l("UserPlus", [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
        ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
    ]),
    M5 = l("User", [
        ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
    ]),
    V5 = l("Users", [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
    ]),
    d5 = l("VideoOff", [
        ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8", key: "ubwiq0" }],
        ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z", key: "1l10zd" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
    ]),
    E5 = l("Video", [
        ["path", { d: "m22 8-6 4 6 4V8Z", key: "50v9me" }],
        ["rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2", key: "1rqjg6" }],
    ]),
    p5 = l("Volume1", [
        ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
        ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
    ]),
    o5 = l("Volume2", [
        ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
        ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
        ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }],
    ]),
    s5 = l("VolumeX", [
        ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
        ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
        ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
    ]),
    g5 = l("Wand2", [
        [
            "path",
            {
                d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
                key: "1bcowg",
            },
        ],
        ["path", { d: "m14 7 3 3", key: "1r5n42" }],
        ["path", { d: "M5 6v4", key: "ilb8ba" }],
        ["path", { d: "M19 14v4", key: "blhpug" }],
        ["path", { d: "M10 2v2", key: "7u0qdc" }],
        ["path", { d: "M7 8H3", key: "zfb6yr" }],
        ["path", { d: "M21 16h-4", key: "1cnmox" }],
        ["path", { d: "M11 3H9", key: "1obp7u" }],
    ]),
    i5 = l("Wifi", [
        ["path", { d: "M5 13a10 10 0 0 1 14 0", key: "6v8j51" }],
        ["path", { d: "M8.5 16.5a5 5 0 0 1 7 0", key: "sej527" }],
        ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
        ["line", { x1: "12", x2: "12.01", y1: "20", y2: "20", key: "of4bc4" }],
    ]),
    u5 = l("Wind", [
        ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2", key: "1k4u03" }],
        ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2", key: "b7d0fd" }],
        ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2", key: "1p5cb3" }],
    ]),
    L5 = l("XCircle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
        ["path", { d: "m9 9 6 6", key: "z0biqf" }],
    ]),
    y5 = l("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    s2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M190,115.31,217.21,89.7l.26-.26a36,36,0,0,0-50.91-50.91c-.09.08-.17.17-.26.26L140.69,66,60.1,36.71A12,12,0,0,0,47.52,39.5l-24,24A12,12,0,0,0,25.34,82l59.83,39.88L75,132H56a12,12,0,0,0-8.48,3.51l-24,24a12,12,0,0,0,4,19.62l35.23,14.1,14.06,35.14.09.22a12,12,0,0,0,19.76,3.7l23.81-23.81A12,12,0,0,0,124,200V181l10.13-10.13L174,230.65a12,12,0,0,0,18.47,1.83l24-24a12,12,0,0,0,2.79-12.59Zm-4.11,89.85L146,145.33a12,12,0,0,0-8.8-5.28A11.66,11.66,0,0,0,136,140a12,12,0,0,0-8.49,3.52l-24,24A12,12,0,0,0,100,176v19l-7.62,7.62-9.24-23.1a12,12,0,0,0-6.69-6.69l-23.1-9.24L61,156H80a12,12,0,0,0,8.48-3.51l24-24A12,12,0,0,0,110.66,110L50.84,70.12l8.24-8.25,80.83,29.39a12,12,0,0,0,12.84-3.05l30.89-32.82a12,12,0,0,1,17,17l-32.82,30.89a12,12,0,0,0-3.06,12.84l29.4,80.82Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M209,81l-33,31,32,88-24,24-48-72-24,24v24L88,224,72,184,32,168l24-24H80l24-24L32,72,56,48l88,32,31-33A24,24,0,0,1,209,81Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M185.33,114.21l29.14-27.43.17-.16a32,32,0,0,0-45.26-45.26l-.16.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.89A8,8,0,0,0,136.8,144a7.09,7.09,0,0,0-.79,0,8,8,0,0,0-5.66,2.34l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2l30.94-32.88A16,16,0,0,1,203.4,75.22l-32.87,30.94a8,8,0,0,0-2,8.56l30.26,83.22Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M215.52,197.26a8,8,0,0,1-1.86,8.39l-24,24A8,8,0,0,1,184,232a7.09,7.09,0,0,1-.79,0,8,8,0,0,1-5.87-3.52l-44.07-66.12L112,183.59V208a8,8,0,0,1-2.34,5.65s-14,14.06-15.88,15.88A7.91,7.91,0,0,1,91,231.41a8,8,0,0,1-10.41-4.35l-.06-.15-14.7-36.76L29,175.42a8,8,0,0,1-2.69-13.08l16-16A8,8,0,0,1,48,144H72.4l21.27-21.27L27.56,78.65a8,8,0,0,1-1.22-12.32l24-24a8,8,0,0,1,8.39-1.86l85.94,31.25L176.2,40.19a28,28,0,0,1,39.6,39.6l-31.53,31.53Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M183,113.65l30.1-28.32.13-.13A30,30,0,0,0,170.8,42.77l-.13.13L142.35,73,58.05,42.35a6,6,0,0,0-6.29,1.39l-24,24A6,6,0,0,0,28.67,77l65.92,43.94L77.52,138H56a6,6,0,0,0-4.24,1.76l-24,24a6,6,0,0,0,2,9.82l37.62,15,15,37.56,0,.12a6,6,0,0,0,7.81,3.27,5.94,5.94,0,0,0,2.07-1.41l23.91-23.91A6,6,0,0,0,118,200V178.48l17.07-17.07L179,227.33a6,6,0,0,0,9.23.91l24-24a6,6,0,0,0,1.39-6.29Zm1.94,100.93L141,148.66a6,6,0,0,0-4.4-2.64l-.59,0a6,6,0,0,0-4.24,1.76l-24,24A6,6,0,0,0,106,176v21.52L90.2,213.32,77.57,181.77a6,6,0,0,0-3.34-3.35L42.68,165.8,58.49,150H80a6,6,0,0,0,4.25-1.76l24-24a6,6,0,0,0-.92-9.23L41.42,71.06,57.54,54.93,142,85.63a6,6,0,0,0,6.42-1.53l31-32.9A18,18,0,0,1,204.8,76.66l-32.9,31a6,6,0,0,0-1.53,6.42l30.7,84.41Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M185.33,114.21l29.14-27.42.17-.17a32,32,0,0,0-45.26-45.26c0,.06-.11.11-.17.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.88A8,8,0,0,0,136.8,144c-.27,0-.53,0-.79,0a8,8,0,0,0-5.66,2.35l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2L180.78,52.6A16,16,0,0,1,203.4,75.23l-32.87,30.93a8,8,0,0,0-2,8.56l30.26,83.22Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M180.67,113.1l31.05-29.23.09-.08a28,28,0,0,0-39.6-39.6l-.08.09L142.9,75.33,57.37,44.23a4,4,0,0,0-4.2.93l-24,24a4,4,0,0,0,.61,6.16l68,45.29L78.35,140H56a4,4,0,0,0-2.83,1.18l-24,24a4,4,0,0,0,1.34,6.54l38.42,15.36,15.34,38.37,0,.09a4,4,0,0,0,6.59,1.23l23.93-23.93A4,4,0,0,0,116,200V177.65l19.38-19.38,45.29,67.95a4,4,0,0,0,6.16.61l24-24a4,4,0,0,0,.93-4.2Zm4,104.62-45.29-67.94A4,4,0,0,0,136.4,148l-.39,0a4,4,0,0,0-2.83,1.18l-24,24A4,4,0,0,0,108,176v22.34L89.47,216.88,75.72,182.51a4,4,0,0,0-2.23-2.23L39.12,166.53,57.66,148H80a4,4,0,0,0,2.83-1.17l24-24a4,4,0,0,0-.61-6.16L38.28,71.37,57,52.62l85.61,31.13a4,4,0,0,0,4.28-1l31-32.93A20,20,0,0,1,206.2,78.09l-32.93,31a4,4,0,0,0-1,4.28L203.38,199Z",
                }),
            ),
        ],
    ]),
    g2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236,200a12,12,0,0,1-24,0,84.09,84.09,0,0,0-84-84H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,0,1,17,17L61,92h67A108.12,108.12,0,0,1,236,200Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M80,56v96L32,104Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M128,96H88V56a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,152V112h40a88.1,88.1,0,0,1,88,88,8,8,0,0,0,16,0A104.11,104.11,0,0,0,128,96ZM72,132.69,43.31,104,72,75.31Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,56V96h40A104.11,104.11,0,0,1,232,200Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230,200a6,6,0,0,1-12,0,90.1,90.1,0,0,0-90-90H46.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L46.49,98H128A102.12,102.12,0,0,1,230,200Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,200a4,4,0,0,1-8,0,92.1,92.1,0,0,0-92-92H41.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L41.66,100H128A100.11,100.11,0,0,1,228,200Z",
                }),
            ),
        ],
    ]),
    i2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M238,56v48a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82,82,0,1,0-1.7,117.65,6,6,0,0,1,8.24,8.73A93.46,93.46,0,0,1,128,222h-1.28A94,94,0,1,1,194.37,61.4L226,90.35V56a6,6,0,1,1,12,0Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236,56v48a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h37.7L187.53,68.69l-.13-.12a84,84,0,1,0-1.75,120.51,4,4,0,0,1,5.5,5.82A91.43,91.43,0,0,1,128,220h-1.26A92,92,0,1,1,193,62.84l35,32.05V56a4,4,0,1,1,8,0Z",
                }),
            ),
        ],
    ]),
    u2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,128a100,100,0,0,1-98.66,100H128a99.39,99.39,0,0,1-68.62-27.29,12,12,0,0,1,16.48-17.45,76,76,0,1,0-1.57-109c-.13.13-.25.25-.39.37L54.89,92H72a12,12,0,0,1,0,24H24a12,12,0,0,1-12-12V56a12,12,0,0,1,24,0V76.72L57.48,57.06A100,100,0,0,1,228,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L60.63,81.29l17,17A8,8,0,0,1,72,112H24a8,8,0,0,1-8-8V56A8,8,0,0,1,29.66,50.3L49.31,70,60.25,60A96,96,0,0,1,224,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222,128a94,94,0,0,1-92.74,94H128a93.43,93.43,0,0,1-64.5-25.65,6,6,0,1,1,8.24-8.72A82,82,0,1,0,70,70l-.19.19L39.44,98H72a6,6,0,0,1,0,12H24a6,6,0,0,1-6-6V56a6,6,0,0,1,12,0V90.34L61.63,61.4A94,94,0,0,1,222,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,128a92,92,0,0,1-90.77,92H128a91.47,91.47,0,0,1-63.13-25.1,4,4,0,1,1,5.5-5.82A84,84,0,1,0,68.6,68.57l-.13.12L34.3,100H72a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V56a4,4,0,0,1,8,0V94.89l35-32A92,92,0,0,1,220,128Z",
                }),
            ),
        ],
    ]),
    L2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M200,144l-72,72L56,144Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M207.39,140.94A8,8,0,0,0,200,136H136V40a8,8,0,0,0-16,0v96H56a8,8,0,0,0-5.66,13.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,207.39,140.94ZM128,204.69,75.31,152H180.69Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,5.66,13.66Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z",
                }),
            ),
        ],
    ]),
    y2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M112,56V200L40,128Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z",
                }),
            ),
        ],
    ]),
    v2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M216,128l-72,72V56Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z",
                }),
            ),
        ],
    ]),
    F2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M200,112H56l72-72Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z",
                }),
            ),
        ],
    ]),
    f2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,48V96a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h19l-7.8-7.8a75.55,75.55,0,0,0-53.32-22.26h-.43A75.49,75.49,0,0,0,72.39,75.57,12,12,0,1,1,55.61,58.41a99.38,99.38,0,0,1,69.87-28.47H126A99.42,99.42,0,0,1,196.2,59.23L204,67V48a12,12,0,0,1,24,0ZM183.61,180.43a75.49,75.49,0,0,1-53.09,21.63h-.43A75.55,75.55,0,0,1,76.77,179.8L69,172H88a12,12,0,0,0,0-24H40a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V189l7.8,7.8A99.42,99.42,0,0,0,130,226.06h.56a99.38,99.38,0,0,0,69.87-28.47,12,12,0,0,0-16.78-17.16Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L180.65,72a79.48,79.48,0,0,0-54.72-22.09h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27,96,96,0,0,1,192,60.7l18.36-18.36A8,8,0,0,1,224,48ZM186.41,183.29A80,80,0,0,1,75.35,184l18.31-18.31A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66L64,195.3a95.42,95.42,0,0,0,66,26.76h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,48V96a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h38.34L184.89,70.54A84,84,0,0,0,66.8,69.85a4,4,0,1,1-5.6-5.72,92,92,0,0,1,129.34.76L212,86.34V48a4,4,0,0,1,8,0ZM189.2,186.15a83.44,83.44,0,0,1-58.68,23.91h-.47a83.52,83.52,0,0,1-58.94-24.6L49.66,164H88a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V169.66l21.46,21.45A91.43,91.43,0,0,0,130,218.06h.51a91.45,91.45,0,0,0,64.28-26.19,4,4,0,1,0-5.6-5.72Z",
                }),
            ),
        ],
    ]),
    w2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M120.49,167.51a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L68,179V48a12,12,0,0,1,24,0V179l11.51-11.52A12,12,0,0,1,120.49,167.51Zm96-96-32-32a12,12,0,0,0-17,0l-32,32a12,12,0,0,0,17,17L164,77V208a12,12,0,0,0,24,0V77l11.51,11.52a12,12,0,0,0,17-17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M176,48V208H80V48Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M119.39,172.94a8,8,0,0,1-1.73,8.72l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,48,168H72V48a8,8,0,0,1,16,0V168h24A8,8,0,0,1,119.39,172.94Zm94.27-98.6-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,144,88h24V208a8,8,0,0,0,16,0V88h24a8,8,0,0,0,5.66-13.66Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M116.24,171.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L74,193.51V48a6,6,0,0,1,12,0V193.51l21.76-21.75A6,6,0,0,1,116.24,171.76Zm96-96-32-32a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L170,62.49V208a6,6,0,0,0,12,0V62.49l21.76,21.75a6,6,0,0,0,8.48-8.48Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M114.83,173.17a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L76,198.34V48a4,4,0,0,1,8,0V198.34l25.17-25.17A4,4,0,0,1,114.83,173.17Zm96-96-32-32a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66L172,57.66V208a4,4,0,0,0,8,0V57.66l25.17,25.17a4,4,0,1,0,5.66-5.66Z",
                }),
            ),
        ],
    ]),
    k2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M208,80v96H48V80Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M42.34,85.66a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,88,48V72H208a8,8,0,0,1,0,16H88v24a8,8,0,0,1-13.66,5.66Zm171.32,84.68-32-32A8,8,0,0,0,168,144v24H48a8,8,0,0,0,0,16H168v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,213.66,170.34Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212.24,171.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L193.51,182H48a6,6,0,0,1,0-12H193.51l-21.75-21.76a6,6,0,0,1,8.48-8.48ZM75.76,116.24a6,6,0,0,0,8.48-8.48L62.49,86H208a6,6,0,0,0,0-12H62.49L84.24,52.24a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M210.83,173.17a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66L198.34,180H48a4,4,0,0,1,0-8H198.34l-25.17-25.17a4,4,0,0,1,5.66-5.66ZM77.17,114.83a4,4,0,0,0,5.66-5.66L57.66,84H208a4,4,0,0,0,0-8H57.66L82.83,50.83a4,4,0,0,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66Z",
                }),
            ),
        ],
    ]),
    C2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z",
                }),
            ),
        ],
    ]),
    $2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M172,48.55V36A28,28,0,0,0,144,8H112A28,28,0,0,0,84,36V48.55A60.08,60.08,0,0,0,32,108V220a20,20,0,0,0,20,20H204a20,20,0,0,0,20-20V108A60.08,60.08,0,0,0,172,48.55ZM112,32h32a4,4,0,0,1,4,4V48H108V36A4,4,0,0,1,112,32Zm48,128H96v-8a4,4,0,0,1,4-4h56a4,4,0,0,1,4,4ZM96,184h64v32H96Zm104,32H184V152a28,28,0,0,0-28-28H100a28,28,0,0,0-28,28v64H56V108A36,36,0,0,1,92,72h72a36,36,0,0,1,36,36ZM160,100a12,12,0,0,1-12,12H108a12,12,0,0,1,0-24h40A12,12,0,0,1,160,100Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,96V216a8,8,0,0,1-8,8H176V152a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v72H56a8,8,0,0,1-8-8V96A48,48,0,0,1,96,48h64A48,48,0,0,1,208,96Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM112,24h32a8,8,0,0,1,8,8v8H104V32A8,8,0,0,1,112,24Zm56,136H88v-8a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM88,176h48v8a8,8,0,0,0,16,0v-8h16v40H88Zm112,40H184V152a24,24,0,0,0-24-24H96a24,24,0,0,0-24,24v64H56V96A40,40,0,0,1,96,56h64a40,40,0,0,1,40,40V216ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM104,32a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v8H104Zm8,40h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16Zm64,144H80V176h56v8a8,8,0,0,0,16,0v-8h24Zm0-56H80v-8a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M166,42.34V32a22,22,0,0,0-22-22H112A22,22,0,0,0,90,32V42.34A54.07,54.07,0,0,0,42,96V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V96A54.07,54.07,0,0,0,166,42.34ZM112,22h32a10,10,0,0,1,10,10V42H102V32A10,10,0,0,1,112,22Zm58,140H86V152a10,10,0,0,1,10-10h64a10,10,0,0,1,10,10ZM86,174h52v10a6,6,0,0,0,12,0V174h20v44H86Zm116,42a2,2,0,0,1-2,2H182V152a22,22,0,0,0-22-22H96a22,22,0,0,0-22,22v66H56a2,2,0,0,1-2-2V96A42,42,0,0,1,96,54h64a42,42,0,0,1,42,42ZM150,88a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,88Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM112,24h32a8,8,0,0,1,8,8v8H104V32A8,8,0,0,1,112,24Zm56,136H88v-8a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM88,176h48v8a8,8,0,0,0,16,0v-8h16v40H88Zm112,40H184V152a24,24,0,0,0-24-24H96a24,24,0,0,0-24,24v64H56V96A40,40,0,0,1,96,56h64a40,40,0,0,1,40,40V216ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164,44.17V32a20,20,0,0,0-20-20H112A20,20,0,0,0,92,32V44.17A52.05,52.05,0,0,0,44,96V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V96A52.05,52.05,0,0,0,164,44.17ZM112,20h32a12,12,0,0,1,12,12V44H100V32A12,12,0,0,1,112,20Zm60,144H84V152a12,12,0,0,1,12-12h64a12,12,0,0,1,12,12Zm-88,8h56v12a4,4,0,0,0,8,0V172h24v48H84Zm120,44a4,4,0,0,1-4,4H180V152a20,20,0,0,0-20-20H96a20,20,0,0,0-20,20v68H56a4,4,0,0,1-4-4V96A44.05,44.05,0,0,1,96,52h64a44.05,44.05,0,0,1,44,44ZM148,88a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,88Z",
                }),
            ),
        ],
    ]),
    x2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,20A108.12,108.12,0,0,0,20,128v56a27.86,27.86,0,0,0,15.26,24.93,28,28,0,0,0,29.28-2.34C76.2,198.11,96.68,188,128,188s51.8,10.1,63.46,18.58A28,28,0,0,0,236,184V128A108.12,108.12,0,0,0,128,20Zm84,108v1.87a170,170,0,0,0-33.29-14.3,170.81,170.81,0,0,0-23.45-67A84.14,84.14,0,0,1,212,128Zm-58.46-18.12a174.42,174.42,0,0,0-51.08,0A150,150,0,0,1,128,50.94,150.07,150.07,0,0,1,153.54,109.88Zm-52.8-61.31a170.81,170.81,0,0,0-23.45,67A170,170,0,0,0,44,129.87V128A84.14,84.14,0,0,1,100.74,48.57Zm109.11,139a4,4,0,0,1-4.28-.36C191,176.61,165.77,164,128,164s-63,12.61-77.57,23.18a4,4,0,0,1-4.28.36A3.76,3.76,0,0,1,44,184V158.14a148,148,0,0,1,168,0V184A3.76,3.76,0,0,1,209.85,187.54Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,152v32a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184V152a160,160,0,0,1,192,0Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,24A104.12,104.12,0,0,0,24,128v56a24,24,0,0,0,24,24,24.11,24.11,0,0,0,14.18-4.64C74.33,194.53,95.6,184,128,184s53.67,10.52,65.81,19.35A24,24,0,0,0,232,184V128A104.12,104.12,0,0,0,128,24Zm88,104v8.87a166,166,0,0,0-40.94-18.22A167,167,0,0,0,146.19,41.9,88.15,88.15,0,0,1,216,128ZM128,44.27a152.47,152.47,0,0,1,30.4,70.46,170.85,170.85,0,0,0-60.84,0A153.31,153.31,0,0,1,128,44.27ZM109.81,41.9a167,167,0,0,0-28.87,76.76A166,166,0,0,0,40,136.88V128A88.15,88.15,0,0,1,109.81,41.9ZM211.66,191.11a8,8,0,0,1-8.44-.69C189.16,180.2,164.7,168,128,168S66.84,180.2,52.78,190.42a8,8,0,0,1-8.44.69A7.77,7.77,0,0,1,40,184V156.07a152,152,0,0,1,176,0V184A7.77,7.77,0,0,1,211.66,191.11Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104.12,104.12,0,0,0,24,128v56a24,24,0,0,0,24,24,24.11,24.11,0,0,0,14.18-4.64C74.33,194.53,95.6,184,128,184s53.67,10.52,65.81,19.35A24,24,0,0,0,232,184V128A104.12,104.12,0,0,0,128,24ZM40,128A88.15,88.15,0,0,1,109.81,41.9a167,167,0,0,0-28.87,76.76A166,166,0,0,0,40,136.88Zm176,56a7.77,7.77,0,0,1-4.34,7.1,8,8,0,0,1-8.44-.69C189.16,180.2,164.7,168,128,168S66.84,180.2,52.78,190.42a8,8,0,0,1-8.44.69A7.77,7.77,0,0,1,40,184V156.07a150.62,150.62,0,0,1,49.93-23.28,7.06,7.06,0,0,0,1-.26,154.06,154.06,0,0,1,74.17,0,8.64,8.64,0,0,0,1,.27A150.49,150.49,0,0,1,216,156.07Zm0-47.13a166,166,0,0,0-40.94-18.22A167,167,0,0,0,146.19,41.9,88.15,88.15,0,0,1,216,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,26A102.12,102.12,0,0,0,26,128v56a22,22,0,0,0,35,17.74c12.38-9,34.06-19.74,67-19.74s54.61,10.73,67,19.73A22,22,0,0,0,230,184V128A102.12,102.12,0,0,0,128,26Zm90,102v12.5a164.29,164.29,0,0,0-44.8-20.3A165.07,165.07,0,0,0,141.69,39,90.15,90.15,0,0,1,218,128Zm-57.21-10.78a168.56,168.56,0,0,0-65.58,0c5-38.38,24.16-65.59,32.79-76.14C136.63,51.65,155.8,78.85,160.79,117.23ZM114.31,39A165.07,165.07,0,0,0,82.8,120.21,164.29,164.29,0,0,0,38,140.51V128A90.15,90.15,0,0,1,114.31,39Zm98.26,153.85A9.94,9.94,0,0,1,202,192c-13.82-10-37.88-22-74-22s-60.22,12-74,22a9.92,9.92,0,0,1-10.53.85A9.79,9.79,0,0,1,38,184V155a154,154,0,0,1,180,0v29A9.79,9.79,0,0,1,212.57,192.89Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24h0A104.12,104.12,0,0,0,24,128v56a24,24,0,0,0,24,24,24.11,24.11,0,0,0,14.18-4.64C74.33,194.53,95.6,184,128,184s53.67,10.52,65.81,19.35A24,24,0,0,0,232,184V128A104.12,104.12,0,0,0,128,24Zm88,104v8.87a166,166,0,0,0-40.94-18.22A167,167,0,0,0,146.19,41.9,88.14,88.14,0,0,1,216,128ZM128,44.27a152.47,152.47,0,0,1,30.4,70.46,170.85,170.85,0,0,0-60.84,0A153.31,153.31,0,0,1,128,44.27ZM109.81,41.9a167,167,0,0,0-28.87,76.76A166,166,0,0,0,40,136.88V128A88.14,88.14,0,0,1,109.81,41.9ZM211.66,191.11a8,8,0,0,1-8.44-.69C189.16,180.2,164.7,168,128,168S66.84,180.2,52.78,190.42a8,8,0,0,1-8.44.69A7.77,7.77,0,0,1,40,184V156.07a152,152,0,0,1,176,0V184A7.77,7.77,0,0,1,211.66,191.11Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,28A100.12,100.12,0,0,0,28,128v56a20,20,0,0,0,31.84,16.12C72.46,191,94.53,180,128,180s55.54,10.94,68.16,20.12a20,20,0,0,0,21,1.67A19.87,19.87,0,0,0,228,184V128A100.12,100.12,0,0,0,128,28Zm92,100v16.23a162.31,162.31,0,0,0-48.67-22.47,162.56,162.56,0,0,0-34.15-85.31A92.12,92.12,0,0,1,220,128Zm-56.9-8.26a166.58,166.58,0,0,0-70.2,0C97.64,76.93,120,47.31,128,38,136,47.32,158.36,76.93,163.1,119.75ZM118.82,36.46a162.56,162.56,0,0,0-34.15,85.31A162.31,162.31,0,0,0,36,144.24V128A92.12,92.12,0,0,1,118.82,36.46Zm94.66,158.21a11.88,11.88,0,0,1-12.61-1C187.29,183.78,163.62,172,128,172s-59.29,11.77-72.87,21.65a11.88,11.88,0,0,1-12.61,1A11.75,11.75,0,0,1,36,184V154a156,156,0,0,1,184,0v30A11.75,11.75,0,0,1,213.48,194.67Z",
                }),
            ),
        ],
    ]),
    b2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220.07,176.94C214.41,167.2,206,139.73,206,104a78,78,0,1,0-156,0c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H90.48a38,38,0,0,0,75,0H208a14,14,0,0,0,12.06-21.06ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218Zm81.71-33a1.9,1.9,0,0,1-1.7,1H48a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.87,170,62,139.69,62,104a66,66,0,1,1,132,0c0,35.68,8.14,65.95,15.71,79A2,2,0,0,1,209.71,185Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M218.35,178C212.58,168,204,140.13,204,104a76,76,0,1,0-152,0c0,36.13-8.59,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0H208A12,12,0,0,0,218.35,178ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220Zm83.45-34a3.91,3.91,0,0,1-3.44,2H48a3.91,3.91,0,0,1-3.44-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a68,68,0,1,1,136,0c0,35.31,8,65.17,15.44,78A4,4,0,0,1,211.45,186Z",
                }),
            ),
        ],
    ]),
    R2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68ZM172,224a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,224Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.81-48.06C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.8-24.06Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M166,224a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,224Zm54.11-33a13.83,13.83,0,0,1-12.1,7H48a14,14,0,0,1-12.06-21.06C41.59,167.2,50,139.74,50,104a78,78,0,1,1,156,0c0,35.73,8.42,63.2,14.08,72.94A13.9,13.9,0,0,1,220.11,191Zm-10.41-8C202.13,170,194,139.68,194,104a66,66,0,1,0-132,0c0,35.69-8.14,66-15.71,79a2,2,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H208a1.9,1.9,0,0,0,1.7-1A2,2,0,0,0,209.7,183Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164,224a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,224Zm54.38-34A11.84,11.84,0,0,1,208,196H48A12,12,0,0,1,37.65,178C43.42,168,52,140.13,52,104a76,76,0,1,1,152,0c0,36.13,8.59,64,14.36,73.95A11.92,11.92,0,0,1,218.38,190Zm-6.95-8C204,169.17,196,139.31,196,104a68,68,0,1,0-136,0c0,35.32-8,65.17-15.44,78a4,4,0,0,0,0,4A3.91,3.91,0,0,0,48,188H208a3.91,3.91,0,0,0,3.44-2A4,4,0,0,0,211.43,182Z",
                }),
            ),
        ],
    ]),
    S2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,56V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v87.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V80a32,32,0,0,1,32-32h64A8,8,0,0,1,240,56Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z",
                }),
            ),
        ],
    ]),
    I2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60ZM164,96h32a12,12,0,0,1,0,24H164a12,12,0,0,1,0-24Zm44,52a12,12,0,0,1-12,12H164a12,12,0,0,1,0-24h32A12,12,0,0,1,208,148Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,56V200H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,48H168a32,32,0,0,0-32,32v87.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V80A32,32,0,0,0,88,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,23.94,7.9,7.9,0,0,0,5.12,7.55A8,8,0,0,0,136,232a24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM208,168H168.27a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h39.73a8.17,8.17,0,0,1,8.25,7.47A8,8,0,0,1,208,168Zm0-32H168.27a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h39.73a8.17,8.17,0,0,1,8.25,7.47A8,8,0,0,1,208,136Zm0-32H168.27A8.17,8.17,0,0,1,160,96.53,8,8,0,0,1,168,88h39.73A8.17,8.17,0,0,1,216,95.47,8,8,0,0,1,208,104Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66ZM160,90h40a6,6,0,0,1,0,12H160a6,6,0,0,1,0-12Zm46,38a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,128Zm0,32a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,160Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.94,35.94,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68ZM160,92h40a4,4,0,0,1,0,8H160a4,4,0,0,1,0-8Zm44,36a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h40A4,4,0,0,1,204,128Zm0,32a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h40A4,4,0,0,1,204,160Z",
                }),
            ),
        ],
    ]),
    N2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M184,28H72A20,20,0,0,0,52,48V224a12,12,0,0,0,18.36,10.18l57.63-36,57.65,36A12,12,0,0,0,204,224V48A20,20,0,0,0,184,28Zm-4,174.35-45.65-28.53a12,12,0,0,0-12.72,0L76,202.35V52H180Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M192,48V224l-64-40L64,224V48a8,8,0,0,1,8-8H184A8,8,0,0,1,192,48Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34Zm2,179.17-54.83-34.26a6,6,0,0,0-6.36,0L70,213.17V48a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M184,36H72A12,12,0,0,0,60,48V224a4,4,0,0,0,6.12,3.39L128,188.72l61.89,38.67A4,4,0,0,0,192,228a4.06,4.06,0,0,0,1.94-.5A4,4,0,0,0,196,224V48A12,12,0,0,0,184,36Zm4,180.78-57.89-36.17a4,4,0,0,0-4.24,0L68,216.78V48a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4Z",
                }),
            ),
        ],
    ]),
    q2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M192,104H164V56a20,20,0,0,0-20-20H32A12,12,0,0,0,20.8,52.3c10.88,28.39,8.3,78.36-.33,108.38A12,12,0,0,0,20,164v36a20,20,0,0,0,20,20H66.11a20.16,20.16,0,0,0,9-2.11L86.83,212h14.34l11.77,5.89a20.16,20.16,0,0,0,9,2.11h28.22a20.16,20.16,0,0,0,8.95-2.11L170.83,212h14.34l11.77,5.89a20.16,20.16,0,0,0,8.95,2.11H232a20,20,0,0,0,20-20V164A60.07,60.07,0,0,0,192,104ZM48,60h92v44H116a12,12,0,0,0,0,24h76a36.07,36.07,0,0,1,33.94,24H47.21C52.75,124.08,54.23,88.41,48,60ZM228,196H206.83l-11.77-5.89a20.16,20.16,0,0,0-8.95-2.11H169.89a20.16,20.16,0,0,0-8.95,2.11L149.17,196H122.83l-11.77-5.89a20.16,20.16,0,0,0-9-2.11H85.89a20.16,20.16,0,0,0-9,2.11L65.17,196H44V176H228Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M32,168c9.22-32.06,12-88.65,0-120H144a8,8,0,0,1,8,8v64h40a48,48,0,0,1,48,48Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M192,112H160V56a16,16,0,0,0-16-16H32a8,8,0,0,0-7.47,10.86c11.06,28.84,8.76,83.71-.22,114.93A8.25,8.25,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56.06,56.06,0,0,0,192,112ZM144,56V80H112a8,8,0,0,0,0,16h32v16H112a8,8,0,0,0,0,16h80a40.07,40.07,0,0,1,39.2,32H42.25c6.74-30.84,8.16-74.17.61-104Zm61.89,144-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232v24Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M192,112H112.27a8.17,8.17,0,0,1-8.25-7.47A8,8,0,0,1,112,96h44a4,4,0,0,0,4-4V84a4,4,0,0,0-4-4H112.27A8.17,8.17,0,0,1,104,72.53,8,8,0,0,1,112,64h44a4,4,0,0,0,4-4V56a16,16,0,0,0-16-16H32.22a8.23,8.23,0,0,0-5.08,1.64,8,8,0,0,0-2.61,9.22c11.06,28.84,8.76,83.71-.22,114.93A8,8,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56,56,0,0,0,192,112Zm40,88H205.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M192,114H158V56a14,14,0,0,0-14-14H32a6,6,0,0,0-5.6,8.15c9,23.44,11.13,76.92-.17,116.19A6.21,6.21,0,0,0,26,168v32a14,14,0,0,0,14,14H66.11a14,14,0,0,0,6.26-1.48L85,206.21a2,2,0,0,1,.9-.21h16.22a2,2,0,0,1,.9.21l12.62,6.31a14,14,0,0,0,6.26,1.48h28.22a14,14,0,0,0,6.26-1.48L169,206.21a2,2,0,0,1,.9-.21h16.22a2,2,0,0,1,.9.21l12.62,6.31a14,14,0,0,0,6.26,1.48H232a14,14,0,0,0,14-14V168A54.06,54.06,0,0,0,192,114ZM40.27,54H144a2,2,0,0,1,2,2V82H112a6,6,0,0,0,0,12h34v20H112a6,6,0,0,0,0,12h80a42.05,42.05,0,0,1,41.56,36H39.75C47.11,130.44,48.71,84.31,40.27,54ZM234,200a2,2,0,0,1-2,2H205.89a2,2,0,0,1-.9-.21l-12.62-6.31a14,14,0,0,0-6.26-1.48H169.89a14,14,0,0,0-6.26,1.48L151,201.79a2,2,0,0,1-.9.21H121.89a2,2,0,0,1-.9-.21l-12.62-6.31a14,14,0,0,0-6.26-1.48H85.89a14,14,0,0,0-6.26,1.48L67,201.79a2,2,0,0,1-.9.21H40a2,2,0,0,1-2-2V174H234Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M192,112H160V56a16,16,0,0,0-16-16H32a8,8,0,0,0-7.47,10.86c11.06,28.84,8.76,83.71-.22,114.93A8.25,8.25,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56.06,56.06,0,0,0,192,112ZM42.86,56H144V80H112a8,8,0,0,0,0,16h32v16H112a8,8,0,0,0,0,16h80a40.07,40.07,0,0,1,39.2,32H42.25C49,129.16,50.41,85.83,42.86,56ZM232,200H205.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M192,116H156V56a12,12,0,0,0-12-12H32a4,4,0,0,0-3.73,5.43c9.29,24.23,11.46,77.22-.11,117.46A3.82,3.82,0,0,0,28,168v32a12,12,0,0,0,12,12H66.11a12.08,12.08,0,0,0,5.37-1.27l12.62-6.31a4.09,4.09,0,0,1,1.79-.42h16.22a4.09,4.09,0,0,1,1.79.42l12.62,6.31a12.08,12.08,0,0,0,5.37,1.27h28.22a12.08,12.08,0,0,0,5.37-1.27l12.62-6.31a4.09,4.09,0,0,1,1.79-.42h16.22a4.09,4.09,0,0,1,1.79.42l12.62,6.31a12.08,12.08,0,0,0,5.37,1.27H232a12,12,0,0,0,12-12V168A52.06,52.06,0,0,0,192,116ZM37.6,52H144a4,4,0,0,1,4,4V84H112a4,4,0,0,0,0,8h36v24H112a4,4,0,0,0,0,8h80a44.06,44.06,0,0,1,43.81,40H37.2C45.24,131.81,47,82.65,37.6,52ZM236,200a4,4,0,0,1-4,4H205.89a4.09,4.09,0,0,1-1.79-.42l-12.62-6.31a12.08,12.08,0,0,0-5.37-1.27H169.89a12.08,12.08,0,0,0-5.37,1.27l-12.62,6.31a4.09,4.09,0,0,1-1.79.42H121.89a4.09,4.09,0,0,1-1.79-.42l-12.62-6.31a12.08,12.08,0,0,0-5.37-1.27H85.89a12.08,12.08,0,0,0-5.37,1.27L67.9,203.58a4.09,4.09,0,0,1-1.79.42H40a4,4,0,0,1-4-4V172H236Z",
                }),
            ),
        ],
    ]),
    z2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,100h-4.78a92,92,0,0,0-182.44,0H32a12,12,0,0,0-12,12,108.38,108.38,0,0,0,56,94.68V208a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20v-1.32A108.38,108.38,0,0,0,236,112,12,12,0,0,0,224,100ZM170.29,60.06A92,92,0,0,0,127.19,100H106a68.27,68.27,0,0,1,62-40C168.76,60,169.52,60,170.29,60.06Zm17.22,19.08A67.66,67.66,0,0,1,194.92,100H156.13A67.91,67.91,0,0,1,187.51,79.14ZM128,44c.83,0,1.65,0,2.48.06A92.3,92.3,0,0,0,80.37,100H61.08A68.1,68.1,0,0,1,128,44Zm35,144.39a12,12,0,0,0-7,10.91V204H100v-4.7a12,12,0,0,0-7-10.91A84.32,84.32,0,0,1,44.87,124H211.13A84.32,84.32,0,0,1,163,188.39Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,112a96,96,0,0,1-56,87.3V208a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-8.7A96,96,0,0,1,32,112Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23Zm15.91,18.2A71.45,71.45,0,0,1,199.54,104H148.12A71.84,71.84,0,0,1,189.39,74.43ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM148.12,104a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,106H213.77a86,86,0,0,0-171.54,0H32a6,6,0,0,0-6,6,102.35,102.35,0,0,0,56,91.06V208a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14v-4.94A102.35,102.35,0,0,0,230,112,6,6,0,0,0,224,106ZM174.24,54.29a74.15,74.15,0,0,1,8.15,7.6A85.89,85.89,0,0,0,130.84,106H97.34A74.24,74.24,0,0,1,168,54C170.08,54,172.17,54.11,174.24,54.29ZM190.3,72.14A73.49,73.49,0,0,1,201.74,106H144.48A73.89,73.89,0,0,1,190.3,72.14ZM128,38a73.68,73.68,0,0,1,26.8,5,86.32,86.32,0,0,0-69.94,63H54.26A74.09,74.09,0,0,1,128,38Zm37.5,155.84a6,6,0,0,0-3.5,5.46V208a2,2,0,0,1-2,2H96a2,2,0,0,1-2-2v-8.7a6,6,0,0,0-3.5-5.46A90.35,90.35,0,0,1,38.2,118H217.8A90.35,90.35,0,0,1,165.5,193.84Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,108H211.9a84,84,0,0,0-167.8,0H32a4,4,0,0,0-4,4,100.32,100.32,0,0,0,56,89.82V208a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12v-6.18A100.32,100.32,0,0,0,228,112,4,4,0,0,0,224,108Zm-20.11,0H141.05a75.92,75.92,0,0,1,50.16-38.14A75.45,75.45,0,0,1,203.89,108ZM186,62.93A83.92,83.92,0,0,0,132.08,108H94.68A76.22,76.22,0,0,1,168,52c2.33,0,4.68.13,7,.34A76.81,76.81,0,0,1,186,62.93ZM128,36a75.48,75.48,0,0,1,34.3,8.21A84.26,84.26,0,0,0,86.41,108H52.11A76.09,76.09,0,0,1,128,36Zm38.33,159.66A4,4,0,0,0,164,199.3V208a4,4,0,0,1-4,4H96a4,4,0,0,1-4-4v-8.7a4,4,0,0,0-2.33-3.64A92.33,92.33,0,0,1,36.09,116H219.91A92.33,92.33,0,0,1,166.33,195.66Z",
                }),
            ),
        ],
    ]),
    j2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M252,124a60.14,60.14,0,0,0-32-53.08,52,52,0,0,0-92-32.11A52,52,0,0,0,36,70.92a60,60,0,0,0,0,106.14,52,52,0,0,0,92,32.13,52,52,0,0,0,92-32.13A60.05,60.05,0,0,0,252,124ZM88,204a28,28,0,0,1-26.85-20.07c1,0,1.89.07,2.85.07h8a12,12,0,0,0,0-24H64A36,36,0,0,1,52,90.05a12,12,0,0,0,8-11.32V72a28,28,0,0,1,56,0v60.18a51.61,51.61,0,0,0-7.2-3.85,12,12,0,1,0-9.6,22A28,28,0,0,1,88,204Zm104-44h-8a12,12,0,0,0,0,24h8c1,0,1.9,0,2.85-.07a28,28,0,1,1-38-33.61,12,12,0,1,0-9.6-22,51.61,51.61,0,0,0-7.2,3.85V72a28,28,0,0,1,56,0v6.73a12,12,0,0,0,8,11.32,36,36,0,0,1-12,70Zm16-44a12,12,0,0,1-12,12,40,40,0,0,1-40-40V84a12,12,0,0,1,24,0v4a16,16,0,0,0,16,16A12,12,0,0,1,208,116ZM100,88a40,40,0,0,1-40,40,12,12,0,0,1,0-24A16,16,0,0,0,76,88V84a12,12,0,0,1,24,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,124a48,48,0,0,1-32,45.27h0V176a40,40,0,0,1-80,0,40,40,0,0,1-80,0v-6.73h0a48,48,0,0,1,0-90.54V72a40,40,0,0,1,80,0,40,40,0,0,1,80,0v6.73A48,48,0,0,1,240,124Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212,76V72a44,44,0,0,0-74.86-31.31,3.93,3.93,0,0,0-1.14,2.8v88.72a4,4,0,0,0,6.2,3.33A47.67,47.67,0,0,1,167.68,128a8.18,8.18,0,0,1,8.31,7.58,8,8,0,0,1-8,8.42,32,32,0,0,0-32,32v33.88a4,4,0,0,0,1.49,3.12,47.92,47.92,0,0,0,74.21-17.16,4,4,0,0,0-4.49-5.56A68.06,68.06,0,0,1,192,192h-7.73a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8a51.6,51.6,0,0,0,24-5.88v0A52,52,0,0,0,212,76Zm-12,36h-4a36,36,0,0,1-36-36V72a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4a8,8,0,0,1,0,16ZM88,28A44.05,44.05,0,0,0,44,72v4a52,52,0,0,0-4,94.12h0A51.6,51.6,0,0,0,64,176h7.73A8.18,8.18,0,0,1,80,183.47,8,8,0,0,1,72,192H64a67.48,67.48,0,0,1-15.21-1.73,4,4,0,0,0-4.5,5.55A47.93,47.93,0,0,0,118.51,213a4,4,0,0,0,1.49-3.12V176a32,32,0,0,0-32-32,8,8,0,0,1-8-8.42A8.18,8.18,0,0,1,88.32,128a47.67,47.67,0,0,1,25.48,7.54,4,4,0,0,0,6.2-3.33V43.49a4,4,0,0,0-1.14-2.81A43.85,43.85,0,0,0,88,28Zm8,48a36,36,0,0,1-36,36H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,76V72a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M246,124a54.13,54.13,0,0,0-32-49.33V72a46,46,0,0,0-86-22.67A46,46,0,0,0,42,72v2.67a54,54,0,0,0,0,98.63V176a46,46,0,0,0,86,22.67A46,46,0,0,0,214,176v-2.7A54.07,54.07,0,0,0,246,124ZM88,210a34,34,0,0,1-34-32.94A53.67,53.67,0,0,0,64,178h8a6,6,0,0,0,0-12H64A42,42,0,0,1,50,84.39a6,6,0,0,0,4-5.66V72a34,34,0,0,1,68,0v73.05A45.89,45.89,0,0,0,88,130a6,6,0,0,0,0,12,34,34,0,0,1,0,68Zm104-44h-8a6,6,0,0,0,0,12h8a53.67,53.67,0,0,0,10-.94A34,34,0,1,1,168,142a6,6,0,0,0,0-12,45.89,45.89,0,0,0-34,15.05V72a34,34,0,0,1,68,0v6.73a6,6,0,0,0,4,5.66A42,42,0,0,1,192,166Zm14-54a6,6,0,0,1-6,6h-4a34,34,0,0,1-34-34V80a6,6,0,0,1,12,0v4a22,22,0,0,0,22,22h4A6,6,0,0,1,206,112ZM60,118H56a6,6,0,0,1,0-12h4A22,22,0,0,0,82,84V80a6,6,0,0,1,12,0v4A34,34,0,0,1,60,118Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M244,124a52.1,52.1,0,0,0-32-48V72a44,44,0,0,0-84-18.3A44,44,0,0,0,44,72v4a52,52,0,0,0,0,96v4a44,44,0,0,0,84,18.3A44,44,0,0,0,212,176v-4A52.07,52.07,0,0,0,244,124ZM88,212a36,36,0,0,1-36-36v-1.41A52.13,52.13,0,0,0,64,176h8a4,4,0,0,0,0-8H64A44,44,0,0,1,49.33,82.5,4,4,0,0,0,52,78.73V72a36,36,0,0,1,72,0v78.75A44,44,0,0,0,88,132a4,4,0,0,0,0,8,36,36,0,0,1,0,72Zm104-44h-8a4,4,0,0,0,0,8h8a52.13,52.13,0,0,0,12-1.41V176a36,36,0,1,1-36-36,4,4,0,0,0,0-8,44,44,0,0,0-36,18.75V72a36,36,0,0,1,72,0v6.73a4,4,0,0,0,2.67,3.77A44,44,0,0,1,192,168Zm12-56a4,4,0,0,1-4,4h-4a32,32,0,0,1-32-32V80a4,4,0,0,1,8,0v4a24,24,0,0,0,24,24h4A4,4,0,0,1,204,112ZM92,84a32,32,0,0,1-32,32H56a4,4,0,0,1,0-8h4A24,24,0,0,0,84,84V80a4,4,0,0,1,8,0Z",
                }),
            ),
        ],
    ]),
    P2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M100,100a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,100ZM236,68V196a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V68A20,20,0,0,1,40,48H76V40a28,28,0,0,1,28-28h48a28,28,0,0,1,28,28v8h36A20,20,0,0,1,236,68ZM100,48h56V40a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4ZM44,72v35.23A180.06,180.06,0,0,0,128,128a180,180,0,0,0,84-20.78V72ZM212,192V133.94A204.27,204.27,0,0,1,128,152a204.21,204.21,0,0,1-84-18.06V192Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,118.31V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V118.31h0A191.14,191.14,0,0,0,128,144,191.08,191.08,0,0,0,224,118.31Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112ZM232,72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8ZM40,72v41.62A184.07,184.07,0,0,0,128,136a184,184,0,0,0,88-22.39V72ZM216,200V131.63A200.25,200.25,0,0,1,128,152a200.19,200.19,0,0,1-88-20.36V200H216Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M106,112a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,112ZM230,72V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V72A14,14,0,0,1,40,58H82V48a22,22,0,0,1,22-22h48a22,22,0,0,1,22,22V58h42A14,14,0,0,1,230,72ZM94,58h68V48a10,10,0,0,0-10-10H104A10,10,0,0,0,94,48ZM38,72v42.79A186,186,0,0,0,128,138a185.91,185.91,0,0,0,90-23.22V72a2,2,0,0,0-2-2H40A2,2,0,0,0,38,72ZM218,200V128.37A198.12,198.12,0,0,1,128,150a198.05,198.05,0,0,1-90-21.62V200a2,2,0,0,0,2,2H216A2,2,0,0,0,218,200Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M108,112a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H112A4,4,0,0,1,108,112ZM228,72V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V72A12,12,0,0,1,40,60H84V48a20,20,0,0,1,20-20h48a20,20,0,0,1,20,20V60h44A12,12,0,0,1,228,72ZM92,60h72V48a12,12,0,0,0-12-12H104A12,12,0,0,0,92,48ZM36,72v44a188,188,0,0,0,92,24,188,188,0,0,0,92-24V72a4,4,0,0,0-4-4H40A4,4,0,0,0,36,72ZM220,200V125.1A196.06,196.06,0,0,1,128,148a196,196,0,0,1-92-22.9V200a4,4,0,0,0,4,4H216A4,4,0,0,0,220,200Z",
                }),
            ),
        ],
    ]),
    B2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236,112a28,28,0,0,0-28-28H140V81.94A36.07,36.07,0,0,0,164,48c0-31.06-29.38-46.11-30.63-46.73a12,12,0,0,0-10.74,0C121.38,1.89,92,16.94,92,48a36.07,36.07,0,0,0,24,33.94V84H48a28,28,0,0,0-28,28v23.33a44.7,44.7,0,0,0,8,25.49V200a28,28,0,0,0,28,28H200a28,28,0,0,0,28-28V160.82a44.7,44.7,0,0,0,8-25.49ZM124,29.93a42.49,42.49,0,0,1,4-3.57,41.26,41.26,0,0,1,4,3.57c5.33,5.52,8,11.6,8,18.07a12,12,0,0,1-24,0C116,41.53,118.71,35.45,124,29.93ZM44,112a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4v23.33c0,11.1-8.72,20.37-19.43,20.66A20,20,0,0,1,172,136a12,12,0,0,0-24,0,20,20,0,0,1-40,0,12,12,0,0,0-24,0,20,20,0,0,1-20.57,20C52.72,155.7,44,146.43,44,135.33Zm156,92H56a4,4,0,0,1-4-4V178.29A42.65,42.65,0,0,0,62.77,180a43.68,43.68,0,0,0,31.91-12.44c.46-.44.9-.9,1.33-1.35a44,44,0,0,0,64,0c.43.45.87.91,1.33,1.35A43.66,43.66,0,0,0,192,180l1.25,0A42.65,42.65,0,0,0,204,178.29V200A4,4,0,0,1,200,204Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M104,48c0-24,24-40,24-40s24,16,24,40a24,24,0,0,1-48,0ZM208,96H48a16,16,0,0,0-16,16v23.33c0,17.44,13.67,32.18,31.1,32.66A32,32,0,0,0,96,136a32,32,0,0,0,64,0,32,32,0,0,0,32.9,32c17.43-.48,31.1-15.22,31.1-32.66V112A16,16,0,0,0,208,96Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,88H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24V112A24,24,0,0,0,208,88ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0Zm104,87.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33V112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230,112a22,22,0,0,0-22-22H134V77.4A30.05,30.05,0,0,0,158,48c0-26.9-25.58-44.27-26.67-45a6,6,0,0,0-6.66,0C123.58,3.73,98,21.1,98,48a30.05,30.05,0,0,0,24,29.4V90H48a22,22,0,0,0-22,22v23.33a38.81,38.81,0,0,0,8,23.57V200a22,22,0,0,0,22,22H200a22,22,0,0,0,22-22V158.9a38.81,38.81,0,0,0,8-23.57ZM110,48c0-15.4,12-27.41,18-32.44,6,5,18,17,18,32.44a18,18,0,0,1-36,0ZM38,112a10,10,0,0,1,10-10H208a10,10,0,0,1,10,10v23.33c0,14.32-11.33,26.28-25.26,26.66A26,26,0,0,1,166,136a6,6,0,0,0-12,0,26,26,0,0,1-52,0,6,6,0,0,0-12,0,26,26,0,0,1-26.74,26C49.33,161.61,38,149.65,38,135.33Zm162,98H56a10,10,0,0,1-10-10V169.31A36.8,36.8,0,0,0,62.94,174,37.82,37.82,0,0,0,90.5,163.24,38.83,38.83,0,0,0,96,156.5a38,38,0,0,0,64,0,38.83,38.83,0,0,0,5.52,6.74A37.73,37.73,0,0,0,192,174h1.07A36.8,36.8,0,0,0,210,169.31V200A10,10,0,0,1,200,210Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,112a20,20,0,0,0-20-20H132V75.71A28,28,0,0,0,156,48c0-25.84-24.73-42.63-25.78-43.33a4,4,0,0,0-4.44,0C124.73,5.37,100,22.16,100,48a28,28,0,0,0,24,27.71V92H48a20,20,0,0,0-20,20v23.33a36.85,36.85,0,0,0,8,22.91V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V158.24a36.85,36.85,0,0,0,8-22.91ZM108,48c0-17.39,14.37-30.53,20-35,5.63,4.48,20,17.62,20,35a20,20,0,0,1-40,0Zm92,164H56a12,12,0,0,1-12-12V165.73A35.16,35.16,0,0,0,63,172a36.13,36.13,0,0,0,33-19.48,36,36,0,0,0,64,0A36.13,36.13,0,0,0,192,172h1a35.16,35.16,0,0,0,19-6.26V200A12,12,0,0,1,200,212Zm20-76.67c0,15.39-12.21,28.25-27.21,28.66A28,28,0,0,1,164,136a4,4,0,0,0-8,0,28,28,0,0,1-56,0,4,4,0,0,0-8,0,28,28,0,0,1-28.79,28c-15-.41-27.21-13.27-27.21-28.66V112a12,12,0,0,1,12-12H208a12,12,0,0,1,12,12Z",
                }),
            ),
        ],
    ]),
    D2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z",
                }),
            ),
        ],
    ]),
    T2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm120.49-84.49a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17,0l-24-24a12,12,0,0,1,17-17L116,159l39.51-39.52A12,12,0,0,1,172.49,119.51Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM169.66,133.66l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35a8,8,0,0,1,11.32,11.32ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-39.76-86.24a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L116,167.51l43.76-43.75A6,6,0,0,1,168.24,123.76Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Zm-41.17-86.83a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L116,170.34l45.17-45.17A4,4,0,0,1,166.83,125.17Z",
                }),
            ),
        ],
    ]),
    U2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4ZM128,84a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,84Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,156Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,60H178.13L163.32,37.78A4,4,0,0,0,160,36H96a4,4,0,0,0-3.32,1.78L77.85,60H48A20,20,0,0,0,28,80V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V80A20,20,0,0,0,208,60Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V80A12,12,0,0,1,48,68H80a4,4,0,0,0,3.33-1.78L98.13,44h59.72l14.82,22.22A4,4,0,0,0,176,68h32a12,12,0,0,1,12,12ZM128,92a40,40,0,1,0,40,40A40,40,0,0,0,128,92Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,128,164Z",
                }),
            ),
        ],
    ]),
    O2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M208,96l-80,80L48,96Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z",
                }),
            ),
        ],
    ]),
    G2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M160,48V208L80,128Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z",
                }),
            ),
        ],
    ]),
    Q2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M176,128,96,208V48Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z",
                }),
            ),
        ],
    ]),
    W2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,196h-4V40a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12V76H96A12,12,0,0,0,84,88v36H48a12,12,0,0,0-12,12v60H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM164,52h32V196H164Zm-56,48h32v96H108ZM60,148H84v48H60Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M208,40V208H152V40Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,202H214V40a6,6,0,0,0-6-6H152a6,6,0,0,0-6,6V82H96a6,6,0,0,0-6,6v42H48a6,6,0,0,0-6,6v66H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM158,46h44V202H158ZM102,94h44V202H102ZM54,142H90v60H54Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,204H212V40a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V84H96a4,4,0,0,0-4,4v44H48a4,4,0,0,0-4,4v68H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM156,44h48V204H156ZM100,92h48V204H100ZM52,140H92v64H52Z",
                }),
            ),
        ],
    ]),
    K2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z",
                }),
            ),
        ],
    ]),
    X2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M172,108a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,108Zm-12,28H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm76-8A108,108,0,0,1,78.77,224.15L46.34,235A20,20,0,0,1,21,209.66l10.81-32.43A108,108,0,1,1,236,128Zm-24,0A84,84,0,1,0,55.27,170.06a12,12,0,0,1,1,9.81l-9.93,29.79,29.79-9.93a12.1,12.1,0,0,1,3.8-.62,12,12,0,0,1,6,1.62A84,84,0,0,0,212,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-4-1.08,7.85,7.85,0,0,0-2.53.42L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Zm40-104a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,144Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M166,112a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,112Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm70-10A102,102,0,0,1,79.31,217.65L44.44,229.27a14,14,0,0,1-17.71-17.71l11.62-34.87A102,102,0,1,1,230,128Zm-12,0A90,90,0,1,0,50.08,173.06a6,6,0,0,1,.5,4.91L38.12,215.35a2,2,0,0,0,2.53,2.53L78,205.42a6.2,6.2,0,0,1,1.9-.31,6.09,6.09,0,0,1,3,.81A90,90,0,0,0,218,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm72-8A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164,112a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,112Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm68-12A100,100,0,0,1,79.5,215.47l-35.69,11.9a12,12,0,0,1-15.18-15.18l11.9-35.69A100,100,0,1,1,228,128Zm-8,0A92,92,0,1,0,48.35,174.07a4,4,0,0,1,.33,3.27L36.22,214.72a4,4,0,0,0,5.06,5.06l37.38-12.46a3.93,3.93,0,0,1,1.27-.21,4.05,4.05,0,0,1,2,.54A92,92,0,0,0,220,128Z",
                }),
            ),
        ],
    ]),
    J2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236.34,187.09A84,84,0,0,0,172.29,68.9,84,84,0,0,0,19.66,139.09l-6.84,23.26a20,20,0,0,0,24.83,24.83l23.26-6.84a83.94,83.94,0,0,0,22.76,6.74,84.06,84.06,0,0,0,111.42,41.26l23.26,6.84a20,20,0,0,0,24.83-24.83ZM62,155.5a11.88,11.88,0,0,0-3.39.49l-20.72,6.09L44,141.35a12,12,0,0,0-.93-9A60,60,0,1,1,67.7,156.92,12,12,0,0,0,62,155.5Zm150.89,24.8a12,12,0,0,0-.93,9l6.09,20.73L197.36,204a12,12,0,0,0-9.06.93A60,60,0,0,1,111,186.63a83.93,83.93,0,0,0,68.55-91.37,60,60,0,0,1,33.38,85Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231.66,213.73a8,8,0,0,1-9.93,9.93L194,215.5A72.05,72.05,0,0,1,92.06,175.89h0c1.31.07,2.62.11,3.94.11a72,72,0,0,0,67.93-95.88h0A72,72,0,0,1,223.5,186Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86Zm-16.25,1.47L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M229.93,186.58A78,78,0,0,0,168.16,74.42,78,78,0,1,0,26.07,138.58L18.58,164A14,14,0,0,0,36,181.42l25.46-7.49a78,78,0,0,0,26.39,7.63,78,78,0,0,0,106.77,40.37L220,229.42A14,14,0,0,0,237.42,212ZM62,161.5a6.05,6.05,0,0,0-1.69.24l-27.77,8.17a2,2,0,0,1-2.48-2.48l8.17-27.77a6.05,6.05,0,0,0-.47-4.53,66,66,0,1,1,27.08,27.08A6,6,0,0,0,62,161.5Zm155.71,26.16,8.17,27.77a2,2,0,0,1-2.48,2.48l-27.77-8.17a6.06,6.06,0,0,0-4.53.47,66,66,0,0,1-90-28.4,77.92,77.92,0,0,0,71-94.68,66,66,0,0,1,46.07,96A6.05,6.05,0,0,0,217.74,187.66Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.79,186.39a76,76,0,0,0-61-110.07A76,76,0,1,0,28.21,138.39L20.5,164.6a12,12,0,0,0,14.9,14.9l26.21-7.71a75.93,75.93,0,0,0,27.6,7.9,76,76,0,0,0,105.18,40.1l26.21,7.71a12,12,0,0,0,14.9-14.9ZM60.9,163.66l-27.76,8.17a4,4,0,0,1-5-5l8.17-27.76a4.07,4.07,0,0,0-.31-3A68,68,0,1,1,63.92,164,4.06,4.06,0,0,0,60.9,163.66Zm165.92,55.16a4,4,0,0,1-4,1l-27.76-8.17a4.07,4.07,0,0,0-3,.31A68,68,0,0,1,98,180a76,76,0,0,0,71.5-95.28A68,68,0,0,1,220,184.08a4.07,4.07,0,0,0-.31,3l8.17,27.76A4,4,0,0,1,226.82,218.82Z",
                }),
            ),
        ],
    ]),
    Y2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z",
                }),
            ),
        ],
    ]),
    _2 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z",
                }),
            ),
        ],
    ]),
    a8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M172,164a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,164Zm-12-52H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm60-64V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V48A20,20,0,0,1,56,28H90.53a51.88,51.88,0,0,1,74.94,0H200A20,20,0,0,1,220,48ZM100.29,60h55.42a28,28,0,0,0-55.42,0ZM196,52H178.59A52.13,52.13,0,0,1,180,64v8a12,12,0,0,1-12,12H88A12,12,0,0,1,76,72V64a52.13,52.13,0,0,1,1.41-12H60V212H196Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M166,152a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,152Zm-6-38H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm54-66V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V48A14,14,0,0,1,56,34H93.17a45.91,45.91,0,0,1,69.66,0H200A14,14,0,0,1,214,48ZM94,64v2h68V64a34,34,0,0,0-68,0ZM202,48a2,2,0,0,0-2-2H170.33A45.77,45.77,0,0,1,174,64v8a6,6,0,0,1-6,6H88a6,6,0,0,1-6-6V64a45.77,45.77,0,0,1,3.67-18H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164,152a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,152Zm-4-36H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm52-68V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V48A12,12,0,0,1,56,36H94.08a44,44,0,0,1,67.84,0H200A12,12,0,0,1,212,48ZM92,64v4h72V64a36,36,0,0,0-72,0ZM204,48a4,4,0,0,0-4-4H167.17A43.71,43.71,0,0,1,172,64v8a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V64a43.71,43.71,0,0,1,4.83-20H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4Z",
                }),
            ),
        ],
    ]),
    e8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z",
                }),
            ),
        ],
    ]),
    t8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M240,128l-48,40H64L16,128,64,88H192Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z",
                }),
            ),
        ],
    ]),
    l8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212,76H32A12,12,0,0,0,20,88v48a100.24,100.24,0,0,0,26.73,68H32a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24H193.27a100.75,100.75,0,0,0,20-32A44,44,0,0,0,256,128v-8A44.05,44.05,0,0,0,212,76Zm-16,60a76.27,76.27,0,0,1-42,68H86a76.27,76.27,0,0,1-42-68V100H196Zm36-8a20,20,0,0,1-12.57,18.55A97.17,97.17,0,0,0,220,136V101.68A20,20,0,0,1,232,120ZM68,48V24a12,12,0,0,1,24,0V48a12,12,0,0,1-24,0Zm40,0V24a12,12,0,0,1,24,0V48a12,12,0,0,1-24,0Zm40,0V24a12,12,0,0,1,24,0V48a12,12,0,0,1-24,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,88v48a88,88,0,0,1-51.3,80H83.3A88,88,0,0,1,32,136V88Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,80H32a8,8,0,0,0-8,8v48a96.3,96.3,0,0,0,32.54,72H32a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16H183.46a96.59,96.59,0,0,0,27-40.09A40,40,0,0,0,248,128v-8A40,40,0,0,0,208,80Zm24,48a24,24,0,0,1-17.2,23,95.78,95.78,0,0,0,1.2-15V97.38A24,24,0,0,1,232,120ZM112,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm32,0V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0ZM80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M82,56V24a6,6,0,0,1,12,0V56a6,6,0,0,1-12,0Zm38,6a6,6,0,0,0,6-6V24a6,6,0,0,0-12,0V56A6,6,0,0,0,120,62Zm32,0a6,6,0,0,0,6-6V24a6,6,0,0,0-12,0V56A6,6,0,0,0,152,62Zm94,58v8a38,38,0,0,1-36.94,38,94.55,94.55,0,0,1-31.13,44H208a6,6,0,0,1,0,12H32a6,6,0,0,1,0-12H62.07A94.34,94.34,0,0,1,26,136V88a6,6,0,0,1,6-6H208A38,38,0,0,1,246,120Zm-44,16V94H38v42a82.27,82.27,0,0,0,46.67,74h70.66A82.27,82.27,0,0,0,202,136Zm32-16a26,26,0,0,0-20-25.29V136a93.18,93.18,0,0,1-1.69,17.64A26,26,0,0,0,234,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M84,56V24a4,4,0,0,1,8,0V56a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,120,60Zm32,0a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,152,60Zm92,60v8a36,36,0,0,1-36,36h-.41a92.53,92.53,0,0,1-35.76,48H208a4,4,0,0,1,0,8H32a4,4,0,0,1,0-8H68.17A92.34,92.34,0,0,1,28,136V88a4,4,0,0,1,4-4H208A36,36,0,0,1,244,120Zm-40,16V92H36v44a84.28,84.28,0,0,0,48.21,76h71.58A84.28,84.28,0,0,0,204,136Zm32-16a28,28,0,0,0-24-27.71V136a91.75,91.75,0,0,1-2.2,19.94A28,28,0,0,0,236,128Z",
                }),
            ),
        ],
    ]),
    n8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,76h0a28,28,0,0,1-28,28H152V76a28,28,0,0,1,28-28h0A28,28,0,0,1,208,76ZM76,48h0A28,28,0,0,0,48,76h0a28,28,0,0,0,28,28h28V76A28,28,0,0,0,76,48ZM180,152H152v28a28,28,0,0,0,28,28h0a28,28,0,0,0,28-28h0A28,28,0,0,0,180,152ZM48,180h0a28,28,0,0,0,28,28h0a28,28,0,0,0,28-28V152H76A28,28,0,0,0,48,180Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M116,116h24v24H116ZM86,72a14,14,0,0,0,0,28h14V86A14,14,0,0,0,86,72Zm98,14a14,14,0,0,0-28,0v14h14A14,14,0,0,0,184,86ZM72,170a14,14,0,0,0,28,0V156H86A14,14,0,0,0,72,170ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-68,92V116h14a30,30,0,1,0-30-30v14H116V86a30,30,0,1,0-30,30h14v24H86a30,30,0,1,0,30,30V156h24v14a30,30,0,1,0,30-30Zm0,30a14,14,0,1,0,14-14H156Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M180,146H158V110h22a34,34,0,1,0-34-34V98H110V76a34,34,0,1,0-34,34H98v36H76a34,34,0,1,0,34,34V158h36v22a34,34,0,1,0,34-34ZM158,76a22,22,0,1,1,22,22H158ZM54,76a22,22,0,0,1,44,0V98H76A22,22,0,0,1,54,76ZM98,180a22,22,0,1,1-22-22H98Zm12-70h36v36H110Zm70,92a22,22,0,0,1-22-22V158h22a22,22,0,0,1,0,44Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M180,148H156V108h24a32,32,0,1,0-32-32v24H108V76a32,32,0,1,0-32,32h24v40H76a32,32,0,1,0,32,32V156h40v24a32,32,0,1,0,32-32ZM156,76a24,24,0,1,1,24,24H156ZM52,76a24,24,0,0,1,48,0v24H76A24,24,0,0,1,52,76Zm48,104a24,24,0,1,1-24-24h24Zm8-72h40v40H108Zm72,96a24,24,0,0,1-24-24V156h24a24,24,0,0,1,0,48Z",
                }),
            ),
        ],
    ]),
    m8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M216,40V168H168V88H88V40Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z",
                }),
            ),
        ],
    ]),
    r8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,116h-4.72A100.21,100.21,0,0,0,140,28.72V24a12,12,0,0,0-24,0v4.72A100.21,100.21,0,0,0,28.72,116H24a12,12,0,0,0,0,24h4.72A100.21,100.21,0,0,0,116,227.28V232a12,12,0,0,0,24,0v-4.72A100.21,100.21,0,0,0,227.28,140H232a12,12,0,0,0,0-24Zm-92,87v-3a12,12,0,0,0-24,0v3a76.15,76.15,0,0,1-63-63h3a12,12,0,0,0,0-24H53a76.15,76.15,0,0,1,63-63v3a12,12,0,0,0,24,0V53a76.15,76.15,0,0,1,63,63h-3a12,12,0,0,0,0,24h3A76.15,76.15,0,0,1,140,203ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M160,128a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M232,120h-8.34A96.14,96.14,0,0,0,136,32.34V24a8,8,0,0,0-16,0v8.34A96.14,96.14,0,0,0,32.34,120H24a8,8,0,0,0,0,16h8.34A96.14,96.14,0,0,0,120,223.66V232a8,8,0,0,0,16,0v-8.34A96.14,96.14,0,0,0,223.66,136H232a8,8,0,0,0,0-16Zm-96,87.6V200a8,8,0,0,0-16,0v7.6A80.15,80.15,0,0,1,48.4,136H56a8,8,0,0,0,0-16H48.4A80.15,80.15,0,0,1,120,48.4V56a8,8,0,0,0,16,0V48.4A80.15,80.15,0,0,1,207.6,120H200a8,8,0,0,0,0,16h7.6A80.15,80.15,0,0,1,136,207.6ZM128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,120h-8.34A96.14,96.14,0,0,0,136,32.34V24a8,8,0,0,0-16,0v8.34A96.14,96.14,0,0,0,32.34,120H24a8,8,0,0,0,0,16h8.34A96.14,96.14,0,0,0,120,223.66V232a8,8,0,0,0,16,0v-8.34A96.14,96.14,0,0,0,223.66,136H232a8,8,0,0,0,0-16Zm-32,16h7.6A80.15,80.15,0,0,1,136,207.6V200a8,8,0,0,0-16,0v7.6A80.15,80.15,0,0,1,48.4,136H56a8,8,0,0,0,0-16H48.4A80.15,80.15,0,0,1,120,48.4V56a8,8,0,0,0,16,0V48.4A80.15,80.15,0,0,1,207.6,120H200a8,8,0,0,0,0,16Zm-32-8a40,40,0,1,1-40-40A40,40,0,0,1,168,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,122H221.8A94.13,94.13,0,0,0,134,34.2V24a6,6,0,0,0-12,0V34.2A94.13,94.13,0,0,0,34.2,122H24a6,6,0,0,0,0,12H34.2A94.13,94.13,0,0,0,122,221.8V232a6,6,0,0,0,12,0V221.8A94.13,94.13,0,0,0,221.8,134H232a6,6,0,0,0,0-12Zm-98,87.76V200a6,6,0,0,0-12,0v9.76A82.09,82.09,0,0,1,46.24,134H56a6,6,0,0,0,0-12H46.24A82.09,82.09,0,0,1,122,46.24V56a6,6,0,0,0,12,0V46.24A82.09,82.09,0,0,1,209.76,122H200a6,6,0,0,0,0,12h9.76A82.09,82.09,0,0,1,134,209.76ZM128,90a38,38,0,1,0,38,38A38,38,0,0,0,128,90Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,154Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,120h-8.34A96.14,96.14,0,0,0,136,32.34V24a8,8,0,0,0-16,0v8.34A96.14,96.14,0,0,0,32.34,120H24a8,8,0,0,0,0,16h8.34A96.14,96.14,0,0,0,120,223.66V232a8,8,0,0,0,16,0v-8.34A96.14,96.14,0,0,0,223.66,136H232a8,8,0,0,0,0-16Zm-96,87.6V200a8,8,0,0,0-16,0v7.6A80.15,80.15,0,0,1,48.4,136H56a8,8,0,0,0,0-16H48.4A80.15,80.15,0,0,1,120,48.4V56a8,8,0,0,0,16,0V48.4A80.15,80.15,0,0,1,207.6,120H200a8,8,0,0,0,0,16h7.6A80.15,80.15,0,0,1,136,207.6ZM128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,124H219.91A92.13,92.13,0,0,0,132,36.09V24a4,4,0,0,0-8,0V36.09A92.13,92.13,0,0,0,36.09,124H24a4,4,0,0,0,0,8H36.09A92.13,92.13,0,0,0,124,219.91V232a4,4,0,0,0,8,0V219.91A92.13,92.13,0,0,0,219.91,132H232a4,4,0,0,0,0-8ZM132,211.9V200a4,4,0,0,0-8,0v11.9A84.11,84.11,0,0,1,44.1,132H56a4,4,0,0,0,0-8H44.1A84.11,84.11,0,0,1,124,44.1V56a4,4,0,0,0,8,0V44.1A84.11,84.11,0,0,1,211.9,124H200a4,4,0,0,0,0,8h11.9A84.11,84.11,0,0,1,132,211.9ZM128,92a36,36,0,1,0,36,36A36,36,0,0,0,128,92Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z",
                }),
            ),
        ],
    ]),
    c8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,12H80A28,28,0,0,0,52,40V216a28,28,0,0,0,28,28h96a28,28,0,0,0,28-28V40A28,28,0,0,0,176,12ZM76,76H180V180H76Zm4-40h96a4,4,0,0,1,4,4V52H76V40A4,4,0,0,1,80,36Zm96,184H80a4,4,0,0,1-4-4V204H180v12A4,4,0,0,1,176,220Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M192,56V200H64V56Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM80,32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18ZM70,62H186V194H70ZM80,30h96a10,10,0,0,1,10,10V50H70V40A10,10,0,0,1,80,30Zm96,196H80a10,10,0,0,1-10-10V206H186v10A10,10,0,0,1,176,226Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,20H80A20,20,0,0,0,60,40V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V40A20,20,0,0,0,176,20ZM68,60H188V196H68ZM80,28h96a12,12,0,0,1,12,12V52H68V40A12,12,0,0,1,80,28Zm96,200H80a12,12,0,0,1-12-12V204H188v12A12,12,0,0,1,176,228Z",
                }),
            ),
        ],
    ]),
    A8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M238.16,113.89,142.1,17.83a20,20,0,0,0-28.21,0l-96,96.06a20,20,0,0,0,0,28.22l96.05,96.06h0a20,20,0,0,0,28.21,0l96-96.06a20,20,0,0,0,0-28.22ZM128,218.33,37.68,128,128,37.67,218.32,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M229.67,133.62l-96,96a7.94,7.94,0,0,1-11.24,0l-96-96a7.94,7.94,0,0,1,0-11.24l96.05-96a7.94,7.94,0,0,1,11.24,0l96,96.05A7.94,7.94,0,0,1,229.67,133.62Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,128a15.85,15.85,0,0,1-4.67,11.28l-96.05,96.06a16,16,0,0,1-22.56,0h0l-96-96.06a16,16,0,0,1,0-22.56l96.05-96.06a16,16,0,0,1,22.56,0l96.05,96.06A15.85,15.85,0,0,1,240,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M233.92,118.14,137.86,22.08a14,14,0,0,0-19.72,0L22.08,118.14a14,14,0,0,0,0,19.72l96.06,96.06h0a14,14,0,0,0,19.72,0l96-96.06a13.94,13.94,0,0,0,0-19.72Zm-8.49,11.24-96.05,96.06a2,2,0,0,1-2.76,0L30.57,129.38a2,2,0,0,1,0-2.76l96.05-96.06a2,2,0,0,1,2.76,0l96.05,96.06a2,2,0,0,1,0,2.76Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.5,119.55,136.45,23.49a12,12,0,0,0-16.9,0l-96,96.06a12,12,0,0,0,0,16.9l96.05,96.06a12,12,0,0,0,16.9,0l96.05-96.06a12,12,0,0,0,0-16.9Zm-5.66,11.24-96.05,96.06a4,4,0,0,1-5.58,0l-96-96.06a3.94,3.94,0,0,1,0-5.58l96.05-96.06a4,4,0,0,1,5.58,0l96.05,96.06a3.94,3.94,0,0,1,0,5.58Z",
                }),
            ),
        ],
    ]),
    h8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M119.51,108.49a12,12,0,0,0,17,0l38-38a12,12,0,0,0,0-17l-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17ZM128,41l21,21L128,83,107,62Zm8.49,106.54a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38a12,12,0,0,0,0-17ZM128,215l-21-21,21-21,21,21Zm-19.51-95.52-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38A12,12,0,0,0,108.49,119.51ZM62,149,41,128l21-21,21,21Zm178.49-29.52-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38A12,12,0,0,0,240.49,119.51ZM194,149l-21-21,21-21,21,21Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,104,88,64l40-40,40,40ZM88,192l40,40,40-40-40-40ZM192,88l-40,40,40,40,40-40ZM64,88,24,128l40,40,40-40Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M122.34,109.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32ZM128,35.31,156.69,64,128,92.69,99.31,64Zm5.66,111a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32ZM128,220.69,99.31,192,128,163.31,156.69,192Zm109.66-98.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34ZM192,156.69,163.31,128,192,99.31,220.69,128Zm-82.34-34.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34ZM64,156.69,35.31,128,64,99.31,92.69,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M82.34,69.66a8,8,0,0,1,0-11.32l40-40a8,8,0,0,1,11.32,0l40,40a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0Zm51.32,76.68a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32Zm104-24-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34Zm-128,0-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M123.76,108.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0,0-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,0,8.48ZM128,32.49,159.51,64,128,95.51,96.49,64Zm4.24,115.27a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,0,8.48l40,40a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0,0-8.48ZM128,223.51,96.49,192,128,160.49,159.51,192Zm108.24-99.75-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,0,8.48l40,40a6,6,0,0,0,8.48,0l40-40A6,6,0,0,0,236.24,123.76ZM192,159.51,160.49,128,192,96.49,223.51,128Zm-83.76-35.75-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,0,8.48l40,40a6,6,0,0,0,8.48,0l40-40A6,6,0,0,0,108.24,123.76ZM64,159.51,32.49,128,64,96.49,95.51,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M122.34,109.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32ZM128,35.31,156.69,64,128,92.69,99.31,64Zm5.66,111a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32ZM128,220.69,99.31,192,128,163.31,156.69,192Zm109.66-98.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34ZM192,156.69,163.31,128,192,99.31,220.69,128Zm-82.34-34.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34ZM64,156.69,35.31,128,64,99.31,92.69,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M125.17,106.83a4,4,0,0,0,5.66,0l40-40a4,4,0,0,0,0-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66ZM128,29.66,162.34,64,128,98.34,93.66,64Zm2.83,119.51a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0l40-40a4,4,0,0,0,0-5.66ZM128,226.34,93.66,192,128,157.66,162.34,192ZM234.83,125.17l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0l40-40A4,4,0,0,0,234.83,125.17ZM192,162.34,157.66,128,192,93.66,226.34,128Zm-85.17-37.17-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0l40-40A4,4,0,0,0,106.83,125.17ZM64,162.34,29.66,128,64,93.66,98.34,128Z",
                }),
            ),
        ],
    ]),
    Z8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z",
                }),
            ),
        ],
    ]),
    H8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,32V224a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V32A16,16,0,0,1,96,16h64A16,16,0,0,1,176,32Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M160,16H96A16,16,0,0,0,80,32V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V32A16,16,0,0,0,160,16ZM128,208a12,12,0,1,1,12-12A12,12,0,0,1,128,208Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M118,60a10,10,0,1,1,10,10A10,10,0,0,1,118,60Zm10,58a10,10,0,1,0,10,10A10,10,0,0,0,128,118Zm0,68a10,10,0,1,0,10,10A10,10,0,0,0,128,186Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M120,60a8,8,0,1,1,8,8A8,8,0,0,1,120,60Zm8,60a8,8,0,1,0,8,8A8,8,0,0,0,128,120Zm0,68a8,8,0,1,0,8,8A8,8,0,0,0,128,188Z",
                }),
            ),
        ],
    ]),
    M8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z",
                }),
            ),
        ],
    ]),
    V8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M218.38,208.12c-.06-.12-.11-.25-.17-.37l-44.54-94.87L193,82.56c.06-.09.12-.18.17-.27a20,20,0,0,0,0-20.58c-.14-.24-.3-.48-.46-.71L172,31.44V12a12,12,0,0,0-24,0V31l-4.38,5.47a20,20,0,0,1-31.24,0L108,31V12a12,12,0,0,0-24,0V31.44L63.31,61c-.16.23-.32.47-.46.71a20,20,0,0,0,0,20.58c0,.09.11.18.17.27l19.31,30.32L37.79,207.75c-.06.12-.11.25-.17.37A20,20,0,0,0,56,236H200a20,20,0,0,0,18.39-27.88ZM128,68a43.75,43.75,0,0,0,31.21-13l12,17.1L153.42,100H102.58L84.82,72.12l12-17.1A43.75,43.75,0,0,0,128,68ZM62.31,212l41.31-88h48.76l41.31,88Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,224H56a8,8,0,0,1-7.35-11.15L96,112,73.14,76.12a8,8,0,0,1,0-8.24L96,35.23,103,44a32,32,0,0,0,50,0l7-8.76,22.86,32.65a8,8,0,0,1,0,8.24L160,112l47.34,100.85A8,8,0,0,1,200,224Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M214.7,209.7a1.89,1.89,0,0,0-.11-.25l-45.48-96.86,20.5-32.18.11-.18a16,16,0,0,0,0-16.46c-.09-.16-.2-.32-.3-.47L168,32.7V8a8,8,0,0,0-16,0V32.42L146.74,39a24,24,0,0,1-37.48,0L104,32.42V8A8,8,0,0,0,88,8V32.7L66.58,63.3c-.1.15-.21.31-.3.47a16,16,0,0,0,0,16.46l.11.18,20.5,32.18L41.41,209.45a1.89,1.89,0,0,0-.11.25A16,16,0,0,0,56,232H200a16,16,0,0,0,14.71-22.3ZM80,72,96.43,48.57l.33.42a40,40,0,0,0,62.48,0l.33-.42L176,72l-20.38,32H100.39ZM56,216l45.07-96h53.84L200,216Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M66.26,80.23a15.26,15.26,0,0,1-1.65-12.17,15.54,15.54,0,0,1,2-4.76L88,32.7V8a8,8,0,0,1,8.53-8A8.17,8.17,0,0,1,104,8.27V32.42L109.25,39a23.91,23.91,0,0,0,19.13,9,24.67,24.67,0,0,0,18.71-9.43L152,32.42V8a8,8,0,0,1,8.53-8A8.17,8.17,0,0,1,168,8.27V32.7l21.42,30.6a15.54,15.54,0,0,1,2,4.76,15.26,15.26,0,0,1-1.65,12.17,1.74,1.74,0,0,0-.11.18l-13.86,21.74A4,4,0,0,1,172.4,104H83.6a4,4,0,0,1-3.37-1.85L66.37,80.41A1.74,1.74,0,0,0,66.26,80.23Zm148.5,129.56a2.52,2.52,0,0,0-.15-.34L173.69,122.3a4,4,0,0,0-3.63-2.3H85.94a4,4,0,0,0-3.63,2.3L41.39,209.45a2.52,2.52,0,0,0-.15.34A16.19,16.19,0,0,0,41.6,223,16,16,0,0,0,56,232H200a16,16,0,0,0,14.39-9A16.19,16.19,0,0,0,214.76,209.79Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212.86,210.49a1.08,1.08,0,0,0-.08-.19l-45.94-97.86,21.08-33.1.09-.14a14,14,0,0,0,0-14.4c-.07-.12-.15-.24-.23-.36L166,33.33V8a6,6,0,0,0-12,0V33.12l-5.7,7.12a26,26,0,0,1-40.6,0L102,33.12V8A6,6,0,0,0,90,8V33.33L68.22,64.44c-.08.12-.16.24-.23.36a14,14,0,0,0,0,14.4l.09.14,21.08,33.1L43.22,210.3a1.08,1.08,0,0,0-.08.19A14,14,0,0,0,56,230H200a14,14,0,0,0,12.87-19.51ZM78.26,73a2,2,0,0,1-.05-1.89L96.32,45.23l2,2.51a38,38,0,0,0,59.34,0l2-2.51,18.11,25.86a2,2,0,0,1,0,1.89l-21,33H99.29ZM201.66,217.1a1.93,1.93,0,0,1-1.67.9H56a2,2,0,0,1-1.87-2.72L99.81,118h56.38l45.67,97.28A1.92,1.92,0,0,1,201.66,217.1Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M214.7,209.7a1.89,1.89,0,0,0-.11-.25l-45.48-96.86,20.5-32.18a1.74,1.74,0,0,0,.11-.18,16,16,0,0,0,0-16.46c-.09-.16-.2-.32-.3-.47L168,32.7V8a8,8,0,0,0-16,0V32.42L146.74,39a24,24,0,0,1-37.48,0L104,32.42V8A8,8,0,0,0,88,8V32.7L66.58,63.3c-.1.15-.21.31-.3.47a16,16,0,0,0,0,16.46,1.74,1.74,0,0,0,.11.18l20.5,32.18L41.41,209.45a1.89,1.89,0,0,0-.11.25A16,16,0,0,0,56,232H200a16,16,0,0,0,14.71-22.3ZM80,72,96.43,48.57l.33.42a40,40,0,0,0,62.48,0l.33-.42L176,72l-20.38,32H100.39ZM56,216l45.07-96h53.84L200,216Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M211,211.27l-.06-.12-46.41-98.86,21.68-34,0-.1a11.94,11.94,0,0,0,0-12.34l-.15-.24L164,34V8a4,4,0,0,0-8,0V33.82l-6.13,7.67a28,28,0,0,1-43.74,0L100,33.82V8a4,4,0,0,0-8,0V34L69.86,65.59l-.15.24a11.94,11.94,0,0,0,0,12.34.93.93,0,0,1,.05.1l21.68,34L45,211.15l-.06.12A12,12,0,0,0,56,228H200a12,12,0,0,0,11-16.73ZM76.54,74a4,4,0,0,1,0-4L96.21,41.9l3.68,4.59a36,36,0,0,0,56.22,0l3.68-4.59L179.49,70a4,4,0,0,1,0,4l-21.65,34H98.19ZM203.33,218.2A3.94,3.94,0,0,1,200,220H56a3.94,3.94,0,0,1-3.33-1.8,3.89,3.89,0,0,1-.36-3.72L98.54,116h58.92l46.23,98.48A3.89,3.89,0,0,1,203.33,218.2Z",
                }),
            ),
        ],
    ]),
    d8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,104a12,12,0,0,1-24,0,68,68,0,0,0-136,0c0,25,7.58,32.3,16.35,40.76S96,163.71,96,188a32,32,0,0,0,32,32c9,0,16.19-3.7,22.75-11.64a12,12,0,0,1,18.5,15.28C158.09,237.15,144.21,244,128,244a56.06,56.06,0,0,1-56-56c0-14.09-4.63-18.56-12.31-26C49.13,151.86,36,139.19,36,104a92,92,0,0,1,184,0Zm-40.13,53.61a12,12,0,0,0-16.4,4.38,4,4,0,0,1-7.47-2c0-7.61,3.65-12.86,9.6-20.8C172,130.65,180,120,180,104a52,52,0,0,0-104,0,12,12,0,0,0,24,0,28,28,0,0,1,56,0c0,7.61-3.65,12.86-9.6,20.8C140,133.35,132,144,132,160a28,28,0,0,0,52.25,14A12,12,0,0,0,179.87,157.61Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,104c0,40-14.44,72-48,112-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M216,104a8,8,0,0,1-16,0,72,72,0,0,0-144,0c0,26.7,8.53,34.92,17.57,43.64C82.21,156,92,165.41,92,188a36,36,0,0,0,36,36c10.24,0,18.45-4.16,25.83-13.09a8,8,0,1,1,12.34,10.18C155.81,233.64,143,240,128,240a52.06,52.06,0,0,1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46,149.5,40,137.5,40,104a88,88,0,0,1,176,0Zm-38.13,57.08A8,8,0,0,0,166.93,164,8,8,0,0,1,152,160c0-9.33,4.82-15.76,10.4-23.2,6.37-8.5,13.6-18.13,13.6-32.8a48,48,0,0,0-96,0,8,8,0,0,0,16,0,32,32,0,0,1,64,0c0,9.33-4.82,15.76-10.4,23.2-6.37,8.5-13.6,18.13-13.6,32.8a24,24,0,0,0,44.78,12A8,8,0,0,0,177.87,161.08Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm20,128a4.21,4.21,0,0,0,1.33-.22,8,8,0,0,1,5.34,15.08A20,20,0,0,1,128,148c0-8.85,4.77-15.23,9-20.87,3.77-5,7-9.38,7-15.13a16,16,0,0,0-32,0,8,8,0,0,1-16,0,32,32,0,0,1,64,0c0,11.07-5.66,18.63-10.2,24.71-3.6,4.81-5.8,7.93-5.8,11.29A4,4,0,0,0,148,152Zm36-32a8,8,0,0,1-8-8,48,48,0,0,0-96,0c0,11.9,6.71,20.5,13.82,29.6,7,8.92,14.18,18.15,14.18,30.4a20,20,0,0,0,34,14.29,8,8,0,1,1,11.19,11.42A36,36,0,0,1,92,172c0-6.74-5-13.14-10.79-20.55C73.54,141.63,64,129.41,64,112a64,64,0,0,1,128,0A8,8,0,0,1,184,120Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M214,104a6,6,0,0,1-12,0,74,74,0,0,0-148,0c0,27.55,8.83,36.06,18.18,45.08,4.31,4.15,8.77,8.45,12.16,14.47C88.15,170.31,90,178.3,90,188a38,38,0,0,0,38,38c10.74,0,19.69-4.52,27.37-13.82a6,6,0,0,1,9.26,7.64C154.66,231.88,142.34,238,128,238a50.06,50.06,0,0,1-50-50c0-16.64-6.24-22.66-14.15-30.29C54.12,148.33,42,136.64,42,104a86,86,0,0,1,172,0Zm-37.14,58.81a6,6,0,0,0-8.19,2.19A10,10,0,0,1,150,160c0-10,5-16.67,10.8-24.4C167,127.35,174,118,174,104a46,46,0,0,0-92,0,6,6,0,0,0,12,0,34,34,0,0,1,68,0c0,10-5,16.67-10.8,24.4C145,136.65,138,146,138,160a22,22,0,0,0,41.05,11A6,6,0,0,0,176.86,162.81Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,104a8,8,0,0,1-16,0,72,72,0,0,0-144,0c0,26.7,8.53,34.92,17.57,43.64C82.21,156,92,165.41,92,188a36,36,0,0,0,36,36c10.24,0,18.45-4.16,25.83-13.09a8,8,0,1,1,12.34,10.18C155.81,233.64,143,240,128,240a52.06,52.06,0,0,1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46,149.5,40,137.5,40,104a88,88,0,0,1,176,0Zm-38.13,57.08A8,8,0,0,0,166.93,164,8,8,0,0,1,152,160c0-9.33,4.82-15.76,10.4-23.2,6.37-8.5,13.6-18.13,13.6-32.8a48,48,0,0,0-96,0,8,8,0,0,0,16,0,32,32,0,0,1,64,0c0,9.33-4.82,15.76-10.4,23.2-6.37,8.5-13.6,18.13-13.6,32.8a24,24,0,0,0,44.78,12A8,8,0,0,0,177.87,161.08Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212,104a4,4,0,0,1-8,0,76,76,0,0,0-152,0c0,28.4,9.55,37.61,18.79,46.52C79.25,158.67,88,167.11,88,188a40,40,0,0,0,40,40c11.37,0,20.83-4.76,28.92-14.55a4,4,0,0,1,6.16,5.1C153.52,230.13,141.71,236,128,236a48.05,48.05,0,0,1-48-48c0-17.49-6.84-24.09-14.76-31.72C55.28,146.68,44,135.79,44,104a84,84,0,0,1,168,0Zm-36.14,60.54A4,4,0,0,0,170.4,166a12,12,0,0,1-22.4-6c0-10.67,5.44-17.92,11.2-25.6C165.49,126,172,117.33,172,104a44,44,0,0,0-88,0,4,4,0,0,0,8,0,36,36,0,0,1,72,0c0,10.67-5.44,17.92-11.2,25.6C146.51,138,140,146.67,140,160a20,20,0,0,0,37.32,10A4,4,0,0,0,175.86,164.54Z",
                }),
            ),
        ],
    ]),
    E8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M224,56l-96,88L32,56Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z",
                }),
            ),
        ],
    ]),
    p8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M224,56l-96,88L32,56Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z",
                }),
            ),
        ],
    ]),
    o8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M208,104V216H48V104Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z",
                }),
            ),
        ],
    ]),
    s8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z",
                }),
            ),
        ],
    ]),
    g8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M56.88,31.93A12,12,0,1,0,39.12,48.07l16,17.65C20.67,88.66,5.72,121.58,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212a131.34,131.34,0,0,0,51-10l20.09,22.1a12,12,0,0,0,17.76-16.14ZM128,188c-29.59,0-55.47-10.73-76.91-31.88A130.69,130.69,0,0,1,29.52,128c5.27-9.31,18.79-29.9,42-44.29l90.09,99.11A109.33,109.33,0,0,1,128,188Zm123-55.12c-.36.81-9,20-28,39.16a12,12,0,1,1-17-16.9A130.48,130.48,0,0,0,226.48,128a130.36,130.36,0,0,0-21.57-28.12C183.46,78.73,157.59,68,128,68c-3.35,0-6.7.14-10,.42a12,12,0,1,1-2-23.91c3.93-.34,8-.51,12-.51,36,0,68.63,13.67,94.49,39.52,19.35,19.35,28.11,38.8,28.48,39.61A12.08,12.08,0,0,1,251,132.88Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M96.68,57.87a4,4,0,0,1,2.08-6.6A130.13,130.13,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41a8,8,0,0,1,0,6.5c-.35.79-8.82,19.57-27.65,38.4q-4.28,4.26-8.79,8.07a4,4,0,0,1-5.55-.36ZM213.92,210.62a8,8,0,1,1-11.84,10.76L180,197.13A127.21,127.21,0,0,1,128,208c-34.88,0-66.57-13.26-91.66-38.34C17.51,150.83,9,132.05,8.69,131.26a8,8,0,0,1,0-6.5C9,124,17.51,105.18,36.34,86.35a135,135,0,0,1,25-19.78L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-65.49-48.25-52.69-58a40,40,0,0,0,52.69,58Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M52.44,36A6,6,0,0,0,43.56,44L64.44,67c-37.28,21.9-53.23,57-53.92,58.57a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206a124.91,124.91,0,0,0,52.57-11.25l23,25.29a6,6,0,0,0,8.88-8.08Zm48.62,71.32,45,49.52a34,34,0,0,1-45-49.52ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.57,134.57,0,0,1,22.69,128c4.29-8.2,20.1-35.18,50-51.91L92.89,98.3a46,46,0,0,0,61.35,67.48l17.81,19.6A113.47,113.47,0,0,1,128,194Zm6.4-99.4a6,6,0,0,1,2.25-11.79,46.17,46.17,0,0,1,37.15,40.87,6,6,0,0,1-5.42,6.53l-.56,0a6,6,0,0,1-6-5.45A34.1,34.1,0,0,0,134.4,94.6Zm111.08,35.85c-.41.92-10.37,23-32.86,43.12a6,6,0,1,1-8-8.94A134.07,134.07,0,0,0,233.31,128a134.67,134.67,0,0,0-23.86-32.07C186.78,73.42,159.38,62,128,62a120.19,120.19,0,0,0-19.69,1.6,6,6,0,1,1-2-11.83A131.12,131.12,0,0,1,128,50c43.38,0,73,20.54,90.24,37.76,18.58,18.58,26.9,37,27.24,37.81A6,6,0,0,1,245.48,130.45Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M51,37.31A4,4,0,0,0,45,42.69L67.59,67.5C29.34,89,13,124.81,12.34,126.38a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17a122.59,122.59,0,0,0,53.06-11.69l24,26.38a4,4,0,1,0,5.92-5.38ZM149.1,157.16A36,36,0,0,1,101,104.22ZM128,196c-32,0-59.89-11.65-83-34.62A135.81,135.81,0,0,1,20.44,128c3.65-7.23,20.09-36.81,52.68-54.43l22.45,24.7a44,44,0,0,0,59,64.83l20.89,23A114.94,114.94,0,0,1,128,196Zm6.78-103.36a4,4,0,0,1,1.49-7.86,44.15,44.15,0,0,1,35.54,39.09,4,4,0,0,1-3.61,4.35l-.38,0a4,4,0,0,1-4-3.63A36.1,36.1,0,0,0,134.78,92.64Zm108.88,37c-.41.91-10.2,22.58-32.38,42.45a4,4,0,0,1-2.67,1,4,4,0,0,1-2.67-7A136.71,136.71,0,0,0,235.56,128,136.07,136.07,0,0,0,211,94.62C187.89,71.65,160,60,128,60a122,122,0,0,0-20,1.63,4,4,0,0,1-1.32-7.89A129.3,129.3,0,0,1,128,52c42.7,0,71.87,20.22,88.83,37.18,18.31,18.31,26.49,36.44,26.83,37.2A4.08,4.08,0,0,1,243.66,129.63Z",
                }),
            ),
        ],
    ]),
    i8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224.11,31.92A68,68,0,0,0,128,31.87l-70.12,69.3A19.91,19.91,0,0,0,52,115.31V187L23.52,215.51a12,12,0,0,0,17,17L69,204H140.7a19.87,19.87,0,0,0,14.15-5.86l.05,0,69.21-70A68.06,68.06,0,0,0,224.11,31.92Zm-79.21,17A44,44,0,0,1,210,108H165l27.52-27.51a12,12,0,0,0-17-17L124,115V69.54ZM76,117l24-23.72V139L76,163Zm63,63H93l48-48h45.5Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M215.8,119.6l-69.26,70.06a8,8,0,0,1-5.65,2.34H64.2V115.31a8,8,0,0,1,2.34-5.65L112.2,64.52V144l24-24Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M221.28,34.75a64,64,0,0,0-90.49,0L60.69,104A15.9,15.9,0,0,0,56,115.31v73.38L26.34,218.34a8,8,0,0,0,11.32,11.32L67.32,200H140.7A15.92,15.92,0,0,0,152,195.32l0,0,69.23-70A64,64,0,0,0,221.28,34.75ZM142.07,46.06A48,48,0,0,1,211.79,112H155.33l34.35-34.34a8,8,0,0,0-11.32-11.32L120,124.69V67.87ZM72,115.35l32-31.67v57l-32,32ZM140.7,184H83.32l56-56h56.74Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M211.84,134.81l-59.79,60.47,0,0a15.75,15.75,0,0,1-11.2,4.68H75.32L45.66,229.66a8,8,0,0,1-11.32-11.32l22.59-22.58h0L124.7,128H209A4,4,0,0,1,211.84,134.81ZM216.7,30.57a64,64,0,0,0-85.9,4.14l-9.6,9.48A4,4,0,0,0,120,47v63l55-55a8,8,0,0,1,11.31,11.31L140.71,112h88.38a4,4,0,0,0,3.56-2.16A64.08,64.08,0,0,0,216.7,30.57ZM62.83,167.23,104,126.06V70.76a4,4,0,0,0-6.81-2.84L60.69,104A15.9,15.9,0,0,0,56,115.31V164.4A4,4,0,0,0,62.83,167.23Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M238,80A62,62,0,0,0,132.18,36.14L62.1,105.41a13.94,13.94,0,0,0-4.1,9.9v74.21L27.76,219.76a6,6,0,1,0,8.48,8.48L66.48,198h74.21a13.94,13.94,0,0,0,9.9-4.1l0,0,68.83-69.63h0l.39-.4A61.6,61.6,0,0,0,238,80ZM140.64,44.64a50,50,0,0,1,72,69.36H150.48l37.76-37.76a6,6,0,0,0-8.48-8.48l-48,48h0L118,129.52V67ZM70,115.31a2,2,0,0,1,.56-1.39l35.44-35v62.63l-36,36Zm72.09,70.11a2,2,0,0,1-1.4.58H78.48l37.76-37.75h0L138.48,126h62.35Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.28,34.75a64,64,0,0,0-90.49,0L60.69,104A15.9,15.9,0,0,0,56,115.31v73.38L26.34,218.34a8,8,0,0,0,11.32,11.32L67.32,200H140.7A15.92,15.92,0,0,0,152,195.32l0,0,69.23-70A64,64,0,0,0,221.28,34.75ZM142.07,46.06A48,48,0,0,1,211.79,112H155.33l34.35-34.34a8,8,0,0,0-11.32-11.32L120,124.69V67.87ZM72,115.35l32-31.67v57l-32,32ZM140.7,184H83.32l56-56h56.74Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236,80A60,60,0,0,0,133.59,37.56L63.52,106.83A11.9,11.9,0,0,0,60,115.31v75L29.17,221.17a4,4,0,0,0,5.66,5.66L65.66,196h75a12,12,0,0,0,8.48-3.51l0,0L218,122.83h0l.4-.4A59.63,59.63,0,0,0,236,80ZM139.23,43.23A52,52,0,0,1,213.5,116H145.66l41.17-41.17a4,4,0,1,0-5.66-5.66L116,134.34V66.19ZM68,115.31a4,4,0,0,1,1.16-2.81L108,74.1v68.24l-40,40Zm75.51,71.52a4,4,0,0,1-2.82,1.17h-67l64-64h68Z",
                }),
            ),
        ],
    ]),
    u8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z",
                }),
            ),
        ],
    ]),
    L8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M172,76a16,16,0,1,1-16-16A16,16,0,0,1,172,76Zm48.22,69.58a102,102,0,0,1-26.78,31.29c-.24.2-.47.39-.72.56a109.52,109.52,0,0,1-13.55,8.83c-18.3,10.07-40.88,15.9-67.22,17.36L91,249a12,12,0,0,1-10.89,7q-.41,0-.81,0a12,12,0,0,1-10.66-8.44l-14.16-46-46-14.19A12,12,0,0,1,7,165l45.4-20.92c1.47-26.33,7.3-48.91,17.37-67.2A110.62,110.62,0,0,1,78.57,63.3c.16-.22.34-.44.51-.66A101.91,101.91,0,0,1,110.41,35.8c25.55-14.19,54.33-16.37,74-15.69,17.76.61,36.49,4,40.76,6.52a12.07,12.07,0,0,1,4.23,4.23c2.52,4.26,5.92,23,6.53,40.76C236.57,91.26,234.4,120,220.22,145.58Zm-68.7,26.66a56.92,56.92,0,0,1-11.12-8.64,55.81,55.81,0,0,1-15.9-32.1,55.81,55.81,0,0,1-32.1-15.9,56.63,56.63,0,0,1-8.63-11.13q-7,20.48-7.7,47.69a12,12,0,0,1-7,10.61L45.51,173.64l22.1,6.82a12,12,0,0,1,7.94,7.94l6.79,22.09L93.23,186.9a12,12,0,0,1,10.61-7Q131,179.29,151.52,172.24ZM209,47c-16.25-3.14-61.81-9-95,14.91a76.73,76.73,0,0,0-14,13,32,32,0,0,0,35,32.94,12,12,0,0,1,13.09,13.09,32,32,0,0,0,33,35,76.33,76.33,0,0,0,13-14C218.05,108.81,212.18,63.22,209,47Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M185.81,167.62c-18,13.9-44.17,23.41-81.68,24.31L80.09,248l-16-56.07L8,175.87l56.07-24c.9-37.49,10.41-63.61,24.31-81.65A44,44,0,0,0,136.2,119.8a44,44,0,0,0,49.61,47.82Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm48.72,67.64c-19.37,34.9-55.44,53.76-107.24,56.1l-22,51.41A8,8,0,0,1,80.1,256l-.51,0a8,8,0,0,1-7.19-5.78L57.6,198.39,5.8,183.56a8,8,0,0,1-1-15.05l51.41-22c2.35-51.78,21.21-87.84,56.09-107.22,24.75-13.74,52.74-15.84,71.88-15.18,18.64.64,36,4.27,38.86,6a8,8,0,0,1,2.83,2.83c1.69,2.85,5.33,20.21,6,38.85C232.55,90.89,230.46,118.89,216.72,143.64Zm-55.18,29a52.11,52.11,0,0,1-33.4-44.78A52.09,52.09,0,0,1,83.37,94.47q-10.45,23.79-11.3,57.59a8,8,0,0,1-4.85,7.17L31.83,174.37l34.45,9.86a8,8,0,0,1,5.49,5.5l9.84,34.44,15.16-35.4a8,8,0,0,1,7.17-4.84Q137.71,183.12,161.54,172.64ZM212.42,43.57c-14.15-3-64.1-11-100.3,14.75a81.21,81.21,0,0,0-16,15.07,36,36,0,0,0,39.35,38.44,8,8,0,0,1,8.73,8.73,36,36,0,0,0,38.47,39.34,80.81,80.81,0,0,0,15-16C223.42,107.73,215.42,57.74,212.42,43.57Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm48.72,67.64c-19.37,34.9-55.44,53.76-107.24,56.1l-22,51.41A8,8,0,0,1,80.1,256l-.51,0a8,8,0,0,1-7.19-5.78L57.6,198.39,5.8,183.56a8,8,0,0,1-1-15.05l51.41-22c2.35-51.78,21.21-87.84,56.09-107.22,24.75-13.74,52.74-15.84,71.88-15.18,18.64.64,36,4.27,38.86,6a8,8,0,0,1,2.83,2.83c1.69,2.85,5.33,20.21,6,38.85C232.55,90.89,230.46,118.89,216.72,143.64Zm-4.3-100.07c-14.15-3-64.1-11-100.3,14.75a81.21,81.21,0,0,0-16,15.07,36,36,0,0,0,39.35,38.44,8,8,0,0,1,8.73,8.73,36,36,0,0,0,38.47,39.34,80.81,80.81,0,0,0,15-16C223.42,107.73,215.42,57.74,212.42,43.57Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M166,76a10,10,0,1,1-10-10A10,10,0,0,1,166,76Zm49,66.67c-19.17,34.54-55.11,53.08-106.85,55.14L85.62,250.36A6,6,0,0,1,80.1,254h-.38a6,6,0,0,1-5.39-4.34L59.22,196.77,6.35,181.63a6,6,0,0,1-.71-11.29L58.2,147.85C60.28,96.13,78.81,60.2,113.33,41,159.56,15.34,219,30,222.09,31.78a6,6,0,0,1,2.12,2.11C226,36.94,240.67,96.38,215,142.65Zm-48,29.64A50.06,50.06,0,0,1,130,126,50.09,50.09,0,0,1,83.71,89c-8.46,16.93-13,38-13.63,63a6,6,0,0,1-3.64,5.38L25.88,174.74l39.85,11.41a6,6,0,0,1,4.12,4.12l11.38,39.85,17.39-40.56a6,6,0,0,1,5.37-3.64C129,185.33,150.05,180.76,167,172.29Zm51-94.53a171.1,171.1,0,0,0-3.86-35.92A170.78,170.78,0,0,0,178.25,38H178c-18.52,0-45,3.22-66.67,18.47A83.53,83.53,0,0,0,94.17,72.56a38,38,0,0,0,41.47,41.25,6,6,0,0,1,6.54,6.55,38,38,0,0,0,41.28,41.46,83.13,83.13,0,0,0,16.07-17.07C214.87,123,218.05,96.31,218,77.76Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm48.72,67.64c-19.37,34.9-55.44,53.76-107.24,56.1l-22,51.41A8,8,0,0,1,80.1,256l-.51,0a8,8,0,0,1-7.19-5.78L57.6,198.39,5.8,183.56a8,8,0,0,1-1-15.05l51.41-22c2.35-51.78,21.21-87.84,56.09-107.22,24.75-13.74,52.74-15.84,71.88-15.18,18.64.64,36,4.27,38.86,6a8,8,0,0,1,2.83,2.83c1.69,2.85,5.33,20.21,6,38.85C232.55,90.89,230.46,118.89,216.72,143.64Zm-55.18,29a52.11,52.11,0,0,1-33.4-44.78A52.09,52.09,0,0,1,83.37,94.47q-10.45,23.79-11.3,57.59a8,8,0,0,1-4.85,7.17L31.83,174.37l34.45,9.86a8,8,0,0,1,5.49,5.5l9.84,34.44,15.16-35.4a8,8,0,0,1,7.17-4.84Q137.71,183.12,161.54,172.64ZM212.42,43.57c-14.15-3-64.1-11-100.3,14.75a81.21,81.21,0,0,0-16,15.07,36,36,0,0,0,39.35,38.44,8,8,0,0,1,8.73,8.73,36,36,0,0,0,38.47,39.34,80.81,80.81,0,0,0,15-16C223.42,107.73,215.42,57.74,212.42,43.57Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164,76.05a8,8,0,1,1-8-8A8,8,0,0,1,164,76.05Zm49.23,65.68c-19,34.15-54.76,52.35-106.43,54.13l-23,53.72A4,4,0,0,1,80.1,252h-.26a4,4,0,0,1-3.59-2.89L60.84,195.17,6.9,179.73a4,4,0,0,1-.47-7.52l53.72-23C62,97.6,80.16,61.81,114.3,42.85c45.5-25.27,103.78-11,106.76-9.27A4.08,4.08,0,0,1,222.48,35c.87,1.48,4.72,16.94,5.42,36.95C228.54,90.57,226.52,117.79,213.23,141.73ZM172.77,171.5A48,48,0,0,1,132,124h0A48.05,48.05,0,0,1,84.53,83.29c-10.27,18-15.79,40.95-16.46,68.71a4,4,0,0,1-2.42,3.58L19.92,175.14l45.26,13a4,4,0,0,1,2.74,2.74l12.93,45.25,19.6-45.72a4,4,0,0,1,3.58-2.43C131.81,187.28,154.78,181.77,172.77,171.5ZM220,77.25a169.58,169.58,0,0,0-4.2-37,169.46,169.46,0,0,0-37-4.2c-18.81-.12-45.93,3-68.2,18.49A85.22,85.22,0,0,0,92.24,71.84a40,40,0,0,0,43.58,44,4,4,0,0,1,4.36,4.36,40,40,0,0,0,44.06,43.56,85.31,85.31,0,0,0,17.26-18.33C210,133.16,220.18,111.35,220,77.25Z",
                }),
            ),
        ],
    ]),
    y8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176.69,48.72a225,225,0,0,0-42.52-35,12,12,0,0,0-12.34,0,225,225,0,0,0-42.52,35C51,78.47,36,111.42,36,144a92,92,0,0,0,184,0C220,111.42,205,78.47,176.69,48.72ZM100,184c0-13.33,5.53-26.26,16.45-38.45A93,93,0,0,1,128,134.72a93,93,0,0,1,11.55,10.83C150.47,157.74,156,170.67,156,184a28,28,0,0,1-56,0Zm79.84,3.94c.09-1.3.16-2.61.16-3.94,0-46.26-44-73.17-45.83-74.29a12,12,0,0,0-12.34,0C120,110.83,76,137.74,76,184c0,1.33.07,2.64.16,3.94A67.68,67.68,0,0,1,60,144c0-26.52,12.21-52.86,36.28-78.3A213.07,213.07,0,0,1,128,38.39C145.82,50.86,196,90.71,196,144A67.68,67.68,0,0,1,179.84,187.94Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,144A80,80,0,0,1,130.06,224,40,40,0,0,0,168,184c0-40-40-64-40-64s-40,24-40,64A40,40,0,0,0,125.94,224,80,80,0,0,1,48,144c0-72,80-120,80-120S208,72,208,144Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M173.79,51.48a221.25,221.25,0,0,0-41.67-34.34,8,8,0,0,0-8.24,0A221.25,221.25,0,0,0,82.21,51.48C54.59,80.48,40,112.47,40,144a88,88,0,0,0,176,0C216,112.47,201.41,80.48,173.79,51.48ZM96,184c0-27.67,22.53-47.28,32-54.3,9.48,7,32,26.63,32,54.3a32,32,0,0,1-64,0Zm77.27,15.93A47.8,47.8,0,0,0,176,184c0-44-42.09-69.79-43.88-70.86a8,8,0,0,0-8.24,0C122.09,114.21,80,140,80,184a47.8,47.8,0,0,0,2.73,15.93A71.88,71.88,0,0,1,56,144c0-34.41,20.4-63.15,37.52-81.19A216.21,216.21,0,0,1,128,33.54a215.77,215.77,0,0,1,34.48,29.27C193.49,95.5,200,125,200,144A71.88,71.88,0,0,1,173.27,199.93Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M173.79,51.48a221.25,221.25,0,0,0-41.67-34.34,8,8,0,0,0-8.24,0A221.25,221.25,0,0,0,82.21,51.48C54.59,80.48,40,112.47,40,144a88,88,0,0,0,176,0C216,112.47,201.41,80.48,173.79,51.48ZM96,184c0-27.67,22.53-47.28,32-54.3,9.48,7,32,26.63,32,54.3a32,32,0,0,1-64,0Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M172.34,52.86a218.34,218.34,0,0,0-41.25-34,6,6,0,0,0-6.18,0,218.34,218.34,0,0,0-41.25,34C56.4,81.48,42,113,42,144a86,86,0,0,0,172,0C214,113,199.6,81.48,172.34,52.86ZM94,184c0-29.8,25.11-50.41,34-56.78,8.91,6.35,34,26.87,34,56.78a34.05,34.05,0,0,1-32.25,34c-.59,0-1.16,0-1.75,0s-1.16,0-1.75,0A34.05,34.05,0,0,1,94,184Zm74.42,21.94A45.68,45.68,0,0,0,174,184c0-42.9-41.16-68.09-42.91-69.14a6,6,0,0,0-6.18,0C123.16,115.91,82,141.1,82,184a45.68,45.68,0,0,0,5.58,21.94A74,74,0,0,1,54,144c0-59.83,59.62-103.26,74-112.86,14.39,9.6,74,53,74,112.86A74,74,0,0,1,168.42,205.94Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M173.79,51.48a221.25,221.25,0,0,0-41.67-34.34,8,8,0,0,0-8.24,0A221.25,221.25,0,0,0,82.21,51.48C54.59,80.48,40,112.47,40,144a88,88,0,0,0,176,0C216,112.47,201.41,80.48,173.79,51.48ZM96,184c0-27.67,22.53-47.28,32-54.3,9.48,7,32,26.63,32,54.3a32,32,0,0,1-64,0Zm77.27,15.93A47.8,47.8,0,0,0,176,184c0-44-42.09-69.79-43.88-70.86a8,8,0,0,0-8.24,0C122.09,114.21,80,140,80,184a47.8,47.8,0,0,0,2.73,15.93A71.88,71.88,0,0,1,56,144c0-34.41,20.4-63.15,37.52-81.19A216.21,216.21,0,0,1,128,33.54a215.77,215.77,0,0,1,34.48,29.27C193.49,95.5,200,125,200,144A71.88,71.88,0,0,1,173.27,199.93Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M170.9,54.24a216.79,216.79,0,0,0-40.84-33.67,4,4,0,0,0-4.12,0A216.79,216.79,0,0,0,85.1,54.24C58.21,82.48,44,113.51,44,144a84,84,0,0,0,168,0C212,113.51,197.79,82.48,170.9,54.24ZM92,184c0-32.11,28.07-53.75,36-59.21,7.93,5.47,36,27.1,36,59.21a36,36,0,0,1-72,0Zm69.94,28A43.82,43.82,0,0,0,172,184c0-41.78-40.23-66.4-41.94-67.43a4,4,0,0,0-4.12,0C124.23,117.6,84,142.22,84,184a43.82,43.82,0,0,0,10.06,28A76.07,76.07,0,0,1,52,144c0-62.48,63.64-107.17,76-115.26,12.36,8.09,76,52.78,76,115.26A76.07,76.07,0,0,1,161.94,212Z",
                }),
            ),
        ],
    ]),
    v8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M215.64,128a44,44,0,0,0-43.82-75.9,44,44,0,0,0-87.64,0A44,44,0,0,0,40.36,128a44,44,0,0,0,43.82,75.89,44,44,0,0,0,87.64,0A44,44,0,0,0,215.64,128ZM108,128a20,20,0,1,1,20,20A20,20,0,0,1,108,128Zm72.35-53.32a20,20,0,1,1,20,34.64c-2.65,1.53-10.52,4.88-30.1,6.42a44.08,44.08,0,0,0-10.52-18.18C170.86,81.36,177.7,76.21,180.35,74.68ZM128,36a20,20,0,0,1,20,20c0,3.06-1,11.55-9.49,29.28a43.79,43.79,0,0,0-21,0C109,67.55,108,59.06,108,56A20,20,0,0,1,128,36ZM48.33,82a20,20,0,0,1,27.32-7.32c2.65,1.53,9.49,6.68,20.62,22.88a44.08,44.08,0,0,0-10.52,18.18c-19.58-1.54-27.45-4.89-30.1-6.42A20,20,0,0,1,48.33,82Zm27.32,99.32a20,20,0,1,1-20-34.64c2.65-1.53,10.52-4.88,30.1-6.42a44.08,44.08,0,0,0,10.52,18.18C85.14,174.64,78.3,179.79,75.65,181.32ZM128,220a20,20,0,0,1-20-20c0-3.06,1-11.55,9.49-29.28a43.79,43.79,0,0,0,21,0C147,188.45,148,196.94,148,200A20,20,0,0,1,128,220Zm79.67-46a20,20,0,0,1-27.32,7.32c-2.65-1.53-9.49-6.68-20.62-22.88a44.08,44.08,0,0,0,10.52-18.18c19.58,1.54,27.45,4.89,30.1,6.42A20,20,0,0,1,207.67,174Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M206.35,136.29c-8.87-5.13-24.46-7.38-39.4-8.29,14.94-.91,30.53-3.16,39.4-8.29a32,32,0,1,0-32-55.42c-8.87,5.12-18.61,17.48-26.87,30C154.17,80.87,160,66.25,160,56a32,32,0,0,0-64,0c0,10.25,5.83,24.87,12.52,38.26-8.26-12.49-18-24.85-26.87-30a32,32,0,1,0-32,55.42c8.87,5.13,24.46,7.38,39.4,8.29-14.94.91-30.53,3.16-39.4,8.29a32,32,0,1,0,32,55.42c8.87-5.12,18.61-17.48,26.87-30C101.83,175.13,96,189.75,96,200a32,32,0,0,0,64,0c0-10.25-5.83-24.87-12.52-38.26,8.26,12.49,18,24.85,26.87,30a32,32,0,1,0,32-55.42ZM155.71,144A32,32,0,1,1,160,128,31.74,31.74,0,0,1,155.71,144Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M210.35,129.36c-.81-.47-1.7-.92-2.62-1.36.92-.44,1.81-.89,2.62-1.36a40,40,0,1,0-40-69.28c-.81.47-1.65,1-2.48,1.59.08-1,.13-2,.13-3a40,40,0,0,0-80,0c0,.94,0,1.94.13,3-.83-.57-1.67-1.12-2.48-1.59a40,40,0,1,0-40,69.28c.81.47,1.7.92,2.62,1.36-.92.44-1.81.89-2.62,1.36a40,40,0,1,0,40,69.28c.81-.47,1.65-1,2.48-1.59-.08,1-.13,2-.13,2.95a40,40,0,0,0,80,0c0-.94-.05-1.94-.13-2.95.83.57,1.67,1.12,2.48,1.59A39.79,39.79,0,0,0,190.29,204a40.43,40.43,0,0,0,10.42-1.38,40,40,0,0,0,9.64-73.28ZM104,128a24,24,0,1,1,24,24A24,24,0,0,1,104,128Zm74.35-56.79a24,24,0,1,1,24,41.57c-6.27,3.63-18.61,6.13-35.16,7.19A40,40,0,0,0,154.53,98.1C163.73,84.28,172.08,74.84,178.35,71.21ZM128,32a24,24,0,0,1,24,24c0,7.24-4,19.19-11.36,34.06a39.81,39.81,0,0,0-25.28,0C108,75.19,104,63.24,104,56A24,24,0,0,1,128,32ZM44.86,80a24,24,0,0,1,32.79-8.79c6.27,3.63,14.62,13.07,23.82,26.89A40,40,0,0,0,88.81,120c-16.55-1.06-28.89-3.56-35.16-7.18A24,24,0,0,1,44.86,80ZM77.65,184.79a24,24,0,1,1-24-41.57c6.27-3.63,18.61-6.13,35.16-7.19a40,40,0,0,0,12.66,21.87C92.27,171.72,83.92,181.16,77.65,184.79ZM128,224a24,24,0,0,1-24-24c0-7.24,4-19.19,11.36-34.06a39.81,39.81,0,0,0,25.28,0C148,180.81,152,192.76,152,200A24,24,0,0,1,128,224Zm83.14-48a24,24,0,0,1-32.79,8.79c-6.27-3.63-14.62-13.07-23.82-26.89A40,40,0,0,0,167.19,136c16.55,1.06,28.89,3.56,35.16,7.18A24,24,0,0,1,211.14,176Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M210.35,129.36c-.81-.47-1.7-.92-2.62-1.36.92-.44,1.81-.89,2.62-1.36a40,40,0,1,0-40-69.28c-.81.47-1.65,1-2.48,1.59.08-1,.13-2,.13-3a40,40,0,0,0-80,0c0,.94,0,1.94.13,3-.83-.57-1.67-1.12-2.48-1.59a40,40,0,1,0-40,69.28c.81.47,1.7.92,2.62,1.36-.92.44-1.81.89-2.62,1.36a40,40,0,1,0,40,69.28c.81-.47,1.65-1,2.48-1.59-.08,1-.13,2-.13,2.95a40,40,0,0,0,80,0c0-.94-.05-1.94-.13-2.95.83.57,1.67,1.12,2.48,1.59A39.79,39.79,0,0,0,190.29,204a40.43,40.43,0,0,0,10.42-1.38,40,40,0,0,0,9.64-73.28ZM128,156a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M209.35,131.09a42.24,42.24,0,0,0-6.82-3.09,42.24,42.24,0,0,0,6.82-3.09,38,38,0,1,0-38-65.82,43.33,43.33,0,0,0-6.08,4.36A42.94,42.94,0,0,0,166,56a38,38,0,0,0-76,0,42.94,42.94,0,0,0,.73,7.45,43.33,43.33,0,0,0-6.08-4.36,38,38,0,0,0-38,65.82A42.24,42.24,0,0,0,53.47,128a42.24,42.24,0,0,0-6.82,3.09,38,38,0,0,0,9.16,69.62,38.53,38.53,0,0,0,9.9,1.31,37.82,37.82,0,0,0,18.94-5.11,43.33,43.33,0,0,0,6.08-4.36A42.94,42.94,0,0,0,90,200a38,38,0,0,0,76,0,42.94,42.94,0,0,0-.73-7.45,43.33,43.33,0,0,0,6.08,4.36A37.82,37.82,0,0,0,190.29,202a38.53,38.53,0,0,0,9.9-1.31,38,38,0,0,0,9.16-69.62Zm-32-61.61a26,26,0,1,1,26,45c-4.77,2.75-14.92,6.15-36.4,7.47l-1.44-.08A38,38,0,0,0,152,98.58l.66-1.31C164.56,79.33,172.58,72.24,177.35,69.48ZM128,154a26,26,0,1,1,26-26A26,26,0,0,1,128,154Zm0-124a26,26,0,0,1,26,26c0,5.51-2.13,16-11.73,35.27-.26.4-.53.8-.79,1.21a37.88,37.88,0,0,0-27,0l-.79-1.22C104.13,72,102,61.51,102,56A26,26,0,0,1,128,30ZM52.65,114.52a26,26,0,0,1,26-45c4.77,2.76,12.79,9.85,24.67,27.79l.66,1.31a38,38,0,0,0-13.49,23.33l-1.44.08C67.57,120.67,57.42,117.27,52.65,114.52Zm26,72a26,26,0,0,1-26-45c4.77-2.75,14.92-6.15,36.4-7.47l1.44.08A38,38,0,0,0,104,157.42l-.66,1.31C91.44,176.67,83.42,183.76,78.65,186.52ZM128,226a26,26,0,0,1-26-26c0-5.51,2.13-16,11.73-35.27.26-.4.53-.8.79-1.21a37.88,37.88,0,0,0,27,0l.79,1.22C151.87,184,154,194.49,154,200A26,26,0,0,1,128,226Zm84.87-49a26,26,0,0,1-35.52,9.52c-4.77-2.76-12.79-9.85-24.67-27.79l-.66-1.31a38,38,0,0,0,13.49-23.33L167,134c21.48,1.32,31.63,4.72,36.4,7.47A26,26,0,0,1,212.87,177Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M210.35,129.36c-.81-.47-1.7-.92-2.62-1.36.92-.44,1.81-.89,2.62-1.36a40,40,0,1,0-40-69.28c-.81.47-1.65,1-2.48,1.59.08-1,.13-2,.13-3a40,40,0,0,0-80,0c0,.94,0,1.94.13,3-.83-.57-1.67-1.12-2.48-1.59a40,40,0,1,0-40,69.28c.81.47,1.7.92,2.62,1.36-.92.44-1.81.89-2.62,1.36a40,40,0,1,0,40,69.28c.81-.47,1.65-1,2.48-1.59-.08,1-.13,2-.13,2.95a40,40,0,0,0,80,0c0-.94-.05-1.94-.13-2.95.83.57,1.67,1.12,2.48,1.59A39.79,39.79,0,0,0,190.29,204a40.43,40.43,0,0,0,10.42-1.38,40,40,0,0,0,9.64-73.28ZM104,128a24,24,0,1,1,24,24A24,24,0,0,1,104,128Zm74.35-56.79a24,24,0,1,1,24,41.57c-6.27,3.63-18.61,6.13-35.16,7.19A40,40,0,0,0,154.53,98.1C163.73,84.28,172.08,74.84,178.35,71.21ZM128,32a24,24,0,0,1,24,24c0,7.24-4,19.19-11.36,34.06a39.81,39.81,0,0,0-25.28,0C108,75.19,104,63.24,104,56A24,24,0,0,1,128,32ZM44.86,80a24,24,0,0,1,32.79-8.79c6.27,3.63,14.62,13.07,23.82,26.89A40,40,0,0,0,88.81,120c-16.55-1.06-28.89-3.56-35.16-7.18A24,24,0,0,1,44.86,80ZM77.65,184.79a24,24,0,1,1-24-41.57c6.27-3.63,18.61-6.13,35.16-7.19a40,40,0,0,0,12.66,21.87C92.27,171.72,83.92,181.16,77.65,184.79ZM128,224a24,24,0,0,1-24-24c0-7.24,4-19.19,11.36-34.06a39.81,39.81,0,0,0,25.28,0C148,180.81,152,192.76,152,200A24,24,0,0,1,128,224Zm83.14-48a24,24,0,0,1-32.79,8.79c-6.27-3.63-14.62-13.07-23.82-26.89A40,40,0,0,0,167.19,136c16.55,1.06,28.89,3.56,35.16,7.18A24,24,0,0,1,211.14,176Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208.35,132.82A50.92,50.92,0,0,0,195.76,128a50.92,50.92,0,0,0,12.59-4.82,36,36,0,0,0-36-62.36,51.54,51.54,0,0,0-10.47,8.5A51.27,51.27,0,0,0,164,56a36,36,0,0,0-72,0,51.27,51.27,0,0,0,2.12,13.32,51.54,51.54,0,0,0-10.47-8.5,36,36,0,1,0-36,62.36A50.92,50.92,0,0,0,60.24,128a50.92,50.92,0,0,0-12.59,4.82,36,36,0,1,0,36,62.36,51.54,51.54,0,0,0,10.47-8.5A51.27,51.27,0,0,0,92,200a36,36,0,0,0,72,0,51.27,51.27,0,0,0-2.12-13.32,51.54,51.54,0,0,0,10.47,8.5,35.85,35.85,0,0,0,18,4.84,36.24,36.24,0,0,0,9.37-1.25,36,36,0,0,0,8.68-66Zm-32-65.07a28,28,0,0,1,28,48.5c-6.95,4-19.82,6.66-37.44,7.74l-3.16-.17a36,36,0,0,0-14.26-24.68c.49-1,1-1.9,1.44-2.84C160.67,81.59,169.4,71.77,176.35,67.75ZM128,156a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm0-128a28,28,0,0,1,28,28c0,8-4.14,20.5-12,36.3-.58.87-1.15,1.75-1.73,2.65a35.94,35.94,0,0,0-28.52,0c-.58-.9-1.15-1.78-1.73-2.65C104.14,76.5,100,64,100,56A28,28,0,0,1,128,28ZM51.65,116.25a28,28,0,1,1,28-48.5c6.95,4,15.68,13.84,25.42,28.55.47.94,1,1.88,1.44,2.84a36,36,0,0,0-14.26,24.68l-3.16.17C71.47,122.91,58.6,120.26,51.65,116.25Zm28,72a28,28,0,1,1-28-48.5c7-4,19.82-6.66,37.44-7.74l3.16.17a36,36,0,0,0,14.26,24.68c-.49,1-1,1.9-1.44,2.84C95.33,174.41,86.6,184.23,79.65,188.25ZM128,228a28,28,0,0,1-28-28c0-8,4.14-20.5,12-36.3.58-.87,1.15-1.75,1.73-2.65a35.94,35.94,0,0,0,28.52,0c.58.9,1.15,1.78,1.73,2.65,7.87,15.8,12,28.27,12,36.3A28,28,0,0,1,128,228Zm86.6-50a28,28,0,0,1-38.25,10.25c-6.95-4-15.68-13.84-25.42-28.55-.47-.94-1-1.88-1.44-2.84a36,36,0,0,0,14.26-24.68l3.16-.17c17.62,1.08,30.49,3.73,37.44,7.74A28,28,0,0,1,214.6,178Z",
                }),
            ),
        ],
    ]),
    F8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M68,88V40a12,12,0,0,1,24,0V88a12,12,0,0,1-24,0ZM220,40V224a12,12,0,0,1-24,0V180H152a12,12,0,0,1-12-12,273.23,273.23,0,0,1,7.33-57.82C157.42,68.42,176.76,40.33,203.27,29A12,12,0,0,1,220,40ZM196,62.92C182.6,77,175,98,170.77,115.38A254.41,254.41,0,0,0,164.55,156H196ZM128,39A12,12,0,0,0,104,41l4,47.46a28,28,0,0,1-56,0L56,41A12,12,0,1,0,32,39L28,87c0,.34,0,.67,0,1a52.1,52.1,0,0,0,40,50.59V224a12,12,0,0,0,24,0V138.59A52.1,52.1,0,0,0,132,88c0-.33,0-.66,0-1Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M208,40V168H152S152,64,208,40Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40Zm-96.11-1.31a8,8,0,1,0-15.78,2.63L111.89,88H88V40a8,8,0,0,0-16,0V88H48.11l7.78-46.68a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M74,88V40a6,6,0,0,1,12,0V88a6,6,0,0,1-12,0ZM214,40V224a6,6,0,0,1-12,0V174H152a6,6,0,0,1-6-6c0-4.41.68-108.25,59.64-133.51A6,6,0,0,1,214,40ZM202,50c-36.79,24.29-42.82,91.48-43.81,112H202ZM117.92,39a6,6,0,1,0-11.84,2L114,88.48a34,34,0,0,1-68,0L53.92,41a6,6,0,0,0-11.84-2l-8,48A6.61,6.61,0,0,0,34,88a46.06,46.06,0,0,0,40,45.6V224a6,6,0,0,0,12,0V133.6A46.06,46.06,0,0,0,126,88a6.61,6.61,0,0,0-.08-1Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M76,88V40a4,4,0,0,1,8,0V88a4,4,0,0,1-8,0ZM212,40V224a4,4,0,0,1-8,0V172H152a4,4,0,0,1-4-4,264.27,264.27,0,0,1,7.11-55.94c9.47-39.22,27.21-65.41,51.31-75.74A4,4,0,0,1,212,40Zm-8,6.46C162.25,70.33,156.81,145.75,156.1,164H204Zm-88-7.12a4,4,0,0,0-7.9,1.32l8,47.66a36,36,0,0,1-72,0l8-47.66a4,4,0,0,0-7.9-1.32l-8,48A4.89,4.89,0,0,0,36,88a44.06,44.06,0,0,0,40,43.81V224a4,4,0,0,0,8,0V131.81A44.06,44.06,0,0,0,124,88a4.89,4.89,0,0,0,0-.66Z",
                }),
            ),
        ],
    ]),
    f8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,110H152a6,6,0,0,1,0-12h24a6,6,0,0,1,0,12ZM104,98H94V88a6,6,0,0,0-12,0V98H72a6,6,0,0,0,0,12H82v10a6,6,0,0,0,12,0V110h10a6,6,0,0,0,0-12ZM239.84,199.5A34,34,0,0,1,212,214,34.11,34.11,0,0,1,188,204.05l-.26-.28L147.38,158H108.62L68.31,203.76,68,204A34,34,0,0,1,44,214a34,34,0,0,1-33.46-39.91s0-.06,0-.1L26.9,89.88A57.89,57.89,0,0,1,83.89,42H172a58.07,58.07,0,0,1,57.05,47.63c0,.07,0,.12,0,.19L245.46,174s0,.07,0,.11A33.75,33.75,0,0,1,239.84,199.5ZM172,146a46,46,0,0,0,0-92H83.89A45.9,45.9,0,0,0,38.71,92a.36.36,0,0,0,0,.1L22.33,176.23a22,22,0,0,0,37.11,19.45l42-47.65a6,6,0,0,1,4.5-2Zm61.67,30.23-9.79-50.35A58.06,58.06,0,0,1,172,158h-8.63l33.19,37.68a22,22,0,0,0,37.11-19.45Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,108H152a4,4,0,0,1,0-8h24a4,4,0,0,1,0,8Zm-72-8H92V88a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V108h12a4,4,0,0,0,0-8Zm134.21,98.36a32,32,0,0,1-48.84,4.27l-.17-.18L148.29,156H107.72L66.81,202.44l-.18.19A32.08,32.08,0,0,1,44,212a32,32,0,0,1-31.5-37.56L28.87,90.21A55.87,55.87,0,0,1,83.89,44H172a56.07,56.07,0,0,1,55.1,46.1.29.29,0,0,1,0,.1l16.37,84.16A31.86,31.86,0,0,1,238.21,198.36ZM172,148a48,48,0,1,0,0-96H83.9A47.9,47.9,0,0,0,36.74,91.67L20.36,175.9a24,24,0,0,0,19.48,27.73,24,24,0,0,0,21-6.58l42-47.69a4,4,0,0,1,3-1.36Zm63.63,27.83-11-56.66A56.09,56.09,0,0,1,172,156H159l36.16,41.06a24,24,0,0,0,40.52-21.23Z",
                }),
            ),
        ],
    ]),
    w8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm92-27.21v-1.58l14-17.51a12,12,0,0,0,2.23-10.59A111.75,111.75,0,0,0,225,71.89,12,12,0,0,0,215.89,66L193.61,63.5l-1.11-1.11L190,40.1A12,12,0,0,0,184.11,31a111.67,111.67,0,0,0-27.23-11.27A12,12,0,0,0,146.3,22L128.79,36h-1.58L109.7,22a12,12,0,0,0-10.59-2.23A111.75,111.75,0,0,0,71.89,31.05,12,12,0,0,0,66,40.11L63.5,62.39,62.39,63.5,40.1,66A12,12,0,0,0,31,71.89,111.67,111.67,0,0,0,19.77,99.12,12,12,0,0,0,22,109.7l14,17.51v1.58L22,146.3a12,12,0,0,0-2.23,10.59,111.75,111.75,0,0,0,11.29,27.22A12,12,0,0,0,40.11,190l22.28,2.48,1.11,1.11L66,215.9A12,12,0,0,0,71.89,225a111.67,111.67,0,0,0,27.23,11.27A12,12,0,0,0,109.7,234l17.51-14h1.58l17.51,14a12,12,0,0,0,10.59,2.23A111.75,111.75,0,0,0,184.11,225a12,12,0,0,0,5.91-9.06l2.48-22.28,1.11-1.11L215.9,190a12,12,0,0,0,9.06-5.91,111.67,111.67,0,0,0,11.27-27.23A12,12,0,0,0,234,146.3Zm-24.12-4.89a70.1,70.1,0,0,1,0,8.2,12,12,0,0,0,2.61,8.22l12.84,16.05A86.47,86.47,0,0,1,207,166.86l-20.43,2.27a12,12,0,0,0-7.65,4,69,69,0,0,1-5.8,5.8,12,12,0,0,0-4,7.65L166.86,207a86.47,86.47,0,0,1-10.49,4.35l-16.05-12.85a12,12,0,0,0-7.5-2.62c-.24,0-.48,0-.72,0a70.1,70.1,0,0,1-8.2,0,12.06,12.06,0,0,0-8.22,2.6L99.63,211.33A86.47,86.47,0,0,1,89.14,207l-2.27-20.43a12,12,0,0,0-4-7.65,69,69,0,0,1-5.8-5.8,12,12,0,0,0-7.65-4L49,166.86a86.47,86.47,0,0,1-4.35-10.49l12.84-16.05a12,12,0,0,0,2.61-8.22,70.1,70.1,0,0,1,0-8.2,12,12,0,0,0-2.61-8.22L44.67,99.63A86.47,86.47,0,0,1,49,89.14l20.43-2.27a12,12,0,0,0,7.65-4,69,69,0,0,1,5.8-5.8,12,12,0,0,0,4-7.65L89.14,49a86.47,86.47,0,0,1,10.49-4.35l16.05,12.85a12.06,12.06,0,0,0,8.22,2.6,70.1,70.1,0,0,1,8.2,0,12,12,0,0,0,8.22-2.6l16.05-12.85A86.47,86.47,0,0,1,166.86,49l2.27,20.43a12,12,0,0,0,4,7.65,69,69,0,0,1,5.8,5.8,12,12,0,0,0,7.65,4L207,89.14a86.47,86.47,0,0,1,4.35,10.49l-12.84,16.05A12,12,0,0,0,195.88,123.9Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM214,130.84c.06-1.89.06-3.79,0-5.68L229.33,106a6,6,0,0,0,1.11-5.29A105.34,105.34,0,0,0,219.76,74.9a6,6,0,0,0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6,6,0,0,0-3-4.53,105.65,105.65,0,0,0-25.77-10.66A6,6,0,0,0,150,26.68l-19.2,15.37c-1.89-.06-3.79-.06-5.68,0L106,26.67a6,6,0,0,0-5.29-1.11A105.34,105.34,0,0,0,74.9,36.24a6,6,0,0,0-3,4.53L69.23,65.22q-2.07,1.94-4,4L40.76,72a6,6,0,0,0-4.53,3,105.65,105.65,0,0,0-10.66,25.77A6,6,0,0,0,26.68,106l15.37,19.2c-.06,1.89-.06,3.79,0,5.68L26.67,150.05a6,6,0,0,0-1.11,5.29A105.34,105.34,0,0,0,36.24,181.1a6,6,0,0,0,4.53,3l24.45,2.71q1.94,2.07,4,4L72,215.24a6,6,0,0,0,3,4.53,105.65,105.65,0,0,0,25.77,10.66,6,6,0,0,0,5.29-1.11L125.16,214c1.89.06,3.79.06,5.68,0l19.21,15.38a6,6,0,0,0,3.75,1.31,6.2,6.2,0,0,0,1.54-.2,105.34,105.34,0,0,0,25.76-10.68,6,6,0,0,0,3-4.53l2.71-24.45q2.07-1.93,4-4l24.46-2.72a6,6,0,0,0,4.53-3,105.49,105.49,0,0,0,10.66-25.77,6,6,0,0,0-1.11-5.29Zm-3.1,41.63-23.64,2.63a6,6,0,0,0-3.82,2,75.14,75.14,0,0,1-6.31,6.31,6,6,0,0,0-2,3.82l-2.63,23.63A94.28,94.28,0,0,1,155.14,218l-18.57-14.86a6,6,0,0,0-3.75-1.31h-.36a78.07,78.07,0,0,1-8.92,0,6,6,0,0,0-4.11,1.3L100.87,218a94.13,94.13,0,0,1-17.34-7.17L80.9,187.21a6,6,0,0,0-2-3.82,75.14,75.14,0,0,1-6.31-6.31,6,6,0,0,0-3.82-2l-23.63-2.63A94.28,94.28,0,0,1,38,155.14l14.86-18.57a6,6,0,0,0,1.3-4.11,78.07,78.07,0,0,1,0-8.92,6,6,0,0,0-1.3-4.11L38,100.87a94.13,94.13,0,0,1,7.17-17.34L68.79,80.9a6,6,0,0,0,3.82-2,75.14,75.14,0,0,1,6.31-6.31,6,6,0,0,0,2-3.82l2.63-23.63A94.28,94.28,0,0,1,100.86,38l18.57,14.86a6,6,0,0,0,4.11,1.3,78.07,78.07,0,0,1,8.92,0,6,6,0,0,0,4.11-1.3L155.13,38a94.13,94.13,0,0,1,17.34,7.17l2.63,23.64a6,6,0,0,0,2,3.82,75.14,75.14,0,0,1,6.31,6.31,6,6,0,0,0,3.82,2l23.63,2.63A94.28,94.28,0,0,1,218,100.86l-14.86,18.57a6,6,0,0,0-1.3,4.11,78.07,78.07,0,0,1,0,8.92,6,6,0,0,0,1.3,4.11L218,155.13A94.13,94.13,0,0,1,210.85,172.47Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm83.93-32.49q.13-3.51,0-7l15.83-19.79a4,4,0,0,0,.75-3.53A103.64,103.64,0,0,0,218,75.9a4,4,0,0,0-3-2l-25.19-2.8c-1.58-1.71-3.24-3.37-4.95-4.95L182.07,41a4,4,0,0,0-2-3A104,104,0,0,0,154.82,27.5a4,4,0,0,0-3.53.74L131.51,44.07q-3.51-.14-7,0L104.7,28.24a4,4,0,0,0-3.53-.75A103.64,103.64,0,0,0,75.9,38a4,4,0,0,0-2,3l-2.8,25.19c-1.71,1.58-3.37,3.24-4.95,4.95L41,73.93a4,4,0,0,0-3,2A104,104,0,0,0,27.5,101.18a4,4,0,0,0,.74,3.53l15.83,19.78q-.14,3.51,0,7L28.24,151.3a4,4,0,0,0-.75,3.53A103.64,103.64,0,0,0,38,180.1a4,4,0,0,0,3,2l25.19,2.8c1.58,1.71,3.24,3.37,4.95,4.95l2.8,25.2a4,4,0,0,0,2,3,104,104,0,0,0,25.28,10.46,4,4,0,0,0,3.53-.74l19.78-15.83q3.51.13,7,0l19.79,15.83a4,4,0,0,0,2.5.88,4,4,0,0,0,1-.13A103.64,103.64,0,0,0,180.1,218a4,4,0,0,0,2-3l2.8-25.19c1.71-1.58,3.37-3.24,4.95-4.95l25.2-2.8a4,4,0,0,0,3-2,104,104,0,0,0,10.46-25.28,4,4,0,0,0-.74-3.53Zm.17,42.83-24.67,2.74a4,4,0,0,0-2.55,1.32,76.2,76.2,0,0,1-6.48,6.48,4,4,0,0,0-1.32,2.55l-2.74,24.66a95.45,95.45,0,0,1-19.64,8.15l-19.38-15.51a4,4,0,0,0-2.5-.87h-.24a73.67,73.67,0,0,1-9.16,0,4,4,0,0,0-2.74.87l-19.37,15.5a95.33,95.33,0,0,1-19.65-8.13l-2.74-24.67a4,4,0,0,0-1.32-2.55,76.2,76.2,0,0,1-6.48-6.48,4,4,0,0,0-2.55-1.32l-24.66-2.74a95.45,95.45,0,0,1-8.15-19.64l15.51-19.38a4,4,0,0,0,.87-2.74,77.76,77.76,0,0,1,0-9.16,4,4,0,0,0-.87-2.74l-15.5-19.37A95.33,95.33,0,0,1,43.9,81.66l24.67-2.74a4,4,0,0,0,2.55-1.32,76.2,76.2,0,0,1,6.48-6.48,4,4,0,0,0,1.32-2.55l2.74-24.66a95.45,95.45,0,0,1,19.64-8.15l19.38,15.51a4,4,0,0,0,2.74.87,73.67,73.67,0,0,1,9.16,0,4,4,0,0,0,2.74-.87l19.37-15.5a95.33,95.33,0,0,1,19.65,8.13l2.74,24.67a4,4,0,0,0,1.32,2.55,76.2,76.2,0,0,1,6.48,6.48,4,4,0,0,0,2.55,1.32l24.66,2.74a95.45,95.45,0,0,1,8.15,19.64l-15.51,19.38a4,4,0,0,0-.87,2.74,77.76,77.76,0,0,1,0,9.16,4,4,0,0,0,.87,2.74l15.5,19.37A95.33,95.33,0,0,1,212.1,174.34Z",
                }),
            ),
        ],
    ]),
    k8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z",
                }),
            ),
        ],
    ]),
    C8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,68H190.06A33.82,33.82,0,0,0,196,49.69,36.62,36.62,0,0,0,158.31,12,33.44,33.44,0,0,0,134,23.25a54.65,54.65,0,0,0-6,8.3,54.65,54.65,0,0,0-6-8.3A33.44,33.44,0,0,0,97.69,12,36.62,36.62,0,0,0,60,49.69,33.82,33.82,0,0,0,65.94,68H40A20,20,0,0,0,20,88v32a20,20,0,0,0,16,19.6V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V139.6A20,20,0,0,0,236,120V88A20,20,0,0,0,216,68Zm-4,48H140V92h72ZM152,39.17A9.59,9.59,0,0,1,159,36h.35A12.62,12.62,0,0,1,172,49,9.59,9.59,0,0,1,168.83,56c-6.9,6.12-18.25,9.26-27.63,10.76C142.7,57.42,145.84,46.07,152,39.17ZM87.7,39.7A12.8,12.8,0,0,1,96.61,36H97A9.59,9.59,0,0,1,104,39.17c6.12,6.9,9.26,18.24,10.75,27.61C105.45,65.27,94,62.13,87.17,56A9.59,9.59,0,0,1,84,49,12.72,12.72,0,0,1,87.7,39.7ZM44,92h72v24H44Zm16,48h56v56H60Zm80,56V140h56v56Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16h60a4,4,0,0,0,4-4V120H40V88h80v32h16V88h80v32H136v92a4,4,0,0,0,4,4h60a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM84.51,59a13.69,13.69,0,0,1-4.5-10A16.62,16.62,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92C109.71,70.39,94,67.43,84.51,59Zm87,0c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08,13.69,13.69,0,0,1,171.49,59Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,74H174.74a46.41,46.41,0,0,0,6-4.48,27.56,27.56,0,0,0,9.22-20A30.63,30.63,0,0,0,158.5,18a27.56,27.56,0,0,0-20,9.22A57.1,57.1,0,0,0,128,45.76a57.1,57.1,0,0,0-10.48-18.53A27.56,27.56,0,0,0,97.5,18,30.63,30.63,0,0,0,66,49.51a27.56,27.56,0,0,0,9.22,20,45.74,45.74,0,0,0,6,4.48H40A14,14,0,0,0,26,88v32a14,14,0,0,0,14,14h2v66a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V134h2a14,14,0,0,0,14-14V88A14,14,0,0,0,216,74ZM135.77,63c2.25-12.12,6.29-21.75,11.69-27.85A15.68,15.68,0,0,1,158.86,30h.55A18.6,18.6,0,0,1,178,49.14a15.68,15.68,0,0,1-5.18,11.4C162.1,70,143.92,72.83,134.34,73.65,134.59,70.76,135,67.08,135.77,63ZM83.45,35.45A18.69,18.69,0,0,1,96.59,30h.55a15.68,15.68,0,0,1,11.4,5.18C118,45.9,120.83,64.08,121.65,73.66c-2.89-.25-6.57-.68-10.61-1.43C98.92,70,89.29,65.94,83.19,60.53A15.64,15.64,0,0,1,78,49.14,18.65,18.65,0,0,1,83.45,35.45ZM38,120V88a2,2,0,0,1,2-2h82v36H40A2,2,0,0,1,38,120Zm16,80V134h68v68H56A2,2,0,0,1,54,200Zm148,0a2,2,0,0,1-2,2H134V134h68Zm16-80a2,2,0,0,1-2,2H134V86h82a2,2,0,0,1,2,2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,76H166.81a50.54,50.54,0,0,0,12.63-8A25.53,25.53,0,0,0,188,49.44,28.62,28.62,0,0,0,158.56,20,25.53,25.53,0,0,0,140,28.56c-5.91,6.67-9.63,15.36-12,23.69-2.35-8.33-6.07-17-12-23.69A25.53,25.53,0,0,0,97.44,20,28.62,28.62,0,0,0,68,49.44,25.53,25.53,0,0,0,76.56,68a50.54,50.54,0,0,0,12.63,8H40A12,12,0,0,0,28,88v32a12,12,0,0,0,12,12h4v68a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V132h4a12,12,0,0,0,12-12V88A12,12,0,0,0,216,76ZM146,33.86A17.59,17.59,0,0,1,158.8,28h.61A20.62,20.62,0,0,1,180,49.2,17.6,17.6,0,0,1,174.14,62c-12.09,10.7-33.07,13.21-42,13.79C132.76,66.93,135.26,46,146,33.86ZM76,49.2A20.62,20.62,0,0,1,96.59,28h.61A17.59,17.59,0,0,1,110,33.86c10.71,12.09,13.21,33.07,13.79,42-8.89-.58-29.87-3.09-42-13.79A17.6,17.6,0,0,1,76,49.2ZM36,120V88a4,4,0,0,1,4-4h84v40H40A4,4,0,0,1,36,120Zm16,80V132h72v72H56A4,4,0,0,1,52,200Zm152,0a4,4,0,0,1-4,4H132V132h72Zm16-80a4,4,0,0,1-4,4H132V84h84a4,4,0,0,1,4,4Z",
                }),
            ),
        ],
    ]),
    $8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,187a113.4,113.4,0,0,1-20.39-35h40.82a116.94,116.94,0,0,1-10,20.77A108.61,108.61,0,0,1,128,207Zm-26.49-59a135.42,135.42,0,0,1,0-40h53a135.42,135.42,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.25a160.63,160.63,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128Zm84-79a113.4,113.4,0,0,1,20.39,35H107.59a116.94,116.94,0,0,1,10-20.77A108.61,108.61,0,0,1,128,49Zm50.73,59h30.82a83.52,83.52,0,0,1,0,40H178.75a160.63,160.63,0,0,0,0-40Zm20.77-24H173.71a140.82,140.82,0,0,0-15.5-34.36A84.51,84.51,0,0,1,199.52,84ZM97.79,49.64A140.82,140.82,0,0,0,82.29,84H56.48A84.51,84.51,0,0,1,97.79,49.64ZM56.48,172H82.29a140.82,140.82,0,0,0,15.5,34.36A84.51,84.51,0,0,1,56.48,172Zm101.73,34.36A140.82,140.82,0,0,0,173.71,172h25.81A84.51,84.51,0,0,1,158.21,206.36Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm78.36,64H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM216,128a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM128,43a115.27,115.27,0,0,1,26,45H102A115.11,115.11,0,0,1,128,43ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48Zm50.35,61.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm81.57,64H169.19a132.58,132.58,0,0,0-25.73-50.67A90.29,90.29,0,0,1,209.57,90ZM218,128a89.7,89.7,0,0,1-3.83,26H171.81a155.43,155.43,0,0,0,0-52h42.36A89.7,89.7,0,0,1,218,128Zm-90,87.83a110,110,0,0,1-15.19-19.45A124.24,124.24,0,0,1,99.35,166h57.3a124.24,124.24,0,0,1-13.46,30.38A110,110,0,0,1,128,215.83ZM96.45,154a139.18,139.18,0,0,1,0-52h63.1a139.18,139.18,0,0,1,0,52ZM38,128a89.7,89.7,0,0,1,3.83-26H84.19a155.43,155.43,0,0,0,0,52H41.83A89.7,89.7,0,0,1,38,128Zm90-87.83a110,110,0,0,1,15.19,19.45A124.24,124.24,0,0,1,156.65,90H99.35a124.24,124.24,0,0,1,13.46-30.38A110,110,0,0,1,128,40.17Zm-15.46-.84A132.58,132.58,0,0,0,86.81,90H46.43A90.29,90.29,0,0,1,112.54,39.33ZM46.43,166H86.81a132.58,132.58,0,0,0,25.73,50.67A90.29,90.29,0,0,1,46.43,166Zm97,50.67A132.58,132.58,0,0,0,169.19,166h40.38A90.29,90.29,0,0,1,143.46,216.67Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54C151,194.2,134.33,212.52,128,218.61ZM94.82,156a140.42,140.42,0,0,1,0-56h66.36a140.42,140.42,0,0,1,0,56ZM128,37.39c6.33,6.09,23,24.41,31.27,54.61H96.73C105,61.8,121.67,43.48,128,37.39ZM169.41,100h46.23a92.09,92.09,0,0,1,0,56H169.41a152.65,152.65,0,0,0,0-56Zm43.25-8h-45a129.39,129.39,0,0,0-29.19-55.4A92.25,92.25,0,0,1,212.66,92ZM117.54,36.6A129.39,129.39,0,0,0,88.35,92h-45A92.25,92.25,0,0,1,117.54,36.6ZM40.36,100H86.59a152.65,152.65,0,0,0,0,56H40.36a92.09,92.09,0,0,1,0-56Zm3,64h45a129.39,129.39,0,0,0,29.19,55.4A92.25,92.25,0,0,1,43.34,164Zm95.12,55.4A129.39,129.39,0,0,0,167.65,164h45A92.25,92.25,0,0,1,138.46,219.4Z",
                }),
            ),
        ],
    ]),
    x8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,152a35.77,35.77,0,0,0-16.46,4l-21.39-16.64A35.49,35.49,0,0,0,164,128.65l10.35-3.44A36,36,0,1,0,164,100c0,1.11.06,2.21.16,3.3l-7.78,2.59A36,36,0,0,0,128,92c-1,0-1.88,0-2.81.12l-4.45-10A36,36,0,1,0,96,92c1,0,1.88,0,2.81-.12l4.45,10a35.91,35.91,0,0,0-8.59,39.7L73.39,160.49a36,36,0,1,0,15.94,17.93l21.28-18.91a35.91,35.91,0,0,0,36.8-1.21L167,173.56A36,36,0,1,0,200,152Zm0-64a12,12,0,1,1-12,12A12,12,0,0,1,200,88ZM84,56A12,12,0,1,1,96,68,12,12,0,0,1,84,56ZM56,204a12,12,0,1,1,12-12A12,12,0,0,1,56,204Zm60-76a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm84,72a12,12,0,1,1,12-12A12,12,0,0,1,200,200Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32.59,32.59,0,0,0-5.27.44L115.89,81A32,32,0,1,0,96,88a32.59,32.59,0,0,0,5.27-.44l6.84,15.4a31.92,31.92,0,0,0-8.57,39.64L73.83,165.44a32.06,32.06,0,1,0,10.63,12l25.71-22.84a31.91,31.91,0,0,0,37.36-1.24l23.11,18A31.65,31.65,0,0,0,168,184a32,32,0,1,0,32-32Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM80,56A16,16,0,1,1,96,72,16,16,0,0,1,80,56ZM56,208a16,16,0,1,1,16-16A16,16,0,0,1,56,208Zm56-80a16,16,0,1,1,16,16A16,16,0,0,1,112,128Zm88,72a16,16,0,1,1,16-16A16,16,0,0,1,200,200Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32.59,32.59,0,0,0-5.27.44L115.89,81A32,32,0,1,0,96,88a32.59,32.59,0,0,0,5.27-.44l6.84,15.4a31.92,31.92,0,0,0-8.57,39.64L73.83,165.44a32.06,32.06,0,1,0,10.63,12l25.71-22.84a31.91,31.91,0,0,0,37.36-1.24l23.11,18A31.65,31.65,0,0,0,168,184a32,32,0,1,0,32-32Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM80,56A16,16,0,1,1,96,72,16,16,0,0,1,80,56ZM56,208a16,16,0,1,1,16-16A16,16,0,0,1,56,208Zm144-8a16,16,0,1,1,16-16A16,16,0,0,1,200,200Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,154a29.87,29.87,0,0,0-19.5,7.23L154.88,141.3A29.83,29.83,0,0,0,158,128a30.52,30.52,0,0,0-.22-3.6L174,119a30,30,0,1,0-4-15,30.52,30.52,0,0,0,.22,3.6L154,113a29.91,29.91,0,0,0-32.42-14.31l-8.14-18.3a30,30,0,1,0-11,4.88l8.14,18.3A29.92,29.92,0,0,0,102.06,143L74,168a30.08,30.08,0,1,0,8,9L110,152a29.91,29.91,0,0,0,37.47-1.23l25.62,19.93A30,30,0,1,0,200,154Zm0-68a18,18,0,1,1-18,18A18,18,0,0,1,200,86ZM78,56A18,18,0,1,1,96,74,18,18,0,0,1,78,56ZM56,210a18,18,0,1,1,18-18A18,18,0,0,1,56,210Zm72-64a18,18,0,1,1,18-18A18,18,0,0,1,128,146Zm72,56a18,18,0,1,1,18-18A18,18,0,0,1,200,202Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32.59,32.59,0,0,0-5.27.44L115.89,81A32,32,0,1,0,96,88a32.59,32.59,0,0,0,5.27-.44l6.84,15.4a31.92,31.92,0,0,0-8.57,39.64L73.83,165.44a32.06,32.06,0,1,0,10.63,12l25.71-22.84a31.91,31.91,0,0,0,37.36-1.24l23.11,18A31.65,31.65,0,0,0,168,184a32,32,0,1,0,32-32Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM80,56A16,16,0,1,1,96,72,16,16,0,0,1,80,56ZM56,208a16,16,0,1,1,16-16A16,16,0,0,1,56,208Zm56-80a16,16,0,1,1,16,16A16,16,0,0,1,112,128Zm88,72a16,16,0,1,1,16-16A16,16,0,0,1,200,200Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,156a27.87,27.87,0,0,0-19.4,7.84l-28.28-22A27.78,27.78,0,0,0,156,128a28.09,28.09,0,0,0-.45-5L175,116.55a28.07,28.07,0,1,0-2.53-7.58L153,115.45A28,28,0,0,0,128,100a27.68,27.68,0,0,0-7.6,1.06l-9.5-21.37A28,28,0,1,0,96,84a27.68,27.68,0,0,0,7.6-1.06l9.5,21.37a27.95,27.95,0,0,0-8.46,39.1L74,170.61a28,28,0,1,0,5.32,6l30.6-27.2a27.92,27.92,0,0,0,37.44-1.23l28.28,22A28,28,0,1,0,200,156Zm0-72a20,20,0,1,1-20,20A20,20,0,0,1,200,84ZM76,56A20,20,0,1,1,96,76,20,20,0,0,1,76,56ZM56,212a20,20,0,1,1,20-20A20,20,0,0,1,56,212Zm72-64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Zm72,56a20,20,0,1,1,20-20A20,20,0,0,1,200,204Z",
                }),
            ),
        ],
    ]),
    b8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.9,152.72l-39.7,14.44-35.74-14.3a12,12,0,0,0-8.92,0L108,167.08,72.46,152.86a12,12,0,0,0-8.56-.14l-44,16a12,12,0,0,0,8.2,22.56l8.12-2.95A44.06,44.06,0,0,0,80,228h96a44.05,44.05,0,0,0,44-44v-2.87l16.1-5.85a12,12,0,0,0-8.2-22.56ZM176,204H80a20,20,0,0,1-20-20v-4.32l7.8-2.84,35.74,14.3a12,12,0,0,0,8.92,0L148,176.92l35.54,14.22a12,12,0,0,0,8.56.14l2.89-1.06A20,20,0,0,1,176,204ZM12,128a12,12,0,0,1,12-12H232a12,12,0,0,1,0,24H24A12,12,0,0,1,12,128Zm36.2-24H207.8a20.36,20.36,0,0,0,16.38-8.29,19.59,19.59,0,0,0,2.88-17.65C216.12,43.88,175.39,20,128,20S39.89,43.87,28.94,78.05A19.56,19.56,0,0,0,31.82,95.7,20.32,20.32,0,0,0,48.2,104ZM128,44c33.7,0,63.61,14.85,74,36H54C64.4,58.85,94.31,44,128,44Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M188,176l20-7.27V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V167.27L68,160l40,16,40-16Zm27.82-89.72C209.32,55.55,172.48,32,128,32S46.68,55.55,40.18,86.28A8,8,0,0,0,48.07,96H207.93A8,8,0,0,0,215.82,86.28Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M35.58,98.06a16,16,0,0,1-3.23-13.44C39.78,49.5,80,24,128,24s88.22,25.5,95.65,60.62A16,16,0,0,1,207.93,104H48.07A16,16,0,0,1,35.58,98.06Zm193.68,54.42-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM24,136H232a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M48.07,102H207.93a14,14,0,0,0,13.76-17C214.45,50.83,175.05,26,128,26S41.55,50.83,34.31,85a14,14,0,0,0,13.76,17Zm-2-14.48C52,59.29,87.25,38,128,38S204,59.29,210,87.52a2,2,0,0,1-2,2.48H48.07a2,2,0,0,1-2-2.48ZM230,154.36,188.1,169.58l-37.87-15.15a6,6,0,0,0-4.46,0L108,169.54,70.23,154.43a6,6,0,0,0-4.28-.07l-44,16A6,6,0,0,0,24,182a6.11,6.11,0,0,0,2.05-.36l16-5.8V184a38,38,0,0,0,38,38h96a38,38,0,0,0,38-38V172.93l20.05-7.29a6,6,0,0,0-4.1-11.28ZM202,184a26,26,0,0,1-26,26H80a26,26,0,0,1-26-26V171.48l13.9-5.06,37.87,15.15a6,6,0,0,0,4.46,0L148,166.46l37.77,15.11a6,6,0,0,0,4.28.07L202,177.29ZM18,128a6,6,0,0,1,6-6H232a6,6,0,0,1,0,12H24A6,6,0,0,1,18,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M48.07,100H207.93a12,12,0,0,0,11.8-14.55c-3.39-16-14.56-30.68-31.46-41.23S150.11,28,128,28,84.49,33.76,67.73,44.22,39.66,69.41,36.27,85.45A12,12,0,0,0,48.07,100Zm-4-12.89C50.26,58,86.33,36,128,36s77.74,22,83.91,51.11a4,4,0,0,1-.82,3.39,4,4,0,0,1-3.16,1.5H48.07a4,4,0,0,1-3.16-1.5A4,4,0,0,1,44.09,87.11Zm186.54,69.13-42.56,15.48-38.58-15.43a4,4,0,0,0-3,0L108,171.69l-38.51-15.4a4,4,0,0,0-2.86,0l-44,16A4,4,0,0,0,24,180a4.08,4.08,0,0,0,1.37-.24L44,173v11a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V171.53l21.37-7.77a4,4,0,0,0-2.74-7.52ZM204,184a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V170.07l15.93-5.79,38.58,15.43a4,4,0,0,0,3,0L148,164.31l38.51,15.4a4,4,0,0,0,2.86,0L204,174.44ZM20,128a4,4,0,0,1,4-4H232a4,4,0,0,1,0,8H24A4,4,0,0,1,20,128Z",
                }),
            ),
        ],
    ]),
    R8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M188,84a32,32,0,0,0-8,1V60a32,32,0,0,0-43.21-30A32,32,0,0,0,76,44v1A32,32,0,0,0,36,76v76a92,92,0,0,0,184,0V116A32,32,0,0,0,188,84Zm8,68a68,68,0,0,1-136,0V76a8,8,0,0,1,16,0v40a12,12,0,0,0,24,0V44a8,8,0,0,1,16,0v64a12,12,0,0,0,24,0V60a8,8,0,0,1,16,0v65.4A52.09,52.09,0,0,0,116,176a12,12,0,0,0,24,0,28,28,0,0,1,28-28,12,12,0,0,0,12-12V116a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,116v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0V44a20,20,0,0,1,40,0V60a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v68.67A48.08,48.08,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V116a12,12,0,0,1,24,0Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,104v48a88,88,0,0,1-176,0V64a16,16,0,0,1,32,0v56a8,8,0,0,0,16,0V32a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V48a16,16,0,0,1,32,0v80.67A48.08,48.08,0,0,0,128,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V104a16,16,0,0,1,32,0Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M188,90a25.8,25.8,0,0,0-14,4.11V60a26,26,0,0,0-40.59-21.51A26,26,0,0,0,82,44V54.11A26,26,0,0,0,42,76v76a86,86,0,0,0,172,0V116A26,26,0,0,0,188,90Zm14,62a74,74,0,0,1-148,0V76a14,14,0,0,1,28,0v44a6,6,0,0,0,12,0V44a14,14,0,0,1,28,0v68a6,6,0,0,0,12,0V60a14,14,0,0,1,28,0v70.39A46.07,46.07,0,0,0,122,176a6,6,0,0,0,12,0,34,34,0,0,1,34-34,6,6,0,0,0,6-6V116a14,14,0,0,1,28,0Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v68.67A48.08,48.08,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V116a12,12,0,0,1,24,0Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M188,92a23.9,23.9,0,0,0-16,6.13V60a24,24,0,0,0-40.07-17.8A24,24,0,0,0,84,44V58.13A24,24,0,0,0,44,76v76a84,84,0,0,0,168,0V116A24,24,0,0,0,188,92Zm16,60a76,76,0,0,1-152,0V76a16,16,0,0,1,32,0v44a4,4,0,0,0,8,0V44a16,16,0,0,1,32,0v68a4,4,0,0,0,8,0V60a16,16,0,0,1,32,0v72.18A44.06,44.06,0,0,0,124,176a4,4,0,0,0,8,0,36,36,0,0,1,36-36,4,4,0,0,0,4-4V116a16,16,0,0,1,32,0Z",
                }),
            ),
        ],
    ]),
    S8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M196,84a31.94,31.94,0,0,0-11.22,2A32,32,0,0,0,148,69V44a32,32,0,0,0-64,0v66.83A32,32,0,0,0,32.25,148l4.68,8.24C71.11,216.48,86.72,244,136,244a92.1,92.1,0,0,0,92-92V116A32,32,0,0,0,196,84Zm8,68a68.08,68.08,0,0,1-68,68c-34,0-43.49-14.45-78.2-75.65l-4.69-8.28a.16.16,0,0,1,0-.07,8,8,0,0,1,13.86-8c.06.12.13.23.2.35l18.68,30A12,12,0,0,0,108,152V44a8,8,0,0,1,16,0v68a12,12,0,0,0,24,0V100a8,8,0,0,1,16,0v20a12,12,0,0,0,24,0v-4a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,116v36a80,80,0,0,1-80,80c-44.18,0-55.81-24-93.32-90a20,20,0,0,1,34.64-20L96,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M196,88a27.86,27.86,0,0,0-13.35,3.39A28,28,0,0,0,144,74.7V44a28,28,0,0,0-56,0v80l-3.82-6.13A28,28,0,0,0,35.73,146l4.67,8.23C74.81,214.89,89.05,240,136,240a88.1,88.1,0,0,0,88-88V116A28,28,0,0,0,196,88Zm12,64a72.08,72.08,0,0,1-72,72c-37.63,0-47.84-18-81.68-77.68l-4.69-8.27,0-.05A12,12,0,0,1,54,121.61a11.88,11.88,0,0,1,6-1.6,12,12,0,0,1,10.41,6,1.76,1.76,0,0,0,.14.23l18.67,30A8,8,0,0,0,104,152V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V100a12,12,0,0,1,24,0v20a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,104v50.93c0,46.2-36.85,84.55-83,85.06A83.71,83.71,0,0,1,80.6,215.4C58.79,192.33,34.15,136,34.15,136a16,16,0,0,1,6.53-22.23c7.66-4,17.1-.84,21.4,6.62l21,36.44a6.09,6.09,0,0,0,6,3.09l.12,0A8.19,8.19,0,0,0,96,151.74V32a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V104a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V88a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V112a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25v-7.28c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,224,104Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M196,90a25.87,25.87,0,0,0-14.59,4.49A26,26,0,0,0,142,78.1V44a26,26,0,0,0-52,0v87l-7.53-12.1a26,26,0,0,0-45,26.07l4.67,8.25c34,60,48.07,84.77,93.86,84.77a86.1,86.1,0,0,0,86-86V116A26,26,0,0,0,196,90Zm14,62a74.09,74.09,0,0,1-74,74c-38.8,0-50-19.83-83.42-78.69L47.89,139l0,0A14,14,0,0,1,53,119.88,13.87,13.87,0,0,1,60,118a14,14,0,0,1,12.15,7l.1.17,18.68,30A6,6,0,0,0,102,152V44a14,14,0,0,1,28,0v68a6,6,0,0,0,12,0V100a14,14,0,0,1,28,0v20a6,6,0,0,0,12,0v-4a14,14,0,0,1,28,0Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M196,88a27.86,27.86,0,0,0-13.35,3.39A28,28,0,0,0,144,74.7V44a28,28,0,0,0-56,0v80l-3.82-6.13A28,28,0,0,0,35.73,146l4.67,8.23C74.81,214.89,89.05,240,136,240a88.1,88.1,0,0,0,88-88V116A28,28,0,0,0,196,88Zm12,64a72.08,72.08,0,0,1-72,72c-37.63,0-47.84-18-81.68-77.68l-4.69-8.27,0-.05A12,12,0,0,1,54,121.61a11.88,11.88,0,0,1,6-1.6,12,12,0,0,1,10.41,6,1.76,1.76,0,0,0,.14.23l18.67,30A8,8,0,0,0,104,152V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V100a12,12,0,0,1,24,0v20a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M196,92a23.88,23.88,0,0,0-16.07,6.19A24,24,0,0,0,140,82.13V44a24,24,0,0,0-48,0v94L80.75,119.94A24,24,0,0,0,39.2,144l4.68,8.25C61.21,182.8,72.66,203,85.66,216.33,99.28,230.3,113.86,236,136,236a84.09,84.09,0,0,0,84-84V116A24,24,0,0,0,196,92Zm16,60a76.09,76.09,0,0,1-76,76c-40,0-51.35-20.08-85.16-79.71L46.15,140v0a16,16,0,0,1,27.71-16,.75.75,0,0,1,.07.12l18.68,30A4,4,0,0,0,100,152V44a16,16,0,0,1,32,0v68a4,4,0,0,0,8,0V100a16,16,0,0,1,32,0v20a4,4,0,0,0,8,0v-4a16,16,0,0,1,32,0Z",
                }),
            ),
        ],
    ]),
    I8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M243.86,197.65l-14.25-120A20.06,20.06,0,0,0,209.67,60H179.83A52,52,0,0,0,76.17,60H46.33A20.06,20.06,0,0,0,26.39,77.65l-14.25,120A20,20,0,0,0,32.08,220H223.92a20,20,0,0,0,19.94-22.35ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36ZM36.5,196,49.81,84H76v20a12,12,0,0,0,24,0V84h56v20a12,12,0,0,0,24,0V84h26.19L219.5,196Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223.92,208H32.08a8,8,0,0,1-8-8.93l14.25-120a8.06,8.06,0,0,1,8-7.07H209.67a8.06,8.06,0,0,1,8,7.07l14.25,120A8,8,0,0,1,223.92,208Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32ZM32,200,46.33,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h33.75l14.17,120Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM96,104a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32-72a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm48,72a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M237.9,198.36l-14.25-120a14.06,14.06,0,0,0-14-12.36H174V64a46,46,0,0,0-92,0v2H46.33a14.06,14.06,0,0,0-14,12.36l-14.25,120a14,14,0,0,0,14,15.64H223.92a14,14,0,0,0,14-15.64ZM94,64a34,34,0,0,1,68,0v2H94ZM225.5,201.3a2.07,2.07,0,0,1-1.58.7H32.08a2.07,2.07,0,0,1-1.58-.7,1.92,1.92,0,0,1-.49-1.53l14.26-120A2,2,0,0,1,46.33,78H82v26a6,6,0,0,0,12,0V78h68v26a6,6,0,0,0,12,0V78h35.67a2,2,0,0,1,2.06,1.77l14.26,120A1.92,1.92,0,0,1,225.5,201.3Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32ZM32,200,46.33,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h33.75l14.17,120Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M235.92,198.59l-14.26-120a12,12,0,0,0-12-10.59H172V64a44,44,0,0,0-88,0v4H46.33a12,12,0,0,0-12,10.59l-14.26,120A12,12,0,0,0,23,207.94,12.11,12.11,0,0,0,32.08,212H223.92a12.11,12.11,0,0,0,9.06-4.06A12,12,0,0,0,235.92,198.59ZM92,64a36,36,0,0,1,72,0v4H92ZM227,202.63a4.08,4.08,0,0,1-3.08,1.37H32.08A4.08,4.08,0,0,1,29,202.63a3.9,3.9,0,0,1-1-3.09l14.25-120a4,4,0,0,1,4-3.54H84v28a4,4,0,0,0,8,0V76h72v28a4,4,0,0,0,8,0V76h37.67a4,4,0,0,1,4.05,3.54l14.25,120A3.9,3.9,0,0,1,227,202.63Z",
                }),
            ),
        ],
    ]),
    N8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,84H180.2l7.61-41.85a12,12,0,0,0-23.62-4.3L155.8,84H116.2l7.61-41.85a12,12,0,1,0-23.62-4.3L91.8,84H48a12,12,0,0,0,0,24H87.44l-7.27,40H32a12,12,0,0,0,0,24H75.8l-7.61,41.85a12,12,0,0,0,9.66,14A11.43,11.43,0,0,0,80,228a12,12,0,0,0,11.8-9.86L100.2,172h39.6l-7.61,41.85a12,12,0,0,0,9.66,14,11.43,11.43,0,0,0,2.16.2,12,12,0,0,0,11.8-9.86L164.2,172H208a12,12,0,0,0,0-24H168.56l7.27-40H224a12,12,0,0,0,0-24Zm-79.83,64H104.56l7.27-40h39.61Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M165.82,96l-11.64,64h-64l11.64-64Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M116.25,112h31.5l-8,32h-31.5ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-16,56a8,8,0,0,0-8-8H168.25l7.51-30.06a8,8,0,0,0-15.52-3.88L151.75,96h-31.5l7.51-30.06a8,8,0,0,0-15.52-3.88L103.75,96H64a8,8,0,0,0,0,16H99.75l-8,32H56a8,8,0,0,0,0,16H87.75l-7.51,30.06a8,8,0,0,0,5.82,9.7,8.13,8.13,0,0,0,2,.24,8,8,0,0,0,7.75-6.06L104.25,160h31.5l-7.51,30.06a8,8,0,0,0,5.82,9.7A8.13,8.13,0,0,0,136,200a8,8,0,0,0,7.75-6.06L152.25,160H192a8,8,0,0,0,0-16H156.25l8-32H200A8,8,0,0,0,208,104Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,90H173l8.89-48.93a6,6,0,1,0-11.8-2.14L160.81,90H109l8.89-48.93a6,6,0,0,0-11.8-2.14L96.81,90H48a6,6,0,0,0,0,12H94.63l-9.46,52H32a6,6,0,0,0,0,12H83L74.1,214.93a6,6,0,0,0,4.83,7A5.64,5.64,0,0,0,80,222a6,6,0,0,0,5.89-4.93L95.19,166H147l-8.89,48.93a6,6,0,0,0,4.83,7,5.64,5.64,0,0,0,1.08.1,6,6,0,0,0,5.89-4.93L159.19,166H208a6,6,0,0,0,0-12H161.37l9.46-52H224a6,6,0,0,0,0-12Zm-74.83,64H97.37l9.46-52h51.8Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,92H170.61l9.33-51.28a4,4,0,1,0-7.88-1.44L162.48,92H106.61l9.33-51.28a4,4,0,1,0-7.88-1.44L98.48,92H48a4,4,0,0,0,0,8H97L86.84,156H32a4,4,0,0,0,0,8H85.39l-9.33,51.28a4,4,0,0,0,3.22,4.65A3.65,3.65,0,0,0,80,220a4,4,0,0,0,3.94-3.29L93.52,164h55.87l-9.33,51.28a4,4,0,0,0,3.22,4.65,3.65,3.65,0,0,0,.72.07,4,4,0,0,0,3.94-3.29L157.52,164H208a4,4,0,0,0,0-8H159l10.19-56H224a4,4,0,0,0,0-8Zm-73.16,64H95l10.19-56H161Z",
                }),
            ),
        ],
    ]),
    q8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M204.73,51.85A108.07,108.07,0,0,0,20,128v56a28,28,0,0,0,28,28H64a28,28,0,0,0,28-28V144a28,28,0,0,0-28-28H44.84A84.05,84.05,0,0,1,128,44h.64a83.7,83.7,0,0,1,82.52,72H192a28,28,0,0,0-28,28v40a28,28,0,0,0,28,28h16a28,28,0,0,0,28-28V128A107.34,107.34,0,0,0,204.73,51.85ZM64,140a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V140Zm148,44a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4V144a4,4,0,0,1,4-4h20Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M80,144v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128H64A16,16,0,0,1,80,144Zm112-16a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M201.89,54.66A104.08,104.08,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,40h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,128v56a24,24,0,0,1-24,24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65a87.71,87.71,0,0,0-87-80H128a88,88,0,0,0-87.64,80H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200.47,56.07A101.37,101.37,0,0,0,128.77,26H128A102,102,0,0,0,26,128v56a22,22,0,0,0,22,22H64a22,22,0,0,0,22-22V144a22,22,0,0,0-22-22H38.2A90.12,90.12,0,0,1,192,64.52,89.41,89.41,0,0,1,217.81,122H192a22,22,0,0,0-22,22v40a22,22,0,0,0,22,22h16a22,22,0,0,0,22-22V128A101.44,101.44,0,0,0,200.47,56.07ZM64,134a10,10,0,0,1,10,10v40a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V134Zm154,50a10,10,0,0,1-10,10H192a10,10,0,0,1-10-10V144a10,10,0,0,1,10-10h26Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,40h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M199.05,57.48A100.07,100.07,0,0,0,28,128v56a20,20,0,0,0,20,20H64a20,20,0,0,0,20-20V144a20,20,0,0,0-20-20H36.08A92,92,0,0,1,128,36h.7a91.75,91.75,0,0,1,91.22,88H192a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20h16a20,20,0,0,0,20-20V128A99.43,99.43,0,0,0,199.05,57.48ZM64,132a12,12,0,0,1,12,12v40a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V132Zm156,52a12,12,0,0,1-12,12H192a12,12,0,0,1-12-12V144a12,12,0,0,1,12-12h28Z",
                }),
            ),
        ],
    ]),
    z8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M178,36c-20.09,0-37.92,7.93-50,21.56C115.92,43.93,98.09,36,78,36a66.08,66.08,0,0,0-66,66c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102A42,42,0,0,1,78,60c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,69.4,160.2,60,178,60a42,42,0,0,1,42,42C220,131.42,194.18,159.77,172.51,178.36Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48C226,157.72,144.41,207.64,128,217.11Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50C228,160,142,211.46,128,219.42Z",
                }),
            ),
        ],
    ]),
    j8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.84,54.13A62.07,62.07,0,0,0,138.32,54L128,63.58,117.68,54a62,62,0,0,0-87.58,87.8l89.35,90.65a12,12,0,0,0,17.1,0l89.29-90.59a62,62,0,0,0,0-87.7Zm-17,70.79L128,206.9,47.13,124.85a38,38,0,0,1,53.74-53.74c.1.1.2.2.31.29l18.64,17.36a12,12,0,0,0,16.36,0L154.82,71.4c.11-.09.21-.19.31-.29a38,38,0,1,1,53.68,53.81Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M217.36,133.36,128,224,38.64,133.36a50,50,0,0,1,70.72-70.72L128,80l18.64-17.36a50,50,0,1,1,70.72,70.72Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.6,58.38a56.06,56.06,0,0,0-79.12-.08L128,71.78,113.52,58.3a56,56,0,0,0-79.15,79.25l89.36,90.66a6,6,0,0,0,8.54,0l89.33-90.62a56,56,0,0,0,0-79.21Zm-8.52,70.75L128,215.45,42.89,129.1a44,44,0,0,1,62.22-62.23,1.07,1.07,0,0,0,.16.14l18.64,17.36a6,6,0,0,0,8.18,0L150.73,67a1.07,1.07,0,0,0,.16-.14,44,44,0,1,1,62.19,62.26Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220.18,59.79a54.05,54.05,0,0,0-76.31,0L128,74.51,112.13,59.74A54,54,0,0,0,35.8,136.15l89.35,90.66a4,4,0,0,0,5.7,0l89.33-90.64a54,54,0,0,0,0-76.38Zm-5.67,70.74L128,218.3,41.47,130.51a46,46,0,0,1,65.06-65.06l.1.1,18.64,17.36a4,4,0,0,0,5.46,0l18.64-17.36.1-.1a46,46,0,1,1,65,65.08Z",
                }),
            ),
        ],
    ]),
    P8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M71.76,148H31.7a12,12,0,1,1,0-24H65.33l12.45-18.66a12,12,0,0,1,20,0l22,33,6-9a12,12,0,0,1,10-5.34h24a12,12,0,1,1,0,24h-17.6l-12.46,18.66a12,12,0,0,1-20,0l-22-33-6,9A12,12,0,0,1,71.76,148ZM177.91,36c-20.12,0-38,7.93-50.07,21.56C115.74,43.93,97.89,36,77.76,36A66,66,0,0,0,12.07,94.68,12,12,0,0,0,36,97.32,42,42,0,0,1,77.76,60c17.83,0,32.75,9.4,38.95,24.54a12,12,0,0,0,22.25,0C145.16,69.4,160.08,60,177.91,60A42.08,42.08,0,0,1,220,102c0,29.42-25.86,57.77-47.56,76.36a329,329,0,0,1-44.58,31.81c-10.87-6.45-35.37-22-56.51-42.73a12,12,0,1,0-16.84,17.12c30.39,29.81,66.15,49.2,67.66,50a12.06,12.06,0,0,0,11.39,0C138,232.14,244,174.34,244,102A66.12,66.12,0,0,0,177.91,36Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M72,144H32a8,8,0,0,1,0-16H67.72l13.62-20.44a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,128h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,126.42l-9.34,14A8,8,0,0,1,72,144ZM178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0c-3.35-1.8-63.55-34.69-92.68-80.89A4,4,0,0,1,34.92,144H72a8,8,0,0,0,6.66-3.56l9.34-14,25.34,38a8,8,0,0,0,9.16,3.16,8.23,8.23,0,0,0,4.28-3.34L140.28,144H160a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H136a8,8,0,0,0-6.66,3.56l-9.34,14-25.34-38a8,8,0,0,0-9.17-3.16,8.25,8.25,0,0,0-4.27,3.34L67.72,128H23.53a4,4,0,0,1-3.83-2.81A76.93,76.93,0,0,1,16,102,62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M72,142H32a6,6,0,0,1,0-12H68.79L83,108.67a6,6,0,0,1,10,0l27,40.51,11-16.51a6,6,0,0,1,5-2.67h24a6,6,0,0,1,0,12H139.21L125,163.33a6,6,0,0,1-10,0L88,122.82,77,139.33A6,6,0,0,1,72,142ZM178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60q0,1.09,0,2.19a6,6,0,0,0,12-.38c0-.6,0-1.21,0-1.81A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48c0,55.73-81.61,105.65-98,115.11-9.84-5.66-43.09-25.82-68.16-53.16a6,6,0,1,0-8.84,8.1c30.94,33.77,72.41,56.29,74.16,57.23a6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M72,144H32a8,8,0,0,1,0-16H67.72l13.62-20.44a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,128h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,126.42l-9.34,14A8,8,0,0,1,72,144ZM178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M72,140H32a4,4,0,0,1,0-8H69.86l14.81-22.22a4,4,0,0,1,6.66,0l28.67,43,12.67-19A4,4,0,0,1,136,132h24a4,4,0,0,1,0,8H138.14l-14.81,22.22a4,4,0,0,1-6.66,0L88,119.21l-12.67,19A4,4,0,0,1,72,140ZM178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58q0,1.06,0,2.13a4,4,0,1,0,8-.26c0-.62,0-1.24,0-1.87A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50c0,58-86,109.46-100,117.42-8.47-4.82-43.5-25.61-69.63-54.12a4,4,0,0,0-5.9,5.4c30.72,33.52,71.9,55.89,73.63,56.82a4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44Z",
                }),
            ),
        ],
    ]),
    B8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.93,152.31l-45.82-11.17L72.49,31.51a12,12,0,0,0-17.34.39C32.48,56.68,20,88,20,120v72a20,20,0,0,0,20,20H72a20,20,0,0,0,20-20V150.29l1.07.71a108.44,108.44,0,0,1,39.11,48.6A19.9,19.9,0,0,0,150.72,212H236a20,20,0,0,0,20-20v-4.73A35.68,35.68,0,0,0,227.93,152.31ZM68,188H44V132.67a106.69,106.69,0,0,1,24,5.51Zm164,0H153.35a132.44,132.44,0,0,0-46.67-56.77,131.08,131.08,0,0,0-62-22.63A106.69,106.69,0,0,1,64.87,57.84L167.51,160.49a12.06,12.06,0,0,0,5.65,3.17l49.2,12,.25.06a11.84,11.84,0,0,1,9.39,11.6Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M248,187.31V192a8,8,0,0,1-8,8H150.72a8,8,0,0,1-7.42-4.92C125.51,151.28,82.38,120,32,120c0-31,12.59-58.78,32-80L176,152l53.21,12A23.92,23.92,0,0,1,248,187.31Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M231,156.19,180,144.71,69.66,34.34a8,8,0,0,0-11.56.26C36.11,58.64,24,89,24,120v72a16,16,0,0,0,16,16H72a16,16,0,0,0,16-16V143.06c2.49,1.45,4.94,3,7.34,4.64a112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,208H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,156.19ZM72,192H40V128.29a110.88,110.88,0,0,1,32,7.12Zm168,0H150.68a128.36,128.36,0,0,0-46.27-57.46,126.9,126.9,0,0,0-64.12-22.26A110.67,110.67,0,0,1,64.46,51.78L170.34,157.66a8,8,0,0,0,3.9,2.14l53.24,12A15.81,15.81,0,0,1,240,187.31Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M32,144a95.28,95.28,0,0,1,37.53,7.67,4,4,0,0,1,2.47,3.7V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V148a4,4,0,0,1,4-4Zm199,12.19L180,144.71,69.66,34.34a8,8,0,0,0-11.56.26C36.11,58.64,24,89,24,120a8,8,0,0,0,8,8,111.2,111.2,0,0,1,63.34,19.7,112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,208H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,156.19Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.53,158.14,179,146.53,68.24,35.76a6,6,0,0,0-8.67.19C37.92,59.62,26,89.47,26,120v72a14,14,0,0,0,14,14H72a14,14,0,0,0,14-14V139.65a115,115,0,0,1,51.74,57.69,13.92,13.92,0,0,0,13,8.66H240a14,14,0,0,0,14-14v-4.73A29.73,29.73,0,0,0,230.53,158.14ZM74,192a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V126.18A112.75,112.75,0,0,1,74,134Zm168,0a2,2,0,0,1-2,2H150.72a2,2,0,0,1-1.86-1.18,126.53,126.53,0,0,0-45.58-56.65,125.13,125.13,0,0,0-65.12-22C39.47,90.66,48.6,67.83,64.31,48.79L171.76,156.24a6,6,0,0,0,2.92,1.61l53.23,12A17.81,17.81,0,0,1,242,187.31Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231,156.19,180,144.7,69.66,34.34a8,8,0,0,0-11.56.26C36.11,58.64,24,89,24,120v72a16,16,0,0,0,16,16H72a16,16,0,0,0,16-16V143.06c2.49,1.45,4.94,3,7.34,4.64a112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,208H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,156.19ZM72,192H40V128.29a110.88,110.88,0,0,1,32,7.12Zm168,0H150.68a128.36,128.36,0,0,0-46.27-57.46,126.9,126.9,0,0,0-64.12-22.26A110.67,110.67,0,0,1,64.46,51.78L170.34,157.66a8,8,0,0,0,3.9,2.14l53.24,12A15.81,15.81,0,0,1,240,187.31Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.09,160.09,178,148.35,66.83,37.17A4,4,0,0,0,63.91,36a4,4,0,0,0-2.86,1.3C39.74,60.6,28,90,28,120v72a12,12,0,0,0,12,12H72a12,12,0,0,0,12-12V136.36a116.73,116.73,0,0,1,55.59,60.23A11.93,11.93,0,0,0,150.72,204H240a12,12,0,0,0,12-12v-4.73A27.74,27.74,0,0,0,230.09,160.09ZM76,192a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V124.08a114.9,114.9,0,0,1,40,8.62Zm168,0a4,4,0,0,1-4,4H150.72a4,4,0,0,1-3.71-2.42,124.36,124.36,0,0,0-44.87-55.76,123.1,123.1,0,0,0-66.07-21.75c.93-25.33,10.8-50,28.11-70.23l109,109a4,4,0,0,0,2,1.07l53.22,12A19.79,19.79,0,0,1,244,187.31Z",
                }),
            ),
        ],
    ]),
    D8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M204.37,51.59A108,108,0,1,0,236,128,108.11,108.11,0,0,0,204.37,51.59ZM140,136H116V111.39l24-12Zm-40,71.25V160h56v47.25a84.73,84.73,0,0,1-56,0Zm87.4-19.84a84.53,84.53,0,0,1-7.4,6.55V156a20,20,0,0,0-16-19.6V80a12,12,0,0,0-17.37-10.73l-48,24A12,12,0,0,0,92,104v32.41A20,20,0,0,0,76,156v38a84.53,84.53,0,0,1-7.4-6.55,84,84,0,1,1,118.8,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M195.88,195.88A95.7,95.7,0,0,1,168,215.29V152a8,8,0,0,0-8-8h-8V72L104,96v48H96a8,8,0,0,0-8,8v63.29a96,96,0,1,1,107.88-19.41Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM96,210V152h64v58a88.33,88.33,0,0,1-64,0Zm48-74H112V100.94l32-16Zm46.22,54.22A88.09,88.09,0,0,1,176,201.77V152a16,16,0,0,0-16-16V72a8,8,0,0,0-11.58-7.16l-48,24A8,8,0,0,0,96,96v40a16,16,0,0,0-16,16v49.77a88,88,0,1,1,110.22-11.55Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM96,210V152h64v58a88.33,88.33,0,0,1-64,0Zm94.22-19.78A88.09,88.09,0,0,1,176,201.77V152a16,16,0,0,0-16-16V72a8,8,0,0,0-11.58-7.16l-48,24A8,8,0,0,0,96,96v40a16,16,0,0,0-16,16v49.77a88,88,0,1,1,110.22-11.55Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200.12,55.87A102,102,0,1,0,55.88,200.12,102,102,0,1,0,200.12,55.87ZM94,211.37V152a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2v59.37a90.49,90.49,0,0,1-68,0ZM146,138H110V99.71l36-18Zm45.64,53.64h0A90.93,90.93,0,0,1,174,205.39V152a14,14,0,0,0-14-14h-2V72a6,6,0,0,0-8.68-5.37l-48,24A6,6,0,0,0,98,96v42H96a14,14,0,0,0-14,14v53.39a90.93,90.93,0,0,1-17.64-13.75,90,90,0,1,1,127.28,0Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM96,210V152h64v58a88.33,88.33,0,0,1-64,0Zm48-74H112V100.94l32-16Zm46.22,54.22A88.09,88.09,0,0,1,176,201.77V152a16,16,0,0,0-16-16V72a8,8,0,0,0-11.58-7.16l-48,24A8,8,0,0,0,96,96v40a16,16,0,0,0-16,16v49.77a88,88,0,1,1,110.22-11.55Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29ZM92,212.7V152a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4v60.7a92.42,92.42,0,0,1-72,0ZM148,140H108V98.47l40-20Zm45.05,53.05A92,92,0,0,1,172,208.83V152a12,12,0,0,0-12-12h-4V72a4,4,0,0,0-5.79-3.58l-48,24A4,4,0,0,0,100,96v44H96a12,12,0,0,0-12,12v56.83a92,92,0,1,1,109.05-15.78Z",
                }),
            ),
        ],
    ]),
    T8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M244.64,118.31l-54.27-81.4A20,20,0,0,0,173.73,28H82.27a20,20,0,0,0-16.64,8.91l-54.27,81.4a20,20,0,0,0-2.65,16.36l21.43,78.59A20,20,0,0,0,49.43,228H76a20,20,0,0,0,20-20V196h64v12a20,20,0,0,0,20,20h26.57a20,20,0,0,0,19.29-14.74l21.43-78.59A20,20,0,0,0,244.64,118.31ZM84,172V70.64l12,7.5V136a12,12,0,0,0,24,0V93.15l1.64,1a12,12,0,0,0,12.72,0l1.64-1V128a12,12,0,0,0,24,0V78.14l12-7.5V172ZM128,69.85,99.46,52h57.08ZM52.49,204,32.34,130.11,60,88.62V176a20,20,0,0,0,12,18.32V204Zm151,0H184v-9.68A20,20,0,0,0,196,176V88.62l27.66,41.49Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231.72,131.51,210.28,210.1a8,8,0,0,1-7.71,5.9H176a8,8,0,0,1-8-8V184H88v24a8,8,0,0,1-8,8H53.43a8,8,0,0,1-7.71-5.9L24.28,131.51A8,8,0,0,1,25.34,125L72,55l56,33,56-33,46.66,70A8,8,0,0,1,231.72,131.51Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,176V69l24,14.15V136a8,8,0,0,0,16,0V92.57l3.94,2.32a8,8,0,0,0,8.12,0L136,92.57V128a8,8,0,0,0,16,0V83.14L176,69V176ZM169.73,48l2.92,4.39L128,78.71,83.35,52.39,86.27,48ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm122.57,0H176V192a16,16,0,0,0,16-16V81.41l32,48Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm40-72a8,8,0,0,1-16,0V97.14a8,8,0,1,1,16,0Zm32-8a8,8,0,0,1-16,0V97.14a8,8,0,1,1,16,0ZM128,78.71,83.35,52.39,86.27,48h83.46l2.92,4.39ZM202.57,208H176V192a16,16,0,0,0,16-16V81.41l32,48Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M235.65,121.64,181.38,40.23A14,14,0,0,0,169.73,34H86.27a14,14,0,0,0-11.65,6.23L20.35,121.64a14,14,0,0,0-1.86,11.45l21.44,78.59A14,14,0,0,0,53.43,222H80a14,14,0,0,0,14-14V190h68v18a14,14,0,0,0,14,14h26.57a14,14,0,0,0,13.5-10.32l21.44-78.59A14,14,0,0,0,235.65,121.64ZM80,178a2,2,0,0,1-2-2V65.49L106,82v54a6,6,0,0,0,12,0V89.07l7,4.1a6,6,0,0,0,6.1,0l6.95-4.1V128a6,6,0,0,0,12,0V82l28-16.51V176a2,2,0,0,1-2,2ZM86.27,46h83.46a2,2,0,0,1,1.66.89l4.1,6.15L128,81,80.51,53l4.1-6.15A2,2,0,0,1,86.27,46ZM82,208a2,2,0,0,1-2,2H53.43a2,2,0,0,1-1.92-1.47l-21.44-78.6a2,2,0,0,1,.27-1.63L66,74.8V176a14,14,0,0,0,14,14h2Zm143.93-78.07-21.44,78.6a2,2,0,0,1-1.92,1.47H176a2,2,0,0,1-2-2V190h2a14,14,0,0,0,14-14V74.8l35.66,53.5A2,2,0,0,1,225.93,129.93Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,176V69l24,14.15V136a8,8,0,0,0,16,0V92.57l3.94,2.32a8,8,0,0,0,8.12,0L136,92.57V128a8,8,0,0,0,16,0V83.14L176,69V176ZM169.73,48l2.92,4.39L128,78.71,83.35,52.39,86.27,48ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm122.57,0H176V192a16,16,0,0,0,16-16V81.41l32,48Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M234,122.75,179.71,41.34a12,12,0,0,0-10-5.34H86.27a12,12,0,0,0-10,5.34L22,122.75a12,12,0,0,0-1.6,9.82l21.44,78.59A12,12,0,0,0,53.43,220H80a12,12,0,0,0,12-12V188h72v20a12,12,0,0,0,12,12h26.57a12,12,0,0,0,11.57-8.84l21.44-78.59A12,12,0,0,0,234,122.75ZM80,180a4,4,0,0,1-4-4V62l32,18.86V136a4,4,0,0,0,8,0V85.57l10,5.88a4,4,0,0,0,4.06,0l10-5.88V128a4,4,0,0,0,8,0V80.85L180,62V176a4,4,0,0,1-4,4ZM82.94,45.78A4,4,0,0,1,86.27,44h83.46a4,4,0,0,1,3.33,1.78l5.27,7.91L128,83.36,77.67,53.69ZM84,208a4,4,0,0,1-4,4H53.43a4,4,0,0,1-3.85-2.95L28.14,130.46a4,4,0,0,1,.53-3.27L68,68.2V176a12,12,0,0,0,12,12h4Zm143.86-77.54-21.44,78.59a4,4,0,0,1-3.85,2.95H176a4,4,0,0,1-4-4V188h4a12,12,0,0,0,12-12V68.2l39.33,59A4,4,0,0,1,227.86,130.46Z",
                }),
            ),
        ],
    ]),
    U8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z",
                }),
            ),
        ],
    ]),
    O8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z",
                }),
            ),
        ],
    ]),
    G8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24v63.72L186.14,97.86a20,20,0,0,0-28.28,0L52,203.72V52ZM85.66,204,172,117.66l32,32V204ZM76,96a20,20,0,1,1,20,20A20,20,0,0,1,76,96Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h8.69L166.34,106.34a8,8,0,0,1,11.32,0L216,144.69V48A8,8,0,0,0,208,40ZM96,112a16,16,0,1,1,16-16A16,16,0,0,1,96,112Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM80,96a16,16,0,1,1,16,16A16,16,0,0,1,80,96Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM46,208V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2v82.2l-28.1-28.1a14,14,0,0,0-19.8,0L54.2,210H48A2,2,0,0,1,46,208Zm162,2H71.17l99.41-99.41a2,2,0,0,1,2.83,0L210,147.17V208A2,2,0,0,1,208,210ZM96,118A22,22,0,1,0,74,96,22,22,0,0,0,96,118Zm0-32A10,10,0,1,1,86,96,10,10,0,0,1,96,86Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM44,208V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4v87l-31.51-31.52a12,12,0,0,0-17,0L55,212H48A4,4,0,0,1,44,208Zm164,4H66.34L169.17,109.17a4,4,0,0,1,5.66,0L212,146.34V208A4,4,0,0,1,208,212ZM96,116A20,20,0,1,0,76,96,20,20,0,0,0,96,116Zm0-32A12,12,0,1,1,84,96,12,12,0,0,1,96,84Z",
                }),
            ),
        ],
    ]),
    Q8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M160,88a16,16,0,1,1,16,16A16,16,0,0,1,160,88Zm76-32V160a20,20,0,0,1-20,20H204v20a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V88A20,20,0,0,1,40,68H60V56A20,20,0,0,1,80,36H216A20,20,0,0,1,236,56ZM180,180H80a20,20,0,0,1-20-20V92H44V196H180Zm-21.66-24L124,121.66,89.66,156ZM212,60H84v67.72l25.86-25.86a20,20,0,0,1,28.28,0L192.28,156H212Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,56v82.06l-23.72-23.72a8,8,0,0,0-11.31,0L163.31,140,113.66,90.34a8,8,0,0,0-11.32,0L64,128.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,56H216v62.75l-10.07-10.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L72,109.37ZM184,200H40V88H56v80a16,16,0,0,0,16,16H184Zm32-32H72V132l36-36,49.66,49.66a8,8,0,0,0,11.31,0L194.63,120,216,141.38V168ZM160,84a12,12,0,1,1,12,12A12,12,0,0,1,160,84Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM172,72a12,12,0,1,1-12,12A12,12,0,0,1,172,72Zm12,128H40V88H56v80a16,16,0,0,0,16,16H184Zm32-32H72V120.69l30.34-30.35a8,8,0,0,1,11.32,0L163.31,140,189,114.34a8,8,0,0,1,11.31,0L216,130.07V168Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,42H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM70,56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v67.57L204.53,110.1a14,14,0,0,0-19.8,0l-21.42,21.41L117.9,86.1a14,14,0,0,0-19.8,0L70,114.2ZM186,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H58v82a14,14,0,0,0,14,14H186Zm30-30H72a2,2,0,0,1-2-2V131.17l36.58-36.58a2,2,0,0,1,2.83,0l49.66,49.66a6,6,0,0,0,8.49,0l25.65-25.66a2,2,0,0,1,2.83,0l22,22V168A2,2,0,0,1,216,170ZM162,84a10,10,0,1,1,10,10A10,10,0,0,1,162,84Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,56H216v62.75l-10.07-10.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L72,109.37ZM184,200H40V88H56v80a16,16,0,0,0,16,16H184Zm32-32H72V132l36-36,49.66,49.66a8,8,0,0,0,11.31,0L194.63,120,216,141.38V168ZM160,84a12,12,0,1,1,12,12A12,12,0,0,1,160,84Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,44H72A12,12,0,0,0,60,56V76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V180h20a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM68,56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v72.4l-16.89-16.89a12,12,0,0,0-17,0l-22.83,22.83L116.49,87.51a12,12,0,0,0-17,0L68,119ZM188,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H60v84a12,12,0,0,0,12,12H188Zm28-28H72a4,4,0,0,1-4-4V130.34l37.17-37.17a4,4,0,0,1,5.66,0l49.66,49.66a4,4,0,0,0,5.65,0l25.66-25.66a4,4,0,0,1,5.66,0L220,139.71V168A4,4,0,0,1,216,172ZM164,84a8,8,0,1,1,8,8A8,8,0,0,1,164,84Z",
                }),
            ),
        ],
    ]),
    W8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z",
                }),
            ),
        ],
    ]),
    K8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M188,49.68V32a20,20,0,0,0-20-20H88A20,20,0,0,0,68,32V49.68A44.06,44.06,0,0,0,36,92V200a44.05,44.05,0,0,0,44,44h96a44.05,44.05,0,0,0,44-44V92A44.06,44.06,0,0,0,188,49.68ZM164,48H140V36h24ZM116,36V48H92V36Zm80,164a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V92A20,20,0,0,1,80,72h96a20,20,0,0,1,20,20Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,88V200a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V88A32,32,0,0,1,80,56h96A32,32,0,0,1,208,88Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32Zm96,168a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V88A24,24,0,0,1,80,64h96a24,24,0,0,1,24,24Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM120,48V32h16V48Zm48,0H152V32h16ZM104,32V48H88V32Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M182,50.48V32a14,14,0,0,0-14-14H88A14,14,0,0,0,74,32V50.48A38.05,38.05,0,0,0,42,88V200a38,38,0,0,0,38,38h96a38,38,0,0,0,38-38V88A38.05,38.05,0,0,0,182,50.48ZM170,32V50H150V30h18A2,2,0,0,1,170,32ZM118,50V30h20V50ZM88,30h18V50H86V32A2,2,0,0,1,88,30ZM202,200a26,26,0,0,1-26,26H80a26,26,0,0,1-26-26V88A26,26,0,0,1,80,62h96a26,26,0,0,1,26,26Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32Zm96,168a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V88A24,24,0,0,1,80,64h96a24,24,0,0,1,24,24Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M180,52.23V32a12,12,0,0,0-12-12H88A12,12,0,0,0,76,32V52.23A36,36,0,0,0,44,88V200a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V88A36,36,0,0,0,180,52.23ZM172,32V52H148V28h20A4,4,0,0,1,172,32ZM116,52V28h24V52ZM88,28h20V52H84V32A4,4,0,0,1,88,28ZM204,200a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V88A28,28,0,0,1,80,60h96a28,28,0,0,1,28,28Z",
                }),
            ),
        ],
    ]),
    X8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.42,39.86a12,12,0,0,0-11.28-11.28c-39.6-2.33-74.59,2.34-104,13.87C84,53.48,62.31,70.58,49.39,91.9c-17.62,29.11-17.66,64.45-.45,98.19L31.51,207.52a12,12,0,0,0,17,17l17.43-17.43c16.74,8.54,33.88,12.85,50.45,12.85a91.31,91.31,0,0,0,47.74-13.3c21.32-12.92,38.42-34.62,49.45-62.75C225.08,114.46,229.75,79.46,227.42,39.86ZM151.66,186.08C131.57,198.25,108,199.17,83.94,189l84.54-84.54a12,12,0,1,0-17-17L67,172.06c-10.14-24-9.22-47.63,3-67.72,20.91-34.53,70.54-53.72,134-52.25C205.38,115.53,186.19,165.17,151.66,186.08Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49A101.72,101.72,0,0,0,46.7,175.2a4,4,0,0,0,6.61,1.43l85-86.3a8,8,0,0,1,11.32,11.32L56.74,195.94,42.55,210.13a8.2,8.2,0,0,0-.6,11.1,8,8,0,0,0,11.71.43l16.79-16.79c14.14,6.84,28.41,10.57,42.56,11.07q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.45,40.19a6,6,0,0,0-5.64-5.64C140.43,30.11,80.14,52.71,54.53,95c-17.44,28.79-16.76,62.8,1.79,96.2L35.76,211.76a6,6,0,1,0,8.48,8.48L64.8,199.68c17.27,9.59,34.7,14.41,51.49,14.41A85.38,85.38,0,0,0,161,201.47C203.29,175.86,225.88,115.57,221.45,40.19Zm-66.66,151c-24.08,14.58-52.64,14.37-81.13-.39l90.59-90.59a6,6,0,0,0-8.48-8.48L65.18,182.34c-14.76-28.49-15-57-.39-81.13,22.68-37.43,76.63-57.8,145-54.95C212.59,114.58,192.22,168.54,154.79,191.21Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M219.45,40.31a4,4,0,0,0-3.76-3.76C141.06,32.16,81.46,54.39,56.24,96,39,124.56,39.9,158.37,58.8,191.54L37.17,213.17a4,4,0,0,0,5.66,5.66l21.63-21.64c17.39,9.91,35,14.89,51.83,14.89A83.43,83.43,0,0,0,160,199.76C201.61,174.54,223.84,114.93,219.45,40.31ZM155.82,192.92c-25.37,15.37-55.56,14.75-85.48-1.61l92.5-92.49a4,4,0,0,0-5.66-5.66l-92.49,92.5c-16.36-29.92-17-60.11-1.61-85.48C86.34,61.77,141.72,41,211.66,44.34,215,114.28,194.23,169.66,155.82,192.92Z",
                }),
            ),
        ],
    ]),
    J8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M87.5,151.52l64-64a12,12,0,0,1,17,17l-64,64a12,12,0,0,1-17-17Zm131-114a60.08,60.08,0,0,0-84.87,0L103.51,67.61a12,12,0,0,0,17,17l30.07-30.06a36,36,0,0,1,50.93,50.92L171.4,135.52a12,12,0,1,0,17,17l30.08-30.06A60.09,60.09,0,0,0,218.45,37.55ZM135.52,171.4l-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM144.56,173.66l-21.45,21.45a44,44,0,0,1-62.22-62.22l21.45-21.46a8,8,0,0,1,11.32,11.31L72.2,144.2a28,28,0,0,0,39.6,39.6l21.45-21.46a8,8,0,0,1,11.31,11.32Zm-34.9-16a8,8,0,0,1-11.32-11.32l48-48a8,8,0,0,1,11.32,11.32Zm85.45-34.55-21.45,21.45a8,8,0,0,1-11.32-11.31L183.8,111.8a28,28,0,0,0-39.6-39.6L122.74,93.66a8,8,0,0,1-11.31-11.32l21.46-21.45a44,44,0,0,1,62.22,62.22Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164.25,91.75a6,6,0,0,1,0,8.49l-64,64a6,6,0,0,1-8.49-8.48l64-64A6,6,0,0,1,164.25,91.75ZM214.2,41.8a54.07,54.07,0,0,0-76.38,0L107.75,71.85a6,6,0,0,0,8.49,8.49l30.07-30.06a42,42,0,0,1,59.41,59.41l-30.08,30.07a6,6,0,1,0,8.49,8.49l30.07-30.07A54,54,0,0,0,214.2,41.8ZM139.76,175.64l-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M162.84,93.16a4,4,0,0,1,0,5.66l-64,64a4,4,0,0,1-5.66-5.66l64-64A4,4,0,0,1,162.84,93.16Zm49.95-49.95a52.07,52.07,0,0,0-73.56,0L109.17,73.27a4,4,0,0,0,5.65,5.66l30.07-30.06a44,44,0,0,1,62.24,62.24l-30.07,30.06a4,4,0,0,0,5.66,5.66l30.07-30.06A52.07,52.07,0,0,0,212.79,43.21ZM141.17,177.06l-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z",
                }),
            ),
        ],
    ]),
    Y8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M76,64A12,12,0,0,1,88,52H216a12,12,0,0,1,0,24H88A12,12,0,0,1,76,64Zm140,52H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,64H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM44,112a16,16,0,1,0,16,16A16,16,0,0,0,44,112Zm0-64A16,16,0,1,0,60,64,16,16,0,0,0,44,48Zm0,128a16,16,0,1,0,16,16A16,16,0,0,0,44,176Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M216,64V192H88V64Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM68,188a12,12,0,1,1,12-12A12,12,0,0,1,68,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,68,140Zm0-48A12,12,0,1,1,80,80,12,12,0,0,1,68,92Zm124,92H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M82,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H88A6,6,0,0,1,82,64Zm134,58H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,64H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM44,54A10,10,0,1,0,54,64,10,10,0,0,0,44,54Zm0,128a10,10,0,1,0,10,10A10,10,0,0,0,44,182Zm0-64a10,10,0,1,0,10,10A10,10,0,0,0,44,118Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M84,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H88A4,4,0,0,1,84,64Zm132,60H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,64H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM44,120a8,8,0,1,0,8,8A8,8,0,0,0,44,120Zm0-64a8,8,0,1,0,8,8A8,8,0,0,0,44,56Zm0,128a8,8,0,1,0,8,8A8,8,0,0,0,44,184Z",
                }),
            ),
        ],
    ]),
    _8 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-76-92a32,32,0,0,0-12,61.66V180a12,12,0,0,0,24,0v-6.34A32,32,0,0,0,128,112Zm0,24a8,8,0,1,1-8,8A8,8,0,0,1,128,136Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,88H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V96A8,8,0,0,0,208,88Zm-80,72a20,20,0,1,1,20-20A20,20,0,0,1,128,160Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-80-96a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-72,78.63V184a8,8,0,0,1-16,0V158.63a24,24,0,1,1,16,0ZM160,80H96V56a32,32,0,0,1,64,0Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-82-94a26,26,0,0,0-6,51.29V184a6,6,0,0,0,12,0V165.29A26,26,0,0,0,128,114Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,128,154Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,112a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm80-72H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-84-92a24,24,0,0,0-4,47.66V184a4,4,0,0,0,8,0V163.66A24,24,0,0,0,128,116Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,128,156Z",
                }),
            ),
        ],
    ]),
    a4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z",
                }),
            ),
        ],
    ]),
    e4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,76H100V56a28,28,0,0,1,28-28c13.51,0,25.65,9.62,28.24,22.39a12,12,0,1,0,23.52-4.78C174.87,21.5,153.1,4,128,4A52.06,52.06,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76Zm-4,128H52V100H204Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,96V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80H80V56A48.05,48.05,0,0,1,128,8c23.2,0,43.32,16.15,47.84,38.41a8,8,0,0,1-15.68,3.18C157.2,35,143.37,24,128,24A32,32,0,0,0,96,56V80H208A16,16,0,0,1,224,96Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,82H94V56a34,34,0,0,1,34-34c16.3,0,31,11.69,34.12,27.19a6,6,0,0,0,11.76-2.38C169.55,25.48,150.26,10,128,10A46.06,46.06,0,0,0,82,56V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82Zm2,126a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,84H92V56a36,36,0,0,1,36-36c17.24,0,32.75,12.38,36.08,28.8a4,4,0,1,0,7.84-1.6C167.78,26.81,149.31,12,128,12A44.05,44.05,0,0,0,84,56V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84Zm4,124a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z",
                }),
            ),
        ],
    ]),
    t4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z",
                }),
            ),
        ],
    ]),
    l4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z",
                }),
            ),
        ],
    ]),
    n4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M219.29,31.5a20,20,0,0,0-18.52-2.14C187,34.72,159.17,43.7,128,43.7s-59-9-72.77-14.34A20,20,0,0,0,28,48v55.77c0,36.64,9.9,71.25,27.88,97.45C74.81,228.81,100.42,244,128,244s53.19-15.19,72.12-42.76C218.1,175,228,140.43,228,103.79V48A20,20,0,0,0,219.29,31.5ZM204,103.79c0,31.84-8.41,61.63-23.67,83.87C166,208.51,147.43,220,128,220s-38-11.49-52.33-32.34C60.41,165.42,52,135.63,52,103.79v-50c16.59,5.95,44.67,13.94,76,13.94s59.41-8,76-13.94Zm-38.67,62.88a12,12,0,0,1-1.79,16.87,56.92,56.92,0,0,1-71.08,0,12,12,0,0,1,15.08-18.67,32.92,32.92,0,0,0,40.92,0A12,12,0,0,1,165.33,166.67Zm-27.44-35.51a12,12,0,0,1,3.61-16.58,41.66,41.66,0,0,1,39.23-3.06,12,12,0,1,1-9.46,22.06A19.53,19.53,0,0,0,164,132a19.14,19.14,0,0,0-9.52,2.77,12,12,0,0,1-16.59-3.61ZM92,132a19.44,19.44,0,0,0-7.27,1.59,12,12,0,0,1-9.46-22.06,41.61,41.61,0,0,1,39.23,3,12,12,0,1,1-13,20.19A19.21,19.21,0,0,0,92,132Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48v55.77C216,174.6,176.6,232,128,232S40,174.6,40,103.79V48a8,8,0,0,1,10.89-7.47C66,46.41,95.11,55.71,128,55.71s62-9.3,77.11-15.16A8,8,0,0,1,216,48Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M217,34.8a15.94,15.94,0,0,0-14.82-1.71C188.15,38.55,159.82,47.71,128,47.71S67.84,38.55,53.79,33.09A16,16,0,0,0,32,48v55.77c0,35.84,9.65,69.65,27.18,95.18,18.16,26.46,42.6,41,68.82,41s50.66-14.57,68.82-41C214.35,173.44,224,139.63,224,103.79V48A16,16,0,0,0,217,34.8Zm-9,69c0,32.64-8.66,63.23-24.37,86.13C168.54,211.9,148.79,224,128,224s-40.54-12.1-55.63-34.08C56.66,167,48,136.43,48,103.79V48c15.11,5.87,45.58,15.71,80,15.71S192.9,53.87,208,48v55.81Zm-18,18.87A8,8,0,1,1,178,133.33c-2.68-3-8.85-5.33-14-5.33s-11.36,2.34-14,5.33A8,8,0,1,1,138,122.66c5.71-6.38,16.14-10.66,26-10.66S184.25,116.28,190,122.66ZM92,128c-5.19,0-11.36,2.34-14,5.33A8,8,0,1,1,66,122.66C71.75,116.28,82.18,112,92,112s20.25,4.28,26,10.66A8,8,0,1,1,106,133.33C103.36,130.34,97.19,128,92,128Zm76.45,45.19a52.9,52.9,0,0,1-80.9,0A8,8,0,1,1,99.72,162.8a36.89,36.89,0,0,0,56.56,0,8,8,0,0,1,12.17,10.39Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M217,34.8a15.94,15.94,0,0,0-14.82-1.71C188.15,38.55,159.82,47.71,128,47.71S67.84,38.55,53.79,33.09A16,16,0,0,0,32,48v55.77c0,35.84,9.65,69.65,27.18,95.18,18.16,26.46,42.6,41,68.82,41s50.66-14.57,68.82-41C214.35,173.44,224,139.63,224,103.79V48A16,16,0,0,0,217,34.8ZM78,133.33A8,8,0,1,1,66,122.66C71.75,116.28,82.18,112,92,112s20.25,4.28,26,10.66A8,8,0,1,1,106,133.33c-2.68-3-8.85-5.33-14-5.33S80.64,130.34,78,133.33Zm90.49,47.86a52.9,52.9,0,0,1-80.9,0A8,8,0,1,1,99.72,170.8a36.89,36.89,0,0,0,56.56,0,8,8,0,0,1,12.17,10.39ZM189.34,134a8,8,0,0,1-11.3-.63c-2.68-3-8.85-5.33-14-5.33s-11.36,2.34-14,5.33A8,8,0,1,1,138,122.66c5.71-6.38,16.14-10.66,26-10.66s20.25,4.28,26,10.66A8,8,0,0,1,189.34,134Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M188.47,124a6,6,0,1,1-8.94,8c-3.06-3.42-9.74-6-15.53-6s-12.47,2.58-15.53,6a6,6,0,0,1-8.94-8c5.35-6,15.19-10,24.47-10S183.12,118,188.47,124Zm-80.94,8a6,6,0,1,0,8.94-8c-5.35-6-15.19-10-24.47-10s-19.12,4-24.47,10a6,6,0,1,0,8.94,8c3.06-3.42,9.74-6,15.53-6S104.47,128.58,107.53,132Zm58.73,31.43a6,6,0,0,0-8.46.67,38.89,38.89,0,0,1-59.6,0,6,6,0,1,0-9.13,7.79,50.9,50.9,0,0,0,77.86,0A6,6,0,0,0,166.26,163.43ZM222,48v55.77c0,35.45-9.53,68.86-26.83,94.06C177.4,223.74,153.54,238,128,238s-49.4-14.26-67.17-40.16C43.53,172.64,34,139.23,34,103.78V48A14,14,0,0,1,53.06,35C67.25,40.46,95.86,49.7,128,49.7S188.75,40.46,202.94,35A14,14,0,0,1,222,48Zm-12,0a2,2,0,0,0-.87-1.66,1.93,1.93,0,0,0-1.85-.21C192.31,52,162.1,61.7,128,61.7S63.69,52,48.72,46.14a2,2,0,0,0-1.85.21A2,2,0,0,0,46,48v55.76C46,171.17,82.79,226,128,226s82-54.83,82-122.22Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M217,34.8a15.94,15.94,0,0,0-14.82-1.71C188.15,38.55,159.82,47.71,128,47.71S67.84,38.55,53.79,33.09A16,16,0,0,0,32,48v55.77c0,35.84,9.65,69.65,27.18,95.18,18.16,26.46,42.6,41,68.82,41s50.66-14.57,68.82-41C214.35,173.44,224,139.63,224,103.79V48A16,16,0,0,0,217,34.8Zm-9,69c0,32.64-8.66,63.23-24.37,86.13C168.54,211.9,148.79,224,128,224s-40.54-12.1-55.63-34.08C56.66,167,48,136.43,48,103.79V48c15.11,5.87,45.58,15.71,80,15.71S192.9,53.87,208,48v55.81Zm-18,18.87A8,8,0,1,1,178,133.33c-2.68-3-8.85-5.33-14-5.33s-11.36,2.34-14,5.33A8,8,0,1,1,138,122.66c5.71-6.38,16.14-10.66,26-10.66S184.25,116.28,190,122.66ZM92,128c-5.19,0-11.36,2.34-14,5.33A8,8,0,1,1,66,122.66C71.75,116.28,82.18,112,92,112s20.25,4.28,26,10.66A8,8,0,1,1,106,133.33C103.36,130.34,97.19,128,92,128Zm76.45,45.19a52.9,52.9,0,0,1-80.9,0A8,8,0,1,1,99.72,162.8a36.89,36.89,0,0,0,56.56,0,8,8,0,0,1,12.17,10.39Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M187,125.33a4,4,0,1,1-6,5.33c-3.4-3.8-10.72-6.66-17-6.66s-13.62,2.86-17,6.66a4,4,0,0,1-3,1.34,4,4,0,0,1-3-6.67c4.92-5.5,14.37-9.33,23-9.33S182.06,119.83,187,125.33Zm-78,5.33a4,4,0,1,0,6-5.33c-4.92-5.5-14.37-9.33-23-9.33s-18.06,3.83-23,9.33A4,4,0,0,0,72,132a4,4,0,0,0,3-1.34c3.4-3.8,10.72-6.66,17-6.66S105.62,126.86,109,130.66Zm50.3,34.74a40.89,40.89,0,0,1-62.64,0,4,4,0,0,0-6.09,5.2,48.92,48.92,0,0,0,74.82,0,4,4,0,0,0-6.09-5.2ZM220,48v55.78c0,35-9.4,68-26.48,92.92C176.13,222.05,152.86,236,128,236s-48.13-13.95-65.52-39.29C45.4,171.83,36,138.83,36,103.79V48a12,12,0,0,1,16.34-11.2C66.66,42.38,95.53,51.7,128,51.7s61.34-9.32,75.66-14.88A12,12,0,0,1,220,48Zm-8,0a4,4,0,0,0-5.44-3.74C191.72,50,161.77,59.7,128,59.7S64.28,50,49.44,44.27A4.14,4.14,0,0,0,48,44a3.87,3.87,0,0,0-2.23.7A4,4,0,0,0,44,48v55.77C44,172.28,81.68,228,128,228s84-55.72,84-124.21Z",
                }),
            ),
        ],
    ]),
    m4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M229.7,82.84l-175.94-54-.16-.05A20,20,0,0,0,28,48V192a20,20,0,0,0,19.94,20,20.38,20.38,0,0,0,5.66-.81l.16,0,78.24-24V196a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V165.06l25.7-7.89A20.1,20.1,0,0,0,244,138V102A20.1,20.1,0,0,0,229.7,82.84ZM52,186.58V53.43L132,78V162ZM180,192H156V179.78l24-7.36Zm40-56.95-64,19.63V85.33L220,105Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M144,69.09V170.91L50.24,199.67A8,8,0,0,1,40,192V48a8,8,0,0,1,10.24-7.67Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM136,165,48,192V48l88,27Zm48,27H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.92l71.89,22,.11,0v36Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM184,192H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.91L223.89,102l.11,0v36Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,88.59l-176.08-54A14,14,0,0,0,34,48V192a14,14,0,0,0,14,14,14.59,14.59,0,0,0,4-.59L138,179v13a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V160.62l30-9.19A14.07,14.07,0,0,0,238,138V102A14,14,0,0,0,228,88.59ZM48.56,193.92a2,2,0,0,1-1.76-.32A2,2,0,0,1,46,192V48a2,2,0,0,1,.8-1.6A2.05,2.05,0,0,1,48,46a1.79,1.79,0,0,1,.49.08L138,73.53v92.95ZM186,192a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V175.35l36-11Zm40-54a2,2,0,0,1-1.44,1.92l-.08,0L150,162.8V77.21l74.56,22.87A2,2,0,0,1,226,102Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM136,165,48,192V48l88,27Zm48,27H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.92l71.89,22,.11,0v36Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.41,90.5l-176-54A12,12,0,0,0,36,48V192a12,12,0,0,0,12,12,12.41,12.41,0,0,0,3.45-.5L140,176.32V192a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V159.14l31.39-9.63A12.06,12.06,0,0,0,236,138V102A12,12,0,0,0,227.41,90.5ZM49.12,195.84A4,4,0,0,1,44,192V48a4,4,0,0,1,1.6-3.2A4,4,0,0,1,48,44a3.89,3.89,0,0,1,1.07.15L140,72.05V168ZM188,192a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V173.87l40-12.27Zm40-54a4,4,0,0,1-2.88,3.84l-.05,0L148,165.5v-91l77.12,23.66A4,4,0,0,1,228,102Z",
                }),
            ),
        ],
    ]),
    r4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,180a52.06,52.06,0,0,0,52-52V64A52,52,0,0,0,76,64v64A52.06,52.06,0,0,0,128,180ZM100,64a28,28,0,0,1,56,0v64a28,28,0,0,1-56,0Zm40,155.22V240a12,12,0,0,1-24,0V219.22A92.14,92.14,0,0,1,36,128a12,12,0,0,1,24,0,68,68,0,0,0,136,0,12,12,0,0,1,24,0A92.14,92.14,0,0,1,140,219.22Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,64v64a40,40,0,0,1-40,40h0a40,40,0,0,1-40-40V64a40,40,0,0,1,40-40h0A40,40,0,0,1,168,64Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,174a46.06,46.06,0,0,0,46-46V64a46,46,0,0,0-92,0v64A46.06,46.06,0,0,0,128,174ZM94,64a34,34,0,0,1,68,0v64a34,34,0,0,1-68,0Zm40,141.75V240a6,6,0,0,1-12,0V205.75A78.09,78.09,0,0,1,50,128a6,6,0,0,1,12,0,66,66,0,0,0,132,0,6,6,0,0,1,12,0A78.09,78.09,0,0,1,134,205.75Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,172a44.05,44.05,0,0,0,44-44V64a44,44,0,0,0-88,0v64A44.05,44.05,0,0,0,128,172ZM92,64a36,36,0,0,1,72,0v64a36,36,0,0,1-72,0Zm40,139.89V240a4,4,0,0,1-8,0V203.89A76.09,76.09,0,0,1,52,128a4,4,0,0,1,8,0,68,68,0,0,0,136,0,4,4,0,0,1,8,0A76.09,76.09,0,0,1,132,203.89Z",
                }),
            ),
        ],
    ]),
    c4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z",
                }),
            ),
        ],
    ]),
    A4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M211.45,52.51l-80-24A12,12,0,0,0,116,40V140.22A52,52,0,1,0,140,184V56.13l64.55,19.36a12,12,0,1,0,6.9-23ZM88,212a28,28,0,1,1,28-28A28,28,0,0,1,88,212Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,184a40,40,0,1,1-40-40A40,40,0,0,1,128,184Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M209.72,58.25l-80-24A6,6,0,0,0,122,40V153.05A46,46,0,1,0,134,184V48.06l72.27,21.69a6,6,0,1,0,3.45-11.5ZM88,218a34,34,0,1,1,34-34A34,34,0,0,1,88,218Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M209.15,60.17l-80-24A4,4,0,0,0,124,40V158.75A44,44,0,1,0,132,184V45.38l74.85,22.45a4,4,0,0,0,2.3-7.66ZM88,220a36,36,0,1,1,36-36A36,36,0,0,1,88,220Z",
                }),
            ),
        ],
    ]),
    h4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M215.38,14.54a12,12,0,0,0-10.29-2.18l-128,32A12,12,0,0,0,68,56V159.35A40,40,0,1,0,92,196V113.37l104-26v40A40,40,0,1,0,220,164V24A12,12,0,0,0,215.38,14.54ZM52,212a16,16,0,1,1,16-16A16,16,0,0,1,52,212ZM92,88.63V65.37l104-26V62.63ZM180,180a16,16,0,1,1,16-16A16,16,0,0,1,180,180Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,164a28,28,0,1,1-28-28A28,28,0,0,1,208,164ZM52,168a28,28,0,1,0,28,28A28,28,0,0,0,52,168Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V110.25l112-28v51.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69ZM52,216a20,20,0,1,1,20-20A20,20,0,0,1,52,216ZM88,93.75V62.25l112-28v31.5ZM180,184a20,20,0,1,1,20-20A20,20,0,0,1,180,184Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212.92,17.71a7.89,7.89,0,0,0-6.86-1.46l-128,32A8,8,0,0,0,72,56V166.1A36,36,0,1,0,88,196V102.25l112-28V134.1A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.71Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M211.69,19.27a6,6,0,0,0-5.15-1.09l-128,32A6,6,0,0,0,74,56V170.11A34,34,0,1,0,86,196V108.68l116-29v58.43A34,34,0,1,0,214,164V24A6,6,0,0,0,211.69,19.27ZM52,218a22,22,0,1,1,22-22A22,22,0,0,1,52,218ZM86,96.32V60.68l116-29V67.32ZM180,186a22,22,0,1,1,22-22A22,22,0,0,1,180,186Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V110.25l112-28v51.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69ZM52,216a20,20,0,1,1,20-20A20,20,0,0,1,52,216ZM88,93.75V62.25l112-28v31.5ZM180,184a20,20,0,1,1,20-20A20,20,0,0,1,180,184Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M210.46,20.85a4,4,0,0,0-3.43-.73l-128,32A4,4,0,0,0,76,56V174.87A32,32,0,1,0,84,196V107.12l120-30v65.75A32,32,0,1,0,212,164V24A4,4,0,0,0,210.46,20.85ZM52,220a24,24,0,1,1,24-24A24,24,0,0,1,52,220Zm128-32a24,24,0,1,1,24-24A24,24,0,0,1,180,188ZM84,98.88V59.12l120-30V68.88Z",
                }),
            ),
        ],
    ]),
    Z4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M238.7,102.46,62.81,37.21l-.25-.09A20,20,0,0,0,37.12,62.56l.09.25L102.46,238.7A20,20,0,0,0,121.3,252h.35a20,20,0,0,0,18.77-14.12l.09-.29,21.23-75.85,75.85-21.23.29-.09a20,20,0,0,0,.82-38Zm-89.93,38a12,12,0,0,0-8.32,8.32l-19.68,70.29L62.8,62.8l156.26,58Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M234.35,129,152,152,129,234.35a8,8,0,0,1-15.21.27l-65.28-176A8,8,0,0,1,58.63,48.46l176,65.28A8,8,0,0,1,234.35,129Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M237.33,106.21,61.41,41l-.16-.05A16,16,0,0,0,40.9,61.25a1,1,0,0,0,.05.16l65.26,175.92A15.77,15.77,0,0,0,121.28,248h.3a15.77,15.77,0,0,0,15-11.29l.06-.2,21.84-78,78-21.84.2-.06a16,16,0,0,0,.62-30.38ZM149.84,144.3a8,8,0,0,0-5.54,5.54L121.3,232l-.06-.17L56,56l175.82,65.22.16.06Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M248,121.58a15.76,15.76,0,0,1-11.29,15l-.2.06-78,21.84-21.84,78-.06.2a15.77,15.77,0,0,1-15,11.29h-.3a15.77,15.77,0,0,1-15.07-10.67L41,61.41a1,1,0,0,1-.05-.16A16,16,0,0,1,61.25,40.9l.16.05,175.92,65.26A15.78,15.78,0,0,1,248,121.58Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236.65,108.1,60.72,42.83l-.13,0A14,14,0,0,0,42.78,60.59s0,.09,0,.13L108.1,236.65A13.77,13.77,0,0,0,121.28,246h.26a13.8,13.8,0,0,0,13.14-9.88l0-.15,22.14-79.1L236,134.73l.15,0a14,14,0,0,0,.53-26.58Zm-4,15.1-82.26,23a6,6,0,0,0-4.16,4.16l-23,82.26a1.85,1.85,0,0,1-1.86,1.36,1.82,1.82,0,0,1-1.92-1.35.61.61,0,0,0,0-.12L54.11,56.62a2,2,0,0,1,2.51-2.51l175.91,65.26.12,0a2,2,0,0,1,0,3.79Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M237.33,106.21,61.41,41l-.16-.05A16,16,0,0,0,40.9,61.25a1,1,0,0,0,.05.16l65.26,175.92A15.77,15.77,0,0,0,121.28,248h.3a15.77,15.77,0,0,0,15-11.29l.06-.2,21.84-78,78-21.84.2-.06a16,16,0,0,0,.62-30.38ZM149.84,144.3a8,8,0,0,0-5.54,5.54L121.3,232l-.06-.17L56,56l175.82,65.22.16.06Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236,110,59.93,44.67A12,12,0,0,0,44.69,60L110,235.93A11.83,11.83,0,0,0,121.28,244h.22a11.82,11.82,0,0,0,11.26-8.47l0-.1,22.45-80.19,80.19-22.44.1,0A12,12,0,0,0,236,110Zm-2.79,15.12-82.3,23a4,4,0,0,0-2.78,2.77l-23,82.3a3.88,3.88,0,0,1-3.74,2.78,4,4,0,0,1-3.88-2.77L52.22,57.32a3.93,3.93,0,0,1,1-4.14A4,4,0,0,1,56,52a3.86,3.86,0,0,1,1.25.21l176.08,65.32a4,4,0,0,1-.09,7.59Z",
                }),
            ),
        ],
    ]),
    H4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.49,55.51l-32-32a12,12,0,0,0-17,0l-96,96A12,12,0,0,0,84,128v32a12,12,0,0,0,12,12h32a12,12,0,0,0,8.49-3.51l96-96A12,12,0,0,0,232.49,55.51ZM192,49l15,15L196,75,181,60Zm-69,99H108V133l56-56,15,15Zm105-7.43V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28h67.43a12,12,0,0,1,0,24H52V204H204V140.57a12,12,0,0,1,24,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M200,88l-72,72H96V128l72-72Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Zm5.66-58.34-96,96A8,8,0,0,1,128,168H96a8,8,0,0,1-8-8V128a8,8,0,0,1,2.34-5.66l96-96a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,229.66,69.66Zm-17-5.66L192,43.31,179.31,56,200,76.69Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228.24,59.76l-32-32a6,6,0,0,0-8.48,0l-96,96A6,6,0,0,0,90,128v32a6,6,0,0,0,6,6h32a6,6,0,0,0,4.24-1.76l96-96A6,6,0,0,0,228.24,59.76ZM125.51,154H102V130.49l66-66L191.51,88ZM200,79.51,176.49,56,192,40.49,215.51,64ZM222,128v80a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34h80a6,6,0,0,1,0,12H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2V128a6,6,0,0,1,12,0Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M226.83,61.17l-32-32a4,4,0,0,0-5.66,0l-96,96A4,4,0,0,0,92,128v32a4,4,0,0,0,4,4h32a4,4,0,0,0,2.83-1.17l96-96A4,4,0,0,0,226.83,61.17ZM126.34,156H100V129.66l68-68L194.34,88ZM200,82.34,173.66,56,192,37.66,218.34,64ZM220,128v80a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36h80a4,4,0,0,1,0,8H48a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V128a4,4,0,0,1,8,0Z",
                }),
            ),
        ],
    ]),
    M4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M172,124a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,124Zm-12,28H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24ZM220,40V200a36,36,0,0,1-36,36H72a36,36,0,0,1-36-36V40A12,12,0,0,1,48,28H72V24a12,12,0,0,1,24,0v4h20V24a12,12,0,0,1,24,0v4h20V24a12,12,0,0,1,24,0v4h24A12,12,0,0,1,220,40ZM196,52H184v4a12,12,0,0,1-24,0V52H140v4a12,12,0,0,1-24,0V52H96v4a12,12,0,0,1-24,0V52H60V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,40V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V40Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,40V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V40a8,8,0,0,1,8-8H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,40Zm-16,8H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H136V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48a8,8,0,0,0-8,8V200a32,32,0,0,0,32,32H184a32,32,0,0,0,32-32V40A8,8,0,0,0,208,32ZM120,56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM80,72a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0v8A8,8,0,0,1,80,72Zm80,96H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm24-72a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M166,128a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,128Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12ZM214,40V200a30,30,0,0,1-30,30H72a30,30,0,0,1-30-30V40a6,6,0,0,1,6-6H74V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h26A6,6,0,0,1,214,40Zm-12,6H182V56a6,6,0,0,1-12,0V46H134V56a6,6,0,0,1-12,0V46H86V56a6,6,0,0,1-12,0V46H54V200a18,18,0,0,0,18,18H184a18,18,0,0,0,18-18Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,40V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V40a8,8,0,0,1,8-8H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,40Zm-16,8H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164,128a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,128Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8ZM212,40V200a28,28,0,0,1-28,28H72a28,28,0,0,1-28-28V40a4,4,0,0,1,4-4H76V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h28A4,4,0,0,1,212,40Zm-8,4H180V56a4,4,0,0,1-8,0V44H132V56a4,4,0,0,1-8,0V44H84V56a4,4,0,0,1-8,0V44H52V200a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20Z",
                }),
            ),
        ],
    ]),
    V4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,178.57,87.73l-72-39.42Zm0,78.83L56,76,81.56,62l72,39.41ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l24-13.13V152a12,12,0,0,0,24,0V109.92l24-13.13v76.65Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,178.57,94.57,94.05,48.31ZM122,223,39,177.57a2,2,0,0,1-1-1.75V86.66l84,46ZM43.49,76,81.56,55.15l84.51,46.26L128,122.24ZM218,175.82a2,2,0,0,1-1,1.75h0L134,223V132.64l36-19.71V152a6,6,0,0,0,12,0V106.37l36-19.71Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,178.5,96.89a4,4,0,0,0-.58-.4l-88-48.18Zm1.92,96L39.33,76,81.56,52.87l88.67,48.54Zm-89.92,54.8a4,4,0,0,1-2.08-3.5V83.29l88,48.16v94.91Zm179.84,0h0l-85.92,47V131.45l40-21.89V152a4,4,0,0,0,8,0V105.18l40-21.89v92.53A4,4,0,0,1,217.92,179.32Z",
                }),
            ),
        ],
    ]),
    d4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M203.57,51A107.9,107.9,0,0,0,20,128c0,44.72,27.6,82.25,72,97.94A36,36,0,0,0,140,192a12,12,0,0,1,12-12h46.21a35.79,35.79,0,0,0,35.1-28A108.6,108.6,0,0,0,236,127.09,107.23,107.23,0,0,0,203.57,51Zm6.34,95.67a11.91,11.91,0,0,1-11.7,9.3H152a36,36,0,0,0-36,36,12,12,0,0,1-16,11.3c-16.65-5.88-30.65-15.76-40.48-28.56A76,76,0,0,1,44,128a84,84,0,0,1,83.13-84H128a84.35,84.35,0,0,1,84,83.29A84.72,84.72,0,0,1,209.91,146.71ZM144,76a16,16,0,1,1-16-16A16,16,0,0,1,144,76Zm-44,24A16,16,0,1,1,84,84,16,16,0,0,1,100,100Zm0,56a16,16,0,1,1-16-16A16,16,0,0,1,100,156Zm88-56a16,16,0,1,1-16-16A16,16,0,0,1,188,100Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,127.17a96.48,96.48,0,0,1-2.39,22.18A24,24,0,0,1,198.21,168H152a24,24,0,0,0-24,24,24,24,0,0,1-32,22.61C58.73,201.44,32,169.81,32,128a96,96,0,0,1,95-96C179.84,31.47,223.55,74.35,224,127.17Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89ZM84,168a12,12,0,1,1,12-12A12,12,0,0,1,84,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,84,112Zm44-24a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm44,24a12,12,0,1,1,12-12A12,12,0,0,1,172,112Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M199.37,55.31A101.32,101.32,0,0,0,128,26h-1A102,102,0,0,0,26,128c0,42.09,26.07,77.44,68,92.26A30.21,30.21,0,0,0,104.11,222,30.06,30.06,0,0,0,134,192a18,18,0,0,1,18-18h46.21a29.82,29.82,0,0,0,29.25-23.31A102.71,102.71,0,0,0,230,127.11,101.25,101.25,0,0,0,199.37,55.31ZM215.76,148a17.89,17.89,0,0,1-17.55,14H152a30,30,0,0,0-30,30,18,18,0,0,1-24,17C61,195.86,38,164.85,38,128a90,90,0,0,1,89.07-90H128a90.34,90.34,0,0,1,90,89.22A90.46,90.46,0,0,1,215.76,148ZM138,76a10,10,0,1,1-10-10A10,10,0,0,1,138,76ZM94,100A10,10,0,1,1,84,90,10,10,0,0,1,94,100Zm0,56a10,10,0,1,1-10-10A10,10,0,0,1,94,156Zm88-56a10,10,0,1,1-10-10A10,10,0,0,1,182,100Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M198,56.74A99.31,99.31,0,0,0,128,28h-1A100,100,0,0,0,28,128c0,41.22,25.55,75.85,66.69,90.38a28.34,28.34,0,0,0,9.42,1.63A28,28,0,0,0,132,192a20,20,0,0,1,20-20h46.21a27.84,27.84,0,0,0,27.3-21.76,100.37,100.37,0,0,0,2.49-23.1A99.26,99.26,0,0,0,198,56.74Zm19.74,91.72A19.89,19.89,0,0,1,198.21,164H152a28,28,0,0,0-28,28,20,20,0,0,1-26.64,18.83C59.51,197.46,36,165.72,36,128a92,92,0,0,1,91.05-92H128a92,92,0,0,1,89.72,112.46ZM136,76a8,8,0,1,1-8-8A8,8,0,0,1,136,76ZM92,100a8,8,0,1,1-8-8A8,8,0,0,1,92,100Zm0,56a8,8,0,1,1-8-8A8,8,0,0,1,92,156Zm88-56a8,8,0,1,1-8-8A8,8,0,0,1,180,100Z",
                }),
            ),
        ],
    ]),
    E4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.85,213.52l-22-176A20,20,0,0,0,186,20H70A20,20,0,0,0,50.15,37.52l-22,176A20,20,0,0,0,48,236H88.69A19.94,19.94,0,0,0,108.07,221l19.93-77,19.91,76.94A20,20,0,0,0,167.31,236H208a20,20,0,0,0,19.85-22.48ZM182.47,44l2,16H71.53l2-16ZM85.6,212H52.53l11.2-89.6A44.11,44.11,0,0,0,95.81,84H116V94.47Zm84.81,0L140,94.47V84h20.19a44.09,44.09,0,0,0,32.08,38.39L203.47,212Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M202.05,104c-.68,0-1.36,0-2.05,0a40,40,0,0,1-40-40H96a40,40,0,0,1-40,40c-.69,0-1.37,0-2,0L62.06,39A8,8,0,0,1,70,32H186a8,8,0,0,1,7.94,7Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M223.88,214l-22-176A16,16,0,0,0,186,24H70A16,16,0,0,0,54.12,38l-22,176A16,16,0,0,0,48,232H88.69a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232H208a16,16,0,0,0,15.88-18ZM192.9,95.2A32.13,32.13,0,0,1,169,72h21ZM186,40l2,16H68l2-16ZM66,72H87A32.13,32.13,0,0,1,63.1,95.2ZM88.69,216H48L61,111.73A48.08,48.08,0,0,0,103.32,72H120V95Zm78.6-.06L136,95V72h16.68A48.08,48.08,0,0,0,195,111.73L208,216Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M53.44,43.5,54.12,38A16,16,0,0,1,70,24H186a16,16,0,0,1,15.88,14l.68,5.49a4,4,0,0,1-4,4.5H57.41A4,4,0,0,1,53.44,43.5ZM169,64a32.06,32.06,0,0,0,31,24h3.59a4,4,0,0,0,4-4.5l-2-16a4,4,0,0,0-4-3.5ZM52.41,88H56A32.06,32.06,0,0,0,87,64H54.41a4,4,0,0,0-4,3.5l-2,16A4,4,0,0,0,52.41,88ZM223.88,214,210.56,107.5a4,4,0,0,0-4-3.5H200a48.07,48.07,0,0,1-47.32-40H136v39.73a8.18,8.18,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V64H103.32A48.07,48.07,0,0,1,56,104H49.41a4,4,0,0,0-4,3.5L32.12,214a16,16,0,0,0,6.71,15.09A16.56,16.56,0,0,0,48.39,232h40.3a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232h40.3a16.54,16.54,0,0,0,9.56-2.89A16,16,0,0,0,223.88,214Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.89,214.26l-22-176A14,14,0,0,0,186,26H70A14,14,0,0,0,56.11,38.26l-22,176A14,14,0,0,0,48,230H88.69a14,14,0,0,0,13.57-10.56L128,120l25.73,99.44A14,14,0,0,0,167.31,230H208a14,14,0,0,0,13.89-15.74ZM195.22,97.66A34.07,34.07,0,0,1,166.54,70h25.23ZM70,38H186a2,2,0,0,1,2,1.75L190.27,58H65.73L68,39.75A2,2,0,0,1,70,38ZM64.23,70H89.46A34.07,34.07,0,0,1,60.78,97.66Zm26.4,146.49A2,2,0,0,1,88.69,218H48a2,2,0,0,1-2-2.25L59.25,109.87A46.07,46.07,0,0,0,101.6,70H122V95.24Zm118.87.83a2,2,0,0,1-1.5.68H167.31a2,2,0,0,1-1.95-1.56L134,95.24V70h20.4a46.07,46.07,0,0,0,42.35,39.87L210,215.75A2,2,0,0,1,209.5,217.32Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223.88,214l-22-176A16,16,0,0,0,186,24H70A16,16,0,0,0,54.12,38l-22,176A16,16,0,0,0,48,232H88.69a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232H208a16,16,0,0,0,15.88-18ZM192.9,95.2A32.13,32.13,0,0,1,169,72h21ZM186,40l2,16H68l2-16ZM66,72H87A32.13,32.13,0,0,1,63.1,95.2ZM88.69,216H48L61,111.73A48.08,48.08,0,0,0,103.32,72H120V95Zm78.6-.06L136,95V72h16.68A48.08,48.08,0,0,0,195,111.73L208,216Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M219.91,214.51l-22-176A12,12,0,0,0,186,28H70A12,12,0,0,0,58.09,38.51l-22,176A12,12,0,0,0,48,228H88.69a12,12,0,0,0,11.64-9.06L128,112l27.67,106.94A12,12,0,0,0,167.31,228H208a12,12,0,0,0,11.91-13.49ZM197.52,99.9A36,36,0,0,1,164.23,68h29.3ZM70,36H186a4,4,0,0,1,4,3.5L192.53,60H63.47L66,39.5A4,4,0,0,1,70,36ZM62.47,68h29.3A36,36,0,0,1,58.48,99.9Zm30.1,149a4,4,0,0,1-3.88,3H48a4,4,0,0,1-4-4.5L57.47,108A44.05,44.05,0,0,0,99.81,68H124V95.49ZM211,218.65a4,4,0,0,1-3,1.35H167.31a4,4,0,0,1-3.89-3.06L132,95.49V68h24.19a44.05,44.05,0,0,0,42.34,40L212,215.5A4,4,0,0,1,211,218.65Z",
                }),
            ),
        ],
    ]),
    p4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M233.86,110.48,65.8,14.58A20,20,0,0,0,37.15,38.64L67.33,128,37.15,217.36A20,20,0,0,0,56,244a20.1,20.1,0,0,0,9.81-2.58l.09-.06,168-96.07a20,20,0,0,0,0-34.81ZM63.19,215.26,88.61,140H144a12,12,0,0,0,0-24H88.61L63.18,40.72l152.76,87.17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.91,134.86,59.93,231a8,8,0,0,1-11.44-9.67L80,128,48.49,34.72a8,8,0,0,1,11.44-9.67l168,95.85A8,8,0,0,1,227.91,134.86Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,127.89a16,16,0,0,1-8.18,14L63.9,237.9A16.15,16.15,0,0,1,56,240a16,16,0,0,1-15-21.33l27-79.95A4,4,0,0,1,71.72,136H144a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47h-72a4,4,0,0,1-3.79-2.72l-27-79.94A16,16,0,0,1,63.84,18.07l168,95.89A16,16,0,0,1,240,127.89Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.88,115.69l-168-95.88a14,14,0,0,0-20,16.87L73.66,128,42.81,219.33A14,14,0,0,0,56,238a14.15,14.15,0,0,0,6.93-1.83L230.84,140.1a14,14,0,0,0,0-24.41Zm-5.95,14L57,225.73a2,2,0,0,1-2.86-2.42.42.42,0,0,0,0-.1L84.3,134H144a6,6,0,0,0,0-12H84.3L54.17,32.8a.3.3,0,0,0,0-.1,1.87,1.87,0,0,1,.6-2.2A1.85,1.85,0,0,1,57,30.25l168,95.89a1.93,1.93,0,0,1,1,1.74A2,2,0,0,1,224.93,129.66Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M229.89,117.43l-168-95.88A12,12,0,0,0,44.7,36l31.08,92L44.71,220A12,12,0,0,0,56,236a12.13,12.13,0,0,0,5.93-1.57l167.94-96.08a12,12,0,0,0,0-20.92Zm-4,14L58,227.47a4,4,0,0,1-5.72-4.83l0-.07L82.87,132H144a4,4,0,0,0,0-8H82.87L52.26,33.37A3.89,3.89,0,0,1,53.44,29,4.13,4.13,0,0,1,56,28a3.88,3.88,0,0,1,1.93.54l168,95.87a4,4,0,0,1,0,7Z",
                }),
            ),
        ],
    ]),
    o4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223.69,42.18l-58.22,192a8,8,0,0,1-14.92,1.25L108,148,20.58,105.45a8,8,0,0,1,1.25-14.92l192-58.22A8,8,0,0,1,223.69,42.18Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.88,30.12a13.83,13.83,0,0,0-13.7-3.58l-.11,0L20.14,84.77A14,14,0,0,0,18,110.85l85.56,41.64L145.12,238a13.87,13.87,0,0,0,12.61,8c.4,0,.81,0,1.21-.05a13.9,13.9,0,0,0,12.29-10.09l58.2-191.93,0-.11A13.83,13.83,0,0,0,225.88,30.12Zm-8,10.4L159.73,232.43l0,.11a2,2,0,0,1-3.76.26l-40.68-83.58,49-49a6,6,0,1,0-8.49-8.49l-49,49L23.15,100a2,2,0,0,1,.31-3.74l.11,0L215.48,38.08a1.94,1.94,0,0,1,1.92.52A2,2,0,0,1,217.92,40.52Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224.47,31.52a11.87,11.87,0,0,0-11.82-3L20.74,86.67a12,12,0,0,0-1.91,22.38L105,151l41.92,86.15A11.88,11.88,0,0,0,157.74,244c.34,0,.69,0,1,0a11.89,11.89,0,0,0,10.52-8.63l58.21-192,0-.08A11.85,11.85,0,0,0,224.47,31.52Zm-4.62,9.54-58.23,192a4,4,0,0,1-7.48.59l-41.3-84.86,50-50a4,4,0,1,0-5.66-5.66l-50,50-84.9-41.31a3.88,3.88,0,0,1-2.27-4,3.93,3.93,0,0,1,3-3.54L214.9,36.16A3.93,3.93,0,0,1,216,36a4,4,0,0,1,2.79,1.19A3.93,3.93,0,0,1,219.85,41.06Z",
                }),
            ),
        ],
    ]),
    s4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212.48,136.49l-82.06,82a60,60,0,0,1-84.85-84.88l98.16-97.89a40,40,0,0,1,56.56,56.59l-.17.16-95.8,92.22a12,12,0,1,1-16.64-17.3l95.71-92.12a16,16,0,0,0-22.7-22.56L62.53,150.57a36,36,0,0,0,50.93,50.91l82.06-82a12,12,0,0,1,17,17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M180.75,104.75,204,128l-82.06,81.94a48,48,0,0,1-67.88-67.88L153.37,41.37a32,32,0,0,1,45.26,45.26Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,50.34a8,8,0,0,0-11.32,0L87.09,143A24,24,0,1,0,121,177l49.32-50.32a8,8,0,1,1,11.42,11.2l-49.37,50.38a40,40,0,1,1-56.62-56.51L143,63.09A24,24,0,1,1,177,97L109.71,165.6a8,8,0,1,1-11.42-11.2L165.6,85.71a8,8,0,0,0,.06-11.37Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208.25,123.76a6,6,0,0,1,0,8.49l-82.06,82a54,54,0,0,1-76.36-76.39L149.1,37.14a38,38,0,1,1,53.77,53.72L103.59,191.54a22,22,0,1,1-31.15-31.09l83.28-84.67a6,6,0,0,1,8.56,8.42L81,168.91a10,10,0,1,0,14.11,14.18L194.35,82.4a26,26,0,1,0-36.74-36.8L58.33,146.28a42,42,0,1,0,59.37,59.44l82.06-82A6,6,0,0,1,208.25,123.76Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M206.83,125.17a4,4,0,0,1,0,5.66l-82.06,82a52,52,0,0,1-73.54-73.55L150.52,38.55a36,36,0,1,1,50.94,50.9l-99.3,100.69a20,20,0,1,1-28.3-28.27l83.29-84.68a4,4,0,1,1,5.7,5.61L79.54,167.5a12,12,0,1,0,16.95,17L195.78,83.81A28,28,0,1,0,156.2,44.18L56.91,144.87a44,44,0,1,0,62.21,62.26l82-82A4,4,0,0,1,206.83,125.17Z",
                }),
            ),
        ],
    ]),
    g4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,164a36.07,36.07,0,0,0-33.94,24H72a28,28,0,0,1,0-56h96a44,44,0,0,0,0-88H72a12,12,0,0,0,0,24h96a20,20,0,0,1,0,40H72a52,52,0,0,0,0,104h94.06A36,36,0,1,0,200,164Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,200,212Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,200a24,24,0,1,1-24-24A24,24,0,0,1,224,200Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M200,168a32.06,32.06,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,200a28,28,0,0,1-54.83,8H72a48,48,0,0,1,0-96h96a24,24,0,0,0,0-48H72a8,8,0,0,1,0-16h96a40,40,0,0,1,0,80H72a32,32,0,0,0,0,64H173.17A28,28,0,0,1,228,200Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,170a30.05,30.05,0,0,0-29.4,24H72a34,34,0,0,1,0-68h96a38,38,0,0,0,0-76H72a6,6,0,0,0,0,12h96a26,26,0,0,1,0,52H72a46,46,0,0,0,0,92h98.6A30,30,0,1,0,200,170Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,200,218Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,168a32.06,32.06,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,172a28,28,0,0,0-27.71,24H72a36,36,0,0,1,0-72h96a36,36,0,0,0,0-72H72a4,4,0,0,0,0,8h96a28,28,0,0,1,0,56H72a44,44,0,0,0,0,88H172.29A28,28,0,1,0,200,172Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,200,220Z",
                }),
            ),
        ],
    ]),
    i4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z",
                }),
            ),
        ],
    ]),
    u4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0L33.86,149.17A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H216a12,12,0,0,0,0-24H125L230.15,98.83A20,20,0,0,0,230.15,70.54ZM136,81l11,11L76,163,65,152ZM52,204V173l15.52,15.51h0L83,204Zm52-13L93,180l71-71,11,11Zm88-88L153,64l18.34-18.34,39,39Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM79.32,188,164,103.31,180.69,120,96,204.69ZM68,176.69,51.31,160,136,75.31,152.69,92Zm-20,2.62L76.69,208H48Zm144-70.62L147.32,64l24-24L216,84.69Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM79.32,188l90.34-90.34,16.69,16.68L96,204.69Zm79-101.66h0L68,176.69,51.31,160l90.35-90.34ZM48,179.31,76.69,208H48Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H216a6,6,0,0,0,0-12H110.49L225.91,94.59A14,14,0,0,0,225.91,74.79ZM76.49,188,164,100.48,183.52,120,96,207.51ZM68,179.52,48.49,160,136,72.49,155.52,92ZM46,208V174.48L81.52,210H48A2,2,0,0,1,46,208ZM217.42,86.1,192,111.52,144.49,64,169.9,38.59a2,2,0,0,1,2.83,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L39.51,154.83A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H216a4,4,0,0,0,0-8H105.66L224.49,93.17A12,12,0,0,0,224.49,76.2ZM73.66,188,164,97.66,186.35,120,96,210.34ZM68,182.34,45.66,160,136,69.66,158.35,92ZM44,208V169.66l21.17,21.17h0L86.34,212H48A4,4,0,0,1,44,208ZM218.83,87.51,192,114.34,141.66,64l26.83-26.83a4,4,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z",
                }),
            ),
        ],
    ]),
    L4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.9,74.78,181.21,30.09a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L225.9,94.58a14,14,0,0,0,0-19.8ZM94.1,209.41a2,2,0,0,1-1.41.59H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41L136,72.48,183.51,120ZM217.41,86.1,192,111.51,144.49,64,169.9,38.58a2,2,0,0,1,2.83,0l44.68,44.69a2,2,0,0,1,0,2.83Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L133.17,61.17h0L39.52,154.83A11.9,11.9,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51L224.48,93.17a12,12,0,0,0,0-17Zm-129,134.63A4,4,0,0,1,92.69,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.83L136,69.65,186.34,120ZM218.83,87.51,192,114.34,141.66,64l26.82-26.83a4,4,0,0,1,5.66,0l44.69,44.68a4,4,0,0,1,0,5.66Z",
                }),
            ),
        ],
    ]),
    y4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0L33.86,149.17A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H216a12,12,0,0,0,0-24H125L230.15,98.83A20,20,0,0,0,230.15,70.54ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM48,163.31l88-88L180.69,120l-88,88H48Zm144-54.62L147.32,64l24-24L216,84.69Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM192,108.69,147.32,64l24-24L216,84.69Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H216a6,6,0,0,0,0-12H110.49L225.91,94.59A14,14,0,0,0,225.91,74.79ZM93.52,210H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41L136,72.49,183.52,120ZM217.42,86.1,192,111.52,144.49,64,169.9,38.59a2,2,0,0,1,2.83,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L39.51,154.83A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H216a4,4,0,0,0,0-8H105.66L224.49,93.17A12,12,0,0,0,224.49,76.2ZM94.34,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.82L136,69.66,186.35,120ZM218.83,87.51,192,114.34,141.66,64l26.83-26.83a4,4,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z",
                }),
            ),
        ],
    ]),
    v4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z",
                }),
            ),
        ],
    ]),
    F4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z",
                }),
            ),
        ],
    ]),
    f4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z",
                }),
            ),
        ],
    ]),
    w4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M20,128A76.08,76.08,0,0,1,96,52h99l-3.52-3.51a12,12,0,1,1,17-17l24,24a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L195,76H96a52.06,52.06,0,0,0-52,52,12,12,0,0,1-24,0Zm204-12a12,12,0,0,0-12,12,52.06,52.06,0,0,1-52,52H61l3.52-3.51a12,12,0,1,0-17-17l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,1,0,17-17L61,204h99a76.08,76.08,0,0,0,76-76A12,12,0,0,0,224,116Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,64v64a64,64,0,0,1-64,64H32V128A64,64,0,0,1,96,64Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M24,128A72.08,72.08,0,0,1,96,56H204.69L194.34,45.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L204.69,72H96a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0Zm200-8a8,8,0,0,0-8,8,56.06,56.06,0,0,1-56,56H51.31l10.35-10.34a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L51.31,200H160a72.08,72.08,0,0,0,72-72A8,8,0,0,0,224,120Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M24,128A72.08,72.08,0,0,1,96,56h96V40a8,8,0,0,1,13.66-5.66l24,24a8,8,0,0,1,0,11.32l-24,24A8,8,0,0,1,192,88V72H96a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0Zm200-8a8,8,0,0,0-8,8,56.06,56.06,0,0,1-56,56H64V168a8,8,0,0,0-13.66-5.66l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,64,216V200h96a72.08,72.08,0,0,0,72-72A8,8,0,0,0,224,120Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M26,128A70.08,70.08,0,0,1,96,58H209.51L195.76,44.24a6,6,0,0,1,8.48-8.48l24,24a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L209.51,70H96a58.07,58.07,0,0,0-58,58,6,6,0,0,1-12,0Zm198-6a6,6,0,0,0-6,6,58.07,58.07,0,0,1-58,58H46.49l13.75-13.76a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,0,0,8.48-8.48L46.49,198H160a70.08,70.08,0,0,0,70-70A6,6,0,0,0,224,122Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M24,128A72.08,72.08,0,0,1,96,56H204.69L194.34,45.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L204.69,72H96a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0Zm200-8a8,8,0,0,0-8,8,56.06,56.06,0,0,1-56,56H51.31l10.35-10.34a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L51.31,200H160a72.08,72.08,0,0,0,72-72A8,8,0,0,0,224,120Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M28,128A68.07,68.07,0,0,1,96,60H214.34L197.17,42.83a4,4,0,0,1,5.66-5.66l24,24a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L214.34,68H96a60.07,60.07,0,0,0-60,60,4,4,0,0,1-8,0Zm196-4a4,4,0,0,0-4,4,60.07,60.07,0,0,1-60,60H41.66l17.17-17.17a4,4,0,0,0-5.66-5.66l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L41.66,196H160a68.07,68.07,0,0,0,68-68A4,4,0,0,0,224,124Z",
                }),
            ),
        ],
    ]),
    k4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,136H48a20,20,0,0,0-20,20v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V156A20,20,0,0,0,208,136Zm-4,52H52V160H204Zm4-144H48A20,20,0,0,0,28,64v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44Zm-4,52H52V68H204Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,152v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8H208A8,8,0,0,1,216,152Zm-8-96H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V64A8,8,0,0,0,208,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,152v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H208A16,16,0,0,1,224,152ZM208,48H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,138H48a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,50H48A14,14,0,0,0,34,64v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V64A14,14,0,0,0,208,50Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,140H48a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,52H48A12,12,0,0,0,36,64v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V64A12,12,0,0,0,208,52Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z",
                }),
            ),
        ],
    ]),
    C4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228.75,100.05c-3.52-3.67-7.15-7.46-8.34-10.33-1.06-2.56-1.14-7.83-1.21-12.47-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21-2.87-1.19-6.66-4.82-10.33-8.34C148.87,20.46,140.05,12,128,12s-20.87,8.46-27.95,15.25c-3.67,3.52-7.46,7.15-10.33,8.34-2.56,1.06-7.83,1.14-12.47,1.21C67.25,37,54.81,37.14,46,46S37,67.25,36.8,77.25c-.07,4.64-.15,9.91-1.21,12.47-1.19,2.87-4.82,6.66-8.34,10.33C20.46,107.13,12,116,12,128S20.46,148.87,27.25,156c3.52,3.67,7.15,7.46,8.34,10.33,1.06,2.56,1.14,7.83,1.21,12.47.15,10,.34,22.44,9.18,31.27s21.27,9,31.27,9.18c4.64.07,9.91.15,12.47,1.21,2.87,1.19,6.66,4.82,10.33,8.34C107.13,235.54,116,244,128,244s20.87-8.46,27.95-15.25c3.67-3.52,7.46-7.15,10.33-8.34,2.56-1.06,7.83-1.14,12.47-1.21,10-.15,22.44-.34,31.27-9.18s9-21.27,9.18-31.27c.07-4.64.15-9.91,1.21-12.47,1.19-2.87,4.82-6.66,8.34-10.33C235.54,148.87,244,140.05,244,128S235.54,107.13,228.75,100.05Zm-17.32,39.29c-4.82,5-10.28,10.72-13.19,17.76-2.82,6.8-2.93,14.16-3,21.29-.08,5.36-.19,12.71-2.15,14.66s-9.3,2.07-14.66,2.15c-7.13.11-14.49.22-21.29,3-7,2.91-12.73,8.37-17.76,13.19C135.78,214.84,130.4,220,128,220s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.19-6.8-2.82-14.16-2.93-21.29-3-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29-2.91-7-8.37-12.73-13.19-17.76C41.16,135.78,36,130.4,36,128s5.16-7.78,8.57-11.34c4.82-5,10.28-10.72,13.19-17.76,2.82-6.8,2.93-14.16,3-21.29C60.88,72.25,61,64.9,63,63s9.3-2.07,14.66-2.15c7.13-.11,14.49-.22,21.29-3,7-2.91,12.73-8.37,17.76-13.19C120.22,41.16,125.6,36,128,36s7.78,5.16,11.34,8.57c5,4.82,10.72,10.28,17.76,13.19,6.8,2.82,14.16,2.93,21.29,3,5.36.08,12.71.19,14.66,2.15s2.07,9.3,2.15,14.66c.11,7.13.22,14.49,3,21.29,2.91,7,8.37,12.73,13.19,17.76,3.41,3.56,8.57,8.94,8.57,11.34S214.84,135.78,211.43,139.34ZM176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224.42,104.2c-3.9-4.07-7.93-8.27-9.55-12.18-1.5-3.63-1.58-9-1.67-14.68-.14-9.38-.3-20-7.42-27.12S188,42.94,178.66,42.8c-5.68-.09-11-.17-14.68-1.67-3.91-1.62-8.11-5.65-12.18-9.55C145.16,25.22,137.64,18,128,18s-17.16,7.22-23.8,13.58c-4.07,3.9-8.27,7.93-12.18,9.55-3.63,1.5-9,1.58-14.68,1.67-9.38.14-20,.3-27.12,7.42S42.94,68,42.8,77.34c-.09,5.68-.17,11-1.67,14.68-1.62,3.91-5.65,8.11-9.55,12.18C25.22,110.84,18,118.36,18,128s7.22,17.16,13.58,23.8c3.9,4.07,7.93,8.27,9.55,12.18,1.5,3.63,1.58,9,1.67,14.68.14,9.38.3,20,7.42,27.12S68,213.06,77.34,213.2c5.68.09,11,.17,14.68,1.67,3.91,1.62,8.11,5.65,12.18,9.55C110.84,230.78,118.36,238,128,238s17.16-7.22,23.8-13.58c4.07-3.9,8.27-7.93,12.18-9.55,3.63-1.5,9-1.58,14.68-1.67,9.38-.14,20-.3,27.12-7.42s7.28-17.74,7.42-27.12c.09-5.68.17-11,1.67-14.68,1.62-3.91,5.65-8.11,9.55-12.18C230.78,145.16,238,137.64,238,128S230.78,110.84,224.42,104.2Zm-8.66,39.3c-4.67,4.86-9.5,9.9-12,15.9-2.38,5.74-2.48,12.52-2.58,19.08-.11,7.44-.23,15.14-3.9,18.82s-11.38,3.79-18.82,3.9c-6.56.1-13.34.2-19.08,2.58-6,2.48-11,7.31-15.91,12-5.25,5-10.68,10.24-15.49,10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12-5.74-2.38-12.52-2.48-19.08-2.58-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08-2.48-6-7.31-11-12-15.91C35.21,138.24,30,132.81,30,128s5.21-10.24,10.24-15.5c4.67-4.86,9.5-9.9,12-15.9,2.38-5.74,2.48-12.52,2.58-19.08.11-7.44.23-15.14,3.9-18.82s11.38-3.79,18.82-3.9c6.56-.1,13.34-.2,19.08-2.58,6-2.48,11-7.31,15.91-12C117.76,35.21,123.19,30,128,30s10.24,5.21,15.5,10.24c4.86,4.67,9.9,9.5,15.9,12,5.74,2.38,12.52,2.48,19.08,2.58,7.44.11,15.14.23,18.82,3.9s3.79,11.38,3.9,18.82c.1,6.56.2,13.34,2.58,19.08,2.48,6,7.31,11,12,15.91,5,5.25,10.24,10.68,10.24,15.49S220.79,138.24,215.76,143.5ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M223,105.58c-4-4.2-8.2-8.54-10-12.8-1.65-4-1.73-9.53-1.82-15.41-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82-4.26-1.76-8.6-5.93-12.8-9.95-6.68-6.41-13.59-13-22.42-13s-15.74,6.62-22.42,13c-4.2,4-8.54,8.2-12.8,10-4,1.65-9.53,1.73-15.41,1.82-9,.14-19.19.29-25.74,6.83S44.94,68.37,44.8,77.37c-.09,5.88-.17,11.43-1.82,15.41-1.76,4.26-5.93,8.6-9.95,12.8-6.41,6.68-13,13.59-13,22.42s6.62,15.74,13,22.42c4,4.2,8.2,8.54,10,12.8,1.65,4,1.73,9.53,1.82,15.41.14,9,.29,19.19,6.83,25.74s16.74,6.69,25.74,6.83c5.88.09,11.43.17,15.41,1.82,4.26,1.76,8.6,5.93,12.8,9.95,6.68,6.41,13.59,13,22.42,13s15.74-6.62,22.42-13c4.2-4,8.54-8.2,12.8-10,4-1.65,9.53-1.73,15.41-1.82,9-.14,19.19-.29,25.74-6.83s6.69-16.74,6.83-25.74c.09-5.88.17-11.43,1.82-15.41,1.76-4.26,5.93-8.6,9.95-12.8,6.41-6.68,13-13.59,13-22.42S229.38,112.26,223,105.58Zm-5.78,39.3c-4.54,4.73-9.24,9.63-11.57,15.28-2.23,5.39-2.33,12-2.43,18.35-.12,8.2-.24,16-4.49,20.2s-12,4.37-20.2,4.49c-6.37.1-13,.2-18.35,2.43-5.65,2.33-10.55,7-15.28,11.57C139.09,222.75,133.62,228,128,228s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57-5.39-2.23-12-2.33-18.35-2.43-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35-2.33-5.65-7-10.55-11.57-15.28C33.25,139.09,28,133.62,28,128s5.25-11.09,10.8-16.88c4.54-4.73,9.24-9.63,11.57-15.28,2.23-5.39,2.33-12,2.43-18.35.12-8.2.24-15.95,4.49-20.2s12-4.37,20.2-4.49c6.37-.1,13-.2,18.35-2.43,5.65-2.33,10.55-7,15.28-11.57C116.91,33.25,122.38,28,128,28s11.09,5.25,16.88,10.8c4.73,4.54,9.63,9.24,15.28,11.57,5.39,2.23,12,2.33,18.35,2.43,8.2.12,16,.24,20.2,4.49s4.37,12,4.49,20.2c.1,6.37.2,13,2.43,18.35,2.33,5.65,7,10.55,11.57,15.28,5.55,5.79,10.8,11.26,10.8,16.88S222.75,139.09,217.2,144.88Zm-46.37-43.71a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17Z",
                }),
            ),
        ],
    ]),
    $4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240.49,103.52l-80-80A12,12,0,0,0,140,32V68.74c-25.76,3.12-53.66,15.89-76.75,35.47-29.16,24.74-47.32,56.69-51.14,90A16,16,0,0,0,39.67,207h0c10.46-11.14,47-45.74,100.33-50.42V192a12,12,0,0,0,20.48,8.48l80-80A12,12,0,0,0,240.49,103.52ZM164,163V144a12,12,0,0,0-12-12c-49,0-86.57,21.56-109.79,40.11,7.13-18.16,19.63-35.22,36.57-49.59C101.3,103.41,128.67,92,152,92a12,12,0,0,0,12-12V61l51,51Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M152,192V144c-61.4,0-104.61,37.19-121.07,54.72a4,4,0,0,1-6.9-3.18C31.51,130.45,99.19,80,152,80V32l80,80Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58h0c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M237.66,117.66l-80,80A8,8,0,0,1,144,192V152.23c-57.1,3.24-96.25,40.27-107.24,52h0a12,12,0,0,1-20.68-9.58c3.71-32.26,21.38-63.29,49.76-87.37,23.57-20,52.22-32.69,78.16-34.91V32a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,237.66,117.66Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236.24,107.76l-80-80A6,6,0,0,0,146,32V74.2c-54.48,3.59-120.39,55-127.93,120.66a10,10,0,0,0,17.23,8h0C46.56,190.85,87,152.6,146,150.13V192a6,6,0,0,0,10.24,4.24l80-80A6,6,0,0,0,236.24,107.76ZM158,177.52V144a6,6,0,0,0-6-6c-27.73,0-54.76,7.25-80.32,21.55a193.38,193.38,0,0,0-40.81,30.65c4.7-26.56,20.16-52,44-72.27C98.47,97.94,127.29,86,152,86a6,6,0,0,0,6-6V46.49L223.51,112Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58h0c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M234.83,109.17l-80-80A4,4,0,0,0,148,32V76.09c-54,2.44-120.43,53.55-127.94,119a7.87,7.87,0,0,0,4.58,8.16,8,8,0,0,0,3.41.77,7.9,7.9,0,0,0,5.79-2.55h0c11.53-12.27,53.29-51.73,114.16-53.4V192a4,4,0,0,0,6.83,2.83l80-80A4,4,0,0,0,234.83,109.17ZM156,182.33V144a4,4,0,0,0-4-4c-27.39,0-54.08,7.17-79.34,21.3A189.91,189.91,0,0,0,28,196l2.92,2.74L28,196c3.36-29.21,19.55-57.48,45.6-79.57C97.53,96.11,126.83,84,152,84a4,4,0,0,0,4-4V41.66L226.34,112Z",
                }),
            ),
        ],
    ]),
    x4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,24V76H44V60ZM44,196V100H212v96Zm136-72a52,52,0,0,1-104,0,12,12,0,0,1,24,0,28,28,0,0,0,56,0,12,12,0,0,1,24,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,56V80H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM128,160a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0A48.05,48.05,0,0,1,128,160ZM40,72V56H216V72Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V74H38V56A2,2,0,0,1,40,54ZM216,202H40a2,2,0,0,1-2-2V86H218V200A2,2,0,0,1,216,202Zm-42-90a46,46,0,0,1-92,0,6,6,0,0,1,12,0,34,34,0,0,0,68,0,6,6,0,0,1,12,0Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V76H36V56A4,4,0,0,1,40,52ZM216,204H40a4,4,0,0,1-4-4V84H220V200A4,4,0,0,1,216,204Zm-44-92a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z",
                }),
            ),
        ],
    ]),
    b4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,48V88a12,12,0,0,1-24,0V77L164.77,108.2a12,12,0,0,1-17-17L179,60H168a12,12,0,0,1,0-24h40A12,12,0,0,1,220,48ZM208,156a12,12,0,0,0-12,12v11L56.49,39.51a12,12,0,0,0-17,17L179,196H168a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156ZM91.23,147.8,39.51,199.51a12,12,0,0,0,17,17l51.71-51.72a12,12,0,0,0-17-17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M48,48l80,80L48,208Zm80,80,80,80V48Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M216,48V88a8,8,0,0,1-16,0V67.31L156.28,111A8,8,0,0,1,145,99.72L188.69,56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48Zm-8,112a8,8,0,0,0-8,8v20.69L53.66,42.34A8,8,0,0,0,42.34,53.66L188.69,200H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM99.72,145,42.34,202.34a8,8,0,0,0,11.32,11.32L111,156.28A8,8,0,0,0,99.72,145Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48V88a8,8,0,0,1-13.66,5.66L188,79.31,156.28,111A8,8,0,0,1,145,99.72L176.69,68,162.34,53.66A8,8,0,0,1,168,40h40A8,8,0,0,1,216,48Zm-4.94,112.61a8,8,0,0,0-8.72,1.73L188,176.69,53.66,42.34A8,8,0,0,0,42.34,53.66L176.69,188l-14.35,14.34A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.06,160.61ZM99.72,145,42.34,202.34a8,8,0,0,0,11.32,11.32L111,156.28A8,8,0,0,0,99.72,145Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M214,48V88a6,6,0,0,1-12,0V62.48l-47.13,47.14a6,6,0,0,1-8.49-8.49L193.52,54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48Zm-6,114a6,6,0,0,0-6,6v25.52L52.24,43.76a6,6,0,0,0-8.48,8.48L193.52,202H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM101.13,146.38,43.76,203.76a6,6,0,1,0,8.48,8.48l57.38-57.37a6,6,0,0,0-8.49-8.49Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48V88a8,8,0,0,1-16,0V67.31L156.28,111A8,8,0,0,1,145,99.72L188.69,56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48Zm-8,112a8,8,0,0,0-8,8v20.69L53.66,42.34A8,8,0,0,0,42.34,53.66L188.69,200H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM99.72,145,42.34,202.34a8,8,0,0,0,11.32,11.32L111,156.28A8,8,0,0,0,99.72,145Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212,48V88a4,4,0,0,1-8,0V57.66L153.46,108.2a4,4,0,1,1-5.66-5.66L198.34,52H168a4,4,0,0,1,0-8h40A4,4,0,0,1,212,48Zm-4,116a4,4,0,0,0-4,4v30.34L50.83,45.17a4,4,0,0,0-5.66,5.66L198.34,204H168a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,208,164ZM102.54,147.8,45.17,205.17a4,4,0,0,0,5.66,5.66l57.37-57.37a4,4,0,1,0-5.66-5.66Z",
                }),
            ),
        ],
    ]),
    R4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M201.75,30.52a20,20,0,0,0-20.3.53L68,102V40a12,12,0,0,0-24,0V216a12,12,0,0,0,24,0V154l113.45,71A20,20,0,0,0,212,208.12V47.88A19.86,19.86,0,0,0,201.75,30.52ZM188,200.73,71.7,128,188,55.27Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,47.88V208.12a8,8,0,0,1-12.19,6.65L59.7,134.65a7.83,7.83,0,0,1,0-13.3L187.81,41.23A8,8,0,0,1,200,47.88Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M199.81,34a16,16,0,0,0-16.24.43L64,109.23V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0V146.77l119.57,74.78A15.95,15.95,0,0,0,208,208.12V47.88A15.86,15.86,0,0,0,199.81,34ZM192,208,64.16,128,192,48.07Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,47.88V208.12a16,16,0,0,1-24.43,13.43L64,146.77V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v69.23L183.57,34.45A15.95,15.95,0,0,1,208,47.88Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M198.84,35.77a14,14,0,0,0-14.21.37L62,112.83V40a6,6,0,0,0-12,0V216a6,6,0,0,0,12,0V143.16l122.63,76.7a14,14,0,0,0,14.21.37A13.69,13.69,0,0,0,206,208.12V47.88A13.69,13.69,0,0,0,198.84,35.77ZM194,208.12a1.79,1.79,0,0,1-1,1.62,2,2,0,0,1-2-.05L62.88,129.56a1.82,1.82,0,0,1,0-3.12L191,46.31a2,2,0,0,1,1-.31,2.1,2.1,0,0,1,1,.26,1.79,1.79,0,0,1,1,1.62Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M199.81,34a16,16,0,0,0-16.24.43L64,109.23V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0V146.77l119.57,74.78A15.95,15.95,0,0,0,208,208.12V47.88A15.86,15.86,0,0,0,199.81,34ZM192,208,64.16,128,192,48.07Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M197.87,37.52a12,12,0,0,0-12.18.32L60,116.44V40a4,4,0,0,0-8,0V216a4,4,0,0,0,8,0V139.56l125.69,78.6a12,12,0,0,0,12.18.32A11.69,11.69,0,0,0,204,208.12V47.88A11.69,11.69,0,0,0,197.87,37.52ZM196,208.12a3.8,3.8,0,0,1-2,3.37,4,4,0,0,1-4.06-.11L61.82,131.26a3.83,3.83,0,0,1,0-6.52L189.94,44.62a4,4,0,0,1,2.11-.62,4,4,0,0,1,1.95.51,3.8,3.8,0,0,1,2,3.37Z",
                }),
            ),
        ],
    ]),
    S4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,28a12,12,0,0,0-12,12v62l-113.45-71A20,20,0,0,0,44,47.88V208.12A20,20,0,0,0,74.55,225L188,154v62a12,12,0,0,0,24,0V40A12,12,0,0,0,200,28ZM68,200.73V55.27L184.3,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M196.3,134.65,68.19,214.77A8,8,0,0,1,56,208.12V47.88a8,8,0,0,1,12.19-6.65L196.3,121.35A7.83,7.83,0,0,1,196.3,134.65Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,40V216a8,8,0,0,1-16,0V146.77L72.43,221.55A15.95,15.95,0,0,1,48,208.12V47.88A15.95,15.95,0,0,1,72.43,34.45L192,109.23V40a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,34a6,6,0,0,0-6,6v72.84L71.37,36.14a14,14,0,0,0-14.21-.37A13.69,13.69,0,0,0,50,47.88V208.12a13.69,13.69,0,0,0,7.16,12.11,14,14,0,0,0,14.21-.37L194,143.17V216a6,6,0,0,0,12,0V40A6,6,0,0,0,200,34Zm-6.88,95.56L65,209.69a2,2,0,0,1-2,.05,1.79,1.79,0,0,1-1-1.62V47.88a1.79,1.79,0,0,1,1-1.62A2.1,2.1,0,0,1,64,46a2,2,0,0,1,1,.31l128.12,80.13a1.82,1.82,0,0,1,0,3.12Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,36a4,4,0,0,0-4,4v76.44L70.31,37.84a12,12,0,0,0-12.18-.32A11.69,11.69,0,0,0,52,47.88V208.12a11.69,11.69,0,0,0,6.13,10.36,12,12,0,0,0,12.18-.32L196,139.56V216a4,4,0,0,0,8,0V40A4,4,0,0,0,200,36Zm-5.82,95.26L66.06,211.38a4,4,0,0,1-4.06.11,3.8,3.8,0,0,1-2-3.37V47.88a3.8,3.8,0,0,1,2-3.37A4,4,0,0,1,64,44a4,4,0,0,1,2.11.62l128.12,80.12a3.83,3.83,0,0,1,0,6.52Z",
                }),
            ),
        ],
    ]),
    I4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M40,92H70.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24H137.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24Zm64-24A12,12,0,1,1,92,80,12,12,0,0,1,104,68Zm112,96H201.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24h94.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24Zm-48,24a12,12,0,1,1,12-12A12,12,0,0,1,168,188Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,80a24,24,0,1,1-24-24A24,24,0,0,1,128,80Zm40,72a24,24,0,1,0,24,24A24,24,0,0,0,168,152Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M32,80a8,8,0,0,1,8-8H77.17a28,28,0,0,1,53.66,0H216a8,8,0,0,1,0,16H130.83a28,28,0,0,1-53.66,0H40A8,8,0,0,1,32,80Zm184,88H194.83a28,28,0,0,0-53.66,0H40a8,8,0,0,0,0,16H141.17a28,28,0,0,0,53.66,0H216a8,8,0,0,0,0-16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M40,86H74.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12H133.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12Zm64-24A18,18,0,1,1,86,80,18,18,0,0,1,104,62ZM216,170H197.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12h98.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12Zm-48,24a18,18,0,1,1,18-18A18,18,0,0,1,168,194Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M40,84H76.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8H131.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8Zm64-24A20,20,0,1,1,84,80,20,20,0,0,1,104,60ZM216,172H195.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8H140.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8Zm-48,24a20,20,0,1,1,20-20A20,20,0,0,1,168,196Z",
                }),
            ),
        ],
    ]),
    N4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M178.39,158c-11,19.06-29.39,30-50.39,30s-39.36-10.93-50.39-30a12,12,0,0,1,20.78-12c3.89,6.73,12.91,18,29.61,18s25.72-11.28,29.61-18a12,12,0,1,1,20.78,12ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM92,124a16,16,0,1,0-16-16A16,16,0,0,0,92,124Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,92Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,48c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M173.19,155c-9.92,17.16-26.39,27-45.19,27s-35.27-9.84-45.19-27a6,6,0,0,1,10.38-6c7.84,13.54,20.2,21,34.81,21s27-7.46,34.81-21a6,6,0,1,1,10.38,6ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM92,118a10,10,0,1,0-10-10A10,10,0,0,0,92,118Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,98Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M171.46,154c-9.55,16.52-25.39,26-43.46,26s-33.91-9.48-43.46-26a4,4,0,0,1,6.92-4c8.21,14.19,21.19,22,36.54,22s28.33-7.81,36.54-22a4,4,0,1,1,6.92,4ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128ZM92,116a8,8,0,1,0-8-8A8,8,0,0,0,92,116Zm72-16a8,8,0,1,0,8,8A8,8,0,0,0,164,100Z",
                }),
            ),
        ],
    ]),
    q4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M255.8,162.93l0-.31A43.94,43.94,0,0,0,226,125.36l-56.62-20.2-.24-.09a20,20,0,0,1-11.92-10.78L134.06,40l-.06-.16A20.06,20.06,0,0,0,108.89,29.2L33.17,56.73A20.07,20.07,0,0,0,20,75.53V192a20,20,0,0,0,20,20H236a20,20,0,0,0,20-20V167.06C256,165.67,255.93,164.3,255.8,162.93ZM113.53,53.05l6,14L103.9,72.72a12,12,0,1,0,8.2,22.55L129,89.14l4.54,10.63-13.6,5A12,12,0,0,0,124,128a11.79,11.79,0,0,0,4.1-.73l19.57-7.11a43.86,43.86,0,0,0,13.8,7.64L218.09,148l.23.08a19.89,19.89,0,0,1,6.84,3.91H44V78.33ZM44,188V176H232v12Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M248,167.06V168H32V75.54A8,8,0,0,1,37.27,68L113,40.48a8,8,0,0,1,10,4.27L146.27,99.1a32,32,0,0,0,19.12,17.36l60.73,20.25A32,32,0,0,1,248,167.06Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M228.65,129.11l-60.73-20.24a24,24,0,0,1-14.32-13L130.39,41.6s0-.07,0-.1A16,16,0,0,0,110.25,33L34.53,60.49A16.05,16.05,0,0,0,24,75.53V192a16,16,0,0,0,16,16H240a16,16,0,0,0,16-16V167.06A40,40,0,0,0,228.65,129.11ZM40,75.53,115.72,48l7.11,16.63-21.56,7.85A8,8,0,0,0,104,88a7.91,7.91,0,0,0,2.73-.49l22.4-8.14,4.74,11.07-16.6,6A8,8,0,0,0,120,112a7.91,7.91,0,0,0,2.73-.49l17.6-6.4a40.06,40.06,0,0,0,7.68,10l-14.74,5.36A8,8,0,0,0,136,136a8.14,8.14,0,0,0,2.73-.48l28-10.18,56.87,18.95A24,24,0,0,1,238.93,160H40ZM240,192H40V176H240Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228.65,129.11l-28.06-9.35a4,4,0,0,0-2.63,0l-43.23,15.72A8.14,8.14,0,0,1,152,136a8,8,0,0,1-7.71-5.88,8.17,8.17,0,0,1,5.22-9.73L168,113.67a2.54,2.54,0,0,0-.06-4.8,23.93,23.93,0,0,1-8.8-5.25,4,4,0,0,0-4.17-.91l-24.22,8.8a8,8,0,0,1-10.44-5.39,8.17,8.17,0,0,1,5.22-9.73L146,88.93a4,4,0,0,0,2.31-5.34l-3.06-7.16a4,4,0,0,0-5.05-2.19l-25.5,9.27a8,8,0,0,1-10.44-5.39,8.17,8.17,0,0,1,5.22-9.73l24-8.73a4,4,0,0,0,2.31-5.33L130.39,41.6s0-.07,0-.1A16,16,0,0,0,110.25,33L34.53,60.49A16.05,16.05,0,0,0,24,75.53V192a16,16,0,0,0,16,16H240a16,16,0,0,0,16-16V167.06A40,40,0,0,0,228.65,129.11ZM240,192H40V176H240Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,131l-60.73-20.24a26,26,0,0,1-15.51-14L128.51,42.31a14,14,0,0,0-17.57-7.47L35.22,62.37A14.05,14.05,0,0,0,26,75.53V192a14,14,0,0,0,14,14H240a14,14,0,0,0,14-14V167.06A38,38,0,0,0,228,131ZM39.32,73.65,115,46.12a1.81,1.81,0,0,1,.68-.12,2,2,0,0,1,1.79,1.11l8,18.68L102,74.36A6,6,0,0,0,104,86a5.92,5.92,0,0,0,2-.37l24.18-8.79,6.31,14.76L118,98.36A6,6,0,0,0,120,110a6.15,6.15,0,0,0,2-.36l19.26-7a38,38,0,0,0,10.57,13.21L134,122.36A6,6,0,0,0,136,134a6.15,6.15,0,0,0,2.05-.36l28.64-10.42,57.53,19.18A25.94,25.94,0,0,1,241.49,162H38V75.53A2,2,0,0,1,39.32,73.65ZM240,194H40a2,2,0,0,1-2-2V174H242v18A2,2,0,0,1,240,194Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228.65,129.11l-60.73-20.24a24,24,0,0,1-14.32-13L130.39,41.6s0-.07,0-.1A16,16,0,0,0,110.25,33L34.53,60.49A16.05,16.05,0,0,0,24,75.53V192a16,16,0,0,0,16,16H240a16,16,0,0,0,16-16V167.06A40,40,0,0,0,228.65,129.11ZM115.72,48l7.11,16.63-21.56,7.85A8,8,0,0,0,104,88a7.91,7.91,0,0,0,2.73-.49l22.4-8.14,4.74,11.07-16.6,6A8,8,0,0,0,120,112a7.91,7.91,0,0,0,2.73-.49l17.6-6.4a40.24,40.24,0,0,0,7.68,10l-14.74,5.36A8,8,0,0,0,136,136a8.14,8.14,0,0,0,2.73-.48l28-10.18,56.87,18.95A24,24,0,0,1,238.93,160H40V75.53ZM40,192h0V176H240v16Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.38,132.91l-60.72-20.24A28,28,0,0,1,150,97.53L126.69,43.12a12,12,0,0,0-15.07-6.4L35.9,64.25A12,12,0,0,0,28,75.53V192a12,12,0,0,0,12,12H240a12,12,0,0,0,12-12V167.06A36,36,0,0,0,227.38,132.91ZM38.63,71.77l75.72-27.53a3.84,3.84,0,0,1,1.37-.24,4,4,0,0,1,3.63,2.32L128.17,67l-25.54,9.29A4,4,0,0,0,104,84a4.12,4.12,0,0,0,1.37-.24l25.95-9.44,7.89,18.44-20.58,7.48A4,4,0,0,0,120,108a4.12,4.12,0,0,0,1.37-.24l21-7.64.25.6a36.11,36.11,0,0,0,13.52,15.7l-21.5,7.82A4,4,0,0,0,136,132a4.12,4.12,0,0,0,1.37-.24l29.3-10.66,58.18,19.4a28,28,0,0,1,19,23.5H36V75.53A4,4,0,0,1,38.63,71.77ZM240,196H40a4,4,0,0,1-4-4V172H244v20A4,4,0,0,1,240,196Z",
                }),
            ),
        ],
    ]),
    z4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.94,163.06l-28.62-14.31A43.78,43.78,0,0,1,180,109.39V80a12,12,0,0,0-12-12,44.05,44.05,0,0,1-44-44,12,12,0,0,0-19.25-9.56l-77,58.41-.3.23a20,20,0,0,0-1.56,29.69L139.57,216.49a12,12,0,0,0,8.49,3.51H224a20,20,0,0,0,20-20V180.94A19.88,19.88,0,0,0,232.94,163.06ZM220,196H153L46.08,89.05l12.86-9.76,41.2,41.2a12,12,0,0,0,17-17L78.25,64.65l25.24-19.14A68.24,68.24,0,0,0,156,90.94v18.45a67.62,67.62,0,0,0,37.59,60.82L220,183.42ZM55.49,184H32a12,12,0,0,1,0-24H55.49a12,12,0,0,1,0,24Zm48,24a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H91.49A12,12,0,0,1,103.49,208Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,180.94V200a8,8,0,0,1-8,8H148.06L34.34,94.28A8,8,0,0,1,35,82.41L112,24a56,56,0,0,0,56,56v29.39a56,56,0,0,0,31,50.09l28.62,14.31A8,8,0,0,1,232,180.94Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M231.16,166.63l-28.63-14.31A47.74,47.74,0,0,1,176,109.39V80a8,8,0,0,0-8-8,48.05,48.05,0,0,1-48-48,8,8,0,0,0-12.83-6.37L30.13,76l-.2.16a16,16,0,0,0-1.24,23.75L142.4,213.66a8,8,0,0,0,5.66,2.34H224a16,16,0,0,0,16-16V180.94A15.92,15.92,0,0,0,231.16,166.63ZM224,200H151.37L40,88.63l12.87-9.76,38.79,38.79A8,8,0,0,0,103,106.34L65.74,69.11l40-30.31A64.15,64.15,0,0,0,160,87.5v21.89a63.65,63.65,0,0,0,35.38,57.24L224,180.94ZM70.8,184H32a8,8,0,0,1,0-16H70.8a8,8,0,1,1,0,16Zm40,24a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h54.8A8,8,0,0,1,110.8,208Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M70.8,184H32a8,8,0,0,1,0-16H70.8a8,8,0,1,1,0,16Zm32,16H48a8,8,0,0,0,0,16h54.8a8,8,0,1,0,0-16Zm128.36-33.37-28.63-14.31A47.74,47.74,0,0,1,176,109.39V80a8,8,0,0,0-7.93-8A48.05,48.05,0,0,1,120,24.07a8,8,0,0,0-12.83-6.44L45.11,64.68a4,4,0,0,0-.41,6l51.44,51.44a8.19,8.19,0,0,1,.6,11.09,8,8,0,0,1-11.71.43l-53-53a4,4,0,0,0-6.44,1.09,16,16,0,0,0,3.12,18.22L142.4,213.66a8,8,0,0,0,5.66,2.34H224a16,16,0,0,0,16-16V180.94A15.92,15.92,0,0,0,231.16,166.63Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.26,168.42l-28.62-14.31A49.72,49.72,0,0,1,174,109.39V80a6,6,0,0,0-6-6,50.06,50.06,0,0,1-50-50,6,6,0,0,0-9.62-4.78l-77,58.41-.15.11A14,14,0,0,0,30.1,98.53L143.82,212.24a6,6,0,0,0,4.24,1.76H224a14,14,0,0,0,14-14V180.94A13.94,13.94,0,0,0,230.26,168.42ZM226,200a2,2,0,0,1-2,2H150.54L38.59,90A2,2,0,0,1,38,88.52a2,2,0,0,1,.69-1.41L53.05,76.22l40,40a6,6,0,0,0,8.49-8.48L62.71,68.91,107,35.3a62.13,62.13,0,0,0,55,50.41v23.68a61.65,61.65,0,0,0,34.27,55.45l28.62,14.32a2,2,0,0,1,1.11,1.78ZM70.8,182H32a6,6,0,0,1,0-12H70.8a6,6,0,1,1,0,12Zm38,26a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12h54.8A6,6,0,0,1,108.8,208Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231.16,166.63l-28.63-14.31A47.74,47.74,0,0,1,176,109.39V80a8,8,0,0,0-8-8,48.05,48.05,0,0,1-48-48,8,8,0,0,0-12.83-6.37L30.13,76l-.2.16a16,16,0,0,0-1.24,23.75L142.4,213.66a8,8,0,0,0,5.66,2.34H224a16,16,0,0,0,16-16V180.94A15.92,15.92,0,0,0,231.16,166.63ZM224,200H151.37L40,88.63l12.87-9.76,38.79,38.79A8,8,0,0,0,103,106.34L65.74,69.11l40-30.31A64.15,64.15,0,0,0,160,87.5v21.89a63.65,63.65,0,0,0,35.38,57.24L224,180.94ZM70.8,184H32a8,8,0,0,1,0-16H70.8a8,8,0,1,1,0,16Zm40,24a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h54.8A8,8,0,0,1,110.8,208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M229.37,170.21,200.75,155.9A51.7,51.7,0,0,1,172,109.39V80a4,4,0,0,0-4-4,52.06,52.06,0,0,1-52-52,4,4,0,0,0-6.42-3.19l-77,58.41-.1.08a12,12,0,0,0-.94,17.81L145.23,210.83a4,4,0,0,0,2.83,1.17H224a12,12,0,0,0,12-12V180.94A11.94,11.94,0,0,0,229.37,170.21ZM228,200a4,4,0,0,1-4,4H149.72L37.17,91.45a4,4,0,0,1,.27-5.9l15.79-12,41.26,41.25a4,4,0,0,0,5.65-5.66L59.67,68.7l48.82-37A60.12,60.12,0,0,0,164,83.87v25.52a59.68,59.68,0,0,0,33.17,53.67l28.62,14.31a4,4,0,0,1,2.21,3.57ZM70.8,180H32a4,4,0,0,1,0-8H70.8a4,4,0,1,1,0,8Zm36,28a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8h54.8A4,4,0,0,1,106.8,208Z",
                }),
            ),
        ],
    ]),
    j4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z",
                }),
            ),
        ],
    ]),
    P4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M157.27,21.22a12,12,0,0,0-12.64,1.31L75.88,76H32A20,20,0,0,0,12,96v64a20,20,0,0,0,20,20H75.88l68.75,53.47A12,12,0,0,0,164,224V32A12,12,0,0,0,157.27,21.22ZM36,100H68v56H36Zm104,99.46L92,162.13V93.87l48-37.33ZM212,128a44,44,0,0,1-11,29.11,12,12,0,1,1-18-15.88,20,20,0,0,0,0-26.43,12,12,0,0,1,18-15.86A43.94,43.94,0,0,1,212,128Zm40,0a83.87,83.87,0,0,1-21.39,56,12,12,0,0,1-17.89-16,60,60,0,0,0,0-80,12,12,0,1,1,17.88-16A83.87,83.87,0,0,1,252,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M80,88v80H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M160,32.25V223.69a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.57-51A4,4,0,0,1,80,176.16V79.84a4,4,0,0,1,1.55-3.15l65.57-51a8,8,0,0,1,10,.16A8.27,8.27,0,0,1,160,32.25ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80Zm126.77,20.84a8,8,0,0,0-.72,11.3,24,24,0,0,1,0,31.72,8,8,0,1,0,12,10.58,40,40,0,0,0,0-52.88A8,8,0,0,0,186.74,100.84Zm40.89-26.17a8,8,0,1,0-11.92,10.66,64,64,0,0,1,0,85.34,8,8,0,1,0,11.92,10.66,80,80,0,0,0,0-106.66Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M154.64,26.61a6,6,0,0,0-6.32.65L77.94,82H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V32A6,6,0,0,0,154.64,26.61ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.07V90.93l60-46.66Zm50.53-108.85a38,38,0,0,1,0,50.24,6,6,0,1,1-9-7.94,26,26,0,0,0,0-34.37,6,6,0,0,1,9-7.93ZM246,128a77.86,77.86,0,0,1-19.86,52,6,6,0,1,1-8.94-8,66,66,0,0,0,0-88,6,6,0,1,1,8.94-8A77.86,77.86,0,0,1,246,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M153.76,28.41a4,4,0,0,0-4.22.43L78.63,84H32A12,12,0,0,0,20,96v64a12,12,0,0,0,12,12H78.63l70.91,55.16A4.07,4.07,0,0,0,152,228a3.92,3.92,0,0,0,1.76-.41A4,4,0,0,0,156,224V32A4,4,0,0,0,153.76,28.41ZM28,160V96a4,4,0,0,1,4-4H76v72H32A4,4,0,0,1,28,160Zm120,55.82L84,166V90l64-49.78Zm47-111.61a36,36,0,0,1,0,47.59,4,4,0,1,1-6-5.3,28,28,0,0,0,0-37,4,4,0,0,1,6-5.28ZM244,128a75.88,75.88,0,0,1-19.35,50.67,4,4,0,0,1-6-5.34,68,68,0,0,0,0-90.66,4,4,0,0,1,6-5.34A75.88,75.88,0,0,1,244,128Z",
                }),
            ),
        ],
    ]),
    B4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,84a12,12,0,0,0,12-12,60.07,60.07,0,0,0-60-60H80A20,20,0,0,0,60,32V80a20,20,0,0,1-20,20,12,12,0,0,0,0,24A44.06,44.06,0,0,0,83.82,84H108v20.62a19.92,19.92,0,0,1-7.51,15.62L84.51,133A43.8,43.8,0,0,0,68,167.38V224a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V211.47A274.77,274.77,0,0,0,180.68,84ZM84,36h68a36,36,0,0,1,33.94,24H84ZM188,211.47V220H92V167.38a19.92,19.92,0,0,1,7.51-15.62l16-12.78A43.8,43.8,0,0,0,132,104.62V84h21.24A250.93,250.93,0,0,1,188,211.47Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,211.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72h40A263.14,263.14,0,0,1,200,211.47Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M200,80a8,8,0,0,0,8-8,56.06,56.06,0,0,0-56-56H80A16,16,0,0,0,64,32V80a24,24,0,0,1-24,24,8,8,0,0,0,0,16A40,40,0,0,0,80,80h32v24.62a23.87,23.87,0,0,1-9,18.74L87,136.15a39.79,39.79,0,0,0-15,31.23V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V211.47A270.88,270.88,0,0,0,174,80ZM80,32h72a40.08,40.08,0,0,1,39.2,32H80ZM192,211.47V224H88V167.38a23.87,23.87,0,0,1,9-18.74l16-12.79a39.79,39.79,0,0,0,15-31.23V80h27.52A254.86,254.86,0,0,1,192,211.47Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,80a8,8,0,0,0,8-8,56.06,56.06,0,0,0-56-56H80A16,16,0,0,0,64,32V80a24,24,0,0,1-24,24,8,8,0,0,0,0,16A40,40,0,0,0,80,80h32v24.62a23.87,23.87,0,0,1-9,18.74L87,136.15a39.79,39.79,0,0,0-15,31.23V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V211.47A270.88,270.88,0,0,0,174,80ZM80,32h72a40.08,40.08,0,0,1,39.2,32H80Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,78a6,6,0,0,0,6-6,54.06,54.06,0,0,0-54-54H80A14,14,0,0,0,66,32V80a26,26,0,0,1-26,26,6,6,0,0,0,0,12A38,38,0,0,0,78,80V78h36v26.62a25.87,25.87,0,0,1-9.76,20.3l-16,12.79A37.81,37.81,0,0,0,74,167.38V224a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V211.47A268.92,268.92,0,0,0,170.57,78ZM78,32a2,2,0,0,1,2-2h72a42.06,42.06,0,0,1,41.57,36H78ZM194,211.47V224a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2V167.38a25.87,25.87,0,0,1,9.76-20.3l16-12.79A37.81,37.81,0,0,0,126,104.62V78h30.64A256.84,256.84,0,0,1,194,211.47Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,80a8,8,0,0,0,8-8,56.06,56.06,0,0,0-56-56H80A16,16,0,0,0,64,32V80a24,24,0,0,1-24,24,8,8,0,0,0,0,16A40,40,0,0,0,80,80h32v24.62a23.87,23.87,0,0,1-9,18.74L87,136.15a39.79,39.79,0,0,0-15,31.23V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V211.47A270.88,270.88,0,0,0,174,80ZM80,32h72a40.08,40.08,0,0,1,39.2,32H80ZM192,211.47V224H88V167.38a23.87,23.87,0,0,1,9-18.74l16-12.79a39.79,39.79,0,0,0,15-31.23V80h27.52A254.86,254.86,0,0,1,192,211.47Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,76a4,4,0,0,0,4-4,52.06,52.06,0,0,0-52-52H80A12,12,0,0,0,68,32V80a28,28,0,0,1-28,28,4,4,0,0,0,0,8A36,36,0,0,0,76,80V76h40v28.62a27.85,27.85,0,0,1-10.51,21.86l-16,12.79A35.8,35.8,0,0,0,76,167.38V224a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V211.47A266.86,266.86,0,0,0,167.09,76ZM76,32a4,4,0,0,1,4-4h72a44.06,44.06,0,0,1,43.82,40H76ZM196,211.47V224a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V167.38a27.85,27.85,0,0,1,10.51-21.86l16-12.79A35.8,35.8,0,0,0,124,104.62V76h33.76A258.83,258.83,0,0,1,196,211.47Z",
                }),
            ),
        ],
    ]),
    D4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z",
                }),
            ),
        ],
    ]),
    T4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,160H60V60H196Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,56V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,160H56V56H200V200Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,158a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,160H56V56H200V200Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,156a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4Z",
                }),
            ),
        ],
    ]),
    U4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236,96a12,12,0,0,0-.44-3.3L221.2,42.51A20.08,20.08,0,0,0,202,28H54A20.08,20.08,0,0,0,34.8,42.51L20.46,92.7A12,12,0,0,0,20,96h0v16a43.94,43.94,0,0,0,16,33.92V216a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V145.92A43.94,43.94,0,0,0,236,112V96ZM57.05,52H199l9.14,32H47.91Zm91,56v4a20,20,0,0,1-40,0v-4ZM53,128.71A20,20,0,0,1,44,112v-4H84v4a20,20,0,0,1-20,20,19.76,19.76,0,0,1-9.07-2.2A11.54,11.54,0,0,0,53,128.71ZM196,204H60V155.81c1.32.12,2.65.19,4,.19a43.86,43.86,0,0,0,32-13.85,43.89,43.89,0,0,0,64,0A43.86,43.86,0,0,0,192,156c1.35,0,2.68-.07,4-.19Zm16-92a20,20,0,0,1-9,16.71,11.66,11.66,0,0,0-1.88,1.09A20,20,0,0,1,172,112v-4h40Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,96v16a32,32,0,0,1-64,0V96H96v16a32,32,0,0,1-64,0V96L46.34,45.8A8,8,0,0,1,54,40H202a8,8,0,0,1,7.69,5.8Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M231.69,93.81,217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.81A7.94,7.94,0,0,0,24,96v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96A7.94,7.94,0,0,0,231.69,93.81ZM54,48H202l11.42,40H42.61Zm98,56v8a24,24,0,0,1-48,0v-8ZM51.06,132.2A24,24,0,0,1,40,112v-8H88v8a24,24,0,0,1-35.12,21.26A7.88,7.88,0,0,0,51.06,132.2ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm16-96a24,24,0,0,1-11.07,20.2,8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231.69,93.81,217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.81A7.94,7.94,0,0,0,24,96v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96A7.94,7.94,0,0,0,231.69,93.81ZM88,112a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8H88Zm64,0a24,24,0,0,1-48,0v-8h48Zm64,0a24,24,0,0,1-11.07,20.2,8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M26.22,94.41A6,6,0,0,0,26,96v16A38,38,0,0,0,42,143V216a6,6,0,0,0,6,6H208a6,6,0,0,0,6-6V143A38,38,0,0,0,230,112V96a5.91,5.91,0,0,0-.23-1.64L215.43,44.15A14.07,14.07,0,0,0,202,34H54A14.07,14.07,0,0,0,40.57,44.15Zm25.89-47A2,2,0,0,1,54,46H202a2,2,0,0,1,1.92,1.45L216.05,90H40ZM102,102h52v10a26,26,0,0,1-52,0Zm-64,0H90v10a26,26,0,0,1-38.18,23,6,6,0,0,0-1.65-1A26,26,0,0,1,38,112ZM202,210H54V148.66a38,38,0,0,0,42-16.21,37.95,37.95,0,0,0,64,0,38,38,0,0,0,42,16.21Zm3.83-76a6,6,0,0,0-1.65,1A26,26,0,0,1,166,112V102h52v10A26,26,0,0,1,205.83,134Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96h0v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm4.93-75.8a8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48v8A24,24,0,0,1,204.93,132.2Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M28.15,95A3.81,3.81,0,0,0,28,96v16a36,36,0,0,0,16,29.92V216a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V141.92A36,36,0,0,0,228,112V96a3.81,3.81,0,0,0-.17-1.08L213.5,44.7A12,12,0,0,0,202,36H54A12,12,0,0,0,42.5,44.7Zm22-48.08A4,4,0,0,1,54,44H202a4,4,0,0,1,3.84,2.9L218.7,92H37.3ZM100,100h56v12a28,28,0,0,1-56,0ZM36,112V100H92v12a28,28,0,0,1-41.37,24.59,4,4,0,0,0-1.31-.76A28,28,0,0,1,36,112ZM204,212H52V145.94a36,36,0,0,0,44-17.48,36,36,0,0,0,64,0,36,36,0,0,0,44,17.48Zm2.68-76.17a3.94,3.94,0,0,0-1.3.76A28,28,0,0,1,164,112V100h56v12A28,28,0,0,1,206.68,135.83Z",
                }),
            ),
        ],
    ]),
    O4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M246.17,57.9,198.09,29.65h0A11.9,11.9,0,0,0,192,28H160a12,12,0,0,0-12,12,20,20,0,0,1-40,0A12,12,0,0,0,96,28H64a11.9,11.9,0,0,0-6.07,1.66h0L9.83,57.9A20.18,20.18,0,0,0,2,84l17.9,36.8A19.62,19.62,0,0,0,37.67,132H52v76a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V132h14.32a19.64,19.64,0,0,0,17.75-11.17L254,84A20.18,20.18,0,0,0,246.17,57.9ZM40.37,108,25.16,76.73,52,61v47ZM180,204H76V52h9.67a44,44,0,0,0,84.68,0H180Zm35.62-96H204V61l26.83,15.76Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M247.11,78.77l-19.27,36.81a8.44,8.44,0,0,1-7.5,4.42H192V40l51.78,28.25A7.81,7.81,0,0,1,247.11,78.77Zm-238.22,0,19.27,36.81a8.44,8.44,0,0,0,7.5,4.42H64V40L12.22,68.25A7.81,7.81,0,0,0,8.89,78.77Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112ZM184,208H72V48h16.8a40,40,0,0,0,78.38,0H184Zm36.75-96.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112Zm185.07-.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M246.64,63,194.87,34.74A5.93,5.93,0,0,0,192,34H160a6,6,0,0,0-6,6,26,26,0,0,1-52,0,6,6,0,0,0-6-6H64a5.93,5.93,0,0,0-2.88.74L9.36,63A13.77,13.77,0,0,0,3.58,81.55l19.28,36.81A14.38,14.38,0,0,0,35.67,126H58v82a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V126h22.34a14.38,14.38,0,0,0,12.81-7.64l19.28-36.81A13.77,13.77,0,0,0,246.64,63Zm-211,51a2.42,2.42,0,0,1-2.18-1.21L14.21,76a1.82,1.82,0,0,1,.9-2.47L58,50.11V114ZM186,208a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V46H90.48a38,38,0,0,0,75,0H186Zm55.8-132-19.28,36.8a2.42,2.42,0,0,1-2.18,1.21H198V50.11l42.9,23.4A1.83,1.83,0,0,1,241.79,76Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112ZM184,208H72V48h16.8a40,40,0,0,0,78.38,0H184Zm36.75-96.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M245.68,64.73,193.91,36.49h0A4,4,0,0,0,192,36H160a4,4,0,0,0-4,4,28,28,0,0,1-56,0,4,4,0,0,0-4-4H64a4,4,0,0,0-1.9.5h0L10.32,64.73a11.79,11.79,0,0,0-5,15.89l19.28,36.81a12.37,12.37,0,0,0,11,6.57H60v84a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V124h24.33a12.37,12.37,0,0,0,11-6.57l19.28-36.81A11.79,11.79,0,0,0,245.68,64.73ZM35.67,116a4.46,4.46,0,0,1-4-2.28L12.44,76.91a3.79,3.79,0,0,1,1.71-5.15L60,46.74V116ZM188,208a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V44H92.22a36,36,0,0,0,71.56,0H188ZM243.56,76.91l-19.27,36.81a4.46,4.46,0,0,1-4,2.28H196V46.74l45.85,25A3.79,3.79,0,0,1,243.56,76.91Z",
                }),
            ),
        ],
    ]),
    G4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M90.86,50.89a12,12,0,0,0-21.72,0l-64,136a12,12,0,0,0,21.71,10.22L42.44,164h75.12l15.58,33.11a12,12,0,0,0,21.72-10.22ZM53.74,140,80,84.18,106.27,140ZM200,84c-13.85,0-24.77,3.86-32.45,11.48a12,12,0,1,0,16.9,17c3-3,8.26-4.52,15.55-4.52,11,0,20,7.18,20,16v4.39A47.28,47.28,0,0,0,200,124c-24.26,0-44,17.94-44,40s19.74,40,44,40a47.18,47.18,0,0,0,22-5.38A12,12,0,0,0,244,192V124C244,101.94,224.26,84,200,84Zm0,96c-11,0-20-7.18-20-16s9-16,20-16,20,7.18,20,16S211,180,200,180Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,164c0,15.46-14.33,28-32,28s-32-12.54-32-28,14.33-28,32-28S232,148.54,232,164ZM34.82,152h90.36L80,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M87.24,52.59a8,8,0,0,0-14.48,0l-64,136a8,8,0,1,0,14.48,6.81L39.9,160h80.2l16.66,35.4a8,8,0,1,0,14.48-6.81ZM47.43,144,80,74.79,112.57,144ZM200,96c-12.76,0-22.73,3.47-29.63,10.32a8,8,0,0,0,11.26,11.36c3.8-3.77,10-5.68,18.37-5.68,13.23,0,24,9,24,20v3.22A42.76,42.76,0,0,0,200,128c-22.06,0-40,16.15-40,36s17.94,36,40,36a42.73,42.73,0,0,0,24-7.25,8,8,0,0,0,16-.75V132C240,112.15,222.06,96,200,96Zm0,88c-13.23,0-24-9-24-20s10.77-20,24-20,24,9,24,20S213.23,184,200,184Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,156c0,6.5-7.33,12-16,12s-16-5.5-16-12,7.33-12,16-12S200,149.5,200,156ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM143.37,172.88l-44-104a8,8,0,0,0-14.74,0l-44,104a8,8,0,0,0,14.74,6.24L66.84,152h50.32l11.47,27.12a8,8,0,0,0,14.74-6.24ZM216,124c0-15.44-14.36-28-32-28a34.86,34.86,0,0,0-20.78,6.68,8,8,0,0,0,9.56,12.83A18.84,18.84,0,0,1,184,112c8.56,0,15.8,5.36,16,11.76v8A35.24,35.24,0,0,0,184,128c-17.64,0-32,12.56-32,28s14.36,28,32,28a35.13,35.13,0,0,0,16.93-4.26A8,8,0,0,0,216,176ZM73.61,136h36.78L92,92.53Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M85.43,53.45a6,6,0,0,0-10.86,0l-64,136a6,6,0,1,0,10.86,5.11L38.63,158h82.74l17.2,36.55a6,6,0,1,0,10.86-5.11ZM44.28,146,80,70.09,115.72,146ZM200,98c-12.21,0-21.71,3.28-28.23,9.74a6,6,0,0,0,8.46,8.52c4.18-4.15,10.84-6.26,19.77-6.26,14.34,0,26,9.87,26,22v7.24A40.36,40.36,0,0,0,200,130c-20.95,0-38,15.25-38,34s17.05,34,38,34a40.36,40.36,0,0,0,26-9.24V192a6,6,0,0,0,12,0V132C238,113.25,221,98,200,98Zm0,88c-14.34,0-26-9.87-26-22s11.66-22,26-22,26,9.87,26,22S214.34,186,200,186Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M87.24,52.59a8,8,0,0,0-14.48,0l-64,136a8,8,0,1,0,14.48,6.81L39.9,160h80.2l16.66,35.4a8,8,0,1,0,14.48-6.81ZM47.43,144,80,74.79,112.57,144ZM200,96c-12.76,0-22.73,3.47-29.63,10.32a8,8,0,0,0,11.26,11.36c3.8-3.77,10-5.68,18.37-5.68,13.23,0,24,9,24,20v3.22A42.76,42.76,0,0,0,200,128c-22.06,0-40,16.15-40,36s17.94,36,40,36a42.73,42.73,0,0,0,24-7.25,8,8,0,0,0,16-.75V132C240,112.15,222.06,96,200,96Zm0,88c-13.23,0-24-9-24-20s10.77-20,24-20,24,9,24,20S213.23,184,200,184Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M83.62,54.3a4,4,0,0,0-7.24,0l-64,136a4,4,0,0,0,7.24,3.4L37.36,156h85.28l17.74,37.7a4,4,0,1,0,7.24-3.4ZM41.13,148,80,65.39,118.87,148ZM200,100c-11.67,0-20.69,3.08-26.82,9.16a4,4,0,1,0,5.64,5.68c4.57-4.54,11.7-6.84,21.18-6.84,15.44,0,28,10.77,28,24v11.92A37.78,37.78,0,0,0,200,132c-19.85,0-36,14.35-36,32s16.15,32,36,32a37.78,37.78,0,0,0,28-11.92V192a4,4,0,0,0,8,0V132C236,114.36,219.85,100,200,100Zm0,88c-15.44,0-28-10.77-28-24s12.56-24,28-24,28,10.77,28,24S215.44,188,200,188Z",
                }),
            ),
        ],
    ]),
    Q4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M212,56V88a12,12,0,0,1-24,0V68H140V188h20a12,12,0,0,1,0,24H96a12,12,0,0,1,0-24h20V68H68V88a12,12,0,0,1-24,0V56A12,12,0,0,1,56,44H200A12,12,0,0,1,212,56Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,56V184a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,96a8,8,0,0,1-16,0V88H136v88h12a8,8,0,0,1,0,16H108a8,8,0,0,1,0-16h12V88H88v8a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M206,56V88a6,6,0,0,1-12,0V62H134V194h26a6,6,0,0,1,0,12H96a6,6,0,0,1,0-12h26V62H62V88a6,6,0,0,1-12,0V56a6,6,0,0,1,6-6H200A6,6,0,0,1,206,56Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M204,56V88a4,4,0,0,1-8,0V60H132V196h28a4,4,0,0,1,0,8H96a4,4,0,0,1,0-8h28V60H60V88a4,4,0,0,1-8,0V56a4,4,0,0,1,4-4H200A4,4,0,0,1,204,56Z",
                }),
            ),
        ],
    ]),
    W4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M237,77.47A28,28,0,0,0,216,68H164V56a44.05,44.05,0,0,0-44-44,12,12,0,0,0-10.73,6.63L72.58,92H32a20,20,0,0,0-20,20v88a20,20,0,0,0,20,20H204a28,28,0,0,0,27.78-24.53l12-96A28,28,0,0,0,237,77.47ZM36,116H68v80H36ZM220,96.5l-12,96a4,4,0,0,1-4,3.5H92V106.83L126.82,37.2A20,20,0,0,1,140,56V80a12,12,0,0,0,12,12h64a4,4,0,0,1,4,4.5Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M80,104V208H32a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.49,81.44A22,22,0,0,0,216,74H158V56a38,38,0,0,0-38-38,6,6,0,0,0-5.37,3.32L76.29,98H32a14,14,0,0,0-14,14v88a14,14,0,0,0,14,14H204a22,22,0,0,0,21.83-19.27l12-96A22,22,0,0,0,232.49,81.44ZM30,200V112a2,2,0,0,1,2-2H74v92H32A2,2,0,0,1,30,200ZM225.92,97.24l-12,96A10,10,0,0,1,204,202H86V105.42l37.58-75.17A26,26,0,0,1,146,56V80a6,6,0,0,0,6,6h64a10,10,0,0,1,9.92,11.24Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M231,82.76A20,20,0,0,0,216,76H156V56a36,36,0,0,0-36-36,4,4,0,0,0-3.58,2.21L77.53,100H32a12,12,0,0,0-12,12v88a12,12,0,0,0,12,12H204a20,20,0,0,0,19.85-17.52l12-96A20,20,0,0,0,231,82.76ZM76,204H32a4,4,0,0,1-4-4V112a4,4,0,0,1,4-4H76ZM227.91,97.49l-12,96A12,12,0,0,1,204,204H84V104.94L122.42,28.1A28,28,0,0,1,148,56V80a4,4,0,0,0,4,4h64a12,12,0,0,1,11.91,13.49Z",
                }),
            ),
        ],
    ]),
    K4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,108a12,12,0,0,0,12-12V64a20,20,0,0,0-20-20H32A20,20,0,0,0,12,64V96a12,12,0,0,0,12,12,20,20,0,0,1,0,40,12,12,0,0,0-12,12v32a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V160a12,12,0,0,0-12-12,20,20,0,0,1,0-40ZM36,170.34a44,44,0,0,0,0-84.68V68H88V188H36Zm184,0V188H112V68H220V85.66a44,44,0,0,0,0,84.68Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,128a32,32,0,0,0,32,32v32a8,8,0,0,1-8,8H96V56H224a8,8,0,0,1,8,8V96A32,32,0,0,0,200,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M232,104a8,8,0,0,0,8-8V64a16,16,0,0,0-16-16H32A16,16,0,0,0,16,64V96a8,8,0,0,0,8,8,24,24,0,0,1,0,48,8,8,0,0,0-8,8v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160a8,8,0,0,0-8-8,24,24,0,0,1,0-48ZM32,167.2a40,40,0,0,0,0-78.4V64H88V192H32Zm192,0V192H104V64H224V88.8a40,40,0,0,0,0,78.4Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,104a8,8,0,0,0,8-8V64a16,16,0,0,0-16-16H32A16,16,0,0,0,16,64V96a8,8,0,0,0,8,8,24,24,0,0,1,0,48,8,8,0,0,0-8,8v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160a8,8,0,0,0-8-8,24,24,0,0,1,0-48ZM32,167.2a40,40,0,0,0,0-78.4V64H88V192H32Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,102a6,6,0,0,0,6-6V64a14,14,0,0,0-14-14H32A14,14,0,0,0,18,64V96a6,6,0,0,0,6,6,26,26,0,0,1,0,52,6,6,0,0,0-6,6v32a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V160a6,6,0,0,0-6-6,26,26,0,0,1,0-52ZM30,192V165.53a38,38,0,0,0,0-75.06V64a2,2,0,0,1,2-2H90V194H32A2,2,0,0,1,30,192Zm196-26.47V192a2,2,0,0,1-2,2H102V62H224a2,2,0,0,1,2,2V90.47a38,38,0,0,0,0,75.06Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,104a8,8,0,0,0,8-8V64a16,16,0,0,0-16-16H32A16,16,0,0,0,16,64V96a8,8,0,0,0,8,8,24,24,0,0,1,0,48,8,8,0,0,0-8,8v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160a8,8,0,0,0-8-8,24,24,0,0,1,0-48ZM32,167.2a40,40,0,0,0,0-78.4V64H88V192H32Zm192,0V192H104V64H224V88.8a40,40,0,0,0,0,78.4Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232,100a4,4,0,0,0,4-4V64a12,12,0,0,0-12-12H32A12,12,0,0,0,20,64V96a4,4,0,0,0,4,4,28,28,0,0,1,0,56,4,4,0,0,0-4,4v32a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V160a4,4,0,0,0-4-4,28,28,0,0,1,0-56ZM28,192V163.78a36,36,0,0,0,0-71.56V64a4,4,0,0,1,4-4H92V196H32A4,4,0,0,1,28,192Zm168-64a36.06,36.06,0,0,0,32,35.78V192a4,4,0,0,1-4,4H100V60H224a4,4,0,0,1,4,4V92.22A36.06,36.06,0,0,0,196,128Z",
                }),
            ),
        ],
    ]),
    X4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M250.73,210.63l-56-112a12,12,0,0,0-21.46,0l-20.52,41A84.2,84.2,0,0,1,114,126.22,107.48,107.48,0,0,0,139.33,68H160a12,12,0,0,0,0-24H108V32a12,12,0,0,0-24,0V44H32a12,12,0,0,0,0,24h83.13A83.69,83.69,0,0,1,96,110.35,84,84,0,0,1,83.6,91a12,12,0,1,0-21.81,10A107.55,107.55,0,0,0,78,126.24,83.54,83.54,0,0,1,32,140a12,12,0,0,0,0,24,107.47,107.47,0,0,0,64-21.07,108.4,108.4,0,0,0,45.39,19.44l-24.13,48.26a12,12,0,1,0,21.46,10.73L151.41,196h65.17l12.68,25.36a12,12,0,1,0,21.47-10.73ZM163.41,172,184,130.83,204.58,172Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,184H144l40-80ZM96,127.56h0A95.78,95.78,0,0,0,128,56H64A95.78,95.78,0,0,0,96,127.56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.7,87.7,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M160,129.89,175.06,160H144.94l6.36-12.7v0ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM207.16,188.42l-40-80a8,8,0,0,0-14.32,0L139.66,134.8a62.31,62.31,0,0,1-23.61-10A79.61,79.61,0,0,0,135.6,80H152a8,8,0,0,0,0-16H112V56a8,8,0,0,0-16,0v8H56a8,8,0,0,0,0,16h63.48a63.73,63.73,0,0,1-15.3,34.05,65.93,65.93,0,0,1-9-13.61,8,8,0,0,0-14.32,7.12,81.75,81.75,0,0,0,11.4,17.15A63.62,63.62,0,0,1,56,136a8,8,0,0,0,0,16,79.56,79.56,0,0,0,48.11-16.13,78.33,78.33,0,0,0,28.18,13.66l-19.45,38.89a8,8,0,0,0,14.32,7.16L136.94,176h46.12l9.78,19.58a8,8,0,1,0,14.32-7.16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M245.37,213.32l-56-112a6,6,0,0,0-10.74,0l-22.3,44.6A90,90,0,0,1,105,127.19,101.73,101.73,0,0,0,133.82,62H160a6,6,0,0,0,0-12H102V32a6,6,0,0,0-12,0V50H32a6,6,0,0,0,0,12h89.79A89.71,89.71,0,0,1,96,119.23,89.81,89.81,0,0,1,75.11,86,6,6,0,1,0,63.8,90,101.66,101.66,0,0,0,87,127.2,89.56,89.56,0,0,1,32,146a6,6,0,0,0,0,12,101.55,101.55,0,0,0,64-22.63,102.11,102.11,0,0,0,54.53,22.17l-27.89,55.78a6,6,0,0,0,10.74,5.36L147.71,190h72.58l14.34,28.68A6,6,0,0,0,240,222a5.87,5.87,0,0,0,2.68-.64A6,6,0,0,0,245.37,213.32ZM153.71,178,184,117.42,214.29,178Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M243.58,214.21l-56-112a4,4,0,0,0-7.16,0L157.55,148A92.05,92.05,0,0,1,102,127.36,99.68,99.68,0,0,0,131.91,60H160a4,4,0,0,0,0-8H100V32a4,4,0,0,0-8,0V52H32a4,4,0,0,0,0,8h91.91A91.8,91.8,0,0,1,96,122.05,92,92,0,0,1,73.23,86.67a4,4,0,1,0-7.54,2.66,99.59,99.59,0,0,0,24.3,38A91.59,91.59,0,0,1,32,148a4,4,0,0,0,0,8,99.54,99.54,0,0,0,64-23.21,100.09,100.09,0,0,0,57.66,23l-29.22,58.43a4,4,0,1,0,7.16,3.58L146.47,188h75.06l14.89,29.79A4,4,0,0,0,240,220a4.12,4.12,0,0,0,1.79-.42A4,4,0,0,0,243.58,214.21ZM150.47,180,184,112.94,217.53,180Z",
                }),
            ),
        ],
    ]),
    J4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z",
                }),
            ),
        ],
    ]),
    Y4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24v92H179.31a19.86,19.86,0,0,0-14.14,5.86L147,168H109L90.83,149.86A19.86,19.86,0,0,0,76.69,144H52V52ZM52,204V168H75l18.14,18.14A19.86,19.86,0,0,0,107.31,192h41.38a19.86,19.86,0,0,0,14.14-5.86L181,168h23v36Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48V160H179.31a8,8,0,0,0-5.66,2.34l-19.31,19.32a8,8,0,0,1-5.66,2.34H107.31a8,8,0,0,1-5.66-2.34L82.34,162.34A8,8,0,0,0,76.68,160H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,16V152h-28.7A15.86,15.86,0,0,0,168,156.69L148.69,176H107.31L88,156.68A15.89,15.89,0,0,0,76.69,152H48V48Zm0,160H48V168H76.69L96,187.32A15.89,15.89,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V168H76.69L96,187.32A15.89,15.89,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H208a2,2,0,0,1,2,2V154H179.31a13.94,13.94,0,0,0-9.9,4.1L150.1,177.41a2,2,0,0,1-1.41.59H107.31a2,2,0,0,1-1.41-.58L86.59,158.1a13.94,13.94,0,0,0-9.9-4.1H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V166H76.69a2,2,0,0,1,1.41.58L97.41,185.9a13.94,13.94,0,0,0,9.9,4.1h41.38a13.94,13.94,0,0,0,9.9-4.1l19.31-19.31a2,2,0,0,1,1.41-.59H210v42A2,2,0,0,1,208,210Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,16V152h-28.7A15.86,15.86,0,0,0,168,156.69L148.69,176H107.31L88,156.69A15.86,15.86,0,0,0,76.69,152H48V48Zm0,160H48V168H76.69L96,187.31A15.86,15.86,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H208a4,4,0,0,1,4,4V156H179.31a12,12,0,0,0-8.48,3.51l-19.32,19.32a4,4,0,0,1-2.82,1.17H107.31a4,4,0,0,1-2.82-1.17L85.17,159.51A12,12,0,0,0,76.69,156H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V164H76.69a4,4,0,0,1,2.82,1.17l19.32,19.32a12,12,0,0,0,8.48,3.51h41.38a12,12,0,0,0,8.48-3.51l19.32-19.32a4,4,0,0,1,2.82-1.17H212v44A4,4,0,0,1,208,212Z",
                }),
            ),
        ],
    ]),
    _4 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0ZM96.49,80.49,116,61v83a12,12,0,0,0,24,0V61l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM88,80h32v64a8,8,0,0,0,16,0V80h32a8,8,0,0,0,5.66-13.66l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,88,80Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0ZM92.24,76.24,122,46.49V144a6,6,0,0,0,12,0V46.49l29.76,29.75a6,6,0,0,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,8.48,8.48Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0ZM90.83,74.83,124,41.66V144a4,4,0,0,0,8,0V41.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z",
                }),
            ),
        ],
    ]),
    a6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z",
                }),
            ),
        ],
    ]),
    e6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM79.57,196.57a60,60,0,0,1,96.86,0,83.72,83.72,0,0,1-96.86,0ZM100,120a28,28,0,1,1,28,28A28,28,0,0,1,100,120ZM194,179.94a83.48,83.48,0,0,0-29-23.42,52,52,0,1,0-74,0,83.48,83.48,0,0,0-29,23.42,84,84,0,1,1,131.9,0Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM71.44,198a66,66,0,0,1,113.12,0,89.8,89.8,0,0,1-113.12,0ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120Zm99.51,69.64a77.53,77.53,0,0,0-40-31.38,46,46,0,1,0-51,0,77.53,77.53,0,0,0-40,31.38,90,90,0,1,1,131,0Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM68.87,198.42a68,68,0,0,1,118.26,0,91.8,91.8,0,0,1-118.26,0Zm124.3-5.55a75.61,75.61,0,0,0-44.51-34,44,44,0,1,0-41.32,0,75.61,75.61,0,0,0-44.51,34,92,92,0,1,1,130.34,0ZM128,156a36,36,0,1,1,36-36A36,36,0,0,1,128,156Z",
                }),
            ),
        ],
    ]),
    t6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M256,136a12,12,0,0,1-12,12h-8v8a12,12,0,0,1-24,0v-8h-8a12,12,0,0,1,0-24h8v-8a12,12,0,0,1,24,0v8h8A12,12,0,0,1,256,136Zm-54.81,56.28a12,12,0,1,1-18.38,15.44C169.12,191.42,145,172,108,172c-28.89,0-55.46,12.68-74.81,35.72a12,12,0,0,1-18.38-15.44A124.08,124.08,0,0,1,63.5,156.53a72,72,0,1,1,89,0A124,124,0,0,1,201.19,192.28ZM108,148a48,48,0,1,0-48-48A48.05,48.05,0,0,0,108,148Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M254,136a6,6,0,0,1-6,6H230v18a6,6,0,0,1-12,0V142H200a6,6,0,0,1,0-12h18V112a6,6,0,0,1,12,0v18h18A6,6,0,0,1,254,136Zm-57.41,60.14a6,6,0,1,1-9.18,7.72C166.9,179.45,138.69,166,108,166s-58.89,13.45-79.41,37.86a6,6,0,0,1-9.18-7.72C35.14,177.41,55,164.48,77,158.25a66,66,0,1,1,62,0C161,164.48,180.86,177.41,196.59,196.14ZM108,154a54,54,0,1,0-54-54A54.06,54.06,0,0,0,108,154Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M252,136a4,4,0,0,1-4,4H228v20a4,4,0,0,1-8,0V140H200a4,4,0,0,1,0-8h20V112a4,4,0,0,1,8,0v20h20A4,4,0,0,1,252,136Zm-56.94,61.43a4,4,0,0,1-6.12,5.14C168,177.7,139.3,164,108,164s-60,13.7-80.94,38.57a4,4,0,1,1-6.12-5.14c16.71-19.9,38.13-33.13,61.89-38.59a64,64,0,1,1,50.34,0C156.93,164.3,178.35,177.53,195.06,197.43ZM108,156a56,56,0,1,0-56-56A56.06,56.06,0,0,0,108,156Z",
                }),
            ),
        ],
    ]),
    l6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24V196.24a83.63,83.63,0,0,0-39.08-39.67,52,52,0,1,0-73.84,0A83.63,83.63,0,0,0,52,196.24V52ZM100,120a28,28,0,1,1,28,28A28,28,0,0,1,100,120Zm28,52a59.34,59.34,0,0,1,37.69,13.31A60.45,60.45,0,0,1,181.06,204H74.94a60.45,60.45,0,0,1,15.37-18.69A59.34,59.34,0,0,1,128,172Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78,216A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,70.22,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM68.67,208A64.45,64.45,0,0,1,87.8,182.2a64,64,0,0,1,80.4,0A64.45,64.45,0,0,1,187.33,208ZM208,208h-3.67a79.87,79.87,0,0,0-46.69-50.29,48,48,0,1,0-59.28,0A79.87,79.87,0,0,0,51.67,208H48V48H208V208Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm52-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208h3.67a80.58,80.58,0,0,1,26.07-38.25q3.08-2.48,6.36-4.62a4,4,0,0,1,4.81.33,59.82,59.82,0,0,0,78.18,0,4,4,0,0,1,4.81-.33q3.28,2.15,6.36,4.62A80.58,80.58,0,0,1,204.33,208H208Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM65.77,210a66.43,66.43,0,0,1,20.77-29.36,66,66,0,0,1,82.92,0A66.43,66.43,0,0,1,190.23,210ZM210,208a2,2,0,0,1-2,2h-5.17a77.85,77.85,0,0,0-49.38-51.71,46,46,0,1,0-50.9,0A77.85,77.85,0,0,0,53.17,210H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM68.67,208A64.36,64.36,0,0,1,87.8,182.2a64,64,0,0,1,80.4,0A64.36,64.36,0,0,1,187.33,208ZM208,208h-3.67a79.9,79.9,0,0,0-46.68-50.29,48,48,0,1,0-59.3,0A79.9,79.9,0,0,0,51.67,208H48V48H208V208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM63,212a68,68,0,0,1,130,0Zm149-4a4,4,0,0,1-4,4h-6.66a76,76,0,0,0-52.75-53.13,44,44,0,1,0-41.18,0A76,76,0,0,0,54.66,212H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-84-52a36,36,0,1,1,36-36A36,36,0,0,1,128,156Z",
                }),
            ),
        ],
    ]),
    n6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M125.18,156.94a64,64,0,1,0-82.36,0,100.23,100.23,0,0,0-39.49,32,12,12,0,0,0,19.35,14.2,76,76,0,0,1,122.64,0,12,12,0,0,0,19.36-14.2A100.33,100.33,0,0,0,125.18,156.94ZM44,108a40,40,0,1,1,40,40A40,40,0,0,1,44,108Zm206.1,97.67a12,12,0,0,1-16.78-2.57A76.31,76.31,0,0,0,172,172a12,12,0,0,1,0-24,40,40,0,1,0-10.3-78.67,12,12,0,1,1-6.16-23.19,64,64,0,0,1,57.64,110.8,100.23,100.23,0,0,1,39.49,32A12,12,0,0,1,250.1,205.67Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M112.6,158.43a58,58,0,1,0-57.2,0A93.83,93.83,0,0,0,5.21,196.72a6,6,0,0,0,10.05,6.56,82,82,0,0,1,137.48,0,6,6,0,0,0,10-6.56A93.83,93.83,0,0,0,112.6,158.43ZM38,108a46,46,0,1,1,46,46A46.06,46.06,0,0,1,38,108Zm211,97a6,6,0,0,1-8.3-1.74A81.8,81.8,0,0,0,172,166a6,6,0,0,1,0-12,46,46,0,1,0-17.08-88.73,6,6,0,1,1-4.46-11.14,58,58,0,0,1,50.14,104.3,93.83,93.83,0,0,1,50.19,38.29A6,6,0,0,1,249,205Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M107.19,159a56,56,0,1,0-46.38,0A91.83,91.83,0,0,0,6.88,197.81a4,4,0,1,0,6.7,4.37,84,84,0,0,1,140.84,0,4,4,0,1,0,6.7-4.37A91.83,91.83,0,0,0,107.19,159ZM36,108a48,48,0,1,1,48,48A48.05,48.05,0,0,1,36,108Zm212,95.35a4,4,0,0,1-5.53-1.17A83.81,83.81,0,0,0,172,164a4,4,0,0,1,0-8,48,48,0,1,0-17.82-92.58,4,4,0,1,1-3-7.43,56,56,0,0,1,44,103,91.83,91.83,0,0,1,53.93,38.86A4,4,0,0,1,248,203.35Z",
                }),
            ),
        ],
    ]),
    m6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M24.79,121.59a12,12,0,0,0,16.81-2.38,48,48,0,0,1,76.81,0,12,12,0,0,0,16.8,2.39,12.24,12.24,0,0,0,2.38-2.39h0a48,48,0,0,1,76.81,0,12,12,0,1,0,19.19-14.41,72,72,0,0,0-25.3-21.22,40,40,0,1,0-64.58,0A71,71,0,0,0,128,94.31a71,71,0,0,0-15.71-10.74,40,40,0,1,0-64.58,0,72,72,0,0,0-25.3,21.22A12,12,0,0,0,24.79,121.59ZM176,44a16,16,0,1,1-16,16A16,16,0,0,1,176,44ZM80,44A16,16,0,1,1,64,60,16,16,0,0,1,80,44ZM208.29,195.57a40,40,0,1,0-64.58,0A71.31,71.31,0,0,0,128,206.3a71.31,71.31,0,0,0-15.71-10.73,40,40,0,1,0-64.58,0,72,72,0,0,0-25.3,21.22A12,12,0,0,0,41.6,231.21a48,48,0,0,1,76.81,0,12,12,0,0,0,16.8,2.39,12.24,12.24,0,0,0,2.38-2.39h0a48,48,0,0,1,76.81,0,12,12,0,1,0,19.19-14.41A71.91,71.91,0,0,0,208.29,195.57ZM80,156a16,16,0,1,1-16,16A16,16,0,0,1,80,156Zm96,0a16,16,0,1,1-16,16A16,16,0,0,1,176,156Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M112,168a32,32,0,1,1-32-32A32,32,0,0,1,112,168ZM80,32a32,32,0,1,0,32,32A32,32,0,0,0,80,32Zm96,104a32,32,0,1,0,32,32A32,32,0,0,0,176,136Zm0-40a32,32,0,1,0-32-32A32,32,0,0,0,176,96Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M230.4,219.19A8,8,0,0,1,224,232H32a8,8,0,0,1-6.4-12.8A67.88,67.88,0,0,1,53,197.51a40,40,0,1,1,53.93,0,67.42,67.42,0,0,1,21,14.29,67.42,67.42,0,0,1,21-14.29,40,40,0,1,1,53.93,0A67.85,67.85,0,0,1,230.4,219.19ZM27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,12.8,0,52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.93,0,67.42,67.42,0,0,0-21,14.29,67.42,67.42,0,0,0-21-14.29,40,40,0,1,0-53.93,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M28.4,124.8a6,6,0,0,0,8.4-1.2,54,54,0,0,1,86.4,0,6,6,0,0,0,8.4,1.19,5.59,5.59,0,0,0,1.19-1.19h0a54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.21,65.74,65.74,0,0,0-29.69-22.26,38,38,0,1,0-46.22,0A65.32,65.32,0,0,0,128,110.7a65.32,65.32,0,0,0-24.89-16.57,38,38,0,1,0-46.22,0A65.69,65.69,0,0,0,27.2,116.4,6,6,0,0,0,28.4,124.8ZM176,38a26,26,0,1,1-26,26A26,26,0,0,1,176,38ZM80,38A26,26,0,1,1,54,64,26,26,0,0,1,80,38ZM199.11,198.13a38,38,0,1,0-46.22,0A65.32,65.32,0,0,0,128,214.7a65.32,65.32,0,0,0-24.89-16.57,38,38,0,1,0-46.22,0A65.69,65.69,0,0,0,27.2,220.4a6,6,0,1,0,9.6,7.2,54,54,0,0,1,86.4,0,6,6,0,0,0,8.4,1.19,5.59,5.59,0,0,0,1.19-1.19h0a54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.21A65.74,65.74,0,0,0,199.11,198.13ZM80,142a26,26,0,1,1-26,26A26,26,0,0,1,80,142Zm96,0a26,26,0,1,1-26,26A26,26,0,0,1,176,142Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M29.6,123.2a4,4,0,0,0,5.6-.8,56,56,0,0,1,89.6,0,3.93,3.93,0,0,0,6.38,0h0a56,56,0,0,1,89.6,0,4,4,0,1,0,6.4-4.8,63.55,63.55,0,0,0-32.5-22.85,36,36,0,1,0-37.4,0,63.39,63.39,0,0,0-29.3,19,63.34,63.34,0,0,0-29.3-19,36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,28.8,117.6,4,4,0,0,0,29.6,123.2ZM148,64a28,28,0,1,1,28,28A28,28,0,0,1,148,64ZM52,64A28,28,0,1,1,80,92,28,28,0,0,1,52,64ZM194.7,198.75a36,36,0,1,0-37.4,0A63.39,63.39,0,0,0,128,217.7a63.34,63.34,0,0,0-29.3-18.95,36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,28.8,221.6a4,4,0,0,0,6.4,4.8,56,56,0,0,1,89.6,0,3.93,3.93,0,0,0,6.38,0h0a56,56,0,0,1,89.6,0,4,4,0,0,0,6.4-4.8A63.55,63.55,0,0,0,194.7,198.75ZM52,168a28,28,0,1,1,28,28A28,28,0,0,1,52,168Zm96,0a28,28,0,1,1,28,28A28,28,0,0,1,148,168Z",
                }),
            ),
        ],
    ]),
    r6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164.38,181.1a52,52,0,1,0-72.76,0,75.89,75.89,0,0,0-30,28.89,12,12,0,0,0,20.78,12,53,53,0,0,1,91.22,0,12,12,0,1,0,20.78-12A75.89,75.89,0,0,0,164.38,181.1ZM100,144a28,28,0,1,1,28,28A28,28,0,0,1,100,144Zm147.21,9.59a12,12,0,0,1-16.81-2.39c-8.33-11.09-19.85-19.59-29.33-21.64a12,12,0,0,1-1.82-22.91,20,20,0,1,0-24.78-28.3,12,12,0,1,1-21-11.6,44,44,0,1,1,73.28,48.35,92.18,92.18,0,0,1,22.85,21.69A12,12,0,0,1,247.21,153.59Zm-192.28-24c-9.48,2.05-21,10.55-29.33,21.65A12,12,0,0,1,6.41,136.79,92.37,92.37,0,0,1,29.26,115.1a44,44,0,1,1,73.28-48.35,12,12,0,1,1-21,11.6,20,20,0,1,0-24.78,28.3,12,12,0,0,1-1.82,22.91Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M243.6,148.8a6,6,0,0,1-8.4-1.2A53.58,53.58,0,0,0,192,126a6,6,0,0,1,0-12,26,26,0,1,0-25.18-32.5,6,6,0,0,1-11.62-3,38,38,0,1,1,59.91,39.63A65.69,65.69,0,0,1,244.8,140.4,6,6,0,0,1,243.6,148.8ZM189.19,213a6,6,0,0,1-2.19,8.2,5.9,5.9,0,0,1-3,.81,6,6,0,0,1-5.2-3,59,59,0,0,0-101.62,0,6,6,0,1,1-10.38-6A70.1,70.1,0,0,1,103,182.55a46,46,0,1,1,50.1,0A70.1,70.1,0,0,1,189.19,213ZM128,178a34,34,0,1,0-34-34A34,34,0,0,0,128,178ZM70,120a6,6,0,0,0-6-6A26,26,0,1,1,89.18,81.49a6,6,0,1,0,11.62-3,38,38,0,1,0-59.91,39.63A65.69,65.69,0,0,0,11.2,140.4a6,6,0,1,0,9.6,7.2A53.58,53.58,0,0,1,64,126,6,6,0,0,0,70,120Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M237,147.44a4,4,0,0,1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4,4,0,0,1-1.2-.2,36.76,36.76,0,0,1-3.8.2,4,4,0,0,1,0-8,28,28,0,1,0-27.12-35,4,4,0,0,1-7.75-2,36,36,0,1,1,54,39.48c10.81,3.85,20.51,12,27.31,23.48A4,4,0,0,1,237,147.44ZM187.46,214a4,4,0,0,1-1.46,5.46,3.93,3.93,0,0,1-2,.54,4,4,0,0,1-3.46-2,61,61,0,0,0-105.08,0,4,4,0,0,1-6.92-4,68.35,68.35,0,0,1,39.19-31,44,44,0,1,1,40.54,0A68.35,68.35,0,0,1,187.46,214ZM128,180a36,36,0,1,0-36-36A36,36,0,0,0,128,180ZM64,116A28,28,0,1,1,91.12,81a4,4,0,0,0,7.75-2A36,36,0,1,0,45.3,118.75,63.55,63.55,0,0,0,12.8,141.6a4,4,0,0,0,6.4,4.8A55.55,55.55,0,0,1,64,124a4,4,0,0,0,0-8Z",
                }),
            ),
        ],
    ]),
    c6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M249.45,69.31a12,12,0,0,0-12.51,1L212,88.43V72a20,20,0,0,0-20-20H32A20,20,0,0,0,12,72V184a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V167.57l24.94,18.14A12,12,0,0,0,256,176V80A12,12,0,0,0,249.45,69.31ZM188,180H36V76H188Zm44-27.57-20-14.54V118.11l20-14.54Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,72V184a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H192A8,8,0,0,1,200,72Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M192,72V184a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H176A16,16,0,0,1,192,72Zm58,.25a8.23,8.23,0,0,0-6.63,1.22L209.78,95.86A4,4,0,0,0,208,99.19v57.62a4,4,0,0,0,1.78,3.33l33.78,22.52a8,8,0,0,0,8.58.19,8.33,8.33,0,0,0,3.86-7.17V80A8,8,0,0,0,250,72.25Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M250.83,74.71a6,6,0,0,0-6.16.3L206,100.79V72a14,14,0,0,0-14-14H32A14,14,0,0,0,18,72V184a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V155.21L244.67,181a6,6,0,0,0,9.33-5V80A6,6,0,0,0,250.83,74.71ZM194,184a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2Zm48-19.21-36-24V115.21l36-24Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M249.89,76.47a4,4,0,0,0-4.11.2L204,104.53V72a12,12,0,0,0-12-12H32A12,12,0,0,0,20,72V184a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V151.47l41.78,27.86A4,4,0,0,0,252,176V80A4,4,0,0,0,249.89,76.47ZM196,184a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4Zm48-15.47-40-26.67V114.14l40-26.67Z",
                }),
            ),
        ],
    ]),
    A6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z",
                }),
            ),
        ],
    ]),
    h6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z",
                }),
            ),
        ],
    ]),
    Z6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,128a79.85,79.85,0,0,0-27.95-60.68L173,28.43A20,20,0,0,0,153.32,12H102.68A20,20,0,0,0,83,28.43L76,67.32a79.84,79.84,0,0,0,0,121.36l7,38.89A20,20,0,0,0,102.68,244h50.64A20,20,0,0,0,173,227.57l7.05-38.89A79.85,79.85,0,0,0,208,128ZM106,36h44l2.9,16a79.76,79.76,0,0,0-49.76,0Zm44,184H106l-2.9-16a79.76,79.76,0,0,0,49.76,0Zm-22-36a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,184Zm40-56a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V100a12,12,0,0,1,24,0v16h16A12,12,0,0,1,168,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M200,128a72,72,0,1,1-72-72A72,72,0,0,1,200,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M208,128a79.94,79.94,0,0,0-32.7-64.47l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38A79.94,79.94,0,0,0,208,128ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0ZM64,128a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,128Zm89.32,96H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM120,128V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16H128A8,8,0,0,1,120,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M175.3,63.53l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38a79.9,79.9,0,0,0,0-128.94ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0Zm50.64,192H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM168,136H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M206,128a77.92,77.92,0,0,0-32.53-63.31L167.1,29.5A14,14,0,0,0,153.32,18H102.68A14,14,0,0,0,88.9,29.5L82.53,64.69a77.87,77.87,0,0,0,0,126.62L88.9,226.5A14,14,0,0,0,102.68,238h50.64a14,14,0,0,0,13.78-11.5l6.37-35.19A77.92,77.92,0,0,0,206,128ZM100.71,31.64a2,2,0,0,1,2-1.64h50.64a2,2,0,0,1,2,1.64l4.56,25.19a77.68,77.68,0,0,0-63.7,0Zm54.58,192.72a2,2,0,0,1-2,1.64H102.68a2,2,0,0,1-2-1.64l-4.56-25.19a77.68,77.68,0,0,0,63.7,0ZM128,194a66,66,0,1,1,66-66A66.08,66.08,0,0,1,128,194Zm46-66a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V88a6,6,0,0,1,12,0v34h34A6,6,0,0,1,174,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,128a79.94,79.94,0,0,0-32.7-64.47l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38A79.94,79.94,0,0,0,208,128ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0ZM64,128a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,128Zm89.32,96H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM120,128V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16H128A8,8,0,0,1,120,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M204,128a75.94,75.94,0,0,0-32.35-62.16l-6.52-36A12,12,0,0,0,153.32,20H102.68a12,12,0,0,0-11.81,9.86l-6.52,36a75.89,75.89,0,0,0,0,124.32l6.52,36A12,12,0,0,0,102.68,236h50.64a12,12,0,0,0,11.81-9.86l6.52-36A75.94,75.94,0,0,0,204,128ZM98.74,31.29A4,4,0,0,1,102.68,28h50.64a4,4,0,0,1,3.94,3.29l5.26,29a75.69,75.69,0,0,0-69,0Zm58.52,193.42a4,4,0,0,1-3.94,3.29H102.68a4,4,0,0,1-3.94-3.29l-5.26-29a75.69,75.69,0,0,0,69,0ZM128,196a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,196Zm44-68a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z",
                }),
            ),
        ],
    ]),
    H6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M152,144a16,16,0,1,1-16-16A16,16,0,0,1,152,144Zm32-16a16,16,0,1,0,16,16A16,16,0,0,0,184,128Zm59.18,82.35a20,20,0,0,1-24.83,24.83l-23.26-6.84A84,84,0,0,1,83.72,187.11a83.2,83.2,0,0,1-22.82-6.77l-23.25,6.84A20.24,20.24,0,0,1,32,188a20,20,0,0,1-19.19-25.64l6.84-23.26A84,84,0,0,1,172.33,68.91a84,84,0,0,1,64,118.18ZM76.46,160.75A83.94,83.94,0,0,1,145,69.37,60,60,0,0,0,43.08,132.3a12,12,0,0,1,.93,9.06l-6.09,20.72L58.64,156a12,12,0,0,1,9.06.93A60.08,60.08,0,0,0,76.46,160.75ZM220,152a60,60,0,1,0-31.7,52.92,12,12,0,0,1,9.06-.93l20.72,6.09L212,189.36a12,12,0,0,1,.93-9.06A60.09,60.09,0,0,0,220,152Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M163.94,80.11h0C162.63,80,161.32,80,160,80a72,72,0,0,0-67.93,95.88h0a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M144,140a12,12,0,1,1-12-12A12,12,0,0,1,144,140Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,188,128Zm51.34,83.47a16,16,0,0,1-19.87,19.87l-24.71-7.27A80,80,0,0,1,86.43,183.42a79,79,0,0,1-25.19-7.35l-24.71,7.27a16,16,0,0,1-19.87-19.87l7.27-24.71A80,80,0,1,1,169.58,72.59a80,80,0,0,1,62.49,114.17ZM81.3,166.3a79.94,79.94,0,0,1,70.38-93.87A64,64,0,0,0,39.55,134.19a8,8,0,0,1,.63,6L32,168l27.76-8.17a8,8,0,0,1,6,.63A63.45,63.45,0,0,0,81.3,166.3Zm135.15,15.89a64,64,0,1,0-26.26,26.26,8,8,0,0,1,6-.63L224,216l-8.17-27.76A8,8,0,0,1,216.45,182.19Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M232.07,186.76A80,80,0,0,0,169.58,72.59,80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a79,79,0,0,0,25.19,7.35,80,80,0,0,0,108.33,40.65l24.71,7.27a16,16,0,0,0,19.87-19.87ZM132,152a12,12,0,1,1,12-12A12,12,0,0,1,132,152Zm-52,0a80.32,80.32,0,0,0,1.3,14.3,63.45,63.45,0,0,1-15.49-5.85,8,8,0,0,0-6-.63L32,168l8.17-27.76a8,8,0,0,0-.63-6A64,64,0,0,1,151.68,72.43,80.12,80.12,0,0,0,80,152Zm108,0a12,12,0,1,1,12-12A12,12,0,0,1,188,152Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M142,140a10,10,0,1,1-10-10A10,10,0,0,1,142,140Zm46-10a10,10,0,1,0,10,10A10,10,0,0,0,188,130Zm49.42,82A14,14,0,0,1,220,229.42l-25.46-7.49A78,78,0,0,1,87.84,181.58a77,77,0,0,1-26.42-7.65L36,181.42A14,14,0,0,1,18.58,164l7.49-25.46A78,78,0,1,1,168.19,74.43a78,78,0,0,1,61.74,112.15ZM83.86,168.87a77.92,77.92,0,0,1,71-94.68,66,66,0,1,0-117.1,60.94,6.05,6.05,0,0,1,.47,4.53l-8.17,27.76a2,2,0,0,0,2.48,2.49l27.77-8.17a6.06,6.06,0,0,1,4.53.47A65.2,65.2,0,0,0,83.86,168.87Zm134.35,14.26a66,66,0,1,0-27.08,27.08,6.06,6.06,0,0,1,4.53-.47l27.77,8.17a2,2,0,0,0,2.48-2.48l-8.17-27.77A6.05,6.05,0,0,1,218.21,183.13Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M144,140a12,12,0,1,1-12-12A12,12,0,0,1,144,140Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,188,128Zm51.34,83.47a16,16,0,0,1-19.87,19.87l-24.71-7.27A80,80,0,0,1,86.43,183.42a79,79,0,0,1-25.19-7.35l-24.71,7.27a16,16,0,0,1-19.87-19.87l7.27-24.71A80,80,0,1,1,169.58,72.59a80,80,0,0,1,62.49,114.17ZM81.3,166.3a79.94,79.94,0,0,1,70.38-93.87A64,64,0,0,0,39.55,134.19a8,8,0,0,1,.63,6L32,168l27.76-8.17a8,8,0,0,1,6,.63A63.45,63.45,0,0,0,81.3,166.3Zm135.15,15.89a64,64,0,1,0-26.26,26.26,8,8,0,0,1,6-.63L224,216l-8.17-27.76A8,8,0,0,1,216.45,182.19Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M140,140a8,8,0,1,1-8-8A8,8,0,0,1,140,140Zm48-8a8,8,0,1,0,8,8A8,8,0,0,0,188,132Zm47.5,80.6a12,12,0,0,1-14.9,14.9l-26.21-7.71A76,76,0,0,1,89.24,179.68a75,75,0,0,1-27.63-7.89L35.4,179.5a12,12,0,0,1-14.9-14.9l7.71-26.21A76,76,0,1,1,166.79,76.32a76,76,0,0,1,61,110.07Zm-149-41.28A76,76,0,0,1,158,76.05a68,68,0,1,0-122,60,4.07,4.07,0,0,1,.31,3l-8.17,27.76a4,4,0,0,0,5,5l27.76-8.17a4.07,4.07,0,0,1,3,.31A66.93,66.93,0,0,0,86.5,171.32Zm141.33,43.54-8.17-27.76a4.07,4.07,0,0,1,.31-3A68,68,0,1,0,192.08,212a4.07,4.07,0,0,1,1.89-.47,4,4,0,0,1,1.13.16l27.76,8.17a4,4,0,0,0,5-5Z",
                }),
            ),
        ],
    ]),
    M6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
                }),
            ),
        ],
    ]),
    V6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z",
                }),
            ),
        ],
    ]),
    d6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", { d: "M208,216H160L48,40H96Z", opacity: "0.2" }),
                a.createElement("path", {
                    d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M211.37,213.85,147.13,112.9,211,42.69A4,4,0,0,0,205,37.31L142.68,105.9,99.38,37.85A4,4,0,0,0,96,36H48a4,4,0,0,0-3.37,6.15L108.87,143.1,45,213.31A4,4,0,1,0,51,218.69l62.36-68.59,43.3,68.05A4,4,0,0,0,160,220h48a4,4,0,0,0,3.37-6.15ZM162.2,212,55.29,44H93.8L200.71,212Z",
                }),
            ),
        ],
    ]),
    E6 = new Map([
        [
            "bold",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M170.49,117.91l-56-36A12,12,0,0,0,96,92v72a12,12,0,0,0,18.49,10.09l56-36a12,12,0,0,0,0-20.18ZM120,142V114l21.81,14Zm118.21-73.5a28.05,28.05,0,0,0-16.93-19.14C186.4,35.91,131.29,36,128,36s-58.4-.09-93.28,13.38A28.05,28.05,0,0,0,17.79,68.52C15.15,78.72,12,97.32,12,128s3.15,49.28,5.79,59.48a28.05,28.05,0,0,0,16.93,19.14C68.21,219.55,120.36,220,127.37,220h1.26c7,0,59.16-.45,92.65-13.38a28.05,28.05,0,0,0,16.93-19.14c2.64-10.2,5.79-28.8,5.79-59.48S240.85,78.72,238.21,68.52ZM215,181.46a4,4,0,0,1-2.34,2.77C182.78,195.76,132.27,196,128.32,196h-.39c-.53,0-53.64.17-84.56-11.77A4,4,0,0,1,41,181.46c-1.88-7.24-5-23.82-5-53.46s3.15-46.22,5-53.46a4,4,0,0,1,2.34-2.77C74.29,59.83,127.39,60,127.92,60h.15c.54,0,53.64-.17,84.56,11.77A4,4,0,0,1,215,74.54c1.88,7.24,5,23.82,5,53.46S216.85,174.22,215,181.46Z",
                }),
            ),
        ],
        [
            "duotone",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z",
                    opacity: "0.2",
                }),
                a.createElement("path", {
                    d: "M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86.12,12s-54.37.18-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68C73.58,55.82,127.4,56,128.05,56s54.37-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z",
                }),
            ),
        ],
        [
            "fill",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z",
                }),
            ),
        ],
        [
            "light",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M163.33,123l-48-32A6,6,0,0,0,106,96v64a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM118,148.79V107.21L149.18,128ZM232.4,70a22,22,0,0,0-13.28-15C185,41.79,130.27,42,128,42s-57-.21-91.16,13A22,22,0,0,0,23.6,70C21.05,79.89,18,98,18,128s3.05,48.11,5.6,58a22,22,0,0,0,13.28,15C71,214.21,125.72,214,128,214h.71c6.91,0,58-.44,90.45-13a22,22,0,0,0,13.28-15c2.55-9.87,5.6-27.93,5.6-58S235,79.89,232.4,70ZM220.78,183a10,10,0,0,1-6,6.86C182.78,202.19,128.58,202,128,202s-54.71.2-86.75-12.17a10,10,0,0,1-6-6.86C32.84,173.78,30,156.78,30,128s2.84-45.78,5.22-55a10,10,0,0,1,6-6.86C72.06,54.26,123.53,54,127.76,54H128c.54,0,54.71-.2,86.75,12.17a10,10,0,0,1,6,6.86c2.38,9.19,5.22,26.19,5.22,55S223.16,173.78,220.78,183Z",
                }),
            ),
        ],
        [
            "regular",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z",
                }),
            ),
        ],
        [
            "thin",
            a.createElement(
                a.Fragment,
                null,
                a.createElement("path", {
                    d: "M162.22,124.67l-48-32A4,4,0,0,0,108,96v64a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM116,152.53V103.47L152.79,128Zm114.46-82A20,20,0,0,0,218.4,56.85C184.6,43.79,130.27,44,128,44S71.4,43.79,37.6,56.85A20,20,0,0,0,25.54,70.52C23,80.27,20,98.16,20,128s3,47.73,5.54,57.48A20,20,0,0,0,37.6,199.15C71.4,212.21,125.73,212,128,212h.71c6.89,0,57.58-.43,89.72-12.85a20,20,0,0,0,12.06-13.67C233,175.72,236,157.84,236,128S233,80.27,230.46,70.52Zm-7.74,113a12,12,0,0,1-7.21,8.22C183.14,204.19,128.57,204,128,204s-55.11.19-87.48-12.31a12,12,0,0,1-7.21-8.22C30.87,174.17,28,157,28,128s2.87-46.17,5.28-55.47a12,12,0,0,1,7.21-8.22C72.86,51.81,127.43,52,128,52s55.11-.2,87.48,12.31a12,12,0,0,1,7.21,8.22C225.13,81.83,228,99,228,128S225.13,174.17,222.72,183.47Z",
                }),
            ),
        ],
    ]),
    p6 = a.createContext({ color: "currentColor", size: "1em", weight: "regular", mirrored: !1 }),
    n = a.forwardRef((e, t) => {
        const { alt: r, color: h, size: m, weight: c, mirrored: H, children: A, weights: M, ...V } = e,
            {
                color: d = "currentColor",
                size: Z,
                weight: V2 = "regular",
                mirrored: d2 = !1,
                ...E2
            } = a.useContext(p6);
        return a.createElement(
            "svg",
            {
                ref: t,
                xmlns: "http://www.w3.org/2000/svg",
                width: m ?? Z,
                height: m ?? Z,
                fill: h ?? d,
                viewBox: "0 0 256 256",
                transform: H || d2 ? "scale(-1, 1)" : void 0,
                ...E2,
                ...V,
            },
            !!r && a.createElement("title", null, r),
            A,
            M.get(c ?? V2),
        );
    });
n.displayName = "IconBase";
const E = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: s2 }));
E.displayName = "AirplaneTiltIcon";
const v5 = E,
    p = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: g2 }));
p.displayName = "ArrowBendUpLeftIcon";
const F5 = p,
    o = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: i2 }));
o.displayName = "ArrowClockwiseIcon";
const f5 = o,
    s = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: u2 }));
s.displayName = "ArrowCounterClockwiseIcon";
const w5 = s,
    g = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: L2 }));
g.displayName = "ArrowDownIcon";
const k5 = g,
    i = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: y2 }));
i.displayName = "ArrowLeftIcon";
const C5 = i,
    u = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: v2 }));
u.displayName = "ArrowRightIcon";
const $5 = u,
    L = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: F2 }));
L.displayName = "ArrowUpIcon";
const x5 = L,
    y = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: f2 }));
y.displayName = "ArrowsClockwiseIcon";
const b5 = y,
    v = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: w2 }));
v.displayName = "ArrowsDownUpIcon";
const R5 = v,
    F = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: k2 }));
F.displayName = "ArrowsLeftRightIcon";
const S5 = F,
    f = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: C2 }));
f.displayName = "AtIcon";
const I5 = f,
    w = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: $2 }));
w.displayName = "BackpackIcon";
const N5 = w,
    k = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: x2 }));
k.displayName = "BaseballCapIcon";
const q5 = k,
    C = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: b2 }));
C.displayName = "BellIcon";
const z5 = C,
    $ = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: R2 }));
$.displayName = "BellSimpleIcon";
const j5 = $,
    x = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: S2 }));
x.displayName = "BookOpenIcon";
const P5 = x,
    b = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: I2 }));
b.displayName = "BookOpenTextIcon";
const B5 = b,
    R = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: N2 }));
R.displayName = "BookmarkSimpleIcon";
const D5 = R,
    S = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: q2 }));
S.displayName = "BootIcon";
const T5 = S,
    I = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: z2 }));
I.displayName = "BowlFoodIcon";
const U5 = I,
    N = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: j2 }));
N.displayName = "BrainIcon";
const O5 = N,
    q = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: P2 }));
q.displayName = "BriefcaseIcon";
const G5 = q,
    z = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: B2 }));
z.displayName = "CakeIcon";
const Q5 = z,
    j = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: D2 }));
j.displayName = "CalendarBlankIcon";
const W5 = j,
    P = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: T2 }));
P.displayName = "CalendarCheckIcon";
const K5 = P,
    B = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: U2 }));
B.displayName = "CameraIcon";
const X5 = B,
    D = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: O2 }));
D.displayName = "CaretDownIcon";
const J5 = D,
    T = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: G2 }));
T.displayName = "CaretLeftIcon";
const Y5 = T,
    U = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: Q2 }));
U.displayName = "CaretRightIcon";
const _5 = U,
    O = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: W2 }));
O.displayName = "ChartBarIcon";
const a7 = O,
    G = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: K2 }));
G.displayName = "ChatCircleIcon";
const e7 = G,
    Q = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: X2 }));
Q.displayName = "ChatCircleTextIcon";
const t7 = Q,
    W = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: J2 }));
W.displayName = "ChatsCircleIcon";
const l7 = W,
    K = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: Y2 }));
K.displayName = "CheckIcon";
const n7 = K,
    X = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: _2 }));
X.displayName = "CheckCircleIcon";
const m7 = X,
    J = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: a8 }));
J.displayName = "ClipboardTextIcon";
const r7 = J,
    Y = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: e8 }));
Y.displayName = "ClockIcon";
const c7 = Y,
    _ = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: t8 }));
_.displayName = "CodeIcon";
const A7 = _,
    a0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: l8 }));
a0.displayName = "CoffeeIcon";
const h7 = a0,
    e0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: n8 }));
e0.displayName = "CommandIcon";
const Z7 = e0,
    t0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: m8 }));
t0.displayName = "CopyIcon";
const H7 = t0,
    l0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: r8 }));
l0.displayName = "CrosshairIcon";
const M7 = l0,
    n0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: c8 }));
n0.displayName = "DeviceMobileIcon";
const V7 = n0,
    m0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: A8 }));
m0.displayName = "DiamondIcon";
const d7 = m0,
    r0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: h8 }));
r0.displayName = "DiamondsFourIcon";
const E7 = r0,
    c0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: Z8 }));
c0.displayName = "DotsThreeIcon";
const p7 = c0,
    A0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: H8 }));
A0.displayName = "DotsThreeVerticalIcon";
const o7 = A0,
    h0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: M8 }));
h0.displayName = "DownloadSimpleIcon";
const s7 = h0,
    Z0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: V8 }));
Z0.displayName = "DressIcon";
const g7 = Z0,
    H0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: d8 }));
H0.displayName = "EarIcon";
const i7 = H0,
    M0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: E8 }));
M0.displayName = "EnvelopeIcon";
const u7 = M0,
    V0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: p8 }));
V0.displayName = "EnvelopeSimpleIcon";
const L7 = V0,
    d0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: o8 }));
d0.displayName = "ExportIcon";
const y7 = d0,
    E0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: s8 }));
E0.displayName = "EyeIcon";
const v7 = E0,
    p0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: g8 }));
p0.displayName = "EyeSlashIcon";
const F7 = p0,
    o0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: i8 }));
o0.displayName = "FeatherIcon";
const f7 = o0,
    s0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: u8 }));
s0.displayName = "FileTextIcon";
const w7 = s0,
    g0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: L8 }));
g0.displayName = "FishIcon";
const k7 = g0,
    i0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: y8 }));
i0.displayName = "FlameIcon";
const C7 = i0,
    u0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: v8 }));
u0.displayName = "FlowerIcon";
const $7 = u0,
    L0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: F8 }));
L0.displayName = "ForkKnifeIcon";
const x7 = L0,
    y0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: f8 }));
y0.displayName = "GameControllerIcon";
const b7 = y0,
    v0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: w8 }));
v0.displayName = "GearIcon";
const R7 = v0,
    F0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: k8 }));
F0.displayName = "GearSixIcon";
const S7 = F0,
    f0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: C8 }));
f0.displayName = "GiftIcon";
const I7 = f0,
    w0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: $8 }));
w0.displayName = "GlobeIcon";
const N7 = w0,
    k0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: x8 }));
k0.displayName = "GraphIcon";
const q7 = k0,
    C0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: b8 }));
C0.displayName = "HamburgerIcon";
const z7 = C0,
    $0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: R8 }));
$0.displayName = "HandPalmIcon";
const j7 = $0,
    x0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: S8 }));
x0.displayName = "HandPointingIcon";
const P7 = x0,
    b0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: I8 }));
b0.displayName = "HandbagIcon";
const B7 = b0,
    R0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: N8 }));
R0.displayName = "HashIcon";
const D7 = R0,
    S0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: q8 }));
S0.displayName = "HeadphonesIcon";
const T7 = S0,
    I0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: z8 }));
I0.displayName = "HeartIcon";
const U7 = I0,
    N0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: j8 }));
N0.displayName = "HeartStraightIcon";
const O7 = N0,
    q0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: P8 }));
q0.displayName = "HeartbeatIcon";
const G7 = q0,
    z0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: B8 }));
z0.displayName = "HighHeelIcon";
const Q7 = z0,
    j0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: D8 }));
j0.displayName = "HighlighterCircleIcon";
const W7 = j0,
    P0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: T8 }));
P0.displayName = "HoodieIcon";
const K7 = P0,
    B0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: U8 }));
B0.displayName = "HouseIcon";
const X7 = B0,
    D0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: O8 }));
D0.displayName = "ImageIcon";
const J7 = D0,
    T0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: G8 }));
T0.displayName = "ImageSquareIcon";
const Y7 = T0,
    U0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: Q8 }));
U0.displayName = "ImagesIcon";
const _7 = U0,
    O0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: W8 }));
O0.displayName = "InstagramLogoIcon";
const ae = O0,
    G0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: K8 }));
G0.displayName = "JarIcon";
const ee = G0,
    Q0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: X8 }));
Q0.displayName = "LeafIcon";
const te = Q0,
    W0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: J8 }));
W0.displayName = "LinkSimpleIcon";
const le = W0,
    K0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: Y8 }));
K0.displayName = "ListBulletsIcon";
const ne = K0,
    X0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: _8 }));
X0.displayName = "LockKeyIcon";
const me = X0,
    J0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: a4 }));
J0.displayName = "LockSimpleIcon";
const re = J0,
    Y0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: e4 }));
Y0.displayName = "LockSimpleOpenIcon";
const ce = Y0,
    _0 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: t4 }));
_0.displayName = "MagnifyingGlassIcon";
const Ae = _0,
    a1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: l4 }));
a1.displayName = "MapPinIcon";
const he = a1,
    e1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: n4 }));
e1.displayName = "MaskHappyIcon";
const Ze = e1,
    t1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: m4 }));
t1.displayName = "MegaphoneSimpleIcon";
const He = t1,
    l1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: r4 }));
l1.displayName = "MicrophoneIcon";
const Me = l1,
    n1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: c4 }));
n1.displayName = "MinusIcon";
const Ve = n1,
    m1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: A4 }));
m1.displayName = "MusicNoteSimpleIcon";
const de = m1,
    r1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: h4 }));
r1.displayName = "MusicNotesIcon";
const Ee = r1,
    c1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: Z4 }));
c1.displayName = "NavigationArrowIcon";
const pe = c1,
    A1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: H4 }));
A1.displayName = "NotePencilIcon";
const oe = A1,
    h1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: M4 }));
h1.displayName = "NotepadIcon";
const se = h1,
    Z1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: V4 }));
Z1.displayName = "PackageIcon";
const ge = Z1,
    H1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: d4 }));
H1.displayName = "PaletteIcon";
const ie = H1,
    M1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: E4 }));
M1.displayName = "PantsIcon";
const ue = M1,
    V1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: p4 }));
V1.displayName = "PaperPlaneRightIcon";
const Le = V1,
    d1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: o4 }));
d1.displayName = "PaperPlaneTiltIcon";
const ye = d1,
    E1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: s4 }));
E1.displayName = "PaperclipIcon";
const ve = E1,
    p1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: g4 }));
p1.displayName = "PathIcon";
const Fe = p1,
    o1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: i4 }));
o1.displayName = "PauseIcon";
const fe = o1,
    s1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: u4 }));
s1.displayName = "PencilLineIcon";
const we = s1,
    g1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: L4 }));
g1.displayName = "PencilSimpleIcon";
const ke = g1,
    i1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: y4 }));
i1.displayName = "PencilSimpleLineIcon";
const Ce = i1,
    u1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: v4 }));
u1.displayName = "PhoneIcon";
const $e = u1,
    L1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: F4 }));
L1.displayName = "PlayIcon";
const xe = L1,
    y1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: f4 }));
y1.displayName = "PlusIcon";
const be = y1,
    v1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: w4 }));
v1.displayName = "RepeatIcon";
const Re = v1,
    F1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: k4 }));
F1.displayName = "RowsIcon";
const Se = F1,
    f1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: C4 }));
f1.displayName = "SealCheckIcon";
const Ie = f1,
    w1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: $4 }));
w1.displayName = "ShareFatIcon";
const Ne = w1,
    k1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: x4 }));
k1.displayName = "ShoppingBagOpenIcon";
const qe = k1,
    C1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: b4 }));
C1.displayName = "ShuffleSimpleIcon";
const ze = C1,
    $1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: R4 }));
$1.displayName = "SkipBackIcon";
const je = $1,
    x1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: S4 }));
x1.displayName = "SkipForwardIcon";
const Pe = x1,
    b1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: I4 }));
b1.displayName = "SlidersHorizontalIcon";
const Be = b1,
    R1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: N4 }));
R1.displayName = "SmileyIcon";
const De = R1,
    S1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: q4 }));
S1.displayName = "SneakerIcon";
const Te = S1,
    I1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: z4 }));
I1.displayName = "SneakerMoveIcon";
const Ue = I1,
    N1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: j4 }));
N1.displayName = "SparkleIcon";
const Oe = N1,
    q1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: P4 }));
q1.displayName = "SpeakerHighIcon";
const Ge = q1,
    z1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: B4 }));
z1.displayName = "SprayBottleIcon";
const Qe = z1,
    j1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: D4 }));
j1.displayName = "SquaresFourIcon";
const We = j1,
    P1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: T4 }));
P1.displayName = "StopIcon";
const Ke = P1,
    B1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: U4 }));
B1.displayName = "StorefrontIcon";
const Xe = B1,
    D1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: O4 }));
D1.displayName = "TShirtIcon";
const Je = D1,
    T1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: G4 }));
T1.displayName = "TextAaIcon";
const Ye = T1,
    U1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: Q4 }));
U1.displayName = "TextTIcon";
const _e = U1,
    O1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: W4 }));
O1.displayName = "ThumbsUpIcon";
const a9 = O1,
    G1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: K4 }));
G1.displayName = "TicketIcon";
const e9 = G1,
    Q1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: X4 }));
Q1.displayName = "TranslateIcon";
const t9 = Q1,
    W1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: J4 }));
W1.displayName = "TrashIcon";
const l9 = W1,
    K1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: Y4 }));
K1.displayName = "TrayIcon";
const n9 = K1,
    X1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: _4 }));
X1.displayName = "UploadSimpleIcon";
const m9 = X1,
    J1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: a6 }));
J1.displayName = "UserIcon";
const r9 = J1,
    Y1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: e6 }));
Y1.displayName = "UserCircleIcon";
const c9 = Y1,
    _1 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: t6 }));
_1.displayName = "UserPlusIcon";
const A9 = _1,
    a2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: l6 }));
a2.displayName = "UserSquareIcon";
const h9 = a2,
    e2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: n6 }));
e2.displayName = "UsersIcon";
const Z9 = e2,
    t2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: m6 }));
t2.displayName = "UsersFourIcon";
const H9 = t2,
    l2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: r6 }));
l2.displayName = "UsersThreeIcon";
const M9 = l2,
    n2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: c6 }));
n2.displayName = "VideoCameraIcon";
const V9 = n2,
    m2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: A6 }));
m2.displayName = "WarningIcon";
const d9 = m2,
    r2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: h6 }));
r2.displayName = "WarningCircleIcon";
const E9 = r2,
    c2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: Z6 }));
c2.displayName = "WatchIcon";
const p9 = c2,
    A2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: H6 }));
A2.displayName = "WechatLogoIcon";
const o9 = A2,
    h2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: M6 }));
h2.displayName = "XIcon";
const s9 = h2,
    Z2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: V6 }));
Z2.displayName = "XCircleIcon";
const g9 = Z2,
    H2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: d6 }));
H2.displayName = "XLogoIcon";
const i9 = H2,
    M2 = a.forwardRef((e, t) => a.createElement(n, { ref: t, ...e, weights: E6 }));
M2.displayName = "YoutubeLogoIcon";
const u9 = M2;
export {
    d5 as $,
    Q7 as A,
    B7 as B,
    P6 as C,
    N5 as D,
    q5 as E,
    h7 as F,
    k7 as G,
    z7 as H,
    k3 as I,
    Q5 as J,
    te as K,
    U5 as L,
    Xe as M,
    B6 as N,
    F6 as O,
    va as P,
    Pa as Q,
    Z5 as R,
    Sa as S,
    l5 as T,
    A5 as U,
    ra as V,
    _a as W,
    L5 as X,
    Y6 as Y,
    Na as Z,
    l3 as _,
    y5 as a,
    i3 as a$,
    E5 as a0,
    sa as a1,
    ga as a2,
    A3 as a3,
    la as a4,
    $3 as a5,
    ta as a6,
    Ja as a7,
    wa as a8,
    I3 as a9,
    fa as aA,
    o3 as aB,
    y3 as aC,
    _3 as aD,
    w6 as aE,
    W6 as aF,
    E3 as aG,
    aa as aH,
    Za as aI,
    Y5 as aJ,
    o5 as aK,
    d3 as aL,
    I6 as aM,
    b3 as aN,
    t5 as aO,
    L6 as aP,
    Da as aQ,
    Ma as aR,
    qa as aS,
    G6 as aT,
    x3 as aU,
    q6 as aV,
    N6 as aW,
    S3 as aX,
    a3 as aY,
    G3 as aZ,
    S6 as a_,
    Z3 as aa,
    U3 as ab,
    ja as ac,
    V5 as ad,
    r3 as ae,
    c3 as af,
    z3 as ag,
    g5 as ah,
    ba as ai,
    v6 as aj,
    $a as ak,
    i5 as al,
    w3 as am,
    f6 as an,
    H3 as ao,
    da as ap,
    z6 as aq,
    ha as ar,
    D6 as as,
    O3 as at,
    X3 as au,
    pe as av,
    he as aw,
    O6 as ax,
    f3 as ay,
    Ga as az,
    T6 as b,
    e7 as b$,
    ya as b0,
    K6 as b1,
    Qa as b2,
    t3 as b3,
    _6 as b4,
    Ua as b5,
    X6 as b6,
    Ra as b7,
    Fa as b8,
    N3 as b9,
    _5 as bA,
    ne as bB,
    Ve as bC,
    ke as bD,
    l9 as bE,
    me as bF,
    f5 as bG,
    Me as bH,
    p7 as bI,
    qe as bJ,
    se as bK,
    ae as bL,
    W5 as bM,
    i9 as bN,
    _7 as bO,
    Z7 as bP,
    M7 as bQ,
    Ee as bR,
    v5 as bS,
    O5 as bT,
    u9 as bU,
    H9 as bV,
    q7 as bW,
    G7 as bX,
    Be as bY,
    B5 as bZ,
    e9 as b_,
    H5 as ba,
    i6 as bb,
    M5 as bc,
    Y3 as bd,
    J6 as be,
    h5 as bf,
    $6 as bg,
    W3 as bh,
    K3 as bi,
    b6 as bj,
    ia as bk,
    ua as bl,
    xe as bm,
    E9 as bn,
    n7 as bo,
    fe as bp,
    j7 as bq,
    Q3 as br,
    C3 as bs,
    m9 as bt,
    s7 as bu,
    be as bv,
    x5 as bw,
    J7 as bx,
    de as by,
    s9 as bz,
    U6 as c,
    L7 as c$,
    S7 as c0,
    Z9 as c1,
    P5 as c2,
    le as c3,
    p5 as c4,
    Ia as c5,
    P3 as c6,
    Ca as c7,
    ka as c8,
    Oa as c9,
    F7 as cA,
    b5 as cB,
    v7 as cC,
    J5 as cD,
    c7 as cE,
    K5 as cF,
    F3 as cG,
    ca as cH,
    c5 as cI,
    m3 as cJ,
    Ie as cK,
    ce as cL,
    $e as cM,
    V9 as cN,
    k5 as cO,
    Le as cP,
    Ke as cQ,
    m7 as cR,
    F5 as cS,
    H7 as cT,
    w5 as cU,
    X7 as cV,
    Ae as cW,
    j5 as cX,
    f7 as cY,
    r9 as cZ,
    D5 as c_,
    na as ca,
    D3 as cb,
    q3 as cc,
    B3 as cd,
    pa as ce,
    ea as cf,
    e3 as cg,
    h3 as ch,
    e5 as ci,
    u3 as cj,
    Aa as ck,
    j3 as cl,
    Q6 as cm,
    s6 as cn,
    R3 as co,
    M3 as cp,
    C6 as cq,
    n3 as cr,
    u5 as cs,
    oa as ct,
    u6 as cu,
    Xa as cv,
    xa as cw,
    ye as cx,
    C5 as cy,
    Fe as cz,
    p9 as d,
    U7 as d$,
    R7 as d0,
    N7 as d1,
    Re as d2,
    t9 as d3,
    I5 as d4,
    Ze as d5,
    O7 as d6,
    a7 as d7,
    G5 as d8,
    Oe as d9,
    g6 as dA,
    T3 as dB,
    za as dC,
    j6 as dD,
    x6 as dE,
    Ea as dF,
    s5 as dG,
    J3 as dH,
    La as dI,
    o7 as dJ,
    M9 as dK,
    c9 as dL,
    oe as dM,
    n9 as dN,
    d9 as dO,
    w7 as dP,
    ve as dQ,
    a9 as dR,
    z5 as dS,
    De as dT,
    ie as dU,
    Se as dV,
    We as dW,
    A7 as dX,
    h9 as dY,
    g9 as dZ,
    Ne as d_,
    _e as da,
    Y7 as db,
    y7 as dc,
    Ce as dd,
    Ya as de,
    m5 as df,
    n5 as dg,
    V3 as dh,
    g3 as di,
    y6 as dj,
    a5 as dk,
    L3 as dl,
    v3 as dm,
    s3 as dn,
    Va as dp,
    Ba as dq,
    Ha as dr,
    r5 as ds,
    R6 as dt,
    Ta as du,
    p3 as dv,
    Ka as dw,
    Wa as dx,
    ma as dy,
    k6 as dz,
    b7 as e,
    we as e0,
    Ye as e1,
    W7 as e2,
    R5 as e3,
    S5 as e4,
    ze as e5,
    P7 as e6,
    D7 as e7,
    r7 as e8,
    He as e9,
    o9 as ea,
    A9 as eb,
    $5 as ec,
    l7 as ed,
    i7 as ee,
    je as ef,
    Pe as eg,
    t7 as eh,
    re as ei,
    X5 as f,
    Ge as g,
    Te as h,
    Je as i,
    d7 as j,
    E7 as k,
    ee as l,
    x7 as m,
    ge as n,
    I7 as o,
    T7 as p,
    $7 as q,
    Qe as r,
    V7 as s,
    u7 as t,
    C7 as u,
    K7 as v,
    ue as w,
    g7 as x,
    Ue as y,
    T5 as z,
};
