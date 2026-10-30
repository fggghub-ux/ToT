const SW_VERSION = "v77.259-tot-pages1";

/* litot service worker
 * 目的：
 *   1. 让页面被"添加到主屏幕"后有独立的运行上下文
 *   2. 页面在后台/息屏时，仍能通过 postMessage 触发本地通知
 *   3. 点击通知回到 App
 * 注意：HTML 不缓存（每次都要拿最新）。v76.812 起 /assets/ 下带 hash 的文件缓存在 litot-assets 里：
 *   文件名里的 hash 就是内容，新版本一定是新文件名，缓存不会让人卡在旧版。
 *   以前每次冷启动都 no-store 重新下载 5MB 的主脚本 —— 网好时快、网差时卡很久，就是「偶尔快偶尔慢」。
 *
 * v76.118: 加了「新 SW 生效时主动踢客户端刷新」的自救机制。
 *   iOS Safari PWA 的 WebKit 层会缓存 index.html + 老的 JS chunk 名，
 *   即使 Caddy 明确写了 no-cache，PWA 依然可能启动时用旧 HTML，
 *   新 chunk 404 → 白屏。localStorage 数据没丢，只是 app 挂了。
 *   新 SW 装上后 activate → clients.claim() → 逐个 postMessage 让页面 reload。
 *   页面收到 { type:'sw-refresh' } 就 location.reload() 一次，
 *   拿到最新 index.html，chunk 名对上，恢复。
 *   这样以后再撞白屏，PWA 自动就能救回来，不用重装。 */

const ASSET_CACHE = "litot-tot-assets";
/* v77.214 用户：网差时（尤其安卓）网页常常打不开。以前 HTML 每次只走网络，拿不到就是浏览器的错误页 ——
   静态文件明明都在 litot-assets 里，却因为几 KB 的 HTML 拿不到而整个打不开。
   现在每次拿到 HTML 都存一份（只留最新一份）；有存档时网络 4 秒没回来、或者直接失败，就先用存档打开，
   网络那一份在后台继续下完、存好，下次打开就是新的。没有存档（第一次打开）照旧只等网络。 */
const SHELL_CACHE = "litot-tot-shell";
const SHELL_KEY = "/ToT/__litot_shell";
const SHELL_WAIT_MS = 4000;
/* vite 产物：assets/<名字>-<8 位 hash>.js|css。不带 hash 的不缓存 */
const HASHED_ASSET = /^\/ToT\/assets\/.+-[A-Za-z0-9_-]{8}\.(js|css)$/;
const assetBase = (path) => path.replace(/-[A-Za-z0-9_-]{8}\.(js|css)$/, ".$1");

/* 存新文件时把同名旧 hash 删掉，缓存里每种文件只留最新一份，不会越攒越大 */
async function storeAsset(cache, path, response) {
    try {
        const base = assetBase(path);
        const keys = await cache.keys();
        await Promise.all(
            keys.map((k) => {
                const p = new URL(k.url).pathname;
                return p !== path && assetBase(p) === base ? cache.delete(k) : null;
            }),
        );
        await cache.put(path, response);
    } catch {}
}

/* v76.973 用户：点进来整个页面没有样式（全部变形）。Cloudflare Pages 对不存在的文件回 index.html 且状态 200；
   发版那一刻样式表请求撞上这种情况，这里以前照样按「样式表」存进 litot-assets（跨版本保留、先读缓存），
   浏览器拒绝把 HTML 当 CSS 用，之后每次启动都读到这份坏的 —— 整页没样式，直到下一次发版换了文件名。
   现在按扩展名核对 content-type：对不上的不存、已经存了的删掉，并让页面走恢复（清缓存、重新载入）。 */
function typeOk(path, response) {
    const ct = String(response.headers.get("content-type") || "").toLowerCase();
    if (/\.css$/.test(path)) return ct.includes("text/css");
    if (/\.js$/.test(path)) return ct.includes("javascript") || ct.includes("ecmascript");
    return true;
}

async function notifyAssetFailed(clientId, url) {
    try {
        const client = await self.clients.get(clientId);
        client?.postMessage?.({ type: "asset-load-failed", url, version: SW_VERSION });
    } catch {}
}

self.addEventListener("install", (e) => {
    self.skipWaiting();
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        (async () => {
            await self.clients.claim();
            /* v76.118: 顺便把 CacheStorage 里所有旧缓存清空 —— 就算之前的 SW 版本
       某天加了 fetch 缓存，也一并抹掉。防止叠加型脏缓存。 */
            try {
                const keys = await caches.keys();
                // v76.790 litot-pref 是设置（推送用哪张图标），不是缓存，留着
                // v76.812 litot-assets 是按 hash 命名的不可变文件，跨版本保留（库那一块不用每次发版都重下）
                // v77.214 litot-shell 是上一次拿到的 HTML，网差时兜底用，留着（拿到新的会覆盖）
                await Promise.all(
                    keys
                        .filter((k) => k.startsWith("litot-tot-") && k !== "litot-tot-pref" && k !== ASSET_CACHE && k !== SHELL_CACHE)
                        .map((k) => caches.delete(k)),
                );
            } catch {}
            /* 新页面用 sw-update-ready；仍向 v76.208 及更早页面发送 sw-refresh，
       让手里的旧页面能够完成这一次升级。新协调器会按 version 去重，
       两种消息只会形成一次受控刷新。 */
            try {
                const list = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
                for (const c of list.filter((c) => new URL(c.url).pathname.startsWith("/ToT/"))) {
                    try {
                        c.postMessage({ type: "sw-refresh", version: SW_VERSION });
                        c.postMessage({ type: "sw-update-ready", version: SW_VERSION });
                    } catch {}
                }
            } catch {}
        })(),
    );
});

/* v76.202：导航永远绕过 WebKit HTTP 缓存。
   不再把原 Request 直接 fetch(cache:'reload')——部分 iOS 版本会忽略该选项。
   改为给 HTML URL 加当前 SW 版本，并用 no-store 发一条全新的 GET。 */
self.addEventListener("fetch", (event) => {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin !== self.location.origin || !url.pathname.startsWith("/ToT/")) return;
    /* v77.241 测试版（/beta/）整段放过：不缓存、不拿正式版的外壳兜底（否则打开一次测试版，没网时正式版会被换成测试版的外壳） */
    if (/^\/beta(\/|$)/.test(url.pathname)) return;

    if (req.mode === "navigate") {
        /* 带扩展名的（下载安装包等）不是页面，不用存档兜底 */
        const isPage = !/\.[a-z0-9]{2,5}$/i.test(url.pathname);
        url.searchParams.set("__litot_swv", SW_VERSION);
        const net = fetch(url.toString(), {
            method: "GET",
            credentials: "include",
            cache: "no-store",
            redirect: "follow",
            headers: { Accept: "text/html,application/xhtml+xml" },
        });
        if (!isPage) {
            event.respondWith(net.catch(() => fetch(req)));
            return;
        }
        const saved = net.then(async (res) => {
            if (res.ok && String(res.headers.get("content-type") || "").includes("text/html")) {
                try {
                    await (await caches.open(SHELL_CACHE)).put(SHELL_KEY, res.clone());
                } catch {}
            }
            return res;
        });
        event.waitUntil(saved.catch(() => {}));
        event.respondWith(
            (async () => {
                let shell = null;
                try {
                    shell = await (await caches.open(SHELL_CACHE)).match(SHELL_KEY);
                } catch {}
                if (!shell) {
                    try {
                        return await saved;
                    } catch {
                        return fetch(req);
                    }
                }
                const late = new Promise((resolve) => setTimeout(() => resolve(null), SHELL_WAIT_MS));
                try {
                    const res = await Promise.race([saved, late]);
                    if (res && (res.ok || res.status < 500)) return res;
                } catch {}
                return shell;
            })(),
        );
        return;
    }

    /* 旧 HTML 若请求了已经被新部署删除的 hash chunk，SW 自己驱动 client
     去 cache-busted 根页；不依赖 main.jsx 成功启动。 */
    /* v76.812 带 hash 的静态文件：先读缓存，没有再下载并存起来 */
    if (req.method === "GET" && HASHED_ASSET.test(url.pathname)) {
        event.respondWith(
            (async () => {
                try {
                    const cache = await caches.open(ASSET_CACHE);
                    const hit = await cache.match(url.pathname);
                    if (hit && typeOk(url.pathname, hit)) return hit;
                    if (hit) await cache.delete(url.pathname); // 以前存进来的坏副本
                    const response = await fetch(req);
                    const good = response.ok && typeOk(url.pathname, response);
                    if (good && response.type === "basic") {
                        const copy = response.clone();
                        event.waitUntil(storeAsset(cache, url.pathname, copy));
                    } else if (
                        !good &&
                        (req.destination === "script" || req.destination === "style") &&
                        event.clientId
                    ) {
                        notifyAssetFailed(event.clientId, req.url);
                    }
                    return response;
                } catch {
                    return fetch(req);
                }
            })(),
        );
        return;
    }

    if (req.destination === "script") {
        event.respondWith(
            (async () => {
                const response = await fetch(req, { cache: "no-store" });
                if (!response.ok && event.clientId) {
                    try {
                        const client = await self.clients.get(event.clientId);
                        client?.postMessage?.({
                            type: "asset-load-failed",
                            url: req.url,
                            version: SW_VERSION,
                        });
                    } catch {}
                }
                return response;
            })(),
        );
    }
});

/* v76.790 推送通知的图标跟「App 图标」里选的走：页面把选择写在 Cache Storage（lib/appIcon.js syncSwIcon），SW 读不到 localStorage */
async function chosenIcon() {
    try {
        const c = await caches.open("litot-tot-pref");
        const r = await c.match("/ToT/__pref/app-icon");
        if (r && (await r.text()) === "text") return "/ToT/icon-text-192.png?v=3";
    } catch (_) {
        /* 读不到按默认 */
    }
    return "/ToT/icon-192.png?v=4";
}

// 页面通过 postMessage 让 SW 弹通知（比页面自己 new Notification 更可靠，
// 尤其是页面已经不在前台的时候）
self.addEventListener("message", (event) => {
    const data = event.data || {};
    if (data.type === "notify") {
        const { title, body, tag, icon } = data;
        event.waitUntil(
            chosenIcon().then((def) =>
                self.registration.showNotification(title || "LiToT", {
                    body: body || "",
                    tag: tag || "litot-msg",
                    icon: icon || def,
                    badge: def,
                    renotify: true,
                    silent: false,
                    data: { url: "/ToT/" },
                }),
            ),
        );
    }
    if (data.type === "ping") {
        // 心跳 —— 单纯让 SW 保持活着
        event.source?.postMessage?.({ type: "pong", at: Date.now() });
    }
});

/* 真正的 Web Push（需要后端 + VAPID；没有后端时这段不会被触发）
 *
 * v76.401：payload.body 现在可能是**他真的说的那句话** —— 服务器到点把前端
 * 提前写好的那一句照原样推过来（见 backend/worker/src/proactive.js）。
 * 所以这里一个字都不许改写、不许截断到看不懂、更不许在拿不到正文时自己编一句：
 * 锁屏上出现的内容必须和 App 打开后落进聊天的那一句完全一致。
 *
 * renotify 要有：同一个 tag 的第二条如果不 renotify，系统会静默替换，
 * 于是"他又找了你一次"这件事在锁屏上根本不会响。 */
self.addEventListener("push", (event) => {
    let payload = {};
    try {
        payload = event.data ? event.data.json() : {};
    } catch {
        payload = { body: event.data?.text?.() || "" };
    }
    event.waitUntil(
        chosenIcon().then((icon) =>
            self.registration.showNotification(payload.title || "LiToT", {
                body: payload.body || "",
                tag: payload.tag || "litot-push",
                icon,
                badge: icon,
                renotify: true,
                data: { url: payload.url || "/ToT/" },
            }),
        ),
    );
});

self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    const url = event.notification.data?.url || "/ToT/";
    event.waitUntil(
        self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
            for (const c of list.filter((c) => new URL(c.url).pathname.startsWith("/ToT/"))) {
                if ("focus" in c) return c.focus();
            }
            if (self.clients.openWindow) return self.clients.openWindow(url);
        }),
    );
});
